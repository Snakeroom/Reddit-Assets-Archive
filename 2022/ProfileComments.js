// https://www.redditstatic.com/desktop2x/ProfileComments.9e881fa5e93c0345fc53.js
// Retrieved at 9/26/2022, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./node_modules/linkify-it/index.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(r) {
						e[r] = t[r]
					}))
				})), e
			}

			function s(e) {
				return Object.prototype.toString.call(e)
			}

			function o(e) {
				return "[object Function]" === s(e)
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
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
						}
					}
				},
				l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(l), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function d(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var r = e.__schemas__[t];
					if (null !== r) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === s(r)) return ! function(e) {
							return "[object RegExp]" === s(e)
						}(r.validate) ? o(r.validate) ? n.validate = r.validate : d(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(o(r.normalize) ? n.normalize = r.normalize : r.normalize ? d(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(r) ? d(t, r): c.push(t)
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
				var r = e.__index__,
					n = e.__last_index__,
					s = e.__text_cache__.slice(r, n);
				this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = s, this.text = s, this.url = s
			}

			function p(e, t) {
				var r = new m(e, t);
				return e.__compiled__[r.schema].normalize(r, e), r
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, s, o, a, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (s = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = r.index + r[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = a)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) r.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, r) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = r("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = r("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = r("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = r("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				s = r("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(s(e, t), 1)
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
		"./src/chat/controls/Svg/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/chat/controls/Svg/index.m.less"),
				c = r.n(i);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: n,
						hover: a
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: r,
						[c.a.active]: n,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "i", (function() {
				return C
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				o = r("./node_modules/tlds/index.js"),
				a = r.n(o),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./node_modules/lodash/values.js"),
				l = r.n(c);
			const d = e => l()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				h = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				_ = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				b = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = s()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				y = p.normalize;
			p.normalize = e => {
				y.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const r = d(e.text);
						return !r || r && t
					})
				},
				x = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				k = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				C = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const r = t[0];
						return r.lastIndex === e.length ? r : ((e, t) => {
							const r = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(r)) return t.lastIndex += r.length, t.url += r, t
						})(e, r)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const o = Object(s.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileCommentsPending", (function() {
				return B
			})), r.d(t, "profileCommentsLoaded", (function() {
				return z
			})), r.d(t, "profileCommentsFailed", (function() {
				return A
			})), r.d(t, "profileCommentsRequested", (function() {
				return N
			})), r.d(t, "moreItemsPending", (function() {
				return T
			})), r.d(t, "moreItemsLoaded", (function() {
				return R
			})), r.d(t, "moreItemsFailed", (function() {
				return q
			})), r.d(t, "moreItemsRequested", (function() {
				return M
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/difference.js"),
				s = r.n(n),
				o = r("./node_modules/lodash/pick.js"),
				a = r.n(o),
				i = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				l = r("./src/reddit/actions/contentGate.ts"),
				d = r("./src/reddit/actions/externalAccount.ts"),
				u = r("./src/reddit/actions/moderatingSubreddits.ts"),
				m = r("./src/reddit/actions/pages/profileShared.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				h = r("./src/reddit/actions/profile/index.ts"),
				_ = r("./src/reddit/actions/subreddit.ts"),
				f = r("./src/reddit/constants/errors.ts"),
				b = r("./src/reddit/constants/parameters.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/config.ts"),
				v = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				x = r("./src/lib/constants/index.ts"),
				k = r("./src/lib/makeApiRequest/index.ts"),
				C = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				w = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t, r, n) => {
				let s = Object(C.a)(Object(v.a)(Object(w.a)(Object(j.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return n && (s = Object(E.a)(s)), Object(k.a)(e, {
					data: r,
					endpoint: s,
					method: x.nb.GET
				})
			};
			var O = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				P = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				D = r("./src/reddit/selectors/profile.ts"),
				S = r("./src/reddit/selectors/profileComments.ts"),
				I = r("./src/reddit/actions/pages/profileComments/constants.ts");
			const B = Object(i.a)(I.f),
				z = Object(i.a)(I.e),
				A = Object(i.a)(I.d),
				N = e => async (t, r, n) => {
					const {
						queryParams: s,
						params: o
					} = e, {
						sort: i,
						t: g
					} = Object(m.b)(s), {
						profileName: y
					} = o, v = Object(c.a)(`u_${y}`, i, e.queryParams), {
						profileCommentsPage: x
					} = r(), k = x.commentIds[v], C = x.api.error[v], E = x.api.pending[v];
					if (await t(h.d(y)), E || k && !C) {
						if (k) {
							const e = Object(D.r)(r(), {
								profileName: y
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					const w = {
						...a()(e.queryParams, [...b.k, b.g]),
						sort: i,
						t: Object(O.a)(i, g)
					};
					t(B({
						key: v
					}));
					const j = await Object(P.a)("profileComments", () => F(n.apiContext(), y, w, Object(L.a)(r())));
					if (!j.ok) return t(A({
						account: j.body.data ? j.body.data.account : null,
						error: j.body.reason ? {
							type: j.body.reason
						} : j.error,
						key: v
					})), j.body.reason === f.a.DeletedProfile && t(Object(l.u)({
						profileName: y
					})), void t(p.n(j.status));
					const S = j.body;
					t(z({
						key: v,
						meta: r().meta,
						...S
					})), await Promise.all([t(Object(m.c)(y)), t(Object(_.q)()), t(Object(u.b)()), t(d.o(y))])
				}, T = Object(i.a)(I.c), R = Object(i.a)(I.b), q = Object(i.a)(I.a), M = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const o = t(),
						{
							currentPage: i
						} = o.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: l,
						params: d
					} = i.routeMatch.match, {
						sort: u,
						t: p
					} = Object(m.b)(l), {
						profileName: h
					} = d, _ = Object(c.a)(`u_${h}`, u, l), f = Object(S.d)(o, {
						listingKey: _
					});
					if (!f) return;
					const y = Object(S.b)(o, {
							listingKey: _
						}),
						v = Object(S.c)(o, {
							listingKey: _
						}),
						x = v && v[f.token];
					if (y || x) return;
					e(T({
						key: _,
						fetchedToken: f.token
					}));
					const k = await F(n(), h, {
						after: f.token,
						dist: f.dist,
						sort: u,
						t: p,
						...a()(l, b.k),
						layout: Object(g.S)(o, {}).toLowerCase()
					}, Object(L.a)(o));
					if (k.ok) {
						const t = Object(S.f)(o, {
								listingKey: _
							}),
							r = {
								...k.body,
								commentIds: s()(k.body.commentIds, t)
							};
						e(R({
							fetchedToken: f.token,
							key: _,
							meta: o.meta,
							...r
						}))
					} else e(q({
						account: k.body.data ? k.body.data.account : null,
						error: k.error,
						fetchedToken: f.token,
						key: _
					}))
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loginHref/index.ts"),
				m = r("./src/reddit/actions/contentGate.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				h = r("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				_ = r("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = r("./src/reddit/components/Footer/index.tsx"),
				b = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = r("./src/reddit/components/RichTextJson/index.tsx"),
				y = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = r("./node_modules/lodash/flatMap.js"),
				x = r.n(v),
				k = r("./src/lib/linkMatchers/index.ts"),
				C = r("./src/lib/linkMatchers/customLinks.ts"),
				E = r("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(w);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, o] = t.slice(n, n + 3);
						r.push(e), r.push([o, s])
					}
					return r
				};
			var F = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = x()(t, j)), e.parseRegularLinks && (t = x()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return o.a.createElement(E.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return o.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				O = r("./src/reddit/constants/parameters.ts"),
				P = r("./src/reddit/contexts/PageLayer/index.tsx"),
				L = r("./src/reddit/controls/Button/index.tsx"),
				D = r("./src/chat/controls/Svg/index.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => o.a.createElement(D.a, S({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = r("./src/reddit/models/ContentGate.ts"),
				z = r("./src/lib/constants/index.ts"),
				A = r("./src/reddit/selectors/platform.ts"),
				N = r("./src/reddit/selectors/user.ts");
			var T = r("./src/reddit/selectors/meta.ts"),
				R = r("./src/reddit/components/ContentGate/index.m.less"),
				q = r.n(R);
			const {
				fbt: M
			} = r("./node_modules/fbt/lib/FbtPublic.js"), U = d.a.wrapped(I, "PrivateKey", q.a), Z = d.a.div("ButtonsContainer", q.a), W = d.a.div("Container", q.a), H = d.a.div("ContainerExp", q.a), K = d.a.div("Description", q.a), G = d.a.div("PrivateSubredditDetails", q.a), V = d.a.div("PrivateSubredditDescription", q.a), J = d.a.h3("PrivateSubredditName", q.a), $ = d.a.a("Link", q.a), Q = d.a.wrapped(L.n, "LinkRouterButton", q.a), Y = d.a.wrapped(L.m, "LinkButton", q.a), X = d.a.wrapped(L.q, "SecondaryLinkRouterButton", q.a), ee = d.a.wrapped(L.p, "SecondaryLinkButton", q.a), te = d.a.wrapped(Q, "GoHomeLinkButton", q.a), re = d.a.wrapped(_.a, "CreateCommunityButton", q.a), ne = d.a.img("Image", q.a), se = d.a.img("ImagePlaceholder", q.a), oe = d.a.wrapped(Q, "LeftLinkRouterButton", q.a), ae = d.a.wrapped(Y, "LeftLinkButton", q.a), ie = d.a.wrapped(ee, "SecondaryLeftLinkButton", q.a), ce = d.a.wrapped(X, "SecondaryLeftLinkRouterButton", q.a), le = d.a.h3("Title", q.a), de = d.a.div("PageBody", q.a), ue = d.a.div("InterstitialMessageWrapper", q.a), me = Object(l.c)({
				isLoggedIn: N.P,
				origin: T.k,
				user: N.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(N.Q)(e)) return !1;
					const t = Object(A.d)(e);
					if (!t) return !1;
					const r = Object(N.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * z.D;
					return n > Date.now() - s
				})(e),
				isSeo: T.h
			}), pe = Object(P.u)(), he = Object(a.b)(me, (e, t) => {
				let {
					subredditName: r
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(r)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(r)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.q)())
					}
				}
			}), _e = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: d,
					location: p,
					origin: _,
					pageLayer: f,
					quarantineRequiresEmail: v,
					quarantineMessage: x,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: C,
					interstitialWarningMessage: E,
					interstitialWarningMessageHtml: w,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: P,
					subredditDescription: L,
					subredditName: D,
					user: S
				} = e, I = async () => {
					if (i ? await P() : await Object(m.p)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(O.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case B.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(le, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", D)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(Z, null, S ? o.a.createElement(ie, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ae, {
							href: Object(u.a)(p, _),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, _),
							redditStyle: !0
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(le, null, r === B.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(Z, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, M._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: I,
							redditStyle: !0
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement(le, null, "r/", D, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), L && L.length && o.a.createElement(G, null, o.a.createElement(J, null, "r/", D), o.a.createElement(V, null, o.a.createElement("div", null, L))), o.a.createElement(K, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", D, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(Z, null, S ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(ie, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${D}`,
							redditStyle: !0
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(u.a)(p, _),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), D && o.a.createElement(y.a, {
							subredditName: D
						}));
					case B.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(le, null, M._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, M._("This community is {=quarantined}", [M._param("=quarantined", o.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, M._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, C ? o.a.createElement(g.b, {
							content: C,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : k ? o.a.createElement(b.a, {
							html: k
						}) : x || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), M._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(Z, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? o.a.createElement(Z, null, o.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Y, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, M._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(Z, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, M._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, s, v)));
					case B.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(le, null, M._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(K, null, o.a.createElement(ue, null, j ? o.a.createElement(g.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : w ? o.a.createElement(b.a, {
							html: w
						}) : E), M._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(Z, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, M._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: a,
							redditStyle: !0
						}, M._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case B.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(le, null, M._("r/{community name} has been banned from Reddit", [M._param("community name", D)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(F, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(Z, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(Z, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, null), o.a.createElement(le, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(Z, null, S && o.a.createElement(re, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", o.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(le, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(Z, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(Z, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(Z, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(he(Object(i.i)(e => {
				const t = Object(s.useContext)(c.a) ? H : W;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(de, null, _e(e))), o.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("ContributorRequestButton").then(r.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, r) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = r.n(f),
				g = r("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				v = g.a.wrapped(d.c, "StyledTooltip", b.a),
				x = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(_.pb)(e),
					userIsSuspended: _.X
				});
			t.a = Object(a.b)(x, (e, t) => {
				let {
					eventSource: r
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(r)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: r,
					onShowTooltip: s,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: d || l,
					onClick: e => {
						u && u(e), i(c)
					},
					onMouseEnter: s,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: y,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: y,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Footer/index.m.less"),
				l = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.div("UserAgreement", l.a), m = i.a.a("UserAgreementLink", l.a), p = i.a.a("PrivacyLink", l.a);
			var h;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(h || (h = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(a.a)(l.a.FooterContainer, {
					[l.a.mIsGrey]: e.textColor === h.Grey,
					[l.a.mIsWhite]: e.textColor === h.White
				})
			}, s.a.createElement(u, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", s.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "YviZP"
			}))), d._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, r) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/ClassicPost/index.tsx"),
				a = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/react-redux/es/index.js")),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/constants/gold.ts"),
				l = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/components/CommentContainer/index.tsx"),
				p = r("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = r("./src/reddit/helpers/getClickInfo.ts"),
				_ = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/communityAwards.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/OverviewChronoComment/index.m.less"),
				v = r.n(y);
			const x = Object(a.b)(() => Object(i.c)({
				comment: f.b,
				isAwarded: (e, t) => {
					const r = Object(f.b)(e, t);
					return !(!r || !r.awardCountsById) && Object.keys(r.awardCountsById).some(t => {
						const r = Object(b.a)(e, t);
						return r && r.coinPrice >= c.g
					})
				},
				isNightmodeOn: g.db
			}), e => ({
				openPost: t => e(Object(u.L)(t))
			}));
			var k = Object(d.a)(x(e => {
					const {
						comment: t,
						commentId: r,
						first: n,
						isAwarded: o,
						isNightmodeOn: a,
						last: i,
						openPost: c,
						showModTools: d
					} = e;
					if (!t) return null;
					return s.a.createElement(m.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(_.e)(e)
						}
					}, s.a.createElement("div", {
						className: Object(l.a)(v.a.commentOuterWrapper, {
							[v.a.isLast]: i,
							[v.a.isAwarded]: o,
							[v.a.isNightmodeOn]: a
						})
					}, s.a.createElement("div", {
						className: Object(l.a)(v.a.commentWrapper, {
							[v.a.isFirst]: n
						})
					}, s.a.createElement("div", {
						className: v.a.commentSeparator
					}), t.parentId && s.a.createElement("div", {
						className: v.a.commentSeparator
					}), s.a.createElement("div", {
						className: v.a.commentContentWrapper
					}, s.a.createElement(p.a, {
						commentId: r,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: d,
						isExpanded: !0
					})))))
				})),
				C = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				E = r("./src/reddit/contexts/PageLayer/index.tsx"),
				w = r("./src/reddit/helpers/isComment.ts"),
				j = r("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				F = r.n(j),
				O = r("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(E.u)({
					currentProfileName: E.i,
					isCommentsPage: E.x,
					isCommentPermalink: E.w,
					isProfilePostListing: E.L,
					pageLayer: e => e
				}),
				D = O.a.wrapped(C.a, "OverviewCommentPost", F.a),
				S = O.a.wrapped(o.default, "ClassicPost", F.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: r,
					isLastInCommentList: n,
					allowModToolsUnderComments: o,
					height: a,
					width: i,
					...c
				} = e;
				return Object(w.a)(t) ? r ? s.a.createElement(s.a.Fragment, null, s.a.createElement(D, P({}, c, {
					availableWidth: i,
					commentId: t
				})), s.a.createElement(k, {
					commentId: t,
					first: r,
					last: n,
					showModTools: o
				})) : s.a.createElement(k, {
					commentId: t,
					first: r,
					last: n,
					showModTools: o
				}) : s.a.createElement(S, P({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, r) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: r,
					isLast: n,
					...a
				} = e;
				return s.a.createElement("div", c({
					className: Object(o.a)(i.a.border, {
						[i.a.isFirst]: r,
						[i.a.isLast]: n
					}, t)
				}, a))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/times.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/constants/gold.ts"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				m = r("./src/reddit/components/CommentContainer/index.tsx"),
				p = r("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = r("./src/reddit/actions/post.ts"),
				_ = r("./src/reddit/helpers/getClickInfo.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/communityAwards.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				v = r.n(y);
			const x = u.a.div("ProfileOwnerCommentWrapper", v.a),
				k = u.a.div("CommentContentWrapper", v.a),
				C = u.a.div("Wrapper", v.a),
				E = u.a.div("CommentSeparator", v.a),
				w = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const r = Object(f.b)(e, t);
						return !(!r || !r.awardCountsById) && Object.keys(r.awardCountsById).some(t => {
							const r = Object(b.a)(e, t);
							return r && r.coinPrice >= l.g
						})
					},
					isNightmodeOn: g.db
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class j extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: r,
						openPost: n,
						isAwarded: o,
						isFirst: i,
						isLast: c,
						isNightmodeOn: l,
						profileName: u,
						showModTools: p
					} = this.props, h = u === e.author ? F : O;
					return a.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(_.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(C, {
						className: Object(d.a)({
							[v.a.isFirst]: i,
							[v.a.isLast]: c,
							[v.a.isAwarded]: o,
							[v.a.isNightmodeOn]: l
						})
					}, s()(r + 1, e => a.a.createElement(E, {
						key: e
					})), a.a.createElement(k, null, h(t, u, p))))
				}
			}
			const F = (e, t, r) => a.a.createElement(x, null, O(e, t, r, !0, !0)),
				O = function(e, t, r) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						s = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: r,
						isExpanded: !!s
					})
				};
			t.a = w(j)
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/last.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/opener/index.ts"),
				l = r("./src/reddit/constants/adEvents.ts"),
				d = r("./src/reddit/components/PostList/LoadMore.tsx"),
				u = r("./src/reddit/components/PostList/Placeholder.tsx"),
				m = r("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = r("./src/reddit/components/Scroller/Simple.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				_ = r("./src/reddit/helpers/getClickInfo.ts"),
				f = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/contexts/Post/index.tsx"),
				g = r("./src/lib/LRUCache/index.ts"),
				y = r("./src/telemetry/index.ts"),
				v = r("./src/telemetry/models/Timer.ts"),
				x = r("./src/reddit/components/PostList/index.m.less"),
				k = r.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 500,
				w = new g.a(E),
				j = new g.a(E),
				F = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				O = (e, t, r, n, s, o) => {
					const a = `entered-${e}-${t}-${r?`last-${n}-${s}`:""}`;
					let i = w.get(a);
					return void 0 === i && (i = () => {
						r && o.onBottomViewed(n, s), o.trackOnPostEnteredViewport(e, t)
					}, w.set(a, i)), i
				},
				P = (e, t) => {
					const r = `click-${e}`;
					let n = j.get(r);
					return void 0 === n && (n = (e, r) => {
						r.isSponsored && t.fireAdPixelsOfType(r, l.a.Click), r.isSponsored && r.source && r.source.outboundUrl ? Object(c.e)(r.source.outboundUrl, c.d.BLANK) : t.openPost({
							postOrComment: r,
							clickInfo: Object(_.a)(e)
						})
					}, j.set(r, n)), n
				};
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(E), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && y.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = y.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = y.c.end(this.timerId);
						setTimeout(() => Object(y.b)(i.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && y.c.cancel(this.timerId), e.itemIds.length && (this.timerId = y.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && y.c.has(this.timerId)) {
						const e = y.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(y.b)(i.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && y.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && s()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: r
					} = this.props;
					return y.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (r || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: r
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = y.c.end(e);
					setTimeout(() => r(t(n, v.TimerType.InApp)), 0)
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
						...r
					} = this.props, {
						itemIds: n,
						...s
					} = e, o = Object.keys(r), a = Object.keys(s);
					return a.length !== o.length || !!a.some(e => r[e] !== s[e])
				}
				scrollChildForItem(e, t, r, n, s, o) {
					const {
						listingKey: i,
						listingName: c,
						postClickEventFactory: l
					} = this.props, d = `post-${o}-${e}-${t}-${r?"last-index":""}-${c}-${i}`;
					let u;
					if (void 0 === (u = this.scrollChildCache.get(d))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: m
						} = this.props, p = m[e], h = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, _ = O(p, o, r, i, c, this.props), f = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: s,
							isOverlay: !1,
							itemId: e,
							last: r,
							layout: o,
							onClickPost: P(e, this.props),
							postId: p
						}, g = this.props.itemComponent;
						u = {
							estHeight: this.props.estimateItemHeight(e, o, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: _,
							render: e => a.a.createElement(b.a, {
								postId: f.postId
							}, a.a.createElement(g, C({}, f, e)))
						}, this.scrollChildCache.set(d, u)
					}
					return u
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
						layout: r,
						onTryAgain: n
					} = this.props;
					return a.a.createElement("div", {
						className: k.a.placeholder
					}, a.a.createElement(u.a, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && a.a.createElement(m.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: r,
						onLoadMore: n
					} = this.props;
					return a.a.createElement("div", {
						className: k.a.placeholder
					}, a.a.createElement(d.a, {
						isLoading: !!t,
						layout: r,
						countOverride: F[r]
					}), !!e && a.a.createElement(m.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: r,
						itemIds: n,
						onLoadMore: s
					} = this.props, o = n.map((r, s, o) => {
						const a = s === n.length - 1,
							i = s && n[s - 1],
							c = !a && n[s + 1],
							l = !!Object(f.a)(r) && (!i || !Object(f.a)(i) || e[i].postId !== e[r].postId),
							d = !!Object(f.a)(r) && (!c || !Object(f.a)(c) || e[c].postId !== e[r].postId);
						return this.scrollChildForItem(r, s, a, l, d, t)
					});
					return a.a.createElement("div", null, a.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: r && r.token ? r.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: s,
						viewportTopPadding: h.f + h.r
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = L
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("SubredditSearchCarousel").then(r.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				l = e => {
					const t = Object(a.e)(i.e),
						r = Object(a.e)(i.a);
					return t || r ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router-redux/es/index.js"),
				l = r("./src/higherOrderComponents/asModal/helpers.ts"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/reddit/actions/login.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				h = r("./src/reddit/components/Footer/index.tsx"),
				_ = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/counters/nsfwblocking.ts"),
				y = r("./src/reddit/selectors/telemetry.ts");
			const v = "nsfw_dialog";
			var x = e => a.a.createElement("svg", {
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
				k = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				C = r("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				E = r.n(C);
			const w = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				j = e => {
					const t = Object(i.d)(),
						r = Object(_.b)(),
						n = Object(i.e)(k.f),
						u = Object(o.useCallback)(() => {
							n === k.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						h = (e => e ? a.a.createElement("div", {
							className: E.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: E.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === k.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(g.c)(n)
					}, [n]), a.a.createElement("div", {
						className: Object(d.a)(E.a.mainCta)
					}, a.a.createElement(x, null), h, a.a.createElement("div", {
						className: E.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: E.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: E.a.buttonContainer
					}, a.a.createElement(b.j, {
						className: Object(d.a)(E.a.logIn),
						onClick: () => {
							r((() => e => ({
								...Object(y.o)(e),
								source: "xpromo",
								action: "click",
								noun: v
							}))()), u(), Object(g.b)(g.a.Login), t(Object(m.openLoginModal)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(b.j, {
						className: E.a.cancel,
						onClick: () => {
							Object(l.b)(), r((() => e => ({
								...Object(y.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: v
							}))()), Object(g.b)(g.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				F = Object(u.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: E.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: E.a.qrCodeInner
					}, a.a.createElement("img", {
						className: E.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: E.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: E.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: E.a.sneakySnoo,
						src: t
					})))
				}),
				O = e => {
					const t = Object(_.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(y.o)(e),
							source: "xpromo",
							action: "view",
							noun: v
						}))())
					}, [t]);
					const {
						contentTitle: r
					} = e, n = Object(i.e)(k.g), s = Object(i.e)(k.h), o = Object(i.e)(k.f), c = o === k.a.Blurred ? h.a.White : o === k.a.NoPreview ? h.a.Grey : void 0;
					return a.a.createElement("div", {
						className: E.a.container
					}, a.a.createElement(j, {
						contentTitle: r
					}), a.a.createElement("div", {
						className: Object(d.a)(E.a.footerWrapper, {
							[E.a.mIsModal]: o === k.a.Blurred
						})
					}, a.a.createElement(h.b, {
						textColor: c
					})), a.a.createElement(F, {
						qrCodeAsset: (() => n === f.Rc.Enabled || s === f.sb.BlurredPreview || s === f.sb.NoPreview ? w.d2x_nsfw_signup_blocking_de_v1 : w.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, r) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/pages/ErrorPages/index.m.less"),
				c = r.n(i);
			const l = e => {
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
				d = e => {
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
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, r) {
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
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-router/esm/react-router.js"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/models/Event.ts");
			var c = r("./src/reddit/hooks/useTracking.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx");
			var d = e => s.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, s.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), s.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), s.a.createElement("defs", null, s.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, s.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = r.n(m);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: r,
					avatar: o,
					history: m,
					location: _
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
					}))(r))
				}, [f, r]), s.a.createElement("div", {
					className: p.a.container
				}, s.a.createElement(d, {
					className: p.a.accent
				}), s.a.createElement("div", {
					className: p.a.avatarContainer
				}, s.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: h._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), s.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, s.a.createElement(l.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), s.a.createElement("h3", {
					className: p.a.title
				}, h._("u/{name} is blocked", [h._param("name", t)], {
					hk: "18rExM"
				})), s.a.createElement("p", {
					className: p.a.subtitle
				}, h._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), s.a.createElement("div", {
					className: p.a.btnContainer
				}, s.a.createElement(u.t, {
					className: p.a.btn,
					to: `${_.pathname}?consent=true`,
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
					}))(r)),
					isFullWidth: !0,
					isSquare: !0
				}, h._("Continue", null, {
					hk: "3eqDZf"
				})), s.a.createElement(u.t, {
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
						}))(r)), m.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, h._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/extractQueryParams/index.ts"),
				u = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				p = r("./src/reddit/actions/pages/profileComments/index.ts"),
				h = r("./src/reddit/actions/pages/profileShared.ts"),
				_ = r("./src/reddit/components/ContentGate/index.tsx"),
				f = r("./src/reddit/components/EmptyProfile/index.ts"),
				b = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = r("./src/reddit/components/JumpToContent/index.tsx"),
				y = r("./src/lib/classNames/index.ts"),
				v = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = r("./src/lib/lessComponent.tsx"),
				k = r("./src/reddit/components/ClassicPost/index.tsx"),
				C = r("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				E = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = r("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				j = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				F = r("./src/reddit/constants/postLayout.ts"),
				O = r("./src/reddit/contexts/PageLayer/index.tsx"),
				P = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				L = r("./src/reddit/selectors/commentSelector.ts"),
				D = r("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				S = r.n(D);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const B = x.a.wrapped(k.default, "ClassicPost", S.a),
				z = x.a.wrapped(E.a, "OverviewCommentPost", S.a),
				A = Object(O.u)({
					currentProfileName: O.i,
					pageLayer: e => e
				}),
				N = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: r
						} = t;
						return Object(L.b)(e, {
							commentId: r
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: r
						} = t;
						if (r) return ((e, t) => {
							const {
								users: r
							} = e, n = t.toLowerCase(), s = r.models[n];
							return s ? s.username : void 0
						})(e, r)
					}
				});
			var T = A(Object(i.b)(N)(e => {
				const {
					comment: t,
					itemId: r,
					isFirstInCommentList: n,
					isLastInCommentList: s,
					layout: o,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (o === F.g.Compact) return a.a.createElement(C.a, e);
				const {
					height: l,
					width: d,
					...u
				} = e;
				return a.a.createElement(R, u, n && a.a.createElement(w.a, {
					isFirst: !0
				}, o === F.g.Large ? a.a.createElement(B, I({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(z, I({}, e, {
					commentId: r,
					profileName: i
				}))), a.a.createElement(w.a, {
					isLast: s
				}, a.a.createElement(j.a, {
					commentId: r,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: r,
					profileName: i,
					showModTools: c
				})))
			}));
			const R = Object(v.a)(e => a.a.createElement("div", {
				className: Object(y.a)(S.a.backgroundMargin, {
					[S.a.isFirstInCommentList]: e.isFirstInCommentList,
					[S.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(P.e)(e)
				}
			}, e.children));
			var q = r("./src/reddit/components/ProfileItemList/index.tsx"),
				M = r("./node_modules/lodash/noop.js"),
				U = r.n(M),
				Z = r("./src/reddit/actions/ads/index.ts"),
				W = r("./src/reddit/actions/comment/list.ts"),
				H = r("./src/reddit/actions/post.ts"),
				K = r("./src/reddit/components/TrackingHelper/index.tsx"),
				G = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				V = r("./src/reddit/helpers/trackers/post.ts"),
				J = r("./src/reddit/featureFlags/index.ts"),
				$ = r("./src/reddit/selectors/comments.ts"),
				Q = r("./src/reddit/selectors/posts.ts"),
				Y = r("./src/reddit/selectors/profileComments.ts"),
				X = r("./src/reddit/selectors/subreddit.ts"),
				ee = r("./src/reddit/selectors/tracking.ts"),
				te = r("./src/reddit/selectors/user.ts");
			const re = Object(O.u)(),
				ne = {
					apiError: Y.a,
					apiPending: Y.b,
					currentUser: te.k,
					measureScrollFPS: J.d.measureScrollFPS,
					layout: O.S,
					loadMore: Y.d,
					subredditsById: X.db,
					viewportDataLoaded: ee.a,
					commentsById: $.q,
					itemIds: Y.f,
					itemIdToPostId: Y.e,
					postsById: Q.J,
					estimateItemHeight: e => (e, t, r) => {
						if (r) switch (t) {
							case F.g.Medium:
								return 174;
							case F.g.Classic:
								return 129;
							case F.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case F.g.Medium:
							case F.g.Classic:
								return 90;
							case F.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				se = Object(c.c)(ne),
				oe = Object(i.b)(se, e => ({
					onBottomViewed: (t, r) => e(Object(W.c)(t, r)),
					adBrandSafetyStatusReceived: t => {
						e(Z.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.L)(t)),
					fireAdPixelsOfType: U.a,
					trackOnPostEnteredViewport: U.a
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(V.k)(e, t),
					postComponentForLayout: G.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = e => a.a.createElement(T, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ce = (e => Object(K.c)(re(oe(e))))(q.a);
			var le = e => a.a.createElement(ce, ae({}, e, {
					itemComponent: ie
				})),
				de = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ue = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				me = r("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				pe = r("./src/reddit/helpers/name/index.ts"),
				he = r("./src/reddit/helpers/trackers/screenview.ts"),
				_e = r("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				fe = r("./src/reddit/layout/page/Listing/index.tsx"),
				be = r("./src/reddit/models/ContentGate.ts"),
				ge = r("./src/reddit/pages/ErrorPages/index.tsx"),
				ye = r("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ve = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				xe = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ke = r("./src/reddit/selectors/profile.ts");

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(O.u)(),
				we = Object(c.a)(O.E, te.kb, (e, t) => {
					let {
						location: r
					} = t;
					return s()([...Object(d.a)(r.search)])
				}, O.S, (e, t) => {
					let {
						match: r
					} = t;
					return r.params.profileName
				}, (e, t) => {
					let {
						match: r
					} = t;
					return Object(ke.k)(e, {
						profileName: r.params.profileName
					})
				}, te.Q, (e, t) => {
					let {
						match: r
					} = t;
					return Object(te.f)(e, l.pc + r.params.profileName)
				}, ve.d, (e, t) => {
					let {
						match: r
					} = t;
					return Object(te.L)(e, {
						profileName: r.params.profileName
					})
				}, xe.f, (e, t, r, n, s, o, a, i, c, l, d) => {
					var m, p;
					const {
						sort: _,
						t: f
					} = Object(h.b)(r), b = Object(u.a)(`u_${s}`, _, r);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: n,
						listingKey: b,
						profileName: s,
						sort: _,
						timeSort: f,
						avatar: null === (m = null == o ? void 0 : o.icon) || void 0 === m ? void 0 : m.url,
						isProfileBlockInterstitialEnabled: c,
						isBlocked: l,
						profileId: null !== (p = null == o ? void 0 : o.id) && void 0 !== p ? p : "",
						nsfwBlockingExperiment: d
					}
				}),
				je = Object(i.b)(we, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(m.a)())
				}));
			t.default = Ee(je(Object(_e.d)(e => {
				const {
					avatar: t,
					contentGateInfo: r,
					isBlocked: n,
					isOwnProfile: s,
					isProfileBlockInterstitialEnabled: i,
					isProfileNSFW: c,
					listingKey: d,
					nsfwBlockingExperiment: u,
					onLoadMore: m,
					onLayoutChange: p,
					openNsfwModal: h,
					over18Prefs: y,
					pageLayer: v,
					profileId: x,
					profileName: k,
					sort: C,
					timeSort: E
				} = e;
				if (Object(o.useEffect)(() => {
						c && !s && u === xe.a.Blurred && h()
					}, [u, s, c, h]), !k || !v) return null;
				if (r && r.profileDeleted) return a.a.createElement(_.default, {
					contentGateType: be.a.ProfileDeleted,
					profileName: k
				});
				if (r && r.profileSuspended) return a.a.createElement(_.default, {
					contentGateType: be.a.ProfileSuspended,
					profileName: k
				});
				if (451 === v.status || r && r.profileBlockedForLegalReason) return a.a.createElement(_.default, {
					contentGateType: be.a.ProfileBlockedForLegalReason,
					profileName: k
				});
				const w = v.queryParams && "true" === v.queryParams.consent;
				if (403 === v.status || n && !w) return i ? a.a.createElement(ye.a, {
					username: k,
					avatar: t,
					uid: x
				}) : a.a.createElement(ge.a, null);
				if (404 === v.status) return a.a.createElement(_.default, {
					contentGateType: be.a.ProfileDoesNotExist,
					profileName: k
				});
				const j = k.toLowerCase(),
					F = `/user/${k}/comments/`,
					O = {
						listingKey: d,
						listingName: j
					};
				if (c && !s && u === xe.a.NoPreview) return a.a.createElement(me.a, {
					contentTitle: Object(pe.e)(k)
				});
				if (!y && c && !s && u !== xe.a.Blurred) return a.a.createElement(_.default, {
					contentGateType: be.a.Nsfw,
					subredditName: k
				});
				const P = {
					sort: C,
					baseUrl: F,
					sortOptions: l.Hb,
					timeSort: E
				};
				return a.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
						profileName: k,
						viewBlockedConsent: w
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, P), a.a.createElement(g.a, null), a.a.createElement(le, {
						listingKey: d,
						listingName: j,
						listingViewed: (e, t) => Object(he.o)(d, C, t, e, E),
						noPostsComponent: () => a.a.createElement(f.b, {
							profileName: k,
							timeSort: E
						}),
						onLoadMore: m,
						onTryAgain: p,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(ue.a, Ce({}, O, {
						profileName: k
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.9e881fa5e93c0345fc53.js.map