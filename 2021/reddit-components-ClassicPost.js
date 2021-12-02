// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.31dfd97a1f1df873d679.js
// Retrieved at 12/2/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
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
					var r, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						b = !o && !l && /macintosh/i.test(t),
						x = !a && !u && !m && !p && /linux/i.test(t),
						E = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !_ && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, E ? (r.msedge = e, r.version = E) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: E
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, v && (r.version = v)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (r.version = v)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : b ? (r.mac = e, r.osname = "macOS") : O ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var y = "";
					r.windows ? y = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (r.osversion = y);
					var w = !r.windows && y.split(".")[0];
					return _ || c || "ipad" == o || a && (3 == w || w >= 4 && !g) || r.silk ? r.tablet = e : (g || "iphone" == o || "ipod" == o || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function o(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = r(e, (function(e) {
							var s = t - n(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, n, r) {
					var a = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = o, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var s = -1, n = null == e ? 0 : e.length; ++s < n;)
					if (!t(e[s], s, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = !0;
				return n(e, (function(e, n, r) {
					return s = !!t(e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, o) {
					s = n ? (n = !1, e) : t(s, e, r, o)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), n(r(e), t, s)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayEvery.js"),
				r = s("./node_modules/lodash/_baseEvery.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : r;
				return s && i(e, t, s) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : a,
					d = arguments.length < 3;
				return c(e, o(t, 4), s, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return pe
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
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

			function a(e) {
				var t = o(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function i(e) {
				return e instanceof o(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (i(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return r(l(e)).left + a(e).scrollLeft
			}

			function m(e) {
				return o(e).getComputedStyle(e)
			}

			function p(e) {
				var t = m(e),
					s = t.overflow,
					n = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(s + r + n)
			}

			function f(e, t, s) {
				void 0 === s && (s = !1);
				var n, i, m = l(t),
					f = r(e),
					h = c(t),
					b = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (h || !h && !s) && (("body" !== d(t) || p(m)) && (b = (n = t) !== o(n) && c(n) ? {
					scrollLeft: (i = n).scrollLeft,
					scrollTop: i.scrollTop
				} : a(n)), c(t) ? ((x = r(t)).x += t.clientLeft, x.y += t.clientTop) : m && (x.x = u(m))), {
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
				var s = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(b(t))
					}(e),
					n = "body" === d(s),
					r = o(s),
					a = n ? [r].concat(r.visualViewport || [], p(s) ? s : []) : s,
					i = t.concat(a);
				return n ? i : i.concat(x(b(a)))
			}

			function E(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function v(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function _(e) {
				for (var t = o(e), s = v(e); s && E(s) && "static" === m(s).position;) s = v(s);
				return s && "body" === d(s) && "static" === m(s).position ? t : s || function(e) {
					for (var t = b(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var s = m(t);
						if ("none" !== s.transform || "none" !== s.perspective || "auto" !== s.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var g = "top",
				O = "bottom",
				y = "right",
				w = "left",
				S = "auto",
				C = [g, O, y, w],
				j = "start",
				k = "end",
				N = "clippingParents",
				T = "viewport",
				I = "popper",
				P = "reference",
				L = C.reduce((function(e, t) {
					return e.concat([t + "-" + j, t + "-" + k])
				}), []),
				A = [].concat(C, [S]).reduce((function(e, t) {
					return e.concat([t, t + "-" + j, t + "-" + k])
				}), []),
				M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function F(e) {
				var t = new Map,
					s = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					s.has(e.name) || function e(r) {
						s.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(n) {
							if (!s.has(n)) {
								var r = t.get(n);
								r && e(r)
							}
						})), n.push(r)
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

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					s = t.defaultModifiers,
					n = void 0 === s ? [] : s,
					r = t.defaultOptions,
					o = void 0 === r ? D : r;
				return function(e, t, s) {
					void 0 === s && (s = o);
					var r, a, c = {
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
						l = !1,
						u = {
							state: c,
							setOptions: function(s) {
								m(), c.options = Object.assign(Object.assign(Object.assign({}, o), c.options), s), c.scrollParents = {
									reference: i(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var r = function(e) {
									var t = F(e);
									return M.reduce((function(e, s) {
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
								return c.orderedModifiers = r.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										s = e.options,
										n = void 0 === s ? {} : s,
										r = e.effect;
									if ("function" == typeof r) {
										var o = r({
											state: c,
											name: t,
											instance: u,
											options: n
										});
										d.push(o || function() {})
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
											reference: f(t, _(s), "fixed" === c.options.strategy),
											popper: h(s)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var r = c.orderedModifiers[n],
													o = r.fn,
													a = r.options,
													i = void 0 === a ? {} : a,
													d = r.name;
												"function" == typeof o && (c = o({
													state: c,
													options: i,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(r())
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
			var V = {
				passive: !0
			};

			function B(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function Y(e) {
				var t, s = e.reference,
					n = e.element,
					r = e.placement,
					o = r ? B(r) : null,
					a = r ? W(r) : null,
					i = s.x + s.width / 2 - n.width / 2,
					c = s.y + s.height / 2 - n.height / 2;
				switch (o) {
					case g:
						t = {
							x: i,
							y: s.y - n.height
						};
						break;
					case O:
						t = {
							x: i,
							y: s.y + s.height
						};
						break;
					case y:
						t = {
							x: s.x + s.width,
							y: c
						};
						break;
					case w:
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
				var d = o ? H(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case j:
							t[d] = Math.floor(t[d]) - Math.floor(s[l] / 2 - n[l] / 2);
							break;
						case k:
							t[d] = Math.floor(t[d]) + Math.ceil(s[l] / 2 - n[l] / 2)
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

			function z(e) {
				var t, s = e.popper,
					n = e.popperRect,
					r = e.placement,
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
					h = a.hasOwnProperty("y"),
					b = w,
					x = g,
					E = window;
				if (d) {
					var v = _(s);
					v === o(s) && (v = l(s)), r === g && (x = O, p -= v.clientHeight - n.height, p *= c ? 1 : -1), r === w && (b = y, m -= v.clientWidth - n.width, m *= c ? 1 : -1)
				}
				var S, C = Object.assign({
					position: i
				}, d && G);
				return c ? Object.assign(Object.assign({}, C), {}, ((S = {})[x] = h ? "0" : "", S[b] = f ? "0" : "", S.transform = (E.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", S)) : Object.assign(Object.assign({}, C), {}, ((t = {})[x] = h ? p + "px" : "", t[b] = f ? m + "px" : "", t.transform = "", t))
			}
			var q = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return q[e]
				}))
			}
			var Q = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return Q[e]
				}))
			}

			function J(e, t) {
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

			function K(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === T ? K(function(e) {
					var t = o(e),
						s = l(e),
						n = t.visualViewport,
						r = s.clientWidth,
						a = s.clientHeight,
						i = 0,
						c = 0;
					return n && (r = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = n.offsetLeft, c = n.offsetTop)), {
						width: r,
						height: a,
						x: i + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : K(function(e) {
					var t = l(e),
						s = a(e),
						n = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						i = -s.scrollLeft + u(e),
						c = -s.scrollTop;
					return "rtl" === m(n || t).direction && (i += Math.max(t.clientWidth, n ? n.clientWidth : 0) - r), {
						width: r,
						height: o,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, s) {
				var n = "clippingParents" === t ? function(e) {
						var t = x(e),
							s = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? _(e) : e;
						return i(s) ? t.filter((function(e) {
							return i(e) && J(e, s)
						})) : []
					}(e) : [].concat(t),
					r = [].concat(n, [s]),
					o = r[0],
					a = r.reduce((function(t, s) {
						var n = $(e, s);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), $(e, o));
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
					o = void 0 === n ? e.placement : n,
					a = s.boundary,
					c = void 0 === a ? N : a,
					d = s.rootBoundary,
					u = void 0 === d ? T : d,
					m = s.elementContext,
					p = void 0 === m ? I : m,
					f = s.altBoundary,
					h = void 0 !== f && f,
					b = s.padding,
					x = void 0 === b ? 0 : b,
					E = te("number" != typeof x ? x : se(x, C)),
					v = p === I ? P : I,
					_ = e.elements.reference,
					w = e.rects.popper,
					S = e.elements[h ? v : p],
					j = ee(i(S) ? S : S.contextElement || l(e.elements.popper), c, u),
					k = r(_),
					L = Y({
						reference: k,
						element: w,
						strategy: "absolute",
						placement: o
					}),
					A = K(Object.assign(Object.assign({}, w), L)),
					M = p === I ? A : k,
					F = {
						top: j.top - M.top + E.top,
						bottom: M.bottom - j.bottom + E.bottom,
						left: j.left - M.left + E.left,
						right: M.right - j.right + E.right
					},
					D = e.modifiersData.offset;
				if (p === I && D) {
					var R = D[o];
					Object.keys(F).forEach((function(e) {
						var t = [y, O].indexOf(e) >= 0 ? 1 : -1,
							s = [g, O].indexOf(e) >= 0 ? "y" : "x";
						F[e] += R[s] * t
					}))
				}
				return F
			}

			function re(e, t, s) {
				return Math.max(e, Math.min(t, s))
			}

			function oe(e, t, s) {
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
				return [g, y, O, w].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ie = U({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								s = e.instance,
								n = e.options,
								r = n.scroll,
								a = void 0 === r || r,
								i = n.resize,
								c = void 0 === i || i,
								d = o(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", s.update, V)
								})), c && d.addEventListener("resize", s.update, V),
								function() {
									a && l.forEach((function(e) {
										e.removeEventListener("scroll", s.update, V)
									})), c && d.removeEventListener("resize", s.update, V)
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
							t.modifiersData[s] = Y({
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
								r = void 0 === n || n,
								o = s.adaptive,
								a = void 0 === o || o,
								i = {
									placement: B(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), z(Object.assign(Object.assign({}, i), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), z(Object.assign(Object.assign({}, i), {}, {
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
									r = t.elements[e];
								c(r) && d(r) && (Object.assign(r.style, s), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
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
											r = t.attributes[e] || {},
											o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(n) && d(n) && (Object.assign(n.style, o), Object.keys(r).forEach((function(e) {
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
								r = s.offset,
								o = void 0 === r ? [0, 0] : r,
								a = A.reduce((function(e, s) {
									return e[s] = function(e, t, s) {
										var n = B(e),
											r = [w, g].indexOf(n) >= 0 ? -1 : 1,
											o = "function" == typeof s ? s(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : s,
											a = o[0],
											i = o[1];
										return a = a || 0, i = (i || 0) * r, [w, y].indexOf(n) >= 0 ? {
											x: i,
											y: a
										} : {
											x: a,
											y: i
										}
									}(s, t.rects, o), e
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
								for (var r = s.mainAxis, o = void 0 === r || r, a = s.altAxis, i = void 0 === a || a, c = s.fallbackPlacements, d = s.padding, l = s.boundary, u = s.rootBoundary, m = s.altBoundary, p = s.flipVariations, f = void 0 === p || p, h = s.allowedAutoPlacements, b = t.options.placement, x = B(b), E = c || (x === b || !f ? [Z(b)] : function(e) {
										if (B(e) === S) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(b)), v = [b].concat(E).reduce((function(e, s) {
										return e.concat(B(s) === S ? function(e, t) {
											void 0 === t && (t = {});
											var s = t,
												n = s.placement,
												r = s.boundary,
												o = s.rootBoundary,
												a = s.padding,
												i = s.flipVariations,
												c = s.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = W(n),
												u = (l ? i ? L : L.filter((function(e) {
													return W(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, s) {
													return t[s] = ne(e, {
														placement: s,
														boundary: r,
														rootBoundary: o,
														padding: a
													})[B(s)], t
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
											allowedAutoPlacements: h
										}) : s)
									}), []), _ = t.rects.reference, k = t.rects.popper, N = new Map, T = !0, I = v[0], P = 0; P < v.length; P++) {
									var M = v[P],
										F = B(M),
										D = W(M) === j,
										R = [g, O].indexOf(F) >= 0,
										U = R ? "width" : "height",
										V = ne(t, {
											placement: M,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: d
										}),
										H = R ? D ? y : w : D ? O : g;
									_[U] > k[U] && (H = Z(H));
									var Y = Z(H),
										G = [];
									if (o && G.push(V[F] <= 0), i && G.push(V[H] <= 0, V[Y] <= 0), G.every((function(e) {
											return e
										}))) {
										I = M, T = !1;
										break
									}
									N.set(M, G)
								}
								if (T)
									for (var z = function(e) {
											var t = v.find((function(t) {
												var s = N.get(t);
												if (s) return s.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return I = t, "break"
										}, q = f ? 3 : 1; q > 0; q--) {
										if ("break" === z(q)) break
									}
								t.placement !== I && (t.modifiersData[n]._skip = !0, t.placement = I, t.reset = !0)
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
								r = s.mainAxis,
								o = void 0 === r || r,
								a = s.altAxis,
								i = void 0 !== a && a,
								c = s.boundary,
								d = s.rootBoundary,
								l = s.altBoundary,
								u = s.padding,
								m = s.tether,
								p = void 0 === m || m,
								f = s.tetherOffset,
								b = void 0 === f ? 0 : f,
								x = ne(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								E = B(t.placement),
								v = W(t.placement),
								S = !v,
								C = H(E),
								k = "x" === C ? "y" : "x",
								N = t.modifiersData.popperOffsets,
								T = t.rects.reference,
								I = t.rects.popper,
								P = "function" == typeof b ? b(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : b,
								L = {
									x: 0,
									y: 0
								};
							if (N) {
								if (o) {
									var A = "y" === C ? g : w,
										M = "y" === C ? O : y,
										F = "y" === C ? "height" : "width",
										D = N[C],
										R = N[C] + x[A],
										U = N[C] - x[M],
										V = p ? -I[F] / 2 : 0,
										Y = v === j ? T[F] : I[F],
										G = v === j ? -I[F] : -T[F],
										z = t.elements.arrow,
										q = p && z ? h(z) : {
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
										X = Z[M],
										J = re(0, T[F], q[F]),
										K = S ? T[F] / 2 - V - J - Q - P : Y - J - Q - P,
										$ = S ? -T[F] / 2 + V + J + X + P : G + J + X + P,
										ee = t.elements.arrow && _(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										se = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										oe = N[C] + K - se - te,
										ae = N[C] + $ - se,
										ie = re(p ? Math.min(R, oe) : R, D, p ? Math.max(U, ae) : U);
									N[C] = ie, L[C] = ie - D
								}
								if (i) {
									var ce = "x" === C ? g : w,
										de = "x" === C ? O : y,
										le = N[k],
										ue = re(le + x[ce], le, le - x[de]);
									N[k] = ue, L[k] = ue - le
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
								r = s.elements.arrow,
								o = s.modifiersData.popperOffsets,
								a = B(s.placement),
								i = H(a),
								c = [w, y].indexOf(a) >= 0 ? "height" : "width";
							if (r && o) {
								var d = s.modifiersData[n + "#persistent"].padding,
									l = h(r),
									u = "y" === i ? g : w,
									m = "y" === i ? O : y,
									p = s.rects.reference[c] + s.rects.reference[i] - o[i] - s.rects.popper[c],
									f = o[i] - s.rects.reference[i],
									b = _(r),
									x = b ? "y" === i ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
									E = p / 2 - f / 2,
									v = d[u],
									S = x - l[c] - d[m],
									C = x / 2 - l[c] / 2 + E,
									j = re(v, C, S),
									k = i;
								s.modifiersData[n] = ((t = {})[k] = j, t.centerOffset = j - C, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								s = e.options,
								n = e.name,
								r = s.element,
								o = void 0 === r ? "[data-popper-arrow]" : r,
								a = s.padding,
								i = void 0 === a ? 0 : a;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && J(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof i ? i : se(i, C))
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
								r = t.rects.popper,
								o = t.modifiersData.preventOverflow,
								a = ne(t, {
									elementContext: "reference"
								}),
								i = ne(t, {
									altBoundary: !0
								}),
								c = oe(a, n),
								d = oe(i, r, o),
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
					var r = n.useRef(null),
						o = {
							onFirstUpdate: s.onFirstUpdate,
							placement: s.placement || "bottom",
							strategy: s.strategy || "absolute",
							modifiers: s.modifiers || me
						},
						a = n.useState({
							styles: {
								popper: {
									position: o.strategy,
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
								onFirstUpdate: o.onFirstUpdate,
								placement: o.placement,
								strategy: o.strategy,
								modifiers: [].concat(o.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(r.current, e) ? r.current || e : (r.current = e, e)
						}), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, d]),
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
				r = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (r && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								return !0
							}
							if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
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
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: r
				} = e;
				let a = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = r || Object(n.D)(e)
				} else a = Object(n.D)(e);
				const i = o.a.parse(a),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.oc, r.pb, r.B, r.Q, r.kb, r.Rb],
				a = {
					[r.Rb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.kb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.Q]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.B]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.oc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Rb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.Q]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.B]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.oc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.oc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.oc]: "",
						[r.pb]: "",
						[r.B]: "",
						[r.Q]: "",
						[r.kb]: "",
						[r.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? i : a)[n](e).toString()), u -= e * n
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "s", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "l", (function() {
				return f
			})), s.d(t, "m", (function() {
				return h
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "q", (function() {
				return g
			})), s.d(t, "o", (function() {
				return O
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				b = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				_ = "UPDATE_COLLECTION_LAYOUT_PENDING",
				g = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				O = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "l", (function() {
				return M
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "g", (function() {
				return R
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "h", (function() {
				return V
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				h = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				b = Object(r.a)(f),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				v = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(r.a)(E),
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				w = Object(r.a)(O),
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				k = Object(r.a)(C),
				N = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				I = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(r.a)(T),
				L = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(r.a)(I),
				M = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = Object(p.P)(o, {
							subredditId: e
						}).name;
					s(h());
					const i = await Object(c.k)(r(), a, t);
					if (i.ok) {
						s(b({
							subredditId: e,
							isEnabled: t
						}))
					} else s(x());
					return i.ok
				}, F = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = Object(p.P)(o, {
							subredditId: e
						}).name;
					s(v());
					const i = await Object(c.j)(r(), t, l.d.LinkFlair, a);
					if (i.ok) {
						s(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(g());
					return i.ok
				}, D = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const d = r(),
						m = Object(p.P)(d, {
							subredditId: t
						}).name;
					s(y());
					const f = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let h = f.ok && !(f.body && !1 === f.body.success);
					if (h) {
						const n = f.body;
						if (s(w({
								subredditId: t,
								template: n
							})), n.id) {
							const r = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[n.id];
							r ? h = await s(Object(a.d)(t, n.id, r)) : o && (h = await s(Object(a.c)(t, n.id)))
						}
					}
					if (h) {
						const e = Object(i.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(i.f)(e))
					} else {
						s(S());
						const r = Object(i.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), D(e, t));
						s(Object(i.f)(r))
					}
					return h
				}, R = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const a = r(),
						d = Object(p.P)(a, {
							subredditId: t
						}).name;
					if (s(j()), (await Object(c.b)(o(), e, d)).ok) {
						s(k({
							subredditId: t,
							templateId: e
						}));
						const r = Object(i.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(i.f)(r))
					} else {
						s(N());
						const r = Object(i.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), R(e, t));
						s(Object(i.f)(r))
					}
				}, U = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const a = r(),
						d = Object(m.d)(a, {
							subredditId: t
						}).templateIds,
						f = Object(p.P)(a, {
							subredditId: t
						}).name;
					if (s(P({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), f, l.d.LinkFlair, e)).ok) {
						s(L());
						const e = Object(i.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(i.f)(e))
					} else {
						s(A({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(i.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(i.f)(r))
					}
				}, V = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (n, r, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && i.unshift(t), n(Object(o.R)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const n = Object(d.g)(t);
						Object(c.h)(a(), e.id, s, n)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "c", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				a = s.n(o),
				i = s("./node_modules/lodash/values.js"),
				c = s.n(i),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				h = s("./src/reddit/constants/headers.ts");
			var b = s("./src/reddit/helpers/trackers/blade.ts"),
				x = s("./src/reddit/models/Image/index.tsx"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/telemetry/index.ts");
			const _ = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: n
			}) => async (r, o, a) => {
				const i = o(),
					c = Object(E.P)(i, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(l.k)(n));
				const d = await (async (e, t, s, n, r, o) => Object(p.a)(Object(f.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: m.jb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: o
					}
				}))(a.apiContext(), c.name, t, n.file.name, s, await Object(u.g)(n.file));
				let b = !1;
				try {
					const e = await Object(l.g)(o(), d, n, x.a.FlairTemplates);
					e && r(Object(l.j)(e)), b = !0
				} catch (v) {
					if (v instanceof Error) throw v;
					r(Object(l.i)(v))
				}
				return b
			}, g = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", O = Object(d.a)(g), y = (e, t, s) => async (n, o, i) => {
				const {
					apiContext: d
				} = i;
				let u = o();
				const {
					pendingImages: g,
					...y
				} = s;
				let w = y;
				const S = Object(E.P)(u, {
					subredditId: e
				});
				if (!S) return !1;
				const C = u.structuredStyles.flairTemplate.models[t];
				if (C && a()(C, w)) return !0;
				if (g) {
					const s = [];
					if (r()(g, (r, o) => {
							r && s.push(n(_({
								flairId: t,
								imageData: Object(x.m)(r),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					w = ((e, t, s) => {
						const n = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && s.imageUploads[e.id];
							r && r.kind === x.b.TempUploaded && (n[t] = r.url)
						}), n
					})(w, g, o())
				}
				u = o();
				let j = null,
					k = null;
				const N = [];
				try {
					(j = await Object(l.f)(u, x.a.FlairTemplates)) && (k = Object(l.m)(j)(n, o, i), N.push(...c()(j.imagesByKey)))
				} catch (L) {
					return !1
				}
				const T = await (async (e, t, s, n) => Object(p.a)(Object(f.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.jb.PUT,
						data: n
					}))(d(), S.name, t, w),
					I = C ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(b.e)(u, I);
				if (T.ok) {
					let e;
					if (k) try {
						await k, e = ((e, t, s) => {
							const n = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === x.b.Uploaded && (e.url === n.postBackgroundImage ? n.postBackgroundImage = t.url : e.url === n.postPlaceholderImage && (n.postPlaceholderImage = t.url))
							}), n
						})(w, N, o())
					} catch (L) {
						e = null
					} else e = w;
					n(O({
						flairId: t,
						template: e || w
					}))
				} else j && j.websocket.close();
				return Object(v.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: T.ok
					}
				}), T.ok
			}, w = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", S = Object(d.a)(w), C = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const o = n(),
					a = Object(E.P)(o, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, s) => Object(p.a)(Object(f.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.jb.DELETE
					}))(r(), a.name, t),
					c = Object(b.e)(o, "delete_flair_template");
				return i.ok && s(S({
					flairId: t
				})), Object(v.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				r = s("./src/lib/opener/index.ts"),
				o = s("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (s, a, {
				routes: i
			}) => {
				const c = a();
				Object(n.a)(e, i, c) ? s(Object(o.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
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
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(i.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && o.a.createElement(a.a, {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

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
			}) => r.a.createElement(a.b, d({
				className: Object(o.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: s,
				forceShowNSFW: n,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: u,
				templatePlaceholderImage: m,
				thumbnailContainerClassName: p,
				url: f,
				usePreview: h
			}) => r.a.createElement("div", {
				className: Object(o.a)(c.a.thumbnailContainer, e)
			}, r.a.createElement(a.a, {
				className: Object(o.a)(c.a.thumbnail, t),
				containerClassName: p,
				crosspost: s,
				forceShowNSFW: n,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: u,
				templatePlaceholderImage: m,
				url: u ? void 0 : f,
				usePreview: h
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SearchResultsClassicPost", (function() {
				return re
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/config.ts"),
				f = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/Econ/Audio/index.m.less"),
				x = s.n(b),
				E = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				v = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, s = () => Math.floor(10 * Math.random() + 1), o = Object(f.e)(h.X), [i, c] = Object(n.useState)(!1), [d, l] = Object(n.useState)(s());
					return Object(n.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), l(s())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? r.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, r.a.createElement("div", {
						className: x.a.classicSpeaker
					}, i && r.a.createElement(v.a, {
						className: Object(a.a)(x.a.speakerRings, {
							[x.a.nightMode]: o
						})
					}), r.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: x.a.snoovatar,
						src: `${p.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: _._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !i && r.a.createElement("div", {
						className: x.a.muteContainer
					}, r.a.createElement(E.a, {
						className: x.a.muteIcon
					})))) : r.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, r.a.createElement(E.a, {
						className: x.a.muteIcon
					}))
				},
				O = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				y = s("./src/reddit/components/ExpandoButton/index.tsx"),
				w = s("./src/reddit/components/Flatlist/index.tsx"),
				S = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				j = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				k = s("./src/reddit/components/ModModeReports/index.tsx"),
				N = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				I = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				P = s("./src/reddit/components/PostContainer/index.tsx"),
				L = s("./src/reddit/components/PostMeta/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				F = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				R = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				U = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				V = s("./src/reddit/models/Audio/index.ts"),
				B = s("./src/reddit/models/Media/index.ts"),
				W = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				H = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Y = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				G = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/contexts/Post/index.tsx"),
				q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Q = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				X = s("./src/reddit/helpers/search/renderMedia.tsx"),
				J = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				K = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(K),
				ee = s("./src/reddit/components/ClassicPost/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						handleVote: p,
						isExpanded: f,
						inSubredditOrProfile: h,
						eventFactory: b,
						first: x,
						flairStyleTemplate: E,
						formatTitle: v,
						hostPostData: _,
						isCheckboxSelected: H,
						isCurrentUserProfilePost: Y,
						isFrontpage: z,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: ee,
						isOverlay: ne,
						imageGalleryCurrentItem: re,
						moderatorPermissions: oe,
						modModeEnabled: ae,
						onClickPost: ie,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						onSizeChanged: le,
						poll: ue,
						post: me,
						postId: pe,
						redditStyle: fe,
						scrollerItemRef: he,
						showBulkActionCheckbox: be,
						showEditFlair: xe,
						showMedia: Ee,
						subredditOrProfile: ve,
						toggleCheckbox: _e,
						userIsOp: ge,
						shouldShowGalleryTileOption: Oe,
						showPromotedCTA: ye
					} = e, we = Object(d.a)(f);
					Object(n.useEffect)(() => {
						le && we !== f && le(me.id)
					}, [f, le, me.id, we]);
					const Se = fe ? void 0 : E,
						Ce = s || void 0,
						je = Object(Q.a)(oe),
						ke = Object(q.a)(oe),
						Ne = Object(Z.a)(oe),
						Te = ae && Q.a,
						Ie = Object(j.c)(me),
						Pe = Object(N.c)(me),
						Le = !!me.media && me.media.type === B.o.RTJSON,
						Ae = ge && Le,
						Me = h && !Ee,
						Fe = !!me.media && Object(B.H)(me.media),
						De = !!me.recommendationContext,
						Re = {
							flairStyleTemplate: Se,
							post: me,
							inSubredditOrProfile: h,
							isCurrentUserProfilePost: Y,
							isOverlay: ne,
							shouldShowSubscribeButton: !(z && ee) || De && ee,
							subredditOrProfile: ve
						},
						Ue = Object(o.t)(me, re),
						{
							source: Ve
						} = Ue;
					let Be = r.a.createElement(W.a, {
						className: te.a.classicThumbnail,
						crosspost: Ce && me,
						isMeta: me.isMeta,
						post: Ce || me,
						redditStyle: fe,
						templatePlaceholderImage: Se && Se.postPlaceholderImage,
						removeLink: Fe
					});
					Object(V.b)(me) && (Be = r.a.createElement(g, {
						post: me
					}));
					const We = r.a.createElement(P.a, {
						className: Object(a.a)($.a.classicPostStyles, te.a.postContainer, Object(J.a)(e), x ? te.a.mFirst : void 0, t),
						isOverlay: ne,
						style: {
							...Object(J.d)(e),
							...Object(J.b)(Se)
						},
						post: me,
						onClick: ie,
						eventFactory: b
					}, r.a.createElement(M.a, {
						model: me,
						handleVote: p,
						showBulkActionCheckbox: be,
						isCheckboxSelected: H,
						toggleCheckbox: _e,
						flairStyleTemplate: Se,
						redditStyle: fe,
						postId: pe
					}), r.a.createElement(I.a, {
						"data-click-id": "background",
						flairStyleTemplate: Se
					}, r.a.createElement(O.a, {
						className: te.a.eventMeta,
						post: me
					}), r.a.createElement("div", {
						className: te.a.mainBody
					}, r.a.createElement("div", {
						className: Me ? te.a.expandoContainer : te.a.thumbnailContainer
					}, !Me && Be, r.a.createElement(y.a, {
						crosspost: Ce,
						className: te.a.rightExpando,
						isExpanded: !!f,
						post: me,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(te.a.content, {
							[te.a.showBulkActionCheckbox]: be
						}),
						"data-click-id": "body"
					}, !!me.recommendationContext && r.a.createElement(T.a, {
						content: me.recommendationContext.content,
						layout: G.g.Classic,
						post: me
					}), r.a.createElement(F.c, {
						className: ue ? te.a.titleWithPoll : void 0,
						format: v,
						poll: ue,
						post: me,
						redditStyle: fe,
						size: F.b.Medium,
						titleColor: Se && Se.postTitleColor,
						isOverlay: ne
					}, me.source && !Ce && r.a.createElement(U.a, {
						href: me.source.url,
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source
					}, Object(c.a)(me))), r.a.createElement(L.a, se({
						key: "PostMeta"
					}, Re)), ae && je && Ie && r.a.createElement(C.a, {
						thing: me
					}), ae && je && Pe && r.a.createElement(k.a, {
						onIgnoreReports: ce,
						reportable: me
					}), ye && Ve && Ve.url && r.a.createElement(l.a, {
						className: te.a.adLinkWrapper
					}, r.a.createElement(u.a, {
						post: me,
						adLinkContent: Ue
					})), r.a.createElement("div", {
						className: te.a.flatlistContainer
					}, r.a.createElement(y.a, {
						className: te.a.leftExpando,
						crosspost: Ce,
						isExpanded: !!f,
						post: me,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Se,
						model: me,
						onVoteClick: p
					}), r.a.createElement(w.a, {
						className: te.a.flatlistSeparator
					}), r.a.createElement(w.c, {
						className: te.a.flatlist,
						currentUser: i,
						hasModFlairPerms: ke,
						hasModPostPerms: je,
						hasModFullPerms: Ne,
						hostPostData: _,
						isOverlay: !!ne,
						modModeEnabled: ae,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: me,
						showEditPost: Ae,
						showEditFlair: xe,
						tooltipType: ne ? D.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(A.b)({
							editPost: !Te,
							hide: !Te,
							report: !Te
						})
					})), r.a.createElement(S.d, null))), Object(X.a)(me, te.a, he, f, Oe, K)));
					return r.a.createElement(R.b, null, We)
				}),
				re = Object(z.b)(Object(Y.a)(ne));
			t.default = Object(H.a)(ne)
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
			const u = Object(a.a)(({
				className: e,
				...t
			}) => r.a.createElement(i.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, r.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), r.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), r.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				opacity: "0.8"
			}, r.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), r.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), r.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#FF538C"
			}), r.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), r.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#FF538C"
			}), r.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), r.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#FF538C"
			}), r.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const f = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const n = s && s.eventInfo,
					i = Object(l.a)(s),
					m = n && Object(a.c)(n.eventStart, n.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, r.a.createElement(f, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: s
				}), !i && m && r.a.createElement(d.a, {
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
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => r.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => r.a.createElement("i", {
					className: Object(i.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				f = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(f),
				b = s("./src/lib/lessComponent.tsx");
			const x = b.a.span("PostEventFutureText", h.a),
				E = b.a.span("PostEventPastText", h.a),
				v = b.a.span("PostEventNowText", h.a),
				_ = b.a.span("Container", h.a),
				g = b.a.wrapped(u, "CalendarIcon", h.a),
				O = b.a.wrapped(m, "LiveIcon", h.a),
				y = b.a.div("LoadingState", h.a);
			class w extends n.Component {
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
						eventIsLive: i,
						eventStart: c
					} = s, d = Object(o.e)(c, n);
					let l, u;
					if (this.state.mounted || d === o.a.Live) l = r.a.createElement(p.c, {
						startTime: c,
						endTime: n,
						isLive: i
					});
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						l = r.a.createElement(y, {
							className: e
						})
					}
					if (i) u = r.a.createElement(v, null, r.a.createElement(O, null), l);
					else if (d === o.a.Future) u = r.a.createElement(x, null, r.a.createElement(g, null), l);
					else {
						if (d !== o.a.Past) return null;
						u = r.a.createElement(E, null, r.a.createElement(g, null), l)
					}
					return r.a.createElement(_, {
						className: e
					}, u)
				}
			}
			t.a = w
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/telemetry/models/Outbound.ts"),
				b = s("./src/reddit/components/ExpandoButton/index.m.less"),
				x = s.n(b);
			const E = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				v = (e, t = !1, s) => {
					const n = Object(c.a)(x.a.icon, x.a.hideOnHover);
					if (t) return o.a.createElement(p.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return o.a.createElement(p.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return o.a.createElement(p.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case f.o.GIFVIDEO:
							return o.a.createElement(p.a, {
								name: "gif_post",
								className: n
							});
						case f.o.IMAGE:
							return o.a.createElement(p.a, {
								name: "image_post",
								className: n
							});
						case f.o.TEXT:
						case f.o.RTJSON:
							return o.a.createElement(p.a, {
								name: "text_post",
								className: n
							});
						case f.o.VIDEO:
							return o.a.createElement(p.a, {
								name: "video_post",
								className: n
							});
						case f.o.GALLERY:
							return o.a.createElement(p.a, {
								name: "media_gallery",
								className: n
							});
						case f.o.EMBED:
						default:
							return o.a.createElement(p.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = E(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isCommentsPage: a,
					isExpanded: l,
					post: f,
					toggle: b,
					useMediaIcons: E
				} = e, _ = s || f, g = r && !!s;
				return _.media && !(("rtjson" === _.media.type || "text" === _.media.type || "liveaudio" === _.media.type) && !Object(m.a)(_)) || !!f.pollData ? o.a.createElement("button", {
					"aria-expanded": !!l,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": l ? "expando_close" : "expando_open",
					onClick: b
				}, l ? o.a.createElement(p.a, {
					name: "collapse",
					className: x.a.icon
				}) : E ? o.a.createElement(o.a.Fragment, null, v(_.media && _.media.type, g, f), o.a.createElement(p.a, {
					name: "expand",
					className: Object(c.a)(x.a.icon, x.a.showOnHover)
				})) : o.a.createElement(p.a, {
					name: "expand",
					className: x.a.icon
				})) : _.source && _.source.url ? o.a.createElement(u.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					href: _.source.url,
					isSponsored: f.isSponsored,
					postId: f.id,
					source: f.source,
					sourceElement: a ? h.SourceElement.PostImage : h.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(p.a, {
					name: "external_link",
					className: Object(c.a)(x.a.icon, x.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(_.permalink),
					rel: "nofollow"
				}, o.a.createElement(p.a, {
					name: "text_post",
					className: x.a.icon
				}))
			})
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
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			}));
			const n = s("./src/lib/constants/index.ts").l.toLowerCase(),
				r = e => "string" == typeof e.bannedBy && e.bannedBy.toLowerCase() === n,
				o = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				a = e => r(e) || o(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(n.a)({
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(n.a)({
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = s.n(d);
			const u = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: s
			}) => r.a.createElement(i.a, {
				className: Object(o.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: u(s),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				o = s("./src/lib/timeUntil/index.ts"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Rb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
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
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, a), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(_);
			const O = Object(p.a)(() => Object(o.c)({
				basePixelMetadata: Object(E.a)((e, {
					post: t
				}) => Object(h.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(h.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(b.actionInfo)(e).pageType
			}));
			class y extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: h,
						style: b,
						ref: E,
						shouldAddGalleryViewability: v = !0
					} = this.props, _ = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: b,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(a.t)(l, o);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(g.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), O = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || O ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, _) : l.media && Object(f.E)(l.media) && v ? r.a.createElement(u, {
						postId: l.id
					}, _) : _
				}
			}
			t.a = O(Object(v.a)(Object(m.c)(y)))
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
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(u.o)({
							postId: s,
							isFollowed: o
						}) : Object(u.g)({
							postId: s,
							isFollowed: o
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
					} = this.props, r = this.state.isHovered, a = s.isFollowed;
					let i = a ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && r && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const h = Object(a.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
					flairStyleTemplate: h,
					redditStyle: b,
					isOverlay: x,
					isVoteCountAnimation: E,
					postId: v,
					isReadingIndicatorsExperimentEnabled: _
				} = e, g = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: b
				}, n && r.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), r.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: b,
					upvoteTooltipId: g,
					isVoteCountAnimation: E,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(o.a)(m.a.score, {
						[m.a.allowPointerEvents]: _
					}),
					isReadingIndicatorsExperimentEnabled: _
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return z
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/lib/getShortenedLink.ts"),
				S = s("./src/reddit/components/FlairWrapper/index.tsx"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				k = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				N = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				T = s.n(N);
			const I = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, L = Object(a.b)(I)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, T.a.proposalMetaData)
					}, o.a.createElement("span", null, C.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [C.fbt._param("count", Object(j.a)(n)), C.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(k.a, {
						className: T.a.proposalExpiry,
						poll: t
					}))
				})),
				A = s("./src/reddit/components/SEOTitle/index.tsx"),
				M = s("./src/reddit/selectors/experiments/econ/index.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/PostTitle/index.m.less"),
				R = s.n(D),
				U = s("./src/config.ts"),
				V = s("./src/reddit/hooks/useClickSourceData.ts"),
				B = s("./src/reddit/hooks/useExperimentVariant.ts"),
				W = s("./src/reddit/hooks/usePostContext.ts"),
				H = s("./src/reddit/hooks/useTheme.ts"),
				Y = s("./src/telemetry/models/Outbound.ts");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const z = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: r,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(H.a)();
					let d = "";
					switch (e) {
						case P.ExtraLarge:
							d = R.a.ExtraLarge;
							break;
						case P.Large:
							d = R.a.Large;
							break;
						case P.Medium:
							d = R.a.Medium;
							break;
						case P.Small:
							d = R.a.Small;
							break;
						case P.ExtraSmall:
							d = R.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(R.a.Title, a, d, {
							[R.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(y.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, s ? o.a.createElement(A.b, {
						type: s
					}, r) : r)
				},
				q = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: n,
					...r
				}) => o.a.createElement(i.a, G({}, r, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), n),
				Z = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: n
				}) => o.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, s, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, n),
				Q = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.db,
					isTournamentPredictionPostV2: M.x
				}),
				X = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(V.a)(), a = Object(B.a)(m.pd) === m.wd.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(Z, {
						nowrap: e.nowrap
					}, o.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(J, e)); {
						const i = t.media && Object(O.H)(t.media) ? Object(v.c)(t.id, s.name) : t.permalink,
							c = e.isCommentPermalink ? Object(E.b)(i) : a ? Object(b.a)(i, void 0, r) : Object(b.a)(i);
						return o.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(f.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement(J, t)) : o.a.createElement(J, t)
						})(t, e) : o.a.createElement(q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, o.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? A.a.PostComments : A.a.PostItem;
					return o.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(S.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				K = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = e.isCommentsPage ? Y.SourceElement.PostLink : Y.SourceElement.ListingPostLink, a = !t && !e.isCrosspost && e.size !== P.Large && !s.isSponsored && !(s.media && Object(O.H)(s.media)) && (s.source || s.media && (s.media.type === O.o.GIFVIDEO || s.media.type === O.o.IMAGE || s.media.type === O.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return o.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(O.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(w.a)(s), !s.isSponsored && o.a.createElement(_.a, {
							name: "external_link",
							className: R.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return o.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(w.a)(s), !s.isSponsored && o.a.createElement(_.a, {
						name: "external_link",
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(y.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(y.a)(this.props).titleText,Object(y.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: s,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: a,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, m = n === g.b.Left, p = Object(S.b)(c), f = d ? p.filter(e => e.type === g.f.Nsfw || e.type === g.f.Spoiler) : m ? p.filter(e => Object(x.q)(e.type)) : [], h = d ? [] : m ? p.filter(e => !Object(x.q)(e.type)) : p, b = !a && !r, E = !s && f && f.length > 0 && b, v = !s && h && h.length > 0 && b, _ = !(u && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return o.a.createElement("div", {
						className: Object(l.a)(R.a.Component, t, c.id)
					}, !d && E && o.a.createElement(S.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), _ && o.a.createElement(X, G({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && o.a.createElement(L, {
						className: R.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(K, this.props), v && o.a.createElement(S.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					n = Object(W.a)(),
					r = Object(a.e)(r => Q(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					i = Object(H.a)(),
					c = Object(u.b)();
				return n ? o.a.createElement($, G({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: i,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "b", (function() {
				return v
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/showPromotedCTA.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: x.b,
					activeModalId: u.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: x.K,
					showPromotedCTA: b.a,
					moderatorPermissions: p.l,
					modModeEnabled: d.S,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.U
				},
				v = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === i.a.upvoted ? Object(o.db)(t) : Object(o.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.Z)(t)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}),
				_ = Object(n.b)(() => Object(r.c)(E), v, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(_(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(i.u)({
					searchQuery: i.Y
				}),
				u = Object(o.b)(() => Object(a.c)(d.c), d.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: Object(c.a)(s.searchQuery || "", e => r.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => r.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const a = new n.a(250),
				i = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let i = a.get(r);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							i = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), a.set(r, i)
						}
						return i
					}
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				f = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(f);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					}, s = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, b({}, t, {
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
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(i.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(x, b({
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
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(o);
			t.a = n.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, a = o;
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: r
				} = e;
				return t && s && n && r ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function r(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
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
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, o, a) => n ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, o, a)) : i(e, s, o, a) : null,
				i = (e, t, s, n) => r.a.createElement(o.a, {
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
				return h
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				f = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				b = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "y", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "r", (function() {
				return h
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "x", (function() {
				return j
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return P
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.p)(e)
				}),
				i = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: a(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: a(e)
				}),
				b = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				_ = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				g = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				O = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : g[e],
					...o(t)
				}),
				y = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				w = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(n.l)(e),
					...o(a),
					actionInfo: r.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				C = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				k = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: a(t)
				}),
				N = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: a(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				P = () => (e, t) => {
					const s = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = r.a) {
				return Object(n.e)(s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, r.a.createElement("g", {
				fill: "none"
			}, r.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), r.a.createElement("rect", {
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
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			var n, r, o = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const a = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "p", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === r.a.Subreddit;
			var p, f, h, b;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(b || (b = {}));
			const x = e => f[b[e]],
				E = e => b[f[e]],
				v = e => h[f[e]],
				_ = e => f[h[e]],
				g = e => b[h[e]];
			var O;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const y = e => {
					switch (e) {
						case O.Hourly:
						case O.Daily:
						case O.Weekly:
						case O.Monthly:
							return !0
					}
					return !1
				},
				w = "custom",
				S = e => {
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
							return Object(n.a)(e)
					}
				},
				C = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case r.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case r.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = s("./src/lib/constants/specialMembership.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][r] : n[c.a.Achievement][r] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][r] : n[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(a.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, s) => {
					const n = t[e.id],
						r = t[s.id];
					return Object(a.b)(n, r)
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
				Object.keys(e.collections).forEach(s => {
					const n = e.collections[s],
						r = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && s.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), s, n, t), u(Object.keys(e.products).map(t => e.products[t]), s, n, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
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
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: f(s),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const i = e => Object(o.c)(e, {
					experimentName: r.te,
					experimentEligibilitySelector: o.a
				}),
				c = (e, t) => t === r.Ce.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(a.H, i, (e, t) => c(e, t));
			Object(n.a)((e, t) => t, i, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.31dfd97a1f1df873d679.js.map