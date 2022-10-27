// https://www.redditstatic.com/desktop2x/SubredditWiki.ff97829e7211c674189a.js
// Retrieved at 10/27/2022, 3:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
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
					var r, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						g = !i && !l && /macintosh/i.test(t),
						f = !o && !u && !m && !p && /linux/i.test(t),
						x = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = n(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !v && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: _ || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: _ || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (r.msedge = e, r.version = x) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? r = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, _ && (r.version = _)) : i ? (r = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, _ && (r.version = _)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && _ && (r.version = _)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !o && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : g ? (r.mac = e, r.osname = "macOS") : k ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : f && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var E = "";
					r.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var w = !r.windows && E.split(".")[0];
					return v || d || "ipad" == i || o && (3 == w || w >= 4 && !y) || r.silk ? r.tablet = e : (y || "iphone" == i || "ipod" == i || o || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function i(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = r(e, (function(e) {
							var n = t - s(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, s, r) {
					var o = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (o = t(r));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = o, n.compareVersions = i, n.check = function(e, t, n) {
					return !o(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function s(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === r(e)
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
						validate: function(e, t, n) {
							var s = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(s) ? s.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var s = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(s) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : s.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var s = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(s) ? s.match(n.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
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
					var n = e.__schemas__[t];
					if (null !== n) {
						var s = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = s, "[object Object]" === r(n)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(n.validate) ? i(n.validate) ? s.validate = n.validate : l(t, n) : s.validate = function(e) {
							return function(t, n) {
								var s = t.slice(n);
								return e.test(s) ? s.match(e)[0].length : 0
							}
						}(n.validate), void(i(n.normalize) ? s.normalize = n.normalize : n.normalize ? l(t, n) : s.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(n) ? l(t, n): d.push(t)
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
				var n = e.__index__,
					s = e.__last_index__,
					r = e.__text_cache__.slice(n, s);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = s + t, this.raw = r, this.text = r, this.url = r
			}

			function p(e, t) {
				var n = new m(e, t);
				return e.__compiled__[n.schema].normalize(n, e), n
			}

			function b(e, t) {
				if (!(this instanceof b)) return new b(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = s({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = s({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = s(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, s, r, i, o, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (s = e.match(this.re.email_fuzzy)) && (i = s.index + s[1].length, o = s.index + s[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o)), this.__index__ >= 0
			}, b.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, b.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, b.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var s = t ? e.slice(t) : e; this.test(s);) n.push(p(this, t)), s = s.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, b.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, b.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, b.prototype.onCompile = function() {}, e.exports = b
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = n("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = n("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = n("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = n("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, r, i) {
				for (var o = -1, a = s(n((t - e) / (r || 1)), 0), d = Array(a); a--;) d[i ? a : ++o] = e, e += r;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, i) {
					n = s ? (s = !1, e) : t(n, e, r, i)
				})), n
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && r(t, n, o) && (n = o = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), o = void 0 === o ? t < n ? 1 : -1 : i(o), s(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toFinite.js"),
				o = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (n || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + o("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : o,
					c = arguments.length < 3;
				return d(e, i(t, 4), n, c, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var n = a,
					c = d(e, a);
				t = r(t), e -= a;
				for (var l = s(c, t); ++n < e;) t(n);
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
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const i = Object(r.e)(e),
					o = encodeURIComponent(`${t}${i}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), n.d(t, "subredditWikiDataLoaded", (function() {
				return Ve
			})), n.d(t, "subredditWikiDataFailed", (function() {
				return qe
			})), n.d(t, "fetchSubredditWikiData", (function() {
				return Ze
			})), n.d(t, "handleWikiRedirects", (function() {
				return Xe
			})), n.d(t, "subredditWikDataRequested", (function() {
				return Qe
			})), n.d(t, "subredditWikiPageRequested", (function() {
				return $e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEmpty.js"),
				i = n.n(r),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				m = n("./src/reddit/helpers/path/index.ts");
			var p = n("./src/reddit/actions/ads/index.ts"),
				b = n("./src/reddit/actions/pages/subreddit.ts"),
				h = n("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				x = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				v = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = n("./src/redditGQL/operations/WikiComparisonDiff.json");
			var k = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				E = n("./src/reddit/selectors/subredditWiki.ts");
			const w = Object(d.a)("WIKI_DIFF_PENDING"),
				O = Object(d.a)("WIKI_DIFF_LOADED"),
				C = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, n, s) => {
					const r = n(),
						i = Object(k.a)(e),
						o = Object(E.i)(r, {
							key: i
						});
					if (o && (o.pending || !o.error)) return !0;
					const d = {
						key: i
					};
					t(w(d));
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
							n = t && t.page && t.page.revisionComparisonDiffHtml;
						n ? u = n : l = {
							type: a.L.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: a.L.UNKNOWN_ERROR
					};
					return t(l ? C({
						...d,
						error: l
					}) : O({
						...d,
						htmlDiff: u
					})), !l
				};
			var S = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				N = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				I = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/constants/wiki.ts"),
				P = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				D = n("./src/reddit/helpers/brandSafety/index.ts"),
				L = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				F = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				A = n("./src/lib/initializeClient/installReducer.ts"),
				W = n("./node_modules/redux/es/redux.js");
			const H = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: n,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[n]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
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
							const n = t.payload,
								{
									subredditWiki: s,
									options: r
								} = n,
								i = s && s.directory;
							if (!i) return e;
							const {
								subredditName: o
							} = r;
							return {
								...e, [o.toLowerCase()]: i
							};
						default:
							return e
					}
				},
				V = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const q = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: n,
								pageKey: s
							} = t.payload, {
								page: r
							} = n;
							return s && r ? {
								...e,
								[s]: r
							} : e
						}
						case V.a: {
							const {
								pageKey: n,
								page: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				J = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Z = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.c: {
							const {
								settings: n,
								pageKey: s
							} = t.payload;
							return n ? {
								...e,
								[s]: n
							} : e
						}
						case J.d: {
							const {
								isVisible: n,
								editPermissions: s,
								pageKey: r
							} = t.payload, i = e[r];
							return i ? {
								...e,
								[r]: {
									...i,
									isVisible: n,
									editPermissions: s
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: n,
								afterToken: s,
								pageKey: r
							} = t.payload, i = e[r];
							if (!i) return e;
							const o = [...i.editorsInfo, ...n];
							return {
								...e,
								[r]: {
									...i,
									editorsInfo: o,
									afterToken: s
								}
							}
						}
						case J.a: {
							const {
								username: n,
								pageKey: s
							} = t.payload, r = e[s];
							if (!r) return e;
							const i = r.editorsInfo.filter(e => e.username !== n);
							return {
								...e,
								[s]: {
									...r,
									editorsInfo: i
								}
							}
						}
						default:
							return e
					}
				},
				X = n("./src/lib/omitKey/index.ts");
			const Q = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case V.d:
					case V.c: {
						const {
							key: n
						} = t.payload;
						return Object(X.a)(e, n)
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
								key: n
							} = t.payload, s = t.type === V.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ne = Object(W.c)({
					error: $,
					pending: te
				}),
				se = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const re = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.c: {
						const {
							key: n,
							options: s,
							pageInfo: r,
							revisionsIds: i
						} = t.payload, o = e[n], a = s.after && o ? [...o.ids, ...i] : i;
						return {
							...e,
							[n]: {
								ids: a,
								pageInfo: r
							}
						}
					}
					case V.a: {
						const {
							page: {
								revision: n
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: r
						} = t.payload, i = e[s];
						return i && n ? {
							...Object(X.a)(e, r),
							[s]: {
								...i,
								ids: [n.id, ...i.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, r = {
							...e
						};
						return delete r[n], delete r[s], r
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
									page: n
								}
							} = t.payload, s = n && n.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case V.c: {
							const {
								revisions: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						case V.a: {
							const {
								page: n
							} = t.payload, s = n.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case V.e: {
							const {
								revisionId: n,
								isHidden: s
							} = t.payload, r = e[n];
							return r ? {
								...e,
								[n]: {
									...r,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(W.c)({
					api: ne,
					listings: ie,
					models: ae
				}),
				ce = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
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
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(X.a)(e, n)
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
								subredditName: n
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ge = Object(W.c)({
					error: pe,
					pending: he
				});
			const fe = {};
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload, r = Object(X.a)(e[n], s);
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				_e = n("./node_modules/lodash/uniq.js"),
				ve = n.n(_e);
			const ye = {};
			var ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...e[n] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...s, ...e[n] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ee = Object(W.c)({
					afterToken: ue,
					api: ge,
					models: xe,
					userOrder: ke
				});
			const we = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Ce = Object(W.c)({
					listing: Ee,
					search: Oe
				}),
				je = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Se = {};
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
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
					case je.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(X.a)(e, n)
					}
					default:
						return e
				}
			};
			const Pe = {};
			var De = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === je.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Le = Object(W.c)({
					error: Te,
					pending: De
				});
			const Fe = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							contributors: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.e: {
						const {
							subredditName: n,
							contributor: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.f: {
						const {
							subredditName: n,
							userId: s
						} = t.payload, r = Object(X.a)(e[n], s);
						return {
							...e,
							newState: r
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
						case je.c:
						case je.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...e[n] || [], ...s])
							}
						}
						case je.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: [...s, ...e[n] || []]
							}
						}
						case je.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
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
						case je.g: {
							const {
								subredditName: n,
								contributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
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
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: Ce,
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
				Ke = (e, t, n, s) => {
					return n === T.j ? Je(e, t) : !!Object(E.c)(e, {
						subredditName: t,
						wikiPageName: n,
						revisionId: s
					})
				},
				Je = (e, t) => !!Object(E.b)(e, {
					subredditName: t
				}),
				Ze = e => async (t, n, r) => {
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
					const m = await Object(P.a)(r.gqlContext(), l),
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
					})), o && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: F.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Ze(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
				}, Ye = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, s) => {
						const r = s(),
							i = {
								sort: a.bb.HOT
							},
							o = Object(c.a)(e, i.sort),
							d = r.listings.postOrder.api.error[o],
							l = r.listings.postOrder.api.pending[o],
							u = !!r.listings.postOrder.ids[o];
						return !!(l || u && !d) || (await n(Object(b.subredditDataRequested)(o, e, i, t)), !s().listings.postOrder.api.error[o])
					}
				}, Xe = e => async (t, n) => {
					const {
						params: s,
						url: r
					} = e, {
						wikiPageName: i
					} = s, a = Object(B.a)(r, s);
					let d = !1;
					return T.l.includes(i || "") ? (await (async (e, t) => {
						const n = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = n
					})(e.url), d = !0) : r !== a && (await t(Object(o.c)(a)), d = !0), d
				}, Qe = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (r, i, o) => {
						const {
							subredditName: d = T.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[I.S], m = t[I.T], p = u ? Object(v.a)(u) : void 0, b = m ? Object(v.a)(m) : void 0, h = c === T.j, _ = l === T.m.Revisions;
						let y = !1,
							k = !1;
						if (n) {
							const {
								pageName: t
							} = e;
							y = t === a.mc.WikiContributors, k = t === a.mc.WikiBanned
						}
						const E = i(),
							w = (h || n) && !Je(E, d),
							O = !!c && !Ke(E, d, c, p),
							C = [];
						C.push(r(Ye(d))), (w || O) && C.push(r(Ze({
							includeDirectory: w,
							includePageData: O,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === T.m.Settings && c && C.push(r(Object(S.c)(d, c))), c && p && b && C.push(r(j({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), _ && C.push(r(Object(N.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), y && C.push(r(Object(x.e)(d))), k && C.push(r(Object(f.e)(d))), (await Promise.all(C)).every(Boolean) || r(Object(g.f)({
							kind: F.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Qe(e, t, n)
						}))
					}
				}, $e = e => async (t, n) => {
					if (await t(Xe(e))) return;
					const {
						params: s,
						queryParams: r
					} = e, i = s.subredditName || T.e;
					t(u.m({
						title: s.wikiPageName ? `${s.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Qe(s, r));
					const o = Object(M.C)(n(), {
							subredditName: i
						}),
						a = n();
					o && (a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(R.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(D.a)([], [o])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(o.B),
				g = Object(r.a)(o.C),
				f = Object(r.a)(o.A),
				x = (e, t, n) => async (s, r, i) => {
					const o = Object(p.C)(r(), {
						subredditName: e
					});
					if (o) return v(o.id, t, n)(s, r, i)
				}, _ = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, n) => async (r, o, p) => {
					const x = await Object(l.e)(t);
					r(h());
					const v = o();
					try {
						await Object(i.g)("communityIcon", x, e)(r, o, p)
					} catch (k) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: u.b.Error,
							text: _()
						})), void r(f())
					}
					const y = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(v, "image is null")), r(Object(a.f)({
						kind: u.b.Error,
						text: _()
					})), void r(f());
					await Object(i.k)(e, {
						communityIcon: y
					}, d.b.idCard, n)(r, o, p), r(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				r = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, r = [], i = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n,
							editWikiBanInfo: s
						} = e.node;
						n.id && n.name && n.icon && (i[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, r.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: i,
						userOrder: r
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(i.a)(h.d),
				f = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				_ = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						o = await m(s.gqlContext(), i);
					if (o.ok) {
						const n = o.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(f({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = o.error || {
							type: r.L.UNKNOWN_ERROR
						};
						t(x({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(i.a)(h.a), y = (e, t) => async (n, r, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(o.f)({
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
				}, k = Object(i.a)(h.e), E = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							name: n.username,
							type: "wikibanned",
							duration: n.duration,
							ban_reason: n.banReason,
							note: n.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(o.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const r = {
								subredditName: e,
								username: t.username
							},
							i = (await m(d.gqlContext(), r)).body;
						if (i.data.subreddit.wiki) {
							const t = p(i.data.subreddit.wiki);
							n(k({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === r.L.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), n(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, w = Object(i.a)(h.f), O = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(o.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), n(w({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, C = Object(i.a)(h.g), j = (e, t) => async (n, r, i) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								r = Object.keys(s.bannedContributors)[0];
							n(C({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[r]
							}))
						}
					} else n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				r = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, r = [], i = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n
						} = e.node;
						n.id && n.name && n.icon && (i[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t
						}, r.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: i,
						userOrder: r
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(i.a)(h.d),
				f = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				_ = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						o = await m(s.gqlContext(), i);
					if (o.ok) {
						const n = o.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(f({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = o.error || {
							type: r.L.UNKNOWN_ERROR
						};
						t(x({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(i.a)(h.a), y = (e, t) => async (n, r, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(o.f)({
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
				}, k = Object(i.a)(h.e), E = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							name: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(o.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const r = {
								subredditName: e,
								username: t
							},
							a = (await m(d.gqlContext(), r)).body;
						if (a.data.subreddit.wiki) {
							const t = p(a.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || n(k({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === r.L.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === r.L.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), n(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, w = Object(i.a)(h.f), O = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(o.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), n(w({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, C = Object(i.a)(h.g), j = (e, t) => async (n, r, i) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								r = Object.keys(s.contributors)[0];
							n(C({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[r]
							}))
						}
					} else n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				r = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				o = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "d", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subredditSettings.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = n("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const b = (e, t) => Object(c.a)(e, {
					...p,
					variables: t
				}),
				h = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: n,
						isVisible: s
					} = e, {
						edges: r,
						pageInfo: i
					} = n, o = [];
					return r.forEach(e => {
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
				f = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(v.c),
				k = (e, t) => async (n, s, r) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						a = await b(r.gqlContext(), i),
						d = Object(_.I)(s(), e);
					if (Object(_.ab)(s(), d) || await n(Object(o.h)(e, d)), a.ok) {
						const e = a.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							n(y({
								pageKey: Object(f.a)(i),
								settings: e
							}))
						}
					}
					return a.ok
				}, E = Object(i.a)(v.b), w = (e, t, n) => async (r, i, o) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: n
						},
						c = await b(o.gqlContext(), d);
					if (c.ok) {
						const n = c.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s && s.page) {
							const n = g(s.page.settings),
								{
									editorsInfo: i,
									afterToken: o
								} = n;
							r(E({
								editorsInfo: i,
								afterToken: o,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else r(Object(a.f)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t, n)
					}));
					return c.ok
				}, O = Object(i.a)(v.d), C = e => {
					let {
						editPermissions: t,
						isVisible: n,
						wikiPageName: s,
						subredditName: i
					} = e;
					return async (e, o, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: r.ob.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: a.apiContext(),
							editPermissions: t,
							isVisible: n,
							wikiPageName: s,
							subredditName: i
						});
						return c.ok && e(O({
							editPermissions: t,
							isVisible: n,
							pageKey: Object(f.a)({
								wikiPageName: s,
								subredditName: i
							})
						})), c.ok
					}
				}, j = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: i
					} = e;
					return async (e, o, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: r.ob.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: n
						});
						if (m.ok) e(Object(a.f)({
							kind: x.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(k(t, i));
						else if (m.error) {
							const t = m.error.type;
							let n = s.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === r.L.NOT_FOUND_ERROR && (n = s.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(a.f)({
								kind: x.b.Error,
								text: n
							}))
						}
						return m.ok
					}
				}, S = Object(i.a)(v.a), N = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: s
					} = e;
					return async (e, i, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: r.ob.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: o.apiContext(),
							wikiPageName: s,
							subredditName: t,
							username: n
						});
						return c.ok && (e(Object(a.f)({
							kind: x.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(S({
							username: n,
							pageKey: Object(f.a)({
								wikiPageName: s,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			}));
			const s = "WIKI_REVISIONS_PENDING",
				r = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				o = "WIKI_PAGE_REVERT_SUCCESS",
				a = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/WikiRevisions.json");
			var l = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				p = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: r.ob.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: r.ob.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var g = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						n = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!n) throw new Error("Invalid response");
					return (e => {
						const t = {},
							n = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, n.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: n
						}
					})(n)
				},
				f = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/subredditWiki.ts"),
				y = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const k = Object(i.a)(y.d),
				E = Object(i.a)(y.c),
				w = Object(i.a)(y.b),
				O = e => async (t, n, i) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = n(), h = Object(f.a)(e), x = Object(v.p)(b, {
						listingKey: h
					});
					if (!a && !!x) return !0;
					const y = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const C = {
							after: y,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						j = {
							key: h,
							options: C
						};
					t(k(j));
					const S = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(i.gqlContext(), C);
					if (S.ok) {
						const e = S.body;
						if (e.data.subreddit) {
							const n = g(e.data);
							t(E({
								...j,
								...n
							}))
						}
					} else {
						const n = S.error || {
							type: r.L.UNKNOWN_ERROR
						};
						t(w({
							...j,
							error: n
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
				}, C = Object(i.a)(y.a), j = e => async (t, n, r) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(x.a)({
						...e,
						revisionId: void 0
					}), l = Object(f.a)({
						...e,
						isRecent: !1
					}), u = Object(f.a)({
						...e,
						isRecent: !0
					}), m = Object(v.p)(n(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(r.apiContext(), e)).ok) {
						const e = (await Object(a.a)(r.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							n = e.data.subreddit && e.data.subreddit.wiki,
							m = n && n.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(o.f)({
							kind: _.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(C({
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
						buttonAction: j(e)
					}))
				}, S = Object(i.a)(y.e), N = e => async (t, n, r) => {
					const i = await b(r.apiContext(), e);
					if (i.ok) {
						const n = i.body.status;
						t(S({
							revisionId: e.revisionId,
							isHidden: n
						}))
					} else t(Object(o.f)({
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, n) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/hooks/useClickSourceData.ts"),
				u = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = n("./src/reddit/components/AuthorLink/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, n;
				const s = Object(o.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					h = Object(i.d)(),
					g = Object(i.e)(u.b),
					f = Object(i.e)(u.c),
					x = t => {
						var n;
						if (null === (n = e.onClick) || void 0 === n || n.call(e, t), g || f) {
							const n = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${a.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.cb)(n))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? r.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: s,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: x
				}), e.children) : e.isAuthorDeleted ? r.a.createElement("span", {
					className: Object(o.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : r.a.createElement(c.default, b({}, null !== (n = e.linkProps) && void 0 !== n ? n : {}, {
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
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				bananaPill: "_2GJIRTOkmAXwBwD8gnpjoC",
				transform: "EUsCIvjLoHDQUlMif6rU3",
				icon: "hf82tIE9hVksLDPq4aS4W",
				text: "_3iPvcis9xcmXbF66ZaOGLu",
				altText: "-kJjcqwGv75MM1ykroFtu",
				bouncing: "_2ytFCvT-cA8CdwGKbaK3jG"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/elementIds.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			var h = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/helpers/chooseVariant/index.ts");
			const f = e => {
				return Object(g.c)(e, {
					experimentEligibilitySelector: g.a,
					experimentName: h.zf
				}) === h.Vd
			};
			var x = n("./src/reddit/selectors/recapGame.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/BackToTop/index.m.less"),
				y = n.n(v);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				if (e) {
					const e = document.getElementById(u.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: u
				} = e;
				const h = Object(l.b)(),
					g = Object(r.useRef)(null),
					[v, w] = Object(r.useState)(!1),
					[O, C] = Object(r.useState)(),
					[j, S] = Object(r.useState)(),
					[N, I] = Object(r.useState)(0),
					T = Object(o.e)(_.l),
					P = Object(o.e)(f),
					D = Object(o.e)(_.R),
					L = Object(o.e)(x.a),
					F = encodeURIComponent(a.a.redditUrl + "/r/recap"),
					R = a.a.accountManagerOrigin,
					B = D ? "/r/recap" : `${R}/login/?dest=${F}`,
					M = T ? T.id : "anonymous",
					A = "on" === L.recapGameState,
					W = () => {
						v && S(setTimeout(() => {
							g.current && (g.current.classList.add(y.a.transform), g.current.style.width = `${N}px`)
						}, 4750)), v && C(setTimeout(() => {
							w(!1), Object(p.Rb)(M, !1)
						}, 5e3))
					};
				Object(r.useEffect)(() => {
					A || setTimeout(() => {
						const e = Object(p.N)(M);
						e ? Object(c.e)(e.lastSeenTime) >= 24 && e.dropSkip === p.a.NONE ? w(!0) : Date.now() >= new Date(2022, 10, 2).getTime() && e.dropSkip !== p.a.SECOND && w(!0) : w(!0)
					})
				}, [M, A]);
				const H = Object(r.useCallback)(e => {
					if (e) {
						const t = e.clientWidth;
						I(t + 32)
					}
				}, []);
				return i.a.createElement("div", {
					className: Object(d.a)(t, y.a.container),
					style: u
				}, v && P && !n && !A ? i.a.createElement("a", {
					ref: g,
					href: B,
					className: y.a.bananaPill,
					onMouseEnter: () => {
						O && clearTimeout(O), j && clearTimeout(j), g.current && (g.current.classList.remove(y.a.transform), g.current.style.width = "65px")
					},
					onMouseLeave: W,
					onClick: () => {
						O && clearTimeout(O), j && clearTimeout(j), w(!1), Object(p.Rb)(M, !0), h((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...b.o(e)
						}))())
					}
				}, i.a.createElement("img", {
					className: y.a.icon,
					src: `${a.a.assetPath}/img/recap/banana_pill.png`,
					alt: k._("banana", null, {
						hk: "1fs9mn"
					})
				}), i.a.createElement("span", {
					className: y.a.text
				}, "+1"), k._("{=Back to Top}", [k._param("=Back to Top", i.a.createElement("span", {
					ref: H,
					className: y.a.altText
				}, k._("Back to Top", null, {
					hk: "4BTAZ0"
				})))], {
					hk: "4Foziy"
				}), i.a.createElement(s.a, {
					onChange: e => {
						e.isIntersecting && (W(), h((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...b.o(e)
						}))()))
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, i.a.createElement("div", null))) : i.a.createElement(m.a, {
					className: y.a.button,
					onClick: () => E(n)
				}, k._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less": function(e, t, n) {
			e.exports = {
				muteButton: "E6ihBvDYBbdvjzCcN_LZE",
				muteIcon: "_1Sx3lrWefgX2BpcEoC6zMv",
				muteDefault: "_3pc_K2D7OtCZ3HzDnRlOJv",
				muteHover: "_1CwsmOiXqCke04fKLHhV-a"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/muting.ts"),
				m = n("./src/reddit/actions/subreddit/notifications.ts"),
				p = n("./src/lib/combineRefs/index.tsx"),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				h = n("./src/lib/hooks/useTooltip.ts"),
				g = n("./src/reddit/components/CommonTooltip/index.m.less"),
				f = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = r.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
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
					}, [t]), t ? r.a.createElement("div", x({
						id: n,
						className: Object(a.a)(f.a.tooltip, i, {
							[f.a.visible]: c
						})
					}, d.popperProps), c && r.a.createElement(r.a.Fragment, null, d.arrowProps && r.a.createElement("div", x({
						className: Object(a.a)(f.a.arrow, o)
					}, d.arrowProps)), d.children)) : null
				})),
				v = n("./src/reddit/models/Subreddit/index.ts");
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
				E = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var w = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = n.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => {
					return r.a.createElement(O.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: w.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(v.c.FREQUENT),
						isSelected: e.notificationLevel === v.c.FREQUENT,
						icon: r.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === v.c.FREQUENT
						})
					}, {
						displayText: w.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(v.c.LOW),
						isSelected: e.notificationLevel === v.c.LOW,
						icon: r.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === v.c.LOW
						})
					}, {
						displayText: w.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(v.c.OFF),
						isSelected: e.notificationLevel === v.c.OFF,
						icon: r.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === v.c.OFF
						})
					}].map(e => r.a.createElement(C.b, I({
						className: Object(a.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...D.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: D.kb(t)
			});
			var F = n("./src/reddit/hooks/useTracking.ts"),
				R = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = c.a.img("SubredditIcon", N.a),
				M = c.a.wrapped(R.a, "DefaultIcon", N.a);
			var A = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: s,
						onHide: i,
						onUpdate: o
					} = e;
					const a = Object(F.a)(),
						d = n ? r.a.createElement(B, {
							src: s || void 0
						}) : r.a.createElement(M, null),
						c = `r/${t}`;
					return r.a.createElement("div", {
						className: N.a.notificationPopup
					}, r.a.createElement("div", {
						className: N.a.title
					}, r.a.createElement("h2", null, w.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, w.fbt._("{subreddit name}", [w.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), r.a.createElement("div", {
						className: N.a.subredditWrapper
					}, r.a.createElement("div", {
						className: N.a.subredditTitle
					}, d, r.a.createElement("span", null, c), r.a.createElement(j.a, {
						name: "notification_frequent",
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(P.t, {
						className: N.a.subscribeButton,
						priority: P.c.Primary,
						size: P.d.M,
						text: w.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), o(v.c.FREQUENT), a(L(v.c.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: N.a.hideButton,
						onClick: i
					}, w.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				W = n("./src/reddit/helpers/localStorage/index.ts");
			var H = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var U = e => {
					const t = Object(i.d)(),
						n = Object(F.a)(),
						o = Object(h.b)(k),
						a = Object(h.b)(E),
						[d, c] = function(e, t) {
							const [n, r] = Object(s.useState)(Object(W.T)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(W.b)(e, t);
								r(n)
							}, [e, t, r])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(H.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== v.c.LOW && e.notificationLevel !== v.c.OFF || c()
					}, [e.subredditId]);
					const u = 2 === d,
						g = () => {
							o.hide()
						},
						f = () => {
							a.hide()
						};
					Object(s.useEffect)(() => (u && (a.update && a.update(), a.show()), () => {
						f(), g()
					}), [e.subredditName, u]);
					const x = () => {
							f(), o.show()
						},
						w = (e => `dropdown-${e}`)(e.subredditName),
						O = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(w, g);
					const C = Object(s.useCallback)(e => {
							e.stopPropagation(), o.visible ? g() : x()
						}, [g, x, o.visible]),
						S = Object(s.useCallback)(t => {
							t === v.c.FREQUENT && Object(W.fb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						I = Object(s.useCallback)(s => {
							const {
								subredditId: r
							} = e;
							g(), f(), t(Object(m.d)({
								subredditId: r,
								notificationLevel: s,
								successCallback: () => S(s)
							})), n(L(s.toLowerCase()))
						}, [g, e.subredditId, t, n]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(p.a)(o.target.ref, a.target.ref),
						onClick: C,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(j.a, {
						name: y(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(_, {
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: w
					}, r.a.createElement(T, {
						dropdownId: w,
						notificationLevel: e.notificationLevel,
						onClick: I
					})), u && !l && r.a.createElement(_, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: O,
						className: N.a.popupTooltip
					}, r.a.createElement(A, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: f,
						onUpdate: I
					})))
				},
				z = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				G = n("./src/reddit/components/SubredditNav/index.tsx"),
				V = n("./src/reddit/components/SubscribeButton/index.tsx"),
				q = n("./src/reddit/constants/componentSizes.ts"),
				K = n("./src/reddit/constants/postLayout.ts"),
				J = n("./src/reddit/constants/posts.ts"),
				Z = n("./src/reddit/featureFlags/index.ts"),
				Y = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				X = n("./src/reddit/constants/tracking.ts");
			var Q = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				$ = n("./src/reddit/hooks/useWindowEvent.ts"),
				ee = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				te = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ne = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				se = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				re = n("./src/reddit/selectors/subreddit.ts"),
				ie = n("./src/reddit/selectors/user.ts"),
				oe = n("./src/reddit/selectors/widgets.ts"),
				ae = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				de = n.n(ae),
				ce = n("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				le = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				ue = n("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				me = n.n(ue);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = e => {
				let {
					onClickUnmute: t
				} = e;
				const n = Object(F.a)();
				return r.a.createElement(P.t, {
					priority: P.c.Plain,
					className: me.a.muteButton,
					onClick: () => {
						n(Object(le.g)()), t()
					}
				}, r.a.createElement(ce.a, {
					className: me.a.muteIcon
				}), r.a.createElement("span", {
					className: me.a.muteDefault
				}, pe._("Muted", null, {
					hk: "incHh"
				})), r.a.createElement("span", {
					className: me.a.muteHover
				}, pe._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, he = c.a.img("SubredditIcon", de.a), ge = Object(o.c)({
				isNsfwBlurSubreddit: ne.e,
				notificationLevel: re.L,
				isMuted: re.K,
				spPollsEnabled: Z.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(se.a)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!n && Object(re.S)(e, {
						subredditId: n
					})
				},
				userId: ie.j,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n;
					return Object(re.kb)(e, {
						identifier: {
							name: s,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ee.b,
				widget: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(oe.f)(e, {
						subredditId: n
					}) : void 0
				}
			}), fe = {
				threshold: [.5, .001],
				rootMargin: `${1-q.f}px 0px 0px 0px`
			};
			t.a = Object(i.b)(ge, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(m.c)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: v.c.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id),
						r = t.subreddit ? t.subreddit.name : t.subredditName;
					if (s) return e(Object(u.e)({
						subredditId: s,
						subredditName: r
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					o = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(i.e)(te.b),
					u = Object(i.e)(te.a),
					m = c || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[g, f] = Object(s.useState)(),
					[x, _] = Object(s.useState)(null),
					v = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object($.a)("resize", ((e, t, n) => () => {
					var s;
					e(t && n ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(f, x, m)), Object(Q.a)(h, v, fe);
				const y = e.subreddit && Object(Y.a)(e),
					k = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					E = n.charAt(0).toUpperCase() + n.slice(1),
					w = !!e.subreddit && e.subredditInlineEditingEnabled,
					O = Object(a.a)(de.a.SubredditIcon, de.a.editableIcon, {
						[de.a.emptyEditableIcon]: !y
					}),
					C = k ? r.a.createElement(z.a, {
						className: O,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : r.a.createElement(R.a, {
						className: de.a.DefaultIcon
					}),
					j = k ? r.a.createElement(he, {
						className: Object(a.a)(de.a.SubredditIconImg, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : r.a.createElement(R.a, {
						className: Object(a.a)(de.a.DefaultIcon, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					S = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					N = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px",
					I = e.isCommunityMutingEnabled && e.isMuted;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					style: {
						height: p ? void 0 : g
					},
					className: Object(a.a)(de.a.wrapper, {
						[de.a.stickyWrapper]: m,
						[de.a.isSticking]: p
					})
				}, r.a.createElement("div", {
					className: de.a.container,
					style: {
						maxWidth: N
					},
					ref: m ? _ : void 0
				}, r.a.createElement("div", {
					className: de.a.subredditMetaContainer
				}, w ? C : j, r.a.createElement("div", {
					className: Object(a.a)(de.a.textContainer, {
						[de.a.textContainerNoIcon]: !k
					})
				}, r.a.createElement("div", {
					className: Object(a.a)(de.a.text, {
						[de.a.blur]: e.isNsfwBlurSubreddit
					})
				}, r.a.createElement("h1", {
					className: de.a.title
				}, d || E), !!d && r.a.createElement("h2", {
					className: de.a.description
				}, "r/", n)), r.a.createElement("div", {
					className: de.a.buttonWrapper
				}, r.a.createElement("div", {
					className: de.a.subscribeButtonContainer
				}, r.a.createElement(V.a, {
					className: de.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...D.o(t),
							source: "sticky_banner",
							action: X.c.CLICK,
							noun: e,
							subreddit: D.kb(t)
						}))(t) : (e => t => ({
							...D.o(t),
							source: "id_banner",
							action: X.c.CLICK,
							noun: e,
							subreddit: D.kb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: J.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(W.fb)(e.userId, t), e.updateSubredditInfo())
					}
				})), I && r.a.createElement(be, {
					onClickUnmute: e.unmuteSubreddit
				}), e.userIsSubscriber && !I && t && e.notificationLevel && r.a.createElement("div", {
					className: de.a.notificationButtonContainer
				}, r.a.createElement(U, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: k,
					userId: e.userId
				}))))), S && r.a.createElement(G.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: o,
					subredditId: t,
					subredditNavContainerClassName: de.a.subredditNavContainer
				}))), r.a.createElement("div", {
					className: de.a.intersectionWrapper
				}, r.a.createElement("div", {
					style: {
						height: m ? g : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				g = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				_ = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./node_modules/lodash/flatMap.js"),
				y = n.n(v),
				k = n("./src/lib/linkMatchers/index.ts"),
				E = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const O = /\[(.+?)\]\((.+?)\)/g,
				C = e => {
					const t = e.split(O);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, i] = t.slice(s, s + 3);
						n.push(e), n.push([i, r])
					}
					return n
				};
			var j = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, C)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return i.a.createElement(w.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, r)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				S = n("./src/reddit/constants/parameters.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/chat/controls/Svg/index.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => i.a.createElement(T.a, P({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				L = n("./src/reddit/models/ContentGate.ts"),
				F = n("./src/lib/constants/index.ts"),
				R = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/reddit/selectors/user.ts");
			var M = n("./src/reddit/selectors/meta.ts"),
				A = n("./src/reddit/components/ContentGate/index.m.less"),
				W = n.n(A);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(D, "PrivateKey", W.a), z = l.a.div("ButtonsContainer", W.a), G = l.a.div("Container", W.a), V = l.a.div("ContainerExp", W.a), q = l.a.div("Description", W.a), K = l.a.div("PrivateSubredditDetails", W.a), J = l.a.div("PrivateSubredditDescription", W.a), Z = l.a.h3("PrivateSubredditName", W.a), Y = l.a.a("Link", W.a), X = l.a.wrapped(I.n, "LinkRouterButton", W.a), Q = l.a.wrapped(I.m, "LinkButton", W.a), $ = l.a.wrapped(I.q, "SecondaryLinkRouterButton", W.a), ee = l.a.wrapped(I.p, "SecondaryLinkButton", W.a), te = l.a.wrapped(X, "GoHomeLinkButton", W.a), ne = l.a.wrapped(h.a, "CreateCommunityButton", W.a), se = l.a.img("Image", W.a), re = l.a.img("ImagePlaceholder", W.a), ie = l.a.wrapped(X, "LeftLinkRouterButton", W.a), oe = l.a.wrapped(Q, "LeftLinkButton", W.a), ae = l.a.wrapped(ee, "SecondaryLeftLinkButton", W.a), de = l.a.wrapped($, "SecondaryLeftLinkRouterButton", W.a), ce = l.a.h3("Title", W.a), le = l.a.div("PageBody", W.a), ue = l.a.div("InterstitialMessageWrapper", W.a), me = Object(c.c)({
				isLoggedIn: B.Q,
				origin: M.k,
				user: B.l,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(B.R)(e)) return !1;
					const t = Object(R.d)(e);
					if (!t) return !1;
					const n = Object(B.g)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * F.E;
					return s > Date.now() - r
				})(e),
				isSeo: M.h
			}), pe = Object(N.u)(), be = Object(o.b)(me, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.E(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.q)())
					}
				}
			}), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: o,
					isLoggedIn: a,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: g,
					quarantineRequiresEmail: v,
					quarantineMessage: y,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: E,
					interstitialWarningMessage: w,
					interstitialWarningMessageHtml: O,
					interstitialWarningMessageRTJson: C,
					setNSFWPreference: N,
					subredditDescription: I,
					subredditName: T,
					user: P
				} = e, D = async () => {
					if (a ? await N() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(S.j, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
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
						}), i.a.createElement(ce, null, n === L.a.Nsfw ? H._("You must be 18+ to view this community", null, {
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
							onClick: D,
							redditStyle: !0
						}, H._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(U, null), i.a.createElement(ce, null, "r/", T, " ", H._("is a private community", null, {
							hk: "7zZmq"
						})), I && I.length && i.a.createElement(K, null, i.a.createElement(Z, null, "r/", T), i.a.createElement(J, null, i.a.createElement("div", null, I))), i.a.createElement(q, null, H._("The moderators of", null, {
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
						})), i.a.createElement(q, null, H._("This community is {=quarantined}", [H._param("=quarantined", i.a.createElement(Y, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, H._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ue, null, E ? i.a.createElement(x.b, {
							content: E,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : k ? i.a.createElement(f.a, {
							html: k
						}) : y || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), H._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(z, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(z, null, i.a.createElement(de, {
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
						})(P, r, v)));
					case L.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ce, null, H._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(q, null, i.a.createElement(ue, null, C ? i.a.createElement(x.b, {
							content: C,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : O ? i.a.createElement(f.a, {
							html: O
						}) : w), H._("Are you certain you want to continue?", null, {
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
						})), (e => i.a.createElement(q, null, e ? i.a.createElement(j, {
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
						return i.a.createElement("div", null, i.a.createElement(re, null), i.a.createElement(ce, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(q, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(z, null, P && i.a.createElement(ne, {
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
									return i.a.createElement(i.a.Fragment, null, H._("This account has been {=suspended} .", [H._param("=suspended", i.a.createElement(Y, {
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
				const t = Object(r.useContext)(d.a) ? V : G;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(le, null, he(e))), i.a.createElement(g.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				v = x.a.wrapped(l.c, "StyledTooltip", f.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.qb)(e),
					userIsSuspended: h.Y
				});
			t.a = Object(o.b)(y, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: _
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
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
					onMouseEnter: r,
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
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(i.d)(),
					n = Object(i.e)(t => Object(d.Y)(t, {
						subredditId: e
					})),
					s = Object(i.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					c = Object(i.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						n.name && t(Object(o.l)(n.name))
					}, [n.name, t]);
				return r.a.useEffect(() => {
					c || s || l()
				}, [c, s, l]), {
					isFetching: c,
					isFetched: s,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
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
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
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
						sentOncePerRender: n
					} = this.state, i = n ? o.a.createElement(m, {
						src: a.a.assetPath + t
					}) : o.a.createElement(r.a, {
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
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", c.a), m = a.a.a("UserAgreementLink", c.a), p = a.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === b.Grey,
					[c.a.mIsWhite]: e.textColor === b.White
				})
			}, r.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", r.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", r.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				_ = d.a.div("HeaderContent", h.a),
				v = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				k = d.a.wrapped(i.a, "HeaderUrl", h.a),
				E = d.a.span("Container", h.a),
				w = Object(a.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
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
						w = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						O = `${4+w}px`;
					return r.a.createElement(E, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, r.a.createElement(k, {
						className: e.className,
						to: e.url
					}, r.a.createElement(v, {
						className: Object(o.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(_, {
						className: Object(o.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? r.a.createElement(f, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					}) : r.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					})), r.a.createElement(y, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), r.a.createElement(x, {
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
			t.a = w
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(s.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(r.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/tooltip.ts");
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
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				g = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = n.n(g);
			class x extends r.a.Component {
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
					return r.a.createElement("div", {
						className: Object(i.a)(f.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const _ = m(x),
				v = h(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(i);
			const a = s.a.wrapped(r.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: r,
						tooltipType: i
					} = e;
					let o = r;
					return n && (o = `${o}--${n}`), i && (o = `${o}--${i}`), t && (o = `${o}--${t}`), s && (o = `${o}--${s}`), o
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				d = n.n(a),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
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
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(g.N)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(i.b)(() => Object(o.a)(f, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
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
				const n = Object(h.b)(e, t),
					s = Object(g.N)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(i.b)(() => Object(o.a)(_, e => e))(e => r.a.createElement(p, {
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
					subreddit: g.Y
				}))(e => r.a.createElement(p, {
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
				k = n("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const t = Object(k.a)(),
					n = Object(s.useMemo)(() => ({
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
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var w = e => {
				const t = Object(k.a)(),
					n = Object(s.useMemo)(() => ({
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
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var O = e => {
				const t = Object(k.a)(),
					n = Object(s.useMemo)(() => ({
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
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var C = Object(i.b)(() => Object(o.c)({
				subreddit: g.Y
			}))(e => r.a.createElement(p, {
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
			var j = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(g.Q)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
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
						subredditId: n
					} = t;
					return n ? Object(g.Y)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(p, {
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
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(o);
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
						isSpoiler: n
					} = e;
					return i.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				g = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.eb
				}));
			t.a = g(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				_ = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = n.n(j);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
					const t = Object(c.a)(S.a.image, g.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${y.j}px`), e.isListing || e.isTall && I(e.height) || (n.maxHeight = `${y.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(r.useRef)(null),
						[a, d] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && d(!0)
							})
						}, [a]),
						u = Object(r.useRef)({
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
					const h = Object(r.useRef)({
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
						style: n
					})
				},
				D = e => {
					const t = {};
					return (!e.showFull && Object(y.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${y.j}px`, e.shouldBlur && (t.maxWidth = Object(y.L)(e.height, e.width) ? `${y.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className, {
							[S.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				L = Object(o.b)(() => Object(d.a)(k.F, w.kb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(k.b)(e, s) : null
				}, E.d, k.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = L(e => {
				const t = Object(_.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": C.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
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
			const F = (e, t) => i.a.createElement(P, {
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
						...n
					} = e;
					const r = Object(y.L)(n.height, n.width),
						o = I(n.height) && r;
					return i.a.createElement(D, N({}, n, {
						className: `${r?`${O.a} `:""}${n.className||""}`
					}), n.isListing ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, F(r, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, F(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > y.j && Object(y.L)(n.height, n.width) && i.a.createElement("div", {
						className: S.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && i.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const g = 100,
				f = g / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				_ = n("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function y(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					onClick: m,
					...p
				} = e;
				const b = Object(i.useRef)(),
					h = Object(i.useRef)(),
					y = Object(_.a)(d);

				function k(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (k(!d && (t || s)), h.current && r) return b.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const r = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + f ? o = !0 : o && d >= a && d > a + f && (o = !1), a = d, r !== o && t(o)
						}, g);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(h.current, r), () => {
						b.current && b.current()
					}
				}, []), Object(i.useEffect)(() => {
					y !== d && k(!d && (t || s))
				}, [y, d, t, s]), o.a.createElement("video", v({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: m
				}), o.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var k = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = n.n(k);
			const w = Object(d.c)({
				autoplayPref: b.c,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function O(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: i,
					started: d
				} = Object(a.e)(t => w(t, e)), {
					postId: b,
					shouldLoad: h,
					source: g,
					height: f,
					isNotCardView: x,
					showFull: _,
					shouldPause: v,
					width: k,
					isListing: O,
					className: C,
					showCentered: j,
					originalSource: S,
					isPromoted: N,
					renderSmallMedia: I,
					onClick: T
				} = e, P = t && !(N && Object(c.hasAcceptableAds)()), D = Object(a.d)();

				function L(e) {
					D(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function F() {
					return D(Object(u.z)({
						postId: b
					}))
				}
				const R = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && D(Object(u.s)(b))
				}, 200);

				function B(e) {
					e.persist(), R(e)
				}

				function M(e) {
					var t;
					(i || W(e), d) || (t = e.timeStamp, D(Object(u.A)(b, t)))
				}

				function A(e) {
					D(Object(u.q)(b, e.timeStamp))
				}

				function W(e) {
					! function(e) {
						D(Object(u.D)({
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

				function H(e) {
					s || M(e), i || W(e), D(Object(u.C)(b))
				}

				function U() {
					const e = {};
					return j && (e.margin = "0 auto"), O || (e.maxHeight = `${p.e}px`), o.a.createElement(y, {
						autoplay: P,
						className: Object(l.a)(m.a, E.a.styledVideo, {
							[E.a.renderSmallMedia]: I
						}),
						height: I ? void 0 : f,
						isListing: O,
						isNotCardView: x,
						key: b,
						loop: !0,
						onBufferingChange: L,
						onClick: T,
						onLoadStart: A,
						onLoadedData: M,
						onLoadedMetadata: W,
						onPause: F,
						onPlaying: H,
						onTimeUpdate: B,
						shouldLoad: h,
						shouldPause: v,
						showCentered: j,
						showFull: _,
						source: g,
						style: I ? void 0 : e,
						width: I ? void 0 : k
					})
				}
				return O ? U() : o.a.createElement("div", {
					className: Object(l.a)(E.a.container, C, {
						[E.a.centered]: j
					})
				}, o.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				c = n("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = n.n(c);
			const u = Object(i.a)(a.a),
				m = ["center", "bottom"],
				p = ["center", "top"];
			class b extends r.a.Component {
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
					return r.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, r.a.createElement(d.a, null), r.a.createElement(u, {
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
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("ModProgressModule")]).then(n.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(f);
			const _ = c.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(_),
				y = c.a.button("MenuButton", x.a),
				k = c.a.wrapped(p.b, "DropdownRow", x.a),
				E = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				w = Object(o.b)(E, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				O = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => i.a.createElement(y, {
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
				"data-adclicklocation": g.b.OVERFLOW_MENU
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
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
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
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
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				g = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				_ = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return i.a.createElement(x, p({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
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
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
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
					}, i.a.createElement(g, null, i.a.createElement(f, {
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
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "w", (function() {
				return D
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				h = d.a.p("P", a.a),
				g = d.a.li("Li", a.a),
				f = d.a.ul("Ul", a.a),
				x = d.a.ol("Ol", a.a),
				_ = d.a.strong("B", a.a),
				v = d.a.em("I", a.a),
				y = d.a.span("U", a.a),
				k = e => r.a.createElement("del", e),
				E = d.a.sub("Sub", a.a),
				w = d.a.sup("Sup", a.a),
				O = d.a.table("Table", a.a),
				C = d.a.tr("Tr", a.a),
				j = d.a.td("Tdl", a.a),
				S = d.a.td("Tdc", a.a),
				N = d.a.td("Tdr", a.a),
				I = d.a.th("Thl", a.a),
				T = d.a.th("Thc", a.a),
				P = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(i.b, e), "A", a.a)),
				D = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				h = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				f = n.n(g);
			const x = n("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				_ = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return a.a.createElement(x, s)
				}),
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				y = e => i()(e, v),
				k = e => e.findIndex(v),
				E = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: g,
						renderMediaAsLinks: v,
						rtJsonElementProps: E,
						useExplicitTextColor: w,
						shouldBlur: O,
						onClickRevealSpoilerText: C,
						mediaProps: j
					} = e, S = s.document, N = [], I = e.mediaMetadata || null, T = k(S), P = y(S);
					if (O && !r && !o) return a.a.createElement(x, {
						className: Object(d.a)(m.j, n)
					}, a.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== T)
						for (let a = T; a <= P; a++) {
							const e = S[a];
							switch (e.e) {
								case p.k:
									N.push(h.c(e, E, a));
									break;
								case p.l:
									N.push(h.d(a));
									break;
								case p.b:
									N.push(h.a(e, I, E, a));
									break;
								case p.c:
									N.push(h.b(e, a));
									break;
								case p.p:
									N.push(h.f(e, I, E, a, C));
									break;
								case p.A:
									N.push(h.h(e, I, E, a, C));
									break;
								case p.v:
									N.push(h.g(e, I, E, a, C, j));
									break;
								case p.h:
									N.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									N.push(...Object(b.b)({
										node: e,
										key: a,
										rtJsonElementProps: E,
										mediaMetadata: I,
										renderMediaAsLinks: v,
										postId: g,
										altText: t,
										mediaProps: j
									}))
							}
						}
					return w ? a.a.createElement(x, {
						className: Object(d.a)(m.j, n)
					}, N) : a.a.createElement(_, {
						className: Object(d.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class w extends a.a.Component {
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
						return E(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return D
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/RichTextJson/index.ts");
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
				_ = n("./src/reddit/components/RichTextJson/elements.tsx"),
				v = n("./src/reddit/components/RichTextJson/media.m.less"),
				y = n.n(v),
				k = n("./src/lib/lessComponent.tsx"),
				E = n("./src/reddit/helpers/media/index.ts");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = /\/(\w+)\/asset\/(\w+)\//,
				C = k.a.wrapped(_.a, "A", y.a),
				j = k.a.wrapped(l.a, "ImageBox", y.a),
				S = k.a.wrapped(e => i.a.createElement("p", e), "Caption", y.a),
				N = k.a.div("Placeholder", y.a),
				I = k.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = n === f.E ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						d && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(N, w({
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
						Icon: Object(g.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", y.a),
				T = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return i.a.createElement("div", {
						className: y.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				P = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === f.s ? r = n.s.u : n.e === f.r ? r = n.s.gif : n.e === f.t && (r = (e => {
						const t = O.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(C, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				D = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: r,
						renderMediaAsLinks: a,
						postId: c,
						altText: l,
						mediaProps: p
					} = e;
					const g = f.F(r, t.id);
					if (a) return [P(t, n, g)];
					const _ = [];
					return !g || g.e === f.s && null === g.s.x && null === g.s.y ? _.push(((e, t, n, s) => i.a.createElement(I, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(t.e, n, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : g.e === f.s ? _.push(((e, t, n, s, r) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						} = r || {};
						let b = d;
						return m && (b = Object(E.i)(240, 20, d, c)), i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n,
								[y.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, i.a.createElement(j, {
							altText: s,
							originalSource: d.u,
							postId: a,
							source: b.u,
							height: b.y,
							width: b.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						})))
					})(g, n, !!t.c, l, p)) : g.e === f.r ? _.push(((e, t, n, s, r) => {
						let {
							id: a,
							ext: d,
							s: c
						} = e;
						if (Object(h.h)(a)) {
							const e = s.renderingObjectInfo,
								l = !!e && Object(b.b)(e),
								u = d || Object(h.g)(a);
							return i.a.createElement("div", {
								className: Object(o.a)({
									[y.a.MediaWrapper]: !l,
									[y.a.CommentGifWrapper]: l,
									[y.a.mHasCaption]: n
								})
							}, i.a.createElement(C, {
								href: u,
								key: t,
								target: "_blank"
							}, c.mp4 ? i.a.createElement("video", {
								className: y.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0,
								onClick: null == r ? void 0 : r.onClick
							}, i.a.createElement("source", {
								src: c.mp4
							})) : u), i.a.createElement(x, {
								className: y.a.GiphyLogo
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n,
								[y.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
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
							showCentered: !(null == r ? void 0 : r.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == r ? void 0 : r.renderSmallMedia,
							onClick: null == r ? void 0 : r.onClick
						})))
					})(g, n, !!t.c, s, p)) : g.e === f.t && _.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n
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
							hlsSource: r,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(g, n, !!t.c, c)), t.c && _.push(((e, t) => i.a.createElement(S, {
						key: t
					}, e))(t.c, `caption${n}`)), _
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = n.n(g);
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
							const n = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.kb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === m.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === m.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return r ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: r,
						width: n,
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
				E = n("./src/reddit/components/RichTextJson/media.tsx"),
				w = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = n("./src/reddit/components/SubredditMention/index.tsx"),
				C = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				j = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/helpers/isPost.ts"),
				N = n("./src/reddit/helpers/richTextJson/index.ts"),
				I = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === m.x ? e.t : W(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: n
					}, i)
				},
				P = e => a.a.createElement(d.e, {
					key: e
				}),
				D = (e, t, n, s, r) => {
					const i = e.c;
					if (!i) return;
					const o = i.length,
						c = [];
					for (let a = 0; a < o; a++) c.push(R(i[a], t, n, a, r));
					return a.a.createElement(d.c, {
						key: s
					}, c)
				},
				L = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				F = (e, t, n, s, r) => {
					const i = e.c,
						o = [],
						c = i.length;
					for (let u = 0; u < c; u++) {
						const e = i[u].c;
						e && e.length && o.push(a.a.createElement(d.g, {
							key: u
						}, e.map((e, s) => R(e, t, n, s, r))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: s
					}, o)
				},
				R = (e, t, n, s, r) => {
					switch (e.e) {
						case m.b:
							return D(e, t, n, s, r);
						case m.c:
							return L(e, s);
						case m.k:
							return T(e, n, s);
						case m.l:
							return P(s);
						case m.p:
							return F(e, t, n, s, r);
						case m.v:
							return M(e, t, n, s, r);
						case m.A:
							return B(e, t, n, s, r)
					}
				},
				B = (e, t, n, s, r) => {
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
						}, A(c, t, n, r))), p[d] = i
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
							}, A(d, t, n, r)))
						}
						m.push(a.a.createElement(d.t, {
							key: b
						}, o))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, u)), a.a.createElement("tbody", null, m))
				},
				M = (e, t, n, s, r, i) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(N.h)(o.id) ? a.a.createElement(d.j, {
						key: s
					}, A(e.c, t, n, r)) : Object(E.b)({
						node: o,
						key: s,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: i
					})
				},
				A = (e, t, n, s) => {
					const r = [],
						i = e.length;
					for (let o = 0; o < i; o++) {
						const i = e[o];
						if (i.e === m.B) r.push(H(i, o));
						else if (i.e === m.y) r.push(a.a.createElement(w.a, {
							key: o,
							onClickReveal: s
						}, A(i.c, t, n, s)));
						else if (i.e === m.n) r.push(a.a.createElement("br", {
							key: o
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.F(t, i.id);
								e && r.push(a.a.createElement(k, {
									key: o,
									node: i,
									media: e
								}))
							}
						} else r.push(W(i, n, o))
					}
					return r
				},
				W = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, i;
							const o = Object(I.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(S.b)(c) && (r = c.postId), c && Object(j.b)(c) && (i = c.id, r = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: r,
								commentId: i
							}, s);
						case m.z:
							return a.a.createElement(O.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return z(0, r, t);
					const o = Object(s.a)(r);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(z(0, r.substr(d, l - d), `between${a}`)), i.push(z(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && i.push(z(0, r.substr(d), `remaining${a}`)), i
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
				z = (e, t, n) => {
					let s = t;
					return s = i()(U, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/contexts/Post/index.tsx"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/MiniCardPost/index.m.less"),
				w = n.n(E),
				O = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				C = n.n(O);
			const j = e => e.type === v.f.Spoiler,
				S = Object(h.u)();
			t.a = S(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: v,
					showSubredditMeta: E = !0,
					showSubredditName: O,
					subredditOrProfile: S
				} = e, N = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", P = v && T || g && Object(a.a)("/search", {
					q: g.rawQuery,
					source: I
				}) || T, D = g ? g.subredditInfo && g.subredditInfo.icon : S && S.icon.url, L = g ? g.subredditInfo && g.subredditInfo.displayText : S && (S.displayText || S.name), F = h ? h.flair.filter(j) : [], R = h ? h.score : 0, B = h ? h.numComments : 0, M = h && h.isSponsored, A = Object(k.a)(e).body, W = `linear-gradient(\n      ${Object(r.f)(A,.2)},\n      ${Object(r.f)(A,.3)},\n      ${Object(r.f)(A,.4)},\n      ${Object(r.f)(A,.6)},\n      ${Object(r.f)(A,.8)},\n      ${A}\n    )`, H = o.a.createElement("div", {
					id: i,
					className: Object(d.a)(C.a.trendingPost, {
						[C.a["m-background"]]: !!N
					})
				}, o.a.createElement(f.default, {
					to: P
				}, o.a.createElement("div", {
					className: Object(d.a)(C.a.backgroundWrapper, w.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(k.a)(e).body, N || Object(k.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, M && o.a.createElement("div", {
					className: C.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(C.a.innerContainer, w.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? C.a.title : C.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(C.a.description, n)
				}, F.length > 0 && o.a.createElement(m.a, {
					className: C.a.flair,
					titleFlair: F,
					nowrap: !0,
					post: h
				}), h.title) : o.a.createElement("div", {
					className: C.a.spacer
				}), E && D && L && o.a.createElement(x.a, {
					className: C.a.relatedSubredditMetaData,
					iconClassName: C.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !E && h && o.a.createElement("div", {
					className: C.a.metaLine
				}, O && L && o.a.createElement("span", {
					className: C.a.meta
				}, Object(_.d)(L)), o.a.createElement("span", {
					className: C.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: C.a.meta
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/random.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/helpers/adCount/index.ts"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				_ = n.n(x),
				v = n("./src/lib/lessComponent.tsx");
			const y = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				k = Object(c.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: s
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(n, r, s)]
					}
				}),
				E = Object(d.b)(k),
				w = v.a.wrapped(b.a, "ThemedWidget", _.a),
				O = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				C = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				j = Object(p.c)(class extends a.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: n
						} = this.props;
						return t !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, n))
					}
					render() {
						const e = i()(0, C.length - 1),
							{
								img: t,
								href: n
							} = C[e],
							{
								className: s,
								placement: r,
								redditStyle: o
							} = this.props;
						return a.a.createElement(w, {
							className: s,
							contentOnly: !0,
							redditStyle: o
						}, a.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						}))
					}
				});

			function S(e) {
				let {
					className: t,
					post: n,
					placementIndex: s,
					refreshKey: r,
					listingName: i,
					placement: o,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? a.a.Fragment : m.a;
				if (!c && O(n)) {
					let e = null;
					return l ? e = a.a.createElement(j, {
						className: t,
						redditStyle: d,
						placement: o
					}) : n && (e = a.a.createElement(y, {
						post: n,
						postId: n.id,
						refreshKey: r,
						listingName: i,
						placement: o,
						placementIndex: s
					})), a.a.createElement(p, null, e)
				}
				return null
			}
			t.a = E(S)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.u)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const r = Object(a.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					i = Object(c.F)(e) || Object(d.a)(e),
					o = Object(a.e)(e);
				return {
					canShowAd: r && !i,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: o
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: i,
					...o
				} = e;
				return !n && t && i ? r.a.createElement(l.a, u({
					forceHouseAd: s
				}, o)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = n("./src/reddit/selectors/meta.ts"),
				_ = n("./src/reddit/components/SidebarFooter/index.m.less"),
				v = n.n(_);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = d.a.a("Link", v.a), E = Object(o.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), w = Object(i.b)(E), O = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), C = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: v.a.GreyRereddit
				}, n, !!m.c[t] && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/impressum"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: v.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(w(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					n = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.hd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.hd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.hd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(C, {
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
					return n.includes(t) || "en" === t ? r.a.createElement(k, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/impressum"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: v.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: v.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = n.n(p),
				h = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = d.g[1] + 24,
				x = u.f + 8,
				_ = x + 152 + 16,
				v = _ + f + 8,
				y = h.a.div("Container", b.a),
				k = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return a.a.createElement(c.a, g({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?x:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				E = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(n, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && i && !r,
							[b.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class w extends o.Component {
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
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return a.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(E, {
						isFakeOverlay: n,
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
			t.a = O(w)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/models/ApiRequestState/index.ts"),
				f = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, o = [n, _.a.inTopBar, _.a.iconContainer];
					return s ? o.push(_.a.emptyEditableIconInTopBar) : o.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", v({}, r, {
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
						className: n,
						alt: s,
						role: r,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[_.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				E = Object(a.c)({
					isLoading: f.b
				});
			class w extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: _.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(g.b)();
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(k, v({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
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
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: _.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(E, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit.id, n, s))
				}
			}))(Object(l.c)(w))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = i.a.wrapped(o.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => r.a.createElement(a.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(g.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const _ = Object(b.c)(x),
				v = Object(o.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				y = Object(i.b)(v),
				k = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return r.a.createElement(_, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (i) {
						case h.bg.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case h.bg.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(_, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = y(k)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/lib/linkMatchers/index.ts"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = n("./src/telemetry/models/Outbound.ts"),
				f = n("./src/reddit/components/SubredditNav/index.m.less"),
				x = n.n(f);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = (e, t, n) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: n
				}),
				y = e => {
					let {
						children: t,
						isActive: n,
						isTopBannerVariant: s,
						...i
					} = e;
					return r.a.createElement("div", _({
						className: v(x.a.subNavTitle, n, s)
					}, i), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				k = e => {
					let {
						className: t,
						href: n,
						isActive: s,
						to: i,
						isTopBannerVariant: o,
						...a
					} = e;
					const d = v(x.a.navLink, s, o);
					return i ? r.a.createElement(m.a, _({
						className: d,
						to: i
					}, a)) : n ? r.a.createElement(b.b, _({
						className: d,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: n
					}, a)) : r.a.createElement("a", _({
						className: d
					}, a))
				},
				E = e => {
					let {
						className: t,
						isActive: n,
						...s
					} = e;
					return r.a.createElement(m.a, _({
						className: Object(p.a)(v(x.a.navLink, n), t)
					}, s))
				},
				w = e => {
					let {
						className: t,
						href: n,
						isActive: s,
						...i
					} = e;
					return n ? r.a.createElement(b.b, _({
						className: v(x.a.subNavLink, s),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: n
					}, i)) : r.a.createElement("a", _({
						className: v(x.a.subNavLink, s)
					}, i))
				},
				O = e => {
					let {
						className: t,
						...n
					} = e;
					return r.a.createElement("div", _({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, n))
				},
				C = e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return r.a.createElement("div", _({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: n
						})
					}, s))
				};
			class j extends r.a.Component {
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
					return r.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(C, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var S = j;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? r.a.createElement(k, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(S, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(w, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				T = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/actions/subreddit.ts"),
				D = n("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = Object(o.c)({
				isActive: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Boolean(e.subreddits.appliedFilters.meta[n])
				},
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(T.Y)(e, {
						subredditId: n
					})
				}
			});
			var R = Object(i.b)(F, (e, t) => ({
					onActivate: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: n,
						onActivate: s
					} = e;
					const i = Object(D.a)();
					return t ? r.a.createElement(E, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: n,
						onClick: e => {
							Object(d.H)(i) && !Object(d.P)(i) && e.preventDefault(), s()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = n("./src/reddit/actions/economics/predictions/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				A = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				W = n("./src/reddit/helpers/trackers/predictions.ts"),
				H = n("./src/reddit/hooks/useTracking.ts"),
				U = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(i.d)(),
					o = Object(D.a)(),
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
					!m || c || p || d || (n(Object(B.m)(u.name)), l(!0))
				}, [m, c, p, d, n, u.name]), m && p ? r.a.createElement(E, {
					className: x.a.predictionsFilter,
					isActive: d,
					onClick: () => {
						n(Object(P.p)({
							subredditId: t,
							forceState: !1
						})), a(Object(W.i)())
					},
					to: `${u.url}predictions/`
				}, z._("Predictions", null, {
					hk: "Cv5GC"
				}), b && r.a.createElement("span", {
					className: x.a.liveIcon
				}, z._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var V = n("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const K = Object(d.u)(),
				J = [V.Sb.SUBREDDIT, V.Sb.COMMENTS, V.Sb.COLLECTION_COMMENTS],
				Z = Object(o.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.P)(t.pageLayer)
				});
			var Y = K(Object(i.b)(Z, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: s,
						isPredictionsPage: i,
						isTopBannerVariant: o,
						onTurnOffMetaFilter: a
					} = e, d = s && !n && !i;
					return r.a.createElement(k, {
						to: t,
						isActive: d,
						isTopBannerVariant: o,
						onClick: e => {
							n && (e.preventDefault(), a())
						}
					}, q._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				X = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Q = n("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Q.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = n("./src/reddit/constants/postLayout.ts"),
				te = n("./src/reddit/constants/screenWidths.ts"),
				ne = n("./src/reddit/models/Theme/index.ts"),
				se = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const re = Object(X.a)(e => {
				let {
					className: t,
					children: n,
					isTopBannerVariant: s,
					...i
				} = e;
				const o = Object(se.a)(i);
				return r.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: o.navBar.useOverlay && !s ? "relative" : "static",
						...o.navBar.useOverlay && !s ? {
							marginTop: -26
						} : {},
						background: s ? "inherit" : Object(ne.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var ie = e => r.a.createElement(re, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement($, null))),
				oe = n("./src/reddit/constants/wiki.ts"),
				ae = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, i = !!s && !!s.meta && s.meta.name === V.Sb.SUBREDDIT_WIKI, o = `wiki/${oe.i}`, a = t.endsWith("/") ? t + o : `${t}/${o}`;
				return r.a.createElement(k, {
					isActive: i,
					isTopBannerVariant: n,
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
			t.a = ue(pe(Object(a.c)(e => r.a.createElement(ie, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(Y, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(le, {
				subredditId: e.subredditId
			}), r.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => r.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(o.e)(a.e),
						n = Object(o.e)(a.a);
					return t || n ? i.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = n("./src/reddit/components/IdCard/async.tsx"),
				f = n("./src/lib/isFakeSubreddit/index.ts"),
				x = n("./src/reddit/components/IdCard/helpers.ts"),
				_ = e => !Object(f.a)(e) || Object(x.e)(e) || Object(x.f)(e) || Object(x.g)(e),
				v = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/ModProgressModule/async.tsx"),
				k = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				E = n("./src/reddit/components/SidebarContainer/index.tsx"),
				w = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/helpers/name/index.ts"),
				P = n("./src/reddit/helpers/overlay/index.ts"),
				D = n("./src/reddit/selectors/experiments/topPosts.ts"),
				L = n("./src/reddit/selectors/posts.ts"),
				F = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const R = .99;
			class B extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= R && t(n)
					}
				}
				render() {
					return a.a.createElement(F.a, {
						threshold: R,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var M = B,
				A = n("./src/lib/isUrl/index.ts"),
				W = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				U = n("./src/reddit/components/Thumbnail/index.tsx"),
				z = n("./src/reddit/models/Flair/index.ts"),
				G = n("./src/reddit/models/Subreddit/index.ts"),
				V = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				q = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = e => e.type === z.f.Nsfw || e.type === z.f.Spoiler, Z = Object(c.c)({
				post: L.G,
				subredditOrProfile: L.V
			});
			class Y extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, i = {
						post: t
					}, o = Object(A.a)(Object(U.c)(i)), d = t.flair.filter(J);
					return a.a.createElement("div", {
						className: Object(S.a)(q.a.container, e, {
							[q.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: q.a.mainLine
					}, o && a.a.createElement("div", {
						className: q.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(U.b, i)), a.a.createElement("div", {
						className: Object(S.a)(q.a.title, !o && q.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(H.a, {
						className: q.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: q.a.metaLine
					}, s && !!r && a.a.createElement("span", {
						className: q.a.meta
					}, Object(G.i)(r) ? Object(T.e)(r.displayText || r.name) : Object(T.d)(r.displayText || r.name)), a.a.createElement("span", {
						className: q.a.meta
					}, K._({
						"*": "{score} points",
						_1: "1 point"
					}, [K._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: q.a.meta
					}, K._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [K._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(Z, e => ({
					openLightbox: t => e(Object(P.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Y),
				Q = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(Q);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, se = Object(c.a)(L.N, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => se(e, {
					...t
				})
			});
			class ie extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: i
						} = this.props;
						return a.a.createElement(M, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, a.a.createElement(X, {
							className: Object(S.a)($.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(f.a)(Object(T.i)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: i,
						redditStyle: o,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(D.a)(c),
						p = Object(D.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[g, ...x] = h,
						_ = b ? h.slice(0, ne) : x.slice(0, ne),
						v = b ? h.slice(ne) : x.slice(ne);
					return a.a.createElement("div", {
						className: Object(S.a)($.a.container, t, {
							[$.a.redditStyle]: o
						})
					}, !b && a.a.createElement(M, {
						onPostVisible: r,
						postId: g.id
					}, a.a.createElement(N.a, {
						postId: g.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(f.a)(Object(T.i)(n)),
						trendingPost: g
					})), _.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && a.a.createElement(I.r, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, s || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(d.b)(re, e => ({
					openPost: t => e(Object(P.a)(t.permalink))
				}))(ie),
				ae = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(C.a)(e, l.bb.TOP, {
					t: l.oc.WEEK
				})),
				fe = Object(c.c)({
					discoveryUnit: e => Object(ue.b)(e, {
						unitName: le.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const n = ge(e, t);
						return Object(L.N)(e, {
							listingKey: n
						})
					},
					subreddit: me.C
				});
			class xe extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ce.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.k)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.n)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: i,
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = o,
						l = i.length > he;
					return a.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(oe, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, a.a.createElement("div", null, e)))
				}
			}
			var _e = Object(d.b)(fe, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(j.r)({
							sort: l.bb.TOP,
							subredditName: n,
							t: l.oc.WEEK
						}))
					}
				})(Object(ae.c)(xe)),
				ve = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ye = n("./src/reddit/constants/tracking.ts"),
				ke = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ee = n("./src/reddit/selectors/telemetry.ts"),
				we = n("./src/telemetry/models/Subreddit.ts");
			const Oe = e => t => ({
					...Ee.o(t),
					action: ye.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = e => t => n => ({
					...Ee.o(n),
					action: ye.c.CLICK,
					noun: Object(we.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				je = Object(c.c)({
					communities: ke.c
				});
			var Se = Object(d.b)(je)(e => {
					const t = Object(ae.b)();
					return e.communities && e.communities.length ? a.a.createElement(w.a, null, a.a.createElement(ve.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Oe,
						getSubscribeEventFactoryHandler: Ce,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Ne = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Ie = n("./src/reddit/constants/experiments.ts"),
				Te = n("./src/reddit/featureFlags/index.ts"),
				Pe = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				De = n("./src/reddit/models/Widgets/index.ts"),
				Le = n("./src/reddit/selectors/communityFlairs.ts"),
				Fe = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Re = n("./src/reddit/selectors/listings.ts"),
				Be = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Me = n.n(Be);
			const Ae = 250,
				We = 270,
				He = u.a.wrapped(E.a, "SidebarContainer", Me.a),
				Ue = Object(c.c)({
					apiError: Re.c,
					apiPending: Re.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Le.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Le.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(Fe.a)(e) === Ie.Ye.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(me.R)(e, {
							subredditId: n
						}) && !Object(me.S)(e, {
							subredditId: n
						})
					},
					widgets: me.x
				}),
				ze = Object(d.b)(Ue);
			class Ge extends o.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: De.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: De.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: De.g.Cloud,
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
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: n,
						showGovernance: s,
						showLeaderboard: r,
						showPredictionsLeaderboard: i,
						subredditId: o,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const f = Object(D.a)(c),
						x = Object(D.b)(c),
						E = Object(D.c)(c),
						C = f || x;
					let j, S;
					!!this.getPostFlairWidget() ? j = this.props.widgets : (j = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const N = this.makeRelatedCommunitiesWidget(f, x),
						I = !f,
						T = x,
						P = a.a.createElement(k.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Pe.a.FIRST,
							sizes: l.j
						});
					return a.a.createElement(He, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && a.a.createElement(y.a, {
						subredditId: o,
						subredditName: d
					}), _(t) && a.a.createElement(g.a, {
						listingName: t
					}), a.a.createElement(p.a, {
						cardClassName: Me.a.card,
						subredditId: o
					}), i && a.a.createElement(m.a, {
						subredditId: o
					}), C && a.a.createElement(w.a, null, a.a.createElement(_e, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: Me.a.inFeedAd
					}, P))), C && N && a.a.createElement(w.a, null, a.a.createElement(Ne.a, {
						subredditName: d,
						truncateThreshold: We,
						widget: N
					})), T && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(w.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Ne.a, {
							subredditName: d,
							truncateThreshold: Ae,
							widget: e
						}))
					}), s && a.a.createElement(b.a, {
						className: Me.a.card,
						subredditId: o
					}), S && a.a.createElement(w.a, null, a.a.createElement(Ne.a, {
						subredditName: d,
						widget: S
					})), r && a.a.createElement(h.a, {
						className: Me.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(v.g, {
						subredditId: o
					}), !C && P, a.a.createElement(Se, {
						subredditId: o
					}), I && !T && j.map((e, t) => {
						const n = "community-list" === e.kind;
						return a.a.createElement(w.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Ne.a, {
							subredditName: d,
							truncateThreshold: E && n ? We : E ? Ae : void 0,
							widget: e
						}))
					}), a.a.createElement(O.a, {
						adComponent: a.a.createElement(k.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Pe.a.BOTTOM,
							sizes: l.q
						})
					}))
				}
			}
			t.a = ze(Ge)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				w = n.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => i.a.createElement(b.a, {
					className: Object(c.a)(w.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: w.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: w.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: w.a.errorMsg
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(g.t, {
					className: w.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: y.G,
					nightmode: y.eb
				}),
				S = Object(o.b)(j)(e => i.a.createElement("div", {
					className: Object(c.a)(w.a.communityItemContainer, {
						[w.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(_.a, {
					className: w.a.communityItemExpandCenter,
					widthRight: h.s
				}, i.a.createElement("div", {
					className: w.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: w.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: w.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: w.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(k.b)(e.name, e.type),
					to: Object(k.a)(e.name, e.type)
				}, Object(k.b)(e.name, e.type)), i.a.createElement("div", {
					className: w.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: w.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: w.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(c.a)(w.a.communityCta, w.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(g.t, {
					className: w.a.communityCta,
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
					className: w.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.e)(e) : Object(r.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				_ = n("./src/reddit/helpers/trackers/postFlair.ts"),
				v = n("./src/reddit/models/Widgets/index.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = n.n(k);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 129,
				C = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.i],
					url: e => Object(h.db)(e)
				}),
				j = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				S = Object(o.b)(j),
				N = l.a.div("WidgetContent", E.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: n,
						onMouseDown: s,
						onClick: r,
						...o
					} = e;
					return i.a.createElement("li", {
						className: Object(d.a)(E.a.StyledFlair, t === v.g.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: n,
							[E.a["m-selected"]]: o.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(x.g)(o.flair)),
						onMouseDown: s
					}, i.a.createElement(u.b, w({}, o, {
						className: E.a.Flair,
						isFlairFilter: n,
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
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(_.b)(t))
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
					return i.a.createElement(g.r, {
						className: E.a.flairFilterButton,
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
						widget: n
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(I, {
						key: e.templateId,
						display: n.display,
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
					} = this.state, n = t ? O : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(I, {
						key: e.templateId,
						display: n.display,
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
						hasOverflow: n
					} = this.state, s = t.order, r = this.getFlairsFromIds(s), o = e && this.getSelectedFlair(r) || void 0, a = t.order.length > s.length || n && !o;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = C(S(Object(m.c)(T)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				h = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = n.n(h);
			const f = d.a.div("RuleShortName", g.a),
				x = d.a.div("RuleIndex", g.a),
				_ = d.a.div("RuleTitle", g.a),
				v = d.a.div("RuleDescription", g.a),
				y = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				k = {};
			class E extends i.a.Component {
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
						onClick: n,
						shouldShowFullDisplay: s
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !s(e) && !!r;
					return i.a.createElement(f, {
						className: Object(a.a)({
							[g.a.pointerCursor]: o,
							[g.a.cleanStyle]: e.cleanStyle
						}),
						onClick: s(e) || !r ? void 0 : n
					}, i.a.createElement(p.a, null, i.a.createElement(x, {
						className: Object(a.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), i.a.createElement(_, null, `${e.rule.shortName}`), i.a.createElement("div", null, !s(e) && r && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(v, {
						className: Object(a.a)({
							[g.a.cleanStyle]: e.cleanStyle
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
			const w = e => e.rules.length > 0 ? i.a.createElement(o.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return i.a.createElement(E, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(w, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = v(e);
					return Object(x.f)(t)
				},
				E = e => {
					const t = y(e);
					return Object(x.f)(t)
				};
			var w = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = n.n(w);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), S = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: n
						}),
						r = Object(f.eb)(e);
					return s || r
				},
				nigtmode: f.eb,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
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
					return e.backgroundColor = y(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? O.a.widgetContentOnly : O.a.widgetContent, g = !s && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: s,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(a.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: o,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(O.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(S(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Be
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/helpers/widgets/index.tsx"),
				h = n("./src/reddit/models/Image/index.tsx"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				v = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/components/Widgets/Button/index.m.less"),
				k = n.n(y);
			const E = (e, t, n) => {
					let s = {},
						r = {};
					s = e.kind === f.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, n) => {
						let {
							color: s,
							fillColor: r,
							textColor: i
						} = e;
						return t && (s = i = n, r = "transparent"), {
							"--widget-button-background-color": `${r||"transparent"}`,
							"--widget-button-border": `1px solid ${s}`,
							"--widget-button-color": `${i||s}`
						}
					})(e, t, n);
					const i = e.hoverState || e;
					if (i.kind === f.k.Image) r = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: o
						} = i;
						t && (e = o = n, s = "transparent"), r = {
							"--widget-button-hover-background-color": `${s||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${o||e}`
						}
					}
					return {
						...s,
						...r
					}
				},
				w = e => e.kind === f.k.Image ? k.a.imageButton : k.a.textButton,
				O = e => {
					const t = Object(b.h)(e),
						n = Object(p.h)(p.f, t);
					return n ? n.url : e.url
				},
				C = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(g.a)(e).button;
					return r.a.createElement(c.t, {
						className: w(t),
						style: E(t, n, s),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === f.k.Text && r.a.createElement("span", {
						className: t.hoverState ? k.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.k.Text && r.a.createElement("span", {
						className: k.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => r.a.createElement(l.b, {
					href: O(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, r.a.createElement(C, e)),
				S = m.a.wrapped(a.a, "RawHTMLDisplay", k.a);
			var N = Object(i.b)(() => Object(o.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: _.eb
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(S, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== f.k.Image || e.hoverState.url !== h.c)).map(t => r.a.createElement(j, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				T = n("./src/reddit/components/HumanDate/index.tsx"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				D = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = n.n(D);
			const F = 100,
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
			class G extends r.a.Component {
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
					return e.text.length > F ? r.a.createElement(U, null, t.isExpanded ? e.text : e.text.slice(0, F), r.a.createElement(z, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(U, null, e.text)
				}
			}
			var V = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => r.a.createElement(M, {
					key: `${n}-${t.title}`
				}, r.a.createElement(A, null, t.titleHtml ? r.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(W, null, r.a.createElement(T.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? `${n}:0${s}` : `${n}:${s}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(H, null, t.locationHtml ? r.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(G, {
					text: t.description
				})))),
				q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(q.c)(e => r.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Z = Object(o.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(i.b)(Z),
				X = (e, t, n) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${n}</body>`;
			class Q extends r.a.Component {
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
					return r.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var $ = Y(Q),
				ee = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = n.n(ee);
			var ne = m.a.div("ImageFrame", te.a),
				se = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = n.n(se);
			var ie = m.a.img("StyledImage", re.a);
			class oe extends r.a.Component {
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
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						s = r.a.createElement(ne, null, r.a.createElement(ie, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? r.a.createElement(l.b, {
						href: n.linkUrl
					}, s) : s
				}
			}
			var ae = oe,
				de = n("./src/config.ts"),
				ce = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = n("./src/lib/opener/index.ts"),
				ue = n("./src/reddit/components/Flair/index.tsx"),
				me = n("./src/reddit/controls/InternalLink/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = n("./src/reddit/models/Flair/index.ts"),
				he = n("./src/reddit/selectors/subreddit.ts"),
				ge = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				fe = n.n(ge);
			const xe = m.a.a("ExternalLink", fe.a),
				_e = m.a.div("ModeratorListItem", fe.a),
				ve = m.a.div("Username", fe.a),
				ye = m.a.wrapped(ue.b, "FlairComponent", fe.a),
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
				Ee = e => r.a.createElement(ve, null, `u/${e}`),
				we = m.a.wrapped(me.default, "InternalLink", fe.a),
				Oe = m.a.div("LinkContainer", fe.a),
				Ce = Object(o.c)({
					userIsBanned: he.ib,
					userIsLoggedIn: _.R
				});
			var je = Object(i.b)(Ce)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: s,
						userIsLoggedIn: i
					} = e;
					return r.a.createElement(d.a, {
						styles: n.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (n.mods && n.mods.length || s) && r.a.createElement(c.t, {
						kind: c.b.InternalLink,
						priority: c.c.Secondary,
						className: fe.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${de.a.redditUrl}/message/compose?to=/r/${t}`
					}, r.a.createElement(pe.a, {
						className: fe.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !s ? r.a.createElement(r.a.Fragment, null, n.mods.map(e => r.a.createElement(_e, {
						key: e.name
					}, (e => r.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, Ee(e.name)))(e), r.a.createElement(ye, {
						flair: ke(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Oe, null, r.a.createElement(we, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : s || !i ? r.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(xe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(xe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Se = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Te = n.n(Ie);
			const Pe = m.a.div("WidgetContent", Te.a),
				De = m.a.wrapped(a.a, "RawHTMLDisplay", Te.a);
			var Le = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Pe, null, r.a.createElement(De, {
					html: e.widget.textHtml || ""
				}))),
				Fe = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Re = e => r.a.createElement(Fe.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
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
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, n) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, n) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/postFlair.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.c,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.W,
				hideNSFWPref: b.G,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: c.U,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(o.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === d.a.upvoted ? Object(i.jb)(n) : Object(i.v)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(i.fb)(n)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: n.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/SubredditWiki.json");
			const i = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, o = i;
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./src/lib/isFakeSubreddit/index.ts"), n("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var s;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(s || (s = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = n.n(r);
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
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(i.b)(t))) return Object(r.b)(t) ? o.SourceElement.Comment : Object(s.x)(n) ? o.SourceElement.PostDetail : Object(s.H)(n) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "q", (function() {
				return a
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "f", (function() {
				return E
			}));
			var s = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				o = "predictions",
				a = e => ({
					...Object(r.o)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				d = e => {
					let {
						pollId: t,
						selectedNumberCoins: n,
						totalStakeAmount: s
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(r.J)(e, t, !1, void 0, n),
						goldPurchase: {
							numberCoins: s
						}
					})
				},
				c = e => {
					let {
						pollId: t,
						selectedNumberTokens: n
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(r.J)(e, t, !1, void 0, void 0, n)
					})
				},
				l = e => {
					let {
						pollId: t,
						currency: n,
						amount: o
					} = e;
					return e => {
						const a = n === s.a.Coins ? o : void 0,
							d = n === s.a.Tokens ? o : void 0;
						return {
							...Object(r.o)(e),
							source: i,
							action: "close",
							noun: "prediction_modal",
							poll: Object(r.J)(e, t, !1, a, d)
						}
					}
				},
				u = e => ({
					...Object(r.o)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				m = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(r.o)(e),
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
						...Object(r.o)(e),
						source: o,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				b = () => e => ({
					...Object(r.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				h = () => e => ({
					...Object(r.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				g = () => e => ({
					...Object(r.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				f = e => t => ({
					...Object(r.o)(t),
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
					subreddit: Object(r.kb)(t)
				}),
				x = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: "click",
					noun: "next"
				}),
				_ = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: "click",
					noun: "add_more"
				}),
				v = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: "click",
					noun: "start_tournament"
				}),
				y = () => e => ({
					...Object(r.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				k = () => e => ({
					...Object(r.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(r.kb)(e)
				}),
				E = () => e => ({
					...Object(r.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(r.kb)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.o(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: r,
					screen: u.cb(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const r = Object(a.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[r]: n.id
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
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.lb(e, s),
						...b(e, t)
					}
				},
				g = e => t => ({
					...m(t),
					...h(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.mb(t, e),
					screen: u.cb(t)
				}),
				x = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.mb(n, e),
					screen: u.cb(n)
				}),
				_ = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.mb(n, e),
					screen: u.cb(n)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.lb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.lb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				k = e => t => ({
					...p(t),
					subreddit: u.lb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.yb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.K(n, e),
					subreddit: o.kb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.o(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/sortBy.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/wiki.ts");
			const o = e => {
				return r()(e, e => `${e.path}/`.startsWith(`${i.i}/`) ? `\0${e.path}` : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					n = [];
				return o(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						r = s.parent ? t.get(s.parent) : null;
					r ? r.children.push(s) : n.push(s), t.set(s.path, s)
				}), n
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: n,
					subredditName: s,
					wikiPageName: r
				} = e;
				return `[${s}]--[${r}]--[rev1:${n}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/wiki.ts");
			const r = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				i = /^[-\w]+$/;
			var o;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(o || (o = {}));
			const a = e => {
					if (!i.test(e.toLowerCase())) return o.InvalidPageName
				},
				d = (e, t) => {
					const n = e.toLowerCase(),
						i = n.split("/")[0],
						a = s.b.has(i),
						d = s.f.has(i) && n !== s.h && n !== s.k;
					if (a || d) return o.RestrictedPageName;
					if (!r.test(n)) return o.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === n)) return o.PageAlreadyExists
					}
					return n.length > s.d ? o.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				r = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(a);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/pages/shared.ts"),
				d = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = n("./src/reddit/components/ContentGate/index.tsx"),
				l = n("./src/reddit/components/HeaderImage/index.tsx"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: n
					} = e, s = Object(m.a)(n, u.bb.HOT, {});
					return r.a.createElement(p.a, {
						listingKey: s,
						listingName: n.toLowerCase(),
						subredditId: t.id,
						subredditName: n
					})
				},
				h = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/constants/wiki.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				E = n("./src/reddit/components/JumpToContent/index.tsx"),
				w = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				O = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				C = n("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				j = n.n(C);

			function S(e) {
				const {
					wikiPageName: t,
					subredditName: n
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(E.a, null), s.createElement(O.a, {
					isModHub: !1,
					className: j.a.topBar,
					wikiPageName: t,
					subredditName: n
				}), s.createElement(w.a, {
					showRevisionInfo: !0,
					subredditName: n,
					wikiPageName: t
				}))
			}
			var N = n("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				I = n.n(N);
			class T extends r.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: n,
						queryParams: s
					} = e, {
						wikiSubRoute: i,
						wikiPageName: o
					} = n, a = s[x.S], d = s[x.T], c = x.U in s;
					switch (i) {
						case _.m.Create:
						case _.m.Edit:
							return r.a.createElement(g.a, {
								contentClassName: I.a.wikiPageEditorContent,
								isCreation: i === _.m.Create,
								subredditName: t,
								topBarClassName: I.a.communityWikiTopBar,
								wikiPageName: o
							});
						case _.m.Revisions:
							return r.a.createElement(k.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? r.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? r.a.createElement(f.a, {
								revisionId: a ? Object(y.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? r.a.createElement(S, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var P = Object(v.u)()(T),
				D = n("./src/reddit/constants/componentSizes.ts"),
				L = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				F = n("./src/reddit/layout/page/Listing/index.tsx"),
				R = n("./src/reddit/selectors/subreddit.ts"),
				B = n("./src/reddit/selectors/user.ts");
			const M = Object(v.u)(),
				A = Object(i.b)(() => Object(o.c)({
					contentGateInfo: (e, t) => {
						let {
							match: n
						} = t;
						return Object(B.g)(e, n.params.subredditName)
					},
					layout: v.S,
					over18Pref: B.lb,
					subreddit: (e, t) => {
						let {
							match: n
						} = t;
						return Object(R.C)(e, {
							subredditName: n.params.subredditName || _.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: n
						} = t;
						return n.params.subredditName || _.e
					},
					wikiPageName: (e, t) => {
						let {
							match: n
						} = t;
						return n.params.wikiPageName || _.i
					}
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class W extends r.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: n,
						subredditName: s
					} = this.props, i = !!n && n.isNSFW && !B.lb, o = Object(L.a)(t, i, s);
					if (o) return r.a.createElement(c.default, o);
					const a = `/r/${s}/`;
					return r.a.createElement(F.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: D.h,
						navBar: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: n ? n.name : s,
							maxWidth: D.h,
							subredditOrProfile: n,
							url: a
						}), r.a.createElement(d.a, {
							subreddit: n || void 0,
							subredditId: n ? n.id : void 0,
							subredditName: s,
							subredditUrl: a
						})),
						content: r.a.createElement(P, {
							subredditName: s
						}),
						sidebar: n && r.a.createElement(b, {
							subreddit: n,
							subredditName: s
						})
					})
				}
			}
			t.default = M(A(W))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.e[Object(i.S)(e, {})] === r.d.Card,
				d = e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.yb
				}) === s.Yc.Treatment
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.wc
				}), o.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.vc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Vf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.bg.SmIcon || t === s.bg.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(o.cb)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return k
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				o = (e, t) => {
					var n;
					const {
						subredditName: s
					} = t;
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				a = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.api.wiki.pending[n.toLowerCase()]
				},
				d = (e, t) => {
					var n;
					const s = Object(r.a)(t);
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				c = (e, t) => {
					let {
						listingKey: n
					} = t;
					return e.pages.subredditWiki.revisions.listings[n]
				},
				l = (e, t) => {
					let {
						listingKey: n
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[n]
				},
				u = (e, t) => {
					let {
						listingKey: n
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[n]
				},
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, t) => {
					let {
						key: n
					} = t;
					return e.pages.subredditWiki.diff[n]
				},
				b = (e, t) => {
					const n = Object(r.a)(t);
					return e.pages.subredditWiki.pageSettings[n]
				},
				h = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[n.toLowerCase()]
				},
				g = Object(s.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n.toLowerCase(),
						r = e.pages.subredditWiki.wikiContributors.listing,
						o = r.userOrder[s],
						a = r.models[s];
					return o ? o.map(e => a[e]) : i
				}),
				f = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[n.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[n.toLowerCase()]
				},
				_ = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[n.toLowerCase()]
				},
				v = Object(s.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n.toLowerCase(),
						r = e.pages.subredditWiki.wikiBannedContributors.listing,
						o = r.userOrder[s],
						a = r.models[s];
					return o ? o.map(e => a[e]) : i
				}),
				y = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[n.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[n.toLowerCase()]
				}
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
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.ff97829e7211c674189a.js.map