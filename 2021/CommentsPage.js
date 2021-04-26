// https://www.redditstatic.com/desktop2x/CommentsPage.d76e038ef73fbed83312.js
// Retrieved at 4/26/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage"], {
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

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, r, o, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0
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
		"./node_modules/uuid/index.js": function(e, t, s) {
			var n = s("./node_modules/uuid/v1.js"),
				r = s("./node_modules/uuid/v4.js"),
				o = r;
			o.v1 = n, o.v4 = r, e.exports = o
		},
		"./node_modules/uuid/v1.js": function(e, t, s) {
			var n, r, o = s("./node_modules/uuid/lib/rng-browser.js"),
				i = s("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				d = 0;
			e.exports = function(e, t, s) {
				var c = t && s || 0,
					l = t || [],
					m = (e = e || {}).node || n,
					u = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == m || null == u) {
					var p = o();
					null == m && (m = n = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == u && (u = r = 16383 & (p[6] << 8 | p[7]))
				}
				var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					b = void 0 !== e.nsecs ? e.nsecs : d + 1,
					g = h - a + (b - d) / 1e4;
				if (g < 0 && void 0 === e.clockseq && (u = u + 1 & 16383), (g < 0 || h > a) && void 0 === e.nsecs && (b = 0), b >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = h, d = b, r = u;
				var f = (1e4 * (268435455 & (h += 122192928e5)) + b) % 4294967296;
				l[c++] = f >>> 24 & 255, l[c++] = f >>> 16 & 255, l[c++] = f >>> 8 & 255, l[c++] = 255 & f;
				var x = h / 4294967296 * 1e4 & 268435455;
				l[c++] = x >>> 8 & 255, l[c++] = 255 & x, l[c++] = x >>> 24 & 15 | 16, l[c++] = x >>> 16 & 255, l[c++] = u >>> 8 | 128, l[c++] = 255 & u;
				for (var v = 0; v < 6; ++v) l[c + v] = m[v];
				return t || i(l)
			}
		},
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"afc557a7dcb1"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"e5d76df5b02a"}')
		},
		"./src/graphql/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"4b74515cd8a2"}')
		},
		"./src/graphql/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/graphql/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"278755e4d90f"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"e53ac80e9ff1"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t, s, n) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(r)
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return k
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
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = u(r()()).set({
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
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				C = e => {
					return [...g.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				k = e => {
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
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return z
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./node_modules/lodash/first.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/isArray.js"),
				c = s.n(d),
				l = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				p = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts");
			const g = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = x(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(m.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: f(s),
							id: e.name,
							isAdmin: s === u.d.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === u.d.Submitter,
							isMod: s === u.d.Moderator,
							markdown: e.body,
							media: {
								type: "rtjson",
								richtextContent: e.rtjson || {
									document: [{
										c: [{
											e: "text",
											t: e.body
										}],
										e: "par"
									}]
								},
								rteMode: h.h.RICH_TEXT
							},
							parentId: e.parent_id && Object(l.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							isSystem: !1,
							approvedAtUTC: null,
							approvedBy: null,
							bannedAtUTC: null,
							bannedBy: null,
							collapsedReason: null,
							deletedBy: null,
							editedAt: null,
							ignoreReports: !1,
							isApproved: !1,
							isAuthorPremium: !1,
							isLocked: !1,
							isDeleted: !1,
							isRemoved: !1,
							isScoreHidden: !1,
							isSpam: !1,
							isStickied: !1,
							isSaved: !1,
							modReports: [],
							modReportsDismissed: [],
							numReports: 0,
							postAuthor: null,
							postTitle: null,
							sendReplies: !0,
							userReports: [],
							userReportsDismissed: [],
							voteState: b.a.notVoted,
							...t || {}
						}
					}
				},
				f = e => {
					switch (e) {
						case u.d.Admin:
							return n.C.ADMIN;
						case u.d.Moderator:
							return n.C.MODERATOR;
						case u.d.Alumni:
							return n.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				x = e => a()((e || []).filter(e => c()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || u.d.None;
			const v = (e, t, s) => {
				const n = {
						[t]: {}
					},
					{
						author: r,
						author_flair_background_color: o,
						author_flair_richtext: i,
						author_flair_template_id: a,
						author_flair_text: d,
						author_flair_text_color: c,
						author_flair_type: l
					} = s;
				if (r && l) {
					if (l === p.f.Richtext) {
						if (!o || !i) return;
						return {
							[t]: {
								[r]: {
									type: l,
									backgroundColor: o,
									cssClass: void 0,
									richtext: i,
									templateId: a,
									textColor: c
								}
							}
						}
					}
					if (l === p.f.Text) {
						if (!d) return n;
						return {
							[t]: {
								[r]: {
									type: l,
									backgroundColor: o,
									cssClass: void 0,
									text: d,
									templateId: a,
									textColor: c
								}
							}
						}
					}
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var y = s("./src/lib/env/index.ts");
			const C = new Map,
				_ = e => e,
				k = new Set;
			var w;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(w || (w = {}));
			const O = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				E = (e, t) => {
					const s = _(t),
						n = C.get(s);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				j = (e, t, s, n) => {
					const r = _(t),
						o = C.get(r);
					if (o && (o.socket.readyState === WebSocket.CONNECTING || o.socket.readyState === WebSocket.OPEN)) return;
					const i = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					C.set(r, i), i.socket.addEventListener("open", () => {
						i.retries = {
							...O
						}
					}), i.socket.addEventListener("message", S.bind(null, n)), i.socket.addEventListener("close", P.bind(null, r, n)), i.socket.addEventListener("error", L.bind(null, r)), window && window.addEventListener("beforeunload", E.bind(null, e, t))
				},
				P = (e, t, s) => {
					const n = C.get(e);
					n && (n.isClosePlanned ? C.delete(e) : I(e, t))
				},
				I = (e, t) => {
					const s = C.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: r,
							jitterAmount: o,
							maximumRetries: i
						},
						socket: a,
						uniqueId: d,
						url: c
					} = s;
					if (C.delete(e), r < i && a.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, r),
							i = Math.random() * o - o / 2,
							a = Math.round(e + i),
							l = {
								...s.retries,
								connectionAttempts: r + 1
							};
						setTimeout(() => {
							j(c, d, l, t)
						}, a), Object(y.a)() && console.debug(`Connection reset, retrying in ${a}ms`)
					}
				},
				S = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(y.a)() && console.error(t)
					}
				},
				L = (e, t) => {
					const s = C.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? C.delete(e) : Object(y.a)() && console.error(t)
				};
			var T = s("./src/reddit/selectors/comments.ts"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/actions/comment/websocket/constants.ts");
			const A = Object(r.a)(M.b),
				R = Object(r.a)(M.c),
				D = Object(r.a)(M.a),
				B = Object(r.a)(M.d),
				V = {},
				W = (e, t, s, r) => async (i, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: n,
							uniqueId: r
						} = e;
						k.has(r) ? t() : (k.add(r), setTimeout(() => {
							k.delete(r), j(n, r, {
								...O
							}, s), t()
						}, 1))
					}))({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case w.NEW_COMMENT: {
									const d = t.payload.name,
										c = g(t.payload),
										l = a(),
										m = Object(o.a)(l, s).sortToUse === n.r.CHAT,
										u = Object(N.a)(l, {
											commentId: d
										}),
										p = !(!d || !V[d]);
									if (c && !p) {
										const s = v(0, r, t.payload),
											n = t.payload.total_comment_count;
										if (void 0 === u) {
											const r = Object(T.w)(l, {
													commentsPageKey: e
												}),
												o = t.payload.parent_id,
												a = Object(T.j)(l, {
													commentId: o,
													commentsPageKey: e
												}),
												d = Object(N.a)(l, {
													commentId: o
												}),
												u = d && d.originId ? d.originId : o,
												p = null === a ? a : a + 1;
											if (m) i(A({
												authorFlair: s,
												comment: c,
												commentsPageKey: e,
												depth: p,
												headCommentId: r,
												isChatSort: m,
												numComments: n,
												originId: u
											}));
											else {
												const t = d && d.originId ? 5e3 : 7e3;
												setTimeout(() => i(A({
													authorFlair: s,
													comment: c,
													commentsPageKey: e,
													depth: p,
													headCommentId: r,
													isChatSort: m,
													numComments: n,
													originId: u
												})), t)
											}
										} else i(R({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											isChatSort: m,
											numComments: n
										}))
									}
									break
								}
								case w.UPDATE_COMMENT: {
									const d = t.payload.name,
										c = a(),
										l = Object(N.a)(c, {
											commentId: d
										}),
										m = g(t.payload),
										u = Object(o.a)(c, s).sortToUse === n.r.CHAT;
									if (l && m) {
										const s = v(0, r, t.payload),
											n = t.payload.total_comment_count;
										i(R({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: u,
											numComments: n
										}))
									}
									break
								}
								case w.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										n = t.payload.score,
										r = a(),
										o = Object(N.a)(r, {
											commentId: s
										});
									o && i(R({
										comment: {
											...o,
											score: n
										},
										commentsPageKey: e
									}));
									break
								}
								case w.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										n = Object(N.a)(s, {
											commentId: e
										});
									n && !n.isDeleted ? i(D({
										id: e
									})) : V[e] = w.DELETE_COMMENT;
									break
								}
								case w.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										n = a(),
										r = Object(N.a)(n, {
											commentId: s
										}),
										o = (n.user.account && n.user.account.id) === (r && r.authorId),
										d = !!e && !!Object(F.j)(n, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || o || d ? V[s] = w.REMOVE_COMMENT : i(D({
										id: s
									}));
									break
								}
								case w.USER_JOIN: {
									const s = g(t.payload, {
											isSystem: !0
										}),
										n = !0;
									s && i(B({
										comment: s,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				}, z = (e, t) => async () => {
					E(0, t)
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
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return C
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "m", (function() {
				return L
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "n", (function() {
				return M
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "e", (function() {
				return D
			}));
			var n = s("./node_modules/uuid/index.js"),
				r = s.n(n),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/features/predictions/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/endpoints/economics/predictions.ts"),
				c = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = s("./src/reddit/models/Poll/index.ts"),
				m = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/features/predictions/creation/index.ts"),
				g = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				f = s("./src/reddit/actions/economics/predictions/constants.ts");
			Object(o.a)({
				features: {
					predictions: i.a
				}
			});
			const x = Object(a.a)(f.d),
				v = Object(a.a)(f.h),
				y = Object(a.a)(f.g),
				C = (e, t, s, n) => async (r, o, {
					gqlContext: i
				}) => {
					const a = Object(h.J)(o()),
						c = await Object(d.h)(i(), {
							subredditId: e,
							period: t,
							top: s,
							includeCurrentRank: a,
							tournamentId: n
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = c.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: m
					} = l, u = {
						subredditId: e,
						...m
					};
					return r(x(u)), u
				}, _ = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						o = Object(u.P)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!o) throw new Error("Post does not belong to a subreddit");
					const i = await Object(d.f)(n(), o.name, Object(m.e)(r));
					if (i.error || !i.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a || !a.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return a.predictionCoinPackages
				}, k = ({
					coinPackageId: e,
					optionId: t,
					postId: s,
					price: n
				}) => async (r, o, {
					gqlContext: i
				}) => {
					const a = await Object(d.l)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: s,
						price: n
					});
					if (a.error || !a.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = a.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return r(v({
						pollId: s,
						prediction: c.poll,
						price: n
					})), c.poll
				}, w = ({
					optionId: e,
					postId: t
				}) => async (s, n, {
					gqlContext: r
				}) => {
					const o = await Object(d.j)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = o.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return s(y({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, O = Object(a.a)(f.b), E = Object(a.a)(f.c), j = Object(a.a)(f.f), P = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						o = Object(p.F)(r, e);
					if (Object(g.i)(r, {
							subredditId: o
						})) return Object(g.e)(r, {
						subredditId: o
					});
					t(O({
						subredditId: o
					}));
					const i = await Object(d.i)(n(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (i.error || !i.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a.predictionTournaments) return [];
					const l = a.predictionTournaments.map(e => {
							var t, s;
							const n = null !== (s = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(c.e)(e),
									s = t.pollData;
								return {
									...t,
									pollData: s
								}
							})) && void 0 !== s ? s : [];
							return {
								...e,
								predictionPosts: n
							}
						}),
						m = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(E({
						subredditId: o,
						tournaments: l
					})), t(j({
						posts: m,
						meta: r.meta
					})), l
				}, I = Object(a.a)(f.a), S = Object(a.a)(f.i), L = Object(a.a)(f.j), T = ({
					subredditId: e
				}) => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						o = Object(b.b)(r),
						i = Object(m.a)(r);
					if (!o) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(d.c)(n(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: o,
							currency: i ? l.b.Coins : l.b.Tokens
						}),
						{
							createPredictionTournament: c
						} = a.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: u
					} = c;
					return t(E({
						subredditId: e,
						tournaments: [u]
					})), u
				}, N = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					var i;
					const a = Object(b.b)(n());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(d.b)(o(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: l
						} = c.body.data;
					if (null === (i = l.errors) || void 0 === i ? void 0 : i.length) throw new Error(l.errors[0].message);
					if (!(null == l ? void 0 : l.tournament)) throw new Error("Failed to create prediction");
					return l.tournament
				}, F = Object(a.a)(f.k), M = (e, t, s) => async (n, r, {
					gqlContext: o
				}) => {
					const i = await Object(d.k)(o(), {
							tournamentId: e,
							name: s
						}),
						{
							updatePredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return n(F({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, A = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					const o = await Object(d.d)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = o.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return s(F({
						subredditId: t,
						tournament: i.tournament
					})), i.tournament
				}, R = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = await Object(d.e)(n(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: o
					} = r.body.data;
					if (!o.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return o.predictionChipPackages
				}, D = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = await Object(d.g)(n(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: o
					} = r.body.data;
					if (!o.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return o.predictionTokens
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return E
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(i.g),
				g = Object(r.a)(i.e),
				f = Object(r.a)(i.h),
				x = Object(r.a)(i.c),
				v = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				C = Object(r.a)(i.i),
				_ = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(u.e)(r),
						i = Object(u.d)(r),
						c = Object(h.I)(r);
					if (o || !i) return;
					e(f());
					let p = !1;
					try {
						const t = c ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (k(t)) {
								if (w(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (O(t)) {
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
									e(b(u)), p = !0
								}
							} else p = !1
						}
					} catch (v) {
						p = !1
					}
					p || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !w(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, E = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.J)(i);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return le
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return me
			})), s.d(t, "commentsPagePending", (function() {
				return ue
			})), s.d(t, "commentsPageLoaded", (function() {
				return pe
			})), s.d(t, "commentsPageFailed", (function() {
				return he
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return be
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return ge
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return fe
			})), s.d(t, "commentsPageRequested", (function() {
				return xe
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ve
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return ye
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Ce
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/reddit/actions/category/index.ts"),
				o = s("./src/reddit/actions/discoveryUnit.ts"),
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
				v = s("./src/reddit/actions/platform.ts"),
				y = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/presence.ts"),
				_ = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/constants/graphql.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Subreddit/index.ts"),
				F = s("./src/reddit/models/User/index.ts"),
				M = s("./src/reddit/selectors/category.ts"),
				A = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				R = s("./src/reddit/selectors/experiments/postSeo.ts"),
				D = s("./src/reddit/selectors/experiments/removedPosts.ts"),
				B = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				V = s("./src/reddit/selectors/platform.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				U = s("./src/lib/makeActionCreator/index.ts"),
				q = s("./src/lib/makeCommentsPageKey/index.ts"),
				K = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/helpers/canonicalUrls.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				J = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Z = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Q = s("./src/reddit/actions/gold/powerups.ts"),
				X = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				$ = s("./src/lib/performanceTimings/index.tsx"),
				ee = s("./src/reddit/constants/experiments.ts"),
				te = s("./src/reddit/helpers/chooseVariant/index.ts");
			const se = e => {
				var t, s;
				const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					r = n && Object(p.r)(n),
					{
						sortToUse: o
					} = Object(S.a)(e, r);
				return (!o || o === h.r.CONFIDENCE) && Object(te.c)(e, {
					experimentEligibilitySelector: () => Object(H.I)(e),
					experimentName: ee.r
				}) === ee.t.Enabled
			};
			var ne = s("./src/reddit/selectors/chatPost.ts"),
				re = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				oe = s("./src/reddit/selectors/realtimeComments.ts"),
				ie = s("./src/reddit/selectors/seo/index.ts"),
				ae = s("./src/reddit/actions/pages/constants.ts"),
				de = s("./src/lib/initializeClient/installReducer.ts"),
				ce = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(de.a)({
				pages: {
					comments: ce.a
				}
			});
			const le = 25,
				me = 100,
				ue = Object(U.a)(ae.h),
				pe = Object(U.a)(ae.f),
				he = Object(U.a)(ae.e),
				be = (e, t, s) => {
					const n = !e,
						r = Object(W.D)(t, {
							postId: s
						}),
						o = r.belongsTo,
						i = Object(z.L)(t, {
							identifier: o
						}),
						a = Object(ie.c)(t, {
							identifier: o
						}),
						d = {
							listingBelow: !1,
							postFeed: !1,
							postImageOCRAltText: !1,
							postQASchema: !1
						};
					return Object(ie.b)(t) ? d.listingBelow = a || n : d.postFeed = (a || n) && (!Object(N.g)(i) && !Object(ne.d)(t, {
						postId: s
					}) && !!i || !Object(V.h)(t) && Object(R.e)(t)), e && (d.postImageOCRAltText = Object(R.c)(r) && !!Object(R.b)(t, r, !1), d.postQASchema = Object(R.f)(t, r)), d
				},
				ge = (e, t) => e || t.postFeed || t.listingBelow || t.postImageOCRAltText || t.postQASchema,
				fe = e => ({
					includePostFeed: e.postFeed,
					includeListingBelowExperiment: e.listingBelow,
					includePostImageOCRAltText: e.postImageOCRAltText,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				xe = e => async (t, s) => {
					var o, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(p.r)(d) : "", u = c && Object(L.f)(c), {
						path: g,
						queryParams: C
					} = e, w = Object(x.d)(g), {
						instanceId: O
					} = C, {
						hasSortParam: I,
						sortToUse: N
					} = Object(S.a)(s(), m), F = null === (i = null === (o = Object(V.b)(s())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === i ? void 0 : i.route.chunk, A = ["context", "depth", "limit", j.f].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: I,
						instanceId: O,
						include_categories: !0
					});
					I && (A.sort = N), A.onOtherDiscussions = w, t(y.m(m)), await t(ve(m, u, A, N));
					const R = s().posts.models[m],
						B = Object(H.J)(s());
					if (R && "subreddit" === R.belongsTo.type) {
						const e = R.belongsTo.id,
							s = Object($.i)(() => t(Object(Q.g)(e, {
								fullData: !0,
								includeIdentity: B
							})), {
								name: "subredditPowerupsRequested",
								page: F,
								isLoggedIn: B
							});
						await s
					}
					if (R) {
						const o = ((e, t) => {
								const s = Object(W.P)(e, {
										postId: t
									}),
									n = Object(W.D)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(z.L)(s(), {
								identifier: R.belongsTo
							});
						if (i && Object(D.a)(s())) return void t(Object(n.c)(i.url));
						if ((R.media && R.media.type) === T.o.LIVEVIDEO) {
							const e = `/rpan${R.belongsTo.type===P.a.SUBREDDIT?i.url:"/"}${Object(p.s)(R.id)}`;
							return void t(Object(n.c)(e))
						}
						if (R.belongsTo.type !== P.a.SUBREDDIT || R.isSponsored) {
							if (R.belongsTo.type === P.a.PROFILE) {
								const e = Object($.i)(() => t(_.d(i.name)), {
									name: "getProfileInfo",
									page: F,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(z.S)(s(), {
									subredditId: R.belongsTo.id
								})) {
								const e = Object($.i)(() => t(k.o(i.name)), {
									name: "getSubredditRules",
									page: F,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = be(!1, s(), m),
							c = Object(re.a)(s()),
							l = w;
						if (ge(l, d)) {
							Object(Y.d)(Y.a.LinkedPosts);
							const e = Object(Y.c)(Y.a.LinkedPosts),
								n = {
									adContext: {
										layout: E.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.Wb.WEEK.toUpperCase(),
									sort: h.I.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								o = {
									correlationId: e,
									experimentVariant: c
								},
								a = fe(d);
							Object($.i)(() => t(Object(X.a)({
								...r,
								...n,
								...o,
								...a,
								includeOtherDiscussions: l
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: F
							});
							0
						}
						t(Object(f.p)()), t(v.l({
							title: o
						}));
						const u = s().posts.instances[m] ? e.queryParams.instanceId : R.postId;
						t(Object(a.b)(u)); {
							const e = Object(M.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(r.c(e))))
						}
					} else t(v.l({
						title: b.c()
					}));
					const {
						routePrefix: U
					} = e.params;
					P.b[U] === P.a.PROFILE ? Object(G.d)(s(), t, e) : Object(G.b)(s(), t, e)
				}, ve = (e, t, s, n) => async (r, a, d) => {
					var p, b, f;
					const x = a(),
						_ = Object(q.a)(e, t, s),
						{
							subredditName: k
						} = s,
						E = x.pages.comments.keyToHeadCommentId.hasOwnProperty(_),
						j = x.pages.comments.api.fullyLoaded[_],
						P = x.pages.comments.api.error[_],
						S = x.pages.comments.api.pending[_],
						L = !Object(H.I)(x),
						T = Object(H.i)(x),
						N = n === h.r.CHAT,
						M = !!x.platform.lastPage;
					if ((S || E && !P) && !(N && M)) {
						if (E && !x.sidebarPromotedPosts.firstFetch) {
							const e = Object(V.h)(x) ? Z.a.COMMENTS_OVERLAY : Z.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(K.b)(e))
							})
						}
						return void(j || r(Ce(e, t, s)))
					}
					r(o.g());
					const R = x.user.prefs.commentMode;
					r(ue({
						key: _,
						postId: e,
						commentMode: R
					}));
					const D = {
						...s,
						...N ? {
							sort: h.r.LIVE
						} : L ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(W.D)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > me && (D.truncate = le)
					}
					const B = null === (b = null === (p = Object(V.b)(x)) || void 0 === p ? void 0 : p.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						z = Object($.i)(() => Object(l.a)(d.apiContext(), e, t, D, Object(A.a)(a()), Object(oe.a)(a()), se(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !L,
							page: B
						}),
						U = !L && T && Object($.i)(() => Object(u.d)(d.gqlContext(), Object(F.e)(T)), {
							name: "fetchProfileKarma",
							isLoggedIn: !L,
							page: B
						}) || null,
						[G, Y] = await Promise.all([z, U]);
					let Q;
					if (r(Object(v.m)(G.status)), G.ok) {
						const t = Object.keys(G.body.posts).filter(e => !!G.body.posts[e].isMeta),
							s = G.body.posts[e];
						if (t.length) {
							const e = Object($.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: B,
									isLoggedIn: !L
								}),
								n = await e;
							n.ok && (Q = n.body)
						}
						if (Y && Y.ok) {
							const e = null === (f = Y.body.data.redditorInfoByName) || void 0 === f ? void 0 : f.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							G.body && G.body.account && Object.assign(G.body.account, t)
						}
						const n = Object(I.a)(G.body, e, x);
						r(pe({
							key: _,
							postId: e,
							meta: x.meta,
							governance: Q,
							shouldCollapse: n,
							...G.body
						}));
						const o = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null,
							i = G.body.comments,
							a = G.body.posts;
						await r(Object(C.b)(a, i, o))
					} {
						const n = Object(W.D)(a(), {
							postId: e
						});
						n && G.body.comments && Object.keys(G.body.comments).length < n.numComments ? r(Ce(e, t, s)) : G.ok && r(ye({
							key: _
						}));
						const o = Object(V.h)(x) ? Z.a.COMMENTS_OVERLAY : Z.a.COMMENTS;
						r(Object(K.b)(o))
					}
					if (G.ok) {
						r(w.g(_));
						const t = Object(W.D)(a(), {
							postId: e
						});
						if (r(y.u(t, O.a.CommentsView)), t && "subreddit" === t.belongsTo.type && G.body.comments) {
							const e = Object($.i)(() => r(Object(g.a)({
								commentIds: Object.keys(G.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: B,
								isLoggedIn: !L
							});
							await e
						}
					} else {
						let e;
						k && (r(Object(i.subredditPending)({
							key: _
						})), e = await Object(J.a)("subreddit", () => Object(m.a)(d.apiContext(), k, {})), r(Object(v.m)(e.status)), r(Object(i.handleSubredditPageApiError)(e, k))), r(he({
							error: G.error,
							key: _,
							...e ? e.body : G.body
						}))
					}
				}, ye = Object(U.a)(ae.g), Ce = (e, t, s) => async (n, r, o) => {
					var i;
					const a = Object(q.a)(e, t, s),
						c = r(),
						m = Object(H.J)(c),
						p = Object(H.i)(c),
						h = Object(l.a)(o.apiContext(), e, t, s, Object(A.a)(c), Object(oe.a)(c), se(c)),
						b = m && p && Object(u.d)(o.gqlContext(), Object(F.e)(p)) || null,
						[f, x] = await Promise.all([h, b]);
					if (n(Object(v.m)(f.status)), f.ok) {
						if (x && x.ok) {
							const e = null === (i = x.body.data.redditorInfoByName) || void 0 === i ? void 0 : i.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							f.body && f.body.account && Object.assign(f.body.account, t)
						}
						const t = Object(I.a)(f.body, e, c);
						n(pe({
							key: a,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...f.body
						})), n(ye({
							key: a
						}));
						const s = r().posts.models[e],
							o = s && Object(W.P)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(B.a)(c, {
							subredditId: o.id
						}) && n(Object(d.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && f.body.comments && await n(Object(g.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(he({
						error: f.error,
						key: a,
						...f.body
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
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/doubleclickForPublishers/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(f),
				v = s("./src/lib/lessComponent.tsx");
			const y = v.a.div("Container", x.a),
				C = v.a.div("LoadingHitbox", x.a),
				_ = e => setTimeout(() => {
					throw e
				}, 0);
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					_(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						_(r)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						_(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= a.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(g.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						_(e)
					}
					this.loader && m.a(this.loader, e => {
						this.isWithinLoadingDistance = !0, this.refreshedOnce || (this.frame && l.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.refresh(this.props), this.refreshedOnce = !0), this.props.isRefreshableAd && (!this.refreshInterval && e.isIntersecting && null != this.props.refreshCount ? this.props.refreshCount < a.a.dfpRefreshSlotIntervalLimit && (this.refreshInterval = window.setInterval(this.refreshPeriodically.bind(this), a.a.dfpRefreshSlotInterval)) : this.refreshInterval && !e.isIntersecting && (window.clearInterval(this.refreshInterval), this.refreshInterval = null))
					})
				}
				componentWillUnmount() {
					this.loader && m.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && l.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3) return this.refresh(e), void(this.refreshedOnce = !0)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(y, {
						"data-slot": t
					}, r.a.createElement(C, {
						key: `${e}-loadinghitbox`,
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: `${e}-div`,
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			k.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(o.b)(() => Object(i.c)({
				properties: Object(u.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = `${e.meta.protocol}://${e.meta.domain}`;
					return Object(p.b)(t.placement, e.user, Object(d.a)(`${n}${s.url}`, s.queryParams), Object(h.A)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? l.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.c)(k))
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

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
				}) => o.a.createElement("div", {
					className: Object(m.a)(p.a.spacer, {
						[p.a.isCommentBoxDesign]: e,
						[p.a.isTopLevelComment]: t
					})
				}, s),
				v = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				y = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				C = e => o.a.createElement(x, e, e.isCommentBoxDesignEnabled ? o.a.createElement(y, null) : o.a.createElement(v, null), o.a.createElement(d.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				_ = f(C),
				k = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				w = e => o.a.createElement(k, h({}, e, {
					fallback: o.a.createElement(_, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = w
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
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.div("Wrapper", p.a), g = a.a.span("Copy", p.a), f = a.a.wrapped(l.j, "SignupLink", p.a), x = a.a.wrapped(l.m, "LoginLink", p.a);
			t.a = Object(c.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: n,
				openRegisterModal: a,
				origin: c,
				sendEvent: l
			}) => r.a.createElement(b, {
				className: Object(o.a)(e, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, r.a.createElement(g, {
				className: Object(o.a)({
					[p.a.LiveStreamingCopy]: t
				})
			}, h._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), r.a.createElement(x, {
				href: Object(d.a)(s, c, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), l(Object(m.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Log In", null, {
				hk: "ZR3pC"
			})), r.a.createElement(f, {
				className: Object(o.a)({
					[p.a.LiveStreamingSignupLink]: t
				}),
				href: Object(d.a)(s, c, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), l(Object(m.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Sign Up", null, {
				hk: "48wH4o"
			}))))
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
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				v = s("./src/reddit/models/Toast/index.ts");
			const y = (e, t) => async (s, r, {
				apiContext: o
			}) => {
				const i = await (async (e, t, s) => Object(g.a)(Object(f.a)(e, [x.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.cb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(o(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(h.L)({
						[e]: {
							suggestedSort: t
						}
					}));
					const r = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: r
					}))
				} else s(b.f({
					id: a,
					kind: v.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: y(e, t)
				}))
			};
			var C = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				w = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const L = (e, t, s, n, r) => o => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.listing)(o, void 0, {
						oldSort: s,
						sort: n,
						source: r
					}),
					userSubreddit: Object(S.userSubreddit)(o)
				}),
				T = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				N = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				F = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...N
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/tooltip.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				U = s.n(H),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(w.a)(E.a),
				G = l.a.wrapped(M.b, "DropdownTriangle", U.a),
				Y = l.a.div("HighlightWrapper", U.a),
				J = l.a.div("Title", U.a),
				Z = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== q.a.None) {
							e(t === q.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", q.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", q.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", q.a.None)
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
						selectedSort: r
					} = this.props;
					return o.a.createElement(Y, null, o.a.createElement(J, {
						onClick: s
					}, n.fbt._("highlight comments since", null, {
						hk: "3AxAbU"
					})), o.a.createElement(j.b, {
						className: Object(d.a)(U.a.HighlightPicker, U.a.Row),
						displayText: Z(r),
						id: t,
						onClick: s
					}), o.a.createElement(G, {
						onClick: s
					}), o.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(j.b, {
						displayText: Z(q.a.First),
						isSelected: r === q.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(j.b, {
						displayText: Z(q.a.Last),
						isSelected: r === q.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(j.b, {
						displayText: Z(q.a.None),
						isSelected: r === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = Q;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(w.a)(E.a),
				ne = l.a.button("ContestMode", U.a),
				re = l.a.wrapped(M.b, "DropdownTriangle", U.a),
				oe = l.a.wrapped(A.a, "Info", U.a),
				ie = l.a.wrapped(j.b, "Row", U.a),
				ae = l.a.button("SetSort", U.a),
				de = l.a.button("SortLink", U.a),
				ce = l.a.div("Title", U.a),
				le = l.a.wrapped(P.a, "ToggleSwitch", U.a),
				me = l.a.wrapped(k.a, "ViewFullLinkOrOverlayLink", U.a),
				ue = l.a.wrapped(_.c, "Tooltip", U.a),
				pe = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(D.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(W.b)($),
					highlightIsOpen: Object(W.b)(ee),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.j)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: V.D,
					postPermalink: V.C,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(z.r)(e),
							n = !!Object(B.j)(e, {
								postId: t
							}),
							r = Object(V.D)(e, {
								postId: t
							});
						return (n || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: D.p
				}),
				he = Object(i.b)(pe, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(u.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: $
					})),
					onOpenHighlightDropdown: t => {
						e(Object(m.h)({
							tooltipId: ee
						})), t()
					},
					onSetSuggestedSort: s => e(y(t, s)),
					hideTooltip: () => e(Object(m.i)()),
					setContestMode: s => e(Object(h.P)(s, t)),
					showTooltip: () => e(Object(m.h)({
						tooltipId: te
					})),
					toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
				}));
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(L(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(T("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(F(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: r,
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
						sort: v,
						suggestedSort: y,
						showTooltip: _,
						toggleContestModeModal: k
					} = this.props, w = b.contestMode, O = !h.search.includes(c.r.CONFIDENCE), E = v === c.r.CONFIDENCE && O, P = u && !E, S = c.t[v], L = S ? S() : "", N = y && v === y && !E ? this.addSuggestedLabel(L) : L, F = w ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), M = w ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), A = w ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), R = w && !u;
					return o.a.createElement("div", {
						className: Object(d.a)(t, U.a.container, {
							[U.a.hideCommentSort]: !x && R
						}),
						ref: a
					}, !R && o.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, n.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !R && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie, {
						className: Object(d.a)(U.a.SortPicker, U.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: N,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), o.a.createElement(re, {
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(se, {
						isOpen: i,
						tooltipId: $
					}, [c.r.CONFIDENCE, c.r.TOP, c.r.NEW, c.r.CONTROVERSIAL, c.r.OLD, c.r.QA].map(e => {
						const t = s || g,
							n = Object(I.b)(t),
							r = c.t[e],
							i = r ? r() : "";
						return o.a.createElement(me, {
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, o.a.createElement(j.b, {
							displayText: i,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), P && !R && (y ? o.a.createElement(de, {
						onClick: v !== y ? this.setSortOnClick : this.clearSortOnClick
					}, v !== y ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : o.a.createElement(ae, null, o.a.createElement(de, {
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), o.a.createElement("span", {
						id: te,
						onMouseEnter: _,
						onMouseLeave: l
					}, o.a.createElement(ue, {
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), o.a.createElement(oe, null)))), u && o.a.createElement(ne, {
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), o.a.createElement(le, {
						on: w
					})), x && o.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: T
					}), r && o.a.createElement(C.a, {
						actionText: M,
						headerText: F,
						modalText: A,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(O.c)(be))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
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
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
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
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
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
				commentRedesignUserIconContainerStyles: "_2RMBS5Q81VaTtm4cd463Su",
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
				deleted: "JXi1tOUWoiFa2P02WKo2R",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				commentHeaderRedesign: "_3jJ0c2FXVItDFjup-54-X2",
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
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
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
		"./src/reddit/components/Comments/MoreCommentsItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = d.a.div("MoreCommentsItemWrapper", p.a), g = d.a.p("MoreComments", p.a), f = d.a.wrapped(g, "MoreCommentsInteractive", p.a), x = Object(i.c)({
				moreCommentsItem: m.B,
				moreCommentsPending: m.C
			}), v = Object(o.b)(x, (e, t) => ({
				moreCommentsClicked: () => e(Object(c.j)(t.commentsPageKey, t.moreCommentsId))
			})), y = ({
				isActive: e,
				moreCommentsClicked: t,
				moreCommentsItem: s,
				moreCommentsPending: n,
				onMoreCommentsItemClick: o,
				count: i
			}) => r.a.createElement(b, null, n ? r.a.createElement(g, null, h._("loading...", null, {
				hk: "47z89"
			})) : r.a.createElement(l.a.Consumer, null, n => r.a.createElement(f, {
				className: Object(a.a)({
					[p.a.isActive]: e
				}),
				onClick: () => {
					i && o ? (o(), n("load_more_comment_live")()) : t && (t(), (null == s ? void 0 : s.isFromLiveWebSocket) ? n("load_more_comment_live")() : n("load_more_comment")())
				}
			}, h._({
				"*": "{number of more replies hidden} more replies",
				_1: "1 more reply"
			}, [h._plural(s ? s.numComments : i || 0, "number of more replies hidden")], {
				hk: "J0jQW"
			}))));
			t.b = v(y)
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment-index-tsx",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment-index-tsx").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
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
				return N
			})), s.d(t, "a", (function() {
				return H
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
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				_ = s.n(C);
			const k = l.a.wrapped(v.a, "CommentsIcon", _.a),
				w = l.a.wrapped(y.a, "SnooFacepalm", _.a),
				O = l.a.p("EmptyTitle", _.a),
				E = l.a.p("ErrorTitle", _.a),
				j = l.a.p("EmptyText", _.a),
				P = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(_.a.StateContainer, e)
				}, a.a.createElement(k, null), a.a.createElement(O, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(j, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				I = () => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(O, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(j, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(O, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(p.k, {
					to: Object(b.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(w, null), a.a.createElement(E, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(p.i, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(_.a.StateContainer, _.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				N = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(u.a, null)), "LoadingFullPage", _.a),
				F = l.a.div("CommentsPlaceholderContainer", _.a),
				M = l.a.div("CommentPlaceholder", _.a),
				A = l.a.div("Avatar", _.a),
				R = l.a.div("VoteColumn", _.a),
				D = l.a.div("TextColumn", _.a),
				B = l.a.wrapped(x.b, "Upvote", _.a),
				V = l.a.wrapped(f.b, "Downvote", _.a),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(_.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				z = () => a.a.createElement("div", {
					className: Object(c.a)(_.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(F, null, o()(10, t => a.a.createElement(M, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(A, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(R, null, a.a.createElement(B, null), a.a.createElement(V, null)), a.a.createElement(D, null, a.a.createElement(W, null), a.a.createElement(z, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				topLevel: "_3cea2-bu-AjagXhuQfp9Zu",
				commentHeaderRedesign: "jG4sBhex54vPOvOy57LBD",
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
			var n, r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				h = s("./src/reddit/constants/comments.ts"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/constants/gold.ts"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/components/LottieAnimation/index.tsx"),
				y = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				C = s.n(y);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const _ = {
				threshold: [.75, .001]
			};
			var k = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, r] = Object(i.useState)(!1),
					o = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && r(!1), t <= .001 && r(!0)
						})
					}, []);
				Object(x.a)(t, o, _);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(C.a.effectContainer, C.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === n.Lottie && a.a.createElement(v.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const w = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: O,
							effectHighlight: {
								type: n.Lottie,
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
					return e.map(P).filter(e => e !== j)
				}(e) : [])
			}
			const j = {
				glowHexColor: null,
				effectHighlight: null
			};

			function P(e) {
				for (const t of w) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return j
			}
			var I, S, L = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				T = s("./src/reddit/selectors/comments.ts"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				F = s("./src/reddit/selectors/communityAwards.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				D = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/hooks/useTracking.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				W = s("./src/lib/makeDraftKey/index.ts"),
				z = s("./src/lib/objectSelector/index.ts"),
				H = s("./src/reddit/helpers/trackers/powerups.ts"),
				U = s("./src/reddit/actions/comment/authoring.ts"),
				q = s("./src/reddit/actions/comment/moderation.ts"),
				K = s("./src/reddit/actions/gold/powerups.ts"),
				G = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Y = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				J = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				Z = s.n(J),
				Q = u.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(Y.a, null)), "Component", Z.a),
				X = s("./node_modules/lodash/defer.js"),
				$ = s.n(X),
				ee = s("./src/reddit/actions/tooltip.ts"),
				te = s("./src/reddit/selectors/tooltip.ts"),
				se = s("./src/lib/makeCommentPermalink/index.ts"),
				ne = s("./src/reddit/actions/gold/modals.ts"),
				re = s("./src/reddit/actions/modal.ts"),
				oe = s("./src/reddit/actions/reportFlow/index.ts"),
				ie = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ae = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				de = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ce = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				pe = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				he = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				ge = s.n(be);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(I || (I = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(S || (S = {}));
			const fe = (e, t) => {
					const s = ge.a[t],
						n = ge.a[e];
					return Object(l.a)(s, n)
				},
				xe = e => Object(l.a)(ge.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[ge.a.isInOverlay]: e.isInOverlay,
					[ge.a.isModModeEnabled]: e.isModModeEnabled
				});
			var ve = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				ye = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Ce = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_e = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ke = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				we = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Oe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Ee = s("./src/reddit/components/ReportFlow/index.tsx"),
				je = s("./src/reddit/components/ReportFlow/new.tsx"),
				Pe = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Se = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Le = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Te = s("./src/reddit/helpers/trackers/modTools.ts"),
				Ne = s("./src/reddit/layout/row/Inline/index.tsx"),
				Fe = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				Me = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ae = s("./src/reddit/icons/fonts/index.tsx"),
				Re = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				De = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Be = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				We = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Save/index.tsx"),
				He = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				qe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ke = s.n(qe);
			const Ge = u.a.wrapped(Re.a, "CommentIcon", Ke.a),
				Ye = u.a.wrapped(We.a, "Report", Ke.a),
				Je = u.a.wrapped(Be.a, "IgnoreReport", Ke.a),
				Ze = u.a.wrapped(ke.a, "ModActionsMenu", Ke.a),
				Qe = u.a.div("OverflowMenuSpacer", Ke.a),
				Xe = u.a.wrapped(Oe.a, "DropdownRow", Ke.a),
				$e = u.a.wrapped(Ne.a, "Flatlist", Ke.a),
				et = u.a.button("Button", Ke.a),
				tt = u.a.wrapped(ve.a, "ModToolsFlatlist", Ke.a),
				st = u.a.wrapped(Se.a, "ViewReportsDropdown", Ke.a),
				nt = e => `Comment-${e}--Modal--DeleteComment`,
				rt = e => `Distinguish--Dropdown--${e}`,
				ot = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: le.b,
					currentUser: R.i,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(ce.a)(e) === nt(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(te.b)(rt(t.id))(e),
					isInIcons2020: ue.a,
					isPendingDeletion: (e, {
						comment: t
					}) => Object(T.A)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(te.b)(it(t.id))(e),
					isLoggedIn: R.J,
					postIsArchived: (e, {
						comment: t
					}) => Object(A.x)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(A.y)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(A.C)(e, {
						postId: t.postId
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(T.H)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(me.x)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(A.P)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: pe.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(de.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Te.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Te.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Te.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ie.d)(ie.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Te.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Te.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Te.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Te.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(je.a, {
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
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: r,
						handleReply: o,
						isAvatarsInCommentsEnabled: d,
						isInIcons2020: c,
						isLoggedIn: m,
						isPendingDeletion: u,
						onDistinguishComment: p,
						onIgnoreReports: h,
						onToggleReportsDropdown: b,
						moderatorPermissions: g,
						modModeEnabled: f,
						postIsArchived: x,
						postIsLocked: v,
						postPermalink: y,
						renderedInOverlay: C,
						sendEvent: _,
						subreddit: k,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: O,
						toggleSendReplies: E,
						trackCommentClick: j
					} = this.props, P = Object(ae.a)(g), L = !!s && s.displayText === e.author, T = !!s && s.isEmployee, N = !(w && w.userIsBanned) && (v || x || P && m || e.isLocked ? P && m : m || d), F = Object(we.a)(e), M = P && !f && L && !e.bannedBy, A = L && T && !e.bannedBy, R = M || A, B = s && e.isGildable, V = [];
					N && V.push(a.a.createElement(et, {
						disabled: u,
						key: "reply",
						onClick: () => {
							o(), $()(() => j("reply", e.id)())
						}
					}, a.a.createElement(Ge, null), D.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), B && V.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Fe.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => D.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), V.push(a.a.createElement(Pe.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: Object(se.a)(y, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: k
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, D.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), L || V.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(We.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => D.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), V.push({
						breakpointGroup: S.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(Me.f, null) : a.a.createElement(ze.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => D.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => D.fbt._("Save", null, {
							hk: "4lbZXG"
						})
					}), L && V.push({
						breakpointGroup: S.LoggedInUser,
						icon: c ? a.a.createElement(Ae.a, {
							name: "edit"
						}) : a.a.createElement(He.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => D.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					});
					const W = V.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: fe(e.breakpointGroup, I.HideIfVWSmaller),
							disabled: u,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						z = V.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Xe, {
							className: fe(e.breakpointGroup, I.HideIfVWLarger),
							displayText: e.text(),
							iconWrapperClassName: Ke.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Ke.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(xe({
							depth: r,
							isInOverlay: C,
							isModModeEnabled: P && f
						}), t)
					}, W, a.a.createElement(Qe, {
						className: L ? void 0 : fe(S.LoggedInUser, I.HideIfVWLarger)
					}, a.a.createElement(Oe.b, {
						className: Ke.a.overflowMenu,
						disabled: u,
						dropdownId: ot(e.id),
						onClick: () => _(Object(Te.a)("comment_overflow_menu", e.id))
					}, z, L && a.a.createElement(a.a.Fragment, null, a.a.createElement(Xe, {
						displayText: D.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						iconWrapperClassName: Ke.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Ke.a.dropdownRowText
					}, c ? a.a.createElement(Ae.a, {
						name: "delete"
					}) : a.a.createElement(Ue.b, null)), a.a.createElement(Le.a, {
						text: D.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: E,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(Ce.a, {
						actionText: D.fbt._("delete", null, {
							hk: "1XDeYp"
						}),
						cancelActionText: D.fbt._("keep", null, {
							hk: "bO09f"
						}),
						headerText: D.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: D.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: n,
						toggleModal: O,
						trackClick: () => {},
						withOverlay: !0
					}), P && a.a.createElement(a.a.Fragment, null, f && a.a.createElement(tt, {
						className: fe(S.Moderator, I.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: L
					}), a.a.createElement(Ze, {
						className: f ? fe(S.Moderator, I.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(Te.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(Ve.a, null), a.a.createElement(he.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(we.c)(e) && !f && a.a.createElement(ye.a, {
						text: `${F}`,
						onClick: () => {
							b(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							h(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(Je, null) : a.a.createElement(Ye, null)), R && a.a.createElement(ye.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(De.a, null), a.a.createElement(_e.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: T,
						isUserMod: P,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: rt(e.id)
					}))), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(U.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(re.i)(nt(t.id))), e(Object(ee.h)({
							tooltipId: ot(t.id)
						}))
					},
					handleEdit: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(U.d)({
							commentId: t.id,
							draftKey: Object(W.a)(V.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(U.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onDistinguishComment: (s, n) => e(Object(q.b)(t.id, s, n)),
					onGildClick: (s, n) => e(Object(ne.d)({
						awardId: n,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(q.g)(t.id)),
					onReportClick: () => e(Object(oe.c)(t.id)),
					onToggleSave: () => e(Object(p.k)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(ee.h)({
						tooltipId: rt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(ee.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(re.i)(nt(t.id))),
					toggleSendReplies: () => e(Object(U.k)(t.id))
				}))(Object(Ie.c)(dt)),
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
				vt = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				yt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Ct = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_t = s("./src/reddit/components/RichTextJson/index.tsx"),
				kt = s("./src/reddit/components/UserIcon/index.tsx"),
				wt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ot = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				Et = s("./src/reddit/constants/componentTestIds.ts"),
				jt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Pt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				It = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				St = s("./node_modules/raf/index.js"),
				Lt = s.n(St);

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Ft = a.a.createContext(!1);
			class Mt extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Lt()(this.setVisible)
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
					} = this.state, n = {
						...Nt,
						...t
					};
					return a.a.createElement(It.a, Tt({}, n, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Ft.Provider, {
						value: s
					}, e)))
				}
			}
			var At = s("./src/reddit/controls/ErrorText/index.tsx"),
				Rt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Dt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Bt = s("./src/reddit/helpers/flair.ts"),
				Vt = s("./src/reddit/models/Comment/index.ts"),
				Wt = s("./src/reddit/models/Subreddit/index.ts"),
				zt = s("./src/reddit/models/User/index.ts"),
				Ht = s("./src/reddit/models/Vote/index.ts"),
				Ut = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				qt = s("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				Kt = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Gt = s("./src/reddit/selectors/gold/powerups.ts"),
				Yt = s("./src/reddit/selectors/poll/index.ts"),
				Jt = s("./src/reddit/selectors/userPrefs.ts"),
				Zt = s("./src/reddit/selectors/moderatingComments.ts"),
				Qt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Xt = s.n(Qt),
				$t = s("./src/config.ts");

			function es() {
				return (es = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ts = u.a.wrapped(Q, "ExpandButton", Xt.a),
				ss = u.a.wrapped(ct, "FlatList", Xt.a),
				ns = u.a.wrapped(At.b, "ErrorText", Xt.a),
				rs = u.a.wrapped(xt.a, "HorizontalVotes", Xt.a),
				os = u.a.div("ActionBar", Xt.a),
				is = u.a.wrapped(gt.a, "TopMeta", Xt.a),
				as = u.a.div("CommentContentWrapper", Xt.a),
				ds = u.a.div("CommentWrapper", Xt.a),
				cs = u.a.div("CommentBody", Xt.a),
				ls = u.a.wrapped(vt.b, "AuthorHovercard", Xt.a),
				ms = Object(jt.t)(),
				us = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(N.a)(e, t),
					currentProfileModPermissions: jt.g,
					depth: (e, t) => Object(T.j)(e, t),
					collapsed: Zt.b,
					collapsedBecauseCrowdControl: Zt.a,
					currentUser: R.i,
					flair: T.e,
					focused: T.t,
					highlightAnimationDisabled: Jt.c,
					isAuthorPresent: T.y,
					isEditing: T.z,
					isLoggedIn: R.J,
					isCommentHeaderRedesignEnabled: qt.a,
					isPendingDeletion: T.A,
					isPresenceConsumptionExpEnabled: Kt.a,
					isPresenceTogglePref: R.hb,
					moderatorPermissions: (e, t) => {
						const s = Object(N.a)(e, t);
						return s ? Object(M.k)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Yt.f,
					isTopSupporter: (e, t) => {
						const s = Object(N.a)(e, t);
						if (!s) return !1;
						const n = Object(jt.q)(e, t);
						return !!n && Object(Gt.b)(e, {
							subredditId: n.id,
							userId: s.authorId
						})
					},
					modModeEnabled: jt.Q,
					errorMsgs: T.F,
					replyFormOpen: T.I,
					subreddit: jt.q,
					subredditType: T.K
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: n,
					trackCommentClick: r
				}) => ({
					onCollapseClick: () => e(Object(p.l)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: n
					})),
					onIgnoreReports: () => e(Object(q.g)(t)),
					onOpenPowerupsModal: () => e(Object(K.c)()),
					onVoteClick: s => {
						const [n, o] = s === Ht.a.upvoted ? [Object(p.n)(t), "upvote_comment"] : [Object(p.i)(t), "downvote_comment"];
						r(o, t)(), e(n)
					}
				})),
				ps = Object(z.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				hs = e => a.a.createElement("div", e, e.children),
				bs = e => a.a.createElement(a.a.Fragment, null, e.children),
				gs = ms(us(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: r,
						collapsed: o,
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
						isActive: v,
						isAuthorPresent: y,
						isAvatarsInCommentsEnabled: C,
						isCommentHeaderRedesignEnabled: _,
						isEditing: w,
						isFirstInList: O,
						isHighlighted: E,
						isLoggedIn: j,
						isPendingDeletion: P,
						isPresenceConsumptionExpEnabled: I,
						isPresenceTogglePref: S,
						isTopSupporter: L,
						moderatorPermissions: T,
						modModeEnabled: N,
						onCollapseClick: F,
						onIgnoreReports: M,
						onLineMouseOver: A,
						onVoteClick: R,
						onOpenPowerupsModal: z,
						prediction: q,
						replyFormOpen: K,
						subreddit: Y,
						trackCommentClick: J,
						renderedInOverlay: Z,
						subredditType: Q,
						onPresenceIndicatorInViewport: X
					} = e, $ = Object(B.a)(), ee = n.isDeleted, te = !w && !ee && !!p && p.length > 0, se = Object(W.a)(V.c.edit, n.id), ne = Object(W.a)(V.c.replyToComment, n.id), re = Object(ae.a)(T), oe = n.authorIsContractor && Q === Wt.e.EmployeesOnly, ie = n.isLocked, de = re && N, ce = !w && !ee && (j || C), le = !!m && Object(zt.e)(m) === n.author, [me, ue] = Object(i.useState)(null), [pe, he] = Object(i.useState)(null), be = Object(Vt.e)(n) ? hs : Rt.a, ge = Object(Vt.e)(n) ? bs : ls;
					Object(i.useEffect)(() => {
						if (!w && !ee && (g && ue(a.a.createElement(bt, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								ue(a.a.createElement(ut, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								he(a.a.createElement(k, {
									prefersReducedAnimation: f,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [w, ee, g, f, x]);
					const fe = Object(i.useContext)(Ft),
						xe = I && !ee && !Object(Vt.e)(n) && (le && S || !le && y),
						ve = Object(i.useCallback)(() => {
							xe && !le && X && X(n.id)
						}, [n.id, X, xe, le]),
						ye = Object(wt.a)(n);
					return a.a.createElement(ds, {
						className: Object(l.a)(`Comment ${n.id}`, Xt.a.CommentWrapper, {
							[Xt.a.highlightComment]: E,
							[Xt.a.deleted]: ee,
							[Xt.a.focused]: b,
							[Xt.a.redesign]: C,
							[Xt.a.topLevel]: !u,
							[Xt.a.commentHeaderRedesign]: _
						})
					}, me, pe, !w && !ee && O && a.a.createElement("div", {
						className: Xt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${$t.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), (o || _) && a.a.createElement(ts, {
						className: Object(l.a)(n.id, {
							[Xt.a.commentHeaderRedesign]: _,
							[Xt.a.hidden]: !o,
							[Xt.a.visible]: o
						}),
						onClick: () => {
							s(), F(), J("collapse", n.id)()
						},
						onMouseOver: () => A(n.id),
						onMouseOut: s
					}), (!o || _) && a.a.createElement(ge, {
						alwaysShowChildren: !0,
						hoverDivClassName: Xt.a.AuthorHoverDiv,
						postOrComment: n,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: Z ? Ct.c.Lightbox : void 0
					}, a.a.createElement(be, {
						className: Object(l.a)(Xt.a.UserIconContainer, {
							[Xt.a.commentHeaderRedesign]: _
						}),
						to: `/user/${n.author}/`
					}, fe ? a.a.createElement(kt.a, {
						className: Xt.a.UserIcon,
						iconUrl: n.profileImage,
						isNSFW: n.profileOver18 || !1,
						nsfwIconUrl: "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png",
						userName: n.author,
						isHighlighted: E,
						shouldShowPresenceIndicator: xe,
						onPresenceIndicatorInViewport: ve
					}) : a.a.createElement("div", {
						className: Xt.a.UserIcon
					}), L && a.a.createElement(Ot.a, {
						onClick: e => {
							$(Object(H.p)("comment")), z(), e.stopPropagation(), e.preventDefault()
						},
						className: Xt.a.topSupporterIcon,
						title: D.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))), a.a.createElement(as, {
						className: Object(l.a)({
							[Xt.a.isActive]: v,
							[Xt.a.isCollapsed]: o,
							[Xt.a.isLocked]: ie && de,
							[Xt.a.isPendingDeletion]: P,
							[Xt.a.isRemoved]: !!n.bannedBy && de,
							[Xt.a.commentHeaderRedesign]: _
						})
					}, a.a.createElement(Dt.a, null, D.fbt._("level {depth}", [D.fbt._param("depth", u + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(is, {
						childrenInfo: t,
						className: Object(l.a)({
							[Xt.a.collapsed]: o,
							[Xt.a.commentHeaderRedesign]: _,
							[Xt.a.noFlair]: Object(Bt.o)(h || null)
						}),
						collapsed: o,
						collapsedBecauseCrowdControl: d,
						comment: n,
						commentsPageKey: r,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: Z,
						renderContractorBadge: oe
					}), !o && a.a.createElement(i.Fragment, null, w && a.a.createElement(G.a, {
						className: Object(l.a)(Xt.a.EditCommentForm, Xt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: r,
						depth: u,
						draftType: V.c.edit,
						draftKey: se,
						rtJson: Object(wt.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(U.i)({
							id: n.id,
							commentsPageKey: r,
							depth: u,
							draftKey: se,
							formData: e
						}),
						submitButtonText: D.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !w && !ee && a.a.createElement(cs, {
						"data-test-id": Et.d
					}, q ? a.a.createElement(ft.a, {
						comment: n,
						prediction: q
					}) : a.a.createElement(_t.a, {
						content: ye,
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ps(e)
					}), a.a.createElement(Ut.b, {
						content: ye
					})), N && re && Object(we.c)(n) && a.a.createElement(yt.a, {
						onIgnoreReports: M,
						reportable: n
					}), ce && a.a.createElement(os, null, C && a.a.createElement(rs, {
						downvoteButtonClassName: Xt.a.voteButton,
						downvoteClassName: Xt.a.upDownVote,
						model: n,
						onVoteClick: R,
						scoreClassName: Xt.a.score,
						upvoteButtonClassName: Xt.a.voteButton,
						upvoteClassName: Xt.a.upDownVote
					}), a.a.createElement(ss, {
						comment: n,
						commentsPageKey: r,
						depth: u,
						isAvatarsInCommentsEnabled: C,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: N,
						moderatorPermissions: c || T,
						renderedInOverlay: Z,
						subreddit: Y,
						trackCommentClick: J
					})), te && p.map(e => a.a.createElement(ns, {
						key: e
					}, e)), K && a.a.createElement(G.a, {
						className: Object(l.a)(Xt.a.EditCommentForm, Xt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: r,
						depth: u,
						draftType: V.c.replyToComment,
						draftKey: ne,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(U.r)({
							commentsPageKey: r,
							draftKey: ne,
							parentCommentDepth: u,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}) : Object(U.l)({
							commentsPageKey: r,
							draftKey: ne,
							parentCommentDepth: u,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: D.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var fs = e => a.a.createElement(Pt.a.Consumer, null, t => a.a.createElement(gs, es({}, e, {
					trackCommentClick: t
				}))),
				xs = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				vs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ys = s("./src/reddit/helpers/path/index.ts"),
				Cs = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_s = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				ks = s.n(_s);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Os = u.a.div("Wrapper", ks.a), Es = u.a.wrapped(Cs.a, "ArrowRight", ks.a), js = u.a.wrapped(xs.a, "LinkOrOverlayLink", ks.a), Ps = u.a.span("HoverSpan", ks.a), Is = Object(c.c)({
				permalink: (e, t) => Object(T.m)(e, {
					commentId: Object(T.r)(e, t).parentId
				})
			});
			var Ss = Object(d.b)(Is)(Object(vs.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(Os, {
					className: Object(l.a)({
						[ks.a.isActive]: e
					})
				}, a.a.createElement(js, {
					isOverlay: !!t,
					to: Object(ys.b)(s)
				}, a.a.createElement(Ps, null, ws._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Es, null))))),
				Ls = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Ts = s("./node_modules/lodash/times.js"),
				Ns = s.n(Ts),
				Fs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Ms = s.n(Fs);
			const As = u.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", Ms.a),
				Rs = u.a.div("LineContainer", Ms.a),
				Ds = u.a.div("ShortLineContainer", Ms.a);
			var Bs = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: r,
						onLineMouseOver: o,
						onLineMouseOut: i,
						onShortLineClick: c,
						parentNodeIds: m,
						type: u
					} = e, p = Object(d.e)(qt.a);
					return a.a.createElement(Rs, null, Ns()(s + 1, e => e === s ? u !== h.a.Comment || t ? null : a.a.createElement(Ds, {
						key: m[e]
					}, a.a.createElement(As, {
						className: Object(l.a)(m[e], {
							[Ms.a.hasGlowBorder]: !!n,
							[Ms.a.topLevel]: 0 === s,
							[Ms.a.commentHeaderRedesign]: p
						}),
						onClick: c,
						onMouseOver: () => o(m[e]),
						onMouseOut: () => i(m[e])
					})) : a.a.createElement(As, {
						className: m[e],
						key: m[e],
						onClick: r(e),
						onMouseOver: () => o(m[e]),
						onMouseOut: () => i(m[e])
					})))
				},
				Vs = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Ws = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				zs = s.n(Ws);
			const Hs = u.a.div("CommentListNodeWrapper", zs.a),
				Us = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(g.f)
				},
				qs = () => {
					const e = document.querySelectorAll(`.${g.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var Ks = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Zt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(T.l)(e, t),
				depth: (e, t) => Object(T.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const n = Object(T.l)(e, {
						commentLink: t
					});
					if (n && t.type === h.a.Comment) {
						s = E(n.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: Vs.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(T.l)(e, {
						commentLink: t
					});
					return !(t.type !== h.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(F.a)(e, t);
						return s && s.coinPrice >= f.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(T.p)(e);
					if (s === L.a.None) return !1;
					if (t.type !== h.a.Comment) return !1;
					const n = t.id,
						r = Object(N.a)(e, {
							commentId: n
						});
					if (!r) return !1;
					const o = Object(R.r)(e),
						i = !!Object(M.j)(e, {
							postId: r.postId
						}),
						a = Object(A.D)(e, {
							postId: r.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === L.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || o) && r.created > d
				}
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: n
			}) => ({
				onLineClick: r => () => {
					e(Object(p.c)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: r,
						scrollToAndRemeasure: n
					}))
				},
				onShortLineClick: () => e(Object(p.l)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: n
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: r,
					commentsPageKey: o,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: u,
					isFirstInList: p,
					isHidden: g,
					isHighlighted: f,
					onLineClick: x,
					onPresenceIndicatorInViewport: v,
					onShortLineClick: y,
					parentNodeIds: C,
					renderedInOverlay: _,
					scrollToAndRemeasure: k
				} = e, w = !!u, O = !(!d || !d.glowHexColor), E = O && i > 0, j = O, P = a.a.createElement(Hs, {
					className: Object(l.a)(s, {
						[zs.a.isHidden]: g,
						[zs.a.glowBorderTopPadding]: E,
						[zs.a.glowBorderBottomPadding]: j
					}),
					id: r.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (r.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(Bs, {
					collapsed: n,
					depth: i,
					hasGlowBorder: E,
					onLineClick: x,
					onLineMouseOver: Us,
					onLineMouseOut: qs,
					onShortLineClick: y,
					type: r.type,
					parentNodeIds: C
				}), Gs({
					childrenInfo: t,
					clearHovered: qs,
					commentLink: r,
					commentsPageKey: o,
					onLineMouseOver: Us,
					hasAwardGradient: w,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: p,
					isHighlighted: f,
					renderedInOverlay: _,
					scrollToAndRemeasure: k,
					onPresenceIndicatorInViewport: v
				}));
				return m && r.type === h.a.Comment ? a.a.createElement(Mt, null, P) : P
			});
			const Gs = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: n,
				hasAwardGradient: r,
				highlightTreatment: o,
				isActive: i,
				isAvatarsInCommentsEnabled: d,
				isFirstInList: c,
				isHighlighted: l,
				onLineMouseOver: m,
				renderedInOverlay: u,
				scrollToAndRemeasure: p,
				onPresenceIndicatorInViewport: b
			}) => {
				switch (s.type) {
					case h.a.Comment:
						return a.a.createElement(fs, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: n,
							hasAwardGradient: r,
							highlightTreatment: o,
							isActive: i,
							isAvatarsInCommentsEnabled: d,
							isFirstInList: c,
							isHighlighted: l,
							onLineMouseOver: m,
							renderedInOverlay: u,
							scrollToAndRemeasure: p,
							onPresenceIndicatorInViewport: b
						});
					case h.a.MoreComments:
						return a.a.createElement(Ls.b, {
							commentsPageKey: n,
							isActive: i,
							moreCommentsId: s.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(Ss, {
							id: s.id,
							isActive: i
						})
				}
			};
			var Ys = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Js = s("./src/reddit/components/Comments/States/index.tsx"),
				Zs = s("./src/reddit/components/Scroller/Simple.tsx"),
				Qs = s("./src/reddit/constants/elementIds.ts"),
				Xs = s("./src/reddit/featureFlags/index.ts"),
				$s = s("./src/reddit/helpers/commentList/index.ts"),
				en = s("./src/reddit/helpers/trackers/comment.ts"),
				tn = s("./src/reddit/selectors/realtimeComments.ts"),
				sn = s("./src/telemetry/index.ts"),
				nn = s("./src/lib/LRUCache/index.ts"),
				rn = s("./src/reddit/actions/comment/websocket/index.ts"),
				on = s("./src/reddit/components/Comments/index.m.less"),
				an = s.n(on);
			const dn = b.f + 10,
				cn = 65,
				ln = u.a.wrapped(Zs.b, "Scroller", an.a),
				mn = Object(c.c)({
					allCollapsed: T.a,
					commentLinks: T.k,
					commentThreadLinkSet: T.o,
					isRealtimeCommentsExperimentEnabled: tn.a,
					liveCommentsWebsocket: A.B,
					measureScrollFPS: Xs.d.measureScrollFPS,
					moreComments: T.b,
					postPermalink: A.C
				}),
				un = Object(d.b)(mn, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(p.d)(t)),
					onCommentLeftViewport: (t, s) => e(Object(p.g)(t, s)),
					onLiveCommentsEnd: (t, s) => e(Object(rn.b)(t, s)),
					onLiveCommentsSubscribe: (s, n, r) => e(Object(rn.a)(s, n, r, t.subredditId))
				})),
				pn = new nn.a(500),
				hn = new nn.a(500),
				bn = (e, t) => {
					const s = `entered-${e}`;
					let n = pn.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, pn.set(s, n)), n
				},
				gn = (e, t) => {
					const s = `left-${e}`;
					let n = hn.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, hn.set(s, n)), n
				};
			class fn extends a.a.Component {
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
						}), this.props.sendEvent(Object(en.b)(e)))
					}, this.parentNodeIdsMap = {}, Ys.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentLinks: t,
						commentsPageKey: s,
						allCollapsed: n,
						commentThreadLinkSet: r,
						isRealtimeCommentsExperimentEnabled: o,
						liveCommentsWebsocket: i,
						moreComments: a,
						onLiveCommentsSubscribe: d,
						postId: c
					} = this.props;
					this.timerId && sn.c.cancel(this.timerId), t.length && (this.timerId = sn.c.start()), o && i && d && !e && (d(s, i, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = i), this.findHiddenNodes(t, n, r, a)
				}
				componentDidMount() {
					this.timerId && Object(sn.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: sn.c.end(this.timerId)
					})
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: r,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !o()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, r, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !o()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && sn.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = sn.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(sn.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: sn.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					const {
						commentId: e,
						isRealtimeCommentsExperimentEnabled: t,
						onLiveCommentsEnd: s
					} = this.props;
					this.timerId && sn.c.cancel(this.timerId), t && this._subscribedPostId && this._subscribedLiveCommentsWebsocket && s && !e && s(this._subscribedLiveCommentsWebsocket, this._subscribedPostId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let r = null,
						o = 1 / 0,
						i = 0,
						a = !1;
					Ys.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						r && (s[c.id].depth > o ? (Ys.a(c.id), i += Object($s.d)(c, n), c.type === h.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[r] = {
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
						renderedInOverlay: o
					} = this.props, i = bn(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: r
					}), d = gn(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: r
					});
					return {
						estHeight: Ys.b(e.id) ? 0 : cn,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: ({
							placeholderRecommended: n,
							height: r,
							width: i,
							scrollToAndRemeasure: d
						}) => n ? a.a.createElement("div", {
							style: {
								height: r,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(Ks, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: Ys.b(e.id),
							scrollToAndRemeasure: d,
							renderedInOverlay: !!o,
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
						measureScrollFPS: n,
						renderedInOverlay: r
					} = this.props;
					let o;
					if (n) {
						o = `comments-${r?"lightbox":"page"}`
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(ln, {
						className: Object(l.a)(an.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(Qs.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: dn,
						trackingName: o
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(Js.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(Js.c, null)
				}
			}
			t.a = un(Object(Ie.c)(fn))
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
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null))
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
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
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
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				_ = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				k = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/featureFlags/component.tsx"),
				O = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/postSeo.ts"),
				P = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const N = Object(w.a)("spPoints", h.a),
				F = Object(w.a)("spLeaderboard", b.a),
				M = Object(n.a)({
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
				A = Object(c.c)({
					isLoggedIn: S.J,
					postSEOV2IdCardVariant: j.i,
					shouldShowReredditPromo: P.a,
					widgets: Object(u.a)(I.s)
				}),
				R = Object(d.b)(A);
			class D extends a.a.Component {
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
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: r,
						isFakeOverlay: o,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(j.d)(i) && !Object(j.g)(i);
					return a.a.createElement(y.a, {
						adComponentOnFakeOverlay: o,
						adComponent: d ? a.a.createElement(x.a, {
							postId: r.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: O.a.BOTTOM,
							refreshKey: r.id,
							sizes: m.n,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: n,
						post: r,
						postSEOV2IdCardVariant: o,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: u
					} = this.props;
					let h = 0;
					const b = Object(j.d)(o) || Object(j.g)(o),
						y = a.a.createElement(x.a, {
							postId: r.id,
							isOverlay: n,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: O.a.FIRST,
							refreshKey: r.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(E.o)(r) ? a.a.createElement(M, {
						profileName: c,
						isOverlay: n || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: c,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: b
					}), a.a.createElement(p.a, {
						cardClassName: T.a.card,
						subredditId: d
					}), a.a.createElement(N, {
						className: T.a.card,
						subredditId: d,
						uniqueId: r.id
					}), a.a.createElement(F, {
						className: T.a.card,
						subredditId: d,
						uniqueId: r.id
					}), a.a.createElement(f.a, {
						subredditId: d
					}), y, s && u.map((e, t) => a.a.createElement(v.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(k.a, {
						subredditName: c,
						widget: e
					}))), r.isSponsored && a.a.createElement(v.a, null, a.a.createElement(C.a, null)), i && a.a.createElement(_.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(h++))
				}
			}
			t.a = R(D)
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = s("./src/reddit/selectors/experiments/postSeo.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				f = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "500px", y = 3, C = Object(i.c)({
				hasDismissedTruncation: p.b,
				isGQLLoggedIn: b.I,
				isLoggedIn: b.J,
				isPostSEOEligible: h.e,
				postSEOV2TruncatedVariant: h.j
			}), _ = Object(o.b)(C);
			class k extends r.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: o,
						innerRef: i,
						isCommentsListTruncated: d,
						isGQLLoggedIn: p,
						isLoggedIn: h,
						isOverlay: b,
						numberOfComments: g,
						onClick: C,
						subredditOrProfile: _
					} = this.props, k = !(!_ || Object(m.g)(_)), w = d && k && (g >= y && !b || !o) && (!p && !h), O = w && !e, E = w ? f.a.TruncatedComments : "";
					return r.a.createElement("div", {
						onClick: C,
						ref: i
					}, r.a.createElement("div", {
						className: Object(a.a)(f.a.ContentWrapper, s, E),
						style: {
							"--commentswrapper-gradient-color": Object(u.a)(this.props).body,
							maxHeight: w ? v : "unset"
						}
					}, t), O && r.a.createElement(l.i, {
						className: f.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, x._("View Entire Discussion ({number of comments} Comments)", [x._param("number of comments", Object(c.b)(g))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(_(k))
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
				return b
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
				h = .5;
			class b extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < h || this.state.sentOncePerRender)) {
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
						threshold: h
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
				h = s("./src/reddit/components/HeaderImage/index.m.less"),
				b = s.n(h);
			const g = d.a.wrapped(m.a, "Planet", b.a),
				f = d.a.div("SubredditIcon", b.a),
				x = d.a.div("PositionedImage", b.a),
				v = d.a.div("HeaderContent", b.a),
				y = d.a.div("HeaderContainer", b.a),
				C = d.a.span("HeaderText", b.a),
				_ = d.a.wrapped(o.a, "HeaderUrl", b.a),
				k = d.a.span("Container", b.a),
				w = Object(a.a)(e => {
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
						h = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						w = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						O = `${4+w}px`;
					return r.a.createElement(k, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, r.a.createElement(_, {
						className: e.className,
						to: e.url
					}, r.a.createElement(y, {
						className: Object(i.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(v, {
						className: Object(i.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(f, {
						style: {
							backgroundImage: `url(${s})`,
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
					})), r.a.createElement(C, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), r.a.createElement(x, {
						className: Object(i.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!o,
							[b.a.hoverPositionedImage]: !!o && !!a
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = w
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
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.tsx"),
				o = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(o);
			const a = n.a.wrapped(r.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: r,
						tooltipType: o
					} = e;
					let i = r;
					return s && (i = `${i}--${s}`), o && (i = `${i}--${o}`), t && (i = `${i}--${t}`), n && (i = `${i}--${n}`), i
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
					title: d
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
				}), n ? r.a.createElement(c, null, n) : r.a.createElement(c, null), r.a.createElement(l, null, r.a.createElement("div", {
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
				color: i.b.locked,
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
				return b
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
				h = e => Object(c.g)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return o.a.createElement(l.a, {
					className: u.a.bannerBase,
					color: a.b.locked,
					icon: p,
					subtitle: n.fbt._("New comments cannot be posted", null, {
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
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = o.a.createElement(m.a, {
					className: b.a.icon
				}),
				f = Object(a.c)({
					subreddit: u.A,
					subredditAboutInfo: u.x
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
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: o.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", o.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? o.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: r
					}) : i, " ", o.a.createElement(l.a, {
						className: b.a.link,
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
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: n,
					...o
				} = e, c = Object(a.b)(n);
				return r.a.createElement(i.a, d({
					className: s,
					to: c
				}, o), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, n = t ? c : o.a;
				return r.a.createElement(n, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lottie-web/build/player/lottie.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/LottieAnimation/util.ts");
			const d = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: s,
						assetUrl: n,
						className: d,
						hidden: c,
						loop: l,
						onClick: m,
						prefersReducedAnimation: u
					} = e,
					[p, h] = Object(o.useState)(s);
				Object(o.useEffect)(() => {
					n ? Object(a.a)(n).then(h) : s && h(s)
				}, [n, s]);
				const [b, g] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !p) return;
					const s = r.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: p
					});
					g(s)
				}, [l, t, b, p]), Object(o.useEffect)(() => {
					if (b)
						if (c) b.stop();
						else if (u) {
						const e = b.getDuration(!0);
						b.goToAndPlay(e, !0)
					} else b.goToAndPlay(0)
				}, [c, u, b]);
				const f = Object(o.useCallback)(() => {
					b && b.goToAndPlay(0)
				}, [b]);
				return i.a.createElement("div", {
					className: d,
					style: {
						display: c ? "none" : "block"
					},
					ref: t,
					onClick: m || f
				})
			});
			t.a = d
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function r(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				d = s("./src/reddit/constants/posts.ts"),
				c = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				u = s.n(m);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: n,
				shouldShowSubscribeButton: m,
				subredditOrProfile: p,
				templatePlaceholderImage: h
			}) => r.a.createElement("div", {
				className: Object(o.a)(u.a.thumbnailContainer, {
					[u.a.mShowingButtonOrOverflow]: m
				})
			}, r.a.createElement("div", {
				className: u.a.thumbnailContainerRow
			}, m && p && r.a.createElement(i.a, {
				className: u.a.subscribeButton,
				getEventFactory: e => Object(c.f)(t.id, e ? "unsubscribe" : "subscribe"),
				identifier: {
					name: p.name,
					type: Object(l.g)(p) ? d.a.PROFILE : d.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), r.a.createElement(a.a, {
				crosspost: e,
				post: t,
				redditStyle: n,
				forceShowNSFW: s,
				templatePlaceholderImage: h
			}))
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
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
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
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
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				x = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				O = s.n(w),
				E = s("./node_modules/react-motion/lib/react-motion.js");
			const j = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				P = {},
				I = (e = [], t) => {
					const s = O()(e, {
							key: "expando_content"
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(E.spring)(1, j)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(E.spring)(0, j)
						}
					}]
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), P), this.state = {
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
					return i.a.createElement(E.TransitionMotion, {
						styles: e => I(e, t),
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
			var L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				N = s("./src/reddit/models/Vote/index.ts"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				M = s("./src/reddit/selectors/experiments/categories.ts"),
				A = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				R = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				B = s("./src/reddit/selectors/postCreations.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				H = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				U = s("./src/reddit/components/AwardBadges/index.tsx"),
				q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				K = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				G = s("./src/reddit/components/ExpandoButton/index.tsx"),
				Y = s("./src/reddit/components/FlairWrapper/index.tsx"),
				J = s("./src/reddit/components/Flatlist/index.tsx"),
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Q = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				X = s("./src/reddit/components/ModModeReports/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/PostContainer/index.tsx"),
				te = s("./src/higherOrderComponents/makeAsync.tsx"),
				se = s("./src/lib/loadWithRetries/index.ts"),
				ne = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const re = Object(te.a)({
				ErrorComponent: () => i.a.createElement(ne.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(se.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(ne.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var oe = e => i.a.createElement(re, e),
				ie = s("./src/reddit/components/PostList/index.tsx"),
				ae = s("./src/reddit/components/PostMedia/index.tsx"),
				de = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ce = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				le = s("./src/reddit/components/PostTitle/index.tsx"),
				me = s("./src/reddit/components/PostTopLine/index.tsx"),
				ue = s("./src/reddit/components/PostTopMeta/index.tsx"),
				pe = s("./src/reddit/components/SourceLink/index.tsx"),
				he = s("./src/reddit/constants/componentTestIds.ts"),
				be = s("./src/reddit/constants/postLayout.ts"),
				ge = s("./src/reddit/contexts/PageLayer/index.tsx"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				xe = s("./src/reddit/selectors/postFlair.ts"),
				ve = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ye = s("./src/reddit/constants/colors.ts"),
				Ce = s("./src/config.ts"),
				_e = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ke = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				we = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Oe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Ee = s.n(Oe);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pe = () => je._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [je._param("=User Agreement", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, je._("User Agreement", null, {
				hk: "3MHgRl"
			}))), je._param("=Content Policy", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, je._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Ie = () => je._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [je._param("=User Agreement", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, je._("User Agreement", null, {
				hk: "yMHtU"
			}))), je._param("=Content Policy", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, je._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var Se = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: r
				} = e, o = t ? ((e, t, s) => {
					switch (e) {
						case T.f.AntiEvilOps:
							return je._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case T.f.Author:
							return je._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case T.f.AuthorDeleted:
							return je._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case T.f.AutomodFiltered:
							return je._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case T.f.CommunityOps:
							return je._("This post was removed by Reddit admin, u/{username}.", [je._param("username", t)], {
								hk: "34nHWu"
							});
						case T.f.ContentTakedown:
							return je._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case T.f.CopyrightTakedown:
							return je._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case T.f.Moderator:
							return je._("This post was removed by r/{subredditName} moderator, u/{username}.", [je._param("subredditName", s), je._param("username", t)], {
								hk: "270bcn"
							});
						case T.f.Reddit:
							return je._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return je._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, r) : ((e, t) => {
					switch (e) {
						case T.f.AntiEvilOps:
							return je._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case T.f.Author:
							return je._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case T.f.AuthorDeleted:
							return je._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case T.f.AutomodFiltered:
							return je._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case T.f.CommunityOps:
							return je._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case T.f.ContentTakedown:
							return je._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case T.f.CopyrightTakedown:
							return je._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case T.f.Moderator:
							return je._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [je._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case T.f.Reddit:
							return je._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return je._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, r), a = t ? (e => {
					switch (e) {
						case T.f.AntiEvilOps:
							return i.a.createElement(Pe, null);
						case T.f.AuthorDeleted:
						case T.f.Author:
							return je._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case T.f.AutomodFiltered:
							return je._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case T.f.CommunityOps:
							return je._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [je._param("=just ask", i.a.createElement("a", {
								className: Ee.a.link,
								href: `${Ce.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, je._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case T.f.ContentTakedown:
							return i.a.createElement(Ie, null);
						case T.f.CopyrightTakedown:
							return je._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case T.f.Moderator:
							return je._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case T.f.Reddit:
							return je._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return je._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case T.f.AntiEvilOps:
							return i.a.createElement(Pe, null);
						case T.f.AuthorDeleted:
						case T.f.Author:
							return je._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case T.f.AutomodFiltered:
							return je._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [je._param("=[subreddit name]", i.a.createElement("a", {
								className: Ee.a.link,
								href: `${Ce.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, je._("{subreddit name}", [je._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case T.f.CommunityOps:
							return je._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case T.f.ContentTakedown:
							return i.a.createElement(Ie, null);
						case T.f.CopyrightTakedown:
							return je._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case T.f.Moderator:
							return je._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case T.f.Reddit:
						default:
							return je._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, r), d = t ? ye.b.warning : ye.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case T.f.AntiEvilOps:
						case T.f.AutomodFiltered:
						case T.f.CommunityOps:
						case T.f.ContentTakedown:
						case T.f.CopyrightTakedown:
						case T.f.Reddit:
							t = _e.a;
							break;
						case T.f.AuthorDeleted:
						case T.f.Author:
							t = we.b;
							break;
						case T.f.Moderator:
							t = ke.a;
							break;
						default:
							t = _e.a
					}
					return i.a.createElement(t, {
						className: Ee.a.icon
					})
				})(n);
				return i.a.createElement(ve.a, {
					className: Ee.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: o
				})
			};

			function Le(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(Se, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var Te = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ne = s("./src/lib/prettyPrintNumber/index.ts"),
				Fe = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Me = s.n(Fe);
			var Ae = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: n
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Ne.b)(e.viewCount);
						return {
							upvotePercentString: Te.fbt._("{percent upvoted}% Upvoted", [Te.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Te.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Te.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), r = t && !!e.viewCount;
					return i.a.createElement("div", {
						className: Me.a.viewCounts
					}, r && i.a.createElement("span", null, n), r && !!e.upvoteRatio && i.a.createElement("span", {
						className: Me.a.dotSpacer
					}), !!e.upvoteRatio && i.a.createElement("span", null, s))
				},
				Re = s("./src/reddit/components/PostContent/index.m.less"),
				De = s.n(Re);
			const {
				fbt: Be
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ve = u.a.wrapped(le.c, "PostTitle", De.a), We = u.a.wrapped(G.a, "ExpandoButton", De.a), ze = u.a.wrapped(S, "ClassicExpandoMotion", De.a), He = u.a.wrapped(J.c, "FullWidthFlatlist", De.a), Ue = u.a.wrapped(q.a, "ClassicThumbnail", De.a), qe = i.a.createElement("p", {
				className: De.a.VideoProcessingStatus
			}, Be._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), Ke = Object(ge.t)({
				isCommentsPage: ge.w,
				pageLayer: e => e
			}), Ge = Object(a.b)(() => Object(c.c)({
				activeModalId: F.a,
				flairStyleTemplate: ge.S,
				currentUser: W.i,
				crosspost: V.d,
				hideNSFWPref: W.B,
				imageGalleryCurrentItem: V.i,
				isAdminOrMod: (e, t) => {
					const s = Object(V.P)(e, {
						postId: t.postId
					});
					return !!s && Object(R.a)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: V.k,
				isExpanded: V.l,
				post: V.D,
				moderatorPermissions: D.j,
				modModeEnabled: ge.Q,
				isInCategoriesExperiment: M.a,
				showAwardsPlaque: A.a,
				showEditFlair: xe.a,
				subredditOrProfile: V.P,
				isEditing: B.K,
				userIsOp: W.pb
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(h.S)(s)),
				onOpenReportsDropdown: t => e(Object(k.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const n = t === N.a.upvoted ? Object(h.V)(s) : Object(h.r)(s);
					e(n)
				},
				fireAdPixelsOfType: (t, s) => e(Object(h.u)(t, s)),
				openPost: t => e(Object(h.E)(t))
			})), Ye = u.a.wrapped(d.a, "ThumbLink", De.a), Je = ({
				post: e,
				templatePlaceholderImage: t
			}) => e.source ? i.a.createElement(Ue, {
				post: e,
				forceShowNSFW: !0,
				templatePlaceholderImage: t
			}) : i.a.createElement(Ye, {
				to: Object(y.b)(e.permalink)
			}, i.a.createElement(Ue, {
				post: e,
				forceShowNSFW: !0
			})), Ze = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(ze, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ae.a, {
					className: De.a.ClassicPostMedia,
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
			t.a = Ke(Ge(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: a,
					flairStyleTemplate: d,
					forceOpenInNewTab: c,
					hideNSFWPref: u,
					isActionBarAnimationEnabled: h,
					imageGalleryCurrentItem: y,
					isAdminOrMod: k,
					isCommentsPage: w,
					isCurrentUserProfilePost: O,
					isEditing: E,
					isExpanded: j,
					isOverlay: P,
					moderatorPermissions: I,
					modModeEnabled: S,
					onIgnoreReports: N,
					onOpenReportsDropdown: F,
					openPost: M,
					onVoteClick: A,
					post: R,
					scrollerItemRef: D,
					sendEvent: B,
					showAwardsPlaque: V,
					showEditFlair: W,
					subredditOrProfile: q,
					userIsOp: G
				} = e, te = R.isSponsored ? Object(ie.b)(R.id, {
					fireAdPixelsOfType: a,
					openPost: M
				}) : r.a, se = Object(v.a)(I), ne = Object(f.a)(I), re = Object(x.a)(I), ge = se || ne, xe = ((e, t, s) => {
					const [n, r] = e ? [Object(g.e)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || r
				})(n, ge, R), ve = !!R.media && (R.media.type === L.o.RTJSON || R.media.type === L.o.TEXT), ye = G && ve, Ce = Object($.c)(R);
				let _e;
				const ke = !(S && v.a),
					we = Object(de.h)({
						hide: ke,
						editPost: ke,
						save: ke,
						report: ke
					}),
					Oe = R.removedByCategory === T.f.AuthorDeleted,
					Ee = n && (n.displayText === R.author || n.username === R.author),
					je = !Oe && (Ee || k || !(R.removedByCategory && R.media && (Object(L.J)(R.media) || Object(L.H)(R.media)))),
					Pe = Object(l.t)(R, y),
					{
						source: Ie
					} = Pe,
					Se = R.removedByCategory === T.f.Reddit && Object(p.e)(R.created) > 24,
					Te = R.removedByCategory && R.removedByCategory !== T.f.Reddit || Se,
					Ne = i.a.createElement(Ve, {
						post: R,
						size: le.b.ExtraLarge,
						showCategoryTag: P,
						isOverlay: P,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Fe = i.a.createElement(Ae, {
						post: R,
						showViewCount: xe
					}),
					Me = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? be.g.Classic : t ? be.g.Large : n.media ? be.g.Large : be.g.Medium
					})(e);
				if (Me === be.g.Classic) _e = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(ce.a, {
					model: R,
					handleVote: A,
					subreddit: q,
					isOverlay: P,
					isActionBarAnimationEnabled: h,
					postId: R.id,
					isForceSelected: !P && h
				}), i.a.createElement("div", {
					className: De.a.mainBody
				}, i.a.createElement("div", {
					className: De.a.content
				}, i.a.createElement(me.a, {
					hideAwards: V,
					hideNSFWPref: u,
					inSubredditOrProfile: !0,
					isCommentsPage: w,
					isCurrentUserProfilePost: O,
					isOverlay: !!P,
					isTopicPage: !1,
					post: R,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!P && !R.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: q
				}), Ne, i.a.createElement(Y.a, {
					className: w ? De.a.leftPadding : void 0,
					post: R,
					showCategoryTag: e.isInCategoriesExperiment && w,
					sendEvent: B
				}), S && se && Ce && i.a.createElement(X.a, {
					onIgnoreReports: N,
					reportable: R
				}), i.a.createElement(Z.d, null), i.a.createElement("div", {
					className: De.a.FlatlistContainer
				}, i.a.createElement(We, {
					crosspost: s || void 0,
					isExpanded: !!j,
					post: R,
					useMediaIcons: !1
				}), Ze(e), V && i.a.createElement(U.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: R,
					tooltipType: P ? ue.c.Lightbox : void 0
				}), i.a.createElement(He, {
					currentUser: n,
					hasModFlairPerms: ne,
					hasModFullPerms: re,
					hasModPostPerms: se,
					isOverlay: P,
					onIgnoreReports: N,
					onOpenReportsDropdown: F,
					modModeEnabled: S,
					post: R,
					showUpvotePercent: !0,
					showViewCount: xe,
					useFlatlistBreakpoints: we,
					isActionBarAnimationEnabled: h,
					isForceSelected: !P && h
				}))), Object(b.a)(R) && i.a.createElement(Je, {
					post: R,
					templatePlaceholderImage: d && d.postPlaceholderImage
				})));
				else if (Me === be.g.Medium) {
					const t = Object(b.a)(R);
					_e = i.a.createElement("div", {
						"data-test-id": he.e
					}, i.a.createElement(ce.a, {
						model: R,
						handleVote: A,
						subreddit: q,
						isOverlay: P,
						isActionBarAnimationEnabled: h,
						postId: R.id,
						isForceSelected: !P && h
					}), i.a.createElement("div", {
						className: De.a.mainBody
					}, i.a.createElement("div", {
						className: De.a.content
					}, i.a.createElement(me.a, {
						hideAwards: V,
						hideNSFWPref: u,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: O,
						isOverlay: !!P,
						isTopicPage: !1,
						post: R,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!P && !R.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: q
					}), Ne, R.source && i.a.createElement(pe.a, {
						post: R,
						isCommentsPage: w
					}), Object(L.L)(R) && qe, i.a.createElement(Y.a, {
						className: w ? De.a.leftPadding : void 0,
						post: R,
						showCategoryTag: e.isInCategoriesExperiment && w,
						sendEvent: B
					}), q && Te && i.a.createElement(Le, {
						isAdminOrMod: k,
						post: R,
						subredditOrProfile: q
					}), S && se && Ce && i.a.createElement(X.a, {
						onIgnoreReports: N,
						reportable: R
					})), t && i.a.createElement(Q.a, {
						post: R,
						forceShowNSFW: !0,
						hasModPostPerms: ge,
						isCommentsPage: w,
						isOverlay: !0,
						modModeEnabled: S,
						templatePlaceholderImage: d && d.postPlaceholderImage,
						subredditOrProfile: q
					})), i.a.createElement(Z.d, null), V && i.a.createElement(U.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: R,
						tooltipType: P ? ue.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: De.a.controlsContainer
					}, i.a.createElement(J.c, {
						currentUser: n,
						hasModFlairPerms: ne,
						hasModFullPerms: re,
						hasModPostPerms: se,
						isOverlay: P,
						modModeEnabled: S,
						onIgnoreReports: N,
						onOpenReportsDropdown: F,
						post: R,
						showEditPost: ye,
						showEditFlair: W,
						tooltipType: P ? ue.c.Lightbox : void 0,
						useFlatlistBreakpoints: we,
						isActionBarAnimationEnabled: h,
						isForceSelected: !P && h
					}), Fe))
				} else Me === be.g.Large && (_e = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(ce.a, {
					model: R,
					handleVote: A,
					subreddit: q,
					isOverlay: P,
					isActionBarAnimationEnabled: h,
					postId: R.id,
					isForceSelected: !P && h
				}), i.a.createElement(me.a, {
					forceOpenInNewTab: c,
					hideAwards: V,
					hideNSFWPref: u,
					inSubredditOrProfile: !0,
					isCommentsPage: w,
					isCurrentUserProfilePost: O,
					isOverlay: !!P,
					isTopicPage: !1,
					post: R,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!P && !R.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: q
				}), Ne, ((e, t, s, n) => e.source && !t && (s || n))(R, s, P, w) && i.a.createElement(pe.a, {
					post: R,
					isCommentsPage: w
				}), i.a.createElement(Y.a, {
					className: w ? De.a.leftPadding : void 0,
					post: R,
					showCategoryTag: e.isInCategoriesExperiment && w,
					sendEvent: B
				}), q && Te && i.a.createElement(Le, {
					isAdminOrMod: k,
					post: R,
					subredditOrProfile: q
				}), E ? i.a.createElement(oe, {
					post: R
				}) : je && i.a.createElement(ae.a, {
					className: Object(m.a)(De.a.LargePostMedia, {
						[De.a.isCommentsPage]: w
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: P,
					isOverlay: P,
					post: R,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !P,
					showCentered: !0,
					scrollerItemRef: D
				}), R.isSponsored && Ie && Ie.url && i.a.createElement(z.a, {
					className: De.a.adLinkWrapper
				}, i.a.createElement(H.a, {
					post: R,
					adLinkContent: Pe
				})), S && se && Ce && i.a.createElement(X.a, {
					onIgnoreReports: N,
					reportable: R
				}), i.a.createElement(Z.d, null), V && i.a.createElement(U.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: R,
					tooltipType: P ? ue.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: De.a.controlsContainer
				}, i.a.createElement(J.c, {
					currentUser: n,
					forceOpenInNewTab: c,
					hasModFlairPerms: ne,
					hasModFullPerms: re,
					hasModPostPerms: se,
					isOverlay: P,
					modModeEnabled: S,
					onIgnoreReports: N,
					onOpenReportsDropdown: F,
					post: R,
					showEditPost: ye,
					showEditFlair: W,
					tooltipType: P ? ue.c.Lightbox : void 0,
					useFlatlistBreakpoints: we,
					isActionBarAnimationEnabled: h,
					isForceSelected: !P && h
				}), Fe)));
				const Re = Object(o.useCallback)((e, t) => Object(_.f)(e, t), []);
				return i.a.createElement(ee.a, {
					className: Object(m.a)(t, De.a.postContainer, {
						[De.a.hasEventMeta]: Object(fe.a)(R)
					}),
					isOverlay: P,
					post: R,
					eventFactory: P ? C.b : Re,
					onClick: te
				}, i.a.createElement(K.a, {
					post: R
				}), _e)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Y
			})), s.d(t, "a", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				C = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				_ = s("./src/reddit/components/Scroller/Simple.tsx"),
				k = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				N = s("./src/lib/LRUCache/index.ts"),
				F = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				A = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(A);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = 500, V = new N.a(B), W = new N.a(B), z = new N.a(B), H = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, U = f.a.div("SeeMore", R.a), q = f.a.wrapped(S.a, "ArrowRight", R.a), K = (e, t, s, n, r, o, i, a) => {
				const d = `entered-${e}-${t}-${s?`last-${n}-${r}`:""}-${o}`;
				let c = V.get(d);
				return void 0 === c && (c = () => {
					s && i.onBottomViewed(n, r), i.trackOnPostEnteredViewport(e, t, a)
				}, V.set(d, c)), c
			}, G = (e, t, s, n, r) => {
				const o = `left-${e}-${t}`;
				let i = W.get(o);
				return void 0 === i && (i = o => {
					s.trackOnPostExitedViewport(e, t, o, n, r)
				}, W.set(o, i)), i
			}, Y = (e, t) => {
				const s = `click-${e}`;
				let n = z.get(s);
				return void 0 === n && (n = (e, s, n, r) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, k.a.Click);
						const {
							source: e
						} = Object(p.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(j.a)(s.id, n, t).url), Object(x.d)(t, x.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(P.a)(e)
					})
				}, z.set(s, n)), n
			}, J = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Z extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new N.a(B), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, n = e(), r = [];
						n.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							i = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(o, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && F.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = F.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = F.c.end(this.timerId);
						setTimeout(() => Object(F.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && F.c.cancel(this.timerId), e.postIds.length && (this.timerId = F.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && F.c.has(this.timerId)) {
						const e = F.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(F.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const n = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					n && n !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(n)
				}
				componentWillUnmount() {
					this.timerId && F.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return F.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = F.c.end(e);
					setTimeout(() => {
						s(t(n, M.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						...s
					} = this.props, {
						postsById: n,
						...r
					} = e, o = Object.keys(s), i = Object.keys(r);
					if (i.length !== o.length) return !0;
					if (i.some(e => s[e] !== r[e])) return !0;
					if (t === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((r, o) => {
							const i = 0 === o;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[r]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: n[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						hostPostId: o,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: u,
						listingName: p,
						pageLayer: h,
						pageReferrer: g,
						postClickEventFactory: f,
						redditStyle: x,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: C,
						postIds: _
					} = this.props, k = 0 === t, w = `post-${n}-${e}-${t}-${s?"last-index":""}-${p}-${u}-${g}`;
					let E;
					if (void 0 === (E = this.scrollChildCache.get(w))) {
						const {
							inSubredditOrProfile: j,
							postsById: P
						} = this.props, S = P[e], T = S.crosspostRootId && P[S.crosspostRootId] ? P[S.crosspostRootId] : S;
						S.crosspostRootId && !P[S.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${S.id} is crosspost of ${S.crosspostRootId}, but ` + `${S.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const N = this.props.postComponentForLayout({
								isCrosspost: !!S.crosspostRootId,
								isFirstPost: k,
								layout: n,
								post: T
							}),
							F = `post-list-item-[layout: ${n}]-[postId: ${e}]`,
							M = K(e, n, s, u, p, g, this.props, t),
							A = G(e, n, this.props, t, h),
							R = Y(e, this.props),
							D = T.media && T.media.type === L.o.EMBED ? T.media.provider : null;
						E = {
							estHeight: Object(I.c)(S, n),
							id: e,
							isFocusable: !(!T.media || !(n === O.g.Large || n === O.g.Classic && Object(L.G)(T.media))) && (L.d.has(T.media.type) && (!D || !L.s.has(D)) && !T.isSpoiler && !T.isNSFW),
							trackOnEnteredViewport: M,
							trackOnExitedViewport: A,
							render: ({
								className: t,
								height: n,
								width: b,
								remeasure: g,
								setScrollerChildRef: v,
								shouldLoadInitially: w
							}) => m.a.createElement(N, {
								className: t,
								currentProfileName: r,
								key: F,
								availableWidth: b,
								eventFactory: f,
								first: k,
								forceLoadMedia: w,
								hostPostId: o,
								inSubredditOrProfile: j,
								isActionBarAnimationEnabled: C,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: u,
								listingName: p,
								pageLayer: h,
								last: s,
								onClickPost: R,
								onSizeChanged: g,
								postId: e,
								postIds: _,
								redditStyle: x,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: y
							})
						}, this.scrollChildCache.set(w, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const i = o;
					return m.a.createElement("div", {
						className: R.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && m.a.createElement(C.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: R.a.placeholder
					}, m.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
					}), !!e && m.a.createElement(C.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: p
					} = this.props;
					let g = c.map((e, t, s) => {
						const n = t === c.length - 1;
						return this.scrollChildForPost(e, t, n, i)
					});
					r && (g = J(g, r));
					const f = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						x = a ? Object(n.e)(a) : null,
						v = x || o;
					return m.a.createElement(l.Fragment, null, m.a.createElement(_.b, {
						innerRef: this.updateScrollerRef,
						className: v ? R.a.truncatedPostList : Object(h.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: f,
						viewportTopPadding: w.f
					}, g), x && m.a.createElement(U, {
						className: R.a.seeMoreButton
					}, m.a.createElement(E.a, {
						className: R.a.seeMorePostsText,
						to: Object(u.a)(x, {
							type: b.Qb.Posts
						})
					}, D._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Z.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(y);
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideAwards: y,
					hideNSFWPref: k,
					hostPostId: w,
					iconClassName: O,
					inSubredditOrProfile: E,
					isCommentsPage: j,
					isCompactPinnedPost: P,
					isCurrentUserProfilePost: I,
					isOverlay: S,
					isTopicPage: L,
					listingKey: T,
					post: N,
					shouldShowSubscribeButton: F,
					showCornerOutboundLink: M,
					showSubreddit: A,
					showSubredditIcon: R,
					subredditOrProfile: D
				} = e, B = y || L;
				return r.a.createElement(_, {
					className: t
				}, A && D && r.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, R && r.a.createElement(l.b, {
					className: Object(o.a)(C.a.subredditIcon, O),
					shouldHideNsfwIcon: k,
					subredditOrProfile: D
				}))), r.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, A && r.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(c.d, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					tooltipType: S ? c.c.Lightbox : void 0,
					post: N,
					showSub: A,
					subredditOrProfile: D
				}), r.a.createElement(d.a, {
					className: C.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: E,
					isCompactPinnedPost: P,
					post: N,
					tooltipType: S ? c.c.Lightbox : void 0
				}), !B && r.a.createElement(i.a, {
					isPostDetail: j,
					thing: N,
					tooltipType: S ? c.c.Lightbox : void 0
				})), D && A && F && !I && r.a.createElement(u.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.f)(N.id, e ? "unsubscribe" : "subscribe", "post", T, w),
					identifier: {
						name: D.name,
						type: Object(v.g)(D) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: N.id,
					size: h.c.XS
				}), M && r.a.createElement(b.b, {
					className: C.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(e.post),
					source: N.source
				}, r.a.createElement(f.a, {
					className: C.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				a = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				d = s.n(a);
			const c = ({
				className: e,
				progress: t
			}) => r.a.createElement("div", {
				className: Object(o.a)(d.a.barRow, e)
			}, r.a.createElement("div", {
				className: d.a.track
			}), r.a.createElement("div", {
				className: d.a.progress,
				style: {
					width: `${100*t}%`
				}
			}, r.a.createElement(i.a, {
				className: Object(o.a)(d.a.icon, {
					[d.a.empty]: 0 === t,
					[d.a.full]: t >= 1
				})
			})))
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
				return k
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = s.n(d),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/components/UserIcon/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/trackers/powerups.ts"),
				g = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				f = s.n(g);
			var x = function(e) {
				var t, s;
				const r = Object(u.a)(),
					{
						className: i,
						supporter: a
					} = e,
					{
						score: d,
						supporterInfo: c
					} = a,
					g = (null == c ? void 0 : c.displayName) || l.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [l.fbt._plural(d)], {
						hk: "8kyEI"
					}).toString(),
					x = null === (t = null == c ? void 0 : c.icon) || void 0 === t ? void 0 : t.url,
					v = !!(null === (s = null == c ? void 0 : c.profile) || void 0 === s ? void 0 : s.isNsfw),
					y = Object(m.a)(d),
					C = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: f.a.userIconContainer
					}, o.a.createElement(p.a, {
						userName: g,
						iconUrl: x,
						className: f.a.userIcon,
						isNSFW: v
					})), o.a.createElement("h4", {
						className: f.a.name
					}, g));
				return o.a.createElement("div", {
					className: Object(n.a)(i, f.a.container)
				}, c ? o.a.createElement(h.a, {
					className: f.a.user,
					to: `/user/${g}/`,
					onClick: () => {
						c && r(Object(b.q)(c.id, c.displayName))
					}
				}, C) : o.a.createElement("div", {
					className: f.a.user
				}, C), o.a.createElement("div", {
					className: f.a.counter
				}, o.a.createElement(y, {
					className: f.a.powerupIcon
				}), d))
			};
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = 100, C = 302, _ = 40;

			function k(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const w = e => ({
				key: k(e),
				data: {
					supporter: e
				}
			});

			function O(e, t) {
				const s = t || y;
				return e.slice(0, s).map(w)
			}
			const E = () => ({
					width: C,
					height: Object(i.spring)(0)
				}),
				j = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: O(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: s,
						isShortSupportersEnabled: r
					} = this.props, d = r && this.state.items.length < t.length;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, o.a.createElement(i.TransitionMotion, {
						willLeave: E,
						willEnter: j,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(i.spring)(C),
								height: Object(i.spring)(_),
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
					}, o.a.createElement(x, {
						supporter: e.data.supporter
					}))))))), d && o.a.createElement(a.q, {
						priority: a.b.Secondary,
						className: c.a.expandButton,
						onClick: s,
						isFullWidth: !0
					}, v._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: O(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = o.a.memo(P)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				r = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				a = 5;

			function d(e) {
				return e >= a ? o.a : e >= i ? r.a : n.a
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
				a = s("./src/reddit/actions/gold/powerups.ts"),
				d = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				h = s("./src/reddit/contexts/ApiContext.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/trackers/powerups.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				v = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const C = Object(y.a)(v.zb);
			var _ = s("./src/reddit/selectors/gold/powerups.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				O = s("./node_modules/reselect/es/index.js"),
				E = s("./src/reddit/components/PowerupsSidebar/index.m.less"),
				j = s.n(E),
				P = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				I = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				S = s.n(I);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
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
					className: S.a.titleRow
				}, o.a.createElement("span", null, L._("Powerups", null, {
					hk: "DrcXp"
				})), o.a.createElement("span", null, r < a ? `${r}/${a}` : r)), o.a.createElement(P.a, {
					progress: d
				}))
			};
			var N = s("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx");
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = Object(O.c)({
				currentUser: w.i,
				powerups: _.j,
				subreddit: k.T,
				topSupporters: _.m,
				userPowerupsData: _.u,
				subredditHasUnlockedPowerups: (e, t) => !!Object(_.k)(e, {
					subredditId: t.subredditId
				}),
				isShortSupportersEnabled: C
			}), A = Object(m.c)(e => {
				const {
					className: t,
					currentUser: s,
					powerups: r,
					subreddit: m,
					topSupporters: h,
					userPowerupsData: v,
					subredditId: y,
					isShortSupportersEnabled: C,
					subredditHasUnlockedPowerups: _
				} = e, k = Object(i.d)(), w = Object(f.a)(), O = () => {
					w(C ? Object(g.k)() : Object(g.g)()), k(s ? Object(c.h)(p.a.ECON_POWERUPS_MARKETING) : Object(d.h)())
				};
				if (!r || 1 === r.tiersInfo.length || !m) return null;
				const E = !!(null == v ? void 0 : v.freeCount),
					P = C ? 8 : 50,
					I = _ ? F._("Powerups are unlocked in", null, {
						hk: "fquP8"
					}) : F._("Powerup to unlock perks for", null, {
						hk: "3kTNGL"
					});
				return o.a.createElement(l.a, null, o.a.createElement(u.a, {
					className: t,
					title: F._("Powerups", null, {
						hk: "DrcXp"
					})
				}, o.a.createElement("div", {
					className: j.a.container
				}, C && o.a.createElement("div", {
					className: j.a.titleGroup
				}, o.a.createElement("div", {
					className: j.a.powerupsIcon
				}, o.a.createElement("img", {
					className: j.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerup.png`
				})), o.a.createElement("h2", {
					className: j.a.title
				}, I, " ", m.displayText), o.a.createElement(b.q, {
					priority: b.b.Primary,
					className: j.a.button,
					onClick: O,
					isFullWidth: !0
				}, E && !_ ? F._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : F._("Become a Hero", null, {
					hk: "3IZNw3"
				}))), !C && o.a.createElement("div", {
					className: j.a.oldTitleGroup
				}, o.a.createElement("h2", {
					className: j.a.title
				}, F._("Powerup and unlock perks for {subreddit name}", [F._param("subreddit name", m.displayText)], {
					hk: "2gDqtV"
				})), o.a.createElement("button", {
					className: j.a.perksButton,
					onClick: O
				}, F._("Show Perks", null, {
					hk: "3TgZRL"
				}))), o.a.createElement("div", {
					className: j.a.group
				}, o.a.createElement("h3", {
					className: j.a.subTitle
				}, F._("Community heroes", null, {
					hk: "1hGdba"
				})), o.a.createElement(T, {
					className: j.a.progress,
					powerups: r
				}), !!(null == h ? void 0 : h.length) && o.a.createElement(N.a, {
					supporters: h,
					className: j.a.heroes,
					maxSupporters: P,
					isShortSupportersEnabled: C,
					onShowFullSupportersList: () => {
						w(Object(g.m)()), k(Object(c.h)(p.a.ECON_SUPPORTERS_LIST, {
							subredditId: y
						}))
					}
				})), !C && o.a.createElement("div", {
					className: j.a.oldGroup
				}, o.a.createElement(b.q, {
					priority: b.b.Primary,
					className: j.a.button,
					onClick: () => {
						w(Object(g.g)()), k(Object(a.c)())
					},
					isFullWidth: !0
				}, E ? F._("Apply Your Powerup", null, {
					hk: "10PunM"
				}) : F._("Become a Hero", null, {
					hk: "3IZNw3"
				})), E && o.a.createElement("div", {
					className: j.a.premiumDescription
				}, o.a.createElement("div", {
					className: j.a.premiumIconWrapper
				}, o.a.createElement(x.a, {
					className: j.a.premiumIcon
				})), o.a.createElement("span", null, F._("Premium gives you one monthly Powerup", null, {
					hk: "tdfip"
				})))))))
			});
			t.a = Object(h.b)(Object(i.b)(M)(A))
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
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/page.ts"),
				y = s("./src/reddit/constants/postLayout.ts"),
				C = s("./src/reddit/helpers/postCollection.ts"),
				_ = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/helpers/trackers/lightbox.ts"),
				w = s("./src/reddit/helpers/trackers/screenview.ts"),
				O = s("./src/reddit/selectors/chatPost.ts"),
				E = s("./src/reddit/selectors/commentsListTruncated.ts"),
				j = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				I = s("./src/reddit/selectors/seo/index.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				N = s("./src/reddit/helpers/name/index.ts"),
				F = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				M = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				A = s.n(M);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var D = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						subredditOrProfile: r
					} = e, {
						primaryColor: o
					} = r;
					return a.a.createElement(T.a, {
						className: Object(L.a)(A.a.footer, t),
						onMouseDown: s,
						to: r.url,
						style: {
							backgroundColor: o
						}
					}, a.a.createElement("div", {
						className: A.a.background
					}), a.a.createElement("div", {
						className: A.a.layout
					}, n ? R._("See more posts like this in {subredditName}", [R._param("subredditName", Object(N.c)(r.displayText))], {
						hk: "pLxW5"
					}) : R._("Continue browsing in {subredditName}", [R._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(F.a, {
						className: A.a.arrow
					})))
				}),
				B = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				V = s.n(B);
			const W = Object(c.a)((e, {
					isOverlay: t
				}) => t, E.a, j.b, (e, t, s) => !((!t || s) && e)),
				z = Object(c.c)({
					includeListingBelow: I.b,
					isChatPost: O.d,
					isGQLLoggedIn: S.I,
					isLoggedIn: S.J,
					listingBelowVariant: P.a,
					shouldShowSubredditUpsell: W
				}),
				H = Object(d.b)(z, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.P.HOT,
						subredditName: t
					}))
				}));
			class U extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.d) : null, this.onViewed = (e, t) => Object(w.f)(this.listingKey(), l.P.TOP, t, e, l.Wb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(k.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						includeListingBelow: e,
						post: t,
						subredditOrProfile: s
					} = this.props;
					return e && t && t.id ? Object(u.a)(t.id) : Object(p.a)(s.name, l.P.TOP, {
						t: l.Wb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowVariant: e,
						subredditOrProfile: t,
						theme: s
					} = this.props, {
						name: r
					} = t, o = Object(_.a)(s.newCommunityTheme.canvas);
					let i = null;
					return i = !e || Object(x.ud)(e) ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", r)], {
						hk: "2g363L"
					}) : e === x.Tb.Nlp15Max ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: V.a.smallBanner,
						style: {
							color: o
						}
					}, i)
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isGQLLoggedIn: s,
						isLoggedIn: n,
						listingBelowVariant: r,
						post: i,
						shouldShowSubredditUpsell: d,
						subredditOrProfile: c
					} = this.props, l = i && Object(C.a)(i), m = !!r && !Object(x.ud)(r), u = i && i.id;
					return s || n || t || l || !d ? null : a.a.createElement("div", {
						className: V.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: V.a.postList,
						disablePlaceholder: !0,
						forcedLayout: y.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostId: u,
						isTruncated: !0,
						listingBelowVariant: r,
						listingKey: this.listingKey(),
						listingName: v.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: V.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(D, {
						className: V.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: m,
						subredditOrProfile: c
					}))
				}
			}
			t.a = H(Object(m.a)(Object(g.c)(U)))
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
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: n
			}) => r.a.createElement("div", {
				className: e
			}, r.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === n && r.a.createElement("div", {
				className: Object(o.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === n && r.a.createElement("div", {
				className: Object(o.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(n),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./node_modules/lodash/random.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/config.ts"),
				p = s("./src/reddit/components/BannerAd/index.tsx"),
				h = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				b = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/helpers/adCount/index.ts"),
				v = s("./src/reddit/helpers/trackers/ads.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				k = s.n(_),
				w = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/lessComponent.tsx");
			const E = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				j = Object(m.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(x.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(C.p)(e) === w.Eb.SUBREDDIT || Object(C.p)(e) === w.Eb.COMMENTS
				}),
				P = Object(l.b)(j),
				I = O.a.wrapped(p.a, "BannerAd", k.a),
				S = O.a.wrapped(f.a, "ThemedWidget", k.a),
				L = O.a.div("SidebarAdPlaceholder", k.a),
				T = e => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && e,
				N = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += `sidebar-${e}`, null != s && (n += `-${s}`), n
				},
				F = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(y.F)(e.media) && e.media.content)),
				M = e => !!e && e.isBlank,
				A = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				R = Object(g.c)(class extends c.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: s,
							redditStyle: n
						} = this.props;
						return s !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, s) {
						Math.random() <= u.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(v.d)(e, t, s))
					}
					render() {
						const e = a()(0, A.length - 1),
							{
								img: t,
								href: s
							} = A[e],
							{
								className: n,
								placement: r,
								redditStyle: o,
								removeSidebarSpacer: i
							} = this.props,
							d = i ? c.a.Fragment : b.a;
						return c.a.createElement(d, null, c.a.createElement(S, {
							className: n,
							contentOnly: !0,
							redditStyle: o
						}, c.a.createElement(h.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						})))
					}
				});
			class D extends c.a.Component {
				constructor(e) {
					super(e), this.incrementRefreshCounter = this.incrementRefreshCounter.bind(this), this.state = {
						refreshCount: 0
					}
				}
				incrementRefreshCounter() {
					this.setState(e => ({
						refreshCount: e.refreshCount + 1
					}))
				}
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: r,
						placementIndex: o,
						refreshKey: i,
						listingName: a,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: p,
						forceHouseAd: h,
						waitForProgrammatic: g,
						isSubredditOrCommentsPage: f,
						removeSidebarSpacer: x
					} = this.props, v = n.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), y = x ? c.a.Fragment : b.a;
					return p || t || !F(s) && g ? c.a.createElement(y, null, c.a.createElement(S, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, c.a.createElement(L, {
						"data-before-content": v
					}))) : h ? c.a.createElement(R, {
						className: e,
						redditStyle: u,
						placement: d,
						removeSidebarSpacer: x
					}) : F(s) ? c.a.createElement(y, null, c.a.createElement(E, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: d,
						placementIndex: o
					})) : c.a.createElement(y, null, c.a.createElement(S, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, M(s) && c.a.createElement(E, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: d,
						placementIndex: o
					}), c.a.createElement(I, {
						id: N(d, r, o),
						isRefreshableAd: T(f),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: d,
						listingName: a,
						refreshKey: i,
						refreshCount: this.state.refreshCount,
						position: m,
						dataBeforeContent: v
					})))
				}
			}
			t.a = P(D)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(o.b)((e, {
				postId: t,
				commentsPageKey: s
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(c.A)(e) && !Object(d.a)(e),
				waitForProgrammatic: Object(a.d)(e, {
					commentsPageKey: s
				})
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...n
			}) => e ? r.a.createElement(l.a, n) : null)
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
				m = s("./src/reddit/actions/subreddit.ts"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				b = s("./src/reddit/components/SubredditNav/index.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, s) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: s
				}),
				v = ({
					children: e,
					isActive: t,
					isTopBannerVariant: s,
					...n
				}) => r.a.createElement("div", f({
					className: x(g.a.subNavTitle, t, s)
				}, n), r.a.createElement("span", null, e), r.a.createElement(h.b, {
					className: g.a.navDropdownIcon
				})),
				y = ({
					className: e,
					isActive: t,
					to: s,
					isTopBannerVariant: n,
					...o
				}) => {
					const i = x(g.a.navLink, t, n);
					return s ? r.a.createElement(u.a, f({
						className: i,
						to: s
					}, o)) : r.a.createElement("a", f({
						className: i
					}, o))
				},
				C = ({
					className: e,
					isActive: t,
					...s
				}) => r.a.createElement(u.a, f({
					className: Object(p.a)(x(g.a.navLink, t), e)
				}, s)),
				_ = ({
					className: e,
					isActive: t,
					...s
				}) => r.a.createElement("a", f({
					className: x(g.a.subNavLink, t)
				}, s)),
				k = ({
					className: e,
					...t
				}) => r.a.createElement("div", f({
					className: Object(p.a)(g.a.subNavContainer, e)
				}, t)),
				w = ({
					className: e,
					isOpen: t,
					...s
				}) => r.a.createElement("div", f({
					className: Object(p.a)(g.a.subNavList, e, {
						[g.a.mIsOpen]: t
					})
				}, s)),
				{
					fbt: O
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const E = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var j = Object(d.t)()(Object(o.b)(E, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(m.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? r.a.createElement(C, {
						className: g.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, O._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				P = s("./src/lib/linkMatchers/index.ts");
			class I extends r.a.Component {
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
					return r.a.createElement(k, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(w, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var S = I;
			const L = e => {
				const t = e.url && Object(P.h)(P.f, e.url);
				return t ? t.url : e.url
			};
			var T = e => e.menuItem.url ? r.a.createElement(y, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(S, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(_, {
					key: `${e.text}-${L(e)}`,
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				N = s("./src/reddit/actions/economics/predictions/index.ts"),
				F = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				M = s("./src/reddit/helpers/trackers/predictions.ts"),
				A = s("./src/reddit/hooks/usePageLayer.ts"),
				R = s("./src/reddit/hooks/useTracking.ts"),
				D = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				B = s("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function W({
				subredditId: e
			}) {
				const t = Object(o.d)(),
					s = Object(A.a)(),
					i = Object(R.a)(),
					a = Object(F.L)(s),
					[d, c] = Object(n.useState)(!1),
					l = Object(o.e)(t => Object(B.T)(t, {
						subredditId: e
					})),
					m = Object(o.e)(t => Object(B.N)(t, {
						subredditId: e
					})),
					u = Object(o.e)(t => Object(D.c)(t, {
						subredditId: e
					})),
					p = Object(o.e)(t => Object(D.b)(t, {
						subredditId: e
					}));
				return Object(n.useEffect)(() => {
					a && i(Object(M.w)())
				}, [a, i]), Object(n.useEffect)(() => {
					(async () => {
						m && !d && (t(Object(N.g)(l.name)), c(!0))
					})()
				}, [m, d, t, l.name]), m && u ? r.a.createElement(C, {
					className: g.a.predictionsFilter,
					isActive: a,
					onClick: () => i(Object(M.g)()),
					to: `${l.url}predictions/`
				}, V._("Predictions", null, {
					hk: "Cv5GC"
				}), p && r.a.createElement("span", {
					className: g.a.liveIcon
				}, V._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var z = s("./src/lib/constants/index.ts");
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const U = Object(d.t)(),
				q = [z.Eb.SUBREDDIT, z.Eb.COMMENTS, z.Eb.COLLECTION_COMMENTS],
				K = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && q.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.L)(t.pageLayer)
				});
			var G = U(Object(o.b)(K, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(m.p)({
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
					return r.a.createElement(y, {
						to: t,
						isActive: d,
						isTopBannerVariant: i,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, H._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				J = s("./src/higherOrderComponents/makeAsync.tsx");
			var Z = Object(J.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				Q = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/constants/screenWidths.ts"),
				$ = s("./src/reddit/models/Theme/index.ts"),
				ee = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const te = Object(Y.a)(({
				className: e,
				children: t,
				isTopBannerVariant: s,
				...n
			}) => {
				const o = Object(ee.a)(n);
				return r.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, e),
					style: {
						position: o.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object($.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var se = e => r.a.createElement(te, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === Q.g.Large ? `${e.maxWidth||X.a}px` : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(Z, null))),
				ne = s("./src/reddit/constants/wiki.ts"),
				re = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, o = !!n && !!n.meta && n.meta.name === z.Eb.SUBREDDIT_WIKI, i = `wiki/${ne.i}`, a = t.endsWith("/") ? t + i : `${t}/${i}`;
				return r.a.createElement(y, {
					isActive: o,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(re.g)())
				}, oe._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ae = Object(c.a)("spPolls", j),
				de = Object(d.t)(),
				ce = Object(i.c)({
					layout: d.O,
					widget: l.f
				}),
				le = Object(o.b)(ce);
			t.a = de(le(Object(a.c)(e => r.a.createElement(se, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(G, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(ae, {
				subredditId: e.subredditId
			}), r.a.createElement(W, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(ie, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(T, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
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
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				y = s("./src/reddit/models/Widgets/index.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				k = s.n(_);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 129,
				E = Object(b.t)({
					filterName: e => Object(b.T)(e)[h.g],
					url: e => Object(b.Y)(e)
				}),
				j = Object(a.c)({
					subredditId: (e, t) => Object(C.F)(e, t.subredditName)
				}),
				P = Object(i.b)(j),
				I = l.a.div("WidgetContent", k.a),
				S = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: s,
					...n
				}) => o.a.createElement("li", {
					className: Object(d.a)(k.a.StyledFlair, e === y.d.Cloud && k.a.cloudDisplay, {
						[k.a.flairFilter]: t,
						[k.a["m-selected"]]: n.isSelected
					}),
					onMouseDown: s
				}, o.a.createElement(m.b, w({}, n, {
					className: k.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class L extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
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
						e && e > O && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(g.o, {
						className: k.a.flairFilterButton,
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
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? O : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: k.a.flairFilterContainer,
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
					}, o.a.createElement(I, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = E(P(Object(u.c)(L)))
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
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
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
				a = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				f = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				v = s.n(x);
			const y = c.a.div("RuleShortName", v.a),
				C = c.a.div("RuleIndex", v.a),
				_ = c.a.div("RuleTitle", v.a),
				k = c.a.div("RuleDescription", v.a),
				w = c.a.wrapped(l.a, "RawHTMLDisplay", v.a),
				O = {};
			class E extends o.a.Component {
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
					return e.display === f.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !n(e) && !!r;
					return o.a.createElement(y, {
						className: Object(d.a)({
							[v.a.pointerCursor]: i
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(g.a, null, o.a.createElement(C, null, `${e.humanIndex}.`), o.a.createElement(_, null, `${e.rule.shortName}`), o.a.createElement("div", null, !n(e) && r && (e.isInIcons2020 ? o.a.createElement(p.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? o.a.createElement(b.a, {
						className: v.a.Chevron
					}) : o.a.createElement(h.a, {
						className: v.a.Chevron
					})))), t.isVisible && o.a.createElement(k, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: O
					}) : e.rule.descriptionHtml ? o.a.createElement(w, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => {
				const t = Object(a.a)();
				return e.rules.length > 0 ? o.a.createElement(i.a, {
					className: e.className,
					styles: e.styles,
					title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
						hk: "2AwRLk"
					}),
					redditStyle: e.redditStyle
				}, e.rules.map((function(s, n) {
					return o.a.createElement(E, {
						key: `rule${s.shortName}${s.createdUtc}`,
						rule: s,
						display: e.display,
						humanIndex: n + 1,
						isInIcons2020: t
					})
				}))) : null
			};
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
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Me
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
				h = s("./src/reddit/models/Image/index.tsx"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Widgets/Button/index.m.less"),
				y = s.n(v);
			const C = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === g.f.Image ? {
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
					if (o.kind === g.f.Image) r = {
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
				_ = e => e.kind === g.f.Image ? y.a.imageButton : y.a.textButton,
				k = e => {
					const t = Object(g.n)(e),
						s = Object(p.h)(p.f, t);
					return s ? s.url : e.url
				},
				w = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(b.a)(e).button;
					return r.a.createElement(c.l, {
						className: _(t),
						style: C(t, s, n)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? y.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: y.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				O = e => r.a.createElement(l.b, {
					href: k(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(w, e)),
				E = u.a.wrapped(a.a, "RawHTMLDisplay", y.a);
			var j = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.V
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(E, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => r.a.createElement(O, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/lib/humanizeDate/index.ts"),
				S = s("./src/reddit/controls/TextButton/index.tsx"),
				L = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = s.n(L);
			const N = 100,
				F = {
					isExpanded: !1
				},
				M = u.a.wrapped(a.a, "RawHTMLDisplay", T.a),
				A = u.a.div("EventContainer", T.a),
				R = u.a.div("EventTitle", T.a),
				D = u.a.div("EventDate", T.a),
				B = u.a.div("EventLocation", T.a),
				V = u.a.div("EventDescription", T.a),
				W = u.a.wrapped(S.a, "ToggleDescription", T.a);
			class z extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = F
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > N ? r.a.createElement(V, null, t.isExpanded ? e.text : e.text.slice(0, N), r.a.createElement(W, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? P.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : P.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(V, null, e.text)
				}
			}
			var H = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(A, {
					key: `${s}-${t.title}`
				}, r.a.createElement(R, null, t.titleHtml ? r.a.createElement(M, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(D, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${s}:0${n}` : `${s}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(B, null, t.locationHtml ? r.a.createElement(M, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(z, {
					text: t.description
				})))),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var K = Object(U.c)(e => r.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const G = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(o.b)(G),
				J = (e, t, s) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${s}</body>`;
			class Z extends r.a.Component {
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
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = J(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var Q = Y(Z),
				X = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = s.n(X);
			var ee = u.a.div("ImageFrame", $.a),
				te = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = s.n(te);
			var ne = u.a.img("StyledImage", se.a);
			class re extends r.a.Component {
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
						n = r.a.createElement(ee, null, r.a.createElement(ne, {
							alt: P.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.b, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var oe = re,
				ie = s("./src/config.ts"),
				ae = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = s("./src/lib/opener/index.ts"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				le = s("./src/reddit/controls/InternalLink/index.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				ue = s("./src/reddit/models/Flair/index.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				he = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				be = s.n(he);
			const ge = u.a.a("ExternalLink", be.a),
				fe = u.a.div("ModeratorListItem", be.a),
				xe = u.a.div("Username", be.a),
				ve = u.a.wrapped(ce.b, "FlairComponent", be.a),
				ye = e => e.authorFlairType === ue.f.Richtext ? {
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
				Ce = e => r.a.createElement(xe, null, `u/${e}`),
				_e = u.a.wrapped(le.a, "InternalLink", be.a),
				ke = u.a.div("LinkContainer", be.a),
				we = Object(i.c)({
					userIsBanned: pe.eb
				});
			var Oe = Object(o.b)(we)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n
					} = e;
					return r.a.createElement(d.a, {
						styles: s.styles,
						title: P.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (s.mods && s.mods.length || n) && r.a.createElement(c.q, {
						kind: c.a.InternalLink,
						priority: c.b.Secondary,
						className: be.a.MessageModsButton,
						rel: de.b,
						target: de.c.BLANK,
						to: `${ie.a.redditUrl}/message/compose?to=/r/${t}`
					}, r.a.createElement(me.a, {
						className: be.a.MessageModsButtonIcon
					}), P.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(fe, {
						key: e.name
					}, (e => r.a.createElement(ae.a, {
						to: `/user/${e.name}/`
					}, Ce(e.name)))(e), r.a.createElement(ve, {
						flair: ye(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(ke, null, r.a.createElement(_e, {
						to: `/r/${t}/about/moderators/`
					}, P.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n ? r.a.createElement("div", {
						className: be.a.HelpCenterMessage
					}, P.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(ge, {
						href: `${ie.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: de.b,
						target: de.c.BLANK
					}, P.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: be.a.UnModeratedSubreddit
					}, P.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(ge, {
						href: `${ie.a.redditUrl}/r/redditrequest`,
						rel: de.b,
						target: de.c.BLANK
					}, P.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", P.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ee = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				je = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Pe = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ie = s.n(Pe);
			const Se = u.a.div("WidgetContent", Ie.a),
				Le = u.a.wrapped(a.a, "RawHTMLDisplay", Ie.a);
			var Te = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Se, null, r.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				Ne = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Fe = e => r.a.createElement(Ne.b, null, "This widget hasn't been implemented yet!");

			function Me(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Oe;
						case "textarea":
							return Te;
						case "button":
							return j;
						case "subreddit-rules":
							return je.b;
						case "community-list":
							return K;
						case "calendar":
							return H;
						case "image":
							return oe;
						case "custom":
							return Q;
						case "post-flair":
							return Ee.a;
						default:
							return Fe
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
				return w
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return P
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
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tracking.ts");

			function w() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isPredictionsPage: p.L,
					isProfilePostListing: p.I,
					isTopicPage: p.N,
					pageLayer: e => e
				})
			}
			const O = w(),
				E = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(y.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(_.F)(e, t.listingName);
							return Object(v.k)(e, {
								subredditId: s
							})
						}
						return Object(C.N)(e, {
							...t
						})
					},
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: n,
						inSubredditOrProfile: r
					}) => {
						if (n) {
							const t = Object(_.F)(e, s);
							return Object(v.j)(e, {
								subredditId: t
							})
						}
						return Object(C.A)(e, t, s, r)
					}),
					subredditsById: _.ab,
					viewportDataLoaded: k.a,
					pageReferrer: p.R,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.d
				},
				j = Object(r.c)(E),
				P = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(c.H(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(c.I(t, n, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				I = Object(n.b)(j, P, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(u.c)(O(I(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return b
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/graphql/operations/AddPredictionDrafts.json"),
				o = s("./src/graphql/operations/CreatePredictionTournament.json"),
				i = s("./src/graphql/operations/EndPredictionTournament.json"),
				a = s("./src/graphql/operations/GetPredictionChipPackages.json"),
				d = s("./src/graphql/operations/GetPredictionCoinPackages.json"),
				c = s("./src/graphql/operations/GetPredictionToken.json"),
				l = s("./src/graphql/operations/GetTournaments.json"),
				m = s("./src/graphql/operations/ResolvePrediction.json"),
				u = s("./src/graphql/operations/SubredditTopPredictors.json"),
				p = s("./src/graphql/operations/UpdatePredictionTournament.json"),
				h = s("./src/graphql/operations/VotePrediction.json");
			const b = (e, t, s) => Object(n.a)(e, {
					...d,
					variables: {
						subredditName: t,
						includeFreePackage: s
					}
				}),
				g = (e, {
					postId: t,
					optionId: s,
					coinPackageId: r,
					price: o
				}) => Object(n.a)(e, {
					...h,
					variables: {
						input: {
							postId: t,
							optionId: s,
							coinPackageId: r,
							price: o
						}
					}
				}),
				f = (e, {
					postId: t,
					optionId: s
				}) => Object(n.a)(e, {
					...m,
					variables: {
						input: {
							postId: t,
							optionId: s
						}
					}
				});
			var x;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const v = (e, {
					subredditId: t,
					period: s,
					top: r,
					includeCurrentRank: o,
					tournamentId: i
				}) => Object(n.a)(e, {
					...u,
					variables: {
						subredditId: t,
						period: s,
						top: r,
						includeCurrentRank: o,
						tournamentId: i
					}
				}),
				y = (e, t) => Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				C = (e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}),
				_ = (e, t) => Object(n.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(n.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				w = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}),
				E = (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				})
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
				return i
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const o = Math.floor(100 * Math.random());
			var i;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(i || (i = {}));
			t.b = (e, t, s, i, a) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return i && !Object(n.a)(i.name) && (d.subreddit = i.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = o, a && (d.position = a), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/helpers/parseUrl.ts");
			const r = ["old", "new", "en", "www", "np", "m"],
				o = ["reddit.com", "reddit.local"].concat("").concat(r.map((function(e) {
					return e + ".reddit.com"
				}))).concat(r.map((function(e) {
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
						hostnames: o.concat("redd.it"),
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
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const r = Object(n.a)(t);
							if (!r) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || o).indexOf(r.hostname)) return;
							const i = r.pathname.match(s.pathname);
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
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(n.defaults)(e),
					media: Object(n.media)(e, t),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e) || Object(n.subredditByPostOrCommentId)(e, t)
				}),
				o = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.post)(t, e),
					...r(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.post)(t, e),
					...r(t, e)
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "o", (function() {
				return r
			})), s.d(t, "p", (function() {
				return o
			})), s.d(t, "q", (function() {
				return i
			})), s.d(t, "k", (function() {
				return a
			})), s.d(t, "s", (function() {
				return d
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "n", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "u", (function() {
				return b
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "w", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "v", (function() {
				return v
			})), s.d(t, "t", (function() {
				return y
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				o = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				a = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				c = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: s
				}) => r => ({
					...Object(n.defaults)(r),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(r, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: s
					}
				}),
				l = ({
					pollId: e,
					selectedNumberTokens: t
				}) => s => ({
					...Object(n.defaults)(s),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(s, e, !1, void 0, void 0, t)
				}),
				m = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: s
				}) => r => ({
					...Object(n.defaults)(r),
					source: "poll",
					action: "close",
					noun: "prediction_modal",
					poll: Object(n.poll)(r, e, !1, t, s)
				}),
				u = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				p = e => t => ({
					...Object(n.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				h = ({
					targetUserId: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				b = ({
					numberPredictionTokens: e,
					pollId: t
				}) => s => ({
					...Object(n.defaults)(s),
					source: "poll",
					action: "view",
					noun: "token_claim_modal",
					poll: Object(n.poll)(s, t, !1, void 0, void 0, e)
				}),
				g = ({
					pageType: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				f = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				x = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				v = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				y = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				C = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				_ = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				k = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "next"
				}),
				w = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "add_more"
				}),
				O = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "start_tournament"
				}),
				E = () => e => ({
					...Object(n.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
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
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "o", (function() {
				return O
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.defaults(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
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
				c = (e = !1) => d(e ? "create_wiki_page" : "save_wiki_page"),
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				u = d("view_wiki_page"),
				p = d("view_source"),
				h = d("add_wiki_page_contributor"),
				b = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				y = d("ban_wiki_contributor"),
				C = d("unban_wiki_contributor"),
				_ = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				k = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				w = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				O = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: k[e]
					})
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = n.Z
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`
			}), "Expand", a.a);
			t.a = d
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), r.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
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
				id: e.id
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
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				v = s.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(o.b)(() => Object(i.c)({
					showFPR: f.H,
					showSuspended: f.O
				})),
				_ = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...n
				}) => {
					const o = Object(g.a)({
						theme: s,
						...n
					});
					return r.a.createElement("div", y({
						className: Object(a.a)(v.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${p.h}px` : `${p.i}px`
						}
					}, n))
				});
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return r.a.createElement(m.a, {
							className: Object(a.a)(v.a.fakeOverlayLightboxHeaderWrapper, {
								[v.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(v.a, t))
						}, r.a.createElement(u.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(_, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), r.a.createElement(c.a.Consumer, null, this.renderWrapper), r.a.createElement(h.a, e))
				}
			}
			t.a = C(k)
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
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(o.b)(() => Object(i.c)({
				headComment: u.x,
				post: u.G
			}));
			t.a = Object(c.c)(g(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				post: n,
				postId: o,
				sendEvent: i
			}) => {
				var c;
				if (!n) return null;
				const u = null !== (c = n.numDuplicates) && void 0 !== c ? c : 0,
					p = void 0 !== e,
					g = n.permalink,
					f = u > 0,
					x = Object(l.b)(Object(a.e)(g));
				return p || f ? r.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, p && r.a.createElement("div", null, r.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && r.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), f && r.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(o)),
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
				return dt
			})), s.d(t, "CommentsPage", (function() {
				return bt
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
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				f = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/domUtils/index.ts"),
				C = s("./src/lib/fastdom/index.ts"),
				_ = s("./src/lib/lessComponent.tsx"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				O = s("./src/lib/performanceTimings/index.tsx"),
				E = s("./src/reddit/actions/ads/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				F = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				M = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				A = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				R = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				B = s("./src/reddit/constants/history.ts"),
				V = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/constants/screenWidths.ts"),
				H = s("./src/reddit/contexts/ApiContext.tsx"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				K = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				G = s("./src/reddit/featureFlags/profileCollections.ts"),
				Y = s("./src/reddit/contexts/Post/index.tsx"),
				J = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				Q = s("./src/reddit/models/Subreddit/index.ts"),
				X = s("./src/reddit/selectors/chatPost.ts"),
				$ = s("./src/reddit/selectors/comments.ts"),
				ee = s("./src/reddit/selectors/commentSelector.ts"),
				te = s("./src/reddit/selectors/commentsListTruncated.ts"),
				se = s("./src/reddit/selectors/discoveryUnit.ts"),
				ne = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				re = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				oe = s("./src/reddit/selectors/experiments/commentsPageAd.ts"),
				ie = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ae = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				de = s("./src/reddit/selectors/meta.ts"),
				ce = s("./src/reddit/selectors/moderatorPermissions.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/selectors/realtimeComments.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/selectors/tooltip.ts"),
				he = s("./src/reddit/selectors/user.ts"),
				be = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ge = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				fe = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				xe = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ve = s("./src/reddit/components/Comments/index.tsx"),
				ye = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Ce = s("./src/reddit/components/Comments/States/index.tsx"),
				_e = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ke = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				we = s("./src/reddit/components/CommentSort/index.tsx"),
				Oe = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Ee = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				je = s("./src/reddit/components/HeaderImage/index.tsx"),
				Pe = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ie = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Se = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Le = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Te = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ne = s("./src/reddit/components/JumpToContent/index.tsx"),
				Fe = s("./src/reddit/components/PostContent/index.tsx"),
				Me = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ae = s("./src/reddit/components/SubredditNav/index.tsx"),
				Re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				De = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Be = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ve = s("./src/reddit/helpers/history/index.ts"),
				We = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ze = s("./src/reddit/helpers/postCollection.ts"),
				He = s("./src/reddit/helpers/resonatePage/index.ts"),
				Ue = s("./src/reddit/helpers/trackers/lightbox.ts"),
				qe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ke = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ge = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ye = s("./src/reddit/layout/page/Listing/index.tsx"),
				Je = s("./src/reddit/models/ContentGate.ts"),
				Ze = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Qe = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Xe = s("./src/reddit/pages/CommentsPage/index.m.less"),
				$e = s.n(Xe);

			function et() {
				return (et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const tt = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				st = 200,
				nt = 80,
				rt = 32,
				ot = Object(n.a)({
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
				it = Object(n.a)({
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
				at = Object(n.a)({
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
				dt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(k.a)(e) : s,
				ct = e => {
					const {
						state: t
					} = e.location, s = a()(t, B.a.IsOverlay, !1), n = a()(t, B.a.CloseLocation, null), r = a()(t, B.a.ScrollOnLoad, !1);
					r && Object(Ve.c)(B.a.ScrollOnLoad);
					const {
						partialCommentId: o,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.r)(i), l = o && Object(J.f)(o);
					return m.a.createElement(Y.a, {
						postId: c
					}, m.a.createElement(bt, {
						closeLocation: n,
						commentId: l,
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
				lt = Object(U.t)(),
				mt = () => Object(h.c)({
					apiError: $.c,
					apiPending: $.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(le.P)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: ee.a,
					communityBannerDiscoveryUnit: se.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(he.e)(e, t),
					currentUserShowNSFW: he.cb,
					dismissedSubreddits: ne.a,
					fullyLoaded: $.u,
					hasModeratorPostPermissions: ce.b,
					headComment: $.x,
					isActionBarAnimationEnabled: K.b,
					isAvatarsInCommentsEnabled: re.a,
					isChatPost: X.d,
					isCommentsListTruncated: te.a,
					isLoggedIn: he.J,
					isNightmodeOn: he.V,
					isRealtimeCommentsExperimentEnabled: me.a,
					isTooltipOpen: (e, t) => !!Object(pe.a)(e),
					newCommentsCount: $.D,
					origin: de.i,
					post: le.D,
					postSEOV2IdCardVariant: ie.i,
					profileCollectionsEnabled: G.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: n
					}) => Object($.s)(e, {
						commentsPageKey: dt({
							postId: t,
							commentId: s,
							commentsPageKey: n
						})
					}),
					shouldOpenPostInNewTab: he.bb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(ue.x)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: le.P,
					userHovercardIsOpen: (e, t) => Object(pe.b)(Object(Pe.b)({
						itemId: t.postId,
						tooltipIdPrefix: M.a,
						tooltipType: Me.c.StickyPost
					}))(e),
					userPrefs: he.ub,
					isInCommentsPageAdExperiment: oe.a,
					inResonatePilot: ae.a
				}),
				ut = (e, t) => ({
					dismissTruncation: t => e(Object(be.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(I.a)()),
					setCommentFocus: t => e(j.e({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName,
						sort: t.sort
					})),
					onHideTooltip: () => e(Object(N.i)()),
					onToggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.h)()),
					openRegisterModal: () => e(Object(L.j)()),
					goToSubredditPage: t => e(Object(p.b)(t)),
					truncateCommentsList: () => e(Object(I.b)()),
					fetchCommentsNativeAd: t => e(Object(E.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(ge.b)(t))
				}),
				pt = Object(u.b)(mt, ut);
			class ht extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								userHovercardIsOpen: n,
								onToggleTooltip: r,
								postId: o
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const i = t === window ? t.scrollY : t ? t.scrollTop : 0;
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, n && C.a.write(() => {
							r(Object(Pe.b)({
								itemId: o,
								tooltipIdPrefix: M.a,
								tooltipType: Me.c.StickyPost
							}))
						}))
					}, v.G), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Ue.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(Z.q)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Be.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === V.b.F || e.keyCode === V.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null,
						commentNativeAdId: null
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
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isOverlay: r,
							post: o,
							shouldScrollToComments: i
						}
					} = this;
					if (o && !o.isSponsored && !o.isRemoved && o.belongsTo.type !== W.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(o.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (r ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && o && o.numComments ? this.scrollToComments() : C.a.write(() => {
							setTimeout(() => {
								Object(y.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(We.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.r)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), C.a.read(() => {
							this.props.isOverlay || Object(O.d)(O.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						v.Db.includes(e) && Object(He.a)(e)
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
						const e = this.props.post && Object(ze.a)(this.props.post);
						this.props.post && this.props.post.numComments ? C.a.read(this.handleScroll) : C.a.write(() => {
							e || Object(y.c)(this.scrollContainerEl, 0), C.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && C.a.write(() => {
							setTimeout(() => {
								Object(y.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = R.b + (this.props.isOverlay ? R.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const r = (n = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								o = Math.abs(r - s),
								i = this.props.isOverlay ? rt : o - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && C.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(y.c)(n, i) : Object(y.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = st
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
					C.a.read(() => {
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - nt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - nt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), C.a.write(() => {
								Object(y.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => C.a.read(this.handleScroll))
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
					C.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: r,
							isOverlay: o,
							isActionBarAnimationEnabled: i
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const a = g.c.end(t),
							d = !o && i;
						n(Object(qe.c)(t, s, e, f.TimerType.InApp, a, r, d))
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
						post: n,
						subredditName: r
					} = this.props, o = !(!n || !n.isNSFW || t), i = Object(De.a)(e, o, r);
					if (!i) return null;
					let a = m.a.createElement(at, i);
					return s && (a = m.a.createElement(Ke.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: n,
						commentsPageKey: r,
						isNightmodeOn: o,
						isLoggedIn: i,
						isOverlay: a,
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sort: u,
						sendEvent: p,
						subredditOrProfile: h,
						profileCollectionsEnabled: b,
						isInCommentsPageAdExperiment: g,
						isActionBarAnimationEnabled: f
					} = this.props, y = Object(ie.g)(l);
					if (!d) {
						if (t) return m.a.createElement(Ce.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === v.m ? m.a.createElement(at, {
							contentGateType: Je.a.PostBlockedForLegalReason
						}) : m.a.createElement(Ce.d, {
							postId: c,
							commentId: n,
							apiError: e,
							sort: u
						}) : m.a.createElement(Ce.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const C = this.isCommentPermalink(),
						_ = d.belongsTo.type === W.a.PROFILE,
						k = Object(ze.a)(d) && (!_ || b),
						w = !i;
					return m.a.createElement(ft, {
						closeLocation: s,
						commentsPageKey: r,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: i,
						isOverlay: a,
						isSwapVariant: y,
						post: d,
						subredditOrProfile: h,
						shouldFitPageToContent: w,
						isCollectionLayout: k
					}, h && h.isQuarantined && m.a.createElement(Te.a, {
						subredditName: h.name
					}), m.a.createElement(Ne.a, null), m.a.createElement("div", {
						className: Object(x.a)($e.a.PageContentWrapper, {
							[$e.a.LargePageContent]: k,
							[$e.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, k && m.a.createElement(it, {
						isOverlay: a,
						isNightmodeOn: o,
						postId: c
					}), m.a.createElement(tt, {
						condition: k,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: $e.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Fe.a, {
						isCommentPermalink: C,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: p,
						isActionBarAnimationEnabled: f
					}), g && this.state.commentNativeAdId && m.a.createElement(F.a, {
						key: `event-post-id-${d.id}`,
						isOverlay: a,
						postId: this.state.commentNativeAdId
					}), this.renderCommentPanes())), h && !Object(Q.g)(h) && m.a.createElement(A.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						post: d,
						subredditOrProfile: h
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: o,
						fullyLoadComments: i,
						fullyLoaded: a,
						hasModeratorPostPermissions: d,
						headComment: c,
						isAvatarsInCommentsEnabled: l,
						isChatPost: u,
						isLoggedIn: p,
						isOverlay: h,
						isRealtimeCommentsExperimentEnabled: g,
						location: f,
						newCommentsCount: v,
						onOtherDiscussions: y,
						openLoginModal: C,
						openRegisterModal: _,
						origin: k,
						post: O,
						postId: E,
						replyComment: j,
						sendEvent: I,
						sort: S,
						subredditAboutInfo: L,
						subredditOrProfile: T
					} = this.props;
					if (!O) return null;
					const N = this.isCommentPermalink(),
						F = [],
						M = O.isLocked && !s,
						A = !(N || O.isArchived || L && L.userIsBanned);
					if (M) F.push(m.a.createElement(Se.a, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (O.isArchived) F.push(m.a.createElement(Ie.a, {
						key: "commentThreadBanner"
					}));
					else if (A && !u && !y)
						if (p) {
							const e = Object(w.a)(b.c.replyToPost, E);
							F.push(m.a.createElement(fe.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: ({
									validate: t,
									...s
								}, n) => t ? P.s(E, o, e, s, n) : P.n(E, o, e, s, n),
								submitButtonText: r.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else F.push(m.a.createElement(xe.a, {
							key: "loggedOutCommentForm",
							location: f,
							openLoginModal: C,
							openRegisterModal: _,
							origin: k
						}));
					if (O.contestMode && F.push(m.a.createElement(Le.a, {
							hasModeratorPostPermissions: d,
							key: "contestModeBanner"
						})), !u && !y && F.push(m.a.createElement(we.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: f,
							postId: E,
							sort: S,
							suggestedSort: O.suggestedSort
						}), m.a.createElement(Ze.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: h,
							key: "commentNavigation",
							postId: E
						})), !t || c || u || y)
						if (!e || c || y)
							if (y) F.push(m.a.createElement(ot, {
								commentSort: S,
								key: "otherDiscussions",
								postId: E,
								isOverlay: h,
								postPermalink: O.permalink
							}));
							else if (u) {
						if (T && T.id) {
							const e = j ? Object(w.a)(b.c.replyToComment, j.id) : Object(w.a)(b.c.replyToPost, E),
								s = dt({
									postId: E,
									commentId: n,
									commentsPageKey: o
								});
							F.push(m.a.createElement(_e.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !c || !a && t,
								key: "commentsChat",
								postId: E,
								renderedInOverlay: h,
								subredditId: T.id
							}, ({
								scrollToBottom: t
							}) => p ? m.a.createElement(ke.a, {
								key: "chatCommentsForm",
								postId: E,
								replyComment: j,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: I
							}) : m.a.createElement(xe.a, {
								key: "loggedOutCommentForm",
								className: $e.a.ChatLoggedOutForm,
								location: f,
								openLoginModal: C,
								openRegisterModal: _,
								origin: k
							})))
						}
					} else F.push(m.a.createElement("div", {
						className: Object(x.a)($e.a.CommentsPaneWrapper, {
							[$e.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Ee.a, et({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: O.numComments,
						onClick: this.handleContentClick
					}), g && v > 0 && m.a.createElement(ye.a, {
						commentsPageKey: o,
						isActive: !1,
						moreCommentsId: "",
						count: v,
						onMoreCommentsItemClick: i
					}), m.a.createElement(ve.a, {
						commentId: n,
						commentsPageKey: o,
						postId: E,
						renderedInOverlay: h
					})))), e && c ? F.push(m.a.createElement(Ce.e, {
						key: "commentsErrorState",
						postId: E,
						commentId: n,
						sort: S,
						apiError: e
					})) : !a && t && F.push(m.a.createElement(Ce.a, {
						isAvatarsInCommentsEnabled: l,
						key: "commentsPlaceholder"
					}));
					else F.push(m.a.createElement(Ce.e, {
						postId: E,
						commentId: n,
						sort: S,
						apiError: e
					}));
					else this.didRenderLoading = !0, F.push(m.a.createElement(Ce.a, {
						isAvatarsInCommentsEnabled: l,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, F)
				}
			}
			const bt = lt(Object(H.b)(pt(Object(Re.c)(ht)))),
				gt = _.a.wrapped(Oe.a, "DetailsPageSidebar", $e.a),
				ft = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: r,
						handleFakeLightboxOverlayClick: o,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: u,
						subredditOrProfile: p
					} = e;
					if (!a && !d) return m.a.createElement(Ge.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: r,
						handleFakeLightboxOverlayClick: o,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && m.a.createElement(Oe.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (d) return m.a.createElement(Ke.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: p && m.a.createElement(Oe.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const h = i ? R.i : z.a;
					return m.a.createElement(Ye.a, {
						containerRef: n,
						maxWidth: R.i,
						fitPageToContent: u,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: p && m.a.Children.toArray([m.a.createElement(je.a, {
							key: p.name,
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: h,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object(Q.g)(p) && m.a.createElement(Ae.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: h,
							subredditId: p.id
						})]),
						sidebar: p && m.a.createElement(gt, {
							commentsPageKey: s,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object(Qe.a)(ct)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
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
					return t && Object(h.r)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
						o = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(p.f)(t)
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
					return Object(l.a)(n, o, a)
				},
				f = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(u.a)(e, s)
					}
				}),
				x = Object(a.b)(f);

			function v(e) {
				return x(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, r = g(t, s, n), o = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: r,
						hasSortParam: s,
						onOtherDiscussions: o,
						sort: n
					};
					return i.a.createElement(e, a)
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
				o = Object(n.a)((e, {
					subredditOrProfile: t
				}) => t, r, (e, t) => {
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
			const a = e => r.e[Object(o.O)(e, {})] === r.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.L
				}) === n.ab.Treatment
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
			const a = Object(n.a)(i.J, i.I, (e, t) => e || t),
				d = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.x
				}), e => e === r.D.Enabled)
		},
		"./src/reddit/selectors/experiments/commentsPageAd.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.O
				});
				return !!t && !Object(n.ud)(t)
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.pb
				});
				return !(!t || Object(n.ud)(t))
			}
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
				experimentName: n.Oc
			}) === n.Xc.Enabled
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/predictions/index.ts"),
				o = s("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: r.a
				}
			});
			const i = e => {
					const t = (e => {
						var t, s;
						return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === s ? void 0 : s.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const s = Object(o.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							r = n.options.map(e => ({
								text: e.text
							})),
							i = {};
						return s.document ? i.richText = JSON.stringify({
							document: s.document
						}) : s.markdown && (i.markdown = s.markdown), {
							title: s.title,
							isLiveChat: s.isChatPost,
							isNsfw: s.isNSFW,
							isSpoiler: s.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: i,
							options: r
						}
					}) : []
				},
				a = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === s ? void 0 : s.creation.length)
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.T)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				c = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = (e, t) => {
					const s = u(e, t);
					if (!s) return l;
					const n = Object(o.X)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : l
				},
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.T)(e, {
						subredditId: s
					}) : null
				},
				p = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.D)(e, {
								postId: n
							}) || null,
							a = o && Object(r.D)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const n = t.slice().sort();
					let o = -1;
					const i = Object(r.w)(e, {
							listingKey: s
						}),
						a = [];
					return h.forEach(t => {
						let s = o + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !p(e, s, t, i, n);) s += 1;
							s < i.length && (a.push(s), o = s)
						}
					}), a
				},
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.I)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const i = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = e => (e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: () => Object(d.I)(e),
					experimentName: n.Lc
				}) === n.Vc.Enabled
			})(e) && (e => {
				const t = Object(o.d)(e);
				return !!t && i.has(t.toLowerCase())
			})(e) && r.d.realtimeCommentsExperiment(e)
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				u = Object(n.a)(e => Object(o.f)(e), e => Object(r.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.d76e038ef73fbed83312.js.map