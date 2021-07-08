// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileOverview.edc9e00a105230a6b756.js
// Retrieved at 7/8/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileOverview"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function i(e) {
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

			function n(e) {
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
							var i = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(i) ? i.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var i = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(i) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : i.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var i = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(i) ? i.match(s.re.mailto)[0].length : 0
						}
					}
				},
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					i = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || i.push(d), i.push(t.src_xn), t.src_tlds = i.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var s = e.__schemas__[t];
					if (null !== s) {
						var i = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = i, "[object Object]" === r(s)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(s.validate) ? o(s.validate) ? i.validate = s.validate : l(t, s) : i.validate = function(e) {
							return function(t, s) {
								var i = t.slice(s);
								return e.test(i) ? i.match(e)[0].length : 0
							}
						}(s.validate), void(o(s.normalize) ? i.normalize = s.normalize : s.normalize ? l(t, s) : i.normalize = function(e, t) {
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
				})).map(n).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function p(e, t) {
				var s = e.__index__,
					i = e.__last_index__,
					r = e.__text_cache__.slice(s, i);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = i + t, this.raw = r, this.text = r, this.url = r
			}

			function m(e, t) {
				var s = new p(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = i({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = i({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = i(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, i, r, o, n, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (i = e.match(this.re.email_fuzzy)) && (o = i.index + i[1].length, n = i.index + i[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && n > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = n)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(m(this, t)), t = this.__last_index__);
				for (var i = t ? e.slice(t) : e; this.test(i);) s.push(m(this, t)), i = i.slice(this.__last_index__), t += this.__last_index__;
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			}));
			var i, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				n = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(i || (i = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const _ = Object(r.a)(n.g),
				g = Object(r.a)(n.e),
				b = Object(r.a)(n.h),
				f = Object(r.a)(n.c),
				y = Object(r.a)(n.f),
				x = Object(r.a)(n.j),
				v = Object(r.a)(n.i),
				k = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(p.e)(r),
						n = Object(p.d)(r),
						d = Object(h.J)(r);
					if (o || !n) return;
					e(b());
					let m = !1;
					try {
						const t = d ? i.LoggedInGeo : i.LoggedOutGeo,
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
							if (F(t)) {
								if (w(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (E(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: i,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										n = [i, r],
										a = Object(u.d)(n),
										c = Object(l.b)(n),
										d = Object(u.c)(i),
										p = {
											recommendedSubredditIds: [i.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(_(p)), m = !0
								}
							} else m = !1
						}
					} catch (y) {
						m = !1
					}
					m || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, F = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						i = t && t.type;
					return !!(s && !w(e) && i === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, C = () => async (e, t, s) => {
					var i, r;
					const n = t(),
						a = Object(p.g)(n);
					if (Object(p.f)(n) || null === a || "client" === a) {
						const s = null === (r = null === (i = Object(m.b)(t())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.K)(n);
						return Object(o.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
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
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var i = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === a.a.Live,
					r = t.status === a.a.Closed;
				return o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, t.name), o.a.createElement("div", {
					className: d.a.label
				}, l._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), s && o.a.createElement("span", {
					className: Object(i.a)(d.a.badge, d.a.live)
				}, l._("Live", null, {
					hk: "1G2P1W"
				})), r && o.a.createElement("span", {
					className: Object(i.a)(d.a.badge, d.a.ended)
				}, l._("Ended", null, {
					hk: "4s3hco"
				}))), o.a.createElement(n.a, {
					className: d.a.awards,
					thing: e
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
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: i,
						hasTooltip: d,
						tooltipText: u,
						className: p
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: i
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && r.a.createElement(n.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return J
			})), s.d(t, "a", (function() {
				return X
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				n = s("./node_modules/lodash/last.js"),
				a = s.n(n),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				f = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				k = s("./src/reddit/components/Scroller/Simple.tsx"),
				F = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/componentSizes.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				D = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = s("./src/reddit/helpers/getClickInfo.ts"),
				z = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				A = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/helpers/brandSafety/index.ts"),
				I = s("./src/reddit/helpers/trackers/ads.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				T = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				N = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(N);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = 500, q = new L.a(M), Z = new L.a(M), $ = new L.a(M), K = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, U = b.a.div("SeeMore", R.a), G = b.a.wrapped(S.a, "ArrowRight", R.a), H = (e, t, s, i, r, o, n, a) => {
				const c = `entered-${e}-${t}-${s?`last-${i}-${r}`:""}-${o}`;
				let d = q.get(c);
				return void 0 === d && (d = () => {
					s && n.onBottomViewed(i, r), n.trackOnPostEnteredViewport(e, t, a)
				}, q.set(c, d)), d
			}, W = (e, t, s, i, r) => {
				const o = `left-${e}-${t}`;
				let n = Z.get(o);
				return void 0 === n && (n = o => {
					s.trackOnPostExitedViewport(e, t, o, i, r)
				}, Z.set(o, n)), n
			}, J = (e, t) => {
				const s = `click-${e}`;
				let i = $.get(s);
				return void 0 === i && (i = (e, s, i, r, o) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, F.a.Click);
						const {
							source: e
						} = Object(m.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							i && (t = Object(D.a)(s.id, i, t).url), Object(I.a)(s, o), Object(f.d)(t, f.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(j.a)(e)
					})
				}, $.set(s, i)), i
			}, Q = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class X extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(M), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, i = e(), r = [];
						i.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							n = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(O.a)(o, n))
					}, _.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && T.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = T.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = T.c.end(this.timerId);
						setTimeout(() => Object(T.b)(_.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && T.c.cancel(this.timerId), e.postIds.length && (this.timerId = T.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && T.c.has(this.timerId)) {
						const e = T.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(T.b)(_.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const i = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					i && i !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(i)
				}
				componentWillUnmount() {
					this.timerId && T.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return T.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const i = T.c.end(e);
					setTimeout(() => {
						s(t(i, B.TimerType.InApp))
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
						triggerNewPostPill: s,
						...i
					} = this.props, {
						postsById: r,
						triggerNewPostPill: o,
						...n
					} = e, a = Object.keys(i), c = Object.keys(n);
					if (c.length !== a.length) return !0;
					if (c.some(e => i[e] !== n[e])) return !0;
					if (t === r) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((i, o) => {
							const n = 0 === o;
							return s({
								isFirstPost: n,
								layout: e,
								post: t[i]
							}) !== s({
								isFirstPost: n,
								layout: e,
								post: r[i]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, i) {
					const {
						currentProfileName: r,
						hostPostData: o,
						isCommentPermalink: n,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						isCommentCountAnimationEnabled: p,
						isVoteCountAnimationEnabled: m,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: g,
						listingKey: b,
						listingName: f,
						pageLayer: x,
						pageReferrer: v,
						postClickEventFactory: k,
						redditStyle: F,
						shouldHideFlair: w,
						triggerNewPostPill: C,
						postIds: D
					} = this.props, j = 0 === t, S = `post-${i}-${e}-${t}-${s?"last-index":""}-${f}-${b}-${v}`;
					let O;
					if (void 0 === (O = this.scrollChildCache.get(S))) {
						const {
							inSubredditOrProfile: I,
							postsById: L
						} = this.props, T = L[e], B = T.crosspostRootId && L[T.crosspostRootId] ? L[T.crosspostRootId] : T;
						T.crosspostRootId && !L[T.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", _.r.API), e.setExtra("description", `Post ${T.id} is crosspost of ${T.crosspostRootId}, but ` + `${T.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const N = this.props.postComponentForLayout({
							isCrosspost: !!T.crosspostRootId,
							isFirstPost: j,
							layout: i,
							post: B
						});
						let R = `post-list-item-[layout: ${i}]-[postId: ${e}]`;
						this.props.listingBelowVariant && b && (R += `--${b}`);
						const V = H(e, i, s, b, f, v, this.props, t),
							M = W(e, i, this.props, t, x),
							q = J(e, this.props),
							Z = B.media && B.media.type === A.o.EMBED ? B.media.provider : null,
							$ = p && !T.isSponsored && T.numComments < P.a,
							K = m && !T.isSponsored && !T.isScoreHidden && T.score < P.a;
						O = {
							estHeight: Object(z.c)(T, i),
							id: e,
							isFocusable: !(!B.media || !(i === E.g.Large || i === E.g.Classic && Object(A.G)(B.media))) && (A.d.has(B.media.type) && (!Z || !A.s.has(Z)) && !B.isSpoiler && !B.isNSFW),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: M,
							render: ({
								className: i,
								height: p,
								width: m,
								remeasure: _,
								setScrollerChildRef: y,
								shouldLoadInitially: v
							}) => u.a.createElement(N, {
								className: i,
								currentProfileName: r,
								key: R,
								availableWidth: m,
								eventFactory: k,
								first: j,
								forceLoadMedia: v,
								hostPostData: o,
								inSubredditOrProfile: I,
								isCommentPermalink: n,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								isCommentCountAnimationEnabled: $,
								isVoteCountAnimationEnabled: K,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: g,
								listingKey: b,
								listingName: f,
								pageLayer: x,
								last: s,
								onClickPost: q,
								onSizeChanged: _,
								postId: e,
								postIds: D,
								redditStyle: F,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: y,
								shouldHideFlair: w,
								onceInViewport: () => {
									null == C || C(t)
								}
							})
						}, this.scrollChildCache.set(S, O)
					}
					return O
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: i,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const n = o;
					return u.a.createElement("div", {
						className: R.a.placeholder
					}, u.a.createElement(n, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && u.a.createElement(v.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: i,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return u.a.createElement("div", {
						className: R.a.placeholder
					}, u.a.createElement(x.a, {
						className: r,
						isLoading: !!t,
						layout: i,
						countOverride: K[i]
					}), !!e && u.a.createElement(v.a, {
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
						layout: n,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: m
					} = this.props;
					let g = d.map((e, t, s) => {
						const i = t === d.length - 1;
						return this.scrollChildForPost(e, t, i, n)
					});
					r && (g = Q(g, r));
					const b = this.props.measureScrollFPS ? `post-listings-${n}` : void 0,
						f = a ? Object(i.e)(a) : null,
						y = f || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(k.b, {
						innerRef: this.updateScrollerRef,
						className: y ? R.a.truncatedPostList : Object(h.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: m,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: b,
						viewportTopPadding: w.f
					}, g), f && u.a.createElement(U, {
						className: R.a.seeMoreButton
					}, u.a.createElement(C.a, {
						className: R.a.seeMorePostsText,
						to: Object(p.a)(f, {
							type: _.Vb.Posts
						})
					}, V._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			X.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				_ = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				F = s.n(k);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: r,
				hideNSFWPref: k,
				hostPostData: w,
				iconClassName: E,
				inSubredditOrProfile: C,
				isCommentsPage: D,
				isCompactPinnedPost: P,
				isCurrentUserProfilePost: j,
				isOverlay: z,
				isTopicPage: S,
				listingKey: A,
				post: O,
				shouldShowSubscribeButton: I,
				showCornerOutboundLink: L,
				showSubreddit: T,
				showSubredditIcon: B,
				subredditOrProfile: N,
				isFollowed: R,
				shouldShowFollowButton: V,
				onFollowPostClick: M
			}) => {
				const q = r || S;
				return o.a.createElement("div", {
					className: Object(n.a)(F.a.container, e)
				}, T && N && o.a.createElement("div", {
					className: F.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: N.url
				}, B && o.a.createElement(p.b, {
					className: Object(n.a)(F.a.subredditIcon, E),
					shouldHideNsfwIcon: k,
					subredditOrProfile: N
				}))), o.a.createElement("div", {
					className: F.a.everythingElseWrapper
				}, T && o.a.createElement(c.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), o.a.createElement(u.d, {
					className: F.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: z ? u.c.Lightbox : void 0,
					post: O,
					showSub: T,
					subredditOrProfile: N
				}), o.a.createElement(l.a, {
					className: F.a.postBadges,
					displayText: N ? N.displayText : null,
					inSubredditOrProfile: C,
					isCompactPinnedPost: P,
					post: O,
					tooltipType: z ? u.c.Lightbox : void 0
				}), !q && o.a.createElement(a.a, {
					isPostDetail: D,
					thing: O,
					tooltipType: z ? u.c.Lightbox : void 0
				})), N && T && I && !j && o.a.createElement(h.a, {
					className: F.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(O.id, e ? "unsubscribe" : "subscribe", "post", A, w),
					identifier: {
						name: N.name,
						type: Object(v.h)(N) ? _.a.PROFILE : _.a.SUBREDDIT
					},
					postId: O.id,
					size: g.c.XS
				}), L && o.a.createElement(b.b, {
					isSponsored: O.isSponsored,
					postId: O.id,
					href: Object(x.D)(O),
					source: O.source
				}, o.a.createElement(y.a, {
					className: F.a.outboundLinkIcon
				})), V && o.a.createElement(d.a, {
					isFilled: !!R,
					onClick: M,
					hasTooltip: !0,
					tooltipText: i.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return P
			}));
			var i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/selectors/tracking.ts");

			function w() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isPredictionsPage: m.L,
					isProfilePostListing: m.I,
					isTopicPage: m.N,
					pageLayer: e => e
				})
			}
			const E = w(),
				C = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(x.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(k.D)(e, t.listingName);
							return Object(y.k)(e, {
								subredditId: s
							})
						}
						return Object(v.P)(e, {
							...t
						})
					},
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: i,
						inSubredditOrProfile: r
					}) => {
						if (i) {
							const t = Object(k.D)(e, s);
							return Object(y.l)(e, {
								subredditId: t
							})
						}
						return Object(v.C)(e, t, s, r)
					}),
					subredditsById: k.Z,
					viewportDataLoaded: F.a,
					pageReferrer: m.R,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.d
				},
				D = Object(r.c)(C),
				P = (e, t) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(n.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.M(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (s, i, r) => {
						e(d.P(s, r, t.hostPostData))
					},
					trackOnPostExitedViewport: (t, s, i, r, o) => {
						e(d.Q(t, i, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				j = Object(i.b)(D, P, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(_.h)(e, t, "post", s.listingKey, s.hostPostData, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(E(j(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
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
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: i.Eb
				});
				return !(!t || Object(i.Wd)(t))
			}
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
				return p
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			}));
			var i = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				n = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(n.S)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				p = Object(i.a)((e, t) => {
					const s = m(e, t);
					if (!s) return u;
					const i = Object(n.W)(e, {
						subredditName: s.name
					});
					return i && i.postIds && i.postIds.length ? i.postIds : u
				}),
				m = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.S)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, i, r) => {
					const n = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== n && (!(n + s > t) && (!(t + s > a) && !((e, t, s) => {
						const i = s[t - 1],
							r = s[t],
							n = r && Object(o.F)(e, {
								postId: i
							}) || null,
							a = r && Object(o.F)(e, {
								postId: r
							}) || null;
						return n && n.isSponsored || a && a.isSponsored
					})(e, t, i)))
				},
				_ = [3],
				g = Object(i.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const i = t.slice().sort();
					let r = -1;
					const n = Object(o.y)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return _.forEach(t => {
						let s = r + t;
						if (!(s >= n.length)) {
							for (; s < n.length && !h(e, s, t, n, i);) s += 1;
							s < n.length && (a.push(s), r = s)
						}
					}), a
				}),
				b = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				y = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.J)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						i = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && i
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				n = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(n.a)(e);
					return Boolean(t) && !Object(r.Wd)(t)
				},
				c = Object(i.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"0c0a6fd04a2c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileOverview.edc9e00a105230a6b756.js.map