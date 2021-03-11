// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.2e20024d6f71ebe1df82.js
// Retrieved at 3/11/2021, 5:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var a;
			a = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function a(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						r = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						g = !o && !l && /macintosh/i.test(t),
						f = !r && !m && !u && !p && /linux/i.test(t),
						v = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						w = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						S = !y && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: w || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: w || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: w || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: w || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
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
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || w
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
						version: w || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: w || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : r ? n = {
						name: "Android",
						version: w
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, w && (n.version = w)) : o ? (n = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, w && (n.version = w)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || w
					} : {
						name: s(/^(.*)\/(.*) /),
						version: a(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && w && (n.version = w)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !r && !n.silk ? !n.windowsphone && o ? (n[o] = e, n.ios = e, n.osname = "iOS") : g ? (n.mac = e, n.osname = "macOS") : k ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var C = "";
					n.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : r ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (n.osversion = C);
					var _ = !n.windows && C.split(".")[0];
					return y || d || "ipad" == o || r && (3 == _ || _ >= 4 && !S) || n.silk ? n.tablet = e : (S || "iphone" == o || "ipod" == o || r || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function a(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, a = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) a.push(t(e[s]));
					return a
				}

				function o(e) {
					for (var t = Math.max(a(e[0]), a(e[1])), s = n(e, (function(e) {
							var s = t - a(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function r(e, a, n) {
					var r = s;
					"string" == typeof a && (n = a, a = void 0), void 0 === a && (a = !1), n && (r = t(n));
					var i = "" + r.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && r[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([i, e[d]]) < 0
						} return a
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var a = e[t];
						if ("string" == typeof a && a in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = r, s.compareVersions = o, s.check = function(e, t, s) {
					return !r(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = a() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", a)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), a(n(e), t, s)
			}
		},
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, s) {
			"use strict";
			(function(e) {
				var a, n, o, r, i = s("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					d = s.n(i),
					c = s("./node_modules/react-side-effect/lib/index.js"),
					l = s.n(c),
					m = s("./node_modules/react-fast-compare/index.js"),
					u = s.n(m),
					p = s("./node_modules/react/index.js"),
					h = s.n(p),
					b = s("./node_modules/object-assign/index.js"),
					g = s.n(b),
					f = "bodyAttributes",
					v = "htmlAttributes",
					w = "titleAttributes",
					y = {
						BASE: "base",
						BODY: "body",
						HEAD: "head",
						HTML: "html",
						LINK: "link",
						META: "meta",
						NOSCRIPT: "noscript",
						SCRIPT: "script",
						STYLE: "style",
						TITLE: "title"
					},
					S = (Object.keys(y).map((function(e) {
						return y[e]
					})), "charset"),
					k = "cssText",
					C = "href",
					_ = "http-equiv",
					O = "innerHTML",
					E = "itemprop",
					x = "name",
					T = "property",
					R = "rel",
					j = "src",
					M = "target",
					I = {
						accesskey: "accessKey",
						charset: "charSet",
						class: "className",
						contenteditable: "contentEditable",
						contextmenu: "contextMenu",
						"http-equiv": "httpEquiv",
						itemprop: "itemProp",
						tabindex: "tabIndex"
					},
					P = "defaultTitle",
					A = "defer",
					L = "encodeSpecialCharacters",
					N = "onChangeClientState",
					D = "titleTemplate",
					V = Object.keys(I).reduce((function(e, t) {
						return e[I[t]] = t, e
					}), {}),
					B = [y.NOSCRIPT, y.SCRIPT, y.STYLE],
					F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					H = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					U = function() {
						function e(e, t) {
							for (var s = 0; s < t.length; s++) {
								var a = t[s];
								a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
							}
						}
						return function(t, s, a) {
							return s && e(t.prototype, s), a && e(t, a), t
						}
					}(),
					K = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var s = arguments[t];
							for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
						}
						return e
					},
					W = function(e, t) {
						var s = {};
						for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (s[a] = e[a]);
						return s
					},
					q = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					G = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					z = function(e) {
						var t = Z(e, y.TITLE),
							s = Z(e, D);
						if (s && t) return s.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var a = Z(e, P);
						return t || a || void 0
					},
					J = function(e) {
						return Z(e, N) || function() {}
					},
					Y = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return K({}, e, t)
						}), {})
					},
					X = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[y.BASE]
						})).map((function(e) {
							return e[y.BASE]
						})).reverse().reduce((function(t, s) {
							if (!t.length)
								for (var a = Object.keys(s), n = 0; n < a.length; n++) {
									var o = a[n].toLowerCase();
									if (-1 !== e.indexOf(o) && s[o]) return t.concat(s)
								}
							return t
						}), [])
					},
					Q = function(e, t, s) {
						var a = {};
						return s.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && ae("Helmet: " + e + ' should be of type "Array". Instead found type "' + F(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, s) {
							var n = {};
							s.filter((function(e) {
								for (var s = void 0, o = Object.keys(e), r = 0; r < o.length; r++) {
									var i = o[r],
										d = i.toLowerCase(); - 1 === t.indexOf(d) || s === R && "canonical" === e[s].toLowerCase() || d === R && "stylesheet" === e[d].toLowerCase() || (s = d), -1 === t.indexOf(i) || i !== O && i !== k && i !== E || (s = i)
								}
								if (!s || !e[s]) return !1;
								var c = e[s].toLowerCase();
								return a[s] || (a[s] = {}), n[s] || (n[s] = {}), !a[s][c] && (n[s][c] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var o = Object.keys(n), r = 0; r < o.length; r++) {
								var i = o[r],
									d = g()({}, a[i], n[i]);
								a[i] = d
							}
							return e
						}), []).reverse()
					},
					Z = function(e, t) {
						for (var s = e.length - 1; s >= 0; s--) {
							var a = e[s];
							if (a.hasOwnProperty(t)) return a[t]
						}
						return null
					},
					$ = (a = Date.now(), function(e) {
						var t = Date.now();
						t - a > 16 ? (a = t, e(t)) : setTimeout((function() {
							$(e)
						}), 0)
					}),
					ee = function(e) {
						return clearTimeout(e)
					},
					te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || $ : e.requestAnimationFrame || $,
					se = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					ae = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					ne = null,
					oe = function(e, t) {
						var s = e.baseTag,
							a = e.bodyAttributes,
							n = e.htmlAttributes,
							o = e.linkTags,
							r = e.metaTags,
							i = e.noscriptTags,
							d = e.onChangeClientState,
							c = e.scriptTags,
							l = e.styleTags,
							m = e.title,
							u = e.titleAttributes;
						de(y.BODY, a), de(y.HTML, n), ie(m, u);
						var p = {
								baseTag: ce(y.BASE, s),
								linkTags: ce(y.LINK, o),
								metaTags: ce(y.META, r),
								noscriptTags: ce(y.NOSCRIPT, i),
								scriptTags: ce(y.SCRIPT, c),
								styleTags: ce(y.STYLE, l)
							},
							h = {},
							b = {};
						Object.keys(p).forEach((function(e) {
							var t = p[e],
								s = t.newTags,
								a = t.oldTags;
							s.length && (h[e] = s), a.length && (b[e] = p[e].oldTags)
						})), t && t(), d(e, h, b)
					},
					re = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					ie = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = re(e)), de(y.TITLE, t)
					},
					de = function(e, t) {
						var s = document.getElementsByTagName(e)[0];
						if (s) {
							for (var a = s.getAttribute("data-react-helmet"), n = a ? a.split(",") : [], o = [].concat(n), r = Object.keys(t), i = 0; i < r.length; i++) {
								var d = r[i],
									c = t[d] || "";
								s.getAttribute(d) !== c && s.setAttribute(d, c), -1 === n.indexOf(d) && n.push(d);
								var l = o.indexOf(d); - 1 !== l && o.splice(l, 1)
							}
							for (var m = o.length - 1; m >= 0; m--) s.removeAttribute(o[m]);
							n.length === o.length ? s.removeAttribute("data-react-helmet") : s.getAttribute("data-react-helmet") !== r.join(",") && s.setAttribute("data-react-helmet", r.join(","))
						}
					},
					ce = function(e, t) {
						var s = document.head || document.querySelector(y.HEAD),
							a = s.querySelectorAll(e + "[data-react-helmet]"),
							n = Array.prototype.slice.call(a),
							o = [],
							r = void 0;
						return t && t.length && t.forEach((function(t) {
							var s = document.createElement(e);
							for (var a in t)
								if (t.hasOwnProperty(a))
									if (a === O) s.innerHTML = t.innerHTML;
									else if (a === k) s.styleSheet ? s.styleSheet.cssText = t.cssText : s.appendChild(document.createTextNode(t.cssText));
							else {
								var i = void 0 === t[a] ? "" : t[a];
								s.setAttribute(a, i)
							}
							s.setAttribute("data-react-helmet", "true"), n.some((function(e, t) {
								return r = t, s.isEqualNode(e)
							})) ? n.splice(r, 1) : o.push(s)
						})), n.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), o.forEach((function(e) {
							return s.appendChild(e)
						})), {
							oldTags: n,
							newTags: o
						}
					},
					le = function(e) {
						return Object.keys(e).reduce((function(t, s) {
							var a = void 0 !== e[s] ? s + '="' + e[s] + '"' : "" + s;
							return t ? t + " " + a : a
						}), "")
					},
					me = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, s) {
							return t[I[s] || s] = e[s], t
						}), t)
					},
					ue = function(e, t, s) {
						switch (e) {
							case y.TITLE:
								return {
									toComponent: function() {
										return e = t.title, s = t.titleAttributes, (a = {
											key: e
										})["data-react-helmet"] = !0, n = me(s, a), [h.a.createElement(y.TITLE, n, e)];
										var e, s, a, n
									}, toString: function() {
										return function(e, t, s, a) {
											var n = le(s),
												o = re(t);
											return n ? "<" + e + ' data-react-helmet="true" ' + n + ">" + G(o, a) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + G(o, a) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, s)
									}
								};
							case f:
							case v:
								return {
									toComponent: function() {
										return me(t)
									}, toString: function() {
										return le(t)
									}
								};
							default:
								return {
									toComponent: function() {
										return function(e, t) {
											return t.map((function(t, s) {
												var a, n = ((a = {
													key: s
												})["data-react-helmet"] = !0, a);
												return Object.keys(t).forEach((function(e) {
													var s = I[e] || e;
													if (s === O || s === k) {
														var a = t.innerHTML || t.cssText;
														n.dangerouslySetInnerHTML = {
															__html: a
														}
													} else n[s] = t[e]
												})), h.a.createElement(e, n)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, s) {
											return t.reduce((function(t, a) {
												var n = Object.keys(a).filter((function(e) {
														return !(e === O || e === k)
													})).reduce((function(e, t) {
														var n = void 0 === a[t] ? t : t + '="' + G(a[t], s) + '"';
														return e ? e + " " + n : n
													}), ""),
													o = a.innerHTML || a.cssText || "",
													r = -1 === B.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + n + (r ? "/>" : ">" + o + "</" + e + ">")
											}), "")
										}(e, t, s)
									}
								}
						}
					},
					pe = function(e) {
						var t = e.baseTag,
							s = e.bodyAttributes,
							a = e.encode,
							n = e.htmlAttributes,
							o = e.linkTags,
							r = e.metaTags,
							i = e.noscriptTags,
							d = e.scriptTags,
							c = e.styleTags,
							l = e.title,
							m = void 0 === l ? "" : l,
							u = e.titleAttributes;
						return {
							base: ue(y.BASE, t, a),
							bodyAttributes: ue(f, s, a),
							htmlAttributes: ue(v, n, a),
							link: ue(y.LINK, o, a),
							meta: ue(y.META, r, a),
							noscript: ue(y.NOSCRIPT, i, a),
							script: ue(y.SCRIPT, d, a),
							style: ue(y.STYLE, c, a),
							title: ue(y.TITLE, {
								title: m,
								titleAttributes: u
							}, a)
						}
					},
					he = l()((function(e) {
						return {
							baseTag: X([C, M], e),
							bodyAttributes: Y(f, e),
							defer: Z(e, A),
							encode: Z(e, L),
							htmlAttributes: Y(v, e),
							linkTags: Q(y.LINK, [R, C], e),
							metaTags: Q(y.META, [x, S, _, T, E], e),
							noscriptTags: Q(y.NOSCRIPT, [O], e),
							onChangeClientState: J(e),
							scriptTags: Q(y.SCRIPT, [j, O], e),
							styleTags: Q(y.STYLE, [k], e),
							title: z(e),
							titleAttributes: Y(w, e)
						}
					}), (function(e) {
						ne && se(ne), e.defer ? ne = te((function() {
							oe(e, (function() {
								ne = null
							}))
						})) : (oe(e), ne = null)
					}), pe)((function() {
						return null
					})),
					be = (n = he, r = o = function(e) {
						function t() {
							return H(this, t), q(this, e.apply(this, arguments))
						}
						return function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
							e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
						}(t, e), t.prototype.shouldComponentUpdate = function(e) {
							return !u()(this.props, e)
						}, t.prototype.mapNestedChildrenToProps = function(e, t) {
							if (!t) return null;
							switch (e.type) {
								case y.SCRIPT:
								case y.NOSCRIPT:
									return {
										innerHTML: t
									};
								case y.STYLE:
									return {
										cssText: t
									}
							}
							throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
						}, t.prototype.flattenArrayTypeChildren = function(e) {
							var t, s = e.child,
								a = e.arrayTypeChildren,
								n = e.newChildProps,
								o = e.nestedChildren;
							return K({}, a, ((t = {})[s.type] = [].concat(a[s.type] || [], [K({}, n, this.mapNestedChildrenToProps(s, o))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, s, a = e.child,
								n = e.newProps,
								o = e.newChildProps,
								r = e.nestedChildren;
							switch (a.type) {
								case y.TITLE:
									return K({}, n, ((t = {})[a.type] = r, t.titleAttributes = K({}, o), t));
								case y.BODY:
									return K({}, n, {
										bodyAttributes: K({}, o)
									});
								case y.HTML:
									return K({}, n, {
										htmlAttributes: K({}, o)
									})
							}
							return K({}, n, ((s = {})[a.type] = K({}, o), s))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var s = K({}, t);
							return Object.keys(e).forEach((function(t) {
								var a;
								s = K({}, s, ((a = {})[t] = e[t], a))
							})), s
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var s = this,
								a = {};
							return h.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var n = e.props,
										o = n.children,
										r = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, s) {
												return t[V[s] || s] = e[s], t
											}), t)
										}(W(n, ["children"]));
									switch (s.warnOnInvalidChildren(e, o), e.type) {
										case y.LINK:
										case y.META:
										case y.NOSCRIPT:
										case y.SCRIPT:
										case y.STYLE:
											a = s.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: a,
												newChildProps: r,
												nestedChildren: o
											});
											break;
										default:
											t = s.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: r,
												nestedChildren: o
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(a, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								s = W(e, ["children"]),
								a = K({}, s);
							return t && (a = this.mapChildrenToProps(t, a)), h.a.createElement(n, a)
						}, U(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								n.canUseDOM = e
							}
						}]), t
					}(h.a.Component), o.propTypes = {
						base: d.a.object,
						bodyAttributes: d.a.object,
						children: d.a.oneOfType([d.a.arrayOf(d.a.node), d.a.node]),
						defaultTitle: d.a.string,
						defer: d.a.bool,
						encodeSpecialCharacters: d.a.bool,
						htmlAttributes: d.a.object,
						link: d.a.arrayOf(d.a.object),
						meta: d.a.arrayOf(d.a.object),
						noscript: d.a.arrayOf(d.a.object),
						onChangeClientState: d.a.func,
						script: d.a.arrayOf(d.a.object),
						style: d.a.arrayOf(d.a.object),
						title: d.a.string,
						titleAttributes: d.a.object,
						titleTemplate: d.a.string
					}, o.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0
					}, o.peek = n.peek, o.rewind = function() {
						var e = n.rewind();
						return e || (e = pe({
							baseTag: [],
							bodyAttributes: {},
							encodeSpecialCharacters: !0,
							htmlAttributes: {},
							linkTags: [],
							metaTags: [],
							noscriptTags: [],
							scriptTags: [],
							styleTags: [],
							title: "",
							titleAttributes: {}
						})), e
					}, r);
				be.renderStatic = be.rewind, t.a = be
			}).call(this, s("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function o() {}
			o.resetWarningCache = n, e.exports = function() {
				function e(e, t, s, n, o, r) {
					if (r !== a) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: n
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/react-helmet/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-side-effect/lib/index.js": function(e, t, s) {
			"use strict";
			var a, n = s("./node_modules/react/index.js"),
				o = (a = n) && "object" == typeof a && "default" in a ? a.default : a;

			function r(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, s) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== s && "function" != typeof s) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(a) {
					if ("function" != typeof a) throw new Error("Expected WrappedComponent to be a React component.");
					var d, c = [];

					function l() {
						d = e(c.map((function(e) {
							return e.props
						}))), m.canUseDOM ? t(d) : s && (d = s(d))
					}
					var m = function(e) {
						var t, s;

						function n() {
							return e.apply(this, arguments) || this
						}
						s = e, (t = n).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s, n.peek = function() {
							return d
						}, n.rewind = function() {
							if (n.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = d;
							return d = void 0, c = [], e
						};
						var r = n.prototype;
						return r.UNSAFE_componentWillMount = function() {
							c.push(this), l()
						}, r.componentDidUpdate = function() {
							l()
						}, r.componentWillUnmount = function() {
							var e = c.indexOf(this);
							c.splice(e, 1), l()
						}, r.render = function() {
							return o.createElement(a, this.props)
						}, n
					}(n.PureComponent);
					return r(m, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(a) + ")"), r(m, "canUseDOM", i), m
				}
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(r.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.jc
				});
				return Object(m.wd)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.kc
				});
				return Object(m.wd)(t) ? void 0 : t
			}, (e, t) => e === m.lc.Enabled && t === m.lc.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						a = new Uint32Array(e);
					return crypto.getRandomValues(a), Array.from(a).map(e => t.charAt(e % s)).join("")
				},
				f = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				v = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var w;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(w || (w = {}));
			const y = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					a = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(a)).map(v).join("")
			})(w.SHA1, e);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const k = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				C = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${h.a.buildNumber} ${h.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: c,
					disableCookies: m,
					envKey: u,
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: v,
					playerName: w,
					playerVersion: _,
					respectDoNotTrack: O,
					saltLength: E,
					saltTimeToLive: x,
					viewerUserIdLength: T
				} = {
					...C,
					...t
				};
				class R extends a.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(a.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
					}
					get experimentName() {
						return ""
					}
					get video() {
						return this.videoRef.current
					}
					componentDidMount() {
						this.doMuxThings()
					}
					componentDidUpdate(e) {
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					componentWillUnmount() {
						this.handleDashDestroy(), this.handleHlsDestroy()
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const {
							forwardedRef: t,
							...s
						} = this.props, a = s;
						return n.a.createElement(e, S({}, a, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: t,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
							if (this.isMonitoring) {
								if (this.video) {
									const t = this.getVideoData();
									e.emit(this.video, "videochange", t)
								}
							} else {
								const t = await this.getMuxData();
								this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || R.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${f()}${e}${t}`;
						return (await y(s)).substr(0, R.VIEWER_USER_ID_LENGTH)
					}
					getDashInstanceData() {
						const {
							dashInstance: e
						} = this;
						return e ? {
							dashjs: e
						} : null
					}
					getHlsInstanceData() {
						const {
							hlsInstance: e
						} = this;
						return e ? {
							hlsjs: e,
							Hls: e.constructor
						} : null
					}
					async getMuxData() {
						const e = await this.encryptViewerUserId(),
							t = this.getVideoData(),
							s = this.getThirdPartyLibData();
						return {
							debug: R.DEBUG,
							disableCookies: R.DISABLE_COOKIES,
							respectDoNotTrack: R.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: R.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: R.PLAYER_NAME,
								player_version: R.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = R.LOCAL_STORAGE_SALT_KEY;
						let t = Object(i.a)(e);
						return t || (t = g(R.SALT_LENGTH), Object(i.b)(e, t, R.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return {
							...this.getDashInstanceData(),
							...this.getHlsInstanceData()
						}
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: a
						} = this.props;
						return {
							video_duration: s ? R.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? R.STREAM_TYPE_LIVE : R.STREAM_TYPE_ON_DEMAND,
							video_title: a
						}
					}
				}
				R.displayName = k(e), R.ANONYMOUS_USER_ID = s, R.DEBUG = c, R.DISABLE_COOKIES = m, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = u, R.LOCAL_STORAGE_SALT_KEY = h, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = v, R.PLAYER_NAME = w, R.PLAYER_VERSION = _, R.RESPECT_DO_NOT_TRACK = O, R.SALT_LENGTH = E, R.SALT_TIME_TO_LIVE = x, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = T;
				const j = Object(a.forwardRef)((e, t) => n.a.createElement(R, S({}, e, {
						forwardedRef: t
					}))),
					M = Object(r.c)({
						redditUserId: b.g,
						isMuxEnabled: p
					});
				return Object(o.b)(M, null, null, {
					forwardRef: !0
				})(j)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(n.e)(e),
					r = encodeURIComponent(`${t}${o}`);
				return `${a.a.accountManagerOrigin}${s||"/login"}?dest=${r}`
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(a.a)(n.c),
				r = Object(a.a)(n.b),
				i = Object(a.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "b", (function() {
				return y
			}));
			var a = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeCommentsPageKey/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/comment/index.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/comment/constants.ts");
			const p = Object(n.a)(u.m),
				h = e => async (t, s, {
					apiContext: a
				}) => {
					s().features.comments.models[e] && (await Object(c.h)(a(), e)).ok && t((e => async t => {
						t(p({
							commentId: e
						}))
					})(e))
				}, b = e => async (t, s, {
					apiContext: a
				}) => {
					if (!Object(l.K)(s())) return void t(Object(r.i)(d.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const o = n.isLocked ? c.j : c.d;
					t(Object(m.h)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await o(a(), e)).ok || t(Object(m.h)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, g = Object(n.a)(u.C), f = e => async (t, s, {
					apiContext: a
				}) => {
					const n = s(),
						o = n.features.comments.models[e],
						r = n.user.account ? n.user.account.displayText : null;
					o && r && (t(Object(m.h)({
						[e]: {
							isApproved: !0,
							approvedBy: r,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(c.a)(a(), e)).ok || t(Object(m.h)({
						[e]: {
							isApproved: o.isApproved,
							approvedBy: null,
							bannedBy: o.bannedBy,
							isRemoved: o.isRemoved,
							isSpam: o.isSpam,
							modNote: o.modNote,
							modReasonBy: o.modReasonBy,
							modRemovalReason: o.modRemovalReason,
							numReports: o.numReports || null
						}
					})), Object(i.d)())
				}, v = (e, t) => async (s, a, {
					apiContext: n
				}) => {
					const o = a(),
						r = o.features.comments.models[e],
						d = o.user.account ? o.user.account.displayText : null;
					r && d && (s(Object(m.h)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(c.f)(n(), e, t)).ok || s(Object(m.h)({
						[e]: {
							approvedBy: r.approvedBy,
							bannedBy: r.bannedBy,
							isApproved: r.isApproved,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam
						}
					})), Object(i.d)())
				}, w = e => async (t, s, {
					apiContext: a
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const o = n.ignoreReports ? c.i : c.c;
					t(Object(m.h)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await o(a(), e)).ok || t(Object(m.h)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, y = (e, t, s) => async (n, r, {
					apiContext: i
				}) => {
					const d = r(),
						l = d.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = d.postStickiedComments.data[u],
						h = a.g[t];
					n(Object(m.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === a.C.ADMIN,
							isMod: t === a.C.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && n(Object(m.h)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(c.b)(i(), e, h, s || null)).ok ? s && n(g({
						id: e,
						postId: u,
						commentsPageKey: Object(o.a)(u, null, {
							sort: a.r.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (n(Object(m.h)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), n(Object(m.h)({
						[p]: {
							isStickied: d.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return de
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return ce
			})), s.d(t, "commentsPagePending", (function() {
				return le
			})), s.d(t, "commentsPageLoaded", (function() {
				return me
			})), s.d(t, "commentsPageFailed", (function() {
				return ue
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return pe
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return he
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return be
			})), s.d(t, "commentsPageRequested", (function() {
				return ge
			})), s.d(t, "commentsPageDataRequested", (function() {
				return fe
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return ve
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return we
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				o = s("./src/reddit/actions/discoveryUnit.ts"),
				r = s("./src/reddit/actions/pages/subreddit.ts"),
				i = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				u = s("./src/reddit/endpoints/profile/info.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/economics/helpers/async.ts"),
				g = s("./src/reddit/actions/externalAccount.ts"),
				f = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				v = s("./src/reddit/actions/post.ts"),
				w = s("./src/reddit/actions/profile/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				S = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/graphql.ts"),
				_ = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/helpers/commentList/index.ts"),
				x = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				M = s("./src/reddit/models/User/index.ts"),
				I = s("./src/reddit/selectors/category.ts"),
				P = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				A = s("./src/reddit/selectors/experiments/postSeo.ts"),
				L = s("./src/reddit/selectors/experiments/removedPosts.ts"),
				N = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				D = s("./src/reddit/selectors/platform.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				H = s("./src/lib/makeActionCreator/index.ts"),
				U = s("./src/lib/makeCommentsPageKey/index.ts"),
				K = s("./src/reddit/actions/ads/index.ts"),
				W = s("./src/reddit/actions/platform.ts"),
				q = s("./src/reddit/helpers/canonicalUrls.ts"),
				G = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				J = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Y = s("./src/reddit/actions/gold/powerups.ts"),
				X = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				Q = s("./src/lib/performanceTimings/index.tsx"),
				Z = s("./src/reddit/constants/experiments.ts"),
				$ = s("./src/reddit/helpers/chooseVariant/index.ts");
			const ee = e => {
				var t, s;
				const a = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					n = a && Object(p.r)(a),
					{
						sortToUse: o
					} = Object(x.a)(e, n);
				return (!o || o === h.r.CONFIDENCE) && Object($.c)(e, {
					experimentEligibilitySelector: () => Object(F.J)(e),
					experimentName: Z.r
				}) === Z.t.Enabled
			};
			var te = s("./src/reddit/selectors/chatPost.ts"),
				se = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ae = s("./src/reddit/selectors/realtimeComments.ts"),
				ne = s("./src/reddit/selectors/seo/index.ts"),
				oe = s("./src/reddit/actions/pages/constants.ts"),
				re = s("./src/lib/initializeClient/installReducer.ts"),
				ie = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(re.a)({
				pages: {
					comments: ie.a
				}
			});
			const de = 25,
				ce = 100,
				le = Object(H.a)(oe.h),
				me = Object(H.a)(oe.f),
				ue = Object(H.a)(oe.e),
				pe = (e, t, s) => {
					const a = !e,
						n = Object(V.D)(t, {
							postId: s
						}),
						o = n.belongsTo,
						r = Object(B.L)(t, {
							identifier: o
						}),
						i = Object(ne.c)(t, {
							identifier: o
						}),
						d = {
							listingBelow: !1,
							postFeed: !1,
							postImageOCRAltText: !1,
							postQASchema: !1
						};
					return Object(ne.b)(t) ? d.listingBelow = i || a : d.postFeed = (i || a) && (!Object(j.g)(r) && !Object(te.d)(t, {
						postId: s
					}) && !!r || !Object(D.h)(t) && Object(A.e)(t)), e && (d.postImageOCRAltText = Object(A.c)(n) && !!Object(A.b)(t, n, !1), d.postQASchema = Object(A.f)(t, n)), d
				},
				he = (e, t) => e || t.postFeed || t.listingBelow || t.postImageOCRAltText || t.postQASchema,
				be = e => ({
					includePostFeed: e.postFeed,
					includeListingBelowExperiment: e.listingBelow,
					includePostImageOCRAltText: e.postImageOCRAltText,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ge = e => async (t, s) => {
					var o, r;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(p.r)(d) : "", u = c && Object(T.f)(c), {
						path: b,
						queryParams: S
					} = e, k = Object(f.d)(b), {
						instanceId: E
					} = S, {
						hasSortParam: j,
						sortToUse: M
					} = Object(x.a)(s(), m), P = null === (r = null === (o = Object(D.b)(s())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === r ? void 0 : r.route.chunk, A = ["context", "depth", "limit", _.f].reduce((e, t) => {
						const s = parseInt(S[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: j,
						instanceId: E,
						include_categories: !0
					});
					j && (A.sort = M), A.onOtherDiscussions = k, t(v.m(m)), await t(fe(m, u, A, M));
					const N = s().posts.models[m],
						V = Object(F.K)(s());
					if (N && "subreddit" === N.belongsTo.type) {
						const e = N.belongsTo.id,
							s = Object(Q.i)(() => t(Object(Y.f)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: P,
								isLoggedIn: V
							});
						await s
					}
					if (N) {
						const o = Object(B.L)(s(), {
							identifier: N.belongsTo
						});
						if (o && Object(L.a)(s())) return void t(Object(a.c)(o.url));
						if ((N.media && N.media.type) === R.o.LIVEVIDEO) {
							const e = `/rpan${N.belongsTo.type===O.a.SUBREDDIT?o.url:"/"}${Object(p.s)(N.id)}`;
							return void t(Object(a.c)(e))
						}
						if (N.belongsTo.type !== O.a.SUBREDDIT || N.isSponsored) {
							if (N.belongsTo.type === O.a.PROFILE) {
								const e = Object(Q.i)(() => t(w.d(o.name)), {
									name: "getProfileInfo",
									page: P,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(B.S)(s(), {
									subredditId: N.belongsTo.id
								})) {
								const e = Object(Q.i)(() => t(y.o(o.name)), {
									name: "getSubredditRules",
									page: P,
									isLoggedIn: V
								});
								await e
							}
						}
						const r = pe(!1, s(), m),
							d = Object(se.c)(s()),
							c = k;
						if (he(c, r)) {
							Object(G.d)(G.a.LinkedPosts);
							const e = Object(G.c)(G.a.LinkedPosts),
								a = {
									adContext: {
										layout: C.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.Ub.WEEK.toUpperCase(),
									sort: h.I.TOP,
									subredditName: o.name
								},
								n = {
									postId: m
								},
								i = {
									correlationId: e,
									experimentVariant: d
								},
								l = be(r);
							Object(Q.i)(() => t(Object(X.a)({
								...n,
								...a,
								...i,
								...l,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: P
							});
							0
						}
						t(Object(g.p)());
						const l = s().posts.instances[m] ? e.queryParams.instanceId : N.postId;
						t(Object(i.b)(l)); {
							const e = Object(I.d)(s(), {
								subredditName: o.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					}
					const {
						routePrefix: H
					} = e.params;
					O.b[H] === O.a.PROFILE ? Object(q.d)(s(), t, e) : Object(q.b)(s(), t, e)
				}, fe = (e, t, s, a) => async (n, i, d) => {
					var p, g, f;
					const w = i(),
						y = Object(U.a)(e, t, s),
						{
							subredditName: C
						} = s,
						_ = w.pages.comments.keyToHeadCommentId.hasOwnProperty(y),
						O = w.pages.comments.api.fullyLoaded[y],
						x = w.pages.comments.api.error[y],
						T = w.pages.comments.api.pending[y],
						R = !Object(F.J)(w),
						j = Object(F.j)(w),
						I = a === h.r.CHAT,
						A = !!w.platform.lastPage;
					if ((T || _ && !x) && !(I && A)) {
						if (_ && !w.sidebarPromotedPosts.firstFetch) {
							const t = Object(D.h)(w) ? J.a.COMMENTS_OVERLAY : J.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(K.b)(t)), Math.random() <= .01 && n(Object(K.a)(e))
							})
						}
						return void(O || n(we(e, t, s)))
					}
					n(o.g());
					const L = w.user.prefs.commentMode;
					n(le({
						key: y,
						postId: e,
						commentMode: L
					}));
					const N = {
						...s,
						...I ? {
							sort: h.r.LIVE
						} : R ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(V.D)(i(), {
							postId: e
						});
						t && t.numComments && t.numComments > ce && (N.truncate = de)
					}
					const B = null === (g = null === (p = Object(D.b)(w)) || void 0 === p ? void 0 : p.routeMatch) || void 0 === g ? void 0 : g.route.chunk,
						H = Object(Q.i)(() => Object(l.a)(d.apiContext(), e, t, N, Object(P.a)(i()), Object(ae.a)(i()), ee(i())), {
							name: "fetchCommentsPage",
							isLoggedIn: !R,
							page: B
						}),
						q = !R && j && Object(Q.i)(() => Object(u.d)(d.gqlContext(), Object(M.e)(j)), {
							name: "fetchProfileKarma",
							isLoggedIn: !R,
							page: B
						}) || null,
						[G, Y] = await Promise.all([H, q]);
					let X;
					if (n(Object(W.l)(G.status)), G.ok) {
						const t = Object.keys(G.body.posts).filter(e => !!G.body.posts[e].isMeta),
							s = G.body.posts[e];
						if (t.length) {
							const e = Object(Q.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: B,
									isLoggedIn: !R
								}),
								a = await e;
							a.ok && (X = a.body)
						}
						if (Y && Y.ok) {
							const e = null === (f = Y.body.data.redditorInfoByName) || void 0 === f ? void 0 : f.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							G.body && G.body.account && Object.assign(G.body.account, t)
						}
						const a = Object(E.a)(G.body, e, w);
						n(me({
							key: y,
							postId: e,
							meta: w.meta,
							governance: X,
							shouldCollapse: a,
							...G.body
						}))
					} {
						const a = Object(V.D)(i(), {
							postId: e
						});
						a && G.body.comments && Object.keys(G.body.comments).length < a.numComments ? n(we(e, t, s)) : G.ok && n(ve({
							key: y
						}));
						const o = Object(D.h)(w) ? J.a.COMMENTS_OVERLAY : J.a.COMMENTS;
						n(Object(K.b)(o)), Math.random() <= .01 && n(Object(K.a)(e))
					}
					if (G.ok) {
						n(S.f(y));
						const t = Object(V.D)(i(), {
							postId: e
						});
						if (n(v.u(t, k.a.CommentsView)), t && "subreddit" === t.belongsTo.type && G.body.comments) {
							const e = Object(Q.i)(() => n(Object(b.a)({
								commentIds: Object.keys(G.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: B,
								isLoggedIn: !R
							});
							await e
						}
					} else {
						let e;
						C && (n(Object(r.subredditPending)({
							key: y
						})), e = await Object(z.a)("subreddit", () => Object(m.a)(d.apiContext(), C, {})), n(Object(W.l)(e.status)), n(Object(r.handleSubredditPageApiError)(e, C))), n(ue({
							error: G.error,
							key: y,
							...e ? e.body : G.body
						}))
					}
				}, ve = Object(H.a)(oe.g), we = (e, t, s) => async (a, n, o) => {
					var r;
					const i = Object(U.a)(e, t, s),
						c = n(),
						m = Object(F.K)(c),
						p = Object(F.j)(c),
						h = Object(l.a)(o.apiContext(), e, t, s, Object(P.a)(c), Object(ae.a)(c), ee(c)),
						g = m && p && Object(u.d)(o.gqlContext(), Object(M.e)(p)) || null,
						[f, v] = await Promise.all([h, g]);
					if (a(Object(W.l)(f.status)), f.ok) {
						if (v && v.ok) {
							const e = null === (r = v.body.data.redditorInfoByName) || void 0 === r ? void 0 : r.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							f.body && f.body.account && Object.assign(f.body.account, t)
						}
						const t = Object(E.a)(f.body, e, c);
						a(me({
							key: i,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...f.body
						})), a(ve({
							key: i
						}));
						const s = n().posts.models[e],
							o = s && Object(V.P)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(N.a)(c, {
							subredditId: o.id
						}) && a(Object(d.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && f.body.comments && await a(Object(b.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else a(ue({
						error: f.error,
						key: i,
						...f.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return o
			}));
			s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/publicAccessNetwork/streams.ts");
			var a = s("./src/reddit/actions/users.ts"),
				n = s("./src/reddit/selectors/user.ts");
			const o = e => async (e, t) => {
				const s = t();
				Object(n.K)(s) || await e(a.r())
			}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var a = s("./node_modules/uuid/v4.js"),
				n = s.n(a),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(r.B),
				d = e => async t => {
					t(i(e))
				}, c = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: n()()
					}))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Q
			})), s.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), s.d(t, "removalReasonsFailed", (function() {
				return $
			})), s.d(t, "removalReasonsRequested", (function() {
				return ee
			})), s.d(t, "removalReasonAddedPending", (function() {
				return te
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ae
			})), s.d(t, "addRemovalReason", (function() {
				return ne
			})), s.d(t, "editRemovalReasonPending", (function() {
				return oe
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return re
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return ue
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return fe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return we
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ye
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), s.d(t, "submitRemovalReason", (function() {
				return ke
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case r:
					case i:
					case c:
					case l:
					case u:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var g = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case r:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case d:
						case l:
						case m:
						case p:
						case h:
							return !1;
						default:
							return e
					}
				},
				f = Object(o.c)({
					error: b,
					pending: g
				});
			const v = {};
			var w = (e = v, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: s
						} = t.payload, {
							data: a
						} = s;
						return {
							...e,
							...a
						}
					}
					case i:
					case l: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case p: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: a,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const y = {};
			var S = (e = y, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: a
						} = t.payload, {
							order: n
						} = a;
						return {
							...e,
							[s]: n
						}
					}
					case i: {
						const {
							subredditId: s,
							reason: a
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], a.id]
						}
					}
					case p: {
						const {
							subredditId: s,
							reasonId: a
						} = t.payload, n = [...e[s]].filter(e => e !== a);
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			var k = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				C = Object(o.c)({
					api: f,
					models: w,
					reasonOrder: S,
					removedItemIds: k
				}),
				_ = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/makeActionCreator/index.ts"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				T = s("./src/reddit/actions/bulkActions/index.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/authoring.ts"),
				M = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				N = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				V = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(N.a)(Object(D.a)(e, [V.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: _.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, s) => Object(N.a)(Object(D.a)(e, [V.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: _.cb.POST,
					type: "json",
					data: t
				});
			var U = s("./src/reddit/helpers/isPost.ts"),
				K = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				W = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: C
				}
			});
			const Q = Object(O.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(O.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(O.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: a
				}) => {
					const n = s().subreddits.models[e].name;
					t(Q());
					const o = await ((e, t) => Object(N.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: _.cb.GET
					}))(a(), n);
					o.ok ? t(Z({
						subredditId: e,
						response: o.body
					})) : t($(o.error))
				}, te = Object(O.a)(r), se = Object(O.a)(i), ae = Object(O.a)(d), ne = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(N.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: _.cb.POST,
						data: s
					}))(o(), r, t);
					if (i.ok) {
						const {
							id: n
						} = i.body, o = {
							...t,
							id: n
						};
						s(se({
							subredditId: e,
							reason: o
						})), s(Object(A.e)({
							kind: J.b.SuccessMod,
							text: a.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ae(i.error))
				}, oe = Object(O.a)(c), re = Object(O.a)(l), ie = Object(O.a)(m), de = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n().subreddits.models[e].name;
					s(oe());
					const i = await ((e, t, s) => Object(N.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: _.cb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(o(), r, t);
					i.ok ? (s(re({
						subredditId: e,
						reason: t
					})), s(Object(A.e)({
						kind: J.b.SuccessMod,
						text: a.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ce = Object(O.a)(u), le = Object(O.a)(p), me = Object(O.a)(h), ue = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n().subreddits.models[e].name;
					s(ce());
					const i = await ((e, t, s) => Object(N.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: _.cb.DELETE
					}))(o(), r, t);
					i.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(A.e)({
						kind: J.b.SuccessMod,
						text: a.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(i.error))
				}, pe = Object(O.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, a, {
					apiContext: n
				}) => {
					const o = a();
					o.features.removalReasons.reasonOrder[e] && o.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(I.i)(L.a.ADD_REMOVAL_REASON))
				}, be = Object(O.a)("REMOVALREASONS__SUBMIT_PENDING"), ge = Object(O.a)("REMOVALREASONS__SUBMIT_SUCCESS"), fe = Object(O.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(O.a)("REMOVALREASONS__MESSAGE_PENDING"), we = Object(O.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ye = Object(O.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(O.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, s, a, n) => async (o, r, {
					apiContext: i
				}) => {
					const d = r(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(U.a)(l) ? z.e.Post : z.e.Comment,
						u = m === z.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === z.e.Post ? P.L : R.h;
					if (!u || !c) return !1;
					o(be()), o(p({
						[l]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						b = await F(i(), h);
					if (b.ok) {
						if (o(ge()), t) {
							o(ve());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: a
								},
								r = await H(i(), Object(z.h)(n, m), m);
							if (r.ok) {
								if (a === z.f.Public) {
									if (o(ye()), r.body) {
										const e = Object(K.a)(r.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(X.f)(d),
											a = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let n = s && a && Object(W.a)(a, d, d.posts.models[e.postId]);
										if (n || (n = Object(E.a)(e.postId, null, {
												sort: _.s,
												hasSortParam: !0
											})), m === z.e.Post) {
											const s = Object(x.a)(G.c.replyToPost, l);
											o(Object(j.o)({
												...t,
												headCommentId: Object(Y.w)(d, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const a = d.postStickiedComments.data[l];
											o(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), a && a !== e.id && o(Object(R.h)({
												[a]: {
													isStickied: !1
												}
											}))
										} else if (m === z.e.Comment) {
											const e = Object(x.a)(G.c.replyToComment, u.id),
												s = Object(Y.j)(d, {
													commentId: l,
													commentsPageKey: n
												});
											o(Object(j.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else o(we());
								return !0
							}
							return o(Se(r.error)), !1
						}
					} else o(fe(b.error)), o(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, n, o) => async (r, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					r(be());
					const m = Object(A.e)({
							kind: J.b.SuccessMod,
							text: a.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [a.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						u = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						p = await F(d(), u);
					if (p.ok) {
						const a = {
							ids: e,
							operation: q.a.RemovalReason,
							username: l,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (r(Object(T.b)(a)), t) {
							const a = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								o = await H(d(), Object(z.h)(a, z.e.Bulk), z.e.Bulk);
							o.ok ? (r(we()), r(m)) : r(Se(o.error))
						} else r(m)
					} else r(fe(p.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var a = s("./src/lib/loadableAction/index.ts");
			const n = Object(a.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(a.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				r = Object(a.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const o = Object(a.a)(n.a),
				r = Object(a.a)(n.b)
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement(r.b, {
				className: Object(o.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.div("Wrapper", p.a), g = i.a.span("Copy", p.a), f = i.a.wrapped(l.j, "SignupLink", p.a), v = i.a.wrapped(l.m, "LoginLink", p.a);
			t.a = Object(c.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: a,
				openRegisterModal: i,
				origin: c,
				sendEvent: l
			}) => n.a.createElement(b, {
				className: Object(o.a)(e, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement(g, {
				className: Object(o.a)({
					[p.a.LiveStreamingCopy]: t
				})
			}, h._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement(v, {
				href: Object(d.a)(s, c, "/login"),
				onClick: e => {
					Object(r.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), l(Object(m.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(f, {
				className: Object(o.a)({
					[p.a.LiveStreamingSignupLink]: t
				}),
				href: Object(d.a)(s, c, "/register"),
				onClick: e => {
					Object(r.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), l(Object(m.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Sign Up", null, {
				hk: "48wH4o"
			}))))
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				c = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				u = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = s.n(p);
			const b = i.a.img("Userpic", h.a),
				g = Object(r.c)({
					account: e => e.user.account
				}),
				f = Object(o.b)(g);
			t.a = i.a.wrapped(f(({
				account: e,
				className: t,
				height: s,
				icon: a,
				isLivestreaming: o,
				trash: r,
				userId: i,
				width: p
			}) => {
				const g = o ? 36 : 20,
					f = {
						height: s || g,
						width: p || g,
						minWidth: p || g
					};
				if (r) return n.a.createElement("div", {
					className: t,
					style: f
				}, n.a.createElement(u.a, {
					className: h.a.TrashIcon
				}));
				const v = e && e.id === i,
					w = v ? e.accountIcon : a;
				return Object(l.a)(w) ? n.a.createElement("div", {
					className: t,
					style: f
				}, n.a.createElement(c.a, {
					headshot: w
				})) : i ? n.a.createElement("div", {
					className: t,
					style: f
				}, v && e.accountIcon ? n.a.createElement(b, {
					src: e.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(d.a, {
					userId: i
				})) : n.a.createElement("div", {
					className: t,
					style: f
				}, e && e.accountIcon && !o ? n.a.createElement(b, {
					src: e.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(m.a, {
					className: h.a.ProfileIcon
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(a.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = r.a.div("LoaderWrapper", c.a),
				m = r.a.div("Icon", c.a),
				u = r.a.div("Byline", c.a),
				p = Object(o.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null))
				});
			t.a = e => n.a.createElement(p, e)
		},
		"./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less": function(e, t, s) {
			e.exports = {
				FormBackground: "RC1x6aHRffvqf7VGCFZE7",
				formBackground: "RC1x6aHRffvqf7VGCFZE7",
				FormLine: "_3ztIZ_soV1oB0_2V4tAqYp",
				formLine: "_3ztIZ_soV1oB0_2V4tAqYp",
				InputLine: "JBVpqv0w-wIwNxXH9PO84",
				inputLine: "JBVpqv0w-wIwNxXH9PO84",
				Text: "_1LfRcWtoPCF5ugZjBaiuQW",
				text: "_1LfRcWtoPCF5ugZjBaiuQW",
				SendIcon: "_3igLQFt0eRxuWHQWHLPosF",
				sendIcon: "_3igLQFt0eRxuWHQWHLPosF",
				InfoIcon: "_2pRpE5oJOQrNwAS5OipItc",
				infoIcon: "_2pRpE5oJOQrNwAS5OipItc"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => o.a.createElement(i.d, null, o.a.createElement(i.h, null, o.a.createElement(c.a, null, o.a.createElement(i.p, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(i.b, null)))), o.a.createElement(i.k, null, o.a.createElement(i.o, {
				className: m.a.ModalText
			}, e.modalText)), o.a.createElement(i.f, null, !e.hideCancelButton && o.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(i.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_2N03en-1hKSWiv1t19ZKG",
				button: "_2N03en-1hKSWiv1t19ZKG",
				ModalHeader: "vQpCIRoCQpqZZMhzV5pxK",
				modalHeader: "vQpCIRoCQpqZZMhzV5pxK",
				Link: "_2dGXy-vdP4qZ4_rM8YoxQa",
				link: "_2dGXy-vdP4qZ4_rM8YoxQa",
				ModalFooter: "_1SA_yROMzBC2xZ8UwIiw7o",
				modalFooter: "_1SA_yROMzBC2xZ8UwIiw7o",
				Title: "qTLc9SM-wTQjYOjoSg0pW",
				title: "qTLc9SM-wTQjYOjoSg0pW",
				SubTitle: "_3ScWa1YMrvOJHK_Bke7iLV",
				subTitle: "_3ScWa1YMrvOJHK_Bke7iLV",
				ModalMain: "yp1VmGmZtd7oHY8_6S-4s",
				modalMain: "yp1VmGmZtd7oHY8_6S-4s",
				Image: "_16op4npNx1KkLNRDSSRwEB",
				image: "_16op4npNx1KkLNRDSSRwEB",
				ModalText: "SKC5dOFw80sCsJdP5n0_d",
				modalText: "SKC5dOFw80sCsJdP5n0_d"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = "rpan-download-obs-modal",
				o = Object(a.a)({
					resolved: {},
					chunkName: () => "Download OBS Modal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Download OBS Modal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_2ZtF0KY8miGcAKH2bKpeFg",
				bannerButton: "_1Txx6iEKtaOXFI0jWxe33u",
				Link: "NmW-4eoDKF7qwN1eOHIZX",
				link: "NmW-4eoDKF7qwN1eOHIZX",
				buttonGroup: "_2ZPRFL81TGLv8_I3sNuTPX",
				Button: "vTaaqwnZmB5nDIVGQg46i",
				button: "vTaaqwnZmB5nDIVGQg46i",
				ModalBody: "_20P3_5OAGOA17qtM8WWosJ",
				modalBody: "_20P3_5OAGOA17qtM8WWosJ",
				ModalHeader: "_2JQJnav6BN15ouwndMS8v0",
				modalHeader: "_2JQJnav6BN15ouwndMS8v0",
				OBSImage: "_3BxgYaImNWnO-5EL124Uu",
				obsImage: "_3BxgYaImNWnO-5EL124Uu",
				ModalFooter: "_1FA99wDnuK6JYf6UZ8uvZv",
				modalFooter: "_1FA99wDnuK6JYf6UZ8uvZv",
				Title: "_3kw4Ocwkq_BMLQkOI8PNuL",
				title: "_3kw4Ocwkq_BMLQkOI8PNuL",
				SubTitle: "_3_k2jbZuNUdBs1uQB7ixME",
				subTitle: "_3_k2jbZuNUdBs1uQB7ixME",
				ModalMain: "_2-uMAk5f5ZEVHA7qRbTppQ",
				modalMain: "_2-uMAk5f5ZEVHA7qRbTppQ",
				Image: "_3Jd4_nAegc-VBQkl9fkRsc",
				image: "_3Jd4_nAegc-VBQkl9fkRsc",
				VideoLive: "_1Ug68guQT4FRvLm9KrPVS9",
				videoLive: "_1Ug68guQT4FRvLm9KrPVS9",
				ModalText: "_1JEPfF0ge4CHSOolR6mn4I",
				modalText: "_1JEPfF0ge4CHSOolR6mn4I",
				TextButton: "_2WvJWRo5J-lgzhXhcgArFK",
				textButton: "_2WvJWRo5J-lgzhXhcgArFK",
				TitleContainer: "_2i4zKcmHUk7mzsX7IQ6M2M",
				titleContainer: "_2i4zKcmHUk7mzsX7IQ6M2M",
				closeIcon: "_jhhdqQ8u6h6iv51Ae-DA"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less": function(e, t, s) {
			e.exports = {
				EndBroadcastMessageInput: "_2m1DI8ycgdiC8NTu3V708K",
				endBroadcastMessageInput: "_2m1DI8ycgdiC8NTu3V708K",
				EndBroadcastModalFooter: "_1RM2TFGQZBN3MqD3VKMngq",
				endBroadcastModalFooter: "_1RM2TFGQZBN3MqD3VKMngq",
				MessageHeader: "_7i88xKOTFWbNBxGnzvD9c",
				messageHeader: "_7i88xKOTFWbNBxGnzvD9c"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				o = Object(a.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less": function(e, t, s) {
			e.exports = {
				awardBubbler: "FnKrJdIHMgaZCe4KmJpIs",
				award: "_2f1uito___1hy1e_wOG0cC",
				award_silverTier_LowCenter: "_216UpJYpySln3pOtiOy225",
				awardSilverTierLowCenter: "_216UpJYpySln3pOtiOy225",
				float75Center: "_3A9o1PdPiDWiJfITCo2qEC",
				fade: "_3FoNOebBs_9TJFnLFtbUjL",
				award_silverTier_MidCenter: "_297woX02AtKIxuMY1txb5c",
				awardSilverTierMidCenter: "_297woX02AtKIxuMY1txb5c",
				float100Center: "_3LPS-agAJGcsfANT15rYl8",
				award_silverTier_HighCenter: "_1qlxY17qEij8PWBrervj9w",
				awardSilverTierHighCenter: "_1qlxY17qEij8PWBrervj9w",
				float125Center: "_1wJt2jUSqBE-n2umgQUdln",
				award_goldTier_LowCenter: "_3aPtHCBNS901iYzOQUDPEh",
				awardGoldTierLowCenter: "_3aPtHCBNS901iYzOQUDPEh",
				scaleMd: "_15xyt6jmFtTLWmSNa5nrGQ",
				award_goldTier_MidCenter: "_2YitZz-a9SZGtnVGbRXjtq",
				awardGoldTierMidCenter: "_2YitZz-a9SZGtnVGbRXjtq",
				award_goldTier_HighCenter: "_2I3Lfdw0TvtN1xaLIij4ut",
				awardGoldTierHighCenter: "_2I3Lfdw0TvtN1xaLIij4ut",
				float150Center: "_3R1nNQWRQsoT9l6ZifsG47",
				award_platinumTier_LowCenter: "CxCnoSR3_qVd4TYKNs0Ah",
				awardPlatinumTierLowCenter: "CxCnoSR3_qVd4TYKNs0Ah",
				scaleLg: "YLRJkPNcn3c5whQvOeUXS",
				float200Center: "_2r3LWQOuuFBw-6MlgY1pQt",
				award_platinumTier_MidCenter: "kCUDFUEpYYDCRHscei3bX",
				awardPlatinumTierMidCenter: "kCUDFUEpYYDCRHscei3bX",
				float225Center: "_1Vihk7D4lCPLkj0wO_iW3u",
				award_platinumTier_HighCenter: "_30NplgVbUHf4fq3Ank601l",
				awardPlatinumTierHighCenter: "_30NplgVbUHf4fq3Ank601l",
				float250Center: "_1LhoeEsykXNuFDpKWZz889",
				award_silverTier_LowLeft: "Pqj6pwKC50iZWAA1Y7XaM",
				awardSilverTierLowLeft: "Pqj6pwKC50iZWAA1Y7XaM",
				float75Left: "_3IOoxSli9QpfsmexOXMcIK",
				award_silverTier_MidLeft: "_3ey7bKqS2YdC6084OjA798",
				awardSilverTierMidLeft: "_3ey7bKqS2YdC6084OjA798",
				float100Left: "_2q2rgJ-8FR6uz9yR7VeiLH",
				award_silverTier_HighLeft: "Mpn0Z0nB_OY_NWgpDdTWX",
				awardSilverTierHighLeft: "Mpn0Z0nB_OY_NWgpDdTWX",
				float125Left: "QIM2ONU8x6sFjUembrsJO",
				award_goldTier_LowLeft: "_1637g-O1CS-DkhdsIL-2td",
				awardGoldTierLowLeft: "_1637g-O1CS-DkhdsIL-2td",
				award_goldTier_MidLeft: "_3E2Xtm_D7XkbSSmDBOHA4x",
				awardGoldTierMidLeft: "_3E2Xtm_D7XkbSSmDBOHA4x",
				award_goldTier_HighLeft: "_1XnCilCgxYezH9XdRITdoa",
				awardGoldTierHighLeft: "_1XnCilCgxYezH9XdRITdoa",
				float150Left: "_1WhjlhiC8s6dkAybvRxr5b",
				award_platinumTier_LowLeft: "_1sM1uVxjjB_Xx6Rc7HjYNy",
				awardPlatinumTierLowLeft: "_1sM1uVxjjB_Xx6Rc7HjYNy",
				float200Left: "_2QGTN4l7AoTcovIc8t4NEQ",
				award_platinumTier_MidLeft: "_1GojdHGBcjXMuTH3CDTyN7",
				awardPlatinumTierMidLeft: "_1GojdHGBcjXMuTH3CDTyN7",
				float225Left: "ZauEx-KgYrY_KOCrJMPeW",
				award_platinumTier_HighLeft: "_3IvFxb_eSs0D9eRF1J8wE_",
				awardPlatinumTierHighLeft: "_3IvFxb_eSs0D9eRF1J8wE_",
				float250Left: "WXB-UF50Acfu-LbeVpqjw",
				award_silverTier_LowRight: "_2BonddcIYAZM0-8IgAyPi5",
				awardSilverTierLowRight: "_2BonddcIYAZM0-8IgAyPi5",
				float75Right: "YnOZON_jcjlOmnKQ42gC6",
				award_silverTier_MidRight: "a1weN6qnWYBr7MaYYKfei",
				awardSilverTierMidRight: "a1weN6qnWYBr7MaYYKfei",
				float100Right: "_3USBLUGyjBTpJNXEAbla8r",
				award_silverTier_HighRight: "_3IwP-T0K8JRA_WqpGsSFlc",
				awardSilverTierHighRight: "_3IwP-T0K8JRA_WqpGsSFlc",
				float125Right: "_2p90_prlzVa-hsep-G4nCk",
				award_goldTier_LowRight: "_2p941C7-2vs0TKRdNgQWCf",
				awardGoldTierLowRight: "_2p941C7-2vs0TKRdNgQWCf",
				award_goldTier_MidRight: "_2E4IlN2Kf4y3umZR-Vf7hx",
				awardGoldTierMidRight: "_2E4IlN2Kf4y3umZR-Vf7hx",
				award_goldTier_HighRight: "_257dp4PQnZma-9Vpc-yRgA",
				awardGoldTierHighRight: "_257dp4PQnZma-9Vpc-yRgA",
				float150Right: "_2fPS0Ooe2JD4L8rGSIVx0L",
				award_platinumTier_LowRight: "_3HqKNMDPQnu-eDjduf4_m_",
				awardPlatinumTierLowRight: "_3HqKNMDPQnu-eDjduf4_m_",
				float200Right: "_1N8AaOtkRWFat_OLw8Br3t",
				award_platinumTier_MidRight: "_4_He2TDlPCWbmBuepldJC",
				awardPlatinumTierMidRight: "_4_He2TDlPCWbmBuepldJC",
				float225Right: "_2bdGMSPwywxuBeEZkqhXpo",
				award_platinumTier_HighRight: "_25D-Z-z9HV1nYxFAKLB12",
				awardPlatinumTierHighRight: "_25D-Z-z9HV1nYxFAKLB12",
				float250Right: "oPK1nepC5Dg_KXmmXVMMV",
				float175Center: "_3QialJDN2lgx_qYSBi311Y",
				float175Left: "_2q4HlG1Po75dNuZjxSWFyz",
				float175Right: "_1MmsAgQwzi4ALilKygWHQy"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less": function(e, t, s) {
			e.exports = {
				tierAttribution: "PpfDNRwC6RdrWGjAujgud",
				platinumTierAttribution: "_2S3Arge8GOct3TsHb7Y1TU",
				awardName: "_1aJk-1fL4qyN2dcb8TKrSV",
				giverIcon: "_3v2Yx8oKFIMtM2_pvzvEzp"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				awardIconContainer: "aKtOzhWxIEjw6t4uxHXUZ",
				silverTierAwardIcon: "_1oruXtexEyPHDKeT9IX3O-",
				goldTierAwardIcon: "_25hWQnELKx76mS_3mNPBt",
				platinumTierAwardIcon: "_2mmdUsGGMugAWYqqH47Xfp",
				backgroundAnimation: "_1dalm40CELvVY0j6qOMgfD",
				backgroundStar: "_2h56XJi8B0XG4DsP74pB6s",
				spinCW: "_3WGa2d8ljXV2td2T-mMnx9",
				spinCw: "_3WGa2d8ljXV2td2T-mMnx9",
				backgroundStar2: "GPuTVexvh-6qpNAa6ZJQ5",
				backgroundSparkle: "FicKwF51rs_CK1wq09YYx",
				twinkle: "_2LKv65V9VKTKwmXJ5nEEUC",
				sparkleBottomLeft: "_2x6YhyAf4idFsw5vadFRpr",
				sparkleTopRight: "msgZtr0NMoakp8qx3-ET-",
				sparkleBottomRight: "_12bP3nOeUYSYRvSfKaUvsS"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_14ChzZxF_M44B1kvKYdn8H",
				awardIconAnimation: "_17OeWiA9f23WIagDo_qTCF",
				awardIconShow: "_2UYc6-AlDF8KgBo4iOaECW",
				awardHide: "_3NR_91K1cJK00cWs6hrEJC",
				attributionAnimation: "_19eb_9gLouu0vruXat7_Wk",
				attributionShow: "_3wbaxkPcmrPQUki8s7Gtdd",
				attributionHide: "_2u5VFqL4VPOy6GeTLryeSx"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less": function(e, t, s) {
			e.exports = {
				awardOverlay: "_3OFD4N6xzH7U_xJUgGCIJB"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less": function(e, t, s) {
			e.exports = {
				awardOverlaySpectacle: "_3POkDmO2vbDMOp12f4hNNM",
				awardOverlay: "_3N0A_QUgUzdXavU0d1w1lb"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less": function(e, t, s) {
			e.exports = {
				meterOverlay: "_1SwzjHTHbv5YOLDvhibz5f",
				meterPillWrapper: "_3Xpkpmj5-5TdrrUuqkbZEZ",
				meterPillContainer: "_5YBmJjZoc7vk-v08UWh1_",
				animateMeterInAndOut: "_2xq4pchu_eN3EWm5Jkx8QL",
				fadeInAndOut: "_3tQLJ-0XHd06LMBHpAaDD3",
				animateMeterInOnly: "_2-Fx4dYZn7ajYBLgMsCnxR",
				fadeIn: "_1eqT8ivBAWB0KPCt3tGvXt",
				fillMeterCritical: "_2y0uwouvZZzHtFXZSFuG7v",
				fillMeterLow: "_25Roektb1FL-TmyMwZRUEj",
				fillMeterNormal: "_3lQlVfIax8Me0nElY86hqX",
				fillMeterFed: "_2RJl1rp1YpLK_nECLKCl-e",
				meterLabel: "H5LQSL1OKVFrH4OzWtyFQ",
				particleWrapper: "_2JOlLJCTrII4HoAgjtUM28",
				particle: "TaJQXtUpzE9j6EeF2-FsE",
				particleSm: "_3K_epEfsOOOz3haspxn1yl",
				particleLg: "_3VHhuIv7jyPfTrKS1DgYd_",
				particleX0: "_2R-qPB5_JN4JbWFEn92ukc",
				particleX5: "_24S8klFnG4XOuvf-wuW5Mw",
				particleX10: "WHPZQrCmX-0D9rnpRs03R",
				particleX15: "_2c_GUDPeqPxosT-hFxwRYK",
				particleX20: "_3S680Y12xGT937OmODtTPP",
				particleX25: "_18lYzj0Al47z9ldVbRo7WL",
				particleX30: "_3-q5AYulX2ayc3Yom5jsmA",
				particleX35: "_3KMc9BG-Q0M6Xx4fGtyKvb",
				particleX40: "lXS_bqfbcHQJ-thnl-iF1",
				particleX45: "_2ep8T7ZeHLwVn6ZFGryz5d",
				particleX50: "_-5ko9R0ZBqe3Abz9JTaRT",
				particleX55: "_2dEcIcsiAyNbq8tRt1qe8m",
				particleX60: "_33N6ZPtAFBvR3kRrwLPkXp",
				particleX65: "_35xMB1jaLJunn7iFOvxctL",
				particleX70: "E4fvX5v0P7X5TRP2TIOIg",
				particleX75: "_1QUbiZQfb02e-5xgqdHmZl",
				particleX80: "UWHORsCQY0RD7JCSgWVbr",
				particleX85: "LT-jI6K3OlG_LIgfflAt5",
				particleX90: "_52Egx9RRo0D81S-fzaI71",
				particleX95: "_1vPkkgjPYWQ4-WF9I9S_Mr",
				particleX100: "_3G6Z2N9uXRs7s5mX6G7MR3",
				particle15Deg: "_3Jc2Wreg1kHTnDfs4-PV1w",
				move15Deg: "_3vwXcQ5OoI-Fqa8sF0bK9t",
				particle45Deg: "_1O5a1O4kMCQeYm6C59J_27",
				move45Deg: "_3DOBoVurEAJumT9Q1F_4SP",
				particle75Deg: "_34xifRAFcUFVtG7UIFbMnT",
				move75Deg: "_2xQtzdy0QLlyFmz7swubOk",
				particleDelay1: "_1ZpamcHb1_M9iHl_0api1G",
				particleDelay2: "_19QCRq04-fkp5mzf9KnQ5y",
				particleDelay3: "x1nsj5GvoOIhGg5HqapgN",
				particleDelay4: "_3XJaocXfxz-7_2ynqm3HUa",
				particleDelay5: "_2sFWfZrl3XhLj6lYCCCFpw",
				particleDelay6: "_1Wfp9G8gCkp8j-7tdKgaO9",
				particleDelay7: "_1MrBp8anZ2zF8Szl6Pr0h9",
				particleDelay8: "_2H0ACN8-9zZjFWvSL22yeB",
				particleDelay9: "_3UtZVRTbQfgJOEHRyEM8D4",
				particleDelay10: "PKfpa3Dzjl9tthpMoU3pV",
				particleReverse: "bxj_DvGI3u5PeAbe7QtU2"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "UL0EgTWUyCb0-qMWcY18N",
				dropdownTriangle: "zPDKvoROAg3PV05zDWnZP",
				overflowMenuIcon: "_7cxCI8JUyH-7A10o0Z8oa",
				dropdown: "ztqKv9F6h9Bk8Oq28W8_n",
				dropdownLabel: "GDGRC-eiS72xPHwbJuudS",
				dropdownRow: "PD3ktNCcalJOk3caRXS4-"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less": function(e, t, s) {
			e.exports = {
				scrubberBar: "_1qNcdQne5zCPqYhbbuj8dy",
				visible: "_2xzC2ncShLK6L1PpLtMNsg"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less": function(e, t, s) {
			e.exports = {
				streamingChat: "_3ZcCOjXXSQTxyjfVz91MYT",
				prompt: "_72hwd-RmhciQJPjpTun-m",
				chatScroller: "_1VA8Leq8VgzE0tcCf0nnmc",
				emptyState: "_13PmNeNdYYYFh3BVc79an"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less": function(e, t, s) {
			e.exports = {
				meterCritical0: "_1T7F7j3sbgWiyiqRRnet3p",
				meterCritical10: "_1DtSizPrgyuKf8w6idU9cz",
				meterCritical20: "_2WMEtQrqSX1GMTuAZi7BJF",
				meterCritical30: "_1EKoCygRtkeseJ016Cc2jZ",
				meterCritical40: "_11HpV5Yq5Z1B9-dIDlpT1U",
				meterCritical50: "_1tSw--7teh0GyWwcao4gdV",
				meterCritical60: "_2CKRwggQNVsKzp5kGaH5La",
				meterCritical70: "_3BDNCyLtPA5f-jumOd9ajl",
				meterCritical80: "_2TVEvSg6EvnDe3mdZRW4fk",
				meterCritical90: "EMOGPpN-w266AIH_esqnz",
				meterCritical100: "_3dChP9_PA_HHpIh-MIOkBS",
				meterCritical110: "_14lOkdk4IyPRbADMNL9QE7",
				meterCritical120: "_3KXRmja9d_BCTVxIMKBBoU",
				meterCritical130: "_3QRH7HveukgBW4ssNnAND5",
				meterCritical140: "_3lgkwJQwL5HDVSqaKJDJtx",
				meterCritical150: "_1nnHb4m3b8B0Jn8-vGvC8i",
				meterCritical160: "_3bRU8dEZlwGBZ_hpdFz2N3",
				meterCritical170: "T6gcTLzF6xZMkuDKZkl30",
				meterCritical180: "_1JPtfjGQd_XVLO8kEi6K2L",
				switchContainer: "CWoSjbtB167AZNKroCaZ_",
				switchButton: "mT9ZmVLUVuh9vAJ7zwJTF",
				streamThumbnail: "_2dFEpiLjl4l_V34KjcBiPT",
				arrowIcon: "_2rr0-UWx_dcJs5qJxx7zb6",
				switchContainerNext: "_1madTdUxB7YHTPcikPseyX",
				switchContainerPrevious: "_1uaoOY-tle0b_MqSTJ5byL"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1aOgdrnO2MSBAtzoOxpxZq",
				static: "_1ZIY7mYqRj_y6DMJbX5ytS",
				noise: "wNd3BfljscNJtL1turBKy",
				preview: "_1L9jXHNc52Qlp__ktgAXjd",
				loading: "HZckkZbcn3F04tqSALljv"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less": function(e, t, s) {
			e.exports = {
				statsPanel: "mZiwRB3IyMA2ciE9VYmM5",
				watchingContainer: "_1S1XpTfxiVE_qLOIr_7Q4T",
				watchingCounter: "_1oJlp6NNid7Mc4MQyILB-s",
				watchingCaption: "_2STAcvaW1vo-sELvkodWFV",
				voteContainer: "_1kPiN_EqJH2A8zcFqmXTsV",
				voteIcon: "mCEKjumIA4fAYzXycHXp7",
				upButton: "_1-ZeaCDlEjCCKHOO_UhElo",
				activeVote: "zgEolbsvkXlLlrgJSpWkL",
				downButton: "_3txlAk8zXSeqIrpIHIsZtK",
				votesCounter: "_1Hc9ts_bYKSv1OZS0zBGOo"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/index.m.less": function(e, t, s) {
			e.exports = {
				theaterContainer: "_2GRKD-vc7V1Y_N8mf81C73",
				wrap: "_2SKXIKsN82sEYj0P-t3_pm",
				overlay: "_3EBqsnw89Qx3UEoELcarMR",
				focusVisible: "RrzcV0hyA0BISr1eXgG9M",
				panesWrapper: "_8aA-2ZrheEy6k2e1iShKQ",
				initialized: "_2QagxVHOpd1MZxMCUI8-aC",
				pane: "_1J9WuBbLemYVOo8ibJDljN",
				leftPane: "_1YLn-G2I6GbQpuf-DZ4fOX",
				videoContainer: "_1LWq4WiRex5umy4-L1eStm",
				rightPane: "p02A8ZUESZF7fQy6pu1WF",
				downloadOBSModal: "_1AP8IywWNirPJeB3GKpgz_",
				downloadObsModal: "_1AP8IywWNirPJeB3GKpgz_",
				closeButton: "_34dJmQNu3gi0aCIS1PD5uw",
				closeIcon: "UP3tR535P7cIknrcrCxQ3",
				meterCritical0: "_2T-7of-8vqAynZw1Oz4-NX",
				meterCritical10: "_3itUJfgWxcRexhqqqxQinF",
				meterCritical20: "_1Aq5PPETX3z41ibCky1_aX",
				meterCritical30: "_1RBpmHmfXPUxQgUC4uXobt",
				meterCritical40: "_2J1QDym-1XELon2WR1V4mS",
				meterCritical50: "_1fE4XQjE9zujsUme82ofuC",
				meterCritical60: "_3ONFJJcZUvYtAWF50vNx1i",
				meterCritical70: "_2cvv2EfIg0IBur6NC0WIgy",
				meterCritical80: "bvawpTY_mou8hbpn194Be",
				meterCritical90: "_3p7CDC8cj_SqaJG8P613nW",
				meterCritical100: "_3i3MCLsKesWpvlmdRPLB9P",
				meterCritical110: "_1SDfw3x3VyPkqvjELcNppA",
				meterCritical120: "_1SGt6vairhxvrHTF8afSxA",
				meterCritical130: "_2tYLpubORLk9kaT6zbJbff",
				meterCritical140: "hcs1BiyQl055s3-vqlAwD",
				meterCritical150: "_2EoBLEyd5oLeTAWhnaG7gr",
				meterCritical160: "LpClsXdrjAViEdXqQqWxn",
				meterCritical170: "tRB7qSJRizC3oDAmc20At",
				meterCritical180: "rPfp0FIXGWvZw6BpvAbid"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, s) {
			e.exports = {
				DisplayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				displayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				DropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				dropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				ReasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				reasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				Dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				DropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				dropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				DropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				dropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				DropdownContainer: "_33sg6HoBYll4rCDqRzRUdu",
				dropdownContainer: "_33sg6HoBYll4rCDqRzRUdu"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = r.a.wrapped(l.a, "DisplayContainer", u.a),
				h = r.a.div("DropdownLabel", u.a),
				b = r.a.div("ReasonTitle", u.a),
				g = e => o.a.createElement(p, null, o.a.createElement(h, null, e.dropdownLabel), e.selectedReason && o.a.createElement(b, null, e.selectedReason)),
				f = r.a.wrapped(i.a, "Dropdown", u.a),
				v = r.a.wrapped(c.b, "DropdownTriangle", u.a),
				w = r.a.wrapped(d.b, "DropdownRow", u.a),
				y = r.a.button("DropdownContainer", u.a);
			t.a = e => o.a.createElement(y, {
				onClick: e.onToggleDropdown
			}, o.a.createElement(g, {
				dropdownLabel: e.isLoading ? a.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : a.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), o.a.createElement(v, null), e.isDropdownOpen && o.a.createElement(f, {
				isOverlay: !0
			}, o.a.createElement(w, {
				displayText: a.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => o.a.createElement(w, {
				displayText: `${s+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, s) {
			e.exports = {
				CharacterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				characterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				EmptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				emptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				ModNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				modNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				PrimaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				primaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				RadioOption: "_30JuaHooKBU-I9UQwxEwhL",
				radioOption: "_30JuaHooKBU-I9UQwxEwhL",
				BoldText: "_22_ggqyuhsjDD3F2auyNjc",
				boldText: "_22_ggqyuhsjDD3F2auyNjc",
				ModNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				modNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				MessageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				messageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				Info: "_3Bf1PCbZnJJBM391IWRv8D",
				info: "_3Bf1PCbZnJJBM391IWRv8D",
				SmallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				smallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				FormOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				formOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				ModalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				modalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				FooterRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				footerRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				ButtonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return R
			})), s.d(t, "selector", (function() {
				return j
			})), s.d(t, "connector", (function() {
				return M
			})), s.d(t, "CharacterCountdown", (function() {
				return I
			})), s.d(t, "EmptyState", (function() {
				return P
			})), s.d(t, "MessageInput", (function() {
				return B
			})), s.d(t, "FormOptionsContainer", (function() {
				return U
			})), s.d(t, "ModalFooter", (function() {
				return K
			})), s.d(t, "ButtonRow", (function() {
				return q
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return G
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = s("./src/reddit/controls/TextButton/index.tsx"),
				f = s("./src/reddit/icons/fonts/Info/index.tsx"),
				v = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = s("./src/reddit/models/RemovalReason/index.ts"),
				y = s("./src/reddit/selectors/removalReasons.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				_ = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				O = s.n(_);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				switch (e) {
					case w.f.Private:
						return "private_subreddit";
					case w.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, T = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: w.f.Public,
				selectedReason: null
			}, R = e => ({
				submitBulkRemovalReason: (t, s, a, n, o) => e(Object(c.submitBulkRemovalReason)(t, s, a, n, o)),
				submitRemovalReason: (t, s, a, n, o) => e(Object(c.submitRemovalReason)(t, s, a, n, o))
			}), j = Object(r.c)({
				currentUserName: e => {
					const t = Object(k.j)(e);
					if (t) return t.displayText
				},
				isLoading: y.a,
				removalReasons: y.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(S.T)(e, {
					subredditId: t
				}).name
			}), M = Object(o.b)(j, R), I = d.a.wrapped(l.a, "CharacterCountdown", O.a), P = d.a.div("EmptyState", O.a), A = d.a.wrapped(m.n, "ModNoteDescription", O.a), L = d.a.wrapped(u.i, "PrimaryButton", O.a), N = d.a.wrapped(b.a, "RadioOption", O.a), D = d.a.span("BoldText", O.a), V = d.a.wrapped(m.s, "ModNoteInput", O.a), B = d.a.wrapped(m.s, "MessageInput", O.a), F = d.a.wrapped(f.a, "Info", O.a), H = d.a.div("SmallInfoText", O.a), U = d.a.div("FormOptionsContainer", O.a), K = d.a.wrapped(m.f, "ModalFooter", O.a), W = d.a.div("FooterRow", O.a), q = d.a.wrapped(W, "ButtonRow", O.a);
			class G extends n.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${x(e)}`)()
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onUpdateModNote = e => {
						this.setState({
							modNote: e.currentTarget.value
						})
					}, this.handleToggleDropdown = () => this.setState({
						isDropdownOpen: !this.state.isDropdownOpen
					}), this.closeDropdown = () => {
						this.state.isDropdownOpen && this.setState({
							isDropdownOpen: !1
						})
					}, this.onSelectReason = e => {
						this.setState({
							selectedReason: e
						}), this.props.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > w.a || this.state.modNote.length > w.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === w.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${x(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== w.e.Bulk && s.push(n.a.createElement(N, {
							key: w.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Public
						}, n.a.createElement("div", null, t.removalContextType === w.e.Post ? E._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : E._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(n.a.createElement(N, {
							key: w.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Private
						}, n.a.createElement("div", null, E._("Private: send a Modmail from {subredditName} to the user", [E._param("subredditName", n.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(n.a.createElement(N, {
							key: w.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: w.f.PrivateExposed
						}, n.a.createElement("div", null, E._("Private: send a Modmail from {currentUserName} to the user", [E._param("currentUserName", n.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...T,
						removalContextType: Object(w.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return n.a.createElement(m.d, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && n.a.createElement(m.h, null, n.a.createElement(v.a, null, n.a.createElement(m.p, null, E._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && E._("({number of items} posts/comments)", [E._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), n.a.createElement(g.a, {
						onClick: this.onCancel
					}, n.a.createElement(m.b, null)))), n.a.createElement(m.k, null, e.isLoading || e.removalReasons.length > 0 ? n.a.createElement(C.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(P, null, E._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, n.a.createElement(u.o, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, E._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(U, null, n.a.createElement(m.g, null, n.a.createElement(h.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), n.a.createElement(B, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(I, {
						maxChars: w.a,
						text: t.message.trim()
					}), n.a.createElement(H, null, t.removalType !== w.f.Public && n.a.createElement(n.a.Fragment, null, n.a.createElement(F, null), E._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), n.a.createElement(K, null, n.a.createElement(W, null, n.a.createElement(A, null, E._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), n.a.createElement(W, null, n.a.createElement(V, {
						placeholder: E._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), n.a.createElement(W, null, n.a.createElement(I, {
						maxChars: w.b,
						text: t.modNote.trim()
					})), n.a.createElement(q, null, n.a.createElement(u.l, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, E._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(L, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, E._("Submit", null, {
						hk: "42zLFy"
					})))))
				}
			}
			t.default = Object(i.a)(M(G))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: n.b.overlayReportFlow
			};
			t.a = Object(a.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return r
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "j", (function() {
				return S
			}));
			var a = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(n);
			const r = a.a.section("FormPage", o.a),
				i = a.a.h1("HomePageTitle", o.a),
				d = a.a.button("HomePageBreadcrumb", o.a),
				c = a.a.div("HomePageGroup", o.a),
				l = a.a.h1("FormPageTitle", o.a),
				m = a.a.div("FormPageSection", o.a),
				u = a.a.div("FormGroup", o.a),
				p = a.a.h2("FormGroupTitle", o.a),
				h = a.a.div("FormElement", o.a),
				b = a.a.div("FormGroupDescription", o.a),
				g = a.a.div("FormItem", o.a),
				f = a.a.h3("FormElementTitle", o.a),
				v = a.a.div("FormElementDescription", o.a),
				w = a.a.div("FormElementError", o.a),
				y = a.a.div("FormElementSubGroup", o.a),
				S = a.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-helmet/es/Helmet.js"),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/pageTitle.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts");
			const m = Object(i.a)(l.c, e => ({
				badgeCount: e
			}));
			class u extends a.Component {
				constructor() {
					super(...arguments), this.title = Object(d.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(d.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), n.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(r.b)(m)(u)
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, s) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Info/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var a = s("./src/reddit/helpers/isPost.ts");
			const n = 20,
				o = 50,
				r = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(a.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.m.less": function(e, t, s) {
			e.exports = {
				rpanContainer: "e00nEFei4dIvTqPPuw5rE",
				overlay: "KiogDzsSRwmKjlSPDsTQv",
				forbiddenScreen: "_1Ew8OVeA6sJ108GaDUqjQf"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/lib/pageTitle.ts"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = s("./src/config.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./node_modules/lodash/throttle.js"),
				v = s.n(f),
				w = s("./src/higherOrderComponents/withMux/index.tsx"),
				y = s("./src/lib/addQueryParams/index.ts");
			var S = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				k = s("./src/lib/focusVisible/index.js"),
				C = s("./src/lib/VideoSession/util.ts"),
				_ = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				O = s("./src/reddit/actions/media.ts"),
				E = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/profile/index.ts"),
				T = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				R = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				j = s("./src/lib/makeActionCreator/index.ts");
			const M = Object(j.a)(R.E),
				I = Object(j.a)(R.X),
				P = e => async t => {
					t(M(e))
				}, A = Object(j.a)(R.P), L = Object(j.a)(R.V);
			var N = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				D = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				V = s("./src/reddit/actions/reportFlow/index.ts"),
				B = s("./src/reddit/actions/video.ts"),
				F = s("./src/reddit/components/HlsVideo/index.tsx"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				U = s("./src/lib/lessComponent.tsx"),
				K = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				W = s("./src/reddit/controls/Button/index.tsx"),
				q = s("./src/reddit/controls/TextButton/index.tsx"),
				G = s("./src/reddit/helpers/localStorage/index.ts"),
				z = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				J = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				Y = s.n(J);
			const X = U.a.div("Image", Y.a),
				Q = U.a.wrapped(K.f, "ModalFooter", Y.a),
				Z = U.a.wrapped(K.h, "ModalHeader", Y.a),
				$ = U.a.wrapped(K.k, "ModalMain", Y.a);
			var ee = Object(H.a)(({
					toggleModal: e
				}) => {
					const t = () => {
						G.vb(), e()
					};
					return n.a.createElement(K.d, null, n.a.createElement(Z, null, n.a.createElement(z.a, null, n.a.createElement("div", null, n.a.createElement("div", {
						className: Y.a.Title
					}, g.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), n.a.createElement(K.o, null, g.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), n.a.createElement(q.a, {
						onClick: t
					}, n.a.createElement(K.b, null)))), n.a.createElement($, null, n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: Y.a.SubTitle
					}, g.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), n.a.createElement(K.n, null, g.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), n.a.createElement(X, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/heart-rainbow.png")`
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: Y.a.SubTitle
					}, g.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), n.a.createElement(K.n, null, g.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), n.a.createElement(X, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_beagle.png")`
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: Y.a.SubTitle
					}, g.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), n.a.createElement(K.n, null, g.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), n.a.createElement(X, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_celebrate.png")`
						}
					}))), n.a.createElement(Q, {
						className: Y.a.ModalFooter
					}, n.a.createElement(W.i, {
						onClick: t,
						className: Y.a.Button,
						"data-redditstyle": !0
					}, g.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				te = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				se = s.n(te);
			var ae = ({
					onClickLearnMore: e,
					onClickDismiss: t
				}) => n.a.createElement("div", {
					className: se.a.banner
				}, n.a.createElement("div", null, g.fbt._("Download the RPAN studio desktop application to broadcast live from your computer.", null, {
					hk: "2eiXwc"
				})), n.a.createElement("div", {
					className: se.a.buttonGroup
				}, n.a.createElement(W.i, {
					className: se.a.bannerButton,
					"data-redditstyle": !0,
					onClick: e
				}, g.fbt._("Learn more", null, {
					hk: "1Ri9Pi"
				})), n.a.createElement(W.l, {
					className: se.a.bannerButton,
					"data-redditstyle": !0,
					onClick: t
				}, g.fbt._("Not now", null, {
					hk: "1rOQeo"
				})))),
				ne = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx"),
				oe = s("./src/reddit/actions/post.ts"),
				re = s("./src/reddit/actions/removalReasons/index.ts"),
				ie = s("./src/reddit/actions/toaster.ts"),
				de = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				le = s("./src/reddit/models/RemovalReason/index.ts"),
				me = s("./src/reddit/models/Toast/index.ts"),
				ue = s("./src/reddit/selectors/activeModalId.ts"),
				pe = s("./src/reddit/selectors/telemetry.ts"),
				he = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				be = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				ge = s("./src/reddit/controls/InternalLink/index.tsx"),
				fe = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				ve = s.n(fe);
			const {
				fbt: we
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(o.b)(he.selector, he.dispatcher), Se = U.a.wrapped(K.f, "EndBroadcastModalFooter", ve.a), ke = U.a.wrapped(K.s, "EndBroadcastMessageInput", ve.a);
			class Ce extends he.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return n.a.createElement(K.d, {
						onClick: this.closeDropdown
					}, s && n.a.createElement(K.h, null, n.a.createElement(z.a, null, n.a.createElement(K.p, null, we._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), n.a.createElement(q.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, n.a.createElement(K.b, null)))), n.a.createElement(K.k, null, s ? n.a.createElement(be.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(he.EmptyState, null, we._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(ge.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, n.a.createElement(W.o, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, we._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: ve.a.MessageHeader
					}, we._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), n.a.createElement(he.FormOptionsContainer, null, n.a.createElement(ke, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(he.CharacterCountdown, {
						maxChars: le.a,
						text: t.message.trim()
					})))), n.a.createElement(Se, null, n.a.createElement(he.ButtonRow, null, n.a.createElement(K.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, we._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(K.t, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, we._("Remove", null, {
						hk: "MMAdc"
					})))))
				}
			}
			var _e = Object(H.a)(ye(Ce));
			const {
				fbt: Oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ue.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ue.a)(e)
			}), xe = Object(o.b)(Ee, (e, {
				subredditId: t,
				postId: s
			}) => ({
				submitRemovalReason: async (t, s, a) => {
					const n = await e(Object(re.submitRemovalReason)([t], s, a, le.f.Private, ""));
					e(n ? Object(ie.e)({
						kind: me.b.SuccessEndBroadcast,
						text: Oe._("Broadcast ended", null, {
							hk: "313j6x"
						})
					}) : Object(ie.e)({
						text: Oe._("Toast:", null, {
							hk: "2dCWf"
						}),
						duration: 1e4,
						kind: me.b.Error
					}))
				},
				fetchRemovalReasons: () => e(Object(re.removalReasonsRequested)(t)),
				errorToast: t => e(Object(ie.e)({
					text: t,
					duration: 1e4,
					kind: me.b.Error
				})),
				toggleRemovalReasonModal: () => e(Object(E.i)("rpan-add-removal-reason-id")),
				toggleConfirmationModal: () => e(Object(E.i)("rpan-end-broadcast-confirmation-id")),
				onRemovePost: () => e(Object(oe.M)(s, !1))
			}));
			class Te extends n.a.Component {
				constructor(e) {
					super(e), this.onEndBroadcast = async () => {
						await this.props.onRemovePost() ? (this.props.submitRemovalReason(this.props.postId, this.state.selectedReason, this.state.message.trim()), this.props.toggleConfirmationModal()) : this.props.errorToast("Failed to end broadcast.")
					}, this.onSubmitRemovalReasons = (e, t) => {
						this.setState({
							selectedReason: e,
							message: t
						}), this.props.toggleConfirmationModal()
					}, this.props.fetchRemovalReasons()
				}
				renderConfirmationModal() {
					return n.a.createElement(de.a, {
						headerText: Oe._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: Oe._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: Oe._("Yes, remove", null, {
							hk: "4uQjqM"
						}),
						onConfirm: this.onEndBroadcast,
						onClose: this.props.toggleConfirmationModal,
						onCancel: this.props.toggleConfirmationModal,
						disableRedditStyle: !0,
						withOverlay: !0
					})
				}
				renderRemovalReasonModal() {
					return n.a.createElement(_e, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => a => () => this.props.sendEvent(n => ({
							source: e,
							action: "click",
							noun: a,
							post: s && Object(pe.post)(n, s),
							screen: Object(pe.screen)(n),
							subreddit: Object(pe.subredditById)(n, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : n.a.createElement("div", null)
				}
			}
			var Re, je = Object(H.a)(xe(Object(ce.c)(Te))),
				Me = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ie = s("./src/reddit/constants/history.ts"),
				Pe = s("./src/reddit/constants/keycodes.ts"),
				Ae = s("./src/reddit/constants/parameters.ts"),
				Le = s("./src/reddit/helpers/dom/index.ts"),
				Ne = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				De = s("./src/reddit/helpers/trackers/rpan.ts"),
				Ve = s("./src/reddit/helpers/trackers/screenview.ts"),
				Be = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Fe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				He = s("./src/reddit/selectors/media.ts"),
				Ue = s("./src/reddit/selectors/platform.ts"),
				Ke = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				We = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				qe = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Re || (Re = {}));
			const Ge = 60,
				ze = 30,
				Je = 3 * Ge,
				Ye = 5 * Ge,
				Xe = 5,
				Qe = 5 * Ge,
				Ze = 10,
				$e = 5;
			var et = s("./node_modules/uuid/v4.js"),
				tt = s.n(et),
				st = s("./src/lib/makeCommentsPageKey/index.ts"),
				at = s("./src/reddit/actions/gold/modals.ts"),
				nt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				ot = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const rt = e => async (t, s, {
				apiContext: a
			}) => {
				const n = await Object(ot.j)(a(), e, !0);
				n && n.ok ? t(Object(ie.e)({
					kind: me.b.SuccessLockComment,
					text: g.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: g.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: it(e)
				})) : t(Object(ie.e)(Object(ie.d)(g.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), me.b.Error)))
			}, it = e => async (t, s, {
				apiContext: a
			}) => {
				const n = await Object(ot.j)(a(), e, !1);
				n && n.ok ? t(Object(ie.e)({
					kind: me.b.SuccessUnlockComment,
					text: g.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: g.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: rt(e)
				})) : t(Object(ie.e)(Object(ie.d)(g.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), me.b.Error)))
			};
			var dt = s("./src/reddit/actions/subscription/index.ts"),
				ct = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				lt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				mt = s("./src/reddit/constants/posts.ts"),
				ut = s("./src/reddit/helpers/correlationIdTracker.ts"),
				pt = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				ht = s("./src/reddit/routes/postCreation/constants.ts"),
				bt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				gt = s("./src/reddit/selectors/subreddit.ts"),
				ft = s("./src/reddit/selectors/comments.ts"),
				vt = s("./src/reddit/selectors/commentSelector.ts"),
				wt = s("./src/reddit/selectors/communityAwards.ts"),
				yt = s("./src/reddit/models/Gold/Award.ts");
			var St = e => e < 500 || !e ? yt.e.Silver : e < 1800 ? yt.e.Gold : yt.e.Platinum,
				kt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				Ct = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				_t = s.n(Ct);
			const {
				fbt: Ot
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Et(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: a,
					tier: o,
					className: r
				} = e, i = o === yt.e.Silver ? _t.a.silverTierAttribution : o === yt.e.Gold ? _t.a.goldTierAttribution : _t.a.platinumTierAttribution;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(r, _t.a.tierAttribution, i)
				}, o !== yt.e.Silver && n.a.createElement(kt.a, {
					className: _t.a.giverIcon,
					userId: a,
					width: 16,
					height: 16
				}), n.a.createElement("span", null, o !== yt.e.Silver && Ot._("{giverName} gave {space}", [Ot._param("giverName", s), Ot._param("space", " ")], {
					hk: "SzDdi"
				}), n.a.createElement("strong", {
					className: _t.a.awardName
				}, t)))
			}
			var xt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Tt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Rt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				jt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Mt = s.n(jt);

			function It(e) {
				const {
					iconUrl: t,
					tier: s,
					className: a
				} = e, o = s === yt.e.Silver ? Mt.a.silverTierAwardIcon : s === yt.e.Gold ? Mt.a.goldTierAwardIcon : Mt.a.platinumTierAwardIcon, r = s !== yt.e.Silver, i = s === yt.e.Platinum;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(a, Mt.a.tierAwardIcon)
				}, n.a.createElement("div", {
					className: Mt.a.awardIconContainer
				}, r && n.a.createElement(n.a.Fragment, null, n.a.createElement(Tt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundStar)
				}), n.a.createElement(Rt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundStar, Mt.a.backgroundStar2)
				})), n.a.createElement("img", {
					src: t,
					className: o
				}), i && n.a.createElement(n.a.Fragment, null, n.a.createElement(xt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundSparkle, Mt.a.sparkleBottomLeft)
				}), n.a.createElement(xt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundSparkle, Mt.a.sparkleTopRight)
				}), n.a.createElement(xt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundSparkle, Mt.a.sparkleBottomRight)
				}))))
			}
			var Pt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				At = s.n(Pt);

			function Lt(e) {
				const {
					award: t,
					className: s,
					giverId: a,
					giverName: o
				} = e, r = St(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(s, At.a.container)
				}, n.a.createElement(It, {
					iconUrl: i,
					tier: r,
					className: At.a.awardIconAnimation
				}), n.a.createElement(Et, {
					awardName: t.name,
					className: At.a.attributionAnimation,
					giverId: a,
					giverName: o,
					tier: r
				}))
			}
			var Nt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Dt = s.n(Nt);
			class Vt extends a.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: a
					} = this.props;
					return e && a && s ? n.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(t, Dt.a.awardOverlay)
					}, n.a.createElement(Lt, {
						award: e,
						giverId: a,
						giverName: s
					})) : null
				}
			}
			var Bt = Object(o.b)(() => Object(i.a)(e => e, vt.a, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: a,
						authorId: n
					} = t;
					return {
						award: s ? Object(wt.a)(e, s) : void 0,
						giverId: n,
						giverName: a
					}
				}))(Vt),
				Ft = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Ht = s.n(Ft);
			const Ut = Object(o.b)(() => Object(i.c)({
					awardedCommentLinks: (e, {
						commentsPageKey: t
					}) => {
						return Object(ft.g)(e, {
							commentsPageKey: t
						}).filter(t => {
							const s = Object(vt.a)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: ft.u
				})),
				Kt = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class Wt extends a.Component {
				constructor(e) {
					super(e), this.state = Kt(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Kt(e);
					return {
						prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
						prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? t.prevAwardedCommentLinks ? t.prevAwardedCommentLinks.length : e.awardedCommentLinks.length : 0
					}
				}
				render() {
					const {
						awardedCommentLinks: e,
						className: t,
						isFullyLoaded: s
					} = this.props, {
						prevAwardedCommentLinksTopIndex: a
					} = this.state;
					if (!s) return null;
					const o = e.slice(a);
					return o.length ? n.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(t, Ht.a.awardOverlaySpectacle)
					}, o.map(e => n.a.createElement(Bt, {
						className: Ht.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var qt = Ut(Wt);
			const Gt = (e, t) => e > t ? Re.EXTENDED : e < Je ? Re.CRITICAL : e < Ye ? Re.LOW : Re.NORMAL,
				zt = e => e / Ge,
				Jt = e => Yt(e) % Qe == 0,
				Yt = e => Math.round(e / Xe) * Xe;
			var Xt = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				Qt = s.n(Xt);
			const Zt = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				$t = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				es = ["15Deg", "45Deg", "75Deg"],
				ts = e => e[Math.floor(Math.random() * e.length)],
				ss = () => {
					const e = [ts($t), ts(es), ts(Zt)].map(e => Qt.a[`particle${e}`]).join(" ");
					return `${Qt.a.particle} ${e} ${Math.round(Math.random())?Qt.a.particleReverse:""}`
				},
				as = 40,
				ns = 20;
			class os extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < as; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ns; t++) e.push(this.createParticle(t, "particleLg"));
					return n.a.createElement("div", {
						className: Qt.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return n.a.createElement("div", {
						key: `${t}-${e}`,
						className: `${ss()} ${Qt.a[t]}`
					})
				}
			}
			var rs = os;
			const is = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class ds extends a.Component {
				constructor() {
					super(...arguments), this.state = is(), this.timerId = 0
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateTimer(), 1e3)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateTimer() {
					this.setState(e => null === e.timer || e.timer < 1 ? null : {
						timer: e.timer - 1,
						timerDiff: null !== e.timerPausedAt ? e.timerDiff : -1
					})
				}
				static isPillVisible(e, t, s) {
					return t || s > 0 || Jt(e) || e < Ye
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: a
					} = e, {
						timerDiff: n,
						timer: o
					} = t;
					if (!s || !s.meter || null === o) return null;
					if (n > 0) {
						if (n < Ge) {
							const e = Yt(n);
							return g.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [g.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(zt(n));
							return g.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [g.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (o > s.meter.full_meter_duration) {
						const e = Math.round(zt(s.meter.full_meter_duration)).toLocaleString();
						return g.fbt._("{number of minutes}+ minutes airtime left", [g.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (Jt(o) && !a && o > Ye) {
						const e = Math.round(zt(o)).toLocaleString();
						return g.fbt._("{number of minutes} minutes airtime left", [g.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const r = Math.round(o),
						i = Math.floor(zt(r)),
						d = r % Ge,
						c = `${i}:${d<10?"0":""}${d}`;
					return g.fbt._("{mm:ss timestamp of remaining time} airtime left", [g.fbt._param("mm:ss timestamp of remaining time", c)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return is();
					const s = e.currentStream.post.id,
						a = e.currentStream.estimated_remaining_time;
					if (t.streamId !== s) {
						const t = {
							estimatedTimeRemaining: a,
							previouslyVisible: !1,
							visible: !0,
							streamId: s,
							timerPausedAt: null,
							timerDiff: 0,
							timer: a,
							pillLabel: null
						};
						return t.pillLabel = ds.getPillLabel(e, t), t
					}
					const n = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (a > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = a - t.estimatedTimeRemaining + e;
						s > Xe && (n.timer = a, n.timerDiff = s, n.timerPausedAt = a)
					}
					a !== t.estimatedTimeRemaining && Math.abs(n.timer - a) > Ze && (n.timer = a, n.timerDiff = a - t.timer, n.timerPausedAt = null), null !== n.timerPausedAt && n.timerPausedAt - n.timer > $e && (n.timerDiff = 0, n.timerPausedAt = null);
					const o = ds.getPillLabel(e, n),
						r = ds.isPillVisible(n.timer, e.overlayOpen, n.timerDiff);
					return {
						estimatedTimeRemaining: a,
						...n,
						streamId: s,
						pillLabel: o,
						previouslyVisible: t.visible,
						visible: r
					}
				}
				shouldComponentUpdate(e, t) {
					return !(!t.visible && !this.state.visible) && (t.streamId !== this.state.streamId || (t.visible !== this.state.visible || t.pillLabel !== this.state.pillLabel))
				}
				render() {
					const {
						currentStream: e,
						overlayOpen: t
					} = this.props, {
						visible: s,
						previouslyVisible: a,
						timer: o,
						pillLabel: r
					} = this.state;
					if (!(s && e && e.meter && o)) return null;
					const i = Gt(o, e.meter.full_meter_duration),
						c = !a,
						l = o < Ye || t,
						m = this.state.timerDiff > 0;
					return n.a.createElement("div", {
						className: Qt.a.meterOverlay
					}, n.a.createElement("div", {
						className: Qt.a.meterPillWrapper
					}, m && n.a.createElement(rs, null), n.a.createElement("div", {
						className: Object(d.a)(Qt.a.meterPillContainer, {
							[Qt.a.animateMeterInAndOut]: c && !l,
							[Qt.a.animateMeterInOnly]: c && l,
							[Qt.a.fillMeterCritical]: i === Re.CRITICAL,
							[Qt.a.fillMeterLow]: i === Re.LOW,
							[Qt.a.fillMeterNormal]: i === Re.NORMAL || i === Re.EXTENDED,
							[Qt.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, n.a.createElement("div", {
						className: Qt.a.meterLabel
					}, r))))
				}
			}
			var cs = ds,
				ls = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ms = s("./src/reddit/controls/Dropdown/Row.tsx"),
				us = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				ps = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				hs = s.n(ps);
			const {
				fbt: bs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var gs = ({
					label: e,
					onSelect: t,
					onToggle: s,
					subreddits: a
				}) => n.a.createElement(ls.b, {
					className: hs.a.overflowMenu,
					dropdownClassName: hs.a.dropdown,
					defaultButtonOutline: !0,
					disabled: a.length < 1,
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("div", {
						className: hs.a.overflowMenuIcon
					}, e, n.a.createElement(us.a, {
						className: hs.a.dropdownTriangle
					})),
					onClick: s
				}, n.a.createElement("div", {
					className: hs.a.dropdownLabel
				}, bs._("Pick a Community", null, {
					hk: "8MoVj"
				})), a.map(e => n.a.createElement(ms.b, {
					className: hs.a.dropdownRow,
					displayText: e.prefixedName,
					iconWrapperClassName: hs.a.overflowItemIconWrapper,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				}))),
				fs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				vs = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ws = s.n(vs);
			class ys extends a.Component {
				constructor(e) {
					super(e), this.setControlBarRef = e => {
						this.controlBarApi = e
					}, this.onToggleMute = e => {
						e.stopPropagation(), this.props.toggleMute()
					}, this.state = {
						settingChange: void 0
					}
				}
				componentDidUpdate(e) {
					const {
						videoCurrentTime: t,
						videoTotalTime: s
					} = this.props;
					this.controlBarApi && (t !== e.videoCurrentTime && this.controlBarApi.setCurrentTime(t), s !== e.videoTotalTime && this.controlBarApi.setTotalTime(s))
				}
				render() {
					const {
						className: e,
						hideControlBar: t,
						isLive: s,
						isMuted: a,
						isPaused: o,
						isVisible: r,
						onPlayPauseToggle: i,
						onVideoPositionUpdate: c,
						seekBarRef: l,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: g,
						volumeRef: f
					} = this.props;
					return n.a.createElement(fs.b, {
						className: Object(d.a)(e, ws.a.scrubberBar, {
							[ws.a.visible]: r
						}),
						currentTime: h || 0,
						hasAudio: !0,
						hideControlBar: !!t,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: s,
						isMuted: a,
						isPaused: o,
						playPauseVideo: i,
						ref: this.setControlBarRef,
						seekBarRef: l,
						settingChange: m,
						setVideoPosition: c,
						setVolume: u,
						hideLiveLabel: p,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: b || 0,
						volume: g,
						volumeRef: f
					})
				}
			}
			var Ss = ys,
				ks = s("./node_modules/lodash/debounce.js"),
				Cs = s.n(ks),
				_s = s("./src/lib/prettyPrintNumber/index.ts"),
				Os = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				Es = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				xs = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ts = s("./src/reddit/models/Vote/index.ts"),
				Rs = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				js = s.n(Rs);
			const Ms = Object(i.c)({
				currentStream: (e, {
					currentStreamId: t
				}) => Object(We.l)(e, t)
			});
			class Is extends n.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Ts.a.upvoted), this.downVotes = () => this.calculateVotes(Ts.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Ts.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Ts.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = Cs()(() => this.vote(Ts.a.upvoted), R.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = Cs()(() => this.vote(Ts.a.downvoted), R.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Ts.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState({
						...this.state,
						displayedVoteState: Object(Ts.e)(e.post.voteState)
					})
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState({
						...this.state,
						displayedVoteState: null !== t.post.voteState ? Object(Ts.e)(t.post.voteState) : Ts.a.notVoted
					}))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return n.a.createElement("div", {
						className: js.a.statsPanel
					}, n.a.createElement("div", {
						className: js.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(d.a)(js.a.upButton, {
							[js.a.activeVote]: this.isVoteActive(Ts.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": g.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, n.a.createElement(xs.b, {
						className: js.a.voteIcon
					})), n.a.createElement("p", {
						className: js.a.votesCounter
					}, Object(_s.b)(this.upVotes()))), n.a.createElement("div", {
						className: js.a.watchingContainer
					}, n.a.createElement("div", {
						className: js.a.watchingCounter
					}, Object(_s.b)(t)), n.a.createElement("p", {
						className: js.a.watchingCaption
					}, this.props.isLive ? g.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : g.fbt._("Views", null, {
						hk: "ixhZU"
					}))), n.a.createElement("div", {
						className: js.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(d.a)(js.a.downButton, {
							[js.a.activeVote]: this.isVoteActive(Ts.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": g.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, n.a.createElement(Es.b, {
						className: js.a.voteIcon
					})), n.a.createElement("p", {
						className: js.a.votesCounter
					}, Object(_s.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Ts.a.notVoted), void this.setState({
							...this.state,
							displayedVoteState: Ts.a.notVoted
						});
						this.props.vote(t.post.id, e), this.setState({
							...this.state,
							displayedVoteState: e
						}), e === Ts.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Ps = Object(o.b)(Ms, (e, t) => ({
					vote: (t, s) => e(Object(Os.a)(t, s))
				}))(Is),
				As = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				Ls = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Ns = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Ds = s.n(Ns),
				Vs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Bs = s.n(Vs),
				Fs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				Hs = s.n(Fs);
			const {
				fbt: Us
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Ks;
			! function(e) {
				e.EndScreen = "END_SCREEN", e.Panel = "PANEL"
			}(Ks || (Ks = {}));
			const Ws = (e, {
					currentStreamId: t
				}) => t ? Object(We.l)(e, t) : void 0,
				qs = Object(i.c)({
					currentStream: Ws,
					inStreamingUiRefreshViewer: Fe.f,
					inViewerFeedTheMeter: (e, t) => Object(Fe.g)(e, t, Ws),
					isApiError: (e, {
						currentStreamId: t
					}) => Object(Ke.c)(e, t),
					isBatchApiError: Ke.e,
					isBatchPending: Ke.f,
					isCommentsLocked: (e, {
						currentStreamId: t
					}) => !!t && Object(We.g)(e, t),
					isConfigError: Ke.g,
					isIntroInProgress: qe.b,
					isMenuOpened: e => e.tooltipId === As.d || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId || e.tooltipId === Ls.j,
					lastBatchApiRequestTs: Ke.i,
					recommendedViewerSubredditOptions: Ke.j,
					isModWithPostPermissions: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(bt.e)(e, {
							subredditId: Object(gt.F)(e, s)
						})
					},
					isUserSubscriber: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(gt.gb)(e, {
							identifier: {
								name: s,
								type: mt.a.SUBREDDIT
							}
						}, !0)
					},
					videoShareModalOpen: (e, {
						currentStreamId: t
					}) => !!t && Object(ue.a)(e) === Object(lt.a)(t),
					subredditByName: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return s ? Object(gt.A)(e, {
							subredditName: s
						}) : null
					}
				});
			class Gs extends a.Component {
				constructor(e) {
					super(e), this.onSubscribeToSubreddit = () => {
						this.props.sendEvent(Object(De.k)(this.props.currentStream)), this.props.onSubscribeSubreddit()
					}, this.onProfileSubscriptionChange = e => {
						e && this.props.sendEvent(Object(De.c)(this.props.currentStream))
					}, this.onCrosspost = e => {
						this.props.currentStreamId && window.open(`${ht.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
					}, this.onShareLink = e => {
						e.source && (this.source = e.source), this.props.onToggleVideoShareModal(), this.props.onShareLink(e)
					}, this.onCloseShareModal = e => {
						e && (this.props.onCopyLink({
							referralId: this.referralId,
							source: this.source
						}), this.props.copyLink(e)), this.props.onToggleVideoShareModal()
					}, this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), R.o)
					}, this.onMouseLeave = () => {
						window.clearTimeout(this.hoverTimeout), this.setState({
							isHovered: !1,
							settingChange: void 0
						})
					}, this.onMouseDown = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: ct.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: ct.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ct.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === ct.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ct.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === ct.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.onMouseHoverScrubber = e => {
						const {
							target: t,
							currentTarget: s
						} = e;
						if (!(t instanceof Element && s instanceof Element)) return;
						const a = this.isHoveringVolumeControl(t, s);
						a !== this.state.isHoveringVolumeControl && this.setState({
							isHoveringVolumeControl: a
						})
					}, this.onMouseLeaveScrubber = () => {
						this.setState({
							isHoveringVolumeControl: !1
						})
					}, this.handleClickLiveBroadcastStatus = () => {
						this.props.onVideoPositionUpdate(this.props.videoTotalTime)
					}, this.isVisible = () => this.state.isHovered || this.props.isVisible || this.props.isMenuOpened, this.onToggleLock = () => {
						this.props.isCommentsLocked ? this.props.onUnlockComments() : this.props.onLockComments()
					}, this.onCopyLink = () => {
						const {
							copyLink: e,
							currentStream: t,
							onShareLink: s
						} = this.props;
						if (!t) return;
						const a = Object(Ne.a)(t.post.id),
							n = tt()(),
							o = {
								[Ae.q]: n,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(y.a)(a, o)), s({
							referralId: n
						})
					}, this.referralId = tt()(), this.source = Ks.Panel, this.state = {
						isHovered: !1,
						isHoveringVolumeControl: !1,
						settingChange: void 0
					}
				}
				componentDidMount() {
					this.props.getModeratedSubreddits()
				}
				componentWillUnmount() {
					window.clearTimeout(this.hoverTimeout)
				}
				render() {
					return this.props.inStreamingUiRefreshViewer ? this.renderUiRefresh() : this.renderUiLegacy()
				}
				renderUiLegacy() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						isLive: s,
						isUnavailable: a,
						onHide: o,
						onReport: r,
						onToggleMenu: i,
						onUpvote: c,
						onDownvote: l
					} = this.props, m = e && e.post.id;
					return n.a.createElement("div", {
						className: Object(d.a)(Bs.a.overlay, {
							[Bs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !t && n.a.createElement("div", {
						className: Bs.a.overlayTop
					}, this.renderRecommendedViewerSubreddit(), e && !a && n.a.createElement(n.a.Fragment, null, n.a.createElement(As.e, {
						onClick: this.props.onToggleVideoShareModal
					}), n.a.createElement(As.b, {
						onClick: i,
						onHideClick: o,
						onReportClick: r
					}))), e && !t && !a && !!m && n.a.createElement(qt, {
						className: Bs.a.awardOverlaySpectacle,
						commentsPageKey: Object(st.a)(m)
					}), e && !t && !a && n.a.createElement("div", {
						className: Bs.a.overlayTitle
					}, this.renderTitleContainer()), n.a.createElement("div", {
						className: Bs.a.overlayCenter
					}, this.getContent()), e && !t && !a && n.a.createElement("div", {
						className: Bs.a.overlayBottom
					}, n.a.createElement(Ps, {
						currentStreamId: e.post.id,
						isLive: s,
						onUpvote: c,
						onDownvote: l
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inViewerFeedTheMeter: t,
						isIntroInProgress: s,
						isCommentsLocked: a,
						isLive: o,
						isModWithPostPermissions: r,
						isUnavailable: i,
						onHide: c,
						onReport: l,
						onSelectSubreddit: m,
						onToggleMenu: u,
						recommendedViewerSubredditOptions: p,
						related: h,
						subreddit: b,
						isUserSubscriber: g,
						onEndBroadcast: f,
						subredditByName: v
					} = this.props;
					if (s || !e || i) return null;
					const w = e && e.post.id,
						{
							authorInfo: S
						} = e.post;
					return n.a.createElement("div", {
						className: Object(d.a)(Hs.a.overlay, {
							[Hs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!w && n.a.createElement(qt, {
						className: Bs.a.awardOverlaySpectacle,
						commentsPageKey: Object(st.a)(w)
					}), t && n.a.createElement(cs, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), n.a.createElement("div", {
						className: Hs.a.overlayTop
					}, n.a.createElement("div", {
						className: Hs.a.overlayTopLeft
					}, n.a.createElement("div", {
						className: Hs.a.meta
					}, n.a.createElement(Ls.c, null, o ? n.a.createElement(Ls.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : n.a.createElement(Ls.p, null)), n.a.createElement(Ls.n, {
						text: e.post.title
					}), n.a.createElement("div", {
						className: Hs.a.subredditInfo
					}, n.a.createElement(Ls.l, {
						onSelect: m,
						related: h,
						subreddit: b,
						subreddits: p
					}), n.a.createElement(Ls.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: g
					})), n.a.createElement(Ls.r, {
						broadcast: e,
						live: o
					}))), n.a.createElement("div", {
						className: Hs.a.overlayTopRight
					}, Object(Ls.s)(S) ? n.a.createElement(Ls.m, {
						profile: S,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, n.a.createElement(Ls.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: a,
						hasModeratorPermissions: r,
						onEndBroadcastClick: f,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: v
					}), n.a.createElement(Ls.k, {
						onClickShare: this.props.onShare,
						onClickCrosspost: () => {
							this.onCrosspost({
								source: Ks.Panel
							})
						},
						onClickVideoShare: () => {
							this.onShareLink({
								source: Ks.Panel
							})
						}
					}), n.a.createElement("div", {
						className: Object(d.a)({
							[Hs.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, n.a.createElement(Ls.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), n.a.createElement("div", {
						className: Hs.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && n.a.createElement(lt.b, {
						className: Bs.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(y.a)(Object(Ne.a)(w), {
							[Ae.q]: this.referralId,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
				renderScrubber() {
					const {
						inStreamingUiRefreshViewer: e,
						isLive: t,
						isMuted: s,
						isPaused: a,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: r,
						setVolume: i,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Hs.a.controls : "", p = e || this.isVisible();
					return n.a.createElement("div", {
						className: u
					}, n.a.createElement(Ss, {
						isLive: t,
						isMuted: s,
						isPaused: a,
						isVisible: p,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: r,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: i,
						hideLiveLabel: e,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m,
						volumeRef: e => this.volumeControl = e
					}))
				}
				renderPrompt() {
					const {
						currentStream: e,
						currentStreamId: t,
						handleGiveAward: s,
						isApiError: a,
						isBatchApiError: o,
						isBatchPending: r,
						isConfigError: i,
						isIntroInProgress: d,
						isLoading: c,
						isMuted: l,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: h,
						showErrorPrompt: b,
						showStreamEndedPrompt: g,
						toggleMute: f
					} = this.props;
					if (b || d && i || t && a || !t && o) return n.a.createElement(Ls.d, null);
					if (d) return n.a.createElement("div", {
						className: Bs.a.intro
					}, n.a.createElement(As.c, {
						isMuted: l,
						onToggle: f
					}));
					if (m || !t && !o && !r && p) return null;
					if (c) return n.a.createElement(Ls.o, null);
					if (e && e.stream.state === pt.a.DISCONNECTED) return n.a.createElement(Ls.b, null);
					if (g) return n.a.createElement(Ls.a, {
						onClickReplay: h,
						onClickShare: () => {
							this.onShareLink({
								source: Ks.EndScreen
							}), this.source = Ks.EndScreen, this.props.onToggleVideoShareModal()
						},
						onClickCrosspost: () => {
							this.onCrosspost({
								source: Ks.EndScreen
							})
						}
					});
					const v = e && e.meter && e.estimated_remaining_time < ze;
					return u && v ? n.a.createElement(Ls.e, {
						onClickAward: s
					}) : null
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: a
					} = this.props;
					let o = "",
						r = "";
					"home" === s ? (o = "All", r = "All") : "r/popular" === s ? (o = "Popular", r = "r/popular") : a ? (o = a.replace(/^r\//, ""), r = a) : (o = "All", r = "All");
					const i = t.filter(e => e.prefixedName !== r);
					return n.a.createElement("div", {
						className: Bs.a.menuContainer
					}, n.a.createElement(gs, {
						label: o,
						onSelect: e,
						subreddits: i
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return n.a.createElement("div", {
						className: Bs.a.titleContainer
					}, n.a.createElement("h1", {
						className: Bs.a.videoTitle
					}, e.post.title), !t && n.a.createElement("div", {
						className: Bs.a.RecordedLabel
					}, Us._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Ds.a.ControlVolume)) return !0;
						e = e.parentElement
					}
					return !1
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: a,
						isBatchPending: o,
						isConfigError: r,
						isIntroInProgress: i,
						isLoading: d,
						isMuted: c,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: h,
						toggleMute: b
					} = this.props;
					return p || i && r || t && s || !t && a ? n.a.createElement("div", {
						className: Bs.a.prompt
					}, Us._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? n.a.createElement("div", {
						className: Bs.a.intro
					}, n.a.createElement(As.c, {
						isMuted: c,
						onToggle: b
					})) : l || !t && !a && !o && m ? null : d ? n.a.createElement("div", {
						className: Bs.a.prompt
					}, Us._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === pt.a.DISCONNECTED ? n.a.createElement("div", {
						className: Bs.a.prompt
					}, Us._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? n.a.createElement("div", {
						className: Bs.a.prompt
					}, n.a.createElement("div", {
						className: Bs.a.promptButtonSet
					}, n.a.createElement(As.g, {
						onClick: u
					}), n.a.createElement(As.h, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var zs = Object(o.b)(qs, (e, t) => ({
					copyLink: t => e(Object(oe.x)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(E.i)(Object(lt.a)(t.currentStreamId)))
					},
					onHide: () => {
						t.currentStreamId && (e(Object(oe.R)(t.currentStreamId, !0, !0, !0)), e(P(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(rt(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(it(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(ut.d)(ut.a.GildingFlow, !0);
							e(Object(at.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(dt.d)([{
							name: s,
							type: mt.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(nt.b)())
				}))(Gs),
				Js = s("./src/lib/constants/index.ts"),
				Ys = s("./src/lib/makeDraftKey/index.ts"),
				Xs = s("./src/reddit/actions/pages/comments.ts"),
				Qs = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				Zs = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				$s = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ea = s("./src/reddit/icons/svgs/Send/index.tsx"),
				ta = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				sa = s.n(ta);
			const {
				fbt: aa
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var na = () => n.a.createElement("span", {
					className: sa.a.InputLine
				}, n.a.createElement("span", {
					className: sa.a.FormBackground
				}, n.a.createElement("span", {
					className: sa.a.FormLine
				}, n.a.createElement("div", {
					className: sa.a.Text
				}, aa._("Chat is disabled", null, {
					hk: "gQrh3"
				}))), n.a.createElement(ea.a, {
					className: sa.a.SendIcon
				}))),
				oa = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: ra
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ia = U.a.wrapped(K.f, "ModalFooter", Y.a), da = U.a.wrapped(K.h, "ModalHeader", Y.a);
			var ca = ({
				toggleModal: e,
				bodyText: t,
				title: s
			}) => n.a.createElement(K.d, null, n.a.createElement(da, null, n.a.createElement(z.a, null, n.a.createElement("div", null, n.a.createElement("div", {
				className: Y.a.Title
			}, s)), n.a.createElement(q.a, {
				onClick: e
			}, n.a.createElement(K.b, null)))), n.a.createElement("div", {
				className: Y.a.ModalText
			}, t), n.a.createElement(ia, {
				className: Y.a.ModalFooter
			}, n.a.createElement(W.i, {
				onClick: e,
				className: Y.a.Button,
				"data-redditstyle": !0
			}, ra._("I Understand", null, {
				hk: "1f4y1d"
			}))));
			const {
				fbt: la
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ma = () => la._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [la._param("=Content Policy,", n.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, la._("{=Content Policy},", [la._param("=Content Policy", n.a.createElement("span", {
				className: Y.a.Link
			}, la._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var ua = Object(H.a)(({
					toggleModal: e
				}) => n.a.createElement(ca, {
					bodyText: ma(),
					title: la._("Sit back and watch for a bit", null, {
						hk: "nd6D"
					}),
					toggleModal: e
				})),
				pa = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: ha
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ba = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ue.a)(e)
			});
			class ga extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: sa.a.InputLine
					}, n.a.createElement("span", {
						className: sa.a.FormBackground
					}, n.a.createElement("span", {
						className: sa.a.FormLine
					}, n.a.createElement(pa.a, {
						className: sa.a.InfoIcon,
						onClick: this.onClickInfo
					}), n.a.createElement("div", {
						className: sa.a.Text
					}, ha._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), n.a.createElement(ea.a, {
						className: sa.a.SendIcon
					}))), this.props.isMuteModalOpen && n.a.createElement(ua, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var fa = Object(o.b)(ba, e => ({
				onToggleMuteModal: () => e(Object(E.i)("rpan-mute-chat-modal-id"))
			}))(ga);
			const {
				fbt: va
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wa = () => va._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [va._param("=Content Policy.", n.a.createElement("a", {
				className: Y.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, va._("{=Content Policy}.", [va._param("=Content Policy", n.a.createElement("span", {
				className: Y.a.Link
			}, va._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var ya = Object(H.a)(({
					toggleModal: e
				}) => n.a.createElement(ca, {
					bodyText: wa(),
					title: va._("Be mindful of what you say", null, {
						hk: "3CDXHh"
					}),
					toggleModal: e
				})),
				Sa = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/posts.ts")),
				ka = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				Ca = s.n(ka);
			const _a = Object(o.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, {
						postId: t
					}) => Object(Sa.D)(e, {
						postId: t
					})
				})),
				Oa = ["Center", "Left", "Right"],
				Ea = ["Low", "Mid", "High"],
				xa = () => Math.floor(800 * Math.random()),
				Ta = e => e[Math.floor(Math.random() * e.length)],
				Ra = e => {
					const t = Ta(Oa),
						s = Ta(Ea),
						a = St(e);
					return Ca.a[`award_${a}Tier_${s}${t}`]
				};
			class ja extends a.Component {
				shouldComponentUpdate(e) {
					return !(!e.post || !e.post.awardCountsById) && (!(this.props.post && this.props.post.awardCountsById) || this.props.post.id !== e.post.id)
				}
				render() {
					const {
						allAwards: e,
						post: t
					} = this.props;
					if (!t || !t.awardCountsById) return null;
					const s = Object.entries(t.awardCountsById).map(([t, s]) => {
							const {
								icon: a,
								coinPrice: n
							} = e[t];
							return {
								coinPrice: n,
								count: s,
								iconUrl: a.url,
								id: t
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						a = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: o
						} = e;
						for (let r = 0; r < s; r++) {
							const s = `${xa()}ms`,
								i = Ra(t),
								c = n.a.createElement("img", {
									key: `${e.id}-${r}`,
									className: Object(d.a)(Ca.a.award, i),
									src: o,
									style: {
										animationDelay: s
									}
								});
							a.push(c)
						}
					}), n.a.createElement("div", {
						"aria-role": "presentation",
						className: Ca.a.awardBubbler
					}, a)
				}
			}
			var Ma = _a(ja),
				Ia = s("./src/reddit/contexts/Post/index.tsx"),
				Pa = s("./src/reddit/models/PostDraft/index.ts");
			const Aa = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var La = s("./src/reddit/selectors/user.ts"),
				Na = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Da = s.n(Na);
			const Va = Object(i.c)({
				isDisabled: (e, t) => Object(We.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: La.K,
				isPostDataLoaded: (e, {
					postId: t
				}) => !!Object(Sa.D)(e, {
					postId: t
				}),
				replyComment: (e, {
					postId: t
				}) => Object(ft.s)(e, {
					commentsPageKey: Object(st.a)(t)
				}),
				automuteViolationLevel: (e, {
					postId: t
				}) => Aa(e, t)
			});
			var Ba;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(Ba || (Ba = {}));
			class Fa extends a.Component {
				constructor(e) {
					super(e), this.onDismissModal = () => {
						this.setState({
							automuteModal: null
						})
					}, this.state = {
						automuteModal: null
					}, this.props.postId && this.props.isLoggedIn && this.props.fetchAutomuteStatus()
				}
				componentDidMount() {
					this.props.postId && this.props.loadComments()
				}
				componentDidUpdate(e) {
					this.props.postId !== e.postId && (this.props.loadComments(), this.props.isLoggedIn && this.props.fetchAutomuteStatus()), this.props.automuteViolationLevel > e.automuteViolationLevel && (1 === this.props.automuteViolationLevel ? this.setState({
						automuteModal: Ba.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: Ba.Mute
					}))
				}
				get shouldMuteChat() {
					return this.props.automuteViolationLevel > 1
				}
				render() {
					const {
						postId: e,
						isDisabled: t,
						isLoggedIn: s,
						isPostDataLoaded: a,
						location: o,
						openLoginModal: r,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(st.a)(e), h = m ? Object(Ys.a)(Pa.c.replyToComment, m.id) : Object(Ys.a)(Pa.c.replyToPost, e);
					return a ? n.a.createElement("div", {
						"aria-label": g.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Da.a.streamingChat,
						onClick: this.props.onChatClick
					}, n.a.createElement(Ia.a, {
						postId: e
					}, n.a.createElement($s.a, {
						className: Da.a.chatScroller,
						emptyStateClassName: Da.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? n.a.createElement(fa, null) : t ? n.a.createElement(na, null) : n.a.createElement(oa.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), n.a.createElement(Ma, {
						postId: e
					}), !s && n.a.createElement(Zs.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: o,
						openLoginModal: r,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Ba.Warning && n.a.createElement(ya, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Ba.Mute && n.a.createElement(ua, {
						toggleModal: this.onDismissModal
					}))) : n.a.createElement("div", {
						className: Object(d.a)(Da.a.streamingChat, Da.a.prompt)
					}, g.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Ha = Object(o.b)(Va, (e, {
					postId: t
				}) => ({
					loadComments: () => e(Object(Xs.commentsPageDataRequested)(t, void 0, {
						sort: Js.r.CHAT
					}, Js.r.CHAT)),
					openLoginModal: () => e(Object(u.h)()),
					openRegisterModal: () => e(Object(u.j)()),
					fetchAutomuteStatus: () => e(Object(Qs.b)(t))
				}))(Fa),
				Ua = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Ka = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Wa = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				qa = s.n(Wa);
			const Ga = ({
				isNext: e,
				onClick: t,
				stream: s
			}) => n.a.createElement("div", {
				className: Object(d.a)(qa.a.switchContainer, e ? qa.a.switchContainerNext : qa.a.switchContainerPrevious)
			}, n.a.createElement("button", {
				className: qa.a.switchButton,
				disabled: !s,
				onClick: t,
				"aria-label": e ? g.fbt._("Forward arrow", null, {
					hk: "3b7sZa"
				}) : g.fbt._("Back arrow", null, {
					hk: "1upGBK"
				}),
				value: e ? "forward" : "back"
			}, n.a.createElement("div", {
				className: qa.a.streamThumbnail,
				style: s ? {
					backgroundImage: `url(${s.stream.thumbnail})`
				} : {}
			}), e ? n.a.createElement(Ka, {
				className: qa.a.arrowIcon
			}) : n.a.createElement(Ua.a, {
				className: qa.a.arrowIcon
			})));
			var za = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(Ga, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), n.a.createElement(Ga, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(j.a)(R.s);
			const Ja = Object(j.a)(R.A),
				Ya = (e, t) => async (s, a) => {
					const n = a(),
						o = Date.now(),
						r = e.map(e => Object(We.l)(n, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${o}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await Xa(r, t)
				}, Xa = (e, t) => Promise.all(e.map(e => Qa(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), Qa = e => new Promise((t, s) => {
					const a = new Image;
					a.onload = () => t(), a.onerror = () => s(), a.src = e
				}).then(() => !0, () => !1);
			var Za, $a = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				en = s.n($a);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(Za || (Za = {}));
			class tn extends a.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: a
					} = this.props, n = [];
					e && n.push(e.post.id), s && n.push(s.post.id), a && n.push(a.post.id), n.length > 0 && t(n)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: a,
						previousStream: n
					} = this.props, o = [];
					t && this.isStreamChanged(t, e.currentStream) && o.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && o.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && o.push(s.post.id), o.length > 0 && a(o)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let a, o;
					if (t === Za.Loading) a = en.a.loading;
					else if (t === Za.Preview) a = en.a.preview, o = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== Za.Static) return null;
						a = en.a.static
					}
					return n.a.createElement("div", {
						className: en.a.container
					}, n.a.createElement("div", {
						className: a,
						"aria-label": s,
						style: o
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var sn = Object(o.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, a) => {
						const n = await s(Ya(e, t));
						s(Ja(n))
					})(t))
				}))(tn),
				an = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				nn = s.n(an);
			const on = Object(w.a)(F.a, {
					playerName: "RPAN Video Player"
				}),
				rn = Object(i.c)({
					currentStream: We.d,
					currentStreamStartTime: We.e,
					currentHlsUrl: We.b,
					inViewerFeedTheMeter: (e, t) => Object(Fe.g)(e, t, We.d),
					isIntroInProgress: qe.b,
					isOverlayOpen: Ue.h,
					isReportFlowOpen: (e, {
						streamIdFromPath: t
					}) => {
						var s, a;
						return (null === (a = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === a ? void 0 : a.postOrCommentId) === Object(Ne.g)(t || "")
					},
					lastChatActivityUtcTs: qe.c,
					nextStream: We.h,
					nextTopStream: We.i,
					playbackState: We.j,
					previousStream: We.k,
					streamById: e => t => Object(We.l)(e, t),
					unavailableVideoUrl: Ke.o,
					volume: He.d,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ue.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ue.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(ue.a)(e),
					isDownloadOBSModalOpen: e => Object(ue.a)(e) === ne.a,
					previewUrl: We.c
				}),
				dn = Object(o.b)(rn, (e, t) => ({
					closeLocation: () => e(Object(r.b)(t.location.state[Ie.a.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(x.d)(t, !0)),
					fetchPostForStream: t => e(Object(T.a)(t)),
					subscribeConfig: () => e(N.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(N.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(N.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(V.c)(t, s)),
					onStatsSubscribe: t => e(N.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(N.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(p.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(p.b)(t)),
					removeStreamFromHistory: t => e(P(t)),
					setNewCorrelationId: () => e(Object(D.b)()),
					setIntroFinishedStatus: t => e(Object(D.c)({
						isIntroFinished: t
					})),
					setMutedInFeed: t => e(B.G(t)),
					setVideoVolume: t => e(O.h(t)),
					updateVideoTimestamp: (t, s) => e(L({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(I(e))
					})(t)),
					resetHistory: () => e(A()),
					toggleIntroChatModal: () => e(Object(E.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(E.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(E.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(E.i)(ne.a))
				}));
			class cn extends a.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.onHlsRefChange = e => {
						var t;
						this.hlsVideoApi = e, null === (t = this.hlsVideoApi) || void 0 === t || t.setVolume(this.props.volume)
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = v()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: a
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && a(t.post.id, e)
					}, R.p), this.onVideoPlayerPositionUpdate = e => {
						if (e === this.state.videoCurrentTime) return;
						let t = !1;
						if (this.props.playbackState === We.a.LIVE && e > this.state.videoCurrentTime) {
							const s = .95;
							t = e / this.state.videoTotalTime >= s
						}
						const s = t ? this.state.videoTotalTime : e;
						this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(s), this.setState({
							hasLiveIntent: t,
							videoCurrentTime: s
						}), this.props.sendEvent(Object(De.x)(this.props.currentStream, {
							...this.playbackStats,
							scrubbingStartMs: Object(C.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(C.a)(s)
						}))
					}, this.onNextStream = v()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(De.l)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = v()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(De.m)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Le.g)(e.target) ? e.stopPropagation() : e.keyCode === Pe.a.ArrowRight ? this.onNextStream() : e.keyCode === Pe.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						const e = !this.state.isMuted;
						this.setVideoMute(e), this.props.setMutedInFeed(e)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? (this.props.setVideoVolume(e), this.props.setMutedInFeed(!1)) : (this.setState({
							isMuted: !0
						}), this.props.setMutedInFeed(!0)) : (s.setVolume(e), e || this.state.isMuted ? e && this.state.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.showStreamEndedPrompt && this.playVideo()
					}, this.onEndBroadcast = () => {
						this.props.toggleRemovalReasonModal()
					}, this.onCopyLink = e => {
						if (this.props.currentStream) {
							const t = e.source === Ks.EndScreen ? "copy_link_video" : "copy_link";
							this.props.sendEvent(Object(De.t)(t, this.props.currentStream, this.playbackStats, null == e ? void 0 : e.referralId))
						}
						this.cancelSwitchingOnStreamEnded()
					}, this.onShare = () => {
						this.props.currentStream && this.props.sendEvent(Object(De.A)("share", this.props.currentStream, this.playbackStats))
					}, this.onShareLink = e => {
						if (this.props.currentStream) {
							const t = e.source === Ks.EndScreen ? "share_video" : "share_copy";
							this.props.sendEvent(Object(De.A)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onCrosspost = e => {
						if (this.props.currentStream) {
							const t = e.source === Ks.EndScreen ? "crosspost_video" : "share_crosspost";
							this.props.sendEvent(Object(De.u)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.setState(() => ({
							isMuted: e
						}));
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? De.v : De.E;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.playbackStats))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(De.r)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === We.a.LIVE || this.props.playbackState === We.a.VOD, this.handleHeartbeat = ({
						meta: e,
						stats: t
					}) => {
						const {
							currentStream: s,
							streamById: a
						} = this.props, n = s && s.post.id === e.id ? s : a(e.id);
						if (!n) return;
						const o = !t.sessionDurationMs ? De.D : De.z,
							r = {
								...t,
								playerType: De.a.Theater
							};
						this.props.sendEvent(o(n, r))
					}, this.state = {
						hasLiveIntent: e.playbackState === We.a.LIVE,
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isReady: !1,
						isMuted: !1,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0,
						wasVideoPausedWhenOverlayOpened: !1,
						shouldShowOBSBanner: !1
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.handleFocusMessageInput = this.handleFocusMessageInput.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onOBSModalDownloadClick = this.onOBSModalDownloadClick.bind(this), this.onOBSModalGuidebookClick = this.onOBSModalGuidebookClick.bind(this), this.onOBSBannerDismissClick = this.onOBSBannerDismissClick.bind(this), this.onOBSBannerLearnMoreClick = this.onOBSBannerLearnMoreClick.bind(this), this.onOBSModalDismissClick = this.onOBSModalDismissClick.bind(this), this.onRpanStudioClick = this.onRpanStudioClick.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				get playbackStats() {
					var e;
					return {
						...null === (e = this.videoSessionManager) || void 0 === e ? void 0 : e.stats,
						playerType: De.a.Theater
					}
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(nn.a.focusVisible), Object(k.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, S(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(Ve.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !G.j()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: a,
						isOverlay: n,
						isOverlayOpen: o,
						isReportFlowOpen: r,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: d,
						onStatsSubscribe: c,
						playbackState: l,
						related: m,
						subreddit: u,
						subscribeConfig: p,
						subscribeStreams: h
					} = this.props;
					if (n || o === e.isOverlayOpen || (o ? (this.setState(({
							isVideoPaused: e
						}) => ({
							wasVideoPausedWhenOverlayOpened: e,
							isVideoPaused: !0
						})), this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits()) : (this.setState(({
							wasVideoPausedWhenOverlayOpened: e
						}) => ({
							isVideoPaused: e
						})), p().then(e => this.unsubscribeConfig = e), h().then(e => this.unsubscribeStreams = e), s && this.isCurrentStreamWatchable() && (i(s.post.id).then(e => this.unsubscribeHeartbeat = e), c(s.post.id).then(e => this.unsubscribeStats = e)), d().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (m || u) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(s || this.setState({
						isLoading: !0
					}));
					!a && e.isIntroInProgress && this.handleNewStream(), a || e.isIntroInProgress || !mn(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || a || !(!s && !this.state.isLoading || l === We.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), a || s || this.state.isLoading || this.state.isError || this.setState({
						...this.state,
						isError: !0
					}), r && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					}), this.context.setIsLive(l === We.a.LIVE), this.context.setCurrentTime(this.state.videoCurrentTime), this.context.setTotalTime(this.state.videoTotalTime)
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => S(this.previouslyActiveElement)), this.destroyVideoSessionManager()
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						inViewerFeedTheMeter: a,
						isIntroInProgress: o,
						isOverlay: r,
						isReportFlowOpen: i,
						location: c,
						nextStream: l,
						playbackState: m,
						previewUrl: u,
						previousStream: p,
						related: h,
						sendEvent: b,
						subreddit: f,
						timestamp: v,
						unavailableVideoUrl: w,
						volume: y,
						isRemovalReasonModalOpen: S,
						isEndBroadcastModalOpen: k,
						isIntroChatModalOpen: C,
						isDownloadOBSModalOpen: _
					} = this.props, {
						hasLiveIntent: O,
						isError: E,
						isLoading: x,
						isMuted: T,
						isOverlayVisible: R,
						isVideoPaused: j,
						showStreamEndedPrompt: M,
						videoCurrentTime: I,
						videoTotalTime: P,
						shouldShowOBSBanner: A
					} = this.state, L = e && e.post.id, N = s !== w, D = e && !e.post.subreddit, V = m === We.a.LIVE, B = e && 1e3 * e.broadcast_time;
					let F, H, U, K, W = "number" == typeof v ? v : t;
					B && W >= B && (W = 0), e && N ? (F = 1e3 * e.broadcast_time, H = L, U = V, K = e.post.title) : (F = void 0, H = void 0, U = !1, K = "RPAN Unavailable Video");
					const q = e && e.meter && 10 * Math.round(e.estimated_remaining_time / 10),
						G = a && e && e.estimated_remaining_time < Je && !o,
						z = void 0 !== q && q >= 0 && G ? nn.a[`meterCritical${q}`] : void 0;
					let J, Y;
					return x || E ? J = u ? Za.Preview : Za.Loading : G && (J = Za.Static), x ? Y = g.fbt._("video is loading", null, {
						hk: "jUJdy"
					}) : E ? Y = g.fbt._("unable to load video", null, {
						hk: "1Eh3Rt"
					}) : G && (Y = g.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
						hk: "3dUpDV"
					})), n.a.createElement("div", {
						className: Object(d.a)(nn.a.theaterContainer, {
							[nn.a.overlay]: r
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, A && n.a.createElement(ae, {
						onClickLearnMore: this.onOBSBannerLearnMoreClick,
						onClickDismiss: this.onOBSBannerDismissClick
					}), n.a.createElement("div", {
						className: nn.a.wrap
					}, n.a.createElement("div", {
						className: Object(d.a)(nn.a.panesWrapper, {
							[nn.a.initialized]: !o
						})
					}, n.a.createElement("div", {
						className: Object(d.a)(nn.a.pane, nn.a.leftPane)
					}, n.a.createElement("div", {
						className: nn.a.videoContainer
					}, J && Y && n.a.createElement(sn, {
						previousStream: p,
						currentStream: e,
						nextStream: l,
						previewUrl: u,
						visualEffect: J,
						visualEffectLabel: Y
					}), s && n.a.createElement("div", {
						className: z
					}, n.a.createElement(on, {
						autoplay: !0,
						controls: !1,
						startTime: W,
						isPaused: j,
						muted: T,
						muxVideoDuration: F,
						muxVideoId: H,
						muxVideoIsLive: U,
						muxVideoTitle: K,
						onAutoPlayPrevented: this.onAutoPlayPrevented,
						onEnded: this.onEnded,
						onError: this.onPlayerError,
						onLevelLoaded: this.onVideoPlayerLevelLoaded,
						onLoadedData: this.onVideoPlayerLoadedData,
						onLoadingData: this.onVideoPlayerLoadingData,
						onResourceRemoved: this.onVideoPlayerResourceRemoved,
						onTimeUpdate: this.onCurrentTimeChanged,
						playMutedOnPrevented: !0,
						ref: this.onHlsRefChange,
						url: s,
						videoRef: this.videoRef
					})), n.a.createElement(zs, {
						currentStreamId: L,
						isLoading: x,
						isLive: V,
						isMuted: T,
						isPaused: j,
						isUnavailable: m === We.a.UNAVAILABLE,
						isVisible: R,
						onCopyLink: this.onCopyLink,
						onCrosspost: this.onCrosspost,
						onReplayVideo: this.onReplayVideo,
						onShareLink: this.onShareLink,
						onShare: this.onShare,
						onPlayPauseToggle: this.onPlayPauseToggle,
						onReport: this.onReport,
						onScrubbing: this.onScrubbing,
						onEndBroadcast: this.onEndBroadcast,
						onSelectSubreddit: this.goToSubreddit,
						onToggleMenu: this.onToggleMenu,
						onUpvote: this.onUpvote,
						onDownvote: this.onDownvote,
						onRpanStudioClick: this.onRpanStudioClick,
						onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
						related: h,
						sendEvent: b,
						setVolume: this.onSetVolume,
						showErrorPrompt: E,
						showStreamEndedPrompt: M,
						subreddit: f,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: V && O ? P : I,
						videoTotalTime: P,
						volume: y
					}), (S || k) && e && n.a.createElement(je, {
						subredditId: e.post.subreddit.id,
						subredditName: e.post.subreddit.name,
						postId: e.post.id,
						toggleModal: this.onEndBroadcast
					}), C && n.a.createElement(ee, {
						toggleModal: this.props.toggleIntroChatModal
					}), _ && n.a.createElement(ne.b, {
						onClickDownload: this.onOBSModalDownloadClick,
						onClickDismiss: this.onOBSModalDismissClick,
						onClickGuidebook: this.onOBSModalGuidebookClick,
						className: nn.a.downloadOBSModal
					}))), !o && n.a.createElement("div", {
						className: Object(d.a)(nn.a.pane, nn.a.rightPane)
					}, e && !D && n.a.createElement(Ha, {
						location: c,
						onChatClick: this.onChatClick,
						onFocusMessageInput: this.handleFocusMessageInput,
						postId: e.post.id,
						sendEvent: b,
						subredditId: e.post.subreddit.id
					}))), e && !o && n.a.createElement(za, {
						nextStream: l,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: p
					}), e && !o && n.a.createElement(ln, {
						onClick: this.onClose
					}), e && !o && i && n.a.createElement(Me.a, {
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(I),
						withOverlay: !0
					})))
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: a
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === We.a.LIVE && a(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState({
						isLoading: !0,
						isError: !1
					})
				}
				onVideoPlayerLoadedData() {
					this.setState({
						isError: !1,
						isLoading: !1,
						isReady: !0
					})
				}
				onVideoPlayerResourceRemoved() {
					const {
						currentStream: e,
						receiveHlsStreamRemoved: t
					} = this.props;
					e && this.isCurrentStreamWatchable() && t(e.post.id)
				}
				onRpanStudioClick() {
					this.props.sendEvent(Object(De.w)(this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDismissClick() {
					this.props.sendEvent(Object(De.h)("dismiss", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDownloadClick() {
					this.props.sendEvent(Object(De.h)("download", this.props.currentStream))
				}
				onOBSModalGuidebookClick() {
					this.props.sendEvent(Object(De.h)("guidebook", this.props.currentStream))
				}
				onOBSBannerDismissClick() {
					G.bb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(De.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					G.bb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(De.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(De.n)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					G.L() || this.props.toggleIntroChatModal()
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(De.q)(this.props.currentStream, this.playbackStats))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(De.o)(this.props.currentStream, this.playbackStats))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: a,
						setIntroFinishedStatus: n
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return n(!0), void this.setState({
						...this.state,
						isLoading: !!e
					});
					e && a(Object(De.B)(e, this.playbackStats)), s !== We.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(De.C)(this.props.currentStream, this.playbackStats)), this.setState({
						...this.state,
						isError: !0
					})
				}
				onAutoPlayPrevented() {
					this.setState({
						isMuted: !0
					})
				}
				onClose() {
					this.props.sendEvent(Object(De.b)(this.props.currentStream, this.playbackStats)), this.props.isOverlay ? this.props.closeLocation() : window.location.replace(window.location.origin)
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id, this.props.isOverlay), this.props.sendEvent(Object(De.p)(this.props.currentStream)))
				}
				hideStreamEndedPrompt() {
					this.state.showStreamEndedPrompt && this.setState({
						isOverlayVisible: !1,
						showStreamEndedPrompt: !1
					})
				}
				showStreamEndedPrompt() {
					this.state.showStreamEndedPrompt || this.setState({
						isOverlayVisible: !0,
						showStreamEndedPrompt: !0
					})
				}
				pauseVideo() {
					this.state.isVideoPaused || (this.props.sendEvent(Object(De.d)(this.props.currentStream, this.playbackStats)), this.setState({
						isVideoPaused: !0
					}))
				}
				playVideo(e = {
					sendEvent: !0
				}) {
					this.state.isVideoPaused && (e.sendEvent && this.props.sendEvent(Object(De.e)(this.props.currentStream, this.playbackStats)), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(De.f)(this.props.currentStream, this.playbackStats)), this.onVideoPlayerPositionUpdate(0), this.playVideo({
						sendEvent: !1
					})
				}
				scheduleSwitchingOnStreamEnded() {
					this.cancelSwitchingOnStreamEnded(), this.switchingOnStreamEndedTimeout = window.setTimeout(() => {
						const {
							isReportFlowOpen: e,
							lastChatActivityUtcTs: t,
							nextTopStream: s
						} = this.props;
						s && !e && !Object(qe.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, R.k), this.setState({
						...this.state,
						isSwitchingOnStreamEndedScheduled: !0
					})
				}
				cancelSwitchingOnStreamEnded() {
					window.clearTimeout(this.switchingOnStreamEndedTimeout), this.state.isSwitchingOnStreamEndedScheduled && this.setState({
						isSwitchingOnStreamEndedScheduled: !1
					})
				}
				getStreamLocation(e) {
					const t = Object(Ne.d)(e);
					return Object(y.a)(t, {
						[Ae.r]: this.props.related,
						[Ae.w]: this.props.timestamp
					})
				}
				goToStream(e) {
					const {
						onNavigation: t,
						visitStream: s
					} = this.props, a = e.post.id;
					this.cancelSwitchingOnStreamEnded(), this.hideStreamEndedPrompt(), s(a), this.setState({
						isLoading: !0,
						isVideoPaused: !1
					}), t(this.getStreamLocation(e))
				}
				async handleNewStream() {
					const {
						currentStream: e,
						fetchBroadcasterProfileInfo: t,
						fetchPostForStream: s,
						playbackState: a,
						visitStream: n
					} = this.props;
					e && (this.setState({
						hasLiveIntent: a === We.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), n(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(De.F)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(De.s)(this.props.currentStream)), b.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), R.n), this.setState({
						isOverlayVisible: !0
					})
				}
				syncLocationWithCurrentStreamId() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						onNavigation: s,
						streamIdFromPath: a
					} = this.props;
					if (!e || t) return;
					const n = !a || Object(Ne.b)(e.post.id) === a;
					s(this.getStreamLocation(e), n)
				}
				startJobIfLiveOrPaused() {
					const {
						currentStream: e,
						onStatsSubscribe: t,
						onHeartbeatSubscribe: s
					} = this.props;
					e && this.isCurrentStreamWatchable() && (t(e.post.id).then(e => this.unsubscribeStats = e), s(e.post.id).then(e => this.unsubscribeHeartbeat = e))
				}
				updateVideoSession(e, t) {
					var s;
					const {
						video: a
					} = this;
					if (!a) return;
					const n = this.getOrCreateVideoSessionManager(a),
						{
							currentStream: o
						} = this.props,
						r = null == o ? void 0 : o.post.id,
						i = r !== (null === (s = e.currentStream) || void 0 === s ? void 0 : s.post.id);
					i && this.setState({
						isReady: !1
					}), i && n.endSession();
					const {
						isReady: d
					} = this.state, {
						isReady: c
					} = t;
					!!r && (!c && d) && n.startSession({
						id: r
					})
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new _.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const ln = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: nn.a.closeButton,
					onClick: e,
					"aria-label": g.fbt._("close button", null, {
						hk: "2l5YIS"
					})
				}, n.a.createElement(Be.a, {
					className: nn.a.closeIcon
				})),
				mn = (e, t) => (e && e.post.id) !== (t && t.post.id);
			cn.contextType = h.a;
			var un = dn(Object(ce.c)(cn)),
				pn = s("./src/reddit/components/TitleTagManager/index.tsx"),
				hn = s("./src/reddit/contexts/InsideOverlay.tsx"),
				bn = s("./src/reddit/helpers/overlay/index.ts"),
				gn = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				fn = s.n(gn);
			const {
				fbt: vn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wn = Object(l.a)((e, {
				match: {
					params: t
				}
			}) => t), yn = Object(l.a)((e, {
				location: {
					search: t
				}
			}) => Object(c.a)(t)), Sn = Object(i.a)(wn, yn, (e, t) => {
				const s = t.get(Ae.r),
					{
						subredditName: a
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === a ? "r/popular" : a ? void 0 : "home"
			}), kn = Object(i.a)(yn, e => {
				const t = e.get(Ae.w);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), Cn = Object(i.c)({
				isEnabled: Fe.a,
				isIntroInProgress: qe.b,
				related: Sn,
				timestamp: kn
			}), _n = Object(o.b)(Cn, (e, t) => ({
				onOpenLoginModal: () => e(Object(u.h)()),
				onStreamByIdRequested: t => e(Object(p.d)(t)),
				updateLocation: (t, {
					isOverlay: s,
					useReplace: a
				}) => {
					const n = a ? r.c : r.b,
						o = s ? Object(bn.b)(t) : t;
					e(n(o))
				}
			}));
			class On extends n.a.Component {
				constructor(e) {
					super(e), this.onNavigation = this.onNavigation.bind(this)
				}
				componentDidMount() {
					const {
						match: e,
						onStreamByIdRequested: t,
						isEnabled: s
					} = this.props;
					s && e.params.partialPostId && t(e.params.partialPostId)
				}
				shouldUpdateLocation(e) {
					return e.replace(/[?].*/, "") !== this.props.match.url
				}
				onNavigation(e, t = !1) {
					if (!this.shouldUpdateLocation(e)) return;
					const {
						isOverlay: s,
						updateLocation: a
					} = this.props;
					a(e, {
						isOverlay: s,
						useReplace: t
					})
				}
				render() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(pn.a, {
						title: Object(m.g)()
					}), this.renderContent())
				}
				renderContent() {
					const {
						isEnabled: e,
						isOverlay: t,
						location: s,
						match: a,
						related: o,
						timestamp: r
					} = this.props, {
						subredditName: i,
						partialPostId: c
					} = a.params;
					return e ? n.a.createElement("div", {
						className: Object(d.a)(fn.a.rpanContainer, {
							[fn.a.overlay]: t
						})
					}, n.a.createElement(h.b, null, n.a.createElement(un, {
						isOverlay: !!t,
						location: s,
						onNavigation: this.onNavigation,
						related: o,
						streamIdFromPath: c,
						subreddit: i && `r/${i}`,
						timestamp: c ? r : void 0
					}))) : n.a.createElement(En, null)
				}
			}
			const En = () => n.a.createElement("div", {
				className: Object(d.a)(fn.a.rpanContainer, fn.a.forbiddenScreen)
			}, n.a.createElement("h2", null, vn._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = _n(Object(ce.c)(Object(hn.b)(On)))
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				o = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const r = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = e => (e => {
				return Object(i.c)(e, {
					experimentEligibilitySelector: () => Object(d.J)(e),
					experimentName: a.Ic
				}) === a.Sc.Enabled
			})(e) && (e => {
				const t = Object(o.d)(e);
				return !!t && r.has(t.toLowerCase())
			})(e) && n.d.realtimeCommentsExperiment(e)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.2e20024d6f71ebe1df82.js.map