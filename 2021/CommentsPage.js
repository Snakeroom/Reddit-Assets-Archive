// https://www.redditstatic.com/desktop2x/CommentsPage.4f555d68302a43b7699e.js
// Retrieved at 11/11/2021, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function o(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function n(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === n(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var d = {
					"http:": {
						validate: function(e, t, s) {
							var o = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(o) ? o.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var o = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(o) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : o.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var o = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(o) ? o.match(s.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					o = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || o.push(c), o.push(t.src_xn), t.src_tlds = o.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var d = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var s = e.__schemas__[t];
					if (null !== s) {
						var o = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = o, "[object Object]" === n(s)) return ! function(e) {
							return "[object RegExp]" === n(e)
						}(s.validate) ? r(s.validate) ? o.validate = s.validate : l(t, s) : o.validate = function(e) {
							return function(t, s) {
								var o = t.slice(s);
								return e.test(o) ? o.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? o.normalize = s.normalize : s.normalize ? l(t, s) : o.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
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
				var m = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(i).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function u(e, t) {
				var s = e.__index__,
					o = e.__last_index__,
					n = e.__text_cache__.slice(s, o);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = o + t, this.raw = n, this.text = n, this.url = n
			}

			function p(e, t) {
				var s = new u(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = o({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = o({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = o(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, o, n, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (n = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (o = e.match(this.re.email_fuzzy)) && (r = o.index + o[1].length, i = o.index + o[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var o = t ? e.slice(t) : e; this.test(o);) s.push(p(this, t)), o = o.slice(this.__last_index__), t += this.__last_index__;
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
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				o = Math.random;
			e.exports = function(e, t) {
				return e + s(o() * (t - e + 1))
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseDelay.js"),
				n = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = n
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseRandom.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && n(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return o(e, t)
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
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(d.Xb.Bottom_cell),
						t = Object(m.a)(d.Xb.Bottom_cell_dismissible),
						s = Object(m.a)(d.Xb.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.Xb.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.Xb.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Xb.Bottom_sheet);
					return e || o || n ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const h = 250,
				b = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(c.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(d.Xb.Bottom_cell_dismissible_immediate_trigger);
						return o.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.d),
									o = e ? e.scrollTop : n().scrollY,
									r = n().innerHeight,
									i = r / 3,
									d = 2 * r;
								o >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: b
						}), [l, r, s, t, e])
					}();
					return o.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(o.a)(n.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return j
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(i.g),
				g = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				x = Object(n.a)(i.c),
				C = Object(n.a)(i.f),
				v = Object(n.a)(i.j),
				_ = Object(n.a)(i.i),
				y = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						r = Object(u.e)(n),
						i = Object(u.d)(n),
						c = Object(h.J)(n);
					if (r || !i) return;
					e(f());
					let p = !1;
					try {
						const t = c ? o.LoggedInGeo : o.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (O(t)) {
								if (k(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (E(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: n,
											category: r
										} = s.focusRecommendations[0],
										i = [o, n],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(o),
										u = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(b(u)), p = !0
								}
							} else p = !1
						}
					} catch (C) {
						p = !1
					}
					p || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !k(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, j = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(p.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.K)(i);
						return Object(r.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(C({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return tt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return st
			})), s.d(t, "commentsPagePending", (function() {
				return ot
			})), s.d(t, "commentsPageLoaded", (function() {
				return nt
			})), s.d(t, "commentsPageFailed", (function() {
				return rt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return it
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return at
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return dt
			})), s.d(t, "commentsPageRequested", (function() {
				return ct
			})), s.d(t, "commentsPageDataRequested", (function() {
				return lt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return mt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ut
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				u = s("./src/reddit/endpoints/profile/info.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/pageTitle.ts"),
				g = s("./src/reddit/actions/economics/helpers/async.ts"),
				f = s("./src/reddit/actions/externalAccount.ts"),
				x = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/actions/profile/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/constants/graphql.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				S = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Subreddit/index.ts"),
				F = s("./src/reddit/models/User/index.ts"),
				N = s("./src/reddit/selectors/category.ts"),
				A = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				R = s("./src/reddit/selectors/experiments/postSeo.ts"),
				M = s("./node_modules/reselect/es/index.js"),
				B = s("./src/reddit/constants/experiments.ts"),
				D = s("./src/reddit/helpers/chooseVariant/index.ts"),
				V = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				W = s("./src/reddit/selectors/platform.ts"),
				H = s("./node_modules/fbt/lib/FbtPublic.js"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				K = s("./src/reddit/selectors/user.ts");
			const q = new Set([p.g.AntiEvilOps, p.g.AutomodFiltered, p.g.CommunityOps, p.g.ContentTakedown, p.g.CopyrightTakedown, p.g.Moderator, p.g.Reddit]),
				G = new Set([p.g.Author, p.g.AuthorDeleted]),
				Y = Object(M.a)(V.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return q.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = H.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(z.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== L.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				Q = Object(M.a)(V.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return G.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = H.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(z.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== L.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				Z = Object(M.a)(K.k, V.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				J = Object(M.a)(W.f, V.a, Y, Q, U.a, Z, U.b, (e, t, s, o, n, r, i) => {
					if (!e || !t || n) return !1;
					if (o) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var X = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				$ = s("./src/reddit/selectors/posts.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/lib/makeActionCreator/index.ts"),
				se = s("./src/lib/makeCommentsPageKey/index.ts"),
				oe = s("./src/reddit/actions/ads/index.ts"),
				ne = s("./src/reddit/helpers/canonicalUrls.ts"),
				re = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ie = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ae = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				de = s("./src/lib/performanceTimings/index.tsx"),
				ce = s("./src/reddit/actions/gold/powerups.ts"),
				le = s("./src/lib/makeListingKey/index.ts"),
				me = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ue = Object(te.a)(me.b),
				pe = Object(te.a)(me.a);
			var he = s("./src/reddit/actions/linkedPosts/constants.ts");
			const be = Object(te.a)(he.a),
				ge = Object(te.a)(he.c),
				fe = Object(te.a)(he.b);
			var xe = s("./src/lib/makeGqlRequest/index.ts"),
				Ce = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				ve = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_e = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				ye = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Oe = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: o,
				response: n
			}) => {
				if (!n.ok) return void t(n.error);
				const r = n.body,
					{
						post: i
					} = r && r.data,
					a = e(),
					d = Object(le.a)(o, null, {
						isOtherDiscussions: !0
					});
				if (i) {
					if (i.otherDiscussions && i.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = i, {
							postFlair: n,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(ve.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === p.a.Post && o.postInfo) {
										const e = Object(ve.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(p.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(_e.a)(e.profile)) : Object(p.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(ye.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(Ce.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: o
									} of e.edges) {
									const e = s(o);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						s({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: n,
							postId: o,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: o,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const ke = Object(te.a)(x.a),
				Ee = Object(te.a)(x.b),
				je = Object(te.a)(x.c);
			var we = s("./src/reddit/actions/subreddit/constants.ts"),
				Pe = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ie = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						t({
							altText: n && n.media && (n.media.still && n.media.still.altText || n.media.obfuscated && n.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (r) {
						s(r)
					}
				},
				Se = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Le = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!n || !n.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Se.a)(o),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(ve.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(p.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(ye.a)(t)
							}
						}
						t({
							dist: n.linked.posts && n.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Te = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Fe = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ne = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: n,
					postId: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const o = i.elements || i.posts,
							a = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(o, a.posts && a.posts.models),
							c = Object(Te.a)(d),
							l = Fe(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = n,
							g = e && r ? Object(Se.a)(r, !0) : Object(le.a)(b, h.W[p], {
								t: u
							});
						s({
							dist: o.dist,
							key: g,
							meta: a.meta,
							postIds: m,
							posts: l
						})
					} catch (a) {
						o(a)
					}
				},
				Ae = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Re = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Me = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!n || !n.nsfwLinked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Re.a)(o),
							l = n.nsfwLinked.posts && n.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(ve.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(p.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(ye.a)(t)
							}
						}
						t({
							dist: n.nsfwLinked.posts && n.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Be = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const De = Object(te.a)(Be.b),
				Ve = Object(te.a)(Be.a);
			var Ue = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const We = Object(te.a)(Ue.b),
				He = Object(te.a)(Ue.a),
				ze = Object(te.a)(we.j),
				Ke = Object(te.a)(we.i),
				qe = (Object(te.a)(we.r), Object(te.a)(we.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var n, r, i, a;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: u,
						listingBelowExperimentVariant: p,
						postId: b,
						range: g,
						sort: f,
						subredditName: x
					} = e, C = Object(le.a)(b, null, {
						isOtherDiscussions: !0
					}), v = s(), _ = Object($.A)(v, {
						listingKey: C
					}), y = l && (!_ || 0 === _.length), O = Object(le.a)(x, h.W[f], {
						t: g
					}), k = Object($.A)(v, {
						listingKey: O
					}), E = m && (c || !k || 0 === k.length), j = c, w = d, P = Object($.H)(v, {
						postId: b
					}), I = !!P && !!P.media && (Object(L.J)(P.media) || Object(L.F)(P.media)) && !P.media.altText;
					if (!(y || E || j || w || I || u)) return;
					y && t(je({
						key: C
					}));
					const S = await ((e, t) => Object(xe.a)(e, {
							...Pe,
							variables: t
						}))(o(), e),
						T = S.body,
						F = Object(Ae.a)(p),
						N = j && !!(null === (i = null === (r = null === (n = T.data) || void 0 === n ? void 0 : n.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						A = j && (F || !N);
					u && (S.ok ? T.data && T.data.post && t(ue({
						postId: b,
						isEligibleForQASchema: null !== (a = T.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(pe())), y && Oe({
						getState: s,
						onFailure: e => t(ke(e)),
						onSuccess: e => t(Ee(e)),
						postId: b,
						response: S
					}), (E && !j || A) && (S.ok ? T.data && Ne({
						getState: s,
						isLinkedPostsFallback: A,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(ze(e)),
						options: e,
						postId: b,
						subreddit: T.data.subreddit
					}) : t(Ke(S.error))), j && N && !F && S.ok && T.data && Le({
						getState: s,
						onFailure: e => t(fe(e)),
						onSuccess: e => t(ge(e)),
						postId: b,
						post: T.data.post
					}), w && S.ok && Me({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(We(e)),
						postId: b,
						post: T.data.post
					}), I && S.ok && T.data && Ie({
						getState: s,
						onFailure: e => t(Ve(e)),
						onSuccess: e => t(De(e)),
						postId: b,
						post: T.data.post
					}), j && t(be({
						postId: b,
						isEligibleForLinkedPosts: N
					}))
				}),
				Ge = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						n = o && Object(p.t)(o),
						{
							sortToUse: r
						} = Object(I.a)(e, n);
					return (!r || r === h.u.CONFIDENCE) && Object(D.c)(e, {
						experimentEligibilitySelector: () => Object(K.J)(e),
						experimentName: B.z
					}) === B.B.Enabled
				};
			var Ye = s("./src/reddit/selectors/chatPost.ts"),
				Qe = s("./src/reddit/selectors/seo/index.ts"),
				Ze = s("./src/reddit/actions/pages/constants.ts"),
				Je = s("./src/lib/initializeClient/installReducer.ts"),
				Xe = s("./src/reddit/reducers/pages/comments/index.ts"),
				$e = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				et = s("./src/reddit/selectors/i18n/index.ts");
			Object(Je.a)({
				pages: {
					comments: Xe.a
				}
			});
			const tt = 25,
				st = 100,
				ot = Object(te.a)(Ze.h),
				nt = Object(te.a)(Ze.f),
				rt = Object(te.a)(Ze.e),
				it = (e, t, s) => {
					const o = !e,
						n = Object($.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(ee.I)(t, {
							identifier: n
						}),
						i = Object(Qe.c)(t, {
							identifier: n
						}),
						a = !!Object(Ae.c)(t),
						d = Object(et.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || o) && (!Object(T.h)(r) && !Object(Ye.d)(t, {
						postId: s
					}) && !!r || !Object(W.i)(t) && Object(R.e)(t)), e && (c.postQASchema = Object(R.d)(t)), c
				},
				at = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				dt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ct = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(p.t)(d) : "", u = c && Object(S.h)(c), {
						path: g,
						queryParams: O
					} = e, k = Object(x.d)(g), {
						instanceId: P
					} = O, {
						hasSortParam: T,
						sortToUse: F
					} = Object(I.a)(s(), m), A = null === (i = null === (r = Object(W.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, R = ["context", "depth", "limit", j.f].reduce((e, t) => {
						const s = parseInt(O[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: T,
						instanceId: P,
						include_categories: !0
					});
					T && (R.sort = F), R.onOtherDiscussions = k, t(v.r(m)), await t(lt(m, u, R, F));
					const M = s().posts.models[m],
						V = Object(K.K)(s());
					if (M && "subreddit" === M.belongsTo.type) {
						const e = M.belongsTo.id,
							s = Object(de.i)(() => t(Object(ce.m)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: A,
								isLoggedIn: V
							});
						await s
					}
					if (M) {
						const r = ((e, t) => {
								const s = Object($.U)(e, {
										postId: t
									}),
									o = Object($.H)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(ee.I)(s(), {
								identifier: M.belongsTo
							});
						if (i && (e => B.Ie.Redirect === Object(D.b)(e, {
								experimentEligibilitySelector: J,
								experimentName: B.Ae
							}))(s())) return void t(Object(o.c)(i.url));
						if ((M.media && M.media.type) === L.o.LIVEVIDEO) {
							const e = `/rpan${M.belongsTo.type===w.a.SUBREDDIT?i.url:"/"}${Object(p.u)(M.id)}`;
							return void t(Object(o.c)(e))
						}
						if (M.belongsTo.type !== w.a.SUBREDDIT || M.isSponsored) {
							if (M.belongsTo.type === w.a.PROFILE) {
								const e = Object(de.i)(() => t(_.d(i.name)), {
									name: "getProfileInfo",
									page: A,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(ee.P)(s(), {
									subredditId: M.belongsTo.id
								})) {
								const e = Object(de.i)(() => t(y.o(i.name)), {
									name: "getSubredditRules",
									page: A,
									isLoggedIn: V
								});
								await e
							}
						}
						const d = it(!1, s(), m),
							c = k;
						if (at(c, d)) {
							Object(re.d)(re.a.LinkedPosts);
							const e = Object(re.c)(re.a.LinkedPosts);
							Object(re.d)(re.a.NsfwLinkedPosts);
							const o = Object(re.c)(re.a.NsfwLinkedPosts),
								n = {
									adContext: {
										layout: E.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.fc.WEEK.toUpperCase(),
									sort: h.P.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ae.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object($e.a)(s())
								},
								u = dt(d);
							Object(de.i)(() => t(qe({
								...r,
								...n,
								...a,
								...l,
								...u,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: A
							});
							0
						}
						t(Object(f.p)()), t(C.m({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : M.postId;
						t(Object(a.b)(l)); {
							const e = Object(N.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(C.m({
						title: b.d()
					}));
					const {
						routePrefix: U
					} = e.params;
					w.b[U] === w.a.PROFILE ? Object(ne.d)(s(), t, e) : Object(ne.b)(s(), t, e)
				}, lt = (e, t, s, o) => async (n, a, d) => {
					var p, b;
					const f = a(),
						x = Object(se.a)(e, t, s),
						{
							subredditName: _
						} = s,
						y = f.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
						E = f.pages.comments.api.fullyLoaded[x],
						j = f.pages.comments.api.error[x],
						w = f.pages.comments.api.pending[x],
						I = !Object(K.J)(f),
						S = Object(K.k)(f),
						L = o === h.u.CHAT,
						T = !!f.platform.lastPage;
					if ((w || y && !j) && !(L && T)) {
						if (y && !f.sidebarPromotedPosts.firstFetch) {
							const e = Object(W.i)(f) ? ae.a.COMMENTS_OVERLAY : ae.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(oe.b)(e))
							})
						}
						return void(E || n(ut(e, t, s)))
					}
					n(r.g());
					const N = f.user.prefs.commentMode;
					n(ot({
						key: x,
						postId: e,
						commentMode: N
					}));
					const R = {
						...s,
						...L ? {
							sort: h.u.LIVE
						} : I ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object($.H)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > st && (R.truncate = tt)
					}
					const M = null === (b = null === (p = Object(W.b)(f)) || void 0 === p ? void 0 : p.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						B = Object(de.i)(() => Object(l.a)(d.apiContext(), e, t, R, Object(A.a)(a()), Ge(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !I,
							page: M
						}),
						D = !I && S && Object(de.i)(() => Object(u.d)(d.gqlContext(), Object(F.e)(S)), {
							name: "fetchProfileKarma",
							isLoggedIn: !I,
							page: M
						}) || null,
						[V, U] = await Promise.all([B, D]);
					let H;
					if (n(Object(C.n)(V.status)), V.ok) {
						const t = Object.keys(V.body.posts).filter(e => !!V.body.posts[e].isMeta),
							s = V.body.posts[e];
						if (t.length) {
							const e = Object(de.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: M,
									isLoggedIn: !I
								}),
								o = await e;
							o.ok && (H = o.body)
						}
						if (U && U.ok) {
							const {
								data: e
							} = U.body, t = {
								karma: {
									...u.a
								}
							};
							if (Object(u.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							V.body && V.body.account && Object.assign(V.body.account, t)
						}
						const o = Object(P.a)(V.body, e, f);
						n(nt({
							key: x,
							postId: e,
							meta: f.meta,
							governance: H,
							shouldCollapse: o,
							...V.body
						}))
					} {
						const o = Object($.H)(a(), {
							postId: e
						});
						o && V.body.comments && Object.keys(V.body.comments).length < o.numComments ? n(ut(e, t, s)) : V.ok && n(mt({
							key: x
						}));
						const r = Object(W.i)(f) ? ae.a.COMMENTS_OVERLAY : ae.a.COMMENTS;
						n(Object(oe.b)(r))
					}
					if (V.ok) {
						n(O.g(x));
						const t = Object($.H)(a(), {
							postId: e
						});
						if (n(v.z(t, k.a.CommentsView)), t && "subreddit" === t.belongsTo.type && V.body.comments) {
							const e = Object(de.i)(() => n(Object(g.a)({
								commentIds: Object.keys(V.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: M,
								isLoggedIn: !I
							});
							await e
						}
					} else {
						let e;
						_ && (n(Object(i.subredditPending)({
							key: x
						})), e = await Object(ie.a)("subreddit", () => Object(m.a)(d.apiContext(), _, {})), n(Object(C.n)(e.status)), n(Object(i.handleSubredditPageApiError)(e, _))), n(rt({
							error: V.error,
							key: x,
							...e ? e.body : V.body
						}))
					}
				}, mt = Object(te.a)(Ze.g), ut = (e, t, s) => async (o, n, r) => {
					const i = Object(se.a)(e, t, s),
						a = n(),
						c = Object(K.K)(a),
						m = Object(K.k)(a),
						p = Object(l.a)(r.apiContext(), e, t, s, Object(A.a)(a), Ge(a)),
						h = c && m && Object(u.d)(r.gqlContext(), Object(F.e)(m)) || null,
						[b, f] = await Promise.all([p, h]);
					if (o(Object(C.n)(b.status)), b.ok) {
						if (f && f.ok) {
							const {
								data: e
							} = f.body, t = {
								karma: {
									...u.a
								}
							};
							if (Object(u.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							b.body && b.body.account && Object.assign(b.body.account, t)
						}
						const t = Object(P.a)(b.body, e, a);
						o(nt({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), o(mt({
							key: i
						}));
						const s = n().posts.models[e],
							r = s && Object($.U)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(X.a)(a, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await o(Object(g.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(rt({
						error: b.error,
						key: i,
						...b.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				p = s.n(u);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(g),
				x = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(p.a.spacer, {
						[p.a.isCommentBoxDesign]: e,
						[p.a.isTopLevelComment]: t
					})
				}, s),
				C = () => r.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				_ = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				y = f(_),
				O = Object(o.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				k = e => r.a.createElement(O, h({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = k
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
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, u.a.Wrapper, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement("span", {
				className: Object(r.a)(u.a.Copy, {
					[u.a.LiveStreamingCopy]: t
				})
			}, p._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement("div", {
				className: u.a.CTAButtons
			}, n.a.createElement(c.t, {
				className: u.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(a.a)(s, m, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(c.t, {
				className: Object(r.a)(u.a.SignupLink, {
					[u.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
				href: Object(a.a)(s, m, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Sign Up", null, {
				hk: "48wH4o"
			})))))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(h.f({
						id: d,
						kind: x.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(h.f({
					id: a,
					kind: x.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: C(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				O = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, o, n) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(I.listing)(r, void 0, {
						oldSort: s,
						sort: o,
						source: n
					}),
					userSubreddit: Object(I.userSubreddit)(r)
				}),
				L = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				T = e => ({
					subreddit: Object(I.subreddit)(e),
					userSubreddit: Object(I.userSubreddit)(e)
				}),
				F = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...T
				});
			var N = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				M = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				z = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(O.a)(E.a),
				q = e => e === z.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === z.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class G extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== z.a.None) {
							e(t === z.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", z.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", z.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", z.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: n
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(j.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${q(n)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(N.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(j.b, {
						displayText: q(z.a.First),
						isSelected: n === z.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(j.b, {
						displayText: q(z.a.Last),
						isSelected: n === z.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(j.b, {
						displayText: q(z.a.None),
						isSelected: n === z.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = G;
			const Q = "CommentSort--SortPicker",
				Z = "CommentSort--HighlightPicker",
				J = "CommentSort--Tooltip",
				X = Object(O.a)(E.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(M.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(V.b)(Q),
					highlightIsOpen: Object(V.b)(Z),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.l)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: D.H,
					postPermalink: D.G,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(U.s)(e),
							o = !!Object(B.l)(e, {
								postId: t
							}),
							n = Object(D.H)(e, {
								postId: t
							});
						return (o || s) && !!n && !!n.previousVisits && n.previousVisits.length > 0
					},
					selectedHighlightSort: M.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(m.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: Q
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: Z
						})), t()
					},
					onSetSuggestedSort: s => e(C(t, s)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: s => e(Object(p.V)(s, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: J
					})),
					toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
				}));
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, o) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(F(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: u,
						isOverlay: p,
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: f,
						showCommentHighlighter: x,
						sort: C,
						suggestedSort: O,
						showTooltip: k,
						toggleContestModeModal: E
					} = this.props, I = b.contestMode, S = !h.search.includes(c.u.CONFIDENCE), T = C === c.u.CONFIDENCE && S, F = u && !T, R = c.w[C], M = R ? R() : "", B = O && C === O && !T ? this.addSuggestedLabel(M) : M, D = I ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), V = I ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = I ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = I && !u;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !x && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(j.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(N.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(X, {
						isOpen: i,
						tooltipId: Q
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							o = Object(P.b)(t),
							n = c.w[e],
							i = n ? n() : "";
						return r.a.createElement(y.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(j.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), F && !W && (O ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: C !== O ? this.setSortOnClick : this.clearSortOnClick
					}, C !== O ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: J,
						onMouseEnter: k,
						onMouseLeave: l
					}, r.a.createElement(_.c, {
						className: H.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: J
					}), r.a.createElement(A.a, {
						className: H.a.Info
					})))), u && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(w.a, {
						className: H.a.ToggleSwitch,
						on: I
					}))), x && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: Z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: L
					})), n && r.a.createElement(v.a, {
						actionText: V,
						headerText: D,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(k.c)(te))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				userIconContainerStyles: "_3W217SmtnKG5RvNrTd7YW0",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				glowBorderTopPadding: "_2PHrzfGnoV59y2Imtb1Y5I",
				glowBorderBottomPadding: "_3kYyDFXW4SA2vk-vehWhXw"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "a", (function() {
				return H
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(_);
			const O = l.a.wrapped(C.a, "CommentsIcon", y.a),
				k = l.a.wrapped(v.a, "SnooFacepalm", y.a),
				E = l.a.p("EmptyTitle", y.a),
				j = l.a.p("ErrorTitle", y.a),
				w = l.a.p("EmptyText", y.a),
				P = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(O, null), a.a.createElement(E, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(w, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				I = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(O, null), a.a.createElement(E, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(w, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(O, null), a.a.createElement(E, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(p.n, {
					to: Object(b.b)(e)
				}, o.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: o
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: o
					}, o))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(j, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(p.l, {
					onClick: t
				}, o.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				})),
				F = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(u.a, null)), "LoadingFullPage", y.a),
				N = l.a.div("CommentsPlaceholderContainer", y.a),
				A = l.a.div("CommentPlaceholder", y.a),
				R = l.a.div("Avatar", y.a),
				M = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(x.a, "Upvote", y.a),
				V = l.a.wrapped(f.a, "Downvote", y.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(N, null, r()(10, t => a.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(M, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(B, null, a.a.createElement(U, null), a.a.createElement(W, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let o = {};

			function n(e) {
				return e in o
			}

			function r(e) {
				o[e] = !0
			}

			function i() {
				o = {}
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/constants/comments.ts"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				C = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/components/LottieAnimation/index.tsx"),
				_ = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				y = s.n(_);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const O = {
				threshold: [.75, .001]
			};
			var k = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, n] = Object(i.useState)(!1),
					r = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && n(!1), t <= .001 && n(!0)
						})
					}, []);
				Object(C.a)(t, r, O);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(y.a.effectContainer, y.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === o.Lottie && a.a.createElement(v.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const E = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: j,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				j = "ff0000";

			function w(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(I).filter(e => e !== P)
				}(e) : [])
			}
			const P = {
				glowHexColor: null,
				effectHighlight: null
			};

			function I(e) {
				for (const t of E) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return P
			}
			var S = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				L = s("./src/reddit/selectors/comments.ts"),
				T = s("./src/reddit/selectors/commentSelector.ts"),
				F = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				M = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/models/PostDraft/index.ts"),
				D = s("./src/lib/makeDraftKey/index.ts"),
				V = s("./src/lib/objectSelector/index.ts"),
				U = s("./src/reddit/actions/comment/authoring.ts"),
				W = s("./src/reddit/actions/comment/moderation.ts"),
				H = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				z = s("./src/reddit/icons/fonts/helpers.tsx");
			var K = e => a.a.createElement("i", {
					className: Object(l.a)(Object(z.b)("expand", e.isFilled), e.className)
				}),
				q = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				G = s.n(q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Q, Z, J = s("./node_modules/lodash/defer.js"),
				X = s.n(J),
				$ = s("./src/reddit/actions/tooltip.ts"),
				ee = s("./src/reddit/selectors/tooltip.ts"),
				te = s("./src/reddit/actions/gold/modals.ts"),
				se = s("./src/reddit/actions/modal.ts"),
				oe = s("./src/reddit/actions/reportFlow/index.ts"),
				ne = s("./src/reddit/helpers/correlationIdTracker.ts"),
				re = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ie = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ae = s("./src/reddit/models/Comment/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				me = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				be = s.n(he);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Q || (Q = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(Z || (Z = {}));
			const ge = (e, t) => {
					const s = be.a[t],
						o = be.a[e];
					return Object(l.a)(s, o)
				},
				fe = e => Object(l.a)(be.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[be.a.isInOverlay]: e.isInOverlay,
					[be.a.isModModeEnabled]: e.isModModeEnabled,
					[be.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var xe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Ce = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				ve = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_e = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ye = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Oe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ke = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Ee = s("./src/reddit/components/ReportFlow/index.tsx"),
				je = s("./src/reddit/components/ReportFlow/new.tsx"),
				we = s("./src/reddit/components/ShareMenu/index.tsx"),
				Pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ie = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Se = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Le = s("./src/reddit/helpers/trackers/modTools.ts"),
				Te = s("./src/reddit/layout/row/Inline/index.tsx"),
				Fe = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Ne = s.n(Fe),
				Ae = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Re = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Me = e => {
					const t = Object(d.e)(me.b),
						s = Object(d.e)(e => t && Object(Re.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Ne.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(Ae.a, e)
				},
				Be = s("./src/reddit/icons/fonts/index.tsx"),
				De = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				We = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				He = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ze = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Ke = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				qe = s.n(Ke);
			const Ge = u.a.wrapped(De.a, "CommentIcon", qe.a),
				Ye = u.a.wrapped(He.a, "Report", qe.a),
				Qe = u.a.wrapped(Ue.a, "IgnoreReport", qe.a),
				Ze = u.a.wrapped(ye.a, "ModActionsMenu", qe.a),
				Je = u.a.div("OverflowMenuSpacer", qe.a),
				Xe = u.a.wrapped(ke.a, "DropdownRow", qe.a),
				$e = u.a.wrapped(Te.a, "Flatlist", qe.a),
				et = u.a.button("Button", qe.a),
				tt = u.a.wrapped(xe.a, "ModToolsFlatlist", qe.a),
				st = u.a.wrapped(Ie.a, "ViewReportsDropdown", qe.a),
				ot = e => `Comment-${e}--Modal--DeleteComment`,
				nt = e => `Distinguish--Dropdown--${e}`,
				rt = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: me.b,
					currentUser: R.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(de.a)(e) === ot(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(nt(t.id))(e),
					isCommentFollowEnabled: ze.a,
					isFollowed: (e, {
						comment: t
					}) => Object(L.y)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(L.A)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(L.B)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(it(t.id))(e),
					isLoggedIn: R.K,
					postIsArchived: (e, {
						comment: t
					}) => Object(A.B)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(A.w)(e, {
						postId: t.postId
					}) && Object(ce.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(A.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(A.C)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(L.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(L.H)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(ue.t)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(A.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: le.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(ie.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Le.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Le.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Le.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ne.d)(ne.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Le.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Le.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Le.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: o
						} = this.props;
						e(o ? ae.a.UNFOLLOWED : ae.a.FOLLOWED), t(o ? Object(Le.f)("follow", s.id) : Object(Le.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Le.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(je.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(Ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						commentPermalink: o,
						deleteComment: n,
						depth: r,
						handleReply: d,
						isAvatarsInCommentsEnabled: c,
						isCommentFollowEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: h,
						onDistinguishComment: b,
						onIgnoreReports: g,
						onToggleReportsDropdown: f,
						moderatorPermissions: x,
						modModeEnabled: C,
						postIsArchived: v,
						postAuthorIsBlocked: _,
						isBlockedUserBannerEnabled: y,
						postIsLocked: O,
						renderedInOverlay: k,
						sendEvent: E,
						subreddit: j,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: P,
						toggleSendReplies: I,
						trackCommentClick: S
					} = this.props, L = Object(re.a)(x), T = !!s && s.displayText === e.author, F = !!s && s.isEmployee, N = !(w && w.userIsBanned) && (O || v || _ && y || L && p || e.isLocked ? L && p : p || c), A = Object(Oe.a)(e), R = L && T && !e.bannedBy, B = T && F && !e.bannedBy, D = R || B, V = s && e.isGildable, U = m && !v, W = [];
					N && W.push(a.a.createElement(et, {
						disabled: h,
						key: "reply",
						onClick: () => {
							d(), X()(() => S("reply", e.id)())
						}
					}, a.a.createElement(Ge, null), M.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), V && W.push({
						breakpointGroup: Z.LoggedInUser,
						icon: a.a.createElement(Me, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => M.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), W.push(a.a.createElement(we.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: o,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == j ? void 0 : j.type
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, M.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), T || W.push({
						breakpointGroup: Z.LoggedInUser,
						icon: a.a.createElement(He.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => M.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), W.push({
						breakpointGroup: Z.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => M.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => M.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), T && W.push({
						breakpointGroup: Z.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => M.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), U && W.push({
						breakpointGroup: Z.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "notification",
							isFilled: u
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: u ? () => M.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => M.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const H = W.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: ge(e.breakpointGroup, Q.HideIfVWSmaller),
							disabled: h,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						z = W.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Xe, {
							className: ge(e.breakpointGroup, Q.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: qe.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(fe({
							depth: r,
							isInOverlay: k,
							isModModeEnabled: L && C,
							isFollowCommentEnabled: U
						}), t)
					}, H, a.a.createElement(Je, {
						className: T ? void 0 : ge(Z.LoggedInUser, Q.HideIfVWLarger)
					}, a.a.createElement(ke.b, {
						className: qe.a.overflowMenu,
						disabled: h,
						dropdownId: rt(e.id),
						onClick: () => E(Object(Le.a)("comment_overflow_menu", e.id))
					}, z, T && a.a.createElement(a.a.Fragment, null, a.a.createElement(Xe, {
						displayText: M.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: qe.a.dropdownRowText
					}, a.a.createElement(Be.a, {
						name: "delete"
					})), a.a.createElement(Se.a, {
						text: M.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: I,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(ve.a, {
						actionText: M.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: M.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: M.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: M.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: n,
						toggleModal: P,
						trackClick: () => {},
						withOverlay: !0
					}), L && a.a.createElement(a.a.Fragment, null, C && a.a.createElement(tt, {
						className: ge(Z.Moderator, Q.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: T
					}), a.a.createElement(Ze, {
						className: C ? ge(Z.Moderator, Q.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => E(Object(Le.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(We.a, null), a.a.createElement(pe.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Oe.c)(e) && !C && a.a.createElement(Ce.a, {
						text: `${A}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(Qe, null) : a.a.createElement(Ye, null)), D && a.a.createElement(Ce.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Ve.a, null), a.a.createElement(_e.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: F,
						isUserMod: L,
						onDistinguishComment: b,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: nt(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(U.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(se.i)(ot(t.id))), e(Object($.h)({
							tooltipId: rt(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(U.d)({
							commentId: t.id,
							draftKey: Object(D.a)(B.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(U.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(U.r)(t.id, s)),
					onDistinguishComment: (s, o) => e(Object(W.b)(t.id, s, o)),
					onFollowedCommentExpire: () => e(Object(h.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, o) => e(Object(te.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(W.g)(t.id)),
					onReportClick: () => e(Object(oe.c)(t.id)),
					onToggleSave: () => e(Object(h.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object($.h)({
						tooltipId: nt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object($.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(se.i)(ot(t.id))),
					toggleSendReplies: () => e(Object(U.k)(t.id))
				}))(Object(Pe.c)(dt)),
				lt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				mt = s.n(lt);
			var ut = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: mt.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				pt = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ht = s.n(pt);
			var bt = a.a.memo(e => a.a.createElement("div", {
					className: ht.a.gradientHighlightContainer,
					role: "presentation"
				})),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ft = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				xt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ct = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				vt = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_t = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				yt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Ot = s("./src/reddit/components/PostTopMeta/index.tsx"),
				kt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Et = s("./src/reddit/components/UserIcon/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/constants.ts"),
				wt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Pt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				It = s("./src/reddit/constants/componentTestIds.ts"),
				St = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Lt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Tt = s("./node_modules/raf/index.js"),
				Ft = s.n(Tt);

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const At = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Rt = a.a.createContext(!1);
			class Mt extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Ft()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, o = {
						...At,
						...t
					};
					return a.a.createElement(Lt.a, Nt({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Rt.Provider, {
						value: s
					}, e)))
				}
			}
			var Bt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Dt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Vt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Ut = s("./src/reddit/helpers/flair.ts"),
				Wt = s("./src/reddit/models/Subreddit/index.ts"),
				Ht = s("./src/reddit/models/User/index.ts"),
				zt = s("./src/reddit/models/Vote/index.ts"),
				Kt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				qt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Gt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				Yt = s("./src/reddit/selectors/poll/index.ts"),
				Qt = s("./src/reddit/selectors/userPrefs.ts"),
				Zt = s("./src/reddit/selectors/moderatingComments.ts"),
				Jt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Xt = s.n(Jt),
				$t = s("./src/config.ts"),
				es = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				ts = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function ss() {
				return (ss = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const os = u.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return a.a.createElement("button", Y({}, s, {
						className: Object(l.a)(t, G.a.expandButton)
					}), a.a.createElement(K, {
						className: G.a.expandIcon
					}))
				}), "ExpandButton", Xt.a),
				ns = u.a.wrapped(ct, "FlatList", Xt.a),
				rs = u.a.wrapped(Bt.b, "ErrorText", Xt.a),
				is = u.a.wrapped(xt.a, "HorizontalVotes", Xt.a),
				as = u.a.div("ActionBar", Xt.a),
				ds = u.a.wrapped(gt.a, "TopMeta", Xt.a),
				cs = u.a.div("CommentContentWrapper", Xt.a),
				ls = u.a.wrapped(Ct.b, "AuthorHovercard", Xt.a),
				ms = Object(St.u)(),
				us = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(T.b)(e, t),
					currentProfileModPermissions: St.h,
					depth: (e, t) => Object(L.j)(e, t),
					collapsed: Zt.b,
					collapsedBecauseCrowdControl: Zt.a,
					currentUser: R.k,
					flair: L.e,
					focused: L.t,
					highlightAnimationDisabled: Qt.c,
					isEditing: L.z,
					isLoggedIn: R.K,
					isPendingDeletion: L.B,
					isPresenceConsumptionExpEnabled: qt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(T.b)(e, t);
						return s ? Object(N.m)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Yt.f,
					modModeEnabled: St.S,
					errorMsgs: L.F,
					replyFormOpen: L.I,
					subreddit: St.r,
					subredditType: L.K,
					allowNFTs: es.a,
					hasSupporterRing: Gt.a,
					isOnlineConsumptionLoadTest: qt.a,
					isOnlineUserPref: R.P,
					userIsBanned: (e, t) => {
						const s = Object(T.b)(e, t);
						return !!s && Object(ue.bb)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: o,
					trackCommentClick: n
				}) => ({
					onCollapseClick: () => e(Object(h.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(W.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === zt.a.upvoted ? [Object(h.q)(t), "upvote_comment"] : [Object(h.j)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				ps = Object(V.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				hs = e => a.a.createElement("div", e, e.children),
				bs = e => a.a.createElement(a.a.Fragment, null, e.children),
				gs = ms(us(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: o,
						commentsPageKey: n,
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: c,
						currentUser: m,
						depth: u,
						errorMsgs: p,
						flair: h,
						focused: b,
						hasAwardGradient: g,
						highlightAnimationDisabled: f,
						highlightTreatment: x,
						isActive: C,
						isAvatarsInCommentsEnabled: v,
						isEditing: _,
						isFirstInList: y,
						isHighlighted: O,
						isLoggedIn: E,
						isOnlineUserPref: j,
						isPendingDeletion: w,
						isPresenceConsumptionExpEnabled: P,
						moderatorPermissions: I,
						modModeEnabled: S,
						onCollapseClick: L,
						onIgnoreReports: T,
						onLineMouseOver: F,
						onVoteClick: N,
						prediction: A,
						postId: R,
						replyFormOpen: V,
						subreddit: W,
						trackCommentClick: z,
						renderedInOverlay: K,
						subredditType: q,
						onPresenceIndicatorInViewport: G,
						allowNFTs: Y,
						hasSupporterRing: Q,
						isOnlineConsumptionLoadTest: Z,
						userIsBanned: J
					} = e, X = o.isDeleted, $ = !_ && !X && !!p && p.length > 0, ee = Object(D.a)(B.c.edit, o.id), te = Object(D.a)(B.c.replyToComment, o.id), se = Object(re.a)(I), oe = Object(_t.c)(o), ne = Object(Oe.c)(o), ie = o.authorIsContractor && q === Wt.f.EmployeesOnly, de = o.isLocked, ce = se && S, le = !_ && !X && (E || v), me = !!m && Object(Ht.e)(m) === o.author, [ue, pe] = Object(i.useState)(null), [he, be] = Object(i.useState)(null), ge = Object(ae.f)(o) || Object(ae.g)(o) ? hs : Dt.a, fe = Object(ae.f)(o) ? bs : ls;
					Object(i.useEffect)(() => {
						if (!_ && !X && (g && pe(a.a.createElement(bt, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								pe(a.a.createElement(ut, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								be(a.a.createElement(k, {
									prefersReducedAnimation: f,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [_, X, g, f, x]);
					const xe = Object(i.useContext)(Rt),
						Ce = !X && !Object(ae.f)(o) && (!J || J && me) && !Object(ae.g)(o) && E,
						ve = Object(i.useCallback)(() => {
							Ce && P && !me && G && G(o.id)
						}, [o.id, G, Ce, P, me]),
						_e = Object(Pt.a)(o),
						ye = !!Y && Object(ts.b)(o.profileImage);
					return a.a.createElement("div", {
						className: Object(l.a)(`Comment ${o.id}`, Xt.a.CommentWrapper, {
							[Xt.a.highlightComment]: O,
							[Xt.a.deleted]: X,
							[Xt.a.focused]: b,
							[Xt.a.redesign]: v,
							[Xt.a.topLevel]: !u
						})
					}, ue, he, !_ && !X && y && a.a.createElement("div", {
						className: Xt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${$t.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), a.a.createElement(os, {
						className: Object(l.a)(o.id, {
							[Xt.a.hidden]: !r,
							[Xt.a.visible]: r
						}),
						onClick: () => {
							s(), L(), z("collapse", o.id)()
						},
						onMouseOver: () => F(o.id),
						onMouseOut: s
					}), a.a.createElement(fe, {
						alwaysShowChildren: !0,
						hoverDivClassName: Xt.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: K ? Ot.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(ae.g)(o)
					}, a.a.createElement(ge, {
						className: Xt.a.UserIconContainer,
						to: `/user/${o.author}/`
					}, xe ? a.a.createElement(a.a.Fragment, null, Q && a.a.createElement("div", {
						className: Xt.a.supporterRing
					}), a.a.createElement(Et.a, {
						isNft: ye,
						className: Object(l.a)(Xt.a.UserIcon, {
							[Xt.a.UserIconNft]: ye
						}),
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: jt.a,
						userName: o.author,
						isHighlighted: O,
						shouldShowPresenceIndicator: Ce && P,
						onPresenceIndicatorInViewport: ve,
						isCommentAuthorBlocked: Object(ae.g)(o),
						collapsed: r,
						shouldUseOnlineOverride: me,
						isOnlineOverrideValue: j,
						isOnlineStatusLoadTest: Ce && Z,
						authorId: o.authorId
					})) : a.a.createElement("div", {
						className: Xt.a.UserIcon
					}))), a.a.createElement(cs, {
						className: Object(l.a)({
							[Xt.a.isActive]: C,
							[Xt.a.isCollapsed]: r,
							[Xt.a.isLocked]: de && ce,
							[Xt.a.isPendingDeletion]: w,
							[Xt.a.isRemoved]: !!o.bannedBy && ce
						})
					}, a.a.createElement(Vt.a, null, M.fbt._("level {depth}", [M.fbt._param("depth", u + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(ds, {
						userHasNft: ye,
						childrenInfo: t,
						className: Object(l.a)({
							[Xt.a.collapsed]: r,
							[Xt.a.noFlair]: Object(Ut.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: K,
						renderContractorBadge: ie
					}), !r && a.a.createElement(i.Fragment, null, _ && a.a.createElement(H.a, {
						className: Object(l.a)(Xt.a.EditCommentForm, Xt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: u,
						draftType: B.c.edit,
						draftKey: ee,
						postId: R,
						rtJson: Object(Pt.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(U.i)({
							id: o.id,
							commentsPageKey: n,
							depth: u,
							draftKey: ee,
							formData: e
						}),
						submitButtonText: M.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !_ && !X && a.a.createElement("div", {
						"data-test-id": It.d,
						className: Xt.a.CommentBody
					}, A ? a.a.createElement(ft.a, {
						comment: o,
						prediction: A
					}) : a.a.createElement(kt.a, {
						content: _e,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: ps(e)
					}), a.a.createElement(Kt.b, {
						content: _e
					})), S && se && oe && a.a.createElement(vt.a, {
						thing: o
					}), S && se && ne && a.a.createElement(yt.a, {
						onIgnoreReports: T,
						reportable: o
					}), le && a.a.createElement(as, null, v && a.a.createElement(is, {
						downvoteButtonClassName: Xt.a.voteButton,
						downvoteClassName: Xt.a.upDownVote,
						model: o,
						onVoteClick: N,
						scoreClassName: Xt.a.score,
						upvoteButtonClassName: Xt.a.voteButton,
						upvoteClassName: Xt.a.upDownVote
					}), a.a.createElement(ns, {
						comment: o,
						commentsPageKey: n,
						depth: u,
						isAvatarsInCommentsEnabled: v,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: S,
						moderatorPermissions: c || I,
						renderedInOverlay: K,
						isCommentFocused: b,
						subreddit: W,
						trackCommentClick: z
					})), $ && p.map(e => a.a.createElement(rs, {
						key: e
					}, e)), V && a.a.createElement(H.a, {
						className: Object(l.a)(Xt.a.EditCommentForm, Xt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: u,
						draftType: B.c.replyToComment,
						draftKey: te,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						postId: R,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(U.s)({
							commentsPageKey: n,
							draftKey: te,
							parentCommentDepth: u,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(U.l)({
							commentsPageKey: n,
							draftKey: te,
							parentCommentDepth: u,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: M.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var fs = e => a.a.createElement(wt.a.Consumer, null, t => a.a.createElement(gs, ss({}, e, {
					trackCommentClick: t
				}))),
				xs = s("./src/lib/domUtils/index.ts"),
				Cs = s("./src/lib/fastdom/index.ts"),
				vs = s("./src/reddit/constants/elementIds.ts");
			const _s = () => {
				Cs.a.write(() => {
					const e = document.getElementById(vs.d);
					e ? Object(xs.c)(e, 0) : Object(xs.c)(document, 0)
				})
			};
			var ys = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Os = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ks = s("./src/reddit/helpers/path/index.ts"),
				Es = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				js = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				ws = s.n(js);
			const {
				fbt: Ps
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Is = u.a.wrapped(Es.a, "ArrowRight", ws.a), Ss = u.a.wrapped(ys.a, "LinkOrOverlayLink", ws.a), Ls = u.a.span("HoverSpan", ws.a), Ts = Object(c.c)({
				permalink: (e, t) => Object(L.m)(e, {
					commentId: Object(L.r)(e, t).parentId
				})
			});
			var Fs = Object(d.b)(Ts)(Object(Os.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement("div", {
					className: Object(l.a)(ws.a.Wrapper, {
						[ws.a.isActive]: e
					})
				}, a.a.createElement(Ss, {
					isOverlay: !!t,
					to: Object(ks.b)(s),
					onClick: _s
				}, a.a.createElement(Ls, null, Ps._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Is, null))))),
				Ns = s("./src/lib/makeCommentPermalink/index.ts"),
				As = s("./src/reddit/actions/login.ts"),
				Rs = s("./src/reddit/constants/experiments.ts"),
				Ms = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Bs = s("./src/reddit/helpers/trackers/moreReplies.ts"),
				Ds = s("./src/reddit/hooks/useTracking.ts"),
				Vs = s("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				Us = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ws = s.n(Us);
			const {
				fbt: Hs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), zs = u.a.div("MoreCommentsItemWrapper", Ws.a), Ks = u.a.p("MoreComments", Ws.a), qs = u.a.wrapped(Ks, "MoreCommentsInteractive", Ws.a), Gs = Object(c.c)({
				isMoreRepliesSignupEnabled: Vs.a,
				moreCommentsItem: L.C,
				moreCommentsPending: L.D,
				moreRepliesSignupVariant: Vs.c
			});
			var Ys = Object(d.b)(Gs, (e, t) => ({
					moreCommentsClicked: () => e(Object(h.l)(t.commentsPageKey, t.moreCommentsId)),
					openRegisterModal: () => {
						const {
							parentId: s,
							postId: o,
							postPermalink: n
						} = t;
						e((e, t) => {
							const r = t();
							Object(Vs.b)(r), e(Object(As.k)());
							const i = r.platform.currentPage,
								a = Object(St.R)(r, i),
								d = a ? Object(Ns.a)(a, o, s) : n;
							e(Object(se.k)({
								actionSource: se.a.CommentMoreReplies,
								redirectUrl: d
							}))
						})
					}
				}))(e => {
					const {
						isActive: t,
						isMoreRepliesSignupEnabled: s,
						moreCommentsClicked: o,
						moreCommentsItem: n,
						moreCommentsPending: r,
						moreRepliesSignupVariant: i,
						openRegisterModal: d
					} = e, c = Object(Ds.a)(), m = e => {
						e.preventDefault(), e.stopPropagation(), c(Object(Bs.c)()), d()
					};
					return a.a.createElement(zs, null, r ? a.a.createElement(Ks, null, Hs._("loading...", null, {
						hk: "47z89"
					})) : a.a.createElement(wt.a.Consumer, null, e => a.a.createElement(qs, {
						className: Object(l.a)({
							[Ws.a.isActive]: t
						}),
						onClick: e => ((e, t) => {
							s ? (c(Object(Bs.a)()), i === Rs.Rd.ThrottledDaily ? (Ms.a.throttleFeature(Rs.Sd.Daily), m(e)) : i === Rs.Rd.ThrottledWeekly ? (Ms.a.throttleFeature(Rs.Sd.Weekly), m(e)) : m(e)) : o()
						})(e)
					}, Hs._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [Hs._plural(null == n ? void 0 : n.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				Qs = s("./node_modules/lodash/times.js"),
				Zs = s.n(Qs),
				Js = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Xs = s.n(Js);
			const $s = u.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: f.m
				})), "Line", Xs.a),
				eo = u.a.div("LineContainer", Xs.a),
				to = u.a.div("ShortLineContainer", Xs.a);
			var so = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: o,
						onLineClick: n,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: d,
						parentNodeIds: c,
						type: m
					} = e;
					return a.a.createElement(eo, null, Zs()(s + 1, e => e === s ? m !== b.a.Comment || t ? null : a.a.createElement(to, {
						key: c[e]
					}, a.a.createElement($s, {
						className: Object(l.a)(c[e], {
							[Xs.a.hasGlowBorder]: !!o,
							[Xs.a.topLevel]: 0 === s
						}),
						onClick: d,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : a.a.createElement($s, {
						className: c[e],
						key: c[e],
						onClick: n(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				oo = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				no = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				ro = s.n(no);
			const io = u.a.div("CommentListNodeWrapper", ro.a),
				ao = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(f.f)
				},
				co = () => {
					const e = document.querySelectorAll(`.${f.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(f.f)
				};
			var lo = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Zt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(L.l)(e, t),
				depth: (e, t) => Object(L.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const o = Object(L.l)(e, {
						commentLink: t
					});
					if (o && t.type === b.a.Comment) {
						s = w(o.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: oo.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(L.l)(e, {
						commentLink: t
					});
					return !(t.type !== b.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(F.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(L.p)(e);
					if (s === S.a.None) return !1;
					if (t.type !== b.a.Comment) return !1;
					const o = t.id,
						n = Object(T.b)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(R.s)(e),
						i = !!Object(N.l)(e, {
							postId: n.postId
						}),
						a = Object(A.H)(e, {
							postId: n.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === S.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && n.created > d
				},
				postPermalink: A.G
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: o
			}) => ({
				onLineClick: n => () => {
					e(Object(h.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: n,
						scrollToAndRemeasure: o
					}))
				},
				onShortLineClick: () => e(Object(h.o)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: o
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: o,
					commentLink: n,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: u,
					isFirstInList: p,
					isHidden: h,
					isHighlighted: f,
					onLineClick: x,
					onPresenceIndicatorInViewport: C,
					onShortLineClick: v,
					parentNodeIds: _,
					postId: y,
					postPermalink: O,
					renderedInOverlay: k,
					scrollToAndRemeasure: E
				} = e, j = !!u, w = !(!d || !d.glowHexColor), P = w && i > 0, I = w, S = a.a.createElement(io, {
					className: Object(l.a)(s, {
						[ro.a.isHidden]: h,
						[ro.a.glowBorderTopPadding]: P,
						[ro.a.glowBorderBottomPadding]: I
					}),
					id: n.id,
					style: {
						paddingLeft: i * (g.w + g.v) + (n.type === b.a.Comment ? g.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(so, {
					collapsed: o,
					depth: i,
					hasGlowBorder: P,
					onLineClick: x,
					onLineMouseOver: ao,
					onLineMouseOut: co,
					onShortLineClick: v,
					type: n.type,
					parentNodeIds: _
				}), mo({
					childrenInfo: t,
					clearHovered: co,
					commentLink: n,
					commentsPageKey: r,
					depth: i,
					onLineMouseOver: ao,
					hasAwardGradient: j,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: p,
					isHighlighted: f,
					parentNodeIds: _,
					postId: y,
					renderedInOverlay: k,
					scrollToAndRemeasure: E,
					onPresenceIndicatorInViewport: C,
					postPermalink: O
				}));
				return m && n.type === b.a.Comment ? a.a.createElement(Mt, null, S) : S
			});
			const mo = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: o,
				depth: n,
				hasAwardGradient: r,
				highlightTreatment: i,
				isActive: d,
				isAvatarsInCommentsEnabled: c,
				isFirstInList: l,
				isHighlighted: m,
				onLineMouseOver: u,
				parentNodeIds: p,
				postId: h,
				renderedInOverlay: g,
				scrollToAndRemeasure: f,
				onPresenceIndicatorInViewport: x,
				postPermalink: C
			}) => {
				switch (s.type) {
					case b.a.Comment:
						return a.a.createElement(fs, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: o,
							hasAwardGradient: r,
							highlightTreatment: i,
							isActive: d,
							isAvatarsInCommentsEnabled: c,
							isFirstInList: l,
							isHighlighted: m,
							onLineMouseOver: u,
							postId: h,
							renderedInOverlay: g,
							scrollToAndRemeasure: f,
							onPresenceIndicatorInViewport: x
						});
					case b.a.MoreComments:
						return a.a.createElement(Ys, {
							commentsPageKey: o,
							isActive: d,
							moreCommentsId: s.id,
							parentId: p[n - 1],
							postId: h,
							postPermalink: C
						});
					case b.a.ContinueThread:
						return a.a.createElement(Fs, {
							id: s.id,
							isActive: d
						})
				}
			};
			var uo = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				po = s("./src/reddit/components/Comments/States/index.tsx"),
				ho = s("./src/reddit/components/Scroller/Simple.tsx"),
				bo = s("./src/reddit/featureFlags/index.ts"),
				go = s("./src/reddit/helpers/commentList/index.ts"),
				fo = s("./src/reddit/helpers/trackers/comment.ts"),
				xo = s("./src/telemetry/index.ts"),
				Co = s("./src/lib/LRUCache/index.ts"),
				vo = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				_o = s("./src/reddit/components/Comments/index.m.less"),
				yo = s.n(_o);
			const Oo = g.f + 10,
				ko = 65,
				Eo = u.a.wrapped(ho.b, "Scroller", yo.a),
				jo = Object(c.c)({
					allCollapsed: L.a,
					commentLinks: L.k,
					commentThreadLinkSet: L.o,
					measureScrollFPS: bo.d.measureScrollFPS,
					moreComments: L.b,
					postPermalink: A.G
				}),
				wo = Object(d.b)(jo, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(p.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(h.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(h.h)(t, s))
				})),
				Po = new Co.a(500),
				Io = new Co.a(500),
				So = (e, t) => {
					const s = `entered-${e}`;
					let o = Po.get(s);
					return void 0 === o && (o = () => {
						t(e)
					}, Po.set(s, o)), o
				},
				Lo = (e, t) => {
					const s = `left-${e}`;
					let o = Io.get(s);
					return void 0 === o && (o = s => {
						t(e, s)
					}, Io.set(s, o)), o
				};
			class To extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const o = s[e.id].depth,
							n = t.findIndex(t => t.id === e.id);
						if (0 === o || 0 === n) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[n - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < o), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(fo.b)(e)))
					}, this.parentNodeIdsMap = {}, uo.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: o
					} = this.props;
					this.timerId && xo.c.cancel(this.timerId), e.length && (this.timerId = xo.c.start()), this.findHiddenNodes(e, t, s, o)
				}
				componentDidMount() {
					this.timerId && Object(xo.b)(m.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: xo.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: o,
						commentThreadLinkSet: n,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || o.length > this.props.commentLinks.length || !r()(t, this.props.allCollapsed)) && this.findHiddenNodes(o, t, n, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: o
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !r()(e.allCollapsed, o) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && xo.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = xo.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(xo.b)(m.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: xo.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && xo.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, o) {
					if (!t || !Object.keys(t).length) return;
					let n = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					uo.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						n && (s[c.id].depth > r ? (uo.a(c.id), i += Object(go.d)(c, o), c.type === b.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
							numChildren: i,
							hasContinueThread: a
						}, n = null, r = 1 / 0, i = 0, a = !1)), !n && t[c.id] && (n = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n,
						postId: r,
						renderedInOverlay: i
					} = this.props, d = So(e.id, o), c = Lo(e.id, n);
					return {
						estHeight: uo.b(e.id) ? 0 : ko,
						id: e.id,
						trackOnEnteredViewport: d,
						trackOnExitedViewport: c,
						render: ({
							placeholderRecommended: o,
							height: n,
							width: d,
							scrollToAndRemeasure: c
						}) => o ? a.a.createElement("div", {
							style: {
								height: n,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(lo, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: uo.b(e.id),
							postId: r,
							scrollToAndRemeasure: c,
							renderedInOverlay: !!i,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: o,
						onAllCommentsRendered: n,
						renderedInOverlay: r,
						showSignupUpsell: i
					} = this.props;
					let d;
					if (o) {
						d = `comments-${r?"lightbox":"page"}`
					}
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(Eo, {
						className: Object(l.a)(yo.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(vs.d) : null,
						onScroll: i,
						onAllChildrenRendered: n,
						preventScrollOnMount: !0,
						scrollToChildPadding: Oo,
						trackingName: d
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(po.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(po.c, null)
				}
			}
			t.a = wo(Object(Pe.c)(Object(vo.a)(To)))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				u = i.a.div("Byline", c.a),
				p = Object(r.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null))
				});
			t.a = e => n.a.createElement(p, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CommentsPageNativeAd",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CommentsPageNativeAd").then(s.bind(null, "./src/reddit/components/CommentsPageNativeAd/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsPageNativeAd/index.tsx"
				}
			})
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_2Zqrm36MciZxq2elpbtQig",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_ = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				O = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				k = s("./src/reddit/featureFlags/component.tsx"),
				E = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/selectors/experiments/postSeo.ts"),
				P = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const F = Object(k.a)("spPoints", h.a),
				N = Object(k.a)("spLeaderboard", b.a),
				A = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				R = Object(c.c)({
					isLoggedIn: S.K,
					postSEOV2IdCardVariant: w.h,
					shouldShowReredditPromo: P.a,
					widgets: Object(u.a)(I.r)
				}),
				M = Object(d.b)(R);
			class B extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: o,
						post: n,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(w.c)(i) && !Object(w.f)(i);
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: s,
							listingName: o,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: E.a.BOTTOM,
							refreshKey: n.id,
							sizes: m.p,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: o,
						post: n,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: u
					} = this.props;
					let h = 0;
					const b = Object(w.c)(r) || Object(w.f)(r),
						v = a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: o,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: E.a.FIRST,
							refreshKey: n.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(j.q)(n) ? a.a.createElement(A, {
						profileName: c,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: c,
						postId: n.id,
						rememberPosition: n.numComments > 0,
						isMinimal: b
					}), a.a.createElement(p.a, {
						cardClassName: T.a.card,
						subredditId: d
					}), a.a.createElement(F, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(N, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(f.a, {
						subredditId: d
					}), v, s && u.map((e, t) => a.a.createElement(C.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(O.a, {
						subredditName: c,
						widget: e
					}))), n.isSponsored && a.a.createElement(C.a, null, a.a.createElement(_.a, null)), i && a.a.createElement(y.a, {
						directoryTimestamp: n.created,
						postId: n.id
					}), this.renderFooter(h++))
				}
			}
			t.a = M(B)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = "500px";
			class h extends n.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: o,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: h,
						onClick: b
					} = this.props, g = l && !e, f = l ? m.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: b,
						ref: i
					}, n.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, f),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? p : "unset"
						}
					}, t), g && n.a.createElement(d.l, {
						className: m.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, u._("View Entire Discussion ({number of comments} Comments)", [u._param("number of comments", Object(a.b)(h))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(h)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				v2Container: "_3Ck2ZoZ2ImMBMvI1gp5MaL",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				participantsCount: e
			}) => u._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [u._param("total participated users", Object(m.b)(e)), u._plural(e)], {
				hk: "1yrPLH"
			});
			var h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					n = t.status === d.a.Closed,
					m = Object(i.e)(c.x),
					u = Object(i.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return m ? r.a.createElement("div", {
					className: b.a.v2Container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), s && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, g._("Live", null, {
					hk: "1G2P1W"
				})), n && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, g._("Ended", null, {
					hk: "4s3hco"
				})), t.totalParticipantsCount && r.a.createElement("span", {
					className: b.a.predictions
				}, r.a.createElement(p, {
					participantsCount: t.totalParticipantsCount
				})), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: b.a.title
				}, t.name)) : r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("h3", {
					className: b.a.title
				}, t.name), r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, g._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), s && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, g._("Live", null, {
					hk: "1G2P1W"
				})), n && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, g._("Ended", null, {
					hk: "4s3hco"
				}))), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => n.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
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
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = o.a.wrapped(n.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: o,
						tooltipIdPrefix: n,
						tooltipType: r
					} = e;
					let i = n;
					return s && (i = `${i}--${s}`), r && (i = `${i}--${r}`), t && (i = `${i}--${t}`), o && (i = `${i}--${o}`), i
				}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: o,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, {
					className: m
				}, n.a.createElement("div", {
					className: a.a.title
				}, d), i && n.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.b.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: o.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: o.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				u = s.n(m);
			const p = r.a.createElement(d.a, {
					className: u.a.lockIcon
				}),
				h = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? o.fbt._("This thread has been locked by the moderators of {communityname}", [o.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : o.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: u.a.bannerBase,
					color: a.b.locked,
					icon: p,
					subtitle: o.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: t
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const u = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, n = t ? o.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : o.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(u, null),
					subtitle: n,
					title: o.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				f = Object(a.c)({
					subreddit: u.w,
					subredditAboutInfo: u.t
				}),
				x = Object(i.b)(f);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const n = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || o.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(p.a, {
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, o.fbt._("This community is {=quarantined}", [o.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", n ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: n
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
						to: "/"
					}, o.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: o.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return n.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, o = t ? c : r.a;
				return n.a.createElement(o, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(o.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/reddit/components/MediumPost/index.m.less"),
				b = s.n(h);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: o,
				shouldShowSubscribeButton: h,
				subredditOrProfile: g,
				templatePlaceholderImage: f,
				shouldShowFollowButton: x,
				isFollowed: C,
				isCommentsPage: v,
				onFollowPostClick: _
			}) => {
				return Object(u.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: x || h
					})
				}, n.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, x && n.a.createElement(a.a, {
					isFilled: !!C,
					onClick: _,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && g && n.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(m.i)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(p.h)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: v,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: f
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(o.a)({
					resolved: {},
					chunkName: () => "NewCommentPill",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("NewCommentPill").then(s.bind(null, "./src/reddit/components/NewCommentPill/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/NewCommentPill/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && n.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_1H6_lZclv3OiOYYLJ3oAEN",
				BlockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockedAuthorTextWrapper: "m2v6rWFRpijpyTUSArDdl",
				expandButton: "_1elWTUH22waxJo7g8N3y3J"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				classicThumbnail: "_1FHUoxLVcplbcdYoOYbzlq",
				classicNotificationButton: "_3PPSzlne0JO99X7TQkgRgN",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				modModeBannerWrapper: "_2TM2Nmy6QisWK1nerxy26v"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				f = s("./src/reddit/models/User/index.ts"),
				x = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				E = s("./node_modules/lodash/find.js"),
				j = s.n(E),
				w = s("./node_modules/react-motion/lib/react-motion.js");
			const P = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				I = {},
				S = (e = [], t) => {
					const s = j()(e, {
							key: "expando_content"
						}),
						o = s && s.style ? s.style.opacity : 0;
					return t ? o >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : o > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(w.spring)(1, P)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(w.spring)(0, P)
						}
					}]
				};
			class L extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), I), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: o
					} = this.props;
					return i.a.createElement(w.TransitionMotion, {
						styles: e => S(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var T = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				N = s("./src/reddit/models/Vote/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/experiments/categories.ts"),
				M = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				B = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				K = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				q = s("./src/reddit/components/AwardBadges/index.tsx"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Y = s("./src/reddit/components/Econ/Audio/async.ts"),
				Q = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				J = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				X = s("./src/reddit/components/ExpandoButton/index.tsx"),
				$ = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ee = s("./src/reddit/components/Flatlist/index.tsx"),
				te = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				se = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				oe = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ne = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				re = s("./src/reddit/components/ModModeReports/index.tsx"),
				ie = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ae = s("./src/reddit/components/NotificationButton/index.tsx"),
				de = s("./src/reddit/components/PostContainer/index.tsx"),
				ce = s("./src/higherOrderComponents/makeAsync.tsx"),
				le = s("./src/lib/loadWithRetries/index.ts"),
				me = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const ue = Object(ce.a)({
				ErrorComponent: () => i.a.createElement(me.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(le.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(me.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var pe = e => i.a.createElement(ue, e),
				he = s("./src/reddit/components/PostList/index.tsx"),
				be = s("./src/reddit/components/PostMedia/index.tsx"),
				ge = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				fe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				xe = s("./src/reddit/components/PostTitle/index.tsx"),
				Ce = s("./src/reddit/components/PostTopLine/index.tsx"),
				ve = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_e = s("./src/reddit/components/ReadingIndicator/async.tsx"),
				ye = s("./src/reddit/components/SourceLink/index.tsx"),
				Oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ke = s("./src/reddit/constants/componentTestIds.ts"),
				Ee = s("./src/reddit/constants/postLayout.ts"),
				je = s("./src/reddit/contexts/PageLayer/index.tsx"),
				we = s("./src/reddit/helpers/postEvent.ts"),
				Pe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ie = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Se = s("./src/reddit/selectors/postFlair.ts"),
				Le = s("./src/reddit/models/Audio/index.ts"),
				Te = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Fe = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Ne = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ae = s("./src/reddit/constants/experiments.ts"),
				Re = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Me = s("./src/reddit/selectors/experiments/presence.ts");
			const Be = e => {
					return Object(Re.c)(e, {
						experimentEligibilitySelector: Re.a,
						experimentName: Ae.qf
					}) === Ae.Zc
				},
				De = e => {
					if (Object(Me.a)(e)) return !1;
					return Object(Re.c)(e, {
						experimentEligibilitySelector: Re.a,
						experimentName: Ae.pf
					}) === Ae.Zc
				},
				Ve = (e, {
					postId: t
				}) => {
					const s = Object(U.H)(e, {
						postId: t
					});
					return !(Object(Me.a)(e) || !s || s.isSponsored) && Object(Re.c)(e, {
						experimentEligibilitySelector: Re.a,
						experimentName: Ae.of
					}) === Ae.Zc
				};
			var Ue = s("./node_modules/fbt/lib/FbtPublic.js"),
				We = s("./src/reddit/constants/colors.ts"),
				He = s("./src/reddit/icons/fonts/index.tsx"),
				ze = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ke = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				qe = s.n(Ke);
			const Ge = i.a.createElement(He.a, {
				className: qe.a.BlockIcon,
				name: "block"
			});
			var Ye = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(ze.a, {
						className: qe.a.bannerBase,
						color: We.b.dayModeActionIcon,
						icon: Ge,
						title: Ue.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: qe.a.expandButton,
							onClick: t
						}, Ue.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: qe.a.blockedAuthorTextWrapper
					})
				},
				Qe = s("./src/config.ts"),
				Ze = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Je = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				$e = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				et = s.n($e);
			const {
				fbt: tt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), st = () => tt._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [tt._param("=User Agreement", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, tt._("User Agreement", null, {
				hk: "3MHgRl"
			}))), tt._param("=Content Policy", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, tt._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), ot = () => tt._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [tt._param("=User Agreement", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, tt._("User Agreement", null, {
				hk: "yMHtU"
			}))), tt._param("=Content Policy", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, tt._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var nt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return tt._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case F.g.Author:
							return tt._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case F.g.AuthorDeleted:
							return tt._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case F.g.AutomodFiltered:
							return tt._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case F.g.CommunityOps:
							return tt._("This post was removed by Reddit admin, u/{username}.", [tt._param("username", t)], {
								hk: "34nHWu"
							});
						case F.g.ContentTakedown:
							return tt._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case F.g.CopyrightTakedown:
							return tt._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case F.g.Moderator:
							return tt._("This post was removed by r/{subredditName} moderator, u/{username}.", [tt._param("subredditName", s), tt._param("username", t)], {
								hk: "270bcn"
							});
						case F.g.Reddit:
							return tt._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return tt._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return tt._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case F.g.Author:
							return tt._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case F.g.AuthorDeleted:
							return tt._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case F.g.AutomodFiltered:
							return tt._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case F.g.CommunityOps:
							return tt._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case F.g.ContentTakedown:
							return tt._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case F.g.CopyrightTakedown:
							return tt._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case F.g.Moderator:
							return tt._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [tt._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case F.g.Reddit:
							return tt._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return tt._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), a = t ? (e => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(st, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return tt._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case F.g.AutomodFiltered:
							return tt._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case F.g.CommunityOps:
							return tt._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [tt._param("=just ask", i.a.createElement("a", {
								className: et.a.link,
								href: `${Qe.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, tt._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(ot, null);
						case F.g.CopyrightTakedown:
							return tt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case F.g.Moderator:
							return tt._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case F.g.Reddit:
							return tt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return tt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(st, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return tt._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case F.g.AutomodFiltered:
							return tt._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [tt._param("=[subreddit name]", i.a.createElement("a", {
								className: et.a.link,
								href: `${Qe.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, tt._("{subreddit name}", [tt._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case F.g.CommunityOps:
							return tt._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(ot, null);
						case F.g.CopyrightTakedown:
							return tt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case F.g.Moderator:
							return tt._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case F.g.Reddit:
						default:
							return tt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? We.b.warning : We.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case F.g.AntiEvilOps:
						case F.g.AutomodFiltered:
						case F.g.CommunityOps:
						case F.g.ContentTakedown:
						case F.g.CopyrightTakedown:
						case F.g.Reddit:
							t = Ze.a;
							break;
						case F.g.AuthorDeleted:
						case F.g.Author:
							t = Xe.b;
							break;
						case F.g.Moderator:
							t = Je.a;
							break;
						default:
							t = Ze.a
					}
					return i.a.createElement(t, {
						className: et.a.icon
					})
				})(o);
				return i.a.createElement(ze.a, {
					className: et.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function rt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, o && s.removedByCategory && i.a.createElement(nt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var it = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				at = s("./src/reddit/components/PostContent/index.m.less"),
				dt = s.n(at);
			const {
				fbt: ct
			} = s("./node_modules/fbt/lib/FbtPublic.js"), lt = p.a.wrapped(xe.c, "PostTitle", dt.a), mt = p.a.wrapped(X.a, "ExpandoButton", dt.a), ut = p.a.wrapped(L, "ClassicExpandoMotion", dt.a), pt = p.a.wrapped(ee.c, "FullWidthFlatlist", dt.a), ht = i.a.createElement("p", {
				className: dt.a.VideoProcessingStatus
			}, ct._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), bt = Object(je.u)({
				isCommentsPage: je.x,
				pageLayer: e => e
			}), gt = Object(a.b)(() => Object(l.c)({
				activeModalId: A.a,
				flairStyleTemplate: je.U,
				currentUser: H.k,
				crosspost: U.d,
				hideNSFWPref: H.C,
				imageGalleryCurrentItem: U.i,
				isAdminOrMod: (e, t) => {
					const s = Object(U.U)(e, {
						postId: t.postId
					});
					return !!s && Object(B.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: U.l,
				isExpanded: U.m,
				isFollowed: U.t,
				isFollowedExpired: U.o,
				isPostFollowEnabled: Ie.b,
				showPromotedCTA: W.b,
				post: U.H,
				moderatorPermissions: D.l,
				modModeEnabled: je.S,
				isInCategoriesExperiment: R.a,
				showAwardsPlaque: M.a,
				showEditFlair: Se.a,
				subredditOrProfile: U.U,
				isEditing: V.M,
				userIsOp: H.qb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ne.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ne.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Ve,
				isReadingIndicatorsReadTestEnabled: De,
				isReadingIndicatorsWriteTestEnabled: Be
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(b.Z)(s)),
				onOpenReportsDropdown: t => e(Object(k.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === N.a.upvoted ? Object(b.db)(s) : Object(b.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(b.z)(t, s)),
				openPost: t => e(Object(b.K)(t)),
				onFollowPost: t => e(Object(b.cb)(s, t)),
				onFollowPostExpired: () => e(Object(b.W)({
					id: s,
					expiresAt: 0
				}))
			})), ft = e => e.media && e.media.type === T.o.EMBED && e.media.provider === T.v.Imgur && e.media.height > 700, xt = p.a.wrapped(d.a, "ThumbLink", dt.a), Ct = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const r = e.source ? i.a.createElement(G.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(xt, {
					to: Object(_.b)(e.permalink)
				}, i.a.createElement(G.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: dt.a.classicThumbnail
				}, s && i.a.createElement(ae.a, {
					className: dt.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: ct._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, vt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(ut, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(be.a, {
					className: dt.a.ClassicPostMedia,
					isListing: !1,
					isNotCardView: !0,
					post: e,
					shouldLoad: !0,
					showFull: !0,
					showCentered: !0,
					scrollerItemRef: s
				})),
				shouldExpand: !!t
			});
			t.a = bt(gt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: _,
					isAdminOrMod: k,
					isCommentCountAnimation: E,
					isCommentsPage: j,
					isCountAnimShadowTestEnabled: w,
					isCurrentUserProfilePost: P,
					isEditing: I,
					isExpanded: S,
					isFollowed: L,
					isFollowedExpired: N,
					isOverlay: A,
					isPostFollowEnabled: R,
					isReadingIndicatorsExperimentEnabled: M,
					isReadingIndicatorsReadTestEnabled: B,
					isReadingIndicatorsWriteTestEnabled: D,
					isVoteCountAnimation: V,
					moderatorPermissions: U,
					modModeEnabled: W,
					onFollowPost: H,
					onFollowPostExpired: G,
					onIgnoreReports: X,
					onOpenReportsDropdown: ae,
					openPost: ce,
					onVoteClick: le,
					post: me,
					scrollerItemRef: ue,
					sendEvent: je,
					showAwardsPlaque: Ie,
					showEditFlair: Se,
					showPromotedCTA: Ne,
					subredditOrProfile: Ae,
					userIsOp: Re
				} = e, Me = Object(Oe.b)(), [Be, De] = Object(r.useState)(me.authorIsBlocked), Ve = Object(T.I)(me), Ue = Object(a.e)(e => Boolean(me.predictionTournament) && Object(Fe.w)(e)), We = Object(a.e)(e => Object(Pe.a)(e)), He = Object(a.e)(e => Object(Fe.c)(e)), ze = Object(c.a)(me), Ke = M || B || D;
				Object(r.useEffect)(() => {
					R && N && G()
				}, []);
				const qe = me.isSponsored ? Object(he.b)(me.id, {
						fireAdPixelsOfType: d,
						openPost: ce
					}) : n.a,
					Ge = Object(v.a)(U),
					Qe = Object(x.a)(U),
					Ze = Object(C.a)(U),
					Je = Ge || Qe,
					Xe = ((e, t, s) => {
						const [o, n] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, Je, me),
					$e = !!me.media && (me.media.type === T.o.RTJSON || me.media.type === T.o.TEXT),
					et = Re && $e,
					tt = Object(ne.c)(me),
					st = Object(ie.c)(me);
				let ot;
				const nt = !(W && Ge),
					at = Object(ge.b)({
						hide: !M && nt,
						editPost: !M && nt,
						save: nt,
						report: !M && nt
					}),
					ct = me.removedByCategory === F.g.AuthorDeleted,
					ut = o && (o.displayText === me.author || o.username === me.author),
					bt = !ct && !ft(me) && (ut || k || !(me.removedByCategory && me.media && (Object(T.L)(me.media) || Object(T.J)(me.media) || Object(T.E)(me.media)))),
					gt = Object(m.t)(me, _),
					{
						source: xt
					} = gt,
					_t = me.removedByCategory === F.g.Reddit && Object(h.e)(me.created) > 24,
					yt = me.removedByCategory && me.removedByCategory !== F.g.Reddit || _t,
					Ot = R && !yt && !me.isArchived,
					kt = Object(r.useCallback)(() => {
						H(L ? F.f.UNFOLLOWED : F.f.FOLLOWED), Me(L ? Object(O.n)(me.id) : Object(O.d)(me.id))
					}, [H, Me, L, me.id]),
					Et = i.a.createElement(lt, {
						post: me,
						size: xe.b.ExtraLarge,
						showCategoryTag: A,
						isOverlay: A,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					jt = i.a.createElement(it.a, {
						post: me,
						showViewCount: Xe
					}),
					wt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(a.e)(e => Boolean(o.predictionTournament) && Object(Fe.w)(e)), r = Object(a.e)(e => Object(Le.a)(o) && Object(Fe.c)(e));
						return s ? Ee.g.Classic : n ? Ee.g.Large : r ? Ee.g.Large : t ? Ee.g.Large : o.media && !ft(o) ? Ee.g.Large : Ee.g.Medium
					})(e);
				if (wt === Ee.g.Classic) {
					const t = Object(g.a)(me);
					ot = i.a.createElement("div", {
						"data-test-id": ke.e
					}, i.a.createElement(fe.a, {
						model: me,
						handleVote: le,
						isCountAnimShadowTestEnabled: w,
						isOverlay: A,
						isVoteCountAnimation: V,
						postId: me.id
					}), i.a.createElement("div", {
						className: dt.a.mainBody
					}, i.a.createElement("div", {
						className: dt.a.content
					}, i.a.createElement(Ce.a, {
						hideAwards: Ie,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: P,
						isOverlay: !!A,
						isTopicPage: !1,
						post: me,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!A && !me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ae,
						shouldShowFollowButton: Ot && !t,
						isFollowed: L,
						onFollowPostClick: kt
					}), Et, i.a.createElement($.a, {
						className: j ? dt.a.leftPadding : void 0,
						post: me,
						showCategoryTag: e.isInCategoriesExperiment && j,
						sendEvent: je
					}), W && Ge && st && i.a.createElement(re.a, {
						onIgnoreReports: X,
						reportable: me
					}), i.a.createElement(te.d, null), i.a.createElement("div", {
						className: dt.a.FlatlistContainer
					}, We && Be ? i.a.createElement(Ye, {
						onBannerClick: () => De(!1),
						isExpandable: Ve
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(mt, {
						crosspost: s || void 0,
						isExpanded: !!S,
						post: me,
						useMediaIcons: !1
					}), vt(e)), Ie && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: me,
						tooltipType: A ? ve.c.Lightbox : void 0
					}), i.a.createElement(pt, {
						currentUser: o,
						hasModFlairPerms: Qe,
						hasModFullPerms: Ze,
						hasModPostPerms: Ge,
						isOverlay: A,
						onIgnoreReports: X,
						onOpenReportsDropdown: ae,
						modModeEnabled: W,
						post: me,
						showUpvotePercent: !0,
						showViewCount: Xe,
						useFlatlistBreakpoints: at,
						isCommentCountAnimation: E,
						isCountAnimShadowTestEnabled: w
					}))), t && i.a.createElement(Ct, {
						post: me,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Ot,
						isFollowed: L,
						onFollowPostClick: kt
					})))
				} else if (wt === Ee.g.Medium) {
					const t = Object(g.a)(me);
					ot = i.a.createElement("div", {
						"data-test-id": ke.e
					}, i.a.createElement(fe.a, {
						model: me,
						handleVote: le,
						isCountAnimShadowTestEnabled: w,
						isOverlay: A,
						isReadingIndicatorsExperimentEnabled: M,
						isVoteCountAnimation: V,
						postId: me.id
					}), i.a.createElement("div", {
						className: dt.a.mainBody
					}, i.a.createElement("div", {
						className: dt.a.content
					}, i.a.createElement(Ce.a, {
						hideAwards: Ie,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: P,
						isOverlay: !!A,
						isTopicPage: !1,
						post: me,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!A && !me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ae,
						shouldShowFollowButton: Ot && !t,
						isFollowed: L,
						onFollowPostClick: kt
					}), Et, We && Be ? i.a.createElement(Ye, {
						onBannerClick: () => De(!1),
						isExpandable: Ve
					}) : me.source && i.a.createElement(ye.a, {
						post: me,
						isCommentsPage: j
					}), Object(T.N)(me) && ht, i.a.createElement($.a, {
						className: j ? dt.a.leftPadding : void 0,
						post: me,
						showCategoryTag: e.isInCategoriesExperiment && j,
						sendEvent: je
					}), Ae && yt && i.a.createElement(rt, {
						isAdminOrMod: k,
						post: me,
						subredditOrProfile: Ae
					}), W && Ge && st && i.a.createElement(re.a, {
						onIgnoreReports: X,
						reportable: me
					})), t && !ze && i.a.createElement(se.a, {
						post: me,
						forceShowNSFW: !0,
						hasModPostPerms: Je,
						isCommentsPage: j,
						isOverlay: !0,
						modModeEnabled: W,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ae,
						shouldShowFollowButton: Ot,
						isFollowed: L,
						onFollowPostClick: kt
					})), i.a.createElement(te.d, null), Ie && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: me,
						tooltipType: A ? ve.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: dt.a.controlsContainer
					}, i.a.createElement(ee.c, {
						currentUser: o,
						hasModFlairPerms: Qe,
						hasModFullPerms: Ze,
						hasModPostPerms: Ge,
						isOverlay: A,
						modModeEnabled: W,
						onIgnoreReports: X,
						onOpenReportsDropdown: ae,
						post: me,
						showEditPost: et,
						showEditFlair: Se,
						tooltipType: A ? ve.c.Lightbox : void 0,
						useFlatlistBreakpoints: at,
						isCommentCountAnimation: E,
						isCountAnimShadowTestEnabled: w,
						shouldHideItems: M
					}), Ke && i.a.createElement(_e.a, {
						isReadingIndicatorsExperiment: M,
						isReadLoadTest: B,
						isWriteLoadTest: D,
						postId: me.id
					}), !M && jt))
				} else wt === Ee.g.Large && (ot = i.a.createElement("div", {
					"data-test-id": ke.e
				}, i.a.createElement(fe.a, {
					model: me,
					handleVote: le,
					isCountAnimShadowTestEnabled: w,
					isOverlay: A,
					isReadingIndicatorsExperimentEnabled: M,
					isVoteCountAnimation: V,
					postId: me.id
				}), Ue && Object(Te.c)(me) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Z.a, {
					post: me
				}), i.a.createElement(Q.a, {
					post: me
				})), !Ue && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce.a, {
					forceOpenInNewTab: p,
					hideAwards: Ie,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: j,
					isCurrentUserProfilePost: P,
					isOverlay: !!A,
					isTopicPage: !1,
					post: me,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!A && !me.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ae,
					shouldShowFollowButton: Ot,
					isFollowed: L,
					onFollowPostClick: kt
				}), Et, ((e, t, s, o) => e.source && !t && (s || o))(me, s, A, j) && i.a.createElement(ye.a, {
					post: me,
					isCommentsPage: j
				})), i.a.createElement($.a, {
					className: j ? dt.a.leftPadding : void 0,
					post: me,
					showCategoryTag: e.isInCategoriesExperiment && j,
					sendEvent: je
				}), Ae && yt && i.a.createElement(rt, {
					isAdminOrMod: k,
					post: me,
					subredditOrProfile: Ae
				}), I && i.a.createElement(pe, {
					post: me
				}), We && Be ? i.a.createElement(Ye, {
					onBannerClick: () => De(!1),
					isExpandable: Ve
				}) : bt && !I && i.a.createElement(be.a, {
					className: Object(u.a)(dt.a.LargePostMedia, {
						[dt.a.isCommentsPage]: j
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: A,
					isOverlay: A,
					post: me,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !A,
					showCentered: !0,
					showPromotedCTA: Ne,
					scrollerItemRef: ue
				}), Ne && xt && xt.url && i.a.createElement(z.a, {
					className: dt.a.adLinkWrapper
				}, i.a.createElement(K.a, {
					post: me,
					adLinkContent: gt
				})), W && Ge && tt && i.a.createElement("div", {
					className: dt.a.modModeBannerWrapper
				}, i.a.createElement(oe.a, {
					thing: me
				})), W && Ge && st && i.a.createElement("div", {
					className: dt.a.modModeBannerWrapper
				}, i.a.createElement(re.a, {
					onIgnoreReports: X,
					reportable: me
				})), He && Object(Le.a)(me) && i.a.createElement(Y.a, {
					post: me
				}), i.a.createElement(te.d, null), Ie && i.a.createElement(q.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: me,
					tooltipType: A ? ve.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: dt.a.controlsContainer
				}, i.a.createElement(ee.c, {
					currentUser: o,
					forceOpenInNewTab: p,
					hasModFlairPerms: Qe,
					hasModFullPerms: Ze,
					hasModPostPerms: Ge,
					isOverlay: A,
					modModeEnabled: W,
					onIgnoreReports: X,
					onOpenReportsDropdown: ae,
					post: me,
					showEditPost: et,
					showEditFlair: Se,
					tooltipType: A ? ve.c.Lightbox : void 0,
					useFlatlistBreakpoints: at,
					isCommentCountAnimation: E,
					isCountAnimShadowTestEnabled: w,
					shouldHideItems: M
				}), Ke && i.a.createElement(_e.a, {
					isReadingIndicatorsExperiment: M,
					isReadLoadTest: B,
					isWriteLoadTest: D,
					postId: me.id
				}), !M && jt)));
				const Pt = Object(r.useCallback)((e, t) => Object(O.i)(e, t), []);
				return i.a.createElement(de.a, {
					className: Object(u.a)(t, dt.a.postContainer, {
						[dt.a.hasEventMeta]: Object(we.a)(me)
					}),
					isOverlay: A,
					post: me,
					eventFactory: A ? y.b : Pt,
					onClick: qe
				}, i.a.createElement(J.a, {
					post: me
				}), ot)
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				isInExperimentStyles: "yM5jY9oh36Af0F7EUOj4L"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(k);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: k,
				hostPostData: j,
				iconClassName: w,
				inSubredditOrProfile: P,
				isCommentsPage: I,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: L,
				isOverlay: T,
				isTopicPage: F,
				listingKey: N,
				post: A,
				shouldShowSubscribeButton: R,
				showCornerOutboundLink: M,
				showSubreddit: B,
				showSubredditIcon: D,
				subredditOrProfile: V,
				isFollowed: U,
				shouldShowFollowButton: W,
				onFollowPostClick: H
			}) => {
				const z = n || F,
					K = V && Object(y.h)(V),
					q = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(O.tb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(E.a.container, e)
				}, B && V && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, D && r.a.createElement(p.b, {
					className: Object(a.a)(E.a.subredditIcon, w),
					shouldHideNsfwIcon: k,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, B && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(u.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: T ? u.c.Lightbox : void 0,
					post: A,
					showSub: B,
					subredditOrProfile: V
				}), r.a.createElement(m.a, {
					className: E.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: S,
					post: A,
					tooltipType: T ? u.c.Lightbox : void 0
				}), !z && r.a.createElement(d.a, {
					isPostDetail: I,
					thing: A,
					tooltipType: T ? u.c.Lightbox : void 0
				})), V && q && B && R && !L && r.a.createElement(b.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(C.i)(A.id, e ? "unsubscribe" : "subscribe", "post", N, j),
					identifier: {
						name: V.name,
						type: K ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: A.id,
					size: f.d.XS
				}), M && r.a.createElement(x.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(_.D)(A),
					source: A.source
				}, r.a.createElement(v.a, {
					className: E.a.outboundLinkIcon
				})), W && q && r.a.createElement(l.a, {
					isFilled: !!U,
					onClick: H,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ReadingIndicator/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReadingIndicator",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReadingIndicator").then(s.bind(null, "./src/reddit/components/ReadingIndicator/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReadingIndicator/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				p = s("./src/lib/makeListingKey/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				j = s("./src/reddit/selectors/commentsListTruncated.ts"),
				w = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				I = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				F = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/constants/listings.ts"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/helpers/name/index.ts"),
				M = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(B);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var U = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: o,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return n ? (c = N.c[N.b.Popular], d = V._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = o ? V._("See more posts like this in {subredditName}", [V._param("subredditName", Object(R.c)(r.displayText))], {
						hk: "pLxW5"
					}) : V._("Continue browsing in {subredditName}", [V._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
						className: Object(F.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(M.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				z = s.n(H);
			const K = Object(c.a)((e, {
					isOverlay: t
				}) => t, j.a, w.b, (e, t, s) => !((!t || s) && e)),
				q = Object(c.a)((e, {
					post: t
				}) => !!t && Object(_.a)(t), (e, {
					awaitAllCommentsRendered: t
				}) => t, T.J, T.K, E.d, K, (e, t, s, o, n, r) => !e && !s && !o && !n && !t && r),
				G = Object(c.a)((e, {
					post: t
				}) => t, P.c, L.request, L.subreddit, (e, t, s, o) => {
					const n = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (e && (r = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: o
						}), t && e && n) {
						const {
							isEligibleForLinkedPosts: n,
							id: a
						} = e;
						i = Object(u.a)(a, Object(P.a)(t) || !n), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: n,
							shouldShowLinkedPosts: n && !Object(x.wf)(t) && !Object(P.a)(t),
							subreddit: o
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: n,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				Y = Object(c.c)({
					listingBelowLinkedPostsData: G,
					nsfwListingBelowVariant: I.a,
					shouldShowListingBelow: q,
					shouldShowNsfwListingBelow: S.b
				}),
				Q = Object(d.b)(Y, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.W.HOT,
						subredditName: t
					}))
				}));
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.d) : null, this.onViewed = (e, t) => Object(k.f)({
						key: this.listingKey(),
						sort: l.W.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.fc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(O.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						shouldShowNsfwListingBelow: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: o,
						subredditOrProfile: n
					} = this.props;
					return s ? t : e && o && o.id ? Object(W.a)(o.id) : Object(p.a)(n.name, l.W.TOP, {
						t: l.fc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: n,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(x.wf)(c) && !Object(P.a)(c) && !i) return a.a.createElement("div", {
						className: z.a.smallBanner
					});
					const {
						name: l
					} = n, m = Object(y.a)(r.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? o.fbt._("More posts from the {name} community", [o.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(P.b)(c) ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Zd.DeRecs ? o.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : o.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: z.a.smallBanner,
						style: {
							color: m
						}
					}, u)
				}
				render() {
					const {
						contentContainerRef: e,
						listingBelowLinkedPostsData: t,
						shouldShowListingBelow: s,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: z.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: z.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: C.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: z.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(U, {
						className: z.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					}))
				}
			}
			t.a = Q(Object(m.a)(Object(g.c)(Z)))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: o
			}) => n.a.createElement("div", {
				className: e
			}, n.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), n.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, n.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, {
				postId: t
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(d.B)(e) && !Object(a.a)(e)
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...o
			}) => e ? n.a.createElement(c.a, o) : null)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				u = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: o.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(u, null, o.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(u, null, o.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(u, null, o.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(u, null, o.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReredditLink").then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Widgets/ReredditLink/index.tsx"
				}
			})
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return w
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.z,
					isProfilePostListing: p.K,
					isTopicPage: p.P,
					pageLayer: e => e
				})
			}
			const k = O(),
				E = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.Q)(e, t),
					loadMore: C.g,
					postsById: v.S,
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: o
					}) => Object(v.E)(e, t, s, o)),
					subredditsById: _.X,
					viewportDataLoaded: y.a,
					pageReferrer: p.T,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.e
				},
				j = Object(n.c)(E),
				w = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o, n) => {
						e(c.N(t, o, n))
					},
					trackOnPostExitedViewport: (t, s, o, n, r) => {
						e(c.O(t, o, n, r))
					},
					surveyTriggerScrollCounted: () => e(Object(m.k)())
				}),
				P = e => Object(h.b)({
					...e
				}),
				I = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: i
					} = o;
					return Object(b.i)(e, t, "post", n, r, i, void 0)
				},
				S = Object(o.b)(j, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: P,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(k(S(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/reddit/helpers/parseUrl.ts");
			const n = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(n.map((function(e) {
					return e + ".reddit.com"
				}))).concat(n.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: r.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const n = Object(o.a)(t);
							if (!n) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(n.hostname)) return;
							const i = n.pathname.match(s.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = i[s + 1], e
									}), {})
								}
							}
						}(s, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const s = Array.prototype.slice.call(arguments);
								return s.unshift(t), e.push(s), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const s = e.methods[t];
							e[s] = e.factory(s)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(t, s)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => ({
					...Object(o.defaults)(e),
					media: Object(o.media)(e, t),
					profile: Object(o.profile)(e),
					subreddit: Object(o.subreddit)(e) || Object(o.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(o.post)(t, e),
					...n(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(o.post)(t, e),
					...n(t, e)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/promo.ts"),
				n = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(n.a)();
				return !!e && t.get(e) === o.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(o.e)(n.a) === e,
					s = Object(o.e)(n.c) === e,
					r = Object(o.e)(n.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(o.useContext)(n.a)
			}
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				u = s("./src/reddit/components/LightboxHeader/index.tsx"),
				p = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(r.b)(() => Object(i.c)({
					showFPR: f.I,
					showSuspended: f.R,
					showOffline: e => e.connection.showBanner
				})),
				y = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...o
				}) => {
					const r = Object(g.a)({
						theme: s,
						...o
					});
					return n.a.createElement("div", v({
						className: Object(a.a)(C.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${p.h}px` : `${p.i}px`
						}
					}, o))
				});
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return n.a.createElement(m.a, {
							className: Object(a.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, n.a.createElement(u.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), n.a.createElement(c.a.Consumer, null, this.renderWrapper), n.a.createElement(h.a, e))
				}
			}
			t.a = _(O)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp",
				offline: "Jvy6k8geBbRljwIwFTLRo",
				navExperiment: "_1BAfE2MtXRmb69Ht2TsVN-"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => n.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: o,
						sidebar: r
					} = this.props;
					return n.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: o,
						tabIndex: -1
					}, n.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: o,
						redditStyle: !0
					}, t, e), r && n.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: o
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				u = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				h = s.n(p);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(r.b)(() => Object(i.c)({
				headComment: u.x,
				post: u.G
			}));
			t.a = Object(c.c)(g(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				post: o,
				postId: r,
				sendEvent: i
			}) => {
				var c;
				if (!o) return null;
				const u = null !== (c = o.numDuplicates) && void 0 !== c ? c : 0,
					p = void 0 !== e,
					g = o.permalink,
					f = u > 0,
					x = Object(l.b)(Object(a.e)(g));
				return p || f ? n.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, p && n.a.createElement("div", null, n.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && n.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), f && n.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(r)),
					to: x
				}, b._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [b._plural(u, "other discussion communities count")], {
					hk: "3oofZ8"
				}))) : null
			}))
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				Spacer: "q6p33SkkiPu07qUoN_Kd",
				spacer: "q6p33SkkiPu07qUoN_Kd",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				OverviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				overviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				backgroundMargin: "_34i0o0-SanTnUOM8JXdW6f",
				isFirstInCommentList: "_22yjV_JLQY-BfOOW1wgsgI",
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return gt
			})), s.d(t, "CommentsPage", (function() {
				return Ot
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				f = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				_ = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				O = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				E = s("./src/lib/performanceTimings/index.tsx"),
				j = s("./src/reddit/actions/ads/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				F = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/actions/upvotePrompt.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				R = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				B = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				V = s("./src/reddit/constants/history.ts"),
				U = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/contexts/ApiContext.tsx"),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				G = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Y = s("./src/reddit/selectors/upvotePrompt.ts"),
				Q = s("./src/reddit/featureFlags/profileCollections.ts"),
				Z = s("./src/reddit/contexts/Post/index.tsx"),
				J = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				oe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ne = s("./src/reddit/selectors/creatorStats.ts"),
				re = s("./src/reddit/selectors/discoveryUnit.ts"),
				ie = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ae = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				de = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ce = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				le = s("./src/reddit/selectors/experiments/postSeo.ts"),
				me = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				ue = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				pe = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				he = s("./src/reddit/selectors/meta.ts"),
				be = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ge = s("./src/reddit/selectors/posts.ts"),
				fe = s("./src/reddit/selectors/subreddit.ts"),
				xe = s("./src/reddit/selectors/tooltip.ts"),
				Ce = s("./src/reddit/selectors/user.ts"),
				ve = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				_e = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				ye = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Oe = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ke = s("./src/reddit/components/Comments/index.tsx"),
				Ee = s("./src/reddit/components/Comments/States/index.tsx"),
				je = s("./src/reddit/components/CommentsChat/Loader.ts"),
				we = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pe = s("./src/reddit/components/CommentSort/index.tsx"),
				Ie = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Se = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Le = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Te = s("./src/reddit/components/HeaderImage/index.tsx"),
				Fe = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ne = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ae = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Re = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Me = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Be = s("./src/reddit/components/JumpToContent/index.tsx"),
				De = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Ve = s("./src/reddit/components/PostContent/index.tsx"),
				Ue = s("./src/reddit/components/PostTopMeta/index.tsx"),
				We = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				He = s("./src/reddit/components/SubredditNav/index.tsx"),
				ze = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ke = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				qe = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ge = s("./src/reddit/helpers/history/index.ts"),
				Ye = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				Qe = s("./src/reddit/helpers/postCollection.ts"),
				Ze = s("./src/reddit/helpers/resonatePage/index.ts"),
				Je = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Xe = s("./src/reddit/helpers/trackers/screenview.ts"),
				$e = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				et = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				tt = s("./src/reddit/layout/page/Listing/index.tsx"),
				st = s("./src/reddit/models/ContentGate.ts"),
				ot = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				nt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				rt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				it = s.n(rt);

			function at() {
				return (at = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const dt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				ct = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				lt = 200,
				mt = 80,
				ut = 32,
				pt = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				ht = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-Collection",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Collection").then(s.bind(null, "./src/reddit/components/Collection/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Collection/index.tsx"
					}
				}),
				bt = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ContentGate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ContentGate").then(s.bind(null, "./src/reddit/components/ContentGate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentGate/index.tsx"
					}
				}),
				gt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(O.a)(e) : s,
				ft = e => {
					const {
						state: t
					} = e.location, s = a()(t, V.b.IsOverlay, !1), o = a()(t, V.b.CloseLocation, null), n = a()(t, V.b.ScrollOnLoad, !1);
					n && Object(Ge.c)(V.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(X.t)(i), l = r && Object(J.h)(r);
					return m.a.createElement(Z.a, {
						postId: c
					}, m.a.createElement(Ot, {
						closeLocation: o,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: n,
						sort: e.sort,
						subredditName: d
					}))
				},
				xt = Object(K.u)(),
				Ct = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(ge.U)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					canViewCreatorStats: (e, {
						postId: t
					}) => Object(ne.a)(e, t),
					comment: se.b,
					communityBannerDiscoveryUnit: re.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(Ce.f)(e, t),
					currentUserShowNSFW: Ce.eb,
					dismissedSubreddits: ie.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: be.c,
					headComment: te.x,
					isActionBarAnimationEnabled: G.b,
					isAvatarsInCommentsEnabled: de.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(ge.w)(e, {
						postId: t
					}) && Object(ae.a)(e),
					isCountAnimShadowTestEnabled: G.e,
					isCreatorStatsEnabled: (e, {
						postId: t
					}) => Object(ce.a)(e, t),
					isEligibleForCommentTruncation: pe.a,
					isChatPost: ee.d,
					isCommentsListTruncated: oe.a,
					isLoggedIn: Ce.K,
					isNightmodeOn: Ce.X,
					isTooltipOpen: (e, t) => !!Object(xe.a)(e),
					origin: he.j,
					post: ge.H,
					postSEOV2IdCardVariant: le.h,
					profileCollectionsEnabled: Q.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(te.s)(e, {
						commentsPageKey: gt({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: Ce.db,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(fe.t)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: ge.U,
					userHovercardIsOpen: (e, t) => Object(xe.b)(Object(Fe.b)({
						itemId: t.postId,
						tooltipIdPrefix: R.a,
						tooltipType: Ue.c.StickyPost
					}))(e),
					userPrefs: Ce.ub,
					inResonatePilot: me.a,
					isPostQualifiedForUpvotePrompt: Y.c,
					isTypingIndicatorsExperimentEnabled: ue.c
				}),
				vt = (e, t) => ({
					dismissTruncation: t => e(Object(ve.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(I.a)()),
					setCommentFocus: t => e(w.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(F.i)()),
					onToggleTooltip: t => e(Object(F.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.i)()),
					openRegisterModal: () => e(Object(L.k)()),
					goToSubredditPage: t => e(Object(p.b)(t)),
					truncateCommentsList: () => e(Object(I.b)()),
					fetchCommentsNativeAd: t => e(Object(j.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(_e.b)(t)),
					triggerUpvotePrompt: (t, s, o) => {
						e(Object(N.b)(t, s, o))
					}
				}),
				_t = Object(u.b)(Ct, vt);
			class yt extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.setAdScrollItemRef = e => {
						this.adScrollItemRef = e, setTimeout(this.handleScroll), this.needsUpdatedMeasurements = !0
					}, this.setCommentAdRef = e => {
						this.commentAdRef = e
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didPassAdScrollThreshold: e,
							didScrollPastPost: t,
							scrollContainerEl: s,
							scrollAdThreshold: o,
							scrollPostThreshold: n,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== o && d >= o && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== o && d < o && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== n && d >= n && (this.didScrollPastPost = !0), t && void 0 !== n && d < n && (this.didScrollPastPost = !1, r && _.a.write(() => {
							i(Object(Fe.b)({
								itemId: a,
								tooltipIdPrefix: R.a,
								tooltipType: Ue.c.StickyPost
							}))
						}))
					}, C.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Je.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							post: s
						} = this.props;
						t();
						const o = s && Object(X.s)(s) && s && s.belongsTo.id;
						o && e(o), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(qe.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === U.b.F || e.keyCode === U.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.onAllCommentsRendered = () => {
						this.props.isEligibleForCommentTruncation || this.state.allCommentsRendered || this.setState({
							allCommentsRendered: !0
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						allCommentsRendered: !1,
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				async componentDidMount() {
					var e;
					this.props.isPostQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, Y.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: o,
							isOverlay: n,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== W.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (n ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : _.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(Ye.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(X.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), _.a.read(() => {
							this.props.isOverlay || Object(E.d)(E.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Lb.includes(e) && Object(Ze.a)(e)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(Qe.a)(this.props.post);
						this.props.post && this.props.post.numComments ? _.a.read(this.handleScroll) : _.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), _.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && _.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let o;
							const n = (o = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && o.getBoundingClientRect().top,
								r = Math.abs(n - s),
								i = this.props.isOverlay ? ut : r - e;
							(this.props.isOverlay ? o && o.scrollTop || 0 : window.pageYOffset) >= i && _.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(o, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isPostQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, o = t && t.id;
					o && !e.includes(o) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = lt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = lt)
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					_.a.read(() => {
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - mt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - mt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), _.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => _.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return g.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					_.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: o,
							sort: n
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						o(Object(Xe.c)(t, s, e, f.TimerType.InApp, r, n))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: o,
						subredditName: n
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(Ke.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(bt, i);
					return s && (a = m.a.createElement($e.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: o,
						commentsPageKey: n,
						isActionBarAnimationEnabled: r,
						isCountAnimShadowTestEnabled: i,
						isEligibleForCommentTruncation: a,
						isLoggedIn: d,
						isNightmodeOn: c,
						isOverlay: l,
						post: u,
						postId: p,
						postSEOV2IdCardVariant: h,
						profileCollectionsEnabled: b,
						sendEvent: g,
						sort: f,
						subredditOrProfile: v
					} = this.props, _ = Object(le.f)(h);
					if (!u) {
						if (t) return m.a.createElement(Ee.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.o ? m.a.createElement(bt, {
							contentGateType: st.a.PostBlockedForLegalReason
						}) : m.a.createElement(Ee.d, {
							postId: p,
							commentId: o,
							apiError: e,
							sort: f
						}) : m.a.createElement(Ee.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const y = this.isCommentPermalink(),
						O = u.belongsTo.type === W.a.PROFILE,
						k = Object(Qe.a)(u) && (!O || b),
						E = !d,
						j = v && v.isQuarantined,
						w = !a && !this.state.allCommentsRendered;
					return dt.input.channel.postID = p, m.a.createElement(Et, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: d,
						isOverlay: l,
						isSwapVariant: _,
						post: u,
						subredditOrProfile: v,
						shouldFitPageToContent: E,
						isCollectionLayout: k
					}, m.a.createElement(De.a, {
						postId: p,
						isOverlay: l,
						commentId: o,
						intersectionRef: this.commentSortRef
					}), j && m.a.createElement(Me.a, {
						subredditName: v.name
					}), m.a.createElement(Be.a, null), m.a.createElement("div", {
						className: Object(x.a)(it.a.PageContentWrapper, {
							[it.a.LargePageContent]: k,
							[it.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, k && m.a.createElement(ht, {
						isOverlay: l,
						isNightmodeOn: c,
						postId: p
					}), m.a.createElement(ct, {
						condition: k,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: it.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Ve.a, {
						isCommentPermalink: y,
						isOverlay: l,
						postId: p,
						redditStyle: l,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: g,
						isActionBarAnimationEnabled: r,
						isCountAnimShadowTestEnabled: i
					}), this.props.canViewCreatorStats && !j && this.props.isCreatorStatsEnabled && m.a.createElement(Le.a, {
						post: u,
						subreddit: v
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${u.id}`,
						isOverlay: l,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), v && !Object($.h)(v) && m.a.createElement(M.a, {
						awaitAllCommentsRendered: w,
						contentContainerRef: this.state.layoutRef,
						isOverlay: l,
						post: u,
						subredditOrProfile: v
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: o,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isBlockedUserBannerEnabled: l,
						isChatPost: u,
						isCommentsListTruncated: p,
						isEligibleForCommentTruncation: h,
						isLoggedIn: g,
						isOverlay: f,
						isTypingIndicatorsExperimentEnabled: C,
						location: v,
						onOtherDiscussions: _,
						openLoginModal: y,
						openRegisterModal: O,
						origin: E,
						post: j,
						postId: w,
						replyComment: I,
						sendEvent: S,
						sort: L,
						subredditAboutInfo: T,
						subredditOrProfile: F
					} = this.props;
					if (!j) return null;
					const N = this.isCommentPermalink(),
						A = [],
						R = j.isLocked && !s,
						M = !(N || j.isArchived || T && T.userIsBanned || j.authorIsBlocked && l);
					let B = !1;
					if (R) A.push(m.a.createElement(Ae.a, {
						key: "commentThreadBanner",
						subredditOrProfile: F
					}));
					else if (j.isArchived) A.push(m.a.createElement(Ne.a, {
						key: "commentThreadBanner"
					}));
					else if (M && !u && !_)
						if (g) {
							B = C;
							const e = Object(k.a)(b.c.replyToPost, w);
							A.push(m.a.createElement(ye.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								isOverlay: f,
								isTypingIndicatorsExperimentEnabled: C,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: w,
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? P.t(w, r, e, s, o) : P.n(w, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else A.push(m.a.createElement(Oe.a, {
							key: "loggedOutCommentForm",
							location: v,
							openLoginModal: y,
							openRegisterModal: O,
							origin: E
						}));
					if (j.contestMode && A.push(m.a.createElement(Re.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !u && !_ && A.push(m.a.createElement(Pe.b, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: f,
							key: "commentSort",
							location: v,
							postId: w,
							sort: L,
							suggestedSort: j.suggestedSort
						}), m.a.createElement(ot.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: f,
							key: "commentNavigation",
							postId: w
						})), A.push(m.a.createElement(We.a, {
							postId: w
						})), !t || d || u || _)
						if (!e || d || _)
							if (_) A.push(m.a.createElement(pt, {
								commentSort: L,
								key: "otherDiscussions",
								postId: w,
								isOverlay: f,
								postPermalink: j.permalink
							}));
							else if (u) {
						if (F && F.id) {
							const e = I ? Object(k.a)(b.c.replyToComment, I.id) : Object(k.a)(b.c.replyToPost, w),
								s = gt({
									postId: w,
									commentId: o,
									commentsPageKey: r
								});
							A.push(m.a.createElement(je.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: w,
								renderedInOverlay: f,
								subredditId: F.id
							}, ({
								scrollToBottom: t
							}) => g ? m.a.createElement(we.a, {
								key: "chatCommentsForm",
								postId: w,
								replyComment: I,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: S
							}) : m.a.createElement(Oe.a, {
								key: "loggedOutCommentForm",
								className: it.a.ChatLoggedOutForm,
								location: v,
								openLoginModal: y,
								openRegisterModal: O,
								origin: E
							})))
						}
					} else A.push(m.a.createElement("div", {
						className: Object(x.a)(it.a.CommentsPaneWrapper, {
							[it.a.mIsInOverlay]: f
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Se.a, at({}, this.props, {
						shouldTruncateComments: h && p,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: j.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(ke.a, {
						commentId: o,
						commentsPageKey: r,
						postId: w,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: f
					})))), e && d ? A.push(m.a.createElement(Ee.e, {
						key: "commentsErrorState",
						postId: w,
						commentId: o,
						sort: L,
						apiError: e
					})) : !i && t && A.push(m.a.createElement(Ee.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else A.push(m.a.createElement(Ee.e, {
						postId: w,
						commentId: o,
						sort: L,
						apiError: e
					}));
					else this.didRenderLoading = !0, A.push(m.a.createElement(Ee.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					if (B) {
						const e = A.shift();
						A.push(e)
					}
					return m.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, A)
				}
			}
			const Ot = xt(Object(z.b)(_t(Object(ze.c)(yt)))),
				kt = y.a.wrapped(Ie.a, "DetailsPageSidebar", it.a),
				Et = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: o,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: u,
						subredditOrProfile: p
					} = e;
					if (!a && !d) return m.a.createElement(et.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && m.a.createElement(Ie.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (d) return m.a.createElement($e.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: p && m.a.createElement(Ie.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(tt.a, {
						containerRef: o,
						maxWidth: B.i,
						fitPageToContent: u,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: p && m.a.Children.toArray([m.a.createElement(Te.a, {
							key: p.name,
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: h,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object($.h)(p) && m.a.createElement(He.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: h,
							subredditId: p.id
						})]),
						sidebar: p && m.a.createElement(kt, {
							commentsPageKey: s,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object(nt.a)(ft)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.t)(t)
				},
				g = (e, t, s) => {
					const o = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(p.h)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return n()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(o, r, a)
				},
				f = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(u.a)(e, s)
					}
				}),
				x = Object(a.b)(f);

			function C(e) {
				return x(t => {
					const {
						hasSortParam: s,
						sortToUse: o
					} = t.commentsPageSort, n = g(t, s, o), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: n,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: o
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/reselect/es/index.js");
			const n = e => e.dismissedTruncationList,
				r = Object(o.a)((e, {
					subredditOrProfile: t
				}) => t, n, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.K, i.J, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.G
				}), e => e === n.P.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.r
			}) === o.u.Enabled
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.tc
				});
				return !(!t || Object(o.wf)(t))
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(n.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: o.Be
			}) === o.Je.Enabled
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(o.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[n.Xb.Bottom_cell_dismissible]: e,
						[n.Xb.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.Xb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.ob, !0),
				m = c(n.pb, !0),
				u = c(n.qb, !0),
				p = c(n.ob, !1),
				h = c(n.pb, !1),
				b = c(n.qb, !1)
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.sf
					}) === o.Zc
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.tf
					}) === o.Zc
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.rf
					});
					return t === o.kf.UIChangesOnly || t === o.kf.TypingIndicators || t === o.kf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
							experimentName: o.rf
						}),
						s = null == t ? void 0 : t.variant;
					return s === o.kf.TypingIndicators || s === o.kf.IndicatorsPlusCTA
				},
				m = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.rf
					});
					return (null == t ? void 0 : t.variant) === o.kf.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return _
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(o.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const o = Object(i.U)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							i = n && Object(r.H)(e, {
								postId: o
							}) || null,
							a = n && Object(r.H)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				b = [3],
				g = Object(o.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const o = t.slice().sort();
					let n = -1;
					const i = Object(r.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !h(e, s, t, i, o);) s += 1;
							s < i.length && (a.push(s), n = s)
						}
					}), a
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				_ = e => {
					const t = Object(a.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						o = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(n.wf)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				r = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(o.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(n.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.H, a.J, a.K, r.g, (e, t, s, o, n, r, i) => {
				if (!o) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = o.numComments >= 3 && !e || !t;
				return i && a && c && (!n && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				u = Object(o.a)(e => Object(r.f)(e), e => Object(n.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"e6613d03cfc3"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b83ddb418d74"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"f8a400eb97dd"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8d5cc57ee984"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"19b6f388997f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.4f555d68302a43b7699e.js.map