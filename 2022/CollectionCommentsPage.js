// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.029c6957168dd4065000.js
// Retrieved at 12/8/2022, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "AchievementsActions"], {
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

			function o(e) {
				return "[object Function]" === r(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
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

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
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
						if (e.__compiled__[t] = n, "[object Object]" === r(s)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(s.validate) ? o(s.validate) ? n.validate = s.validate : l(t, s) : n.validate = function(e) {
							return function(t, s) {
								var n = t.slice(s);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(s.validate), void(o(s.normalize) ? n.normalize = s.normalize : s.normalize ? l(t, s) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
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
				})).map(i).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function u(e, t) {
				var s = e.__index__,
					n = e.__last_index__,
					r = e.__text_cache__.slice(s, n);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r
			}

			function p(e, t) {
				var s = new u(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function b(e, t) {
				if (!(this instanceof b)) return new b(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, r, o, i, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0
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
				})).reverse(), m(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, m(this), this)
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
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				r = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = r
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
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
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/contentGate.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts");
			const l = 3e4;
			let m;

			function u(e) {
				return t => {
					const s = Object(o.f)().getState(),
						u = Object(o.d)(),
						p = Object(d.a)(s),
						b = Object(c.S)(s),
						h = Object(a.c)(s),
						g = () => {
							Object(a.b)() && (u(i.o({
								over18: !1
							})), m && window.clearInterval(m))
						};
					return Object(n.useEffect)(() => (!b && h.isNewDesignVariant && p && (m = window.setInterval(g, l), g()), () => window.clearInterval(m)), [h.isNewDesignVariant, g, b, p]), r.a.createElement(e, t)
				}
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return _
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				i = s.n(o),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				h = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				g = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				f = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				x = r()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const O = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				y = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				_ = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(r.e)(e),
					i = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${i}`
			}
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, s) {
				let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					r = `collectionCommentsPage--[collection:'${e}']`;
				return t && (r += `--[post:'${t}']`), s && (r += `--[rootComment:'${s}']`), n && (n.sort && n.hasSortParam && (r += `--[sort:'${n.sort}']`), n.context && (r += `--[context:${n.context}]`), n.depth && (r += `--[depth:${n.depth}]`)), r
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
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
			var n = s("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = s("./node_modules/lodash/debounce.js"),
				i = s.n(o),
				a = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(c.ad.Bottom_cell),
						t = Object(m.a)(c.ad.Bottom_cell_dismissible),
						s = Object(m.a)(c.ad.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(c.ad.Bottom_cell_signup_upsell_copy),
						r = Object(m.a)(c.ad.Bottom_cell_surprise_install_copy),
						o = Object(m.a)(c.ad.Bottom_sheet);
					return e || n || r ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(d.a)(), s = u(), o = Object(p.a)(s), l = Object(m.a)(c.ad.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!o && s) {
								const e = document.getElementById(a.e),
									n = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									i = o / 3,
									c = 2 * o;
								n >= (l ? i : c) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, o, s, t, e])
					}();
					return n.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/categories/index.ts"),
				o = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				i = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: r.a
				}
			});
			const h = Object(o.a)(b.c),
				g = Object(o.a)(b.b),
				f = Object(o.a)(b.a),
				x = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const r = t(),
						o = Object(p.h)(r),
						u = Object(p.g)(r);
					if (o || u) return;
					e(h());
					const b = await (e => Object(c.a)(Object(d.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: a.ob.GET
					}))(n());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, n) => {
								const r = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.zg)(e.category_name)
								};
								s.push(r.id), t[r.id] = r
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(g({
							categories: t,
							categoryIds: s
						}))
					} else e(f(b.error))
				}, v = (Object(o.a)(b.g), Object(o.a)(b.f), Object(o.a)(b.e), Object(o.a)(b.d)), O = e => async (t, s) => {
					const n = Object(p.j)(s(), {
						id: e
					});
					t(v({
						categoryId: e,
						rank: n + 1
					})), Object(u.rb)(Object(p.d)(s()))
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const o = Object(n.a)(r.a),
				i = Object(n.a)(r.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const o = Object(n.a)(r.a)
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return y
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return C
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return _
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return j
			})), s.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return E
			})), s.d(t, "getSubredditUserPowerupsFlairs", (function() {
				return k
			})), s.d(t, "getSubredditCurrentUserPowerupsFlairs", (function() {
				return S
			})), s.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return w
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return P
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return I
			})), s.d(t, "setSubredditUserAchievementFlair", (function() {
				return N
			})), s.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/isDefined.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/sentry/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = s("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const l = async (e, t, s, n) => {
				const r = await Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: s,
						isHidden: n
					}
				});
				if (!r.ok || !r.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var m = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/gold/powerups/index.ts"),
				g = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/economics/powerups/constants.ts"),
				v = s("./src/lib/initializeClient/installReducer.ts"),
				O = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(v.a)({
				features: {
					powerups: O.a
				}
			});
			const y = Object(o.a)(x.d),
				C = Object(o.a)(x.f),
				_ = Object(o.a)(x.g),
				j = Object(o.a)(x.e),
				E = Object(o.a)(x.h),
				k = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const {
							subredditInfoById: t
						} = await (async (e, t, s) => {
							const n = await Object(a.a)(e, {
								...c,
								variables: {
									subredditId: t,
									redditorIds: s
								}
							});
							if (!n.ok) throw new Error("Unable to fetch user achievements");
							return n.body.data
						})(o(), e, d);
						await s(y(t))
					} catch (l) {
						i.c.captureException(l)
					}
				}, S = (e, t) => async (s, n) => {
					if (!e) return;
					const r = n(),
						o = Object(f.m)(r);
					if (!o || !Object(h.f)(r, {
							subredditId: e
						})) return;
					const i = !!Object(g.e)(r, {
						subredditId: e,
						userId: o.id
					});
					!t && i || await s(k(e, [o.id]))
				}, w = e => async (t, s) => !!e && (await t(Object(m.c)(e)), !!Object(g.c)(s(), {
					subredditId: e
				})), P = e => async (t, s) => {
					var n;
					const r = s(),
						o = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						i = Object(b.e)(r, {
							commentIds: o
						}),
						a = null === (n = i.find(e => e && e.subredditId)) || void 0 === n ? void 0 : n.subredditId;
					if (!(await t(w(a)))) return;
					const c = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(k(a, Array.from(c)))
				}, I = (e, t) => async (s, n) => {
					if (!t) return;
					if (!(await s(w(e)))) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await s(k(e, Array.from(r)))
				}, N = (e, t) => async (s, n) => {
					const r = n(),
						o = Object(f.m)(r);
					if (!o) return;
					const i = o.id;
					s(T({
						subredditId: e,
						userId: i,
						achievementFlairType: t
					}))
				}, T = e => async (t, s, o) => {
					let {
						gqlContext: a
					} = o;
					const c = s(),
						d = Object(f.m)(c);
					if (!d) return;
					const m = d.id;
					t(C(e));
					const {
						subredditId: b,
						achievementFlairType: h
					} = e, x = [h].filter(r.a), v = Object(g.d)(c, {
						subredditId: b,
						userId: m
					});
					try {
						await l(a(), b, x, v), t(_(e))
					} catch (O) {
						t(j(e)), i.c.captureException(O), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (s, o, a) => {
					let {
						gqlContext: c
					} = a;
					const d = o(),
						m = Object(f.m)(d);
					if (!m) return;
					const b = m.id,
						h = {
							subredditId: e,
							userId: b
						},
						x = [Object(g.g)(d, h)].filter(r.a);
					s(E({
						...h,
						isHidden: t
					}));
					try {
						await l(c(), e, x, t)
					} catch (v) {
						s(E({
							...h,
							isHidden: !t
						})), i.c.captureException(v), s(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const f = [],
				x = (Object(u.a)((e, t) => {
					const s = x(e, t);
					if (!s) return f;
					const n = Object(h.cb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.Y)(e, {
						subredditId: s
					}) : null
				}),
				v = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.G)(e, {
								postId: n
							}) || null,
							i = r && Object(b.G)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				O = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let o = -1;
				const i = Object(b.z)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return O.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !v(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var y = s("./src/reddit/selectors/platform.ts");
			const C = Object(r.a)(i.f),
				_ = Object(r.a)(i.d),
				j = Object(r.a)(i.g),
				E = Object(r.a)(i.c),
				k = Object(r.a)(i.e),
				S = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(g.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(g.R)(o);
					if (i || !d) return;
					e(j());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (w(t)) {
								if (P(t)) {
									e(E({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (I(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(m.d)(i),
										c = Object(l.b)(i),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(C(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(_({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				w = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !P(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				N = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(y.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(g.S)(i);
						return Object(o.i)(() => e(S()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(k({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/linkedPosts/constants.ts");
			const o = Object(n.a)(r.c),
				i = Object(n.a)(r.b),
				a = Object(n.a)(r.a)
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
				c = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const d = Object(n.a)(o.a),
				l = Object(n.a)(o.b),
				m = Object(n.a)(o.c),
				u = (e, t) => async (s, n, o) => {
					let {
						gqlContext: u
					} = o;
					const p = n(),
						b = Object(r.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[b],
						g = !!p.listings.postOrder.api.error[b];
					if (h && !g) return;
					s(m({
						key: b
					}));
					const f = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(u(), t);
					Object(c.a)({
						getState: n,
						onFailure: e => s(d(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: f
					})
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return z
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return K
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return q
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return G
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				c = s("./src/reddit/actions/ads/index.ts"),
				d = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/shortcuts/active.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/constants/postCollection.ts"),
				O = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/endpoints/governance/posts.ts"),
				C = s("./src/config.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function E(e, t, s) {
				const n = `${C.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(j.a)(`${n}/${e}/${t}/${s}`) : t ? Object(j.a)(`${n}/${e}/${t}`) : Object(j.a)(`${n}/${e}`)
			}
			var k = (e, t, s, r, o) => Object(_.a)(e, {
					data: o,
					endpoint: E(t, s, r),
					method: n.ob.GET
				}),
				S = s("./src/reddit/endpoints/page/subredditPage.ts"),
				w = s("./src/reddit/helpers/canonicalUrls.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/models/Post/index.ts"),
				F = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/reddit/selectors/postCollection.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/actions/pages/comments.ts"),
				U = s("./src/reddit/actions/pages/constants.ts"),
				V = s("./src/lib/initializeClient/installReducer.ts"),
				H = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(V.a)({
				pages: {
					comments: H.a
				}
			});
			const z = Object(r.a)(U.d),
				K = Object(r.a)(U.b),
				q = Object(r.a)(U.a),
				G = e => async (t, s) => {
					const {
						collectionId: r,
						partialPostId: o,
						partialCommentId: c,
						subredditName: d = "",
						routePrefix: l
					} = e.params, g = o ? Object(R.z)(o) : "", f = c && Object(L.h)(c), {
						queryParams: y
					} = e, C = s(), {
						instanceId: _
					} = y, j = {
						id: r,
						type: O.b[l]
					}, E = O.b[l] === O.a.PROFILE, {
						hasSortParam: k,
						sortToUse: S
					} = Object(I.a)(C, g), P = ["context", "depth", "limit", x.h].reduce((e, t) => {
						const s = parseInt(y[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: d,
						hasSortParam: k,
						instanceId: _
					});
					k && (P.sort = S), t(u.q(g)), await Promise.all([E ? t(p.d(d)) : Promise.resolve(), t(J(r, g, f, P))]);
					const N = ((e, t) => {
						const s = Object(B.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const r = Object(D.Q)(e, {
								identifier: t
							}),
							o = Object(i.c)(s.title, r.name).toString();
						return Object(a.a)(o, v.c, n.nb)
					})(s(), j) || Object(i.f)();
					t(m.m({
						title: N
					}));
					const F = s().posts.models[g];
					if (F) {
						const n = Object(D.Q)(s(), {
							identifier: F.belongsTo
						});
						if (!F.isSponsored)
							if (F.belongsTo.type === O.a.SUBREDDIT) {
								!!Object(D.X)(C, {
									subredditId: F.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(p.d(n.name));
						const r = s().posts.instances[g] ? e.queryParams.instanceId : F.postId;
						t(Object(b.b)(r))
					}
					E ? Object(w.f)(s(), t, e) : Object(w.g)(s(), t, e), Object(T.w)(s(), !0)
				}, Y = Object(r.a)(U.c), Q = (e, t, s, n) => async (r, i, a) => {
					const c = Object(o.a)(e, t, s, n),
						d = i();
					t = t || Object(B.p)(d, {
						collectionId: e
					});
					const l = await k(a.apiContext(), e, t, s, n);
					if (r(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(P.a)(l.body, t, d);
						r(K({
							key: c,
							collectionId: e,
							meta: d.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const n = d.user.prefs.commentMode;
						r(Y({
							commentMode: n,
							key: c,
							postId: t
						}))
					} else r(q({
						error: l.error,
						key: c,
						...l.body
					}))
				}, J = (e, t, s, n, r) => async (i, a, p) => {
					const b = Object(o.a)(e, t, s, n),
						h = a();
					t = t || Object(B.p)(h, {
						collectionId: e
					});
					const {
						subredditName: x
					} = n, v = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), O = h.pages.comments.api.fullyLoaded[b], C = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || v && !C) {
						if (v && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(M.j)(h) ? F.a.COMMENTS_OVERLAY : F.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(c.b)(e))
							})
						}
						return void(O || r || i(Q(e, t, s, n)))
					}
					const _ = h.user.prefs.commentMode;
					i(z({
						key: b,
						collectionId: e,
						commentMode: _,
						postId: t
					}));
					const j = {
						...n
					}; {
						const e = t && Object(A.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > W.MIN_NUM_COMMENTS_TO_TRUNCATE && (j.truncate = W.NUM_COMMENTS_TRUNCATE)
					}
					let E, w = await Object(N.a)("comments", () => k(p.apiContext(), e, t, s, j));
					if (i(Object(m.n)(w.status)), w.ok && (t = t || w.body.collections[e].primaryPostId)) {
						const e = Object.keys(w.body.posts).filter(e => !!w.body.posts[e].isMeta),
							s = Object(A.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(y.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (E = t.body)
						}
					}
					if (!r) {
						const r = t ? Object(A.G)(a(), {
							postId: t
						}) : null;
						r && w.body.comments && Object.keys(w.body.comments).length < r.numComments ? i(Q(e, t, s, n)) : w.ok && i(Y({
							commentMode: _,
							key: b,
							postId: t
						}));
						const o = Object(M.j)(h) ? F.a.COMMENTS_OVERLAY : F.a.COMMENTS;
						i(Object(c.b)(o))
					}
					if (w.ok) {
						if (!t) return;
						const e = Object(P.a)(w.body, t, h);
						i(Object(W.commentsPageLoaded)({
							commentMode: _,
							key: b,
							postId: t,
							meta: h.meta,
							governance: E,
							shouldCollapse: e,
							...w.body
						})), i(g.g(b));
						const s = Object(A.G)(h, {
							postId: t
						});
						s && i(u.y(s, f.a.CommentsView)), !r && s && "subreddit" === s.belongsTo.type && w.body.comments && await i(Object(d.a)({
							commentIds: Object.keys(w.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else x && (i(Object(l.subredditPending)({
						key: b
					})), w = await Object(N.a)("subreddit", () => Object(S.a)(p.apiContext(), x, {})), i(Object(m.n)(w.status))), i(Object(l.handleSubredditPageApiError)(w, x)), i(q({
						error: w.error,
						key: b,
						...w.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return ft
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return xt
			})), s.d(t, "commentsPagePending", (function() {
				return vt
			})), s.d(t, "commentsPageLoaded", (function() {
				return Ot
			})), s.d(t, "commentsPageFailed", (function() {
				return yt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return Ct
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return jt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return Et
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return kt
			})), s.d(t, "commentsPageRequested", (function() {
				return St
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Pt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return It
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Nt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				a = s("./src/reddit/actions/category/index.ts"),
				c = s("./src/reddit/actions/discoveryUnit.ts"),
				d = s("./src/reddit/actions/pages/subreddit.ts"),
				l = s("./src/reddit/actions/shortcuts/active.ts"),
				m = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				u = s("./src/reddit/actions/subredditSettings.ts"),
				p = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				b = s("./src/reddit/endpoints/devPlatform/index.ts"),
				h = s("./src/reddit/endpoints/governance/posts.ts"),
				g = s("./src/reddit/endpoints/page/commentsPage.ts"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function v(e, t) {
				return Object(f.a)(e, {
					...x,
					variables: t
				})
			}
			var O = s("./src/reddit/endpoints/page/subredditPage.ts"),
				y = s("./src/reddit/endpoints/profile/info.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/pageTitle/index.ts"),
				E = s("./src/reddit/actions/economics/helpers/async.ts"),
				k = s("./src/reddit/actions/externalAccount.ts"),
				S = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				w = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				I = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				T = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/actions/subreddit/notifications.ts"),
				R = s("./src/reddit/actions/subreddit/questions.ts"),
				F = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/constants/adEvents.ts"),
				B = s("./src/reddit/constants/graphql.ts"),
				A = s("./src/reddit/constants/parameters.ts"),
				D = s("./src/reddit/constants/posts.ts"),
				W = s("./src/reddit/helpers/commentList/index.ts"),
				U = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				V = s("./src/reddit/models/Comment/index.ts"),
				H = s("./src/reddit/models/Media/index.ts"),
				z = s("./src/reddit/models/Subreddit/index.ts"),
				K = s("./src/reddit/models/User/index.ts"),
				q = s("./src/reddit/selectors/adsSignals.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				Y = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				J = s("./node_modules/reselect/es/index.js"),
				Z = s("./src/reddit/constants/experiments.ts"),
				X = s("./src/reddit/helpers/chooseVariant/index.ts"),
				$ = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				ee = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				te = s("./src/reddit/selectors/platform.ts"),
				se = s("./src/reddit/selectors/removedPosts.ts");
			const ne = Object(J.a)(te.f, $.a, se.a, se.c, ee.a, se.e, ee.b, (e, t, s, n, r, o, i) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const a = o || i,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || c)
			});
			var re = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				oe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ie = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/subreddit.ts"),
				ce = s("./src/reddit/selectors/user.ts"),
				de = s("./src/lib/makeActionCreator/index.ts"),
				le = s("./src/lib/makeCommentsPageKey/index.ts"),
				me = s("./src/reddit/actions/ads/index.ts"),
				ue = s("./src/reddit/helpers/canonicalUrls.ts"),
				pe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				be = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				he = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ge = s("./src/lib/performanceTimings/index.tsx"),
				fe = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				xe = s("./src/reddit/actions/gold/customEmojis.ts"),
				ve = s("./src/reddit/actions/gold/powerups.ts"),
				Oe = s("./src/lib/makeListingKey/index.ts"),
				ye = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ce = Object(de.a)(ye.b),
				_e = Object(de.a)(ye.a);
			var je = s("./src/reddit/actions/linkedPosts/index.ts"),
				Ee = s("./src/reddit/actions/otherDiscussions/index.ts"),
				ke = s("./src/reddit/actions/subreddit/constants.ts"),
				Se = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var we = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						s({
							altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
							postId: r
						})
					} catch (i) {
						n(i)
					}
				},
				Pe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ne = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Te = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!o || !o.linked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(Pe.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Ie.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(C.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Ne.a)(e)
							}
						}
						s({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: d,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Le = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Fe = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Me = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						options: r,
						postId: o,
						subreddit: i
					} = e;
					try {
						if (!i) return;
						const e = i.elements || i.posts,
							n = t(),
							a = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, n.posts && n.posts.models),
							c = Object(Re.a)(a),
							d = Fe(c),
							l = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: m,
								sort: u,
								subredditName: p
							} = r,
							b = Object(Oe.a)(p, _.bb[u], {
								t: m
							});
						s({
							dist: e.dist,
							key: b,
							meta: n.meta,
							postIds: l,
							posts: d
						})
					} catch (a) {
						n(a)
					}
				},
				Be = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ae = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var De = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!o || !o.nsfwLinked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(Ae.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Ie.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(C.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Ne.a)(e)
							}
						}
						s({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: d,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				We = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ue = Object(de.a)(We.b),
				Ve = Object(de.a)(We.a);
			var He = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const ze = Object(de.a)(He.b),
				Ke = Object(de.a)(He.a),
				qe = Object(de.a)(ke.o),
				Ge = Object(de.a)(ke.n),
				Ye = (Object(de.a)(ke.w), Object(de.a)(ke.v), e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o;
					const {
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: c,
						includePostFeed: d,
						includePostQASchemaEligibilityFlag: l,
						listingBelowExperimentVariant: m,
						postId: u,
						range: p,
						sort: b,
						subredditName: h
					} = e, g = Object(Oe.a)(u, null, {
						isOtherDiscussions: !0
					}), x = s(), v = Object(ie.z)(x, {
						listingKey: g
					}), O = c && (!v || 0 === v.length), y = Object(Oe.a)(h, _.bb[b], {
						t: p
					}), C = Object(ie.z)(x, {
						listingKey: y
					}), j = d && (a || !C || 0 === C.length), E = a, k = i, S = Object(ie.G)(x, {
						postId: u
					}), w = !!S && !!S.media && (Object(H.L)(S.media) || Object(H.G)(S.media)) && !S.media.altText;
					if (!(O || j || E || k || w || l)) return;
					O && t(Object(Ee.d)({
						key: g
					}));
					const P = await ((e, t) => Object(f.a)(e, {
							...Se,
							variables: t
						}))(r(), e),
						I = P.body,
						N = Object(Be.a)(m);
					l && (P.ok ? I.data && I.data.post && t(Ce({
						postId: u,
						isEligibleForQASchema: null !== (o = I.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(_e())), O && Object(Le.a)({
						getState: s,
						onFailure: e => t(Object(Ee.b)(e)),
						onSuccess: e => t(Object(Ee.c)(e)),
						postId: u,
						response: P
					}), j && !E && (P.ok ? I.data && Me({
						getState: s,
						onFailure: e => t(Ge(e)),
						onSuccess: e => t(qe(e)),
						options: e,
						postId: u,
						subreddit: I.data.subreddit
					}) : t(Ge(P.error))), E && !N && P.ok && I.data && Te({
						getState: s,
						onFailure: e => t(Object(je.a)(e)),
						onSuccess: e => t(Object(je.b)(e)),
						postId: u,
						post: I.data.post
					}), k && P.ok && De({
						getState: s,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(ze(e)),
						postId: u,
						post: I.data.post
					}), w && P.ok && I.data && we({
						getState: s,
						onFailure: e => t(Ve(e)),
						onSuccess: e => t(Ue(e)),
						postId: u,
						post: I.data.post
					})
				}),
				Qe = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(C.z)(n),
						{
							sortToUse: o
						} = Object(U.a)(e, r);
					return (!o || o === _.w.CONFIDENCE) && Object(X.c)(e, {
						experimentEligibilitySelector: () => Object(ce.R)(e),
						experimentName: Z.r
					}) === Z.t.Enabled
				};
			var Je = s("./src/reddit/selectors/chatPost.ts"),
				Ze = s("./src/reddit/selectors/seo/index.ts"),
				Xe = s("./src/reddit/actions/pages/constants.ts"),
				$e = s("./src/lib/initializeClient/installReducer.ts"),
				et = s("./src/lib/sentry/index.ts"),
				tt = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				st = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				nt = s("./src/reddit/helpers/locales.ts"),
				rt = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				ot = s("./src/reddit/reducers/pages/comments/index.ts"),
				it = s("./src/reddit/selectors/experiments/chat.ts"),
				at = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				ct = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				dt = s("./src/reddit/selectors/experiments/countrySites.ts"),
				lt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				mt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ut = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				pt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				bt = s("./src/reddit/selectors/i18n/index.ts"),
				ht = s("./src/reddit/selectors/meta.ts"),
				gt = s("./src/reddit/actions/pages/search/index.ts");
			Object($e.a)({
				pages: {
					comments: ot.a
				}
			}), Object($e.a)({
				features: {
					modUserNotes: rt.a
				}
			});
			const ft = 25,
				xt = 100,
				vt = Object(de.a)(Xe.h),
				Ot = Object(de.a)(Xe.f),
				yt = Object(de.a)(Xe.e),
				Ct = Object(de.a)(Xe.i);

			function _t(e) {
				return e && e.ok
			}
			const jt = (e, t, s) => {
					const n = !e,
						r = Object(ie.G)(t, {
							postId: s
						}).belongsTo,
						o = Object(ae.Q)(t, {
							identifier: r
						}),
						i = Object(Ze.c)(t, {
							identifier: r
						}),
						a = !!Object(Be.c)(t),
						c = Object(bt.a)(t),
						d = Object(lt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(z.i)(o) && !Object(Je.d)(t, {
						postId: s
					}) && !!o || !Object(te.j)(t) && Object(Q.e)(t)), e && (l.postQASchema = Object(Q.d)(t)), d && (l.listingBelow = !0), l
				},
				Et = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				kt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				St = e => async (t, s) => {
					var n, c;
					const {
						partialPostId: d,
						partialCommentId: u
					} = e.params, {
						subredditName: b
					} = e.params || "", h = d ? Object(C.z)(d) : "", g = u && Object(V.h)(u), {
						path: f,
						queryParams: x
					} = e, v = Object(w.d)(f), {
						instanceId: O
					} = x, {
						hasSortParam: y,
						sortToUse: E
					} = Object(U.a)(s(), h), S = null === (c = null === (n = Object(te.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === c ? void 0 : c.route.chunk, L = ["context", "depth", "limit", A.h].reduce((e, t) => {
						const s = parseInt(x[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: b,
						hasSortParam: y,
						instanceId: O,
						include_categories: !0
					});
					y && (L.sort = E), L.onOtherDiscussions = v, L.comment_awardings_by_current_user = !0, t(I.q(h)), await t(Pt(h, g, L, E));
					const F = s(),
						M = Object(ie.G)(F, {
							postId: h
						}),
						W = Object(at.a)(F).bucketed && Object(p.b)(e) && Object(p.c)(M);
					if (W) {
						const s = Object(i.e)(r()(e.queryParams, A.D)),
							n = Object(i.b)(h, void 0, s);
						await t(Object(gt.d)({
							key: n,
							options: s,
							subredditName: b,
							postId: h
						}))
					}
					const z = Object(ce.S)(s());
					if (M && "subreddit" === M.belongsTo.type) {
						const e = M.belongsTo.id;
						if (await Promise.all([Object(ge.i)(() => t(Object(ve.e)(e, {
								fullData: !0,
								includeIdentity: z
							})), {
								name: "subredditPowerupsRequested",
								page: S,
								isLoggedIn: z
							}), Object(ge.i)(() => t(Object(fe.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: S,
								isLoggedIn: z
							}), Object(ge.i)(() => t(Object(xe.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: S,
								isLoggedIn: z
							})]), !Object(te.j)(F)) {
							Object(ut.a)(F) && t(Object(R.b)(e))
						}
						Object(oe.i)(F, e) && await t(Object(m.c)(h))
					}
					if (M) {
						const n = ((e, t) => {
								const s = Object(ie.V)(e, {
										postId: t
									}),
									n = Object(ie.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), h),
							r = Object(ae.Q)(s(), {
								identifier: M.belongsTo
							});
						if (r && (e => Z.Ef.Redirect === Object(X.b)(e, {
								experimentEligibilitySelector: ne,
								experimentName: Z.wf
							}))(s())) return void t(Object(o.c)(r.url));
						if ((M.media && M.media.type) === H.o.LIVEVIDEO) {
							const e = `/rpan${M.belongsTo.type===D.a.SUBREDDIT?r.url:"/"}${Object(C.D)(M.id)}`;
							return void t(Object(o.c)(e))
						}
						if (M.belongsTo.type !== D.a.SUBREDDIT || M.isSponsored) {
							if (M.belongsTo.type === D.a.PROFILE) {
								const e = Object(ge.i)(() => t(N.d(r.name)), {
									name: "getProfileInfo",
									page: S,
									isLoggedIn: z
								});
								await e
							}
						} else {
							if (!!!Object(ae.X)(s(), {
									subredditId: M.belongsTo.id
								})) {
								const e = Object(ge.i)(() => t(T.o(r.name)), {
									name: "getSubredditRules",
									page: S,
									isLoggedIn: z
								});
								await e
							}
						}
						const i = jt(!1, s(), h),
							c = v;
						if (Et(c, i)) {
							Object(pe.d)(pe.a.LinkedPosts);
							const e = Object(pe.c)(pe.a.LinkedPosts);
							Object(pe.d)(pe.a.NsfwLinkedPosts);
							const n = Object(pe.c)(pe.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: a,
									sessionStartTime: d
								} = Object(q.a)(s()),
								l = {
									adContext: {
										layout: B.a.Card,
										sourcePostId: h,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: a,
											sessionStartTime: d
										}
									},
									range: _.oc.WEEK.toUpperCase(),
									sort: _.S.TOP,
									subredditName: r.name
								},
								m = {
									postId: h
								},
								u = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Be.c)(s())
								};
							Object(lt.b)(s()) && (u.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const p = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(pt.a)(s())
								},
								b = kt(i);
							Object(ge.i)(() => t(Ye({
								...m,
								...l,
								...u,
								...p,
								...b,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: z,
								page: S
							});
							0
						}
						t(Object(k.p)()), t(P.m({
							title: n
						}));
						const d = s().posts.instances[h] ? e.queryParams.instanceId : M.postId;
						t(Object(l.b)(d)); {
							const e = Object(G.c)(s(), {
								subredditName: r.name
							});
							await Promise.all(e.map(e => t(a.b(e))))
						}
					} else t(P.m({
						title: j.f()
					}));
					const {
						routePrefix: K
					} = e.params;
					W || (D.b[K] === D.a.PROFILE ? Object(ue.f)(s(), t, e) : Object(ue.d)(s(), t, e))
				}, wt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], Pt = function(e, t, s, n) {
					let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, i, a) => {
						var l, m, u, p;
						const f = i(),
							x = Object(le.a)(e, r ? void 0 : t, s),
							{
								subredditName: j
							} = s,
							k = !r && f.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
							w = f.pages.comments.api.fullyLoaded[x],
							N = f.pages.comments.api.error[x],
							T = f.pages.comments.api.pending[x],
							R = !Object(ce.R)(f),
							B = Object(ce.m)(f),
							A = n === _.w.CHAT,
							D = !!f.platform.lastPage,
							U = A && D,
							V = Object(ie.G)(f, {
								postId: e
							}),
							H = Object(it.e)(f),
							z = r || H && (null == V ? void 0 : V.discussionType) === C.b.Chat;
						if ((T || k && !N) && !U) {
							if (k && !f.sidebarPromotedPosts.firstFetch) {
								const e = Object(te.j)(f) ? he.a.COMMENTS_OVERLAY : he.a.COMMENTS;
								window.addEventListener("load", () => {
									o(Object(me.b)(e))
								})
							}
							if (!w) {
								const n = !z || t ? s : {
									...s,
									depth: 1
								};
								o(Nt(e, t, n))
							}
							return
						}
						o(c.g());
						const q = f.user.prefs.commentMode;
						o(vt({
							key: x,
							postId: e,
							commentMode: q
						}));
						const G = {
							...s,
							...A ? {
								sort: _.w.LIVE
							} : R ? {
								sort: s.sort,
								depth: 2
							} : {
								sort: s.sort
							}
						}; {
							const t = Object(ie.G)(i(), {
								postId: e
							});
							t && t.numComments && t.numComments > xt && (G.truncate = ft)
						}
						const Q = null === (m = null === (l = Object(te.b)(f)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === m ? void 0 : m.route.chunk,
							J = Object(ge.i)(() => Object(g.a)(a.apiContext(), e, t, G, Object(Y.a)(i()), Qe(i())), {
								name: "fetchCommentsPage",
								isLoggedIn: !R,
								page: Q
							}),
							Z = !R && B && Object(ge.i)(() => Object(y.d)(a.gqlContext(), Object(K.e)(B)), {
								name: "fetchProfileKarma",
								isLoggedIn: !R,
								page: Q
							}) || null,
							X = Object(ct.c)(f),
							$ = Object(ge.i)(() => v(a.gqlContext(), {
								postId: e,
								includeSubredditRankings: X
							}), {
								name: "fetchCommentsPageExtra",
								isLoggedIn: !R,
								page: Q
							}),
							ee = j && Object(mt.a)(f) ? Object(b.a)(a.gqlContext(), {
								subredditName: j
							}) : null;
						let se, ne, re, ae, de;
						if ([se, ne, re, ae] = await Promise.all([J, Z, $, ee]), o(Object(P.n)(se.status)), _t(re) && "SubredditPost" === (null === (u = re.body.data.postInfoById) || void 0 === u ? void 0 : u.__typename)) {
							const e = re.body.data.postInfoById.subreddit.name;
							Object(ue.c)(i(), o, e)
						}
						if (se.ok) {
							try {
								se.body.posts = await Object(tt.a)(a.apiContext(), se.body.posts, f)
							} catch (pe) {
								et.c.captureException(pe)
							}
							const t = Object.keys(se.body.posts).filter(e => !!se.body.posts[e].isMeta),
								s = se.body.posts[e];
							if (Object(ue.b)(i(), o, s.belongsTo.type), t.length) {
								const e = Object(ge.i)(() => Object(h.a)(a.apiContext(), s.belongsTo.id, t), {
										name: "getGovernanceData",
										page: Q,
										isLoggedIn: !R
									}),
									n = await e;
								n.ok && (de = n.body)
							}
							if (_t(ne)) {
								const {
									data: e
								} = ne.body, t = {
									karma: {
										...y.a
									}
								};
								if (Object(y.e)(e.redditorInfoByName)) {
									const s = e.redditorInfoByName.karma;
									t.karma = {
										...t.karma,
										...s
									}
								}
								se.body && se.body.account && Object.assign(se.body.account, t)
							}
							if (_t(re)) {
								const {
									data: t
								} = re.body;
								if (t.postInfoById && wt.includes(t.postInfoById.__typename) && (se.body.posts[e] = {
										...se.body.posts[e],
										...t.postInfoById,
										mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (p = t.postInfoById.mediaStatus) || void 0 === p ? void 0 : p.status : null
									}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
									const e = t.postInfoById.subreddit.detectedLanguage;
									Object(ht.d)(f) && e && Object(dt.f)(f) && await Object(nt.a)(e, o);
									const {
										id: s,
										isEligibleForContentBlocking: n,
										allowedMediaInComments: r,
										directoryRankings: i
									} = t.postInfoById.subreddit;
									o(Object(L.c)({
										subredditAboutInfo: {
											[s]: {
												isEligibleForContentBlocking: n,
												allowedMediaInComments: r,
												directoryRankings: i
											}
										}
									}))
								}
							}
							const n = Object(W.a)(se.body, e, f),
								{
									postMeta: r
								} = se.body;
							se.body.posts[e] = {
								...se.body.posts[e],
								isRobotIndexable: Object(st.a)(r, e)
							}, ae && se.body.subreddits[s.belongsTo.id] && (se.body.subreddits[s.belongsTo.id] = {
								...se.body.subreddits[s.belongsTo.id],
								devPlatformMetadata: ae
							}), o(Ot({
								key: x,
								postId: e,
								meta: f.meta,
								governance: de,
								shouldCollapse: n,
								...se.body
							}))
						} {
							const n = Object(ie.G)(i(), {
								postId: e
							});
							n && se.body.comments && Object.keys(se.body.comments).length < n.numComments ? o(Nt(e, t, s)) : se.ok && o(It({
								key: x
							}));
							const r = Object(te.j)(f) ? he.a.COMMENTS_OVERLAY : he.a.COMMENTS;
							o(Object(me.b)(r))
						}
						if (se.ok) {
							o(F.g(x));
							const t = Object(ie.G)(i(), {
									postId: e
								}),
								s = Object.keys(se.body.comments);
							if (o(I.y(t, M.a.CommentsView)), Object(oe.h)(i(), {
									subredditId: t.belongsTo.id
								}) && o(Object(S.a)({
									commentIds: s,
									postIds: [e]
								})), t && "subreddit" === t.belongsTo.type && se.body.comments) {
								const e = Object(ge.i)(() => o(Object(E.a)({
									commentIds: s,
									postIds: [t.id],
									subredditId: t.belongsTo.id
								})), {
									name: "fetchAllEconomicsData",
									page: Q,
									isLoggedIn: !R
								});
								await e
							}
						} else {
							let e;
							j && (o(Object(d.subredditPending)({
								key: x
							})), e = await Object(be.a)("subreddit", () => Object(O.a)(a.apiContext(), j, {})), o(Object(P.n)(e.status)), o(Object(d.handleSubredditPageApiError)(e, j))), o(yt({
								error: se.error,
								key: x,
								...e ? e.body : se.body
							}))
						}
					}
				}, It = Object(de.a)(Xe.g), Nt = (e, t, s) => async (n, r, o) => {
					var i, a;
					const c = Object(le.a)(e, t, s),
						d = r(),
						l = Object(ce.S)(d),
						m = Object(ce.m)(d),
						p = null === (a = null === (i = Object(te.b)(r())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						b = Object(ie.G)(d, {
							postId: e
						}),
						h = Object(it.e)(d),
						f = "CHAT" === (null == b ? void 0 : b.discussionType) && h && !t,
						x = Object(g.a)(o.apiContext(), e, t, f ? {
							...s,
							depth: 1
						} : s, Object(Y.a)(d), Qe(d)),
						O = l && m && Object(y.d)(o.gqlContext(), Object(K.e)(m)) || null,
						C = Object(ct.c)(d),
						_ = Object(ge.i)(() => v(o.gqlContext(), {
							postId: e,
							includeSubredditRankings: C
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: p
						}),
						[j, k, S] = await Promise.all([x, O, _]);
					if (j.ok) {
						if (_t(k)) {
							const {
								data: e
							} = k.body, t = {
								karma: {
									...y.a
								}
							};
							if (Object(y.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							j.body && j.body.account && Object.assign(j.body.account, t)
						}
						if (_t(S)) {
							const {
								data: t
							} = S.body;
							if (j.body.posts[e] = {
									...j.body.posts[e],
									...t.postInfoById
								}, t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const {
									id: e,
									directoryRankings: s
								} = t.postInfoById.subreddit;
								n(Object(L.c)({
									subredditAboutInfo: {
										[e]: {
											directoryRankings: s
										}
									}
								}))
							}
						}
						const t = Object(W.a)(j.body, e, d);
						n(Ot({
							key: c,
							postId: e,
							meta: d.meta,
							shouldCollapse: t,
							...j.body
						})), n(It({
							key: c
						}));
						const s = r().posts.models[e],
							o = s && Object(ie.V)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(re.a)(d, {
							subredditId: o.id
						}) && n(Object(u.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && j.body.comments && await n(Object(E.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(yt({
						error: j.error,
						key: c,
						...j.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const o = Object(n.a)(r.a),
				i = Object(n.a)(r.b)
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/structuredStyles/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/blade.ts"),
				d = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(r.a)(i.B),
				g = Object(r.a)(i.C),
				f = Object(r.a)(i.A),
				x = (e, t, s) => async (n, r, o) => {
					const i = Object(p.C)(r(), {
						subredditName: e
					});
					if (i) return O(i.id, t, s)(n, r, o)
				}, v = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), O = (e, t, s) => async (r, i, p) => {
					const x = await Object(l.e)(t);
					r(h());
					const O = i();
					try {
						await Object(o.g)("communityIcon", x, e)(r, i, p)
					} catch (C) {
						return Object(b.a)(Object(d.c)(O, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: m.b.Error,
							text: v()
						})), void r(f())
					}
					const y = Object(u.c)(i(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(O, "image is null")), r(Object(a.f)({
						kind: m.b.Error,
						text: v()
					})), void r(f());
					await Object(o.k)(e, {
						communityIcon: y
					}, c.b.idCard, s)(r, i, p), r(Object(a.f)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return L
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				c = s("./src/redditGQL/operations/MutedSubreddits.json"),
				d = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(i.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const f = e => Object(o.f)({
					id: e,
					kind: p.b.Error,
					duration: o.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				v = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var O = s("./src/reddit/endpoints/subreddit/about.ts");
			const y = Object(r.a)(b.i),
				C = Object(r.a)(b.h),
				_ = Object(r.a)(b.G),
				j = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				E = Object(r.a)(b.f),
				k = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						var a, c;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(x(s, S({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						var a, c;
						const d = await u(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(v(s, k({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						var a, c;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(s, P({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						var a, c;
						const d = await u(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(s, w({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: c
						} = a;
						var l, m;
						const u = Object(h.a)(s),
							b = await ((e, t, s) => Object(i.a)(e, {
								...d,
								variables: {
									input: {
										...s,
										subredditId: t
									}
								}
							}))(c(), t, u);
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(_({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(o.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = await (e => Object(i.a)(e, c))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(y({
							nodes: s
						}))
					} else e(C()), e(Object(o.f)({
						duration: o.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, T = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
						var i, a;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (a = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(j(t)), e(v(s));
						else {
							e(f(`error-unmuting-${t}`))
						}
					}
				}, L = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						var a, c;
						const d = s(),
							l = Object(g.t)(d).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: s,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const u = await Object(O.a)(i(), t, !0),
							{
								data: b
							} = u.body,
							h = b && b.subreddit;
						if (!u.ok || null === h) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const v = h.id,
							y = await m(i(), v);
						if (y.ok && y.body && (null === (c = null === (a = y.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) e(E([h])), e(x(h.name));
						else {
							e(f(`error-muting-${v}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(a.z),
				p = Object(r.a)(a.y),
				b = Object(r.a)(a.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				g = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, l, f) => {
					let {
						gqlContext: x
					} = f;
					var v, O, y;
					e(p());
					const C = h(s),
						_ = await Object(d.b)(x(), t, C);
					if ((null === (O = null === (v = _.error) || void 0 === v ? void 0 : v.fields) || void 0 === O ? void 0 : O.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(_.body) && (null === (y = _.body.data.updateSubredditNotificationSettings.errors) || void 0 === y ? void 0 : y.length)) return e(b()), e(Object(c.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					_.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(a ? Object(c.f)(Object(c.e)(g(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(c.f)(Object(c.e)(g(s), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.m.less": function(e, t, s) {
			e.exports = {
				AdSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				adSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				Content: "dND6Q1_345dpzB_NMYBC8",
				content: "dND6Q1_345dpzB_NMYBC8",
				ExtraLarge: "uh_X09jq4S7lMKSY8ZDii",
				extraLarge: "uh_X09jq4S7lMKSY8ZDii",
				Large: "_1l7lMJqbov2T29ncxpJBlP",
				large: "_1l7lMJqbov2T29ncxpJBlP"
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const h = e => {
				let t;
				switch (e) {
					case u.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case u.b.Large:
						t = b.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const u = Object(o.d)();
				if (!Object(o.e)(m.a) || !Object(a.C)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return r.a.createElement("div", {
					className: Object(i.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(c.y)(t, l.a.Click))
					}
				}, r.a.createElement(d.b, {
					className: Object(i.a)(b.a.Content, h(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/timeAgo/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			var p = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/pages/Recap/Components/BananaPill/index.m.less"),
				x = s.n(f);
			var v = e => {
					let {
						ref: t,
						onMouseEnter: s,
						onSetTimer: i,
						onBananaPillClick: a,
						setAltTextWidth: c,
						setTimerByObserver: d
					} = e;
					const l = Object(n.useCallback)(e => {
							if (e) {
								const t = e.clientWidth;
								c(t + 32)
							}
						}, []),
						m = Object(o.e)(g.S),
						u = encodeURIComponent(b.a.redditUrl + "/r/recap"),
						f = b.a.accountManagerOrigin,
						v = m ? "/r/recap" : `${f}/login/?dest=${u}`;
					return r.a.createElement("a", {
						ref: t,
						href: v,
						className: x.a.bananaPill,
						onMouseEnter: s,
						onMouseLeave: i,
						onClick: a
					}, r.a.createElement("img", {
						className: x.a.icon,
						src: `${b.a.assetPath}/img/recap/banana_pill.png`,
						alt: h.fbt._("banana", null, {
							hk: "1fs9mn"
						})
					}), r.a.createElement("span", {
						className: x.a.text
					}, "+1"), h.fbt._("{=Back to Top}", [h.fbt._param("=Back to Top", r.a.createElement("span", {
						ref: l,
						className: x.a.altText
					}, h.fbt._("Back to Top", null, {
						hk: "4BTAZ0"
					})))], {
						hk: "4Foziy"
					}), r.a.createElement(p.a, {
						onChange: d,
						rootMargin: "0px 0px 0px 0px",
						threshold: .5
					}, r.a.createElement("div", null)))
				},
				O = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/helpers/chooseVariant/index.ts");
			const C = e => {
				return Object(y.c)(e, {
					experimentEligibilitySelector: y.a,
					experimentName: O.vf
				}) === O.Qd
			};
			var _ = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				j = s("./src/reddit/selectors/recapGame.ts"),
				E = s("./src/reddit/components/BackToTop/index.m.less"),
				k = s.n(E);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: d
				} = e;
				const p = Object(c.b)(),
					b = Object(n.useRef)(null),
					[h, f] = Object(n.useState)(!1),
					[x, O] = Object(n.useState)(),
					[y, E] = Object(n.useState)(),
					[I, N] = Object(n.useState)(0),
					T = Object(o.e)(g.m),
					L = Object(o.e)(C),
					R = Object(o.e)(_.a),
					F = Object(o.e)(j.a),
					M = T ? T.id : "anonymous",
					B = "on" === F.recapGameState,
					A = () => {
						h && E(setTimeout(() => {
							b.current && (b.current.classList.add(k.a.transform), b.current.style.width = `${I}px`)
						}, 4750)), h && O(setTimeout(() => {
							f(!1), Object(m.Ub)(M, !1)
						}, 5e3))
					};
				return Object(n.useEffect)(() => {
					B || setTimeout(() => {
						const e = Object(m.O)(M);
						e ? Object(a.e)(e.lastSeenTime) >= 24 && e.dropSkip === m.a.NONE ? f(!0) : Date.now() >= new Date(2022, 10, 16).getTime() && e.dropSkip !== m.a.THIRD && f(!0) : f(!0)
					})
				}, [M, B]), r.a.createElement("div", {
					className: Object(i.a)(t, k.a.container),
					style: d
				}, h && L && !s && !B ? r.a.createElement(v, {
					ref: b,
					onBananaPillClick: () => {
						x && clearTimeout(x), y && clearTimeout(y), f(!1), Object(m.Ub)(M, !0), p((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...u.o(e)
						}))())
					},
					onMouseEnter: () => {
						x && clearTimeout(x), y && clearTimeout(y), b.current && (b.current.classList.remove(k.a.transform), b.current.style.width = "65px")
					},
					onSetTimer: A,
					setAltTextWidth: N,
					setTimerByObserver: e => {
						e.isIntersecting && (A(), p((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...u.o(e)
						}))()))
					}
				}) : r.a.createElement(l.a, S({
					className: k.a.button,
					onClick: () => P(s)
				}, R && {
					priority: l.c.Secondary,
					rplStyle: !0
				}), w._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				p = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(g),
				x = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return o.a.createElement("div", {
						className: Object(m.a)(p.a.spacer, {
							[p.a.isCommentBoxDesign]: t,
							[p.a.isTopLevelComment]: s
						})
					}, n)
				},
				v = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				O = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				y = e => o.a.createElement(x, e, e.isCommentBoxDesignEnabled ? o.a.createElement(O, null) : o.a.createElement(v, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = f(y),
				_ = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("PostCreation~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~93a1f1ba"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				j = e => o.a.createElement(_, b({}, e, {
					fallback: o.a.createElement(C, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = j
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: c,
					openRegisterModal: m,
					origin: b,
					sendEvent: h
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, u.a.Wrapper, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, r.a.createElement("span", {
					className: Object(o.a)(u.a.Copy, {
						[u.a.LiveStreamingCopy]: s
					})
				}, p._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), r.a.createElement("div", {
					className: u.a.CTAButtons
				}, r.a.createElement(d.t, {
					className: u.a.LoginLink,
					kind: d.b.ExternalLink,
					priority: d.c.Secondary,
					href: Object(a.a)(n, b, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), c(), h(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Log In", null, {
					hk: "ZR3pC"
				})), r.a.createElement(d.t, {
					className: Object(o.a)(u.a.SignupLink, {
						[u.a.LiveStreamingSignupLink]: s
					}),
					kind: d.b.ExternalLink,
					priority: d.c.Primary,
					href: Object(a.a)(n, b, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), m(), h(Object(l.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Sign Up", null, {
					hk: "48wH4o"
				}))))
			})
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
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/components/LottieAnimation/index.tsx"),
				d = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(d);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(o.useRef)(null),
					[s, d] = Object(o.useState)(!1),
					u = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && d(!1), t <= .001 && d(!0)
						})
					}, []);
				Object(a.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(c.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
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
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				V1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				v1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
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
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/models/PostDraft/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				g = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				f = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				x = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O, y, C = s("./node_modules/lodash/defer.js"),
				_ = s.n(C),
				j = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/reportFlow/index.ts"),
				I = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				T = s("./src/reddit/helpers/trackers/lightbox.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				B = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				V = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				H = s.n(V);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(O || (O = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(y || (y = {}));
			const z = (e, t) => {
					const s = H.a[t],
						n = H.a[e];
					return Object(d.a)(s, n)
				},
				K = e => Object(d.a)(H.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[H.a.isInOverlay]: e.isInOverlay,
					[H.a.isModModeEnabled]: e.isModModeEnabled,
					[H.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				G = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Q = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				J = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				X = s("./src/reddit/components/OverflowMenu/index.tsx"),
				$ = s("./src/reddit/components/ReportFlow/index.tsx"),
				ee = s("./src/reddit/components/ReportFlow/new.tsx"),
				te = s("./src/reddit/components/ShareMenu/index.tsx"),
				se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/modTools.ts"),
				ie = s("./src/reddit/layout/row/Inline/index.tsx"),
				ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ce = s("./src/reddit/icons/fonts/index.tsx"),
				de = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				le = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				be = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				he = s("./src/devPlatform/constants.ts"),
				ge = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				fe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				xe = s.n(fe);
			const ve = j.a.wrapped(de.a, "CommentIcon", xe.a),
				Oe = j.a.wrapped(pe.a, "Report", xe.a),
				ye = j.a.wrapped(me.a, "IgnoreReport", xe.a),
				Ce = j.a.wrapped(J.a, "ModActionsMenu", xe.a),
				_e = j.a.div("OverflowMenuSpacer", xe.a),
				je = j.a.wrapped(X.a, "DropdownRow", xe.a),
				Ee = j.a.wrapped(ie.a, "Flatlist", xe.a),
				ke = j.a.button("Button", xe.a),
				Se = j.a.wrapped(q.a, "ModToolsFlatlist", xe.a),
				we = j.a.wrapped(ne.a, "ViewReportsDropdown", xe.a),
				Pe = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Ne = e => `${e}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Le = Object(a.c)({
					claimedFreeAward: B.b,
					currentUser: W.m,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.a)(e) === Pe(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Ie(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Te(s.id))(e)
					},
					isLoggedIn: W.S,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.A)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(D.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: M.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(A.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isDevPlatformEnabled: e => Object(ge.a)(e)
				});
			class Re extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(T.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(oe.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(oe.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(oe.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(I.d)(I.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(oe.e)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(oe.b)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(oe.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? L.a.UNFOLLOWED : L.a.FOLLOWED), t(n ? Object(oe.g)("follow", s.id) : Object(oe.b)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(oe.c)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: $.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement($.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: $.b,
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
						commentPermalink: i,
						deleteComment: a,
						depth: c,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: g,
						onToggleReportsDropdown: f,
						moderatorPermissions: x,
						modModeEnabled: v,
						postIsArchived: C,
						postAuthorIsBlocked: j,
						postIsLocked: E,
						renderedInOverlay: k,
						sendEvent: S,
						subreddit: w,
						subredditAboutInfo: P,
						toggleDeleteCommentModal: I,
						toggleSendReplies: T,
						trackCommentClick: R,
						isPostUnrepliable: F,
						isDevPlatformEnabled: M
					} = this.props, B = Object(N.a)(x), A = !!s && s.displayText === e.author, D = !!s && s.isEmployee, W = e.unrepliableReason, V = !j && !Object(L.g)(e) && !F && !W && !F && !(P && P.userIsBanned) && (E || C || B && p || e.isLocked ? B && p : p || m), H = Object(Z.a)(e), q = B && A && !e.bannedBy, J = A && D && !e.bannedBy, $ = q || J, ee = !Object(L.g)(e) && s && e.isGildable && !F && !(W && "[deleted]" === e.author), se = !C && !W, ne = [];
					V && ne.push(o.a.createElement(ke, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), _()(() => R("reply", e.id)())
						}
					}, o.a.createElement(ve, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), ee && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ae.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ne.push(o.a.createElement(te.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == w ? void 0 : w.type
					}, o.a.createElement(ke, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), A || ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(pe.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => n.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => n.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), A && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), se && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: "notification",
							isFilled: u
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: u ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const ie = ne.map(e => o.a.isValidElement(e) ? e : o.a.createElement(ke, {
							className: z(e.breakpointGroup, O.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						de = ne.map(e => o.a.isValidElement(e) ? null : o.a.createElement(je, {
							className: z(e.breakpointGroup, O.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: xe.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Ee, {
						className: Object(d.a)(K({
							depth: c,
							isInOverlay: k,
							isModModeEnabled: B && v || M,
							isFollowCommentEnabled: se
						}), t)
					}, ie, o.a.createElement(_e, {
						className: A ? void 0 : z(y.LoggedInUser, O.HideIfVWLarger)
					}, o.a.createElement(X.b, {
						className: xe.a.overflowMenu,
						disabled: b,
						dropdownId: Ne(e.id),
						onClick: () => S(Object(oe.b)("comment_overflow_menu", e.id))
					}, de, A && o.a.createElement(o.a.Fragment, null, o.a.createElement(je, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: xe.a.dropdownRowText
					}, o.a.createElement(ce.a, {
						name: "delete"
					})), o.a.createElement(re.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(be.a, {
						contextType: he.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Y.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: n.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: n.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: n.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: a,
						toggleModal: I,
						trackClick: () => {},
						withOverlay: !0
					}), B && o.a.createElement(o.a.Fragment, null, v && o.a.createElement(Se, {
						className: z(y.Moderator, O.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: A
					}), o.a.createElement(Ce, {
						className: v ? z(y.Moderator, O.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => S(Object(oe.b)("comment_mod_action_menu", e.id))
					}, o.a.createElement(ue.a, null), o.a.createElement(U.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Z.c)(e) && !v && o.a.createElement(G.a, {
						text: `${H}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Te(e.id)
					}, o.a.createElement(we, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(ye, null) : o.a.createElement(Oe, null)), $ && o.a.createElement(G.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(le.a, null), o.a.createElement(Q.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: D,
						isUserMod: B,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Fe = Object(i.b)(Le, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(w.i)(Pe(s.id))), e(Object(E.h)({
								tooltipId: Ne(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.e)({
								commentId: s.id,
								draftKey: Object(l.a)(c.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.s)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(p.u)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(u.p)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(S.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(P.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(E.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(E.h)({
							tooltipId: Te(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(w.i)(Pe(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(se.c)(Re)),
				Me = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Be = s.n(Me);
			var Ae = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Be.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				De = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				We = s.n(De);
			var Ue = o.a.memo(e => o.a.createElement("div", {
					className: We.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ve = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				He = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ze = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ke = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ge = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Qe = s("./src/reddit/components/ModModeReports/index.tsx"),
				Je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ze = s("./src/reddit/components/RichTextJson/index.tsx"),
				Xe = s("./src/reddit/components/UserIcon/index.tsx"),
				$e = s("./src/reddit/components/UserIcon/constants.ts"),
				et = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				tt = s("./src/reddit/helpers/author.ts"),
				st = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				nt = s("./src/reddit/constants/componentTestIds.ts"),
				rt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ot = s("./src/reddit/contexts/Visibility.tsx"),
				it = s("./src/reddit/controls/ErrorText/index.tsx"),
				at = s("./src/reddit/controls/InternalLink/index.tsx"),
				ct = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				dt = s("./src/reddit/helpers/flair.ts"),
				lt = s("./src/reddit/models/Subreddit/index.ts"),
				mt = s("./src/reddit/models/User/index.ts"),
				ut = s("./src/reddit/models/Vote/index.ts"),
				pt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts"),
				ht = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				gt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				ft = s("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = s("./src/reddit/selectors/poll/index.ts"),
				vt = s("./src/reddit/selectors/userPrefs.ts"),
				Ot = s("./src/reddit/selectors/moderatingComments.ts"),
				yt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Ct = s.n(yt),
				_t = s("./src/config.ts"),
				jt = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				Et = s("./src/reddit/components/SubredditIcon/index.tsx"),
				kt = s("./src/reddit/helpers/trackers/comment.ts");

			function St() {
				return (St = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = 300,
				Pt = j.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", v({}, s, {
						className: Object(d.a)(t, x.a.expandButton)
					}), o.a.createElement(g.a, {
						className: x.a.expandIcon
					}))
				}), "ExpandButton", Ct.a),
				It = j.a.wrapped(Fe, "FlatList", Ct.a),
				Nt = j.a.wrapped(it.b, "ErrorText", Ct.a),
				Tt = j.a.wrapped(Ke.a, "HorizontalVotes", Ct.a),
				Lt = j.a.div("ActionBar", Ct.a),
				Rt = j.a.wrapped(He.a, "TopMeta", Ct.a),
				Ft = j.a.div("CommentContentWrapper", Ct.a),
				Mt = j.a.wrapped(qe.b, "AuthorHovercard", Ct.a),
				Bt = Object(rt.v)(),
				At = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(bt.c)(e, t),
					currentProfileModPermissions: rt.i,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: Ot.b,
					collapsedBecauseCrowdControl: Ot.a,
					currentUser: W.m,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: vt.d,
					isAdmin: W.M,
					isEditing: F.z,
					isLoggedIn: W.S,
					isPendingDeletion: F.E,
					isPresenceConsumptionExpEnabled: gt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(bt.c)(e, t);
						return s ? Object(ft.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: xt.f,
					modModeEnabled: rt.W,
					errorMsgs: F.I,
					replyFormOpen: F.L,
					subreddit: rt.s,
					subredditType: F.O,
					isOnlineConsumptionLoadTest: gt.a,
					isOnlineUserPref: W.X,
					userIsBanned: (e, t) => {
						const s = Object(bt.c)(e, t);
						return !!s && Object(D.jb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ht.b,
					isBlockingInterstitialV2Enabled: ht.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: r,
						trackCommentClick: o
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === ut.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Dt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Wt = e => o.a.createElement("div", e, e.children),
				Ut = e => o.a.createElement(o.a.Fragment, null, e.children),
				Vt = Bt(At(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: g,
						depth: f,
						errorMsgs: x,
						flair: v,
						flatlist: O,
						focused: y,
						hasAwardGradient: C,
						highlightAnimationDisabled: _,
						highlightTreatment: j,
						index: E,
						isActive: k,
						isAdmin: S,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: P,
						isBlockingInterstitialV2Enabled: I,
						isEditing: T,
						isFirstInList: R,
						isHighlighted: F,
						isLoggedIn: M,
						isOnlineConsumptionLoadTest: B,
						isOnlineUserPref: A,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: W,
						moderatorPermissions: U,
						modModeEnabled: V,
						noSpacing: H = !1,
						onCommentAuthorClick: z,
						onCommentTimestampClick: K,
						onCollapseClick: q,
						onIgnoreReports: G,
						onLineMouseOver: Y,
						onPresenceIndicatorInViewport: Q,
						onVoteClick: J,
						postId: X,
						prediction: $,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						subreddit: ie,
						subredditType: ae,
						trackCommentClick: ce,
						userIconSmall: de,
						userIsBanned: le,
						onClickRevealSpoilerText: me,
						onMediaReload: ue
					} = e, pe = m.isDeleted, be = !T && !pe && !!x && x.length > 0, he = Object(l.a)(c.c.edit, m.id), ge = Object(l.a)(c.c.replyToComment, m.id), fe = Object(N.a)(U), xe = Object(Ye.a)(m), ve = Object(Z.c)(m), Oe = m.authorIsContractor && ae === lt.g.EmployeesOnly, ye = m.isLocked, Ce = fe && V, _e = !T && !pe && (M || w), je = w && !m.unrepliableReason, Ee = !!g && Object(mt.e)(g) === m.author, [ke, Se] = Object(r.useState)(null), [we, Pe] = Object(r.useState)(null), Ie = Object(r.useRef)(null), Ne = Object(L.f)(m) || Object(L.g)(m), Te = Ne ? Wt : at.default, Le = Object(L.f)(m) ? Ut : Mt, Re = Object(se.b)();
					Object(r.useEffect)(() => {
						if (!T && !pe && (C && Se(o.a.createElement(Ue, null)), null !== j)) {
							if (j.glowHexColor) {
								const e = j.glowHexColor;
								Se(o.a.createElement(Ae, {
									hexColor: e
								}))
							}
							if (j.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = j.effectHighlight;
								Pe(o.a.createElement(Ve.b, {
									prefersReducedAnimation: _,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [T, pe, C, _, j]);
					const Fe = Object(r.useCallback)(() => {
							Re(Object(kt.c)(m.id))
						}, [Re, m.id]),
						Me = Object(ot.b)();
					(P || I) && Me && E >= ht.a - 1 && oe();
					const Be = !pe && !Object(L.f)(m) && (!le || le && Ee) && !Object(L.g)(m) && M,
						De = Object(r.useCallback)(() => {
							Be && W && !Ee && Q && Q(m.id)
						}, [m.id, Q, Be, W, Ee]),
						We = Object(st.a)(m),
						He = !!g && Object(mt.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Ke = Object(jt.c)(He),
						qe = Ke || Object(jt.b)(He);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, Ct.a.CommentWrapper, {
							[Ct.a.highlightComment]: F,
							[Ct.a.deleted]: pe,
							[Ct.a.focused]: y,
							[Ct.a.redesign]: w,
							[Ct.a.topLevel]: !f,
							[Ct.a.noSpacing]: H
						})
					}, ke, we, !T && !pe && R && o.a.createElement("div", {
						className: Ct.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${_t.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Pt, {
						className: Object(d.a)(m.id, {
							[Ct.a.hidden]: !i,
							[Ct.a.visible]: i
						}),
						onClick: () => {
							s(), q(), ce("collapse", m.id)()
						},
						onMouseOver: () => Y(m.id),
						onMouseOut: s
					}), Object(tt.a)(m.author) ? ie ? o.a.createElement(Et.b, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						subredditOrProfile: ie,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Le, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: Ct.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(L.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? Je.f.Lightbox : void 0
					}, o.a.createElement(Te, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						"data-testid": Ne ? void 0 : "comment_author_icon",
						onClick: Ne ? void 0 : z,
						to: `/user/${m.author}/`
					}, Me ? o.a.createElement(Xe.a, {
						isNft: qe,
						className: Object(d.a)(Ct.a.UserIcon, {
							[Ct.a.v1NftTreatment]: Ke
						}),
						iconUrl: He,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: $e.a,
						userName: m.author,
						isHighlighted: F,
						shouldShowPresenceIndicator: Be && W,
						onPresenceIndicatorInViewport: De,
						isCommentAuthorBlocked: Object(L.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: Ee,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Be && B,
						authorId: m.authorId
					}) : o.a.createElement("div", {
						className: Ct.a.UserIcon
					}))), o.a.createElement(Ft, {
						className: Object(d.a)({
							[Ct.a.isActive]: k,
							[Ct.a.isCollapsed]: i,
							[Ct.a.isLocked]: ye && Ce,
							[Ct.a.isPendingDeletion]: D,
							[Ct.a.isRemoved]: !!m.bannedBy && Ce || m.isDeleted && S
						})
					}, o.a.createElement(ct.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", f + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Rt, {
						userHasNft: qe,
						childrenInfo: t,
						className: Object(d.a)({
							[Ct.a.collapsed]: i,
							[Ct.a.noFlair]: Object(dt.o)(v || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: v,
						isAdmin: S,
						isPostComment: !0,
						onCommentAuthorClick: z,
						onCommentTimestampClick: K,
						renderedInOverlay: ee,
						renderContractorBadge: Oe
					}), !i && o.a.createElement(r.Fragment, null, T && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: c.c.edit,
						draftKey: he,
						postId: X,
						rtJson: Object(st.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							draftKey: he,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !T && (!pe || S) && o.a.createElement("div", {
						"data-testid": nt.d,
						ref: Ie,
						className: Object(d.a)(Ct.a.CommentBody, {
							[Ct.a.restrictHeight]: !(!ne || !Ie.current) && Ie.current.clientHeight > wt
						})
					}, $ ? o.a.createElement(ze.a, {
						comment: m,
						prediction: $
					}) : o.a.createElement(Ze.b, {
						content: We,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: re,
						rtJsonElementProps: Dt(e),
						onClickRevealSpoilerText: me,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: ue,
							onClick: Fe
						}
					}), o.a.createElement(pt.b, {
						content: We
					})), V && fe && xe && o.a.createElement(Ge.a, {
						thing: m
					}), V && fe && ve && o.a.createElement(Qe.a, {
						onIgnoreReports: G,
						reportable: m
					}), null != O ? O : _e && o.a.createElement(Lt, null, je && o.a.createElement(Tt, {
						downvoteButtonClassName: Ct.a.voteButton,
						downvoteClassName: Ct.a.upDownVote,
						model: m,
						onVoteClick: J,
						scoreClassName: Ct.a.score,
						upvoteButtonClassName: Ct.a.voteButton,
						upvoteClassName: Ct.a.upDownVote
					}), o.a.createElement(It, {
						comment: m,
						commentsPageKey: u,
						depth: f,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: V,
						moderatorPermissions: b || U,
						renderedInOverlay: ee,
						isCommentFocused: y,
						subreddit: ie,
						trackCommentClick: ce
					})), be && x.map(e => o.a.createElement(Nt, {
						key: e
					}, e)), te && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: c.c.replyToComment,
						draftKey: ge,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: X,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: u,
								draftKey: ge,
								parentCommentDepth: f,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: ge,
								parentCommentDepth: f,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => o.a.createElement(et.a.Consumer, null, t => o.a.createElement(Vt, St({}, e, {
				trackCommentClick: t
			})))
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				LiveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				liveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
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
				return S
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return W
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				O = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				_ = s.n(C);
			const j = l.a.p("EmptyTitle", _.a),
				E = l.a.p("ErrorTitle", _.a),
				k = l.a.p("EmptyText", _.a),
				S = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(_.a.StateContainer, t)
					}, s ? a.a.createElement(O.a, {
						className: _.a.LiveChatIcon
					}) : a.a.createElement(v.a, {
						className: _.a.CommentsIcon
					}), a.a.createElement(j, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(v.a, {
					className: _.a.CommentsIcon
				}), a.a.createElement(j, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				P = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: _.a.StateContainer
					}, a.a.createElement(v.a, {
						className: _.a.CommentsIcon
					}), a.a.createElement(j, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(p.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				I = Object(c.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: r
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: r
						}, r))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: _.a.StateContainer
					}, a.a.createElement(y.a, {
						className: _.a.SnooFacepalm
					}), a.a.createElement(E, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(p.l, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				N = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(_.a.StateContainer, _.a.ErrorFullPage)
					}, a.a.createElement(I, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					}))
				},
				T = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(u.a, null))
				}, "LoadingFullPage", _.a),
				L = l.a.div("CommentsPlaceholderContainer", _.a),
				R = l.a.div("CommentPlaceholder", _.a),
				F = l.a.div("Avatar", _.a),
				M = l.a.div("VoteColumn", _.a),
				B = l.a.div("TextColumn", _.a),
				A = () => a.a.createElement("div", {
					className: Object(d.a)(_.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(d.a)(_.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = e => {
					let {
						isAvatarsInCommentsEnabled: t,
						sidebar: s = !0
					} = e;
					return a.a.createElement(L, null, o()(10, e => a.a.createElement(R, {
						key: e
					}, s && a.a.createElement(a.a.Fragment, null, t ? a.a.createElement(F, {
						className: Object(g.a)({
							isLoading: !0
						})
					}) : a.a.createElement(M, null, a.a.createElement(x.b, {
						className: _.a.Upvote
					}), a.a.createElement(f.a, {
						className: _.a.Downvote
					}))), a.a.createElement(B, null, a.a.createElement(A, null), a.a.createElement(D, null)))))
				}
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
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function r(e) {
				return e in n
			}

			function o(e) {
				n[e] = !0
			}

			function i() {
				n = {}
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
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/comment/index.ts"),
				f = s("./src/reddit/constants/comments.ts"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/constants/elementClassNames.ts"),
				O = s("./src/reddit/constants/gold.ts"),
				y = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const C = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: _,
							effectHighlight: {
								type: y.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				_ = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(k).filter(e => e !== E)
				}(e) : [])
			}
			const E = {
				glowHexColor: null,
				effectHighlight: null
			};

			function k(e) {
				for (const t of C) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return E
			}
			var S = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				P = s("./src/reddit/selectors/commentSelector.ts"),
				I = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/Comments/Comment/index.tsx"),
				F = s("./src/lib/scroll/index.ts"),
				M = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				A = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				W = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				U = s.n(W);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = p.a.wrapped(D.a, "ArrowRight", U.a), z = p.a.wrapped(M.a, "LinkOrOverlayLink", U.a), K = p.a.span("HoverSpan", U.a), q = Object(l.c)({
				permalink: (e, t) => Object(w.m)(e, {
					commentId: Object(w.r)(e, t).parentId
				})
			});
			var G = Object(d.b)(q)(Object(B.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return c.a.createElement("div", {
						className: Object(m.a)(U.a.Wrapper, {
							[U.a.isActive]: t
						})
					}, c.a.createElement(z, {
						isOverlay: !!s,
						to: Object(A.b)(n),
						onClick: F.b
					}, c.a.createElement(K, null, V._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", c.a.createElement(H, null)))
				})),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Q = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				J = s.n(Q);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = p.a.div("MoreCommentsItemWrapper", J.a), $ = p.a.p("MoreComments", J.a), ee = p.a.wrapped($, "MoreCommentsInteractive", J.a), te = Object(l.c)({
				moreCommentsItem: w.F,
				moreCommentsPending: w.G
			});
			var se = Object(d.b)(te, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.n)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					const {
						isActive: t,
						moreCommentsClicked: s,
						moreCommentsItem: n,
						moreCommentsPending: r
					} = e;
					return c.a.createElement(X, null, r ? c.a.createElement($, null, Z._("loading...", null, {
						hk: "47z89"
					})) : c.a.createElement(Y.a.Consumer, null, e => c.a.createElement(ee, {
						className: Object(m.a)({
							[J.a.isActive]: t
						}),
						onClick: () => {
							s(), e("load_more_comment")()
						}
					}, Z._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [Z._plural(null == n ? void 0 : n.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				ne = s("./node_modules/lodash/times.js"),
				re = s.n(ne),
				oe = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				ie = s.n(oe);
			const ae = p.a.wrapped(e => c.a.createElement("div", e, c.a.createElement("i", {
					className: v.m
				})), "Line", ie.a),
				ce = p.a.div("LineContainer", ie.a),
				de = p.a.div("ShortLineContainer", ie.a);
			var le = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: r,
						onLineMouseOver: o,
						onLineMouseOut: i,
						onShortLineClick: a,
						parentNodeIds: d,
						type: l
					} = e;
					return c.a.createElement(ce, null, re()(s + 1, e => e === s ? l !== f.a.Comment || t ? null : c.a.createElement(de, {
						key: d[e]
					}, c.a.createElement(ae, {
						className: Object(m.a)(d[e], {
							[ie.a.hasGlowBorder]: !!n,
							[ie.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => o(d[e]),
						onMouseOut: () => i(d[e])
					})) : c.a.createElement(ae, {
						className: d[e],
						key: d[e],
						onClick: r(e),
						onMouseOver: () => o(d[e]),
						onMouseOut: () => i(d[e])
					})))
				},
				me = s("./src/reddit/contexts/Visibility.tsx"),
				ue = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				pe = s("./src/reddit/selectors/moderatingComments.ts"),
				be = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				he = s.n(be);
			const ge = p.a.div("CommentListNodeWrapper", he.a),
				fe = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(v.f)
				},
				xe = () => {
					const e = document.querySelectorAll(`.${v.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(v.f)
				};
			var ve = Object(d.b)(() => Object(l.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(pe.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(w.l)(e, t),
				depth: (e, t) => Object(w.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const r = Object(w.l)(e, {
						commentLink: s
					});
					if (r && s.type === f.a.Comment) {
						n = j(r.treatmentTags)
					}
					return n
				},
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAvatarsInCommentsEnabled: ue.a,
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(w.l)(e, {
						commentLink: s
					});
					return !(s.type !== f.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(I.a)(e, t);
						return s && s.coinPrice >= O.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(w.p)(e);
					if (n === S.a.None) return !1;
					if (s.type !== f.a.Comment) return !1;
					const r = s.id,
						o = Object(P.c)(e, {
							commentId: r
						});
					if (!o) return !1;
					const i = Object(L.x)(e),
						a = !!Object(N.m)(e, {
							postId: o.postId
						}),
						c = Object(T.G)(e, {
							postId: o.postId
						});
					if (!c || !c.previousVisits || c.previousVisits.length < 1) return !1;
					const d = n === S.a.Last ? c.previousVisits[c.previousVisits.length - 1] : c.previousVisits[0];
					return (a || i) && o.created > d
				}
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: r
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(g.d)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: r
						}))
					},
					onShortLineClick: () => e(Object(g.q)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: r
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: r,
					commentsPageKey: o,
					depth: i,
					highlightTreatment: a,
					index: d,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isAwarded: p,
					isFirstInList: b,
					isHidden: h,
					isHighlighted: g,
					onLineClick: v,
					onPresenceIndicatorInViewport: O,
					onShortLineClick: y,
					parentNodeIds: C,
					postId: _,
					renderedInOverlay: j,
					scrollToAndRemeasure: E,
					showBlockingInterstitial: k
				} = e, S = !!p, w = !(!a || !a.glowHexColor), P = w && i > 0, I = w, N = c.a.createElement(ge, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: P,
						[he.a.glowBorderBottomPadding]: I
					}),
					id: r.id,
					style: {
						paddingLeft: i * (x.v + x.u) + (r.type === f.a.Comment ? x.v : 0)
					},
					tabIndex: -1
				}, c.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: P,
					onLineClick: v,
					onLineMouseOver: fe,
					onLineMouseOut: xe,
					onShortLineClick: y,
					type: r.type,
					parentNodeIds: C
				}), Oe({
					childrenInfo: t,
					clearHovered: xe,
					commentLink: r,
					commentsPageKey: o,
					onLineMouseOver: fe,
					hasAwardGradient: S,
					highlightTreatment: a,
					index: d,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isFirstInList: b,
					isHighlighted: g,
					postId: _,
					renderedInOverlay: j,
					scrollToAndRemeasure: E,
					onPresenceIndicatorInViewport: O,
					showBlockingInterstitial: k
				}));
				return u && r.type === f.a.Comment ? c.a.createElement(me.a, null, N) : N
			});
			const Oe = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: r,
					hasAwardGradient: o,
					highlightTreatment: i,
					index: a,
					isActive: d,
					isAvatarsInCommentsEnabled: l,
					isFirstInList: m,
					isHighlighted: u,
					onLineMouseOver: p,
					postId: b,
					renderedInOverlay: h,
					scrollToAndRemeasure: g,
					onPresenceIndicatorInViewport: x,
					showBlockingInterstitial: v
				} = e;
				switch (n.type) {
					case f.a.Comment:
						return c.a.createElement(R.a, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: r,
							hasAwardGradient: o,
							highlightTreatment: i,
							index: a,
							isActive: d,
							isAvatarsInCommentsEnabled: l,
							isFirstInList: m,
							isHighlighted: u,
							onLineMouseOver: p,
							postId: b,
							renderedInOverlay: h,
							scrollToAndRemeasure: g,
							onPresenceIndicatorInViewport: x,
							showBlockingInterstitial: v
						});
					case f.a.MoreComments:
						return c.a.createElement(se, {
							commentsPageKey: r,
							isActive: d,
							moreCommentsId: n.id
						});
					case f.a.ContinueThread:
						return c.a.createElement(G, {
							id: n.id,
							isActive: d
						})
				}
			};
			var ye = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ce = s("./src/reddit/components/Comments/States/index.tsx"),
				_e = s("./src/reddit/components/Scroller/Simple.tsx"),
				je = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/constants/elementIds.ts"),
				ke = s("./src/reddit/featureFlags/index.ts"),
				Se = s("./src/reddit/helpers/commentList/index.ts"),
				we = s("./src/reddit/helpers/trackers/comment.ts"),
				Pe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ie = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Te = s("./src/lib/LRUCache/index.ts"),
				Le = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Re = s("./src/reddit/selectors/telemetry.ts");
			const Fe = e => t => ({
				...Object(Re.o)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Re.d)(t, {
					reason: String(e)
				})
			});
			var Me = s("./src/reddit/components/Comments/index.m.less"),
				Be = s.n(Me);
			const Ae = x.f + 10,
				De = 65,
				We = p.a.wrapped(_e.b, "Scroller", Be.a),
				Ue = Object(l.c)({
					allCollapsed: w.a,
					commentLinks: w.k,
					commentThreadLinkSet: w.o,
					measureScrollFPS: ke.d.measureScrollFPS,
					moreComments: w.b,
					postPermalink: T.F
				}),
				Ve = Object(d.b)(Ue, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.f)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.i)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.Z)(Object(A.b)(t)))
				})),
				He = new Te.a(500),
				ze = new Te.a(500),
				Ke = (e, t) => {
					const s = `entered-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, He.set(s, n)), n
				},
				qe = (e, t) => {
					const s = `left-${e}`;
					let n = ze.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, ze.set(s, n)), n
				};
			class Ge extends c.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							r = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === r) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const o = t[r - 1],
							i = this.parentNodeIdsMap[o.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(we.b)(e)))
					}, this.showBlockingInterstitial = r()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, u.N, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, ye.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1,
						isBlockingModalShowed: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && Ne.c.cancel(this.timerId), e.length && (this.timerId = Ne.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Ne.b)(u.o.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Ie.a && this.props.sendEvent(Fe(this.props.commentLinks.length))
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: r,
						moreComments: o
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !i()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, r, o)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !i()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && Ne.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Ne.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Ne.b)(u.o.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Ne.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let r = null,
						o = 1 / 0,
						i = 0,
						a = !1;
					ye.c();
					for (let c = 0; c < e.length; c++) {
						const d = e[c];
						r && (s[d.id].depth > o ? (ye.a(d.id), i += Object(Se.d)(d, n), d.type === f.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[r] = {
							numChildren: i,
							hasContinueThread: a
						}, r = null, o = 1 / 0, i = 0, a = !1)), !r && t[d.id] && (r = d.id, o = s[d.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: r,
						postId: o,
						renderedInOverlay: i
					} = this.props, a = Ke(e.id, n), d = qe(e.id, r);
					return {
						estHeight: ye.b(e.id) ? 0 : De,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: d,
						render: n => {
							let {
								placeholderRecommended: r,
								height: a,
								width: d,
								scrollToAndRemeasure: l
							} = n;
							return r ? c.a.createElement("div", {
								style: {
									height: a,
									backgroundColor: "#fff"
								}
							}) : c.a.createElement(ve, {
								key: `comment-list-node-${e.id}`,
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								index: t,
								isFirstInList: 0 === t,
								isHidden: ye.b(e.id),
								postId: o,
								scrollToAndRemeasure: l,
								renderedInOverlay: !!i,
								parentNodeIds: this.getParentNodeIds(e),
								onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
								showBlockingInterstitial: this.showBlockingInterstitial
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						onAllCommentsRendered: r,
						renderedInOverlay: o,
						showSignupUpsell: i
					} = this.props;
					let a;
					if (n) {
						a = `comments-${o?"lightbox":"page"}`
					}
					const d = t.map((e, t) => this.getScrollChild(e, t));
					return c.a.createElement(We, {
						className: Object(m.a)(Be.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(Ee.e) : null,
						onScroll: i,
						onAllChildrenRendered: r,
						preventScrollOnMount: !0,
						scrollToChildPadding: Ae,
						trackingName: a
					}, d)
				}
				renderEmptyState() {
					return this.props.commentId ? c.a.createElement(Ce.g, {
						link: this.props.postPermalink
					}) : c.a.createElement(Ce.c, null)
				}
			}
			t.a = Ve(Object(je.c)(Object(Le.a)(Object(Pe.d)(Ge))))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
			t.a = r
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = i.a.div("LoaderWrapper", d.a),
				m = i.a.div("Icon", d.a),
				u = i.a.div("Byline", d.a),
				p = Object(o.a)({
					ErrorComponent: () => r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null))
					}
				});
			t.a = e => r.a.createElement(p, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD",
				backToTopButton: "_1xywgtWT3jTCKWcw9KY2r1",
				greyRereddit: "_2pOTt_VPprwl-h6pV0o5Mu"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/components/BackToTop/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				g = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/ModProgressModule/index.tsx"),
				v = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				O = s("./src/reddit/components/SidebarFooter/index.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_ = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				j = s("./src/reddit/components/Widgets/Recommendations/index.tsx"),
				E = s("./src/reddit/components/Widgets/ReredditLink/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				S = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/constants/experiments.ts"),
				P = s("./src/reddit/featureFlags/component.tsx"),
				I = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				L = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				R = s("./src/reddit/selectors/experiments/postSeo.ts"),
				F = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx"),
				D = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				W = s.n(D);
			const U = Object(P.a)("spPoints", h.a),
				V = Object(P.a)("spLeaderboard", g.a),
				H = Object(n.a)({
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
				z = Object(d.c)({
					d2xPdpSideRailRecsVariant: T.a,
					isD2xPdpSideRailRecsEnabled: T.b,
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(N.t)(s) && !n && Object(L.a)(e) === w.Te.NewModule
					},
					isLoggedIn: B.S,
					postSEOV2IdCardVariant: R.h,
					shouldShowReredditPromo: F.a,
					widgets: Object(u.a)(M.x)
				}),
				K = Object(c.b)(z);
			class q extends a.a.Component {
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
					return this.props.subredditName !== e.subredditName || !o()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderRecommendationsSidebar() {
					const {
						className: e,
						commentsPageKey: t,
						d2xPdpSideRailRecsVariant: s,
						isOverlay: n,
						post: r,
						postSEOV2IdCardVariant: o,
						shouldShowReredditPromo: i,
						subredditName: c,
						subredditOrProfile: d
					} = this.props, m = Object(R.c)(o) || Object(R.f)(o), u = s === w.gd.GreyRereddit || s === w.gd.LargeImagePreview, b = s === w.gd.GreyRedditNoNsfw, h = i && (u || b) ? a.a.createElement(E.ReredditButtons, {
						directoryTimestamp: r.created,
						postId: r.id,
						renderAsPlainLink: !0
					}) : void 0;
					return a.a.createElement("div", {
						className: Object(l.a)(e, W.a.outerWrapper)
					}, a.a.createElement(f.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: c,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: m
					}), a.a.createElement(y.a, null, a.a.createElement(A.a, null, !(r.isNSFW && b) && a.a.createElement(j.a, {
						post: r,
						subredditOrProfile: d
					}), i && !u && !b && a.a.createElement(k.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), a.a.createElement(O.a, {
						reredditButtons: h
					}), a.a.createElement(p.a, {
						className: W.a.backToTopButton,
						isOverlay: !1
					}))))
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isFakeOverlay: s,
						isOverlay: n,
						post: r,
						postSEOV2IdCardVariant: o,
						subredditName: i
					} = this.props, c = !Object(R.c)(o) && !Object(R.f)(o);
					return a.a.createElement(C.a, {
						adComponentOnFakeOverlay: s,
						adComponent: c ? a.a.createElement(v.a, {
							postId: r.id,
							isOverlay: n,
							listingName: i,
							placement: m.e.BELOW_THE_FOLD,
							placementIndex: e,
							position: I.a.BOTTOM,
							refreshKey: r.id,
							sizes: m.q,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isD2xPdpSideRailRecsEnabled: s,
						isInNewModuleNCPV3Experiment: n,
						isLoggedIn: r,
						isOverlay: o,
						post: i,
						postSEOV2IdCardVariant: c,
						shouldShowReredditPromo: d,
						subredditId: u,
						subredditName: p,
						widgets: h
					} = this.props;
					let g = 0;
					const O = Object(R.c)(c) || Object(R.f)(c),
						C = a.a.createElement(v.a, {
							postId: i.id,
							isOverlay: o,
							listingName: p,
							placement: m.e.ABOVE_THE_FOLD,
							placementIndex: g++,
							position: I.a.FIRST,
							refreshKey: i.id,
							sizes: m.j,
							commentsPageKey: t
						});
					return !Object(N.t)(i) && s ? this.renderRecommendationsSidebar() : a.a.createElement("div", {
						className: Object(l.a)(W.a.outerWrapper, e)
					}, n && a.a.createElement(x.default, {
						subredditId: u,
						subredditName: p
					}), Object(N.t)(i) ? a.a.createElement(H, {
						profileName: p,
						isOverlay: o || !1
					}) : a.a.createElement(f.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: p,
						postId: i.id,
						rememberPosition: i.numComments > 0,
						isMinimal: O
					}), a.a.createElement(b.a, {
						cardClassName: W.a.card,
						subredditId: u
					}), a.a.createElement(U, {
						className: W.a.card,
						subredditId: u,
						uniqueId: i.id
					}), a.a.createElement(V, {
						className: W.a.card,
						subredditId: u,
						uniqueId: i.id
					}), C, r && h.map((e, t) => a.a.createElement(y.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(S.a, {
						subredditName: p,
						widget: e
					}))), i.isSponsored && a.a.createElement(y.a, null, a.a.createElement(_.a, null)), d && a.a.createElement(k.a, {
						directoryTimestamp: i.created,
						postId: i.id
					}), this.renderFooter(g++))
				}
			}
			t.a = K(q)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = "500px";
			class b extends r.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: b,
						onClick: h
					} = this.props, g = l && !e, f = l ? m.a.TruncatedComments : "";
					return r.a.createElement("div", {
						onClick: h,
						ref: i
					}, r.a.createElement("div", {
						className: Object(o.a)(m.a.ContentWrapper, s, f),
						style: {
							"--commentswrapper-gradient-color": Object(d.a)(this.props).body,
							maxHeight: l ? p : "unset"
						}
					}, t), g && r.a.createElement(c.l, {
						className: m.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, u._("View Entire Discussion ({number of comments} Comments)", [u._param("number of comments", Object(a.b)(b))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(b)
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
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(g),
				x = s("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				O = x.a.wrapped(l.c, "StyledTooltip", f.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.rb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(i.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), a(c)
					},
					onMouseEnter: r,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(O, {
					caretOnTop: !0,
					tooltipId: v,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(O, {
					caretOnTop: !0,
					tooltipId: v,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
		"./src/reddit/components/CrosspostRecommendationsModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CrosspostRecommendationsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CrosspostRecommendationsModal").then(s.bind(null, "./src/reddit/components/CrosspostRecommendationsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CrosspostRecommendationsModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				return g
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					participantsCount: t
				} = e;
				return m._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [m._param("total participated users", Object(l.b)(t)), m._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					r = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					m = Object(i.e)(e => Object(d.V)(e, {
						postId: t.id
					}));
				return o.a.createElement("div", {
					className: b.a.container
				}, o.a.createElement("div", {
					className: b.a.label
				}, o.a.createElement("span", null, null == m ? void 0 : m.displayText), r && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && o.a.createElement(u, {
					participantsCount: s.totalParticipantsCount
				}), o.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), o.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/economics/predictions/index.ts"),
				a = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = s("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(o.d)(),
					s = Object(o.e)(t => Object(c.Y)(t, {
						subredditId: e
					})),
					n = Object(o.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					d = Object(o.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						s.name && t(Object(i.l)(s.name))
					}, [s.name, t]);
				return r.a.useEffect(() => {
					d || n || l()
				}, [d, n, l]), {
					isFetching: d,
					isFetched: n,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/ExpandedCrossposts/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/subredditDiscovery.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "ExpandedCrosspost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ExpandedCrosspost").then(s.bind(null, "./src/reddit/components/ExpandedCrossposts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ExpandedCrossposts/index.tsx"
					}
				}),
				d = e => {
					return Object(i.e)(a.a) ? o.a.createElement(c, e) : null
				}
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
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = s.n(c),
				l = s("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				u = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
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
					} = this.state, o = s ? i.a.createElement(u, {
						src: a.a.assetPath + t
					}) : i.a.createElement(r.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(u, {
						src: a.a.assetPath + t
					}));
					return i.a.createElement(m, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o))
				}
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
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
				o = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Footer/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.div("UserAgreement", d.a), u = a.a.a("UserAgreementLink", d.a), p = a.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(i.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, r.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", r.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", r.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
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
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = c.a.wrapped(m.a, "Planet", h.a),
				f = c.a.div("SubredditIcon", h.a),
				x = c.a.div("PositionedImage", h.a),
				v = c.a.div("HeaderContent", h.a),
				O = c.a.div("HeaderContainer", h.a),
				y = c.a.span("HeaderText", h.a),
				C = c.a.wrapped(o.a, "HeaderUrl", h.a),
				_ = c.a.span("Container", h.a),
				j = Object(a.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						o = Object(p.a)(e).banner.positionedImage,
						a = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (n) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const m = !!o && !!a && "left" === n,
						b = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						E = `${4+j}px`;
					return r.a.createElement(_, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, r.a.createElement(C, {
						className: e.className,
						to: e.url
					}, r.a.createElement(O, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||d.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(v, {
						className: Object(i.a)({
							[h.a.hoverHeaderContent]: m
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
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), r.a.createElement(x, {
						className: Object(i.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!o,
							[h.a.hoverPositionedImage]: !!o && !!a
						}),
						style: {
							...c,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = j
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: c,
					textWrapperClassName: m
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, r.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? r.a.createElement(d, null, n) : r.a.createElement(d, null), r.a.createElement(l, {
					className: m
				}, r.a.createElement("div", {
					className: a.a.title
				}, c), i && r.a.createElement("div", {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(d);
			t.a = () => o.a.createElement(c.a, {
				className: l.a.BannerBase,
				color: i.a.locked,
				icon: o.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: n.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: n.fbt._("This thread is archived", null, {
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
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				u = s.n(m);
			const p = o.a.createElement(c.a, {
					className: u.a.lockIcon
				}),
				b = e => Object(d.i)(e) ? i.d.profile : i.d.subreddit;

			function h(e) {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", b(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return o.a.createElement(l.a, {
					className: u.a.bannerBase,
					color: a.a.locked,
					icon: p,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: s
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const u = a.a.wrapped(d.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, r = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return o.a.createElement(c.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: o.a.createElement(u, null),
					subtitle: r,
					title: n.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = i.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = a.a;
						break;
					default:
						t = i.a
				}
				return o.a.createElement(t, {
					className: m.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = "clear_fill";
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = "delete_fill";
						break;
					case d.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, h = () => u._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", o.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "3MHgRl"
			}))), u._param("=Content Policy", o.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), g = () => u._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", o.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "yMHtU"
			}))), u._param("=Content Policy", o.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), f = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return u._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case d.g.Author:
						return u._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case d.g.AuthorDeleted:
						return u._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case d.g.AutomodFiltered:
						return u._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case d.g.CommunityOps:
						return u._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case d.g.ContentTakedown:
						return u._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case d.g.CopyrightTakedown:
						return u._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case d.g.Moderator:
						return u._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [u._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case d.g.Reddit:
						return u._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return u._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, x = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return u._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return u._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [u._param("=[subreddit name]", o.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("{subreddit name}", [u._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case d.g.CommunityOps:
						return u._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case d.g.ContentTakedown:
						return o.a.createElement(g, null);
					case d.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case d.g.Moderator:
						return u._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case d.g.Reddit:
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, v = (e, t, s) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return u._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case d.g.Author:
						return u._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case d.g.AuthorDeleted:
						return u._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case d.g.AutomodFiltered:
						return u._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case d.g.CommunityOps:
						return u._("This post was removed by Reddit admin, u/{username}.", [u._param("username", t)], {
							hk: "34nHWu"
						});
					case d.g.ContentTakedown:
						return u._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case d.g.CopyrightTakedown:
						return u._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case d.g.Moderator:
						return u._("This post was removed by r/{subredditName} moderator, u/{username}.", [u._param("subredditName", s), u._param("username", t)], {
							hk: "270bcn"
						});
					case d.g.Reddit:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, O = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return u._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case d.g.AutomodFiltered:
						return u._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case d.g.CommunityOps:
						return u._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [u._param("=just ask", o.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return o.a.createElement(g, null);
					case d.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case d.g.Moderator:
						return u._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case d.g.Reddit:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = s.n(b);
			const g = o.a.createElement(m.a, {
					className: h.a.icon
				}),
				f = Object(a.c)({
					subreddit: u.C,
					subredditAboutInfo: u.z
				}),
				x = Object(i.b)(f);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(p.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: g,
					subtitle: o.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", o.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? o.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : i, " ", o.a.createElement(l.default, {
						className: h.a.link,
						to: "/"
					}, n.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: n.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/ItemCarousel/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var n, r = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit", e.CROSSPOST = "crosspost"
			}(n || (n = {}));
			const i = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/,
				a = e => {
					var t, s, a;
					if ((null == e ? void 0 : e.media) && Object(o.L)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(r.f)(e.media.richtextContent.document, !0);
						return 0 === t.length ? [] : null === (a = t.reduce) || void 0 === a ? void 0 : a.call(t, (e, t) => {
							var s;
							const {
								subreddit: r,
								postId: o
							} = (null === (s = t.match(i)) || void 0 === s ? void 0 : s.groups) || {};
							return o && r ? [...e, {
								id: `t3_${o}`,
								url: t,
								type: n.POST
							}] : r ? [...e, {
								id: r,
								url: t,
								type: n.SUBREDDIT
							}] : e
						}, [])
					}
					return []
				}
		},
		"./src/reddit/components/ItemCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				redditLinkCard: "_3cx1eazwYdVDDYc1dPyiR5",
				title: "_39Ml3ujYhKuR2k_LFpXVKI",
				shimmer: "_1ow4mWwRckO61gSLo-7v0b",
				crosspostTitle: "_22-ViNeyjOeL6ua8KDyKye",
				crosspostLinkCard: "_2iAbfa2D0rYH0bhwTONlI_",
				subredditLink: "_218c5HLOpg15zujvZOJ-jL",
				crosspostIcon: "_8rGN4GQ7vHLKekUlLRoHr",
				imageContainer: "_18r8N8O6-u5F1b97604EtU",
				thumbnailPlaceholder: "_1s2zQgETSy4lq4_Lx3sOZr",
				postDescription: "_12PklAY2VQxTTv7zYRGtFp",
				postStats: "_32BkJbsXEUbnRV8IdWALfx",
				separator: "_1sTUU46KrE7KfTGqDC-a29",
				carouselContainer: "_1rK-TdqBly0Ah1V-s2iNL4",
				constantWidth: "_13jkDfTREXT08dxlYnS8eF",
				flexWidth: "_3u_85Dp7oQMFiSQ4sLv1st",
				flexWidthTwoItems: "_3lv5cSLrhQNAMfRDhbY5yF",
				carouselTitle: "_2rN6AyQVzdFs8i43El1QF4",
				scrollIcon: "thm33nRT_QsxwagdC3y0O",
				carouselHeader: "_4keJkmF2kMGrQiCFuVyZP",
				carouselControls: "_2nzp90JhlrKYHbygwSg66",
				hasTitle: "_2g5PF1KCS_D1_wrxAataDQ",
				buttonWrapper: "_1FeNy7DyUXo50Xg6y7vYGE",
				scrollButton: "r6d8ZhiJGupMHDZ_VT92q",
				left: "_39XyIEf8_iPNJBEO56MJf-",
				right: "_2fa9qw7f4611Kfap-xuQAs",
				hidden: "_3y0dWvmqYpVeqdC-tWTBUc",
				itemsContainer: "WrOtvEVbiINAEhr1-6kip",
				large: "B_GPQ8fojjJzonrunPyKW",
				small: "q4_nxOUe2RNORWKR6Fyqc",
				subredditItem: "_3eJ3Vuzskg5QPjF0vWpWmv",
				subredditIcon: "_1atFEw7H5vpTJAn0fGBc_P",
				carouselContent: "_2rvSe7lZ7Qt5qCgXf_J0qB",
				bannerWrapper: "_1JhjjQQiHUTuMYhG1tGhPm",
				banner: "_3KgCrfIwPj-Tdwy64OBwWr",
				description: "_3V3hHaMDC4uZNCfwyBbz4g",
				lockup: "_24tuGHItai5L2nwJXdscK1",
				lockupText: "_1yYrDsHa8VjZpORJ4q0yYS",
				subredditName: "_1SXVDK7RjZdh5oUY2F-oQy",
				subscribersCount: "_1h7eV26RDHcql9mvKfi45C",
				contentWrapper: "rgoe5x8WumPeeNjIHn671",
				backgroundImage: "_23MqHKNvwrRo1D5A8ce1zw",
				subscribeButton: "_2sGQoRqSFOXnUrrQsZO3jK",
				blur: "_3kz2nO3JA6igVlQhzIq08X",
				flair: "BkSa7JPwUk1I4IglSRWbb",
				gradientAnimation: "_2KJPHlL6kS7WEhZRcgx8PN"
			}
		},
		"./src/reddit/components/ItemCarousel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/icons.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				f = s("./src/reddit/controls/ContentType/index.tsx"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/Flair/index.tsx"),
				O = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/telemetry/index.ts"),
				_ = s("./src/reddit/components/ItemCarousel/index.m.less"),
				j = s.n(_);
			const E = e => {
				let {
					postCard: t,
					post: s,
					className: r
				} = e;
				const {
					url: o,
					commentCount: i,
					createdAt: l,
					score: m,
					title: u,
					thumbnail: _,
					isNsfw: E,
					subreddit: k
				} = t, S = Object(d.e)(e => e);
				Object(a.useEffect)(() => {
					s && k && Object(C.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...O.o(s)
					}))(s, k)(S))
				}, []);
				return c.a.createElement(x.a, {
					to: (null == o ? void 0 : o.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(j.a.redditLinkCard, r),
					onClick: () => {
						Object(C.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...O.o(s)
						}))(s, k)(S))
					}
				}, c.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == _ ? void 0 : _.url) ? c.a.createElement("img", {
					src: _.url,
					className: Object(n.a)(E && j.a.blur)
				}) : c.a.createElement(f.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), c.a.createElement("div", {
					className: j.a.postDescription
				}, c.a.createElement("div", null, c.a.createElement("div", {
					className: j.a.title
				}, u), E && c.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				})), c.a.createElement("div", {
					className: j.a.postStats
				}, m && c.a.createElement(c.a.Fragment, null, c.a.createElement("span", null, Object(h.b)(m), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), c.a.createElement("span", {
					className: j.a.separator
				}, "•")), i && c.a.createElement("span", null, Object(h.b)(i), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), c.a.createElement("span", {
					className: j.a.separator
				}, "•"), l && c.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Xb, !0)))))
			};
			var k = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				I = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const T = e => {
				let {
					crosspostCard: t,
					post: s,
					className: r
				} = e;
				const {
					permalink: o,
					commentCount: i,
					title: l,
					thumbnail: m,
					isNsfw: u,
					subreddit: b
				} = t, h = Object(d.e)(e => e);
				Object(a.useEffect)(() => {
					s && b && Object(C.a)(Object(I.c)(s, b)(h))
				}, [s, b, h]);
				return c.a.createElement(x.a, {
					to: o,
					className: Object(n.a)(j.a.redditLinkCard, j.a.crosspostLinkCard, r),
					onClick: () => {
						Object(C.a)(Object(I.a)(s, b)(h))
					}
				}, c.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? c.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(u && j.a.blur)
				}) : c.a.createElement(f.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), c.a.createElement("div", {
					className: j.a.postDescription
				}, c.a.createElement("div", {
					className: j.a.postStats
				}, c.a.createElement(N.a, {
					className: j.a.crosspostIcon
				}), c.a.createElement(P.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: j.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), c.a.createElement("span", {
					className: j.a.separator
				}, "•"), c.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), c.a.createElement("div", {
					className: Object(n.a)(j.a.title, j.a.crosspostTitle)
				}, u && c.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), l)))
			};
			var L = c.a.memo(e => {
					let {
						className: t
					} = e;
					return c.a.createElement("div", {
						className: Object(n.a)(j.a.redditLinkCard, t)
					}, c.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.imageContainer)
					}), c.a.createElement("div", {
						className: j.a.postDescription
					}, c.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.title)
					}), c.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.postStats)
					})))
				}),
				R = s("./src/reddit/actions/subreddit.ts"),
				F = s("./src/reddit/components/SubscribeButton/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = e => {
				let {
					id: t,
					index: s,
					name: r,
					subscribersCount: o,
					description: i,
					primaryColor: l,
					icon: m,
					isSubscribed: p,
					banner: b,
					path: g,
					size: f,
					isDiscovery: x,
					post: _,
					className: E,
					isNsfw: k
				} = e;
				const S = Object(d.d)();
				Object(a.useEffect)(() => {
					S(Object(R.u)(r))
				}, [S, r]);
				const w = Object(d.e)(e => Object(u.Y)(e, {
						subredditId: t
					})),
					I = Object(d.e)(e => e);
				Object(a.useEffect)(() => {
					_ && w && x && Object(C.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...O.o(s)
					}))(_, w)(I))
				}, []);
				const N = Object(a.useCallback)(e => {
					if (x) return (e => {
						let {
							noun: t,
							subredditId: s,
							index: n,
							source: r,
							...o
						} = e;
						return e => ({
							...o,
							source: r,
							noun: t,
							actionInfo: {
								reason: `${n}`
							},
							subreddit: Object(u.Y)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: _,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, p]);
				return c.a.createElement("div", {
					className: Object(n.a)(j.a.subredditItem, null === j.a || void 0 === j.a ? void 0 : j.a[f], E)
				}, c.a.createElement("div", {
					className: j.a.contentWrapper
				}, c.a.createElement("div", {
					className: j.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, c.a.createElement("img", {
					className: j.a.banner,
					src: b || void 0
				})), c.a.createElement("div", {
					className: j.a.carouselContent
				}, c.a.createElement(P.a, {
					to: g,
					className: j.a.lockup,
					onClick: () => {
						x && Object(C.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...O.o(s)
						}))(_, w)(I))
					}
				}, c.a.createElement("div", {
					style: "small" === f ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: j.a.backgroundImage
				}, m ? c.a.createElement("img", {
					src: m,
					className: j.a.subredditIcon
				}) : c.a.createElement(B.a, {
					className: j.a.subredditIcon
				})), c.a.createElement("div", {
					className: j.a.lockupText
				}, c.a.createElement("span", {
					className: j.a.subredditName
				}, "r/", r), " ", k && c.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), c.a.createElement("span", {
					className: j.a.subscribersCount
				}, A._({
					"*": "{number} members",
					_1: "1 member"
				}, [A._plural(o, "number", Object(h.b)(o))], {
					hk: "4yqFU9"
				})))), c.a.createElement("p", {
					className: j.a.description
				}, i)), c.a.createElement(F.a, {
					className: j.a.subscribeButton,
					identifier: {
						name: r,
						type: "subreddit"
					},
					getEventFactory: N,
					priority: M.c.Tertiary,
					small: !0
				})))
			};

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, H = Object(w.c)(e => {
				let {
					title: t,
					className: s,
					itemIds: o,
					size: p = "large",
					hasSubredditNames: b = !1,
					hasPostIds: h = !1,
					isDiscovery: g,
					post: f
				} = e;
				const x = Object(d.d)(),
					[v, O] = Object(a.useState)(null),
					[y, C] = Object(a.useState)(null),
					[_, w] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[P, I] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: R,
						crosspostIds: F,
						postIds: M,
						postUrls: B
					} = Object(a.useMemo)(() => o.reduce((e, t) => {
						let {
							type: s,
							id: n,
							url: r
						} = t;
						switch (s) {
							case S.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case S.a.POST:
								r && (e.postUrls[n] = r), e.postIds.push(n);
								break;
							case S.a.CROSSPOST:
								e.crosspostIds.push(n)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [o]),
					A = Object(d.e)(e => Object(u.D)(e, R)),
					U = Object(d.e)(e => Object(k.L)(e, M)),
					H = Object(d.e)(e => Object(k.L)(e, F)),
					z = A.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					K = U.reduce((e, t) => (e[t.id] = t, e), {}),
					q = H.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == R ? void 0 : R.length) || M.length || F.length) && x(Object(l.e)(R, b, R, h, [...F, ...M]))
				}, [R, F, M, x, h, b]);
				const G = o.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case S.a.SUBREDDIT:
								const t = null == z ? void 0 : z[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case S.a.POST:
								const r = null == K ? void 0 : K[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								});
								break;
							case S.a.CROSSPOST:
								const o = null == q ? void 0 : q[n];
								if (!o) break;
								e.push({
									type: s,
									props: o
								})
						}
						return e
					}, []),
					Y = e => () => {
						var t, s;
						if (!y) return;
						const n = null === (s = null === (t = null == y ? void 0 : y.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const r = (Math.sign(e) ? y.scrollLeft % n : n % y.scrollLeft) || 0,
							o = n * e - r;
						y.scrollBy({
							left: o,
							behavior: "smooth"
						})
					},
					Q = Object(a.useCallback)(() => {
						if (!y) return;
						const {
							width: e
						} = null == y ? void 0 : y.getBoundingClientRect(), t = (null == y ? void 0 : y.scrollLeft) > 0, s = (null == y ? void 0 : y.scrollLeft) < y.scrollWidth - e;
						0 === (null == y ? void 0 : y.scrollLeft) && y.scrollWidth - e == 0 || w({
							left: t,
							right: s
						})
					}, [y]);
				Object(a.useEffect)(() => {
					if (!v || !y) return;
					const e = i()(() => {
						const e = V(y);
						I(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = V(y);
					return I(t), Q(), () => {
						window.removeEventListener("resize", e)
					}
				}, [v, y, Q, P, G.length]);
				const J = () => 1 === G.length ? j.a.flexWidth : 2 === G.length ? j.a.flexWidthTwoItems : j.a.constantWidth;
				return c.a.createElement("div", {
					ref: O,
					className: Object(n.a)(j.a.carouselContainer, s, null === j.a || void 0 === j.a ? void 0 : j.a[p])
				}, c.a.createElement("div", {
					className: j.a.carouselHeader,
					style: {
						width: N
					}
				}, c.a.createElement("h3", {
					className: j.a.carouselTitle
				}, t)), c.a.createElement("div", {
					ref: C,
					onScroll: Q,
					className: Object(n.a)(j.a.itemsContainer, null === j.a || void 0 === j.a ? void 0 : j.a[p]),
					style: {
						width: N
					}
				}, !G.length && Array(3).fill(!0).map((e, t) => c.a.createElement(L, {
					key: t,
					className: J()
				})), null == G ? void 0 : G.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var r, o, i;
					switch (s) {
						case S.a.SUBREDDIT:
							const e = n;
							return c.a.createElement(D, W({
								className: J(),
								index: t + 1,
								size: p,
								banner: null === j.a || void 0 === j.a ? void 0 : j.a.bannerBackgroundImage,
								icon: (null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.icon) || (null === (i = null === (o = e.styles) || void 0 === o ? void 0 : o.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: f
							}, e));
						case S.a.POST:
							const s = n;
							return c.a.createElement(E, {
								postCard: {
									...s,
									url: B[s.id]
								},
								className: J(),
								post: f
							});
						case S.a.CROSSPOST:
							const a = n;
							return c.a.createElement(T, {
								crosspostCard: {
									...a
								},
								className: J(),
								post: f
							});
						default:
							return null
					}
				})), G.length > 2 && c.a.createElement("div", {
					className: Object(n.a)(j.a.carouselControls, {
						[j.a.hasTitle]: !!t
					})
				}, c.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.left, {
						[j.a.hidden]: !_.left
					})
				}, c.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Y(-P)
				}, c.a.createElement(m.a, {
					name: r.a.left_fill,
					className: j.a.scrollIcon
				}))), c.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.right, {
						[j.a.hidden]: !_.right
					})
				}, c.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Y(P)
				}, c.a.createElement(m.a, {
					name: r.a.right_fill,
					className: j.a.scrollIcon
				})))))
			});
			t.a = H
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				l = s("./src/reddit/components/Thumbnail/index.tsx"),
				m = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/hooks/useIsClient.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				f = s("./src/reddit/components/MediumPost/index.m.less"),
				x = s.n(f);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: r,
					redditStyle: f,
					shouldShowSubscribeButton: v,
					subredditOrProfile: O,
					templatePlaceholderImage: y,
					shouldShowFollowButton: C,
					isFollowed: _,
					isCommentsPage: j,
					onFollowPostClick: E
				} = e;
				const k = Object(b.a)(),
					S = Object(i.e)(g.a);
				return k ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(a.a)(x.a.thumbnailContainer, {
						[x.a.mShowingButtonOrOverflow]: C || v
					})
				}, o.a.createElement("div", {
					className: x.a.thumbnailContainerRow
				}, C && o.a.createElement(c.a, {
					isFilled: !!_,
					onClick: E,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), v && O && o.a.createElement(d.a, {
					className: x.a.subscribeButton,
					getEventFactory: e => Object(p.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: O.name,
						type: Object(h.i)(O) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: s.id,
					small: !0,
					priority: S ? u.c.Secondary : void 0,
					isShredditParityEnabled: S
				})), o.a.createElement(l.b, {
					crosspost: t,
					isCommentsPage: j,
					post: s,
					redditStyle: f,
					forceShowNSFW: r,
					templatePlaceholderImage: y
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
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5",
				realtimeAnimation: "S33xGQRDwuEu0UCuySY-8",
				realtimeFade: "_1I9NB7KmCGwAHbfEpCOf8V",
				isNightMode: "MTt6QTOKMo8xdDlYmv456",
				realtimeFadeNight: "_15WFTB2XFDPefKceV0OM7e",
				realtimeUpdated: "lJOoJ1Pj5PqAnL0NdDYyM"
			}
		},
		"./src/reddit/components/ModProgressModule/index.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				themedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				completed: "_2B0VV6SdB2XjjxadViz15Q",
				tooltipIsActive: "_28uNH-IBuxe83YxCxYlnOb",
				ModuleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				moduleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				ModSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				modSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				headerButtonsContainer: "_2_EnVDjbXLqtMoZxrXfqFD",
				ChevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				chevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				ProgressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				progressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				ProgressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressCount: "_3zufL-ajBszVrFsqSo1RVV",
				progressText: "_2qiL_cOXT9k5zDizfDNl9",
				darkFont: "_3pebDR2YBVgOVPtes2otJ",
				Description: "_1--LMLAxYX0l9LaibrBWVc",
				description: "_1--LMLAxYX0l9LaibrBWVc",
				CloseButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				closeButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				CardContainer: "_2YShnlNvvx9BkckLObKkwD",
				cardContainer: "_2YShnlNvvx9BkckLObKkwD",
				Card: "_-lU3INdzFYlY4zni0Pss",
				card: "_-lU3INdzFYlY4zni0Pss",
				unclickable: "_2LyLq46VyzgH6SYt5kWKmL",
				ContentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				contentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				IconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				iconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				CheckIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				checkIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				Icon: "QNbSE3fPPc1M8MakLm1Bi",
				icon: "QNbSE3fPPc1M8MakLm1Bi",
				CardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				cardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				Title: "_2GyfJdanPW5aCT405tuR0i",
				title: "_2GyfJdanPW5aCT405tuR0i",
				overflowButton: "GFzLxcAwA3BPE4dxI-d4W",
				imageUploader: "_2EJWiSLsB96D6FOsAajSH-"
			}
		},
		"./src/reddit/components/ModProgressModule/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				m = s("./src/reddit/actions/subreddit/questions.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				b = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				h = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/modals.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ImageInput/index.tsx"),
				y = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				C = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				E = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				k = s("./src/reddit/models/ApiRequestState/index.ts"),
				S = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				w = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(I);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = (e, t, s) => {
				let {
					id: n,
					title: o,
					iconIdentifier: i
				} = e;
				const a = h.b[i];
				return r.a.createElement("div", {
					className: Object(c.a)(N.a.Card, {
						[N.a.unclickable]: t
					}),
					key: n,
					onClick: e => {
						e.stopPropagation(), !t && s()
					}
				}, r.a.createElement("span", {
					className: N.a.ContentContainer
				}, r.a.createElement("span", {
					className: Object(c.a)(N.a.IconContainer, {
						[N.a.completed]: t
					})
				}, t ? r.a.createElement(_.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : r.a.createElement(_.a, {
					name: a,
					className: N.a.Icon
				})), r.a.createElement("span", {
					className: N.a.CardTitle
				}, o)))
			}, R = Object(a.c)({
				isTooltipOpen: e => Object(P.a)(e) === p.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: w.c
			});
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(k.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => r.a.createElement(O.a, {
						className: N.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: this.onChangeIconFileInput
					}), this.onOpenIconUploadScreen = () => this.inputRef && this.inputRef.click(), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(C.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(C.b)(e, t))
				}
				render() {
					var e, t, s, n, o;
					const {
						isTooltipOpen: i,
						onCompleteModule: a,
						onTopBarClicked: d,
						progressModuleRecords: l,
						subredditId: m,
						subredditName: u
					} = this.props, h = l && l[m];
					if (!h) return r.a.createElement(f.a, {
						className: N.a.ThemedWidget,
						contentOnly: !0,
						headerButton: r.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, r.a.createElement(E.a, {
							className: N.a.ChevronIcon
						})),
						title: r.a.createElement("div", {
							className: N.a.ModuleTitle
						}, r.a.createElement(j.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: d
					});
					const g = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						x = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						className: Object(c.a)(N.a.ThemedWidget, {
							[N.a.completed]: g,
							[N.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: r.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, r.a.createElement(E.a, {
							className: N.a.ChevronIcon
						})),
						id: p.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: d,
						title: r.a.createElement("div", {
							className: N.a.ModuleTitle
						}, r.a.createElement(j.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName
					}, r.a.createElement("div", {
						className: N.a.ProgressContainer
					}, r.a.createElement("div", null, r.a.createElement("div", {
						className: N.a.Title
					}, g ? T._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : T._("Set up r/{subredditName}", [T._param("subredditName", u)], {
						hk: "3SHelG"
					})), r.a.createElement("div", {
						className: N.a.ProgressDescription
					}, r.a.createElement("span", {
						className: N.a.progressCount
					}, T._("{cardsComplete} of {totalCards}", [T._param("cardsComplete", null === (n = h.progress) || void 0 === n ? void 0 : n.done), T._param("totalCards", null === (o = h.progress) || void 0 === o ? void 0 : o.total)], {
						hk: "1gMzOE"
					})), " ", r.a.createElement("span", {
						className: Object(c.a)(N.a.progressText, {
							[N.a.darkFont]: x
						})
					}, T._("tasks completed", null, {
						hk: "DxeNq"
					}))), x && r.a.createElement("div", {
						className: N.a.Description
					}, T._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !g && r.a.createElement("div", {
						className: N.a.CardContainer
					}, h.cards.map(e => {
						const t = e.status === S.a.COMPLETED;
						return L(e, t, () => this.onClickCard(h, e.id))
					})), g && r.a.createElement(v.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: v.c.Tertiary
					}, T._("Close", null, {
						hk: "3UZAZk"
					})), r.a.createElement(b.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const M = Object(o.b)(R, (e, t) => ({
				onCompleteModule: () => e(Object(y.c)(t.subredditId, S.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(d.i)(x.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(u.h)({
					tooltipId: p.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = M(Object(g.c)(F))
		},
		"./src/reddit/components/ModWelcomeTooltip/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ModWelcomeTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/ModWelcomeTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModWelcomeTooltip/index.tsx"
				}
			})
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const i = Object(n.a)({
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
				a = e => o.a.createElement(i, e)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: m,
						className: u
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), d && r.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: c.a.tabGroup
				},
				m = (e, t) => {
					if (t !== n.BUTTON) return e ? c.a.active : c.a.inactive
				},
				u = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: a,
						...u
					} = e;
					return o.a.createElement("button", d({}, u, {
						className: Object(i.a)(c.a.primaryButton, l[a], m(t, a), n),
						disabled: r
					}), s)
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
				AdSupplementaryText: "NmXBiC9unWsHj0GoWydry",
				adSupplementaryText: "NmXBiC9unWsHj0GoWydry",
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
			s.d(t, "d", (function() {
				return Pt
			})), s.d(t, "b", (function() {
				return It
			})), s.d(t, "a", (function() {
				return Nt
			}));
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/objectSelector/index.ts"),
				h = s("./src/lib/pubsub/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				O = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				S = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				P = s.n(w),
				I = s("./node_modules/react-motion/lib/react-motion.js");
			const N = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				T = "expando_content",
				L = {},
				R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = P()(e, {
							key: T
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: T,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: T,
						style: {
							opacity: Object(I.spring)(1, N)
						}
					}] : [{
						key: T,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: T,
						style: {
							opacity: Object(I.spring)(0, N)
						}
					}]
				};
			class F extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), L), this.state = {
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
						content: n
					} = this.props;
					return i.a.createElement(I.TransitionMotion, {
						styles: e => R(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var M = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/models/Post/index.ts"),
				A = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/selectors/activeModalId.ts"),
				W = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/postCreations.ts"),
				z = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/showPromotedCTA.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Q = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				J = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Z = s("./src/reddit/components/Econ/Audio/async.ts"),
				X = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				$ = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				ee = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				te = s("./src/reddit/components/ExpandoButton/index.tsx"),
				se = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ne = s("./src/reddit/components/Flatlist/index.tsx"),
				re = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				oe = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				ie = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ae = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				ce = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				de = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				le = s("./src/reddit/components/ModModeReports/index.tsx"),
				me = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ue = s("./src/reddit/components/NotificationButton/index.tsx"),
				pe = s("./src/reddit/components/PostContainer/index.tsx"),
				be = s("./src/higherOrderComponents/makeAsync.tsx"),
				he = s("./src/lib/loadWithRetries/index.ts"),
				ge = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const fe = Object(be.a)({
				ErrorComponent: () => i.a.createElement(ge.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(he.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("PostCreation~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~93a1f1ba"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(ge.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var xe = e => i.a.createElement(fe, e),
				ve = s("./src/reddit/components/PostList/index.tsx"),
				Oe = s("./src/reddit/components/PostMedia/index.tsx"),
				ye = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ce = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_e = s("./src/reddit/components/PostTitle/index.tsx"),
				je = s("./src/reddit/components/PostTopLine/index.tsx"),
				Ee = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ke = s("./src/reddit/components/SourceLink/index.tsx"),
				Se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				we = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				Pe = s("./src/reddit/constants/componentSizes.ts"),
				Ie = s("./src/reddit/constants/componentTestIds.ts"),
				Ne = s("./src/reddit/constants/postLayout.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Le = s("./src/reddit/helpers/postEvent.ts"),
				Re = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Fe = s("./src/reddit/selectors/postFlair.ts"),
				Me = s("./src/reddit/models/Audio/index.ts"),
				Be = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				De = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ue = s("./src/reddit/selectors/experiments/presence.ts");
			const Ve = e => {
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: De.qg
					}) === De.Qd
				},
				He = e => {
					if (Object(Ue.a)(e)) return !1;
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: De.pg
					}) === De.Qd
				},
				ze = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(z.G)(e, {
						postId: s
					});
					return !(Object(Ue.a)(e) || !n || n.isSponsored) && Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: De.og
					}) === De.Qd
				};
			var Ke = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				qe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ge = s("./src/reddit/constants/colors.ts"),
				Ye = s("./src/reddit/icons/fonts/index.tsx"),
				Qe = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Je = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ze = s.n(Je);
			const Xe = i.a.createElement(Ye.a, {
				className: Ze.a.BlockIcon,
				name: "block"
			});
			var $e = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Qe.a, {
						className: Ze.a.bannerBase,
						color: Ge.a.dayModeActionIcon,
						icon: Xe,
						title: qe.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Ze.a.expandButton,
							onClick: t
						}, qe.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Ze.a.blockedAuthorTextWrapper
					})
				},
				et = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				tt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				st = s.n(tt);
			var nt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: r
				} = e, o = t ? Object(et.e)(n, s, r) : Object(et.f)(n, r), a = t ? Object(et.c)(n) : Object(et.d)(n, r), c = t ? Ge.a.warning : Ge.a.dayModeActionIcon, d = Object(et.a)(n);
				return i.a.createElement(Qe.a, {
					className: st.a.BannerBase,
					color: c,
					icon: d,
					subtitle: a,
					title: o
				})
			};

			function rt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(nt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var ot = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				it = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				at = s("./src/reddit/actions/modal.ts"),
				ct = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				dt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				lt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				mt = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				ut = s("./src/redditGQL/types.ts"),
				pt = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				bt = s.n(pt);
			const ht = i.a.createElement(Ye.a, {
				className: bt.a.RemoveIcon,
				name: "delete_fill"
			});
			var gt = () => i.a.createElement(Qe.a, {
					className: bt.a.bannerBase,
					color: Ge.a.dayModeActionIcon,
					icon: ht,
					title: qe.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				ft = s("./src/reddit/components/PostContent/index.m.less"),
				xt = s.n(ft),
				vt = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const {
				fbt: Ot
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = p.a.wrapped(_e.c, "PostTitle", xt.a), Ct = p.a.wrapped(te.a, "ExpandoButton", xt.a), _t = p.a.wrapped(F, "ClassicExpandoMotion", xt.a), jt = p.a.wrapped(ne.c, "FullWidthFlatlist", xt.a), Et = e => {
				var t;
				return i.a.createElement("p", {
					className: xt.a.VideoProcessingStatus
				}, (null === (t = e.post.mediaStatus) || void 0 === t ? void 0 : t.transcodingStatus) === ut.X.Error ? Ot._("The video file submitted for this post failed to process successfully.", null, {
					hk: "2ybSik"
				}) : e.isAuthorCurrentUser ? Ot._("Your video is processing. We'll send you a notification when it's done.", null, {
					hk: "1rkfJE"
				}) : null)
			}, kt = Object(Te.v)({
				isCommentsPage: Te.y,
				pageLayer: e => e
			}), St = Object(a.b)(() => Object(l.c)({
				activeModalId: D.a,
				flairStyleTemplate: Te.Y,
				currentUser: q.m,
				crosspost: z.d,
				hideNSFWPref: q.H,
				imageGalleryCurrentItem: z.i,
				isAdminOrMod: (e, t) => {
					const s = Object(z.V)(e, {
						postId: t.postId
					});
					return !!s && Object(U.c)(e, {
						subredditId: s.id
					})
				},
				isBlurredPreview: lt.b,
				isCurrentUserProfilePost: z.l,
				isExpanded: z.m,
				isFollowed: z.t,
				isFollowedExpired: z.o,
				showPromotedCTA: K.a,
				post: z.G,
				moderatorPermissions: V.m,
				modModeEnabled: Te.W,
				shouldTryToShowCrosspostModal: dt.e,
				showEditFlair: Fe.a,
				subredditOrProfile: z.V,
				isEditing: H.M,
				userIsOp: q.Fb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: ze,
				isReadingIndicatorsReadTestEnabled: He,
				isReadingIndicatorsWriteTestEnabled: Ve,
				isTypingIndicatorsExperimentEnabled: Ke.b,
				isTypingIndicatorsReadTestEnabled: Ke.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(f.fb)(n)),
					onOpenReportsDropdown: t => e(Object(S.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === A.a.upvoted ? Object(f.jb)(n) : Object(f.v)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(f.y)(t, s)),
					openPost: t => e(Object(f.K)(t)),
					onFollowPost: t => e(Object(f.ib)(n, t)),
					onFollowPostExpired: () => e(Object(f.X)({
						id: n,
						expiresAt: 0
					}))
				}
			}), wt = e => e.media && e.media.type === M.o.EMBED && e.media.provider === M.v.Imgur && e.media.height > 700, Pt = new h.a, It = "VISIBLE", Nt = "NOT_VISIBLE", Tt = e => Pt.publish(e ? It : Nt), Lt = {
				threshold: [.85, .001],
				rootMargin: `${1-Pe.f}px 0px 0px 0px`
			}, Rt = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Tt(!1), e <= .001 && Tt(!0)
				}
			}, Ft = Object(b.b)(e => ({
				renderingObjectInfo: e.post,
				pageLayer: e.pageLayer
			})), Mt = p.a.wrapped(c.a, "ThumbLink", xt.a), Bt = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: r,
					onFollowPostClick: o
				} = e;
				const a = t.source ? i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(Mt, {
					to: Object(_.b)(t.permalink)
				}, i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: xt.a.classicThumbnail
				}, n && i.a.createElement(ue.a, {
					className: xt.a.classicNotificationButton,
					isFilled: !!r,
					onClick: o,
					hasTooltip: !0,
					tooltipText: Ot._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, At = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(_t, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(Oe.a, {
						className: xt.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: t,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: n
					})),
					shouldExpand: !!s
				})
			};
			t.c = kt(St(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: c,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: h,
					isAdminOrMod: f,
					isBlurredPreview: _,
					isCommentCountAnimation: S,
					isCommentsPage: w,
					isCountAnimShadowTestEnabled: P,
					isCrosspostRecommendationsExperimentEnabled: I,
					isCurrentUserProfilePost: N,
					isEditing: T,
					isExpanded: L,
					isFollowed: R,
					isFollowedExpired: F,
					isModWithUserNotesPermissions: A,
					isOverlay: D,
					isReadingIndicatorsExperimentEnabled: U,
					isReadingIndicatorsReadTestEnabled: V,
					isReadingIndicatorsWriteTestEnabled: H,
					isTypingIndicatorsExperimentEnabled: z,
					isTypingIndicatorsReadTestEnabled: K,
					isVoteCountAnimation: q,
					moderatorPermissions: J,
					modModeEnabled: te,
					onFollowPost: ue,
					onFollowPostExpired: be,
					onIgnoreReports: he,
					onOpenReportsDropdown: ge,
					openPost: fe,
					onVoteClick: Pe,
					post: Te,
					scrollerItemRef: Fe,
					sendEvent: Ae,
					shouldTryToShowCrosspostModal: De,
					showEditFlair: We,
					showPromotedCTA: Ue,
					subredditOrProfile: Ve,
					userIsOp: He,
					pageLayer: ze
				} = e, Ke = Object(Se.b)(), qe = Object(o.useRef)(null), [Ge, Ye] = Object(o.useState)(Te.authorIsBlocked), Qe = Object(M.K)(Te), Je = Object(a.e)(e => Object(W.a)(e, {
					post: Te,
					pageLayer: ze
				})), Ze = Object(d.a)(Te), Xe = U || z, et = Xe || V || H || K, tt = !!(_ && (null == Ve ? void 0 : Ve.isNSFW));
				Object(o.useEffect)(() => {
					F && be()
				}, []);
				const st = Object(a.d)(),
					nt = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					if (I && De) return st(Object(it.a)(Te)), nt.current = setTimeout(() => {
						st(Object(at.h)(ct.a)), st(Object(it.b)())
					}, ct.b), () => {
						st(Object(it.b)()), st(Object(at.g)(ct.a)), nt.current && clearTimeout(nt.current)
					}
				}, [st, I, Te, De]), Object(Re.a)(qe, Rt, Lt);
				const dt = Te.isSponsored ? Object(ve.b)(Te.id, {
						fireAdPixelsOfType: c,
						openPost: fe
					}) : r.a,
					lt = Object(C.a)(J),
					ut = Object(O.a)(J),
					pt = Object(y.a)(J),
					bt = lt || ut,
					ht = ((e, t, s) => {
						const [n, r] = e ? [Object(v.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || r
					})(n, bt, Te),
					ft = !!Te.media && (Te.media.type === M.o.RTJSON || Te.media.type === M.o.TEXT),
					Ot = He && ft,
					_t = Object(de.a)(Te),
					kt = Object(me.c)(Te);
				let St;
				const Pt = Object(vt.a)(),
					It = !(te && lt),
					Nt = Object(ye.b)({
						hide: !Xe && It,
						editPost: !Xe && It,
						save: It,
						report: !Xe && It
					}),
					Tt = Te.removedByCategory === B.g.AuthorDeleted,
					Mt = n && (n.displayText === Te.author || n.username === Te.author),
					Dt = !!Te.unrepliableReason,
					Wt = !Ge && !Tt && !wt(Te) && (Mt || f || !(Te.removedByCategory && Te.media && (Object(M.N)(Te.media) || Object(M.L)(Te.media) || Object(M.F)(Te.media)))),
					Ut = Je && Te.source;
				let Vt;
				Te.media && Te.media.type !== M.o.TEXT && (Vt = Te.media.richtextContent);
				const Ht = Object(m.t)(Te, h),
					{
						source: zt
					} = Ht,
					Kt = Te.removedByCategory === B.g.Reddit && Object(g.e)(Te.created) > 24,
					qt = Te.removedByCategory && Te.removedByCategory !== B.g.Reddit || Kt,
					Gt = !qt && !Te.isArchived,
					Yt = Object(o.useCallback)(() => {
						ue(R ? B.f.UNFOLLOWED : B.f.FOLLOWED), Ke(R ? Object(E.q)(Te.id) : Object(E.c)(Te.id))
					}, [ue, Ke, R, Te.id]),
					Qt = i.a.createElement(i.a.Fragment, null, i.a.createElement(yt, {
						post: Te,
						innerRef: qe,
						size: _e.b.ExtraLarge,
						isOverlay: D,
						disableVisited: !0,
						isCommentsPage: !0
					}), i.a.createElement(Q.a, {
						className: xt.a.AdSupplementaryText,
						post: Te,
						size: _e.b.ExtraLarge
					})),
					Jt = i.a.createElement(ot.a, {
						post: Te,
						showViewCount: ht
					}),
					Zt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Ne.g.Classic : Object(Be.c)(n) ? Ne.g.Large : Object(Me.c)(n) ? Ne.g.Large : t || Object(B.B)(n) ? Ne.g.Large : !n.media || Object(B.q)(n) || wt(n) ? Ne.g.Medium : Ne.g.Large
					})(e),
					Xt = Object(a.e)(mt.b),
					$t = Object(oe.b)(Te),
					es = () => {
						const t = !(Dt && Ge),
							n = Object(M.J)(Te);
						return Dt && n ? i.a.createElement(gt, null) : Ge ? i.a.createElement($e, {
							onBannerClick: () => Ye(!1),
							isExpandable: Qe
						}) : Pt || !Te.source || Zt !== Ne.g.Medium || tt ? Wt && !T && Zt === Ne.g.Large ? i.a.createElement(Oe.a, {
							className: Object(u.a)(xt.a.LargePostMedia, {
								[xt.a.isCommentsPage]: w
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: D,
							isOverlay: D,
							post: Te,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !D,
							showCentered: !0,
							showPromotedCTA: Ue,
							scrollerItemRef: Fe
						}) : t && Zt === Ne.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Ct, {
							crosspost: s || void 0,
							isExpanded: !!L,
							post: Te,
							useMediaIcons: !1
						}), At(e)) : null : i.a.createElement(ke.a, {
							post: Te,
							isCommentsPage: w,
							pageLayer: ze
						})
					};
				if (Zt === Ne.g.Classic) {
					const t = !Pt && Object(x.a)(Te, Ge);
					St = i.a.createElement("div", {
						"data-test-id": Ie.e
					}, i.a.createElement(Ce.a, {
						model: Te,
						handleVote: Pe,
						isCountAnimShadowTestEnabled: P,
						isOverlay: D,
						isVoteCountAnimation: q,
						postId: Te.id
					}), i.a.createElement("div", {
						className: xt.a.mainBody
					}, i.a.createElement("div", {
						className: xt.a.content
					}, i.a.createElement(je.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!A,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Te,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Te.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Gt && !t,
						isFollowed: R,
						onFollowPostClick: Yt
					}), Qt, i.a.createElement(se.a, {
						className: w ? xt.a.leftPadding : void 0,
						post: Te,
						sendEvent: Ae
					}), Ut && Vt && i.a.createElement(re.a, {
						content: Vt,
						rtJsonElementProps: Ft(e)
					}), te && lt && kt && i.a.createElement(le.a, {
						onIgnoreReports: he,
						reportable: Te
					}), i.a.createElement(ie.d, null), i.a.createElement("div", {
						className: xt.a.FlatlistContainer
					}, es(), i.a.createElement(jt, {
						currentUser: n,
						hasModFlairPerms: ut,
						hasModFullPerms: pt,
						hasModPostPerms: lt,
						isOverlay: D,
						onIgnoreReports: he,
						onOpenReportsDropdown: ge,
						modModeEnabled: te,
						post: Te,
						showUpvotePercent: !0,
						showViewCount: ht,
						useFlatlistBreakpoints: Nt,
						isCommentCountAnimation: S,
						isCountAnimShadowTestEnabled: P
					}))), t && i.a.createElement(Bt, {
						post: Te,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Gt,
						isFollowed: R,
						onFollowPostClick: Yt
					})))
				} else if (Zt === Ne.g.Medium) {
					const t = !Pt && Object(x.a)(Te, Ge);
					St = i.a.createElement("div", {
						"data-test-id": Ie.e
					}, i.a.createElement(Ce.a, {
						model: Te,
						handleVote: Pe,
						isCountAnimShadowTestEnabled: P,
						isOverlay: D,
						shouldShowUpvoteRatioOnHover: Xe,
						isVoteCountAnimation: q,
						postId: Te.id
					}), i.a.createElement("div", {
						className: xt.a.mainBody
					}, i.a.createElement("div", {
						className: xt.a.content
					}, i.a.createElement(je.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!A,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Te,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Te.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Gt && !t,
						isFollowed: R,
						onFollowPostClick: Yt
					}), Qt, es(), Object(M.P)(Te) && i.a.createElement(Et, {
						post: Te,
						isAuthorCurrentUser: !!Mt
					}), i.a.createElement(se.a, {
						className: w ? xt.a.leftPadding : void 0,
						post: Te,
						sendEvent: Ae
					}), Ve && qt && i.a.createElement(rt, {
						isAdminOrMod: f,
						post: Te,
						subredditOrProfile: Ve
					}), te && lt && kt && i.a.createElement(le.a, {
						onIgnoreReports: he,
						reportable: Te
					})), t && !Ze && i.a.createElement(ae.a, {
						post: Te,
						forceShowNSFW: !0,
						hasModPostPerms: bt,
						isCommentsPage: w,
						isOverlay: !0,
						modModeEnabled: te,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Gt,
						isFollowed: R,
						onFollowPostClick: Yt
					})), Ut && Vt && !qt && i.a.createElement(re.a, {
						content: Vt,
						rtJsonElementProps: Ft(e)
					}), i.a.createElement(ie.d, null), !!Xt && i.a.createElement(k.a, {
						itemIds: $t,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Te,
						size: "small"
					}), i.a.createElement("div", {
						className: xt.a.controlsContainer
					}, i.a.createElement(ne.c, {
						currentUser: n,
						hasModFlairPerms: ut,
						hasModFullPerms: pt,
						hasModPostPerms: lt,
						isOverlay: D,
						modModeEnabled: te,
						onIgnoreReports: he,
						onOpenReportsDropdown: ge,
						post: Te,
						showEditPost: Ot,
						showEditFlair: We,
						tooltipType: D ? Ee.f.Lightbox : void 0,
						useFlatlistBreakpoints: Nt,
						isCommentCountAnimation: S,
						isCountAnimShadowTestEnabled: P,
						shouldHideItems: Xe
					}), et && i.a.createElement(we.a, {
						isReadingIndicatorsExperiment: U,
						isReadingIndicatorsReadLoadTest: V,
						isReadingIndicatorsWriteLoadTest: H,
						isTypingIndicatorsExperiment: z,
						isTypingIndicatorsReadLoadTest: K,
						postId: Te.id
					}), !Xe && Jt))
				} else Zt === Ne.g.Large && (St = i.a.createElement("div", {
					"data-test-id": Ie.e
				}, i.a.createElement(Ce.a, {
					model: Te,
					handleVote: Pe,
					isCountAnimShadowTestEnabled: P,
					isOverlay: D,
					shouldShowUpvoteRatioOnHover: Xe,
					isVoteCountAnimation: q,
					postId: Te.id
				}), Object(Be.c)(Te) && i.a.createElement(i.a.Fragment, null, i.a.createElement($.a, {
					post: Te
				}), i.a.createElement(X.a, {
					post: Te
				})), !Object(Be.c)(Te) && i.a.createElement(i.a.Fragment, null, i.a.createElement(je.a, {
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: w,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: !!A,
					isOverlay: !!D,
					isTopicPage: !1,
					post: Te,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!D && !Te.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ve,
					shouldShowFollowButton: Gt,
					isFollowed: R,
					onFollowPostClick: Yt
				}), Qt, ((e, t, s, n) => !Pt && e.source && !t && (s || n))(Te, s, D, w) && !tt && i.a.createElement(ke.a, {
					post: Te,
					isCommentsPage: w,
					pageLayer: ze
				})), i.a.createElement(se.a, {
					className: w ? xt.a.leftPadding : void 0,
					post: Te,
					sendEvent: Ae
				}), Ve && qt && i.a.createElement(rt, {
					isAdminOrMod: f,
					post: Te,
					subredditOrProfile: Ve
				}), T && i.a.createElement(xe, {
					post: Te
				}), es(), Ue && zt && zt.url && !Te.isSurveyAd && i.a.createElement(G.a, {
					className: xt.a.adLinkWrapper
				}, i.a.createElement(Y.a, {
					post: Te,
					adLinkContent: Ht
				})), te && lt && _t && i.a.createElement("div", {
					className: xt.a.modModeBannerWrapper
				}, i.a.createElement(ce.a, {
					thing: Te
				})), te && lt && kt && i.a.createElement("div", {
					className: xt.a.modModeBannerWrapper
				}, i.a.createElement(le.a, {
					onIgnoreReports: he,
					reportable: Te
				})), Object(Me.c)(Te) && i.a.createElement(Z.a, {
					post: Te
				}), i.a.createElement(ie.d, null), !!Xt && i.a.createElement(k.a, {
					itemIds: $t,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Te,
					size: "small"
				}), i.a.createElement("div", {
					className: xt.a.controlsContainer
				}, i.a.createElement(ne.c, {
					currentUser: n,
					forceOpenInNewTab: p,
					hasModFlairPerms: ut,
					hasModFullPerms: pt,
					hasModPostPerms: lt,
					isOverlay: D,
					modModeEnabled: te,
					onIgnoreReports: he,
					onOpenReportsDropdown: ge,
					post: Te,
					showEditPost: Ot,
					showEditFlair: We,
					tooltipType: D ? Ee.f.Lightbox : void 0,
					useFlatlistBreakpoints: Nt,
					isCommentCountAnimation: S,
					isCountAnimShadowTestEnabled: P,
					shouldHideItems: Xe
				}), et && i.a.createElement(we.a, {
					isReadingIndicatorsExperiment: U,
					isReadingIndicatorsReadLoadTest: V,
					isReadingIndicatorsWriteLoadTest: H,
					isTypingIndicatorsExperiment: z,
					isTypingIndicatorsReadLoadTest: K,
					postId: Te.id
				}), !Xe && Jt)));
				const ts = Object(o.useCallback)((e, t) => Object(E.k)(e, t), []);
				return i.a.createElement(pe.b, {
					className: Object(u.a)(t, xt.a.postContainer, {
						[xt.a.hasEventMeta]: Object(Le.a)(Te)
					}),
					isOverlay: D,
					post: Te,
					eventFactory: D ? j.b : ts,
					onClick: dt
				}, i.a.createElement(ee.a, {
					post: Te
				}), St)
			}))
		},
		"./src/reddit/components/PostDetailStickyHeader/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDetailStickyHeader",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("PostDetailStickyHeader").then(s.bind(null, "./src/reddit/components/PostDetailStickyHeader/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PostDetailStickyHeader/index.tsx"
					}
				}),
				d = e => {
					const t = Object(i.e)(a.c),
						s = Object(i.e)(a.a);
					return t || s ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: g,
					isOverlay: f,
					isVoteCountAnimation: x,
					postId: v,
					shouldShowUpvoteRatioOnHover: O
				} = e, y = `upvote-button-${t.id}${f?"-overlay":""}`;
				return r.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && r.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), r.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: y,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
			}
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
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				g = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				S = s.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: k,
					hostPostData: w,
					iconClassName: P,
					inSubredditOrProfile: I,
					isCommentsPage: N,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: L,
					isModQueuePage: R,
					isModWithUserNotesPermissions: F,
					isOverlay: M,
					isTopicPage: B,
					listingKey: A,
					post: D,
					shouldShowSubscribeButton: W,
					showCornerOutboundLink: U,
					showSubreddit: V,
					showSubredditIcon: H,
					subredditOrProfile: z,
					isFollowed: K,
					shouldShowFollowButton: q,
					onFollowPostClick: G
				} = e;
				const Y = B,
					Q = z && Object(_.i)(z),
					J = Object(i.e)(e => {
						if (!Q) return !0;
						const t = Object(E.Ib)(e, D.author || "");
						return !t || t.enableFollowers
					}),
					Z = Object(i.e)(j.a);
				return o.a.createElement("div", {
					className: Object(a.a)(S.a.container, t)
				}, V && z && o.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, o.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: z.url
				}, H && o.a.createElement(b.b, {
					className: Object(a.a)(S.a.subredditIcon, P),
					shouldHideNsfwIcon: k,
					subredditOrProfile: z
				}))), o.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, V && o.a.createElement(l.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), o.a.createElement(p.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: F,
					tooltipType: M ? p.f.Lightbox : void 0,
					post: D,
					showSub: V,
					subredditOrProfile: z
				}), o.a.createElement(u.a, {
					className: S.a.postBadges,
					displayText: z ? z.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: T,
					post: D,
					tooltipType: M ? p.f.Lightbox : void 0
				}), !Y && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: D,
					tooltipType: M ? p.f.Lightbox : void 0
				}), F && o.a.createElement(d.a, {
					postOrComment: D,
					className: S.a.addModNote
				})), z && J && V && W && !L && o.a.createElement(g.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(O.k)(D.id, e ? "unsubscribe" : "subscribe", "post", A, w),
					identifier: {
						name: z.name,
						type: Q ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: D.id,
					size: x.d.XS,
					priority: Z ? x.c.Secondary : void 0,
					isShredditParityEnabled: Z
				}), U && o.a.createElement(v.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(C.D)(D),
					source: D.source
				}, o.a.createElement(y.a, {
					className: S.a.outboundLinkIcon
				})), q && J && o.a.createElement(m.a, {
					isFilled: !!K,
					onClick: G,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/PostUnavailableBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_3pCwayT6l9aM5Uh9YuCXeP",
				RemoveIcon: "YKKq2c1RnR-x1pamdskkg",
				removeIcon: "YKKq2c1RnR-x1pamdskkg"
			}
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				p = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				y = s("./src/reddit/helpers/postCollection.ts"),
				C = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				S = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				w = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				I = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				N = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/lib/classNames/index.ts"),
				F = s("./src/reddit/constants/listings.ts"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				B = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				D = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				W = s.n(D);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var V = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldShowNsfwListingBelow: r,
						subredditOrProfile: o
					} = e, {
						primaryColor: i
					} = o;
					let c = null,
						d = o.url;
					return r ? (d = F.c[F.b.Popular], c = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : c = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(B.d)(o.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", o.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(M.default, {
						className: Object(R.a)(W.a.footer, t),
						onMouseDown: s,
						to: d,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: W.a.background
					}), a.a.createElement("div", {
						className: W.a.layout
					}, c, a.a.createElement(A.a, {
						className: W.a.arrow
					})))
				}),
				H = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				z = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				K = s.n(z);
			const q = Object(d.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, k.a, S.b, (e, t, s) => !((!t || s) && e)),
				G = Object(d.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(y.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.R, L.S, E.d, q, (e, t, s, n, r, o) => !t && !s && !n && !r && !e && o),
				Y = Object(d.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, w.b, P.c, T.ab, T.kb, (e, t, s, n, r) => {
					const o = !!e;
					let i, a = "";
					if (e && (i = {
							hostPostId: e.id,
							shouldShowLinkedPosts: !1,
							subreddit: r
						}), (s || t) && e && o) {
						const {
							id: t
						} = e;
						a = Object(u.a)(t), i = {
							canonicalUrl: n.canonical_url,
							baseUrl: n.base_url,
							hostPostId: t,
							shouldShowLinkedPosts: !Object(x.Ag)(s) && !Object(P.a)(s),
							subreddit: r
						}
					}
					return {
						hostPostData: i,
						isEligibilityLoaded: o,
						listingBelowVariant: s,
						linkedPostsListingKey: a
					}
				}),
				Q = Object(d.c)({
					isD2xPdpSideRailRecsEnabled: w.b,
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: I.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: N.b
				}),
				J = Object(c.b)(Q, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.bb.HOT,
						subredditName: t
					}))
				}));
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.e) : null, this.onViewed = (e, t) => Object(j.f)({
						key: this.listingKey(),
						sort: l.bb.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.oc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(_.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						isD2xPdpSideRailRecsEnabled: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: n,
						shouldShowNsfwListingBelow: r,
						subredditOrProfile: o
					} = this.props;
					return s || e ? t : r && n && n.id ? Object(H.a)(n.id) : Object(p.a)(o.name, l.bb.TOP, {
						t: l.oc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: r,
						theme: o
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: c,
						listingBelowVariant: d
					} = e;
					if (d && !Object(x.Ag)(d) && !Object(P.a)(d) && !i) return a.a.createElement("div", {
						className: K.a.smallBanner
					});
					const {
						name: l
					} = r, m = Object(C.a)(o.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == c ? void 0 : c.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(P.b)(d) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Qe.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: K.a.smallBanner,
						style: {
							color: m
						}
					}, u)
				}
				render() {
					const {
						contentContainerRef: e,
						isD2xPdpSideRailRecsEnabled: t,
						listingBelowLinkedPostsData: s,
						shouldShowListingBelow: n,
						shouldShowNsfwListingBelow: r,
						subredditOrProfile: i
					} = this.props, {
						hostPostData: c,
						listingBelowVariant: d
					} = s;
					if (!n) return null;
					const l = !!(null == c ? void 0 : c.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: K.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: K.a.postList,
						disablePlaceholder: !0,
						forcedLayout: O.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: c,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: v.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: K.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						skipSubredditPosts: t ? 15 : 0,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: K.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: l,
						shouldShowNsfwListingBelow: r,
						subredditOrProfile: i
					}))
				}
			}
			t.a = J(Object(m.a)(Object(g.c)(Z)))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: c
				} = e;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(d.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				ctaExperiment: "_1fSEjc0jhvt02_0z07145y",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemWarningContainer: "_1nfcZWg35_OmccxqivQ1EN",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				titleMedium: "_1FT0e6kh1BBb_oALAMW_l7",
				titleTextColor: "_1-SZ3VwLjbFwTzaZvU8FBX",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				blurred: "rIj9lvusQvb0-Mf16X6ZL",
				container: "PrfaR-luawcEBK2dhGuDp",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH",
				paddingRight: "_1yBpz1MEPxxYTxjlEilGtB",
				postTitleVisibility: "_1SAKlLic4t9BBtiiE-Z6ob",
				postTitleColors: "nbO8VWsMIB-Mv-tIa37NF",
				backgroundWrapper: "UcytmAhLeRTIrWR81xl4P",
				inline: "_1AKeAGcglmBjK1SUUXNFti"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return z
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				m = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				u = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				x = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				v = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				O = s("./src/reddit/components/SearchWarnings/index.tsx"),
				y = s("./src/reddit/components/Thumbnail/index.tsx"),
				C = s("./node_modules/react-redux/es/index.js"),
				_ = s("./node_modules/reselect/es/index.js"),
				j = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/poll/index.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const N = {
					crosspost: P.d,
					isActive: P.j,
					isLoggedIn: I.S,
					moderatorPermissions: k.m,
					modModeEnabled: E.W,
					poll: S.e,
					showEditFlair: w.a,
					flairStyleTemplate: E.Y
				},
				T = () => Object(_.c)(N);
			var L = s("./src/reddit/contexts/Post/index.tsx"),
				R = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = s("./src/reddit/models/Media/index.ts"),
				A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				W = s("./src/reddit/components/SearchPost/index.m.less"),
				U = s.n(W);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: i,
						first: C,
						flairStyleTemplate: _,
						isLoggedIn: j,
						isOverlay: E,
						moderatorPermissions: k,
						modModeEnabled: S,
						onClickPost: w,
						onClickPostAuthor: P,
						onClickPostCommunity: I,
						onIgnoreReports: N,
						poll: T,
						post: L,
						redditStyle: W,
						searchQuery: H,
						showBulkActionCheckbox: z,
						subredditOrProfile: K,
						title: q
					} = e, G = W ? void 0 : _, Y = s || void 0, Q = Object(F.a)(k), J = Object(m.a)(L), Z = Object(p.c)(L), X = Object(y.c)({
						crosspost: s,
						post: L,
						url: void 0,
						usePreview: !1
					}), $ = X && Object(A.a)(X), ee = !!L.media && Object(B.I)(L.media), te = !j, se = Object(n.useMemo)(() => q ? void 0 : Object(D.a)(H, e => r.a.createElement("span", {
						className: Object(o.a)(U.a.syntaxHighlight)
					}, e), e => e), [q, H]), ne = {
						flairStyleTemplate: G,
						isOverlay: E,
						onClickPostAuthor: P,
						onClickPostCommunity: I,
						post: L,
						shouldShowSubscribeButton: te,
						subredditOrProfile: K
					}, re = null != q ? q : r.a.createElement("div", {
						className: Object(o.a)(U.a.paddingSide, U.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(g.c, {
						format: se,
						hideSourceLink: !0,
						poll: T,
						post: L,
						redditStyle: !0,
						size: g.b.Medium,
						isOverlay: E,
						hideNSFWSpoilerFlair: !0
					}), L.source && !Y && r.a.createElement(R.a, {
						className: U.a.outboundLink,
						href: L.source.url,
						isSponsored: L.isSponsored,
						postId: L.id,
						source: L.source
					}, Object(a.a)(L))), $ && r.a.createElement("div", {
						className: U.a.thumbnailContainer
					}, r.a.createElement(y.b, {
						className: U.a.thumbnail,
						crosspost: Y && L,
						isMeta: L.isMeta,
						post: Y || L,
						redditStyle: W,
						templatePlaceholderImage: G && G.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.b, {
						className: Object(o.a)(U.a.postContainer, Object(M.a)(e), C ? U.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: E,
						onClick: w,
						post: L,
						style: {
							...Object(M.d)(e),
							...Object(M.b)(G)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: G,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: U.a.eventMeta,
						post: L
					}), r.a.createElement("div", {
						className: Object(o.a)(U.a.postContent, {
							[U.a.showBulkActionCheckbox]: z
						}),
						"data-click-id": "body"
					}, r.a.createElement(v.c, V({
						className: Object(o.a)(U.a.paddingSide, U.a.postItemMetaContainer),
						key: "PostMeta"
					}, ne)), r.a.createElement(O.a, {
						className: Object(o.a)(U.a.paddingSide, U.a.postItemWarningContainer),
						isSpoiler: L.isSpoiler,
						isNSFW: L.isNSFW,
						isQuarantined: null == K ? void 0 : K.isQuarantined
					}), re, S && Q && J && r.a.createElement(l.a, {
						thing: L
					}), S && Q && Z && r.a.createElement(u.a, {
						onIgnoreReports: N,
						reportable: L
					}), r.a.createElement(x.c, {
						className: Object(o.a)(U.a.paddingSide, U.a.postItemFlatlistContainer),
						post: L
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(f.b, null, oe)
				}),
				z = Object(L.b)((e => t => {
					const s = Object(E.gb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(j.fb)(s))
							}
						})(Object(C.d)(), {
							...t
						}),
						o = Object(E.cb)(s),
						i = Object(C.e)(T),
						a = {
							...t,
							...i,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, a)
				})(H))
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(d.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(a.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				u = e => {
					let {
						awardCountsById: t,
						awardingsTotal: s
					} = e;
					const r = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(a.b)(r)), n.fbt._plural(r)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(l, {
					className: s
				}, o.a.createElement(m, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(i.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(a.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(u, {
					awardCountsById: t.awardCountsById,
					awardingsTotal: t.awardingsTotal
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				crosspostIcon: "_1-Dnj_BC9slzHImx9Qex6x",
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				enlargedSubredditName: "_2QZLJe3l7lBGN9JNI51gn9",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				enlargedSubredditIcon: "_3dUPuwEf-ssCOozUxvm-HX",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				metadataFont: "_3zxBrqnz24HT1z7OOcRXCS",
				metaSpacer: "_3-fo1J0EWS8TawiUkoZ9DH",
				defaultCommunityIcon: "_3hvmfTpZq_W24eaylznBmS",
				mNightmode: "_15ad3usdVw8bRqdw2I-vhN",
				blur: "_35xBFzll_c4A2_N9fEuuuY",
				contents: "_3d8GzWNAiVF7ncwmjHXlNf"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				g = s.n(h);
			const f = "subreddit_icon_link",
				x = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: v,
					subredditOrProfile: O,
					tooltipType: y
				} = e, C = Object(u.a)(), {
					isSubEnlarged: _
				} = Object(i.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, g.a.metaContainer)
				}, !v.isSponsored && O && o.a.createElement(a.a, {
					className: Object(n.a)(g.a.hovercardContainer, g.a.hovercardContainer),
					postId: v.id,
					subredditName: O.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(g.a.subredditIcon, _ && g.a.enlargedSubredditIcon),
					linkTo: O.url,
					linkProps: h ? {
						"data-testid": f,
						onClick: h
					} : void 0,
					subredditOrProfile: O
				}), o.a.createElement(l.a, {
					className: Object(n.a)(g.a.subredditName, _ && g.a.enlargedSubredditName),
					"data-testid": x,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: O.url,
						state: C
					}
				}, O.displayText)), !v.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(c.h, {
					type: v.belongsTo.type,
					id: v.belongsTo.id
				})), o.a.createElement(d.g, {
					className: g.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: v,
					tooltipType: y
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				commentContainer: "_2lwxooVpRNqH_bjx-Nm4m4",
				postTitleContainer: "_1nhxJR41hD8jXWqUVy3wTT",
				postTitle: "_1HsM08P8HBGOIPATQsthMA",
				commentContent: "_1i_lg5WToFS_KM8bSao5FB",
				commentAuthor: "q6Rzyt18sGpgOFFoG9gUg",
				commentFlatlist: "_3bkDvRYnc0SodO59dk5n3p",
				goToThreadLinkButton: "_3Yys9Taiw4B3XiXhmbLrra",
				mediaIcon: "_14gjyiBw0XSVan9XLN7ER-"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2u_haOaI877DTCSOfFouuF",
				commentContainer: "_2Uv1IcU4LjDH6OqbNZ0BwO",
				comment: "yNjWq2s_3V0N5m9u-Bx-D",
				link: "-fCtQc5X_zwd1tnX_0s4W",
				linkContainer: "tSwYm_NW9-rD1G91vZi4d"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const m = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: c.a.postContent
			}, r.a.createElement("div", {
				className: c.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditName, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: c.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_3BWq3z8_9gA3oThgYXnngR",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH",
				warnings: "_1QstT010Ns0i6YkU4n5O25"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(a);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73",
				padding: "_2LEtmNuEePPvFdDfwPmBcx"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				c = s("./src/reddit/controls/Search/SearchBar/index.tsx"),
				d = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				l = s("./src/reddit/helpers/trackers/searchResults.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/pages/SearchResults/index.tsx"),
				p = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = `${n.a.assetPath}/img/telescope-snoo.png`;
			var f;

			function x(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = c.a,
					searchOptions: p,
					tab: f
				} = e;
				const x = Object(m.a)();
				Object(o.useEffect)(() => {
					x(Object(l.o)(s, p))
				}, [s]);
				const v = p.restrict_sr || u.pageConfig[f].sidebar,
					O = n === a.a;
				return i.a.createElement("div", {
					className: Object(r.a)(O && b.a.padding)
				}, i.a.createElement("div", {
					className: Object(r.a)(b.a.noResults, v && b.a.withSidebar),
					"data-testid": "no-results"
				}, i.a.createElement("img", {
					alt: h._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: g,
					className: b.a.image
				}), i.a.createElement("h2", {
					className: b.a.header
				}, h._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), h._("{search query}", [h._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), i.a.createElement("p", {
					className: b.a.text
				}, h._("Double-check your spelling or try different keywords to {=adjust your search}", [h._param("=adjust your search", i.a.createElement("button", {
					className: b.a.button,
					onClick: () => {
						var e;
						const t = document.querySelector(`input[type="search"][id=${n}]`);
						t || null === (e = document.getElementById(a.b)) || void 0 === e || e.click(), d.b.set(d.a.ADJUST_SEARCH_BUTTON), null == t || t.focus(), null == t || t.select()
					}
				}, h._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				}))))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(f || (f = {}))
		},
		"./src/reddit/components/SearchResultsContent/PdpComment/index.m.less": function(e, t, s) {
			e.exports = {
				actionFont: "GdWkLdr7ToYAI7A1BuDdw",
				commentContent: "_2UJq3kiv6y_oSPPmQyFMxy",
				commentContainer: "_2nHutt97wCf1b9Txz8_Y67",
				first: "B1l5QN6o0c-5KGYHlANBw",
				iconSpacer: "vz6ezPSNwnMTVPF3HcJiw",
				leftSpacer: "_6PV9rgxHCsT7DD2OrVvJ0",
				marginTop: "_3jLdjJWF8IlmuZ7sysSq0g",
				marginContainer: "_3KLHXM3DEshAA3TDpGD_4a",
				metadataColor: "tuXecQytAjq5ReXeDFhPI",
				metadataFont: "_3bUukUiGtOzLXmGTBi1yXx",
				flex: "_3SUyRHeYoSqKJ0It_8jTAQ",
				separator: "_1UhP-2TSDqqzDUVoNfS4Nm",
				pdpUserIcon: "_3DCfB-ynh0K_m_xbYTL_Ne"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchPdpComments/index.m.less": function(e, t, s) {
			e.exports = {
				actionFont: "_3YO4K3yksC9xgvi4mQKYCO",
				bodySmall: "_1IiVmJGunQFDDo5CqSj2ud",
				flex: "_2IN7-71tvGQwNHh4GbHoXP",
				marginContainer: "_3AR3SCORiJ1YZwXmwHK9wz",
				paddingContainer: "Juhx_BGoavuj8fSl22xEj",
				truncate: "_1nweqL_PkreclINbtmmHgr",
				verticalDivider: "fkef5ZJjs6gmKJbkSmGtT"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchPdpComments/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				d = s("./src/reddit/constants/page.ts"),
				l = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				m = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/hooks/usePageLayer.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				x = s("./node_modules/lodash/constant.js"),
				v = s.n(x),
				O = s("./node_modules/lodash/times.js"),
				y = s.n(O),
				C = s("./src/reddit/components/Comments/States/index.tsx"),
				_ = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				j = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				E = s.n(j);
			const k = e => {
				const {
					commentsPageKey: t,
					listingKey: s,
					searchOptions: n,
					originElement: r
				} = e, o = Object(a.e)(e => Object(h.d)(e, {
					listingKey: s
				})), c = Object(a.e)(e => Object(h.u)(e, {
					listingKey: s
				})), d = Boolean(c && c.token) && o.length > 0;
				return i.a.createElement("div", {
					className: E.a.container,
					"data-testid": "pdp-comments-list"
				}, i.a.createElement(_.b, {
					identifiers: o,
					listingKey: s,
					pageKey: t,
					searchOptions: n,
					componentType: _.c.PdpComments,
					originElement: r
				}), d && i.a.Children.toArray(y()(3, v()(i.a.createElement(C.a, null)))))
			};
			var S = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx"),
				w = s("./src/reddit/components/SearchResultsContent/SearchPdpComments/index.m.less"),
				P = s.n(w);
			const I = "view_all_comments_link",
				N = "back_to_pdp_comments_results";

			function T(e) {
				var t;
				const {
					commentsPageKey: s,
					isOverlay: o,
					post: x,
					listingKey: v,
					searchOptions: O
				} = e, y = Object(b.a)(), C = Object(p.a)(), _ = Object(a.e)(e => Object(h.m)(e, {
					listingKey: v
				}));
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(r.a)(P.a.flex, P.a.marginContainer, P.a.paddingContainer)
				}, i.a.createElement("p", {
					"data-testid": N,
					className: Object(r.a)(P.a.bodySmall, P.a.truncate)
				}, n.fbt._('Comments with "{current search query}"', [n.fbt._param("current search query", (null == O ? void 0 : O.q) || "")], {
					hk: "21uw6n"
				})), i.a.createElement("span", {
					className: P.a.verticalDivider
				}, "|"), i.a.createElement(c.a, {
					className: Object(r.a)(P.a.actionFont),
					"data-testid": I,
					isOverlay: o,
					to: {
						pathname: Object(m.b)(x.permalink),
						state: {
							...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state
						}
					},
					onClick: function() {
						y(Object(u.l)(x.id, void 0, C))
					}
				}, n.fbt._("All Comments", null, {
					hk: "4hJcyz"
				})), i.a.createElement("span", {
					className: P.a.verticalDivider
				}, "|")), i.a.createElement("div", null, i.a.createElement(S.a, {
					hasResults: _,
					searchBarId: l.a,
					searchOptions: O,
					noResultsType: f.b.Comments,
					searchResultsTab: d.h.Comments,
					listingKey: v,
					pendingSelector: h.f
				}, i.a.createElement(k, {
					commentsPageKey: s,
					listingKey: v,
					searchOptions: O,
					key: d.h.Comments,
					originElement: g.a.SearchBar
				}))))
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return It
			})), s.d(t, "c", (function() {
				return Ft
			})), s.d(t, "b", (function() {
				return Bt
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Comments/States/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/config.ts"),
				g = s("./node_modules/lodash/noop.js"),
				f = s.n(g),
				x = s("./node_modules/polished/dist/polished.es.js"),
				v = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				y = s.n(O),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/isUrl/index.ts"),
				E = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/components/FlairList/index.tsx"),
				S = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				P = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				L = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				B = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				A = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				W = s("./src/reddit/hooks/useTheme.ts"),
				U = s("./src/reddit/icons/fonts/index.tsx"),
				V = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				K = s("./src/reddit/components/AuthorLink/index.tsx"),
				q = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				G = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				Y = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				Q = s("./src/reddit/components/PostTopMeta/index.tsx"),
				J = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				Z = s.n(J);

			function X(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, c = Object(a.e)(H.fb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = d ? i.a.createElement("img", {
					alt: I.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : i.a.createElement(U.a, {
					name: "community",
					isFilled: !c,
					className: Object(_.a)(Z.a.defaultCommunityIcon, s, c && Z.a.mNightmode)
				}), i.a.createElement(F.default, {
					className: Z.a.contents,
					"data-testid": z.a,
					onClick: r,
					to: {
						pathname: o.url,
						state: n
					}
				}, m)
			}

			function $(e) {
				const {
					post: t,
					onClickPostAuthor: s
				} = e, n = Object(D.a)(Q.e), r = t.crosspostRootId ? I.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : I.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return i.a.createElement("div", {
					className: Z.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(U.a, {
					name: "crosspost",
					className: Object(_.a)(Z.a.crosspostIcon, Z.a.metaSpacer)
				}), i.a.createElement("span", {
					className: Z.a.metaSpacer
				}, r), i.a.createElement(q.b, {
					postOrComment: t
				}, i.a.createElement(K.a, {
					author: t.author,
					className: Z.a.metaSpacer,
					isAuthorDeleted: t.author === d.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": C.a.USER,
						"data-testid": Q.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: Z.a.flairContainer
				}, i.a.createElement(N.b, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: Z.a.timestamp,
					"data-testid": Q.c,
					"data-click-id": C.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, i.a.createElement(Y.a, {
					seconds: t.createdAt / d.Xb
				})), i.a.createElement(B.a, null, i.a.createElement(L.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(G.a, {
					seconds: t.createdAt / d.Xb
				})))))
			}

			function ee(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: r,
					post: o,
					subredditOrProfile: c
				} = e, d = Object(A.a)(), {
					isSubEnlarged: l
				} = Object(a.e)(V.a), m = Object(W.a)();
				return i.a.createElement("div", {
					className: Object(_.a)(t, Z.a.metaContainer, Z.a.metadataFont)
				}, !o.isSponsored && c && i.a.createElement(T.a, {
					className: Object(_.a)(Z.a.hovercardContainer, Z.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, i.a.createElement(X, {
					className: Object(_.a)(Z.a.subredditIcon, l && Z.a.enlargedSubredditIcon),
					"data-click-id": C.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), i.a.createElement(F.default, {
					className: Object(_.a)(Z.a.subredditName, l && Z.a.enlargedSubredditName),
					"data-testid": z.b,
					"data-click-id": C.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && i.a.createElement(i.a.Fragment, null, i.a.createElement(M.b, null), i.a.createElement(R.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), i.a.createElement(M.b, null), i.a.createElement($, {
					className: Z.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: m
				}))
			}
			var te = s("./src/reddit/components/SearchWarnings/index.tsx"),
				se = s("./src/reddit/components/SEOTitle/index.tsx"),
				ne = s("./src/reddit/components/SEOTitle/constants.ts"),
				re = s("./src/reddit/components/Thumbnail/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/index.tsx"),
				de = s("./src/reddit/helpers/clickSourceData/index.ts"),
				le = s("./src/reddit/helpers/overlay/index.ts"),
				me = s("./src/reddit/helpers/path/index.ts"),
				ue = s("./src/reddit/helpers/trackers/searchResults.ts"),
				pe = s("./src/reddit/hooks/usePageLayer.ts"),
				be = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				he = s("./src/reddit/selectors/searchResults.ts"),
				ge = s("./src/telemetry/models/Outbound.ts"),
				fe = s("./src/reddit/components/SearchPost/index.m.less"),
				xe = s.n(fe);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = "post-title";

			function ye(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, a = s ? ne.a.PostComments : ne.a.PostItem, c = Object(A.a)(), d = Object(E.a)(n.permalink, void 0, c), l = Object(W.a)(), m = Object(o.useMemo)(() => Object(ie.a)(r, e => i.a.createElement("span", {
					className: Object(_.a)(xe.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return i.a.createElement("div", {
					className: Object(_.a)(n.id, xe.a.postTitleColors),
					"data-adclicklocation": C.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${xe.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(x.c)(.45,Object(be.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(x.c)(.45,Object(be.a)({theme:l}).titleText,Object(be.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(x.c)(.45,Object(be.a)({theme:l}).bodyText,Object(be.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: xe.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: xe.a.titleContainer
				}, i.a.createElement(v.a, {
					to: d
				}, i.a.createElement("div", {
					className: Object(_.a)(xe.a.inline, xe.a.titleTextColor, xe.a.titleMedium, xe.a.paddingRight),
					"data-testid": Oe,
					style: {
						"--posttitletextcolor": Object(be.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(se.b, {
					type: a
				}, m))), n.flair && i.a.createElement(k.a, {
					className: xe.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function Ce(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(re.a, {
						alt: e.post.title,
						className: Object(_.a)(xe.a.thumbnail, n && xe.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: xe.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(j.a)(o) && !e.post.media ? i.a.createElement(ce.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: ge.SourceElement.PostImage
				}, a) : a)
			}
			var _e = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				je = s("./src/reddit/constants/elementIds.ts"),
				Ee = s("./src/reddit/helpers/trackers/screenview.ts"),
				ke = s("./src/reddit/selectors/platform.ts"),
				Se = s("./src/reddit/selectors/tracking.ts"),
				we = s("./src/telemetry/index.ts"),
				Pe = s("./src/telemetry/models/Timer.ts"),
				Ie = s("./node_modules/react-router-redux/es/index.js"),
				Ne = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Te = s("./src/reddit/components/PostList/index.tsx"),
				Le = s("./src/reddit/components/PostTitle/index.tsx"),
				Re = s("./src/reddit/components/SearchPost/index.tsx"),
				Fe = s("./src/reddit/connectors/PostList/index.ts"),
				Me = s("./src/reddit/contexts/Visibility.tsx"),
				Be = s("./src/reddit/controls/Button/index.tsx"),
				Ae = s("./src/reddit/controls/Button/index.m.less"),
				De = s.n(Ae),
				We = s("./src/reddit/hooks/useTracking.ts"),
				Ue = s("./src/reddit/selectors/comments.ts"),
				Ve = s("./src/reddit/selectors/commentSelector.ts"),
				He = s("./src/reddit/selectors/posts.ts");

			function ze(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(P.b, {
					className: t
				}, i.a.createElement(P.d, {
					score: s.score
				}), i.a.createElement(P.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var Ke = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				qe = s.n(Ke);
			var Ge;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(Ge || (Ge = {}));
			var Ye = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Qe = s("./src/lib/truncateText/index.ts"),
				Je = s("./src/reddit/actions/post.ts"),
				Ze = s("./src/lib/prettyPrintNumber/index.ts"),
				Xe = s("./src/reddit/components/SubscribeButton/index.tsx"),
				$e = s("./src/reddit/helpers/karma.ts");
			var et = s("./src/reddit/constants/tracking.ts"),
				tt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				st = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				nt = s("./src/reddit/selectors/telemetry.ts");
			var rt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ot = s("./src/reddit/constants/posts.ts"),
				it = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				at = s("./src/reddit/selectors/subreddit.ts"),
				ct = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				dt = s.n(ct);
			const lt = Object(c.c)({
					isBlockingInterstitialEnabled: it.b,
					isBlockingInterstitialV2Enabled: it.c,
					hideNSFWPref: H.H,
					subredditOrProfile: at.Q,
					subredditOrProfileAboutInfo: at.M,
					userIsSubscriber: at.kb
				}),
				mt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ae.gb)(), m = Object(We.a)(), u = Object(A.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: g,
						subredditOrProfileAboutInfo: f
					} = Object(a.e)(t => lt(t, e)), {
						withCommunityDescription: x
					} = Object(a.e)(V.a), v = d && x, O = Object(a.d)(), y = Object(o.useCallback)(e => {
						g && n.type === ot.a.PROFILE && (p || b) && (e.preventDefault(), O(Object(Je.cb)(g.url))), m(Object(ue.r)(c, l, n, r))
					}, [m, c, l, r, n, p, b, O, g]);
					if (!g) return null;
					const C = g.displayText,
						j = f.publicDescription,
						E = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object($e.a)(e),
									n = Object(Ze.b)(s);
								return I.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [I.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? I.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [I.fbt._plural(s.subscribers, "number of subscribers", Object(Ze.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, f),
						k = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: a
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Xe.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Xe.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: g,
							subredditOrProfileAboutInfo: f,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = nt.H(n, void 0);
									return {
										source: ue.c.SEARCH,
										action: et.c.CLICK,
										noun: `${s}_${ue.d[e.type]}`,
										actionInfo: Object(ue.l)(n, void 0, r, void 0),
										correlationId: Object(tt.c)(tt.a.SearchResults),
										profile: "profile" === e.type ? nt.X(n, e.id) : void 0,
										search: nt.db(n, t, st.a.SERP),
										subreddit: "subreddit" === e.type ? nt.ob(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: Be.c.Tertiary
						});
					return i.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(_.a)(dt.a.link, d && dt.a.sidebar, s ? dt.a.mFirst : void 0, t),
						onClick: y,
						to: {
							pathname: g.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: dt.a.container
					}, i.a.createElement(rt.b, {
						className: Object(_.a)(dt.a.subredditIcon, v && dt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: g
					}), i.a.createElement("div", {
						className: dt.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(_.a)(dt.a.subredditInfo, d && dt.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(_.a)(dt.a.title, d && dt.a.sidebar)
					}, C), i.a.createElement(te.a, {
						className: Object(_.a)(dt.a.warnings, d && dt.a.sidebar),
						isQuarantined: null == g ? void 0 : g.isQuarantined,
						isNSFW: null == g ? void 0 : g.isNSFW
					}), E && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: dt.a.subtitle
					}, !d && i.a.createElement(M.b, null), E))), !d && i.a.createElement("p", {
						className: dt.a.description
					}, Object(Qe.a)(j, 150, "..."))), i.a.createElement("div", {
						className: dt.a.buttonContainer
					}, k)), v && n.type !== ot.a.PROFILE && i.a.createElement("p", {
						className: Object(_.a)(dt.a.description, d && dt.a.sidebar)
					}, Object(Qe.a)(j, 75, "...")))
				};
			var ut = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				pt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				bt = s("./src/lib/objectSelector/index.ts"),
				ht = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				ft = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				xt = s("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				vt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ot = s("./src/reddit/components/UserIcon/index.tsx"),
				yt = s("./src/reddit/components/UserIcon/constants.ts"),
				Ct = s("./src/reddit/constants/componentTestIds.ts"),
				_t = s("./src/reddit/controls/MetaData/index.tsx"),
				jt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Et = s("./src/reddit/models/User/index.ts"),
				kt = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				St = s.n(kt);
			var wt = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Pt = s.n(wt);
			const It = 5,
				Nt = Object(c.c)({
					apiError: he.b,
					apiPending: he.c,
					loadMore: he.t,
					viewportDataLoaded: Se.a
				}),
				Tt = Object(c.c)({
					apiError: he.e,
					apiPending: he.f,
					loadMore: he.u,
					viewportDataLoaded: Se.a
				}),
				Lt = Object(c.c)({
					apiError: he.h,
					apiPending: he.i,
					loadMore: he.v,
					viewportDataLoaded: Se.a
				}),
				Rt = Object(c.c)({
					apiError: he.y,
					apiPending: he.z,
					loadMore: he.w,
					viewportDataLoaded: Se.a
				});
			var Ft;
			! function(e) {
				e.Posts = "posts", e.Subreddits = "communities", e.Users = "authors", e.Comments = "comments", e.PdpComments = "pdp_comments"
			}(Ft || (Ft = {}));
			const Mt = {
				[Ft.Comments]: {
					cacheName: "comment",
					Component: e => {
						let {
							identifier: t,
							listingKey: s,
							searchOptions: n
						} = e;
						const r = Object(ae.gb)(),
							o = Object(We.a)(),
							c = Object(a.d)(),
							d = Object(a.e)(e => Object(Ve.c)(e, {
								commentId: t
							})),
							l = Object(a.e)(e => Object(Ue.m)(e, {
								commentId: t
							})),
							m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(He.G)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(He.F)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(a.e)(e => e.search.searchQuery),
							b = Object(A.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(Fe.b)(c),
							g = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a;
								return function() {
									o(Object(ue.q)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: r,
										searchOptions: n
									})), t(...arguments)
								}
							},
							x = Object(Te.b)(d.postId, h),
							v = e => g(e);
						return i.a.createElement(Re.a, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: g(Ge.POST, null != x ? x : f.a),
							onClickPostAuthor: v(Ge.POST_AUTHOR),
							onClickPostCommunity: v(Ge.POST_COMMUNITY),
							onIgnoreReports: f.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: i.a.createElement(Me.a, null, i.a.createElement("div", {
								className: qe.a.commentContainer,
								"data-testid": "search_comment_container"
							}, i.a.createElement("div", {
								className: qe.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: v(Ge.POST)
							}, m && i.a.createElement(Le.c, {
								className: qe.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Le.b.Metadata
							})), i.a.createElement("div", {
								className: qe.a.commentContent,
								"data-testid": "search_comment",
								onClick: g(Ge.COMMENT, e => {
									e.stopPropagation(), c(Object(Ie.b)(Object(E.a)(l, !0, b)))
								})
							}, i.a.createElement(Ne.a, {
								clearHovered: f.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: i.a.createElement(ze, {
									className: qe.a.commentFlatlist,
									comment: d
								}),
								hasAwardGradient: !1,
								highlightTreatment: null,
								index: 0,
								isHighlighted: !1,
								isFirstInList: !0,
								isActive: !1,
								noFocus: !0,
								noSpacing: !0,
								onLineMouseOver: f.a,
								onCommentAuthorClick: e => (e.stopPropagation(), v(Ge.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), v(Ge.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: f.a,
								showBlockingInterstitial: f.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									o(Object(ue.t)(n, d, s, r))
								}
							})), i.a.createElement(Be.t, {
								kind: Be.b.InternalLink,
								priority: Be.c.PlainLink,
								className: Object(_.a)(qe.a.goToThreadLinkButton, De.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: g(Ge.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(E.a)(u, !0, b)
							}, I.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.ic.Comments],
					Placeholder: Ye.a,
					selector: Tt,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: pt.c
				},
				[Ft.Subreddits]: {
					cacheName: "community",
					Component: mt,
					moreResultsTypes: [d.ic.Subreddits],
					Placeholder: ut.a,
					selector: Lt,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Users]: {
					cacheName: "author",
					Component: mt,
					moreResultsTypes: [d.ic.Users],
					Placeholder: ut.a,
					selector: Nt,
					telemetryComponentName: "authorSearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Posts]: {
					cacheName: "post",
					Component: e => {
						var t, s;
						const {
							first: n,
							listingKey: r,
							searchOptions: o
						} = e, c = Object(a.e)(t => Object(he.A)(t, e)), d = Object(a.e)(e => {
							if (c.crosspostRootId) return Object(he.A)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(a.e)(e => Object(H.lb)(e)), m = Object(pe.a)(), u = Object(a.d)(), p = Object(oe.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = y.a.parse(s),
								r = n.path || "",
								o = r.length > 7 ? r.substring(0, 7) + "..." : r;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + o
						}(c), h = Object(ae.cb)(m), g = d ? d.thumbnail.url : c.thumbnail.url, x = g && Object(j.a)(g), v = Object(W.a)(), O = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a;
							return function() {
								p(Object(ue.s)(c.id, o, m, e || null, r)), t(...arguments)
							}
						}, E = e => O(e), k = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), E(ue.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), E(ue.e.POST_COMMUNITY)(e))
						};
						return i.a.createElement("div", {
							className: Object(_.a)(xe.a.postContainer, n && xe.a.mFirst),
							"data-adclicklocation": C.a.BACKGROUND,
							"data-click-id": C.a.BACKGROUND,
							"data-testid": w.a,
							id: c.id,
							onClick: O(ue.e.POST, e => {
								e.stopPropagation(), l ? window.open(c.permalink) : u(Object(le.a)({
									pathname: Object(me.b)(c.permalink),
									state: Object(de.b)(m)
								}))
							}),
							tabIndex: -1
						}, i.a.createElement(S.a, {
							"data-click-id": C.a.BACKGROUND,
							redditStyle: !0
						}, i.a.createElement("div", {
							className: xe.a.postContent,
							"data-click-id": C.a.BODY
						}, i.a.createElement(ee, ve({
							className: Object(_.a)(xe.a.paddingSide, xe.a.postItemMetaContainer),
							key: "PostMeta"
						}, k)), i.a.createElement(te.a, {
							className: Object(_.a)(xe.a.paddingSide, xe.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), i.a.createElement("div", {
							className: Object(_.a)(xe.a.paddingSide, xe.a.postItemTitleContainer)
						}, i.a.createElement("div", {
							className: xe.a.postContent
						}, i.a.createElement(ye, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && i.a.createElement(ce.b, {
							className: xe.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), x && i.a.createElement("div", {
							className: xe.a.thumbnailContainer
						}, i.a.createElement(Ce, {
							makeSendClickEventFn: e => (e.stopPropagation(), E(ue.e.POST)(e)),
							post: c,
							theme: v
						}))), i.a.createElement(P.c, {
							className: Object(_.a)(xe.a.paddingSide, xe.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.ic.Posts],
					Placeholder: _e.a,
					selector: Rt,
					telemetryComponentName: "postList",
					telemetryViewEvent: pt.e
				},
				[Ft.PdpComments]: {
					cacheName: "pdp-comment",
					Component: e => {
						let {
							identifier: t,
							first: s,
							listingKey: n,
							searchOptions: r,
							pageKey: o
						} = e;
						const c = Object(ae.gb)(),
							d = Object(We.a)(),
							l = Object(a.d)(),
							m = Object(a.e)(e => Object(Ve.c)(e, {
								commentId: t
							})),
							u = Object(a.e)(e => Object(Ue.m)(e, {
								commentId: t
							})),
							p = Object(a.e)(e => Object(H.m)(e)),
							b = Object(a.e)(e => Object(ke.j)(e)),
							h = Object(a.e)(e => (null == m ? void 0 : m.postId) && Object(He.F)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							g = Object(a.e)(e => Object(ae.s)(e, {
								pageLayer: c
							})),
							x = Object(A.a)();
						if (!(null == m ? void 0 : m.postId) || !h) return null;
						const v = !!p && Object(Et.e)(p) === m.author ? null == p ? void 0 : p.accountIcon : m.profileImage,
							O = Object(jt.a)(m),
							y = Object(bt.b)(e => {
								let {
									comment: t,
									pageLayer: s
								} = e;
								return {
									renderingObjectInfo: t,
									pageLayer: s
								}
							}),
							C = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a;
								return function() {
									d(Object(ue.q)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: r
									})), t(...arguments)
								}
							},
							j = e => C(e);
						return i.a.createElement(Me.a, null, i.a.createElement("div", {
							className: Object(_.a)(St.a.commentContainer, St.a.marginContainer, St.a.metadataFont, s && St.a.first),
							"data-testid": "search_pdp_comment_container"
						}, i.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: C(Ge.COMMENT, e => {
								e.stopPropagation(), l(Object(Ie.b)(Object(E.a)(u, !0, x)))
							})
						}, i.a.createElement("div", {
							className: St.a.flex
						}, i.a.createElement(Ot.a, {
							className: Object(_.a)(St.a.pdpUserIcon, St.a.iconSpacer),
							wrapperClassName: Object(_.a)(St.a.pdpUserIcon, St.a.iconSpacer),
							iconUrl: v,
							isNSFW: m.profileOver18 || !1,
							nsfwIconUrl: yt.a,
							userName: m.author,
							authorId: m.authorId
						}), i.a.createElement(ht.a, {
							authorClassName: St.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), j(Ge.COMMENT_AUTHOR)(e)),
							renderedInOverlay: b
						}), i.a.createElement(xt.a, {
							className: St.a.leftSpacer,
							comment: m,
							subredditDisplayText: (null == g ? void 0 : g.displayText) || "",
							renderContractorBadge: !0,
							renderedInOverlay: b
						}), i.a.createElement(_t.c, {
							className: Object(_.a)(St.a.separator, St.a.metadataColor)
						}), i.a.createElement(gt.a, {
							className: St.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), j(Ge.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: b
						}), m.editedAt && i.a.createElement(i.a.Fragment, null, i.a.createElement(_t.c, {
							className: Object(_.a)(St.a.separator, St.a.metadataColor)
						}), i.a.createElement(ft.a, {
							className: St.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), i.a.createElement("div", {
							className: Object(_.a)(St.a.commentContent, St.a.marginTop),
							"data-testid": Ct.d
						}, i.a.createElement(vt.b, {
							className: St.a.background,
							content: O,
							mediaMetadata: m.media && m.media.mediaMetadata,
							rtJsonElementProps: y({
								comment: m,
								pageLayer: c
							}),
							mediaProps: {
								alignLeft: !0,
								renderSmallMedia: !0
							}
						}), i.a.createElement(ze, {
							className: Object(_.a)(St.a.metadataFont, St.a.marginTop),
							comment: m
						})), i.a.createElement(R.b, {
							commentId: m.id
						}), i.a.createElement(R.a, {
							commentId: m.id,
							commentsPageKey: o
						}))))
					},
					moreResultsTypes: [d.ic.Comments],
					Placeholder: p.a,
					selector: Tt,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: pt.c
				}
			};
			const Bt = e => {
				const t = new m.a(250),
					s = Object(o.useRef)(),
					n = Object(o.useRef)(null),
					c = Object(ae.gb)(),
					p = Object(oe.b)(),
					h = Object(a.d)(),
					{
						identifiers: g,
						listingKey: f,
						searchOptions: x,
						componentType: v,
						sidebar: O,
						originElement: y,
						pageKey: C,
						fireScreenview: _
					} = e,
					{
						cacheName: j,
						Component: E,
						moreResultsTypes: k,
						Placeholder: S,
						selector: w,
						telemetryComponentName: P,
						telemetryViewEvent: I
					} = Mt[v],
					{
						apiError: N,
						apiPending: T,
						loadMore: L
					} = Object(a.e)(t => w(t, e)),
					R = !!Object(a.e)(e => Object(ke.j)(e)),
					F = O ? It : g.length,
					M = O ? It : 10,
					B = Object(l.a)(R),
					A = Object(l.a)(g.length),
					D = () => Boolean(N) || !1 === T,
					W = () => g.length > 0,
					U = !(W() || D()),
					V = () => {
						if (!_) return;
						const e = we.c.has(f) ? we.c.end(f) : 0;
						p(Object(Ee.v)(f, x, Pe.TimerType.InApp, e, c))
					};
				Object(o.useEffect)(() => {
					if (n.current && we.c.has(n.current)) {
						const e = we.c.end(n.current);
						if (e < 10) return;
						Object(we.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: P
						})
					}
				}), Object(o.useEffect)(() => {
					U || V()
				}, [U]), Object(o.useEffect)(() => {
					n.current && we.c.cancel(n.current), g.length && (n.current = we.c.start())
				}, [n, f, g.length, A]), Object(o.useEffect)(() => {
					B && !R && V()
				}, [R, B]);
				const H = e => {
						s.current = e instanceof Element ? e : void 0
					},
					z = () => {
						const e = g.slice(0, F).map((e, s) => ((e, s) => {
							let n;
							n = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const r = `${j}-search-${s}-${f}`,
								o = Object(pt.b)(n, f, () => I(p, x, e, f, c, y));
							let a;
							if (void 0 === (a = t.get(r))) {
								const t = `${j}-search-item-[id:${n}]`;
								a = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: n,
									render: () => i.a.createElement(E, {
										className: Pt.a.separatedCommunity,
										first: 0 === s,
										identifier: e,
										key: t,
										listingKey: f,
										searchOptions: x,
										sidebar: O,
										pageKey: C
									})
								}
							}
							return t.set(r, a), a
						})(e, s));
						return i.a.createElement(b.b, {
							getContainer: () => R ? document.getElementById(je.e) : null,
							key: f,
							innerRef: H,
							loadMoreToken: L && L.token ? L.token : void 0,
							onLoadMore: () => {
								h(Object(u.n)(k))
							}
						}, e)
					};
				return W() ? z() : D() ? z() : (() => {
					const e = !N;
					return i.a.createElement("div", {
						"data-testid": `${v}-list-placeholder`
					}, r()(M, t => i.a.createElement(S, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})()
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts");
			const a = new n.a(250),
				c = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = a.get(n);
					return void 0 === r && (r = s, a.set(n, r)), r
				}),
				d = (e, t, s, n, i) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: i,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, a, c) => e(e => {
					const d = Object(i.c)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: a,
						comment: d,
						key: n,
						originElement: c
					})
				}),
				m = (e, t, s, n, i) => e(e => ({
					...Object(o.m)({
						state: e,
						searchOptions: t,
						pageLayer: i,
						postId: s,
						key: n,
						useSearchPost: !0
					}),
					action: r.c.VIEW
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return it
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				c = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/search/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/config.ts"),
				b = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				g = s("./src/lib/opener/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/components/BlankPost/index.tsx"),
				v = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/Media/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/components/Thumbnail/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				P = s("./src/reddit/helpers/clickSourceData/index.ts"),
				I = s("./src/reddit/helpers/overlay/index.ts"),
				N = s("./src/reddit/helpers/path/index.ts"),
				T = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				L = s("./src/reddit/helpers/trackers/searchResults.ts"),
				R = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/searchResults.ts"),
				A = s("./src/reddit/selectors/showPromotedCTA.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				W = s("./node_modules/reselect/es/index.js"),
				U = s("./src/lib/getShortenedLink.ts"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = s("./src/reddit/components/PostTitle/index.tsx"),
				z = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				K = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				q = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				G = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/hooks/useTheme.ts"),
				Z = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				X = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				$ = s.n(X);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = `${p.a.assetPath}/img/link-placeholder.png`, se = Object(W.c)({
				autoplayPref: D.d,
				showPromotedCTA: A.a,
				flairStyleTemplate: k.Y,
				showCTAExperiment: F.a
			});

			function ne(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), m = Object(r.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: F,
					showPromotedCTA: A,
					showCTAExperiment: D
				} = Object(i.e)(t => se(t, e)), W = Object(i.e)(e => Object(B.A)(e, {
					identifier: s
				})), X = Object(i.e)(e => Object(M.d)(e, {
					postId: s
				})), ne = Object(i.e)(Z.b), re = Object(i.e)(Z.c), oe = Object(k.gb)(), ie = Object(j.b)(), ae = Object(i.d)(), ce = Object(J.a)(), {
					post: de,
					subredditOrProfile: le
				} = Object(S.d)(s), me = Object(r.useCallback)((e, t) => {
					ae(Object(f.P)(e, t))
				}, [ae]), ue = !!de.source && !X;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(L.x)(a, de.id, c, oe, d), () => {
						l.current && Object(b.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !de) return null;
				const {
					media: pe
				} = X || de || {}, be = (null == pe ? void 0 : pe.type) === R.o.EMBED && (null == pe ? void 0 : pe.provider) === R.v.Twitter, he = (null == pe ? void 0 : pe.type) === R.o.VIDEO || (null == pe ? void 0 : pe.type) === R.o.GIFVIDEO;

				function ge(e) {
					e.stopPropagation(), e.preventDefault(), de.isSponsored ? (ae(Object(f.y)(de, E.a.Click)), de.source ? de.source.outboundUrl ? Object(g.e)(de.source.outboundUrl, g.d.BLANK) : Object(g.e)(de.source.url, g.d.BLANK) : Object(g.e)(de.permalink, g.d.BLANK)) : ae(ne || re ? Object(f.ab)(Object(N.b)(de.permalink), de.id) : Object(I.a)({
						pathname: Object(N.b)(de.permalink),
						state: Object(P.b)(oe)
					}))
				}

				function fe(e) {
					de.isSponsored && he || ge(e), de.isSponsored && function(e) {
						he || (e.stopPropagation(), e.preventDefault()), ie(Object(L.y)(de.id, c, d, a, oe))
					}(e)
				}
				return de.isBlank ? o.a.createElement(x.BlankPost, {
					onPostViewable: me,
					post: de,
					postId: de.id
				}) : o.a.createElement(S.a, {
					postId: s
				}, o.a.createElement(C.b, {
					className: $.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = T.r;
						return de.isSponsored || (r = T.t, n = null !== (s = L.E[t]) && void 0 !== s ? s : L.e.POST), r(c, oe, n, a, d)(e)
					},
					onClick: ge,
					post: de,
					"data-click-id": "hero_unit",
					style: {
						...Object(Q.d)({
							theme: ce,
							flairStyleTemplate: F,
							redditStyle: !1
						}),
						...Object(Q.b)(F)
					}
				}, o.a.createElement(V.a, {
					"data-click-id": "background"
				}, o.a.createElement(v.a, {
					className: $.a.eventMeta,
					post: de
				}), o.a.createElement("div", {
					className: Object(n.a)($.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(K.c, {
					className: $.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: de,
					subredditOrProfile: le
				}), o.a.createElement("div", {
					className: $.a.postItemTitleContainer
				}, o.a.createElement(H.c, {
					hideSourceLink: !0,
					post: de,
					size: H.b.Medium,
					isOverlay: !1
				}), !A && ue && o.a.createElement(q.a, {
					className: $.a.outboundLink,
					href: (null === (t = null == de ? void 0 : de.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, Object(U.a)(de))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!de.source && Object(h.a)(de.source.url) || !!de.thumbnail && Object(h.a)(de.thumbnail.url),
						s = !(null == pe ? void 0 : pe.type) && t,
						r = Object(n.a)($.a.mediaWrapper, {
							[$.a.marginCancel]: A && !!de.source,
							[$.a.promotedTrend]: de.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(_.b, {
						className: $.a.thumbnail,
						post: de,
						templatePlaceholderImage: te,
						usePreview: !0
					}));
					else if (pe)
						if (pe.type !== R.o.RTJSON && pe.type !== R.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, be && $.a.twitterEmbed),
							onClickCapture: fe,
							ref: e => l.current = e
						}, o.a.createElement(y.a, {
							className: $.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: de.isSponsored,
							post: X || de,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: $.a.mediaPlaceholder
							}), (pe.type === R.o.RTJSON && pe.richtextContent || pe.type === R.o.TEXT && pe.content) && Object(w.a)(de, null == ce ? void 0 : ce.subredditContext) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: ge,
								ref: e => l.current = e
							}, o.a.createElement(y.a, {
								autoplayPref: u,
								className: $.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: X || de,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: $.a.seeMore
							}, ee._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), A && de.source && o.a.createElement(G.a, {
					className: $.a.adLinkWrapper,
					ctaExperimentDesign: D && "card"
				}, o.a.createElement(q.a, {
					className: Object(n.a)($.a.outboundLink, {
						[$.a.ctaExperiment]: D
					}),
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, de.source.displayText), de.callToAction && o.a.createElement(Y.a, {
					className: $.a.adCallToAction,
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source,
					showCTAExperiment: D
				}, de.callToAction)), !de.isSponsored && o.a.createElement(z.c, {
					className: Object(n.a)($.a.postItemFlatlistContainer),
					post: W || de
				}), o.a.createElement(O.d, null)))))
			}
			var re = s("./src/lib/LRUCache/index.ts"),
				oe = s("./src/reddit/components/Scroller/Simple.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ae = s("./src/reddit/hooks/usePageLayer.ts"),
				ce = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const de = 376,
				le = new re.a(1);

			function me(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: a
				} = e;
				const c = Object(i.d)(),
					d = Object(ae.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = ie.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === ce.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(T.u)(o(), t, r, n, d, s, i))
						}, ie.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(oe.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = le.get(e)) && (n = {
						estHeight: de,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => a
					}), le.set(e, n), [n]
				})())
			}
			var ue = s("./src/reddit/constants/page.ts"),
				pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useTracking.ts"),
				he = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ge = s("./src/reddit/selectors/listings.ts"),
				fe = s("./src/reddit/selectors/platform.ts");
			const xe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var ve = s("./src/reddit/selectors/searchFix.ts"),
				Oe = s("./src/telemetry/index.ts"),
				ye = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: Ce,
				PromotedTrendHero: _e
			} = ce.b;

			function je(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === Ce || e.layout.viewTypeWeb === _e);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var Ee = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				ke = s("./src/reddit/components/PostList/index.tsx"),
				Se = s("./src/reddit/components/SearchPost/index.tsx"),
				we = s("./src/reddit/constants/postLayout.ts"),
				Pe = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Ie = s("./src/reddit/helpers/trackers/post.ts"),
				Ne = s("./src/reddit/selectors/tracking.ts"),
				Te = s("./src/reddit/connectors/PostList/index.ts");
			const Le = Object(Te.c)(),
				Re = Object(W.c)({
					...Te.d,
					layout: () => we.g.Search,
					viewportDataLoaded: Ne.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: i
						} = t;
						const a = i && i.postOrder,
							c = je(xe(e));
						if (a && a.length > 0) {
							if (s) {
								const t = a.indexOf(s);
								if (t > -1) return a.splice(t, 1), Object(M.X)(e, a)
							}
							return Object(M.X)(e, a)
						}
						const {
							models: d
						} = e.posts;
						return Object(M.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				Fe = (e, t, s, n) => {
					if (s) return Object(Ie.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: i,
						searchDiscoveryUnit: a,
						sendEvent: c
					} = n;
					return c(Object(L.s)(e, o, i, L.E[t], r, a)), Object(Ie.k)(e, t)
				},
				Me = Object(i.b)(Re, (e, t) => ({
					...Object(Te.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(L.x)(t.listingKey, e, t.searchOptions, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: Fe,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Pe.a : Se.a
					}
				}));
			const Be = (e => Object(j.c)(Le(Me(e))))(ke.a),
				Ae = () => null,
				De = Object(W.c)({
					viewTreatment: B.D,
					searchDiscoveryUnitsModels: xe,
					hasPostResults: B.o,
					apiPending: ge.d,
					postIds: M.z,
					posts: M.y,
					loadMore: ge.g,
					isOverlayOpen: fe.j
				});

			function We(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				} = e, p = Object(ae.a)(), b = Object(be.a)(), h = Object(i.d)(), {
					viewTreatment: g,
					searchDiscoveryUnitsModels: f,
					hasPostResults: x,
					postIds: v,
					isOverlayOpen: O,
					apiPending: y
				} = Object(i.e)(t => De(t, e)), C = Object(l.a)(O), _ = Object(r.useRef)(!1), j = void 0 === y || y, E = (e, s) => b(Object(pe.v)(t, a, s, e, p, Object(ve.b)({
					pageLayer: p
				})));
				let k;
				Object(r.useEffect)(() => {
					x && !c()(v) && I()
				}, [x, v]), Object(r.useEffect)(() => {
					C && !O && I()
				}, [O, C]), g === ce.c.Trending && (k = je(f));
				const S = Object(m.a)(a.q || ""),
					w = Object(r.useMemo)(() => Object.values(f).find(e => e.name === he.l || e.name === he.f), [f]),
					P = k && w;

				function I() {
					if (Oe.c.has(t) || !_.current) {
						_.current = !0;
						const e = Oe.c.has(t) ? Oe.c.end(t) : 0;
						E(e, ye.TimerType.InApp)
					}
				}
				return x || P || j ? o.a.createElement(o.a.Fragment, null, P && o.a.createElement(me, {
					key: k,
					postId: k,
					discoveryUnit: w,
					searchOptions: a,
					listingKey: t
				}, o.a.createElement(ne, {
					key: k,
					discoveryUnit: w,
					postId: k,
					listingKey: t,
					searchOptions: a
				})), (x || j) && o.a.createElement(Be, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: Ae,
					onLoadMore: function() {
						h(Object(u.n)([d.ic.Posts]))
					},
					searchOptions: a
				})) : o.a.createElement(Ee.a, {
					query: S,
					type: Ee.b.Posts,
					searchOptions: a,
					tab: ue.h.Posts
				})
			}
			var Ue = s("./src/reddit/selectors/experiments/optimizedSerpPosts.ts"),
				Ve = s("./node_modules/lodash/constant.js"),
				He = s.n(Ve),
				ze = s("./node_modules/lodash/times.js"),
				Ke = s.n(ze),
				qe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				Ge = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Ye = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				Qe = s.n(Ye);
			const Je = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, r = Object(i.e)(e => Object(B.d)(e, {
					listingKey: t
				})), a = Object(i.e)(e => Object(B.u)(e, {
					listingKey: t
				})), c = Boolean(a && a.token) && r.length > 0;
				return o.a.createElement("div", {
					className: Qe.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement(qe.b, {
					identifiers: r,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Comments,
					originElement: n,
					fireScreenview: !0
				}), c && o.a.Children.toArray(Ke()(3, He()(o.a.createElement(Ge.a, {
					className: Qe.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var Ze = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const Xe = (e, t) => Boolean(t && t.token) && e.length > 0,
				$e = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(B.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(B.v)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: Qe.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(qe.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: qe.c.Subreddits,
						fireScreenview: !0
					}), Xe(n, r) && o.a.Children.toArray(Ke()(3, He()(o.a.createElement(Ze.a, {
						className: Qe.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var et = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				tt = s.n(et);
			const st = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(B.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(B.t)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Qe.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement(qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Users,
					fireScreenview: !0
				}), Xe(n, r) && o.a.Children.toArray(Ke()(3, He()(o.a.createElement(Ze.a, {
					className: Qe.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var nt = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const rt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(i.e)(e => Object(B.x)(e, {
					listingKey: t
				}));
				const a = Object(i.e)(e => Object(B.w)(e, {
						listingKey: t
					})),
					c = Object(i.e)(e => Object(B.D)(e)),
					d = Object(i.e)(e => xe(e));
				let l;
				c === ce.c.Trending && (l = je(d));
				const m = Object(r.useMemo)(() => Object.values(d).find(e => e.name === he.l || e.name === he.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return o.a.createElement(o.a.Fragment, null, l && m && o.a.createElement(me, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, o.a.createElement(ne, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), o.a.createElement("div", {
					className: Qe.a.container,
					"data-testid": "posts-list"
				}, o.a.createElement(qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Posts,
					fireScreenview: !0
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, a) && o.a.Children.toArray(Ke()(3, He()(o.a.createElement(nt.a, {
					className: Qe.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var ot = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function it(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(e => Object(B.n)(e, {
					listingKey: t
				})), l = Object(i.e)(e => Object(B.l)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(B.m)(e, {
					listingKey: t
				})), u = Object(i.e)(e => Object(B.p)(e, {
					listingKey: t
				})), p = Object(i.e)(e => Object(Ue.a)(e));
				return o.a.createElement("div", {
					className: Object(n.a)(tt.a.resultsContainer)
				}, c === ue.h.Listings ? o.a.createElement(ot.a, {
					hasResults: d,
					searchOptions: a,
					noResultsType: Ee.b.Communities,
					searchResultsTab: ue.h.Listings,
					listingKey: t,
					pendingSelector: B.i
				}, o.a.createElement($e, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Listings
				})) : c === ue.h.People ? o.a.createElement(ot.a, {
					hasResults: l,
					searchOptions: a,
					noResultsType: Ee.b.People,
					searchResultsTab: ue.h.People,
					listingKey: t,
					pendingSelector: B.c
				}, o.a.createElement(st, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.People
				})) : c === ue.h.Comments ? o.a.createElement(ot.a, {
					hasResults: m,
					searchOptions: a,
					noResultsType: Ee.b.Comments,
					searchResultsTab: ue.h.Comments,
					listingKey: t,
					pendingSelector: B.f
				}, o.a.createElement(Je, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : p ? o.a.createElement(ot.a, {
					hasResults: u,
					searchOptions: a,
					noResultsType: Ee.b.Posts,
					searchResultsTab: ue.h.Posts,
					listingKey: t,
					pendingSelector: B.z
				}, o.a.createElement(rt, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : o.a.createElement(We, {
					key: t,
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/search/index.ts"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");

			function c(e) {
				const {
					hasResults: t,
					searchBarId: s,
					searchOptions: n,
					noResultsType: c,
					searchResultsTab: d,
					pendingSelector: l
				} = e, m = Object(o.a)(n.q || ""), u = Object(i.e)(t => l(t, e)), p = void 0 === u || u;
				return r.a.createElement(r.a.Fragment, null, t || p ? e.children : r.a.createElement(a.a, {
					searchBarId: s,
					searchOptions: n,
					query: m,
					type: c,
					tab: d
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/searchFix.ts"),
				r = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(n.a)(e, t);
				return s ? Object(r.C)(e, {
					subredditName: s
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/colors.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts");
			const b = () => {
				const [e, t] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					var e;
					const s = null !== (e = Object(p.C)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(p.Kb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(p.Kb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var h = s("./src/reddit/constants/page.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				v = s("./src/reddit/helpers/trackers/searchResults.ts"),
				O = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				C = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				_ = s("./src/reddit/selectors/searchResults.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				k = s("./node_modules/history/esm/history.js"),
				S = s("./node_modules/react-router-redux/es/index.js"),
				w = s("./src/lib/addQueryParams/index.ts"),
				P = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/colors/constants.ts"),
				N = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				L = s("./src/reddit/hooks/usePageLayer.ts"),
				R = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				F = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				M = s.n(F);
			const B = "safe-search-toggle";

			function A(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(y.a)(),
					[r, o] = a.a.useState(!0);
				Object(i.useEffect)(() => {
					var e;
					o(null), p(!!(null === (e = null == g ? void 0 : g.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const d = Object(O.a)({}),
					{
						nsfwSessionSetting: m,
						setNsfwSessionSetting: p
					} = Object(R.b)(),
					{
						shouldShowTooltip: b,
						resetShowTooltip: h
					} = Object(R.c)(!m);
				Object(i.useEffect)(() => {
					if (b) return window.addEventListener("click", h), () => {
						window.removeEventListener("click", h)
					}
				}, [b]);
				const g = Object(L.a)(),
					f = Object(c.d)();
				d.arrowProps.style = {
					...d.arrowProps.style,
					borderBottom: `3px solid ${l.a.alien600}`
				}, d.popperProps.style = {
					...d.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const C = null != r ? r : !m;
				return a.a.createElement("div", {
					className: Object(P.a)(M.a.searchNSFWToggle),
					"data-testid": B,
					onMouseEnter: d.show,
					onMouseLeave: d.hide
				}, a.a.createElement("label", {
					htmlFor: B,
					className: Object(P.a)(M.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(T.a, {
					activeColorOverride: I.a,
					id: B,
					onToggle: function() {
						var e;
						s(Object(v.i)(!C, t, g));
						const n = !m;
						p(n);
						const {
							include_over_18: r,
							...o
						} = (null == g ? void 0 : g.queryParams) || {}, i = (null === (e = null == g ? void 0 : g.routeMatch) || void 0 === e ? void 0 : e.match.url) || x.a, a = {
							...o,
							...n && {
								[N.m]: "1"
							}
						}, c = {
							pathname: i,
							search: Object(w.a)("", {
								...a
							})
						};
						f(Object(S.b)(Object(k.c)(c)))
					},
					on: C,
					redditStyle: !0,
					ref: d.target.ref
				}), a.a.createElement(u.a, {
					visible: b || d.visible,
					arrowProps: d.arrowProps,
					popperProps: d.popperProps
				}, C ? n.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : n.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var D = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				W = s.n(D);

			function U(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const p = Object(y.a)(),
					k = Object(c.e)(j.mb),
					S = Object(c.e)(_.D),
					w = Object(g.gb)(),
					P = S === C.c.Trending,
					I = Object(O.a)({}),
					{
						shouldShowCommentTabTooltip: N,
						resetShowCommentTabTooltip: T
					} = b();
				I.arrowProps.style = {
					...I.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${l.a.alien600}`
				}, I.popperProps.style = {
					...I.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(i.useEffect)(() => {
					if (N) return window.addEventListener("click", T), () => {
						window.removeEventListener("click", T)
					}
				}, [N]);
				const L = {
						condition: !0,
						active: t === h.h.Posts,
						target: v.b.Posts,
						contentType: d.ic.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					R = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.Listings,
						target: v.b.Communities,
						contentType: d.ic.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					F = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.People,
						target: v.b.People,
						contentType: d.ic.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					M = [L, {
						condition: !(s.source === m.a.Trending || s.source === m.a.PromotedTrend),
						active: t === h.h.Comments,
						target: v.b.Comments,
						contentType: d.ic.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, R, F],
					B = k && !P && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: W.a.searchResultsNav
				}, a.a.createElement("div", {
					className: W.a.pillRow,
					role: "tablist"
				}, M.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: r,
						text: i,
						contentType: c
					} = e;
					return a.a.createElement(f.default, {
						key: r,
						"data-testid": r,
						to: Object(x.b)({
							searchType: c,
							pageLayer: w
						}),
						"aria-selected": t,
						role: "tab",
						className: W.a.pillElement,
						onClick: () => (e => {
							e.active || p(Object(v.n)(e.target, s))
						})(e)
					}, a.a.createElement(u.a, {
						visible: Boolean(e.showTooltip) && N,
						arrowProps: I.arrowProps,
						popperProps: I.popperProps
					}, n.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), a.a.createElement(E.a, {
						active: t,
						onClick: o.a,
						variant: E.b.TAB_GROUP
					}, i))
				})), r && a.a.createElement("div", {
					className: W.a.searchSwitcherContainer
				}, r), B && a.a.createElement("div", {
					className: W.a.nsfwToggleContainer
				}, a.a.createElement(A, {
					searchOptions: s
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				m = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				u = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", u.a), g = p.a.div("Container", u.a), f = p.a.img("BannerImg", u.a), x = p.a.img("SnooImg", u.a), v = p.a.div("CommunityText", u.a);
			var O = () => o.a.createElement(g, null, o.a.createElement(f, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(x, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(v, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: u.a.Button,
					eventSource: "sidebar"
				}))),
				y = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				_ = s("./src/reddit/components/SidebarContainer/index.tsx"),
				j = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				P = s("./src/reddit/hooks/usePageLayer.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/searchResults.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/selectors/widgets.ts"),
				F = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				M = s.n(F);
			const B = Object(a.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.t)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.v)(e, {
							listingKey: s
						})
					},
					currentSubreddit: I.e,
					isLoggedIn: L.S,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(T.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(T.I)(e, s);
						return Object(R.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(R.d)(e, {
							subredditName: s
						})
					}
				}),
				A = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: r,
						communityIdentifiers: i,
						communitiesLoadMore: a,
						hasAuthorResults: d,
						hasCommunityResults: l,
						listingKey: m,
						listingName: u,
						idCardWidget: p,
						isLoggedIn: b,
						postFlairWidgets: h,
						searchOptions: g,
						currentSubreddit: f
					} = e;
					const x = Boolean(f && u === f.name && g.restrict_sr),
						v = !!g.is_multi,
						I = i.length > C.a || !!a,
						N = t.length > C.a || !!s;
					let T;
					const L = Object(P.a)();
					return x ? T = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(y.a, {
						listingName: u
					}), h && h.map((e, t) => o.a.createElement(j.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(k.a, {
						subredditName: u,
						widget: e
					})))) : v || (T = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: M.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: M.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !g.is_multi && o.a.createElement(C.b, {
						componentType: C.c.Subreddits,
						identifiers: i,
						listingKey: m,
						searchOptions: g,
						sidebar: !0
					}), I && o.a.createElement(S.default, {
						to: Object(w.b)({
							searchType: c.ic.Subreddits,
							pageLayer: L
						})
					}, o.a.createElement("p", {
						className: M.a.link
					}, n.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: M.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: M.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: M.a.header
					}, n.fbt._("People", null, {
						hk: "2M8TqB"
					})), d ? o.a.createElement(o.a.Fragment, null, !g.is_multi && o.a.createElement(C.b, {
						componentType: C.c.Users,
						identifiers: t,
						listingKey: m,
						searchOptions: g,
						sidebar: !0
					}), N && o.a.createElement(S.default, {
						to: Object(w.b)({
							searchType: c.ic.Users,
							pageLayer: L
						})
					}, o.a.createElement("p", {
						className: M.a.link
					}, n.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: M.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), b && o.a.createElement("div", {
						className: M.a.container
					}, o.a.createElement(O, null)))), o.a.createElement(_.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, T, o.a.createElement(E.a, null))
				},
				D = e => {
					const t = Object(i.e)(t => B(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(A, s)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return he
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/page.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/lib/addQueryParams/index.ts");
			const f = (e, t, s, n, r, o) => {
				const i = e && e[s],
					a = {};
				let c = Object(g.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(g.a)(t, {
						[s]: l
					});
					a[e] = o[l](), d.push(e), i === l && (c = e)
				}
				return {
					optionLabels: a,
					options: d,
					value: c
				}
			};
			var x = s("./src/higherOrderComponents/asTooltip.tsx"),
				v = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts");
			const j = Object(i.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(_.b)(s)(e)
				}
			});
			var E = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				k = s.n(E),
				S = s("./node_modules/query-string/index.js"),
				w = s.n(S),
				P = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				N = s("./src/reddit/constants/history.ts"),
				T = s("./src/reddit/controls/Dropdown/Row.tsx"),
				L = s("./src/reddit/helpers/history/index.ts"),
				R = s("./node_modules/lodash/fromPairs.js"),
				F = s.n(R),
				M = s("./src/lib/extractQueryParams/index.ts"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				A = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				D = s("./src/reddit/helpers/trackers/searchResults.ts"),
				W = s("./src/reddit/selectors/telemetry.ts");
			const U = (e, t) => {
					const s = F()([...Object(M.a)(e)]);
					return Object(m.zc)(s.sort) && (t.sort = s.sort), Object(m.Ac)(s.t) && (t.t = s.t), t
				},
				V = (e, t, s, n) => () => e(e => {
					const r = W.H(e, null);
					return {
						...Object(D.g)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(B.c)(B.a.SearchResults),
						actionInfo: Object(D.l)(e, null, r),
						search: W.db(e, U(s, n), A.a.SERP)
					}
				}),
				H = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: i,
						displayText: c
					} = e;
					const d = Object(I.b)();
					return r.a.createElement(P.a, {
						key: s,
						to: {
							pathname: w.a.parseUrl(s).url,
							state: {
								[N.b.SearchOriginPage]: Object(L.b)(N.b.SearchOriginPage)
							},
							search: s.replace(w.a.parseUrl(s).url + "?", "")
						},
						onClick: V(d, o, s, n)
					}, r.a.createElement(T.b, {
						className: Object(a.a)(i.SelectOption, t && i.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var z = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				K = s.n(z);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(x.a)(e => r.a.createElement(O.a, q({
					className: k.a.Component
				}, e))),
				Y = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: i,
						searchOptions: c,
						tooltipId: d,
						type: l,
						value: m,
						...u
					} = e;
					const {
						isOpen: p,
						onClick: b
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => j(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(C.i)()) : () => s(Object(C.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: k.a.Wrapper
					}, r.a.createElement(v.a, q({}, u, {
						active: p,
						className: Object(a.a)(k.a.filterButton, t && k.a.hasValue),
						onClick: b,
						variant: v.b.TAB_GROUP
					}), s, r.a.createElement(y.a, {
						name: "caret_down",
						className: Object(a.a)(k.a.caret, p && k.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(G, {
						className: k.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(H, {
						displayText: i[e],
						key: t,
						isSelected: e === m,
						option: e,
						searchOptions: c,
						styles: {
							mIsSelected: K.a.mIsSelected,
							SelectOption: K.a.SelectOption
						},
						type: l
					})))))
				},
				Q = {
					[u.h.Posts]: [m.fc.Relevance, m.fc.Hot, m.fc.Top, m.fc.New, m.fc.Comments],
					[u.h.Comments]: [m.fc.Relevance, m.fc.Top, m.fc.New]
				},
				J = {
					[m.fc.Hot]: () => p.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.fc.Relevance]: () => p.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.fc.Top]: () => p.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.fc.New]: () => p.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.fc.Comments]: () => p.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [m.oc.HOUR, m.oc.DAY, m.oc.WEEK, m.oc.MONTH, m.oc.YEAR, m.oc.ALL],
				$ = {
					[m.oc.HOUR]: () => p.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.oc.DAY]: () => p.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.oc.WEEK]: () => p.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.oc.MONTH]: () => p.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.oc.YEAR]: () => p.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.oc.ALL]: () => p.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const te = {
					[u.h.Posts]: [m.ec.Sort, m.ec.Time],
					[u.h.Comments]: [m.ec.Sort]
				},
				se = {
					[m.ec.Sort]: e => {
						let t = Object(o.e)(h.C);
						t = t !== m.Vb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: i
						} = f(e.queryParams, e.url, b.I, Q[e.tab], t || m.Vb, J), a = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: i
						}, c = Boolean(e.queryParams[b.I] || t);
						return r.a.createElement(Y, Z({}, a, {
							active: c,
							label: c ? n[i] : p.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: m.ec.Sort
						}))
					},
					[m.ec.Time]: e => {
						const t = Object(o.e)(h.C),
							{
								options: s,
								optionLabels: n,
								value: i
							} = f(e.queryParams, e.url, b.O, X.slice().reverse(), m.Wb, $);
						if (!e.searchOptions || e.searchOptions.sort === m.bb.NEW || e.searchOptions.sort === m.bb.HOT || t === m.bb.NEW || t === m.bb.HOT) return null;
						const a = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: i
						};
						return r.a.createElement(Y, ee({}, a, {
							active: Boolean(e.queryParams[b.O]),
							label: e.queryParams[b.O] ? n[i] : p.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: m.ec.Filter
						}))
					}
				};
			var ne = s("./src/lib/lessComponent.tsx"),
				re = s("./src/reddit/controls/Button/index.tsx"),
				oe = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				ie = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				ae = s.n(ie);
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = ne.a.wrapped(re.r, "TertiaryButton", ae.a), le = ne.a.wrapped(de, "AllRedditResultsButton", ae.a), me = e => {
				const t = Object(I.b)();
				return r.a.createElement(P.a, {
					to: Object(oe.a)(e.queryParams)
				}, r.a.createElement(le, {
					onClick: () => {
						t(t => ({
							...Object(D.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ce._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(y.a, {
					name: "forward"
				})))
			};
			var ue = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				pe = s.n(ue);
			const be = Object(i.c)({
					subreddit: l.C
				}),
				he = e => {
					var t;
					const {
						subreddit: s
					} = Object(o.e)(t => be(t, e)), n = Object(c.gb)(), i = Object(c.Z)(n), l = Object(c.fb)(n), m = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(a.a)(pe.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = te[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = se[t];
						return r.a.createElement(n, {
							key: s,
							queryParams: i,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: l
						})
					}), m && r.a.createElement(me, {
						queryParams: i,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				x = s.n(f);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[x.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = i.a.parse(s), m = t ? c.gc.ToSubreddit : c.gc.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, v._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: x.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(a.a)(x.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, v._("{=Show results from}{=all of Reddit}", [v._param("=Show results from", r.a.createElement("span", null, v._("Show results from", null, {
						hk: "4l8fSw"
					}))), v._param("=all of Reddit", r.a.createElement("p", {
						className: Object(a.a)(x.a.searchSwitcherText, n)
					}, v._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.default, {
						className: Object(a.a)(x.a.searchSwitcher, e && x.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: m,
								[u.b.SearchOriginPage]: Object(b.b)(u.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(g.a, {
						name: "forward",
						className: Object(a.a)(x.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(m.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(O, e)) : r.a.createElement(O, e))
		},
		"./src/reddit/components/SearchWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3qUPSbrS00ULxlso5V3tIN",
				warningIcon: "_1fMbGLM3cAHfas4PNZTps4",
				quarantineIcon: "Ap9gKlmTQdcI17NgCE4yQ",
				quarantineWarning: "_2cvv3TnzlFQHZE4upgevMn",
				nsfwWarning: "_1-dYjh5S-IQybef811XyCF",
				spoilerWarning: "_1P0ASR__enq34IxkSim2Rk"
			}
		},
		"./src/reddit/components/SearchWarnings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				c = s("./src/reddit/components/SearchWarnings/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: c
				} = e;
				return s || n || c ? r.a.createElement("div", {
					className: t
				}, s ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.quarantineWarning)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(d.a.warningIcon, d.a.quarantineIcon)
				}), l._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.nsfwWarning)
				}, r.a.createElement(i.a, {
					name: "nsfw_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("nsfw", null, {
					hk: "2IetSA"
				})) : null, c ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.spoilerWarning)
				}, r.a.createElement(i.a, {
					name: "spoiler_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
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
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/config.ts"),
				m = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				u = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/helpers/adCount/index.ts"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = s.n(x),
				O = s("./src/lib/lessComponent.tsx");
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
				C = Object(d.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(s, r, n)]
					}
				}),
				_ = Object(c.b)(C),
				j = O.a.wrapped(b.a, "ThemedWidget", v.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.G)(e.media) && e.media.content)),
				k = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				S = Object(p.c)(class extends a.a.Component {
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
						const e = o()(0, k.length - 1),
							{
								img: t,
								href: s
							} = k[e],
							{
								className: n,
								placement: r,
								redditStyle: i
							} = this.props;
						return a.a.createElement(j, {
							className: n,
							contentOnly: !0,
							redditStyle: i
						}, a.a.createElement(m.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						}))
					}
				});

			function w(e) {
				let {
					className: t,
					post: s,
					placementIndex: n,
					refreshKey: r,
					listingName: o,
					placement: i,
					redditStyle: c,
					awaitingBrandSafetyCheck: d,
					forceHouseAd: l,
					removeSidebarSpacer: m
				} = e;
				const p = m ? a.a.Fragment : u.a;
				if (!d && E(s)) {
					let e = null;
					return l ? e = a.a.createElement(S, {
						className: t,
						redditStyle: c,
						placement: i
					}) : s && (e = a.a.createElement(y, {
						post: s,
						postId: s.id,
						refreshKey: r,
						listingName: o,
						placement: i,
						placementIndex: n
					})), a.a.createElement(p, null, e)
				}
				return null
			}
			t.a = _(w)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(o.b)((e, t) => {
				let {
					postId: s
				} = t;
				return {
					canShowAd: Object(i.a)(e, {
						postId: s
					}) && !Object(c.G)(e) && !Object(a.a)(e)
				}
			})(e => {
				let {
					canShowAd: t,
					postId: s,
					commentsPageKey: n,
					...o
				} = e;
				return t ? r.a.createElement(d.a, o) : null
			})
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
				o = s.n(r);
			t.a = n.a.div("container", o.a)
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = s("./src/reddit/selectors/meta.ts"),
				v = s("./src/redditGQL/types.ts"),
				O = s("./src/reddit/components/SidebarFooter/index.m.less"),
				y = s.n(O);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = c.a.a("Link", y.a), j = Object(i.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), E = Object(o.b)(j), k = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, s, !!u.c[t] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), t === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(E(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.gd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.gd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.gd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(S, {
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
					return s.includes(t) || "en" === t ? r.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: y.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
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
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const f = c.g[1] + 24,
				x = m.f + 8,
				v = x + 152 + 16,
				O = v + f + 8,
				y = h.a.div("Container", b.a),
				C = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(d.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?x:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				_ = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && o && !r,
							[b.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class j extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > O,
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							hideFooter: o,
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !o && a.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(C, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const E = Object(u.v)();
			t.a = E(j)
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/widgets.ts"),
				m = s("./src/lib/linkMatchers/index.ts"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/reddit/components/SubredditNav/index.m.less"),
				x = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = (e, t, s) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: s
				}),
				y = e => {
					let {
						children: t,
						isActive: s,
						isTopBannerVariant: n,
						...o
					} = e;
					return r.a.createElement("div", v({
						className: O(x.a.subNavTitle, s, n)
					}, o), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				C = e => {
					let {
						className: t,
						href: s,
						isActive: n,
						to: o,
						isTopBannerVariant: i,
						...a
					} = e;
					const c = O(x.a.navLink, n, i);
					return o ? r.a.createElement(u.a, v({
						className: c,
						to: o
					}, a)) : s ? r.a.createElement(b.b, v({
						className: c,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, a)) : r.a.createElement("a", v({
						className: c
					}, a))
				},
				_ = e => {
					let {
						className: t,
						isActive: s,
						...n
					} = e;
					return r.a.createElement(u.a, v({
						className: Object(p.a)(O(x.a.navLink, s), t)
					}, n))
				},
				j = e => {
					let {
						className: t,
						href: s,
						isActive: n,
						...o
					} = e;
					return s ? r.a.createElement(b.b, v({
						className: O(x.a.subNavLink, n),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, o)) : r.a.createElement("a", v({
						className: O(x.a.subNavLink, n)
					}, o))
				},
				E = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement("div", v({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, s))
				},
				k = e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return r.a.createElement("div", v({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: s
						})
					}, n))
				};
			class S extends r.a.Component {
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
					}, e.label), r.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var w = S;
			const P = e => {
				const t = e.url && Object(m.h)(m.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? r.a.createElement(C, {
					href: P(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(w, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(j, {
					key: `${e.text}-${P(e)}`,
					role: "listitem",
					href: P(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				N = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = Object(i.c)({
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
					return Object(N.Y)(e, {
						subredditId: s
					})
				}
			});
			var M = Object(o.b)(F, (e, t) => ({
					onActivate: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: s,
						onActivate: n
					} = e;
					const o = Object(L.a)();
					return t ? r.a.createElement(_, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: s,
						onClick: e => {
							Object(c.J)(o) && !Object(c.R)(o) && e.preventDefault(), n()
						}
					}, R._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = s("./src/reddit/actions/economics/predictions/index.ts"),
				A = s("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				D = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				W = s("./src/reddit/helpers/trackers/predictions.ts"),
				U = s("./src/reddit/hooks/useTracking.ts"),
				V = s("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(o.d)(),
					i = Object(L.a)(),
					a = Object(U.a)(),
					c = Object(D.S)(i),
					[d, l] = Object(n.useState)(!1),
					m = Object(o.e)(e => Object(N.Y)(e, {
						subredditId: t
					})),
					u = Object(o.e)(e => Object(N.S)(e, {
						subredditId: t
					})),
					p = Object(o.e)(e => Object(V.d)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(V.e)(e, {
						subredditId: t
					}));
				Object(A.a)(t);
				return Object(n.useEffect)(() => {
					!u || d || p || c || (s(Object(B.m)(m.name)), l(!0))
				}, [u, d, p, c, s, m.name]), u && p ? r.a.createElement(_, {
					className: x.a.predictionsFilter,
					isActive: c,
					onClick: () => {
						s(Object(T.p)({
							subredditId: t,
							forceState: !1
						})), a(Object(W.i)())
					},
					to: `${m.url}predictions/`
				}, H._("Predictions", null, {
					hk: "Cv5GC"
				}), b && r.a.createElement("span", {
					className: x.a.liveIcon
				}, H._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var K = s("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const G = Object(c.v)(),
				Y = [K.Sb.SUBREDDIT, K.Sb.COMMENTS, K.Sb.COLLECTION_COMMENTS],
				Q = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Y.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(c.R)(t.pageLayer)
				});
			var J = G(Object(o.b)(Q, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isPredictionsPage: o,
						isTopBannerVariant: i,
						onTurnOffMetaFilter: a
					} = e, c = n && !s && !o;
					return r.a.createElement(C, {
						to: t,
						isActive: c,
						isTopBannerVariant: i,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, q._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Z = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				X = s("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(X.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = s("./src/reddit/constants/postLayout.ts"),
				te = s("./src/reddit/constants/screenWidths.ts"),
				se = s("./src/reddit/models/Theme/index.ts"),
				ne = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const re = Object(Z.a)(e => {
				let {
					className: t,
					children: s,
					isTopBannerVariant: n,
					...o
				} = e;
				const i = Object(ne.a)(o);
				return r.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: i.navBar.useOverlay && !n ? "relative" : "static",
						...i.navBar.useOverlay && !n ? {
							marginTop: -26
						} : {},
						background: n ? "inherit" : Object(se.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var oe = e => r.a.createElement(re, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement($, null))),
				ie = s("./src/reddit/constants/wiki.ts"),
				ae = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, o = !!n && !!n.meta && n.meta.name === K.Sb.SUBREDDIT_WIKI, i = `wiki/${ie.i}`, a = t.endsWith("/") ? t + i : `${t}/${i}`;
				return r.a.createElement(C, {
					isActive: o,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, ce._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(d.a)("spPolls", M),
				me = Object(c.v)(),
				ue = Object(i.c)({
					layout: c.U,
					widget: l.f
				}),
				pe = Object(o.b)(ue);
			t.a = me(pe(Object(a.c)(e => r.a.createElement(oe, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(J, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(le, {
				subredditId: e.subredditId
			}), r.a.createElement(z, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(de, {
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
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				continue: "_2iLUa1DN5bY9-oFqq3UDXm",
				dismiss: "jUfd4Daob69A2WDKby-IL",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk",
				skippable_buttons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippableButtons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippable_text: "_34buUN_wpZWBk7ZZDKk22N",
				skippableText: "_34buUN_wpZWBk7ZZDKk22N",
				divider: "_1JdIhyGz5k8UXyob0yI3eQ",
				dividerLine: "_2EgPyPNCnTr8g29n_87SnQ",
				dividerText: "_2XFvLCiMiPd0uBLWJYtxVx",
				no_border: "_2Mu2w6atAZCJ-gttdRheE",
				noBorder: "_2Mu2w6atAZCJ-gttdRheE",
				contentDescription: "_2jlY07_8wxFjuu6Ecrk9zV",
				warning__bypassable: "_38T2FKI5k99IDlivrOi6kk",
				warningBypassable: "_38T2FKI5k99IDlivrOi6kk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return A
			}));
			var n, r = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/helpers.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/actions/login.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/components/Footer/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				O = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/sample/index.ts"),
				C = s("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(n || (n = {}));
			const _ = e => {
				Object(v.b)() || Object(C.b)(O.o.Redesign, {
					type: C.a.NsfwBypassableBlocking,
					data: {
						action: e
					}
				})
			};
			var j = s("./src/reddit/selectors/telemetry.ts");
			const E = "nsfw_dialog_bypassable";
			var k;
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(k || (k = {}));
			var S = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, a.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: e.fill || k.DEFAULT
				}), a.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: e.fill || k.DEFAULT
				}), a.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: e.fill || k.DEFAULT
				})),
				w = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				P = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				I = s("./src/reddit/actions/contentGate.ts"),
				N = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				T = s.n(N);
			const L = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				R = () => o.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				F = () => o.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				M = e => {
					const t = Object(c.d)(),
						s = Object(g.b)(),
						n = Object(c.e)(w.g),
						r = Object(i.useCallback)(() => {
							n === w.a.Blurred && t(Object(b.k)({
								actionSource: b.a.NsfwBlockingModal
							}))
						}, [t, n]),
						m = (e => e ? a.a.createElement("div", {
							className: T.a.cta
						}, o.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), o.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: T.a.cta
						}, o.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === w.a.Blurred);
					return Object(i.useEffect)(() => {
						Object(v.d)(n)
					}, [n]), a.a.createElement("div", {
						className: T.a.mainCta
					}, a.a.createElement(S, null), m, a.a.createElement("div", {
						className: T.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: T.a.warning
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: T.a.buttonContainer
					}, a.a.createElement(x.j, {
						className: T.a.logIn,
						onClick: () => {
							s((() => e => ({
								...Object(j.o)(e),
								source: "xpromo",
								action: "click",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(j.d)(e)
								}
							}))()), r(), Object(v.c)(v.a.Login), t(Object(p.openLoginModal)())
						}
					}, R()), a.a.createElement(x.j, {
						className: T.a.cancel,
						onClick: () => {
							Object(l.b)(), s((() => e => ({
								...Object(j.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(j.d)(e)
								}
							}))()), Object(v.c)(v.a.Dismiss), t(Object(d.b)("/"))
						}
					}, F())))
				},
				B = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: T.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: T.a.qrCodeInner
					}, a.a.createElement("img", {
						className: T.a.qrCode,
						alt: o.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: T.a.copyLine1
					}, (() => o.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: T.a.copyLine2
					}, (() => o.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: T.a.sneakySnoo,
						src: t
					})))
				}),
				A = e => {
					const t = Object(g.b)(),
						{
							contentTitle: s
						} = e,
						n = Object(c.e)(w.i),
						r = Object(c.e)(w.j),
						o = Object(c.e)(w.g),
						i = Object(c.e)(P.c);
					a.a.useEffect(() => {
						i.isNewDesignVariant ? t((() => e => ({
							...Object(j.o)(e),
							source: "xpromo",
							action: "view",
							noun: E,
							actionInfo: {
								...Object(j.d)(e)
							}
						}))()) : t((() => e => ({
							...Object(j.o)(e),
							source: "xpromo",
							action: "view",
							noun: "nsfw_dialog",
							actionInfo: {
								...Object(j.d)(e)
							}
						}))())
					}, [i, t]);
					const d = o === w.a.Blurred ? h.a.White : o === w.a.NoPreview ? h.a.Grey : void 0;
					return a.a.createElement("div", {
						className: T.a.container
					}, i.isNewDesignVariant ? a.a.createElement(D, {
						contentTitle: s
					}) : a.a.createElement(M, {
						contentTitle: s
					}), a.a.createElement("div", {
						className: Object(m.a)(T.a.footerWrapper, {
							[T.a.mIsModal]: o === w.a.Blurred
						})
					}, a.a.createElement(h.b, {
						textColor: d
					})), a.a.createElement(B, {
						qrCodeAsset: (() => n === f.dd.Enabled || r === f.gb.BlurredPreview || r === f.gb.NoPreview ? L.d2x_nsfw_signup_blocking_de_v1 : L.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				D = e => {
					const t = Object(c.d)(),
						s = Object(g.b)(),
						r = Object(c.e)(w.h);
					return Object(i.useEffect)(() => {
						(e => {
							!Object(v.b)() && e && Object(y.b)(10) && Object(C.b)(O.o.Redesign, {
								type: C.a.NsfwBypassableBlocking,
								data: {
									action: n.View,
									variant: e
								}
							})
						})(r)
					}, [r]), a.a.createElement("div", {
						className: Object(m.a)(T.a.mainCta, {
							[T.a.skippable_buttons]: r === f.hb.SkippableButtons,
							[T.a.skippable_text]: r === f.hb.SkippableText
						})
					}, a.a.createElement("div", {
						className: T.a.contentDescription
					}, a.a.createElement(S, {
						fill: k.BLACK
					}), a.a.createElement("span", {
						className: T.a.cta
					}, e.contentTitle), a.a.createElement("span", {
						className: Object(m.a)(T.a.warning, T.a.warning__bypassable)
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), a.a.createElement("div", {
						className: T.a.cta
					}, (() => o.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), a.a.createElement("div", {
						className: T.a.buttonContainer
					}, a.a.createElement(x.j, {
						className: T.a.logIn,
						onClick: () => {
							s((() => e => ({
								...Object(j.o)(e),
								source: "xpromo",
								action: "click",
								noun: E,
								actionInfo: {
									...Object(j.d)(e),
									popupButtonText: "login"
								}
							}))()), _(n.Login), t(Object(p.openLoginModal)())
						}
					}, R()), r === f.hb.SkippableButtons && a.a.createElement("div", {
						className: T.a.divider
					}, a.a.createElement("div", {
						className: T.a.dividerLine
					}), a.a.createElement("div", {
						className: T.a.dividerText
					}, (() => o.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), a.a.createElement("div", {
						className: T.a.dividerLine
					})), a.a.createElement(x.j, {
						className: T.a.continue,
						onClick: async () => {
							s((() => e => ({
								...Object(j.o)(e),
								source: "xpromo",
								action: "click",
								noun: E,
								actionInfo: {
									...Object(j.d)(e),
									popupButtonText: "continue"
								}
							}))()), _(n.Continue), Object(I.q)(), Object(P.d)(), window.location.reload()
						}
					}, (() => o.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), a.a.createElement(x.j, {
						className: Object(m.a)(T.a.continue, T.a.dismiss, {
							[T.a.no_border]: r === f.hb.SkippableText
						}),
						onClick: () => {
							s((() => e => ({
								...Object(j.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: E,
								actionInfo: {
									...Object(j.d)(e),
									popupButtonText: "back"
								}
							}))()), _(n.Dismiss), t(Object(d.b)("/"))
						}
					}, r === f.hb.SkippableText ? (() => o.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : F())))
				}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/UsersCountIndicator/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "UsersCountIndicator",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UsersCountIndicator").then(s.bind(null, "./src/reddit/components/UsersCountIndicator/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/UsersCountIndicator/index.tsx"
				}
			})
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				d = s.n(c);
			const l = i.a.div("Rule", d.a),
				m = i.a.div("RuleIndex", d.a),
				u = i.a.div("RuleTitle", d.a);
			t.a = e => o.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, o.a.createElement(l, null, o.a.createElement(m, null, 1, "."), o.a.createElement(u, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), o.a.createElement(l, null, o.a.createElement(m, null, 2, "."), o.a.createElement(u, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), o.a.createElement(l, null, o.a.createElement(m, null, 3, "."), o.a.createElement(u, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), o.a.createElement(l, null, o.a.createElement(m, null, 4, "."), o.a.createElement(u, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
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
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(a);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return r.a.createElement("div", s, r.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
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
				return k
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				j = s.n(_);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => o.a.createElement(b.a, {
					className: Object(d.a)(j.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: j.a.container
				}, e.isLoading ? o.a.createElement(f.a, {
					className: j.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: j.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(w, E({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(g.t, {
					className: j.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(c.c)({
					hideNSFWPref: y.H,
					nightmode: y.fb
				}),
				w = Object(i.b)(S)(e => o.a.createElement("div", {
					className: Object(d.a)(j.a.communityItemContainer, {
						[j.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(v.a, {
					className: j.a.communityItemExpandCenter,
					widthRight: h.s
				}, o.a.createElement("div", {
					className: j.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: j.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: j.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(C.b)(e.name, e.type),
					to: Object(C.a)(e.name, e.type)
				}, Object(C.b)(e.name, e.type)), o.a.createElement("div", {
					className: j.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: j.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && o.a.createElement(l.b, {
					className: j.a.nsfwFlair,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(f.a, {
					className: Object(d.a)(j.a.communityCta, j.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(g.t, {
					className: j.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(p, {
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
				}) : o.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: j.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
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
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				_ = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				k = Object(h.v)({
					filterName: e => Object(h.Z)(e)[b.j],
					url: e => Object(h.fb)(e)
				}),
				S = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				w = Object(i.b)(S),
				P = l.a.div("WidgetContent", _.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(_.a.StyledFlair, t === O.g.Cloud && _.a.cloudDisplay, {
							[_.a.flairFilter]: s,
							[_.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(x.g)(i.flair)),
						onMouseDown: n
					}, o.a.createElement(m.b, j({}, i, {
						className: _.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
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
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(g.r, {
						className: _.a.flairFilterButton,
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
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
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
					} = this.state, s = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: _.a.flairFilterContainer,
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
					return o.a.createElement("ul", null, o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
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
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(r) || void 0, a = t.order.length > n.length || s && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(P, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = k(w(Object(u.c)(N)))
		},
		"./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less": function(e, t, s) {
			e.exports = {
				RecommendationSidebar: "_3Ndcxbm5f0pPvNSI2kk7Ua",
				recommendationSidebar: "_3Ndcxbm5f0pPvNSI2kk7Ua",
				isSticky: "_11FHz1-jlbYJ0ogJJ8HlvS"
			}
		},
		"./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/classnames/index.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less"),
				c = s.n(a);
			class d extends i.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.threshold = 0, this.ref = i.a.createRef(), this.measure = () => {
						if (!this.state.isSticky && this.ref && this.ref.current) {
							const e = this.ref.current.getBoundingClientRect(),
								t = document.documentElement.scrollTop,
								s = e.top + t,
								n = this.ref.current.clientHeight;
							this.offset = window.innerHeight - n, this.threshold = n + s - window.innerHeight
						}
					}, this.handleScroll = () => {
						this.measure(), this.setState({
							isSticky: this.threshold > 0 && window.scrollY >= this.threshold
						})
					}, this.ref = i.a.createRef(), this.state = {
						isSticky: !1
					}
				}
				componentDidMount() {
					this.measure(), window.addEventListener("scroll", this.handleScroll)
				}
				componentWillUnmount() {
					window.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					return i.a.createElement("div", {
						style: this.ref.current ? {
							height: this.ref.current.clientHeight
						} : {}
					}, i.a.createElement("div", {
						ref: this.ref,
						style: this.state.isSticky ? {
							top: this.offset
						} : {},
						className: r()(this.props.className, c.a.recommendationSidebar, {
							[c.a.isSticky]: this.state.isSticky
						})
					}, this.props.children))
				}
			}
		},
		"./src/reddit/components/Widgets/Recommendations/index.m.less": function(e, t, s) {
			e.exports = {
				recommendationWidget: "_1WHlo0amI-5XpQrgGac9jY",
				postPreview: "_3G-DpckPZwPYm-VEwXS5uA",
				thumbnail: "_2DBbsvO3jP7bcFqAftcbiQ",
				subredditTitle: "WfSCvRO60bnRAHFf76dCJ",
				subredditName: "_1AF1qgUDsTX_XHGNtb9eTD",
				subredditIcon: "bl4ZZFlSdSp0651LqnPbO",
				metaContainer: "BwvWQ18WXJeAju_oSfQGJ",
				metaSection: "BBzDU1DzKBAtxEtIy16cO",
				dotSpacer: "_2Dy7qlY8h2gM-idmKUvIwU",
				icon: "_3JBKdIEBBJDr8ks2UAEKb6",
				postTitle: "_16PE03zyTycZgJEtewpplw",
				shortTitle: "_2PD84jAIu_lwZaR50QQvOM",
				communityBannerPlaceholder: "_2D7zl_d54nzW6JddGmlL0v",
				glimmer: "_3TZhL8u0Es1uNC4NiTMq6T",
				placeholderWrapper: "_7E_JlVtw5vjKoE_zXOqOu",
				subredditIconLoading: "_1vB3FG5cxYqw1tOuiA4XY9",
				subredditNameLoading: "_1yeeGZiqTUF5R2CX3OeN-6",
				postTitleLoading: "_1XDqtC7PCill1D0glb6XnR",
				postMetaSectionLoading: "_2K21kGnTaAQg66D6rlbV2-",
				verticalPostPreviewContainer: "_1Rbe3T11RIqoP4Q5IhxfnO",
				verticalPostPreviewThumbnail: "_23aHU6t4uajlAh0CKp4cOP"
			}
		},
		"./src/reddit/components/Widgets/Recommendations/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/pick.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const g = e => ({
					...h.o(e),
					source: "global",
					noun: "discovery_unit",
					action: "view",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				f = e => ({
					...h.o(e),
					source: "post",
					noun: "upvote",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				x = e => ({
					...h.o(e),
					source: "post",
					noun: "comments",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				});
			var v = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				y = s("./node_modules/lodash/once.js"),
				C = s.n(y),
				_ = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				S = s("./src/lib/timeAgo/index.ts"),
				w = s("./src/lib/truncateText/index.ts"),
				P = s("./src/reddit/components/Flair/index.tsx"),
				I = s("./src/reddit/components/SubredditIcon/index.tsx"),
				N = s("./src/reddit/constants/thumbnails.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				L = s("./src/reddit/helpers/trackers/post.ts"),
				R = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				F = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				M = s("./src/reddit/models/Flair/index.ts"),
				B = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				A = s("./src/reddit/actions/linkedPosts/index.ts"),
				D = s("./src/reddit/constants/experiments.ts"),
				W = s("./src/reddit/components/Widgets/Recommendations/index.m.less"),
				U = s.n(W);
			const V = 2e3;
			class H {
				constructor(e, t) {
					this.intersectingRatio = -1, this.consumed = !1, this.maybeConsume = () => {
						this.clearConsumeTimeout(), this.isConsuming() && (this.onConsume(), this.consumed = !0, this.disconnect())
					}, this.handleIntersectionEvent = e => {
						this.intersectingRatio = e[0].intersectionRatio, this.isViewing() && this.onView(), !this.isConsuming() || this.consumed || this.consumeTimeoutId || (this.consumeTimeoutId = setTimeout(this.maybeConsume, V))
					}, this.onConsume = C()(t), this.onView = C()(e), this.observer = new IntersectionObserver(this.handleIntersectionEvent, {
						threshold: [0, 1]
					})
				}
				isConsuming() {
					return this.intersectingRatio >= 1
				}
				isViewing() {
					return this.intersectingRatio > 0
				}
				clearConsumeTimeout() {
					this.consumeTimeoutId && (clearTimeout(this.consumeTimeoutId), this.consumeTimeoutId = void 0)
				}
				connect(e) {
					this.observer.observe(e)
				}
				disconnect() {
					this.clearConsumeTimeout(), this.observer.disconnect()
				}
			}
			var z = Object(p.c)(e => {
				const t = Object(l.d)(),
					{
						post: s,
						sendEvent: n
					} = e,
					r = Object(c.useRef)(null),
					o = Object(c.useRef)(null),
					i = Object(l.e)(e => e.subreddits.models[s.belongsTo.id]),
					a = Object(l.e)(B.a) === D.gd.LargeImagePreview;
				Object(c.useEffect)(() => {
					var e;
					null === (e = o.current) || void 0 === e || e.disconnect(), o.current = new H(() => {
						n(Object(L.g)(s.id))
					}, () => {
						n(Object(L.d)(s.id, V, !0))
					}), o.current.connect(r.current)
				}, [s, n]);
				const m = Object(c.useCallback)(() => {
						const e = Object(u.a)(s.id);
						t(Object(A.c)({
							key: e
						})), window.scroll(0, 0), n(Object(L.f)(s.id))
					}, [s, n, t]),
					p = Object(c.useCallback)(() => {
						n(f)
					}, [n]),
					b = Object(c.useCallback)(() => {
						n(x)
					}, [n]),
					{
						created: h,
						numComments: g,
						thumbnail: v,
						upvoteRatio: O,
						permalink: y,
						title: C
					} = s,
					W = O ? `${Math.round(100*O)}%` : "",
					z = s.flair.length ? s.flair.findIndex(e => e.type === M.f.Nsfw) : -1;
				return d.a.createElement("li", {
					className: U.a.postPreview,
					ref: r,
					onClick: m
				}, d.a.createElement(_.a, {
					to: Object(T.b)(y)
				}, a ? (() => d.a.createElement("div", {
					className: U.a.verticalPostPreviewContainer
				}, d.a.createElement("div", {
					className: U.a.verticalPostPreviewHeader
				}, d.a.createElement("div", {
					className: U.a.subredditTitle
				}, d.a.createElement(I.b, {
					className: U.a.subredditIcon,
					subredditOrProfile: i
				}), d.a.createElement("span", {
					className: U.a.subredditName
				}, i && `r/${i.name}`), z >= 0 && d.a.createElement(P.b, {
					flair: s.flair[z]
				}))), v && Object(E.a)(v.url) && d.a.createElement("div", {
					className: U.a.verticalPostPreviewThumbnail
				}, d.a.createElement("img", {
					className: U.a.thumbnail,
					src: v.url
				})), d.a.createElement("div", {
					className: Object(j.a)(U.a.postTitle, {
						[U.a.shortTitle]: v.url !== N.a.DEFAULT
					})
				}, Object(w.a)(C, 60, "..."))))() : (() => d.a.createElement(d.a.Fragment, null, v && Object(E.a)(v.url) && d.a.createElement("img", {
					className: U.a.thumbnail,
					src: v.url
				}), d.a.createElement("div", {
					className: U.a.subredditTitle
				}, d.a.createElement(I.b, {
					className: U.a.subredditIcon,
					subredditOrProfile: i
				}), d.a.createElement("span", {
					className: U.a.subredditName
				}, i && `r/${i.name}`), z >= 0 && d.a.createElement(P.b, {
					flair: s.flair[z]
				})), d.a.createElement("div", {
					className: Object(j.a)(U.a.postTitle, {
						[U.a.shortTitle]: v.url !== N.a.DEFAULT
					})
				}, Object(w.a)(C, 60, "..."))))(), d.a.createElement("div", {
					className: U.a.metaContainer
				}, d.a.createElement("div", {
					className: U.a.metaSection,
					onClick: p
				}, d.a.createElement(F.a, {
					className: U.a.icon
				}), d.a.createElement("span", null, W)), d.a.createElement("div", {
					className: U.a.metaSection,
					onClick: b
				}, d.a.createElement(R.a, {
					className: U.a.icon
				}), d.a.createElement("span", {
					className: U.a.meta
				}, Object(k.b)(g))), d.a.createElement("span", {
					className: U.a.dotSpacer
				}), d.a.createElement("div", {
					className: U.a.metaSection
				}, d.a.createElement("span", null, Object(S.a)(h / 1e3, !0))))))
			});
			var K = e => d.a.createElement("div", {
				className: Object(j.a)(U.a.placeholderWrapper)
			}, d.a.createElement("div", {
				className: U.a.header
			}, d.a.createElement("span", {
				className: U.a.subredditIconLoading
			}), d.a.createElement("span", {
				className: U.a.subredditNameLoading
			})), d.a.createElement("div", {
				className: U.a.postTitleLoading
			}), d.a.createElement("div", {
				className: U.a.postMetaSectionLoading
			}));
			const q = () => n.fbt._("Similar to this post", null, {
					hk: "XKYGj"
				}),
				G = [];
			for (let X = 0; X < 15; X++) G.push(d.a.createElement(K, {
				key: X
			}));
			const Y = (e, t) => {
					const {
						post: s
					} = t;
					return Object(u.a)(s.id)
				},
				Q = Object(m.a)((e, t) => {
					const s = Y(0, t);
					return Object(O.z)(e, {
						listingKey: s
					})
				}, e => e.posts.models, (e, t) => {
					const s = Y(0, t);
					return Object(v.d)(e, {
						listingKey: s
					})
				}, (e, t, s) => {
					const n = [];
					let r = 0,
						o = 0;
					for (; r < 15 && o < e.length;) {
						const s = t[e[o++]];
						s && s.belongsTo && "subreddit" === s.belongsTo.type && (n.push(s), r++)
					}
					return {
						posts: n,
						isPending: s
					}
				});

			function J(e, t) {
				const s = ["posts", "isPending"];
				return o()(a()(e, s), a()(t, s))
			}
			const Z = d.a.memo((function(e) {
				let {
					post: t,
					subredditOrProfile: s
				} = e;
				const n = Object(p.b)(),
					{
						posts: r,
						isPending: o
					} = Object(l.e)(e => Q(e, {
						post: t,
						subredditOrProfile: s
					}), J);
				if (Object(c.useEffect)(() => {
						n(g)
					}, [n]), !r.length && !o) return null;
				const i = (null == r ? void 0 : r.length) && r.map((e, t) => d.a.createElement(z, {
					post: e,
					key: t
				}));
				return d.a.createElement(b.a, {
					title: q()
				}, d.a.createElement("ul", null, o ? G : i))
			}));
			t.a = Z
		},
		"./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less": function(e, t, s) {
			e.exports = {
				ImageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				imageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				Center: "_2KLA5wMaJBHg0K2z1q0ci_",
				center: "_2KLA5wMaJBHg0K2z1q0ci_",
				Upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				LineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				lineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				HorizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				horizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				CircleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				circleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				Circle: "_2gaJVJ6_j7vwKV945EABN9",
				circle: "_2gaJVJ6_j7vwKV945EABN9"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_3gbb_EMFXxTYrxDZ2kusIp",
				button: "_3gbb_EMFXxTYrxDZ2kusIp"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
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
		"./src/reddit/components/Widgets/ReredditLink/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2YJDRz5rCYQfu8YdgB_neb",
				widget: "_2YJDRz5rCYQfu8YdgB_neb",
				ButtonContainer: "_37WD6iicVS6vGN0RomNTwh",
				buttonContainer: "_37WD6iicVS6vGN0RomNTwh"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "ReredditButtons", (function() {
				return w
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/helpers/trackers/widgets.ts"),
				l = s("./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less"),
				m = s.n(l);
			const u = `${a.a.assetPath}/img/widgets/rereddit-promo/`;
			var p = e => {
					let {
						url: t,
						postId: s
					} = e;
					const o = Object(c.b)(),
						i = Object(n.useCallback)(() => {
							o(Object(d.a)(s))
						}, [s, o]),
						l = `${a.a.redditUrl}/posts/${t}`;
					return r.a.createElement("a", {
						href: l,
						onClick: i,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement("div", {
						className: m.a.ImageContainer
					}, r.a.createElement("img", {
						src: `${u}left.png`
					}), r.a.createElement("img", {
						className: m.a.Center,
						src: `${u}center.png`
					}), r.a.createElement("img", {
						src: `${u}right.png`
					}), r.a.createElement("img", {
						className: m.a.Upvotes,
						src: `${u}upvotes.png`
					})), r.a.createElement("div", {
						className: m.a.LineContainer
					}, r.a.createElement("img", {
						className: m.a.HorizontalLine,
						src: `${u}line.png`
					}), r.a.createElement("div", {
						className: m.a.CircleContainer
					}, r.a.createElement("div", {
						className: m.a.Circle
					}))))
				},
				b = s("./src/reddit/components/SidebarFooter/index.m.less"),
				h = s.n(b),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less"),
				x = s.n(f);
			const v = o.a.a("Link", h.a);
			var O = e => {
					let {
						buttonText: t,
						children: s,
						postId: o,
						renderAsPlainLink: i,
						url: l
					} = e;
					const m = Object(c.b)(),
						u = Object(n.useCallback)(() => {
							m(Object(d.a)(o, t))
						}, [o, t, m]);
					return i ? r.a.createElement(v, {
						href: `${a.a.redditUrl}/posts/${l}`,
						onClick: u,
						target: "_blank"
					}, s) : r.a.createElement(g.t, {
						className: x.a.Button,
						href: `${a.a.redditUrl}/posts/${l}`,
						kind: g.b.ExternalLink,
						onClick: u,
						target: "_blank"
					}, s)
				},
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				C = s("./src/reddit/helpers/ordinal/index.ts"),
				_ = s("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				j = s.n(_);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], S = o.a.div("ButtonContainer", j.a), w = e => {
				let {
					directoryTimestamp: t,
					postId: s,
					renderAsPlainLink: n
				} = e;
				const o = new Date(t),
					i = k[o.getMonth()],
					a = o.getFullYear(),
					c = o.getDate(),
					d = Object(C.a)(c),
					l = `${a}/${i}-${c}-1/`,
					m = `${a}/${i}/`,
					u = `${a}/`;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(O, {
					key: "ymd",
					buttonText: `top_posts_${i}_${d}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: l
				}, E._("Top posts {date}", [E._param("date", `${i} ${d} ${a}`)], {
					hk: "4xgYoo"
				})), r.a.createElement(O, {
					key: "ym",
					buttonText: `top_posts_of_${i}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: m
				}, E._("Top posts of {date}", [E._param("date", `${i}, ${a}`)], {
					hk: "HQnvs"
				})), r.a.createElement(O, {
					key: "y",
					buttonText: `top_posts_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: u
				}, E._("Top posts {date}", [E._param("date", `${a}`)], {
					hk: "4xgYoo"
				})))
			};
			t.default = e => {
				let {
					directoryTimestamp: t,
					postId: s
				} = e;
				const n = new Date(t),
					o = k[n.getMonth()],
					a = `${n.getFullYear()}/${o}-${n.getDate()}-1/`;
				return r.a.createElement(i.a, null, r.a.createElement(y.a, {
					className: j.a.Widget,
					contentOnly: !0
				}, r.a.createElement(p, {
					postId: s,
					url: a
				}), r.a.createElement(S, null, r.a.createElement(w, {
					directoryTimestamp: t,
					postId: s
				}))))
			}
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
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/helpers/dom/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = s("./src/reddit/models/Widgets/index.ts"),
				h = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = s.n(h);
			const f = c.a.div("RuleShortName", g.a),
				x = c.a.div("RuleIndex", g.a),
				v = c.a.div("RuleTitle", g.a),
				O = c.a.div("RuleDescription", g.a),
				y = c.a.wrapped(d.a, "RawHTMLDisplay", g.a),
				C = {};
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
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
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !n(e) && !!r;
					return o.a.createElement(f, {
						className: Object(a.a)({
							[g.a.pointerCursor]: i,
							[g.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(p.a, null, o.a.createElement(x, {
						className: Object(a.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), o.a.createElement(v, null, `${e.rule.shortName}`), o.a.createElement("div", null, !n(e) && r && o.a.createElement(u.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && o.a.createElement(O, {
						className: Object(a.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? o.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: C
					}) : e.rule.descriptionHtml ? o.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? o.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return o.a.createElement(_, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null;
			t.b = e => o.a.createElement(j, {
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = O(e);
					return Object(x.f)(t)
				},
				_ = e => {
					const t = y(e);
					return Object(x.f)(t)
				};
			var j = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(j);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.v)(), w = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.fb)(e);
					return n || r
				},
				nigtmode: f.fb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class P extends r.a.Component {
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? E.a.widgetContentOnly : E.a.widgetContent, g = !n && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: n,
							[E.a.clickable]: !!c,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: f
					}, m && r.a.createElement("div", {
						className: Object(a.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: i,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(E.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(w(Object(c.a)(Object(l.c)(P))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Be
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/helpers/widgets/index.tsx"),
				h = s("./src/reddit/models/Image/index.tsx"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/telemetry/models/Outbound.ts"),
				y = s("./src/reddit/components/Widgets/Button/index.m.less"),
				C = s.n(y);
			const _ = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === f.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: o
						} = e;
						return t && (n = o = s, r = "transparent"), {
							"--widget-button-background-color": `${r||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${o||n}`
						}
					})(e, t, s);
					const o = e.hoverState || e;
					if (o.kind === f.k.Image) r = {
						"--widget-button-hover-background-image": `url('${o.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: i
						} = o;
						t && (e = i = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${i||e}`
						}
					}
					return {
						...n,
						...r
					}
				},
				j = e => e.kind === f.k.Image ? C.a.imageButton : C.a.textButton,
				E = e => {
					const t = Object(b.h)(e),
						s = Object(p.h)(p.f, t);
					return s ? s.url : e.url
				},
				k = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(g.a)(e).button;
					return r.a.createElement(d.t, {
						className: j(t),
						style: _(t, s, n),
						isFullWidth: !0,
						size: d.d.S,
						priority: d.c.Secondary
					}, t.kind === f.k.Text && r.a.createElement("span", {
						className: t.hoverState ? C.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.k.Text && r.a.createElement("span", {
						className: C.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				S = e => r.a.createElement(l.b, {
					href: E(e.button),
					sourceElement: O.SourceElement.SidebarWidget
				}, r.a.createElement(k, e)),
				w = u.a.wrapped(a.a, "RawHTMLDisplay", C.a);
			var P = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: v.fb
				}))(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== f.k.Image || e.hoverState.url !== h.c)).map(t => r.a.createElement(S, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/reddit/components/HumanDate/index.tsx"),
				T = s("./src/reddit/controls/TextButton/index.tsx"),
				L = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				R = s.n(L);
			const F = 100,
				M = {
					isExpanded: !1
				},
				B = u.a.wrapped(a.a, "RawHTMLDisplay", R.a),
				A = u.a.div("EventContainer", R.a),
				D = u.a.div("EventTitle", R.a),
				W = u.a.div("EventDate", R.a),
				U = u.a.div("EventLocation", R.a),
				V = u.a.div("EventDescription", R.a),
				H = u.a.wrapped(T.a, "ToggleDescription", R.a);
			class z extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > F ? r.a.createElement(V, null, t.isExpanded ? e.text : e.text.slice(0, F), r.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(V, null, e.text)
				}
			}
			var K = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(A, {
					key: `${s}-${t.title}`
				}, r.a.createElement(D, null, t.titleHtml ? r.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(W, null, r.a.createElement(N.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${s}:0${n}` : `${s}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(U, null, t.locationHtml ? r.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(z, {
					text: t.description
				})))),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Y = Object(q.c)(e => r.a.createElement(G.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Q = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(o.b)(Q),
				Z = (e, t, s) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${s}</body>`;
			class X extends r.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Z(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(c.a, {
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
			var $ = J(X),
				ee = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = s.n(ee);
			var se = u.a.div("ImageFrame", te.a),
				ne = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = s.n(ne);
			var oe = u.a.img("StyledImage", re.a);
			class ie extends r.a.Component {
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
						n = r.a.createElement(se, null, r.a.createElement(oe, {
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
			var ae = ie,
				ce = s("./src/config.ts"),
				de = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = s("./src/lib/opener/index.ts"),
				me = s("./src/reddit/components/Flair/index.tsx"),
				ue = s("./src/reddit/controls/InternalLink/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = s("./src/reddit/models/Flair/index.ts"),
				he = s("./src/reddit/selectors/subreddit.ts"),
				ge = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				fe = s.n(ge);
			const xe = u.a.a("ExternalLink", fe.a),
				ve = u.a.div("ModeratorListItem", fe.a),
				Oe = u.a.div("Username", fe.a),
				ye = u.a.wrapped(me.b, "FlairComponent", fe.a),
				Ce = e => e.authorFlairType === be.f.Richtext ? {
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
				_e = e => r.a.createElement(Oe, null, `u/${e}`),
				je = u.a.wrapped(ue.default, "InternalLink", fe.a),
				Ee = u.a.div("LinkContainer", fe.a),
				ke = Object(i.c)({
					userIsBanned: he.ib,
					userIsLoggedIn: v.S
				});
			var Se = Object(o.b)(ke)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n,
						userIsLoggedIn: o
					} = e;
					return r.a.createElement(c.a, {
						styles: s.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (s.mods && s.mods.length || n) && r.a.createElement(d.t, {
						kind: d.b.InternalLink,
						priority: d.c.Secondary,
						className: fe.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${ce.a.redditUrl}/message/compose?to=/r/${t}`
					}, r.a.createElement(pe.a, {
						className: fe.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(ve, {
						key: e.name
					}, (e => r.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, _e(e.name)))(e), r.a.createElement(ye, {
						flair: Ce(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Ee, null, r.a.createElement(je, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !o ? r.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(xe, {
						href: `${ce.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(xe, {
						href: `${ce.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				we = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Pe = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ne = s.n(Ie);
			const Te = u.a.div("WidgetContent", Ne.a),
				Le = u.a.wrapped(a.a, "RawHTMLDisplay", Ne.a);
			var Re = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Te, null, r.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				Fe = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => r.a.createElement(Fe.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Se;
						case "textarea":
							return Re;
						case "button":
							return P;
						case "subreddit-rules":
							return Pe.b;
						case "community-list":
							return Y;
						case "calendar":
							return K;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return we.a;
						default:
							return Me
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return w
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts"),
				_ = s("./src/reddit/selectors/user.ts");

			function j() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const E = j(),
				k = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: v.g,
					postsById: O.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(O.D)(e, s, n, r)
					}),
					subredditsById: y.fb,
					viewportDataLoaded: C.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.e,
					isLoggedIn: _.S
				},
				S = Object(r.c)(k),
				w = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.N(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				P = e => Object(b.b)({
					...e
				}),
				I = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", r, o, i, void 0)
				},
				N = Object(n.b)(S, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: P,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(E(N(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const i = new n.a(250),
				a = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let a = i.get(r);
						if (void 0 === a) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							a = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(r, a)
						}
						return a
					}
				}
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				r = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				i = 4,
				a = 1e4,
				c = .2,
				d = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/raf/index.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = a.a.createContext(!1);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || o()(this.setVisible)
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
					} = this.state, r = {
						...d,
						...t
					};
					return a.a.createElement(n.a, c({}, r, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(i.useContext)(l)
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
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
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = s || n;
					return r.a.createElement("div", {
						className: e.className
					}, s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				c = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: d,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const u = m.body,
					{
						post: p
					} = u && u.data,
					b = t(),
					h = Object(n.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (p) {
					if (p.otherDiscussions && p.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = p, {
							postFlair: s,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: g
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(o.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === c.a.Post && n.postInfo) {
										const e = Object(o.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(c.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(c.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						d({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: g
						})
					}
				} else d({
					count: 0,
					key: h,
					meta: b.meta,
					postFlair: {},
					postId: l,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => {
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
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const i = "/search/",
				a = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var a;
					const {
						type: c,
						...d
					} = (null == s ? void 0 : s.queryParams) || {}, l = {
						...d,
						type: t,
						sort: void 0,
						t: void 0
					};
					return {
						pathname: (null === (a = null == s ? void 0 : s.routeMatch) || void 0 === a ? void 0 : a.match.url) || i,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/constants/page.ts");
			const o = (e, t) => e.includes(n.ic.Comments) ? r.h.Comments : t || e.includes(n.ic.Posts) ? r.h.Posts : e.includes(n.ic.Users) && !e.includes(n.ic.Subreddits) ? r.h.People : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search/",
					o = "",
					i = e && e[r.z] || "";
				return t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.z]: i,
					[r.C]: o
				})) : (i = i.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.z]: i
				}))
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
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/features/expandedCrossposts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => s => ({
					source: "post_discovery",
					action: "view",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.o(s)
				}),
				o = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.o(s)
				}),
				i = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(n.o)(e),
					media: Object(n.C)(e, t),
					profile: Object(n.T)(e),
					subreddit: Object(n.kb)(e) || Object(n.nb)(e, t)
				}),
				o = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.K)(t, e),
					...r(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.K)(t, e),
					...r(t, e)
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "q", (function() {
				return a
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "g", (function() {
				return u
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
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "f", (function() {
				return _
			}));
			var n = s("./src/reddit/models/Prediction/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = "poll",
				i = "predictions",
				a = e => ({
					...Object(r.o)(e),
					source: o,
					action: "view",
					noun: "predict_option_modal"
				}),
				c = e => {
					let {
						pollId: t,
						selectedNumberCoins: s,
						totalStakeAmount: n
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: o,
						action: "confirm",
						noun: "predict",
						poll: Object(r.J)(e, t, !1, void 0, s),
						goldPurchase: {
							numberCoins: n
						}
					})
				},
				d = e => {
					let {
						pollId: t,
						selectedNumberTokens: s
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: o,
						action: "confirm",
						noun: "predict",
						poll: Object(r.J)(e, t, !1, void 0, void 0, s)
					})
				},
				l = e => {
					let {
						pollId: t,
						currency: s,
						amount: i
					} = e;
					return e => {
						const a = s === n.a.Coins ? i : void 0,
							c = s === n.a.Tokens ? i : void 0;
						return {
							...Object(r.o)(e),
							source: o,
							action: "close",
							noun: "prediction_modal",
							poll: Object(r.J)(e, t, !1, a, c)
						}
					}
				},
				m = e => ({
					...Object(r.o)(e),
					source: o,
					action: "click",
					noun: "add_coins"
				}),
				u = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(r.o)(e),
						source: i,
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
						source: i,
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
					source: i,
					action: "click",
					noun: "next"
				}),
				v = () => e => ({
					...Object(r.o)(e),
					source: i,
					action: "click",
					noun: "add_more"
				}),
				O = () => e => ({
					...Object(r.o)(e),
					source: i,
					action: "click",
					noun: "start_tournament"
				}),
				y = () => e => ({
					...Object(r.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				C = () => e => ({
					...Object(r.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(r.kb)(e)
				}),
				_ = () => e => ({
					...Object(r.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(r.kb)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: r.f.HomeFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				i = () => e => ({
					source: r.f.UserPreferences,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: r.f.UserPreferences,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: r.f.PopularFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: r.f.SubredditIdBanner,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				m = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				u = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return E
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.o(e),
					subreddit: r.kb(e),
					userSubreddit: r.ub(e)
				}),
				i = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...o(e)
				}),
				a = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...o(e)
				}),
				c = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...o(t)
				}),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				u = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				f = c("copy_url"),
				x = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				O = c("ban_wiki_contributor"),
				y = c("unban_wiki_contributor"),
				C = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				_ = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				j = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.d(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				E = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.d(t, {
						settingValue: _[e]
					})
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				r = s("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(n.e)(r.a) === e,
					s = Object(n.e)(r.c) === e,
					o = Object(n.e)(r.e) === e;
				return t || s || o
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(r.a)
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(c.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), r.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), r.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), r.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), r.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const c = e => r.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(o.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				d = e => r.a.createElement("div", {
					className: Object(o.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => r.a.createElement("div", {
					className: Object(o.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends r.a.PureComponent {
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
						isFakeOverlay: n,
						sidebar: o
					} = this.props;
					return r.a.createElement(c, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, r.a.createElement(d, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), o && r.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, o))
				}
			}
			t.a = m
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				m = s.n(l),
				u = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(u);
			t.a = e => {
				let {
					backgroundColor: t,
					className: s,
					containerRef: l,
					content: u,
					navBar: b,
					redditStyle: h,
					sidebar: g,
					subredditId: f
				} = e;
				const x = Object(n.useContext)(c.a),
					v = Boolean(g);
				return r.a.createElement(i.a, {
					subredditId: f
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.outerContainer, a.i, s, {
						[m.a.outerContainerExp]: x
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: a.h,
					redditStyle: h,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: m.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, b), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, v && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, v && p.a.withSidebar)
				}, u), v && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, g)))))))
			}
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
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
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
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/get.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				u = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/contexts/Post/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/pages/CommentsPage/index.tsx"),
				x = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./node_modules/reselect/es/index.js");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(d.b)(() => Object(O.c)({
				primaryPostId: v.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? c.a.createElement(p.a, {
					postId: t
				}, c.a.createElement(f.CommentsPage, y({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(x.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, u.b.IsOverlay, !1), n = i()(t, u.b.CloseLocation, null), o = i()(t, u.b.ScrollOnLoad, !1);
				o && Object(b.c)(u.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: d,
						partialPostId: p,
						subredditName: f,
						collectionId: x
					} = a,
					v = p ? Object(g.z)(p) : void 0,
					O = d && Object(h.h)(d),
					y = r()([...Object(l.a)(e.location.search)]),
					_ = {};
				e.hasSortParam && (_.sort = e.sort, _.hasSortParam = !0);
				const j = Object(m.a)(x, v, O, _);
				return c.a.createElement(C, {
					closeLocation: n,
					collectionId: x,
					commentId: O,
					commentsPageKey: j,
					isOverlay: s,
					location: e.location,
					postId: v,
					instanceId: y.instanceId,
					shouldScrollToComments: o,
					sort: e.sort,
					subredditName: f,
					onOtherDiscussions: !!y.onOtherDiscussions
				})
			})
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG",
				truncate: "xbzEgRwJcItjoGgB6XRNU",
				verticalDivider: "_20butL_jC4sxaGwRs5RrJX",
				flex: "upNIvLv83gYiOnXpgX0WH"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = s("./src/reddit/components/ExpandedCrossposts/async.tsx"),
				p = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				g = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				x = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				v = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/helpers/trackers/searchResults.ts"),
				C = s("./src/reddit/hooks/usePageLayer.ts"),
				_ = s("./src/reddit/selectors/comments.ts"),
				j = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				E = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				S = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				w = s.n(S);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = Object(a.c)({
				commentSearchPdp: j.a,
				isSubredditDiscoveryCrosspostEnabled: E.a,
				headComment: _.x,
				lastPage: k.n,
				post: _.J
			}), N = e => {
				var t, s;
				const n = Object(C.a)(),
					{
						commentSearchPdp: a,
						isSubredditDiscoveryCrosspostEnabled: _,
						headComment: j,
						lastPage: E,
						post: k
					} = Object(o.e)(t => I(t, e)),
					S = Object(b.b)(),
					N = Object(o.d)(),
					{
						commentId: T,
						isOverlay: L,
						postId: R
					} = e;
				if (!k) return null;
				const F = null !== (t = k.numDuplicates) && void 0 !== t ? t : 0,
					M = void 0 !== T,
					B = k.permalink,
					A = F > 0,
					D = Object(g.b)(Object(m.e)(B));
				if (!M && !A) return null;
				const W = (null == E ? void 0 : E.queryParams.q) && (null === (s = E.meta) || void 0 === s ? void 0 : s.name) === l.Sb.COMMENTS,
					U = a.bucketed && M && W,
					V = Object(c.a)(`${Object(g.b)(B)}${h.d}`, (null == E ? void 0 : E.queryParams) || {});
				return r.a.createElement("div", {
					className: w.a.CommentsNavigationPane
				}, U && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: w.a.flex
				}, r.a.createElement("button", {
					onClick: () => {
						S(Object(y.p)(y.a.BACK, Object(h.e)({
							searchValue: null == E ? void 0 : E.queryParams.q,
							post: k
						}), f.a.SERP, n || void 0)), N(Object(i.b)(V, {
							...null == E ? void 0 : E.locationState
						}))
					},
					className: Object(d.a)(w.a.linkOrOverlay, w.a.truncate),
					"data-testid": "back_to_comment_search_results"
				}, P._('Back to comments with "{current search query}"', [P._param("current search query", (null == E ? void 0 : E.queryParams.q) || "")], {
					hk: "4dHWeM"
				})), r.a.createElement("span", {
					className: w.a.verticalDivider
				}, "|"))), M && r.a.createElement("div", null, r.a.createElement(p.a, {
					className: w.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: L,
					to: {
						pathname: Object(g.b)(B),
						state: null == E ? void 0 : E.locationState
					},
					onClick: () => S(Object(O.l)(R, j, n))
				}, P._("View all comments", null, {
					hk: "3I5IX9"
				})), !U && !!(null == j ? void 0 : j.parentId) && r.a.createElement(p.a, {
					className: w.a.linkOrOverlay,
					isOverlay: L,
					to: Object(g.b)(j.permalink + "?context=8&depth=9")
				}, P._("Show parent comments", null, {
					hk: "AVRCa"
				}))), !U && !A && r.a.createElement(r.a.Fragment, null, _ && r.a.createElement(u.a, {
					postId: R
				}), r.a.createElement(p.a, {
					className: Object(d.a)(w.a.OtherDiscussionsLink, {
						[w.a.discoveryExperimentLink]: _
					}),
					isOverlay: L,
					onClick: () => S(_ ? Object(x.b)() : Object(v.a)(R)),
					to: D
				}, _ ? r.a.createElement(r.a.Fragment, null, P._("View all", null, {
					hk: "30twDK"
				}), ` (${F})`) : P._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [P._plural(F, "other discussion communities count")], {
					hk: "3oofZ8"
				}))))
			}
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
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe",
				EmbeddedLiveChatContainer: "_2NpqPnGM9PjW4Bj7Eytjrn",
				embeddedLiveChatContainer: "_2NpqPnGM9PjW4Bj7Eytjrn"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return Ht
			})), s.d(t, "_CommentsPage", (function() {
				return Qt
			})), s.d(t, "CommentsPage", (function() {
				return Jt
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(r),
				i = s("./src/lib/extractQueryParams/index.ts"),
				a = s("./node_modules/lodash/fromPairs.js"),
				c = s.n(a),
				d = s("./node_modules/lodash/get.js"),
				l = s.n(d),
				m = s("./node_modules/lodash/pick.js"),
				u = s.n(m),
				p = s("./node_modules/lodash/throttle.js"),
				b = s.n(p),
				h = s("./node_modules/react/index.js"),
				g = s.n(h),
				f = s("./node_modules/react-redux/es/index.js"),
				x = s("./node_modules/react-router-redux/es/index.js"),
				v = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				y = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				_ = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/domUtils/index.ts"),
				S = s("./src/lib/fastdom/index.ts"),
				w = s("./src/lib/lessComponent.tsx"),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/lib/performanceTimings/index.tsx"),
				T = s("./src/reddit/actions/ads/index.ts"),
				L = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/authoring.ts"),
				F = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				M = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				B = s("./src/reddit/actions/linkedPosts/index.ts"),
				A = s("./src/reddit/actions/login.ts"),
				D = s("./src/reddit/actions/modal.ts"),
				W = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				U = s("./src/reddit/actions/pages/comments.ts"),
				V = s("./src/reddit/actions/reportFlow/index.ts"),
				H = s("./src/reddit/actions/tooltip.ts"),
				z = s("./src/reddit/actions/upvotePrompt.ts"),
				K = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				q = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				G = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				Y = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Q = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				J = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Z = s("./src/reddit/constants/componentSizes.ts"),
				X = s("./src/reddit/constants/elementIds.ts"),
				$ = s("./src/reddit/constants/history.ts"),
				ee = s("./src/reddit/constants/keycodes.ts"),
				te = s("./src/reddit/constants/parameters.ts"),
				se = s("./src/reddit/constants/posts.ts"),
				ne = s("./src/reddit/constants/screenWidths.ts"),
				re = s("./src/reddit/contexts/ApiContext.tsx"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ae = s("./src/reddit/helpers/sessionStorage/index.ts"),
				ce = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				le = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				me = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ue = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				pe = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				he = s("./src/reddit/selectors/upvotePrompt.ts"),
				ge = s("./src/reddit/featureFlags/profileCollections.ts"),
				fe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				xe = s("./src/lib/makeSearchKey/index.ts"),
				ve = s("./src/reddit/contexts/Post/index.tsx"),
				Oe = s("./src/reddit/models/Comment/index.ts"),
				ye = s("./src/reddit/models/Post/index.ts"),
				Ce = s("./src/reddit/models/Subreddit/index.ts"),
				_e = s("./src/reddit/selectors/chatPost.ts"),
				je = s("./src/reddit/selectors/comments.ts"),
				Ee = s("./src/reddit/selectors/commentSelector.ts"),
				ke = s("./src/reddit/selectors/commentsListTruncated.ts"),
				Se = s("./src/reddit/selectors/creatorStats.ts"),
				we = s("./src/reddit/selectors/discoveryUnit.ts"),
				Pe = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				Ie = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Ne = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Te = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Le = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Re = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				Fe = s("./src/reddit/selectors/meta.ts"),
				Me = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Be = s("./src/reddit/selectors/posts.ts"),
				Ae = s("./src/reddit/selectors/tooltip.ts"),
				De = s("./src/reddit/selectors/user.ts"),
				We = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Ue = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ve = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				He = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ze = s("./src/reddit/components/Comments/index.tsx"),
				Ke = s("./src/reddit/components/Comments/States/index.tsx"),
				qe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Ge = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ye = s("./src/reddit/components/CommentSort/index.tsx"),
				Qe = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Je = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ze = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Xe = s("./src/reddit/components/HeaderImage/index.tsx"),
				$e = s("./src/reddit/components/Hovercards/helpers.ts"),
				et = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				tt = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				st = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				nt = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				rt = s("./src/reddit/components/JumpToContent/index.tsx"),
				ot = s("./src/reddit/components/NewCommentPill/async.tsx"),
				it = s("./src/reddit/components/PostContent/index.tsx"),
				at = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				ct = s("./src/reddit/components/PostTopMeta/index.tsx"),
				dt = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				lt = s("./src/reddit/components/SearchResultsContent/SearchPdpComments/index.tsx"),
				mt = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				ut = s("./src/reddit/components/SubredditNav/index.tsx"),
				pt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				bt = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				ht = s("./src/reddit/helpers/clickSourceData/index.ts"),
				gt = s("./src/reddit/helpers/datadome.ts"),
				ft = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				xt = s("./src/reddit/helpers/history/index.ts"),
				vt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				Ot = s("./src/reddit/helpers/name/index.ts"),
				yt = s("./src/reddit/helpers/postCollection.ts"),
				Ct = s("./src/reddit/helpers/resonatePage/index.ts"),
				_t = s("./src/reddit/helpers/trackers/lightbox.ts"),
				jt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Et = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				kt = s("./src/reddit/layout/page/Listing/index.tsx"),
				St = s("./src/reddit/models/ContentGate.ts"),
				wt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Pt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				It = s("./src/reddit/selectors/experiments/chat.ts"),
				Nt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				Tt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Lt = s.n(Tt);

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ft = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Mt = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				Bt = 200,
				At = 80,
				Dt = 32,
				Wt = Object(n.a)({
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
				Ut = Object(n.a)({
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
				Vt = Object(n.a)({
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
				Ht = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(P.a)(t) : n
				},
				zt = e => {
					const {
						state: t
					} = e.location, s = l()(t, $.b.IsOverlay, !1), n = l()(t, $.b.CloseLocation, null), r = l()(t, $.b.ScrollOnLoad, !1);
					r && Object(xt.c)($.b.ScrollOnLoad);
					const {
						partialCommentId: o,
						partialPostId: i,
						subredditName: a
					} = e.match.params, c = Object(ye.z)(i), d = o && Object(Oe.h)(o), m = Object(fe.a)(c), u = Object(f.e)(le.b), p = Object(f.e)(e => Object(Be.z)(e, {
						listingKey: m
					})), b = Object(f.d)(), x = Object(f.e)(e => Object(Nt.a)(e));
					return Object(h.useEffect)(() => {
						u && !p.length && b(Object(B.c)({
							key: m
						}))
					}, []), g.a.createElement(ve.a, {
						postId: c
					}, g.a.createElement(Jt, {
						closeLocation: n,
						commentId: d,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						pdpCommentSearchExperiment: x,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: r,
						sort: e.sort,
						subredditName: a
					}))
				},
				Kt = Object(oe.v)(),
				qt = () => Object(v.c)({
					apiError: je.c,
					apiPending: je.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Be.V)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(de.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Se.a)(e, s)
					},
					comment: (e, t) => {
						let {
							commentId: s
						} = t;
						return s ? Object(Ee.c)(e, {
							commentId: s
						}) : void 0
					},
					communityBannerDiscoveryUnit: we.a,
					isSubredditDiscoveryCrosspostEnabled: Le.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(De.h)(e, s)
					},
					currentUserShowNSFW: De.mb,
					dismissedSubreddits: Pe.a,
					fullyLoaded: je.u,
					hasModeratorPostPermissions: Me.c,
					headComment: je.x,
					isActionBarAnimationEnabled: pe.b,
					isAvatarsInCommentsEnabled: Ie.a,
					isCommentBeforeSignUpEnabled: ce.a,
					isCountAnimShadowTestEnabled: pe.e,
					isCrawler: (e, t) => !!Object(Fe.c)(e),
					isCrosspostRecommendationsExperimentEnabled: de.b,
					isD2xPdpSideRailRecsEnabled: le.b,
					isEligibleForCommentTruncation: Re.a,
					isChatPost: _e.d,
					isCommentsListTruncated: ke.a,
					isLiveChatNuxReactionsEnabled: It.d,
					isLoggedIn: De.S,
					isNightmodeOn: De.fb,
					isTooltipOpen: (e, t) => !!Object(Ae.a)(e),
					origin: Fe.k,
					post: Be.G,
					postSEOV2IdCardVariant: Ne.h,
					profileCollectionsEnabled: ge.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: r
						} = t;
						return Object(je.s)(e, {
							commentsPageKey: Ht({
								postId: s,
								commentId: n,
								commentsPageKey: r
							})
						})
					},
					shouldOpenPostInNewTab: De.lb,
					showNewDesignBlocking: ue.a,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(be.z)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: Be.V,
					userHovercardIsOpen: (e, t) => Object(Ae.b)(Object($e.b)({
						itemId: t.postId,
						tooltipIdPrefix: Y.a,
						tooltipType: ct.f.StickyPost
					}))(e),
					userPrefs: De.Jb,
					inResonatePilot: Te.a,
					isQualifiedForUpvotePrompt: he.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(be.I)(e, s);
						return !!n && Object(Me.i)(e, n)
					},
					isNsfwBlurSubreddit: me.e,
					isNsfwFullPageInterstitial: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Be.V)(e, {
								postId: s
							}),
							r = !(!n || !n.isNSFW),
							o = Object(me.g)(e) === me.a.NoPreview;
						return Object(me.f)(e) ? o : r && o
					}
				}),
				Gt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(D.g)(G.a)),
					dismissTruncation: t => e(Object(We.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(F.a)()),
					setCommentFocus: t => e(L.g({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(U.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(H.i)()),
					onToggleTooltip: t => e(Object(H.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(A.openLoginModal)()),
					openNsfwModal: () => e(Object(W.a)()),
					openRegisterModal: () => e(Object(A.openRegisterModal)()),
					openReportFlow: (t, s) => e(Object(V.c)(t, s)),
					submitCommentAfterSignUp: () => e(R.m()),
					goToSubredditPage: t => e(Object(x.b)(t)),
					truncateCommentsList: () => e(Object(F.b)()),
					fetchCommentsNativeAd: t => e(Object(T.a)(t)),
					getIsTrackingCrossposts: t => e(Object(M.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Ue.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(z.b)(t, s, n))
					}
				}),
				Yt = Object(f.b)(qt, Gt);
			class Qt extends g.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.setAdScrollItemRef = e => {
						this.adScrollItemRef = e, setTimeout(this.handleScroll), this.needsUpdatedMeasurements = !0
					}, this.setCommentAdRef = e => {
						this.commentAdRef = e
					}, this.handleScroll = b()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didPassAdScrollThreshold: e,
							didScrollPastPost: t,
							scrollContainerEl: s,
							scrollAdThreshold: n,
							scrollPostThreshold: r,
							props: {
								userHovercardIsOpen: o,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const c = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = c, this.state.commentNativeAdId && (!e && void 0 !== n && c >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && c < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== r && c >= r && (this.didScrollPastPost = !0), t && void 0 !== r && c < r && (this.didScrollPastPost = !1, o && S.a.write(() => {
							i(Object($e.b)({
								itemId: a,
								tooltipIdPrefix: Y.a,
								tooltipType: ct.f.StickyPost
							}))
						}))
					}, E.N), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(_t.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(ye.x)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === ee.b.F || e.keyCode === ee.a.F,
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
						isUpvotePromptTriggered: !1,
						isEmbeddedInLiveChatIframe: !1
					}
				}
				hasCommentAdRef() {
					return this.commentAdRef && this.commentAdRef.clientHeight > 0
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						location: t,
						setCommentFocus: s
					} = this.props;
					e && s(e), Object(bt.a)(t.search) && this.setState({
						isEmbeddedInLiveChatIframe: !0
					})
				}
				async componentDidMount() {
					var e;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, he.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isNsfwBlurSubreddit: r,
							isOverlay: o,
							openNsfwModal: i,
							post: a,
							shouldScrollToComments: c,
							subredditName: d
						}
					} = this, l = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(l) && this.props.openReportFlow(this.props.postId, o), a && !a.isSponsored && !a.isRemoved && a.belongsTo.type !== se.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(a.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(X.e), c && (t || s || this.hasCommentAdRef()) && a && a.numComments ? this.scrollToComments() : S.a.write(() => {
							setTimeout(() => {
								Object(k.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(vt.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(ye.z)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), S.a.read(() => {
							const e = [Object(gt.a)()];
							this.props.isOverlay || Object(N.d)(N.c.CommentsPage, n, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						E.Rb.includes(e) && Object(Ct.a)(e)
					}
					this.props.isLoggedIn && Object(ae.c)() && this.props.submitCommentAfterSignUp(), (null == a ? void 0 : a.isNSFW) && d && r && i()
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.location.pathname !== this.props.location.pathname) {
						const e = new URLSearchParams(this.props.location.search).get("report") || "";
						["true", "1"].includes(e) && this.props.openReportFlow(this.props.postId, this.props.isOverlay)
					}
					if (e.location.search !== this.props.location.search && this.setState({
							isEmbeddedInLiveChatIframe: Object(bt.a)(this.props.location.search)
						}), e.postId !== this.props.postId) {
						const e = this.props.post && Object(yt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? S.a.read(this.handleScroll) : S.a.write(() => {
							e || Object(k.c)(this.scrollContainerEl, 0), S.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && S.a.write(() => {
							setTimeout(() => {
								Object(k.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = Z.b + (this.props.isOverlay ? Z.m : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const r = (n = this.props.isOverlay ? document.getElementById(X.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								o = Math.abs(r - s),
								i = this.props.isOverlay ? Dt : o - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && S.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(k.c)(n, i) : Object(k.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
					this.props.isCrosspostRecommendationsExperimentEnabled && this.props.closeCrosspostRecommendationsModal()
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, n = t && t.id;
					n && !e.includes(n) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = Bt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = Bt)
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
					S.a.read(() => {
						const e = document.getElementById(X.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - At, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - At, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), S.a.write(() => {
								Object(k.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => S.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					var e;
					const {
						apiError: t,
						apiPending: s,
						commentsPageKey: n,
						pageLayer: r
					} = this.props;
					return !(Object(dt.b)(r) || (null === (e = null == r ? void 0 : r.locationState) || void 0 === e ? void 0 : e.clickSource) === ht.a.POST_DETAIL_COMMENT_SEARCH) && y.c.has(n) && (t || !s || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					S.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: r
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const o = y.c.end(t);
						n(Object(jt.c)(t, s, e, C.TimerType.InApp, o, r))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isNsfwBlurSubreddit: s,
						isOverlay: n,
						post: r,
						subredditName: o
					} = this.props, i = !(!r || !r.isNSFW || t);
					if (!i || s) return null;
					const a = Object(ft.a)(e, i, o);
					if (!a) return null;
					let c = g.a.createElement(Vt, a);
					return n && (c = g.a.createElement(Et.a, {
						content: c
					})), c
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						canShowCrosspostRecommendationsModal: s,
						closeCrosspostRecommendationsModal: n,
						closeLocation: r,
						commentId: o,
						commentsPageKey: i,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: c,
						isCrawler: d,
						isCrosspostRecommendationsExperimentEnabled: l,
						isD2xPdpSideRailRecsEnabled: m,
						isEligibleForCommentTruncation: u,
						isLoggedIn: p,
						isModWithUserNotesPermissions: b,
						isNightmodeOn: h,
						isNsfwBlurSubreddit: f,
						isNsfwFullPageInterstitial: x,
						isOverlay: v,
						post: O,
						postId: y,
						postSEOV2IdCardVariant: C,
						profileCollectionsEnabled: _,
						sendEvent: k,
						sort: S,
						subredditName: w,
						subredditOrProfile: P,
						showNewDesignBlocking: I
					} = this.props, {
						isEmbeddedInLiveChatIframe: N
					} = this.state;
					if ((null == O ? void 0 : O.isNSFW) && w && x && I) return g.a.createElement(J.a, {
						contentTitle: Object(Ot.d)(w)
					});
					const T = Object(Ne.f)(C);
					if (!O) {
						if (t) return g.a.createElement(Ke.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === E.p ? g.a.createElement(Vt, {
							contentGateType: St.a.PostBlockedForLegalReason
						}) : g.a.createElement(Ke.d, {
							postId: y,
							commentId: o,
							apiError: e,
							sort: S
						}) : g.a.createElement(Ke.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const L = this.isCommentPermalink(),
						R = O.belongsTo.type === se.a.PROFILE,
						F = Object(yt.a)(O) && (!R || _),
						M = !p,
						B = P && P.isQuarantined,
						A = !u && !this.state.allCommentsRendered && !d,
						D = l && s,
						W = O.isNSFW && f;
					return Ft.input.channel.postID = y, N ? g.a.createElement("div", {
						className: Lt.a.EmbeddedLiveChatContainer
					}, this.renderCommentPanes()) : g.a.createElement(Xt, {
						closeLocation: r,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						isD2xPdpSideRailRecsEnabled: m,
						isLoggedIn: p,
						isOverlay: v,
						isSwapVariant: T,
						post: O,
						shouldBlurHeaderImage: W,
						subredditOrProfile: P,
						shouldFitPageToContent: M,
						isCollectionLayout: F
					}, g.a.createElement(ot.a, {
						postId: y,
						isNightMode: h,
						isOverlay: v,
						commentId: o
					}), !v && g.a.createElement(at.a, {
						post: O
					}), B && g.a.createElement(nt.a, {
						subredditName: P.name
					}), g.a.createElement(rt.a, null), g.a.createElement("div", {
						className: Object(j.a)(Lt.a.PageContentWrapper, {
							[Lt.a.LargePageContent]: F,
							[Lt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, F && g.a.createElement(Ut, {
						isOverlay: v,
						isNightmodeOn: h,
						postId: y
					}), g.a.createElement(Mt, {
						condition: F,
						wrap: e => g.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Lt.a.CollectionBodyWrapper
						}, e)
					}, g.a.createElement(it.c, {
						isCommentPermalink: L,
						isOverlay: v,
						isModWithUserNotesPermissions: b,
						postId: y,
						redditStyle: v,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: k,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: c,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && g.a.createElement(Ze.a, {
						post: O,
						subreddit: P
					}), this.state.commentNativeAdId && g.a.createElement("div", {
						ref: this.setCommentAdRef
					}, g.a.createElement(K.a, {
						key: `event-post-id-${O.id}`,
						isOverlay: v,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), P && !Object(Ce.i)(P) && g.a.createElement(Q.a, {
						awaitAllCommentsRendered: A,
						contentContainerRef: this.state.layoutRef,
						isOverlay: v,
						post: O,
						subredditOrProfile: P
					}), D && g.a.createElement(q.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: O,
						withOverlay: !0
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: o,
						fullyLoaded: a,
						hasModeratorPostPermissions: d,
						headComment: l,
						isAvatarsInCommentsEnabled: m,
						isChatPost: p,
						isCommentsListTruncated: b,
						isCommentBeforeSignUpEnabled: h,
						isEligibleForCommentTruncation: f,
						isLoggedIn: x,
						isOverlay: v,
						pdpCommentSearchExperiment: y,
						location: C,
						onOtherDiscussions: _,
						openLoginModal: E,
						openRegisterModal: k,
						origin: S,
						pageLayer: w,
						post: P,
						postId: N,
						replyComment: T,
						sendEvent: L,
						sort: F,
						subredditAboutInfo: M,
						subredditOrProfile: B
					} = this.props, {
						isEmbeddedInLiveChatIframe: A
					} = this.state;
					if (!P) return null;
					let D, W = "";
					const U = (null == y ? void 0 : y.bucketed) && Object(dt.b)(w) && Object(dt.c)(P);
					if (U) {
						const e = c()([...Object(i.a)(C.search)]);
						D = Object(xe.e)(u()(e, te.D)), W = Object(xe.b)(N, void 0, D)
					}
					const V = this.isCommentPermalink(),
						H = [],
						z = P.isLocked && !s,
						K = !(V || P.isArchived || M && M.userIsBanned || P.authorIsBlocked || P.unrepliableReason);
					if (z) H.push(g.a.createElement(tt.a, {
						key: "commentThreadBanner",
						subredditOrProfile: B
					}));
					else if (P.isArchived) H.push(g.a.createElement(et.a, {
						key: "commentThreadBanner"
					}));
					else if (K && !p && !_)
						if (x || !x && h) {
							const e = Object(I.a)(O.c.replyToPost, N);
							H.push(g.a.createElement(Ve.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: O.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: N,
								submitAction: (t, s) => {
									let {
										validate: n,
										...r
									} = t;
									return n ? R.w({
										postId: N,
										commentsPageKey: o,
										draftKey: e,
										formData: r,
										editorMode: s
									}) : R.q({
										postId: N,
										commentsPageKey: o,
										draftKey: e,
										formData: r,
										editorMode: s
									})
								},
								submitButtonText: r.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else H.push(g.a.createElement(He.a, {
							key: "loggedOutCommentForm",
							location: C,
							openLoginModal: E,
							openRegisterModal: k,
							origin: S
						}));
					if (P.contestMode && H.push(g.a.createElement(st.a, {
							hasModeratorPostPermissions: d,
							key: "contestModeBanner"
						})), p || _ || (this.props.isSubredditDiscoveryCrosspostEnabled ? H.push(g.a.createElement(wt.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: v,
							key: "commentNavigation",
							postId: N
						}), g.a.createElement(Ye.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: v,
							key: "commentSort",
							location: C,
							postId: N,
							sort: F,
							suggestedSort: P.suggestedSort
						})) : H.push(g.a.createElement(Ye.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: v,
							key: "commentSort",
							location: C,
							postId: N,
							sort: F,
							suggestedSort: P.suggestedSort
						}), g.a.createElement(wt.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: v,
							key: "commentNavigation",
							postId: N
						}))), H.push(g.a.createElement(mt.a, {
							key: "subredditForkingCTA",
							postId: N
						})), !t || l || p || _)
						if (!e || l || _)
							if (_) H.push(g.a.createElement(Wt, {
								commentSort: F,
								key: "otherDiscussions",
								postId: N,
								isOverlay: v,
								postPermalink: P.permalink
							}));
							else if (p) {
						if (B && B.id) {
							const e = T ? Object(I.a)(O.c.replyToComment, T.id) : Object(I.a)(O.c.replyToPost, N),
								s = Ht({
									postId: N,
									commentId: n,
									commentsPageKey: o
								});
							H.push(g.a.createElement(qe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !l || !a && t,
								key: "commentsChat",
								postId: N,
								renderedInOverlay: v,
								subredditId: B.id,
								isEmbeddedLiveChat: A
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return x ? g.a.createElement(Ge.a, {
									isV2: !0,
									isEmbeddedLiveChat: A,
									key: "chatCommentsForm",
									postId: N,
									replyComment: T,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: L
								}) : g.a.createElement(He.a, {
									key: "loggedOutCommentForm",
									className: Lt.a.ChatLoggedOutForm,
									location: C,
									openLoginModal: E,
									openRegisterModal: k,
									origin: S
								})
							}))
						}
					} else U && D ? H.push(g.a.createElement(lt.a, {
						commentsPageKey: o,
						isOverlay: v,
						prevLocation: C,
						listingKey: W,
						post: P,
						searchOptions: D
					})) : (H.push(g.a.createElement("div", {
						className: Object(j.a)(Lt.a.CommentsPaneWrapper, {
							[Lt.a.mIsInOverlay]: v
						}),
						key: "commentsPaneWrapper"
					}, g.a.createElement(Je.a, Rt({}, this.props, {
						shouldTruncateComments: f && b,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: P.numComments,
						onClick: this.handleContentClick
					}), g.a.createElement(ze.a, {
						commentId: n,
						commentsPageKey: o,
						postId: N,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: v
					})))), e && l ? H.push(g.a.createElement(Ke.e, {
						key: "commentsErrorState",
						postId: N,
						commentId: n,
						sort: F,
						apiError: e
					})) : !a && t && H.push(g.a.createElement(Ke.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					})));
					else H.push(g.a.createElement(Ke.e, {
						key: "errorState",
						postId: N,
						commentId: n,
						sort: F,
						apiError: e
					}));
					else this.didRenderLoading = !0, H.push(g.a.createElement(Ke.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					}));
					return g.a.createElement(ie.a.Provider, {
						value: this.sendEventWithName
					}, H)
				}
			}
			const Jt = Kt(Object(re.b)(Yt(Object(pt.c)(Qt)))),
				Zt = w.a.wrapped(Qe.a, "DetailsPageSidebar", Lt.a),
				Xt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						isCollectionLayout: r,
						isD2xPdpSideRailRecsEnabled: o,
						isOverlay: i,
						isSwapVariant: a,
						post: c,
						shouldBlurHeaderImage: d,
						shouldFitPageToContent: l,
						subredditOrProfile: m
					} = e;
					if (i) return g.a.createElement(Et.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: r,
						sidebar: m && g.a.createElement(Qe.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: c,
							subredditOrProfile: m,
							subredditName: m.name,
							subredditId: m.id
						})
					});
					const u = r ? Z.h : ne.a,
						p = o && m && !Object(Ce.i)(m) ? `r/${m.name}` : void 0;
					return g.a.createElement(kt.a, {
						backToSubredditName: p,
						containerRef: n,
						maxWidth: Z.h,
						fitPageToContent: l,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: a,
						isCollectionLayout: r,
						navBar: m && g.a.Children.toArray([g.a.createElement(Xe.a, {
							key: m.name,
							disableFullscreen: !0,
							headerText: m.name,
							maxWidth: u,
							prefixedHeaderText: m.displayText,
							shouldBlurHeaderImage: d,
							subredditOrProfile: m,
							url: m.url
						}), !Object(Ce.i)(m) && g.a.createElement(ut.a, {
							disableFullscreen: !0,
							homeUrl: m.url,
							maxWidth: u,
							subredditId: m.id
						})]),
						sidebar: m && g.a.createElement(Zt, {
							commentsPageKey: s,
							post: c,
							subredditOrProfile: m,
							subredditName: m.name,
							subredditId: m.id
						})
					})
				};
			t.default = Object(_.a)(Object(Pt.a)(zt))
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts");
			const h = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(b.z)(t)
				},
				g = (e, t, s) => {
					const n = h(e),
						o = (e => {
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
							return r()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(d.a)(n, o, a)
				},
				f = Object(l.a)((e, t) => {
					const s = h(t);
					return Object(u.a)(e, s)
				});

			function x(e) {
				return t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = Object(a.e)(e => f(e, t)), r = g(t, s, n), o = Object(m.d)(t.match.path), c = {
						...t,
						commentsPageKey: r,
						hasSortParam: s,
						onOtherDiscussions: o,
						sort: n
					};
					return i.a.createElement(e, c)
				}
			}
		},
		"./src/reddit/pages/Recap/Components/BananaPill/index.m.less": function(e, t, s) {
			e.exports = {
				bananaPill: "luTPauejzUjrGQIJmBJMt",
				transform: "T2syrzYJQrK2MbUsJ1ZIs",
				icon: "_2DvitLaA7xyv9xsNJWP3t4",
				text: "BE8_V9hkF52QnKXfBAL2e",
				altText: "_2RhoXA1ZtjfGQFhaJvg2Hu",
				bouncing: "_1bv5w7rQU4LQw-ZO3MYGBc"
			}
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return X
			})), s.d(t, "default", (function() {
				return $
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./node_modules/lodash/isEqual.js"),
				p = s.n(u),
				b = s("./src/reddit/actions/searchQueryId/index.tsx"),
				h = s("./src/reddit/actions/survey/index.ts"),
				g = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				x = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				v = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				O = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				y = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				C = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/constants/covid.ts"),
				E = s("./src/reddit/constants/page.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				P = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				I = s("./src/reddit/helpers/search/searchQueryId.ts"),
				N = s("./src/reddit/helpers/search/searchTabType.ts"),
				T = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				L = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				R = s("./src/reddit/helpers/trackers/searchResults.ts"),
				F = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				M = s("./src/reddit/hooks/useTheme.ts"),
				B = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = s("./src/reddit/selectors/experiments/commentSearchSorts.ts"),
				W = s("./src/reddit/selectors/searchFix.ts"),
				U = s("./src/reddit/selectors/searchQueryId.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./node_modules/lodash/isEmpty.js"),
				z = s.n(H),
				K = s("./src/reddit/constants/experiments.ts"),
				q = s("./src/reddit/selectors/experiments/searchSingleVariant.ts"),
				G = s("./src/reddit/pages/SearchResults/index.m.less"),
				Y = s.n(G);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = 3e3,
				Z = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				X = {
					[E.h.Listings]: {
						tab: E.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[E.h.People]: {
						tab: E.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[E.h.Posts]: {
						tab: E.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[E.h.Comments]: {
						tab: E.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function $(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(c.d)(),
					r = Object(S.gb)(),
					u = Object(_.b)(),
					H = Object(M.a)(),
					G = Object(i.useRef)(!1),
					$ = Object(i.useRef)(!1),
					ee = Object(c.e)(e => Object(V.C)(e, {
						subredditName: s.params.subredditName
					})),
					te = Object(c.e)(e => Object(x.a)(e, {
						pageLayer: r
					})),
					se = Object(c.e)(e => Object(W.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: ne
					} = Object(c.e)(e => Object(U.a)(e)),
					re = Object(c.e)(D.a),
					oe = (Object(c.e)(e => Object(q.a)(e, K.Lc)), Object(S.Z)(r)),
					ie = Object(S.db)(r),
					[ae, ce] = Object(i.useState)(!1),
					de = Object(l.a)(oe) || null,
					le = s.params.multiredditName,
					me = s.params.subredditName || le || "",
					ue = s.params.username,
					pe = Object(m.e)(o()(oe || {}, k.D)),
					be = Object(m.b)(me, ue, pe),
					he = ee && pe.restrict_sr,
					ge = Object(N.a)(pe.type, he),
					fe = {
						...pe,
						type: [d.ic.Posts, d.ic.Subreddits, d.ic.Users]
					},
					xe = Object(m.b)(me, ue, fe),
					ve = {
						redesign: !0,
						searchOptions: pe
					},
					Oe = X[ge].tab,
					ye = Boolean(he) || X[ge].sidebar && !le,
					Ce = X[ge].filterNav || ge === E.h.Comments && re,
					_e = Object(A.a)({
						redditStyle: !0,
						theme: H
					});
				let je;
				ne && (I.a.set(T.a.SERP, be, ne), n(Object(b.c)())), Object(S.S)(r) || Object(S.D)(r) ? je = a.a.createElement(C.a, Q({}, ve, {
					url: Object(L.a)(oe)
				})) : te && se && (je = a.a.createElement(C.a, Q({}, ve, {
					subreddit: te,
					url: Object(L.a)(oe, te.name)
				}))), Object(F.c)(), Object(i.useEffect)((function() {
					return () => {
						P.a.clear(T.a.SERP)
					}
				}), []), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.k)()), J), () => {
						Object(w.b)(w.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					oe !== de && (G.current = !1, ce(!1)), oe && de && oe[k.z] !== de[k.z] && (Object(w.b)(w.a.SearchResults), Object(w.d)(w.a.SearchResults))
				}, [oe, de]), Object(i.useEffect)(() => {
					const e = {
							...oe,
							type: void 0
						},
						t = {
							...de,
							type: void 0
						};
					!p()(e, t) && !z()(de) && P.a.update(T.a.SERP)
				}, [oe, de]), Object(i.useEffect)(() => {
					if (Oe === E.h.Comments && !$.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							$.current = !0, n(Object(h.j)())
						}, J), () => {
							window.clearTimeout(e)
						}
					}
				}, [Oe]);
				return a.a.createElement(B.a, {
					backgroundColor: _e.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(g.a, null), ie && !ae && (() => {
						const e = e => u(Object(R.f)(e, Object(m.e)(o()(oe || {}, k.D))));
						return G.current || (e("view"), G.current = !0), a.a.createElement(Z, {
							announcement: j.a,
							className: Y.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), ce(!0)
							}
						})
					})(), a.a.createElement(f.a, {
						listingKey: be,
						listingName: me,
						location: t,
						searchOptions: pe,
						tab: Oe
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(v.a, {
						activeTab: Oe,
						searchOptions: pe,
						searchSwitcher: je
					}), Ce && a.a.createElement(y.a, {
						key: "subNav",
						searchOptions: pe,
						shouldHideGlobalSearchLink: !0,
						subredditName: me,
						tab: Oe
					}), je && a.a.createElement("div", {
						className: Y.a.searchSwitcherContainer
					}, je)),
					sidebar: ye && a.a.createElement(O.a, {
						className: Y.a.sidebar,
						listingKey: xe,
						listingName: me || E.c,
						searchOptions: fe,
						tab: Oe
					})
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const r = e => e.dismissedTruncationList,
				o = Object(n.a)((e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s
				}, r, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.e[Object(o.U)(e, {})] === r.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.nb
				}) === n.Wc.Treatment
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.F
				}) === n.Qd
			}
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.S, i.R, (e, t) => e || t),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.B
				}), e => e === r.M.Enabled)
		},
		"./src/reddit/selectors/experiments/commentSearchSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.C
				}) === n.Qd
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.qc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.pc
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/localStorageAvailable/index.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/constants/localStorage.ts"),
				a = s("./src/reddit/helpers/localStorage/index.ts"),
				c = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts"),
				l = s("./node_modules/reselect/es/index.js");
			const m = 30 * n.pb,
				u = () => {
					Object(a.Kb)(i.b.XpromoConsolidation, (new Date).toString())
				},
				p = () => {
					if (!Object(r.a)()) return !1;
					const e = localStorage.getItem(i.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(i.b.XpromoConsolidation), !0) : Date.now() > t + m
				},
				b = (e, t) => t === c.a.NoPreview && (e === o.hb.SkippableButtons || e === o.hb.SkippableText),
				h = (e, t) => t === c.a.NoPreview && e === o.hb.NoUpsell,
				g = Object(l.a)(c.h, c.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === c.a.NoPreview && !b(e, t) && !h(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && b(e, t),
						isOldDesignVariant: !(!e || !t) && h(e, t),
						variant: e
					}
				}),
				f = Object(l.a)(g, d.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: n.yf
			}) === n.Ff.Enabled
		},
		"./src/reddit/selectors/experiments/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.If
			}), e => ({
				isSubEnlarged: e === n.Xf.Variant1 || e === n.Xf.Variant3,
				withCommunityDescription: e === n.Xf.Variant2 || e === n.Xf.Variant3
			}))
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
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(i.h, i.d, a.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.ad.Bottom_cell_dismissible]: e,
						[r.ad.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.ad.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.yb, !0),
				m = d(r.zb, !0),
				u = d(r.Ab, !0),
				p = d(r.yb, !1),
				b = d(r.zb, !1),
				h = d(r.Ab, !1)
		},
		"./src/reddit/selectors/experiments/subredditDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts");
			const i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.Rf
					}) === n.Qd
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.Qf
					}) === n.Qd
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.sg
					}) === n.Qd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.tg
					}) === n.Qd
				},
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.rg
					});
					return t === n.ig.TypingIndicators || t === n.ig.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.d)(e, {
						experimentName: n.rg
					});
					return (null == t ? void 0 : t.variant) === n.ig.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.Ag)(t)
				},
				c = Object(n.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				o = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts");
			const d = Object(n.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.V)(e, {
					postId: t.postId
				});
				return Object(r.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.V, i.G, a.R, a.S, o.h, (e, t, s, n, r, o, i) => {
				if (!n) return !1;
				const a = !(!s || Object(c.i)(s)),
					d = n.numComments >= 3 && !e || !t;
				return i && a && d && (!r && !o)
			})
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/posts.ts");
			const d = new Date,
				l = d.getUTCFullYear(),
				m = d.getUTCMonth(),
				u = d.getUTCDate(),
				p = Date.UTC(2008, 0, 1),
				b = Date.UTC(l, m - 7, u),
				h = Object(n.a)(e => Object(a.f)(e), e => Object(o.a)(e), (e, t) => {
					let {
						post: s
					} = t;
					return s && Object(c.V)(e, {
						postId: s.id,
						disallowProfile: !0
					})
				}, e => Object(i.a)(e), (e, t, s, n) => e && !!t && (!t.isNSFW || t.isNSFW && n === r.gd.GreyRedditNoNsfw) && !!s && (!s.isNSFW || s.isNSFW && n === r.gd.GreyRedditNoNsfw) && !!t.created && t.created > p && t.created < b)
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"72926b3be83c"}')
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b1e8c2ac46dc"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"7d4486a74e67"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"74c23217d06b"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"045d4ef3e74f"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"7288c5f50973"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"d0c87800bdd4"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.029c6957168dd4065000.js.map