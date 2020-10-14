// https://www.redditstatic.com/desktop2x/vendors~InFeedChaining.5262d226c8c56c4630f3.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~InFeedChaining"], {
		"./node_modules/bowser/src/bowser.js": function(e, o, s) {
			var n;
			n = function() {
				var e = !0;

				function o(o) {
					function s(e) {
						var s = o.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = o.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var i, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						d = !/like android/i.test(o) && /android/i.test(o),
						a = /nexus\s*[0-6]\s*/i.test(o),
						t = !a && /nexus\s*[0-9]+/i.test(o),
						l = /CrOS/.test(o),
						m = /silk/i.test(o),
						u = /sailfish/i.test(o),
						c = /tizen/i.test(o),
						v = /(web|hpw)os/i.test(o),
						h = /windows phone/i.test(o),
						p = (/SamsungBrowser/i.test(o), !h && /windows/i.test(o)),
						f = !r && !m && /macintosh/i.test(o),
						_ = !d && !u && !c && !v && /linux/i.test(o),
						b = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						w = s(/version\/(\d+(\.\d+)?)/i),
						j = /tablet/i.test(o) && !/tablet pc/i.test(o),
						g = !j && /[^-]mobi/i.test(o),
						y = /xbox/i.test(o);
					/opera/i.test(o) ? i = {
						name: "Opera",
						opera: e,
						version: w || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(o) ? i = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
					} : /SamsungBrowser/i.test(o) ? i = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: w || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(o) ? i = {
						name: "Opera Coast",
						coast: e,
						version: w || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(o) ? i = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: w || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(o) ? i = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(o) ? i = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(o) ? i = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(o) ? i = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(o) ? i = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(o) ? i = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (i = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, b ? (i.msedge = e, i.version = b) : (i.msie = e, i.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(o) ? i = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? i = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(o) ? i = {
						name: "Microsoft Edge",
						msedge: e,
						version: b
					} : /vivaldi/i.test(o) ? i = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || w
					} : u ? i = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(o) ? i = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(o) ? (i = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(o) && (i.firefoxos = e, i.osname = "Firefox OS")) : m ? i = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(o) ? i = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(o) ? i = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(o) || /rim\stablet/i.test(o) ? i = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: w || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : v ? (i = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: w || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(o) && (i.touchpad = e)) : /bada/i.test(o) ? i = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : c ? i = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
					} : /qupzilla/i.test(o) ? i = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
					} : /chromium/i.test(o) ? i = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
					} : /chrome|crios|crmo/i.test(o) ? i = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : d ? i = {
						name: "Android",
						version: w
					} : /safari|applewebkit/i.test(o) ? (i = {
						name: "Safari",
						safari: e
					}, w && (i.version = w)) : r ? (i = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, w && (i.version = w)) : i = /googlebot/i.test(o) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || w
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !i.msedge && /(apple)?webkit/i.test(o) ? (/(apple)?webkit\/537\.36/i.test(o) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && w && (i.version = w)) : !i.opera && /gecko\//i.test(o) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || s(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || !d && !i.silk ? !i.windowsphone && r ? (i[r] = e, i.ios = e, i.osname = "iOS") : f ? (i.mac = e, i.osname = "macOS") : y ? (i.xbox = e, i.osname = "Xbox") : p ? (i.windows = e, i.osname = "Windows") : _ && (i.linux = e, i.osname = "Linux") : (i.android = e, i.osname = "Android");
					var x = "";
					i.windows ? x = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? x = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? x = (x = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? x = (x = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : d ? x = s(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? x = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? x = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? x = s(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (x = s(/tizen[\/\s](\d+(\.\d+)*)/i)), x && (i.osversion = x);
					var k = !i.windows && x.split(".")[0];
					return j || t || "ipad" == r || d && (3 == k || k >= 4 && !g) || i.silk ? i.tablet = e : (g || "iphone" == r || "ipod" == r || d || a || i.blackberry || i.webos || i.bada) && (i.mobile = e), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
				}
				var s = o("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function i(e, o) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, o);
					for (s = 0; s < e.length; s++) n.push(o(e[s]));
					return n
				}

				function r(e) {
					for (var o = Math.max(n(e[0]), n(e[1])), s = i(e, (function(e) {
							var s = o - n(e);
							return i((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --o >= 0;) {
						if (s[0][o] > s[1][o]) return 1;
						if (s[0][o] !== s[1][o]) return -1;
						if (0 === o) return 0
					}
				}

				function d(e, n, i) {
					var d = s;
					"string" == typeof n && (i = n, n = void 0), void 0 === n && (n = !1), i && (d = o(i));
					var a = "" + d.version;
					for (var t in e)
						if (e.hasOwnProperty(t) && d[t]) {
							if ("string" != typeof e[t]) throw new Error("Browser version in the minVersion map should be a string: " + t + ": " + String(e));
							return r([a, e[t]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var o = 0; o < e.length; ++o) {
						var n = e[o];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = d, s.compareVersions = r, s.check = function(e, o, s) {
					return !d(e, o, s)
				}, s._detect = o, s.detect = o, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseAssignValue.js"),
				i = s("./node_modules/lodash/eq.js");
			e.exports = function(e, o, s) {
				(void 0 === s || i(e[o], s)) && (void 0 !== s || o in e) || n(e, o, s)
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, o) {
			e.exports = function(e, o, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== o && (e = e >= o ? e : o)), e
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_Stack.js"),
				i = s("./node_modules/lodash/_assignMergeValue.js"),
				r = s("./node_modules/lodash/_baseFor.js"),
				d = s("./node_modules/lodash/_baseMergeDeep.js"),
				a = s("./node_modules/lodash/isObject.js"),
				t = s("./node_modules/lodash/keysIn.js"),
				l = s("./node_modules/lodash/_safeGet.js");
			e.exports = function e(o, s, m, u, c) {
				o !== s && r(s, (function(r, t) {
					if (c || (c = new n), a(r)) d(o, s, t, m, e, u, c);
					else {
						var v = u ? u(l(o, t), r, t + "", o, s, c) : void 0;
						void 0 === v && (v = r), i(o, t, v)
					}
				}), t)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_assignMergeValue.js"),
				i = s("./node_modules/lodash/_cloneBuffer.js"),
				r = s("./node_modules/lodash/_cloneTypedArray.js"),
				d = s("./node_modules/lodash/_copyArray.js"),
				a = s("./node_modules/lodash/_initCloneObject.js"),
				t = s("./node_modules/lodash/isArguments.js"),
				l = s("./node_modules/lodash/isArray.js"),
				m = s("./node_modules/lodash/isArrayLikeObject.js"),
				u = s("./node_modules/lodash/isBuffer.js"),
				c = s("./node_modules/lodash/isFunction.js"),
				v = s("./node_modules/lodash/isObject.js"),
				h = s("./node_modules/lodash/isPlainObject.js"),
				p = s("./node_modules/lodash/isTypedArray.js"),
				f = s("./node_modules/lodash/_safeGet.js"),
				_ = s("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, o, s, b, w, j, g) {
				var y = f(e, s),
					x = f(o, s),
					k = g.get(x);
				if (k) n(e, s, k);
				else {
					var O = j ? j(y, x, s + "", e, o, g) : void 0,
						S = void 0 === O;
					if (S) {
						var A = l(x),
							B = !A && u(x),
							C = !A && !B && p(x);
						O = x, A || B || C ? l(y) ? O = y : m(y) ? O = d(y) : B ? (S = !1, O = i(x, !0)) : C ? (S = !1, O = r(x, !0)) : O = [] : h(x) || t(x) ? (O = y, t(y) ? O = _(y) : v(y) && !c(y) || (O = a(x))) : S = !1
					}
					S && (g.set(x, O), w(O, x, b, j, g), g.delete(x)), n(e, s, O)
				}
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, o) {
			e.exports = function(e, o, s, n, i) {
				return i(e, (function(e, i, r) {
					s = n ? (n = !1, e) : o(s, e, i, r)
				})), s
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseRest.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return n((function(o, s) {
					var n = -1,
						r = s.length,
						d = r > 1 ? s[r - 1] : void 0,
						a = r > 2 ? s[2] : void 0;
					for (d = e.length > 3 && "function" == typeof d ? (r--, d) : void 0, a && i(s[0], s[1], a) && (d = r < 3 ? void 0 : d, r = 1), o = Object(o); ++n < r;) {
						var t = s[n];
						t && e(o, t, n, d)
					}
					return o
				}))
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, o) {
			e.exports = function(e, o) {
				if (("constructor" !== o || "function" != typeof e[o]) && "__proto__" != o) return e[o]
			}
		},
		"./node_modules/lodash/clamp.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				i = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, o, s) {
				return void 0 === s && (s = o, o = void 0), void 0 !== s && (s = (s = i(s)) == s ? s : 0), void 0 !== o && (o = (o = i(o)) == o ? o : 0), n(i(e), o, s)
			}
		},
		"./node_modules/lodash/merge.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseMerge.js"),
				i = s("./node_modules/lodash/_createAssigner.js")((function(e, o, s) {
					n(e, o, s)
				}));
			e.exports = i
		},
		"./node_modules/lodash/reduce.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				i = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				d = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, o, s) {
				var t = a(e) ? n : d,
					l = arguments.length < 3;
				return t(e, r(o, 4), s, l, i)
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_copyObject.js"),
				i = s("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return n(e, i(e))
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, o) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~InFeedChaining.5262d226c8c56c4630f3.js.map