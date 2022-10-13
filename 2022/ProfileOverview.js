// https://www.redditstatic.com/desktop2x/ProfileOverview.a5a529ac9c76a741e935.js
// Retrieved at 10/13/2022, 12:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
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

			function a(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var i = {
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

			function u(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
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
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, r, o, a, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (r = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = a)), this.__index__ >= 0
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
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(r(e, t), 1)
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/chat/controls/Svg/index.m.less"),
				c = s.n(i);
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
					className: Object(o.a)(e.className, {
						[c.a.disable]: s,
						[c.a.active]: n,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
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
				return f
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "i", (function() {
				return k
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				a = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				_ = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = r()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				g = p.normalize;
			p.normalize = e => {
				g.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (_.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				y = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				E = (e, t) => {
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
					a = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = s("./node_modules/lodash/debounce.js"),
				a = s.n(o),
				i = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				u = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.Wc.Bottom_cell),
						t = Object(u.a)(c.Wc.Bottom_cell_dismissible),
						s = Object(u.a)(c.Wc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(u.a)(c.Wc.Bottom_cell_signup_upsell_copy),
						r = Object(u.a)(c.Wc.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.Wc.Bottom_sheet);
					return e || n || r ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function _(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(d.a)(), s = m(), o = Object(p.a)(s), l = Object(u.a)(c.Wc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => a()(() => {
							if (!o && s) {
								const e = document.getElementById(i.e),
									n = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									a = o / 3,
									c = 2 * o;
								n >= (l ? a : c) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, o, s, t, e])
					}();
					return n.createElement(e, f({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(r.c),
				a = Object(n.a)(r.b),
				i = Object(n.a)(r.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return j
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				f = Object(r.a)(a.e),
				_ = Object(r.a)(a.h),
				x = Object(r.a)(a.c),
				g = Object(r.a)(a.f),
				v = Object(r.a)(a.j),
				y = Object(r.a)(a.i),
				E = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(_());
					let g = !1;
					try {
						const t = p ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(i.a)(e, {
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
							if (k(t)) {
								if (O(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), g = !0
								} else if (C(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										a = [n, r],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(n),
										m = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), g = !0
								}
							} else g = !1
						}
					} catch (v) {
						g = !1
					}
					g || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !O(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, j = () => async (e, t, s) => {
					var n, r;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.Q)(a);
						return Object(o.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(g({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return Ce
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return je
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return we
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ne
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ie
			})), s.d(t, "profileOverviewRequested", (function() {
				return Fe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				c = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/config.ts"),
				l = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/reddit/actions/changeUsername.ts"),
				O = s("./src/reddit/actions/contentGate.ts"),
				C = s("./src/reddit/actions/externalAccount.ts"),
				j = s("./src/reddit/actions/gold/powerups.ts"),
				w = s("./src/reddit/actions/pinnedPost.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				S = s("./src/reddit/actions/profile/index.ts"),
				N = s("./src/reddit/actions/trophyCase.ts"),
				I = s("./src/reddit/constants/errors.ts"),
				F = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				L = s("./src/lib/initializeClient/installReducer.ts"),
				A = s("./node_modules/redux/es/redux.js"),
				D = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const B = {};
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.c:
					case T.b:
					case D.c:
					case D.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case T.a:
					case D.a: {
						const {
							key: s,
							error: n
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
			const z = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.c:
						case D.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case T.b:
						case T.a:
						case D.b:
						case D.a: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				W = Object(A.c)({
					error: M,
					pending: U
				});
			const V = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case D.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, r = e[s];
						return {
							...e,
							[s]: {
								...r,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.b:
						case D.b: {
							const {
								key: s,
								overviewIds: n
							} = t.payload, r = e[s] || [];
							return {
								...e,
								[s]: [...r, ...n]
							}
						}
						default:
							return e
					}
				},
				G = s("./src/lib/omitKey/index.ts");
			const H = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.b:
						case D.b: {
							const {
								key: s,
								dist: n,
								token: r
							} = t.payload;
							return r ? {
								...e,
								[s]: {
									dist: n,
									token: r
								}
							} : Object(G.a)(e, s)
						}
						default:
							return e
					}
				},
				J = Object(A.c)({
					api: W,
					fetchedTokens: q,
					ids: Z,
					loadMore: Q
				});
			const X = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.f:
					case T.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case T.d: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case T.e:
						case T.d: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				te = Object(A.c)({
					error: Y,
					pending: ee
				}),
				se = s("./src/reddit/actions/profileConversations.ts");
			const ne = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.c:
					case se.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case se.a: {
						const {
							extraCommentsId: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
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
						case se.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case se.b:
						case se.a: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				ie = Object(A.c)({
					error: re,
					pending: ae
				});
			const ce = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.e:
						case se.b:
						case se.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				le = Object(A.c)({
					api: ie,
					models: de
				}),
				ue = s("./node_modules/lodash/mapValues.js"),
				me = s.n(ue),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				be = s("./src/reddit/constants/comments.ts");
			const he = {};

			function fe(e) {
				const t = e;
				return me()(t, e => {
					let {
						depth: t,
						next: s,
						prev: n
					} = e;
					return {
						depth: t,
						next: s,
						prev: n
					}
				})
			}
			const _e = (e, t, s) => {
				const n = {};
				for (const r in t) {
					const e = t[r],
						s = e.postId;
					n.hasOwnProperty(s) ? n[s] = {
						...n[s],
						[r]: e
					} : n[s] = {
						[r]: e
					}
				}
				for (const r in s) {
					const e = s[r],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = {
						...n[t],
						[r]: e
					} : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.e:
					case se.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: r,
							profileName: o
						} = t.payload, a = _e(r, s, n), i = {};
						for (const e of r) {
							i[Object(pe.a)(e, o)] = a.hasOwnProperty(e) ? fe(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case se.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: r,
							extraCommentsId: o,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][o]);
							if (!t) return e;
							const s = {
									...e[t]
								} [o].prev,
								n = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[n]: {
										...e[t][n],
										next: null
									}
								}
							}
						}
						const c = a[0],
							d = fe(_e(a, s, r)[c]),
							l = Object(pe.a)(c, i),
							u = {
								...e[l]
							},
							m = u[o].prev,
							p = m && m.id || "",
							b = n[c].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: be.a.Comment
							},
							_ = {
								...u,
								[p]: {
									...u[p],
									next: f
								},
								...d,
								[h]: {
									...d[h],
									prev: m
								}
							};
						return {
							...e,
							[l]: _
						}
					}
					default:
						return e
				}
			};
			const ge = {};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.e:
					case se.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: r
						} = t.payload, o = {};
						for (const e of n) {
							o[Object(pe.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			const ye = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.e:
						case se.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, r = {};
							for (const e of s) {
								r[Object(pe.a)(e, n)] = e
							}
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ke = Object(A.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: xe,
					keyToHeadCommentId: ve,
					keyToPostId: Ee
				}),
				Oe = Object(A.c)({
					chrono: J,
					conversations: ke
				});
			Object(L.a)({
				pages: {
					profileOverview: Oe
				}
			});
			const Ce = Object(E.a)(T.f),
				je = Object(E.a)(T.e),
				we = Object(E.a)(T.d),
				Pe = Object(E.a)(T.c),
				Se = Object(E.a)(T.b),
				Ne = Object(E.a)(T.a),
				Ie = (e, t, s, n) => async (n, r, a) => {
					const i = r(),
						c = !!i.listings.postOrder.ids[e],
						f = !!Object(g.c)(i, {
							listingKey: e
						});
					if (!!Object(g.d)(i, {
							listingKey: e
						}) || c && !f) return;
					n(Ce({
						key: e
					}));
					const _ = await Object(R.a)("profile", () => ((e, t, s) => Object(u.a)(e, {
							data: s,
							endpoint: Object(m.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: o.ob.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(a.apiContext(), t, s)),
						x = _.body;
					await Object(h.a)(a.gqlContext, x.posts).then(e => x.posts = e);
					const {
						pinned: y,
						postIds: E
					} = x;
					if (_.ok) {
						n(je({
							key: e,
							meta: i.meta,
							profileName: t,
							...x,
							postIds: E
						}));
						const s = Object(v.n)(r(), t);
						n(Object(w.h)({
							profileId: s,
							pinned: y
						}))
					} else n(we({
						account: _.body.data ? _.body.data.account : null,
						error: _.body.reason ? {
							type: _.body.reason
						} : _.error,
						key: e
					})), _.body.reason === I.a.DeletedProfile && n(Object(O.u)({
						profileName: t
					})), n(Object(P.n)(_.status))
				}, Fe = e => async (t, s, n) => {
					const {
						queryParams: d,
						params: l
					} = e, {
						sort: u,
						t: m
					} = Object(i.a)(s(), d), {
						profileName: p
					} = l;
					let b = !1;
					const h = f.e[Object(x.S)(s(), {})],
						g = p.toLowerCase(),
						E = {
							...r()(e.queryParams, _.k),
							sort: u,
							layout: h,
							t: m
						},
						O = [t(S.d(g))],
						w = Object(F.a)(g, o.zb, u, e.queryParams);
					if (s().listings.postOrder.ids[w] && !s().listings.postOrder.api.error[w] ? b = !0 : O.push(t(Ie(w, g, E, !0))), O.push(t(Object(a.b)())), await Promise.all(O), b) return;
					const I = s();
					if (!I.platform.currentPage) return;
					if (200 !== I.platform.currentPage.status) return;
					const R = Object(v.n)(s(), g),
						T = Object(y.Ab)(I, {
							userName: p
						}).id;
					t(P.m({
						title: Re(s(), p)
					})), Object(y.S)(I) && Object(y.W)(I, p) && t(Object(k.startChangeUsernameFlow)());
					const L = [t(Object(c.q)()), t(N.b(g, R)), t(S.b(g)), t(C.o(p)), t(S.i(p)), t(j.i(p, T))];
					await Promise.all(L)
				}, Re = (e, t) => Object(v.r)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return $
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return oe
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return xe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ye
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ee
			})), s.d(t, "submitRemovalReason", (function() {
				return ke
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Oe
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case c:
					case l:
					case u:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case d:
						case u:
						case m:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				x = Object(o.c)({
					error: f,
					pending: _
				});
			const g = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case c:
					case u: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const y = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: r
						} = n;
						return {
							...e,
							[s]: r
						}
					}
					case c: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, r = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				O = Object(o.c)({
					api: x,
					models: v,
					reasonOrder: E,
					removedItemIds: k
				}),
				C = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				S = s("./src/reddit/actions/bulkActions/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				F = s("./src/reddit/actions/comment/moderation.ts"),
				R = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				B = s("./src/lib/omitHeaders/index.ts"),
				M = s("./src/reddit/constants/headers.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(D.a)(Object(B.a)(e, [M.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: C.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(D.a)(Object(B.a)(e, [M.a]), {
					endpoint: Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: C.ob.POST,
					type: "json",
					data: t
				});
			var V = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				Z = s("./src/reddit/models/ModQueue/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				H = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: O
				}
			});
			const Y = Object(j.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(j.a)(a),
				ee = Object(j.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s().subreddits.models[e].name;
					t(Y());
					const a = await ((e, t) => Object(D.a)(Object(B.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.ob.GET
					}))(r(), o);
					a.ok ? t($({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, se = Object(j.a)(i), ne = Object(j.a)(c), re = Object(j.a)(d), oe = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					s(se());
					const c = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: C.ob.POST,
						data: s
					}))(a(), i, t);
					if (c.ok) {
						const {
							id: r
						} = c.body, o = {
							...t,
							id: r
						};
						s(ne({
							subredditId: e,
							reason: o
						})), s(Object(L.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, ae = Object(j.a)(l), ie = Object(j.a)(u), ce = Object(j.a)(m), de = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					s(ae());
					const c = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: C.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					c.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(L.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(c.error))
				}, le = Object(j.a)(p), ue = Object(j.a)(b), me = Object(j.a)(h), pe = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					s(le());
					const c = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [M.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: C.ob.DELETE
					}))(a(), i, t);
					c.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(L.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(c.error))
				}, be = Object(j.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(R.i)(A.a.ADD_REMOVAL_REASON))
				}, fe = Object(j.a)("REMOVALREASONS__SUBMIT_PENDING"), _e = Object(j.a)("REMOVALREASONS__SUBMIT_SUCCESS"), xe = Object(j.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(j.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(j.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ye = Object(j.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(j.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, s, n, r, o) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(V.a)(m) ? H.e.Post : H.e.Comment,
						b = p === H.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						h = p === H.e.Post ? T.S : N.j;
					if (!b || !u) return !1;
					a(fe()), a(h({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const f = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						_ = await U(d(), f);
					if (_.ok) {
						if (a(_e()), t) {
							a(ge());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: o,
									type: n
								},
								i = await W(d(), Object(H.h)(r, p), p);
							if (i.ok) {
								if ([H.f.Public, H.f.PublicAsSubreddit].includes(n)) {
									if (a(ye()), i.body) {
										const e = Object(q.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(X.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let r = s && n && Object(K.a)(n, l, l.posts.models[e.postId]);
										if (r || (r = Object(w.a)(e.postId, null, {
												sort: C.x,
												hasSortParam: !0
											})), p === H.e.Post) {
											const s = Object(P.a)(G.c.replyToPost, m);
											a(Object(I.r)({
												...t,
												headCommentId: Object(J.w)(l, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											a(Object(F.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), n && n !== e.id && a(Object(N.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === H.e.Comment) {
											const e = Object(P.a)(G.c.replyToComment, b.id),
												s = Object(J.j)(l, {
													commentId: m,
													commentsPageKey: r
												});
											a(Object(I.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(ve());
								return !0
							}
							return a(Ee(i.error)), !1
						}
					} else a(xe(_.error)), a(h({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Oe = (e, t, s, r, o) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					a(fe());
					const m = Object(L.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await U(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: Z.a.RemovalReason,
							username: u,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (a(Object(S.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								o = await W(d(), Object(H.h)(n, H.e.Bulk), H.e.Bulk);
							o.ok ? (a(ve()), a(m)) : a(Ee(o.error))
						} else a(m)
					} else a(xe(b.error))
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				m = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				p = s.n(m);
			const b = e => {
				let t;
				switch (e) {
					case u.b.ExtraLarge:
						t = p.a.ExtraLarge;
						break;
					case u.b.Large:
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
				const u = Object(o.d)();
				if (!Object(o.e)(l.a) || !t.isSponsored && !t.isCreatedFromAdsUi || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return r.a.createElement("div", {
					className: Object(a.a)(n, p.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(i.z)(t, d.a.Click))
					}
				}, r.a.createElement(c.b, {
					className: Object(a.a)(p.a.Content, b(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= i && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(a.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
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
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = s("./src/reddit/components/Footer/index.tsx"),
				_ = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.tsx"),
				g = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = s("./node_modules/lodash/flatMap.js"),
				y = s.n(v),
				E = s("./src/lib/linkMatchers/index.ts"),
				k = s("./src/lib/linkMatchers/customLinks.ts"),
				O = s("./src/reddit/controls/OutboundLink/index.tsx");
			const C = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(C);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, r, o] = t.slice(n, n + 3);
						s.push(e), s.push([o, r])
					}
					return s
				};
			var w = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, j)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(k.g.subreddit.prefix, k.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return o.a.createElement(O.b, {
								className: e.linkClassName,
								href: n,
								key: s
							}, r)
						}
						return o.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				P = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/chat/controls/Svg/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => o.a.createElement(I.a, F({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				T = s("./src/reddit/models/ContentGate.ts"),
				L = s("./src/lib/constants/index.ts"),
				A = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/user.ts");
			var B = s("./src/reddit/selectors/meta.ts"),
				M = s("./src/reddit/components/ContentGate/index.m.less"),
				z = s.n(M);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = l.a.wrapped(R, "PrivateKey", z.a), V = l.a.div("ButtonsContainer", z.a), q = l.a.div("Container", z.a), K = l.a.div("ContainerExp", z.a), Z = l.a.div("Description", z.a), G = l.a.div("PrivateSubredditDetails", z.a), H = l.a.div("PrivateSubredditDescription", z.a), Q = l.a.h3("PrivateSubredditName", z.a), J = l.a.a("Link", z.a), X = l.a.wrapped(N.n, "LinkRouterButton", z.a), Y = l.a.wrapped(N.m, "LinkButton", z.a), $ = l.a.wrapped(N.q, "SecondaryLinkRouterButton", z.a), ee = l.a.wrapped(N.p, "SecondaryLinkButton", z.a), te = l.a.wrapped(X, "GoHomeLinkButton", z.a), se = l.a.wrapped(h.a, "CreateCommunityButton", z.a), ne = l.a.img("Image", z.a), re = l.a.img("ImagePlaceholder", z.a), oe = l.a.wrapped(X, "LeftLinkRouterButton", z.a), ae = l.a.wrapped(Y, "LeftLinkButton", z.a), ie = l.a.wrapped(ee, "SecondaryLeftLinkButton", z.a), ce = l.a.wrapped($, "SecondaryLeftLinkRouterButton", z.a), de = l.a.h3("Title", z.a), le = l.a.div("PageBody", z.a), ue = l.a.div("InterstitialMessageWrapper", z.a), me = Object(d.c)({
				isLoggedIn: D.P,
				origin: B.k,
				user: D.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(D.Q)(e)) return !1;
					const t = Object(A.d)(e);
					if (!t) return !1;
					const s = Object(D.f)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const r = 30 * L.E;
					return n > Date.now() - r
				})(e),
				isSeo: B.h
			}), pe = Object(S.u)(), be = Object(a.b)(me, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(s)), window.location.reload()
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
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: v,
					quarantineMessage: y,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: k,
					interstitialWarningMessage: O,
					interstitialWarningMessageHtml: C,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: S,
					subredditDescription: N,
					subredditName: I,
					user: F
				} = e, R = async () => {
					if (i ? await S() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(P.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case T.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, U._("r/{community name} is a Reddit Premium community", [U._param("community name", I)], {
							hk: "2lyDwB"
						})), o.a.createElement(Z, null, U._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(V, null, F ? o.a.createElement(ie, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, U._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ae, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), F ? o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, U._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case T.a.Nsfw:
					case T.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, s === T.a.Nsfw ? U._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : U._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Z, null, U._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(V, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, U._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: R,
							redditStyle: !0
						}, U._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case T.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(W, null), o.a.createElement(de, null, "r/", I, " ", U._("is a private community", null, {
							hk: "7zZmq"
						})), N && N.length && o.a.createElement(G, null, o.a.createElement(Q, null, "r/", I), o.a.createElement(H, null, o.a.createElement("div", null, N))), o.a.createElement(Z, null, U._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", I, " ", U._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), U._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(V, null, F ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: z.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ie, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${I}`,
							redditStyle: !0
						}, U._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), I && o.a.createElement(g.a, {
							subredditName: I
						}));
					case T.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, U._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(Z, null, U._("This community is {=quarantined}", [U._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, U._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, k ? o.a.createElement(x.b, {
							content: k,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? o.a.createElement(_.a, {
							html: E
						}) : y || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), U._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(V, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? o.a.createElement(V, null, o.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Y, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, U._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(V, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, U._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(F, r, v)));
					case T.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, null, U._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(Z, null, o.a.createElement(ue, null, j ? o.a.createElement(x.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : C ? o.a.createElement(_.a, {
							html: C
						}) : O), U._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(V, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, U._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: a,
							redditStyle: !0
						}, U._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case T.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, U._("r/{community name} has been banned from Reddit", [U._param("community name", I)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(Z, null, e ? o.a.createElement(w, {
							linkClassName: z.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : U._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(V, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(V, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, null), o.a.createElement(de, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Z, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(V, null, F && o.a.createElement(se, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.ProfileDoesNotExist:
					case T.a.ProfileDeleted:
					case T.a.ProfileSuspended:
					case T.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case T.a.ProfileBlockedForLegalReason:
									return U._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case T.a.ProfileDeleted:
									return U._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case T.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, U._("This account has been {=suspended} .", [U._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, U._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case T.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Z, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, U._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(V, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(i.i)(e => {
				const t = Object(r.useContext)(c.a) ? K : q;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(le, null, he(e))), o.a.createElement(f.b, null))
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
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = s.n(f),
				x = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = x.a.wrapped(l.c, "StyledTooltip", _.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), i(c)
					},
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, s) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CreatorStats/EducationUnit.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/CreatorStats/Icon.tsx");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(i.a.container, t)
				}, r.a.createElement("div", {
					className: i.a.innerContainer
				}, d._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), r.a.createElement(c.a, null)))
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
				return f
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					participantsCount: t
				} = e;
				return u._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [u._param("total participated users", Object(l.b)(t)), u._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					r = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					u = Object(a.e)(e => Object(d.V)(e, {
						postId: t.id
					}));
				return o.a.createElement("div", {
					className: b.a.container
				}, o.a.createElement("div", {
					className: b.a.label
				}, o.a.createElement("span", null, null == u ? void 0 : u.displayText), r && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && o.a.createElement(m, {
					participantsCount: s.totalParticipantsCount
				}), o.a.createElement(i.a, {
					className: b.a.awards,
					thing: t
				})), o.a.createElement("h3", {
					className: b.a.title
				}, s.name))
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Footer/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.div("UserAgreement", d.a), m = i.a.a("UserAgreementLink", d.a), p = i.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(a.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, r.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", r.a.createElement(m, {
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
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = a.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
				}
				return o.a.createElement(t, {
					className: u.a.icon
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
			}, h = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "3MHgRl"
			}))), m._param("=Content Policy", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), f = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "yMHtU"
			}))), m._param("=Content Policy", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), _ = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return m._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case d.g.Author:
						return m._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case d.g.AuthorDeleted:
						return m._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case d.g.AutomodFiltered:
						return m._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case d.g.CommunityOps:
						return m._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case d.g.ContentTakedown:
						return m._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case d.g.CopyrightTakedown:
						return m._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case d.g.Moderator:
						return m._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [m._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case d.g.Reddit:
						return m._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return m._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, x = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", o.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("{subreddit name}", [m._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case d.g.CommunityOps:
						return m._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case d.g.ContentTakedown:
						return o.a.createElement(f, null);
					case d.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case d.g.Moderator:
						return m._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case d.g.Reddit:
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, g = (e, t, s) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return m._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case d.g.Author:
						return m._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case d.g.AuthorDeleted:
						return m._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case d.g.AutomodFiltered:
						return m._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case d.g.CommunityOps:
						return m._("This post was removed by Reddit admin, u/{username}.", [m._param("username", t)], {
							hk: "34nHWu"
						});
					case d.g.ContentTakedown:
						return m._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case d.g.CopyrightTakedown:
						return m._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case d.g.Moderator:
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", s), m._param("username", t)], {
							hk: "270bcn"
						});
					case d.g.Reddit:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, v = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case d.g.AutomodFiltered:
						return m._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case d.g.CommunityOps:
						return m._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [m._param("=just ask", o.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return o.a.createElement(f, null);
					case d.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case d.g.Moderator:
						return m._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case d.g.Reddit:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
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
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				creatorStatsContainer: "_29kkIwCUHX4r6IdznhyYEE",
				shouldShowOverflow: "_24r9i5ZTqf6P77tAstM-O3",
				shouldUseRoundedBorder: "_3LGrZR10DLu8LvoWRwzdHL",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				_ = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				F = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				R = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				A = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				B = s("./src/reddit/components/CreatorStats/loader.tsx"),
				M = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				z = s("./src/reddit/components/Flatlist/index.tsx"),
				U = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				q = s("./src/reddit/components/ModModeReports/index.tsx"),
				K = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Z = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				G = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				H = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Q = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Y = s("./src/reddit/components/PostMedia/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				te = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				se = s.n(te);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var re = () => r.a.createElement("div", {
					className: se.a.container
				}, r.a.createElement(ee.a, {
					className: se.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: se.a.metaText
				}, ne._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/PostTitle/index.tsx"),
				ie = s("./src/reddit/components/PostTopLine/index.tsx"),
				ce = s("./src/reddit/components/SourceLink/index.tsx"),
				de = s("./src/reddit/constants/postLayout.ts"),
				le = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				me = s("./src/reddit/contexts/Post/index.tsx"),
				pe = s("./src/reddit/helpers/isCrosspost.ts"),
				be = s("./src/reddit/helpers/localStorage/index.ts"),
				he = s("./src/reddit/helpers/path/index.ts"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				_e = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				xe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ge = s("./src/reddit/hooks/useClickSourceData.ts"),
				ve = s("./src/reddit/models/Audio/index.ts"),
				ye = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Ee = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ke = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Oe = s("./src/reddit/constants/experiments.ts"),
				Ce = s("./src/reddit/helpers/chooseVariant/index.ts"),
				je = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const we = Object(i.a)(w.N, e => e.some(je.d)),
				Pe = Object(i.a)(we, e => e),
				Se = (e, t) => Object(Ce.c)(e, {
					experimentName: Oe.jd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Pe(e, {
							listingKey: s
						})
					}
				});
			var Ne = s("./src/reddit/selectors/modQueue.ts"),
				Ie = s("./src/reddit/selectors/postFlair.ts"),
				Fe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Re = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Te = s.n(Re),
				Le = s("./src/reddit/selectors/i18n/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				De = s("./src/reddit/components/LargePost/index.m.less"),
				Be = s.n(De);

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ze = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...o
					} = e;
					return r.a.createElement(F.a, Me({}, o, {
						className: Object(N.a)(t, Be.a.styledLink, {
							[Be.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				Ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(w.N)(e, {
						listingKey: s
					}) : void 0
				},
				We = Object(o.b)(() => Object(i.c)({
					autoplayPref: P.b,
					isModQueueDisplayEnabled: Ne.b,
					activeModalId: O.a,
					hideNSFWPref: P.F,
					flairStyleTemplate: ue.W,
					isBlurredPreview: ke.b,
					isCurrentUserProfilePost: w.l,
					isLoggedIn: P.Q,
					isActive: w.j,
					showPromotedCTA: Fe.a,
					moderatorPermissions: j.m,
					modModeEnabled: ue.U,
					posts: Ue,
					postHeightVariant: Se,
					shouldShowNsfwListingBelow: Le.b,
					showEditFlair: Ie.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(j.i)(e, s.id)
					},
					isAdblockAAMitigationEnabled: Ae.a,
					isOptionalTextEnabled: ye.a,
					showCTAExperimentDesign: C.a
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === k.a.upvoted ? Object(m.kb)(s) : Object(m.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(m.gb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ve = r.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: o,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? r.a.createElement(ze, {
						"data-click-id": "body",
						target: o ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : r.a.createElement(r.a.Fragment, null, i)
				}),
				qe = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: k,
						flairStyleTemplate: O,
						forceLoadMedia: C,
						hideNSFWPref: j,
						hostPostData: w,
						imageGalleryCurrentItem: F,
						inSubredditOrProfile: ee = !1,
						isBlurredPreview: te,
						isCommentsPage: se,
						isCurrentUserProfilePost: ne,
						isFrontpage: le,
						isGalleryTileLayoutDefault: ue,
						isModWithUserNotesPermissions: me,
						isLoggedIn: ye,
						isOverlay: ke,
						isTopicPage: Ce,
						isCommentCountAnimationEnabled: je,
						isVoteCountAnimationEnabled: we,
						isCountAnimShadowTestEnabled: Pe,
						listingIndex: Se,
						listingKey: Ne,
						moderatorPermissions: Ie,
						modModeEnabled: Fe,
						onClickPost: Re,
						onIgnoreReports: Le,
						onOpenReportsDropdown: Ae,
						post: De,
						postHeightVariant: Me,
						scrollerItemRef: ze,
						shouldShowGalleryTileOption: Ue,
						shouldShowInsightsButton: We,
						shouldShowNsfwListingBelow: qe,
						showEditFlair: Ke,
						showPromotedCTA: Ze,
						subredditOrProfile: Ge,
						userIsOp: He,
						postId: Qe,
						postIds: Je,
						onceInViewport: Xe,
						isAdblockAAMitigationEnabled: Ye,
						isOptionalTextEnabled: $e,
						showCTAExperimentDesign: et,
						isModQueueDisplayEnabled: tt
					} = e, st = Object(v.a)(), nt = Ge, rt = !!e.redditStyle || !!e["data-redditstyle"], ot = rt ? void 0 : O, at = Object(l.a)(Ie), it = Fe && at, ct = Object(c.a)(Ie), dt = Object(d.a)(Ie), lt = Object(K.c)(De), ut = Object(V.a)(De), mt = !!De.media && De.media.type === y.o.RTJSON, pt = He && mt, bt = s ? s - X.a : void 0, ht = !!De.recommendationContext, ft = !(le && ye || Ce) || ht && ye, _t = (e => e === Oe.pf.OnlyTitles)(Me) && !Object(pe.a)(De), xt = (e => e === Oe.pf.MediumHeight)(Me) && !Object(pe.a)(De), gt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: r
						} = e;
						if (!Object(E.u)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const o = n && 0 === n.indexOf(s.id),
							a = n && 1 === n.indexOf(s.id),
							i = r && r[1] && Object(E.u)(r[1]);
						return {
							hasTopCompactPostStyles: o && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: o
						}
					})(e), vt = Object(o.d)(), yt = Object(o.e)(Ee.b), Et = Object(o.e)(Ee.c), kt = Object(o.e)(P.jb), Ot = Object(ge.a)(), Ct = De.media && Object(y.H)(De.media) ? Object(_e.c)(De.id, nt.name) : De.permalink, jt = e.isCommentPermalink ? Object(he.b)(Ct) : Object(I.a)(Ct, void 0, Ot), wt = !!(null == w ? void 0 : w.shouldShowLinkedPosts), Pt = (!ee || wt || qe) && !De.isSponsored, St = Object(S.t)(De, F), {
						source: Nt
					} = St, It = Object(n.useRef)(null), Ft = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Xe || Xe(Se))
						})
					}, [Xe, Se]);
					Object(g.a)(It, Ft);
					const [Rt, Tt] = Object(n.useState)(!1), Lt = Object(n.useCallback)(() => {
						Tt(!Rt), Object(be.Mb)(), st(Object(xe.d)(Qe))
					}, [Rt, st, Qe]), At = De.isSponsored && !(De.media && y.a.has(De.media.type)) && !Ye, Dt = !!(te && (null == Ge ? void 0 : Ge.isNSFW)), Bt = Object(n.useRef)({
						renderingObjectInfo: De
					}), Mt = Object(n.useCallback)(e => {
						!yt && !Et || De.media && Object(y.H)(De.media) || (e.preventDefault(), vt(Object(m.bb)(Object(he.b)(De.permalink), De.id)))
					}, [vt, yt, Et, De.id, De.media, De.permalink]), zt = De && De.media && (De.media.type === y.o.TEXT || De.media.type === y.o.RTJSON);
					return r.a.createElement(x.b, null, r.a.createElement(J.b, {
						className: Object(N.a)(Be.a.container, i, Te.a.largeAndMediumPostStyles, Te.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[Te.a.mUseRedditTheme]: rt,
							promotedvideolink: At,
							[Be.a.topCompactPost]: gt && gt.hasTopCompactPostStyles,
							[Be.a.bottomCompactPost]: gt && gt.hasBottomCompactPostStyles,
							[Be.a.shouldShowOverflow]: We
						}),
						isOverlay: ke,
						style: Object(u.b)(e.flairStyleTemplate),
						post: De,
						onClick: Re,
						eventFactory: k
					}, r.a.createElement("div", {
						ref: It
					}), r.a.createElement(oe.a, {
						model: De,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Pe,
						isVoteCountAnimation: we,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ot,
						redditStyle: rt,
						postId: Qe
					}), r.a.createElement(Q.a, {
						className: Object(N.a)(Be.a.backgroundWrapper, {
							[Be.a.isEvent]: Object(fe.a)(De),
							[Be.a.shouldUseRoundedBorder]: We
						}),
						"data-click-id": "background",
						flairStyleTemplate: ot,
						post: De,
						redditStyle: rt
					}, r.a.createElement(M.a, {
						post: De
					}), gt && gt.showPinnnedHeader && r.a.createElement(re, null), Object(a.c)(De) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: De
					}), r.a.createElement(h.a, {
						post: De
					})), !Object(a.c)(De) && r.a.createElement(r.a.Fragment, null, !!De.recommendationContext && r.a.createElement(H.a, {
						content: De.recommendationContext.content,
						layout: de.g.Large,
						post: De
					}), r.a.createElement(ie.a, {
						className: Be.a.postTopLine,
						hideNSFWPref: j,
						hostPostData: w,
						iconClassName: Be.a.postTopLineIcon,
						inSubredditOrProfile: ee,
						isCommentsPage: !!se,
						isCompactPinnedPost: !!gt,
						isCurrentUserProfilePost: ne,
						isModWithUserNotesPermissions: me,
						isOverlay: !!ke,
						isTopicPage: !!Ce,
						listingKey: Ne,
						post: De,
						shouldShowSubscribeButton: ft,
						showSubreddit: Pt,
						showSubredditIcon: !0,
						subredditOrProfile: Ge
					}), r.a.createElement(ae.c, {
						className: Be.a.postTitle,
						post: De,
						redditStyle: rt,
						size: ae.b.Large,
						titleColor: ot && ot.postTitleColor,
						isOverlay: ke
					}), r.a.createElement(L.a, {
						className: Be.a.adSupplementaryText,
						post: De,
						size: ae.b.Large
					}), De.source && !De.isSponsored && !(De.media && Object(y.H)(De.media)) && !Dt && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
						className: Be.a.sourceLink,
						post: De
					}), $e && De.media && De.media.type !== y.o.TEXT && De.media.type !== y.o.IMAGE && De.media.richtextContent && r.a.createElement(_.a, {
						content: De.media.richtextContent,
						rtJsonElementProps: Bt.current
					}))), r.a.createElement("div", {
						className: Be.a.postMediaWrapper
					}, !gt && r.a.createElement(Ve, {
						handlePostLinkClick: Mt,
						postPermalink: jt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: kt,
						shouldStylePostAfterVisitLink: zt
					}, r.a.createElement(Y.a, {
						isGalleryTileLayoutDefault: ue,
						isListing: !0,
						isMediumHeight: xt,
						isNotCardView: !!ke,
						isTitleOnly: _t,
						showCentered: !0,
						flairStyleTemplate: ot,
						post: De,
						availableWidth: bt,
						shouldLoad: C,
						scrollerItemRef: ze,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ue,
						showPromotedCTA: Ze
					}))), Ze && Nt && Nt.url && !De.isSurveyAd && r.a.createElement(R.a, {
						className: Be.a.adLinkWrapper,
						ctaExperimentDesign: et && "card"
					}, r.a.createElement(T.a, {
						post: De,
						adLinkContent: St,
						ctaExperimentDesign: et && "card"
					})), Fe && at && ut && !tt && r.a.createElement("div", {
						className: Be.a.modModeBannerWrapper
					}, r.a.createElement(W.a, {
						thing: De
					})), Fe && at && lt && !tt && r.a.createElement("div", {
						className: Be.a.modModeBannerWrapper
					}, r.a.createElement(q.a, {
						onIgnoreReports: Le,
						reportable: De
					})), Object(ve.c)(De) && r.a.createElement(b.a, {
						post: De
					}), r.a.createElement(U.d, null), tt && r.a.createElement(G.a, {
						post: De
					}), r.a.createElement("div", {
						className: Be.a.flatListContainer
					}, r.a.createElement(D.a, {
						className: Be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ot,
						model: De,
						onVoteClick: e.handleVote
					}), !De.isSurveyAd && (tt ? r.a.createElement(Z.a, {
						content: De,
						listingKey: Ne,
						hostPostData: w
					}) : r.a.createElement(z.c, {
						currentUser: p,
						hasModFlairPerms: ct,
						hasModFullPerms: dt,
						hasModPostPerms: at,
						hostPostData: w,
						isCommentCountAnimation: je,
						isCountAnimShadowTestEnabled: Pe,
						isLargePost: !0,
						isOverlay: !!ke,
						listingKey: Ne,
						modModeEnabled: Fe,
						onClickInsightsButton: Lt,
						onIgnoreReports: Le,
						onOpenReportsDropdown: Ae,
						post: De,
						shouldShowInsightsButton: We,
						showEditPost: pt,
						showEditFlair: Ke,
						useFlatlistBreakpoints: Object($.b)({
							editPost: !1,
							save: !it,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Ge && Rt && r.a.createElement(B.a, {
						className: Be.a.creatorStatsContainer,
						post: De,
						subreddit: Ge,
						isOwnProfileStats: !0
					})), le && r.a.createElement(A.a, {
						post: De,
						postIds: null != Je ? Je : [],
						subredditId: null == Ge ? void 0 : Ge.id
					})))
				});
			qe.displayName = "LargePostMemoized";
			t.default = Object(me.b)(We(Object(le.b)(qe)))
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: b
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, o.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, o.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: b
				}), o.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.e)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(u.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(m.author, s), b && b.isQuarantined && o.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.b, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
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
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = s.n(a);
			const c = e => {
				let {
					post: t
				} = e;
				var s;
				return o.a.createElement("p", {
					className: i.a.postStats
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", n.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [n.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return be
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				l = s("./src/reddit/components/OverflowMenu/index.tsx"),
				u = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = s("./src/reddit/components/ReportFlow/new.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				x = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				g = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/trackers/gild.ts"),
				y = s("./src/reddit/helpers/trackers/modTools.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/actions/comment/moderation.ts"),
				j = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/post.ts"),
				S = s("./src/reddit/actions/postFlair.ts"),
				N = s("./src/reddit/actions/removalReasons/index.ts"),
				I = s("./src/reddit/actions/reportFlow/index.ts"),
				F = s("./src/reddit/selectors/activeModal.ts"),
				R = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				T = s("./src/reddit/selectors/moderatorPermissions.ts"),
				L = s("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const A = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.m || Object(g.b)(e) && [L.g.AntiEvilOps, L.g.CommunityOps, L.g.ContentTakedown, L.g.CopyrightTakedown, L.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : e.isSpam ? n.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.m ? n.FILTERED : n.UNMODERATED
			};
			var D = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				B = s.n(D),
				M = s("./src/lib/classNames/index.ts"),
				z = s("./src/reddit/components/HumanDate/index.tsx"),
				U = s("./src/reddit/components/UserIcon/index.tsx"),
				W = s("./src/reddit/helpers/name/index.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				K = s.n(q);
			const Z = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(V.Ab)(e, {
					userName: null == t ? void 0 : t.approvedBy
				}) : null);
				if (!n) return null;
				const o = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: K.a.userIconWrapper
				}, a.a.createElement(U.a, {
					className: Object(M.a)(K.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})), a.a.createElement("div", {
					className: K.a.statusText
				}, a.a.createElement("p", {
					className: K.a.status
				}, r.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, Object(W.e)(null == n ? void 0 : n.username), o && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(z.d, {
					seconds: o
				})))))
			};
			var G = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const H = e => {
				let {
					content: t
				} = e;
				const s = Object(o.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || s.push({
						icon: "bot_fill",
						heading: r.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case G.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case G.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case G.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case G.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: r.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case G.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: n.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return a.a.createElement("div", {
					className: K.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: r
					} = e;
					return a.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: K.a.filteredRow
					}, a.a.createElement(O.a, {
						isFilled: !0,
						name: r,
						className: Object(M.a)(K.a.coloredIcon, K.a.icon)
					}), a.a.createElement("div", {
						className: K.a.statusText
					}, a.a.createElement("p", {
						className: K.a.status
					}, s), n && a.a.createElement("p", null, n)))
				}))
			};
			var Q = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				J = s("./src/reddit/selectors/subreddit.ts");
			const X = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(V.Ab)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					o = Object(g.b)(t),
					c = Object(i.e)(e => Object(J.X)(e, {
						subredditId: o ? t.belongsTo.id : t.subredditId
					})),
					d = o && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(Q.b)(d) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, n ? a.a.createElement("div", {
					className: K.a.userIconWrapper
				}, a.a.createElement(U.a, {
					className: Object(M.a)(K.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : a.a.createElement(O.a, {
					isFilled: !0,
					name: l,
					className: Object(M.a)(K.a.coloredIcon, K.a.icon)
				}), a.a.createElement("div", {
					className: K.a.statusText
				}, a.a.createElement("p", {
					className: K.a.status
				}, r.fbt._("Removed{spam}{reason}", [r.fbt._param("spam", t.isSpam ? " as spam" : ""), r.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, (null == n ? void 0 : n.username) ? a.a.createElement(a.a.Fragment, null, Object(W.e)(null == n ? void 0 : n.username), u && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(z.d, {
					seconds: u
				}))) : d && Object(Q.f)(d, c.name))))
			};
			var Y = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				$ = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var se = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ne = (s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx"), s("./src/reddit/icons/fonts/Menu/index.tsx"), s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx"), s("./src/reddit/icons/fonts/Op/index.m.less")),
				re = s.n(ne),
				oe = s("./src/lib/lessComponent.tsx");
			oe.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(te.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(te.a, null, e.desc)), "OpIcon", re.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ae = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				ie = s.n(ae);
			oe.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(te.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", ie.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var ce = s("./src/reddit/icons/fonts/Report/index.tsx"),
				de = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				le = s.n(de);
			oe.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(te.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", le.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const ue = e => {
					let {
						content: t
					} = e;
					const s = Object(ee.b)(),
						n = Object(i.d)(),
						c = Object(o.useCallback)(() => {
							const e = Object(g.a)(t.id),
								r = e ? P.gb : C.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(y.j)(o, t.id) : Object(y.i)(o, t.id);
							n(r(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, n]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(M.a)(K.a.coloredIcon, K.a.icon)
					}), a.a.createElement("div", {
						className: K.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: K.a.statusText
					}, a.a.createElement("p", {
						className: K.a.status
					}, r.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [r.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return a.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(W.e)(n), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: K.a.statusText
					}, a.a.createElement("div", {
						className: K.a.reportMeta
					}, a.a.createElement("p", {
						className: K.a.status
					}, r.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [r.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !d && a.a.createElement($.c, {
						className: K.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? r.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : r.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(ce.a, {
						className: K.a.ignoreButtonIcon
					}) : a.a.createElement(se.a, {
						className: K.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, r, o, i] = e;
						return n ? void 0 !== o && i ? a.a.createElement(Y.a, {
							key: `user-${n}`,
							reason: n,
							amount: r,
							reportedThingId: t.id,
							isSnoozed: o,
							useNewFormat: !0,
							className: K.a.snoozabledButton,
							dropdownClassName: K.a.snoozableDropdown,
							iconClassName: K.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", r, ")") : null
					}))))
				},
				me = e => {
					let {
						content: t
					} = e;
					const s = A(t),
						r = Object(o.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return a.a.createElement(Z, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return a.a.createElement(X, {
										content: t
									});
								case n.FILTERED:
									return a.a.createElement(H, {
										content: t
									});
								case n.REPORTED:
									return a.a.createElement(ue, {
										content: t
									});
								default:
									return a.a.createElement(o.Fragment, null)
							}
						}, [s, t]);
					return s === n.UNMODERATED ? null : a.a.createElement("div", {
						className: Object(M.a)(K.a.wrapper, {
							[K.a.approved]: s === n.APPROVED,
							[K.a.reported]: s === n.REPORTED
						})
					}, r)
				},
				pe = (e, t) => Object(y.b)(t, e),
				be = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: L
					} = e;
					const D = Object(k.a)(),
						M = Object(i.d)(),
						z = A(t),
						U = Object(i.e)(R.b),
						W = Object(i.e)(F.b),
						V = Object(g.b)(t),
						q = Object(i.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						K = Object(i.e)(e => Object(T.m)(e, {
							postId: t.id
						})),
						Z = Object(x.a)(K),
						G = Object(_.a)(K),
						H = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(z),
						Q = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(z),
						J = V && G,
						X = z === n.REMOVED && !t.modRemovalReason,
						Y = z === n.FILTERED,
						$ = !V,
						ee = [n.REMOVED, n.SPAM].indexOf(z) > -1,
						te = Object(o.useCallback)(e => {
							D(Object(E.k)(t.id, e, "post", s, L, void 0))
						}, [D, s, L, t]),
						se = V ? E.k : pe,
						ne = Object(o.useCallback)(() => {
							const e = V ? P.s : C.a;
							M(e(t.id)), D(se(t.id, "approve"))
						}, [D, M, t, V, se]),
						re = Object(o.useCallback)(() => {
							const e = V ? P.U : C.e;
							M(e(t.id, !1)), t.isRemoved && t.bannedBy === c.m ? D(se(t.id, "confirm_remove")) : D(se(t.id, "remove"))
						}, [D, M, t, V, se]),
						oe = Object(o.useCallback)(() => {
							M(Object(N.fetchReasonsAndOpenModal)(V ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, V, M]),
						ae = Object(o.useCallback)(() => {
							const e = V ? P.E : C.c;
							M(e(t.id)), D(se(t.id, t.isLocked ? "unlock" : "lock"))
						}, [se, D, M, t, V]),
						ie = Object(o.useCallback)(() => {
							M(Object(w.i)(Object(u.b)(t.id, !1))), D(Object(E.k)(t.id, "post_flair_picker"))
						}, [D, M, t]),
						ce = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							V && M(Object(S.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [M, V, t]),
						de = Object(o.useCallback)(() => {
							V && (M(Object(P.ib)(t.id)), D(Object(y.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [D, M, t, V]),
						le = Object(o.useCallback)(() => {
							V && (M(Object(P.J)(t.id)), D(Object(y.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [D, M, t, V]),
						ue = Object(o.useCallback)(() => {
							V && (M(Object(P.G)(t.id)), Object(y.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [M, t, V]),
						be = Object(o.useCallback)(() => {
							V && (M(Object(w.i)(p.a.CROWD_CONTROL)), M(Object(P.u)(t.id)))
						}, [M, t, V]),
						he = Object(o.useCallback)(() => {
							V && (M(Object(P.D)(t.permalink)), te("copy"))
						}, [te, M, t, V]),
						fe = Object(o.useCallback)(async () => {
							if (!V) return;
							const e = Object(f.d)(f.a.GildingFlow, !0);
							M(Object(j.d)({
								awardId: null == U ? void 0 : U.id,
								correlationId: e,
								thingId: t.id
							})), D(Object(v.clickGildEvent)(t.id))
						}, [D, M, t, U, V]),
						_e = Object(o.useCallback)(() => {
							M(Object(I.c)(t.id)), te("report")
						}, [te, M, t]),
						xe = Object(o.useCallback)(() => {
							var e;
							V && (M(Object(P.fb)(t.id, !t.hidden, !1, !0)), te((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [te, M, t, V]),
						ge = Object(o.useCallback)(() => {
							V && (M(Object(P.U)(t.id, !1)), D(Object(y.l)("spam", t.id)))
						}, [D, M, t, V]);
					return a.a.createElement("div", {
						className: B.a.wrapper,
						"data-testid": "modqueue-action-bar"
					}, a.a.createElement(me, {
						content: t
					}), a.a.createElement("div", {
						className: B.a.actionBar
					}, H && a.a.createElement(b.t, {
						className: [B.a.button, B.a.approve].join(" "),
						Icon: Object(O.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: B.a.icon,
						onClick: ne,
						text: r.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), Q && a.a.createElement(b.t, {
						className: B.a.button,
						Icon: Object(O.b)("close"),
						iconPosition: b.h.L,
						iconClassName: B.a.icon,
						onClick: re,
						text: r.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), X && a.a.createElement(b.t, {
						className: B.a.button,
						onClick: oe,
						text: r.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Y && a.a.createElement(b.t, {
						className: B.a.button,
						Icon: Object(O.b)("close"),
						iconPosition: b.h.L,
						iconClassName: B.a.icon,
						onClick: re,
						text: r.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), ee && a.a.createElement(b.t, {
						className: B.a.button,
						Icon: Object(O.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: B.a.icon,
						onClick: ne,
						text: r.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), $ && a.a.createElement(b.t, {
						className: B.a.button,
						priority: t.isLocked ? b.c.Primary : b.c.Plain,
						Icon: Object(O.b)("lock"),
						iconPosition: b.h.L,
						iconClassName: B.a.icon,
						onClick: ae,
						text: t.isLocked ? r.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : r.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), J && a.a.createElement(b.t, {
						className: B.a.button,
						Icon: Object(O.b)("tag"),
						priority: b.c.Plain,
						iconPosition: b.h.L,
						iconClassName: B.a.icon,
						onClick: ie,
						text: r.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), V && W === Object(u.b)(t.id, !1) && a.a.createElement(u.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(u.b)(t.id, !1),
						onFlairChanged: ce
					}), V && a.a.createElement(l.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: B.a.overflowButton,
						icon: a.a.createElement(O.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: B.a.overflowHeading
					}, r.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ge
					}, a.a.createElement(O.a, {
						name: "spam"
					})), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: t.isStickied ? r.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : r.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: de
					}, a.a.createElement(O.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: ae,
						displayText: (null == t ? void 0 : t.isLocked) ? r.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : r.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, a.a.createElement(O.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: le,
						displayText: t.isOriginalContent ? r.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : r.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(O.a, {
						name: "original"
					})), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: ue,
						displayText: t.isNSFW ? r.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : r.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(O.a, {
						name: "nsfw"
					})), Z && "subreddit" === t.belongsTo.type && a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: be
					}, a.a.createElement(O.a, {
						name: "crowd_control"
					})), a.a.createElement("h6", {
						className: B.a.overflowHeading
					}, r.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: he
					}, a.a.createElement(O.a, {
						name: "share"
					})), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: fe,
						displayText: r.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(O.a, {
						name: "award"
					}), a.a.createElement(d.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: _e
					}, a.a.createElement(O.a, {
						name: "report"
					})), a.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: xe,
						displayText: t.hidden ? r.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : r.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(O.a, {
						name: "hide"
					}))), q && a.a.createElement(m.a, {
						withOverlay: !0,
						postId: t.id
					})))
				}
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
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && r.a.createElement(a.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: n,
					...a
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(i.a.border, {
						[i.a.isFirst]: s,
						[i.a.isLast]: n
					}, t)
				}, a))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/communityAwards.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				v = s.n(g);
			const y = u.a.div("ProfileOwnerCommentWrapper", v.a),
				E = u.a.div("CommentContentWrapper", v.a),
				k = u.a.div("Wrapper", v.a),
				O = u.a.div("CommentSeparator", v.a),
				C = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(_.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: x.db
				}), e => ({
					openPost: t => e(Object(b.L)(t))
				}));
			class j extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: o,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: u,
						showModTools: p
					} = this.props, b = u === e.author ? w : P;
					return a.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(k, {
						className: Object(l.a)({
							[v.a.isFirst]: i,
							[v.a.isLast]: c,
							[v.a.isAwarded]: o,
							[v.a.isNightmodeOn]: d
						})
					}, r()(s + 1, e => a.a.createElement(O, {
						key: e
					})), a.a.createElement(E, null, b(t, u, p))))
				}
			}
			const w = (e, t, s) => a.a.createElement(y, null, P(e, t, s, !0, !0)),
				P = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						r = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!r
					})
				};
			t.a = C(j)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				shouldShowOverflow: "_39DoGlFlWC7-ZGIOESFdw0"
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(O);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: O,
					hostPostData: j,
					iconClassName: w,
					inSubredditOrProfile: P,
					isCommentsPage: S,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: I,
					isModWithUserNotesPermissions: F,
					isOverlay: R,
					isTopicPage: T,
					listingKey: L,
					post: A,
					shouldShowSubscribeButton: D,
					showCornerOutboundLink: B,
					showSubreddit: M,
					showSubredditIcon: z,
					subredditOrProfile: U,
					isFollowed: W,
					shouldShowFollowButton: V,
					onFollowPostClick: q
				} = e;
				const K = T,
					Z = U && Object(E.h)(U),
					G = Object(a.e)(e => {
						if (!Z) return !0;
						const t = Object(k.Gb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(i.a)(C.a.container, t)
				}, M && U && o.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, o.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, z && o.a.createElement(p.b, {
					className: Object(i.a)(C.a.subredditIcon, w),
					shouldHideNsfwIcon: O,
					subredditOrProfile: U
				}))), o.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, M && o.a.createElement(d.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), o.a.createElement(m.g, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: F,
					tooltipType: R ? m.f.Lightbox : void 0,
					post: A,
					showSub: M,
					subredditOrProfile: U
				}), o.a.createElement(u.a, {
					className: C.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: N,
					post: A,
					tooltipType: R ? m.f.Lightbox : void 0
				}), !K && o.a.createElement(c.a, {
					isPostDetail: S,
					thing: A,
					tooltipType: R ? m.f.Lightbox : void 0
				})), U && G && M && D && !I && o.a.createElement(h.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.k)(A.id, e ? "unsubscribe" : "subscribe", "post", L, j),
					identifier: {
						name: U.name,
						type: Z ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: A.id,
					size: _.d.XS
				}), B && o.a.createElement(x.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(y.D)(A),
					source: A.source
				}, o.a.createElement(v.a, {
					className: C.a.outboundLinkIcon
				})), V && G && o.a.createElement(l.a, {
					isFilled: !!W,
					onClick: q,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				g = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				y = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				O = s.n(k);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = (e, t) => `SnoozableReport--${t}--${e}`, w = Object(o.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(E.b)(j(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: j(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.hb)(t.reportedThingId, t.reason, s))
				}
			})), P = Object(m.a)(b.a);
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(_.n)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: o,
						isSnoozed: a,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = j(e, s);
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, r.a.createElement(h.b, {
						id: m,
						className: Object(i.a)(O.a.DropdownLabelContainer, d),
						onClick: n
					}, r.a.createElement("label", {
						htmlFor: m,
						className: O.a.DropdownLabel
					}, a ? C._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, o ? r.a.createElement(g.a, null) : r.a.createElement(x.a, null))), r.a.createElement(P, {
						isOpen: o,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, r.a.createElement("button", {
						className: Object(i.a)(O.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, r.a.createElement("div", {
						className: O.a.SnoozeButtonContent
					}, a ? r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
						className: u
					}), C._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(v.a, {
						className: u
					}), C._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = w(Object(p.c)(S))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(n.a)({
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
				d = e => {
					const t = Object(a.e)(i.e),
						s = Object(a.e)(i.a);
					return t || s ? o.a.createElement(c, e) : null
				}
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
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/helpers.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/Footer/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const v = "nsfw_dialog";
			var y = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, a.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				E = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				k = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				O = s.n(k);
			const C = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				j = e => {
					const t = Object(i.d)(),
						s = Object(h.b)(),
						n = Object(i.e)(E.g),
						u = Object(o.useCallback)(() => {
							n === E.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? a.a.createElement("div", {
							className: O.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: O.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === E.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.c)(n)
					}, [n]), a.a.createElement("div", {
						className: Object(l.a)(O.a.mainCta)
					}, a.a.createElement(y, null), b, a.a.createElement("div", {
						className: O.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: O.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: O.a.buttonContainer
					}, a.a.createElement(_.j, {
						className: Object(l.a)(O.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(g.o)(e),
								source: "xpromo",
								action: "click",
								noun: v,
								actionInfo: {
									...Object(g.d)(e)
								}
							}))()), u(), Object(x.b)(x.a.Login), t(Object(m.openLoginModal)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(_.j, {
						className: O.a.cancel,
						onClick: () => {
							Object(d.b)(), s((() => e => ({
								...Object(g.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: v,
								actionInfo: {
									...Object(g.d)(e)
								}
							}))()), Object(x.b)(x.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				w = Object(u.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: O.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: O.a.qrCodeInner
					}, a.a.createElement("img", {
						className: O.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: O.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: O.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: O.a.sneakySnoo,
						src: t
					})))
				}),
				P = e => {
					const t = Object(h.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(g.o)(e),
							source: "xpromo",
							action: "view",
							noun: v,
							actionInfo: {
								...Object(g.d)(e)
							}
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(i.e)(E.h), r = Object(i.e)(E.i), o = Object(i.e)(E.g), c = o === E.a.Blurred ? b.a.White : o === E.a.NoPreview ? b.a.Grey : void 0;
					return a.a.createElement("div", {
						className: O.a.container
					}, a.a.createElement(j, {
						contentTitle: s
					}), a.a.createElement("div", {
						className: Object(l.a)(O.a.footerWrapper, {
							[O.a.mIsModal]: o === E.a.Blurred
						})
					}, a.a.createElement(b.b, {
						textColor: c
					})), a.a.createElement(w, {
						qrCodeAsset: (() => n === f.Zc.Enabled || r === f.tb.BlurredPreview || r === f.tb.NoPreview ? C.d2x_nsfw_signup_blocking_de_v1 : C.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return w
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				_ = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const O = k(),
				C = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: _.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: g.g,
					postsById: v.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(v.D)(e, s, n, r)
					}),
					subredditsById: y.eb,
					viewportDataLoaded: E.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.e
				},
				j = Object(r.c)(C),
				w = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.P(t, n, r))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				P = e => Object(b.b)({
					...e
				}),
				S = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = n;
					return Object(h.k)(e, t, "post", r, o, a, void 0)
				},
				N = Object(n.b)(j, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: P,
					postClickEventFactory: S
				}));
			t.a = e => Object(m.c)(O(N(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.W,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: d.U,
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
						const n = t === c.a.upvoted ? Object(o.kb)(s) : Object(o.w)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.gb)(s)),
					onOpenReportsDropdown: t => e(Object(i.h)({
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
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
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
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(c.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
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
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const r = 50,
				o = 50,
				a = 1e4,
				i = 100;
			var c, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				u = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(i);
			const d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(a.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(a.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1tjWF-96KbJjdBGufYe6Lu",
				accent: "_1IHNP4dWxy7U5QgxQxi5If",
				title: "KY1h4po8s5PdqDHk-wjpB",
				subtitle: "_2hJJe3AbHRX6HhK43NwbWS",
				avatarContainer: "CE8h3MaaAIApJVVopVtob",
				avatar: "_3irN5APGI7MZ0SaDRl6MqN",
				avatarBlockIcon: "_9vWkG7-BD-CXaW0ZmaAYA",
				avatarIconContainer: "_26b11ZsQwO7zJjCuPAI89x",
				btnContainer: "_3uDT2KC9eHKU_3y6ZKXSZ-",
				btn: "_1yQHj4iPQKoswy8UZ3MADy"
			}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/telemetry/models/Event.ts");
			var c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx");
			var l = e => r.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, r.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), r.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), r.a.createElement("defs", null, r.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, r.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = s.n(m);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: s,
					avatar: o,
					history: m,
					location: h
				} = e;
				const f = Object(c.a)();
				return Object(n.useEffect)(() => {
					f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.View,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...a.o(t)
					}))(s))
				}, [f, s]), r.a.createElement("div", {
					className: p.a.container
				}, r.a.createElement(l, {
					className: p.a.accent
				}), r.a.createElement("div", {
					className: p.a.avatarContainer
				}, r.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: b._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), r.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, r.a.createElement(d.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), r.a.createElement("h3", {
					className: p.a.title
				}, b._("u/{name} is blocked", [b._param("name", t)], {
					hk: "18rExM"
				})), r.a.createElement("p", {
					className: p.a.subtitle
				}, b._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), r.a.createElement("div", {
					className: p.a.btnContainer
				}, r.a.createElement(u.t, {
					className: p.a.btn,
					to: `${h.pathname}?consent=true`,
					kind: u.b.InternalLink,
					priority: u.c.Primary,
					size: u.d.L,
					onClick: () => f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.Accept,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...a.o(t)
					}))(s)),
					isFullWidth: !0,
					isSquare: !0
				}, b._("Continue", null, {
					hk: "3eqDZf"
				})), r.a.createElement(u.t, {
					className: p.a.btn,
					to: "#",
					kind: u.b.InternalLink,
					priority: u.c.Secondary,
					size: u.d.L,
					onClick: () => {
						f((e => t => ({
							source: i.f.BlockedProfileInterstitial,
							action: i.d.Deny,
							noun: i.e.BlockedProfileInterstitial,
							blockedUser: {
								id: e
							},
							...a.o(t)
						}))(s)), m.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, b._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				f = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				_ = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				x = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				v = s("./src/reddit/components/ContentGate/index.tsx"),
				y = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				E = s("./src/reddit/components/EmptyProfile/index.ts"),
				k = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				O = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/reddit/components/PostList/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/isPinnedAdminPost/index.ts"),
				S = s("./src/lib/lessComponent.tsx"),
				N = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				I = s("./node_modules/lodash/last.js"),
				F = s.n(I);
			var R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/components/ClassicPost/index.tsx"),
				A = s("./src/reddit/components/LargePost/index.tsx"),
				D = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				B = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				M = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				z = s("./src/reddit/selectors/profile.ts"),
				U = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				W = s.n(U);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = S.a.div("ExtraCommentsItemWrapper", W.a), K = S.a.p("ExtraComments", W.a), Z = S.a.wrapped(K, "ExtraCommentsInteractive", W.a);
			var G = Object(i.b)(() => Object(c.c)({
					extraCommentsItem: z.d,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.pages.profileOverview.conversations;
						return !!n.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(g.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: n
					} = e;
					return a.a.createElement(q, null, n ? a.a.createElement(K, null, V._("Loading...", null, {
						hk: "47z90C"
					})) : a.a.createElement(M.a.Consumer, null, e => a.a.createElement(Z, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, V._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				H = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				Q = s("./src/reddit/contexts/Post/index.tsx"),
				J = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(Y),
				ee = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = S.a.div("BackgroundWrapper", te.a),
				re = S.a.wrapped(L.default, "ClassicPost", te.a),
				oe = S.a.wrapped(D.a, "OverviewCommentPost", te.a),
				ae = Object(i.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const r = n ? n.toLowerCase() : "",
							o = Object(N.a)(s, r);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[o]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const r = n ? n.toLowerCase() : "",
							o = Object(N.a)(s, r);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[o]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(T.p)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(T.r)(e, s, n)
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), r = s.models[n];
							return r ? r.username : void 0
						})(e, s)
					},
					layout: p.S
				})),
				ie = S.a.wrapped(A.default, "OverviewLargePost", te.a),
				ce = ae(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: r,
						forceLoadMedia: o,
						headComment: i,
						isInitiallyPinned: c,
						isPinned: d,
						isScrolling: l,
						last: u,
						layout: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						post: f,
						postId: _,
						profileName: x,
						scrollerItemRef: g,
						shouldShowInsightsButton: v
					} = e, y = {
						last: u,
						onClickPost: p,
						postId: _
					};
					if (!x) return null;
					const E = x === f.author,
						k = Object(P.a)(d, f.distinguishType);
					if (!E && !i && !k) return null;
					const O = i ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), F()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								r = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: r
								}), t.next ? (n = t.next.id, r = t.next.type) : n = void 0
							}
							return s
						}(n, i)) : [],
						C = O.length - 1;
					return a.a.createElement("div", {
						className: Object(w.a)($.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, te.a.OverviewConversationsPost, s),
						style: {
							...Object(R.b)(),
							...Object(R.d)(e)
						}
					}, a.a.createElement(B.a, {
						className: v ? te.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: C < 0,
						key: f.id
					}, !E && !!i && a.a.createElement(oe, se({}, y, {
						commentId: i,
						key: f.id,
						profileName: x
					})), (E || k) && (m === X.g.Classic ? a.a.createElement(re, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: o,
						last: u,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: _,
						scrollerItemRef: g
					}) : a.a.createElement(ie, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: o,
						last: u,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: _,
						scrollerItemRef: g,
						shouldShowInsightsButton: v
					}))), a.a.createElement(ne, {
						style: {
							background: Object(R.e)(e)
						}
					}, !c && O.map((e, t) => a.a.createElement(B.a, {
						isLast: t === C,
						key: `${t}-isLast[${t===C}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(H.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: r,
							key: t.id,
							profileName: x,
							showModTools: !0
						}) : a.a.createElement(G, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: x
						})
					})))))
				});
			var de = Object(Q.b)((function(e) {
					var t;
					const s = Object(J.a)(),
						n = Object(p.eb)();
					return a.a.createElement(ce, se({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(n),
						pageLayer: n
					}, e))
				})),
				le = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				ue = s("./src/reddit/helpers/trackers/post.ts"),
				me = s("./src/reddit/selectors/tracking.ts"),
				pe = s("./src/reddit/connectors/PostList/index.ts");
			const be = Object(c.c)({
					...pe.d,
					postIds: T.O,
					viewportDataLoaded: me.a
				}),
				he = Object(pe.c)(),
				fe = Object(i.b)(be, pe.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(ue.k)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? le.a : de
					}
				}));
			var _e = (e => Object(j.c)(he(fe(e))))(C.a),
				xe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ge = s("./node_modules/lodash/debounce.js"),
				ve = s.n(ge),
				ye = s("./src/reddit/actions/post.ts"),
				Ee = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				ke = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Oe = s("./src/reddit/components/Media/index.tsx"),
				Ce = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				je = s("./src/reddit/components/PostContainer/index.tsx"),
				we = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Pe = s("./src/reddit/components/PostTitle/index.tsx"),
				Se = s("./src/reddit/connectors/miniCardPost.ts"),
				Ne = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ie = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Fe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Re = s("./src/reddit/models/Media/index.ts"),
				Te = s("./src/reddit/models/Post/index.ts"),
				Le = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ae = s("./src/reddit/components/CommentsLink/index.tsx"),
				De = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Be = s("./src/reddit/components/Flatlist/index.tsx"),
				Me = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				ze = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Ue = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				We = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Share/index.tsx"),
				qe = s("./src/reddit/models/User/index.ts"),
				Ke = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Ze = s.n(Ke);
			const Ge = "-MiniCardModMenu",
				He = "-MiniCardOverflowMenu",
				Qe = "-MiniCardShareMenu",
				Je = S.a.wrapped(De.a, "HorizontalVotes", Ze.a),
				Xe = S.a.button("ShareButton", Ze.a),
				Ye = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.L,
					pageLayer: e => e
				}),
				$e = Object(c.c)({
					layout: p.S,
					subreddit: p.r
				});
			var et = Ye(Object(i.b)($e, {})(Object(j.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: o,
						hasModFullPerms: i,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: u,
						isProfilePostListing: m,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: _,
						sendEvent: x,
						showEditFlair: g,
						showEditPost: v,
						subreddit: y
					} = e, E = e => x(Object(ue.k)(_.id, e)), k = _.postId, O = Object(Be.d)(Ge, _.id, u, p), C = !!n && Object(qe.e)(n) === _.author;
					return a.a.createElement("div", {
						className: Object(w.a)(Ze.a.flatlistContainer, s)
					}, a.a.createElement(Je, {
						compact: !1,
						model: _,
						onVoteClick: r,
						scoreClassName: Ze.a.score
					}), a.a.createElement(Ae.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: u,
						postId: _.id,
						modModeEnabled: h,
						numComments: _.numComments,
						type: X.g.Compact,
						onClick: f
					}), a.a.createElement(We.a, {
						className: Ze.a.shareMenu,
						dropdownId: Object(Be.d)(Qe, _.id, u, p),
						permalink: _.permalink,
						post: _,
						sendEventWithName: E,
						subredditType: null == y ? void 0 : y.type
					}, a.a.createElement(Xe, null, a.a.createElement(Ve.a, {
						className: Ze.a.shareIcon
					}), a.a.createElement("span", {
						className: Ze.a.shareText
					}, Le.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && a.a.createElement(Me.a, {
						dropdownId: O,
						onClick: () => E("post_mod_action_menu")
					}, a.a.createElement(Be.b, {
						className: Ze.a.modActionsIcon
					}), a.a.createElement(ze.a, {
						canEditFlair: o && !!g,
						hasModPostPerms: c,
						hasModFullPerms: i,
						isOverlay: !!u,
						isPostAuthor: C,
						modModeEnabled: h,
						post: _,
						tooltipId: O
					})), a.a.createElement(Ue.a, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!u,
						isProfilePostListing: m,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: _.permalink,
						postId: k,
						dropdownId: Object(Be.d)(He, _.id, u, p),
						isFixed: p,
						sendEvent: x,
						showEditPost: !!v,
						showEditFlair: !!g,
						useFlatlistBreakpoints: Object(Ue.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))
				}))),
				tt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				st = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				nt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				rt = s.n(nt);
			var ot = Object(p.u)()(Object(Q.b)(Object(Se.a)(Object(Ee.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: r,
						crosspostSubredditOrProfile: o,
						currentUser: i,
						eventFactory: c,
						flairStyleTemplate: d,
						forceLoadMedia: l,
						hideNSFWPref: u,
						moderatorPermissions: m,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: _,
						showMetaLine: x = !0,
						showEditFlair: g,
						subredditOrProfile: v,
						userIsOp: y
					} = e, {
						media: E
					} = r || h, k = E && E.type, O = Object(we.b)(h.id), C = k === Re.o.RTJSON, j = y && C, P = Object(Fe.a)(m), S = Object(Ne.a)(m), N = Object(Ie.a)(m), I = E && k !== Re.o.RTJSON && k !== Re.o.TEXT, F = k === Re.o.VIDEO || k === Re.o.GIFVIDEO || k === Re.o.LIVEVIDEO, T = Object(Te.p)(h), L = E && a.a.createElement(Oe.a, {
						autoplayPref: t,
						availableWidth: s,
						className: rt.a.media,
						imageBoxClassName: Object(w.a)(rt.a.mediaImageBox, {
							[rt.a.videoStyles]: F
						}),
						imageBoxContentImageClassName: rt.a.mediaImageBoxContentImage,
						forceAspectRatio: Re.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || h,
						scrollerItemRef: f,
						shouldPause: _,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(je.b, {
						className: Object(w.a)(rt.a.postContainer, $.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, Object(R.a)(e), n),
						style: {
							...Object(R.b)(e.flairStyleTemplate),
							...Object(R.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: c
					}, a.a.createElement(Ce.a, {
						className: rt.a.backgroundWrapper,
						flairStyleTemplate: d
					}, I && L, a.a.createElement("div", {
						className: rt.a.innerContainer
					}, T && a.a.createElement(st.a, {
						post: h,
						templatePlaceholderImage: d ? d.postPlaceholderImage : void 0
					}), a.a.createElement(Pe.c, {
						className: rt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Pe.b.Large,
						titleColor: d && d.postTitleColor
					}), x && v && a.a.createElement(tt.a, {
						className: rt.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: u,
						post: h,
						subredditOrProfile: v
					}), !I && a.a.createElement("div", {
						className: rt.a.mediaWrapper
					}, L), a.a.createElement("div", {
						className: rt.a.flexSpacer
					}), a.a.createElement(et, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: N,
						hasModPostPerms: P,
						modModeEnabled: p,
						post: h,
						showEditFlair: g,
						showEditPost: j
					}))), e.activeModalId === O && a.a.createElement(we.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: O,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(ke.d, null))
				})))),
				at = s("./src/reddit/helpers/getClickInfo.ts"),
				it = s("./src/reddit/selectors/user.ts"),
				ct = s("./src/reddit/icons/fonts/index.tsx"),
				dt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				lt = s.n(dt);
			const {
				fbt: ut
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var mt = e => a.a.createElement("div", {
					className: Object(w.a)(lt.a.container, e.className)
				}, a.a.createElement(ct.a, {
					name: "pin",
					className: lt.a.pin
				}), a.a.createElement("div", {
					className: lt.a.title
				}, ut._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				pt = s("./src/reddit/controls/TextButton/index.tsx"),
				bt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ht = s.n(bt);
			const {
				fbt: ft
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _t = e => a.a.createElement(mt, {
					className: Object(w.a)(ht.a.container, e.className)
				}, a.a.createElement("div", {
					className: ht.a.description
				}, ft._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(pt.a, {
					className: ht.a.gotIt,
					onClick: e.onGotItClick
				}, ft._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				xt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				gt = s.n(xt);
			const {
				fbt: vt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = 320, Et = 300, kt = Object(c.c)({
				arePinnedPostsLoaded: T.a,
				currentUser: it.k,
				pinnedPostIds: T.P
			}), Ot = Object(i.b)(kt, e => ({
				openPost: t => e(Object(ye.L)(t))
			}));
			class Ct extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = ve()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Et ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(u.Nb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(at.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(ot, {
						postId: e,
						key: e,
						availableWidth: yt,
						className: Object(w.a)(gt.a.item, gt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(u.L)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const n = !!this.props.currentUser && this.props.profileName === Object(qe.e)(this.props.currentUser),
						r = t.length > 0,
						o = !r && this.state.showEducation && n;
					if (!r && !o) return null;
					const i = n && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: gt.a.title
					}, vt._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? a.a.createElement(_t, {
						className: Object(w.a)(gt.a.item, gt.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: gt.a.container
					}, t.map(this.renderPost), i && a.a.createElement(mt, {
						className: gt.a.item
					})), s)
				}
			}
			var jt = Object(p.u)()(Ot(Ct)),
				wt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Pt = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				St = s("./src/reddit/helpers/name/index.ts"),
				Nt = s("./src/reddit/helpers/trackers/screenview.ts"),
				It = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ft = s("./src/reddit/layout/page/Listing/index.tsx"),
				Rt = s("./src/reddit/models/ContentGate.ts"),
				Tt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Lt = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				At = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Dt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Bt() {
				return (Bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Mt = (e, t) => {
					let {
						location: s
					} = t;
					return r()([...Object(d.a)(s.search)])
				},
				zt = Object(p.u)(),
				Ut = Object(c.c)({
					isOwnProfile: p.E,
					over18Prefs: it.kb,
					layout: p.S
				}),
				Wt = Object(c.a)(Ut, Mt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(z.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(x.a)(e, Mt(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(T.n)(e, {
						profileName: s.params.profileName
					})
				}, it.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(it.f)(e, b.qc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isProfileBlockInterstitialEnabled: Object(At.d)(e),
						isBlocked: Object(it.L)(e, {
							profileName: s.params.profileName
						})
					}
				}, Dt.g, (e, t, s, n, r, o, a, i, c, d) => {
					let {
						sort: l,
						t: u
					} = r, {
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h
					} = c;
					var f, _;
					const x = b.zb,
						g = Object(m.a)(s, x, l, t),
						{
							sort: v
						} = t;
					return {
						contentGateInfo: i,
						isLoggedIn: a,
						isProfileNSFW: !!n && n.isNSFW,
						listingKey: g,
						profileName: s,
						shouldShowPinnedPostsSection: o && !v,
						sort: l,
						timeSort: u,
						avatar: null === (f = null == n ? void 0 : n.icon) || void 0 === f ? void 0 : f.url,
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h,
						profileId: null !== (_ = null == n ? void 0 : n.id) && void 0 !== _ ? _ : "",
						...e,
						nsfwBlockingExperiment: d
					}
				}),
				Vt = Object(i.b)(Wt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(_.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(f.a)())
				}));
			class qt extends a.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(u.K)() <= 2
						})
					}, this.renderNoPosts = () => a.a.createElement(E.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					}), this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-overview",
							render: () => a.a.createElement(y.a, null)
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(u.K)() <= 2
					}), this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === Dt.a.Blurred && this.props.openNsfwModal()
				}
				componentWillUnmount() {
					window.removeEventListener("storage", this.onStorage)
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: s,
						isOwnProfile: n,
						isProfileBlockInterstitialEnabled: r,
						isProfileNSFW: o,
						listingKey: i,
						nsfwBlockingExperiment: c,
						onLayoutChange: d,
						over18Prefs: u,
						pageLayer: m,
						profileId: p,
						profileName: h,
						shouldShowPinnedPostsSection: f,
						showSignupUpsell: _,
						sort: x,
						timeSort: g
					} = this.props;
					if (!m) return null;
					if (t && t.profileDeleted) return a.a.createElement(v.default, {
						contentGateType: Rt.a.ProfileDeleted,
						profileName: h
					});
					if (t && t.profileSuspended) return a.a.createElement(v.default, {
						contentGateType: Rt.a.ProfileSuspended,
						profileName: h
					});
					if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(v.default, {
						contentGateType: Rt.a.ProfileBlockedForLegalReason,
						profileName: h
					});
					const y = m.queryParams && "true" === m.queryParams.consent;
					if (403 === m.status || s && !y) return r ? a.a.createElement(Lt.a, {
						username: h,
						avatar: e,
						uid: p
					}) : a.a.createElement(Tt.a, null);
					if (404 === m.status) return a.a.createElement(v.default, {
						contentGateType: Rt.a.ProfileDoesNotExist,
						profileName: h
					});
					if (!h) return null;
					const E = h.toLowerCase(),
						C = `/user/${h}/`,
						j = {
							listingKey: i,
							listingName: E
						};
					if (o && !n && c === Dt.a.NoPreview) return a.a.createElement(Pt.a, {
						contentTitle: Object(St.e)(h)
					});
					if (!u && o && !n && c !== Dt.a.Blurred) return a.a.createElement(v.default, {
						subredditName: h,
						contentGateType: Rt.a.Nsfw
					});
					const w = {
							inSubredditOrProfile: !Object(l.a)(h),
							listingKey: i,
							listingName: E,
							listingViewed: (e, t) => Object(Nt.q)(i, x, t, e, g),
							noPostsComponent: this.renderNoPosts,
							onScroll: _,
							onTryAgain: d
						},
						P = {
							sort: x,
							baseUrl: C,
							sortOptions: b.Fb,
							timeSort: g
						},
						S = a.a.createElement(a.a.Fragment, null, f && a.a.createElement(jt, {
							profileName: h
						}), a.a.createElement(k.a, P), a.a.createElement(_e, Bt({}, w, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile ? this.getInjectChildren : void 0,
							excludePinnedPosts: f,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						})));
					return a.a.createElement(Ft.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(xe.a, {
							profileName: h,
							viewBlockedConsent: y
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, null), S),
						sidebar: a.a.createElement(wt.a, Bt({}, j, {
							profileName: h
						}))
					})
				}
			}
			t.default = zt(Vt(Object(h.a)(Object(It.d)(qt))))
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
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
				a = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(a.h, a.d, i.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.Wc.Bottom_cell_dismissible]: e,
						[r.Wc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.Wc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.Hb, !0),
				u = d(r.Ib, !0),
				m = d(r.Jb, !0),
				p = d(r.Hb, !1),
				b = d(r.Ib, !1),
				h = d(r.Jb, !1)
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(a.X)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(n.a)((e, t) => {
					const s = p(e, t);
					if (!s) return u;
					const n = Object(a.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : u
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(a.X)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, r) => {
					const a = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							a = r && Object(o.G)(e, {
								postId: n
							}) || null,
							i = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				h = [3],
				f = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const r = s.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let s = a + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !b(e, s, t, i, r);) s += 1;
							s < i.length && (c.push(s), a = s)
						}
					}), c
				}),
				_ = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.P)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(r.yg)(t)
				},
				c = Object(n.a)(i, o.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"d1355352c639"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.a5a529ac9c76a741e935.js.map