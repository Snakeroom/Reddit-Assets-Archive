// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.bb5fa0da917c1470b143.js
// Retrieved at 12/14/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
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
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						_ = !i && !u && !p && !m && /linux/i.test(t),
						E = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !O && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, E ? (o.msedge = e, o.version = E) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: E
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, x && (o.version = x)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, x && (o.version = x)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && x && (o.version = x)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : y ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : _ && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var g = "";
					o.windows ? g = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? g = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? g = (g = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? g = (g = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? g = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? g = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? g = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? g = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (g = n(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (o.osversion = g);
					var S = !o.windows && g.split(".")[0];
					return O || c || "ipad" == r || i && (3 == S || S >= 4 && !v) || o.silk ? o.tablet = e : (v || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
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
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, s = null == e ? 0 : e.length; ++n < s;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return s(e, (function(e, s, o) {
					return n = !!t(e, s, o)
				})), n
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
		"./node_modules/lodash/every.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayEvery.js"),
				o = n("./node_modules/lodash/_baseEvery.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : o;
				return n && a(e, t, n) && (t = void 0), c(e, r(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, o)
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

			function c(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
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
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					_ = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== r(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((_ = o(t)).x += t.clientLeft, _.y += t.clientTop) : p && (_.x = u(p))), {
					x: f.left + h.scrollLeft - _.x,
					y: f.top + h.scrollTop - _.y,
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

			function _(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					s = "body" === d(n),
					o = r(n),
					i = s ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(_(h(i)))
			}

			function E(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function x(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = r(e), n = x(e); n && E(n) && "static" === p(n).position;) n = x(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var v = "top",
				y = "bottom",
				g = "right",
				S = "left",
				C = "auto",
				T = [v, y, g, S],
				j = "start",
				w = "end",
				k = "clippingParents",
				I = "viewport",
				N = "popper",
				P = "reference",
				L = T.reduce((function(e, t) {
					return e.concat([t + "-" + j, t + "-" + w])
				}), []),
				A = [].concat(T, [C]).reduce((function(e, t) {
					return e.concat([t, t + "-" + j, t + "-" + w])
				}), []),
				M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function D(e) {
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

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					o = t.defaultOptions,
					r = void 0 === o ? R : o;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var o, i, c = {
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
						u = {
							state: c,
							setOptions: function(n) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), n), c.scrollParents = {
									reference: a(e) ? _(e) : e.contextElement ? _(e.contextElement) : [],
									popper: _(t)
								};
								var o = function(e) {
									var t = D(e);
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
								}([].concat(s, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: c,
											name: t,
											instance: u,
											options: s
										});
										d.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (F(t, n)) {
										c.rects = {
											reference: f(t, O(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < c.orderedModifiers.length; s++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[s],
													r = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof r && (c = r({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, s = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
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
					if (!F(e, t)) return u;

					function p() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var B = {
				passive: !0
			};

			function W(e) {
				return e.split("-")[0]
			}

			function V(e) {
				return e.split("-")[1]
			}

			function Y(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					s = e.element,
					o = e.placement,
					r = o ? W(o) : null,
					i = o ? V(o) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (r) {
					case v:
						t = {
							x: a,
							y: n.y - s.height
						};
						break;
					case y:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case g:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case S:
						t = {
							x: n.x - s.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = r ? Y(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case j:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case w:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
					}
				}
				return t
			}
			var G = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function q(e) {
				var t, n = e.popper,
					s = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
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
					h = S,
					_ = v,
					E = window;
				if (d) {
					var x = O(n);
					x === r(n) && (x = l(n)), o === v && (_ = y, m -= x.clientHeight - s.height, m *= c ? 1 : -1), o === S && (h = g, p -= x.clientWidth - s.width, p *= c ? 1 : -1)
				}
				var C, T = Object.assign({
					position: a
				}, d && G);
				return c ? Object.assign(Object.assign({}, T), {}, ((C = {})[_] = b ? "0" : "", C[h] = f ? "0" : "", C.transform = (E.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", C)) : Object.assign(Object.assign({}, T), {}, ((t = {})[_] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return z[e]
				}))
			}
			var Q = {
				start: "end",
				end: "start"
			};

			function K(e) {
				return e.replace(/start|end/g, (function(e) {
					return Q[e]
				}))
			}

			function X(e, t) {
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

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === I ? J(function(e) {
					var t = r(e),
						n = l(e),
						s = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return s && (o = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, c = s.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = _(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? O(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && X(e, n)
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
					c = void 0 === i ? k : i,
					d = n.rootBoundary,
					u = void 0 === d ? I : d,
					p = n.elementContext,
					m = void 0 === p ? N : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					_ = void 0 === h ? 0 : h,
					E = te("number" != typeof _ ? _ : ne(_, T)),
					x = m === N ? P : N,
					O = e.elements.reference,
					S = e.rects.popper,
					C = e.elements[b ? x : m],
					j = ee(a(C) ? C : C.contextElement || l(e.elements.popper), c, u),
					w = o(O),
					L = H({
						reference: w,
						element: S,
						strategy: "absolute",
						placement: r
					}),
					A = J(Object.assign(Object.assign({}, S), L)),
					M = m === N ? A : w,
					D = {
						top: j.top - M.top + E.top,
						bottom: M.bottom - j.bottom + E.bottom,
						left: j.left - M.left + E.left,
						right: M.right - j.right + E.right
					},
					R = e.modifiersData.offset;
				if (m === N && R) {
					var F = R[r];
					Object.keys(D).forEach((function(e) {
						var t = [g, y].indexOf(e) >= 0 ? 1 : -1,
							n = [v, y].indexOf(e) >= 0 ? "y" : "x";
						D[e] += F[n] * t
					}))
				}
				return D
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
				return [v, g, y, S].some((function(t) {
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
								n = e.instance,
								s = e.options,
								o = s.scroll,
								i = void 0 === o || o,
								a = s.resize,
								c = void 0 === a || a,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, B)
								})), c && d.addEventListener("resize", n.update, B),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, B)
									})), c && d.removeEventListener("resize", n.update, B)
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
							t.modifiersData[n] = H({
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
									placement: W(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), q(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), q(Object.assign(Object.assign({}, a), {}, {
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
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(s).forEach((function(e) {
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
										c(s) && d(s) && (Object.assign(s.style, r), Object.keys(o).forEach((function(e) {
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
										var s = W(e),
											o = [S, v].indexOf(s) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [S, g].indexOf(s) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, r), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[s] = i
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
								for (var o = n.mainAxis, r = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, _ = W(h), E = c || (_ === h || !f ? [Z(h)] : function(e) {
										if (W(e) === C) return [];
										var t = Z(e);
										return [K(e), t, K(t)]
									}(h)), x = [h].concat(E).reduce((function(e, n) {
										return e.concat(W(n) === C ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												o = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = V(s),
												u = (l ? a ? L : L.filter((function(e) {
													return V(e) === l
												})) : T).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: o,
														rootBoundary: r,
														padding: i
													})[W(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), O = t.rects.reference, w = t.rects.popper, k = new Map, I = !0, N = x[0], P = 0; P < x.length; P++) {
									var M = x[P],
										D = W(M),
										R = V(M) === j,
										F = [v, y].indexOf(D) >= 0,
										U = F ? "width" : "height",
										B = se(t, {
											placement: M,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										Y = F ? R ? g : S : R ? y : v;
									O[U] > w[U] && (Y = Z(Y));
									var H = Z(Y),
										G = [];
									if (r && G.push(B[D] <= 0), a && G.push(B[Y] <= 0, B[H] <= 0), G.every((function(e) {
											return e
										}))) {
										N = M, I = !1;
										break
									}
									k.set(M, G)
								}
								if (I)
									for (var q = function(e) {
											var t = x.find((function(t) {
												var n = k.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, z = f ? 3 : 1; z > 0; z--) {
										if ("break" === q(z)) break
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
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								_ = se(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								E = W(t.placement),
								x = V(t.placement),
								C = !x,
								T = Y(E),
								w = "x" === T ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								I = t.rects.reference,
								N = t.rects.popper,
								P = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								L = {
									x: 0,
									y: 0
								};
							if (k) {
								if (r) {
									var A = "y" === T ? v : S,
										M = "y" === T ? y : g,
										D = "y" === T ? "height" : "width",
										R = k[T],
										F = k[T] + _[A],
										U = k[T] - _[M],
										B = m ? -N[D] / 2 : 0,
										H = x === j ? I[D] : N[D],
										G = x === j ? -N[D] : -I[D],
										q = t.elements.arrow,
										z = m && q ? b(q) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Q = Z[A],
										K = Z[M],
										X = oe(0, I[D], z[D]),
										J = C ? I[D] / 2 - B - X - Q - P : H - X - Q - P,
										$ = C ? -I[D] / 2 + B + X + K + P : G + X + K + P,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === T ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][T] : 0,
										re = k[T] + J - ne - te,
										ie = k[T] + $ - ne,
										ae = oe(m ? Math.min(F, re) : F, R, m ? Math.max(U, ie) : U);
									k[T] = ae, L[T] = ae - R
								}
								if (a) {
									var ce = "x" === T ? v : S,
										de = "x" === T ? y : g,
										le = k[w],
										ue = oe(le + _[ce], le, le - _[de]);
									k[w] = ue, L[w] = ue - le
								}
								t.modifiersData[s] = L
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
								i = W(n.placement),
								a = Y(i),
								c = [S, g].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? v : S,
									p = "y" === a ? y : g,
									m = n.rects.reference[c] + n.rects.reference[a] - r[a] - n.rects.popper[c],
									f = r[a] - n.rects.reference[a],
									h = O(o),
									_ = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									E = m / 2 - f / 2,
									x = d[u],
									C = _ - l[c] - d[p],
									T = _ / 2 - l[c] / 2 + E,
									j = oe(x, T, C),
									w = a;
								n.modifiersData[s] = ((t = {})[w] = j, t.centerOffset = j - T, t)
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
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && X(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, T))
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
								c = re(i, s),
								d = re(a, o, r),
								l = ie(c),
								u = ie(d);
							t.modifiersData[n] = {
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
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
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
						c = i[1],
						d = s.useMemo((function() {
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
						l = s.useMemo((function() {
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
							var a, c, d, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], i[c])) return !1;
								return !0
							}
							if (s && t instanceof Map && i instanceof Map) {
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
							if (n && t instanceof Element) return !1;
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
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: o
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(s.D)(e)
				} else i = Object(s.D)(e);
				const a = r.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.oc, o.pb, o.B, o.Q, o.kb, o.Rb],
				i = {
					[o.Rb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.kb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.Q]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.B]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.pb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.oc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Rb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.kb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.Q]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.B]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.oc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.oc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.oc]: "",
						[o.pb]: "",
						[o.B]: "",
						[o.Q]: "",
						[o.kb]: "",
						[o.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
				}
				const p = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? p : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return y
			}));
			const s = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				_ = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				v = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				y = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "l", (function() {
				return M
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/postFlair.ts"),
				m = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				b = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(o.a)(f),
				_ = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				x = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				O = Object(o.a)(E),
				v = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				g = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				S = Object(o.a)(y),
				C = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				j = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				w = Object(o.a)(T),
				k = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				I = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(o.a)(I),
				L = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(o.a)(N),
				M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = Object(m.R)(r, {
							subredditId: e
						}).name;
					n(b());
					const a = await Object(c.k)(o(), i, t);
					if (a.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(_());
					return a.ok
				}, D = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = Object(m.R)(r, {
							subredditId: e
						}).name;
					n(x());
					const a = await Object(c.j)(o(), t, l.d.LinkFlair, i);
					if (a.ok) {
						n(O({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(v());
					return a.ok
				}, R = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const d = o(),
						p = Object(m.R)(d, {
							subredditId: t
						}).name;
					n(g());
					const f = await Object(c.f)(r(), e, p, l.d.LinkFlair);
					let b = f.ok && !(f.body && !1 === f.body.success);
					if (b) {
						const s = f.body;
						if (n(S({
								subredditId: t,
								template: s
							})), s.id) {
							const o = e.styleTemplate,
								r = d.structuredStyles.flairTemplate.models[s.id];
							o ? b = await n(Object(i.d)(t, s.id, o)) : r && (b = await n(Object(i.c)(t, s.id)))
						}
					}
					if (b) {
						const e = Object(a.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(C());
						const o = Object(a.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), R(e, t));
						n(Object(a.f)(o))
					}
					return b
				}, F = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o(),
						d = Object(m.R)(i, {
							subredditId: t
						}).name;
					if (n(j()), (await Object(c.b)(r(), e, d)).ok) {
						n(w({
							subredditId: t,
							templateId: e
						}));
						const o = Object(a.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(o))
					} else {
						n(k());
						const o = Object(a.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(a.f)(o))
					}
				}, U = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o(),
						d = Object(p.d)(i, {
							subredditId: t
						}).templateIds,
						f = Object(m.R)(i, {
							subredditId: t
						}).name;
					if (n(P({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(r(), f, l.d.LinkFlair, e)).ok) {
						n(L());
						const e = Object(a.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(A({
							subredditId: t,
							templateIds: d
						}));
						const o = Object(a.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(a.f)(o))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (s, o, {
					apiContext: i
				}) => {
					const a = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && a.unshift(t), s(Object(r.S)({
							[e.id]: {
								flair: a
							}
						})), t) {
						const s = Object(d.g)(t);
						Object(c.h)(i(), e.id, n, s)
					} else Object(c.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./node_modules/lodash/values.js"),
				c = n.n(a),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				_ = n("./src/reddit/models/Image/index.tsx"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/telemetry/index.ts");
			const O = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: s
			}) => async (o, r, i) => {
				const a = r(),
					c = Object(E.R)(a, {
						subredditId: e
					});
				if (!c) return !1;
				o(Object(l.k)(s));
				const d = await (async (e, t, n, s, o, r) => Object(m.a)(Object(f.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: p.jb.POST,
					data: {
						filepath: s,
						imagetype: o,
						mimetype: r
					}
				}))(i.apiContext(), c.name, t, s.file.name, n, await Object(u.g)(s.file));
				let h = !1;
				try {
					const e = await Object(l.g)(r(), d, s, _.a.FlairTemplates);
					e && o(Object(l.j)(e)), h = !0
				} catch (x) {
					if (x instanceof Error) throw x;
					o(Object(l.i)(x))
				}
				return h
			}, v = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", y = Object(d.a)(v), g = (e, t, n) => async (s, r, a) => {
				const {
					apiContext: d
				} = a;
				let u = r();
				const {
					pendingImages: v,
					...g
				} = n;
				let S = g;
				const C = Object(E.R)(u, {
					subredditId: e
				});
				if (!C) return !1;
				const T = u.structuredStyles.flairTemplate.models[t];
				if (T && i()(T, S)) return !0;
				if (v) {
					const n = [];
					if (o()(v, (o, r) => {
							o && n.push(s(O({
								flairId: t,
								imageData: Object(_.m)(o),
								imageKey: r,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					S = ((e, t, n) => {
						const s = {
							...e
						};
						return o()(t, (e, t) => {
							const o = e && n.imageUploads[e.id];
							o && o.kind === _.b.TempUploaded && (s[t] = o.url)
						}), s
					})(S, v, r())
				}
				u = r();
				let j = null,
					w = null;
				const k = [];
				try {
					(j = await Object(l.f)(u, _.a.FlairTemplates)) && (w = Object(l.m)(j)(s, r, a), k.push(...c()(j.imagesByKey)))
				} catch (L) {
					return !1
				}
				const I = await (async (e, t, n, s) => Object(m.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: p.jb.PUT,
						data: s
					}))(d(), C.name, t, S),
					N = T ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(h.e)(u, N);
				if (I.ok) {
					let e;
					if (w) try {
						await w, e = ((e, t, n) => {
							const s = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === _.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
							}), s
						})(S, k, r())
					} catch (L) {
						e = null
					} else e = S;
					s(y({
						flairId: t,
						template: e || S
					}))
				} else j && j.websocket.close();
				return Object(x.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: I.ok
					}
				}), I.ok
			}, S = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", C = Object(d.a)(S), T = (e, t) => async (n, s, {
				apiContext: o
			}) => {
				const r = s(),
					i = Object(E.R)(r, {
						subredditId: e
					});
				if (!i) return !1;
				const a = await (async (e, t, n) => Object(m.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: p.jb.DELETE
					}))(o(), i.name, t),
					c = Object(h.e)(r, "delete_flair_template");
				return a.ok && n(C({
					flairId: t
				})), Object(x.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: a.ok
					}
				}), a.ok
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
				const c = i();
				Object(s.a)(e, a, c) ? n(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
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
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
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
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
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
			}) => o.a.createElement(i.b, d({
				className: Object(r.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => o.a.createElement(a.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
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
				return Ie
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/User/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/actions/post.ts"),
				x = n("./src/reddit/actions/postFlair.ts"),
				O = n("./src/reddit/actions/tooltip.ts"),
				v = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = n("./src/reddit/components/AwardBadges/index.tsx"),
				w = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				k = n("./src/reddit/components/CommentsLink/index.tsx"),
				I = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = n("./src/reddit/components/ExpandoButton/index.tsx"),
				L = n("./src/reddit/components/Flatlist/index.tsx"),
				A = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				M = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				B = n("./src/reddit/components/ModModeReports/helpers.ts"),
				W = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				V = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Y = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = n("./src/reddit/components/PostBadges/index.tsx"),
				G = n("./src/reddit/components/PostContainer/index.tsx"),
				q = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = n("./src/reddit/components/PostMedia/index.tsx"),
				Q = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				K = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = n("./src/reddit/components/PostTitle/index.tsx"),
				J = n("./src/reddit/components/PostTopMeta/index.tsx"),
				$ = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ee = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = n("./src/reddit/components/SubredditIcon/index.tsx"),
				se = n("./src/reddit/components/VerticalVotes/index.tsx"),
				oe = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/controls/Checkbox/index.tsx"),
				ce = n("./src/reddit/controls/MetaData/index.tsx"),
				de = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ue = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				pe = n("./src/reddit/helpers/postEvent.ts"),
				me = n("./src/reddit/hooks/useIsOverlay.ts"),
				fe = n("./src/reddit/hooks/useTheme.ts"),
				be = n("./src/reddit/hooks/useUserContext.ts"),
				he = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				_e = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Ee = n("./src/reddit/selectors/showPromotedCTA.ts"),
				xe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = n.n(xe),
				ve = n("./src/reddit/components/CompactPost/index.m.less"),
				ye = n.n(ve);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Se = ({
					isCompact: e,
					...t
				}) => o.a.createElement(P.a, ge({
					className: Object(d.a)(ye.a.responsiveExpandoButton, {
						[ye.a.mHideAboveSmallTablets]: !!e,
						[ye.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				Ce = () => Object(a.c)({
					activeModalId: v.a,
					crosspost: S.d,
					flairStyleTemplate: re.U,
					isActive: S.j,
					isExpanded: S.m,
					showPromotedCTA: Ee.a,
					layout: re.Q,
					moderatorPermissions: y.l,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: g.a
				}),
				Te = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					}) => e(Object(x.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					})),
					handleVote: n => {
						const s = n === _.a.upvoted ? Object(E.jb)(t) : Object(E.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(E.fb)(t)),
					onOpenReportsDropdown: t => e(Object(O.h)({
						tooltipId: t
					}))
				});
			class je extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: s,
						currentUser: r,
						eventFactory: i,
						flairStyleTemplate: a,
						handleVote: l,
						imageGalleryCurrentItem: _,
						isCheckboxSelected: E = !1,
						isCommentsPage: x,
						isCommentPermalink: O,
						isExpanded: v,
						isGalleryTileLayoutDefault: y,
						isOverlay: g,
						isProfilePostListing: S,
						inSubredditOrProfile: P = !1,
						layout: Z,
						moderatorPermissions: te,
						modModeEnabled: ne,
						onClickPost: re,
						onFlairChanged: ie,
						onIgnoreReports: ce,
						poll: me,
						post: fe,
						subredditOrProfile: be,
						userIsOp: Ee,
						hideModTools: xe,
						scrollerItemRef: ve,
						showBulkActionCheckbox: ge,
						showEditFlair: Ce,
						toggleCheckbox: Te,
						tooltipType: je,
						sendEvent: ke,
						shouldShowGalleryTileOption: Ie,
						showPromotedCTA: Pe
					} = this.props, Le = !!fe.media && fe.media.type === b.o.RTJSON, Ae = Ee && Le, Me = Object(q.b)(fe.id, g), De = Object(ue.a)(te), Re = Object(de.a)(te), Fe = Object(le.a)(te), Ue = `-mod-actions-menu-${fe.id}`, Be = `voting-arrows-${fe.id}`, We = !!r && Object(h.e)(r) === fe.author, Ve = Object(F.d)(fe), Ye = Object(B.c)(fe), He = Object(A.a)("View--Reports", fe.id, je), Ge = Object(B.a)(fe), qe = !(g || x || O), ze = fe.media && fe.media.type === b.o.LIVEVIDEO, Ze = e => ke(Object(f.h)(fe.id, e)), Qe = Object(c.t)(fe, _), {
						source: Ke
					} = Qe, Xe = o.a.createElement(G.a, {
						className: Object(d.a)(Oe.a.compactPostStyles, ye.a.postContainer, Object(m.a)(this.props), t),
						isOverlay: g,
						style: {
							...Object(m.d)(this.props),
							...Object(m.b)(this.props.flairStyleTemplate)
						},
						post: fe,
						onClick: re,
						eventFactory: i
					}, o.a.createElement("div", {
						className: ye.a.compactWrapper
					}, o.a.createElement("div", {
						className: ye.a.leftRailWrapper
					}, o.a.createElement("div", {
						className: ye.a.leftRail,
						style: {
							borderColor: Object(z.c)({
								isRemoved: !!fe.bannedBy,
								isReported: Object(p.a)(fe),
								isSponsored: fe.isSponsored,
								theme: this.props.theme
							})
						}
					}, ge && o.a.createElement(ae.a, {
						className: ye.a.bulkActionCheckbox,
						isCheckboxSelected: E,
						toggleCheckbox: Te
					}), o.a.createElement(se.a, {
						className: ye.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: a,
						model: fe,
						onVoteClick: l
					}), o.a.createElement(I.a, {
						className: ye.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: a,
						model: fe,
						onVoteClick: l,
						upvoteTooltipId: Be
					}))), o.a.createElement(Y.a, {
						className: Object(d.a)(ye.a.content, {
							[ye.a.isEvent]: Object(pe.a)(fe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: a
					}, o.a.createElement(N.a, {
						isCompactMode: !0,
						post: fe
					}), o.a.createElement("div", {
						className: ye.a.compactPostRow
					}, !xe && o.a.createElement(Se, {
						crosspost: s,
						isCommentsPage: x,
						isCompact: !1,
						isExpanded: v,
						post: fe,
						useMediaIcons: !0
					}), !P && !fe.isSponsored && o.a.createElement(M.h, {
						type: fe.belongsTo.type,
						id: fe.belongsTo.id
					}), o.a.createElement("div", {
						className: ye.a.topLine,
						"data-click-id": "body"
					}, !!fe.recommendationContext && o.a.createElement(V.a, {
						content: fe.recommendationContext.content,
						layout: u.g.Compact,
						post: fe
					}), o.a.createElement(X.c, {
						post: fe,
						poll: me,
						size: X.b.Small,
						titleColor: a && a.postTitleColor,
						isOverlay: !1
					}), Ne(fe, be), o.a.createElement(J.d, {
						className: ye.a.postTopMeta,
						flairStyleTemplate: a,
						post: fe,
						showSub: !!be && !P && !fe.isSponsored,
						subredditOrProfile: be
					}), o.a.createElement(H.a, {
						className: ye.a.postBadges,
						displayText: be ? be.displayText : null,
						inSubredditOrProfile: P,
						post: fe
					}), o.a.createElement(j.a, {
						thing: fe,
						tooltipType: g ? J.c.Lightbox : void 0
					})), qe && !ze && o.a.createElement("div", null, o.a.createElement(w.a, {
						className: ye.a.liveDiscussionIcon,
						isMod: De,
						postId: fe.postId
					})), o.a.createElement("div", {
						className: ye.a.flatList
					}, o.a.createElement(k.a, {
						className: ye.a.commentsLink,
						hasModPostPerms: De,
						isCommentsPage: x,
						isCommentPermalink: O,
						isOverlay: g,
						postId: fe.id,
						modModeEnabled: ne,
						numComments: fe.numComments,
						type: u.g.Compact
					}), o.a.createElement(W.a, {
						className: ye.a.modToolsFlatlist,
						isOverlay: !1,
						layout: Z,
						modModeEnabled: ne,
						post: fe,
						sendEvent: ke,
						showIconsOnly: !0
					}), De && o.a.createElement(D.a, {
						dropdownId: Ue,
						onClick: () => Ze("post_mod_action_menu")
					}, o.a.createElement(L.b, null), o.a.createElement(Q.a, {
						canEditFlair: Re && Ce,
						hasModPostPerms: De,
						hasModFullPerms: Fe,
						isOverlay: !1,
						isPostAuthor: We,
						modModeEnabled: ne,
						post: fe,
						tooltipId: Ue
					})), De && Ye && !ne && o.a.createElement(ee.c, {
						text: `${Ge}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(He), Ze("post_report_menu")
						},
						id: He
					}, o.a.createElement(oe.a, {
						model: fe,
						onIgnoreReports: () => {
							ce(), Ze(fe.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: He
					}), fe.ignoreReports ? o.a.createElement(he.a, null) : o.a.createElement(_e.a, null)), o.a.createElement(K.a, {
						currentProfileName: n,
						isCommentsPage: x,
						isOverlay: !1,
						isProfilePostListing: S,
						isRecommendationPost: !!fe.recommendationContext,
						layout: Z,
						permalink: fe.permalink,
						sendEvent: ke,
						showEditPost: Ae,
						showEditFlair: Ce,
						dropdownId: `${fe.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(K.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !xe && o.a.createElement(Se, {
						crosspost: s,
						isCommentsPage: x,
						isCompact: !0,
						isExpanded: v,
						post: fe,
						useMediaIcons: !0
					}))), Pe && Ke && Ke.url && o.a.createElement(C.a, {
						className: ye.a.adLinkWrapper
					}, o.a.createElement(T.a, {
						post: fe,
						adLinkContent: Qe,
						isCompact: !0
					})), ne && De && Ve && o.a.createElement("div", {
						className: ye.a.modModeBannerWrapper
					}, o.a.createElement(R.a, {
						thing: fe
					})), ne && De && Ye && o.a.createElement("div", {
						className: ye.a.modModeBannerWrapper
					}, o.a.createElement(U.a, {
						onIgnoreReports: ce,
						reportable: fe
					})), o.a.createElement(M.d, null))), v && o.a.createElement(we, {
						post: fe,
						scrollerItemRef: ve,
						flairStyleTemplate: a,
						shouldShowGalleryTileOption: Ie,
						isGalleryTileLayoutDefault: y
					}), e === Me && o.a.createElement(q.a, {
						flairs: fe.flair,
						subredditId: fe.belongsTo.id,
						modalId: Me,
						onFlairChanged: ie
					}));
					return o.a.createElement($.b, null, Xe)
				}
			}
			const we = e => o.a.createElement(Y.a, {
					className: Object(d.a)(e.className, ye.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? o.a.createElement("div", {
					className: ye.a.crosspostMediaWrapper
				}, ke(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : ke(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				ke = (e, t, n, s) => o.a.createElement(Z.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
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
				Ie = e => o.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, o.a.createElement(ne.b, {
					className: ye.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ne = (e, t) => o.a.createElement("div", {
					className: ye.a.responsiveMeta
				}, o.a.createElement(ce.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), o.a.createElement(ce.c, null), Object(ce.d)(e.numComments), o.a.createElement(ce.c, null), t && o.a.createElement("a", {
					href: t.url
				}, o.a.createElement(ce.a, null, t.displayText)), e.isSponsored && [o.a.createElement(te.a, {
					key: "label"
				}), o.a.createElement(ce.c, {
					key: "separator"
				})], !e.isSponsored && o.a.createElement(ce.a, null, " Posted by "), o.a.createElement(J.b, {
					post: e
				}));
			t.default = Object(ie.b)(o.a.memo((function(e) {
				const t = Object(be.a)(),
					n = Object(s.useMemo)(() => Ce(), []),
					i = Object(r.e)(s => n(s, {
						...e,
						...t
					})),
					a = Object(r.d)(),
					c = Te(a, {
						...e,
						...t
					});
				return o.a.createElement(je, ge({}, e, t, i, c, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: n
					}) => c.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: n
					}),
					sendEvent: Object(l.b)(),
					isOverlay: Object(me.a)(),
					theme: Object(fe.a)()
				}))
			})))
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
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
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
				}, o.a.createElement(c.a, {
					post: n
				}), !a && p && o.a.createElement(d.a, {
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
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const _ = h.a.span("PostEventFutureText", b.a),
				E = h.a.span("PostEventPastText", b.a),
				x = h.a.span("PostEventNowText", b.a),
				O = h.a.span("Container", b.a),
				v = h.a.wrapped(u, "CalendarIcon", b.a),
				y = h.a.wrapped(p, "LiveIcon", b.a),
				g = h.a.div("LoadingState", b.a);
			class S extends s.Component {
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
						eventStart: c
					} = n, d = Object(r.e)(c, s);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(m.c, {
						startTime: c,
						endTime: s,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(g, {
							className: e
						})
					}
					if (a) u = o.a.createElement(x, null, o.a.createElement(y, null), l);
					else if (d === r.a.Future) u = o.a.createElement(_, null, o.a.createElement(v, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(E, null, o.a.createElement(v, null), l)
					}
					return o.a.createElement(O, {
						className: e
					}, u)
				}
			}
			t.a = S
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				_ = n("./src/telemetry/models/Outbound.ts"),
				E = n("./src/reddit/components/ExpandoButton/index.m.less"),
				x = n.n(E);
			const O = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(p.b)(t.permalink), t.id))
				})),
				v = (e, t = !1, n) => {
					const s = Object(c.a)(x.a.icon, x.a.hideOnHover);
					if (t) return r.a.createElement(f.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return r.a.createElement(f.a, {
						name: "poll_post",
						className: s
					});
					if (n.audioRoom) return r.a.createElement(f.a, {
						name: "audio",
						className: s
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(f.a, {
								name: "gif_post",
								className: s
							});
						case b.o.IMAGE:
							return r.a.createElement(f.a, {
								name: "image_post",
								className: s
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(f.a, {
								name: "text_post",
								className: s
							});
						case b.o.VIDEO:
							return r.a.createElement(f.a, {
								name: "video_post",
								className: s
							});
						case b.o.GALLERY:
							return r.a.createElement(f.a, {
								name: "media_gallery",
								className: s
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(f.a, {
								name: "embed",
								className: s
							})
					}
				};
			t.a = O(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: E,
					useMediaIcons: O
				} = e, y = n || b, g = Object(i.e)(h.b), S = t => {
					g && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, C = o && !!n;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type || "liveaudio" === y.media.type) && !Object(m.a)(y)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: E
				}, p ? r.a.createElement(f.a, {
					name: "collapse",
					className: x.a.icon
				}) : O ? r.a.createElement(r.a.Fragment, null, v(y.media && y.media.type, C, b), r.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(x.a.icon, x.a.showOnHover)
				})) : r.a.createElement(f.a, {
					name: "expand",
					className: x.a.icon
				})) : y.source && y.source.url ? r.a.createElement(u.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? _.SourceElement.PostImage : _.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(x.a.icon, x.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow",
					onClick: S
				}, r.a.createElement(f.a, {
					name: "text_post",
					className: x.a.icon
				}))
			})
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
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => "string" == typeof e.bannedBy && e.bannedBy === s.l || !!Object(o.b)(e, o.a.AUTOMOD),
				i = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				a = e => !!e.bannedBy && !!Object(o.b)(e, o.a.HATEFUL_CONTENT),
				c = e => r(e) || i(e) || a(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
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
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
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
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = n.n(d);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => o.a.createElement(a.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: u(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				r = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
					seconds: e.poll.endsAt / s.Rb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
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
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

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
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, n),
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
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
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
				_ = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				x = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				v = n.n(O);
			const y = Object(m.a)(() => Object(r.c)({
				basePixelMetadata: Object(E.a)((e, {
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
			class g extends o.a.Component {
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
						makePostContainerId: d,
						post: l,
						onClick: p,
						pageType: m,
						sendEvent: b,
						style: h,
						ref: E,
						shouldAddGalleryViewability: x = !0
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: E,
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
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(_.a)(v.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), y = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || y ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, O) : l.media && Object(f.E)(l.media) && x ? o.a.createElement(u, {
						postId: l.id
					}, O) : O
				}
			}
			t.a = y(Object(x.a)(Object(p.c)(g)))
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
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
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
						className: Object(c.a)(m.a.collectionFollow, {
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
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
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
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return L
			})), n.d(t, "a", (function() {
				return Z
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/helpers/flair.ts"),
				x = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/lib/getShortenedLink.ts"),
				T = n("./src/reddit/components/FlairWrapper/index.tsx"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				k = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				I = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				N = n.n(I);
			const P = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var L, A = Object(i.b)(P)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, N.a.proposalMetaData)
					}, r.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(w.a)(s)), j.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(k.a, {
						className: N.a.proposalExpiry,
						poll: t
					}))
				})),
				M = n("./src/reddit/components/SEOTitle/index.tsx"),
				D = n("./src/reddit/selectors/experiments/econ/index.ts"),
				R = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/PostTitle/index.m.less"),
				B = n.n(U),
				W = n("./src/config.ts"),
				V = n("./src/reddit/hooks/useClickSourceData.ts"),
				Y = n("./src/reddit/hooks/useExperimentVariant.ts"),
				H = n("./src/reddit/hooks/usePostContext.ts"),
				G = n("./src/reddit/hooks/useTheme.ts"),
				q = n("./src/telemetry/models/Outbound.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(L || (L = {}));
			const Z = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: s,
					children: o,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(G.a)();
					let d = "";
					switch (e) {
						case L.ExtraLarge:
							d = B.a.ExtraLarge;
							break;
						case L.Large:
							d = B.a.Large;
							break;
						case L.Medium:
							d = B.a.Medium;
							break;
						case L.Small:
							d = B.a.Small;
							break;
						case L.ExtraSmall:
							d = B.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(l.a)(B.a.Title, i, d, {
							[B.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(S.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? r.a.createElement(M.b, {
						type: n
					}, o) : o)
				},
				Q = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: s,
					...o
				}) => r.a.createElement(a.a, z({}, o, {
					className: Object(l.a)(e, B.a.styledLink, {
						[B.a.isVisitedEnabled]: !t
					})
				}), s),
				K = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: s
				}) => r.a.createElement("div", {
					className: Object(l.a)(B.a.titleContainer, n, {
						[B.a.isNoWrap]: t,
						[B.a.isVisitedEnabled]: !e
					})
				}, s),
				X = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.db,
					isTournamentPredictionPostV2: D.t
				}),
				J = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, o = Object(i.d)(), a = Object(V.a)(), c = Object(Y.a)(p.od) === p.vd.Enabled, l = Object(i.e)(R.b), u = e => {
						!l || t.media && Object(g.H)(t.media) || (e.preventDefault(), o(Object(_.ab)(Object(x.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(K, {
						nowrap: e.nowrap
					}, r.a.createElement($, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, r.a.createElement($, e)); {
						const o = t.media && Object(g.H)(t.media) ? Object(O.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(x.b)(o) : c ? Object(h.a)(o, void 0, a) : Object(h.a)(o);
						return r.a.createElement(K, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? r.a.createElement(f.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, r.a.createElement($, t)) : r.a.createElement($, t)
						})(t, e) : r.a.createElement(Q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: u
						}, r.a.createElement($, e)))
					}
				},
				$ = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return r.a.createElement(Z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent
					}), o)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: s
					} = n, o = e.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== L.Large && !n.isSponsored && !(n.media && Object(g.H)(n.media)) && (n.source || n.media && (n.media.type === g.o.GIFVIDEO || n.media.type === g.o.IMAGE || n.media.type === g.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(g.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(C.a)(n), !n.isSponsored && r.a.createElement(v.a, {
							name: "external_link",
							className: B.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== L.Large && e.size !== L.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(C.a)(n), !n.isSponsored && r.a.createElement(v.a, {
						name: "external_link",
						className: B.a.outboundLinkIcon
					}));
					return null
				};
			class te extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${B.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(S.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(S.a)(this.props).titleText,Object(S.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: n,
						flairPosition: s,
						isCommentsPage: o,
						isOverlay: i,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, p = s === y.b.Left, m = Object(T.b)(c), f = d ? m.filter(e => e.type === y.f.Nsfw || e.type === y.f.Spoiler) : p ? m.filter(e => Object(E.q)(e.type)) : [], b = d ? [] : p ? m.filter(e => !Object(E.q)(e.type)) : m, h = !i && !o, _ = !n && f && f.length > 0 && h, x = !n && b && b.length > 0 && h, O = !(u && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return r.a.createElement("div", {
						className: Object(l.a)(B.a.Component, t, c.id),
						ref: this.props.innerRef
					}, !d && _ && r.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), O && r.a.createElement(J, z({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && r.a.createElement(A, {
						className: B.a.pollMeta,
						pollId: a.id
					}), r.a.createElement(ee, this.props), x && r.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), r.a.createElement("div", {
						className: B.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${W.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(m.eb)(),
					n = Object(m.w)(t),
					s = Object(H.a)(),
					o = Object(i.e)(o => X(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(G.a)(),
					c = Object(u.b)();
				return s ? r.a.createElement(te, z({
					pageLayer: t,
					isCommentPermalink: n
				}, s, o, e, {
					theme: a,
					sendEvent: c
				})) : null
			}))
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
				c = n.n(a);
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
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
			class _ extends i.a.Component {
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
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
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
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(_, h({
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
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
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
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = i.a.span("metaText", d.a),
				u = e => r.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const i = Object(a.b)(t),
						c = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						d = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, d)
				},
				m = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
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
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
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
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
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
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.I.NO_STRIPE_SUBSCRIPTION:
							case s.I.USER_DOESNT_EXIST:
							case s.I.USER_REQUIRED_ERROR:
							case s.I.VALIDATION_ERROR:
								return e;
							case s.I.NO_USER:
							case s.I.NO_TEXT:
							case s.I.NO_URL:
								return s.I.VALIDATION_ERROR;
							case s.I.CREDIT_CARD_FAILURE:
							case s.I.CREDIT_CARD_FAILURE_GENERIC:
								return s.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.I.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
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
						error: r(e)
					} : e
				};
			t.a = r
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
				return _
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				p = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
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
				_ = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "v", (function() {
				return N
			})), n.d(t, "w", (function() {
				return P
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.ab(e),
					subreddit: o.hb(e),
					userSubreddit: o.qb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				_ = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				y = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : v[e],
					...r(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				S = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...r(i),
					actionInfo: o.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				T = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				I = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				N = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				P = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e, t = o.a) {
				return Object(s.e)(n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/InsideOverlay.tsx");

			function r() {
				return Object(s.useContext)(o.a)
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
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
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
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT"
				}(s || (s = {}))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "p", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				p = e => e.__typename === o.a.Subreddit;
			var m, f, b, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(m || (m = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const _ = e => f[h[e]],
				E = e => h[f[e]],
				x = e => b[f[e]],
				O = e => f[b[e]],
				v = e => h[b[e]];
			var y;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const g = e => {
					switch (e) {
						case y.Hourly:
						case y.Daily:
						case y.Weekly:
						case y.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
				C = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(e)
					}
				},
				T = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(p).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
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
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
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
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.ue,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => t === o.De.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(s.a)(i.H, a, (e, t) => c(e, t));
			Object(s.a)((e, t) => t, a, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.bb5fa0da917c1470b143.js.map