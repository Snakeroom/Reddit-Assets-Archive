// https://www.redditstatic.com/desktop2x/ProfileComments.90b26111b40f9d9808a5.js
// Retrieved at 4/27/2021, 11:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "reddit-components-ContentGate"], {
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function r(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
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
						validate: function(e, t, n) {
							var r = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var r = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var r = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(c), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var l = [];

				function d(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var n = e.__schemas__[t];
					if (null !== n) {
						var r = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = r, "[object Object]" === s(n)) return ! function(e) {
							return "[object RegExp]" === s(e)
						}(n.validate) ? a(n.validate) ? r.validate = n.validate : d(t, n) : r.validate = function(e) {
							return function(t, n) {
								var r = t.slice(n);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(n.validate), void(a(n.normalize) ? r.normalize = n.normalize : n.normalize ? d(t, n) : r.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
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
					r = e.__last_index__,
					s = e.__text_cache__.slice(n, r);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = s, this.text = s, this.url = s
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
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, l, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, r, s, a, o, i, l;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (s = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (a = n.index + n[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (a = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = o)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var r = t ? e.slice(t) : e; this.test(r);) n.push(p(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
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
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(s(e, t), 1)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
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
						active: r,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
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
				return b
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "i", (function() {
				return v
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				a = n("./node_modules/tlds/index.js"),
				o = n.n(a),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
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
				w = p.normalize;
			p.normalize = e => {
				w.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [..._.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				k = (e, t) => {
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(s.e)(e),
					o = encodeURIComponent(`${t}${a}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileCommentsPending", (function() {
				return L
			})), n.d(t, "profileCommentsLoaded", (function() {
				return T
			})), n.d(t, "profileCommentsFailed", (function() {
				return z
			})), n.d(t, "profileCommentsRequested", (function() {
				return I
			})), n.d(t, "moreItemsPending", (function() {
				return A
			})), n.d(t, "moreItemsLoaded", (function() {
				return B
			})), n.d(t, "moreItemsFailed", (function() {
				return R
			})), n.d(t, "moreItemsRequested", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/difference.js"),
				s = n.n(r),
				a = n("./node_modules/lodash/pick.js"),
				o = n.n(a),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/externalAccount.ts"),
				u = n("./src/reddit/actions/moderatingSubreddits.ts"),
				m = n("./src/reddit/actions/pages/profileShared.ts"),
				p = n("./src/reddit/actions/platform.ts"),
				h = n("./src/reddit/actions/profile/index.ts"),
				b = n("./src/reddit/actions/subreddit.ts"),
				_ = n("./src/reddit/constants/errors.ts"),
				f = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/config.ts"),
				x = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/makeApiRequest/index.ts"),
				v = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				C = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				E = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const O = (e, t, n, r) => {
				let s = Object(x.a)(Object(C.a)(Object(E.a)(`${w.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`)));
				return r && (s = Object(v.a)(s)), Object(k.a)(e, {
					data: n,
					endpoint: s,
					method: y.cb.GET
				})
			};
			var j = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				D = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				P = n("./src/reddit/selectors/profile.ts"),
				F = n("./src/reddit/selectors/profileComments.ts"),
				N = n("./src/reddit/actions/pages/profileComments/constants.ts");
			const L = Object(i.a)(N.f),
				T = Object(i.a)(N.e),
				z = Object(i.a)(N.d),
				I = e => async (t, n, r) => {
					const {
						queryParams: s,
						params: a
					} = e, {
						sort: i,
						t: g
					} = Object(m.b)(s), {
						profileName: w
					} = a, x = Object(l.a)(`u_${w}`, i, e.queryParams), {
						profileCommentsPage: y
					} = n(), k = y.commentIds[x], v = y.api.error[x], C = y.api.pending[x];
					if (await t(h.d(w)), C || k && !v) {
						if (k) {
							const e = Object(P.q)(n(), {
								profileName: w
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
						t: Object(j.a)(i, g)
					};
					t(L({
						key: x
					}));
					const F = await Object(S.a)("profileComments", () => O(r.apiContext(), w, E, Object(D.a)(n())));
					if (!F.ok) return t(z({
						account: F.body.data ? F.body.data.account : null,
						error: F.body.reason ? {
							type: F.body.reason
						} : F.error,
						key: x
					})), F.body.reason === _.a.DeletedProfile && t(Object(c.p)({
						profileName: w
					})), void t(p.m(F.status));
					const N = F.body;
					t(T({
						key: x,
						meta: n().meta,
						...N
					})), await Promise.all([t(Object(m.c)(w)), t(Object(b.q)()), t(Object(u.b)()), t(d.o(w))])
				}, A = Object(i.a)(N.c), B = Object(i.a)(N.b), R = Object(i.a)(N.a), U = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t(),
						{
							currentPage: a
						} = r.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: i,
						params: c
					} = a.routeMatch.match, {
						sort: d,
						t: u
					} = Object(m.b)(i), {
						profileName: p
					} = c, h = Object(l.a)(`u_${p}`, d, i), b = Object(F.d)(r, {
						listingKey: h
					});
					if (!b) return;
					const _ = Object(F.b)(r, {
							listingKey: h
						}),
						w = Object(F.c)(r, {
							listingKey: h
						}),
						x = w && w[b.token];
					if (_ || x) return;
					e(A({
						key: h,
						fetchedToken: b.token
					}));
					const y = await O(n(), p, {
						after: b.token,
						dist: b.dist,
						sort: d,
						t: u,
						...o()(i, f.l),
						layout: Object(g.O)(r, {}).toLowerCase()
					}, Object(D.a)(r));
					if (y.ok) {
						const t = Object(F.f)(r, {
								listingKey: h
							}),
							n = {
								...y.body,
								commentIds: s()(y.body.commentIds, t)
							};
						e(B({
							fetchedToken: b.token,
							key: h,
							meta: r.meta,
							...n
						}))
					} else e(R({
						account: y.body.data ? y.body.data.account : null,
						error: y.error,
						fetchedToken: b.token,
						key: h
					}))
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				_ = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = c.a.div("FooterContainer", _.a), w = c.a.div("UserAgreement", _.a), x = c.a.a("UserAgreementLink", _.a), y = c.a.a("PrivacyLink", _.a);
			var k = () => a.a.createElement(g, null, a.a.createElement(w, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", a.a.createElement(x, {
					href: `${r.a.redditUrl}/help/useragreement`
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", a.a.createElement(y, {
					href: `${r.a.redditUrl}/help/privacypolicy`
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				C = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./node_modules/lodash/flatMap.js"),
				O = n.n(E),
				j = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				D = n("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				F = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, a] = t.slice(r, r + 3);
						n.push(e), n.push([a, s])
					}
					return n
				};
			var N = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = O()(t, F)), e.parseRegularLinks && (t = O()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.f.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return a.a.createElement(D.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, s)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				L = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				z = n("./src/chat/controls/Svg/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var A = e => a.a.createElement(z.a, I({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = n("./src/reddit/models/ContentGate.ts"),
				R = n("./src/lib/constants/index.ts"),
				U = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/user.ts");
			var q = n("./src/reddit/selectors/meta.ts"),
				H = n("./src/reddit/components/ContentGate/index.m.less"),
				W = n.n(H);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = c.a.wrapped(A, "PrivateKey", W.a), K = c.a.div("ButtonsContainer", W.a), Y = c.a.div("Container", W.a), V = c.a.div("Description", W.a), J = c.a.div("PrivateSubredditDetails", W.a), X = c.a.div("PrivateSubredditDescription", W.a), Q = c.a.h3("PrivateSubredditName", W.a), $ = c.a.a("Link", W.a), ee = c.a.wrapped(T.k, "LinkRouterButton", W.a), te = c.a.wrapped(T.j, "LinkButton", W.a), ne = c.a.wrapped(T.n, "SecondaryLinkRouterButton", W.a), re = c.a.wrapped(T.m, "SecondaryLinkButton", W.a), se = c.a.wrapped(ee, "GoHomeLinkButton", W.a), ae = c.a.img("Image", W.a), oe = c.a.img("ImagePlaceholder", W.a), ie = c.a.wrapped(ee, "LeftLinkRouterButton", W.a), le = c.a.wrapped(te, "LeftLinkButton", W.a), ce = c.a.wrapped(re, "SecondaryLeftLinkButton", W.a), de = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", W.a), ue = c.a.h3("Title", W.a), me = c.a.div("PageBody", W.a), pe = c.a.div("QuarantineMessageWrapper", W.a), he = Object(l.c)({
				isLoggedIn: M.I,
				origin: q.i,
				user: M.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(M.J)(e)) return !1;
					const t = Object(U.d)(e);
					if (!t) return !1;
					const n = Object(M.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * R.x;
					return r > Date.now() - s
				})(e)
			}), be = Object(L.t)(), _e = Object(o.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), fe = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					isLoggedIn: o,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: l,
					location: c,
					origin: m,
					pageLayer: b,
					quarantineRequiresEmail: _,
					quarantineMessage: f,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: w,
					setNSFWPreference: x,
					subredditDescription: y,
					subredditName: k,
					user: E
				} = e, O = async () => {
					o ? await x() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(ue, null, Z._("r/{community name} is a Reddit Premium community", [Z._param("community name", k)], {
							hk: "2lyDwB"
						})), a.a.createElement(V, null, Z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(K, null, E ? a.a.createElement(ce, {
							href: `${r.a.redditUrl}/premium`
						}, Z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(le, {
							href: Object(d.a)(c, m)
						}, Z._("Sign Up", null, {
							hk: "rvpjy"
						})), E ? a.a.createElement(ee, {
							to: "/"
						}, Z._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(re, {
							href: Object(d.a)(c, m)
						}, Z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(ue, null, n === B.a.Nsfw ? Z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : Z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(V, null, Z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(K, null, a.a.createElement(ie, {
							to: "/"
						}, Z._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(re, {
							onClick: O
						}, Z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(G, null), a.a.createElement(ue, null, "r/", k, " ", Z._("is a private community", null, {
							hk: "7zZmq"
						})), y && y.length && a.a.createElement(J, null, a.a.createElement(Q, null, "r/", k), a.a.createElement(X, null, a.a.createElement("div", null, y))), a.a.createElement(V, null, Z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", k, " ", Z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), Z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(K, null, E ? a.a.createElement(a.a.Fragment, null, !i && a.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: W.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), a.a.createElement(ce, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${k}`
						}, Z._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(ce, {
							href: Object(d.a)(c, m)
						}, Z._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(ee, {
							to: "/"
						}, Z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case B.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(ue, null, Z._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(V, null, Z._("This community is {=quarantined}", [Z._param("=quarantined", a.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, Z._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(pe, null, w ? a.a.createElement(C.a, {
							content: w,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : g ? a.a.createElement(v.a, {
							html: g
						}) : f || Z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), Z._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(K, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(K, null, a.a.createElement(de, {
								to: "/"
							}, Z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(te, {
								href: `${r.a.redditUrl}/prefs/update`
							}, Z._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(K, null, a.a.createElement(ie, {
								to: "/"
							}, Z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(re, {
								onClick: t
							}, Z._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(E, s, _)));
					case B.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(ue, null, Z._("r/{community name} has been banned from Reddit", [Z._param("community name", k)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(V, null, e ? a.a.createElement(N, {
							linkClassName: W.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : Z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(K, null, a.a.createElement(ee, {
							to: "/"
						}, Z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ue, null, Z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(K, null, a.a.createElement(ee, {
							to: "/"
						}, Z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(oe, null), a.a.createElement(ue, null, Z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(V, null, Z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(K, null, E && a.a.createElement(h.a, {
							eventSource: "content_gate"
						}), a.a.createElement(se, {
							to: "/"
						}, Z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return Z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return Z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, Z._("This account has been {=suspended} .", [Z._param("=suspended", a.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, Z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(ue, null, Z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(V, null, Z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(K, null, a.a.createElement(se, {
							to: "/"
						}, Z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ue, null, Z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(K, null, a.a.createElement(se, {
							to: "/"
						}, Z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ae, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ue, null, Z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(K, null, a.a.createElement(ee, {
							to: "/"
						}, Z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = be(_e(Object(i.i)(e => a.a.createElement(Y, null, a.a.createElement("div", null, a.a.createElement(me, null, fe(e))), a.a.createElement(k, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = n.n(b),
				f = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				w = f.a.wrapped(c.c, "StyledTooltip", _.a),
				x = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.gb)(e),
					userIsSuspended: h.O
				});
			t.a = Object(o.b)(x, (e, {
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
				onHideTooltip: s,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c
			}) => a.a.createElement(u.l, {
				className: e,
				disabled: c || l,
				onClick: () => o(i),
				onMouseEnter: n,
				onMouseLeave: s,
				id: g,
				isFullWidth: !0
			}, r.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), l ? a.a.createElement(w, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? a.a.createElement(w, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				y = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				k = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				v = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = n.n(O);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = "view--layout--FUE",
				P = "LayoutSwitch--picker",
				F = Object(l.a)(f.a),
				N = {
					[h.d.Card]: k.a,
					[h.d.Classic]: x.a,
					[h.d.Compact]: y.a
				},
				L = {
					[h.d.Card]: function(e) {
						return a.a.createElement(w.a, S({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return a.a.createElement(w.a, S({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return a.a.createElement(w.a, S({}, e, {
							name: "view_compact"
						}))
					}
				},
				T = {
					[h.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				z = Object(b.t)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(E.b)(P),
					isInIcons2020: v.a,
					postLayout: b.O,
					redditStyle: b.A
				}),
				A = Object(o.b)(I, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.x)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: P
					}))
				}));
			class B extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: s
						} = this.props;
						t ? t(e) : (n(e, s), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.screen)(t),
							subreddit: Object(C.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: n,
							layout: r,
							onLayoutClick: s,
							postLayout: o
						} = this.props, i = r || h.e[o], l = e === i, d = n ? L[e] : N[e], u = T[e];
						return a.a.createElement(g.b, S({}, t, {
							className: Object(c.a)(j.a.LayoutItem, {
								[j.a.selected]: l
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: l,
							noHover: l,
							onClick: l ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), a.a.createElement(d, {
							className: j.a.LayoutIcon,
							onClick: l ? void 0 : s,
							isFilled: n && l && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(F, S({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: P
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, s = t || h.e[r];
					return a.a.createElement("div", {
						className: Object(c.a)(j.a.Container, e),
						id: D
					}, a.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: P,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), a.a.createElement(_.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = z(A(Object(p.c)(Object(d.a)(B))))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				h = n("./src/lib/addQueryParams/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				_ = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				x = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				k = n("./src/reddit/controls/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/helpers/trackers/navigation.ts"),
				O = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				S = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				D = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = n("./src/reddit/components/ListingSort/index.m.less"),
				L = n.n(N),
				T = n("./src/lib/lessComponent.tsx");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "ListingSort--SortPicker",
				A = Object(w.a)(T.a.wrapped(k.a, "Dropdown", L.a)),
				B = T.a.wrapped(F.a, "ListingSortIcon", L.a),
				R = (T.a.wrapped(O.b, "DropdownTriangle", L.a), T.a.div("Title", L.a)),
				U = T.a.wrapped(e => s.a.createElement(v.b, z({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", L.a),
				M = ({
					disabled: e,
					...t
				}) => s.a.createElement("div", z({}, t, {
					className: Object(o.a)(L.a.SortWrapper, t.className, {
						[L.a.isDisabled]: e
					})
				})),
				q = T.a.div("DropdownRowDisabled", L.a),
				H = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				W = Object(p.c)({
					isAwardListingExperimentEnabled: S.a,
					isBestSortPopularEnabled: j.a,
					user: P.i,
					dropdownIsOpen: (e, t) => Object(D.b)(t.dropdownId || I)(e),
					isPopularPage: d.C
				}),
				Z = Object(a.b)(W, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || I
					}))
				}));
			var G = T.a.wrapped(H(Z(Object(c.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(R, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(M, {
					disabled: e.disabled
				}, e.children || s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(x.a)(e.sort),
					id: e.dropdownId || I,
					showDropdownTriangle: !0
				}, s.a.createElement(B, {
					sort: e.sort
				}))), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(A, z({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || I
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(q, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const a = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (e && (n || r) || t && r) && a.unshift(b.P.BEST), t && s && a.splice(3, 0, b.P.AWARDED), a
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => s.a.createElement(v.b, {
					className: Object(o.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(x.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(E.a)(t))
					},
					href: e.isProfilePage ? Object(h.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, s.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", L.a),
				K = n("./src/reddit/constants/parameters.ts");
			const Y = e => {
					const t = V[e];
					return t && t() || ""
				},
				V = {
					[b.Tb.AllStates]: () => g.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[b.Tb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.Tb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.Tb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.Tb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.Tb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.Tb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.Tb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.Tb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.Tb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.Tb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.Tb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.Tb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.Tb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.Tb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.Tb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.Tb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.Tb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.Tb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.Tb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.Tb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.Tb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.Tb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.Tb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.Tb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.Tb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.Tb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.Tb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.Tb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.Tb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.Tb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.Tb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.Tb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.Tb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.Tb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.Tb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.Tb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.Tb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.Tb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.Tb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.Tb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.Tb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.Tb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.Tb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.Tb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.Tb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.Tb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.Tb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.Tb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.Tb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.Tb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.Tb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = T.a.wrapped(k.a, "_Dropdown", X.a),
				ee = Object(w.a)($),
				te = e => {
					return e.indexOf("_") > 0 && re(e) === b.w.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return b.Tb.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				se = e => {
					const t = re(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				ae = Object(d.t)(),
				oe = Object(p.c)({
					dropdownIsOpen: Object(D.b)("StateSort--StateSortPicker")
				}),
				ie = Object(a.b)(oe, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(_.b)(t)), e(Object(l.u)(b.w.UnitedStates + "_" + n))
					}
				}));
			var le = T.a.wrapped(ae(ie(e => {
				const t = `${e.baseUrl}?${K.h}=${b.w.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(M, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Y(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.Tb).map(n => {
					const r = b.Tb[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.Tb.AllStates ? t : `${t}_${e}`)(r), se(r))
					}, s.a.createElement(v.b, {
						className: Object(o.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Y(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", X.a);
			const ce = {
				[b.w.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.w.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.w.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.w.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.w.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.w.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.w.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.w.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.w.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.w.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.w.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.w.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.w.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.w.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.w.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.w.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.w.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.w.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.w.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.w.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.w.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.w.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.w.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.w.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.w.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.w.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.w.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.w.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.w.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.w.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.w.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.w.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.w.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.w.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.w.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.w.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var de = n("./src/reddit/components/CountrySort/index.m.less"),
				ue = n.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(d.t)(),
				be = Object(p.c)({
					dropdownIsOpen: Object(D.b)(pe)
				});
			var _e = he(Object(a.b)(be, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(_.b)(t)), e(Object(l.u)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = ne(e.sort),
						r = `${e.baseUrl}?${K.h}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(o.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, s.a.createElement(M, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(U, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[b.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(ee, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.w).map(n => {
						const a = b.w[n];
						return s.a.createElement("div", {
							key: a,
							onClick: () => e.onClickLink(`${r}${se(a)}`, a)
						}, s.a.createElement(v.b, {
							className: Object(o.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
							displayText: ce[a](),
							isSelected: t === a
						}))
					})))), t === b.w.UnitedStates && s.a.createElement(le, {
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
				xe = n.n(we);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ke = Object(w.a)(k.a),
				ve = (e, t, n) => {
					let r = e.url;
					return e.urlParams.sort || Object(d.G)(e) || (r = ge.a.join(r, t)), Object(h.a)(r, {
						[K.x]: n
					})
				},
				Ce = T.a.div("ListingSortContainer", xe.a),
				Ee = Object(d.t)(),
				Oe = Object(p.c)({
					dropdownIsOpen: Object(D.b)("TimeSort--SortPicker")
				});
			var je = Ee(Object(a.b)(Oe, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => s.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(M, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(x.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(ke, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.Wb.HOUR, b.Wb.DAY, b.Wb.WEEK, b.Wb.MONTH, b.Wb.YEAR, b.Wb.ALL].map(t => s.a.createElement(v.b, {
					className: Object(o.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(x.b)(t),
					href: ve(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(E.c)(t))
					}
				})))))))),
				Se = n("./src/reddit/constants/listings.ts"),
				De = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Pe = n("./src/reddit/controls/Button/index.tsx"),
				Fe = n("./src/reddit/icons/fonts/index.tsx"),
				Ne = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Le);

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = new Set([b.P.CONTROVERSIAL, b.P.TOP]),
				Ae = new Set([b.P.CONTROVERSIAL, b.P.RISING]),
				Be = "ListingSort--Overflow",
				Re = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ue = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, P.i, d.C, S.a, (e, t, n, r, s, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e
					};
					const o = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (t && (r || n) || s && n) && o.unshift(b.P.BEST), s && a && o.splice(3, 0, b.P.AWARDED), {
						isPopularPage: s,
						sortOptions: o
					}
				});
			class Me extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(h.a)(t, {
							sort: e
						}) : Object(C.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return s.a.createElement(Pe.q, {
							className: Object(o.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Pe.a.InternalLink,
							priority: Pe.b.Plain,
							Icon: n => s.a.createElement(B, ze({}, n, {
								className: Object(o.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(x.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: a
						} = this.props, o = r && !!n && e === b.P.HOT && a === b.P.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), o && s.a.createElement(_e, {
							baseUrl: Se.c[Se.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: a,
						timeSort: i
					} = this.props, l = !t && Ie.has(r), c = Ae.has(r), d = a.filter(e => !Ae.has(e)), u = a.filter(e => Ae.has(e) && e !== r);
					return s.a.createElement(De.b.Consumer, null, ({
						icons2020: t
					}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(G, ze({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(o.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(o.a)(Te.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(r), l && s.a.createElement(je, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || b.Xb,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(G, ze({}, this.props, {
						className: Object(o.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Be,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Be
					}, t ? s.a.createElement(Fe.a, {
						name: "overflow_horizontal"
					}) : s.a.createElement(Ne.a, null)))))
				}
			}
			var qe = Re(Object(a.b)(Ue)(Object(c.c)(Me))),
				He = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				We = n.n(He);
			const Ze = Object(d.t)({
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ge = Object(a.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, r) => {
						if (t) {
							const s = Object(i.c)({
								sort: n,
								timeSort: r
							});
							e(Object(l.I)(t, s))
						}
					}
				}));
			class Ke extends s.a.Component {
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
						disabled: r = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(o.a)(We.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(qe, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !a && s.a.createElement(m.a, {
						className: We.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ze(Ge(Object(c.c)(Ke)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				d = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				h = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				b = n("./src/reddit/icons/svgs/Top/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.m.less"),
				f = n.n(_);
			const g = {
					[o.P.BEST]: d.a,
					[o.P.HOT]: m.a,
					[o.P.NEW]: p.a,
					[o.P.CONTROVERSIAL]: u.a,
					[o.P.TOP]: b.a,
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

			function x({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.a)() && void 0 !== w[n]) return s.a.createElement(l.a, {
					name: w[n],
					isFilled: t,
					className: Object(a.a)(e, f.a.iconStyles)
				});
				const r = g[n];
				return r ? s.a.createElement(r, {
					className: Object(a.a)(e, f.a.iconStyles)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...n
			}) => s.a.createElement("div", l({
				className: Object(a.a)(i.a.border, {
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
			var r = n("./node_modules/lodash/times.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				_ = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				x = n.n(w);
			const y = u.a.div("ProfileOwnerCommentWrapper", x.a),
				k = u.a.div("CommentContentWrapper", x.a),
				v = u.a.div("Wrapper", x.a),
				C = u.a.div("CommentSeparator", x.a),
				E = Object(i.b)(() => Object(l.c)({
					comment: (e, t) => Object(_.a)(e, t),
					isAwarded: (e, t) => {
						const n = Object(_.a)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(f.a)(e, t);
							return n && n.coinPrice >= c.g
						})
					},
					isNightmodeOn: g.V
				}), e => ({
					openPost: t => e(Object(h.I)(t))
				}));
			class O extends o.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: r,
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
							r({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, o.a.createElement(v, {
						className: Object(d.a)({
							[x.a.isFirst]: i,
							[x.a.isLast]: l,
							[x.a.isAwarded]: a,
							[x.a.isNightmodeOn]: c
						})
					}, s()(n + 1, e => o.a.createElement(C, {
						key: e
					})), o.a.createElement(k, null, h(t, u, p))))
				}
			}
			const j = (e, t, n) => o.a.createElement(y, null, S(e, t, n, !0, !0)),
				S = (e, t, n, r = !1, s) => o.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: r,
					showModTools: n,
					isExpanded: !!s
				});
			t.a = E(O)
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, n) {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const a = {
					[s.P.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.P.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.P.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.P.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.P.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.P.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.P.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[s.Wb.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.Wb.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.Wb.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.Wb.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.Wb.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.Wb.ALL]: () => r.fbt._("All Time", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext({})
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), s.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", null, "Hot"), s.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = ({
					message: e
				}) => a.a.createElement("div", {
					className: l.a.container
				}, a.a.createElement("h3", {
					className: l.a.title
				}, e || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), a.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => a.a.createElement("div", {
					className: l.a.container
				}, a.a.createElement("h3", {
					className: l.a.title
				}, e || r.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), a.a.createElement(o.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/profileComments/index.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				h = n("./src/reddit/components/ContentGate/index.tsx"),
				b = n("./src/reddit/components/EmptyProfile/index.ts"),
				_ = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/lib/classNames/index.ts"),
				w = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/ClassicPost/index.tsx"),
				k = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				v = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				E = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				O = n("./src/reddit/constants/postLayout.ts"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = n("./src/reddit/selectors/commentSelector.ts"),
				P = n("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				F = n.n(P);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = x.a.wrapped(y.default, "ClassicPost", F.a),
				T = x.a.wrapped(v.a, "OverviewCommentPost", F.a),
				z = Object(j.t)({
					currentProfileName: j.h,
					pageLayer: e => e
				}),
				I = Object(l.c)({
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
								users: n
							} = e, r = t.toLowerCase(), s = n.models[r];
							return s ? s.username : void 0
						})(e, t)
					}
				});
			var A = z(Object(i.b)(I)(e => {
				const {
					comment: t,
					itemId: n,
					isFirstInCommentList: r,
					isLastInCommentList: s,
					layout: a,
					profileName: i,
					allowModToolsUnderComments: l
				} = e;
				if (a === O.g.Compact) return o.a.createElement(k.a, e);
				const {
					height: c,
					width: d,
					...u
				} = e;
				return o.a.createElement(B, u, r && o.a.createElement(C.a, {
					isFirst: !0
				}, a === O.g.Large ? o.a.createElement(L, N({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : o.a.createElement(T, N({}, e, {
					commentId: n,
					profileName: i
				}))), o.a.createElement(C.a, {
					isLast: s
				}, o.a.createElement(E.a, {
					commentId: n,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: n,
					profileName: i,
					showModTools: l
				})))
			}));
			const B = Object(w.a)(e => o.a.createElement("div", {
				className: Object(g.a)(F.a.backgroundMargin, {
					[F.a.isFirstInCommentList]: e.isFirstInCommentList,
					[F.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(S.e)(e)
				}
			}, e.children));
			var R = n("./src/reddit/components/ProfileItemList/index.tsx"),
				U = n("./node_modules/lodash/noop.js"),
				M = n.n(U),
				q = n("./src/reddit/actions/ads/index.ts"),
				H = n("./src/reddit/actions/comment/list.ts"),
				W = n("./src/reddit/actions/post.ts"),
				Z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				G = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				K = n("./src/reddit/helpers/trackers/post.ts"),
				Y = n("./src/reddit/featureFlags/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				X = n("./src/reddit/selectors/profileComments.ts"),
				Q = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/selectors/tracking.ts"),
				ee = n("./src/reddit/selectors/user.ts");
			const te = Object(j.t)(),
				ne = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ee.i,
					measureScrollFPS: Y.d.measureScrollFPS,
					layout: j.O,
					loadMore: X.d,
					subredditsById: Q.ab,
					viewportDataLoaded: $.a,
					commentsById: V.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: J.I,
					estimateItemHeight: e => (e, t, n) => {
						if (n) switch (t) {
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
				re = Object(l.c)(ne),
				se = Object(i.b)(re, e => ({
					onBottomViewed: (t, n) => e(Object(H.c)(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(q.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(W.I)(t)),
					fireAdPixelsOfType: M.a,
					trackOnPostEnteredViewport: M.a
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(K.g)(e, t),
					postComponentForLayout: G.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = e => o.a.createElement(A, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(Z.c)(te(se(e))))(R.a);
			var le = e => o.a.createElement(ie, ae({}, e, {
					itemComponent: oe
				})),
				ce = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				de = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = n("./src/reddit/helpers/trackers/screenview.ts"),
				me = n("./src/reddit/layout/page/Listing/index.tsx"),
				pe = n("./src/reddit/models/ContentGate.ts"),
				he = n("./src/reddit/pages/ErrorPages/index.tsx"),
				be = n("./src/reddit/selectors/profile.ts");

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = Object(j.t)(),
				ge = Object(l.a)(j.B, ee.cb, (e, {
					location: t
				}) => s()([...Object(d.a)(t.search)]), j.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(be.j)(e, {
					profileName: t.params.profileName
				}), ee.J, (e, {
					match: t
				}) => Object(ee.e)(e, c.Yb + t.params.profileName), (e, t, n, r, s, a, o, i) => {
					const {
						sort: l,
						t: c
					} = Object(p.b)(n), d = Object(u.a)(`u_${s}`, l, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: r,
						listingKey: d,
						profileName: s,
						sort: l,
						timeSort: c
					}
				}),
				we = Object(i.b)(ge, (e, t) => ({
					onLoadMore: () => e(Object(m.moreItemsRequested)()),
					onLayoutChange: () => e(Object(m.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					}))
				}));
			t.default = fe(we(e => {
				const {
					contentGateInfo: t,
					over18Prefs: n,
					isOwnProfile: r,
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
					w = `/user/${u}/comments/`,
					x = {
						listingKey: a,
						listingName: g
					};
				if (!n && s && !r) return o.a.createElement(h.default, {
					contentGateType: pe.a.Nsfw,
					subredditName: u
				});
				const y = {
					sort: m,
					baseUrl: w,
					sortOptions: c.vb,
					timeSort: p
				};
				return o.a.createElement(me.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
						profileName: u
					})),
					content: o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, y), o.a.createElement(f.a, null), o.a.createElement(le, {
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
					sidebar: o.a.createElement(de.a, _e({}, x, {
						profileName: u
					}))
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.90b26111b40f9d9808a5.js.map