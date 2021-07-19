// https://www.redditstatic.com/desktop2x/MembershipPaywallPage.29f301203688d1b72bfc.js
// Retrieved at 7/19/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MembershipPaywallPage"], {
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
					var i, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						c = !o && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						g = !a && !m && !u && !p && /linux/i.test(t),
						_ = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = s(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !v && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? i = {
						name: "Opera",
						opera: e,
						version: x || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? i = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? i = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? i = {
						name: "Opera Coast",
						coast: e,
						version: x || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? i = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? i = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? i = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? i = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? i = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? i = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? i = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (i = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, _ ? (i.msedge = e, i.version = _) : (i.msie = e, i.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? i = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? i = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? i = {
						name: "Microsoft Edge",
						msedge: e,
						version: _
					} : /vivaldi/i.test(t) ? i = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : m ? i = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? i = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (i = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = e, i.osname = "Firefox OS")) : l ? i = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? i = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? i = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? i = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: x || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (i = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (i.touchpad = e)) : /bada/i.test(t) ? i = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? i = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? i = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? i = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? i = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? i = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (i = {
						name: "Safari",
						safari: e
					}, x && (i.version = x)) : r ? (i = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, x && (i.version = x)) : i = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !i.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && x && (i.version = x)) : !i.opera && /gecko\//i.test(t) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || s(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || !a && !i.silk ? !i.windowsphone && r ? (i[r] = e, i.ios = e, i.osname = "iOS") : f ? (i.mac = e, i.osname = "macOS") : w ? (i.xbox = e, i.osname = "Xbox") : b ? (i.windows = e, i.osname = "Windows") : g && (i.linux = e, i.osname = "Linux") : (i.android = e, i.osname = "Android");
					var C = "";
					i.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (i.osversion = C);
					var k = !i.windows && C.split(".")[0];
					return v || c || "ipad" == r || a && (3 == k || k >= 4 && !y) || i.silk ? i.tablet = e : (y || "iphone" == r || "ipod" == r || a || o || i.blackberry || i.webos || i.bada) && (i.mobile = e), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function i(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function r(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = i(e, (function(e) {
							var s = t - n(e);
							return i((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, n, i) {
					var a = s;
					"string" == typeof n && (i = n, n = void 0), void 0 === n && (n = !1), i && (a = t(i));
					var o = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([o, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/draft-js/dist/Draft.css": function(e, t, s) {},
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function i(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === i(e)
			}

			function a(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var o = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var c = {
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
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function o(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(o(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(o(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(o(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(o(t.tpl_host_fuzzy_test), "i");
				var c = [];

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
						if (e.__compiled__[t] = n, "[object Object]" === i(s)) return ! function(e) {
							return "[object RegExp]" === i(e)
						}(s.validate) ? r(s.validate) ? n.validate = s.validate : l(t, s) : n.validate = function(e) {
							return function(t, s) {
								var n = t.slice(s);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? n.normalize = s.normalize : s.normalize ? l(t, s) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === i(e)
						}(s) ? l(t, s): c.push(t)
					}
				})), c.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var m = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function u(e, t) {
				var s = e.__index__,
					n = e.__last_index__,
					i = e.__text_cache__.slice(s, n);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = n + t, this.raw = i, this.text = i, this.url = i
			}

			function p(e, t) {
				var s = new u(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || o.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, o, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, i, r, a, o, c;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (t = o.exec(e));)
						if (i = this.testSchemaAt(e, t[2], o.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + i;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = a)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) s.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return s.length ? s : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, s) {
					return e !== s[t - 1]
				})).reverse(), m(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, m(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, s) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = s("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = s("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = s("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = s("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var i = null == e ? 0 : e.length;
				for (n && i && (s = e[--i]); i--;) s = t(s, e[i], i, e);
				return s
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_copyArray.js"),
				i = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return i(n(e))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForOwnRight.js"),
				i = s("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = i
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var n = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var i = -1, r = e.length; ++i < r;) {
					var a = e[i],
						o = t(a);
					if (null != o && (void 0 === c ? o == o && !n(o) : s(o, c))) var c = o,
						d = a
				}
				return d
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return n(e, (function(e, n, i) {
					t(e, n, i) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForRight.js"),
				i = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && n(e, t, i)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = n
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + s(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, i, r) {
				for (var a = -1, o = n(s((t - e) / (i || 1)), 0), c = Array(o); o--;) c[r ? o : ++a] = e, e += i;
				return c
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, i) {
				return i(e, (function(e, i, r) {
					s = n ? (n = !1, e) : t(s, e, i, r)
				})), s
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_shuffleSelf.js"),
				i = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(i(e))
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, i) {
				for (var r = e.length, a = i ? r : -1;
					(i ? a-- : ++a < r) && t(e[a], a, e););
				return s ? n(e, i ? 0 : a, i ? a + 1 : r) : n(e, i ? a + 1 : 0, i ? r : a)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && n(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, a) {
					return a && "number" != typeof a && i(t, s, a) && (s = a = void 0), t = r(t), void 0 === s ? (s = t, t = 0) : s = r(s), a = void 0 === a ? t < s ? 1 : -1 : r(a), n(t, s, a, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = n
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var s = -1,
					i = e.length,
					r = i - 1;
				for (t = void 0 === t ? i : t; ++s < t;) {
					var a = n(s, r),
						o = e[a];
					e[a] = e[s], e[s] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				a = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? i(e, t, s) : void 0 === t) ? 1 : o(r(t), 0);
				var c = null == e ? 0 : e.length;
				if (!c || t < 1) return [];
				for (var d = 0, l = 0, m = Array(a(c / t)); d < c;) m[l++] = n(e, d, d += t);
				return m
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				i = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = i(s)) == s ? s : 0), void 0 !== t && (t = (t = i(t)) == t ? t : 0), n(i(e), t, s)
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? i(e, n(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_escapeHtmlChar.js"),
				i = s("./node_modules/lodash/toString.js"),
				r = /[&<>"']/g,
				a = RegExp(r.source);
			e.exports = function(e) {
				return (e = i(e)) && a.test(e) ? e.replace(r, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				i = s("./node_modules/lodash/_baseFilter.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? n : i)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				i = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(i(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				i = s("./node_modules/lodash/isArrayLike.js"),
				r = s("./node_modules/lodash/isString.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = s("./node_modules/lodash/values.js"),
				c = Math.max;
			e.exports = function(e, t, s, d) {
				e = i(e) ? e : o(e), s = s && !d ? a(s) : 0;
				var l = e.length;
				return s < 0 && (s = c(l + s, 0)), r(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseExtremum.js"),
				i = s("./node_modules/lodash/_baseGt.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, r(t, 2), i) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				i = s("./node_modules/lodash/_baseEachRight.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				o = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = o(e) ? n : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, i)
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayShuffle.js"),
				i = s("./node_modules/lodash/_baseShuffle.js"),
				r = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (r(e) ? n : i)(e)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? i(e, n(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseToString.js"),
				i = s("./node_modules/lodash/_castSlice.js"),
				r = s("./node_modules/lodash/_charsEndIndex.js"),
				a = s("./node_modules/lodash/_stringToArray.js"),
				o = s("./node_modules/lodash/toString.js"),
				c = s("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, s) {
				if ((e = o(e)) && (s || void 0 === t)) return e.slice(0, c(e) + 1);
				if (!e || !(t = n(t))) return e;
				var d = a(e),
					l = r(d, a(t)) + 1;
				return i(d, 0, l).join("")
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				i = 0;
			e.exports = function(e) {
				var t = ++i;
				return n(e) + t
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var i = s ? s.call(n, e, t) : void 0;
				if (void 0 !== i) return !!i;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					a = Object.keys(t);
				if (r.length !== a.length) return !1;
				for (var o = Object.prototype.hasOwnProperty.bind(t), c = 0; c < r.length; c++) {
					var d = r[c];
					if (!o(d)) return !1;
					var l = e[d],
						m = t[d];
					if (!1 === (i = s ? s.call(n, l, m, d) : void 0) || void 0 === i && l !== m) return !1
				}
				return !0
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
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/currency/cleanNumber/index.ts");

			function i(e, t) {
				const s = Object(n.a)(e),
					i = parseInt(s) / 100;
				return Math.floor(i) !== i || t ? i.toFixed(2) : String(i)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const i of e) t++, s += i.length, n[t] = s;
					return n
				},
				i = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const i of e) {
						for (let e = 0; e < i.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				i = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(n.a)(a.a),
				c = Object(n.a)(a.b),
				d = Object(n.a)(a.c),
				l = Object(n.a)(a.d),
				m = Object(n.a)(a.e),
				u = Object(n.a)(a.f),
				p = Object(n.a)(a.g),
				h = Object(n.a)(a.h),
				b = Object(n.a)(a.i),
				f = e => Object(i.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(o.d, null, r.a.createElement(o.h, null, r.a.createElement(d.a, null, r.a.createElement(o.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(o.b, null)))), r.a.createElement(o.k, null, r.a.createElement(o.o, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(o.f, null, !e.hideCancelButton && r.a.createElement(o.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(o.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			const {
				fbt: r
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return i.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, r._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/Confetti/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_22MTLJBZK8cANpC_Qc0W8s",
				piece: "_3RfPsEAbZKkVHvjLqOq0mZ"
			}
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, s) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, s) {
			"use strict";
			var n, i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/currency/centsToDollars/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/components/Governance/Token/index.tsx"),
				m = s("./src/reddit/helpers/governance/tokens.ts"),
				u = s("./src/reddit/selectors/crypto/points.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(n || (n = {}));
			const h = (e, t) => {
					if (e) switch (t) {
						case n.Monthly:
							return p.fbt._("{price}/mo", [p.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				b = (e, t) => {
					if (e) switch (t) {
						case n.Monthly:
							return p.fbt._("{price} / month", [p.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var f = s("./src/reddit/components/Economics/Price/index.m.less"),
				g = s.n(f);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = ({
				subredditId: e,
				pointPrice: t
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
				className: g.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: s,
					monthly: i,
					subredditId: l
				} = e, p = Object(a.e)(e => Object(u.b)(e, l)), f = e.dollarPrice && `$${Object(c.a)(e.dollarPrice,!0)}`, v = e.tokenPrice && p && Object(d.a)(Object(m.b)(e.tokenPrice, null == p ? void 0 : p.displayConversion)) + (s ? "" : " " + p.name);
				if (!f && !v) return null;
				const y = i ? n.Monthly : n.Once;
				return r.a.createElement("span", {
					className: Object(o.a)(t, g.a.price)
				}, f && v ? _._("{dollar-price} or {point-price}", [_._param("dollar-price", h(f, y)), _._param("point-price", r.a.createElement(x, {
					subredditId: l,
					pointPrice: h(v, y)
				}))], {
					hk: "2Gif0l"
				}) : f ? b(f, y) : v ? r.a.createElement(x, {
					subredditId: l,
					pointPrice: b(v, y)
				}) : null)
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/governance/errorToast.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/ApiContext.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/endpoints/governance/products/badges.ts"),
				u = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				b = s.n(h);
			const f = "subreddit-premium-purchase-braintree";
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						loading: !0,
						submitting: !1
					}, this.getId = () => f + this.props.productId
				}
				componentDidMount() {
					if (this.mounted = !0, this.props.subreddit) {
						const e = this.props.apiContext(),
							t = this.props.subreddit.id;
						Object(u.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: s => Object(m.d)(e, {
								nonce: s,
								subredditId: t,
								price: this.props.price,
								products: [{
									productId: this.props.productId,
									quantity: "1"
								}]
							}),
							onCancel: () => this.mounted && this.setState({
								submitting: !1
							}),
							onClientLoad: () => this.mounted && this.setState({
								loading: !1
							}),
							onError: e => {
								this.mounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), console.error(e))
							},
							onSubmitting: () => {
								this.mounted && this.setState({
									submitting: !0
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId,
									...p.defaults(e),
									subreddit: p.subreddit(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful()
						})
					}
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				render() {
					return i.a.createElement("div", {
						className: Object(a.a)(this.props.className, b.a.container)
					}, i.a.createElement("div", {
						className: Object(a.a)(b.a.button, {
							[b.a.loading]: this.state.loading,
							[b.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && i.a.createElement(l.a, {
						className: b.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(d.b)(Object(r.b)(void 0, (e, {
				subreddit: t
			}) => ({
				onError: t => Object(o.a)(e, t)
			}))(Object(c.c)(g)))
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBlockchainCheckoutModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = i
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less": function(e, t, s) {
			e.exports = {
				container: "i0lchXJA5Dup_Op8k_UvG",
				description: "RyMUILAlWHIP5yHrsIRUK",
				rhs: "_2Byh-FeUhk5NLLqInuciri",
				monthlyText: "_1UJ2XLb7zAyZJm2IG70b8O"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQcP2nhhN4KlRXQL7Yyat",
				link: "JFz_onNhRvDkA39DMDGLr",
				linkLast: "_2tWZsJd91sgL5Q3C1vHdWm"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_36KvgN4Tgsg1mjKKUnMkcE",
				container: "_19sRWT77cnRhheoNPG1ZE6",
				text: "z7BZWyDlEY5SQkMiUwNSS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				alreadyPurchased: "_3kTN5B6iN8oIgydXPz0rqC",
				button: "MDdpUCHANWQuqaVGoEpVs",
				buttonWithoutCards: "_3VR87fo8ZjKY1XoyNqNTvE",
				container: "_3tReAPan_-M4AovA4DBue1",
				loading: "_2jk-SZSEsufLuRcA5wvyng",
				loadingIcon: "_3pQ_MVZfUDaXtcf576C9k7",
				loginButton: "_3rTymlG8MJZxRgjRsbeSOS",
				loginMessage: "_3CpWRzyK4_woOmAW99eEDr",
				submitting: "_322vbjtCZwKRqc4NzIonTv"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less": function(e, t, s) {
			e.exports = {
				requiresMobile: "_1W-SUlHSYUhCTSrV3ZsOeJ",
				selectPaymentBox: "_1NpPjn9SLo_z__HXuYSQYf",
				selectPaymentTitleBox: "g_agLLmnc-Z1voaKrEx_n",
				selectPaymentTitle: "_3PrvKB6dbwtJlsf2wNE6X",
				paymentContainer: "_2C6O-Mg9CPpXYZJkAlmkYO",
				paymentAmount: "_2i5oESQxrhg5L2yj6yUeuO",
				tokenPurchase: "_2-2nbzwdCx50Yxx3AXJUCY",
				token: "_3IsFHSaHpAk_G3z-ncqt9G",
				notEnoughTokens: "_3UP0wAWXgMEZmV9oytBfkm",
				tokenPurchaseButton: "tTJPkeFQiDABhAoE46jBQ",
				dollarPurchase: "_10je0H39zRuRzLWsSeGecr"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less": function(e, t, s) {
			e.exports = {
				badgeImage: "_24nb1Wn-HQrlcIMVXggPWP",
				crown: "_1C6OFdtgaIgK_TyogeJOgp"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less": function(e, t, s) {
			e.exports = {
				cart: "PxUAb5u5curFoJmkN43pD",
				container: "_1rguiWal__5IcFoZwSe0rS",
				content: "_1bK-Mw7EE5ZnMei8Kub2Kk",
				footer: "_3GBKrS5u4-TjVoWpDmlXC-",
				payment: "wW8kQRKEVGkGiLaRVyxmA"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/fastdom/index.ts"),
				o = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = s.n(o);
			const d = 250,
				l = 100;
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(c.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let n = 0; n < l; n++) this.createPiece(t, s);
						for (let n = 0; n < d - l; n++) window.setTimeout(() => this.createPiece(t, s), 1e4 * n / (d - l))
					}, this.createPiece = (e, t) => {
						a.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								n = (6 * Math.random() + 4) * t / 1e3;
							s.className = c.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(s), this.restartPiece(s, n, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, n) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
							a.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * n + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								a.a.write(() => {
									e.style.top = s + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, s, n), 1e3 * t)
						}
					}
				}
				shouldComponentUpdate(e) {
					return e.letItRain && !this.props.letItRain && setTimeout(() => this.renderConfetti(), 0), !1
				}
				componentWillUnmount() {
					this.el = void 0
				}
				render() {
					return i.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var u = s("./src/reddit/featureFlags/component.tsx"),
				p = s("./src/reddit/hooks/useSafeState.ts"),
				h = s("./src/reddit/selectors/economics.ts");
			t.a = Object(u.a)("spSpecialMemberships", (function(e) {
				const t = Object(n.useRef)(!0),
					[s, a] = Object(p.a)(!1, t),
					o = Object(r.e)(t => Object(h.w)(t, e.subredditId)),
					c = Object(n.useRef)(o);
				return Object(n.useEffect)(() => () => {
					t.current = !1
				}, []), Object(n.useEffect)(() => {
					c.current === h.a.NotSubscribed && o === h.a.Subscribed && (a(!0), setTimeout(() => {
						a(!1)
					}, 1e4)), c.current = o
				}, [o]), o === h.a.Subscribed ? i.a.createElement(m, {
					letItRain: s
				}) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, s) {
			e.exports = {
				bling1: "_3bFpAdmzeju5Ql4apA72Mz",
				pulse: "_14AnDN_X0RSUfV9D1Pe9X9",
				bling2: "_-8SkYF0AWUhZMShvTAty8",
				bling3: "_33JifCWcX_crkurifB5pzo",
				container: "_3gI6KjxK9w-BF4adKznqm6",
				crown: "_2UUIJaaZ6FDtWk-CQ_bAJF",
				crownTilt: "m3mBh304aV8eRhpVYDtv",
				crownImg: "_3UjxD8eArSGPOK9ydFdB66",
				crownTiltImg: "_335XoNCIgdnw1NeVMSD3YB",
				defaultIcon: "_1UJ_7ZuaT1wJZzUY6CLslm",
				icon: "_27dkKf4zi-Ny4-FV0XKx0d",
				largeContainer: "_2vtPk3WzODfPV6T2uKOi9x",
				largeBling1: "tQV0dex-2wW9l95VW59ym",
				largeBling2: "_22o1BzEAX778WumBKRfDae",
				largeBling3: "MqH9i4M4OAiAmvS-AdBJx",
				largeCrown: "_30sWCOTB9B8ZfsCDuOoMvQ",
				largeCrownImg: "_1hUveqwJI6eda9EpmMvUJI",
				largeDefaultIcon: "_3_OgvcHTKNX0og_Fw-oHOc",
				largeIcon: "_18B8fdJn2VAl1XHi5AdcVc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Bling/index.tsx"),
				o = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				d = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				l = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = s.n(l);
			const u = {
				regular: {
					bling1: m.a.bling1,
					bling2: m.a.bling2,
					bling3: m.a.bling3,
					container: m.a.container,
					crown: m.a.crown,
					crownImg: m.a.crownImg,
					defaultIcon: m.a.defaultIcon,
					icon: m.a.icon
				},
				large: {
					bling1: m.a.largeBling1,
					bling2: m.a.largeBling2,
					bling3: m.a.largeBling3,
					container: m.a.largeContainer,
					crown: m.a.largeCrown,
					crownImg: m.a.largeCrownImg,
					defaultIcon: m.a.largeDefaultIcon,
					icon: m.a.largeIcon
				}
			};

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					s = u[e.size || "regular"],
					n = e.subreddit && e.subreddit.primaryColor;
				return i.a.createElement("div", {
					className: Object(r.a)(s.container, e.className)
				}, e.subreddit ? i.a.createElement("img", {
					className: s.crownImg,
					src: Object(d.a)(e.subreddit, "Crown.gif")
				}) : i.a.createElement(c.a, {
					className: s.crown
				}), i.a.createElement(a.a, {
					className: s.bling1
				}), i.a.createElement(a.a, {
					className: s.bling2
				}), i.a.createElement(a.a, {
					className: s.bling3
				}), t ? i.a.createElement("img", {
					className: s.icon,
					src: t,
					style: {
						backgroundColor: n
					}
				}) : i.a.createElement(o.a, {
					className: s.defaultIcon,
					style: {
						backgroundColor: n
					}
				}))
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(o);
			t.a = a.a.wrapped(e => i.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/selectors/crypto/points.ts"),
				l = s("./src/reddit/components/Governance/Token/index.m.less"),
				m = s.n(l);
			const u = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(r.b)(u)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const n = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					r = `${o.a.assetPath}/${n}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return i.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return i.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-SubscriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), s.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), s.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), s.e("reddit-components-Governance-TransactionModals-SubscriptionModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = i
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/usernameAvailable.ts"),
				m = s("./src/reddit/constants/colors.ts"),
				u = s("./src/reddit/controls/FormFields/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = s("./src/reddit/icons/svgs/Info/index.tsx"),
				f = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				g = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				_ = s.n(g),
				x = s("./node_modules/fbt/lib/FbtPublic.js");
			const v = 2,
				y = 20;
			var w;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(w || (w = {}));
			class C extends a.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > v && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > v) {
							switch (this.props.usernameAvailability[e]) {
								case l.b.Available:
									return w.Invalid;
								case l.b.Error:
									return w.Error;
								case l.b.Unavailable:
									return w.Valid;
								default:
									return w.Searching
							}
						}
						return w.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === w.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return a.a.createElement("div", {
						className: Object(d.a)(_.a.container, this.props.className)
					}, a.a.createElement(u.c, {
						redditStyle: !0,
						className: _.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: y,
						style: {
							borderColor: k(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case w.Error:
								return a.a.createElement(b.a, {
									className: _.a.icon,
									style: {
										fill: m.b.notice
									}
								});
							case w.Invalid:
								return a.a.createElement(f.a, {
									className: _.a.icon,
									style: {
										fill: m.b.warning
									}
								});
							case w.Searching:
								return a.a.createElement(p.a, {
									className: _.a.loadingIcon,
									sizePx: 8
								});
							case w.Valid:
								return a.a.createElement(h.a, {
									className: _.a.icon
								});
							default:
								return null
						}
					}(e), a.a.createElement("div", {
						className: _.a.message,
						style: {
							color: k(e)
						}
					}, function(e) {
						switch (e) {
							case w.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case w.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function k(e) {
				switch (e) {
					case w.Error:
						return m.b.notice;
					case w.Invalid:
						return m.b.warning
				}
			}
			const E = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(o.b)(E, e => ({
				onCheckUsername: i()(t => e(Object(l.f)({
					username: t
				})), 250)
			}))(C)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
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
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(f);
			const _ = d.a.wrapped(u.a, "_Dropdown", g.a),
				x = Object(m.a)(_),
				v = d.a.button("MenuButton", g.a),
				y = d.a.wrapped(p.b, "DropdownRow", g.a),
				w = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				C = Object(a.b)(w, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), r.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/memoize.js"),
				r = s.n(i),
				a = s("./node_modules/lodash/throttle.js"),
				o = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/config.ts"),
				f = s("./src/lib/addQueryParams/index.ts");
			const g = "pg";

			function _(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/economics.ts"),
				w = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				k = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let E;

			function j() {
				E || (E = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var I = s("./node_modules/lodash/debounce.js"),
				N = s.n(I),
				O = s("./src/lib/classNames/index.ts"),
				P = s("./src/reddit/icons/svgs/Search/index.tsx"),
				S = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				F = s.n(M);
			const T = 400;
			class R extends d.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = N()(() => {
						this.props.onChange(this.state.query)
					}, T), this.focusOnInput = () => {
						this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
					}
				}
				componentDidMount() {
					this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
				}
				render() {
					const {
						isNightMode: e
					} = this.props, {
						query: t
					} = this.state, s = `powered-by-giphy-${e?"dark":"light"}.png`;
					return d.a.createElement("div", {
						className: Object(O.a)(F.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: F.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(P.a, {
						className: F.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: F.a.searchInput,
						placeholder: n.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: F.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${b.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const A = Object(m.c)({
				isNightMode: S.V
			});
			var z = Object(l.b)(A)(R),
				B = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				D = s.n(B);
			const L = 4,
				H = r()((function() {
					const e = Object(f.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: b.a.giphyApiKey,
						rating: g
					});
					return fetch(e).then(_)
				}));
			class V extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						columns: [
							[],
							[]
						],
						columnHeights: [0, 0],
						loading: !0,
						nextOffset: null,
						query: ""
					}, this.mounted = !1, this.onQueryChange = e => {
						this.props.sendEvent(t => ({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? w.subredditById(t, this.props.subreddit.id) : void 0,
							post: w.currentPost(t),
							search: {
								query: e
							},
							...w.defaults(t)
						})), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = o()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = w.defaults(e);
							return {
								...t,
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? w.subredditById(e, this.props.subreddit.id) : void 0,
								post: w.currentPost(e),
								actionInfo: {
									...t.actionInfo,
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								}
							}
						});
						const t = this.props.editorState,
							s = Object(k.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), C.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), j()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					H().then(e => {
						this.state.query || this.addGiphyResults(e)
					})
				}
				async loadMoreResults() {
					const {
						loading: e,
						nextOffset: t,
						query: s
					} = this.state;
					!e && s && null !== t && (await
						function(e) {
							return j(), E.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(f.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: b.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || g
							});
							return fetch(t).then(_)
						}({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(n.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						s = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const n = this.getSimplifiedResult(e),
							i = s.reduce((e, t, n) => t < s[e] ? n : e, 0);
						t[i].push(n), s[i] += n.fixedWidthHeight + L
					});
					const n = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: n < e.pagination.total_count ? n : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						s = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						n = s ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: n.url,
						hasDownsizedImage: s,
						width: parseInt(n.width),
						height: parseInt(n.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t
					} = this.state;
					return d.a.createElement("div", {
						className: D.a.tooltip
					}, d.a.createElement("div", {
						className: D.a.header
					}, d.a.createElement(z, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: D.a.searchBox
					}), d.a.createElement(x.a, {
						className: D.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), d.a.createElement("div", {
						className: D.a.body,
						onScroll: this.onScroll
					}, d.a.createElement("div", {
						className: D.a.results
					}, e.map((e, t) => d.a.createElement("div", {
						className: D.a.column,
						key: t
					}, e.map(e => d.a.createElement("button", {
						className: D.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						}
					}, d.a.createElement("img", {
						className: D.a.gifResultImage,
						src: e.url
					})))))), t && d.a.createElement("div", {
						className: D.a.loadingSpinner
					}, d.a.createElement(h.a, {
						sizePx: 20,
						center: !0
					})), d.a.createElement("div", {
						className: D.a.whiteScrim
					})))
				}
			}
			const W = Object(m.c)({
				hasGifProduct: (e, {
					subreddit: t
				}) => Object(y.v)(e, t.id)
			});
			t.a = Object(p.c)(Object(l.b)(W, e => ({
				showErrorToast: t => e(Object(u.f)({
					text: t,
					kind: v.b.Error,
					duration: 5e3
				}))
			}))(V))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less": function(e, t, s) {
			e.exports = {
				searchBox: "_-2nyH4l01LGXG6tNoKG8G",
				searchIconButton: "yQXSQNUp_yRjNBBUQPSFc",
				searchIcon: "_2gnFB-wGJHoP0-cUWBWnU5",
				searchInput: "_3MrGxIAeUWB6Fc14Qw0jb2",
				poweredByGiphy: "_3zbeeNQTcpxZMmdsMopEux"
			}
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/clamp.js"),
				i = s.n(n),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/components/Scroller/getDocumentTop.ts"),
				m = s("./src/reddit/components/Scroller/Simple.tsx");
			const u = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (s, n) => {
								const i = t.get(s);
								return e.set(s, i.concat(n)), t
							},
							remove: (s, n) => {
								const i = t.get(s);
								return e.set(s, i.filter(e => e !== n)), t
							}
						};
					return t
				})(),
				p = (() => {
					const e = e => a()(() => {
							d.a.read(() => {
								const t = (e => Object(m.a)(e) ? Object(l.a)() : e.scrollTop)(e);
								u.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (s, n) => {
							if (!u.get(s).length) {
								const n = e(s);
								t.set(s, n), s.addEventListener("scroll", n)
							}
							u.add(s, n)
						},
						off: (e, s) => {
							if (u.remove(e, s), !u.get(e).length) {
								const s = t.get(e);
								s && e.removeEventListener("scroll", s)
							}
						}
					}
				})();
			class h extends c.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const s = this.props.scrollRange[0],
							n = this.props.scrollRange[1],
							r = i()(e, s, n),
							a = Math.min(Math.floor((r - s) / (n - s) * 1e3), 999);
						return {
							...t,
							styles: {
								...t.styles,
								animationDelay: `-${a}s`
							}
						}
					}), this.state = {
						styles: {
							animationDelay: "0s",
							animationDuration: "1000s",
							animationPlayState: "paused",
							backfaceVisibility: "hidden"
						}
					}
				}
				shouldComponentUpdate(e, t) {
					return this.state.styles.animationDelay !== t.styles.animationDelay
				}
				componentDidMount() {
					p.on(this.getContainer(), this.updateScrollPosition)
				}
				componentWillUnmount() {
					p.off(this.getContainer(), this.updateScrollPosition)
				}
				render() {
					return this.props.children(this.state.styles)
				}
			}
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, s) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return K
			}));
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				r = s("./node_modules/lodash/isNil.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				d = s("./node_modules/react-dom/index.js"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/request-idle-callback/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				f = s.n(b);
			const g = 500,
				_ = 1e3,
				x = 40;
			var v;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(v || (v = {}));
			const y = () => ({
					[v.Max10]: 0,
					[v.Max20]: 0,
					[v.Max30]: 0,
					[v.Max40]: 0,
					[v.Max50]: 0,
					[v.Max60]: 0
				}),
				w = [v.Max10, v.Max20, v.Max30, v.Max40, v.Max50, v.Max60],
				C = e => ({
					eventHandler: e
				});

			function k({
				fn: e,
				subscriber: t,
				timeout: s
			}) {
				const n = [];
				let i, r, a;
				const o = () => {
						if (n.length < x) return;
						const e = y(),
							s = Math.min(_, n.length),
							i = n.splice(0, s);
						n.splice(0, n.length);
						const r = i[s - 1] - i[0];
						for (let t = i.shift(); i.length > 0; t = i.shift()) {
							const s = i[0] - t,
								n = Math.min(60, Math.ceil(1e3 / s));
							e[n <= 10 ? v.Max10 : 60 === n ? v.Max60 : w[Math.ceil(n / 10) - 1]] += s
						}
						const a = y();
						for (const t in e) a[t] = e[t] / r;
						t(a)
					},
					c = () => {
						void 0 !== a && (window.clearTimeout(a), a = void 0)
					},
					d = () => {
						void 0 !== i && (cancelAnimationFrame(i), i = void 0), void 0 !== r && (window.clearInterval(r), r = void 0), c(), o()
					},
					l = () => {
						i = requestAnimationFrame(() => {
							n.push(performance.now()), l()
						})
					},
					m = f()(() => {
						c(), a = window.setTimeout(d, s)
					}, p.I);
				return {
					cleanup: d,
					eventHandler: t => {
						void 0 === r ? (l(), m(), r = window.setInterval(o, g)) : m(), e(t)
					}
				}
			}
			var E = s("./src/lib/scheduler/index.ts"),
				j = s("./src/lib/domUtils/index.ts"),
				I = s("./src/lib/LinkedListMap/index.ts");
			const N = (e, t) => e < 0 ? t + e : e % t;
			class O {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = N(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = N(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? N(this.head - this.size, this.maxSize) : this.head;
					for (let s = 0; s < this.size; s++) e(this.items[t], s, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((s, n, i) => {
						t[n] = e(s, n, i)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, s) => {
						e[s] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var P = s("./src/reddit/components/Scroller/getDocumentTop.ts");
			class S {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: s
				}) {
					this.height = t, this.heightWithSuffix = s, this.top = e, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const M = ({
				buffer: e,
				container: t
			} = {}) => {
				const s = a()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(P.a)() : t.scrollTop;
					return new S({
						top: e,
						height: window.innerHeight
					})
				}
				return new S({
					top: 0,
					height: s
				})
			};
			var F = s("./src/reddit/components/ResizeSensor/index.tsx"),
				T = s("./src/reddit/constants/componentSizes.ts"),
				R = s("./src/reddit/constants/elementClassNames.ts"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				z = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/telemetry/helpers/sendEvent.ts"),
				D = s("./src/telemetry/helpers/sendTiming.ts"),
				L = s("./src/reddit/components/Scroller/Simple.m.less"),
				H = s.n(L);
			const V = T.g,
				W = 5 * p.I,
				Z = 3,
				G = Object(u.c)({
					isOverlayOpen: z.h
				}),
				U = Object(l.b)(G),
				q = {};

			function K(e) {
				return e === document
			}

			function X(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const Y = 10,
				J = .9,
				Q = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * p.I,
				ne = 400,
				ie = 8,
				re = 5 * p.I,
				ae = 30,
				oe = "object" == typeof performance && "function" == typeof performance.now,
				ce = () => oe ? performance.now() : Date.now();

			function de(e, t) {
				return I.a.fromArray(e.children.map((e, s) => {
					const n = t && t.get(e.id);
					return n ? (n.isFocusable = !!e.isFocusable, n.trackOnEnteredViewport = e.trackOnEnteredViewport, n.trackOnExitedViewport = e.trackOnExitedViewport, n) : {
						el: null,
						id: e.id,
						index: s,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && s < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class le extends c.a.Component {
				constructor(e) {
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						B.b.enqueue(new E.a({
							args: [e, t],
							cb: (e, t) => Object(D.a)(p.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let n = this.nextVisibleChildrenIndex;
						for (; e < t && n < this.props.children.length;) {
							const t = this.props.children[n];
							s.push(t), e += t.estHeight, n++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ne / e), ie)
						} else this.renderableChildrenIndexIncrement = ie
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = re, Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(m.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && ce() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, s) => {
						const n = s || this.props.children;
						if (this.state.renderableChildren.length < n.length || e)
							if (this.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, s ? n : void 0)
								}, se)
							});
							else {
								this.nextVisibleChildrenIndex + t <= n.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ne) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = ae) => {
						let t = 0,
							s = this.state.renderableChildren.length;
						for (; t < e && s < this.props.children.length;) t += this.props.children[s].estHeight, s++;
						const n = s - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = i()(() => {
						this.handleScroll()
					}, p.I), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new I.a("id");
						return this.state.renderableChildren.forEach(s => {
							const n = this.childMap.get(s.id);
							n && e(n) && t.push(n)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.I))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const s = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = s + this.getScrollTop()
						}
						const s = t.offsetTop + this.parentOffsetTop,
							n = t.getBoundingClientRect().height,
							i = new S({
								top: s,
								height: n,
								heightWithSuffix: `${n}px`
							});
						return e.rectangle = i, i
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? X(this.containerRef) : 0, this.handleContentContainerResize = i()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.I), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(j.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < J,
								s = e < Q,
								n = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const i = new I.a("id");
							let r, a;
							const o = [];
							this.state.renderableChildren.forEach(e => {
								const c = this.childMap.get(e.id);
								let d;
								if (c && c.el) {
									if (!(d = this.getChildRectangle(c))) return;
									const {
										id: e
									} = c;
									this.elementIsHideable(d) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = d.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!c || !c.el || !c.rectangle) return void(this.measurementsInvalid && c && this.getChildRectangle(c));
								const {
									id: l,
									itemRef: m,
									trackOnEnteredViewport: u
								} = c, p = !!this.itemsInViewport.get(l);
								if (this.elementIsUnmountable(d)) m && p && c.loaded && c.isFocusable && o.push(m.pauseContent);
								else if (m && this.loadItemIfPossible(c, m, t, s, n, o), this.elementIsVisible(d)) {
									i.push(c), !p && u && B.b.enqueue(new E.a({
										cb: u,
										args: void 0
									}));
									const e = this.elementIsFocused(d);
									e && !a && (a = c.id), t && c.isFocusable && !r && e ? (r = c.id, c.focused || (c.focused = !0, m && o.push(m.focusContent))) : c.loaded && c.isFocusable && (c.focused || this.needsToPauseViewportItems) && (c.focused = !1, m && o.push(m.pauseContent))
								} else p && c.loaded && c.isFocusable && (c.focused = !1, m && o.push(m.stopContent))
							}), h.a.write(() => {
								o.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !i.has(e) && B.b.enqueue(new E.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = i, this.canFocusItems = t, this.focusedChild = r, this.primaryChild = a, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, W), null !== this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * re, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const s = this.childMap.get(e.id);
								if (!s || !s.el || !s.itemRef) return;
								const n = this.getChildRectangle(s);
								n && this.elementIsUnmountable(n) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / Z), t.length),
							n = [];
						for (let i = 0; i < s; i++) {
							const e = t[i];
							n.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(d.unstable_batchedUpdates)(() => {
							this.scrollContainer && n.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = i()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.I), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const n = s.el.firstChild;
						n && (t !== s.el.style.height && (s.el.style.height = t), n.classList.add(H.a.Hidden), this.hiddenChildren[e] = t, s.loaded && h.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(H.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const n = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(j.c)(this.scrollContainer, n), this.callOnScrollForItemsChanged())
								}, p.I)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, n = window.innerHeight - s, {
								top: i
							} = t.el.getBoundingClientRect();
							return i >= s + e && i < n
						}
						return !1
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new I.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new O(Y), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = re;
					const t = this.getVisibleChildren();
					t.length && (this.lastVisibleElId = t[t.length - 1].id), this.nextVisibleChildrenIndex = t.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: t
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					if (this.isRenderableChildrenStateChangePending) return;
					this.state.renderableChildren.length < this.props.children.length && h.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? k({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: W
					}) : C(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(j.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = q[e];
							a()(t) || (q[e] = void 0, this.scrollContainer && Object(j.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), h.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && h.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = de(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						q[e] = this.lastRenderPosition
					}
					this.childMap = new I.a("id"), this.itemsInViewport = new I.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						s = this.parentOffsetTop ? this.parentOffsetTop : 0,
						n = e.bottom + t - s,
						i = e.top + t - s,
						r = Math.min(this.viewport.bottom, n) - Math.max(this.viewport.top, i),
						a = r / e.height,
						o = r / this.viewport.height;
					return a > .75 || o > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? K(this.scrollContainer) ? Object(P.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = M({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, s = 2 * t;
						this.mountableViewport = new S({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const n = 4 * t;
						this.renderableViewport = new S({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = ce(),
						t = this.getScrollTop(),
						s = Math.abs(this.lastRenderPosition - t),
						n = e - this.lastScrollTime,
						i = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, i ? this.pixelsPerMSRing.push(s / n) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const s = this.childMap.get(e);
					s && (s.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, s) {
					const n = this.childMap.get(e);
					n && (n.itemRef = t, n.loaded = !!t && (void 0 !== s ? s : n.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, n, i, r) {
					if (t.contentIsHeavyToMount() ? n : i) {
						const n = !e.isFocusable || s;
						!e.loaded && n && (e.loaded = !0, r.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && B.b.enqueue(new E.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = X(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return c.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => c.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, c.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? H.a.Hidden : void 0
					}, e.render({
						className: R.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: V
					})))), !!e && c.a.createElement(F.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = U(Object(A.b)(le))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, s) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(u),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = i()(() => {
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
					}, s = Object(o.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: i()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(o.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(g, f({
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
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(i),
				a = s("./node_modules/raf/index.js"),
				o = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				_ = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = s.n(_);
			var v = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: x.a.wrapper
					}, d.a.createElement(g.a, {
						className: x.a.titleRow
					}, s), d.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: x.a.buttonRow
					}, d.a.createElement(f.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = s("./src/reddit/controls/ErrorText/index.m.less"),
				w = s.n(y);
			const C = Object(m.c)({
				activeModalId: h.a
			});
			class k extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					o()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: i,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: o,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(u.a)(w.a.wrapper, s)
					}, d.a.createElement("span", {
						className: w.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: w.a.moreText,
						onClick: this.toggleModal
					}, a), t === o && d.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: r
					}, i || e))
				}
			}
			const E = Object(l.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(k),
				j = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: i,
						messages: r = []
					} = e, a = r.length ? r : i ? [i] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(E, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				I = e => d.a.createElement(j, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = s("./src/reddit/controls/FormFields/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", m.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: a,
						...o
					} = e, c = void 0 !== e.value && "" !== e.value;
					return i.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, a, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, i.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, o)), e.label && i.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						isInvalid: a,
						className: o,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return i.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, o, {
							[m.a.mIsInvalid]: a,
							[m.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, i.a.createElement(p, u({
						innerRef: n
					}, d)), e.label && i.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				g = e => i.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", i.a.createElement(c.a, {
					className: m.a.plus
				}));
			var _;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(_ || (_ = {}));
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: _.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: _.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: n,
						errors: r = []
					} = this.props;
					return e.map((e, a) => i.a.createElement(b, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, a),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, i.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, i.a.createElement(d.b, {
						className: m.a.trash
					})), !!r[a] && i.a.createElement(o.b, {
						className: m.a.errorText
					}, r[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: n,
						addValueText: a,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && s.length >= n) && !o;
					return i.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && c && i.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && i.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(i);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = s.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => i.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(i.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "j", (function() {
				return a
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "l", (function() {
				return d
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "n", (function() {
				return _
			}));
			var n, i = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function m(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations`,
					data: s
				})
			}
			async function u(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations/${s}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const p = (e, t, s) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: s
				}),
				h = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, s, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: s,
					amount: n
				});
			async function _(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, a = r;
					return n ? i.a.createElement(t, a) : void 0 !== s ? i.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/currency/centsToDollars/index.ts"),
				i = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function a({
				apiContext: e,
				config: t,
				elementId: s,
				price: a,
				purchaseFn: o,
				username: c,
				onCancel: d,
				onClientLoad: l,
				onError: m,
				onSubmitting: u,
				onSuccess: p
			}) {
				const h = (e, t) => {
					if (!m) return;
					let s = e.toString ? e.toString() : "";
					s.toLowerCase().includes("object object") && (s = JSON.stringify(e)), m(e, s, t)
				};
				try {
					const [m] = await Promise.all([Object(i.b)(e, {
						username: c
					}), Object(r.b)()]);
					if (!m.ok) return void h(m.error, "/ps/me/braintree-client-tokens");
					const b = await braintree.client.create({
							authorization: m.body.clientToken
						}),
						f = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: b
							}, (s, n) => s ? t(s) : e(n))
						});
					l && l(), await paypal.Buttons({
						createBillingAgreement: "subscription" === t.type ? () => (u && u(), f.createPayment({
							amount: Object(n.a)(a(), !0),
							billingAgreementDescription: t.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === t.type ? () => (u && u(), f.createPayment({
							amount: Object(n.a)(a(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							f.tokenizePayment(e).then(({
								nonce: e
							}) => o(e)).then(e => {
								e.ok ? p && p() : h(e.error, "/orders")
							})
						},
						onCancel: () => d && d(),
						onError: e => h(e, "paypalError")
					}).render(`#${s}`)
				} catch (b) {
					h(b, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				i = s("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const s = new n.BigNumber(e),
					i = new n.BigNumber(t || 1);
				return s.dividedToIntegerBy(i).toString()
			}

			function a(e, t) {
				return Object(i.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const s = new n.BigNumber(e),
					i = new n.BigNumber(t || 1);
				return s.multipliedBy(i).toFixed(0)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				r = "|downsized";

			function a(e, t) {
				return i + e + (t ? r : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(i)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function d(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, s) => [...e, ...l(s, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function m(e) {
				return l(e, n.F).map(e => e.id)
			}

			function u(e) {
				return l(e, e => e.e === n.o).map(e => e.u)
			}
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
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(i);
			const a = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				o = e => Object(n.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js");

			function i(e, t) {
				const [s, i] = Object(n.useState)(e);
				return [s, e => {
					t.current && i(e)
				}]
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r(e) {
				return i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, i.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), i.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r(e) {
				return i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, i.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), i.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), i.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), i.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), i.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), i.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), i.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), i.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), i.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), i.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), i.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), i.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), i.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), i.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), i.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), i.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), i.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && i.a.createElement("title", null, e.title), i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, i.a.createElement("g", {
				stroke: "none"
			}, i.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, i.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = s.n(a);
			const c = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), i.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r(e) {
				return i.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, i, r, a;
			s.d(t, "b", (function() {
					return i
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(i || (i = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function i(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-l6ribaRonbtSW75Gasf0",
				content: "_1srXRbc3nZWtSzBgnpnL_i",
				contentWithAnimations: "_21xriDWSn5JufF5Ekd1gSc",
				description: "hyrd27wCOJAubXZdIlL32",
				editor: "_3I0PTRXDvcBpNb8jWuUyUG",
				header: "_2C94P12gq8mJVaX0TcU7dL",
				placeholder: "_2d56cUgtXAGXFex1uty3cI",
				rescuerArm: "_1ZEtFYO1X6aWZdPcCe2ttO",
				rescuerArmAnim: "_2-P9VRynrNI62N9mCe1u4d",
				rescuerLegs: "_2HraV_m_H-QwWhbQnD9Cz6",
				rescuerTorso: "_2c2f1ooqNUBpLo1uIWW6tH",
				rescuerTorsoAnim: "vxBZ9o4bMSIgMqp3fseuE",
				title: "_3secE0kPGmuLrOVyxVx1GA",
				try: "_1ADbqtvk_G65FSX32JzrcL",
				woundedBody: "_2Si7gMwaA06iDQ_kRarDqY",
				woundedHead: "_3DDo4KqBgySMOC_Ww-1qdG",
				woundedHeadAnim: "_1N5LrnEH9GrlA-GpoezYhW"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less": function(e, t, s) {
			e.exports = {
				allEmojis: "HG4dDjMfFuWUSYTGVXhMU",
				container: "RC2xHmTH_JNAkCq6WHC9h",
				description: "_1ppYpsFus4teqxajezMsMh",
				editor: "CGHRb1ni7ssn9emGnp91k",
				emoji: "_3IhZf0fX3bLjxp2dTgB-Ra",
				grid: "pvztHne0yQOObYrBKLY69",
				gridRow: "_3TnUGDi_f-XCYmowBOJU2s",
				label: "_2FNQpv7k818wfbBh8VQL2-",
				notExpanded: "_4RMAFwSRMekhv09HXXakA",
				showAll: "_2eZueoS--NXBSyBJOIfgcr",
				title: "_1bpLacIFGWJ8JkkGxrnrGT",
				try: "_1f_K9FCPGCYC70UIP2jl2d"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2LSDJwqkgAC_kQQasHOjPk",
				description: "_2YClVh2zG7h7CsqutaXLDp",
				footer: "_2ZVIecJ7nJjliaBCCnkY-V",
				item: "_2Y0GV0pc08he0bt-mi1gBw",
				itemIcon: "_1jZozMikgXQl3J5ZR9Bowc",
				itemText: "_3m1z1cy4WLpG9x-c7ZKDRg",
				progressBar: "_2Bm3-gyqaRXODIyupyiR9p",
				progressThumb: "_252EINQq4NecY9FXde1_BL",
				thumbAnim: "_28vMO4XWazB3x_FtmRmI16",
				row: "_2TlTmUR7lwqJ8NdZ44nc0s",
				title: "_1jXGFjJzrxDrx2uEQ7DVGF"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_2EuRRmMUWWyy7ogKc7Uk04",
				smallCollection: "YFanJRu2wCTOQnSbFeFNP",
				badge: "_1StKp1mVYflPieZ-i8t7hm",
				container: "_5ebhVgUCgAnviJ3yM5f5P",
				description: "_3boBqqaewJ06LTZzbndHOP",
				title: "_1qsPjy39LQmn3Zi1AJNHVw",
				userBadge: "_1rAadAD8jFTPpPYGE4O2KV",
				username: "ZHvw3R0mA0Z_POQA7C-fH"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_1bD6JH8044LKrlz_zdTgI3",
				container: "_2FOZEUas3_NcjRCr3pGJaS",
				emojis: "_1KMwjC2r2sDXYeRjPLIi10",
				emojisList: "-kODe_q_ldi5_iTr9YTt6",
				emojisTitle: "_18QLrz0EuHzN8WoKNxxNQZ",
				emoji: "_1gTq0B8KGAeQgQblpgpMeo",
				emojiImage: "_1IqEytrE4EZ9iWb4c2mbOy",
				header: "_2jLyIa4O4D4lFe611izptl",
				triangle: "q28fzf8zZ2we3AYEI4sQ9"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3LOD-WBOJ9TpEyuc_B0ryn",
				triangle: "_1-MWtksm2FqJxQc5lgUR37"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less": function(e, t, s) {
			e.exports = {
				clickable: "_1cIOwGYV7I6vRxR6VmcewC",
				container: "_1x-TPX4TlndlrlqtojxI_H",
				content: "_2jv3EecOzF1wGDs4vJOriM",
				divider: "_3Ex0jTlV_A1JodZqIMsW5p",
				emoteIcon: "pwYYQmeZ8lTJMnSoQo0p1",
				emoteTooltip: "_3akhTTOuCVBcrEqolKvRls",
				gifTooltip: "_3s2CuSDpWDyvPJ6Gt6Nj4G",
				icon: "_2uk7le_A4DDUujQsq5R9p7",
				iconWrapper: "_3feJdn9uZdxTH6Pv28CrZ",
				gifIcon: "_2HXCGD6es_ViR4WvLnbc8j",
				open: "_1Rdtpma2YsPYyx-U9wRqqm",
				reply: "_1X_DcLaCboOSh3oT5QufeS"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_3dLCMB5QHPH0h_IKJlzts6",
				container: "_350NODM4qoI4IWEdgYX72M",
				section: "_31RNbxj_vN1iFg9OmOca54",
				title: "_2cQgklnR9ee890dlKP9sU0"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_3abXs_nHum1aZplxsmmWzb",
				arrowClose: "tHOmoRSJOtYUm0uVRXgwl",
				answer: "_34hVWdyAQOxWX6BtNCcH8T",
				container: "_Vx2QRz8UfHjBWVoj_Se9",
				question: "_1wjtRGwmsLRNQTLlMQzpmb",
				row: "_2YVdCJXV4SjN6MUB5Rx_74",
				section: "_25TwHcxz9B42W4GN7kq74J",
				title: "_3dgNvvjG7x_Kdt683SlDdq"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				copyright: "hHWq9R1kIKuwnmc-c5_nk",
				container: "yoxsTxUwnTIle9hv_5263",
				link: "QZ5kdeF0RpMihWpwGlwcY",
				pianoCrowdBottom: "_60ASzFhqU01fDD4qtUcm_",
				pianoCrowdBottomAnim: "_3yD0KGwT271BI6NStk_RWB",
				pianoCrowdTop: "_2s-R5ZEfjQcJelam9p4iM0",
				pianoCrowdTopAnim: "PdK2oK6NIHwAGk1c7oRdu",
				pianoFlier: "__DEPnJK2lFSwsgi-pMVd",
				pianoFlierAnim: "_1lHRA-kn6n4ztvvD2Eodn0",
				pianoKeyboard: "_3sZ5OukRkPEltd5Z7q_qFa",
				twoCol: "_1lkCEde-Tj5sw9fJ5jrTMQ"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less": function(e, t, s) {
			e.exports = {
				container: "jqZKJLgYB2mddEx5Lx_Td",
				description: "_2cJn3yPQq4OXma6qLydghV",
				logo: "qctFKbJQXhfktlUhf0uUW",
				radialHighlight: "_19cOm1T7aKMGtb4_WimwFn",
				radialHighlightOuter: "_1gMg7MP9wN6WZiDvF_maaT",
				rotatesun: "_2-q1z92uhl1L2pD2Vru4Bx",
				radialHighlightInner: "_29R8bdUcgPhwh4s8kxRfVt",
				subscriptionName: "_2Ua7tyUWT9LNuVuwmVCXFr"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				checkout: "_1YeF_-_BCIWSRSq7VcHfwX",
				price: "Xwc8CCPKWIdJKDB52171W",
				recipient: "_2df1mhtxpVh7VAaPhgWqWV",
				shimmer: "_1TKQ0NVUKMLkw2AFMm8njV",
				imageShimmer: "_1TyiUrWpQj0F35lkM5SBLh"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less": function(e, t, s) {
			e.exports = {
				benefits: "_2-ycDF-Psu2x9TTqnG7neu",
				benefit: "_1I-l4KPF_Ub1c46n512i2d",
				check: "_1xHbWZ-qc6mzs2ulMrwErn",
				checkout: "_2xEZp5E9jHfd7ErfC7aOtg",
				container: "_2M8d10IbaaRCGbtCN0famA",
				cta: "_2CzDr42j0wzna45CuYbifD",
				description: "o2NHAMcQ55KS3ogS8RIEs",
				divider: "UIOXdEofaxr4Rtf85Bemh",
				footer: "b-R74uJRDdaA3pe4r1Hmk",
				price: "_1LMyPkWZzWKwuXJks5-JBs",
				recipient: "sWx_snHBtmp85PuUyG3bp",
				shimmer: "_3dcca0wIWlXzcOki_eDLG1",
				imageShimmer: "_1v4WbFTprwAtGFR3bi4c4I",
				title: "_2a81dkpP6gwOOBjHvQFxJ2"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1sFzjkbzwgDZbCfUC2r1wE",
				jumperArmLeft: "_3PiaT85fC3TrQD2HdeOafZ",
				jumperArmLeftAnim: "zKNYt858N0bjlljDDG6NZ",
				jumperArmRight: "_3Lx79UhomruM1Y5BCTzG8Y",
				jumperArmRightAnim: "_1i7rn3wI2iwaDt20BD4cwA",
				jumperBullet: "_3VgQEpiX3x4ms2DPXbU3Vv",
				jumperBulletAnim: "_2SOHU1xXIOc8DnKL4Eh_NA",
				jumperLegLeft: "_2tBrC3MWjEDn2rUr1uHBSU",
				jumperLegLeftAnim: "_33YZcOsjLAJqX7_PWF0XMy",
				jumperLegRight: "_21kcQmC_D0HKtBiZB44xj_",
				jumperLegRightAnim: "_2N7iCqOyBuKxb1Gi5WqG2h",
				jumperTorso: "_1ftz2Us7dNaqGSxapletsm"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				o = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				c = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				d = s.n(c);
			const l = [1700, 2400];

			function m(e) {
				const t = e.scrollRange || l;
				return i.a.createElement("footer", {
					className: Object(r.a)(d.a.container, e.className)
				}, i.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, i.a.createElement(a.a, {
					scrollRange: t
				}, t => i.a.createElement("img", {
					className: d.a.jumperBullet,
					src: Object(o.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), i.a.createElement(a.a, {
					scrollRange: t
				}, t => i.a.createElement("img", {
					className: d.a.jumperArmLeft,
					src: Object(o.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), i.a.createElement(a.a, {
					scrollRange: t
				}, t => i.a.createElement("img", {
					className: d.a.jumperLegLeft,
					src: Object(o.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), i.a.createElement(a.a, {
					scrollRange: t
				}, t => i.a.createElement("img", {
					className: d.a.jumperLegRight,
					src: Object(o.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), i.a.createElement("img", {
					className: d.a.jumperTorso,
					src: Object(o.a)(e.subreddit, "jumper_torso@2x.png")
				}), i.a.createElement(a.a, {
					scrollRange: t
				}, t => i.a.createElement("img", {
					className: d.a.jumperArmRight,
					src: Object(o.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2cp0MDUeXSx8jZsMgV8nWB",
				chickenHead: "_281rYD23XhZWOllS1iE5ZM",
				chickenLeftArm: "_3zGGQ5NHOnnPrvPv5CQyzu",
				chickenLeftArmAnim: "vdXFK8wMu43GyLQjSTZ21",
				chickenLeftShoulder: "_3_cSYmJ-k5q6IVWpSet8Bk",
				chickenRightArm: "_1e-Asqvlz83W2VpbMd5I_l",
				chickenRightArmAnim: "NGDCS-gml3Cj1pxPJfcK3",
				chickenTorso: "_1uG_Ba-yNpZZeH4Nkz8wFP",
				tag: "_3iccCG1g-ESmJU7p48I13e",
				title: "_1InVBG-Y3405FaCkoW1WNf"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3kBZNmkRcsR68Z_GWsAvdv",
				circle: "_1HuZZe6mAGdTK51o8wy0Ty",
				circleShimmer: "_23xoEOLTQbxhEP4sxGL0RG",
				shimmer: "_3gC9nZJNk_cqriNWiwo3sL",
				tooltipWrapper: "_15rembukPlDtuyNZ-Xu8Gd",
				tooltip: "_3gbci1E3nOkYl1keIxZgEc",
				tooltipText: "_3vgPOtiKCF9O8BoKrNf2c_"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3L2DdYdHLzDAxcOMaqeOf1",
				emoji: "_3yZMeRF4jPT9wh3-g7vxbu",
				footer: "_3kIx2dGZXOuy45W3zPk4gl",
				gif: "_1APrv4hs14TjxWjtyAKZQk",
				img: "_1hq1t1hFoeW4IuNSR4an3l",
				tip1: "_2HqJNg4XmS-YimRbE_c25",
				tip2: "_1PkCmm6eY1yC_5Y3nHl65O",
				tip3: "_3y21jRn1hKKWw-61iRveJg"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_3YsbiXvTALeWs8bjNgE6JT",
				container: "_1Oe0GooWFg_aCcljtSE7vI",
				indicators: "iufgL-Gtpn3JEsYP_bS4_",
				indicator: "JWWSGV-zlRjfOKDYtNHYx",
				indicatorSelected: "qvbO8Zi8eNC7Y4LN00QNY",
				testimony: "hSsZVS-lHTYFPdUtAmJMf",
				testimonyOutline: "_11maSTrG2UfudtIJUErrmw",
				testimonyOutlineFlat: "_29ldSSgxb2gTiHhFj0K8n5",
				testimonyText: "qoAm0k1N1jikF7JjntlqB",
				user: "_3BpxvMM8vR85TXu0iDzLGt",
				username: "_2mis8CZQLskwVQZHo1oDfb"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2hnZpsw-lejHnH3Cy9SmME"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/config.ts");
			const i = (e, t) => `${n.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.m.less": function(e, t, s) {
			e.exports = {
				benefits: "_2dAtohyay5fb_xPAvhaICV",
				container: "_9lKNL6GIsEpAVwKUJl6Z2",
				faq: "_1Bh5DUjq67K1m6oBfOWOKR",
				footer: "m0A3m_EfmfuToWfIg2cOb",
				notOverlay: "_3TrMVaPbr5ZbxAJQFKGMRr",
				overlay: "_1wLDBHVt_LHrdsKWcc9PMN",
				thanks: "_1NPXJMMFRxA9uYU0mUnF78",
				whatDoYouGet: "_35dHVuK72zhOhzVd6XQB6o"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c);
			var l, m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/extractQueryParams/index.ts"),
				p = s("./node_modules/react-dom/index.js"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(l || (l = {}));
			var b = Object(h.c)(class extends i.a.Component {
					constructor() {
						super(...arguments), this.visibilityState = l.NotVisible, this.enterFired = !1, this.exitFired = !1
					}
					componentDidMount() {
						if (this.props.children) {
							const e = Object(p.findDOMNode)(this);
							e && "string" != typeof e && (this.observer = new IntersectionObserver(e => {
								e.forEach(e => {
									if (e.isIntersecting && this.visibilityState === l.NotVisible) {
										if (this.visibilityState = l.Visible, this.props.fireOnce && this.enterFired) return;
										this.props.onEnter && (this.props.sendEvent(this.props.onEnter), this.enterFired = !0)
									}
									if (!e.isIntersecting && this.visibilityState === l.Visible) {
										if (this.visibilityState = l.NotVisible, this.props.fireOnce && this.exitFired) return;
										this.props.onExit && (this.props.sendEvent(this.props.onExit), this.exitFired = !0)
									}
								})
							}, {
								threshold: .25
							}), this.observer.observe(e))
						}
					}
					componentWillUnmount() {
						this.observer && this.observer.disconnect()
					}
					render() {
						return this.props.children
					}
				}),
				f = s("./src/reddit/featureFlags/subredditPoints.ts"),
				g = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/config.ts"),
				C = s("./src/reddit/models/Badge/index.ts");
			const k = {
					achievementBadges: !0,
					animations: !0,
					canCancel: !0,
					canGift: !0,
					communityThanks: !0,
					emotes: !0,
					gifs: !0,
					loyaltyBadges: !0,
					styleBadges: !0,
					testimonials: !0
				},
				E = {
					achievementBadges: !1,
					animations: !1,
					canCancel: !1,
					canGift: !1,
					communityThanks: !1,
					emotes: !1,
					testimonials: !1
				},
				j = {
					t5_2wlj3: E,
					t5_2l3wpx: E,
					t5_vsb5g: E,
					t5_37jgj: E
				};
			var I = function(e) {
					return {
						...k,
						...j[e] || {}
					}
				},
				N = s("./src/reddit/selectors/economics.ts"),
				O = s("./src/reddit/components/RichTextEditor/index.tsx"),
				P = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				S = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				M = s("./src/reddit/helpers/richTextEditor/index.ts"),
				F = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				T = s("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				R = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				A = s("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				z = s("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				B = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				D = s("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				L = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				H = s("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				V = s("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				W = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Gif/index.tsx"),
				G = s("./src/reddit/icons/svgs/Smile/index.tsx"),
				U = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/addOverlayEvents.tsx")),
				q = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				K = s("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				X = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Y = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less"),
				J = s.n(Y);

			function Q(e) {
				const t = e.emojiPack.emotes,
					s = Object.keys(t).map(e => t[e]).sort((e, t) => e.id.localeCompare(t.id));
				return i.a.createElement("div", {
					className: Object(m.a)(J.a.container, e.className),
					style: e.style
				}, i.a.createElement("div", {
					className: J.a.header
				}, y.fbt._("Add r/{communityName} emote", [y.fbt._param("communityName", e.subreddit.name)], {
					hk: "O2Vj2"
				}), i.a.createElement(X.a, {
					className: J.a.close,
					onClick: e.onClose
				})), i.a.createElement("div", {
					className: J.a.emojis
				}, i.a.createElement("div", {
					className: J.a.emojisTitle
				}, e.emojiPack.title), i.a.createElement("div", {
					className: J.a.emojisList
				}, s.map(t => i.a.createElement("button", {
					className: J.a.emoji,
					onClick: () => e.onSelectEmoji(Object(K.g)(t, e.editorState)),
					key: t.id
				}, i.a.createElement("img", {
					className: J.a.emojiImage,
					src: t.emoji.path
				}))))), i.a.createElement("div", {
					className: J.a.triangle
				}))
			}
			Q.defaultProps = {
				emojiPack: {
					emotes: {
						bush: {
							id: "bush",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|bush",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						chug: {
							id: "chug",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|chug",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						clappy: {
							id: "clappy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|clappy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						confused: {
							id: "confused",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/confused.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|confused",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/confused.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						cuddle: {
							id: "cuddle",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|cuddle",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						dab: {
							id: "dab",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|dab",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						dance: {
							id: "dance",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|dance",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						mech_destroy: {
							id: "mech_destroy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|mech_destroy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						mech_love: {
							id: "mech_love",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|mech_love",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						megaphone: {
							id: "megaphone",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|megaphone",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						respect: {
							id: "respect",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|respect",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						soon: {
							id: "soon",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|soon",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						uNfOrTuNaTeLy: {
							id: "uNfOrTuNaTeLy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|uNfOrTuNaTeLy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						}
					},
					title: "Special Membership"
				}
			};
			var $ = Object(q.a)(Q, [U.a.Click, U.a.Keydown]),
				ee = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				te = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less"),
				se = s.n(te);
			var ne = Object(q.a)((function(e) {
					return i.a.createElement("div", {
						className: Object(m.a)(se.a.container, e.className),
						style: e.style
					}, i.a.createElement(ee.a, {
						autofocus: !1,
						correlationId: "",
						editorState: e.editorState,
						onChange: e.onSelectGif,
						onClose: e.onClose,
						subreddit: {
							id: e.subreddit.id,
							isProfile: !1,
							name: e.subreddit.name
						}
					}), i.a.createElement("div", {
						className: se.a.triangle
					}))
				}), [U.a.Click, U.a.Keydown]),
				ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less"),
				re = s.n(ie);
			class ae extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						emotesOpen: "emoji" === e.type,
						gifsOpen: "gif" === e.type
					}
				}
				render() {
					const e = "emoji" === this.props.type ? `membership-paywall-emote-${this.props.subreddit.id}` : void 0,
						t = "gif" === this.props.type ? `membership-paywall-gif-${this.props.subreddit.id}` : void 0;
					return i.a.createElement("div", {
						className: Object(m.a)(this.props.className, re.a.container)
					}, i.a.createElement("div", {
						className: re.a.content
					}, i.a.createElement("div", {
						className: Object(m.a)(re.a.iconWrapper, {
							[re.a.clickable]: "emoji" === this.props.type,
							[re.a.open]: this.state.emotesOpen
						}),
						id: e,
						onClick: "emoji" === this.props.type ? () => this.setState(e => ({
							emotesOpen: !e.emotesOpen
						})) : void 0
					}, i.a.createElement(G.a, {
						className: Object(m.a)(re.a.emoteIcon)
					})), i.a.createElement("div", {
						className: Object(m.a)(re.a.iconWrapper, {
							[re.a.clickable]: "gif" === this.props.type,
							[re.a.open]: this.state.gifsOpen
						}),
						id: t,
						onClick: "gif" === this.props.type ? () => this.setState(e => ({
							gifsOpen: !e.gifsOpen
						})) : void 0
					}, i.a.createElement(Z.a, {
						className: Object(m.a)(re.a.gifIcon)
					})), i.a.createElement("div", {
						className: re.a.divider
					}), i.a.createElement(T.a, {
						className: re.a.icon
					}), i.a.createElement(A.a, {
						className: re.a.icon
					}), i.a.createElement(R.a, {
						className: re.a.icon
					}), i.a.createElement(L.a, {
						className: re.a.icon
					}), i.a.createElement(z.a, {
						className: re.a.icon
					}), i.a.createElement(H.a, {
						className: re.a.icon
					}), i.a.createElement(D.a, {
						className: re.a.icon
					}), i.a.createElement("div", {
						className: re.a.divider
					}), i.a.createElement(V.a, {
						className: re.a.icon
					}), i.a.createElement(W.a, {
						className: re.a.icon
					}), i.a.createElement(B.a, {
						className: re.a.icon
					})), i.a.createElement("button", {
						disabled: !0,
						className: re.a.reply
					}, y.fbt._("reply", null, {
						hk: "RzR8c"
					})), this.state.emotesOpen && i.a.createElement($, {
						isOpen: !0,
						className: re.a.emoteTooltip,
						editorState: this.props.editorState,
						subreddit: this.props.subreddit,
						targetPosition: ["left", "top"],
						tooltipId: e,
						tooltipPosition: ["left", "bottom"],
						onClose: () => this.setState({
							emotesOpen: !1
						}),
						onSelectEmoji: e => {
							this.props.onChange(e), this.setState({
								emotesOpen: !1
							})
						}
					}), this.state.gifsOpen && i.a.createElement(ne, {
						isOpen: !0,
						className: re.a.gifTooltip,
						editorState: this.props.editorState,
						subreddit: this.props.subreddit,
						targetPosition: ["left", "top"],
						tooltipId: t,
						tooltipPosition: ["left", "bottom"],
						onClose: () => this.setState({
							gifsOpen: !1
						}),
						onSelectGif: e => {
							this.props.onChange(e), this.setState({
								gifsOpen: !1
							})
						}
					}))
				}
			}
			var oe = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less"),
				ce = s.n(oe);

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = [5e3, 5300];
			class me extends i.a.PureComponent {
				render() {
					const {
						className: e,
						emojisExpanded: t,
						subreddit: s
					} = this.props, n = le.map(e => e + (t ? 500 : 0)), r = I(s.id).animations;
					return i.a.createElement("div", {
						className: Object(m.a)(ce.a.container, e)
					}, r && i.a.createElement("header", {
						className: ce.a.header
					}, i.a.createElement("a", {
						href: "https://www.reddit.com/r/FortNiteBR/comments/9067f2/i_have_been_playing_50v50_a_little_differently/",
						target: "_blank"
					}, i.a.createElement("img", {
						className: ce.a.rescuerLegs,
						src: Object(F.a)(s, "rescuer_legs@2x.png")
					}), i.a.createElement(S.a, {
						scrollRange: n
					}, e => i.a.createElement("img", {
						className: ce.a.rescuerArm,
						src: Object(F.a)(s, "rescuer_arm@2x.png"),
						style: e
					})), i.a.createElement(S.a, {
						scrollRange: n
					}, e => i.a.createElement("img", {
						className: ce.a.rescuerTorso,
						src: Object(F.a)(s, "rescuer_torso@2x.png"),
						style: e
					})), i.a.createElement("img", {
						className: ce.a.woundedBody,
						src: Object(F.a)(s, "wounded_body@2x.png")
					}), i.a.createElement(S.a, {
						scrollRange: n
					}, e => i.a.createElement("img", {
						className: ce.a.woundedHead,
						src: Object(F.a)(s, "wounded_head@2x.png"),
						style: e
					})))), i.a.createElement("article", {
						className: Object(m.a)(ce.a.content, {
							[ce.a.contentWithAnimations]: r
						})
					}, i.a.createElement("div", {
						className: ce.a.title
					}, y.fbt._("GIFs in Comments", null, {
						hk: "4iMCW4"
					})), i.a.createElement("div", {
						className: ce.a.description
					}, y.fbt._("Put GIFs directly in your comments.", null, {
						hk: "2yUWCA"
					})), i.a.createElement("div", {
						className: ce.a.description
					}, y.fbt._("Search a vast library to find the perfect one.", null, {
						hk: "1hZivq"
					})), i.a.createElement(O.a, {
						className: ce.a.editor,
						editorType: M.a.Comment,
						placeholderText: y.fbt._("Try adding a GIF", null, {
							hk: "tHtDe"
						}),
						readOnly: !1,
						renderToolbar: e => i.a.createElement(ae, de({
							key: String(t),
							subreddit: s,
							type: "gif"
						}, e)),
						rteState: P.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: (...e) => {},
						onChange: (...e) => {},
						onSubmit: (...e) => {}
					}), i.a.createElement("div", {
						className: ce.a.try
					}, y.fbt._("Try it out! Search for a GIF and put it in your comment.", null, {
						hk: "309j9G"
					}))))
				}
			}
			const ue = Object(o.c)({
				cosmeticBadges: (e, {
					subreddit: t
				}) => Object(N.d)(e, t.id)
			});
			var pe = Object(r.b)(ue)(me),
				he = s("./node_modules/lodash/last.js"),
				be = s.n(he),
				fe = s("./node_modules/lodash/shuffle.js"),
				ge = s.n(fe),
				_e = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less"),
				xe = s.n(_e);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function ye(e) {
				return e.reduce((e, t) => {
					const s = be()(e);
					return s && s.length < 12 ? s.push(t) : e.push([t]), e
				}, [
					[]
				])
			}
			const we = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif"]),
				Ce = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_1/competitive.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_2/goat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_3/noob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_4/bot.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_5/potato.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_6/casual.gif"]),
				ke = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/confused.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/disappointed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/grinning.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/laughing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/like.gif"]),
				Ee = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/angry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/astonished.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/blush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cheeky.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/disapproval.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/dizzy_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/downvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/facepalm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_bad_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_good_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flip_out.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flushed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grimacing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grin.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/hug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/joy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/kissing_heart.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/money_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/neutral_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/no_mouth.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/poop.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/put_back.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/rage.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/scream.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/shrug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sleep.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/slightly_smiling.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/snoo.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/stuck_out_tongue.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sunglasses.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/surprise.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat_smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table_flip.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thinking_face_hmm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_down.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_up.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/trollface.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/wink.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/yummy.gif"]);
			class je extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return i.a.createElement("div", {
						className: Object(m.a)(e, xe.a.container)
					}, i.a.createElement("header", {
						className: xe.a.title
					}, y.fbt._("Premium Animated Emotes", null, {
						hk: "24mmlb"
					})), i.a.createElement("div", {
						className: xe.a.description
					}, y.fbt._("Say more than text. Bring color and animation to your comments.", null, {
						hk: "2MjrRF"
					})), i.a.createElement(O.a, {
						className: xe.a.editor,
						editorType: M.a.Comment,
						placeholderText: y.fbt._("Try adding an emote", null, {
							hk: "3H8jm8"
						}),
						readOnly: !1,
						renderToolbar: e => i.a.createElement(ae, ve({
							subreddit: t,
							type: "emoji"
						}, e)),
						rteState: P.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: (...e) => {},
						onChange: (...e) => {},
						onSubmit: (...e) => {}
					}), i.a.createElement("div", {
						className: xe.a.try
					}, y.fbt._("Try it out! Add an emoji by clicking on it.", null, {
						hk: "2LKfXS"
					})), i.a.createElement("div", {
						className: xe.a.description
					}, y.fbt._("Use more than 100 emotes, including custom art just for r/{communityName}.", [y.fbt._param("communityName", t.name)], {
						hk: "31Kq8t"
					})), i.a.createElement("footer", {
						className: Object(m.a)(xe.a.allEmojis, {
							[xe.a.notExpanded]: !this.state.expanded
						})
					}, i.a.createElement("div", {
						className: xe.a.label
					}, y.fbt._("special members", null, {
						hk: "2W17Tt"
					})), i.a.createElement("div", {
						className: xe.a.grid
					}, ye(we).map((e, t) => i.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => i.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), i.a.createElement("div", {
						className: xe.a.label
					}, y.fbt._("snoomojis", null, {
						hk: "2hsGar"
					})), i.a.createElement("div", {
						className: xe.a.grid
					}, ye(Ee).map((e, t) => i.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => i.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), i.a.createElement("div", {
						className: xe.a.label
					}, y.fbt._("dogesy", null, {
						hk: "2FheYm"
					})), i.a.createElement("div", {
						className: xe.a.grid
					}, ye(ke).map((e, t) => i.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => i.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), i.a.createElement("div", {
						className: xe.a.label
					}, y.fbt._("player style", null, {
						hk: "1XkSYc"
					})), i.a.createElement("div", {
						className: xe.a.grid
					}, ye(Ce).map((e, t) => i.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => i.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), !this.state.expanded && i.a.createElement("div", {
						className: xe.a.gradient
					})), !this.state.expanded && i.a.createElement("button", {
						className: xe.a.showAll,
						onClick: () => {
							this.setState({
								expanded: !0
							}), this.props.onExpand && this.props.onExpand()
						}
					}, y.fbt._("show all", null, {
						hk: "2MP4Ce"
					})))
				}
			}
			var Ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less"),
				Ne = s.n(Ie);

			function Oe(e) {
				const t = e.showProgressBar ? 1 / 0 : 6,
					s = e.items.reduce((e, s) => {
						const n = be()(e);
						return n && n.length < t ? n.push(s) : e.push([s]), e
					}, [
						[]
					]);
				return i.a.createElement("section", {
					className: Object(m.a)(Ne.a.container, e.className)
				}, i.a.createElement("header", {
					className: Ne.a.title
				}, e.title), i.a.createElement("article", {
					className: Ne.a.description
				}, e.description), i.a.createElement("footer", {
					className: Ne.a.footer
				}, e.showProgressBar && i.a.createElement("div", {
					className: Ne.a.progressBar
				}, i.a.createElement("div", {
					className: Ne.a.progressThumb
				})), s.map((e, t) => i.a.createElement("div", {
					className: Ne.a.row,
					key: t
				}, e.map(e => i.a.createElement("div", {
					className: Ne.a.item,
					key: e.text
				}, i.a.createElement("img", {
					className: Ne.a.itemIcon,
					src: e.icon
				}), i.a.createElement("div", {
					className: Ne.a.itemText
				}, e.text)))))))
			}
			var Pe = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less"),
				Se = s.n(Pe);
			const Me = 1e3,
				Fe = 66;
			class Te extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentBadgeIdx: 0
					}, this.timer = null, this.badges = null
				}
				componentDidUpdate() {
					!this.badges && this.props.styleBadges.length && (this.badges = ge()(this.props.styleBadges).slice(0, Fe), this.timer = window.setInterval(() => {
						this.setState(e => ({
							currentBadgeIdx: (e.currentBadgeIdx + 1) % this.badges.length
						}))
					}, Me))
				}
				componentWillUnmount() {
					this.timer && clearInterval(this.timer)
				}
				render() {
					const e = this.badges;
					if (!e) return null;
					const {
						className: t,
						username: s
					} = this.props, n = e[this.state.currentBadgeIdx];
					return i.a.createElement("article", {
						className: Object(m.a)(t, Se.a.container)
					}, i.a.createElement("header", {
						className: Se.a.title
					}, y.fbt._("Style Badges", null, {
						hk: "3ioHSL"
					})), i.a.createElement("div", {
						className: Se.a.description
					}, y.fbt._("Stand out with 4 new badges a month", null, {
						hk: "3Pd0bd"
					})), i.a.createElement("div", {
						className: Se.a.description
					}, y.fbt._("and a special color for your {username}", [y.fbt._param("username", i.a.createElement("div", {
						className: Se.a.username,
						style: {
							color: n.color
						}
					}, i.a.createElement("img", {
						className: Se.a.userBadge,
						src: n.url
					}), s))], {
						hk: "1HJQkU"
					})), i.a.createElement("div", {
						className: Object(m.a)(Se.a.badges, {
							[Se.a.smallCollection]: e.length <= 24
						})
					}, e.map(e => i.a.createElement("img", {
						className: Se.a.badge,
						src: e.url,
						key: e.url
					}))))
				}
			}
			const Re = Object(o.c)({
				styleBadges: (e, {
					subredditId: t
				}) => {
					return Object(N.d)(e, t).filter(e => !(e.collections && e.collections.custom)).map(e => ({
						url: Object(C.d)(64, 64, e).url2x,
						color: e.extra && e.extra.style && e.extra.style.color || ""
					})).filter(e => e.color)
				},
				username: e => e.user.account && `u/${e.user.account.displayText}` || "u/username"
			});
			var Ae = Object(r.b)(Re)(Te),
				ze = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less"),
				Be = s.n(ze);
			const De = [{
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/frontpager_60@2x.png",
				text: "Frontpager"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_60@2x.png",
				text: "Creator"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/best_commenter_60@2x.png",
				text: "Top Commenter\nof the Post"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/rainbow_smash_60@2x.png",
				text: "Mod"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/achievement/subreddit_cake_week_120x120.png",
				text: "Subreddit\nCake Day"
			}, {
				icon: `${w.a.assetPath}/img/memberships/paywall/fortnitebr/newbie.png`,
				text: "Newbie"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_week_120x120.png",
				text: "Most Karma\n(Week)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_10_week_120x120.png",
				text: "Top 10 Karma\n(Week)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_month_120x120.png",
				text: "Most Karma\n(Month)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_10_month_120x120.png",
				text: "Top 10 Karma\n(Month)"
			}];
			class Le extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						emojisExpanded: !1
					}
				}
				render() {
					const {
						achievementBadges: e = De,
						className: t,
						correlationId: s,
						loyaltyBadges: n,
						meta: r,
						subreddit: a
					} = this.props;
					return i.a.createElement("article", {
						className: Object(m.a)(t, Be.a.container)
					}, i.a.createElement("header", {
						className: Be.a.title
					}, y.fbt._("{member} Benefits", [y.fbt._param("member", r.member)], {
						hk: "xstxK"
					})), I(a.id).loyaltyBadges && n && !!n.length && i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_4_loyalty_badges",
							correlationId: s,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Oe, {
						showProgressBar: !0,
						className: Be.a.section,
						title: y.fbt._("Loyalty Badges", null, {
							hk: "agXF2"
						}),
						description: y.fbt._("Show how long you’ve been supporting the subreddit.", null, {
							hk: "1r4ZKB"
						}),
						items: n
					})), I(a.id).achievementBadges && i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_5_achievement_badges",
							correlationId: s,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Oe, {
						className: Be.a.section,
						title: y.fbt._("Achievement Badges", null, {
							hk: "4asfWh"
						}),
						description: y.fbt._("Get rewarded for reaching subreddit milestones. Available to the community at large, thanks to your support.", null, {
							hk: "3sEG2W"
						}),
						items: e
					})), I(a.id).styleBadges && i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_6_style_badges",
							correlationId: s,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Ae, {
						className: Be.a.badges,
						subredditId: a.id
					})), I(a.id).emotes && i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_7_premium_emojis",
							correlationId: s,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(je, {
						subreddit: a,
						onExpand: () => this.setState({
							emojisExpanded: !0
						})
					})), I(a.id).gifs && i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_8_gifs_in_comments",
							correlationId: s,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(pe, {
						emojisExpanded: this.state.emojisExpanded,
						subreddit: a
					})))
				}
			}
			const He = Object(o.c)({
				loyaltyBadges: (e, {
					subreddit: t
				}) => {
					return Object(N.e)(e, t.id).map(e => ({
						icon: Object(C.d)(64, 64, e).url2x,
						text: e.title
					}))
				},
				meta: (e, {
					subreddit: t
				}) => Object(N.r)(e, t.id)
			});
			var Ve = Object(r.b)(He)(Le),
				We = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Ze = s("./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less"),
				Ge = s.n(Ze);
			class Ue extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						open: {}
					}, this.toggleQuestion = e => this.setState(t => ({
						...t,
						open: {
							...t.open,
							[e]: !t.open[e]
						}
					}))
				}
				render() {
					const {
						className: e,
						meta: t,
						subreddit: s
					} = this.props, n = function(e, t) {
						const {
							membershipAlt: s,
							memberAltPlural: n
						} = t, i = [{
							Q: y.fbt._("What is a {membershipAlt}?", [y.fbt._param("membershipAlt", s)], {
								hk: "1rUCQD"
							}),
							A: y.fbt._("The {membershipAlt} is a set of exclusive features available to users who purchase a premium subscription to the subreddit.", [y.fbt._param("membershipAlt", s)], {
								hk: "14RJNQ"
							})
						}, {
							Q: y.fbt._("Are {membershipAlt} features available on mobile apps?", [y.fbt._param("membershipAlt", s)], {
								hk: "3qaJjE"
							}),
							A: y.fbt._("The features will be supported on the iOS and Android apps, as well as web. However, new features may appear on web before mobile, depending on development circumstances.", null, {
								hk: "2h0SNv"
							})
						}];
						return e.canGift && i.push({
							Q: y.fbt._("Can I gift a {membershipAlt} to other users?", [y.fbt._param("membershipAlt", s)], {
								hk: "1K5FbF"
							}),
							A: y.fbt._("Yes! If you'd like to gift a {membershipAlt}, send a PM to admin u/jarins.", [y.fbt._param("membershipAlt", s)], {
								hk: "895QP"
							})
						}), e.dedicatedSupport && i.push({
							Q: y.fbt._("What are the {membershipAlt} fees used for?", [y.fbt._param("membershipAlt", s)], {
								hk: "3TLe8q"
							}),
							A: y.fbt._("{memberAltPlural} support a unique project by Reddit to develop new features for this community.", [y.fbt._param("memberAltPlural", n)], {
								hk: "3GXXxI"
							})
						}), e.canCancel && i.push({
							Q: y.fbt._("How do I cancel my {membershipAlt}?", [y.fbt._param("membershipAlt", s)], {
								hk: "1w2Ob7"
							}),
							A: y.fbt._("You can cancel your membership at any time from the User Settings page. Look for the {membershipAlt} tab.", [y.fbt._param("membershipAlt", s)], {
								hk: "2HGeHZ"
							})
						}), i
					}(I(s.id), t);
					return i.a.createElement("div", {
						className: Object(m.a)(e, Ge.a.container)
					}, i.a.createElement("div", {
						className: Ge.a.title
					}, y.fbt._("{membershipAlt} FAQ", [y.fbt._param("membershipAlt", t.membershipAlt)], {
						hk: "4tP0lw"
					})), n.map(({
						Q: e,
						A: t
					}) => i.a.createElement("div", {
						className: Ge.a.section,
						key: e,
						onClick: () => this.toggleQuestion(e)
					}, i.a.createElement("div", {
						className: Ge.a.row
					}, i.a.createElement("div", {
						className: Ge.a.question
					}, e), i.a.createElement(We.a, {
						className: Object(m.a)(Ge.a.arrow, {
							[Ge.a.arrowClose]: !this.state.open[e]
						})
					})), !!this.state.open[e] && i.a.createElement("div", {
						className: Ge.a.answer
					}, t))))
				}
			}
			const qe = Object(o.c)({
				meta: (e, {
					subreddit: t
				}) => Object(N.r)(e, t.id)
			});
			var Ke = Object(r.b)(qe)(Ue),
				Xe = s("./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less"),
				Ye = s.n(Xe);
			const Je = [7900, 8240];

			function Qe(e) {
				return i.a.createElement("footer", {
					className: Object(m.a)(Ye.a.container, e.className)
				}, i.a.createElement("div", {
					className: Ye.a.twoCol
				}, i.a.createElement("div", {
					className: Ye.a.copyright
				}, y.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1hv6BJ"
				}))), I(e.subreddit.id).animations && i.a.createElement("a", {
					className: Ye.a.link,
					href: "https://www.reddit.com/r/FortNiteBR/comments/a8mhn8/24_players_plays_all_i_want_for_christmas_is_you/",
					target: "_blank"
				}, i.a.createElement("img", {
					className: Ye.a.pianoKeyboard,
					src: Object(F.a)(e.subreddit, "piano_keyboard@2x.png")
				}), i.a.createElement(S.a, {
					scrollRange: Je
				}, t => i.a.createElement("img", {
					className: Ye.a.pianoCrowdBottom,
					src: Object(F.a)(e.subreddit, "piano_crowd_bottom@2x.png"),
					style: t
				})), i.a.createElement(S.a, {
					scrollRange: Je
				}, t => i.a.createElement("img", {
					className: Ye.a.pianoCrowdTop,
					src: Object(F.a)(e.subreddit, "piano_crowd_top@2x.png"),
					style: t
				})), i.a.createElement(S.a, {
					scrollRange: Je
				}, t => i.a.createElement("img", {
					className: Ye.a.pianoFlier,
					src: Object(F.a)(e.subreddit, "piano_flier@2x.png"),
					style: t
				}))))
			}
			var $e = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				et = s("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				tt = s("./src/reddit/actions/login.ts"),
				st = s("./src/reddit/components/Economics/Price/index.tsx"),
				nt = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				it = s("./src/higherOrderComponents/asModal/index.tsx"),
				rt = s("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts"),
				at = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ot = s("./src/reddit/featureFlags/component.tsx"),
				ct = s("./src/reddit/selectors/crypto/points.ts"),
				dt = s("./src/reddit/selectors/gov.ts"),
				lt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less"),
				mt = s.n(lt);
			const {
				fbt: ut
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function pt(e) {
				const {
					className: t,
					description: s,
					dollarPrice: n,
					monthly: r,
					subredditId: a,
					tokenPrice: o
				} = e;
				return i.a.createElement("article", {
					className: Object(m.a)(mt.a.container, t)
				}, i.a.createElement("div", {
					className: mt.a.description
				}, s), i.a.createElement("div", {
					className: mt.a.rhs
				}, i.a.createElement("div", {
					className: mt.a.price
				}, i.a.createElement(st.a, {
					dollarPrice: n,
					tokenPrice: o,
					monthly: r,
					subredditId: a
				})), r && i.a.createElement("div", {
					className: mt.a.monthlyText
				}, ut._("Paid monthly, cancel anytime", null, {
					hk: "1hG3H3"
				}))))
			}
			var ht = s("./src/lib/currency/centsToDollars/index.ts"),
				bt = s("./src/lib/prettyPrintNumber/index.ts"),
				ft = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				gt = s("./src/reddit/helpers/governance/tokens.ts"),
				_t = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less"),
				xt = s.n(_t);
			const vt = () => y.fbt._("{=Reddit User Agreement}, {=Privacy Policy} and {Previews Terms of Service}.", [y.fbt._param("=Reddit User Agreement", i.a.createElement("a", {
				className: xt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement",
				target: "_blank",
				rel: "noopener noreferrer"
			}, y.fbt._("Reddit User Agreement", null, {
				hk: "4yY7NE"
			}))), y.fbt._param("=Privacy Policy", i.a.createElement("a", {
				className: xt.a.link,
				href: "https://www.redditinc.com/policies/privacy-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, y.fbt._("Privacy Policy", null, {
				hk: "2clnUk"
			}))), y.fbt._param("Previews Terms of Service", i.a.createElement(ft.a, {
				className: xt.a.linkLast
			}))], {
				hk: "3Jmx1D"
			});
			const yt = Object(o.c)({
				meta: (e, {
					subredditId: t
				}) => Object(N.r)(e, t)
			});
			var wt = Object(r.b)(yt)((function(e) {
					if (e.purchaseType !== es.Subscription) return i.a.createElement("footer", {
						className: Object(m.a)(e.className, xt.a.container)
					}, y.fbt._("By purchasing, you agree to", null, {
						hk: "37Xh4k"
					}), " ", i.a.createElement(vt, null));
					const t = e.dollarPrice && `$${Object(ht.a)(e.dollarPrice,!0)}`,
						s = e.tokenPrice && Object(bt.a)(Object(gt.b)(e.tokenPrice, e.tokenDisplayConversion)) + " " + e.tokenName,
						n = t && s ? y.fbt._("{dollarPrice} or {tokenPrice}", [y.fbt._param("dollarPrice", t), y.fbt._param("tokenPrice", s)], {
							hk: "1uXVRd"
						}) : t || (s || "");
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, xt.a.container)
					}, y.fbt._("{membershipName} auto-renews for {price} a month. Cancel anytime in the Special Memberships section of your User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds. By continuing, you agree to", [y.fbt._param("membershipName", e.meta.membershipAlt), y.fbt._param("price", n)], {
						hk: "AMyMx"
					}), " ", i.a.createElement(vt, null))
				})),
				Ct = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less"),
				kt = s.n(Ct);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const jt = Object(o.c)({
				meta: (e, {
					subredditId: t
				}) => Object(N.r)(e, t)
			});
			var It = Object(r.b)(jt)((function(e) {
					const {
						className: t,
						meta: s,
						purchaseType: n
					} = e;
					return i.a.createElement("header", {
						className: Object(m.a)(t, kt.a.container)
					}, i.a.createElement("div", {
						className: kt.a.text
					}, n === es.Badge && Et._("Buy a badge", null, {
						hk: "1X4jZc"
					}), n === es.Subscription && Et._("Buy {membership-name}", [Et._param("membership-name", s.membershipAlt)], {
						hk: "ObrN"
					})), i.a.createElement(X.a, {
						className: kt.a.close,
						onClick: e.onClose
					}))
				})),
				Nt = s("./node_modules/bignumber.js/bignumber.js"),
				Ot = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				Pt = s("./src/reddit/controls/Button/index.tsx"),
				St = s("./node_modules/react-router-redux/es/index.js"),
				Mt = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Ft = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Tt = s("./src/reddit/actions/governance/errorToast.ts"),
				Rt = s("./src/reddit/actions/shortcuts/close.ts"),
				At = s("./src/reddit/contexts/ApiContext.tsx"),
				zt = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				Bt = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				Dt = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				Lt = s("./src/reddit/models/Badge/managementPage.ts"),
				Ht = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less"),
				Vt = s.n(Ht);
			const Wt = "subreddit-premium-purchase-braintree",
				Zt = (e, t, s) => y.fbt._("{communityName} {membershipAlt}. ${price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [y.fbt._param("communityName", e.displayText), y.fbt._param("membershipAlt", s.membershipAlt), y.fbt._param("price", Object(ht.a)(t, !0))], {
					hk: "3q2JqJ"
				});
			class Gt extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this._isMounted = !1, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === N.a.Subscribed, this.getId = () => Wt + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (this._isMounted = !0, !this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(Dt.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: Zt(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(Bt.d)(this.props.apiContext(), {
								nonce: t,
								price: this.props.price,
								productId: e && e.id || "membership",
								subredditId: this.props.subreddit.id,
								trial: this.props.trial,
								username: this.props.username
							}),
							username: this.props.username,
							onCancel: () => this.setState({
								submitting: !1
							}),
							onClientLoad: () => {
								this._isMounted && this.setState({
									loading: !1
								})
							},
							onError: (e, t, s) => {
								this._isMounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), this.props.sendEvent(e => {
									return {
										source: "meta",
										action: "fail",
										noun: "subscription_paypal_purchase",
										...x.defaults(e),
										actionInfo: {
											reason: t,
											paneName: s
										},
										correlationId: this.props.correlationId,
										subreddit: x.subreddit(e)
									}
								}))
							},
							onSubmitting: () => {
								this.setState({
									submitting: !0
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "subscription_paypal_purchase",
									correlationId: this.props.correlationId,
									...x.defaults(e),
									subreddit: x.subreddit(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful(this.props.isLoggedIn)
						})
					}
				}
				componentWillUnmount() {
					this._isMounted = !1
				}
				render() {
					return i.a.createElement("div", {
						className: Object(m.a)(this.props.className, Vt.a.container)
					}, this.alreadyPurchased() ? i.a.createElement("div", {
						className: Vt.a.alreadyPurchased
					}, y.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : i.a.createElement(n.Fragment, null, i.a.createElement("div", {
						className: Object(m.a)(Vt.a.button, {
							[Vt.a.buttonWithoutCards]: !this.props.showCards,
							[Vt.a.loading]: this.state.loading,
							[Vt.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && i.a.createElement(zt.a, {
						className: Vt.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const Ut = Object(o.c)({
				isLoggedIn: v.J,
				membershipProducts: (e, {
					subreddit: t
				}) => Object(N.k)(e, t.id),
				meta: (e, {
					subreddit: t
				}) => Object(N.r)(e, t.id),
				userIsPremiumSubscriber: (e, {
					subreddit: t
				}) => Object(N.w)(e, t.id)
			});
			var qt = Object(At.b)(Object(r.b)(Ut, (e, {
					subreddit: t,
					onComplete: s
				}) => ({
					onError: t => Object(Tt.a)(e, t),
					onPaymentSuccessful: n => {
						n ? e(Object(Ft.g)(t.id, !0)).then(() => e(Object(Rt.a)(() => {}))).then(() => s && s()).then(() => e(Object(Mt.c)({
							subredditId: t.id,
							initialView: Lt.c.MyBadges
						}))) : e(Object(St.b)(t.url))
					}
				}))(Object(h.c)(Gt))),
				Kt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less"),
				Xt = s.n(Kt);
			const {
				fbt: Yt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Jt(e) {
				return i.a.createElement("div", {
					className: Xt.a.dollarPurchase
				}, e.target.type === es.Badge && e.target.product.price && i.a.createElement(Ot.a, {
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.product.price,
					productId: e.target.product.id,
					subreddit: e.subreddit,
					onPaymentSuccessful: e.onPaymentComplete
				}), e.target.type === es.Subscription && e.target.dollarPrice && i.a.createElement(qt, {
					showCards: !0,
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.dollarPrice,
					subreddit: e.subreddit,
					trial: e.trial,
					uniqueId: "checkout",
					username: e.username,
					onComplete: e.onPaymentComplete
				}))
			}

			function Qt(e) {
				return !e.wallet || new Nt.BigNumber(e.wallet.amount).isLessThan(new Nt.BigNumber(e.tokenPrice)) ? i.a.createElement(Pt.i, {
					className: Xt.a.notEnoughTokens,
					disabled: !0
				}, Yt._("Not enough {token-name}", [Yt._param("token-name", e.tokenName)], {
					hk: "4urJTo"
				})) : i.a.createElement("div", {
					className: Xt.a.tokenPurchase
				}, i.a.createElement(Pt.i, {
					onClick: e.onPayWithTokens,
					className: Xt.a.tokenPurchaseButton
				}, Yt._("Pay with {token-name}", [Yt._param("token-name", e.tokenName)], {
					hk: "7b9oh"
				})), i.a.createElement("div", {
					className: Xt.a.requiresMobile
				}, Yt._("Requires Reddit Vault on mobile", null, {
					hk: "4oRRlp"
				})))
			}

			function $t(e) {
				const {
					dollarPrice: t,
					monthly: s,
					subreddit: n,
					tokenPrice: r
				} = e;
				return i.a.createElement("div", {
					className: e.className
				}, t && r && i.a.createElement("div", {
					className: Xt.a.selectPaymentBox
				}, i.a.createElement("div", {
					className: Xt.a.selectPaymentTitleBox
				}, i.a.createElement("span", {
					className: Xt.a.selectPaymentTitle
				}, Yt._("Select Payment Method", null, {
					hk: "15rwcx"
				}))), i.a.createElement("div", {
					className: Xt.a.paymentContainer
				}, i.a.createElement("div", {
					className: Xt.a.paymentAmount
				}, i.a.createElement(st.a, {
					tokenPrice: r,
					monthly: s,
					subredditId: n.id,
					hideTokenName: !0
				})), i.a.createElement(Qt, e)), i.a.createElement("div", {
					className: Xt.a.paymentContainer
				}, i.a.createElement("div", {
					className: Xt.a.paymentAmount
				}, i.a.createElement(st.a, {
					dollarPrice: t,
					monthly: s,
					subredditId: n.id,
					hideTokenName: !0
				})), i.a.createElement(Jt, e))), t && !r && i.a.createElement(Jt, e), r && !t && i.a.createElement(Qt, e))
			}
			var es, ts = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less"),
				ss = s.n(ts);
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}(es || (es = {}));
			class ns extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showTokenTransactionModal: !1
					}
				}
				componentDidMount() {
					this.props.viewEvent && this.props.sendEvent(this.props.viewEvent)
				}
				render() {
					const {
						correlationId: e,
						target: t,
						subreddit: s,
						username: n,
						onClose: r,
						onPaymentComplete: a,
						pointsDetails: o,
						wallet: c
					} = this.props;
					if (!s) return null;
					const d = t.type === es.Badge ? t.product.price : t.dollarPrice,
						l = t.type === es.Badge ? void 0 : t.tokenPrice;
					if (this.state.showTokenTransactionModal && l) return i.a.createElement(rt.a, {
						correlationId: e,
						onClose: r,
						onPaymentComplete: a,
						price: l,
						subredditId: s.id
					});
					const m = t.type === es.Subscription,
						u = (null == o ? void 0 : o.name) || "";
					return i.a.createElement("div", {
						className: ss.a.container
					}, i.a.createElement(It, {
						purchaseType: t.type,
						subredditId: s.id,
						onClose: r
					}), i.a.createElement("div", {
						className: ss.a.content
					}, i.a.createElement(pt, {
						className: ss.a.cart,
						description: t.description(s),
						dollarPrice: d,
						monthly: m,
						subredditId: s.id,
						tokenPrice: l
					}), i.a.createElement($t, {
						className: ss.a.payment,
						correlationId: e,
						dollarPrice: d,
						monthly: m,
						onPayWithTokens: () => this.setState({
							showTokenTransactionModal: !0
						}),
						onPaymentComplete: a,
						subreddit: s,
						target: t,
						tokenName: u,
						tokenPrice: l,
						trial: t.type === es.Subscription && t.trial,
						username: n,
						wallet: c
					}), i.a.createElement(wt, {
						className: ss.a.footer,
						dollarPrice: d,
						purchaseType: t.type,
						subredditId: s.id,
						tokenDisplayConversion: null == o ? void 0 : o.displayConversion,
						tokenName: u,
						tokenPrice: l
					})))
				}
			}
			const is = Object(o.c)({
					pointsDetails: (e, t) => Object(ct.b)(e, t.subredditId),
					subreddit: (e, t) => t.subreddit,
					wallet: dt.d
				}),
				rs = Object(r.b)((e, t) => {
					const s = Object(at.q)(e, t);
					return is(e, {
						...t,
						subreddit: s,
						subredditId: (null == s ? void 0 : s.id) || void 0
					})
				}),
				as = Object(at.t)(),
				os = Object(h.c)(ns);
			var cs = Object(ot.a)("spSpecialMemberships", Object(it.a)(as(rs(os)))),
				ds = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less"),
				ls = s.n(ds);

			function ms() {
				return (ms = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function us(e) {
				const {
					dollarPrice: t,
					tokenPrice: s,
					trial: r,
					...a
				} = e;
				return i.a.createElement(cs, ms({}, a, {
					target: {
						dollarPrice: t,
						tokenPrice: s,
						trial: r,
						description(e) {
							const t = e && e.displayText || "",
								s = y.fbt._("{communityName} Subreddit Supporter", [y.fbt._param("communityName", t)], {
									hk: "3VL2SS"
								});
							return i.a.createElement(n.Fragment, null, i.a.createElement("img", {
								className: ls.a.crown,
								src: `${w.a.assetPath}/img/memberships/paywall/fortnitebr/Crown.gif`
							}), s)
						},
						type: es.Subscription
					},
					viewEvent: t => ({
						source: "meta",
						action: "view",
						noun: "subscription_checkout_modal",
						correlationId: e.correlationId,
						...x.defaults(t),
						subreddit: x.subreddit(t)
					}),
					onPaymentComplete: e.onClose
				}))
			}
			var ps = s("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				hs = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				bs = s("./src/reddit/featureFlags/index.ts"),
				fs = s("./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less"),
				gs = s.n(fs);
			const {
				fbt: _s
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class xs extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						checkoutOpen: !1,
						username: void 0,
						usernameIsValid: !1
					}, this.handleUserNameChange = (e, t) => {
						this.setState({
							username: e,
							usernameIsValid: t
						})
					}, this.openCheckout = () => this.setState({
						checkoutOpen: !0
					}), this.closeCheckout = () => this.setState({
						checkoutOpen: !1
					})
				}
				componentDidUpdate(e) {
					this.props.checkoutOnLogin && !e.userIsLoggedIn && this.props.userIsLoggedIn && this.setState({
						checkoutOpen: !0
					})
				}
				render() {
					const {
						correlationId: e,
						customCrypto: t,
						meta: s,
						subredditId: n,
						userIsLoggedIn: r
					} = this.props, {
						canGift: a
					} = I(n), o = s.prices, c = o.usd, d = o.points, l = this.props.userIsPremiumSubscriber === N.a.Subscribed;
					return i.a.createElement(i.a.Fragment, null, !r && a && i.a.createElement(hs.c, {
						className: gs.a.recipient,
						onChange: this.handleUserNameChange
					}), i.a.createElement("button", {
						className: gs.a.checkout,
						disabled: l || a && !r && !this.state.usernameIsValid,
						onClick: r ? this.openCheckout : this.props.openLoginModal
					}, i.a.createElement("div", {
						className: gs.a.shimmer
					}), l ? _s._("Already a {supporter-term}", [_s._param("supporter-term", s.member)], {
						hk: "30uNOq"
					}) : _s._("Become a {supporter-term}", [_s._param("supporter-term", s.member)], {
						hk: "3TcAfC"
					})), i.a.createElement(st.a, {
						className: gs.a.price,
						dollarPrice: c,
						tokenPrice: d,
						monthly: !0,
						subredditId: n
					}), this.state.checkoutOpen ? t ? i.a.createElement(nt.a, {
						withOverlay: !0,
						correlationId: e,
						subredditId: n,
						onClose: this.closeCheckout
					}) : i.a.createElement(us, {
						withOverlay: !0,
						correlationId: e,
						dollarPrice: c,
						tokenPrice: d,
						username: !r && this.state.usernameIsValid ? this.state.username : void 0,
						onClose: this.closeCheckout
					}) : null, i.a.createElement(ps.a, {
						subredditId: n
					}))
				}
			}
			const vs = Object(o.c)({
				meta: (e, {
					subredditId: t
				}) => Object(N.r)(e, t),
				customCrypto: bs.d.spCustomCrypto,
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(N.w)(e, t)
			});
			var ys = Object(r.b)(vs, e => ({
					openLoginModal: () => e(Object(tt.h)())
				}))(xs),
				ws = s("./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less"),
				Cs = s.n(ws);
			const ks = Object(o.c)({
				meta: (e, {
					subreddit: t
				}) => Object(N.r)(e, t.id)
			});
			var Es, js, Is = Object(r.b)(ks)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: n,
						subreddit: r
					} = e;
					return i.a.createElement("div", {
						className: Object(m.a)(t, Cs.a.container)
					}, i.a.createElement("div", {
						className: Cs.a.logo
					}, i.a.createElement(et.a, {
						className: Cs.a.radialHighlightInner
					}), i.a.createElement(et.a, {
						className: Cs.a.radialHighlightOuter
					}), i.a.createElement($e.a, {
						size: "large",
						subreddit: r
					})), i.a.createElement("header", {
						className: Cs.a.subscriptionName
					}, "r/", r.name, " ", n.memberAltPlural), i.a.createElement("article", {
						className: Cs.a.description
					}, y.fbt._("Support r/{communityName}. Get exclusive features in the community.", [y.fbt._param("communityName", r.name)], {
						hk: "13ofnK"
					})), i.a.createElement(ys, {
						checkoutOnLogin: !0,
						correlationId: s,
						subredditId: r.id
					}))
				})),
				Ns = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Os = s("./node_modules/react-motion/lib/react-motion.js"),
				Ps = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less"),
				Ss = s.n(Ps);
			! function(e) {
				e[e.Right = 110] = "Right", e[e.Center = 50] = "Center", e[e.Left = -110] = "Left"
			}(Es || (Es = {})),
			function(e) {
				e[e.Right = 0] = "Right", e[e.Center = -310] = "Center", e[e.Left = -620] = "Left"
			}(js || (js = {}));
			const Ms = ge()([{
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/jumping_crystal_40.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(168, 132, 100)"
							}
						},
						media: {
							0: {
								"40x40": "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/custom/brother_bear_40x40.png"
							}
						}
					}],
					text: "This subreddit gives back to its community through giveaways and to give my share to make it happen is amazing. The badges and emotes that come with it are just the cherry on top.",
					username: "thebrotherbear"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/jumping_crystal_40.png"
							}
						}
					}, {
						extra: {},
						media: {
							0: {
								"40x40": "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_week_40x40.png"
							}
						}
					}],
					text: "It feels nice to be able to give back to the community that I enjoy",
					username: "Ikcatcher"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_40.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(110, 108, 148)"
							}
						},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/21_rocket_40.png"
							}
						}
					}],
					text: "I love how r/FortNiteBR is such a positive, creative and supportive community!",
					username: "enzait"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_40.png"
							}
						}
					}, {
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/frontpager_60.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(187, 100, 204)"
							}
						},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/14_dancefloor_40.png"
							}
						}
					}],
					text: "You'll always find the best of the best content on here, and you know it'll be from the original creator.",
					username: "Jachael123_"
				}]).slice(0, 3),
				Fs = 1e4;
			class Ts extends i.a.Component {
				constructor() {
					super(...arguments), this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.props.testimonies.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, Fs)
					}
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, Fs)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						flatDisplay: t,
						testimonies: s
					} = this.props, {
						currentSlideIdx: r
					} = this.state;
					return i.a.createElement("div", {
						className: Object(m.a)(e, Ss.a.container)
					}, i.a.createElement(Os.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								index: 0
							},
							style: {
								left: Es.Center,
								marginLeft: js.Center,
								opacity: 1
							}
						}],
						styles: [{
							key: `slide-${r}`,
							data: {
								index: r
							},
							style: {
								left: Object(Os.spring)(Es.Center),
								marginLeft: Object(Os.spring)(js.Center),
								opacity: Object(Os.spring)(1)
							}
						}],
						willEnter: () => ({
							left: Es.Right,
							marginLeft: js.Right,
							opacity: 0
						}),
						willLeave: () => ({
							left: Object(Os.spring)(Es.Left),
							marginLeft: Object(Os.spring)(js.Left),
							opacity: Object(Os.spring)(0)
						})
					}, e => i.a.createElement(n.Fragment, null, e.map(e => {
						const r = s[e.data.index],
							a = r.badges.map(e => {
								const {
									url2x: t
								} = Object(C.d)(20, 20, e);
								return t
							}),
							o = be()(r.badges),
							c = o && o.extra && o.extra.style && o.extra.style.color;
						return i.a.createElement(n.Fragment, null, i.a.createElement("div", {
							className: Ss.a.testimony,
							key: e.key,
							style: {
								left: `${e.style.left}%`,
								marginLeft: `${e.style.marginLeft}px`
							},
							onClick: this.gotoNextSlide
						}, i.a.createElement("svg", {
							className: Object(m.a)(Ss.a.testimonyOutline, {
								[Ss.a.testimonyOutlineFlat]: !!t
							}),
							viewBox: " 0 0 619 243",
							xmlns: "http://www.w3.org/2000/svg"
						}, i.a.createElement("path", {
							d: "M78.9989 58.4826C70.5322 59.7119 62.7479 63.9147 58.4403 71.3066C53.9012 79.0958 49 90.4192 49 103.001C49 116.034 51.9394 127.873 54.5482 135.813C56.7437 142.495 62.1609 147.369 68.9713 149.128C85.4673 153.389 123.116 160.96 193.436 165.111C196.937 168.49 198.713 173.771 198.713 181.427C198.713 181.427 201.841 181.739 207 174.001C208.968 171.049 209.995 168.285 210.517 166.018C214.102 166.188 217.762 166.349 221.5 166.501C325.757 170.721 486.315 161.046 533.817 157.928C542.454 157.361 550.345 152.8 554.249 145.074C559.465 134.75 566.176 118.719 568.5 101.001C570.389 86.6005 567.819 74.8754 564.58 66.5092C560.681 56.4386 550.794 50.9089 540.11 49.3352C504.988 44.1618 415.934 33.7517 297.5 39.5005C179.641 45.2214 106.881 54.4345 78.9989 58.4826Z"
						}), i.a.createElement("path", {
							d: "M58.4403 71.3066L57.5763 70.8031L58.4403 71.3066ZM78.9989 58.4826L79.1425 59.4723L78.9989 58.4826ZM54.5482 135.813L55.4982 135.501L54.5482 135.813ZM68.9713 149.128L69.2213 148.16L68.9713 149.128ZM193.436 165.111L194.13 164.392L193.864 164.135L193.495 164.113L193.436 165.111ZM198.713 181.427H197.713V182.332L198.614 182.422L198.713 181.427ZM207 174.001L207.832 174.555L207 174.001ZM210.517 166.018L210.564 165.02L209.73 164.98L209.542 165.794L210.517 166.018ZM221.5 166.501L221.46 167.5L221.5 166.501ZM533.817 157.928L533.882 158.926L533.817 157.928ZM554.249 145.074L555.141 145.525L554.249 145.074ZM568.5 101.001L567.508 100.87L568.5 101.001ZM564.58 66.5092L565.512 66.1482L564.58 66.5092ZM540.11 49.3352L539.964 50.3245L540.11 49.3352ZM297.5 39.5005L297.548 40.4993L297.5 39.5005ZM59.3043 71.8101C63.4213 64.7452 70.8961 60.6695 79.1425 59.4723L78.8552 57.493C70.1682 58.7542 62.0745 63.0841 57.5763 70.8031L59.3043 71.8101ZM50 103.001C50 90.6676 54.8096 79.523 59.3043 71.8101L57.5763 70.8031C52.9927 78.6685 48 90.1709 48 103.001H50ZM55.4982 135.501C52.9092 127.621 50 115.892 50 103.001H48C48 116.176 50.9697 128.125 53.5981 136.125L55.4982 135.501ZM69.2213 148.16C62.7244 146.482 57.5822 141.844 55.4982 135.501L53.5981 136.125C55.9052 143.147 61.5974 148.257 68.7212 150.096L69.2213 148.16ZM193.495 164.113C123.223 159.964 85.6407 152.401 69.2213 148.16L68.7212 150.096C85.2939 154.377 123.009 161.955 193.377 166.11L193.495 164.113ZM199.713 181.427C199.713 173.637 197.907 168.036 194.13 164.392L192.742 165.831C195.967 168.943 197.713 173.906 197.713 181.427H199.713ZM206.168 173.446C203.639 177.239 201.662 178.976 200.393 179.767C199.761 180.161 199.306 180.319 199.044 180.384C198.913 180.416 198.827 180.425 198.789 180.428C198.77 180.429 198.762 180.429 198.766 180.429C198.768 180.429 198.773 180.429 198.781 180.429C198.784 180.43 198.789 180.43 198.794 180.43C198.797 180.431 198.8 180.431 198.803 180.431C198.804 180.431 198.806 180.431 198.808 180.431C198.808 180.432 198.81 180.432 198.81 180.432C198.811 180.432 198.812 180.432 198.713 181.427C198.614 182.422 198.615 182.422 198.617 182.422C198.617 182.422 198.618 182.422 198.619 182.423C198.621 182.423 198.623 182.423 198.625 182.423C198.628 182.423 198.632 182.424 198.637 182.424C198.645 182.425 198.654 182.425 198.664 182.426C198.684 182.427 198.707 182.428 198.733 182.428C198.785 182.429 198.85 182.428 198.926 182.423C199.079 182.412 199.278 182.385 199.521 182.326C200.006 182.207 200.656 181.96 201.451 181.464C203.035 180.477 205.202 178.5 207.832 174.555L206.168 173.446ZM209.542 165.794C209.045 167.952 208.063 170.603 206.168 173.446L207.832 174.555C209.872 171.495 210.944 168.618 211.491 166.243L209.542 165.794ZM221.54 165.501C217.805 165.35 214.147 165.189 210.564 165.02L210.47 167.017C214.057 167.187 217.72 167.348 221.46 167.5L221.54 165.501ZM533.751 156.93C486.241 160.048 325.736 169.72 221.54 165.501L221.46 167.5C325.779 171.723 486.388 162.043 533.882 158.926L533.751 156.93ZM553.356 144.623C549.634 151.989 542.087 156.383 533.751 156.93L533.882 158.926C542.82 158.339 551.056 153.611 555.141 145.525L553.356 144.623ZM567.508 100.87C565.205 118.433 558.547 134.351 553.356 144.623L555.141 145.525C560.384 135.149 567.147 119.004 569.492 101.131L567.508 100.87ZM563.647 66.8703C566.836 75.1069 569.372 86.6627 567.508 100.87L569.492 101.131C571.405 86.5382 568.802 74.6438 565.512 66.1482L563.647 66.8703ZM539.964 50.3245C550.439 51.8675 559.924 57.2547 563.647 66.8703L565.512 66.1482C561.437 55.6226 551.148 49.9503 540.256 48.3459L539.964 50.3245ZM297.548 40.4993C415.903 34.7544 504.889 45.1581 539.964 50.3245L540.256 48.3459C505.086 43.1655 415.966 32.749 297.452 38.5017L297.548 40.4993ZM79.1425 59.4723C106.993 55.4287 179.721 46.2187 297.548 40.4993L297.452 38.5017C179.56 44.2242 106.769 53.4403 78.8552 57.493L79.1425 59.4723Z",
							fill: "#9F68D4",
							"fill-opacity": "0.1"
						})), i.a.createElement("div", {
							className: Ss.a.testimonyText
						}, r.text)), i.a.createElement("div", {
							className: Ss.a.user,
							key: `user-${e.key}`,
							style: {
								opacity: e.style.opacity
							}
						}, a.map(e => i.a.createElement("img", {
							className: Ss.a.badge,
							src: e
						})), i.a.createElement("div", {
							className: Ss.a.username,
							style: {
								color: c
							}
						}, `u/${r.username}`)))
					}))), i.a.createElement("div", {
						className: Ss.a.indicators
					}, s.map((e, t) => i.a.createElement("div", {
						className: Object(m.a)(Ss.a.indicator, {
							[Ss.a.indicatorSelected]: t === r
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))
				}
			}
			Ts.defaultProps = {
				testimonies: Ms
			};
			var Rs = s("./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less"),
				As = s.n(Rs);
			const zs = Object(o.c)({
				meta: (e, {
					subreddit: t
				}) => Object(N.r)(e, t.id)
			});
			var Bs = Object(r.b)(zs)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: n,
						subreddit: r
					} = e, a = I(r.id);
					return i.a.createElement("article", {
						className: Object(m.a)(As.a.container, t)
					}, a.communityThanks && i.a.createElement("header", {
						className: As.a.title
					}, y.fbt._("The Community Thanks You", null, {
						hk: "28CsBt"
					})), a.testimonials && i.a.createElement(Ts, {
						flatDisplay: !0
					}), a.testimonials && i.a.createElement("div", {
						className: As.a.divider
					}), i.a.createElement("footer", {
						className: As.a.footer
					}, i.a.createElement($e.a, {
						className: As.a.brand,
						size: "large",
						subreddit: r
					}), i.a.createElement("div", {
						className: As.a.cta
					}, i.a.createElement("div", {
						className: As.a.description
					}, y.fbt._("Support r/{communityName} with a {membership}", [y.fbt._param("communityName", r.name), y.fbt._param("membership", n.membership)], {
						hk: "3M1a22"
					})), i.a.createElement("div", {
						className: As.a.benefits
					}, a.styleBadges && i.a.createElement("div", {
						className: As.a.benefit
					}, i.a.createElement(Ns.a, {
						className: As.a.check
					}), "Add a badge and color to your username"), a.emotes && i.a.createElement("div", {
						className: As.a.benefit
					}, i.a.createElement(Ns.a, {
						className: As.a.check
					}), "Get access to premium animated emotes"), a.gifs && i.a.createElement("div", {
						className: As.a.benefit
					}, i.a.createElement(Ns.a, {
						className: As.a.check
					}), "Add GIFs to your comments")), i.a.createElement(ys, {
						subredditId: r.id,
						correlationId: s
					}))))
				})),
				Ds = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less"),
				Ls = s.n(Ds),
				Hs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				Vs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less"),
				Ws = s.n(Vs);
			const Zs = [800, 1200];

			function Gs(e) {
				const {
					className: t,
					subreddit: s
				} = e;
				return i.a.createElement("header", {
					className: Object(m.a)(Ws.a.container, t)
				}, i.a.createElement("div", {
					className: Ws.a.tag
				}, y.fbt._("benefits", null, {
					hk: "3HAYfG"
				})), i.a.createElement("div", {
					className: Ws.a.title
				}, y.fbt._("What do you get?", null, {
					hk: "3PyKKB"
				})), I(s.id).animations && i.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/a1hxn4/the_moment_my_son_discovered_that_his_skin/",
					target: "_blank"
				}, i.a.createElement(S.a, {
					scrollRange: Zs
				}, e => i.a.createElement("img", {
					className: Ws.a.chickenRightArm,
					src: Object(F.a)(s, "chicken_right_arm@2x.png"),
					style: e
				})), i.a.createElement("img", {
					className: Ws.a.chickenTorso,
					src: Object(F.a)(s, "chicken_torso@2x.png")
				}), i.a.createElement(S.a, {
					scrollRange: Zs
				}, e => i.a.createElement("img", {
					className: Ws.a.chickenLeftArm,
					src: Object(F.a)(s, "chicken_left_arm@2x.png"),
					style: e
				})), i.a.createElement("img", {
					className: Ws.a.chickenLeftShoulder,
					src: Object(F.a)(s, "chicken_left_shoulder@2x.png")
				}), i.a.createElement("img", {
					className: Ws.a.chickenHead,
					src: Object(F.a)(s, "chicken_head@2x.png")
				})))
			}
			var Us = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less"),
				qs = s.n(Us);

			function Ks(e) {
				return i.a.createElement("div", {
					className: Object(m.a)(e.className, qs.a.container)
				}, i.a.createElement("div", {
					className: qs.a.circle
				}, e.index), i.a.createElement("div", {
					className: qs.a.circleShimmer
				}), i.a.createElement("div", {
					className: qs.a.tooltipWrapper
				}, i.a.createElement("svg", {
					className: qs.a.tooltip,
					viewBox: "0 0 140 60",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H60.3934L69.6066 59.2132L78.8198 50H132C136.418 50 140 46.4183 140 42V8C140 3.58172 136.418 0 132 0H8Z"
				})), i.a.createElement("div", {
					className: qs.a.tooltipText
				}, e.text)))
			}
			var Xs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less"),
				Ys = s.n(Xs);

			function Js(e) {
				const t = Object(F.a)(e.subreddit, "what-do-you-get.png");
				return i.a.createElement("article", {
					className: Object(m.a)(Ys.a.container, e.className)
				}, i.a.createElement(Gs, {
					subreddit: e.subreddit
				}), i.a.createElement("div", {
					className: Ys.a.content
				}, i.a.createElement("img", {
					className: Ys.a.img,
					src: t
				}), i.a.createElement("img", {
					className: Ys.a.emoji,
					src: "https://meta.redditmedia.com/img/fortnitebr/emotes/oof-2x.gif"
				}), i.a.createElement("img", {
					className: Ys.a.gif,
					src: "http://giphygifs.s3.amazonaws.com/media/HX3lSnGXZnaWk/giphy.gif"
				}), i.a.createElement(Ks, {
					className: Ys.a.tip1,
					index: 1,
					text: y.fbt._("Get up to 3 badges", null, {
						hk: "2ftguA"
					})
				}), i.a.createElement(Ks, {
					className: Ys.a.tip2,
					index: 2,
					text: y.fbt._("Use animated emojis in comments", null, {
						hk: "1teakj"
					})
				}), i.a.createElement(Ks, {
					className: Ys.a.tip3,
					index: 3,
					text: y.fbt._("Embed GIF directly in your comments", null, {
						hk: "1fLSUy"
					})
				})), I(e.subreddit.id).animations && i.a.createElement(Hs.a, {
					className: Ys.a.footer,
					subreddit: e.subreddit
				}))
			}

			function Qs(e) {
				const t = I(e.subreddit.id),
					s = t.styleBadges && t.emotes && t.gifs;
				return i.a.createElement("article", {
					className: Object(m.a)(e.className, Ls.a.container)
				}, t.testimonials && i.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_2_testimonials",
						correlationId: e.correlationId,
						...x.defaults(t),
						subreddit: x.subreddit(t)
					})
				}, i.a.createElement(Ts, null)), s && i.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_3_what_do_you_get",
						correlationId: e.correlationId,
						...x.defaults(t),
						subreddit: x.subreddit(t)
					})
				}, i.a.createElement(Js, {
					subreddit: e.subreddit
				})))
			}
			var $s = s("./src/reddit/pages/meta/MembershipPaywallPage/index.m.less"),
				en = s.n($s);
			class tn extends i.a.Component {
				constructor(e) {
					super(e);
					const t = Object(u.a)(location.search);
					this.correlationId = t && t.get("corr") || d()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_page",
						correlationId: this.correlationId,
						...x.defaults(e),
						subreddit: x.subreddit(e)
					}))
				}
				render() {
					const {
						isOverlay: e,
						subreddit: t
					} = this.props;
					return t ? f.b.has(t.name.toLowerCase()) ? i.a.createElement("div", {
						className: Object(m.a)(en.a.container, {
							[en.a.notOverlay]: !e,
							[en.a.overlay]: e
						})
					}, i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_1_intro",
							correlationId: this.correlationId,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Is, {
						correlationId: this.correlationId,
						subreddit: t
					})), i.a.createElement(Qs, {
						className: en.a.whatDoYouGet,
						correlationId: this.correlationId,
						subreddit: t
					}), i.a.createElement(Ve, {
						className: en.a.benefits,
						correlationId: this.correlationId,
						subreddit: t
					}), i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_10_community_thanks",
							correlationId: this.correlationId,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Bs, {
						className: en.a.thanks,
						correlationId: this.correlationId,
						subreddit: t
					})), i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_11_faq",
							correlationId: this.correlationId,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Ke, {
						className: en.a.faq,
						subreddit: t
					})), i.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_12_footer",
							correlationId: this.correlationId,
							...x.defaults(e),
							subreddit: x.subreddit(e)
						})
					}, i.a.createElement(Qe, {
						className: en.a.footer,
						subreddit: t
					}))) : i.a.createElement(a.c, {
						to: `/r/${t.name}`
					}) : null
				}
			}
			const sn = Object(o.c)({
				currentUser: v.j,
				isOverlay: g.h,
				subreddit: (e, {
					match: t
				}) => {
					const s = t.params.subredditName;
					if (s) return Object(_.y)(e, {
						subredditName: s
					})
				}
			});
			var nn;
			t.default = Object(h.c)(Object(r.b)(sn)((nn = tn, class extends n.Component {
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
					return this.state.mounted ? i.a.createElement(nn, this.props) : null
				}
			})))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/economics/claims/constants.ts")),
				r = s("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var o = (e = a, t) => {
					switch (t.type) {
						case r.a: {
							const s = t.payload.claimPoints || {},
								n = Object.keys(s).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: s[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var s;
								(null === (s = e[t]) || void 0 === s ? void 0 : s.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case i.b:
						case i.a:
							const {
								subredditId: s
							} = t.payload;
							return {
								...e, [s]: {
									...e[s],
									isClaiming: t.type === i.b
								}
							};
						default:
							return e
					}
				},
				c = s("./src/reddit/actions/governance/constants.ts");
			const d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, s, n, i, r;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == a ? void 0 : a.contracts,
					c = null == o ? void 0 : o.unlocked,
					d = null !== (n = null === (s = e.walletProvider) || void 0 === s ? void 0 : s.provider) && void 0 !== n ? n : e.provider,
					m = !!(null === (i = e.walletProvider) || void 0 === i ? void 0 : i.inTransition),
					u = (null == c ? void 0 : c.decimals) || 0,
					p = "1" + "0".repeat(u);
				return {
					blockchainProvider: d,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: o,
					decimals: u,
					displayConversion: p,
					images: e.images || l,
					inTransition: m,
					name: e.name,
					nomenclature: null === (r = e.extra) || void 0 === r ? void 0 : r.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var u = (e = d, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: s,
							meta: n
						} = t.payload;
						return {
							...e,
							[s]: m(n)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var h = (e = p, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: s,
							wallets: n
						} = t.payload, i = Object.keys(n).reduce((t, i) => {
							return {
								...t,
								[i]: {
									...e[i] || {},
									[s]: n[i]
								}
							}
						}, {});
						return {
							...e,
							...i
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: o,
				points: u,
				publicWallets: h
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/endpoints/governance/crypto.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: o.a
				}
			});
			const c = (e, t) => {
				var s, n, i;
				return t ? null === (i = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === n ? void 0 : n.points) || void 0 === i ? void 0 : i[t] : void 0
			};

			function d() {
				const e = Object(i.bb)(),
					t = Object(n.e)(t => Object(i.q)(t, {
						pageLayer: e
					})),
					s = Object(n.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: s
				}
			}
			const l = (e, t) => {
				var s;
				const n = null === (s = c(e, t)) || void 0 === s ? void 0 : s.blockchainProvider;
				return n === r.a.Ethereum || n === r.a.Rinkeby || n === r.a.EthTraderEthereum || n === r.a.EthTraderRinkeby || n === r.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "o", (function() {
				return g
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "w", (function() {
				return x
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "y", (function() {
				return k
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "p", (function() {
				return P
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "r", (function() {
				return R
			})), s.d(t, "x", (function() {
				return A
			})), s.d(t, "t", (function() {
				return z
			})), s.d(t, "u", (function() {
				return B
			})), s.d(t, "b", (function() {
				return D
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "s", (function() {
				return H
			})), s.d(t, "g", (function() {
				return V
			})), s.d(t, "m", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/helpers/economics/sortBadges.ts"),
				r = s("./src/reddit/helpers/richTextJson/index.ts"),
				a = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				u = s("./src/reddit/selectors/commentSelector.ts"),
				p = s("./src/reddit/selectors/gold/powerups/index.ts"),
				h = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const b = [],
				f = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				g = (e, t) => {
					const s = f(e, t);
					return s && s.endsAt || null
				};
			var _;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(_ || (_ = {}));
			const x = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = g(e, t),
							n = Date.now();
						return s && n < s ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				v = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[o.a.Loyalty]: n.find(e => e.placement === a.a.First),
							[o.a.Achievement]: n.find(e => e.placement === a.a.Second),
							[o.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function y(e, t) {
				return (null == e ? void 0 : e.length) ? Object(i.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const w = (e, t, s) => {
					var i;
					if (!n.d.spBadges(e)) return b;
					return y(null === (i = e.users.appliedBadges[s]) || void 0 === i ? void 0 : i[t], e.badges.models)
				},
				C = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function k(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function E(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(s) && s.userId === i) return s;
				const r = e.badges.models,
					o = e.user.ownedBadges[n] || {},
					c = Object(a.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => r[e]).find(e => e && e.type === c)
			}

			function j(e, t, s, n) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === m.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return i.data.collections[s];
					if (s === o.a.Cosmetic && n) return i.data.collections[s][n]
				}
				return b
			}

			function I(e, t) {
				const s = j(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function N(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return b
			}

			function O(e, t) {
				return j(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const P = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var S;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(S || (S = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				T = (e, t) => {
					if (!t) return {};
					const s = M.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = f(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				R = (e, t) => {
					var s, n, i, r;
					const a = (null === (r = null === (i = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === n ? void 0 : n.points) || void 0 === i ? void 0 : i[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || M;
					return {
						prices: T(e, t),
						member: a.member || M.member,
						memberPlural: a.memberPlural || M.memberPlural,
						memberAlt: a.memberAlt || M.memberAlt,
						memberAltPlural: a.memberAltPlural || M.memberAltPlural,
						membership: a.membership || M.membership,
						membershipAlt: a.membershipAlt || M.membershipAlt
					}
				},
				A = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				z = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				L = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				H = (e, t, s) => {
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.p)(e, {
							subredditId: t
						})) return !0;
					const i = "replyToPost" !== s && Object(u.a)(e, {
						commentId: s
					});
					if (i && Object(r.a)(i)) return !0;
					const a = n.d.spGiphy(e),
						o = L(e, t);
					return !(!a || !o) || a && o
				},
				V = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			const i = [],
				r = {},
				a = (e, t) => {
					const s = p(e, t);
					if (s) return s.mainHeader
				},
				o = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				c = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : r
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const s = d(e, t),
						n = s && s.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				m = (e, t) => {
					const s = d(e, t);
					return s && s.amount || "0"
				},
				u = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || i
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MembershipPaywallPage.29f301203688d1b72bfc.js.map