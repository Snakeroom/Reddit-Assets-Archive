// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.83a730180a303b1c8cf7.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
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
					var s, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !o && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						_ = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						g = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: E || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: E || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, _ ? (s.msedge = e, s.version = _) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: _
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || E
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
						version: E || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, E && (s.version = E)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, E && (s.version = E)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && E && (s.version = E)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : g ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : x && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var v = "";
					s.windows ? v = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? v = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? v = (v = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? v = (v = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? v = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? v = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? v = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? v = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (v = n(/tizen[\/\s](\d+(\.\d+)*)/i)), v && (s.osversion = v);
					var S = !s.windows && v.split(".")[0];
					return y || c || "ipad" == o || i && (3 == S || S >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, s) {
					var i = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
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
			var r = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return r(e, (function(e, r, s) {
					return n = !!t(e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, o) {
					n = r ? (r = !1, e) : t(n, e, s, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : s;
				return n && a(e, t, n) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, s)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var r = n("./node_modules/react/index.js");

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

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return s(l(e)).left + i(e).scrollLeft
			}

			function m(e) {
				return o(e).getComputedStyle(e)
			}

			function p(e) {
				var t = m(e),
					n = t.overflow,
					r = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + r)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var r, a, m = l(t),
					f = s(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || p(m)) && (h = (r = t) !== o(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), c(t) ? ((x = s(t)).x += t.clientLeft, x.y += t.clientTop) : m && (x.x = u(m))), {
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
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(h(t))
					}(e),
					r = "body" === d(n),
					s = o(n),
					i = r ? [s].concat(s.visualViewport || [], p(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(x(h(i)))
			}

			function _(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function E(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = o(e), n = E(e); n && _(n) && "static" === m(n).position;) n = E(n);
				return n && "body" === d(n) && "static" === m(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = m(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				g = "bottom",
				v = "right",
				S = "left",
				C = "auto",
				P = [O, g, v, S],
				k = "start",
				w = "end",
				j = "clippingParents",
				N = "viewport",
				T = "popper",
				I = "reference",
				L = P.reduce((function(e, t) {
					return e.concat([t + "-" + k, t + "-" + w])
				}), []),
				D = [].concat(P, [C]).reduce((function(e, t) {
					return e.concat([t, t + "-" + k, t + "-" + w])
				}), []),
				A = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function M(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(s) {
						n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var s = t.get(r);
								s && e(s)
							}
						})), r.push(s)
					}(e)
				})), r
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

			function B(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					s = t.defaultOptions,
					o = void 0 === s ? R : s;
				return function(e, t, n) {
					void 0 === n && (n = o);
					var s, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, R), o),
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
								m(), c.options = Object.assign(Object.assign(Object.assign({}, o), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var s = function(e) {
									var t = M(e);
									return A.reduce((function(e, n) {
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
								return c.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										s = e.effect;
									if ("function" == typeof s) {
										var o = s({
											state: c,
											name: t,
											instance: u,
											options: r
										});
										d.push(o || function() {})
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
											reference: f(t, y(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var s = c.orderedModifiers[r],
													o = s.fn,
													i = s.options,
													a = void 0 === i ? {} : i,
													d = s.name;
												"function" == typeof o && (c = o({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, r = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(s())
									}))
								}))), i
							}),
							destroy: function() {
								m(), l = !0
							}
						};
					if (!F(e, t)) return u;

					function m() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var U = {
				passive: !0
			};

			function V(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function Y(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					r = e.element,
					s = e.placement,
					o = s ? V(s) : null,
					i = s ? W(s) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (o) {
					case O:
						t = {
							x: a,
							y: n.y - r.height
						};
						break;
					case g:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case v:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case S:
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
				var d = o ? Y(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case k:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case w:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - r[l] / 2)
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
					r = e.popperRect,
					s = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(i),
					m = u.x,
					p = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = S,
					x = O,
					_ = window;
				if (d) {
					var E = y(n);
					E === o(n) && (E = l(n)), s === O && (x = g, p -= E.clientHeight - r.height, p *= c ? 1 : -1), s === S && (h = v, m -= E.clientWidth - r.width, m *= c ? 1 : -1)
				}
				var C, P = Object.assign({
					position: a
				}, d && G);
				return c ? Object.assign(Object.assign({}, P), {}, ((C = {})[x] = b ? "0" : "", C[h] = f ? "0" : "", C.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", C)) : Object.assign(Object.assign({}, P), {}, ((t = {})[x] = b ? p + "px" : "", t[h] = f ? m + "px" : "", t.transform = "", t))
			}
			var z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function J(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return z[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Q(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function Z(e, t) {
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

			function K(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === N ? K(function(e) {
					var t = o(e),
						n = l(e),
						r = t.visualViewport,
						s = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return r && (s = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
						width: s,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : K(function(e) {
					var t = l(e),
						n = i(e),
						r = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === m(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - s), {
						width: s,
						height: o,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? y(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Z(e, n)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(r, [n]),
					o = s[0],
					i = s.reduce((function(t, n) {
						var r = $(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
					}), $(e, o));
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

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					o = void 0 === r ? e.placement : r,
					i = n.boundary,
					c = void 0 === i ? j : i,
					d = n.rootBoundary,
					u = void 0 === d ? N : d,
					m = n.elementContext,
					p = void 0 === m ? T : m,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					_ = te("number" != typeof x ? x : ne(x, P)),
					E = p === T ? I : T,
					y = e.elements.reference,
					S = e.rects.popper,
					C = e.elements[b ? E : p],
					k = ee(a(C) ? C : C.contextElement || l(e.elements.popper), c, u),
					w = s(y),
					L = H({
						reference: w,
						element: S,
						strategy: "absolute",
						placement: o
					}),
					D = K(Object.assign(Object.assign({}, S), L)),
					A = p === T ? D : w,
					M = {
						top: k.top - A.top + _.top,
						bottom: A.bottom - k.bottom + _.bottom,
						left: k.left - A.left + _.left,
						right: A.right - k.right + _.right
					},
					R = e.modifiersData.offset;
				if (p === T && R) {
					var F = R[o];
					Object.keys(M).forEach((function(e) {
						var t = [v, g].indexOf(e) >= 0 ? 1 : -1,
							n = [O, g].indexOf(e) >= 0 ? "y" : "x";
						M[e] += F[n] * t
					}))
				}
				return M
			}

			function se(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function oe(e, t, n) {
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
				return [O, v, g, S].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = B({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								r = e.options,
								s = r.scroll,
								i = void 0 === s || s,
								a = r.resize,
								c = void 0 === a || a,
								d = o(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, U)
								})), c && d.addEventListener("resize", n.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, U)
									})), c && d.removeEventListener("resize", n.update, U)
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
								r = n.gpuAcceleration,
								s = void 0 === r || r,
								o = n.adaptive,
								i = void 0 === o || o,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
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
									r = t.attributes[e] || {},
									s = t.elements[e];
								c(s) && d(s) && (Object.assign(s.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
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
										var r = t.elements[e],
											s = t.attributes[e] || {},
											o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(r) && d(r) && (Object.assign(r.style, o), Object.keys(s).forEach((function(e) {
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
								s = n.offset,
								o = void 0 === s ? [0, 0] : s,
								i = D.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = V(e),
											s = [S, O].indexOf(r) >= 0 ? -1 : 1,
											o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = o[0],
											a = o[1];
										return i = i || 0, a = (a || 0) * s, [S, v].indexOf(r) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, o), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i
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
								for (var s = n.mainAxis, o = void 0 === s || s, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, m = n.altBoundary, p = n.flipVariations, f = void 0 === p || p, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), _ = c || (x === h || !f ? [J(h)] : function(e) {
										if (V(e) === C) return [];
										var t = J(e);
										return [Q(e), t, Q(t)]
									}(h)), E = [h].concat(_).reduce((function(e, n) {
										return e.concat(V(n) === C ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												s = n.boundary,
												o = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? D : c,
												l = W(r),
												u = (l ? a ? L : L.filter((function(e) {
													return W(e) === l
												})) : P).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: s,
														rootBoundary: o,
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
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), y = t.rects.reference, w = t.rects.popper, j = new Map, N = !0, T = E[0], I = 0; I < E.length; I++) {
									var A = E[I],
										M = V(A),
										R = W(A) === k,
										F = [O, g].indexOf(M) >= 0,
										B = F ? "width" : "height",
										U = re(t, {
											placement: A,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: d
										}),
										Y = F ? R ? v : S : R ? g : O;
									y[B] > w[B] && (Y = J(Y));
									var H = J(Y),
										G = [];
									if (o && G.push(U[M] <= 0), a && G.push(U[Y] <= 0, U[H] <= 0), G.every((function(e) {
											return e
										}))) {
										T = A, N = !1;
										break
									}
									j.set(A, G)
								}
								if (N)
									for (var q = function(e) {
											var t = E.find((function(t) {
												var n = j.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, z = f ? 3 : 1; z > 0; z--) {
										if ("break" === q(z)) break
									}
								t.placement !== T && (t.modifiersData[r]._skip = !0, t.placement = T, t.reset = !0)
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
								s = n.mainAxis,
								o = void 0 === s || s,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								m = n.tether,
								p = void 0 === m || m,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = re(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								_ = V(t.placement),
								E = W(t.placement),
								C = !E,
								P = Y(_),
								w = "x" === P ? "y" : "x",
								j = t.modifiersData.popperOffsets,
								N = t.rects.reference,
								T = t.rects.popper,
								I = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								L = {
									x: 0,
									y: 0
								};
							if (j) {
								if (o) {
									var D = "y" === P ? O : S,
										A = "y" === P ? g : v,
										M = "y" === P ? "height" : "width",
										R = j[P],
										F = j[P] + x[D],
										B = j[P] - x[A],
										U = p ? -T[M] / 2 : 0,
										H = E === k ? N[M] : T[M],
										G = E === k ? -T[M] : -N[M],
										q = t.elements.arrow,
										z = p && q ? b(q) : {
											width: 0,
											height: 0
										},
										J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = J[D],
										Q = J[A],
										Z = se(0, N[M], z[M]),
										K = C ? N[M] / 2 - U - Z - X - I : H - Z - X - I,
										$ = C ? -N[M] / 2 + U + Z + Q + I : G + Z + Q + I,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === P ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][P] : 0,
										oe = j[P] + K - ne - te,
										ie = j[P] + $ - ne,
										ae = se(p ? Math.min(F, oe) : F, R, p ? Math.max(B, ie) : B);
									j[P] = ae, L[P] = ae - R
								}
								if (a) {
									var ce = "x" === P ? O : S,
										de = "x" === P ? g : v,
										le = j[w],
										ue = se(le + x[ce], le, le - x[de]);
									j[w] = ue, L[w] = ue - le
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
								s = n.elements.arrow,
								o = n.modifiersData.popperOffsets,
								i = V(n.placement),
								a = Y(i),
								c = [S, v].indexOf(i) >= 0 ? "height" : "width";
							if (s && o) {
								var d = n.modifiersData[r + "#persistent"].padding,
									l = b(s),
									u = "y" === a ? O : S,
									m = "y" === a ? g : v,
									p = n.rects.reference[c] + n.rects.reference[a] - o[a] - n.rects.popper[c],
									f = o[a] - n.rects.reference[a],
									h = y(s),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									_ = p / 2 - f / 2,
									E = d[u],
									C = x - l[c] - d[m],
									P = x / 2 - l[c] / 2 + _,
									k = se(E, P, C),
									w = a;
								n.modifiersData[r] = ((t = {})[w] = k, t.centerOffset = k - P, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								s = n.element,
								o = void 0 === s ? "[data-popper-arrow]" : s,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && Z(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, P))
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
								s = t.rects.popper,
								o = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								c = oe(i, r),
								d = oe(a, s, o),
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
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				me = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var s = r.useRef(null),
						o = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || me
						},
						i = r.useState({
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
						d = r.useMemo((function() {
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
						l = r.useMemo((function() {
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
						u = r.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || ae)(e, t, l);
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
				s = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: s
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = s || Object(r.D)(e)
				} else i = Object(r.D)(e);
				const a = o.a.parse(i),
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.pc, s.pb, s.B, s.Q, s.kb, s.Rb],
				i = {
					[s.Rb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.pc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[s.Rb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.pc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.pc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.pc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
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
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
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
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return g
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				y = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				g = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const c = i();
				Object(r.a)(e, a, c) ? n(Object(o.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !s && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(a.a, {
					href: c.url.replace(r.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && o.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Thumbnail/index.tsx"),
				a = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(a);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: n,
				forceShowNSFW: r,
				isMeta: a,
				post: d,
				redditStyle: l,
				removeLink: u,
				templatePlaceholderImage: m,
				thumbnailContainerClassName: p,
				url: f,
				usePreview: b
			}) => s.a.createElement("div", {
				className: Object(o.a)(c.a.thumbnailContainer, e)
			}, s.a.createElement(i.a, {
				className: Object(o.a)(c.a.thumbnail, t),
				containerClassName: p,
				crosspost: n,
				forceShowNSFW: r,
				isMeta: a,
				post: d,
				redditStyle: l,
				removeLink: u,
				templatePlaceholderImage: m,
				url: u ? void 0 : f,
				usePreview: b
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SearchResultsClassicPost", (function() {
				return se
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/ads/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/getShortenedLink.ts"),
				d = n("./src/lib/hooks/usePrevious.ts"),
				l = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = n("./src/config.ts"),
				f = n("./node_modules/react-redux/es/index.js"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Econ/Audio/index.m.less"),
				x = n.n(h),
				_ = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				E = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var O = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, n = () => Math.floor(10 * Math.random() + 1), o = Object(f.e)(b.W), [a, c] = Object(r.useState)(!1), [d, l] = Object(r.useState)(n());
					return Object(r.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), l(n())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? s.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, s.a.createElement("div", {
						className: x.a.classicSpeaker
					}, a && s.a.createElement(E.a, {
						className: Object(i.a)(x.a.speakerRings, {
							[x.a.nightMode]: o
						})
					}), s.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: x.a.snoovatar,
						src: `${p.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: y._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !a && s.a.createElement("div", {
						className: x.a.muteContainer
					}, s.a.createElement(_.a, {
						className: x.a.muteIcon
					})))) : s.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, s.a.createElement(_.a, {
						className: x.a.muteIcon
					}))
				},
				g = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = n("./src/reddit/components/ExpandoButton/index.tsx"),
				S = n("./src/reddit/components/Flatlist/index.tsx"),
				C = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				k = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				w = n("./src/reddit/components/ModModeReports/index.tsx"),
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				N = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				T = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = n("./src/reddit/components/PostContainer/index.tsx"),
				L = n("./src/reddit/components/PostMeta/index.tsx"),
				D = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				M = n("./src/reddit/components/PostTitle/index.tsx"),
				R = n("./src/reddit/components/PostTopMeta/index.tsx"),
				F = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				B = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = n("./src/reddit/models/Audio/index.ts"),
				V = n("./src/reddit/models/Media/index.ts"),
				W = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Y = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				H = n("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				G = n("./src/reddit/constants/postLayout.ts"),
				q = n("./src/reddit/contexts/Post/index.tsx"),
				z = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				J = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				X = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Q = n("./src/reddit/helpers/search/renderMedia.tsx"),
				Z = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				K = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = n.n(K),
				ee = n("./src/reddit/components/ClassicPost/index.m.less"),
				te = n.n(ee);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(a.a)(e => {
					const {
						className: t,
						crosspost: n,
						currentUser: a,
						handleVote: p,
						isExpanded: f,
						inSubredditOrProfile: b,
						eventFactory: h,
						first: x,
						flairStyleTemplate: _,
						formatTitle: E,
						hostPostData: y,
						isCheckboxSelected: Y,
						isCurrentUserProfilePost: H,
						isFrontpage: q,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: ee,
						isOverlay: re,
						imageGalleryCurrentItem: se,
						moderatorPermissions: oe,
						modModeEnabled: ie,
						onClickPost: ae,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						onSizeChanged: le,
						poll: ue,
						post: me,
						postId: pe,
						redditStyle: fe,
						scrollerItemRef: be,
						showBulkActionCheckbox: he,
						showEditFlair: xe,
						showMedia: _e,
						subredditOrProfile: Ee,
						toggleCheckbox: ye,
						userIsOp: Oe,
						shouldShowGalleryTileOption: ge,
						showPromotedCTA: ve
					} = e, Se = Object(d.a)(f);
					Object(r.useEffect)(() => {
						le && Se !== f && le(me.id)
					}, [f, le, me.id, Se]);
					const Ce = fe ? void 0 : _,
						Pe = n || void 0,
						ke = Object(X.a)(oe),
						we = Object(z.a)(oe),
						je = Object(J.a)(oe),
						Ne = ie && X.a,
						Te = Object(k.d)(me),
						Ie = Object(j.c)(me),
						Le = !!me.media && me.media.type === V.o.RTJSON,
						De = Oe && Le,
						Ae = b && !_e,
						Me = !!me.media && Object(V.H)(me.media),
						Re = !!me.recommendationContext,
						Fe = {
							flairStyleTemplate: Ce,
							post: me,
							inSubredditOrProfile: b,
							isCurrentUserProfilePost: H,
							isOverlay: re,
							shouldShowSubscribeButton: !(q && ee) || Re && ee,
							subredditOrProfile: Ee
						},
						Be = Object(o.t)(me, se),
						{
							source: Ue
						} = Be;
					let Ve = s.a.createElement(W.a, {
						className: te.a.classicThumbnail,
						crosspost: Pe && me,
						isMeta: me.isMeta,
						post: Pe || me,
						redditStyle: fe,
						templatePlaceholderImage: Ce && Ce.postPlaceholderImage,
						removeLink: Me
					});
					Object(U.b)(me) && (Ve = s.a.createElement(O, {
						post: me
					}));
					const We = s.a.createElement(I.a, {
						className: Object(i.a)($.a.classicPostStyles, te.a.postContainer, Object(Z.a)(e), x ? te.a.mFirst : void 0, t),
						isOverlay: re,
						style: {
							...Object(Z.d)(e),
							...Object(Z.b)(Ce)
						},
						post: me,
						onClick: ae,
						eventFactory: h
					}, s.a.createElement(A.a, {
						model: me,
						handleVote: p,
						showBulkActionCheckbox: he,
						isCheckboxSelected: Y,
						toggleCheckbox: ye,
						flairStyleTemplate: Ce,
						redditStyle: fe,
						postId: pe
					}), s.a.createElement(T.a, {
						"data-click-id": "background",
						flairStyleTemplate: Ce
					}, s.a.createElement(g.a, {
						className: te.a.eventMeta,
						post: me
					}), s.a.createElement("div", {
						className: te.a.mainBody
					}, s.a.createElement("div", {
						className: Ae ? te.a.expandoContainer : te.a.thumbnailContainer
					}, !Ae && Ve, s.a.createElement(v.a, {
						crosspost: Pe,
						className: te.a.rightExpando,
						isExpanded: !!f,
						post: me,
						useMediaIcons: !1
					})), s.a.createElement("div", {
						className: Object(i.a)(te.a.content, {
							[te.a.showBulkActionCheckbox]: he
						}),
						"data-click-id": "body"
					}, !!me.recommendationContext && s.a.createElement(N.a, {
						content: me.recommendationContext.content,
						layout: G.g.Classic,
						post: me
					}), s.a.createElement(M.c, {
						className: ue ? te.a.titleWithPoll : void 0,
						format: E,
						poll: ue,
						post: me,
						redditStyle: fe,
						size: M.b.Medium,
						titleColor: Ce && Ce.postTitleColor,
						isOverlay: re
					}, me.source && !Pe && s.a.createElement(B.a, {
						href: me.source.url,
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source
					}, Object(c.a)(me))), s.a.createElement(L.a, ne({
						key: "PostMeta"
					}, Fe)), ie && ke && Te && s.a.createElement(P.a, {
						thing: me
					}), ie && ke && Ie && s.a.createElement(w.a, {
						onIgnoreReports: ce,
						reportable: me
					}), ve && Ue && Ue.url && s.a.createElement(l.a, {
						className: te.a.adLinkWrapper
					}, s.a.createElement(u.a, {
						post: me,
						adLinkContent: Be
					})), s.a.createElement("div", {
						className: te.a.flatlistContainer
					}, s.a.createElement(v.a, {
						className: te.a.leftExpando,
						crosspost: Pe,
						isExpanded: !!f,
						post: me,
						useMediaIcons: !1
					}), s.a.createElement(m.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ce,
						model: me,
						onVoteClick: p
					}), s.a.createElement(S.a, {
						className: te.a.flatlistSeparator
					}), s.a.createElement(S.c, {
						className: te.a.flatlist,
						currentUser: a,
						hasModFlairPerms: we,
						hasModPostPerms: ke,
						hasModFullPerms: je,
						hostPostData: y,
						isOverlay: !!re,
						modModeEnabled: ie,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: me,
						showEditPost: De,
						showEditFlair: xe,
						tooltipType: re ? R.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(D.b)({
							editPost: !Ne,
							hide: !Ne,
							report: !Ne
						})
					})), s.a.createElement(C.d, null))), Object(Q.a)(me, te.a, be, f, ge, K)));
					return s.a.createElement(F.b, null, We)
				}),
				se = Object(q.b)(Object(H.a)(re));
			t.default = Object(Y.a)(re)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => s.a.createElement(a.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
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
				return S
			})), n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				m = n("./src/reddit/components/PostMeta/index.tsx"),
				p = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				_ = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/CrosspostBox/index.m.less"),
				O = n.n(y),
				g = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = 8,
				C = 1,
				P = g.a.div("Container", O.a),
				k = g.a.div("PostMetaWrapper", O.a),
				w = g.a.wrapped(p.c, "PostTitle", O.a),
				j = g.a.div("FlatList", O.a),
				N = g.a.div("FlatItem", O.a),
				T = g.a.span("FlatListDotSpacer", O.a),
				I = g.a.wrapped(P, "LinkContainer", O.a),
				L = g.a.div("Content", O.a),
				D = g.a.div("ThumbnailContainer", O.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: _.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Mb.TOPIC),
					shouldOpenPostInNewTab: E.cb
				}),
				M = Object(i.b)(A);
			t.c = Object(x.b)(M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: r,
					mediaProps: s,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: r,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${s.isListing}`
					},
					d = t;
				return i && !i.media ? o.a.createElement(I, {
					className: d
				}, o.a.createElement(L, null, o.a.createElement(k, null, o.a.createElement(m.a, c)), R(i), i.source && o.a.createElement(f.a, {
					post: i
				}), B(e)), V(e)) : o.a.createElement(P, {
					className: d
				}, o.a.createElement(k, null, o.a.createElement(m.a, c)), R(i), F(e), B(e))
			}));
			const R = e => o.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, r = {
						...t,
						post: n,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(u.a, v({}, r, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return o.a.createElement(j, null, o.a.createElement(N, null, r.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [r.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), o.a.createElement(T, null), o.a.createElement(N, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: s
					} = t;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, r.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [r.fbt._plural(s, "comment count", Object(l.b)(s))], {
						hk: "xPYWL"
					}))
				},
				V = e => o.a.createElement(D, null, o.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), s.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), s.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				opacity: "0.8"
			}, s.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), s.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), s.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#FF538C"
			}), s.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), s.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#FF538C"
			}), s.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), s.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#FF538C"
			}), s.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				_ = n("./src/reddit/components/ExpandoButton/index.m.less"),
				E = n.n(_);
			const y = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(m.b)(t.permalink), t.id))
				})),
				O = (e, t = !1, n) => {
					const r = Object(c.a)(E.a.icon, E.a.hideOnHover);
					if (t) return o.a.createElement(f.a, {
						name: "crosspost",
						className: r
					});
					if (n.pollData) return o.a.createElement(f.a, {
						name: "poll_post",
						className: r
					});
					if (n.audioRoom) return o.a.createElement(f.a, {
						name: "audio",
						className: r
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return o.a.createElement(f.a, {
								name: "gif_post",
								className: r
							});
						case b.o.IMAGE:
							return o.a.createElement(f.a, {
								name: "image_post",
								className: r
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return o.a.createElement(f.a, {
								name: "text_post",
								className: r
							});
						case b.o.VIDEO:
							return o.a.createElement(f.a, {
								name: "video_post",
								className: r
							});
						case b.o.GALLERY:
							return o.a.createElement(f.a, {
								name: "media_gallery",
								className: r
							});
						case b.o.EMBED:
						default:
							return o.a.createElement(f.a, {
								name: "embed",
								className: r
							})
					}
				};
			t.a = y(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isCommentsPage: l,
					isExpanded: m,
					post: b,
					toggle: _,
					useMediaIcons: y
				} = e, g = n || b, v = Object(i.e)(h.b), S = t => {
					v && (t.preventDefault(), e.showModalOnPostLinkClick(g))
				}, C = s && !!n;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type || "liveaudio" === g.media.type) && !Object(p.a)(g)) || !!b.pollData ? o.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, E.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					onClick: _
				}, m ? o.a.createElement(f.a, {
					name: "collapse",
					className: E.a.icon
				}) : y ? o.a.createElement(o.a.Fragment, null, O(g.media && g.media.type, C, b), o.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(E.a.icon, E.a.showOnHover)
				})) : o.a.createElement(f.a, {
					name: "expand",
					className: E.a.icon
				})) : g.source && g.source.url ? o.a.createElement(u.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(E.a.icon, E.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow",
					onClick: S
				}, o.a.createElement(f.a, {
					name: "text_post",
					className: E.a.icon
				}))
			})
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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
			}) => s.a.createElement(a.a, {
				className: Object(o.a)(l.a.RecommendationContextStyles, {
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
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Rb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AwardBadges/index.tsx"),
				i = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/models/Subreddit/index.ts"),
				E = n("./src/reddit/components/PostMeta/index.m.less"),
				y = n.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: r,
					isCurrentUserProfilePost: E,
					isOverlay: O,
					isTopicPage: g,
					post: v,
					shouldShowSubscribeButton: S,
					subredditOrProfile: C,
					tooltipType: P
				} = e, k = !!g, w = Object(x.a)();
				return s.a.createElement("div", {
					className: y.a.metaContainer
				}, !r && !v.isSponsored && C && s.a.createElement(i.a, {
					postId: v.id,
					subredditName: C.name
				}, s.a.createElement(u.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: C.url,
						state: w
					}
				}, C.displayText)), C && C.isQuarantined && s.a.createElement(l.a, null), !r && !v.isSponsored && C && S && !E && s.a.createElement(m.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(h.h)(v.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: C.name,
						type: Object(_.h)(C) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: v.id,
					size: f.d.XXS,
					small: !0
				}), !r && !v.isSponsored && s.a.createElement(b.b, null), !r && !v.isSponsored && s.a.createElement(a.h, {
					type: v.belongsTo.type,
					id: v.belongsTo.id
				}), s.a.createElement(d.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: v,
					tooltipType: P
				}), s.a.createElement(c.a, {
					displayText: C ? C.displayText : null,
					inSubredditOrProfile: !!r,
					post: v,
					tooltipType: P
				}), !k && s.a.createElement(o.a, {
					hideCta: n,
					thing: v,
					tooltipType: O ? d.c.Lightbox : void 0
				}))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: _,
					postId: E,
					isReadingIndicatorsExperimentEnabled: y
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return s.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, r && s.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), s.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(o.a)(m.a.score, {
						[m.a.allowPointerEvents]: y
					}),
					isReadingIndicatorsExperimentEnabled: y
				}))
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
				return D
			})), n.d(t, "a", (function() {
				return J
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = n("./src/reddit/actions/post.ts"),
				_ = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/path/index.ts"),
				y = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = n("./src/lib/getShortenedLink.ts"),
				k = n("./src/reddit/components/FlairWrapper/index.tsx"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				T = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				I = n.n(T);
			const L = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, A = Object(i.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, I.a.proposalMetaData)
					}, o.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(j.a)(r)), w.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(N.a, {
						className: I.a.proposalExpiry,
						poll: t
					}))
				})),
				M = n("./src/reddit/components/SEOTitle/index.tsx"),
				R = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/PostTitle/index.m.less"),
				U = n.n(B),
				V = n("./src/config.ts"),
				W = n("./src/reddit/hooks/useClickSourceData.ts"),
				Y = n("./src/reddit/hooks/useExperimentVariant.ts"),
				H = n("./src/reddit/hooks/usePostContext.ts"),
				G = n("./src/reddit/hooks/useTheme.ts"),
				q = n("./src/telemetry/models/Outbound.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(D || (D = {}));
			const J = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: r,
					children: s,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(G.a)();
					let d = "";
					switch (e) {
						case D.ExtraLarge:
							d = U.a.ExtraLarge;
							break;
						case D.Large:
							d = U.a.Large;
							break;
						case D.Medium:
							d = U.a.Medium;
							break;
						case D.Small:
							d = U.a.Small;
							break;
						case D.ExtraSmall:
							d = U.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(U.a.Title, i, d, {
							[U.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": t || Object(C.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? o.a.createElement(M.b, {
						type: n
					}, s) : s)
				},
				X = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: r,
					...s
				}) => o.a.createElement(a.a, z({}, s, {
					className: Object(l.a)(e, U.a.styledLink, {
						[U.a.isVisitedEnabled]: !t
					})
				}), r),
				Q = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: r
				}) => o.a.createElement("div", {
					className: Object(l.a)(U.a.titleContainer, n, {
						[U.a.isNoWrap]: t,
						[U.a.isVisitedEnabled]: !e
					})
				}, r),
				Z = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.cb
				}),
				K = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t, s = Object(i.d)(), a = Object(W.a)(), c = Object(Y.a)(m.fd) === m.md.Enabled, l = Object(i.e)(R.b), u = e => {
						!l || t.media && Object(v.H)(t.media) || (e.preventDefault(), s(Object(x.ab)(Object(E.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(Q, {
						nowrap: e.nowrap
					}, o.a.createElement($, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, o.a.createElement($, e)); {
						const s = t.media && Object(v.H)(t.media) ? Object(y.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(E.b)(s) : c ? Object(h.a)(s, void 0, a) : Object(h.a)(s);
						return o.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(f.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement($, t)) : o.a.createElement($, t)
						})(t, e) : o.a.createElement(X, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: u
						}, o.a.createElement($, e)))
					}
				},
				$ = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return o.a.createElement(J, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(k.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: r
					} = n, s = e.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== D.Large && !n.isSponsored && !(n.media && Object(v.H)(n.media)) && (n.source || n.media && (n.media.type === v.o.GIFVIDEO || n.media.type === v.o.IMAGE || n.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: s
						}, Object(P.a)(n), !n.isSponsored && o.a.createElement(O.a, {
							name: "external_link",
							className: U.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: s
					}, Object(P.a)(n), !n.isSponsored && o.a.createElement(O.a, {
						name: "external_link",
						className: U.a.outboundLinkIcon
					}));
					return null
				};
			class te extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${U.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(C.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(C.a)(this.props).titleText,Object(C.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: s,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = n === g.b.Left, u = Object(k.b)(a), m = c ? u.filter(e => e.type === g.f.Nsfw || e.type === g.f.Spoiler) : d ? u.filter(e => Object(_.q)(e.type)) : [], p = c ? [] : d ? u.filter(e => !Object(_.q)(e.type)) : u, f = !s && !r, b = !t && m && m.length > 0 && f, h = !t && p && p.length > 0 && f;
					return o.a.createElement("div", {
						className: Object(l.a)(U.a.Component, e, a.id),
						ref: this.props.innerRef
					}, !c && b && o.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), !Object(S.b)(a) && o.a.createElement(K, z({}, this.props, {
						leftFlair: c ? m : void 0
					})), i && o.a.createElement(A, {
						className: U.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(ee, this.props), h && o.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: U.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${V.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.fb)(),
					n = Object(p.w)(t),
					r = Object(H.a)(),
					s = Object(i.e)(s => Z(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(G.a)(),
					c = Object(u.b)();
				return r ? o.a.createElement(te, z({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: a,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/Post/index.tsx"),
				u = n("./src/reddit/selectors/activeModalId.ts"),
				m = n("./src/reddit/selectors/chatPost.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/showPromotedCTA.ts"),
				x = n("./src/reddit/selectors/user.ts");
			const _ = {
					autoplayPref: x.b,
					activeModalId: u.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: x.J,
					showPromotedCTA: h.a,
					moderatorPermissions: p.l,
					modModeEnabled: d.T,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.V
				},
				E = (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const r = n === a.a.upvoted ? Object(o.jb)(t) : Object(o.w)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(o.fb)(t)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}),
				y = Object(r.b)(() => Object(s.c)(_), E, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(y(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				d = n("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(a.u)({
					searchQuery: a.Z
				}),
				u = Object(o.b)(() => Object(i.c)(d.c), d.b, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: Object(c.a)(n.searchQuery || "", e => s.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => s.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/LRUCache/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const i = new r.a(250),
				a = (e, t, n) => {
					const r = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${r}`;
						let a = i.get(s);
						if (void 0 === a) {
							const c = new RegExp(`(\\b${r}\\b)`, "gi"),
								d = e.title.split(c);
							a = n(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, n) => n % 2 != 0 ? t(e) : e)))), i.set(s, a)
						}
						return a
					}
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(r.f)(n));
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
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.I.NO_STRIPE_SUBSCRIPTION:
							case r.I.USER_DOESNT_EXIST:
							case r.I.USER_REQUIRED_ERROR:
							case r.I.VALIDATION_ERROR:
								return e;
							case r.I.NO_USER:
							case r.I.NO_TEXT:
							case r.I.NO_URL:
								return r.I.VALIDATION_ERROR;
							case r.I.CREDIT_CARD_FAILURE:
							case r.I.CREDIT_CARD_FAILURE_GENERIC:
								return r.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.I.VALIDATION_ERROR
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, n, r, o, i) => r ? e.crosspostRootId ? s.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, n, o, i)) : a(e, n, o, i) : null,
				a = (e, t, n, r) => s.a.createElement(o.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: r,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0
				})
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
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "v", (function() {
				return T
			})), n.d(t, "w", (function() {
				return I
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.o(e),
					screen: s.ab(e),
					subreddit: s.jb(e),
					userSubreddit: s.sb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.p)(e)
				}),
				a = () => e => ({
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
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
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
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				y = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: s.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				O = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				g = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : O[e],
					...o(t)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				S = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(r.l)(e),
					...o(i),
					actionInfo: s.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				P = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				I = () => (e, t) => {
					const n = o(e);
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
				return o
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = s.a) {
				return Object(r.e)(n => Object(s.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(s.b)
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
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
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "p", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
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
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === s.a.Subreddit;
			var p, f, b, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const x = e => f[h[e]],
				_ = e => h[f[e]],
				E = e => b[f[e]],
				y = e => f[b[e]],
				O = e => h[b[e]];
			var g;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const v = e => {
					switch (e) {
						case g.Hourly:
						case g.Daily:
						case g.Weekly:
						case g.Monthly:
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
							return Object(r.a)(e)
					}
				},
				P = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
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
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
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
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
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
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
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
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
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
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
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
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.g
					}) === r.a.Enabled
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.m
					}) === r.Vc
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.n
					}) === r.Vc
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.83a730180a303b1c8cf7.js.map