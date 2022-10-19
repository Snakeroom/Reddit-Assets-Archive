// https://www.redditstatic.com/desktop2x/SubredditWiki.ded6693e9af8bb520f94.js
// Retrieved at 10/19/2022, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki", "AchievementsActions"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function s(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var n, i = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						g = !o && !u && !m && !p && /linux/i.test(t),
						x = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = r(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !v && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: _ || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: _ || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (n.msedge = e, n.version = x) : (n.msie = e, n.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : u ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? n = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, _ && (n.version = _)) : i ? (n = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, _ && (n.version = _)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: r(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && _ && (n.version = _)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || r(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && i ? (n[i] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : k ? (n.xbox = e, n.osname = "Xbox") : h ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var w = "";
					n.windows ? w = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? w = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? w = (w = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? w = (w = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? w = r(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? w = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? w = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? w = r(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (w = r(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (n.osversion = w);
					var E = !n.windows && w.split(".")[0];
					return v || d || "ipad" == i || o && (3 == E || E >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == i || "ipod" == i || o || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var r, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) s.push(t(e[r]));
					return s
				}

				function i(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), r = n(e, (function(e) {
							var r = t - s(e);
							return n((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, s, n) {
					var o = r;
					"string" == typeof s && (n = s, s = void 0), void 0 === s && (s = !1), n && (o = t(n));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return s
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = o, r.compareVersions = i, r.check = function(e, t, r) {
					return !o(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = s() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/linkify-it/index.js": function(e, t, r) {
			"use strict";

			function s(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(r) {
						e[r] = t[r]
					}))
				})), e
			}

			function n(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === n(e)
			}

			function o(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var d = {
					"http:": {
						validate: function(e, t, r) {
							var s = e.slice(t);
							return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(s) ? s.match(r.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, r) {
							var s = e.slice(t);
							return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(s) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : s.match(r.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, r) {
							var s = e.slice(t);
							return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(s) ? s.match(r.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					s = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || s.push(c), s.push(t.src_xn), t.src_tlds = s.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var d = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var r = e.__schemas__[t];
					if (null !== r) {
						var s = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = s, "[object Object]" === n(r)) return ! function(e) {
							return "[object RegExp]" === n(e)
						}(r.validate) ? i(r.validate) ? s.validate = r.validate : l(t, r) : s.validate = function(e) {
							return function(t, r) {
								var s = t.slice(r);
								return e.test(s) ? s.match(e)[0].length : 0
							}
						}(r.validate), void(i(r.normalize) ? s.normalize = r.normalize : r.normalize ? l(t, r) : s.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
						}(r) ? l(t, r): d.push(t)
					}
				})), d.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var u = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(o).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var r = e.__index__,
					s = e.__last_index__,
					n = e.__text_cache__.slice(r, s);
				this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = s + t, this.raw = n, this.text = n, this.url = n
			}

			function p(e, t) {
				var r = new m(e, t);
				return e.__compiled__[r.schema].normalize(r, e), r
			}

			function b(e, t) {
				if (!(this instanceof b)) return new b(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = s({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = s({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = s(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, s, n, i, o, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (n = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (s = e.match(this.re.email_fuzzy)) && (i = s.index + s[1].length, o = s.index + s[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o)), this.__index__ >= 0
			}, b.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, b.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, b.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(p(this, t)), t = this.__last_index__);
				for (var s = t ? e.slice(t) : e; this.test(s);) r.push(p(this, t)), s = s.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, b.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, b.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, b.prototype.onCompile = function() {}, e.exports = b
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, r) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = r("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = r("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = r("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = r("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var r = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, n, i) {
				for (var o = -1, a = s(r((t - e) / (n || 1)), 0), d = Array(a); a--;) d[i ? a : ++o] = e, e += n;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, s, n) {
				return n(e, (function(e, n, i) {
					r = s ? (s = !1, e) : t(r, e, n, i)
				})), r
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseRange.js"),
				n = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, r, o) {
					return o && "number" != typeof o && n(t, r, o) && (r = o = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), o = void 0 === o ? t < r ? 1 : -1 : i(o), s(t, r, o, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseClamp.js"),
				n = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = n(r)) == r ? r : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), s(n(e), t, r)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				n = r("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(n(e, t), 1)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseRandom.js"),
				n = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js"),
				o = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, r) {
				if (r && "boolean" != typeof r && n(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (r || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + o("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayReduce.js"),
				n = r("./node_modules/lodash/_baseEach.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/_baseReduce.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var d = a(e) ? s : o,
					c = arguments.length < 3;
				return d(e, i(t, 4), r, c, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseTimes.js"),
				n = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var r = a,
					c = d(e, a);
				t = n(t), e -= a;
				for (var l = s(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./node_modules/tlds/index.js": function(e, t) {
			e.exports = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "chloe", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mcd", "mcdonalds", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "montblanc", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "pamperedchef", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "कॉम", "セール", "佛山", "慈善", "集团", "在线", "한국", "大众汽车", "点看", "คอม", "ভারত", "八卦", "موقع", "বাংলা", "公益", "公司", "香格里拉", "网站", "移动", "我爱你", "москва", "қаз", "католик", "онлайн", "сайт", "联通", "срб", "бг", "бел", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "삼성", "சிங்கப்பூர்", "商标", "商店", "商城", "дети", "мкд", "ею", "ポイント", "新闻", "工行", "家電", "كوم", "中文网", "中信", "中国", "中國", "娱乐", "谷歌", "భారత్", "ලංකා", "電訊盈科", "购物", "クラウド", "ભારત", "通販", "भारत", "网店", "संगठन", "餐厅", "网络", "ком", "укр", "香港", "诺基亚", "食品", "飞利浦", "台湾", "台灣", "手表", "手机", "мон", "الجزائر", "عمان", "ارامكو", "ایران", "العليان", "اتصالات", "امارات", "بازار", "پاکستان", "الاردن", "موبايلي", "بھارت", "المغرب", "ابوظبي", "السعودية", "كاثوليك", "سودان", "همراه", "عراق", "مليسيا", "澳門", "닷컴", "政府", "شبكة", "بيتك", "عرب", "გე", "机构", "组织机构", "健康", "ไทย", "سورية", "рус", "рф", "珠宝", "تونس", "大拿", "みんな", "グーグル", "ελ", "世界", "書籍", "ਭਾਰਤ", "网址", "닷넷", "コム", "天主教", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "嘉里", "مصر", "قطر", "广东", "இலங்கை", "இந்தியா", "հայ", "新加坡", "فلسطين", "政务", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"]
		},
		"./node_modules/uc.micro/categories/Cc/regex.js": function(e, t) {
			e.exports = /[\0-\x1F\x7F-\x9F]/
		},
		"./node_modules/uc.micro/categories/P/regex.js": function(e, t) {
			e.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
		},
		"./node_modules/uc.micro/categories/Z/regex.js": function(e, t) {
			e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
		},
		"./node_modules/uc.micro/properties/Any/regex.js": function(e, t) {
			e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/chat/controls/Svg/index.m.less"),
				d = r.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: s,
						hover: o
					} = e;
				return n.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: r,
						[d.a.active]: s,
						[d.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const i = Object(n.e)(e),
					o = encodeURIComponent(`${t}${i}`);
				return `${s.a.accountManagerOrigin}${r||"/login"}?dest=${o}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => {
					let t = 0,
						r = 0;
					const s = [0];
					for (const n of e) t++, r += n.length, s[t] = r;
					return s
				},
				n = e => {
					let t = 0,
						r = 0;
					const s = [];
					for (const n of e) {
						for (let e = 0; e < n.length; e++) s[r] = t, r++;
						t++
					}
					return s[r] = t, s
				}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return k
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return w
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return C
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return S
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return N
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return I
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return T
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return P
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return F
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return L
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return R
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, s) => {
				const n = await Object(o.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: s
					}
				});
				if (!n.ok || !n.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				u = r("./src/reddit/actions/gold/powerups.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/experiments/econ/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				g = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/actions/economics/powerups/constants.ts"),
				v = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(v.a)({
				features: {
					powerups: y.a
				}
			});
			const k = Object(n.a)(_.d),
				w = Object(n.a)(_.i),
				E = Object(n.a)(_.f),
				O = Object(n.a)(_.g),
				j = Object(n.a)(_.e),
				C = Object(n.a)(_.h),
				S = (e, t) => async (r, s, n) => {
					let {
						gqlContext: d
					} = n;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, r) => {
								const s = await Object(o.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(d(), e, c),
							{
								subredditInfoById: s,
								redditorsInfoByIds: n
							} = t;
						await r(k(s)), n && await r(w(n))
					} catch (l) {
						i.c.captureException(l)
					}
				}, N = (e, t) => async (r, s) => {
					if (!e) return;
					const n = s(),
						i = Object(x.k)(n);
					if (!i || !Object(f.n)(n, {
							subredditId: e
						})) return;
					const o = !!Object(g.f)(n, {
						subredditId: e,
						userId: i.id
					});
					!t && o || await r(S(e, [i.id]))
				}, I = e => async (t, r) => !!e && (Object(h.g)(r()) ? (await t(Object(l.c)(e)), !!Object(g.d)(r(), {
					subredditId: e
				})) : (await t(Object(u.j)(e, {
					fullData: !0
				})), Object(f.g)(r(), {
					subredditId: e
				}))), T = e => async (t, r) => {
					var s;
					const n = r(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(b.d)(n, {
							commentIds: i
						}),
						a = null === (s = o.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(I(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(S(a, Array.from(d)))
				}, P = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(I(e)))) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await r(S(e, Array.from(n)))
				}, F = (e, t) => async (r, s) => {
					const n = s(),
						i = Object(x.k)(n);
					if (!i) return;
					const o = i.id,
						a = Object(g.i)(n, {
							subredditId: e,
							userId: o
						});
					r(D({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, L = (e, t) => async (r, s) => {
					const n = s(),
						i = Object(x.k)(n);
					if (!i) return;
					const o = i.id,
						a = Object(g.h)(n, {
							subredditId: e,
							userId: o
						});
					r(D({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, D = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					const a = r(),
						d = Object(x.k)(a);
					if (!d) return;
					const l = d.id;
					t(E(e));
					const {
						subredditId: u,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, f = [b, h].filter(Boolean), _ = Object(g.e)(a, {
						subredditId: u,
						userId: l
					});
					try {
						await c(o(), u, f, _), t(O(e))
					} catch (v) {
						t(j(e)), i.c.captureException(v), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, R = (e, t) => async (r, n, o) => {
					let {
						gqlContext: a
					} = o;
					const d = n(),
						l = Object(x.k)(d);
					if (!l) return;
					const u = l.id,
						b = {
							subredditId: e,
							userId: u
						},
						h = [Object(g.h)(d, b), Object(g.i)(d, b)].filter(Boolean);
					r(C({
						...b,
						isHidden: t
					}));
					try {
						await c(a(), e, h, t)
					} catch (f) {
						r(C({
							...b,
							isHidden: !t
						})), i.c.captureException(f), r(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), r.d(t, "subredditWikiDataLoaded", (function() {
				return Ve
			})), r.d(t, "subredditWikiDataFailed", (function() {
				return qe
			})), r.d(t, "fetchSubredditWikiData", (function() {
				return Ye
			})), r.d(t, "handleWikiRedirects", (function() {
				return Xe
			})), r.d(t, "subredditWikDataRequested", (function() {
				return Qe
			})), r.d(t, "subredditWikiPageRequested", (function() {
				return $e
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(n),
				o = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/helpers/path/index.ts");
			var p = r("./src/reddit/actions/ads/index.ts"),
				b = r("./src/reddit/actions/pages/subreddit.ts"),
				h = r("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				g = r("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				x = r("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				_ = r("./src/lib/makeGqlRequest/index.ts"),
				v = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var k = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				w = r("./src/reddit/selectors/subredditWiki.ts");
			const E = Object(d.a)("WIKI_DIFF_PENDING"),
				O = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				C = e => async (t, r, s) => {
					const n = r(),
						i = Object(k.a)(e),
						o = Object(w.i)(n, {
							key: i
						});
					if (o && (o.pending || !o.error)) return !0;
					const d = {
						key: i
					};
					t(E(d));
					const c = await ((e, t) => Object(_.a)(e, {
						...y,
						variables: {
							...t,
							comparisonRevisionId: Object(v.b)(t.comparisonRevisionId),
							revisionId: Object(v.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							r = t && t.page && t.page.revisionComparisonDiffHtml;
						r ? u = r : l = {
							type: a.L.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: a.L.UNKNOWN_ERROR
					};
					return t(l ? j({
						...d,
						error: l
					}) : O({
						...d,
						htmlDiff: u
					})), !l
				};
			var S = r("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				N = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				I = r("./src/reddit/constants/parameters.ts"),
				T = r("./src/reddit/constants/wiki.ts"),
				P = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				F = r("./src/reddit/helpers/brandSafety/index.ts"),
				L = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				D = r("./src/reddit/models/Toast/index.ts"),
				R = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				M = r("./src/reddit/selectors/subreddit.ts"),
				A = r("./src/lib/initializeClient/installReducer.ts"),
				W = r("./node_modules/redux/es/redux.js");
			const H = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: r,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[r]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b:
							const r = t.payload,
								{
									subredditWiki: s,
									options: n
								} = r,
								i = s && s.directory;
							if (!i) return e;
							const {
								subredditName: o
							} = n;
							return {
								...e, [o.toLowerCase()]: i
							};
						default:
							return e
					}
				},
				V = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const q = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: r,
								pageKey: s
							} = t.payload, {
								page: n
							} = r;
							return s && n ? {
								...e,
								[s]: n
							} : e
						}
						case V.a: {
							const {
								pageKey: r,
								page: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				J = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Y = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.c: {
							const {
								settings: r,
								pageKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : e
						}
						case J.d: {
							const {
								isVisible: r,
								editPermissions: s,
								pageKey: n
							} = t.payload, i = e[n];
							return i ? {
								...e,
								[n]: {
									...i,
									isVisible: r,
									editPermissions: s
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: r,
								afterToken: s,
								pageKey: n
							} = t.payload, i = e[n];
							if (!i) return e;
							const o = [...i.editorsInfo, ...r];
							return {
								...e,
								[n]: {
									...i,
									editorsInfo: o,
									afterToken: s
								}
							}
						}
						case J.a: {
							const {
								username: r,
								pageKey: s
							} = t.payload, n = e[s];
							if (!n) return e;
							const i = n.editorsInfo.filter(e => e.username !== r);
							return {
								...e,
								[s]: {
									...n,
									editorsInfo: i
								}
							}
						}
						default:
							return e
					}
				},
				X = r("./src/lib/omitKey/index.ts");
			const Q = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case V.d:
					case V.c: {
						const {
							key: r
						} = t.payload;
						return Object(X.a)(e, r)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.d:
						case V.b:
						case V.c: {
							const {
								key: r
							} = t.payload, s = t.type === V.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				re = Object(W.c)({
					error: $,
					pending: te
				}),
				se = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ne = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.c: {
						const {
							key: r,
							options: s,
							pageInfo: n,
							revisionsIds: i
						} = t.payload, o = e[r], a = s.after && o ? [...o.ids, ...i] : i;
						return {
							...e,
							[r]: {
								ids: a,
								pageInfo: n
							}
						}
					}
					case V.a: {
						const {
							page: {
								revision: r
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, i = e[s];
						return i && r ? {
							...Object(X.a)(e, n),
							[s]: {
								...i,
								ids: [r.id, ...i.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: r,
							recentRevisionsListingKey: s
						} = t.payload, n = {
							...e
						};
						return delete n[r], delete n[s], n
					}
					default:
						return e
				}
			};
			const oe = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: {
									page: r
								}
							} = t.payload, s = r && r.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case V.c: {
							const {
								revisions: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						case V.a: {
							const {
								page: r
							} = t.payload, s = r.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case V.e: {
							const {
								revisionId: r,
								isHidden: s
							} = t.payload, n = e[r];
							return n ? {
								...e,
								[r]: {
									...n,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(W.c)({
					api: re,
					listings: ie,
					models: ae
				}),
				ce = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: r,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: r
						} = t.payload;
						return Object(X.a)(e, r)
					}
					default:
						return e
				}
			};
			const be = {};
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				fe = Object(W.c)({
					error: pe,
					pending: he
				});
			const ge = {};
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: s
							} = t.payload, n = Object(X.a)(e[r], s);
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				_e = r("./node_modules/lodash/uniq.js"),
				ve = r.n(_e);
			const ye = {};
			var ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: ve()([...e[r] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: ve()([...s, ...e[r] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: s
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				we = Object(W.c)({
					afterToken: ue,
					api: fe,
					models: xe,
					userOrder: ke
				});
			const Ee = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: r,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				je = Object(W.c)({
					listing: we,
					search: Oe
				}),
				Ce = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Se = {};
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.c:
					case Ce.a: {
						const {
							subredditName: r,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.b: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Ce.d:
					case Ce.c: {
						const {
							subredditName: r
						} = t.payload;
						return Object(X.a)(e, r)
					}
					default:
						return e
				}
			};
			const Pe = {};
			var Fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.d:
						case Ce.c:
						case Ce.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === Ce.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Le = Object(W.c)({
					error: Te,
					pending: Fe
				});
			const De = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.c:
					case Ce.a: {
						const {
							subredditName: r,
							contributors: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...s
							}
						}
					}
					case Ce.e: {
						const {
							subredditName: r,
							contributor: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...s
							}
						}
					}
					case Ce.f: {
						const {
							subredditName: r,
							userId: s
						} = t.payload, n = Object(X.a)(e[r], s);
						return {
							...e,
							newState: n
						}
					}
					default:
						return e
				}
			};
			const Be = {};
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.c:
						case Ce.a: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: ve()([...e[r] || [], ...s])
							}
						}
						case Ce.e: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: [...s, ...e[r] || []]
							}
						}
						case Ce.f: {
							const {
								subredditName: r,
								userId: s
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ae = Object(W.c)({
					afterToken: Ne,
					api: Le,
					models: Re,
					userOrder: Me
				});
			const We = {};
			var He = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.g: {
							const {
								subredditName: r,
								contributor: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Ue = Object(W.c)({
					listing: Ae,
					search: He
				}),
				ze = Object(W.c)({
					diff: U,
					directory: G,
					pages: K,
					pageSettings: Z,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: Ue
				});
			Object(A.a)({
				pages: {
					subredditWiki: ze
				}
			});
			const Ge = Object(d.a)(h.c),
				Ve = Object(d.a)(h.b),
				qe = Object(d.a)(h.a),
				Ke = (e, t, r, s) => {
					return r === T.j ? Je(e, t) : !!Object(w.c)(e, {
						subredditName: t,
						wikiPageName: r,
						revisionId: s
					})
				},
				Je = (e, t) => !!Object(w.b)(e, {
					subredditName: t
				}),
				Ye = e => async (t, r, n) => {
					const {
						canShowFailToast: o,
						wikiPageName: d
					} = e, c = d === T.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(L.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: l,
						pageKey: u
					}));
					const m = await Object(P.a)(n.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(Ve({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(qe({
						options: l,
						pageKey: u,
						error: m.error || {
							type: a.L.NOT_FOUND_ERROR
						}
					})), o && t(Object(f.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: D.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Ye(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
				}, Ze = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, s) => {
						const n = s(),
							i = {
								sort: a.bb.HOT
							},
							o = Object(c.a)(e, i.sort),
							d = n.listings.postOrder.api.error[o],
							l = n.listings.postOrder.api.pending[o],
							u = !!n.listings.postOrder.ids[o];
						return !!(l || u && !d) || (await r(Object(b.subredditDataRequested)(o, e, i, t)), !s().listings.postOrder.api.error[o])
					}
				}, Xe = e => async (t, r) => {
					const {
						params: s,
						url: n
					} = e, {
						wikiPageName: i
					} = s, a = Object(B.a)(n, s);
					let d = !1;
					return T.l.includes(i || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : n !== a && (await t(Object(o.c)(a)), d = !0), d
				}, Qe = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (n, i, o) => {
						const {
							subredditName: d = T.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[I.S], m = t[I.T], p = u ? Object(v.a)(u) : void 0, b = m ? Object(v.a)(m) : void 0, h = c === T.j, _ = l === T.m.Revisions;
						let y = !1,
							k = !1;
						if (r) {
							const {
								pageName: t
							} = e;
							y = t === a.mc.WikiContributors, k = t === a.mc.WikiBanned
						}
						const w = i(),
							E = (h || r) && !Je(w, d),
							O = !!c && !Ke(w, d, c, p),
							j = [];
						j.push(n(Ze(d))), (E || O) && j.push(n(Ye({
							includeDirectory: E,
							includePageData: O,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === T.m.Settings && c && j.push(n(Object(S.c)(d, c))), c && p && b && j.push(n(C({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), _ && j.push(n(Object(N.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), y && j.push(n(Object(x.e)(d))), k && j.push(n(Object(g.e)(d))), (await Promise.all(j)).every(Boolean) || n(Object(f.f)({
							kind: D.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Qe(e, t, r)
						}))
					}
				}, $e = e => async (t, r) => {
					if (await t(Xe(e))) return;
					const {
						params: s,
						queryParams: n
					} = e, i = s.subredditName || T.e;
					t(u.m({
						title: s.wikiPageName ? `${s.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Qe(s, n));
					const o = Object(M.C)(r(), {
							subredditName: i
						}),
						a = r();
					o && (a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(R.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(F.a)([], [o])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return v
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/structuredStyles/index.ts"),
				o = r("./src/reddit/actions/subreddit/constants.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/blade.ts"),
				c = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = r("./src/reddit/models/Image/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/structuredStyles.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/telemetry/index.ts");
			const h = Object(n.a)(o.B),
				f = Object(n.a)(o.C),
				g = Object(n.a)(o.A),
				x = (e, t, r) => async (s, n, i) => {
					const o = Object(p.C)(n(), {
						subredditName: e
					});
					if (o) return v(o.id, t, r)(s, n, i)
				}, _ = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, r) => async (n, o, p) => {
					const x = await Object(l.e)(t);
					n(h());
					const v = o();
					try {
						await Object(i.g)("communityIcon", x, e)(n, o, p)
					} catch (k) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), n(Object(a.f)({
							kind: u.b.Error,
							text: _()
						})), void n(g())
					}
					const y = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(v, "image is null")), n(Object(a.f)({
						kind: u.b.Error,
						text: _()
					})), void n(g());
					await Object(i.k)(e, {
						communityIcon: y
					}, d.b.idCard, r)(n, o, p), n(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), n(f())
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				n = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return _
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				u = r("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: r,
						pageInfo: s
					} = t, n = [], i = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r,
							editWikiBanInfo: s
						} = e.node;
						r.id && r.name && r.icon && (i[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, n.push(r.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: i,
						userOrder: n
					}
				},
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const f = Object(i.a)(h.d),
				g = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				_ = e => async (t, r, s) => {
					t(f({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						o = await m(s.gqlContext(), i);
					if (o.ok) {
						const r = o.body,
							s = r.data.subreddit && r.data.subreddit.wiki;
						if (s) {
							const r = p(s);
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = o.error || {
							type: n.L.UNKNOWN_ERROR
						};
						t(x({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(i.a)(h.a), y = (e, t) => async (r, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							r(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, k = Object(i.a)(h.e), w = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.ob.POST,
						data: {
							api_type: "json",
							name: r.username,
							type: "wikibanned",
							duration: r.duration,
							ban_reason: r.banReason,
							note: r.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						r(Object(o.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const n = {
								subredditName: e,
								username: t.username
							},
							i = (await m(d.gqlContext(), n)).body;
						if (i.data.subreddit.wiki) {
							const t = p(i.data.subreddit.wiki);
							r(k({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === n.L.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, E = Object(i.a)(h.f), O = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.ob.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(o.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), r(E({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, j = Object(i.a)(h.g), C = (e, t) => async (r, n, i) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								n = Object.keys(s.bannedContributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[n]
							}))
						}
					} else r(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				n = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return _
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				u = r("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: r,
						pageInfo: s
					} = t, n = [], i = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r
						} = e.node;
						r.id && r.name && r.icon && (i[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t
						}, n.push(r.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: i,
						userOrder: n
					}
				},
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const f = Object(i.a)(h.d),
				g = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				_ = e => async (t, r, s) => {
					t(f({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						o = await m(s.gqlContext(), i);
					if (o.ok) {
						const r = o.body,
							s = r.data.subreddit && r.data.subreddit.wiki;
						if (s) {
							const r = p(s);
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = o.error || {
							type: n.L.UNKNOWN_ERROR
						};
						t(x({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(i.a)(h.a), y = (e, t) => async (r, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							r(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, k = Object(i.a)(h.e), w = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.ob.POST,
						data: {
							api_type: "json",
							name: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						r(Object(o.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const n = {
								subredditName: e,
								username: t
							},
							a = (await m(d.gqlContext(), n)).body;
						if (a.data.subreddit.wiki) {
							const t = p(a.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || r(k({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === n.L.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.L.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, E = Object(i.a)(h.f), O = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.ob.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(o.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), r(E({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, j = Object(i.a)(h.g), C = (e, t) => async (r, n, i) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								n = Object.keys(s.contributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[n]
							}))
						}
					} else r(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				n = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				o = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return k
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "d", (function() {
				return N
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/subredditSettings.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts"),
				m = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = r("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const b = (e, t) => Object(c.a)(e, {
					...p,
					variables: t
				}),
				h = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var f = e => {
					const {
						editPermissions: t,
						editorsInfo: r,
						isVisible: s
					} = e, {
						edges: n,
						pageInfo: i
					} = r, o = [];
					return n.forEach(e => {
						e.node.name && e.node.icon && o.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: o,
						isVisible: s,
						afterToken: i.hasNextPage ? i.endCursor : null
					}
				},
				g = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(v.c),
				k = (e, t) => async (r, s, n) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						a = await b(n.gqlContext(), i),
						d = Object(_.I)(s(), e);
					if (Object(_.ab)(s(), d) || await r(Object(o.h)(e, d)), a.ok) {
						const e = a.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = f(t.page.settings);
							r(y({
								pageKey: Object(g.a)(i),
								settings: e
							}))
						}
					}
					return a.ok
				}, w = Object(i.a)(v.b), E = (e, t, r) => async (n, i, o) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: r
						},
						c = await b(o.gqlContext(), d);
					if (c.ok) {
						const r = c.body,
							s = r.data.subreddit && r.data.subreddit.wiki;
						if (s && s.page) {
							const r = f(s.page.settings),
								{
									editorsInfo: i,
									afterToken: o
								} = r;
							n(w({
								editorsInfo: i,
								afterToken: o,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(a.f)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t, r)
					}));
					return c.ok
				}, O = Object(i.a)(v.d), j = e => {
					let {
						editPermissions: t,
						isVisible: r,
						wikiPageName: s,
						subredditName: i
					} = e;
					return async (e, o, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: n.ob.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: a.apiContext(),
							editPermissions: t,
							isVisible: r,
							wikiPageName: s,
							subredditName: i
						});
						return c.ok && e(O({
							editPermissions: t,
							isVisible: r,
							pageKey: Object(g.a)({
								wikiPageName: s,
								subredditName: i
							})
						})), c.ok
					}
				}, C = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: i
					} = e;
					return async (e, o, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: n.ob.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: r
						});
						if (m.ok) e(Object(a.f)({
							kind: x.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(k(t, i));
						else if (m.error) {
							const t = m.error.type;
							let r = s.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === n.L.NOT_FOUND_ERROR && (r = s.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(a.f)({
								kind: x.b.Error,
								text: r
							}))
						}
						return m.ok
					}
				}, S = Object(i.a)(v.a), N = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: s
					} = e;
					return async (e, i, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: n.ob.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: o.apiContext(),
							wikiPageName: s,
							subredditName: t,
							username: r
						});
						return c.ok && (e(Object(a.f)({
							kind: x.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(S({
							username: r,
							pageKey: Object(g.a)({
								wikiPageName: s,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			}));
			const s = "WIKI_REVISIONS_PENDING",
				n = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				o = "WIKI_PAGE_REVERT_SUCCESS",
				a = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return N
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/WikiRevisions.json");
			var l = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				m = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: n.ob.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.ob.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var f = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						r = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!r) throw new Error("Invalid response");
					return (e => {
						const t = {},
							r = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, r.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: r
						}
					})(r)
				},
				g = r("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/subredditWiki.ts"),
				y = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const k = Object(i.a)(y.d),
				w = Object(i.a)(y.c),
				E = Object(i.a)(y.b),
				O = e => async (t, r, i) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = r(), h = Object(g.a)(e), x = Object(v.p)(b, {
						listingKey: h
					});
					if (!a && !!x) return !0;
					const y = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const j = {
							after: y,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						C = {
							key: h,
							options: j
						};
					t(k(C));
					const S = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(i.gqlContext(), j);
					if (S.ok) {
						const e = S.body;
						if (e.data.subreddit) {
							const r = f(e.data);
							t(w({
								...C,
								...r
							}))
						}
					} else {
						const r = S.error || {
							type: n.L.UNKNOWN_ERROR
						};
						t(E({
							...C,
							error: r
						})), l && t(Object(o.f)({
							kind: _.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: O(e)
						}))
					}
					return S.ok
				}, j = Object(i.a)(y.a), C = e => async (t, r, n) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(x.a)({
						...e,
						revisionId: void 0
					}), l = Object(g.a)({
						...e,
						isRecent: !1
					}), u = Object(g.a)({
						...e,
						isRecent: !0
					}), m = Object(v.p)(r(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(n.apiContext(), e)).ok) {
						const e = (await Object(a.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							r = e.data.subreddit && e.data.subreddit.wiki,
							m = r && r.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(o.f)({
							kind: _.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(j({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: i,
							wikiPageName: d
						}))
					} else t(Object(o.f)({
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}, S = Object(i.a)(y.e), N = e => async (t, r, n) => {
					const i = await b(n.apiContext(), e);
					if (i.ok) {
						const r = i.body.status;
						t(S({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(o.f)({
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, r) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/config.ts"),
				d = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/hooks/useClickSourceData.ts"),
				u = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = r("./src/reddit/components/AuthorLink/index.m.less"),
				p = r.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, r;
				const s = Object(o.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					h = Object(i.d)(),
					f = Object(i.e)(u.b),
					g = Object(i.e)(u.c),
					x = t => {
						var r;
						if (null === (r = e.onClick) || void 0 === r || r.call(e, t), f || g) {
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${a.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.cb)(r))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: s,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: x
				}), e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(o.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(c.default, b({}, null !== (r = e.linkProps) && void 0 !== r ? r : {}, {
					className: s,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: x
				}), e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/BackToTop/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(o.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: r,
					style: s
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(t, c.a.container),
					style: s
				}, n.a.createElement(a.l, {
					onClick: () => u(r)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less": function(e, t, r) {
			e.exports = {
				muteButton: "E6ihBvDYBbdvjzCcN_LZE",
				muteIcon: "_1Sx3lrWefgX2BpcEoC6zMv",
				muteDefault: "_3pc_K2D7OtCZ3HzDnRlOJv",
				muteHover: "_1CwsmOiXqCke04fKLHhV-a"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, r) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subredditTitle: "_8eiyc5qzybrCg1tKBvgsm",
				icon: "_28KZtJenmDKbbe4nGYKwSQ",
				SubredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				subredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				DefaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				defaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "MSTY2ZpsdupobywLEfx9u",
				stickyWrapper: "VJkPo4gom3XvkL4X-w0JS",
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				isSticking: "ZGQod_mafxz0rQZ6X1osG",
				buttonWrapper: "_2I_YJCANrzkY2DZkeu2nht",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				SubredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				subredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				blur: "_38oiFpMv7UiE7wnlYWtYvR",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = r("./src/reddit/actions/subreddit/muting.ts"),
				m = r("./src/reddit/actions/subreddit/notifications.ts"),
				p = r("./src/lib/combineRefs/index.tsx"),
				b = r("./src/lib/hooks/useOnClickOutside.ts"),
				h = r("./src/lib/hooks/useTooltip.ts"),
				f = r("./src/reddit/components/CommonTooltip/index.m.less"),
				g = r.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = n.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: r,
						className: i,
						arrowClassName: o,
						...d
					} = e;
					const [c, l] = Object(s.useState)(t);
					return Object(s.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? n.a.createElement("div", x({
						id: r,
						className: Object(a.a)(g.a.tooltip, i, {
							[g.a.visible]: c
						})
					}, d.popperProps), c && n.a.createElement(n.a.Fragment, null, d.arrowProps && n.a.createElement("div", x({
						className: Object(a.a)(g.a.arrow, o)
					}, d.arrowProps)), d.children)) : null
				})),
				v = r("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case v.c.FREQUENT:
							return "notification_frequent";
						case v.c.OFF:
							return "notification_off";
						case v.c.LOW:
						default:
							return "notification"
					}
				},
				k = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				w = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var E = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./src/reddit/controls/Dropdown/index.tsx"),
				j = r("./src/reddit/controls/Dropdown/Row.tsx"),
				C = r("./src/reddit/icons/fonts/index.tsx"),
				S = r("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = r.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => {
					return n.a.createElement(O.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: E.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(v.c.FREQUENT),
						isSelected: e.notificationLevel === v.c.FREQUENT,
						icon: n.a.createElement(C.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === v.c.FREQUENT
						})
					}, {
						displayText: E.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(v.c.LOW),
						isSelected: e.notificationLevel === v.c.LOW,
						icon: n.a.createElement(C.a, {
							name: "notification",
							isFilled: e.notificationLevel === v.c.LOW
						})
					}, {
						displayText: E.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(v.c.OFF),
						isSelected: e.notificationLevel === v.c.OFF,
						icon: n.a.createElement(C.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === v.c.OFF
						})
					}].map(e => n.a.createElement(j.b, I({
						className: Object(a.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = r("./src/reddit/controls/Button/index.tsx"),
				F = r("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...F.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: F.jb(t)
			});
			var D = r("./src/reddit/hooks/useTracking.ts"),
				R = r("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = c.a.img("SubredditIcon", N.a),
				M = c.a.wrapped(R.a, "DefaultIcon", N.a);
			var A = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: r,
						subredditIcon: s,
						onHide: i,
						onUpdate: o
					} = e;
					const a = Object(D.a)(),
						d = r ? n.a.createElement(B, {
							src: s || void 0
						}) : n.a.createElement(M, null),
						c = `r/${t}`;
					return n.a.createElement("div", {
						className: N.a.notificationPopup
					}, n.a.createElement("div", {
						className: N.a.title
					}, n.a.createElement("h2", null, E.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), n.a.createElement("h3", null, E.fbt._("{subreddit name}", [E.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), n.a.createElement("div", {
						className: N.a.subredditWrapper
					}, n.a.createElement("div", {
						className: N.a.subredditTitle
					}, d, n.a.createElement("span", null, c), n.a.createElement(C.a, {
						name: "notification_frequent",
						className: N.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(P.t, {
						className: N.a.subscribeButton,
						priority: P.c.Primary,
						size: P.d.M,
						text: E.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), o(v.c.FREQUENT), a(L(v.c.FREQUENT.toLowerCase()))
						}
					})), n.a.createElement("button", {
						className: N.a.hideButton,
						onClick: i
					}, E.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				W = r("./src/reddit/helpers/localStorage/index.ts");
			var H = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var U = e => {
					const t = Object(i.d)(),
						r = Object(D.a)(),
						o = Object(h.b)(k),
						a = Object(h.b)(w),
						[d, c] = function(e, t) {
							const [r, n] = Object(s.useState)(Object(W.P)(e, t));
							return [r, Object(s.useCallback)(() => {
								const r = Object(W.a)(e, t);
								n(r)
							}, [e, t, n])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(H.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== v.c.LOW && e.notificationLevel !== v.c.OFF || c()
					}, [e.subredditId]);
					const u = 2 === d,
						f = () => {
							o.hide()
						},
						g = () => {
							a.hide()
						};
					Object(s.useEffect)(() => (u && (a.update && a.update(), a.show()), () => {
						g(), f()
					}), [e.subredditName, u]);
					const x = () => {
							g(), o.show()
						},
						E = (e => `dropdown-${e}`)(e.subredditName),
						O = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(E, f);
					const j = Object(s.useCallback)(e => {
							e.stopPropagation(), o.visible ? f() : x()
						}, [f, x, o.visible]),
						S = Object(s.useCallback)(t => {
							t === v.c.FREQUENT && Object(W.bb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						I = Object(s.useCallback)(s => {
							const {
								subredditId: n
							} = e;
							f(), g(), t(Object(m.d)({
								subredditId: n,
								notificationLevel: s,
								successCallback: () => S(s)
							})), r(L(s.toLowerCase()))
						}, [f, e.subredditId, t, r]);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(p.a)(o.target.ref, a.target.ref),
						onClick: j,
						"data-testid": "subredditNotificationButton"
					}, n.a.createElement(C.a, {
						name: y(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(_, {
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: E
					}, n.a.createElement(T, {
						dropdownId: E,
						notificationLevel: e.notificationLevel,
						onClick: I
					})), u && !l && n.a.createElement(_, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: O,
						className: N.a.popupTooltip
					}, n.a.createElement(A, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: I
					})))
				},
				z = r("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				G = r("./src/reddit/components/SubredditNav/index.tsx"),
				V = r("./src/reddit/components/SubscribeButton/index.tsx"),
				q = r("./src/reddit/constants/componentSizes.ts"),
				K = r("./src/reddit/constants/postLayout.ts"),
				J = r("./src/reddit/constants/posts.ts"),
				Y = r("./src/reddit/featureFlags/index.ts"),
				Z = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				X = r("./src/reddit/constants/tracking.ts");
			var Q = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				$ = r("./src/reddit/hooks/useWindowEvent.ts"),
				ee = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				te = r("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				re = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				se = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ne = r("./src/reddit/selectors/subreddit.ts"),
				ie = r("./src/reddit/selectors/user.ts"),
				oe = r("./src/reddit/selectors/widgets.ts"),
				ae = r("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				de = r.n(ae),
				ce = r("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				le = r("./src/reddit/helpers/trackers/subredditMuting.ts"),
				ue = r("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				me = r.n(ue);
			const {
				fbt: pe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), be = e => {
				let {
					onClickUnmute: t
				} = e;
				const r = Object(D.a)();
				return n.a.createElement(P.t, {
					priority: P.c.Plain,
					className: me.a.muteButton,
					onClick: () => {
						r(Object(le.g)()), t()
					}
				}, n.a.createElement(ce.a, {
					className: me.a.muteIcon
				}), n.a.createElement("span", {
					className: me.a.muteDefault
				}, pe._("Muted", null, {
					hk: "incHh"
				})), n.a.createElement("span", {
					className: me.a.muteHover
				}, pe._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, he = c.a.img("SubredditIcon", de.a), fe = Object(o.c)({
				isNsfwBlurSubreddit: re.e,
				notificationLevel: ne.L,
				isMuted: ne.K,
				spPollsEnabled: Y.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(se.a)(e, {
						subredditId: r
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: r
					} = t;
					return !!r && Object(ne.S)(e, {
						subredditId: r
					})
				},
				userId: ie.i,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: r
					} = t;
					const s = r;
					return Object(ne.kb)(e, {
						identifier: {
							name: s,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ee.b,
				widget: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(oe.f)(e, {
						subredditId: r
					}) : void 0
				}
			}), ge = {
				threshold: [.5, .001],
				rootMargin: `${1-q.f}px 0px 0px 0px`
			};
			t.a = Object(i.b)(fe, (e, t) => ({
				_updateSubredditInfo: () => {
					var r;
					const s = t.subredditId || (null === (r = t.subreddit) || void 0 === r ? void 0 : r.id);
					if (s) return e(Object(m.c)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: v.c.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var r;
					const s = t.subredditId || (null === (r = t.subreddit) || void 0 === r ? void 0 : r.id),
						n = t.subreddit ? t.subreddit.name : t.subredditName;
					if (s) return e(Object(u.e)({
						subredditId: s,
						subredditName: n
					}))
				}
			}), (e, t, r) => ({
				...e,
				...t,
				...r,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					r = e.subreddit ? e.subreddit.name : e.subredditName,
					o = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(i.e)(te.b),
					u = Object(i.e)(te.a),
					m = c || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[f, g] = Object(s.useState)(),
					[x, _] = Object(s.useState)(null),
					v = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: r
							} = t;
							r >= .5 ? e(!1) : r <= .001 && e(!0)
						})
					})(b), []);
				Object($.a)("resize", ((e, t, r) => () => {
					var s;
					e(t && r ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(g, x, m)), Object(Q.a)(h, v, ge);
				const y = e.subreddit && Object(Z.a)(e),
					k = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					w = r.charAt(0).toUpperCase() + r.slice(1),
					E = !!e.subreddit && e.subredditInlineEditingEnabled,
					O = Object(a.a)(de.a.SubredditIcon, de.a.editableIcon, {
						[de.a.emptyEditableIcon]: !y
					}),
					j = k ? n.a.createElement(z.a, {
						className: O,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : n.a.createElement(R.a, {
						className: de.a.DefaultIcon
					}),
					C = k ? n.a.createElement(he, {
						className: Object(a.a)(de.a.SubredditIconImg, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : n.a.createElement(R.a, {
						className: Object(a.a)(de.a.DefaultIcon, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					S = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					N = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px",
					I = e.isCommunityMutingEnabled && e.isMuted;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(a.a)(de.a.wrapper, {
						[de.a.stickyWrapper]: m,
						[de.a.isSticking]: p
					})
				}, n.a.createElement("div", {
					className: de.a.container,
					style: {
						maxWidth: N
					},
					ref: m ? _ : void 0
				}, n.a.createElement("div", {
					className: de.a.subredditMetaContainer
				}, E ? j : C, n.a.createElement("div", {
					className: Object(a.a)(de.a.textContainer, {
						[de.a.textContainerNoIcon]: !k
					})
				}, n.a.createElement("div", {
					className: Object(a.a)(de.a.text, {
						[de.a.blur]: e.isNsfwBlurSubreddit
					})
				}, n.a.createElement("h1", {
					className: de.a.title
				}, d || w), !!d && n.a.createElement("h2", {
					className: de.a.description
				}, "r/", r)), n.a.createElement("div", {
					className: de.a.buttonWrapper
				}, n.a.createElement("div", {
					className: de.a.subscribeButtonContainer
				}, n.a.createElement(V.a, {
					className: de.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...F.o(t),
							source: "sticky_banner",
							action: X.c.CLICK,
							noun: e,
							subreddit: F.jb(t)
						}))(t) : (e => t => ({
							...F.o(t),
							source: "id_banner",
							action: X.c.CLICK,
							noun: e,
							subreddit: F.jb(t)
						}))(t)
					},
					identifier: {
						name: r,
						type: J.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(W.bb)(e.userId, t), e.updateSubredditInfo())
					}
				})), I && n.a.createElement(be, {
					onClickUnmute: e.unmuteSubreddit
				}), e.userIsSubscriber && !I && t && e.notificationLevel && n.a.createElement("div", {
					className: de.a.notificationButtonContainer
				}, n.a.createElement(U, {
					notificationLevel: e.notificationLevel,
					subredditName: r,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: k,
					userId: e.userId
				}))))), S && n.a.createElement(G.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: o,
					subredditId: t,
					subredditNavContainerClassName: de.a.subredditNavContainer
				}))), n.a.createElement("div", {
					className: de.a.intersectionWrapper
				}, n.a.createElement("div", {
					style: {
						height: m ? f : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, r) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loginHref/index.ts"),
				m = r("./src/reddit/actions/contentGate.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				b = r("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = r("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = r("./src/reddit/components/Footer/index.tsx"),
				g = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = r("./src/reddit/components/RichTextJson/index.tsx"),
				_ = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = r("./node_modules/lodash/flatMap.js"),
				y = r.n(v),
				k = r("./src/lib/linkMatchers/index.ts"),
				w = r("./src/lib/linkMatchers/customLinks.ts"),
				E = r("./src/reddit/controls/OutboundLink/index.tsx");
			const O = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(O);
					if (1 === t.length) return [e];
					const r = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, n, i] = t.slice(s, s + 3);
						r.push(e), r.push([i, n])
					}
					return r
				};
			var C = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, j)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let s = null;
						for (const n of t) r.push(e.slice(s ? s.lastIndex : 0, n.index)), s = n, r.push([n.url, n.text]);
						return s && r.push(e.slice(s.lastIndex)), r
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [s, n] = t;
							return i.a.createElement(E.b, {
								className: e.linkClassName,
								href: s,
								key: r
							}, n)
						}
						return i.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				S = r("./src/reddit/constants/parameters.ts"),
				N = r("./src/reddit/contexts/PageLayer/index.tsx"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/chat/controls/Svg/index.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => i.a.createElement(T.a, P({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				L = r("./src/reddit/models/ContentGate.ts"),
				D = r("./src/lib/constants/index.ts"),
				R = r("./src/reddit/selectors/platform.ts"),
				B = r("./src/reddit/selectors/user.ts");
			var M = r("./src/reddit/selectors/meta.ts"),
				A = r("./src/reddit/components/ContentGate/index.m.less"),
				W = r.n(A);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(F, "PrivateKey", W.a), z = l.a.div("ButtonsContainer", W.a), G = l.a.div("Container", W.a), V = l.a.div("ContainerExp", W.a), q = l.a.div("Description", W.a), K = l.a.div("PrivateSubredditDetails", W.a), J = l.a.div("PrivateSubredditDescription", W.a), Y = l.a.h3("PrivateSubredditName", W.a), Z = l.a.a("Link", W.a), X = l.a.wrapped(I.n, "LinkRouterButton", W.a), Q = l.a.wrapped(I.m, "LinkButton", W.a), $ = l.a.wrapped(I.q, "SecondaryLinkRouterButton", W.a), ee = l.a.wrapped(I.p, "SecondaryLinkButton", W.a), te = l.a.wrapped(X, "GoHomeLinkButton", W.a), re = l.a.wrapped(h.a, "CreateCommunityButton", W.a), se = l.a.img("Image", W.a), ne = l.a.img("ImagePlaceholder", W.a), ie = l.a.wrapped(X, "LeftLinkRouterButton", W.a), oe = l.a.wrapped(Q, "LeftLinkButton", W.a), ae = l.a.wrapped(ee, "SecondaryLeftLinkButton", W.a), de = l.a.wrapped($, "SecondaryLeftLinkRouterButton", W.a), ce = l.a.h3("Title", W.a), le = l.a.div("PageBody", W.a), ue = l.a.div("InterstitialMessageWrapper", W.a), me = Object(c.c)({
				isLoggedIn: B.P,
				origin: M.k,
				user: B.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(B.Q)(e)) return !1;
					const t = Object(R.d)(e);
					if (!t) return !1;
					const r = Object(B.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = r;
					if (!s) return !1;
					const n = 30 * D.E;
					return s > Date.now() - n
				})(e),
				isSeo: M.h
			}), pe = Object(N.u)(), be = Object(o.b)(me, (e, t) => {
				let {
					subredditName: r
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(r)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(r)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.q)())
					}
				}
			}), he = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: n,
					continueToGatedSubreddit: o,
					isLoggedIn: a,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: v,
					quarantineMessage: y,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: w,
					interstitialWarningMessage: E,
					interstitialWarningMessageHtml: O,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: N,
					subredditDescription: I,
					subredditName: T,
					user: P
				} = e, F = async () => {
					if (a ? await N() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(S.j, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case L.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ce, null, H._("r/{community name} is a Reddit Premium community", [H._param("community name", T)], {
							hk: "2lyDwB"
						})), i.a.createElement(q, null, H._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(z, null, P ? i.a.createElement(ae, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, H._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(oe, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), P ? i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, H._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ce, null, r === L.a.Nsfw ? H._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : H._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(q, null, H._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(z, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, H._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ee, {
							onClick: F,
							redditStyle: !0
						}, H._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(U, null), i.a.createElement(ce, null, "r/", T, " ", H._("is a private community", null, {
							hk: "7zZmq"
						})), I && I.length && i.a.createElement(K, null, i.a.createElement(Y, null, "r/", T), i.a.createElement(J, null, i.a.createElement("div", null, I))), i.a.createElement(q, null, H._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", H._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), H._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(z, null, P ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: W.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), i.a.createElement(ae, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, H._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ae, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && i.a.createElement(_.a, {
							subredditName: T
						}));
					case L.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ce, null, H._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(q, null, H._("This community is {=quarantined}", [H._param("=quarantined", i.a.createElement(Z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, H._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ue, null, w ? i.a.createElement(x.b, {
							content: w,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : k ? i.a.createElement(g.a, {
							html: k
						}) : y || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), H._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(z, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? i.a.createElement(z, null, i.a.createElement(de, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(Q, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, H._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(z, null, i.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, H._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(P, n, v)));
					case L.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ce, null, H._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(q, null, i.a.createElement(ue, null, j ? i.a.createElement(x.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : O ? i.a.createElement(g.a, {
							html: O
						}) : E), H._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(z, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, H._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(ee, {
							onClick: o,
							redditStyle: !0
						}, H._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case L.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ce, null, H._("r/{community name} has been banned from Reddit", [H._param("community name", T)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(q, null, e ? i.a.createElement(C, {
							linkClassName: W.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : H._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ne, null), i.a.createElement(ce, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(q, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(z, null, P && i.a.createElement(re, {
							eventSource: "content_gate"
						}), i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return H._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return H._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, H._("This account has been {=suspended} .", [H._param("=suspended", i.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, H._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ce, null, H._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(q, null, H._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(z, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, H._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(z, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(a.i)(e => {
				const t = Object(n.useContext)(d.a) ? V : G;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(le, null, he(e))), i.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("ContributorRequestButton").then(r.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = n
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, r) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = r.n(f),
				x = r("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				v = x.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(o.b)(y, (e, t) => {
				let {
					eventSource: r
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(r)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: _
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: r,
					onShowTooltip: n,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), a(d)
					},
					onMouseEnter: n,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: _,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: _,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: _,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/predictions/index.ts"),
				a = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(i.d)(),
					r = Object(i.e)(t => Object(d.Y)(t, {
						subredditId: e
					})),
					s = Object(i.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					c = Object(i.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = n.a.useCallback(() => {
						r.name && t(Object(o.l)(r.name))
					}, [r.name, t]);
				return n.a.useEffect(() => {
					c || s || l()
				}, [c, s, l]), {
					isFetching: c,
					isFetched: s,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(r.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(n.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => o.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => o.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = o.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								r = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, r), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: r
					} = this.state, i = r ? o.a.createElement(m, {
						src: a.a.assetPath + t
					}) : o.a.createElement(n.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, o.a.createElement(m, {
						src: a.a.assetPath + t
					}));
					return o.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": s.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, o.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i))
				}
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, r) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/Footer/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", c.a), m = a.a.a("UserAgreementLink", c.a), p = a.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => n.a.createElement("div", {
				className: Object(o.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === b.Grey,
					[c.a.mIsWhite]: e.textColor === b.White
				})
			}, n.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", n.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", n.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-CommunityCard").then(r.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-Leaderboard").then(r.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("CryptoVault").then(r.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(n.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("CryptoVault").then(r.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, r) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = r("./src/reddit/models/Theme/index.ts"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/components/HeaderImage/index.m.less"),
				h = r.n(b);
			const f = d.a.wrapped(u.a, "Planet", h.a),
				g = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				_ = d.a.div("HeaderContent", h.a),
				v = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				k = d.a.wrapped(i.a, "HeaderUrl", h.a),
				w = d.a.span("Container", h.a),
				E = Object(a.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						a = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (s) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const u = !!i && !!a && "left" === s,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						E = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						O = `${4+E}px`;
					return n.a.createElement(w, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, n.a.createElement(k, {
						className: e.className,
						to: e.url
					}, n.a.createElement(v, {
						className: Object(o.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && n.a.createElement(_, {
						className: Object(o.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? n.a.createElement(g, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					}) : n.a.createElement(f, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					})), n.a.createElement(y, {
						style: {
							paddingTop: 32 === E ? "4px" : "14px"
						}
					}, t)), n.a.createElement(x, {
						className: Object(o.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!a
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = E
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(s.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(n.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "c", (function() {
				return v
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				g = r.n(f);
			class x extends n.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = () => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(g.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const _ = m(x),
				v = h(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.tsx"),
				i = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(i);
			const a = s.a.wrapped(n.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: s,
						tooltipIdPrefix: n,
						tooltipType: i
					} = e;
					let o = n;
					return r && (o = `${o}--${r}`), i && (o = `${o}--${i}`), t && (o = `${o}--${t}`), s && (o = `${o}--${s}`), o
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("IdCard").then(r.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return S
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/lodash/isNil.js"),
				d = r.n(a),
				c = r("./src/reddit/constants/jsapiEvents.ts");
			var l = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...s
							}
						} = this;
						l.a.publish(c.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				b = r("./src/reddit/selectors/comments.ts"),
				h = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const r = Object(h.b)(e, t),
					s = Object(f.N)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(i.b)(() => Object(o.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const _ = (e, t) => {
				const r = Object(h.b)(e, t),
					s = Object(f.N)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(i.b)(() => Object(o.a)(_, e => e))(e => n.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var y = Object(i.b)(() => Object(o.c)({
					subreddit: f.Y
				}))(e => n.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				k = r("./src/reddit/hooks/usePostContext.ts");
			var w = e => {
				const t = Object(k.a)(),
					r = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				}) : null
			};
			var E = e => {
				const t = Object(k.a)(),
					r = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: r
				}) : null
			};
			var O = e => {
				const t = Object(k.a)(),
					r = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				}) : null
			};
			var j = Object(i.b)(() => Object(o.c)({
				subreddit: f.Y
			}))(e => n.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var C = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.Q)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var S = Object(i.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(f.Y)(e, {
						subredditId: r
					}) : null
				}
			}))(e => n.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/reddit/components/Media/index.m.less"),
				a = r.n(o);
			const d = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: r
					} = e;
					return i.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, r)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, r) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/addQueryParams/index.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/forceHttps/index.ts"),
				l = r("./src/reddit/constants/tracking.ts"),
				u = r("./src/reddit/models/Media/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = r.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					r = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), n.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: r,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/forceHttps/index.ts"),
				u = r("./src/lib/opener/index.ts"),
				m = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = r("./src/reddit/components/Media/BlurredContent.tsx"),
				b = r("./src/reddit/components/PlayButton/index.tsx"),
				h = r("./src/reddit/constants/adEvents.ts"),
				f = r("./src/reddit/constants/elementClassNames.ts"),
				g = r("./src/reddit/controls/OutboundLink/index.tsx"),
				x = r("./src/reddit/helpers/trackers/ads.ts"),
				_ = r("./src/reddit/hooks/useClickSourceData.ts"),
				v = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = r("./src/reddit/models/Media/index.ts"),
				k = r("./src/reddit/selectors/posts.ts"),
				w = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/constants/tracking.ts"),
				j = r("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				C = r("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = r.n(C);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * y.e,
				T = e => i.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[S.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				P = e => {
					const t = Object(c.a)(S.a.image, f.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						r = {};
					e.showFull || e.isTall || (r.maxHeight = `${y.j}px`), e.isListing || e.isTall && I(e.height) || (r.maxHeight = `${y.e}px`), e.isExpando && e.maxHeight && (r.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (r.maxWidth = `${e.maxWidth}px`);
					const o = Object(n.useRef)(null),
						[a, d] = Object(n.useState)(!1),
						l = Object(n.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && d(!0)
							})
						}, [a]),
						u = Object(n.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(v.a)(o, l, u.current);
					const {
						width: m,
						height: p
					} = e;
					let b = 240;
					if (m / p > 1)
						if (m < 240) b = p;
						else {
							(b = p * (240 / m)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const h = Object(n.useRef)({
						height: b
					});
					return e.renderSmallMedia ? i.a.createElement("div", {
						ref: o,
						style: h.current
					}, a && i.a.createElement(T, N({}, e, {
						className: t
					}))) : i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: r
					})
				},
				F = e => {
					const t = {};
					return (!e.showFull && Object(y.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${y.j}px`, e.shouldBlur && (t.maxWidth = Object(y.L)(e.height, e.width) ? `${y.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className, {
							[S.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				L = Object(o.b)(() => Object(d.a)(k.F, E.jb, (e, t) => {
					let {
						isSponsored: r,
						postId: s
					} = t;
					return r && s ? Object(k.b)(e, s) : null
				}, w.d, k.G, (e, t, r, s, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: r,
					pageType: s.pageType,
					post: n
				})));
			t.a = L(e => {
				const t = Object(_.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": j.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(g.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(x.a)(e.post, e.pageType))
					}
				}, R(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, R(e)) : R(e)
			});
			const D = (e, t) => i.a.createElement(P, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[O.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				R = e => {
					let {
						onClick: t,
						...r
					} = e;
					const n = Object(y.L)(r.height, r.width),
						o = I(r.height) && n;
					return i.a.createElement(F, N({}, r, {
						className: `${n?`${O.a} `:""}${r.className||""}`
					}), r.isListing ? i.a.createElement("div", {
						className: r.contentImageClassName
					}, D(n, r)) : i.a.createElement("a", {
						href: r.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, D(n, r), r.shouldBlur && !r.isVideoThumbnail && !r.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!r.isNSFW,
						isSpoiler: !!r.isSpoiler
					})), r.isListing && !r.showFull && r.height > y.j && Object(y.L)(r.height, r.width) && i.a.createElement("div", {
						className: S.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), r.isVideoThumbnail && i.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, r) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/forceHttps/index.ts"),
				a = r("./src/reddit/models/Media/index.ts"),
				d = r("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = r.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const r = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? n.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return n.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : r
				}, s, !e.isGalleryTileLayout && n.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), n.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends n.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return n.a.Children.only(this.props.children) || n.a.createElement("div", null)
					}
					return n.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var s = r("./node_modules/lodash/throttle.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./node_modules/@reddit/adblock-detection/browser.js"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/video.ts"),
				m = r("./src/reddit/constants/tracking.ts"),
				p = r("./src/reddit/models/Media/index.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/video.ts");
			const f = 100,
				g = f / 2 / 1e3;
			var x = r("./src/lib/forceHttps/index.ts"),
				_ = r("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function y(e) {
				let {
					autoplay: t,
					isListing: r,
					isNotCardView: s,
					onBufferingChange: n,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(i.useRef)(),
					b = Object(i.useRef)(),
					h = Object(_.a)(d);

				function y(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (y(!d && (t || s)), b.current && n) return p.current = function(e, t) {
						let r = !1,
							s = !1;
						const n = () => r = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", n), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !r) return void(a = d);
							const n = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + g ? o = !0 : o && d >= a && d > a + g && (o = !1), a = d, n !== o && t(o)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", n)
						}
					}(b.current, n), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					h !== d && y(!d && (t || s))
				}, [h, d, t, s]), o.a.createElement("video", v({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var k = r("./src/reddit/components/Media/VideoBox/index.m.less"),
				w = r.n(k);
			const E = Object(d.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function O(e) {
				const {
					autoplayPref: t,
					consumed: r,
					loadTimes: s,
					metadata: i,
					started: d
				} = Object(a.e)(t => E(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: x,
					showFull: _,
					shouldPause: v,
					width: k,
					isListing: O,
					className: j,
					showCentered: C,
					originalSource: S,
					isPromoted: N,
					renderSmallMedia: I
				} = e, T = t && !(N && Object(c.hasAcceptableAds)()), P = Object(a.d)();

				function F(e) {
					P(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function L() {
					return P(Object(u.z)({
						postId: b
					}))
				}
				const D = n()(e => {
					if (r) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(b))
				}, 200);

				function R(e) {
					e.persist(), D(e)
				}

				function B(e) {
					var t;
					(i || A(e), d) || (t = e.timeStamp, P(Object(u.A)(b, t)))
				}

				function M(e) {
					P(Object(u.q)(b, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						P(Object(u.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function W(e) {
					s || B(e), i || A(e), P(Object(u.C)(b))
				}

				function H() {
					const e = {};
					return C && (e.margin = "0 auto"), O || (e.maxHeight = `${p.e}px`), o.a.createElement(y, {
						autoplay: T,
						className: Object(l.a)(m.a, w.a.styledVideo, {
							[w.a.renderSmallMedia]: I
						}),
						height: I ? void 0 : g,
						isListing: O,
						isNotCardView: x,
						key: b,
						loop: !0,
						onBufferingChange: F,
						onLoadStart: M,
						onLoadedData: B,
						onLoadedMetadata: A,
						onPause: L,
						onPlaying: W,
						onTimeUpdate: R,
						shouldLoad: h,
						shouldPause: v,
						showCentered: C,
						showFull: _,
						source: f,
						style: I ? void 0 : e,
						width: I ? void 0 : k
					})
				}
				return O ? H() : o.a.createElement("div", {
					className: Object(l.a)(w.a.container, j, {
						[w.a.centered]: C
					})
				}, o.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, r) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, r) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/icons/fonts/Info/index.tsx"),
				c = r("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = r.n(c);
			const u = Object(i.a)(a.a),
				m = ["center", "bottom"],
				p = ["center", "top"];
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, n.a.createElement(d.a, null), n.a.createElement(u, {
						className: Object(o.a)(e.className, l.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						text: e.text,
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), r.e("ModProgressModule")]).then(r.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, r) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = r("./src/reddit/controls/Dropdown/index.tsx"),
				p = r("./src/reddit/controls/Dropdown/Row.tsx"),
				b = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/selectors/tooltip.ts"),
				f = r("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = r("./src/reddit/components/OverflowMenu/index.m.less"),
				x = r.n(g);
			const _ = c.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(_),
				y = c.a.button("MenuButton", x.a),
				k = c.a.wrapped(p.b, "DropdownRow", x.a),
				w = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: r
						} = t;
						return Object(h.b)(r)(e)
					}
				}),
				E = Object(o.b)(w, (e, t) => {
					let {
						dropdownId: r
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: r
						}))
					}
				}),
				O = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: O(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), i.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return m
			}));
			var s, n = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(s || (s = {}));
			const m = e => {
				let {
					space: t
				} = e;
				const r = Object(d.e)(c.db),
					o = t === s.MODAL;
				return a.a.createElement("div", {
					className: Object(i.a)(u.a.background, {
						[u.a.isNightmodeOn]: r,
						[u.a.isModal]: o
					})
				}, a.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), a.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), a.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: r ? `url(${n.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), a.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), a.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), a.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), a.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = r.n(d);
			const l = Object(n.forwardRef)((function(e, t) {
					let {
						className: r,
						progress: s
					} = e;
					const n = 100 * s;
					return i.a.createElement("div", {
						className: Object(o.a)(c.a.barRow, r),
						ref: t
					}, i.a.createElement("div", {
						className: c.a.track
					}), i.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${n}%`
						}
					}, i.a.createElement(a.a, {
						className: Object(o.a)(c.a.icon, {
							[c.a.empty]: 0 === s,
							[c.a.full]: s >= 1
						})
					})))
				})),
				u = e => {
					let {
						className: t,
						progress: r
					} = e;
					const [o, a] = Object(n.useState)(!1), d = o ? r : 0;
					return i.a.createElement(s.a, {
						onChange: e => {
							o || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, i.a.createElement(l, {
						className: t,
						progress: d
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				a = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = r.n(u);
			const p = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
				className: Object(i.a)(m.a.userIconContainer, e.iconClassName)
			}, n.a.createElement(a.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), n.a.createElement("h4", {
				className: Object(i.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(l.a)(),
					{
						className: s,
						supporter: a
					} = e,
					{
						score: u,
						supporterInfo: b
					} = a,
					h = Object(o.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					f = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					g = Object(o.c)(b),
					x = Object(o.a)(u),
					_ = n.a.createElement(p, {
						userName: h,
						isNsfw: f,
						iconUrl: g
					});
				return n.a.createElement("div", {
					className: Object(i.a)(s, m.a.container)
				}, b ? n.a.createElement(d.default, {
					className: m.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && r(Object(c.o)(b.id, b.displayName))
					}
				}, _) : n.a.createElement("div", {
					className: m.a.user
				}, _), n.a.createElement("div", {
					className: m.a.counter
				}, n.a.createElement(x, {
					className: m.a.powerupIcon
				}), u))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, r) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-motion/lib/react-motion.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const f = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function g(e, t) {
				const r = t || m;
				return e.slice(0, r).map(f)
			}
			const x = () => ({
					width: p,
					height: Object(o.spring)(0)
				}),
				_ = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: g(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r
					} = this.props, n = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(s.a)(c.a.container, e)
					}, i.a.createElement(o.TransitionMotion, {
						willLeave: x,
						willEnter: _,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(o.spring)(p),
								height: Object(o.spring)(b),
								motionProgress: Object(o.spring)(1)
							}
						}))
					}, e => i.a.createElement(i.a.Fragment, null, e.map(e => i.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, i.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, i.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), n && i.a.createElement(a.t, {
						priority: a.c.Secondary,
						className: c.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: g(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(v)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 3;

			function l(e) {
				return e >= c ? a.a : e >= d ? o.a : i.a
			}

			function u(e) {
				var t;
				const r = !e,
					n = `${s.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? n : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = e => {
				let {
					displayName: t,
					score: r
				} = e;
				return t || n.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [n.fbt._plural(r)], {
					hk: "8kyEI"
				}).toString()
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				oldTitleGroup: "bp_YzVmUt92uGSsPIf4j3",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				oldGroup: "_3y6WM5j8-wIqZ0RrXxy7j_",
				title: "_11_vLMByyp2z23bapR4owd",
				powerupsIcon: "_1FxdCwvprzQqdbsn7m_kVA",
				powerupsIconImage: "_12haD-enU6DNikY4x-ASUt",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				becomeFirstHero: "aJNQr1T_lEkfCdXvnmNcQ",
				becomeFirstHeroLabel: "_3c0aoF8IoxBMG3vuqMWoox",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: t,
					onClick: r,
					disabled: s
				} = e;
				return Object(o.e)(l.r) ? i.a.createElement(c.t, {
					priority: c.c.Primary,
					className: t,
					onClick: r,
					isFullWidth: !0,
					disabled: s
				}, u._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				})) : null
			};
			var p = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				b = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				h = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = r("./src/reddit/helpers/trackers/powerups.ts"),
				x = r("./src/reddit/hooks/useTracking.ts"),
				_ = r("./src/reddit/selectors/experiments/econ/index.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				w = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				E = r.n(w);
			const {
				fbt: O
			} = r("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: s,
					count: n,
					tiersInfo: o
				} = r, a = (o[s] || o[s - 1]).powerupsCost;
				if (!a) return null;
				const d = Math.min(a, n) / a;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: E.a.titleRow
				}, i.a.createElement("span", null, O._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, n < a ? `${n}/${a}` : n)), i.a.createElement(k.b, {
					progress: d
				}))
			};
			var C = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				S = r("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				N = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				I = r.n(N);
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t,
					subredditId: r
				} = e;
				const c = Object(o.d)(),
					u = Object(x.a)(),
					k = Object(o.e)(y.k),
					w = Object(o.e)(e => Object(l.j)(e, {
						subredditId: r
					})),
					E = Object(o.e)(e => Object(v.Y)(e, {
						subredditId: r
					})),
					O = Object(o.e)(e => Object(l.m)(e, {
						subredditId: r
					})),
					N = Object(o.e)(e => !!Object(l.k)(e, {
						subredditId: r
					})),
					P = Object(o.e)(S.b) && Object(S.c)(r),
					F = Object(o.e)(_.j);
				Object(n.useEffect)(() => {
					w && c(Object(a.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(r))
				}, [w, r, c]);
				if (!w || 1 === w.tiersInfo.length || !E || P || F) return null;
				return i.a.createElement(h.a, null, i.a.createElement(f.a, {
					className: t,
					title: T._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: I.a.container
				}, i.a.createElement("div", {
					className: I.a.titleGroup
				}, i.a.createElement("div", {
					className: I.a.powerupsIcon
				}, i.a.createElement("img", {
					className: I.a.powerupsIconImage,
					src: `${s.a.assetPath}/img/powerups/powerups-rangers.png`
				})), i.a.createElement("h2", {
					className: I.a.title
				}, (() => N ? T._("Powerups are unlocked in {communityName}", [T._param("communityName", E.displayText)], {
					hk: "3xCZkG"
				}) : T._("Powerup to unlock perks for {communityName}", [T._param("communityName", E.displayText)], {
					hk: "2OPLXh"
				}))()), i.a.createElement(m, {
					className: I.a.button,
					onClick: () => {
						u(Object(g.k)()), c(Object(d.e)("powerups_sidebar"))
					}
				}), i.a.createElement(p.a, {
					space: p.b.SIDEBAR
				})), i.a.createElement("div", {
					className: I.a.group
				}, i.a.createElement("h3", {
					className: I.a.subTitle
				}, T._("Community Heroes", null, {
					hk: "2ssat0"
				})), i.a.createElement(j, {
					className: I.a.progress,
					powerups: w
				}), !!(null == O ? void 0 : O.length) && i.a.createElement(C.a, {
					supporters: O,
					className: I.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						u(Object(g.m)()), c(Object(d.f)(r))
					}
				}), !(null == O ? void 0 : O.length) && i.a.createElement("div", {
					className: I.a.becomeFirstHero
				}, i.a.createElement(b.a, {
					displayName: T._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == k ? void 0 : k.displayName,
					isNsfw: !!(null == k ? void 0 : k.isNSFW),
					iconUrl: null == k ? void 0 : k.accountIcon,
					textClassName: I.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/actions/urlRequested.ts"),
				l = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = r("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = r.n(m);
			const b = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: r => {
							((e, t, r, s, n) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const r = e.target.getAttribute("href");
									n && s(r, n), t(r)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), r && r(e)
							})(r, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, r) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, r) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				_ = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: r,
						...s
					} = e;
					return i.a.createElement(x, p({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: r
						})
					}))
				}, "SpoilerWrapper", u.a),
				v = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: r
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == r || r(e))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return i.a.createElement(_, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = y
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, r) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "x", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "t", (function() {
				return j
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "o", (function() {
				return S
			})), r.d(t, "q", (function() {
				return N
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "r", (function() {
				return T
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "w", (function() {
				return F
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/controls/OutboundLink/index.tsx"),
				o = r("./src/reddit/components/RichTextJson/elements.m.less"),
				a = r.n(o),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				h = d.a.p("P", a.a),
				f = d.a.li("Li", a.a),
				g = d.a.ul("Ul", a.a),
				x = d.a.ol("Ol", a.a),
				_ = d.a.strong("B", a.a),
				v = d.a.em("I", a.a),
				y = d.a.span("U", a.a),
				k = e => n.a.createElement("del", e),
				w = d.a.sub("Sub", a.a),
				E = d.a.sup("Sup", a.a),
				O = d.a.table("Table", a.a),
				j = d.a.tr("Tr", a.a),
				C = d.a.td("Tdl", a.a),
				S = d.a.td("Tdc", a.a),
				N = d.a.td("Tdr", a.a),
				I = d.a.th("Thl", a.a),
				T = d.a.th("Thc", a.a),
				P = (d.a.th("Thr", a.a), d.a.wrapped(e => n.a.createElement(i.b, e), "A", a.a)),
				F = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return E
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/findLastIndex.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/components/Media/BlurredContent.tsx"),
				m = r("./src/reddit/constants/elementClassNames.ts"),
				p = r("./src/reddit/models/RichTextJson/index.ts"),
				b = r("./src/reddit/components/RichTextJson/media.tsx"),
				h = r("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = r("./src/reddit/components/RichTextJson/index.m.less"),
				g = r.n(f);
			const x = r("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				_ = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: r,
						...s
					} = e;
					return a.a.createElement(x, s)
				}),
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				y = e => i()(e, v),
				k = e => e.findIndex(v),
				w = e => {
					const {
						altText: t,
						className: r,
						content: s,
						isListing: n,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: v,
						rtJsonElementProps: w,
						useExplicitTextColor: E,
						shouldBlur: O,
						onClickRevealSpoilerText: j,
						mediaProps: C
					} = e, S = s.document, N = [], I = e.mediaMetadata || null, T = k(S), P = y(S);
					if (O && !n && !o) return a.a.createElement(x, {
						className: Object(d.a)(m.j, r)
					}, a.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== T)
						for (let a = T; a <= P; a++) {
							const e = S[a];
							switch (e.e) {
								case p.k:
									N.push(h.c(e, w, a));
									break;
								case p.l:
									N.push(h.d(a));
									break;
								case p.b:
									N.push(h.a(e, I, w, a));
									break;
								case p.c:
									N.push(h.b(e, a));
									break;
								case p.p:
									N.push(h.f(e, I, w, a, j));
									break;
								case p.A:
									N.push(h.h(e, I, w, a, j));
									break;
								case p.v:
									N.push(h.g(e, I, w, a, j));
									break;
								case p.h:
									N.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									N.push(...Object(b.b)(e, a, w, I, v, f, t, C))
							}
						}
					return E ? a.a.createElement(x, {
						className: Object(d.a)(m.j, r)
					}, N) : a.a.createElement(_, {
						className: Object(d.a)(m.j, r),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return w(t)
					} catch (r) {
						return this.hasError = !0, this.logError(r), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, r) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return T
			})), r.d(t, "b", (function() {
				return F
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/config.ts"),
				d = r("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = r("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = r("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = r("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = r("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/isComment.ts"),
				h = r("./src/reddit/helpers/richTextJson/index.ts"),
				f = r("./src/reddit/icons/fonts/index.tsx"),
				g = r("./src/reddit/models/RichTextJson/index.ts");
			var x = e => i.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, i.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), i.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), i.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), i.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), i.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), i.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), i.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				_ = r("./src/reddit/components/RichTextJson/elements.tsx"),
				v = r("./src/reddit/components/RichTextJson/media.m.less"),
				y = r.n(v),
				k = r("./src/lib/lessComponent.tsx"),
				w = r("./src/reddit/helpers/media/index.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = /\/(\w+)\/asset\/(\w+)\//,
				j = k.a.wrapped(_.a, "A", y.a),
				C = k.a.wrapped(l.a, "ImageBox", y.a),
				S = k.a.wrapped(e => i.a.createElement("p", e), "Caption", y.a),
				N = k.a.div("Placeholder", y.a),
				I = k.a.wrapped(e => {
					let {
						className: t,
						e: r,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = r === g.E ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => {
						d && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(N, E({
						className: Object(o.a)(t, {
							[y.a.renderSmallMedia]: a,
							[y.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && u && i.a.createElement(p.t, {
						priority: p.c.Plain,
						className: y.a.ModalTopicsErrorButton,
						Icon: Object(f.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", y.a),
				T = (e, t) => {
					let {
						c: r,
						x: s,
						y: n
					} = e;
					return i.a.createElement("div", {
						className: y.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: n,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: r,
						height: n,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				P = (e, t, r) => {
					const s = e.c;
					let n = "";
					return r && (r.e === g.s ? n = r.s.u : r.e === g.r ? n = r.s.gif : r.e === g.t && (n = (e => {
						const t = O.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(r.dashUrl))), n ? i.a.createElement(j, {
						href: n,
						key: t,
						title: s
					}, s || n) : null
				},
				F = (e, t, r, s, n, a, c, l) => {
					const p = g.F(s, e.id);
					if (n) return [P(e, t, p)];
					const f = [];
					return !p || p.e === g.s && null === p.s.x && null === p.s.y ? f.push(((e, t, r, s) => i.a.createElement(I, {
						e,
						key: t,
						renderSmallMedia: r,
						onReload: s
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === g.s ? f.push(((e, t, r, s, n) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = n || {};
						let p = d;
						return m && (p = Object(w.i)(240, 20, d, c)), i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: r,
								[y.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, i.a.createElement(C, {
							altText: s,
							originalSource: d.u,
							postId: a,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(p, t, !!e.c, c, l)) : p.e === g.r ? f.push(((e, t, r, s, n) => {
						let {
							id: a,
							ext: d,
							s: c
						} = e;
						if (Object(h.h)(a)) {
							const e = s.renderingObjectInfo,
								n = !!e && Object(b.b)(e),
								l = d || Object(h.g)(a);
							return i.a.createElement("div", {
								className: Object(o.a)({
									[y.a.MediaWrapper]: !n,
									[y.a.CommentGifWrapper]: n,
									[y.a.mHasCaption]: r
								})
							}, i.a.createElement(j, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? i.a.createElement("video", {
								className: y.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: c.mp4
							})) : l), i.a.createElement(x, {
								className: y.a.GiphyLogo
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: r,
								[y.a.hasSmallMedia]: n
							})
						}, i.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, i.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: a,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !n,
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: n
						})))
					})(p, t, !!e.c, r, null == l ? void 0 : l.renderSmallMedia)) : p.e === g.t && f.push(((e, t, r, s) => {
						let {
							hlsUrl: n,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, i.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: n,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(p, t, !!e.c, a)), e.c && f.push(((e, t) => i.a.createElement(S, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "e", (function() {
				return W
			}));
			var s = r("./src/lib/unicodeUtils/index.ts"),
				n = r("./node_modules/lodash/reduce.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/reddit/components/RichTextJson/elements.tsx"),
				c = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/models/Product/index.ts"),
				m = r("./src/reddit/models/RichTextJson/index.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				b = r("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("RichTextJsonEmoteTooltip").then(r.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = r("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = r.n(f);
			const x = 1e3,
				_ = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, _)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const r = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...r,
								actionInfo: {
									...r.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.jb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let r, s, n;
					t.e === m.s ? (r = t.s.x, s = t.s.y, n = t.s.u) : t.e === m.r && (r = t.s.x, s = t.s.y, n = t.s.gif);
					const i = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return n ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: n,
						width: r,
						height: s,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${i}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var k = Object(l.c)(y),
				w = r("./src/reddit/components/RichTextJson/media.tsx"),
				E = r("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = r("./src/reddit/components/SubredditMention/index.tsx"),
				j = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				C = r("./src/reddit/helpers/isComment.ts"),
				S = r("./src/reddit/helpers/isPost.ts"),
				N = r("./src/reddit/helpers/richTextJson/index.ts"),
				I = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, r) => {
					const s = e.c || [],
						n = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === m.x ? e.t : W(e, t, a))
					}
					const c = d.x[n - 1];
					return a.a.createElement(c, {
						key: r
					}, i)
				},
				P = e => a.a.createElement(d.e, {
					key: e
				}),
				F = (e, t, r, s, n) => {
					const i = e.c;
					if (!i) return;
					const o = i.length,
						c = [];
					for (let a = 0; a < o; a++) c.push(R(i[a], t, r, a, n));
					return a.a.createElement(d.c, {
						key: s
					}, c)
				},
				L = (e, t) => {
					const r = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, r.reduce((e, t, r, s) => e += t.t + (r < s.length ? "\n" : ""), "")))
				},
				D = (e, t, r, s, n) => {
					const i = e.c,
						o = [],
						c = i.length;
					for (let u = 0; u < c; u++) {
						const e = i[u].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: u
						}, e.map((e, s) => R(e, t, r, s, n))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: s
					}, o)
				},
				R = (e, t, r, s, n) => {
					switch (e.e) {
						case m.b:
							return F(e, t, r, s, n);
						case m.c:
							return L(e, s);
						case m.k:
							return T(e, r, s);
						case m.l:
							return P(s);
						case m.p:
							return D(e, t, r, s, n);
						case m.v:
							return M(e, t, r, s, n);
						case m.A:
							return B(e, t, r, s, n)
					}
				},
				B = (e, t, r, s, n) => {
					const i = e.c,
						o = e.h,
						c = i.length,
						l = o.length,
						u = [],
						m = [],
						p = [];
					for (let d = 0; d < l; d++) {
						const e = o[d],
							{
								H: s,
								D: i
							} = G(e.a),
							{
								c = []
							} = e;
						u.push(a.a.createElement(s, {
							key: d
						}, A(c, t, r, n))), p[d] = i
					}
					for (let b = 0; b < c; b++) {
						const e = i[b],
							s = e.length,
							o = [];
						for (let i = 0; i < s; i++) {
							const s = p[i],
								{
									c: d = []
								} = e[i];
							o.push(a.a.createElement(s, {
								key: i
							}, A(d, t, r, n)))
						}
						m.push(a.a.createElement(d.t, {
							key: b
						}, o))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, u)), a.a.createElement("tbody", null, m))
				},
				M = (e, t, r, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const i = e.c[0];
					return i.e !== m.m && i.e !== m.a || !Object(N.h)(i.id) ? a.a.createElement(d.j, {
						key: s
					}, A(e.c, t, r, n)) : Object(w.b)(i, s, r, t)
				},
				A = (e, t, r, s) => {
					const n = [],
						i = e.length;
					for (let o = 0; o < i; o++) {
						const i = e[o];
						if (i.e === m.B) n.push(H(i, o));
						else if (i.e === m.y) n.push(a.a.createElement(E.a, {
							key: o,
							onClickReveal: s
						}, A(i.c, t, r, s)));
						else if (i.e === m.n) n.push(a.a.createElement("br", {
							key: o
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.F(t, i.id);
								e && n.push(a.a.createElement(k, {
									key: o,
									node: i,
									media: e
								}))
							}
						} else n.push(W(i, r, o))
					}
					return n
				},
				W = (e, t, r) => {
					switch (e.e) {
						case m.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(j.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: r,
								title: e.a
							}, s);
							let n, i;
							const o = Object(I.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(S.b)(c) && (n = c.postId), c && Object(C.b)(c) && (i = c.id, n = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: r,
								title: e.a,
								sourceElement: o,
								postId: n,
								commentId: i
							}, s);
						case m.z:
							return a.a.createElement(O.b, {
								key: r,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: r
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(d.a, {
								href: e.t,
								key: r
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: r,
						t: n
					} = e, i = [];
					if (!r) return z(0, n, t);
					const o = Object(s.a)(n);
					let a = 0,
						d = 0;
					const c = r.length;
					for (; a < c; a++) {
						const [e, t, s] = r[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(z(0, n.substr(d, l - d), `between${a}`)), i.push(z(e, n.substr(l, u), a)), d = l + u
					}
					return d < n.length && i.push(z(0, n.substr(d), `remaining${a}`)), i
				},
				U = {
					[m.j.monospace]: d.h,
					[m.j.bold]: d.b,
					[m.j.italic]: d.f,
					[m.j.underline]: d.u,
					[m.j.strikethrough]: d.d,
					[m.j.subscript]: d.l,
					[m.j.superscript]: d.m
				},
				z = (e, t, r) => {
					let s = t;
					return s = i()(U, (t, s, n) => e & parseInt(n, 10) ? a.a.createElement(s, {
						key: r
					}, t) : t, s)
				},
				G = e => {
					switch (e) {
						case m.f:
							return {
								H: d.r, D: d.q
							};
						case m.d:
							return {
								H: d.r, D: d.o
							};
						case m.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, r) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/polished/dist/polished.es.js"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./src/lib/addQueryParams/index.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = r("./src/lib/prettyPrintNumber/index.ts"),
				m = r("./src/reddit/components/FlairWrapper/index.tsx"),
				p = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = r("./src/reddit/connectors/miniCardPost.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/contexts/Post/index.tsx"),
				g = r("./src/reddit/controls/InternalLink/index.tsx"),
				x = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				_ = r("./src/reddit/helpers/name/index.ts"),
				v = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/models/Theme/index.ts"),
				k = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = r("./src/reddit/components/MiniCardPost/index.m.less"),
				E = r.n(w),
				O = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = r.n(O);
			const C = e => e.type === v.f.Spoiler,
				S = Object(h.u)();
			t.a = S(Object(f.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: r,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: v,
					showSubredditMeta: w = !0,
					showSubredditName: O,
					subredditOrProfile: S
				} = e, N = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", P = v && T || f && Object(a.a)("/search", {
					q: f.rawQuery,
					source: I
				}) || T, F = f ? f.subredditInfo && f.subredditInfo.icon : S && S.icon.url, L = f ? f.subredditInfo && f.subredditInfo.displayText : S && (S.displayText || S.name), D = h ? h.flair.filter(C) : [], R = h ? h.score : 0, B = h ? h.numComments : 0, M = h && h.isSponsored, A = Object(k.a)(e).body, W = `linear-gradient(\n      ${Object(n.f)(A,.2)},\n      ${Object(n.f)(A,.3)},\n      ${Object(n.f)(A,.4)},\n      ${Object(n.f)(A,.6)},\n      ${Object(n.f)(A,.8)},\n      ${A}\n    )`, H = o.a.createElement("div", {
					id: i,
					className: Object(d.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!N
					})
				}, o.a.createElement(g.default, {
					to: P
				}, o.a.createElement("div", {
					className: Object(d.a)(j.a.backgroundWrapper, E.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(k.a)(e).body, N || Object(k.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, M && o.a.createElement("div", {
					className: j.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(j.a.innerContainer, E.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(j.a.description, r)
				}, D.length > 0 && o.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: D,
					nowrap: !0,
					post: h
				}), h.title) : o.a.createElement("div", {
					className: j.a.spacer
				}), w && F && L && o.a.createElement(x.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: F || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !w && h && o.a.createElement("div", {
					className: j.a.metaLine
				}, O && L && o.a.createElement("span", {
					className: j.a.meta
				}, Object(_.d)(L)), o.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return M ? o.a.createElement(p.a, {
					post: h
				}, H) : H
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/lodash/random.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/helpers/adCount/index.ts"),
				f = r("./src/reddit/helpers/trackers/ads.ts"),
				g = r("./src/reddit/models/Media/index.ts"),
				x = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				_ = r.n(x),
				v = r("./src/lib/lessComponent.tsx");
			const y = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				k = Object(c.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: s
						} = t, n = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, n, s)]
					}
				}),
				w = Object(d.b)(k),
				E = v.a.wrapped(b.a, "ThemedWidget", _.a),
				O = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.F)(e.media) && e.media.content)),
				j = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				C = Object(p.c)(class extends a.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: r
						} = this.props;
						return t !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(f.b)(e, t, r))
					}
					render() {
						const e = i()(0, j.length - 1),
							{
								img: t,
								href: r
							} = j[e],
							{
								className: s,
								placement: n,
								redditStyle: o
							} = this.props;
						return a.a.createElement(E, {
							className: s,
							contentOnly: !0,
							redditStyle: o
						}, a.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, n)
						}))
					}
				});

			function S(e) {
				let {
					className: t,
					post: r,
					placementIndex: s,
					refreshKey: n,
					listingName: i,
					placement: o,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? a.a.Fragment : m.a;
				if (!c && O(r)) {
					let e = null;
					return l ? e = a.a.createElement(C, {
						className: t,
						redditStyle: d,
						placement: o
					}) : r && (e = a.a.createElement(y, {
						post: r,
						postId: r.id,
						refreshKey: n,
						listingName: i,
						placement: o,
						placementIndex: s
					})), a.a.createElement(p, null, e)
				}
				return null
			}
			t.a = w(S)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/selectors/brandSafety.ts"),
				d = r("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.u)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: r,
					pageLayer: s
				} = t;
				const n = Object(a.b)(e, {
						listingName: r,
						pageLayer: s
					}),
					i = Object(c.E)(e) || Object(d.a)(e),
					o = Object(a.e)(e);
				return {
					canShowAd: n && !i,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: o
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: r,
					viewIsUnsafe: s,
					pageLayer: i,
					...o
				} = e;
				return !r && t && i ? n.a.createElement(l.a, u({
					forceHouseAd: s
				}, o)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/components/SidebarContainer/index.m.less"),
				i = r.n(n);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/location.ts"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/helpers/trackers/navigation.ts"),
				h = r("./src/reddit/selectors/experiments/countrySites.ts"),
				f = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				g = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = r("./src/reddit/selectors/meta.ts"),
				_ = r("./src/reddit/components/SidebarFooter/index.m.less"),
				v = r.n(_);
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = d.a.a("Link", v.a), w = Object(o.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: g.a
			}), E = Object(i.b)(w), O = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return n.a.createElement("div", {
					className: v.a.GreyRereddit
				}, r, !!m.c[t] && n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), n.a.createElement("div", {
					className: v.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(E(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.bd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.bd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.bd.LargeImagePreview ? e.reredditButtons : [];
					return n.a.createElement(j, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? n.a.createElement(k, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, s[t]) : null
				};
				return n.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, s("en"), s("fr"), s("it")), n.a.createElement("div", {
					className: v.a.Column
				}, s("de"), s("es"), s("pt"))), n.a.createElement("div", {
					className: v.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = r.n(s),
				i = r("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/lodash/throttle.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/components/BackToTop/index.tsx"),
				l = r("./src/reddit/components/SidebarFooter/index.tsx"),
				u = r("./src/reddit/constants/componentSizes.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = r.n(p),
				h = r("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = d.g[1] + 24,
				x = u.f + 8,
				_ = x + 152 + 16,
				v = _ + g + 8,
				y = h.a.div("Container", b.a),
				k = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...s
					} = e;
					return a.a.createElement(c.a, f({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?x:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				w = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: n,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(r, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && i && !n,
							[b.a.StickyStylesFakeOverlay]: !o && !!n
						})
					}, t)
				};
			class E extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > _
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: r,
							children: s,
							className: n,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return a.a.createElement(y, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(w, {
						isFakeOverlay: r,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, d, !i && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(k, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const O = Object(m.u)();
			t.a = O(E)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/ImageInput/index.tsx"),
				m = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				f = r("./src/reddit/models/ApiRequestState/index.ts"),
				g = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = r("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = r.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: r,
						inTopBar: s,
						...n
					} = e, o = [r, _.a.inTopBar, _.a.iconContainer];
					return s ? o.push(_.a.emptyEditableIconInTopBar) : o.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", v({}, n, {
						className: Object(d.a)(...o)
					}), s ? i.a.createElement(h.a, {
						name: "upload",
						className: _.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: _.a.emptyPlusButton
					}), e.children)
				},
				k = e => {
					const {
						iconColor: t,
						className: r,
						alt: s,
						role: n,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: n,
						src: c,
						className: Object(d.a)(r, {
							[_.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				w = Object(a.c)({
					isLoading: g.b
				});
			class E extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: _.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: _.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), r = i.a.createElement(i.a.Fragment, null, i.a.createElement(k, v({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, r) : r
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(y, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [_.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(_.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), r = this.renderEditButton();
					return r ? i.a.createElement("div", {
						className: _.a.flexContainer
					}, t, r) : t
				}
			}
			t.a = Object(o.b)(w, (e, t) => ({
				onFileSelected: (r, s) => {
					e(Object(c.a)(t.subreddit.id, r, s))
				}
			}))(Object(l.c)(E))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SubredditIcon/index.tsx"),
				a = r("./src/reddit/controls/OutboundLink/index.tsx"),
				d = r("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = r.n(d);
			const l = i.a.wrapped(o.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => n.a.createElement(a.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, r) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/RichTextJson/elements.tsx"),
				d = r("./src/higherOrderComponents/makeAsync.tsx"),
				c = r("./src/lib/loadWithRetries/index.ts"),
				l = r("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = r("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = r.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => r.e("SubredditMentionWithIcon").then(r.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return n.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, n.a.createElement(l.a, {
							href: `/r/${t}/`
						}, n.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, n.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = r("./src/reddit/selectors/subredditMention.ts");
			class x extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: r
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: r
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return n.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const _ = Object(b.c)(x),
				v = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				y = Object(i.b)(v),
				k = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: r,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!r || !t) return n.a.createElement(_, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (i) {
						case h.Vf.SmIcon:
							return n.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case h.Vf.SmIconHc:
							return n.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return n.a.createElement(_, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = y(k)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, r) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/featureFlags/component.tsx"),
				l = r("./src/reddit/selectors/widgets.ts"),
				u = r("./src/lib/linkMatchers/index.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				h = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				f = r("./src/telemetry/models/Outbound.ts"),
				g = r("./src/reddit/components/SubredditNav/index.m.less"),
				x = r.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = (e, t, r) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: r
				}),
				y = e => {
					let {
						children: t,
						isActive: r,
						isTopBannerVariant: s,
						...i
					} = e;
					return n.a.createElement("div", _({
						className: v(x.a.subNavTitle, r, s)
					}, i), n.a.createElement("span", null, t), n.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				k = e => {
					let {
						className: t,
						href: r,
						isActive: s,
						to: i,
						isTopBannerVariant: o,
						...a
					} = e;
					const d = v(x.a.navLink, s, o);
					return i ? n.a.createElement(m.a, _({
						className: d,
						to: i
					}, a)) : r ? n.a.createElement(b.b, _({
						className: d,
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: r
					}, a)) : n.a.createElement("a", _({
						className: d
					}, a))
				},
				w = e => {
					let {
						className: t,
						isActive: r,
						...s
					} = e;
					return n.a.createElement(m.a, _({
						className: Object(p.a)(v(x.a.navLink, r), t)
					}, s))
				},
				E = e => {
					let {
						className: t,
						href: r,
						isActive: s,
						...i
					} = e;
					return r ? n.a.createElement(b.b, _({
						className: v(x.a.subNavLink, s),
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: r
					}, i)) : n.a.createElement("a", _({
						className: v(x.a.subNavLink, s)
					}, i))
				},
				O = e => {
					let {
						className: t,
						...r
					} = e;
					return n.a.createElement("div", _({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, r))
				},
				j = e => {
					let {
						className: t,
						isOpen: r,
						...s
					} = e;
					return n.a.createElement("div", _({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: r
						})
					}, s))
				};
			class C extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return n.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, n.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), n.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var S = C;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? n.a.createElement(k, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : n.a.createElement(S, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => n.a.createElement(E, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				T = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/actions/subreddit.ts"),
				F = r("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), D = Object(o.c)({
				isActive: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Boolean(e.subreddits.appliedFilters.meta[r])
				},
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(T.Y)(e, {
						subredditId: r
					})
				}
			});
			var R = Object(i.b)(D, (e, t) => ({
					onActivate: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: r,
						onActivate: s
					} = e;
					const i = Object(F.a)();
					return t ? n.a.createElement(w, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: r,
						onClick: e => {
							Object(d.H)(i) && !Object(d.P)(i) && e.preventDefault(), s()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = r("./src/reddit/actions/economics/predictions/index.ts"),
				M = r("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				A = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				W = r("./src/reddit/helpers/trackers/predictions.ts"),
				H = r("./src/reddit/hooks/useTracking.ts"),
				U = r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const r = Object(i.d)(),
					o = Object(F.a)(),
					a = Object(H.a)(),
					d = Object(A.Q)(o),
					[c, l] = Object(s.useState)(!1),
					u = Object(i.e)(e => Object(T.Y)(e, {
						subredditId: t
					})),
					m = Object(i.e)(e => Object(T.S)(e, {
						subredditId: t
					})),
					p = Object(i.e)(e => Object(U.d)(e, {
						subredditId: t
					})),
					b = Object(i.e)(e => Object(U.e)(e, {
						subredditId: t
					}));
				Object(M.a)(t);
				return Object(s.useEffect)(() => {
					!m || c || p || d || (r(Object(B.m)(u.name)), l(!0))
				}, [m, c, p, d, r, u.name]), m && p ? n.a.createElement(w, {
					className: x.a.predictionsFilter,
					isActive: d,
					onClick: () => {
						r(Object(P.p)({
							subredditId: t,
							forceState: !1
						})), a(Object(W.i)())
					},
					to: `${u.url}predictions/`
				}, z._("Predictions", null, {
					hk: "Cv5GC"
				}), b && n.a.createElement("span", {
					className: x.a.liveIcon
				}, z._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var V = r("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const K = Object(d.u)(),
				J = [V.Sb.SUBREDDIT, V.Sb.COMMENTS, V.Sb.COLLECTION_COMMENTS],
				Y = Object(o.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.P)(t.pageLayer)
				});
			var Z = K(Object(i.b)(Y, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: s,
						isPredictionsPage: i,
						isTopBannerVariant: o,
						onTurnOffMetaFilter: a
					} = e, d = s && !r && !i;
					return n.a.createElement(k, {
						to: t,
						isActive: d,
						isTopBannerVariant: o,
						onClick: e => {
							r && (e.preventDefault(), a())
						}
					}, q._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				X = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Q = r("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Q.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = r("./src/reddit/constants/postLayout.ts"),
				te = r("./src/reddit/constants/screenWidths.ts"),
				re = r("./src/reddit/models/Theme/index.ts"),
				se = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const ne = Object(X.a)(e => {
				let {
					className: t,
					children: r,
					isTopBannerVariant: s,
					...i
				} = e;
				const o = Object(se.a)(i);
				return n.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: o.navBar.useOverlay && !s ? "relative" : "static",
						...o.navBar.useOverlay && !s ? {
							marginTop: -26
						} : {},
						background: s ? "inherit" : Object(re.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, r)
			});
			var ie = e => n.a.createElement(ne, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, n.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, n.a.createElement("div", null, e.children), n.a.createElement($, null))),
				oe = r("./src/reddit/constants/wiki.ts"),
				ae = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: s
				} = e, i = !!s && !!s.meta && s.meta.name === V.Sb.SUBREDDIT_WIKI, o = `wiki/${oe.i}`, a = t.endsWith("/") ? t + o : `${t}/${o}`;
				return n.a.createElement(k, {
					isActive: i,
					isTopBannerVariant: r,
					to: a,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", R),
				ue = Object(d.u)(),
				me = Object(o.c)({
					layout: d.S,
					widget: l.f
				}),
				pe = Object(i.b)(me);
			t.a = ue(pe(Object(a.c)(e => n.a.createElement(ie, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && n.a.createElement(n.a.Fragment, null, n.a.createElement(Z, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), n.a.createElement(le, {
				subredditId: e.subredditId
			}), n.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && n.a.createElement(n.a.Fragment, null, e.widget.showWiki && n.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => n.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: r,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("SubredditSearchCarousel").then(r.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(o.e)(a.e),
						r = Object(o.e)(a.a);
					return t || r ? i.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/isEqual.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				m = r("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = r("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = r("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = r("./src/reddit/components/IdCard/async.tsx"),
				g = r("./src/lib/isFakeSubreddit/index.ts"),
				x = r("./src/reddit/components/IdCard/helpers.ts"),
				_ = e => !Object(g.a)(e) || Object(x.e)(e) || Object(x.f)(e) || Object(x.g)(e),
				v = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/ModProgressModule/async.tsx"),
				k = r("./src/reddit/components/PowerupsSidebar/index.tsx"),
				w = r("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				E = r("./src/reddit/components/SidebarContainer/index.tsx"),
				O = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = r("./src/lib/makeListingKey/index.ts"),
				S = r("./src/reddit/actions/subreddit.ts"),
				N = r("./src/lib/classNames/index.ts"),
				I = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				T = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/helpers/name/index.ts"),
				F = r("./src/reddit/helpers/overlay/index.ts"),
				L = r("./src/reddit/selectors/experiments/topPosts.ts"),
				D = r("./src/reddit/selectors/posts.ts"),
				R = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const B = .99;
			class M extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: r
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= B && t(r)
					}
				}
				render() {
					return a.a.createElement(R.a, {
						threshold: B,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var A = M,
				W = r("./src/lib/isUrl/index.ts"),
				H = r("./src/lib/prettyPrintNumber/index.ts"),
				U = r("./src/reddit/components/FlairWrapper/index.tsx"),
				z = r("./src/reddit/components/Thumbnail/index.tsx"),
				G = r("./src/reddit/models/Flair/index.ts"),
				V = r("./src/reddit/models/Subreddit/index.ts"),
				q = r("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				K = r.n(q);
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Y = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, Z = Object(c.c)({
				post: D.G,
				subredditOrProfile: D.V
			});
			class X extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: r
						} = this.props;
						e(t), r && r(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: r
						} = this.props;
						e.stopPropagation(), r && r(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: r,
						showSubredditName: s,
						subredditOrProfile: n
					} = this.props, i = {
						post: t
					}, o = Object(W.a)(Object(z.c)(i)), d = t.flair.filter(Y);
					return a.a.createElement("div", {
						className: Object(N.a)(K.a.container, e, {
							[K.a.redditStyle]: r
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: K.a.mainLine
					}, o && a.a.createElement("div", {
						className: K.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(z.b, i)), a.a.createElement("div", {
						className: Object(N.a)(K.a.title, !o && K.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(U.a, {
						className: K.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: K.a.metaLine
					}, s && !!n && a.a.createElement("span", {
						className: K.a.meta
					}, Object(V.i)(n) ? Object(P.e)(n.displayText || n.name) : Object(P.d)(n.displayText || n.name)), a.a.createElement("span", {
						className: K.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(H.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: K.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(H.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Q = Object(d.b)(Z, e => ({
					openLightbox: t => e(Object(F.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(X),
				$ = r("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = 10, se = 2, ne = Object(c.a)(D.N, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class oe extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: r
						} = this.props, [s] = r;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || re, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((r, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: r.chunkIdx < e - 1 ? r.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: r,
							onPostVisible: s,
							redditStyle: n,
							smallPostClassName: i
						} = this.props;
						return a.a.createElement(A, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, a.a.createElement(Q, {
							className: Object(N.a)(ee.a.smallPost, i),
							containerOnClick: r,
							postId: e.id,
							redditStyle: n,
							showSubredditName: Object(g.a)(Object(P.i)(t)),
							thumbnailOnClick: r
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: r,
						moreButtonText: s,
						onPostVisible: n,
						posts: i,
						redditStyle: o,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(L.a)(c),
						p = Object(L.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[f, ...x] = h,
						_ = b ? h.slice(0, se) : x.slice(0, se),
						v = b ? h.slice(se) : x.slice(se);
					return a.a.createElement("div", {
						className: Object(N.a)(ee.a.container, t, {
							[ee.a.redditStyle]: o
						})
					}, !b && a.a.createElement(A, {
						onPostVisible: n,
						postId: f.id
					}, a.a.createElement(I.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(P.i)(r)),
						trendingPost: f
					})), _.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && a.a.createElement(T.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, s || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(ie, e => ({
					openPost: t => e(Object(F.a)(t.permalink))
				}))(oe),
				de = r("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = r("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ue = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = r("./src/reddit/selectors/discoveryUnit.ts"),
				pe = r("./src/reddit/selectors/subreddit.ts"),
				be = r("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = r.n(be);
			const fe = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(C.a)(e, l.bb.TOP, {
					t: l.oc.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const r = ge(e, t);
						return Object(D.N)(e, {
							listingKey: r
						})
					},
					subreddit: pe.C
				});
			class _e extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(le.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: r
						} = this.props;
						t && this.props.sendEvent(Object(le.q)(t, e, void 0, r))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: r
						} = this.props;
						t && this.props.sendEvent(Object(le.t)(t, e, void 0, r))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: r,
						loadMorePosts: n,
						posts: i,
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = o,
						l = i.length > fe;
					return a.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(ae, {
						listingKey: r,
						listingName: c,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, a.a.createElement("div", null, e)))
				}
			}
			var ve = Object(d.b)(xe, (e, t) => {
					let {
						subredditName: r
					} = t;
					return {
						loadMorePosts: () => e(Object(S.r)({
							sort: l.bb.TOP,
							subredditName: r,
							t: l.oc.WEEK
						}))
					}
				})(Object(de.c)(_e)),
				ye = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ke = r("./src/reddit/constants/tracking.ts"),
				we = r("./src/reddit/selectors/seo/linksModule.ts"),
				Ee = r("./src/reddit/selectors/telemetry.ts"),
				Oe = r("./src/telemetry/models/Subreddit.ts");
			const je = e => t => ({
					...Ee.o(t),
					action: ke.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = e => t => r => ({
					...Ee.o(r),
					action: ke.c.CLICK,
					noun: Object(Oe.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Se = Object(c.c)({
					communities: we.c
				});
			var Ne = Object(d.b)(Se)(e => {
					const t = Object(de.b)();
					return e.communities && e.communities.length ? a.a.createElement(O.a, null, a.a.createElement(ye.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: je,
						getSubscribeEventFactoryHandler: Ce,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Ie = r("./src/reddit/components/Widgets/Widget/index.tsx"),
				Te = r("./src/reddit/constants/experiments.ts"),
				Pe = r("./src/reddit/featureFlags/index.ts"),
				Fe = r("./src/reddit/helpers/createBannerProperties/index.ts"),
				Le = r("./src/reddit/models/Widgets/index.ts"),
				De = r("./src/reddit/selectors/communityFlairs.ts"),
				Re = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Be = r("./src/reddit/selectors/listings.ts"),
				Me = r("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ae = r.n(Me);
			const We = 250,
				He = 270,
				Ue = u.a.wrapped(E.a, "SidebarContainer", Ae.a),
				ze = Object(c.c)({
					apiError: Be.c,
					apiPending: Be.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(De.b)(e, r)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(De.c)(e, r)
					},
					isInNewModuleNCPV3Experiment: e => Object(Re.a)(e) === Te.Ve.NewModule,
					showGovernance: Pe.d.spPoints,
					showLeaderboard: Pe.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(pe.R)(e, {
							subredditId: r
						}) && !Object(pe.S)(e, {
							subredditId: r
						})
					},
					widgets: pe.x
				}),
				Ge = Object(d.b)(ze);
			class Ve extends o.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const r = this.getRelatedCommunitiesWidgetData();
						return r ? {
							id: "related-communities-widget",
							kind: Le.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: r
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Le.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Le.g.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, r = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || r
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: r,
						showGovernance: s,
						showLeaderboard: n,
						showPredictionsLeaderboard: i,
						subredditId: o,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const g = Object(L.a)(c),
						x = Object(L.b)(c),
						E = Object(L.c)(c),
						C = g || x;
					let S, N;
					!!this.getPostFlairWidget() ? S = this.props.widgets : (S = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const I = this.makeRelatedCommunitiesWidget(g, x),
						T = !g,
						P = x,
						F = a.a.createElement(w.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Fe.a.FIRST,
							sizes: l.j
						});
					return a.a.createElement(Ue, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, r && a.a.createElement(y.a, {
						subredditId: o,
						subredditName: d
					}), _(t) && a.a.createElement(f.a, {
						listingName: t
					}), a.a.createElement(p.a, {
						cardClassName: Ae.a.card,
						subredditId: o
					}), a.a.createElement(k.a, {
						subredditId: o
					}), i && a.a.createElement(m.a, {
						subredditId: o
					}), C && a.a.createElement(O.a, null, a.a.createElement(ve, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: Ae.a.inFeedAd
					}, F))), C && I && a.a.createElement(O.a, null, a.a.createElement(Ie.a, {
						subredditName: d,
						truncateThreshold: He,
						widget: I
					})), P && S.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Ie.a, {
							subredditName: d,
							truncateThreshold: We,
							widget: e
						}))
					}), s && a.a.createElement(b.a, {
						className: Ae.a.card,
						subredditId: o
					}), N && a.a.createElement(O.a, null, a.a.createElement(Ie.a, {
						subredditName: d,
						widget: N
					})), n && a.a.createElement(h.a, {
						className: Ae.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(v.g, {
						subredditId: o
					}), !C && F, a.a.createElement(Ne, {
						subredditId: o
					}), T && !P && S.map((e, t) => {
						const r = "community-list" === e.kind;
						return a.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Ie.a, {
							subredditName: d,
							truncateThreshold: E && r ? He : E ? We : void 0,
							widget: e
						}))
					}), a.a.createElement(j.a, {
						adComponent: a.a.createElement(w.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Fe.a.BOTTOM,
							sizes: l.q
						})
					}))
				}
			}
			t.a = Ge(Ve)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, r) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				a = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(a);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return n.a.createElement("div", r, n.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				m = r("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/icons/fonts/index.tsx"),
				_ = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				E = r.n(w);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => i.a.createElement(b.a, {
					className: Object(c.a)(E.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: E.a.container
				}, e.isLoading ? i.a.createElement(g.a, {
					className: E.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: E.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, O({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.t, {
					className: E.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				C = Object(d.c)({
					hideNSFWPref: y.F,
					nightmode: y.db
				}),
				S = Object(o.b)(C)(e => i.a.createElement("div", {
					className: Object(c.a)(E.a.communityItemContainer, {
						[E.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(_.a, {
					className: E.a.communityItemExpandCenter,
					widthRight: h.s
				}, i.a.createElement("div", {
					className: E.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: E.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(E.a.defaultCommunityIcon, {
						[E.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: E.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: E.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(k.b)(e.name, e.type),
					to: Object(k.a)(e.name, e.type)
				}, Object(k.b)(e.name, e.type)), i.a.createElement("div", {
					className: E.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: E.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: E.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(g.a, {
					className: Object(c.a)(E.a.communityCta, E.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: E.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: E.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/posts.ts"),
				n = r("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(n.e)(e) : Object(n.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, r) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, r) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, r) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, r) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/fastdom/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/Flair/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/flair.ts"),
				_ = r("./src/reddit/helpers/trackers/postFlair.ts"),
				v = r("./src/reddit/models/Widgets/index.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				k = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				w = r.n(k);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 129,
				j = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.i],
					url: e => Object(h.db)(e)
				}),
				C = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				S = Object(o.b)(C),
				N = l.a.div("WidgetContent", w.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: r,
						onMouseDown: s,
						onClick: n,
						...o
					} = e;
					return i.a.createElement("li", {
						className: Object(d.a)(w.a.StyledFlair, t === v.g.Cloud && w.a.cloudDisplay, {
							[w.a.flairFilter]: r,
							[w.a["m-selected"]]: o.isSelected
						}),
						onClick: () => null == n ? void 0 : n(Object(x.g)(o.flair)),
						onMouseDown: s
					}, i.a.createElement(u.b, E({}, o, {
						className: w.a.Flair,
						isFlairFilter: r,
						forceSmallEmojis: !0
					})))
				};
			class T extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(_.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(_.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(_.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(_.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > O && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(f.r, {
						className: w.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(I, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, r = t ? O : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: w.a.flairFilterContainer,
						style: {
							maxHeight: r
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(I, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: r
					} = this.state, s = t.order, n = this.getFlairsFromIds(s), o = e && this.getSelectedFlair(n) || void 0, a = t.order.length > s.length || r && !o;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(n), a && this.renderButton()))
				}
			}
			t.a = j(S(Object(m.c)(T)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/index.tsx"),
				u = r("./src/reddit/helpers/dom/index.ts"),
				m = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = r("./src/reddit/models/Widgets/index.ts"),
				h = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = r.n(h);
			const g = d.a.div("RuleShortName", f.a),
				x = d.a.div("RuleIndex", f.a),
				_ = d.a.div("RuleTitle", f.a),
				v = d.a.div("RuleDescription", f.a),
				y = d.a.wrapped(c.a, "RawHTMLDisplay", f.a),
				k = {};
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: r,
						shouldShowFullDisplay: s
					} = this, n = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !s(e) && !!n;
					return i.a.createElement(g, {
						className: Object(a.a)({
							[f.a.pointerCursor]: o,
							[f.a.cleanStyle]: e.cleanStyle
						}),
						onClick: s(e) || !n ? void 0 : r
					}, i.a.createElement(p.a, null, i.a.createElement(x, {
						className: Object(a.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), i.a.createElement(_, null, `${e.rule.shortName}`), i.a.createElement("div", null, !s(e) && n && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(v, {
						className: Object(a.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? i.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: k
					}) : e.rule.descriptionHtml ? i.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const E = e => e.rules.length > 0 ? i.a.createElement(o.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, r) {
				return i.a.createElement(w, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: r + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(E, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/widgets.ts"),
				b = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = r("./src/reddit/selectors/experiments/topPosts.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/models/Theme/index.ts"),
				_ = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = v(e);
					return Object(x.f)(t)
				},
				w = e => {
					const t = y(e);
					return Object(x.f)(t)
				};
			var E = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = r.n(E);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.u)(), S = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: r
						}),
						n = Object(g.db)(e);
					return s || n
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: s,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = r ? O.a.widgetContentOnly : O.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: s,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: g
					}, u && n.a.createElement("div", {
						className: Object(a.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: o,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(O.a.widgetTitle, p)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), n.a.createElement("div", {
						className: Object(a.a)(h, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = C(S(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Be
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/controls/OutboundLink/index.tsx"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/linkMatchers/index.ts"),
				b = r("./src/reddit/helpers/widgets/index.tsx"),
				h = r("./src/reddit/models/Image/index.tsx"),
				f = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = r("./src/reddit/models/Widgets/index.ts"),
				x = r("./src/reddit/selectors/structuredStyles.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				v = r("./src/telemetry/models/Outbound.ts"),
				y = r("./src/reddit/components/Widgets/Button/index.m.less"),
				k = r.n(y);
			const w = (e, t, r) => {
					let s = {},
						n = {};
					s = e.kind === g.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: s,
							fillColor: n,
							textColor: i
						} = e;
						return t && (s = i = r, n = "transparent"), {
							"--widget-button-background-color": `${n||"transparent"}`,
							"--widget-button-border": `1px solid ${s}`,
							"--widget-button-color": `${i||s}`
						}
					})(e, t, r);
					const i = e.hoverState || e;
					if (i.kind === g.k.Image) n = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: o
						} = i;
						t && (e = o = r, s = "transparent"), n = {
							"--widget-button-hover-background-color": `${s||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${o||e}`
						}
					}
					return {
						...s,
						...n
					}
				},
				E = e => e.kind === g.k.Image ? k.a.imageButton : k.a.textButton,
				O = e => {
					const t = Object(b.h)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				j = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, s = Object(f.a)(e).button;
					return n.a.createElement(c.t, {
						className: E(t),
						style: w(t, r, s),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === g.k.Text && n.a.createElement("span", {
						className: t.hoverState ? k.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && n.a.createElement("span", {
						className: k.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				C = e => n.a.createElement(l.b, {
					href: O(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, n.a.createElement(j, e)),
				S = m.a.wrapped(a.a, "RawHTMLDisplay", k.a);
			var N = Object(i.b)(() => Object(o.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: _.db
				}))(e => n.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && n.a.createElement(S, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== h.c)).map(t => n.a.createElement(C, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				T = r("./src/reddit/components/HumanDate/index.tsx"),
				P = r("./src/reddit/controls/TextButton/index.tsx"),
				F = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = r.n(F);
			const D = 100,
				R = {
					isExpanded: !1
				},
				B = m.a.wrapped(a.a, "RawHTMLDisplay", L.a),
				M = m.a.div("EventContainer", L.a),
				A = m.a.div("EventTitle", L.a),
				W = m.a.div("EventDate", L.a),
				H = m.a.div("EventLocation", L.a),
				U = m.a.div("EventDescription", L.a),
				z = m.a.wrapped(P.a, "ToggleDescription", L.a);
			class G extends n.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = R
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > D ? n.a.createElement(U, null, t.isExpanded ? e.text : e.text.slice(0, D), n.a.createElement(z, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : n.a.createElement(U, null, e.text)
				}
			}
			var V = e => n.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => n.a.createElement(M, {
					key: `${r}-${t.title}`
				}, n.a.createElement(A, null, t.titleHtml ? n.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && n.a.createElement(W, null, n.a.createElement(T.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && n.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? `${r}:0${s}` : `${r}:${s}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && n.a.createElement(H, null, t.locationHtml ? n.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && n.a.createElement(G, {
					text: t.description
				})))),
				q = r("./src/reddit/components/TrackingHelper/index.tsx"),
				K = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(q.c)(e => n.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(o.c)({
					stylesheet: e => e.stylesheets
				}),
				Z = Object(i.b)(Y),
				X = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class Q extends n.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				UNSAFE_componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = X(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, n.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var $ = Z(Q),
				ee = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = r.n(ee);
			var re = m.a.div("ImageFrame", te.a),
				se = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = r.n(se);
			var ie = m.a.img("StyledImage", ne.a);
			class oe extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: r
					} = this;
					e.subredditName === t.subredditName && e.widget.data[r.imageIndex] && e.widget.data[r.imageIndex] === t.widget.data[r.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const r = e.widget.data[t.imageIndex],
						s = n.a.createElement(re, null, n.a.createElement(ie, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? n.a.createElement(l.b, {
						href: r.linkUrl
					}, s) : s
				}
			}
			var ae = oe,
				de = r("./src/config.ts"),
				ce = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = r("./src/lib/opener/index.ts"),
				ue = r("./src/reddit/components/Flair/index.tsx"),
				me = r("./src/reddit/controls/InternalLink/index.tsx"),
				pe = r("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = r("./src/reddit/models/Flair/index.ts"),
				he = r("./src/reddit/selectors/subreddit.ts"),
				fe = r("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = r.n(fe);
			const xe = m.a.a("ExternalLink", ge.a),
				_e = m.a.div("ModeratorListItem", ge.a),
				ve = m.a.div("Username", ge.a),
				ye = m.a.wrapped(ue.b, "FlairComponent", ge.a),
				ke = e => e.authorFlairType === be.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				we = e => n.a.createElement(ve, null, `u/${e}`),
				Ee = m.a.wrapped(me.default, "InternalLink", ge.a),
				Oe = m.a.div("LinkContainer", ge.a),
				je = Object(o.c)({
					userIsBanned: he.ib,
					userIsLoggedIn: _.Q
				});
			var Ce = Object(i.b)(je)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: s,
						userIsLoggedIn: i
					} = e;
					return n.a.createElement(d.a, {
						styles: r.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || s) && n.a.createElement(c.t, {
						kind: c.b.InternalLink,
						priority: c.c.Secondary,
						className: ge.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${de.a.redditUrl}/message/compose?to=/r/${t}`
					}, n.a.createElement(pe.a, {
						className: ge.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !s ? n.a.createElement(n.a.Fragment, null, r.mods.map(e => n.a.createElement(_e, {
						key: e.name
					}, (e => n.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, we(e.name)))(e), n.a.createElement(ye, {
						flair: ke(e),
						forceSmallEmojis: !0
					}))), n.a.createElement(Oe, null, n.a.createElement(Ee, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : s || !i ? n.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", n.a.createElement(xe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : n.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", n.a.createElement(xe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Se = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Te = r.n(Ie);
			const Pe = m.a.div("WidgetContent", Te.a),
				Fe = m.a.wrapped(a.a, "RawHTMLDisplay", Te.a);
			var Le = e => n.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, n.a.createElement(Pe, null, n.a.createElement(Fe, {
					html: e.widget.textHtml || ""
				}))),
				De = r("./src/reddit/components/Widgets/Base/index.tsx");
			var Re = e => n.a.createElement(De.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ce;
						case "textarea":
							return Le;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return J;
						case "calendar":
							return V;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return Se.a;
						default:
							return Re
					}
				}(e.widget);
				return n.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, r) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, r) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/post.ts"),
				o = r("./src/reddit/actions/postFlair.ts"),
				a = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/selectors/activeModalId.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				m = r("./src/reddit/selectors/postFlair.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.W,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: c.U,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: r
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: r,
							previewFlair: s,
							selectedTemplateId: n
						} = t;
						return e(Object(o.h)({
							post: r,
							previewFlair: s,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const s = t === d.a.upvoted ? Object(i.jb)(r) : Object(i.v)(r);
						e(s)
					},
					onIgnoreReports: () => e(Object(i.fb)(r)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}
			}, (e, t, r) => ({
				...r,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: n
					} = e;
					return t.dispatchFlairChanged({
						post: r.post,
						previewFlair: s,
						selectedTemplateId: n
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/SubredditWiki.json");
			const i = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/featureFlags/index.ts");

			function d(e, t, r) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, o = i;
					return s ? n.a.createElement(t, o) : void 0 !== r ? n.a.createElement(r, o) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const r = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === s.b.NO_ADS);
				return !r && !n
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./src/lib/isFakeSubreddit/index.ts"), r("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var s;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(s || (s = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = r.n(n);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/isPost.ts"),
				o = r("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: r
				} = e;
				if (t && (Object(n.b)(t) || Object(i.b)(t))) return Object(n.b)(t) ? o.SourceElement.Comment : Object(s.x)(r) ? o.SourceElement.PostDetail : Object(s.H)(r) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "q", (function() {
				return a
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "r", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "f", (function() {
				return w
			}));
			var s = r("./src/reddit/models/Prediction/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				o = "predictions",
				a = e => ({
					...Object(n.o)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				d = e => {
					let {
						pollId: t,
						selectedNumberCoins: r,
						totalStakeAmount: s
					} = e;
					return e => ({
						...Object(n.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(n.J)(e, t, !1, void 0, r),
						goldPurchase: {
							numberCoins: s
						}
					})
				},
				c = e => {
					let {
						pollId: t,
						selectedNumberTokens: r
					} = e;
					return e => ({
						...Object(n.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(n.J)(e, t, !1, void 0, void 0, r)
					})
				},
				l = e => {
					let {
						pollId: t,
						currency: r,
						amount: o
					} = e;
					return e => {
						const a = r === s.a.Coins ? o : void 0,
							d = r === s.a.Tokens ? o : void 0;
						return {
							...Object(n.o)(e),
							source: i,
							action: "close",
							noun: "prediction_modal",
							poll: Object(n.J)(e, t, !1, a, d)
						}
					}
				},
				u = e => ({
					...Object(n.o)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				m = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(n.o)(e),
						source: o,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				p = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(n.o)(e),
						source: o,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				b = () => e => ({
					...Object(n.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				h = () => e => ({
					...Object(n.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				f = () => e => ({
					...Object(n.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				g = e => t => ({
					...Object(n.o)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(n.jb)(t)
				}),
				x = () => e => ({
					...Object(n.o)(e),
					source: o,
					action: "click",
					noun: "next"
				}),
				_ = () => e => ({
					...Object(n.o)(e),
					source: o,
					action: "click",
					noun: "add_more"
				}),
				v = () => e => ({
					...Object(n.o)(e),
					source: o,
					action: "click",
					noun: "start_tournament"
				}),
				y = () => e => ({
					...Object(n.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				k = () => e => ({
					...Object(n.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(n.jb)(e)
				}),
				w = () => e => ({
					...Object(n.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(n.jb)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return k
			}));
			var s, n, i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/helpers/isComment.ts"),
				a = r("./src/reddit/helpers/isPost.ts"),
				d = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(n || (n = {}));
			const m = e => ({
					...u.o(e),
					source: n.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: n,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: r,
						subredditName: s
					} = t;
					if (!r || !Object(a.b)(r) && !Object(o.b)(r)) return {
						outbound: void 0
					};
					const n = Object(a.b)(r) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[n]: r.id
						},
						c = Object(l.C)(e, {
							subredditName: s
						});
					return c ? {
						outbound: {
							...i,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: r
					} = t;
					if (!r || !Object(a.b)(r) && !Object(o.b)(r)) return {};
					const s = Object(a.b)(r) ? r.belongsTo.id : r.subredditId;
					return {
						post: u.K(e, r.id),
						subreddit: u.kb(e, s),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				g = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				x = (e, t) => r => ({
					...p(r),
					source: n.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.K(r, t),
					subreddit: u.lb(r, e),
					screen: u.bb(r)
				}),
				_ = (e, t) => r => ({
					...p(r),
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.K(r, t),
					subreddit: u.lb(r, e),
					screen: u.bb(r)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				k = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var s, n, i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => r => ({
					source: n.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.xb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => r => ({
					source: n.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.K(r, e),
					subreddit: o.jb(r),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.o(r)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.o(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/sortBy.js"),
				n = r.n(s),
				i = r("./src/reddit/constants/wiki.ts");
			const o = e => {
				return n()(e, e => `${e.path}/`.startsWith(`${i.i}/`) ? `\0${e.path}` : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					r = [];
				return o(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						n = s.parent ? t.get(s.parent) : null;
					n ? n.children.push(s) : r.push(s), t.set(s.path, s)
				}), r
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: r,
					subredditName: s,
					wikiPageName: n
				} = e;
				return `[${s}]--[${n}]--[rev1:${r}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/reddit/constants/wiki.ts");
			const n = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				i = /^[-\w]+$/;
			var o;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(o || (o = {}));
			const a = e => {
					if (!i.test(e.toLowerCase())) return o.InvalidPageName
				},
				d = (e, t) => {
					const r = e.toLowerCase(),
						i = r.split("/")[0],
						a = s.b.has(i),
						d = s.f.has(i) && r !== s.h && r !== s.k;
					if (a || d) return o.RestrictedPageName;
					if (!n.test(r)) return o.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === r)) return o.PageAlreadyExists
					}
					return r.length > s.d ? o.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				n = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), n.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), n.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), n.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), n.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), n.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), n.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, r) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(a);
			t.a = Object(i.a)(e => n.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(n || (n = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/pages/shared.ts"),
				d = r("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = r("./src/reddit/components/ContentGate/index.tsx"),
				l = r("./src/reddit/components/HeaderImage/index.tsx"),
				u = r("./src/lib/constants/index.ts"),
				m = r("./src/lib/makeListingKey/index.ts"),
				p = r("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: r
					} = e, s = Object(m.a)(r, u.bb.HOT, {});
					return n.a.createElement(p.a, {
						listingKey: s,
						listingName: r.toLowerCase(),
						subredditId: t.id,
						subredditName: r
					})
				},
				h = r("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				f = r("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				g = r("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = r("./src/reddit/constants/parameters.ts"),
				_ = r("./src/reddit/constants/wiki.ts"),
				v = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = r("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				w = r("./src/reddit/components/JumpToContent/index.tsx"),
				E = r("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				O = r("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = r("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				C = r.n(j);

			function S(e) {
				const {
					wikiPageName: t,
					subredditName: r
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(w.a, null), s.createElement(O.a, {
					isModHub: !1,
					className: C.a.topBar,
					wikiPageName: t,
					subredditName: r
				}), s.createElement(E.a, {
					showRevisionInfo: !0,
					subredditName: r,
					wikiPageName: t
				}))
			}
			var N = r("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				I = r.n(N);
			class T extends n.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: r,
						queryParams: s
					} = e, {
						wikiSubRoute: i,
						wikiPageName: o
					} = r, a = s[x.S], d = s[x.T], c = x.U in s;
					switch (i) {
						case _.m.Create:
						case _.m.Edit:
							return n.a.createElement(f.a, {
								contentClassName: I.a.wikiPageEditorContent,
								isCreation: i === _.m.Create,
								subredditName: t,
								topBarClassName: I.a.communityWikiTopBar,
								wikiPageName: o
							});
						case _.m.Revisions:
							return n.a.createElement(k.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? n.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? n.a.createElement(g.a, {
								revisionId: a ? Object(y.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? n.a.createElement(S, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var P = Object(v.u)()(T),
				F = r("./src/reddit/constants/componentSizes.ts"),
				L = r("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				D = r("./src/reddit/layout/page/Listing/index.tsx"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				B = r("./src/reddit/selectors/user.ts");
			const M = Object(v.u)(),
				A = Object(i.b)(() => Object(o.c)({
					contentGateInfo: (e, t) => {
						let {
							match: r
						} = t;
						return Object(B.f)(e, r.params.subredditName)
					},
					layout: v.S,
					over18Pref: B.kb,
					subreddit: (e, t) => {
						let {
							match: r
						} = t;
						return Object(R.C)(e, {
							subredditName: r.params.subredditName || _.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: r
						} = t;
						return r.params.subredditName || _.e
					},
					wikiPageName: (e, t) => {
						let {
							match: r
						} = t;
						return r.params.wikiPageName || _.i
					}
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class W extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: r,
						subredditName: s
					} = this.props, i = !!r && r.isNSFW && !B.kb, o = Object(L.a)(t, i, s);
					if (o) return n.a.createElement(c.default, o);
					const a = `/r/${s}/`;
					return n.a.createElement(D.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: F.h,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: r ? r.name : s,
							maxWidth: F.h,
							subredditOrProfile: r,
							url: a
						}), n.a.createElement(d.a, {
							subreddit: r || void 0,
							subredditId: r ? r.id : void 0,
							subredditName: s,
							subredditUrl: a
						})),
						content: n.a.createElement(P, {
							subredditName: s
						}),
						sidebar: r && n.a.createElement(b, {
							subreddit: r,
							subredditName: s
						})
					})
				}
			}
			t.default = M(A(W))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/constants/postLayout.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => n.e[Object(i.S)(e, {})] === n.d.Card,
				d = e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.xb
				}) === s.Tc.Treatment
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/experiments/utils.ts"),
				a = r("./src/reddit/selectors/meta.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.uc
				}), o.a),
				l = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.tc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = ["t5_395yw", "t5_2zkfk", "t5_3o3fz", "t5_2rzot", "t5_2w2lq", "t5_3ii04", "t5_3hn0l", "t5_2qh8h", "t5_3g6wm", "t5_3ntes", "t5_35aia", "t5_2r8ok", "t5_iygqf", "t5_2qutz", "t5_2qkhb", "t5_2r78m", "t5_2qkob", "t5_hwfuo", "t5_2tfgu", "t5_2u8vt", "t5_vnwft", "t5_3izzds", "t5_gofqg"],
				a = (e, t) => c(e) && d(t),
				d = e => o.includes(e),
				c = Object(s.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: n.oe
				}), e => e === n.Rd)
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			const a = e => n.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Pf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.Vf.SmIcon || t === s.Vf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: r
					} = t;
					return !!e.subreddits.api.models.pending[r]
				},
				u = (e, t) => {
					let {
						subredditName: r
					} = t;
					return !!e.subreddits.api.models.error[r]
				},
				m = (e, t) => {
					let {
						subredditName: r
					} = t;
					const s = Object(o.cb)(e, {
						subredditName: r
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "p", (function() {
				return c
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return k
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				o = (e, t) => {
					var r;
					const {
						subredditName: s
					} = t;
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				a = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.subreddits.api.wiki.pending[r.toLowerCase()]
				},
				d = (e, t) => {
					var r;
					const s = Object(n.a)(t);
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				c = (e, t) => {
					let {
						listingKey: r
					} = t;
					return e.pages.subredditWiki.revisions.listings[r]
				},
				l = (e, t) => {
					let {
						listingKey: r
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[r]
				},
				u = (e, t) => {
					let {
						listingKey: r
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[r]
				},
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, t) => {
					let {
						key: r
					} = t;
					return e.pages.subredditWiki.diff[r]
				},
				b = (e, t) => {
					const r = Object(n.a)(t);
					return e.pages.subredditWiki.pageSettings[r]
				},
				h = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[r.toLowerCase()]
				},
				f = Object(s.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const s = r.toLowerCase(),
						n = e.pages.subredditWiki.wikiContributors.listing,
						o = n.userOrder[s],
						a = n.models[s];
					return o ? o.map(e => a[e]) : i
				}),
				g = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[r.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[r.toLowerCase()]
				},
				_ = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[r.toLowerCase()]
				},
				v = Object(s.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const s = r.toLowerCase(),
						n = e.pages.subredditWiki.wikiBannedContributors.listing,
						o = n.userOrder[s],
						a = n.models[s];
					return o ? o.map(e => a[e]) : i
				}),
				y = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[r.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[r.toLowerCase()]
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/redditGQL/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/redditGQL/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/redditGQL/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		},
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.ded6693e9af8bb520f94.js.map