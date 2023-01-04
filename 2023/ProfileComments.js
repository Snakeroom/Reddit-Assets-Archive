// https://www.redditstatic.com/desktop2x/ProfileComments.1a2d4ad9f927a5869cf3.js
// Retrieved at 1/4/2023, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "reddit-components-ContentGate"], {
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

			function m(e) {
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
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
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
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(r(e, t), 1)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				r = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : r(t), n(e, 0, t < 0 ? 0 : t)) : []
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
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/contentGate.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
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
						h = Object(i.c)(s),
						f = () => {
							Object(i.b)() && (u(a.o({
								over18: !1
							})), m && window.clearInterval(m))
						};
					return Object(n.useEffect)(() => (!b && h.isNewDesignVariant && p && (m = window.setInterval(f, l), f()), () => window.clearInterval(m)), [h.isNewDesignVariant, f, b, p]), r.a.createElement(e, t)
				}
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
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
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "i", (function() {
				return C
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				a = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = r()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				x = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				_ = r()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				g = p.normalize;
			p.normalize = e => {
				g.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (x.match(e) || []).filter(e => {
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
				C = e => {
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
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return F
			})), s.d(t, "profileCommentsLoaded", (function() {
				return A
			})), s.d(t, "profileCommentsFailed", (function() {
				return D
			})), s.d(t, "profileCommentsRequested", (function() {
				return M
			})), s.d(t, "moreItemsPending", (function() {
				return B
			})), s.d(t, "moreItemsLoaded", (function() {
				return R
			})), s.d(t, "moreItemsFailed", (function() {
				return z
			})), s.d(t, "moreItemsRequested", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/difference.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/pick.js"),
				a = s.n(o),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				m = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/config.ts"),
				v = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				C = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				k = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				j = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				O = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, s, n) => {
				let r = Object(C.a)(Object(v.a)(Object(j.a)(Object(O.a)(`${g.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return n && (r = Object(k.a)(r)), Object(E.a)(e, {
					data: s,
					endpoint: r,
					method: y.ob.GET
				})
			};
			var P = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				L = s("./src/reddit/selectors/profileComments.ts"),
				T = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const F = Object(i.a)(T.f),
				A = Object(i.a)(T.e),
				D = Object(i.a)(T.d),
				M = e => async (t, s, n) => {
					const {
						queryParams: r,
						params: o
					} = e, {
						sort: i,
						t: _
					} = Object(u.b)(r), {
						profileName: g
					} = o, v = Object(c.a)(`u_${g}`, i, e.queryParams), {
						profileCommentsPage: y
					} = s(), E = y.commentIds[v], C = y.api.error[v], k = y.api.pending[v];
					if (await t(b.d(g)), k || E && !C) {
						if (E) {
							const e = Object(S.s)(s(), {
								profileName: g
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					const j = {
						...a()(e.queryParams, [...x.p, x.k]),
						sort: i,
						t: Object(P.a)(i, _)
					};
					t(F({
						key: v
					}));
					const O = await Object(I.a)("profileComments", () => w(n.apiContext(), g, j, Object(N.a)(s())));
					if (!O.ok) return t(D({
						account: O.body.data ? O.body.data.account : null,
						error: O.body.reason ? {
							type: O.body.reason
						} : O.error,
						key: v
					})), O.body.reason === f.a.DeletedProfile && t(Object(d.v)({
						profileName: g
					})), void t(p.n(O.status));
					const L = O.body;
					t(A({
						key: v,
						meta: s().meta,
						...L
					})), await Promise.all([t(Object(u.c)(g)), t(Object(h.q)()), t(Object(m.b)()), t(l.o(g))])
				}, B = Object(i.a)(T.c), R = Object(i.a)(T.b), z = Object(i.a)(T.a), U = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t(),
						{
							currentPage: i
						} = o.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: d,
						params: l
					} = i.routeMatch.match, {
						sort: m,
						t: p
					} = Object(u.b)(d), {
						profileName: b
					} = l, h = Object(c.a)(`u_${b}`, m, d), f = Object(L.d)(o, {
						listingKey: h
					});
					if (!f) return;
					const g = Object(L.b)(o, {
							listingKey: h
						}),
						v = Object(L.c)(o, {
							listingKey: h
						}),
						y = v && v[f.token];
					if (g || y) return;
					e(B({
						key: h,
						fetchedToken: f.token
					}));
					const E = await w(n(), b, {
						after: f.token,
						dist: f.dist,
						sort: m,
						t: p,
						...a()(d, x.p),
						layout: Object(_.U)(o, {}).toLowerCase()
					}, Object(N.a)(o));
					if (E.ok) {
						const t = Object(L.f)(o, {
								listingKey: h
							}),
							s = {
								...E.body,
								commentIds: r()(E.body.commentIds, t)
							};
						e(R({
							fetchedToken: f.token,
							key: h,
							meta: o.meta,
							...s
						}))
					} else e(z({
						account: E.body.data ? E.body.data.account : null,
						error: E.error,
						fetchedToken: f.token,
						key: h
					}))
				}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/models/Audio/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = s("./src/reddit/components/Econ/Audio/index.m.less"),
				g = s.n(_),
				v = s("./src/config.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				C = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = () => Math.floor(10 * Math.random()) + 1;
			var O = e => {
					let {
						postId: t
					} = e;
					const s = Object(h.e)(y.fb),
						[o, i] = Object(n.useState)(!1),
						[c, d] = Object(n.useState)(j());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), d(j())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), r.a.createElement("div", {
						className: g.a.classicSpeaker
					}, o && r.a.createElement(C.a, {
						ringId: `${t}`,
						className: Object(a.a)(g.a.speakerRings, {
							[g.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), r.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: g.a.snoovatar,
						src: `${v.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: k._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !o && r.a.createElement("div", {
						className: g.a.muteContainer
					}, r.a.createElement(E.a, {
						className: g.a.muteIcon
					})))
				},
				w = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: o
					} = t;
					return Object(h.e)(x.n) && s.roomStatus === f.b.NotStarted ? r.a.createElement(w.a, {
						postId: n,
						author: o,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? r.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: g.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, r.a.createElement(O, {
						postId: n
					})) : r.a.createElement("div", {
						className: g.a.endedClassicContainer
					}, r.a.createElement(E.a, {
						className: g.a.muteIcon
					}))
				},
				N = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				S = s("./src/reddit/components/ExpandoButton/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				D = s("./src/reddit/components/ModModeReports/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				R = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostMeta/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				q = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				V = s("./src/reddit/components/PostTitle/index.tsx"),
				G = s("./src/reddit/components/PostTopMeta/index.tsx"),
				H = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				Z = s("./src/reddit/models/Media/index.ts"),
				K = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				re = s.n(ne),
				oe = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/redditGQL/types.ts"),
				ie = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				ce = s("./src/reddit/components/ClassicPost/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: h,
					isExpanded: x,
					inSubredditOrProfile: _,
					eventFactory: g,
					flairStyleTemplate: v,
					formatTitle: y,
					hostPostData: E,
					isCheckboxSelected: C,
					isCurrentUserProfilePost: k,
					isFrontpage: j,
					isGalleryTileLayoutDefault: O,
					isLoggedIn: w,
					isOverlay: P,
					imageGalleryCurrentItem: J,
					moderatorPermissions: ne,
					modModeEnabled: ce,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: he,
					post: fe,
					postId: xe,
					redditStyle: _e,
					scrollerItemRef: ge,
					showBulkActionCheckbox: ve,
					showEditFlair: ye,
					showMedia: Ee,
					shouldShowInsightsButton: Ce,
					subredditOrProfile: ke,
					toggleCheckbox: je,
					userIsOp: Oe,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Pe,
					showCTAExperimentDesign: Ie
				} = e, Ne = Object(l.a)(), Se = Object(d.a)(x);
				Object(n.useEffect)(() => {
					be && Se !== x && be(fe.id)
				}, [x, be, fe.id, Se]);
				const Le = _e ? void 0 : v,
					Te = s || void 0,
					Fe = Object($.a)(ne),
					Ae = Object(Y.a)(ne),
					De = Object(X.a)(ne),
					Me = ce && $.a,
					Be = Object(A.a)(fe),
					Re = Object(M.c)(fe),
					ze = !!fe.media && fe.media.type === Z.o.RTJSON,
					Ue = Oe && ze,
					We = _ && !Ee,
					qe = !!fe.recommendationContext,
					Ve = {
						flairStyleTemplate: Le,
						post: fe,
						inSubredditOrProfile: _,
						isCurrentUserProfilePost: k,
						isOverlay: P,
						shouldShowSubscribeButton: !(j && w) || qe && w,
						subredditOrProfile: ke
					},
					Ge = Object(o.t)(fe, J),
					{
						source: He
					} = Ge,
					[Ze, Ke] = Object(n.useState)(!1),
					Je = Object(n.useCallback)(() => {
						Ke(!Ze), Ne(Object(se.d)(xe))
					}, [Ze, xe, Ne]);
				let Qe = r.a.createElement(K.a, {
					className: de.a.classicThumbnail,
					crosspost: Te && fe,
					isMeta: fe.isMeta,
					post: Te || fe,
					redditStyle: _e,
					templatePlaceholderImage: Le && Le.postPlaceholderImage
				});
				Object(f.c)(fe) && (Qe = r.a.createElement(I, {
					post: fe
				}));
				const Ye = Object(oe.r)(fe);
				return r.a.createElement(z.b, {
					className: Object(a.a)(re.a.classicPostStyles, de.a.postContainer, Object(te.a)(e), {
						[de.a.shouldShowOverflow]: Ce
					}, t),
					isOverlay: P,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Le)
					},
					post: fe,
					onClick: me,
					eventFactory: g
				}, r.a.createElement(q.a, {
					model: fe,
					handleVote: h,
					showBulkActionCheckbox: ve,
					isCheckboxSelected: C,
					toggleCheckbox: je,
					flairStyleTemplate: Le,
					redditStyle: _e,
					postId: xe
				}), r.a.createElement(R.a, {
					className: Ce ? de.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Le
				}, r.a.createElement(N.a, {
					className: de.a.eventMeta,
					post: fe
				}), r.a.createElement("div", {
					className: de.a.mainBody
				}, r.a.createElement("div", {
					className: We ? de.a.expandoContainer : de.a.thumbnailContainer
				}, !We && Qe, r.a.createElement(S.a, {
					crosspost: Te,
					className: de.a.rightExpando,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(a.a)(de.a.content, {
						[de.a.showBulkActionCheckbox]: ve
					}),
					"data-click-id": "body"
				}, Ye && r.a.createElement(B.a, {
					content: fe.recommendationContext.content,
					layout: Q.g.Classic,
					post: fe
				}), r.a.createElement(V.c, {
					className: he ? de.a.titleWithPoll : void 0,
					format: y,
					poll: he,
					post: fe,
					redditStyle: _e,
					size: V.b.Medium,
					titleColor: Le && Le.postTitleColor,
					isOverlay: P
				}, fe.source && !Te && !fe.isSurveyAd && r.a.createElement(H.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(c.a)(fe))), r.a.createElement(U.a, le({
					key: "PostMeta"
				}, Ve)), ce && Fe && Be && r.a.createElement(F.a, {
					thing: fe
				}), ce && Fe && Re && r.a.createElement(D.a, {
					onIgnoreReports: ue,
					reportable: fe
				}), Pe && He && He.url && !fe.isSurveyAd && r.a.createElement(m.a, {
					ctaExperimentDesign: Ie && "classic",
					className: Object(a.a)(de.a.adLinkWrapper, {
						[de.a.ctaExperiment]: Ie
					})
				}, r.a.createElement(u.a, {
					post: fe,
					adLinkContent: Ge,
					ctaExperimentDesign: Ie && "classic"
				})), fe.discussionType === ae.o.Chat && r.a.createElement(ie.a, {
					postId: fe.id
				}), r.a.createElement("div", {
					className: de.a.flatlistContainer
				}, r.a.createElement(S.a, {
					className: de.a.leftExpando,
					crosspost: Te,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				}), r.a.createElement(p.a, {
					className: de.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Le,
					model: fe,
					onVoteClick: h
				}), r.a.createElement(L.a, {
					className: de.a.flatlistSeparator
				}), !fe.isSurveyAd && r.a.createElement(L.c, {
					className: de.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ae,
					hasModPostPerms: Fe,
					hasModFullPerms: De,
					hostPostData: E,
					isOverlay: !!P,
					modModeEnabled: ce,
					onClickInsightsButton: Je,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: fe,
					shouldShowInsightsButton: Ce,
					showEditPost: Ue,
					showEditFlair: ye,
					tooltipType: P ? G.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(W.b)({
						editPost: !Me,
						hide: !Me,
						report: !Me,
						mute: !Me,
						save: !Me
					})
				})), r.a.createElement(T.d, null))), Object(ee.a)(fe, de.a, ge, x, we, O), ke && Ze && r.a.createElement(b.a, {
					className: de.a.creatorStatsContainer,
					post: fe,
					subreddit: ke,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(J.a)(me)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(o.b)(d);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: o,
						style: a
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => o && o(t, n))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(c.a)(m))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = .75, x = 10 * c.N;
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (f + 1) && u.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, x), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? r.a.createElement("div", null, e()) : r.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, r.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, r.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), r.a.createElement("a", {
						className: b.a.seeMore,
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var g = _,
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./node_modules/lodash/noop.js"),
				E = s.n(y),
				C = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				O = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/reportFlow/index.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				F = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				D = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				M = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				z = s("./src/reddit/contexts/InsideOverlay.tsx"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				q = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/overlay/index.ts"),
				G = s("./src/reddit/helpers/trackers/lightbox.ts"),
				H = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				K = s("./src/reddit/selectors/activeModalId.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				Y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/tooltip.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/components/OverflowMenu/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				de = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				le = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				me = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				pe = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				xe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const _e = he.a.wrapped(te.b, "OverflowMenu", pe.a),
				ge = he.a.wrapped(T.a, "ModToolsFlatlist", pe.a),
				ve = he.a.wrapped(M.a, "ModActionsMenu", pe.a),
				ye = he.a.wrapped(ae.b, "DropdownRow", pe.a),
				Ee = he.a.wrapped(ce.a, "Flatlist", pe.a),
				Ce = he.a.button("Button", pe.a),
				ke = Object(U.v)(),
				je = e => `Comment-${e}--Modal--DeleteComment`,
				Oe = e => `Distinguish--Dropdown--${e}`,
				we = (e, t) => `${e}--${t}-overflow-menu`,
				Pe = e => `View--Reports--${e}`,
				Ie = Object(a.c)({
					activeTooltipId: $.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.a)(e) === je(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: ee.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: ee.m,
					modModeEnabled: U.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.m)(e, {
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
					subreddit: U.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: Q.a
				});
			class Ne extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(W.d)(W.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ie.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ie.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ie.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ie.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(G.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: o
					} = this.props, a = Object(q.a)(s), i = !!t && t.displayText === e.author;
					if (o && a) return n ? r.a.createElement(ge, {
						comment: e,
						isCommentAuthor: i
					}) : r.a.createElement(ve, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, r.a.createElement(le.a, null), r.a.createElement(L.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return r.a.createElement(F.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Pe(e.id),
						id: Pe(e.id)
					}, r.a.createElement(R.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Pe(e.id)
					}), e.ignoreReports ? r.a.createElement(de.a, null) : r.a.createElement(me.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: o,
						showModTools: a
					} = this.props, i = Object(q.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !n)) return r.a.createElement(F.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Oe(e.id)
					}, r.a.createElement(xe.a, null), r.a.createElement(D.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Oe(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: i,
						onDistinguishComment: o,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Oe(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: o,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: c,
						moderatorPermissions: d,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u
					} = this.props, p = Object(q.a)(d), b = !!o && o.displayText === e.author, h = (!l && !e.isLocked || p && i) && !Object(Z.g)(e), f = o && e.isGildable && !Object(Z.g)(e);
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Ee, null, h && r.a.createElement(Ce, {
						onClick: this.handleReply,
						disabled: c
					}, v.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && r.a.createElement(Ce, {
						onClick: this.handleGild
					}, v.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), r.a.createElement(re.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, r.a.createElement(Ce, {
						onClick: this.sendCommentEventWithNameShare
					}, v.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), r.a.createElement(_e, {
						dropdownId: we(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !c && r.a.createElement(ye, {
						displayText: v.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, r.a.createElement(fe.a, {
						name: be.a.report
					})), r.a.createElement(ye, {
						displayText: e.isSaved ? v.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : v.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? r.a.createElement(fe.a, {
						name: be.a.saved
					}) : r.a.createElement(fe.a, {
						name: be.a.save
					})), b && r.a.createElement(ye, {
						displayText: v.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, r.a.createElement(fe.a, {
						name: be.a.edit
					})), b && r.a.createElement(ye, {
						displayText: v.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, r.a.createElement(fe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && r.a.createElement(A.a, {
						actionText: v.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: v.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: v.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: v.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: a,
						toggleModal: u,
						trackClick: E.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Se = ke(Object(o.b)(Ie, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(O.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(w.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(P.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(N.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(S.h)({
							tooltipId: Oe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(S.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleSave: () => e(Object(j.o)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(je(s.id))), e(Object(S.h)({
								tooltipId: we(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(C.a)(s.postId, s.id, {}),
								r = {
									commentId: s.id,
									draftKey: Object(k.a)(H.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(V.a)(t)), e(Object(O.g)(r))
						},
						handleReply: t => {
							const n = Object(C.a)(s.postId, s.id, {}),
								r = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(V.a)(t)), e(Object(O.h)(r))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(je(s.id)))
					}
				})(Object(oe.c)(Object(z.b)(Ne)))),
				Le = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Te = s("./src/reddit/components/RichTextJson/index.tsx"),
				Fe = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				De = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Me = s.n(De);
			const Be = he.a.wrapped(Le.a, "TopMeta", Me.a),
				Re = he.a.div("ProfileCommentWrapper", Me.a),
				ze = he.a.div("CommentBody", Me.a),
				Ue = Object(o.b)(() => Object(a.c)({
					comment: (e, t) => Object(Ae.c)(e, t),
					flair: J.e
				})),
				We = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: o,
					showFlatlist: a,
					showModTools: d
				} = e, l = s => r.a.createElement(Te.b, {
					className: s,
					content: Object(Fe.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: We(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return r.a.createElement(Re, {
					className: Object(i.a)({
						[Me.a.isRemoved]: !!t.bannedBy
					})
				}, r.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), r.a.createElement("div", null, !t.isDeleted && r.a.createElement(ze, null, o ? l() : r.a.createElement(g, {
					height: c.Zb,
					isExpanded: o
				}, l)), !t.isDeleted && a && r.a.createElement(Se, {
					comment: t,
					commentsPageKey: s,
					showModTools: d
				})))
			})
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
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
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
				m = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = s("./src/reddit/components/Footer/index.tsx"),
				x = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_ = s("./src/reddit/components/RichTextJson/index.tsx"),
				g = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = s("./node_modules/lodash/flatMap.js"),
				y = s.n(v),
				E = s("./src/lib/linkMatchers/index.ts"),
				C = s("./src/lib/linkMatchers/customLinks.ts"),
				k = s("./src/reddit/controls/OutboundLink/index.tsx");
			const j = /\[(.+?)\]\((.+?)\)/g,
				O = e => {
					const t = e.split(j);
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
					return e.parseMdLinks && (t = y()(t, O)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return o.a.createElement(k.b, {
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
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/chat/controls/Svg/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => o.a.createElement(S.a, L({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = s("./src/reddit/models/ContentGate.ts"),
				A = s("./src/lib/constants/index.ts"),
				D = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/selectors/user.ts");
			var B = s("./src/reddit/selectors/meta.ts"),
				R = s("./src/reddit/components/ContentGate/index.m.less"),
				z = s.n(R);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = l.a.wrapped(T, "PrivateKey", z.a), q = l.a.div("ButtonsContainer", z.a), V = l.a.div("Container", z.a), G = l.a.div("ContainerExp", z.a), H = l.a.div("Description", z.a), Z = l.a.div("PrivateSubredditDetails", z.a), K = l.a.div("PrivateSubredditDescription", z.a), J = l.a.h3("PrivateSubredditName", z.a), Q = l.a.a("Link", z.a), Y = l.a.wrapped(N.n, "LinkRouterButton", z.a), X = l.a.wrapped(N.m, "LinkButton", z.a), $ = l.a.wrapped(N.p, "SecondaryLinkButton", z.a), ee = l.a.wrapped(Y, "GoHomeLinkButton", z.a), te = l.a.wrapped(h.a, "CreateCommunityButton", z.a), se = l.a.img("Image", z.a), ne = l.a.img("ImagePlaceholder", z.a), re = l.a.wrapped(Y, "LeftLinkRouterButton", z.a), oe = l.a.wrapped(X, "LeftLinkButton", z.a), ae = l.a.wrapped($, "SecondaryLeftLinkButton", z.a), ie = l.a.h3("Title", z.a), ce = l.a.div("PageBody", z.a), de = l.a.div("InterstitialMessageWrapper", z.a), le = l.a.div("QuarantineLearnMore", z.a), me = Object(d.c)({
				isLoggedIn: M.R,
				origin: B.k,
				user: M.m,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(M.S)(e)) return !1;
					const t = Object(D.d)(e);
					if (!t) return !1;
					const s = Object(M.h)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const r = 30 * A.E;
					return n > Date.now() - r
				})(e),
				isSeo: B.h
			}), ue = Object(I.v)(), pe = Object(a.b)(me, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(s)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.r)())
					}
				}
			}), be = e => {
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
					quarantineMessageRTJson: C,
					interstitialWarningMessage: k,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: O,
					setNSFWPreference: I,
					subredditDescription: N,
					subredditName: S,
					user: L
				} = e, T = async () => {
					if (i ? await I() : await Object(u.q)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(P.j, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case F.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ie, null, U._("r/{community name} is a Reddit Premium community", [U._param("community name", S)], {
							hk: "2lyDwB"
						})), o.a.createElement(H, null, U._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(q, null, L ? o.a.createElement(ae, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, U._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(oe, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), L ? o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement($, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, U._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ie, null, s === F.a.Nsfw ? U._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : U._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(H, null, U._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(q, null, o.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, U._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement($, {
							onClick: T,
							redditStyle: !0
						}, U._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(W, null), o.a.createElement(ie, null, "r/", S, " ", U._("is a private community", null, {
							hk: "7zZmq"
						})), N && N.length && o.a.createElement(Z, null, o.a.createElement(J, null, "r/", S), o.a.createElement(K, null, o.a.createElement("div", null, N))), o.a.createElement(H, null, U._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", S, " ", U._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), U._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(q, null, L ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: z.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ae, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${S}`,
							redditStyle: !0
						}, U._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ae, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), S && o.a.createElement(g.a, {
							subredditName: S
						}));
					case F.a.QuarantinedSubreddit:
						const i = L && L.hasVerifiedEmail;
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), o.a.createElement(ie, null, U._("r/{subredditName} is quarantined", [U._param("subredditName", S)], {
							hk: "2pxhFx"
						})), o.a.createElement(H, null, o.a.createElement(de, null, C ? o.a.createElement(_.b, {
							content: C,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? o.a.createElement(x.a, {
							html: E
						}) : y || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !v || i ? U._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : L ? U._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : U._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), o.a.createElement(q, null, ((e, t, s) => {
							const r = e && e.hasVerifiedEmail;
							return !s || r ? o.a.createElement(q, null, o.a.createElement(re, {
								to: "/",
								redditStyle: !0
							}, U._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement($, {
								onClick: t,
								redditStyle: !0
							}, U._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : o.a.createElement(q, null, o.a.createElement(re, {
								to: "/",
								redditStyle: !0
							}, U._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement($, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, U._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(L, r, v)), o.a.createElement(le, null, U._("Learn more about {=quarantined communities}.", [U._param("=quarantined communities", o.a.createElement(Q, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, U._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case F.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ie, null, U._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(H, null, o.a.createElement(de, null, O ? o.a.createElement(_.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? o.a.createElement(x.a, {
							html: j
						}) : k), U._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(q, null, o.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, U._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement($, {
							onClick: a,
							redditStyle: !0
						}, U._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case F.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ie, null, U._("r/{community name} has been banned from Reddit", [U._param("community name", S)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(H, null, e ? o.a.createElement(w, {
							linkClassName: z.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : U._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(q, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(q, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, null), o.a.createElement(ie, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(H, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(q, null, L && o.a.createElement(te, {
							eventSource: "content_gate"
						}), o.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return U._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return U._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, U._("This account has been {=suspended} .", [U._param("=suspended", o.a.createElement(Q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, U._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ie, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(H, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(q, null, o.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, U._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(q, null, o.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ie, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(q, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ue(pe(Object(i.i)(e => {
				const t = Object(r.useContext)(c.a) ? G : V;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(ce, null, be(e))), o.a.createElement(f.b, null))
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
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(f),
				_ = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = _.a.wrapped(l.c, "StyledTooltip", x.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.rb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), i(c)
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
				return k
			})), s.d(t, "a", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				_ = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(v),
				E = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 8,
				j = 1,
				O = E.a.div("Container", y.a),
				w = E.a.div("PostMetaWrapper", y.a),
				P = E.a.wrapped(p.c, "PostTitle", y.a),
				I = E.a.div("FlatList", y.a),
				N = E.a.div("FlatItem", y.a),
				S = E.a.span("FlatListDotSpacer", y.a),
				L = E.a.wrapped(O, "LinkContainer", y.a),
				T = E.a.div("Content", y.a),
				F = E.a.div("ThumbnailContainer", y.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: _.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Sb.TOPIC),
					shouldOpenPostInNewTab: g.lb
				}),
				D = Object(a.b)(A);
			t.c = Object(x.b)(D(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return a && !a.media ? o.a.createElement(L, {
					className: d
				}, o.a.createElement(T, null, o.a.createElement(w, null, o.a.createElement(u.a, c)), M(a), a.source && o.a.createElement(b.a, {
					post: a
				}), R(e)), U(e)) : o.a.createElement(O, {
					className: d
				}, o.a.createElement(w, null, o.a.createElement(u.a, c)), M(a), B(e), R(e))
			}));
			const M = e => o.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(m.a, C({}, n, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				R = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(I, null, o.a.createElement(N, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(S, null), o.a.createElement(N, null, z(e)))
				},
				z = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(i.a, {
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
				U = e => o.a.createElement(F, null, o.a.createElement(h.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
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
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: a = !1
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, r.a.createElement(c.a, {
					ringId: n,
					className: Object(o.a)(i.a.innerRing, `${s}Inner`)
				}), r.a.createElement(d.a, {
					ringId: n,
					className: Object(o.a)(i.a.middleRing, `${s}Middle`)
				}), r.a.createElement(l.a, {
					ringId: n,
					className: Object(o.a)(i.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/helpers/trackers/talkCreation.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				p = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				b = s.n(p),
				h = s("./src/config.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/hooks/useGqlContext.ts");
			var v = e => r.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				y = s("./src/reddit/endpoints/talk/index.ts"),
				E = s("./src/reddit/actions/toaster.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/redditGQL/types.ts");
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = () => r.a.createElement("span", {
				className: b.a.MicrophoneIcon
			}, r.a.createElement(v, null));
			var w = e => {
				let {
					roomId: t
				} = e;
				const s = Object(o.e)(m.fb),
					[i, c] = Object(n.useState)(!1),
					l = Object(o.d)(),
					u = Object(f.b)(),
					p = Object(g.a)();
				return r.a.createElement(x.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: i ? _.a : O,
					iconClassName: i ? b.a.loadingIcon : "",
					className: Object(a.a)(b.a.StartTalkButton, {
						[b.a.isNightMode]: s
					}),
					priority: x.c.Secondary,
					size: x.d.M,
					iconPosition: x.h.L,
					disabled: i,
					text: r.a.createElement("span", {
						className: b.a.StartTalkButtonText
					}, j._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						u(Object(d.a)()), c(!0);
						const e = await Object(y.l)(p(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return l(Object(E.f)({
							kind: C.b.Error,
							text: y.a[k.l.ServiceError]
						})), void c(!1);
						const s = Object(y.h)(e.body);
						if (null == s ? void 0 : s.errorState) return l(Object(E.f)({
							kind: C.b.Error,
							text: y.a[s.errorState.code] || y.a[k.l.ServiceError]
						})), void c(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${h.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: p,
					isClassicView: h = !1
				} = e;
				const f = Object(o.d)(),
					x = Object(l.a)(),
					_ = Object(o.e)(m.H),
					g = Object(o.e)(m.fb),
					v = Object(o.e)(e => Object(m.Fb)(e, {
						postId: s
					})),
					y = Object(o.e)(e => Object(m.Cb)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					s && x && x(Object(d.f)(s))
				}, [x, s]), Object(n.useEffect)(() => {
					y || f(Object(i.d)(t))
				}, [f, t, s, y]);
				const E = () => r.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(b.a.hostAvatar, {
						[b.a.classicView]: h
					})
				}, r.a.createElement("div", {
					className: b.a.snoovatar
				}, r.a.createElement(c.a, {
					userName: t,
					isNSFW: !_,
					className: b.a.isImage
				})), r.a.createElement(u.a, {
					ringId: `${s}`,
					className: Object(a.a)(b.a.hostRings, {
						[b.a.nightMode]: g
					}),
					ringClassName: "hostRing"
				}));
				return h ? r.a.createElement(E, null) : r.a.createElement("div", {
					className: b.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, r.a.createElement("div", {
					className: b.a.upcomingTalkContainer
				}, r.a.createElement(E, null), r.a.createElement("div", {
					className: b.a.upcomingTalkInfo
				}, r.a.createElement("div", {
					className: b.a.upcomingTalkLabel
				}, P._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), r.a.createElement("div", {
					className: b.a.upcomingTalkHost
				}, "u/", t), v && p && r.a.createElement(w, {
					roomId: p
				}))))
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostList/Placeholder.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(m.a.Wrapper, s)
				}, o.a.createElement(c.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: d.g.Classic
				}), o.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: r = a.oc.ALL
				} = e;
				return o.a.createElement(u, {
					className: t
				}, r === a.oc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: r = a.oc.ALL
				} = e;
				return o.a.createElement(u, {
					className: t
				}, r === a.oc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var h = e => {
					let {
						className: t,
						text: s
					} = e;
					return o.a.createElement(u, {
						className: t
					}, s)
				},
				f = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				x = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				_ = s.n(x);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var v = () => o.a.createElement("div", {
				className: _.a.container
			}, o.a.createElement(f.a, {
				className: _.a.hideIcon
			}), o.a.createElement("h3", {
				className: _.a.title
			}, g._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: _.a.subtitle
			}, g._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				_ = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = s("./src/reddit/components/ExpandoButton/index.m.less"),
				y = s.n(v);
			const E = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(y.a.icon, y.a.hideOnHover);
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
			t.a = E(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: v,
					useMediaIcons: E
				} = e, k = s || h, j = Object(a.e)(x.b), O = Object(a.e)(x.c), w = t => {
					(j || O) && (t.preventDefault(), e.showModalOnPostLinkClick(k))
				}, P = k.media, I = Object(f.q)(h), N = r && !!s;
				return P && !I && !(("rtjson" === P.type || "text" === P.type || "liveaudio" === P.type) && !Object(p.a)(k)) || !!h.pollData ? o.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": g.a.MEDIA,
					onClick: v
				}, u ? o.a.createElement(b.a, {
					name: "collapse",
					className: y.a.icon
				}) : E ? o.a.createElement(o.a.Fragment, null, C(k.media && k.media.type, N, h), o.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: y.a.icon
				})) : k.source && k.source.url ? o.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: k.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? _.SourceElement.PostImage : _.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(k.permalink),
					rel: "nofollow",
					onClick: w
				}, o.a.createElement(b.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("UserAgreement", d.a), u = i.a.a("UserAgreementLink", d.a), p = i.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(a.a)(d.a.FooterContainer, {
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
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.v)(),
				f = Object(a.c)({
					layout: m.U
				}),
				x = Object(o.b)(f);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.l + c.p + c.q,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${c.g+c.p+c.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.g+c.p+c.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(_, "Component", p.a)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? r.fbt._("{userCount} here now", [r.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : r.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => a.a.createElement("span", {
				className: m.a.LiveLabel
			}, r.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const h = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, a.a.createElement(u, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var f = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				_ = s("./src/reddit/selectors/experiments/chat.ts");
			const g = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(f.e)(e => Object(x.a)(e, t));
				return Object(f.e)(_.e) ? a.a.createElement(h, {
					userCount: n,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : r.a.createElement(i.b, {
					className: Object(o.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === c.g.Classic,
						[m.a.compactLayout]: s === c.g.Compact,
						[m.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/ClassicPost/index.tsx"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				v = s.n(g);
			const y = Object(a.b)(() => Object(i.c)({
				comment: f.c,
				isAwarded: (e, t) => {
					const s = Object(f.c)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(x.a)(e, t);
						return s && s.coinPrice >= c.g
					})
				},
				isNightmodeOn: _.fb
			}), e => ({
				openPost: t => e(Object(m.K)(t))
			}));
			var E = Object(l.a)(y(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: o,
						isNightmodeOn: a,
						last: i,
						openPost: c,
						showModTools: l
					} = e;
					if (!t) return null;
					return r.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, r.a.createElement("div", {
						className: Object(d.a)(v.a.commentOuterWrapper, {
							[v.a.isLast]: i,
							[v.a.isAwarded]: o,
							[v.a.isNightmodeOn]: a
						})
					}, r.a.createElement("div", {
						className: Object(d.a)(v.a.commentWrapper, {
							[v.a.isFirst]: n
						})
					}, r.a.createElement("div", {
						className: v.a.commentSeparator
					}), t.parentId && r.a.createElement("div", {
						className: v.a.commentSeparator
					}), r.a.createElement("div", {
						className: v.a.commentContentWrapper
					}, r.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				C = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				O = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				w = s.n(O),
				P = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(k.v)({
					currentProfileName: k.j,
					isCommentsPage: k.y,
					isCommentPermalink: k.x,
					isProfilePostListing: k.N,
					pageLayer: e => e
				}),
				S = P.a.wrapped(C.a, "OverviewCommentPost", w.a),
				L = P.a.wrapped(o.default, "ClassicPost", w.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: o,
					height: a,
					width: i,
					...c
				} = e;
				return Object(j.a)(t) ? s ? r.a.createElement(r.a.Fragment, null, r.a.createElement(S, I({}, c, {
					availableWidth: i,
					commentId: t
				})), r.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: o
				})) : r.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: o
				}) : r.a.createElement(L, I({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				_ = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(_),
				v = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				C = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				k = s.n(C);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = d.a.wrapped(f.default, "InternalLink", k.a), w = d.a.div("Wrapper", k.a), P = d.a.div("Row", k.a), I = d.a.wrapped(v.a, "CommentIcon", k.a), N = d.a.div("TitleContainer", k.a), S = d.a.div("PostTitleContainer", k.a), L = d.a.wrapped(u.c, "PostTitle", k.a), T = d.a.wrapped(p.g, "PostTopMeta", k.a), F = d.a.wrapped(p.a, "MetaSeparator", k.a), A = Object(o.b)(() => Object(a.c)({
				comment: y.c,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), D = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return r.a.createElement(n.Fragment, null, r.a.createElement(F, null), r.a.createElement(T, {
					metaSeparatorClassName: k.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, M = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: o,
					showModalOnAuthorLinkClick: a
				} = e;
				if (!t) return null;
				const i = s || t.author,
					c = `/user/${i}/`;
				return r.a.createElement(O, {
					"data-click-id": "user",
					to: c,
					onClick: e => {
						(n || o) && (e.preventDefault(), a(c))
					}
				}, i)
			};
			t.a = Object(c.a)(Object(h.b)(A(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: o
				} = e;
				return r.a.createElement(m.b, {
					className: Object(i.a)(g.a.compactPostStyles, k.a.overviewCommentPost, {
						[k.a.banned]: !!e.post.bannedBy,
						[k.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: o,
					onClick: n,
					eventFactory: s
				}, r.a.createElement(w, {
					style: {
						background: Object(x.e)(e)
					}
				}, r.a.createElement(P, null, r.a.createElement(I, null), r.a.createElement(N, null, j._("{postAuthor} commented on {postTitle} {postMeta}", [j._param("postAuthor", M({
					...e
				})), j._param("postTitle", r.a.createElement(S, null, r.a.createElement(L, {
					outboundLinkClassName: k.a.postTitleOutboundLink,
					post: o,
					size: u.b.Small,
					titleClassName: k.a.postTitleTitle
				}))), j._param("postMeta", D(e))], {
					hk: "d6l8e"
				})))))
			}))))
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
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				v = s.n(g);
			const y = m.a.div("ProfileOwnerCommentWrapper", v.a),
				E = m.a.div("CommentContentWrapper", v.a),
				C = m.a.div("Wrapper", v.a),
				k = m.a.div("CommentSeparator", v.a),
				j = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.c)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(x.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: _.fb
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class O extends a.a.Component {
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
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? w : P;
					return a.a.createElement(u.a, {
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
					}, a.a.createElement(C, {
						className: Object(l.a)({
							[v.a.isFirst]: i,
							[v.a.isLast]: c,
							[v.a.isAwarded]: o,
							[v.a.isNightmodeOn]: d
						})
					}, r()(s + 1, e => a.a.createElement(k, {
						key: e
					})), a.a.createElement(E, null, b(t, m, p))))
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
			t.a = j(O)
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Post/index.ts"),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.wc
			}), e => e === m.Od);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(y);
			const C = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(c.e)(e => Object(g.G)(e, {
						postId: t
					})),
					o = Object(c.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(v.Y)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return o ? r.a.createElement(x.a, {
					className: Object(f.a)(E.a.link, s),
					to: o.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), r.a.createElement(_.b, {
					className: E.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: o
				}), r.a.createElement("span", {
					className: E.a.subredditName
				}, o.displayText)) : null
			};
			var k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				j = s("./src/reddit/connectors/PostViewable/index.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/contexts/Post/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/hooks/useClickSourceData.ts"),
				N = s("./src/reddit/hooks/useIsOverlay.ts"),
				S = s("./src/reddit/hooks/usePageLayer.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				F = s.n(T);
			const A = e => {
				let {
					post: t
				} = e;
				const s = `${Object(L.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(L.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return r.a.createElement("div", {
					className: F.a.postInformation
				}, r.a.createElement("h5", {
					className: F.a.title
				}, t.title), r.a.createElement("div", {
					className: F.a.interactions
				}, r.a.createElement("p", null, s), r.a.createElement("p", null, n)))
			};
			var D = s("./src/lib/isUrl/index.ts"),
				M = s("./src/reddit/actions/profile/index.ts"),
				B = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/components/UserIcon/index.tsx"),
				z = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				U = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				V = s.n(q);
			const G = e => {
				let {
					post: t
				} = e;
				var s, o, a, i;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(W.l)(t.author)),
					m = Object(n.useMemo)(() => Object(B.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(D.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || d(Object(M.d)(t.author))
				}, [d, t.author, u]);
				const p = !u && Object(U.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(z.c)(null === (o = null == l ? void 0 : l.icon) || void 0 === o ? void 0 : o.url);
				return r.a.createElement("div", {
					className: V.a.media
				}, u ? r.a.createElement(B.b, {
					post: t,
					url: m,
					className: V.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: V.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && r.a.createElement("div", {
					className: V.a.userIconContainer
				}, r.a.createElement(R.a, {
					className: Object(f.a)({
						[V.a.snoovatarUserIcon]: p,
						[V.a.defaultUserIcon]: b
					}, V.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: V.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Z = s.n(H);
			const K = Object(j.a)(null);
			var J = Object(w.b)(K(e => {
					let {
						post: t
					} = e;
					const s = Object(S.a)(),
						n = Object(N.a)(),
						o = Object(I.a)(),
						a = Object(O.x)(s) && !n;
					return r.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(P.b)(t.permalink) : Object(k.a)(t.permalink, !1, o)
					}, r.a.createElement("div", {
						className: Z.a.container
					}, r.a.createElement(A, {
						post: t
					}), r.a.createElement(G, {
						post: t
					})))
				})),
				Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Y = s.n(Q);
			const X = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => r.a.createElement(J, {
					postId: e,
					key: e
				}));
				return r.a.createElement("div", {
					className: Y.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(c.d)();
				if (!Object(c.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return r.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(d.y)(t, l.a.Click))
				}, r.a.createElement(X, {
					postIds: t.adPromotedUserPostIds
				}), r.a.createElement(C, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
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
				}) : Object(i.B)(t) && Object(i.A)(t) ? r.a.createElement(te, {
					post: t
				}) : r.a.createElement(a.a, {
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
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				C = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: E,
					isOverlay: k,
					isTopicPage: j,
					post: O,
					shouldShowSubscribeButton: w,
					subredditOrProfile: P,
					tooltipType: I
				} = e, N = !!j, S = Object(v.a)(), L = Object(o.e)(e => !!P && Object(a.i)(e, P.id));
				return r.a.createElement("div", {
					className: C.a.metaContainer
				}, !n && !O.isSponsored && P && r.a.createElement(d.a, {
					postId: O.id,
					subredditName: P.name
				}, r.a.createElement(b.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: S
					}
				}, P.displayText)), P && P.isQuarantined && r.a.createElement(p.a, null), !n && !O.isSponsored && P && w && !E && r.a.createElement(h.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.k)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(y.i)(P) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: O.id,
					size: x.d.XXS,
					small: !0
				}), !n && !O.isSponsored && r.a.createElement(_.b, null), !n && !O.isSponsored && r.a.createElement(l.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), r.a.createElement(u.g, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					post: O,
					tooltipType: I,
					isModWithUserNotesPermissions: L
				}), r.a.createElement(m.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!n,
					post: O,
					tooltipType: I
				}), !N && r.a.createElement(i.a, {
					hideCta: s,
					thing: O,
					tooltipType: k ? u.f.Lightbox : void 0
				}), L && r.a.createElement(c.a, {
					postOrComment: O,
					className: C.a.addModNote
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
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
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
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: _,
					postId: g,
					shouldShowUpvoteRatioOnHover: v
				} = e, y = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && r.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), r.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: y,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: p,
					postId: g,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
				}))
			}
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				ClassicPost: "_3HddQjb-wsXsww_pAIh20y",
				classicPost: "_3HddQjb-wsXsww_pAIh20y",
				OverviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				overviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				backgroundMargin: "_2QIF_lwHCJCj3Dltr80ZqZ",
				isFirstInCommentList: "_2qBXIj3HBiFJkTkjCTD627",
				isLastInCommentList: "pd606OJnAc8wAE-N-Zm84"
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/last.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/helpers/isComment.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				_ = s("./src/lib/LRUCache/index.ts"),
				g = s("./src/telemetry/index.ts"),
				v = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(y);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 500,
				j = new _.a(k),
				O = new _.a(k),
				w = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				P = (e, t, s, n, r, o) => {
					const a = `entered-${e}-${t}-${s?`last-${n}-${r}`:""}`;
					let i = j.get(a);
					return void 0 === i && (i = () => {
						s && o.onBottomViewed(n, r), o.trackOnPostEnteredViewport(e, t)
					}, j.set(a, i)), i
				},
				I = (e, t) => {
					const s = `click-${e}`;
					let n = O.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, d.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(c.e)(s.source.outboundUrl, c.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, O.set(s, n)), n
				};
			class N extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new _.a(k), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && g.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = g.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = g.c.end(this.timerId);
						setTimeout(() => Object(g.b)(i.o.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && g.c.cancel(this.timerId), e.itemIds.length && (this.timerId = g.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && g.c.has(this.timerId)) {
						const e = g.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(g.b)(i.o.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && g.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && r()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return g.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = g.c.end(e);
					setTimeout(() => s(t(n, v.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...s
					} = this.props, {
						itemIds: n,
						...r
					} = e, o = Object.keys(s), a = Object.keys(r);
					return a.length !== o.length || !!a.some(e => s[e] !== r[e])
				}
				scrollChildForItem(e, t, s, n, r, o) {
					const {
						listingKey: i,
						listingName: c,
						postClickEventFactory: d
					} = this.props, l = `post-${o}-${e}-${t}-${s?"last-index":""}-${c}-${i}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], b = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, h = P(p, o, s, i, c, this.props), f = {
							key: b,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: r,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: o,
							onClickPost: I(e, this.props),
							postId: p
						}, _ = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, o, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => a.a.createElement(x.a, {
								postId: f.postId
							}, a.a.createElement(_, C({}, f, e)))
						}, this.scrollChildCache.set(l, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return a.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: n
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: w[s]
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: n,
						onLoadMore: r
					} = this.props, o = n.map((s, r, o) => {
						const a = r === n.length - 1,
							i = r && n[r - 1],
							c = !a && n[r + 1],
							d = !!Object(f.a)(s) && (!i || !Object(f.a)(i) || e[i].postId !== e[s].postId),
							l = !!Object(f.a)(s) && (!c || !Object(f.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, r, a, d, l, t)
					});
					return a.a.createElement("div", null, a.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: r,
						viewportTopPadding: b.f + b.r
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = N
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/fastdom/index.ts"),
				o = s("./node_modules/lodash/isEqual.js"),
				a = s.n(o),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/models/Profile/index.ts"),
				O = s("./src/reddit/featureFlags/index.ts"),
				w = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./src/server/helpers/profileRedirect.ts"),
				L = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				T = s.n(L);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(y.v)({
					routeName: y.bb,
					privateListingType: y.k
				}),
				D = Object(p.c)({
					isDropdownMenuOpen: e => Object(P.a)(e) === B,
					isOwnProfile: (e, t) => Object(I.Y)(e, t.profileName),
					isHistoryTabEnabled: w.a,
					isSnoovatar30Enabled: O.d.snoovatar30,
					isSubscriptionsPinned: N.c
				}),
				M = Object(h.a)(E.a),
				B = "profile-nav-menu-tooltip",
				R = v.g + v.q + v.p;
			var z;
			t.a = A(Object(m.b)(D, e => ({
					toggleTooltip: t => e(Object(_.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: n,
						privateListingType: o,
						profileName: i,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: h
					} = e;
					const [x, _] = Object(d.useState)(!1), y = Object(d.useRef)(null), [E, C] = Object(d.useState)([]), [j, O] = Object(d.useState)([]);
					return Object(d.useEffect)(() => {
						const e = q({
							isHistoryTabEnabled: s,
							profileName: i,
							isOwnProfile: n,
							routeName: m,
							privateListingType: o,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						C(e.filter(e => e.position === z.MENU));
						const t = [],
							d = c()(() => {
								const s = document.documentElement.clientWidth - 2 * v.p,
									n = s > R ? R : s;
								let r = 42;
								t.forEach(t => {
									r += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = r > n ? z.DROPDOWN : z.MENU
								});
								const o = e.filter(e => e.position === z.MENU);
								C(e => a()(o, e) ? e : o);
								const i = e.filter(e => e.position === z.DROPDOWN);
								O(e => a()(i, e) ? e : i), _(i.length > 0)
							}, 50);
						return r.a.read(() => {
							const e = y.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), d())
						}), window.addEventListener("resize", d), () => {
							window.removeEventListener("resize", d)
						}
					}, [s, i, n, m, o, p, h]), l.a.createElement("div", {
						className: T.a.container
					}, l.a.createElement(g.a, {
						bladeOpen: !1,
						offsetLeft: b ? v.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: T.a.menuContainer,
							ref: y
						}, E.map(e => l.a.createElement(U, F({}, e, {
							key: e.key
						})))), x && l.a.createElement("button", {
							className: Object(f.a)(T.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, l.a.createElement(k.a, {
							name: "overflow_horizontal"
						})), x && l.a.createElement(M, {
							className: T.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, j.map(e => l.a.createElement(W, F({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(z || (z = {}));
			const U = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: r
					} = e;
					return r ? l.a.createElement(C.default, {
						className: Object(f.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						to: n
					}, s) : l.a.createElement("a", {
						className: Object(f.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						href: n
					}, s)
				},
				W = e => {
					let {
						isActive: t,
						internal: s,
						url: n,
						text: r
					} = e;
					return s ? l.a.createElement(u.a, {
						className: Object(f.a)(T.a.dropdownLink, {
							[T.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, r) : l.a.createElement("a", {
						className: Object(f.a)(T.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, r)
				},
				q = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: r,
						privateListingType: o,
						isHistoryTabEnabled: a,
						isSnoovatar30Enabled: i,
						viewBlockedConsent: c
					} = e;
					const d = s ? [{
						internal: !0,
						isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: z.MENU
					}, {
						internal: !0,
						isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: z.MENU
					}, {
						internal: !0,
						isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: z.MENU
					}, {
						internal: !0,
						isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: z.MENU
					}] : [];
					s ? (d.push({
						internal: !0,
						isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: z.MENU
					}), d.push({
						internal: !0,
						isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: z.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: z.MENU
					});
					const l = a && s ? [{
							internal: !0,
							isActive: r === x.Sb.PROFILE_PRIVATE && o === j.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: z.MENU
						}] : [],
						m = i ? [{
							internal: !0,
							isActive: r === x.Sb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: z.MENU
						}] : [],
						u = c ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: r === x.Sb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: z.MENU
					}, {
						internal: !0,
						isActive: r === x.Sb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(S.a)(t)}/${u}`,
						position: z.MENU
					}, {
						internal: !0,
						isActive: r === x.Sb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: z.MENU
					}, ...m, ...l, ...d]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				i = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				u = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = s("./src/reddit/constants/posts.ts");
			const b = Object(n.a)({
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
				h = e => o.a.createElement(a.a, {
					className: e.className
				}, o.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), o.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), o.a.createElement(i.a, {
					profileName: e.profileName
				}), o.a.createElement(c.a, {
					profileName: e.profileName
				}), o.a.createElement(d.a, null, o.a.createElement(m.a, {
					profileName: e.profileName
				})), o.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
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
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/take.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: r,
					items: c,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: _
				} = e, [g, v] = Object(a.useState)(!1), y = c.length > b || s, E = (!y || g ? c : o()(c, b)).map(e => x({
					item: e
				})), C = () => {
					g || v(!0), g && !s && v(!1), s && h && h()
				};
				return i.a.createElement(d.a, {
					className: t,
					headerButton: r,
					title: _
				}, E, i.a.createElement(u.a, null, i.a.createElement(p.a, null, y && (() => {
					const e = !g || s && h ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return i.a.createElement(l.r, {
						onClick: C
					}, f ? i.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: c.Yb
			}, t.a = b
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(h);
			const x = Object(i.c)({
					currentUser: b.m,
					moderated: u.p,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				_ = Object(a.b)(x, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				g = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = _(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: r,
					subscriptions: a,
					hasMoreModerated: i,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === r.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(s, new Set(a));
				return o.a.createElement(d.a, {
					className: f.a.container,
					title: u,
					items: p,
					renderItem: g,
					hasMoreItems: i,
					onLoadMore: c,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const h = Object(c.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.q
				}),
				f = Object(a.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				x = e => {
					let {
						item: t
					} = e;
					return o.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, o.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), o.a.createElement("div", {
						className: b.a.description
					}, o.a.createElement(i.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), o.a.createElement("div", {
						className: b.a.meta
					}, t.subredditCount && n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: r,
					onLoadMore: a,
					profileName: i
				} = e;
				return r && r.length ? o.a.createElement(m.a, null, o.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: a,
					pending: s,
					renderItem: x,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", i)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const h = Object(i.b)(i.d, b.a);
			var f = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				_ = s.n(x),
				g = s("./src/lib/lessComponent.tsx"),
				v = s("./src/lib/opener/index.ts");
			const y = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(f.t)(e, Object(f.o)(e, s))
				}
			}, h);
			t.a = Object(a.b)(y)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : o.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: w
				})
			});
			const E = g.a.wrapped(u.a, "TrophyItem", _.a),
				C = g.a.div("TrophyIcon", _.a),
				k = g.a.h5("TrophyName", _.a),
				j = g.a.div("TrophyContent", _.a),
				O = g.a.wrapped(d.c, "Description", _.a),
				w = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = o.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return o.a.createElement(E, {
						key: t.id
					}, o.a.createElement(C, null, t.url ? o.a.createElement("a", {
						target: v.d.BLANK,
						rel: v.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.T(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), o.a.createElement(j, null, o.a.createElement(k, null, t.name), o.a.createElement(O, null, t.description)))
				}
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
				return B
			}));
			var n, r = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/helpers.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/actions/login.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/components/Footer/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/sample/index.ts"),
				E = s("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(n || (n = {}));
			const C = e => {
				Object(g.b)() || Object(E.b)(v.o.Redesign, {
					type: E.a.NsfwBypassableBlocking,
					data: {
						action: e
					}
				})
			};
			var k = s("./src/reddit/selectors/telemetry.ts");
			const j = "nsfw_dialog_bypassable";
			var O;
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(O || (O = {}));
			var w = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: e.fill || O.DEFAULT
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: e.fill || O.DEFAULT
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: e.fill || O.DEFAULT
				})),
				P = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				I = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				N = s("./src/reddit/actions/contentGate.ts"),
				S = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				L = s.n(S);
			const T = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				F = () => o.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				A = () => o.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				D = e => {
					const t = Object(c.d)(),
						s = Object(f.b)(),
						n = Object(c.e)(P.g),
						r = Object(a.useCallback)(() => {
							n === P.a.Blurred && t(Object(b.k)({
								actionSource: b.a.NsfwBlockingModal
							}))
						}, [t, n]),
						m = (e => e ? i.a.createElement("div", {
							className: L.a.cta
						}, o.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), o.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: L.a.cta
						}, o.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === P.a.Blurred);
					return Object(a.useEffect)(() => {
						Object(g.d)(n)
					}, [n]), i.a.createElement("div", {
						className: L.a.mainCta
					}, i.a.createElement(w, null), m, i.a.createElement("div", {
						className: L.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: L.a.warning
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: L.a.buttonContainer
					}, i.a.createElement(_.j, {
						className: L.a.logIn,
						onClick: () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "click",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(k.d)(e)
								}
							}))()), r(), Object(g.c)(g.a.Login), t(Object(p.openLoginModal)())
						}
					}, F()), i.a.createElement(_.j, {
						className: L.a.cancel,
						onClick: () => {
							Object(l.b)(), s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(k.d)(e)
								}
							}))()), Object(g.c)(g.a.Dismiss), t(Object(d.b)("/"))
						}
					}, A())))
				},
				M = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: L.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: L.a.qrCodeInner
					}, i.a.createElement("img", {
						className: L.a.qrCode,
						alt: o.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: L.a.copyLine1
					}, (() => o.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: L.a.copyLine2
					}, (() => o.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: L.a.sneakySnoo,
						src: t
					})))
				}),
				B = e => {
					const t = Object(f.b)(),
						{
							contentTitle: s
						} = e,
						n = Object(c.e)(P.i),
						r = Object(c.e)(P.j),
						o = Object(c.e)(P.g),
						a = Object(c.e)(I.c);
					i.a.useEffect(() => {
						a.isNewDesignVariant ? t((() => e => ({
							...Object(k.o)(e),
							source: "xpromo",
							action: "view",
							noun: j,
							actionInfo: {
								...Object(k.d)(e)
							}
						}))()) : t((() => e => ({
							...Object(k.o)(e),
							source: "xpromo",
							action: "view",
							noun: "nsfw_dialog",
							actionInfo: {
								...Object(k.d)(e)
							}
						}))())
					}, [a, t]);
					const d = o === P.a.Blurred ? h.a.White : o === P.a.NoPreview ? h.a.Grey : void 0;
					return i.a.createElement("div", {
						className: L.a.container
					}, a.isNewDesignVariant ? i.a.createElement(R, {
						contentTitle: s
					}) : i.a.createElement(D, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(m.a)(L.a.footerWrapper, {
							[L.a.mIsModal]: o === P.a.Blurred
						})
					}, i.a.createElement(h.b, {
						textColor: d
					})), i.a.createElement(M, {
						qrCodeAsset: (() => n === x.cd.Enabled || r === x.eb.BlurredPreview || r === x.eb.NoPreview ? T.d2x_nsfw_signup_blocking_de_v1 : T.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				R = e => {
					const t = Object(c.d)(),
						s = Object(f.b)(),
						r = Object(c.e)(P.h);
					return Object(a.useEffect)(() => {
						(e => {
							!Object(g.b)() && e && Object(y.b)(10) && Object(E.b)(v.o.Redesign, {
								type: E.a.NsfwBypassableBlocking,
								data: {
									action: n.View,
									variant: e
								}
							})
						})(r)
					}, [r]), i.a.createElement("div", {
						className: Object(m.a)(L.a.mainCta, {
							[L.a.skippable_buttons]: r === x.fb.SkippableButtons,
							[L.a.skippable_text]: r === x.fb.SkippableText
						})
					}, i.a.createElement("div", {
						className: L.a.contentDescription
					}, i.a.createElement(w, {
						fill: O.BLACK
					}), i.a.createElement("span", {
						className: L.a.cta
					}, e.contentTitle), i.a.createElement("span", {
						className: Object(m.a)(L.a.warning, L.a.warning__bypassable)
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), i.a.createElement("div", {
						className: L.a.cta
					}, (() => o.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), i.a.createElement("div", {
						className: L.a.buttonContainer
					}, i.a.createElement(_.j, {
						className: L.a.logIn,
						onClick: () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "click",
								noun: j,
								actionInfo: {
									...Object(k.d)(e),
									popupButtonText: "login"
								}
							}))()), C(n.Login), t(Object(p.openLoginModal)())
						}
					}, F()), r === x.fb.SkippableButtons && i.a.createElement("div", {
						className: L.a.divider
					}, i.a.createElement("div", {
						className: L.a.dividerLine
					}), i.a.createElement("div", {
						className: L.a.dividerText
					}, (() => o.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), i.a.createElement("div", {
						className: L.a.dividerLine
					})), i.a.createElement(_.j, {
						className: L.a.continue,
						onClick: async () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "click",
								noun: j,
								actionInfo: {
									...Object(k.d)(e),
									popupButtonText: "continue"
								}
							}))()), C(n.Continue), Object(N.q)(), Object(I.d)(), window.location.reload()
						}
					}, (() => o.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), i.a.createElement(_.j, {
						className: Object(m.a)(L.a.continue, L.a.dismiss, {
							[L.a.no_border]: r === x.fb.SkippableText
						}),
						onClick: () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: j,
								actionInfo: {
									...Object(k.d)(e),
									popupButtonText: "back"
								}
							}))()), C(n.Dismiss), t(Object(d.b)("/"))
						}
					}, r === x.fb.SkippableText ? (() => o.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : A())))
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
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return r.a.createElement("div", s, r.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => o.a.createElement(b.a, {
					className: Object(d.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? o.a.createElement(x.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: k.a.errorMsg
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.t, {
					className: k.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(c.c)({
					hideNSFWPref: y.H,
					nightmode: y.fb
				}),
				P = Object(a.b)(w)(e => o.a.createElement("div", {
					className: Object(d.a)(k.a.communityItemContainer, {
						[k.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(g.a, {
					className: k.a.communityItemExpandCenter,
					widthRight: h.s
				}, o.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(_.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(k.a.defaultCommunityIcon, {
						[k.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, o.a.createElement(i.a, {
					className: k.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), o.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: k.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && o.a.createElement(l.b, {
					className: k.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(x.a, {
					className: Object(d.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(f.t, {
					className: k.a.communityCta,
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
					className: k.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				v = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = s.n(v);
			var E = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let o, a = t.username,
						i = "";
					return n !== u.a.Twitter ? null : (o = r.a.createElement(_.a, {
						className: y.a.twitterLogo
					}), i = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = `@${t.username}`, r.a.createElement(g.a, null, r.a.createElement("span", {
						className: y.a.icon
					}, o), r.a.createElement(f.b, {
						className: y.a.link,
						href: t.link,
						onClick: s
					}, r.a.createElement("div", {
						className: y.a.linkTitle
					}, r.a.createElement("span", {
						className: y.a.name
					}, a), r.a.createElement(x.a, {
						className: y.a.linkIcon
					})), r.a.createElement("div", {
						className: y.a.linkDescription
					}, i))))
				},
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				k = s.n(C);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(a.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(b.Cb)(e, {
						userName: s.name
					}) : null
				}
			}), w = Object(o.b)(O, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(w(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? r.a.createElement(i.a, null, r.a.createElement(d.b, null, r.a.createElement(d.a, null, j._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && r.a.createElement("div", {
					className: k.a.account
				}, r.a.createElement(E, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				_ = s("./src/reddit/selectors/user.ts");
			const g = {
					autoplayPref: _.d,
					activeModalId: m.a,
					crosspost: f.d,
					isActive: f.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: f.l,
					isExpanded: f.m,
					isLoggedIn: _.S,
					showPromotedCTA: x.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: d.t,
					flairStyleTemplate: d.Y,
					showCTAExperimentDesign: p.a
				},
				v = Object(n.b)(() => Object(r.c)(g), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(o.ib)(s) : Object(o.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(o.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(v(Object(c.b)(e)))
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
				return a
			})), s.d(t, "f", (function() {
				return i
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
				a = 4,
				i = 1e4,
				c = .2,
				d = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return _
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "l", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/makeRequest/index.ts"),
				i = s("./src/reddit/models/Subreddit/index.ts"),
				c = s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				d = s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				m = s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				u = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				p = s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				h = s("./src/redditGQL/operations/ReportTalk.json"),
				f = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				x = s("./src/redditGQL/types.ts");
			const _ = (e, t) => Object(o.a)(e, {
					...h,
					variables: t
				}),
				g = async (e, t) => {
					const s = await Object(o.a)(e, {
						...m,
						variables: t
					});
					return !!Object(a.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(x.N.Talk)
				}, v = async (e, t) => {
					var s, n;
					const r = await Object(o.a)(e, {
						...u,
						variables: t
					});
					return !!Object(a.c)(r) && (null !== (n = null === (s = r.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== n ? n : []).includes(x.N.Talk)
				}, y = async e => {
					var t;
					const s = await Object(o.a)(e, l);
					return Object(a.c)(s) && null !== (t = s.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, E = (e, t, s) => t.type === i.g.User ? Object(o.a)(e, {
					...c,
					variables: s
				}) : Object(o.a)(e, {
					...d,
					variables: {
						...s,
						subredditId: t.id
					}
				}), C = (e, t, s) => t.type === i.g.User ? Object(o.a)(e, {
					...b,
					variables: {
						input: s
					}
				}) : Object(o.a)(e, {
					...p,
					variables: {
						input: {
							...s,
							subredditId: t.id
						}
					}
				}), k = () => Object(r.a)(), j = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, O = {
					[x.l.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[x.l.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[x.l.RoomLimitExceeded]: n.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[x.l.ConcurrentRoomLimitExceeded]: n.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[x.l.SubredditRoomLimitExceeded]: n.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, w = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, P = {
					[x.P.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[x.P.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, I = (e, t) => Object(o.a)(e, {
					...f,
					variables: t
				})
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, o, a) => n ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, o, a)) : i(e, s, o, a) : null,
				i = (e, t, s, n) => r.a.createElement(o.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(o.o)(s),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.lb)(s),
					post: Object(o.K)(s, e),
					userSubreddit: Object(o.ub)(s),
					actionInfo: Object(o.d)(s, {
						reason: a(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(o.o)(s),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.K)(s, t),
					subreddit: Object(o.lb)(s),
					userSubreddit: Object(o.ub)(s)
				}),
				d = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(o.d)(t, {
						pageType: "profile"
					}),
					post: Object(o.K)(t, e, void 0, 0),
					profile: Object(o.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(o.o)(n),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						reason: d(t)
					}),
					post: Object(o.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, a, i) => c => ({
					...Object(o.o)(c),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.K)(c, e, void 0, i),
					subreddit: Object(o.lb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(o.o)(n),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(o.K)(n, e, void 0, s),
					subreddit: Object(o.lb)(n)
				})
		},
		"./src/reddit/helpers/trackers/talkCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/lib/eventTools/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/postCreations.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					...a.o(e),
					source: "global",
					action: r.c.VIEW,
					noun: r.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_room"
					}
				}),
				c = () => e => ({
					...a.o(e),
					source: "global",
					action: r.c.VIEW,
					noun: r.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_topic_picker"
					}
				}),
				d = () => e => ({
					...a.o(e),
					source: "liveaudio",
					action: r.c.CLICK,
					noun: "go_live",
					subreddit: a.lb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e),
						topicIds: Object(o.ub)(e).topics.map(e => e.id)
					}
				}),
				l = () => e => ({
					...a.o(e),
					source: "liveaudio",
					action: r.c.CLICK,
					noun: "schedule",
					subreddit: a.lb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e),
						topicIds: Object(o.ub)(e).topics.map(e => e.id)
					}
				}),
				m = () => e => ({
					...a.o(e),
					source: "post_composer",
					action: r.c.CLICK,
					noun: "overflow",
					subreddit: a.lb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e)
					}
				}),
				u = e => t => ({
					...a.o(t),
					source: "global",
					action: r.c.VIEW,
					noun: r.b.SCREEN,
					subreddit: a.lb(t),
					post: a.K(t, e),
					postEvent: {
						eventState: n.a.Future
					}
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("rightAligned", o.a)
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
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
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					avatar: s,
					history: o,
					location: u
				} = e;
				const h = Object(c.a)();
				return Object(n.useEffect)(() => {
					h((() => e => {
						var t, s;
						return {
							source: i.f.BlockedProfileInterstitial,
							action: i.d.View,
							noun: i.e.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (s = null === (t = a.T(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
							},
							...a.o(e)
						}
					})())
				}, [h, t]), r.a.createElement("div", {
					className: p.a.container
				}, r.a.createElement(l, {
					className: p.a.accent
				}), r.a.createElement("div", {
					className: p.a.avatarContainer
				}, r.a.createElement("img", {
					className: p.a.avatar,
					src: null != s ? s : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
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
				}, r.a.createElement(m.t, {
					className: p.a.btn,
					to: `${u.pathname}?consent=true`,
					kind: m.b.InternalLink,
					priority: m.c.Primary,
					size: m.d.L,
					onClick: () => h((() => e => {
						var t, s;
						return {
							source: i.f.BlockedProfileInterstitial,
							action: i.d.Accept,
							noun: i.e.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (s = null === (t = a.T(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
							},
							...a.o(e)
						}
					})()),
					isFullWidth: !0,
					isSquare: !0
				}, b._("Continue", null, {
					hk: "3eqDZf"
				})), r.a.createElement(m.t, {
					className: p.a.btn,
					to: "#",
					kind: m.b.InternalLink,
					priority: m.c.Secondary,
					size: m.d.L,
					onClick: () => {
						h((() => e => {
							var t, s;
							return {
								source: i.f.BlockedProfileInterstitial,
								action: i.d.Deny,
								noun: i.e.BlockedProfileInterstitial,
								targetUser: {
									id: null !== (s = null === (t = a.T(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
								},
								...a.o(e)
							}
						})()), o.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, b._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				u = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				p = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				b = s("./src/reddit/actions/pages/profileComments/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/components/ContentGate/index.tsx"),
				x = s("./src/reddit/components/EmptyProfile/index.ts"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = s("./src/reddit/components/JumpToContent/index.tsx"),
				v = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				E = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/ClassicPost/index.tsx"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				O = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				w = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				P = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				S = s("./src/reddit/selectors/commentSelector.ts"),
				L = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				T = s.n(L);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = E.a.wrapped(C.default, "ClassicPost", T.a),
				D = E.a.wrapped(j.a, "OverviewCommentPost", T.a),
				M = Object(I.v)({
					currentProfileName: I.j,
					pageLayer: e => e
				}),
				B = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(S.c)(e, {
							commentId: s
						})
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
					}
				});
			var R = M(Object(i.b)(B)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: n,
					isLastInCommentList: r,
					layout: o,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (o === P.g.Compact) return a.a.createElement(k.a, e);
				const {
					height: d,
					width: l,
					...m
				} = e;
				return a.a.createElement(z, m, n && a.a.createElement(O.a, {
					isFirst: !0
				}, o === P.g.Large ? a.a.createElement(A, F({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(D, F({}, e, {
					commentId: s,
					profileName: i
				}))), a.a.createElement(O.a, {
					isLast: r
				}, a.a.createElement(w.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: i,
					showModTools: c
				})))
			}));
			const z = Object(y.a)(e => a.a.createElement("div", {
				className: Object(v.a)(T.a.backgroundMargin, {
					[T.a.isFirstInCommentList]: e.isFirstInCommentList,
					[T.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(N.e)(e)
				}
			}, e.children));
			var U = s("./src/reddit/components/ProfileItemList/index.tsx"),
				W = s("./node_modules/lodash/noop.js"),
				q = s.n(W),
				V = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/actions/comment/list.ts"),
				H = s("./src/reddit/actions/post.ts"),
				Z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				J = s("./src/reddit/helpers/trackers/post.ts"),
				Q = s("./src/reddit/featureFlags/index.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/profileComments.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/tracking.ts"),
				se = s("./src/reddit/selectors/user.ts");
			const ne = Object(I.v)(),
				re = {
					apiError: $.a,
					apiPending: $.b,
					currentUser: se.m,
					measureScrollFPS: Q.d.measureScrollFPS,
					layout: I.U,
					loadMore: $.d,
					subredditsById: ee.fb,
					viewportDataLoaded: te.a,
					commentsById: Y.q,
					itemIds: $.f,
					itemIdToPostId: $.e,
					postsById: X.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case P.g.Medium:
								return 174;
							case P.g.Classic:
								return 129;
							case P.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case P.g.Medium:
							case P.g.Classic:
								return 90;
							case P.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				oe = Object(c.c)(re),
				ae = Object(i.b)(oe, e => ({
					onBottomViewed: (t, s) => e(Object(G.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(V.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.K)(t)),
					fireAdPixelsOfType: q.a,
					trackOnPostEnteredViewport: q.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(J.k)(e, t),
					postComponentForLayout: K.b
				}));

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = e => a.a.createElement(R, ie({}, e, {
					allowModToolsUnderComments: !0
				})),
				de = (e => Object(Z.c)(ne(ae(e))))(U.a);
			var le = e => a.a.createElement(de, ie({}, e, {
					itemComponent: ce
				})),
				me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ue = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				be = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/helpers/trackers/screenview.ts"),
				fe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				xe = s("./src/reddit/layout/page/Listing/index.tsx"),
				_e = s("./src/reddit/models/ContentGate.ts"),
				ge = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ve = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ye = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Ee = s("./src/reddit/selectors/profile.ts");

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ke = Object(I.v)(),
				je = Object(c.a)(I.G, se.mb, (e, t) => {
					let {
						location: s
					} = t;
					return r()([...Object(l.a)(s.search)])
				}, I.U, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Ee.k)(e, {
						profileName: s.params.profileName
					})
				}, se.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(se.h)(e, d.qc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(se.N)(e, {
						profileName: s.params.profileName
					})
				}, ve.g, ye.a, (e, t, s, n, r, o, a, i, c, d, l) => {
					var u;
					const {
						sort: p,
						t: b
					} = Object(h.b)(s), f = Object(m.a)(`u_${r}`, p, s);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: n,
						listingKey: f,
						profileName: r,
						sort: p,
						timeSort: b,
						avatar: null === (u = null == o ? void 0 : o.icon) || void 0 === u ? void 0 : u.url,
						isBlocked: c,
						nsfwBlockingExperiment: d,
						showNewDesignBlocking: l
					}
				}),
				Oe = Object(i.b)(je, (e, t) => ({
					onLoadMore: () => e(Object(b.moreItemsRequested)()),
					onLayoutChange: () => e(Object(b.profileCommentsRequested)({
						...t.match,
						queryParams: r()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(p.a)())
				}));
			t.default = ke(Oe(Object(u.a)(Object(fe.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: n,
					isOwnProfile: r,
					isProfileNSFW: i,
					listingKey: c,
					nsfwBlockingExperiment: l,
					onLoadMore: m,
					onLayoutChange: u,
					openNsfwModal: p,
					over18Prefs: b,
					pageLayer: h,
					profileName: v,
					sort: y,
					timeSort: E,
					showNewDesignBlocking: C
				} = e;
				if (Object(o.useEffect)(() => {
						i && !r && l === ve.a.Blurred && p()
					}, [l, r, i, p]), !v || !h) return null;
				if (s && s.profileDeleted) return a.a.createElement(f.default, {
					contentGateType: _e.a.ProfileDeleted,
					profileName: v
				});
				if (s && s.profileSuspended) return a.a.createElement(f.default, {
					contentGateType: _e.a.ProfileSuspended,
					profileName: v
				});
				if (451 === h.status || s && s.profileBlockedForLegalReason) return a.a.createElement(f.default, {
					contentGateType: _e.a.ProfileBlockedForLegalReason,
					profileName: v
				});
				const k = h.queryParams && "true" === h.queryParams.consent;
				if (403 === h.status || n && !k) return a.a.createElement(ge.a, {
					username: v,
					avatar: t
				});
				if (404 === h.status) return a.a.createElement(f.default, {
					contentGateType: _e.a.ProfileDoesNotExist,
					profileName: v
				});
				const j = v.toLowerCase(),
					O = `/user/${v}/comments/`,
					w = {
						listingKey: c,
						listingName: j
					};
				if (i && !r && l === ve.a.NoPreview && C) return a.a.createElement(pe.a, {
					contentTitle: Object(be.e)(v)
				});
				if (!b && i && !r && l !== ve.a.Blurred) return a.a.createElement(f.default, {
					contentGateType: _e.a.Nsfw,
					subredditName: v
				});
				const P = {
					sort: y,
					baseUrl: O,
					sortOptions: d.Ib,
					timeSort: E
				};
				return a.a.createElement(xe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(me.a, {
						profileName: v,
						viewBlockedConsent: k
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(_.a, P), a.a.createElement(g.a, null), a.a.createElement(le, {
						listingKey: c,
						listingName: j,
						listingViewed: (e, t) => Object(he.o)(c, y, t, e, E),
						noPostsComponent: () => a.a.createElement(x.b, {
							profileName: v,
							timeSort: E
						}),
						onLoadMore: m,
						onTryAgain: u,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(ue.a, Ce({}, w, {
						profileName: v
					}))
				})
			}))))
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/localStorageAvailable/index.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/constants/localStorage.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				c = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts"),
				l = s("./node_modules/reselect/es/index.js");
			const m = 30 * n.pb,
				u = () => {
					Object(i.zb)(a.b.XpromoConsolidation, (new Date).toString())
				},
				p = () => {
					if (!Object(r.a)()) return !1;
					const e = localStorage.getItem(a.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(a.b.XpromoConsolidation), !0) : Date.now() > t + m
				},
				b = (e, t) => t === c.a.NoPreview && (e === o.fb.SkippableButtons || e === o.fb.SkippableText),
				h = (e, t) => t === c.a.NoPreview && e === o.fb.NoUpsell,
				f = Object(l.a)(c.h, c.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === c.a.NoPreview && !b(e, t) && !h(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && b(e, t),
						isOldDesignVariant: !(!e || !t) && h(e, t),
						variant: e
					}
				}),
				x = Object(l.a)(f, d.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.1a2d4ad9f927a5869cf3.js.map