// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.eb69bf115fd2baa93519.js
// Retrieved at 3/22/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function s(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var o, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						v = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !g && /[^-]mobi/i.test(t),
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
					} : f ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
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
					} : m ? (o = {
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
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var E = !o.windows && j.split(".")[0];
					return g || d || "ipad" == r || i && (3 == E || E >= 4 && !w) || o.silk ? o.tablet = e : (w || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = o(e, (function(e) {
							var n = t - s(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, o) {
				return o(e, (function(e, o, r) {
					n = s ? (s = !1, e) : t(n, e, o, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), s(o(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var s = n("./node_modules/react/index.js");

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

			function p(e) {
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					s = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + s)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, p = l(t),
					f = o(e),
					b = d(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== c(t) || m(p)) && (h = (s = t) !== r(s) && d(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), d(t) ? ((x = o(t)).x += t.clientLeft, x.y += t.clientTop) : p && (x.x = u(p))), {
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
					s = "body" === c(n),
					o = r(n),
					i = s ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(x(h(i)))
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
			var w = "top",
				O = "bottom",
				j = "right",
				E = "left",
				P = "auto",
				k = [w, O, j, E],
				C = "start",
				_ = "end",
				T = "clippingParents",
				S = "viewport",
				N = "popper",
				M = "reference",
				I = k.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + _])
				}), []),
				A = [].concat(k, [P]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + _])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					n = new Set,
					s = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(s) {
							if (!n.has(s)) {
								var o = t.get(s);
								o && e(o)
							}
						})), s.push(o)
					}(e)
				})), s
			}
			var F = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function R() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function D(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					o = t.defaultOptions,
					r = void 0 === o ? F : o;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var o, i, d = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), r),
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
								var o = function(e) {
									var t = B(e);
									return L.reduce((function(e, n) {
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
								}([].concat(s, d.options.modifiers)));
								return d.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), d.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: d,
											name: t,
											instance: u,
											options: s
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
									if (R(t, n)) {
										d.rects = {
											reference: f(t, g(n), "fixed" === d.options.strategy),
											popper: b(n)
										}, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach((function(e) {
											return d.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < d.orderedModifiers.length; s++)
											if (!0 !== d.reset) {
												var o = d.orderedModifiers[s],
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
											} else d.reset = !1, s = -1
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
								p(), l = !0
							}
						};
					if (!R(e, t)) return u;

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

			function U(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var t, n = e.reference,
					s = e.element,
					o = e.placement,
					r = o ? V(o) : null,
					i = o ? H(o) : null,
					a = n.x + n.width / 2 - s.width / 2,
					d = n.y + n.height / 2 - s.height / 2;
				switch (r) {
					case w:
						t = {
							x: a,
							y: n.y - s.height
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
							y: d
						};
						break;
					case E:
						t = {
							x: n.x - s.width,
							y: d
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var c = r ? U(r) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (i) {
						case C:
							t[c] = Math.floor(t[c]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case _:
							t[c] = Math.floor(t[c]) + Math.ceil(n[l] / 2 - s[l] / 2)
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

			function K(e) {
				var t, n = e.popper,
					s = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					d = e.gpuAcceleration,
					c = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							s = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * s) / s || 0,
							y: Math.round(n * s) / s || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = E,
					x = w,
					v = window;
				if (c) {
					var y = g(n);
					y === r(n) && (y = l(n)), o === w && (x = O, m -= y.clientHeight - s.height, m *= d ? 1 : -1), o === E && (h = j, p -= y.clientWidth - s.width, p *= d ? 1 : -1)
				}
				var P, k = Object.assign({
					position: a
				}, c && z);
				return d ? Object.assign(Object.assign({}, k), {}, ((P = {})[x] = b ? "0" : "", P[h] = f ? "0" : "", P.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", P)) : Object.assign(Object.assign({}, k), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var J = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function G(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return J[e]
				}))
			}
			var Z = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return Z[e]
				}))
			}

			function Q(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var s = t;
					do {
						if (s && e.isSameNode(s)) return !0;
						s = s.parentNode || s.host
					} while (s)
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
				return t === S ? Y(function(e) {
					var t = r(e),
						n = l(e),
						s = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						d = 0;
					return s && (o = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, d = s.offsetTop)), {
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
						n = i(e),
						s = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						d = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: d
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && d(e) ? g(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Q(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(s, [n]),
					r = o[0],
					i = o.reduce((function(t, n) {
						var s = $(e, n);
						return t.top = Math.max(s.top, t.top), t.right = Math.min(s.right, t.right), t.bottom = Math.min(s.bottom, t.bottom), t.left = Math.max(s.left, t.left), t
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

			function se(e, t) {
				void 0 === t && (t = {});
				var n = t,
					s = n.placement,
					r = void 0 === s ? e.placement : s,
					i = n.boundary,
					d = void 0 === i ? T : i,
					c = n.rootBoundary,
					u = void 0 === c ? S : c,
					p = n.elementContext,
					m = void 0 === p ? N : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, k)),
					y = m === N ? M : N,
					g = e.elements.reference,
					E = e.rects.popper,
					P = e.elements[b ? y : m],
					C = ee(a(P) ? P : P.contextElement || l(e.elements.popper), d, u),
					_ = o(g),
					I = q({
						reference: _,
						element: E,
						strategy: "absolute",
						placement: r
					}),
					A = Y(Object.assign(Object.assign({}, E), I)),
					L = m === N ? A : _,
					B = {
						top: C.top - L.top + v.top,
						bottom: L.bottom - C.bottom + v.bottom,
						left: C.left - L.left + v.left,
						right: L.right - C.right + v.right
					},
					F = e.modifiersData.offset;
				if (m === N && F) {
					var R = F[r];
					Object.keys(B).forEach((function(e) {
						var t = [j, O].indexOf(e) >= 0 ? 1 : -1,
							n = [w, O].indexOf(e) >= 0 ? "y" : "x";
						B[e] += R[n] * t
					}))
				}
				return B
			}

			function oe(e, t, n) {
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
				return [w, j, O, E].some((function(t) {
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
								s = e.options,
								o = s.scroll,
								i = void 0 === o || o,
								a = s.resize,
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
							t.modifiersData[n] = q({
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
								s = n.gpuAcceleration,
								o = void 0 === s || s,
								r = n.adaptive,
								i = void 0 === r || r,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), K(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), K(Object.assign(Object.assign({}, a), {}, {
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
									s = t.attributes[e] || {},
									o = t.elements[e];
								d(o) && c(o) && (Object.assign(o.style, n), Object.keys(s).forEach((function(e) {
									var t = s[e];
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
										var s = t.elements[e],
											o = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										d(s) && c(s) && (Object.assign(s.style, r), Object.keys(o).forEach((function(e) {
											s.removeAttribute(e)
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
								s = e.name,
								o = n.offset,
								r = void 0 === o ? [0, 0] : o,
								i = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = V(e),
											o = [E, w].indexOf(s) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [E, j].indexOf(s) >= 0 ? {
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
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += c), t.modifiersData[s] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name;
							if (!t.modifiersData[s]._skip) {
								for (var o = n.mainAxis, r = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, d = n.fallbackPlacements, c = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), v = d || (x === h || !f ? [G(h)] : function(e) {
										if (V(e) === P) return [];
										var t = G(e);
										return [X(e), t, X(t)]
									}(h)), y = [h].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === P ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												o = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												d = n.allowedAutoPlacements,
												c = void 0 === d ? A : d,
												l = H(s),
												u = (l ? a ? I : I.filter((function(e) {
													return H(e) === l
												})) : k).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: o,
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
									}), []), g = t.rects.reference, _ = t.rects.popper, T = new Map, S = !0, N = y[0], M = 0; M < y.length; M++) {
									var L = y[M],
										B = V(L),
										F = H(L) === C,
										R = [w, O].indexOf(B) >= 0,
										D = R ? "width" : "height",
										W = se(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: c
										}),
										U = R ? F ? j : E : F ? O : w;
									g[D] > _[D] && (U = G(U));
									var q = G(U),
										z = [];
									if (r && z.push(W[B] <= 0), a && z.push(W[U] <= 0, W[q] <= 0), z.every((function(e) {
											return e
										}))) {
										N = L, S = !1;
										break
									}
									T.set(L, z)
								}
								if (S)
									for (var K = function(e) {
											var t = y.find((function(t) {
												var n = T.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, J = f ? 3 : 1; J > 0; J--) {
										if ("break" === K(J)) break
									}
								t.placement !== N && (t.modifiersData[s]._skip = !0, t.placement = N, t.reset = !0)
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
								s = e.name,
								o = n.mainAxis,
								r = void 0 === o || o,
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
								x = se(t, {
									boundary: d,
									rootBoundary: c,
									padding: u,
									altBoundary: l
								}),
								v = V(t.placement),
								y = H(t.placement),
								P = !y,
								k = U(v),
								_ = "x" === k ? "y" : "x",
								T = t.modifiersData.popperOffsets,
								S = t.rects.reference,
								N = t.rects.popper,
								M = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								I = {
									x: 0,
									y: 0
								};
							if (T) {
								if (r) {
									var A = "y" === k ? w : E,
										L = "y" === k ? O : j,
										B = "y" === k ? "height" : "width",
										F = T[k],
										R = T[k] + x[A],
										D = T[k] - x[L],
										W = m ? -N[B] / 2 : 0,
										q = y === C ? S[B] : N[B],
										z = y === C ? -N[B] : -S[B],
										K = t.elements.arrow,
										J = m && K ? b(K) : {
											width: 0,
											height: 0
										},
										G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Z = G[A],
										X = G[L],
										Q = oe(0, S[B], J[B]),
										Y = P ? S[B] / 2 - W - Q - Z - M : q - Q - Z - M,
										$ = P ? -S[B] / 2 + W + Q + X + M : z + Q + X + M,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										re = T[k] + Y - ne - te,
										ie = T[k] + $ - ne,
										ae = oe(m ? Math.min(R, re) : R, F, m ? Math.max(D, ie) : D);
									T[k] = ae, I[k] = ae - F
								}
								if (a) {
									var de = "x" === k ? w : E,
										ce = "x" === k ? O : j,
										le = T[_],
										ue = oe(le + x[de], le, le - x[ce]);
									T[_] = ue, I[_] = ue - le
								}
								t.modifiersData[s] = I
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								s = e.name,
								o = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								i = V(n.placement),
								a = U(i),
								d = [E, j].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var c = n.modifiersData[s + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? w : E,
									p = "y" === a ? O : j,
									m = n.rects.reference[d] + n.rects.reference[a] - r[a] - n.rects.popper[d],
									f = r[a] - n.rects.reference[a],
									h = g(o),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									y = c[u],
									P = x - l[d] - c[p],
									k = x / 2 - l[d] / 2 + v,
									C = oe(y, k, P),
									_ = a;
								n.modifiersData[s] = ((t = {})[_] = C, t.centerOffset = C - k, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								o = n.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Q(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, k))
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
								s = t.rects.reference,
								o = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = se(t, {
									elementContext: "reference"
								}),
								a = se(t, {
									altBoundary: !0
								}),
								d = re(i, s),
								c = re(a, o, r),
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
							s = t[1];
						return e[n] = s, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? s.useLayoutEffect : s.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var o = s.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = s.useState({
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
						c = s.useMemo((function() {
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
						l = s.useMemo((function() {
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
						u = s.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var s = (n.createPopper || ae)(e, t, l);
							return u.current = s,
								function() {
									s.destroy(), u.current = null
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
				s = "function" == typeof Map,
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
							if (s && t instanceof Map && i instanceof Map) {
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
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
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
			var s = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const d = i();
				Object(s.a)(e, a, d) ? n(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
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
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: d.url.replace(s.a.redditUrl, ""),
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
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(i.b, c({
				className: Object(r.a)(d.a.CallToActionButton, e, {
					[d.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = c[e].belongsTo.id;
					m(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: s,
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("index~reddit-components-Econ-Prediction"), n.e("index")]).then(n.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("index~reddit-components-Econ-Prediction"), n.e("index")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
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
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
					o = t.status === d.a.Closed,
					l = Object(i.e)(t => Object(c.U)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: f.a.container
				}, r.a.createElement("div", {
					className: f.a.label
				}, r.a.createElement("span", null, null == l ? void 0 : l.displayText), n && r.a.createElement("span", {
					className: Object(s.a)(f.a.badge, f.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(s.a)(f.a.badge, f.a.ended)
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
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					a = Object(l.a)(n),
					p = s && Object(i.c)(s.eventStart, s.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, o.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: n
				}), !a && p && o.a.createElement(c.a, {
					className: m.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(c);
			var u = e => o.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", b.a),
				v = h.a.span("PostEventPastText", b.a),
				y = h.a.span("PostEventNowText", b.a),
				g = h.a.span("Container", b.a),
				w = h.a.wrapped(u, "CalendarIcon", b.a),
				O = h.a.wrapped(p, "LiveIcon", b.a),
				j = h.a.div("LoadingState", b.a);
			class E extends s.Component {
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
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: a,
						eventStart: d
					} = n, c = Object(r.e)(d, s);
					let l, u;
					if (this.state.mounted || c === r.a.Live) l = o.a.createElement(m.c, {
						startTime: d,
						endTime: s,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(j, {
							className: e
						})
					}
					if (a) u = o.a.createElement(y, null, o.a.createElement(O, null), l);
					else if (c === r.a.Future) u = o.a.createElement(x, null, o.a.createElement(w, null), l);
					else {
						if (c !== r.a.Past) return null;
						u = o.a.createElement(v, null, o.a.createElement(w, null), l)
					}
					return o.a.createElement(g, {
						className: e
					}, u)
				}
			}
			t.a = E
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				w = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				j = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				E = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				P = n("./src/reddit/selectors/moderatorPermissions.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/lib/ads/index.ts"),
				T = n("./src/lib/classNames/index.ts"),
				S = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				M = n("./src/reddit/components/AwardBadges/index.tsx"),
				I = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				A = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = n("./src/reddit/components/Flatlist/index.tsx"),
				F = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = n("./src/reddit/components/ModModeReports/index.tsx"),
				V = n("./src/reddit/components/ModModeReports/helpers.ts"),
				H = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				U = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				K = n("./src/reddit/components/PostMedia/index.tsx"),
				J = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Z = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = n.n(Z);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Y = () => o.a.createElement("div", {
					className: X.a.container
				}, o.a.createElement(G.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: X.a.metaText
				}, Q._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ee = n("./src/reddit/components/PostTitle/index.tsx"),
				te = n("./src/reddit/components/PostTopLine/index.tsx"),
				ne = n("./src/reddit/components/SourceLink/index.tsx"),
				se = n("./src/reddit/constants/postLayout.ts"),
				oe = n("./src/reddit/contexts/InsideOverlay.tsx"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/helpers/isCrosspost.ts"),
				de = n("./src/reddit/helpers/postEvent.ts"),
				ce = n("./src/reddit/models/Audio/index.ts"),
				le = n("./src/reddit/constants/experiments.ts"),
				ue = n("./src/reddit/helpers/chooseVariant/index.ts"),
				pe = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const me = Object(a.a)(k.N, e => e.some(pe.c)),
				fe = Object(a.a)(me, e => e),
				be = (e, t) => Object(ue.c)(e, {
					experimentName: le.oc,
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
				we = n("./src/reddit/selectors/i18n/index.ts"),
				Oe = n("./src/reddit/components/LargePost/index.m.less"),
				je = n.n(Oe);
			const Ee = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(k.N)(e, {
						listingKey: n
					}) : void 0
				},
				Pe = Object(r.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: O.a,
					hideNSFWPref: C.F,
					flairStyleTemplate: re.V,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: C.P,
					isActive: k.j,
					showPromotedCTA: xe.a,
					moderatorPermissions: P.l,
					modModeEnabled: re.T,
					posts: Ee,
					postHeightVariant: be,
					shouldShowNsfwListingBelow: we.b,
					showEditFlair: he.a,
					showAwardsPlaque: E.a,
					isInModNotesExperiment: (e, {
						subreddit: t
					}) => !!t && Object(j.a)(e, t.id)
				}), (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const s = n === w.a.upvoted ? Object(p.kb)(t) : Object(p.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(p.gb)(t)),
					onOpenReportsDropdown: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				ke = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: m,
						forceLoadMedia: w,
						hideNSFWPref: O,
						hostPostData: j,
						imageGalleryCurrentItem: E,
						inSubredditOrProfile: P = !1,
						isCommentsPage: k,
						isCurrentUserProfilePost: C,
						isFrontpage: G,
						isGalleryTileLayoutDefault: Z,
						isInModNotesExperiment: X,
						isLoggedIn: Q,
						isOverlay: oe,
						isTopicPage: re,
						isCommentCountAnimationEnabled: ie,
						isVoteCountAnimationEnabled: ue,
						isCountAnimShadowTestEnabled: pe,
						listingIndex: me,
						listingKey: fe,
						moderatorPermissions: be,
						modModeEnabled: he,
						onClickPost: xe,
						onIgnoreReports: ye,
						onOpenReportsDropdown: we,
						post: Oe,
						postHeightVariant: Ee,
						scrollerItemRef: Pe,
						shouldShowGalleryTileOption: ke,
						shouldShowNsfwListingBelow: Ce,
						showAwardsPlaque: _e,
						showEditFlair: Te,
						showPromotedCTA: Se,
						subredditOrProfile: Ne,
						userIsOp: Me,
						postId: Ie,
						postIds: Ae,
						onceInViewport: Le
					} = e, Be = !!e.redditStyle || !!e["data-redditstyle"], Fe = Be ? void 0 : m, Re = Object(l.a)(be), De = he && Re, We = Object(d.a)(be), Ve = Object(c.a)(be), He = Object(V.c)(Oe), Ue = Object(D.d)(Oe), qe = !!Oe.media && Oe.media.type === y.o.RTJSON, ze = Me && qe, Ke = n ? n - z.a : void 0, Je = !!Oe.recommendationContext, Ge = !(G && Q || re) || Je && Q, Ze = (e => e === le.we.OnlyTitles)(Ee) && !Object(ae.a)(Oe), Xe = (e => e === le.we.MediumHeight)(Ee) && !Object(ae.a)(Oe), Qe = (e => {
						var t;
						const {
							post: n,
							postIds: s,
							posts: o
						} = e;
						if (!Object(g.r)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = s && 0 === s.indexOf(n.id),
							i = s && 1 === s.indexOf(n.id),
							a = o && o[1] && Object(g.r)(o[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), Ye = !!(null == j ? void 0 : j.shouldShowLinkedPosts), $e = (!P || Ye || Ce) && !Oe.isSponsored, et = Object(_.t)(Oe, E), {
						source: tt
					} = et, nt = Object(s.useRef)(null), st = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Le || Le(me))
						})
					}, [Le, me]);
					return Object(v.a)(nt, st), o.a.createElement(x.b, null, o.a.createElement(q.a, {
						className: Object(T.a)(je.a.container, r, ge.a.largeAndMediumPostStyles, ge.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[ge.a.mUseRedditTheme]: Be,
							promotedvideolink: Oe.isSponsored && !(Oe.media && y.a.has(Oe.media.type)),
							[je.a.topCompactPost]: Qe && Qe.hasTopCompactPostStyles,
							[je.a.bottomCompactPost]: Qe && Qe.hasBottomCompactPostStyles
						}),
						isOverlay: oe,
						style: Object(u.b)(e.flairStyleTemplate),
						post: Oe,
						onClick: xe,
						eventFactory: p
					}, o.a.createElement("div", {
						ref: nt
					}), o.a.createElement($.a, {
						model: Oe,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: pe,
						isVoteCountAnimation: ue,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Fe,
						redditStyle: Be,
						postId: Ie
					}), o.a.createElement(U.a, {
						className: Object(T.a)(je.a.backgroundWrapper, {
							[je.a.isEvent]: Object(de.a)(Oe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Fe,
						post: Oe,
						redditStyle: Be
					}, o.a.createElement(L.a, {
						post: Oe
					}), Qe && Qe.showPinnnedHeader && o.a.createElement(Y, null), Object(i.c)(Oe) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: Oe
					}), o.a.createElement(b.a, {
						post: Oe
					})), !Object(i.c)(Oe) && o.a.createElement(o.a.Fragment, null, !!Oe.recommendationContext && o.a.createElement(H.a, {
						content: Oe.recommendationContext.content,
						layout: se.g.Large,
						post: Oe
					}), o.a.createElement(te.a, {
						className: je.a.postTopLine,
						hideAwards: _e,
						hideNSFWPref: O,
						hostPostData: j,
						iconClassName: je.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!k,
						isCompactPinnedPost: !!Qe,
						isCurrentUserProfilePost: C,
						isInModNotesExperiment: X,
						isOverlay: !!oe,
						isTopicPage: !!re,
						listingKey: fe,
						post: Oe,
						shouldShowSubscribeButton: Ge,
						showSubreddit: $e,
						showSubredditIcon: !0,
						subredditOrProfile: Ne
					}), o.a.createElement(ee.c, {
						className: je.a.postTitle,
						post: Oe,
						redditStyle: Be,
						size: ee.b.Large,
						titleColor: Fe && Fe.postTitleColor,
						isOverlay: oe
					}), Oe.source && !Oe.isSponsored && !(Oe.media && Object(y.H)(Oe.media)) && o.a.createElement(ne.a, {
						className: je.a.sourceLink,
						post: Oe
					})), o.a.createElement("div", {
						className: je.a.postMediaWrapper
					}, !Qe && o.a.createElement(K.a, {
						isGalleryTileLayoutDefault: Z,
						isListing: !0,
						isMediumHeight: Xe,
						isNotCardView: !!oe,
						isTitleOnly: Ze,
						showCentered: !0,
						flairStyleTemplate: Fe,
						post: Oe,
						availableWidth: Ke,
						shouldLoad: w,
						scrollerItemRef: Pe,
						autoplayPref: t,
						shouldShowGalleryTileOption: ke,
						showPromotedCTA: Se
					})), Se && tt && tt.url && !Oe.isSurveyAd && o.a.createElement(S.a, {
						className: je.a.adLinkWrapper
					}, o.a.createElement(N.a, {
						post: Oe,
						adLinkContent: et
					})), he && Re && Ue && o.a.createElement("div", {
						className: je.a.modModeBannerWrapper
					}, o.a.createElement(R.a, {
						thing: Oe
					})), he && Re && He && o.a.createElement("div", {
						className: je.a.modModeBannerWrapper
					}, o.a.createElement(W.a, {
						onIgnoreReports: ye,
						reportable: Oe
					})), Object(ce.b)(Oe) && o.a.createElement(f.a, {
						post: Oe
					}), o.a.createElement(F.d, null), _e && o.a.createElement(M.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Oe,
						tooltipType: oe ? ve.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: je.a.flatListContainer
					}, o.a.createElement(A.a, {
						className: je.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Fe,
						model: Oe,
						onVoteClick: e.handleVote
					}), !Oe.isSurveyAd && o.a.createElement(B.c, {
						currentUser: a,
						hasModFlairPerms: We,
						hasModFullPerms: Ve,
						hasModPostPerms: Re,
						hostPostData: j,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: pe,
						isLargePost: !0,
						isOverlay: !!oe,
						listingKey: fe,
						modModeEnabled: he,
						onIgnoreReports: ye,
						onOpenReportsDropdown: we,
						post: Oe,
						showEditPost: ze,
						showEditFlair: Te,
						useFlatlistBreakpoints: Object(J.b)({
							editPost: !1,
							save: !De,
							hide: !1,
							report: !1
						})
					}))), G && o.a.createElement(I.a, {
						post: Oe,
						postIds: null != Ae ? Ae : [],
						subredditId: null == Ne ? void 0 : Ne.id
					})))
				});
			ke.displayName = "LargePostMemoized";
			t.default = Object(ie.b)(Pe(Object(oe.b)(ke)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD),
				r = e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL),
				i = e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT),
				a = e => o(e) || r(e) || i(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
						onClick: s,
						hasTooltip: c,
						tooltipText: u,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: s
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), c && o.a.createElement(i.a, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
			}) => o.a.createElement(a.a, {
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
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: d,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
					onClick: i
				}, m), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = n("./src/reddit/components/PostContainer/index.m.less"),
				w = n.n(g);
			const O = Object(m.a)(() => Object(r.c)({
				basePixelMetadata: Object(v.a)((e, {
					post: t
				}) => Object(b.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(b.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(h.d)(e).pageType
			}));
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: m,
						sendEvent: b,
						style: h,
						ref: v,
						shouldAddGalleryViewability: y = !0
					} = this.props, g = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => p && p(n, l, t, r, m))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(w.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, n), O = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || O ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(f.E)(l.media) && y ? o.a.createElement(u, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = O(Object(y.a)(Object(p.c)(j)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
			class f extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
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
						post: n
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!n.isFollowed,
							[m.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(c.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: y,
					shouldShowUpvoteRatioOnHover: g
				} = e, w = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, s && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: w,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				w = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/PostTopLine/index.m.less"),
				P = n.n(E);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: n,
				hideAwards: o,
				hideNSFWPref: E,
				hostPostData: k,
				iconClassName: C,
				inSubredditOrProfile: _,
				isCommentsPage: T,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: N,
				isInModNotesExperiment: M,
				isOverlay: I,
				isTopicPage: A,
				listingKey: L,
				post: B,
				shouldShowSubscribeButton: F,
				showCornerOutboundLink: R,
				showSubreddit: D,
				showSubredditIcon: W,
				subredditOrProfile: V,
				isFollowed: H,
				shouldShowFollowButton: U,
				onFollowPostClick: q
			}) => {
				const z = o || A,
					K = V && Object(O.h)(V),
					J = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(j.Eb)(e, B.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(P.a.container, e)
				}, D && V && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, W && r.a.createElement(m.b, {
					className: Object(a.a)(P.a.subredditIcon, C),
					shouldHideNsfwIcon: E,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, D && r.a.createElement(c.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.d, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: t,
					isInModNotesExperiment: M,
					tooltipType: I ? p.c.Lightbox : void 0,
					post: B,
					showSub: D,
					subredditOrProfile: V
				}), r.a.createElement(u.a, {
					className: P.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: _,
					isCompactPinnedPost: S,
					post: B,
					tooltipType: I ? p.c.Lightbox : void 0
				}), !z && r.a.createElement(d.a, {
					isPostDetail: T,
					thing: B,
					tooltipType: I ? p.c.Lightbox : void 0
				})), V && J && D && F && !N && r.a.createElement(b.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(y.h)(B.id, e ? "unsubscribe" : "subscribe", "post", L, k),
					identifier: {
						name: V.name,
						type: K ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: B.id,
					size: x.d.XS
				}), R && r.a.createElement(v.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(w.D)(B),
					source: B.source
				}, r.a.createElement(g.a, {
					className: P.a.outboundLinkIcon
				})), U && J && r.a.createElement(l.a, {
					isFilled: !!H,
					onClick: q,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
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
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				f = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(f);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends i.a.Component {
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
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, h({}, t, {
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
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle,
					[b.a.modNotes]: t.isModNotesStyle
				});
				return i.a.createElement(x, h({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.f)(n));
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(c);
			const u = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				f = e => Object(s.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.yc
				});
				return !(!t || Object(s.zf)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.zf)(t)
				},
				d = Object(s.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.te,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === o.Be.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(s.a)(i.G, a, (e, t) => d(e, t));
			Object(s.a)((e, t) => t, a, (e, t) => d(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.eb69bf115fd2baa93519.js.map