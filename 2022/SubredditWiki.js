// https://www.redditstatic.com/desktop2x/SubredditWiki.b9032961be0290fdc6c0.js
// Retrieved at 7/27/2022, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
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
						v = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = r(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !_ && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: x || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: x || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: v
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? n = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, x && (n.version = x)) : i ? (n = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, x && (n.version = x)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: r(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && x && (n.version = x)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || r(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && i ? (n[i] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : k ? (n.xbox = e, n.osname = "Xbox") : h ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var O = "";
					n.windows ? O = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? O = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? O = (O = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? O = (O = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? O = r(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = r(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = r(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);
					var w = !n.windows && O.split(".")[0];
					return _ || d || "ipad" == i || o && (3 == w || w >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == i || "ipod" == i || o || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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
		"./src/reddit/actions/pages/shared.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				n = r("./src/reddit/helpers/routeKey/index.ts"),
				i = r("./src/reddit/helpers/trackers/screenview.ts"),
				o = r("./src/telemetry/index.ts"),
				a = r("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const r = t(),
					{
						currentPage: d
					} = r.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(s.a)(r),
					u = Object(n.b)(c, r, l);
				u && o.c.has(u) && Object(i.k)(c, r, a.TimerType.InApp, o.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), r.d(t, "subredditWikiDataLoaded", (function() {
				return qe
			})), r.d(t, "subredditWikiDataFailed", (function() {
				return Ke
			})), r.d(t, "fetchSubredditWikiData", (function() {
				return Ze
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
				v = r("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				x = r("./src/lib/makeGqlRequest/index.ts"),
				_ = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var k = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				O = r("./src/reddit/selectors/subredditWiki.ts");
			const w = Object(d.a)("WIKI_DIFF_PENDING"),
				E = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				C = e => async (t, r, s) => {
					const n = r(),
						i = Object(k.a)(e),
						o = Object(O.i)(n, {
							key: i
						});
					if (o && (o.pending || !o.error)) return !0;
					const d = {
						key: i
					};
					t(w(d));
					const c = await ((e, t) => Object(x.a)(e, {
						...y,
						variables: {
							...t,
							comparisonRevisionId: Object(_.b)(t.comparisonRevisionId),
							revisionId: Object(_.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							r = t && t.page && t.page.revisionComparisonDiffHtml;
						r ? u = r : l = {
							type: a.I.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: a.I.UNKNOWN_ERROR
					};
					return t(l ? j({
						...d,
						error: l
					}) : E({
						...d,
						htmlDiff: u
					})), !l
				};
			var I = r("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				S = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				N = r("./src/reddit/constants/parameters.ts"),
				P = r("./src/reddit/constants/wiki.ts"),
				T = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				D = r("./src/reddit/helpers/brandSafety/index.ts"),
				F = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				B = r("./src/reddit/models/Toast/index.ts"),
				R = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				L = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				U = r("./src/lib/initializeClient/installReducer.ts"),
				M = r("./node_modules/redux/es/redux.js");
			const W = {};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
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
				q = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const K = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
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
						case q.a: {
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
			const Z = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
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
					case q.b: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case q.d:
					case q.c: {
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
						case q.d:
						case q.b:
						case q.c: {
							const {
								key: r
							} = t.payload, s = t.type === q.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				re = Object(M.c)({
					error: $,
					pending: te
				}),
				se = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ne = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c: {
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
					case q.a: {
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
						case q.c: {
							const {
								revisions: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						case q.a: {
							const {
								page: r
							} = t.payload, s = r.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case q.e: {
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
				de = Object(M.c)({
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
				fe = Object(M.c)({
					error: pe,
					pending: he
				});
			const ge = {};
			var ve = function() {
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
				xe = r("./node_modules/lodash/uniq.js"),
				_e = r.n(xe);
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
								[r]: _e()([...e[r] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: _e()([...s, ...e[r] || []])
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
				Oe = Object(M.c)({
					afterToken: ue,
					api: fe,
					models: ve,
					userOrder: ke
				});
			const we = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
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
				je = Object(M.c)({
					listing: Oe,
					search: Ee
				}),
				Ce = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ie = {};
			var Se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
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
			const Ne = {};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
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
			const Te = {};
			var De = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
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
				Fe = Object(M.c)({
					error: Pe,
					pending: De
				});
			const Be = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
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
			const Le = {};
			var Ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
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
								[r]: _e()([...e[r] || [], ...s])
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
				Ue = Object(M.c)({
					afterToken: Se,
					api: Fe,
					models: Re,
					userOrder: Ae
				});
			const Me = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
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
				He = Object(M.c)({
					listing: Ue,
					search: We
				}),
				ze = Object(M.c)({
					diff: H,
					directory: G,
					pages: V,
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: He
				});
			Object(U.a)({
				pages: {
					subredditWiki: ze
				}
			});
			const Ge = Object(d.a)(h.c),
				qe = Object(d.a)(h.b),
				Ke = Object(d.a)(h.a),
				Ve = (e, t, r, s) => {
					return r === P.j ? Je(e, t) : !!Object(O.c)(e, {
						subredditName: t,
						wikiPageName: r,
						revisionId: s
					})
				},
				Je = (e, t) => !!Object(O.b)(e, {
					subredditName: t
				}),
				Ze = e => async (t, r, n) => {
					const {
						canShowFailToast: o,
						wikiPageName: d
					} = e, c = d === P.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(F.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: l,
						pageKey: u
					}));
					const m = await Object(T.a)(n.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(qe({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(Ke({
						options: l,
						pageKey: u,
						error: m.error || {
							type: a.I.NOT_FOUND_ERROR
						}
					})), o && t(Object(f.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: B.b.Error,
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
					return async (r, s) => {
						const n = s(),
							i = {
								sort: a.W.HOT
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
					} = s, a = Object(L.a)(n, s);
					let d = !1;
					return P.l.includes(i || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : n !== a && (await t(Object(o.c)(a)), d = !0), d
				}, Qe = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (n, i, o) => {
						const {
							subredditName: d = P.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[N.G], m = t[N.H], p = u ? Object(_.a)(u) : void 0, b = m ? Object(_.a)(m) : void 0, h = c === P.j, x = l === P.m.Revisions;
						let y = !1,
							k = !1;
						if (r) {
							const {
								pageName: t
							} = e;
							y = t === a.gc.WikiContributors, k = t === a.gc.WikiBanned
						}
						const O = i(),
							w = (h || r) && !Je(O, d),
							E = !!c && !Ve(O, d, c, p),
							j = [];
						j.push(n(Ye(d))), (w || E) && j.push(n(Ze({
							includeDirectory: w,
							includePageData: E,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === P.m.Settings && c && j.push(n(Object(I.c)(d, c))), c && p && b && j.push(n(C({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), x && j.push(n(Object(S.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), y && j.push(n(Object(v.e)(d))), k && j.push(n(Object(g.e)(d))), (await Promise.all(j)).every(Boolean) || n(Object(f.f)({
							kind: B.b.Error,
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
					} = e, i = s.subredditName || P.e;
					t(u.m({
						title: s.wikiPageName ? `${s.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Qe(s, n));
					const o = Object(A.z)(r(), {
							subredditName: i
						}),
						a = r();
					o && (a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(R.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(D.a)([], [o])
					})))
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return se
			})), r.d(t, "b", (function() {
				return oe
			})), r.d(t, "e", (function() {
				return ae
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				i = r.n(n),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: r
			});
			var x = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = r("./src/reddit/models/SubredditModeration/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/activeModalId.ts"),
				O = r("./src/reddit/selectors/bannedUser.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				C = r("./src/lib/initializeClient/installReducer.ts"),
				I = r("./node_modules/redux/es/redux.js");
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.s:
					case j.r:
						return null;
					case j.q:
						return t.payload;
					default:
						return e
				}
			};
			const N = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.s: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(_.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case j.r:
						case j.q: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(_.e)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(I.c)({
					error: S,
					pending: P
				});
			const D = {};
			var F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(_.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				B = r("./src/reddit/actions/inContextModeration.ts");
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				U = r("./node_modules/icepick/icepick.js");
			const M = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.p:
					case j.r: {
						const {
							subredditId: r,
							bannedUsers: s
						} = t.payload;
						return Object(U.merge)(e, {
							[r]: s
						})
					}
					case j.w: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(U.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.v:
					case j.u:
						return null;
					case j.t:
						return t.payload;
					default:
						return e
				}
			};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
							return !0;
						case j.u:
						case j.t:
							return !1;
						default:
							return e
					}
				},
				G = Object(I.c)({
					error: H,
					pending: z
				});
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
						case j.t:
							return null;
						case j.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				K = Object(I.c)({
					api: G,
					result: q
				});
			const V = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case j.w: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case j.p: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				Z = Object(I.c)({
					api: T,
					fetchedTokens: F,
					inContext: R,
					loadMore: A,
					models: W,
					search: K,
					userOrder: J
				});
			Object(C.a)({
				features: {
					banned: Z
				}
			});
			const Y = Object(o.a)(j.s),
				X = Object(o.a)(j.r),
				Q = Object(o.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, n) => {
						let {
							apiContext: i
						} = n;
						const o = s(),
							a = t.after || "",
							d = Object(_.e)(e, a),
							c = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || c) return;
						r(Y({
							subredditId: e,
							fetchedToken: a
						}));
						const l = o.subreddits.models[e].name,
							u = await v(i(), l, t);
						u.ok ? r(X({
							...u.body,
							fetchedToken: a
						})) : r(Q({
							subredditId: e,
							fetchedToken: a
						}))
					}
				},
				ee = Object(o.a)(j.v),
				te = Object(o.a)(j.u),
				re = Object(o.a)(j.t),
				se = (e, t) => async (r, s, n) => {
					let {
						apiContext: i
					} = n;
					const o = s().subreddits.models[e].name,
						a = {
							username: Object(x.a)(t)
						};
					r(ee());
					const d = await v(i(), o, a);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, ne = Object(o.a)(j.p), ie = Object(o.a)(j.w), oe = (e, t, r) => async (n, o, d) => {
					let {
						apiContext: c
					} = d;
					const u = o(),
						f = u.subreddits.models[e].url,
						g = u.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), n(Object(a.h)(r));
					const _ = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(c(), f, t);
					if (_.ok) {
						n(Object(a.e)(r));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: y.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await v(c(), g, e);
						i.ok && n(ne(i.body))
					} else {
						n(Object(a.f)(r, _.error));
						const e = i()(_, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ae = (e, t) => async (r, n, o) => {
					let {
						apiContext: a
					} = o;
					const d = n().subreddits.models[e].url,
						c = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(a(), d, t);
					if (c.ok) r(ie({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: y.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(c, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, s) => {
					const n = s();
					await Promise.all([(async () => {
						if (!Object(k.b)(u.a.BAN_USER)(n) && !Object(w.R)(n, {
								subredditId: e
							})) {
							const t = Object(w.U)(n, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const s = Object(E.Ab)(n, {
							userName: t
						});
						if (!s) return;
						const i = Object(O.h)(n, {
							subredditId: e
						});
						i && i[s.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
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
				return x
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return E
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
				v = Object(i.a)(h.b),
				x = e => async (t, r, s) => {
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
							type: n.I.UNKNOWN_ERROR
						};
						t(v({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, _ = Object(i.a)(h.a), y = (e, t) => async (r, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							r(_({
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
				}, k = Object(i.a)(h.e), O = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.jb.POST,
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
						u.error.type === n.I.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, w = Object(i.a)(h.f), E = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.jb.POST,
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
					})), r(w({
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
						buttonAction: E(e, t)
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
				return x
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return E
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
				v = Object(i.a)(h.b),
				x = e => async (t, r, s) => {
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
							type: n.I.UNKNOWN_ERROR
						};
						t(v({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, _ = Object(i.a)(h.a), y = (e, t) => async (r, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							r(_({
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
				}, k = Object(i.a)(h.e), O = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.jb.POST,
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
						t === n.I.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.I.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, w = Object(i.a)(h.f), E = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.jb.POST,
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
					})), r(w({
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
						buttonAction: E(e, t)
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
				return w
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "d", (function() {
				return S
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
				v = r("./src/reddit/models/Toast/index.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(_.c),
				k = (e, t) => async (r, s, n) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						a = await b(n.gqlContext(), i),
						d = Object(x.F)(s(), e);
					if (Object(x.W)(s(), d) || await r(Object(o.h)(e, d)), a.ok) {
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
				}, O = Object(i.a)(_.b), w = (e, t, r) => async (n, i, o) => {
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
							n(O({
								editorsInfo: i,
								afterToken: o,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(a.f)({
						kind: v.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t, r)
					}));
					return c.ok
				}, E = Object(i.a)(_.d), j = e => {
					let {
						editPermissions: t,
						isVisible: r,
						wikiPageName: s,
						subredditName: i
					} = e;
					return async (e, o, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: n.jb.POST,
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
						return c.ok && e(E({
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
							method: n.jb.POST,
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
							kind: v.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(k(t, i));
						else if (m.error) {
							const t = m.error.type;
							let r = s.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === n.I.NOT_FOUND_ERROR && (r = s.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(a.f)({
								kind: v.b.Error,
								text: r
							}))
						}
						return m.ok
					}
				}, I = Object(i.a)(_.a), S = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: s
					} = e;
					return async (e, i, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: n.jb.POST,
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
							kind: v.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(I({
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
				return E
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return S
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
				method: n.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.jb.POST,
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
				v = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/subredditWiki.ts"),
				y = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const k = Object(i.a)(y.d),
				O = Object(i.a)(y.c),
				w = Object(i.a)(y.b),
				E = e => async (t, r, i) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = r(), h = Object(g.a)(e), v = Object(_.p)(b, {
						listingKey: h
					});
					if (!a && !!v) return !0;
					const y = v && v.pageInfo.endCursor || void 0;
					if (!(!v || v.pageInfo.hasNextPage)) return !0;
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
					const I = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(i.gqlContext(), j);
					if (I.ok) {
						const e = I.body;
						if (e.data.subreddit) {
							const r = f(e.data);
							t(O({
								...C,
								...r
							}))
						}
					} else {
						const r = I.error || {
							type: n.I.UNKNOWN_ERROR
						};
						t(w({
							...C,
							error: r
						})), l && t(Object(o.f)({
							kind: x.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: E(e)
						}))
					}
					return I.ok
				}, j = Object(i.a)(y.a), C = e => async (t, r, n) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(v.a)({
						...e,
						revisionId: void 0
					}), l = Object(g.a)({
						...e,
						isRecent: !1
					}), u = Object(g.a)({
						...e,
						isRecent: !0
					}), m = Object(_.p)(r(), {
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
							kind: x.b.SuccessCommunityGreen,
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
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}, I = Object(i.a)(y.e), S = e => async (t, r, n) => {
					const i = await b(n.apiContext(), e);
					if (i.ok) {
						const r = i.body.status;
						t(I({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(o.f)({
						kind: x.b.Error,
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
		"./src/reddit/components/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/Admin/index.m.less"),
				d = r.n(a),
				c = r("./src/lib/constants/icons.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(o.e)(p) ? i.a.createElement("span", {
					className: d.a.admin
				}, s.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : i.a.createElement(l.a, {
					name: c.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
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
					v = t => {
						var r;
						if (null === (r = e.onClick) || void 0 === r || r.call(e, t), f || g) {
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${a.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.db)(r))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: s,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: v
				}), e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(o.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(c.default, b({}, null !== (r = e.linkProps) && void 0 !== r ? r : {}, {
					className: s,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: v
				}), e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
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
					className: c.a.button,
					onClick: () => u(r)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: n,
					sendEvent: o,
					contextId: a,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: b,
					onClick: h,
					onAddUserToQuickReplyList: f,
					children: g,
					style: v
				} = e;
				return i.a.createElement(c.t, {
					onClick: e => {
						if (h && h(e), t(), b === s.awardNotification) return f();
						o(Object(l.b)(a))
					},
					className: n,
					text: r,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: v
				}, g)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: s
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.b)(s, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(s))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
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
				u = r("./src/reddit/actions/subreddit/notifications.ts"),
				m = r("./src/lib/combineRefs/index.tsx"),
				p = r("./src/lib/hooks/useOnClickOutside.ts"),
				b = r("./src/lib/hooks/useTooltip.ts"),
				h = r("./src/reddit/components/CommonTooltip/index.m.less"),
				f = r.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var v = n.a.memo((function(e) {
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
					}, [t]), t ? n.a.createElement("div", g({
						id: r,
						className: Object(a.a)(f.a.tooltip, i, {
							[f.a.visible]: c
						})
					}, d.popperProps), c && n.a.createElement(n.a.Fragment, null, d.arrowProps && n.a.createElement("div", g({
						className: Object(a.a)(f.a.arrow, o)
					}, d.arrowProps)), d.children)) : null
				})),
				x = r("./src/reddit/models/Subreddit/index.ts");
			const _ = e => {
					switch (e) {
						case x.b.FREQUENT:
							return "notification_frequent";
						case x.b.OFF:
							return "notification_off";
						case x.b.LOW:
						default:
							return "notification"
					}
				},
				y = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				k = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var O = r("./node_modules/fbt/lib/FbtPublic.js"),
				w = r("./src/reddit/controls/Dropdown/index.tsx"),
				E = r("./src/reddit/controls/Dropdown/Row.tsx"),
				j = r("./src/reddit/icons/fonts/index.tsx"),
				C = r("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				I = r.n(C);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var N = e => {
					return n.a.createElement(w.a, {
						id: e.dropdownId,
						className: I.a.notificationDropdown
					}, [{
						displayText: O.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.b.FREQUENT),
						isSelected: e.notificationLevel === x.b.FREQUENT,
						icon: n.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.b.FREQUENT
						})
					}, {
						displayText: O.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.b.LOW),
						isSelected: e.notificationLevel === x.b.LOW,
						icon: n.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.b.LOW
						})
					}, {
						displayText: O.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.b.OFF),
						isSelected: e.notificationLevel === x.b.OFF,
						icon: n.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.b.OFF
						})
					}].map(e => n.a.createElement(E.b, S({
						className: Object(a.a)(I.a.notificationDropdown, I.a.notificationRow, {
							[I.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/reddit/selectors/telemetry.ts");
			const D = e => t => ({
				...T.n(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: T.hb(t)
			});
			var F = r("./src/reddit/hooks/useTracking.ts"),
				B = r("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const R = c.a.img("SubredditIcon", I.a),
				L = c.a.wrapped(B.a, "DefaultIcon", I.a);
			var A = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: r,
						subredditIcon: s,
						onHide: i,
						onUpdate: o
					} = e;
					const a = Object(F.a)(),
						d = r ? n.a.createElement(R, {
							src: s || void 0
						}) : n.a.createElement(L, null),
						c = `r/${t}`;
					return n.a.createElement("div", {
						className: I.a.notificationPopup
					}, n.a.createElement("div", {
						className: I.a.title
					}, n.a.createElement("h2", null, O.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), n.a.createElement("h3", null, O.fbt._("{subreddit name}", [O.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), n.a.createElement("div", {
						className: I.a.subredditWrapper
					}, n.a.createElement("div", {
						className: I.a.subredditTitle
					}, d, n.a.createElement("span", null, c), n.a.createElement(j.a, {
						name: "notification_frequent",
						className: I.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(P.t, {
						className: I.a.subscribeButton,
						priority: P.c.Primary,
						size: P.d.M,
						text: O.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), o(x.b.FREQUENT), a(D(x.b.FREQUENT.toLowerCase()))
						}
					})), n.a.createElement("button", {
						className: I.a.hideButton,
						onClick: i
					}, O.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				U = r("./src/reddit/helpers/localStorage/index.ts");
			var M = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var W = e => {
					const t = Object(i.d)(),
						r = Object(F.a)(),
						o = Object(b.b)(y),
						a = Object(b.b)(k),
						[d, c] = function(e, t) {
							const [r, n] = Object(s.useState)(Object(U.O)(e, t));
							return [r, Object(s.useCallback)(() => {
								const r = Object(U.a)(e, t);
								n(r)
							}, [e, t, n])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(M.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== x.b.LOW && e.notificationLevel !== x.b.OFF || c()
					}, [e.subredditId]);
					const h = 2 === d,
						f = () => {
							o.hide()
						},
						g = () => {
							a.hide()
						};
					Object(s.useEffect)(() => (h && (a.update && a.update(), a.show()), () => {
						g(), f()
					}), [e.subredditName, h]);
					const O = () => {
							g(), o.show()
						},
						w = (e => `dropdown-${e}`)(e.subredditName),
						E = (e => `popup-${e}`)(e.subredditName);
					Object(p.a)(w, f);
					const C = Object(s.useCallback)(e => {
							e.stopPropagation(), o.visible ? f() : O()
						}, [f, O, o.visible]),
						S = Object(s.useCallback)(t => {
							t === x.b.FREQUENT && Object(U.cb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						P = Object(s.useCallback)(s => {
							const {
								subredditId: n
							} = e;
							f(), g(), t(Object(u.b)({
								subredditId: n,
								notificationLevel: s,
								successCallback: () => S(s)
							})), r(D(s.toLowerCase()))
						}, [f, e.subredditId, t, r]);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						type: "button",
						className: I.a.notificationButton,
						ref: Object(m.a)(o.target.ref, a.target.ref),
						onClick: C,
						"data-testid": "subredditNotificationButton"
					}, n.a.createElement(j.a, {
						name: _(e.notificationLevel),
						className: I.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(v, {
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: w
					}, n.a.createElement(N, {
						dropdownId: w,
						notificationLevel: e.notificationLevel,
						onClick: P
					})), h && !l && n.a.createElement(v, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: E,
						className: I.a.popupTooltip
					}, n.a.createElement(A, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: P
					})))
				},
				H = r("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				z = r("./src/reddit/components/SubredditNav/index.tsx"),
				G = r("./src/reddit/components/SubscribeButton/index.tsx"),
				q = r("./src/reddit/constants/componentSizes.ts"),
				K = r("./src/reddit/constants/postLayout.ts"),
				V = r("./src/reddit/constants/posts.ts"),
				J = r("./src/reddit/featureFlags/index.ts"),
				Z = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Y = r("./src/reddit/constants/tracking.ts");
			var X = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				Q = r("./src/reddit/hooks/useWindowEvent.ts"),
				$ = r("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ee = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				te = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				re = r("./src/reddit/selectors/subreddit.ts"),
				se = r("./src/reddit/selectors/user.ts"),
				ne = r("./src/reddit/selectors/widgets.ts"),
				ie = r("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				oe = r.n(ie);
			const ae = c.a.img("SubredditIcon", oe.a),
				de = Object(o.c)({
					isNsfwBlurSubreddit: ee.e,
					notificationLevel: re.H,
					spPollsEnabled: J.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(te.a)(e, {
							subredditId: r
						})
					},
					tournamentsEnabled: (e, t) => {
						let {
							subredditId: r
						} = t;
						return !!r && Object(re.O)(e, {
							subredditId: r
						})
					},
					userId: se.i,
					userIsSubscriber: (e, t) => {
						let {
							subredditName: r
						} = t;
						const s = r;
						return Object(re.gb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(ne.f)(e, {
							subredditId: r
						}) : void 0
					}
				}),
				ce = {
					threshold: [.5, .001],
					rootMargin: `${1-q.f}px 0px 0px 0px`
				};
			t.a = Object(i.b)(de, (e, t) => ({
				_updateSubredditInfo: () => {
					var r;
					const s = t.subredditId || (null === (r = t.subreddit) || void 0 === r ? void 0 : r.id);
					if (s) return e(Object(u.a)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: x.b.LOW
							}
						}
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
					c = Object(i.e)($.b),
					u = Object(i.e)($.a),
					m = c || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[f, g] = Object(s.useState)(),
					[v, x] = Object(s.useState)(null),
					_ = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: r
							} = t;
							r >= .5 ? e(!1) : r <= .001 && e(!0)
						})
					})(b), []);
				Object(Q.a)("resize", ((e, t, r) => () => {
					var s;
					e(t && r ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(g, v, m)), Object(X.a)(h, _, ce);
				const y = e.subreddit && Object(Z.a)(e),
					k = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					O = r.charAt(0).toUpperCase() + r.slice(1),
					w = !!e.subreddit && e.subredditInlineEditingEnabled,
					E = Object(a.a)(oe.a.SubredditIcon, oe.a.editableIcon, {
						[oe.a.emptyEditableIcon]: !y
					}),
					j = k ? n.a.createElement(H.a, {
						className: E,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : n.a.createElement(B.a, {
						className: oe.a.DefaultIcon
					}),
					C = k ? n.a.createElement(ae, {
						className: Object(a.a)(oe.a.SubredditIconImg, {
							[oe.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : n.a.createElement(B.a, {
						className: Object(a.a)(oe.a.DefaultIcon, {
							[oe.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					I = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					S = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px";
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(a.a)(oe.a.wrapper, {
						[oe.a.stickyWrapper]: m,
						[oe.a.isSticking]: p
					})
				}, n.a.createElement("div", {
					className: oe.a.container,
					style: {
						maxWidth: S
					},
					ref: m ? x : void 0
				}, n.a.createElement("div", {
					className: oe.a.subredditMetaContainer
				}, w ? j : C, n.a.createElement("div", {
					className: Object(a.a)(oe.a.textContainer, {
						[oe.a.textContainerNoIcon]: !k
					})
				}, n.a.createElement("div", {
					className: Object(a.a)(oe.a.text, {
						[oe.a.blur]: e.isNsfwBlurSubreddit
					})
				}, n.a.createElement("h1", {
					className: oe.a.title
				}, d || O), !!d && n.a.createElement("h2", {
					className: oe.a.description
				}, "r/", r)), n.a.createElement("div", {
					className: oe.a.buttonWrapper
				}, n.a.createElement("div", {
					className: oe.a.subscribeButtonContainer
				}, n.a.createElement(G.a, {
					className: oe.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...T.n(t),
							source: "sticky_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: T.hb(t)
						}))(t) : (e => t => ({
							...T.n(t),
							source: "id_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: T.hb(t)
						}))(t)
					},
					identifier: {
						name: r,
						type: V.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(U.cb)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && n.a.createElement("div", {
					className: oe.a.notificationButtonContainer
				}, n.a.createElement(W, {
					notificationLevel: e.notificationLevel,
					subredditName: r,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: k,
					userId: e.userId
				}))))), I && n.a.createElement(z.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: o,
					subredditId: t,
					subredditNavContainerClassName: oe.a.subredditNavContainer
				}))), n.a.createElement("div", {
					className: oe.a.intersectionWrapper
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
				v = r("./src/reddit/components/RichTextJson/index.tsx"),
				x = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = r("./node_modules/lodash/flatMap.js"),
				y = r.n(_),
				k = r("./src/lib/linkMatchers/index.ts"),
				O = r("./src/lib/linkMatchers/customLinks.ts"),
				w = r("./src/reddit/controls/OutboundLink/index.tsx");
			const E = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(E);
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
						const t = k.f.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let s = null;
						for (const n of t) r.push(e.slice(s ? s.lastIndex : 0, n.index)), s = n, r.push([n.url, n.text]);
						return s && r.push(e.slice(s.lastIndex)), r
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [s, n] = t;
							return i.a.createElement(w.b, {
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
				I = r("./src/reddit/constants/parameters.ts"),
				S = r("./src/reddit/contexts/PageLayer/index.tsx"),
				N = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => i.a.createElement(P.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = r("./src/reddit/models/ContentGate.ts"),
				B = r("./src/lib/constants/index.ts"),
				R = r("./src/reddit/selectors/platform.ts"),
				L = r("./src/reddit/selectors/user.ts");
			var A = r("./src/reddit/selectors/meta.ts"),
				U = r("./src/reddit/components/ContentGate/index.m.less"),
				M = r.n(U);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(D, "PrivateKey", M.a), z = l.a.div("ButtonsContainer", M.a), G = l.a.div("Container", M.a), q = l.a.div("ContainerExp", M.a), K = l.a.div("Description", M.a), V = l.a.div("PrivateSubredditDetails", M.a), J = l.a.div("PrivateSubredditDescription", M.a), Z = l.a.h3("PrivateSubredditName", M.a), Y = l.a.a("Link", M.a), X = l.a.wrapped(N.n, "LinkRouterButton", M.a), Q = l.a.wrapped(N.m, "LinkButton", M.a), $ = l.a.wrapped(N.q, "SecondaryLinkRouterButton", M.a), ee = l.a.wrapped(N.p, "SecondaryLinkButton", M.a), te = l.a.wrapped(X, "GoHomeLinkButton", M.a), re = l.a.wrapped(h.a, "CreateCommunityButton", M.a), se = l.a.img("Image", M.a), ne = l.a.img("ImagePlaceholder", M.a), ie = l.a.wrapped(X, "LeftLinkRouterButton", M.a), oe = l.a.wrapped(Q, "LeftLinkButton", M.a), ae = l.a.wrapped(ee, "SecondaryLeftLinkButton", M.a), de = l.a.wrapped($, "SecondaryLeftLinkRouterButton", M.a), ce = l.a.h3("Title", M.a), le = l.a.div("PageBody", M.a), ue = l.a.div("InterstitialMessageWrapper", M.a), me = Object(c.c)({
				isLoggedIn: L.P,
				origin: A.k,
				user: L.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.Q)(e)) return !1;
					const t = Object(R.d)(e);
					if (!t) return !1;
					const r = Object(L.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = r;
					if (!s) return !1;
					const n = 30 * B.B;
					return s > Date.now() - n
				})(e),
				isSeo: A.h
			}), pe = Object(S.u)(), be = Object(o.b)(me, (e, t) => {
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
						await e(Object(m.o)())
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
					quarantineRequiresEmail: _,
					quarantineMessage: y,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: w,
					interstitialWarningMessageHtml: E,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: S,
					subredditDescription: N,
					subredditName: P,
					user: T
				} = e, D = async () => {
					if (a ? await S() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(I.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case F.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ce, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", P)], {
							hk: "2lyDwB"
						})), i.a.createElement(K, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(z, null, T ? i.a.createElement(ae, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(oe, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), T ? i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ce, null, r === F.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(K, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(z, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, W._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ee, {
							onClick: D,
							redditStyle: !0
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(H, null), i.a.createElement(ce, null, "r/", P, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), N && N.length && i.a.createElement(V, null, i.a.createElement(Z, null, "r/", P), i.a.createElement(J, null, i.a.createElement("div", null, N))), i.a.createElement(K, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(z, null, T ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: M.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), i.a.createElement(ae, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ae, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && i.a.createElement(x.a, {
							subredditName: P
						}));
					case F.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ce, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(K, null, W._("This community is {=quarantined}", [W._param("=quarantined", i.a.createElement(Y, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ue, null, O ? i.a.createElement(v.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : k ? i.a.createElement(g.a, {
							html: k
						}) : y || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(z, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? i.a.createElement(z, null, i.a.createElement(de, {
								to: "/",
								redditStyle: !0
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(Q, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(z, null, i.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, W._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(T, n, _)));
					case F.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ce, null, W._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(K, null, i.a.createElement(ue, null, j ? i.a.createElement(v.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? i.a.createElement(g.a, {
							html: E
						}) : w), W._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(z, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, W._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(ee, {
							onClick: o,
							redditStyle: !0
						}, W._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case F.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ce, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", P)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(K, null, e ? i.a.createElement(C, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ne, null), i.a.createElement(ce, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(K, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(z, null, T && i.a.createElement(re, {
							eventSource: "content_gate"
						}), i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", i.a.createElement(Y, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ce, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(K, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(z, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(z, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(a.i)(e => {
				const t = Object(n.useContext)(d.a) ? q : G;
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
				v = r("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				_ = v.a.wrapped(l.c, "StyledTooltip", g.a),
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
						tooltipId: x
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
					id: x,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(1), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
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
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				u = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(m);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: s,
					isProfileCard: m,
					isLoading: b,
					imageUrl: h,
					onFileSelected: f
				} = e;
				const g = Object(i.e)(u.a);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.Container, s)
				}, n.a.createElement("label", {
					className: p.a.HitBox
				}, n.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, h ? n.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: h
				}) : r), n.a.createElement(a.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: g ? b : void 0
				}), !b && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: m
					})
				}, n.a.createElement(c.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), b && n.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
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
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/isPost.ts"),
				l = r("./src/reddit/selectors/commentSelector.ts"),
				u = r("./src/reddit/selectors/gold/awardIcon.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/selectors/modUserNotes.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				h = r("./src/reddit/selectors/profile.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/selectors/userFlair.ts"),
				y = r("./src/reddit/selectors/userPrefs.ts"),
				k = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				w = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./src/config.ts"),
				j = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = r("./src/lib/lessComponent.tsx"),
				I = r("./src/lib/prettyPrintNumber/index.ts"),
				S = r("./src/reddit/components/Admin/index.tsx"),
				N = r("./src/reddit/components/ChatButton/index.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				D = r("./src/reddit/components/SubscribeButton/index.tsx"),
				F = r("./src/reddit/components/UserIcon/index.tsx"),
				B = r("./src/reddit/controls/Button/index.tsx"),
				R = r("./src/reddit/endpoints/profile/info.ts"),
				L = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				A = r("./src/reddit/icons/fonts/Info/index.tsx"),
				U = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				M = r("./src/reddit/models/Gold/Award.ts"),
				W = r("./src/reddit/models/User/index.ts"),
				H = r("./src/reddit/components/HumanDate/index.tsx"),
				z = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				G = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				q = r("./src/reddit/actions/inContextModeration.ts"),
				K = r("./src/reddit/actions/modal.ts"),
				V = r("./src/reddit/actions/subredditModeration/ban.ts"),
				J = r("./src/reddit/constants/modals.ts"),
				Z = r("./src/reddit/components/Hovercards/helpers.ts"),
				Y = r("./src/reddit/icons/fonts/index.tsx"),
				X = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Q = r("./src/reddit/selectors/bannedUser.ts"),
				$ = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(o.c)({
				hasModMailPermissions: Object(m.b)(X.c.mail),
				isUserBanned: (e, t) => !!Object(Q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(x.Ab)(e, {
					userName: t.username
				})
			});
			class se extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: s,
						onUnbanUser: i,
						sendEvent: o,
						toggleBanModal: a,
						toggleMuteModal: d
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, s ? n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), o(L.e(t))
						}
					}, n.a.createElement(Y.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							a(), o(L.a(t))
						}
					}, n.a.createElement(Y.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							d(), o(L.d(t))
						}
					}, n.a.createElement(Y.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ne = Object(i.b)(re, (e, t) => {
					let {
						username: r,
						subredditId: s,
						contextId: n
					} = t;
					return {
						onUnbanUser: t => e(Object(V.e)(s, t)),
						requestUserBanInfo: () => e(Object(V.c)(s, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(q.c)({
								username: r,
								subredditId: s,
								contextId: n
							})), e(Object(V.a)(s, r))
						},
						toggleMuteModal: () => {
							e(Object(q.d)({
								username: r,
								subredditId: s,
								contextId: n
							})), e(Object(K.i)(J.a.MUTE_USER))
						}
					}
				})(se),
				ie = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ae = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ie.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(Z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, n.a.createElement(Y.a, {
					name: "tag",
					className: ee.a.icon
				}), oe._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ce = r.n(de);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = C.a.wrapped(F.a, "UserIcon", ce.a),
				me = C.a.wrapped(D.a, "SubscribeButton", ce.a),
				pe = C.a.wrapped(N.b, "ChatButton", ce.a),
				be = C.a.wrapped(U.a, "PremiumIcon", ce.a),
				he = C.a.wrapped(j.a, "UserNameLink", ce.a),
				fe = C.a.div("UserNameMetaData", ce.a),
				ge = C.a.div("MetaDataItem", ce.a),
				ve = C.a.div("Bullet", ce.a),
				xe = C.a.div("UserNameContainer", ce.a),
				_e = C.a.div("KarmaGrid", ce.a),
				ye = C.a.div("GenericKarma", ce.a),
				ke = C.a.a("InfoLink", ce.a),
				Oe = C.a.div("KarmaCount", ce.a),
				we = C.a.div("GenericKarmaLabel", ce.a),
				Ee = C.a.div("BannerImage", ce.a),
				je = C.a.div("UserContainer", ce.a),
				Ce = C.a.div("BottomSpacer", ce.a),
				Ie = C.a.div("Container", ce.a),
				Se = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && n.a.createElement(j.a, {
					to: "/premium"
				}, n.a.createElement(be, null)), e.user.isEmployee && n.a.createElement(S.a, null)), n.a.createElement(fe, null, n.a.createElement(ge, null, `u/${e.userName}`, n.a.createElement(ve, null, "•")), n.a.createElement(ge, null, (e.user.createdUtc || e.user.created) && n.a.createElement(H.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ne = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...R.a,
						...t
					};
					return n.a.createElement(_e, null, n.a.createElement(ye, null, n.a.createElement(Oe, null, Object(I.b)(r.fromPosts)), n.a.createElement(we, null, w.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [w.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(ye, null, n.a.createElement(Oe, null, Object(I.b)(r.fromComments)), n.a.createElement(we, null, w.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [w.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(ye, null, n.a.createElement(Oe, null, Object(I.b)(r.fromAwardsReceived)), n.a.createElement(we, null, w.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [w.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(ke, {
						href: M.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(A.a, {
						className: ce.a.infoIcon
					})))), n.a.createElement(ye, null, n.a.createElement(Oe, null, Object(I.b)(r.fromAwardsGiven)), n.a.createElement(we, null, w.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [w.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(ke, {
						href: M.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(A.a, {
						className: ce.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, r;
					const {
						className: s,
						contextId: i,
						currentUser: o,
						hideNSFWPref: a,
						hoverId: d,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: p,
						sendEvent: b,
						style: h,
						subredditId: f,
						topAwardIcon: g,
						userName: v,
						user: x,
						userFlair: _,
						isCurrentUserBanned: y,
						userProfileStyles: k,
						acceptChats: O,
						isCommentAuthorBlocked: j
					} = e;
					if (!x) return n.a.createElement(Ie, {
						style: h
					});
					const C = !!o && Object(W.e)(o) === v,
						I = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						S = x.accountIcon || `${E.a.assetPath}/img/snoo_user_placeholder.png`,
						N = null == u ? void 0 : u.flair,
						T = null == u ? void 0 : u.access,
						D = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						F = null === (r = null == _ ? void 0 : _.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: R
						} = x,
						A = !!x.snoovatarFullBodyAsset,
						U = x.isNSFW && a;
					let M;
					return M = A ? !U && k && k.bannerBackgroundImage || void 0 : U ? `${E.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(Ie, {
						className: s,
						id: d,
						style: h
					}, !A && M && n.a.createElement(Ee, {
						style: {
							backgroundImage: `url('${M}')`
						}
					}), n.a.createElement(je, null, A ? n.a.createElement(G.a, {
						isHovercard: !0,
						bannerBackgroundImage: M,
						compact: !0,
						currentUserHasSnoovatar: I,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: C,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: x.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(xe, null, n.a.createElement(ue, {
						iconUrl: S,
						isNSFW: x.isNSFW,
						userName: v
					}), n.a.createElement(Se, {
						title: null == p ? void 0 : p.title,
						user: x,
						userName: v
					})), n.a.createElement(Ne, {
						user: x
					}), R && n.a.createElement(z.a, {
						recentAwardings: R,
						topAwardIcon: g,
						username: v
					}), c && !C && !y && O && !j && n.a.createElement(pe, {
						contextId: i,
						priority: B.c.Secondary,
						userId: x.id,
						text: w.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !y && !j && !C && x.enableFollowers && n.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.h)(e ? "unfollow" : "follow", i),
						isFullWidth: !0,
						small: !0
					})), T && i && !C && f && n.a.createElement(ne, {
						contextId: i,
						subredditId: f,
						sendEvent: b,
						username: v
					}), N && i && D && F && f && n.a.createElement(ae, {
						contextId: i,
						subredditId: f,
						sendEvent: b,
						username: v
					}), n.a.createElement(P.i, {
						contextId: i,
						subredditId: f,
						user: x
					}), !(T || c) && n.a.createElement(Ce, null))
				},
				Te = Object(T.a)(Pe),
				De = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Te, le({
						isOpen: t
					}, e))
				};
			De.WrappedComponent = Pe;
			var Fe = De;
			const Be = Object(o.c)({
					activeTooltipId: v.a,
					currentUser: x.k,
					isLoggedIn: x.Q,
					hideNSFWPref: x.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(m.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: y.c,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(h.j)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(u.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: x.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(_.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(g.n)(t) && Object(g.fb)(e, t),
					userProfileStyles: (e, t) => Object(f.m)(e, Object(h.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(h.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const s = Object(k.e)(e),
							n = r || s && Object(g.F)(e, s.name);
						return !!n && Object(m.i)(e, n)
					},
					trophyCase: (e, t) => Object(h.r)(e, Object(h.m)(e, t.userName)),
					isNightMode: x.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(c.a)(t.contextId) ? Object(b.G)(e, {
							postId: t.contextId
						}) : Object(l.b)(e, {
							commentId: t.contextId
						});
						return Object(p.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(g.gb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				Re = Object(i.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(a.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Re(e => e.isModWithUserNotesPermissions ? n.a.createElement(O.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId,
				user: e.user,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed,
				trophyCase: e.trophyCase,
				isNightMode: e.isNightMode,
				lastAuthorModNote: e.lastAuthorModNote,
				userIsSubscriber: e.userIsSubscriber
			}) : n.a.createElement(Fe, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
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
				getComponent: () => Object(n.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(a.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(o.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
			}
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
				return v
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return _
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
			class v extends n.a.Component {
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
			const x = m(v),
				_ = h(v)
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return I
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
					s = Object(f.J)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(i.b)(() => Object(o.a)(g, b.j, (e, t) => ({
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
			const x = (e, t) => {
				const r = Object(h.b)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var _ = Object(i.b)(() => Object(o.a)(x, e => e))(e => n.a.createElement(p, {
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
					subreddit: f.U
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
			var O = e => {
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
			var w = e => {
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
			var E = e => {
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
				subreddit: f.U
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
				subredditOrProfile: (e, t) => Object(f.M)(e, {
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
			var I = Object(i.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(f.U)(e, {
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
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return C
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
				h = r("./src/reddit/constants/elementClassNames.ts"),
				f = r("./src/reddit/controls/OutboundLink/index.tsx"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				v = r("./src/reddit/hooks/useClickSourceData.ts"),
				x = r("./src/reddit/models/Media/index.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/telemetry.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/constants/tracking.ts"),
				w = r("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = r.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e > 2 * x.e,
				I = e => {
					const t = Object(c.a)(E.a.image, h.g, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						r = {};
					return e.showFull || e.isTall || (r.maxHeight = `${x.j}px`), e.isListing || e.isTall && C(e.height) || (r.maxHeight = `${x.e}px`), e.isExpando && e.maxHeight && (r.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (r.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: r
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(x.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${x.j}px`, e.shouldBlur && (t.maxWidth = Object(x.L)(e.height, e.width) ? `${x.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				N = Object(o.b)(() => Object(d.a)(_.F, k.jb, (e, t) => {
					let {
						isSponsored: r,
						postId: s
					} = t;
					return r && s ? Object(_.b)(e, s) : null
				}, y.d, _.G, (e, t, r, s, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: r,
					pageType: s.pageType,
					post: n
				})));
			t.a = N(e => {
				const t = Object(v.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, T(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, T(e)) : T(e)
			});
			const P = (e, t) => i.a.createElement(I, {
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
					width: t.width
				}),
				T = e => {
					let {
						onClick: t,
						...r
					} = e;
					const n = Object(x.L)(r.height, r.width),
						o = C(r.height) && n;
					return i.a.createElement(S, j({}, r, {
						className: `${n?`${O.a} `:""}${r.className||""}`
					}), r.isListing ? i.a.createElement("div", {
						className: r.contentImageClassName
					}, P(n, r)) : i.a.createElement("a", {
						href: r.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: E.a.imageLink
					}, P(n, r), r.shouldBlur && !r.isVideoThumbnail && !r.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!r.isNSFW,
						isSpoiler: !!r.isSpoiler
					})), r.isListing && !r.showFull && r.height > x.j && Object(x.L)(r.height, r.width) && i.a.createElement("div", {
						className: E.a.seeMore
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
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
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
			var v = r("./src/lib/forceHttps/index.ts"),
				x = r("./src/lib/hooks/usePrevious.ts");

			function _() {
				return (_ = Object.assign || function(e) {
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
					h = Object(x.a)(d);

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
				}, [h, d, t, s]), o.a.createElement("video", _({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(v.a)(u || "")
				}))
			}
			var k = r("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = r.n(k);
			const w = Object(d.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function E(e) {
				const {
					autoplayPref: t,
					consumed: r,
					loadTimes: s,
					metadata: i,
					started: d
				} = Object(a.e)(t => w(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: v,
					showFull: x,
					shouldPause: _,
					width: k,
					isListing: E,
					className: j,
					showCentered: C,
					originalSource: I,
					isPromoted: S
				} = e, N = t && !(S && Object(c.hasAcceptableAds)()), P = Object(a.d)();

				function T(e) {
					P(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function D() {
					return P(Object(u.z)({
						postId: b
					}))
				}
				const F = n()(e => {
					if (r) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(b))
				}, 200);

				function B(e) {
					e.persist(), F(e)
				}

				function R(e) {
					var t;
					(i || A(e), d) || (t = e.timeStamp, P(Object(u.A)(b, t)))
				}

				function L(e) {
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

				function U(e) {
					s || R(e), i || A(e), P(Object(u.C)(b))
				}

				function M() {
					const e = {};
					return C && (e.margin = "0 auto"), E || (e.maxHeight = `${p.e}px`), o.a.createElement(y, {
						autoplay: N,
						className: Object(l.a)(m.a, O.a.styledVideo),
						height: g,
						isListing: E,
						isNotCardView: v,
						key: b,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: L,
						onLoadedData: R,
						onLoadedMetadata: A,
						onPause: D,
						onPlaying: U,
						onTimeUpdate: B,
						shouldLoad: h,
						shouldPause: _,
						showCentered: C,
						showFull: x,
						source: f,
						style: e,
						width: k
					})
				}
				return E ? M() : o.a.createElement("div", {
					className: Object(l.a)(O.a.container, j, {
						[O.a.centered]: C
					})
				}, o.a.createElement("a", {
					href: I,
					target: "_blank",
					rel: "noopener noreferrer"
				}, M()))
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
				return y
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
				f = r("./src/reddit/components/OverflowMenu/index.m.less"),
				g = r.n(f);
			const v = c.a.wrapped(m.a, "_Dropdown", g.a),
				x = Object(u.a)(v),
				_ = c.a.button("MenuButton", g.a),
				y = c.a.wrapped(p.b, "DropdownRow", g.a),
				k = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: r
						} = t;
						return Object(h.b)(r)(e)
					}
				}),
				O = Object(o.b)(k, (e, t) => {
					let {
						dropdownId: r
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: r
						}))
					}
				}),
				w = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => i.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: w(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), i.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(a);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: a
					} = t, l = s.description ? s.description : s.name;
					return n.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${i.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: d.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), a > 1 && n.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(a-1)}`)), n.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", s.name), c._plural(a)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/reddit/models/Image/index.tsx"),
				a = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: n,
						isNSFW: o,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? i.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? i.a.createElement(a.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && n ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = Object(n.c)({
					currentUser: o.k,
					hideNSFWPref: o.F
				}),
				d = Object(s.b)(a, e => ({
					imageUpdateRequested: (t, r) => e(Object(i.C)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = r("./src/reddit/models/Vote/index.ts"),
				h = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = r.n(h);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: a,
					post: h,
					share: v
				} = e;
				const x = Object(l.b)(),
					_ = Object(o.d)(),
					y = h && h.id,
					k = h && h.voteState;
				let O = null;
				y || (O = t ? "user_hovercard" : "profile_overview");
				const w = Object(n.useCallback)(() => x(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, x, r]);
				return i.a.createElement(u.t, {
					onClick: () => {
						a ? (x(m.i), y && k === b.a.notVoted && _(Object(d.kb)(y))) : w();
						const e = a ? "postify" : "copy";
						_(Object(c.b)({
							clickSource: O,
							share: v,
							source: e
						}))
					},
					className: Object(s.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, i.a.createElement(p.a, {
					className: Object(s.a)({
						[f.a.shirtIcon]: !a,
						[f.a.avatarPostButtonShirtIcon]: a
					})
				}), g._("Try this Look", null, {
					hk: "dOuPb"
				}), i.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: s,
					isOwnProfile: c,
					onClick: m
				} = e;
				return n.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(i.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && c,
						[l.a.compactButtonLayout]: t
					}, s)
				}, r ? n.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(a.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				a = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: s,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return n.a.createElement("div", {
					className: c.a.bannerWrapper
				}, n.a.createElement(a.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: s
				}), d && t && (l ? n.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: s,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = r ? n.a.createElement(n.a.Fragment, null, "u/", c, " · ", n.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return s ? n.a.createElement(i.default, a({}, l, {
					className: t,
					to: s
				}), u) : n.a.createElement("span", a({}, l, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				p = r.n(m);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const b = 25;

			function h(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function f(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const g = h("particleDelay", p.a),
				v = h("particleX", p.a),
				x = h("particleFloat", p.a),
				_ = () => {
					const e = f(v),
						t = f(x),
						r = f(g);
					return Object(n.a)(p.a.particle, e, t, r)
				};
			class y extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < b; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: p.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var k = y;
			const O = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: i,
					prefersReducedAnimations: m,
					origin: b
				} = e;
				const h = Object(a.e)(u.b),
					f = i && Object(l.d)(i) && h,
					g = b === c.a.Profile,
					v = b === c.a.Hovercard;
				return f ? o.a.createElement("div", {
					className: Object(n.a)({
						[p.a.profileTreatment]: g,
						[p.a.hovercardTreatment]: v
					})
				}, o.a.createElement("div", {
					className: p.a.nftProfileUnitContainer
				}, o.a.createElement(d.a, {
					className: p.a.nftProfileUnit,
					imageUrl: i,
					origin: b
				}))) : o.a.createElement("div", {
					className: Object(n.a)(p.a.snoovatarContainer, t)
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: p.a.topGlow
				}), o.a.createElement("div", {
					className: p.a.bottomGlow
				}), !m && o.a.createElement(k, null)), o.a.createElement("img", {
					className: Object(n.a)(p.a.snoovatar, {
						[p.a.premiumGlow]: r
					}),
					src: i,
					alt: s.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./src/reddit/components/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: i,
					isGold: l,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, l && o.a.createElement("a", {
					title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${s.a.redditUrl}/premium`
				}, o.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), i && o.a.createElement(a.a, null), m && o.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: n.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				h = r.n(b),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				g = r.n(f),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: s,
					editMode: b,
					isDeletingBanner: f,
					isEmployee: _,
					isGold: y,
					isNSFW: k,
					isOwnProfile: O,
					onClickSnoovatar: w,
					onDeleteBanner: E,
					prefersReducedAnimations: j,
					snoovatarUrl: C,
					title: I,
					userCreated: S,
					username: N,
					url: P,
					isHovercard: T
				} = e;
				const D = Object(i.e)(e => !O && !!C && Object(c.f)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!b,
					isNSFW: k,
					username: N,
					isDeletingBanner: !!f,
					onDeleteBanner: E
				}), !b && O && n.a.createElement(o.default, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, n.a.createElement(d.a, {
					name: "settings",
					className: g.a.settingsIcon
				})), n.a.createElement(v.a, {
					isGold: y,
					snoovatarUrl: C,
					prefersReducedAnimations: j,
					origin: T ? a.a.Hovercard : a.a.Profile
				}), n.a.createElement(x.a, {
					isEmployee: _,
					isGold: y,
					isNSFW: k,
					title: I,
					username: N
				}), n.a.createElement(p.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: N,
					userCreated: S,
					url: P
				}), (O || !s && !!C) && n.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: s,
					isOwnProfile: O,
					onClick: w
				}), D && n.a.createElement(u.a, {
					username: N,
					isHovercard: !!T,
					share: {
						username: N
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
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
				v = m.a.span("SpoilerWrapper", u.a),
				x = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: r,
						...s
					} = e;
					return i.a.createElement(v, p({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: r
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
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
					return i.a.createElement(x, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(_, {
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
				return v
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "t", (function() {
				return j
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "s", (function() {
				return N
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "w", (function() {
				return D
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
				v = d.a.ol("Ol", a.a),
				x = d.a.strong("B", a.a),
				_ = d.a.em("I", a.a),
				y = d.a.span("U", a.a),
				k = e => n.a.createElement("del", e),
				O = d.a.sub("Sub", a.a),
				w = d.a.sup("Sup", a.a),
				E = d.a.table("Table", a.a),
				j = d.a.tr("Tr", a.a),
				C = d.a.td("Tdl", a.a),
				I = d.a.td("Tdc", a.a),
				S = d.a.td("Tdr", a.a),
				N = d.a.th("Thl", a.a),
				P = d.a.th("Thc", a.a),
				T = (d.a.th("Thr", a.a), d.a.wrapped(e => n.a.createElement(i.b, e), "A", a.a)),
				D = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "b", (function() {
				return C
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
				p = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = r("./src/reddit/models/RichTextJson/index.ts"),
				f = r("./src/reddit/components/RichTextJson/media.tsx"),
				g = r("./src/reddit/components/RichTextJson/renderers.tsx"),
				v = r("./src/reddit/components/RichTextJson/index.m.less"),
				x = r.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = r("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				k = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: r,
						...s
					} = e;
					return a.a.createElement(y, _({}, s, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: r,
								...s
							}))
						}
					}))
				}),
				O = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				w = e => i()(e, O),
				E = e => e.findIndex(O),
				j = e => {
					const {
						altText: t,
						className: r,
						content: s,
						isListing: n,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: v,
						useExplicitTextColor: _,
						shouldBlur: O
					} = e, j = s.document, C = [], I = e.mediaMetadata || null, S = E(j), N = w(j);
					if (O && !n && !o) return a.a.createElement(y, {
						className: Object(d.a)(m.j, r)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== S)
						for (let a = S; a <= N; a++) {
							const e = j[a];
							switch (e.e) {
								case h.k:
									C.push(g.c(e, v, a));
									break;
								case h.l:
									C.push(g.d(a));
									break;
								case h.b:
									C.push(g.a(e, I, v, a));
									break;
								case h.c:
									C.push(g.b(e, a));
									break;
								case h.p:
									C.push(g.f(e, I, v, a));
									break;
								case h.z:
									C.push(g.h(e, I, v, a));
									break;
								case h.u:
									C.push(g.g(e, I, v, a));
									break;
								case h.h:
									C.push(Object(f.a)(e, a));
									break;
								case h.m:
								case h.a:
								case h.D:
									C.push(...Object(f.b)(e, a, v, I, b, p, t))
							}
						}
					return _ ? a.a.createElement(y, {
						className: Object(d.a)(m.j, r)
					}, C) : a.a.createElement(k, {
						className: Object(d.a)(m.j, r),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, C)
				};
			class C extends a.a.Component {
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
						return j(t)
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
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return I
			})), r.d(t, "b", (function() {
				return N
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
				p = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/helpers/richTextJson/index.ts"),
				h = r("./src/reddit/models/RichTextJson/index.ts");
			var f = e => i.a.createElement("svg", {
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
				g = r("./src/reddit/components/RichTextJson/elements.tsx"),
				v = r("./src/reddit/components/RichTextJson/media.m.less"),
				x = r.n(v),
				_ = r("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = /\/(\w+)\/asset\/(\w+)\//,
				O = _.a.wrapped(g.a, "A", x.a),
				w = _.a.wrapped(l.a, "ImageBox", x.a),
				E = _.a.wrapped(e => i.a.createElement("p", e), "Caption", x.a),
				j = _.a.div("Placeholder", x.a),
				C = _.a.wrapped(e => {
					let {
						className: t,
						e: r,
						...n
					} = e;
					const o = r === h.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(j, y({
						className: t,
						style: {
							"--placeholder-content-text": `'${o}'`
						}
					}, n))
				}, "Placeholder", x.a),
				I = (e, t) => {
					let {
						c: r,
						x: s,
						y: n
					} = e;
					return i.a.createElement("div", {
						className: x.a.MediaWrapper
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
				S = (e, t, r) => {
					const s = e.c;
					let n = "";
					return r && (r.e === h.s ? n = r.s.u : r.e === h.r ? n = r.s.gif : r.e === h.t && (n = (e => {
						const t = k.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(r.dashUrl))), n ? i.a.createElement(O, {
						href: n,
						key: t,
						title: s
					}, s || n) : null
				},
				N = (e, t, r, s, n, a, c) => {
					const l = h.E(s, e.id);
					if (n) return [S(e, t, l)];
					const g = [];
					return l ? l.e === h.s ? g.push(((e, t, r, s) => {
						let {
							id: n,
							s: a
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, i.a.createElement(w, {
							altText: s,
							originalSource: a.u,
							postId: n,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(l, t, !!e.c, c)) : l.e === h.r ? g.push(((e, t, r, s) => {
						let {
							id: n,
							ext: a,
							s: d
						} = e;
						if (Object(b.g)(n)) {
							const e = s.renderingObjectInfo,
								c = !!e && Object(p.b)(e),
								l = a || Object(b.f)(n);
							return i.a.createElement("div", {
								className: Object(o.a)({
									[x.a.MediaWrapper]: !c,
									[x.a.CommentGifWrapper]: c,
									[x.a.mHasCaption]: r
								})
							}, i.a.createElement(O, {
								href: l,
								key: t,
								target: "_blank"
							}, d.mp4 ? i.a.createElement("video", {
								className: x.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: d.mp4
							})) : {
								originalSource: l
							}), i.a.createElement(f, {
								className: x.a.GiphyLogo
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: n,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c, r)) : l.e === h.t && g.push(((e, t, r, s) => {
						let {
							hlsUrl: n,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
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
					})(l, t, !!e.c, a)) : g.push(((e, t) => i.a.createElement(C, {
						e,
						key: t
					}))(e.e, t)), e.c && g.push(((e, t) => i.a.createElement(E, {
						key: t
					}, e))(e.c, `caption${t}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "i", (function() {
				return M
			})), r.d(t, "e", (function() {
				return W
			}));
			var s = r("./src/lib/unicodeUtils/index.ts"),
				n = r("./node_modules/lodash/reduce.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/reddit/components/RichTextJson/elements.tsx"),
				c = r("./node_modules/uuid/v4.js"),
				l = r.n(c),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/models/Product/index.ts"),
				p = r("./src/reddit/models/RichTextJson/index.ts"),
				b = r("./src/reddit/selectors/telemetry.ts"),
				h = r("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("RichTextJsonEmoteTooltip").then(r.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = r("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				v = r.n(g);
			const x = 1e3,
				_ = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, _)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const r = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...r,
								actionInfo: {
									...r.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.hb(t)
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
					t.e === p.s ? (r = t.s.x, s = t.s.y, n = t.s.u) : t.e === p.r && (r = t.s.x, s = t.s.y, n = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return n ? a.a.createElement("div", {
						className: v.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: n,
						width: r,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(k),
				w = r("./src/reddit/components/RichTextJson/media.tsx"),
				E = r("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				j = r("./src/reddit/components/SubredditMention/index.tsx"),
				C = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = r("./src/reddit/helpers/isComment.ts"),
				S = r("./src/reddit/helpers/isPost.ts"),
				N = r("./src/reddit/helpers/richTextJson/index.ts"),
				P = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, r) => {
					const s = e.c || [],
						n = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === p.w ? e.t : W(e, t, a))
					}
					const c = d.x[n - 1];
					return a.a.createElement(c, {
						key: r
					}, i)
				},
				D = e => a.a.createElement(d.e, {
					key: e
				}),
				F = (e, t, r, s) => {
					const n = e.c;
					if (!n) return;
					const i = n.length,
						o = [];
					for (let a = 0; a < i; a++) o.push(L(n[a], t, r, a));
					return a.a.createElement(d.c, {
						key: s
					}, o)
				},
				B = (e, t) => {
					const r = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, r.reduce((e, t, r, s) => e += t.t + (r < s.length ? "\n" : ""), "")))
				},
				R = (e, t, r, s) => {
					const n = e.c,
						i = [],
						o = n.length;
					for (let l = 0; l < o; l++) {
						const e = n[l].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => L(e, t, r, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: s
					}, i)
				},
				L = (e, t, r, s) => {
					switch (e.e) {
						case p.b:
							return F(e, t, r, s);
						case p.c:
							return B(e, s);
						case p.k:
							return T(e, r, s);
						case p.l:
							return D(s);
						case p.p:
							return R(e, t, r, s);
						case p.u:
							return U(e, t, r, s);
						case p.z:
							return A(e, t, r, s)
					}
				},
				A = (e, t, r, s) => {
					const n = e.c,
						i = e.h,
						o = n.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: n
							} = q(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, M(o, t, r))), m[d] = n
					}
					for (let p = 0; p < o; p++) {
						const e = n[p],
							s = e.length,
							i = [];
						for (let n = 0; n < s; n++) {
							const s = m[n],
								{
									c: o = []
								} = e[n];
							i.push(a.a.createElement(s, {
								key: n
							}, M(o, t, r)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, i))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				U = (e, t, r, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const n = e.c[0];
					return n.e !== p.m && n.e !== p.a || !Object(N.g)(n.id) ? a.a.createElement(d.j, {
						key: s
					}, M(e.c, t, r)) : Object(w.b)(n, s, r, t)
				},
				M = (e, t, r) => {
					const s = [],
						n = e.length;
					for (let i = 0; i < n; i++) {
						const n = e[i];
						if (n.e === p.A) s.push(H(n, i));
						else if (n.e === p.x) s.push(a.a.createElement(E.a, {
							key: i
						}, M(n.c, t, r)));
						else if (n.e === p.n) s.push(a.a.createElement("br", {
							key: i
						}));
						else if (n.e === p.m || n.e === p.a) {
							if (n.id.startsWith("emote|")) {
								const e = p.E(t, n.id);
								e && s.push(a.a.createElement(O, {
									key: i,
									node: n,
									media: e
								}))
							}
						} else s.push(W(n, r, i))
					}
					return s
				},
				W = (e, t, r) => {
					switch (e.e) {
						case p.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: r,
								title: e.a
							}, s);
							let n, i;
							const o = Object(P.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(S.b)(c) && (n = c.postId), c && Object(I.b)(c) && (i = c.id, n = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: r,
								title: e.a,
								sourceElement: o,
								postId: n,
								commentId: i
							}, s);
						case p.y:
							return a.a.createElement(j.b, {
								key: r,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: r
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
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
					if (!r) return G(0, n, t);
					const o = Object(s.a)(n);
					let a = 0,
						d = 0;
					const c = r.length;
					for (; a < c; a++) {
						const [e, t, s] = r[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(G(0, n.substr(d, l - d), `between${a}`)), i.push(G(e, n.substr(l, u), a)), d = l + u
					}
					return d < n.length && i.push(G(0, n.substr(d), `remaining${a}`)), i
				},
				z = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				G = (e, t, r) => {
					let s = t;
					return s = i()(z, (t, s, n) => e & parseInt(n, 10) ? a.a.createElement(s, {
						key: r
					}, t) : t, s)
				},
				q = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
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
				v = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				x = r("./src/reddit/helpers/name/index.ts"),
				_ = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/models/Theme/index.ts"),
				k = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = r("./src/reddit/components/MiniCardPost/index.m.less"),
				w = r.n(O),
				E = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = r.n(E);
			const C = e => e.type === _.f.Spoiler,
				I = Object(h.u)();
			t.a = I(Object(f.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: r,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: _,
					showSubredditMeta: O = !0,
					showSubredditName: E,
					subredditOrProfile: I
				} = e, S = h && h.preview && h.preview.url || void 0, N = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = _ && P || f && Object(a.a)("/search", {
					q: f.rawQuery,
					source: N
				}) || P, D = f ? f.subredditInfo && f.subredditInfo.icon : I && I.icon.url, F = f ? f.subredditInfo && f.subredditInfo.displayText : I && (I.displayText || I.name), B = h ? h.flair.filter(C) : [], R = h ? h.score : 0, L = h ? h.numComments : 0, A = h && h.isSponsored, U = Object(k.a)(e).body, M = `linear-gradient(\n      ${Object(n.f)(U,.2)},\n      ${Object(n.f)(U,.3)},\n      ${Object(n.f)(U,.4)},\n      ${Object(n.f)(U,.6)},\n      ${Object(n.f)(U,.8)},\n      ${U}\n    )`, W = o.a.createElement("div", {
					id: i,
					className: Object(d.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!S
					})
				}, o.a.createElement(g.default, {
					to: T
				}, o.a.createElement("div", {
					className: Object(d.a)(j.a.backgroundWrapper, w.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(k.a)(e).body, S || Object(k.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": M
					}
				}, A && o.a.createElement("div", {
					className: j.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(j.a.innerContainer, w.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(j.a.description, r)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h
				}), h.title) : o.a.createElement("div", {
					className: j.a.spacer
				}), O && D && F && o.a.createElement(v.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", F)], {
						hk: "2YTyJf"
					})
				}), !O && h && o.a.createElement("div", {
					className: j.a.metaLine
				}, E && F && o.a.createElement("span", {
					className: j.a.meta
				}, Object(x.c)(F)), o.a.createElement("span", {
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
				}, [s.fbt._plural(L, "number", Object(u.b)(L))], {
					hk: "311aXY"
				})))))));
				return A ? o.a.createElement(p.a, {
					post: h
				}, W) : W
			}))))
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
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
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/trackers/navigation.ts"),
				b = r("./src/reddit/selectors/experiments/countrySites.ts"),
				h = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				g = r("./src/reddit/components/SidebarFooter/index.m.less"),
				v = r.n(g);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.a("Link", v.a), y = Object(o.c)({
				d2xPdpSideRailRecsVariant: h.a,
				isCountrySitesEnabled: b.b,
				isD2xPdpSideRailRecsEnabled: h.b,
				isNavbarLikeMwebEnabled: f.a
			}), k = Object(i.b)(y), O = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			}), w = e => {
				let {
					reredditContent: t
				} = e;
				return n.a.createElement("div", {
					className: v.a.GreyRereddit
				}, t, n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, x._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, x._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, x._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, x._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), n.a.createElement("div", {
					className: v.a.Copyright
				}, x._("Reddit Inc © {year}. All rights reserved", [x._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(k(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(b.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Jc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Jc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Jc.LargeImagePreview ? e.reredditButtons : [];
					return n.a.createElement(w, {
						reredditContent: t
					})
				}
				if (!e.isFrontpage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? n.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, s[t]) : null
				};
				return n.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: v.a.LinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, x._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, x._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: v.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, x._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, x._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: v.a.CountryLinkContainer
				}, n.a.createElement("div", {
					className: v.a.Column
				}, s("en"), s("fr"), s("it")), n.a.createElement("div", {
					className: v.a.Column
				}, s("de"), s("es"), s("pt"))), n.a.createElement("div", {
					className: v.a.Copyright
				}, x._("Reddit Inc © {year}. All rights reserved", [x._param("year", (new Date).getFullYear().toString())], {
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
			const g = d.e[1] + 24,
				v = u.f + 8,
				x = v + 152 + 16,
				_ = x + g + 8,
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
							top: `calc(100vh - ${r?v:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				O = e => {
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
			class w extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > x
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
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					}, a.a.createElement(O, {
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
			const E = Object(m.u)();
			t.a = E(w)
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
				v = r("./src/reddit/components/SubredditIcon/index.m.less"),
				x = r.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
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
					} = e, o = [r, x.a.inTopBar, x.a.iconContainer];
					return s ? o.push(x.a.emptyEditableIconInTopBar) : o.push(x.a.editableIcon, x.a.emptyEditableIcon), i.a.createElement("span", _({}, n, {
						className: Object(d.a)(...o)
					}), s ? i.a.createElement(h.a, {
						name: "upload",
						className: x.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: x.a.emptyPlusButton
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
						className: x.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: n,
						src: c,
						className: Object(d.a)(r, {
							[x.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				O = Object(a.c)({
					isLoading: g.b
				});
			class w extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: x.a.imageUploader,
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
						className: x.a.clickableUploadText,
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
					}), r = i.a.createElement(i.a.Fragment, null, i.a.createElement(k, _({
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
					}, i.a.createElement(y, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [x.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(x.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: x.a.flexContainer
					}, t, r) : t
				}
			}
			t.a = Object(o.b)(O, (e, t) => ({
				onFileSelected: (r, s) => {
					e(Object(c.a)(t.subreddit.id, r, s))
				}
			}))(Object(l.c)(w))
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
			class v extends n.a.PureComponent {
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
			const x = Object(b.c)(v),
				_ = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				y = Object(i.b)(_),
				k = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: r,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!r || !t) return n.a.createElement(x, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (i) {
						case h.xf.SmIcon:
							return n.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case h.xf.SmIconHc:
							return n.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return n.a.createElement(x, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = y(k)
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
				v = r("./src/reddit/components/IdCard/helpers.ts"),
				x = e => !Object(g.a)(e) || Object(v.e)(e) || Object(v.f)(e) || Object(v.g)(e),
				_ = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/ModProgressModule/async.tsx"),
				k = r("./src/reddit/components/PowerupsSidebar/index.tsx"),
				O = r("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				w = r("./src/reddit/components/SidebarContainer/index.tsx"),
				E = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = r("./src/lib/makeListingKey/index.ts"),
				I = r("./src/reddit/actions/subreddit.ts"),
				S = r("./src/lib/classNames/index.ts"),
				N = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				P = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/reddit/helpers/name/index.ts"),
				D = r("./src/reddit/helpers/overlay/index.ts"),
				F = r("./src/reddit/selectors/experiments/topPosts.ts"),
				B = r("./src/reddit/selectors/posts.ts"),
				R = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const L = .99;
			class A extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: r
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= L && t(r)
					}
				}
				render() {
					return a.a.createElement(R.a, {
						threshold: L,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var U = A,
				M = r("./src/lib/isUrl/index.ts"),
				W = r("./src/lib/prettyPrintNumber/index.ts"),
				H = r("./src/reddit/components/FlairWrapper/index.tsx"),
				z = r("./src/reddit/components/Thumbnail/index.tsx"),
				G = r("./src/reddit/models/Flair/index.ts"),
				q = r("./src/reddit/models/Subreddit/index.ts"),
				K = r("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				V = r.n(K);
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, Y = Object(c.c)({
				post: B.G,
				subredditOrProfile: B.V
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
					}, o = Object(M.a)(Object(z.b)(i)), d = t.flair.filter(Z);
					return a.a.createElement("div", {
						className: Object(S.a)(V.a.container, e, {
							[V.a.redditStyle]: r
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: V.a.mainLine
					}, o && a.a.createElement("div", {
						className: V.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(z.a, i)), a.a.createElement("div", {
						className: Object(S.a)(V.a.title, !o && V.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(H.a, {
						className: V.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: V.a.metaLine
					}, s && !!n && a.a.createElement("span", {
						className: V.a.meta
					}, Object(q.h)(n) ? Object(T.d)(n.displayText || n.name) : Object(T.c)(n.displayText || n.name)), a.a.createElement("span", {
						className: V.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: V.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Q = Object(d.b)(Y, e => ({
					openLightbox: t => e(Object(D.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(X),
				$ = r("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = 10, se = 2, ne = Object(c.a)(B.N, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
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
						return a.a.createElement(U, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, a.a.createElement(Q, {
							className: Object(S.a)(ee.a.smallPost, i),
							containerOnClick: r,
							postId: e.id,
							redditStyle: n,
							showSubredditName: Object(g.a)(Object(T.h)(t)),
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
						m = Object(F.a)(c),
						p = Object(F.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[f, ...v] = h,
						x = b ? h.slice(0, se) : v.slice(0, se),
						_ = b ? h.slice(se) : v.slice(se);
					return a.a.createElement("div", {
						className: Object(S.a)(ee.a.container, t, {
							[ee.a.redditStyle]: o
						})
					}, !b && a.a.createElement(U, {
						onPostVisible: n,
						postId: f.id
					}, a.a.createElement(N.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(T.h)(r)),
						trendingPost: f
					})), x.map(this.renderSmallPost), e, _.map(this.renderSmallPost), d && a.a.createElement(P.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, s || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(ie, e => ({
					openPost: t => e(Object(D.a)(t.permalink))
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
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(C.a)(e, l.W.TOP, {
					t: l.ic.WEEK
				})),
				ve = Object(c.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const r = ge(e, t);
						return Object(B.N)(e, {
							listingKey: r
						})
					},
					subreddit: pe.z
				});
			class xe extends a.a.Component {
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
			var _e = Object(d.b)(ve, (e, t) => {
					let {
						subredditName: r
					} = t;
					return {
						loadMorePosts: () => e(Object(I.r)({
							sort: l.W.TOP,
							subredditName: r,
							t: l.ic.WEEK
						}))
					}
				})(Object(de.c)(xe)),
				ye = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ke = r("./src/reddit/constants/tracking.ts"),
				Oe = r("./src/reddit/selectors/seo/linksModule.ts"),
				we = r("./src/reddit/selectors/telemetry.ts"),
				Ee = r("./src/telemetry/models/Subreddit.ts");
			const je = e => t => ({
					...we.n(t),
					action: ke.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = e => t => r => ({
					...we.n(r),
					action: ke.c.CLICK,
					noun: Object(Ee.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ie = Object(c.c)({
					communities: Oe.c
				});
			var Se = Object(d.b)(Ie)(e => {
					const t = Object(de.b)();
					return e.communities && e.communities.length ? a.a.createElement(E.a, null, a.a.createElement(ye.b, {
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
				Ne = r("./src/reddit/components/Widgets/Widget/index.tsx"),
				Pe = r("./src/reddit/constants/experiments.ts"),
				Te = r("./src/reddit/featureFlags/index.ts"),
				De = r("./src/reddit/helpers/createBannerProperties/index.ts"),
				Fe = r("./src/reddit/models/Widgets/index.ts"),
				Be = r("./src/reddit/selectors/communityFlairs.ts"),
				Re = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Le = r("./src/reddit/selectors/listings.ts"),
				Ae = r("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ue = r.n(Ae);
			const Me = 250,
				We = 270,
				He = u.a.wrapped(w.a, "SidebarContainer", Ue.a),
				ze = Object(c.c)({
					apiError: Le.c,
					apiPending: Le.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(Be.b)(e, r)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(Be.c)(e, r)
					},
					isInNewModuleNCPV3Experiment: e => Object(Re.a)(e) === Pe.Be.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(pe.N)(e, {
							subredditId: r
						}) && !Object(pe.O)(e, {
							subredditId: r
						})
					},
					widgets: pe.u
				}),
				Ge = Object(d.b)(ze);
			class qe extends o.Component {
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
							kind: Fe.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: r
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Fe.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Fe.g.Cloud,
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
					const g = Object(F.a)(c),
						v = Object(F.b)(c),
						w = Object(F.c)(c),
						C = g || v;
					let I, S;
					!!this.getPostFlairWidget() ? I = this.props.widgets : (I = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const N = this.makeRelatedCommunitiesWidget(g, v),
						P = !g,
						T = v,
						D = a.a.createElement(O.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: De.a.FIRST,
							sizes: l.h
						});
					return a.a.createElement(He, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, r && a.a.createElement(y.a, {
						subredditId: o,
						subredditName: d
					}), x(t) && a.a.createElement(f.a, {
						listingName: t
					}), a.a.createElement(p.a, {
						cardClassName: Ue.a.card,
						subredditId: o
					}), a.a.createElement(k.a, {
						subredditId: o
					}), i && a.a.createElement(m.a, {
						subredditId: o
					}), C && a.a.createElement(E.a, null, a.a.createElement(_e, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: Ue.a.inFeedAd
					}, D))), C && N && a.a.createElement(E.a, null, a.a.createElement(Ne.a, {
						subredditName: d,
						truncateThreshold: We,
						widget: N
					})), T && I.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(E.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Ne.a, {
							subredditName: d,
							truncateThreshold: Me,
							widget: e
						}))
					}), s && a.a.createElement(b.a, {
						className: Ue.a.card,
						subredditId: o
					}), S && a.a.createElement(E.a, null, a.a.createElement(Ne.a, {
						subredditName: d,
						widget: S
					})), n && a.a.createElement(h.a, {
						className: Ue.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(_.g, {
						subredditId: o
					}), !C && D, a.a.createElement(Se, {
						subredditId: o
					}), P && !T && I.map((e, t) => {
						const r = "community-list" === e.kind;
						return a.a.createElement(E.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Ne.a, {
							subredditName: d,
							truncateThreshold: w && r ? We : w ? Me : void 0,
							widget: e
						}))
					}), a.a.createElement(j.a, {
						adComponent: a.a.createElement(O.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: De.a.BOTTOM,
							sizes: l.o
						})
					}))
				}
			}
			t.a = Ge(qe)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, r) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
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
				v = r("./src/reddit/models/Theme/index.ts"),
				x = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = _(e);
					return Object(v.f)(t)
				},
				O = e => {
					const t = y(e);
					return Object(v.f)(t)
				};
			var w = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = r.n(w);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.u)(), I = Object(i.b)(() => Object(o.c)({
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
			class S extends n.a.Component {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = O(this.props), e
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
					} = this.props, h = r ? E.a.widgetContentOnly : E.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, v = f ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: s,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: g
					}, u && n.a.createElement("div", {
						className: Object(a.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: o,
						style: v,
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(E.a.widgetTitle, p)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), n.a.createElement("div", {
						className: Object(a.a)(h, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = C(I(Object(d.a)(Object(l.c)(S))))
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
						const s = t === d.a.upvoted ? Object(i.kb)(r) : Object(i.w)(r);
						e(s)
					},
					onIgnoreReports: () => e(Object(i.gb)(r)),
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
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/index.tsx"),
				a = r("./src/reddit/controls/Checkbox/index.m.less"),
				d = r.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(i.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: s = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, r, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
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
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			}));
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
					...Object(s.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(s.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(s.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var a;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(a || (a = {}));
			const d = e => t => {
				const r = Object(s.n)(t);
				return {
					...r,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...r.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return _
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
					...u.n(e),
					source: n.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: n,
					screen: u.Z(e),
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
						c = Object(l.z)(e, {
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
						post: u.I(e, r.id),
						subreddit: u.ib(e, s),
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
					subreddit: u.jb(t, e),
					screen: u.Z(t)
				}),
				v = (e, t) => r => ({
					...p(r),
					source: n.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.I(r, t),
					subreddit: u.jb(r, e),
					screen: u.Z(r)
				}),
				x = (e, t) => r => ({
					...p(r),
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.I(r, t),
					subreddit: u.jb(r, e),
					screen: u.Z(r)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				k = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
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
					widget: Object(o.vb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				d = (e, t) => r => ({
					source: n.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.I(r, e),
					subreddit: o.hb(r),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.n(r)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.n(t),
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
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), n.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#EC0623"
			}), n.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const n = e => e.category === s.Supporter,
				i = e => e.category === s.Achievement
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
					} = e, s = Object(m.a)(r, u.W.HOT, {});
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
				v = r("./src/reddit/constants/parameters.ts"),
				x = r("./src/reddit/constants/wiki.ts"),
				_ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = r("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				O = r("./src/reddit/components/JumpToContent/index.tsx"),
				w = r("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				E = r("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = r("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				C = r.n(j);

			function I(e) {
				const {
					wikiPageName: t,
					subredditName: r
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(O.a, null), s.createElement(E.a, {
					isModHub: !1,
					className: C.a.topBar,
					wikiPageName: t,
					subredditName: r
				}), s.createElement(w.a, {
					showRevisionInfo: !0,
					subredditName: r,
					wikiPageName: t
				}))
			}
			var S = r("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				N = r.n(S);
			class P extends n.a.Component {
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
					} = r, a = s[v.G], d = s[v.H], c = v.I in s;
					switch (i) {
						case x.m.Create:
						case x.m.Edit:
							return n.a.createElement(f.a, {
								contentClassName: N.a.wikiPageEditorContent,
								isCreation: i === x.m.Create,
								subredditName: t,
								topBarClassName: N.a.communityWikiTopBar,
								wikiPageName: o
							});
						case x.m.Revisions:
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
							}) : o ? n.a.createElement(I, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(_.u)()(P),
				D = r("./src/reddit/constants/componentSizes.ts"),
				F = r("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				B = r("./src/reddit/layout/page/Listing/index.tsx"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts");
			const A = Object(_.u)(),
				U = Object(i.b)(() => Object(o.c)({
					contentGateInfo: (e, t) => {
						let {
							match: r
						} = t;
						return Object(L.f)(e, r.params.subredditName)
					},
					layout: _.S,
					over18Pref: L.kb,
					subreddit: (e, t) => {
						let {
							match: r
						} = t;
						return Object(R.z)(e, {
							subredditName: r.params.subredditName || x.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: r
						} = t;
						return r.params.subredditName || x.e
					},
					wikiPageName: (e, t) => {
						let {
							match: r
						} = t;
						return r.params.wikiPageName || x.i
					}
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class M extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: r,
						subredditName: s
					} = this.props, i = !!r && r.isNSFW && !L.kb, o = Object(F.a)(t, i, s);
					if (o) return n.a.createElement(c.default, o);
					const a = `/r/${s}/`;
					return n.a.createElement(B.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: D.h,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: r ? r.name : s,
							maxWidth: D.h,
							subredditOrProfile: r,
							url: a
						}), n.a.createElement(d.a, {
							subreddit: r || void 0,
							subredditId: r ? r.id : void 0,
							subredditName: s,
							subredditUrl: a
						})),
						content: n.a.createElement(T, {
							subredditName: s
						}),
						sidebar: r && n.a.createElement(b, {
							subreddit: r,
							subredditName: s
						})
					})
				}
			}
			t.default = A(U(M))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/gold/constants.ts"),
				i = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var a = r("./node_modules/icepick/icepick.js"),
				d = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, r;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.mb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const o = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								a = s.filter(i.a).map(e => e.type),
								d = s.filter(i.b).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: o,
									achievementTypes: a,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let n = e[r] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of s) {
								const r = o.filter(i.a),
									s = r.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									a = o.filter(i.b),
									d = a.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									c = l(r),
									u = l(a);
								n = {
									...n,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[r]: n
							}
						}
						case d.f: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: n,
								supporterFlairType: i
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: n,
								pendingSupporterType: i
							}))
						}
						case d.g: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: n,
								supporterFlairType: i
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								preferredAchievementType: n,
								preferredSupporterType: i,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: r,
								userId: s,
								isHidden: n
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								isHidden: n
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.i: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const n = s.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
								r = {
									...r,
									[t]: n.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
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
					experimentName: s.nc
				}), o.a),
				l = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: s.mc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.fe
					}) === s.zd)
				},
				o = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ge
				}) === s.zd
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return c
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return v
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: o.a
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s;
					return r ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[r] : null
				},
				d = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s, n;
					return r ? null === (n = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[r]) || void 0 === n ? void 0 : n.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: r,
						userId: s
					} = t;
					var n, i;
					return r && s ? null === (i = null === (n = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === n ? void 0 : n[r]) || void 0 === i ? void 0 : i[s] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, m], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([a, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: r,
						achievementTypes: s,
						flairsByType: n
					} = e, {
						supporterTypes: i,
						achievementTypes: o,
						preferredSupporterType: a,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(r, i, n, c || a),
						achievementFlairs: g(s, o, n, l || d)
					}
				}),
				h = Object(s.a)([c], e => !!e && e.isHidden),
				f = Object(s.a)([a, c, p], (e, t, r) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...s] : s
				}),
				g = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				v = (e, t) => {
					let {
						commentId: r
					} = t;
					const s = Object(n.b)(e, {
							commentId: r
						}),
						i = null == s ? void 0 : s.subredditId,
						o = null == s ? void 0 : s.authorId;
					return !(!i || !o) && !!((e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var n, i, o;
						return r && s ? null === (o = null === (i = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === i ? void 0 : i[s]) || void 0 === o ? void 0 : o[r] : null
					})(e, {
						subredditId: i,
						userId: o
					})
				}
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
						experimentName: s.rf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.xf.SmIcon || t === s.xf.SmIconHc
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
					const s = Object(o.Y)(e, {
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
				return v
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "h", (function() {
				return _
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
				v = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[r.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[r.toLowerCase()]
				},
				_ = Object(s.a)((e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.b9032961be0290fdc6c0.js.map