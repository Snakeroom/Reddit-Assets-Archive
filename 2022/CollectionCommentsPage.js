// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.40d9bfc4dd4713daa5b0.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
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
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return O
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
				x = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				f = r()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const _ = (e, t) => {
					return (x.match(e) || []).filter(e => {
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
				O = e => {
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
				return x
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
					const e = Object(m.a)(d.Pc.Bottom_cell),
						t = Object(m.a)(d.Pc.Bottom_cell_dismissible),
						s = Object(m.a)(d.Pc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.Pc.Bottom_cell_signup_upsell_copy),
						r = Object(m.a)(d.Pc.Bottom_cell_surprise_install_copy),
						o = Object(m.a)(d.Pc.Bottom_sheet);
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

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = u(), o = Object(p.a)(s), l = Object(m.a)(d.Pc.Bottom_cell_dismissible_immediate_trigger);
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
				return f
			})), s.d(t, "b", (function() {
				return _
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
				x = Object(o.a)(b.a),
				f = () => async (e, t, s) => {
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
						method: a.mb.GET
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
									displayText: Object(m.qg)(e.category_name)
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
					} else e(x(b.error))
				}, v = (Object(o.a)(b.g), Object(o.a)(b.f), Object(o.a)(b.e), Object(o.a)(b.d)), _ = e => async (t, s) => {
					const n = Object(p.j)(s(), {
						id: e
					});
					t(v({
						categoryId: e,
						rank: n + 1
					})), Object(u.nb)(Object(p.d)(s()))
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
			})), s.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return O
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return E
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return j
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return k
			})), s.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return w
			})), s.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), s.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return I
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
				return B
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
				x = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/actions/economics/powerups/constants.ts"),
				_ = s("./src/lib/initializeClient/installReducer.ts"),
				y = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(_.a)({
				features: {
					powerups: y.a
				}
			});
			const C = Object(r.a)(v.d),
				O = Object(r.a)(v.i),
				E = Object(r.a)(v.f),
				j = Object(r.a)(v.g),
				k = Object(r.a)(v.e),
				w = Object(r.a)(v.h),
				P = (e, t) => async (s, n, r) => {
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
						await s(C(n)), r && await s(O(r))
					} catch (l) {
						o.c.captureException(l)
					}
				}, I = (e, t) => async (s, n) => {
					if (!e) return;
					const r = n(),
						o = Object(f.k)(r);
					if (!o || !Object(g.m)(r, {
							subredditId: e
						})) return;
					const i = !!Object(x.f)(r, {
						subredditId: e,
						userId: o.id
					});
					!t && i || await s(P(e, [o.id]))
				}, S = e => async (t, s) => !!e && (Object(h.f)(s()) ? (await t(Object(l.c)(e)), !!Object(x.d)(s(), {
					subredditId: e
				})) : (await t(Object(m.j)(e, {
					fullData: !0
				})), Object(g.f)(s(), {
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
					await t(P(a, Array.from(d)))
				}, T = (e, t) => async (s, n) => {
					if (!t) return;
					if (!(await s(S(e)))) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await s(P(e, Array.from(r)))
				}, L = (e, t) => async (s, n) => {
					const r = n(),
						o = Object(f.k)(r);
					if (!o) return;
					const i = o.id,
						a = Object(x.i)(r, {
							subredditId: e,
							userId: i
						});
					s(A({
						subredditId: e,
						userId: i,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, F = (e, t) => async (s, n) => {
					const r = n(),
						o = Object(f.k)(r);
					if (!o) return;
					const i = o.id,
						a = Object(x.h)(r, {
							subredditId: e,
							userId: i
						});
					s(A({
						subredditId: e,
						userId: i,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, A = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = s(),
						d = Object(f.k)(a);
					if (!d) return;
					const l = d.id;
					t(E(e));
					const {
						subredditId: m,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, g = [b, h].filter(Boolean), v = Object(x.e)(a, {
						subredditId: m,
						userId: l
					});
					try {
						await c(i(), m, g, v), t(j(e))
					} catch (_) {
						t(k(e)), o.c.captureException(_), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, B = (e, t) => async (s, r, i) => {
					let {
						gqlContext: a
					} = i;
					const d = r(),
						l = Object(f.k)(d);
					if (!l) return;
					const m = l.id,
						b = {
							subredditId: e,
							userId: m
						},
						h = [Object(x.h)(d, b), Object(x.i)(d, b)].filter(Boolean);
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
					const x = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(u(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: x
					})
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return V
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return q
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return K
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return G
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return J
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return Q
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
				x = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/constants/postCollection.ts"),
				_ = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/endpoints/governance/posts.ts"),
				C = s("./src/config.ts"),
				O = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function j(e, t, s) {
				const n = `${C.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(E.a)(`${n}/${e}/${t}/${s}`) : t ? Object(E.a)(`${n}/${e}/${t}`) : Object(E.a)(`${n}/${e}`)
			}
			var k = (e, t, s, r, o) => Object(O.a)(e, {
					data: o,
					endpoint: j(t, s, r),
					method: n.mb.GET
				}),
				w = s("./src/reddit/endpoints/page/subredditPage.ts"),
				P = s("./src/reddit/helpers/canonicalUrls.ts"),
				I = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				A = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = s("./src/reddit/selectors/platform.ts"),
				R = s("./src/reddit/selectors/postCollection.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/actions/pages/comments.ts"),
				U = s("./src/reddit/actions/pages/constants.ts"),
				z = s("./src/lib/initializeClient/installReducer.ts"),
				H = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(z.a)({
				pages: {
					comments: H.a
				}
			});
			const V = Object(r.a)(U.d),
				q = Object(r.a)(U.b),
				K = Object(r.a)(U.a),
				G = e => async (t, s) => {
					const {
						collectionId: r,
						partialPostId: o,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = o ? Object(F.x)(o) : "", x = d && Object(L.h)(d), {
						queryParams: y
					} = e, C = s(), {
						instanceId: O
					} = y, E = {
						id: r,
						type: _.b[l]
					}, j = _.b[l] === _.a.PROFILE, {
						hasSortParam: k,
						sortToUse: w
					} = Object(S.a)(C, g), I = ["context", "depth", "limit", f.d].reduce((e, t) => {
						const s = parseInt(y[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: k,
						instanceId: O
					});
					k && (I.sort = w), t(u.r(g)), await Promise.all([j ? t(p.d(c)) : Promise.resolve(), t(Q(r, g, x, I))]);
					const N = ((e, t) => {
						const s = Object(R.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const r = Object(D.O)(e, {
								identifier: t
							}),
							o = Object(i.c)(s.title, r.name).toString();
						return Object(a.a)(o, v.c, n.lb)
					})(s(), E) || Object(i.e)();
					t(m.m({
						title: N
					}));
					const A = s().posts.models[g];
					if (A) {
						const n = Object(D.O)(s(), {
							identifier: A.belongsTo
						});
						if (!A.isSponsored)
							if (A.belongsTo.type === _.a.SUBREDDIT) {
								!!Object(D.V)(C, {
									subredditId: A.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(p.d(n.name));
						const r = s().posts.instances[g] ? e.queryParams.instanceId : A.postId;
						t(Object(b.b)(r))
					}
					j ? Object(P.f)(s(), t, e) : Object(P.g)(s(), t, e), Object(T.w)(s(), !0)
				}, Y = Object(r.a)(U.c), J = (e, t, s, n) => async (r, i, a) => {
					const d = Object(o.a)(e, t, s, n),
						c = i();
					t = t || Object(R.p)(c, {
						collectionId: e
					});
					const l = await k(a.apiContext(), e, t, s, n);
					if (r(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(I.a)(l.body, t, c);
						r(q({
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
					} else r(K({
						error: l.error,
						key: d,
						...l.body
					}))
				}, Q = (e, t, s, n, r) => async (i, a, p) => {
					const b = Object(o.a)(e, t, s, n),
						h = a();
					t = t || Object(R.p)(h, {
						collectionId: e
					});
					const {
						subredditName: f
					} = n, v = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), _ = h.pages.comments.api.fullyLoaded[b], C = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || v && !C) {
						if (v && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(B.i)(h) ? A.a.COMMENTS_OVERLAY : A.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(_ || r || i(J(e, t, s, n)))
					}
					const O = h.user.prefs.commentMode;
					i(V({
						key: b,
						collectionId: e,
						commentMode: O,
						postId: t
					}));
					const E = {
						...n
					}; {
						const e = t && Object(M.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > W.MIN_NUM_COMMENTS_TO_TRUNCATE && (E.truncate = W.NUM_COMMENTS_TRUNCATE)
					}
					let j, P = await Object(N.a)("comments", () => k(p.apiContext(), e, t, s, E));
					if (i(Object(m.n)(P.status)), P.ok && (t = t || P.body.collections[e].primaryPostId)) {
						const e = Object.keys(P.body.posts).filter(e => !!P.body.posts[e].isMeta),
							s = Object(M.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(y.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (j = t.body)
						}
					}
					if (!r) {
						const r = t ? Object(M.G)(a(), {
							postId: t
						}) : null;
						r && P.body.comments && Object.keys(P.body.comments).length < r.numComments ? i(J(e, t, s, n)) : P.ok && i(Y({
							commentMode: O,
							key: b,
							postId: t
						}));
						const o = Object(B.i)(h) ? A.a.COMMENTS_OVERLAY : A.a.COMMENTS;
						i(Object(d.b)(o))
					}
					if (P.ok) {
						if (!t) return;
						const e = Object(I.a)(P.body, t, h);
						i(Object(W.commentsPageLoaded)({
							commentMode: O,
							key: b,
							postId: t,
							meta: h.meta,
							governance: j,
							shouldCollapse: e,
							...P.body
						})), i(g.g(b));
						const s = Object(M.G)(h, {
							postId: t
						});
						s && i(u.z(s, x.a.CommentsView)), !r && s && "subreddit" === s.belongsTo.type && P.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(P.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else f && (i(Object(l.subredditPending)({
						key: b
					})), P = await Object(N.a)("subreddit", () => Object(w.a)(p.apiContext(), f, {})), i(Object(m.n)(P.status))), i(Object(l.handleSubredditPageApiError)(P, f)), i(K({
						error: P.error,
						key: b,
						...P.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return ot
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return it
			})), s.d(t, "commentsPagePending", (function() {
				return at
			})), s.d(t, "commentsPageLoaded", (function() {
				return dt
			})), s.d(t, "commentsPageFailed", (function() {
				return ct
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return lt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ut
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return pt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return bt
			})), s.d(t, "commentsPageRequested", (function() {
				return ht
			})), s.d(t, "commentsPageDataRequested", (function() {
				return xt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return ft
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return vt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/reddit/actions/category/index.ts"),
				o = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				c = s("./src/reddit/actions/subredditSettings.ts"),
				l = s("./src/reddit/endpoints/governance/posts.ts"),
				m = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function b(e, t) {
				return Object(u.a)(e, {
					...p,
					variables: t
				})
			}
			var h = s("./src/reddit/endpoints/page/subredditPage.ts"),
				g = s("./src/reddit/endpoints/profile/info.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/pageTitle/index.ts"),
				_ = s("./src/reddit/actions/economics/helpers/async.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				C = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				O = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				E = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				w = s("./src/reddit/actions/subreddit.ts"),
				P = s("./src/reddit/actions/subreddit/notifications.ts"),
				I = s("./src/reddit/actions/subreddit/questions.ts"),
				S = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/constants/adEvents.ts"),
				T = s("./src/reddit/constants/graphql.ts"),
				L = s("./src/reddit/constants/parameters.ts"),
				F = s("./src/reddit/constants/posts.ts"),
				A = s("./src/reddit/helpers/commentList/index.ts"),
				B = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				R = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				W = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/selectors/adsSignals.ts"),
				z = s("./src/reddit/selectors/category.ts"),
				H = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				V = s("./src/reddit/selectors/experiments/postSeo.ts"),
				q = s("./node_modules/reselect/es/index.js"),
				K = s("./src/reddit/constants/experiments.ts"),
				G = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Y = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				J = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				Q = s("./src/reddit/selectors/platform.ts"),
				Z = s("./src/reddit/selectors/removedPosts.ts");
			const X = Object(q.a)(Q.f, Y.a, Z.a, Z.c, J.a, Z.e, J.b, (e, t, s, n, r, o, i) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const a = o || i,
					d = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || d)
			});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				re = s("./src/lib/makeActionCreator/index.ts"),
				oe = s("./src/lib/makeCommentsPageKey/index.ts"),
				ie = s("./src/reddit/actions/ads/index.ts"),
				ae = s("./src/reddit/helpers/canonicalUrls.ts"),
				de = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				le = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				me = s("./src/lib/performanceTimings/index.tsx"),
				ue = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				pe = s("./src/reddit/actions/gold/powerups.ts"),
				be = s("./src/lib/makeListingKey/index.ts"),
				he = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ge = Object(re.a)(he.b),
				xe = Object(re.a)(he.a);
			var fe = s("./src/reddit/actions/linkedPosts/index.ts"),
				ve = s("./src/reddit/actions/otherDiscussions/index.ts"),
				_e = s("./src/reddit/actions/subreddit/constants.ts"),
				ye = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ce = e => {
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
				Oe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ee = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				je = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var ke = e => {
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
							c = Object(Oe.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ee.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(x.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(je.a)(e)
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
				we = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Pe = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ie = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Se = e => {
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
							d = Object(Pe.a)(a),
							c = Ie(d),
							l = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: m,
								sort: u,
								subredditName: p
							} = r,
							b = Object(be.a)(p, f.Z[u], {
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
				Ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Te = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Le = e => {
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
							c = Object(Te.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ee.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(x.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(je.a)(e)
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
				Fe = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ae = Object(re.a)(Fe.b),
				Be = Object(re.a)(Fe.a);
			var Re = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Me = Object(re.a)(Re.b),
				De = Object(re.a)(Re.a),
				We = Object(re.a)(_e.k),
				Ue = Object(re.a)(_e.j),
				ze = (Object(re.a)(_e.s), Object(re.a)(_e.r), e => async (t, s, n) => {
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
						postId: p,
						range: b,
						sort: h,
						subredditName: g
					} = e, x = Object(be.a)(p, null, {
						isOtherDiscussions: !0
					}), v = s(), _ = Object(te.z)(v, {
						listingKey: x
					}), y = d && (!_ || 0 === _.length), C = Object(be.a)(g, f.Z[h], {
						t: b
					}), O = Object(te.z)(v, {
						listingKey: C
					}), E = c && (a || !O || 0 === O.length), j = a, k = i, w = Object(te.G)(v, {
						postId: p
					}), P = !!w && !!w.media && (Object(M.K)(w.media) || Object(M.F)(w.media)) && !w.media.altText;
					if (!(y || E || j || k || P || l)) return;
					y && t(Object(ve.d)({
						key: x
					}));
					const I = await ((e, t) => Object(u.a)(e, {
							...ye,
							variables: t
						}))(r(), e),
						S = I.body,
						N = Object(Ne.a)(m);
					l && (I.ok ? S.data && S.data.post && t(ge({
						postId: p,
						isEligibleForQASchema: null !== (o = S.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(xe())), y && Object(we.a)({
						getState: s,
						onFailure: e => t(Object(ve.b)(e)),
						onSuccess: e => t(Object(ve.c)(e)),
						postId: p,
						response: I
					}), E && !j && (I.ok ? S.data && Se({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(We(e)),
						options: e,
						postId: p,
						subreddit: S.data.subreddit
					}) : t(Ue(I.error))), j && !N && I.ok && S.data && ke({
						getState: s,
						onFailure: e => t(Object(fe.a)(e)),
						onSuccess: e => t(Object(fe.b)(e)),
						postId: p,
						post: S.data.post
					}), k && I.ok && Le({
						getState: s,
						onFailure: e => t(De(e)),
						onSuccess: e => t(Me(e)),
						postId: p,
						post: S.data.post
					}), P && I.ok && S.data && Ce({
						getState: s,
						onFailure: e => t(Be(e)),
						onSuccess: e => t(Ae(e)),
						postId: p,
						post: S.data.post
					})
				}),
				He = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(x.x)(n),
						{
							sortToUse: o
						} = Object(B.a)(e, r);
					return (!o || o === f.u.CONFIDENCE) && Object(G.c)(e, {
						experimentEligibilitySelector: () => Object(ne.P)(e),
						experimentName: K.C
					}) === K.E.Enabled
				};
			var Ve = s("./src/reddit/selectors/chatPost.ts"),
				qe = s("./src/reddit/selectors/seo/index.ts"),
				Ke = s("./src/reddit/actions/pages/constants.ts"),
				Ge = s("./src/lib/initializeClient/installReducer.ts"),
				Ye = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Je = s("./src/reddit/reducers/pages/comments/index.ts"),
				Qe = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Ze = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				Xe = s("./src/reddit/selectors/i18n/index.ts"),
				$e = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				et = s("./src/reddit/helpers/locales.ts"),
				tt = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				st = s("./src/reddit/selectors/experiments/countrySites.ts"),
				nt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				rt = s("./src/reddit/selectors/meta.ts");
			Object(Ge.a)({
				pages: {
					comments: Je.a
				}
			}), Object(Ge.a)({
				features: {
					modUserNotes: Ye.a
				}
			});
			const ot = 25,
				it = 100,
				at = Object(re.a)(Ke.h),
				dt = Object(re.a)(Ke.f),
				ct = Object(re.a)(Ke.e),
				lt = Object(re.a)(Ke.i);

			function mt(e) {
				return e && e.ok
			}
			const ut = (e, t, s) => {
					const n = !e,
						r = Object(te.G)(t, {
							postId: s
						}).belongsTo,
						o = Object(se.O)(t, {
							identifier: r
						}),
						i = Object(qe.c)(t, {
							identifier: r
						}),
						a = !!Object(Ne.c)(t),
						d = Object(Xe.a)(t),
						c = Object(nt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : d ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(D.h)(o) && !Object(Ve.d)(t, {
						postId: s
					}) && !!o || !Object(Q.i)(t) && Object(V.e)(t)), e && (l.postQASchema = Object(V.d)(t)), c && (l.listingBelow = !0), l
				},
				pt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				bt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ht = e => async (t, s) => {
					var o, i;
					const {
						partialPostId: c,
						partialCommentId: l
					} = e.params, {
						subredditName: m
					} = e.params || "", u = c ? Object(x.x)(c) : "", p = l && Object(R.h)(l), {
						path: b,
						queryParams: h
					} = e, g = Object(O.d)(b), {
						instanceId: _
					} = h, {
						hasSortParam: C,
						sortToUse: P
					} = Object(B.a)(s(), u), S = null === (i = null === (o = Object(Q.b)(s())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === i ? void 0 : i.route.chunk, N = ["context", "depth", "limit", L.d].reduce((e, t) => {
						const s = parseInt(h[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: m,
						hasSortParam: C,
						instanceId: _,
						include_categories: !0
					});
					C && (N.sort = P), N.onOtherDiscussions = g, N.comment_awardings_by_current_user = !0, t(j.r(u)), await t(xt(u, p, N, P));
					const A = s().posts.models[u],
						D = Object(ne.Q)(s());
					if (A && "subreddit" === A.belongsTo.type) {
						const e = A.belongsTo.id;
						await Promise.all([Object(me.i)(() => t(Object(pe.j)(e, {
							fullData: !0,
							includeIdentity: D
						})), {
							name: "subredditPowerupsRequested",
							page: S,
							isLoggedIn: D
						}), Object(me.i)(() => t(Object(ue.c)(e)), {
							name: "subredditAchievementFlairsRequested",
							page: S,
							isLoggedIn: D
						})]);
						const n = s();
						if (!Object(Q.i)(n)) {
							Object(Qe.a)(n) && t(Object(I.b)(e))
						}
						Object(ee.i)(n, e) && await t(Object(d.c)(u))
					}
					if (A) {
						const o = ((e, t) => {
								const s = Object(te.V)(e, {
										postId: t
									}),
									n = Object(te.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							i = Object(se.O)(s(), {
								identifier: A.belongsTo
							});
						if (i && (e => K.wf.Redirect === Object(G.b)(e, {
								experimentEligibilitySelector: X,
								experimentName: K.pf
							}))(s())) return void t(Object(n.c)(i.url));
						if ((A.media && A.media.type) === M.o.LIVEVIDEO) {
							const e = `/rpan${A.belongsTo.type===F.a.SUBREDDIT?i.url:"/"}${Object(x.z)(A.id)}`;
							return void t(Object(n.c)(e))
						}
						if (A.belongsTo.type !== F.a.SUBREDDIT || A.isSponsored) {
							if (A.belongsTo.type === F.a.PROFILE) {
								const e = Object(me.i)(() => t(k.d(i.name)), {
									name: "getProfileInfo",
									page: S,
									isLoggedIn: D
								});
								await e
							}
						} else {
							if (!!!Object(se.V)(s(), {
									subredditId: A.belongsTo.id
								})) {
								const e = Object(me.i)(() => t(w.o(i.name)), {
									name: "getSubredditRules",
									page: S,
									isLoggedIn: D
								});
								await e
							}
						}
						const d = ut(!1, s(), u),
							c = g;
						if (pt(c, d)) {
							Object(de.d)(de.a.LinkedPosts);
							const e = Object(de.c)(de.a.LinkedPosts);
							Object(de.d)(de.a.NsfwLinkedPosts);
							const n = Object(de.c)(de.a.NsfwLinkedPosts),
								{
									adsSeenCount: r,
									totalPostsSeenCount: o,
									sessionStartTime: a
								} = Object(U.a)(s()),
								l = {
									adContext: {
										layout: T.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u,
										clientSignalSessionData: {
											adsSeenCount: r,
											totalPostsSeenCount: o,
											sessionStartTime: a
										}
									},
									range: f.mc.WEEK.toUpperCase(),
									sort: f.Q.TOP,
									subredditName: i.name
								},
								m = {
									postId: u
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ne.c)(s())
								};
							Object(nt.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(Ze.a)(s())
								},
								h = bt(d);
							Object(me.i)(() => t(ze({
								...m,
								...l,
								...p,
								...b,
								...h,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: D,
								page: S
							});
							0
						}
						t(Object(y.p)()), t(E.m({
							title: o
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : A.postId;
						t(Object(a.b)(l)); {
							const e = Object(z.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(r.b(e))))
						}
					} else t(E.m({
						title: v.e()
					}));
					const {
						routePrefix: W
					} = e.params;
					F.b[W] === F.a.PROFILE ? Object(ae.f)(s(), t, e) : Object(ae.d)(s(), t, e)
				}, gt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], xt = (e, t, s, n) => async (r, a, d) => {
					var c, u, p;
					const x = a(),
						v = Object(oe.a)(e, t, s),
						{
							subredditName: y
						} = s,
						O = x.pages.comments.keyToHeadCommentId.hasOwnProperty(v),
						k = x.pages.comments.api.fullyLoaded[v],
						w = x.pages.comments.api.error[v],
						I = x.pages.comments.api.pending[v],
						T = !Object(ne.P)(x),
						L = Object(ne.k)(x),
						F = n === f.u.CHAT,
						B = !!x.platform.lastPage;
					if ((I || O && !w) && !(F && B)) {
						if (O && !x.sidebarPromotedPosts.firstFetch) {
							const e = Object(Q.i)(x) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(ie.b)(e))
							})
						}
						return void(k || r(vt(e, t, s)))
					}
					r(o.g());
					const R = x.user.prefs.commentMode;
					r(at({
						key: v,
						postId: e,
						commentMode: R
					}));
					const M = {
						...s,
						...F ? {
							sort: f.u.LIVE
						} : T ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.G)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > it && (M.truncate = ot)
					}
					const D = null === (u = null === (c = Object(Q.b)(x)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						U = Object(me.i)(() => Object(m.a)(d.apiContext(), e, t, M, Object(H.a)(a()), He(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !T,
							page: D
						}),
						z = !T && L && Object(me.i)(() => Object(g.d)(d.gqlContext(), Object(W.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !T,
							page: D
						}) || null,
						V = Object(tt.a)(x),
						q = Object(me.i)(() => b(d.gqlContext(), {
							postId: e,
							includeSubredditRankings: V
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !T,
							page: D
						});
					let K, G, Y, J;
					if ([K, G, Y] = await Promise.all([U, z, q]), r(Object(E.n)(K.status)), mt(Y) && "SubredditPost" === (null === (p = Y.body.data.postInfoById) || void 0 === p ? void 0 : p.__typename)) {
						const e = Y.body.data.postInfoById.subreddit.name;
						Object(ae.c)(a(), r, e)
					}
					if (K.ok) {
						const t = Object.keys(K.body.posts).filter(e => !!K.body.posts[e].isMeta),
							s = K.body.posts[e];
						if (Object(ae.b)(a(), r, s.belongsTo.type), t.length) {
							const e = Object(me.i)(() => Object(l.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: D,
									isLoggedIn: !T
								}),
								n = await e;
							n.ok && (J = n.body)
						}
						if (mt(G)) {
							const {
								data: e
							} = G.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							K.body && K.body.account && Object.assign(K.body.account, t)
						}
						if (mt(Y)) {
							const {
								data: t
							} = Y.body;
							if (t.postInfoById && gt.includes(t.postInfoById.__typename) && (K.body.posts[e] = {
									...K.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(rt.d)(x) && e && Object(st.f)(x) && await Object(et.a)(e, r);
								const {
									id: s,
									isEligibleForContentBlocking: n,
									allowedMediaInComments: o,
									directoryRankings: i
								} = t.postInfoById.subreddit;
								r(Object(P.c)({
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
						const n = Object(A.a)(K.body, e, x),
							{
								postMeta: o
							} = K.body;
						K.body.posts[e] = {
							...K.body.posts[e],
							isRobotIndexable: Object($e.a)(o, e)
						}, r(dt({
							key: v,
							postId: e,
							meta: x.meta,
							governance: J,
							shouldCollapse: n,
							...K.body
						}))
					} {
						const n = Object(te.G)(a(), {
							postId: e
						});
						n && K.body.comments && Object.keys(K.body.comments).length < n.numComments ? r(vt(e, t, s)) : K.ok && r(ft({
							key: v
						}));
						const o = Object(Q.i)(x) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
						r(Object(ie.b)(o))
					}
					if (K.ok) {
						r(S.g(v));
						const t = Object(te.G)(a(), {
								postId: e
							}),
							s = Object.keys(K.body.comments);
						if (r(j.z(t, N.a.CommentsView)), Object(ee.h)(a(), {
								subredditId: t.belongsTo.id
							}) && r(Object(C.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && K.body.comments) {
							const e = Object(me.i)(() => r(Object(_.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: D,
								isLoggedIn: !T
							});
							await e
						}
					} else {
						let e;
						y && (r(Object(i.subredditPending)({
							key: v
						})), e = await Object(ce.a)("subreddit", () => Object(h.a)(d.apiContext(), y, {})), r(Object(E.n)(e.status)), r(Object(i.handleSubredditPageApiError)(e, y))), r(ct({
							error: K.error,
							key: v,
							...e ? e.body : K.body
						}))
					}
				}, ft = Object(re.a)(Ke.g), vt = (e, t, s) => async (n, r, o) => {
					var i, a;
					const d = Object(oe.a)(e, t, s),
						l = r(),
						u = Object(ne.Q)(l),
						p = Object(ne.k)(l),
						h = null === (a = null === (i = Object(Q.b)(r())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						x = Object(m.a)(o.apiContext(), e, t, s, Object(H.a)(l), He(l)),
						f = u && p && Object(g.d)(o.gqlContext(), Object(W.e)(p)) || null,
						v = Object(me.i)(() => b(o.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: u,
							page: h
						}),
						[y, C, O] = await Promise.all([x, f, v]);
					if (y.ok) {
						if (mt(C)) {
							const {
								data: e
							} = C.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							y.body && y.body.account && Object.assign(y.body.account, t)
						}
						if (mt(O)) {
							const {
								data: t
							} = O.body;
							y.body.posts[e] = {
								...y.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(A.a)(y.body, e, l);
						n(dt({
							key: d,
							postId: e,
							meta: l.meta,
							shouldCollapse: t,
							...y.body
						})), n(ft({
							key: d
						}));
						const s = r().posts.models[e],
							o = s && Object(te.V)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object($.a)(l, {
							subredditId: o.id
						}) && n(Object(c.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && y.body.comments && await n(Object(_.a)({
							commentIds: Object.keys(y.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(ct({
						error: y.error,
						key: d,
						...y.body
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
				return f
			})), s.d(t, "a", (function() {
				return _
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
			const h = Object(r.a)(i.x),
				g = Object(r.a)(i.y),
				x = Object(r.a)(i.w),
				f = (e, t, s) => async (n, r, o) => {
					const i = Object(p.A)(r(), {
						subredditName: e
					});
					if (i) return _(i.id, t, s)(n, r, o)
				}, v = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), _ = (e, t, s) => async (r, i, p) => {
					const f = await Object(l.e)(t);
					r(h());
					const _ = i();
					try {
						await Object(o.g)("communityIcon", f, e)(r, i, p)
					} catch (C) {
						return Object(b.a)(Object(c.c)(_, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: m.b.Error,
							text: v()
						})), void r(x())
					}
					const y = Object(u.c)(i(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(_, "image is null")), r(Object(a.f)({
						kind: m.b.Error,
						text: v()
					})), void r(x());
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
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: m,
					callToAction: p,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let h = m.displayText;
				m.displayText.length >= 40 && (h = m.displayText.slice(0, 40 - "...".length) + "...");
				const g = Object(c.s)(s, m.displayText),
					x = Object(c.t)(s) ? h : b,
					f = Object(c.t)(s) ? s.subcaption : m.displayText,
					v = Object(i.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					_ = Object(i.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: v
				}, b && !r && !g && o.a.createElement("span", {
					className: u.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !g && o.a.createElement(d.a, {
					href: m.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: _,
					"data-adclicklocation": l.a.CTA_URL
				}, h), g && o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: u.a.productTitle
				}, x), o.a.createElement("span", {
					className: u.a.subcaption
				}, f))), p && o.a.createElement(a.a, {
					className: u.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
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
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				m = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				p = s.n(u);
			const b = e => {
				let t;
				switch (e) {
					case m.b.ExtraLarge:
						t = p.a.ExtraLarge;
						break;
					case m.b.Large:
						t = p.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const m = Object(o.d)();
				if (!Object(o.e)(l.a) || !t.isSponsored || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return r.a.createElement("div", {
					className: Object(i.a)(n, p.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && m(Object(a.z)(t, c.a.Click))
					}
				}, r.a.createElement(d.b, {
					className: Object(i.a)(p.a.Content, b(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
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
				return P
			})), s.d(t, "g", (function() {
				return I
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
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				O = s.n(C);
			const E = l.a.p("EmptyTitle", O.a),
				j = l.a.p("ErrorTitle", O.a),
				k = l.a.p("EmptyText", O.a),
				w = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(O.a.StateContainer, t)
					}, s ? a.a.createElement(_.a, {
						className: O.a.LiveChatIcon
					}) : a.a.createElement(v.a, {
						className: O.a.CommentsIcon
					}), a.a.createElement(E, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				P = () => a.a.createElement("div", {
					className: O.a.StateContainer
				}, a.a.createElement(v.a, {
					className: O.a.CommentsIcon
				}), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				I = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: O.a.StateContainer
					}, a.a.createElement(v.a, {
						className: O.a.CommentsIcon
					}), a.a.createElement(E, null, n.fbt._("That comment is missing", null, {
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
						className: O.a.StateContainer
					}, a.a.createElement(y.a, {
						className: O.a.SnooFacepalm
					}), a.a.createElement(j, null, t ? Object(b.a)({
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
						className: Object(c.a)(O.a.StateContainer, O.a.ErrorFullPage)
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
				}, "LoadingFullPage", O.a),
				L = l.a.div("CommentsPlaceholderContainer", O.a),
				F = l.a.div("CommentPlaceholder", O.a),
				A = l.a.div("Avatar", O.a),
				B = l.a.div("VoteColumn", O.a),
				R = l.a.div("TextColumn", O.a),
				M = () => a.a.createElement("div", {
					className: Object(c.a)(O.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(c.a)(O.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = e => a.a.createElement(L, null, o()(10, t => a.a.createElement(F, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(A, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(B, null, a.a.createElement(f.b, {
					className: O.a.Upvote
				}), a.a.createElement(x.a, {
					className: O.a.Downvote
				})), a.a.createElement(R, null, a.a.createElement(M, null), a.a.createElement(D, null)))))
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
				x = s("./src/reddit/constants/comments.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/constants/elementClassNames.ts"),
				_ = s("./src/reddit/constants/gold.ts"),
				y = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const C = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: O,
							effectHighlight: {
								type: y.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				O = "ff0000";

			function E(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(k).filter(e => e !== j)
				}(e) : [])
			}
			const j = {
				glowHexColor: null,
				effectHighlight: null
			};

			function k(e) {
				for (const t of C) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return j
			}
			var w = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				P = s("./src/reddit/selectors/comments.ts"),
				I = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/Comments/Comment/index.tsx"),
				A = s("./src/lib/scroll/index.ts"),
				B = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				R = s("./src/reddit/contexts/InsideOverlay.tsx"),
				M = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				W = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				U = s.n(W);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = p.a.wrapped(D.a, "ArrowRight", U.a), V = p.a.wrapped(B.a, "LinkOrOverlayLink", U.a), q = p.a.span("HoverSpan", U.a), K = Object(l.c)({
				permalink: (e, t) => Object(P.m)(e, {
					commentId: Object(P.r)(e, t).parentId
				})
			});
			var G = Object(c.b)(K)(Object(R.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement("div", {
						className: Object(m.a)(U.a.Wrapper, {
							[U.a.isActive]: t
						})
					}, d.a.createElement(V, {
						isOverlay: !!s,
						to: Object(M.b)(n),
						onClick: A.b
					}, d.a.createElement(q, null, z._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", d.a.createElement(H, null)))
				})),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				J = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Q = s.n(J);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = p.a.div("MoreCommentsItemWrapper", Q.a), $ = p.a.p("MoreComments", Q.a), ee = p.a.wrapped($, "MoreCommentsInteractive", Q.a), te = Object(l.c)({
				moreCommentsItem: P.E,
				moreCommentsPending: P.F
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
					return d.a.createElement(X, null, r ? d.a.createElement($, null, Z._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement(Y.a.Consumer, null, e => d.a.createElement(ee, {
						className: Object(m.a)({
							[Q.a.isActive]: t
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
					return d.a.createElement(de, null, re()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : d.a.createElement(ce, {
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
				xe = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(v.f)
				},
				fe = () => {
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
				commentListNode: (e, t) => Object(P.l)(e, t),
				depth: (e, t) => Object(P.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const r = Object(P.l)(e, {
						commentLink: s
					});
					if (r && s.type === x.a.Comment) {
						n = E(r.treatmentTags)
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
					const n = Object(P.l)(e, {
						commentLink: s
					});
					return !(s.type !== x.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= _.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(P.p)(e);
					if (n === w.a.None) return !1;
					if (s.type !== x.a.Comment) return !1;
					const r = s.id,
						o = Object(I.b)(e, {
							commentId: r
						});
					if (!o) return !1;
					const i = Object(L.v)(e),
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
					onPresenceIndicatorInViewport: _,
					onShortLineClick: y,
					parentNodeIds: C,
					postId: O,
					renderedInOverlay: E,
					scrollToAndRemeasure: j,
					showBlockingInterstitial: k
				} = e, w = !!p, P = !(!a || !a.glowHexColor), I = P && i > 0, S = P, N = d.a.createElement(ge, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: I,
						[he.a.glowBorderBottomPadding]: S
					}),
					id: r.id,
					style: {
						paddingLeft: i * (f.v + f.u) + (r.type === x.a.Comment ? f.v : 0)
					},
					tabIndex: -1
				}, d.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: I,
					onLineClick: v,
					onLineMouseOver: xe,
					onLineMouseOut: fe,
					onShortLineClick: y,
					type: r.type,
					parentNodeIds: C
				}), _e({
					childrenInfo: t,
					clearHovered: fe,
					commentLink: r,
					commentsPageKey: o,
					onLineMouseOver: xe,
					hasAwardGradient: w,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isFirstInList: b,
					isHighlighted: g,
					postId: O,
					renderedInOverlay: E,
					scrollToAndRemeasure: j,
					onPresenceIndicatorInViewport: _,
					showBlockingInterstitial: k
				}));
				return u && r.type === x.a.Comment ? d.a.createElement(me.a, null, N) : N
			});
			const _e = e => {
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
					onPresenceIndicatorInViewport: f,
					showBlockingInterstitial: v
				} = e;
				switch (n.type) {
					case x.a.Comment:
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
							onPresenceIndicatorInViewport: f,
							showBlockingInterstitial: v
						});
					case x.a.MoreComments:
						return d.a.createElement(se, {
							commentsPageKey: r,
							isActive: c,
							moreCommentsId: n.id
						});
					case x.a.ContinueThread:
						return d.a.createElement(G, {
							id: n.id,
							isActive: c
						})
				}
			};
			var ye = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ce = s("./src/reddit/components/Comments/States/index.tsx"),
				Oe = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				je = s("./src/reddit/constants/elementIds.ts"),
				ke = s("./src/reddit/featureFlags/index.ts"),
				we = s("./src/reddit/helpers/commentList/index.ts"),
				Pe = s("./src/reddit/helpers/trackers/comment.ts"),
				Ie = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Te = s("./src/lib/LRUCache/index.ts"),
				Le = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Fe = s("./src/reddit/selectors/telemetry.ts");
			const Ae = e => t => ({
				...Object(Fe.o)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Fe.d)(t, {
					reason: String(e)
				})
			});
			var Be = s("./src/reddit/components/Comments/index.m.less"),
				Re = s.n(Be);
			const Me = f.f + 10,
				De = 65,
				We = p.a.wrapped(Oe.b, "Scroller", Re.a),
				Ue = Object(l.c)({
					allCollapsed: P.a,
					commentLinks: P.k,
					commentThreadLinkSet: P.o,
					measureScrollFPS: ke.d.measureScrollFPS,
					moreComments: P.b,
					postPermalink: T.F
				}),
				ze = Object(c.b)(Ue, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.f)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.i)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.ab)(Object(M.b)(t)))
				})),
				He = new Te.a(500),
				Ve = new Te.a(500),
				qe = (e, t) => {
					const s = `entered-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, He.set(s, n)), n
				},
				Ke = (e, t) => {
					const s = `left-${e}`;
					let n = Ve.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, Ve.set(s, n)), n
				};
			class Ge extends d.a.Component {
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
						}), this.props.sendEvent(Object(Pe.b)(e)))
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
					this.timerId && Ne.c.cancel(this.timerId), e.length && (this.timerId = Ne.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Ne.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Se.a && this.props.sendEvent(Ae(this.props.commentLinks.length))
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
					this.timerId && Object(Ne.b)(u.n.Redesign, {
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
						r && (s[c.id].depth > o ? (ye.a(c.id), i += Object(we.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[r] = {
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
					} = this.props, a = qe(e.id, n), c = Ke(e.id, r);
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
						className: Object(m.a)(Re.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(je.e) : null,
						onScroll: i,
						onAllChildrenRendered: r,
						preventScrollOnMount: !0,
						scrollToChildPadding: Me,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Ce.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Ce.c, null)
				}
			}
			t.a = ze(Object(Ee.c)(Object(Le.a)(Object(Ie.d)(Ge))))
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
				x = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/reddit/components/ModProgressModule/index.tsx"),
				v = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				_ = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				y = s("./src/reddit/components/SidebarFooter/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				E = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				j = s("./src/reddit/components/Widgets/Recommendations/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/index.tsx"),
				w = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				P = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				I = s("./src/reddit/constants/experiments.ts"),
				S = s("./src/reddit/featureFlags/component.tsx"),
				N = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				F = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				A = s("./src/reddit/selectors/experiments/postSeo.ts"),
				B = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx"),
				W = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				U = s.n(W);
			const z = Object(S.a)("spPoints", h.a),
				H = Object(S.a)("spLeaderboard", g.a),
				V = Object(n.a)({
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
				q = Object(c.c)({
					d2xPdpSideRailRecsVariant: L.a,
					isD2xPdpSideRailRecsEnabled: L.b,
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(T.r)(s) && !n && Object(F.a)(e) === I.Pe.NewModule
					},
					isLoggedIn: M.Q,
					postSEOV2IdCardVariant: A.h,
					shouldShowReredditPromo: B.a,
					widgets: Object(u.a)(R.v)
				}),
				K = Object(d.b)(q);
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
						subredditName: d,
						subredditOrProfile: c
					} = this.props, m = Object(A.c)(o) || Object(A.f)(o), u = s === I.Uc.GreyRereddit || s === I.Uc.LargeImagePreview, b = s === I.Uc.GreyRedditNoNsfw, h = i && (u || b) ? a.a.createElement(k.ReredditButtons, {
						directoryTimestamp: r.created,
						postId: r.id,
						renderAsPlainLink: !0
					}) : void 0;
					return a.a.createElement("div", {
						className: Object(l.a)(e, U.a.outerWrapper)
					}, a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: d,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: m
					}), a.a.createElement(C.a, null, a.a.createElement(D.a, null, !(r.isNSFW && b) && a.a.createElement(j.a, {
						post: r,
						subredditOrProfile: c
					}), i && !u && !b && a.a.createElement(w.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), a.a.createElement(y.a, {
						reredditButtons: h
					}), a.a.createElement(p.a, {
						className: U.a.backToTopButton,
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
					} = this.props, d = !Object(A.c)(o) && !Object(A.f)(o);
					return a.a.createElement(O.a, {
						adComponentOnFakeOverlay: s,
						adComponent: d ? a.a.createElement(_.a, {
							postId: r.id,
							isOverlay: n,
							listingName: i,
							placement: m.d.BELOW_THE_FOLD,
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
						postSEOV2IdCardVariant: d,
						shouldShowReredditPromo: c,
						subredditId: u,
						subredditName: p,
						widgets: h
					} = this.props;
					let g = 0;
					const y = Object(A.c)(d) || Object(A.f)(d),
						O = a.a.createElement(_.a, {
							postId: i.id,
							isOverlay: o,
							listingName: p,
							placement: m.d.ABOVE_THE_FOLD,
							placementIndex: g++,
							position: N.a.FIRST,
							refreshKey: i.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return s ? this.renderRecommendationsSidebar() : a.a.createElement("div", {
						className: Object(l.a)(U.a.outerWrapper, e)
					}, n && a.a.createElement(f.default, {
						subredditId: u,
						subredditName: p
					}), Object(T.r)(i) ? a.a.createElement(V, {
						profileName: p,
						isOverlay: o || !1
					}) : a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: p,
						postId: i.id,
						rememberPosition: i.numComments > 0,
						isMinimal: y
					}), a.a.createElement(b.a, {
						cardClassName: U.a.card,
						subredditId: u
					}), a.a.createElement(z, {
						className: U.a.card,
						subredditId: u,
						uniqueId: i.id
					}), a.a.createElement(H, {
						className: U.a.card,
						subredditId: u,
						uniqueId: i.id
					}), a.a.createElement(v.a, {
						subredditId: u
					}), O, r && h.map((e, t) => a.a.createElement(C.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(P.a, {
						subredditName: p,
						widget: e
					}))), i.isSponsored && a.a.createElement(C.a, null, a.a.createElement(E.a, null)), c && a.a.createElement(w.a, {
						directoryTimestamp: i.created,
						postId: i.id
					}), this.renderFooter(g++))
				}
			}
			t.a = K(G)
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
					} = this.props, g = l && !e, x = l ? m.a.TruncatedComments : "";
					return r.a.createElement("div", {
						onClick: h,
						ref: i
					}, r.a.createElement("div", {
						className: Object(o.a)(m.a.ContentWrapper, s, x),
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
				return E
			})), s.d(t, "a", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(_),
				C = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 8,
				j = 1,
				k = C.a.div("Container", y.a),
				w = C.a.div("PostMetaWrapper", y.a),
				P = C.a.wrapped(p.c, "PostTitle", y.a),
				I = C.a.div("FlatList", y.a),
				S = C.a.div("FlatItem", y.a),
				N = C.a.span("FlatListDotSpacer", y.a),
				T = C.a.wrapped(k, "LinkContainer", y.a),
				L = C.a.div("Content", y.a),
				F = C.a.div("ThumbnailContainer", y.a),
				A = Object(d.c)({
					isCurrentUserProfilePost: f.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.Qb.TOPIC),
					shouldOpenPostInNewTab: v.jb
				}),
				B = Object(i.b)(A);
			t.c = Object(x.b)(B(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					c = t;
				return i && !i.media ? o.a.createElement(T, {
					className: c
				}, o.a.createElement(L, null, o.a.createElement(w, null, o.a.createElement(u.a, d)), R(i), i.source && o.a.createElement(b.a, {
					post: i
				}), D(e)), U(e)) : o.a.createElement(k, {
					className: c
				}, o.a.createElement(w, null, o.a.createElement(u.a, d)), R(i), M(e), D(e))
			}));
			const R = e => o.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(m.a, O({}, n, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(I, null, o.a.createElement(S, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(N, null), o.a.createElement(S, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				U = e => o.a.createElement(F, null, o.a.createElement(h.a, {
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
					s = Object(o.e)(t => Object(d.W)(t, {
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
				getComponent: () => s.e("EconomicsSubredditPremiumSidebarCards").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = s("./src/reddit/components/ExpandoButton/index.m.less"),
				y = s.n(_);
			const C = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(u.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(y.a.icon, y.a.hideOnHover);
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
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: _,
					useMediaIcons: C
				} = e, E = s || h, j = Object(i.e)(x.b), k = Object(i.e)(x.c), w = t => {
					(j || k) && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, P = E.media, I = Object(g.p)(h), S = r && !!s;
				return P && !I && !(("rtjson" === P.type || "text" === P.type || "liveaudio" === P.type) && !Object(p.a)(E)) || !!h.pollData ? o.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, y.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": v.a.MEDIA,
					onClick: _
				}, u ? o.a.createElement(b.a, {
					name: "collapse",
					className: y.a.icon
				}) : C ? o.a.createElement(o.a.Fragment, null, O(E.media && E.media.type, S, h), o.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(y.a.icon, y.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: y.a.icon
				})) : E.source && E.source.url ? o.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(E.permalink),
					rel: "nofollow",
					onClick: w
				}, o.a.createElement(b.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
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
				x = d.a.div("SubredditIcon", h.a),
				f = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				_ = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				C = d.a.wrapped(o.a, "HeaderUrl", h.a),
				O = d.a.span("Container", h.a),
				E = Object(a.a)(e => {
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
						E = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = `${4+E}px`;
					return r.a.createElement(O, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, r.a.createElement(C, {
						className: e.className,
						to: e.url
					}, r.a.createElement(_, {
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
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(x, {
						style: {
							backgroundImage: `url(${s})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: j,
							width: j
						}
					}) : r.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: j,
							width: j
						}
					})), r.a.createElement(y, {
						style: {
							paddingTop: 32 === E ? "4px" : "14px"
						}
					}, t)), r.a.createElement(f, {
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
			t.a = E
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
				b = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

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
				return x
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
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
			}), x = (e, t) => {
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
			}, f = (e, t) => {
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
			}, _ = e => {
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
				x = Object(a.c)({
					subreddit: u.A,
					subredditAboutInfo: u.x
				}),
				f = Object(i.b)(x);
			t.a = f(e => {
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
				x = s("./src/reddit/controls/ContentType/index.tsx"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/Flair/index.tsx"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/telemetry/index.ts"),
				O = s("./src/reddit/components/ItemCarousel/index.m.less"),
				E = s.n(O);
			const j = e => {
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
					thumbnail: O,
					isNsfw: j,
					subreddit: k
				} = t, w = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && k && Object(C.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						..._.o(s)
					}))(s, k)(w))
				}, []);
				return d.a.createElement(f.a, {
					to: (null == o ? void 0 : o.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(E.a.redditLinkCard, r),
					onClick: () => {
						Object(C.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							..._.o(s)
						}))(s, k)(w))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(E.a.imageContainer)
				}, (null == O ? void 0 : O.url) ? d.a.createElement("img", {
					src: O.url,
					className: Object(n.a)(j && E.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: E.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: E.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: E.a.title
				}, u), j && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: E.a.flair
				})), d.a.createElement("div", {
					className: E.a.postStats
				}, m && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(m), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: E.a.separator
				}, "•")), i && d.a.createElement("span", null, Object(h.b)(i), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: E.a.separator
				}, "•"), l && d.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Vb, !0)))))
			};
			var k = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/components/SubredditNameLink/index.tsx"),
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
					s && b && Object(C.a)(Object(S.c)(s, b)(h))
				}, [s, b, h]);
				return d.a.createElement(f.a, {
					to: o,
					className: Object(n.a)(E.a.redditLinkCard, E.a.crosspostLinkCard, r),
					onClick: () => {
						Object(C.a)(Object(S.a)(s, b)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(E.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? d.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(u && E.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: E.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: E.a.postDescription
				}, d.a.createElement("div", {
					className: E.a.postStats
				}, d.a.createElement(N.a, {
					className: E.a.crosspostIcon
				}), d.a.createElement(I.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: E.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), d.a.createElement("span", {
					className: E.a.separator
				}, "•"), d.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(n.a)(E.a.title, E.a.crosspostTitle)
				}, u && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: E.a.flair
				}), l)))
			};
			var L = d.a.memo(e => {
					let {
						className: t
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(E.a.redditLinkCard, t)
					}, d.a.createElement("div", {
						className: Object(n.a)(E.a.shimmer, E.a.imageContainer)
					}), d.a.createElement("div", {
						className: E.a.postDescription
					}, d.a.createElement("div", {
						className: Object(n.a)(E.a.shimmer, E.a.title)
					}), d.a.createElement("div", {
						className: Object(n.a)(E.a.shimmer, E.a.postStats)
					})))
				}),
				F = s("./src/reddit/actions/subreddit.ts"),
				A = s("./src/reddit/components/SubscribeButton/index.tsx"),
				B = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: M
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
					size: x,
					isDiscovery: f,
					post: O,
					className: j,
					isNsfw: k
				} = e;
				const w = Object(c.d)();
				Object(a.useEffect)(() => {
					w(Object(F.u)(r))
				}, [w, r]);
				const P = Object(c.e)(e => Object(u.W)(e, {
						subredditId: t
					})),
					S = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					O && P && f && Object(C.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						..._.o(s)
					}))(O, P)(S))
				}, []);
				const N = Object(a.useCallback)(e => {
					if (f) return (e => {
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
							subreddit: Object(u.W)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: O,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, p]);
				return d.a.createElement("div", {
					className: Object(n.a)(E.a.subredditItem, null === E.a || void 0 === E.a ? void 0 : E.a[x], j)
				}, d.a.createElement("div", {
					className: E.a.contentWrapper
				}, d.a.createElement("div", {
					className: E.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, d.a.createElement("img", {
					className: E.a.banner,
					src: b || void 0
				})), d.a.createElement("div", {
					className: E.a.carouselContent
				}, d.a.createElement(I.a, {
					to: g,
					className: E.a.lockup,
					onClick: () => {
						f && Object(C.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							..._.o(s)
						}))(O, P)(S))
					}
				}, d.a.createElement("div", {
					style: "small" === x ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: E.a.backgroundImage
				}, m ? d.a.createElement("img", {
					src: m,
					className: E.a.subredditIcon
				}) : d.a.createElement(R.a, {
					className: E.a.subredditIcon
				})), d.a.createElement("div", {
					className: E.a.lockupText
				}, d.a.createElement("span", {
					className: E.a.subredditName
				}, "r/", r), " ", k && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: E.a.flair
				}), d.a.createElement("span", {
					className: E.a.subscribersCount
				}, M._({
					"*": "{number} members",
					_1: "1 member"
				}, [M._plural(o, "number", Object(h.b)(o))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: E.a.description
				}, i)), d.a.createElement(A.a, {
					className: E.a.subscribeButton,
					identifier: {
						name: r,
						type: "subreddit"
					},
					getEventFactory: N,
					priority: B.c.Tertiary,
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, H = Object(P.c)(e => {
				let {
					title: t,
					className: s,
					itemIds: o,
					size: p = "large",
					hasSubredditNames: b = !1,
					hasPostIds: h = !1,
					isDiscovery: g,
					post: x
				} = e;
				const f = Object(c.d)(),
					[v, _] = Object(a.useState)(null),
					[y, C] = Object(a.useState)(null),
					[O, P] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[I, S] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: F,
						crosspostIds: A,
						postIds: B,
						postUrls: R
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
					M = Object(c.e)(e => Object(u.B)(e, F)),
					U = Object(c.e)(e => Object(k.L)(e, B)),
					H = Object(c.e)(e => Object(k.L)(e, A)),
					V = M.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					q = U.reduce((e, t) => (e[t.id] = t, e), {}),
					K = H.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == F ? void 0 : F.length) || B.length || A.length) && f(Object(l.e)(F, b, F, h, [...A, ...B]))
				}, [F, A, B, f, h, b]);
				const G = o.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case w.a.SUBREDDIT:
								const t = null == V ? void 0 : V[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case w.a.POST:
								const r = null == q ? void 0 : q[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								});
								break;
							case w.a.CROSSPOST:
								const o = null == K ? void 0 : K[n];
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
					J = Object(a.useCallback)(() => {
						if (!y) return;
						const {
							width: e
						} = null == y ? void 0 : y.getBoundingClientRect(), t = (null == y ? void 0 : y.scrollLeft) > 0, s = (null == y ? void 0 : y.scrollLeft) < y.scrollWidth - e;
						0 === (null == y ? void 0 : y.scrollLeft) && y.scrollWidth - e == 0 || P({
							left: t,
							right: s
						})
					}, [y]);
				Object(a.useEffect)(() => {
					if (!v || !y) return;
					const e = i()(() => {
						const e = z(y);
						S(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = z(y);
					return S(t), J(), () => {
						window.removeEventListener("resize", e)
					}
				}, [v, y, J, I, G.length]);
				const Q = () => 1 === G.length ? E.a.flexWidth : 2 === G.length ? E.a.flexWidthTwoItems : E.a.constantWidth;
				return d.a.createElement("div", {
					ref: _,
					className: Object(n.a)(E.a.carouselContainer, s, null === E.a || void 0 === E.a ? void 0 : E.a[p])
				}, d.a.createElement("div", {
					className: E.a.carouselHeader,
					style: {
						width: N
					}
				}, d.a.createElement("h3", {
					className: E.a.carouselTitle
				}, t)), d.a.createElement("div", {
					ref: C,
					onScroll: J,
					className: Object(n.a)(E.a.itemsContainer, null === E.a || void 0 === E.a ? void 0 : E.a[p]),
					style: {
						width: N
					}
				}, !G.length && Array(3).fill(!0).map((e, t) => d.a.createElement(L, {
					key: t,
					className: Q()
				})), null == G ? void 0 : G.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var r, o, i;
					switch (s) {
						case w.a.SUBREDDIT:
							const e = n;
							return d.a.createElement(D, W({
								className: Q(),
								index: t + 1,
								size: p,
								banner: null === E.a || void 0 === E.a ? void 0 : E.a.bannerBackgroundImage,
								icon: (null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.icon) || (null === (i = null === (o = e.styles) || void 0 === o ? void 0 : o.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: x
							}, e));
						case w.a.POST:
							const s = n;
							return d.a.createElement(j, {
								postCard: {
									...s,
									url: R[s.id]
								},
								className: Q(),
								post: x
							});
						case w.a.CROSSPOST:
							const a = n;
							return d.a.createElement(T, {
								crosspostCard: {
									...a
								},
								className: Q(),
								post: x
							});
						default:
							return null
					}
				})), G.length > 2 && d.a.createElement("div", {
					className: Object(n.a)(E.a.carouselControls, {
						[E.a.hasTitle]: !!t
					})
				}, d.a.createElement("div", {
					className: Object(n.a)(E.a.buttonWrapper, E.a.left, {
						[E.a.hidden]: !O.left
					})
				}, d.a.createElement("button", {
					className: E.a.scrollButton,
					onClick: Y(-I)
				}, d.a.createElement(m.a, {
					name: r.a.left_fill,
					className: E.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(E.a.buttonWrapper, E.a.right, {
						[E.a.hidden]: !O.right
					})
				}, d.a.createElement("button", {
					className: E.a.scrollButton,
					onClick: Y(I)
				}, d.a.createElement(m.a, {
					name: r.a.right_fill,
					className: E.a.scrollIcon
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
					subredditOrProfile: x,
					templatePlaceholderImage: f,
					shouldShowFollowButton: v,
					isFollowed: _,
					isCommentsPage: y,
					onFollowPostClick: C
				} = e;
				return Object(u.a)() ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: v || g
					})
				}, r.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, v && r.a.createElement(a.a, {
					isFilled: !!_,
					onClick: C,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), g && x && r.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(p.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), r.a.createElement(c.a, {
					crosspost: t,
					isCommentsPage: y,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
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
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/ImageInput/index.tsx"),
				y = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				C = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				j = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				k = s("./src/reddit/models/ApiRequestState/index.ts"),
				w = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				P = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
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
				}, t ? r.a.createElement(O.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : r.a.createElement(O.a, {
					name: a,
					className: N.a.Icon
				})), r.a.createElement("span", {
					className: N.a.CardTitle
				}, o)))
			}, F = Object(a.c)({
				isTooltipOpen: e => Object(I.a)(e) === p.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: P.c
			});
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(k.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => r.a.createElement(_.a, {
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
						onTopBarClicked: c,
						progressModuleRecords: l,
						subredditId: m,
						subredditName: u
					} = this.props, h = l && l[m];
					if (!h) return r.a.createElement(x.a, {
						className: N.a.ThemedWidget,
						contentOnly: !0,
						headerButton: r.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, r.a.createElement(j.a, {
							className: N.a.ChevronIcon
						})),
						title: r.a.createElement("div", {
							className: N.a.ModuleTitle
						}, r.a.createElement(E.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						f = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
							[N.a.completed]: g,
							[N.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: r.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, r.a.createElement(j.a, {
							className: N.a.ChevronIcon
						})),
						id: p.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: r.a.createElement("div", {
							className: N.a.ModuleTitle
						}, r.a.createElement(E.a, {
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
							[N.a.darkFont]: f
						})
					}, T._("tasks completed", null, {
						hk: "DxeNq"
					}))), f && r.a.createElement("div", {
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
			const B = Object(o.b)(F, (e, t) => ({
				onCompleteModule: () => e(Object(y.c)(t.subredditId, w.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(f.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(u.h)({
					tooltipId: p.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = B(Object(g.c)(A))
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
				return It
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
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				_ = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				w = s("./src/reddit/actions/tooltip.ts"),
				P = s("./node_modules/lodash/find.js"),
				I = s.n(P),
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
			class A extends i.a.Component {
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
			var B = s("./src/reddit/models/Media/index.ts"),
				R = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/selectors/activeModalId.ts"),
				W = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/postCreations.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/showPromotedCTA.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				J = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				Q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
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
				de = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ce = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				le = s("./src/reddit/components/ModModeReports/index.tsx"),
				me = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ue = s("./src/reddit/components/NotificationButton/index.tsx"),
				pe = s("./src/reddit/components/PostContainer/index.tsx"),
				be = s("./src/higherOrderComponents/makeAsync.tsx"),
				he = s("./src/lib/loadWithRetries/index.ts"),
				ge = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const xe = Object(be.a)({
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
			var fe = e => i.a.createElement(xe, e),
				ve = s("./src/reddit/components/PostList/index.tsx"),
				_e = s("./src/reddit/components/PostMedia/index.tsx"),
				ye = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ce = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Oe = s("./src/reddit/components/PostTitle/index.tsx"),
				Ee = s("./src/reddit/components/PostTopLine/index.tsx"),
				je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ke = s("./src/reddit/components/SourceLink/index.tsx"),
				we = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Pe = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				Ie = s("./src/reddit/constants/componentSizes.ts"),
				Se = s("./src/reddit/constants/componentTestIds.ts"),
				Ne = s("./src/reddit/constants/postLayout.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Le = s("./src/reddit/helpers/postEvent.ts"),
				Fe = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Ae = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Be = s("./src/reddit/selectors/postFlair.ts"),
				Re = s("./src/reddit/models/Audio/index.ts"),
				Me = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				De = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				We = s("./src/reddit/constants/experiments.ts"),
				Ue = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ze = s("./src/reddit/selectors/experiments/presence.ts");
			const He = e => {
					return Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: We.jg
					}) === We.Kd
				},
				Ve = e => {
					if (Object(ze.a)(e)) return !1;
					return Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: We.ig
					}) === We.Kd
				},
				qe = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(V.G)(e, {
						postId: s
					});
					return !(Object(ze.a)(e) || !n || n.isSponsored) && Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: We.hg
					}) === We.Kd
				};
			var Ke = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ye = s("./src/reddit/constants/colors.ts"),
				Je = s("./src/reddit/icons/fonts/index.tsx"),
				Qe = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ze = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Xe = s.n(Ze);
			const $e = i.a.createElement(Je.a, {
				className: Xe.a.BlockIcon,
				name: "block"
			});
			var et = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Qe.a, {
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
				} = e, o = t ? Object(tt.e)(n, s, r) : Object(tt.f)(n, r), a = t ? Object(tt.c)(n) : Object(tt.d)(n, r), d = t ? Ye.a.warning : Ye.a.dayModeActionIcon, c = Object(tt.a)(n);
				return i.a.createElement(Qe.a, {
					className: nt.a.BannerBase,
					color: d,
					icon: c,
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
				dt = s("./src/reddit/actions/modal.ts"),
				ct = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				lt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				mt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ut = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				pt = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				bt = s.n(pt);
			const ht = i.a.createElement(Je.a, {
				className: bt.a.RemoveIcon,
				name: "delete_fill"
			});
			var gt = () => i.a.createElement(Qe.a, {
					className: bt.a.bannerBase,
					color: Ye.a.dayModeActionIcon,
					icon: ht,
					title: Ge.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				xt = s("./src/reddit/components/PostContent/index.m.less"),
				ft = s.n(xt),
				vt = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = p.a.wrapped(Oe.c, "PostTitle", ft.a), Ct = p.a.wrapped(te.a, "ExpandoButton", ft.a), Ot = p.a.wrapped(A, "ClassicExpandoMotion", ft.a), Et = p.a.wrapped(ne.c, "FullWidthFlatlist", ft.a), jt = i.a.createElement("p", {
				className: ft.a.VideoProcessingStatus
			}, _t._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), kt = Object(Te.u)({
				isCommentsPage: Te.x,
				pageLayer: e => e
			}), wt = Object(a.b)(() => Object(l.c)({
				activeModalId: D.a,
				flairStyleTemplate: Te.W,
				currentUser: K.k,
				crosspost: V.d,
				hideNSFWPref: K.F,
				imageGalleryCurrentItem: V.i,
				isAdminOrMod: (e, t) => {
					const s = Object(V.V)(e, {
						postId: t.postId
					});
					return !!s && Object(U.c)(e, {
						subredditId: s.id
					})
				},
				isBlurredPreview: mt.b,
				isCurrentUserProfilePost: V.l,
				isExpanded: V.m,
				isFollowed: V.t,
				isFollowedExpired: V.o,
				showPromotedCTA: q.a,
				post: V.G,
				moderatorPermissions: z.m,
				modModeEnabled: Te.U,
				shouldTryToShowCrosspostModal: lt.e,
				showEditFlair: Be.a,
				subredditOrProfile: V.V,
				isEditing: H.M,
				userIsOp: K.Db,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: qe,
				isReadingIndicatorsReadTestEnabled: Ve,
				isReadingIndicatorsWriteTestEnabled: He,
				isTrueblockPCBlockeeEnabled: Ae.e,
				isTypingIndicatorsExperimentEnabled: Ke.b,
				isTypingIndicatorsReadTestEnabled: Ke.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(x.gb)(n)),
					onOpenReportsDropdown: t => e(Object(w.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === M.a.upvoted ? Object(x.kb)(n) : Object(x.w)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
					openPost: t => e(Object(x.L)(t)),
					onFollowPost: t => e(Object(x.jb)(n, t)),
					onFollowPostExpired: () => e(Object(x.Y)({
						id: n,
						expiresAt: 0
					}))
				}
			}), Pt = e => e.media && e.media.type === B.o.EMBED && e.media.provider === B.v.Imgur && e.media.height > 700, It = new h.a, St = "VISIBLE", Nt = "NOT_VISIBLE", Tt = e => It.publish(e ? St : Nt), Lt = {
				threshold: [.85, .001],
				rootMargin: `${1-Ie.f}px 0px 0px 0px`
			}, Ft = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Tt(!1), e <= .001 && Tt(!0)
				}
			}, At = Object(b.b)(e => ({
				renderingObjectInfo: e.post,
				pageLayer: e.pageLayer
			})), Bt = p.a.wrapped(d.a, "ThumbLink", ft.a), Rt = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: r,
					onFollowPostClick: o
				} = e;
				const a = t.source ? i.a.createElement(Q.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(Bt, {
					to: Object(O.b)(t.permalink)
				}, i.a.createElement(Q.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: ft.a.classicThumbnail
				}, n && i.a.createElement(ue.a, {
					className: ft.a.classicNotificationButton,
					isFilled: !!r,
					onClick: o,
					hasTooltip: !0,
					tooltipText: _t._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Mt = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(Ot, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(_e.a, {
						className: ft.a.ClassicPostMedia,
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
					isAdminOrMod: x,
					isBlurredPreview: O,
					isCommentCountAnimation: w,
					isCommentsPage: P,
					isCountAnimShadowTestEnabled: I,
					isCrosspostRecommendationsExperimentEnabled: S,
					isCurrentUserProfilePost: N,
					isEditing: T,
					isExpanded: L,
					isFollowed: F,
					isFollowedExpired: A,
					isModWithUserNotesPermissions: M,
					isOverlay: D,
					isReadingIndicatorsExperimentEnabled: U,
					isReadingIndicatorsReadTestEnabled: z,
					isReadingIndicatorsWriteTestEnabled: H,
					isTrueblockPCBlockeeEnabled: V,
					isTypingIndicatorsExperimentEnabled: q,
					isTypingIndicatorsReadTestEnabled: K,
					isVoteCountAnimation: Q,
					moderatorPermissions: te,
					modModeEnabled: ue,
					onFollowPost: be,
					onFollowPostExpired: he,
					onIgnoreReports: ge,
					onOpenReportsDropdown: xe,
					openPost: Ie,
					onVoteClick: Te,
					post: Be,
					scrollerItemRef: De,
					sendEvent: We,
					shouldTryToShowCrosspostModal: Ue,
					showEditFlair: ze,
					showPromotedCTA: He,
					subredditOrProfile: Ve,
					userIsOp: qe,
					pageLayer: Ke
				} = e, Ge = Object(we.b)(), Ye = Object(o.useRef)(null), [Je, Qe] = Object(o.useState)(Be.authorIsBlocked), Ze = Object(B.J)(Be), Xe = Object(a.e)(e => Object(Ae.a)(e)), $e = Object(a.e)(e => Object(W.a)(e, {
					post: Be
				})), tt = Object(c.a)(Be), st = U || q, nt = st || z || H || K, rt = !!(O && (null == Ve ? void 0 : Ve.isNSFW));
				Object(o.useEffect)(() => {
					A && he()
				}, []);
				const lt = Object(a.d)(),
					mt = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					if (S && Ue) return lt(Object(at.a)(Be)), mt.current = setTimeout(() => {
						lt(Object(dt.h)(ct.a)), lt(Object(at.b)())
					}, ct.b), () => {
						lt(Object(at.b)()), lt(Object(dt.g)(ct.a)), mt.current && clearTimeout(mt.current)
					}
				}, [lt, S, Be, Ue]), Object(Fe.a)(Ye, Ft, Lt);
				const pt = Be.isSponsored ? Object(ve.b)(Be.id, {
						fireAdPixelsOfType: d,
						openPost: Ie
					}) : r.a,
					bt = Object(C.a)(te),
					ht = Object(_.a)(te),
					xt = Object(y.a)(te),
					_t = bt || ht,
					Ot = ((e, t, s) => {
						const [n, r] = e ? [Object(v.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || r
					})(n, _t, Be),
					kt = !!Be.media && (Be.media.type === B.o.RTJSON || Be.media.type === B.o.TEXT),
					wt = qe && kt,
					It = Object(ce.a)(Be),
					St = Object(me.c)(Be);
				let Nt;
				const Tt = Object(vt.a)(),
					Bt = !(ue && bt),
					Dt = Object(ye.b)({
						hide: !st && Bt,
						editPost: !st && Bt,
						save: Bt,
						report: !st && Bt
					}),
					Wt = Be.removedByCategory === R.g.AuthorDeleted,
					Ut = n && (n.displayText === Be.author || n.username === Be.author),
					zt = !!Be.unrepliableReason,
					Ht = !Je && V && !Wt && !Pt(Be) && (Ut || x || !(Be.removedByCategory && Be.media && (Object(B.M)(Be.media) || Object(B.K)(Be.media) || Object(B.E)(Be.media)))),
					Vt = $e && Be.source;
				let qt;
				Be.media && Be.media.type !== B.o.TEXT && (qt = Be.media.richtextContent);
				const Kt = Object(m.t)(Be, h),
					{
						source: Gt
					} = Kt,
					Yt = Be.removedByCategory === R.g.Reddit && Object(g.e)(Be.created) > 24,
					Jt = Be.removedByCategory && Be.removedByCategory !== R.g.Reddit || Yt,
					Qt = !Jt && !Be.isArchived,
					Zt = Object(o.useCallback)(() => {
						be(F ? R.f.UNFOLLOWED : R.f.FOLLOWED), Ge(F ? Object(j.q)(Be.id) : Object(j.c)(Be.id))
					}, [be, Ge, F, Be.id]),
					Xt = i.a.createElement(i.a.Fragment, null, i.a.createElement(yt, {
						post: Be,
						innerRef: Ye,
						size: Oe.b.ExtraLarge,
						isOverlay: D,
						disableVisited: !0,
						isCommentsPage: !0
					}), i.a.createElement(J.a, {
						className: ft.a.AdSupplementaryText,
						post: Be,
						size: Oe.b.ExtraLarge
					})),
					$t = i.a.createElement(it.a, {
						post: Be,
						showViewCount: Ot
					}),
					es = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Ne.g.Classic : Object(Me.c)(n) ? Ne.g.Large : Object(Re.c)(n) ? Ne.g.Large : t ? Ne.g.Large : !n.media || Object(R.p)(n) || Pt(n) ? Ne.g.Medium : Ne.g.Large
					})(e),
					ts = Object(a.e)(ut.b),
					ss = Object(oe.b)(Be),
					ns = () => {
						const t = !(zt && Xe && Je),
							n = Object(B.I)(Be);
						return zt && n ? i.a.createElement(gt, null) : Xe && Je ? i.a.createElement(et, {
							onBannerClick: () => Qe(!1),
							isExpandable: Ze
						}) : Tt || !Be.source || es !== Ne.g.Medium || rt ? Ht && !T && es === Ne.g.Large ? i.a.createElement(_e.a, {
							className: Object(u.a)(ft.a.LargePostMedia, {
								[ft.a.isCommentsPage]: P
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: D,
							isOverlay: D,
							post: Be,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !D,
							showCentered: !0,
							showPromotedCTA: He,
							scrollerItemRef: De
						}) : t && es === Ne.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Ct, {
							crosspost: s || void 0,
							isExpanded: !!L,
							post: Be,
							useMediaIcons: !1
						}), Mt(e)) : null : i.a.createElement(ke.a, {
							post: Be,
							isCommentsPage: P,
							pageLayer: Ke
						})
					};
				if (es === Ne.g.Classic) {
					const t = !Tt && Object(f.a)(Be, Je);
					Nt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Ce.a, {
						model: Be,
						handleVote: Te,
						isCountAnimShadowTestEnabled: I,
						isOverlay: D,
						isVoteCountAnimation: Q,
						postId: Be.id
					}), i.a.createElement("div", {
						className: ft.a.mainBody
					}, i.a.createElement("div", {
						className: ft.a.content
					}, i.a.createElement(Ee.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: P,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!M,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Be,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Be.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Qt && !t,
						isFollowed: F,
						onFollowPostClick: Zt
					}), Xt, i.a.createElement(se.a, {
						className: P ? ft.a.leftPadding : void 0,
						post: Be,
						sendEvent: We
					}), Vt && qt && i.a.createElement(re.a, {
						content: qt,
						rtJsonElementProps: At(e)
					}), ue && bt && St && i.a.createElement(le.a, {
						onIgnoreReports: ge,
						reportable: Be
					}), i.a.createElement(ie.d, null), i.a.createElement("div", {
						className: ft.a.FlatlistContainer
					}, ns(), i.a.createElement(Et, {
						currentUser: n,
						hasModFlairPerms: ht,
						hasModFullPerms: xt,
						hasModPostPerms: bt,
						isOverlay: D,
						onIgnoreReports: ge,
						onOpenReportsDropdown: xe,
						modModeEnabled: ue,
						post: Be,
						showUpvotePercent: !0,
						showViewCount: Ot,
						useFlatlistBreakpoints: Dt,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: I
					}))), t && i.a.createElement(Rt, {
						post: Be,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Qt,
						isFollowed: F,
						onFollowPostClick: Zt
					})))
				} else if (es === Ne.g.Medium) {
					const t = !Tt && Object(f.a)(Be, Je);
					Nt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Ce.a, {
						model: Be,
						handleVote: Te,
						isCountAnimShadowTestEnabled: I,
						isOverlay: D,
						shouldShowUpvoteRatioOnHover: st,
						isVoteCountAnimation: Q,
						postId: Be.id
					}), i.a.createElement("div", {
						className: ft.a.mainBody
					}, i.a.createElement("div", {
						className: ft.a.content
					}, i.a.createElement(Ee.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: P,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!M,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Be,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Be.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Qt && !t,
						isFollowed: F,
						onFollowPostClick: Zt
					}), Xt, ns(), Object(B.O)(Be) && jt, i.a.createElement(se.a, {
						className: P ? ft.a.leftPadding : void 0,
						post: Be,
						sendEvent: We
					}), Ve && Jt && i.a.createElement(ot, {
						isAdminOrMod: x,
						post: Be,
						subredditOrProfile: Ve
					}), ue && bt && St && i.a.createElement(le.a, {
						onIgnoreReports: ge,
						reportable: Be
					})), t && !tt && i.a.createElement(ae.a, {
						post: Be,
						forceShowNSFW: !0,
						hasModPostPerms: _t,
						isCommentsPage: P,
						isOverlay: !0,
						modModeEnabled: ue,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Qt,
						isFollowed: F,
						onFollowPostClick: Zt
					})), Vt && qt && !Jt && i.a.createElement(re.a, {
						content: qt,
						rtJsonElementProps: At(e)
					}), i.a.createElement(ie.d, null), !!ts && i.a.createElement(k.a, {
						itemIds: ss,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Be,
						size: "small"
					}), i.a.createElement("div", {
						className: ft.a.controlsContainer
					}, i.a.createElement(ne.c, {
						currentUser: n,
						hasModFlairPerms: ht,
						hasModFullPerms: xt,
						hasModPostPerms: bt,
						isOverlay: D,
						modModeEnabled: ue,
						onIgnoreReports: ge,
						onOpenReportsDropdown: xe,
						post: Be,
						showEditPost: wt,
						showEditFlair: ze,
						tooltipType: D ? je.c.Lightbox : void 0,
						useFlatlistBreakpoints: Dt,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: I,
						shouldHideItems: st
					}), nt && i.a.createElement(Pe.a, {
						isReadingIndicatorsExperiment: U,
						isReadingIndicatorsReadLoadTest: z,
						isReadingIndicatorsWriteLoadTest: H,
						isTypingIndicatorsExperiment: q,
						isTypingIndicatorsReadLoadTest: K,
						postId: Be.id
					}), !st && $t))
				} else es === Ne.g.Large && (Nt = i.a.createElement("div", {
					"data-test-id": Se.e
				}, i.a.createElement(Ce.a, {
					model: Be,
					handleVote: Te,
					isCountAnimShadowTestEnabled: I,
					isOverlay: D,
					shouldShowUpvoteRatioOnHover: st,
					isVoteCountAnimation: Q,
					postId: Be.id
				}), Object(Me.c)(Be) && i.a.createElement(i.a.Fragment, null, i.a.createElement($.a, {
					post: Be
				}), i.a.createElement(X.a, {
					post: Be
				})), !Object(Me.c)(Be) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: P,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: !!M,
					isOverlay: !!D,
					isTopicPage: !1,
					post: Be,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!D && !Be.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ve,
					shouldShowFollowButton: Qt,
					isFollowed: F,
					onFollowPostClick: Zt
				}), Xt, ((e, t, s, n) => !Tt && e.source && !t && (s || n))(Be, s, D, P) && !rt && i.a.createElement(ke.a, {
					post: Be,
					isCommentsPage: P,
					pageLayer: Ke
				})), i.a.createElement(se.a, {
					className: P ? ft.a.leftPadding : void 0,
					post: Be,
					sendEvent: We
				}), Ve && Jt && i.a.createElement(ot, {
					isAdminOrMod: x,
					post: Be,
					subredditOrProfile: Ve
				}), T && i.a.createElement(fe, {
					post: Be
				}), ns(), He && Gt && Gt.url && !Be.isSurveyAd && i.a.createElement(G.a, {
					className: ft.a.adLinkWrapper
				}, i.a.createElement(Y.a, {
					post: Be,
					adLinkContent: Kt
				})), ue && bt && It && i.a.createElement("div", {
					className: ft.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					thing: Be
				})), ue && bt && St && i.a.createElement("div", {
					className: ft.a.modModeBannerWrapper
				}, i.a.createElement(le.a, {
					onIgnoreReports: ge,
					reportable: Be
				})), Object(Re.c)(Be) && i.a.createElement(Z.a, {
					post: Be
				}), i.a.createElement(ie.d, null), !!ts && i.a.createElement(k.a, {
					itemIds: ss,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Be,
					size: "small"
				}), i.a.createElement("div", {
					className: ft.a.controlsContainer
				}, i.a.createElement(ne.c, {
					currentUser: n,
					forceOpenInNewTab: p,
					hasModFlairPerms: ht,
					hasModFullPerms: xt,
					hasModPostPerms: bt,
					isOverlay: D,
					modModeEnabled: ue,
					onIgnoreReports: ge,
					onOpenReportsDropdown: xe,
					post: Be,
					showEditPost: wt,
					showEditFlair: ze,
					tooltipType: D ? je.c.Lightbox : void 0,
					useFlatlistBreakpoints: Dt,
					isCommentCountAnimation: w,
					isCountAnimShadowTestEnabled: I,
					shouldHideItems: st
				}), nt && i.a.createElement(Pe.a, {
					isReadingIndicatorsExperiment: U,
					isReadingIndicatorsReadLoadTest: z,
					isReadingIndicatorsWriteLoadTest: H,
					isTypingIndicatorsExperiment: q,
					isTypingIndicatorsReadLoadTest: K,
					postId: Be.id
				}), !st && $t)));
				const rs = Object(o.useCallback)((e, t) => Object(j.k)(e, t), []);
				return i.a.createElement(pe.a, {
					className: Object(u.a)(t, ft.a.postContainer, {
						[ft.a.hasEventMeta]: Object(Le.a)(Be)
					}),
					isOverlay: D,
					post: Be,
					eventFactory: D ? E.b : rs,
					onClick: pt
				}, i.a.createElement(ee.a, {
					post: Be
				}), Nt)
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
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostMeta/index.m.less"),
				C = s.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: y,
					isOverlay: O,
					isTopicPage: E,
					post: j,
					shouldShowSubscribeButton: k,
					subredditOrProfile: w,
					tooltipType: P
				} = e, I = !!E, S = Object(v.a)(), N = Object(o.e)(e => !!w && Object(i.i)(e, w.id));
				return r.a.createElement("div", {
					className: C.a.metaContainer
				}, !n && !j.isSponsored && w && r.a.createElement(d.a, {
					postId: j.id,
					subredditName: w.name
				}, r.a.createElement(p.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: S
					}
				}, w.displayText)), w && w.isQuarantined && r.a.createElement(u.a, null), !n && !j.isSponsored && w && k && !y && r.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(f.k)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(_.h)(w) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: j.id,
					size: g.d.XXS,
					small: !0
				}), !n && !j.isSponsored && r.a.createElement(x.b, null), !n && !j.isSponsored && r.a.createElement(c.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), r.a.createElement(m.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: P,
					isModWithUserNotesPermissions: N
				}), r.a.createElement(l.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!n,
					post: j,
					tooltipType: P
				}), !I && r.a.createElement(a.a, {
					hideCta: s,
					thing: j,
					tooltipType: O ? m.c.Lightbox : void 0
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
					isOverlay: x,
					isVoteCountAnimation: f,
					postId: v,
					shouldShowUpvoteRatioOnHover: _
				} = e, y = `upvote-button-${t.id}${x?"-overlay":""}`;
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
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: _
					}),
					shouldShowUpvoteRatioOnHover: _
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
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostTopLine/index.m.less"),
				j = s.n(E);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: E,
					hostPostData: k,
					iconClassName: w,
					inSubredditOrProfile: P,
					isCommentsPage: I,
					isCompactPinnedPost: S,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: T,
					isOverlay: L,
					isTopicPage: F,
					listingKey: A,
					post: B,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: M,
					showSubreddit: D,
					showSubredditIcon: W,
					subredditOrProfile: U,
					isFollowed: z,
					shouldShowFollowButton: H,
					onFollowPostClick: V
				} = e;
				const q = F,
					K = U && Object(C.h)(U),
					G = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(O.Gb)(e, B.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(a.a)(j.a.container, t)
				}, D && U && o.a.createElement("div", {
					className: j.a.subredditIconWrapper
				}, o.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, W && o.a.createElement(p.b, {
					className: Object(a.a)(j.a.subredditIcon, w),
					shouldHideNsfwIcon: E,
					subredditOrProfile: U
				}))), o.a.createElement("div", {
					className: j.a.everythingElseWrapper
				}, D && o.a.createElement(c.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), o.a.createElement(u.d, {
					className: j.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: L ? u.c.Lightbox : void 0,
					post: B,
					showSub: D,
					subredditOrProfile: U
				}), o.a.createElement(m.a, {
					className: j.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: S,
					post: B,
					tooltipType: L ? u.c.Lightbox : void 0
				}), !q && o.a.createElement(d.a, {
					isPostDetail: I,
					thing: B,
					tooltipType: L ? u.c.Lightbox : void 0
				})), U && G && D && R && !N && o.a.createElement(h.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(B.id, e ? "unsubscribe" : "subscribe", "post", A, k),
					identifier: {
						name: U.name,
						type: K ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: B.id,
					size: x.d.XS
				}), M && o.a.createElement(f.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(y.D)(B),
					source: B.source
				}, o.a.createElement(_.a, {
					className: j.a.outboundLinkIcon
				})), H && G && o.a.createElement(l.a, {
					isFilled: !!z,
					onClick: V,
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
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, r = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				m = s.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(n || (n = {}));
			const u = e => {
				let {
					space: t
				} = e;
				const s = Object(d.e)(c.db),
					i = t === n.MODAL;
				return a.a.createElement("div", {
					className: Object(o.a)(m.a.background, {
						[m.a.isNightmodeOn]: s,
						[m.a.isModal]: i
					})
				}, a.a.createElement("div", {
					className: m.a.colorBlockCorner
				}), a.a.createElement("div", {
					className: m.a.colorBlockThrough
				}), a.a.createElement("div", {
					className: m.a.circleStriped,
					style: {
						backgroundImage: s ? `url(${r.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${r.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), a.a.createElement("div", {
					className: m.a.circleOrangeHollow
				}), a.a.createElement("div", {
					className: m.a.circleDotted,
					style: {
						backgroundImage: `url(${r.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), a.a.createElement("div", {
					className: m.a.circleGreenHollow
				}), a.a.createElement("div", {
					className: m.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = s.n(d);
			const l = Object(r.forwardRef)((function(e, t) {
					let {
						className: s,
						progress: n
					} = e;
					const r = 100 * n;
					return o.a.createElement("div", {
						className: Object(i.a)(c.a.barRow, s),
						ref: t
					}, o.a.createElement("div", {
						className: c.a.track
					}), o.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${r}%`
						}
					}, o.a.createElement(a.a, {
						className: Object(i.a)(c.a.icon, {
							[c.a.empty]: 0 === n,
							[c.a.full]: n >= 1
						})
					})))
				})),
				m = e => {
					let {
						className: t,
						progress: s
					} = e;
					const [i, a] = Object(r.useState)(!1), d = i ? s : 0;
					return o.a.createElement(n.a, {
						onChange: e => {
							i || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, o.a.createElement(l, {
						className: t,
						progress: d
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				a = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				u = s.n(m);
			const p = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(o.a)(u.a.userIconContainer, e.iconClassName)
			}, r.a.createElement(a.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: u.a.userIcon,
				isNSFW: e.isNsfw
			})), r.a.createElement("h4", {
				className: Object(o.a)(u.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const s = Object(l.a)(),
					{
						className: n,
						supporter: a
					} = e,
					{
						score: m,
						supporterInfo: b
					} = a,
					h = Object(i.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: m
					}),
					g = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					x = Object(i.c)(b),
					f = Object(i.a)(m),
					v = r.a.createElement(p, {
						userName: h,
						isNsfw: g,
						iconUrl: x
					});
				return r.a.createElement("div", {
					className: Object(o.a)(n, u.a.container)
				}, b ? r.a.createElement(d.default, {
					className: u.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && s(Object(c.o)(b.id, b.displayName))
					}
				}, v) : r.a.createElement("div", {
					className: u.a.user
				}, v), r.a.createElement("div", {
					className: u.a.counter
				}, r.a.createElement(f, {
					className: u.a.powerupIcon
				}), m))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return h
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = s.n(d),
				l = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const g = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function x(e, t) {
				const s = t || u;
				return e.slice(0, s).map(g)
			}
			const f = () => ({
					width: p,
					height: Object(i.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: x(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: s
					} = this.props, r = this.state.items.length < t.length;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, o.a.createElement(i.TransitionMotion, {
						willLeave: f,
						willEnter: v,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(i.spring)(p),
								height: Object(i.spring)(b),
								motionProgress: Object(i.spring)(1)
							}
						}))
					}, e => o.a.createElement(o.a.Fragment, null, e.map(e => o.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, o.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, o.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), r && o.a.createElement(a.t, {
						priority: a.c.Secondary,
						className: c.a.expandButton,
						onClick: s,
						isFullWidth: !0
					}, m._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: x(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = o.a.memo(_)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				i = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				a = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 3;

			function l(e) {
				return e >= c ? a.a : e >= d ? i.a : o.a
			}

			function m(e) {
				var t;
				const s = !e,
					r = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return s ? r : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const u = e => {
				let {
					displayName: t,
					score: s
				} = e;
				return t || r.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [r.fbt._plural(s)], {
					hk: "8kyEI"
				}).toString()
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					className: t,
					onClick: s,
					disabled: n
				} = e;
				return Object(i.e)(l.q) ? o.a.createElement(c.t, {
					priority: c.c.Primary,
					className: t,
					onClick: s,
					isFullWidth: !0,
					disabled: n
				}, m._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				})) : null
			};
			var p = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				b = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				h = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/helpers/trackers/powerups.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				O = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				E = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				const {
					className: t,
					powerups: s
				} = e, {
					tier: n,
					count: r,
					tiersInfo: i
				} = s, a = (i[n] || i[n - 1]).powerupsCost;
				if (!a) return null;
				const d = Math.min(a, r) / a;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement("div", {
					className: E.a.titleRow
				}, o.a.createElement("span", null, j._("Powerups", null, {
					hk: "DrcXp"
				})), o.a.createElement("span", null, r < a ? `${r}/${a}` : r)), o.a.createElement(C.b, {
					progress: d
				}))
			};
			var w = s("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				P = s("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				I = s("./src/reddit/components/PowerupsSidebar/index.m.less"),
				S = s.n(I);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t,
					subredditId: s
				} = e;
				const c = Object(i.d)(),
					m = Object(f.a)(),
					C = Object(i.e)(y.k),
					O = Object(i.e)(e => Object(l.i)(e, {
						subredditId: s
					})),
					E = Object(i.e)(e => Object(_.W)(e, {
						subredditId: s
					})),
					j = Object(i.e)(e => Object(l.l)(e, {
						subredditId: s
					})),
					I = Object(i.e)(e => !!Object(l.j)(e, {
						subredditId: s
					})),
					T = Object(i.e)(P.b) && Object(P.c)(s),
					L = Object(i.e)(v.i);
				Object(r.useEffect)(() => {
					O && c(Object(a.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(s))
				}, [O, s, c]);
				if (!O || 1 === O.tiersInfo.length || !E || T || L) return null;
				return o.a.createElement(h.a, null, o.a.createElement(g.a, {
					className: t,
					title: N._("Powerups", null, {
						hk: "DrcXp"
					})
				}, o.a.createElement("div", {
					className: S.a.container
				}, o.a.createElement("div", {
					className: S.a.titleGroup
				}, o.a.createElement("div", {
					className: S.a.powerupsIcon
				}, o.a.createElement("img", {
					className: S.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers.png`
				})), o.a.createElement("h2", {
					className: S.a.title
				}, (() => I ? N._("Powerups are unlocked in {communityName}", [N._param("communityName", E.displayText)], {
					hk: "3xCZkG"
				}) : N._("Powerup to unlock perks for {communityName}", [N._param("communityName", E.displayText)], {
					hk: "2OPLXh"
				}))()), o.a.createElement(u, {
					className: S.a.button,
					onClick: () => {
						m(Object(x.k)()), c(Object(d.e)("powerups_sidebar"))
					}
				}), o.a.createElement(p.a, {
					space: p.b.SIDEBAR
				})), o.a.createElement("div", {
					className: S.a.group
				}, o.a.createElement("h3", {
					className: S.a.subTitle
				}, N._("Community Heroes", null, {
					hk: "2ssat0"
				})), o.a.createElement(k, {
					className: S.a.progress,
					powerups: O
				}), !!(null == j ? void 0 : j.length) && o.a.createElement(w.a, {
					supporters: j,
					className: S.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						m(Object(x.m)()), c(Object(d.f)(s))
					}
				}), !(null == j ? void 0 : j.length) && o.a.createElement("div", {
					className: S.a.becomeFirstHero
				}, o.a.createElement(b.a, {
					displayName: N._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == C ? void 0 : C.displayName,
					isNsfw: !!(null == C ? void 0 : C.isNSFW),
					iconUrl: null == C ? void 0 : C.accountIcon,
					textClassName: S.a.becomeFirstHeroLabel
				}))))))
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
				x = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/page.ts"),
				_ = s("./src/reddit/constants/postLayout.ts"),
				y = s("./src/reddit/helpers/postCollection.ts"),
				C = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/screenview.ts"),
				j = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				w = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				P = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				N = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/lib/classNames/index.ts"),
				A = s("./src/reddit/constants/listings.ts"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/helpers/name/index.ts"),
				M = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				D = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				W = s.n(D);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var z = Object(m.a)(e => {
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
					return r ? (c = A.c[A.b.Popular], d = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(R.d)(o.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", o.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(B.default, {
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
					}, d, a.a.createElement(M.a, {
						className: W.a.arrow
					})))
				}),
				H = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				V = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				q = s.n(V);
			const K = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, k.a, w.b, (e, t, s) => !((!t || s) && e)),
				G = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(y.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.P, L.Q, j.d, K, (e, t, s, n, r, o) => !t && !s && !n && !r && !e && o),
				Y = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, P.b, I.c, T.Z, T.jb, (e, t, s, n, r) => {
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
							shouldShowLinkedPosts: !Object(f.rg)(s) && !Object(I.a)(s),
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
				J = Object(c.c)({
					isD2xPdpSideRailRecsEnabled: P.b,
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: S.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: N.b
				}),
				Q = Object(d.b)(J, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.Z.HOT,
						subredditName: t
					}))
				}));
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(x.e) : null, this.onViewed = (e, t) => Object(E.f)({
						key: this.listingKey(),
						sort: l.Z.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.mc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(O.c)("recommended_footer"))
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
					return s || e ? t : r && n && n.id ? Object(H.a)(n.id) : Object(p.a)(o.name, l.Z.TOP, {
						t: l.mc.WEEK
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
					if (c && !Object(f.rg)(c) && !Object(I.a)(c) && !i) return a.a.createElement("div", {
						className: q.a.smallBanner
					});
					const {
						name: l
					} = r, m = Object(C.a)(o.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(I.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === f.Le.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: q.a.smallBanner,
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
						className: q.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: q.a.postList,
						disablePlaceholder: !0,
						forcedLayout: _.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: d,
						isTruncated: !0,
						listingBelowVariant: c,
						listingKey: this.listingKey(),
						listingName: v.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: q.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						skipSubredditPosts: t ? 15 : 0,
						shouldHideFlair: !0
					}), a.a.createElement(z, {
						className: q.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: l,
						shouldShowNsfwListingBelow: r,
						subredditOrProfile: i
					}))
				}
			}
			t.a = Q(Object(m.a)(Object(g.c)(Z)))
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
				x = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = s.n(f),
				_ = s("./src/lib/lessComponent.tsx");
			const y = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				C = Object(c.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(s, r, n)]
					}
				}),
				O = Object(d.b)(C),
				E = _.a.wrapped(b.a, "ThemedWidget", v.a),
				j = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(x.F)(e.media) && e.media.content)),
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
						return a.a.createElement(E, {
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

			function P(e) {
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
				if (!c && j(s)) {
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
			t.a = O(P)
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
					}) && !Object(d.E)(e) && !Object(a.a)(e)
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
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				f = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = (e, t, s) => Object(p.a)(e, {
					[f.a.mActive]: t
				}, {
					[f.a.topBannerVariant]: s
				}),
				y = e => {
					let {
						children: t,
						isActive: s,
						isTopBannerVariant: n,
						...o
					} = e;
					return r.a.createElement("div", v({
						className: _(f.a.subNavTitle, s, n)
					}, o), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: f.a.navDropdownIcon
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
					const d = _(f.a.navLink, n, i);
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
				O = e => {
					let {
						className: t,
						isActive: s,
						...n
					} = e;
					return r.a.createElement(u.a, v({
						className: Object(p.a)(_(f.a.navLink, s), t)
					}, n))
				},
				E = e => {
					let {
						className: t,
						href: s,
						isActive: n,
						...o
					} = e;
					return s ? r.a.createElement(b.b, v({
						className: _(f.a.subNavLink, n),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: s
					}, o)) : r.a.createElement("a", v({
						className: _(f.a.subNavLink, n)
					}, o))
				},
				j = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement("div", v({
						className: Object(p.a)(f.a.subNavContainer, t)
					}, s))
				},
				k = e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return r.a.createElement("div", v({
						className: Object(p.a)(f.a.subNavList, t, {
							[f.a.mIsOpen]: s
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
					return r.a.createElement(j, {
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
			var P = w;
			const I = e => {
				const t = e.url && Object(m.h)(m.f, e.url);
				return t ? t.url : e.url
			};
			var S = e => e.menuItem.url ? r.a.createElement(C, {
					href: I(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(P, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(E, {
					key: `${e.text}-${I(e)}`,
					role: "listitem",
					href: I(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				N = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = Object(i.c)({
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
					return Object(N.W)(e, {
						subredditId: s
					})
				}
			});
			var B = Object(o.b)(A, (e, t) => ({
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
					return t ? r.a.createElement(O, {
						className: f.a.metaNavLink,
						to: t.url,
						isActive: s,
						onClick: e => {
							Object(d.H)(o) && !Object(d.P)(o) && e.preventDefault(), n()
						}
					}, F._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				R = s("./src/reddit/actions/economics/predictions/index.ts"),
				M = s("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				D = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				W = s("./src/reddit/helpers/trackers/predictions.ts"),
				U = s("./src/reddit/hooks/useTracking.ts"),
				z = s("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(o.d)(),
					i = Object(L.a)(),
					a = Object(U.a)(),
					d = Object(D.Q)(i),
					[c, l] = Object(n.useState)(!1),
					m = Object(o.e)(e => Object(N.W)(e, {
						subredditId: t
					})),
					u = Object(o.e)(e => Object(N.Q)(e, {
						subredditId: t
					})),
					p = Object(o.e)(e => Object(z.d)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(z.e)(e, {
						subredditId: t
					}));
				Object(M.a)(t);
				return Object(n.useEffect)(() => {
					!u || c || p || d || (s(Object(R.m)(m.name)), l(!0))
				}, [u, c, p, d, s, m.name]), u && p ? r.a.createElement(O, {
					className: f.a.predictionsFilter,
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
					className: f.a.liveIcon
				}, H._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var q = s("./src/lib/constants/index.ts");
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const G = Object(d.u)(),
				Y = [q.Qb.SUBREDDIT, q.Qb.COMMENTS, q.Qb.COLLECTION_COMMENTS],
				J = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Y.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.P)(t.pageLayer)
				});
			var Q = G(Object(o.b)(J, (e, t) => ({
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
					return r.a.createElement(C, {
						to: t,
						isActive: d,
						isTopBannerVariant: i,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, K._("Posts", null, {
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
					className: Object(p.a)(f.a.outerContainer, t),
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
					className: f.a.innerContainer,
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
				} = e, o = !!n && !!n.meta && n.meta.name === q.Qb.SUBREDDIT_WIKI, i = `wiki/${ie.i}`, a = t.endsWith("/") ? t + i : `${t}/${i}`;
				return r.a.createElement(C, {
					isActive: o,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", B),
				me = Object(d.u)(),
				ue = Object(i.c)({
					layout: d.S,
					widget: l.f
				}),
				pe = Object(o.b)(ue);
			t.a = me(pe(Object(a.c)(e => r.a.createElement(oe, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(le, {
				subredditId: e.subredditId
			}), r.a.createElement(V, {
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
				return P
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
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = s("./src/reddit/selectors/telemetry.ts");
			const _ = "nsfw_dialog";
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
				C = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				O = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				E = s.n(O);
			const j = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				k = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(C.f),
						m = Object(o.useCallback)(() => {
							n === C.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? i.a.createElement("div", {
							className: E.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: E.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === C.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(f.c)(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(E.a.mainCta)
					}, i.a.createElement(y, null), b, i.a.createElement("div", {
						className: E.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: E.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: E.a.buttonContainer
					}, i.a.createElement(x.j, {
						className: Object(l.a)(E.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(v.o)(e),
								source: "xpromo",
								action: "click",
								noun: _
							}))()), m(), Object(f.b)(f.a.Login), t(Object(u.openLoginModal)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(x.j, {
						className: E.a.cancel,
						onClick: () => {
							Object(c.b)(), s((() => e => ({
								...Object(v.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: _
							}))()), Object(f.b)(f.a.Dismiss), t(Object(d.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				w = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: E.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: E.a.qrCodeInner
					}, i.a.createElement("img", {
						className: E.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: E.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: E.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: E.a.sneakySnoo,
						src: t
					})))
				}),
				P = e => {
					const t = Object(h.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(v.o)(e),
							source: "xpromo",
							action: "view",
							noun: _
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(a.e)(C.g), r = Object(a.e)(C.h), o = Object(a.e)(C.f), d = o === C.a.Blurred ? b.a.White : o === C.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: E.a.container
					}, i.a.createElement(k, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(E.a.footerWrapper, {
							[E.a.mIsModal]: o === C.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: d
					})), i.a.createElement(w, {
						qrCodeAsset: (() => n === g.Sc.Enabled || r === g.sb.BlurredPreview || r === g.sb.NoPreview ? j.d2x_nsfw_signup_blocking_de_v1 : j.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
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
				return P
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
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				E = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => o.a.createElement(b.a, {
					className: Object(c.a)(E.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: E.a.container
				}, e.isLoading ? o.a.createElement(x.a, {
					className: E.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: E.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(P, j({
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
					className: E.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(d.c)({
					hideNSFWPref: y.F,
					nightmode: y.db
				}),
				P = Object(i.b)(w)(e => o.a.createElement("div", {
					className: Object(c.a)(E.a.communityItemContainer, {
						[E.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(v.a, {
					className: E.a.communityItemExpandCenter,
					widthRight: h.s
				}, o.a.createElement("div", {
					className: E.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: E.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(f.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(E.a.defaultCommunityIcon, {
						[E.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: E.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: E.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(C.b)(e.name, e.type),
					to: Object(C.a)(e.name, e.type)
				}, Object(C.b)(e.name, e.type)), o.a.createElement("div", {
					className: E.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: E.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && o.a.createElement(l.b, {
					className: E.a.nsfwFlair,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(x.a, {
					className: Object(c.a)(E.a.communityCta, E.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(g.t, {
					className: E.a.communityCta,
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
					className: E.a.communityDescription
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
				x = e => ({
					...h.o(e),
					source: "post",
					noun: "upvote",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				f = e => ({
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
				_ = s("./src/reddit/selectors/posts.ts"),
				y = s("./node_modules/lodash/once.js"),
				C = s.n(y),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/isUrl/index.ts"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/lib/timeAgo/index.ts"),
				P = s("./src/lib/truncateText/index.ts"),
				I = s("./src/reddit/components/Flair/index.tsx"),
				S = s("./src/reddit/components/SubredditIcon/index.tsx"),
				N = s("./src/reddit/constants/thumbnails.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				L = s("./src/reddit/helpers/trackers/post.ts"),
				F = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				A = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				B = s("./src/reddit/models/Flair/index.ts"),
				R = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				M = s("./src/reddit/actions/linkedPosts/index.ts"),
				D = s("./src/reddit/constants/experiments.ts"),
				W = s("./src/reddit/components/Widgets/Recommendations/index.m.less"),
				U = s.n(W);
			const z = 2e3;
			class H {
				constructor(e, t) {
					this.intersectingRatio = -1, this.consumed = !1, this.maybeConsume = () => {
						this.clearConsumeTimeout(), this.isConsuming() && (this.onConsume(), this.consumed = !0, this.disconnect())
					}, this.handleIntersectionEvent = e => {
						this.intersectingRatio = e[0].intersectionRatio, this.isViewing() && this.onView(), !this.isConsuming() || this.consumed || this.consumeTimeoutId || (this.consumeTimeoutId = setTimeout(this.maybeConsume, z))
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
			var V = Object(p.c)(e => {
				const t = Object(l.d)(),
					{
						post: s,
						sendEvent: n
					} = e,
					r = Object(d.useRef)(null),
					o = Object(d.useRef)(null),
					i = Object(l.e)(e => e.subreddits.models[s.belongsTo.id]),
					a = Object(l.e)(R.a) === D.Uc.LargeImagePreview;
				Object(d.useEffect)(() => {
					var e;
					null === (e = o.current) || void 0 === e || e.disconnect(), o.current = new H(() => {
						n(Object(L.g)(s.id))
					}, () => {
						n(Object(L.d)(s.id, z, !0))
					}), o.current.connect(r.current)
				}, [s, n]);
				const m = Object(d.useCallback)(() => {
						const e = Object(u.a)(s.id);
						t(Object(M.c)({
							key: e
						})), window.scroll(0, 0), n(Object(L.f)(s.id))
					}, [s, n, t]),
					p = Object(d.useCallback)(() => {
						n(x)
					}, [n]),
					b = Object(d.useCallback)(() => {
						n(f)
					}, [n]),
					{
						created: h,
						numComments: g,
						thumbnail: v,
						upvoteRatio: _,
						permalink: y,
						title: C
					} = s,
					W = _ ? `${Math.round(100*_)}%` : "",
					V = s.flair.length ? s.flair.findIndex(e => e.type === B.f.Nsfw) : -1;
				return c.a.createElement("li", {
					className: U.a.postPreview,
					ref: r,
					onClick: m
				}, c.a.createElement(O.a, {
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
				}, i && `r/${i.name}`), V >= 0 && c.a.createElement(I.b, {
					flair: s.flair[V]
				}))), v && Object(j.a)(v.url) && c.a.createElement("div", {
					className: U.a.verticalPostPreviewThumbnail
				}, c.a.createElement("img", {
					className: U.a.thumbnail,
					src: v.url
				})), c.a.createElement("div", {
					className: Object(E.a)(U.a.postTitle, {
						[U.a.shortTitle]: v.url !== N.a.DEFAULT
					})
				}, Object(P.a)(C, 60, "..."))))() : (() => c.a.createElement(c.a.Fragment, null, v && Object(j.a)(v.url) && c.a.createElement("img", {
					className: U.a.thumbnail,
					src: v.url
				}), c.a.createElement("div", {
					className: U.a.subredditTitle
				}, c.a.createElement(S.b, {
					className: U.a.subredditIcon,
					subredditOrProfile: i
				}), c.a.createElement("span", {
					className: U.a.subredditName
				}, i && `r/${i.name}`), V >= 0 && c.a.createElement(I.b, {
					flair: s.flair[V]
				})), c.a.createElement("div", {
					className: Object(E.a)(U.a.postTitle, {
						[U.a.shortTitle]: v.url !== N.a.DEFAULT
					})
				}, Object(P.a)(C, 60, "..."))))(), c.a.createElement("div", {
					className: U.a.metaContainer
				}, c.a.createElement("div", {
					className: U.a.metaSection,
					onClick: p
				}, c.a.createElement(A.a, {
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
			var q = e => c.a.createElement("div", {
				className: Object(E.a)(U.a.placeholderWrapper)
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
			const K = () => n.fbt._("Similar to this post", null, {
					hk: "XKYGj"
				}),
				G = [];
			for (let X = 0; X < 15; X++) G.push(c.a.createElement(q, {
				key: X
			}));
			const Y = (e, t) => {
					const {
						post: s
					} = t;
					return Object(u.a)(s.id)
				},
				J = Object(m.a)((e, t) => {
					const s = Y(0, t);
					return Object(_.z)(e, {
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

			function Q(e, t) {
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
					} = Object(l.e)(e => J(e, {
						post: t,
						subredditOrProfile: s
					}), Q);
				if (Object(d.useEffect)(() => {
						n(g)
					}, [n]), !r.length && !o) return null;
				const i = (null == r ? void 0 : r.length) && r.map((e, t) => c.a.createElement(V, {
					post: e,
					key: t
				}));
				return c.a.createElement(b.a, {
					title: K()
				}, c.a.createElement("ul", null, o ? G : i))
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
				return P
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
				x = s("./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less"),
				f = s.n(x);
			const v = o.a.a("Link", h.a);
			var _ = e => {
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
						className: f.a.Button,
						href: `${a.a.redditUrl}/posts/${l}`,
						kind: g.b.ExternalLink,
						onClick: u,
						target: "_blank"
					}, s)
				},
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				C = s("./src/reddit/helpers/ordinal/index.ts"),
				O = s("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				E = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], w = o.a.div("ButtonContainer", E.a), P = e => {
				let {
					directoryTimestamp: t,
					postId: s,
					renderAsPlainLink: n
				} = e;
				const o = new Date(t),
					i = k[o.getMonth()],
					a = o.getFullYear(),
					d = o.getDate(),
					c = Object(C.a)(d),
					l = `${a}/${i}-${d}-1/`,
					m = `${a}/${i}/`,
					u = `${a}/`;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(_, {
					key: "ymd",
					buttonText: `top_posts_${i}_${c}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: l
				}, j._("Top posts {date}", [j._param("date", `${i} ${c} ${a}`)], {
					hk: "4xgYoo"
				})), r.a.createElement(_, {
					key: "ym",
					buttonText: `top_posts_of_${i}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: m
				}, j._("Top posts of {date}", [j._param("date", `${i}, ${a}`)], {
					hk: "HQnvs"
				})), r.a.createElement(_, {
					key: "y",
					buttonText: `top_posts_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: u
				}, j._("Top posts {date}", [j._param("date", `${a}`)], {
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
					className: E.a.Widget,
					contentOnly: !0
				}, r.a.createElement(p, {
					postId: s,
					url: a
				}), r.a.createElement(w, null, r.a.createElement(P, {
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
				return E
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
			const x = d.a.div("RuleShortName", g.a),
				f = d.a.div("RuleIndex", g.a),
				v = d.a.div("RuleTitle", g.a),
				_ = d.a.div("RuleDescription", g.a),
				y = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				C = {};
			class O extends o.a.Component {
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
					return o.a.createElement(x, {
						className: Object(a.a)({
							[g.a.pointerCursor]: i,
							[g.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(p.a, null, o.a.createElement(f, {
						className: Object(a.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), o.a.createElement(v, null, `${e.rule.shortName}`), o.a.createElement("div", null, !n(e) && r && o.a.createElement(u.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && o.a.createElement(_, {
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
			const E = e => e.rules.length > 0 ? o.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return o.a.createElement(O, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null;
			t.b = e => o.a.createElement(E, {
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
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Re
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
				x = s("./src/reddit/models/Widgets/index.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/telemetry/models/Outbound.ts"),
				y = s("./src/reddit/components/Widgets/Button/index.m.less"),
				C = s.n(y);
			const O = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === x.k.Image ? {
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
					if (o.kind === x.k.Image) r = {
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
				E = e => e.kind === x.k.Image ? C.a.imageButton : C.a.textButton,
				j = e => {
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
						className: E(t),
						style: O(t, s, n),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === x.k.Text && r.a.createElement("span", {
						className: t.hoverState ? C.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === x.k.Text && r.a.createElement("span", {
						className: C.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				w = e => r.a.createElement(l.b, {
					href: j(e.button),
					sourceElement: _.SourceElement.SidebarWidget
				}, r.a.createElement(k, e)),
				P = u.a.wrapped(a.a, "RawHTMLDisplay", C.a);
			var I = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: v.db
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(P, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== x.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== x.k.Image || e.hoverState.url !== h.c)).map(t => r.a.createElement(w, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/reddit/components/HumanDate/index.tsx"),
				T = s("./src/reddit/controls/TextButton/index.tsx"),
				L = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				F = s.n(L);
			const A = 100,
				B = {
					isExpanded: !1
				},
				R = u.a.wrapped(a.a, "RawHTMLDisplay", F.a),
				M = u.a.div("EventContainer", F.a),
				D = u.a.div("EventTitle", F.a),
				W = u.a.div("EventDate", F.a),
				U = u.a.div("EventLocation", F.a),
				z = u.a.div("EventDescription", F.a),
				H = u.a.wrapped(T.a, "ToggleDescription", F.a);
			class V extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = B
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > A ? r.a.createElement(z, null, t.isExpanded ? e.text : e.text.slice(0, A), r.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(z, null, e.text)
				}
			}
			var q = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(M, {
					key: `${s}-${t.title}`
				}, r.a.createElement(D, null, t.titleHtml ? r.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(W, null, r.a.createElement(N.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${s}:0${n}` : `${s}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(U, null, t.locationHtml ? r.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(V, {
					text: t.description
				})))),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Y = Object(K.c)(e => r.a.createElement(G.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				Q = Object(o.b)(J),
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
			var $ = Q(X),
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
				xe = s.n(ge);
			const fe = u.a.a("ExternalLink", xe.a),
				ve = u.a.div("ModeratorListItem", xe.a),
				_e = u.a.div("Username", xe.a),
				ye = u.a.wrapped(me.b, "FlairComponent", xe.a),
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
				Oe = e => r.a.createElement(_e, null, `u/${e}`),
				Ee = u.a.wrapped(ue.default, "InternalLink", xe.a),
				je = u.a.div("LinkContainer", xe.a),
				ke = Object(i.c)({
					userIsBanned: he.gb,
					userIsLoggedIn: v.Q
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
						className: xe.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${de.a.redditUrl}/message/compose?to=/r/${t}`
					}, r.a.createElement(pe.a, {
						className: xe.a.MessageModsButtonIcon
					}), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(ve, {
						key: e.name
					}, (e => r.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, Oe(e.name)))(e), r.a.createElement(ye, {
						flair: Ce(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(je, null, r.a.createElement(Ee, {
						to: `/r/${t}/about/moderators/`
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !o ? r.a.createElement("div", {
						className: xe.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(fe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: xe.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(fe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Pe = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
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
				Ae = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Be = e => r.a.createElement(Ae.b, null, "This widget hasn't been implemented yet!");

			function Re(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Fe;
						case "button":
							return I;
						case "subreddit-rules":
							return Ie.b;
						case "community-list":
							return Y;
						case "calendar":
							return q;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return Pe.a;
						default:
							return Be
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
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
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
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
					subreddit: Object(n.jb)(e) || Object(n.mb)(e, t)
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
			})), s.d(t, "p", (function() {
				return a
			})), s.d(t, "q", (function() {
				return d
			})), s.d(t, "s", (function() {
				return c
			})), s.d(t, "n", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "m", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "f", (function() {
				return j
			}));
			var n = s("./src/reddit/models/Prediction/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = "poll",
				i = "predictions",
				a = e => ({
					...Object(r.o)(e),
					source: o,
					action: "select",
					noun: "poll_option"
				}),
				d = e => ({
					...Object(r.o)(e),
					source: o,
					action: "select",
					noun: "prediction_option"
				}),
				c = e => ({
					...Object(r.o)(e),
					source: o,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = e => {
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
				m = e => {
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
				u = e => {
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
				p = e => ({
					...Object(r.o)(e),
					source: o,
					action: "click",
					noun: "add_coins"
				}),
				b = e => {
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
				h = e => {
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
				g = () => e => ({
					...Object(r.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				x = () => e => ({
					...Object(r.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				f = () => e => ({
					...Object(r.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				v = e => t => ({
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
					subreddit: Object(r.jb)(t)
				}),
				_ = () => e => ({
					...Object(r.o)(e),
					source: i,
					action: "click",
					noun: "next"
				}),
				y = () => e => ({
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
				O = () => e => ({
					...Object(r.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				E = () => e => ({
					...Object(r.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(r.jb)(e)
				}),
				j = () => e => ({
					...Object(r.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(r.jb)(e)
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
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "o", (function() {
				return j
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.o(e),
					subreddit: r.jb(e),
					userSubreddit: r.tb(e)
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
				x = d("copy_url"),
				f = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				_ = d("ban_wiki_contributor"),
				y = d("unban_wiki_contributor"),
				C = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				E = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.d(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.d(t, {
						settingValue: O[e]
					})
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
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), r.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), r.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), r.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), r.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), r.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), r.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), r.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
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
				x = s("./src/reddit/pages/CommentsPage/index.tsx"),
				f = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./node_modules/reselect/es/index.js");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(c.b)(() => Object(_.c)({
				primaryPostId: v.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(p.a, {
					postId: t
				}, d.a.createElement(x.CommentsPage, y({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(f.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, u.b.IsOverlay, !1), n = i()(t, u.b.CloseLocation, null), o = i()(t, u.b.ScrollOnLoad, !1);
				o && Object(b.c)(u.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: p,
						subredditName: x,
						collectionId: f
					} = a,
					v = p ? Object(g.x)(p) : void 0,
					_ = c && Object(h.h)(c),
					y = r()([...Object(l.a)(e.location.search)]),
					O = {};
				e.hasSortParam && (O.sort = e.sort, O.hasSortParam = !0);
				const E = Object(m.a)(f, v, _, O);
				return d.a.createElement(C, {
					closeLocation: n,
					collectionId: f,
					commentId: _,
					commentsPageKey: E,
					isOverlay: s,
					location: e.location,
					postId: v,
					instanceId: y.instanceId,
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
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
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
				x = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				v = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				_ = s.n(v);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: f.a,
				headComment: x.x,
				post: x.I
			}), O = e => {
				var t;
				const s = Object(g.a)(),
					{
						isSubredditDiscoveryCrosspostEnabled: n,
						headComment: i,
						post: x
					} = Object(o.e)(t => C(t, e)),
					f = Object(m.b)(),
					{
						commentId: v,
						isOverlay: O,
						postId: E
					} = e;
				if (!x) return null;
				const j = null !== (t = x.numDuplicates) && void 0 !== t ? t : 0,
					k = void 0 !== v,
					w = x.permalink,
					P = j > 0,
					I = Object(u.b)(Object(d.e)(w));
				return k || P ? r.a.createElement("div", {
					className: _.a.CommentsNavigationPane
				}, k && r.a.createElement("div", null, r.a.createElement(l.a, {
					className: _.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: O,
					to: Object(u.b)(w),
					onClick: () => f(Object(h.l)(E, i, s))
				}, y._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && r.a.createElement(l.a, {
					className: _.a.linkOrOverlay,
					isOverlay: O,
					to: Object(u.b)(i.permalink + "?context=8&depth=9")
				}, y._("Show parent comments", null, {
					hk: "AVRCa"
				}))), P && r.a.createElement(r.a.Fragment, null, n && r.a.createElement(c.a, {
					postId: E
				}), r.a.createElement(l.a, {
					className: Object(a.a)(_.a.OtherDiscussionsLink, {
						[_.a.discoveryExperimentLink]: n
					}),
					isOverlay: O,
					onClick: () => f(n ? Object(p.b)() : Object(b.a)(E)),
					to: I
				}, n ? r.a.createElement(r.a.Fragment, null, y._("View all", null, {
					hk: "30twDK"
				}), ` (${j})`) : y._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [y._plural(j, "other discussion communities count")], {
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
				return Nt
			})), s.d(t, "CommentsPage", (function() {
				return Mt
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/domUtils/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				C = s("./src/lib/lessComponent.tsx"),
				O = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/lib/performanceTimings/index.tsx"),
				k = s("./src/reddit/actions/ads/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				N = s("./src/reddit/actions/linkedPosts/index.ts"),
				T = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/modal.ts"),
				F = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				A = s("./src/reddit/actions/pages/comments.ts"),
				B = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/actions/upvotePrompt.ts"),
				D = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				W = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				U = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				z = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				H = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				V = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				q = s("./src/reddit/constants/componentSizes.ts"),
				K = s("./src/reddit/constants/elementIds.ts"),
				G = s("./src/reddit/constants/history.ts"),
				Y = s("./src/reddit/constants/keycodes.ts"),
				J = s("./src/reddit/constants/posts.ts"),
				Q = s("./src/reddit/constants/screenWidths.ts"),
				Z = s("./src/reddit/contexts/ApiContext.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ee = s("./src/reddit/helpers/sessionStorage/index.ts"),
				te = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				se = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				ne = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				re = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				oe = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				ie = s("./src/reddit/selectors/subreddit.ts"),
				ae = s("./src/reddit/selectors/upvotePrompt.ts"),
				de = s("./src/reddit/featureFlags/profileCollections.ts"),
				ce = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				le = s("./src/reddit/contexts/Post/index.tsx"),
				me = s("./src/reddit/models/Comment/index.ts"),
				ue = s("./src/reddit/models/Post/index.ts"),
				pe = s("./src/reddit/models/Subreddit/index.ts"),
				be = s("./src/reddit/selectors/chatPost.ts"),
				he = s("./src/reddit/selectors/comments.ts"),
				ge = s("./src/reddit/selectors/commentSelector.ts"),
				xe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				fe = s("./src/reddit/selectors/creatorStats.ts"),
				ve = s("./src/reddit/selectors/discoveryUnit.ts"),
				_e = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ye = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ce = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Oe = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Ee = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				je = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				ke = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				we = s("./src/reddit/selectors/meta.ts"),
				Pe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ie = s("./src/reddit/selectors/posts.ts"),
				Se = s("./src/reddit/selectors/tooltip.ts"),
				Ne = s("./src/reddit/selectors/user.ts"),
				Te = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Le = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Fe = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Ae = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Be = s("./src/reddit/components/Comments/index.tsx"),
				Re = s("./src/reddit/components/Comments/States/index.tsx"),
				Me = s("./src/reddit/components/CommentsChat/Loader.ts"),
				De = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				We = s("./src/reddit/components/CommentSort/index.tsx"),
				Ue = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				ze = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				He = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Ve = s("./src/reddit/components/HeaderImage/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ke = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ge = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Ye = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Je = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Qe = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ze = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Xe = s("./src/reddit/components/PostContent/index.tsx"),
				$e = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				tt = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				st = s("./src/reddit/components/SubredditNav/index.tsx"),
				nt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				rt = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				ot = s("./src/reddit/helpers/datadome.ts"),
				it = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				at = s("./src/reddit/helpers/history/index.ts"),
				dt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ct = s("./src/reddit/helpers/name/index.ts"),
				lt = s("./src/reddit/helpers/postCollection.ts"),
				mt = s("./src/reddit/helpers/resonatePage/index.ts"),
				ut = s("./src/reddit/helpers/trackers/lightbox.ts"),
				pt = s("./src/reddit/helpers/trackers/screenview.ts"),
				bt = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				ht = s("./src/reddit/layout/page/Listing/index.tsx"),
				gt = s("./src/reddit/models/ContentGate.ts"),
				xt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				ft = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				vt = s("./src/reddit/selectors/experiments/chat.ts"),
				_t = s("./src/reddit/pages/CommentsPage/index.m.less"),
				yt = s.n(_t);

			function Ct() {
				return (Ct = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ot = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Et = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				jt = 200,
				kt = 80,
				wt = 32,
				Pt = Object(n.a)({
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
				It = Object(n.a)({
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
				St = Object(n.a)({
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
				Nt = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(O.a)(t) : n
				},
				Tt = e => {
					const {
						state: t
					} = e.location, s = a()(t, G.b.IsOverlay, !1), n = a()(t, G.b.CloseLocation, null), r = a()(t, G.b.ScrollOnLoad, !1);
					r && Object(at.c)(G.b.ScrollOnLoad);
					const {
						partialCommentId: o,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(ue.x)(i), p = o && Object(me.h)(o), b = Object(ce.a)(c), h = Object(u.e)(ne.b), g = Object(u.e)(e => Object(Ie.z)(e, {
						listingKey: b
					})), x = Object(u.d)();
					return Object(l.useEffect)(() => {
						h && !g.length && x(Object(N.c)({
							key: b
						}))
					}, []), m.a.createElement(le.a, {
						postId: c
					}, m.a.createElement(Mt, {
						closeLocation: n,
						commentId: p,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: r,
						sort: e.sort,
						subredditName: d
					}))
				},
				Lt = Object(X.u)(),
				Ft = () => Object(b.c)({
					apiError: he.c,
					apiPending: he.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Ie.V)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(se.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(fe.a)(e, s)
					},
					comment: (e, t) => {
						let {
							commentId: s
						} = t;
						return s ? Object(ge.b)(e, {
							commentId: s
						}) : void 0
					},
					communityBannerDiscoveryUnit: ve.a,
					isSubredditDiscoveryCrosspostEnabled: je.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(Ne.f)(e, s)
					},
					currentUserShowNSFW: Ne.kb,
					dismissedSubreddits: _e.a,
					fullyLoaded: he.u,
					hasModeratorPostPermissions: Pe.c,
					headComment: he.x,
					isActionBarAnimationEnabled: oe.b,
					isAvatarsInCommentsEnabled: Ce.a,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return !!Object(Ie.w)(e, {
							postId: s
						}) && Object(ye.a)(e)
					},
					isCommentBeforeSignUpEnabled: te.a,
					isCountAnimShadowTestEnabled: oe.e,
					isCrawler: (e, t) => !!Object(we.c)(e),
					isCrosspostRecommendationsExperimentEnabled: se.b,
					isD2xPdpSideRailRecsEnabled: ne.b,
					isEligibleForCommentTruncation: ke.a,
					isChatPost: be.d,
					isChatPostV2Enabled: vt.e,
					isCommentsListTruncated: xe.a,
					isLoggedIn: Ne.Q,
					isNightmodeOn: Ne.db,
					isTooltipOpen: (e, t) => !!Object(Se.a)(e),
					origin: we.k,
					post: Ie.G,
					postSEOV2IdCardVariant: Oe.h,
					profileCollectionsEnabled: de.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: r
						} = t;
						return Object(he.s)(e, {
							commentsPageKey: Nt({
								postId: s,
								commentId: n,
								commentsPageKey: r
							})
						})
					},
					shouldOpenPostInNewTab: Ne.jb,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(ie.x)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: Ie.V,
					userHovercardIsOpen: (e, t) => Object(Se.b)(Object(qe.b)({
						itemId: t.postId,
						tooltipIdPrefix: z.a,
						tooltipType: et.c.StickyPost
					}))(e),
					userPrefs: Ne.Hb,
					inResonatePilot: Ee.a,
					isQualifiedForUpvotePrompt: ae.c,
					isTrueblockPCBlockeeEnabled: ye.e,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(ie.G)(e, s);
						return !!n && Object(Pe.i)(e, n)
					},
					isNsfwBlurSubreddit: re.e,
					isNsfwFullPageInterstitial: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Ie.V)(e, {
								postId: s
							}),
							r = !(!n || !n.isNSFW),
							o = Object(re.f)(e) === re.a.NoPreview;
						return r && o
					}
				}),
				At = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(L.g)(U.a)),
					dismissTruncation: t => e(Object(Te.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(I.a)()),
					setCommentFocus: t => e(w.g({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(A.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(R.i)()),
					onToggleTooltip: t => e(Object(R.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(T.openLoginModal)()),
					openNsfwModal: () => e(Object(F.a)()),
					openRegisterModal: () => e(Object(T.openRegisterModal)()),
					openReportFlow: (t, s) => e(Object(B.c)(t, s)),
					submitCommentAfterSignUp: () => e(P.m()),
					goToSubredditPage: t => e(Object(p.b)(t)),
					truncateCommentsList: () => e(Object(I.b)()),
					fetchCommentsNativeAd: t => e(Object(k.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Le.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(M.b)(t, s, n))
					}
				}),
				Bt = Object(u.b)(Ft, At);
			class Rt extends m.a.Component {
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
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== r && d >= r && (this.didScrollPastPost = !0), t && void 0 !== r && d < r && (this.didScrollPastPost = !1, o && y.a.write(() => {
							i(Object(qe.b)({
								itemId: a,
								tooltipIdPrefix: z.a,
								tooltipType: et.c.StickyPost
							}))
						}))
					}, v.L), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(ut.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(ue.v)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === Y.b.F || e.keyCode === Y.a.F,
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
					e && s(e), Object(rt.a)(t.search) && this.setState({
						isEmbeddedInLiveChatIframe: !0
					})
				}
				async componentDidMount() {
					var e;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, ae.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isNsfwBlurSubreddit: r,
							isOverlay: o,
							openNsfwModal: i,
							post: a,
							shouldScrollToComments: d,
							subredditName: c
						}
					} = this, l = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(l) && this.props.openReportFlow(this.props.postId, o), a && !a.isSponsored && !a.isRemoved && a.belongsTo.type !== J.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(a.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(K.e), d && (t || s || this.hasCommentAdRef()) && a && a.numComments ? this.scrollToComments() : y.a.write(() => {
							setTimeout(() => {
								Object(_.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(dt.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(ue.x)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), y.a.read(() => {
							const e = [Object(ot.a)()];
							this.props.isOverlay || Object(j.d)(j.c.CommentsPage, n, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						v.Pb.includes(e) && Object(mt.a)(e)
					}
					this.props.isLoggedIn && Object(ee.c)() && this.props.submitCommentAfterSignUp(), (null == a ? void 0 : a.isNSFW) && c && r && i()
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
							isEmbeddedInLiveChatIframe: Object(rt.a)(this.props.location.search)
						}), e.postId !== this.props.postId) {
						const e = this.props.post && Object(lt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? y.a.read(this.handleScroll) : y.a.write(() => {
							e || Object(_.c)(this.scrollContainerEl, 0), y.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && y.a.write(() => {
							setTimeout(() => {
								Object(_.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = q.b + (this.props.isOverlay ? q.m : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const r = (n = this.props.isOverlay ? document.getElementById(K.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								o = Math.abs(r - s),
								i = this.props.isOverlay ? wt : o - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && y.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(_.c)(n, i) : Object(_.c)(document, i)
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = jt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = jt)
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
					y.a.read(() => {
						const e = document.getElementById(K.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - kt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - kt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), y.a.write(() => {
								Object(_.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => y.a.read(this.handleScroll))
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
					y.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: r
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const o = g.c.end(t);
						n(Object(pt.c)(t, s, e, x.TimerType.InApp, o, r))
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
					const a = Object(it.a)(e, i, o);
					if (!a) return null;
					let d = m.a.createElement(St, a);
					return n && (d = m.a.createElement(bt.a, {
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
						isD2xPdpSideRailRecsEnabled: u,
						isEligibleForCommentTruncation: p,
						isLoggedIn: b,
						isModWithUserNotesPermissions: h,
						isNightmodeOn: g,
						isNsfwBlurSubreddit: x,
						isNsfwFullPageInterstitial: _,
						isOverlay: y,
						post: C,
						postId: O,
						postSEOV2IdCardVariant: E,
						profileCollectionsEnabled: j,
						sendEvent: k,
						sort: w,
						subredditName: P,
						subredditOrProfile: I
					} = this.props, {
						isEmbeddedInLiveChatIframe: S
					} = this.state;
					if ((null == C ? void 0 : C.isNSFW) && P && _) return m.a.createElement(V.a, {
						contentTitle: Object(ct.d)(P)
					});
					const N = Object(Oe.f)(E);
					if (!C) {
						if (t) return m.a.createElement(Re.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === v.o ? m.a.createElement(St, {
							contentGateType: gt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Re.d, {
							postId: O,
							commentId: o,
							apiError: e,
							sort: w
						}) : m.a.createElement(Re.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const T = this.isCommentPermalink(),
						L = C.belongsTo.type === J.a.PROFILE,
						F = Object(lt.a)(C) && (!L || j),
						A = !b,
						B = I && I.isQuarantined,
						R = !p && !this.state.allCommentsRendered && !c,
						M = l && s,
						U = C.isNSFW && x;
					return Ot.input.channel.postID = O, S ? m.a.createElement("div", {
						className: yt.a.EmbeddedLiveChatContainer
					}, this.renderCommentPanes()) : m.a.createElement(Wt, {
						closeLocation: r,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						isD2xPdpSideRailRecsEnabled: u,
						isLoggedIn: b,
						isOverlay: y,
						isSwapVariant: N,
						post: C,
						shouldBlurHeaderImage: U,
						subredditOrProfile: I,
						shouldFitPageToContent: A,
						isCollectionLayout: F
					}, m.a.createElement(Ze.a, {
						postId: O,
						isNightMode: g,
						isOverlay: y,
						commentId: o
					}), !y && m.a.createElement($e.a, {
						post: C
					}), B && m.a.createElement(Je.a, {
						subredditName: I.name
					}), m.a.createElement(Qe.a, null), m.a.createElement("div", {
						className: Object(f.a)(yt.a.PageContentWrapper, {
							[yt.a.LargePageContent]: F,
							[yt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, F && m.a.createElement(It, {
						isOverlay: y,
						isNightmodeOn: g,
						postId: O
					}), m.a.createElement(Et, {
						condition: F,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: yt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Xe.c, {
						isCommentPermalink: T,
						isOverlay: y,
						isModWithUserNotesPermissions: h,
						postId: O,
						redditStyle: y,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: k,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && m.a.createElement(He.a, {
						post: C,
						subreddit: I
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(D.a, {
						key: `event-post-id-${C.id}`,
						isOverlay: y,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), I && !Object(pe.h)(I) && m.a.createElement(H.a, {
						awaitAllCommentsRendered: R,
						contentContainerRef: this.state.layoutRef,
						isOverlay: y,
						post: C,
						subredditOrProfile: I
					}), M && m.a.createElement(W.a, {
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
						isBlockedUserBannerEnabled: l,
						isChatPost: u,
						isChatPostV2Enabled: p,
						isCommentsListTruncated: b,
						isCommentBeforeSignUpEnabled: g,
						isEligibleForCommentTruncation: x,
						isLoggedIn: v,
						isOverlay: _,
						location: y,
						onOtherDiscussions: C,
						openLoginModal: O,
						openRegisterModal: j,
						origin: k,
						post: w,
						postId: I,
						replyComment: S,
						sendEvent: N,
						sort: T,
						subredditAboutInfo: L,
						subredditOrProfile: F,
						isTrueblockPCBlockeeEnabled: A
					} = this.props, {
						isEmbeddedInLiveChatIframe: B
					} = this.state;
					if (!w) return null;
					const R = this.isCommentPermalink(),
						M = [],
						D = w.isLocked && !s,
						W = !(R || w.isArchived || L && L.userIsBanned || w.authorIsBlocked && l || w.unrepliableReason && A);
					if (D) M.push(m.a.createElement(Ge.a, {
						key: "commentThreadBanner",
						subredditOrProfile: F
					}));
					else if (w.isArchived) M.push(m.a.createElement(Ke.a, {
						key: "commentThreadBanner"
					}));
					else if (W && !u && !C)
						if (v || !v && g) {
							const e = Object(E.a)(h.c.replyToPost, I);
							M.push(m.a.createElement(Fe.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: h.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: I,
								submitAction: (t, s) => {
									let {
										validate: n,
										...r
									} = t;
									return n ? P.w({
										postId: I,
										commentsPageKey: o,
										draftKey: e,
										formData: r,
										editorMode: s
									}) : P.q({
										postId: I,
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
						} else M.push(m.a.createElement(Ae.a, {
							key: "loggedOutCommentForm",
							location: y,
							openLoginModal: O,
							openRegisterModal: j,
							origin: k
						}));
					if (w.contestMode && M.push(m.a.createElement(Ye.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), u || C || (this.props.isSubredditDiscoveryCrosspostEnabled ? M.push(m.a.createElement(xt.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: _,
							key: "commentNavigation",
							postId: I
						}), m.a.createElement(We.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: _,
							key: "commentSort",
							location: y,
							postId: I,
							sort: T,
							suggestedSort: w.suggestedSort
						})) : M.push(m.a.createElement(We.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: _,
							key: "commentSort",
							location: y,
							postId: I,
							sort: T,
							suggestedSort: w.suggestedSort
						}), m.a.createElement(xt.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: _,
							key: "commentNavigation",
							postId: I
						}))), M.push(m.a.createElement(tt.a, {
							key: "subredditForkingCTA",
							postId: I
						})), !t || d || u || C)
						if (!e || d || C)
							if (C) M.push(m.a.createElement(Pt, {
								commentSort: T,
								key: "otherDiscussions",
								postId: I,
								isOverlay: _,
								postPermalink: w.permalink
							}));
							else if (u) {
						if (F && F.id) {
							const e = S ? Object(E.a)(h.c.replyToComment, S.id) : Object(E.a)(h.c.replyToPost, I),
								s = Nt({
									postId: I,
									commentId: n,
									commentsPageKey: o
								});
							M.push(m.a.createElement(Me.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: I,
								renderedInOverlay: _,
								subredditId: F.id,
								isEmbeddedLiveChat: B
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return v ? m.a.createElement(De.a, {
									isV2: p,
									isEmbeddedLiveChat: B,
									key: "chatCommentsForm",
									postId: I,
									replyComment: S,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: N
								}) : m.a.createElement(Ae.a, {
									key: "loggedOutCommentForm",
									className: yt.a.ChatLoggedOutForm,
									location: y,
									openLoginModal: O,
									openRegisterModal: j,
									origin: k
								})
							}))
						}
					} else M.push(m.a.createElement("div", {
						className: Object(f.a)(yt.a.CommentsPaneWrapper, {
							[yt.a.mIsInOverlay]: _
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(ze.a, Ct({}, this.props, {
						shouldTruncateComments: x && b,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: w.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Be.a, {
						commentId: n,
						commentsPageKey: o,
						postId: I,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: _
					})))), e && d ? M.push(m.a.createElement(Re.e, {
						key: "commentsErrorState",
						postId: I,
						commentId: n,
						sort: T,
						apiError: e
					})) : !i && t && M.push(m.a.createElement(Re.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else M.push(m.a.createElement(Re.e, {
						key: "errorState",
						postId: I,
						commentId: n,
						sort: T,
						apiError: e
					}));
					else this.didRenderLoading = !0, M.push(m.a.createElement(Re.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement($.a.Provider, {
						value: this.sendEventWithName
					}, M)
				}
			}
			const Mt = Lt(Object(Z.b)(Bt(Object(nt.c)(Rt)))),
				Dt = C.a.wrapped(Ue.a, "DetailsPageSidebar", yt.a),
				Wt = e => {
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
						subredditOrProfile: u
					} = e;
					if (i) return m.a.createElement(bt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: r,
						sidebar: u && m.a.createElement(Ue.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: d,
							subredditOrProfile: u,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const p = r ? q.h : Q.a,
						b = o && u && !Object(pe.h)(u) ? `r/${u.name}` : void 0;
					return m.a.createElement(ht.a, {
						backToSubredditName: b,
						containerRef: n,
						maxWidth: q.h,
						fitPageToContent: l,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: a,
						isCollectionLayout: r,
						navBar: u && m.a.Children.toArray([m.a.createElement(Ve.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: p,
							prefixedHeaderText: u.displayText,
							shouldBlurHeaderImage: c,
							subredditOrProfile: u,
							url: u.url
						}), !Object(pe.h)(u) && m.a.createElement(st.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: p,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Dt, {
							commentsPageKey: s,
							post: d,
							subredditOrProfile: u,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(ft.a)(Tt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
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
					return t && Object(b.x)(t)
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
				x = Object(l.a)((e, t) => {
					const s = h(t);
					return Object(u.a)(e, s)
				});

			function f(e) {
				return t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = Object(a.e)(e => x(e, t)), r = g(t, s, n), o = Object(m.d)(t.match.path), d = {
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
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.e[Object(o.S)(e, {})] === r.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.xb
				}) === n.Nc.Treatment
		},
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = ["t5_395yw", "t5_2zkfk", "t5_3o3fz", "t5_2rzot", "t5_2w2lq", "t5_3ii04", "t5_3hn0l", "t5_2qh8h", "t5_3g6wm", "t5_3ntes", "t5_35aia", "t5_2r8ok", "t5_iygqf", "t5_2qutz", "t5_2qkhb", "t5_2r78m", "t5_2qkob", "t5_hwfuo", "t5_2tfgu", "t5_2u8vt", "t5_vnwft", "t5_3izzds", "t5_gofqg"],
				a = (e, t) => c(e) && d(t),
				d = e => i.includes(e),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.fe
				}), e => e === r.Kd)
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
				experimentName: n.qf
			}) === n.xf.Enabled
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
						[r.Pc.Bottom_cell_dismissible]: e,
						[r.Pc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.Pc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(r.Gb, !0),
				m = c(r.Hb, !0),
				u = c(r.Ib, !0),
				p = c(r.Gb, !1),
				b = c(r.Hb, !1),
				h = c(r.Ib, !1)
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
						experimentName: n.If
					}) === n.Kd
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.Hf
					}) === n.Kd
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
						experimentName: n.lg
					}) === n.Kd
				},
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.mg
					}) === n.Kd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.kg
					});
					return t === n.ag.TypingIndicators || t === n.ag.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.d)(e, {
						experimentName: n.kg
					});
					return (null == t ? void 0 : t.variant) === n.ag.IndicatorsPlusCTA
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
					return Boolean(t) && !Object(r.rg)(t)
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
			}, i.V, i.G, a.P, a.Q, o.h, (e, t, s, n, r, o, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
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
				}, e => Object(i.a)(e), (e, t, s, n) => e && !!t && (!t.isNSFW || t.isNSFW && n === r.Uc.GreyRedditNoNsfw) && !!s && (!s.isNSFW || s.isNSFW && n === r.Uc.GreyRedditNoNsfw) && !!t.created && t.created > p && t.created < b)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"8c513d0583a3"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b6b5fbe25273"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"bd47943e9fad"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"f1fcb4cda614"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"4660ca94f640"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.40d9bfc4dd4713daa5b0.js.map