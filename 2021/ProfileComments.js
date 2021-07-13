// https://www.redditstatic.com/desktop2x/ProfileComments.dace568f2b910bb68b33.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "reddit-components-ContentGate"], {
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

			function a(e) {
				return "[object Function]" === s(e)
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
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var l = [];

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
						}(r.validate) ? a(r.validate) ? n.validate = r.validate : d(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(a(r.normalize) ? n.normalize = r.normalize : r.normalize ? d(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(r) ? d(t, r): l.push(t)
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
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, l, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, s, a, o, i, l;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (s = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (a = r.index + r[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (a = n.index + n[1].length, o = n.index + n[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = o)), this.__index__ >= 0
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
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/chat/controls/Svg/index.m.less"),
				l = r.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: n,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[l.a.disable]: r,
						[l.a.active]: n,
						[l.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return v
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				a = r("./node_modules/tlds/index.js"),
				o = r.n(a),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				l = r("./node_modules/lodash/values.js"),
				c = r.n(l);
			const d = e => c()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				h = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				b = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				_ = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				y = p.normalize;
			p.normalize = e => {
				y.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const w = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const r = d(e.text);
						return !r || r && t
					})
				},
				k = e => {
					return [..._.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				x = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				v = e => {
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
				const a = Object(s.e)(e),
					o = encodeURIComponent(`${t}${a}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${o}`
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileCommentsPending", (function() {
				return z
			})), r.d(t, "profileCommentsLoaded", (function() {
				return I
			})), r.d(t, "profileCommentsFailed", (function() {
				return T
			})), r.d(t, "profileCommentsRequested", (function() {
				return A
			})), r.d(t, "moreItemsPending", (function() {
				return B
			})), r.d(t, "moreItemsLoaded", (function() {
				return R
			})), r.d(t, "moreItemsFailed", (function() {
				return U
			})), r.d(t, "moreItemsRequested", (function() {
				return Y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/difference.js"),
				s = r.n(n),
				a = r("./node_modules/lodash/pick.js"),
				o = r.n(a),
				i = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/contentGate.ts"),
				d = r("./src/reddit/actions/externalAccount.ts"),
				u = r("./src/reddit/actions/moderatingSubreddits.ts"),
				m = r("./src/reddit/actions/pages/profileShared.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				h = r("./src/reddit/actions/profile/index.ts"),
				b = r("./src/reddit/actions/subreddit.ts"),
				_ = r("./src/reddit/constants/errors.ts"),
				f = r("./src/reddit/constants/parameters.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/config.ts"),
				w = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				k = r("./src/lib/constants/index.ts"),
				x = r("./src/lib/makeApiRequest/index.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				E = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				O = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const j = (e, t, r, n) => {
				let s = Object(v.a)(Object(w.a)(Object(E.a)(Object(O.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return n && (s = Object(C.a)(s)), Object(x.a)(e, {
					data: r,
					endpoint: s,
					method: k.hb.GET
				})
			};
			var S = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				D = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				F = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				P = r("./src/reddit/selectors/profile.ts"),
				N = r("./src/reddit/selectors/profileComments.ts"),
				L = r("./src/reddit/actions/pages/profileComments/constants.ts");
			const z = Object(i.a)(L.f),
				I = Object(i.a)(L.e),
				T = Object(i.a)(L.d),
				A = e => async (t, r, n) => {
					const {
						queryParams: s,
						params: a
					} = e, {
						sort: i,
						t: g
					} = Object(m.b)(s), {
						profileName: y
					} = a, w = Object(l.a)(`u_${y}`, i, e.queryParams), {
						profileCommentsPage: k
					} = r(), x = k.commentIds[w], v = k.api.error[w], C = k.api.pending[w];
					if (await t(h.d(y)), C || x && !v) {
						if (x) {
							const e = Object(P.q)(r(), {
								profileName: y
							});
							t(p.l({
								title: e
							}))
						}
						return
					}
					const E = {
						...o()(e.queryParams, [...f.l, f.h]),
						sort: i,
						t: Object(S.a)(i, g)
					};
					t(z({
						key: w
					}));
					const O = await Object(D.a)("profileComments", () => j(n.apiContext(), y, E, Object(F.a)(r())));
					if (!O.ok) return t(T({
						account: O.body.data ? O.body.data.account : null,
						error: O.body.reason ? {
							type: O.body.reason
						} : O.error,
						key: w
					})), O.body.reason === _.a.DeletedProfile && t(Object(c.p)({
						profileName: y
					})), void t(p.m(O.status));
					const N = O.body;
					t(I({
						key: w,
						meta: r().meta,
						...N
					})), await Promise.all([t(Object(m.c)(y)), t(Object(b.q)()), t(Object(u.b)()), t(d.o(y))])
				}, B = Object(i.a)(L.c), R = Object(i.a)(L.b), U = Object(i.a)(L.a), Y = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t(),
						{
							currentPage: a
						} = n.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: i,
						params: c
					} = a.routeMatch.match, {
						sort: d,
						t: u
					} = Object(m.b)(i), {
						profileName: p
					} = c, h = Object(l.a)(`u_${p}`, d, i), b = Object(N.d)(n, {
						listingKey: h
					});
					if (!b) return;
					const _ = Object(N.b)(n, {
							listingKey: h
						}),
						y = Object(N.c)(n, {
							listingKey: h
						}),
						w = y && y[b.token];
					if (_ || w) return;
					e(B({
						key: h,
						fetchedToken: b.token
					}));
					const k = await j(r(), p, {
						after: b.token,
						dist: b.dist,
						sort: d,
						t: u,
						...o()(i, f.l),
						layout: Object(g.O)(n, {}).toLowerCase()
					}, Object(F.a)(n));
					if (k.ok) {
						const t = Object(N.f)(n, {
								listingKey: h
							}),
							r = {
								...k.body,
								commentIds: s()(k.body.commentIds, t)
							};
						e(R({
							fetchedToken: b.token,
							key: h,
							meta: n.meta,
							...r
						}))
					} else e(U({
						account: k.body.data ? k.body.data.account : null,
						error: k.error,
						fetchedToken: b.token,
						key: h
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loginHref/index.ts"),
				m = r("./src/reddit/actions/contentGate.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				h = r("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = r("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = r("./src/reddit/components/Footer/index.m.less"),
				f = r.n(_);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.div("FooterContainer", f.a), w = d.a.div("UserAgreement", f.a), k = d.a.a("UserAgreementLink", f.a), x = d.a.a("PrivacyLink", f.a);
			var v = () => a.a.createElement(y, null, a.a.createElement(w, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(k, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(x, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				C = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				E = r("./src/reddit/components/RichTextJson/index.tsx"),
				O = r("./node_modules/lodash/flatMap.js"),
				j = r.n(O),
				S = r("./src/lib/linkMatchers/index.ts"),
				D = r("./src/lib/linkMatchers/customLinks.ts"),
				F = r("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, a] = t.slice(n, n + 3);
						r.push(e), r.push([a, s])
					}
					return r
				};
			var L = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, N)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = S.f.add(D.g.subreddit.prefix, D.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return a.a.createElement(F.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return a.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				z = r("./src/reddit/contexts/PageLayer/index.tsx"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => a.a.createElement(T.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				R = r("./src/reddit/models/ContentGate.ts"),
				U = r("./src/lib/constants/index.ts"),
				Y = r("./src/reddit/selectors/platform.ts"),
				q = r("./src/reddit/selectors/user.ts");
			var H = r("./src/reddit/selectors/meta.ts"),
				M = r("./src/reddit/components/ContentGate/index.m.less"),
				G = r.n(M);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = d.a.wrapped(B, "PrivateKey", G.a), K = d.a.div("ButtonsContainer", G.a), V = d.a.div("Container", G.a), J = d.a.div("ContainerExp", G.a), X = d.a.div("Description", G.a), Q = d.a.div("PrivateSubredditDetails", G.a), $ = d.a.div("PrivateSubredditDescription", G.a), ee = d.a.h3("PrivateSubredditName", G.a), te = d.a.a("Link", G.a), re = d.a.wrapped(I.k, "LinkRouterButton", G.a), ne = d.a.wrapped(I.j, "LinkButton", G.a), se = d.a.wrapped(I.n, "SecondaryLinkRouterButton", G.a), ae = d.a.wrapped(I.m, "SecondaryLinkButton", G.a), oe = d.a.wrapped(re, "GoHomeLinkButton", G.a), ie = d.a.wrapped(b.a, "CreateCommunityButton", G.a), le = d.a.img("Image", G.a), ce = d.a.img("ImagePlaceholder", G.a), de = d.a.wrapped(re, "LeftLinkRouterButton", G.a), ue = d.a.wrapped(ne, "LeftLinkButton", G.a), me = d.a.wrapped(ae, "SecondaryLeftLinkButton", G.a), pe = d.a.wrapped(se, "SecondaryLeftLinkRouterButton", G.a), he = d.a.h3("Title", G.a), be = d.a.div("PageBody", G.a), _e = d.a.div("QuarantineMessageWrapper", G.a), fe = Object(c.c)({
				isLoggedIn: q.J,
				origin: H.j,
				user: q.j,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(q.K)(e)) return !1;
					const t = Object(Y.d)(e);
					if (!t) return !1;
					const r = Object(q.e)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * U.z;
					return n > Date.now() - s
				})(e)
			}), ge = Object(z.t)(), ye = Object(o.b)(fe, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.A(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), we = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: s,
					isLoggedIn: o,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: l,
					location: c,
					origin: d,
					pageLayer: p,
					quarantineRequiresEmail: b,
					quarantineMessage: _,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: g,
					setNSFWPreference: y,
					subredditDescription: w,
					subredditName: k,
					user: x
				} = e, v = async () => {
					o ? await y() : await Object(m.k)(), window.location.reload()
				};
				switch (r) {
					case R.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(he, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", k)], {
							hk: "2lyDwB"
						})), a.a.createElement(X, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(K, null, x ? a.a.createElement(me, {
							href: `${n.a.redditUrl}/premium`
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(ue, {
							href: Object(u.a)(c, d)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), x ? a.a.createElement(re, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(ae, {
							href: Object(u.a)(c, d)
						}, W._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(he, null, r === R.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(X, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(K, null, a.a.createElement(de, {
							to: "/"
						}, W._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(ae, {
							onClick: v
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case R.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Z, null), a.a.createElement(he, null, "r/", k, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), w && w.length && a.a.createElement(Q, null, a.a.createElement(ee, null, "r/", k), a.a.createElement($, null, a.a.createElement("div", null, w))), a.a.createElement(X, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", k, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(K, null, x ? a.a.createElement(a.a.Fragment, null, !i && a.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), a.a.createElement(me, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${k}`
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(me, {
							href: Object(u.a)(c, d)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(re, {
							to: "/"
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case R.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(he, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(X, null, W._("This community is {=quarantined}", [W._param("=quarantined", a.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(_e, null, g ? a.a.createElement(E.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : f ? a.a.createElement(C.a, {
							html: f
						}) : _ || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(K, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? a.a.createElement(K, null, a.a.createElement(pe, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ne, {
								href: `${n.a.redditUrl}/prefs/update`
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(K, null, a.a.createElement(de, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ae, {
								onClick: t
							}, W._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(x, s, b)));
					case R.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(he, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", k)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(X, null, e ? a.a.createElement(L, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(K, null, a.a.createElement(re, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(he, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(K, null, a.a.createElement(re, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ce, null), a.a.createElement(he, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(X, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(K, null, x && a.a.createElement(ie, {
							eventSource: "content_gate"
						}), a.a.createElement(oe, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(he, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case R.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case R.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", a.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case R.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(he, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(X, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(K, null, a.a.createElement(oe, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(he, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(K, null, a.a.createElement(oe, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(le, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(he, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(K, null, a.a.createElement(re, {
							to: "/"
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ge(ye(Object(i.i)(e => {
				const t = Object(s.useContext)(l.a) ? J : V;
				return a.a.createElement(t, null, a.a.createElement("div", null, a.a.createElement(be, null, we(e))), a.a.createElement(v, null))
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
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, r) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
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
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				h = r("./src/reddit/helpers/overlay/index.ts"),
				b = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = r("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				y = r.n(g),
				w = r("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				x = w.a.wrapped(c.c, "StyledTooltip", y.a),
				v = Object(i.c)({
					isInSrCreationEntrypointBehaviorExperiment: _.a,
					isInSrCreationEntrypointCopyExperiment: _.b,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.hb)(e),
					userIsSuspended: f.P
				});
			t.a = Object(o.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: r => {
					r(Object(b.c)(t)), e(Object(h.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: k
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(d.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: r,
				isInSrCreationEntrypointCopyExperiment: s,
				onShowTooltip: o,
				onHideTooltip: i,
				openCommunityCreation: l,
				sendEvent: c,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: h
			}) => a.a.createElement(m.q, {
				className: e,
				disabled: h || d,
				onClick: () => r === u.Ed.Tabs ? window.open("/subreddits/create", "_blank") : l(c),
				onMouseEnter: o,
				onMouseLeave: i,
				priority: m.b.Secondary,
				id: k,
				isFullWidth: !0
			}, Object(p.a)(s, n.fbt._("Create Community", null, {
				hk: "28v7Qq"
			})), d ? a.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: k,
				text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : h ? a.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: k,
				text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, r) {
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
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				l = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/reddit/actions/preferences.ts"),
				m = r("./src/reddit/actions/tooltip.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/postLayout.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = r("./src/reddit/contexts/Tooltip.ts"),
				f = r("./src/reddit/controls/Dropdown/index.tsx"),
				g = r("./src/reddit/controls/Dropdown/Row.tsx"),
				y = r("./src/reddit/icons/fonts/index.tsx"),
				w = r("./src/reddit/selectors/telemetry.ts"),
				k = r("./src/reddit/selectors/tooltip.ts"),
				x = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				v = r.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "view--layout--FUE",
				O = "LayoutSwitch--picker",
				j = Object(l.a)(f.a),
				S = {
					[h.d.Card]: function(e) {
						return a.a.createElement(y.a, C({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return a.a.createElement(y.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return a.a.createElement(y.a, C({}, e, {
							name: "view_compact"
						}))
					}
				},
				D = {
					[h.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				F = Object(b.t)(),
				P = Object(i.c)({
					dropdownIsOpen: Object(k.b)(O),
					postLayout: b.O,
					redditStyle: b.A
				}),
				N = Object(o.b)(P, e => ({
					onListingLayoutChange: (t, r) => e(Object(u.v)(t, r)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: O
					}))
				}));
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: r,
							sendEvent: n,
							subredditId: s
						} = this.props;
						t ? t(e) : (r(e, s), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(w.screen)(t),
							subreddit: Object(w.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: r,
							onLayoutClick: n,
							postLayout: s
						} = this.props, o = r || h.e[s], i = e === o, l = S[e], d = D[e];
						return a.a.createElement(g.b, C({}, t, {
							className: Object(c.a)(v.a.LayoutItem, {
								[v.a.selected]: i,
								[v.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: v.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: v.a.LayoutItemTextClassName
						}), a.a.createElement(l, {
							className: v.a.LayoutIcon,
							onClick: i ? void 0 : n,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(j, C({}, e, {
							className: v.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: v.a.DropdownRow,
							rowIconClassName: v.a.DropdownRowIcon,
							rowSelectedClassName: v.a.DropdownRowSelected,
							tooltipId: O
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: r,
						postLayout: n
					} = this.props, s = t || h.e[n];
					return a.a.createElement("div", {
						className: Object(c.a)(v.a.Container, e),
						id: E
					}, a.a.createElement("div", {
						className: v.a.DropdownContainer,
						onClick: r
					}, this.renderItem(s, {
						id: O,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), a.a.createElement(_.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = F(N(Object(p.c)(Object(d.a)(L))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/listingSort/index.ts"),
				l = r("./src/reddit/actions/preferences.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/addQueryParams/index.ts")),
				h = r("./src/lib/constants/index.ts"),
				b = r("./node_modules/react-router-redux/es/index.js"),
				_ = r("./node_modules/reselect/es/index.js"),
				f = r("./src/reddit/actions/tooltip.ts"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				y = r("./src/higherOrderComponents/asTooltip.tsx"),
				w = r("./src/reddit/constants/listingSorts.ts"),
				k = r("./src/reddit/contexts/Tooltip.ts"),
				x = r("./src/reddit/controls/Dropdown/index.tsx"),
				v = r("./src/reddit/controls/Dropdown/Row.tsx"),
				C = r("./src/reddit/helpers/path/index.ts"),
				E = r("./src/reddit/helpers/trackers/navigation.ts"),
				O = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = r("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				S = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				D = r("./src/reddit/selectors/tooltip.ts"),
				F = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = r("./src/reddit/components/ListingSort/index.m.less"),
				L = r.n(N),
				z = r("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = "ListingSort--SortPicker",
				A = Object(y.a)(z.a.wrapped(x.a, "Dropdown", L.a)),
				B = z.a.wrapped(P.a, "ListingSortIcon", L.a),
				R = (z.a.wrapped(O.b, "DropdownTriangle", L.a), z.a.div("Title", L.a)),
				U = z.a.wrapped(e => s.a.createElement(v.b, I({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", L.a),
				Y = ({
					disabled: e,
					...t
				}) => s.a.createElement("div", I({}, t, {
					className: Object(o.a)(L.a.SortWrapper, t.className, {
						[L.a.isDisabled]: e
					})
				})),
				q = z.a.div("DropdownRowDisabled", L.a),
				H = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				M = Object(_.c)({
					isAwardListingExperimentEnabled: S.a,
					isBestSortPopularEnabled: j.a,
					user: F.j,
					dropdownIsOpen: (e, t) => Object(D.b)(t.dropdownId || T)(e),
					isPopularPage: d.C
				}),
				G = Object(a.b)(M, (e, {
					dropdownId: t,
					pageLayer: r
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || T
					}))
				}));
			var W = z.a.wrapped(H(G(Object(c.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(R, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(Y, {
					disabled: e.disabled
				}, e.children || s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(w.a)(e.sort),
					id: e.dropdownId || T,
					showDropdownTriangle: !0
				}, s.a.createElement(B, {
					sort: e.sort
				}))), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(A, I({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || T
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(q, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, r, n, s) => {
					const a = [h.U.HOT, h.U.NEW, h.U.TOP, h.U.RISING];
					return (e && (r || n) || t && n) && a.unshift(h.U.BEST), t && s && a.splice(3, 0, h.U.AWARDED), a
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => s.a.createElement(v.b, {
					className: Object(o.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(w.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(E.a)(t))
					},
					href: e.isProfilePage ? Object(p.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, s.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", L.a),
				Z = r("./src/reddit/constants/parameters.ts");
			const K = e => {
					const t = V[e];
					return t && t() || ""
				},
				V = {
					[h.Yb.AllStates]: () => g.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[h.Yb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.Yb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.Yb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.Yb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.Yb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.Yb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.Yb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.Yb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.Yb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.Yb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.Yb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.Yb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.Yb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.Yb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.Yb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.Yb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.Yb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.Yb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.Yb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.Yb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.Yb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.Yb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.Yb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.Yb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.Yb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.Yb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.Yb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.Yb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.Yb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.Yb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.Yb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.Yb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.Yb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.Yb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.Yb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.Yb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.Yb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.Yb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.Yb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.Yb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.Yb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.Yb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.Yb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.Yb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.Yb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.Yb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.Yb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.Yb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.Yb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.Yb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.Yb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = r("./src/reddit/components/StateSort/index.m.less"),
				X = r.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = z.a.wrapped(x.a, "_Dropdown", X.a),
				ee = Object(y.a)($),
				te = e => {
					return e.indexOf("_") > 0 && ne(e) === h.y.UnitedStates
				},
				re = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return h.Yb.AllStates
				},
				ne = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				se = e => {
					const t = ne(e),
						r = re(e);
					return te(e) ? `${t}_${r}` : t
				},
				ae = Object(d.t)(),
				oe = Object(_.c)({
					dropdownIsOpen: Object(D.b)("StateSort--StateSortPicker")
				}),
				ie = Object(a.b)(oe, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, r) => {
						e(Object(b.b)(t)), e(Object(l.t)(h.y.UnitedStates + "_" + r))
					}
				}));
			var le = z.a.wrapped(ae(ie(e => {
				const t = `${e.baseUrl}?${Z.h}=${h.y.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(Y, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : K(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, r => s.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, r, {
					renderContentsHidden: !0
				}), Object.keys(h.Yb).map(r => {
					const n = h.Yb[r];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Yb.AllStates ? t : `${t}_${e}`)(n), se(n))
					}, s.a.createElement(v.b, {
						className: Object(o.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: K(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", X.a);
			const ce = {
				[h.y.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.y.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.y.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.y.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.y.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.y.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.y.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.y.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.y.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.y.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.y.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.y.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.y.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.y.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.y.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.y.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.y.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.y.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.y.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.y.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.y.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.y.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.y.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.y.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.y.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.y.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.y.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.y.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.y.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.y.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.y.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.y.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.y.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.y.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.y.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.y.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var de = r("./src/reddit/components/CountrySort/index.m.less"),
				ue = r.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(d.t)(),
				be = Object(_.c)({
					dropdownIsOpen: Object(D.b)(pe)
				});
			var _e = he(Object(a.b)(be, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, r) => {
						e(Object(b.b)(t)), e(Object(l.t)(r))
					}
				}))(e => {
					const t = ne(e.sort),
						r = re(e.sort),
						n = `${e.baseUrl}?${Z.h}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(o.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, s.a.createElement(Y, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(U, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[h.y.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), s.a.createElement(k.a.Consumer, null, r => s.a.createElement(ee, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, r, {
						renderContentsHidden: !0
					}), Object.keys(h.y).map(r => {
						const a = h.y[r];
						return s.a.createElement("div", {
							key: a,
							onClick: () => e.onClickLink(`${n}${se(a)}`, a)
						}, s.a.createElement(v.b, {
							className: Object(o.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
							displayText: ce[a](),
							isSelected: t === a
						}))
					})))), t === h.y.UnitedStates && s.a.createElement(le, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: r,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				fe = r("./node_modules/path-browserify/index.js"),
				ge = r.n(fe),
				ye = r("./src/reddit/components/TimeSort/index.m.less"),
				we = r.n(ye);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(y.a)(x.a),
				ve = (e, t, r) => {
					let n = e.url;
					return e.urlParams.sort || Object(d.G)(e) || (n = ge.a.join(n, t)), Object(p.a)(n, {
						[Z.x]: r
					})
				},
				Ce = z.a.div("ListingSortContainer", we.a),
				Ee = Object(d.t)(),
				Oe = Object(_.c)({
					dropdownIsOpen: Object(D.b)("TimeSort--SortPicker")
				});
			var je = Ee(Object(a.b)(Oe, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => s.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(Y, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(w.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(xe, ke({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.bc.HOUR, h.bc.DAY, h.bc.WEEK, h.bc.MONTH, h.bc.YEAR, h.bc.ALL].map(t => s.a.createElement(v.b, {
					className: Object(o.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(w.b)(t),
					href: ve(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(E.c)(t))
					}
				})))))))),
				Se = r("./src/reddit/constants/listings.ts"),
				De = r("./src/reddit/controls/Button/index.tsx"),
				Fe = r("./src/reddit/icons/fonts/index.tsx"),
				Pe = r("./src/reddit/selectors/meta.ts"),
				Ne = r("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = r.n(Ne);

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = new Set([h.U.CONTROVERSIAL, h.U.TOP]),
				Te = new Set([h.U.CONTROVERSIAL, h.U.RISING]),
				Ae = "ListingSort--Overflow",
				Be = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Re = Object(_.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, F.j, d.C, S.a, Pe.i, (e, t, r, n, s, a, o) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: o
					};
					const i = [h.U.HOT, h.U.NEW, h.U.TOP, h.U.RISING];
					return (t && (n || r) || s && r) && i.unshift(h.U.BEST), s && a && i.splice(3, 0, h.U.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: o
					}
				});
			class Ue extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: r
						} = this.props;
						return r ? Object(p.a)(t, {
							sort: e
						}) : Object(C.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return s.a.createElement(De.q, {
							className: Object(o.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: De.a.InternalLink,
							priority: De.b.Plain,
							Icon: r => s.a.createElement(B, ze({}, r, {
								className: Object(o.a)(Le.a.SortIcon, r.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(w.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: r,
							isPopularPage: n,
							sort: a
						} = this.props, o = n && !!r && e === h.U.HOT && a === h.U.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), o && s.a.createElement(_e, {
							baseUrl: Se.c[Se.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: r,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentSortOverflow(e) {
					const {
						sort: t,
						isPopularPage: r,
						locale: n
					} = this.props;
					return !n.startsWith("en") && (r ? e === h.U.AWARDED && (t === h.U.HOT || t === h.U.TOP) : e === h.U.BEST && t === h.U.TOP)
				}
				isOverflowSort(e) {
					return Te.has(e) || this.isLocaleDependentSortOverflow(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: r,
						sort: n,
						sortOptions: a,
						timeSort: i
					} = this.props, l = !t && Ie.has(n), c = Te.has(n), d = a.filter(e => !this.isOverflowSort(e)), u = a.filter(e => this.isOverflowSort(e) && e !== n);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(W, ze({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(o.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(o.a)(Le.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(n), l && s.a.createElement(je, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: n,
						onChange: r,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || h.cc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(W, ze({}, this.props, {
						className: Object(o.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Ae
					}, s.a.createElement(Fe.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ye = Be(Object(a.b)(Re)(Object(c.c)(Ue))),
				qe = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				He = r.n(qe);
			const Me = Object(d.t)({
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ge = Object(a.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (r, n) => {
						if (t) {
							const s = Object(i.c)({
								sort: r,
								timeSort: n
							});
							e(Object(l.G)(t, s))
						}
					}
				}));
			class We extends s.a.Component {
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
						countrySort: r,
						disabled: n = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(o.a)(He.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(Ye, {
						baseUrl: e,
						disabled: n,
						geopopularSort: r,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !a && s.a.createElement(m.a, {
						className: He.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Me(Ge(Object(c.c)(We)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/controls/Dropdown/index.m.less"),
				c = r.n(l);
			const d = {
				[o.U.BEST]: "best",
				[o.U.HOT]: "hot",
				[o.U.NEW]: "new",
				[o.U.CONTROVERSIAL]: "controversial",
				[o.U.TOP]: "top",
				[o.U.RISING]: "rising",
				[o.U.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: r
			}) {
				return d[r] ? s.a.createElement(i.a, {
					name: d[r],
					isFilled: t,
					className: Object(a.a)(e, c.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, r) {
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
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = r.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...r
			}) => s.a.createElement("div", l({
				className: Object(a.a)(i.a.border, {
					[i.a.isFirst]: e,
					[i.a.isLast]: t
				})
			}, r))
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
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/constants/gold.ts"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				m = r("./src/reddit/components/CommentContainer/index.tsx"),
				p = r("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = r("./src/reddit/actions/post.ts"),
				b = r("./src/reddit/helpers/getClickInfo.ts"),
				_ = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/communityAwards.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				w = r.n(y);
			const k = u.a.div("ProfileOwnerCommentWrapper", w.a),
				x = u.a.div("CommentContentWrapper", w.a),
				v = u.a.div("Wrapper", w.a),
				C = u.a.div("CommentSeparator", w.a),
				E = Object(i.b)(() => Object(l.c)({
					comment: (e, t) => Object(_.a)(e, t),
					isAwarded: (e, t) => {
						const r = Object(_.a)(e, t);
						return !(!r || !r.awardCountsById) && Object.keys(r.awardCountsById).some(t => {
							const r = Object(f.a)(e, t);
							return r && r.coinPrice >= c.g
						})
					},
					isNightmodeOn: g.W
				}), e => ({
					openPost: t => e(Object(h.M)(t))
				}));
			class O extends o.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: r,
						openPost: n,
						isAwarded: a,
						isFirst: i,
						isLast: l,
						isNightmodeOn: c,
						profileName: u,
						showModTools: p
					} = this.props, h = u === e.author ? j : S;
					return o.a.createElement(m.a, {
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
					}, o.a.createElement(v, {
						className: Object(d.a)({
							[w.a.isFirst]: i,
							[w.a.isLast]: l,
							[w.a.isAwarded]: a,
							[w.a.isNightmodeOn]: c
						})
					}, s()(r + 1, e => o.a.createElement(C, {
						key: e
					})), o.a.createElement(x, null, h(t, u, p))))
				}
			}
			const j = (e, t, r) => o.a.createElement(k, null, S(e, t, r, !0, !0)),
				S = (e, t, r, n = !1, s) => o.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: n,
					showModTools: r,
					isExpanded: !!s
				});
			t.a = E(O)
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
		"./src/reddit/components/StateSort/index.m.less": function(e, t, r) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, r) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts");
			const a = {
					[s.U.BEST]: () => n.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.U.HOT]: () => n.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.U.NEW]: () => n.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.U.CONTROVERSIAL]: () => n.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.U.RISING]: () => n.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.U.TOP]: () => n.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.U.AWARDED]: () => n.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[s.bc.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.bc.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.bc.WEEK]: () => n.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.bc.MONTH]: () => n.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.bc.YEAR]: () => n.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.bc.ALL]: () => n.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = s.a.createContext({})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = r.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => s.a.createElement("svg", l({
				className: Object(a.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
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
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/pages/ErrorPages/index.m.less"),
				l = r.n(i);
			const c = ({
					message: e
				}) => a.a.createElement("div", {
					className: l.a.container
				}, a.a.createElement("h3", {
					className: l.a.title
				}, e || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), a.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => a.a.createElement("div", {
					className: l.a.container
				}, a.a.createElement("h3", {
					className: l.a.title
				}, e || n.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), a.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/extractQueryParams/index.ts"),
				u = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/profileComments/index.ts"),
				p = r("./src/reddit/actions/pages/profileShared.ts"),
				h = r("./src/reddit/components/ContentGate/index.tsx"),
				b = r("./src/reddit/components/EmptyProfile/index.ts"),
				_ = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = r("./src/reddit/components/JumpToContent/index.tsx"),
				g = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				w = r("./src/lib/lessComponent.tsx"),
				k = r("./src/reddit/components/ClassicPost/index.tsx"),
				x = r("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				v = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = r("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				E = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				O = r("./src/reddit/constants/postLayout.ts"),
				j = r("./src/reddit/contexts/PageLayer/index.tsx"),
				S = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = r("./src/reddit/selectors/commentSelector.ts"),
				F = r("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				P = r.n(F);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = w.a.wrapped(k.default, "ClassicPost", P.a),
				z = w.a.wrapped(v.a, "OverviewCommentPost", P.a),
				I = Object(j.t)({
					currentProfileName: j.h,
					pageLayer: e => e
				}),
				T = Object(l.c)({
					comment: (e, {
						itemId: t
					}) => Object(D.a)(e, {
						commentId: t
					}),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: r
							} = e, n = t.toLowerCase(), s = r.models[n];
							return s ? s.username : void 0
						})(e, t)
					}
				});
			var A = I(Object(i.b)(T)(e => {
				const {
					comment: t,
					itemId: r,
					isFirstInCommentList: n,
					isLastInCommentList: s,
					layout: a,
					profileName: i,
					allowModToolsUnderComments: l
				} = e;
				if (a === O.g.Compact) return o.a.createElement(x.a, e);
				const {
					height: c,
					width: d,
					...u
				} = e;
				return o.a.createElement(B, u, n && o.a.createElement(C.a, {
					isFirst: !0
				}, a === O.g.Large ? o.a.createElement(L, N({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : o.a.createElement(z, N({}, e, {
					commentId: r,
					profileName: i
				}))), o.a.createElement(C.a, {
					isLast: s
				}, o.a.createElement(E.a, {
					commentId: r,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: r,
					profileName: i,
					showModTools: l
				})))
			}));
			const B = Object(y.a)(e => o.a.createElement("div", {
				className: Object(g.a)(P.a.backgroundMargin, {
					[P.a.isFirstInCommentList]: e.isFirstInCommentList,
					[P.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(S.e)(e)
				}
			}, e.children));
			var R = r("./src/reddit/components/ProfileItemList/index.tsx"),
				U = r("./node_modules/lodash/noop.js"),
				Y = r.n(U),
				q = r("./src/reddit/actions/ads/index.ts"),
				H = r("./src/reddit/actions/comment/list.ts"),
				M = r("./src/reddit/actions/post.ts"),
				G = r("./src/reddit/components/TrackingHelper/index.tsx"),
				W = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Z = r("./src/reddit/helpers/trackers/post.ts"),
				K = r("./src/reddit/featureFlags/index.ts"),
				V = r("./src/reddit/selectors/comments.ts"),
				J = r("./src/reddit/selectors/posts.ts"),
				X = r("./src/reddit/selectors/profileComments.ts"),
				Q = r("./src/reddit/selectors/subreddit.ts"),
				$ = r("./src/reddit/selectors/tracking.ts"),
				ee = r("./src/reddit/selectors/user.ts");
			const te = Object(j.t)(),
				re = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ee.j,
					measureScrollFPS: K.d.measureScrollFPS,
					layout: j.O,
					loadMore: X.d,
					subredditsById: Q.Z,
					viewportDataLoaded: $.a,
					commentsById: V.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: J.I,
					estimateItemHeight: e => (e, t, r) => {
						if (r) switch (t) {
							case O.g.Medium:
								return 174;
							case O.g.Classic:
								return 129;
							case O.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case O.g.Medium:
							case O.g.Classic:
								return 90;
							case O.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				ne = Object(l.c)(re),
				se = Object(i.b)(ne, e => ({
					onBottomViewed: (t, r) => e(Object(H.c)(t, r)),
					adBrandSafetyStatusReceived: t => {
						e(q.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(M.M)(t)),
					fireAdPixelsOfType: Y.a,
					trackOnPostEnteredViewport: Y.a
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(Z.h)(e, t),
					postComponentForLayout: W.b
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
			const oe = e => o.a.createElement(A, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(G.c)(te(se(e))))(R.a);
			var le = e => o.a.createElement(ie, ae({}, e, {
					itemComponent: oe
				})),
				ce = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				de = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = r("./src/reddit/helpers/trackers/screenview.ts"),
				me = r("./src/reddit/layout/page/Listing/index.tsx"),
				pe = r("./src/reddit/models/ContentGate.ts"),
				he = r("./src/reddit/pages/ErrorPages/index.tsx"),
				be = r("./src/reddit/selectors/profile.ts");

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = Object(j.t)(),
				ge = Object(l.a)(j.B, ee.db, (e, {
					location: t
				}) => s()([...Object(d.a)(t.search)]), j.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(be.j)(e, {
					profileName: t.params.profileName
				}), ee.K, (e, {
					match: t
				}) => Object(ee.e)(e, c.dc + t.params.profileName), (e, t, r, n, s, a, o, i) => {
					const {
						sort: l,
						t: c
					} = Object(p.b)(r), d = Object(u.a)(`u_${s}`, l, r);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: n,
						listingKey: d,
						profileName: s,
						sort: l,
						timeSort: c
					}
				}),
				ye = Object(i.b)(ge, (e, t) => ({
					onLoadMore: () => e(Object(m.moreItemsRequested)()),
					onLayoutChange: () => e(Object(m.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					}))
				}));
			t.default = fe(ye(e => {
				const {
					contentGateInfo: t,
					over18Prefs: r,
					isOwnProfile: n,
					isProfileNSFW: s,
					listingKey: a,
					onLoadMore: i,
					onLayoutChange: l,
					pageLayer: d,
					profileName: u,
					sort: m,
					timeSort: p
				} = e;
				if (!u || !d) return null;
				if (t && t.profileDeleted) return o.a.createElement(h.default, {
					contentGateType: pe.a.ProfileDeleted,
					profileName: u
				});
				if (t && t.profileSuspended) return o.a.createElement(h.default, {
					contentGateType: pe.a.ProfileSuspended,
					profileName: u
				});
				if (451 === d.status || t && t.profileBlockedForLegalReason) return o.a.createElement(h.default, {
					contentGateType: pe.a.ProfileBlockedForLegalReason,
					profileName: u
				});
				if (403 === d.status) return o.a.createElement(he.a, null);
				if (404 === d.status) return o.a.createElement(h.default, {
					contentGateType: pe.a.ProfileDoesNotExist,
					profileName: u
				});
				const g = u.toLowerCase(),
					y = `/user/${u}/comments/`,
					w = {
						listingKey: a,
						listingName: g
					};
				if (!r && s && !n) return o.a.createElement(h.default, {
					contentGateType: pe.a.Nsfw,
					subredditName: u
				});
				const k = {
					sort: m,
					baseUrl: y,
					sortOptions: c.Ab,
					timeSort: p
				};
				return o.a.createElement(me.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
						profileName: u
					})),
					content: o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, k), o.a.createElement(f.a, null), o.a.createElement(le, {
						listingKey: a,
						listingName: g,
						listingViewed: (e, t) => Object(ue.o)(a, m, t, e, p),
						noPostsComponent: () => o.a.createElement(b.b, {
							profileName: u,
							timeSort: p
						}),
						onLoadMore: i,
						onTryAgain: l,
						inSubredditOrProfile: !1
					})),
					sidebar: o.a.createElement(de.a, _e({}, w, {
						profileName: u
					}))
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.dace568f2b910bb68b33.js.map