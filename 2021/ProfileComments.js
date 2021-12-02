// https://www.redditstatic.com/desktop2x/ProfileComments.1d9ea8f5107efbf29fd2.js
// Retrieved at 12/2/2021, 10:50:04 AM by Reddit Dataminer v1.0.0
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
				u = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function d(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(l), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function u(e, t) {
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
						}(r.validate) ? a(r.validate) ? n.validate = r.validate : u(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(a(r.normalize) ? n.normalize = r.normalize : r.normalize ? u(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(r) ? u(t, r): c.push(t)
					}
				})), c.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var d = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(o).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + d + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + d + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
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

			function _(e, t) {
				if (!(this instanceof _)) return new _(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = u, this.__tlds_replaced__ = !1, this.re = {}, d(this)
			}
			_.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, d(this), this
			}, _.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, _.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, s, a, o, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (s = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (a = r.index + r[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (a = n.index + n[1].length, o = n.index + n[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = o)), this.__index__ >= 0
			}, _.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, _.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, _.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) r.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, _.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), d(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, d(this), this)
			}, _.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, _.prototype.onCompile = function() {}, e.exports = _
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
				c = r.n(i);
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
						[c.a.disable]: r,
						[c.a.active]: n,
						[c.a.hover]: !!o
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
				return _
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "i", (function() {
				return E
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				a = r("./node_modules/tlds/index.js"),
				o = r.n(a),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./node_modules/lodash/values.js"),
				l = r.n(c);
			const u = e => l()(i.b).includes(e.substring(1)),
				d = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, d),
				p = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				_ = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				b = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				y = p.normalize;
			p.normalize = e => {
				y.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const r = u(e.text);
						return !r || r && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ..._.match(e) || []].map(e => !u(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				k = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				E = e => {
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
				return A
			})), r.d(t, "profileCommentsLoaded", (function() {
				return B
			})), r.d(t, "profileCommentsFailed", (function() {
				return I
			})), r.d(t, "profileCommentsRequested", (function() {
				return T
			})), r.d(t, "moreItemsPending", (function() {
				return R
			})), r.d(t, "moreItemsLoaded", (function() {
				return N
			})), r.d(t, "moreItemsFailed", (function() {
				return q
			})), r.d(t, "moreItemsRequested", (function() {
				return M
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/difference.js"),
				s = r.n(n),
				a = r("./node_modules/lodash/pick.js"),
				o = r.n(a),
				i = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				l = r("./src/reddit/actions/contentGate.ts"),
				u = r("./src/reddit/actions/externalAccount.ts"),
				d = r("./src/reddit/actions/moderatingSubreddits.ts"),
				m = r("./src/reddit/actions/pages/profileShared.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				_ = r("./src/reddit/actions/profile/index.ts"),
				h = r("./src/reddit/actions/subreddit.ts"),
				f = r("./src/reddit/constants/errors.ts"),
				b = r("./src/reddit/constants/parameters.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/config.ts"),
				x = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				v = r("./src/lib/constants/index.ts"),
				k = r("./src/lib/makeApiRequest/index.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				w = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				F = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const j = (e, t, r, n) => {
				let s = Object(E.a)(Object(x.a)(Object(w.a)(Object(F.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return n && (s = Object(C.a)(s)), Object(k.a)(e, {
					data: r,
					endpoint: s,
					method: v.jb.GET
				})
			};
			var D = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				O = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				z = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				P = r("./src/reddit/selectors/profile.ts"),
				L = r("./src/reddit/selectors/profileComments.ts"),
				S = r("./src/reddit/actions/pages/profileComments/constants.ts");
			const A = Object(i.a)(S.f),
				B = Object(i.a)(S.e),
				I = Object(i.a)(S.d),
				T = e => async (t, r, n) => {
					const {
						queryParams: s,
						params: a
					} = e, {
						sort: i,
						t: g
					} = Object(m.b)(s), {
						profileName: y
					} = a, x = Object(c.a)(`u_${y}`, i, e.queryParams), {
						profileCommentsPage: v
					} = r(), k = v.commentIds[x], E = v.api.error[x], C = v.api.pending[x];
					if (await t(_.d(y)), C || k && !E) {
						if (k) {
							const e = Object(P.q)(r(), {
								profileName: y
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					const w = {
						...o()(e.queryParams, [...b.l, b.h]),
						sort: i,
						t: Object(D.a)(i, g)
					};
					t(A({
						key: x
					}));
					const F = await Object(O.a)("profileComments", () => j(n.apiContext(), y, w, Object(z.a)(r())));
					if (!F.ok) return t(I({
						account: F.body.data ? F.body.data.account : null,
						error: F.body.reason ? {
							type: F.body.reason
						} : F.error,
						key: x
					})), F.body.reason === f.a.DeletedProfile && t(Object(l.p)({
						profileName: y
					})), void t(p.n(F.status));
					const L = F.body;
					t(B({
						key: x,
						meta: r().meta,
						...L
					})), await Promise.all([t(Object(m.c)(y)), t(Object(h.q)()), t(Object(d.b)()), t(u.o(y))])
				}, R = Object(i.a)(S.c), N = Object(i.a)(S.b), q = Object(i.a)(S.a), M = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t(),
						{
							currentPage: a
						} = n.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: i,
						params: l
					} = a.routeMatch.match, {
						sort: u,
						t: d
					} = Object(m.b)(i), {
						profileName: p
					} = l, _ = Object(c.a)(`u_${p}`, u, i), h = Object(L.d)(n, {
						listingKey: _
					});
					if (!h) return;
					const f = Object(L.b)(n, {
							listingKey: _
						}),
						y = Object(L.c)(n, {
							listingKey: _
						}),
						x = y && y[h.token];
					if (f || x) return;
					e(R({
						key: _,
						fetchedToken: h.token
					}));
					const v = await j(r(), p, {
						after: h.token,
						dist: h.dist,
						sort: u,
						t: d,
						...o()(i, b.l),
						layout: Object(g.Q)(n, {}).toLowerCase()
					}, Object(z.a)(n));
					if (v.ok) {
						const t = Object(L.f)(n, {
								listingKey: _
							}),
							r = {
								...v.body,
								commentIds: s()(v.body.commentIds, t)
							};
						e(N({
							fetchedToken: h.token,
							key: _,
							meta: n.meta,
							...r
						}))
					} else e(q({
						account: v.body.data ? v.body.data.account : null,
						error: v.error,
						fetchedToken: h.token,
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
				c = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./node_modules/reselect/es/index.js"),
				u = r("./src/lib/lessComponent.tsx"),
				d = r("./src/lib/loginHref/index.ts"),
				m = r("./src/reddit/actions/contentGate.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				_ = r("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = r("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = r("./src/reddit/components/Footer/index.m.less"),
				b = r.n(f);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = u.a.div("FooterContainer", b.a), x = u.a.div("UserAgreement", b.a), v = u.a.a("UserAgreementLink", b.a), k = u.a.a("PrivacyLink", b.a);
			var E = () => a.a.createElement(y, null, a.a.createElement(x, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(v, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(k, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				C = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = r("./src/reddit/components/RichTextJson/index.tsx"),
				F = r("./node_modules/lodash/flatMap.js"),
				j = r.n(F),
				D = r("./src/lib/linkMatchers/index.ts"),
				O = r("./src/lib/linkMatchers/customLinks.ts"),
				z = r("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				L = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, a] = t.slice(n, n + 3);
						r.push(e), r.push([a, s])
					}
					return r
				};
			var S = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, L)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = D.f.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return a.a.createElement(z.b, {
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
				A = r("./src/reddit/contexts/PageLayer/index.tsx"),
				B = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => a.a.createElement(I.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				N = r("./src/reddit/models/ContentGate.ts"),
				q = r("./src/lib/constants/index.ts"),
				M = r("./src/reddit/selectors/platform.ts"),
				U = r("./src/reddit/selectors/user.ts");
			var Z = r("./src/reddit/selectors/meta.ts"),
				H = r("./src/reddit/components/ContentGate/index.m.less"),
				G = r.n(H);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = u.a.wrapped(R, "PrivateKey", G.a), J = u.a.div("ButtonsContainer", G.a), V = u.a.div("Container", G.a), $ = u.a.div("ContainerExp", G.a), Y = u.a.div("Description", G.a), Q = u.a.div("PrivateSubredditDetails", G.a), X = u.a.div("PrivateSubredditDescription", G.a), ee = u.a.h3("PrivateSubredditName", G.a), te = u.a.a("Link", G.a), re = u.a.wrapped(B.n, "LinkRouterButton", G.a), ne = u.a.wrapped(B.m, "LinkButton", G.a), se = u.a.wrapped(B.q, "SecondaryLinkRouterButton", G.a), ae = u.a.wrapped(B.p, "SecondaryLinkButton", G.a), oe = u.a.wrapped(re, "GoHomeLinkButton", G.a), ie = u.a.wrapped(h.a, "CreateCommunityButton", G.a), ce = u.a.img("Image", G.a), le = u.a.img("ImagePlaceholder", G.a), ue = u.a.wrapped(re, "LeftLinkRouterButton", G.a), de = u.a.wrapped(ne, "LeftLinkButton", G.a), me = u.a.wrapped(ae, "SecondaryLeftLinkButton", G.a), pe = u.a.wrapped(se, "SecondaryLeftLinkRouterButton", G.a), _e = u.a.h3("Title", G.a), he = u.a.div("PageBody", G.a), fe = u.a.div("QuarantineMessageWrapper", G.a), be = Object(l.c)({
				isLoggedIn: U.J,
				origin: Z.j,
				user: U.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(U.K)(e)) return !1;
					const t = Object(M.d)(e);
					if (!t) return !1;
					const r = Object(U.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * q.B;
					return n > Date.now() - s
				})(e)
			}), ge = Object(A.u)(), ye = Object(o.b)(be, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), xe = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: s,
					isLoggedIn: o,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: c,
					location: l,
					origin: u,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: b,
					quarantineMessageRTJson: g,
					setNSFWPreference: y,
					subredditDescription: x,
					subredditName: v,
					user: k
				} = e, E = async () => {
					o ? await y() : await Object(m.k)(), window.location.reload()
				};
				switch (r) {
					case N.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(_e, null, K._("r/{community name} is a Reddit Premium community", [K._param("community name", v)], {
							hk: "2lyDwB"
						})), a.a.createElement(Y, null, K._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(J, null, k ? a.a.createElement(me, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, K._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(de, {
							href: Object(d.a)(l, u),
							redditStyle: !0
						}, K._("Sign Up", null, {
							hk: "rvpjy"
						})), k ? a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, K._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(ae, {
							href: Object(d.a)(l, u),
							redditStyle: !0
						}, K._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case N.a.Nsfw:
					case N.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(_e, null, r === N.a.Nsfw ? K._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : K._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(Y, null, K._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(J, null, a.a.createElement(ue, {
							to: "/",
							redditStyle: !0
						}, K._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(ae, {
							onClick: E,
							redditStyle: !0
						}, K._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case N.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(W, null), a.a.createElement(_e, null, "r/", v, " ", K._("is a private community", null, {
							hk: "7zZmq"
						})), x && x.length && a.a.createElement(Q, null, a.a.createElement(ee, null, "r/", v), a.a.createElement(X, null, a.a.createElement("div", null, x))), a.a.createElement(Y, null, K._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", v, " ", K._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), K._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(J, null, k ? a.a.createElement(a.a.Fragment, null, !i && a.a.createElement(_.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), a.a.createElement(me, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${v}`,
							redditStyle: !0
						}, K._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(me, {
							href: Object(d.a)(l, u),
							redditStyle: !0
						}, K._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, K._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case N.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(_e, null, K._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(Y, null, K._("This community is {=quarantined}", [K._param("=quarantined", a.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, K._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(fe, null, g ? a.a.createElement(w.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : b ? a.a.createElement(C.a, {
							html: b
						}) : f || K._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), K._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(J, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? a.a.createElement(J, null, a.a.createElement(pe, {
								to: "/",
								redditStyle: !0
							}, K._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ne, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, K._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(J, null, a.a.createElement(ue, {
								to: "/",
								redditStyle: !0
							}, K._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ae, {
								onClick: t,
								redditStyle: !0
							}, K._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(k, s, h)));
					case N.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(_e, null, K._("r/{community name} has been banned from Reddit", [K._param("community name", v)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(Y, null, e ? a.a.createElement(S, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : K._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(J, null, a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, K._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case N.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(_e, null, K._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(J, null, a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, K._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case N.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(le, null), a.a.createElement(_e, null, K._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(Y, null, K._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(J, null, k && a.a.createElement(ie, {
							eventSource: "content_gate"
						}), a.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case N.a.ProfileDoesNotExist:
					case N.a.ProfileDeleted:
					case N.a.ProfileSuspended:
					case N.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(_e, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case N.a.ProfileBlockedForLegalReason:
									return K._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case N.a.ProfileDeleted:
									return K._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case N.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, K._("This account has been {=suspended} .", [K._param("=suspended", a.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, K._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case N.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(_e, null, K._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(Y, null, K._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(J, null, a.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case N.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(_e, null, K._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(J, null, a.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case N.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(ce, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(_e, null, K._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(J, null, a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, K._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ge(ye(Object(i.i)(e => {
				const t = Object(s.useContext)(c.a) ? $ : V;
				return a.a.createElement(t, null, a.a.createElement("div", {
					"data-testid": "content-gate"
				}, a.a.createElement(he, null, xe(e))), a.a.createElement(E, null))
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
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				_ = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = r.n(f),
				g = r("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				x = g.a.wrapped(u.c, "StyledTooltip", b.a),
				v = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ib)(e),
					userIsSuspended: h.R
				});
			t.a = Object(o.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: r => {
					r(Object(_.c)(t)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: y
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(d.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: r,
				onHideTooltip: s,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: l,
				onClick: u
			}) => {
				return a.a.createElement(p.t, {
					className: e,
					disabled: l || c,
					onClick: e => {
						u && u(e), o(i)
					},
					onMouseEnter: r,
					onMouseLeave: s,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: y,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? a.a.createElement(x, {
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
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
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

			function c() {
				return (c = Object.assign || function(e) {
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
			}) => s.a.createElement("div", c({
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
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/constants/gold.ts"),
				u = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				m = r("./src/reddit/components/CommentContainer/index.tsx"),
				p = r("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				_ = r("./src/reddit/actions/post.ts"),
				h = r("./src/reddit/helpers/getClickInfo.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/communityAwards.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				x = r.n(y);
			const v = d.a.div("ProfileOwnerCommentWrapper", x.a),
				k = d.a.div("CommentContentWrapper", x.a),
				E = d.a.div("Wrapper", x.a),
				C = d.a.div("CommentSeparator", x.a),
				w = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const r = Object(f.b)(e, t);
						return !(!r || !r.awardCountsById) && Object.keys(r.awardCountsById).some(t => {
							const r = Object(b.a)(e, t);
							return r && r.coinPrice >= l.g
						})
					},
					isNightmodeOn: g.X
				}), e => ({
					openPost: t => e(Object(_.K)(t))
				}));
			class F extends o.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: r,
						openPost: n,
						isAwarded: a,
						isFirst: i,
						isLast: c,
						isNightmodeOn: l,
						profileName: d,
						showModTools: p
					} = this.props, _ = d === e.author ? j : D;
					return o.a.createElement(m.a, {
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
					}, o.a.createElement(E, {
						className: Object(u.a)({
							[x.a.isFirst]: i,
							[x.a.isLast]: c,
							[x.a.isAwarded]: a,
							[x.a.isNightmodeOn]: l
						})
					}, s()(r + 1, e => o.a.createElement(C, {
						key: e
					})), o.a.createElement(k, null, _(t, d, p))))
				}
			}
			const j = (e, t, r) => o.a.createElement(v, null, D(e, t, r, !0, !0)),
				D = (e, t, r, n = !1, s) => o.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: n,
					showModTools: r,
					isExpanded: !!s
				});
			t.a = w(F)
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
				return u
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/pages/ErrorPages/index.m.less"),
				c = r.n(i);
			const l = ({
					message: e
				}) => a.a.createElement("div", {
					className: c.a.container
				}, a.a.createElement("h3", {
					className: c.a.title
				}, e || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), a.a.createElement(o.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				u = ({
					message: e
				}) => a.a.createElement("div", {
					className: c.a.container
				}, a.a.createElement("h3", {
					className: c.a.title
				}, e || n.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), a.a.createElement(o.n, {
					className: c.a.primaryRouterLink,
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
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/extractQueryParams/index.ts"),
				d = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/profileComments/index.ts"),
				p = r("./src/reddit/actions/pages/profileShared.ts"),
				_ = r("./src/reddit/components/ContentGate/index.tsx"),
				h = r("./src/reddit/components/EmptyProfile/index.ts"),
				f = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = r("./src/reddit/components/JumpToContent/index.tsx"),
				g = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = r("./src/lib/lessComponent.tsx"),
				v = r("./src/reddit/components/ClassicPost/index.tsx"),
				k = r("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				E = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = r("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				w = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				F = r("./src/reddit/constants/postLayout.ts"),
				j = r("./src/reddit/contexts/PageLayer/index.tsx"),
				D = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				O = r("./src/reddit/selectors/commentSelector.ts"),
				z = r("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				P = r.n(z);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = x.a.wrapped(v.default, "ClassicPost", P.a),
				A = x.a.wrapped(E.a, "OverviewCommentPost", P.a),
				B = Object(j.u)({
					currentProfileName: j.i,
					pageLayer: e => e
				}),
				I = Object(c.c)({
					comment: (e, {
						itemId: t
					}) => Object(O.b)(e, {
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
			var T = B(Object(i.b)(I)(e => {
				const {
					comment: t,
					itemId: r,
					isFirstInCommentList: n,
					isLastInCommentList: s,
					layout: a,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (a === F.g.Compact) return o.a.createElement(k.a, e);
				const {
					height: l,
					width: u,
					...d
				} = e;
				return o.a.createElement(R, d, n && o.a.createElement(C.a, {
					isFirst: !0
				}, a === F.g.Large ? o.a.createElement(S, L({}, e, {
					availableWidth: u,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : o.a.createElement(A, L({}, e, {
					commentId: r,
					profileName: i
				}))), o.a.createElement(C.a, {
					isLast: s
				}, o.a.createElement(w.a, {
					commentId: r,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: r,
					profileName: i,
					showModTools: c
				})))
			}));
			const R = Object(y.a)(e => o.a.createElement("div", {
				className: Object(g.a)(P.a.backgroundMargin, {
					[P.a.isFirstInCommentList]: e.isFirstInCommentList,
					[P.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(D.e)(e)
				}
			}, e.children));
			var N = r("./src/reddit/components/ProfileItemList/index.tsx"),
				q = r("./node_modules/lodash/noop.js"),
				M = r.n(q),
				U = r("./src/reddit/actions/ads/index.ts"),
				Z = r("./src/reddit/actions/comment/list.ts"),
				H = r("./src/reddit/actions/post.ts"),
				G = r("./src/reddit/components/TrackingHelper/index.tsx"),
				K = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				W = r("./src/reddit/helpers/trackers/post.ts"),
				J = r("./src/reddit/featureFlags/index.ts"),
				V = r("./src/reddit/selectors/comments.ts"),
				$ = r("./src/reddit/selectors/posts.ts"),
				Y = r("./src/reddit/selectors/profileComments.ts"),
				Q = r("./src/reddit/selectors/subreddit.ts"),
				X = r("./src/reddit/selectors/tracking.ts"),
				ee = r("./src/reddit/selectors/user.ts");
			const te = Object(j.u)(),
				re = {
					apiError: Y.a,
					apiPending: Y.b,
					currentUser: ee.k,
					measureScrollFPS: J.d.measureScrollFPS,
					layout: j.Q,
					loadMore: Y.d,
					subredditsById: Q.W,
					viewportDataLoaded: X.a,
					commentsById: V.q,
					itemIds: Y.f,
					itemIdToPostId: Y.e,
					postsById: $.K,
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
				ne = Object(c.c)(re),
				se = Object(i.b)(ne, e => ({
					onBottomViewed: (t, r) => e(Object(Z.c)(t, r)),
					adBrandSafetyStatusReceived: t => {
						e(U.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.K)(t)),
					fireAdPixelsOfType: M.a,
					trackOnPostEnteredViewport: M.a
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(W.h)(e, t),
					postComponentForLayout: K.b
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
			const oe = e => o.a.createElement(T, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(G.c)(te(se(e))))(N.a);
			var ce = e => o.a.createElement(ie, ae({}, e, {
					itemComponent: oe
				})),
				le = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ue = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				de = r("./src/reddit/helpers/trackers/screenview.ts"),
				me = r("./src/reddit/layout/page/Listing/index.tsx"),
				pe = r("./src/reddit/models/ContentGate.ts"),
				_e = r("./src/reddit/pages/ErrorPages/index.tsx"),
				he = r("./src/reddit/selectors/profile.ts");

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const be = Object(j.u)(),
				ge = Object(c.a)(j.D, ee.eb, (e, {
					location: t
				}) => s()([...Object(u.a)(t.search)]), j.Q, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(he.j)(e, {
					profileName: t.params.profileName
				}), ee.K, (e, {
					match: t
				}) => Object(ee.f)(e, l.hc + t.params.profileName), (e, t, r, n, s, a, o, i) => {
					const {
						sort: c,
						t: l
					} = Object(p.b)(r), u = Object(d.a)(`u_${s}`, c, r);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: n,
						listingKey: u,
						profileName: s,
						sort: c,
						timeSort: l
					}
				}),
				ye = Object(i.b)(ge, (e, t) => ({
					onLoadMore: () => e(Object(m.moreItemsRequested)()),
					onLayoutChange: () => e(Object(m.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(u.a)(t.location.search)])
					}))
				}));
			t.default = be(ye(e => {
				const {
					contentGateInfo: t,
					over18Prefs: r,
					isOwnProfile: n,
					isProfileNSFW: s,
					listingKey: a,
					onLoadMore: i,
					onLayoutChange: c,
					pageLayer: u,
					profileName: d,
					sort: m,
					timeSort: p
				} = e;
				if (!d || !u) return null;
				if (t && t.profileDeleted) return o.a.createElement(_.default, {
					contentGateType: pe.a.ProfileDeleted,
					profileName: d
				});
				if (t && t.profileSuspended) return o.a.createElement(_.default, {
					contentGateType: pe.a.ProfileSuspended,
					profileName: d
				});
				if (451 === u.status || t && t.profileBlockedForLegalReason) return o.a.createElement(_.default, {
					contentGateType: pe.a.ProfileBlockedForLegalReason,
					profileName: d
				});
				if (403 === u.status) return o.a.createElement(_e.a, null);
				if (404 === u.status) return o.a.createElement(_.default, {
					contentGateType: pe.a.ProfileDoesNotExist,
					profileName: d
				});
				const g = d.toLowerCase(),
					y = `/user/${d}/comments/`,
					x = {
						listingKey: a,
						listingName: g
					};
				if (!r && s && !n) return o.a.createElement(_.default, {
					contentGateType: pe.a.Nsfw,
					subredditName: d
				});
				const v = {
					sort: m,
					baseUrl: y,
					sortOptions: l.Db,
					timeSort: p
				};
				return o.a.createElement(me.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(le.a, {
						profileName: d
					})),
					content: o.a.createElement(o.a.Fragment, null, o.a.createElement(f.a, v), o.a.createElement(b.a, null), o.a.createElement(ce, {
						listingKey: a,
						listingName: g,
						listingViewed: (e, t) => Object(de.o)(a, m, t, e, p),
						noPostsComponent: () => o.a.createElement(h.b, {
							profileName: d,
							timeSort: p
						}),
						onLoadMore: i,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: o.a.createElement(ue.a, fe({}, x, {
						profileName: d
					}))
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.1d9ea8f5107efbf29fd2.js.map