// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.9c5d4542639cb892a527.js
// Retrieved at 11/3/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
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

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
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
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, r, o, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0
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
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
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
				return C
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return _
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				i = s.n(o),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d);
			const l = e => c()(a.b).includes(e.substring(1)),
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
			const C = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				y = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				O = (e, t) => {
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
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(d.Xc.Bottom_cell),
						t = Object(m.a)(d.Xc.Bottom_cell_dismissible),
						s = Object(m.a)(d.Xc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.Xc.Bottom_cell_signup_upsell_copy),
						r = Object(m.a)(d.Xc.Bottom_cell_surprise_install_copy),
						o = Object(m.a)(d.Xc.Bottom_sheet);
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
						} = Object(c.a)(), s = u(), o = Object(p.a)(s), l = Object(m.a)(d.Xc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!o && s) {
								const e = document.getElementById(a.e),
									n = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									i = o / 3,
									d = 2 * o;
								n >= (l ? i : d) && t(s)
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
				return C
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/categories/index.ts"),
				o = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				i = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
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
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
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
									displayText: Object(m.yg)(e.category_name)
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
				}, v = (Object(o.a)(b.g), Object(o.a)(b.f), Object(o.a)(b.e), Object(o.a)(b.d)), C = e => async (t, s) => {
					const n = Object(p.j)(s(), {
						id: e
					});
					t(v({
						categoryId: e,
						rank: n + 1
					})), Object(u.pb)(Object(p.d)(s()))
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
				return O
			})), s.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return _
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return j
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return k
			})), s.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return w
			})), s.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return I
			})), s.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), s.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return N
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return T
			})), s.d(t, "setSubredditUserAchievementFlair", (function() {
				return L
			})), s.d(t, "setSubredditUserSupporterFlair", (function() {
				return F
			})), s.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return M
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = s("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, s, n) => {
				const r = await Object(i.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: s,
						isHidden: n
					}
				});
				if (!r.ok || !r.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				m = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				g = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/actions/economics/powerups/constants.ts"),
				C = s("./src/lib/initializeClient/installReducer.ts"),
				y = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(C.a)({
				features: {
					powerups: y.a
				}
			});
			const O = Object(r.a)(v.d),
				_ = Object(r.a)(v.i),
				j = Object(r.a)(v.f),
				E = Object(r.a)(v.g),
				k = Object(r.a)(v.e),
				w = Object(r.a)(v.h),
				I = (e, t) => async (s, n, r) => {
					let {
						gqlContext: d
					} = r;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, s) => {
								const n = await Object(i.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: s,
										includeSupporterInfo: !0
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(d(), e, c),
							{
								subredditInfoById: n,
								redditorsInfoByIds: r
							} = t;
						await s(O(n)), r && await s(_(r))
					} catch (l) {
						o.c.captureException(l)
					}
				}, P = (e, t) => async (s, n) => {
					if (!e) return;
					const r = n(),
						o = Object(x.l)(r);
					if (!o || !Object(g.f)(r, {
							subredditId: e
						})) return;
					const i = !!Object(f.e)(r, {
						subredditId: e,
						userId: o.id
					});
					!t && i || await s(I(e, [o.id]))
				}, S = e => async (t, s) => !!e && (Object(h.g)(s()) ? (await t(Object(l.c)(e)), !!Object(f.c)(s(), {
					subredditId: e
				})) : (await t(Object(m.e)(e, {
					fullData: !0
				})), Object(g.b)(s(), {
					subredditId: e
				}))), N = e => async (t, s) => {
					var n;
					const r = s(),
						o = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						i = Object(b.d)(r, {
							commentIds: o
						}),
						a = null === (n = i.find(e => e && e.subredditId)) || void 0 === n ? void 0 : n.subredditId;
					if (!(await t(S(a)))) return;
					const d = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(I(a, Array.from(d)))
				}, T = (e, t) => async (s, n) => {
					if (!t) return;
					if (!(await s(S(e)))) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await s(I(e, Array.from(r)))
				}, L = (e, t) => async (s, n) => {
					const r = n(),
						o = Object(x.l)(r);
					if (!o) return;
					const i = o.id,
						a = Object(f.h)(r, {
							subredditId: e,
							userId: i
						});
					s(R({
						subredditId: e,
						userId: i,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, F = (e, t) => async (s, n) => {
					const r = n(),
						o = Object(x.l)(r);
					if (!o) return;
					const i = o.id,
						a = Object(f.g)(r, {
							subredditId: e,
							userId: i
						});
					s(R({
						subredditId: e,
						userId: i,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, R = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = s(),
						d = Object(x.l)(a);
					if (!d) return;
					const l = d.id;
					t(j(e));
					const {
						subredditId: m,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, g = [b, h].filter(Boolean), v = Object(f.d)(a, {
						subredditId: m,
						userId: l
					});
					try {
						await c(i(), m, g, v), t(E(e))
					} catch (C) {
						t(k(e)), o.c.captureException(C), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, M = (e, t) => async (s, r, i) => {
					let {
						gqlContext: a
					} = i;
					const d = r(),
						l = Object(x.l)(d);
					if (!l) return;
					const m = l.id,
						b = {
							subredditId: e,
							userId: m
						},
						h = [Object(f.g)(d, b), Object(f.h)(d, b)].filter(Boolean);
					s(w({
						...b,
						isHidden: t
					}));
					try {
						await c(a(), e, h, t)
					} catch (g) {
						s(w({
							...b,
							isHidden: !t
						})), o.c.captureException(g), s(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/eligibleUxExperiences/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = "ELIGIBLE_UX_EXPERIENCES__FETCH_UX_EXPERIENCES_SUCCESS",
				r = "ELIGIBLE_UX_EXPERIENCES__UPDATE_UX_EXPERIENCE_VALUE"
		},
		"./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/reddit/endpoints/eligibleUXExperiences/eligibleUxExperiences.ts"),
				a = s("./src/reddit/reducers/features/eligibleUXExperiences/index.ts"),
				d = s("./src/reddit/selectors/eligibleUXExperiences.ts"),
				c = s("./src/redditGQL/types.ts"),
				l = s("./src/reddit/actions/eligibleUxExperiences/constants.ts");
			Object(n.a)({
				features: {
					eligibleUXExperiences: a.a
				}
			});
			const m = Object(r.a)(l.b),
				u = Object(r.a)(l.a),
				p = e => {
					let {
						experiences: t
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: r
						} = n;
						var a, c;
						const l = s(),
							m = Object.keys(t).filter(e => {
								const s = Object(d.a)(l, {
									experience: e
								});
								return !(t[e].allowCached && (null == s ? void 0 : s.fetched))
							});
						if (!m.length) return;
						const p = await Object(i.a)(r(), m);
						if (p.ok) {
							const t = p.body,
								s = (null === (c = null === (a = null == t ? void 0 : t.data) || void 0 === a ? void 0 : a.eligibleUxExperiences) || void 0 === c ? void 0 : c.map(e => null == e ? void 0 : e.experience)) || [],
								n = null == s ? void 0 : s.reduce((e, t) => ({
									...e,
									[t]: !0
								}), {}),
								r = m.reduce((e, t) => n[t] ? e : {
									...e,
									[t]: !1
								}, {});
							e(u({
								experiences: {
									...n,
									...r
								}
							}))
						} else o.c.captureException(p.error)
					}
				},
				b = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					Object(i.b)(r(), {
						action: c.a.View,
						eligibleExperience: {
							experience: e
						}
					})
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
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
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
				C = [3];
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
				return C.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !v(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var y = s("./src/reddit/selectors/platform.ts");
			const O = Object(r.a)(i.f),
				_ = Object(r.a)(i.d),
				j = Object(r.a)(i.g),
				E = Object(r.a)(i.c),
				k = Object(r.a)(i.e),
				w = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						c = (e => {
							const t = Object(g.Q)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(g.Q)(o);
					if (i || !c) return;
					e(j());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (I(t)) {
								if (P(t)) {
									e(E({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (S(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(O(u)), b = !0
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
				I = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !P(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				N = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(y.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(g.R)(i);
						return Object(o.i)(() => e(w()), {
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
				return c
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
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(n.a)(o.a),
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
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
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
				return G
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return q
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return K
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return X
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
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
				C = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/endpoints/governance/posts.ts"),
				O = s("./src/config.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function E(e, t, s) {
				const n = `${O.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(j.a)(`${n}/${e}/${t}/${s}`) : t ? Object(j.a)(`${n}/${e}/${t}`) : Object(j.a)(`${n}/${e}`)
			}
			var k = (e, t, s, r, o) => Object(_.a)(e, {
					data: o,
					endpoint: E(t, s, r),
					method: n.ob.GET
				}),
				w = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/helpers/canonicalUrls.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
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
				G = Object(r.a)(U.b),
				q = Object(r.a)(U.a),
				K = e => async (t, s) => {
					const {
						collectionId: r,
						partialPostId: o,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = o ? Object(F.y)(o) : "", f = d && Object(L.h)(d), {
						queryParams: y
					} = e, O = s(), {
						instanceId: _
					} = y, j = {
						id: r,
						type: C.b[l]
					}, E = C.b[l] === C.a.PROFILE, {
						hasSortParam: k,
						sortToUse: w
					} = Object(S.a)(O, g), P = ["context", "depth", "limit", x.h].reduce((e, t) => {
						const s = parseInt(y[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: k,
						instanceId: _
					});
					k && (P.sort = w), t(u.q(g)), await Promise.all([E ? t(p.d(c)) : Promise.resolve(), t(X(r, g, f, P))]);
					const N = ((e, t) => {
						const s = Object(A.q)(e, {
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
					const R = s().posts.models[g];
					if (R) {
						const n = Object(D.Q)(s(), {
							identifier: R.belongsTo
						});
						if (!R.isSponsored)
							if (R.belongsTo.type === C.a.SUBREDDIT) {
								!!Object(D.X)(O, {
									subredditId: R.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(p.d(n.name));
						const r = s().posts.instances[g] ? e.queryParams.instanceId : R.postId;
						t(Object(b.b)(r))
					}
					E ? Object(I.f)(s(), t, e) : Object(I.g)(s(), t, e), Object(T.w)(s(), !0)
				}, Y = Object(r.a)(U.c), Q = (e, t, s, n) => async (r, i, a) => {
					const d = Object(o.a)(e, t, s, n),
						c = i();
					t = t || Object(A.p)(c, {
						collectionId: e
					});
					const l = await k(a.apiContext(), e, t, s, n);
					if (r(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(P.a)(l.body, t, c);
						r(G({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const n = c.user.prefs.commentMode;
						r(Y({
							commentMode: n,
							key: d,
							postId: t
						}))
					} else r(q({
						error: l.error,
						key: d,
						...l.body
					}))
				}, X = (e, t, s, n, r) => async (i, a, p) => {
					const b = Object(o.a)(e, t, s, n),
						h = a();
					t = t || Object(A.p)(h, {
						collectionId: e
					});
					const {
						subredditName: x
					} = n, v = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), C = h.pages.comments.api.fullyLoaded[b], O = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || v && !O) {
						if (v && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(M.j)(h) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(C || r || i(Q(e, t, s, n)))
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
						const e = t && Object(B.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > W.MIN_NUM_COMMENTS_TO_TRUNCATE && (j.truncate = W.NUM_COMMENTS_TRUNCATE)
					}
					let E, I = await Object(N.a)("comments", () => k(p.apiContext(), e, t, s, j));
					if (i(Object(m.n)(I.status)), I.ok && (t = t || I.body.collections[e].primaryPostId)) {
						const e = Object.keys(I.body.posts).filter(e => !!I.body.posts[e].isMeta),
							s = Object(B.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(y.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (E = t.body)
						}
					}
					if (!r) {
						const r = t ? Object(B.G)(a(), {
							postId: t
						}) : null;
						r && I.body.comments && Object.keys(I.body.comments).length < r.numComments ? i(Q(e, t, s, n)) : I.ok && i(Y({
							commentMode: _,
							key: b,
							postId: t
						}));
						const o = Object(M.j)(h) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
						i(Object(d.b)(o))
					}
					if (I.ok) {
						if (!t) return;
						const e = Object(P.a)(I.body, t, h);
						i(Object(W.commentsPageLoaded)({
							commentMode: _,
							key: b,
							postId: t,
							meta: h.meta,
							governance: E,
							shouldCollapse: e,
							...I.body
						})), i(g.g(b));
						const s = Object(B.G)(h, {
							postId: t
						});
						s && i(u.y(s, f.a.CommentsView)), !r && s && "subreddit" === s.belongsTo.type && I.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else x && (i(Object(l.subredditPending)({
						key: b
					})), I = await Object(N.a)("subreddit", () => Object(w.a)(p.apiContext(), x, {})), i(Object(m.n)(I.status))), i(Object(l.handleSubredditPageApiError)(I, x)), i(q({
						error: I.error,
						key: b,
						...I.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return pt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return bt
			})), s.d(t, "commentsPagePending", (function() {
				return ht
			})), s.d(t, "commentsPageLoaded", (function() {
				return gt
			})), s.d(t, "commentsPageFailed", (function() {
				return ft
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return xt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return Ct
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return yt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return Ot
			})), s.d(t, "commentsPageRequested", (function() {
				return _t
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Et
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return kt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return wt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				a = s("./src/reddit/actions/category/index.ts"),
				d = s("./src/reddit/actions/discoveryUnit.ts"),
				c = s("./src/reddit/actions/pages/subreddit.ts"),
				l = s("./src/reddit/actions/shortcuts/active.ts"),
				m = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				u = s("./src/reddit/actions/subredditSettings.ts"),
				p = s("./src/reddit/endpoints/governance/posts.ts"),
				b = s("./src/reddit/endpoints/page/commentsPage.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function f(e, t) {
				return Object(h.a)(e, {
					...g,
					variables: t
				})
			}
			var x = s("./src/reddit/endpoints/page/subredditPage.ts"),
				v = s("./src/reddit/endpoints/profile/info.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/pageTitle/index.ts"),
				_ = s("./src/reddit/actions/economics/helpers/async.ts"),
				j = s("./src/reddit/actions/externalAccount.ts"),
				E = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				k = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				w = s("./src/reddit/actions/platform.ts"),
				I = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				S = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/reddit/actions/subreddit/notifications.ts"),
				T = s("./src/reddit/actions/subreddit/questions.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				F = s("./src/reddit/constants/adEvents.ts"),
				R = s("./src/reddit/constants/graphql.ts"),
				M = s("./src/reddit/constants/parameters.ts"),
				A = s("./src/reddit/constants/posts.ts"),
				B = s("./src/reddit/helpers/commentList/index.ts"),
				D = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				W = s("./src/reddit/models/Comment/index.ts"),
				U = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				H = s("./src/reddit/models/User/index.ts"),
				z = s("./src/reddit/selectors/adsSignals.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				q = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				K = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Y = s("./node_modules/reselect/es/index.js"),
				Q = s("./src/reddit/constants/experiments.ts"),
				X = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Z = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				J = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				$ = s("./src/reddit/selectors/platform.ts"),
				ee = s("./src/reddit/selectors/removedPosts.ts");
			const te = Object(Y.a)($.f, Z.a, ee.a, ee.c, J.a, ee.e, J.b, (e, t, s, n, r, o, i) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const a = o || i,
					d = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || d)
			});
			var se = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ne = s("./src/reddit/selectors/moderatorPermissions.ts"),
				re = s("./src/reddit/selectors/posts.ts"),
				oe = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ae = s("./src/lib/makeActionCreator/index.ts"),
				de = s("./src/lib/makeCommentsPageKey/index.ts"),
				ce = s("./src/reddit/actions/ads/index.ts"),
				le = s("./src/reddit/helpers/canonicalUrls.ts"),
				me = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ue = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				pe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				be = s("./src/lib/performanceTimings/index.tsx"),
				he = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				ge = s("./src/reddit/actions/gold/customEmojis.ts"),
				fe = s("./src/reddit/actions/gold/powerups.ts"),
				xe = s("./src/lib/makeListingKey/index.ts"),
				ve = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ce = Object(ae.a)(ve.b),
				ye = Object(ae.a)(ve.a);
			var Oe = s("./src/reddit/actions/linkedPosts/index.ts"),
				_e = s("./src/reddit/actions/otherDiscussions/index.ts"),
				je = s("./src/reddit/actions/subreddit/constants.ts"),
				Ee = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var ke = e => {
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
				we = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Pe = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Se = e => {
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
							d = a.posts && a.posts.models,
							c = Object(we.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ie.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(C.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Pe.a)(e)
							}
						}
						s({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Ne = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Te = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Le = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Fe = e => {
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
							d = Object(Te.a)(a),
							c = Le(d),
							l = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: m,
								sort: u,
								subredditName: p
							} = r,
							b = Object(xe.a)(p, y.bb[u], {
								t: m
							});
						s({
							dist: e.dist,
							key: b,
							meta: n.meta,
							postIds: l,
							posts: c
						})
					} catch (a) {
						n(a)
					}
				},
				Re = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Me = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ae = e => {
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
							d = a.posts && a.posts.models,
							c = Object(Me.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ie.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(C.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Pe.a)(e)
							}
						}
						s({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Be = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const De = Object(ae.a)(Be.b),
				We = Object(ae.a)(Be.a);
			var Ue = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ve = Object(ae.a)(Ue.b),
				He = Object(ae.a)(Ue.a),
				ze = Object(ae.a)(je.o),
				Ge = Object(ae.a)(je.n),
				qe = (Object(ae.a)(je.w), Object(ae.a)(je.v), e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o;
					const {
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: d,
						includePostFeed: c,
						includePostQASchemaEligibilityFlag: l,
						listingBelowExperimentVariant: m,
						postId: u,
						range: p,
						sort: b,
						subredditName: g
					} = e, f = Object(xe.a)(u, null, {
						isOtherDiscussions: !0
					}), x = s(), v = Object(re.z)(x, {
						listingKey: f
					}), C = d && (!v || 0 === v.length), O = Object(xe.a)(g, y.bb[b], {
						t: p
					}), _ = Object(re.z)(x, {
						listingKey: O
					}), j = c && (a || !_ || 0 === _.length), E = a, k = i, w = Object(re.G)(x, {
						postId: u
					}), I = !!w && !!w.media && (Object(U.K)(w.media) || Object(U.F)(w.media)) && !w.media.altText;
					if (!(C || j || E || k || I || l)) return;
					C && t(Object(_e.d)({
						key: f
					}));
					const P = await ((e, t) => Object(h.a)(e, {
							...Ee,
							variables: t
						}))(r(), e),
						S = P.body,
						N = Object(Re.a)(m);
					l && (P.ok ? S.data && S.data.post && t(Ce({
						postId: u,
						isEligibleForQASchema: null !== (o = S.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(ye())), C && Object(Ne.a)({
						getState: s,
						onFailure: e => t(Object(_e.b)(e)),
						onSuccess: e => t(Object(_e.c)(e)),
						postId: u,
						response: P
					}), j && !E && (P.ok ? S.data && Fe({
						getState: s,
						onFailure: e => t(Ge(e)),
						onSuccess: e => t(ze(e)),
						options: e,
						postId: u,
						subreddit: S.data.subreddit
					}) : t(Ge(P.error))), E && !N && P.ok && S.data && Se({
						getState: s,
						onFailure: e => t(Object(Oe.a)(e)),
						onSuccess: e => t(Object(Oe.b)(e)),
						postId: u,
						post: S.data.post
					}), k && P.ok && Ae({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(Ve(e)),
						postId: u,
						post: S.data.post
					}), I && P.ok && S.data && ke({
						getState: s,
						onFailure: e => t(We(e)),
						onSuccess: e => t(De(e)),
						postId: u,
						post: S.data.post
					})
				}),
				Ke = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(C.y)(n),
						{
							sortToUse: o
						} = Object(D.a)(e, r);
					return (!o || o === y.w.CONFIDENCE) && Object(X.c)(e, {
						experimentEligibilitySelector: () => Object(ie.Q)(e),
						experimentName: Q.x
					}) === Q.z.Enabled
				};
			var Ye = s("./src/reddit/selectors/chatPost.ts"),
				Qe = s("./src/reddit/selectors/seo/index.ts"),
				Xe = s("./src/reddit/actions/pages/constants.ts"),
				Ze = s("./src/lib/initializeClient/installReducer.ts"),
				Je = s("./src/lib/sentry/index.ts"),
				$e = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				et = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				tt = s("./src/reddit/helpers/locales.ts"),
				st = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				nt = s("./src/reddit/reducers/pages/comments/index.ts"),
				rt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				ot = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				it = s("./src/reddit/selectors/experiments/countrySites.ts"),
				at = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				dt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				ct = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				lt = s("./src/reddit/selectors/i18n/index.ts"),
				mt = s("./src/reddit/selectors/meta.ts"),
				ut = s("./src/reddit/actions/pages/search/index.ts");
			Object(Ze.a)({
				pages: {
					comments: nt.a
				}
			}), Object(Ze.a)({
				features: {
					modUserNotes: st.a
				}
			});
			const pt = 25,
				bt = 100,
				ht = Object(ae.a)(Xe.h),
				gt = Object(ae.a)(Xe.f),
				ft = Object(ae.a)(Xe.e),
				xt = Object(ae.a)(Xe.i);

			function vt(e) {
				return e && e.ok
			}
			const Ct = (e, t, s) => {
					const n = !e,
						r = Object(re.G)(t, {
							postId: s
						}).belongsTo,
						o = Object(oe.Q)(t, {
							identifier: r
						}),
						i = Object(Qe.c)(t, {
							identifier: r
						}),
						a = !!Object(Re.c)(t),
						d = Object(lt.a)(t),
						c = Object(at.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : d ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(V.i)(o) && !Object(Ye.d)(t, {
						postId: s
					}) && !!o || !Object($.j)(t) && Object(K.e)(t)), e && (l.postQASchema = Object(K.d)(t)), c && (l.listingBelow = !0), l
				},
				yt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				Ot = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				_t = e => async (t, s) => {
					var n, d;
					const {
						partialPostId: c,
						partialCommentId: u
					} = e.params, {
						subredditName: p
					} = e.params || "", b = c ? Object(C.y)(c) : "", h = u && Object(W.h)(u), {
						path: g,
						queryParams: f
					} = e, x = Object(k.d)(g), {
						instanceId: v
					} = f, {
						hasSortParam: _,
						sortToUse: E
					} = Object(D.a)(s(), b), N = null === (d = null === (n = Object($.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === d ? void 0 : d.route.chunk, L = ["context", "depth", "limit", M.h].reduce((e, t) => {
						const s = parseInt(f[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: p,
						hasSortParam: _,
						instanceId: v,
						include_categories: !0
					});
					_ && (L.sort = E), L.onOtherDiscussions = x, L.comment_awardings_by_current_user = !0, t(I.q(b));
					const F = s(),
						B = Object(rt.a)(F),
						V = e.url.includes("search");
					if (V && B.bucketed) {
						const s = c && Object(C.y)(c),
							n = Object(i.e)(r()(e.queryParams, M.D)),
							o = Object(i.b)(s, void 0, n);
						await t(Object(ut.d)({
							key: o,
							options: n,
							subredditName: p,
							postId: s
						}))
					} else await t(Et(b, h, L, E));
					const H = s().posts.models[b],
						q = Object(ie.R)(s());
					if (H && "subreddit" === H.belongsTo.type) {
						const e = H.belongsTo.id;
						if (await Promise.all([Object(be.i)(() => t(Object(fe.e)(e, {
								fullData: !0,
								includeIdentity: q
							})), {
								name: "subredditPowerupsRequested",
								page: N,
								isLoggedIn: q
							}), Object(be.i)(() => t(Object(he.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: N,
								isLoggedIn: q
							}), Object(be.i)(() => t(Object(ge.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: N,
								isLoggedIn: q
							})]), !Object($.j)(F)) {
							Object(dt.a)(F) && t(Object(T.b)(e))
						}
						Object(ne.i)(F, e) && await t(Object(m.c)(b))
					}
					if (H) {
						const n = ((e, t) => {
								const s = Object(re.V)(e, {
										postId: t
									}),
									n = Object(re.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), b),
							r = Object(oe.Q)(s(), {
								identifier: H.belongsTo
							});
						if (r && (e => Q.Ff.Redirect === Object(X.b)(e, {
								experimentEligibilitySelector: te,
								experimentName: Q.xf
							}))(s())) return void t(Object(o.c)(r.url));
						if ((H.media && H.media.type) === U.o.LIVEVIDEO) {
							const e = `/rpan${H.belongsTo.type===A.a.SUBREDDIT?r.url:"/"}${Object(C.C)(H.id)}`;
							return void t(Object(o.c)(e))
						}
						if (H.belongsTo.type !== A.a.SUBREDDIT || H.isSponsored) {
							if (H.belongsTo.type === A.a.PROFILE) {
								const e = Object(be.i)(() => t(P.d(r.name)), {
									name: "getProfileInfo",
									page: N,
									isLoggedIn: q
								});
								await e
							}
						} else {
							if (!!!Object(oe.X)(s(), {
									subredditId: H.belongsTo.id
								})) {
								const e = Object(be.i)(() => t(S.o(r.name)), {
									name: "getSubredditRules",
									page: N,
									isLoggedIn: q
								});
								await e
							}
						}
						const i = Ct(!1, s(), b),
							d = x;
						if (yt(d, i)) {
							Object(me.d)(me.a.LinkedPosts);
							const e = Object(me.c)(me.a.LinkedPosts);
							Object(me.d)(me.a.NsfwLinkedPosts);
							const n = Object(me.c)(me.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: a,
									sessionStartTime: c
								} = Object(z.a)(s()),
								l = {
									adContext: {
										layout: R.a.Card,
										sourcePostId: b,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: a,
											sessionStartTime: c
										}
									},
									range: y.oc.WEEK.toUpperCase(),
									sort: y.S.TOP,
									subredditName: r.name
								},
								m = {
									postId: b
								},
								u = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Re.c)(s())
								};
							Object(at.b)(s()) && (u.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const p = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(ct.a)(s())
								},
								h = Ot(i);
							Object(be.i)(() => t(qe({
								...m,
								...l,
								...u,
								...p,
								...h,
								includeOtherDiscussions: d
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: q,
								page: N
							});
							0
						}
						t(Object(j.p)()), t(w.m({
							title: n
						}));
						const c = s().posts.instances[b] ? e.queryParams.instanceId : H.postId;
						t(Object(l.b)(c)); {
							const e = Object(G.c)(s(), {
								subredditName: r.name
							});
							await Promise.all(e.map(e => t(a.b(e))))
						}
					} else t(w.m({
						title: O.f()
					}));
					const {
						routePrefix: K
					} = e.params;
					V || (A.b[K] === A.a.PROFILE ? Object(le.f)(s(), t, e) : Object(le.d)(s(), t, e))
				}, jt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], Et = (e, t, s, n) => async (r, o, i) => {
					var a, l, m, u;
					const h = o(),
						g = Object(de.a)(e, t, s),
						{
							subredditName: C
						} = s,
						O = h.pages.comments.keyToHeadCommentId.hasOwnProperty(g),
						j = h.pages.comments.api.fullyLoaded[g],
						k = h.pages.comments.api.error[g],
						P = h.pages.comments.api.pending[g],
						S = !Object(ie.Q)(h),
						T = Object(ie.l)(h),
						R = n === y.w.CHAT,
						M = !!h.platform.lastPage;
					if ((P || O && !k) && !(R && M)) {
						if (O && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object($.j)(h) ? pe.a.COMMENTS_OVERLAY : pe.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(ce.b)(e))
							})
						}
						return void(j || r(wt(e, t, s)))
					}
					r(d.g());
					const A = h.user.prefs.commentMode;
					r(ht({
						key: g,
						postId: e,
						commentMode: A
					}));
					const D = {
						...s,
						...R ? {
							sort: y.w.LIVE
						} : S ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(re.G)(o(), {
							postId: e
						});
						t && t.numComments && t.numComments > bt && (D.truncate = pt)
					}
					const W = null === (l = null === (a = Object($.b)(h)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
						U = Object(be.i)(() => Object(b.a)(i.apiContext(), e, t, D, Object(q.a)(o()), Ke(o())), {
							name: "fetchCommentsPage",
							isLoggedIn: !S,
							page: W
						}),
						V = !S && T && Object(be.i)(() => Object(v.d)(i.gqlContext(), Object(H.e)(T)), {
							name: "fetchProfileKarma",
							isLoggedIn: !S,
							page: W
						}) || null,
						z = Object(ot.c)(h),
						G = Object(be.i)(() => f(i.gqlContext(), {
							postId: e,
							includeSubredditRankings: z
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !S,
							page: W
						});
					let K, Y, Q, X;
					if ([K, Y, Q] = await Promise.all([U, V, G]), r(Object(w.n)(K.status)), vt(Q) && "SubredditPost" === (null === (m = Q.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
						const e = Q.body.data.postInfoById.subreddit.name;
						Object(le.c)(o(), r, e)
					}
					if (K.ok) {
						try {
							K.body.posts = await Object($e.a)(i.apiContext(), K.body.posts, h)
						} catch (Z) {
							Je.c.captureException(Z)
						}
						const t = Object.keys(K.body.posts).filter(e => !!K.body.posts[e].isMeta),
							s = K.body.posts[e];
						if (Object(le.b)(o(), r, s.belongsTo.type), t.length) {
							const e = Object(be.i)(() => Object(p.a)(i.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: W,
									isLoggedIn: !S
								}),
								n = await e;
							n.ok && (X = n.body)
						}
						if (vt(Y)) {
							const {
								data: e
							} = Y.body, t = {
								karma: {
									...v.a
								}
							};
							if (Object(v.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							K.body && K.body.account && Object.assign(K.body.account, t)
						}
						if (vt(Q)) {
							const {
								data: t
							} = Q.body;
							if (t.postInfoById && jt.includes(t.postInfoById.__typename) && (K.body.posts[e] = {
									...K.body.posts[e],
									...t.postInfoById,
									mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(mt.d)(h) && e && Object(it.f)(h) && await Object(tt.a)(e, r);
								const {
									id: s,
									isEligibleForContentBlocking: n,
									allowedMediaInComments: o,
									directoryRankings: i
								} = t.postInfoById.subreddit;
								r(Object(N.c)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: n,
											allowedMediaInComments: o,
											directoryRankings: i
										}
									}
								}))
							}
						}
						const n = Object(B.a)(K.body, e, h),
							{
								postMeta: a
							} = K.body;
						K.body.posts[e] = {
							...K.body.posts[e],
							isRobotIndexable: Object(et.a)(a, e)
						}, r(gt({
							key: g,
							postId: e,
							meta: h.meta,
							governance: X,
							shouldCollapse: n,
							...K.body
						}))
					} {
						const n = Object(re.G)(o(), {
							postId: e
						});
						n && K.body.comments && Object.keys(K.body.comments).length < n.numComments ? r(wt(e, t, s)) : K.ok && r(kt({
							key: g
						}));
						const i = Object($.j)(h) ? pe.a.COMMENTS_OVERLAY : pe.a.COMMENTS;
						r(Object(ce.b)(i))
					}
					if (K.ok) {
						r(L.g(g));
						const t = Object(re.G)(o(), {
								postId: e
							}),
							s = Object.keys(K.body.comments);
						if (r(I.y(t, F.a.CommentsView)), Object(ne.h)(o(), {
								subredditId: t.belongsTo.id
							}) && r(Object(E.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && K.body.comments) {
							const e = Object(be.i)(() => r(Object(_.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: W,
								isLoggedIn: !S
							});
							await e
						}
					} else {
						let e;
						C && (r(Object(c.subredditPending)({
							key: g
						})), e = await Object(ue.a)("subreddit", () => Object(x.a)(i.apiContext(), C, {})), r(Object(w.n)(e.status)), r(Object(c.handleSubredditPageApiError)(e, C))), r(ft({
							error: K.error,
							key: g,
							...e ? e.body : K.body
						}))
					}
				}, kt = Object(ae.a)(Xe.g), wt = (e, t, s) => async (n, r, o) => {
					var i, a;
					const d = Object(de.a)(e, t, s),
						c = r(),
						l = Object(ie.R)(c),
						m = Object(ie.l)(c),
						p = null === (a = null === (i = Object($.b)(r())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						h = Object(b.a)(o.apiContext(), e, t, s, Object(q.a)(c), Ke(c)),
						g = l && m && Object(v.d)(o.gqlContext(), Object(H.e)(m)) || null,
						x = Object(be.i)(() => f(o.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: p
						}),
						[C, y, O] = await Promise.all([h, g, x]);
					if (C.ok) {
						if (vt(y)) {
							const {
								data: e
							} = y.body, t = {
								karma: {
									...v.a
								}
							};
							if (Object(v.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							C.body && C.body.account && Object.assign(C.body.account, t)
						}
						if (vt(O)) {
							const {
								data: t
							} = O.body;
							C.body.posts[e] = {
								...C.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(B.a)(C.body, e, c);
						n(gt({
							key: d,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...C.body
						})), n(kt({
							key: d
						}));
						const s = r().posts.models[e],
							o = s && Object(re.V)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(se.a)(c, {
							subredditId: o.id
						}) && n(Object(u.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && C.body.comments && await n(Object(_.a)({
							commentIds: Object.keys(C.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(ft({
						error: C.error,
						key: d,
						...C.body
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
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/structuredStyles/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
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
					if (i) return C(i.id, t, s)(n, r, o)
				}, v = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), C = (e, t, s) => async (r, i, p) => {
					const x = await Object(l.e)(t);
					r(h());
					const C = i();
					try {
						await Object(o.g)("communityIcon", x, e)(r, i, p)
					} catch (O) {
						return Object(b.a)(Object(c.c)(C, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: m.b.Error,
							text: v()
						})), void r(f())
					}
					const y = Object(u.c)(i(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(C, "image is null")), r(Object(a.f)({
						kind: m.b.Error,
						text: v()
					})), void r(f());
					await Object(o.k)(e, {
						communityIcon: y
					}, d.b.idCard, s)(r, i, p), r(Object(a.f)({
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
				return I
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "g", (function() {
				return S
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
				d = s("./src/redditGQL/operations/MutedSubreddits.json"),
				c = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
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
			var C = s("./src/reddit/endpoints/subreddit/about.ts");
			const y = Object(r.a)(b.i),
				O = Object(r.a)(b.h),
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
						if ((await m(i(), t)).ok) n && n(), x(s, w({
							subredditId: t,
							subredditName: s
						}));
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
						if ((await u(i(), t)).ok) n && n(), v(s, k({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), e(Object(h.c)({
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
						if ((await u(i(), t)).ok) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(s, I({
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
						notificationLevel: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: d
						} = a;
						const l = Object(h.a)(s);
						(await ((e, t, s) => Object(i.a)(e, {
							...c,
							variables: {
								input: {
									...s,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(_({
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
					const a = await (e => Object(i.a)(e, d))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(y({
							nodes: s
						}))
					} else e(O()), e(Object(o.f)({
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
						const i = await u(o(), t),
							{
								data: a
							} = i.body;
						if (i.ok && a.deleteSubredditMuteSettings.ok) e(j(t)), e(v(s));
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
						const a = s(),
							d = Object(g.t)(a).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (d) {
							const t = d.name,
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
						const c = await Object(C.a)(i(), t, !0),
							{
								data: l
							} = c.body,
							u = l && l.subreddit;
						if (!c.ok || null === u) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const b = u.id,
							h = await m(i(), b),
							{
								data: v
							} = h.body;
						if (h.ok && v.updateSubredditMuteSettings.ok) e(E([u])), e(x(u.name));
						else {
							e(f(`error-muting-${b}`))
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
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
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
					var v, C, y;
					e(p());
					const O = h(s),
						_ = await Object(c.b)(x(), t, O);
					if ((null === (C = null === (v = _.error) || void 0 === v ? void 0 : v.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(_.body) && (null === (y = _.body.data.updateSubredditNotificationSettings.errors) || void 0 === y ? void 0 : y.length)) return e(b()), e(Object(d.f)({
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
					})), r && r(), e(a ? Object(d.f)(Object(d.e)(g(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(d.f)(Object(d.e)(g(s), m.b.SuccessCommunityGreen))))
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
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/RichTextJson/index.tsx"),
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
				if (!Object(o.e)(m.a) || !Object(a.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return r.a.createElement("div", {
					className: Object(i.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(d.y)(t, l.a.Click))
					}
				}, r.a.createElement(c.b, {
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
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/timeAgo/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/elementIds.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts");
			var h = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/helpers/chooseVariant/index.ts");
			const f = e => {
				return Object(g.c)(e, {
					experimentEligibilitySelector: g.a,
					experimentName: h.wf
				}) === h.Rd
			};
			var x = s("./src/reddit/selectors/recapGame.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/BackToTop/index.m.less"),
				y = s.n(C);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				if (e) {
					const e = document.getElementById(m.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: m
				} = e;
				const h = Object(l.b)(),
					g = Object(r.useRef)(null),
					[C, j] = Object(r.useState)(!1),
					[E, k] = Object(r.useState)(),
					[w, I] = Object(r.useState)(),
					[P, S] = Object(r.useState)(0),
					N = Object(i.e)(v.l),
					T = Object(i.e)(f),
					L = Object(i.e)(v.R),
					F = Object(i.e)(x.a),
					R = encodeURIComponent(a.a.redditUrl + "/r/recap"),
					M = a.a.accountManagerOrigin,
					A = L ? "/r/recap" : `${M}/login/?dest=${R}`,
					B = N ? N.id : "anonymous",
					D = "on" === F.recapGameState,
					W = () => {
						C && I(setTimeout(() => {
							g.current && (g.current.classList.add(y.a.transform), g.current.style.width = `${P}px`)
						}, 4750)), C && k(setTimeout(() => {
							j(!1), Object(p.Sb)(B, !1)
						}, 5e3))
					};
				Object(r.useEffect)(() => {
					D || setTimeout(() => {
						const e = Object(p.N)(B);
						e ? Object(c.e)(e.lastSeenTime) >= 24 && e.dropSkip === p.a.NONE ? j(!0) : Date.now() >= new Date(2022, 10, 2).getTime() && e.dropSkip !== p.a.SECOND && j(!0) : j(!0)
					})
				}, [B, D]);
				const U = Object(r.useCallback)(e => {
					if (e) {
						const t = e.clientWidth;
						S(t + 32)
					}
				}, []);
				return o.a.createElement("div", {
					className: Object(d.a)(t, y.a.container),
					style: m
				}, C && T && !s && !D ? o.a.createElement("a", {
					ref: g,
					href: A,
					className: y.a.bananaPill,
					onMouseEnter: () => {
						E && clearTimeout(E), w && clearTimeout(w), g.current && (g.current.classList.remove(y.a.transform), g.current.style.width = "65px")
					},
					onMouseLeave: W,
					onClick: () => {
						E && clearTimeout(E), w && clearTimeout(w), j(!1), Object(p.Sb)(B, !0), h((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...b.o(e)
						}))())
					}
				}, o.a.createElement("img", {
					className: y.a.icon,
					src: `${a.a.assetPath}/img/recap/banana_pill.png`,
					alt: O._("banana", null, {
						hk: "1fs9mn"
					})
				}), o.a.createElement("span", {
					className: y.a.text
				}, "+1"), O._("{=Back to Top}", [O._param("=Back to Top", o.a.createElement("span", {
					ref: U,
					className: y.a.altText
				}, O._("Back to Top", null, {
					hk: "4BTAZ0"
				})))], {
					hk: "4Foziy"
				}), o.a.createElement(n.a, {
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
				}, o.a.createElement("div", null))) : o.a.createElement(u.a, {
					className: y.a.button,
					onClick: () => _(s)
				}, O._("Back to Top", null, {
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
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
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
					className: Object(m.a)(p.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				C = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				y = e => o.a.createElement(x, e, e.isCommentBoxDesignEnabled ? o.a.createElement(C, null) : o.a.createElement(v, null), o.a.createElement(d.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				O = f(y),
				_ = Object(n.a)({
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
				j = e => o.a.createElement(_, b({}, e, {
					fallback: o.a.createElement(O, {
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
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: d,
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
				}, r.a.createElement(c.t, {
					className: u.a.LoginLink,
					kind: c.b.ExternalLink,
					priority: c.c.Secondary,
					href: Object(a.a)(n, b, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Log In", null, {
					hk: "ZR3pC"
				})), r.a.createElement(c.t, {
					className: Object(o.a)(u.a.SignupLink, {
						[u.a.LiveStreamingSignupLink]: s
					}),
					kind: c.b.ExternalLink,
					priority: c.c.Primary,
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
				d = s("./src/reddit/components/LottieAnimation/index.tsx"),
				c = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(c);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(o.useRef)(null),
					[s, c] = Object(o.useState)(!1),
					u = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && c(!1), t <= .001 && c(!0)
						})
					}, []);
				Object(a.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(d.a, {
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
				d = s("./src/reddit/models/PostDraft/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
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
			var C, y, O = s("./node_modules/lodash/defer.js"),
				_ = s.n(O),
				j = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/reportFlow/index.ts"),
				S = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				T = s("./src/reddit/helpers/trackers/lightbox.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				A = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				V = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				H = s.n(V);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(C || (C = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(y || (y = {}));
			const z = (e, t) => {
					const s = H.a[t],
						n = H.a[e];
					return Object(c.a)(s, n)
				},
				G = e => Object(c.a)(H.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[H.a.isInOverlay]: e.isInOverlay,
					[H.a.isModModeEnabled]: e.isModModeEnabled,
					[H.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Q = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				X = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				J = s("./src/reddit/components/OverflowMenu/index.tsx"),
				$ = s("./src/reddit/components/ReportFlow/index.tsx"),
				ee = s("./src/reddit/components/ReportFlow/new.tsx"),
				te = s("./src/reddit/components/ShareMenu/index.tsx"),
				se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/modTools.ts"),
				ie = s("./src/reddit/layout/row/Inline/index.tsx"),
				ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				de = s("./src/reddit/icons/fonts/index.tsx"),
				ce = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				le = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				be = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				he = s("./src/devPlatform/constants.ts"),
				ge = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				fe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				xe = s.n(fe);
			const ve = j.a.wrapped(ce.a, "CommentIcon", xe.a),
				Ce = j.a.wrapped(pe.a, "Report", xe.a),
				ye = j.a.wrapped(me.a, "IgnoreReport", xe.a),
				Oe = j.a.wrapped(X.a, "ModActionsMenu", xe.a),
				_e = j.a.div("OverflowMenuSpacer", xe.a),
				je = j.a.wrapped(J.a, "DropdownRow", xe.a),
				Ee = j.a.wrapped(ie.a, "Flatlist", xe.a),
				ke = j.a.button("Button", xe.a),
				we = j.a.wrapped(q.a, "ModToolsFlatlist", xe.a),
				Ie = j.a.wrapped(ne.a, "ViewReportsDropdown", xe.a),
				Pe = e => `Comment-${e}--Modal--DeleteComment`,
				Se = e => `Distinguish--Dropdown--${e}`,
				Ne = e => `${e}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Le = Object(a.c)({
					claimedFreeAward: A.b,
					currentUser: W.l,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.a)(e) === Pe(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Se(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Te(s.id))(e)
					},
					isLoggedIn: W.R,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.A)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.m)(e, {
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
						return Object(R.K)(e, {
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
						return Object(B.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: M.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(B.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isDevPlatformEnabled: e => Object(ge.a)(e)
				});
			class Fe extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(T.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(oe.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(oe.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(oe.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(S.d)(S.a.GildingFlow, !0);
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
						depth: d,
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
						postIsArchived: O,
						postAuthorIsBlocked: j,
						postIsLocked: E,
						renderedInOverlay: k,
						sendEvent: w,
						subreddit: I,
						subredditAboutInfo: P,
						toggleDeleteCommentModal: S,
						toggleSendReplies: T,
						trackCommentClick: F,
						isPostUnrepliable: R,
						isDevPlatformEnabled: M
					} = this.props, A = Object(N.a)(x), B = !!s && s.displayText === e.author, D = !!s && s.isEmployee, W = e.unrepliableReason, V = !j && !Object(L.g)(e) && !R && !W && !R && !(P && P.userIsBanned) && (E || O || A && p || e.isLocked ? A && p : p || m), H = Object(Z.a)(e), q = A && B && !e.bannedBy, X = B && D && !e.bannedBy, $ = q || X, ee = !Object(L.g)(e) && s && e.isGildable && !R && !(W && "[deleted]" === e.author), se = !O && !W, ne = [];
					V && ne.push(o.a.createElement(ke, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), _()(() => F("reply", e.id)())
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
						subredditType: null == I ? void 0 : I.type
					}, o.a.createElement(ke, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), B || ne.push({
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
						icon: o.a.createElement(de.a, {
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
					}), B && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(de.a, {
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
						icon: o.a.createElement(de.a, {
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
							className: z(e.breakpointGroup, C.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						ce = ne.map(e => o.a.isValidElement(e) ? null : o.a.createElement(je, {
							className: z(e.breakpointGroup, C.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: xe.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Ee, {
						className: Object(c.a)(G({
							depth: d,
							isInOverlay: k,
							isModModeEnabled: A && v || M,
							isFollowCommentEnabled: se
						}), t)
					}, ie, o.a.createElement(_e, {
						className: B ? void 0 : z(y.LoggedInUser, C.HideIfVWLarger)
					}, o.a.createElement(J.b, {
						className: xe.a.overflowMenu,
						disabled: b,
						dropdownId: Ne(e.id),
						onClick: () => w(Object(oe.b)("comment_overflow_menu", e.id))
					}, ce, B && o.a.createElement(o.a.Fragment, null, o.a.createElement(je, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: xe.a.dropdownRowText
					}, o.a.createElement(de.a, {
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
						toggleModal: S,
						trackClick: () => {},
						withOverlay: !0
					}), A && o.a.createElement(o.a.Fragment, null, v && o.a.createElement(we, {
						className: z(y.Moderator, C.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: B
					}), o.a.createElement(Oe, {
						className: v ? z(y.Moderator, C.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(oe.b)("comment_mod_action_menu", e.id))
					}, o.a.createElement(ue.a, null), o.a.createElement(U.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Z.c)(e) && !v && o.a.createElement(K.a, {
						text: `${H}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Te(e.id)
					}, o.a.createElement(Ie, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(ye, null) : o.a.createElement(Ce, null)), $ && o.a.createElement(K.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(le.a, null), o.a.createElement(Q.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: D,
						isUserMod: A,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Se(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Re = Object(i.b)(Le, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(I.i)(Pe(s.id))), e(Object(E.h)({
								tooltipId: Ne(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.e)({
								commentId: s.id,
								draftKey: Object(l.a)(d.c.edit, s.id),
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
						onGildClick: (t, n) => e(Object(w.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(P.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(E.h)({
							tooltipId: Se(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(E.h)({
							tooltipId: Te(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(I.i)(Pe(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(se.c)(Fe)),
				Me = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ae = s.n(Me);
			var Be = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Ae.a.glowHighlightContainer,
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
				Ge = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ke = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Qe = s("./src/reddit/components/ModModeReports/index.tsx"),
				Xe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ze = s("./src/reddit/components/RichTextJson/index.tsx"),
				Je = s("./src/reddit/components/UserIcon/index.tsx"),
				$e = s("./src/reddit/components/UserIcon/constants.ts"),
				et = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				tt = s("./src/reddit/helpers/author.ts"),
				st = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				nt = s("./src/reddit/constants/componentTestIds.ts"),
				rt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ot = s("./src/reddit/contexts/Visibility.tsx"),
				it = s("./src/reddit/controls/ErrorText/index.tsx"),
				at = s("./src/reddit/controls/InternalLink/index.tsx"),
				dt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ct = s("./src/reddit/helpers/flair.ts"),
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
				Ct = s("./src/reddit/selectors/moderatingComments.ts"),
				yt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Ot = s.n(yt),
				_t = s("./src/config.ts"),
				jt = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				Et = s("./src/reddit/components/SubredditIcon/index.tsx"),
				kt = s("./src/reddit/helpers/trackers/comment.ts");

			function wt() {
				return (wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const It = 300,
				Pt = j.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", v({}, s, {
						className: Object(c.a)(t, x.a.expandButton)
					}), o.a.createElement(g.a, {
						className: x.a.expandIcon
					}))
				}), "ExpandButton", Ot.a),
				St = j.a.wrapped(Re, "FlatList", Ot.a),
				Nt = j.a.wrapped(it.b, "ErrorText", Ot.a),
				Tt = j.a.wrapped(Ge.a, "HorizontalVotes", Ot.a),
				Lt = j.a.div("ActionBar", Ot.a),
				Ft = j.a.wrapped(He.a, "TopMeta", Ot.a),
				Rt = j.a.div("CommentContentWrapper", Ot.a),
				Mt = j.a.wrapped(qe.b, "AuthorHovercard", Ot.a),
				At = Object(rt.v)(),
				Bt = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(bt.b)(e, t),
					currentProfileModPermissions: rt.i,
					depth: (e, t) => Object(R.j)(e, t),
					collapsed: Ct.b,
					collapsedBecauseCrowdControl: Ct.a,
					currentUser: W.l,
					flair: R.e,
					focused: (e, t) => !t.noFocus && Object(R.t)(e, t),
					highlightAnimationDisabled: vt.d,
					isAdmin: W.L,
					isEditing: R.z,
					isLoggedIn: W.R,
					isPendingDeletion: R.E,
					isPresenceConsumptionExpEnabled: gt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(bt.b)(e, t);
						return s ? Object(ft.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: xt.f,
					modModeEnabled: rt.W,
					errorMsgs: R.I,
					replyFormOpen: R.L,
					subreddit: rt.s,
					subredditType: R.O,
					isOnlineConsumptionLoadTest: gt.a,
					isOnlineUserPref: W.W,
					userIsBanned: (e, t) => {
						const s = Object(bt.b)(e, t);
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
				Vt = At(Bt(e => {
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
						flatlist: C,
						focused: y,
						hasAwardGradient: O,
						highlightAnimationDisabled: _,
						highlightTreatment: j,
						index: E,
						isActive: k,
						isAdmin: w,
						isAvatarsInCommentsEnabled: I,
						isBlockingInterstitialEnabled: P,
						isBlockingInterstitialV2Enabled: S,
						isEditing: T,
						isFirstInList: F,
						isHighlighted: R,
						isLoggedIn: M,
						isOnlineConsumptionLoadTest: A,
						isOnlineUserPref: B,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: W,
						moderatorPermissions: U,
						modModeEnabled: V,
						noSpacing: H = !1,
						onCommentAuthorClick: z,
						onCommentTimestampClick: G,
						onCollapseClick: q,
						onIgnoreReports: K,
						onLineMouseOver: Y,
						onPresenceIndicatorInViewport: Q,
						onVoteClick: X,
						postId: J,
						prediction: $,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						subreddit: ie,
						subredditType: ae,
						trackCommentClick: de,
						userIconSmall: ce,
						userIsBanned: le,
						onClickRevealSpoilerText: me,
						onMediaReload: ue
					} = e, pe = m.isDeleted, be = !T && !pe && !!x && x.length > 0, he = Object(l.a)(d.c.edit, m.id), ge = Object(l.a)(d.c.replyToComment, m.id), fe = Object(N.a)(U), xe = Object(Ye.a)(m), ve = Object(Z.c)(m), Ce = m.authorIsContractor && ae === lt.g.EmployeesOnly, ye = m.isLocked, Oe = fe && V, _e = !T && !pe && (M || I), je = I && !m.unrepliableReason, Ee = !!g && Object(mt.e)(g) === m.author, [ke, we] = Object(r.useState)(null), [Ie, Pe] = Object(r.useState)(null), Se = Object(r.useRef)(null), Ne = Object(L.f)(m) || Object(L.g)(m), Te = Ne ? Wt : at.default, Le = Object(L.f)(m) ? Ut : Mt, Fe = Object(se.b)();
					Object(r.useEffect)(() => {
						if (!T && !pe && (O && we(o.a.createElement(Ue, null)), null !== j)) {
							if (j.glowHexColor) {
								const e = j.glowHexColor;
								we(o.a.createElement(Be, {
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
					}, [T, pe, O, _, j]);
					const Re = Object(r.useCallback)(() => {
							Fe(Object(kt.c)(m.id))
						}, [Fe, m.id]),
						Me = Object(ot.b)();
					(P || S) && Me && E >= ht.a - 1 && oe();
					const Ae = !pe && !Object(L.f)(m) && (!le || le && Ee) && !Object(L.g)(m) && M,
						De = Object(r.useCallback)(() => {
							Ae && W && !Ee && Q && Q(m.id)
						}, [m.id, Q, Ae, W, Ee]),
						We = Object(st.a)(m),
						He = !!g && Object(mt.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Ge = Object(jt.c)(He),
						qe = Ge || Object(jt.b)(He);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, Ot.a.CommentWrapper, {
							[Ot.a.highlightComment]: R,
							[Ot.a.deleted]: pe,
							[Ot.a.focused]: y,
							[Ot.a.redesign]: I,
							[Ot.a.topLevel]: !f,
							[Ot.a.noSpacing]: H
						})
					}, ke, Ie, !T && !pe && F && o.a.createElement("div", {
						className: Ot.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${_t.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Pt, {
						className: Object(c.a)(m.id, {
							[Ot.a.hidden]: !i,
							[Ot.a.visible]: i
						}),
						onClick: () => {
							s(), q(), de("collapse", m.id)()
						},
						onMouseOver: () => Y(m.id),
						onMouseOut: s
					}), Object(tt.a)(m.author) ? ie ? o.a.createElement(Et.b, {
						className: Object(c.a)(Ot.a.UserIconContainer, ce && Ot.a.UserIconContainerSmall),
						subredditOrProfile: ie,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Le, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: Ot.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(L.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? Xe.f.Lightbox : void 0
					}, o.a.createElement(Te, {
						className: Object(c.a)(Ot.a.UserIconContainer, ce && Ot.a.UserIconContainerSmall),
						"data-testid": Ne ? void 0 : "comment_author_icon",
						onClick: Ne ? void 0 : z,
						to: `/user/${m.author}/`
					}, Me ? o.a.createElement(Je.a, {
						isNft: qe,
						className: Object(c.a)(Ot.a.UserIcon, {
							[Ot.a.v1NftTreatment]: Ge
						}),
						iconUrl: He,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: $e.a,
						userName: m.author,
						isHighlighted: R,
						shouldShowPresenceIndicator: Ae && W,
						onPresenceIndicatorInViewport: De,
						isCommentAuthorBlocked: Object(L.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: Ee,
						isOnlineOverrideValue: B,
						isOnlineStatusLoadTest: Ae && A,
						authorId: m.authorId
					}) : o.a.createElement("div", {
						className: Ot.a.UserIcon
					}))), o.a.createElement(Rt, {
						className: Object(c.a)({
							[Ot.a.isActive]: k,
							[Ot.a.isCollapsed]: i,
							[Ot.a.isLocked]: ye && Oe,
							[Ot.a.isPendingDeletion]: D,
							[Ot.a.isRemoved]: !!m.bannedBy && Oe || m.isDeleted && w
						})
					}, o.a.createElement(dt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", f + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Ft, {
						userHasNft: qe,
						childrenInfo: t,
						className: Object(c.a)({
							[Ot.a.collapsed]: i,
							[Ot.a.noFlair]: Object(ct.o)(v || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: v,
						isAdmin: w,
						isPostComment: !0,
						onCommentAuthorClick: z,
						onCommentTimestampClick: G,
						renderedInOverlay: ee,
						renderContractorBadge: Ce
					}), !i && o.a.createElement(r.Fragment, null, T && o.a.createElement(h.a, {
						className: Object(c.a)(Ot.a.EditCommentForm, Ot.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: d.c.edit,
						draftKey: he,
						postId: J,
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
					}), !T && (!pe || w) && o.a.createElement("div", {
						"data-testid": nt.d,
						ref: Se,
						className: Object(c.a)(Ot.a.CommentBody, {
							[Ot.a.restrictHeight]: !(!ne || !Se.current) && Se.current.clientHeight > It
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
							onClick: Re
						}
					}), o.a.createElement(pt.b, {
						content: We
					})), V && fe && xe && o.a.createElement(Ke.a, {
						thing: m
					}), V && fe && ve && o.a.createElement(Qe.a, {
						onIgnoreReports: K,
						reportable: m
					}), null != C ? C : _e && o.a.createElement(Lt, null, je && o.a.createElement(Tt, {
						downvoteButtonClassName: Ot.a.voteButton,
						downvoteClassName: Ot.a.upDownVote,
						model: m,
						onVoteClick: X,
						scoreClassName: Ot.a.score,
						upvoteButtonClassName: Ot.a.voteButton,
						upvoteClassName: Ot.a.upDownVote
					}), o.a.createElement(St, {
						comment: m,
						commentsPageKey: u,
						depth: f,
						isAvatarsInCommentsEnabled: I,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: V,
						moderatorPermissions: b || U,
						renderedInOverlay: ee,
						isCommentFocused: y,
						subreddit: ie,
						trackCommentClick: de
					})), be && x.map(e => o.a.createElement(Nt, {
						key: e
					}, e)), te && o.a.createElement(h.a, {
						className: Object(c.a)(Ot.a.EditCommentForm, Ot.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: d.c.replyToComment,
						draftKey: ge,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: J,
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
			t.a = e => o.a.createElement(et.a.Consumer, null, t => o.a.createElement(Vt, wt({}, e, {
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
				return w
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "e", (function() {
				return S
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
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
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
				C = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				_ = s.n(O);
			const j = l.a.p("EmptyTitle", _.a),
				E = l.a.p("ErrorTitle", _.a),
				k = l.a.p("EmptyText", _.a),
				w = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(_.a.StateContainer, t)
					}, s ? a.a.createElement(C.a, {
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
				I = () => a.a.createElement("div", {
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
				S = Object(d.b)(null, (e, t) => {
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
						className: Object(c.a)(_.a.StateContainer, _.a.ErrorFullPage)
					}, a.a.createElement(S, {
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
				F = l.a.div("CommentPlaceholder", _.a),
				R = l.a.div("Avatar", _.a),
				M = l.a.div("VoteColumn", _.a),
				A = l.a.div("TextColumn", _.a),
				B = () => a.a.createElement("div", {
					className: Object(c.a)(_.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(c.a)(_.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = e => a.a.createElement(L, null, o()(10, t => a.a.createElement(F, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(M, null, a.a.createElement(x.b, {
					className: _.a.Upvote
				}), a.a.createElement(f.a, {
					className: _.a.Downvote
				})), a.a.createElement(A, null, a.a.createElement(B, null), a.a.createElement(D, null)))))
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
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
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
				C = s("./src/reddit/constants/gold.ts"),
				y = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const O = [{
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
				for (const t of O) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return E
			}
			var w = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				I = s("./src/reddit/selectors/comments.ts"),
				P = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/Comments/Comment/index.tsx"),
				R = s("./src/lib/scroll/index.ts"),
				M = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				W = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				U = s.n(W);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = p.a.wrapped(D.a, "ArrowRight", U.a), z = p.a.wrapped(M.a, "LinkOrOverlayLink", U.a), G = p.a.span("HoverSpan", U.a), q = Object(l.c)({
				permalink: (e, t) => Object(I.m)(e, {
					commentId: Object(I.r)(e, t).parentId
				})
			});
			var K = Object(c.b)(q)(Object(A.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement("div", {
						className: Object(m.a)(U.a.Wrapper, {
							[U.a.isActive]: t
						})
					}, d.a.createElement(z, {
						isOverlay: !!s,
						to: Object(B.b)(n),
						onClick: R.b
					}, d.a.createElement(G, null, V._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", d.a.createElement(H, null)))
				})),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Q = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				X = s.n(Q);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), J = p.a.div("MoreCommentsItemWrapper", X.a), $ = p.a.p("MoreComments", X.a), ee = p.a.wrapped($, "MoreCommentsInteractive", X.a), te = Object(l.c)({
				moreCommentsItem: I.F,
				moreCommentsPending: I.G
			});
			var se = Object(c.b)(te, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.n)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					const {
						isActive: t,
						moreCommentsClicked: s,
						moreCommentsItem: n,
						moreCommentsPending: r
					} = e;
					return d.a.createElement(J, null, r ? d.a.createElement($, null, Z._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement(Y.a.Consumer, null, e => d.a.createElement(ee, {
						className: Object(m.a)({
							[X.a.isActive]: t
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
			const ae = p.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: v.m
				})), "Line", ie.a),
				de = p.a.div("LineContainer", ie.a),
				ce = p.a.div("ShortLineContainer", ie.a);
			var le = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: r,
						onLineMouseOver: o,
						onLineMouseOut: i,
						onShortLineClick: a,
						parentNodeIds: c,
						type: l
					} = e;
					return d.a.createElement(de, null, re()(s + 1, e => e === s ? l !== f.a.Comment || t ? null : d.a.createElement(ce, {
						key: c[e]
					}, d.a.createElement(ae, {
						className: Object(m.a)(c[e], {
							[ie.a.hasGlowBorder]: !!n,
							[ie.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => o(c[e]),
						onMouseOut: () => i(c[e])
					})) : d.a.createElement(ae, {
						className: c[e],
						key: c[e],
						onClick: r(e),
						onMouseOver: () => o(c[e]),
						onMouseOut: () => i(c[e])
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
			var ve = Object(c.b)(() => Object(l.c)({
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
				commentListNode: (e, t) => Object(I.l)(e, t),
				depth: (e, t) => Object(I.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const r = Object(I.l)(e, {
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
					const n = Object(I.l)(e, {
						commentLink: s
					});
					return !(s.type !== f.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= C.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(I.p)(e);
					if (n === w.a.None) return !1;
					if (s.type !== f.a.Comment) return !1;
					const r = s.id,
						o = Object(P.b)(e, {
							commentId: r
						});
					if (!o) return !1;
					const i = Object(L.w)(e),
						a = !!Object(N.m)(e, {
							postId: o.postId
						}),
						d = Object(T.G)(e, {
							postId: o.postId
						});
					if (!d || !d.previousVisits || d.previousVisits.length < 1) return !1;
					const c = n === w.a.Last ? d.previousVisits[d.previousVisits.length - 1] : d.previousVisits[0];
					return (a || i) && o.created > c
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
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isAwarded: p,
					isFirstInList: b,
					isHidden: h,
					isHighlighted: g,
					onLineClick: v,
					onPresenceIndicatorInViewport: C,
					onShortLineClick: y,
					parentNodeIds: O,
					postId: _,
					renderedInOverlay: j,
					scrollToAndRemeasure: E,
					showBlockingInterstitial: k
				} = e, w = !!p, I = !(!a || !a.glowHexColor), P = I && i > 0, S = I, N = d.a.createElement(ge, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: P,
						[he.a.glowBorderBottomPadding]: S
					}),
					id: r.id,
					style: {
						paddingLeft: i * (x.v + x.u) + (r.type === f.a.Comment ? x.v : 0)
					},
					tabIndex: -1
				}, d.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: P,
					onLineClick: v,
					onLineMouseOver: fe,
					onLineMouseOut: xe,
					onShortLineClick: y,
					type: r.type,
					parentNodeIds: O
				}), Ce({
					childrenInfo: t,
					clearHovered: xe,
					commentLink: r,
					commentsPageKey: o,
					onLineMouseOver: fe,
					hasAwardGradient: w,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isFirstInList: b,
					isHighlighted: g,
					postId: _,
					renderedInOverlay: j,
					scrollToAndRemeasure: E,
					onPresenceIndicatorInViewport: C,
					showBlockingInterstitial: k
				}));
				return u && r.type === f.a.Comment ? d.a.createElement(me.a, null, N) : N
			});
			const Ce = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: r,
					hasAwardGradient: o,
					highlightTreatment: i,
					index: a,
					isActive: c,
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
						return d.a.createElement(F.a, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: r,
							hasAwardGradient: o,
							highlightTreatment: i,
							index: a,
							isActive: c,
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
						return d.a.createElement(se, {
							commentsPageKey: r,
							isActive: c,
							moreCommentsId: n.id
						});
					case f.a.ContinueThread:
						return d.a.createElement(K, {
							id: n.id,
							isActive: c
						})
				}
			};
			var ye = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Oe = s("./src/reddit/components/Comments/States/index.tsx"),
				_e = s("./src/reddit/components/Scroller/Simple.tsx"),
				je = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/constants/elementIds.ts"),
				ke = s("./src/reddit/featureFlags/index.ts"),
				we = s("./src/reddit/helpers/commentList/index.ts"),
				Ie = s("./src/reddit/helpers/trackers/comment.ts"),
				Pe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Te = s("./src/lib/LRUCache/index.ts"),
				Le = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Fe = s("./src/reddit/selectors/telemetry.ts");
			const Re = e => t => ({
				...Object(Fe.o)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Fe.d)(t, {
					reason: String(e)
				})
			});
			var Me = s("./src/reddit/components/Comments/index.m.less"),
				Ae = s.n(Me);
			const Be = x.f + 10,
				De = 65,
				We = p.a.wrapped(_e.b, "Scroller", Ae.a),
				Ue = Object(l.c)({
					allCollapsed: I.a,
					commentLinks: I.k,
					commentThreadLinkSet: I.o,
					measureScrollFPS: ke.d.measureScrollFPS,
					moreComments: I.b,
					postPermalink: T.F
				}),
				Ve = Object(c.b)(Ue, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.f)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.i)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.Z)(Object(B.b)(t)))
				})),
				He = new Te.a(500),
				ze = new Te.a(500),
				Ge = (e, t) => {
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
			class Ke extends d.a.Component {
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
						}), this.props.sendEvent(Object(Ie.b)(e)))
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
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Se.a && this.props.sendEvent(Re(this.props.commentLinks.length))
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
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						r && (s[c.id].depth > o ? (ye.a(c.id), i += Object(we.d)(c, n), c.type === f.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[r] = {
							numChildren: i,
							hasContinueThread: a
						}, r = null, o = 1 / 0, i = 0, a = !1)), !r && t[c.id] && (r = c.id, o = s[c.id].depth)
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
					} = this.props, a = Ge(e.id, n), c = qe(e.id, r);
					return {
						estHeight: ye.b(e.id) ? 0 : De,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: n => {
							let {
								placeholderRecommended: r,
								height: a,
								width: c,
								scrollToAndRemeasure: l
							} = n;
							return r ? d.a.createElement("div", {
								style: {
									height: a,
									backgroundColor: "#fff"
								}
							}) : d.a.createElement(ve, {
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
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return d.a.createElement(We, {
						className: Object(m.a)(Ae.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(Ee.e) : null,
						onScroll: i,
						onAllChildrenRendered: r,
						preventScrollOnMount: !0,
						scrollToChildPadding: Be,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Oe.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Oe.c, null)
				}
			}
			t.a = Ve(Object(je.c)(Object(Le.a)(Object(Pe.d)(Ke))))
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
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				u = i.a.div("Byline", c.a),
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
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
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
				C = s("./src/reddit/components/SidebarFooter/index.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_ = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				j = s("./src/reddit/components/Widgets/Recommendations/index.tsx"),
				E = s("./src/reddit/components/Widgets/ReredditLink/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				w = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				I = s("./src/reddit/constants/experiments.ts"),
				P = s("./src/reddit/featureFlags/component.tsx"),
				S = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				L = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				R = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx"),
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
				z = Object(c.c)({
					d2xPdpSideRailRecsVariant: T.a,
					isD2xPdpSideRailRecsEnabled: T.b,
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(N.s)(s) && !n && Object(L.a)(e) === I.Ue.NewModule
					},
					isLoggedIn: A.R,
					postSEOV2IdCardVariant: F.h,
					shouldShowReredditPromo: R.a,
					widgets: Object(u.a)(M.x)
				}),
				G = Object(d.b)(z);
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
						subredditName: d,
						subredditOrProfile: c
					} = this.props, m = Object(F.c)(o) || Object(F.f)(o), u = s === I.dd.GreyRereddit || s === I.dd.LargeImagePreview, b = s === I.dd.GreyRedditNoNsfw, h = i && (u || b) ? a.a.createElement(E.ReredditButtons, {
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
						listingName: d,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: m
					}), a.a.createElement(y.a, null, a.a.createElement(B.a, null, !(r.isNSFW && b) && a.a.createElement(j.a, {
						post: r,
						subredditOrProfile: c
					}), i && !u && !b && a.a.createElement(k.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), a.a.createElement(C.a, {
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
					} = this.props, d = !Object(F.c)(o) && !Object(F.f)(o);
					return a.a.createElement(O.a, {
						adComponentOnFakeOverlay: s,
						adComponent: d ? a.a.createElement(v.a, {
							postId: r.id,
							isOverlay: n,
							listingName: i,
							placement: m.e.BELOW_THE_FOLD,
							placementIndex: e,
							position: S.a.BOTTOM,
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
						postSEOV2IdCardVariant: d,
						shouldShowReredditPromo: c,
						subredditId: u,
						subredditName: p,
						widgets: h
					} = this.props;
					let g = 0;
					const C = Object(F.c)(d) || Object(F.f)(d),
						O = a.a.createElement(v.a, {
							postId: i.id,
							isOverlay: o,
							listingName: p,
							placement: m.e.ABOVE_THE_FOLD,
							placementIndex: g++,
							position: S.a.FIRST,
							refreshKey: i.id,
							sizes: m.j,
							commentsPageKey: t
						});
					return s ? this.renderRecommendationsSidebar() : a.a.createElement("div", {
						className: Object(l.a)(W.a.outerWrapper, e)
					}, n && a.a.createElement(x.default, {
						subredditId: u,
						subredditName: p
					}), Object(N.s)(i) ? a.a.createElement(H, {
						profileName: p,
						isOverlay: o || !1
					}) : a.a.createElement(f.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: p,
						postId: i.id,
						rememberPosition: i.numComments > 0,
						isMinimal: C
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
					}), O, r && h.map((e, t) => a.a.createElement(y.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(w.a, {
						subredditName: p,
						widget: e
					}))), i.isSponsored && a.a.createElement(y.a, null, a.a.createElement(_.a, null)), c && a.a.createElement(k.a, {
						directoryTimestamp: i.created,
						postId: i.id
					}), this.renderFooter(g++))
				}
			}
			t.a = G(q)
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
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? p : "unset"
						}
					}, t), g && r.a.createElement(d.l, {
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
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
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
					r = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.V)(e, {
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
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/economics/predictions/index.ts"),
				a = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = s("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(o.d)(),
					s = Object(o.e)(t => Object(d.Y)(t, {
						subredditId: e
					})),
					n = Object(o.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					c = Object(o.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						s.name && t(Object(i.l)(s.name))
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
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/subredditDiscovery.ts");
			const d = Object(n.a)({
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
				c = e => {
					return Object(i.e)(a.a) ? o.a.createElement(d, e) : null
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
				d = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = s.n(d),
				l = s("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				u = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
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
				d = s.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
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
				d = s("./src/reddit/components/Footer/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.div("UserAgreement", c.a), u = a.a.a("UserAgreementLink", c.a), p = a.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(i.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === b.Grey,
					[c.a.mIsWhite]: e.textColor === b.White
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
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = d.a.wrapped(m.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				C = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				O = d.a.wrapped(o.a, "HeaderUrl", h.a),
				_ = d.a.span("Container", h.a),
				j = Object(a.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						o = Object(p.a)(e).banner.positionedImage,
						a = Object(p.a)(e).banner.secondaryBannerPositionedImage;
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
					}, r.a.createElement(O, {
						className: e.className,
						to: e.url
					}, r.a.createElement(C, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
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
							...d,
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
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d,
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
				}), n ? r.a.createElement(c, null, n) : r.a.createElement(c, null), r.a.createElement(l, {
					className: m
				}, r.a.createElement("div", {
					className: a.a.title
				}, d), i && r.a.createElement("div", {
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
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => o.a.createElement(d.a, {
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
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				u = s.n(m);
			const p = o.a.createElement(d.a, {
					className: u.a.lockIcon
				}),
				b = e => Object(c.i)(e) ? i.d.profile : i.d.subreddit;

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
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const u = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, r = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return o.a.createElement(d.a, {
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
				return C
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = i.a;
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = d.b;
						break;
					case c.g.Moderator:
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
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = "clear_fill";
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = "delete_fill";
						break;
					case c.g.Moderator:
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
					case c.g.AntiEvilOps:
						return u._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case c.g.Author:
						return u._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case c.g.AuthorDeleted:
						return u._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case c.g.AutomodFiltered:
						return u._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case c.g.CommunityOps:
						return u._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case c.g.ContentTakedown:
						return u._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case c.g.CopyrightTakedown:
						return u._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case c.g.Moderator:
						return u._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [u._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case c.g.Reddit:
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
					case c.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return u._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case c.g.AutomodFiltered:
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
					case c.g.CommunityOps:
						return u._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case c.g.ContentTakedown:
						return o.a.createElement(g, null);
					case c.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case c.g.Moderator:
						return u._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case c.g.Reddit:
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, v = (e, t, s) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return u._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case c.g.Author:
						return u._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case c.g.AuthorDeleted:
						return u._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case c.g.AutomodFiltered:
						return u._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case c.g.CommunityOps:
						return u._("This post was removed by Reddit admin, u/{username}.", [u._param("username", t)], {
							hk: "34nHWu"
						});
					case c.g.ContentTakedown:
						return u._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case c.g.CopyrightTakedown:
						return u._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case c.g.Moderator:
						return u._("This post was removed by r/{subredditName} moderator, u/{username}.", [u._param("subredditName", s), u._param("username", t)], {
							hk: "270bcn"
						});
					case c.g.Reddit:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, C = e => {
				switch (e) {
					case c.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return u._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case c.g.AutomodFiltered:
						return u._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case c.g.CommunityOps:
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
					case c.g.ContentTakedown:
						return o.a.createElement(g, null);
					case c.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case c.g.Moderator:
						return u._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case c.g.Reddit:
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
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
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
					color: c.a.quarantine,
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
					}), ": ", r ? o.a.createElement(d.a, {
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
					if ((null == e ? void 0 : e.media) && Object(o.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
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
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
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
				C = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/telemetry/index.ts"),
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
				} = t, w = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && k && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...C.o(s)
					}))(s, k)(w))
				}, []);
				return d.a.createElement(x.a, {
					to: (null == o ? void 0 : o.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(j.a.redditLinkCard, r),
					onClick: () => {
						Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...C.o(s)
						}))(s, k)(w))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == _ ? void 0 : _.url) ? d.a.createElement("img", {
					src: _.url,
					className: Object(n.a)(E && j.a.blur)
				}) : d.a.createElement(f.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: j.a.title
				}, u), E && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				})), d.a.createElement("div", {
					className: j.a.postStats
				}, m && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(m), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: j.a.separator
				}, "•")), i && d.a.createElement("span", null, Object(h.b)(i), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: j.a.separator
				}, "•"), l && d.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Xb, !0)))))
			};
			var k = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
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
				} = t, h = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && b && Object(O.a)(Object(S.c)(s, b)(h))
				}, [s, b, h]);
				return d.a.createElement(x.a, {
					to: o,
					className: Object(n.a)(j.a.redditLinkCard, j.a.crosspostLinkCard, r),
					onClick: () => {
						Object(O.a)(Object(S.a)(s, b)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? d.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(u && j.a.blur)
				}) : d.a.createElement(f.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", {
					className: j.a.postStats
				}, d.a.createElement(N.a, {
					className: j.a.crosspostIcon
				}), d.a.createElement(P.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: j.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), d.a.createElement("span", {
					className: j.a.separator
				}, "•"), d.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.title, j.a.crosspostTitle)
				}, u && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), l)))
			};
			var L = d.a.memo(e => {
					let {
						className: t
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(j.a.redditLinkCard, t)
					}, d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.imageContainer)
					}), d.a.createElement("div", {
						className: j.a.postDescription
					}, d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.title)
					}), d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.postStats)
					})))
				}),
				F = s("./src/reddit/actions/subreddit.ts"),
				R = s("./src/reddit/components/SubscribeButton/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: B
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
				const w = Object(c.d)();
				Object(a.useEffect)(() => {
					w(Object(F.u)(r))
				}, [w, r]);
				const I = Object(c.e)(e => Object(u.Y)(e, {
						subredditId: t
					})),
					S = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					_ && I && x && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...C.o(s)
					}))(_, I)(S))
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
				return d.a.createElement("div", {
					className: Object(n.a)(j.a.subredditItem, null === j.a || void 0 === j.a ? void 0 : j.a[f], E)
				}, d.a.createElement("div", {
					className: j.a.contentWrapper
				}, d.a.createElement("div", {
					className: j.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, d.a.createElement("img", {
					className: j.a.banner,
					src: b || void 0
				})), d.a.createElement("div", {
					className: j.a.carouselContent
				}, d.a.createElement(P.a, {
					to: g,
					className: j.a.lockup,
					onClick: () => {
						x && Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...C.o(s)
						}))(_, I)(S))
					}
				}, d.a.createElement("div", {
					style: "small" === f ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: j.a.backgroundImage
				}, m ? d.a.createElement("img", {
					src: m,
					className: j.a.subredditIcon
				}) : d.a.createElement(A.a, {
					className: j.a.subredditIcon
				})), d.a.createElement("div", {
					className: j.a.lockupText
				}, d.a.createElement("span", {
					className: j.a.subredditName
				}, "r/", r), " ", k && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), d.a.createElement("span", {
					className: j.a.subscribersCount
				}, B._({
					"*": "{number} members",
					_1: "1 member"
				}, [B._plural(o, "number", Object(h.b)(o))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: j.a.description
				}, i)), d.a.createElement(R.a, {
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
			}, H = Object(I.c)(e => {
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
				const x = Object(c.d)(),
					[v, C] = Object(a.useState)(null),
					[y, O] = Object(a.useState)(null),
					[_, I] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[P, S] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: F,
						crosspostIds: R,
						postIds: M,
						postUrls: A
					} = Object(a.useMemo)(() => o.reduce((e, t) => {
						let {
							type: s,
							id: n,
							url: r
						} = t;
						switch (s) {
							case w.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case w.a.POST:
								r && (e.postUrls[n] = r), e.postIds.push(n);
								break;
							case w.a.CROSSPOST:
								e.crosspostIds.push(n)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [o]),
					B = Object(c.e)(e => Object(u.D)(e, F)),
					U = Object(c.e)(e => Object(k.L)(e, M)),
					H = Object(c.e)(e => Object(k.L)(e, R)),
					z = B.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					G = U.reduce((e, t) => (e[t.id] = t, e), {}),
					q = H.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == F ? void 0 : F.length) || M.length || R.length) && x(Object(l.e)(F, b, F, h, [...R, ...M]))
				}, [F, R, M, x, h, b]);
				const K = o.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case w.a.SUBREDDIT:
								const t = null == z ? void 0 : z[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case w.a.POST:
								const r = null == G ? void 0 : G[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								});
								break;
							case w.a.CROSSPOST:
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
						0 === (null == y ? void 0 : y.scrollLeft) && y.scrollWidth - e == 0 || I({
							left: t,
							right: s
						})
					}, [y]);
				Object(a.useEffect)(() => {
					if (!v || !y) return;
					const e = i()(() => {
						const e = V(y);
						S(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = V(y);
					return S(t), Q(), () => {
						window.removeEventListener("resize", e)
					}
				}, [v, y, Q, P, K.length]);
				const X = () => 1 === K.length ? j.a.flexWidth : 2 === K.length ? j.a.flexWidthTwoItems : j.a.constantWidth;
				return d.a.createElement("div", {
					ref: C,
					className: Object(n.a)(j.a.carouselContainer, s, null === j.a || void 0 === j.a ? void 0 : j.a[p])
				}, d.a.createElement("div", {
					className: j.a.carouselHeader,
					style: {
						width: N
					}
				}, d.a.createElement("h3", {
					className: j.a.carouselTitle
				}, t)), d.a.createElement("div", {
					ref: O,
					onScroll: Q,
					className: Object(n.a)(j.a.itemsContainer, null === j.a || void 0 === j.a ? void 0 : j.a[p]),
					style: {
						width: N
					}
				}, !K.length && Array(3).fill(!0).map((e, t) => d.a.createElement(L, {
					key: t,
					className: X()
				})), null == K ? void 0 : K.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var r, o, i;
					switch (s) {
						case w.a.SUBREDDIT:
							const e = n;
							return d.a.createElement(D, W({
								className: X(),
								index: t + 1,
								size: p,
								banner: null === j.a || void 0 === j.a ? void 0 : j.a.bannerBackgroundImage,
								icon: (null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.icon) || (null === (i = null === (o = e.styles) || void 0 === o ? void 0 : o.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: f
							}, e));
						case w.a.POST:
							const s = n;
							return d.a.createElement(E, {
								postCard: {
									...s,
									url: A[s.id]
								},
								className: X(),
								post: f
							});
						case w.a.CROSSPOST:
							const a = n;
							return d.a.createElement(T, {
								crosspostCard: {
									...a
								},
								className: X(),
								post: f
							});
						default:
							return null
					}
				})), K.length > 2 && d.a.createElement("div", {
					className: Object(n.a)(j.a.carouselControls, {
						[j.a.hasTitle]: !!t
					})
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.left, {
						[j.a.hidden]: !_.left
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Y(-P)
				}, d.a.createElement(m.a, {
					name: r.a.left_fill,
					className: j.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.right, {
						[j.a.hidden]: !_.right
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Y(P)
				}, d.a.createElement(m.a, {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				h = s.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: b,
					shouldShowSubscribeButton: g,
					subredditOrProfile: f,
					templatePlaceholderImage: x,
					shouldShowFollowButton: v,
					isFollowed: C,
					isCommentsPage: y,
					onFollowPostClick: O
				} = e;
				return Object(u.a)() ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: v || g
					})
				}, r.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, v && r.a.createElement(a.a, {
					isFilled: !!C,
					onClick: O,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), g && f && r.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: f.name,
						type: Object(p.i)(f) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), r.a.createElement(c.b, {
					crosspost: t,
					isCommentsPage: y,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: x
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
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
				C = s("./src/reddit/controls/ImageInput/index.tsx"),
				y = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				O = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				E = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				k = s("./src/reddit/models/ApiRequestState/index.ts"),
				w = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				I = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(S);
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
					className: Object(d.a)(N.a.Card, {
						[N.a.unclickable]: t
					}),
					key: n,
					onClick: e => {
						e.stopPropagation(), !t && s()
					}
				}, r.a.createElement("span", {
					className: N.a.ContentContainer
				}, r.a.createElement("span", {
					className: Object(d.a)(N.a.IconContainer, {
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
			}, F = Object(a.c)({
				isTooltipOpen: e => Object(P.a)(e) === p.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: I.c
			});
			class R extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(k.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => r.a.createElement(C.a, {
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
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(O.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(O.b)(e, t))
				}
				render() {
					var e, t, s, n, o;
					const {
						isTooltipOpen: i,
						onCompleteModule: a,
						onTopBarClicked: c,
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
						onClick: c
					});
					const g = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						x = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
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
						onHeaderClick: c,
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
						className: Object(d.a)(N.a.progressText, {
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
						const t = e.status === w.a.COMPLETED;
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
			const M = Object(o.b)(F, (e, t) => ({
				onCompleteModule: () => e(Object(y.c)(t.subredditId, w.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(x.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(u.h)({
					tooltipId: p.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = M(Object(g.c)(R))
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
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && r.a.createElement(i.a, {
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
				return St
			})), s.d(t, "a", (function() {
				return Nt
			}));
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
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
				C = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				w = s("./src/reddit/actions/tooltip.ts"),
				I = s("./node_modules/lodash/find.js"),
				P = s.n(I),
				S = s("./node_modules/react-motion/lib/react-motion.js");
			const N = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				T = "expando_content",
				L = {},
				F = function() {
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
							opacity: Object(S.spring)(1, N)
						}
					}] : [{
						key: T,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: T,
						style: {
							opacity: Object(S.spring)(0, N)
						}
					}]
				};
			class R extends i.a.Component {
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
					return i.a.createElement(S.TransitionMotion, {
						styles: e => F(e, t),
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
				A = s("./src/reddit/models/Post/index.ts"),
				B = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/selectors/activeModalId.ts"),
				W = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/postCreations.ts"),
				z = s("./src/reddit/selectors/posts.ts"),
				G = s("./src/reddit/selectors/showPromotedCTA.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Q = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				X = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Z = s("./src/reddit/components/Econ/Audio/async.ts"),
				J = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				$ = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				ee = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				te = s("./src/reddit/components/ExpandoButton/index.tsx"),
				se = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ne = s("./src/reddit/components/Flatlist/index.tsx"),
				re = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				oe = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				ie = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ae = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				de = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ce = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
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
				getComponent: () => Object(he.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(ge.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var xe = e => i.a.createElement(fe, e),
				ve = s("./src/reddit/components/PostList/index.tsx"),
				Ce = s("./src/reddit/components/PostMedia/index.tsx"),
				ye = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_e = s("./src/reddit/components/PostTitle/index.tsx"),
				je = s("./src/reddit/components/PostTopLine/index.tsx"),
				Ee = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ke = s("./src/reddit/components/SourceLink/index.tsx"),
				we = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ie = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				Pe = s("./src/reddit/constants/componentSizes.ts"),
				Se = s("./src/reddit/constants/componentTestIds.ts"),
				Ne = s("./src/reddit/constants/postLayout.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Le = s("./src/reddit/helpers/postEvent.ts"),
				Fe = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Re = s("./src/reddit/selectors/postFlair.ts"),
				Me = s("./src/reddit/models/Audio/index.ts"),
				Ae = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Be = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				De = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ue = s("./src/reddit/selectors/experiments/presence.ts");
			const Ve = e => {
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: De.qg
					}) === De.Rd
				},
				He = e => {
					if (Object(Ue.a)(e)) return !1;
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: De.pg
					}) === De.Rd
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
					}) === De.Rd
				};
			var Ge = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				qe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ke = s("./src/reddit/constants/colors.ts"),
				Ye = s("./src/reddit/icons/fonts/index.tsx"),
				Qe = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Xe = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ze = s.n(Xe);
			const Je = i.a.createElement(Ye.a, {
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
						color: Ke.a.dayModeActionIcon,
						icon: Je,
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
				} = e, o = t ? Object(et.e)(n, s, r) : Object(et.f)(n, r), a = t ? Object(et.c)(n) : Object(et.d)(n, r), d = t ? Ke.a.warning : Ke.a.dayModeActionIcon, c = Object(et.a)(n);
				return i.a.createElement(Qe.a, {
					className: st.a.BannerBase,
					color: d,
					icon: c,
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
				dt = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				ct = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
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
					color: Ke.a.dayModeActionIcon,
					icon: ht,
					title: qe.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				ft = s("./src/reddit/components/PostContent/index.m.less"),
				xt = s.n(ft),
				vt = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const {
				fbt: Ct
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = p.a.wrapped(_e.c, "PostTitle", xt.a), Ot = p.a.wrapped(te.a, "ExpandoButton", xt.a), _t = p.a.wrapped(R, "ClassicExpandoMotion", xt.a), jt = p.a.wrapped(ne.c, "FullWidthFlatlist", xt.a), Et = e => {
				let {
					post: t
				} = e;
				var s;
				return i.a.createElement("p", {
					className: xt.a.VideoProcessingStatus
				}, (null === (s = t.mediaStatus) || void 0 === s ? void 0 : s.transcodingStatus) === ut.S.Error ? Ct._("The video file submitted for this post failed to process successfully.", null, {
					hk: "2ybSik"
				}) : Ct._("Your video is processing. We'll send you a notification when it's done.", null, {
					hk: "1rkfJE"
				}))
			}, kt = Object(Te.v)({
				isCommentsPage: Te.y,
				pageLayer: e => e
			}), wt = Object(a.b)(() => Object(l.c)({
				activeModalId: D.a,
				flairStyleTemplate: Te.Y,
				currentUser: q.l,
				crosspost: z.d,
				hideNSFWPref: q.G,
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
				showPromotedCTA: G.a,
				post: z.G,
				moderatorPermissions: V.m,
				modModeEnabled: Te.W,
				shouldTryToShowCrosspostModal: ct.e,
				showEditFlair: Re.a,
				subredditOrProfile: z.V,
				isEditing: H.M,
				userIsOp: q.Eb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Be.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Be.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: ze,
				isReadingIndicatorsReadTestEnabled: He,
				isReadingIndicatorsWriteTestEnabled: Ve,
				isTypingIndicatorsExperimentEnabled: Ge.b,
				isTypingIndicatorsReadTestEnabled: Ge.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(f.fb)(n)),
					onOpenReportsDropdown: t => e(Object(w.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === B.a.upvoted ? Object(f.jb)(n) : Object(f.v)(n);
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
			}), It = e => e.media && e.media.type === M.o.EMBED && e.media.provider === M.v.Imgur && e.media.height > 700, Pt = new h.a, St = "VISIBLE", Nt = "NOT_VISIBLE", Tt = e => Pt.publish(e ? St : Nt), Lt = {
				threshold: [.85, .001],
				rootMargin: `${1-Pe.f}px 0px 0px 0px`
			}, Ft = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Tt(!1), e <= .001 && Tt(!0)
				}
			}, Rt = Object(b.b)(e => ({
				renderingObjectInfo: e.post,
				pageLayer: e.pageLayer
			})), Mt = p.a.wrapped(d.a, "ThumbLink", xt.a), At = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: r,
					onFollowPostClick: o
				} = e;
				const a = t.source ? i.a.createElement(X.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(Mt, {
					to: Object(_.b)(t.permalink)
				}, i.a.createElement(X.a, {
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
					tooltipText: Ct._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Bt = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(_t, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce.a, {
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
			t.c = kt(wt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: h,
					isAdminOrMod: f,
					isBlurredPreview: _,
					isCommentCountAnimation: w,
					isCommentsPage: I,
					isCountAnimShadowTestEnabled: P,
					isCrosspostRecommendationsExperimentEnabled: S,
					isCurrentUserProfilePost: N,
					isEditing: T,
					isExpanded: L,
					isFollowed: F,
					isFollowedExpired: R,
					isModWithUserNotesPermissions: B,
					isOverlay: D,
					isReadingIndicatorsExperimentEnabled: U,
					isReadingIndicatorsReadTestEnabled: V,
					isReadingIndicatorsWriteTestEnabled: H,
					isTypingIndicatorsExperimentEnabled: z,
					isTypingIndicatorsReadTestEnabled: G,
					isVoteCountAnimation: q,
					moderatorPermissions: X,
					modModeEnabled: te,
					onFollowPost: ue,
					onFollowPostExpired: be,
					onIgnoreReports: he,
					onOpenReportsDropdown: ge,
					openPost: fe,
					onVoteClick: Pe,
					post: Te,
					scrollerItemRef: Re,
					sendEvent: Be,
					shouldTryToShowCrosspostModal: De,
					showEditFlair: We,
					showPromotedCTA: Ue,
					subredditOrProfile: Ve,
					userIsOp: He,
					pageLayer: ze
				} = e, Ge = Object(we.b)(), qe = Object(o.useRef)(null), [Ke, Ye] = Object(o.useState)(Te.authorIsBlocked), Qe = Object(M.J)(Te), Xe = Object(a.e)(e => Object(W.a)(e, {
					post: Te,
					pageLayer: ze
				})), Ze = Object(c.a)(Te), Je = U || z, et = Je || V || H || G, tt = !!(_ && (null == Ve ? void 0 : Ve.isNSFW));
				Object(o.useEffect)(() => {
					R && be()
				}, []);
				const st = Object(a.d)(),
					nt = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					if (S && De) return st(Object(it.a)(Te)), nt.current = setTimeout(() => {
						st(Object(at.h)(dt.a)), st(Object(it.b)())
					}, dt.b), () => {
						st(Object(it.b)()), st(Object(at.g)(dt.a)), nt.current && clearTimeout(nt.current)
					}
				}, [st, S, Te, De]), Object(Fe.a)(qe, Ft, Lt);
				const ct = Te.isSponsored ? Object(ve.b)(Te.id, {
						fireAdPixelsOfType: d,
						openPost: fe
					}) : r.a,
					lt = Object(O.a)(X),
					ut = Object(C.a)(X),
					pt = Object(y.a)(X),
					bt = lt || ut,
					ht = ((e, t, s) => {
						const [n, r] = e ? [Object(v.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || r
					})(n, bt, Te),
					ft = !!Te.media && (Te.media.type === M.o.RTJSON || Te.media.type === M.o.TEXT),
					Ct = He && ft,
					_t = Object(ce.a)(Te),
					kt = Object(me.c)(Te);
				let wt;
				const Pt = Object(vt.a)(),
					St = !(te && lt),
					Nt = Object(ye.b)({
						hide: !Je && St,
						editPost: !Je && St,
						save: St,
						report: !Je && St
					}),
					Tt = Te.removedByCategory === A.g.AuthorDeleted,
					Mt = n && (n.displayText === Te.author || n.username === Te.author),
					Dt = !!Te.unrepliableReason,
					Wt = !Ke && !Tt && !It(Te) && (Mt || f || !(Te.removedByCategory && Te.media && (Object(M.M)(Te.media) || Object(M.K)(Te.media) || Object(M.E)(Te.media)))),
					Ut = Xe && Te.source;
				let Vt;
				Te.media && Te.media.type !== M.o.TEXT && (Vt = Te.media.richtextContent);
				const Ht = Object(m.t)(Te, h),
					{
						source: zt
					} = Ht,
					Gt = Te.removedByCategory === A.g.Reddit && Object(g.e)(Te.created) > 24,
					qt = Te.removedByCategory && Te.removedByCategory !== A.g.Reddit || Gt,
					Kt = !qt && !Te.isArchived,
					Yt = Object(o.useCallback)(() => {
						ue(F ? A.f.UNFOLLOWED : A.f.FOLLOWED), Ge(F ? Object(E.q)(Te.id) : Object(E.c)(Te.id))
					}, [ue, Ge, F, Te.id]),
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
					Xt = i.a.createElement(ot.a, {
						post: Te,
						showViewCount: ht
					}),
					Zt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Ne.g.Classic : Object(Ae.c)(n) ? Ne.g.Large : Object(Me.c)(n) ? Ne.g.Large : t || Object(A.A)(n) ? Ne.g.Large : !n.media || Object(A.q)(n) || It(n) ? Ne.g.Medium : Ne.g.Large
					})(e),
					Jt = Object(a.e)(mt.b),
					$t = Object(oe.b)(Te),
					es = () => {
						const t = !(Dt && Ke),
							n = Object(M.I)(Te);
						return Dt && n ? i.a.createElement(gt, null) : Ke ? i.a.createElement($e, {
							onBannerClick: () => Ye(!1),
							isExpandable: Qe
						}) : Pt || !Te.source || Zt !== Ne.g.Medium || tt ? Wt && !T && Zt === Ne.g.Large ? i.a.createElement(Ce.a, {
							className: Object(u.a)(xt.a.LargePostMedia, {
								[xt.a.isCommentsPage]: I
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
							scrollerItemRef: Re
						}) : t && Zt === Ne.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Ot, {
							crosspost: s || void 0,
							isExpanded: !!L,
							post: Te,
							useMediaIcons: !1
						}), Bt(e)) : null : i.a.createElement(ke.a, {
							post: Te,
							isCommentsPage: I,
							pageLayer: ze
						})
					};
				if (Zt === Ne.g.Classic) {
					const t = !Pt && Object(x.a)(Te, Ke);
					wt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Oe.a, {
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
						isCommentsPage: I,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!B,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Te,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Te.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Kt && !t,
						isFollowed: F,
						onFollowPostClick: Yt
					}), Qt, i.a.createElement(se.a, {
						className: I ? xt.a.leftPadding : void 0,
						post: Te,
						sendEvent: Be
					}), Ut && Vt && i.a.createElement(re.a, {
						content: Vt,
						rtJsonElementProps: Rt(e)
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
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: P
					}))), t && i.a.createElement(At, {
						post: Te,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Kt,
						isFollowed: F,
						onFollowPostClick: Yt
					})))
				} else if (Zt === Ne.g.Medium) {
					const t = !Pt && Object(x.a)(Te, Ke);
					wt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Oe.a, {
						model: Te,
						handleVote: Pe,
						isCountAnimShadowTestEnabled: P,
						isOverlay: D,
						shouldShowUpvoteRatioOnHover: Je,
						isVoteCountAnimation: q,
						postId: Te.id
					}), i.a.createElement("div", {
						className: xt.a.mainBody
					}, i.a.createElement("div", {
						className: xt.a.content
					}, i.a.createElement(je.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!B,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Te,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Te.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Kt && !t,
						isFollowed: F,
						onFollowPostClick: Yt
					}), Qt, es(), Object(M.O)(Te) && i.a.createElement(Et, {
						post: Te
					}), i.a.createElement(se.a, {
						className: I ? xt.a.leftPadding : void 0,
						post: Te,
						sendEvent: Be
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
						isCommentsPage: I,
						isOverlay: !0,
						modModeEnabled: te,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Kt,
						isFollowed: F,
						onFollowPostClick: Yt
					})), Ut && Vt && !qt && i.a.createElement(re.a, {
						content: Vt,
						rtJsonElementProps: Rt(e)
					}), i.a.createElement(ie.d, null), !!Jt && i.a.createElement(k.a, {
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
						showEditPost: Ct,
						showEditFlair: We,
						tooltipType: D ? Ee.f.Lightbox : void 0,
						useFlatlistBreakpoints: Nt,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: P,
						shouldHideItems: Je
					}), et && i.a.createElement(Ie.a, {
						isReadingIndicatorsExperiment: U,
						isReadingIndicatorsReadLoadTest: V,
						isReadingIndicatorsWriteLoadTest: H,
						isTypingIndicatorsExperiment: z,
						isTypingIndicatorsReadLoadTest: G,
						postId: Te.id
					}), !Je && Xt))
				} else Zt === Ne.g.Large && (wt = i.a.createElement("div", {
					"data-test-id": Se.e
				}, i.a.createElement(Oe.a, {
					model: Te,
					handleVote: Pe,
					isCountAnimShadowTestEnabled: P,
					isOverlay: D,
					shouldShowUpvoteRatioOnHover: Je,
					isVoteCountAnimation: q,
					postId: Te.id
				}), Object(Ae.c)(Te) && i.a.createElement(i.a.Fragment, null, i.a.createElement($.a, {
					post: Te
				}), i.a.createElement(J.a, {
					post: Te
				})), !Object(Ae.c)(Te) && i.a.createElement(i.a.Fragment, null, i.a.createElement(je.a, {
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: I,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: !!B,
					isOverlay: !!D,
					isTopicPage: !1,
					post: Te,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!D && !Te.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ve,
					shouldShowFollowButton: Kt,
					isFollowed: F,
					onFollowPostClick: Yt
				}), Qt, ((e, t, s, n) => !Pt && e.source && !t && (s || n))(Te, s, D, I) && !tt && i.a.createElement(ke.a, {
					post: Te,
					isCommentsPage: I,
					pageLayer: ze
				})), i.a.createElement(se.a, {
					className: I ? xt.a.leftPadding : void 0,
					post: Te,
					sendEvent: Be
				}), Ve && qt && i.a.createElement(rt, {
					isAdminOrMod: f,
					post: Te,
					subredditOrProfile: Ve
				}), T && i.a.createElement(xe, {
					post: Te
				}), es(), Ue && zt && zt.url && !Te.isSurveyAd && i.a.createElement(K.a, {
					className: xt.a.adLinkWrapper
				}, i.a.createElement(Y.a, {
					post: Te,
					adLinkContent: Ht
				})), te && lt && _t && i.a.createElement("div", {
					className: xt.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					thing: Te
				})), te && lt && kt && i.a.createElement("div", {
					className: xt.a.modModeBannerWrapper
				}, i.a.createElement(le.a, {
					onIgnoreReports: he,
					reportable: Te
				})), Object(Me.c)(Te) && i.a.createElement(Z.a, {
					post: Te
				}), i.a.createElement(ie.d, null), !!Jt && i.a.createElement(k.a, {
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
					showEditPost: Ct,
					showEditFlair: We,
					tooltipType: D ? Ee.f.Lightbox : void 0,
					useFlatlistBreakpoints: Nt,
					isCommentCountAnimation: w,
					isCountAnimShadowTestEnabled: P,
					shouldHideItems: Je
				}), et && i.a.createElement(Ie.a, {
					isReadingIndicatorsExperiment: U,
					isReadingIndicatorsReadLoadTest: V,
					isReadingIndicatorsWriteLoadTest: H,
					isTypingIndicatorsExperiment: z,
					isTypingIndicatorsReadLoadTest: G,
					postId: Te.id
				}), !Je && Xt)));
				const ts = Object(o.useCallback)((e, t) => Object(E.k)(e, t), []);
				return i.a.createElement(pe.b, {
					className: Object(u.a)(t, xt.a.postContainer, {
						[xt.a.hasEventMeta]: Object(Le.a)(Te)
					}),
					isOverlay: D,
					post: Te,
					eventFactory: D ? j.b : ts,
					onClick: ct
				}, i.a.createElement(ee.a, {
					post: Te
				}), wt)
			}))
		},
		"./src/reddit/components/PostDetailStickyHeader/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
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
				c = e => {
					const t = Object(i.e)(a.c),
						s = Object(i.e)(a.a);
					return t || s ? o.a.createElement(d, e) : null
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
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
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
					shouldShowUpvoteRatioOnHover: C
				} = e, y = `upvote-button-${t.id}${f?"-overlay":""}`;
				return r.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && r.a.createElement(d.a, {
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
						[u.a.allowPointerEvents]: C
					}),
					shouldShowUpvoteRatioOnHover: C
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: j,
					hostPostData: k,
					iconClassName: w,
					inSubredditOrProfile: I,
					isCommentsPage: P,
					isCompactPinnedPost: S,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: T,
					isOverlay: L,
					isTopicPage: F,
					listingKey: R,
					post: M,
					shouldShowSubscribeButton: A,
					showCornerOutboundLink: B,
					showSubreddit: D,
					showSubredditIcon: W,
					subredditOrProfile: U,
					isFollowed: V,
					shouldShowFollowButton: H,
					onFollowPostClick: z
				} = e;
				const G = F,
					q = U && Object(O.i)(U),
					K = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(_.Hb)(e, M.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(a.a)(E.a.container, t)
				}, D && U && o.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, o.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, W && o.a.createElement(p.b, {
					className: Object(a.a)(E.a.subredditIcon, w),
					shouldHideNsfwIcon: j,
					subredditOrProfile: U
				}))), o.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, D && o.a.createElement(c.h, {
					type: M.belongsTo.type,
					id: M.belongsTo.id
				}), o.a.createElement(u.g, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: L ? u.f.Lightbox : void 0,
					post: M,
					showSub: D,
					subredditOrProfile: U
				}), o.a.createElement(m.a, {
					className: E.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: S,
					post: M,
					tooltipType: L ? u.f.Lightbox : void 0
				}), !G && o.a.createElement(d.a, {
					isPostDetail: P,
					thing: M,
					tooltipType: L ? u.f.Lightbox : void 0
				})), U && K && D && A && !N && o.a.createElement(h.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(M.id, e ? "unsubscribe" : "subscribe", "post", R, k),
					identifier: {
						name: U.name,
						type: q ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: M.id,
					size: f.d.XS
				}), B && o.a.createElement(x.b, {
					isSponsored: M.isSponsored,
					postId: M.id,
					href: Object(y.D)(M),
					source: M.source
				}, o.a.createElement(C.a, {
					className: E.a.outboundLinkIcon
				})), H && K && o.a.createElement(l.a, {
					isFilled: !!V,
					onClick: z,
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
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
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
				C = s("./src/reddit/constants/postLayout.ts"),
				y = s("./src/reddit/helpers/postCollection.ts"),
				O = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				w = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				N = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/lib/classNames/index.ts"),
				R = s("./src/reddit/constants/listings.ts"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/helpers/name/index.ts"),
				B = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
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
					let d = null,
						c = o.url;
					return r ? (c = R.c[R.b.Popular], d = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(A.d)(o.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", o.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(M.default, {
						className: Object(F.a)(W.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: W.a.background
					}), a.a.createElement("div", {
						className: W.a.layout
					}, d, a.a.createElement(B.a, {
						className: W.a.arrow
					})))
				}),
				H = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				z = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				G = s.n(z);
			const q = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, k.a, w.b, (e, t, s) => !((!t || s) && e)),
				K = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(y.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.Q, L.R, E.d, q, (e, t, s, n, r, o) => !t && !s && !n && !r && !e && o),
				Y = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, I.b, P.c, T.ab, T.kb, (e, t, s, n, r) => {
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
							shouldShowLinkedPosts: !Object(x.zg)(s) && !Object(P.a)(s),
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
				Q = Object(c.c)({
					isD2xPdpSideRailRecsEnabled: I.b,
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: S.a,
					shouldShowListingBelow: K,
					shouldShowNsfwListingBelow: N.b
				}),
				X = Object(d.b)(Q, e => ({
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
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(x.zg)(c) && !Object(P.a)(c) && !i) return a.a.createElement("div", {
						className: G.a.smallBanner
					});
					const {
						name: l
					} = r, m = Object(O.a)(o.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(P.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Re.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: G.a.smallBanner,
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
						hostPostData: d,
						listingBelowVariant: c
					} = s;
					if (!n) return null;
					const l = !!(null == d ? void 0 : d.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: G.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: G.a.postList,
						disablePlaceholder: !0,
						forcedLayout: C.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: d,
						isTruncated: !0,
						listingBelowVariant: c,
						listingKey: this.listingKey(),
						listingName: v.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: G.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						skipSubredditPosts: t ? 15 : 0,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: G.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: l,
						shouldShowNsfwListingBelow: r,
						subredditOrProfile: i
					}))
				}
			}
			t.a = X(Object(m.a)(Object(g.c)(Z)))
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
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: d
				} = e;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === d && r.a.createElement("div", {
					className: Object(o.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(c.a.content, {
						[c.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(c.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === d && r.a.createElement("div", {
					className: Object(o.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
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
				d = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
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
				C = s("./src/reddit/components/SearchWarnings/index.tsx"),
				y = s("./src/reddit/components/Thumbnail/index.tsx"),
				O = s("./node_modules/react-redux/es/index.js"),
				_ = s("./node_modules/reselect/es/index.js"),
				j = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/poll/index.ts"),
				I = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts");
			const N = {
					crosspost: P.d,
					isActive: P.j,
					isLoggedIn: S.R,
					moderatorPermissions: k.m,
					modModeEnabled: E.W,
					poll: w.e,
					showEditFlair: I.a,
					flairStyleTemplate: E.Y
				},
				T = () => Object(_.c)(N);
			var L = s("./src/reddit/contexts/Post/index.tsx"),
				F = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/lib/isUrl/index.ts"),
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
						first: O,
						flairStyleTemplate: _,
						isLoggedIn: j,
						isOverlay: E,
						moderatorPermissions: k,
						modModeEnabled: w,
						onClickPost: I,
						onClickPostAuthor: P,
						onClickPostCommunity: S,
						onIgnoreReports: N,
						poll: T,
						post: L,
						redditStyle: W,
						searchQuery: H,
						showBulkActionCheckbox: z,
						subredditOrProfile: G,
						title: q
					} = e, K = W ? void 0 : _, Y = s || void 0, Q = Object(R.a)(k), X = Object(m.a)(L), Z = Object(p.c)(L), J = Object(y.c)({
						crosspost: s,
						post: L,
						url: void 0,
						usePreview: !1
					}), $ = J && Object(B.a)(J), ee = !!L.media && Object(A.H)(L.media), te = !j, se = Object(n.useMemo)(() => q ? void 0 : Object(D.a)(H, e => r.a.createElement("span", {
						className: Object(o.a)(U.a.syntaxHighlight)
					}, e), e => e), [q, H]), ne = {
						flairStyleTemplate: K,
						isOverlay: E,
						onClickPostAuthor: P,
						onClickPostCommunity: S,
						post: L,
						shouldShowSubscribeButton: te,
						subredditOrProfile: G
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
					}), L.source && !Y && r.a.createElement(F.a, {
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
						templatePlaceholderImage: K && K.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.b, {
						className: Object(o.a)(U.a.postContainer, Object(M.a)(e), O ? U.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: E,
						onClick: I,
						post: L,
						style: {
							...Object(M.d)(e),
							...Object(M.b)(K)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: K,
						redditStyle: !0
					}, r.a.createElement(d.a, {
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
					}, ne)), r.a.createElement(C.a, {
						className: Object(o.a)(U.a.paddingSide, U.a.postItemWarningContainer),
						isSpoiler: L.isSpoiler,
						isNSFW: L.isNSFW,
						isQuarantined: null == G ? void 0 : G.isQuarantined
					}), re, w && Q && X && r.a.createElement(l.a, {
						thing: L
					}), w && Q && Z && r.a.createElement(u.a, {
						onIgnoreReports: N,
						reportable: L
					}), r.a.createElement(x.c, {
						className: Object(o.a)(U.a.paddingSide, U.a.postItemFlatlistContainer),
						post: L
					}), r.a.createElement(c.d, null))));
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
						})(Object(O.d)(), {
							...t
						}),
						o = Object(E.cb)(s),
						i = Object(O.e)(T),
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
				d = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				c = s.n(d);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(c.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(i.a)(c.a.flatlistItem)
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
						className: Object(i.a)(c.a.flatlistItem)
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
					className: Object(i.a)(c.a.flatlistItem)
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
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
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
					subredditOrProfile: C,
					tooltipType: y
				} = e, O = Object(u.a)(), {
					isSubEnlarged: _
				} = Object(i.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, g.a.metaContainer)
				}, !v.isSponsored && C && o.a.createElement(a.a, {
					className: Object(n.a)(g.a.hovercardContainer, g.a.hovercardContainer),
					postId: v.id,
					subredditName: C.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(g.a.subredditIcon, _ && g.a.enlargedSubredditIcon),
					linkTo: C.url,
					linkProps: h ? {
						"data-testid": f,
						onClick: h
					} : void 0,
					subredditOrProfile: C
				}), o.a.createElement(l.a, {
					className: Object(n.a)(g.a.subredditName, _ && g.a.enlargedSubredditName),
					"data-testid": x,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: C.url,
						state: O
					}
				}, C.displayText)), !v.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(d.h, {
					type: v.belongsTo.type,
					id: v.belongsTo.id
				})), o.a.createElement(c.g, {
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
				d = s.n(a),
				c = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(c);
			const m = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: d.a.postContent
			}, r.a.createElement("div", {
				className: d.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.subredditName, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.author, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(d.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: d.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.flatListItem, Object(i.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/lodash/constant.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/times.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				u = s("./src/reddit/selectors/searchResults.ts"),
				p = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				b = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				h = s.n(b);
			const g = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(c.e)(e => Object(u.d)(e, {
					listingKey: t
				})), o = Object(c.e)(e => Object(u.u)(e, {
					listingKey: t
				})), a = Boolean(o && o.token) && n.length > 0;
				return d.a.createElement("div", {
					className: h.a.container,
					"data-testid": "comments-list"
				}, d.a.createElement(m.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: l.hc.Comments
				}), a && d.a.Children.toArray(i()(3, r()(d.a.createElement(p.a, {
					className: h.a.loadMoreItem,
					isLoading: !0
				})))))
			}
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
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(a);
			const c = e => r.a.createElement("div", {
				className: Object(o.a)(d.a.communityContainer, e.sidebar && d.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: d.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.subredditInfo, e.sidebar && d.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(d.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return bt
			})), s.d(t, "b", (function() {
				return Ct
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/config.ts"),
				h = s("./node_modules/lodash/noop.js"),
				g = s.n(h),
				f = s("./node_modules/polished/dist/polished.es.js"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				C = s.n(v),
				y = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/isUrl/index.ts"),
				j = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				E = s("./src/reddit/components/FlairList/index.tsx"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/reddit/components/Flair/index.tsx"),
				N = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				T = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				M = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				A = s("./src/reddit/hooks/useClickSourceData.ts"),
				B = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				D = s("./src/reddit/hooks/useTheme.ts"),
				W = s("./src/reddit/icons/fonts/index.tsx"),
				U = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				z = s("./src/reddit/components/AuthorLink/index.tsx"),
				G = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				q = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				K = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				Y = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Q = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				X = s.n(Q);

			function Z(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, d = Object(a.e)(V.eb), c = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = c ? i.a.createElement("img", {
					alt: P.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: c
				}) : i.a.createElement(W.a, {
					name: "community",
					isFilled: !d,
					className: Object(O.a)(X.a.defaultCommunityIcon, s, d && X.a.mNightmode)
				}), i.a.createElement(F.default, {
					className: X.a.contents,
					"data-testid": H.a,
					onClick: r,
					to: {
						pathname: o.url,
						state: n
					}
				}, m)
			}

			function J(e) {
				const {
					post: t,
					onClickPostAuthor: s
				} = e, n = Object(B.a)(Y.e), r = t.crosspostRootId ? P.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : P.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return i.a.createElement("div", {
					className: X.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(W.a, {
					name: "crosspost",
					className: Object(O.a)(X.a.crosspostIcon, X.a.metaSpacer)
				}), i.a.createElement("span", {
					className: X.a.metaSpacer
				}, r), i.a.createElement(G.b, {
					postOrComment: t
				}, i.a.createElement(z.a, {
					author: t.author,
					className: X.a.metaSpacer,
					isAuthorDeleted: t.author === c.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": y.a.USER,
						"data-testid": Y.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: X.a.flairContainer
				}, i.a.createElement(S.b, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: X.a.timestamp,
					"data-testid": Y.c,
					"data-click-id": y.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, i.a.createElement(K.a, {
					seconds: t.createdAt / c.Xb
				})), i.a.createElement(M.a, null, i.a.createElement(T.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(q.a, {
					seconds: t.createdAt / c.Xb
				})))))
			}

			function $(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: r,
					post: o,
					subredditOrProfile: d
				} = e, c = Object(A.a)(), {
					isSubEnlarged: l
				} = Object(a.e)(U.a), m = Object(D.a)();
				return i.a.createElement("div", {
					className: Object(O.a)(t, X.a.metaContainer, X.a.metadataFont)
				}, !o.isSponsored && d && i.a.createElement(N.a, {
					className: Object(O.a)(X.a.hovercardContainer, X.a.hovercardContainer),
					postId: o.id,
					subredditName: d.name
				}, i.a.createElement(Z, {
					className: Object(O.a)(X.a.subredditIcon, l && X.a.enlargedSubredditIcon),
					"data-click-id": y.a.SUBREDDIT,
					clickSourceData: c,
					onClick: r,
					subredditOrProfile: d
				}), i.a.createElement(F.default, {
					className: Object(O.a)(X.a.subredditName, l && X.a.enlargedSubredditName),
					"data-testid": H.b,
					"data-click-id": y.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: d.url,
						state: c
					}
				}, d.displayText)), !o.isSponsored && !s && i.a.createElement(i.a.Fragment, null, i.a.createElement(R.b, null), i.a.createElement(L.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), i.a.createElement(R.b, null), i.a.createElement(J, {
					className: X.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: m
				}))
			}
			var ee = s("./src/reddit/components/SearchWarnings/index.tsx"),
				te = s("./src/reddit/components/SEOTitle/index.tsx"),
				se = s("./src/reddit/components/SEOTitle/constants.ts"),
				ne = s("./src/reddit/components/Thumbnail/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				oe = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/controls/OutboundLink/index.tsx"),
				de = s("./src/reddit/helpers/clickSourceData/index.ts"),
				ce = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/reddit/helpers/path/index.ts"),
				me = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ue = s("./src/reddit/hooks/usePageLayer.ts"),
				pe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				be = s("./src/reddit/selectors/searchResults.ts"),
				he = s("./src/telemetry/models/Outbound.ts"),
				ge = s("./src/reddit/components/SearchPost/index.m.less"),
				fe = s.n(ge);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = "post-title";

			function Ce(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, a = s ? se.a.PostComments : se.a.PostItem, d = Object(A.a)(), c = Object(j.a)(n.permalink, void 0, d), l = Object(D.a)(), m = Object(o.useMemo)(() => Object(oe.a)(r, e => i.a.createElement("span", {
					className: Object(O.a)(fe.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return i.a.createElement("div", {
					className: Object(O.a)(n.id, fe.a.postTitleColors),
					"data-adclicklocation": y.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${fe.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(f.c)(.45,Object(pe.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(f.c)(.45,Object(pe.a)({theme:l}).titleText,Object(pe.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(f.c)(.45,Object(pe.a)({theme:l}).bodyText,Object(pe.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: fe.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${b.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: fe.a.titleContainer
				}, i.a.createElement(x.a, {
					to: c
				}, i.a.createElement("div", {
					className: Object(O.a)(fe.a.inline, fe.a.titleTextColor, fe.a.titleMedium, fe.a.paddingRight),
					"data-testid": ve,
					style: {
						"--posttitletextcolor": Object(pe.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(te.b, {
					type: a
				}, m))), n.flair && i.a.createElement(E.a, {
					className: fe.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function ye(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(ne.a, {
						alt: e.post.title,
						className: Object(O.a)(fe.a.thumbnail, n && fe.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: fe.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(_.a)(o) && !e.post.media ? i.a.createElement(ae.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: he.SourceElement.PostImage
				}, a) : a)
			}
			var Oe = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				_e = s("./src/reddit/helpers/trackers/screenview.ts"),
				je = s("./src/reddit/selectors/platform.ts"),
				Ee = s("./src/reddit/selectors/tracking.ts"),
				ke = s("./src/telemetry/index.ts"),
				we = s("./src/telemetry/models/Timer.ts"),
				Ie = s("./node_modules/react-router-redux/es/index.js"),
				Pe = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Se = s("./src/reddit/components/PostList/index.tsx"),
				Ne = s("./src/reddit/components/PostTitle/index.tsx"),
				Te = s("./src/reddit/components/SearchPost/index.tsx"),
				Le = s("./src/reddit/connectors/PostList/index.ts"),
				Fe = s("./src/reddit/contexts/Visibility.tsx"),
				Re = s("./src/reddit/controls/Button/index.tsx"),
				Me = s("./src/reddit/controls/Button/index.m.less"),
				Ae = s.n(Me),
				Be = s("./src/reddit/hooks/useTracking.ts"),
				De = s("./src/reddit/selectors/comments.ts"),
				We = s("./src/reddit/selectors/commentSelector.ts"),
				Ue = s("./src/reddit/selectors/posts.ts");

			function Ve(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(I.b, {
					className: t
				}, i.a.createElement(I.d, {
					score: s.score
				}), i.a.createElement(I.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var He = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				ze = s.n(He);
			var Ge;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(Ge || (Ge = {}));
			var qe = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Ke = s("./src/lib/truncateText/index.ts"),
				Ye = s("./src/reddit/actions/post.ts"),
				Qe = s("./src/lib/prettyPrintNumber/index.ts"),
				Xe = s("./src/reddit/components/SubscribeButton/index.tsx"),
				Ze = s("./src/reddit/helpers/karma.ts");
			var Je = s("./src/reddit/constants/tracking.ts"),
				$e = s("./src/reddit/helpers/correlationIdTracker.ts"),
				et = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				tt = s("./src/reddit/selectors/telemetry.ts");
			var st = s("./src/reddit/components/SubredditIcon/index.tsx"),
				nt = s("./src/reddit/constants/posts.ts"),
				rt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ot = s("./src/reddit/selectors/subreddit.ts"),
				it = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				at = s.n(it);
			const dt = Object(d.c)({
					isBlockingInterstitialEnabled: rt.b,
					isBlockingInterstitialV2Enabled: rt.c,
					hideNSFWPref: V.G,
					subredditOrProfile: ot.Q,
					subredditOrProfileAboutInfo: ot.M,
					userIsSubscriber: ot.kb
				}),
				ct = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: d,
						sidebar: c
					} = e, l = Object(ie.gb)(), m = Object(Be.a)(), u = Object(A.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: g,
						subredditOrProfileAboutInfo: f
					} = Object(a.e)(t => dt(t, e)), {
						withCommunityDescription: x
					} = Object(a.e)(U.a), v = c && x, C = Object(a.d)(), y = Object(o.useCallback)(e => {
						g && n.type === nt.a.PROFILE && (p || b) && (e.preventDefault(), C(Object(Ye.cb)(g.url))), m(Object(me.r)(d, l, n, r))
					}, [m, d, l, r, n, p, b, C, g]);
					if (!g) return null;
					const _ = g.displayText,
						j = f.publicDescription,
						E = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(Ze.a)(e),
									n = Object(Qe.b)(s);
								return P.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [P.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? P.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [P.fbt._plural(s.subscribers, "number of subscribers", Object(Qe.b)(s.subscribers))], {
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
									const r = tt.H(n, void 0);
									return {
										source: me.c.SEARCH,
										action: Je.c.CLICK,
										noun: `${s}_${me.d[e.type]}`,
										actionInfo: Object(me.l)(n, void 0, r, void 0),
										correlationId: Object($e.c)($e.a.SearchResults),
										profile: "profile" === e.type ? tt.X(n, e.id) : void 0,
										search: tt.db(n, t, et.a.SERP),
										subreddit: "subreddit" === e.type ? tt.ob(n, e.id) : void 0
									}
								})(n, d, e ? "unsubscribe" : "subscribe")
							},
							priority: Re.c.Tertiary
						});
					return i.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(O.a)(at.a.link, c && at.a.sidebar, s ? at.a.mFirst : void 0, t),
						onClick: y,
						to: {
							pathname: g.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: at.a.container
					}, i.a.createElement(st.b, {
						className: Object(O.a)(at.a.subredditIcon, v && at.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: g
					}), i.a.createElement("div", {
						className: at.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(O.a)(at.a.subredditInfo, c && at.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(O.a)(at.a.title, c && at.a.sidebar)
					}, _), i.a.createElement(ee.a, {
						className: Object(O.a)(at.a.warnings, c && at.a.sidebar),
						isQuarantined: null == g ? void 0 : g.isQuarantined,
						isNSFW: null == g ? void 0 : g.isNSFW
					}), E && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: at.a.subtitle
					}, !c && i.a.createElement(R.b, null), E))), !c && i.a.createElement("p", {
						className: at.a.description
					}, Object(Ke.a)(j, 150, "..."))), i.a.createElement("div", {
						className: at.a.buttonContainer
					}, k)), v && n.type !== nt.a.PROFILE && i.a.createElement("p", {
						className: Object(O.a)(at.a.description, c && at.a.sidebar)
					}, Object(Ke.a)(j, 75, "...")))
				};
			var lt = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				mt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ut = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				pt = s.n(ut);
			const bt = 5,
				ht = Object(d.c)({
					apiError: be.b,
					apiPending: be.c,
					loadMore: be.t,
					viewportDataLoaded: Ee.a
				}),
				gt = Object(d.c)({
					apiError: be.e,
					apiPending: be.f,
					loadMore: be.u,
					viewportDataLoaded: Ee.a
				}),
				ft = Object(d.c)({
					apiError: be.h,
					apiPending: be.i,
					loadMore: be.v,
					viewportDataLoaded: Ee.a
				}),
				xt = Object(d.c)({
					apiError: be.y,
					apiPending: be.z,
					loadMore: be.w,
					viewportDataLoaded: Ee.a
				}),
				vt = {
					[c.hc.Comments]: {
						cacheName: "comment",
						Component: e => {
							let {
								identifier: t,
								listingKey: s,
								searchOptions: n
							} = e;
							const r = Object(ie.gb)(),
								o = Object(Be.a)(),
								d = Object(a.d)(),
								c = Object(a.e)(e => Object(We.b)(e, {
									commentId: t
								})),
								l = Object(a.e)(e => Object(De.m)(e, {
									commentId: t
								})),
								m = Object(a.e)(e => (null == c ? void 0 : c.postId) ? Object(Ue.G)(e, {
									postId: null == c ? void 0 : c.postId
								}) : void 0),
								u = Object(a.e)(e => (null == c ? void 0 : c.postId) && Object(Ue.F)(e, {
									postId: null == c ? void 0 : c.postId
								})),
								p = Object(a.e)(e => e.search.searchQuery),
								b = Object(A.a)();
							if (!(null == c ? void 0 : c.postId) || !u) return null;
							const h = Object(Le.b)(d),
								f = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a;
									return function() {
										o(Object(me.q)({
											comment: c,
											key: s,
											originElement: e,
											pageLayer: r,
											searchOptions: n
										})), t(...arguments)
									}
								},
								x = Object(Se.b)(c.postId, h),
								v = e => f(e);
							return i.a.createElement(Te.a, {
								crosspost: void 0,
								isActive: !1,
								isLoggedIn: !1,
								modModeEnabled: !1,
								moderatorPermissions: void 0,
								onClickPost: f(Ge.POST, null != x ? x : g.a),
								onClickPostAuthor: v(Ge.POST_AUTHOR),
								onClickPostCommunity: v(Ge.POST_COMMUNITY),
								onIgnoreReports: g.a,
								postId: c.postId,
								searchQuery: p,
								showEditFlair: !1,
								title: i.a.createElement(Fe.a, null, i.a.createElement("div", {
									className: ze.a.commentContainer,
									"data-testid": "search_comment_container"
								}, i.a.createElement("div", {
									className: ze.a.postTitleContainer,
									"data-testid": "search_comment_post_title_container",
									onClick: v(Ge.POST)
								}, m && i.a.createElement(Ne.c, {
									className: ze.a.postTitle,
									hideSourceLink: !0,
									post: m,
									redditStyle: !0,
									disableFlair: !0,
									size: Ne.b.Metadata
								})), i.a.createElement("div", {
									className: ze.a.commentContent,
									"data-testid": "search_comment",
									onClick: f(Ge.COMMENT, e => {
										e.stopPropagation(), d(Object(Ie.b)(Object(j.a)(l, !0, b)))
									})
								}, i.a.createElement(Pe.a, {
									clearHovered: g.a,
									commentId: t,
									commentsPageKey: "",
									flatlist: i.a.createElement(Ve, {
										className: ze.a.commentFlatlist,
										comment: c
									}),
									hasAwardGradient: !1,
									highlightTreatment: null,
									index: 0,
									isHighlighted: !1,
									isFirstInList: !0,
									isActive: !1,
									noFocus: !0,
									noSpacing: !0,
									onLineMouseOver: g.a,
									onCommentAuthorClick: e => (e.stopPropagation(), v(Ge.COMMENT_AUTHOR)(e)),
									onCommentTimestampClick: e => (e.stopPropagation(), v(Ge.COMMENT_TIMESTAMP)(e)),
									postId: c.postId,
									renderedInOverlay: !1,
									restrictHeight: !0,
									rtJSONRedditStyle: !0,
									scrollToAndRemeasure: g.a,
									showBlockingInterstitial: g.a,
									userIconSmall: !0,
									onClickRevealSpoilerText: () => {
										o(Object(me.t)(n, c, s, r))
									}
								})), i.a.createElement(Re.t, {
									kind: Re.b.InternalLink,
									priority: Re.c.PlainLink,
									className: Object(O.a)(ze.a.goToThreadLinkButton, Ae.a.PlainLinkButton),
									"data-testid": "go_to_thread_link",
									onClick: f(Ge.GO_TO_COMMENT_LINK, e => {
										e.stopPropagation()
									}),
									to: Object(j.a)(u, !0, b)
								}, P.fbt._("Go to thread", null, {
									hk: "npBX6"
								}))))
							})
						},
						moreResultsTypes: [c.ic.Comments],
						Placeholder: qe.a,
						selector: gt,
						telemetryComponentName: "commentSearchResults",
						telemetryViewEvent: mt.c
					},
					[c.hc.Subreddits]: {
						cacheName: "community",
						Component: ct,
						moreResultsTypes: [c.ic.Subreddits],
						Placeholder: lt.a,
						selector: ft,
						telemetryComponentName: "communitySearchResults",
						telemetryViewEvent: mt.d
					},
					[c.hc.Users]: {
						cacheName: "author",
						Component: ct,
						moreResultsTypes: [c.ic.Users],
						Placeholder: lt.a,
						selector: ht,
						telemetryComponentName: "authorSearchResults",
						telemetryViewEvent: mt.d
					},
					[c.hc.Posts]: {
						cacheName: "post",
						Component: e => {
							var t, s;
							const {
								first: n,
								listingKey: r,
								searchOptions: o
							} = e, d = Object(a.e)(t => Object(be.A)(t, e)), c = Object(a.e)(e => {
								if (d.crosspostRootId) return Object(be.A)(e, {
									identifier: d.crosspostRootId
								})
							}), l = Object(a.e)(e => Object(V.kb)(e)), m = Object(ue.a)(), u = Object(a.d)(), p = Object(re.b)(), b = function(e) {
								var t;
								const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
									n = C.a.parse(s),
									r = n.path || "",
									o = r.length > 7 ? r.substring(0, 7) + "..." : r;
								return (n.hostname ? n.hostname.replace("www.", "") : "") + o
							}(d), h = Object(ie.cb)(m), f = c ? c.thumbnail.url : d.thumbnail.url, x = f && Object(_.a)(f), v = Object(D.a)(), j = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a;
								return function() {
									p(Object(me.s)(d.id, o, m, e || null, r)), t(...arguments)
								}
							}, E = e => j(e), P = {
								isOptimizedSerp: !0,
								post: d,
								subredditOrProfile: d.subreddit || d.profile,
								onClickPostAuthor: e => (e.stopPropagation(), E(me.e.POST_AUTHOR)(e)),
								onClickPostCommunity: e => (e.stopPropagation(), E(me.e.POST_COMMUNITY)(e))
							};
							return i.a.createElement("div", {
								className: Object(O.a)(fe.a.postContainer, n && fe.a.mFirst),
								"data-adclicklocation": y.a.BACKGROUND,
								"data-click-id": y.a.BACKGROUND,
								"data-testid": w.a,
								id: d.id,
								onClick: j(me.e.POST, e => {
									e.stopPropagation(), l ? window.open(d.permalink) : u(Object(ce.a)({
										pathname: Object(le.b)(d.permalink),
										state: Object(de.b)(m)
									}))
								}),
								tabIndex: -1
							}, i.a.createElement(k.a, {
								"data-click-id": y.a.BACKGROUND,
								redditStyle: !0
							}, i.a.createElement("div", {
								className: fe.a.postContent,
								"data-click-id": y.a.BODY
							}, i.a.createElement($, xe({
								className: Object(O.a)(fe.a.paddingSide, fe.a.postItemMetaContainer),
								key: "PostMeta"
							}, P)), i.a.createElement(ee.a, {
								className: Object(O.a)(fe.a.paddingSide, fe.a.postItemWarningContainer),
								isQuarantined: (null === (t = d.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = d.profile) || void 0 === s ? void 0 : s.isQuarantined),
								isNSFW: d.isNSFW,
								isSpoiler: d.isSpoiler
							}), i.a.createElement("div", {
								className: Object(O.a)(fe.a.paddingSide, fe.a.postItemTitleContainer)
							}, i.a.createElement("div", {
								className: fe.a.postContent
							}, i.a.createElement(Ce, {
								searchQuery: h,
								post: d
							}), d.source && !d.crosspostRootId && i.a.createElement(ae.b, {
								className: fe.a.outboundLink,
								href: d.source.url,
								isSponsored: d.isSponsored,
								postId: d.id,
								source: d.source
							}, b)), x && i.a.createElement("div", {
								className: fe.a.thumbnailContainer
							}, i.a.createElement(ye, {
								makeSendClickEventFn: e => (e.stopPropagation(), E(me.e.POST)(e)),
								post: d,
								theme: v
							}))), i.a.createElement(I.c, {
								className: Object(O.a)(fe.a.paddingSide, fe.a.postItemFlatlistContainer),
								post: d
							}))))
						},
						moreResultsTypes: [c.ic.Posts],
						Placeholder: Oe.a,
						selector: xt,
						telemetryComponentName: "postList",
						telemetryViewEvent: mt.e
					}
				};
			const Ct = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const d = new m.a(250),
					b = Object(o.useRef)(),
					h = Object(o.useRef)(null),
					g = Object(o.useRef)(!1),
					f = Object(ie.gb)(),
					x = Object(re.b)(),
					v = Object(a.d)(),
					{
						identifiers: C,
						listingKey: y,
						searchOptions: O,
						componentType: _,
						sidebar: j
					} = e,
					{
						cacheName: E,
						Component: k,
						moreResultsTypes: w,
						Placeholder: I,
						selector: P,
						telemetryComponentName: S,
						telemetryViewEvent: N
					} = vt[_],
					{
						apiError: T,
						apiPending: L,
						loadMore: F,
						viewportDataLoaded: R
					} = Object(a.e)(t => P(t, e)),
					M = Object(a.e)(e => Object(je.j)(e)),
					A = j ? bt : C.length,
					B = j ? bt : 10,
					D = Object(l.a)(M),
					W = () => {
						const e = ke.c.has(y) ? ke.c.end(y) : 0;
						x(Object(_e.v)(y, O, we.TimerType.InApp, e, f)), g.current = !0
					},
					U = () => {
						q() && W()
					},
					V = () => {
						const e = b.current && Array.from(b.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					U(), h.current && Object(ke.b)(c.o.Redesign, {
						type: "mount",
						component: S,
						duration: ke.c.end(h.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (U(), h.current && ke.c.has(h.current)) {
						const e = ke.c.end(h.current);
						if (e < 10) return;
						Object(ke.b)(c.o.Redesign, {
							duration: e,
							type: "mount",
							component: S
						})
					}
				});
				const H = Object(l.a)(y),
					z = Object(l.a)(C.length);
				Object(o.useEffect)(() => {
					h.current && ke.c.cancel(h.current), C.length && (h.current = ke.c.start()), (y !== H || !V() && C.length !== z) && (t.current = !1)
				}, [h, y, C.length, H, z, t]), Object(o.useEffect)(() => () => {
					h.current && ke.c.cancel(h.current), b.current = void 0, t.current = !1
				}), Object(o.useEffect)(() => {
					D && !M && (!ke.c.has(y) && g.current || W())
				}, [M, D]);
				const G = () => {
						t.current = !0, U()
					},
					q = () => {
						const e = V();
						return (ke.c.has(y) || !g.current) && (T || !n && (s || t && (e || R)))
					},
					K = e => {
						b.current = e instanceof Element ? e : void 0
					},
					Y = () => {
						const e = C.slice(0, A).map((e, t) => ((e, t) => {
							let s;
							s = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const n = `${E}-search-${t}-${y}`,
								r = Object(mt.b)(s, y, () => N(x, O, e, y, f));
							let o;
							if (void 0 === (o = d.get(n))) {
								const n = `${E}-search-item-[id:${s}]`;
								o = {
									estHeight: 32,
									trackOnEnteredViewport: r,
									id: s,
									render: () => i.a.createElement(k, {
										className: pt.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: y,
										searchOptions: O,
										sidebar: j
									})
								}
							}
							return d.set(n, o), o
						})(e, t));
						return i.a.createElement(p.b, {
							key: y,
							innerRef: K,
							loadMoreToken: F && F.token ? F.token : void 0,
							onLastVisibleChildRendered: G,
							onLoadMore: () => {
								v(Object(u.n)(w))
							}
						}, e)
					};
				return (() => C.length > 0)() ? (s = !1, n = !1, Y()) : (() => Boolean(T) || !1 === L)() ? (s = !0, n = !1, Y()) : (s = !1, n = !0, (() => {
					const e = !T;
					return i.a.createElement("div", {
						"data-testid": `${_}-list-placeholder`
					}, r()(B, t => i.a.createElement(I, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})())
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
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
				d = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = a.get(n);
					return void 0 === r && (r = s, a.set(n, r)), r
				}),
				c = (e, t, s, n, i) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: i,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, a) => e(e => {
					const d = Object(i.b)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: a,
						comment: d,
						key: n
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
				d = s("./src/reddit/components/SearchWarnings/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: d
				} = e;
				return s || n || d ? r.a.createElement("div", {
					className: t
				}, s ? r.a.createElement("span", {
					className: Object(o.a)(c.a.warningText, c.a.quarantineWarning)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.warningIcon, c.a.quarantineIcon)
				}), l._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(c.a.warningText, c.a.nsfwWarning)
				}, r.a.createElement(i.a, {
					name: "nsfw_fill",
					className: Object(o.a)(c.a.warningIcon)
				}), l._("nsfw", null, {
					hk: "2IetSA"
				})) : null, d ? r.a.createElement("span", {
					className: Object(o.a)(c.a.warningText, c.a.spoilerWarning)
				}, r.a.createElement(i.a, {
					name: "spoiler_fill",
					className: Object(o.a)(c.a.warningIcon)
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
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
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
				C = s("./src/lib/lessComponent.tsx");
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
				O = Object(c.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(s, r, n)]
					}
				}),
				_ = Object(d.b)(O),
				j = C.a.wrapped(b.a, "ThemedWidget", v.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
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
				w = Object(p.c)(class extends a.a.Component {
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

			function I(e) {
				let {
					className: t,
					post: s,
					placementIndex: n,
					refreshKey: r,
					listingName: o,
					placement: i,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: m
				} = e;
				const p = m ? a.a.Fragment : u.a;
				if (!c && E(s)) {
					let e = null;
					return l ? e = a.a.createElement(w, {
						className: t,
						redditStyle: d,
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
			t.a = _(I)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(o.b)((e, t) => {
				let {
					postId: s
				} = t;
				return {
					canShowAd: Object(i.a)(e, {
						postId: s
					}) && !Object(d.F)(e) && !Object(a.a)(e)
				}
			})(e => {
				let {
					canShowAd: t,
					postId: s,
					commentsPageKey: n,
					...o
				} = e;
				return t ? r.a.createElement(c.a, o) : null
			})
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
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				C = s("./src/reddit/components/SidebarFooter/index.m.less"),
				y = s.n(C);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.a("Link", y.a), j = Object(i.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), E = Object(o.b)(j), k = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), w = e => {
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
				}, O._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, O._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, O._("help", null, {
					hk: "4lyYaD"
				})), t === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, O._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, O._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, O._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, O._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, O._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, O._("Reddit Inc © {year}. All rights reserved", [O._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(E(Object(c.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.dd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.dd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.dd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(w, {
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
				}, O._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, O._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, O._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, O._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, O._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, O._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, O._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, O._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: y.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, O._("Reddit Inc © {year}. All rights reserved", [O._param("year", (new Date).getFullYear().toString())], {
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
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/BackToTop/index.tsx"),
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
			const f = d.g[1] + 24,
				x = m.f + 8,
				v = x + 152 + 16,
				C = v + f + 8,
				y = h.a.div("Container", b.a),
				O = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(c.a, g({
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
						shouldAdSticky: this.windowHeight > C,
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
							hideFooter: o,
							pageLayer: i,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, d, !o && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(O, {
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
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
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
			const C = (e, t, s) => Object(p.a)(e, {
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
						className: C(x.a.subNavTitle, s, n)
					}, o), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				O = e => {
					let {
						className: t,
						href: s,
						isActive: n,
						to: o,
						isTopBannerVariant: i,
						...a
					} = e;
					const d = C(x.a.navLink, n, i);
					return o ? r.a.createElement(u.a, v({
						className: d,
						to: o
					}, a)) : s ? r.a.createElement(b.b, v({
						className: d,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, a)) : r.a.createElement("a", v({
						className: d
					}, a))
				},
				_ = e => {
					let {
						className: t,
						isActive: s,
						...n
					} = e;
					return r.a.createElement(u.a, v({
						className: Object(p.a)(C(x.a.navLink, s), t)
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
						className: C(x.a.subNavLink, n),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, o)) : r.a.createElement("a", v({
						className: C(x.a.subNavLink, n)
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
			class w extends r.a.Component {
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
			var I = w;
			const P = e => {
				const t = e.url && Object(m.h)(m.f, e.url);
				return t ? t.url : e.url
			};
			var S = e => e.menuItem.url ? r.a.createElement(O, {
					href: P(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(I, {
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
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(i.c)({
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
			var M = Object(o.b)(R, (e, t) => ({
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
							Object(d.J)(o) && !Object(d.R)(o) && e.preventDefault(), n()
						}
					}, F._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				A = s("./src/reddit/actions/economics/predictions/index.ts"),
				B = s("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
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
					d = Object(D.S)(i),
					[c, l] = Object(n.useState)(!1),
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
				Object(B.a)(t);
				return Object(n.useEffect)(() => {
					!u || c || p || d || (s(Object(A.m)(m.name)), l(!0))
				}, [u, c, p, d, s, m.name]), u && p ? r.a.createElement(_, {
					className: x.a.predictionsFilter,
					isActive: d,
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
			var G = s("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const K = Object(d.v)(),
				Y = [G.Sb.SUBREDDIT, G.Sb.COMMENTS, G.Sb.COLLECTION_COMMENTS],
				Q = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Y.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.R)(t.pageLayer)
				});
			var X = K(Object(o.b)(Q, (e, t) => ({
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
					} = e, d = n && !s && !o;
					return r.a.createElement(O, {
						to: t,
						isActive: d,
						isTopBannerVariant: i,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, q._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Z = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				J = s("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(J.a)({
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
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, o = !!n && !!n.meta && n.meta.name === G.Sb.SUBREDDIT_WIKI, i = `wiki/${ie.i}`, a = t.endsWith("/") ? t + i : `${t}/${i}`;
				return r.a.createElement(O, {
					isActive: o,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", M),
				me = Object(d.v)(),
				ue = Object(i.c)({
					layout: d.U,
					widget: l.f
				}),
				pe = Object(o.b)(ue);
			t.a = me(pe(Object(a.c)(e => r.a.createElement(oe, {
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
			}), r.a.createElement(z, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(S, {
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
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/helpers.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/Footer/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = s("./src/reddit/selectors/telemetry.ts");
			const C = "nsfw_dialog";
			var y = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				O = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				_ = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				j = s.n(_);
			const E = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				k = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(O.g),
						m = Object(o.useCallback)(() => {
							n === O.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? i.a.createElement("div", {
							className: j.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: j.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === O.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.c)(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(j.a.mainCta)
					}, i.a.createElement(y, null), b, i.a.createElement("div", {
						className: j.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: j.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: j.a.buttonContainer
					}, i.a.createElement(f.j, {
						className: Object(l.a)(j.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(v.o)(e),
								source: "xpromo",
								action: "click",
								noun: C,
								actionInfo: {
									...Object(v.d)(e)
								}
							}))()), m(), Object(x.b)(x.a.Login), t(Object(u.openLoginModal)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(f.j, {
						className: j.a.cancel,
						onClick: () => {
							Object(c.b)(), s((() => e => ({
								...Object(v.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: C,
								actionInfo: {
									...Object(v.d)(e)
								}
							}))()), Object(x.b)(x.a.Dismiss), t(Object(d.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				w = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: j.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: j.a.qrCodeInner
					}, i.a.createElement("img", {
						className: j.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: j.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: j.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: j.a.sneakySnoo,
						src: t
					})))
				}),
				I = e => {
					const t = Object(h.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(v.o)(e),
							source: "xpromo",
							action: "view",
							noun: C,
							actionInfo: {
								...Object(v.d)(e)
							}
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(a.e)(O.h), r = Object(a.e)(O.i), o = Object(a.e)(O.g), d = o === O.a.Blurred ? b.a.White : o === O.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: j.a.container
					}, i.a.createElement(k, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(j.a.footerWrapper, {
							[j.a.mIsModal]: o === O.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: d
					})), i.a.createElement(w, {
						qrCodeAsset: (() => n === g.ad.Enabled || r === g.nb.BlurredPreview || r === g.nb.NoPreview ? E.d2x_nsfw_signup_blocking_de_v1 : E.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
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
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				u = i.a.div("RuleTitle", c.a);
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
				d = s.n(a);
			const c = o.a.div("WidgetBackground", d.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return r.a.createElement("div", s, r.a.createElement(i.b, {
						type: i.a.Widget
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
				return k
			})), s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
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
				C = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
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
					className: Object(c.a)(j.a.Container, e.className),
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
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(I, E({
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
				w = Object(d.c)({
					hideNSFWPref: y.G,
					nightmode: y.eb
				}),
				I = Object(i.b)(w)(e => o.a.createElement("div", {
					className: Object(c.a)(j.a.communityItemContainer, {
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
					className: Object(c.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: j.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), o.a.createElement("div", {
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
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(f.a, {
					className: Object(c.a)(j.a.communityCta, j.a.smallLoadingIcon),
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
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
				C = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				_ = s.n(O);

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
				w = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				I = Object(i.b)(w),
				P = l.a.div("WidgetContent", _.a),
				S = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(d.a)(_.a.StyledFlair, t === C.g.Cloud && _.a.cloudDisplay, {
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
					c.a.read(() => {
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
					}, e.map(e => o.a.createElement(S, {
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
					return o.a.createElement("ul", null, o.a.createElement(S, {
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
			t.a = k(I(Object(u.c)(N)))
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
				return c
			}));
			var n = s("./node_modules/classnames/index.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less"),
				d = s.n(a);
			class c extends i.a.Component {
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
						className: r()(this.props.className, d.a.recommendationSidebar, {
							[d.a.isSticky]: this.state.isSticky
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
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
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
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./node_modules/lodash/once.js"),
				O = s.n(y),
				_ = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/lib/timeAgo/index.ts"),
				I = s("./src/lib/truncateText/index.ts"),
				P = s("./src/reddit/components/Flair/index.tsx"),
				S = s("./src/reddit/components/SubredditIcon/index.tsx"),
				N = s("./src/reddit/constants/thumbnails.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				L = s("./src/reddit/helpers/trackers/post.ts"),
				F = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				R = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				M = s("./src/reddit/models/Flair/index.ts"),
				A = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				B = s("./src/reddit/actions/linkedPosts/index.ts"),
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
					}, this.onConsume = O()(t), this.onView = O()(e), this.observer = new IntersectionObserver(this.handleIntersectionEvent, {
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
					r = Object(d.useRef)(null),
					o = Object(d.useRef)(null),
					i = Object(l.e)(e => e.subreddits.models[s.belongsTo.id]),
					a = Object(l.e)(A.a) === D.dd.LargeImagePreview;
				Object(d.useEffect)(() => {
					var e;
					null === (e = o.current) || void 0 === e || e.disconnect(), o.current = new H(() => {
						n(Object(L.g)(s.id))
					}, () => {
						n(Object(L.d)(s.id, V, !0))
					}), o.current.connect(r.current)
				}, [s, n]);
				const m = Object(d.useCallback)(() => {
						const e = Object(u.a)(s.id);
						t(Object(B.c)({
							key: e
						})), window.scroll(0, 0), n(Object(L.f)(s.id))
					}, [s, n, t]),
					p = Object(d.useCallback)(() => {
						n(f)
					}, [n]),
					b = Object(d.useCallback)(() => {
						n(x)
					}, [n]),
					{
						created: h,
						numComments: g,
						thumbnail: v,
						upvoteRatio: C,
						permalink: y,
						title: O
					} = s,
					W = C ? `${Math.round(100*C)}%` : "",
					z = s.flair.length ? s.flair.findIndex(e => e.type === M.f.Nsfw) : -1;
				return c.a.createElement("li", {
					className: U.a.postPreview,
					ref: r,
					onClick: m
				}, c.a.createElement(_.a, {
					to: Object(T.b)(y)
				}, a ? (() => c.a.createElement("div", {
					className: U.a.verticalPostPreviewContainer
				}, c.a.createElement("div", {
					className: U.a.verticalPostPreviewHeader
				}, c.a.createElement("div", {
					className: U.a.subredditTitle
				}, c.a.createElement(S.b, {
					className: U.a.subredditIcon,
					subredditOrProfile: i
				}), c.a.createElement("span", {
					className: U.a.subredditName
				}, i && `r/${i.name}`), z >= 0 && c.a.createElement(P.b, {
					flair: s.flair[z]
				}))), v && Object(E.a)(v.url) && c.a.createElement("div", {
					className: U.a.verticalPostPreviewThumbnail
				}, c.a.createElement("img", {
					className: U.a.thumbnail,
					src: v.url
				})), c.a.createElement("div", {
					className: Object(j.a)(U.a.postTitle, {
						[U.a.shortTitle]: v.url !== N.a.DEFAULT
					})
				}, Object(I.a)(O, 60, "..."))))() : (() => c.a.createElement(c.a.Fragment, null, v && Object(E.a)(v.url) && c.a.createElement("img", {
					className: U.a.thumbnail,
					src: v.url
				}), c.a.createElement("div", {
					className: U.a.subredditTitle
				}, c.a.createElement(S.b, {
					className: U.a.subredditIcon,
					subredditOrProfile: i
				}), c.a.createElement("span", {
					className: U.a.subredditName
				}, i && `r/${i.name}`), z >= 0 && c.a.createElement(P.b, {
					flair: s.flair[z]
				})), c.a.createElement("div", {
					className: Object(j.a)(U.a.postTitle, {
						[U.a.shortTitle]: v.url !== N.a.DEFAULT
					})
				}, Object(I.a)(O, 60, "..."))))(), c.a.createElement("div", {
					className: U.a.metaContainer
				}, c.a.createElement("div", {
					className: U.a.metaSection,
					onClick: p
				}, c.a.createElement(R.a, {
					className: U.a.icon
				}), c.a.createElement("span", null, W)), c.a.createElement("div", {
					className: U.a.metaSection,
					onClick: b
				}, c.a.createElement(F.a, {
					className: U.a.icon
				}), c.a.createElement("span", {
					className: U.a.meta
				}, Object(k.b)(g))), c.a.createElement("span", {
					className: U.a.dotSpacer
				}), c.a.createElement("div", {
					className: U.a.metaSection
				}, c.a.createElement("span", null, Object(w.a)(h / 1e3, !0))))))
			});
			var G = e => c.a.createElement("div", {
				className: Object(j.a)(U.a.placeholderWrapper)
			}, c.a.createElement("div", {
				className: U.a.header
			}, c.a.createElement("span", {
				className: U.a.subredditIconLoading
			}), c.a.createElement("span", {
				className: U.a.subredditNameLoading
			})), c.a.createElement("div", {
				className: U.a.postTitleLoading
			}), c.a.createElement("div", {
				className: U.a.postMetaSectionLoading
			}));
			const q = () => n.fbt._("Similar to this post", null, {
					hk: "XKYGj"
				}),
				K = [];
			for (let J = 0; J < 15; J++) K.push(c.a.createElement(G, {
				key: J
			}));
			const Y = (e, t) => {
					const {
						post: s
					} = t;
					return Object(u.a)(s.id)
				},
				Q = Object(m.a)((e, t) => {
					const s = Y(0, t);
					return Object(C.z)(e, {
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

			function X(e, t) {
				const s = ["posts", "isPending"];
				return o()(a()(e, s), a()(t, s))
			}
			const Z = c.a.memo((function(e) {
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
					}), X);
				if (Object(d.useEffect)(() => {
						n(g)
					}, [n]), !r.length && !o) return null;
				const i = (null == r ? void 0 : r.length) && r.map((e, t) => c.a.createElement(z, {
					post: e,
					key: t
				}));
				return c.a.createElement(b.a, {
					title: q()
				}, c.a.createElement("ul", null, o ? K : i))
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
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/helpers/trackers/widgets.ts"),
				l = s("./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less"),
				m = s.n(l);
			const u = `${a.a.assetPath}/img/widgets/rereddit-promo/`;
			var p = e => {
					let {
						url: t,
						postId: s
					} = e;
					const o = Object(d.b)(),
						i = Object(n.useCallback)(() => {
							o(Object(c.a)(s))
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
			var C = e => {
					let {
						buttonText: t,
						children: s,
						postId: o,
						renderAsPlainLink: i,
						url: l
					} = e;
					const m = Object(d.b)(),
						u = Object(n.useCallback)(() => {
							m(Object(c.a)(o, t))
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
				O = s("./src/reddit/helpers/ordinal/index.ts"),
				_ = s("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				j = s.n(_);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], w = o.a.div("ButtonContainer", j.a), I = e => {
				let {
					directoryTimestamp: t,
					postId: s,
					renderAsPlainLink: n
				} = e;
				const o = new Date(t),
					i = k[o.getMonth()],
					a = o.getFullYear(),
					d = o.getDate(),
					c = Object(O.a)(d),
					l = `${a}/${i}-${d}-1/`,
					m = `${a}/${i}/`,
					u = `${a}/`;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(C, {
					key: "ymd",
					buttonText: `top_posts_${i}_${c}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: l
				}, E._("Top posts {date}", [E._param("date", `${i} ${c} ${a}`)], {
					hk: "4xgYoo"
				})), r.a.createElement(C, {
					key: "ym",
					buttonText: `top_posts_of_${i}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: m
				}, E._("Top posts of {date}", [E._param("date", `${i}, ${a}`)], {
					hk: "HQnvs"
				})), r.a.createElement(C, {
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
				}), r.a.createElement(w, null, r.a.createElement(I, {
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
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/helpers/dom/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = s("./src/reddit/models/Widgets/index.ts"),
				h = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = s.n(h);
			const f = d.a.div("RuleShortName", g.a),
				x = d.a.div("RuleIndex", g.a),
				v = d.a.div("RuleTitle", g.a),
				C = d.a.div("RuleDescription", g.a),
				y = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				O = {};
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
					}))), t.isVisible && o.a.createElement(C, {
						className: Object(a.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? o.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: O
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
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
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
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = C(e);
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(m.v)(), I = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.eb)(e);
					return n || r
				},
				nigtmode: f.eb,
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
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
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? E.a.widgetContentOnly : E.a.widgetContent, g = !n && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: n,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
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
					}, r.a.createElement(c.b, {
						type: c.a.Widget
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
			t.a = w(I(Object(d.a)(Object(l.c)(P))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ae
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
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
				C = s("./src/telemetry/models/Outbound.ts"),
				y = s("./src/reddit/components/Widgets/Button/index.m.less"),
				O = s.n(y);
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
				j = e => e.kind === f.k.Image ? O.a.imageButton : O.a.textButton,
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
					return r.a.createElement(c.t, {
						className: j(t),
						style: _(t, s, n),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === f.k.Text && r.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.k.Text && r.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				w = e => r.a.createElement(l.b, {
					href: E(e.button),
					sourceElement: C.SourceElement.SidebarWidget
				}, r.a.createElement(k, e)),
				I = u.a.wrapped(a.a, "RawHTMLDisplay", O.a);
			var P = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: v.eb
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(I, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== f.k.Image || e.hoverState.url !== h.c)).map(t => r.a.createElement(w, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/reddit/components/HumanDate/index.tsx"),
				T = s("./src/reddit/controls/TextButton/index.tsx"),
				L = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				F = s.n(L);
			const R = 100,
				M = {
					isExpanded: !1
				},
				A = u.a.wrapped(a.a, "RawHTMLDisplay", F.a),
				B = u.a.div("EventContainer", F.a),
				D = u.a.div("EventTitle", F.a),
				W = u.a.div("EventDate", F.a),
				U = u.a.div("EventLocation", F.a),
				V = u.a.div("EventDescription", F.a),
				H = u.a.wrapped(T.a, "ToggleDescription", F.a);
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
					return e.text.length > R ? r.a.createElement(V, null, t.isExpanded ? e.text : e.text.slice(0, R), r.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(V, null, e.text)
				}
			}
			var G = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(B, {
					key: `${s}-${t.title}`
				}, r.a.createElement(D, null, t.titleHtml ? r.a.createElement(A, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(W, null, r.a.createElement(N.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${s}:0${n}` : `${s}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(U, null, t.locationHtml ? r.a.createElement(A, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(z, {
					text: t.description
				})))),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Y = Object(q.c)(e => r.a.createElement(K.b, {
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
				X = Object(o.b)(Q),
				Z = (e, t, s) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${s}</body>`;
			class J extends r.a.Component {
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
			var $ = X(J),
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
							alt: S.fbt._("Widget image", null, {
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
				de = s("./src/config.ts"),
				ce = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				Ce = u.a.div("Username", fe.a),
				ye = u.a.wrapped(me.b, "FlairComponent", fe.a),
				Oe = e => e.authorFlairType === be.f.Richtext ? {
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
				_e = e => r.a.createElement(Ce, null, `u/${e}`),
				je = u.a.wrapped(ue.default, "InternalLink", fe.a),
				Ee = u.a.div("LinkContainer", fe.a),
				ke = Object(i.c)({
					userIsBanned: he.ib,
					userIsLoggedIn: v.R
				});
			var we = Object(o.b)(ke)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n,
						userIsLoggedIn: o
					} = e;
					return r.a.createElement(d.a, {
						styles: s.styles,
						title: S.fbt._("Moderators", null, {
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
					}), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(ve, {
						key: e.name
					}, (e => r.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, _e(e.name)))(e), r.a.createElement(ye, {
						flair: Oe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Ee, null, r.a.createElement(je, {
						to: `/r/${t}/about/moderators/`
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !o ? r.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(xe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(xe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ie = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Pe = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Se = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ne = s.n(Se);
			const Te = u.a.div("WidgetContent", Ne.a),
				Le = u.a.wrapped(a.a, "RawHTMLDisplay", Ne.a);
			var Fe = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Te, null, r.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				Re = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => r.a.createElement(Re.b, null, "This widget hasn't been implemented yet!");

			function Ae(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Fe;
						case "button":
							return P;
						case "subreddit-rules":
							return Pe.b;
						case "community-list":
							return Y;
						case "calendar":
							return G;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return Ie.a;
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
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return w
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
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
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function _() {
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
			const j = _(),
				E = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: v.g,
					postsById: C.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(C.D)(e, s, n, r)
					}),
					subredditsById: y.fb,
					viewportDataLoaded: O.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.e
				},
				k = Object(r.c)(E),
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
						e(c.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(c.N(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(c.O(t, n, r))
					},
					showModalOnScroll: () => e(c.bb()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				I = e => Object(b.b)({
					...e
				}),
				P = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", r, o, i, void 0)
				},
				S = Object(n.b)(k, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: P
				}));
			t.a = e => Object(u.c)(j(S(e)))
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
							const d = new RegExp(`(\\b${n}\\b)`, "gi"),
								c = e.title.split(d);
							a = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(r, a)
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
				return d
			})), s.d(t, "i", (function() {
				return c
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
				d = .2,
				c = .1,
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

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
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
						...c,
						...t
					};
					return a.a.createElement(n.a, d({}, r, {
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
		"./src/reddit/endpoints/eligibleUXExperiences/eligibleUxExperiences.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s("./src/reddit/hooks/useGqlContext.ts"),
				i = s("./src/redditGQL/operations/FetchEligibleUXExperiences.json"),
				a = s("./src/redditGQL/operations/StoreUxTargetingAction.json");
			const d = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						experienceInputs: t
					}
				}),
				c = (e, t) => Object(n.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				l = (e, t, s) => {
					const n = Object(o.a)();
					return Object(r.useCallback)(() => c(n(), {
						action: t,
						eligibleExperience: e,
						source: s
					}), [n, e, t, s])
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: r
					} of t) s.push(Object(n.f)(r));
				return s
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: c,
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
									if (n && n.type === d.a.Post && n.postInfo) {
										const e = Object(o.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
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
						c({
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
				} else c({
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
				return d
			})), s.d(t, "o", (function() {
				return c
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
				return C
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "p", (function() {
				return O
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
				d = e => {
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
				c = e => {
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
							d = s === n.a.Tokens ? i : void 0;
						return {
							...Object(r.o)(e),
							source: o,
							action: "close",
							noun: "prediction_modal",
							poll: Object(r.J)(e, t, !1, a, d)
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
				C = () => e => ({
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
				O = () => e => ({
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
				return d
			})), s.d(t, "c", (function() {
				return c
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
				d = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
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
				return c
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
				return C
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "l", (function() {
				return O
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
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...o(t)
				}),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				u = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				C = d("ban_wiki_contributor"),
				y = d("unban_wiki_contributor"),
				O = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
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
				return d
			})), s.d(t, "d", (function() {
				return c
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
				d = (e, t) => s => ({
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
				c = () => e => ({
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
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(d.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
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
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
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
			const d = e => r.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(o.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => r.a.createElement("div", {
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
					return r.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, r.a.createElement(c, {
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
				d = s.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
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
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/get.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
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
				C = s("./node_modules/reselect/es/index.js");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(c.b)(() => Object(C.c)({
				primaryPostId: v.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(p.a, {
					postId: t
				}, d.a.createElement(f.CommentsPage, y({}, e, {
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
						partialCommentId: c,
						partialPostId: p,
						subredditName: f,
						collectionId: x
					} = a,
					v = p ? Object(g.y)(p) : void 0,
					C = c && Object(h.h)(c),
					y = r()([...Object(l.a)(e.location.search)]),
					_ = {};
				e.hasSortParam && (_.sort = e.sort, _.hasSortParam = !0);
				const j = Object(m.a)(x, v, C, _);
				return d.a.createElement(O, {
					closeLocation: n,
					collectionId: x,
					commentId: C,
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
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				c = s("./src/reddit/components/ExpandedCrossposts/async.tsx"),
				l = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				b = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				f = s("./src/reddit/selectors/comments.ts"),
				x = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				v = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				C = s.n(v);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: x.a,
				headComment: f.x,
				post: f.J
			}), _ = e => {
				var t;
				const s = Object(g.a)(),
					{
						isSubredditDiscoveryCrosspostEnabled: n,
						headComment: i,
						post: f
					} = Object(o.e)(t => O(t, e)),
					x = Object(m.b)(),
					{
						commentId: v,
						isOverlay: _,
						postId: j
					} = e;
				if (!f) return null;
				const E = null !== (t = f.numDuplicates) && void 0 !== t ? t : 0,
					k = void 0 !== v,
					w = f.permalink,
					I = E > 0,
					P = Object(u.b)(Object(d.e)(w));
				return k || I ? r.a.createElement("div", {
					className: C.a.CommentsNavigationPane
				}, k && r.a.createElement("div", null, r.a.createElement(l.a, {
					className: C.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: _,
					to: Object(u.b)(w),
					onClick: () => x(Object(h.l)(j, i, s))
				}, y._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && r.a.createElement(l.a, {
					className: C.a.linkOrOverlay,
					isOverlay: _,
					to: Object(u.b)(i.permalink + "?context=8&depth=9")
				}, y._("Show parent comments", null, {
					hk: "AVRCa"
				}))), I && r.a.createElement(r.a.Fragment, null, n && r.a.createElement(c.a, {
					postId: j
				}), r.a.createElement(l.a, {
					className: Object(a.a)(C.a.OtherDiscussionsLink, {
						[C.a.discoveryExperimentLink]: n
					}),
					isOverlay: _,
					onClick: () => x(n ? Object(p.b)() : Object(b.a)(j)),
					to: P
				}, n ? r.a.createElement(r.a.Fragment, null, y._("View all", null, {
					hk: "30twDK"
				}), ` (${E})`) : y._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [y._plural(E, "other discussion communities count")], {
					hk: "3oofZ8"
				})))) : null
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
				return Ut
			})), s.d(t, "_CommentsPage", (function() {
				return Kt
			})), s.d(t, "CommentsPage", (function() {
				return Yt
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(r),
				i = s("./src/lib/extractQueryParams/index.ts"),
				a = s("./node_modules/lodash/fromPairs.js"),
				d = s.n(a),
				c = s("./node_modules/lodash/get.js"),
				l = s.n(c),
				m = s("./node_modules/lodash/pick.js"),
				u = s.n(m),
				p = s("./node_modules/lodash/throttle.js"),
				b = s.n(p),
				h = s("./node_modules/react/index.js"),
				g = s.n(h),
				f = s("./node_modules/react-redux/es/index.js"),
				x = s("./node_modules/react-router-redux/es/index.js"),
				v = s("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				C = s("./src/redditGQL/types.ts"),
				y = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				_ = s("./src/telemetry/index.ts"),
				j = s("./src/telemetry/models/Timer.ts"),
				E = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/constants/index.ts"),
				w = s("./src/lib/domUtils/index.ts"),
				I = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				S = s("./src/lib/makeCommentsPageKey/index.ts"),
				N = s("./src/lib/makeDraftKey/index.ts"),
				T = s("./src/lib/performanceTimings/index.tsx"),
				L = s("./src/reddit/actions/ads/index.ts"),
				F = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/authoring.ts"),
				M = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				A = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				B = s("./src/reddit/actions/linkedPosts/index.ts"),
				D = s("./src/reddit/actions/login.ts"),
				W = s("./src/reddit/actions/modal.ts"),
				U = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				V = s("./src/reddit/actions/pages/comments.ts"),
				H = s("./src/reddit/actions/reportFlow/index.ts"),
				z = s("./src/reddit/actions/tooltip.ts"),
				G = s("./src/reddit/actions/upvotePrompt.ts"),
				q = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				K = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				Y = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				Q = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				X = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				Z = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				J = s("./src/reddit/constants/componentSizes.ts"),
				$ = s("./src/reddit/constants/elementIds.ts"),
				ee = s("./src/reddit/constants/history.ts"),
				te = s("./src/reddit/constants/keycodes.ts"),
				se = s("./src/reddit/constants/parameters.ts"),
				ne = s("./src/reddit/constants/posts.ts"),
				re = s("./src/reddit/constants/screenWidths.ts"),
				oe = s("./src/reddit/contexts/ApiContext.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				de = s("./src/reddit/helpers/sessionStorage/index.ts"),
				ce = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				me = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				ue = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				pe = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				he = s("./src/reddit/selectors/upvotePrompt.ts"),
				ge = s("./src/reddit/featureFlags/profileCollections.ts"),
				fe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				xe = s("./src/lib/makeSearchKey/index.ts"),
				ve = s("./src/reddit/contexts/Post/index.tsx"),
				Ce = s("./src/reddit/models/Comment/index.ts"),
				ye = s("./src/reddit/models/Post/index.ts"),
				Oe = s("./src/reddit/models/Subreddit/index.ts"),
				_e = s("./src/reddit/selectors/chatPost.ts"),
				je = s("./src/reddit/selectors/comments.ts"),
				Ee = s("./src/reddit/selectors/commentSelector.ts"),
				ke = s("./src/reddit/selectors/commentsListTruncated.ts"),
				we = s("./src/reddit/selectors/creatorStats.ts"),
				Ie = s("./src/reddit/selectors/discoveryUnit.ts"),
				Pe = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				Se = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Ne = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Te = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Le = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Fe = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				Re = s("./src/reddit/selectors/meta.ts"),
				Me = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ae = s("./src/reddit/selectors/posts.ts"),
				Be = s("./src/reddit/selectors/tooltip.ts"),
				De = s("./src/reddit/selectors/user.ts"),
				We = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Ue = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ve = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				He = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ze = s("./src/reddit/components/Comments/index.tsx"),
				Ge = s("./src/reddit/components/Comments/States/index.tsx"),
				qe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Ke = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ye = s("./src/reddit/components/CommentSort/index.tsx"),
				Qe = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Xe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ze = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Je = s("./src/reddit/components/HeaderImage/index.tsx"),
				$e = s("./src/reddit/components/Hovercards/helpers.ts"),
				et = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				tt = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				st = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				nt = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				rt = s("./src/reddit/components/JumpToContent/index.tsx"),
				ot = s("./src/reddit/components/NewCommentPill/async.tsx"),
				it = s("./src/reddit/components/PostContent/index.tsx"),
				at = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				dt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ct = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				lt = s("./src/reddit/components/SubredditNav/index.tsx"),
				mt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ut = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				pt = s("./src/reddit/helpers/datadome.ts"),
				bt = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ht = s("./src/reddit/helpers/history/index.ts"),
				gt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ft = s("./src/reddit/helpers/name/index.ts"),
				xt = s("./src/reddit/helpers/postCollection.ts"),
				vt = s("./src/reddit/helpers/resonatePage/index.ts"),
				Ct = s("./src/reddit/helpers/trackers/lightbox.ts"),
				yt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ot = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				_t = s("./src/reddit/layout/page/Listing/index.tsx"),
				jt = s("./src/reddit/models/ContentGate.ts"),
				Et = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				kt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				wt = s("./src/reddit/selectors/experiments/chat.ts"),
				It = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				Pt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				St = s.n(Pt),
				Nt = s("./src/reddit/components/SearchResultsContent/Comments/index.tsx");

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Lt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Ft = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				Rt = 200,
				Mt = 80,
				At = 32,
				Bt = Object(n.a)({
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
				Dt = Object(n.a)({
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
				Wt = Object(n.a)({
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
				Ut = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(S.a)(t) : n
				},
				Vt = e => {
					const {
						state: t
					} = e.location, s = l()(t, ee.b.IsOverlay, !1), n = l()(t, ee.b.CloseLocation, null), r = l()(t, ee.b.ScrollOnLoad, !1);
					r && Object(ht.c)(ee.b.ScrollOnLoad);
					const {
						partialCommentId: o,
						partialPostId: a,
						subredditName: c
					} = e.match.params, m = Object(ye.y)(a), p = o && Object(Ce.h)(o), b = Object(fe.a)(m), x = Object(f.e)(me.b), v = Object(f.e)(e => Object(Ae.z)(e, {
						listingKey: b
					})), C = Object(f.d)();
					let y, O = "";
					const _ = Object(f.e)(e => Object(It.a)(e));
					if (e.location.search && _.bucketed) {
						const t = d()([...Object(i.a)(e.location.search)]);
						y = Object(xe.e)(u()(t, se.D)), O = Object(xe.b)(m, void 0, y)
					}
					return Object(h.useEffect)(() => {
						x && !v.length && C(Object(B.c)({
							key: b
						}))
					}, []), g.a.createElement(ve.a, {
						postId: m
					}, g.a.createElement(Yt, {
						closeLocation: n,
						commentId: p,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: m,
						searchKey: O,
						searchOptions: y,
						shouldScrollToComments: r,
						sort: e.sort,
						subredditName: c
					}))
				},
				Ht = Object(ie.v)(),
				zt = () => Object(y.c)({
					apiError: je.c,
					apiPending: je.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Ae.V)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(le.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(we.a)(e, s)
					},
					comment: (e, t) => {
						let {
							commentId: s
						} = t;
						return s ? Object(Ee.b)(e, {
							commentId: s
						}) : void 0
					},
					communityBannerDiscoveryUnit: Ie.a,
					isSubredditDiscoveryCrosspostEnabled: Le.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(De.g)(e, s)
					},
					currentUserShowNSFW: De.lb,
					dismissedSubreddits: Pe.a,
					fullyLoaded: je.u,
					hasModeratorPostPermissions: Me.c,
					headComment: je.x,
					isActionBarAnimationEnabled: pe.b,
					isAvatarsInCommentsEnabled: Se.a,
					isCommentBeforeSignUpEnabled: ce.a,
					isCountAnimShadowTestEnabled: pe.e,
					isCrawler: (e, t) => !!Object(Re.c)(e),
					isCrosspostRecommendationsExperimentEnabled: le.b,
					isD2xPdpSideRailRecsEnabled: me.b,
					isEligibleForCommentTruncation: Fe.a,
					isChatPost: _e.d,
					isChatPostV2Enabled: wt.g,
					isCommentsListTruncated: ke.a,
					isLiveChatNuxReactionsEnabled: wt.d,
					isLoggedIn: De.R,
					isNightmodeOn: De.eb,
					isTooltipOpen: (e, t) => !!Object(Be.a)(e),
					origin: Re.k,
					post: Ae.G,
					postSEOV2IdCardVariant: Ne.h,
					profileCollectionsEnabled: ge.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: r
						} = t;
						return Object(je.s)(e, {
							commentsPageKey: Ut({
								postId: s,
								commentId: n,
								commentsPageKey: r
							})
						})
					},
					shouldOpenPostInNewTab: De.kb,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(be.z)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: Ae.V,
					userHovercardIsOpen: (e, t) => Object(Be.b)(Object($e.b)({
						itemId: t.postId,
						tooltipIdPrefix: Q.a,
						tooltipType: dt.f.StickyPost
					}))(e),
					userPrefs: De.Ib,
					inResonatePilot: Te.a,
					isQualifiedForUpvotePrompt: he.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(be.I)(e, s);
						return !!n && Object(Me.i)(e, n)
					},
					isNsfwBlurSubreddit: ue.e,
					isNsfwFullPageInterstitial: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Ae.V)(e, {
								postId: s
							}),
							r = !(!n || !n.isNSFW),
							o = Object(ue.g)(e) === ue.a.NoPreview;
						return Object(ue.f)(e) ? o : r && o
					}
				}),
				Gt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(W.g)(Y.a)),
					dismissTruncation: t => e(Object(We.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(M.a)()),
					setCommentFocus: t => e(F.g({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(V.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(z.i)()),
					onToggleTooltip: t => e(Object(z.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(D.openLoginModal)()),
					openNsfwModal: () => e(Object(U.a)()),
					openRegisterModal: () => e(Object(D.openRegisterModal)()),
					openReportFlow: (t, s) => e(Object(H.c)(t, s)),
					submitCommentAfterSignUp: () => e(R.m()),
					goToSubredditPage: t => e(Object(x.b)(t)),
					truncateCommentsList: () => e(Object(M.b)()),
					fetchCommentsNativeAd: t => e(Object(L.a)(t)),
					getIsTrackingCrossposts: t => e(Object(A.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Ue.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(G.b)(t, s, n))
					},
					fetchUXExperiences: () => {
						e(Object(v.a)({
							experiences: {
								[C.U.LiveChatReactionEdu]: {
									allowCached: !0
								}
							}
						}))
					}
				}),
				qt = Object(f.b)(zt, Gt);
			class Kt extends g.a.Component {
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
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== r && d >= r && (this.didScrollPastPost = !0), t && void 0 !== r && d < r && (this.didScrollPastPost = !1, o && I.a.write(() => {
							i(Object($e.b)({
								itemId: a,
								tooltipIdPrefix: Q.a,
								tooltipType: dt.f.StickyPost
							}))
						}))
					}, k.N), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Ct.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(ye.w)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === te.b.F || e.keyCode === te.a.F,
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
					e && s(e), Object(ut.a)(t.search) && this.setState({
						isEmbeddedInLiveChatIframe: !0
					})
				}
				async componentDidMount() {
					var e, t;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, he.b));
					const {
						commentFormRef: s,
						commentSortRef: n,
						props: {
							isLoggedIn: r,
							isNsfwBlurSubreddit: o,
							isOverlay: i,
							openNsfwModal: a,
							post: d,
							shouldScrollToComments: c,
							subredditName: l
						}
					} = this, m = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(m) && this.props.openReportFlow(this.props.postId, i), d && !d.isSponsored && !d.isRemoved && d.belongsTo.type !== ne.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(d.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (i ? (this.scrollContainerEl = document.getElementById($.e), c && (s || n || this.hasCommentAdRef()) && d && d.numComments ? this.scrollToComments() : I.a.write(() => {
							setTimeout(() => {
								Object(w.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(gt.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(ye.y)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), I.a.read(() => {
							const e = [Object(pt.a)()];
							this.props.isOverlay || Object(T.d)(T.c.CommentsPage, r, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						k.Rb.includes(e) && Object(vt.a)(e)
					}
					this.props.isLoggedIn && Object(de.c)() && this.props.submitCommentAfterSignUp(), (null == d ? void 0 : d.isNSFW) && l && o && a(), this.props.isLiveChatNuxReactionsEnabled && (null === (t = this.props.post) || void 0 === t ? void 0 : t.discussionType) === C.m.Chat && this.props.fetchUXExperiences()
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
							isEmbeddedInLiveChatIframe: Object(ut.a)(this.props.location.search)
						}), e.postId !== this.props.postId) {
						const e = this.props.post && Object(xt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? I.a.read(this.handleScroll) : I.a.write(() => {
							e || Object(w.c)(this.scrollContainerEl, 0), I.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && I.a.write(() => {
							setTimeout(() => {
								Object(w.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = J.b + (this.props.isOverlay ? J.m : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const r = (n = this.props.isOverlay ? document.getElementById($.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								o = Math.abs(r - s),
								i = this.props.isOverlay ? At : o - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && I.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(w.c)(n, i) : Object(w.c)(document, i)
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = Rt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = Rt)
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
					I.a.read(() => {
						const e = document.getElementById($.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - Mt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - Mt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), I.a.write(() => {
								Object(w.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => I.a.read(this.handleScroll))
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
					return _.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					I.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: r
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const o = _.c.end(t);
						n(Object(yt.c)(t, s, e, j.TimerType.InApp, o, r))
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
					const a = Object(bt.a)(e, i, o);
					if (!a) return null;
					let d = g.a.createElement(Wt, a);
					return n && (d = g.a.createElement(Ot.a, {
						content: d
					})), d
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
						isCountAnimShadowTestEnabled: d,
						isCrawler: c,
						isCrosspostRecommendationsExperimentEnabled: l,
						isD2xPdpSideRailRecsEnabled: m,
						isEligibleForCommentTruncation: u,
						isLoggedIn: p,
						isModWithUserNotesPermissions: b,
						isNightmodeOn: h,
						isNsfwBlurSubreddit: f,
						isNsfwFullPageInterstitial: x,
						isOverlay: v,
						post: C,
						postId: y,
						postSEOV2IdCardVariant: O,
						profileCollectionsEnabled: _,
						sendEvent: j,
						sort: w,
						subredditName: I,
						subredditOrProfile: P
					} = this.props, {
						isEmbeddedInLiveChatIframe: S
					} = this.state;
					if ((null == C ? void 0 : C.isNSFW) && I && x) return g.a.createElement(Z.a, {
						contentTitle: Object(ft.d)(I)
					});
					const N = Object(Ne.f)(O);
					if (!C) {
						if (t) return g.a.createElement(Ge.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === k.p ? g.a.createElement(Wt, {
							contentGateType: jt.a.PostBlockedForLegalReason
						}) : g.a.createElement(Ge.d, {
							postId: y,
							commentId: o,
							apiError: e,
							sort: w
						}) : g.a.createElement(Ge.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const T = this.isCommentPermalink(),
						L = C.belongsTo.type === ne.a.PROFILE,
						F = Object(xt.a)(C) && (!L || _),
						R = !p,
						M = P && P.isQuarantined,
						A = !u && !this.state.allCommentsRendered && !c,
						B = l && s,
						D = C.isNSFW && f;
					return Lt.input.channel.postID = y, S ? g.a.createElement("div", {
						className: St.a.EmbeddedLiveChatContainer
					}, this.renderCommentPanes()) : g.a.createElement(Xt, {
						closeLocation: r,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						isD2xPdpSideRailRecsEnabled: m,
						isLoggedIn: p,
						isOverlay: v,
						isSwapVariant: N,
						post: C,
						shouldBlurHeaderImage: D,
						subredditOrProfile: P,
						shouldFitPageToContent: R,
						isCollectionLayout: F
					}, g.a.createElement(ot.a, {
						postId: y,
						isNightMode: h,
						isOverlay: v,
						commentId: o
					}), !v && g.a.createElement(at.a, {
						post: C
					}), M && g.a.createElement(nt.a, {
						subredditName: P.name
					}), g.a.createElement(rt.a, null), g.a.createElement("div", {
						className: Object(E.a)(St.a.PageContentWrapper, {
							[St.a.LargePageContent]: F,
							[St.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, F && g.a.createElement(Dt, {
						isOverlay: v,
						isNightmodeOn: h,
						postId: y
					}), g.a.createElement(Ft, {
						condition: F,
						wrap: e => g.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: St.a.CollectionBodyWrapper
						}, e)
					}, g.a.createElement(it.c, {
						isCommentPermalink: T,
						isOverlay: v,
						isModWithUserNotesPermissions: b,
						postId: y,
						redditStyle: v,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: j,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && g.a.createElement(Ze.a, {
						post: C,
						subreddit: P
					}), this.state.commentNativeAdId && g.a.createElement("div", {
						ref: this.setCommentAdRef
					}, g.a.createElement(q.a, {
						key: `event-post-id-${C.id}`,
						isOverlay: v,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), P && !Object(Oe.i)(P) && g.a.createElement(X.a, {
						awaitAllCommentsRendered: A,
						contentContainerRef: this.state.layoutRef,
						isOverlay: v,
						post: C,
						subredditOrProfile: P
					}), B && g.a.createElement(K.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: C,
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
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isChatPost: l,
						isChatPostV2Enabled: m,
						isCommentsListTruncated: u,
						isCommentBeforeSignUpEnabled: p,
						isEligibleForCommentTruncation: b,
						isLoggedIn: h,
						isOverlay: f,
						location: x,
						onOtherDiscussions: v,
						openLoginModal: C,
						openRegisterModal: y,
						origin: _,
						post: j,
						postId: k,
						replyComment: w,
						searchKey: I,
						searchOptions: P,
						sendEvent: S,
						sort: T,
						subredditAboutInfo: L,
						subredditOrProfile: F
					} = this.props, {
						isEmbeddedInLiveChatIframe: M
					} = this.state;
					if (!j) return null;
					const A = this.isCommentPermalink(),
						B = [],
						D = j.isLocked && !s,
						W = !(A || j.isArchived || L && L.userIsBanned || j.authorIsBlocked || j.unrepliableReason);
					if (D) B.push(g.a.createElement(tt.a, {
						key: "commentThreadBanner",
						subredditOrProfile: F
					}));
					else if (j.isArchived) B.push(g.a.createElement(et.a, {
						key: "commentThreadBanner"
					}));
					else if (W && !l && !v)
						if (h || !h && p) {
							const e = Object(N.a)(O.c.replyToPost, k);
							B.push(g.a.createElement(Ve.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: O.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: k,
								submitAction: (t, s) => {
									let {
										validate: n,
										...r
									} = t;
									return n ? R.w({
										postId: k,
										commentsPageKey: o,
										draftKey: e,
										formData: r,
										editorMode: s
									}) : R.q({
										postId: k,
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
						} else B.push(g.a.createElement(He.a, {
							key: "loggedOutCommentForm",
							location: x,
							openLoginModal: C,
							openRegisterModal: y,
							origin: _
						}));
					if (j.contestMode && B.push(g.a.createElement(st.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), l || v || (this.props.isSubredditDiscoveryCrosspostEnabled ? B.push(g.a.createElement(Et.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: f,
							key: "commentNavigation",
							postId: k
						}), g.a.createElement(Ye.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: f,
							key: "commentSort",
							location: x,
							postId: k,
							sort: T,
							suggestedSort: j.suggestedSort
						})) : B.push(g.a.createElement(Ye.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: f,
							key: "commentSort",
							location: x,
							postId: k,
							sort: T,
							suggestedSort: j.suggestedSort
						}), g.a.createElement(Et.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: f,
							key: "commentNavigation",
							postId: k
						}))), B.push(g.a.createElement(ct.a, {
							key: "subredditForkingCTA",
							postId: k
						})), !t || d || l || v)
						if (!e || d || v)
							if (v) B.push(g.a.createElement(Bt, {
								commentSort: T,
								key: "otherDiscussions",
								postId: k,
								isOverlay: f,
								postPermalink: j.permalink
							}));
							else if (l) {
						if (F && F.id) {
							const e = w ? Object(N.a)(O.c.replyToComment, w.id) : Object(N.a)(O.c.replyToPost, k),
								s = Ut({
									postId: k,
									commentId: n,
									commentsPageKey: o
								});
							B.push(g.a.createElement(qe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: k,
								renderedInOverlay: f,
								subredditId: F.id,
								isEmbeddedLiveChat: M
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return h ? g.a.createElement(Ke.a, {
									isV2: m,
									isEmbeddedLiveChat: M,
									key: "chatCommentsForm",
									postId: k,
									replyComment: w,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: S
								}) : g.a.createElement(He.a, {
									key: "loggedOutCommentForm",
									className: St.a.ChatLoggedOutForm,
									location: x,
									openLoginModal: C,
									openRegisterModal: y,
									origin: _
								})
							}))
						}
					} else I && P ? B.push(g.a.createElement(Nt.a, {
						listingKey: I,
						searchOptions: P
					})) : (B.push(g.a.createElement("div", {
						className: Object(E.a)(St.a.CommentsPaneWrapper, {
							[St.a.mIsInOverlay]: f
						}),
						key: "commentsPaneWrapper"
					}, g.a.createElement(Xe.a, Tt({}, this.props, {
						shouldTruncateComments: b && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: j.numComments,
						onClick: this.handleContentClick
					}), g.a.createElement(ze.a, {
						commentId: n,
						commentsPageKey: o,
						postId: k,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: f
					})))), e && d ? B.push(g.a.createElement(Ge.e, {
						key: "commentsErrorState",
						postId: k,
						commentId: n,
						sort: T,
						apiError: e
					})) : !i && t && B.push(g.a.createElement(Ge.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					})));
					else B.push(g.a.createElement(Ge.e, {
						key: "errorState",
						postId: k,
						commentId: n,
						sort: T,
						apiError: e
					}));
					else this.didRenderLoading = !0, B.push(g.a.createElement(Ge.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return g.a.createElement(ae.a.Provider, {
						value: this.sendEventWithName
					}, B)
				}
			}
			const Yt = Ht(Object(oe.b)(qt(Object(mt.c)(Kt)))),
				Qt = P.a.wrapped(Qe.a, "DetailsPageSidebar", St.a),
				Xt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						isCollectionLayout: r,
						isD2xPdpSideRailRecsEnabled: o,
						isOverlay: i,
						isSwapVariant: a,
						post: d,
						shouldBlurHeaderImage: c,
						shouldFitPageToContent: l,
						subredditOrProfile: m
					} = e;
					if (i) return g.a.createElement(Ot.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: r,
						sidebar: m && g.a.createElement(Qe.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: d,
							subredditOrProfile: m,
							subredditName: m.name,
							subredditId: m.id
						})
					});
					const u = r ? J.h : re.a,
						p = o && m && !Object(Oe.i)(m) ? `r/${m.name}` : void 0;
					return g.a.createElement(_t.a, {
						backToSubredditName: p,
						containerRef: n,
						maxWidth: J.h,
						fitPageToContent: l,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: a,
						isCollectionLayout: r,
						navBar: m && g.a.Children.toArray([g.a.createElement(Je.a, {
							key: m.name,
							disableFullscreen: !0,
							headerText: m.name,
							maxWidth: u,
							prefixedHeaderText: m.displayText,
							shouldBlurHeaderImage: c,
							subredditOrProfile: m,
							url: m.url
						}), !Object(Oe.i)(m) && g.a.createElement(lt.a, {
							disableFullscreen: !0,
							homeUrl: m.url,
							maxWidth: u,
							subredditId: m.id
						})]),
						sidebar: m && g.a.createElement(Qt, {
							commentsPageKey: s,
							post: d,
							subredditOrProfile: m,
							subredditName: m.name,
							subredditId: m.id
						})
					})
				};
			t.default = Object(kt.a)(Vt)
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
				d = s("./src/lib/extractQueryParams/index.ts"),
				c = s("./src/lib/makeCommentsPageKey/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts");
			const h = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(b.y)(t)
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
							return r()([...Object(d.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(c.a)(n, o, a)
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
					} = Object(a.e)(e => f(e, t)), r = g(t, s, n), o = Object(m.d)(t.match.path), d = {
						...t,
						commentsPageKey: r,
						hasSortParam: s,
						onOtherDiscussions: o,
						sort: n
					};
					return i.a.createElement(e, d)
				}
			}
		},
		"./src/reddit/reducers/features/eligibleUXExperiences/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/actions/eligibleUxExperiences/constants.ts");
			const r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						experiences: {}
					},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.a: {
						const s = Date.now(),
							{
								experiences: n
							} = t.payload;
						return {
							...e,
							experiences: {
								...e.experiences,
								...Object.keys(n).reduce((e, t) => ({
									...e,
									[t]: {
										value: n[t],
										fetched: s
									}
								}), {})
							}
						}
					}
					case n.b: {
						const {
							experience: s,
							value: n
						} = t.payload;
						return {
							...e,
							experiences: {
								...e.experiences,
								[s]: {
									...e.experiences[s],
									value: n
								}
							}
						}
					}
				}
				return e
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
		"./src/reddit/selectors/eligibleUXExperiences.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/eligibleUXExperiences/index.ts");
			Object(n.a)({
				features: {
					eligibleUXExperiences: r.a
				}
			});
			const o = (e, t) => {
				var s, n, r;
				return (null === (r = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.eligibleUXExperiences) || void 0 === n ? void 0 : n.experiences) || void 0 === r ? void 0 : r[t.experience]) || null
			}
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.e[Object(o.U)(e, {})] === r.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.tb
				}) === n.Tc.Treatment
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.R, i.Q, (e, t) => e || t),
				d = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.I
				}), e => e === r.S.Enabled)
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
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.rc
				}), i.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.qc
				}), i.a),
				m = Object(d.a)(c, l, (e, t) => e || t),
				u = Object(d.a)(c, l, (e, t) => !(!e && !t))
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
				experimentName: n.zf
			}) === n.Gf.Enabled
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
				experimentName: n.Jf
			}), e => ({
				isSubEnlarged: e === n.Wf.Variant1 || e === n.Wf.Variant3,
				withCommunityDescription: e === n.Wf.Variant2 || e === n.Wf.Variant3
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
			const d = Object(n.a)(i.h, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[r.Xc.Bottom_cell_dismissible]: e,
						[r.Xc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.Xc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(r.Cb, !0),
				m = c(r.Db, !0),
				u = c(r.Eb, !0),
				p = c(r.Cb, !1),
				b = c(r.Db, !1),
				h = c(r.Eb, !1)
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
						experimentName: n.Qf
					}) === n.Rd
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.Pf
					}) === n.Rd
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
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
					}) === n.Rd
				},
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.tg
					}) === n.Rd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.rg
					});
					return t === n.hg.TypingIndicators || t === n.hg.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.d)(e, {
						experimentName: n.rg
					});
					return (null == t ? void 0 : t.variant) === n.hg.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.zg)(t)
				},
				d = Object(n.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				o = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(n.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.V)(e, {
					postId: t.postId
				});
				return Object(r.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.V, i.G, a.Q, a.R, o.h, (e, t, s, n, r, o, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.i)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!r && !o)
			})
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
				d = s("./src/reddit/selectors/posts.ts");
			const c = new Date,
				l = c.getUTCFullYear(),
				m = c.getUTCMonth(),
				u = c.getUTCDate(),
				p = Date.UTC(2008, 0, 1),
				b = Date.UTC(l, m - 7, u),
				h = Object(n.a)(e => Object(a.f)(e), e => Object(o.a)(e), (e, t) => {
					let {
						post: s
					} = t;
					return s && Object(d.V)(e, {
						postId: s.id,
						disallowProfile: !0
					})
				}, e => Object(i.a)(e), (e, t, s, n) => e && !!t && (!t.isNSFW || t.isNSFW && n === r.dd.GreyRedditNoNsfw) && !!s && (!s.isNSFW || s.isNSFW && n === r.dd.GreyRedditNoNsfw) && !!t.created && t.created > p && t.created < b)
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
		"./src/redditGQL/operations/FetchEligibleUXExperiences.json": function(e) {
			e.exports = JSON.parse('{"id":"eb0965c8c3a7"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"2717435b2dc0"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"9e98a6dedf0e"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"4b81b88d8f68"}')
		},
		"./src/redditGQL/operations/StoreUxTargetingAction.json": function(e) {
			e.exports = JSON.parse('{"id":"e734e21836ec"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"5398483b6e15"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"e0f0c999c9d2"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"4690c3d0dfa7"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.9c5d4542639cb892a527.js.map