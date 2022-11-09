// https://www.redditstatic.com/desktop2x/SocialLinks.0a055973d2f6b5fe7946.js
// Retrieved at 11/9/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SocialLinks"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function i(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function n(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === n(e)
			}

			function o(e) {
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
				l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				u = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function d(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					i = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || i.push(l), i.push(t.src_xn), t.src_tlds = i.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function u(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var s = e.__schemas__[t];
					if (null !== s) {
						var i = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = i, "[object Object]" === n(s)) return ! function(e) {
							return "[object RegExp]" === n(e)
						}(s.validate) ? r(s.validate) ? i.validate = s.validate : u(t, s) : i.validate = function(e) {
							return function(t, s) {
								var i = t.slice(s);
								return e.test(i) ? i.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? i.normalize = s.normalize : s.normalize ? u(t, s) : i.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
						}(s) ? u(t, s): c.push(t)
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

			function _(e, t) {
				var s = e.__index__,
					i = e.__last_index__,
					n = e.__text_cache__.slice(s, i);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = i + t, this.raw = n, this.text = n, this.url = n
			}

			function h(e, t) {
				var s = new _(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function m(e, t) {
				if (!(this instanceof m)) return new m(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = i({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = i({}, c, e), this.__compiled__ = {}, this.__tlds__ = u, this.__tlds_replaced__ = !1, this.re = {}, d(this)
			}
			m.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, d(this), this
			}, m.prototype.set = function(e) {
				return this.__opts__ = i(this.__opts__, e), this
			}, m.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, i, n, r, o, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (n = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (i = e.match(this.re.email_fuzzy)) && (r = i.index + i[1].length, o = i.index + i[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = o)), this.__index__ >= 0
			}, m.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, m.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, m.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(h(this, t)), t = this.__last_index__);
				for (var i = t ? e.slice(t) : e; this.test(i);) s.push(h(this, t)), i = i.slice(this.__last_index__), t += this.__last_index__;
				return s.length ? s : null
			}, m.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, s) {
					return e !== s[t - 1]
				})).reverse(), d(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, d(this), this)
			}, m.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, m.prototype.onCompile = function() {}, e.exports = m
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
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return h
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return D
			}));
			var i = s("./node_modules/linkify-it/index.js"),
				n = s.n(i),
				r = s("./node_modules/tlds/index.js"),
				o = s.n(r),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				l = s.n(c);
			const u = e => l()(a.b).includes(e.substring(1)),
				d = ["//", "ftp:", "http:", "https:", "mailto:"],
				_ = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, d),
				h = n()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				m = n()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				p = _(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = _(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				b = n()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = n()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				k = h.normalize;
			h.normalize = e => {
				k.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const s = u(e.text);
						return !s || s && t
					})
				},
				x = e => {
					return [...f.match(e) || [], ...m.match(e) || []].map(e => !u(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				v = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				D = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/reddit/actions/socialLinks/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return F
			})), s.d(t, "a", (function() {
				return z
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return C
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/components/SocialLinks/constants.ts"),
				r = s("./src/reddit/components/SocialLinks/helpers.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSocialLinks.json"),
				c = s("./src/redditGQL/operations/SetSocialLinks.json"),
				l = s("./src/redditGQL/operations/SocialLinks.json"),
				u = s("./src/redditGQL/operations/UpdateSocialLinks.json");
			var d = s("./src/reddit/helpers/name/index.ts"),
				_ = s("./src/reddit/helpers/structuredStyles/validators.ts"),
				h = s("./src/reddit/selectors/socialLinks.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/redditGQL/types.ts"),
				f = s("./src/reddit/actions/socialLinks/constants.ts"),
				b = s("./src/lib/initializeClient/installReducer.ts"),
				g = s("./src/reddit/reducers/features/socialLinks/index.ts");
			Object(b.a)({
				features: {
					socialLinks: g.a
				}
			});
			const k = Object(i.a)(f.a),
				y = Object(i.a)(f.b),
				x = Object(i.a)(f.c),
				v = Object(i.a)(f.d),
				D = Object(i.a)(f.e),
				F = e => {
					let {
						username: t
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: n
						} = i;
						const r = s();
						if (!!Object(h.b)(r, t)) return;
						e(y());
						const a = await (async (e, t) => {
							return await Object(o.a)(e, {
								...l,
								variables: t
							})
						})(n(), {
							username: t
						});
						if (a.ok && a.body) {
							const {
								data: s
							} = a.body, i = ((e, t) => {
								var s;
								const i = {},
									{
										redditorInfoByName: n
									} = t;
								if ("Redditor" !== (null == n ? void 0 : n.__typename)) return;
								const r = e.toLowerCase(),
									o = (null === (s = n.profile) || void 0 === s ? void 0 : s.socialLinks) || [];
								return i[r] = o, i
							})(t, s);
							i && e(k(i))
						}
					}
				},
				w = e => {
					let t, s, i, {
						socialLinkOption: r,
						rawHandle: o,
						rawTitle: a,
						url: c
					} = e;
					if (r.placeholderUrl) {
						const e = null == c ? void 0 : c.trim();
						if (!(e && Object(_.g)(e) === _.d.Valid)) throw new Error(n.f);
						t = e, s = null == a ? void 0 : a.trim()
					} else if (r.socialLinkType === p.O.Reddit) {
						const e = null == o ? void 0 : o.trim();
						if (!(e && Object(d.f)(e) && e && e.length >= n.h && !/\s/.test(e))) throw new Error(n.e);
						i = e
					} else i = null == o ? void 0 : o.trim();
					return {
						outboundUrl: t,
						title: s,
						handle: i,
						type: r.socialLinkType
					}
				},
				z = (e, t) => async (s, i, a) => {
					let {
						gqlContext: l
					} = a;
					const u = i(),
						{
							socialLinkOption: d,
							rawHandle: _,
							rawTitle: h,
							url: p
						} = t;
					if (!Object(m.X)(u, e)) return;
					const f = w({
							socialLinkOption: d,
							rawHandle: _,
							rawTitle: h,
							url: p
						}),
						b = await (async (e, t) => {
							return await Object(o.a)(e, {
								...c,
								variables: t
							})
						})(l(), {
							input: {
								socialLinks: [f]
							}
						});
					if (b.ok && b.body) {
						const {
							data: t
						} = b.body, {
							errors: i,
							ok: o,
							socialLinks: a
						} = t.setSocialLinks;
						if (o && !i) {
							const t = ((e, t) => {
								if (0 === e.length) return;
								return {
									username: t.toLowerCase(),
									addedSocialLink: e[e.length - 1]
								}
							})(a, e);
							if (!t) throw new Error(n.b);
							s(x(t))
						} else Object(r.f)(i)
					} else {
						const {
							errors: e
						} = b.body;
						Object(r.f)(e)
					}
				}, j = (e, t) => async (s, i, n) => {
					let {
						gqlContext: r
					} = n;
					const c = i();
					if (!Object(m.X)(c, t)) return;
					const l = await (async (e, t) => {
						return await Object(o.a)(e, {
							...a,
							variables: t
						})
					})(r(), {
						input: {
							socialLinkIds: [e]
						}
					});
					if (l.ok && l.body) {
						const i = ((e, t) => {
							return {
								username: e.toLowerCase(),
								removedSocialLinkId: t
							}
						})(t, e);
						s(v(i))
					}
				}, C = (e, t, s) => async (i, a, c) => {
					let {
						gqlContext: l
					} = c;
					const d = a(),
						{
							socialLinkOption: _,
							rawHandle: h,
							rawTitle: p,
							url: f
						} = s;
					if (!Object(m.X)(d, t)) return;
					const b = {
							...w({
								socialLinkOption: _,
								rawHandle: h,
								rawTitle: p,
								url: f
							}),
							id: e
						},
						g = await (async (e, t) => {
							return await Object(o.a)(e, {
								...u,
								variables: t
							})
						})(l(), {
							input: {
								socialLinks: [b]
							}
						});
					if (g.ok && g.body) {
						const {
							data: s
						} = g.body, {
							errors: o,
							ok: a,
							socialLinks: c
						} = s.updateSocialLinks;
						if (a && !o) {
							const s = ((e, t, s) => {
								const i = t.find(t => t.id === e);
								if (i) return {
									username: s.toLowerCase(),
									updatedSocialLink: i
								}
							})(e, c, t);
							if (!s) throw new Error(n.b);
							i(D(s))
						} else Object(r.f)(o)
					} else {
						const {
							errors: e
						} = g.body;
						Object(r.f)(e)
					}
				}
		},
		"./src/reddit/components/SocialLinks/SocialLinkButton.m.less": function(e, t, s) {
			e.exports = {
				button: "_3hew1NnzwygOKDNQDKp6R4",
				disabled: "_14cQ6UaNZthfUjDzaM1xHq",
				socialLinkIcon: "_2GEwqmoavetftIcfZO6bBP"
			}
		},
		"./src/reddit/components/SocialLinks/SocialLinkButton.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SocialLinks/helpers.ts"),
				a = s("./src/reddit/components/SocialLinks/SocialLinkButton.m.less"),
				c = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					buttonKey: t,
					children: s,
					className: a,
					disabled: l,
					onClick: u,
					socialLinkType: d
				} = e;
				const [_, h] = Object(i.useState)();
				return Object(i.useEffect)(() => {
					if (d) {
						const e = Object(o.b)(d);
						h(e)
					}
				}, [d]), n.a.createElement("div", {
					key: t,
					className: Object(r.a)(c.a.button, {
						[c.a.disabled]: l
					}, a),
					onClick: l ? void 0 : u
				}, d && _ && n.a.createElement("img", {
					className: c.a.socialLinkIcon,
					src: _
				}), s)
			}
		},
		"./src/reddit/components/SocialLinks/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "h", (function() {
				return h
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/config.ts");
			const r = 5,
				o = "add_social_link_modal_id",
				a = `${n.a.assetPath}/img/social-links/`,
				c = i.fbt._("@username", null, {
					hk: "3HC3Kd"
				}),
				l = i.fbt._("Display text", null, {
					hk: "1SlS6x"
				}),
				u = i.fbt._("Looks like this isn’t a valid URL. Double-check your spelling.", null, {
					hk: "1vKDvL"
				}),
				d = i.fbt._("This community or user doesn’t exist. Double-check your spelling.", null, {
					hk: "tKrv9"
				}),
				_ = i.fbt._("There was a problem updating your account. Please try again.", null, {
					hk: "1i5tn1"
				}),
				h = 5
		},
		"./src/reddit/components/SocialLinks/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/redditGQL/types.ts"),
				n = s("./src/reddit/components/SocialLinks/constants.ts");
			const {
				fbt: r
			} = s("./node_modules/fbt/lib/FbtPublic.js"), o = (e, t) => {
				let s, o = r._("{name of social link type}", [r._param("name of social link type", e)], {
						hk: "2ivfx8"
					}),
					a = n.i;
				switch (t) {
					case i.O.BuyMeACoffee:
						o = r._("Buy Me a Coffee", null, {
							hk: "ZTbP7"
						});
						break;
					case i.O.CashApp:
						o = r._("Cash App", null, {
							hk: "1aorWN"
						});
						break;
					case i.O.Custom:
						o = r._("Custom URL", null, {
							hk: "2gveOb"
						}), a = n.c, s = r._("https://website.com", null, {
							hk: "1Kp5fF"
						});
						break;
					case i.O.Reddit:
						a = r._("r/community, u/user", null, {
							hk: "45oRo"
						});
						break;
					case i.O.Discord:
						a = n.c, s = r._("https://discord.com", null, {
							hk: "6gcLP"
						});
						break;
					case i.O.Facebook:
						a = n.c, s = r._("https://facebook.com", null, {
							hk: "2v99jB"
						});
						break;
					case i.O.Kickstarter:
						a = n.c, s = r._("https://kickstarter.com", null, {
							hk: "132LC7"
						});
						break;
					case i.O.Shopify:
						a = n.c, s = r._("https://shopify.com", null, {
							hk: "2X1G4f"
						});
						break;
					case i.O.Spotify:
						a = n.c, s = r._("https://spotify.com", null, {
							hk: "3dZORp"
						});
						break;
					case i.O.Substack:
						a = n.c, s = r._("https://substack.com", null, {
							hk: "1zQgL1"
						});
						break;
					case i.O.Youtube:
						o = r._("YouTube", null, {
							hk: "12AQG6"
						}), a = n.c, s = r._("https://youtube.com", null, {
							hk: "4FZQ2O"
						});
						break;
					case i.O.Onlyfans:
						o = r._("OnlyFans", null, {
							hk: "1JRN4C"
						});
						break;
					case i.O.Paypal:
						o = r._("PayPal", null, {
							hk: "3n7Il"
						});
						break;
					case i.O.Soundcloud:
						o = r._("SoundCloud", null, {
							hk: "34Xo4u"
						});
						break;
					case i.O.Tiktok:
						o = r._("TikTok", null, {
							hk: "tajib"
						})
				}
				return {
					name: o,
					placeholderDisplayText: a,
					placeholderUrl: s,
					socialLinkType: t
				}
			}, a = () => {
				return Object.keys(i.O).map(e => {
					const t = i.O[e];
					return o(e, t)
				}).filter(e => e.socialLinkType !== i.O.Indiegogo)
			}, c = e => {
				const t = e.toLowerCase();
				return `${n.d}${t}.png`
			}, l = e => {
				for (const t in i.O)
					if (i.O[t] === e) return t;
				return ""
			}, u = e => {
				let t = n.b;
				throw e && e.length > 0 && (t = e[0].message), new Error(t)
			}, d = e => e && e.startsWith("@") ? e.slice(1) : e
		},
		"./src/reddit/components/SocialLinks/index.m.less": function(e, t, s) {
			e.exports = {
				socialLinks: "QVtpm4z0mTELUZB0dQ8Yv",
				addIcon: "_2s0bDJFN76mRu9XROx_tRr",
				removeIcon: "_3lIJSmTOV4YW8OZxVLia_"
			}
		},
		"./src/reddit/components/SocialLinks/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/icons.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/socialLinks/index.ts"),
				d = s("./src/reddit/helpers/trackers/socialLinks.ts"),
				_ = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/selectors/activeModal.ts"),
				f = s("./src/reddit/selectors/socialLinks.ts"),
				b = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/reddit/components/SocialLinks/constants.ts"),
				k = s("./src/reddit/components/SocialLinks/SocialLinkButton.tsx"),
				y = s("./src/reddit/components/SocialLinks/index.m.less"),
				x = s.n(y);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = Object(i.a)({
				resolved: {},
				chunkName: () => "AddSocialLinkModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("AddSocialLinkModal").then(s.bind(null, "./src/reddit/components/SocialLinks/AddSocialLinkModal.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SocialLinks/AddSocialLinkModal.tsx"
				}
			}), F = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-controls-InternalLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/controls/InternalLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/controls/InternalLink/index.tsx"
				}
			}), w = e => {
				let {
					isCreationEnabled: t,
					isOwnUserSettings: s,
					socialLinksClassName: i,
					username: y
				} = e;
				const w = Object(o.d)(),
					z = Object(h.a)(),
					[j, C] = Object(n.useState)(),
					[L, E] = Object(n.useState)(0);
				Object(n.useEffect)(() => {
					w(Object(u.c)({
						username: y
					}))
				}, [w, y]);
				const O = Object(o.e)(e => Object(f.b)(e, y)),
					A = Object(n.useCallback)(() => {
						C(void 0), w(Object(l.h)(g.a));
						const e = ((null == O ? void 0 : O.length) || 0) + 1;
						E(e);
						const t = s ? "profile_settings" : "profile";
						z(Object(d.a)(t))
					}, [w, s, z, O]),
					S = Object(o.e)(e => Object(p.c)(g.a)(e)),
					B = Object(_.a)(),
					T = Object(n.useCallback)((e, i) => {
						const n = i + 1,
							r = {
								socialLinkType: e.type,
								outboundUrl: e.outboundUrl,
								name: e.handle || e.title,
								position: n,
								isNew: !1
							};
						if (t && s) C(e), E(n), w(Object(l.h)(g.a)), z(Object(d.c)(r));
						else {
							const {
								outboundUrl: t
							} = e;
							window.open(t, "_blank"), z(Object(d.f)(r)), B(t, b.SourceElement.SocialLink, void 0, void 0, e.type)
						}
					}, [w, t, s, z, B]),
					I = Object(n.useCallback)((e, t, s) => {
						const {
							handle: i,
							id: n,
							outboundUrl: r,
							title: o,
							type: a
						} = t, c = s + 1;
						e.stopPropagation(), w(Object(u.b)(n, y)), z(Object(d.b)({
							socialLinkType: a,
							outboundUrl: r,
							name: i || o,
							position: c,
							isNew: !1
						}))
					}, [w, z, y]),
					Z = t && (s || O && O.length < g.g),
					P = t && !s && O && O.length >= g.g;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(a.a)(x.a.socialLinks, i)
				}, O && O.map((e, t) => r.a.createElement(k.a, {
					key: e.id,
					socialLinkType: e.type,
					onClick: () => T(e, t)
				}, e.handle || e.title, s && r.a.createElement(m.a, {
					name: c.a.clear,
					className: x.a.removeIcon,
					onClick: s => I(s, e, t)
				}))), Z && r.a.createElement(k.a, {
					disabled: !O || O.length >= g.g,
					onClick: A
				}, r.a.createElement(m.a, {
					name: c.a.add,
					className: x.a.addIcon
				}), v._("Add social link", null, {
					hk: "4hANO2"
				})), P && r.a.createElement(F, {
					to: "/settings/profile"
				}, r.a.createElement(k.a, null, v._("Edit", null, {
					hk: "3MTv8r"
				}))), t && S && r.a.createElement(D, {
					socialLink: j,
					socialLinkPosition: L,
					username: y,
					withOverlay: !0
				})))
			};
			t.default = w
		},
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "g", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			var i = s("./src/lib/linkMatchers/index.ts");
			var n;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(n || (n = {}));
			const r = e => {
					if (!e) return n.NoUrl;
					if (e.length < 4) return n.TooShort;
					const t = Object(i.h)(i.f, e);
					return t ? "ftp:" === t.schema ? n.Invalid : "mailto:" === t.schema ? n.Invalid : n.Valid : n.Invalid
				},
				o = 20;
			var a;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(a || (a = {}));
			const c = e => e ? e.length > o ? a.TooLong : a.Valid : a.TooShort;
			var l;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(l || (l = {}));
			const u = e => e.length ? l.Valid : l.TooShort
		},
		"./src/redditGQL/operations/DeleteSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"7eb2600cd927"}')
		},
		"./src/redditGQL/operations/SetSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"5064afb1fbe2"}')
		},
		"./src/redditGQL/operations/SocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"11a239b07f86"}')
		},
		"./src/redditGQL/operations/UpdateSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"c558e604581f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SocialLinks.0a055973d2f6b5fe7946.js.map