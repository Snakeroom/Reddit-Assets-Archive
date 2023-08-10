// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.d4682ccdbe38d0b68a01.js
// Retrieved at 8/10/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage"], {
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
					const e = Object(m.a)(c.dd.Bottom_cell),
						t = Object(m.a)(c.dd.Bottom_cell_dismissible),
						s = Object(m.a)(c.dd.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(c.dd.Bottom_cell_signup_upsell_copy),
						r = Object(m.a)(c.dd.Bottom_cell_surprise_install_copy),
						o = Object(m.a)(c.dd.Bottom_sheet);
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
						} = Object(d.a)(), s = u(), o = Object(p.a)(s), l = Object(m.a)(c.dd.Bottom_cell_dismissible_immediate_trigger);
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
				return C
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return y
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return j
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return _
			})), s.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return E
			})), s.d(t, "getSubredditUserPowerupsFlairs", (function() {
				return k
			})), s.d(t, "getSubredditCurrentUserPowerupsFlairs", (function() {
				return P
			})), s.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return I
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return w
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
				O = s("./src/lib/initializeClient/installReducer.ts"),
				v = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(O.a)({
				features: {
					powerups: v.a
				}
			});
			const C = Object(o.a)(x.d),
				y = Object(o.a)(x.f),
				j = Object(o.a)(x.g),
				_ = Object(o.a)(x.e),
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
						await s(C(t))
					} catch (l) {
						i.c.captureException(l)
					}
				}, P = (e, t) => async (s, n) => {
					if (!e) return;
					const r = n(),
						o = Object(f.m)(r);
					if (!o || !Object(h.e)(r, {
							subredditId: e
						})) return;
					const i = !!Object(g.e)(r, {
						subredditId: e,
						userId: o.id
					});
					!t && i || await s(k(e, [o.id]))
				}, S = e => async (t, s) => !!e && (await t(Object(m.c)(e)), !!Object(g.c)(s(), {
					subredditId: e
				})), I = e => async (t, s) => {
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
					if (!(await t(S(a)))) return;
					const c = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(k(a, Array.from(c)))
				}, w = (e, t) => async (s, n) => {
					if (!t) return;
					if (!(await s(S(e)))) return;
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
					t(y(e));
					const {
						subredditId: b,
						achievementFlairType: h
					} = e, x = [h].filter(r.a), O = Object(g.d)(c, {
						subredditId: b,
						userId: m
					});
					try {
						await l(a(), b, x, O), t(j(e))
					} catch (v) {
						t(_(e)), i.c.captureException(v), t(Object(u.f)({
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
					} catch (O) {
						s(E({
							...h,
							isHidden: !t
						})), i.c.captureException(O), s(Object(u.f)({
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
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				O = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.F)(e, {
								postId: n
							}) || null,
							i = r && Object(b.F)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				v = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let o = -1;
				const i = Object(b.y)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return v.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !O(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var C = s("./src/reddit/selectors/platform.ts");
			const y = Object(r.a)(i.f),
				j = Object(r.a)(i.d),
				_ = Object(r.a)(i.g),
				E = Object(r.a)(i.c),
				k = Object(r.a)(i.e),
				P = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
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
					e(_());
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
							if (S(t)) {
								if (I(t)) {
									e(E({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (w(t)) {
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
									e(y(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(j({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				S = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !I(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				N = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(C.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(g.S)(i);
						return Object(o.i)(() => e(P()), {
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
				return H
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return q
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return G
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return Y
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Q
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return J
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				c = s("./src/reddit/actions/ads/index.ts"),
				d = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit/index.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/shortcuts/active.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/constants/postCollection.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/endpoints/governance/posts.ts"),
				y = s("./src/config.ts"),
				j = s("./src/lib/makeApiRequest/index.ts"),
				_ = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function E(e, t, s) {
				const n = `${y.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(_.a)(`${n}/${e}/${t}/${s}`) : t ? Object(_.a)(`${n}/${e}/${t}`) : Object(_.a)(`${n}/${e}`)
			}
			var k = (e, t, s, r, o) => Object(j.a)(e, {
					data: o,
					endpoint: E(t, s, r),
					method: n.nb.GET
				}),
				P = s("./src/reddit/endpoints/page/subredditPage.ts"),
				S = s("./src/reddit/helpers/canonicalUrls.ts"),
				I = s("./src/reddit/helpers/commentList/index.ts"),
				w = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/models/Post/index.ts"),
				F = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/reddit/selectors/postCollection.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/actions/pages/comments.ts"),
				W = s("./src/reddit/actions/pages/constants.ts"),
				V = s("./src/lib/initializeClient/installReducer.ts"),
				K = s("./src/reddit/helpers/ads/index.ts"),
				z = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(V.a)({
				pages: {
					comments: z.a
				}
			});
			const H = Object(r.a)(W.d),
				q = Object(r.a)(W.b),
				G = Object(r.a)(W.a),
				Y = e => async (t, s) => {
					const {
						collectionId: r,
						partialPostId: o,
						partialCommentId: c,
						subredditName: d = "",
						routePrefix: l
					} = e.params, g = o ? Object(R.y)(o) : "", f = c && Object(L.h)(c), {
						queryParams: C
					} = e, y = s(), j = Object(K.a)(C, y), _ = {
						id: r,
						type: v.b[l]
					}, E = v.b[l] === v.a.PROFILE, {
						hasSortParam: k,
						sortToUse: P
					} = Object(w.a)(y, g), I = ["context", "depth", "limit", x.h].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: d,
						hasSortParam: k,
						instanceId: j
					});
					k && (I.sort = P), t(u.q(g)), await Promise.all([E ? t(p.d(d)) : Promise.resolve(), t(Z(r, g, f, I))]);
					const N = ((e, t) => {
						const s = Object(B.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const r = Object(D.Q)(e, {
								identifier: t
							}),
							o = Object(i.c)(s.title, r.name).toString();
						return Object(a.a)(o, O.c, n.mb)
					})(s(), _) || Object(i.e)();
					t(m.n({
						title: N
					}));
					const F = s().posts.models[g];
					if (F) {
						const n = Object(D.Q)(s(), {
							identifier: F.belongsTo
						});
						if (!F.isSponsored)
							if (F.belongsTo.type === v.a.SUBREDDIT) {
								!!Object(D.W)(y, {
									subredditId: F.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(p.d(n.name));
						const r = s().posts.instances[g] ? Object(K.a)(e.queryParams, s()) : F.postId;
						t(Object(b.b)(r))
					}
					E ? Object(S.f)(s(), t, e) : Object(S.g)(s(), t, e), Object(T.u)(s(), !0)
				}, Q = Object(r.a)(W.c), J = (e, t, s, n) => async (r, i, a) => {
					const c = Object(o.a)(e, t, s, n),
						d = i();
					t = t || Object(B.p)(d, {
						collectionId: e
					});
					const l = await k(a.apiContext(), e, t, s, n);
					if (r(Object(m.o)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(I.a)(l.body, t, d);
						r(q({
							key: c,
							collectionId: e,
							meta: d.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const n = d.user.prefs.commentMode;
						r(Q({
							commentMode: n,
							key: c,
							postId: t
						}))
					} else r(G({
						error: l.error,
						key: c,
						...l.body
					}))
				}, Z = (e, t, s, n, r) => async (i, a, p) => {
					const b = Object(o.a)(e, t, s, n),
						h = a();
					t = t || Object(B.p)(h, {
						collectionId: e
					});
					const {
						subredditName: x
					} = n, O = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), v = h.pages.comments.api.fullyLoaded[b], y = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || O && !y) {
						if (O && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(M.i)(h) ? F.a.COMMENTS_OVERLAY : F.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(c.b)(e))
							})
						}
						return void(v || r || i(J(e, t, s, n)))
					}
					const j = h.user.prefs.commentMode;
					i(H({
						key: b,
						collectionId: e,
						commentMode: j,
						postId: t
					}));
					const _ = {
						...n
					}; {
						const e = t && Object(A.F)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > U.MIN_NUM_COMMENTS_TO_TRUNCATE && (_.truncate = U.NUM_COMMENTS_TRUNCATE)
					}
					let E, S = await Object(N.a)("comments", () => k(p.apiContext(), e, t, s, _));
					if (i(Object(m.o)(S.status)), S.ok && (t = t || S.body.collections[e].primaryPostId)) {
						const e = Object.keys(S.body.posts).filter(e => !!S.body.posts[e].isMeta),
							s = Object(A.F)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(C.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (E = t.body)
						}
					}
					if (!r) {
						const r = t ? Object(A.F)(a(), {
							postId: t
						}) : null;
						r && S.body.comments && Object.keys(S.body.comments).length < r.numComments ? i(J(e, t, s, n)) : S.ok && i(Q({
							commentMode: j,
							key: b,
							postId: t
						}));
						const o = Object(M.i)(h) ? F.a.COMMENTS_OVERLAY : F.a.COMMENTS;
						i(Object(c.b)(o))
					}
					if (S.ok) {
						if (!t) return;
						const e = Object(I.a)(S.body, t, h);
						i(Object(U.commentsPageLoaded)({
							commentMode: j,
							key: b,
							postId: t,
							meta: h.meta,
							governance: E,
							shouldCollapse: e,
							...S.body
						})), i(g.g(b));
						const s = Object(A.F)(h, {
							postId: t
						});
						s && i(u.y(s, f.a.CommentsView)), !r && s && "subreddit" === s.belongsTo.type && S.body.comments && await i(Object(d.a)({
							commentIds: Object.keys(S.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else x && (i(Object(l.subredditPending)({
						key: b
					})), S = await Object(N.a)("subreddit", () => Object(P.a)(p.apiContext(), x, {})), i(Object(m.o)(S.status))), i(Object(l.handleSubredditPageApiError)(S, x)), i(G({
						error: S.error,
						key: b,
						...S.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return vt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return Ct
			})), s.d(t, "commentsPagePending", (function() {
				return yt
			})), s.d(t, "commentsPageLoaded", (function() {
				return jt
			})), s.d(t, "commentsPageFailed", (function() {
				return _t
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return Et
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return Pt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return St
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return It
			})), s.d(t, "commentsPageRequested", (function() {
				return wt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Tt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Lt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Rt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/reddit/reducers/features/categories/index.ts"),
				d = (s("./node_modules/lodash/isEmpty.js"), s("./src/lib/makeActionCreator/index.ts")),
				l = (s("./src/reddit/constants/categories.tsx"), s("./src/lib/constants/index.ts")),
				m = (s("./src/lib/makeApiRequest/index.ts"), s("./src/lib/omitHeaders/index.ts"), s("./src/reddit/constants/headers.ts"), s("./src/reddit/constants/experiments.ts"));
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(a.a)({
				features: {
					categories: c.a
				}
			});
			Object(d.a)(b.c), Object(d.a)(b.b), Object(d.a)(b.a), Object(d.a)(b.g), Object(d.a)(b.f), Object(d.a)(b.e);
			const h = Object(d.a)(b.d);
			var g = s("./src/reddit/actions/discoveryUnit.ts"),
				f = s("./src/reddit/actions/pages/subreddit/index.ts"),
				x = s("./src/reddit/actions/shortcuts/active.ts"),
				O = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				v = s("./src/reddit/actions/subredditSettings.ts"),
				C = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				y = s("./src/reddit/endpoints/devPlatform/index.ts"),
				j = s("./src/reddit/endpoints/governance/posts.ts"),
				_ = s("./src/reddit/endpoints/page/commentsPage.ts"),
				E = s("./src/lib/makeGqlRequest/index.ts"),
				k = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function P(e, t) {
				return Object(E.a)(e, {
					...k,
					variables: t
				})
			}
			var S = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/endpoints/profile/info.ts"),
				w = s("./src/reddit/models/Post/index.ts"),
				N = s("./src/lib/pageTitle/index.ts"),
				T = s("./src/reddit/actions/economics/helpers/async.ts"),
				L = s("./src/reddit/actions/externalAccount.ts"),
				R = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				F = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				M = s("./src/reddit/actions/platform.ts"),
				B = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/actions/subreddit.ts"),
				U = s("./src/reddit/actions/subreddit/notifications.ts"),
				W = s("./src/reddit/actions/subreddit/questions.ts"),
				V = s("./src/reddit/actions/toaster.ts"),
				K = s("./src/reddit/constants/adEvents.ts"),
				z = s("./src/reddit/constants/graphql.ts"),
				H = s("./src/reddit/constants/parameters.ts"),
				q = s("./src/reddit/constants/posts.ts"),
				G = s("./src/reddit/helpers/ads/index.ts"),
				Y = s("./src/reddit/helpers/commentList/index.ts"),
				Q = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Subreddit/index.ts"),
				X = s("./src/reddit/models/User/index.ts"),
				$ = s("./src/reddit/selectors/adsSignals.ts"),
				ee = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				te = s("./src/reddit/selectors/experiments/postSeo.ts"),
				se = s("./node_modules/reselect/es/index.js"),
				ne = s("./src/reddit/helpers/chooseVariant/index.ts"),
				re = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				oe = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ie = s("./src/reddit/selectors/platform.ts"),
				ae = s("./src/reddit/selectors/removedPosts.ts");
			const ce = Object(se.a)(ie.f, re.a, ae.a, ae.c, oe.a, ae.e, oe.b, (e, t, s, n, r, o, i) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const a = o || i,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || c)
			});
			var de = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/selectors/user.ts"),
				be = s("./src/lib/makeCommentsPageKey/index.ts"),
				he = s("./src/reddit/actions/ads/index.ts"),
				ge = s("./src/reddit/helpers/canonicalUrls.ts"),
				fe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				xe = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Oe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ve = s("./src/lib/performanceTimings/index.tsx"),
				Ce = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				ye = s("./src/reddit/actions/gold/customEmojis.ts"),
				je = s("./src/lib/makeListingKey/index.ts"),
				_e = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ee = Object(d.a)(_e.b),
				ke = Object(d.a)(_e.a);
			var Pe = s("./src/reddit/actions/linkedPosts/index.ts"),
				Se = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ie = s("./src/reddit/actions/subreddit/constants.ts"),
				we = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ne = e => {
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
				Te = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Fe = e => {
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
							d = Object(Te.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Le.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(w.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Re.a)(e)
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
				Me = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Be = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ae = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var De = e => {
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
							c = Object(Be.a)(a),
							d = Ae(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = r,
							h = Object(je.a)(b, l.ab[p], {
								t: u
							});
						s({
							dist: e.dist,
							key: h,
							meta: n.meta,
							postIds: m,
							posts: d
						})
					} catch (a) {
						n(a)
					}
				},
				Ue = s("./src/reddit/models/Media/index.ts"),
				We = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ve = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ke = e => {
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
							d = Object(Ve.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Le.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(w.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Re.a)(e)
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
				ze = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const He = Object(d.a)(ze.b),
				qe = Object(d.a)(ze.a);
			var Ge = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ye = Object(d.a)(Ge.b),
				Qe = Object(d.a)(Ge.a),
				Je = Object(d.a)(Ie.o),
				Ze = Object(d.a)(Ie.n),
				Xe = (Object(d.a)(Ie.w), Object(d.a)(Ie.v), e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o;
					const {
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: c,
						includePostFeed: d,
						includePostQASchemaEligibilityFlag: m,
						listingBelowExperimentVariant: u,
						postId: p,
						range: b,
						sort: h,
						subredditName: g
					} = e, f = Object(je.a)(p, null, {
						isOtherDiscussions: !0
					}), x = s(), O = Object(me.y)(x, {
						listingKey: f
					}), v = c && (!O || 0 === O.length), C = Object(je.a)(g, l.ab[h], {
						t: b
					}), y = Object(me.y)(x, {
						listingKey: C
					}), j = d && (a || !y || 0 === y.length), _ = a, k = i, P = Object(me.F)(x, {
						postId: p
					}), S = !!P && !!P.media && (Object(Ue.M)(P.media) || Object(Ue.I)(P.media)) && !P.media.altText;
					if (!(v || j || _ || k || S || m)) return;
					v && t(Object(Se.d)({
						key: f
					}));
					const I = await ((e, t) => Object(E.a)(e, {
							...we,
							variables: t
						}))(r(), e),
						w = I.body,
						N = Object(We.a)(u);
					m && (I.ok ? w.data && w.data.post && t(Ee({
						postId: p,
						isEligibleForQASchema: null !== (o = w.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(ke())), v && Object(Me.a)({
						getState: s,
						onFailure: e => t(Object(Se.b)(e)),
						onSuccess: e => t(Object(Se.c)(e)),
						postId: p,
						response: I
					}), j && !_ && (I.ok ? w.data && De({
						getState: s,
						onFailure: e => t(Ze(e)),
						onSuccess: e => t(Je(e)),
						options: e,
						postId: p,
						subreddit: w.data.subreddit
					}) : t(Ze(I.error))), _ && !N && I.ok && w.data && Fe({
						getState: s,
						onFailure: e => t(Object(Pe.a)(e)),
						onSuccess: e => t(Object(Pe.b)(e)),
						postId: p,
						post: w.data.post
					}), k && I.ok && Ke({
						getState: s,
						onFailure: e => t(Qe(e)),
						onSuccess: e => t(Ye(e)),
						postId: p,
						post: w.data.post
					}), S && I.ok && w.data && Ne({
						getState: s,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(He(e)),
						postId: p,
						post: w.data.post
					})
				}),
				$e = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(w.y)(n),
						{
							sortToUse: o
						} = Object(Q.a)(e, r);
					return (!o || o === l.v.CONFIDENCE) && Object(ne.c)(e, {
						experimentEligibilitySelector: () => Object(pe.R)(e),
						experimentName: m.p
					}) === m.v.Enabled
				};
			var et = s("./src/reddit/selectors/chatPost.ts"),
				tt = s("./src/reddit/selectors/seo/index.ts"),
				st = s("./src/reddit/actions/pages/constants.ts"),
				nt = s("./src/lib/sentry/index.ts"),
				rt = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				ot = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				it = s("./src/reddit/helpers/locales.ts"),
				at = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				ct = s("./src/reddit/reducers/pages/comments/index.ts"),
				dt = s("./src/reddit/selectors/experiments/chat.ts"),
				lt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				mt = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ut = s("./src/reddit/selectors/experiments/countrySites.ts"),
				pt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				bt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ht = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				gt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ft = s("./src/reddit/selectors/i18n/index.ts"),
				xt = s("./src/reddit/selectors/meta.ts"),
				Ot = s("./src/reddit/actions/pages/search/index.ts");
			Object(a.a)({
				pages: {
					comments: ct.a
				}
			}), Object(a.a)({
				features: {
					modUserNotes: at.a
				}
			});
			const vt = 25,
				Ct = 100,
				yt = Object(d.a)(st.h),
				jt = Object(d.a)(st.f),
				_t = Object(d.a)(st.e),
				Et = Object(d.a)(st.i);

			function kt(e) {
				return e && e.ok
			}
			const Pt = (e, t, s) => {
					const n = !e,
						r = Object(me.F)(t, {
							postId: s
						}).belongsTo,
						o = Object(ue.Q)(t, {
							identifier: r
						}),
						i = Object(tt.c)(t, {
							identifier: r
						}),
						a = !!Object(We.c)(t),
						c = Object(ft.a)(t),
						d = Object(pt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(Z.i)(o) && !Object(et.d)(t, {
						postId: s
					}) && !!o || !Object(ie.i)(t) && Object(te.e)(t)), e && (l.postQASchema = Object(te.d)(t)), d && (l.listingBelow = !0), l
				},
				St = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				It = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				wt = e => async (t, s) => {
					var n, a;
					const {
						partialPostId: c,
						partialCommentId: d
					} = e.params, {
						subredditName: b
					} = e.params || "", g = c ? Object(w.y)(c) : "", f = d && Object(J.h)(d), {
						path: v,
						queryParams: y
					} = e, j = Object(F.d)(v), _ = Object(G.a)(y, s()), {
						hasSortParam: E,
						sortToUse: k
					} = Object(Q.a)(s(), g), P = null === (a = null === (n = Object(ie.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === a ? void 0 : a.route.chunk, S = ["context", "depth", "limit", H.h].reduce((e, t) => {
						const s = parseInt(y[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: b,
						hasSortParam: E,
						instanceId: _,
						include_categories: !0
					});
					E && (S.sort = k), S.onOtherDiscussions = j, S.comment_awardings_by_current_user = !0, t(B.q(g));
					const I = s(),
						T = Object(me.F)(I, {
							postId: g
						}),
						R = Object(lt.a)(I).bucketed && Object(C.a)(e) && Object(C.b)(T);
					if (R) {
						const s = Object(i.e)(r()(e.queryParams, H.d)),
							n = Object(pe.mb)(I),
							o = Object(pe.rb)(I),
							a = Object(i.b)(g, void 0, s, n && o);
						await t(Object(Ot.d)({
							key: a,
							options: s,
							subredditName: b,
							postId: g
						}))
					} else await t(Tt(g, f, S, k));
					const U = Object(pe.S)(s());
					if (T && "subreddit" === T.belongsTo.type) {
						const e = T.belongsTo.id;
						if (await Promise.all([Object(ve.i)(() => t(Object(Ce.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: P,
								isLoggedIn: U
							}), Object(ve.i)(() => t(Object(ye.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: P,
								isLoggedIn: U
							})]), !Object(ie.i)(I)) {
							Object(ht.a)(I) && t(Object(W.b)(e))
						}
						Object(le.i)(I, e) && await t(Object(O.c)(g))
					}
					if (T) {
						const n = ((e, t) => {
								const s = Object(me.U)(e, {
										postId: t
									}),
									n = Object(me.F)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), g),
							r = Object(ue.Q)(s(), {
								identifier: T.belongsTo
							});
						if (r && (e => m.wf.Redirect === Object(ne.b)(e, {
								experimentEligibilitySelector: ce,
								experimentName: m.qf
							}))(s())) return void t(Object(o.c)(r.url));
						if (T.belongsTo.type !== q.a.SUBREDDIT || T.isSponsored) {
							if (T.belongsTo.type === q.a.PROFILE) {
								const e = Object(ve.i)(() => t(A.d(r.name)), {
									name: "getProfileInfo",
									page: P,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(ue.W)(s(), {
									subredditId: T.belongsTo.id
								})) {
								const e = Object(ve.i)(() => t(D.o(r.name)), {
									name: "getSubredditRules",
									page: P,
									isLoggedIn: U
								});
								await e
							}
						}
						const i = Pt(!1, s(), g),
							a = j;
						if (St(a, i)) {
							Object(fe.d)(fe.a.LinkedPosts);
							const e = Object(fe.c)(fe.a.LinkedPosts);
							Object(fe.d)(fe.a.NsfwLinkedPosts);
							const n = Object(fe.c)(fe.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: c,
									sessionStartTime: d
								} = Object($.a)(s()),
								m = {
									adContext: {
										layout: z.a.Card,
										sourcePostId: g,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: c,
											sessionStartTime: d
										}
									},
									range: l.nc.WEEK.toUpperCase(),
									sort: l.R.TOP,
									subredditName: r.name
								},
								u = {
									postId: g
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(We.c)(s())
								};
							Object(pt.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(gt.a)(s())
								},
								h = It(i);
							Object(ve.i)(() => t(Xe({
								...u,
								...m,
								...p,
								...b,
								...h,
								includeOtherDiscussions: a
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: U,
								page: P
							});
							0
						}
						t(Object(L.p)()), t(M.n({
							title: n
						}));
						const c = s().posts.instances[g] ? Object(G.a)(e.queryParams, s()) : T.postId;
						t(Object(x.b)(c)); {
							const e = Object(p.b)(s(), {
								subredditName: r.name
							});
							await Promise.all(e.map(e => t((e => async (t, s) => {
								const n = Object(p.h)(s(), {
									id: e
								});
								t(h({
									categoryId: e,
									rank: n + 1
								})), Object(u.pb)(Object(p.c)(s()))
							})(e))))
						}
					} else t(M.n({
						title: N.e()
					}));
					const {
						routePrefix: V
					} = e.params;
					R || (q.b[V] === q.a.PROFILE ? Object(ge.f)(s(), t, e) : Object(ge.d)(s(), t, e))
				}, Nt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], Tt = function(e, t, s, n) {
					let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, i, a) => {
						var c, d, m, u;
						const p = i(),
							b = Object(be.a)(e, r ? void 0 : t, s),
							{
								subredditName: h
							} = s,
							x = !r && p.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
							O = p.pages.comments.api.fullyLoaded[b],
							v = p.pages.comments.api.error[b],
							C = p.pages.comments.api.pending[b],
							E = !Object(pe.R)(p),
							k = Object(pe.m)(p),
							N = n === l.v.CHAT,
							L = !!p.platform.lastPage,
							F = N && L,
							A = Object(me.F)(p, {
								postId: e
							}),
							D = Object(dt.d)(p),
							W = r || D && (null == A ? void 0 : A.discussionType) === w.b.Chat;
						if ((C || x && !v) && !F) {
							if (x && !p.sidebarPromotedPosts.firstFetch) {
								const e = Object(ie.i)(p) ? Oe.a.COMMENTS_OVERLAY : Oe.a.COMMENTS;
								window.addEventListener("load", () => {
									o(Object(he.b)(e))
								})
							}
							if (!O) {
								const n = !W || t ? s : {
									...s,
									depth: 1
								};
								o(Rt(e, t, n))
							}
							return
						}
						o(g.g());
						const z = p.user.prefs.commentMode;
						o(yt({
							key: b,
							postId: e,
							commentMode: z
						}));
						const H = {
							...s,
							...N ? {
								sort: l.v.LIVE
							} : E ? {
								sort: s.sort,
								depth: 2
							} : {
								sort: s.sort
							}
						}; {
							const t = Object(me.F)(i(), {
								postId: e
							});
							o(Object(f.maybeShowPrivateSubredditModal)(h || "")), t && t.numComments && t.numComments > Ct && (H.truncate = vt)
						}
						const q = null === (d = null === (c = Object(ie.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
							G = Object(ve.i)(() => Object(_.a)(a.apiContext(), e, t, H, Object(ee.a)(i()), $e(i())), {
								name: "fetchCommentsPage",
								isLoggedIn: !E,
								page: q
							}),
							Q = !E && k && Object(ve.i)(() => Object(I.d)(a.gqlContext(), Object(X.e)(k)), {
								name: "fetchProfileKarma",
								isLoggedIn: !E,
								page: q
							}) || null,
							J = Object(mt.c)(p),
							Z = Object(ve.i)(() => P(a.gqlContext(), {
								postId: e,
								includeSubredditRankings: J
							}), {
								name: "fetchCommentsPageExtra",
								isLoggedIn: !E,
								page: q
							}),
							$ = h && Object(bt.a)(p) ? Object(y.a)(a.gqlContext(), {
								subredditName: h
							}) : null;
						let te, se, ne, re, oe;
						if ([te, se, ne, re] = await Promise.all([G, Q, Z, $]), o(Object(M.o)(te.status)), kt(ne) && "SubredditPost" === (null === (m = ne.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
							const e = ne.body.data.postInfoById.subreddit.name;
							Object(ge.c)(i(), o, e)
						}
						if (te.ok) {
							try {
								te.body.posts = await Object(rt.a)(a.apiContext(), te.body.posts, p)
							} catch (ae) {
								nt.c.captureException(ae)
							}
							const t = Object.keys(te.body.posts).filter(e => !!te.body.posts[e].isMeta),
								s = te.body.posts[e];
							if (Object(ge.b)(i(), o, s.belongsTo.type), t.length) {
								const e = Object(ve.i)(() => Object(j.a)(a.apiContext(), s.belongsTo.id, t), {
										name: "getGovernanceData",
										page: q,
										isLoggedIn: !E
									}),
									n = await e;
								n.ok && (oe = n.body)
							}
							if (kt(se)) {
								const {
									data: e
								} = se.body, t = {
									karma: {
										...I.a
									}
								};
								if (Object(I.e)(e.redditorInfoByName)) {
									const s = e.redditorInfoByName.karma;
									t.karma = {
										...t.karma,
										...s
									}
								}
								te.body && te.body.account && Object.assign(te.body.account, t)
							}
							if (kt(ne)) {
								const {
									data: t
								} = ne.body;
								if (t.postInfoById && Nt.includes(t.postInfoById.__typename) && (te.body.posts[e] = {
										...te.body.posts[e],
										...t.postInfoById,
										mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null,
										media: {
											...te.body.posts[e].media,
											..."media" in t.postInfoById ? t.postInfoById.media : null
										}
									}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
									const e = t.postInfoById.subreddit.detectedLanguage;
									Object(xt.d)(p) && e && Object(ut.f)(p) && await Object(it.a)(e, o);
									const {
										id: s,
										isEligibleForContentBlocking: n,
										allowedMediaInComments: r,
										directoryRankings: i
									} = t.postInfoById.subreddit;
									o(Object(U.c)({
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
							const n = Object(Y.a)(te.body, e, p),
								{
									postMeta: r
								} = te.body;
							te.body.posts[e] = {
								...te.body.posts[e],
								isRobotIndexable: Object(ot.a)(r, e)
							}, re && te.body.subreddits[s.belongsTo.id] && (te.body.subreddits[s.belongsTo.id] = {
								...te.body.subreddits[s.belongsTo.id],
								devPlatformMetadata: re
							}), o(jt({
								key: b,
								postId: e,
								meta: p.meta,
								governance: oe,
								shouldCollapse: n,
								...te.body
							}))
						} {
							const n = Object(me.F)(i(), {
								postId: e
							});
							n && te.body.comments && Object.keys(te.body.comments).length < n.numComments ? o(Rt(e, t, s)) : te.ok && o(Lt({
								key: b
							}));
							const r = Object(ie.i)(p) ? Oe.a.COMMENTS_OVERLAY : Oe.a.COMMENTS;
							o(Object(he.b)(r))
						}
						if (te.ok) {
							o(V.g(b));
							const t = Object(me.F)(i(), {
									postId: e
								}),
								s = Object.keys(te.body.comments);
							if (o(B.y(t, K.a.CommentsView)), Object(le.h)(i(), {
									subredditId: t.belongsTo.id
								}) && await o(Object(R.a)({
									commentIds: s,
									postIds: [e]
								})), t && "subreddit" === t.belongsTo.type && te.body.comments) {
								const e = Object(ve.i)(() => o(Object(T.a)({
									commentIds: s,
									postIds: [t.id],
									subredditId: t.belongsTo.id
								})), {
									name: "fetchAllEconomicsData",
									page: q,
									isLoggedIn: !E
								});
								await e
							}
						} else {
							let e;
							h && (o(Object(f.subredditPending)({
								key: b
							})), e = await Object(xe.a)("subreddit", () => Object(S.a)(a.apiContext(), h, {})), o(Object(M.o)(e.status)), o(Object(f.handleSubredditPageApiError)(e, h))), o(_t({
								error: te.error,
								key: b,
								...e ? e.body : te.body
							}))
						}
					}
				}, Lt = Object(d.a)(st.g), Rt = (e, t, s) => async (n, r, o) => {
					var i, a;
					const c = Object(be.a)(e, t, s),
						d = r(),
						l = Object(pe.S)(d),
						m = Object(pe.m)(d),
						u = null === (a = null === (i = Object(ie.b)(r())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						p = Object(me.F)(d, {
							postId: e
						}),
						b = Object(dt.d)(d),
						h = "CHAT" === (null == p ? void 0 : p.discussionType) && b && !t,
						g = Object(_.a)(o.apiContext(), e, t, h ? {
							...s,
							depth: 1
						} : s, Object(ee.a)(d), $e(d)),
						f = l && m && Object(I.d)(o.gqlContext(), Object(X.e)(m)) || null,
						x = Object(mt.c)(d),
						O = Object(ve.i)(() => P(o.gqlContext(), {
							postId: e,
							includeSubredditRankings: x
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: u
						}),
						[C, y, j] = await Promise.all([g, f, O]);
					if (C.ok) {
						if (kt(y)) {
							const {
								data: e
							} = y.body, t = {
								karma: {
									...I.a
								}
							};
							if (Object(I.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							C.body && C.body.account && Object.assign(C.body.account, t)
						}
						if (kt(j)) {
							const {
								data: t
							} = j.body;
							if (C.body.posts[e] = {
									...C.body.posts[e],
									...t.postInfoById,
									media: {
										...C.body.posts[e].media,
										...t.postInfoById && "media" in t.postInfoById ? t.postInfoById.media : null
									}
								}, t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const {
									id: e,
									directoryRankings: s
								} = t.postInfoById.subreddit;
								n(Object(U.c)({
									subredditAboutInfo: {
										[e]: {
											directoryRankings: s
										}
									}
								}))
							}
						}
						const t = Object(Y.a)(C.body, e, d);
						n(jt({
							key: c,
							postId: e,
							meta: d.meta,
							shouldCollapse: t,
							...C.body
						})), n(Lt({
							key: c
						}));
						const s = r().posts.models[e],
							o = s && Object(me.U)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(de.a)(d, {
							subredditId: o.id
						}) && n(Object(v.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && C.body.comments && await n(Object(T.a)({
							commentIds: Object.keys(C.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(_t({
						error: C.error,
						key: c,
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
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "g", (function() {
				return w
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
				O = (e, t) => Object(o.f)({
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
			var v = s("./src/reddit/endpoints/subreddit/about.ts");
			const C = Object(r.a)(b.i),
				y = Object(r.a)(b.h),
				j = Object(r.a)(b.G),
				_ = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
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
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(x(s, P({
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
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(O(s, k({
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
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(s, I({
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
						})), e(O(s, S({
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
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(j({
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
						e(C({
							nodes: s
						}))
					} else e(y()), e(Object(o.f)({
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
						if (c.ok && c.body && (null === (a = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(_(t)), e(O(s));
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
						const u = await Object(v.a)(i(), t, !0),
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
						const O = h.id,
							C = await m(i(), O);
						if (C.ok && C.body && (null === (c = null === (a = C.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) e(E([h])), e(x(h.name));
						else {
							e(f(`error-muting-${O}`))
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
					var O, v, C;
					e(p());
					const y = h(s),
						j = await Object(d.b)(x(), t, y);
					if ((null === (v = null === (O = j.error) || void 0 === O ? void 0 : O.fields) || void 0 === v ? void 0 : v.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(j.body) && (null === (C = j.body.data.updateSubredditNotificationSettings.errors) || void 0 === C ? void 0 : C.length)) return e(b()), e(Object(c.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					j.ok && (e(Object(o.c)({
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
				if (!Object(o.e)(m.a) || !Object(a.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
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
				a = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
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
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				const a = Object(o.e)(d.a);
				return r.a.createElement("div", {
					className: Object(i.a)(t, m.a.container),
					style: n
				}, r.a.createElement(c.a, u({
					className: m.a.button,
					onClick: () => b(s)
				}, a && {
					priority: c.c.Secondary,
					rplStyle: !0
				}), p._("Back to Top", null, {
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
				O = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				v = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				C = e => o.a.createElement(x, e, e.isCommentBoxDesignEnabled ? o.a.createElement(v, null) : o.a.createElement(O, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				y = f(C),
				j = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("CommentsPage~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~cad4f428"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				_ = e => o.a.createElement(j, b({}, e, {
					fallback: o.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = _
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR"
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
					location: s,
					openLoginModal: n,
					openRegisterModal: c,
					origin: m,
					sendEvent: b
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, u.a.Wrapper)
				}, r.a.createElement("span", {
					className: Object(o.a)(u.a.Copy)
				}, p._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), r.a.createElement("div", {
					className: u.a.CTAButtons
				}, r.a.createElement(d.t, {
					className: u.a.LoginLink,
					kind: d.b.ExternalLink,
					priority: d.c.Secondary,
					href: Object(a.a)(s, m, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), b(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Log In", null, {
					hk: "ZR3pC"
				})), r.a.createElement(d.t, {
					className: Object(o.a)(u.a.SignupLink),
					kind: d.b.ExternalLink,
					priority: d.c.Primary,
					href: Object(a.a)(s, m, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), c(), b(Object(l.c)("user_convert")))
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

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v, C, y = s("./node_modules/lodash/defer.js"),
				j = s.n(y),
				_ = s("./src/lib/collectible-expressions/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				k = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				I = s("./src/reddit/helpers/trackers/modTools.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/actions/gold/modals.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/trackers/lightbox.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				U = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				W = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/subreddit.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				q = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(q);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(v || (v = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(C || (C = {}));
			const Y = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(d.a)(s, n)
				},
				Q = e => Object(d.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var J = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				X = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				$ = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ee = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				te = s("./src/reddit/components/ModModeReports/helpers.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				re = s("./src/reddit/components/ReportFlow/new.tsx"),
				oe = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ce = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				me = s("./src/reddit/icons/fonts/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				pe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				be = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				he = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ge = s("./src/reddit/icons/fonts/Report/index.tsx"),
				fe = s("./src/reddit/models/Toast/index.ts"),
				xe = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				Oe = s("./src/devPlatform/constants.ts"),
				ve = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				Ce = s("./src/reddit/selectors/experiments/econ/index.ts"),
				ye = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				je = s.n(ye);
			const _e = E.a.wrapped(ue.a, "CommentIcon", je.a),
				Ee = E.a.wrapped(ge.a, "Report", je.a),
				ke = E.a.wrapped(be.a, "IgnoreReport", je.a),
				Pe = E.a.wrapped(ee.a, "ModActionsMenu", je.a),
				Se = E.a.div("OverflowMenuSpacer", je.a),
				Ie = E.a.wrapped(se.a, "DropdownRow", je.a),
				we = E.a.wrapped(de.a, "Flatlist", je.a),
				Ne = E.a.button("Button", je.a),
				Te = E.a.wrapped(J.a, "ModToolsFlatlist", je.a),
				Le = E.a.wrapped(ae.a, "ViewReportsDropdown", je.a),
				Re = e => `Comment-${e}--Modal--DeleteComment`,
				Fe = e => `Distinguish--Dropdown--${e}`,
				Me = e => `${e}-overflow-menu`,
				Be = e => `View--Reports--${e}`,
				Ae = Object(a.c)({
					claimedFreeAward: W.b,
					currentUser: z.m,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.a)(e) === Re(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.b)(Fe(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.b)(Be(s.id))(e)
					},
					isLoggedIn: z.S,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.z)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.m)(e, {
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
						return Object(D.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(K.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: U.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(V.F)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isAwardsSunsetEnabled: Ce.d,
					isDevPlatformEnabled: e => Object(ve.a)(e)
				});
			class De extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(M.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(I.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(I.g)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						const e = Object(S.a)(this.props.comment);
						Object(_.a)(e) ? this.props.showToast({
							text: n.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: fe.b.SuccessLockComment
						}) : (this.props.sendEvent(Object(I.f)("edit", this.props.comment.id)), this.props.handleEdit())
					}, this.handleGild = async () => {
						var e;
						const t = Object(R.d)(R.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(I.f)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(I.c)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(I.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? B.a.UNFOLLOWED : B.a.FOLLOWED), t(n ? Object(I.h)("follow", s.id) : Object(I.c)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(I.d)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(re.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
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
						modModeEnabled: O,
						postIsArchived: y,
						postAuthorIsBlocked: _,
						postIsLocked: E,
						renderedInOverlay: k,
						sendEvent: P,
						subreddit: S,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: N,
						toggleSendReplies: T,
						trackCommentClick: L,
						isPostUnrepliable: R,
						isAwardsSunsetEnabled: M,
						isDevPlatformEnabled: A
					} = this.props, D = Object(F.a)(x), U = !!s && s.displayText === e.author, W = !!s && s.isEmployee, V = e.unrepliableReason, K = !_ && !Object(B.g)(e) && !R && !V && !R && !(w && w.userIsBanned) && (E || y || D && p || e.isLocked ? D && p : p || m), z = Object(te.a)(e), q = D && U && !e.bannedBy, G = U && W && !e.bannedBy, J = q || G, ee = !M && !Object(B.g)(e) && s && e.isGildable && !R && !(V && "[deleted]" === e.author), ne = !y && !V, re = [];
					K && re.push(o.a.createElement(Ne, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), j()(() => L("reply", e.id)())
						}
					}, o.a.createElement(_e, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), ee && re.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(le.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), re.push(o.a.createElement(oe.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == S ? void 0 : S.type
					}, o.a.createElement(Ne, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || re.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(ge.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), re.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(me.a, {
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
					}), U && re.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(me.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), ne && re.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(me.a, {
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
					const ie = re.map(e => o.a.isValidElement(e) ? e : o.a.createElement(Ne, {
							className: Y(e.breakpointGroup, v.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						ae = re.map(e => o.a.isValidElement(e) ? null : o.a.createElement(Ie, {
							className: Y(e.breakpointGroup, v.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: je.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(we, {
						className: Object(d.a)(Q({
							depth: c,
							isInOverlay: k,
							isModModeEnabled: D && O || A,
							isFollowCommentEnabled: ne
						}), t)
					}, ie, o.a.createElement(Se, {
						className: U ? void 0 : Y(C.LoggedInUser, v.HideIfVWLarger)
					}, o.a.createElement(se.b, {
						className: je.a.overflowMenu,
						disabled: b,
						dropdownId: Me(e.id),
						onClick: () => P(Object(I.c)("comment_overflow_menu", e.id))
					}, ae, U && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ie, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: je.a.dropdownRowText
					}, o.a.createElement(me.a, {
						name: "delete"
					})), o.a.createElement(ce.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(xe.a, {
						contextType: Oe.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(X.a, {
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
						toggleModal: N,
						trackClick: () => {},
						withOverlay: !0
					}), D && o.a.createElement(o.a.Fragment, null, O && o.a.createElement(Te, {
						className: Y(C.Moderator, v.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), o.a.createElement(Pe, {
						className: O ? Y(C.Moderator, v.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => P(Object(I.c)("comment_mod_action_menu", e.id))
					}, o.a.createElement(he.a, null), o.a.createElement(H.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(te.c)(e) && !O && o.a.createElement(Z.a, {
						text: `${z}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Be(e.id)
					}, o.a.createElement(Le, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Be(e.id)
					}), e.ignoreReports ? o.a.createElement(ke, null) : o.a.createElement(Ee, null)), J && o.a.createElement(Z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(pe.a, null), o.a.createElement($.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: W,
						isUserMod: D,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Fe(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Ue = Object(i.b)(Ae, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(T.i)(Re(s.id))), e(Object(P.h)({
								tooltipId: Me(s.id)
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
						onGildClick: (t, n) => e(Object(N.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(L.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(P.h)({
							tooltipId: Fe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(P.h)({
							tooltipId: Be(s.id)
						})),
						showToast: t => e(Object(k.f)(t)),
						toggleDeleteCommentModal: () => e(Object(T.i)(Re(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(ie.c)(De)),
				We = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ve = s.n(We);
			var Ke = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Ve.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ze = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				He = s.n(ze);
			var qe = o.a.memo(e => o.a.createElement("div", {
					className: He.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ge = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Ye = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Qe = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Je = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ze = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Xe = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				$e = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				et = s("./src/reddit/components/ModModeReports/index.tsx"),
				tt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				st = s("./src/reddit/components/RichTextJson/index.tsx"),
				nt = s("./src/reddit/components/UserIcon/index.tsx"),
				rt = s("./src/reddit/components/UserIcon/constants.ts"),
				ot = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				it = s("./src/reddit/helpers/author.ts"),
				at = s("./src/reddit/constants/componentTestIds.ts"),
				ct = s("./src/reddit/contexts/PageLayer/index.tsx"),
				dt = s("./src/reddit/contexts/Visibility.tsx"),
				lt = s("./src/reddit/controls/ErrorText/index.tsx"),
				mt = s("./src/reddit/controls/InternalLink/index.tsx"),
				ut = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				pt = s("./src/reddit/helpers/flair.ts"),
				bt = s("./src/reddit/models/Subreddit/index.ts"),
				ht = s("./src/reddit/models/User/index.ts"),
				gt = s("./src/reddit/models/Vote/index.ts"),
				ft = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				xt = s("./src/reddit/selectors/commentSelector.ts"),
				Ot = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				vt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ct = s("./src/reddit/selectors/moderatorPermissions.ts"),
				yt = s("./src/reddit/selectors/poll/index.ts"),
				jt = s("./src/reddit/selectors/userPrefs.ts"),
				_t = s("./src/reddit/selectors/moderatingComments.ts"),
				Et = s("./src/reddit/components/Comments/Comment/index.m.less"),
				kt = s.n(Et),
				Pt = s("./src/config.ts"),
				St = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				It = s("./src/reddit/components/SubredditIcon/index.tsx"),
				wt = s("./src/reddit/helpers/trackers/comment.ts");

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Tt = 300,
				Lt = E.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", O({}, s, {
						className: Object(d.a)(t, x.a.expandButton)
					}), o.a.createElement(g.a, {
						className: x.a.expandIcon
					}))
				}), "ExpandButton", kt.a),
				Rt = E.a.wrapped(Ue, "FlatList", kt.a),
				Ft = E.a.wrapped(lt.b, "ErrorText", kt.a),
				Mt = E.a.wrapped(Je.a, "HorizontalVotes", kt.a),
				Bt = E.a.div("ActionBar", kt.a),
				At = E.a.wrapped(Ye.a, "TopMeta", kt.a),
				Dt = E.a.div("CommentContentWrapper", kt.a),
				Ut = E.a.wrapped(Ze.b, "AuthorHovercard", kt.a),
				Wt = Object(ct.v)(),
				Vt = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(xt.c)(e, t),
					currentProfileModPermissions: ct.i,
					depth: (e, t) => Object(D.j)(e, t),
					collapsed: _t.b,
					collapsedBecauseCrowdControl: _t.a,
					currentUser: z.m,
					flair: D.e,
					focused: (e, t) => !t.noFocus && Object(D.t)(e, t),
					highlightAnimationDisabled: jt.d,
					isAdmin: z.M,
					isEditing: D.z,
					isLoggedIn: z.S,
					isPendingDeletion: D.E,
					isPresenceConsumptionExpEnabled: vt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(xt.c)(e, t);
						return s ? Object(Ct.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: yt.f,
					modModeEnabled: ct.W,
					errorMsgs: D.I,
					replyFormOpen: D.L,
					subreddit: ct.s,
					subredditType: D.O,
					isOnlineConsumptionLoadTest: vt.a,
					isOnlineUserPref: z.X,
					userIsBanned: (e, t) => {
						const s = Object(xt.c)(e, t);
						return !!s && Object(K.ib)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: Ot.b,
					isBlockingInterstitialV2Enabled: Ot.c
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
							const [n, r] = t === gt.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Kt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				zt = e => o.a.createElement("div", e, e.children),
				Ht = e => o.a.createElement(o.a.Fragment, null, e.children),
				qt = Wt(Vt(e => {
					var t;
					const {
						childrenInfo: s,
						clearHovered: i,
						collapsed: a,
						collapsedBecauseCrowdControl: m,
						comment: u,
						commentsPageKey: b,
						currentProfileModPermissions: g,
						currentUser: f,
						depth: x,
						errorMsgs: O,
						flair: v,
						flatlist: C,
						focused: y,
						hasAwardGradient: j,
						highlightAnimationDisabled: _,
						highlightTreatment: E,
						index: k,
						isActive: P,
						isAdmin: I,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: N,
						isBlockingInterstitialV2Enabled: T,
						isEditing: L,
						isFirstInList: R,
						isHighlighted: M,
						isLoggedIn: A,
						isOnlineConsumptionLoadTest: D,
						isOnlineUserPref: U,
						isPendingDeletion: W,
						isPresenceConsumptionExpEnabled: V,
						moderatorPermissions: K,
						modModeEnabled: z,
						noSpacing: H = !1,
						onCommentAuthorClick: q,
						onCommentTimestampClick: G,
						onCollapseClick: Y,
						onIgnoreReports: Q,
						onLineMouseOver: J,
						onPresenceIndicatorInViewport: Z,
						onVoteClick: X,
						postId: $,
						prediction: ee,
						renderedInOverlay: se,
						replyFormOpen: ne,
						restrictHeight: re,
						rtJSONRedditStyle: oe,
						showBlockingInterstitial: ae,
						subreddit: ce,
						subredditType: de,
						trackCommentClick: le,
						userIconSmall: me,
						userIsBanned: ue,
						onClickRevealSpoilerText: pe,
						onMediaReload: be
					} = e, he = u.isDeleted, ge = !L && !he && !!O && O.length > 0, fe = Object(l.a)(c.c.edit, u.id), xe = Object(l.a)(c.c.replyToComment, u.id), Oe = Object(F.a)(K), ve = Object($e.a)(u), Ce = Object(te.c)(u), ye = u.authorIsContractor && de === bt.g.EmployeesOnly, je = u.isLocked, _e = Oe && z, Ee = !L && !he && (A || w), ke = w && !u.unrepliableReason, Pe = !!f && Object(ht.e)(f) === u.author, [Se, Ie] = Object(r.useState)(null), [we, Ne] = Object(r.useState)(null), Te = Object(r.useRef)(null), Le = Object(B.f)(u) || Object(B.g)(u), Re = Le ? zt : mt.default, Fe = Object(B.f)(u) ? Ht : Ut, Me = Object(ie.b)();
					Object(r.useEffect)(() => {
						if (!L && !he && (j && Ie(o.a.createElement(qe, null)), null !== E)) {
							if (E.glowHexColor) {
								const e = E.glowHexColor;
								Ie(o.a.createElement(Ke, {
									hexColor: e
								}))
							}
							if (E.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = E.effectHighlight;
								Ne(o.a.createElement(Ge.b, {
									prefersReducedAnimation: _,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [L, he, j, _, E]);
					const Be = Object(r.useCallback)(() => {
							Me(Object(wt.c)(u.id))
						}, [Me, u.id]),
						Ae = Object(dt.b)();
					(N || T) && Ae && k >= Ot.a - 1 && ae();
					const De = !he && !Object(B.f)(u) && (!ue || ue && Pe) && !Object(B.g)(u) && A,
						Ue = Object(r.useCallback)(() => {
							De && V && !Pe && Z && Z(u.id)
						}, [u.id, Z, De, V, Pe]),
						We = Object(S.a)(u),
						Ve = !!f && Object(ht.e)(f) === u.author ? null == f ? void 0 : f.accountIcon : u.profileImage,
						ze = Object(St.c)(Ve),
						He = ze || Object(St.b)(Ve);
					return o.a.createElement("div", {
						key: `comment-${u.id}`,
						className: Object(d.a)(`Comment ${u.id}`, kt.a.CommentWrapper, {
							[kt.a.highlightComment]: M,
							[kt.a.deleted]: he,
							[kt.a.focused]: y,
							[kt.a.redesign]: w,
							[kt.a.topLevel]: !x,
							[kt.a.noSpacing]: H
						})
					}, Se, we, !L && !he && R && o.a.createElement("div", {
						className: kt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${Pt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Lt, {
						className: Object(d.a)(u.id, {
							[kt.a.hidden]: !a,
							[kt.a.visible]: a
						}),
						onClick: () => {
							i(), Y(), le("collapse", u.id)()
						},
						onMouseOver: () => J(u.id),
						onMouseOut: i
					}), Object(it.a)(u.author) ? ce ? o.a.createElement(It.b, {
						className: Object(d.a)(kt.a.UserIconContainer, me && kt.a.UserIconContainerSmall),
						subredditOrProfile: ce,
						linkTo: `/user/${u.author}/`
					}) : null : o.a.createElement(Fe, {
						alwaysShowChildren: !0,
						collapsed: a,
						hoverDivClassName: kt.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(B.g)(u),
						postOrComment: u,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: se ? tt.f.Lightbox : void 0
					}, o.a.createElement(Re, {
						className: Object(d.a)(kt.a.UserIconContainer, me && kt.a.UserIconContainerSmall),
						"data-testid": Le ? void 0 : "comment_author_icon",
						onClick: Le ? void 0 : q,
						to: `/user/${u.author}/`
					}, Ae ? o.a.createElement(nt.a, {
						isNft: He,
						className: Object(d.a)(kt.a.UserIcon, {
							[kt.a.v1NftTreatment]: ze
						}),
						iconUrl: Ve,
						isNSFW: u.profileOver18 || !1,
						nsfwIconUrl: rt.a,
						userName: u.author,
						isHighlighted: M,
						shouldShowPresenceIndicator: De && V,
						onPresenceIndicatorInViewport: Ue,
						isCommentAuthorBlocked: Object(B.g)(u),
						collapsed: a,
						shouldUseOnlineOverride: Pe,
						isOnlineOverrideValue: U,
						isOnlineStatusLoadTest: De && D,
						authorId: u.authorId
					}) : o.a.createElement("div", {
						className: kt.a.UserIcon
					}))), o.a.createElement(Dt, {
						className: Object(d.a)({
							[kt.a.isActive]: P,
							[kt.a.isCollapsed]: a,
							[kt.a.isLocked]: je && _e,
							[kt.a.isPendingDeletion]: W,
							[kt.a.isRemoved]: !!u.bannedBy && _e || u.isDeleted && I
						})
					}, o.a.createElement(ut.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(At, {
						userHasNft: He,
						childrenInfo: s,
						className: Object(d.a)({
							[kt.a.collapsed]: a,
							[kt.a.noFlair]: Object(pt.o)(v || null)
						}),
						collapsed: a,
						collapsedBecauseCrowdControl: m,
						comment: u,
						commentsPageKey: b,
						flair: v,
						isAdmin: I,
						isPostComment: !0,
						onCommentAuthorClick: q,
						onCommentTimestampClick: G,
						renderedInOverlay: se,
						renderContractorBadge: ye
					}), !a && o.a.createElement(r.Fragment, null, L && o.a.createElement(h.a, {
						className: Object(d.a)(kt.a.EditCommentForm, kt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: b,
						depth: x,
						draftType: c.c.edit,
						draftKey: fe,
						postId: $,
						rtJson: Object(S.a)(u),
						mediaMetadata: u.media && u.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: u.id,
						submitAction: e => Object(p.j)({
							id: u.id,
							commentsPageKey: b,
							draftKey: fe,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !L && (!he || I) && o.a.createElement("div", {
						"data-testid": at.d,
						ref: Te,
						className: Object(d.a)(kt.a.CommentBody, {
							[kt.a.restrictHeight]: !(!re || !Te.current) && Te.current.clientHeight > Tt
						})
					}, ee ? o.a.createElement(Qe.a, {
						comment: u,
						prediction: ee
					}) : o.a.createElement(st.b, {
						content: We,
						mediaMetadata: u.media && u.media.mediaMetadata,
						expressionAssetData: null === (t = u.media) || void 0 === t ? void 0 : t.expressionAssetData,
						redditStyle: oe,
						rtJsonElementProps: Kt(e),
						onClickRevealSpoilerText: pe,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: be,
							onClick: Be
						}
					}), o.a.createElement(ft.b, {
						content: We
					})), z && Oe && ve && o.a.createElement(Xe.a, {
						thing: u
					}), z && Oe && Ce && o.a.createElement(et.a, {
						onIgnoreReports: Q,
						reportable: u
					}), null != C ? C : Ee && o.a.createElement(Bt, null, ke && o.a.createElement(Mt, {
						downvoteButtonClassName: kt.a.voteButton,
						downvoteClassName: kt.a.upDownVote,
						model: u,
						onVoteClick: X,
						scoreClassName: kt.a.score,
						upvoteButtonClassName: kt.a.voteButton,
						upvoteClassName: kt.a.upDownVote
					}), o.a.createElement(Rt, {
						comment: u,
						commentsPageKey: b,
						depth: x,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: m,
						modModeEnabled: z,
						moderatorPermissions: g || K,
						renderedInOverlay: se,
						isCommentFocused: y,
						subreddit: ce,
						trackCommentClick: le
					})), ge && O.map(e => o.a.createElement(Ft, {
						key: e
					}, e)), ne && o.a.createElement(h.a, {
						className: Object(d.a)(kt.a.EditCommentForm, kt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: b,
						depth: x,
						draftType: c.c.replyToComment,
						draftKey: xe,
						isTopLevelComment: !1,
						parentCommentId: u.id,
						postId: $,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: b,
								draftKey: xe,
								parentCommentDepth: x,
								parentCommentId: u.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: b,
								draftKey: xe,
								parentCommentDepth: x,
								parentCommentId: u.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => o.a.createElement(ot.a.Consumer, null, t => o.a.createElement(qt, Nt({}, e, {
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
				return P
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return U
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
				O = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				C = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				y = s("./src/reddit/components/Comments/States/index.m.less"),
				j = s.n(y);
			const _ = l.a.p("EmptyTitle", j.a),
				E = l.a.p("ErrorTitle", j.a),
				k = l.a.p("EmptyText", j.a),
				P = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(j.a.StateContainer, t)
					}, s ? a.a.createElement(v.a, {
						className: j.a.LiveChatIcon
					}) : a.a.createElement(O.a, {
						className: j.a.CommentsIcon
					}), a.a.createElement(_, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				S = () => a.a.createElement("div", {
					className: j.a.StateContainer
				}, a.a.createElement(O.a, {
					className: j.a.CommentsIcon
				}), a.a.createElement(_, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				I = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: j.a.StateContainer
					}, a.a.createElement(O.a, {
						className: j.a.CommentsIcon
					}), a.a.createElement(_, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(p.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				w = Object(c.b)(null, (e, t) => {
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
						className: j.a.StateContainer
					}, a.a.createElement(C.a, {
						className: j.a.SnooFacepalm
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
						className: Object(d.a)(j.a.StateContainer, j.a.ErrorFullPage)
					}, a.a.createElement(w, {
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
				}, "LoadingFullPage", j.a),
				L = l.a.div("CommentsPlaceholderContainer", j.a),
				R = l.a.div("CommentPlaceholder", j.a),
				F = l.a.div("Avatar", j.a),
				M = l.a.div("VoteColumn", j.a),
				B = l.a.div("TextColumn", j.a),
				A = () => a.a.createElement("div", {
					className: Object(d.a)(j.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(d.a)(j.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = e => {
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
						className: j.a.Upvote
					}), a.a.createElement(f.a, {
						className: j.a.Downvote
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
				O = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/constants/gold.ts"),
				C = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const y = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: j,
							effectHighlight: {
								type: C.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				j = "ff0000";

			function _(e) {
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
				for (const t of y) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return E
			}
			var P = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				S = s("./src/reddit/selectors/comments.ts"),
				I = s("./src/reddit/selectors/commentSelector.ts"),
				w = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/Comments/Comment/index.tsx"),
				F = s("./src/lib/scroll/index.ts"),
				M = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				A = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				U = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				W = s.n(U);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = p.a.wrapped(D.a, "ArrowRight", W.a), z = p.a.wrapped(M.a, "LinkOrOverlayLink", W.a), H = p.a.span("HoverSpan", W.a), q = Object(l.c)({
				permalink: (e, t) => Object(S.m)(e, {
					commentId: Object(S.r)(e, t).parentId
				})
			});
			var G = Object(d.b)(q)(Object(B.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return c.a.createElement("div", {
						className: Object(m.a)(W.a.Wrapper, {
							[W.a.isActive]: t
						})
					}, c.a.createElement(z, {
						isOverlay: !!s,
						to: Object(A.b)(n),
						onClick: F.b
					}, c.a.createElement(H, null, V._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", c.a.createElement(K, null)))
				})),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Q = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				J = s.n(Q);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = p.a.div("MoreCommentsItemWrapper", J.a), $ = p.a.p("MoreComments", J.a), ee = p.a.wrapped($, "MoreCommentsInteractive", J.a), te = Object(l.c)({
				moreCommentsItem: S.F,
				moreCommentsPending: S.G
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
					className: O.m
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
				pe = s("./src/reddit/selectors/experiments/econ/index.ts"),
				be = s("./src/reddit/selectors/moderatingComments.ts"),
				he = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				ge = s.n(he);
			const fe = p.a.div("CommentListNodeWrapper", ge.a),
				xe = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(O.f)
				},
				Oe = () => {
					const e = document.querySelectorAll(`.${O.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(O.f)
				};
			var ve = Object(d.b)(() => Object(l.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(be.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(S.l)(e, t),
				depth: (e, t) => Object(S.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t;
					if (Object(pe.d)(e)) return null;
					let n = null;
					const r = Object(S.l)(e, {
						commentLink: s
					});
					if (r && s.type === f.a.Comment) {
						n = _(r.treatmentTags)
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
					if (Object(pe.d)(e)) return !1;
					const n = Object(S.l)(e, {
						commentLink: s
					});
					return !(s.type !== f.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(w.a)(e, t);
						return s && s.coinPrice >= v.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(S.p)(e);
					if (n === P.a.None) return !1;
					if (s.type !== f.a.Comment) return !1;
					const r = s.id,
						o = Object(I.c)(e, {
							commentId: r
						});
					if (!o) return !1;
					const i = Object(L.x)(e),
						a = !!Object(N.m)(e, {
							postId: o.postId
						}),
						c = Object(T.F)(e, {
							postId: o.postId
						});
					if (!c || !c.previousVisits || c.previousVisits.length < 1) return !1;
					const d = n === P.a.Last ? c.previousVisits[c.previousVisits.length - 1] : c.previousVisits[0];
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
					onLineClick: O,
					onPresenceIndicatorInViewport: v,
					onShortLineClick: C,
					parentNodeIds: y,
					postId: j,
					renderedInOverlay: _,
					scrollToAndRemeasure: E,
					showBlockingInterstitial: k
				} = e, P = !!p, S = !(!a || !a.glowHexColor), I = S && i > 0, w = S, N = c.a.createElement(fe, {
					className: Object(m.a)(s, {
						[ge.a.isHidden]: h,
						[ge.a.glowBorderTopPadding]: I,
						[ge.a.glowBorderBottomPadding]: w
					}),
					id: r.id,
					style: {
						paddingLeft: i * (x.v + x.u) + (r.type === f.a.Comment ? x.v : 0)
					},
					tabIndex: -1
				}, c.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: I,
					onLineClick: O,
					onLineMouseOver: xe,
					onLineMouseOut: Oe,
					onShortLineClick: C,
					type: r.type,
					parentNodeIds: y
				}), Ce({
					childrenInfo: t,
					clearHovered: Oe,
					commentLink: r,
					commentsPageKey: o,
					onLineMouseOver: xe,
					hasAwardGradient: P,
					highlightTreatment: a,
					index: d,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isFirstInList: b,
					isHighlighted: g,
					postId: j,
					renderedInOverlay: _,
					scrollToAndRemeasure: E,
					onPresenceIndicatorInViewport: v,
					showBlockingInterstitial: k
				}));
				return u && r.type === f.a.Comment ? c.a.createElement(me.a, null, N) : N
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
					isActive: d,
					isAvatarsInCommentsEnabled: l,
					isFirstInList: m,
					isHighlighted: u,
					onLineMouseOver: p,
					postId: b,
					renderedInOverlay: h,
					scrollToAndRemeasure: g,
					onPresenceIndicatorInViewport: x,
					showBlockingInterstitial: O
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
							showBlockingInterstitial: O
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
				je = s("./src/reddit/components/Comments/States/index.tsx"),
				_e = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ke = s("./src/reddit/constants/elementIds.ts"),
				Pe = s("./src/reddit/featureFlags/index.ts"),
				Se = s("./src/reddit/helpers/commentList/index.ts"),
				Ie = s("./src/reddit/helpers/trackers/comment.ts"),
				we = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ne = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Te = s("./src/telemetry/index.ts"),
				Le = s("./src/lib/LRUCache/index.ts"),
				Re = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Fe = s("./src/reddit/selectors/telemetry.ts");
			const Me = e => t => ({
				...Object(Fe.q)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Fe.d)(t, {
					reason: String(e)
				})
			});
			var Be = s("./src/reddit/components/Comments/index.m.less"),
				Ae = s.n(Be);
			const De = x.f + 10,
				Ue = 65,
				We = p.a.wrapped(_e.b, "Scroller", Ae.a),
				Ve = Object(l.c)({
					allCollapsed: S.a,
					commentLinks: S.k,
					commentThreadLinkSet: S.o,
					measureScrollFPS: Pe.d.measureScrollFPS,
					moreComments: S.b,
					postPermalink: T.E
				}),
				Ke = Object(d.b)(Ve, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.f)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.i)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.Y)(Object(A.b)(t)))
				})),
				ze = new Le.a(500),
				He = new Le.a(500),
				qe = (e, t) => {
					const s = `entered-${e}`;
					let n = ze.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, ze.set(s, n)), n
				},
				Ge = (e, t) => {
					const s = `left-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, He.set(s, n)), n
				};
			class Ye extends c.a.Component {
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
					}, u.L, {
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
					this.timerId && Te.c.cancel(this.timerId), e.length && (this.timerId = Te.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Te.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Te.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Ne.a && this.props.sendEvent(Me(this.props.commentLinks.length))
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
					this.timerId && Te.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Te.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Te.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Te.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Te.c.cancel(this.timerId)
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
					} = this.props, a = qe(e.id, n), d = Ge(e.id, r);
					return {
						estHeight: ye.b(e.id) ? 0 : Ue,
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
						className: Object(m.a)(Ae.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(ke.e) : null,
						onScroll: i,
						onAllChildrenRendered: r,
						preventScrollOnMount: !0,
						scrollToChildPadding: De,
						trackingName: a
					}, d)
				}
				renderEmptyState() {
					return this.props.commentId ? c.a.createElement(je.g, {
						link: this.props.postPermalink
					}) : c.a.createElement(je.c, null)
				}
			}
			t.a = Ke(Object(Ee.c)(Object(Re.a)(Object(we.d)(Ye))))
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
				importAsync: () => Promise.all([s.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: () => r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null))
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
				O = s("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				v = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				C = s("./src/reddit/components/SidebarFooter/index.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_ = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				E = s("./src/reddit/components/Widgets/Recommendations/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/index.tsx"),
				P = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				S = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				I = s("./src/reddit/constants/experiments.ts"),
				w = s("./src/reddit/featureFlags/component.tsx"),
				N = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				R = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				M = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx"),
				U = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				W = s.n(U);
			const V = Object(w.a)("spPoints", h.a),
				K = Object(w.a)("spLeaderboard", g.a),
				z = Object(n.a)({
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
				H = Object(d.c)({
					d2xPdpSideRailRecsVariant: L.a,
					isD2xPdpSideRailRecsEnabled: L.b,
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(T.s)(s) && !n && Object(R.a)(e) === I.Ue.NewModule
					},
					isLoggedIn: A.S,
					postSEOV2IdCardVariant: F.h,
					shouldShowReredditPromo: M.a,
					widgets: Object(u.a)(B.x)
				}),
				q = Object(c.b)(H);
			class G extends a.a.Component {
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
					} = this.props, m = Object(F.c)(o) || Object(F.f)(o), u = s === I.kd.GreyRereddit || s === I.kd.LargeImagePreview, b = s === I.kd.GreyRedditNoNsfw, h = i && (u || b) ? a.a.createElement(k.ReredditButtons, {
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
					}), a.a.createElement(y.a, null, a.a.createElement(D.a, null, !(r.isNSFW && b) && a.a.createElement(E.a, {
						post: r,
						subredditOrProfile: d
					}), i && !u && !b && a.a.createElement(P.a, {
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
					} = this.props, c = !Object(F.c)(o) && !Object(F.f)(o);
					return a.a.createElement(j.a, {
						adComponentOnFakeOverlay: s,
						adComponent: c ? a.a.createElement(v.a, {
							postId: r.id,
							isOverlay: n,
							listingName: i,
							placement: m.e.BELOW_THE_FOLD,
							placementIndex: e,
							position: N.a.BOTTOM,
							refreshKey: r.id,
							sizes: m.p,
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
					const C = Object(F.c)(c) || Object(F.f)(c),
						j = a.a.createElement(v.a, {
							postId: i.id,
							isOverlay: o,
							listingName: p,
							placement: m.e.ABOVE_THE_FOLD,
							placementIndex: g++,
							position: N.a.FIRST,
							refreshKey: i.id,
							sizes: m.j,
							commentsPageKey: t
						});
					return !Object(T.s)(i) && s ? this.renderRecommendationsSidebar() : a.a.createElement("div", {
						className: Object(l.a)(W.a.outerWrapper, e)
					}, n && a.a.createElement(x.default, {
						subredditId: u,
						subredditName: p
					}), Object(T.s)(i) ? a.a.createElement(z, {
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
					}), a.a.createElement(V, {
						className: W.a.card,
						subredditId: u,
						uniqueId: i.id
					}), a.a.createElement(K, {
						className: W.a.card,
						subredditId: u,
						uniqueId: i.id
					}), !o && a.a.createElement(O.a, null), j, r && h.map((e, t) => a.a.createElement(y.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(S.a, {
						subredditName: p,
						widget: e
					}))), i.isSponsored && a.a.createElement(y.a, null, a.a.createElement(_.a, null)), d && a.a.createElement(P.a, {
						directoryTimestamp: i.created,
						postId: i.id
					}), this.renderFooter(g++))
				}
			}
			t.a = q(G)
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
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(v),
				y = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 8,
				E = 1,
				k = y.a.div("Container", C.a),
				P = y.a.div("PostMetaWrapper", C.a),
				S = y.a.wrapped(p.c, "PostTitle", C.a),
				I = y.a.div("FlatList", C.a),
				w = y.a.div("FlatItem", C.a),
				N = y.a.span("FlatListDotSpacer", C.a),
				T = y.a.wrapped(k, "LinkContainer", C.a),
				L = y.a.div("Content", C.a),
				R = y.a.div("ThumbnailContainer", C.a),
				F = Object(c.c)({
					isCurrentUserProfilePost: x.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.Sb.TOPIC),
					shouldOpenPostInNewTab: O.lb
				}),
				M = Object(i.b)(F);
			t.c = Object(f.b)(M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return i && !i.media ? o.a.createElement(T, {
					className: d
				}, o.a.createElement(L, null, o.a.createElement(P, null, o.a.createElement(u.a, c)), B(i), i.source && o.a.createElement(b.a, {
					post: i
				}), D(e)), W(e)) : o.a.createElement(k, {
					className: d
				}, o.a.createElement(P, null, o.a.createElement(u.a, c)), B(i), A(e), D(e))
			}));
			const B = e => o.a.createElement(S, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(m.a, j({}, n, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(I, null, o.a.createElement(w, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(N, null), o.a.createElement(w, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				W = e => o.a.createElement(R, null, o.a.createElement(h.b, {
					post: e.post
				}))
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
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				a = s("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const {
					post: t
				} = e, s = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(i.G)(t) ? r.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, r.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, r.a.createElement("div", {
					className: "my-md leading-5 text-neutral-content"
				}, r.a.createElement("p", {
					className: "text-[16px] max-w-[260px]"
				}, c._("To view this interactive post, you'll need to open it in a new window.", null, {
					hk: "27Ub4M"
				}))), r.a.createElement(o.a, {
					className: "m-auto",
					kind: o.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: o.c.Primary,
					rplStyle: !0
				}, r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, {
					className: "ml-0 m-xs"
				}), c._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
			}
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
					m = Object(i.e)(e => Object(d.U)(e, {
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
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(v);
			const y = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(C.a.icon, C.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return o.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return o.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return o.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return o.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return o.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return o.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return o.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return o.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = y(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: v,
					useMediaIcons: y
				} = e, _ = s || h, E = Object(i.e)(f.b), k = Object(i.e)(f.c), P = t => {
					(E || k) && (t.preventDefault(), e.showModalOnPostLinkClick(_))
				}, S = _.media, I = Object(g.q)(h), w = r && !!s;
				return S && !I && !(("rtjson" === S.type || "text" === S.type || "liveaudio" === S.type) && !Object(p.a)(_)) || !!h.pollData ? o.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": O.a.MEDIA,
					onClick: v
				}, u ? o.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : y ? o.a.createElement(o.a.Fragment, null, j(_.media && _.media.type, w, h), o.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(C.a.icon, C.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : _.source && _.source.url ? o.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: _.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(_.permalink),
					rel: "nofollow",
					onClick: P
				}, o.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less": function(e, t, s) {
			e.exports = {
				AnnouncementContainer: "_2n96dzZYei5koZIof4hNGb",
				announcementContainer: "_2n96dzZYei5koZIof4hNGb",
				Title: "_2_60e51mes8qIV48MFyxwe",
				title: "_2_60e51mes8qIV48MFyxwe",
				Description: "_1ADicmI89099yV3e3zrjUD",
				description: "_1ADicmI89099yV3e3zrjUD",
				Button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				CloseButton: "_1KlaD5sga3um3ZmSli7uwr",
				closeButton: "_1KlaD5sga3um3ZmSli7uwr",
				iconStyles: "_1vyFrq5zn33vVTIC_LlCmR"
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
				return O
			})), s.d(t, "c", (function() {
				return v
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
			}, O = (e, t, s) => {
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
			}, v = e => {
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
					if ((null == e ? void 0 : e.media) && Object(o.M)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(r.e)(e.media.richtextContent.document, !0);
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
				O = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var C = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/telemetry/index.ts"),
				j = s("./src/reddit/components/ItemCarousel/index.m.less"),
				_ = s.n(j);
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
					thumbnail: j,
					isNsfw: E,
					subreddit: k
				} = t, P = Object(d.e)(e => e);
				Object(a.useEffect)(() => {
					s && k && Object(y.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...v.q(s)
					}))(s, k)(P))
				}, []);
				return c.a.createElement(x.a, {
					to: (null == o ? void 0 : o.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(_.a.redditLinkCard, r),
					onClick: () => {
						Object(y.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...v.q(s)
						}))(s, k)(P))
					}
				}, c.a.createElement("div", {
					className: Object(n.a)(_.a.imageContainer)
				}, (null == j ? void 0 : j.url) ? c.a.createElement("img", {
					src: j.url,
					className: Object(n.a)(E && _.a.blur)
				}) : c.a.createElement(f.a, {
					type: "text",
					className: _.a.thumbnailPlaceholder
				})), c.a.createElement("div", {
					className: _.a.postDescription
				}, c.a.createElement("div", null, c.a.createElement("div", {
					className: _.a.title
				}, u), E && c.a.createElement(O.c, {
					isFlairFilter: !0,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					},
					className: _.a.flair
				})), c.a.createElement("div", {
					className: _.a.postStats
				}, m && c.a.createElement(c.a.Fragment, null, c.a.createElement("span", null, Object(h.b)(m), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), c.a.createElement("span", {
					className: _.a.separator
				}, "•")), i && c.a.createElement("span", null, Object(h.b)(i), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), c.a.createElement("span", {
					className: _.a.separator
				}, "•"), l && c.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Wb, !0)))))
			};
			var k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				w = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
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
					s && b && Object(y.a)(Object(w.c)(s, b)(h))
				}, [s, b, h]);
				return c.a.createElement(x.a, {
					to: o,
					className: Object(n.a)(_.a.redditLinkCard, _.a.crosspostLinkCard, r),
					onClick: () => {
						Object(y.a)(Object(w.a)(s, b)(h))
					}
				}, c.a.createElement("div", {
					className: Object(n.a)(_.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? c.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(u && _.a.blur)
				}) : c.a.createElement(f.a, {
					type: "text",
					className: _.a.thumbnailPlaceholder
				})), c.a.createElement("div", {
					className: _.a.postDescription
				}, c.a.createElement("div", {
					className: _.a.postStats
				}, c.a.createElement(N.a, {
					className: _.a.crosspostIcon
				}), c.a.createElement(I.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: _.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), c.a.createElement("span", {
					className: _.a.separator
				}, "•"), c.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), c.a.createElement("div", {
					className: Object(n.a)(_.a.title, _.a.crosspostTitle)
				}, u && c.a.createElement(O.c, {
					isFlairFilter: !0,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					},
					className: _.a.flair
				}), l)))
			};
			var L = c.a.memo(e => {
					let {
						className: t
					} = e;
					return c.a.createElement("div", {
						className: Object(n.a)(_.a.redditLinkCard, t)
					}, c.a.createElement("div", {
						className: Object(n.a)(_.a.shimmer, _.a.imageContainer)
					}), c.a.createElement("div", {
						className: _.a.postDescription
					}, c.a.createElement("div", {
						className: Object(n.a)(_.a.shimmer, _.a.title)
					}), c.a.createElement("div", {
						className: Object(n.a)(_.a.shimmer, _.a.postStats)
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
					post: j,
					className: E,
					isNsfw: k
				} = e;
				const P = Object(d.d)();
				Object(a.useEffect)(() => {
					P(Object(R.u)(r))
				}, [P, r]);
				const S = Object(d.e)(e => Object(u.X)(e, {
						subredditId: t
					})),
					w = Object(d.e)(e => e);
				Object(a.useEffect)(() => {
					j && S && x && Object(y.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...v.q(s)
					}))(j, S)(w))
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
							subreddit: Object(u.X)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: j,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, p]);
				return c.a.createElement("div", {
					className: Object(n.a)(_.a.subredditItem, null === _.a || void 0 === _.a ? void 0 : _.a[f], E)
				}, c.a.createElement("div", {
					className: _.a.contentWrapper
				}, c.a.createElement("div", {
					className: _.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, c.a.createElement("img", {
					className: _.a.banner,
					src: b || void 0
				})), c.a.createElement("div", {
					className: _.a.carouselContent
				}, c.a.createElement(I.a, {
					to: g,
					className: _.a.lockup,
					onClick: () => {
						x && Object(y.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...v.q(s)
						}))(j, S)(w))
					}
				}, c.a.createElement("div", {
					style: "small" === f ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: _.a.backgroundImage
				}, m ? c.a.createElement("img", {
					src: m,
					className: _.a.subredditIcon
				}) : c.a.createElement(B.a, {
					className: _.a.subredditIcon
				})), c.a.createElement("div", {
					className: _.a.lockupText
				}, c.a.createElement("span", {
					className: _.a.subredditName
				}, "r/", r), " ", k && c.a.createElement(O.c, {
					isFlairFilter: !0,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					},
					className: _.a.flair
				}), c.a.createElement("span", {
					className: _.a.subscribersCount
				}, A._({
					"*": "{number} members",
					_1: "1 member"
				}, [A._plural(o, "number", Object(h.b)(o))], {
					hk: "4yqFU9"
				})))), c.a.createElement("p", {
					className: _.a.description
				}, i)), c.a.createElement(F.a, {
					className: _.a.subscribeButton,
					identifier: {
						name: r,
						type: "subreddit"
					},
					getEventFactory: N,
					priority: M.c.Tertiary,
					small: !0
				})))
			};

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, K = Object(S.c)(e => {
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
					[O, v] = Object(a.useState)(null),
					[C, y] = Object(a.useState)(null),
					[j, S] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[I, w] = Object(a.useState)(0),
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
							case P.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case P.a.POST:
								r && (e.postUrls[n] = r), e.postIds.push(n);
								break;
							case P.a.CROSSPOST:
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
					W = Object(d.e)(e => Object(k.K)(e, M)),
					K = Object(d.e)(e => Object(k.K)(e, F)),
					z = A.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					H = W.reduce((e, t) => (e[t.id] = t, e), {}),
					q = K.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == R ? void 0 : R.length) || M.length || F.length) && x(Object(l.e)(R, b, R, h, [...F, ...M]))
				}, [R, F, M, x, h, b]);
				const G = o.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case P.a.SUBREDDIT:
								const t = null == z ? void 0 : z[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case P.a.POST:
								const r = null == H ? void 0 : H[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								});
								break;
							case P.a.CROSSPOST:
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
						if (!C) return;
						const n = null === (s = null === (t = null == C ? void 0 : C.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const r = (Math.sign(e) ? C.scrollLeft % n : n % C.scrollLeft) || 0,
							o = n * e - r;
						C.scrollBy({
							left: o,
							behavior: "smooth"
						})
					},
					Q = Object(a.useCallback)(() => {
						if (!C) return;
						const {
							width: e
						} = null == C ? void 0 : C.getBoundingClientRect(), t = (null == C ? void 0 : C.scrollLeft) > 0, s = (null == C ? void 0 : C.scrollLeft) < C.scrollWidth - e;
						0 === (null == C ? void 0 : C.scrollLeft) && C.scrollWidth - e == 0 || S({
							left: t,
							right: s
						})
					}, [C]);
				Object(a.useEffect)(() => {
					if (!O || !C) return;
					const e = i()(() => {
						const e = V(C);
						w(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = V(C);
					return w(t), Q(), () => {
						window.removeEventListener("resize", e)
					}
				}, [O, C, Q, I, G.length]);
				const J = () => 1 === G.length ? _.a.flexWidth : 2 === G.length ? _.a.flexWidthTwoItems : _.a.constantWidth;
				return c.a.createElement("div", {
					ref: v,
					className: Object(n.a)(_.a.carouselContainer, s, null === _.a || void 0 === _.a ? void 0 : _.a[p])
				}, c.a.createElement("div", {
					className: _.a.carouselHeader,
					style: {
						width: N
					}
				}, c.a.createElement("h3", {
					className: _.a.carouselTitle
				}, t)), c.a.createElement("div", {
					ref: y,
					onScroll: Q,
					className: Object(n.a)(_.a.itemsContainer, null === _.a || void 0 === _.a ? void 0 : _.a[p]),
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
						case P.a.SUBREDDIT:
							const e = n;
							return c.a.createElement(D, U({
								className: J(),
								index: t + 1,
								size: p,
								banner: null === _.a || void 0 === _.a ? void 0 : _.a.bannerBackgroundImage,
								icon: (null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.icon) || (null === (i = null === (o = e.styles) || void 0 === o ? void 0 : o.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: f
							}, e));
						case P.a.POST:
							const s = n;
							return c.a.createElement(E, {
								postCard: {
									...s,
									url: B[s.id]
								},
								className: J(),
								post: f
							});
						case P.a.CROSSPOST:
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
					className: Object(n.a)(_.a.carouselControls, {
						[_.a.hasTitle]: !!t
					})
				}, c.a.createElement("div", {
					className: Object(n.a)(_.a.buttonWrapper, _.a.left, {
						[_.a.hidden]: !j.left
					})
				}, c.a.createElement("button", {
					className: _.a.scrollButton,
					onClick: Y(-I)
				}, c.a.createElement(m.a, {
					name: r.a.left_fill,
					className: _.a.scrollIcon
				}))), c.a.createElement("div", {
					className: Object(n.a)(_.a.buttonWrapper, _.a.right, {
						[_.a.hidden]: !j.right
					})
				}, c.a.createElement("button", {
					className: _.a.scrollButton,
					onClick: Y(I)
				}, c.a.createElement(m.a, {
					name: r.a.right_fill,
					className: _.a.scrollIcon
				})))))
			});
			t.a = K
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
					shouldShowSubscribeButton: O,
					subredditOrProfile: v,
					templatePlaceholderImage: C,
					shouldShowFollowButton: y,
					isFollowed: j,
					isCommentsPage: _,
					onFollowPostClick: E
				} = e;
				const k = Object(b.a)(),
					P = Object(i.e)(g.a);
				return k ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(a.a)(x.a.thumbnailContainer, {
						[x.a.mShowingButtonOrOverflow]: y || O
					})
				}, o.a.createElement("div", {
					className: x.a.thumbnailContainerRow
				}, y && o.a.createElement(c.a, {
					isFilled: !!j,
					onClick: E,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), O && v && o.a.createElement(d.a, {
					className: x.a.subscribeButton,
					getEventFactory: e => Object(p.n)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: v.name,
						type: Object(h.i)(v) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: s.id,
					small: !0,
					priority: P ? u.c.Secondary : void 0,
					isShredditParityEnabled: P
				})), o.a.createElement(l.b, {
					crosspost: t,
					isCommentsPage: _,
					post: s,
					redditStyle: f,
					forceShowNSFW: r,
					templatePlaceholderImage: C
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
				O = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/ImageInput/index.tsx"),
				C = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				y = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				E = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				k = s("./src/reddit/models/ApiRequestState/index.ts"),
				P = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				S = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(w);
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
				}, t ? r.a.createElement(j.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : r.a.createElement(j.a, {
					name: a,
					className: N.a.Icon
				})), r.a.createElement("span", {
					className: N.a.CardTitle
				}, o)))
			}, R = Object(a.c)({
				isTooltipOpen: e => Object(I.a)(e) === p.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: S.c
			});
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(k.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => r.a.createElement(v.a, {
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
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(y.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(y.b)(e, t))
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
						}, r.a.createElement(_.a, {
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
						}, r.a.createElement(_.a, {
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
						const t = e.status === P.a.COMPLETED;
						return L(e, t, () => this.onClickCard(h, e.id))
					})), g && r.a.createElement(O.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: O.c.Tertiary
					}, T._("Close", null, {
						hk: "3UZAZk"
					})), r.a.createElement(b.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const M = Object(o.b)(R, (e, t) => ({
				onCompleteModule: () => e(Object(C.c)(t.subredditId, P.d)),
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
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, s) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = s.n(d),
				m = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/contexts/ApiContext.tsx"),
				p = s("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = s("./src/reddit/constants/tracking.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const g = "bottom_sheet";
			var f;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(f || (f = {}));
			var x = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/eligibleUXExperiences.ts"),
				y = s("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				j = s("./src/reddit/selectors/meta.ts"),
				_ = s("./src/redditGQL/types.ts");
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				const {
					gqlContext: t
				} = e, s = Object(o.d)(), d = Object(x.a)(), u = Object(o.e)(j.b), [C, y] = Object(n.useState)(!1), [k, P] = Object(n.useState)({}), [S, I] = Object(n.useState)({}), [w, N] = Object(n.useState)([]);
				let T = ["es"];
				const L = Object(n.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (I(e.languages), N(e.preferences), y(!0))
				}, [t]);
				Object(n.useEffect)(() => {
					L()
				}, [L]);
				const R = e => {
						d("skip" === e ? (e => t => ({
							...Object(h.q)(t),
							source: g,
							action: b.c.CLICK,
							noun: f.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(u) : (e => t => ({
							...Object(h.q)(t),
							source: g,
							action: b.c.CLICK,
							noun: f.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(u)), y(!1), s(Object(a.c)({
							experience: _.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					F = () => {
						const e = Object.keys(k).join();
						d(((e, t) => s => ({
							...Object(h.q)(s),
							source: g,
							action: b.c.CLICK,
							noun: f.ADD,
							actionInfo: {
								...Object(h.d)(s),
								reason: t,
								type: e
							}
						}))(u, e)), (async () => {
							var e;
							const n = k;
							w.map(e => n[e] = !0);
							const r = await Object(p.d)(t, n);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? s(Object(c.f)({
								kind: v.b.SuccessCommunity,
								text: E._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): s(Object(c.f)({
								kind: v.b.Error,
								text: E._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), y(!1), s(Object(a.c)({
							experience: _.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return T = T.filter(e => !w.includes(e)), C && 0 !== T.length ? (d((e => t => ({
					...Object(h.q)(t),
					source: g,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(u)), s(Object(a.d)(_.db.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: l.a.PromptContainer
				}, r.a.createElement("div", {
					className: l.a.PromptClose
				}, r.a.createElement(O.a, {
					className: l.a.Close,
					onClick: () => R("skip"),
					"data-testid": m.e
				})), r.a.createElement("div", {
					className: l.a.PromptTitle
				}, E._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, E._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === T.length ? r.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = k;
						t[e] = !0, P(t), F()
					})(T[0]),
					"data-testid": T[0]
				}, E._("Add {language}", [E._param("language", S[T[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(i.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => R("later")
				}, E._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(u.b)(e => {
				var t;
				const {
					gqlContext: s
				} = e, n = Object(o.f)().getState();
				return (null === (t = Object(o.e)(e => Object(C.a)(e, {
					experience: _.db.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(y.b)(n) ? r.a.createElement(k, {
					gqlContext: s
				}) : null
			})
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
				return Nt
			})), s.d(t, "b", (function() {
				return Tt
			})), s.d(t, "a", (function() {
				return Lt
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
				O = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				j = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				P = s("./src/reddit/actions/tooltip.ts"),
				S = s("./node_modules/lodash/find.js"),
				I = s.n(S),
				w = s("./node_modules/react-motion/lib/react-motion.js");
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
					const s = I()(e, {
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
							opacity: Object(w.spring)(1, N)
						}
					}] : [{
						key: T,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: T,
						style: {
							opacity: Object(w.spring)(0, N)
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
					return i.a.createElement(w.TransitionMotion, {
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
				U = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				K = s("./src/reddit/selectors/postCreations.ts"),
				z = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				G = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Y = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				Q = s("./src/reddit/components/BoostPost/index.ts"),
				J = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Z = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				X = s("./src/reddit/components/Econ/Audio/async.ts"),
				$ = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				ee = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				te = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				se = s("./src/reddit/components/ExpandoButton/index.tsx"),
				ne = s("./src/reddit/components/FlairWrapper/index.tsx"),
				re = s("./src/reddit/components/Flatlist/index.tsx"),
				oe = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				ie = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				ae = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ce = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				de = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				le = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				me = s("./src/reddit/components/ModModeReports/index.tsx"),
				ue = s("./src/reddit/components/ModModeReports/helpers.ts"),
				pe = s("./src/reddit/components/NotificationButton/index.tsx"),
				be = s("./src/reddit/components/PostContainer/index.tsx"),
				he = s("./src/higherOrderComponents/makeAsync.tsx"),
				ge = s("./src/lib/loadWithRetries/index.ts"),
				fe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const xe = Object(he.a)({
				ErrorComponent: () => i.a.createElement(fe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ge.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("CommentsPage~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~cad4f428"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(fe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var Oe = e => i.a.createElement(xe, e),
				ve = s("./src/reddit/components/PostList/index.tsx"),
				Ce = s("./src/reddit/components/PostMedia/index.tsx"),
				ye = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				je = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_e = s("./src/reddit/components/PostTitle/index.tsx"),
				Ee = s("./src/reddit/components/PostTopLine/index.tsx"),
				ke = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Pe = s("./src/reddit/components/SourceLink/index.tsx"),
				Se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ie = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				we = s("./src/reddit/constants/componentSizes.ts"),
				Ne = s("./src/reddit/constants/componentTestIds.ts"),
				Te = s("./src/reddit/constants/postLayout.ts"),
				Le = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Re = s("./src/reddit/helpers/postEvent.ts"),
				Fe = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Me = s("./src/reddit/selectors/postFlair.ts"),
				Be = s("./src/reddit/models/Audio/index.ts"),
				Ae = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				De = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ue = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ve = s("./src/reddit/selectors/experiments/presence.ts");
			const Ke = e => {
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ue.og
					}) === Ue.Rd
				},
				ze = e => {
					if (Object(Ve.a)(e)) return !1;
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ue.ng
					}) === Ue.Rd
				},
				He = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(z.F)(e, {
						postId: s
					});
					return !(Object(Ve.a)(e) || !n || n.isSponsored) && Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ue.mg
					}) === Ue.Rd
				};
			var qe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ye = s("./src/reddit/constants/colors.ts"),
				Qe = s("./src/reddit/icons/fonts/index.tsx"),
				Je = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ze = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Xe = s.n(Ze);
			const $e = i.a.createElement(Qe.a, {
				className: Xe.a.BlockIcon,
				name: "block"
			});
			var et = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Je.a, {
						className: Xe.a.bannerBase,
						color: Ye.a.dayModeActionIcon,
						icon: $e,
						title: Ge.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Xe.a.expandButton,
							onClick: t
						}, Ge.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Xe.a.blockedAuthorTextWrapper
					})
				},
				tt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				st = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				nt = s.n(st);
			var rt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: r
				} = e, o = t ? Object(tt.e)(n, s, r) : Object(tt.f)(n, r), a = t ? Object(tt.c)(n) : Object(tt.d)(n, r), c = t ? Ye.a.warning : Ye.a.dayModeActionIcon, d = Object(tt.a)(n);
				return i.a.createElement(Je.a, {
					className: nt.a.BannerBase,
					color: c,
					icon: d,
					subtitle: a,
					title: o
				})
			};

			function ot(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(rt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var it = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				at = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				ct = s("./src/reddit/actions/modal.ts"),
				dt = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				lt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				mt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ut = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				pt = s("./src/redditGQL/types.ts"),
				bt = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				ht = s.n(bt);
			const gt = i.a.createElement(Qe.a, {
				className: ht.a.RemoveIcon,
				name: "delete_fill"
			});
			var ft = () => i.a.createElement(Je.a, {
					className: ht.a.bannerBase,
					color: Ye.a.dayModeActionIcon,
					icon: gt,
					title: Ge.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				xt = s("./src/reddit/components/PostContent/index.m.less"),
				Ot = s.n(xt),
				vt = s("./src/reddit/actions/postGuidance/index.ts"),
				Ct = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const {
				fbt: yt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), jt = p.a.wrapped(_e.c, "PostTitle", Ot.a), _t = p.a.wrapped(se.a, "ExpandoButton", Ot.a), Et = p.a.wrapped(F, "ClassicExpandoMotion", Ot.a), kt = p.a.wrapped(re.c, "FullWidthFlatlist", Ot.a), Pt = e => {
				var t;
				return i.a.createElement("p", {
					className: Ot.a.VideoProcessingStatus
				}, (null === (t = e.post.mediaStatus) || void 0 === t ? void 0 : t.transcodingStatus) === pt.bb.Error ? yt._("The video file submitted for this post failed to process successfully.", null, {
					hk: "2ybSik"
				}) : e.isAuthorCurrentUser ? yt._("Your video is processing. We'll send you a notification when it's done.", null, {
					hk: "1rkfJE"
				}) : null)
			}, St = Object(Le.v)({
				isCommentsPage: Le.y,
				pageLayer: e => e
			}), It = Object(a.b)(() => Object(l.c)({
				activeModalId: D.a,
				flairStyleTemplate: Le.Y,
				currentUser: H.m,
				crosspost: z.d,
				hideNSFWPref: H.H,
				imageGalleryCurrentItem: z.i,
				isAdminOrMod: (e, t) => {
					const s = Object(z.U)(e, {
						postId: t.postId
					});
					return !!s && Object(W.c)(e, {
						subredditId: s.id
					})
				},
				isBlurredPreview: mt.b,
				isCurrentUserProfilePost: z.l,
				isExpanded: z.m,
				isFollowed: z.t,
				isFollowedExpired: z.o,
				post: z.F,
				moderatorPermissions: V.m,
				modModeEnabled: Le.W,
				shouldTryToShowCrosspostModal: lt.e,
				showEditFlair: Me.a,
				subredditOrProfile: z.U,
				isEditing: K.M,
				userIsOp: H.Gb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: He,
				isReadingIndicatorsReadTestEnabled: ze,
				isReadingIndicatorsWriteTestEnabled: Ke,
				isTypingIndicatorsExperimentEnabled: qe.b,
				isTypingIndicatorsReadTestEnabled: qe.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(f.eb)(n)),
					onOpenReportsDropdown: t => e(Object(P.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === A.a.upvoted ? Object(f.ib)(n) : Object(f.v)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(f.y)(t, s)),
					openPost: t => e(Object(f.K)(t)),
					onFollowPost: t => e(Object(f.hb)(n, t)),
					onFollowPostExpired: () => e(Object(f.W)({
						id: n,
						expiresAt: 0
					}))
				}
			}), wt = e => e.media && e.media.type === M.o.EMBED && e.media.provider === M.v.Imgur && e.media.height > 700, Nt = new h.a, Tt = "VISIBLE", Lt = "NOT_VISIBLE", Rt = e => Nt.publish(e ? Tt : Lt), Ft = {
				threshold: [.85, .001],
				rootMargin: `${1-we.f}px 0px 0px 0px`
			}, Mt = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Rt(!1), e <= .001 && Rt(!0)
				}
			}, Bt = Object(b.b)(e => ({
				renderingObjectInfo: e.post,
				pageLayer: e.pageLayer
			})), At = p.a.wrapped(c.a, "ThumbLink", Ot.a), Dt = e => {
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
				}) : i.a.createElement(At, {
					to: Object(j.b)(t.permalink)
				}, i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: Ot.a.classicThumbnail
				}, n && i.a.createElement(pe.a, {
					className: Ot.a.classicNotificationButton,
					isFilled: !!r,
					onClick: o,
					hasTooltip: !0,
					tooltipText: yt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Ut = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(Et, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce.a, {
						className: Ot.a.ClassicPostMedia,
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
			t.c = St(It(e => {
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
					isBlurredPreview: j,
					isCommentCountAnimation: P,
					isCommentsPage: S,
					isCountAnimShadowTestEnabled: I,
					isCrosspostRecommendationsExperimentEnabled: w,
					isCurrentUserProfilePost: N,
					isEditing: T,
					isExpanded: L,
					isFollowed: R,
					isFollowedExpired: F,
					isModWithUserNotesPermissions: A,
					isOverlay: D,
					isReadingIndicatorsExperimentEnabled: W,
					isReadingIndicatorsReadTestEnabled: V,
					isReadingIndicatorsWriteTestEnabled: K,
					isTypingIndicatorsExperimentEnabled: z,
					isTypingIndicatorsReadTestEnabled: H,
					isVoteCountAnimation: J,
					moderatorPermissions: se,
					modModeEnabled: pe,
					onFollowPost: he,
					onFollowPostExpired: ge,
					onIgnoreReports: fe,
					onOpenReportsDropdown: xe,
					openPost: we,
					onVoteClick: Le,
					post: Me,
					scrollerItemRef: De,
					sendEvent: Ue,
					shouldTryToShowCrosspostModal: We,
					showEditFlair: Ve,
					subredditOrProfile: Ke,
					userIsOp: ze,
					pageLayer: He
				} = e, qe = Object(Se.b)(), Ge = Object(o.useRef)(null), [Ye, Qe] = Object(o.useState)(Me.authorIsBlocked), Je = Object(M.L)(Me), Ze = Object(M.G)(Me), Xe = Object(a.e)(e => Object(U.a)(e, {
					post: Me,
					pageLayer: He
				})), $e = Object(d.a)(Me), tt = W || z, st = tt || V || K || H, nt = !!(j && (null == Ke ? void 0 : Ke.isNSFW));
				Object(o.useEffect)(() => {
					F && ge()
				}, []);
				const rt = Object(a.d)(),
					lt = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					if (w && We) return rt(Object(at.a)(Me)), lt.current = setTimeout(() => {
						rt(Object(ct.h)(dt.a)), rt(Object(at.b)())
					}, dt.b), () => {
						rt(Object(at.b)()), rt(Object(ct.g)(dt.a)), lt.current && clearTimeout(lt.current)
					}
				}, [rt, w, Me, We]), Object(o.useEffect)(() => {
					rt(Object(vt.a)())
				}, []), Object(Fe.a)(Ge, Mt, Ft);
				const mt = Me.isSponsored ? Object(ve.b)(Me.id, {
						fireAdPixelsOfType: c,
						openPost: we
					}) : r.a,
					pt = Object(y.a)(se),
					bt = Object(v.a)(se),
					ht = Object(C.a)(se),
					gt = pt || bt,
					xt = ((e, t, s) => {
						const [n, r] = e ? [Object(O.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || r
					})(n, gt, Me),
					yt = !!Me.media && (Me.media.type === M.o.RTJSON || Me.media.type === M.o.TEXT),
					Et = ze && yt,
					St = Object(le.a)(Me),
					It = Object(ue.c)(Me);
				let Nt;
				const Tt = Object(Ct.a)(),
					Lt = !(pe && pt),
					Rt = Object(ye.b)({
						hide: !tt && Lt,
						editPost: !tt && Lt,
						save: Lt,
						report: !tt && Lt
					}),
					At = Me.removedByCategory === B.g.AuthorDeleted,
					Wt = n && (n.displayText === Me.author || n.username === Me.author),
					Vt = !!Me.unrepliableReason,
					Kt = !Ye && !At && !wt(Me) && (Wt || f || !(Me.removedByCategory && Me.media && (Object(M.O)(Me.media) || Object(M.M)(Me.media) || Object(M.H)(Me.media)))),
					zt = Xe && Me.source;
				let Ht;
				Me.media && Me.media.type !== M.o.TEXT && (Ht = Me.media.richtextContent);
				const qt = Object(m.t)(Me, h),
					Gt = Me.removedByCategory === B.g.Reddit && Object(g.e)(Me.created) > 24,
					Yt = Me.removedByCategory && Me.removedByCategory !== B.g.Reddit || Gt,
					Qt = !Yt && !Me.isArchived,
					Jt = Object(o.useCallback)(() => {
						he(R ? B.f.UNFOLLOWED : B.f.FOLLOWED), qe(R ? Object(E.t)(Me.id) : Object(E.f)(Me.id))
					}, [he, qe, R, Me.id]),
					Zt = i.a.createElement(i.a.Fragment, null, i.a.createElement(jt, {
						post: Me,
						innerRef: Ge,
						size: _e.b.ExtraLarge,
						isOverlay: D,
						disableVisited: !0,
						isCommentsPage: !0
					}), i.a.createElement(Y.a, {
						className: Ot.a.AdSupplementaryText,
						post: Me,
						size: _e.b.ExtraLarge
					})),
					Xt = i.a.createElement(it.a, {
						post: Me,
						showViewCount: xt
					}),
					$t = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Te.g.Classic : Object(Ae.c)(n) ? Te.g.Large : Object(Be.b)(n) ? Te.g.Large : t || Object(B.A)(n) ? Te.g.Large : !n.media || Object(B.q)(n) || wt(n) ? Te.g.Medium : Te.g.Large
					})(e),
					es = Object(a.e)(ut.b),
					ts = Object(ie.b)(Me),
					ss = () => {
						const t = !(Vt && Ye),
							n = Object(M.K)(Me);
						return Vt && n ? i.a.createElement(ft, null) : Ye ? i.a.createElement(et, {
							onBannerClick: () => Qe(!1),
							isExpandable: Je
						}) : Tt || !Me.source || $t !== Te.g.Medium || nt ? Kt && Ze ? i.a.createElement(Z.a, {
							post: Me
						}) : Kt && !T && $t === Te.g.Large ? i.a.createElement(Ce.a, {
							className: Object(u.a)(Ot.a.LargePostMedia, {
								[Ot.a.isCommentsPage]: S
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: D,
							isOverlay: D,
							post: Me,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !D,
							showCentered: !0,
							scrollerItemRef: De
						}) : t && $t === Te.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(_t, {
							crosspost: s || void 0,
							isExpanded: !!L,
							post: Me,
							useMediaIcons: !1
						}), Ut(e)) : null : i.a.createElement(Pe.a, {
							post: Me,
							isCommentsPage: S,
							pageLayer: He
						})
					};
				if ($t === Te.g.Classic) {
					const t = !Tt && Object(x.a)(Me, Ye);
					Nt = i.a.createElement("div", {
						"data-test-id": Ne.f
					}, i.a.createElement(je.a, {
						model: Me,
						handleVote: Le,
						isCountAnimShadowTestEnabled: I,
						isOverlay: D,
						isVoteCountAnimation: J,
						postId: Me.id
					}), i.a.createElement("div", {
						className: Ot.a.mainBody
					}, i.a.createElement("div", {
						className: Ot.a.content
					}, i.a.createElement(Ee.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: S,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!A,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Me,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ke,
						shouldShowFollowButton: Qt && !t,
						isFollowed: R,
						onFollowPostClick: Jt
					}), Zt, i.a.createElement(ne.a, {
						className: S ? Ot.a.leftPadding : void 0,
						post: Me,
						sendEvent: Ue
					}), zt && Ht && i.a.createElement(oe.a, {
						content: Ht,
						rtJsonElementProps: Bt(e)
					}), pe && pt && It && i.a.createElement(me.a, {
						onIgnoreReports: fe,
						reportable: Me
					}), i.a.createElement(ae.d, null), i.a.createElement("div", {
						className: Ot.a.FlatlistContainer
					}, ss(), i.a.createElement(kt, {
						currentUser: n,
						hasModFlairPerms: bt,
						hasModFullPerms: ht,
						hasModPostPerms: pt,
						isOverlay: D,
						onIgnoreReports: fe,
						onOpenReportsDropdown: xe,
						modModeEnabled: pe,
						post: Me,
						showUpvotePercent: !0,
						showViewCount: xt,
						useFlatlistBreakpoints: Rt,
						isCommentCountAnimation: P,
						isCountAnimShadowTestEnabled: I
					}))), t && i.a.createElement(Dt, {
						post: Me,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Qt,
						isFollowed: R,
						onFollowPostClick: Jt
					})))
				} else if ($t === Te.g.Medium) {
					const t = !Tt && Object(x.a)(Me, Ye);
					Nt = i.a.createElement("div", {
						"data-test-id": Ne.f
					}, i.a.createElement(je.a, {
						model: Me,
						handleVote: Le,
						isCountAnimShadowTestEnabled: I,
						isOverlay: D,
						shouldShowUpvoteRatioOnHover: tt,
						isVoteCountAnimation: J,
						postId: Me.id
					}), i.a.createElement("div", {
						className: Ot.a.mainBody
					}, i.a.createElement("div", {
						className: Ot.a.content
					}, i.a.createElement(Ee.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: S,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!A,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Me,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ke,
						shouldShowFollowButton: Qt && !t,
						isFollowed: R,
						onFollowPostClick: Jt
					}), Zt, ss(), Object(M.Q)(Me) && i.a.createElement(Pt, {
						post: Me,
						isAuthorCurrentUser: !!Wt
					}), i.a.createElement(ne.a, {
						className: S ? Ot.a.leftPadding : void 0,
						post: Me,
						sendEvent: Ue
					}), Ke && Yt && i.a.createElement(ot, {
						isAdminOrMod: f,
						post: Me,
						subredditOrProfile: Ke
					}), pe && pt && It && i.a.createElement(me.a, {
						onIgnoreReports: fe,
						reportable: Me
					})), t && !$e && i.a.createElement(ce.a, {
						post: Me,
						forceShowNSFW: !0,
						hasModPostPerms: gt,
						isCommentsPage: S,
						isOverlay: !0,
						modModeEnabled: pe,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ke,
						shouldShowFollowButton: Qt,
						isFollowed: R,
						onFollowPostClick: Jt
					})), zt && Ht && !Yt && i.a.createElement(oe.a, {
						content: Ht,
						rtJsonElementProps: Bt(e)
					}), i.a.createElement(ae.d, null), !!es && i.a.createElement(k.a, {
						itemIds: ts,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Me,
						size: "small"
					}), i.a.createElement("div", {
						className: Ot.a.controlsContainer
					}, i.a.createElement(re.c, {
						currentUser: n,
						hasModFlairPerms: bt,
						hasModFullPerms: ht,
						hasModPostPerms: pt,
						isOverlay: D,
						modModeEnabled: pe,
						onIgnoreReports: fe,
						onOpenReportsDropdown: xe,
						post: Me,
						showEditPost: Et,
						showEditFlair: Ve,
						tooltipType: D ? ke.f.Lightbox : void 0,
						useFlatlistBreakpoints: Rt,
						isCommentCountAnimation: P,
						isCountAnimShadowTestEnabled: I,
						shouldHideItems: tt
					}), st && i.a.createElement(Ie.a, {
						isReadingIndicatorsExperiment: W,
						isReadingIndicatorsReadLoadTest: V,
						isReadingIndicatorsWriteLoadTest: K,
						isTypingIndicatorsExperiment: z,
						isTypingIndicatorsReadLoadTest: H,
						postId: Me.id
					}), !tt && Xt), Object(Q.e)(Me, n) && i.a.createElement(Q.a, {
						postId: Me.id,
						user: n
					}))
				} else $t === Te.g.Large && (Nt = i.a.createElement("div", {
					"data-test-id": Ne.f
				}, i.a.createElement(je.a, {
					model: Me,
					handleVote: Le,
					isCountAnimShadowTestEnabled: I,
					isOverlay: D,
					shouldShowUpvoteRatioOnHover: tt,
					isVoteCountAnimation: J,
					postId: Me.id
				}), Object(Ae.c)(Me) && i.a.createElement(i.a.Fragment, null, i.a.createElement(ee.a, {
					post: Me
				}), i.a.createElement($.a, {
					post: Me
				})), !Object(Ae.c)(Me) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: S,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: !!A,
					isOverlay: !!D,
					isTopicPage: !1,
					post: Me,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!D && !Me.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ke,
					shouldShowFollowButton: Qt,
					isFollowed: R,
					onFollowPostClick: Jt
				}), Zt, ((e, t, s, n) => !Tt && e.source && !t && (s || n))(Me, s, D, S) && !nt && i.a.createElement(Pe.a, {
					post: Me,
					isCommentsPage: S,
					pageLayer: He
				})), i.a.createElement(ne.a, {
					className: S ? Ot.a.leftPadding : void 0,
					post: Me,
					sendEvent: Ue
				}), Ke && Yt && i.a.createElement(ot, {
					isAdminOrMod: f,
					post: Me,
					subredditOrProfile: Ke
				}), T && i.a.createElement(Oe, {
					post: Me
				}), ss(), Object(m.v)(Me, h) && i.a.createElement(q.a, {
					className: Ot.a.adLinkWrapper
				}, i.a.createElement(G.a, {
					post: Me,
					adLinkContent: qt
				})), pe && pt && St && i.a.createElement("div", {
					className: Ot.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					thing: Me
				})), pe && pt && It && i.a.createElement("div", {
					className: Ot.a.modModeBannerWrapper
				}, i.a.createElement(me.a, {
					onIgnoreReports: fe,
					reportable: Me
				})), Object(Be.b)(Me) && i.a.createElement(X.a, null), i.a.createElement(ae.d, null), !!es && i.a.createElement(k.a, {
					itemIds: ts,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Me,
					size: "small"
				}), i.a.createElement("div", {
					className: Ot.a.controlsContainer
				}, i.a.createElement(re.c, {
					currentUser: n,
					forceOpenInNewTab: p,
					hasModFlairPerms: bt,
					hasModFullPerms: ht,
					hasModPostPerms: pt,
					isOverlay: D,
					modModeEnabled: pe,
					onIgnoreReports: fe,
					onOpenReportsDropdown: xe,
					post: Me,
					showEditPost: Et,
					showEditFlair: Ve,
					tooltipType: D ? ke.f.Lightbox : void 0,
					useFlatlistBreakpoints: Rt,
					isCommentCountAnimation: P,
					isCountAnimShadowTestEnabled: I,
					shouldHideItems: tt
				}), st && i.a.createElement(Ie.a, {
					isReadingIndicatorsExperiment: W,
					isReadingIndicatorsReadLoadTest: V,
					isReadingIndicatorsWriteLoadTest: K,
					isTypingIndicatorsExperiment: z,
					isTypingIndicatorsReadLoadTest: H,
					postId: Me.id
				}), !tt && Xt), Object(Q.e)(Me, n) && i.a.createElement(Q.a, {
					postId: Me.id,
					user: n
				})));
				const ns = Object(o.useCallback)((e, t) => Object(E.n)(e, t), []);
				return i.a.createElement(be.b, {
					className: Object(u.a)(t, Ot.a.postContainer, {
						[Ot.a.hasEventMeta]: Object(Re.a)(Me)
					}),
					isOverlay: D,
					post: Me,
					eventFactory: D ? _.b : ns,
					onClick: mt
				}, i.a.createElement(te.a, {
					post: Me
				}), Nt)
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
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return re
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/chooseVariant/index.ts"),
				h = s("./node_modules/reselect/es/index.js");
			const g = Object(h.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: b.a,
				experimentName: p.zc
			}), e => e === p.Rd);
			var f = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				_ = s.n(j);
			const E = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(l.e)(e => Object(C.F)(e, {
						postId: t
					})),
					o = Object(l.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(y.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return o ? r.a.createElement(O.a, {
					className: Object(x.a)(_.a.link, s),
					to: o.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), r.a.createElement(v.b, {
					className: _.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: o
				}), r.a.createElement("span", {
					className: _.a.subredditName
				}, o.displayText)) : null
			};
			var k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				P = s("./src/reddit/connectors/PostViewable/index.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				T = s("./src/reddit/hooks/useIsOverlay.ts"),
				L = s("./src/reddit/hooks/usePageLayer.ts"),
				R = s("./src/lib/prettyPrintNumber/index.ts"),
				F = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				M = s.n(F);
			const B = e => {
				let {
					post: t
				} = e;
				const s = `${Object(R.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(R.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return r.a.createElement("div", {
					className: M.a.postInformation
				}, r.a.createElement("h5", {
					className: M.a.title
				}, t.title), r.a.createElement("div", {
					className: M.a.interactions
				}, r.a.createElement("p", null, s), r.a.createElement("p", null, n)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/components/UserIcon/index.tsx"),
				V = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				K = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				z = s("./src/reddit/selectors/profile.ts"),
				H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				q = s.n(H);
			const G = e => {
				let {
					post: t
				} = e;
				var s, o, i, a;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(z.l)(t.author)),
					m = Object(n.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(A.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(D.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(K.a)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url),
					b = Object(V.c)(null === (o = null == d ? void 0 : d.icon) || void 0 === o ? void 0 : o.url);
				return r.a.createElement("div", {
					className: q.a.media
				}, u ? r.a.createElement(U.b, {
					post: t,
					url: m,
					className: q.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: q.a.mediaThumbnailContainer
				}) : null, !u && (null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url) && r.a.createElement("div", {
					className: q.a.userIconContainer
				}, r.a.createElement(W.a, {
					className: Object(x.a)({
						[q.a.snoovatarUserIcon]: p,
						[q.a.defaultUserIcon]: b
					}, q.a.userIcon),
					iconUrl: null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url,
					userName: d.name,
					wrapperClassName: q.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var Y = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Q = s.n(Y);
			const J = Object(P.a)(null);
			var Z = Object(I.b)(J(e => {
					let {
						post: t
					} = e;
					const s = Object(L.a)(),
						n = Object(T.a)(),
						o = Object(N.a)(),
						i = Object(S.x)(s) && !n;
					return r.a.createElement(O.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(w.b)(t.permalink) : Object(k.a)(t.permalink, !1, o)
					}, r.a.createElement("div", {
						className: Q.a.container
					}, r.a.createElement(B, {
						post: t
					}), r.a.createElement(G, {
						post: t
					})))
				})),
				X = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(X);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => r.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return r.a.createElement("div", {
					className: $.a.container
				}, s)
			};
			var te = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				se = s.n(te);
			const ne = e => {
				let {
					post: t
				} = e;
				const s = Object(l.d)();
				if (!Object(l.e)(g) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return r.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(m.y)(t, u.a.Click))
				}, r.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), r.a.createElement(E, {
					postId: n,
					className: se.a.communityLink
				}))
			};

			function re(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(c.B)(t) && Object(c.A)(t) ? r.a.createElement(ne, {
					post: t
				}) : Object(a.G)(t) ? r.a.createElement(d.a, {
					post: t
				}) : r.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostMeta/index.m.less"),
				j = s.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: y,
					isOverlay: _,
					isTopicPage: E,
					post: k,
					shouldShowSubscribeButton: P,
					subredditOrProfile: S,
					tooltipType: I
				} = e, w = !!E, N = Object(v.a)(), T = Object(o.e)(e => !!S && Object(i.i)(e, S.id)), L = !(!S || !Object(C.i)(S));
				return r.a.createElement("div", {
					className: j.a.metaContainer
				}, !n && !k.isSponsored && S && r.a.createElement(d.a, {
					postId: k.id,
					subredditName: S.name,
					isProfile: L
				}, r.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: S.url,
						state: N
					}
				}, S.displayText)), S && S.isQuarantined && r.a.createElement(p.a, null), !n && !k.isSponsored && S && P && !y && r.a.createElement(h.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(O.n)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: S.name,
						type: Object(C.i)(S) ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: k.id,
					size: f.d.XXS,
					small: !0
				}), !n && !k.isSponsored && r.a.createElement(x.b, null), !n && !k.isSponsored && r.a.createElement(l.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), r.a.createElement(u.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: I,
					isModWithUserNotesPermissions: T
				}), r.a.createElement(m.a, {
					displayText: S ? S.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: I
				}), !w && r.a.createElement(a.a, {
					hideCta: s,
					thing: k,
					tooltipType: _ ? u.f.Lightbox : void 0
				}), T && r.a.createElement(c.a, {
					postOrComment: k,
					className: j.a.addModNote
				}))
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
					postId: O,
					shouldShowUpvoteRatioOnHover: v
				} = e, C = `upvote-button-${t.id}${f?"-overlay":""}`;
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
					upvoteTooltipId: C,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: p,
					postId: O,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
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
				O = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: k,
					hostPostData: S,
					iconClassName: I,
					inSubredditOrProfile: w,
					isCommentsPage: N,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: L,
					isModQueuePage: R,
					isModWithUserNotesPermissions: F,
					isOverlay: M,
					isTopicPage: B,
					listingKey: A,
					post: D,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: W,
					showSubreddit: V,
					showSubredditIcon: K,
					subredditOrProfile: z,
					isFollowed: H,
					shouldShowFollowButton: q,
					onFollowPostClick: G,
					onSubscribed: Y
				} = e;
				const Q = B,
					J = !(!z || !Object(j.i)(z)),
					Z = Object(i.e)(e => {
						if (!J) return !0;
						const t = Object(E.Jb)(e, D.author || "");
						return !t || t.enableFollowers
					}),
					X = Object(i.e)(_.a);
				return o.a.createElement("div", {
					className: Object(a.a)(P.a.container, t)
				}, V && z && o.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, o.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: z.url
				}, K && o.a.createElement(b.b, {
					className: Object(a.a)(P.a.subredditIcon, I),
					shouldHideNsfwIcon: k,
					subredditOrProfile: z
				}))), o.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, V && o.a.createElement(l.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), o.a.createElement(p.g, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: F,
					tooltipType: M ? p.f.Lightbox : void 0,
					post: D,
					showSub: V,
					subredditOrProfile: z
				}), o.a.createElement(u.a, {
					className: P.a.postBadges,
					displayText: z ? z.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: T,
					post: D,
					tooltipType: M ? p.f.Lightbox : void 0
				}), !Q && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: D,
					tooltipType: M ? p.f.Lightbox : void 0
				}), F && o.a.createElement(d.a, {
					postOrComment: D,
					className: P.a.addModNote
				})), z && Z && V && U && !L && o.a.createElement(g.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => (Y && !e && Y(), Object(v.n)(D.id, e ? "unsubscribe" : "subscribe", "post", A, S)),
					identifier: {
						name: z.name,
						type: J ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: D.id,
					size: x.d.XS,
					priority: X ? x.c.Secondary : void 0,
					isShredditParityEnabled: X
				}), W && o.a.createElement(O.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(y.E)(D),
					source: D.source
				}, o.a.createElement(C.a, {
					className: P.a.outboundLinkIcon
				})), q && Z && o.a.createElement(m.a, {
					isFilled: !!H,
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
		"./src/reddit/components/PrivateFeedPage/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/userPrefs.ts");
			const c = e => {
				let {
					isLoggedIn: t,
					isNightmodeOn: s
				} = e;
				const r = Object(i.e)(a.c),
					c = t ? s ? `${n.a.assetPath}/img/private-feeds/dark_logged_in.jpg` : `${n.a.assetPath}/img/private-feeds/light_logged_in.jpg` : s ? `${n.a.assetPath}/img/private-feeds/dark_logged_out.jpg` : `${n.a.assetPath}/img/private-feeds/light_logged_out.jpg`,
					d = o.a.createElement("img", {
						className: "absolute",
						src: c,
						style: {
							height: "calc(100vh - 50px)"
						}
					});
				return o.a.createElement("div", {
					className: `absolute w-screen flex ${r?"":"justify-center"}`,
					style: {
						backgroundColor: "var(--newCommunityTheme-canvas)",
						height: "calc(100vh - 50px)"
					}
				}, d)
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
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
				O = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				C = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				P = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				S = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				w = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				N = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/lib/classNames/index.ts"),
				F = s("./src/reddit/constants/listings.ts"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				B = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				D = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				U = s.n(D);
			const {
				fbt: W
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
					return r ? (d = F.c[F.b.Popular], c = W._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : c = n ? W._("See more posts like this in {subredditName}", [W._param("subredditName", Object(B.d)(o.displayText))], {
						hk: "pLxW5"
					}) : W._("Continue browsing in {subredditName}", [W._param("subredditName", o.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(M.default, {
						className: Object(R.a)(U.a.footer, t),
						onMouseDown: s,
						to: d,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: U.a.background
					}), a.a.createElement("div", {
						className: U.a.layout
					}, c, a.a.createElement(A.a, {
						className: U.a.arrow
					})))
				}),
				K = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				z = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				H = s.n(z);
			const q = Object(d.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, k.a, P.b, (e, t, s) => !((!t || s) && e)),
				G = Object(d.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(C.a)(s)
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
				}, S.b, I.c, T.cb, T.nb, (e, t, s, n, r) => {
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
							shouldShowLinkedPosts: !Object(x.Cg)(s) && !Object(I.a)(s),
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
					isD2xPdpSideRailRecsEnabled: S.b,
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: w.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: N.b
				}),
				J = Object(c.b)(Q, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.ab.HOT,
						subredditName: t
					}))
				}));
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.e) : null, this.onViewed = (e, t) => Object(_.e)({
						key: this.listingKey(),
						sort: l.ab.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.nc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(j.c)("recommended_footer"))
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
					return s || e ? t : r && n && n.id ? Object(K.a)(n.id) : Object(p.a)(o.name, l.ab.TOP, {
						t: l.nc.WEEK
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
					if (d && !Object(x.Cg)(d) && !Object(I.a)(d) && !i) return a.a.createElement("div", {
						className: H.a.smallBanner
					});
					const {
						name: l
					} = r, m = Object(y.a)(o.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == c ? void 0 : c.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(I.b)(d) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Qe.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: H.a.smallBanner,
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
						className: H.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: H.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: c,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: O.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: H.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						skipSubredditPosts: t ? 15 : 0,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: H.a.footer,
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
		"./src/reddit/components/SearchBanner/index.m.less": function(e, t, s) {
			e.exports = {
				announcement: "_1hUjYWB4NLdPs1k_qx-f0u"
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
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				m = s.n(l);
			const u = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(m.a.flatlistContainer, s)
					}, t)
				},
				p = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(a.a)(m.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(c.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				b = e => {
					let {
						awardCountsById: t,
						awardingsTotal: s
					} = e;
					if (Object(i.e)(d.d)) return null;
					const r = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(a.a)(m.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(c.b)(r)), n.fbt._plural(r)], {
						hk: "1jrEck"
					}))
				};

			function h(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(u, {
					className: s
				}, o.a.createElement(p, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(a.a)(m.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(c.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(b, {
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
				p = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
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
					post: O,
					subredditOrProfile: v,
					tooltipType: C
				} = e, y = Object(u.a)(), {
					isSubEnlarged: j
				} = Object(i.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, g.a.metaContainer)
				}, !O.isSponsored && v && o.a.createElement(a.a, {
					className: Object(n.a)(g.a.hovercardContainer, g.a.hovercardContainer),
					postId: O.id,
					subredditName: v.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(g.a.subredditIcon, j && g.a.enlargedSubredditIcon),
					linkTo: v.url,
					linkProps: h ? {
						"data-testid": f,
						onClick: h
					} : void 0,
					subredditOrProfile: v
				}), o.a.createElement(l.a, {
					className: Object(n.a)(g.a.subredditName, j && g.a.enlargedSubredditName),
					"data-testid": x,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: v.url,
						state: y
					}
				}, v.displayText)), !O.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(c.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				})), o.a.createElement(d.g, {
					className: g.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: O,
					tooltipType: C
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
				return x
			})), s.d(t, "a", (function() {
				return O
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
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = `${n.a.assetPath}/img/telescope-snoo.png`;
			var x;

			function O(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = c.a,
					searchOptions: b,
					tab: x
				} = e;
				const O = Object(m.a)();
				Object(o.useEffect)(() => {
					O(Object(l.n)(s, b))
				}, [s]);
				const v = b.restrict_sr || u.pageConfig[x].sidebar,
					C = n === a.a;
				return i.a.createElement("div", {
					className: Object(r.a)(C && h.a.padding)
				}, i.a.createElement("div", {
					className: Object(r.a)(h.a.noResults, v && h.a.withSidebar),
					"data-testid": "no-results"
				}, i.a.createElement("img", {
					alt: g._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: f,
					className: h.a.image
				}), i.a.createElement("h2", {
					className: h.a.header
				}, g._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), g._("{search query}", [g._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), i.a.createElement("p", {
					className: h.a.text
				}, g._("Double-check your spelling or try different keywords to {=adjust your search}", [g._param("=adjust your search", i.a.createElement("button", {
					className: h.a.button,
					onClick: () => {
						var e;
						const t = document.querySelector(`input[type="search"][id=${n}]`);
						t || null === (e = document.getElementById(a.b)) || void 0 === e || e.click(), d.a.set(p.a.AdjustSearchButton), null == t || t.focus(), null == t || t.select()
					}
				}, g._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				}))))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(x || (x = {}))
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
				return N
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
				g = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				f = s("./node_modules/lodash/constant.js"),
				x = s.n(f),
				O = s("./node_modules/lodash/times.js"),
				v = s.n(O),
				C = s("./src/reddit/components/Comments/States/index.tsx"),
				y = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				j = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				_ = s.n(j);
			const E = e => {
				const {
					commentsPageKey: t,
					listingKey: s,
					searchOptions: n,
					originElement: r
				} = e, o = Object(a.e)(e => Object(h.d)(e, {
					listingKey: s
				})), c = Object(a.e)(e => Object(h.t)(e, {
					listingKey: s
				})), d = Boolean(c && c.token) && o.length > 0;
				return i.a.createElement("div", {
					className: _.a.container,
					"data-testid": "pdp-comments-list"
				}, i.a.createElement(y.b, {
					identifiers: o,
					listingKey: s,
					pageKey: t,
					searchOptions: n,
					componentType: y.c.PdpComments,
					originElement: r
				}), d && i.a.Children.toArray(v()(3, x()(i.a.createElement(C.a, {
					sidebar: !1
				})))))
			};
			var k = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx"),
				P = s("./src/reddit/components/SearchResultsContent/SearchPdpComments/index.m.less"),
				S = s.n(P);
			const I = "view_all_comments_link",
				w = "back_to_pdp_comments_results";

			function N(e) {
				var t;
				const {
					commentsPageKey: s,
					isOverlay: o,
					post: f,
					listingKey: x,
					searchOptions: O
				} = e, v = Object(b.a)(), C = Object(p.a)(), y = Object(a.e)(e => Object(h.m)(e, {
					listingKey: x
				}));
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(r.a)(S.a.flex, S.a.marginContainer, S.a.paddingContainer)
				}, i.a.createElement("p", {
					"data-testid": w,
					className: Object(r.a)(S.a.bodySmall, S.a.truncate)
				}, n.fbt._('Comments with "{current search query}"', [n.fbt._param("current search query", (null == O ? void 0 : O.q) || "")], {
					hk: "21uw6n"
				})), i.a.createElement("span", {
					className: S.a.verticalDivider
				}, "|"), i.a.createElement(c.a, {
					className: Object(r.a)(S.a.actionFont),
					"data-testid": I,
					isOverlay: o,
					to: {
						pathname: Object(m.b)(f.permalink),
						state: {
							...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state
						}
					},
					onClick: function() {
						v(Object(u.o)(f.id, void 0, C))
					}
				}, n.fbt._("All Comments", null, {
					hk: "4hJcyz"
				})), i.a.createElement("span", {
					className: S.a.verticalDivider
				}, "|")), i.a.createElement("div", null, i.a.createElement(k.a, {
					hasResults: y,
					searchBarId: l.a,
					searchOptions: O,
					noResultsType: g.b.Comments,
					searchResultsTab: d.h.Comments,
					listingKey: x,
					pendingSelector: h.f
				}, i.a.createElement(E, {
					commentsPageKey: s,
					listingKey: x,
					searchOptions: O,
					key: d.h.Comments
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
				return es
			})), s.d(t, "c", (function() {
				return os
			})), s.d(t, "b", (function() {
				return as
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
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				C = s.n(v),
				y = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/isUrl/index.ts"),
				E = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/components/FlairList/index.tsx"),
				P = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				L = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				B = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				A = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				U = s("./src/reddit/hooks/useTheme.ts"),
				W = s("./src/reddit/icons/fonts/index.tsx"),
				V = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				H = s("./src/reddit/components/AuthorLink/index.tsx"),
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
				} = e, c = Object(a.e)(K.fb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = d ? i.a.createElement("img", {
					alt: w.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : i.a.createElement(W.a, {
					name: "community",
					isFilled: !c,
					className: Object(j.a)(Z.a.defaultCommunityIcon, s, c && Z.a.mNightmode)
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
				} = e, n = Object(D.a)(Q.e), r = t.crosspostRootId ? w.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : w.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return i.a.createElement("div", {
					className: Z.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(W.a, {
					name: "crosspost",
					className: Object(j.a)(Z.a.crosspostIcon, Z.a.metaSpacer)
				}), i.a.createElement("span", {
					className: Z.a.metaSpacer
				}, r), i.a.createElement(q.b, {
					postOrComment: t
				}, i.a.createElement(H.a, {
					author: t.author,
					className: Z.a.metaSpacer,
					isAuthorDeleted: t.author === d.F,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": y.a.USER,
						"data-testid": Q.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: Z.a.flairContainer
				}, i.a.createElement(N.c, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: Z.a.timestamp,
					"data-testid": Q.c,
					"data-click-id": y.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, i.a.createElement(Y.a, {
					seconds: t.createdAt / d.Wb
				})), i.a.createElement(B.a, null, i.a.createElement(L.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(G.a, {
					seconds: t.createdAt / d.Wb
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
				} = Object(a.e)(V.a), m = Object(U.a)();
				return i.a.createElement("div", {
					className: Object(j.a)(t, Z.a.metaContainer, Z.a.metadataFont)
				}, !o.isSponsored && c && i.a.createElement(T.a, {
					className: Object(j.a)(Z.a.hovercardContainer, Z.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, i.a.createElement(X, {
					className: Object(j.a)(Z.a.subredditIcon, l && Z.a.enlargedSubredditIcon),
					"data-click-id": y.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), i.a.createElement(F.default, {
					className: Object(j.a)(Z.a.subredditName, l && Z.a.enlargedSubredditName),
					"data-testid": z.b,
					"data-click-id": y.a.SUBREDDIT,
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
			var te = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				se = s("./src/reddit/components/SearchWarnings/index.m.less"),
				ne = s.n(se);
			const {
				fbt: re
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function oe(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: r
				} = e;
				return s || n || r ? i.a.createElement("div", {
					className: t
				}, s ? i.a.createElement("span", {
					className: Object(j.a)(ne.a.warningText, ne.a.quarantineWarning)
				}, i.a.createElement(te.a, {
					className: Object(j.a)(ne.a.warningIcon, ne.a.quarantineIcon)
				}), re._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? i.a.createElement("span", {
					className: Object(j.a)(ne.a.warningText, ne.a.nsfwWarning)
				}, i.a.createElement(W.a, {
					name: "nsfw_fill",
					className: Object(j.a)(ne.a.warningIcon)
				}), re._("nsfw", null, {
					hk: "2IetSA"
				})) : null, r ? i.a.createElement("span", {
					className: Object(j.a)(ne.a.warningText, ne.a.spoilerWarning)
				}, i.a.createElement(W.a, {
					name: "spoiler_fill",
					className: Object(j.a)(ne.a.warningIcon)
				}), re._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
			var ie = s("./src/reddit/components/SEOTitle/index.tsx"),
				ae = s("./src/reddit/components/SEOTitle/constants.ts"),
				ce = s("./src/reddit/components/Thumbnail/index.tsx"),
				de = s("./src/reddit/components/TrackingHelper/index.tsx");
			const le = new m.a(250),
				me = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let o = le.get(r);
						if (void 0 === o) {
							const a = new RegExp(`(\\b${n}\\b)`, "gi"),
								c = e.title.split(a);
							o = s(i.a.createElement(i.a.Fragment, null, i.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), le.set(r, o)
						}
						return o
					}
				};
			var ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/index.tsx"),
				be = s("./src/reddit/helpers/clickSourceData/index.ts"),
				he = s("./src/reddit/helpers/overlay/index.ts"),
				ge = s("./src/reddit/helpers/path/index.ts"),
				fe = s("./src/reddit/helpers/trackers/searchResults.ts"),
				xe = s("./src/reddit/hooks/usePageLayer.ts"),
				Oe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ve = s("./src/reddit/selectors/searchResults.ts"),
				Ce = s("./src/telemetry/models/Outbound.ts"),
				ye = s("./src/reddit/components/SearchPost/index.m.less"),
				je = s.n(ye);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = "post-title";

			function ke(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, a = s ? ae.a.PostComments : ae.a.PostItem, c = Object(A.a)(), d = Object(E.a)(n.permalink, void 0, c), l = Object(U.a)(), m = Object(o.useMemo)(() => me(r, e => i.a.createElement("span", {
					className: Object(j.a)(je.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return i.a.createElement("div", {
					className: Object(j.a)(n.id, je.a.postTitleColors),
					"data-adclicklocation": y.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${je.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(x.c)(.45,Object(Oe.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(x.c)(.45,Object(Oe.a)({theme:l}).titleText,Object(Oe.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(x.c)(.45,Object(Oe.a)({theme:l}).bodyText,Object(Oe.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: je.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: je.a.titleContainer
				}, i.a.createElement(O.a, {
					to: d
				}, i.a.createElement("div", {
					className: Object(j.a)(je.a.inline, je.a.titleTextColor, je.a.titleMedium, je.a.paddingRight),
					"data-testid": Ee,
					style: {
						"--posttitletextcolor": Object(Oe.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(ie.b, {
					type: a
				}, m))), n.flair && i.a.createElement(k.a, {
					className: je.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function Pe(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(ce.a, {
						alt: e.post.title,
						className: Object(j.a)(je.a.thumbnail, n && je.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: je.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(_.a)(o) && !e.post.media ? i.a.createElement(pe.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: Ce.SourceElement.PostImage
				}, a) : a)
			}
			var Se = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Ie = s("./src/reddit/constants/elementIds.ts"),
				we = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ne = s("./src/reddit/selectors/platform.ts"),
				Te = s("./src/reddit/selectors/tracking.ts"),
				Le = s("./src/telemetry/index.ts"),
				Re = s("./src/telemetry/models/Timer.ts"),
				Fe = s("./node_modules/react-router-redux/es/index.js"),
				Me = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Be = s("./src/reddit/components/PostList/index.tsx"),
				Ae = s("./src/reddit/components/PostTitle/index.tsx"),
				De = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ue = s("./src/lib/getShortenedLink.ts"),
				We = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				Ve = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ke = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				ze = s("./src/reddit/components/ModModeReports/index.tsx"),
				He = s("./src/reddit/components/ModModeReports/helpers.ts"),
				qe = s("./src/reddit/actions/post.ts"),
				Ge = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ye = s("./src/reddit/selectors/poll/index.ts"),
				Qe = s("./src/reddit/selectors/postFlair.ts"),
				Je = s("./src/reddit/selectors/posts.ts");
			const Ze = {
					crosspost: Je.d,
					isActive: Je.j,
					isLoggedIn: K.S,
					moderatorPermissions: Ge.m,
					modModeEnabled: ue.W,
					poll: Ye.e,
					showEditFlair: Qe.a,
					flairStyleTemplate: ue.Y
				},
				Xe = () => Object(c.c)(Ze);
			var $e = s("./src/reddit/contexts/Post/index.tsx"),
				et = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				tt = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				st = s("./src/reddit/helpers/styles/mixins/index.tsx");

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const rt = Object(De.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: n,
						first: r,
						flairStyleTemplate: a,
						isLoggedIn: c,
						isOverlay: d,
						moderatorPermissions: l,
						modModeEnabled: m,
						onClickPost: u,
						onClickPostAuthor: p,
						onClickPostCommunity: b,
						onIgnoreReports: h,
						poll: g,
						post: f,
						redditStyle: x,
						searchQuery: O,
						showBulkActionCheckbox: v,
						subredditOrProfile: C,
						title: y
					} = e, E = x ? void 0 : a, k = s || void 0, w = Object(tt.a)(l), N = Object(Ke.a)(f), T = Object(He.c)(f), L = Object(ce.c)({
						crosspost: s,
						post: f,
						url: void 0,
						usePreview: !1
					}), F = L && Object(_.a)(L), M = !c, B = Object(o.useMemo)(() => y ? void 0 : me(O, e => i.a.createElement("span", {
						className: Object(j.a)(je.a.syntaxHighlight)
					}, e), e => e), [y, O]), A = {
						flairStyleTemplate: E,
						isOverlay: d,
						onClickPostAuthor: p,
						onClickPostCommunity: b,
						post: f,
						shouldShowSubscribeButton: M,
						subredditOrProfile: C
					}, D = null != y ? y : i.a.createElement("div", {
						className: Object(j.a)(je.a.paddingSide, je.a.postItemTitleContainer)
					}, i.a.createElement("div", null, i.a.createElement(Ae.c, {
						format: B,
						hideSourceLink: !0,
						poll: g,
						post: f,
						redditStyle: !0,
						size: Ae.b.Medium,
						isOverlay: d,
						hideNSFWSpoilerFlair: !0
					}), f.source && !k && i.a.createElement(et.a, {
						className: je.a.outboundLink,
						href: f.source.url,
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source
					}, Object(Ue.a)(f))), F && i.a.createElement("div", {
						className: je.a.thumbnailContainer
					}, i.a.createElement(ce.b, {
						className: je.a.thumbnail,
						crosspost: k && f,
						isMeta: f.isMeta,
						post: k || f,
						redditStyle: x,
						templatePlaceholderImage: E && E.postPlaceholderImage
					})));
					return i.a.createElement(S.b, {
						className: Object(j.a)(je.a.postContainer, Object(st.a)(e), r ? je.a.mFirst : void 0, t),
						eventFactory: n,
						isOverlay: d,
						onClick: u,
						post: f,
						style: {
							...Object(st.d)(e),
							...Object(st.b)(E)
						}
					}, i.a.createElement(P.a, {
						"data-click-id": "background",
						flairStyleTemplate: E,
						redditStyle: !0
					}, i.a.createElement(We.a, {
						className: je.a.eventMeta,
						post: f
					}), i.a.createElement("div", {
						className: Object(j.a)(je.a.postContent, {
							[je.a.showBulkActionCheckbox]: v
						}),
						"data-click-id": "body"
					}, i.a.createElement(z.c, nt({
						className: Object(j.a)(je.a.paddingSide, je.a.postItemMetaContainer),
						key: "PostMeta"
					}, A)), i.a.createElement(oe, {
						className: Object(j.a)(je.a.paddingSide, je.a.postItemWarningContainer),
						isSpoiler: f.isSpoiler,
						isNSFW: f.isNSFW,
						isQuarantined: null == C ? void 0 : C.isQuarantined
					}), D, m && w && N && i.a.createElement(Ve.a, {
						thing: f
					}), m && w && T && i.a.createElement(ze.a, {
						onIgnoreReports: h,
						reportable: f
					}), i.a.createElement(I.c, {
						className: Object(j.a)(je.a.paddingSide, je.a.postItemFlatlistContainer),
						post: f
					}), i.a.createElement(R.d, null))))
				}),
				ot = Object($e.b)((e => t => {
					const s = Object(ue.ib)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(qe.eb)(s))
							}
						})(Object(a.d)(), {
							...t
						}),
						r = Object(ue.cb)(s),
						o = Object(a.e)(Xe),
						c = {
							...t,
							...o,
							...n,
							searchQuery: r
						};
					return i.a.createElement(e, c)
				})(rt));
			var it = s("./src/reddit/connectors/PostList/index.ts"),
				at = s("./src/reddit/contexts/Visibility.tsx"),
				ct = s("./src/reddit/controls/Button/index.tsx"),
				dt = s("./src/reddit/controls/Button/index.m.less"),
				lt = s.n(dt),
				mt = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				ut = s("./src/reddit/hooks/useTracking.ts"),
				pt = s("./src/reddit/selectors/comments.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts");

			function ht(e) {
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
			var gt = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				ft = s.n(gt);
			var xt;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(xt || (xt = {}));
			var Ot = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				vt = s("./src/lib/truncateText/index.ts"),
				Ct = s("./src/lib/prettyPrintNumber/index.ts"),
				yt = s("./src/reddit/components/SubscribeButton/index.tsx"),
				jt = s("./src/reddit/helpers/karma.ts");
			var _t = s("./src/reddit/constants/tracking.ts"),
				Et = s("./src/reddit/helpers/correlationIdTracker.ts"),
				kt = s("./src/reddit/selectors/telemetry.ts");
			var Pt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				St = s("./src/reddit/constants/posts.ts"),
				It = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				wt = s("./src/reddit/selectors/subreddit.ts"),
				Nt = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				Tt = s.n(Nt);
			const Lt = Object(c.c)({
					isBlockingInterstitialEnabled: It.b,
					isBlockingInterstitialV2Enabled: It.c,
					hideNSFWPref: K.H,
					subredditOrProfile: wt.Q,
					subredditOrProfileAboutInfo: wt.M,
					userIsSubscriber: wt.jb
				}),
				Rt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ue.ib)(), m = Object(ut.a)(), u = Object(A.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: g,
						subredditOrProfileAboutInfo: f
					} = Object(a.e)(t => Lt(t, e)), {
						withCommunityDescription: x
					} = Object(a.e)(V.a), O = d && x, v = Object(a.d)(), C = Object(o.useCallback)(e => {
						g && n.type === St.a.PROFILE && (p || b) && (e.preventDefault(), v(Object(qe.bb)(g.url))), m(Object(fe.q)(c, l, n, r))
					}, [m, c, l, r, n, p, b, v, g]);
					if (!g) return null;
					const y = g.displayText,
						_ = f.publicDescription,
						E = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(jt.a)(e),
									n = Object(Ct.b)(s);
								return w.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [w.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? w.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [w.fbt._plural(s.subscribers, "number of subscribers", Object(Ct.b)(s.subscribers))], {
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
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(yt.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(yt.a, {
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
									const r = kt.J(n, void 0);
									return {
										source: fe.c.SEARCH,
										action: _t.c.CLICK,
										noun: `${s}_${fe.d[e.type]}`,
										actionInfo: Object(fe.k)(n, void 0, r, void 0),
										correlationId: Object(Et.c)(Et.a.SearchResults),
										profile: "profile" === e.type ? kt.Z(n, e.id) : void 0,
										search: kt.fb(n, t, mt.a.SERP),
										subreddit: "subreddit" === e.type ? kt.rb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: ct.c.Tertiary
						});
					return i.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(j.a)(Tt.a.link, d && Tt.a.sidebar, s ? Tt.a.mFirst : void 0, t),
						onClick: C,
						to: {
							pathname: g.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: Tt.a.container
					}, i.a.createElement(Pt.b, {
						className: Object(j.a)(Tt.a.subredditIcon, O && Tt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: g
					}), i.a.createElement("div", {
						className: Tt.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(j.a)(Tt.a.subredditInfo, d && Tt.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(j.a)(Tt.a.title, d && Tt.a.sidebar)
					}, y), i.a.createElement(oe, {
						className: Object(j.a)(Tt.a.warnings, d && Tt.a.sidebar),
						isQuarantined: null == g ? void 0 : g.isQuarantined,
						isNSFW: null == g ? void 0 : g.isNSFW
					}), E && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: Tt.a.subtitle
					}, !d && i.a.createElement(M.b, null), E))), !d && i.a.createElement("p", {
						className: Tt.a.description
					}, Object(vt.a)(_, 150, "..."))), i.a.createElement("div", {
						className: Tt.a.buttonContainer
					}, k)), O && n.type !== St.a.PROFILE && i.a.createElement("p", {
						className: Object(j.a)(Tt.a.description, d && Tt.a.sidebar)
					}, Object(vt.a)(_, 75, "...")))
				};
			var Ft = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				Mt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				Bt = s("./src/lib/objectSelector/index.ts"),
				At = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				Dt = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				Ut = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				Wt = s("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				Vt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Kt = s("./src/reddit/components/UserIcon/constants.ts"),
				zt = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Ht = s("./src/reddit/constants/componentTestIds.ts"),
				qt = s("./src/reddit/controls/MetaData/index.tsx"),
				Gt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Yt = s("./src/reddit/models/User/index.ts"),
				Qt = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				Jt = s.n(Qt);
			var Zt = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Xt = s.n(Zt),
				$t = s("./src/reddit/components/SearchResultsContent/SearchResultsList/utils.ts");
			const es = 5,
				ts = Object(c.c)({
					apiError: ve.b,
					apiPending: ve.c,
					loadMore: ve.s,
					viewportDataLoaded: Te.b
				}),
				ss = Object(c.c)({
					apiError: ve.e,
					apiPending: ve.f,
					loadMore: ve.t,
					viewportDataLoaded: Te.b
				}),
				ns = Object(c.c)({
					apiError: ve.h,
					apiPending: ve.i,
					loadMore: ve.u,
					viewportDataLoaded: Te.b
				}),
				rs = Object(c.c)({
					apiError: ve.x,
					apiPending: ve.y,
					loadMore: ve.v,
					viewportDataLoaded: Te.b
				});
			var os;
			! function(e) {
				e.Posts = "posts", e.Subreddits = "communities", e.Users = "authors", e.Comments = "comments", e.PdpComments = "pdp_comments"
			}(os || (os = {}));
			const is = {
				[os.Comments]: {
					cacheName: "comment",
					Component: e => {
						let {
							identifier: t,
							listingKey: s,
							searchOptions: n
						} = e;
						const r = Object(ue.ib)(),
							o = Object(ut.a)(),
							c = Object(a.d)(),
							d = Object(a.e)(e => Object(bt.c)(e, {
								commentId: t
							})),
							l = Object(a.e)(e => Object(pt.m)(e, {
								commentId: t
							})),
							m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(Je.F)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(Je.E)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(a.e)(e => e.search.searchQuery),
							b = Object(A.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(it.b)(c),
							g = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a;
								return function() {
									o(Object(fe.p)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: r,
										searchOptions: n,
										telemetrySource: mt.a.SERP
									})), t(...arguments)
								}
							},
							x = Object(Be.b)(d.postId, h),
							O = e => g(e);
						return i.a.createElement(ot, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: g(xt.POST, null != x ? x : f.a),
							onClickPostAuthor: O(xt.POST_AUTHOR),
							onClickPostCommunity: O(xt.POST_COMMUNITY),
							onIgnoreReports: f.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: i.a.createElement(at.a, null, i.a.createElement("div", {
								className: ft.a.commentContainer,
								"data-testid": "search_comment_container"
							}, i.a.createElement("div", {
								className: ft.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: O(xt.POST)
							}, m && i.a.createElement(Ae.c, {
								className: ft.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Ae.b.Metadata
							})), i.a.createElement("div", {
								className: ft.a.commentContent,
								"data-testid": "search_comment",
								onClick: g(xt.COMMENT, e => {
									e.stopPropagation(), c(Object(Fe.b)(Object(E.a)(l, !0, b)))
								})
							}, i.a.createElement(Me.a, {
								clearHovered: f.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: i.a.createElement(ht, {
									className: ft.a.commentFlatlist,
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
								onCommentAuthorClick: e => (e.stopPropagation(), O(xt.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), O(xt.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: f.a,
								showBlockingInterstitial: f.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									o(Object(fe.s)(n, d, s, r))
								}
							})), i.a.createElement(ct.t, {
								kind: ct.b.InternalLink,
								priority: ct.c.PlainLink,
								className: Object(j.a)(ft.a.goToThreadLinkButton, lt.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: g(xt.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(E.a)(u, !0, b)
							}, w.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.hc.Comments],
					Placeholder: Ot.a,
					selector: ss,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: Mt.d
				},
				[os.Subreddits]: {
					cacheName: "community",
					Component: Rt,
					moreResultsTypes: [d.hc.Subreddits],
					Placeholder: Ft.a,
					selector: ns,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: Mt.e
				},
				[os.Users]: {
					cacheName: "author",
					Component: Rt,
					moreResultsTypes: [d.hc.Users],
					Placeholder: Ft.a,
					selector: ts,
					telemetryComponentName: "authorSearchResults",
					telemetryViewEvent: Mt.e
				},
				[os.Posts]: {
					cacheName: "post",
					Component: e => {
						var t, s;
						const {
							first: n,
							listingKey: r,
							searchOptions: o
						} = e, c = Object(a.e)(t => Object(ve.z)(t, e)), d = Object(a.e)(e => {
							if (c.crosspostRootId) return Object(ve.z)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(a.e)(e => Object(K.lb)(e)), m = Object(xe.a)(), u = Object(a.d)(), p = Object(de.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = C.a.parse(s),
								r = n.path || "",
								o = r.length > 7 ? r.substring(0, 7) + "..." : r;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + o
						}(c), h = Object(ue.cb)(m), g = d ? d.thumbnail.url : c.thumbnail.url, x = g && Object(_.a)(g), O = Object(U.a)(), v = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a;
							return function() {
								p(Object(fe.r)(c.id, o, m, e || null, r)), t(...arguments)
							}
						}, E = e => v(e), k = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), E(fe.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), E(fe.e.POST_COMMUNITY)(e))
						};
						return i.a.createElement("div", {
							className: Object(j.a)(je.a.postContainer, n && je.a.mFirst),
							"data-adclicklocation": y.a.BACKGROUND,
							"data-click-id": y.a.BACKGROUND,
							"data-testid": S.a,
							id: c.id,
							onClick: v(fe.e.POST, e => {
								e.stopPropagation(), l ? window.open(c.permalink) : u(Object(he.a)({
									pathname: Object(ge.b)(c.permalink),
									state: Object(be.b)(m)
								}))
							}),
							tabIndex: -1
						}, i.a.createElement(P.a, {
							"data-click-id": y.a.BACKGROUND,
							redditStyle: !0
						}, i.a.createElement("div", {
							className: je.a.postContent,
							"data-click-id": y.a.BODY
						}, i.a.createElement(ee, _e({
							className: Object(j.a)(je.a.paddingSide, je.a.postItemMetaContainer),
							key: "PostMeta"
						}, k)), i.a.createElement(oe, {
							className: Object(j.a)(je.a.paddingSide, je.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), i.a.createElement("div", {
							className: Object(j.a)(je.a.paddingSide, je.a.postItemTitleContainer)
						}, i.a.createElement("div", {
							className: je.a.postContent
						}, i.a.createElement(ke, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && i.a.createElement(pe.b, {
							className: je.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), x && i.a.createElement("div", {
							className: je.a.thumbnailContainer
						}, i.a.createElement(Pe, {
							makeSendClickEventFn: e => (e.stopPropagation(), E(fe.e.POST)(e)),
							post: c,
							theme: O
						}))), i.a.createElement(I.c, {
							className: Object(j.a)(je.a.paddingSide, je.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.hc.Posts],
					Placeholder: Se.a,
					selector: rs,
					telemetryComponentName: "postList",
					telemetryViewEvent: Mt.g,
					trackOnEnteredViewportCallback: $t.b,
					trackOnExitedViewportCallback: $t.a
				},
				[os.PdpComments]: {
					cacheName: "pdp-comment",
					Component: e => {
						let {
							identifier: t,
							first: s,
							listingKey: n,
							searchOptions: r,
							pageKey: o
						} = e;
						const c = Object(ue.ib)(),
							d = Object(ut.a)(),
							l = Object(a.d)(),
							m = Object(a.e)(e => Object(bt.c)(e, {
								commentId: t
							})),
							u = Object(a.e)(e => Object(pt.m)(e, {
								commentId: t
							})),
							p = Object(a.e)(e => Object(K.m)(e)),
							b = Object(a.e)(K.H),
							h = Object(a.e)(e => Object(Ne.i)(e)),
							g = Object(a.e)(e => (null == m ? void 0 : m.postId) && Object(Je.E)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							x = Object(a.e)(e => Object(ue.s)(e, {
								pageLayer: c
							})),
							O = Object(A.a)();
						if (!(null == m ? void 0 : m.postId) || !g) return null;
						const v = !!p && Object(Yt.e)(p) === m.author,
							C = v ? null == p ? void 0 : p.accountIcon : m.profileImage,
							y = !v && m.profileOver18 && b ? Kt.a || zt.a : C,
							_ = Object(Gt.a)(m),
							k = Object(Bt.b)(e => {
								let {
									comment: t,
									pageLayer: s
								} = e;
								return {
									renderingObjectInfo: t,
									pageLayer: s
								}
							}),
							P = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.a;
								return function() {
									d(Object(fe.p)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: r,
										telemetrySource: mt.a.PdpCommentSearch
									})), t(...arguments)
								}
							},
							S = e => P(e);
						return i.a.createElement(at.a, null, i.a.createElement("div", {
							className: Object(j.a)(Jt.a.commentContainer, Jt.a.marginContainer, Jt.a.metadataFont, s && Jt.a.first),
							"data-testid": "search_pdp_comment_container"
						}, i.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: P(xt.COMMENT, e => {
								e.stopPropagation(), l(Object(Fe.b)(Object(E.a)(u, !0, O)))
							})
						}, i.a.createElement("div", {
							className: Jt.a.flex
						}, i.a.createElement("img", {
							alt: w.fbt._("User avatar", null, {
								hk: "X43nA"
							}),
							className: Object(j.a)(Jt.a.pdpUserIcon, Jt.a.iconSpacer),
							src: y
						}), i.a.createElement(At.a, {
							authorClassName: Jt.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), S(xt.COMMENT_AUTHOR)(e)),
							renderedInOverlay: h
						}), i.a.createElement(Wt.a, {
							className: Jt.a.leftSpacer,
							comment: m,
							subredditDisplayText: (null == x ? void 0 : x.displayText) || "",
							renderContractorBadge: !0,
							renderedInOverlay: h
						}), i.a.createElement(qt.c, {
							className: Object(j.a)(Jt.a.separator, Jt.a.metadataColor)
						}), i.a.createElement(Dt.a, {
							className: Jt.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), S(xt.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: h
						}), m.editedAt && i.a.createElement(i.a.Fragment, null, i.a.createElement(qt.c, {
							className: Object(j.a)(Jt.a.separator, Jt.a.metadataColor)
						}), i.a.createElement(Ut.a, {
							className: Jt.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), i.a.createElement("div", {
							className: Object(j.a)(Jt.a.commentContent, Jt.a.marginTop),
							"data-testid": Ht.d
						}, i.a.createElement(Vt.b, {
							className: Jt.a.background,
							content: _,
							mediaMetadata: m.media && m.media.mediaMetadata,
							rtJsonElementProps: k({
								comment: m,
								pageLayer: c
							}),
							mediaProps: {
								alignLeft: !0,
								renderSmallMedia: !0
							}
						}), i.a.createElement(ht, {
							className: Object(j.a)(Jt.a.metadataFont, Jt.a.marginTop),
							comment: m
						})), i.a.createElement(R.b, {
							commentId: m.id
						}), i.a.createElement(R.a, {
							commentId: m.id,
							commentsPageKey: o
						}))))
					},
					moreResultsTypes: [d.hc.Comments],
					Placeholder: p.a,
					selector: ss,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: Mt.f
				}
			};
			const as = e => {
				const t = new m.a(250),
					s = Object(o.useRef)(),
					n = Object(o.useRef)(null),
					c = Object(ue.ib)(),
					p = Object(de.b)(),
					h = Object(a.d)(),
					{
						identifiers: g,
						listingKey: f,
						searchOptions: x,
						componentType: O,
						sidebar: v,
						originElement: C,
						pageKey: y,
						fireScreenview: j
					} = e,
					{
						cacheName: _,
						Component: E,
						moreResultsTypes: k,
						Placeholder: P,
						selector: S,
						telemetryComponentName: I,
						telemetryViewEvent: w,
						trackOnEnteredViewportCallback: N,
						trackOnExitedViewportCallback: T
					} = is[O],
					{
						apiError: L,
						apiPending: R,
						loadMore: F
					} = Object(a.e)(t => S(t, e)),
					M = !!Object(a.e)(e => Object(Ne.i)(e)),
					B = v ? es : g.length,
					A = v ? es : 10,
					D = Object(l.a)(M),
					U = Object(l.a)(g.length),
					W = () => Boolean(L) || !1 === R,
					V = () => g.length > 0,
					K = !(V() || W()),
					z = () => {
						if (!j) return;
						const e = Le.c.has(f) ? Le.c.end(f) : 0;
						p(Object(we.t)(f, x, Re.TimerType.InApp, e, c))
					};
				Object(o.useEffect)(() => {
					if (n.current && Le.c.has(n.current)) {
						const e = Le.c.end(n.current);
						if (e < 10) return;
						Object(Le.b)(d.n.Redesign, {
							duration: e,
							type: "mount",
							component: I
						})
					}
				}), Object(o.useEffect)(() => {
					K || z()
				}, [K]), Object(o.useEffect)(() => {
					n.current && Le.c.cancel(n.current), g.length && (n.current = Le.c.start())
				}, [n, f, g.length, U]), Object(o.useEffect)(() => {
					D && !M && z()
				}, [M, D]);
				const H = e => {
						s.current = e instanceof Element ? e : void 0
					},
					q = () => {
						const e = g.slice(0, B).map((e, s) => ((e, s) => {
							let n;
							n = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const r = `${_}-search-${s}-${f}`,
								o = Object(Mt.b)(n, f, () => {
									null == N || N(n, s), w(p, x, e, f, c, C)
								}),
								a = Object(Mt.c)(n, f, e => {
									null == T || T(p, n, f, x, c, e)
								}, s);
							let d;
							if (void 0 === (d = t.get(r))) {
								const t = `${_}-search-item-[id:${n}]`;
								d = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									trackOnExitedViewport: a,
									id: n,
									render: () => i.a.createElement(E, {
										className: Xt.a.separatedCommunity,
										first: 0 === s,
										identifier: e,
										key: t,
										listingKey: f,
										searchOptions: x,
										sidebar: v,
										pageKey: y
									})
								}
							}
							return t.set(r, d), d
						})(e, s));
						return i.a.createElement(b.b, {
							getContainer: () => M ? document.getElementById(Ie.e) : null,
							key: f,
							innerRef: H,
							loadMoreToken: F && F.token ? F.token : void 0,
							onLoadMore: () => {
								h(Object(u.p)(k))
							}
						}, e)
					};
				return V() ? q() : W() ? q() : (() => {
					const e = !L;
					return i.a.createElement("div", {
						"data-testid": `${O}-list-placeholder`
					}, r()(A, t => i.a.createElement(P, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})()
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/config.ts"),
				r = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = s("./src/reddit/helpers/trackers/post.ts"),
				i = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				c = s("./src/telemetry/index.ts");
			const d = e => `search-result-${e}`;

			function l(e) {
				c.c.start(d(e))
			}

			function m(e, t, s, l, m, u) {
				const p = d(t);
				if (c.c.has(p)) {
					const d = c.c.end(p);
					!u && d > n.a.telemetry.postConsumedThreshold && e(e => {
						const n = Object(a.z)(e, t, s),
							c = Object(o.g)(t, d, !1, null != n ? n : void 0)(e);
						return c.actionInfo = Object(i.k)(e, m, Object(a.J)(e, m), {
							position: n
						}), c.search = Object(a.fb)(e, l, r.a.SERP, null != m ? m : void 0), c
					})
				}
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				i = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const c = new n.a(250),
				d = new n.a(250),
				l = (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = c.get(n);
					return void 0 === r && (r = s, c.set(n, r)), r
				},
				m = (e, t, s, n) => {
					const r = `left-${e}`;
					let o = d.get(r);
					return void 0 === o && (o = s, d.set(r, o)), o
				},
				u = (e, t, s, n, o) => e(e => Object(i.j)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: o,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				p = (e, t, s, n, c, d) => e(e => {
					const l = Object(a.c)(e, {
						commentId: s
					});
					return Object(i.i)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: l,
						key: n,
						originElement: d,
						telemetrySource: o.a.SERP
					})
				}),
				b = (e, t, s, n, c, d) => e(e => {
					const l = Object(a.c)(e, {
						commentId: s
					});
					return Object(i.i)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: l,
						key: n,
						originElement: d,
						telemetrySource: o.a.PdpCommentSearch
					})
				}),
				h = (e, t, s, n, o) => e(e => ({
					...Object(i.l)({
						state: e,
						searchOptions: t,
						pageLayer: o,
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
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
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
				d = s("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/constants/location.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				g = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				v = s("./src/redditGQL/types.ts"),
				C = s("./src/reddit/components/SidebarFooter/index.m.less"),
				y = s.n(C);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = c.a.a("Link", y.a), E = Object(i.c)({
				countryCode: O.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), k = Object(o.b)(E), P = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, s, !!p.c[t] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, j._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, j._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, j._("help", null, {
					hk: "4lyYaD"
				})), t === v.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, j._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, j._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, j._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, j._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, j._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, j._("Reddit, Inc. © {year}. All rights reserved.", [j._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = P(k(Object(l.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(g.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.kd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.kd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.kd.LargeImagePreview ? e.reredditButtons : [];
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
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(m.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, j._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, j._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, j._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, j._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, j._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, j._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, j._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, j._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: y.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, j._("Reddit, Inc. © {year}. All rights reserved.", [j._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(d.a, null))
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
				O = x + 152 + 16,
				v = O + f + 8,
				C = h.a.div("Container", b.a),
				y = h.a.wrapped(e => {
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
				j = e => {
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
			class _ extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > O
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
					}, c.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					return a.a.createElement(C, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(j, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !o && a.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(y, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const E = Object(u.v)();
			t.a = E(_)
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
				return L
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/helpers.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/Footer/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				O = s("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				v = s("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				C = s("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				y = s("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				j = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				_ = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				E = s("./src/reddit/actions/contentGate.ts"),
				k = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				P = s.n(k);
			const S = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				I = () => r.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				w = () => r.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				N = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(j.g),
						l = Object(o.useCallback)(() => {
							n === j.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						m = (e => e ? i.a.createElement("div", {
							className: P.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: P.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === j.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.d)(n)
					}, [n]), i.a.createElement("div", {
						className: P.a.mainCta
					}, i.a.createElement(y.b, null), m, i.a.createElement("div", {
						className: P.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: P.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: P.a.buttonContainer
					}, i.a.createElement(f.j, {
						className: P.a.logIn,
						onClick: () => {
							s(Object(C.a)()), l(), Object(x.c)(x.a.Login), t(Object(u.openLoginModal)())
						}
					}, I()), i.a.createElement(f.j, {
						className: P.a.cancel,
						onClick: () => {
							Object(d.b)(), s(Object(C.b)()), Object(x.c)(x.a.Dismiss), t(Object(c.b)("/"))
						}
					}, w())))
				},
				T = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: P.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: P.a.qrCodeInner
					}, i.a.createElement("img", {
						className: P.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: P.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: P.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: P.a.sneakySnoo,
						src: t
					})))
				}),
				L = e => {
					const t = Object(h.b)(),
						{
							contentTitle: s
						} = e,
						n = Object(a.e)(j.i),
						r = Object(a.e)(j.j),
						o = Object(a.e)(j.g),
						c = Object(a.e)(_.c);
					i.a.useEffect(() => {
						c.isNewDesignVariant ? t(Object(v.d)()) : t(Object(C.c)())
					}, [c, t]);
					const d = o === j.a.Blurred ? b.a.White : o === j.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: P.a.container
					}, c.isNewDesignVariant ? i.a.createElement(R, {
						contentTitle: s
					}) : i.a.createElement(N, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(P.a.footerWrapper, {
							[P.a.mIsModal]: o === j.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: d
					})), i.a.createElement(T, {
						qrCodeAsset: (() => n === g.hd.Enabled || r === g.hb.BlurredPreview || r === g.hb.NoPreview ? S.d2x_nsfw_signup_blocking_de_v1 : S.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				R = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(j.h);
					return Object(o.useEffect)(() => {
						Object(O.c)(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(P.a.mainCta, {
							[P.a.skippable_buttons]: n === g.ib.SkippableButtons,
							[P.a.skippable_text]: n === g.ib.SkippableText
						})
					}, i.a.createElement("div", {
						className: P.a.contentDescription
					}, i.a.createElement(y.b, {
						fill: y.a.BLACK
					}), i.a.createElement("span", {
						className: P.a.cta
					}, e.contentTitle), i.a.createElement("span", {
						className: Object(l.a)(P.a.warning, P.a.warning__bypassable)
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), i.a.createElement("div", {
						className: P.a.cta
					}, (() => r.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), i.a.createElement("div", {
						className: P.a.buttonContainer
					}, i.a.createElement(f.j, {
						className: P.a.logIn,
						onClick: () => {
							s(Object(v.a)()), Object(O.b)(O.a.Login), t(Object(u.openLoginModal)())
						}
					}, I()), n === g.ib.SkippableButtons && i.a.createElement("div", {
						className: P.a.divider
					}, i.a.createElement("div", {
						className: P.a.dividerLine
					}), i.a.createElement("div", {
						className: P.a.dividerText
					}, (() => r.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), i.a.createElement("div", {
						className: P.a.dividerLine
					})), i.a.createElement(f.j, {
						className: P.a.continue,
						onClick: async () => {
							s(Object(v.b)()), Object(O.b)(O.a.Continue), Object(E.q)(), Object(_.d)(), window.location.reload()
						}
					}, (() => r.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), i.a.createElement(f.j, {
						className: Object(l.a)(P.a.continue, P.a.dismiss, {
							[P.a.no_border]: n === g.ib.SkippableText
						}),
						onClick: () => {
							s(Object(v.c)()), Object(O.b)(O.a.Dismiss), t(Object(c.b)("/"))
						}
					}, n === g.ib.SkippableText ? (() => r.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : w())))
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
				thumbnailWrapper: "FbUnsa6_9Y7zASOdkXBni",
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
				verticalPostPreviewThumbnail: "_23aHU6t4uajlAh0CKp4cOP",
				thumbnail: "_2DBbsvO3jP7bcFqAftcbiQ",
				blur: "_1YTMtnzKujONiVS3cvsRJd"
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
					...h.q(e),
					source: "global",
					noun: "discovery_unit",
					action: "view",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				f = e => ({
					...h.q(e),
					source: "post",
					noun: "upvote",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				x = e => ({
					...h.q(e),
					source: "post",
					noun: "comments",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				});
			var O = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./node_modules/lodash/once.js"),
				y = s.n(C),
				j = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				P = s("./src/lib/timeAgo/index.ts"),
				S = s("./src/lib/truncateText/index.ts"),
				I = s("./src/reddit/components/Flair/index.tsx"),
				w = s("./src/reddit/components/SubredditIcon/index.tsx"),
				N = s("./src/reddit/constants/thumbnails.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				L = s("./src/reddit/helpers/trackers/post.ts"),
				R = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				F = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				M = s("./src/reddit/models/Flair/index.ts"),
				B = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				A = s("./src/reddit/actions/linkedPosts/index.ts"),
				D = s("./src/reddit/constants/experiments.ts"),
				U = s("./src/reddit/components/Widgets/Recommendations/index.m.less"),
				W = s.n(U);
			const V = 2e3;
			class K {
				constructor(e, t) {
					this.intersectingRatio = -1, this.consumed = !1, this.maybeConsume = () => {
						this.clearConsumeTimeout(), this.isConsuming() && (this.onConsume(), this.consumed = !0, this.disconnect())
					}, this.handleIntersectionEvent = e => {
						this.intersectingRatio = e[0].intersectionRatio, this.isViewing() && this.onView(), !this.isConsuming() || this.consumed || this.consumeTimeoutId || (this.consumeTimeoutId = setTimeout(this.maybeConsume, V))
					}, this.onConsume = y()(t), this.onView = y()(e), this.observer = new IntersectionObserver(this.handleIntersectionEvent, {
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
					a = Object(l.e)(B.a) === D.kd.LargeImagePreview;
				Object(c.useEffect)(() => {
					var e;
					null === (e = o.current) || void 0 === e || e.disconnect(), o.current = new K(() => {
						n(Object(L.j)(s.id))
					}, () => {
						n(Object(L.g)(s.id, V, !0))
					}), o.current.connect(r.current)
				}, [s, n]);
				const m = Object(c.useCallback)(() => {
						const e = Object(u.a)(s.id);
						t(Object(A.c)({
							key: e
						})), window.scroll(0, 0), n(Object(L.i)(s.id))
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
						thumbnail: O,
						upvoteRatio: v,
						permalink: C,
						title: y
					} = s,
					U = v ? `${Math.round(100*v)}%` : "",
					z = s.flair.length ? s.flair.findIndex(e => e.type === M.f.Nsfw) : -1,
					H = z >= 0;
				return d.a.createElement("li", {
					className: W.a.postPreview,
					ref: r,
					onClick: m
				}, d.a.createElement(j.a, {
					to: Object(T.b)(C)
				}, a ? (() => d.a.createElement("div", {
					className: W.a.verticalPostPreviewContainer
				}, d.a.createElement("div", {
					className: W.a.verticalPostPreviewHeader
				}, d.a.createElement("div", {
					className: W.a.subredditTitle
				}, d.a.createElement(w.b, {
					className: W.a.subredditIcon,
					subredditOrProfile: i
				}), d.a.createElement("span", {
					className: W.a.subredditName
				}, i && `r/${i.name}`), H && d.a.createElement(I.c, {
					flair: s.flair[z]
				}))), O && Object(E.a)(O.url) && d.a.createElement("div", {
					className: W.a.verticalPostPreviewThumbnail
				}, d.a.createElement("div", {
					className: W.a.thumbnailWrapper
				}, d.a.createElement("img", {
					"data-testid": "post-large-preview-image",
					className: Object(_.a)(W.a.thumbnail, {
						[W.a.blur]: H
					}),
					src: O.url
				}))), d.a.createElement("div", {
					className: Object(_.a)(W.a.postTitle, {
						[W.a.shortTitle]: O.url !== N.a.DEFAULT
					})
				}, Object(S.a)(y, 60, "..."))))() : (() => d.a.createElement(d.a.Fragment, null, O && Object(E.a)(O.url) && d.a.createElement("div", {
					className: W.a.thumbnailWrapper
				}, d.a.createElement("img", {
					"data-testid": "post-compact-preview-image",
					className: Object(_.a)(W.a.thumbnail, {
						[W.a.blur]: H
					}),
					src: O.url
				})), d.a.createElement("div", {
					className: W.a.subredditTitle
				}, d.a.createElement(w.b, {
					className: W.a.subredditIcon,
					subredditOrProfile: i
				}), d.a.createElement("span", {
					className: W.a.subredditName
				}, i && `r/${i.name}`), H && d.a.createElement(I.c, {
					flair: s.flair[z]
				})), d.a.createElement("div", {
					className: Object(_.a)(W.a.postTitle, {
						[W.a.shortTitle]: O.url !== N.a.DEFAULT
					})
				}, Object(S.a)(y, 60, "..."))))(), d.a.createElement("div", {
					className: W.a.metaContainer
				}, d.a.createElement("div", {
					className: W.a.metaSection,
					onClick: p
				}, d.a.createElement(F.a, {
					className: W.a.icon
				}), d.a.createElement("span", null, U)), d.a.createElement("div", {
					className: W.a.metaSection,
					onClick: b
				}, d.a.createElement(R.a, {
					className: W.a.icon
				}), d.a.createElement("span", {
					className: W.a.meta
				}, Object(k.b)(g))), d.a.createElement("span", {
					className: W.a.dotSpacer
				}), d.a.createElement("div", {
					className: W.a.metaSection
				}, d.a.createElement("span", null, Object(P.a)(h / 1e3, !0))))))
			});
			var H = e => d.a.createElement("div", {
				className: Object(_.a)(W.a.placeholderWrapper)
			}, d.a.createElement("div", {
				className: W.a.header
			}, d.a.createElement("span", {
				className: W.a.subredditIconLoading
			}), d.a.createElement("span", {
				className: W.a.subredditNameLoading
			})), d.a.createElement("div", {
				className: W.a.postTitleLoading
			}), d.a.createElement("div", {
				className: W.a.postMetaSectionLoading
			}));
			const q = () => n.fbt._("Similar to this post", null, {
					hk: "XKYGj"
				}),
				G = [];
			for (let X = 0; X < 15; X++) G.push(d.a.createElement(H, {
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
					return Object(v.y)(e, {
						listingKey: s
					})
				}, e => e.posts.models, (e, t) => {
					const s = Y(0, t);
					return Object(O.d)(e, {
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
				return S
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
			const O = o.a.a("Link", h.a);
			var v = e => {
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
					return i ? r.a.createElement(O, {
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
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/helpers/ordinal/index.ts"),
				j = s("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				_ = s.n(j);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], P = o.a.div("ButtonContainer", _.a), S = e => {
				let {
					directoryTimestamp: t,
					postId: s,
					renderAsPlainLink: n
				} = e;
				const o = new Date(t),
					i = k[o.getMonth()],
					a = o.getFullYear(),
					c = o.getDate(),
					d = Object(y.a)(c),
					l = `${a}/${i}-${c}-1/`,
					m = `${a}/${i}/`,
					u = `${a}/`;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
					key: "ymd",
					buttonText: `top_posts_${i}_${d}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: l
				}, E._("Top posts {date}", [E._param("date", `${i} ${d} ${a}`)], {
					hk: "4xgYoo"
				})), r.a.createElement(v, {
					key: "ym",
					buttonText: `top_posts_of_${i}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: m
				}, E._("Top posts of {date}", [E._param("date", `${i}, ${a}`)], {
					hk: "HQnvs"
				})), r.a.createElement(v, {
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
				return r.a.createElement(i.a, null, r.a.createElement(C.a, {
					className: _.a.Widget,
					contentOnly: !0
				}, r.a.createElement(p, {
					postId: s,
					url: a
				}), r.a.createElement(P, null, r.a.createElement(S, {
					directoryTimestamp: t,
					postId: s
				}))))
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
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = v(e);
					return Object(x.e)(t)
				},
				j = e => {
					const t = C(e);
					return Object(x.e)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(_);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = Object(m.v)(), S = Object(o.b)(() => Object(i.c)({
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
			class I extends r.a.Component {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = j(this.props), e
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
			t.a = P(S(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
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
				x = s("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				O = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/tracking.ts"),
				_ = s("./src/reddit/selectors/user.ts");

			function E() {
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
			const k = E(),
				P = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: v.g,
					postsById: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(C.S)(e, {
							listingKey: s,
							keepHiddenPosts: Object(x.a)(e)
						})
					},
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(C.C)(e, s, n, r, Object(x.a)(e))
					}),
					subredditsById: y.eb,
					viewportDataLoaded: j.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: O.e,
					isLoggedIn: _.S
				},
				S = Object(r.c)(P),
				I = e => ({
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
						e(d.M(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.N(t, n, r))
					},
					showModalOnScroll: () => e(d.ab()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				N = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(h.n)(e, t, "post", r, o, i, void 0)
				},
				T = Object(n.b)(S, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: N
				}));
			t.a = e => Object(u.c)(k(T(e)))
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
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeGqlRequest/index.ts");
			var r, o = s("./src/redditGQL/operations/LanguageSelections.json"),
				i = s("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const a = (e, t) => {
					const s = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(n.a)(t, {
						...o,
						variables: s
					})
				},
				c = async e => {
					const t = await a(r.ALL_KEY, e());
					if (!t.ok) return null;
					const s = t.body,
						n = null == s ? void 0 : s.data;
					return n ? (e => {
						const t = {},
							s = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: s
						}
					})(n) : null
				}, d = async (e, t, s) => {
					const n = await a(e, t());
					if (!n.ok) return null;
					const o = n.body,
						i = null == o ? void 0 : o.data;
					if (i) {
						return ((e, t, s) => {
							let n = null,
								r = [];
							const o = [],
								i = [],
								a = {},
								c = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									c[e] = !0
								})
							}
							for (let d = 0; d < t.suggested.length; d++) {
								const r = t.suggested[d];
								if (a[r.isoCode] = !0, s === r.isoCode) n = r;
								else {
									if (!e && c[r.isoCode]) continue; {
										const t = !!(e || !e && c[r.isoCode]);
										o.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let d = 0; d < t.all.length; d++) {
								const o = t.all[d];
								o.isoCode === s ? (n = o, i.push({
									selected: !0,
									...o
								})) : !e && c[o.isoCode] ? i.push({
									selected: !0,
									...o
								}) : a[o.isoCode] || r.push({
									selected: !(e || !c[o.isoCode]),
									...o
								})
							}
							if (r = o.concat(r), null === n) {
								const e = s.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										n = r[t], r.splice(t, 1);
										break
									}
							}
							return n && ((e || !e && c[n.isoCode]) && (n.selected = !0), r.unshift(n)), e || (r = i.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, i, s)
					}
					return null
				}, l = async (e, t) => {
					const s = await ((e, t) => {
						const s = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(n.a)(e, {
							...i,
							variables: s
						})
					})(e(), Object.keys(t));
					if (!s.ok) return null;
					const r = s.body;
					return null == r ? void 0 : r.data
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
		"./src/reddit/helpers/counters/nsfwBypassableBlocking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/sample/index.ts"),
				i = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				a = s("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(n || (n = {}));
			const c = e => {
					Object(i.b)() || Object(a.b)(r.n.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!Object(i.b)() && e && Object(o.b)(10) && Object(a.b)(r.n.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: n.View,
							variant: e
						}
					})
				}
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
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/env/index.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				i = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(n.a)() ? [window.location.host] : []].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				a = ["mod.reddit.com"],
				c = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: i.concat("redd.it"),
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
						hostnames: a,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: a,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(r.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(c).some((function(s) {
						return t = function(e, t) {
							const s = c[e];
							if (!c) throw new Error("Could not find reddit URL spec: " + e);
							const n = Object(r.a)(t);
							if (!n) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || i).indexOf(n.hostname)) return;
							const o = n.pathname.match(s.pathname);
							if (o) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = o[s + 1], e
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
					...n.q(s)
				}),
				o = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.q(s)
				}),
				i = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...n.q(e)
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = "nsfw_dialog_bypassable",
				o = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "view",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				}),
				i = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(n.d)(e),
						popupButtonText: "login"
					}
				}),
				a = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "dismiss",
					noun: r,
					actionInfo: {
						...Object(n.d)(e),
						popupButtonText: "back"
					}
				}),
				c = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(n.d)(e),
						popupButtonText: "continue"
					}
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupUpsell.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = "nsfw_dialog",
				o = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "view",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				}),
				i = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				}),
				a = () => e => ({
					...Object(n.q)(e),
					source: "xpromo",
					action: "dismiss",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
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
					...Object(n.q)(e),
					media: Object(n.E)(e, t),
					profile: Object(n.V)(e),
					subreddit: Object(n.nb)(e) || Object(n.qb)(e, t)
				}),
				o = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.M)(t, e),
					...r(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.M)(t, e),
					...r(t, e)
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Mute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...n.q(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				},
				i = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Unmute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...n.q(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				}
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
					widget: Object(i.Ab)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.q
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.M(s, e),
					subreddit: i.nb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.q(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.q(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.q(t),
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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r);
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(n || (n = {}));
			t.b = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "60",
				viewBox: "0 0 60 60",
				xmlns: "http://www.w3.org/2000/svg",
				width: "60"
			}, o.a.createElement("path", {
				d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
				fill: e.fill || n.DEFAULT
			}), o.a.createElement("path", {
				d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
				fill: e.fill || n.DEFAULT
			}), o.a.createElement("path", {
				d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
				fill: e.fill || n.DEFAULT
			}))
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
		"./src/reddit/icons/svgs/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("polygon", {
				points: "0,40 14.3,29.2 10.8,25.7"
			}), r.a.createElement("path", {
				d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
			}))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
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
				b = s("./src/reddit/helpers/ads/index.ts"),
				h = s("./src/reddit/helpers/history/index.ts"),
				g = s("./src/reddit/models/Comment/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/pages/CommentsPage/index.tsx"),
				O = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
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
			const j = Object(d.b)(() => Object(C.c)({
				primaryPostId: v.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? c.a.createElement(p.a, {
					postId: t
				}, c.a.createElement(x.CommentsPage, y({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(O.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, u.b.IsOverlay, !1), n = i()(t, u.b.CloseLocation, null), o = i()(t, u.b.ScrollOnLoad, !1);
				o && Object(h.c)(u.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: d,
						partialPostId: p,
						subredditName: x,
						collectionId: O
					} = a,
					v = p ? Object(f.y)(p) : void 0,
					C = d && Object(g.h)(d),
					y = r()([...Object(l.a)(e.location.search)]),
					_ = {};
				e.hasSortParam && (_.sort = e.sort, _.hasSortParam = !0);
				const E = Object(m.a)(O, v, C, _);
				return c.a.createElement(j, {
					closeLocation: n,
					collectionId: O,
					commentId: C,
					commentsPageKey: E,
					isOverlay: s,
					location: e.location,
					postId: v,
					instanceId: Object(b.a)(y, t),
					shouldScrollToComments: o,
					sort: e.sort,
					subredditName: x,
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
				return T
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
				b = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				f = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				O = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				v = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/helpers/trackers/searchResults.ts"),
				j = s("./src/reddit/hooks/usePageLayer.ts"),
				_ = s("./src/reddit/selectors/comments.ts"),
				E = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				k = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				P = s("./src/reddit/selectors/platform.ts"),
				S = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				I = s.n(S);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = Object(a.c)({
				commentSearchPdp: E.a,
				isSubredditDiscoveryCrosspostEnabled: k.a,
				headComment: _.x,
				lastPage: P.m,
				post: _.J
			}), T = e => {
				var t, s;
				const n = Object(j.a)(),
					{
						commentSearchPdp: a,
						isSubredditDiscoveryCrosspostEnabled: _,
						headComment: E,
						lastPage: k,
						post: P
					} = Object(o.e)(t => N(t, e)),
					S = Object(h.b)(),
					T = Object(o.d)(),
					{
						commentId: L,
						isOverlay: R,
						postId: F
					} = e;
				if (!P) return null;
				const M = null !== (t = P.numDuplicates) && void 0 !== t ? t : 0,
					B = void 0 !== L,
					A = P.permalink,
					D = M > 0,
					U = Object(f.b)(Object(m.e)(A));
				if (!B && !D) return null;
				const W = (null == k ? void 0 : k.queryParams.q) && (null === (s = k.meta) || void 0 === s ? void 0 : s.name) === l.Sb.COMMENTS,
					V = a.bucketed && Object(b.a)(n) && Object(b.b)(P),
					K = Object(c.a)(Object(f.b)(A), (null == k ? void 0 : k.queryParams) || {});
				return r.a.createElement("div", {
					className: I.a.CommentsNavigationPane
				}, W && B && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: I.a.flex
				}, r.a.createElement("button", {
					onClick: () => {
						S(Object(y.o)(y.a.BACK, Object(g.d)({
							searchValue: null == k ? void 0 : k.queryParams.q,
							post: P
						}), x.a.SERP, n || void 0)), T(Object(i.b)(K, {
							...null == k ? void 0 : k.locationState
						}))
					},
					className: Object(d.a)(I.a.linkOrOverlay, I.a.truncate),
					"data-testid": "back_to_comment_search_results"
				}, w._('Back to comments with "{current search query}"', [w._param("current search query", (null == k ? void 0 : k.queryParams.q) || "")], {
					hk: "4dHWeM"
				})), r.a.createElement("span", {
					className: I.a.verticalDivider
				}, "|"))), B && r.a.createElement("div", null, r.a.createElement(p.a, {
					className: I.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: R,
					to: {
						pathname: Object(f.b)(A),
						state: null == k ? void 0 : k.locationState
					},
					onClick: () => S(Object(C.o)(F, E, n))
				}, w._("View all comments", null, {
					hk: "3I5IX9"
				})), !V && !!(null == E ? void 0 : E.parentId) && r.a.createElement(p.a, {
					className: I.a.linkOrOverlay,
					isOverlay: R,
					to: Object(f.b)(E.permalink + "?context=8&depth=9")
				}, w._("Show parent comments", null, {
					hk: "AVRCa"
				}))), !V && D && r.a.createElement(r.a.Fragment, null, _ && r.a.createElement(u.a, {
					postId: F
				}), r.a.createElement(p.a, {
					className: Object(d.a)(I.a.OtherDiscussionsLink, {
						[I.a.discoveryExperimentLink]: _
					}),
					isOverlay: R,
					onClick: () => S(_ ? Object(O.b)() : Object(v.a)(F)),
					to: U,
					"data-testid": "view_other_discussions"
				}, _ ? r.a.createElement(r.a.Fragment, null, w._("View all", null, {
					hk: "30twDK"
				}), ` (${M})`) : w._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [w._plural(M, "other discussion communities count")], {
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
				return qt
			})), s.d(t, "_CommentsPage", (function() {
				return Xt
			})), s.d(t, "CommentsPage", (function() {
				return $t
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
				O = s("./node_modules/reselect/es/index.js"),
				v = s("./src/reddit/models/PostDraft/index.ts"),
				C = s("./src/telemetry/index.ts"),
				y = s("./src/telemetry/models/Timer.ts"),
				j = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				_ = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/domUtils/index.ts"),
				P = s("./src/lib/fastdom/index.ts"),
				S = s("./src/lib/lessComponent.tsx"),
				I = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/lib/performanceTimings/index.tsx"),
				T = s("./src/reddit/actions/ads/index.ts"),
				L = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/authoring.ts"),
				F = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				M = s("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				B = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				A = s("./src/reddit/actions/linkedPosts/index.ts"),
				D = s("./src/reddit/actions/login.ts"),
				U = s("./src/reddit/actions/modal.ts"),
				W = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				V = s("./src/reddit/actions/pages/comments.ts"),
				K = s("./src/reddit/actions/reportFlow/index.ts"),
				z = s("./src/reddit/actions/tooltip.ts"),
				H = s("./src/reddit/actions/upvotePrompt.ts"),
				q = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				G = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				Y = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				Q = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				J = s("./src/reddit/components/PrivateFeedPage/index.tsx"),
				Z = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				X = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				$ = s("./src/reddit/constants/componentSizes.ts"),
				ee = s("./src/reddit/constants/elementIds.ts"),
				te = s("./src/reddit/constants/history.ts"),
				se = s("./src/reddit/constants/keycodes.ts"),
				ne = s("./src/reddit/constants/parameters.ts"),
				re = s("./src/reddit/constants/posts.ts"),
				oe = s("./src/reddit/constants/screenWidths.ts"),
				ie = s("./src/reddit/contexts/ApiContext.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				de = s("./src/reddit/helpers/sessionStorage/index.ts"),
				le = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				me = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				ue = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				pe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				be = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				he = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				ge = s("./src/reddit/selectors/subreddit.ts"),
				fe = s("./src/reddit/selectors/upvotePrompt.ts"),
				xe = s("./src/reddit/featureFlags/profileCollections.ts"),
				Oe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				ve = s("./src/lib/makeSearchKey/index.ts"),
				Ce = s("./src/reddit/contexts/Post/index.tsx"),
				ye = s("./src/reddit/models/Comment/index.ts"),
				je = s("./src/reddit/models/Post/index.ts"),
				_e = s("./src/reddit/models/Subreddit/index.ts"),
				Ee = s("./src/reddit/selectors/chatPost.ts"),
				ke = s("./src/reddit/selectors/comments.ts"),
				Pe = s("./src/reddit/selectors/commentSelector.ts"),
				Se = s("./src/reddit/selectors/commentsListTruncated.ts"),
				Ie = s("./src/reddit/selectors/creatorStats.ts"),
				we = s("./src/reddit/selectors/discoveryUnit.ts"),
				Ne = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				Te = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Le = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Re = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Fe = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Me = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				Be = s("./src/reddit/selectors/meta.ts"),
				Ae = s("./src/reddit/selectors/moderatorPermissions.ts"),
				De = s("./src/reddit/selectors/posts.ts"),
				Ue = s("./src/reddit/selectors/tooltip.ts"),
				We = s("./src/reddit/selectors/user.ts"),
				Ve = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Ke = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				ze = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				He = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				qe = s("./src/reddit/components/Comments/index.tsx"),
				Ge = s("./src/reddit/components/Comments/States/index.tsx"),
				Ye = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Qe = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Je = s("./src/reddit/components/CommentSort/index.tsx"),
				Ze = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Xe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				$e = s("./src/reddit/components/CreatorStats/loader.tsx"),
				et = s("./src/reddit/components/HeaderImage/index.tsx"),
				tt = s("./src/reddit/components/Hovercards/helpers.ts"),
				st = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				nt = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				rt = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				ot = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				it = s("./src/reddit/components/JumpToContent/index.tsx"),
				at = s("./src/reddit/components/NewCommentPill/async.tsx"),
				ct = s("./src/reddit/components/PostContent/index.tsx"),
				dt = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				lt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				mt = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				ut = s("./src/reddit/components/SearchResultsContent/SearchPdpComments/index.tsx"),
				pt = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				bt = s("./src/reddit/components/SubredditNav/index.tsx"),
				ht = s("./src/reddit/components/TrackingHelper/index.tsx"),
				gt = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				ft = s("./src/reddit/helpers/datadome.ts"),
				xt = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ot = s("./src/reddit/helpers/history/index.ts"),
				vt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				Ct = s("./src/reddit/helpers/name/index.ts"),
				yt = s("./src/reddit/helpers/postCollection.ts"),
				jt = s("./src/reddit/helpers/resonatePage/index.ts"),
				_t = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Et = s("./src/reddit/helpers/trackers/screenview.ts"),
				kt = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Pt = s("./src/reddit/layout/page/Listing/index.tsx"),
				St = s("./src/reddit/models/ContentGate.ts"),
				It = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				wt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Nt = s("./src/reddit/selectors/experiments/chat.ts"),
				Tt = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				Lt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				Rt = s("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				Ft = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Mt = s.n(Ft);

			function Bt() {
				return (Bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const At = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Dt = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				Ut = 200,
				Wt = 80,
				Vt = 32,
				Kt = Object(n.a)({
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
				zt = Object(n.a)({
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
				Ht = Object(n.a)({
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
				qt = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(I.a)(t) : n
				},
				Gt = e => {
					const {
						state: t
					} = e.location, s = l()(t, te.b.IsOverlay, !1), n = l()(t, te.b.CloseLocation, null), r = l()(t, te.b.ScrollOnLoad, !1);
					r && Object(Ot.c)(te.b.ScrollOnLoad);
					const {
						partialCommentId: o,
						partialPostId: i,
						subredditName: a
					} = e.match.params, c = Object(je.y)(i), d = o && Object(ye.h)(o), m = Object(Oe.a)(c), u = Object(f.e)(ue.b), p = Object(f.e)(e => Object(De.y)(e, {
						listingKey: m
					})), b = Object(f.d)(), x = Object(f.e)(e => Object(Lt.a)(e));
					return Object(h.useEffect)(() => {
						u && !p.length && b(Object(A.c)({
							key: m
						}))
					}, []), g.a.createElement(Ce.a, {
						postId: c
					}, g.a.createElement($t, {
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
				Yt = Object(ae.v)(),
				Qt = () => Object(O.c)({
					apiError: ke.c,
					apiPending: ke.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(De.U)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(me.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Ie.a)(e, s)
					},
					comment: (e, t) => {
						let {
							commentId: s
						} = t;
						return s ? Object(Pe.c)(e, {
							commentId: s
						}) : void 0
					},
					communityBannerDiscoveryUnit: we.a,
					isSubredditDiscoveryCrosspostEnabled: Fe.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(We.h)(e, s)
					},
					currentUserShowNSFW: We.mb,
					dismissedSubreddits: Ne.a,
					fullyLoaded: ke.u,
					hasModeratorPostPermissions: Ae.c,
					headComment: ke.x,
					isActionBarAnimationEnabled: he.b,
					isAvatarsInCommentsEnabled: Te.a,
					isCommentBeforeSignUpEnabled: le.a,
					isCountAnimShadowTestEnabled: he.e,
					isCrawler: (e, t) => !!Object(Be.c)(e),
					isCrosspostRecommendationsExperimentEnabled: me.b,
					isD2xPdpSideRailRecsEnabled: ue.b,
					isEligibleForCommentTruncation: Me.a,
					isChatPost: Ee.d,
					isCommentsListTruncated: Se.a,
					isLanguagePromptUxtsEnabled: Rt.a,
					isLiveChatNuxReactionsEnabled: Nt.c,
					isLoggedIn: We.S,
					isNightmodeOn: We.fb,
					isPrivateCommunityUXEnabled: Tt.c,
					isTooltipOpen: (e, t) => !!Object(Ue.a)(e),
					origin: Be.l,
					post: De.F,
					postSEOV2IdCardVariant: Le.h,
					profileCollectionsEnabled: xe.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: r
						} = t;
						return Object(ke.s)(e, {
							commentsPageKey: qt({
								postId: s,
								commentId: n,
								commentsPageKey: r
							})
						})
					},
					shouldOpenPostInNewTab: We.lb,
					showNewDesignBlocking: be.a,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(ge.z)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: De.U,
					userHovercardIsOpen: (e, t) => Object(Ue.b)(Object(tt.b)({
						itemId: t.postId,
						tooltipIdPrefix: Q.a,
						tooltipType: lt.f.StickyPost
					}))(e),
					userPrefs: We.Kb,
					inResonatePilot: Re.a,
					isQualifiedForUpvotePrompt: fe.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(ge.I)(e, s);
						return !!n && Object(Ae.i)(e, n)
					},
					isNsfwBlurSubreddit: pe.e,
					isNsfwFullPageInterstitial: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(De.U)(e, {
								postId: s
							}),
							r = !(!n || !n.isNSFW),
							o = Object(pe.g)(e) === pe.a.NoPreview;
						return Object(pe.f)(e) ? o : r && o
					}
				}),
				Jt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(U.g)(Y.a)),
					dismissTruncation: t => e(Object(Ve.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(F.a)()),
					setCommentFocus: t => e(L.g({
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
					openNsfwModal: () => e(Object(W.a)()),
					openRegisterModal: () => e(Object(D.openRegisterModal)()),
					openReportFlow: (t, s) => e(Object(K.c)(t, s)),
					submitCommentAfterSignUp: () => e(R.m()),
					goToSubredditPage: t => e(Object(x.b)(t)),
					truncateCommentsList: () => e(Object(F.b)()),
					fetchCommentsNativeAd: t => e(Object(T.a)(t)),
					fetchUXExperiences: t => e(Object(M.b)(t)),
					getIsTrackingCrossposts: t => e(Object(B.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Ke.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(H.b)(t, s, n))
					}
				}),
				Zt = Object(f.b)(Qt, Jt);
			class Xt extends g.a.Component {
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
						this.scrollY = c, this.state.commentNativeAdId && (!e && void 0 !== n && c >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && c < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== r && c >= r && (this.didScrollPastPost = !0), t && void 0 !== r && c < r && (this.didScrollPastPost = !1, o && P.a.write(() => {
							i(Object(tt.b)({
								itemId: a,
								tooltipIdPrefix: Q.a,
								tooltipType: lt.f.StickyPost
							}))
						}))
					}, E.L), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(_t.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(je.w)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === se.b.F || e.keyCode === se.a.F,
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
					e && s(e), Object(gt.a)(t.search) && this.setState({
						isEmbeddedInLiveChatIframe: !0
					})
				}
				async componentDidMount() {
					var e;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, fe.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLanguagePromptUxtsEnabled: n,
							isLoggedIn: r,
							isNsfwBlurSubreddit: o,
							isOverlay: i,
							openNsfwModal: a,
							post: c,
							shouldScrollToComments: d,
							subredditName: l
						}
					} = this, m = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(m) && this.props.openReportFlow(this.props.postId, i), c && !c.isSponsored && !c.isRemoved && c.belongsTo.type !== re.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(c.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (n && c && c.postId && this.props.fetchUXExperiences(c.postId), i ? (this.scrollContainerEl = document.getElementById(ee.e), d && (t || s || this.hasCommentAdRef()) && c && c.numComments ? this.scrollToComments() : P.a.write(() => {
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
							const s = null === (e = Object(vt.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(je.y)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), P.a.read(() => {
							const e = [Object(ft.a)()];
							this.props.isOverlay || Object(N.d)(N.c.CommentsPage, r, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						E.Rb.includes(e) && Object(jt.a)(e)
					}
					this.props.isLoggedIn && Object(de.c)() && this.props.submitCommentAfterSignUp(), (null == c ? void 0 : c.isNSFW) && l && o && a()
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
							isEmbeddedInLiveChatIframe: Object(gt.a)(this.props.location.search)
						}), e.postId !== this.props.postId) {
						const e = this.props.post && Object(yt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? P.a.read(this.handleScroll) : P.a.write(() => {
							e || Object(k.c)(this.scrollContainerEl, 0), P.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && P.a.write(() => {
							setTimeout(() => {
								Object(k.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = $.b + (this.props.isOverlay ? $.m : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const r = (n = this.props.isOverlay ? document.getElementById(ee.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								o = Math.abs(r - s),
								i = this.props.isOverlay ? Vt : o - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && P.a.write(() => {
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = Ut, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = Ut)
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
					P.a.read(() => {
						const e = document.getElementById(ee.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - Wt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - Wt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), P.a.write(() => {
								Object(k.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => P.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s,
						pageLayer: n
					} = this.props;
					return !Object(mt.a)(n) && C.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					P.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: r
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const o = C.c.end(t);
						n(Object(Et.c)(t, s, e, y.TimerType.InApp, o, r))
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
					const a = Object(xt.a)(e, i, o);
					if (!a) return null;
					let c = g.a.createElement(Ht, a);
					return n && (c = g.a.createElement(kt.a, {
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
						isOverlay: O,
						isPrivateCommunityUXEnabled: v,
						post: C,
						postId: y,
						postSEOV2IdCardVariant: j,
						profileCollectionsEnabled: k,
						sendEvent: P,
						sort: S,
						subredditName: I,
						subredditOrProfile: w,
						showNewDesignBlocking: N
					} = this.props, {
						isEmbeddedInLiveChatIframe: T
					} = this.state;
					if ((null == C ? void 0 : C.isNSFW) && I && x && N) return g.a.createElement(X.a, {
						contentTitle: Object(Ct.d)(I)
					});
					const L = Object(Le.f)(j);
					if (!C) {
						if (v && ((null == e ? void 0 : e.type) === E.k || (null == e ? void 0 : e.type) === E.wb)) return g.a.createElement(J.a, {
							isLoggedIn: p,
							isNightmodeOn: h
						});
						if (t) return g.a.createElement(Ge.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === E.o ? g.a.createElement(Ht, {
							contentGateType: St.a.PostBlockedForLegalReason
						}) : g.a.createElement(Ge.d, {
							postId: y,
							commentId: o,
							apiError: e,
							sort: S
						}) : g.a.createElement(Ge.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const R = this.isCommentPermalink(),
						F = C.belongsTo.type === re.a.PROFILE,
						M = Object(yt.a)(C) && (!F || k),
						B = !p,
						A = w && w.isQuarantined,
						D = !u && !this.state.allCommentsRendered && !d,
						U = l && s,
						W = C.isNSFW && f;
					return At.input.channel.postID = y, T ? g.a.createElement("div", {
						className: Mt.a.EmbeddedLiveChatContainer
					}, this.renderCommentPanes()) : g.a.createElement(ts, {
						closeLocation: r,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						isD2xPdpSideRailRecsEnabled: m,
						isLoggedIn: p,
						isOverlay: O,
						isSwapVariant: L,
						post: C,
						shouldBlurHeaderImage: W,
						subredditOrProfile: w,
						shouldFitPageToContent: B,
						isCollectionLayout: M
					}, g.a.createElement(at.a, {
						postId: y,
						isNightMode: h,
						isOverlay: O,
						commentId: o
					}), !O && g.a.createElement(dt.a, {
						post: C
					}), A && g.a.createElement(ot.a, {
						subredditName: w.name
					}), g.a.createElement(it.a, null), g.a.createElement("div", {
						className: Object(_.a)(Mt.a.PageContentWrapper, {
							[Mt.a.LargePageContent]: M,
							[Mt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, M && g.a.createElement(zt, {
						isOverlay: O,
						isNightmodeOn: h,
						postId: y
					}), g.a.createElement(Dt, {
						condition: M,
						wrap: e => g.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Mt.a.CollectionBodyWrapper
						}, e)
					}, g.a.createElement(ct.c, {
						isCommentPermalink: R,
						isOverlay: O,
						isModWithUserNotesPermissions: b,
						postId: y,
						redditStyle: O,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: P,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: c,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && g.a.createElement($e.a, {
						post: C,
						subreddit: w
					}), this.state.commentNativeAdId && g.a.createElement("div", {
						ref: this.setCommentAdRef
					}, g.a.createElement(q.a, {
						key: `event-post-id-${C.id}`,
						isOverlay: O,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), w && !Object(_e.i)(w) && g.a.createElement(Z.a, {
						awaitAllCommentsRendered: D,
						contentContainerRef: this.state.layoutRef,
						isOverlay: O,
						post: C,
						subredditOrProfile: w
					}), U && g.a.createElement(G.a, {
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
						fullyLoaded: a,
						hasModeratorPostPermissions: d,
						headComment: l,
						isAvatarsInCommentsEnabled: m,
						isChatPost: p,
						isCommentsListTruncated: b,
						isCommentBeforeSignUpEnabled: h,
						isEligibleForCommentTruncation: f,
						isLoggedIn: x,
						isOverlay: O,
						pdpCommentSearchExperiment: C,
						location: y,
						onOtherDiscussions: j,
						openLoginModal: E,
						openRegisterModal: k,
						origin: P,
						pageLayer: S,
						post: I,
						postId: N,
						replyComment: T,
						sendEvent: L,
						sort: F,
						subredditAboutInfo: M,
						subredditOrProfile: B,
						userPrefs: A
					} = this.props, {
						isEmbeddedInLiveChatIframe: D
					} = this.state;
					if (!I) return null;
					let U, W = "";
					const V = (null == C ? void 0 : C.bucketed) && Object(mt.a)(S) && Object(mt.b)(I);
					if (V) {
						const e = c()([...Object(i.a)(y.search)]);
						U = Object(ve.e)(u()(e, ne.d)), W = Object(ve.b)(N, void 0, U, A.over18 && A.searchOver18)
					}
					const K = this.isCommentPermalink(),
						z = [],
						H = I.isLocked && !s,
						q = !(K || I.isArchived || M && M.userIsBanned || I.authorIsBlocked || I.unrepliableReason);
					if (H) z.push(g.a.createElement(nt.a, {
						key: "commentThreadBanner",
						subredditOrProfile: B
					}));
					else if (I.isArchived) z.push(g.a.createElement(st.a, {
						key: "commentThreadBanner"
					}));
					else if (q && !p && !j)
						if (x || !x && h) {
							const e = Object(w.a)(v.c.replyToPost, N);
							z.push(g.a.createElement(ze.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: v.c.replyToPost,
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
						} else z.push(g.a.createElement(He.a, {
							key: "loggedOutCommentForm",
							location: y,
							openLoginModal: E,
							openRegisterModal: k,
							origin: P
						}));
					if (I.contestMode && z.push(g.a.createElement(rt.a, {
							hasModeratorPostPermissions: d,
							key: "contestModeBanner"
						})), p || j || (this.props.isSubredditDiscoveryCrosspostEnabled ? z.push(g.a.createElement(It.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: O,
							key: "commentNavigation",
							postId: N
						}), g.a.createElement(Je.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: O,
							key: "commentSort",
							location: y,
							postId: N,
							sort: F,
							suggestedSort: I.suggestedSort
						})) : z.push(g.a.createElement(Je.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: O,
							key: "commentSort",
							location: y,
							postId: N,
							sort: F,
							suggestedSort: I.suggestedSort
						}), g.a.createElement(It.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: O,
							key: "commentNavigation",
							postId: N
						}))), z.push(g.a.createElement(pt.a, {
							key: "subredditForkingCTA",
							postId: N
						})), !t || l || p || j)
						if (!e || l || j)
							if (j) z.push(g.a.createElement(Kt, {
								commentSort: F,
								key: "otherDiscussions",
								postId: N,
								isOverlay: O,
								postPermalink: I.permalink
							}));
							else if (p) {
						if (B && B.id) {
							const e = T ? Object(w.a)(v.c.replyToComment, T.id) : Object(w.a)(v.c.replyToPost, N),
								s = qt({
									postId: N,
									commentId: n,
									commentsPageKey: o
								});
							z.push(g.a.createElement(Ye.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !l || !a && t,
								key: "commentsChat",
								postId: N,
								renderedInOverlay: O,
								subredditId: B.id,
								isEmbeddedLiveChat: D
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return x ? g.a.createElement(Qe.a, {
									isV2: !0,
									isEmbeddedLiveChat: D,
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
									className: Mt.a.ChatLoggedOutForm,
									location: y,
									openLoginModal: E,
									openRegisterModal: k,
									origin: P
								})
							}))
						}
					} else V && U ? z.push(g.a.createElement(ut.a, {
						key: `search-pdp-comments-${o}`,
						commentsPageKey: o,
						isOverlay: O,
						prevLocation: y,
						listingKey: W,
						post: I,
						searchOptions: U
					})) : (z.push(g.a.createElement("div", {
						className: Object(_.a)(Mt.a.CommentsPaneWrapper, {
							[Mt.a.mIsInOverlay]: O
						}),
						key: "commentsPaneWrapper"
					}, g.a.createElement(Xe.a, Bt({}, this.props, {
						shouldTruncateComments: f && b,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: I.numComments,
						onClick: this.handleContentClick
					}), g.a.createElement(qe.a, {
						commentId: n,
						commentsPageKey: o,
						postId: N,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: O
					})))), e && l ? z.push(g.a.createElement(Ge.e, {
						key: "commentsErrorState",
						postId: N,
						commentId: n,
						sort: F,
						apiError: e
					})) : !a && t && z.push(g.a.createElement(Ge.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					})));
					else z.push(g.a.createElement(Ge.e, {
						key: "errorState",
						postId: N,
						commentId: n,
						sort: F,
						apiError: e
					}));
					else this.didRenderLoading = !0, z.push(g.a.createElement(Ge.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					}));
					return g.a.createElement(ce.a.Provider, {
						value: this.sendEventWithName
					}, z)
				}
			}
			const $t = Yt(Object(ie.b)(Zt(Object(ht.c)(Xt)))),
				es = S.a.wrapped(Ze.a, "DetailsPageSidebar", Mt.a),
				ts = e => {
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
					if (i) return g.a.createElement(kt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: r,
						sidebar: m && g.a.createElement(Ze.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: c,
							subredditOrProfile: m,
							subredditName: m.name,
							subredditId: m.id
						})
					});
					const u = r ? $.h : oe.a,
						p = o && m && !Object(_e.i)(m) ? `r/${m.name}` : void 0;
					return g.a.createElement(Pt.a, {
						backToSubredditName: p,
						containerRef: n,
						maxWidth: $.h,
						fitPageToContent: l,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: a,
						isCollectionLayout: r,
						navBar: m && g.a.Children.toArray([g.a.createElement(et.a, {
							key: m.name,
							disableFullscreen: !0,
							headerText: m.name,
							maxWidth: u,
							prefixedHeaderText: m.displayText,
							shouldBlurHeaderImage: d,
							subredditOrProfile: m,
							url: m.url
						}), !Object(_e.i)(m) && g.a.createElement(bt.a, {
							disableFullscreen: !0,
							homeUrl: m.url,
							maxWidth: u,
							subredditId: m.id
						})]),
						sidebar: m && g.a.createElement(es, {
							commentsPageKey: s,
							post: c,
							subredditOrProfile: m,
							subredditName: m.name,
							subredditId: m.id
						})
					})
				};
			t.default = Object(j.a)(Object(wt.a)(Gt))
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
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return Rn
			})), s.d(t, "default", (function() {
				return Fn
			}));
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./node_modules/lodash/isEqual.js"),
				u = s.n(m),
				p = s("./src/reddit/actions/searchQueryId/index.tsx"),
				b = s("./src/reddit/actions/survey/index.ts"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/selectors/searchResults.ts"),
				O = s("./node_modules/lodash/constant.js"),
				v = s.n(O),
				C = s("./node_modules/lodash/times.js"),
				y = s.n(C),
				j = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				_ = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				E = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				k = s.n(E);
			const P = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, r = Object(a.e)(e => Object(x.d)(e, {
					listingKey: t
				})), o = Object(a.e)(e => Object(x.t)(e, {
					listingKey: t
				})), c = Boolean(o && o.token) && r.length > 0;
				return i.a.createElement("div", {
					className: k.a.container,
					"data-testid": "comments-list"
				}, i.a.createElement(j.b, {
					identifiers: r,
					listingKey: t,
					searchOptions: s,
					componentType: j.c.Comments,
					originElement: n,
					fireScreenview: !0
				}), c && i.a.Children.toArray(y()(3, v()(i.a.createElement(_.a, {
					className: k.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var S = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const I = (e, t) => Boolean(t && t.token) && e.length > 0,
				w = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(a.e)(e => Object(x.g)(e, {
						listingKey: t
					})), r = Object(a.e)(e => Object(x.u)(e, {
						listingKey: t
					}));
					return i.a.createElement("div", {
						className: k.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && i.a.createElement(j.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: j.c.Subreddits,
						fireScreenview: !0
					}), I(n, r) && i.a.Children.toArray(y()(3, v()(i.a.createElement(S.a, {
						className: k.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var N = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				T = s.n(N),
				L = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");
			const R = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(x.a)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(x.s)(e, {
					listingKey: t
				}));
				return i.a.createElement("div", {
					className: k.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && i.a.createElement(j.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: j.c.Users,
					fireScreenview: !0
				}), I(n, r) && i.a.Children.toArray(y()(3, v()(i.a.createElement(S.a, {
					className: k.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var F = s("./src/config.ts"),
				M = s("./src/lib/ads/index.ts"),
				B = s("./src/lib/intersectionObserver/index.ts"),
				A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/lib/opener/index.ts"),
				U = s("./src/reddit/actions/post.ts"),
				W = s("./src/reddit/components/BlankPost/index.tsx"),
				V = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/Media/index.tsx"),
				H = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/Thumbnail/index.tsx"),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = s("./src/reddit/constants/adEvents.ts"),
				Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				Z = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				X = s("./src/reddit/helpers/clickSourceData/index.ts"),
				$ = s("./src/reddit/helpers/overlay/index.ts"),
				ee = s("./src/reddit/helpers/path/index.ts"),
				te = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				se = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ne = s("./src/reddit/models/Media/index.ts"),
				re = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				oe = s("./src/reddit/selectors/posts.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ae = s("./node_modules/reselect/es/index.js"),
				ce = s("./src/lib/getShortenedLink.ts"),
				de = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				le = s("./src/reddit/components/PostTitle/index.tsx"),
				me = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				ue = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				be = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				he = s("./src/reddit/components/CallToActionButton/index.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				fe = s("./src/reddit/hooks/useTheme.ts"),
				xe = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Oe = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				ve = s.n(Oe);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = `${F.a.assetPath}/img/link-placeholder.png`, je = Object(ae.c)({
				autoplayPref: ie.d,
				flairStyleTemplate: Q.Y,
				showCTAExperiment: re.a
			});

			function _e(e) {
				var t;
				const {
					postId: s,
					listingKey: n,
					searchOptions: r,
					discoveryUnit: c
				} = e, d = Object(o.useRef)(), l = Object(o.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: u,
					showCTAExperiment: p
				} = Object(a.e)(t => je(t, e)), b = Object(a.e)(e => Object(x.z)(e, {
					identifier: s
				})), h = Object(a.e)(e => Object(oe.d)(e, {
					postId: s
				})), f = Object(a.e)(xe.b), O = Object(a.e)(xe.c), v = Object(Q.ib)(), C = Object(G.b)(), y = Object(a.d)(), j = Object(fe.a)(), {
					post: _,
					subredditOrProfile: E
				} = Object(J.d)(s), k = Object(M.w)(_), P = Object(o.useCallback)((e, t) => {
					y(Object(U.O)(e, t))
				}, [y]), S = !!_.source && !h;
				if (Object(o.useEffect)(() => (d.current && Object(B.a)(d.current, (e, t) => {
						l.current && (t ? l.current.focusContent() : l.current.pauseContent())
					}), Object(se.w)(n, _.id, r, v, c), () => {
						d.current && Object(B.b)(d.current), l.current && l.current.stopContent(), d.current = null, l.current = null
					}), []), !_) return null;
				const {
					media: I
				} = h || _ || {}, w = (null == I ? void 0 : I.type) === ne.o.EMBED && (null == I ? void 0 : I.provider) === ne.v.Twitter, N = (null == I ? void 0 : I.type) === ne.o.VIDEO || (null == I ? void 0 : I.type) === ne.o.GIFVIDEO;

				function T(e) {
					e.stopPropagation(), e.preventDefault(), _.isSponsored ? (y(Object(U.y)(_, Y.a.Click)), _.source ? _.source.outboundUrl ? Object(D.e)(_.source.outboundUrl, D.d.BLANK) : Object(D.e)(_.source.url, D.d.BLANK) : Object(D.e)(_.permalink, D.d.BLANK)) : y(f || O ? Object(U.Z)(Object(ee.b)(_.permalink), _.id) : Object($.a)({
						pathname: Object(ee.b)(_.permalink),
						state: Object(X.b)(v)
					}))
				}

				function L(e) {
					_.isSponsored && N || T(e), _.isSponsored && function(e) {
						N || (e.stopPropagation(), e.preventDefault()), C(Object(se.y)(_.id, r, c, n, v))
					}(e)
				}
				return _.isBlank ? i.a.createElement(W.BlankPost, {
					onPostViewable: P,
					post: _,
					postId: _.id
				}) : i.a.createElement(J.a, {
					postId: s
				}, i.a.createElement(H.b, {
					className: ve.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let o = null,
							i = te.r;
						return _.isSponsored || (i = te.t, o = null !== (s = se.E[t]) && void 0 !== s ? s : se.e.POST), i(r, v, o, n, c)(e)
					},
					onClick: T,
					post: _,
					"data-click-id": "hero_unit",
					style: {
						...Object(ge.d)({
							theme: j,
							flairStyleTemplate: u,
							redditStyle: !1
						}),
						...Object(ge.b)(u)
					}
				}, i.a.createElement(de.a, {
					"data-click-id": "background"
				}, i.a.createElement(V.a, {
					className: ve.a.eventMeta,
					post: _
				}), i.a.createElement("div", {
					className: Object(g.a)(ve.a.postContent, {}),
					"data-click-id": "body"
				}, i.a.createElement(ue.c, {
					className: ve.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: _,
					subredditOrProfile: E
				}), i.a.createElement("div", {
					className: ve.a.postItemTitleContainer
				}, i.a.createElement(le.c, {
					hideSourceLink: !0,
					post: _,
					size: le.b.Medium,
					isOverlay: !1
				}), !k && S && i.a.createElement(pe.a, {
					className: ve.a.outboundLink,
					href: (null === (t = null == _ ? void 0 : _.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: _.isSponsored,
					postId: _.id,
					source: _.source
				}, Object(ce.a)(_))), function() {
					let e = i.a.createElement(i.a.Fragment, null);
					const t = !!_.source && Object(A.a)(_.source.url) || !!_.thumbnail && Object(A.a)(_.thumbnail.url),
						s = !(null == I ? void 0 : I.type) && t,
						n = Object(g.a)(ve.a.mediaWrapper, {
							[ve.a.marginCancel]: k && !!_.source,
							[ve.a.promotedTrend]: _.isSponsored
						});
					if (s) e = i.a.createElement("div", {
						className: n
					}, i.a.createElement(q.b, {
						className: ve.a.thumbnail,
						post: _,
						templatePlaceholderImage: ye,
						usePreview: !0
					}));
					else if (I)
						if (I.type !== ne.o.RTJSON && I.type !== ne.o.TEXT) e = i.a.createElement("div", {
							className: Object(g.a)(n, w && ve.a.twitterEmbed),
							onClickCapture: L,
							ref: e => d.current = e
						}, i.a.createElement(z.a, {
							className: ve.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: _.isSponsored,
							post: h || _,
							primaryContent: !0,
							scrollerItemRef: e => l.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = i.a.createElement("div", {
								className: ve.a.mediaPlaceholder
							}), (I.type === ne.o.RTJSON && I.richtextContent || I.type === ne.o.TEXT && I.content) && Object(Z.a)(_, null == j ? void 0 : j.subredditContext) && (e = i.a.createElement("div", {
								className: n,
								onClickCapture: T,
								ref: e => d.current = e
							}, i.a.createElement(z.a, {
								autoplayPref: m,
								className: ve.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: h || _,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), i.a.createElement("div", {
								className: ve.a.seeMore
							}, Ce._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), k && _.source && i.a.createElement(be.a, {
					className: ve.a.adLinkWrapper,
					ctaExperimentDesign: p && "card"
				}, i.a.createElement(pe.a, {
					className: Object(g.a)(ve.a.outboundLink, {
						[ve.a.ctaExperiment]: p
					}),
					href: _.source.url.replace(F.a.redditUrl, ""),
					isSponsored: _.isSponsored,
					postId: _.id,
					source: _.source
				}, _.source.displayText), _.callToAction && i.a.createElement(he.a, {
					className: ve.a.adCallToAction,
					href: _.source.url.replace(F.a.redditUrl, ""),
					isSponsored: _.isSponsored,
					postId: _.id,
					source: _.source,
					showCTAExperiment: p
				}, _.callToAction)), !_.isSponsored && i.a.createElement(me.c, {
					className: Object(g.a)(ve.a.postItemFlatlistContainer),
					post: b || _
				}), i.a.createElement(K.d, null)))))
			}
			var Ee = s("./src/lib/LRUCache/index.ts"),
				ke = s("./src/reddit/components/Scroller/Simple.tsx"),
				Pe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				Se = s("./src/reddit/components/SearchResultsContent/SearchResultsList/utils.ts"),
				Ie = s("./src/reddit/hooks/usePageLayer.ts"),
				we = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Ne = 376,
				Te = new Ee.a(1);

			function Le(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: o
				} = e;
				const c = Object(a.d)(),
					d = Object(Ie.a)(),
					l = Object(G.b)();
				if (!t || !r) return null;
				const m = () => {
					const e = `entered-hero-unit-${r}`;
					let o = Pe.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === we.b.PromotedTrendHero;
						o = () => {
							c((e, o) => {
								Object(Se.b)(r), Object(te.u)(o(), t, r, n, d, s, i)
							})
						}, Pe.a.set(e, o)
					}
					return o
				};
				return i.a.createElement(ke.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let i;
					return void 0 === (i = Te.get(e)) && (i = {
						estHeight: Ne,
						trackOnEnteredViewport: m(),
						trackOnExitedViewport: Object(Pe.c)(r, s, e => Object(Se.a)(l, r, s, n, d, e), 0),
						id: t.id,
						render: () => o
					}), Te.set(e, i), [i]
				})())
			}
			var Re = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Fe = s("./src/reddit/models/DiscoveryUnit/index.ts");
			const {
				Hero: Me,
				PromotedTrendHero: Be
			} = we.b;
			const Ae = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(a.e)(e => Object(x.w)(e, {
					listingKey: t
				}));
				const r = Object(a.e)(e => Object(x.v)(e, {
						listingKey: t
					})),
					c = Object(a.e)(e => Object(x.C)(e)),
					d = Object(a.e)(e => (e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.models[t];
						return s || {}
					})(e));
				let l;
				c === we.c.Trending && (l = function(e) {
					const t = Object.values(e).find(e => e.layout.viewTypeWeb === Me || e.layout.viewTypeWeb === Be);
					if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
				}(d));
				const m = Object(o.useMemo)(() => Object.values(d).find(e => e.name === Fe.l || e.name === Fe.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return i.a.createElement(i.a.Fragment, null, l && m && i.a.createElement(Le, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, i.a.createElement(_e, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), i.a.createElement("div", {
					className: k.a.container,
					"data-testid": "posts-list"
				}, i.a.createElement(j.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: j.c.Posts,
					fireScreenview: !0
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, r) && i.a.Children.toArray(y()(3, v()(i.a.createElement(Re.a, {
					className: k.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var De = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function Ue(e) {
				const {
					listingKey: t,
					searchOptions: s,
					tab: n
				} = e, r = Object(a.e)(e => Object(x.n)(e, {
					listingKey: t
				})), o = Object(a.e)(e => Object(x.l)(e, {
					listingKey: t
				})), c = Object(a.e)(e => Object(x.m)(e, {
					listingKey: t
				})), d = Object(a.e)(e => Object(x.o)(e, {
					listingKey: t
				}));
				return i.a.createElement("div", {
					className: Object(g.a)(T.a.resultsContainer)
				}, n === f.h.Listings ? i.a.createElement(De.a, {
					hasResults: r,
					searchOptions: s,
					noResultsType: L.b.Communities,
					searchResultsTab: f.h.Listings,
					listingKey: t,
					pendingSelector: x.i
				}, i.a.createElement(w, {
					listingKey: t,
					searchOptions: s,
					key: f.h.Listings
				})) : n === f.h.People ? i.a.createElement(De.a, {
					hasResults: o,
					searchOptions: s,
					noResultsType: L.b.People,
					searchResultsTab: f.h.People,
					listingKey: t,
					pendingSelector: x.c
				}, i.a.createElement(R, {
					listingKey: t,
					searchOptions: s,
					key: f.h.People
				})) : n === f.h.Comments ? i.a.createElement(De.a, {
					hasResults: c,
					searchOptions: s,
					noResultsType: L.b.Comments,
					searchResultsTab: f.h.Comments,
					listingKey: t,
					pendingSelector: x.f
				}, i.a.createElement(P, {
					listingKey: t,
					searchOptions: s,
					key: f.h.Comments
				})) : i.a.createElement(De.a, {
					hasResults: d,
					searchOptions: s,
					noResultsType: L.b.Posts,
					searchResultsTab: f.h.Posts,
					listingKey: t,
					pendingSelector: x.y
				}, i.a.createElement(Ae, {
					listingKey: t,
					searchOptions: s,
					key: f.h.Comments
				})))
			}
			var We = s("./src/reddit/selectors/searchFix.ts"),
				Ve = s("./src/reddit/selectors/subreddit.ts");
			const Ke = (e, t) => {
				const s = Object(We.a)(e, t);
				return s ? Object(Ve.C)(e, {
					subredditName: s
				}) : null
			};
			var ze = s("./node_modules/fbt/lib/FbtPublic.js"),
				He = s("./node_modules/lodash/noop.js"),
				qe = s.n(He),
				Ge = s("./src/lib/constants/colors.ts"),
				Ye = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Qe = s("./src/reddit/helpers/localStorage/index.ts");
			const Je = () => {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					var e;
					const s = null !== (e = Object(Qe.F)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(Qe.Jb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(Qe.Jb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var Ze = s("./src/reddit/controls/InternalLink/index.tsx"),
				Xe = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				$e = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				et = s("./src/reddit/hooks/useTracking.ts"),
				tt = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				st = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.tsx"),
				nt = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				rt = s.n(nt);

			function ot(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: n
				} = e;
				const r = Object(et.a)(),
					d = Object(a.e)(ie.mb),
					m = Object(a.e)(x.C),
					u = Object(Q.ib)(),
					p = m === we.c.Trending,
					b = Object($e.a)({}),
					{
						shouldShowCommentTabTooltip: h,
						resetShowCommentTabTooltip: g
					} = Je();
				b.arrowProps.style = {
					...b.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${Ge.a.alien600}`
				}, b.popperProps.style = {
					...b.popperProps.style,
					backgroundColor: Ge.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(o.useEffect)(() => {
					if (h) return window.addEventListener("click", g), () => {
						window.removeEventListener("click", g)
					}
				}, [h]);
				const O = {
						condition: !0,
						active: t === f.h.Posts,
						target: se.b.Posts,
						contentType: c.hc.Posts,
						text: ze.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					v = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === f.h.Listings,
						target: se.b.Communities,
						contentType: c.hc.Subreddits,
						text: ze.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					C = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === f.h.People,
						target: se.b.People,
						contentType: c.hc.Users,
						text: ze.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					y = [O, {
						condition: !(s.source === l.a.Trending || s.source === l.a.PromotedTrend),
						active: t === f.h.Comments,
						target: se.b.Comments,
						contentType: c.hc.Comments,
						text: ze.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, v, C],
					j = d && !p;
				return i.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: rt.a.searchResultsNav
				}, i.a.createElement("div", {
					className: rt.a.pillRow,
					role: "tablist"
				}, y.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: n,
						text: o,
						contentType: a
					} = e;
					return i.a.createElement(Ze.default, {
						key: n,
						"data-testid": n,
						to: Object(Xe.b)({
							searchType: a,
							pageLayer: u
						}),
						"aria-selected": t,
						role: "tab",
						className: rt.a.pillElement,
						onClick: () => (e => {
							e.active || r(Object(se.m)(e.target, s))
						})(e)
					}, i.a.createElement(Ye.a, {
						visible: Boolean(e.showTooltip) && h,
						arrowProps: b.arrowProps,
						popperProps: b.popperProps
					}, ze.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), i.a.createElement(tt.a, {
						active: t,
						onClick: qe.a,
						variant: tt.b.TAB_GROUP
					}, o))
				})), n && i.a.createElement("div", {
					className: rt.a.searchSwitcherContainer
				}, n), j && i.a.createElement("div", {
					className: rt.a.nsfwToggleContainer
				}, i.a.createElement(st.a, {
					searchOptions: s
				})))
			}
			var it = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				at = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				ct = s.n(at),
				dt = s("./src/lib/lessComponent.tsx");
			const {
				fbt: lt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), mt = dt.a.div("ButtonContainer", ct.a), ut = dt.a.div("Container", ct.a), pt = dt.a.img("BannerImg", ct.a), bt = dt.a.img("SnooImg", ct.a), ht = dt.a.div("CommunityText", ct.a);
			var gt = () => i.a.createElement(ut, null, i.a.createElement(pt, {
					src: `${F.a.assetPath}/img/search-results-community-banner.png`
				}), i.a.createElement(bt, {
					src: `${F.a.assetPath}/img/snoo-thinking.png`
				}), i.a.createElement(ht, null, lt._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), i.a.createElement(mt, null, i.a.createElement(it.a, {
					className: ct.a.Button,
					eventSource: "sidebar"
				}))),
				ft = s("./src/reddit/components/IdCard/async.tsx"),
				xt = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ot = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				vt = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ct = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				yt = s("./src/reddit/selectors/platform.ts"),
				jt = s("./src/reddit/selectors/widgets.ts"),
				_t = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				Et = s.n(_t);
			const kt = Object(ae.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.s)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.u)(e, {
							listingKey: s
						})
					},
					currentSubreddit: yt.e,
					isLoggedIn: ie.S,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(Ve.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(Ve.I)(e, s);
						return Object(jt.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(jt.d)(e, {
							subredditName: s
						})
					}
				}),
				Pt = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: n,
						communityIdentifiers: r,
						communitiesLoadMore: o,
						hasAuthorResults: a,
						hasCommunityResults: d,
						listingKey: l,
						listingName: m,
						idCardWidget: u,
						isLoggedIn: p,
						postFlairWidgets: b,
						searchOptions: h,
						currentSubreddit: g
					} = e;
					const f = Boolean(g && m === g.name && h.restrict_sr),
						x = !!h.is_multi,
						O = r.length > j.a || !!o,
						v = t.length > j.a || !!s;
					let C;
					const y = Object(Ie.a)();
					return f ? C = i.a.createElement(i.a.Fragment, null, u && i.a.createElement(ft.a, {
						listingName: m
					}), b && b.map((e, t) => i.a.createElement(Ot.a, {
						key: `widgetSpacer-${t}`
					}, i.a.createElement(Ct.a, {
						subredditName: m,
						widget: e
					})))) : x || (C = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Et.a.container,
						"data-testid": "communities-list"
					}, i.a.createElement("h4", {
						className: Et.a.header
					}, ze.fbt._("Communities", null, {
						hk: "3cMR66"
					})), d ? i.a.createElement(i.a.Fragment, null, !h.is_multi && i.a.createElement(j.b, {
						componentType: j.c.Subreddits,
						identifiers: r,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), O && i.a.createElement(Ze.default, {
						to: Object(Xe.b)({
							searchType: c.hc.Subreddits,
							pageLayer: y
						})
					}, i.a.createElement("p", {
						className: Et.a.link
					}, ze.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : i.a.createElement("p", {
						className: Et.a.noResults
					}, ze.fbt._("No results", null, {
						hk: "3feoKq"
					}))), i.a.createElement("div", {
						className: Et.a.container,
						"data-testid": "authors-list"
					}, i.a.createElement("h4", {
						className: Et.a.header
					}, ze.fbt._("People", null, {
						hk: "2M8TqB"
					})), a ? i.a.createElement(i.a.Fragment, null, !h.is_multi && i.a.createElement(j.b, {
						componentType: j.c.Users,
						identifiers: t,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), v && i.a.createElement(Ze.default, {
						to: Object(Xe.b)({
							searchType: c.hc.Users,
							pageLayer: y
						})
					}, i.a.createElement("p", {
						className: Et.a.link
					}, ze.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : i.a.createElement("p", {
						className: Et.a.noResults
					}, ze.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), p && i.a.createElement("div", {
						className: Et.a.container
					}, i.a.createElement(gt, null)))), i.a.createElement(xt.a, {
						"data-testid": "search-results-sidebar",
						className: n
					}, C, i.a.createElement(vt.a, null))
				},
				St = e => {
					const t = Object(a.e)(t => kt(t, e)),
						s = {
							...e,
							...t
						};
					return i.a.createElement(Pt, s)
				};
			var It = s("./src/reddit/layout/row/Inline/index.tsx"),
				wt = s("./src/reddit/constants/parameters.ts"),
				Nt = s("./src/lib/addQueryParams/index.ts");
			const Tt = (e, t, s, n, r, o) => {
				const i = e && e[s],
					a = {};
				let c = Object(Nt.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(Nt.a)(t, {
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
			var Lt = s("./src/higherOrderComponents/asTooltip.tsx"),
				Rt = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ft = s("./src/reddit/icons/fonts/index.tsx"),
				Mt = s("./src/reddit/actions/tooltip.ts"),
				Bt = s("./src/reddit/selectors/tooltip.ts");
			const At = Object(ae.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(Bt.b)(s)(e)
				}
			});
			var Dt = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				Ut = s.n(Dt),
				Wt = s("./node_modules/query-string/index.js"),
				Vt = s.n(Wt),
				Kt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				zt = s("./src/reddit/constants/history.ts"),
				Ht = s("./src/reddit/controls/Dropdown/Row.tsx"),
				qt = s("./src/reddit/helpers/history/index.ts"),
				Gt = s("./node_modules/lodash/fromPairs.js"),
				Yt = s.n(Gt),
				Qt = s("./src/lib/extractQueryParams/index.ts"),
				Jt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Zt = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Xt = s("./src/reddit/selectors/telemetry.ts");
			const $t = (e, t) => {
					const s = Yt()([...Object(Qt.a)(e)]);
					return Object(c.yc)(s.sort) && (t.sort = s.sort), Object(c.zc)(s.t) && (t.t = s.t), t
				},
				es = (e, t, s, n) => () => e(e => {
					const r = Xt.J(e, null);
					return {
						...Object(se.f)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(Jt.c)(Jt.a.SearchResults),
						actionInfo: Object(se.k)(e, null, r),
						search: Xt.fb(e, $t(s, n), Zt.a.SERP)
					}
				}),
				ts = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: r,
						styles: o,
						displayText: a
					} = e;
					const c = Object(G.b)();
					return i.a.createElement(Kt.a, {
						key: s,
						to: {
							pathname: Vt.a.parseUrl(s).url,
							state: {
								[zt.b.SearchOriginPage]: Object(qt.b)(zt.b.SearchOriginPage)
							},
							search: s.replace(Vt.a.parseUrl(s).url + "?", "")
						},
						onClick: es(c, r, s, n)
					}, i.a.createElement(Ht.b, {
						className: Object(g.a)(o.SelectOption, t && o.mIsSelected),
						displayText: a,
						isSelected: t
					}))
				};
			var ss = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				ns = s.n(ss);

			function rs() {
				return (rs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const os = Object(Lt.a)(e => i.a.createElement(Rt.a, rs({
					className: Ut.a.Component
				}, e))),
				is = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: r,
						searchOptions: o,
						tooltipId: c,
						type: d,
						value: l,
						...m
					} = e;
					const {
						isOpen: u,
						onClick: p
					} = (e => {
						const {
							isOpen: t
						} = Object(a.e)(t => At(t, {
							tooltipId: e
						})), s = Object(a.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(Mt.i)()) : () => s(Object(Mt.f)({
								tooltipId: e
							}))
						}
					})(c);
					return i.a.createElement("div", {
						className: Ut.a.Wrapper
					}, i.a.createElement(tt.a, rs({}, m, {
						active: u,
						className: Object(g.a)(Ut.a.filterButton, t && Ut.a.hasValue),
						onClick: p,
						variant: tt.b.TAB_GROUP
					}), s, i.a.createElement(Ft.a, {
						name: "caret_down",
						className: Object(g.a)(Ut.a.caret, u && Ut.a.caretOpen)
					})), i.a.createElement("div", {
						id: c
					}, i.a.createElement(os, {
						className: Ut.a.Dropdown,
						isOpen: u,
						tooltipId: c
					}, n.map((e, t) => i.a.createElement(ts, {
						displayText: r[e],
						key: t,
						isSelected: e === l,
						option: e,
						searchOptions: o,
						styles: {
							mIsSelected: ns.a.mIsSelected,
							SelectOption: ns.a.SelectOption
						},
						type: d
					})))))
				},
				as = {
					[f.h.Posts]: [c.ec.Relevance, c.ec.Hot, c.ec.Top, c.ec.New, c.ec.Comments],
					[f.h.Comments]: [c.ec.Relevance, c.ec.Top, c.ec.New]
				},
				cs = {
					[c.ec.Hot]: () => ze.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[c.ec.Relevance]: () => ze.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[c.ec.Top]: () => ze.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[c.ec.New]: () => ze.fbt._("New", null, {
						hk: "23egpt"
					}),
					[c.ec.Comments]: () => ze.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function ds() {
				return (ds = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ls = [c.nc.HOUR, c.nc.DAY, c.nc.WEEK, c.nc.MONTH, c.nc.YEAR, c.nc.ALL],
				ms = {
					[c.nc.HOUR]: () => ze.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[c.nc.DAY]: () => ze.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[c.nc.WEEK]: () => ze.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[c.nc.MONTH]: () => ze.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[c.nc.YEAR]: () => ze.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[c.nc.ALL]: () => ze.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function us() {
				return (us = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ps = {
					[f.h.Posts]: [c.dc.Sort, c.dc.Time],
					[f.h.Comments]: [c.dc.Sort]
				},
				bs = {
					[c.dc.Sort]: e => {
						let t = Object(a.e)(x.B);
						t = t !== c.Ub ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: r
						} = Tt(e.queryParams, e.url, wt.D, as[e.tab], t || c.Ub, cs), o = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: r
						}, d = Boolean(e.queryParams[wt.D] || t);
						return i.a.createElement(is, ds({}, o, {
							active: d,
							label: d ? n[r] : ze.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: c.dc.Sort
						}))
					},
					[c.dc.Time]: e => {
						const t = Object(a.e)(x.B),
							{
								options: s,
								optionLabels: n,
								value: r
							} = Tt(e.queryParams, e.url, wt.H, ls.slice().reverse(), c.Vb, ms);
						if (!e.searchOptions || e.searchOptions.sort === c.ab.NEW || e.searchOptions.sort === c.ab.HOT || t === c.ab.NEW || t === c.ab.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: r
						};
						return i.a.createElement(is, us({}, o, {
							active: Boolean(e.queryParams[wt.H]),
							label: e.queryParams[wt.H] ? n[r] : ze.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: c.dc.Filter
						}))
					}
				};
			var hs = s("./src/reddit/controls/Button/index.tsx");

			function gs(e, t) {
				let s = "/search/",
					n = "",
					r = e && e[wt.w] || "";
				return t ? (r = r.replace("flair:", "flair_name:"), s = `/r/${t}/search`, n = "1", Object(Nt.a)(s, {
					[wt.w]: r,
					[wt.x]: n
				})) : (r = r.replace("flair_name:", "flair:"), Object(Nt.a)(s, {
					[wt.w]: r
				}))
			}
			var fs = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				xs = s.n(fs);
			const {
				fbt: Os
			} = s("./node_modules/fbt/lib/FbtPublic.js"), vs = dt.a.wrapped(hs.r, "TertiaryButton", xs.a), Cs = dt.a.wrapped(vs, "AllRedditResultsButton", xs.a), ys = e => {
				const t = Object(G.b)();
				return i.a.createElement(Kt.a, {
					to: gs(e.queryParams)
				}, i.a.createElement(Cs, {
					onClick: () => {
						t(t => ({
							...Object(se.f)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, Os._("All reddit results", null, {
					hk: "2IBCsX"
				}), i.a.createElement(Ft.a, {
					name: "forward"
				})))
			};
			var js = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				_s = s.n(js);
			const Es = Object(ae.c)({
					subreddit: Ve.C
				}),
				ks = e => {
					var t;
					const {
						subreddit: s
					} = Object(a.e)(t => Es(t, e)), n = Object(Q.ib)(), r = Object(Q.Z)(n), o = Object(Q.hb)(n), c = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return i.a.createElement(It.a, {
						className: Object(g.a)(_s.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = ps[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = bs[t];
						return i.a.createElement(n, {
							key: s,
							queryParams: r,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: o
						})
					}), c && i.a.createElement(ys, {
						queryParams: r,
						searchOptions: e.searchOptions
					}))
				};
			var Ps = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				Ss = s.n(Ps),
				Is = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ws = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Ns = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				Ts = s.n(Ns);
			const {
				fbt: Ls
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Rs extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(se.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[Ts.a.mSr]: !!t
					}, {
						pathname: r,
						search: o
					} = Ss.a.parse(s), a = t ? c.fc.ToSubreddit : c.fc.ToGlobal, d = t ? i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, Ls._("Show results from", null, {
						hk: "3aVDvz"
					})), i.a.createElement(Is.b, {
						className: Ts.a.subredditIcon,
						subredditOrProfile: t
					}), i.a.createElement("p", {
						className: Object(g.a)(Ts.a.searchSwitcherText, n)
					}, t.displayText)) : i.a.createElement(i.a.Fragment, null, Ls._("{=Show results from}{=all of Reddit}", [Ls._param("=Show results from", i.a.createElement("span", null, Ls._("Show results from", null, {
						hk: "4l8fSw"
					}))), Ls._param("=all of Reddit", i.a.createElement("p", {
						className: Object(g.a)(Ts.a.searchSwitcherText, n)
					}, Ls._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return i.a.createElement(Ze.default, {
						className: Object(g.a)(Ts.a.searchSwitcher, e && Ts.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: r,
							search: o,
							state: {
								searchSwitcherType: a,
								[zt.b.SearchOriginPage]: Object(qt.b)(zt.b.SearchOriginPage)
							}
						}
					}, d, i.a.createElement(Ft.a, {
						name: "forward",
						className: Object(g.a)(Ts.a.arrowIcon, n)
					}))
				}
			}
			var Fs = Object(G.c)(e => e.subreddit ? i.a.createElement(ws.b, {
					subredditName: e.subreddit.name
				}, i.a.createElement(Rs, e)) : i.a.createElement(Rs, e)),
				Ms = s("./src/reddit/helpers/search/searchConversationId.ts"),
				Bs = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				As = s("./src/reddit/helpers/search/searchQueryId.ts");
			const Ds = (e, t) => e.includes(c.hc.Comments) ? f.h.Comments : t || e.includes(c.hc.Posts) ? f.h.Posts : e.includes(c.hc.Users) && !e.includes(c.hc.Subreddits) ? f.h.People : f.h.Listings;
			var Us = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ws = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				Vs = s("./src/reddit/constants/elementClassNames.ts"),
				Ks = s("./src/reddit/contexts/NavbarExp.ts"),
				zs = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				Hs = s("./src/reddit/layout/page/Listing/index.m.less"),
				qs = s.n(Hs),
				Gs = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				Ys = s.n(Gs);
			var Qs = e => {
					let {
						backgroundColor: t,
						className: s,
						containerRef: n,
						content: r,
						navBar: a,
						redditStyle: c,
						sidebar: d,
						subredditId: l
					} = e;
					const m = Object(o.useContext)(Ks.a),
						u = Boolean(d);
					return i.a.createElement(Ws.a, {
						subredditId: l
					}, i.a.createElement("div", {
						className: Object(g.a)(qs.a.outerContainer, Vs.i, s, {
							[qs.a.outerContainerExp]: m
						}),
						ref: n
					}, i.a.createElement(zs.a, {
						className: Vs.h,
						redditStyle: c,
						backgroundColor: t
					}), i.a.createElement("div", {
						className: qs.a.innerContainer
					}, i.a.createElement("div", {
						className: Ys.a.bodyContainer
					}, i.a.createElement("div", {
						className: Ys.a.contentContainer
					}, i.a.createElement("div", {
						className: Ys.a.navContent
					}, a), i.a.createElement("div", {
						className: Object(g.a)(Ys.a.content, u && Ys.a.withSidebar)
					}, i.a.createElement("div", {
						className: Object(g.a)(Ys.a.mainContent, u && Ys.a.withSidebar)
					}, r), u && i.a.createElement("div", {
						className: Ys.a.sidebarContent
					}, d)))))))
				},
				Js = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Zs = s("./src/reddit/constants/experiments.ts"),
				Xs = s("./src/reddit/helpers/chooseVariant/index.ts");
			const $s = e => {
				return Object(Xs.c)(e, {
					experimentEligibilitySelector: Xs.a,
					experimentName: Zs.E
				}) === Zs.Rd
			};
			var en = s("./src/reddit/selectors/searchQueryId.ts"),
				tn = s("./node_modules/lodash/isEmpty.js"),
				sn = s.n(tn),
				nn = s("./src/reddit/actions/modal.ts"),
				rn = s("./src/reddit/icons/svgs/Close/index.tsx"),
				on = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				an = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				cn = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				dn = s("./src/reddit/icons/svgs/Sticky/index.tsx"),
				ln = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				mn = s("./src/reddit/models/Live/index.ts"),
				un = s("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				pn = s.n(un);

			function bn(e) {
				const {
					announcement: t,
					className: s,
					onBtnClick: n,
					onClose: r
				} = e, o = {
					[mn.b.Announcement]: i.a.createElement(dn.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Document]: i.a.createElement(ln.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Snoo]: i.a.createElement(cn.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Ama]: i.a.createElement(on.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Moderation]: i.a.createElement(an.a, {
						className: pn.a.iconStyles
					})
				};
				return i.a.createElement("div", {
					"data-testid": "legacy-announcement",
					className: Object(g.a)(s, pn.a.AnnouncementContainer)
				}, i.a.createElement(It.a, null, o[t.icon], i.a.createElement("div", {
					className: Object(g.a)(pn.a.Title, pn.a.isAnnouncement)
				}, "function" == typeof t.title ? t.title() : t.title), i.a.createElement(rn.a, {
					className: pn.a.CloseButton,
					onClick: r
				})), i.a.createElement("div", {
					className: Object(g.a)(pn.a.Description, pn.a.isAnnouncement)
				}, "function" == typeof t.description ? t.description() : t.description), i.a.createElement(hs.m, {
					className: pn.a.Button,
					target: "_blank",
					href: t.url,
					onClick: n
				}, "function" == typeof t.callToAction ? t.callToAction() : t.callToAction))
			}
			var hn = s("./src/reddit/constants/covid.ts"),
				gn = s("./src/reddit/constants/mFeedBanner.ts"),
				fn = s("./src/reddit/constants/modals.ts"),
				xn = s("./src/reddit/constants/nsfwBanner.ts"),
				On = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				vn = s("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");
			const Cn = e => Object(vn.a)(e, Zs.Oc),
				yn = Object(ae.a)(e => Object(Xs.c)(e, {
					experimentEligibilitySelector: Xs.a,
					experimentName: Zs.Oc,
					expEventOverride: !1
				}), e => !!e),
				jn = e => Object(vn.a)(e, Zs.Ie),
				_n = Object(ae.a)(e => Object(Xs.c)(e, {
					experimentEligibilitySelector: Xs.a,
					experimentName: Zs.Ie,
					expEventOverride: !1
				}), e => !!e);
			var En, kn = s("./src/reddit/components/SearchBanner/index.m.less"),
				Pn = s.n(kn);
			! function(e) {
				e.Covid = "covid", e.NSFW = "nsfw", e.MFeed = "mfeed"
			}(En || (En = {}));
			const Sn = {
				[En.Covid]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: hn.a
				},
				[En.NSFW]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: xn.b
				},
				[En.MFeed]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: gn.b
				}
			};

			function In() {
				const e = Object(et.a)(),
					t = Object(Q.ib)(),
					s = Object(a.f)(),
					n = Object(a.d)(),
					[c, d] = Object(o.useState)(null),
					m = Object(o.useRef)(Sn),
					u = Object(Q.Z)(t),
					p = Object(a.e)(_n),
					b = Object(a.e)(yn),
					h = Object(a.e)(ie.mb),
					g = Object(a.e)(ie.rb);
				if (Object(o.useEffect)(() => {
						Object(Q.db)(t) ? d(En.Covid) : p && Object(Q.eb)(t) && g && h && jn(s.getState()) ? d(En.MFeed) : b && Object(Q.fb)(t) && !h && Cn(s.getState()) ? d(En.NSFW) : d(null)
					}, [t, u, h, g, p, b]), !c || m.current[c].dismissed) return null;

				function f(t) {
					c && e(Object(se.x)(t, c, Object(l.e)(r()(u || {}, wt.y))))
				}
				const x = m.current[c];
				return x.seen || (f("view"), x.seen = !0), i.a.createElement(bn, {
					announcement: x.announcement,
					className: Pn.a.announcement,
					onBtnClick: function() {
						c === En.NSFW && n(Object(nn.h)(fn.a.NSFW_SEARCH_MODAL)), f("click"), Object(On.e)(X.a.SEARCH_RESULTS, s.getState(), Object(l.e)(u))
					},
					onClose: function() {
						f("dismiss"), x.dismissed = !0, d(null)
					}
				})
			}
			var wn = s("./src/reddit/pages/SearchResults/index.m.less"),
				Nn = s.n(wn);

			function Tn() {
				return (Tn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ln = 3e3,
				Rn = {
					[f.h.Listings]: {
						tab: f.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[f.h.People]: {
						tab: f.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[f.h.Posts]: {
						tab: f.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[f.h.Comments]: {
						tab: f.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function Fn(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(a.d)(),
					m = Object(Q.ib)(),
					g = Object(fe.a)(),
					x = Object(o.useRef)(!1),
					O = Object(a.e)(e => Object(Ve.C)(e, {
						subredditName: s.params.subredditName
					})),
					v = Object(a.e)(e => Ke(e, {
						pageLayer: m
					})),
					C = Object(a.e)(e => Object(We.c)(e, {
						pageLayer: m
					})),
					{
						searchQueryId: y
					} = Object(a.e)(e => Object(en.a)(e)),
					j = Object(a.e)($s),
					_ = (Object(a.e)(e => Object(vn.a)(e, Zs.Nc)), Object(a.e)(e => Object(ie.mb)(e))),
					E = Object(a.e)(e => Object(ie.rb)(e)),
					k = _ && E,
					P = Object(Q.Z)(m),
					S = Object(d.a)(P) || null,
					I = s.params.multiredditName,
					w = s.params.subredditName || I || "",
					N = s.params.username,
					T = Object(l.e)(r()(P || {}, wt.y)),
					L = Object(l.b)(w, N, T, k),
					R = O && T.restrict_sr,
					F = Ds(T.type, R),
					M = {
						...T,
						type: [c.hc.Posts, c.hc.Subreddits, c.hc.Users]
					},
					B = Object(l.b)(w, N, M, k),
					A = {
						redesign: !0,
						searchOptions: T
					},
					D = Rn[F].tab,
					U = Boolean(R) || Rn[F].sidebar && !I,
					W = Rn[F].filterNav || F === f.h.Comments && j,
					V = Object(Js.a)({
						redditStyle: !0,
						theme: g
					});
				let K;
				return y && (As.a.set(Zt.a.SERP, L, y), n(Object(p.c)())), Object(Q.S)(m) || Object(Q.D)(m) ? K = i.a.createElement(Fs, Tn({}, A, {
					url: gs(P)
				})) : v && C && (K = i.a.createElement(Fs, Tn({}, A, {
					subreddit: v,
					url: gs(P, v.name)
				}))), Object(Us.c)(), Object(o.useEffect)((function() {
					return () => {
						Bs.a.clear(Zt.a.SERP)
					}
				}), []), Object(o.useEffect)(() => (Ms.a.set(T.q || ""), () => {
					Ms.a.reset()
				}), []), Object(o.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(b.j)()), Ln), () => {
						Object(Jt.b)(Jt.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(o.useEffect)(() => {
					P && S && P[wt.w] !== S[wt.w] && (Object(Jt.b)(Jt.a.SearchResults), Object(Jt.d)(Jt.a.SearchResults))
				}, [P, S]), Object(o.useEffect)(() => {
					const e = {
							...P,
							type: void 0
						},
						t = {
							...S,
							type: void 0
						};
					!u()(e, t) && !sn()(S) && Bs.a.update(Zt.a.SERP)
				}, [P, S]), Object(o.useEffect)(() => {
					if (D === f.h.Comments && !x.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							x.current = !0, n(Object(b.i)())
						}, Ln), () => {
							window.clearTimeout(e)
						}
					}
				}, [D]), i.a.createElement(Qs, {
					backgroundColor: V.canvas,
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, null), i.a.createElement(In, null), i.a.createElement(Ue, {
						listingKey: L,
						listingName: w,
						location: t,
						searchOptions: T,
						tab: D
					})),
					navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(ot, {
						activeTab: D,
						searchOptions: T,
						searchSwitcher: K
					}), W && i.a.createElement(ks, {
						key: "subNav",
						searchOptions: T,
						shouldHideGlobalSearchLink: !0,
						subredditName: w,
						tab: D
					}), K && i.a.createElement("div", {
						className: Nn.a.searchSwitcherContainer
					}, K)),
					sidebar: U && i.a.createElement(St, {
						className: Nn.a.sidebar,
						listingKey: B,
						listingName: w || f.c,
						searchOptions: M,
						tab: D
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
					experimentName: n.I
				}) === n.Rd
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
					experimentName: r.D
				}), e => e === r.O.Enabled)
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
					experimentName: n.pc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.oc
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/localStorageAvailable/index.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/constants/localStorage.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				c = s("./src/reddit/selectors/userPrefs.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const l = 30 * n.ob,
				m = () => {
					localStorage.setItem(i.b.XpromoConsolidation, (new Date).toString())
				},
				u = () => {
					if (!Object(r.a)()) return !1;
					const e = localStorage.getItem(i.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(i.b.XpromoConsolidation), !0) : Date.now() > t + l
				},
				p = (e, t) => t === a.a.NoPreview && (e === o.ib.SkippableButtons || e === o.ib.SkippableText),
				b = (e, t) => t === a.a.NoPreview && e === o.ib.NoUpsell,
				h = Object(d.a)(a.h, a.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === a.a.NoPreview && !p(e, t) && !b(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && p(e, t),
						isOldDesignVariant: !(!e || !t) && b(e, t),
						variant: e
					}
				}),
				g = Object(d.a)(h, c.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
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
				experimentName: n.sf
			}) === n.xf.Enabled
		},
		"./src/reddit/selectors/experiments/search/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.zf
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
			const c = Object(n.a)(i.h, i.d, a.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.dd.Bottom_cell_dismissible]: e,
						[r.dd.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.dd.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.Db, !0),
				m = d(r.Eb, !0),
				u = d(r.Fb, !0),
				p = d(r.Db, !1),
				b = d(r.Eb, !1),
				h = d(r.Fb, !1)
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
						experimentName: n.qg
					}) === n.Rd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.rg
					}) === n.Rd
				},
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.pg
					});
					return t === n.ig.TypingIndicators || t === n.ig.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.d)(e, {
						experimentName: n.pg
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
					return Boolean(t) && !Object(r.Cg)(t)
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
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(r.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.F, a.R, a.S, o.h, (e, t, s, n, r, o, i) => {
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
					return s && Object(c.U)(e, {
						postId: s.id,
						disallowProfile: !0
					})
				}, e => Object(i.a)(e), (e, t, s, n) => e && !!t && (!t.isNSFW || t.isNSFW && n === r.kd.GreyRedditNoNsfw) && !!s && (!s.isNSFW || s.isNSFW && n === r.kd.GreyRedditNoNsfw) && !!t.created && t.created > p && t.created < b)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"abbb27126771"}')
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"a67c9b37646a"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"41973b2a5a8f"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"2c1754c5026c"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"7288c5f50973"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"e289f23cc495"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.d4682ccdbe38d0b68a01.js.map