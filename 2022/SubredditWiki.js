// https://www.redditstatic.com/desktop2x/SubredditWiki.d9764b80de78bf0d00e8.js
// Retrieved at 11/3/2022, 8:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
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
					var r, i = s(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						g = !i && !l && /macintosh/i.test(t),
						f = !a && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = s(/version\/(\d+(\.\d+)?)/i),
						x = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !x && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: _ || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: _ || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (r.msedge = e, r.version = v) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || _
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
						version: _ || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
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
						version: s(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && _ && (r.version = _)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : g ? (r.mac = e, r.osname = "macOS") : k ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : f && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var w = "";
					r.windows ? w = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? w = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? w = (w = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? w = (w = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? w = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? w = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? w = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? w = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (w = s(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (r.osversion = w);
					var O = !r.windows && w.split(".")[0];
					return x || d || "ipad" == i || a && (3 == O || O >= 4 && !y) || r.silk ? r.tablet = e : (y || "iphone" == i || "ipod" == i || a || o || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function i(e) {
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
					var o = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([o, e[d]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = i, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === r(e)
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
						validate: function(e, t, s) {
							var n = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(n) ? n.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var n = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var n = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(n) ? n.match(s.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
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
					var s = e.__schemas__[t];
					if (null !== s) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === r(s)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(s.validate) ? i(s.validate) ? n.validate = s.validate : l(t, s) : n.validate = function(e) {
							return function(t, s) {
								var n = t.slice(s);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(s.validate), void(i(s.normalize) ? n.normalize = s.normalize : s.normalize ? l(t, s) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(s) ? l(t, s): d.push(t)
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
				var s = e.__index__,
					n = e.__last_index__,
					r = e.__text_cache__.slice(s, n);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r
			}

			function p(e, t) {
				var s = new m(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function b(e, t) {
				if (!(this instanceof b)) return new b(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || o.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, o, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, r, i, a, o, d;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (t = o.exec(e));)
						if (r = this.testSchemaAt(e, t[2], o.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = s.index + s[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a)), this.__index__ >= 0
			}, b.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, b.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, b.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) s.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return s.length ? s : null
			}, b.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, s) {
					return e !== s[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, b.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, b.prototype.onCompile = function() {}, e.exports = b
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, s) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = s("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = s("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = s("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = s("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, r, i) {
				for (var a = -1, o = n(s((t - e) / (r || 1)), 0), d = Array(o); o--;) d[i ? o : ++a] = e, e += r;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, i) {
					s = n ? (n = !1, e) : t(s, e, r, i)
				})), s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				i = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, a) {
					return a && "number" != typeof a && r(t, s, a) && (s = a = void 0), t = i(t), void 0 === s ? (s = t, t = 0) : s = i(s), a = void 0 === a ? t < s ? 1 : -1 : i(a), n(t, s, a, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), n(r(e), t, s)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(r(e, t), 1)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				i = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				o = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return o(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				i = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				o = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = o(e) ? n : a,
					c = arguments.length < 3;
				return d(e, i(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				o = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > a) return [];
				var s = o,
					c = d(e, o);
				t = r(t), e -= o;
				for (var l = n(c, t); ++s < e;) t(s);
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
		"./src/chat/controls/Svg/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/chat/controls/Svg/index.m.less"),
				d = s.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: a
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: s,
						[d.a.active]: n,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const i = Object(r.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return Ve
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return Je
			})), s.d(t, "handleWikiRedirects", (function() {
				return Ye
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Qe
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return $e
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/isEmpty.js"),
				i = s.n(r),
				a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/helpers/path/index.ts");
			var p = s("./src/reddit/actions/ads/index.ts"),
				b = s("./src/reddit/actions/pages/subreddit.ts"),
				h = s("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				v = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				_ = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = s("./src/redditGQL/operations/WikiComparisonDiff.json");
			var k = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				w = s("./src/reddit/selectors/subredditWiki.ts");
			const O = Object(d.a)("WIKI_DIFF_PENDING"),
				E = Object(d.a)("WIKI_DIFF_LOADED"),
				C = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, s, n) => {
					const r = s(),
						i = Object(k.a)(e),
						a = Object(w.i)(r, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(O(d));
					const c = await ((e, t) => Object(_.a)(e, {
						...y,
						variables: {
							...t,
							comparisonRevisionId: Object(x.b)(t.comparisonRevisionId),
							revisionId: Object(x.b)(t.revisionId)
						}
					}))(n.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							s = t && t.page && t.page.revisionComparisonDiffHtml;
						s ? u = s : l = {
							type: o.L.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.L.UNKNOWN_ERROR
					};
					return t(l ? C({
						...d,
						error: l
					}) : E({
						...d,
						htmlDiff: u
					})), !l
				};
			var S = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				N = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/constants/wiki.ts"),
				P = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				D = s("./src/reddit/helpers/brandSafety/index.ts"),
				F = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				R = s("./src/reddit/models/Toast/index.ts"),
				L = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				M = s("./node_modules/redux/es/redux.js");
			const z = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: s,
							htmlDiff: n
						} = t.payload;
						return {
							...e,
							[s]: {
								htmlDiff: n
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								pending: !1,
								error: n
							}
						}
					}
					default:
						return e
				}
			};
			const H = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b:
							const s = t.payload,
								{
									subredditWiki: n,
									options: r
								} = s,
								i = n && n.directory;
							if (!i) return e;
							const {
								subredditName: a
							} = r;
							return {
								...e, [a.toLowerCase()]: i
							};
						default:
							return e
					}
				},
				G = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const V = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: s,
								pageKey: n
							} = t.payload, {
								page: r
							} = s;
							return n && r ? {
								...e,
								[n]: r
							} : e
						}
						case G.a: {
							const {
								pageKey: s,
								page: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Z = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const J = {};
			var X = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z.c: {
							const {
								settings: s,
								pageKey: n
							} = t.payload;
							return s ? {
								...e,
								[n]: s
							} : e
						}
						case Z.d: {
							const {
								isVisible: s,
								editPermissions: n,
								pageKey: r
							} = t.payload, i = e[r];
							return i ? {
								...e,
								[r]: {
									...i,
									isVisible: s,
									editPermissions: n
								}
							} : e
						}
						case Z.b: {
							const {
								editorsInfo: s,
								afterToken: n,
								pageKey: r
							} = t.payload, i = e[r];
							if (!i) return e;
							const a = [...i.editorsInfo, ...s];
							return {
								...e,
								[r]: {
									...i,
									editorsInfo: a,
									afterToken: n
								}
							}
						}
						case Z.a: {
							const {
								username: s,
								pageKey: n
							} = t.payload, r = e[n];
							if (!r) return e;
							const i = r.editorsInfo.filter(e => e.username !== s);
							return {
								...e,
								[n]: {
									...r,
									editorsInfo: i
								}
							}
						}
						default:
							return e
					}
				},
				Y = s("./src/lib/omitKey/index.ts");
			const Q = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.b: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case G.d:
					case G.c: {
						const {
							key: s
						} = t.payload;
						return Object(Y.a)(e, s)
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
						case G.d:
						case G.b:
						case G.c: {
							const {
								key: s
							} = t.payload, n = t.type === G.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				se = Object(M.c)({
					error: $,
					pending: te
				}),
				ne = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const re = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.c: {
						const {
							key: s,
							options: n,
							pageInfo: r,
							revisionsIds: i
						} = t.payload, a = e[s], o = n.after && a ? [...a.ids, ...i] : i;
						return {
							...e,
							[s]: {
								ids: o,
								pageInfo: r
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: s
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: r
						} = t.payload, i = e[n];
						return i && s ? {
							...Object(Y.a)(e, r),
							[n]: {
								...i,
								ids: [s.id, ...i.ids]
							}
						} : e
					}
					case ne.a: {
						const {
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, r = {
							...e
						};
						return delete r[s], delete r[n], r
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
									page: s
								}
							} = t.payload, n = s && s.revision;
							return n && !e[n.id] ? {
								...e,
								[n.id]: n
							} : e
						}
						case G.c: {
							const {
								revisions: s
							} = t.payload;
							return {
								...e,
								...s
							}
						}
						case G.a: {
							const {
								page: s
							} = t.payload, n = s.revision;
							return n ? {
								...e,
								[n.id]: n
							} : e
						}
						case G.e: {
							const {
								revisionId: s,
								isHidden: n
							} = t.payload, r = e[s];
							return r ? {
								...e,
								[s]: {
									...r,
									isHidden: n
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(M.c)({
					api: se,
					listings: ie,
					models: oe
				}),
				ce = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[s]: n
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
							subredditName: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Y.a)(e, s)
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
								subredditName: s
							} = t.payload, n = t.type === ce.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				ge = Object(M.c)({
					error: pe,
					pending: he
				});
			const fe = {};
			var ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: s,
								bannedContributors: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...n
								}
							}
						}
						case ce.e: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...n
								}
							}
						}
						case ce.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload, r = Object(Y.a)(e[s], n);
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				_e = s("./node_modules/lodash/uniq.js"),
				xe = s.n(_e);
			const ye = {};
			var ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: xe()([...e[s] || [], ...n])
							}
						}
						case ce.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: xe()([...n, ...e[s] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				we = Object(M.c)({
					afterToken: ue,
					api: ge,
					models: ve,
					userOrder: ke
				});
			const Oe = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Ce = Object(M.c)({
					listing: we,
					search: Ee
				}),
				je = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Se = {};
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[s]: n
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
							subredditName: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Y.a)(e, s)
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
								subredditName: s
							} = t.payload, n = t.type === je.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Fe = Object(M.c)({
					error: Te,
					pending: De
				});
			const Re = {};
			var Le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: s,
							contributors: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n
							}
						}
					}
					case je.e: {
						const {
							subredditName: s,
							contributor: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n
							}
						}
					}
					case je.f: {
						const {
							subredditName: s,
							userId: n
						} = t.payload, r = Object(Y.a)(e[s], n);
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
			var Ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: xe()([...e[s] || [], ...n])
							}
						}
						case je.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: [...n, ...e[s] || []]
							}
						}
						case je.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				We = Object(M.c)({
					afterToken: Ne,
					api: Fe,
					models: Le,
					userOrder: Ae
				});
			const Me = {};
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.g: {
							const {
								subredditName: s,
								contributor: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Ue = Object(M.c)({
					listing: We,
					search: ze
				}),
				He = Object(M.c)({
					diff: U,
					directory: q,
					pages: K,
					pageSettings: X,
					revisions: de,
					wikiBannedContributors: Ce,
					wikiContributors: Ue
				});
			Object(W.a)({
				pages: {
					subredditWiki: He
				}
			});
			const qe = Object(d.a)(h.c),
				Ge = Object(d.a)(h.b),
				Ve = Object(d.a)(h.a),
				Ke = (e, t, s, n) => {
					return s === T.j ? Ze(e, t) : !!Object(w.c)(e, {
						subredditName: t,
						wikiPageName: s,
						revisionId: n
					})
				},
				Ze = (e, t) => !!Object(w.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, s, r) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === T.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(F.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(qe({
						options: l,
						pageKey: u
					}));
					const m = await Object(P.a)(r.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(Ge({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(Ve({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.L.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: R.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
				}, Xe = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, n) => {
						const r = n(),
							i = {
								sort: o.bb.HOT
							},
							a = Object(c.a)(e, i.sort),
							d = r.listings.postOrder.api.error[a],
							l = r.listings.postOrder.api.pending[a],
							u = !!r.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await s(Object(b.subredditDataRequested)(a, e, i, t)), !n().listings.postOrder.api.error[a])
					}
				}, Ye = e => async (t, s) => {
					const {
						params: n,
						url: r
					} = e, {
						wikiPageName: i
					} = n, o = Object(B.a)(r, n);
					let d = !1;
					return T.l.includes(i || "") ? (await (async (e, t) => {
						const s = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = s
					})(e.url), d = !0) : r !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Qe = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (r, i, a) => {
						const {
							subredditName: d = T.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[I.T], m = t[I.U], p = u ? Object(x.a)(u) : void 0, b = m ? Object(x.a)(m) : void 0, h = c === T.j, _ = l === T.m.Revisions;
						let y = !1,
							k = !1;
						if (s) {
							const {
								pageName: t
							} = e;
							y = t === o.mc.WikiContributors, k = t === o.mc.WikiBanned
						}
						const w = i(),
							O = (h || s) && !Ze(w, d),
							E = !!c && !Ke(w, d, c, p),
							C = [];
						C.push(r(Xe(d))), (O || E) && C.push(r(Je({
							includeDirectory: O,
							includePageData: E,
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
						}))), y && C.push(r(Object(v.e)(d))), k && C.push(r(Object(f.e)(d))), (await Promise.all(C)).every(Boolean) || r(Object(g.f)({
							kind: R.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Qe(e, t, s)
						}))
					}
				}, $e = e => async (t, s) => {
					if (await t(Ye(e))) return;
					const {
						params: n,
						queryParams: r
					} = e, i = n.subredditName || T.e;
					t(u.m({
						title: n.wikiPageName ? `${n.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Qe(n, r));
					const a = Object(A.C)(s(), {
							subredditName: i
						}),
						o = s();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(L.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(D.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/structuredStyles/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(r.a)(a.B),
				g = Object(r.a)(a.C),
				f = Object(r.a)(a.A),
				v = (e, t, s) => async (n, r, i) => {
					const a = Object(p.C)(r(), {
						subredditName: e
					});
					if (a) return x(a.id, t, s)(n, r, i)
				}, _ = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), x = (e, t, s) => async (r, a, p) => {
					const v = await Object(l.e)(t);
					r(h());
					const x = a();
					try {
						await Object(i.g)("communityIcon", v, e)(r, a, p)
					} catch (k) {
						return Object(b.a)(Object(c.c)(x, "something went wrong with the uploading the image")), r(Object(o.f)({
							kind: u.b.Error,
							text: _()
						})), void r(f())
					}
					const y = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(x, "image is null")), r(Object(o.f)({
						kind: u.b.Error,
						text: _()
					})), void r(f());
					await Object(i.k)(e, {
						communityIcon: y
					}, d.b.idCard, s)(r, a, p), r(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				r = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				u = s("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, r = [], i = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s,
							editWikiBanInfo: n
						} = e.node;
						s.id && s.name && s.icon && (i[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, r.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: i,
						userOrder: r
					}
				},
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(i.a)(h.d),
				f = Object(i.a)(h.c),
				v = Object(i.a)(h.b),
				_ = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = p(n);
							t(f({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = a.error || {
							type: r.L.UNKNOWN_ERROR
						};
						t(v({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, x = Object(i.a)(h.a), y = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							s(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(a.f)({
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
				}, k = Object(i.a)(h.e), w = (e, t) => async (s, i, d) => {
					const u = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							name: s.username,
							type: "wikibanned",
							duration: s.duration,
							ban_reason: s.banReason,
							note: s.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						s(Object(a.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("Successfully banned user", null, {
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
							s(k({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === r.L.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), s(Object(a.f)({
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, O = Object(i.a)(h.f), E = (e, t) => async (s, i, d) => {
					const u = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (s(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), s(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t)
					})), u.ok
				}, C = Object(i.a)(h.g), j = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								r = Object.keys(n.bannedContributors)[0];
							s(C({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[r]
							}))
						}
					} else s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_CONTRIBUTORS_PENDING",
				r = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				u = s("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, r = [], i = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s
						} = e.node;
						s.id && s.name && s.icon && (i[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t
						}, r.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: i,
						userOrder: r
					}
				},
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(i.a)(h.d),
				f = Object(i.a)(h.c),
				v = Object(i.a)(h.b),
				_ = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = p(n);
							t(f({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = a.error || {
							type: r.L.UNKNOWN_ERROR
						};
						t(v({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, x = Object(i.a)(h.a), y = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							s(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(a.f)({
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
				}, k = Object(i.a)(h.e), w = (e, t) => async (s, i, d) => {
					const u = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							name: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						s(Object(a.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const r = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), r)).body;
						if (o.data.subreddit.wiki) {
							const t = p(o.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || s(k({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === r.L.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === r.L.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), s(Object(a.f)({
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, O = Object(i.a)(h.f), E = (e, t) => async (s, i, d) => {
					const u = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: r.ob.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (s(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), s(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t)
					})), u.ok
				}, C = Object(i.a)(h.g), j = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								r = Object.keys(n.contributors)[0];
							s(C({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[r]
							}))
						}
					} else s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				r = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "d", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/subredditSettings.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = s("./src/redditGQL/operations/SubredditWikiPageSettings.json");
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
						editorsInfo: s,
						isVisible: n
					} = e, {
						edges: r,
						pageInfo: i
					} = s, a = [];
					return r.forEach(e => {
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
				f = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(x.c),
				k = (e, t) => async (s, n, r) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(r.gqlContext(), i),
						d = Object(_.I)(n(), e);
					if (Object(_.ab)(n(), d) || await s(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							s(y({
								pageKey: Object(f.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, w = Object(i.a)(x.b), O = (e, t, s) => async (r, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: s
						},
						c = await b(a.gqlContext(), d);
					if (c.ok) {
						const s = c.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n && n.page) {
							const s = g(n.page.settings),
								{
									editorsInfo: i,
									afterToken: a
								} = s;
							r(w({
								editorsInfo: i,
								afterToken: a,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else r(Object(o.f)({
						kind: v.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t, s)
					}));
					return c.ok
				}, E = Object(i.a)(x.d), C = e => {
					let {
						editPermissions: t,
						isVisible: s,
						wikiPageName: n,
						subredditName: i
					} = e;
					return async (e, a, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: r.ob.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: o.apiContext(),
							editPermissions: t,
							isVisible: s,
							wikiPageName: n,
							subredditName: i
						});
						return c.ok && e(E({
							editPermissions: t,
							isVisible: s,
							pageKey: Object(f.a)({
								wikiPageName: n,
								subredditName: i
							})
						})), c.ok
					}
				}, j = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: i
					} = e;
					return async (e, a, c) => {
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
							username: s
						});
						if (m.ok) e(Object(o.f)({
							kind: v.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(k(t, i));
						else if (m.error) {
							const t = m.error.type;
							let s = n.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === r.L.NOT_FOUND_ERROR && (s = n.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.f)({
								kind: v.b.Error,
								text: s
							}))
						}
						return m.ok
					}
				}, S = Object(i.a)(x.a), N = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: n
					} = e;
					return async (e, i, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: r.ob.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: a.apiContext(),
							wikiPageName: n,
							subredditName: t,
							username: s
						});
						return c.ok && (e(Object(o.f)({
							kind: v.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(S({
							username: s,
							pageKey: Object(f.a)({
								wikiPageName: n,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			}));
			const n = "WIKI_REVISIONS_PENDING",
				r = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/WikiRevisions.json");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/wiki/wikiRevision.ts");
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
						s = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!s) throw new Error("Invalid response");
					return (e => {
						const t = {},
							s = [];
						return e.edges.forEach(e => {
							const n = e.node;
							t[n.id] = n, s.push(n.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: s
						}
					})(s)
				},
				f = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				v = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/subredditWiki.ts"),
				y = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const k = Object(i.a)(y.d),
				w = Object(i.a)(y.c),
				O = Object(i.a)(y.b),
				E = e => async (t, s, i) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = s(), h = Object(f.a)(e), v = Object(x.p)(b, {
						listingKey: h
					});
					if (!o && !!v) return !0;
					const y = v && v.pageInfo.endCursor || void 0;
					if (!(!v || v.pageInfo.hasNextPage)) return !0;
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
							const s = g(e.data);
							t(w({
								...j,
								...s
							}))
						}
					} else {
						const s = S.error || {
							type: r.L.UNKNOWN_ERROR
						};
						t(O({
							...j,
							error: s
						})), l && t(Object(a.f)({
							kind: _.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: E(e)
						}))
					}
					return S.ok
				}, C = Object(i.a)(y.a), j = e => async (t, s, r) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(v.a)({
						...e,
						revisionId: void 0
					}), l = Object(f.a)({
						...e,
						isRecent: !1
					}), u = Object(f.a)({
						...e,
						isRecent: !0
					}), m = Object(x.p)(s(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(r.apiContext(), e)).ok) {
						const e = (await Object(o.a)(r.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							m = s && s.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.f)({
							kind: _.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
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
					} else t(Object(a.f)({
						kind: _.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, S = Object(i.a)(y.e), N = e => async (t, s, r) => {
					const i = await b(r.apiContext(), e);
					if (i.ok) {
						const s = i.body.status;
						t(S({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(a.f)({
						kind: _.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/config.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/hooks/useClickSourceData.ts"),
				u = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = s("./src/reddit/components/AuthorLink/index.m.less"),
				p = s.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, s;
				const n = Object(a.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					h = Object(i.d)(),
					g = Object(i.e)(u.b),
					f = Object(i.e)(u.c),
					v = t => {
						var s;
						if (null === (s = e.onClick) || void 0 === s || s.call(e, t), g || f) {
							const s = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${o.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.cb)(s))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? r.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: n,
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: v
				}), e.children) : e.isAuthorDeleted ? r.a.createElement("span", {
					className: Object(a.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : r.a.createElement(c.default, b({}, null !== (s = e.linkProps) && void 0 !== s ? s : {}, {
					className: n,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: v
				}), e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/timeAgo/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/elementIds.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts");
			var h = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/helpers/chooseVariant/index.ts");
			const f = e => {
				return Object(g.c)(e, {
					experimentEligibilitySelector: g.a,
					experimentName: h.uf
				}) === h.Pd
			};
			var v = s("./src/reddit/selectors/recapGame.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/BackToTop/index.m.less"),
				y = s.n(x);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = e => {
				if (e) {
					const e = document.getElementById(u.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: u
				} = e;
				const h = Object(l.b)(),
					g = Object(r.useRef)(null),
					[x, O] = Object(r.useState)(!1),
					[E, C] = Object(r.useState)(),
					[j, S] = Object(r.useState)(),
					[N, I] = Object(r.useState)(0),
					T = Object(a.e)(_.l),
					P = Object(a.e)(f),
					D = Object(a.e)(_.R),
					F = Object(a.e)(v.a),
					R = encodeURIComponent(o.a.redditUrl + "/r/recap"),
					L = o.a.accountManagerOrigin,
					B = D ? "/r/recap" : `${L}/login/?dest=${R}`,
					A = T ? T.id : "anonymous",
					W = "on" === F.recapGameState,
					M = () => {
						x && S(setTimeout(() => {
							g.current && (g.current.classList.add(y.a.transform), g.current.style.width = `${N}px`)
						}, 4750)), x && C(setTimeout(() => {
							O(!1), Object(p.Sb)(A, !1)
						}, 5e3))
					};
				Object(r.useEffect)(() => {
					W || setTimeout(() => {
						const e = Object(p.N)(A);
						e ? Object(c.e)(e.lastSeenTime) >= 24 && e.dropSkip === p.a.NONE ? O(!0) : Date.now() >= new Date(2022, 10, 2).getTime() && e.dropSkip !== p.a.SECOND && O(!0) : O(!0)
					})
				}, [A, W]);
				const z = Object(r.useCallback)(e => {
					if (e) {
						const t = e.clientWidth;
						I(t + 32)
					}
				}, []);
				return i.a.createElement("div", {
					className: Object(d.a)(t, y.a.container),
					style: u
				}, x && P && !s && !W ? i.a.createElement("a", {
					ref: g,
					href: B,
					className: y.a.bananaPill,
					onMouseEnter: () => {
						E && clearTimeout(E), j && clearTimeout(j), g.current && (g.current.classList.remove(y.a.transform), g.current.style.width = "65px")
					},
					onMouseLeave: M,
					onClick: () => {
						E && clearTimeout(E), j && clearTimeout(j), O(!1), Object(p.Sb)(A, !0), h((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...b.o(e)
						}))())
					}
				}, i.a.createElement("img", {
					className: y.a.icon,
					src: `${o.a.assetPath}/img/recap/banana_pill.png`,
					alt: k._("banana", null, {
						hk: "1fs9mn"
					})
				}), i.a.createElement("span", {
					className: y.a.text
				}, "+1"), k._("{=Back to Top}", [k._param("=Back to Top", i.a.createElement("span", {
					ref: z,
					className: y.a.altText
				}, k._("Back to Top", null, {
					hk: "4BTAZ0"
				})))], {
					hk: "4Foziy"
				}), i.a.createElement(n.a, {
					onChange: e => {
						e.isIntersecting && (M(), h((() => e => ({
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
					onClick: () => w(s)
				}, k._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less": function(e, t, s) {
			e.exports = {
				muteButton: "E6ihBvDYBbdvjzCcN_LZE",
				muteIcon: "_1Sx3lrWefgX2BpcEoC6zMv",
				muteDefault: "_3pc_K2D7OtCZ3HzDnRlOJv",
				muteHover: "_1CwsmOiXqCke04fKLHhV-a"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/actions/subreddit/muting.ts"),
				m = s("./src/reddit/actions/subreddit/notifications.ts"),
				p = s("./src/lib/combineRefs/index.tsx"),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				h = s("./src/lib/hooks/useTooltip.ts"),
				g = s("./src/reddit/components/CommonTooltip/index.m.less"),
				f = s.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = r.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: s,
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
					}, [t]), t ? r.a.createElement("div", v({
						id: s,
						className: Object(o.a)(f.a.tooltip, i, {
							[f.a.visible]: c
						})
					}, d.popperProps), c && r.a.createElement(r.a.Fragment, null, d.arrowProps && r.a.createElement("div", v({
						className: Object(o.a)(f.a.arrow, a)
					}, d.arrowProps)), d.children)) : null
				})),
				x = s("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case x.c.FREQUENT:
							return "notification_frequent";
						case x.c.OFF:
							return "notification_off";
						case x.c.LOW:
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
			var O = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = s.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => {
					return r.a.createElement(E.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: O.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.c.FREQUENT),
						isSelected: e.notificationLevel === x.c.FREQUENT,
						icon: r.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.c.FREQUENT
						})
					}, {
						displayText: O.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.c.LOW),
						isSelected: e.notificationLevel === x.c.LOW,
						icon: r.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.c.LOW
						})
					}, {
						displayText: O.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.c.OFF),
						isSelected: e.notificationLevel === x.c.OFF,
						icon: r.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.c.OFF
						})
					}].map(e => r.a.createElement(C.b, I({
						className: Object(o.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = s("./src/reddit/controls/Button/index.tsx"),
				D = s("./src/reddit/selectors/telemetry.ts");
			const F = e => t => ({
				...D.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: D.kb(t)
			});
			var R = s("./src/reddit/hooks/useTracking.ts"),
				L = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = c.a.img("SubredditIcon", N.a),
				A = c.a.wrapped(L.a, "DefaultIcon", N.a);
			var W = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: s,
						subredditIcon: n,
						onHide: i,
						onUpdate: a
					} = e;
					const o = Object(R.a)(),
						d = s ? r.a.createElement(B, {
							src: n || void 0
						}) : r.a.createElement(A, null),
						c = `r/${t}`;
					return r.a.createElement("div", {
						className: N.a.notificationPopup
					}, r.a.createElement("div", {
						className: N.a.title
					}, r.a.createElement("h2", null, O.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, O.fbt._("{subreddit name}", [O.fbt._param("subreddit name", c)], {
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
						text: O.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), a(x.c.FREQUENT), o(F(x.c.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: N.a.hideButton,
						onClick: i
					}, O.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				M = s("./src/reddit/helpers/localStorage/index.ts");
			var z = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var U = e => {
					const t = Object(i.d)(),
						s = Object(R.a)(),
						a = Object(h.b)(k),
						o = Object(h.b)(w),
						[d, c] = function(e, t) {
							const [s, r] = Object(n.useState)(Object(M.U)(e, t));
							return [s, Object(n.useCallback)(() => {
								const s = Object(M.b)(e, t);
								r(s)
							}, [e, t, r])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(z.a)(e));
					Object(n.useEffect)(() => {
						e.notificationLevel !== x.c.LOW && e.notificationLevel !== x.c.OFF || c()
					}, [e.subredditId]);
					const u = 2 === d,
						g = () => {
							a.hide()
						},
						f = () => {
							o.hide()
						};
					Object(n.useEffect)(() => (u && (o.update && o.update(), o.show()), () => {
						f(), g()
					}), [e.subredditName, u]);
					const v = () => {
							f(), a.show()
						},
						O = (e => `dropdown-${e}`)(e.subredditName),
						E = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(O, g);
					const C = Object(n.useCallback)(e => {
							e.stopPropagation(), a.visible ? g() : v()
						}, [g, v, a.visible]),
						S = Object(n.useCallback)(t => {
							t === x.c.FREQUENT && Object(M.gb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						I = Object(n.useCallback)(n => {
							const {
								subredditId: r
							} = e;
							g(), f(), t(Object(m.d)({
								subredditId: r,
								notificationLevel: n,
								successCallback: () => S(n)
							})), s(F(n.toLowerCase()))
						}, [g, e.subredditId, t, s]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(p.a)(a.target.ref, o.target.ref),
						onClick: C,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(j.a, {
						name: y(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(_, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: O
					}, r.a.createElement(T, {
						dropdownId: O,
						notificationLevel: e.notificationLevel,
						onClick: I
					})), u && !l && r.a.createElement(_, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: E,
						className: N.a.popupTooltip
					}, r.a.createElement(W, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: f,
						onUpdate: I
					})))
				},
				H = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				q = s("./src/reddit/components/SubredditNav/index.tsx"),
				G = s("./src/reddit/components/SubscribeButton/index.tsx"),
				V = s("./src/reddit/constants/componentSizes.ts"),
				K = s("./src/reddit/constants/postLayout.ts"),
				Z = s("./src/reddit/constants/posts.ts"),
				J = s("./src/reddit/featureFlags/index.ts"),
				X = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Y = s("./src/reddit/constants/tracking.ts");
			var Q = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				$ = s("./src/reddit/hooks/useWindowEvent.ts"),
				ee = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				te = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				se = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ne = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ae = s("./src/reddit/selectors/widgets.ts"),
				oe = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				de = s.n(oe),
				ce = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				le = s("./src/reddit/helpers/trackers/subredditMuting.ts"),
				ue = s("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				me = s.n(ue);
			const {
				fbt: pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), be = e => {
				let {
					onClickUnmute: t
				} = e;
				const s = Object(R.a)();
				return r.a.createElement(P.t, {
					priority: P.c.Plain,
					className: me.a.muteButton,
					onClick: () => {
						s(Object(le.g)()), t()
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
			}, he = c.a.img("SubredditIcon", de.a), ge = Object(a.c)({
				isNsfwBlurSubreddit: se.e,
				notificationLevel: re.L,
				isMuted: re.K,
				spPollsEnabled: J.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(ne.a)(e, {
						subredditId: s
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: s
					} = t;
					return !!s && Object(re.S)(e, {
						subredditId: s
					})
				},
				userId: ie.j,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s;
					return Object(re.kb)(e, {
						identifier: {
							name: n,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ee.a,
				widget: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(ae.f)(e, {
						subredditId: s
					}) : void 0
				}
			}), fe = {
				threshold: [.5, .001],
				rootMargin: `${1-V.f}px 0px 0px 0px`
			};
			t.a = Object(i.b)(ge, (e, t) => ({
				_updateSubredditInfo: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (n) return e(Object(m.c)({
						subredditAboutInfo: {
							[n]: {
								notificationLevel: x.c.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id),
						r = t.subreddit ? t.subreddit.name : t.subredditName;
					if (n) return e(Object(u.e)({
						subredditId: n,
						subredditName: r
					}))
				}
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(i.e)(te.b),
					u = Object(i.e)(te.a),
					m = c || u,
					[p, b] = Object(n.useState)(!1),
					h = Object(n.useRef)(null),
					[g, f] = Object(n.useState)(),
					[v, _] = Object(n.useState)(null),
					x = Object(n.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: s
							} = t;
							s >= .5 ? e(!1) : s <= .001 && e(!0)
						})
					})(b), []);
				Object($.a)("resize", ((e, t, s) => () => {
					var n;
					e(t && s ? null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.height : void 0)
				})(f, v, m)), Object(Q.a)(h, x, fe);
				const y = e.subreddit && Object(X.a)(e),
					k = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					w = s.charAt(0).toUpperCase() + s.slice(1),
					O = !!e.subreddit && e.subredditInlineEditingEnabled,
					E = Object(o.a)(de.a.SubredditIcon, de.a.editableIcon, {
						[de.a.emptyEditableIcon]: !y
					}),
					C = k ? r.a.createElement(H.a, {
						className: E,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : r.a.createElement(L.a, {
						className: de.a.DefaultIcon
					}),
					j = k ? r.a.createElement(he, {
						className: Object(o.a)(de.a.SubredditIconImg, {
							[de.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : r.a.createElement(L.a, {
						className: Object(o.a)(de.a.DefaultIcon, {
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
					className: Object(o.a)(de.a.wrapper, {
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
				}, O ? C : j, r.a.createElement("div", {
					className: Object(o.a)(de.a.textContainer, {
						[de.a.textContainerNoIcon]: !k
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(de.a.text, {
						[de.a.blur]: e.isNsfwBlurSubreddit
					})
				}, r.a.createElement("h1", {
					className: de.a.title
				}, d || w), !!d && r.a.createElement("h2", {
					className: de.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: de.a.buttonWrapper
				}, r.a.createElement("div", {
					className: de.a.subscribeButtonContainer
				}, r.a.createElement(G.a, {
					className: de.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...D.o(t),
							source: "sticky_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: D.kb(t)
						}))(t) : (e => t => ({
							...D.o(t),
							source: "id_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: D.kb(t)
						}))(t)
					},
					identifier: {
						name: s,
						type: Z.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(M.gb)(e.userId, t), e.updateSubredditInfo())
					}
				})), I && r.a.createElement(be, {
					onClickUnmute: e.unmuteSubreddit
				}), e.userIsSubscriber && !I && t && e.notificationLevel && r.a.createElement("div", {
					className: de.a.notificationButtonContainer
				}, r.a.createElement(U, {
					notificationLevel: e.notificationLevel,
					subredditName: s,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: k,
					userId: e.userId
				}))))), S && r.a.createElement(q.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
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
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/contexts/NavbarExp.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				g = s("./src/reddit/components/Footer/index.tsx"),
				f = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.tsx"),
				_ = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = s("./node_modules/lodash/flatMap.js"),
				y = s.n(x),
				k = s("./src/lib/linkMatchers/index.ts"),
				w = s("./src/lib/linkMatchers/customLinks.ts"),
				O = s("./src/reddit/controls/OutboundLink/index.tsx");
			const E = /\[(.+?)\]\((.+?)\)/g,
				C = e => {
					const t = e.split(E);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, r, i] = t.slice(n, n + 3);
						s.push(e), s.push([i, r])
					}
					return s
				};
			var j = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, C)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return i.a.createElement(O.b, {
								className: e.linkClassName,
								href: n,
								key: s
							}, r)
						}
						return i.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				S = s("./src/reddit/constants/parameters.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/chat/controls/Svg/index.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => i.a.createElement(T.a, P({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = s("./src/reddit/models/ContentGate.ts"),
				R = s("./src/lib/constants/index.ts"),
				L = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/reddit/selectors/user.ts");
			var A = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/components/ContentGate/index.m.less"),
				M = s.n(W);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(D, "PrivateKey", M.a), H = l.a.div("ButtonsContainer", M.a), q = l.a.div("Container", M.a), G = l.a.div("ContainerExp", M.a), V = l.a.div("Description", M.a), K = l.a.div("PrivateSubredditDetails", M.a), Z = l.a.div("PrivateSubredditDescription", M.a), J = l.a.h3("PrivateSubredditName", M.a), X = l.a.a("Link", M.a), Y = l.a.wrapped(I.n, "LinkRouterButton", M.a), Q = l.a.wrapped(I.m, "LinkButton", M.a), $ = l.a.wrapped(I.q, "SecondaryLinkRouterButton", M.a), ee = l.a.wrapped(I.p, "SecondaryLinkButton", M.a), te = l.a.wrapped(Y, "GoHomeLinkButton", M.a), se = l.a.wrapped(h.a, "CreateCommunityButton", M.a), ne = l.a.img("Image", M.a), re = l.a.img("ImagePlaceholder", M.a), ie = l.a.wrapped(Y, "LeftLinkRouterButton", M.a), ae = l.a.wrapped(Q, "LeftLinkButton", M.a), oe = l.a.wrapped(ee, "SecondaryLeftLinkButton", M.a), de = l.a.wrapped($, "SecondaryLeftLinkRouterButton", M.a), ce = l.a.h3("Title", M.a), le = l.a.div("PageBody", M.a), ue = l.a.div("InterstitialMessageWrapper", M.a), me = Object(c.c)({
				isLoggedIn: B.Q,
				origin: A.k,
				user: B.l,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(B.R)(e)) return !1;
					const t = Object(L.d)(e);
					if (!t) return !1;
					const s = Object(B.g)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const r = 30 * R.E;
					return n > Date.now() - r
				})(e),
				isSeo: A.h
			}), pe = Object(N.v)(), be = Object(a.b)(me, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.E(s)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.q)())
					}
				}
			}), he = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: a,
					isLoggedIn: o,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: g,
					quarantineRequiresEmail: x,
					quarantineMessage: y,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: w,
					interstitialWarningMessage: O,
					interstitialWarningMessageHtml: E,
					interstitialWarningMessageRTJson: C,
					setNSFWPreference: N,
					subredditDescription: I,
					subredditName: T,
					user: P
				} = e, D = async () => {
					if (o ? await N() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(S.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case F.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ce, null, z._("r/{community name} is a Reddit Premium community", [z._param("community name", T)], {
							hk: "2lyDwB"
						})), i.a.createElement(V, null, z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(H, null, P ? i.a.createElement(oe, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ae, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), P ? i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ce, null, s === F.a.Nsfw ? z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(V, null, z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(H, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, z._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ee, {
							onClick: D,
							redditStyle: !0
						}, z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(U, null), i.a.createElement(ce, null, "r/", T, " ", z._("is a private community", null, {
							hk: "7zZmq"
						})), I && I.length && i.a.createElement(K, null, i.a.createElement(J, null, "r/", T), i.a.createElement(Z, null, i.a.createElement("div", null, I))), i.a.createElement(V, null, z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(H, null, P ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: M.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), i.a.createElement(oe, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, z._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(oe, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && i.a.createElement(_.a, {
							subredditName: T
						}));
					case F.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ce, null, z._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(V, null, z._("This community is {=quarantined}", [z._param("=quarantined", i.a.createElement(X, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, z._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ue, null, w ? i.a.createElement(v.b, {
							content: w,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : k ? i.a.createElement(f.a, {
							html: k
						}) : y || z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), z._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(H, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? i.a.createElement(H, null, i.a.createElement(de, {
								to: "/",
								redditStyle: !0
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(Q, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, z._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(H, null, i.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, z._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(P, r, x)));
					case F.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ce, null, z._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(V, null, i.a.createElement(ue, null, C ? i.a.createElement(v.b, {
							content: C,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : E ? i.a.createElement(f.a, {
							html: E
						}) : O), z._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(H, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, z._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(ee, {
							onClick: a,
							redditStyle: !0
						}, z._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case F.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ce, null, z._("r/{community name} has been banned from Reddit", [z._param("community name", T)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(V, null, e ? i.a.createElement(j, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(H, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(H, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(re, null), i.a.createElement(ce, null, z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(V, null, z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(H, null, P && i.a.createElement(se, {
							eventSource: "content_gate"
						}), i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, z._("This account has been {=suspended} .", [z._param("=suspended", i.a.createElement(X, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ce, null, z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(V, null, z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(H, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(H, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(H, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(o.i)(e => {
				const t = Object(r.useContext)(d.a) ? G : q;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(le, null, he(e))), i.a.createElement(g.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ContributorRequestButton").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(g),
				v = s("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				x = v.a.wrapped(l.c, "StyledTooltip", f.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.qb)(e),
					userIsSuspended: h.Y
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: _
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
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
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: _,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: _,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: _,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/economics/predictions/index.ts"),
				o = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = s("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(i.d)(),
					s = Object(i.e)(t => Object(d.Y)(t, {
						subredditId: e
					})),
					n = Object(i.e)(t => Object(o.i)(t, {
						subredditId: e
					})),
					c = Object(i.e)(t => Object(o.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						s.name && t(Object(a.l)(s.name))
					}, [s.name, t]);
				return r.a.useEffect(() => {
					c || n || l()
				}, [c, n, l]), {
					isFetching: c,
					isFetched: n,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(s.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/config.ts"),
				d = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = s.n(d),
				l = s("./src/lib/lessComponent.tsx");
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
								s = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, s), this.setState({
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
						sentOncePerRender: s
					} = this.state, i = s ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(r.a, {
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
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Footer/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = o.a.div("UserAgreement", c.a), m = o.a.a("UserAgreementLink", c.a), p = o.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(a.a)(c.a.FooterContainer, {
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
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-CommunityCard").then(s.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				v = d.a.div("PositionedImage", h.a),
				_ = d.a.div("HeaderContent", h.a),
				x = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				k = d.a.wrapped(i.a, "HeaderUrl", h.a),
				w = d.a.span("Container", h.a),
				O = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
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
					return r.a.createElement(w, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, r.a.createElement(k, {
						className: e.className,
						to: e.url
					}, r.a.createElement(x, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(_, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(f, {
						style: {
							backgroundImage: `url(${s})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					}) : r.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					})), r.a.createElement(y, {
						style: {
							paddingTop: 32 === O ? "4px" : "14px"
						}
					}, t)), r.a.createElement(v, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(n.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(r.a)(() => s.e("AuthorHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "c", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/selectors/tooltip.ts");
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
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(a.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var s;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (s = t.onShow) || void 0 === s || s.call(t)
					}
				})),
				g = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = s.n(g);
			class v extends r.a.Component {
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
			const _ = m(v),
				x = h(v)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.tsx"),
				i = s("./src/reddit/components/Hovercards/helpers.m.less"),
				a = s.n(i);
			const o = n.a.wrapped(r.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: r,
						tooltipType: i
					} = e;
					let a = r;
					return s && (a = `${a}--${s}`), i && (a = `${a}--${i}`), t && (a = `${a}--${t}`), n && (a = `${a}--${n}`), a
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "i", (function() {
				return S
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/lodash/isNil.js"),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
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
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.b)(e, t),
					n = Object(g.N)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var v = Object(i.b)(() => Object(a.a)(f, b.j, (e, t) => ({
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
				const s = Object(h.b)(e, t),
					n = Object(g.N)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var x = Object(i.b)(() => Object(a.a)(_, e => e))(e => r.a.createElement(p, {
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
				k = s("./src/reddit/hooks/usePostContext.ts");
			var w = e => {
				const t = Object(k.a)(),
					s = Object(n.useMemo)(() => ({
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
					data: s
				}) : null
			};
			var O = e => {
				const t = Object(k.a)(),
					s = Object(n.useMemo)(() => ({
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
					data: s
				}) : null
			};
			var E = e => {
				const t = Object(k.a)(),
					s = Object(n.useMemo)(() => ({
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
					data: s
				}) : null
			};
			var C = Object(i.b)(() => Object(a.c)({
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
			var j = Object(i.b)(() => Object(a.c)({
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
			var S = Object(i.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(g.Y)(e, {
						subredditId: s
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
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				c = s("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = s.n(c);
			const u = Object(i.a)(o.a),
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
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), s.e("ModProgressModule")]).then(s.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				v = s.n(f);
			const _ = c.a.wrapped(m.a, "_Dropdown", v.a),
				x = Object(u.a)(_),
				y = c.a.button("MenuButton", v.a),
				k = c.a.wrapped(p.b, "DropdownRow", v.a),
				w = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				O = Object(a.b)(w, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
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
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": g.b.OVERFLOW_MENU
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				x = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/reddit/components/MiniCardPost/index.m.less"),
				O = s.n(w),
				E = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				C = s.n(E);
			const j = e => e.type === x.f.Spoiler,
				S = Object(h.v)();
			t.a = S(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: x,
					showSubredditMeta: w = !0,
					showSubredditName: E,
					subredditOrProfile: S
				} = e, N = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", P = x && T || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: I
				}) || T, D = g ? g.subredditInfo && g.subredditInfo.icon : S && S.icon.url, F = g ? g.subredditInfo && g.subredditInfo.displayText : S && (S.displayText || S.name), R = h ? h.flair.filter(j) : [], L = h ? h.score : 0, B = h ? h.numComments : 0, A = h && h.isSponsored, W = Object(k.a)(e).body, M = `linear-gradient(\n      ${Object(r.f)(W,.2)},\n      ${Object(r.f)(W,.3)},\n      ${Object(r.f)(W,.4)},\n      ${Object(r.f)(W,.6)},\n      ${Object(r.f)(W,.8)},\n      ${W}\n    )`, z = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(C.a.trendingPost, {
						[C.a["m-background"]]: !!N
					})
				}, a.a.createElement(f.default, {
					to: P
				}, a.a.createElement("div", {
					className: Object(d.a)(C.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(k.a)(e).body, N || Object(k.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": M
					}
				}, A && a.a.createElement("div", {
					className: C.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(C.a.innerContainer, O.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? C.a.title : C.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(C.a.description, s)
				}, R.length > 0 && a.a.createElement(m.a, {
					className: C.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: C.a.spacer
				}), w && D && F && a.a.createElement(v.a, {
					className: C.a.relatedSubredditMetaData,
					iconClassName: C.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", F)], {
						hk: "2YTyJf"
					})
				}), !w && h && a.a.createElement("div", {
					className: C.a.metaLine
				}, E && F && a.a.createElement("span", {
					className: C.a.meta
				}, Object(_.d)(F)), a.a.createElement("span", {
					className: C.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(L, "number", Object(u.b)(L))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: C.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return A ? a.a.createElement(p.a, {
					post: h
				}, z) : z
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/random.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/helpers/adCount/index.ts"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				_ = s.n(v),
				x = s("./src/lib/lessComponent.tsx");
			const y = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				k = Object(c.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(s, r, n)]
					}
				}),
				w = Object(d.b)(k),
				O = x.a.wrapped(b.a, "ThemedWidget", _.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
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
				j = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: s
						} = this.props;
						return t !== e.className || s !== e.redditStyle
					}
					trackViewability(e, t, s) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, s))
					}
					render() {
						const e = i()(0, C.length - 1),
							{
								img: t,
								href: s
							} = C[e],
							{
								className: n,
								placement: r,
								redditStyle: a
							} = this.props;
						return o.a.createElement(O, {
							className: n,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						}))
					}
				});

			function S(e) {
				let {
					className: t,
					post: s,
					placementIndex: n,
					refreshKey: r,
					listingName: i,
					placement: a,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? o.a.Fragment : m.a;
				if (!c && E(s)) {
					let e = null;
					return l ? e = o.a.createElement(j, {
						className: t,
						redditStyle: d,
						placement: a
					}) : s && (e = o.a.createElement(y, {
						post: s,
						postId: s.id,
						refreshKey: r,
						listingName: i,
						placement: a,
						placementIndex: n
					})), o.a.createElement(p, null, e)
				}
				return null
			}
			t.a = w(S)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/selectors/brandSafety.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.v)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(o.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					i = Object(c.F)(e) || Object(d.a)(e),
					a = Object(o.e)(e);
				return {
					canShowAd: r && !i,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: a
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: i,
					...a
				} = e;
				return !s && t && i ? r.a.createElement(l.a, u({
					forceHouseAd: n
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(r);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				_ = s("./src/redditGQL/types.ts"),
				x = s("./src/reddit/components/SidebarFooter/index.m.less"),
				y = s.n(x);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = d.a.a("Link", y.a), O = Object(a.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), E = Object(i.b)(O), C = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, s, !!m.c[t] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/impressum"
				}, k._("Impressum", null, {
					hk: "4cKXSI"
				})), t === _.j.De && r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, k._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.reddithelp.com"
				}, k._("help", null, {
					hk: "4lyYaD"
				})), t === _.j.De && r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, k._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, k._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, k._("Reddit Inc © {year}. All rights reserved", [k._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = C(E(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					s = Object(h.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.cd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.cd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.cd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(j, {
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
					return s.includes(t) || "en" === t ? r.a.createElement(w, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/impressum"
				}, k._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === _.j.De && r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, k._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.reddithelp.com"
				}, k._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === _.j.De && r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, k._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, k._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: y.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, k._("Reddit Inc © {year}. All rights reserved", [k._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = d.g[1] + 24,
				v = u.f + 8,
				_ = v + 152 + 16,
				x = _ + f + 8,
				y = h.a.div("Container", b.a),
				k = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return o.a.createElement(c.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?v:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				w = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: i,
						shouldStickToBottom: a
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: a,
							[b.a.StickyStyles]: !a && i && !r,
							[b.a.StickyStylesFakeOverlay]: !a && !!r
						})
					}, t)
				};
			class O extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > x,
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
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: i,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !n), m = this.state.isBottomSticky;
					return o.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(w, {
						isFakeOverlay: s,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, d, !i && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(k, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const E = Object(m.v)();
			t.a = E(O)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/ImageInput/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/models/ApiRequestState/index.ts"),
				f = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				v = s("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = s.n(v);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: n,
						...r
					} = e, a = [s, _.a.inTopBar, _.a.iconContainer];
					return n ? a.push(_.a.emptyEditableIconInTopBar) : a.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", x({}, r, {
						className: Object(d.a)(...a)
					}), n ? i.a.createElement(h.a, {
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
						className: s,
						alt: n,
						role: r,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: n,
						onClick: a,
						role: r,
						src: c,
						className: Object(d.a)(s, {
							[_.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				w = Object(o.c)({
					isLoading: f.b
				});
			class O extends i.a.PureComponent {
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
					}), s = i.a.createElement(i.a.Fragment, null, i.a.createElement(k, x({
						alt: n.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(y, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, x({
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
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? i.a.createElement("div", {
						className: _.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(w, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit.id, s, n))
				}
			}))(Object(l.c)(O))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/lib/linkMatchers/index.ts"),
				m = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/reddit/components/SubredditNav/index.m.less"),
				v = s.n(f);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, s) => Object(p.a)(e, {
					[v.a.mActive]: t
				}, {
					[v.a.topBannerVariant]: s
				}),
				y = e => {
					let {
						children: t,
						isActive: s,
						isTopBannerVariant: n,
						...i
					} = e;
					return r.a.createElement("div", _({
						className: x(v.a.subNavTitle, s, n)
					}, i), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: v.a.navDropdownIcon
					}))
				},
				k = e => {
					let {
						className: t,
						href: s,
						isActive: n,
						to: i,
						isTopBannerVariant: a,
						...o
					} = e;
					const d = x(v.a.navLink, n, a);
					return i ? r.a.createElement(m.a, _({
						className: d,
						to: i
					}, o)) : s ? r.a.createElement(b.b, _({
						className: d,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, o)) : r.a.createElement("a", _({
						className: d
					}, o))
				},
				w = e => {
					let {
						className: t,
						isActive: s,
						...n
					} = e;
					return r.a.createElement(m.a, _({
						className: Object(p.a)(x(v.a.navLink, s), t)
					}, n))
				},
				O = e => {
					let {
						className: t,
						href: s,
						isActive: n,
						...i
					} = e;
					return s ? r.a.createElement(b.b, _({
						className: x(v.a.subNavLink, n),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, i)) : r.a.createElement("a", _({
						className: x(v.a.subNavLink, n)
					}, i))
				},
				E = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement("div", _({
						className: Object(p.a)(v.a.subNavContainer, t)
					}, s))
				},
				C = e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return r.a.createElement("div", _({
						className: Object(p.a)(v.a.subNavList, t, {
							[v.a.mIsOpen]: s
						})
					}, n))
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
					return r.a.createElement(E, {
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
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(O, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				T = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/actions/subreddit.ts"),
				D = s("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(a.c)({
				isActive: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Boolean(e.subreddits.appliedFilters.meta[s])
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(T.Y)(e, {
						subredditId: s
					})
				}
			});
			var L = Object(i.b)(R, (e, t) => ({
					onActivate: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: s,
						onActivate: n
					} = e;
					const i = Object(D.a)();
					return t ? r.a.createElement(w, {
						className: v.a.metaNavLink,
						to: t.url,
						isActive: s,
						onClick: e => {
							Object(d.J)(i) && !Object(d.R)(i) && e.preventDefault(), n()
						}
					}, F._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = s("./src/reddit/actions/economics/predictions/index.ts"),
				A = s("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				W = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				M = s("./src/reddit/helpers/trackers/predictions.ts"),
				z = s("./src/reddit/hooks/useTracking.ts"),
				U = s("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(i.d)(),
					a = Object(D.a)(),
					o = Object(z.a)(),
					d = Object(W.S)(a),
					[c, l] = Object(n.useState)(!1),
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
				Object(A.a)(t);
				return Object(n.useEffect)(() => {
					!m || c || p || d || (s(Object(B.m)(u.name)), l(!0))
				}, [m, c, p, d, s, u.name]), m && p ? r.a.createElement(w, {
					className: v.a.predictionsFilter,
					isActive: d,
					onClick: () => {
						s(Object(P.p)({
							subredditId: t,
							forceState: !1
						})), o(Object(M.i)())
					},
					to: `${u.url}predictions/`
				}, H._("Predictions", null, {
					hk: "Cv5GC"
				}), b && r.a.createElement("span", {
					className: v.a.liveIcon
				}, H._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var G = s("./src/lib/constants/index.ts");
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const K = Object(d.v)(),
				Z = [G.Sb.SUBREDDIT, G.Sb.COMMENTS, G.Sb.COLLECTION_COMMENTS],
				J = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Z.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.R)(t.pageLayer)
				});
			var X = K(Object(i.b)(J, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = n && !s && !i;
					return r.a.createElement(k, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							s && (e.preventDefault(), o())
						}
					}, V._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Q = s("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Q.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = s("./src/reddit/constants/postLayout.ts"),
				te = s("./src/reddit/constants/screenWidths.ts"),
				se = s("./src/reddit/models/Theme/index.ts"),
				ne = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const re = Object(Y.a)(e => {
				let {
					className: t,
					children: s,
					isTopBannerVariant: n,
					...i
				} = e;
				const a = Object(ne.a)(i);
				return r.a.createElement("div", {
					className: Object(p.a)(v.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "relative" : "static",
						...a.navBar.useOverlay && !n ? {
							marginTop: -26
						} : {},
						background: n ? "inherit" : Object(se.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var ie = e => r.a.createElement(re, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: v.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement($, null))),
				ae = s("./src/reddit/constants/wiki.ts"),
				oe = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === G.Sb.SUBREDDIT_WIKI, a = `wiki/${ae.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return r.a.createElement(k, {
					isActive: i,
					isTopBannerVariant: s,
					to: o,
					onClick: () => e.sendEvent(Object(oe.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", L),
				ue = Object(d.v)(),
				me = Object(a.c)({
					layout: d.U,
					widget: l.f
				}),
				pe = Object(i.b)(me);
			t.a = ue(pe(Object(o.c)(e => r.a.createElement(ie, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(X, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(le, {
				subredditId: e.subredditId
			}), r.a.createElement(q, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("SubredditSearchCarousel").then(s.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(a.e)(o.e),
						s = Object(a.e)(o.a);
					return t || s ? i.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/lib/isFakeSubreddit/index.ts"),
				v = s("./src/reddit/components/IdCard/helpers.ts"),
				_ = e => !Object(f.a)(e) || Object(v.e)(e) || Object(v.f)(e) || Object(v.g)(e),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/ModProgressModule/async.tsx"),
				k = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				w = s("./src/reddit/components/SidebarContainer/index.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = s("./src/lib/makeListingKey/index.ts"),
				j = s("./src/reddit/actions/subreddit.ts"),
				S = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/name/index.ts"),
				P = s("./src/reddit/helpers/overlay/index.ts"),
				D = s("./src/reddit/selectors/experiments/topPosts.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				R = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const L = .99;
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= L && t(s)
					}
				}
				render() {
					return o.a.createElement(R.a, {
						threshold: L,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var A = B,
				W = s("./src/lib/isUrl/index.ts"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				z = s("./src/reddit/components/FlairWrapper/index.tsx"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				H = s("./src/reddit/models/Flair/index.ts"),
				q = s("./src/reddit/models/Subreddit/index.ts"),
				G = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				V = s.n(G);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = e => e.type === H.f.Nsfw || e.type === H.f.Spoiler, J = Object(c.c)({
				post: F.G,
				subredditOrProfile: F.V
			});
			class X extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: r
					} = this.props, i = {
						post: t
					}, a = Object(W.a)(Object(U.c)(i)), d = t.flair.filter(Z);
					return o.a.createElement("div", {
						className: Object(S.a)(V.a.container, e, {
							[V.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: V.a.mainLine
					}, a && o.a.createElement("div", {
						className: V.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(U.b, i)), o.a.createElement("div", {
						className: Object(S.a)(V.a.title, !a && V.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(z.a, {
						className: V.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), o.a.createElement("div", {
						className: V.a.metaLine
					}, n && !!r && o.a.createElement("span", {
						className: V.a.meta
					}, Object(q.i)(r) ? Object(T.e)(r.displayText || r.name) : Object(T.d)(r.displayText || r.name)), o.a.createElement("span", {
						className: V.a.meta
					}, K._({
						"*": "{score} points",
						_1: "1 point"
					}, [K._plural(t.score, "score", Object(M.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: V.a.meta
					}, K._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [K._plural(t.numComments, "numComments", Object(M.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Y = Object(d.b)(J, e => ({
					openLightbox: t => e(Object(P.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(X),
				Q = s("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = s.n(Q);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = 10, se = 2, ne = Object(c.a)(F.N, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class ie extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: r,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(A, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(Y, {
							className: Object(S.a)($.a.smallPost, i),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(f.a)(Object(T.i)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: r,
						posts: i,
						redditStyle: a,
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
						[g, ...v] = h,
						_ = b ? h.slice(0, se) : v.slice(0, se),
						x = b ? h.slice(se) : v.slice(se);
					return o.a.createElement("div", {
						className: Object(S.a)($.a.container, t, {
							[$.a.redditStyle]: a
						})
					}, !b && o.a.createElement(A, {
						onPostVisible: r,
						postId: g.id
					}, o.a.createElement(N.a, {
						postId: g.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(f.a)(Object(T.i)(s)),
						trendingPost: g
					})), _.map(this.renderSmallPost), e, x.map(this.renderSmallPost), d && o.a.createElement(I.r, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, n || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(re, e => ({
					openPost: t => e(Object(P.a)(t.permalink))
				}))(ie),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = s.n(pe);
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
						const s = ge(e, t);
						return Object(F.N)(e, {
							listingKey: s
						})
					},
					subreddit: me.C
				});
			class ve extends o.a.Component {
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
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ce.k)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ce.n)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: r,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > he;
					return o.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(ae, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var _e = Object(d.b)(fe, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(j.r)({
							sort: l.bb.TOP,
							subredditName: s,
							t: l.oc.WEEK
						}))
					}
				})(Object(oe.c)(ve)),
				xe = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ye = s("./src/reddit/constants/tracking.ts"),
				ke = s("./src/reddit/selectors/seo/linksModule.ts"),
				we = s("./src/reddit/selectors/telemetry.ts"),
				Oe = s("./src/telemetry/models/Subreddit.ts");
			const Ee = e => t => ({
					...we.o(t),
					action: ye.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = e => t => s => ({
					...we.o(s),
					action: ye.c.CLICK,
					noun: Object(Oe.getSubscribeEventNoun)(e.type, t),
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
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? o.a.createElement(O.a, null, o.a.createElement(xe.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Ee,
						getSubscribeEventFactoryHandler: Ce,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Ne = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Ie = s("./src/reddit/constants/experiments.ts"),
				Te = s("./src/reddit/featureFlags/index.ts"),
				Pe = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				De = s("./src/reddit/models/Widgets/index.ts"),
				Fe = s("./src/reddit/selectors/communityFlairs.ts"),
				Re = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Le = s("./src/reddit/selectors/listings.ts"),
				Be = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ae = s.n(Be);
			const We = 250,
				Me = 270,
				ze = u.a.wrapped(w.a, "SidebarContainer", Ae.a),
				Ue = Object(c.c)({
					apiError: Le.c,
					apiPending: Le.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Fe.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Fe.c)(e, s)
					},
					isInNewModuleNCPV3Experiment: e => Object(Re.a)(e) === Ie.Se.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(me.R)(e, {
							subredditId: s
						}) && !Object(me.S)(e, {
							subredditId: s
						})
					},
					widgets: me.x
				}),
				He = Object(d.b)(Ue);
			class qe extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: De.i.CommunityList,
							shortName: n.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: De.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: De.g.Cloud,
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
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: s,
						showGovernance: n,
						showLeaderboard: r,
						showPredictionsLeaderboard: i,
						subredditId: a,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const f = Object(D.a)(c),
						v = Object(D.b)(c),
						w = Object(D.c)(c),
						C = f || v;
					let j, S;
					!!this.getPostFlairWidget() ? j = this.props.widgets : (j = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const N = this.makeRelatedCommunitiesWidget(f, v),
						I = !f,
						T = v,
						P = o.a.createElement(k.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Pe.a.FIRST,
							sizes: l.j
						});
					return o.a.createElement(ze, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, s && o.a.createElement(y.a, {
						subredditId: a,
						subredditName: d
					}), _(t) && o.a.createElement(g.a, {
						listingName: t
					}), o.a.createElement(p.a, {
						cardClassName: Ae.a.card,
						subredditId: a
					}), i && o.a.createElement(m.a, {
						subredditId: a
					}), C && o.a.createElement(O.a, null, o.a.createElement(_e, {
						subredditName: d,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: Ae.a.inFeedAd
					}, P))), C && N && o.a.createElement(O.a, null, o.a.createElement(Ne.a, {
						subredditName: d,
						truncateThreshold: Me,
						widget: N
					})), T && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(Ne.a, {
							subredditName: d,
							truncateThreshold: We,
							widget: e
						}))
					}), n && o.a.createElement(b.a, {
						className: Ae.a.card,
						subredditId: a
					}), S && o.a.createElement(O.a, null, o.a.createElement(Ne.a, {
						subredditName: d,
						widget: S
					})), r && o.a.createElement(h.a, {
						className: Ae.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(x.g, {
						subredditId: a
					}), !C && P, o.a.createElement(Se, {
						subredditId: a
					}), I && !T && j.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(Ne.a, {
							subredditName: d,
							truncateThreshold: w && s ? Me : w ? We : void 0,
							widget: e
						}))
					}), o.a.createElement(E.a, {
						adComponent: o.a.createElement(k.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Pe.a.BOTTOM,
							sizes: l.q
						})
					}))
				}
			}
			t.a = He(qe)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				o = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(o);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return r.a.createElement("div", s, r.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				m = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = s.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => i.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, E({
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
					className: O.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: y.G,
					nightmode: y.eb
				}),
				S = Object(a.b)(j)(e => i.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(_.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: h.s
				}, i.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(v.a, {
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
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(g.t, {
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
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(r.e)(e) : Object(r.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				v = s("./src/reddit/helpers/flair.ts"),
				_ = s("./src/reddit/helpers/trackers/postFlair.ts"),
				x = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				w = s.n(k);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				C = Object(h.v)({
					filterName: e => Object(h.Z)(e)[b.j],
					url: e => Object(h.fb)(e)
				}),
				j = Object(o.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				S = Object(a.b)(j),
				N = l.a.div("WidgetContent", w.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...a
					} = e;
					return i.a.createElement("li", {
						className: Object(d.a)(w.a.StyledFlair, t === x.g.Cloud && w.a.cloudDisplay, {
							[w.a.flairFilter]: s,
							[w.a["m-selected"]]: a.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(v.g)(a.flair)),
						onMouseDown: n
					}, i.a.createElement(u.b, O({}, a, {
						className: w.a.Flair,
						isFlairFilter: s,
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
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(v.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(v.c)(this.props.widget.templates[e])), this.state = {
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
					return i.a.createElement(g.r, {
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
						widget: s
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: w.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(r) || void 0, o = t.order.length > n.length || s && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = C(S(Object(m.c)(T)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = s("./src/reddit/models/Widgets/index.ts"),
				h = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = s.n(h);
			const f = d.a.div("RuleShortName", g.a),
				v = d.a.div("RuleIndex", g.a),
				_ = d.a.div("RuleTitle", g.a),
				x = d.a.div("RuleDescription", g.a),
				y = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
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
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!r;
					return i.a.createElement(f, {
						className: Object(o.a)({
							[g.a.pointerCursor]: a,
							[g.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !r ? void 0 : s
					}, i.a.createElement(p.a, null, i.a.createElement(v, {
						className: Object(o.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), i.a.createElement(_, null, `${e.rule.shortName}`), i.a.createElement("div", null, !n(e) && r && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(x, {
						className: Object(o.a)({
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
			const O = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return i.a.createElement(w, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: s + 1
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
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = x(e);
					return Object(v.f)(t)
				},
				w = e => {
					const t = y(e);
					return Object(v.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(O);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.v)(), S = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.eb)(e);
					return n || r
				},
				nigtmode: f.eb,
				subredditId: u.o,
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: i,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? E.a.widgetContentOnly : E.a.widgetContent, g = !n && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, v = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: n,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(o.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: a,
						style: {
							...v,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(o.a)(E.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(o.a)(h, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(S(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Be
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/helpers/widgets/index.tsx"),
				h = s("./src/reddit/models/Image/index.tsx"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/structuredStyles.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				y = s("./src/reddit/components/Widgets/Button/index.m.less"),
				k = s.n(y);
			const w = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === f.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: i
						} = e;
						return t && (n = i = s, r = "transparent"), {
							"--widget-button-background-color": `${r||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${i||n}`
						}
					})(e, t, s);
					const i = e.hoverState || e;
					if (i.kind === f.k.Image) r = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = i;
						t && (e = a = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...n,
						...r
					}
				},
				O = e => e.kind === f.k.Image ? k.a.imageButton : k.a.textButton,
				E = e => {
					const t = Object(b.h)(e),
						s = Object(p.h)(p.f, t);
					return s ? s.url : e.url
				},
				C = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(g.a)(e).button;
					return r.a.createElement(c.t, {
						className: O(t),
						style: w(t, s, n),
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
					href: E(e.button),
					sourceElement: x.SourceElement.SidebarWidget
				}, r.a.createElement(C, e)),
				S = m.a.wrapped(o.a, "RawHTMLDisplay", k.a);
			var N = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: v.l,
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
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/reddit/components/HumanDate/index.tsx"),
				P = s("./src/reddit/controls/TextButton/index.tsx"),
				D = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				F = s.n(D);
			const R = 100,
				L = {
					isExpanded: !1
				},
				B = m.a.wrapped(o.a, "RawHTMLDisplay", F.a),
				A = m.a.div("EventContainer", F.a),
				W = m.a.div("EventTitle", F.a),
				M = m.a.div("EventDate", F.a),
				z = m.a.div("EventLocation", F.a),
				U = m.a.div("EventDescription", F.a),
				H = m.a.wrapped(P.a, "ToggleDescription", F.a);
			class q extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = L
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > R ? r.a.createElement(U, null, t.isExpanded ? e.text : e.text.slice(0, R), r.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(U, null, e.text)
				}
			}
			var G = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(A, {
					key: `${s}-${t.title}`
				}, r.a.createElement(W, null, t.titleHtml ? r.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(M, null, r.a.createElement(T.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${s}:0${n}` : `${s}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(z, null, t.locationHtml ? r.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(q, {
					text: t.description
				})))),
				V = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Z = Object(V.c)(e => r.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				X = Object(i.b)(J),
				Y = (e, t, s) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${s}</body>`;
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Y(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var $ = X(Q),
				ee = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = s.n(ee);
			var se = m.a.div("ImageFrame", te.a),
				ne = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = s.n(ne);
			var ie = m.a.img("StyledImage", re.a);
			class ae extends r.a.Component {
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
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = r.a.createElement(se, null, r.a.createElement(ie, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.b, {
						href: s.linkUrl
					}, n) : n
				}
			}
			var oe = ae,
				de = s("./src/config.ts"),
				ce = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = s("./src/lib/opener/index.ts"),
				ue = s("./src/reddit/components/Flair/index.tsx"),
				me = s("./src/reddit/controls/InternalLink/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = s("./src/reddit/models/Flair/index.ts"),
				he = s("./src/reddit/selectors/subreddit.ts"),
				ge = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				fe = s.n(ge);
			const ve = m.a.a("ExternalLink", fe.a),
				_e = m.a.div("ModeratorListItem", fe.a),
				xe = m.a.div("Username", fe.a),
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
				we = e => r.a.createElement(xe, null, `u/${e}`),
				Oe = m.a.wrapped(me.default, "InternalLink", fe.a),
				Ee = m.a.div("LinkContainer", fe.a),
				Ce = Object(a.c)({
					userIsBanned: he.ib,
					userIsLoggedIn: _.R
				});
			var je = Object(i.b)(Ce)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n,
						userIsLoggedIn: i
					} = e;
					return r.a.createElement(d.a, {
						styles: s.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (s.mods && s.mods.length || n) && r.a.createElement(c.t, {
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
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(_e, {
						key: e.name
					}, (e => r.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, we(e.name)))(e), r.a.createElement(ye, {
						flair: ke(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Ee, null, r.a.createElement(Oe, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !i ? r.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(ve, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(ve, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Se = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Te = s.n(Ie);
			const Pe = m.a.div("WidgetContent", Te.a),
				De = m.a.wrapped(o.a, "RawHTMLDisplay", Te.a);
			var Fe = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Pe, null, r.a.createElement(De, {
					html: e.widget.textHtml || ""
				}))),
				Re = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Le = e => r.a.createElement(Re.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Fe;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return Z;
						case "calendar":
							return G;
						case "image":
							return oe;
						case "custom":
							return $;
						case "post-flair":
							return Se.a;
						default:
							return Le
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, s) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.c,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.Y,
				hideNSFWPref: b.G,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: c.W,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const n = t === d.a.upvoted ? Object(i.jb)(s) : Object(i.v)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(i.fb)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: n,
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: n,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/SubredditWiki.json");
			const i = (e, t) => Object(n.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function d(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(i.b)(n)(e => {
					const {
						featureEnabled: n,
						...i
					} = e, a = i;
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./src/lib/isFakeSubreddit/index.ts"), s("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var n;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(r);
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
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "q", (function() {
				return o
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "l", (function() {
				return p
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "k", (function() {
				return x
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "f", (function() {
				return w
			}));
			var n = s("./src/reddit/models/Prediction/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				a = "predictions",
				o = e => ({
					...Object(r.o)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				d = e => {
					let {
						pollId: t,
						selectedNumberCoins: s,
						totalStakeAmount: n
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(r.J)(e, t, !1, void 0, s),
						goldPurchase: {
							numberCoins: n
						}
					})
				},
				c = e => {
					let {
						pollId: t,
						selectedNumberTokens: s
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(r.J)(e, t, !1, void 0, void 0, s)
					})
				},
				l = e => {
					let {
						pollId: t,
						currency: s,
						amount: a
					} = e;
					return e => {
						const o = s === n.a.Coins ? a : void 0,
							d = s === n.a.Tokens ? a : void 0;
						return {
							...Object(r.o)(e),
							source: i,
							action: "close",
							noun: "prediction_modal",
							poll: Object(r.J)(e, t, !1, o, d)
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
						source: a,
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
						source: a,
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
				v = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				_ = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				x = () => e => ({
					...Object(r.o)(e),
					source: a,
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
				w = () => e => ({
					...Object(r.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(r.kb)(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const o = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				d = (e, t) => s => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/sortBy.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/wiki.ts");
			const a = e => {
				return r()(e, e => `${e.path}/`.startsWith(`${i.i}/`) ? `\0${e.path}` : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					s = [];
				return a(e).forEach(e => {
					const n = {
							...e,
							children: []
						},
						r = n.parent ? t.get(n.parent) : null;
					r ? r.children.push(n) : s.push(n), t.set(n.path, n)
				}), s
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: s,
					subredditName: n,
					wikiPageName: r
				} = e;
				return `[${n}]--[${r}]--[rev1:${s}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/wiki.ts");
			const r = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${n.c}}$`),
				i = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!i.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const s = e.toLowerCase(),
						i = s.split("/")[0],
						o = n.b.has(i),
						d = n.f.has(i) && s !== n.h && s !== n.k;
					if (o || d) return a.RestrictedPageName;
					if (!r.test(s)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === s)) return a.PageAlreadyExists
					}
					return s.length > n.d ? a.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				r = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(o);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
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
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(m.a)(s, u.bb.HOT, {});
					return r.a.createElement(p.a, {
						listingKey: n,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				v = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/constants/wiki.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				w = s("./src/reddit/components/JumpToContent/index.tsx"),
				O = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				E = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				C = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				j = s.n(C);

			function S(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(w.a, null), n.createElement(E.a, {
					isModHub: !1,
					className: j.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(O.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var N = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				I = s.n(N);
			class T extends r.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: n
					} = e, {
						wikiSubRoute: i,
						wikiPageName: a
					} = s, o = n[v.T], d = n[v.U], c = v.V in n;
					switch (i) {
						case _.m.Create:
						case _.m.Edit:
							return r.a.createElement(g.a, {
								contentClassName: I.a.wikiPageEditorContent,
								isCreation: i === _.m.Create,
								subredditName: t,
								topBarClassName: I.a.communityWikiTopBar,
								wikiPageName: a
							});
						case _.m.Revisions:
							return r.a.createElement(k.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? r.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? r.a.createElement(f.a, {
								revisionId: o ? Object(y.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? r.a.createElement(S, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var P = Object(x.v)()(T),
				D = s("./src/reddit/constants/componentSizes.ts"),
				F = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				R = s("./src/reddit/layout/page/Listing/index.tsx"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts");
			const A = Object(x.v)(),
				W = Object(i.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: s
						} = t;
						return Object(B.g)(e, s.params.subredditName)
					},
					layout: x.U,
					over18Pref: B.lb,
					subreddit: (e, t) => {
						let {
							match: s
						} = t;
						return Object(L.C)(e, {
							subredditName: s.params.subredditName || _.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.subredditName || _.e
					},
					wikiPageName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.wikiPageName || _.i
					}
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class M extends r.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: n
					} = this.props, i = !!s && s.isNSFW && !B.lb, a = Object(F.a)(t, i, n);
					if (a) return r.a.createElement(c.default, a);
					const o = `/r/${n}/`;
					return r.a.createElement(R.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: D.h,
						navBar: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: D.h,
							subredditOrProfile: s,
							url: o
						}), r.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: o
						})),
						content: r.a.createElement(P, {
							subredditName: n
						}),
						sidebar: s && r.a.createElement(b, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = A(W(M))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => r.e[Object(i.U)(e, {})] === r.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.tb
				}) === n.Sc.Treatment
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts"),
				o = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(i.f)(e),
					experimentName: n.rc
				}), a.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(i.f)(e),
					experimentName: n.qc
				}), a.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "p", (function() {
				return c
			})), s.d(t, "q", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "n", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "g", (function() {
				return k
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				a = (e, t) => {
					var s;
					const {
						subredditName: n
					} = t;
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.directory[n.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.api.wiki.pending[s.toLowerCase()]
				},
				d = (e, t) => {
					var s;
					const n = Object(r.a)(t);
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.pages[n]
				},
				c = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.pages.subredditWiki.revisions.listings[s]
				},
				l = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[s]
				},
				u = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[s]
				},
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, t) => {
					let {
						key: s
					} = t;
					return e.pages.subredditWiki.diff[s]
				},
				b = (e, t) => {
					const s = Object(r.a)(t);
					return e.pages.subredditWiki.pageSettings[s]
				},
				h = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[s.toLowerCase()]
				},
				g = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						r = e.pages.subredditWiki.wikiContributors.listing,
						a = r.userOrder[n],
						o = r.models[n];
					return a ? a.map(e => o[e]) : i
				}),
				f = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[s.toLowerCase()]
				},
				v = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[s.toLowerCase()]
				},
				_ = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				x = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						r = e.pages.subredditWiki.wikiBannedContributors.listing,
						a = r.userOrder[n],
						o = r.models[n];
					return a ? a.map(e => o[e]) : i
				}),
				y = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.d9764b80de78bf0d00e8.js.map