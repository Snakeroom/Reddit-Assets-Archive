// https://www.redditstatic.com/desktop2x/SubredditWiki.64fd1764005e9c02bbd5.js
// Retrieved at 10/10/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki", "AchievementsActions"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function n(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var s, i = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						d = !o && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						g = !a && !u && !m && !p && /linux/i.test(t),
						x = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = r(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !_ && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: v || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: v || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (s.msedge = e, s.version = x) : (s.msie = e, s.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? s = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, v && (s.version = v)) : i ? (s = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (s.version = v)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && v && (s.version = v)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || r(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !a && !s.silk ? !s.windowsphone && i ? (s[i] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : k ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var w = "";
					s.windows ? w = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? w = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? w = (w = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? w = (w = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? w = r(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? w = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? w = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? w = r(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (w = r(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (s.osversion = w);
					var O = !s.windows && w.split(".")[0];
					return _ || d || "ipad" == i || a && (3 == O || O >= 4 && !y) || s.silk ? s.tablet = e : (y || "iphone" == i || "ipod" == i || a || o || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var r, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) n.push(t(e[r]));
					return n
				}

				function i(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), r = s(e, (function(e) {
							var r = t - n(e);
							return s((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, n, s) {
					var a = r;
					"string" == typeof n && (s = n, n = void 0), void 0 === n && (n = !1), s && (a = t(s));
					var o = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([o, e[d]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = a, r.compareVersions = i, r.check = function(e, t, r) {
					return !a(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/linkify-it/index.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(r) {
						e[r] = t[r]
					}))
				})), e
			}

			function s(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === s(e)
			}

			function a(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var o = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var d = {
					"http:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function o(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(o(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(o(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(o(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(o(t.tpl_host_fuzzy_test), "i");
				var d = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var r = e.__schemas__[t];
					if (null !== r) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === s(r)) return ! function(e) {
							return "[object RegExp]" === s(e)
						}(r.validate) ? i(r.validate) ? n.validate = r.validate : l(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(i(r.normalize) ? n.normalize = r.normalize : r.normalize ? l(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
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
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var r = e.__index__,
					n = e.__last_index__,
					s = e.__text_cache__.slice(r, n);
				this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = s, this.text = s, this.url = s
			}

			function p(e, t) {
				var r = new m(e, t);
				return e.__compiled__[r.schema].normalize(r, e), r
			}

			function b(e, t) {
				if (!(this instanceof b)) return new b(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || o.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, o, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, s, i, a, o, d;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (t = o.exec(e));)
						if (s = this.testSchemaAt(e, t[2], o.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a)), this.__index__ >= 0
			}, b.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, b.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, b.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) r.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
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
				n = Math.max;
			e.exports = function(e, t, s, i) {
				for (var a = -1, o = n(r((t - e) / (s || 1)), 0), d = Array(o); o--;) d[i ? o : ++a] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, s) {
				return s(e, (function(e, s, i) {
					r = n ? (n = !1, e) : t(r, e, s, i)
				})), r
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRange.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, r, a) {
					return a && "number" != typeof a && s(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				s = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = s(r)) == r ? r : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), n(s(e), t, r)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				s = r("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(s(e, t), 1)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRandom.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				o = Math.min,
				d = Math.random;
			e.exports = function(e, t, r) {
				if (r && "boolean" != typeof r && s(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (r || e % 1 || t % 1) {
					var l = d();
					return o(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				s = r("./node_modules/lodash/_baseEach.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/_baseReduce.js"),
				o = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var d = o(e) ? n : a,
					c = arguments.length < 3;
				return d(e, i(t, 4), r, c, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseTimes.js"),
				s = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				o = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > a) return [];
				var r = o,
					c = d(e, o);
				t = s(t), e -= o;
				for (var l = n(c, t); ++r < e;) t(r);
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/chat/controls/Svg/index.m.less"),
				d = r.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: n,
						hover: a
					} = e;
				return s.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: r,
						[d.a.active]: n,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "i", (function() {
				return w
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				i = r("./node_modules/tlds/index.js"),
				a = r.n(i),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./node_modules/lodash/values.js"),
				c = r.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = s()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const _ = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				y = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				k = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				w = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const r = t[0];
						return r.lastIndex === e.length ? r : ((e, t) => {
							const r = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(r)) return t.lastIndex += r.length, t.url += r, t
						})(e, r)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const i = Object(s.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${a}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = e => {
					let t = 0,
						r = 0;
					const n = [0];
					for (const s of e) t++, r += s.length, n[t] = r;
					return n
				},
				s = e => {
					let t = 0,
						r = 0;
					const n = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) n[r] = t, r++;
						t++
					}
					return n[r] = t, n
				}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return k
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return w
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return C
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return I
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return N
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return P
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return T
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return F
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return L
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return D
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, n) => {
				const s = await Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: n
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
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
				v = r("./src/reddit/actions/economics/powerups/constants.ts"),
				_ = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(_.a)({
				features: {
					powerups: y.a
				}
			});
			const k = Object(s.a)(v.d),
				w = Object(s.a)(v.i),
				O = Object(s.a)(v.f),
				E = Object(s.a)(v.g),
				j = Object(s.a)(v.e),
				C = Object(s.a)(v.h),
				I = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, r) => {
								const n = await Object(a.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(d(), e, c),
							{
								subredditInfoById: n,
								redditorsInfoByIds: s
							} = t;
						await r(k(n)), s && await r(w(s))
					} catch (l) {
						i.c.captureException(l)
					}
				}, N = (e, t) => async (r, n) => {
					if (!e) return;
					const s = n(),
						i = Object(x.k)(s);
					if (!i || !Object(f.m)(s, {
							subredditId: e
						})) return;
					const a = !!Object(g.f)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && a || await r(I(e, [i.id]))
				}, S = e => async (t, r) => !!e && (Object(h.f)(r()) ? (await t(Object(l.c)(e)), !!Object(g.d)(r(), {
					subredditId: e
				})) : (await t(Object(u.j)(e, {
					fullData: !0
				})), Object(f.f)(r(), {
					subredditId: e
				}))), P = e => async (t, r) => {
					var n;
					const s = r(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						a = Object(b.d)(s, {
							commentIds: i
						}),
						o = null === (n = a.find(e => e && e.subredditId)) || void 0 === n ? void 0 : n.subredditId;
					if (!(await t(S(o)))) return;
					const d = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(I(o, Array.from(d)))
				}, T = (e, t) => async (r, n) => {
					if (!t) return;
					if (!(await r(S(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(I(e, Array.from(s)))
				}, F = (e, t) => async (r, n) => {
					const s = n(),
						i = Object(x.k)(s);
					if (!i) return;
					const a = i.id,
						o = Object(g.i)(s, {
							subredditId: e,
							userId: a
						});
					r(B({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, L = (e, t) => async (r, n) => {
					const s = n(),
						i = Object(x.k)(s);
					if (!i) return;
					const a = i.id,
						o = Object(g.h)(s, {
							subredditId: e,
							userId: a
						});
					r(B({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, B = e => async (t, r, s) => {
					let {
						gqlContext: a
					} = s;
					const o = r(),
						d = Object(x.k)(o);
					if (!d) return;
					const l = d.id;
					t(O(e));
					const {
						subredditId: u,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, f = [b, h].filter(Boolean), v = Object(g.e)(o, {
						subredditId: u,
						userId: l
					});
					try {
						await c(a(), u, f, v), t(E(e))
					} catch (_) {
						t(j(e)), i.c.captureException(_), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, D = (e, t) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const d = s(),
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
						await c(o(), e, h, t)
					} catch (f) {
						r(C({
							...b,
							isHidden: !t
						})), i.c.captureException(f), r(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = r("./src/reddit/helpers/routeKey/index.ts"),
				i = r("./src/reddit/helpers/trackers/screenview.ts"),
				a = r("./src/telemetry/index.ts"),
				o = r("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const r = t(),
					{
						currentPage: d
					} = r.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(n.a)(r),
					u = Object(s.b)(c, r, l);
				u && a.c.has(u) && Object(i.k)(c, r, o.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), r.d(t, "subredditWikiDataLoaded", (function() {
				return qe
			})), r.d(t, "subredditWikiDataFailed", (function() {
				return Ve
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(s),
				a = r("./node_modules/react-router-redux/es/index.js"),
				o = r("./src/lib/constants/index.ts"),
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
				v = r("./src/lib/makeGqlRequest/index.ts"),
				_ = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var k = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				w = r("./src/reddit/selectors/subredditWiki.ts");
			const O = Object(d.a)("WIKI_DIFF_PENDING"),
				E = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				C = e => async (t, r, n) => {
					const s = r(),
						i = Object(k.a)(e),
						a = Object(w.i)(s, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(O(d));
					const c = await ((e, t) => Object(v.a)(e, {
						...y,
						variables: {
							...t,
							comparisonRevisionId: Object(_.b)(t.comparisonRevisionId),
							revisionId: Object(_.b)(t.revisionId)
						}
					}))(n.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							r = t && t.page && t.page.revisionComparisonDiffHtml;
						r ? u = r : l = {
							type: o.L.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.L.UNKNOWN_ERROR
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
				N = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = r("./src/reddit/constants/parameters.ts"),
				P = r("./src/reddit/constants/wiki.ts"),
				T = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				F = r("./src/reddit/helpers/brandSafety/index.ts"),
				L = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				B = r("./src/reddit/models/Toast/index.ts"),
				D = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				R = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				M = r("./src/reddit/selectors/subreddit.ts"),
				A = r("./src/lib/initializeClient/installReducer.ts"),
				U = r("./node_modules/redux/es/redux.js");
			const W = {};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: r,
							htmlDiff: n
						} = t.payload;
						return {
							...e,
							[r]: {
								htmlDiff: n
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								pending: !1,
								error: n
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
									subredditWiki: n,
									options: s
								} = r,
								i = n && n.directory;
							if (!i) return e;
							const {
								subredditName: a
							} = s;
							return {
								...e, [a.toLowerCase()]: i
							};
						default:
							return e
					}
				},
				q = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const V = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: r,
								pageKey: n
							} = t.payload, {
								page: s
							} = r;
							return n && s ? {
								...e,
								[n]: s
							} : e
						}
						case q.a: {
							const {
								pageKey: r,
								page: n
							} = t.payload;
							return {
								...e,
								[r]: n
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
								pageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : e
						}
						case J.d: {
							const {
								isVisible: r,
								editPermissions: n,
								pageKey: s
							} = t.payload, i = e[s];
							return i ? {
								...e,
								[s]: {
									...i,
									isVisible: r,
									editPermissions: n
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: r,
								afterToken: n,
								pageKey: s
							} = t.payload, i = e[s];
							if (!i) return e;
							const a = [...i.editorsInfo, ...r];
							return {
								...e,
								[s]: {
									...i,
									editorsInfo: a,
									afterToken: n
								}
							}
						}
						case J.a: {
							const {
								username: r,
								pageKey: n
							} = t.payload, s = e[n];
							if (!s) return e;
							const i = s.editorsInfo.filter(e => e.username !== r);
							return {
								...e,
								[n]: {
									...s,
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
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
							} = t.payload, n = t.type === q.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				re = Object(U.c)({
					error: $,
					pending: te
				}),
				ne = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const se = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c: {
						const {
							key: r,
							options: n,
							pageInfo: s,
							revisionsIds: i
						} = t.payload, a = e[r], o = n.after && a ? [...a.ids, ...i] : i;
						return {
							...e,
							[r]: {
								ids: o,
								pageInfo: s
							}
						}
					}
					case q.a: {
						const {
							page: {
								revision: r
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, i = e[n];
						return i && r ? {
							...Object(X.a)(e, s),
							[n]: {
								...i,
								ids: [r.id, ...i.ids]
							}
						} : e
					}
					case ne.a: {
						const {
							pageRevisionsListingKey: r,
							recentRevisionsListingKey: n
						} = t.payload, s = {
							...e
						};
						return delete s[r], delete s[n], s
					}
					default:
						return e
				}
			};
			const ae = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: {
									page: r
								}
							} = t.payload, n = r && r.revision;
							return n && !e[n.id] ? {
								...e,
								[n.id]: n
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
							} = t.payload, n = r.revision;
							return n ? {
								...e,
								[n.id]: n
							} : e
						}
						case q.e: {
							const {
								revisionId: r,
								isHidden: n
							} = t.payload, s = e[r];
							return s ? {
								...e,
								[r]: {
									...s,
									isHidden: n
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(U.c)({
					api: re,
					listings: ie,
					models: oe
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
							afterToken: n
						} = t.payload;
						return {
							...e,
							[r]: n
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
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
							} = t.payload, n = t.type === ce.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				fe = Object(U.c)({
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
								bannedContributors: n
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...n
								}
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...n
								}
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: n
							} = t.payload, s = Object(X.a)(e[r], n);
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				ve = r("./node_modules/lodash/uniq.js"),
				_e = r.n(ve);
			const ye = {};
			var ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: _e()([...e[r] || [], ...n])
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: _e()([...n, ...e[r] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: n
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				we = Object(U.c)({
					afterToken: ue,
					api: fe,
					models: xe,
					userOrder: ke
				});
			const Oe = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: r,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				je = Object(U.c)({
					listing: we,
					search: Ee
				}),
				Ce = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ie = {};
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.c:
					case Ce.a: {
						const {
							subredditName: r,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.b: {
						const {
							subredditName: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
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
			var Fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.d:
						case Ce.c:
						case Ce.b: {
							const {
								subredditName: r
							} = t.payload, n = t.type === Ce.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Le = Object(U.c)({
					error: Pe,
					pending: Fe
				});
			const Be = {};
			var De = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.c:
					case Ce.a: {
						const {
							subredditName: r,
							contributors: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...n
							}
						}
					}
					case Ce.e: {
						const {
							subredditName: r,
							contributor: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...n
							}
						}
					}
					case Ce.f: {
						const {
							subredditName: r,
							userId: n
						} = t.payload, s = Object(X.a)(e[r], n);
						return {
							...e,
							newState: s
						}
					}
					default:
						return e
				}
			};
			const Re = {};
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.c:
						case Ce.a: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: _e()([...e[r] || [], ...n])
							}
						}
						case Ce.e: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: [...n, ...e[r] || []]
							}
						}
						case Ce.f: {
							const {
								subredditName: r,
								userId: n
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				Ae = Object(U.c)({
					afterToken: Ne,
					api: Le,
					models: De,
					userOrder: Me
				});
			const Ue = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.g: {
							const {
								subredditName: r,
								contributor: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				He = Object(U.c)({
					listing: Ae,
					search: We
				}),
				ze = Object(U.c)({
					diff: H,
					directory: G,
					pages: K,
					pageSettings: Z,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: He
				});
			Object(A.a)({
				pages: {
					subredditWiki: ze
				}
			});
			const Ge = Object(d.a)(h.c),
				qe = Object(d.a)(h.b),
				Ve = Object(d.a)(h.a),
				Ke = (e, t, r, n) => {
					return r === P.j ? Je(e, t) : !!Object(w.c)(e, {
						subredditName: t,
						wikiPageName: r,
						revisionId: n
					})
				},
				Je = (e, t) => !!Object(w.b)(e, {
					subredditName: t
				}),
				Ye = e => async (t, r, s) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === P.j, l = {
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
					const m = await Object(T.a)(s.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(qe({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(Ve({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.L.NOT_FOUND_ERROR
						}
					})), a && t(Object(f.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: B.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Ye(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
				}, Ze = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, n) => {
						const s = n(),
							i = {
								sort: o.bb.HOT
							},
							a = Object(c.a)(e, i.sort),
							d = s.listings.postOrder.api.error[a],
							l = s.listings.postOrder.api.pending[a],
							u = !!s.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await r(Object(b.subredditDataRequested)(a, e, i, t)), !n().listings.postOrder.api.error[a])
					}
				}, Xe = e => async (t, r) => {
					const {
						params: n,
						url: s
					} = e, {
						wikiPageName: i
					} = n, o = Object(R.a)(s, n);
					let d = !1;
					return P.l.includes(i || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : s !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Qe = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, a) => {
						const {
							subredditName: d = P.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[S.G], m = t[S.H], p = u ? Object(_.a)(u) : void 0, b = m ? Object(_.a)(m) : void 0, h = c === P.j, v = l === P.m.Revisions;
						let y = !1,
							k = !1;
						if (r) {
							const {
								pageName: t
							} = e;
							y = t === o.mc.WikiContributors, k = t === o.mc.WikiBanned
						}
						const w = i(),
							O = (h || r) && !Je(w, d),
							E = !!c && !Ke(w, d, c, p),
							j = [];
						j.push(s(Ze(d))), (O || E) && j.push(s(Ye({
							includeDirectory: O,
							includePageData: E,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === P.m.Settings && c && j.push(s(Object(I.c)(d, c))), c && p && b && j.push(s(C({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), v && j.push(s(Object(N.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), y && j.push(s(Object(x.e)(d))), k && j.push(s(Object(g.e)(d))), (await Promise.all(j)).every(Boolean) || s(Object(f.f)({
							kind: B.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Qe(e, t, r)
						}))
					}
				}, $e = e => async (t, r) => {
					if (await t(Xe(e))) return;
					const {
						params: n,
						queryParams: s
					} = e, i = n.subredditName || P.e;
					t(u.m({
						title: n.wikiPageName ? `${n.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Qe(n, s));
					const a = Object(M.B)(r(), {
							subredditName: i
						}),
						o = r();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(D.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(F.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/structuredStyles/index.ts"),
				a = r("./src/reddit/actions/subreddit/constants.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/blade.ts"),
				c = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = r("./src/reddit/models/Image/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/structuredStyles.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/telemetry/index.ts");
			const h = Object(s.a)(a.x),
				f = Object(s.a)(a.y),
				g = Object(s.a)(a.w),
				x = (e, t, r) => async (n, s, i) => {
					const a = Object(p.B)(s(), {
						subredditName: e
					});
					if (a) return _(a.id, t, r)(n, s, i)
				}, v = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), _ = (e, t, r) => async (s, a, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const _ = a();
					try {
						await Object(i.g)("communityIcon", x, e)(s, a, p)
					} catch (k) {
						return Object(b.a)(Object(c.c)(_, "something went wrong with the uploading the image")), s(Object(o.f)({
							kind: u.b.Error,
							text: v()
						})), void s(g())
					}
					const y = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(_, "image is null")), s(Object(o.f)({
						kind: u.b.Error,
						text: v()
					})), void s(g());
					await Object(i.k)(e, {
						communityIcon: y
					}, d.b.idCard, r)(s, a, p), s(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(f())
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "d", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = r("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				c = r("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const l = (e, t) => Object(a.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(a.a)(e, {
					...o,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/actions/subreddit/constants.ts"),
				b = r("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(i.f)({
					id: e,
					kind: m.b.Error,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				f = (e, t) => Object(i.f)({
					kind: m.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: n.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				g = (e, t) => Object(i.f)({
					kind: m.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: n.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				x = Object(s.a)(p.C),
				v = (Object(s.a)(p.f), Object(s.a)(p.B), e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: a
						} = i;
						if ((await l(a(), t)).ok) n && n(), f(r, _({
							subredditId: t,
							subredditName: r
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				_ = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: a
						} = i;
						if ((await u(a(), t)).ok) n && n(), g(r, v({
							subredditId: t,
							subredditName: r
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				y = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: a
						} = i;
						if ((await l(a(), t)).ok) n && n(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(f(r, k({
							subredditId: t,
							subredditName: r
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: a
						} = i;
						if ((await u(a(), t)).ok) n && n(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(g(r, y({
							subredditId: t,
							subredditName: r
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						notificationLevel: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: d
						} = o;
						const l = Object(b.a)(r);
						(await ((e, t, r) => Object(a.a)(e, {
							...c,
							variables: {
								input: {
									...r,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(x({
							subredditId: t,
							notificationLevel: r
						})), e(Object(i.f)({
							kind: m.b.SuccessCommunityGreen,
							text: Object(b.b)(r)
						}))) : e(Object(i.f)({
							kind: m.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "d", (function() {
				return g
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = r("./src/reddit/actions/notificationsInbox/index.ts"),
				o = r("./src/reddit/actions/subreddit/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(o.v),
				p = Object(s.a)(o.u),
				b = Object(s.a)(o.t),
				h = e => {
					switch (e) {
						case l.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.b.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: r,
					successCallback: s,
					undoCallback: o
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: x
					} = g;
					var v, _, y;
					e(p());
					const k = h(r),
						w = await Object(c.b)(x(), t, k);
					if ((null === (_ = null === (v = w.error) || void 0 === v ? void 0 : v.fields) || void 0 === _ ? void 0 : _.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(w.body) && (null === (y = w.body.data.updateSubredditNotificationSettings.errors) || void 0 === y ? void 0 : y.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					w.ok && (e(Object(i.c)({
						subredditId: t,
						notificationLevel: r
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: r
							}
						}
					})), s && s(), e(o ? Object(d.f)(Object(d.e)(f(r), u.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, o))) : Object(d.f)(Object(d.e)(f(r), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return ne
			})), r.d(t, "b", (function() {
				return ae
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				i = r.n(s),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/apiRequestState.ts"),
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
			const x = (e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.ob.GET,
				data: r
			});
			var v = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = r("./src/reddit/models/SubredditModeration/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/activeModalId.ts"),
				w = r("./src/reddit/selectors/bannedUser.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				C = r("./src/lib/initializeClient/installReducer.ts"),
				I = r("./node_modules/redux/es/redux.js");
			var N = function() {
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
			const S = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.s: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(_.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case j.r:
						case j.q: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(_.e)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(I.c)({
					error: N,
					pending: P
				});
			const F = {};
			var L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(_.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = r("./src/reddit/actions/inContextModeration.ts");
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const R = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
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
				A = r("./node_modules/icepick/icepick.js");
			const U = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.p:
					case j.r: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(A.merge)(e, {
							[r]: n
						})
					}
					case j.w: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(A.unsetIn)(e, [r, n])
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
				V = Object(I.c)({
					api: G,
					result: q
				});
			const K = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case j.w: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case j.p: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				Y = Object(I.c)({
					api: T,
					fetchedTokens: L,
					inContext: D,
					loadMore: M,
					models: W,
					search: V,
					userOrder: J
				});
			Object(C.a)({
				features: {
					banned: Y
				}
			});
			const Z = Object(a.a)(j.s),
				X = Object(a.a)(j.r),
				Q = Object(a.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, s) => {
						let {
							apiContext: i
						} = s;
						const a = n(),
							o = t.after || "",
							d = Object(_.e)(e, o),
							c = a.features.banned.fetchedTokens[d];
						if (a.features.banned.api.pending[d] || c) return;
						r(Z({
							subredditId: e,
							fetchedToken: o
						}));
						const l = a.subreddits.models[e].name,
							u = await x(i(), l, t);
						u.ok ? r(X({
							...u.body,
							fetchedToken: o
						})) : r(Q({
							subredditId: e,
							fetchedToken: o
						}))
					}
				},
				ee = Object(a.a)(j.v),
				te = Object(a.a)(j.u),
				re = Object(a.a)(j.t),
				ne = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const a = n().subreddits.models[e].name,
						o = {
							username: Object(v.a)(t)
						};
					r(ee());
					const d = await x(i(), a, o);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, se = Object(a.a)(j.p), ie = Object(a.a)(j.w), ae = (e, t, r) => async (s, a, d) => {
					let {
						apiContext: c
					} = d;
					const u = a(),
						f = u.subreddits.models[e].url,
						g = u.subreddits.models[e].name;
					t.username = Object(v.a)(t.username), s(Object(o.h)(r));
					const _ = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.ob.POST,
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
						s(Object(o.e)(r));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await x(c(), g, e);
						i.ok && s(se(i.body))
					} else {
						s(Object(o.f)(r, _.error));
						const e = i()(_, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (r, s, a) => {
					let {
						apiContext: o
					} = a;
					const d = s().subreddits.models[e].url,
						c = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.ob.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), d, t);
					if (c.ok) r(ie({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(k.b)(u.a.BAN_USER)(s) && !Object(O.U)(s, {
								subredditId: e
							})) {
							const t = Object(O.X)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(E.Ab)(s, {
							userName: t
						});
						if (!n) return;
						const i = Object(w.h)(s, {
							subredditId: e
						});
						i && i[n.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				s = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
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
						pageInfo: n
					} = t, s = [], i = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r,
							editWikiBanInfo: n
						} = e.node;
						r.id && r.name && r.icon && (i[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, s.push(r.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: i,
						userOrder: s
					}
				},
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const f = Object(i.a)(h.d),
				g = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				v = e => async (t, r, n) => {
					t(f({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const r = a.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n) {
							const r = p(n);
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = a.error || {
							type: s.L.UNKNOWN_ERROR
						};
						t(x({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, _ = Object(i.a)(h.a), y = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							r(_({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, k = Object(i.a)(h.e), w = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.ob.POST,
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
						r(Object(a.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const s = {
								subredditName: e,
								username: t.username
							},
							i = (await m(d.gqlContext(), s)).body;
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
						u.error.type === s.L.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(a.f)({
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, O = Object(i.a)(h.f), E = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.ob.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), r(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t)
					})), u.ok
				}, j = Object(i.a)(h.g), C = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								s = Object.keys(n.bannedContributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[s]
							}))
						}
					} else r(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_CONTRIBUTORS_PENDING",
				s = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
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
						pageInfo: n
					} = t, s = [], i = {};
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
						}, s.push(r.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: i,
						userOrder: s
					}
				},
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const f = Object(i.a)(h.d),
				g = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				v = e => async (t, r, n) => {
					t(f({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const r = a.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n) {
							const r = p(n);
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = a.error || {
							type: s.L.UNKNOWN_ERROR
						};
						t(x({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, _ = Object(i.a)(h.a), y = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							r(_({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, k = Object(i.a)(h.e), w = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.ob.POST,
						data: {
							api_type: "json",
							name: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						r(Object(a.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const s = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), s)).body;
						if (o.data.subreddit.wiki) {
							const t = p(o.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || r(k({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === s.L.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === s.L.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(a.f)({
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, O = Object(i.a)(h.f), E = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.ob.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), r(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t)
					})), u.ok
				}, j = Object(i.a)(h.g), C = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								s = Object.keys(n.contributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[s]
							}))
						}
					} else r(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				s = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return k
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "d", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/subredditSettings.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
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
						isVisible: n
					} = e, {
						edges: s,
						pageInfo: i
					} = r, a = [];
					return s.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: n,
						afterToken: i.hasNextPage ? i.endCursor : null
					}
				},
				g = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(_.c),
				k = (e, t) => async (r, n, s) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(s.gqlContext(), i),
						d = Object(v.H)(n(), e);
					if (Object(v.Z)(n(), d) || await r(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = f(t.page.settings);
							r(y({
								pageKey: Object(g.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, w = Object(i.a)(_.b), O = (e, t, r) => async (s, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: r
						},
						c = await b(a.gqlContext(), d);
					if (c.ok) {
						const r = c.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n && n.page) {
							const r = f(n.page.settings),
								{
									editorsInfo: i,
									afterToken: a
								} = r;
							s(w({
								editorsInfo: i,
								afterToken: a,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else s(Object(o.f)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t, r)
					}));
					return c.ok
				}, E = Object(i.a)(_.d), j = e => {
					let {
						editPermissions: t,
						isVisible: r,
						wikiPageName: n,
						subredditName: i
					} = e;
					return async (e, a, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: s.ob.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: o.apiContext(),
							editPermissions: t,
							isVisible: r,
							wikiPageName: n,
							subredditName: i
						});
						return c.ok && e(E({
							editPermissions: t,
							isVisible: r,
							pageKey: Object(g.a)({
								wikiPageName: n,
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
					return async (e, a, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: s.ob.POST,
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
						if (m.ok) e(Object(o.f)({
							kind: x.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(k(t, i));
						else if (m.error) {
							const t = m.error.type;
							let r = n.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === s.L.NOT_FOUND_ERROR && (r = n.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.f)({
								kind: x.b.Error,
								text: r
							}))
						}
						return m.ok
					}
				}, I = Object(i.a)(_.a), N = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: n
					} = e;
					return async (e, i, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: s.ob.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: a.apiContext(),
							wikiPageName: n,
							subredditName: t,
							username: r
						});
						return c.ok && (e(Object(o.f)({
							kind: x.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(I({
							username: r,
							pageKey: Object(g.a)({
								wikiPageName: n,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			}));
			const n = "WIKI_REVISIONS_PENDING",
				s = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/WikiRevisions.json");
			var l = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				m = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: s.ob.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: s.ob.POST,
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
							const n = e.node;
							t[n.id] = n, r.push(n.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: r
						}
					})(r)
				},
				g = r("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/subredditWiki.ts"),
				y = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const k = Object(i.a)(y.d),
				w = Object(i.a)(y.c),
				O = Object(i.a)(y.b),
				E = e => async (t, r, i) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = r(), h = Object(g.a)(e), x = Object(_.p)(b, {
						listingKey: h
					});
					if (!o && !!x) return !0;
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
					const I = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(i.gqlContext(), j);
					if (I.ok) {
						const e = I.body;
						if (e.data.subreddit) {
							const r = f(e.data);
							t(w({
								...C,
								...r
							}))
						}
					} else {
						const r = I.error || {
							type: s.L.UNKNOWN_ERROR
						};
						t(O({
							...C,
							error: r
						})), l && t(Object(a.f)({
							kind: v.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: E(e)
						}))
					}
					return I.ok
				}, j = Object(i.a)(y.a), C = e => async (t, r, s) => {
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
					}), m = Object(_.p)(r(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(s.apiContext(), e)).ok) {
						const e = (await Object(o.a)(s.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							r = e.data.subreddit && e.data.subreddit.wiki,
							m = r && r.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.f)({
							kind: v.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
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
					} else t(Object(a.f)({
						kind: v.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}, I = Object(i.a)(y.e), N = e => async (t, r, s) => {
					const i = await b(s.apiContext(), e);
					if (i.ok) {
						const r = i.body.status;
						t(I({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(a.f)({
						kind: v.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/Admin/index.m.less"),
				d = r.n(o),
				c = r("./src/lib/constants/icons.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(a.e)(p) ? i.a.createElement("span", {
					className: d.a.admin
				}, n.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : i.a.createElement(l.a, {
					name: c.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: n.fbt._("Reddit admin", null, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/config.ts"),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, r;
				const n = Object(a.a)(e.className, p.a.authorLinkStyles, {
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
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${o.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.db)(r))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? s.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: n,
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: x
				}), e.children) : e.isAuthorDeleted ? s.a.createElement("span", {
					className: Object(a.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : s.a.createElement(c.default, b({}, null !== (r = e.linkProps) && void 0 !== r ? r : {}, {
					className: n,
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/elementIds.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/BackToTop/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: r,
					style: n
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(t, c.a.container),
					style: n
				}, s.a.createElement(o.l, {
					onClick: () => u(r)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: s,
					sendEvent: a,
					contextId: o,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: b,
					onClick: h,
					onAddUserToQuickReplyList: f,
					children: g,
					style: x
				} = e;
				return i.a.createElement(c.t, {
					onClick: e => {
						if (h && h(e), t(), b === n.awardNotification) return f();
						a(Object(l.b)(o))
					},
					className: s,
					text: r,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: x
				}, g)
			};
			u.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.b)(n, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(o.a)(n))
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = s.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: r,
						className: i,
						arrowClassName: a,
						...d
					} = e;
					const [c, l] = Object(n.useState)(t);
					return Object(n.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? s.a.createElement("div", x({
						id: r,
						className: Object(o.a)(g.a.tooltip, i, {
							[g.a.visible]: c
						})
					}, d.popperProps), c && s.a.createElement(s.a.Fragment, null, d.arrowProps && s.a.createElement("div", x({
						className: Object(o.a)(g.a.arrow, a)
					}, d.arrowProps)), d.children)) : null
				})),
				_ = r("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case _.b.FREQUENT:
							return "notification_frequent";
						case _.b.OFF:
							return "notification_off";
						case _.b.LOW:
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
			var O = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./src/reddit/controls/Dropdown/index.tsx"),
				j = r("./src/reddit/controls/Dropdown/Row.tsx"),
				C = r("./src/reddit/icons/fonts/index.tsx"),
				I = r("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = r.n(I);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => {
					return s.a.createElement(E.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: O.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(_.b.FREQUENT),
						isSelected: e.notificationLevel === _.b.FREQUENT,
						icon: s.a.createElement(C.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === _.b.FREQUENT
						})
					}, {
						displayText: O.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(_.b.LOW),
						isSelected: e.notificationLevel === _.b.LOW,
						icon: s.a.createElement(C.a, {
							name: "notification",
							isFilled: e.notificationLevel === _.b.LOW
						})
					}, {
						displayText: O.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(_.b.OFF),
						isSelected: e.notificationLevel === _.b.OFF,
						icon: s.a.createElement(C.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === _.b.OFF
						})
					}].map(e => s.a.createElement(j.b, S({
						className: Object(o.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				T = r("./src/reddit/controls/Button/index.tsx"),
				F = r("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...F.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: F.jb(t)
			});
			var B = r("./src/reddit/hooks/useTracking.ts"),
				D = r("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const R = c.a.img("SubredditIcon", N.a),
				M = c.a.wrapped(D.a, "DefaultIcon", N.a);
			var A = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: r,
						subredditIcon: n,
						onHide: i,
						onUpdate: a
					} = e;
					const o = Object(B.a)(),
						d = r ? s.a.createElement(R, {
							src: n || void 0
						}) : s.a.createElement(M, null),
						c = `r/${t}`;
					return s.a.createElement("div", {
						className: N.a.notificationPopup
					}, s.a.createElement("div", {
						className: N.a.title
					}, s.a.createElement("h2", null, O.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), s.a.createElement("h3", null, O.fbt._("{subreddit name}", [O.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), s.a.createElement("div", {
						className: N.a.subredditWrapper
					}, s.a.createElement("div", {
						className: N.a.subredditTitle
					}, d, s.a.createElement("span", null, c), s.a.createElement(C.a, {
						name: "notification_frequent",
						className: N.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(T.t, {
						className: N.a.subscribeButton,
						priority: T.c.Primary,
						size: T.d.M,
						text: O.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), a(_.b.FREQUENT), o(L(_.b.FREQUENT.toLowerCase()))
						}
					})), s.a.createElement("button", {
						className: N.a.hideButton,
						onClick: i
					}, O.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				U = r("./src/reddit/helpers/localStorage/index.ts");
			var W = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var H = e => {
					const t = Object(i.d)(),
						r = Object(B.a)(),
						a = Object(h.b)(k),
						o = Object(h.b)(w),
						[d, c] = function(e, t) {
							const [r, s] = Object(n.useState)(Object(U.Q)(e, t));
							return [r, Object(n.useCallback)(() => {
								const r = Object(U.a)(e, t);
								s(r)
							}, [e, t, s])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(W.a)(e));
					Object(n.useEffect)(() => {
						e.notificationLevel !== _.b.LOW && e.notificationLevel !== _.b.OFF || c()
					}, [e.subredditId]);
					const u = 2 === d,
						f = () => {
							a.hide()
						},
						g = () => {
							o.hide()
						};
					Object(n.useEffect)(() => (u && (o.update && o.update(), o.show()), () => {
						g(), f()
					}), [e.subredditName, u]);
					const x = () => {
							g(), a.show()
						},
						O = (e => `dropdown-${e}`)(e.subredditName),
						E = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(O, f);
					const j = Object(n.useCallback)(e => {
							e.stopPropagation(), a.visible ? f() : x()
						}, [f, x, a.visible]),
						I = Object(n.useCallback)(t => {
							t === _.b.FREQUENT && Object(U.db)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						S = Object(n.useCallback)(n => {
							const {
								subredditId: s
							} = e;
							f(), g(), t(Object(m.d)({
								subredditId: s,
								notificationLevel: n,
								successCallback: () => I(n)
							})), r(L(n.toLowerCase()))
						}, [f, e.subredditId, t, r]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(p.a)(a.target.ref, o.target.ref),
						onClick: j,
						"data-testid": "subredditNotificationButton"
					}, s.a.createElement(C.a, {
						name: y(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(v, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: O
					}, s.a.createElement(P, {
						dropdownId: O,
						notificationLevel: e.notificationLevel,
						onClick: S
					})), u && !l && s.a.createElement(v, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: E,
						className: N.a.popupTooltip
					}, s.a.createElement(A, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: S
					})))
				},
				z = r("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				G = r("./src/reddit/components/SubredditNav/index.tsx"),
				q = r("./src/reddit/components/SubscribeButton/index.tsx"),
				V = r("./src/reddit/constants/componentSizes.ts"),
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
				ne = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				se = r("./src/reddit/selectors/subreddit.ts"),
				ie = r("./src/reddit/selectors/user.ts"),
				ae = r("./src/reddit/selectors/widgets.ts"),
				oe = r("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				de = r.n(oe),
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
				const r = Object(B.a)();
				return s.a.createElement(T.t, {
					priority: T.c.Plain,
					className: me.a.muteButton,
					onClick: () => {
						r(Object(le.f)()), t()
					}
				}, s.a.createElement(ce.a, {
					className: me.a.muteIcon
				}), s.a.createElement("span", {
					className: me.a.muteDefault
				}, pe._("Muted", null, {
					hk: "incHh"
				})), s.a.createElement("span", {
					className: me.a.muteHover
				}, pe._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, he = c.a.img("SubredditIcon", de.a), fe = Object(a.c)({
				isNsfwBlurSubreddit: re.e,
				notificationLevel: se.K,
				isMuted: se.J,
				spPollsEnabled: Y.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(ne.a)(e, {
						subredditId: r
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: r
					} = t;
					return !!r && Object(se.R)(e, {
						subredditId: r
					})
				},
				userId: ie.i,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: r
					} = t;
					const n = r;
					return Object(se.jb)(e, {
						identifier: {
							name: n,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ee.b,
				widget: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(ae.f)(e, {
						subredditId: r
					}) : void 0
				}
			}), ge = {
				threshold: [.5, .001],
				rootMargin: `${1-V.f}px 0px 0px 0px`
			};
			t.a = Object(i.b)(fe, (e, t) => ({
				_updateSubredditInfo: () => {
					var r;
					const n = t.subredditId || (null === (r = t.subreddit) || void 0 === r ? void 0 : r.id);
					if (n) return e(Object(m.c)({
						subredditAboutInfo: {
							[n]: {
								notificationLevel: _.b.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var r;
					const n = t.subredditId || (null === (r = t.subreddit) || void 0 === r ? void 0 : r.id),
						s = t.subreddit ? t.subreddit.name : t.subredditName;
					if (n) return e(Object(u.c)({
						subredditId: n,
						subredditName: s
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
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(i.e)(te.b),
					u = Object(i.e)(te.a),
					m = c || u,
					[p, b] = Object(n.useState)(!1),
					h = Object(n.useRef)(null),
					[f, g] = Object(n.useState)(),
					[x, v] = Object(n.useState)(null),
					_ = Object(n.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: r
							} = t;
							r >= .5 ? e(!1) : r <= .001 && e(!0)
						})
					})(b), []);
				Object($.a)("resize", ((e, t, r) => () => {
					var n;
					e(t && r ? null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.height : void 0)
				})(g, x, m)), Object(Q.a)(h, _, ge);
				const y = e.subreddit && Object(Z.a)(e),
					k = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					w = r.charAt(0).toUpperCase() + r.slice(1),
					O = !!e.subreddit && e.subredditInlineEditingEnabled,
					E = Object(o.a)(de.a.SubredditIcon, de.a.editableIcon, {
						[de.a.emptyEditableIcon]: !y
					}),
					j = k ? s.a.createElement(z.a, {
						className: E,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : s.a.createElement(D.a, {
						className: de.a.DefaultIcon
					}),
					C = k ? s.a.createElement(he, {
						className: Object(o.a)(de.a.SubredditIconImg, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : s.a.createElement(D.a, {
						className: Object(o.a)(de.a.DefaultIcon, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					I = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					N = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px",
					S = e.isCommunityMutingEnabled && e.isMuted;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(o.a)(de.a.wrapper, {
						[de.a.stickyWrapper]: m,
						[de.a.isSticking]: p
					})
				}, s.a.createElement("div", {
					className: de.a.container,
					style: {
						maxWidth: N
					},
					ref: m ? v : void 0
				}, s.a.createElement("div", {
					className: de.a.subredditMetaContainer
				}, O ? j : C, s.a.createElement("div", {
					className: Object(o.a)(de.a.textContainer, {
						[de.a.textContainerNoIcon]: !k
					})
				}, s.a.createElement("div", {
					className: Object(o.a)(de.a.text, {
						[de.a.blur]: e.isNsfwBlurSubreddit
					})
				}, s.a.createElement("h1", {
					className: de.a.title
				}, d || w), !!d && s.a.createElement("h2", {
					className: de.a.description
				}, "r/", r)), s.a.createElement("div", {
					className: de.a.buttonWrapper
				}, s.a.createElement("div", {
					className: de.a.subscribeButtonContainer
				}, s.a.createElement(q.a, {
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
						t && (Object(U.db)(e.userId, t), e.updateSubredditInfo())
					}
				})), S && s.a.createElement(be, {
					onClickUnmute: e.unmuteSubreddit
				}), e.userIsSubscriber && !S && t && e.notificationLevel && s.a.createElement("div", {
					className: de.a.notificationButtonContainer
				}, s.a.createElement(H, {
					notificationLevel: e.notificationLevel,
					subredditName: r,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: k,
					userId: e.userId
				}))))), I && s.a.createElement(G.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: de.a.subredditNavContainer
				}))), s.a.createElement("div", {
					className: de.a.intersectionWrapper
				}, s.a.createElement("div", {
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
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router/esm/react-router.js"),
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
				v = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = r("./node_modules/lodash/flatMap.js"),
				y = r.n(_),
				k = r("./src/lib/linkMatchers/index.ts"),
				w = r("./src/lib/linkMatchers/customLinks.ts"),
				O = r("./src/reddit/controls/OutboundLink/index.tsx");
			const E = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(E);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, i] = t.slice(n, n + 3);
						r.push(e), r.push([i, s])
					}
					return r
				};
			var C = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, j)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return i.a.createElement(O.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return i.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				I = r("./src/reddit/constants/parameters.ts"),
				N = r("./src/reddit/contexts/PageLayer/index.tsx"),
				S = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => i.a.createElement(P.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				L = r("./src/reddit/models/ContentGate.ts"),
				B = r("./src/lib/constants/index.ts"),
				D = r("./src/reddit/selectors/platform.ts"),
				R = r("./src/reddit/selectors/user.ts");
			var M = r("./src/reddit/selectors/meta.ts"),
				A = r("./src/reddit/components/ContentGate/index.m.less"),
				U = r.n(A);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(F, "PrivateKey", U.a), z = l.a.div("ButtonsContainer", U.a), G = l.a.div("Container", U.a), q = l.a.div("ContainerExp", U.a), V = l.a.div("Description", U.a), K = l.a.div("PrivateSubredditDetails", U.a), J = l.a.div("PrivateSubredditDescription", U.a), Y = l.a.h3("PrivateSubredditName", U.a), Z = l.a.a("Link", U.a), X = l.a.wrapped(S.n, "LinkRouterButton", U.a), Q = l.a.wrapped(S.m, "LinkButton", U.a), $ = l.a.wrapped(S.q, "SecondaryLinkRouterButton", U.a), ee = l.a.wrapped(S.p, "SecondaryLinkButton", U.a), te = l.a.wrapped(X, "GoHomeLinkButton", U.a), re = l.a.wrapped(h.a, "CreateCommunityButton", U.a), ne = l.a.img("Image", U.a), se = l.a.img("ImagePlaceholder", U.a), ie = l.a.wrapped(X, "LeftLinkRouterButton", U.a), ae = l.a.wrapped(Q, "LeftLinkButton", U.a), oe = l.a.wrapped(ee, "SecondaryLeftLinkButton", U.a), de = l.a.wrapped($, "SecondaryLeftLinkRouterButton", U.a), ce = l.a.h3("Title", U.a), le = l.a.div("PageBody", U.a), ue = l.a.div("InterstitialMessageWrapper", U.a), me = Object(c.c)({
				isLoggedIn: R.P,
				origin: M.k,
				user: R.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(R.Q)(e)) return !1;
					const t = Object(D.d)(e);
					if (!t) return !1;
					const r = Object(R.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * B.E;
					return n > Date.now() - s
				})(e),
				isSeo: M.h
			}), pe = Object(N.u)(), be = Object(a.b)(me, (e, t) => {
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
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: a,
					isLoggedIn: o,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: _,
					quarantineMessage: y,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: w,
					interstitialWarningMessage: O,
					interstitialWarningMessageHtml: E,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: N,
					subredditDescription: S,
					subredditName: P,
					user: T
				} = e, F = async () => {
					if (o ? await N() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(I.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case L.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ce, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", P)], {
							hk: "2lyDwB"
						})), i.a.createElement(V, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(z, null, T ? i.a.createElement(oe, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ae, {
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
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ce, null, r === L.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(V, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(z, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, W._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ee, {
							onClick: F,
							redditStyle: !0
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(H, null), i.a.createElement(ce, null, "r/", P, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), S && S.length && i.a.createElement(K, null, i.a.createElement(Y, null, "r/", P), i.a.createElement(J, null, i.a.createElement("div", null, S))), i.a.createElement(V, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(z, null, T ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: U.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), i.a.createElement(oe, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(oe, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && i.a.createElement(v.a, {
							subredditName: P
						}));
					case L.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ce, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(V, null, W._("This community is {=quarantined}", [W._param("=quarantined", i.a.createElement(Z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
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
								href: `${n.a.redditUrl}/prefs/update`,
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
						})(T, s, _)));
					case L.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ce, null, W._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(V, null, i.a.createElement(ue, null, j ? i.a.createElement(x.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? i.a.createElement(g.a, {
							html: E
						}) : O), W._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(z, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, W._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(ee, {
							onClick: a,
							redditStyle: !0
						}, W._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case L.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ce, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", P)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(V, null, e ? i.a.createElement(C, {
							linkClassName: U.a.Link,
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
					case L.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(z, null, i.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(se, null), i.a.createElement(ce, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(V, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(z, null, T && i.a.createElement(re, {
							eventSource: "content_gate"
						}), i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", i.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ce, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(V, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(z, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(z, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
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
			t.default = pe(be(Object(o.i)(e => {
				const t = Object(s.useContext)(d.a) ? q : G;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(le, null, he(e))), i.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
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
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, r) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
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
			const v = "create-community-button",
				_ = x.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: r
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(r)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: r,
					onShowTooltip: s,
					onHideTooltip: a,
					openCommunityCreation: o,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), o(d)
					},
					onMouseEnter: s,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: v,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: v,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), r.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), r.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), r.e(0), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
			t.a = s
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/economics/predictions/index.ts"),
				o = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(i.d)(),
					r = Object(i.e)(t => Object(d.X)(t, {
						subredditId: e
					})),
					n = Object(i.e)(t => Object(o.i)(t, {
						subredditId: e
					})),
					c = Object(i.e)(t => Object(o.k)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						r.name && t(Object(a.l)(r.name))
					}, [r.name, t]);
				return s.a.useEffect(() => {
					c || n || l()
				}, [c, n, l]), {
					isFetching: c,
					isFetched: n,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/ImageInput/index.tsx"),
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				u = r.n(l);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: l,
					isLoading: m,
					imageUrl: p,
					onFileSelected: b
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(u.a.Container, n)
				}, s.a.createElement("label", {
					className: u.a.HitBox
				}, s.a.createElement("span", {
					className: u.a.ImageContainer,
					role: "presentation"
				}, p ? s.a.createElement("img", {
					alt: t,
					className: u.a.Image,
					src: p
				}) : r), s.a.createElement(a.a, {
					className: u.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(c.b)();
						b(e, t)
					},
					isPending: m
				}), !m && s.a.createElement("div", {
					className: Object(i.a)(u.a.EditButton, {
						[u.a.profileCard]: l
					})
				}, s.a.createElement(d.a, {
					name: "add_media",
					className: u.a.EditIcon
				}))), m && s.a.createElement(o.a, {
					className: u.a.LoadingIcon,
					sizePx: 80
				}))
			}
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
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
					} = this.state, i = r ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/Footer/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = o.a.div("UserAgreement", c.a), m = o.a.a("UserAgreementLink", c.a), p = o.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(a.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === b.Grey,
					[c.a.mIsWhite]: e.textColor === b.White
				})
			}, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
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
			t.a = s
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
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
				a = Object(s.a)("spBurnLinks", Object(n.a)({
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				v = d.a.div("HeaderContent", h.a),
				_ = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				k = d.a.wrapped(i.a, "HeaderUrl", h.a),
				w = d.a.span("Container", h.a),
				O = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
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
					const u = !!i && !!o && "left" === n,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						O = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						E = `${4+O}px`;
					return s.a.createElement(w, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(k, {
						className: e.className,
						to: e.url
					}, s.a.createElement(_, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? s.a.createElement(g, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					}) : s.a.createElement(f, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					})), s.a.createElement(y, {
						style: {
							paddingTop: 32 === O ? "4px" : "14px"
						}
					}, t)), s.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = O
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/author.ts"),
				l = r("./src/reddit/helpers/isPost.ts"),
				u = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/reddit/selectors/gold/awardIcon.ts"),
				p = r("./src/reddit/selectors/moderatorPermissions.ts"),
				b = r("./src/reddit/selectors/modUserNotes.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/selectors/structuredStyles.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/userFlair.ts"),
				k = r("./src/reddit/selectors/userPrefs.ts"),
				w = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				E = r("./node_modules/fbt/lib/FbtPublic.js"),
				j = r("./src/config.ts"),
				C = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = r("./src/lib/lessComponent.tsx"),
				N = r("./src/lib/prettyPrintNumber/index.ts"),
				S = r("./src/reddit/components/Admin/index.tsx"),
				P = r("./src/reddit/components/ChatButton/index.tsx"),
				T = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				L = r("./src/reddit/components/SubscribeButton/index.tsx"),
				B = r("./src/reddit/components/UserIcon/index.tsx"),
				D = r("./src/reddit/controls/Button/index.tsx"),
				R = r("./src/reddit/endpoints/profile/info.ts"),
				M = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				A = r("./src/reddit/icons/fonts/Info/index.tsx"),
				U = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				W = r("./src/reddit/models/Gold/Award.ts"),
				H = r("./src/reddit/models/User/index.ts"),
				z = r("./src/reddit/components/HumanDate/index.tsx"),
				G = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				q = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				V = r("./src/reddit/actions/inContextModeration.ts"),
				K = r("./src/reddit/actions/modal.ts"),
				J = r("./src/reddit/actions/subredditModeration/ban.ts"),
				Y = r("./src/reddit/constants/modals.ts"),
				Z = r("./src/reddit/components/Hovercards/helpers.ts"),
				X = r("./src/reddit/icons/fonts/index.tsx"),
				Q = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = r("./src/reddit/selectors/bannedUser.ts"),
				ee = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = r.n(ee);
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(a.c)({
				hasModMailPermissions: Object(p.b)(Q.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(_.Ab)(e, {
					userName: t.username
				})
			});
			class se extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: i,
						sendEvent: a,
						toggleBanModal: o,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), a(M.e(t))
						}
					}, s.a.createElement(X.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), re._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							o(), a(M.a(t))
						}
					}, s.a.createElement(X.a, {
						name: "ban",
						className: te.a.icon
					}), re._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							d(), a(M.d(t))
						}
					}, s.a.createElement(X.a, {
						name: "mod_mute",
						className: te.a.icon
					}), re._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ie = Object(i.b)(ne, (e, t) => {
					let {
						username: r,
						subredditId: n,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(J.e)(n, t)),
						requestUserBanInfo: () => e(Object(J.c)(n, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(V.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(J.a)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(V.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(K.i)(Y.a.MUTE_USER))
						}
					}
				})(se),
				ae = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var de = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ae.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(Z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(M.c(e.contextId))
					}
				}, s.a.createElement(X.a, {
					name: "tag",
					className: te.a.icon
				}), oe._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ce = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = r.n(ce);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = I.a.wrapped(B.a, "UserIcon", le.a),
				pe = I.a.wrapped(L.a, "SubscribeButton", le.a),
				be = I.a.wrapped(P.b, "ChatButton", le.a),
				he = I.a.wrapped(U.a, "PremiumIcon", le.a),
				fe = I.a.wrapped(C.a, "UserNameLink", le.a),
				ge = I.a.div("UserNameMetaData", le.a),
				xe = I.a.div("MetaDataItem", le.a),
				ve = I.a.div("Bullet", le.a),
				_e = I.a.div("UserNameContainer", le.a),
				ye = I.a.div("KarmaGrid", le.a),
				ke = I.a.div("GenericKarma", le.a),
				we = I.a.a("InfoLink", le.a),
				Oe = I.a.div("KarmaCount", le.a),
				Ee = I.a.div("GenericKarmaLabel", le.a),
				je = I.a.div("BannerImage", le.a),
				Ce = I.a.div("UserContainer", le.a),
				Ie = I.a.div("BottomSpacer", le.a),
				Ne = I.a.div("Container", le.a),
				Se = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(fe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && s.a.createElement(C.a, {
					to: "/premium"
				}, s.a.createElement(he, null)), e.user.isEmployee && s.a.createElement(S.a, null)), s.a.createElement(ge, null, s.a.createElement(xe, null, `u/${e.userName}`, s.a.createElement(ve, null, "•")), s.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && s.a.createElement(z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...R.a,
						...t
					};
					return s.a.createElement(ye, null, s.a.createElement(ke, null, s.a.createElement(Oe, null, Object(N.b)(r.fromPosts)), s.a.createElement(Ee, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ke, null, s.a.createElement(Oe, null, Object(N.b)(r.fromComments)), s.a.createElement(Ee, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(ke, null, s.a.createElement(Oe, null, Object(N.b)(r.fromAwardsReceived)), s.a.createElement(Ee, null, E.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [E.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(we, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(A.a, {
						className: le.a.infoIcon
					})))), s.a.createElement(ke, null, s.a.createElement(Oe, null, Object(N.b)(r.fromAwardsGiven)), s.a.createElement(Ee, null, E.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [E.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(we, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(A.a, {
						className: le.a.infoIcon
					})))))
				},
				Te = e => {
					var t, r;
					const {
						className: n,
						contextId: i,
						currentUser: a,
						hideNSFWPref: o,
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
						userName: x,
						user: v,
						userFlair: _,
						isCurrentUserBanned: y,
						userProfileStyles: k,
						acceptChats: w,
						isCommentAuthorBlocked: O
					} = e;
					if (!v) return s.a.createElement(Ne, {
						style: h
					});
					const C = !!a && Object(H.e)(a) === x,
						I = !!(null == a ? void 0 : a.snoovatarFullBodyAsset),
						N = v.accountIcon || `${j.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						P = null == u ? void 0 : u.access,
						F = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						L = null === (r = null == _ ? void 0 : _.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: B
						} = v,
						R = !!v.snoovatarFullBodyAsset,
						A = v.isNSFW && o;
					let U;
					return U = R ? !A && k && k.bannerBackgroundImage || void 0 : A ? `${j.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: n,
						id: d,
						style: h
					}, !R && U && s.a.createElement(je, {
						style: {
							backgroundImage: `url('${U}')`
						}
					}), s.a.createElement(Ce, null, R ? s.a.createElement(q.a, {
						isHovercard: !0,
						bannerBackgroundImage: U,
						compact: !0,
						currentUserHasSnoovatar: I,
						isEmployee: v.isEmployee,
						isGold: v.isGold,
						isNSFW: v.isNSFW,
						isOwnProfile: C,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: v.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(_e, null, s.a.createElement(me, {
						iconUrl: N,
						isNSFW: v.isNSFW,
						userName: x
					}), s.a.createElement(Se, {
						title: null == p ? void 0 : p.title,
						user: v,
						userName: x
					})), s.a.createElement(Pe, {
						user: v
					}), B && s.a.createElement(G.a, {
						recentAwardings: B,
						topAwardIcon: g,
						username: x
					}), c && !C && !y && w && !O && s.a.createElement(be, {
						contextId: i,
						priority: D.c.Secondary,
						userId: v.id,
						text: E.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), v.hasUserProfile && !y && !O && !C && v.enableFollowers && s.a.createElement(pe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(M.h)(e ? "unfollow" : "follow", i),
						isFullWidth: !0,
						small: !0
					})), P && i && !C && f && s.a.createElement(ie, {
						contextId: i,
						subredditId: f,
						sendEvent: b,
						username: x
					}), S && i && F && L && f && s.a.createElement(de, {
						contextId: i,
						subredditId: f,
						sendEvent: b,
						username: x
					}), s.a.createElement(T.i, {
						contextId: i,
						subredditId: f,
						user: v
					}), !(P || c) && s.a.createElement(Ie, null))
				},
				Fe = Object(F.a)(Te),
				Le = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Fe, ue({
						isOpen: t
					}, e))
				};
			Le.WrappedComponent = Te;
			var Be = Le;
			const De = Object(a.c)({
					activeTooltipId: v.a,
					currentUser: _.k,
					isLoggedIn: _.Q,
					hideNSFWPref: _.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(p.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: k.d,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(f.k)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(m.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: _.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(y.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(x.p)(t) && Object(x.ib)(e, t),
					userProfileStyles: (e, t) => Object(g.m)(e, Object(f.n)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(f.i)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = Object(w.e)(e),
							s = r || n && Object(x.H)(e, n.name);
						return !!s && Object(p.i)(e, s)
					},
					trophyCase: (e, t) => Object(f.s)(e, Object(f.n)(e, t.userName)),
					isNightMode: _.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(l.a)(t.contextId) ? Object(h.G)(e, {
							postId: t.contextId
						}) : Object(u.b)(e, {
							commentId: t.contextId
						});
						return Object(b.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(x.jb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				Re = Object(i.b)(De, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Re(e => e.isModWithUserNotesPermissions ? s.a.createElement(O.b, {
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
			}) : Object(c.a)(e.userName) ? null : s.a.createElement(Be, {
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
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(n.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(s.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(a.a, {
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
				return x
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "c", (function() {
				return _
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(a.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(a.b)(b, (e, t) => ({
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
			class x extends s.a.Component {
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
					return s.a.createElement("div", {
						className: Object(i.a)(g.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const v = m(x),
				_ = h(x)
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
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				i = r("./src/reddit/components/Hovercards/helpers.m.less"),
				a = r.n(i);
			const o = n.a.wrapped(s.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: i
					} = e;
					let a = s;
					return r && (a = `${a}--${r}`), i && (a = `${a}--${i}`), t && (a = `${a}--${t}`), n && (a = `${a}--${n}`), a
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				return _
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return I
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./node_modules/lodash/isNil.js"),
				d = r.n(o),
				c = r("./src/reddit/constants/jsapiEvents.ts");
			var l = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...n
							}
						} = this;
						l.a.publish(c.a, n, e)
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
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
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
					n = Object(f.M)(e, t);
				return {
					comment: r,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var x = Object(i.b)(() => Object(a.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
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
			const v = (e, t) => {
				const r = Object(h.b)(e, t),
					n = Object(f.M)(e, t);
				return {
					comment: r,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var _ = Object(i.b)(() => Object(a.a)(v, e => e))(e => s.a.createElement(p, {
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
			var y = Object(i.b)(() => Object(a.c)({
					subreddit: f.X
				}))(e => s.a.createElement(p, {
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
					r = Object(n.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				}) : null
			};
			var O = e => {
				const t = Object(k.a)(),
					r = Object(n.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: r
				}) : null
			};
			var E = e => {
				const t = Object(k.a)(),
					r = Object(n.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				}) : null
			};
			var j = Object(i.b)(() => Object(a.c)({
				subreddit: f.X
			}))(e => s.a.createElement(p, {
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
			var C = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.P)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
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
			var I = Object(i.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(f.X)(e, {
						subredditId: r
					}) : null
				}
			}))(e => s.a.createElement(p, {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/reddit/components/Media/index.m.less"),
				o = r.n(a);
			const d = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: r
					} = e;
					return i.a.createElement("div", {
						className: o.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: o.a.unblurButton
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/addQueryParams/index.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/forceHttps/index.ts"),
				l = r("./src/reddit/constants/tracking.ts"),
				u = r("./src/reddit/models/Media/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = r.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(a.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					r = e.isResponsive ? Object(o.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), e.isTweet || (n.height = "100%"), s.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: r,
					style: n,
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
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				x = r("./src/reddit/hooks/useClickSourceData.ts"),
				v = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = r("./src/reddit/models/Media/index.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				k = r("./src/reddit/selectors/telemetry.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/constants/tracking.ts"),
				E = r("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = r("./src/reddit/components/Media/ImageBox/index.m.less"),
				C = r.n(j);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => e > 2 * _.e,
				S = e => i.a.createElement("img", {
					alt: e.altText || n.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[C.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				P = e => {
					const t = Object(c.a)(C.a.image, h.g, e.className, {
							[C.a.mShowCentered]: e.showCentered,
							[C.a.mShowBlurred]: e.shouldBlur
						}),
						r = {};
					e.showFull || e.isTall || (r.maxHeight = `${_.j}px`), e.isListing || e.isTall && N(e.height) || (r.maxHeight = `${_.e}px`), e.isExpando && e.maxHeight && (r.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (r.maxWidth = `${e.maxWidth}px`);
					const a = Object(s.useRef)(null),
						[o, d] = Object(s.useState)(!1),
						l = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!o && t && d(!0)
							})
						}, [o]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(v.a)(a, l, u.current);
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
					const f = Object(s.useRef)({
						height: b
					});
					return e.renderSmallMedia ? i.a.createElement("div", {
						ref: a,
						style: f.current
					}, o && i.a.createElement(S, I({}, e, {
						className: t
					}))) : i.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: r
					})
				},
				T = e => {
					const t = {};
					return (!e.showFull && Object(_.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${_.j}px`, e.shouldBlur && (t.maxWidth = Object(_.L)(e.height, e.width) ? `${_.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className, {
							[C.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				F = Object(a.b)(() => Object(d.a)(y.F, w.jb, (e, t) => {
					let {
						isSponsored: r,
						postId: n
					} = t;
					return r && n ? Object(y.b)(e, n) : null
				}, k.d, y.G, (e, t, r, n, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: r,
					pageType: n.pageType,
					post: s
				})));
			t.a = F(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					"data-adclicklocation": E.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, B(e)) : e.isListing && e.postPermalink ? i.a.createElement(o.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, B(e)) : B(e)
			});
			const L = (e, t) => i.a.createElement(P, {
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
				B = e => {
					let {
						onClick: t,
						...r
					} = e;
					const s = Object(_.L)(r.height, r.width),
						a = N(r.height) && s;
					return i.a.createElement(T, I({}, r, {
						className: `${s?`${O.a} `:""}${r.className||""}`
					}), r.isListing ? i.a.createElement("div", {
						className: r.contentImageClassName
					}, L(s, r)) : i.a.createElement("a", {
						href: r.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: C.a.imageLink
					}, L(s, r), r.shouldBlur && !r.isVideoThumbnail && !r.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!r.isNSFW,
						isSpoiler: !!r.isSpoiler
					})), r.isListing && !r.showFull && r.height > _.j && Object(_.L)(r.height, r.width) && i.a.createElement("div", {
						className: C.a.seeMore
					}, n.fbt._("see full image", null, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/forceHttps/index.ts"),
				o = r("./src/reddit/models/Media/index.ts"),
				d = r("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = r.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
					n = e.blurSrc ? s.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(o.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : r
				}, n, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), s.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(l, this.props)
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
				return E
			}));
			var n = r("./node_modules/lodash/throttle.js"),
				s = r.n(n),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./node_modules/react-redux/es/index.js"),
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
				v = r("./src/lib/hooks/usePrevious.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function y(e) {
				let {
					autoplay: t,
					isListing: r,
					isNotCardView: n,
					onBufferingChange: s,
					shouldLoad: o,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(i.useRef)(),
					b = Object(i.useRef)(),
					h = Object(v.a)(d);

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
					if (y(!d && (t || n)), b.current && s) return p.current = function(e, t) {
						let r = !1,
							n = !1;
						const s = () => r = !0,
							i = () => n = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", i), e.addEventListener("playing", i);
						let a = !1,
							o = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(o = d);
							if (e.paused || e.seeking || !r) return void(o = d);
							const s = a;
							4 === e.readyState ? a = !1 : !a && d >= o && d < o + g ? a = !0 : a && d >= o && d > o + g && (a = !1), o = d, s !== a && t(a)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", s)
						}
					}(b.current, s), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					h !== d && y(!d && (t || n))
				}, [h, d, t, n]), a.a.createElement("video", _({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var k = r("./src/reddit/components/Media/VideoBox/index.m.less"),
				w = r.n(k);
			const O = Object(d.c)({
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
					loadTimes: n,
					metadata: i,
					started: d
				} = Object(o.e)(t => O(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: x,
					showFull: v,
					shouldPause: _,
					width: k,
					isListing: E,
					className: j,
					showCentered: C,
					originalSource: I,
					isPromoted: N,
					renderSmallMedia: S
				} = e, P = t && !(N && Object(c.hasAcceptableAds)()), T = Object(o.d)();

				function F(e) {
					T(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function L() {
					return T(Object(u.z)({
						postId: b
					}))
				}
				const B = s()(e => {
					if (r) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && T(Object(u.s)(b))
				}, 200);

				function D(e) {
					e.persist(), B(e)
				}

				function R(e) {
					var t;
					(i || A(e), d) || (t = e.timeStamp, T(Object(u.A)(b, t)))
				}

				function M(e) {
					T(Object(u.q)(b, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						T(Object(u.D)({
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
					n || R(e), i || A(e), T(Object(u.C)(b))
				}

				function W() {
					const e = {};
					return C && (e.margin = "0 auto"), E || (e.maxHeight = `${p.e}px`), a.a.createElement(y, {
						autoplay: P,
						className: Object(l.a)(m.a, w.a.styledVideo, {
							[w.a.renderSmallMedia]: S
						}),
						height: S ? void 0 : g,
						isListing: E,
						isNotCardView: x,
						key: b,
						loop: !0,
						onBufferingChange: F,
						onLoadStart: M,
						onLoadedData: R,
						onLoadedMetadata: A,
						onPause: L,
						onPlaying: U,
						onTimeUpdate: D,
						shouldLoad: h,
						shouldPause: _,
						showCentered: C,
						showFull: v,
						source: f,
						style: S ? void 0 : e,
						width: S ? void 0 : k
					})
				}
				return E ? W() : a.a.createElement("div", {
					className: Object(l.a)(w.a.container, j, {
						[w.a.centered]: C
					})
				}, a.a.createElement("a", {
					href: I,
					target: "_blank",
					rel: "noopener noreferrer"
				}, W()))
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/icons/fonts/Info/index.tsx"),
				c = r("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = r.n(c);
			const u = Object(i.a)(o.a),
				m = ["center", "bottom"],
				p = ["center", "top"];
			class b extends s.a.Component {
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
					return s.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, s.a.createElement(d.a, null), s.a.createElement(u, {
						className: Object(a.a)(e.className, l.a.textTooltip),
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
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
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
			const v = c.a.wrapped(m.a, "_Dropdown", x.a),
				_ = Object(u.a)(v),
				y = c.a.button("MenuButton", x.a),
				k = c.a.wrapped(p.b, "DropdownRow", x.a),
				w = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: r
						} = t;
						return Object(h.b)(r)(e)
					}
				}),
				O = Object(a.b)(w, (e, t) => {
					let {
						dropdownId: r
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: r
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), i.a.createElement(_, {
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
				return n
			})), r.d(t, "a", (function() {
				return m
			}));
			var n, s = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(n || (n = {}));
			const m = e => {
				let {
					space: t
				} = e;
				const r = Object(d.e)(c.db),
					a = t === n.MODAL;
				return o.a.createElement("div", {
					className: Object(i.a)(u.a.background, {
						[u.a.isNightmodeOn]: r,
						[u.a.isModal]: a
					})
				}, o.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), o.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), o.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: r ? `url(${s.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${s.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), o.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${s.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), o.a.createElement("div", {
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
			var n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = r.n(d);
			const l = Object(s.forwardRef)((function(e, t) {
					let {
						className: r,
						progress: n
					} = e;
					const s = 100 * n;
					return i.a.createElement("div", {
						className: Object(a.a)(c.a.barRow, r),
						ref: t
					}, i.a.createElement("div", {
						className: c.a.track
					}), i.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${s}%`
						}
					}, i.a.createElement(o.a, {
						className: Object(a.a)(c.a.icon, {
							[c.a.empty]: 0 === n,
							[c.a.full]: n >= 1
						})
					})))
				})),
				u = e => {
					let {
						className: t,
						progress: r
					} = e;
					const [a, o] = Object(s.useState)(!1), d = a ? r : 0;
					return i.a.createElement(n.a, {
						onChange: e => {
							a || e.intersectionRatio < .75 || o(!0)
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				o = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = r.n(u);
			const p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(i.a)(m.a.userIconContainer, e.iconClassName)
			}, s.a.createElement(o.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), s.a.createElement("h4", {
				className: Object(i.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(l.a)(),
					{
						className: n,
						supporter: o
					} = e,
					{
						score: u,
						supporterInfo: b
					} = o,
					h = Object(a.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					f = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					g = Object(a.c)(b),
					x = Object(a.a)(u),
					v = s.a.createElement(p, {
						userName: h,
						isNsfw: f,
						iconUrl: g
					});
				return s.a.createElement("div", {
					className: Object(i.a)(n, m.a.container)
				}, b ? s.a.createElement(d.default, {
					className: m.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && r(Object(c.o)(b.id, b.displayName))
					}
				}, v) : s.a.createElement("div", {
					className: m.a.user
				}, v), s.a.createElement("div", {
					className: m.a.counter
				}, s.a.createElement(x, {
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
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
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
					height: Object(a.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class _ extends i.a.Component {
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
					} = this.props, s = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: x,
						willEnter: v,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
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
					}))))))), s && i.a.createElement(o.t, {
						priority: o.c.Secondary,
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
			t.a = i.a.memo(_)
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
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 3;

			function l(e) {
				return e >= c ? o.a : e >= d ? a.a : i.a
			}

			function u(e) {
				var t;
				const r = !e,
					s = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = e => {
				let {
					displayName: t,
					score: r
				} = e;
				return t || s.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [s.fbt._plural(r)], {
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
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: t,
					onClick: r,
					disabled: n
				} = e;
				return Object(a.e)(l.q) ? i.a.createElement(c.t, {
					priority: c.c.Primary,
					className: t,
					onClick: r,
					isFullWidth: !0,
					disabled: n
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
				v = r("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				w = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				O = r.n(w);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: n,
					count: s,
					tiersInfo: a
				} = r, o = (a[n] || a[n - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: O.a.titleRow
				}, i.a.createElement("span", null, E._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(k.b, {
					progress: d
				}))
			};
			var C = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				I = r("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				N = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				S = r.n(N);
			const {
				fbt: P
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t,
					subredditId: r
				} = e;
				const c = Object(a.d)(),
					u = Object(x.a)(),
					k = Object(a.e)(y.k),
					w = Object(a.e)(e => Object(l.i)(e, {
						subredditId: r
					})),
					O = Object(a.e)(e => Object(_.X)(e, {
						subredditId: r
					})),
					E = Object(a.e)(e => Object(l.l)(e, {
						subredditId: r
					})),
					N = Object(a.e)(e => !!Object(l.j)(e, {
						subredditId: r
					})),
					T = Object(a.e)(I.b) && Object(I.c)(r),
					F = Object(a.e)(v.i);
				Object(s.useEffect)(() => {
					w && c(Object(o.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(r))
				}, [w, r, c]);
				if (!w || 1 === w.tiersInfo.length || !O || T || F) return null;
				return i.a.createElement(h.a, null, i.a.createElement(f.a, {
					className: t,
					title: P._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: S.a.container
				}, i.a.createElement("div", {
					className: S.a.titleGroup
				}, i.a.createElement("div", {
					className: S.a.powerupsIcon
				}, i.a.createElement("img", {
					className: S.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers.png`
				})), i.a.createElement("h2", {
					className: S.a.title
				}, (() => N ? P._("Powerups are unlocked in {communityName}", [P._param("communityName", O.displayText)], {
					hk: "3xCZkG"
				}) : P._("Powerup to unlock perks for {communityName}", [P._param("communityName", O.displayText)], {
					hk: "2OPLXh"
				}))()), i.a.createElement(m, {
					className: S.a.button,
					onClick: () => {
						u(Object(g.k)()), c(Object(d.e)("powerups_sidebar"))
					}
				}), i.a.createElement(p.a, {
					space: p.b.SIDEBAR
				})), i.a.createElement("div", {
					className: S.a.group
				}, i.a.createElement("h3", {
					className: S.a.subTitle
				}, P._("Community Heroes", null, {
					hk: "2ssat0"
				})), i.a.createElement(j, {
					className: S.a.progress,
					powerups: w
				}), !!(null == E ? void 0 : E.length) && i.a.createElement(C.a, {
					supporters: E,
					className: S.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						u(Object(g.m)()), c(Object(d.f)(r))
					}
				}), !(null == E ? void 0 : E.length) && i.a.createElement("div", {
					className: S.a.becomeFirstHero
				}, i.a.createElement(b.a, {
					displayName: P._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == k ? void 0 : k.displayName,
					isNsfw: !!(null == k ? void 0 : k.isNSFW),
					iconUrl: null == k ? void 0 : k.accountIcon,
					textClassName: S.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/config.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(o);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: o
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${i.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), o > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(a.b)(o-1)}`)), s.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", n.name), c._plural(o)], {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				o = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(a.e)(e);
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
						hideNSFWPref: s,
						isNSFW: a,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? i.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? i.a.createElement(o.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : a && s ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = Object(s.c)({
					currentUser: a.k,
					hideNSFWPref: a.F
				}),
				d = Object(n.b)(o, e => ({
					imageUpdateRequested: (t, r) => e(Object(i.C)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router/esm/react-router.js"),
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
			t.a = Object(o.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: o,
					post: h,
					share: x
				} = e;
				const v = Object(l.b)(),
					_ = Object(a.d)(),
					y = h && h.id,
					k = h && h.voteState;
				let w = null;
				y || (w = t ? "user_hovercard" : "profile_overview");
				const O = Object(s.useCallback)(() => v(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, v, r]);
				return i.a.createElement(u.t, {
					onClick: () => {
						o ? (v(m.i), y && k === b.a.notVoted && _(Object(d.kb)(y))) : O();
						const e = o ? "postify" : "copy";
						_(Object(c.b)({
							clickSource: w,
							share: x,
							source: e
						}))
					},
					className: Object(n.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: o
					}),
					isFullWidth: !0
				}, i.a.createElement(p.a, {
					className: Object(n.a)({
						[f.a.shirtIcon]: !o,
						[f.a.avatarPostButtonShirtIcon]: o
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/icons/fonts/index.tsx"),
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
					className: n,
					isOwnProfile: c,
					onClick: m
				} = e;
				return s.a.createElement(a.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(i.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && c,
						[l.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(o.a, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = r("./src/reddit/icons/svgs/Close/index.tsx"),
				o = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(o.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), d && t && (l ? s.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(a.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/components/HumanDate/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
					url: n,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(a.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(i.default, o({}, l, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", o({}, l, {
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
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				c = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const m = 25;

			function p(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function b(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const h = p("particleDelay", u.a),
				f = p("particleX", u.a),
				g = p("particleFloat", u.a),
				x = () => {
					const e = b(f),
						t = b(g),
						r = b(h);
					return Object(s.a)(u.a.particle, e, t, r)
				};
			class v extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < m; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: u.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${x()}`
					})
				}
			}
			var _ = v;
			const y = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: i,
					prefersReducedAnimations: l,
					origin: m
				} = e;
				const p = i && Object(c.d)(i),
					b = m === d.a.Profile,
					h = m === d.a.Hovercard;
				return p ? a.a.createElement("div", {
					className: Object(s.a)({
						[u.a.profileTreatment]: b,
						[u.a.hovercardTreatment]: h
					})
				}, a.a.createElement("div", {
					className: u.a.nftProfileUnitContainer
				}, a.a.createElement(o.a, {
					className: u.a.nftProfileUnit,
					imageUrl: i,
					origin: m
				}))) : a.a.createElement("div", {
					className: Object(s.a)(u.a.snoovatarContainer, t)
				}, r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: u.a.topGlow
				}), a.a.createElement("div", {
					className: u.a.bottomGlow
				}), !l && a.a.createElement(_, null)), a.a.createElement("img", {
					className: Object(s.a)(u.a.snoovatar, {
						[u.a.premiumGlow]: r
					}),
					src: i,
					alt: n.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/reddit/components/Admin/index.tsx"),
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
				return a.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, l && a.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, a.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), i && a.a.createElement(o.a, null), m && a.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
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
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: b,
					isDeletingBanner: f,
					isEmployee: _,
					isGold: y,
					isNSFW: k,
					isOwnProfile: w,
					onClickSnoovatar: O,
					onDeleteBanner: E,
					prefersReducedAnimations: j,
					snoovatarUrl: C,
					title: I,
					userCreated: N,
					username: S,
					url: P,
					isHovercard: T
				} = e;
				const F = Object(i.e)(e => !w && !!C && Object(c.e)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!b,
					isNSFW: k,
					username: S,
					isDeletingBanner: !!f,
					onDeleteBanner: E
				}), !b && w && s.a.createElement(a.default, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: g.a.settingsIcon
				})), s.a.createElement(x.a, {
					isGold: y,
					snoovatarUrl: C,
					prefersReducedAnimations: j,
					origin: T ? o.a.Hovercard : o.a.Profile
				}), s.a.createElement(v.a, {
					isEmployee: _,
					isGold: y,
					isNSFW: k,
					title: I,
					username: S
				}), s.a.createElement(p.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: N,
					url: P
				}), (w || !n && !!C) && s.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: w,
					onClick: O
				}), F && s.a.createElement(u.a, {
					username: S,
					isHovercard: !!T,
					share: {
						username: S
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
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/actions/urlRequested.ts"),
				l = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = r("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = r.n(m);
			const b = Object(a.b)(null, e => ({
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
							((e, t, r, n, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const r = e.target.getAttribute("href");
									s && n(r, s), t(r)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), r && r(e)
							})(r, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(o.a)(h))
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: r,
						...n
					} = e;
					return i.a.createElement(x, p({}, n, {
						className: Object(a.a)(t, {
							[u.a.isOpen]: r
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [o.a.Click, o.a.Keydown]);
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
					return i.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
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
				return v
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "t", (function() {
				return j
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "q", (function() {
				return N
			})), r.d(t, "s", (function() {
				return S
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "w", (function() {
				return F
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/controls/OutboundLink/index.tsx"),
				a = r("./src/reddit/components/RichTextJson/elements.m.less"),
				o = r.n(a),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", o.a), d.a.div("H2", o.a), d.a.div("H3", o.a), d.a.div("H4", o.a), d.a.div("H5", o.a), d.a.div("H6", o.a)],
				u = d.a.hr("Hr", o.a),
				m = d.a.code("M", o.a),
				p = d.a.pre("Pre", o.a),
				b = d.a.blockquote("Blockquote", o.a),
				h = d.a.p("P", o.a),
				f = d.a.li("Li", o.a),
				g = d.a.ul("Ul", o.a),
				x = d.a.ol("Ol", o.a),
				v = d.a.strong("B", o.a),
				_ = d.a.em("I", o.a),
				y = d.a.span("U", o.a),
				k = e => s.a.createElement("del", e),
				w = d.a.sub("Sub", o.a),
				O = d.a.sup("Sup", o.a),
				E = d.a.table("Table", o.a),
				j = d.a.tr("Tr", o.a),
				C = d.a.td("Tdl", o.a),
				I = d.a.td("Tdc", o.a),
				N = d.a.td("Tdr", o.a),
				S = d.a.th("Thl", o.a),
				P = d.a.th("Thc", o.a),
				T = (d.a.th("Thr", o.a), d.a.wrapped(e => s.a.createElement(i.b, e), "A", o.a)),
				F = d.a.wrapped(c.a, "A", o.a)
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
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/findLastIndex.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
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
				v = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: r,
						...n
					} = e;
					return o.a.createElement(x, n)
				}),
				_ = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				y = e => i()(e, _),
				k = e => e.findIndex(_),
				w = e => {
					const {
						altText: t,
						className: r,
						content: n,
						isListing: s,
						isNSFW: i,
						isNsfwBlockingModalEligible: a,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: _,
						rtJsonElementProps: w,
						useExplicitTextColor: O,
						shouldBlur: E,
						onClickRevealSpoilerText: j,
						mediaProps: C
					} = e, I = n.document, N = [], S = e.mediaMetadata || null, P = k(I), T = y(I);
					if (E && !s && !a) return o.a.createElement(x, {
						className: Object(d.a)(m.j, r)
					}, o.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== P)
						for (let o = P; o <= T; o++) {
							const e = I[o];
							switch (e.e) {
								case p.k:
									N.push(h.c(e, w, o));
									break;
								case p.l:
									N.push(h.d(o));
									break;
								case p.b:
									N.push(h.a(e, S, w, o));
									break;
								case p.c:
									N.push(h.b(e, o));
									break;
								case p.p:
									N.push(h.f(e, S, w, o, j));
									break;
								case p.z:
									N.push(h.h(e, S, w, o, j));
									break;
								case p.u:
									N.push(h.g(e, S, w, o, j));
									break;
								case p.h:
									N.push(Object(b.a)(e, o));
									break;
								case p.m:
								case p.a:
								case p.D:
									N.push(...Object(b.b)(e, o, w, S, _, f, t, C))
							}
						}
					return O ? o.a.createElement(x, {
						className: Object(d.a)(m.j, r)
					}, N) : o.a.createElement(v, {
						className: Object(d.a)(m.j, r),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
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
				return P
			})), r.d(t, "b", (function() {
				return F
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/config.ts"),
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
				v = r("./src/reddit/components/RichTextJson/elements.tsx"),
				_ = r("./src/reddit/components/RichTextJson/media.m.less"),
				y = r.n(_),
				k = r("./src/lib/lessComponent.tsx"),
				w = r("./src/reddit/helpers/media/index.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = /\/(\w+)\/asset\/(\w+)\//,
				j = k.a.wrapped(v.a, "A", y.a),
				C = k.a.wrapped(l.a, "ImageBox", y.a),
				I = k.a.wrapped(e => i.a.createElement("p", e), "Caption", y.a),
				N = k.a.div("Placeholder", y.a),
				S = k.a.wrapped(e => {
					let {
						className: t,
						e: r,
						renderSmallMedia: o,
						onReload: d,
						...c
					} = e;
					const l = r === g.D ? n.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : n.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						d && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(N, O({
						className: Object(a.a)(t, {
							[y.a.renderSmallMedia]: o,
							[y.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && u && i.a.createElement(p.t, {
						priority: p.c.Plain,
						className: y.a.ModalTopicsErrorButton,
						Icon: Object(f.b)("refresh"),
						text: n.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", y.a),
				P = (e, t) => {
					let {
						c: r,
						x: n,
						y: s
					} = e;
					return i.a.createElement("div", {
						className: y.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: r,
						height: s,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				T = (e, t, r) => {
					const n = e.c;
					let s = "";
					return r && (r.e === g.s ? s = r.s.u : r.e === g.r ? s = r.s.gif : r.e === g.t && (s = (e => {
						const t = E.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(r.dashUrl))), s ? i.a.createElement(j, {
						href: s,
						key: t,
						title: n
					}, n || s) : null
				},
				F = (e, t, r, n, s, o, c, l) => {
					const p = g.E(n, e.id);
					if (s) return [T(e, t, p)];
					const f = [];
					return !p || p.e === g.s && null === p.s.x && null === p.s.y ? f.push(((e, t, r, n) => i.a.createElement(S, {
						e,
						key: t,
						renderSmallMedia: r,
						onReload: n
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === g.s ? f.push(((e, t, r, n, s) => {
						let {
							id: o,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = s || {};
						let p = d;
						return m && (p = Object(w.i)(240, 20, d, c)), i.a.createElement("div", {
							className: Object(a.a)(y.a.MediaWrapper, {
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
							altText: n,
							originalSource: d.u,
							postId: o,
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
					})(p, t, !!e.c, c, l)) : p.e === g.r ? f.push(((e, t, r, n, s) => {
						let {
							id: o,
							ext: d,
							s: c
						} = e;
						if (Object(h.h)(o)) {
							const e = n.renderingObjectInfo,
								s = !!e && Object(b.b)(e),
								l = d || Object(h.g)(o);
							return i.a.createElement("div", {
								className: Object(a.a)({
									[y.a.MediaWrapper]: !s,
									[y.a.CommentGifWrapper]: s,
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
							className: Object(a.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: r,
								[y.a.hasSmallMedia]: s
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
							postId: o,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !s,
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: s
						})))
					})(p, t, !!e.c, r, null == l ? void 0 : l.renderSmallMedia)) : p.e === g.t && f.push(((e, t, r, n) => {
						let {
							hlsUrl: s,
							dashUrl: o,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(a.a)(y.a.MediaWrapper, {
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
							hlsSource: s,
							mpegDashSource: o,
							postId: n,
							isGif: m
						})))
					})(p, t, !!e.c, o)), e.c && f.push(((e, t) => i.a.createElement(I, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return P
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "e", (function() {
				return U
			}));
			var n = r("./src/lib/unicodeUtils/index.ts"),
				s = r("./node_modules/lodash/reduce.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
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
				v = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
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
					let r, n, s;
					t.e === m.s ? (r = t.s.x, n = t.s.y, s = t.s.u) : t.e === m.r && (r = t.s.x, n = t.s.y, s = t.s.gif);
					const i = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return s ? o.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: i,
						src: s,
						width: r,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(h, {
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
				O = r("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				E = r("./src/reddit/components/SubredditMention/index.tsx"),
				j = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				C = r("./src/reddit/helpers/isComment.ts"),
				I = r("./src/reddit/helpers/isPost.ts"),
				N = r("./src/reddit/helpers/richTextJson/index.ts"),
				S = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, r) => {
					const n = e.c || [],
						s = e.l,
						i = [],
						a = n.length;
					for (let o = 0; o < a; o++) {
						const e = n[o];
						i.push(e.e === m.w ? e.t : U(e, t, o))
					}
					const c = d.x[s - 1];
					return o.a.createElement(c, {
						key: r
					}, i)
				},
				T = e => o.a.createElement(d.e, {
					key: e
				}),
				F = (e, t, r, n, s) => {
					const i = e.c;
					if (!i) return;
					const a = i.length,
						c = [];
					for (let o = 0; o < a; o++) c.push(D(i[o], t, r, o, s));
					return o.a.createElement(d.c, {
						key: n
					}, c)
				},
				L = (e, t) => {
					const r = e.c;
					return o.a.createElement(d.k, {
						key: t
					}, o.a.createElement(d.h, null, r.reduce((e, t, r, n) => e += t.t + (r < n.length ? "\n" : ""), "")))
				},
				B = (e, t, r, n, s) => {
					const i = e.c,
						a = [],
						c = i.length;
					for (let u = 0; u < c; u++) {
						const e = i[u].c;
						e && e.length && a.push(o.a.createElement(d.g, {
							key: u
						}, e.map((e, n) => D(e, t, r, n, s))))
					}
					const l = e.o ? d.i : d.v;
					return o.a.createElement(l, {
						key: n
					}, a)
				},
				D = (e, t, r, n, s) => {
					switch (e.e) {
						case m.b:
							return F(e, t, r, n, s);
						case m.c:
							return L(e, n);
						case m.k:
							return P(e, r, n);
						case m.l:
							return T(n);
						case m.p:
							return B(e, t, r, n, s);
						case m.u:
							return M(e, t, r, n, s);
						case m.z:
							return R(e, t, r, n, s)
					}
				},
				R = (e, t, r, n, s) => {
					const i = e.c,
						a = e.h,
						c = i.length,
						l = a.length,
						u = [],
						m = [],
						p = [];
					for (let d = 0; d < l; d++) {
						const e = a[d],
							{
								H: n,
								D: i
							} = G(e.a),
							{
								c = []
							} = e;
						u.push(o.a.createElement(n, {
							key: d
						}, A(c, t, r, s))), p[d] = i
					}
					for (let b = 0; b < c; b++) {
						const e = i[b],
							n = e.length,
							a = [];
						for (let i = 0; i < n; i++) {
							const n = p[i],
								{
									c: d = []
								} = e[i];
							a.push(o.a.createElement(n, {
								key: i
							}, A(d, t, r, s)))
						}
						m.push(o.a.createElement(d.t, {
							key: b
						}, a))
					}
					return o.a.createElement(d.n, {
						key: n
					}, o.a.createElement("thead", null, o.a.createElement(d.t, null, u)), o.a.createElement("tbody", null, m))
				},
				M = (e, t, r, n, s) => {
					if (!e.c || !e.c.length) return (e => o.a.createElement(d.j, {
						key: e
					}, o.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== m.m && i.e !== m.a || !Object(N.h)(i.id) ? o.a.createElement(d.j, {
						key: n
					}, A(e.c, t, r, s)) : Object(w.b)(i, n, r, t)
				},
				A = (e, t, r, n) => {
					const s = [],
						i = e.length;
					for (let a = 0; a < i; a++) {
						const i = e[a];
						if (i.e === m.A) s.push(W(i, a));
						else if (i.e === m.x) s.push(o.a.createElement(O.a, {
							key: a,
							onClickReveal: n
						}, A(i.c, t, r, n)));
						else if (i.e === m.n) s.push(o.a.createElement("br", {
							key: a
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.E(t, i.id);
								e && s.push(o.a.createElement(k, {
									key: a,
									node: i,
									media: e
								}))
							}
						} else s.push(U(i, r, a))
					}
					return s
				},
				U = (e, t, r) => {
					switch (e.e) {
						case m.o:
							const n = W({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(j.b)(e.u)) return o.a.createElement(d.w, {
								to: e.u,
								key: r,
								title: e.a
							}, n);
							let s, i;
							const a = Object(S.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(I.b)(c) && (s = c.postId), c && Object(C.b)(c) && (i = c.id, s = c.postId), o.a.createElement(d.a, {
								href: e.u,
								key: r,
								title: e.a,
								sourceElement: a,
								postId: s,
								commentId: i
							}, n);
						case m.y:
							return o.a.createElement(E.b, {
								key: r,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.B:
						case m.C:
							return o.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: r
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.v:
							return o.a.createElement(d.a, {
								href: e.t,
								key: r
							}, e.t)
					}
				},
				W = (e, t) => {
					const {
						f: r,
						t: s
					} = e, i = [];
					if (!r) return z(0, s, t);
					const a = Object(n.a)(s);
					let o = 0,
						d = 0;
					const c = r.length;
					for (; o < c; o++) {
						const [e, t, n] = r[o], c = t + n, l = a[t], u = a[c] - l;
						l > d && i.push(z(0, s.substr(d, l - d), `between${o}`)), i.push(z(e, s.substr(l, u), o)), d = l + u
					}
					return d < s.length && i.push(z(0, s.substr(d), `remaining${o}`)), i
				},
				H = {
					[m.j.monospace]: d.h,
					[m.j.bold]: d.b,
					[m.j.italic]: d.f,
					[m.j.underline]: d.u,
					[m.j.strikethrough]: d.d,
					[m.j.subscript]: d.l,
					[m.j.superscript]: d.m
				},
				z = (e, t, r) => {
					let n = t;
					return n = i()(H, (t, n, s) => e & parseInt(s, 10) ? o.a.createElement(n, {
						key: r
					}, t) : t, n)
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/polished/dist/polished.es.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/lib/addQueryParams/index.ts"),
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
				v = r("./src/reddit/helpers/name/index.ts"),
				_ = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/models/Theme/index.ts"),
				k = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = r("./src/reddit/components/MiniCardPost/index.m.less"),
				O = r.n(w),
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
					showSubredditMeta: w = !0,
					showSubredditName: E,
					subredditOrProfile: I
				} = e, N = h && h.preview && h.preview.url || void 0, S = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = _ && P || f && Object(o.a)("/search", {
					q: f.rawQuery,
					source: S
				}) || P, F = f ? f.subredditInfo && f.subredditInfo.icon : I && I.icon.url, L = f ? f.subredditInfo && f.subredditInfo.displayText : I && (I.displayText || I.name), B = h ? h.flair.filter(C) : [], D = h ? h.score : 0, R = h ? h.numComments : 0, M = h && h.isSponsored, A = Object(k.a)(e).body, U = `linear-gradient(\n      ${Object(s.f)(A,.2)},\n      ${Object(s.f)(A,.3)},\n      ${Object(s.f)(A,.4)},\n      ${Object(s.f)(A,.6)},\n      ${Object(s.f)(A,.8)},\n      ${A}\n    )`, W = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!N
					})
				}, a.a.createElement(g.default, {
					to: T
				}, a.a.createElement("div", {
					className: Object(d.a)(j.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(k.a)(e).body, N || Object(k.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, M && a.a.createElement("div", {
					className: j.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(j.a.innerContainer, O.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(j.a.description, r)
				}, B.length > 0 && a.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: j.a.spacer
				}), w && F && L && a.a.createElement(x.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: F || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !w && h && a.a.createElement("div", {
					className: j.a.metaLine
				}, E && L && a.a.createElement("span", {
					className: j.a.meta
				}, Object(v.d)(L)), a.a.createElement("span", {
					className: j.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: j.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(p.a, {
					post: h
				}, W) : W
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
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/lodash/random.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
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
				v = r.n(x),
				_ = r("./src/lib/lessComponent.tsx");
			const y = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~PostCreation~ProfileComments~Profi~a5ca5d05"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, s, n)]
					}
				}),
				w = Object(d.b)(k),
				O = _.a.wrapped(b.a, "ThemedWidget", v.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.F)(e.media) && e.media.content)),
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
				C = Object(p.c)(class extends o.a.Component {
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
								className: n,
								placement: s,
								redditStyle: a
							} = this.props;
						return o.a.createElement(O, {
							className: n,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function I(e) {
				let {
					className: t,
					post: r,
					placementIndex: n,
					refreshKey: s,
					listingName: i,
					placement: a,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? o.a.Fragment : m.a;
				if (!c && E(r)) {
					let e = null;
					return l ? e = o.a.createElement(C, {
						className: t,
						redditStyle: d,
						placement: a
					}) : r && (e = o.a.createElement(y, {
						post: r,
						postId: r.id,
						refreshKey: s,
						listingName: i,
						placement: a,
						placementIndex: n
					})), o.a.createElement(p, null, e)
				}
				return null
			}
			t.a = w(I)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/selectors/brandSafety.ts"),
				d = r("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.u)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: r,
					pageLayer: n
				} = t;
				const s = Object(o.b)(e, {
						listingName: r,
						pageLayer: n
					}),
					i = Object(c.E)(e) || Object(d.a)(e),
					a = Object(o.e)(e);
				return {
					canShowAd: s && !i,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: a
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: r,
					viewIsUnsafe: n,
					pageLayer: i,
					...a
				} = e;
				return !r && t && i ? s.a.createElement(l.a, u({
					forceHouseAd: n
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/SidebarContainer/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("container", i.a)
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
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
				v = r("./src/reddit/components/SidebarFooter/index.m.less"),
				_ = r.n(v);
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = d.a.a("Link", _.a), w = Object(a.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: g.a
			}), O = Object(i.b)(w), E = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return s.a.createElement("div", {
					className: _.a.GreyRereddit
				}, r, !!m.c[t] && s.a.createElement("div", {
					className: _.a.LinkContainer
				}, s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: _.a.LinkContainer
				}, s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), s.a.createElement("div", {
					className: _.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = E(O(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(h.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Yc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Yc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Yc.LargeImagePreview ? e.reredditButtons : [];
					return s.a.createElement(j, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? s.a.createElement(k, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return s.a.createElement(l.a, {
					className: _.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && s.a.createElement("div", {
					className: _.a.LinkContainer
				}, s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: _.a.LinkContainer
				}, s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: _.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: _.a.LinkContainer
				}, s.a.createElement("div", {
					className: _.a.Column
				}, n("en"), n("fr"), n("it")), s.a.createElement("div", {
					className: _.a.Column
				}, n("de"), n("es"), n("pt"))), s.a.createElement("div", {
					className: _.a.Copyright
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
			var n = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
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
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/lodash/throttle.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = d.g[1] + 24,
				x = u.f + 8,
				v = x + 152 + 16,
				_ = v + g + 8,
				y = h.a.div("Container", b.a),
				k = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...n
					} = e;
					return o.a.createElement(c.a, f({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?x:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				w = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: s,
						isSticky: i,
						shouldStickToBottom: a
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(r, {
							[b.a.BottomStickyStyles]: a,
							[b.a.StickyStyles]: !a && i && !s,
							[b.a.StickyStylesFakeOverlay]: !a && !!s
						})
					}, t)
				};
			class O extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > v
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
							children: n,
							className: s,
							hideFooter: i,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !n), m = this.state.isBottomSticky;
					return o.a.createElement(y, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(w, {
						isFakeOverlay: r,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, d, !i && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(k, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const E = Object(m.u)();
			t.a = E(O)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
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
				v = r.n(x);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: r,
						inTopBar: n,
						...s
					} = e, a = [r, v.a.inTopBar, v.a.iconContainer];
					return n ? a.push(v.a.emptyEditableIconInTopBar) : a.push(v.a.editableIcon, v.a.emptyEditableIcon), i.a.createElement("span", _({}, s, {
						className: Object(d.a)(...a)
					}), n ? i.a.createElement(h.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}), e.children)
				},
				k = e => {
					const {
						iconColor: t,
						className: r,
						alt: n,
						role: s,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: v.a.iconContainer
					}, i.a.createElement("img", {
						alt: n,
						onClick: a,
						role: s,
						src: c,
						className: Object(d.a)(r, {
							[v.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				w = Object(o.c)({
					isLoading: g.b
				});
			class O extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: v.a.imageUploader,
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
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? n.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : n.fbt._("Add icon", null, {
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
						alt: n.fbt._("Subreddit icon", null, {
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
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: v.a.flexContainer
					}, t, r) : t
				}
			}
			t.a = Object(a.b)(w, (e, t) => ({
				onFileSelected: (r, n) => {
					e(Object(c.a)(t.subreddit.id, r, n))
				}
			}))(Object(l.c)(O))
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SubredditIcon/index.tsx"),
				o = r("./src/reddit/controls/OutboundLink/index.tsx"),
				d = r("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = r.n(d);
			const l = i.a.wrapped(a.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => s.a.createElement(o.b, e), "S", c.a)
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/RichTextJson/elements.tsx"),
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
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(l.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = r("./src/reddit/selectors/subredditMention.ts");
			class x extends s.a.PureComponent {
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
					return s.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(x),
				_ = Object(a.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				y = Object(i.b)(_),
				k = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: r,
						subredditName: n,
						userVariant: i,
						rtJsonElementProps: a
					} = e;
					if (!r || !t) return s.a.createElement(v, {
						subredditName: n,
						rtJsonElementProps: a
					});
					switch (i) {
						case h.Tf.SmIcon:
							return s.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: a
							});
						case h.Tf.SmIconHc:
							return s.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return s.a.createElement(v, {
								subredditName: n,
								rtJsonElementProps: a
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
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

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = (e, t, r) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: r
				}),
				y = e => {
					let {
						children: t,
						isActive: r,
						isTopBannerVariant: n,
						...i
					} = e;
					return s.a.createElement("div", v({
						className: _(x.a.subNavTitle, r, n)
					}, i), s.a.createElement("span", null, t), s.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				k = e => {
					let {
						className: t,
						href: r,
						isActive: n,
						to: i,
						isTopBannerVariant: a,
						...o
					} = e;
					const d = _(x.a.navLink, n, a);
					return i ? s.a.createElement(m.a, v({
						className: d,
						to: i
					}, o)) : r ? s.a.createElement(b.b, v({
						className: d,
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: r
					}, o)) : s.a.createElement("a", v({
						className: d
					}, o))
				},
				w = e => {
					let {
						className: t,
						isActive: r,
						...n
					} = e;
					return s.a.createElement(m.a, v({
						className: Object(p.a)(_(x.a.navLink, r), t)
					}, n))
				},
				O = e => {
					let {
						className: t,
						href: r,
						isActive: n,
						...i
					} = e;
					return r ? s.a.createElement(b.b, v({
						className: _(x.a.subNavLink, n),
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: r
					}, i)) : s.a.createElement("a", v({
						className: _(x.a.subNavLink, n)
					}, i))
				},
				E = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement("div", v({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, r))
				},
				j = e => {
					let {
						className: t,
						isOpen: r,
						...n
					} = e;
					return s.a.createElement("div", v({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: r
						})
					}, n))
				};
			class C extends s.a.Component {
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
					return s.a.createElement(E, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var I = C;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var S = e => e.menuItem.url ? s.a.createElement(k, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(I, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(O, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				P = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/actions/subreddit.ts"),
				F = r("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), B = Object(a.c)({
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
					return Object(P.X)(e, {
						subredditId: r
					})
				}
			});
			var D = Object(i.b)(B, (e, t) => ({
					onActivate: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: r,
						onActivate: n
					} = e;
					const i = Object(F.a)();
					return t ? s.a.createElement(w, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: r,
						onClick: e => {
							Object(d.H)(i) && !Object(d.P)(i) && e.preventDefault(), n()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				R = r("./src/reddit/actions/economics/predictions/index.ts"),
				M = r("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				A = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				U = r("./src/reddit/helpers/trackers/predictions.ts"),
				W = r("./src/reddit/hooks/useTracking.ts"),
				H = r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const r = Object(i.d)(),
					a = Object(F.a)(),
					o = Object(W.a)(),
					d = Object(A.Q)(a),
					[c, l] = Object(n.useState)(!1),
					u = Object(i.e)(e => Object(P.X)(e, {
						subredditId: t
					})),
					m = Object(i.e)(e => Object(P.R)(e, {
						subredditId: t
					})),
					p = Object(i.e)(e => Object(H.d)(e, {
						subredditId: t
					})),
					b = Object(i.e)(e => Object(H.e)(e, {
						subredditId: t
					}));
				Object(M.a)(t);
				return Object(n.useEffect)(() => {
					!m || c || p || d || (r(Object(R.m)(u.name)), l(!0))
				}, [m, c, p, d, r, u.name]), m && p ? s.a.createElement(w, {
					className: x.a.predictionsFilter,
					isActive: d,
					onClick: () => {
						r(Object(T.p)({
							subredditId: t,
							forceState: !1
						})), o(Object(U.i)())
					},
					to: `${u.url}predictions/`
				}, z._("Predictions", null, {
					hk: "Cv5GC"
				}), b && s.a.createElement("span", {
					className: x.a.liveIcon
				}, z._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var q = r("./src/lib/constants/index.ts");
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const K = Object(d.u)(),
				J = [q.Sb.SUBREDDIT, q.Sb.COMMENTS, q.Sb.COLLECTION_COMMENTS],
				Y = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.P)(t.pageLayer)
				});
			var Z = K(Object(i.b)(Y, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: n,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = n && !r && !i;
					return s.a.createElement(k, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							r && (e.preventDefault(), o())
						}
					}, V._("Posts", null, {
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
				ne = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const se = Object(X.a)(e => {
				let {
					className: t,
					children: r,
					isTopBannerVariant: n,
					...i
				} = e;
				const a = Object(ne.a)(i);
				return s.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "relative" : "static",
						...a.navBar.useOverlay && !n ? {
							marginTop: -26
						} : {},
						background: n ? "inherit" : Object(re.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, r)
			});
			var ie = e => s.a.createElement(se, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				ae = r("./src/reddit/constants/wiki.ts"),
				oe = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === q.Sb.SUBREDDIT_WIKI, a = `wiki/${ae.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(k, {
					isActive: i,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(oe.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", D),
				ue = Object(d.u)(),
				me = Object(a.c)({
					layout: d.S,
					widget: l.f
				}),
				pe = Object(i.b)(me);
			t.a = ue(pe(Object(o.c)(e => s.a.createElement(ie, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(Z, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(le, {
				subredditId: e.subredditId
			}), s.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => s.a.createElement(S, {
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
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
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
					const t = Object(a.e)(o.e),
						r = Object(a.e)(o.a);
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/isEqual.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
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
				v = e => !Object(g.a)(e) || Object(x.e)(e) || Object(x.f)(e) || Object(x.g)(e),
				_ = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/ModProgressModule/async.tsx"),
				k = r("./src/reddit/components/PowerupsSidebar/index.tsx"),
				w = r("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				O = r("./src/reddit/components/SidebarContainer/index.tsx"),
				E = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = r("./src/lib/makeListingKey/index.ts"),
				I = r("./src/reddit/actions/subreddit.ts"),
				N = r("./src/lib/classNames/index.ts"),
				S = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				P = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/reddit/helpers/name/index.ts"),
				F = r("./src/reddit/helpers/overlay/index.ts"),
				L = r("./src/reddit/selectors/experiments/topPosts.ts"),
				B = r("./src/reddit/selectors/posts.ts"),
				D = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const R = .99;
			class M extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: r
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= R && t(r)
					}
				}
				render() {
					return o.a.createElement(D.a, {
						threshold: R,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var A = M,
				U = r("./src/lib/isUrl/index.ts"),
				W = r("./src/lib/prettyPrintNumber/index.ts"),
				H = r("./src/reddit/components/FlairWrapper/index.tsx"),
				z = r("./src/reddit/components/Thumbnail/index.tsx"),
				G = r("./src/reddit/models/Flair/index.ts"),
				q = r("./src/reddit/models/Subreddit/index.ts"),
				V = r("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				K = r.n(V);
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Y = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, Z = Object(c.c)({
				post: B.G,
				subredditOrProfile: B.V
			});
			class X extends o.a.PureComponent {
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
						showSubredditName: n,
						subredditOrProfile: s
					} = this.props, i = {
						post: t
					}, a = Object(U.a)(Object(z.b)(i)), d = t.flair.filter(Y);
					return o.a.createElement("div", {
						className: Object(N.a)(K.a.container, e, {
							[K.a.redditStyle]: r
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: K.a.mainLine
					}, a && o.a.createElement("div", {
						className: K.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(z.a, i)), o.a.createElement("div", {
						className: Object(N.a)(K.a.title, !a && K.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(H.a, {
						className: K.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), o.a.createElement("div", {
						className: K.a.metaLine
					}, n && !!s && o.a.createElement("span", {
						className: K.a.meta
					}, Object(q.h)(s) ? Object(T.e)(s.displayText || s.name) : Object(T.d)(s.displayText || s.name)), o.a.createElement("span", {
						className: K.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: K.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = 10, ne = 2, se = Object(c.a)(B.N, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
				posts: (e, t) => se(e, {
					...t
				})
			});
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: r
						} = this.props, [n] = r;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || re, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((r, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: r.chunkIdx < e - 1 ? r.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: r,
							onPostVisible: n,
							redditStyle: s,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(A, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(Q, {
							className: Object(N.a)(ee.a.smallPost, i),
							containerOnClick: r,
							postId: e.id,
							redditStyle: s,
							showSubredditName: Object(g.a)(Object(T.i)(t)),
							thumbnailOnClick: r
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: r,
						moreButtonText: n,
						onPostVisible: s,
						posts: i,
						redditStyle: a,
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
						v = b ? h.slice(0, ne) : x.slice(0, ne),
						_ = b ? h.slice(ne) : x.slice(ne);
					return o.a.createElement("div", {
						className: Object(N.a)(ee.a.container, t, {
							[ee.a.redditStyle]: a
						})
					}, !b && o.a.createElement(A, {
						onPostVisible: s,
						postId: f.id
					}, o.a.createElement(S.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(T.i)(r)),
						trendingPost: f
					})), v.map(this.renderSmallPost), e, _.map(this.renderSmallPost), d && o.a.createElement(P.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, n || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(d.b)(ie, e => ({
					openPost: t => e(Object(F.a)(t.permalink))
				}))(ae),
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
						return Object(B.N)(e, {
							listingKey: r
						})
					},
					subreddit: pe.B
				});
			class ve extends o.a.Component {
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
						loadMorePosts: s,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > fe;
					return o.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(oe, {
						listingKey: r,
						listingName: c,
						onShowMoreClick: s,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var _e = Object(d.b)(xe, (e, t) => {
					let {
						subredditName: r
					} = t;
					return {
						loadMorePosts: () => e(Object(I.r)({
							sort: l.bb.TOP,
							subredditName: r,
							t: l.oc.WEEK
						}))
					}
				})(Object(de.c)(ve)),
				ye = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ke = r("./src/reddit/constants/tracking.ts"),
				we = r("./src/reddit/selectors/seo/linksModule.ts"),
				Oe = r("./src/reddit/selectors/telemetry.ts"),
				Ee = r("./src/telemetry/models/Subreddit.ts");
			const je = e => t => ({
					...Oe.o(t),
					action: ke.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = e => t => r => ({
					...Oe.o(r),
					action: ke.c.CLICK,
					noun: Object(Ee.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ie = Object(c.c)({
					communities: we.c
				});
			var Ne = Object(d.b)(Ie)(e => {
					const t = Object(de.b)();
					return e.communities && e.communities.length ? o.a.createElement(E.a, null, o.a.createElement(ye.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: je,
						getSubscribeEventFactoryHandler: Ce,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Se = r("./src/reddit/components/Widgets/Widget/index.tsx"),
				Pe = r("./src/reddit/constants/experiments.ts"),
				Te = r("./src/reddit/featureFlags/index.ts"),
				Fe = r("./src/reddit/helpers/createBannerProperties/index.ts"),
				Le = r("./src/reddit/models/Widgets/index.ts"),
				Be = r("./src/reddit/selectors/communityFlairs.ts"),
				De = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Re = r("./src/reddit/selectors/listings.ts"),
				Me = r("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ae = r.n(Me);
			const Ue = 250,
				We = 270,
				He = u.a.wrapped(O.a, "SidebarContainer", Ae.a),
				ze = Object(c.c)({
					apiError: Re.c,
					apiPending: Re.d,
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
					isInNewModuleNCPV3Experiment: e => Object(De.a)(e) === Pe.Se.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(pe.Q)(e, {
							subredditId: r
						}) && !Object(pe.R)(e, {
							subredditId: r
						})
					},
					widgets: pe.w
				}),
				Ge = Object(d.b)(ze);
			class qe extends a.Component {
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
							shortName: n.fbt._("Related Communities", null, {
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
							shortName: n.fbt._("Filter by flair", null, {
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
						showGovernance: n,
						showLeaderboard: s,
						showPredictionsLeaderboard: i,
						subredditId: a,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const g = Object(L.a)(c),
						x = Object(L.b)(c),
						O = Object(L.c)(c),
						C = g || x;
					let I, N;
					!!this.getPostFlairWidget() ? I = this.props.widgets : (I = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const S = this.makeRelatedCommunitiesWidget(g, x),
						P = !g,
						T = x,
						F = o.a.createElement(w.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Fe.a.FIRST,
							sizes: l.j
						});
					return o.a.createElement(He, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, r && o.a.createElement(y.a, {
						subredditId: a,
						subredditName: d
					}), v(t) && o.a.createElement(f.a, {
						listingName: t
					}), o.a.createElement(p.a, {
						cardClassName: Ae.a.card,
						subredditId: a
					}), o.a.createElement(k.a, {
						subredditId: a
					}), i && o.a.createElement(m.a, {
						subredditId: a
					}), C && o.a.createElement(E.a, null, o.a.createElement(_e, {
						subredditName: d,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: Ae.a.inFeedAd
					}, F))), C && S && o.a.createElement(E.a, null, o.a.createElement(Se.a, {
						subredditName: d,
						truncateThreshold: We,
						widget: S
					})), T && I.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(E.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(Se.a, {
							subredditName: d,
							truncateThreshold: Ue,
							widget: e
						}))
					}), n && o.a.createElement(b.a, {
						className: Ae.a.card,
						subredditId: a
					}), N && o.a.createElement(E.a, null, o.a.createElement(Se.a, {
						subredditName: d,
						widget: N
					})), s && o.a.createElement(h.a, {
						className: Ae.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(_.g, {
						subredditId: a
					}), !C && F, o.a.createElement(Ne, {
						subredditId: a
					}), P && !T && I.map((e, t) => {
						const r = "community-list" === e.kind;
						return o.a.createElement(E.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(Se.a, {
							subredditName: d,
							truncateThreshold: O && r ? We : O ? Ue : void 0,
							widget: e
						}))
					}), o.a.createElement(j.a, {
						adComponent: o.a.createElement(w.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Fe.a.BOTTOM,
							sizes: l.q
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(o);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
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
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				m = r("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
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
				v = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = r.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => i.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? i.a.createElement(g.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(I, E({
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
					className: O.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				C = Object(d.c)({
					hideNSFWPref: y.F,
					nightmode: y.db
				}),
				I = Object(a.b)(C)(e => i.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(v.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: h.s
				}, i.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, i.a.createElement(o.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(k.b)(e.name, e.type),
					to: Object(k.a)(e.name, e.type)
				}, Object(k.b)(e.name, e.type)), i.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: O.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: O.a.nsfwFlair,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(g.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: O.a.communityCta,
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
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/posts.ts"),
				s = r("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(s.e)(e) : Object(s.d)(e)
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
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
				v = r("./src/reddit/helpers/trackers/postFlair.ts"),
				_ = r("./src/reddit/models/Widgets/index.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				k = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				w = r.n(k);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				j = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.e],
					url: e => Object(h.db)(e)
				}),
				C = Object(o.c)({
					subredditId: (e, t) => Object(y.H)(e, t.subredditName)
				}),
				I = Object(a.b)(C),
				N = l.a.div("WidgetContent", w.a),
				S = e => {
					let {
						display: t,
						isFlairFilter: r,
						onMouseDown: n,
						onClick: s,
						...a
					} = e;
					return i.a.createElement("li", {
						className: Object(d.a)(w.a.StyledFlair, t === _.g.Cloud && w.a.cloudDisplay, {
							[w.a.flairFilter]: r,
							[w.a["m-selected"]]: a.isSelected
						}),
						onClick: () => null == s ? void 0 : s(Object(x.g)(a.flair)),
						onMouseDown: n
					}, i.a.createElement(u.b, O({}, a, {
						className: w.a.Flair,
						isFlairFilter: r,
						forceSmallEmojis: !0
					})))
				};
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(f.r, {
						className: w.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
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
					}, e.map(e => i.a.createElement(S, {
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
					} = this.state, r = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
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
					return i.a.createElement("ul", null, i.a.createElement(S, {
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
					} = this.state, n = t.order, s = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(s) || void 0, o = t.order.length > n.length || r && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = j(I(Object(m.c)(P)))
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
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
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
				v = d.a.div("RuleTitle", f.a),
				_ = d.a.div("RuleDescription", f.a),
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
						shouldShowFullDisplay: n
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!s;
					return i.a.createElement(g, {
						className: Object(o.a)({
							[f.a.pointerCursor]: a,
							[f.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !s ? void 0 : r
					}, i.a.createElement(p.a, null, i.a.createElement(x, {
						className: Object(o.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), i.a.createElement(v, null, `${e.rule.shortName}`), i.a.createElement("div", null, !n(e) && s && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(_, {
						className: Object(o.a)({
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
			const O = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
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
			t.b = e => i.a.createElement(O, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
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
				v = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = _(e);
					return Object(x.f)(t)
				},
				w = e => {
					const t = y(e);
					return Object(x.f)(t)
				};
			var O = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = r.n(O);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.u)(), I = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: r
						}),
						s = Object(g.db)(e);
					return n || s
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = y(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: i,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = r ? E.a.widgetContentOnly : E.a.widgetContent, f = !n && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(o.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: n,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: g
					}, u && s.a.createElement("div", {
						className: Object(o.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: a,
						style: x,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(o.a)(E.a.widgetTitle, p)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), s.a.createElement("div", {
						className: Object(o.a)(h, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = C(I(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Re
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
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
				v = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/telemetry/models/Outbound.ts"),
				y = r("./src/reddit/components/Widgets/Button/index.m.less"),
				k = r.n(y);
			const w = (e, t, r) => {
					let n = {},
						s = {};
					n = e.kind === g.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: n,
							fillColor: s,
							textColor: i
						} = e;
						return t && (n = i = r, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${i||n}`
						}
					})(e, t, r);
					const i = e.hoverState || e;
					if (i.kind === g.k.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = i;
						t && (e = a = r, n = "transparent"), s = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...n,
						...s
					}
				},
				O = e => e.kind === g.k.Image ? k.a.imageButton : k.a.textButton,
				E = e => {
					const t = Object(b.h)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				j = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, n = Object(f.a)(e).button;
					return s.a.createElement(c.t, {
						className: O(t),
						style: w(t, r, n),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === g.k.Text && s.a.createElement("span", {
						className: t.hoverState ? k.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && s.a.createElement("span", {
						className: k.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				C = e => s.a.createElement(l.b, {
					href: E(e.button),
					sourceElement: _.SourceElement.SidebarWidget
				}, s.a.createElement(j, e)),
				I = m.a.wrapped(o.a, "RawHTMLDisplay", k.a);
			var N = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: v.db
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(I, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== h.c)).map(t => s.a.createElement(C, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = r("./node_modules/fbt/lib/FbtPublic.js"),
				P = r("./src/reddit/components/HumanDate/index.tsx"),
				T = r("./src/reddit/controls/TextButton/index.tsx"),
				F = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = r.n(F);
			const B = 100,
				D = {
					isExpanded: !1
				},
				R = m.a.wrapped(o.a, "RawHTMLDisplay", L.a),
				M = m.a.div("EventContainer", L.a),
				A = m.a.div("EventTitle", L.a),
				U = m.a.div("EventDate", L.a),
				W = m.a.div("EventLocation", L.a),
				H = m.a.div("EventDescription", L.a),
				z = m.a.wrapped(T.a, "ToggleDescription", L.a);
			class G extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = D
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > B ? s.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, B), s.a.createElement(z, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(H, null, e.text)
				}
			}
			var q = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => s.a.createElement(M, {
					key: `${r}-${t.title}`
				}, s.a.createElement(A, null, t.titleHtml ? s.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(U, null, s.a.createElement(P.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${r}:0${n}` : `${r}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(W, null, t.locationHtml ? s.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(G, {
					text: t.description
				})))),
				V = r("./src/reddit/components/TrackingHelper/index.tsx"),
				K = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(V.c)(e => s.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Z = Object(i.b)(Y),
				X = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class Q extends s.a.Component {
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
					return s.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, s.a.createElement("iframe", {
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
				ne = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = r.n(ne);
			var ie = m.a.img("StyledImage", se.a);
			class ae extends s.a.Component {
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
						n = s.a.createElement(re, null, s.a.createElement(ie, {
							alt: S.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? s.a.createElement(l.b, {
						href: r.linkUrl
					}, n) : n
				}
			}
			var oe = ae,
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
				ve = m.a.div("ModeratorListItem", ge.a),
				_e = m.a.div("Username", ge.a),
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
				we = e => s.a.createElement(_e, null, `u/${e}`),
				Oe = m.a.wrapped(me.default, "InternalLink", ge.a),
				Ee = m.a.div("LinkContainer", ge.a),
				je = Object(a.c)({
					userIsBanned: he.hb,
					userIsLoggedIn: v.Q
				});
			var Ce = Object(i.b)(je)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: n,
						userIsLoggedIn: i
					} = e;
					return s.a.createElement(d.a, {
						styles: r.styles,
						title: S.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || n) && s.a.createElement(c.t, {
						kind: c.b.InternalLink,
						priority: c.c.Secondary,
						className: ge.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${de.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(pe.a, {
						className: ge.a.MessageModsButtonIcon
					}), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !n ? s.a.createElement(s.a.Fragment, null, r.mods.map(e => s.a.createElement(ve, {
						key: e.name
					}, (e => s.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, we(e.name)))(e), s.a.createElement(ye, {
						flair: ke(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Ee, null, s.a.createElement(Oe, {
						to: `/r/${t}/about/moderators/`
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !i ? s.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(xe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(xe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ie = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Se = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = r.n(Se);
			const Te = m.a.div("WidgetContent", Pe.a),
				Fe = m.a.wrapped(o.a, "RawHTMLDisplay", Pe.a);
			var Le = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Te, null, s.a.createElement(Fe, {
					html: e.widget.textHtml || ""
				}))),
				Be = r("./src/reddit/components/Widgets/Base/index.tsx");
			var De = e => s.a.createElement(Be.b, null, "This widget hasn't been implemented yet!");

			function Re(e) {
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
							return q;
						case "image":
							return oe;
						case "custom":
							return $;
						case "post-flair":
							return Ie.a;
						default:
							return De
					}
				}(e.widget);
				return s.a.createElement(t, {
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
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/post.ts"),
				a = r("./src/reddit/actions/postFlair.ts"),
				o = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/selectors/activeModalId.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				m = r("./src/reddit/selectors/postFlair.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(s.c)({
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
							previewFlair: n,
							selectedTemplateId: s
						} = t;
						return e(Object(a.h)({
							post: r,
							previewFlair: n,
							selectedTemplateId: s
						}))
					},
					handleVote: t => {
						const n = t === d.a.upvoted ? Object(i.kb)(r) : Object(i.w)(r);
						e(n)
					},
					onIgnoreReports: () => e(Object(i.gb)(r)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, r) => ({
				...r,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: n,
						selectedTemplateId: s
					} = e;
					return t.dispatchFlairChanged({
						post: r.post,
						previewFlair: n,
						selectedTemplateId: s
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/index.tsx"),
				o = r("./src/reddit/controls/Checkbox/index.m.less"),
				d = r.n(o);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(i.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class i extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, i = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = r.n(a);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(o.a.loadingIcon, r, {
						[o.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
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
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/SubredditWiki.json");
			const i = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/featureFlags/index.ts");

			function d(e, t, r) {
				const n = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(i.b)(n)(e => {
					const {
						featureEnabled: n,
						...i
					} = e, a = i;
					return n ? s.a.createElement(t, a) : void 0 !== r ? s.a.createElement(r, a) : null
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./src/lib/isFakeSubreddit/index.ts"), r("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var n;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
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
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = r.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/telemetry/models/Outbound.ts");
			const o = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: r
				} = e;
				if (t && (Object(s.b)(t) || Object(i.b)(t))) return Object(s.b)(t) ? a.SourceElement.Comment : Object(n.x)(r) ? a.SourceElement.PostDetail : Object(n.H)(r) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(n.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(n.o)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(n.o)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var o;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(o || (o = {}));
			const d = e => t => {
				const r = Object(n.o)(t);
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
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "q", (function() {
				return d
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "t", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "f", (function() {
				return E
			}));
			var n = r("./src/reddit/models/Prediction/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				a = "predictions",
				o = e => ({
					...Object(s.o)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				d = e => ({
					...Object(s.o)(e),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				c = e => ({
					...Object(s.o)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = e => {
					let {
						pollId: t,
						selectedNumberCoins: r,
						totalStakeAmount: n
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(s.J)(e, t, !1, void 0, r),
						goldPurchase: {
							numberCoins: n
						}
					})
				},
				u = e => {
					let {
						pollId: t,
						selectedNumberTokens: r
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(s.J)(e, t, !1, void 0, void 0, r)
					})
				},
				m = e => {
					let {
						pollId: t,
						currency: r,
						amount: a
					} = e;
					return e => {
						const o = r === n.a.Coins ? a : void 0,
							d = r === n.a.Tokens ? a : void 0;
						return {
							...Object(s.o)(e),
							source: i,
							action: "close",
							noun: "prediction_modal",
							poll: Object(s.J)(e, t, !1, o, d)
						}
					}
				},
				p = e => ({
					...Object(s.o)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				b = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: a,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				h = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: a,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				f = () => e => ({
					...Object(s.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				g = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				x = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				v = e => t => ({
					...Object(s.o)(t),
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
					subreddit: Object(s.jb)(t)
				}),
				_ = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				y = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				k = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "start_tournament"
				}),
				w = () => e => ({
					...Object(s.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				O = () => e => ({
					...Object(s.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.jb)(e)
				}),
				E = () => e => ({
					...Object(s.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.jb)(e)
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
				return v
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return k
			}));
			var n, s, i = r("./src/reddit/constants/tracking.ts"),
				a = r("./src/reddit/helpers/isComment.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				d = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.o(e),
					source: s.LINK,
					action: i.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: s,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: r,
						subredditName: n
					} = t;
					if (!r || !Object(o.b)(r) && !Object(a.b)(r)) return {
						outbound: void 0
					};
					const s = Object(o.b)(r) ? "postId" : "commentId",
						i = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[s]: r.id
						},
						c = Object(l.B)(e, {
							subredditName: n
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
					if (!r || !Object(o.b)(r) && !Object(a.b)(r)) return {};
					const n = Object(o.b)(r) ? r.belongsTo.id : r.subredditId;
					return {
						post: u.K(e, r.id),
						subreddit: u.kb(e, n),
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
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				x = (e, t) => r => ({
					...p(r),
					source: s.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: n.ITEM_POST,
					post: u.K(r, t),
					subreddit: u.lb(r, e),
					screen: u.bb(r)
				}),
				v = (e, t) => r => ({
					...p(r),
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: u.K(r, t),
					subreddit: u.lb(r, e),
					screen: u.bb(r)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				k = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/models/Event.ts");
			const i = () => e => ({
					source: s.f.HomeFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: s.f.CommunityNotificationsSettings,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				o = () => e => ({
					source: s.f.PopularFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: s.f.SubredditIdBanner,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var n, s, i = r("./src/reddit/constants/tracking.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const o = (e, t) => r => ({
					source: s.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.xb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				d = (e, t) => r => ({
					source: s.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.K(r, e),
					subreddit: a.jb(r),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.o(r)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/sortBy.js"),
				s = r.n(n),
				i = r("./src/reddit/constants/wiki.ts");
			const a = e => {
				return s()(e, e => `${e.path}/`.startsWith(`${i.i}/`) ? `\0${e.path}` : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					r = [];
				return a(e).forEach(e => {
					const n = {
							...e,
							children: []
						},
						s = n.parent ? t.get(n.parent) : null;
					s ? s.children.push(n) : r.push(n), t.set(n.path, n)
				}), r
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: r,
					subredditName: n,
					wikiPageName: s
				} = e;
				return `[${n}]--[${s}]--[rev1:${r}]--[rev2:${t}]`.toLowerCase()
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
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/wiki.ts");
			const s = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${n.c}}$`),
				i = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!i.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const r = e.toLowerCase(),
						i = r.split("/")[0],
						o = n.b.has(i),
						d = n.f.has(i) && r !== n.h && r !== n.k;
					if (o || d) return a.RestrictedPageName;
					if (!s.test(r)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === r)) return a.PageAlreadyExists
					}
					return r.length > n.d ? a.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				s = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(o);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/pages/shared.ts"),
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
					} = e, n = Object(m.a)(r, u.bb.HOT, {});
					return s.a.createElement(p.a, {
						listingKey: n,
						listingName: r.toLowerCase(),
						subredditId: t.id,
						subredditName: r
					})
				},
				h = r("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				f = r("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				g = r("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = r("./src/reddit/constants/parameters.ts"),
				v = r("./src/reddit/constants/wiki.ts"),
				_ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = r("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				w = r("./src/reddit/components/JumpToContent/index.tsx"),
				O = r("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				E = r("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = r("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				C = r.n(j);

			function I(e) {
				const {
					wikiPageName: t,
					subredditName: r
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(w.a, null), n.createElement(E.a, {
					isModHub: !1,
					className: C.a.topBar,
					wikiPageName: t,
					subredditName: r
				}), n.createElement(O.a, {
					showRevisionInfo: !0,
					subredditName: r,
					wikiPageName: t
				}))
			}
			var N = r("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				S = r.n(N);
			class P extends s.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: r,
						queryParams: n
					} = e, {
						wikiSubRoute: i,
						wikiPageName: a
					} = r, o = n[x.G], d = n[x.H], c = x.I in n;
					switch (i) {
						case v.m.Create:
						case v.m.Edit:
							return s.a.createElement(f.a, {
								contentClassName: S.a.wikiPageEditorContent,
								isCreation: i === v.m.Create,
								subredditName: t,
								topBarClassName: S.a.communityWikiTopBar,
								wikiPageName: a
							});
						case v.m.Revisions:
							return s.a.createElement(k.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? s.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? s.a.createElement(g.a, {
								revisionId: o ? Object(y.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? s.a.createElement(I, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(_.u)()(P),
				F = r("./src/reddit/constants/componentSizes.ts"),
				L = r("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				B = r("./src/reddit/layout/page/Listing/index.tsx"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				R = r("./src/reddit/selectors/user.ts");
			const M = Object(_.u)(),
				A = Object(i.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: r
						} = t;
						return Object(R.f)(e, r.params.subredditName)
					},
					layout: _.S,
					over18Pref: R.kb,
					subreddit: (e, t) => {
						let {
							match: r
						} = t;
						return Object(D.B)(e, {
							subredditName: r.params.subredditName || v.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: r
						} = t;
						return r.params.subredditName || v.e
					},
					wikiPageName: (e, t) => {
						let {
							match: r
						} = t;
						return r.params.wikiPageName || v.i
					}
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class U extends s.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: r,
						subredditName: n
					} = this.props, i = !!r && r.isNSFW && !R.kb, a = Object(L.a)(t, i, n);
					if (a) return s.a.createElement(c.default, a);
					const o = `/r/${n}/`;
					return s.a.createElement(B.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: F.h,
						navBar: s.a.createElement(s.a.Fragment, null, s.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: r ? r.name : n,
							maxWidth: F.h,
							subredditOrProfile: r,
							url: o
						}), s.a.createElement(d.a, {
							subreddit: r || void 0,
							subredditId: r ? r.id : void 0,
							subredditName: n,
							subredditUrl: o
						})),
						content: s.a.createElement(T, {
							subredditName: n
						}),
						sidebar: r && s.a.createElement(b, {
							subreddit: r,
							subredditName: n
						})
					})
				}
			}
			t.default = M(A(U))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/constants/postLayout.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(i.S)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.yb
				}) === n.Rc.Treatment
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/meta.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(i.f)(e),
					experimentName: n.sc
				}), a.a),
				l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(i.f)(e),
					experimentName: n.rc
				}), a.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["t5_395yw", "t5_2zkfk", "t5_3o3fz", "t5_2rzot", "t5_2w2lq", "t5_3ii04", "t5_3hn0l", "t5_2qh8h", "t5_3g6wm", "t5_3ntes", "t5_35aia", "t5_2r8ok", "t5_iygqf", "t5_2qutz", "t5_2qkhb", "t5_2r78m", "t5_2qkob", "t5_hwfuo", "t5_2tfgu", "t5_2u8vt", "t5_vnwft", "t5_3izzds", "t5_gofqg"],
				o = (e, t) => c(e) && d(t),
				d = e => a.includes(e),
				c = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.le
				}), e => e === s.Od)
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
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
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/subreddit.ts");
			const o = e => s.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: n.Nf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.Tf.SmIcon || t === n.Tf.SmIconHc
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
					const n = Object(a.bb)(e, {
						subredditName: r
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
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
				return v
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return k
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				a = (e, t) => {
					var r;
					const {
						subredditName: n
					} = t;
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.directory[n.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.subreddits.api.wiki.pending[r.toLowerCase()]
				},
				d = (e, t) => {
					var r;
					const n = Object(s.a)(t);
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.pages[n]
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
					const r = Object(s.a)(t);
					return e.pages.subredditWiki.pageSettings[r]
				},
				h = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[r.toLowerCase()]
				},
				f = Object(n.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const n = r.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						a = s.userOrder[n],
						o = s.models[n];
					return a ? a.map(e => o[e]) : i
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
				v = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[r.toLowerCase()]
				},
				_ = Object(n.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const n = r.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						a = s.userOrder[n],
						o = s.models[n];
					return a ? a.map(e => o[e]) : i
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
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
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
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		},
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.64fd1764005e9c02bbd5.js.map