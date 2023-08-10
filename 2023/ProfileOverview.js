// https://www.redditstatic.com/desktop2x/ProfileOverview.40607918b9fc9cb07909.js
// Retrieved at 8/10/2023, 6:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "reddit-components-ContentGate"], {
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
						x = () => {
							Object(a.b)() && (u(i.o({
								over18: !1
							})), m && window.clearInterval(m))
						};
					return Object(n.useEffect)(() => (!b && h.isNewDesignVariant && p && (m = window.setInterval(x, l), x()), () => window.clearInterval(m)), [h.isNewDesignVariant, x, b, p]), r.a.createElement(e, t)
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
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				i = s.n(o),
				a = s("./src/lib/linkMatchers/customLinks.ts");
			s("./node_modules/lodash/values.js");
			const c = ["//", "ftp:", "http:", "https:", "mailto:"],
				d = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, c),
				l = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				m = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				u = d(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				p = d(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				b = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				h = (r()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config), l.normalize);
			l.normalize = e => {
				h.call(l, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				f = e => {
					const t = l.match(e);
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
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
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

			function x() {
				return (x = Object.assign || function(e) {
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
					return n.createElement(e, x({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
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
				x = s("./src/reddit/selectors/user.ts");
			const f = [],
				v = (Object(u.a)((e, t) => {
					const s = v(e, t);
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
				_ = (e, t, s, n, r) => {
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
				g = [3];
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
				return g.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !_(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var y = s("./src/reddit/selectors/platform.ts");
			const C = Object(r.a)(i.f),
				E = Object(r.a)(i.d),
				O = Object(r.a)(i.g),
				k = Object(r.a)(i.c),
				j = Object(r.a)(i.e),
				P = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(x.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(x.R)(o);
					if (i || !d) return;
					e(O());
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
								if (I(t)) {
									e(k({
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
					b || e(E({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				w = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				S = e => {
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
						const s = null === (r = null === (n = Object(y.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(x.S)(i);
						return Object(o.i)(() => e(P()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(j({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return Oe
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return ke
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return je
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return we
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Se
			})), s.d(t, "profileOverviewRequested", (function() {
				return Ne
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/moderatingSubreddits.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				c = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/config.ts"),
				l = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/makeActionCreator/index.ts"),
				E = s("./src/reddit/actions/changeUsername.ts"),
				O = s("./src/reddit/actions/contentGate.ts"),
				k = s("./src/reddit/actions/externalAccount.ts"),
				j = s("./src/reddit/actions/pinnedPost.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				w = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				S = s("./src/reddit/constants/errors.ts"),
				N = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				M = s("./src/lib/initializeClient/installReducer.ts"),
				F = s("./node_modules/redux/es/redux.js"),
				D = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const B = {};
			var A = function() {
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
			const R = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
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
				z = Object(F.c)({
					error: A,
					pending: U
				});
			const W = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
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
			const V = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
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
			const K = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
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
				J = Object(F.c)({
					api: z,
					fetchedTokens: q,
					ids: H,
					loadMore: Z
				});
			const Q = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
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
			const X = {};
			var $ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
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
				ee = Object(F.c)({
					error: Y,
					pending: $
				}),
				te = s("./src/reddit/actions/profileConversations.ts");
			const se = {};
			var ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.c:
					case te.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case te.a: {
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
			const re = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case te.b:
						case te.a: {
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
				ie = Object(F.c)({
					error: ne,
					pending: oe
				});
			const ae = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.e:
						case te.b:
						case te.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				de = Object(F.c)({
					api: ie,
					models: ce
				}),
				le = s("./node_modules/lodash/mapValues.js"),
				me = s.n(le),
				ue = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = s("./src/reddit/constants/comments.ts");
			const be = {};

			function he(e) {
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
			const xe = (e, t, s) => {
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
			var fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.e:
					case te.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: r,
							profileName: o
						} = t.payload, i = xe(r, s, n), a = {};
						for (const e of r) {
							a[Object(ue.a)(e, o)] = i.hasOwnProperty(e) ? he(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case te.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: r,
							extraCommentsId: o,
							postIds: i,
							profileName: a
						} = t.payload;
						if (0 === i.length) {
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
						const c = i[0],
							d = he(xe(i, s, r)[c]),
							l = Object(ue.a)(c, a),
							m = {
								...e[l]
							},
							u = m[o].prev,
							p = u && u.id || "",
							b = n[c].head,
							h = b && b.id || "",
							x = {
								id: h,
								type: pe.a.Comment
							},
							f = {
								...m,
								[p]: {
									...m[p],
									next: x
								},
								...d,
								[h]: {
									...d[h],
									prev: u
								}
							};
						return {
							...e,
							[l]: f
						}
					}
					default:
						return e
				}
			};
			const ve = {};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.e:
					case te.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: r
						} = t.payload, o = {};
						for (const e of n) {
							o[Object(ue.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
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
			const ge = {};
			var ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.e:
						case te.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, r = {};
							for (const e of s) {
								r[Object(ue.a)(e, n)] = e
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
				Ce = Object(F.c)({
					api: ee,
					extraComments: de,
					keyToCommentThreadLinkSets: fe,
					keyToHeadCommentId: _e,
					keyToPostId: ye
				}),
				Ee = Object(F.c)({
					chrono: J,
					conversations: Ce
				});
			Object(M.a)({
				pages: {
					profileOverview: Ee
				}
			});
			const Oe = Object(C.a)(T.f),
				ke = Object(C.a)(T.e),
				je = Object(C.a)(T.d),
				Pe = Object(C.a)(T.c),
				we = Object(C.a)(T.b),
				Ie = Object(C.a)(T.a),
				Se = (e, t, s, n) => async (n, r, i) => {
					const a = r(),
						c = !!a.listings.postOrder.ids[e],
						x = !!Object(_.c)(a, {
							listingKey: e
						});
					if (!!Object(_.d)(a, {
							listingKey: e
						}) || c && !x) return;
					n(Oe({
						key: e
					}));
					const f = await Object(L.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: o.nb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, s)),
						v = f.body;
					await Object(h.a)(i.gqlContext, v.posts).then(e => v.posts = e);
					const {
						pinned: y,
						postIds: C
					} = v;
					if (f.ok) {
						n(ke({
							key: e,
							meta: a.meta,
							profileName: t,
							...v,
							postIds: C
						}));
						const s = Object(g.o)(r(), t);
						n(Object(j.h)({
							profileId: s,
							pinned: y
						}))
					} else n(je({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === S.a.DeletedProfile && n(Object(O.v)({
						profileName: t
					})), n(Object(P.o)(f.status))
				}, Ne = e => async (t, s, n) => {
					const {
						queryParams: d,
						params: l
					} = e, {
						sort: m,
						t: u
					} = Object(a.a)(s(), d), {
						profileName: p
					} = l;
					let b = !1;
					const h = x.e[Object(v.U)(s(), {})],
						_ = p.toLowerCase(),
						C = {
							...r()(e.queryParams, f.p),
							sort: m,
							layout: h,
							t: u
						},
						O = [t(w.d(_))],
						j = Object(N.a)(_, o.zb, m, e.queryParams);
					if (t(P.n({
							title: Le(s(), p)
						})), s().listings.postOrder.ids[j] && !s().listings.postOrder.api.error[j] ? b = !0 : O.push(t(Se(j, _, C, !0))), O.push(t(Object(i.b)())), await Promise.all(O), b) return;
					const S = s();
					if (!S.platform.currentPage) return;
					if (200 !== S.platform.currentPage.status) return;
					const L = Object(g.o)(s(), _);
					Object(y.U)(S) && Object(y.Y)(S, p) && t(Object(E.startChangeUsernameFlow)());
					const T = [t(Object(c.q)()), t(I.b(_, L)), t(w.b(_)), t(k.o(p)), t(w.i(p))];
					await Promise.all(T)
				}, Le = (e, t) => Object(g.s)(e, {
					profileName: t
				})
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx");
			var h = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "none",
					className: t
				}, r.a.createElement("g", {
					clipPath: "url(#clip0_826_294874)"
				}, r.a.createElement("path", {
					d: "M9.13086 15.2315V18.9725C9.1307 19.0439 9.1119 19.114 9.07631 19.1759C9.04072 19.2378 8.98958 19.2893 8.92795 19.3254C8.86633 19.3615 8.79635 19.3808 8.72495 19.3815C8.65354 19.3822 8.58319 19.3643 8.52086 19.3295L1.19986 15.2324C1.10316 15.178 1.02266 15.0989 0.966602 15.0031C0.910549 14.9074 0.880958 14.7984 0.88086 14.6874V6.53545C0.880748 6.46296 0.899904 6.39175 0.936365 6.3291C0.972825 6.26645 1.02528 6.21461 1.08836 6.1789C1.15144 6.14319 1.22288 6.12488 1.29536 6.12586C1.36784 6.12683 1.43876 6.14705 1.50086 6.18445L4.66786 8.08445C4.80909 8.16923 4.92596 8.28912 5.00709 8.43247C5.08823 8.57582 5.13087 8.73773 5.13086 8.90245V12.5145L8.63086 14.3934C8.78199 14.4751 8.90824 14.5961 8.99625 14.7436C9.08427 14.8911 9.13078 15.0597 9.13086 15.2315ZM9.88086 4.93145L13.3809 6.81345C13.5262 6.89146 13.6893 6.93044 13.8543 6.92658C14.0192 6.92273 14.1803 6.87617 14.3219 6.79145L17.5089 4.87945C17.5704 4.84257 17.6211 4.79016 17.656 4.72746C17.6909 4.66477 17.7087 4.59401 17.7076 4.52228C17.7064 4.45055 17.6865 4.38037 17.6497 4.31879C17.6129 4.25721 17.5605 4.2064 17.4979 4.17145L10.1869 0.0794502C10.0933 0.0273472 9.98796 0 9.88086 0C9.77376 0 9.66843 0.0273472 9.57486 0.0794502L2.25886 4.17945C2.19626 4.21449 2.14398 4.26538 2.10726 4.32701C2.07055 4.38863 2.05069 4.45884 2.04967 4.53057C2.04866 4.6023 2.06653 4.67303 2.10149 4.73567C2.13645 4.79831 2.18728 4.85066 2.24886 4.88745L5.43486 6.79945C5.57661 6.88416 5.73788 6.93071 5.90296 6.93457C6.06805 6.93842 6.23131 6.89945 6.37686 6.82145L9.88086 4.93145ZM14.6309 12.5104L11.1309 14.3895C10.9796 14.4712 10.8532 14.5923 10.7652 14.74C10.6772 14.8877 10.6308 15.0565 10.6309 15.2284V18.9694C10.6308 19.0408 10.6495 19.111 10.6849 19.1729C10.7204 19.2349 10.7714 19.2864 10.833 19.3225C10.8946 19.3586 10.9645 19.378 11.0359 19.3787C11.1073 19.3794 11.1776 19.3614 11.2399 19.3265L18.5609 15.2264C18.6579 15.1723 18.7387 15.0933 18.795 14.9975C18.8512 14.9016 18.8809 14.7926 18.8809 14.6814V6.53545C18.881 6.46296 18.8618 6.39175 18.8254 6.3291C18.7889 6.26645 18.7364 6.21461 18.6734 6.1789C18.6103 6.14319 18.5388 6.12488 18.4664 6.12586C18.3939 6.12683 18.323 6.14705 18.2609 6.18445L15.0939 8.08445C14.9526 8.16923 14.8358 8.28912 14.7546 8.43247C14.6735 8.57582 14.6308 8.73773 14.6309 8.90245V12.5104Z",
					fill: "#0F1A1C"
				})), r.a.createElement("defs", null, r.a.createElement("clipPath", {
					id: "clip0_826_294874"
				}, r.a.createElement("rect", {
					width: "20",
					height: "20",
					fill: "white"
				}))))
			};
			var x = () => r.a.createElement("div", {
					className: "flex items-center justify-center w-full rounded p-sm bg-[color:var(--newCommunityTheme-bodyTextAlpha03)]"
				}, r.a.createElement(h, {
					className: "h-[18px]"
				})),
				f = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(f),
				_ = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => r.a.createElement("div", {
					className: v.a.endedClassicContainer
				}, r.a.createElement(_.a, {
					className: v.a.muteIcon
				})),
				C = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				E = s("./src/reddit/components/ExpandoButton/index.tsx"),
				O = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				P = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				w = s("./src/reddit/components/ModModeReports/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				S = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				N = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				T = s("./src/reddit/components/PostMeta/index.tsx"),
				M = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				F = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				D = s("./src/reddit/components/PostTitle/index.tsx"),
				B = s("./src/reddit/components/PostTopMeta/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				R = s("./src/reddit/models/Audio/index.ts"),
				U = s("./src/reddit/models/Media/index.ts"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				W = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/constants/postLayout.ts"),
				V = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				H = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				G = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				K = s("./src/reddit/helpers/search/renderMedia.tsx"),
				Z = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(Q),
				X = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/redditGQL/types.ts"),
				ee = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				te = s("./src/reddit/components/ClassicPost/index.m.less"),
				se = s.n(te);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: h,
					isExpanded: f,
					inSubredditOrProfile: v,
					eventFactory: _,
					flairStyleTemplate: g,
					formatTitle: W,
					hostPostData: Q,
					isCheckboxSelected: te,
					isCurrentUserProfilePost: re,
					isFrontpage: oe,
					isGalleryTileLayoutDefault: ie,
					isLoggedIn: ae,
					isOverlay: ce,
					imageGalleryCurrentItem: de,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: ue,
					onIgnoreReports: pe,
					onOpenReportsDropdown: be,
					onSizeChanged: he,
					poll: xe,
					post: fe,
					postId: ve,
					redditStyle: _e,
					scrollerItemRef: ge,
					showBulkActionCheckbox: ye,
					showEditFlair: Ce,
					showMedia: Ee,
					shouldShowInsightsButton: Oe,
					subredditOrProfile: ke,
					toggleCheckbox: je,
					userIsOp: Pe,
					shouldShowGalleryTileOption: we,
					showCTAExperimentDesign: Ie
				} = e, Se = Object(l.a)(), Ne = Object(d.a)(f);
				Object(n.useEffect)(() => {
					he && Ne !== f && he(fe.id)
				}, [f, he, fe.id, Ne]);
				const Le = _e ? void 0 : g,
					Te = s || void 0,
					Me = Object(G.a)(le),
					Fe = Object(V.a)(le),
					De = Object(H.a)(le),
					Be = me && G.a,
					Ae = Object(P.a)(fe),
					Re = Object(I.c)(fe),
					Ue = !!fe.media && fe.media.type === U.o.RTJSON,
					ze = Pe && Ue,
					We = v && !Ee,
					qe = !!fe.recommendationContext,
					Ve = {
						flairStyleTemplate: Le,
						post: fe,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: re,
						isOverlay: ce,
						shouldShowSubscribeButton: !(oe && ae) || qe && ae,
						subredditOrProfile: ke
					},
					He = Object(o.t)(fe, de),
					[Ge, Ke] = Object(n.useState)(!1),
					Ze = Object(n.useCallback)(() => {
						Ke(!Ge), Se(Object(J.d)(ve))
					}, [Ge, ve, Se]);
				let Je = r.a.createElement(z.a, {
					className: se.a.classicThumbnail,
					crosspost: Te && fe,
					isMeta: fe.isMeta,
					post: Te || fe,
					redditStyle: _e,
					templatePlaceholderImage: Le && Le.postPlaceholderImage
				});
				Object(R.b)(fe) ? Je = r.a.createElement(y, null) : Object(U.G)(fe) && (Je = r.a.createElement(x, null));
				const Qe = Object(X.r)(fe);
				return r.a.createElement(L.b, {
					className: Object(i.a)(Y.a.classicPostStyles, se.a.postContainer, Object(Z.a)(e), {
						[se.a.shouldShowOverflow]: Oe
					}, t),
					isOverlay: ce,
					style: {
						...Object(Z.d)(e),
						...Object(Z.b)(Le)
					},
					post: fe,
					onClick: ue,
					eventFactory: _
				}, r.a.createElement(F.a, {
					model: fe,
					handleVote: h,
					showBulkActionCheckbox: ye,
					isCheckboxSelected: te,
					toggleCheckbox: je,
					flairStyleTemplate: Le,
					redditStyle: _e,
					postId: ve
				}), r.a.createElement(N.a, {
					className: Oe ? se.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Le
				}, r.a.createElement(C.a, {
					className: se.a.eventMeta,
					post: fe
				}), r.a.createElement("div", {
					className: se.a.mainBody
				}, r.a.createElement("div", {
					className: We ? se.a.expandoContainer : se.a.thumbnailContainer
				}, !We && Je, r.a.createElement(E.a, {
					crosspost: Te,
					className: se.a.rightExpando,
					isExpanded: !!f,
					post: fe,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(i.a)(se.a.content, {
						[se.a.showBulkActionCheckbox]: ye
					}),
					"data-click-id": "body"
				}, Qe && r.a.createElement(S.a, {
					content: fe.recommendationContext.content,
					layout: q.g.Classic,
					post: fe
				}), r.a.createElement(D.c, {
					className: xe ? se.a.titleWithPoll : void 0,
					format: W,
					poll: xe,
					post: fe,
					redditStyle: _e,
					size: D.b.Medium,
					titleColor: Le && Le.postTitleColor,
					isOverlay: ce
				}, fe.source && !Te && !fe.isSurveyAd && r.a.createElement(A.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(c.a)(fe))), r.a.createElement(T.a, ne({
					key: "PostMeta"
				}, Ve)), me && Me && Ae && r.a.createElement(j.a, {
					thing: fe
				}), me && Me && Re && r.a.createElement(w.a, {
					onIgnoreReports: pe,
					reportable: fe
				}), Object(o.v)(fe, de) && r.a.createElement(m.a, {
					ctaExperimentDesign: Ie && "classic",
					className: Object(i.a)(se.a.adLinkWrapper, {
						[se.a.ctaExperiment]: Ie
					})
				}, r.a.createElement(u.a, {
					post: fe,
					adLinkContent: He,
					ctaExperimentDesign: Ie && "classic"
				})), fe.discussionType === $.n.Chat && r.a.createElement(ee.a, {
					postId: fe.id
				}), r.a.createElement("div", {
					className: se.a.flatlistContainer
				}, r.a.createElement(E.a, {
					className: se.a.leftExpando,
					crosspost: Te,
					isExpanded: !!f,
					post: fe,
					useMediaIcons: !1
				}), r.a.createElement(p.a, {
					className: se.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Le,
					model: fe,
					onVoteClick: h
				}), r.a.createElement(O.a, {
					className: se.a.flatlistSeparator
				}), !fe.isSurveyAd && r.a.createElement(O.c, {
					className: se.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Fe,
					hasModPostPerms: Me,
					hasModFullPerms: De,
					hostPostData: Q,
					isOverlay: !!ce,
					modModeEnabled: me,
					onClickInsightsButton: Ze,
					onIgnoreReports: pe,
					onOpenReportsDropdown: be,
					post: fe,
					shouldShowInsightsButton: Oe,
					showEditPost: ze,
					showEditFlair: Ce,
					tooltipType: ce ? B.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(M.b)({
						editPost: !Be,
						hide: !Be,
						report: !Be,
						mute: !Be,
						save: !Be
					})
				})), r.a.createElement(k.d, null))), Object(K.a)(fe, se.a, ge, f, we, ie), ke && Ge && r.a.createElement(b.a, {
					className: se.a.creatorStatsContainer,
					post: fe,
					subreddit: ke,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(W.a)(re)
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(i.c)({
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
						style: i
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => o && o(t, n))(t)
						},
						style: i
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * c.L;
			class v extends r.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && u.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, f), this.onShowMore = e => {
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
			var _ = v,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./node_modules/lodash/noop.js"),
				C = s.n(y),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				O = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				F = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				D = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				B = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				A = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				z = s("./src/reddit/contexts/InsideOverlay.tsx"),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/overlay/index.ts"),
				K = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Z = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				Q = s("./src/reddit/selectors/activeModalId.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/experiments/econ/index.ts"),
				$ = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/tooltip.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				re = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ie = s("./src/reddit/components/ReportFlow/new.tsx"),
				ae = s("./src/reddit/components/ShareMenu/index.tsx"),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/controls/Dropdown/Row.tsx"),
				le = s("./src/reddit/helpers/trackers/modTools.ts"),
				me = s("./src/reddit/layout/row/Inline/index.tsx"),
				ue = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				be = s("./src/reddit/icons/fonts/Report/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				xe = s.n(he),
				fe = s("./src/lib/collectible-expressions/index.ts"),
				ve = s("./src/lib/constants/icons.ts"),
				_e = s("./src/lib/lessComponent.tsx"),
				ge = s("./src/reddit/icons/fonts/index.tsx"),
				ye = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ce = s("./src/reddit/models/Toast/index.ts");
			const Ee = _e.a.wrapped(re.b, "OverflowMenu", xe.a),
				Oe = _e.a.wrapped(M.a, "ModToolsFlatlist", xe.a),
				ke = _e.a.wrapped(A.a, "ModActionsMenu", xe.a),
				je = _e.a.wrapped(de.b, "DropdownRow", xe.a),
				Pe = _e.a.wrapped(me.a, "Flatlist", xe.a),
				we = _e.a.button("Button", xe.a),
				Ie = Object(W.v)(),
				Se = e => `Comment-${e}--Modal--DeleteComment`,
				Ne = e => `Distinguish--Dropdown--${e}`,
				Le = (e, t) => `${e}--${t}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Me = Object(i.c)({
					activeTooltipId: se.a,
					isAwardsSunsetEnabled: X.d,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.a)(e) === Se(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: ne.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: ne.m,
					modModeEnabled: W.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.m)(e, {
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
					subreddit: W.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: $.a
				});
			class Fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(le.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => {
						const e = Object(V.a)(this.props.comment);
						Object(fe.a)(e) ? this.props.showToast({
							text: g.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: Ce.b.SuccessLockComment
						}) : this.props.handleEdit(this.props.commentPermalink)
					}, this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(q.d)(q.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(le.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(le.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(le.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(le.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(le.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(K.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(le.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(le.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(ie.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
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
					} = this.props, i = Object(H.a)(s), a = !!t && t.displayText === e.author;
					if (o && i) return n ? r.a.createElement(Oe, {
						comment: e,
						isCommentAuthor: a
					}) : r.a.createElement(ke, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, r.a.createElement(pe.a, null), r.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(R.a)(e);
					if (s && Object(R.c)(e) && !t) return r.a.createElement(F.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Te(e.id),
						id: Te(e.id)
					}, r.a.createElement(U.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Te(e.id)
					}), e.ignoreReports ? r.a.createElement(ue.a, null) : r.a.createElement(be.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: o,
						showModTools: i
					} = this.props, a = Object(H.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (i && c && !e.bannedBy && (d || a && !n)) return r.a.createElement(F.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ne(e.id)
					}, r.a.createElement(ye.a, null), r.a.createElement(B.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ne(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: a,
						onDistinguishComment: o,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ne(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: o,
						deleteComment: i,
						isAwardsSunsetEnabled: a,
						isLoggedIn: c,
						isPendingDeletion: d,
						moderatorPermissions: l,
						postIsLocked: m,
						subreddit: u,
						toggleDeleteCommentModal: p
					} = this.props, b = Object(H.a)(l), h = !!o && o.displayText === e.author, x = (!m && !e.isLocked || b && c) && !Object(J.g)(e), f = !a && o && e.isGildable && !Object(J.g)(e);
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Pe, null, x && r.a.createElement(we, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && r.a.createElement(we, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), r.a.createElement(ae.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == u ? void 0 : u.type
					}, r.a.createElement(we, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), r.a.createElement(Ee, {
						dropdownId: Le(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && r.a.createElement(je, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, r.a.createElement(ge.a, {
						name: ve.a.report
					})), r.a.createElement(je, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? r.a.createElement(ge.a, {
						name: ve.a.saved
					}) : r.a.createElement(ge.a, {
						name: ve.a.save
					})), h && r.a.createElement(je, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, r.a.createElement(ge.a, {
						name: ve.a.edit
					})), h && r.a.createElement(je, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, r.a.createElement(ge.a, {
						name: ve.a.delete
					}))), this.props.isConfirmModalOpen && r.a.createElement(D.a, {
						actionText: g.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: g.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: g.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: g.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var De = Ie(Object(o.b)(Me, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(j.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(P.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(P.g)(s.id)),
						onGildClick: t => e(Object(w.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(L.h)({
							tooltipId: Ne(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(L.h)({
							tooltipId: Te(s.id)
						})),
						onToggleSave: () => e(Object(k.o)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(Se(s.id))), e(Object(L.h)({
								tooltipId: Le(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(E.a)(s.postId, s.id, {}),
								r = {
									commentId: s.id,
									draftKey: Object(O.a)(Z.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(G.a)(t)), e(Object(j.g)(r))
						},
						handleReply: t => {
							const n = Object(E.a)(s.postId, s.id, {}),
								r = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(G.a)(t)), e(Object(j.h)(r))
						},
						showToast: t => e(Object(N.f)(t)),
						toggleDeleteCommentModal: () => e(Object(I.i)(Se(s.id)))
					}
				})(Object(ce.c)(Object(z.b)(Fe)))),
				Be = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ae = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/selectors/commentSelector.ts"),
				Ue = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				ze = s.n(Ue);
			const We = _e.a.wrapped(Be.a, "TopMeta", ze.a),
				qe = _e.a.div("ProfileCommentWrapper", ze.a),
				Ve = _e.a.div("CommentBody", ze.a),
				He = Object(o.b)(() => Object(i.c)({
					comment: (e, t) => Object(Re.c)(e, t),
					flair: Y.e
				})),
				Ge = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = He(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: o,
					showFlatlist: i,
					showModTools: d
				} = e, l = s => {
					var n;
					return r.a.createElement(Ae.b, {
						className: s,
						content: Object(V.a)(t),
						mediaMetadata: t.media && t.media.mediaMetadata,
						expressionAssetData: null === (n = t.media) || void 0 === n ? void 0 : n.expressionAssetData,
						rtJsonElementProps: Ge(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})
				};
				return r.a.createElement(qe, {
					className: Object(a.a)({
						[ze.a.isRemoved]: !!t.bannedBy
					})
				}, r.a.createElement(We, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), r.a.createElement("div", null, !t.isDeleted && r.a.createElement(Ve, null, o ? l() : r.a.createElement(_, {
					height: c.Yb,
					isExpanded: o
				}, l)), !t.isDeleted && i && r.a.createElement(De, {
					comment: t,
					commentsPageKey: s,
					showModTools: d
				})))
			})
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
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

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
				const m = new Set;
				let u = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= a && !m.has(t) && (o = r, m.add(t), r === l && (u = !0))
				}
				return u ? r.a.createElement(i.a, {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				x = s("./src/reddit/components/Footer/index.tsx"),
				f = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.tsx"),
				_ = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				g = s("./node_modules/lodash/flatMap.js"),
				y = s.n(g),
				C = s("./src/lib/linkMatchers/index.ts"),
				E = s("./src/lib/linkMatchers/customLinks.ts"),
				O = s("./src/reddit/controls/OutboundLink/index.tsx");
			const k = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(k);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, r, o] = t.slice(n, n + 3);
						s.push(e), s.push([o, r])
					}
					return s
				};
			var P = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, j)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = C.c.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
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
				w = s("./src/reddit/constants/parameters.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/controls/Button/index.tsx"),
				N = s("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				L = s("./src/reddit/models/ContentGate.ts"),
				T = s("./src/reddit/selectors/contentGate.ts"),
				M = s("./src/reddit/selectors/meta.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/ContentGate/index.m.less"),
				B = s.n(D);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = l.a.wrapped(N.a, "PrivateKey", B.a), U = l.a.div("ButtonsContainer", B.a), z = l.a.div("Container", B.a), W = l.a.div("ContainerExp", B.a), q = l.a.div("Description", B.a), V = l.a.div("PrivateSubredditDetails", B.a), H = l.a.div("PrivateSubredditDescription", B.a), G = l.a.h3("PrivateSubredditName", B.a), K = l.a.a("Link", B.a), Z = l.a.wrapped(S.n, "LinkRouterButton", B.a), J = l.a.wrapped(S.m, "LinkButton", B.a), Q = l.a.wrapped(S.p, "SecondaryLinkButton", B.a), Y = l.a.wrapped(Z, "GoHomeLinkButton", B.a), X = l.a.wrapped(h.a, "CreateCommunityButton", B.a), $ = l.a.img("Image", B.a), ee = l.a.img("ImagePlaceholder", B.a), te = l.a.wrapped(Z, "LeftLinkRouterButton", B.a), se = l.a.wrapped(J, "LeftLinkButton", B.a), ne = l.a.wrapped(Q, "SecondaryLeftLinkButton", B.a), re = l.a.h3("Title", B.a), oe = l.a.div("PageBody", B.a), ie = l.a.div("InterstitialMessageWrapper", B.a), ae = l.a.div("QuarantineLearnMore", B.a), ce = Object(d.c)({
				isLoggedIn: F.R,
				origin: M.l,
				user: F.m,
				isPrivateSubredditContributorRequestPending: e => Object(T.a)(e),
				isSeo: M.h
			}), de = Object(I.v)(), le = Object(i.b)(ce, (e, t) => {
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
			}), me = e => {
				const {
					banMessage: t,
					banTitle: s,
					contentGateType: r,
					continueToQuarantinedSubreddit: i,
					continueToGatedSubreddit: a,
					isLoggedIn: c,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: p,
					location: h,
					origin: x,
					pageLayer: g,
					quarantineRequiresEmail: y,
					quarantineMessage: C,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: k,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: I,
					setNSFWPreference: S,
					subredditDescription: N,
					subredditName: T,
					user: M
				} = e, F = async () => {
					if (c ? await S() : await Object(u.q)(), p) {
						const e = new URL(window.location.href);
						e.searchParams.set(w.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case L.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(re, null, A._("r/{community name} is a Reddit Premium community", [A._param("community name", T)], {
							hk: "2lyDwB"
						})), o.a.createElement(q, null, A._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(U, null, M ? o.a.createElement(ne, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, A._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(se, {
							href: Object(m.a)(h, x),
							redditStyle: !0
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), M ? o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Q, {
							href: Object(m.a)(h, x),
							redditStyle: !0
						}, A._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(re, null, r === L.a.Nsfw ? A._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : A._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(q, null, A._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(U, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, A._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Q, {
							onClick: F,
							redditStyle: !0
						}, A._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(R, null), o.a.createElement(re, null, "r/", T, " ", A._("is a private community", null, {
							hk: "7zZmq"
						})), N && N.length && o.a.createElement(V, null, o.a.createElement(G, null, "r/", T), o.a.createElement(H, null, o.a.createElement("div", null, N))), o.a.createElement(q, null, A._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", A._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), A._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(U, null, M ? o.a.createElement(o.a.Fragment, null, !d && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: B.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(ne, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, A._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ne, {
							href: Object(m.a)(h, x),
							redditStyle: !0
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, A._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && o.a.createElement(_.a, {
							subredditName: T
						}));
					case L.a.QuarantinedSubreddit:
						const c = M && M.hasVerifiedEmail;
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), o.a.createElement(re, null, A._("r/{subredditName} is quarantined", [A._param("subredditName", T)], {
							hk: "2pxhFx"
						})), o.a.createElement(q, null, o.a.createElement(ie, null, O ? o.a.createElement(v.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : E ? o.a.createElement(f.a, {
							html: E
						}) : C || A._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !y || c ? A._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : M ? A._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : A._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), o.a.createElement(U, null, ((e, t, s) => {
							const r = e && e.hasVerifiedEmail;
							return !s || r ? o.a.createElement(U, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, A._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement(Q, {
								onClick: t,
								redditStyle: !0
							}, A._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : o.a.createElement(U, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, A._("Go Back", null, {
								hk: "11Lp6m"
							})), o.a.createElement(Q, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, A._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(M, i, y)), o.a.createElement(ae, null, A._("Learn more about {=quarantined communities}.", [A._param("=quarantined communities", o.a.createElement(K, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, A._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case L.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, null, A._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(q, null, o.a.createElement(ie, null, I ? o.a.createElement(v.b, {
							content: I,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : j ? o.a.createElement(f.a, {
							html: j
						}) : k), A._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(U, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, A._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(Q, {
							onClick: a,
							redditStyle: !0
						}, A._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case L.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(re, null, s), (e => o.a.createElement(q, null, e ? o.a.createElement(P, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : A._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(U, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(re, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(U, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ee, null), o.a.createElement(re, null, A._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(q, null, A._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(U, null, M && o.a.createElement(X, {
							eventSource: "content_gate"
						}), o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return A._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return A._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, A._("This account has been {=suspended} .", [A._param("=suspended", o.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, A._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(re, null, A._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(q, null, A._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(U, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(re, null, A._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(U, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement($, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(re, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(U, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, A._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = de(le(Object(a.i)(e => {
				const t = Object(r.useContext)(c.a) ? W : z;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(oe, null, me(e))), o.a.createElement(x.b, null))
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
				x = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(x),
				v = s("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				g = v.a.wrapped(l.c, "StyledTooltip", f.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.sb)(e),
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
						tooltipId: _
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
					id: _,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: _,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: _,
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
				return O
			})), s.d(t, "a", (function() {
				return k
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
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(g),
				C = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 8,
				k = 1,
				j = C.a.div("Container", y.a),
				P = C.a.div("PostMetaWrapper", y.a),
				w = C.a.wrapped(p.c, "PostTitle", y.a),
				I = C.a.div("FlatList", y.a),
				S = C.a.div("FlatItem", y.a),
				N = C.a.span("FlatListDotSpacer", y.a),
				L = C.a.wrapped(j, "LinkContainer", y.a),
				T = C.a.div("Content", y.a),
				M = C.a.div("ThumbnailContainer", y.a),
				F = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Sb.TOPIC),
					shouldOpenPostInNewTab: _.lb
				}),
				D = Object(i.b)(F);
			t.c = Object(f.b)(D(e => {
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
				return i && !i.media ? o.a.createElement(L, {
					className: d
				}, o.a.createElement(T, null, o.a.createElement(P, null, o.a.createElement(u.a, c)), B(i), i.source && o.a.createElement(b.a, {
					post: i
				}), R(e)), z(e)) : o.a.createElement(j, {
					className: d
				}, o.a.createElement(P, null, o.a.createElement(u.a, c)), B(i), A(e), R(e))
			}));
			const B = e => o.a.createElement(w, {
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
					return o.a.createElement("div", null, o.a.createElement(m.a, E({}, n, {
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
					return o.a.createElement(I, null, o.a.createElement(S, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(N, null), o.a.createElement(S, null, U(e)))
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
				z = e => o.a.createElement(M, null, o.a.createElement(h.b, {
					post: e.post
				}))
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
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				a = s("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([s.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), s.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), s.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), s.e("ShowcaseCollectionViewModal")]).then(s.bind(null, "./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.tsx")),
				d = Object(n.a)(c, {
					ssr: !1
				});
			Object(i.b)(a.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, e => o.a.createElement(d, {
				onClose: e,
				onOverlayClick: e
			}))
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
				return x
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
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
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
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
					className: Object(a.a)(m.a.Wrapper, s)
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
					timeSort: r = i.nc.ALL
				} = e;
				return o.a.createElement(u, {
					className: t
				}, r === i.nc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: r = i.nc.ALL
				} = e;
				return o.a.createElement(u, {
					className: t
				}, r === i.nc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
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
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(f);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => o.a.createElement("div", {
				className: v.a.container
			}, o.a.createElement(x.a, {
				className: v.a.hideIcon
			}), o.a.createElement("h3", {
				className: v.a.title
			}, _._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: v.a.subtitle
			}, _._("You can only look at your own saved posts and comments", null, {
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
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				y = s.n(g);
			const C = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				E = function(e) {
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
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: g,
					useMediaIcons: C
				} = e, O = s || h, k = Object(i.e)(f.b), j = Object(i.e)(f.c), P = t => {
					(k || j) && (t.preventDefault(), e.showModalOnPostLinkClick(O))
				}, w = O.media, I = Object(x.q)(h), S = r && !!s;
				return w && !I && !(("rtjson" === w.type || "text" === w.type || "liveaudio" === w.type) && !Object(p.a)(O)) || !!h.pollData ? o.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": _.a.MEDIA,
					onClick: g
				}, u ? o.a.createElement(b.a, {
					name: "collapse",
					className: y.a.icon
				}) : C ? o.a.createElement(o.a.Fragment, null, E(O.media && O.media.type, S, h), o.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: y.a.icon
				})) : O.source && O.source.url ? o.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: O.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(O.permalink),
					rel: "nofollow",
					onClick: P
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
			}, r.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} Reddit, Inc. © {year}. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", r.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "1Dc18v"
			}))), l._param("=Privacy Policy.", r.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1Ubjrd"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "yxLlI"
			})))
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
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw",
				liveLabel: "_1HHtbJesYWFlnffF_u9U5U",
				realtimeAnimation: "AtOuz7HaZcKodxvKABuOw",
				realtimeFade: "Uuedk2mN8afhHTXUH825B",
				isNightMode: "_1Qs6zz6oqdrQbR7yE_ntfY",
				realtimeFadeNight: "hjNeLkbGFHNdcoj6SGxE0",
				realtimeUpdated: "_2U6P_aTp-ha87x11OgMyff"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "RelatedCommunitiesRecommendationsUnit", (function() {
				return He
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				h = s("./src/reddit/components/Econ/Audio/async.ts"),
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				v = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				_ = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/ads/index.ts"),
				S = s("./src/lib/classNames/index.ts"),
				N = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				L = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				M = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				F = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				D = s("./src/reddit/components/BoostPost/index.ts"),
				B = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				A = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				R = s("./src/reddit/components/CreatorStats/loader.tsx"),
				U = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				z = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				q = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				G = s("./src/reddit/components/ModModeReports/helpers.ts"),
				K = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				Z = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				J = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Q = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Y = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				$ = s("./src/reddit/components/PostMedia/index.tsx"),
				ee = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				te = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				se = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				ne = s.n(se);
			const {
				fbt: re
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var oe = () => r.a.createElement("div", {
					className: ne.a.container
				}, r.a.createElement(te.a, {
					className: ne.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: ne.a.metaText
				}, re._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ie = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/PostTitle/index.tsx"),
				ce = s("./src/reddit/components/PostTopLine/index.tsx"),
				de = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				le = s("./src/reddit/components/SourceLink/index.tsx"),
				me = s("./src/reddit/constants/postLayout.ts"),
				ue = s("./src/reddit/contexts/InsideOverlay.tsx"),
				pe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				be = s("./src/reddit/contexts/Post/index.tsx"),
				he = s("./src/reddit/helpers/isCrosspost.ts"),
				xe = s("./src/reddit/helpers/path/index.ts"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				ve = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				_e = s.n(ve),
				ge = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ye = s("./src/reddit/hooks/useClickSourceData.ts"),
				Ce = s("./src/reddit/models/Audio/index.ts"),
				Ee = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Oe = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ke = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				je = s("./src/reddit/constants/experiments.ts"),
				Pe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				we = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ie = Object(a.a)(P.M, e => e.some(we.c)),
				Se = Object(a.a)(Ie, e => e),
				Ne = (e, t) => Object(Pe.c)(e, {
					experimentName: je.qd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Se(e, {
							listingKey: s
						})
					}
				});
			var Le = s("./src/reddit/selectors/experiments/index.ts");

			function Te(e) {
				return e === je.tf.Minimalist || e === je.tf.Description || e === je.tf.HotnessSignals
			}
			var Me = s("./src/reddit/selectors/modQueue.ts"),
				Fe = s("./src/reddit/selectors/postFlair.ts"),
				De = s("./src/reddit/selectors/i18n/index.ts"),
				Be = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Ae = s("./src/reddit/components/LargePost/index.m.less"),
				Re = s.n(Ae);

			function Ue() {
				return (Ue = Object.assign || function(e) {
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
					return r.a.createElement(L.a, Ue({}, o, {
						className: Object(S.a)(t, Re.a.styledLink, {
							[Re.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				We = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(P.M)(e, {
						listingKey: s
					}) : void 0
				},
				qe = Object(o.b)(() => Object(a.c)({
					autoplayPref: w.d,
					isModQueueDisplayEnabled: e => Object(Me.b)(e, !0),
					activeModalId: O.a,
					hideNSFWPref: w.H,
					flairStyleTemplate: pe.Y,
					isBlurredPreview: ke.b,
					isCurrentUserProfilePost: P.l,
					isLoggedIn: w.S,
					isActive: P.j,
					moderatorPermissions: j.m,
					modModeEnabled: pe.W,
					posts: We,
					postHeightVariant: Ne,
					shouldShowNsfwListingBelow: De.b,
					showEditFlair: Fe.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(j.i)(e, s.id)
					},
					isOptionalTextEnabled: Ee.a,
					showCTAExperimentDesign: k.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, r;
						return !!(null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === r ? void 0 : r.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: w.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === E.a.upvoted ? Object(u.ib)(s) : Object(u.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(u.eb)(s)),
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
						shouldStylePostAfterVisitLink: i,
						children: a
					} = e;
					return i ? r.a.createElement(ze, {
						"data-click-id": "body",
						target: o ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : r.a.createElement(r.a.Fragment, null, a)
				}),
				He = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(o.e)(e => (e => {
						const t = Object(Pe.c)(e, {
							experimentEligibilitySelector: Le.e,
							experimentName: je.Gc
						}) || je.R.Control1;
						return {
							isEnabled: Te(t),
							variant: t
						}
					})(e), o.c);
					return t ? r.a.createElement(de.b, Ue({}, e, {
						variant: s,
						pageType: de.a.Home
					})) : null
				},
				Ge = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: a,
						currentUser: p,
						eventFactory: E,
						flairStyleTemplate: O,
						forceLoadMedia: k,
						hideNSFWPref: j,
						hostPostData: P,
						imageGalleryCurrentItem: L,
						inSubredditOrProfile: te = !1,
						isBlurredPreview: se,
						isCommentsPage: ne,
						isCurrentUserProfilePost: re,
						isFrontpage: de,
						isGalleryTileLayoutDefault: ue,
						isModWithUserNotesPermissions: be,
						isLoggedIn: ve,
						isOverlay: Ee,
						isTopicPage: ke,
						isCommentCountAnimationEnabled: Pe,
						isVoteCountAnimationEnabled: we,
						isCountAnimShadowTestEnabled: Ie,
						listingIndex: Se,
						listingKey: Ne,
						moderatorPermissions: Le,
						modModeEnabled: Te,
						onClickPost: Me,
						onIgnoreReports: Fe,
						onOpenReportsDropdown: De,
						post: Ae,
						postHeightVariant: Ue,
						scrollerItemRef: ze,
						shouldShowGalleryTileOption: We,
						shouldShowInsightsButton: qe,
						shouldShowNsfwListingBelow: Ge,
						showEditFlair: Ke,
						subredditOrProfile: Ze,
						userIsOp: Je,
						postId: Qe,
						postIds: Ye,
						onceInViewport: Xe,
						isOptionalTextEnabled: $e,
						showCTAExperimentDesign: et,
						isModQueueDisplayEnabled: tt,
						showRealtimeUpdateAnimation: st,
						isUpdatedContent: nt,
						isNightMode: rt,
						onSubscribe: ot = (() => {})
					} = e, it = Object(g.a)(), at = Object(pe.ib)(), ct = Object(o.e)(e => Object(pe.G)(e, {
						pageLayer: at
					})), dt = !!e.redditStyle || !!e["data-redditstyle"], lt = dt ? void 0 : O, mt = Object(l.a)(Le), ut = Te && mt, pt = Object(c.a)(Le), bt = Object(d.a)(Le), ht = Object(G.c)(Ae), xt = Object(V.a)(Ae), ft = !!Ae.media && Ae.media.type === y.o.RTJSON, vt = Je && ft, _t = s ? s - X.a : void 0, gt = !!Ae.recommendationContext, yt = !(de && ve || ke) || gt && ve, Ct = (e => e === je.jf.OnlyTitles)(Ue) && !Object(he.a)(Ae), Et = (e => e === je.jf.MediumHeight)(Ue) && !Object(he.a)(Ae), Ot = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: r
						} = e;
						if (!Object(C.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const o = n && 0 === n.indexOf(s.id),
							i = n && 1 === n.indexOf(s.id),
							a = r && r[1] && Object(C.v)(r[1]);
						return {
							hasTopCompactPostStyles: o && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: o
						}
					})(e), kt = Object(o.d)(), jt = Object(o.e)(Oe.b), Pt = Object(o.e)(Oe.c), wt = Object(o.e)(w.lb), It = Object(ye.a)(), St = Ae.permalink, Nt = e.isCommentPermalink ? Object(xe.b)(St) : Object(N.a)(St, void 0, It), Lt = !!(null == P ? void 0 : P.shouldShowLinkedPosts), Tt = (!te || Lt || Ge) && !Ae.isSponsored, Mt = Object(I.t)(Ae, L), Ft = Object(n.useRef)(null), Dt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Xe || Xe(Se))
						})
					}, [Xe, Se]);
					Object(_.a)(Ft, Dt);
					const [Bt, At] = Object(n.useState)(!1), Rt = Object(n.useCallback)(() => {
						At(!Bt), it(Object(ge.d)(Qe))
					}, [Bt, it, Qe]), Ut = !!(se && (null == Ze ? void 0 : Ze.isNSFW)), zt = Object(n.useRef)({
						renderingObjectInfo: Ae
					}), Wt = Object(n.useCallback)(e => {
						(jt || Pt) && (e.preventDefault(), kt(Object(u.Z)(Object(xe.b)(Ae.permalink), Ae.id)))
					}, [kt, jt, Pt, Ae.id, Ae.permalink]), qt = Ae && Ae.media && (Ae.media.type === y.o.TEXT || Ae.media.type === y.o.RTJSON), Vt = Object(C.r)(Ae), [Ht, Gt] = Object(n.useState)(!1);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Y.b, {
						className: Object(S.a)(Re.a.container, a, _e.a.largeAndMediumPostStyles, _e.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[_e.a.mUseRedditTheme]: dt,
							[Re.a.topCompactPost]: Ot && Ot.hasTopCompactPostStyles,
							[Re.a.bottomCompactPost]: Ot && Ot.hasBottomCompactPostStyles,
							[Re.a.shouldShowOverflow]: qe,
							[Re.a.realtimeAnimation]: st,
							[Re.a.realtimeUpdated]: nt,
							[Re.a.isNightMode]: rt
						}),
						isOverlay: Ee,
						style: tt && (st || nt) ? rt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(m.b)(e.flairStyleTemplate),
						post: Ae,
						onClick: Me,
						eventFactory: E
					}, r.a.createElement("div", {
						ref: Ft
					}), r.a.createElement(ie.a, {
						model: Ae,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Ie,
						isVoteCountAnimation: we,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: lt,
						redditStyle: dt,
						postId: Qe
					}), r.a.createElement(Q.a, {
						className: Object(S.a)(Re.a.backgroundWrapper, {
							[Re.a.isEvent]: Object(fe.a)(Ae),
							[Re.a.shouldUseRoundedBorder]: qe,
							[Re.a.realtimeAnimation]: st,
							[Re.a.realtimeUpdated]: nt,
							[Re.a.isNightMode]: rt
						}),
						"data-click-id": "background",
						flairStyleTemplate: lt,
						post: Ae,
						redditStyle: dt,
						overrideBackgroundColor: tt && (st || nt) ? rt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, r.a.createElement(U.a, {
						post: Ae
					}), Ot && Ot.showPinnnedHeader && r.a.createElement(oe, null), Object(i.c)(Ae) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: Ae
					}), r.a.createElement(x.a, {
						post: Ae
					})), !Object(i.c)(Ae) && r.a.createElement(r.a.Fragment, null, Vt && r.a.createElement(J.a, {
						content: Ae.recommendationContext.content,
						layout: me.g.Large,
						post: Ae
					}), r.a.createElement(ce.a, {
						className: Re.a.postTopLine,
						hideNSFWPref: j,
						hostPostData: P,
						iconClassName: Re.a.postTopLineIcon,
						inSubredditOrProfile: te,
						isCommentsPage: !!ne,
						isCompactPinnedPost: !!Ot,
						isCurrentUserProfilePost: re,
						isModWithUserNotesPermissions: be,
						isOverlay: !!Ee,
						isTopicPage: !!ke,
						listingKey: Ne,
						post: Ae,
						shouldShowSubscribeButton: yt,
						showSubreddit: Tt,
						showSubredditIcon: !0,
						subredditOrProfile: Ze,
						onSubscribed: () => {
							Gt(!0), ot()
						}
					}), r.a.createElement(ae.c, {
						className: Re.a.postTitle,
						post: Ae,
						redditStyle: dt,
						size: ae.b.Large,
						titleColor: lt && lt.postTitleColor,
						isOverlay: Ee
					}), r.a.createElement(F.a, {
						className: Re.a.adSupplementaryText,
						post: Ae,
						size: ae.b.Large
					}), Ae.source && !Ae.isSponsored && !Ut && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
						className: Re.a.sourceLink,
						post: Ae
					}), $e && Ae.media && Ae.media.type !== y.o.TEXT && Ae.media.type !== y.o.IMAGE && Ae.media.richtextContent && r.a.createElement(v.a, {
						content: Ae.media.richtextContent,
						rtJsonElementProps: zt.current
					}))), r.a.createElement("div", {
						className: Re.a.postMediaWrapper
					}, !Ot && !Object(y.G)(Ae) && r.a.createElement(Ve, {
						handlePostLinkClick: Wt,
						postPermalink: Nt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: wt,
						shouldStylePostAfterVisitLink: qt
					}, r.a.createElement($.a, {
						isGalleryTileLayoutDefault: ue,
						isListing: !0,
						isMediumHeight: Et,
						isNotCardView: !!Ee,
						isTitleOnly: Ct,
						showCentered: !0,
						flairStyleTemplate: lt,
						post: Ae,
						availableWidth: _t,
						shouldLoad: k,
						scrollerItemRef: ze,
						autoplayPref: t,
						shouldShowGalleryTileOption: We
					})), Object(y.G)(Ae) && r.a.createElement(b.a, {
						post: Ae
					})), Object(I.v)(Ae, L) && r.a.createElement(T.a, {
						className: Re.a.adLinkWrapper,
						ctaExperimentDesign: et && "card"
					}, r.a.createElement(M.a, {
						post: Ae,
						adLinkContent: Mt,
						ctaExperimentDesign: et && "card"
					})), Te && mt && xt && !tt && r.a.createElement("div", {
						className: Re.a.modModeBannerWrapper
					}, r.a.createElement(q.a, {
						thing: Ae
					})), Te && mt && ht && !tt && r.a.createElement("div", {
						className: Re.a.modModeBannerWrapper
					}, r.a.createElement(H.a, {
						onIgnoreReports: Fe,
						reportable: Ae
					})), Object(Ce.b)(Ae) && r.a.createElement(h.a, null), r.a.createElement(W.d, null), tt && r.a.createElement(Z.a, {
						post: Ae
					}), Ae.discussionType === C.b.Chat && r.a.createElement(Be.a, {
						postId: Ae.id,
						className: Re.a.liveLabel
					}), r.a.createElement("div", {
						className: Re.a.flatListContainer
					}, r.a.createElement(A.a, {
						className: Re.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: lt,
						model: Ae,
						onVoteClick: e.handleVote
					}), !Ae.isSurveyAd && (tt ? r.a.createElement(K.a, {
						content: Ae,
						listingKey: Ne,
						hostPostData: P
					}) : r.a.createElement(z.c, {
						currentUser: p,
						hasModFlairPerms: pt,
						hasModFullPerms: bt,
						hasModPostPerms: mt,
						hostPostData: P,
						isCommentCountAnimation: Pe,
						isCountAnimShadowTestEnabled: Ie,
						isLargePost: !0,
						isOverlay: !!Ee,
						listingKey: Ne,
						modModeEnabled: Te,
						onClickInsightsButton: Rt,
						onIgnoreReports: Fe,
						onOpenReportsDropdown: De,
						post: Ae,
						shouldShowInsightsButton: qe,
						showEditPost: vt,
						showEditFlair: Ke,
						useFlatlistBreakpoints: Object(ee.b)({
							editPost: !1,
							save: !ut,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Ze && Bt && r.a.createElement(R.a, {
						className: Re.a.creatorStatsContainer,
						post: Ae,
						subreddit: Ze,
						isOwnProfileStats: !0
					})), (Object(C.s)(Ae) || ct) && Object(D.e)(Ae, p) && r.a.createElement(D.a, {
						postId: Qe,
						user: p
					}), de && r.a.createElement(B.a, {
						post: Ae,
						postIds: null != Ye ? Ye : [],
						subredditId: null == Ze ? void 0 : Ze.id
					})), de && Vt && Ht && Ze && r.a.createElement(He, {
						postId: Ae.id,
						subredditId: Ze.id,
						subredditDisplayText: Ze.displayText,
						onDismiss: () => {
							Gt(!1)
						}
					}))
				});
			Ge.displayName = "LargePostMemoized";
			t.default = Object(be.b)(qe(Object(ue.b)(Ge)))
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.v)(),
				x = Object(i.c)({
					layout: m.U
				}),
				f = Object(o.b)(x);
			class v extends r.a.Component {
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
					const e = Object(a.a)(this.props.className, p.a.Component, {
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
			t.a = h(f(b.a.wrapped(v, "Component", p.a)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(a);
			const d = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? r.fbt._("{userCount} here now", [r.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : r.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => i.a.createElement("span", {
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
				return i.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, i.a.createElement(u, null), i.a.createElement(d, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const _ = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(x.e)(e => Object(f.a)(e, t));
				return Object(x.e)(v.e) ? i.a.createElement(h, {
					userCount: n,
					className: s
				}) : null
			}
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: u,
					subredditOrProfile: b
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
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
					}, o.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && o.a.createElement(a.a, null))
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
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(a);

			function d(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(i.b, {
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
				i = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = s.n(i);
			const c = e => {
				let {
					post: t
				} = e;
				var s;
				return o.a.createElement("p", {
					className: a.a.postStats
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
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : r.a.createElement(a.b, {
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				_ = s.n(v),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				O = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = d.a.wrapped(x.default, "InternalLink", O.a), P = d.a.div("Wrapper", O.a), w = d.a.div("Row", O.a), I = d.a.wrapped(g.a, "CommentIcon", O.a), S = d.a.div("TitleContainer", O.a), N = d.a.div("PostTitleContainer", O.a), L = d.a.wrapped(u.c, "PostTitle", O.a), T = d.a.wrapped(p.g, "PostTopMeta", O.a), M = d.a.wrapped(p.a, "MetaSeparator", O.a), F = Object(o.b)(() => Object(i.c)({
				comment: y.c,
				isBlockingInterstitialEnabled: C.b,
				isBlockingInterstitialV2Enabled: C.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), D = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return r.a.createElement(n.Fragment, null, r.a.createElement(M, null), r.a.createElement(T, {
					metaSeparatorClassName: O.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, B = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: o,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					c = `/user/${a}/`;
				return r.a.createElement(j, {
					"data-click-id": "user",
					to: c,
					onClick: e => {
						(n || o) && (e.preventDefault(), i(c))
					}
				}, a)
			};
			t.a = Object(c.a)(Object(h.b)(F(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: o
				} = e;
				return r.a.createElement(m.b, {
					className: Object(a.a)(_.a.compactPostStyles, O.a.overviewCommentPost, {
						[O.a.banned]: !!e.post.bannedBy,
						[O.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: o,
					onClick: n,
					eventFactory: s
				}, r.a.createElement(P, {
					style: {
						background: Object(f.e)(e)
					}
				}, r.a.createElement(w, null, r.a.createElement(I, null), r.a.createElement(S, null, k._("{postAuthor} commented on {postTitle} {postMeta}", [k._param("postAuthor", B({
					...e
				})), k._param("postTitle", r.a.createElement(N, null, r.a.createElement(L, {
					outboundLinkClassName: O.a.postTitleOutboundLink,
					post: o,
					size: u.b.Small,
					titleClassName: O.a.postTitleTitle
				}))), k._param("postMeta", D(e))], {
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
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
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
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: n,
					...i
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(a.a.border, {
						[a.a.isFirst]: s,
						[a.a.isLast]: n
					}, t)
				}, i))
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
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = s.n(g);
			const C = m.a.div("ProfileOwnerCommentWrapper", y.a),
				E = m.a.div("CommentContentWrapper", y.a),
				O = m.a.div("Wrapper", y.a),
				k = m.a.div("CommentSeparator", y.a),
				j = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(x.c)(e, t),
					isAwarded: (e, t) => {
						if (Object(v.d)(e)) return !1;
						const s = Object(x.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: _.fb
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class P extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: o,
						isFirst: a,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? w : I;
					return i.a.createElement(u.a, {
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
					}, i.a.createElement(O, {
						className: Object(l.a)({
							[y.a.isFirst]: a,
							[y.a.isLast]: c,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: d
						})
					}, r()(s + 1, e => i.a.createElement(k, {
						key: e
					})), i.a.createElement(E, null, b(t, m, p))))
				}
			}
			const w = (e, t, s) => i.a.createElement(C, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						r = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!r
					})
				};
			t.a = j(P)
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
		"./src/reddit/components/OverviewConversationsPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/isPinnedAdminPost/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./node_modules/lodash/last.js"),
				h = s.n(b);
			var x = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/components/ClassicPost/index.tsx"),
				_ = s("./src/reddit/components/LargePost/index.tsx"),
				g = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				y = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				C = s("./src/reddit/actions/profileConversations.ts"),
				E = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				O = s("./src/reddit/selectors/profile.ts"),
				k = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				j = s.n(k);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = m.a.div("ExtraCommentsItemWrapper", j.a), I = m.a.p("ExtraComments", j.a), S = m.a.wrapped(I, "ExtraCommentsInteractive", j.a);
			var N = Object(r.b)(() => Object(i.c)({
					extraCommentsItem: O.d,
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
						extraCommentsClicked: t => e(Object(C.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: n
					} = e;
					return c.a.createElement(w, null, n ? c.a.createElement(I, null, P._("Loading...", null, {
						hk: "47z90C"
					})) : c.a.createElement(E.a.Consumer, null, e => c.a.createElement(S, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, P._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				L = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				T = s("./src/reddit/contexts/Post/index.tsx"),
				M = s("./src/reddit/hooks/useTheme.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				B = s.n(D),
				A = s("./src/reddit/constants/experiments.ts"),
				R = s("./src/reddit/helpers/chooseVariant/index.ts"),
				U = s("./src/reddit/selectors/experiments/index.ts");

			function z(e) {
				return e === A.rf.Minimalist || e === A.rf.Description || e === A.rf.SocialSignals
			}
			var W = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				q = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				V = s.n(q);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const G = m.a.div("BackgroundWrapper", V.a),
				K = m.a.wrapped(v.default, "ClassicPost", V.a),
				Z = m.a.wrapped(g.a, "OverviewCommentPost", V.a),
				J = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(r.e)(e => (e => {
						const t = Object(R.c)(e, {
							experimentEligibilitySelector: U.e,
							experimentName: A.Hc
						}) || A.R.Control1;
						return {
							isEnabled: z(t),
							variant: t
						}
					})(e), r.c);
					return t ? c.a.createElement(W.b, H({}, e, {
						variant: s,
						pageType: W.a.Profile
					})) : null
				},
				Q = Object(r.b)(() => Object(i.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const r = n ? n.toLowerCase() : "",
							o = Object(u.a)(s, r);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[o]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const r = n ? n.toLowerCase() : "",
							o = Object(u.a)(s, r);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[o]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(f.p)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(f.r)(e, s, n)
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
					layout: p.U
				})),
				Y = m.a.wrapped(_.default, "OverviewLargePost", V.a),
				X = Q(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: o,
						forceLoadMedia: i,
						headComment: m,
						isInitiallyPinned: u,
						isPinned: p,
						isScrolling: b,
						last: v,
						layout: _,
						onClickPost: g,
						onSizeChanged: C,
						pageLayer: E,
						post: k,
						postId: j,
						profileName: P,
						scrollerItemRef: w,
						shouldShowInsightsButton: I
					} = e, S = {
						last: v,
						onClickPost: g,
						postId: j
					}, [T, M] = Object(a.useState)(!1), D = Object(r.e)(e => Object(f.U)(e, {
						postId: j
					})), A = Object(r.e)(e => !!P && Object(O.k)(e, {
						profileName: P
					}));
					if (!P) return null;
					const R = P === k.author,
						U = Object(l.a)(p, k.distinguishType);
					if (!R && !m && !U) return null;
					const z = m ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), h()(t).push(e[n])
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
						}(n, m)) : [],
						W = z.length - 1;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: Object(d.a)(B.a.largeAndMediumActiveStyles, B.a.largeAndMediumPostStyles, V.a.OverviewConversationsPost, s),
						style: {
							...Object(x.b)(),
							...Object(x.d)(e)
						}
					}, c.a.createElement(y.a, {
						className: I ? V.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: W < 0,
						key: k.id
					}, !R && !!m && c.a.createElement(Z, H({}, S, {
						commentId: m,
						key: k.id,
						profileName: P
					})), (R || U) && (_ === F.g.Classic ? c.a.createElement(K, {
						availableWidth: t,
						eventFactory: o,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: b,
						forceLoadMedia: i,
						last: v,
						onClickPost: g,
						onSizeChanged: C,
						pageLayer: E,
						postId: j,
						scrollerItemRef: w
					}) : c.a.createElement(Y, {
						availableWidth: t,
						eventFactory: o,
						isScrolling: b,
						isFrontpage: !1,
						forceLoadMedia: i,
						last: v,
						onClickPost: g,
						onSizeChanged: C,
						pageLayer: E,
						postId: j,
						scrollerItemRef: w,
						shouldShowInsightsButton: I,
						onSubscribe: () => M(!0)
					}))), c.a.createElement(G, {
						style: {
							background: Object(x.e)(e)
						}
					}, !u && z.map((e, t) => c.a.createElement(y.a, {
						isLast: t === W,
						key: `${t}-isLast[${t===W}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? c.a.createElement(L.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: r,
							key: t.id,
							profileName: P,
							showModTools: !0
						}) : c.a.createElement(N, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: P
						})
					}))))), T && A && D && c.a.createElement(J, {
						postId: j,
						subredditId: D.id,
						subredditDisplayText: D.displayText,
						onDismiss: () => {
							M(!1)
						}
					}))
				});
			var $ = Object(T.b)((function(e) {
					var t;
					const s = Object(M.a)(),
						n = Object(p.ib)();
					return c.a.createElement(X, H({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.j)(n),
						pageLayer: n
					}, e))
				})),
				ee = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				te = s("./src/reddit/helpers/trackers/post.ts"),
				se = s("./src/reddit/selectors/tracking.ts"),
				ne = s("./src/reddit/connectors/PostList/index.ts");
			const re = Object(i.c)({
					...ne.d,
					postIds: f.N,
					viewportDataLoaded: se.b
				}),
				oe = Object(ne.c)(),
				ie = Object(r.b)(re, ne.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(te.n)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? ee.a : $
					}
				}));
			t.a = (e => Object(o.c)(oe(ie(e))))(n.a)
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
			const x = Object(h.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: b.a,
				experimentName: p.zc
			}), e => e === p.Rd);
			var f = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/classNames/index.ts"),
				_ = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				O = s.n(E);
			const k = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(l.e)(e => Object(y.F)(e, {
						postId: t
					})),
					o = Object(l.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(C.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return o ? r.a.createElement(_.a, {
					className: Object(v.a)(O.a.link, s),
					to: o.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), r.a.createElement(g.b, {
					className: O.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: o
				}), r.a.createElement("span", {
					className: O.a.subredditName
				}, o.displayText)) : null
			};
			var j = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				P = s("./src/reddit/connectors/PostViewable/index.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/contexts/Post/index.tsx"),
				S = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				L = s("./src/reddit/hooks/useIsOverlay.ts"),
				T = s("./src/reddit/hooks/usePageLayer.ts"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				F = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				D = s.n(F);
			const B = e => {
				let {
					post: t
				} = e;
				const s = `${Object(M.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(M.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return r.a.createElement("div", {
					className: D.a.postInformation
				}, r.a.createElement("h5", {
					className: D.a.title
				}, t.title), r.a.createElement("div", {
					className: D.a.interactions
				}, r.a.createElement("p", null, s), r.a.createElement("p", null, n)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				R = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				z = s("./src/reddit/components/UserIcon/index.tsx"),
				W = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				q = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				V = s("./src/reddit/selectors/profile.ts"),
				H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				G = s.n(H);
			const K = e => {
				let {
					post: t
				} = e;
				var s, o, i, a;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(V.l)(t.author)),
					m = Object(n.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(A.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(R.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(q.a)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url),
					b = Object(W.c)(null === (o = null == d ? void 0 : d.icon) || void 0 === o ? void 0 : o.url);
				return r.a.createElement("div", {
					className: G.a.media
				}, u ? r.a.createElement(U.b, {
					post: t,
					url: m,
					className: G.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: G.a.mediaThumbnailContainer
				}) : null, !u && (null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url) && r.a.createElement("div", {
					className: G.a.userIconContainer
				}, r.a.createElement(z.a, {
					className: Object(v.a)({
						[G.a.snoovatarUserIcon]: p,
						[G.a.defaultUserIcon]: b
					}, G.a.userIcon),
					iconUrl: null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url,
					userName: d.name,
					wrapperClassName: G.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var Z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				J = s.n(Z);
			const Q = Object(P.a)(null);
			var Y = Object(I.b)(Q(e => {
					let {
						post: t
					} = e;
					const s = Object(T.a)(),
						n = Object(L.a)(),
						o = Object(N.a)(),
						i = Object(w.x)(s) && !n;
					return r.a.createElement(_.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(S.b)(t.permalink) : Object(j.a)(t.permalink, !1, o)
					}, r.a.createElement("div", {
						className: J.a.container
					}, r.a.createElement(B, {
						post: t
					}), r.a.createElement(K, {
						post: t
					})))
				})),
				X = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(X);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => r.a.createElement(Y, {
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
				if (!Object(l.e)(x) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return r.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(m.y)(t, u.a.Click))
				}, r.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), r.a.createElement(k, {
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
				x = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostMeta/index.m.less"),
				E = s.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: C,
					isOverlay: O,
					isTopicPage: k,
					post: j,
					shouldShowSubscribeButton: P,
					subredditOrProfile: w,
					tooltipType: I
				} = e, S = !!k, N = Object(g.a)(), L = Object(o.e)(e => !!w && Object(i.i)(e, w.id)), T = !(!w || !Object(y.i)(w));
				return r.a.createElement("div", {
					className: E.a.metaContainer
				}, !n && !j.isSponsored && w && r.a.createElement(d.a, {
					postId: j.id,
					subredditName: w.name,
					isProfile: T
				}, r.a.createElement(b.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: N
					}
				}, w.displayText)), w && w.isQuarantined && r.a.createElement(p.a, null), !n && !j.isSponsored && w && P && !C && r.a.createElement(h.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(_.n)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(y.i)(w) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: j.id,
					size: f.d.XXS,
					small: !0
				}), !n && !j.isSponsored && r.a.createElement(v.b, null), !n && !j.isSponsored && r.a.createElement(l.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), r.a.createElement(u.g, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: I,
					isModWithUserNotesPermissions: L
				}), r.a.createElement(m.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!n,
					post: j,
					tooltipType: I
				}), !S && r.a.createElement(a.a, {
					hideCta: s,
					thing: j,
					tooltipType: O ? u.f.Lightbox : void 0
				}), L && r.a.createElement(c.a, {
					postOrComment: j,
					className: E.a.addModNote
				}))
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
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: j,
					hostPostData: w,
					iconClassName: I,
					inSubredditOrProfile: S,
					isCommentsPage: N,
					isCompactPinnedPost: L,
					isCurrentUserProfilePost: T,
					isModQueuePage: M,
					isModWithUserNotesPermissions: F,
					isOverlay: D,
					isTopicPage: B,
					listingKey: A,
					post: R,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: z,
					showSubreddit: W,
					showSubredditIcon: q,
					subredditOrProfile: V,
					isFollowed: H,
					shouldShowFollowButton: G,
					onFollowPostClick: K,
					onSubscribed: Z
				} = e;
				const J = B,
					Q = !(!V || !Object(E.i)(V)),
					Y = Object(i.e)(e => {
						if (!Q) return !0;
						const t = Object(k.Jb)(e, R.author || "");
						return !t || t.enableFollowers
					}),
					X = Object(i.e)(O.a);
				return o.a.createElement("div", {
					className: Object(a.a)(P.a.container, t)
				}, W && V && o.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, o.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, q && o.a.createElement(b.b, {
					className: Object(a.a)(P.a.subredditIcon, I),
					shouldHideNsfwIcon: j,
					subredditOrProfile: V
				}))), o.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, W && o.a.createElement(l.h, {
					type: R.belongsTo.type,
					id: R.belongsTo.id
				}), o.a.createElement(p.g, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: F,
					tooltipType: D ? p.f.Lightbox : void 0,
					post: R,
					showSub: W,
					subredditOrProfile: V
				}), o.a.createElement(u.a, {
					className: P.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: L,
					post: R,
					tooltipType: D ? p.f.Lightbox : void 0
				}), !J && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: R,
					tooltipType: D ? p.f.Lightbox : void 0
				}), F && o.a.createElement(d.a, {
					postOrComment: R,
					className: P.a.addModNote
				})), V && Y && W && U && !T && o.a.createElement(x.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => (Z && !e && Z(), Object(g.n)(R.id, e ? "unsubscribe" : "subscribe", "post", A, w)),
					identifier: {
						name: V.name,
						type: Q ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: R.id,
					size: v.d.XS,
					priority: X ? v.c.Secondary : void 0,
					isShredditParityEnabled: X
				}), z && o.a.createElement(_.b, {
					isSponsored: R.isSponsored,
					postId: R.id,
					href: Object(C.E)(R),
					source: R.source
				}, o.a.createElement(y.a, {
					className: P.a.outboundLinkIcon
				})), G && Y && o.a.createElement(m.a, {
					isFilled: !!H,
					onClick: K,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
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
				i = s.n(o),
				a = s("./node_modules/lodash/throttle.js"),
				c = s.n(a),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./src/higherOrderComponents/asTooltip.tsx"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Profile/index.ts"),
				j = s("./src/reddit/featureFlags/index.ts"),
				P = s("./src/reddit/selectors/experiments/econ/index.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/selectors/userPrefs.ts"),
				N = s("./src/server/helpers/profileRedirect.ts"),
				L = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				T = s.n(L);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(y.v)({
					routeName: y.bb,
					privateListingType: y.k
				}),
				D = Object(p.c)({
					isAwardsSunsetEnabled: P.d,
					isCoinsSunsetEnabled: P.e,
					isDropdownMenuOpen: e => Object(w.a)(e) === A,
					isOwnProfile: (e, t) => Object(I.Y)(e, t.profileName),
					isSnoovatar30Enabled: j.d.snoovatar30,
					isSubscriptionsPinned: S.c
				}),
				B = Object(h.a)(C.a),
				A = "profile-nav-menu-tooltip",
				R = g.g + g.q + g.p;
			var U;
			t.a = F(Object(m.b)(D, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: s,
						privateListingType: n,
						profileName: o,
						routeName: a,
						toggleTooltip: m,
						isAwardsSunsetEnabled: u,
						isCoinsSunsetEnabled: p,
						isSnoovatar30Enabled: b,
						isSubscriptionsPinned: h,
						viewBlockedConsent: f
					} = e;
					const [v, y] = Object(d.useState)(!1), C = Object(d.useRef)(null), [E, k] = Object(d.useState)([]), [j, P] = Object(d.useState)([]);
					return Object(d.useEffect)(() => {
						const e = q({
							profileName: o,
							isOwnProfile: s,
							routeName: a,
							privateListingType: n,
							isCoinsSunsetEnabled: p,
							isSnoovatar30Enabled: b,
							viewBlockedConsent: f,
							isAwardsSunsetEnabled: u
						});
						k(e.filter(e => e.position === U.MENU));
						const t = [],
							d = c()(() => {
								const s = document.documentElement.clientWidth - 2 * g.p,
									n = s > R ? R : s;
								let r = 42;
								t.forEach(t => {
									r += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = r > n ? U.DROPDOWN : U.MENU
								});
								const o = e.filter(e => e.position === U.MENU);
								k(e => i()(o, e) ? e : o);
								const a = e.filter(e => e.position === U.DROPDOWN);
								P(e => i()(a, e) ? e : a), y(a.length > 0)
							}, 50);
						return r.a.read(() => {
							const e = C.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), d())
						}), window.addEventListener("resize", d), () => {
							window.removeEventListener("resize", d)
						}
					}, [o, s, a, n, p, b, f, u]), l.a.createElement("div", {
						className: T.a.container
					}, l.a.createElement(_.a, {
						bladeOpen: !1,
						offsetLeft: h ? g.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: T.a.menuContainer,
							ref: C
						}, E.map(e => l.a.createElement(z, M({}, e, {
							key: e.key
						})))), v && l.a.createElement("button", {
							className: Object(x.a)(T.a.mainLink),
							id: A,
							onClick: () => m(A)
						}, l.a.createElement(O.a, {
							name: "overflow_horizontal"
						})), v && l.a.createElement(B, {
							className: T.a.dropdown,
							isOpen: t,
							tooltipId: A
						}, j.map(e => l.a.createElement(W, M({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(U || (U = {}));
			const z = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: r
					} = e;
					return r ? l.a.createElement(E.default, {
						className: Object(x.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						to: n,
						"data-testid": n
					}, s) : l.a.createElement("a", {
						className: Object(x.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						href: n,
						"data-testid": n
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
						className: Object(x.a)(T.a.dropdownLink, {
							[T.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, r) : l.a.createElement("a", {
						className: Object(x.a)(T.a.dropdownLink),
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
						isCoinsSunsetEnabled: i,
						isSnoovatar30Enabled: a,
						viewBlockedConsent: c,
						isAwardsSunsetEnabled: d
					} = e;
					const l = s ? [{
						internal: !0,
						isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: U.MENU
					}] : [];
					d || (s ? (l.push({
						internal: !0,
						isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: U.MENU
					}), l.push({
						internal: !0,
						isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: U.MENU
					})) : i || l.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: U.MENU
					}));
					const m = s ? [{
							internal: !0,
							isActive: r === f.Sb.PROFILE_PRIVATE && o === k.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: U.MENU
						}] : [],
						u = a ? [{
							internal: !0,
							isActive: r === f.Sb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: U.MENU
						}] : [],
						p = c ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: r === f.Sb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${p}`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: r === f.Sb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(N.a)(t)}/${p}`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: r === f.Sb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${p}`,
						position: U.MENU
					}, ...u, ...m, ...l]
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
		"./src/reddit/components/ProfilePinnedPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				p = s("./src/reddit/components/Media/index.tsx"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = s("./src/reddit/components/PostTitle/index.tsx"),
				v = s("./src/reddit/connectors/miniCardPost.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				E = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/reddit/components/CommentsLink/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				S = s("./src/reddit/components/Flatlist/index.tsx"),
				N = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				L = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/helpers/trackers/post.ts"),
				A = s("./src/reddit/icons/fonts/Share/index.tsx"),
				R = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				z = s.n(U),
				W = s("./src/lib/lessComponent.tsx");
			const q = "-MiniCardModMenu",
				V = "-MiniCardOverflowMenu",
				H = "-MiniCardShareMenu",
				G = W.a.wrapped(I.a, "HorizontalVotes", z.a),
				K = W.a.button("ShareButton", z.a),
				Z = Object(_.v)({
					currentProfileName: _.j,
					isCommentPermalink: _.x,
					isCommentsPage: _.y,
					isProfilePostListing: _.N,
					pageLayer: e => e
				}),
				J = Object(c.c)({
					layout: _.U,
					subreddit: _.s
				});
			var Q = Z(Object(a.b)(J, {})(Object(F.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: o,
						hasModFullPerms: a,
						hasModPostPerms: c,
						isCommentsPage: l,
						isCommentPermalink: m,
						isOverlay: u,
						isProfilePostListing: p,
						isSticky: b,
						layout: h,
						modModeEnabled: x,
						onCommentsClick: f,
						post: v,
						sendEvent: _,
						showEditFlair: g,
						showEditPost: y,
						subreddit: C
					} = e, E = e => _(Object(B.n)(v.id, e)), O = v.postId, k = Object(S.d)(q, v.id, u, b), j = !!n && Object(R.e)(n) === v.author;
					return i.a.createElement("div", {
						className: Object(d.a)(z.a.flatlistContainer, s)
					}, i.a.createElement(G, {
						compact: !1,
						model: v,
						onVoteClick: r,
						scoreClassName: z.a.score
					}), i.a.createElement(w.a, {
						hasModPostPerms: c,
						isCommentsPage: l,
						isCommentPermalink: m,
						isOverlay: u,
						postId: v.id,
						modModeEnabled: x,
						numComments: v.numComments,
						type: D.g.Compact,
						onClick: f,
						isSponsored: v.isSponsored,
						impressionId: v.impressionId
					}), i.a.createElement(M.a, {
						className: z.a.shareMenu,
						dropdownId: Object(S.d)(H, v.id, u, b),
						permalink: v.permalink,
						post: v,
						sendEventWithName: E,
						subredditType: null == C ? void 0 : C.type
					}, i.a.createElement(K, null, i.a.createElement(A.a, {
						className: z.a.shareIcon
					}), i.a.createElement("span", {
						className: z.a.shareText
					}, P.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && i.a.createElement(N.a, {
						dropdownId: k,
						onClick: () => E("post_mod_action_menu")
					}, i.a.createElement(S.b, {
						className: z.a.modActionsIcon
					}), i.a.createElement(L.a, {
						canEditFlair: o && !!g,
						hasModPostPerms: c,
						hasModFullPerms: a,
						isOverlay: !!u,
						isPostAuthor: j,
						modModeEnabled: x,
						post: v,
						tooltipId: k
					})), i.a.createElement(T.a, {
						currentProfileName: t,
						isCommentsPage: l,
						isOverlay: !!u,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: v.permalink,
						postId: O,
						dropdownId: Object(S.d)(V, v.id, u, b),
						isFixed: b,
						sendEvent: _,
						showEditPost: !!y,
						showEditFlair: !!g,
						useFlatlistBreakpoints: Object(T.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))
				}))),
				Y = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				X = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				$ = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ee = s.n($),
				te = s("./src/reddit/components/MiniCardPost/index.m.less"),
				se = s.n(te);
			var ne = Object(_.v)()(Object(g.b)(Object(v.a)(Object(m.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: r,
						crosspostSubredditOrProfile: o,
						currentUser: a,
						eventFactory: c,
						flairStyleTemplate: l,
						forceLoadMedia: m,
						hideNSFWPref: v,
						moderatorPermissions: _,
						modModeEnabled: g,
						onClickPost: P,
						post: w,
						scrollerItemRef: I,
						shouldPause: S,
						showMetaLine: N = !0,
						showEditFlair: L,
						subredditOrProfile: T,
						userIsOp: M
					} = e, {
						media: F
					} = r || w, D = F && F.type, B = Object(x.b)(w.id), A = D === k.o.RTJSON, R = M && A, U = Object(E.a)(_), z = Object(y.a)(_), W = Object(C.a)(_), q = F && D !== k.o.RTJSON && D !== k.o.TEXT, V = D === k.o.VIDEO || D === k.o.GIFVIDEO, H = Object(j.q)(w), G = F && i.a.createElement(p.a, {
						autoplayPref: t,
						availableWidth: s,
						className: se.a.media,
						imageBoxClassName: Object(d.a)(se.a.mediaImageBox, {
							[se.a.videoStyles]: V
						}),
						imageBoxContentImageClassName: se.a.mediaImageBoxContentImage,
						forceAspectRatio: k.b,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || w,
						scrollerItemRef: I,
						shouldPause: S,
						shouldLoad: m,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(h.b, {
						className: Object(d.a)(se.a.postContainer, ee.a.largeAndMediumActiveStyles, ee.a.largeAndMediumPostStyles, Object(O.a)(e), n),
						style: {
							...Object(O.b)(e.flairStyleTemplate),
							...Object(O.d)(e)
						},
						post: w,
						onClick: P,
						eventFactory: c
					}, i.a.createElement(b.a, {
						className: se.a.backgroundWrapper,
						flairStyleTemplate: l
					}, q && G, i.a.createElement("div", {
						className: se.a.innerContainer
					}, H && i.a.createElement(X.a, {
						post: w,
						templatePlaceholderImage: l ? l.postPlaceholderImage : void 0
					}), i.a.createElement(f.c, {
						className: se.a.postTitleCompact,
						hideSourceLink: !0,
						post: w,
						size: f.b.Large,
						titleColor: l && l.postTitleColor
					}), N && T && i.a.createElement(Y.a, {
						className: se.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: v,
						post: w,
						subredditOrProfile: T
					}), !q && i.a.createElement("div", {
						className: se.a.mediaWrapper
					}, G), i.a.createElement("div", {
						className: se.a.flexSpacer
					}), i.a.createElement(Q, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: z,
						hasModFullPerms: W,
						hasModPostPerms: U,
						modModeEnabled: g,
						post: w,
						showEditFlair: L,
						showEditPost: R
					}))), e.activeModalId === B && i.a.createElement(x.a, {
						flairs: w.flair,
						subredditId: w.belongsTo.id,
						modalId: B,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(u.d, null))
				})))),
				re = s("./src/reddit/helpers/getClickInfo.ts"),
				oe = s("./src/reddit/helpers/localStorage/index.ts"),
				ie = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/user.ts"),
				ce = s("./src/reddit/icons/fonts/index.tsx"),
				de = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				le = s.n(de);
			const {
				fbt: me
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ue = e => i.a.createElement("div", {
					className: Object(d.a)(le.a.container, e.className)
				}, i.a.createElement(ce.a, {
					name: "pin",
					className: le.a.pin
				}), i.a.createElement("div", {
					className: le.a.title
				}, me._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				pe = s("./src/reddit/controls/TextButton/index.tsx"),
				be = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				he = s.n(be);
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var fe = e => i.a.createElement(ue, {
					className: Object(d.a)(he.a.container, e.className)
				}, i.a.createElement("div", {
					className: he.a.description
				}, xe._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(pe.a, {
					className: he.a.gotIt,
					onClick: e.onGotItClick
				}, xe._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				ve = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				_e = s.n(ve);
			const {
				fbt: ge
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = 320, Ce = 300, Ee = Object(c.c)({
				arePinnedPostsLoaded: ie.a,
				currentUser: ae.m,
				pinnedPostIds: ie.O
			}), Oe = Object(a.b)(Ee, e => ({
				openPost: t => e(Object(l.K)(t))
			})), ke = Object(_.v)();
			class je extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = r()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ce ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(oe.Sb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(re.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(ne, {
						postId: e,
						key: e,
						availableWidth: ye,
						className: Object(d.a)(_e.a.item, _e.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(oe.Q)()
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
					const n = !!this.props.currentUser && this.props.profileName === Object(R.e)(this.props.currentUser),
						r = t.length > 0,
						o = !r && this.state.showEducation && n;
					if (!r && !o) return null;
					const a = n && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _e.a.title
					}, ge._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? i.a.createElement(fe, {
						className: Object(d.a)(_e.a.item, _e.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: _e.a.container
					}, t.map(this.renderPost), a && i.a.createElement(ue, {
						className: _e.a.item
					})), s)
				}
			}
			t.a = ke(Oe(je))
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
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
				h = e => o.a.createElement(i.a, {
					className: e.className
				}, o.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), o.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), o.a.createElement(a.a, {
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
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return K
			})), s.d(t, "b", (function() {
				return Z
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/constants/tracking.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.SHOW_MORE = "show_more", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const f = "related_community_recommendations_v1",
				v = (e, t) => {
					let {
						postId: s,
						subredditId: n,
						variant: r,
						numberItems: o,
						seenItems: i,
						seen: a = !0,
						modelVersion: c = f,
						pageType: d
					} = e;
					return {
						...x.q(t),
						post: s ? x.M(t, s) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: d,
							reason: n
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: c,
							type: r
						},
						visibility: {
							number_items: o,
							number_seen_items: i.length,
							seen_items: i,
							seen: a
						}
					}
				};
			var _ = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/lib/initializeClient/installReducer.ts"),
				C = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"));
			const E = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.b: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									pending: !0
								}
							}
						}
						case C.c: {
							const {
								subredditId: s,
								subreddits: n = {},
								modelVersion: r
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									modelVersion: r,
									subreddits: Object.keys(n),
									error: null,
									loaded: !0,
									pending: !1
								}
							}
						}
						case C.a: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									error: t.payload,
									loaded: !0,
									pending: !1
								}
							}
						}
						default:
							return e
					}
				},
				k = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./node_modules/reselect/es/index.js");
			Object(y.a)({
				features: {
					relatedCommunitiesRecommendations: O
				}
			});
			const P = Object(j.a)([(e, t) => {
					var s, n, r;
					return null !== (r = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.relatedCommunitiesRecommendations) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : E
				}], e => e),
				w = Object(j.a)([(e, t) => P(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				I = Object(j.a)([e => e, k.fb], (e, t) => t.map(t => ({
					...t,
					...Object(k.y)(e, {
						subredditId: t.id
					})
				})));
			var S = s("./src/config.ts");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var L, T = e => {
				let {
					seed: t
				} = e;
				const s = Math.min(3 * (t + 1), 37),
					n = [s, s + 1, s + 2];
				return i.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == n ? void 0 : n.map((e, t) => i.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${S.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: N._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function M(e) {
				switch (e) {
					case _.tf.Minimalist:
					case _.rf.Minimalist:
					case _.sf.Minimalist:
						return L.MINIMALIST;
					case _.tf.HotnessSignals:
					case _.rf.SocialSignals:
					case _.sf.SocialSignals:
						return L.SIGNALS;
					case _.tf.Description:
					case _.rf.Description:
					case _.sf.Description:
						return L.DESCRIPTION
				}
				return L.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(L || (L = {}));
			const F = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: s,
					variant: o,
					postId: d,
					originalSubredditId: f,
					pageType: _,
					columnLayout: y = "single",
					dismissCallback: C
				} = e;
				const E = Object(c.a)(),
					O = Object(l.e)(e => I(e, {
						subredditIds: t
					})),
					k = {
						postId: d,
						subredditId: f,
						variant: o,
						numberItems: t.length,
						seenItems: t.slice(0, s),
						pageType: _
					},
					j = M(o);
				return i.a.createElement("ul", {
					className: `pb-[8px] ${"double"===y&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, O.map((e, t) => {
					let {
						id: o,
						subscribers: c,
						accountsActive: d,
						icon: l,
						communityIcon: f,
						name: _,
						url: O,
						displayText: P,
						publicDescription: w
					} = e;
					if (t >= s) return null;
					const I = r.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [r.fbt._param("Number of subscribers", Object(m.b)(c)), r.fbt._plural(c)], {
							hk: "3fAm5T"
						}),
						S = d ? `• ${r.fbt._("{Number of subscribers online} Online",[r.fbt._param("Number of subscribers online",Object(m.b)(d))],{hk:"4s9dx5"})}` : "",
						N = () => {
							C && C(), E(((e, t, s) => r => ({
								...v(e, r),
								subreddit: x.ob(r, t),
								action: h.c.CLICK,
								noun: n.TITLE_SUBREDDIT,
								actionInfo: {
									...v(e, r).actionInfo,
									position: s
								}
							}))(k, o, t))
						};
					return i.a.createElement("li", {
						key: o,
						className: "px-[16px] py-[8px] flex items-start"
					}, i.a.createElement("div", {
						onClick: N
					}, i.a.createElement(u.b, {
						iconUrl: (null == l ? void 0 : l.url) || f,
						className: "block !w-[32px] !h-[32px] rounded-full !text-[32px] !leading-none",
						linkTo: O || `/${P}`
					})), i.a.createElement("div", {
						className: `${"single"===y&&"truncate"} flex flex-col w-100`
					}, i.a.createElement("div", {
						className: "flex items-start"
					}, i.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, i.a.createElement(g.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: O || `/${P}`,
						onClick: N
					}, P, i.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, j === L.MINIMALIST && I, (j === L.SIGNALS || j === L.DESCRIPTION) && i.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, i.a.createElement(T, {
						seed: t
					}), i.a.createElement("div", null, `${I} ${S}`))))), i.a.createElement(p.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: o,
						identifier: {
							name: _,
							type: b.a.SUBREDDIT
						},
						size: a.d.XS,
						getEventFactory: e => e ? ((e, t, s) => r => ({
							...v(e, r),
							subreddit: x.ob(r, t),
							action: h.c.CLICK,
							noun: n.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								...v(e, r).actionInfo,
								position: s
							}
						}))(k, o, t) : ((e, t, s) => r => ({
							...v(e, r),
							subreddit: x.ob(r, t),
							action: h.c.CLICK,
							noun: n.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								...v(e, r).actionInfo,
								position: s
							}
						}))(k, o, t)
					})), j === L.DESCRIPTION && i.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===y?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, i.a.createElement(g.default, {
						to: O || `/${P}`,
						onClick: N
					}, w))))
				}))
			};
			var D = s("./src/lib/makeActionCreator/index.ts"),
				B = s("./src/lib/makeGqlRequest/index.ts"),
				A = s("./src/lib/makeRequest/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				U = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				z = s("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const W = async (e, t) => {
				const s = await Object(B.a)(e, {
					...z,
					variables: t
				});
				if (!Object(A.c)(s)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, s, n, r;
					const o = {
						modelVersion: null !== (s = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== s ? s : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (r = null === (n = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === n ? void 0 : n.recommendations) || void 0 === r ? void 0 : r.reduce((e, t) => e = {
						...e,
						models: {
							...e.models,
							[t.id]: Object(U.a)(t)
						},
						aboutInfo: {
							...e.aboutInfo,
							...Object(R.a)(t)
						}
					}, o)
				})(s.body.data)
			};
			Object(y.a)({
				features: {
					relatedCommunitiesRecommendations: O
				}
			});
			const q = Object(D.a)(C.b),
				V = Object(D.a)(C.c),
				H = Object(D.a)(C.a),
				G = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					t(q({
						subredditId: e
					}));
					try {
						const s = await W(r(), {
							subredditId: e
						});
						t(V({
							subredditId: e,
							modelVersion: s.modelVersion,
							subreddits: s.models,
							subredditAboutInfo: s.aboutInfo
						}))
					} catch (o) {
						t(H({
							subredditId: e,
							ApiError: o
						}))
					}
				};
			var K;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(K || (K = {}));
			const Z = e => {
				let {
					subredditDisplayText: t,
					variant: s,
					postId: m,
					subredditId: u,
					onDismiss: p,
					pageType: b
				} = e;
				const x = M(s),
					f = function(e) {
						let {
							pageType: t,
							activeUIVariant: s
						} = e;
						switch (t) {
							case K.Profile:
							case K.Community:
								return s === L.MINIMALIST ? "double" : "single";
							case K.Home:
							default:
								return "single"
						}
					}({
						pageType: b,
						activeUIVariant: x
					}),
					_ = function(e, t) {
						return "double" === t ? e === L.DESCRIPTION ? 2 : 4 : 3
					}(x, f),
					[g, y] = Object(o.useState)(_),
					C = Object(c.a)(),
					{
						recommendations: E,
						fetchPending: O,
						recommendationsLoaded: k,
						fetchError: j,
						modelVersion: I
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const s = Object(l.d)(),
							n = Object(l.e)(e => w(e, t)),
							{
								pending: r,
								loaded: i,
								error: a,
								modelVersion: c
							} = Object(l.e)(e => P(e, t)),
							d = !i && !r;
						return Object(o.useEffect)(() => {
							d && s(G(t))
						}, [s, t, d]), {
							recommendations: n,
							fetchPending: r,
							recommendationsLoaded: i,
							fetchError: a,
							modelVersion: c
						}
					}({
						subredditId: u
					}),
					S = g < (E.length || 0),
					N = Object(o.useMemo)(() => !k || O ? null : j || E.length <= 0 ? {
						modelVersion: I,
						seen: !1,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: I,
						seen: !0,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: E.length,
						seenItems: E.slice(0, _),
						pageType: b
					}, [k, O, j, E, I, m, u, s, _, b]);
				if (Object(o.useEffect)(() => {
						C && N && C((e => t => ({
							...v(e, t),
							action: h.c.VIEW,
							noun: n.RECOMMENDATION_MODULE
						}))(N))
					}, [C, N]), !k || E.length <= 0) return null;
				return i.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, i.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, i.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, r.fbt._("Similar to {subreddit display text}", [r.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), i.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": r.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						p(), N && C((e => t => ({
							...v(e, t),
							action: h.c.CLICK,
							noun: n.CLOSE
						}))({
							...N,
							seenItems: null == E ? void 0 : E.slice(0, g)
						}))
					}
				}, i.a.createElement(d.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(F, {
					recommendedCommunities: E,
					numberOfVisibleItems: g,
					postId: m,
					originalSubredditId: u,
					variant: s,
					pageType: b,
					columnLayout: f,
					dismissCallback: p
				}), S && i.a.createElement("div", {
					className: "flex items-center justify-center pb-[8px]"
				}, i.a.createElement(a.a, {
					kind: a.b.Button,
					priority: a.c.Tertiary,
					onClick: () => {
						const e = g + _;
						y(e), C((e => t => ({
							...v(e, t),
							action: h.c.CLICK,
							noun: n.SHOW_MORE
						}))({
							...N,
							seenItems: null == E ? void 0 : E.slice(0, e)
						}))
					}
				}, r.fbt._("Show more", null, {
					hk: "2kAGl6"
				})))))
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/take.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
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
					pending: x,
					renderItem: f,
					title: v
				} = e, [_, g] = Object(i.useState)(!1), y = c.length > b || s, C = (!y || _ ? c : o()(c, b)).map(e => f({
					item: e
				})), E = () => {
					_ || g(!0), _ && !s && g(!1), s && h && h()
				};
				return a.a.createElement(d.a, {
					className: t,
					headerButton: r,
					title: v
				}, C, a.a.createElement(u.a, null, a.a.createElement(p.a, null, y && (() => {
					const e = !_ || s && h ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: E
					}, x ? a.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: c.Xb
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(h);
			const f = Object(a.c)({
					currentUser: b.m,
					moderated: u.p,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				v = Object(i.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				_ = e => {
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
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: r,
					subscriptions: i,
					hasMoreModerated: a,
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
					}(s, new Set(i));
				return o.a.createElement(d.a, {
					className: x.a.container,
					title: u,
					items: p,
					renderItem: _,
					hasMoreItems: a,
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				x = Object(i.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
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
					}, o.a.createElement(a.a, {
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
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: r,
					onLoadMore: i,
					profileName: a
				} = e;
				return r && r.length ? o.a.createElement(m.a, null, o.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: i,
					pending: s,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const h = Object(a.b)(a.d, b.a);
			var x = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = s.n(f),
				_ = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts");
			const y = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(x.t)(e, Object(x.o)(e, s))
				}
			}, h);
			t.a = Object(i.b)(y)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : o.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: P
				})
			});
			const C = _.a.wrapped(u.a, "TrophyItem", v.a),
				E = _.a.div("TrophyIcon", v.a),
				O = _.a.h5("TrophyName", v.a),
				k = _.a.div("TrophyContent", v.a),
				j = _.a.wrapped(d.c, "Description", v.a),
				P = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = o.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return o.a.createElement(C, {
						key: t.id
					}, o.a.createElement(E, null, t.url ? o.a.createElement("a", {
						target: g.d.BLANK,
						rel: g.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.q(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.V(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), o.a.createElement(k, null, o.a.createElement(O, null, t.name), o.a.createElement(j, null, t.description)))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
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
					const t = Object(i.e)(a.e),
						s = Object(i.e)(a.a);
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
				return T
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
				x = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				_ = s("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				g = s("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				y = s("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				C = s("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				E = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				O = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				k = s("./src/reddit/actions/contentGate.ts"),
				j = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				P = s.n(j);
			const w = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				I = () => r.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				S = () => r.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				N = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(E.g),
						l = Object(o.useCallback)(() => {
							n === E.a.Blurred && t(Object(p.k)({
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
						})))(n === E.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(v.d)(n)
					}, [n]), i.a.createElement("div", {
						className: P.a.mainCta
					}, i.a.createElement(C.b, null), m, i.a.createElement("div", {
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
							s(Object(y.a)()), l(), Object(v.c)(v.a.Login), t(Object(u.openLoginModal)())
						}
					}, I()), i.a.createElement(f.j, {
						className: P.a.cancel,
						onClick: () => {
							Object(d.b)(), s(Object(y.b)()), Object(v.c)(v.a.Dismiss), t(Object(c.b)("/"))
						}
					}, S())))
				},
				L = Object(m.a)(e => {
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
				T = e => {
					const t = Object(h.b)(),
						{
							contentTitle: s
						} = e,
						n = Object(a.e)(E.i),
						r = Object(a.e)(E.j),
						o = Object(a.e)(E.g),
						c = Object(a.e)(O.c);
					i.a.useEffect(() => {
						c.isNewDesignVariant ? t(Object(g.d)()) : t(Object(y.c)())
					}, [c, t]);
					const d = o === E.a.Blurred ? b.a.White : o === E.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: P.a.container
					}, c.isNewDesignVariant ? i.a.createElement(M, {
						contentTitle: s
					}) : i.a.createElement(N, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(P.a.footerWrapper, {
							[P.a.mIsModal]: o === E.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: d
					})), i.a.createElement(L, {
						qrCodeAsset: (() => n === x.hd.Enabled || r === x.hb.BlurredPreview || r === x.hb.NoPreview ? w.d2x_nsfw_signup_blocking_de_v1 : w.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				M = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(E.h);
					return Object(o.useEffect)(() => {
						Object(_.c)(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(P.a.mainCta, {
							[P.a.skippable_buttons]: n === x.ib.SkippableButtons,
							[P.a.skippable_text]: n === x.ib.SkippableText
						})
					}, i.a.createElement("div", {
						className: P.a.contentDescription
					}, i.a.createElement(C.b, {
						fill: C.a.BLACK
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
							s(Object(g.a)()), Object(_.b)(_.a.Login), t(Object(u.openLoginModal)())
						}
					}, I()), n === x.ib.SkippableButtons && i.a.createElement("div", {
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
							s(Object(g.b)()), Object(_.b)(_.a.Continue), Object(k.q)(), Object(O.d)(), window.location.reload()
						}
					}, (() => r.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), i.a.createElement(f.j, {
						className: Object(l.a)(P.a.continue, P.a.dismiss, {
							[P.a.no_border]: n === x.ib.SkippableText
						}),
						onClick: () => {
							s(Object(g.c)()), Object(_.b)(_.a.Dismiss), t(Object(c.b)("/"))
						}
					}, n === x.ib.SkippableText ? (() => r.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : S())))
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
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
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => o.a.createElement(b.a, {
					className: Object(d.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? o.a.createElement(f.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(w, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(x.t, {
					className: O.a.bottomButton,
					kind: x.b.Button,
					priority: x.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(c.c)({
					hideNSFWPref: y.H,
					nightmode: y.fb
				}),
				w = Object(i.b)(P)(e => o.a.createElement("div", {
					className: Object(d.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(_.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: h.s
				}, o.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(C.b)(e.name, e.type),
					to: Object(C.a)(e.name, e.type)
				}, Object(C.b)(e.name, e.type)), o.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: O.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && o.a.createElement(l.c, {
					className: O.a.nsfwFlair,
					flair: {
						type: g.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(f.a, {
					className: Object(d.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(x.t, {
					className: O.a.communityCta,
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
					className: O.a.communityDescription
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				_ = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				g = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = s.n(g);
			var C = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let o, i = t.username,
						a = "";
					return n !== u.a.Twitter ? null : (o = r.a.createElement(v.a, {
						className: y.a.twitterLogo
					}), a = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, r.a.createElement(_.a, null, r.a.createElement("span", {
						className: y.a.icon
					}, o), r.a.createElement(x.b, {
						className: y.a.link,
						href: t.link,
						onClick: s
					}, r.a.createElement("div", {
						className: y.a.linkTitle
					}, r.a.createElement("span", {
						className: y.a.name
					}, i), r.a.createElement(f.a, {
						className: y.a.linkIcon
					})), r.a.createElement("div", {
						className: y.a.linkDescription
					}, a))))
				},
				E = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(i.c)({
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
					return s.type === l.a.PROFILE ? Object(b.Db)(e, {
						userName: s.name
					}) : null
				}
			}), P = Object(o.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(P(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? r.a.createElement(a.a, null, r.a.createElement(d.b, null, r.a.createElement(d.a, null, k._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && r.a.createElement("div", {
					className: O.a.account
				}, r.a.createElement(C, {
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
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: f.d,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: f.S,
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
				_ = Object(n.b)(() => Object(r.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === a.a.upvoted ? Object(o.ib)(s) : Object(o.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(o.eb)(s)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(_(Object(c.b)(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
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
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				_ = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts"),
				O = s("./src/reddit/selectors/user.ts");

			function k() {
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
			const j = k(),
				P = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: g.g,
					postsById: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(y.S)(e, {
							listingKey: s,
							keepHiddenPosts: Object(v.a)(e)
						})
					},
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(y.C)(e, s, n, r, Object(v.a)(e))
					}),
					subredditsById: C.eb,
					viewportDataLoaded: E.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: _.e,
					isLoggedIn: O.S
				},
				w = Object(r.c)(P),
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
				S = e => Object(b.b)({
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
				L = Object(n.b)(w, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: S,
					postClickEventFactory: N
				}));
			t.a = e => Object(u.c)(j(L(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: m.m,
				modModeEnabled: d.W,
				showEditFlair: u.a
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
						return e(Object(i.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const n = t === c.a.upvoted ? Object(o.ib)(s) : Object(o.v)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.eb)(s)),
					onOpenReportsDropdown: t => e(Object(a.h)({
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, n, o, i) => n ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, o, i)) : a(e, s, o, i) : null,
				a = (e, t, s, n) => r.a.createElement(o.a, {
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
				return a
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
			const i = e => {
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
				a = (e, t) => s => ({
					...Object(o.q)(s),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.nb)(s),
					post: Object(o.M)(s, e),
					userSubreddit: Object(o.wb)(s),
					actionInfo: Object(o.d)(s, {
						reason: i(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(o.q)(s),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.M)(s, t),
					subreddit: Object(o.nb)(s),
					userSubreddit: Object(o.wb)(s)
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
					...Object(o.q)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(o.d)(t, {
						pageType: "profile"
					}),
					post: Object(o.M)(t, e, void 0, 0),
					profile: Object(o.V)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(o.q)(n),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						reason: d(t)
					}),
					post: Object(o.M)(n, e, void 0, s)
				}),
				u = (e, t, s, n, i, a) => c => ({
					...Object(o.q)(c),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.M)(c, e, void 0, a),
					subreddit: Object(o.nb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				p = (e, t, s) => n => ({
					...Object(o.q)(n),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(o.M)(n, e, void 0, s),
					subreddit: Object(o.nb)(n)
				})
		},
		"./src/reddit/helpers/trackers/marketplace/display-collectibles.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				r = s("./src/reddit/helpers/trackers/snoovatar.ts");
			const o = e => {
				let {
					sendEvent: t,
					user: s,
					pageType: o,
					isDisplayCollectiblesEnabled: i
				} = e;
				const a = Object(n.b)(s.accountIcon);
				i && a || t(Object(r.m)({
					user: s,
					pageType: o,
					userHasNft: a
				}))
			}
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
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "-1 -1 21 21"
			}, r.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
			}))
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
				i = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/telemetry/models/Event.ts");
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
							source: a.e.BlockedProfileInterstitial,
							action: a.c.View,
							noun: a.d.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (s = null === (t = i.V(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
							},
							...i.q(e)
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
							source: a.e.BlockedProfileInterstitial,
							action: a.c.Accept,
							noun: a.d.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (s = null === (t = i.V(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
							},
							...i.q(e)
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
								source: a.e.BlockedProfileInterstitial,
								action: a.c.Deny,
								noun: a.d.BlockedProfileInterstitial,
								targetUser: {
									id: null !== (s = null === (t = i.V(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
								},
								...i.q(e)
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
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				x = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				v = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				_ = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				y = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				C = s("./src/reddit/components/ContentGate/index.tsx"),
				E = s("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx"),
				O = s("./src/reddit/components/EmptyProfile/index.ts"),
				k = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				j = s("./src/reddit/components/JumpToContent/index.tsx"),
				P = s("./src/reddit/components/OverviewConversationsPostList/index.tsx"),
				w = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				I = s("./src/reddit/components/ProfilePinnedPosts/index.tsx"),
				S = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				N = s("./src/reddit/components/TrackingHelper/index.tsx"),
				L = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				T = s("./src/reddit/constants/modals.ts"),
				M = s("./src/reddit/helpers/name/index.ts"),
				F = s("./src/reddit/helpers/trackers/marketplace/display-collectibles.ts"),
				D = s("./src/reddit/helpers/trackers/screenview.ts"),
				B = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				A = s("./src/reddit/layout/page/Listing/index.tsx"),
				R = s("./src/reddit/models/ContentGate.ts"),
				U = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				z = s("./src/reddit/routes/profileOverview/index.ts"),
				W = s("./src/reddit/selectors/experiments/activeCommunityProfile.ts"),
				q = s("./src/reddit/selectors/experiments/econ/index.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				H = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				G = s("./src/reddit/selectors/platform.ts"),
				K = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/selectors/profile.ts"),
				J = s("./src/reddit/selectors/user.ts");

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Y = Object(y.a)({
					resolved: {},
					chunkName: () => "reddit-components-ActiveCommunities",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ActiveCommunities").then(s.bind(null, "./src/reddit/components/ActiveCommunities/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ActiveCommunities/index.tsx"
					}
				}),
				X = (e, t) => {
					let {
						location: s
					} = t;
					return r()([...Object(d.a)(s.search)])
				},
				$ = (e, t) => {
					let {
						match: s
					} = t;
					return !Object(K.n)(e, {
						profileName: s.params.profileName
					})
				},
				ee = Object(p.v)(),
				te = Object(c.c)({
					isOwnProfile: p.G,
					over18Prefs: J.mb,
					layout: p.U,
					user: (e, t) => {
						let {
							match: s
						} = t;
						return Object(J.Db)(e, {
							userName: s.params.profileName
						})
					},
					isDisplayCollectiblesEnabled: q.p
				}),
				se = Object(c.a)(te, X, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Z.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(_.a)(e, X(e, t)), $, J.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(J.h)(e, b.pc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isBlocked: Object(J.N)(e, {
							profileName: s.params.profileName
						})
					}
				}, V.g, H.a, G.b, (e, t, s, n, r, o, i, a, c, d, l, u) => {
					let {
						sort: p,
						t: h
					} = r, {
						isBlocked: x
					} = c;
					var f, v;
					const _ = b.zb,
						g = Object(m.a)(s, _, p, t),
						{
							sort: y
						} = t;
					return {
						contentGateInfo: a,
						isLoggedIn: i,
						isProfileNSFW: !!n && n.isNSFW,
						listingKey: g,
						profileName: s,
						shouldShowPinnedPostsSection: o && !y,
						sort: p,
						timeSort: h,
						avatar: null === (f = null == n ? void 0 : n.icon) || void 0 === f ? void 0 : f.url,
						isBlocked: x,
						...e,
						nsfwBlockingExperiment: d,
						showNewDesignBlocking: l,
						isDisplayCollectiblesUrl: (null === (v = null == u ? void 0 : u.routeMatch) || void 0 === v ? void 0 : v.match.path) === z.a
					}
				}),
				ne = (e, t) => ({
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(v.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(f.a)()),
					openShowcaseModal: t => e(Object(x.h)(T.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, {
						telemetryReason: "deeplink",
						profileUserName: t
					}))
				}),
				re = e => {
					let {
						username: t
					} = e;
					const s = Object(a.e)(e => Object(W.a)(e, !1));
					return t && s ? i.a.createElement(Y, {
						username: t
					}) : null
				},
				oe = Object(a.b)(se, ne);
			class ie extends i.a.Component {
				constructor(e) {
					super(e), this.renderNoPosts = () => i.a.createElement(O.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentDidMount() {
					this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === V.a.Blurred ? this.props.openNsfwModal() : this.props.isLoggedIn && this.props.isDisplayCollectiblesUrl && Object(E.a)().then(() => this.props.openShowcaseModal(this.props.profileName))
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange(), e.user && e.user !== this.props.user && Object(F.a)({
						sendEvent: e.sendEvent,
						user: e.user,
						pageType: "profile",
						isDisplayCollectiblesEnabled: e.isDisplayCollectiblesEnabled
					})
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: s,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: o,
						nsfwBlockingExperiment: a,
						onLayoutChange: c,
						over18Prefs: d,
						pageLayer: m,
						profileName: u,
						shouldShowPinnedPostsSection: p,
						showSignupUpsell: h,
						sort: x,
						timeSort: f,
						showNewDesignBlocking: v
					} = this.props;
					if (!m) return null;
					if (t && t.profileDeleted) return i.a.createElement(C.default, {
						contentGateType: R.a.ProfileDeleted,
						profileName: u
					});
					if (t && t.profileSuspended) return i.a.createElement(C.default, {
						contentGateType: R.a.ProfileSuspended,
						profileName: u
					});
					if (451 === m.status || t && t.profileBlockedForLegalReason) return i.a.createElement(C.default, {
						contentGateType: R.a.ProfileBlockedForLegalReason,
						profileName: u
					});
					const _ = m.queryParams && "true" === m.queryParams.consent;
					if (403 === m.status || s && !_) return i.a.createElement(U.a, {
						username: u,
						avatar: e
					});
					if (404 === m.status) return i.a.createElement(C.default, {
						contentGateType: R.a.ProfileDoesNotExist,
						profileName: u
					});
					if (!u) return null;
					const g = u.toLowerCase(),
						y = `/user/${u}/`,
						E = {
							listingKey: o,
							listingName: g
						};
					if (r && !n && a === V.a.NoPreview && v) return i.a.createElement(L.a, {
						contentTitle: Object(M.e)(u)
					});
					if (!d && r && !n && a !== V.a.Blurred) return i.a.createElement(C.default, {
						subredditName: u,
						contentGateType: R.a.Nsfw
					});
					const O = {
							inSubredditOrProfile: !Object(l.a)(u),
							listingKey: o,
							listingName: g,
							listingViewed: (e, t) => Object(D.p)(o, x, t, e, f),
							noPostsComponent: this.renderNoPosts,
							onScroll: h,
							onTryAgain: c
						},
						N = {
							sort: x,
							baseUrl: y,
							sortOptions: b.Fb,
							timeSort: f
						},
						T = i.a.createElement(i.a.Fragment, null, p && i.a.createElement(I.a, {
							profileName: u
						}), i.a.createElement(k.a, N), i.a.createElement(re, {
							username: u
						}), i.a.createElement(P.a, Q({}, O, {
							excludePinnedPosts: p,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						})));
					return i.a.createElement(A.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(w.a, {
							profileName: u,
							viewBlockedConsent: _
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, null), T),
						sidebar: i.a.createElement(S.a, Q({}, E, {
							profileName: u
						}))
					})
				}
			}
			t.default = ee(oe(Object(u.a)(Object(h.a)(Object(B.d)(Object(N.c)(ie))))))
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = e => {
				if (!Object(o.S)(e)) return !1;
				const t = Object(r.d)(e);
				if (!t) return !1;
				const s = Object(o.h)(e, t);
				if (!s) return !1;
				if (!s.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: i
				} = s;
				if (!i) return !1;
				const a = 30 * n.D;
				return i > Date.now() - a
			}
		},
		"./src/reddit/selectors/experiments/activeCommunityProfile.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts");
			const i = function(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: n.tb,
						expEventOverride: t
					})
				},
				a = function(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const s = i(e, t) || n.R.Control1;
					return s === n.Rd
				}
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
				return x
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
				x = Object(d.a)(h, c.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
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
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.40607918b9fc9cb07909.js.map