// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview.06b62d21c37a082e2bad.js
// Retrieved at 3/8/2021, 4:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview", "reddit-components-ContentGate"], {
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function a(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function s(e) {
				return "[object Function]" === r(e)
			}

			function o(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var i = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var l = {
					"http:": {
						validate: function(e, t, n) {
							var a = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(a) ? a.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var a = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(a) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : a.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var a = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(a) ? a.match(n.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					a = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || a.push(c), a.push(t.src_xn), t.src_tlds = a.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var l = [];

				function d(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var n = e.__schemas__[t];
					if (null !== n) {
						var a = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = a, "[object Object]" === r(n)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(n.validate) ? s(n.validate) ? a.validate = n.validate : d(t, n) : a.validate = function(e) {
							return function(t, n) {
								var a = t.slice(n);
								return e.test(a) ? a.match(e)[0].length : 0
							}
						}(n.validate), void(s(n.normalize) ? a.normalize = n.normalize : n.normalize ? d(t, n) : a.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(n) ? d(t, n): l.push(t)
					}
				})), l.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var u = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(o).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var n = e.__index__,
					a = e.__last_index__,
					r = e.__text_cache__.slice(n, a);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = a + t, this.raw = r, this.text = r, this.url = r
			}

			function p(e, t) {
				var n = new m(e, t);
				return e.__compiled__[n.schema].normalize(n, e), n
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = a({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = a({}, l, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = a(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, a, r, s, o, i, l;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (r = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (s = n.index + n[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (a = e.match(this.re.email_fuzzy)) && (s = a.index + a[1].length, o = a.index + a[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = o)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var a = t ? e.slice(t) : e; this.test(a);) n.push(p(this, t)), a = a.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = n("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = n("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = n("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = n("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
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
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: o
					} = e;
				return r.a.createElement("svg", {
					className: Object(s.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: a,
						[l.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", l.a)
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return v
			}));
			var a = n("./node_modules/linkify-it/index.js"),
				r = n.n(a),
				s = n("./node_modules/tlds/index.js"),
				o = n.n(s),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				_ = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = r()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = r()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				w = p.normalize;
			p.normalize = e => {
				w.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const k = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...b.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				v = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const s = Object(r.e)(e),
					o = encodeURIComponent(`${t}${s}`);
				return `${a.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				_ = n.n(h);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = c.a.div("FooterContainer", _.a), g = c.a.div("UserAgreement", _.a), w = c.a.a("UserAgreementLink", _.a), k = c.a.a("PrivacyLink", _.a);
			var x = () => s.a.createElement(f, null, s.a.createElement(g, null, b._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [b._param("=User Agreement", s.a.createElement(w, {
					href: `${a.a.redditUrl}/help/useragreement`
				}, b._("User Agreement", null, {
					hk: "2srkM2"
				}))), b._param("=Privacy Policy", s.a.createElement(k, {
					href: `${a.a.redditUrl}/help/privacypolicy`
				}, b._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), b._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				y = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./node_modules/lodash/flatMap.js"),
				C = n.n(E),
				S = n("./src/lib/linkMatchers/index.ts"),
				D = n("./src/lib/linkMatchers/customLinks.ts"),
				O = n("./src/reddit/controls/OutboundLink/index.tsx");
			const j = /\[(.+?)\]\((.+?)\)/g,
				F = e => {
					const t = e.split(j);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, s] = t.slice(a, a + 3);
						n.push(e), n.push([s, r])
					}
					return n
				};
			var P = s.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = C()(t, F)), e.parseRegularLinks && (t = C()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = S.f.add(D.g.subreddit.prefix, D.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), s.a.createElement(s.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return s.a.createElement(O.b, {
								className: e.linkClassName,
								href: a,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return s.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				z = n("./src/chat/controls/Svg/index.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var A = e => s.a.createElement(z.a, R({}, e, {
					viewBox: "-1 -1 21 21"
				}), s.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				T = n("./src/reddit/models/ContentGate.ts"),
				B = n("./src/reddit/selectors/meta.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/ContentGate/index.m.less"),
				H = n.n(U);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = c.a.wrapped(A, "PrivateKey", H.a), q = c.a.div("ButtonsContainer", H.a), G = c.a.div("Container", H.a), W = c.a.div("Description", H.a), Y = c.a.div("PrivateSubredditDetails", H.a), K = c.a.div("PrivateSubredditDescription", H.a), V = c.a.h3("PrivateSubredditName", H.a), J = c.a.a("Link", H.a), X = c.a.wrapped(L.k, "LinkRouterButton", H.a), Q = c.a.wrapped(L.j, "LinkButton", H.a), $ = c.a.wrapped(L.n, "SecondaryLinkRouterButton", H.a), ee = c.a.wrapped(L.m, "SecondaryLinkButton", H.a), te = c.a.wrapped(X, "GoHomeLinkButton", H.a), ne = c.a.img("Image", H.a), ae = c.a.img("ImagePlaceholder", H.a), re = c.a.wrapped(X, "LeftLinkRouterButton", H.a), se = c.a.wrapped(Q, "LeftLinkButton", H.a), oe = c.a.wrapped(ee, "SecondaryLeftLinkButton", H.a), ie = c.a.wrapped($, "SecondaryLeftLinkRouterButton", H.a), le = c.a.h3("Title", H.a), ce = c.a.div("PageBody", H.a), de = c.a.div("QuarantineMessageWrapper", H.a), ue = Object(l.c)({
				isLoggedIn: I.I,
				origin: B.l,
				user: I.i
			}), me = Object(N.t)(), pe = Object(o.b)(ue, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: o,
					location: i,
					origin: l,
					pageLayer: c,
					quarantineRequiresEmail: m,
					quarantineMessage: h,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: b,
					setNSFWPreference: f,
					subredditDescription: g,
					subredditName: w,
					user: k
				} = e, x = async () => {
					o ? await f() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case T.a.GoldSubreddit:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), s.a.createElement(le, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", w)], {
							hk: "2lyDwB"
						})), s.a.createElement(W, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), s.a.createElement(q, null, k ? s.a.createElement(oe, {
							href: `${a.a.redditUrl}/premium`
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : s.a.createElement(se, {
							href: Object(d.a)(i, l)
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), k ? s.a.createElement(X, {
							to: "/"
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : s.a.createElement(ee, {
							href: Object(d.a)(i, l)
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case T.a.Nsfw:
					case T.a.NsfwCustomFeed:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), s.a.createElement(le, null, n === T.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), s.a.createElement(W, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), s.a.createElement(q, null, s.a.createElement(re, {
							to: "/"
						}, M._("No", null, {
							hk: "3fMglW"
						})), s.a.createElement(ee, {
							onClick: x
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case T.a.PrivateSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Z, null), s.a.createElement(le, null, "r/", w, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), g && g.length && s.a.createElement(Y, null, s.a.createElement(V, null, "r/", w), s.a.createElement(K, null, s.a.createElement("div", null, g))), s.a.createElement(W, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", w, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), s.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), s.a.createElement(q, null, k ? s.a.createElement(oe, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${w}`
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						})) : s.a.createElement(oe, {
							href: Object(d.a)(i, l)
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), s.a.createElement(X, {
							to: "/"
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case T.a.QuarantinedSubreddit:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), s.a.createElement(le, null, M._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), s.a.createElement(W, null, M._("This community is {=quarantined}", [M._param("=quarantined", s.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, M._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), s.a.createElement(de, null, b ? s.a.createElement(v.a, {
							content: b,
							rtJsonElementProps: {
								pageLayer: c
							}
						}) : _ ? s.a.createElement(y.a, {
							html: _
						}) : h || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), M._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), s.a.createElement(q, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? s.a.createElement(q, null, s.a.createElement(ie, {
								to: "/"
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), s.a.createElement(Q, {
								href: `${a.a.redditUrl}/prefs/update`
							}, M._("Verify Email", null, {
								hk: "1893cq"
							}))) : s.a.createElement(q, null, s.a.createElement(re, {
								to: "/"
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), s.a.createElement(ee, {
								onClick: t
							}, M._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(k, r, m)));
					case T.a.SubredditBanned:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), s.a.createElement(le, null, M._("r/{community name} has been banned from Reddit", [M._param("community name", w)], {
							hk: "2at9Se"
						})), (e => s.a.createElement(W, null, e ? s.a.createElement(P, {
							linkClassName: H.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), s.a.createElement(q, null, s.a.createElement(X, {
							to: "/"
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), s.a.createElement(le, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), s.a.createElement(q, null, s.a.createElement(X, {
							to: "/"
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(ae, null), s.a.createElement(le, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), s.a.createElement(W, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), s.a.createElement(q, null, k && s.a.createElement(p.a, {
							eventSource: "content_gate"
						}), s.a.createElement(te, {
							to: "/"
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.ProfileDoesNotExist:
					case T.a.ProfileDeleted:
					case T.a.ProfileSuspended:
					case T.a.ProfileBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), s.a.createElement(le, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case T.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case T.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case T.a.ProfileSuspended:
									return s.a.createElement(s.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", s.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case T.a.ProfileDoesNotExist:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(le, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), s.a.createElement(W, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), s.a.createElement(q, null, s.a.createElement(te, {
							to: "/"
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.CustomFeedDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), s.a.createElement(le, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), s.a.createElement(q, null, s.a.createElement(te, {
							to: "/"
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.PostBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(ne, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), s.a.createElement(le, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), s.a.createElement(q, null, s.a.createElement(X, {
							to: "/"
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = me(pe(Object(i.i)(e => s.a.createElement(G, null, s.a.createElement("div", null, s.a.createElement(ce, null, he(e))), s.a.createElement(x, null)))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = n.n(_),
				f = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				w = f.a.wrapped(c.c, "StyledTooltip", b.a),
				k = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.fb)(e),
					userIsSuspended: h.O
				});
			t.a = Object(o.b)(k, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(d.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c
			}) => s.a.createElement(u.l, {
				className: e,
				disabled: c || l,
				onClick: () => o(i),
				onMouseEnter: n,
				onMouseLeave: r,
				id: g,
				isFullWidth: !0
			}, a.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), l ? s.a.createElement(w, {
				caretOnTop: !0,
				tooltipId: g,
				text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? s.a.createElement(w, {
				caretOnTop: !0,
				tooltipId: g,
				text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				_ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				x = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				y = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				v = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				S = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				D = n.n(S);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				F = "LayoutSwitch--picker",
				P = Object(l.a)(f.a),
				N = {
					[h.d.Card]: y.a,
					[h.d.Classic]: k.a,
					[h.d.Compact]: x.a
				},
				L = {
					[h.d.Card]: function(e) {
						return s.a.createElement(w.a, O({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return s.a.createElement(w.a, O({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return s.a.createElement(w.a, O({}, e, {
							name: "view_compact"
						}))
					}
				},
				z = {
					[h.d.Card]: () => a.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => a.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => a.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				R = Object(_.t)(),
				A = Object(i.c)({
					dropdownIsOpen: Object(C.b)(F),
					isInIcons2020: v.a,
					postLayout: _.N,
					redditStyle: _.A
				}),
				T = Object(o.b)(A, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.x)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: F
					}))
				}));
			class B extends s.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: a,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), a(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(E.screen)(t),
							subreddit: Object(E.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: n,
							layout: a,
							onLayoutClick: r,
							postLayout: o
						} = this.props, i = a || h.e[o], l = e === i, d = n ? L[e] : N[e], u = z[e];
						return s.a.createElement(g.b, O({}, t, {
							className: Object(c.a)(D.a.LayoutItem, {
								[D.a.selected]: l
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: D.a.LayoutItemIconWrapper,
							isSelected: l,
							noHover: l,
							onClick: l ? void 0 : () => this.changeLayout(e),
							textClassName: D.a.LayoutItemTextClassName
						}), s.a.createElement(d, {
							className: D.a.LayoutIcon,
							onClick: l ? void 0 : r,
							isFilled: n && l && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return s.a.createElement(P, O({}, e, {
							className: D.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: D.a.DropdownRow,
							rowIconClassName: D.a.DropdownRowIcon,
							rowSelectedClassName: D.a.DropdownRowSelected,
							tooltipId: F
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: a
					} = this.props, r = t || h.e[a];
					return s.a.createElement("div", {
						className: Object(c.a)(D.a.Container, e),
						id: j
					}, s.a.createElement("div", {
						className: D.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: F,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), s.a.createElement(b.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = R(T(Object(p.c)(Object(d.a)(B))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				h = n("./src/lib/addQueryParams/index.ts"),
				_ = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				k = n("./src/reddit/constants/listingSorts.ts"),
				x = n("./src/reddit/contexts/Tooltip.ts"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Dropdown/Row.tsx"),
				E = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				S = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				D = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				O = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				j = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = n("./src/reddit/components/ListingSort/index.m.less"),
				L = n.n(N),
				z = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				T = Object(w.a)(z.a.wrapped(y.a, "Dropdown", L.a)),
				B = z.a.wrapped(P.a, "ListingSortIcon", L.a),
				I = (z.a.wrapped(S.b, "DropdownTriangle", L.a), z.a.div("Title", L.a)),
				U = z.a.wrapped(e => r.a.createElement(v.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", L.a),
				H = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", R({}, t, {
					className: Object(o.a)(L.a.SortWrapper, t.className, {
						[L.a.isDisabled]: e
					})
				})),
				M = z.a.div("DropdownRowDisabled", L.a),
				Z = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				q = Object(p.c)({
					isAwardListingExperimentEnabled: O.a,
					isBestSortPopularEnabled: D.a,
					user: F.i,
					dropdownIsOpen: (e, t) => Object(j.b)(t.dropdownId || A)(e),
					isPopularPage: d.C
				}),
				G = Object(s.b)(q, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || A
					}))
				}));
			var W = z.a.wrapped(Z(G(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(I, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(k.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, r.a.createElement(B, {
					sort: e.sort
				}))), r.a.createElement(x.a.Consumer, null, t => r.a.createElement(T, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(M, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, a, r) => {
					const s = [_.P.HOT, _.P.NEW, _.P.TOP, _.P.RISING];
					return (e && (n || a) || t && a) && s.unshift(_.P.BEST), t && r && s.splice(3, 0, _.P.AWARDED), s
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(v.b, {
					className: Object(o.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(k.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.a)(t))
					},
					href: e.isProfilePage ? Object(h.a)(e.baseUrl, {
						sort: t
					}) : Object(E.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", L.a),
				Y = n("./src/reddit/constants/parameters.ts");
			const K = e => {
					const t = V[e];
					return t && t() || ""
				},
				V = {
					[_.Rb.AllStates]: () => g.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[_.Rb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[_.Rb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[_.Rb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[_.Rb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[_.Rb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[_.Rb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[_.Rb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[_.Rb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[_.Rb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[_.Rb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[_.Rb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[_.Rb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[_.Rb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[_.Rb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[_.Rb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[_.Rb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[_.Rb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[_.Rb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[_.Rb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[_.Rb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[_.Rb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[_.Rb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[_.Rb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[_.Rb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[_.Rb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[_.Rb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[_.Rb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[_.Rb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[_.Rb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[_.Rb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[_.Rb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[_.Rb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[_.Rb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[_.Rb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[_.Rb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[_.Rb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[_.Rb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[_.Rb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[_.Rb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[_.Rb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[_.Rb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[_.Rb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[_.Rb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[_.Rb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[_.Rb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[_.Rb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[_.Rb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[_.Rb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[_.Rb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[_.Rb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[_.Rb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = z.a.wrapped(y.a, "_Dropdown", X.a),
				ee = Object(w.a)($),
				te = e => {
					return e.indexOf("_") > 0 && ae(e) === _.w.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return _.Rb.AllStates
				},
				ae = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = ae(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				se = Object(d.t)(),
				oe = Object(p.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker")
				}),
				ie = Object(s.b)(oe, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(l.u)(_.w.UnitedStates + "_" + n))
					}
				}));
			var le = z.a.wrapped(se(ie(e => {
				const t = `${e.baseUrl}?${Y.h}=${_.w.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : K(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(x.a.Consumer, null, n => r.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(_.Rb).map(n => {
					const a = _.Rb[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === _.Rb.AllStates ? t : `${t}_${e}`)(a), re(a))
					}, r.a.createElement(v.b, {
						className: Object(o.a)(e.rowClassName, e.sort === a ? e.rowSelectedClassName : void 0),
						displayText: K(a),
						isSelected: e.sort === a
					}))
				}))))
			})), "Component", X.a);
			const ce = {
				[_.w.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[_.w.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[_.w.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[_.w.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[_.w.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[_.w.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[_.w.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[_.w.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[_.w.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[_.w.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[_.w.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[_.w.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[_.w.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[_.w.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[_.w.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[_.w.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[_.w.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[_.w.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[_.w.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[_.w.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[_.w.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[_.w.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[_.w.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[_.w.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[_.w.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[_.w.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[_.w.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[_.w.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[_.w.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[_.w.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[_.w.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[_.w.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[_.w.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[_.w.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[_.w.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[_.w.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var de = n("./src/reddit/components/CountrySort/index.m.less"),
				ue = n.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(d.t)(),
				_e = Object(p.c)({
					dropdownIsOpen: Object(j.b)(pe)
				});
			var be = he(Object(s.b)(_e, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(l.u)(n))
					}
				}))(e => {
					const t = ae(e.sort),
						n = ne(e.sort),
						a = `${e.baseUrl}?${Y.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(o.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(U, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[_.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), r.a.createElement(x.a.Consumer, null, n => r.a.createElement(ee, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(_.w).map(n => {
						const s = _.w[n];
						return r.a.createElement("div", {
							key: s,
							onClick: () => e.onClickLink(`${a}${re(s)}`, s)
						}, r.a.createElement(v.b, {
							className: Object(o.a)(e.rowClassName, t === s ? e.rowSelectedClassName : void 0),
							displayText: ce[s](),
							isSelected: t === s
						}))
					})))), t === _.w.UnitedStates && r.a.createElement(le, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				fe = n("./node_modules/path-browserify/index.js"),
				ge = n.n(fe),
				we = n("./src/reddit/components/TimeSort/index.m.less"),
				ke = n.n(we);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(w.a)(y.a),
				ve = (e, t, n) => {
					let a = e.url;
					return e.urlParams.sort || Object(d.G)(e) || (a = ge.a.join(a, t)), Object(h.a)(a, {
						[Y.x]: n
					})
				},
				Ee = z.a.div("ListingSortContainer", ke.a),
				Ce = Object(d.t)(),
				Se = Object(p.c)({
					dropdownIsOpen: Object(j.b)("TimeSort--SortPicker")
				});
			var De = Ce(Object(s.b)(Se, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(Ee, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(k.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(x.a.Consumer, null, t => r.a.createElement(ye, xe({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [_.Ub.HOUR, _.Ub.DAY, _.Ub.WEEK, _.Ub.MONTH, _.Ub.YEAR, _.Ub.ALL].map(t => r.a.createElement(v.b, {
					className: Object(o.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(k.b)(t),
					href: ve(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.c)(t))
					}
				})))))))),
				Oe = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Fe = n("./src/reddit/controls/Button/index.tsx"),
				Pe = n("./src/reddit/icons/fonts/index.tsx"),
				Ne = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				ze = n.n(Le);

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([_.P.CONTROVERSIAL, _.P.TOP]),
				Te = new Set([_.P.CONTROVERSIAL, _.P.RISING]),
				Be = "ListingSort--Overflow",
				Ie = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ue = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, D.a, F.i, d.C, O.a, (e, t, n, a, r, s) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e
					};
					const o = [_.P.HOT, _.P.NEW, _.P.TOP, _.P.RISING];
					return (t && (a || n) || r && n) && o.unshift(_.P.BEST), r && s && o.splice(3, 0, _.P.AWARDED), {
						isPopularPage: r,
						sortOptions: o
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(h.a)(t, {
							sort: e
						}) : Object(E.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Fe.q, {
							className: Object(o.a)(ze.a.SortLink, e === t && ze.a.selected),
							kind: Fe.a.InternalLink,
							priority: Fe.b.Plain,
							Icon: n => r.a.createElement(B, Re({}, n, {
								sort: e,
								isFilled: e === t
							})),
							text: Object(k.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: a,
							sort: s
						} = this.props, o = a && !!n && e === _.P.HOT && s === _.P.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), o && r.a.createElement(be, {
							baseUrl: Oe.c[Oe.b.Popular],
							buttonClassName: ze.a.DropdownButton,
							className: ze.a.CountrySort,
							disabled: t,
							dropdownClassName: ze.a.Dropdown,
							rowClassName: ze.a.DropdownRow,
							rowSelectedClassName: ze.a.DropdownRowSelected,
							wrapperClassName: ze.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: ze.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: a,
						sortOptions: s,
						timeSort: i
					} = this.props, l = !t && Ae.has(a), c = Te.has(a), d = s.filter(e => !Te.has(e)), u = s.filter(e => Te.has(e) && e !== a);
					return r.a.createElement(je.b.Consumer, null, ({
						icons2020: t
					}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(W, Re({}, this.props, {
						buttonClassName: ze.a.DropdownButton,
						className: Object(o.a)(ze.a.SortDropdown, e),
						rowClassName: ze.a.DropdownRow,
						rowIconClassName: ze.a.DropdownRowIcon,
						rowSelectedClassName: ze.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(o.a)(ze.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(a), l && r.a.createElement(De, {
						baseUrl: this.getSortUrl(a),
						buttonClassName: ze.a.DropdownButton,
						className: ze.a.TimeSort,
						dropdownClassName: ze.a.Dropdown,
						listingSort: a,
						onChange: n,
						rowClassName: ze.a.DropdownRow,
						rowSelectedClassName: ze.a.DropdownRowSelected,
						timeSort: i || _.Vb,
						wrapperClassName: ze.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(W, Re({}, this.props, {
						className: Object(o.a)(ze.a.SortOverflow, e),
						dropdownClassName: ze.a.Dropdown,
						dropdownId: Be,
						rowClassName: ze.a.DropdownRow,
						rowIconClassName: ze.a.DropdownRowIcon,
						rowSelectedClassName: ze.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: ze.a.SortOverflowButton,
						id: Be
					}, t ? r.a.createElement(Pe.a, {
						name: "overflow_horizontal"
					}) : r.a.createElement(Ne.a, null)))))
				}
			}
			var Me = Ie(Object(s.b)(Ue)(Object(c.c)(He))),
				Ze = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				qe = n.n(Ze);
			const Ge = Object(d.t)({
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				We = Object(s.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, a) => {
						if (t) {
							const r = Object(i.c)({
								sort: n,
								timeSort: a
							});
							e(Object(l.I)(t, r))
						}
					}
				}));
			class Ye extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: a = !1,
						isProfilePage: s,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(qe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Me, {
						baseUrl: e,
						disabled: a,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !s && r.a.createElement(m.a, {
						className: qe.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ge(We(Object(c.c)(Ye)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				d = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				h = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Top/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.m.less"),
				f = n.n(b);
			const g = {
					[o.P.BEST]: d.a,
					[o.P.HOT]: m.a,
					[o.P.NEW]: p.a,
					[o.P.CONTROVERSIAL]: u.a,
					[o.P.TOP]: _.a,
					[o.P.RISING]: h.a,
					[o.P.AWARDED]: c.a
				},
				w = {
					[o.P.BEST]: "best",
					[o.P.HOT]: "hot",
					[o.P.NEW]: "new",
					[o.P.CONTROVERSIAL]: "controversial",
					[o.P.TOP]: "top",
					[o.P.RISING]: "rising",
					[o.P.AWARDED]: "award"
				};

			function k({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.a)() && void 0 !== w[n]) return r.a.createElement(l.a, {
					name: w[n],
					isFilled: t,
					className: Object(s.a)(e, f.a.iconStyles)
				});
				const a = g[n];
				return a ? r.a.createElement(a, {
					className: Object(s.a)(e, f.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, n) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...n
			}) => r.a.createElement("div", l({
				className: Object(s.a)(i.a.border, {
					[i.a.isFirst]: e,
					[i.a.isLast]: t
				})
			}, n))
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/times.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = n("./src/reddit/actions/post.ts"),
				_ = n("./src/reddit/helpers/getClickInfo.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				k = n.n(w);
			const x = u.a.div("ProfileOwnerCommentWrapper", k.a),
				y = u.a.div("CommentContentWrapper", k.a),
				v = u.a.div("Wrapper", k.a),
				E = u.a.div("CommentSeparator", k.a),
				C = Object(i.b)(() => Object(l.c)({
					comment: (e, t) => Object(b.a)(e, t),
					isAwarded: (e, t) => {
						const n = Object(b.a)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(f.a)(e, t);
							return n && n.coinPrice >= c.g
						})
					},
					isNightmodeOn: g.U
				}), e => ({
					openPost: t => e(Object(h.E)(t))
				}));
			class S extends o.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: a,
						isAwarded: s,
						isFirst: i,
						isLast: l,
						isNightmodeOn: c,
						profileName: u,
						showModTools: p
					} = this.props, h = u === e.author ? D : O;
					return o.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							a({
								postOrComment: t,
								clickInfo: Object(_.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, o.a.createElement(v, {
						className: Object(d.a)({
							[k.a.isFirst]: i,
							[k.a.isLast]: l,
							[k.a.isAwarded]: s,
							[k.a.isNightmodeOn]: c
						})
					}, r()(n + 1, e => o.a.createElement(E, {
						key: e
					})), o.a.createElement(y, null, h(t, u, p))))
				}
			}
			const D = (e, t, n) => o.a.createElement(x, null, O(e, t, n, !0, !0)),
				O = (e, t, n, a = !1, r) => o.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: a,
					showModTools: n,
					isExpanded: !!r
				});
			t.a = C(S)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return l
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const s = {
					[r.P.BEST]: () => a.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.P.HOT]: () => a.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.P.NEW]: () => a.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.P.CONTROVERSIAL]: () => a.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.P.RISING]: () => a.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.P.TOP]: () => a.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.P.AWARDED]: () => a.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = s[e];
					return t && t() || ""
				},
				i = {
					[r.Ub.HOUR]: () => a.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.Ub.DAY]: () => a.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.Ub.WEEK]: () => a.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.Ub.MONTH]: () => a.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.Ub.YEAR]: () => a.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.Ub.ALL]: () => a.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = r.a.createContext({})
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), r.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = ({
					message: e
				}) => s.a.createElement("div", {
					className: l.a.container
				}, s.a.createElement("h3", {
					className: l.a.title
				}, e || a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), s.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, a.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => s.a.createElement("div", {
					className: l.a.container
				}, s.a.createElement("h3", {
					className: l.a.title
				}, e || a.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), s.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, a.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview.06b62d21c37a082e2bad.js.map