// https://www.redditstatic.com/desktop2x/ProfileOverview.5e61b29d26669379cd5c.js
// Retrieved at 3/22/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
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

			function u(e) {
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
				var u = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(i).join("|");
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

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, r, o, i, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0
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
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
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
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/chat/controls/Svg/index.m.less"),
				c = s.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: i
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: s,
						[c.a.active]: n,
						[c.a.hover]: !!i
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
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "i", (function() {
				return P
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				i = s.n(o),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				_ = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				x = r()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				g = p.normalize;
			p.normalize = e => {
				g.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (_.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				k = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				P = e => {
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
				i = s.n(o),
				a = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				u = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.cc.Bottom_cell),
						t = Object(u.a)(c.cc.Bottom_cell_dismissible),
						s = Object(u.a)(c.cc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(u.a)(c.cc.Bottom_cell_signup_upsell_copy),
						r = Object(u.a)(c.cc.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.cc.Bottom_sheet);
					return e || n || r ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const h = 250,
				b = 1e3;

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
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(d.a)(), s = m(), o = Object(p.a)(s), l = Object(u.a)(c.cc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!o && s) {
								const e = document.getElementById(a.d),
									n = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									i = o / 3,
									c = 2 * o;
								n >= (l ? i : c) && t(s)
							}
						}, e, {
							maxWait: b
						}), [l, o, s, t, e])
					}();
					return n.createElement(e, f({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return j
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
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(i.g),
				f = Object(r.a)(i.e),
				_ = Object(r.a)(i.h),
				x = Object(r.a)(i.c),
				g = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				k = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(m.e)(r),
						i = Object(m.d)(r),
						d = Object(h.O)(r);
					if (o || !i) return;
					e(_());
					let p = !1;
					try {
						const t = d ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (P(t)) {
								if (E(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (C(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(n),
										m = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(b(m)), p = !0
								}
							} else p = !1
						}
					} catch (g) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, P = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !E(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, j = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = Object(m.g)(i);
					if (Object(m.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.P)(i);
						return Object(o.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(g({
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
				return Oe
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return we
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Fe
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ie
			})), s.d(t, "profileOverviewRequested", (function() {
				return Le
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
				u = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				h = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = s("./src/reddit/helpers/post/index.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/profile.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				P = s("./src/reddit/actions/changeUsername.ts"),
				E = s("./src/reddit/actions/contentGate.ts"),
				C = s("./src/reddit/actions/externalAccount.ts"),
				j = s("./src/reddit/actions/gold/powerups.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				w = s("./src/reddit/actions/platform.ts"),
				S = s("./src/reddit/actions/profile/index.ts"),
				F = s("./src/reddit/actions/trophyCase.ts"),
				I = s("./src/reddit/constants/errors.ts"),
				L = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				D = s("./src/lib/initializeClient/installReducer.ts"),
				A = s("./node_modules/redux/es/redux.js"),
				B = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const z = {};
			var M = (e = z, t) => {
				switch (t.type) {
					case T.c:
					case T.b:
					case B.c:
					case B.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case T.a:
					case B.a: {
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
			var q = (e = R, t) => {
					switch (t.type) {
						case T.c:
						case B.c: {
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
						case B.b:
						case B.a: {
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
				U = Object(A.c)({
					error: M,
					pending: q
				});
			const V = {};
			var W = (e = V, t) => {
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
					case B.b: {
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
			const G = {};
			var K = (e = G, t) => {
					switch (t.type) {
						case T.b:
						case B.b: {
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
				H = s("./src/lib/omitKey/index.ts");
			const Z = {};
			var J = (e = Z, t) => {
					switch (t.type) {
						case T.b:
						case B.b: {
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
							} : Object(H.a)(e, s)
						}
						default:
							return e
					}
				},
				X = Object(A.c)({
					api: U,
					fetchedTokens: W,
					ids: K,
					loadMore: J
				});
			const Q = {};
			var Y = (e = Q, t) => {
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
			var ee = (e = $, t) => {
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
			var re = (e = ne, t) => {
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
			var ie = (e = oe, t) => {
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
				ae = Object(A.c)({
					error: re,
					pending: ie
				});
			const ce = {};
			var de = (e = ce, t) => {
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
					api: ae,
					models: de
				}),
				ue = s("./node_modules/lodash/mapValues.js"),
				me = s.n(ue),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				he = s("./src/reddit/constants/comments.ts");
			const be = {};

			function fe(e) {
				const t = e;
				return me()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
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
			var xe = (e = be, t) => {
				switch (t.type) {
					case T.e:
					case se.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: r,
							profileName: o
						} = t.payload, i = _e(r, s, n), a = {};
						for (const e of r) {
							a[Object(pe.a)(e, o)] = i.hasOwnProperty(e) ? fe(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case se.b: {
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
							d = fe(_e(i, s, r)[c]),
							l = Object(pe.a)(c, a),
							u = {
								...e[l]
							},
							m = u[o].prev,
							p = m && m.id || "",
							h = n[c].head,
							b = h && h.id || "",
							f = {
								id: b,
								type: he.a.Comment
							},
							_ = {
								...u,
								[p]: {
									...u[p],
									next: f
								},
								...d,
								[b]: {
									...d[b],
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
			var ye = (e = ge, t) => {
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
			const ve = {};
			var ke = (e = ve, t) => {
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
				Pe = Object(A.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: xe,
					keyToHeadCommentId: ye,
					keyToPostId: ke
				}),
				Ee = Object(A.c)({
					chrono: X,
					conversations: Pe
				});
			Object(D.a)({
				pages: {
					profileOverview: Ee
				}
			});
			const Ce = Object(k.a)(T.f),
				je = Object(k.a)(T.e),
				Oe = Object(k.a)(T.d),
				we = Object(k.a)(T.c),
				Se = Object(k.a)(T.b),
				Fe = Object(k.a)(T.a),
				Ie = (e, t, s, n) => async (n, r, i) => {
					const a = r(),
						c = !!a.listings.postOrder.ids[e],
						f = !!Object(g.c)(a, {
							listingKey: e
						});
					if (!!Object(g.d)(a, {
							listingKey: e
						}) || c && !f) return;
					n(Ce({
						key: e
					}));
					const _ = await Object(N.a)("profile", () => ((e, t, s) => Object(u.a)(e, {
							data: s,
							endpoint: Object(m.a)(Object(l.a)(Object(p.a)(Object(h.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: o.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, s)),
						x = _.body;
					await Object(b.a)(i.gqlContext, x.posts).then(e => x.posts = e);
					const {
						pinned: v,
						postIds: k
					} = x;
					if (_.ok) {
						n(je({
							key: e,
							meta: a.meta,
							profileName: t,
							...x,
							postIds: k
						}));
						const s = Object(y.m)(r(), t);
						n(Object(O.h)({
							profileId: s,
							pinned: v
						}))
					} else n(Oe({
						account: _.body.data ? _.body.data.account : null,
						error: _.body.reason ? {
							type: _.body.reason
						} : _.error,
						key: e
					})), _.body.reason === I.a.DeletedProfile && n(Object(E.s)({
						profileName: t
					})), n(Object(w.n)(_.status))
				}, Le = e => async (t, s, n) => {
					const {
						queryParams: d,
						params: l
					} = e, {
						sort: u,
						t: m
					} = Object(a.a)(s(), d), {
						profileName: p
					} = l;
					let h = !1;
					const b = f.e[Object(x.R)(s(), {})],
						g = p.toLowerCase(),
						k = {
							...r()(e.queryParams, _.m),
							sort: u,
							layout: b,
							t: m
						},
						E = [t(S.d(g))],
						O = Object(L.a)(g, o.ub, u, e.queryParams);
					if (s().listings.postOrder.ids[O] && !s().listings.postOrder.api.error[O] ? h = !0 : E.push(t(Ie(O, g, k, !0))), E.push(t(Object(i.b)())), await Promise.all(E), h) return;
					const I = s();
					if (!I.platform.currentPage) return;
					if (200 !== I.platform.currentPage.status) return;
					const N = Object(y.m)(s(), g),
						T = Object(v.yb)(I, {
							userName: p
						}).id;
					t(w.m({
						title: Ne(s(), p)
					})), Object(v.R)(I) && Object(v.V)(I, p) && t(Object(P.f)());
					const D = [t(Object(c.q)()), t(F.b(g, N)), t(S.b(g)), t(C.o(p)), t(S.g(p)), t(j.l(p, T))];
					await Promise.all(D)
				}, Ne = (e, t) => Object(y.q)(e, {
					profileName: t
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
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(i.a, {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				h = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = s("./src/reddit/components/Footer/index.tsx"),
				_ = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.tsx"),
				g = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				y = s("./node_modules/lodash/flatMap.js"),
				v = s.n(y),
				k = s("./src/lib/linkMatchers/index.ts"),
				P = s("./src/lib/linkMatchers/customLinks.ts"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx");
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
			var O = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = v()(t, j)), e.parseRegularLinks && (t = v()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(P.g.subreddit.prefix, P.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return o.a.createElement(E.b, {
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
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/chat/controls/Svg/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var N = e => o.a.createElement(I.a, L({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				T = s("./src/reddit/models/ContentGate.ts"),
				D = s("./src/lib/constants/index.ts"),
				A = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/reddit/selectors/user.ts");
			var z = s("./src/reddit/selectors/meta.ts"),
				M = s("./src/reddit/components/ContentGate/index.m.less"),
				R = s.n(M);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(N, "PrivateKey", R.a), V = l.a.div("ButtonsContainer", R.a), W = l.a.div("Container", R.a), G = l.a.div("ContainerExp", R.a), K = l.a.div("Description", R.a), H = l.a.div("PrivateSubredditDetails", R.a), Z = l.a.div("PrivateSubredditDescription", R.a), J = l.a.h3("PrivateSubredditName", R.a), X = l.a.a("Link", R.a), Q = l.a.wrapped(F.n, "LinkRouterButton", R.a), Y = l.a.wrapped(F.m, "LinkButton", R.a), $ = l.a.wrapped(F.q, "SecondaryLinkRouterButton", R.a), ee = l.a.wrapped(F.p, "SecondaryLinkButton", R.a), te = l.a.wrapped(Q, "GoHomeLinkButton", R.a), se = l.a.wrapped(b.a, "CreateCommunityButton", R.a), ne = l.a.img("Image", R.a), re = l.a.img("ImagePlaceholder", R.a), oe = l.a.wrapped(Q, "LeftLinkRouterButton", R.a), ie = l.a.wrapped(Y, "LeftLinkButton", R.a), ae = l.a.wrapped(ee, "SecondaryLeftLinkButton", R.a), ce = l.a.wrapped($, "SecondaryLeftLinkRouterButton", R.a), de = l.a.h3("Title", R.a), le = l.a.div("PageBody", R.a), ue = l.a.div("InterstitialMessageWrapper", R.a), me = Object(d.c)({
				isLoggedIn: B.O,
				origin: z.j,
				user: B.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(B.P)(e)) return !1;
					const t = Object(A.d)(e);
					if (!t) return !1;
					const s = Object(B.f)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const r = 30 * D.B;
					return n > Date.now() - r
				})(e),
				isSeo: z.g
			}), pe = Object(S.u)(), he = Object(i.b)(me, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.D(t)), window.location.reload()
				},
				continueToGatedSubreddit: async () => {
					await e(p.v(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.o)())
				}
			})), be = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: i,
					isLoggedIn: a,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: b,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: v,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: P,
					interstitialWarningMessage: E,
					interstitialWarningMessageHtml: C,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: S,
					subredditDescription: F,
					subredditName: I,
					user: L
				} = e, N = async () => {
					if (a ? await S() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(w.h, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case T.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, q._("r/{community name} is a Reddit Premium community", [q._param("community name", I)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, q._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(V, null, L ? o.a.createElement(ae, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, q._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ie, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, q._("Sign Up", null, {
							hk: "rvpjy"
						})), L ? o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, q._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case T.a.Nsfw:
					case T.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, s === T.a.Nsfw ? q._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : q._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, q._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(V, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, q._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: N,
							redditStyle: !0
						}, q._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case T.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement(de, null, "r/", I, " ", q._("is a private community", null, {
							hk: "7zZmq"
						})), F && F.length && o.a.createElement(H, null, o.a.createElement(J, null, "r/", I), o.a.createElement(Z, null, o.a.createElement("div", null, F))), o.a.createElement(K, null, q._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", I, " ", q._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), q._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(V, null, L ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: R.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ae, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${I}`,
							redditStyle: !0
						}, q._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ae, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, q._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, q._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), I && o.a.createElement(g.a, {
							subredditName: I
						}));
					case T.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, q._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, q._("This community is {=quarantined}", [q._param("=quarantined", o.a.createElement(X, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, q._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, P ? o.a.createElement(x.a, {
							content: P,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : k ? o.a.createElement(_.a, {
							html: k
						}) : v || q._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), q._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(V, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? o.a.createElement(V, null, o.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, q._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Y, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, q._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(V, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, q._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, q._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(L, r, y)));
					case T.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, null, q._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(K, null, o.a.createElement(ue, null, j ? o.a.createElement(x.a, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : C ? o.a.createElement(_.a, {
							html: C
						}) : E), q._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(V, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, q._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: i,
							redditStyle: !0
						}, q._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case T.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, q._("r/{community name} has been banned from Reddit", [q._param("community name", I)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(O, {
							linkClassName: R.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : q._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(V, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, q._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, q._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(V, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, q._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, null), o.a.createElement(de, null, q._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, q._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(V, null, L && o.a.createElement(se, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
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
									return q._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case T.a.ProfileDeleted:
									return q._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case T.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, q._("This account has been {=suspended} .", [q._param("=suspended", o.a.createElement(X, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, q._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case T.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, q._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, q._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, q._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, q._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(V, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, q._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(he(Object(a.i)(e => {
				const t = Object(r.useContext)(c.a) ? G : W;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(le, null, be(e))), o.a.createElement(f.a, null))
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
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = s.n(f),
				x = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				y = x.a.wrapped(l.c, "StyledTooltip", _.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ob)(e),
					userIsSuspended: b.W
				});
			t.a = Object(i.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(h.c)(t)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: r,
				openCommunityCreation: i,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d,
				onClick: l
			}) => {
				return o.a.createElement(p.t, {
					className: e,
					disabled: d || c,
					onClick: e => {
						l && l(e), i(a)
					},
					onMouseEnter: s,
					onMouseLeave: r,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				participantsCount: e
			}) => u._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [u._param("total participated users", Object(l.b)(e)), u._plural(e)], {
				hk: "1yrPLH"
			});
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				h = s.n(p);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === c.a.Live,
					r = t.status === c.a.Closed,
					l = Object(i.e)(t => Object(d.U)(t, {
						postId: e.id
					}));
				return o.a.createElement("div", {
					className: h.a.container
				}, o.a.createElement("div", {
					className: h.a.label
				}, o.a.createElement("span", null, null == l ? void 0 : l.displayText), s && o.a.createElement("span", {
					className: Object(n.a)(h.a.badge, h.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), r && o.a.createElement("span", {
					className: Object(n.a)(h.a.badge, h.a.ended)
				}, b._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== t.totalParticipantsCount && o.a.createElement(m, {
					participantsCount: t.totalParticipantsCount
				}), o.a.createElement(a.a, {
					className: h.a.awards,
					thing: e
				})), o.a.createElement("h3", {
					className: h.a.title
				}, t.name))
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Footer/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("FooterContainer", c.a), u = i.a.div("UserAgreement", c.a), m = i.a.a("UserAgreementLink", c.a), p = i.a.a("PrivacyLink", c.a);
			t.a = () => r.a.createElement(l, null, r.a.createElement(u, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", r.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "2srkM2"
			}))), d._param("=Privacy Policy", r.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "335pdO"
			})))
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
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
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/Econ/Audio/async.ts"),
				b = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				_ = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				E = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/ads/index.ts"),
				S = s("./src/lib/classNames/index.ts"),
				F = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				I = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AwardBadges/index.tsx"),
				N = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				q = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				G = s("./src/reddit/components/PostLeftRail/index.tsx"),
				K = s("./src/reddit/components/PostMedia/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				J = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = s.n(J);
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Y = () => r.a.createElement("div", {
					className: X.a.container
				}, r.a.createElement(Z.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: X.a.metaText
				}, Q._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/components/PostTopLine/index.tsx"),
				se = s("./src/reddit/components/SourceLink/index.tsx"),
				ne = s("./src/reddit/constants/postLayout.ts"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/contexts/Post/index.tsx"),
				ae = s("./src/reddit/helpers/isCrosspost.ts"),
				ce = s("./src/reddit/helpers/postEvent.ts"),
				de = s("./src/reddit/models/Audio/index.ts"),
				le = s("./src/reddit/constants/experiments.ts"),
				ue = s("./src/reddit/helpers/chooseVariant/index.ts"),
				me = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const pe = Object(a.a)(j.N, e => e.some(me.c)),
				he = Object(a.a)(pe, e => e),
				be = (e, t) => Object(ue.c)(e, {
					experimentName: le.oc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && he(e, {
							listingKey: s
						})
					}
				});
			var fe = s("./src/reddit/selectors/postFlair.ts"),
				_e = s("./src/reddit/selectors/showPromotedCTA.ts"),
				xe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ye = s.n(ge),
				ve = s("./src/reddit/selectors/i18n/index.ts"),
				ke = s("./src/reddit/components/LargePost/index.m.less"),
				Pe = s.n(ke);
			const Ee = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(j.N)(e, {
						listingKey: s
					}) : void 0
				},
				Ce = Object(o.b)(() => Object(a.c)({
					autoplayPref: O.b,
					activeModalId: k.a,
					hideNSFWPref: O.F,
					flairStyleTemplate: oe.V,
					isCurrentUserProfilePost: j.l,
					isLoggedIn: O.P,
					isActive: j.j,
					showPromotedCTA: _e.a,
					moderatorPermissions: C.l,
					modModeEnabled: oe.T,
					posts: Ee,
					postHeightVariant: be,
					shouldShowNsfwListingBelow: ve.b,
					showEditFlair: fe.a,
					showAwardsPlaque: E.a,
					isInModNotesExperiment: (e, {
						subreddit: t
					}) => !!t && Object(P.a)(e, t.id)
				}), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === v.a.upvoted ? Object(m.kb)(t) : Object(m.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(m.gb)(t)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				})),
				je = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						currentUser: a,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: v,
						hideNSFWPref: k,
						hostPostData: P,
						imageGalleryCurrentItem: E,
						inSubredditOrProfile: C = !1,
						isCommentsPage: j,
						isCurrentUserProfilePost: O,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: J,
						isInModNotesExperiment: X,
						isLoggedIn: Q,
						isOverlay: re,
						isTopicPage: oe,
						isCommentCountAnimationEnabled: ie,
						isVoteCountAnimationEnabled: ue,
						isCountAnimShadowTestEnabled: me,
						listingIndex: pe,
						listingKey: he,
						moderatorPermissions: be,
						modModeEnabled: fe,
						onClickPost: _e,
						onIgnoreReports: ge,
						onOpenReportsDropdown: ve,
						post: ke,
						postHeightVariant: Ee,
						scrollerItemRef: Ce,
						shouldShowGalleryTileOption: je,
						shouldShowNsfwListingBelow: Oe,
						showAwardsPlaque: we,
						showEditFlair: Se,
						showPromotedCTA: Fe,
						subredditOrProfile: Ie,
						userIsOp: Le,
						postId: Ne,
						postIds: Te,
						onceInViewport: De
					} = e, Ae = !!e.redditStyle || !!e["data-redditstyle"], Be = Ae ? void 0 : p, ze = Object(l.a)(be), Me = fe && ze, Re = Object(c.a)(be), qe = Object(d.a)(be), Ue = Object(q.c)(ke), Ve = Object(M.d)(ke), We = !!ke.media && ke.media.type === g.o.RTJSON, Ge = Le && We, Ke = s ? s - G.a : void 0, He = !!ke.recommendationContext, Ze = !(Z && Q || oe) || He && Q, Je = (e => e === le.we.OnlyTitles)(Ee) && !Object(ae.a)(ke), Xe = (e => e === le.we.MediumHeight)(Ee) && !Object(ae.a)(ke), Qe = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: r
						} = e;
						if (!Object(y.r)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const o = n && 0 === n.indexOf(s.id),
							i = n && 1 === n.indexOf(s.id),
							a = r && r[1] && Object(y.r)(r[1]);
						return {
							hasTopCompactPostStyles: o && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: o
						}
					})(e), Ye = !!(null == P ? void 0 : P.shouldShowLinkedPosts), $e = (!C || Ye || Oe) && !ke.isSponsored, et = Object(w.t)(ke, E), {
						source: tt
					} = et, st = Object(n.useRef)(null), nt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == De || De(pe))
						})
					}, [De, pe]);
					return Object(x.a)(st, nt), r.a.createElement(_.b, null, r.a.createElement(W.a, {
						className: Object(S.a)(Pe.a.container, o, ye.a.largeAndMediumPostStyles, ye.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[ye.a.mUseRedditTheme]: Ae,
							promotedvideolink: ke.isSponsored && !(ke.media && g.a.has(ke.media.type)),
							[Pe.a.topCompactPost]: Qe && Qe.hasTopCompactPostStyles,
							[Pe.a.bottomCompactPost]: Qe && Qe.hasBottomCompactPostStyles
						}),
						isOverlay: re,
						style: Object(u.b)(e.flairStyleTemplate),
						post: ke,
						onClick: _e,
						eventFactory: m
					}, r.a.createElement("div", {
						ref: st
					}), r.a.createElement($.a, {
						model: ke,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: me,
						isVoteCountAnimation: ue,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Be,
						redditStyle: Ae,
						postId: Ne
					}), r.a.createElement(V.a, {
						className: Object(S.a)(Pe.a.backgroundWrapper, {
							[Pe.a.isEvent]: Object(ce.a)(ke)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Be,
						post: ke,
						redditStyle: Ae
					}, r.a.createElement(D.a, {
						post: ke
					}), Qe && Qe.showPinnnedHeader && r.a.createElement(Y, null), Object(i.c)(ke) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: ke
					}), r.a.createElement(b.a, {
						post: ke
					})), !Object(i.c)(ke) && r.a.createElement(r.a.Fragment, null, !!ke.recommendationContext && r.a.createElement(U.a, {
						content: ke.recommendationContext.content,
						layout: ne.g.Large,
						post: ke
					}), r.a.createElement(te.a, {
						className: Pe.a.postTopLine,
						hideAwards: we,
						hideNSFWPref: k,
						hostPostData: P,
						iconClassName: Pe.a.postTopLineIcon,
						inSubredditOrProfile: C,
						isCommentsPage: !!j,
						isCompactPinnedPost: !!Qe,
						isCurrentUserProfilePost: O,
						isInModNotesExperiment: X,
						isOverlay: !!re,
						isTopicPage: !!oe,
						listingKey: he,
						post: ke,
						shouldShowSubscribeButton: Ze,
						showSubreddit: $e,
						showSubredditIcon: !0,
						subredditOrProfile: Ie
					}), r.a.createElement(ee.c, {
						className: Pe.a.postTitle,
						post: ke,
						redditStyle: Ae,
						size: ee.b.Large,
						titleColor: Be && Be.postTitleColor,
						isOverlay: re
					}), ke.source && !ke.isSponsored && !(ke.media && Object(g.H)(ke.media)) && r.a.createElement(se.a, {
						className: Pe.a.sourceLink,
						post: ke
					})), r.a.createElement("div", {
						className: Pe.a.postMediaWrapper
					}, !Qe && r.a.createElement(K.a, {
						isGalleryTileLayoutDefault: J,
						isListing: !0,
						isMediumHeight: Xe,
						isNotCardView: !!re,
						isTitleOnly: Je,
						showCentered: !0,
						flairStyleTemplate: Be,
						post: ke,
						availableWidth: Ke,
						shouldLoad: v,
						scrollerItemRef: Ce,
						autoplayPref: t,
						shouldShowGalleryTileOption: je,
						showPromotedCTA: Fe
					})), Fe && tt && tt.url && !ke.isSurveyAd && r.a.createElement(F.a, {
						className: Pe.a.adLinkWrapper
					}, r.a.createElement(I.a, {
						post: ke,
						adLinkContent: et
					})), fe && ze && Ve && r.a.createElement("div", {
						className: Pe.a.modModeBannerWrapper
					}, r.a.createElement(z.a, {
						thing: ke
					})), fe && ze && Ue && r.a.createElement("div", {
						className: Pe.a.modModeBannerWrapper
					}, r.a.createElement(R.a, {
						onIgnoreReports: ge,
						reportable: ke
					})), Object(de.b)(ke) && r.a.createElement(h.a, {
						post: ke
					}), r.a.createElement(B.d, null), we && r.a.createElement(L.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: ke,
						tooltipType: re ? xe.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: Pe.a.flatListContainer
					}, r.a.createElement(T.a, {
						className: Pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Be,
						model: ke,
						onVoteClick: e.handleVote
					}), !ke.isSurveyAd && r.a.createElement(A.c, {
						currentUser: a,
						hasModFlairPerms: Re,
						hasModFullPerms: qe,
						hasModPostPerms: ze,
						hostPostData: P,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: me,
						isLargePost: !0,
						isOverlay: !!re,
						listingKey: he,
						modModeEnabled: fe,
						onIgnoreReports: ge,
						onOpenReportsDropdown: ve,
						post: ke,
						showEditPost: Ge,
						showEditFlair: Se,
						useFlatlistBreakpoints: Object(H.b)({
							editPost: !1,
							save: !Me,
							hide: !1,
							report: !1
						})
					}))), Z && r.a.createElement(N.a, {
						post: ke,
						postIds: null != Te ? Te : [],
						subredditId: null == Ie ? void 0 : Ie.id
					})))
				});
			je.displayName = "LargePostMemoized";
			t.default = Object(ie.b)(Ce(Object(re.b)(je)))
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
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: h
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, o.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, o.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: h
				}), o.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(u.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(m.author, s), h && h.isQuarantined && o.a.createElement(a.a, null))
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
				}, r.a.createElement(i.a, {
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
				})), d && r.a.createElement(i.a, {
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
			t.a = ({
				isFirst: e,
				isLast: t,
				...s
			}) => r.a.createElement("div", c({
				className: Object(o.a)(a.a.border, {
					[a.a.isFirst]: e,
					[a.a.isLast]: t
				})
			}, s))
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
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/communityAwards.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = s.n(g);
			const v = u.a.div("ProfileOwnerCommentWrapper", y.a),
				k = u.a.div("CommentContentWrapper", y.a),
				P = u.a.div("Wrapper", y.a),
				E = u.a.div("CommentSeparator", y.a),
				C = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(_.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: x.cb
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class j extends i.a.Component {
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
						profileName: u,
						showModTools: p
					} = this.props, h = u === e.author ? O : w;
					return i.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(P, {
						className: Object(l.a)({
							[y.a.isFirst]: a,
							[y.a.isLast]: c,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: d
						})
					}, r()(s + 1, e => i.a.createElement(E, {
						key: e
					})), i.a.createElement(k, null, h(t, u, p))))
				}
			}
			const O = (e, t, s) => i.a.createElement(v, null, w(e, t, s, !0, !0)),
				w = (e, t, s, n = !1, r) => i.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: n,
					showModTools: s,
					isExpanded: !!r
				});
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
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(E);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: r,
				hideNSFWPref: E,
				hostPostData: j,
				iconClassName: O,
				inSubredditOrProfile: w,
				isCommentsPage: S,
				isCompactPinnedPost: F,
				isCurrentUserProfilePost: I,
				isInModNotesExperiment: L,
				isOverlay: N,
				isTopicPage: T,
				listingKey: D,
				post: A,
				shouldShowSubscribeButton: B,
				showCornerOutboundLink: z,
				showSubreddit: M,
				showSubredditIcon: R,
				subredditOrProfile: q,
				isFollowed: U,
				shouldShowFollowButton: V,
				onFollowPostClick: W
			}) => {
				const G = r || T,
					K = q && Object(k.h)(q),
					H = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(P.Eb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(a.a)(C.a.container, e)
				}, M && q && o.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, o.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: q.url
				}, R && o.a.createElement(p.b, {
					className: Object(a.a)(C.a.subredditIcon, O),
					shouldHideNsfwIcon: E,
					subredditOrProfile: q
				}))), o.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, M && o.a.createElement(d.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), o.a.createElement(m.d, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					isInModNotesExperiment: L,
					tooltipType: N ? m.c.Lightbox : void 0,
					post: A,
					showSub: M,
					subredditOrProfile: q
				}), o.a.createElement(u.a, {
					className: C.a.postBadges,
					displayText: q ? q.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: F,
					post: A,
					tooltipType: N ? m.c.Lightbox : void 0
				}), !G && o.a.createElement(c.a, {
					isPostDetail: S,
					thing: A,
					tooltipType: N ? m.c.Lightbox : void 0
				})), q && H && M && B && !I && o.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.h)(A.id, e ? "unsubscribe" : "subscribe", "post", D, j),
					identifier: {
						name: q.name,
						type: K ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: A.id,
					size: _.d.XS
				}), z && o.a.createElement(x.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(v.D)(A),
					source: A.source
				}, o.a.createElement(y.a, {
					className: C.a.outboundLinkIcon
				})), V && H && o.a.createElement(l.a, {
					isFilled: !!U,
					onClick: W,
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
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
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
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Footer/index.tsx"),
				l = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				u = s.n(l),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/actions/login.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			const x = "nsfw_dialog";
			var g = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const y = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				v = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				k = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				P = e => {
					const t = Object(o.d)(),
						s = Object(h.b)();
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.mainCta)
					}, r.a.createElement("img", {
						src: y
					}), r.a.createElement("div", {
						className: u.a.cta
					}, (() => m.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), r.a.createElement("div", {
						className: u.a.contentTitle
					}, e.contentTitle), r.a.createElement("div", {
						className: u.a.warning
					}, (() => m.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), r.a.createElement("div", {
						className: u.a.buttonContainer
					}, r.a.createElement(f.j, {
						className: Object(c.a)(u.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(_.o)(e),
								source: "xpromo",
								action: "click",
								noun: x
							}))()), t(Object(p.i)())
						}
					}, (() => m.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), r.a.createElement(f.j, {
						className: u.a.cancel,
						onClick: () => {
							s((() => e => ({
								...Object(_.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: x
							}))()), t(Object(i.b)("/"))
						}
					}, (() => m.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				E = e => r.a.createElement("div", {
					className: u.a.qrCodeOuter
				}, r.a.createElement("div", {
					className: u.a.qrCodeInner
				}, r.a.createElement("img", {
					className: u.a.qrCode,
					src: e.qrCodeAsset
				}), r.a.createElement("div", {
					className: u.a.copyLine1
				}, (() => m.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), r.a.createElement("div", {
					className: u.a.copyLine2
				}, (() => m.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), r.a.createElement("img", {
					className: u.a.sneakySnoo,
					src: v
				}))),
				C = e => {
					const t = Object(h.b)();
					r.a.useEffect(() => {
						t((() => e => ({
							...Object(_.o)(e),
							source: "xpromo",
							action: "view",
							noun: x
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(o.e)(g.b) === b.fc.Enabled ? k.d2x_nsfw_signup_blocking_de_v1 : k.d2x_nsfw_signup_blocking_non_us_v1;
					return r.a.createElement("div", {
						className: u.a.container
					}, r.a.createElement(P, {
						contentTitle: s
					}), r.a.createElement("div", {
						className: u.a.footerWrapper
					}, r.a.createElement(d.a, null)), r.a.createElement(E, {
						qrCodeAsset: n
					}))
				}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				_ = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tracking.ts");

			function P() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const E = P(),
				C = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: _.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: g.g,
					postsById: y.S,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: n
					}) => Object(y.D)(e, t, s, n)),
					subredditsById: v.Z,
					viewportDataLoaded: k.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.e
				},
				j = Object(r.c)(C),
				O = e => ({
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
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(d.P(t, n, r, o))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				w = e => Object(h.b)({
					...e
				}),
				S = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(b.h)(e, t, "post", r, o, i, void 0)
				},
				F = Object(n.b)(j, O, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: S
				}));
			t.a = e => Object(m.c)(E(F(e)))
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
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.V,
				hideNSFWPref: h.F,
				isActive: p.j,
				moderatorPermissions: u.l,
				modModeEnabled: d.T,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				}) => e(Object(i.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				})),
				handleVote: s => {
					const n = s === c.a.upvoted ? Object(o.kb)(t) : Object(o.w)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(o.gb)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: n
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: n
				})
			}), {
				forwardRef: !0
			});
			t.a = b
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
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = ({
					message: e
				}) => o.a.createElement("div", {
					className: c.a.container
				}, o.a.createElement("h3", {
					className: c.a.title
				}, e || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), o.a.createElement(i.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => o.a.createElement("div", {
					className: c.a.container
				}, o.a.createElement("h3", {
					className: c.a.title
				}, e || n.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), o.a.createElement(i.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
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
				u = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				b = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				f = s("./src/reddit/actions/pages/profileShared.ts"),
				_ = s("./src/reddit/actions/profileConversations.ts"),
				x = s("./src/reddit/components/ContentGate/index.tsx"),
				g = s("./src/reddit/components/EmptyProfile/index.ts"),
				y = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				v = s("./src/reddit/components/JumpToContent/index.tsx"),
				k = s("./src/reddit/components/PostList/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/isPinnedAdminPost/index.ts"),
				j = s("./src/lib/lessComponent.tsx"),
				O = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				w = s("./node_modules/lodash/last.js"),
				S = s.n(w);
			var F = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				I = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/components/ClassicPost/index.tsx"),
				N = s("./src/reddit/components/LargePost/index.tsx"),
				T = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				D = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				A = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				B = s("./src/reddit/selectors/profile.ts"),
				z = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				M = s.n(z);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = j.a.div("ExtraCommentsItemWrapper", M.a), U = j.a.p("ExtraComments", M.a), V = j.a.wrapped(U, "ExtraCommentsInteractive", M.a);
			var W = Object(a.b)(() => Object(c.c)({
					extraCommentsItem: B.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.pages.profileOverview.conversations;
						return !!n.api.pending[s]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: s => e(Object(_.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => i.a.createElement(q, null, s ? i.a.createElement(U, null, R._("Loading...", null, {
					hk: "47z90C"
				})) : i.a.createElement(A.a.Consumer, null, s => i.a.createElement(V, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, R._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				G = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				K = s("./src/reddit/contexts/Post/index.tsx"),
				H = s("./src/reddit/hooks/useTheme.ts"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				J = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(J),
				Q = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				Y = s.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = j.a.div("BackgroundWrapper", Y.a),
				te = j.a.wrapped(L.default, "ClassicPost", Y.a),
				se = j.a.wrapped(T.a, "OverviewCommentPost", Y.a),
				ne = Object(a.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const n = s ? s.toLowerCase() : "",
							r = Object(O.a)(t, n);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const n = s ? s.toLowerCase() : "",
							r = Object(O.a)(t, n);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(I.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(I.r)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), r = s.models[n];
							return r ? r.username : void 0
						})(e, t)
					},
					layout: m.R
				})),
				re = j.a.wrapped(N.default, "OverviewLargePost", Y.a),
				oe = ne(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: r,
						forceLoadMedia: o,
						headComment: a,
						isInitiallyPinned: c,
						isPinned: d,
						isScrolling: l,
						last: u,
						layout: m,
						onClickPost: p,
						onSizeChanged: h,
						pageLayer: b,
						post: f,
						postId: _,
						profileName: x,
						scrollerItemRef: g
					} = e, y = {
						last: u,
						onClickPost: p,
						postId: _
					};
					if (!x) return null;
					const v = x === f.author,
						k = Object(C.a)(d, f.distinguishType);
					if (!v && !a && !k) return null;
					const P = a ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), S()(t).push(e[n])
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
						}(n, a)) : [],
						j = P.length - 1;
					return i.a.createElement("div", {
						className: Object(E.a)(X.a.largeAndMediumActiveStyles, X.a.largeAndMediumPostStyles, Y.a.OverviewConversationsPost, s),
						style: {
							...Object(F.b)(),
							...Object(F.d)(e)
						}
					}, i.a.createElement(D.a, {
						isFirst: !0,
						isLast: j < 0,
						key: f.id
					}, !v && !!a && i.a.createElement(se, $({}, y, {
						commentId: a,
						key: f.id,
						profileName: x
					})), (v || k) && (m === Z.g.Classic ? i.a.createElement(te, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: o,
						last: u,
						onClickPost: p,
						onSizeChanged: h,
						pageLayer: b,
						postId: _,
						scrollerItemRef: g
					}) : i.a.createElement(re, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: o,
						last: u,
						onClickPost: p,
						onSizeChanged: h,
						pageLayer: b,
						postId: _,
						scrollerItemRef: g
					}))), i.a.createElement(ee, {
						style: {
							background: Object(F.e)(e)
						}
					}, !c && P.map((e, t) => i.a.createElement(D.a, {
						isLast: t === j,
						key: `${t}-isLast[${t===j}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(G.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: r,
							key: t.id,
							profileName: x,
							showModTools: !0
						}) : i.a.createElement(W, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: x
						})
					})))))
				});
			var ie = Object(K.b)((function(e) {
					var t;
					const s = Object(H.a)(),
						n = Object(m.fb)();
					return i.a.createElement(oe, $({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(m.i)(n),
						pageLayer: n
					}, e))
				})),
				ae = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				ce = s("./src/reddit/helpers/trackers/post.ts"),
				de = s("./src/reddit/selectors/tracking.ts"),
				le = s("./src/reddit/connectors/PostList/index.ts");
			const ue = Object(c.c)({
					...le.d,
					postIds: I.O,
					viewportDataLoaded: de.a
				}),
				me = Object(le.c)(),
				pe = Object(a.b)(ue, le.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(ce.h)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? ae.a : ie
				}));
			var he = (e => Object(P.c)(me(pe(e))))(k.a),
				be = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				fe = s("./node_modules/lodash/debounce.js"),
				_e = s.n(fe),
				xe = s("./src/reddit/actions/post.ts"),
				ge = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				ye = s("./src/lib/isUrl/index.ts"),
				ve = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ke = s("./src/reddit/components/Media/index.tsx"),
				Pe = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ee = s("./src/reddit/components/PostContainer/index.tsx"),
				Ce = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				je = s("./src/reddit/components/PostTitle/index.tsx"),
				Oe = s("./src/reddit/connectors/miniCardPost.ts"),
				we = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Se = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Fe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ie = s("./src/reddit/models/Media/index.ts"),
				Le = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ne = s("./src/reddit/components/CommentsLink/index.tsx"),
				Te = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				De = s("./src/reddit/components/Flatlist/index.tsx"),
				Ae = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Be = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				ze = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Me = s("./src/reddit/components/ShareMenu/index.tsx"),
				Re = s("./src/reddit/icons/fonts/Share/index.tsx"),
				qe = s("./src/reddit/models/User/index.ts"),
				Ue = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Ve = s.n(Ue);
			const We = "-MiniCardModMenu",
				Ge = "-MiniCardOverflowMenu",
				Ke = "-MiniCardShareMenu",
				He = j.a.wrapped(Te.a, "HorizontalVotes", Ve.a),
				Ze = j.a.button("ShareButton", Ve.a),
				Je = Object(m.u)({
					currentProfileName: m.i,
					isCommentPermalink: m.w,
					isCommentsPage: m.x,
					isProfilePostListing: m.L,
					pageLayer: e => e
				}),
				Xe = Object(c.c)({
					layout: m.R,
					subreddit: m.r
				});
			var Qe = Je(Object(a.b)(Xe, {})(Object(P.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: o,
						hasModFullPerms: a,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: u,
						isProfilePostListing: m,
						isSticky: p,
						layout: h,
						modModeEnabled: b,
						onCommentsClick: f,
						post: _,
						sendEvent: x,
						showEditFlair: g,
						showEditPost: y,
						subreddit: v
					} = e, k = e => x(Object(ce.h)(_.id, e)), P = _.postId, C = Object(De.d)(We, _.id, u, p), j = !!n && Object(qe.e)(n) === _.author;
					return i.a.createElement("div", {
						className: Object(E.a)(Ve.a.flatlistContainer, s)
					}, i.a.createElement(He, {
						compact: !1,
						model: _,
						onVoteClick: r,
						scoreClassName: Ve.a.score
					}), i.a.createElement(Ne.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: u,
						postId: _.id,
						modModeEnabled: b,
						numComments: _.numComments,
						type: Z.g.Compact,
						onClick: f
					}), i.a.createElement(Me.a, {
						className: Ve.a.shareMenu,
						dropdownId: Object(De.d)(Ke, _.id, u, p),
						permalink: _.permalink,
						post: _,
						sendEventWithName: k,
						subredditType: null == v ? void 0 : v.type
					}, i.a.createElement(Ze, null, i.a.createElement(Re.a, {
						className: Ve.a.shareIcon
					}), i.a.createElement("span", {
						className: Ve.a.shareText
					}, Le.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && i.a.createElement(Ae.a, {
						dropdownId: C,
						onClick: () => k("post_mod_action_menu")
					}, i.a.createElement(De.b, {
						className: Ve.a.modActionsIcon
					}), i.a.createElement(Be.a, {
						canEditFlair: o && !!g,
						hasModPostPerms: c,
						hasModFullPerms: a,
						isOverlay: !!u,
						isPostAuthor: j,
						modModeEnabled: b,
						post: _,
						tooltipId: C
					})), i.a.createElement(ze.a, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!u,
						isProfilePostListing: m,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: _.permalink,
						postId: P,
						dropdownId: Object(De.d)(Ge, _.id, u, p),
						isFixed: p,
						sendEvent: x,
						showEditPost: !!y,
						showEditFlair: !!g,
						useFlatlistBreakpoints: Object(ze.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				Ye = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				$e = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				et = s("./src/reddit/components/MiniCardPost/index.m.less"),
				tt = s.n(et);
			var st = Object(m.u)()(Object(K.b)(Object(Oe.a)(Object(ge.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: r,
						crosspostSubredditOrProfile: o,
						currentUser: a,
						eventFactory: c,
						flairStyleTemplate: d,
						forceLoadMedia: l,
						hideNSFWPref: u,
						moderatorPermissions: m,
						modModeEnabled: p,
						onClickPost: h,
						post: b,
						scrollerItemRef: f,
						shouldPause: _,
						showMetaLine: x = !0,
						showEditFlair: g,
						subredditOrProfile: y,
						userIsOp: v
					} = e, {
						media: k
					} = r || b, P = k && k.type, C = Object(Ce.b)(b.id), j = P === Ie.o.RTJSON, O = v && j, w = Object(Fe.a)(m), S = Object(we.a)(m), I = Object(Se.a)(m), L = k && P !== Ie.o.RTJSON && P !== Ie.o.TEXT, N = P === Ie.o.VIDEO || P === Ie.o.GIFVIDEO || P === Ie.o.LIVEVIDEO, T = !k && !!b.source && Object(ye.a)(b.source.url), D = k && i.a.createElement(ke.a, {
						autoplayPref: t,
						availableWidth: s,
						className: tt.a.media,
						imageBoxClassName: Object(E.a)(tt.a.mediaImageBox, {
							[tt.a.videoStyles]: N
						}),
						imageBoxContentImageClassName: tt.a.mediaImageBoxContentImage,
						forceAspectRatio: Ie.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || b,
						scrollerItemRef: f,
						shouldPause: _,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(Ee.a, {
						className: Object(E.a)(tt.a.postContainer, X.a.largeAndMediumActiveStyles, X.a.largeAndMediumPostStyles, Object(F.a)(e), n),
						style: {
							...Object(F.b)(e.flairStyleTemplate),
							...Object(F.d)(e)
						},
						post: b,
						onClick: h,
						eventFactory: c
					}, i.a.createElement(Pe.a, {
						className: tt.a.backgroundWrapper,
						flairStyleTemplate: d
					}, L && D, i.a.createElement("div", {
						className: tt.a.innerContainer
					}, T && i.a.createElement($e.a, {
						post: b,
						templatePlaceholderImage: d ? d.postPlaceholderImage : void 0
					}), i.a.createElement(je.c, {
						className: tt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: b,
						size: je.b.Large,
						titleColor: d && d.postTitleColor
					}), x && y && i.a.createElement(Ye.a, {
						className: tt.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: u,
						post: b,
						subredditOrProfile: y
					}), !L && i.a.createElement("div", {
						className: tt.a.mediaWrapper
					}, D), i.a.createElement("div", {
						className: tt.a.flexSpacer
					}), i.a.createElement(Qe, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: I,
						hasModPostPerms: w,
						modModeEnabled: p,
						post: b,
						showEditFlair: g,
						showEditPost: O
					}))), e.activeModalId === C && i.a.createElement(Ce.a, {
						flairs: b.flair,
						subredditId: b.belongsTo.id,
						modalId: C,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(ve.d, null))
				})))),
				nt = s("./src/reddit/helpers/getClickInfo.ts"),
				rt = s("./src/reddit/helpers/localStorage/index.ts"),
				ot = s("./src/reddit/selectors/user.ts"),
				it = s("./src/reddit/icons/fonts/index.tsx"),
				at = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				ct = s.n(at);
			const {
				fbt: dt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var lt = e => i.a.createElement("div", {
					className: Object(E.a)(ct.a.container, e.className)
				}, i.a.createElement(it.a, {
					name: "pin",
					className: ct.a.pin
				}), i.a.createElement("div", {
					className: ct.a.title
				}, dt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				ut = s("./src/reddit/controls/TextButton/index.tsx"),
				mt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				pt = s.n(mt);
			const {
				fbt: ht
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var bt = e => i.a.createElement(lt, {
					className: Object(E.a)(pt.a.container, e.className)
				}, i.a.createElement("div", {
					className: pt.a.description
				}, ht._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(ut.a, {
					className: pt.a.gotIt,
					onClick: e.onGotItClick
				}, ht._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				ft = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				_t = s.n(ft);
			const {
				fbt: xt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), gt = 320, yt = 300, vt = Object(c.c)({
				arePinnedPostsLoaded: I.a,
				currentUser: ot.k,
				pinnedPostIds: I.P
			}), kt = Object(a.b)(vt, e => ({
				openPost: t => e(Object(xe.L)(t))
			}));
			class Pt extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = _e()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < yt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(rt.Pb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(nt.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(st, {
						postId: e,
						key: e,
						availableWidth: gt,
						className: Object(E.a)(_t.a.item, _t.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(rt.M)()
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
					const a = n && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _t.a.title
					}, xt._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? i.a.createElement(bt, {
						className: Object(E.a)(_t.a.item, _t.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: _t.a.container
					}, t.map(this.renderPost), a && i.a.createElement(lt, {
						className: _t.a.item
					})), s)
				}
			}
			var Et = Object(m.u)()(kt(Pt)),
				Ct = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				jt = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Ot = s("./src/reddit/helpers/name/index.ts"),
				wt = s("./src/reddit/helpers/trackers/screenview.ts"),
				St = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ft = s("./src/reddit/layout/page/Listing/index.tsx"),
				It = s("./src/reddit/models/ContentGate.ts"),
				Lt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Nt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = (e, {
					location: t
				}) => r()([...Object(d.a)(t.search)]),
				At = Object(m.u)(),
				Bt = Object(c.a)(m.E, ot.jb, Dt, m.R, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(B.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(f.a)(e, Dt(0, t)), (e, {
					match: t
				}) => !Object(I.n)(e, {
					profileName: t.params.profileName
				}), ot.P, (e, {
					match: t
				}) => Object(ot.f)(e, p.jc + t.params.profileName), Nt.a, (e, t, s, n, r, o, i, {
					sort: a,
					t: c
				}, d, l, m, h) => {
					const b = p.ub,
						f = Object(u.a)(r, b, a, s),
						{
							sort: _
						} = s;
					return {
						contentGateInfo: m,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: n,
						listingKey: f,
						profileName: r,
						shouldShowPinnedPostsSection: d && !_,
						sort: a,
						timeSort: c,
						isEligibleForNsfwSignupUpsellTreatment: h
					}
				}),
				zt = Object(a.b)(Bt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(_.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(b.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(d.a)(t.location.search)])
					}))
				}));
			class Mt extends i.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => i.a.createElement(g.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isOwnProfile: s,
						isProfileNSFW: n,
						listingKey: r,
						onLayoutChange: o,
						pageLayer: a,
						profileName: c,
						sort: d,
						shouldShowPinnedPostsSection: u,
						showSignupUpsell: m,
						timeSort: h,
						isEligibleForNsfwSignupUpsellTreatment: b
					} = this.props;
					if (!a) return null;
					if (e && e.profileDeleted) return i.a.createElement(x.default, {
						contentGateType: It.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return i.a.createElement(x.default, {
						contentGateType: It.a.ProfileSuspended,
						profileName: c
					});
					if (451 === a.status || e && e.profileBlockedForLegalReason) return i.a.createElement(x.default, {
						contentGateType: It.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === a.status) return i.a.createElement(Lt.a, null);
					if (404 === a.status) return i.a.createElement(x.default, {
						contentGateType: It.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const f = c.toLowerCase(),
						_ = `/user/${c}/`,
						g = {
							listingKey: r,
							listingName: f
						};
					if (n && !s && b) return i.a.createElement(jt.a, {
						contentTitle: Object(Ot.d)(c)
					});
					if (!t && n && !s) return i.a.createElement(x.default, {
						subredditName: c,
						contentGateType: It.a.Nsfw
					});
					const k = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: r,
							listingName: f,
							listingViewed: (e, t) => Object(wt.q)(r, d, t, e, h),
							noPostsComponent: this.renderNoPosts,
							onScroll: m,
							onTryAgain: o
						},
						P = {
							sort: d,
							baseUrl: _,
							sortOptions: p.Ab,
							timeSort: h
						},
						E = i.a.createElement(i.a.Fragment, null, u && i.a.createElement(Et, {
							profileName: c
						}), i.a.createElement(y.a, P), i.a.createElement(he, Tt({}, k, {
							excludePinnedPosts: u,
							onLoadMore: this.props.onLoadMoreConversationsItems
						})));
					return i.a.createElement(Ft.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(be.a, {
							profileName: c
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(v.a, null), E),
						sidebar: i.a.createElement(Ct.a, Tt({}, g, {
							profileName: c
						}))
					})
				}
			}
			t.default = At(zt(Object(h.a)(Object(St.d)(Mt))))
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
					experimentName: n.yc
				});
				return !(!t || Object(n.zf)(t))
			}
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					expEventOverride: t
				})
			}
			const l = d(r.Jb, !0),
				u = d(r.Jb, !1),
				m = d(r.Kb, !0),
				p = (d(r.Kb, !1), Object(n.a)(l, m, (e, t) => e === r.fc.Enabled || t === r.gc.Enabled))
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
				return h
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.cc.Bottom_cell_dismissible]: e,
						[r.cc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.cc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.pb, !0),
				u = d(r.qb, !0),
				m = d(r.rb, !0),
				p = d(r.pb, !1),
				h = d(r.qb, !1),
				b = d(r.rb, !1)
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
				return y
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
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
					const n = Object(i.W)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : u
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, n, r) => {
					const i = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							i = r && Object(o.G)(e, {
								postId: n
							}) || null,
							a = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				b = [3],
				f = Object(n.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const n = t.slice().sort();
					let r = -1;
					const i = Object(o.z)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = r + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !h(e, s, t, i, n);) s += 1;
							s < i.length && (a.push(s), r = s)
						}
					}), a
				}),
				_ = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.O)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
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
					return Boolean(t) && !Object(r.zf)(t)
				},
				c = Object(n.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"b2ec21536710"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.5e61b29d26669379cd5c.js.map