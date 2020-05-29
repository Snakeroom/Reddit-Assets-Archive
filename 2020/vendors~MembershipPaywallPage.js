// https://www.redditstatic.com/desktop2x/vendors~MembershipPaywallPage.17e3bf2fcfab9f5a0eaf.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~MembershipPaywallPage"], {
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
					var r, i = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(o) && /android/i.test(o),
						d = /nexus\s*[0-6]\s*/i.test(o),
						t = !d && /nexus\s*[0-9]+/i.test(o),
						l = /CrOS/.test(o),
						u = /silk/i.test(o),
						m = /sailfish/i.test(o),
						h = /tizen/i.test(o),
						c = /(web|hpw)os/i.test(o),
						f = /windows phone/i.test(o),
						_ = (/SamsungBrowser/i.test(o), !f && /windows/i.test(o)),
						v = !i && !u && /macintosh/i.test(o),
						p = !a && !m && !h && !c && /linux/i.test(o),
						b = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						j = s(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(o) && !/tablet pc/i.test(o),
						g = !w && /[^-]mobi/i.test(o),
						x = /xbox/i.test(o);
					/opera/i.test(o) ? r = {
						name: "Opera",
						opera: e,
						version: j || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(o) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || j
					} : /SamsungBrowser/i.test(o) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: j || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(o) ? r = {
						name: "Opera Coast",
						coast: e,
						version: j || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(o) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: j || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(o) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(o) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(o) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(o) ? r = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(o) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(o) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, b ? (r.msedge = e, r.version = b) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(o) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(o) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: b
					} : /vivaldi/i.test(o) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || j
					} : m ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(o) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(o) ? (r = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(o) && (r.firefoxos = e, r.osname = "Firefox OS")) : u ? r = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(o) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(o) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(o) || /rim\stablet/i.test(o) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: j || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : c ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: j || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(o) && (r.touchpad = e)) : /bada/i.test(o) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : h ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || j
					} : /qupzilla/i.test(o) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || j
					} : /chromium/i.test(o) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || j
					} : /chrome|crios|crmo/i.test(o) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: j
					} : /safari|applewebkit/i.test(o) ? (r = {
						name: "Safari",
						safari: e
					}, j && (r.version = j)) : i ? (r = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, j && (r.version = j)) : r = /googlebot/i.test(o) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || j
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(o) ? (/(apple)?webkit\/537\.36/i.test(o) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && j && (r.version = j)) : !r.opera && /gecko\//i.test(o) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : x ? (r.xbox = e, r.osname = "Xbox") : _ ? (r.windows = e, r.osname = "Windows") : p && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (r.osversion = y);
					var k = !r.windows && y.split(".")[0];
					return w || t || "ipad" == i || a && (3 == k || k >= 4 && !g) || r.silk ? r.tablet = e : (g || "iphone" == i || "ipod" == i || a || d || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = o("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function r(e, o) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, o);
					for (s = 0; s < e.length; s++) n.push(o(e[s]));
					return n
				}

				function i(e) {
					for (var o = Math.max(n(e[0]), n(e[1])), s = r(e, (function(e) {
							var s = o - n(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --o >= 0;) {
						if (s[0][o] > s[1][o]) return 1;
						if (s[0][o] !== s[1][o]) return -1;
						if (0 === o) return 0
					}
				}

				function a(e, n, r) {
					var a = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (a = o(r));
					var d = "" + a.version;
					for (var t in e)
						if (e.hasOwnProperty(t) && a[t]) {
							if ("string" != typeof e[t]) throw new Error("Browser version in the minVersion map should be a string: " + t + ": " + String(e));
							return i([d, e[t]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var o = 0; o < e.length; ++o) {
						var n = e[o];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = i, s.check = function(e, o, s) {
					return !a(e, o, s)
				}, s._detect = o, s.detect = o, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_arrayReduceRight.js": function(e, o) {
			e.exports = function(e, o, s, n) {
				var r = null == e ? 0 : e.length;
				for (n && r && (s = e[--r]); r--;) s = o(s, e[r], r, e);
				return s
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_copyArray.js"),
				r = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return r(n(e))
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseForOwnRight.js"),
				r = s("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = r
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, o, s) {
			var n = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, o, s) {
				for (var r = -1, i = e.length; ++r < i;) {
					var a = e[r],
						d = o(a);
					if (null != d && (void 0 === t ? d == d && !n(d) : s(d, t))) var t = d,
						l = a
				}
				return l
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, o) {
				var s = [];
				return n(e, (function(e, n, r) {
					o(e, n, r) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseForRight.js"),
				r = s("./node_modules/lodash/keys.js");
			e.exports = function(e, o) {
				return e && n(e, o, r)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = n
		},
		"./node_modules/lodash/_baseGt.js": function(e, o) {
			e.exports = function(e, o) {
				return e > o
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, o) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, o, r, i) {
				for (var a = -1, d = n(s((o - e) / (r || 1)), 0), t = Array(d); d--;) t[i ? d : ++a] = e, e += r;
				return t
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, o) {
			e.exports = function(e, o, s, n, r) {
				return r(e, (function(e, r, i) {
					s = n ? (n = !1, e) : o(s, e, r, i)
				})), s
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_shuffleSelf.js"),
				r = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(r(e))
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, o, s, r) {
				for (var i = e.length, a = r ? i : -1;
					(r ? a-- : ++a < i) && o(e[a], a, e););
				return s ? n(e, r ? 0 : a, r ? a + 1 : i) : n(e, r ? a + 1 : 0, r ? i : a)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, o) {
				for (var s = e.length; s-- && n(o, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				i = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(o, s, a) {
					return a && "number" != typeof a && r(o, s, a) && (s = a = void 0), o = i(o), void 0 === s ? (s = o, o = 0) : s = i(s), a = void 0 === a ? o < s ? 1 : -1 : i(a), n(o, s, a, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = n
		},
		"./node_modules/lodash/chunk.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				a = Math.ceil,
				d = Math.max;
			e.exports = function(e, o, s) {
				o = (s ? r(e, o, s) : void 0 === o) ? 1 : d(i(o), 0);
				var t = null == e ? 0 : e.length;
				if (!t || o < 1) return [];
				for (var l = 0, u = 0, m = Array(a(t / o)); l < t;) m[u++] = n(e, l, l += o);
				return m
			}
		},
		"./node_modules/lodash/clamp.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, o, s) {
				return void 0 === s && (s = o, o = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== o && (o = (o = r(o)) == o ? o : 0), n(r(e), o, s)
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, o) {
				return e && e.length ? r(e, n(o, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_escapeHtmlChar.js"),
				r = s("./node_modules/lodash/toString.js"),
				i = /[&<>"']/g,
				a = RegExp(i.source);
			e.exports = function(e) {
				return (e = r(e)) && a.test(e) ? e.replace(i, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				r = s("./node_modules/lodash/_baseFilter.js"),
				i = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, o) {
				return (a(e) ? n : r)(e, i(o, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, o) {
				return n(r(e, o), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				r = s("./node_modules/lodash/isArrayLike.js"),
				i = s("./node_modules/lodash/isString.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				d = s("./node_modules/lodash/values.js"),
				t = Math.max;
			e.exports = function(e, o, s, l) {
				e = r(e) ? e : d(e), s = s && !l ? a(s) : 0;
				var u = e.length;
				return s < 0 && (s = t(u + s, 0)), i(e) ? s <= u && e.indexOf(o, s) > -1 : !!u && n(e, o, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseExtremum.js"),
				r = s("./node_modules/lodash/_baseGt.js"),
				i = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, o) {
				return e && e.length ? n(e, i(o, 2), r) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduceRight.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				r = s("./node_modules/lodash/_baseEachRight.js"),
				i = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				d = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, o, s) {
				var t = d(e) ? n : a,
					l = arguments.length < 3;
				return t(e, i(o, 4), s, l, r)
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_arrayShuffle.js"),
				r = s("./node_modules/lodash/_baseShuffle.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (i(e) ? n : r)(e)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, o) {
				return e && e.length ? r(e, n(o, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseToString.js"),
				r = s("./node_modules/lodash/_castSlice.js"),
				i = s("./node_modules/lodash/_charsEndIndex.js"),
				a = s("./node_modules/lodash/_stringToArray.js"),
				d = s("./node_modules/lodash/toString.js"),
				t = /\s+$/;
			e.exports = function(e, o, s) {
				if ((e = d(e)) && (s || void 0 === o)) return e.replace(t, "");
				if (!e || !(o = n(o))) return e;
				var l = a(e),
					u = i(l, a(o)) + 1;
				return r(l, 0, u).join("")
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, o, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var o = ++r;
				return n(e) + o
			}
		},
		"./node_modules/shallowequal/index.js": function(e, o) {
			e.exports = function(e, o, s, n) {
				var r = s ? s.call(n, e, o) : void 0;
				if (void 0 !== r) return !!r;
				if (e === o) return !0;
				if ("object" != typeof e || !e || "object" != typeof o || !o) return !1;
				var i = Object.keys(e),
					a = Object.keys(o);
				if (i.length !== a.length) return !1;
				for (var d = Object.prototype.hasOwnProperty.bind(o), t = 0; t < i.length; t++) {
					var l = i[t];
					if (!d(l)) return !1;
					var u = e[l],
						m = o[l];
					if (!1 === (r = s ? s.call(n, u, m, l) : void 0) || void 0 === r && u !== m) return !1
				}
				return !0
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, o) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=vendors~MembershipPaywallPage.17e3bf2fcfab9f5a0eaf.js.map