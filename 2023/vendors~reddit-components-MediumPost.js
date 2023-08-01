// https://www.redditstatic.com/desktop2x/vendors~reddit-components-MediumPost.3a9a26b191bf5f748c74.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-MediumPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function r(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var o, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						f = /CrOS/.test(t),
						d = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						l = /(web|hpw)os/i.test(t),
						m = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
						v = !i && !d && /macintosh/i.test(t),
						b = !s && !u && !p && !l && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !w && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : m ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (o.msedge = e, o.version = g) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : f ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : d ? o = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : l ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? o = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, y && (o.version = y)) : i ? (o = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, y && (o.version = y)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !s && !o.silk ? !o.windowsphone && i ? (o[i] = e, o.ios = e, o.osname = "iOS") : v ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : b && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var j = "";
					o.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var k = !o.windows && j.split(".")[0];
					return w || c || "ipad" == i || s && (3 == k || k >= 4 && !x) || o.silk ? o.tablet = e : (x || "iphone" == i || "ipod" == i || s || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function i(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = o(e, (function(e) {
							var n = t - r(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, r, o) {
					var s = n;
					"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (s = t(o));
					var a = "" + s.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && s[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return i([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = s, n.compareVersions = i, n.check = function(e, t, n) {
					return !s(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, o) {
				return o(e, (function(e, o, i) {
					n = r ? (r = !1, e) : t(n, e, o, i)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), r(o(e), t, n)
			}
		},
		"./node_modules/lodash/map.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayMap.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseMap.js"),
				s = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (s(e) ? r : i)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : s,
					f = arguments.length < 3;
				return c(e, i(t, 4), n, f, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return r(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return le
			}));
			var r = n("./node_modules/react/index.js");

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

			function i(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function s(e) {
				var t = i(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof i(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof i(e).HTMLElement || e instanceof HTMLElement
			}

			function f(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function d(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return o(d(e)).left + s(e).scrollLeft
			}

			function p(e) {
				return i(e).getComputedStyle(e)
			}

			function l(e) {
				var t = p(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function m(e, t, n) {
				void 0 === n && (n = !1);
				var r, a, p = d(t),
					m = o(e),
					h = c(t),
					v = {
						scrollLeft: 0,
						scrollTop: 0
					},
					b = {
						x: 0,
						y: 0
					};
				return (h || !h && !n) && (("body" !== f(t) || l(p)) && (v = (r = t) !== i(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : s(r)), c(t) ? ((b = o(t)).x += t.clientLeft, b.y += t.clientTop) : p && (b.x = u(p))), {
					x: m.left + v.scrollLeft - b.x,
					y: m.top + v.scrollTop - b.y,
					width: m.width,
					height: m.height
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

			function v(e) {
				return "html" === f(e) ? e : e.assignedSlot || e.parentNode || e.host || d(e)
			}

			function b(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(f(t)) >= 0 ? t.ownerDocument.body : c(t) && l(t) ? t : e(v(t))
					}(e),
					r = "body" === f(n),
					o = i(n),
					s = r ? [o].concat(o.visualViewport || [], l(n) ? n : []) : n,
					a = t.concat(s);
				return r ? a : a.concat(b(v(s)))
			}

			function g(e) {
				return ["table", "td", "th"].indexOf(f(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function w(e) {
				for (var t = i(e), n = y(e); n && g(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === f(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = v(e); c(t) && ["html", "body"].indexOf(f(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var x = "top",
				O = "bottom",
				j = "right",
				k = "left",
				_ = "auto",
				E = [x, O, j, k],
				S = "start",
				M = "end",
				B = "clippingParents",
				A = "viewport",
				D = "popper",
				P = "reference",
				L = E.reduce((function(e, t) {
					return e.concat([t + "-" + S, t + "-" + M])
				}), []),
				T = [].concat(E, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + S, t + "-" + M])
				}), []),
				W = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function N(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = t.get(r);
								o && e(o)
							}
						})), r.push(o)
					}(e)
				})), r
			}
			var C = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function z() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function R(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					i = void 0 === o ? C : o;
				return function(e, t, n) {
					void 0 === n && (n = i);
					var o, s, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, C), i),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						f = [],
						d = !1,
						u = {
							state: c,
							setOptions: function(n) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, i), c.options), n), c.scrollParents = {
									reference: a(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
									popper: b(t)
								};
								var o = function(e) {
									var t = N(e);
									return W.reduce((function(e, n) {
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
								}([].concat(r, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var i = o({
											state: c,
											name: t,
											instance: u,
											options: r
										});
										f.push(i || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!d) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (z(t, n)) {
										c.rects = {
											reference: m(t, w(n), "fixed" === c.options.strategy),
											popper: h(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[r],
													i = o.fn,
													s = o.options,
													a = void 0 === s ? {} : s,
													f = o.name;
												"function" == typeof i && (c = i({
													state: c,
													options: a,
													name: f,
													instance: u
												}) || c)
											} else c.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return s || (s = new Promise((function(e) {
									Promise.resolve().then((function() {
										s = void 0, e(o())
									}))
								}))), s
							}),
							destroy: function() {
								p(), d = !0
							}
						};
					if (!z(e, t)) return u;

					function p() {
						f.forEach((function(e) {
							return e()
						})), f = []
					}
					return u.setOptions(n).then((function(e) {
						!d && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var q = {
				passive: !0
			};

			function H(e) {
				return e.split("-")[0]
			}

			function U(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function I(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					i = o ? H(o) : null,
					s = o ? U(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (i) {
					case x:
						t = {
							x: a,
							y: n.y - r.height
						};
						break;
					case O:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case j:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case k:
						t = {
							x: n.x - r.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var f = i ? V(i) : null;
				if (null != f) {
					var d = "y" === f ? "height" : "width";
					switch (s) {
						case S:
							t[f] = Math.floor(t[f]) - Math.floor(n[d] / 2 - r[d] / 2);
							break;
						case M:
							t[f] = Math.floor(t[f]) + Math.ceil(n[d] / 2 - r[d] / 2)
					}
				}
				return t
			}
			var F = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function X(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					s = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					f = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(s),
					p = u.x,
					l = u.y,
					m = s.hasOwnProperty("x"),
					h = s.hasOwnProperty("y"),
					v = k,
					b = x,
					g = window;
				if (f) {
					var y = w(n);
					y === i(n) && (y = d(n)), o === x && (b = O, l -= y.clientHeight - r.height, l *= c ? 1 : -1), o === k && (v = j, p -= y.clientWidth - r.width, p *= c ? 1 : -1)
				}
				var _, E = Object.assign({
					position: a
				}, f && F);
				return c ? Object.assign(Object.assign({}, E), {}, ((_ = {})[b] = h ? "0" : "", _[v] = m ? "0" : "", _.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + l + "px)" : "translate3d(" + p + "px, " + l + "px, 0)", _)) : Object.assign(Object.assign({}, E), {}, ((t = {})[b] = h ? l + "px" : "", t[v] = m ? p + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Y(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var G = {
				start: "end",
				end: "start"
			};

			function J(e) {
				return e.replace(/start|end/g, (function(e) {
					return G[e]
				}))
			}

			function $(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var r = t;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
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

			function Z(e, t) {
				return t === A ? Q(function(e) {
					var t = i(e),
						n = d(e),
						r = t.visualViewport,
						o = n.clientWidth,
						s = n.clientHeight,
						a = 0,
						c = 0;
					return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
						width: o,
						height: s,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = d(e),
						n = s(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						i = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: a,
						y: c
					}
				}(d(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = b(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? w(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && $(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					i = o[0],
					s = o.reduce((function(t, n) {
						var r = Z(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
					}), Z(e, i));
				return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
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

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					i = void 0 === r ? e.placement : r,
					s = n.boundary,
					c = void 0 === s ? B : s,
					f = n.rootBoundary,
					u = void 0 === f ? A : f,
					p = n.elementContext,
					l = void 0 === p ? D : p,
					m = n.altBoundary,
					h = void 0 !== m && m,
					v = n.padding,
					b = void 0 === v ? 0 : v,
					g = te("number" != typeof b ? b : ne(b, E)),
					y = l === D ? P : D,
					w = e.elements.reference,
					k = e.rects.popper,
					_ = e.elements[h ? y : l],
					S = ee(a(_) ? _ : _.contextElement || d(e.elements.popper), c, u),
					M = o(w),
					L = I({
						reference: M,
						element: k,
						strategy: "absolute",
						placement: i
					}),
					T = Q(Object.assign(Object.assign({}, k), L)),
					W = l === D ? T : M,
					N = {
						top: S.top - W.top + g.top,
						bottom: W.bottom - S.bottom + g.bottom,
						left: S.left - W.left + g.left,
						right: W.right - S.right + g.right
					},
					C = e.modifiersData.offset;
				if (l === D && C) {
					var z = C[i];
					Object.keys(N).forEach((function(e) {
						var t = [j, O].indexOf(e) >= 0 ? 1 : -1,
							n = [x, O].indexOf(e) >= 0 ? "y" : "x";
						N[e] += z[n] * t
					}))
				}
				return N
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function ie(e, t, n) {
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

			function se(e) {
				return [x, j, O, k].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = R({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								r = e.options,
								o = r.scroll,
								s = void 0 === o || o,
								a = r.resize,
								c = void 0 === a || a,
								f = i(t.elements.popper),
								d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return s && d.forEach((function(e) {
									e.addEventListener("scroll", n.update, q)
								})), c && f.addEventListener("resize", n.update, q),
								function() {
									s && d.forEach((function(e) {
										e.removeEventListener("scroll", n.update, q)
									})), c && f.removeEventListener("resize", n.update, q)
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
							t.modifiersData[n] = I({
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
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								i = n.adaptive,
								s = void 0 === i || i,
								a = {
									placement: H(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), X(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: s
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), X(Object.assign(Object.assign({}, a), {}, {
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
									r = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && f(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
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
										var r = t.elements[e],
											o = t.attributes[e] || {},
											i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(r) && f(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
											r.removeAttribute(e)
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
								r = e.name,
								o = n.offset,
								i = void 0 === o ? [0, 0] : o,
								s = T.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = H(e),
											o = [k, x].indexOf(r) >= 0 ? -1 : 1,
											i = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											s = i[0],
											a = i[1];
										return s = s || 0, a = (a || 0) * o, [k, j].indexOf(r) >= 0 ? {
											x: a,
											y: s
										} : {
											x: s,
											y: a
										}
									}(n, t.rects, i), e
								}), {}),
								a = s[t.placement],
								c = a.x,
								f = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = s
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name;
							if (!t.modifiersData[r]._skip) {
								for (var o = n.mainAxis, i = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, c = n.fallbackPlacements, f = n.padding, d = n.boundary, u = n.rootBoundary, p = n.altBoundary, l = n.flipVariations, m = void 0 === l || l, h = n.allowedAutoPlacements, v = t.options.placement, b = H(v), g = c || (b === v || !m ? [Y(v)] : function(e) {
										if (H(e) === _) return [];
										var t = Y(e);
										return [J(e), t, J(t)]
									}(v)), y = [v].concat(g).reduce((function(e, n) {
										return e.concat(H(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												i = n.rootBoundary,
												s = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												f = void 0 === c ? T : c,
												d = U(r),
												u = (d ? a ? L : L.filter((function(e) {
													return U(e) === d
												})) : E).filter((function(e) {
													return f.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: i,
														padding: s
													})[H(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: d,
											rootBoundary: u,
											padding: f,
											flipVariations: m,
											allowedAutoPlacements: h
										}) : n)
									}), []), w = t.rects.reference, M = t.rects.popper, B = new Map, A = !0, D = y[0], P = 0; P < y.length; P++) {
									var W = y[P],
										N = H(W),
										C = U(W) === S,
										z = [x, O].indexOf(N) >= 0,
										R = z ? "width" : "height",
										q = re(t, {
											placement: W,
											boundary: d,
											rootBoundary: u,
											altBoundary: p,
											padding: f
										}),
										V = z ? C ? j : k : C ? O : x;
									w[R] > M[R] && (V = Y(V));
									var I = Y(V),
										F = [];
									if (i && F.push(q[N] <= 0), a && F.push(q[V] <= 0, q[I] <= 0), F.every((function(e) {
											return e
										}))) {
										D = W, A = !1;
										break
									}
									B.set(W, F)
								}
								if (A)
									for (var X = function(e) {
											var t = y.find((function(t) {
												var n = B.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return D = t, "break"
										}, K = m ? 3 : 1; K > 0; K--) {
										if ("break" === X(K)) break
									}
								t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0)
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
								r = e.name,
								o = n.mainAxis,
								i = void 0 === o || o,
								s = n.altAxis,
								a = void 0 !== s && s,
								c = n.boundary,
								f = n.rootBoundary,
								d = n.altBoundary,
								u = n.padding,
								p = n.tether,
								l = void 0 === p || p,
								m = n.tetherOffset,
								v = void 0 === m ? 0 : m,
								b = re(t, {
									boundary: c,
									rootBoundary: f,
									padding: u,
									altBoundary: d
								}),
								g = H(t.placement),
								y = U(t.placement),
								_ = !y,
								E = V(g),
								M = "x" === E ? "y" : "x",
								B = t.modifiersData.popperOffsets,
								A = t.rects.reference,
								D = t.rects.popper,
								P = "function" == typeof v ? v(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : v,
								L = {
									x: 0,
									y: 0
								};
							if (B) {
								if (i) {
									var T = "y" === E ? x : k,
										W = "y" === E ? O : j,
										N = "y" === E ? "height" : "width",
										C = B[E],
										z = B[E] + b[T],
										R = B[E] - b[W],
										q = l ? -D[N] / 2 : 0,
										I = y === S ? A[N] : D[N],
										F = y === S ? -D[N] : -A[N],
										X = t.elements.arrow,
										K = l && X ? h(X) : {
											width: 0,
											height: 0
										},
										Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										G = Y[T],
										J = Y[W],
										$ = oe(0, A[N], K[N]),
										Q = _ ? A[N] / 2 - q - $ - G - P : I - $ - G - P,
										Z = _ ? -A[N] / 2 + q + $ + J + P : F + $ + J + P,
										ee = t.elements.arrow && w(t.elements.arrow),
										te = ee ? "y" === E ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][E] : 0,
										ie = B[E] + Q - ne - te,
										se = B[E] + Z - ne,
										ae = oe(l ? Math.min(z, ie) : z, C, l ? Math.max(R, se) : R);
									B[E] = ae, L[E] = ae - C
								}
								if (a) {
									var ce = "x" === E ? x : k,
										fe = "x" === E ? O : j,
										de = B[M],
										ue = oe(de + b[ce], de, de - b[fe]);
									B[M] = ue, L[M] = ue - de
								}
								t.modifiersData[r] = L
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								r = e.name,
								o = n.elements.arrow,
								i = n.modifiersData.popperOffsets,
								s = H(n.placement),
								a = V(s),
								c = [k, j].indexOf(s) >= 0 ? "height" : "width";
							if (o && i) {
								var f = n.modifiersData[r + "#persistent"].padding,
									d = h(o),
									u = "y" === a ? x : k,
									p = "y" === a ? O : j,
									l = n.rects.reference[c] + n.rects.reference[a] - i[a] - n.rects.popper[c],
									m = i[a] - n.rects.reference[a],
									v = w(o),
									b = v ? "y" === a ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
									g = l / 2 - m / 2,
									y = f[u],
									_ = b - d[c] - f[p],
									E = b / 2 - d[c] / 2 + g,
									S = oe(y, E, _),
									M = a;
								n.modifiersData[r] = ((t = {})[M] = S, t.centerOffset = S - E, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								s = n.padding,
								a = void 0 === s ? 0 : s;
							null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && $(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, E))
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
								r = t.rects.reference,
								o = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								s = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								c = ie(s, r),
								f = ie(a, o, i),
								d = se(c),
								u = se(f);
							t.modifiersData[n] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: f,
								isReferenceHidden: d,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": d,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				fe = n.n(ce),
				de = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				pe = [],
				le = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						i = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						s = r.useState({
							styles: {
								popper: {
									position: i.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = s[0],
						c = s[1],
						f = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									c({
										styles: de(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: de(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						d = r.useMemo((function() {
							var e = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [f, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return fe()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]),
						u = r.useRef();
					return ue((function() {
						u.current && u.current.setOptions(d)
					}), [d]), ue((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || ae)(e, t, d);
							return u.current = r,
								function() {
									r.destroy(), u.current = null
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
				r = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, s) {
						if (t === s) return !0;
						if (t && s && "object" == typeof t && "object" == typeof s) {
							if (t.constructor !== s.constructor) return !1;
							var a, c, f, d;
							if (Array.isArray(t)) {
								if ((a = t.length) != s.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], s[c])) return !1;
								return !0
							}
							if (r && t instanceof Map && s instanceof Map) {
								if (t.size !== s.size) return !1;
								for (d = t.entries(); !(c = d.next()).done;)
									if (!s.has(c.value[0])) return !1;
								for (d = t.entries(); !(c = d.next()).done;)
									if (!e(c.value[1], s.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && s instanceof Set) {
								if (t.size !== s.size) return !1;
								for (d = t.entries(); !(c = d.next()).done;)
									if (!s.has(c.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(s)) {
								if ((a = t.length) != s.length) return !1;
								for (c = a; 0 != c--;)
									if (t[c] !== s[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
							if ((a = (f = Object.keys(t)).length) !== Object.keys(s).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(s, f[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== f[c] && "__v" !== f[c] && "__o" !== f[c] || !t.$$typeof) && !e(t[f[c]], s[f[c]])) return !1;
							return !0
						}
						return t != t && s != s
					}(e, t)
				} catch (s) {
					if ((s.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw s
				}
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-MediumPost.3a9a26b191bf5f748c74.js.map