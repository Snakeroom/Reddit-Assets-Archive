// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.a0f38746fd6c831f138a.js
// Retrieved at 8/31/2022, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function o(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === o(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var d = {
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
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var d = [];

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
						if (e.__compiled__[t] = n, "[object Object]" === o(s)) return ! function(e) {
							return "[object RegExp]" === o(e)
						}(s.validate) ? r(s.validate) ? n.validate = s.validate : l(t, s) : n.validate = function(e) {
							return function(t, s) {
								var n = t.slice(s);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? n.normalize = s.normalize : s.normalize ? l(t, s) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === o(e)
						}(s) ? l(t, s): d.push(t)
					}
				})), d.forEach((function(t) {
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
					o = e.__text_cache__.slice(s, n);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = n + t, this.raw = o, this.text = o, this.url = o
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
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, o, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (o = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
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
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
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
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, s) {
				let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					o = `collectionCommentsPage--[collection:'${e}']`;
				return t && (o += `--[post:'${t}']`), s && (o += `--[rootComment:'${s}']`), n && (n.sort && n.hasSortParam && (o += `--[sort:'${n.sort}']`), n.context && (o += `--[context:${n.context}]`), n.depth && (o += `--[depth:${n.depth}]`)), o
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(d.Rc.Bottom_cell),
						t = Object(m.a)(d.Rc.Bottom_cell_dismissible),
						s = Object(m.a)(d.Rc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.Rc.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.Rc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Rc.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(d.Rc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.e),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									i = r / 3,
									d = 2 * r;
								n >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/categories/index.ts"),
				r = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				i = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: o.a
				}
			});
			const h = Object(r.a)(b.c),
				g = Object(r.a)(b.b),
				x = Object(r.a)(b.a),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t(),
						r = Object(p.h)(o),
						u = Object(p.g)(o);
					if (r || u) return;
					e(h());
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: a.mb.GET
					}))(n());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, n) => {
								const o = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.pg)(e.category_name)
								};
								s.push(o.id), t[o.id] = o
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(g({
							categories: t,
							categoryIds: s
						}))
					} else e(x(b.error))
				}, C = (Object(r.a)(b.g), Object(r.a)(b.f), Object(r.a)(b.e), Object(r.a)(b.d)), v = e => async (t, s) => {
					const n = Object(p.j)(s(), {
						id: e
					});
					t(C({
						categoryId: e,
						rank: n + 1
					})), Object(u.nb)(Object(p.d)(s()))
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return k
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.a)(i.g),
				g = Object(o.a)(i.e),
				x = Object(o.a)(i.h),
				f = Object(o.a)(i.c),
				C = Object(o.a)(i.f),
				v = Object(o.a)(i.j),
				_ = Object(o.a)(i.i),
				O = () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						i = Object(u.e)(r),
						c = Object(u.d)(r),
						p = Object(b.P)(r);
					if (i || !c) return;
					e(x());
					let C = !1;
					try {
						const t = p ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(o(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (y(t)) {
								if (E(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), C = !0
								} else if (j(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										i = [n, o],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(h(u)), C = !0
								}
							} else C = !1
						}
					} catch (v) {
						C = !1
					}
					C || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !E(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(b.Q)(i);
						return Object(r.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(C({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/linkedPosts/constants.ts");
			const r = Object(n.a)(o.c),
				i = Object(n.a)(o.b),
				a = Object(n.a)(o.a)
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(n.a)(r.a),
				l = Object(n.a)(r.b),
				m = Object(n.a)(r.c),
				u = (e, t) => async (s, n, r) => {
					let {
						gqlContext: u
					} = r;
					const p = n(),
						b = Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[b],
						g = !!p.listings.postOrder.api.error[b];
					if (h && !g) return;
					s(m({
						key: b
					}));
					const x = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(u(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: x
					})
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return H
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return q
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return K
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return G
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/shortcuts/active.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/constants/postCollection.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/endpoints/governance/posts.ts"),
				O = s("./src/config.ts"),
				y = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function j(e, t, s) {
				const n = `${O.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(E.a)(`${n}/${e}/${t}/${s}`) : t ? Object(E.a)(`${n}/${e}/${t}`) : Object(E.a)(`${n}/${e}`)
			}
			var k = (e, t, s, o, r) => Object(y.a)(e, {
					data: r,
					endpoint: j(t, s, o),
					method: n.mb.GET
				}),
				P = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/helpers/canonicalUrls.ts"),
				w = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/actions/pages/comments.ts"),
				W = s("./src/reddit/actions/pages/constants.ts"),
				U = s("./src/lib/initializeClient/installReducer.ts"),
				z = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(U.a)({
				pages: {
					comments: z.a
				}
			});
			const H = Object(o.a)(W.d),
				q = Object(o.a)(W.b),
				K = Object(o.a)(W.a),
				G = e => async (t, s) => {
					const {
						collectionId: o,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(F.w)(r) : "", x = d && Object(L.h)(d), {
						queryParams: _
					} = e, O = s(), {
						instanceId: y
					} = _, E = {
						id: o,
						type: v.b[l]
					}, j = v.b[l] === v.a.PROFILE, {
						hasSortParam: k,
						sortToUse: P
					} = Object(S.a)(O, g), w = ["context", "depth", "limit", f.d].reduce((e, t) => {
						const s = parseInt(_[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: k,
						instanceId: y
					});
					k && (w.sort = P), t(u.r(g)), await Promise.all([j ? t(p.d(c)) : Promise.resolve(), t(J(o, g, x, w))]);
					const N = ((e, t) => {
						const s = Object(M.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const o = Object(D.N)(e, {
								identifier: t
							}),
							r = Object(i.c)(s.title, o.name).toString();
						return Object(a.a)(r, C.c, n.lb)
					})(s(), E) || Object(i.e)();
					t(m.m({
						title: N
					}));
					const R = s().posts.models[g];
					if (R) {
						const n = Object(D.N)(s(), {
							identifier: R.belongsTo
						});
						if (!R.isSponsored)
							if (R.belongsTo.type === v.a.SUBREDDIT) {
								!!Object(D.U)(O, {
									subredditId: R.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(p.d(n.name));
						const o = s().posts.instances[g] ? e.queryParams.instanceId : R.postId;
						t(Object(b.b)(o))
					}
					j ? Object(I.f)(s(), t, e) : Object(I.g)(s(), t, e), Object(T.w)(s(), !0)
				}, Y = Object(o.a)(W.c), Q = (e, t, s, n) => async (o, i, a) => {
					const d = Object(r.a)(e, t, s, n),
						c = i();
					t = t || Object(M.p)(c, {
						collectionId: e
					});
					const l = await k(a.apiContext(), e, t, s, n);
					if (o(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(w.a)(l.body, t, c);
						o(q({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const n = c.user.prefs.commentMode;
						o(Y({
							commentMode: n,
							key: d,
							postId: t
						}))
					} else o(K({
						error: l.error,
						key: d,
						...l.body
					}))
				}, J = (e, t, s, n, o) => async (i, a, p) => {
					const b = Object(r.a)(e, t, s, n),
						h = a();
					t = t || Object(M.p)(h, {
						collectionId: e
					});
					const {
						subredditName: f
					} = n, C = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), v = h.pages.comments.api.fullyLoaded[b], O = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || C && !O) {
						if (C && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(A.i)(h) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(v || o || i(Q(e, t, s, n)))
					}
					const y = h.user.prefs.commentMode;
					i(H({
						key: b,
						collectionId: e,
						commentMode: y,
						postId: t
					}));
					const E = {
						...n
					}; {
						const e = t && Object(B.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > V.MIN_NUM_COMMENTS_TO_TRUNCATE && (E.truncate = V.NUM_COMMENTS_TRUNCATE)
					}
					let j, I = await Object(N.a)("comments", () => k(p.apiContext(), e, t, s, E));
					if (i(Object(m.n)(I.status)), I.ok && (t = t || I.body.collections[e].primaryPostId)) {
						const e = Object.keys(I.body.posts).filter(e => !!I.body.posts[e].isMeta),
							s = Object(B.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(_.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (j = t.body)
						}
					}
					if (!o) {
						const o = t ? Object(B.G)(a(), {
							postId: t
						}) : null;
						o && I.body.comments && Object.keys(I.body.comments).length < o.numComments ? i(Q(e, t, s, n)) : I.ok && i(Y({
							commentMode: y,
							key: b,
							postId: t
						}));
						const r = Object(A.i)(h) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (I.ok) {
						if (!t) return;
						const e = Object(w.a)(I.body, t, h);
						i(Object(V.commentsPageLoaded)({
							commentMode: y,
							key: b,
							postId: t,
							meta: h.meta,
							governance: j,
							shouldCollapse: e,
							...I.body
						})), i(g.g(b));
						const s = Object(B.G)(h, {
							postId: t
						});
						s && i(u.z(s, x.a.CommentsView)), !o && s && "subreddit" === s.belongsTo.type && I.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else f && (i(Object(l.subredditPending)({
						key: b
					})), I = await Object(N.a)("subreddit", () => Object(P.a)(p.apiContext(), f, {})), i(Object(m.n)(I.status))), i(Object(l.handleSubredditPageApiError)(I, f)), i(K({
						error: I.error,
						key: b,
						...I.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return ot
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return rt
			})), s.d(t, "commentsPagePending", (function() {
				return it
			})), s.d(t, "commentsPageLoaded", (function() {
				return at
			})), s.d(t, "commentsPageFailed", (function() {
				return dt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return ct
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return mt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return ut
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return pt
			})), s.d(t, "commentsPageRequested", (function() {
				return bt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return gt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return xt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ft
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				c = s("./src/reddit/actions/subredditSettings.ts"),
				l = s("./src/reddit/endpoints/governance/posts.ts"),
				m = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function b(e, t) {
				return Object(u.a)(e, {
					...p,
					variables: t
				})
			}
			var h = s("./src/reddit/endpoints/page/subredditPage.ts"),
				g = s("./src/reddit/endpoints/profile/info.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/pageTitle/index.ts"),
				v = s("./src/reddit/actions/economics/helpers/async.ts"),
				_ = s("./src/reddit/actions/externalAccount.ts"),
				O = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				y = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				E = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				P = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/reddit/actions/subreddit/notifications.ts"),
				w = s("./src/reddit/actions/subreddit/questions.ts"),
				S = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/constants/adEvents.ts"),
				T = s("./src/reddit/constants/graphql.ts"),
				L = s("./src/reddit/constants/parameters.ts"),
				F = s("./src/reddit/constants/posts.ts"),
				R = s("./src/reddit/helpers/commentList/index.ts"),
				A = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				V = s("./src/reddit/models/User/index.ts"),
				W = s("./src/reddit/selectors/adsSignals.ts"),
				U = s("./src/reddit/selectors/category.ts"),
				z = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				H = s("./src/reddit/selectors/experiments/postSeo.ts"),
				q = s("./node_modules/reselect/es/index.js"),
				K = s("./src/reddit/constants/experiments.ts"),
				G = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Y = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Q = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				J = s("./src/reddit/selectors/platform.ts"),
				Z = s("./src/reddit/selectors/removedPosts.ts");
			const X = Object(q.a)(J.f, Y.a, Z.a, Z.c, Q.a, Z.e, Q.b, (e, t, s, n, o, r, i) => {
				if (!e || !t || o) return !1;
				if (n) return !0;
				const a = r || i,
					d = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || d)
			});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				oe = s("./src/lib/makeActionCreator/index.ts"),
				re = s("./src/lib/makeCommentsPageKey/index.ts"),
				ie = s("./src/reddit/actions/ads/index.ts"),
				ae = s("./src/reddit/helpers/canonicalUrls.ts"),
				de = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				le = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				me = s("./src/lib/performanceTimings/index.tsx"),
				ue = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				pe = s("./src/reddit/actions/gold/powerups.ts"),
				be = s("./src/lib/makeListingKey/index.ts"),
				he = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ge = Object(oe.a)(he.b),
				xe = Object(oe.a)(he.a);
			var fe = s("./src/reddit/actions/linkedPosts/index.ts"),
				Ce = s("./src/reddit/actions/otherDiscussions/index.ts"),
				ve = s("./src/reddit/actions/subreddit/constants.ts"),
				_e = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Oe = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						s({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (i) {
						n(i)
					}
				},
				ye = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ee = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				je = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var ke = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.linked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(ye.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ee.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(x.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(je.a)(e)
							}
						}
						s({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Pe = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var we = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Se = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						options: o,
						postId: r,
						subreddit: i
					} = e;
					try {
						if (!i) return;
						const e = i.elements || i.posts,
							n = t(),
							a = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, n.posts && n.posts.models),
							d = Object(Ie.a)(a),
							c = we(d),
							l = e.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: m,
								sort: u,
								subredditName: p
							} = o,
							b = Object(be.a)(p, f.Z[u], {
								t: m
							});
						s({
							dist: e.dist,
							key: b,
							meta: n.meta,
							postIds: l,
							posts: c
						})
					} catch (a) {
						n(a)
					}
				},
				Ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Te = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Le = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.nsfwLinked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(Te.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ee.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(x.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(je.a)(e)
							}
						}
						s({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Fe = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Re = Object(oe.a)(Fe.b),
				Ae = Object(oe.a)(Fe.a);
			var Me = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Be = Object(oe.a)(Me.b),
				De = Object(oe.a)(Me.a),
				Ve = Object(oe.a)(ve.k),
				We = Object(oe.a)(ve.j),
				Ue = (Object(oe.a)(ve.s), Object(oe.a)(ve.r), e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r;
					const {
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: d,
						includePostFeed: c,
						includePostQASchemaEligibilityFlag: l,
						listingBelowExperimentVariant: m,
						postId: p,
						range: b,
						sort: h,
						subredditName: g
					} = e, x = Object(be.a)(p, null, {
						isOtherDiscussions: !0
					}), C = s(), v = Object(te.z)(C, {
						listingKey: x
					}), _ = d && (!v || 0 === v.length), O = Object(be.a)(g, f.Z[h], {
						t: b
					}), y = Object(te.z)(C, {
						listingKey: O
					}), E = c && (a || !y || 0 === y.length), j = a, k = i, P = Object(te.G)(C, {
						postId: p
					}), I = !!P && !!P.media && (Object(B.K)(P.media) || Object(B.F)(P.media)) && !P.media.altText;
					if (!(_ || E || j || k || I || l)) return;
					_ && t(Object(Ce.d)({
						key: x
					}));
					const w = await ((e, t) => Object(u.a)(e, {
							..._e,
							variables: t
						}))(o(), e),
						S = w.body,
						N = Object(Ne.a)(m);
					l && (w.ok ? S.data && S.data.post && t(ge({
						postId: p,
						isEligibleForQASchema: null !== (r = S.data.post.isEligibleForQASchema) && void 0 !== r && r
					})) : t(xe())), _ && Object(Pe.a)({
						getState: s,
						onFailure: e => t(Object(Ce.b)(e)),
						onSuccess: e => t(Object(Ce.c)(e)),
						postId: p,
						response: w
					}), E && !j && (w.ok ? S.data && Se({
						getState: s,
						onFailure: e => t(We(e)),
						onSuccess: e => t(Ve(e)),
						options: e,
						postId: p,
						subreddit: S.data.subreddit
					}) : t(We(w.error))), j && !N && w.ok && S.data && ke({
						getState: s,
						onFailure: e => t(Object(fe.a)(e)),
						onSuccess: e => t(Object(fe.b)(e)),
						postId: p,
						post: S.data.post
					}), k && w.ok && Le({
						getState: s,
						onFailure: e => t(De(e)),
						onSuccess: e => t(Be(e)),
						postId: p,
						post: S.data.post
					}), I && w.ok && S.data && Oe({
						getState: s,
						onFailure: e => t(Ae(e)),
						onSuccess: e => t(Re(e)),
						postId: p,
						post: S.data.post
					})
				}),
				ze = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(x.w)(n),
						{
							sortToUse: r
						} = Object(A.a)(e, o);
					return (!r || r === f.u.CONFIDENCE) && Object(G.c)(e, {
						experimentEligibilitySelector: () => Object(ne.P)(e),
						experimentName: K.D
					}) === K.F.Enabled
				};
			var He = s("./src/reddit/selectors/chatPost.ts"),
				qe = s("./src/reddit/selectors/seo/index.ts"),
				Ke = s("./src/reddit/actions/pages/constants.ts"),
				Ge = s("./src/lib/initializeClient/installReducer.ts"),
				Ye = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Qe = s("./src/reddit/reducers/pages/comments/index.ts"),
				Je = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Ze = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				Xe = s("./src/reddit/selectors/i18n/index.ts"),
				$e = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				et = s("./src/reddit/helpers/locales.ts"),
				tt = s("./src/reddit/selectors/experiments/countrySites.ts"),
				st = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				nt = s("./src/reddit/selectors/meta.ts");
			Object(Ge.a)({
				pages: {
					comments: Qe.a
				}
			}), Object(Ge.a)({
				features: {
					modUserNotes: Ye.a
				}
			});
			const ot = 25,
				rt = 100,
				it = Object(oe.a)(Ke.h),
				at = Object(oe.a)(Ke.f),
				dt = Object(oe.a)(Ke.e),
				ct = Object(oe.a)(Ke.i);

			function lt(e) {
				return e && e.ok
			}
			const mt = (e, t, s) => {
					const n = !e,
						o = Object(te.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.N)(t, {
							identifier: o
						}),
						i = Object(qe.c)(t, {
							identifier: o
						}),
						a = !!Object(Ne.c)(t),
						d = Object(Xe.a)(t),
						c = Object(st.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : d ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(D.h)(r) && !Object(He.d)(t, {
						postId: s
					}) && !!r || !Object(J.i)(t) && Object(H.e)(t)), e && (l.postQASchema = Object(H.d)(t)), c && (l.listingBelow = !0), l
				},
				ut = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				pt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				bt = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: c,
						partialCommentId: l
					} = e.params, {
						subredditName: m
					} = e.params || "", u = c ? Object(x.w)(c) : "", p = l && Object(M.h)(l), {
						path: b,
						queryParams: h
					} = e, g = Object(y.d)(b), {
						instanceId: v
					} = h, {
						hasSortParam: O,
						sortToUse: I
					} = Object(A.a)(s(), u), S = null === (i = null === (r = Object(J.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, N = ["context", "depth", "limit", L.d].reduce((e, t) => {
						const s = parseInt(h[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: m,
						hasSortParam: O,
						instanceId: v,
						include_categories: !0
					});
					O && (N.sort = I), N.onOtherDiscussions = g, N.comment_awardings_by_current_user = !0, t(j.r(u)), await t(gt(u, p, N, I));
					const R = s().posts.models[u],
						D = Object(ne.Q)(s());
					if (R && "subreddit" === R.belongsTo.type) {
						const e = R.belongsTo.id;
						await Promise.all([Object(me.i)(() => t(Object(pe.j)(e, {
							fullData: !0,
							includeIdentity: D
						})), {
							name: "subredditPowerupsRequested",
							page: S,
							isLoggedIn: D
						}), Object(me.i)(() => t(Object(ue.c)(e)), {
							name: "subredditAchievementFlairsRequested",
							page: S,
							isLoggedIn: D
						})]);
						const n = s();
						if (!Object(J.i)(n)) {
							Object(Je.a)(n) && t(Object(w.b)(e))
						}
						Object(ee.i)(n, e) && await t(Object(d.c)(u))
					}
					if (R) {
						const r = ((e, t) => {
								const s = Object(te.V)(e, {
										postId: t
									}),
									n = Object(te.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							i = Object(se.N)(s(), {
								identifier: R.belongsTo
							});
						if (i && (e => K.Af.Redirect === Object(G.b)(e, {
								experimentEligibilitySelector: X,
								experimentName: K.tf
							}))(s())) return void t(Object(n.c)(i.url));
						if ((R.media && R.media.type) === B.o.LIVEVIDEO) {
							const e = `/rpan${R.belongsTo.type===F.a.SUBREDDIT?i.url:"/"}${Object(x.y)(R.id)}`;
							return void t(Object(n.c)(e))
						}
						if (R.belongsTo.type !== F.a.SUBREDDIT || R.isSponsored) {
							if (R.belongsTo.type === F.a.PROFILE) {
								const e = Object(me.i)(() => t(k.d(i.name)), {
									name: "getProfileInfo",
									page: S,
									isLoggedIn: D
								});
								await e
							}
						} else {
							if (!!!Object(se.U)(s(), {
									subredditId: R.belongsTo.id
								})) {
								const e = Object(me.i)(() => t(P.o(i.name)), {
									name: "getSubredditRules",
									page: S,
									isLoggedIn: D
								});
								await e
							}
						}
						const d = mt(!1, s(), u),
							c = g;
						if (ut(c, d)) {
							Object(de.d)(de.a.LinkedPosts);
							const e = Object(de.c)(de.a.LinkedPosts);
							Object(de.d)(de.a.NsfwLinkedPosts);
							const n = Object(de.c)(de.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: r,
									sessionStartTime: a
								} = Object(W.a)(s()),
								l = {
									adContext: {
										layout: T.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: r,
											sessionStartTime: a
										}
									},
									range: f.lc.WEEK.toUpperCase(),
									sort: f.Q.TOP,
									subredditName: i.name
								},
								m = {
									postId: u
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ne.c)(s())
								};
							Object(st.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(Ze.a)(s())
								},
								h = pt(d);
							Object(me.i)(() => t(Ue({
								...m,
								...l,
								...p,
								...b,
								...h,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: D,
								page: S
							});
							0
						}
						t(Object(_.p)()), t(E.m({
							title: r
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : R.postId;
						t(Object(a.b)(l)); {
							const e = Object(U.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(o.b(e))))
						}
					} else t(E.m({
						title: C.e()
					}));
					const {
						routePrefix: V
					} = e.params;
					F.b[V] === F.a.PROFILE ? Object(ae.f)(s(), t, e) : Object(ae.d)(s(), t, e)
				}, ht = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], gt = (e, t, s, n) => async (o, a, d) => {
					var c, u, p;
					const x = a(),
						C = Object(re.a)(e, t, s),
						{
							subredditName: _
						} = s,
						y = x.pages.comments.keyToHeadCommentId.hasOwnProperty(C),
						k = x.pages.comments.api.fullyLoaded[C],
						P = x.pages.comments.api.error[C],
						w = x.pages.comments.api.pending[C],
						T = !Object(ne.P)(x),
						L = Object(ne.k)(x),
						F = n === f.u.CHAT,
						A = !!x.platform.lastPage;
					if ((w || y && !P) && !(F && A)) {
						if (y && !x.sidebarPromotedPosts.firstFetch) {
							const e = Object(J.i)(x) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(ie.b)(e))
							})
						}
						return void(k || o(ft(e, t, s)))
					}
					o(r.g());
					const M = x.user.prefs.commentMode;
					o(it({
						key: C,
						postId: e,
						commentMode: M
					}));
					const B = {
						...s,
						...F ? {
							sort: f.u.LIVE
						} : T ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.G)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > rt && (B.truncate = ot)
					}
					const D = null === (u = null === (c = Object(J.b)(x)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						W = Object(me.i)(() => Object(m.a)(d.apiContext(), e, t, B, Object(z.a)(a()), ze(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !T,
							page: D
						}),
						U = !T && L && Object(me.i)(() => Object(g.d)(d.gqlContext(), Object(V.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !T,
							page: D
						}) || null,
						H = Object(me.i)(() => b(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !T,
							page: D
						});
					let q, K, G, Y;
					if ([q, K, G] = await Promise.all([W, U, H]), o(Object(E.n)(q.status)), lt(G) && "SubredditPost" === (null === (p = G.body.data.postInfoById) || void 0 === p ? void 0 : p.__typename)) {
						const e = G.body.data.postInfoById.subreddit.name;
						Object(ae.c)(a(), o, e)
					}
					if (q.ok) {
						const t = Object.keys(q.body.posts).filter(e => !!q.body.posts[e].isMeta),
							s = q.body.posts[e];
						if (Object(ae.b)(a(), o, s.belongsTo.type), t.length) {
							const e = Object(me.i)(() => Object(l.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: D,
									isLoggedIn: !T
								}),
								n = await e;
							n.ok && (Y = n.body)
						}
						if (lt(K)) {
							const {
								data: e
							} = K.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							q.body && q.body.account && Object.assign(q.body.account, t)
						}
						if (lt(G)) {
							const {
								data: t
							} = G.body;
							if (t.postInfoById && ht.includes(t.postInfoById.__typename) && (q.body.posts[e] = {
									...q.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(nt.d)(x) && e && Object(tt.f)(x) && await Object(et.a)(e, o);
								const {
									id: s,
									isEligibleForContentBlocking: n,
									allowedMediaInComments: r
								} = t.postInfoById.subreddit;
								o(Object(I.c)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: n,
											allowedMediaInComments: r
										}
									}
								}))
							}
						}
						const n = Object(R.a)(q.body, e, x),
							{
								postMeta: r
							} = q.body;
						q.body.posts[e] = {
							...q.body.posts[e],
							isRobotIndexable: Object($e.a)(r, e)
						}, o(at({
							key: C,
							postId: e,
							meta: x.meta,
							governance: Y,
							shouldCollapse: n,
							...q.body
						}))
					} {
						const n = Object(te.G)(a(), {
							postId: e
						});
						n && q.body.comments && Object.keys(q.body.comments).length < n.numComments ? o(ft(e, t, s)) : q.ok && o(xt({
							key: C
						}));
						const r = Object(J.i)(x) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
						o(Object(ie.b)(r))
					}
					if (q.ok) {
						o(S.g(C));
						const t = Object(te.G)(a(), {
								postId: e
							}),
							s = Object.keys(q.body.comments);
						if (o(j.z(t, N.a.CommentsView)), Object(ee.h)(a(), {
								subredditId: t.belongsTo.id
							}) && o(Object(O.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && q.body.comments) {
							const e = Object(me.i)(() => o(Object(v.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: D,
								isLoggedIn: !T
							});
							await e
						}
					} else {
						let e;
						_ && (o(Object(i.subredditPending)({
							key: C
						})), e = await Object(ce.a)("subreddit", () => Object(h.a)(d.apiContext(), _, {})), o(Object(E.n)(e.status)), o(Object(i.handleSubredditPageApiError)(e, _))), o(dt({
							error: q.error,
							key: C,
							...e ? e.body : q.body
						}))
					}
				}, xt = Object(oe.a)(Ke.g), ft = (e, t, s) => async (n, o, r) => {
					var i, a;
					const d = Object(re.a)(e, t, s),
						l = o(),
						u = Object(ne.Q)(l),
						p = Object(ne.k)(l),
						h = null === (a = null === (i = Object(J.b)(o())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						x = Object(m.a)(r.apiContext(), e, t, s, Object(z.a)(l), ze(l)),
						f = u && p && Object(g.d)(r.gqlContext(), Object(V.e)(p)) || null,
						C = Object(me.i)(() => b(r.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: u,
							page: h
						}),
						[_, O, y] = await Promise.all([x, f, C]);
					if (_.ok) {
						if (lt(O)) {
							const {
								data: e
							} = O.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							_.body && _.body.account && Object.assign(_.body.account, t)
						}
						if (lt(y)) {
							const {
								data: t
							} = y.body;
							_.body.posts[e] = {
								..._.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(R.a)(_.body, e, l);
						n(at({
							key: d,
							postId: e,
							meta: l.meta,
							shouldCollapse: t,
							..._.body
						})), n(xt({
							key: d
						}));
						const s = o().posts.models[e],
							r = s && Object(te.V)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object($.a)(l, {
							subredditId: r.id
						}) && n(Object(c.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && _.body.comments && await n(Object(v.a)({
							commentIds: Object.keys(_.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(dt({
						error: _.error,
						key: d,
						..._.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: m,
					callToAction: p,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let h = m.displayText;
				m.displayText.length >= 40 && (h = m.displayText.slice(0, 40 - "...".length) + "...");
				const g = Object(c.s)(s, m.displayText),
					x = Object(c.t)(s) ? h : b,
					f = Object(c.t)(s) ? s.subcaption : m.displayText,
					C = Object(i.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					v = Object(i.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: C
				}, b && !o && !g && r.a.createElement("span", {
					className: u.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !g && r.a.createElement(d.a, {
					href: m.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: v,
					"data-adclicklocation": l.a.CTA_URL
				}, h), g && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: u.a.productTitle
				}, x), r.a.createElement("span", {
					className: u.a.subcaption
				}, f))), p && r.a.createElement(a.a, {
					className: u.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				c = s("./src/reddit/components/PostTitle/index.tsx"),
				l = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				m = s.n(l);
			const u = e => {
				let t;
				switch (e) {
					case c.b.ExtraLarge:
						t = m.a.ExtraLarge;
						break;
					case c.b.Large:
						t = m.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				return Object(r.e)(d.a) && t.isSponsored && t.adSupplementaryText && "string" != typeof t.adSupplementaryText ? 0 === t.adSupplementaryText.document.length ? null : o.a.createElement("div", {
					className: Object(i.a)(n, m.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`
				}, o.a.createElement(a.b, {
					className: Object(i.a)(m.a.Content, u(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				})) : null
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				p = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				x = Object(i.b)(g),
				f = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(m.a)(p.a.spacer, {
							[p.a.isCommentBoxDesign]: t,
							[p.a.isTopLevelComment]: s
						})
					}, n)
				},
				C = () => r.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				_ = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				O = x(_),
				y = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				E = e => r.a.createElement(y, b({}, e, {
					fallback: r.a.createElement(O, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = E
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: d,
					openRegisterModal: m,
					origin: b,
					sendEvent: h
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, u.a.Wrapper, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement("span", {
					className: Object(r.a)(u.a.Copy, {
						[u.a.LiveStreamingCopy]: s
					})
				}, p._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement("div", {
					className: u.a.CTAButtons
				}, o.a.createElement(c.t, {
					className: u.a.LoginLink,
					kind: c.b.ExternalLink,
					priority: c.c.Secondary,
					href: Object(a.a)(n, b, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Log In", null, {
					hk: "ZR3pC"
				})), o.a.createElement(c.t, {
					className: Object(r.a)(u.a.SignupLink, {
						[u.a.LiveStreamingSignupLink]: s
					}),
					kind: c.b.ExternalLink,
					priority: c.c.Primary,
					href: Object(a.a)(n, b, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), m(), h(Object(l.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Sign Up", null, {
					hk: "48wH4o"
				}))))
			})
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			}));
			var n, o, r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				a = s.n(i);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(o || (o = {}));
			const d = (e, t) => {
					const s = a.a[t],
						n = a.a[e];
					return Object(r.a)(s, n)
				},
				c = e => Object(r.a)(a.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[a.a.isInOverlay]: e.isInOverlay,
					[a.a.isModModeEnabled]: e.isModModeEnabled,
					[a.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				})
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/defer.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/lib/makeDraftKey/index.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				f = s("./src/reddit/actions/comment/authoring.ts"),
				C = s("./src/reddit/actions/comment/moderation.ts"),
				v = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/reportFlow/index.ts"),
				y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				E = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				j = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/models/PostDraft/index.ts"),
				P = s("./src/reddit/models/Comment/index.ts"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				N = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				T = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/Flatlist/getFlatlistBreakpoints.ts"),
				B = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				D = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				V = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				W = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				U = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				H = s("./src/reddit/components/OverflowMenu/index.tsx"),
				q = s("./src/reddit/components/ReportFlow/index.tsx"),
				K = s("./src/reddit/components/ReportFlow/new.tsx"),
				G = s("./src/reddit/components/ShareMenu/index.tsx"),
				Y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				J = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Z = s("./src/reddit/helpers/trackers/modTools.ts"),
				X = s("./src/reddit/layout/row/Inline/index.tsx"),
				$ = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ee = s("./src/reddit/icons/fonts/index.tsx"),
				te = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				se = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				ne = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				oe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				re = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = s("./src/devPlatform/singleton/constants.ts"),
				ae = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				de = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ce = s.n(de);
			const le = Object(m.a)({
					resolved: {},
					chunkName: () => "DevPlatform",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~AdminPanel~DevPlatform"), s.e("DevPlatform")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/devPlatform/components/ContextActions/index.tsx"
					}
				}, {
					ssr: !1
				}),
				me = p.a.wrapped(te.a, "CommentIcon", ce.a),
				ue = p.a.wrapped(re.a, "Report", ce.a),
				pe = p.a.wrapped(ne.a, "IgnoreReport", ce.a),
				be = p.a.wrapped(U.a, "ModActionsMenu", ce.a),
				he = p.a.div("OverflowMenuSpacer", ce.a),
				ge = p.a.wrapped(H.a, "DropdownRow", ce.a),
				xe = p.a.wrapped(X.a, "Flatlist", ce.a),
				fe = p.a.button("Button", ce.a),
				Ce = p.a.wrapped(B.a, "ModToolsFlatlist", ce.a),
				ve = p.a.wrapped(Q.a, "ViewReportsDropdown", ce.a),
				_e = e => `Comment-${e}--Modal--DeleteComment`,
				Oe = e => `Distinguish--Dropdown--${e}`,
				ye = e => `${e}-overflow-menu`,
				Ee = e => `View--Reports--${e}`,
				je = (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(f.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(_.i)(_e(s.id))), e(Object(b.h)({
								tooltipId: ye(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(f.e)({
								commentId: s.id,
								draftKey: Object(g.a)(k.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(f.s)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(f.u)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(C.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(x.p)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(v.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(C.g)(s.id)),
						onReportClick: () => e(Object(O.c)(s.id)),
						onToggleSave: () => e(Object(x.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(b.h)({
							tooltipId: Oe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(b.h)({
							tooltipId: Ee(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(_.i)(_e(s.id))),
						toggleSendReplies: () => e(Object(f.l)(s.id))
					}
				},
				ke = Object(l.c)({
					claimedFreeAward: T.b,
					currentUser: R.k,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(I.a)(e) === _e(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(h.b)(Oe(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(h.b)(Ee(s.id))(e)
					},
					isLoggedIn: R.Q,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(L.w)(e, {
							postId: s.postId
						}) && Object(S.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(F.x)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: N.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(L.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: S.e,
					isParentCommentsAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.D)(e, {
							commentId: s.id
						})
					},
					isDevPlatformEnabled: e => Object(ae.a)(e)
				}),
				Pe = Object(c.b)(ke, je);
			class Ie extends d.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(j.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Z.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Z.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Z.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(y.d)(y.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Z.e)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Z.b)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Z.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? P.a.UNFOLLOWED : P.a.FOLLOWED), t(n ? Object(Z.g)("follow", s.id) : Object(Z.b)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Z.c)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? d.a.createElement(K.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: q.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : d.a.createElement(q.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: q.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						commentPermalink: o,
						deleteComment: r,
						depth: c,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: p,
						isLoggedIn: b,
						isPendingDeletion: h,
						onDistinguishComment: g,
						onIgnoreReports: x,
						onToggleReportsDropdown: f,
						moderatorPermissions: C,
						modModeEnabled: v,
						postIsArchived: _,
						postAuthorIsBlocked: O,
						isBlockedUserBannerEnabled: y,
						postIsLocked: j,
						renderedInOverlay: k,
						sendEvent: I,
						subreddit: w,
						subredditAboutInfo: S,
						toggleDeleteCommentModal: N,
						toggleSendReplies: T,
						trackCommentClick: L,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: R,
						isParentCommentsAuthorBlocked: B,
						isDevPlatformEnabled: U
					} = this.props, q = Object(E.a)(C), K = !!s && s.displayText === e.author, Y = !!s && s.isEmployee, Q = R && e.unrepliableReason, X = R && F, te = !(B && R) && !(O && R) && !(Object(P.g)(e) && R) && !(F && R) && !Q && !X && !(S && S.userIsBanned) && (j || _ || O && y || q && b || e.isLocked ? q && b : b || m), ne = Object(z.a)(e), ae = q && K && !e.bannedBy, de = K && Y && !e.bannedBy, _e = ae || de, je = !(Object(P.g)(e) && R) && s && e.isGildable && !X && !(Q && "[deleted]" === e.author), ke = !_ && !Q, Pe = [];
					te && Pe.push(d.a.createElement(fe, {
						disabled: h,
						key: "reply",
						onClick: () => {
							l(), i()(() => L("reply", e.id)())
						}
					}, d.a.createElement(me, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), je && Pe.push({
						breakpointGroup: M.a.LoggedInUser,
						icon: d.a.createElement($.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), Pe.push(d.a.createElement(G.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: o,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == w ? void 0 : w.type
					}, d.a.createElement(fe, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), K || Pe.push({
						breakpointGroup: M.a.LoggedInUser,
						icon: d.a.createElement(re.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), Pe.push({
						breakpointGroup: M.a.LoggedInUser,
						icon: d.a.createElement(ee.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => n.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => n.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), K && Pe.push({
						breakpointGroup: M.a.LoggedInUser,
						icon: d.a.createElement(ee.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), ke && Pe.push({
						breakpointGroup: M.a.LoggedInUser,
						icon: d.a.createElement(ee.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const Ie = Pe.map(e => d.a.isValidElement(e) ? e : d.a.createElement(fe, {
							className: Object(M.d)(e.breakpointGroup, M.b.HideIfVWSmaller),
							disabled: h,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						we = Pe.map(e => d.a.isValidElement(e) ? null : d.a.createElement(ge, {
							className: Object(M.d)(e.breakpointGroup, M.b.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ce.a.dropdownRowText
						}, e.icon));
					return d.a.createElement(a.Fragment, null, d.a.createElement(xe, {
						className: Object(u.a)(Object(M.c)({
							depth: c,
							isInOverlay: k,
							isModModeEnabled: q && v || U,
							isFollowCommentEnabled: ke
						}), t)
					}, Ie, d.a.createElement(he, {
						className: K ? void 0 : Object(M.d)(M.a.LoggedInUser, M.b.HideIfVWLarger)
					}, d.a.createElement(H.b, {
						className: ce.a.overflowMenu,
						disabled: h,
						dropdownId: ye(e.id),
						onClick: () => I(Object(Z.b)("comment_overflow_menu", e.id))
					}, we, K && d.a.createElement(d.a.Fragment, null, d.a.createElement(ge, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ce.a.dropdownRowText
					}, d.a.createElement(ee.a, {
						name: "delete"
					})), d.a.createElement(J.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})), d.a.createElement(le, {
						contextType: ie.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && d.a.createElement(V.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: n.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: n.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: n.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: r,
						toggleModal: N,
						trackClick: () => {},
						withOverlay: !0
					}), q && d.a.createElement(d.a.Fragment, null, v && d.a.createElement(Ce, {
						className: Object(M.d)(M.a.Moderator, M.b.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: K
					}), d.a.createElement(be, {
						className: v ? Object(M.d)(M.a.Moderator, M.b.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => I(Object(Z.b)("comment_mod_action_menu", e.id))
					}, d.a.createElement(oe.a, null), d.a.createElement(A.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(z.c)(e) && !v && d.a.createElement(D.a, {
						text: `${ne}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ee(e.id)
					}, d.a.createElement(ve, {
						model: e,
						onIgnoreReports: () => {
							x(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ee(e.id)
					}), e.ignoreReports ? d.a.createElement(pe, null) : d.a.createElement(ue, null)), _e && d.a.createElement(D.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, d.a.createElement(se.a, null), d.a.createElement(W.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: Y,
						isUserMod: q,
						onDistinguishComment: g,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Oe(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			t.a = Pe(Object(Y.c)(Ie))
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/components/LottieAnimation/index.tsx"),
				c = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(c);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(r.useRef)(null),
					[s, c] = Object(r.useState)(!1),
					u = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && c(!1), t <= .001 && c(!0)
						})
					}, []);
				Object(a.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(o.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(d.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				V1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				v1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/models/PostDraft/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx");
			var x = e => r.a.createElement("i", {
					className: Object(c.a)(Object(g.b)("expand", e.isFilled), e.className)
				}),
				f = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				C = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = s("./src/reddit/components/Comments/Comment/Flatlist/index.tsx"),
				O = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				y = s.n(O);
			var E = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: y.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				j = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				k = s.n(j);
			var P = r.a.memo(e => r.a.createElement("div", {
					className: k.a.gradientHighlightContainer,
					role: "presentation"
				})),
				I = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				w = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				S = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				N = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				L = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				F = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/PostTopMeta/index.tsx"),
				B = s("./src/reddit/components/RichTextJson/index.tsx"),
				D = s("./src/reddit/components/UserIcon/index.tsx"),
				V = s("./src/reddit/components/UserIcon/constants.ts"),
				W = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				U = s("./src/reddit/helpers/author.ts"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/constants/componentTestIds.ts"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/contexts/Visibility.tsx"),
				G = s("./src/reddit/controls/ErrorText/index.tsx"),
				Y = s("./src/reddit/controls/InternalLink/index.tsx"),
				Q = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				J = s("./src/reddit/helpers/flair.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Subreddit/index.ts"),
				$ = s("./src/reddit/models/User/index.ts"),
				ee = s("./src/reddit/models/Vote/index.ts"),
				te = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				se = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ne = s("./src/reddit/selectors/comments.ts"),
				oe = s("./src/reddit/selectors/commentSelector.ts"),
				re = s("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				ie = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ae = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				de = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				ce = s("./src/reddit/selectors/moderatorPermissions.ts"),
				le = s("./src/reddit/selectors/poll/index.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/reddit/selectors/userPrefs.ts"),
				be = s("./src/reddit/selectors/moderatingComments.ts"),
				he = s("./src/reddit/components/Comments/Comment/index.m.less"),
				ge = s.n(he),
				xe = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/config.ts"),
				Ce = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				ve = s("./src/reddit/components/SubredditIcon/index.tsx");

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = 300,
				ye = xe.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return r.a.createElement("button", v({}, s, {
						className: Object(c.a)(t, C.a.expandButton)
					}), r.a.createElement(x, {
						className: C.a.expandIcon
					}))
				}), "ExpandButton", ge.a),
				Ee = xe.a.wrapped(_.a, "FlatList", ge.a),
				je = xe.a.wrapped(G.b, "ErrorText", ge.a),
				ke = xe.a.wrapped(N.a, "HorizontalVotes", ge.a),
				Pe = xe.a.div("ActionBar", ge.a),
				Ie = xe.a.wrapped(w.a, "TopMeta", ge.a),
				we = xe.a.div("CommentContentWrapper", ge.a),
				Se = xe.a.wrapped(T.b, "AuthorHovercard", ge.a),
				Ne = Object(q.u)(),
				Te = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(oe.b)(e, t),
					currentProfileModPermissions: q.h,
					depth: (e, t) => Object(ne.j)(e, t),
					collapsed: be.b,
					collapsedBecauseCrowdControl: be.a,
					currentUser: ue.k,
					flair: ne.e,
					focused: (e, t) => !t.noFocus && Object(ne.t)(e, t),
					highlightAnimationDisabled: pe.d,
					isAdmin: ue.K,
					isEditing: ne.z,
					isLoggedIn: ue.Q,
					isPendingDeletion: ne.E,
					isPresenceConsumptionExpEnabled: ae.c,
					moderatorPermissions: (e, t) => {
						const s = Object(oe.b)(e, t);
						return s ? Object(ce.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: le.f,
					modModeEnabled: q.U,
					errorMsgs: ne.I,
					replyFormOpen: ne.L,
					subreddit: q.r,
					subredditType: ne.O,
					showNftSpecialtyTreatment: re.b,
					hasSupporterRing: de.a,
					isOnlineConsumptionLoadTest: ae.a,
					isOnlineUserPref: ue.V,
					userIsBanned: (e, t) => {
						const s = Object(oe.b)(e, t);
						return !!s && Object(me.gb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ie.b,
					isBlockingInterstitialV2Enabled: ie.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackCommentClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, o] = t === ee.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							r(o, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Le = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Fe = e => r.a.createElement("div", e, e.children),
				Re = e => r.a.createElement(r.a.Fragment, null, e.children),
				Ae = Ne(Te(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: g,
						depth: x,
						errorMsgs: f,
						flair: C,
						flatlist: v,
						focused: _,
						hasAwardGradient: O,
						hasSupporterRing: y,
						highlightAnimationDisabled: j,
						highlightTreatment: k,
						index: w,
						isActive: N,
						isAdmin: T,
						isAvatarsInCommentsEnabled: W,
						isBlockingInterstitialEnabled: q,
						isBlockingInterstitialV2Enabled: G,
						isEditing: ee,
						isFirstInList: ne,
						isHighlighted: oe,
						isLoggedIn: re,
						isOnlineConsumptionLoadTest: ae,
						isOnlineUserPref: de,
						isPendingDeletion: ce,
						isPresenceConsumptionExpEnabled: le,
						moderatorPermissions: me,
						modModeEnabled: ue,
						noSpacing: pe = !1,
						onCommentAuthorClick: be,
						onCommentTimestampClick: he,
						onCollapseClick: xe,
						onIgnoreReports: _e,
						onLineMouseOver: Ne,
						onPresenceIndicatorInViewport: Te,
						onVoteClick: Ae,
						postId: Me,
						prediction: Be,
						renderedInOverlay: De,
						replyFormOpen: Ve,
						restrictHeight: We,
						rtJSONRedditStyle: Ue,
						showBlockingInterstitial: ze,
						showNftSpecialtyTreatment: He,
						subreddit: qe,
						subredditType: Ke,
						trackCommentClick: Ge,
						userIconSmall: Ye,
						userIsBanned: Qe,
						onClickRevealSpoilerText: Je,
						onMediaReload: Ze
					} = e, Xe = m.isDeleted, $e = !ee && !Xe && !!f && f.length > 0, et = Object(l.a)(d.c.edit, m.id), tt = Object(l.a)(d.c.replyToComment, m.id), st = Object(se.a)(me), nt = Object(F.a)(m), ot = Object(A.c)(m), rt = m.authorIsContractor && Ke === X.f.EmployeesOnly, it = m.isLocked, at = st && ue, dt = !ee && !Xe && (re || W), ct = W && !m.unrepliableReason, lt = !!g && Object($.e)(g) === m.author, [mt, ut] = Object(o.useState)(null), [pt, bt] = Object(o.useState)(null), ht = Object(o.useRef)(null), gt = Object(Z.f)(m) || Object(Z.g)(m), xt = gt ? Fe : Y.default, ft = Object(Z.f)(m) ? Re : Se;
					Object(o.useEffect)(() => {
						if (!ee && !Xe && (O && ut(r.a.createElement(P, null)), null !== k)) {
							if (k.glowHexColor) {
								const e = k.glowHexColor;
								ut(r.a.createElement(E, {
									hexColor: e
								}))
							}
							if (k.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = k.effectHighlight;
								bt(r.a.createElement(I.b, {
									prefersReducedAnimation: j,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [ee, Xe, O, j, k]);
					const Ct = Object(K.b)();
					(q || G) && Ct && w >= ie.a - 1 && ze();
					const vt = !Xe && !Object(Z.f)(m) && (!Qe || Qe && lt) && !Object(Z.g)(m) && re,
						_t = Object(o.useCallback)(() => {
							vt && le && !lt && Te && Te(m.id)
						}, [m.id, Te, vt, le, lt]),
						Ot = Object(z.a)(m),
						yt = !!g && Object($.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Et = Object(Ce.c)(yt),
						jt = !(!Et && !He) && Object(Ce.b)(yt);
					return r.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, ge.a.CommentWrapper, {
							[ge.a.highlightComment]: oe,
							[ge.a.deleted]: Xe,
							[ge.a.focused]: _,
							[ge.a.redesign]: W,
							[ge.a.topLevel]: !x,
							[ge.a.noSpacing]: pe
						})
					}, mt, pt, !ee && !Xe && ne && r.a.createElement("div", {
						className: ge.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${fe.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(ye, {
						className: Object(c.a)(m.id, {
							[ge.a.hidden]: !i,
							[ge.a.visible]: i
						}),
						onClick: () => {
							s(), xe(), Ge("collapse", m.id)()
						},
						onMouseOver: () => Ne(m.id),
						onMouseOut: s
					}), Object(U.a)(m.author) ? qe ? r.a.createElement(ve.b, {
						className: Object(c.a)(ge.a.UserIconContainer, Ye && ge.a.UserIconContainerSmall),
						subredditOrProfile: qe,
						linkTo: `/user/${m.author}/`
					}) : null : r.a.createElement(ft, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: ge.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(Z.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: De ? M.c.Lightbox : void 0
					}, r.a.createElement(xt, {
						className: Object(c.a)(ge.a.UserIconContainer, Ye && ge.a.UserIconContainerSmall),
						"data-testid": gt ? void 0 : "comment_author_icon",
						onClick: gt ? void 0 : be,
						to: `/user/${m.author}/`
					}, Ct ? r.a.createElement(r.a.Fragment, null, y && !jt && r.a.createElement("div", {
						className: ge.a.supporterRing
					}), r.a.createElement(D.a, {
						isNft: jt,
						className: Object(c.a)(ge.a.UserIcon, {
							[ge.a.v1NftTreatment]: Et
						}),
						iconUrl: yt,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: V.a,
						userName: m.author,
						isHighlighted: oe,
						shouldShowPresenceIndicator: vt && le,
						onPresenceIndicatorInViewport: _t,
						isCommentAuthorBlocked: Object(Z.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: lt,
						isOnlineOverrideValue: de,
						isOnlineStatusLoadTest: vt && ae,
						authorId: m.authorId
					})) : r.a.createElement("div", {
						className: ge.a.UserIcon
					}))), r.a.createElement(we, {
						className: Object(c.a)({
							[ge.a.isActive]: N,
							[ge.a.isCollapsed]: i,
							[ge.a.isLocked]: it && at,
							[ge.a.isPendingDeletion]: ce,
							[ge.a.isRemoved]: !!m.bannedBy && at || m.isDeleted && T
						})
					}, r.a.createElement(Q.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(Ie, {
						userHasNft: jt,
						childrenInfo: t,
						className: Object(c.a)({
							[ge.a.collapsed]: i,
							[ge.a.noFlair]: Object(J.o)(C || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: C,
						isAdmin: T,
						isPostComment: !0,
						onCommentAuthorClick: be,
						onCommentTimestampClick: he,
						renderedInOverlay: De,
						renderContractorBadge: rt
					}), !i && r.a.createElement(o.Fragment, null, ee && r.a.createElement(h.a, {
						className: Object(c.a)(ge.a.EditCommentForm, ge.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: d.c.edit,
						draftKey: et,
						postId: Me,
						rtJson: Object(z.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							draftKey: et,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !ee && (!Xe || T) && r.a.createElement("div", {
						"data-testid": H.d,
						ref: ht,
						className: Object(c.a)(ge.a.CommentBody, {
							[ge.a.restrictHeight]: !(!We || !ht.current) && ht.current.clientHeight > Oe
						})
					}, Be ? r.a.createElement(S.a, {
						comment: m,
						prediction: Be
					}) : r.a.createElement(B.b, {
						content: Ot,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: Ue,
						rtJsonElementProps: Le(e),
						onClickRevealSpoilerText: Je,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: Ze
						}
					}), r.a.createElement(te.b, {
						content: Ot
					})), ue && st && nt && r.a.createElement(L.a, {
						thing: m
					}), ue && st && ot && r.a.createElement(R.a, {
						onIgnoreReports: _e,
						reportable: m
					}), null != v ? v : dt && r.a.createElement(Pe, null, ct && r.a.createElement(ke, {
						downvoteButtonClassName: ge.a.voteButton,
						downvoteClassName: ge.a.upDownVote,
						model: m,
						onVoteClick: Ae,
						scoreClassName: ge.a.score,
						upvoteButtonClassName: ge.a.voteButton,
						upvoteClassName: ge.a.upDownVote
					}), r.a.createElement(Ee, {
						comment: m,
						commentsPageKey: u,
						depth: x,
						isAvatarsInCommentsEnabled: W,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: ue,
						moderatorPermissions: b || me,
						renderedInOverlay: De,
						isCommentFocused: _,
						subreddit: qe,
						trackCommentClick: Ge
					})), $e && f.map(e => r.a.createElement(je, {
						key: e
					}, e)), Ve && r.a.createElement(h.a, {
						className: Object(c.a)(ge.a.EditCommentForm, ge.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: d.c.replyToComment,
						draftKey: tt,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: Me,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: u,
								draftKey: tt,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: tt,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => r.a.createElement(W.a.Consumer, null, t => r.a.createElement(Ae, _e({}, e, {
				trackCommentClick: t
			})))
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				glowBorderTopPadding: "_2PHrzfGnoV59y2Imtb1Y5I",
				glowBorderBottomPadding: "_3kYyDFXW4SA2vk-vehWhXw"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				LiveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				liveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return V
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				_ = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(O);
			const E = l.a.p("EmptyTitle", y.a),
				j = l.a.p("ErrorTitle", y.a),
				k = l.a.p("EmptyText", y.a),
				P = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, t)
					}, s ? a.a.createElement(v.a, {
						className: y.a.LiveChatIcon
					}) : a.a.createElement(C.a, {
						className: y.a.CommentsIcon
					}), a.a.createElement(E, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				I = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(C.a, {
					className: y.a.CommentsIcon
				}), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				w = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(C.a, {
						className: y.a.CommentsIcon
					}), a.a.createElement(E, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(p.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				S = Object(d.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(_.a, {
						className: y.a.SnooFacepalm
					}), a.a.createElement(j, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(p.l, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				N = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, a.a.createElement(S, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				T = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(u.a, null))
				}, "LoadingFullPage", y.a),
				L = l.a.div("CommentsPlaceholderContainer", y.a),
				F = l.a.div("CommentPlaceholder", y.a),
				R = l.a.div("Avatar", y.a),
				A = l.a.div("VoteColumn", y.a),
				M = l.a.div("TextColumn", y.a),
				B = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = e => a.a.createElement(L, null, r()(10, t => a.a.createElement(F, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(f.b, {
					className: y.a.Upvote
				}), a.a.createElement(x.a, {
					className: y.a.Downvote
				})), a.a.createElement(M, null, a.a.createElement(B, null), a.a.createElement(D, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function o(e) {
				return e in n
			}

			function r(e) {
				n[e] = !0
			}

			function i() {
				n = {}
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/constants/comments.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/constants/gold.ts"),
				_ = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const O = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: y,
							effectHighlight: {
								type: _.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				y = "ff0000";

			function E(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(k).filter(e => e !== j)
				}(e) : [])
			}
			const j = {
				glowHexColor: null,
				effectHighlight: null
			};

			function k(e) {
				for (const t of O) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return j
			}
			var P = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				I = s("./src/reddit/selectors/comments.ts"),
				w = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/Comments/Comment/index.tsx"),
				R = s("./src/lib/scroll/index.ts"),
				A = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				V = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				W = s.n(V);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = p.a.wrapped(D.a, "ArrowRight", W.a), H = p.a.wrapped(A.a, "LinkOrOverlayLink", W.a), q = p.a.span("HoverSpan", W.a), K = Object(l.c)({
				permalink: (e, t) => Object(I.m)(e, {
					commentId: Object(I.r)(e, t).parentId
				})
			});
			var G = Object(c.b)(K)(Object(M.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement("div", {
						className: Object(m.a)(W.a.Wrapper, {
							[W.a.isActive]: t
						})
					}, d.a.createElement(H, {
						isOverlay: !!s,
						to: Object(B.b)(n),
						onClick: R.b
					}, d.a.createElement(q, null, U._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", d.a.createElement(z, null)))
				})),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Q = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				J = s.n(Q);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = p.a.div("MoreCommentsItemWrapper", J.a), $ = p.a.p("MoreComments", J.a), ee = p.a.wrapped($, "MoreCommentsInteractive", J.a), te = Object(l.c)({
				moreCommentsItem: I.F,
				moreCommentsPending: I.G
			});
			var se = Object(c.b)(te, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.n)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					const {
						isActive: t,
						moreCommentsClicked: s,
						moreCommentsItem: n,
						moreCommentsPending: o
					} = e;
					return d.a.createElement(X, null, o ? d.a.createElement($, null, Z._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement(Y.a.Consumer, null, e => d.a.createElement(ee, {
						className: Object(m.a)({
							[J.a.isActive]: t
						}),
						onClick: () => {
							s(), e("load_more_comment")()
						}
					}, Z._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [Z._plural(null == n ? void 0 : n.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				ne = s("./node_modules/lodash/times.js"),
				oe = s.n(ne),
				re = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				ie = s.n(re);
			const ae = p.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: C.m
				})), "Line", ie.a),
				de = p.a.div("LineContainer", ie.a),
				ce = p.a.div("ShortLineContainer", ie.a);
			var le = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: o,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: a,
						parentNodeIds: c,
						type: l
					} = e;
					return d.a.createElement(de, null, oe()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : d.a.createElement(ce, {
						key: c[e]
					}, d.a.createElement(ae, {
						className: Object(m.a)(c[e], {
							[ie.a.hasGlowBorder]: !!n,
							[ie.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : d.a.createElement(ae, {
						className: c[e],
						key: c[e],
						onClick: o(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				me = s("./src/reddit/contexts/Visibility.tsx"),
				ue = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				pe = s("./src/reddit/selectors/moderatingComments.ts"),
				be = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				he = s.n(be);
			const ge = p.a.div("CommentListNodeWrapper", he.a),
				xe = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				fe = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var Ce = Object(c.b)(() => Object(l.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(pe.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(I.l)(e, t),
				depth: (e, t) => Object(I.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const o = Object(I.l)(e, {
						commentLink: s
					});
					if (o && s.type === x.a.Comment) {
						n = E(o.treatmentTags)
					}
					return n
				},
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAvatarsInCommentsEnabled: ue.a,
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(I.l)(e, {
						commentLink: s
					});
					return !(s.type !== x.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= v.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(I.p)(e);
					if (n === P.a.None) return !1;
					if (s.type !== x.a.Comment) return !1;
					const o = s.id,
						r = Object(w.b)(e, {
							commentId: o
						});
					if (!r) return !1;
					const i = Object(L.v)(e),
						a = !!Object(N.m)(e, {
							postId: r.postId
						}),
						d = Object(T.G)(e, {
							postId: r.postId
						});
					if (!d || !d.previousVisits || d.previousVisits.length < 1) return !1;
					const c = n === P.a.Last ? d.previousVisits[d.previousVisits.length - 1] : d.previousVisits[0];
					return (a || i) && r.created > c
				}
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(g.d)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(g.q)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isAwarded: p,
					isFirstInList: b,
					isHidden: h,
					isHighlighted: g,
					onLineClick: C,
					onPresenceIndicatorInViewport: v,
					onShortLineClick: _,
					parentNodeIds: O,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: j,
					showBlockingInterstitial: k
				} = e, P = !!p, I = !(!a || !a.glowHexColor), w = I && i > 0, S = I, N = d.a.createElement(ge, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: w,
						[he.a.glowBorderBottomPadding]: S
					}),
					id: o.id,
					style: {
						paddingLeft: i * (f.v + f.u) + (o.type === x.a.Comment ? f.v : 0)
					},
					tabIndex: -1
				}, d.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: w,
					onLineClick: C,
					onLineMouseOver: xe,
					onLineMouseOut: fe,
					onShortLineClick: _,
					type: o.type,
					parentNodeIds: O
				}), ve({
					childrenInfo: t,
					clearHovered: fe,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: xe,
					hasAwardGradient: P,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isFirstInList: b,
					isHighlighted: g,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: j,
					onPresenceIndicatorInViewport: v,
					showBlockingInterstitial: k
				}));
				return u && o.type === x.a.Comment ? d.a.createElement(me.a, null, N) : N
			});
			const ve = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					hasAwardGradient: r,
					highlightTreatment: i,
					index: a,
					isActive: c,
					isAvatarsInCommentsEnabled: l,
					isFirstInList: m,
					isHighlighted: u,
					onLineMouseOver: p,
					postId: b,
					renderedInOverlay: h,
					scrollToAndRemeasure: g,
					onPresenceIndicatorInViewport: f,
					showBlockingInterstitial: C
				} = e;
				switch (n.type) {
					case x.a.Comment:
						return d.a.createElement(F.a, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							hasAwardGradient: r,
							highlightTreatment: i,
							index: a,
							isActive: c,
							isAvatarsInCommentsEnabled: l,
							isFirstInList: m,
							isHighlighted: u,
							onLineMouseOver: p,
							postId: b,
							renderedInOverlay: h,
							scrollToAndRemeasure: g,
							onPresenceIndicatorInViewport: f,
							showBlockingInterstitial: C
						});
					case x.a.MoreComments:
						return d.a.createElement(se, {
							commentsPageKey: o,
							isActive: c,
							moreCommentsId: n.id
						});
					case x.a.ContinueThread:
						return d.a.createElement(G, {
							id: n.id,
							isActive: c
						})
				}
			};
			var _e = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Oe = s("./src/reddit/components/Comments/States/index.tsx"),
				ye = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				je = s("./src/reddit/constants/elementIds.ts"),
				ke = s("./src/reddit/featureFlags/index.ts"),
				Pe = s("./src/reddit/helpers/commentList/index.ts"),
				Ie = s("./src/reddit/helpers/trackers/comment.ts"),
				we = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Te = s("./src/lib/LRUCache/index.ts"),
				Le = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Fe = s("./src/reddit/selectors/telemetry.ts");
			const Re = e => t => ({
				...Object(Fe.n)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Fe.d)(t, {
					reason: String(e)
				})
			});
			var Ae = s("./src/reddit/components/Comments/index.m.less"),
				Me = s.n(Ae);
			const Be = f.f + 10,
				De = 65,
				Ve = p.a.wrapped(ye.b, "Scroller", Me.a),
				We = Object(l.c)({
					allCollapsed: I.a,
					commentLinks: I.k,
					commentThreadLinkSet: I.o,
					measureScrollFPS: ke.d.measureScrollFPS,
					moreComments: I.b,
					postPermalink: T.F
				}),
				Ue = Object(c.b)(We, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.f)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.i)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.ab)(Object(B.b)(t)))
				})),
				ze = new Te.a(500),
				He = new Te.a(500),
				qe = (e, t) => {
					const s = `entered-${e}`;
					let n = ze.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, ze.set(s, n)), n
				},
				Ke = (e, t) => {
					const s = `left-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, He.set(s, n)), n
				};
			class Ge extends d.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(Ie.b)(e)))
					}, this.showBlockingInterstitial = o()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, u.L, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, _e.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1,
						isBlockingModalShowed: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && Ne.c.cancel(this.timerId), e.length && (this.timerId = Ne.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Ne.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Se.a && this.props.sendEvent(Re(this.props.commentLinks.length))
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: r
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !i()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, r)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !i()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && Ne.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Ne.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Ne.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Ne.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					_e.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (_e.a(c.id), i += Object(Pe.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
							numChildren: i,
							hasContinueThread: a
						}, o = null, r = 1 / 0, i = 0, a = !1)), !o && t[c.id] && (o = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						postId: r,
						renderedInOverlay: i
					} = this.props, a = qe(e.id, n), c = Ke(e.id, o);
					return {
						estHeight: _e.b(e.id) ? 0 : De,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: n => {
							let {
								placeholderRecommended: o,
								height: a,
								width: c,
								scrollToAndRemeasure: l
							} = n;
							return o ? d.a.createElement("div", {
								style: {
									height: a,
									backgroundColor: "#fff"
								}
							}) : d.a.createElement(Ce, {
								key: `comment-list-node-${e.id}`,
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								index: t,
								isFirstInList: 0 === t,
								isHidden: _e.b(e.id),
								postId: r,
								scrollToAndRemeasure: l,
								renderedInOverlay: !!i,
								parentNodeIds: this.getParentNodeIds(e),
								onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
								showBlockingInterstitial: this.showBlockingInterstitial
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						onAllCommentsRendered: o,
						renderedInOverlay: r,
						showSignupUpsell: i
					} = this.props;
					let a;
					if (n) {
						a = `comments-${r?"lightbox":"page"}`
					}
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return d.a.createElement(Ve, {
						className: Object(m.a)(Me.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(je.e) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: Be,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Oe.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Oe.c, null)
				}
			}
			t.a = Ue(Object(Ee.c)(Object(Le.a)(Object(we.d)(Ge))))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e(2), s.e("vendors~ChatPost~RealtimeGQLSubscriptionAsync"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				u = i.a.div("Byline", c.a),
				p = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(u, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(u, null))
					}
				});
			t.a = e => o.a.createElement(p, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CommentsPageNativeAd",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CommentsPageNativeAd").then(s.bind(null, "./src/reddit/components/CommentsPageNativeAd/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsPageNativeAd/index.tsx"
				}
			})
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_2Zqrm36MciZxq2elpbtQig",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD",
				backToTopButton: "_1xywgtWT3jTCKWcw9KY2r1",
				greyRereddit: "_2pOTt_VPprwl-h6pV0o5Mu"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/components/BackToTop/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				g = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/reddit/components/ModProgressModule/index.tsx"),
				C = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				v = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				_ = s("./src/reddit/components/SidebarFooter/index.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				E = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				j = s("./src/reddit/components/Widgets/Recommendations/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/index.tsx"),
				P = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				I = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/constants/experiments.ts"),
				S = s("./src/reddit/featureFlags/component.tsx"),
				N = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				F = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				R = s("./src/reddit/selectors/experiments/postSeo.ts"),
				A = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx"),
				V = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				W = s.n(V);
			const U = Object(S.a)("spPoints", h.a),
				z = Object(S.a)("spLeaderboard", g.a),
				H = Object(n.a)({
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
				q = Object(c.c)({
					d2xPdpSideRailRecsVariant: L.a,
					isD2xPdpSideRailRecsEnabled: L.b,
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(T.r)(s) && !n && Object(F.a)(e) === w.Te.NewModule
					},
					isLoggedIn: B.Q,
					postSEOV2IdCardVariant: R.h,
					shouldShowReredditPromo: A.a,
					widgets: Object(u.a)(M.v)
				}),
				K = Object(d.b)(q);
			class G extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderRecommendationsSidebar() {
					const {
						className: e,
						commentsPageKey: t,
						d2xPdpSideRailRecsVariant: s,
						isOverlay: n,
						post: o,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditName: d,
						subredditOrProfile: c
					} = this.props, m = Object(R.c)(r) || Object(R.f)(r), u = s === w.Wc.GreyRereddit || s === w.Wc.LargeImagePreview, b = s === w.Wc.GreyRedditNoNsfw, h = i && (u || b) ? a.a.createElement(k.ReredditButtons, {
						directoryTimestamp: o.created,
						postId: o.id,
						renderAsPlainLink: !0
					}) : void 0;
					return a.a.createElement("div", {
						className: Object(l.a)(e, W.a.outerWrapper)
					}, a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: d,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: m
					}), a.a.createElement(O.a, null, a.a.createElement(D.a, null, !(o.isNSFW && b) && a.a.createElement(j.a, {
						post: o,
						subredditOrProfile: c
					}), i && !u && !b && a.a.createElement(P.a, {
						directoryTimestamp: o.created,
						postId: o.id
					}), a.a.createElement(_.a, {
						reredditButtons: h
					}), a.a.createElement(p.a, {
						className: W.a.backToTopButton,
						isOverlay: !1
					}))))
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isFakeOverlay: s,
						isOverlay: n,
						post: o,
						postSEOV2IdCardVariant: r,
						subredditName: i
					} = this.props, d = !Object(R.c)(r) && !Object(R.f)(r);
					return a.a.createElement(y.a, {
						adComponentOnFakeOverlay: s,
						adComponent: d ? a.a.createElement(v.a, {
							postId: o.id,
							isOverlay: n,
							listingName: i,
							placement: m.d.BELOW_THE_FOLD,
							placementIndex: e,
							position: N.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.p,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isD2xPdpSideRailRecsEnabled: s,
						isInNewModuleNCPV3Experiment: n,
						isLoggedIn: o,
						isOverlay: r,
						post: i,
						postSEOV2IdCardVariant: d,
						shouldShowReredditPromo: c,
						subredditId: u,
						subredditName: p,
						widgets: h
					} = this.props;
					let g = 0;
					const _ = Object(R.c)(d) || Object(R.f)(d),
						y = a.a.createElement(v.a, {
							postId: i.id,
							isOverlay: r,
							listingName: p,
							placement: m.d.ABOVE_THE_FOLD,
							placementIndex: g++,
							position: N.a.FIRST,
							refreshKey: i.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return s ? this.renderRecommendationsSidebar() : a.a.createElement("div", {
						className: Object(l.a)(W.a.outerWrapper, e)
					}, n && a.a.createElement(f.default, {
						subredditId: u,
						subredditName: p
					}), Object(T.r)(i) ? a.a.createElement(H, {
						profileName: p,
						isOverlay: r || !1
					}) : a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: r,
						listingName: p,
						postId: i.id,
						rememberPosition: i.numComments > 0,
						isMinimal: _
					}), a.a.createElement(b.a, {
						cardClassName: W.a.card,
						subredditId: u
					}), a.a.createElement(U, {
						className: W.a.card,
						subredditId: u,
						uniqueId: i.id
					}), a.a.createElement(z, {
						className: W.a.card,
						subredditId: u,
						uniqueId: i.id
					}), a.a.createElement(C.a, {
						subredditId: u
					}), y, o && h.map((e, t) => a.a.createElement(O.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(I.a, {
						subredditName: p,
						widget: e
					}))), i.isSponsored && a.a.createElement(O.a, null, a.a.createElement(E.a, null)), c && a.a.createElement(P.a, {
						directoryTimestamp: i.created,
						postId: i.id
					}), this.renderFooter(g++))
				}
			}
			t.a = K(G)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = "500px";
			class b extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: b,
						onClick: h
					} = this.props, g = l && !e, x = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: h,
						ref: i
					}, o.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, x),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? p : "unset"
						}
					}, t), g && o.a.createElement(d.l, {
						className: m.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, u._("View Entire Discussion ({number of comments} Comments)", [u._param("number of comments", Object(a.b)(b))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(b)
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
				return E
			})), s.d(t, "a", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				_ = s.n(v),
				O = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 8,
				j = 1,
				k = O.a.div("Container", _.a),
				P = O.a.div("PostMetaWrapper", _.a),
				I = O.a.wrapped(p.c, "PostTitle", _.a),
				w = O.a.div("FlatList", _.a),
				S = O.a.div("FlatItem", _.a),
				N = O.a.span("FlatListDotSpacer", _.a),
				T = O.a.wrapped(k, "LinkContainer", _.a),
				L = O.a.div("Content", _.a),
				F = O.a.div("ThumbnailContainer", _.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: f.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.Qb.TOPIC),
					shouldOpenPostInNewTab: C.jb
				}),
				A = Object(i.b)(R);
			t.c = Object(x.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(L, null, r.a.createElement(P, null, r.a.createElement(u.a, d)), M(i), i.source && r.a.createElement(b.a, {
					post: i
				}), D(e)), W(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(P, null, r.a.createElement(u.a, d)), M(i), B(e), D(e))
			}));
			const M = e => r.a.createElement(I, {
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
					return r.a.createElement("div", null, r.a.createElement(m.a, y({}, n, {
						className: _.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(S, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(S, null, V(e)))
				},
				V = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				W = e => r.a.createElement(F, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/CrosspostRecommendationsModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CrosspostRecommendationsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CrosspostRecommendationsModal").then(s.bind(null, "./src/reddit/components/CrosspostRecommendationsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CrosspostRecommendationsModal/index.tsx"
				}
			})
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
				return g
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.V)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(u, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/ExpandedCrossposts/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/subredditDiscovery.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "ExpandedCrosspost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ExpandedCrosspost").then(s.bind(null, "./src/reddit/components/ExpandedCrossposts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ExpandedCrossposts/index.tsx"
					}
				}),
				c = e => {
					return Object(i.e)(a.a) ? r.a.createElement(d, e) : null
				}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(v);
			const O = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(u.b)(t.permalink), t.id))
				})),
				y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(_.a.icon, _.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = O(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: v,
					useMediaIcons: O
				} = e, E = s || h, j = Object(i.e)(x.b), k = Object(i.e)(x.c), P = t => {
					(j || k) && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, I = E.media, w = Object(g.p)(h), S = o && !!s;
				return I && !w && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(p.a)(E)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, _.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": C.a.MEDIA,
					onClick: v
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: _.a.icon
				}) : O ? r.a.createElement(r.a.Fragment, null, y(E.media && E.media.type, S, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(_.a.icon, _.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: _.a.icon
				})) : E.source && E.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(E.permalink),
					rel: "nofollow",
					onClick: P
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: _.a.icon
				}))
			})
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, {
					className: m
				}, o.a.createElement("div", {
					className: a.a.title
				}, d), i && o.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.a.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: n.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: n.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				u = s.n(m);
			const p = r.a.createElement(d.a, {
					className: u.a.lockIcon
				}),
				b = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function h(e) {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", b(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: u.a.bannerBase,
					color: a.a.locked,
					icon: p,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: s
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const u = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(u, null),
					subtitle: o,
					title: n.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = s.n(b);
			const g = r.a.createElement(m.a, {
					className: h.a.icon
				}),
				x = Object(a.c)({
					subreddit: u.A,
					subredditAboutInfo: u.x
				}),
				f = Object(i.b)(x);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(p.a, {
					className: h.a.container,
					color: c.a.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: h.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.default, {
						className: h.a.link,
						to: "/"
					}, n.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: n.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/ItemCarousel/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var n, o = s("./src/reddit/helpers/richTextJson/index.ts"),
				r = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit", e.CROSSPOST = "crosspost"
			}(n || (n = {}));
			const i = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/,
				a = e => {
					var t, s, a;
					if ((null == e ? void 0 : e.media) && Object(r.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(o.e)(e.media.richtextContent.document, !0);
						return 0 === t.length ? [] : null === (a = t.reduce) || void 0 === a ? void 0 : a.call(t, (e, t) => {
							var s;
							const {
								subreddit: o,
								postId: r
							} = (null === (s = t.match(i)) || void 0 === s ? void 0 : s.groups) || {};
							return r && o ? [...e, {
								id: `t3_${r}`,
								url: t,
								type: n.POST
							}] : o ? [...e, {
								id: o,
								url: t,
								type: n.SUBREDDIT
							}] : e
						}, [])
					}
					return []
				}
		},
		"./src/reddit/components/ItemCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				redditLinkCard: "_3cx1eazwYdVDDYc1dPyiR5",
				title: "_39Ml3ujYhKuR2k_LFpXVKI",
				shimmer: "_1ow4mWwRckO61gSLo-7v0b",
				crosspostTitle: "_22-ViNeyjOeL6ua8KDyKye",
				crosspostLinkCard: "_2iAbfa2D0rYH0bhwTONlI_",
				subredditLink: "_218c5HLOpg15zujvZOJ-jL",
				crosspostIcon: "_8rGN4GQ7vHLKekUlLRoHr",
				imageContainer: "_18r8N8O6-u5F1b97604EtU",
				thumbnailPlaceholder: "_1s2zQgETSy4lq4_Lx3sOZr",
				postDescription: "_12PklAY2VQxTTv7zYRGtFp",
				postStats: "_32BkJbsXEUbnRV8IdWALfx",
				separator: "_1sTUU46KrE7KfTGqDC-a29",
				carouselContainer: "_1rK-TdqBly0Ah1V-s2iNL4",
				constantWidth: "_13jkDfTREXT08dxlYnS8eF",
				flexWidth: "_3u_85Dp7oQMFiSQ4sLv1st",
				flexWidthTwoItems: "_3lv5cSLrhQNAMfRDhbY5yF",
				carouselTitle: "_2rN6AyQVzdFs8i43El1QF4",
				scrollIcon: "thm33nRT_QsxwagdC3y0O",
				carouselHeader: "_4keJkmF2kMGrQiCFuVyZP",
				carouselControls: "_2nzp90JhlrKYHbygwSg66",
				hasTitle: "_2g5PF1KCS_D1_wrxAataDQ",
				buttonWrapper: "_1FeNy7DyUXo50Xg6y7vYGE",
				scrollButton: "r6d8ZhiJGupMHDZ_VT92q",
				left: "_39XyIEf8_iPNJBEO56MJf-",
				right: "_2fa9qw7f4611Kfap-xuQAs",
				hidden: "_3y0dWvmqYpVeqdC-tWTBUc",
				itemsContainer: "WrOtvEVbiINAEhr1-6kip",
				large: "B_GPQ8fojjJzonrunPyKW",
				small: "q4_nxOUe2RNORWKR6Fyqc",
				subredditItem: "_3eJ3Vuzskg5QPjF0vWpWmv",
				subredditIcon: "_1atFEw7H5vpTJAn0fGBc_P",
				carouselContent: "_2rvSe7lZ7Qt5qCgXf_J0qB",
				bannerWrapper: "_1JhjjQQiHUTuMYhG1tGhPm",
				banner: "_3KgCrfIwPj-Tdwy64OBwWr",
				description: "_3V3hHaMDC4uZNCfwyBbz4g",
				lockup: "_24tuGHItai5L2nwJXdscK1",
				lockupText: "_1yYrDsHa8VjZpORJ4q0yYS",
				subredditName: "_1SXVDK7RjZdh5oUY2F-oQy",
				subscribersCount: "_1h7eV26RDHcql9mvKfi45C",
				contentWrapper: "rgoe5x8WumPeeNjIHn671",
				backgroundImage: "_23MqHKNvwrRo1D5A8ce1zw",
				subscribeButton: "_2sGQoRqSFOXnUrrQsZO3jK",
				blur: "_3kz2nO3JA6igVlQhzIq08X",
				flair: "BkSa7JPwUk1I4IglSRWbb",
				gradientAnimation: "_2KJPHlL6kS7WEhZRcgx8PN"
			}
		},
		"./src/reddit/components/ItemCarousel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/controls/ContentType/index.tsx"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var _ = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/telemetry/index.ts"),
				y = s("./src/reddit/components/ItemCarousel/index.m.less"),
				E = s.n(y);
			const j = e => {
				let {
					postCard: t,
					post: s,
					className: o
				} = e;
				const {
					url: r,
					commentCount: i,
					createdAt: l,
					score: m,
					title: u,
					thumbnail: y,
					isNsfw: j,
					subreddit: k
				} = t, P = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && k && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...v.n(s)
					}))(s, k)(P))
				}, []);
				return d.a.createElement(f.a, {
					to: (null == r ? void 0 : r.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(E.a.redditLinkCard, o),
					onClick: () => {
						Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...v.n(s)
						}))(s, k)(P))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(E.a.imageContainer)
				}, (null == y ? void 0 : y.url) ? d.a.createElement("img", {
					src: y.url,
					className: Object(n.a)(j && E.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: E.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: E.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: E.a.title
				}, u), j && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					},
					className: E.a.flair
				})), d.a.createElement("div", {
					className: E.a.postStats
				}, m && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(m), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: E.a.separator
				}, "•")), i && d.a.createElement("span", null, Object(h.b)(i), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: E.a.separator
				}, "•"), l && d.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Vb, !0)))))
			};
			var k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const T = e => {
				let {
					crosspostCard: t,
					post: s,
					className: o
				} = e;
				const {
					permalink: r,
					commentCount: i,
					title: l,
					thumbnail: m,
					isNsfw: u,
					subreddit: b
				} = t, h = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && b && Object(O.a)(Object(S.c)(s, b)(h))
				}, [s, b, h]);
				return d.a.createElement(f.a, {
					to: r,
					className: Object(n.a)(E.a.redditLinkCard, E.a.crosspostLinkCard, o),
					onClick: () => {
						Object(O.a)(Object(S.a)(s, b)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(E.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? d.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(u && E.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: E.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: E.a.postDescription
				}, d.a.createElement("div", {
					className: E.a.postStats
				}, d.a.createElement(N.a, {
					className: E.a.crosspostIcon
				}), d.a.createElement(w.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: E.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), d.a.createElement("span", {
					className: E.a.separator
				}, "•"), d.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(n.a)(E.a.title, E.a.crosspostTitle)
				}, u && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					},
					className: E.a.flair
				}), l)))
			};
			var L = d.a.memo(e => {
					let {
						className: t
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(E.a.redditLinkCard, t)
					}, d.a.createElement("div", {
						className: Object(n.a)(E.a.shimmer, E.a.imageContainer)
					}), d.a.createElement("div", {
						className: E.a.postDescription
					}, d.a.createElement("div", {
						className: Object(n.a)(E.a.shimmer, E.a.title)
					}), d.a.createElement("div", {
						className: Object(n.a)(E.a.shimmer, E.a.postStats)
					})))
				}),
				F = s("./src/reddit/actions/subreddit.ts"),
				R = s("./src/reddit/components/SubscribeButton/index.tsx"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = e => {
				let {
					id: t,
					index: s,
					name: o,
					subscribersCount: r,
					description: i,
					primaryColor: l,
					icon: m,
					isSubscribed: p,
					banner: b,
					path: g,
					size: x,
					isDiscovery: f,
					post: y,
					className: j,
					isNsfw: k
				} = e;
				const P = Object(c.d)();
				Object(a.useEffect)(() => {
					P(Object(F.u)(o))
				}, [P, o]);
				const I = Object(c.e)(e => Object(u.V)(e, {
						subredditId: t
					})),
					S = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					y && I && f && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...v.n(s)
					}))(y, I)(S))
				}, []);
				const N = Object(a.useCallback)(e => {
					if (f) return (e => {
						let {
							noun: t,
							subredditId: s,
							index: n,
							source: o,
							...r
						} = e;
						return e => ({
							...r,
							source: o,
							noun: t,
							actionInfo: {
								reason: `${n}`
							},
							subreddit: Object(u.V)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: y,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, p]);
				return d.a.createElement("div", {
					className: Object(n.a)(E.a.subredditItem, null === E.a || void 0 === E.a ? void 0 : E.a[x], j)
				}, d.a.createElement("div", {
					className: E.a.contentWrapper
				}, d.a.createElement("div", {
					className: E.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, d.a.createElement("img", {
					className: E.a.banner,
					src: b || void 0
				})), d.a.createElement("div", {
					className: E.a.carouselContent
				}, d.a.createElement(w.a, {
					to: g,
					className: E.a.lockup,
					onClick: () => {
						f && Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...v.n(s)
						}))(y, I)(S))
					}
				}, d.a.createElement("div", {
					style: "small" === x ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: E.a.backgroundImage
				}, m ? d.a.createElement("img", {
					src: m,
					className: E.a.subredditIcon
				}) : d.a.createElement(M.a, {
					className: E.a.subredditIcon
				})), d.a.createElement("div", {
					className: E.a.lockupText
				}, d.a.createElement("span", {
					className: E.a.subredditName
				}, "r/", o), " ", k && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					},
					className: E.a.flair
				}), d.a.createElement("span", {
					className: E.a.subscribersCount
				}, B._({
					"*": "{number} members",
					_1: "1 member"
				}, [B._plural(r, "number", Object(h.b)(r))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: E.a.description
				}, i)), d.a.createElement(R.a, {
					className: E.a.subscribeButton,
					identifier: {
						name: o,
						type: "subreddit"
					},
					getEventFactory: N,
					priority: A.c.Tertiary,
					small: !0
				})))
			};

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, z = Object(I.c)(e => {
				let {
					title: t,
					className: s,
					itemIds: r,
					size: p = "large",
					hasSubredditNames: b = !1,
					hasPostIds: h = !1,
					isDiscovery: g,
					post: x
				} = e;
				const f = Object(c.d)(),
					[C, v] = Object(a.useState)(null),
					[_, O] = Object(a.useState)(null),
					[y, I] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[w, S] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: F,
						crosspostIds: R,
						postIds: A,
						postUrls: M
					} = Object(a.useMemo)(() => r.reduce((e, t) => {
						let {
							type: s,
							id: n,
							url: o
						} = t;
						switch (s) {
							case P.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case P.a.POST:
								o && (e.postUrls[n] = o), e.postIds.push(n);
								break;
							case P.a.CROSSPOST:
								e.crosspostIds.push(n)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [r]),
					B = Object(c.e)(e => Object(u.B)(e, F)),
					W = Object(c.e)(e => Object(k.L)(e, A)),
					z = Object(c.e)(e => Object(k.L)(e, R)),
					H = B.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					q = W.reduce((e, t) => (e[t.id] = t, e), {}),
					K = z.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == F ? void 0 : F.length) || A.length || R.length) && f(Object(l.e)(F, b, F, h, [...R, ...A]))
				}, [F, R, A, f, h, b]);
				const G = r.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case P.a.SUBREDDIT:
								const t = null == H ? void 0 : H[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case P.a.POST:
								const o = null == q ? void 0 : q[n];
								if (!o) break;
								e.push({
									type: s,
									props: o
								});
								break;
							case P.a.CROSSPOST:
								const r = null == K ? void 0 : K[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								})
						}
						return e
					}, []),
					Y = e => () => {
						var t, s;
						if (!_) return;
						const n = null === (s = null === (t = null == _ ? void 0 : _.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const o = (Math.sign(e) ? _.scrollLeft % n : n % _.scrollLeft) || 0,
							r = n * e - o;
						_.scrollBy({
							left: r,
							behavior: "smooth"
						})
					},
					Q = Object(a.useCallback)(() => {
						if (!_) return;
						const {
							width: e
						} = null == _ ? void 0 : _.getBoundingClientRect(), t = (null == _ ? void 0 : _.scrollLeft) > 0, s = (null == _ ? void 0 : _.scrollLeft) < _.scrollWidth - e;
						0 === (null == _ ? void 0 : _.scrollLeft) && _.scrollWidth - e == 0 || I({
							left: t,
							right: s
						})
					}, [_]);
				Object(a.useEffect)(() => {
					if (!C || !_) return;
					const e = i()(() => {
						const e = U(_);
						S(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = U(_);
					return S(t), Q(), () => {
						window.removeEventListener("resize", e)
					}
				}, [C, _, Q, w, G.length]);
				const J = () => 1 === G.length ? E.a.flexWidth : 2 === G.length ? E.a.flexWidthTwoItems : E.a.constantWidth;
				return d.a.createElement("div", {
					ref: v,
					className: Object(n.a)(E.a.carouselContainer, s, null === E.a || void 0 === E.a ? void 0 : E.a[p])
				}, d.a.createElement("div", {
					className: E.a.carouselHeader,
					style: {
						width: N
					}
				}, d.a.createElement("h3", {
					className: E.a.carouselTitle
				}, t)), d.a.createElement("div", {
					ref: O,
					onScroll: Q,
					className: Object(n.a)(E.a.itemsContainer, null === E.a || void 0 === E.a ? void 0 : E.a[p]),
					style: {
						width: N
					}
				}, !G.length && Array(3).fill(!0).map((e, t) => d.a.createElement(L, {
					key: t,
					className: J()
				})), null == G ? void 0 : G.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var o, r, i;
					switch (s) {
						case P.a.SUBREDDIT:
							const e = n;
							return d.a.createElement(D, V({
								className: J(),
								index: t + 1,
								size: p,
								banner: null === E.a || void 0 === E.a ? void 0 : E.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (i = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: x
							}, e));
						case P.a.POST:
							const s = n;
							return d.a.createElement(j, {
								postCard: {
									...s,
									url: M[s.id]
								},
								className: J(),
								post: x
							});
						case P.a.CROSSPOST:
							const a = n;
							return d.a.createElement(T, {
								crosspostCard: {
									...a
								},
								className: J(),
								post: x
							});
						default:
							return null
					}
				})), G.length > 2 && d.a.createElement("div", {
					className: Object(n.a)(E.a.carouselControls, {
						[E.a.hasTitle]: !!t
					})
				}, d.a.createElement("div", {
					className: Object(n.a)(E.a.buttonWrapper, E.a.left, {
						[E.a.hidden]: !y.left
					})
				}, d.a.createElement("button", {
					className: E.a.scrollButton,
					onClick: Y(-w)
				}, d.a.createElement(m.a, {
					name: o.a.left_fill,
					className: E.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(E.a.buttonWrapper, E.a.right, {
						[E.a.hidden]: !y.right
					})
				}, d.a.createElement("button", {
					className: E.a.scrollButton,
					onClick: Y(w)
				}, d.a.createElement(m.a, {
					name: o.a.right_fill,
					className: E.a.scrollIcon
				})))))
			});
			t.a = z
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				h = s.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: b,
					shouldShowSubscribeButton: g,
					subredditOrProfile: x,
					templatePlaceholderImage: f,
					shouldShowFollowButton: C,
					isFollowed: v,
					isCommentsPage: _,
					onFollowPostClick: O
				} = e;
				return Object(u.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: C || g
					})
				}, o.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, C && o.a.createElement(a.a, {
					isFilled: !!v,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), g && x && o.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(p.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: t,
					isCommentsPage: _,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: f
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/ModProgressModule/index.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				themedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				completed: "_2B0VV6SdB2XjjxadViz15Q",
				tooltipIsActive: "_28uNH-IBuxe83YxCxYlnOb",
				ModuleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				moduleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				ModSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				modSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				headerButtonsContainer: "_2_EnVDjbXLqtMoZxrXfqFD",
				ChevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				chevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				ProgressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				progressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				ProgressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressCount: "_3zufL-ajBszVrFsqSo1RVV",
				progressText: "_2qiL_cOXT9k5zDizfDNl9",
				darkFont: "_3pebDR2YBVgOVPtes2otJ",
				Description: "_1--LMLAxYX0l9LaibrBWVc",
				description: "_1--LMLAxYX0l9LaibrBWVc",
				CloseButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				closeButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				CardContainer: "_2YShnlNvvx9BkckLObKkwD",
				cardContainer: "_2YShnlNvvx9BkckLObKkwD",
				Card: "_-lU3INdzFYlY4zni0Pss",
				card: "_-lU3INdzFYlY4zni0Pss",
				unclickable: "_2LyLq46VyzgH6SYt5kWKmL",
				ContentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				contentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				IconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				iconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				CheckIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				checkIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				Icon: "QNbSE3fPPc1M8MakLm1Bi",
				icon: "QNbSE3fPPc1M8MakLm1Bi",
				CardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				cardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				Title: "_2GyfJdanPW5aCT405tuR0i",
				title: "_2GyfJdanPW5aCT405tuR0i",
				overflowButton: "GFzLxcAwA3BPE4dxI-d4W",
				imageUploader: "_2EJWiSLsB96D6FOsAajSH-"
			}
		},
		"./src/reddit/components/ModProgressModule/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				m = s("./src/reddit/actions/subreddit/questions.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				b = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				h = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/ImageInput/index.tsx"),
				_ = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				O = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				j = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				k = s("./src/reddit/models/ApiRequestState/index.ts"),
				P = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				I = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(S);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = (e, t, s) => {
				let {
					id: n,
					title: r,
					iconIdentifier: i
				} = e;
				const a = h.b[i];
				return o.a.createElement("div", {
					className: Object(d.a)(N.a.Card, {
						[N.a.unclickable]: t
					}),
					key: n,
					onClick: e => {
						e.stopPropagation(), !t && s()
					}
				}, o.a.createElement("span", {
					className: N.a.ContentContainer
				}, o.a.createElement("span", {
					className: Object(d.a)(N.a.IconContainer, {
						[N.a.completed]: t
					})
				}, t ? o.a.createElement(y.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : o.a.createElement(y.a, {
					name: a,
					className: N.a.Icon
				})), o.a.createElement("span", {
					className: N.a.CardTitle
				}, r)))
			}, F = Object(a.c)({
				isTooltipOpen: e => Object(w.a)(e) === p.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: I.c
			});
			class R extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(k.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => o.a.createElement(v.a, {
						className: N.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: this.onChangeIconFileInput
					}), this.onOpenIconUploadScreen = () => this.inputRef && this.inputRef.click(), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(O.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(O.b)(e, t))
				}
				render() {
					var e, t, s, n, r;
					const {
						isTooltipOpen: i,
						onCompleteModule: a,
						onTopBarClicked: c,
						progressModuleRecords: l,
						subredditId: m,
						subredditName: u
					} = this.props, h = l && l[m];
					if (!h) return o.a.createElement(x.a, {
						className: N.a.ThemedWidget,
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(j.a, {
							className: N.a.ChevronIcon
						})),
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(E.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						f = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
							[N.a.completed]: g,
							[N.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(j.a, {
							className: N.a.ChevronIcon
						})),
						id: p.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(E.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName
					}, o.a.createElement("div", {
						className: N.a.ProgressContainer
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: N.a.Title
					}, g ? T._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : T._("Set up r/{subredditName}", [T._param("subredditName", u)], {
						hk: "3SHelG"
					})), o.a.createElement("div", {
						className: N.a.ProgressDescription
					}, o.a.createElement("span", {
						className: N.a.progressCount
					}, T._("{cardsComplete} of {totalCards}", [T._param("cardsComplete", null === (n = h.progress) || void 0 === n ? void 0 : n.done), T._param("totalCards", null === (r = h.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", o.a.createElement("span", {
						className: Object(d.a)(N.a.progressText, {
							[N.a.darkFont]: f
						})
					}, T._("tasks completed", null, {
						hk: "DxeNq"
					}))), f && o.a.createElement("div", {
						className: N.a.Description
					}, T._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !g && o.a.createElement("div", {
						className: N.a.CardContainer
					}, h.cards.map(e => {
						const t = e.status === P.a.COMPLETED;
						return L(e, t, () => this.onClickCard(h, e.id))
					})), g && o.a.createElement(C.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: C.c.Tertiary
					}, T._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(b.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const A = Object(r.b)(F, (e, t) => ({
				onCompleteModule: () => e(Object(_.c)(t.subredditId, P.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(f.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(u.h)({
					tooltipId: p.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = A(Object(g.c)(R))
		},
		"./src/reddit/components/ModWelcomeTooltip/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ModWelcomeTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/ModWelcomeTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModWelcomeTooltip/index.tsx"
				}
			})
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "NewCommentPill",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("NewCommentPill").then(s.bind(null, "./src/reddit/components/NewCommentPill/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/NewCommentPill/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_1H6_lZclv3OiOYYLJ3oAEN",
				BlockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockedAuthorTextWrapper: "m2v6rWFRpijpyTUSArDdl",
				expandButton: "_1elWTUH22waxJo7g8N3y3J"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				AdSupplementaryText: "NmXBiC9unWsHj0GoWydry",
				adSupplementaryText: "NmXBiC9unWsHj0GoWydry",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				classicThumbnail: "_1FHUoxLVcplbcdYoOYbzlq",
				classicNotificationButton: "_3PPSzlne0JO99X7TQkgRgN",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				modModeBannerWrapper: "_2TM2Nmy6QisWK1nerxy26v"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return Rt
			})), s.d(t, "b", (function() {
				return At
			})), s.d(t, "a", (function() {
				return Mt
			}));
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/objectSelector/index.ts"),
				h = s("./src/lib/pubsub/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				_ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				P = s("./src/reddit/actions/tooltip.ts"),
				I = s("./node_modules/lodash/find.js"),
				w = s.n(I),
				S = s("./node_modules/react-motion/lib/react-motion.js");
			const N = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				T = "expando_content",
				L = {},
				F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = w()(e, {
							key: T
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: T,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: T,
						style: {
							opacity: Object(S.spring)(1, N)
						}
					}] : [{
						key: T,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: T,
						style: {
							opacity: Object(S.spring)(0, N)
						}
					}]
				};
			class R extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), L), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: n
					} = this.props;
					return i.a.createElement(S.TransitionMotion, {
						styles: e => F(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var A = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				B = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/selectors/activeModalId.ts"),
				V = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				U = s("./src/reddit/selectors/moderatorPermissions.ts"),
				z = s("./src/reddit/selectors/postCreations.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/showPromotedCTA.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Q = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				J = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Z = s("./src/reddit/components/Econ/Audio/async.ts"),
				X = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				$ = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				ee = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				te = s("./src/reddit/components/ExpandoButton/index.tsx"),
				se = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ne = s("./src/reddit/components/Flatlist/index.tsx"),
				oe = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				re = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				ie = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ae = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				de = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ce = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				le = s("./src/reddit/components/ModModeReports/index.tsx"),
				me = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ue = s("./src/reddit/components/NotificationButton/index.tsx"),
				pe = s("./src/reddit/components/PostContainer/index.tsx"),
				be = s("./src/higherOrderComponents/makeAsync.tsx"),
				he = s("./src/lib/loadWithRetries/index.ts"),
				ge = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const xe = Object(be.a)({
				ErrorComponent: () => i.a.createElement(ge.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(he.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(ge.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var fe = e => i.a.createElement(xe, e),
				Ce = s("./src/reddit/components/PostList/index.tsx"),
				ve = s("./src/reddit/components/PostMedia/index.tsx"),
				_e = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ye = s("./src/reddit/components/PostTitle/index.tsx"),
				Ee = s("./src/reddit/components/PostTopLine/index.tsx"),
				je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ke = s("./src/reddit/components/SourceLink/index.tsx"),
				Pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ie = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				we = s("./src/reddit/constants/componentSizes.ts"),
				Se = s("./src/reddit/constants/componentTestIds.ts"),
				Ne = s("./src/reddit/constants/postLayout.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Le = s("./src/reddit/helpers/postEvent.ts"),
				Fe = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Re = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ae = s("./src/reddit/selectors/postFlair.ts"),
				Me = s("./src/reddit/models/Audio/index.ts"),
				Be = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				De = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ve = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ue = s("./src/reddit/selectors/experiments/presence.ts");
			const ze = e => {
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ve.jg
					}) === Ve.Od
				},
				He = e => {
					if (Object(Ue.a)(e)) return !1;
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ve.ig
					}) === Ve.Od
				},
				qe = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(H.G)(e, {
						postId: s
					});
					return !(Object(Ue.a)(e) || !n || n.isSponsored) && Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ve.hg
					}) === Ve.Od
				};
			var Ke = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ye = s("./src/reddit/constants/colors.ts"),
				Qe = s("./src/reddit/icons/fonts/index.tsx"),
				Je = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ze = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Xe = s.n(Ze);
			const $e = i.a.createElement(Qe.a, {
				className: Xe.a.BlockIcon,
				name: "block"
			});
			var et = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Je.a, {
						className: Xe.a.bannerBase,
						color: Ye.a.dayModeActionIcon,
						icon: $e,
						title: Ge.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Xe.a.expandButton,
							onClick: t
						}, Ge.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Xe.a.blockedAuthorTextWrapper
					})
				},
				tt = s("./src/config.ts"),
				st = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				nt = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				ot = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				rt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				it = s.n(rt);
			const {
				fbt: at
			} = s("./node_modules/fbt/lib/FbtPublic.js"), dt = () => at._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [at._param("=User Agreement", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, at._("User Agreement", null, {
				hk: "3MHgRl"
			}))), at._param("=Content Policy", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, at._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), ct = () => at._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [at._param("=User Agreement", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, at._("User Agreement", null, {
				hk: "yMHtU"
			}))), at._param("=Content Policy", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, at._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var lt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return at._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case M.g.Author:
							return at._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case M.g.AuthorDeleted:
							return at._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case M.g.AutomodFiltered:
							return at._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case M.g.CommunityOps:
							return at._("This post was removed by Reddit admin, u/{username}.", [at._param("username", t)], {
								hk: "34nHWu"
							});
						case M.g.ContentTakedown:
							return at._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case M.g.CopyrightTakedown:
							return at._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case M.g.Moderator:
							return at._("This post was removed by r/{subredditName} moderator, u/{username}.", [at._param("subredditName", s), at._param("username", t)], {
								hk: "270bcn"
							});
						case M.g.Reddit:
							return at._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return at._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return at._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case M.g.Author:
							return at._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case M.g.AuthorDeleted:
							return at._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case M.g.AutomodFiltered:
							return at._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case M.g.CommunityOps:
							return at._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case M.g.ContentTakedown:
							return at._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case M.g.CopyrightTakedown:
							return at._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case M.g.Moderator:
							return at._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [at._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case M.g.Reddit:
							return at._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return at._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case M.g.AntiEvilOps:
							return i.a.createElement(dt, null);
						case M.g.AuthorDeleted:
						case M.g.Author:
							return at._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case M.g.AutomodFiltered:
							return at._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case M.g.CommunityOps:
							return at._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [at._param("=just ask", i.a.createElement("a", {
								className: it.a.link,
								href: `${tt.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, at._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case M.g.ContentTakedown:
							return i.a.createElement(ct, null);
						case M.g.CopyrightTakedown:
							return at._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case M.g.Moderator:
							return at._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case M.g.Reddit:
							return at._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return at._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return i.a.createElement(dt, null);
						case M.g.AuthorDeleted:
						case M.g.Author:
							return at._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case M.g.AutomodFiltered:
							return at._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [at._param("=[subreddit name]", i.a.createElement("a", {
								className: it.a.link,
								href: `${tt.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, at._("{subreddit name}", [at._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case M.g.CommunityOps:
							return at._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case M.g.ContentTakedown:
							return i.a.createElement(ct, null);
						case M.g.CopyrightTakedown:
							return at._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case M.g.Moderator:
							return at._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case M.g.Reddit:
						default:
							return at._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), d = t ? Ye.a.warning : Ye.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case M.g.AntiEvilOps:
						case M.g.AutomodFiltered:
						case M.g.CommunityOps:
						case M.g.ContentTakedown:
						case M.g.CopyrightTakedown:
						case M.g.Reddit:
							t = st.a;
							break;
						case M.g.AuthorDeleted:
						case M.g.Author:
							t = ot.b;
							break;
						case M.g.Moderator:
							t = nt.a;
							break;
						default:
							t = st.a
					}
					return i.a.createElement(t, {
						className: it.a.icon
					})
				})(n);
				return i.a.createElement(Je.a, {
					className: it.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function mt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(lt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var ut = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				pt = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				bt = s("./src/reddit/actions/modal.ts"),
				ht = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				gt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				xt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ft = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Ct = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				vt = s.n(Ct);
			const _t = i.a.createElement(Qe.a, {
				className: vt.a.RemoveIcon,
				name: "delete_fill"
			});
			var Ot = () => i.a.createElement(Je.a, {
					className: vt.a.bannerBase,
					color: Ye.a.dayModeActionIcon,
					icon: _t,
					title: Ge.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				yt = s("./src/reddit/components/PostContent/index.m.less"),
				Et = s.n(yt),
				jt = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const {
				fbt: kt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pt = p.a.wrapped(ye.c, "PostTitle", Et.a), It = p.a.wrapped(te.a, "ExpandoButton", Et.a), wt = p.a.wrapped(R, "ClassicExpandoMotion", Et.a), St = p.a.wrapped(ne.c, "FullWidthFlatlist", Et.a), Nt = i.a.createElement("p", {
				className: Et.a.VideoProcessingStatus
			}, kt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), Tt = Object(Te.u)({
				isCommentsPage: Te.x,
				pageLayer: e => e
			}), Lt = Object(a.b)(() => Object(l.c)({
				activeModalId: D.a,
				flairStyleTemplate: Te.W,
				currentUser: K.k,
				crosspost: H.d,
				hideNSFWPref: K.F,
				imageGalleryCurrentItem: H.i,
				isAdminOrMod: (e, t) => {
					const s = Object(H.V)(e, {
						postId: t.postId
					});
					return !!s && Object(W.c)(e, {
						subredditId: s.id
					})
				},
				isBlurredPreview: xt.b,
				isCurrentUserProfilePost: H.l,
				isExpanded: H.m,
				isFollowed: H.t,
				isFollowedExpired: H.o,
				showPromotedCTA: q.a,
				post: H.G,
				moderatorPermissions: U.m,
				modModeEnabled: Te.U,
				shouldTryToShowCrosspostModal: gt.e,
				showEditFlair: Ae.a,
				subredditOrProfile: H.V,
				isEditing: z.M,
				userIsOp: K.Db,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: qe,
				isReadingIndicatorsReadTestEnabled: He,
				isReadingIndicatorsWriteTestEnabled: ze,
				isTrueblockPCBlockeeEnabled: Re.e,
				isTypingIndicatorsExperimentEnabled: Ke.b,
				isTypingIndicatorsReadTestEnabled: Ke.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(x.gb)(n)),
					onOpenReportsDropdown: t => e(Object(P.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === B.a.upvoted ? Object(x.kb)(n) : Object(x.w)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
					openPost: t => e(Object(x.L)(t)),
					onFollowPost: t => e(Object(x.jb)(n, t)),
					onFollowPostExpired: () => e(Object(x.Y)({
						id: n,
						expiresAt: 0
					}))
				}
			}), Ft = e => e.media && e.media.type === A.o.EMBED && e.media.provider === A.v.Imgur && e.media.height > 700, Rt = new h.a, At = "VISIBLE", Mt = "NOT_VISIBLE", Bt = e => Rt.publish(e ? At : Mt), Dt = {
				threshold: [.85, .001],
				rootMargin: `${1-we.f}px 0px 0px 0px`
			}, Vt = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Bt(!1), e <= .001 && Bt(!0)
				}
			}, Wt = Object(b.b)(e => ({
				renderingObjectInfo: e.post,
				pageLayer: e.pageLayer
			})), Ut = p.a.wrapped(d.a, "ThumbLink", Et.a), zt = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: o,
					onFollowPostClick: r
				} = e;
				const a = t.source ? i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(Ut, {
					to: Object(y.b)(t.permalink)
				}, i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: Et.a.classicThumbnail
				}, n && i.a.createElement(ue.a, {
					className: Et.a.classicNotificationButton,
					isFilled: !!o,
					onClick: r,
					hasTooltip: !0,
					tooltipText: kt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Ht = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(wt, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ve.a, {
						className: Et.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: t,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: n
					})),
					shouldExpand: !!s
				})
			};
			t.c = Tt(Lt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: h,
					isAdminOrMod: x,
					isBlurredPreview: y,
					isCommentCountAnimation: P,
					isCommentsPage: I,
					isCountAnimShadowTestEnabled: w,
					isCrosspostRecommendationsExperimentEnabled: S,
					isCurrentUserProfilePost: N,
					isEditing: T,
					isExpanded: L,
					isFollowed: F,
					isFollowedExpired: R,
					isModWithUserNotesPermissions: B,
					isOverlay: D,
					isReadingIndicatorsExperimentEnabled: W,
					isReadingIndicatorsReadTestEnabled: U,
					isReadingIndicatorsWriteTestEnabled: z,
					isTrueblockPCBlockeeEnabled: H,
					isTypingIndicatorsExperimentEnabled: q,
					isTypingIndicatorsReadTestEnabled: K,
					isVoteCountAnimation: J,
					moderatorPermissions: te,
					modModeEnabled: ue,
					onFollowPost: be,
					onFollowPostExpired: he,
					onIgnoreReports: ge,
					onOpenReportsDropdown: xe,
					openPost: we,
					onVoteClick: Te,
					post: Ae,
					scrollerItemRef: De,
					sendEvent: Ve,
					shouldTryToShowCrosspostModal: We,
					showEditFlair: Ue,
					showPromotedCTA: ze,
					subredditOrProfile: He,
					userIsOp: qe,
					pageLayer: Ke
				} = e, Ge = Object(Pe.b)(), Ye = Object(r.useRef)(null), [Qe, Je] = Object(r.useState)(Ae.authorIsBlocked), Ze = Object(A.J)(Ae), Xe = Object(a.e)(e => Object(Re.a)(e)), $e = Object(a.e)(e => Object(V.a)(e, {
					post: Ae
				})), tt = Object(c.a)(Ae), st = W || q, nt = st || U || z || K, ot = !!(y && (null == He ? void 0 : He.isNSFW));
				Object(r.useEffect)(() => {
					R && he()
				}, []);
				const rt = Object(a.d)(),
					it = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					if (S && We) return rt(Object(pt.a)(Ae)), it.current = setTimeout(() => {
						rt(Object(bt.h)(ht.a)), rt(Object(pt.b)())
					}, ht.b), () => {
						rt(Object(pt.b)()), rt(Object(bt.g)(ht.a)), it.current && clearTimeout(it.current)
					}
				}, [rt, S, Ae, We]), Object(Fe.a)(Ye, Vt, Dt);
				const at = Ae.isSponsored ? Object(Ce.b)(Ae.id, {
						fireAdPixelsOfType: d,
						openPost: we
					}) : o.a,
					dt = Object(O.a)(te),
					ct = Object(v.a)(te),
					lt = Object(_.a)(te),
					gt = dt || ct,
					xt = ((e, t, s) => {
						const [n, o] = e ? [Object(C.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || o
					})(n, gt, Ae),
					Ct = !!Ae.media && (Ae.media.type === A.o.RTJSON || Ae.media.type === A.o.TEXT),
					vt = qe && Ct,
					_t = Object(ce.a)(Ae),
					yt = Object(me.c)(Ae);
				let kt;
				const wt = Object(jt.a)(),
					Tt = !(ue && dt),
					Lt = Object(_e.b)({
						hide: !st && Tt,
						editPost: !st && Tt,
						save: Tt,
						report: !st && Tt
					}),
					Rt = Ae.removedByCategory === M.g.AuthorDeleted,
					At = n && (n.displayText === Ae.author || n.username === Ae.author),
					Mt = !!Ae.unrepliableReason,
					Bt = !Qe && H && !Rt && !Ft(Ae) && (At || x || !(Ae.removedByCategory && Ae.media && (Object(A.M)(Ae.media) || Object(A.K)(Ae.media) || Object(A.E)(Ae.media)))),
					Ut = $e && Ae.source;
				let qt;
				Ae.media && Ae.media.type !== A.o.TEXT && (qt = Ae.media.richtextContent);
				const Kt = Object(m.t)(Ae, h),
					{
						source: Gt
					} = Kt,
					Yt = Ae.removedByCategory === M.g.Reddit && Object(g.e)(Ae.created) > 24,
					Qt = Ae.removedByCategory && Ae.removedByCategory !== M.g.Reddit || Yt,
					Jt = !Qt && !Ae.isArchived,
					Zt = Object(r.useCallback)(() => {
						be(F ? M.f.UNFOLLOWED : M.f.FOLLOWED), Ge(F ? Object(j.q)(Ae.id) : Object(j.c)(Ae.id))
					}, [be, Ge, F, Ae.id]),
					Xt = i.a.createElement(i.a.Fragment, null, i.a.createElement(Pt, {
						post: Ae,
						innerRef: Ye,
						size: ye.b.ExtraLarge,
						isOverlay: D,
						disableVisited: !0,
						isCommentsPage: !0
					}), i.a.createElement(Q.a, {
						className: Et.a.AdSupplementaryText,
						post: Ae,
						size: ye.b.ExtraLarge
					})),
					$t = i.a.createElement(ut.a, {
						post: Ae,
						showViewCount: xt
					}),
					es = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Ne.g.Classic : Object(Be.c)(n) ? Ne.g.Large : Object(Me.b)(n) ? Ne.g.Large : t ? Ne.g.Large : !n.media || Object(M.p)(n) || Ft(n) ? Ne.g.Medium : Ne.g.Large
					})(e),
					ts = Object(a.e)(ft.b),
					ss = Object(re.b)(Ae),
					ns = () => {
						const t = !(Mt && Xe && Qe),
							n = Object(A.I)(Ae);
						return Mt && n ? i.a.createElement(Ot, null) : Xe && Qe ? i.a.createElement(et, {
							onBannerClick: () => Je(!1),
							isExpandable: Ze
						}) : wt || !Ae.source || es !== Ne.g.Medium || ot ? Bt && !T && es === Ne.g.Large ? i.a.createElement(ve.a, {
							className: Object(u.a)(Et.a.LargePostMedia, {
								[Et.a.isCommentsPage]: I
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: D,
							isOverlay: D,
							post: Ae,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !D,
							showCentered: !0,
							showPromotedCTA: ze,
							scrollerItemRef: De
						}) : t && es === Ne.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(It, {
							crosspost: s || void 0,
							isExpanded: !!L,
							post: Ae,
							useMediaIcons: !1
						}), Ht(e)) : null : i.a.createElement(ke.a, {
							post: Ae,
							isCommentsPage: I,
							pageLayer: Ke
						})
					};
				if (es === Ne.g.Classic) {
					const t = !wt && Object(f.a)(Ae, Qe);
					kt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Oe.a, {
						model: Ae,
						handleVote: Te,
						isCountAnimShadowTestEnabled: w,
						isOverlay: D,
						isVoteCountAnimation: J,
						postId: Ae.id
					}), i.a.createElement("div", {
						className: Et.a.mainBody
					}, i.a.createElement("div", {
						className: Et.a.content
					}, i.a.createElement(Ee.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!B,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Ae,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Ae.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: He,
						shouldShowFollowButton: Jt && !t,
						isFollowed: F,
						onFollowPostClick: Zt
					}), Xt, i.a.createElement(se.a, {
						className: I ? Et.a.leftPadding : void 0,
						post: Ae,
						sendEvent: Ve
					}), Ut && qt && i.a.createElement(oe.a, {
						content: qt,
						rtJsonElementProps: Wt(e)
					}), ue && dt && yt && i.a.createElement(le.a, {
						onIgnoreReports: ge,
						reportable: Ae
					}), i.a.createElement(ie.d, null), i.a.createElement("div", {
						className: Et.a.FlatlistContainer
					}, ns(), i.a.createElement(St, {
						currentUser: n,
						hasModFlairPerms: ct,
						hasModFullPerms: lt,
						hasModPostPerms: dt,
						isOverlay: D,
						onIgnoreReports: ge,
						onOpenReportsDropdown: xe,
						modModeEnabled: ue,
						post: Ae,
						showUpvotePercent: !0,
						showViewCount: xt,
						useFlatlistBreakpoints: Lt,
						isCommentCountAnimation: P,
						isCountAnimShadowTestEnabled: w
					}))), t && i.a.createElement(zt, {
						post: Ae,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Jt,
						isFollowed: F,
						onFollowPostClick: Zt
					})))
				} else if (es === Ne.g.Medium) {
					const t = !wt && Object(f.a)(Ae, Qe);
					kt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Oe.a, {
						model: Ae,
						handleVote: Te,
						isCountAnimShadowTestEnabled: w,
						isOverlay: D,
						shouldShowUpvoteRatioOnHover: st,
						isVoteCountAnimation: J,
						postId: Ae.id
					}), i.a.createElement("div", {
						className: Et.a.mainBody
					}, i.a.createElement("div", {
						className: Et.a.content
					}, i.a.createElement(Ee.a, {
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!B,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Ae,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Ae.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: He,
						shouldShowFollowButton: Jt && !t,
						isFollowed: F,
						onFollowPostClick: Zt
					}), Xt, ns(), Object(A.O)(Ae) && Nt, i.a.createElement(se.a, {
						className: I ? Et.a.leftPadding : void 0,
						post: Ae,
						sendEvent: Ve
					}), He && Qt && i.a.createElement(mt, {
						isAdminOrMod: x,
						post: Ae,
						subredditOrProfile: He
					}), ue && dt && yt && i.a.createElement(le.a, {
						onIgnoreReports: ge,
						reportable: Ae
					})), t && !tt && i.a.createElement(ae.a, {
						post: Ae,
						forceShowNSFW: !0,
						hasModPostPerms: gt,
						isCommentsPage: I,
						isOverlay: !0,
						modModeEnabled: ue,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: He,
						shouldShowFollowButton: Jt,
						isFollowed: F,
						onFollowPostClick: Zt
					})), Ut && qt && !Qt && i.a.createElement(oe.a, {
						content: qt,
						rtJsonElementProps: Wt(e)
					}), i.a.createElement(ie.d, null), !!ts && i.a.createElement(k.a, {
						itemIds: ss,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Ae,
						size: "small"
					}), i.a.createElement("div", {
						className: Et.a.controlsContainer
					}, i.a.createElement(ne.c, {
						currentUser: n,
						hasModFlairPerms: ct,
						hasModFullPerms: lt,
						hasModPostPerms: dt,
						isOverlay: D,
						modModeEnabled: ue,
						onIgnoreReports: ge,
						onOpenReportsDropdown: xe,
						post: Ae,
						showEditPost: vt,
						showEditFlair: Ue,
						tooltipType: D ? je.c.Lightbox : void 0,
						useFlatlistBreakpoints: Lt,
						isCommentCountAnimation: P,
						isCountAnimShadowTestEnabled: w,
						shouldHideItems: st
					}), nt && i.a.createElement(Ie.a, {
						isReadingIndicatorsExperiment: W,
						isReadingIndicatorsReadLoadTest: U,
						isReadingIndicatorsWriteLoadTest: z,
						isTypingIndicatorsExperiment: q,
						isTypingIndicatorsReadLoadTest: K,
						postId: Ae.id
					}), !st && $t))
				} else es === Ne.g.Large && (kt = i.a.createElement("div", {
					"data-test-id": Se.e
				}, i.a.createElement(Oe.a, {
					model: Ae,
					handleVote: Te,
					isCountAnimShadowTestEnabled: w,
					isOverlay: D,
					shouldShowUpvoteRatioOnHover: st,
					isVoteCountAnimation: J,
					postId: Ae.id
				}), Object(Be.c)(Ae) && i.a.createElement(i.a.Fragment, null, i.a.createElement($.a, {
					post: Ae
				}), i.a.createElement(X.a, {
					post: Ae
				})), !Object(Be.c)(Ae) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: I,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: !!B,
					isOverlay: !!D,
					isTopicPage: !1,
					post: Ae,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!D && !Ae.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: He,
					shouldShowFollowButton: Jt,
					isFollowed: F,
					onFollowPostClick: Zt
				}), Xt, ((e, t, s, n) => !wt && e.source && !t && (s || n))(Ae, s, D, I) && !ot && i.a.createElement(ke.a, {
					post: Ae,
					isCommentsPage: I,
					pageLayer: Ke
				})), i.a.createElement(se.a, {
					className: I ? Et.a.leftPadding : void 0,
					post: Ae,
					sendEvent: Ve
				}), He && Qt && i.a.createElement(mt, {
					isAdminOrMod: x,
					post: Ae,
					subredditOrProfile: He
				}), T && i.a.createElement(fe, {
					post: Ae
				}), ns(), ze && Gt && Gt.url && !Ae.isSurveyAd && i.a.createElement(G.a, {
					className: Et.a.adLinkWrapper
				}, i.a.createElement(Y.a, {
					post: Ae,
					adLinkContent: Kt
				})), ue && dt && _t && i.a.createElement("div", {
					className: Et.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					thing: Ae
				})), ue && dt && yt && i.a.createElement("div", {
					className: Et.a.modModeBannerWrapper
				}, i.a.createElement(le.a, {
					onIgnoreReports: ge,
					reportable: Ae
				})), Object(Me.b)(Ae) && i.a.createElement(Z.a, {
					post: Ae
				}), i.a.createElement(ie.d, null), !!ts && i.a.createElement(k.a, {
					itemIds: ss,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Ae,
					size: "small"
				}), i.a.createElement("div", {
					className: Et.a.controlsContainer
				}, i.a.createElement(ne.c, {
					currentUser: n,
					forceOpenInNewTab: p,
					hasModFlairPerms: ct,
					hasModFullPerms: lt,
					hasModPostPerms: dt,
					isOverlay: D,
					modModeEnabled: ue,
					onIgnoreReports: ge,
					onOpenReportsDropdown: xe,
					post: Ae,
					showEditPost: vt,
					showEditFlair: Ue,
					tooltipType: D ? je.c.Lightbox : void 0,
					useFlatlistBreakpoints: Lt,
					isCommentCountAnimation: P,
					isCountAnimShadowTestEnabled: w,
					shouldHideItems: st
				}), nt && i.a.createElement(Ie.a, {
					isReadingIndicatorsExperiment: W,
					isReadingIndicatorsReadLoadTest: U,
					isReadingIndicatorsWriteLoadTest: z,
					isTypingIndicatorsExperiment: q,
					isTypingIndicatorsReadLoadTest: K,
					postId: Ae.id
				}), !st && $t)));
				const os = Object(r.useCallback)((e, t) => Object(j.k)(e, t), []);
				return i.a.createElement(pe.a, {
					className: Object(u.a)(t, Et.a.postContainer, {
						[Et.a.hasEventMeta]: Object(Le.a)(Ae)
					}),
					isOverlay: D,
					post: Ae,
					eventFactory: D ? E.b : os,
					onClick: at
				}, i.a.createElement(ee.a, {
					post: Ae
				}), kt)
			}))
		},
		"./src/reddit/components/PostDetailStickyHeader/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDetailStickyHeader",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("PostDetailStickyHeader").then(s.bind(null, "./src/reddit/components/PostDetailStickyHeader/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PostDetailStickyHeader/index.tsx"
					}
				}),
				c = e => {
					const t = Object(i.e)(a.c),
						s = Object(i.e)(a.a);
					return t || s ? r.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
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
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(_);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: _,
					isOverlay: y,
					isTopicPage: E,
					post: j,
					shouldShowSubscribeButton: k,
					subredditOrProfile: P,
					tooltipType: I
				} = e, w = !!E, S = Object(C.a)(), N = Object(r.e)(e => !!P && Object(i.i)(e, P.id));
				return o.a.createElement("div", {
					className: O.a.metaContainer
				}, !n && !j.isSponsored && P && o.a.createElement(d.a, {
					postId: j.id,
					subredditName: P.name
				}, o.a.createElement(p.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: S
					}
				}, P.displayText)), P && P.isQuarantined && o.a.createElement(u.a, null), !n && !j.isSponsored && P && k && !_ && o.a.createElement(b.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(f.k)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(v.h)(P) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: j.id,
					size: g.d.XXS,
					small: !0
				}), !n && !j.isSponsored && o.a.createElement(x.b, null), !n && !j.isSponsored && o.a.createElement(c.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), o.a.createElement(m.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: I,
					isModWithUserNotesPermissions: N
				}), o.a.createElement(l.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!n,
					post: j,
					tooltipType: I
				}), !w && o.a.createElement(a.a, {
					hideCta: s,
					thing: j,
					tooltipType: y ? m.c.Lightbox : void 0
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
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
					redditStyle: g,
					isOverlay: x,
					isVoteCountAnimation: f,
					postId: C,
					shouldShowUpvoteRatioOnHover: v
				} = e, _ = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: _,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: p,
					postId: C,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
				}))
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostTopLine/index.m.less"),
				j = s.n(E);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: E,
					hostPostData: k,
					iconClassName: P,
					inSubredditOrProfile: I,
					isCommentsPage: w,
					isCompactPinnedPost: S,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: T,
					isOverlay: L,
					isTopicPage: F,
					listingKey: R,
					post: A,
					shouldShowSubscribeButton: M,
					showCornerOutboundLink: B,
					showSubreddit: D,
					showSubredditIcon: V,
					subredditOrProfile: W,
					isFollowed: U,
					shouldShowFollowButton: z,
					onFollowPostClick: H
				} = e;
				const q = F,
					K = W && Object(O.h)(W),
					G = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(y.Gb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(j.a.container, t)
				}, D && W && r.a.createElement("div", {
					className: j.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, V && r.a.createElement(p.b, {
					className: Object(a.a)(j.a.subredditIcon, P),
					shouldHideNsfwIcon: E,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: j.a.everythingElseWrapper
				}, D && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(u.d, {
					className: j.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: L ? u.c.Lightbox : void 0,
					post: A,
					showSub: D,
					subredditOrProfile: W
				}), r.a.createElement(m.a, {
					className: j.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: S,
					post: A,
					tooltipType: L ? u.c.Lightbox : void 0
				}), !q && r.a.createElement(d.a, {
					isPostDetail: w,
					thing: A,
					tooltipType: L ? u.c.Lightbox : void 0
				})), W && G && D && M && !N && r.a.createElement(h.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(C.k)(A.id, e ? "unsubscribe" : "subscribe", "post", R, k),
					identifier: {
						name: W.name,
						type: K ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: A.id,
					size: x.d.XS
				}), B && r.a.createElement(f.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(_.D)(A),
					source: A.source
				}, r.a.createElement(v.a, {
					className: j.a.outboundLinkIcon
				})), z && G && r.a.createElement(l.a, {
					isFilled: !!U,
					onClick: H,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/PostUnavailableBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_3pCwayT6l9aM5Uh9YuCXeP",
				RemoveIcon: "YKKq2c1RnR-x1pamdskkg",
				removeIcon: "YKKq2c1RnR-x1pamdskkg"
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				p = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/helpers/postCollection.ts"),
				O = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/screenview.ts"),
				j = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				P = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				w = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				N = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/lib/classNames/index.ts"),
				R = s("./src/reddit/constants/listings.ts"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/helpers/name/index.ts"),
				B = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				D = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				V = s.n(D);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var U = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return o ? (c = R.c[R.b.Popular], d = W._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? W._("See more posts like this in {subredditName}", [W._param("subredditName", Object(M.c)(r.displayText))], {
						hk: "pLxW5"
					}) : W._("Continue browsing in {subredditName}", [W._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.default, {
						className: Object(F.a)(V.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: V.a.background
					}), a.a.createElement("div", {
						className: V.a.layout
					}, d, a.a.createElement(B.a, {
						className: V.a.arrow
					})))
				}),
				z = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				q = s.n(H);
			const K = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, k.a, P.b, (e, t, s) => !((!t || s) && e)),
				G = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(_.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.P, L.Q, j.d, K, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				Y = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, I.b, w.c, T.Y, T.ib, (e, t, s, n, o) => {
					const r = !!e;
					let i, a = "";
					if (e && (i = {
							hostPostId: e.id,
							shouldShowLinkedPosts: !1,
							subreddit: o
						}), (s || t) && e && r) {
						const {
							id: t
						} = e;
						a = Object(u.a)(t), i = {
							canonicalUrl: n.canonical_url,
							baseUrl: n.base_url,
							hostPostId: t,
							shouldShowLinkedPosts: !Object(f.qg)(s) && !Object(w.a)(s),
							subreddit: o
						}
					}
					return {
						hostPostData: i,
						isEligibilityLoaded: r,
						listingBelowVariant: s,
						linkedPostsListingKey: a
					}
				}),
				Q = Object(c.c)({
					isD2xPdpSideRailRecsEnabled: I.b,
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: S.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: N.b
				}),
				J = Object(d.b)(Q, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.Z.HOT,
						subredditName: t
					}))
				}));
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(x.e) : null, this.onViewed = (e, t) => Object(E.f)({
						key: this.listingKey(),
						sort: l.Z.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.lc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(y.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						isD2xPdpSideRailRecsEnabled: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: r
					} = this.props;
					return s || e ? t : o && n && n.id ? Object(z.a)(n.id) : Object(p.a)(r.name, l.Z.TOP, {
						t: l.lc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: o,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(f.qg)(c) && !Object(w.a)(c) && !i) return a.a.createElement("div", {
						className: q.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(O.a)(r.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(w.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === f.Pe.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: q.a.smallBanner,
						style: {
							color: m
						}
					}, u)
				}
				render() {
					const {
						contentContainerRef: e,
						isD2xPdpSideRailRecsEnabled: t,
						listingBelowLinkedPostsData: s,
						shouldShowListingBelow: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: i
					} = this.props, {
						hostPostData: d,
						listingBelowVariant: c
					} = s;
					if (!n) return null;
					const l = !!(null == d ? void 0 : d.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: q.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: q.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: d,
						isTruncated: !0,
						listingBelowVariant: c,
						listingKey: this.listingKey(),
						listingName: C.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: q.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						skipSubredditPosts: t ? 15 : 0,
						shouldHideFlair: !0
					}), a.a.createElement(U, {
						className: q.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: l,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: i
					}))
				}
			}
			t.a = J(Object(m.a)(Object(g.c)(Z)))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: d
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: Object(r.a)(c.a.content, {
						[c.a.mCollapsed]: s
					})
				}, o.a.createElement("div", {
					className: Object(r.a)(c.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, t) => {
				let {
					postId: s
				} = t;
				return {
					canShowAd: Object(i.a)(e, {
						postId: s
					}) && !Object(d.E)(e) && !Object(a.a)(e)
				}
			})(e => {
				let {
					canShowAd: t,
					postId: s,
					commentsPageKey: n,
					...r
				} = e;
				return t ? o.a.createElement(c.a, r) : null
			})
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
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/helpers.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/Footer/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				C = s("./src/reddit/selectors/telemetry.ts");
			const v = "nsfw_dialog";
			var _ = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				O = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				y = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				E = s.n(y);
			const j = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				k = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(O.f),
						m = Object(r.useCallback)(() => {
							n === O.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? i.a.createElement("div", {
							className: E.a.cta
						}, o.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), o.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: E.a.cta
						}, o.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === O.a.Blurred);
					return Object(r.useEffect)(() => {
						Object(f.c)(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(E.a.mainCta)
					}, i.a.createElement(_, null), b, i.a.createElement("div", {
						className: E.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: E.a.warning
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: E.a.buttonContainer
					}, i.a.createElement(x.j, {
						className: Object(l.a)(E.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(C.n)(e),
								source: "xpromo",
								action: "click",
								noun: v
							}))()), m(), Object(f.b)(f.a.Login), t(Object(u.openLoginModal)())
						}
					}, (() => o.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(x.j, {
						className: E.a.cancel,
						onClick: () => {
							Object(c.b)(), s((() => e => ({
								...Object(C.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: v
							}))()), Object(f.b)(f.a.Dismiss), t(Object(d.b)("/"))
						}
					}, (() => o.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				P = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: E.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: E.a.qrCodeInner
					}, i.a.createElement("img", {
						className: E.a.qrCode,
						alt: o.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: E.a.copyLine1
					}, (() => o.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: E.a.copyLine2
					}, (() => o.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: E.a.sneakySnoo,
						src: t
					})))
				}),
				I = e => {
					const t = Object(h.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(C.n)(e),
							source: "xpromo",
							action: "view",
							noun: v
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(a.e)(O.g), o = Object(a.e)(O.h), r = Object(a.e)(O.f), d = r === O.a.Blurred ? b.a.White : r === O.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: E.a.container
					}, i.a.createElement(k, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(E.a.footerWrapper, {
							[E.a.mIsModal]: r === O.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: d
					})), i.a.createElement(P, {
						qrCodeAsset: (() => n === g.Uc.Enabled || o === g.vb.BlurredPreview || o === g.vb.NoPreview ? j.d2x_nsfw_signup_blocking_de_v1 : j.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/UsersCountIndicator/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "UsersCountIndicator",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UsersCountIndicator").then(s.bind(null, "./src/reddit/components/UsersCountIndicator/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/UsersCountIndicator/index.tsx"
				}
			})
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				u = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(u, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(u, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(u, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(u, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less": function(e, t, s) {
			e.exports = {
				RecommendationSidebar: "_3Ndcxbm5f0pPvNSI2kk7Ua",
				recommendationSidebar: "_3Ndcxbm5f0pPvNSI2kk7Ua",
				isSticky: "_11FHz1-jlbYJ0ogJJ8HlvS"
			}
		},
		"./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/classnames/index.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less"),
				d = s.n(a);
			class c extends i.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.threshold = 0, this.ref = i.a.createRef(), this.measure = () => {
						if (!this.state.isSticky && this.ref && this.ref.current) {
							const e = this.ref.current.getBoundingClientRect(),
								t = document.documentElement.scrollTop,
								s = e.top + t,
								n = this.ref.current.clientHeight;
							this.offset = window.innerHeight - n, this.threshold = n + s - window.innerHeight
						}
					}, this.handleScroll = () => {
						this.measure(), this.setState({
							isSticky: this.threshold > 0 && window.scrollY >= this.threshold
						})
					}, this.ref = i.a.createRef(), this.state = {
						isSticky: !1
					}
				}
				componentDidMount() {
					this.measure(), window.addEventListener("scroll", this.handleScroll)
				}
				componentWillUnmount() {
					window.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					return i.a.createElement("div", {
						style: this.ref.current ? {
							height: this.ref.current.clientHeight
						} : {}
					}, i.a.createElement("div", {
						ref: this.ref,
						style: this.state.isSticky ? {
							top: this.offset
						} : {},
						className: o()(this.props.className, d.a.recommendationSidebar, {
							[d.a.isSticky]: this.state.isSticky
						})
					}, this.props.children))
				}
			}
		},
		"./src/reddit/components/Widgets/Recommendations/index.m.less": function(e, t, s) {
			e.exports = {
				recommendationWidget: "_1WHlo0amI-5XpQrgGac9jY",
				postPreview: "_3G-DpckPZwPYm-VEwXS5uA",
				thumbnail: "_2DBbsvO3jP7bcFqAftcbiQ",
				subredditTitle: "WfSCvRO60bnRAHFf76dCJ",
				subredditName: "_1AF1qgUDsTX_XHGNtb9eTD",
				subredditIcon: "bl4ZZFlSdSp0651LqnPbO",
				metaContainer: "BwvWQ18WXJeAju_oSfQGJ",
				metaSection: "BBzDU1DzKBAtxEtIy16cO",
				dotSpacer: "_2Dy7qlY8h2gM-idmKUvIwU",
				icon: "_3JBKdIEBBJDr8ks2UAEKb6",
				postTitle: "_16PE03zyTycZgJEtewpplw",
				shortTitle: "_2PD84jAIu_lwZaR50QQvOM",
				communityBannerPlaceholder: "_2D7zl_d54nzW6JddGmlL0v",
				glimmer: "_3TZhL8u0Es1uNC4NiTMq6T",
				placeholderWrapper: "_7E_JlVtw5vjKoE_zXOqOu",
				subredditIconLoading: "_1vB3FG5cxYqw1tOuiA4XY9",
				subredditNameLoading: "_1yeeGZiqTUF5R2CX3OeN-6",
				postTitleLoading: "_1XDqtC7PCill1D0glb6XnR",
				postMetaSectionLoading: "_2K21kGnTaAQg66D6rlbV2-",
				verticalPostPreviewContainer: "_1Rbe3T11RIqoP4Q5IhxfnO",
				verticalPostPreviewThumbnail: "_23aHU6t4uajlAh0CKp4cOP"
			}
		},
		"./src/reddit/components/Widgets/Recommendations/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/pick.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const g = e => ({
					...h.n(e),
					source: "global",
					noun: "discovery_unit",
					action: "view",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				x = e => ({
					...h.n(e),
					source: "post",
					noun: "upvote",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				}),
				f = e => ({
					...h.n(e),
					source: "post",
					noun: "comments",
					action: "click",
					actionInfo: {
						...h.d(e),
						type: "right_rail"
					}
				});
			var C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				_ = s("./node_modules/lodash/once.js"),
				O = s.n(_),
				y = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/isUrl/index.ts"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				P = s("./src/lib/timeAgo/index.ts"),
				I = s("./src/lib/truncateText/index.ts"),
				w = s("./src/reddit/components/Flair/index.tsx"),
				S = s("./src/reddit/components/SubredditIcon/index.tsx"),
				N = s("./src/reddit/constants/thumbnails.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				L = s("./src/reddit/helpers/trackers/post.ts"),
				F = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				R = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				A = s("./src/reddit/models/Flair/index.ts"),
				M = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				B = s("./src/reddit/actions/linkedPosts/index.ts"),
				D = s("./src/reddit/constants/experiments.ts"),
				V = s("./src/reddit/components/Widgets/Recommendations/index.m.less"),
				W = s.n(V);
			const U = 2e3;
			class z {
				constructor(e, t) {
					this.intersectingRatio = -1, this.consumed = !1, this.maybeConsume = () => {
						this.clearConsumeTimeout(), this.isConsuming() && (this.onConsume(), this.consumed = !0, this.disconnect())
					}, this.handleIntersectionEvent = e => {
						this.intersectingRatio = e[0].intersectionRatio, this.isViewing() && this.onView(), !this.isConsuming() || this.consumed || this.consumeTimeoutId || (this.consumeTimeoutId = setTimeout(this.maybeConsume, U))
					}, this.onConsume = O()(t), this.onView = O()(e), this.observer = new IntersectionObserver(this.handleIntersectionEvent, {
						threshold: [0, 1]
					})
				}
				isConsuming() {
					return this.intersectingRatio >= 1
				}
				isViewing() {
					return this.intersectingRatio > 0
				}
				clearConsumeTimeout() {
					this.consumeTimeoutId && (clearTimeout(this.consumeTimeoutId), this.consumeTimeoutId = void 0)
				}
				connect(e) {
					this.observer.observe(e)
				}
				disconnect() {
					this.clearConsumeTimeout(), this.observer.disconnect()
				}
			}
			var H = Object(p.c)(e => {
				const t = Object(l.d)(),
					{
						post: s,
						sendEvent: n
					} = e,
					o = Object(d.useRef)(null),
					r = Object(d.useRef)(null),
					i = Object(l.e)(e => e.subreddits.models[s.belongsTo.id]),
					a = Object(l.e)(M.a) === D.Wc.LargeImagePreview;
				Object(d.useEffect)(() => {
					var e;
					null === (e = r.current) || void 0 === e || e.disconnect(), r.current = new z(() => {
						n(Object(L.g)(s.id))
					}, () => {
						n(Object(L.d)(s.id, U, !0))
					}), r.current.connect(o.current)
				}, [s, n]);
				const m = Object(d.useCallback)(() => {
						const e = Object(u.a)(s.id);
						t(Object(B.c)({
							key: e
						})), window.scroll(0, 0), n(Object(L.f)(s.id))
					}, [s, n, t]),
					p = Object(d.useCallback)(() => {
						n(x)
					}, [n]),
					b = Object(d.useCallback)(() => {
						n(f)
					}, [n]),
					{
						created: h,
						numComments: g,
						thumbnail: C,
						upvoteRatio: v,
						permalink: _,
						title: O
					} = s,
					V = v ? `${Math.round(100*v)}%` : "",
					H = s.flair.length ? s.flair.findIndex(e => e.type === A.f.Nsfw) : -1;
				return c.a.createElement("li", {
					className: W.a.postPreview,
					ref: o,
					onClick: m
				}, c.a.createElement(y.a, {
					to: Object(T.b)(_)
				}, a ? (() => c.a.createElement("div", {
					className: W.a.verticalPostPreviewContainer
				}, c.a.createElement("div", {
					className: W.a.verticalPostPreviewHeader
				}, c.a.createElement("div", {
					className: W.a.subredditTitle
				}, c.a.createElement(S.b, {
					className: W.a.subredditIcon,
					subredditOrProfile: i
				}), c.a.createElement("span", {
					className: W.a.subredditName
				}, i && `r/${i.name}`), H >= 0 && c.a.createElement(w.b, {
					flair: s.flair[H]
				}))), C && Object(j.a)(C.url) && c.a.createElement("div", {
					className: W.a.verticalPostPreviewThumbnail
				}, c.a.createElement("img", {
					className: W.a.thumbnail,
					src: C.url
				})), c.a.createElement("div", {
					className: Object(E.a)(W.a.postTitle, {
						[W.a.shortTitle]: C.url !== N.a.DEFAULT
					})
				}, Object(I.a)(O, 60, "..."))))() : (() => c.a.createElement(c.a.Fragment, null, C && Object(j.a)(C.url) && c.a.createElement("img", {
					className: W.a.thumbnail,
					src: C.url
				}), c.a.createElement("div", {
					className: W.a.subredditTitle
				}, c.a.createElement(S.b, {
					className: W.a.subredditIcon,
					subredditOrProfile: i
				}), c.a.createElement("span", {
					className: W.a.subredditName
				}, i && `r/${i.name}`), H >= 0 && c.a.createElement(w.b, {
					flair: s.flair[H]
				})), c.a.createElement("div", {
					className: Object(E.a)(W.a.postTitle, {
						[W.a.shortTitle]: C.url !== N.a.DEFAULT
					})
				}, Object(I.a)(O, 60, "..."))))(), c.a.createElement("div", {
					className: W.a.metaContainer
				}, c.a.createElement("div", {
					className: W.a.metaSection,
					onClick: p
				}, c.a.createElement(R.a, {
					className: W.a.icon
				}), c.a.createElement("span", null, V)), c.a.createElement("div", {
					className: W.a.metaSection,
					onClick: b
				}, c.a.createElement(F.a, {
					className: W.a.icon
				}), c.a.createElement("span", {
					className: W.a.meta
				}, Object(k.b)(g))), c.a.createElement("span", {
					className: W.a.dotSpacer
				}), c.a.createElement("div", {
					className: W.a.metaSection
				}, c.a.createElement("span", null, Object(P.a)(h / 1e3, !0))))))
			});
			var q = e => c.a.createElement("div", {
				className: Object(E.a)(W.a.placeholderWrapper)
			}, c.a.createElement("div", {
				className: W.a.header
			}, c.a.createElement("span", {
				className: W.a.subredditIconLoading
			}), c.a.createElement("span", {
				className: W.a.subredditNameLoading
			})), c.a.createElement("div", {
				className: W.a.postTitleLoading
			}), c.a.createElement("div", {
				className: W.a.postMetaSectionLoading
			}));
			const K = () => n.fbt._("Similar to this post", null, {
					hk: "XKYGj"
				}),
				G = [];
			for (let X = 0; X < 15; X++) G.push(c.a.createElement(q, {
				key: X
			}));
			const Y = (e, t) => {
					const {
						post: s
					} = t;
					return Object(u.a)(s.id)
				},
				Q = Object(m.a)((e, t) => {
					const s = Y(0, t);
					return Object(v.z)(e, {
						listingKey: s
					})
				}, e => e.posts.models, (e, t) => {
					const s = Y(0, t);
					return Object(C.d)(e, {
						listingKey: s
					})
				}, (e, t, s) => {
					const n = [];
					let o = 0,
						r = 0;
					for (; o < 15 && r < e.length;) {
						const s = t[e[r++]];
						s && s.belongsTo && "subreddit" === s.belongsTo.type && (n.push(s), o++)
					}
					return {
						posts: n,
						isPending: s
					}
				});

			function J(e, t) {
				const s = ["posts", "isPending"];
				return r()(a()(e, s), a()(t, s))
			}
			const Z = c.a.memo((function(e) {
				let {
					post: t,
					subredditOrProfile: s
				} = e;
				const n = Object(p.b)(),
					{
						posts: o,
						isPending: r
					} = Object(l.e)(e => Q(e, {
						post: t,
						subredditOrProfile: s
					}), J);
				if (Object(d.useEffect)(() => {
						n(g)
					}, [n]), !o.length && !r) return null;
				const i = (null == o ? void 0 : o.length) && o.map((e, t) => c.a.createElement(H, {
					post: e,
					key: t
				}));
				return c.a.createElement(b.a, {
					title: K()
				}, c.a.createElement("ul", null, r ? G : i))
			}));
			t.a = Z
		},
		"./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less": function(e, t, s) {
			e.exports = {
				ImageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				imageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				Center: "_2KLA5wMaJBHg0K2z1q0ci_",
				center: "_2KLA5wMaJBHg0K2z1q0ci_",
				Upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				LineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				lineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				HorizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				horizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				CircleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				circleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				Circle: "_2gaJVJ6_j7vwKV945EABN9",
				circle: "_2gaJVJ6_j7vwKV945EABN9"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_3gbb_EMFXxTYrxDZ2kusIp",
				button: "_3gbb_EMFXxTYrxDZ2kusIp"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Widgets/ReredditLink/index.tsx"
				}
			})
		},
		"./src/reddit/components/Widgets/ReredditLink/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2YJDRz5rCYQfu8YdgB_neb",
				widget: "_2YJDRz5rCYQfu8YdgB_neb",
				ButtonContainer: "_37WD6iicVS6vGN0RomNTwh",
				buttonContainer: "_37WD6iicVS6vGN0RomNTwh"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "ReredditButtons", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/helpers/trackers/widgets.ts"),
				l = s("./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less"),
				m = s.n(l);
			const u = `${a.a.assetPath}/img/widgets/rereddit-promo/`;
			var p = e => {
					let {
						url: t,
						postId: s
					} = e;
					const r = Object(d.b)(),
						i = Object(n.useCallback)(() => {
							r(Object(c.a)(s))
						}, [s, r]),
						l = `${a.a.redditUrl}/posts/${t}`;
					return o.a.createElement("a", {
						href: l,
						onClick: i,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.a.createElement("div", {
						className: m.a.ImageContainer
					}, o.a.createElement("img", {
						src: `${u}left.png`
					}), o.a.createElement("img", {
						className: m.a.Center,
						src: `${u}center.png`
					}), o.a.createElement("img", {
						src: `${u}right.png`
					}), o.a.createElement("img", {
						className: m.a.Upvotes,
						src: `${u}upvotes.png`
					})), o.a.createElement("div", {
						className: m.a.LineContainer
					}, o.a.createElement("img", {
						className: m.a.HorizontalLine,
						src: `${u}line.png`
					}), o.a.createElement("div", {
						className: m.a.CircleContainer
					}, o.a.createElement("div", {
						className: m.a.Circle
					}))))
				},
				b = s("./src/reddit/components/SidebarFooter/index.m.less"),
				h = s.n(b),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less"),
				f = s.n(x);
			const C = r.a.a("Link", h.a);
			var v = e => {
					let {
						buttonText: t,
						children: s,
						postId: r,
						renderAsPlainLink: i,
						url: l
					} = e;
					const m = Object(d.b)(),
						u = Object(n.useCallback)(() => {
							m(Object(c.a)(r, t))
						}, [r, t, m]);
					return i ? o.a.createElement(C, {
						href: `${a.a.redditUrl}/posts/${l}`,
						onClick: u,
						target: "_blank"
					}, s) : o.a.createElement(g.t, {
						className: f.a.Button,
						href: `${a.a.redditUrl}/posts/${l}`,
						kind: g.b.ExternalLink,
						onClick: u,
						target: "_blank"
					}, s)
				},
				_ = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				O = s("./src/reddit/helpers/ordinal/index.ts"),
				y = s("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				E = s.n(y);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], P = r.a.div("ButtonContainer", E.a), I = e => {
				let {
					directoryTimestamp: t,
					postId: s,
					renderAsPlainLink: n
				} = e;
				const r = new Date(t),
					i = k[r.getMonth()],
					a = r.getFullYear(),
					d = r.getDate(),
					c = Object(O.a)(d),
					l = `${a}/${i}-${d}-1/`,
					m = `${a}/${i}/`,
					u = `${a}/`;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(v, {
					key: "ymd",
					buttonText: `top_posts_${i}_${c}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: l
				}, j._("Top posts {date}", [j._param("date", `${i} ${c} ${a}`)], {
					hk: "4xgYoo"
				})), o.a.createElement(v, {
					key: "ym",
					buttonText: `top_posts_of_${i}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: m
				}, j._("Top posts of {date}", [j._param("date", `${i}, ${a}`)], {
					hk: "HQnvs"
				})), o.a.createElement(v, {
					key: "y",
					buttonText: `top_posts_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: u
				}, j._("Top posts {date}", [j._param("date", `${a}`)], {
					hk: "4xgYoo"
				})))
			};
			t.default = e => {
				let {
					directoryTimestamp: t,
					postId: s
				} = e;
				const n = new Date(t),
					r = k[n.getMonth()],
					a = `${n.getFullYear()}/${r}-${n.getDate()}-1/`;
				return o.a.createElement(i.a, null, o.a.createElement(_.a, {
					className: E.a.Widget,
					contentOnly: !0
				}, o.a.createElement(p, {
					postId: s,
					url: a
				}), o.a.createElement(P, null, o.a.createElement(I, {
					directoryTimestamp: t,
					postId: s
				}))))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const E = y(),
				j = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: C.g,
					postsById: v.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(v.D)(e, s, n, o)
					}),
					subredditsById: _.cb,
					viewportDataLoaded: O.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.e
				},
				k = Object(o.c)(j),
				P = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(c.O(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(c.P(t, n, o))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				I = e => Object(b.b)({
					...e
				}),
				w = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", o, r, i, void 0)
				},
				S = Object(n.b)(k, P, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: w
				}));
			t.a = e => Object(u.c)(E(S(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/raf/index.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = a.a.createContext(!1);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || r()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, o = {
						...c,
						...t
					};
					return a.a.createElement(n.a, d({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(i.useContext)(l)
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
				return s
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: c,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const u = m.body,
					{
						post: p
					} = u && u.data,
					b = t(),
					h = Object(n.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (p) {
					if (p.otherDiscussions && p.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = p, {
							postFlair: s,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: g
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(r.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === d.a.Post && n.postInfo) {
										const e = Object(r.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(o.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						c({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: g
						})
					}
				} else c({
					count: 0,
					key: h,
					meta: b.meta,
					postFlair: {},
					postId: l,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const s = Array.prototype.slice.call(arguments);
								return s.unshift(t), e.push(s), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const s = e.methods[t];
							e[s] = e.factory(s)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(t, s)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/trackers/features/expandedCrossposts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => s => ({
					source: "post_discovery",
					action: "view",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.n(s)
				}),
				r = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.n(s)
				}),
				i = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...n.n(e)
				})
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(n.n)(e),
					media: Object(n.B)(e, t),
					profile: Object(n.S)(e),
					subreddit: Object(n.ib)(e) || Object(n.lb)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.J)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.J)(t, e),
					...o(t, e)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					r = Object(n.e)(o.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), o.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), o.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), o.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: n,
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/get.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				u = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/contexts/Post/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/pages/CommentsPage/index.tsx"),
				f = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(c.b)(() => Object(v.c)({
				primaryPostId: C.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(p.a, {
					postId: t
				}, d.a.createElement(x.CommentsPage, _({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(f.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, u.b.IsOverlay, !1), n = i()(t, u.b.CloseLocation, null), r = i()(t, u.b.ScrollOnLoad, !1);
				r && Object(b.c)(u.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: p,
						subredditName: x,
						collectionId: f
					} = a,
					C = p ? Object(g.w)(p) : void 0,
					v = c && Object(h.h)(c),
					_ = o()([...Object(l.a)(e.location.search)]),
					y = {};
				e.hasSortParam && (y.sort = e.sort, y.hasSortParam = !0);
				const E = Object(m.a)(f, C, v, y);
				return d.a.createElement(O, {
					closeLocation: n,
					collectionId: f,
					commentId: v,
					commentsPageKey: E,
					isOverlay: s,
					location: e.location,
					postId: C,
					instanceId: _.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: x,
					onOtherDiscussions: !!_.onOtherDiscussions
				})
			})
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				c = s("./src/reddit/components/ExpandedCrossposts/async.tsx"),
				l = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				b = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				C = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				v = s.n(C);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: f.a,
				headComment: x.x,
				post: x.J
			}), y = e => {
				var t;
				const s = Object(g.a)(),
					{
						isSubredditDiscoveryCrosspostEnabled: n,
						headComment: i,
						post: x
					} = Object(r.e)(t => O(t, e)),
					f = Object(m.b)(),
					{
						commentId: C,
						isOverlay: y,
						postId: E
					} = e;
				if (!x) return null;
				const j = null !== (t = x.numDuplicates) && void 0 !== t ? t : 0,
					k = void 0 !== C,
					P = x.permalink,
					I = j > 0,
					w = Object(u.b)(Object(d.e)(P));
				return k || I ? o.a.createElement("div", {
					className: v.a.CommentsNavigationPane
				}, k && o.a.createElement("div", null, o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: y,
					to: Object(u.b)(P),
					onClick: () => f(Object(h.l)(E, i, s))
				}, _._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					isOverlay: y,
					to: Object(u.b)(i.permalink + "?context=8&depth=9")
				}, _._("Show parent comments", null, {
					hk: "AVRCa"
				}))), I && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(c.a, {
					postId: E
				}), o.a.createElement(l.a, {
					className: Object(a.a)(v.a.OtherDiscussionsLink, {
						[v.a.discoveryExperimentLink]: n
					}),
					isOverlay: y,
					onClick: () => f(n ? Object(p.b)() : Object(b.a)(E)),
					to: w
				}, n ? o.a.createElement(o.a.Fragment, null, _._("View all", null, {
					hk: "30twDK"
				}), ` (${j})`) : _._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [_._plural(j, "other discussion communities count")], {
					hk: "3oofZ8"
				})))) : null
			}
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				Spacer: "q6p33SkkiPu07qUoN_Kd",
				spacer: "q6p33SkkiPu07qUoN_Kd",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				OverviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				overviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				backgroundMargin: "_34i0o0-SanTnUOM8JXdW6f",
				isFirstInCommentList: "_22yjV_JLQY-BfOOW1wgsgI",
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe",
				EmbeddedLiveChatContainer: "_2NpqPnGM9PjW4Bj7Eytjrn",
				embeddedLiveChatContainer: "_2NpqPnGM9PjW4Bj7Eytjrn"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return Nt
			})), s.d(t, "CommentsPage", (function() {
				return Bt
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				f = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				_ = s("./src/lib/fastdom/index.ts"),
				O = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/lib/performanceTimings/index.tsx"),
				k = s("./src/reddit/actions/ads/index.ts"),
				P = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				N = s("./src/reddit/actions/linkedPosts/index.ts"),
				T = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/modal.ts"),
				F = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				R = s("./src/reddit/actions/pages/comments.ts"),
				A = s("./src/reddit/actions/reportFlow/index.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				B = s("./src/reddit/actions/upvotePrompt.ts"),
				D = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				V = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				W = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				U = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				z = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				q = s("./src/reddit/constants/componentSizes.ts"),
				K = s("./src/reddit/constants/elementIds.ts"),
				G = s("./src/reddit/constants/history.ts"),
				Y = s("./src/reddit/constants/keycodes.ts"),
				Q = s("./src/reddit/constants/posts.ts"),
				J = s("./src/reddit/constants/screenWidths.ts"),
				Z = s("./src/reddit/contexts/ApiContext.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ee = s("./src/reddit/helpers/sessionStorage/index.ts"),
				te = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				se = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				ne = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				oe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				re = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				ie = s("./src/reddit/selectors/subreddit.ts"),
				ae = s("./src/reddit/selectors/upvotePrompt.ts"),
				de = s("./src/reddit/featureFlags/profileCollections.ts"),
				ce = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				le = s("./src/reddit/contexts/Post/index.tsx"),
				me = s("./src/reddit/models/Comment/index.ts"),
				ue = s("./src/reddit/models/Post/index.ts"),
				pe = s("./src/reddit/models/Subreddit/index.ts"),
				be = s("./src/reddit/selectors/chatPost.ts"),
				he = s("./src/reddit/selectors/comments.ts"),
				ge = s("./src/reddit/selectors/commentSelector.ts"),
				xe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				fe = s("./src/reddit/selectors/creatorStats.ts"),
				Ce = s("./src/reddit/selectors/discoveryUnit.ts"),
				ve = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				_e = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ye = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Ee = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				je = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				ke = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				Pe = s("./src/reddit/selectors/meta.ts"),
				Ie = s("./src/reddit/selectors/moderatorPermissions.ts"),
				we = s("./src/reddit/selectors/posts.ts"),
				Se = s("./src/reddit/selectors/tooltip.ts"),
				Ne = s("./src/reddit/selectors/user.ts"),
				Te = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Le = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Fe = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Re = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Ae = s("./src/reddit/components/Comments/index.tsx"),
				Me = s("./src/reddit/components/Comments/States/index.tsx"),
				Be = s("./src/reddit/components/CommentsChat/Loader.ts"),
				De = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ve = s("./src/reddit/components/CommentSort/index.tsx"),
				We = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Ue = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				ze = s("./src/reddit/components/CreatorStats/loader.tsx"),
				He = s("./src/reddit/components/HeaderImage/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ke = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ge = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Ye = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Qe = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Je = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ze = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Xe = s("./src/reddit/components/PostContent/index.tsx"),
				$e = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				tt = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				st = s("./src/reddit/components/SubredditNav/index.tsx"),
				nt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ot = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				rt = s("./src/reddit/helpers/datadome.ts"),
				it = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				at = s("./src/reddit/helpers/history/index.ts"),
				dt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ct = s("./src/reddit/helpers/name/index.ts"),
				lt = s("./src/reddit/helpers/postCollection.ts"),
				mt = s("./src/reddit/helpers/resonatePage/index.ts"),
				ut = s("./src/reddit/helpers/trackers/lightbox.ts"),
				pt = s("./src/reddit/helpers/trackers/screenview.ts"),
				bt = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				ht = s("./src/reddit/layout/page/Listing/index.tsx"),
				gt = s("./src/reddit/models/ContentGate.ts"),
				xt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				ft = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Ct = s("./src/reddit/selectors/experiments/chat.ts"),
				vt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				_t = s.n(vt);

			function Ot() {
				return (Ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const yt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Et = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				jt = 200,
				kt = 80,
				Pt = 32,
				It = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				wt = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-Collection",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Collection").then(s.bind(null, "./src/reddit/components/Collection/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Collection/index.tsx"
					}
				}),
				St = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ContentGate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ContentGate").then(s.bind(null, "./src/reddit/components/ContentGate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentGate/index.tsx"
					}
				}),
				Nt = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(y.a)(t) : n
				},
				Tt = e => {
					const {
						state: t
					} = e.location, s = a()(t, G.b.IsOverlay, !1), n = a()(t, G.b.CloseLocation, null), o = a()(t, G.b.ScrollOnLoad, !1);
					o && Object(at.c)(G.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(ue.w)(i), p = r && Object(me.h)(r), b = Object(ce.a)(c), h = Object(u.e)(ne.b), g = Object(u.e)(e => Object(we.z)(e, {
						listingKey: b
					})), x = Object(u.d)();
					return Object(l.useEffect)(() => {
						h && !g.length && x(Object(N.c)({
							key: b
						}))
					}, []), m.a.createElement(le.a, {
						postId: c
					}, m.a.createElement(Bt, {
						closeLocation: n,
						commentId: p,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: d
					}))
				},
				Lt = Object(X.u)(),
				Ft = () => Object(b.c)({
					apiError: he.c,
					apiPending: he.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(we.V)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(se.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(fe.a)(e, s)
					},
					comment: (e, t) => {
						let {
							commentId: s
						} = t;
						return s ? Object(ge.b)(e, {
							commentId: s
						}) : void 0
					},
					communityBannerDiscoveryUnit: Ce.a,
					isSubredditDiscoveryCrosspostEnabled: je.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(Ne.f)(e, s)
					},
					currentUserShowNSFW: Ne.kb,
					dismissedSubreddits: ve.a,
					fullyLoaded: he.u,
					hasModeratorPostPermissions: Ie.c,
					headComment: he.x,
					isActionBarAnimationEnabled: re.b,
					isAvatarsInCommentsEnabled: Oe.a,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return !!Object(we.w)(e, {
							postId: s
						}) && Object(_e.a)(e)
					},
					isCommentBeforeSignUpEnabled: te.a,
					isCountAnimShadowTestEnabled: re.e,
					isCrawler: (e, t) => !!Object(Pe.c)(e),
					isCrosspostRecommendationsExperimentEnabled: se.b,
					isD2xPdpSideRailRecsEnabled: ne.b,
					isEligibleForCommentTruncation: ke.a,
					isChatPost: be.d,
					isChatPostV2Enabled: Ct.g,
					isCommentsListTruncated: xe.a,
					isLoggedIn: Ne.Q,
					isNightmodeOn: Ne.db,
					isTooltipOpen: (e, t) => !!Object(Se.a)(e),
					origin: Pe.k,
					post: we.G,
					postSEOV2IdCardVariant: ye.h,
					profileCollectionsEnabled: de.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(he.s)(e, {
							commentsPageKey: Nt({
								postId: s,
								commentId: n,
								commentsPageKey: o
							})
						})
					},
					shouldOpenPostInNewTab: Ne.jb,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(ie.x)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: we.V,
					userHovercardIsOpen: (e, t) => Object(Se.b)(Object(qe.b)({
						itemId: t.postId,
						tooltipIdPrefix: U.a,
						tooltipType: et.c.StickyPost
					}))(e),
					userPrefs: Ne.Hb,
					inResonatePilot: Ee.a,
					isQualifiedForUpvotePrompt: ae.c,
					isTrueblockPCBlockeeEnabled: _e.e,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(ie.G)(e, s);
						return !!n && Object(Ie.i)(e, n)
					},
					isNsfwBlurSubreddit: oe.e,
					isNsfwFullPageInterstitial: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(we.V)(e, {
								postId: s
							}),
							o = !(!n || !n.isNSFW),
							r = Object(oe.f)(e) === oe.a.NoPreview;
						return o && r
					}
				}),
				Rt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(L.g)(W.a)),
					dismissTruncation: t => e(Object(Te.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(w.a)()),
					setCommentFocus: t => e(P.g({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(R.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(M.i)()),
					onToggleTooltip: t => e(Object(M.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(T.openLoginModal)()),
					openNsfwModal: () => e(Object(F.a)()),
					openRegisterModal: () => e(Object(T.openRegisterModal)()),
					openReportFlow: (t, s) => e(Object(A.c)(t, s)),
					submitCommentAfterSignUp: () => e(I.m()),
					goToSubredditPage: t => e(Object(p.b)(t)),
					truncateCommentsList: () => e(Object(w.b)()),
					fetchCommentsNativeAd: t => e(Object(k.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Le.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(B.b)(t, s, n))
					}
				}),
				At = Object(u.b)(Ft, Rt);
			class Mt extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.setAdScrollItemRef = e => {
						this.adScrollItemRef = e, setTimeout(this.handleScroll), this.needsUpdatedMeasurements = !0
					}, this.setCommentAdRef = e => {
						this.commentAdRef = e
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didPassAdScrollThreshold: e,
							didScrollPastPost: t,
							scrollContainerEl: s,
							scrollAdThreshold: n,
							scrollPostThreshold: o,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && _.a.write(() => {
							i(Object(qe.b)({
								itemId: a,
								tooltipIdPrefix: U.a,
								tooltipType: et.c.StickyPost
							}))
						}))
					}, C.L), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(ut.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							post: s
						} = this.props;
						t();
						const n = s && Object(ue.v)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === Y.b.F || e.keyCode === Y.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.onAllCommentsRendered = () => {
						this.props.isEligibleForCommentTruncation || this.state.allCommentsRendered || this.setState({
							allCommentsRendered: !0
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						allCommentsRendered: !1,
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1,
						isEmbeddedInLiveChatIframe: !1
					}
				}
				hasCommentAdRef() {
					return this.commentAdRef && this.commentAdRef.clientHeight > 0
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						location: t,
						setCommentFocus: s
					} = this.props;
					e && s(e), Object(ot.a)(t.search) && this.setState({
						isEmbeddedInLiveChatIframe: !0
					})
				}
				async componentDidMount() {
					var e;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, ae.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isNsfwBlurSubreddit: o,
							isOverlay: r,
							openNsfwModal: i,
							post: a,
							shouldScrollToComments: d,
							subredditName: c
						}
					} = this, l = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(l) && this.props.openReportFlow(this.props.postId, r), a && !a.isSponsored && !a.isRemoved && a.belongsTo.type !== Q.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(a.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (r ? (this.scrollContainerEl = document.getElementById(K.e), d && (t || s || this.hasCommentAdRef()) && a && a.numComments ? this.scrollToComments() : _.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(dt.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(ue.w)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), _.a.read(() => {
							const e = [Object(rt.a)()];
							this.props.isOverlay || Object(j.d)(j.c.CommentsPage, n, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Pb.includes(e) && Object(mt.a)(e)
					}
					this.props.isLoggedIn && Object(ee.c)() && this.props.submitCommentAfterSignUp(), (null == a ? void 0 : a.isNSFW) && c && o && i()
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.location.pathname !== this.props.location.pathname) {
						const e = new URLSearchParams(this.props.location.search).get("report") || "";
						["true", "1"].includes(e) && this.props.openReportFlow(this.props.postId, this.props.isOverlay)
					}
					if (e.location.search !== this.props.location.search && this.setState({
							isEmbeddedInLiveChatIframe: Object(ot.a)(this.props.location.search)
						}), e.postId !== this.props.postId) {
						const e = this.props.post && Object(lt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? _.a.read(this.handleScroll) : _.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), _.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && _.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = q.b + (this.props.isOverlay ? q.m : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(K.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? Pt : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && _.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(n, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
					this.props.isCrosspostRecommendationsExperimentEnabled && this.props.closeCrosspostRecommendationsModal()
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, n = t && t.id;
					n && !e.includes(n) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = jt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = jt)
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					_.a.read(() => {
						const e = document.getElementById(K.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - kt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - kt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), _.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => _.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return g.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					_.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						n(Object(pt.c)(t, s, e, x.TimerType.InApp, r, o))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isNsfwBlurSubreddit: s,
						isOverlay: n,
						post: o,
						subredditName: r
					} = this.props, i = !(!o || !o.isNSFW || t);
					if (!i || s) return null;
					const a = Object(it.a)(e, i, r);
					if (!a) return null;
					let d = m.a.createElement(St, a);
					return n && (d = m.a.createElement(bt.a, {
						content: d
					})), d
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						canShowCrosspostRecommendationsModal: s,
						closeCrosspostRecommendationsModal: n,
						closeLocation: o,
						commentId: r,
						commentsPageKey: i,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrawler: c,
						isCrosspostRecommendationsExperimentEnabled: l,
						isD2xPdpSideRailRecsEnabled: u,
						isEligibleForCommentTruncation: p,
						isLoggedIn: b,
						isModWithUserNotesPermissions: h,
						isNightmodeOn: g,
						isNsfwBlurSubreddit: x,
						isNsfwFullPageInterstitial: v,
						isOverlay: _,
						post: O,
						postId: y,
						postSEOV2IdCardVariant: E,
						profileCollectionsEnabled: j,
						sendEvent: k,
						sort: P,
						subredditName: I,
						subredditOrProfile: w
					} = this.props, {
						isEmbeddedInLiveChatIframe: S
					} = this.state;
					if ((null == O ? void 0 : O.isNSFW) && I && v) return m.a.createElement(H.a, {
						contentTitle: Object(ct.c)(I)
					});
					const N = Object(ye.f)(E);
					if (!O) {
						if (t) return m.a.createElement(Me.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.o ? m.a.createElement(St, {
							contentGateType: gt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Me.d, {
							postId: y,
							commentId: r,
							apiError: e,
							sort: P
						}) : m.a.createElement(Me.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const T = this.isCommentPermalink(),
						L = O.belongsTo.type === Q.a.PROFILE,
						F = Object(lt.a)(O) && (!L || j),
						R = !b,
						A = w && w.isQuarantined,
						M = !p && !this.state.allCommentsRendered && !c,
						B = l && s,
						W = O.isNSFW && x;
					return yt.input.channel.postID = y, S ? m.a.createElement("div", {
						className: _t.a.EmbeddedLiveChatContainer
					}, this.renderCommentPanes()) : m.a.createElement(Vt, {
						closeLocation: o,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						isD2xPdpSideRailRecsEnabled: u,
						isLoggedIn: b,
						isOverlay: _,
						isSwapVariant: N,
						post: O,
						shouldBlurHeaderImage: W,
						subredditOrProfile: w,
						shouldFitPageToContent: R,
						isCollectionLayout: F
					}, m.a.createElement(Ze.a, {
						postId: y,
						isNightMode: g,
						isOverlay: _,
						commentId: r
					}), !_ && m.a.createElement($e.a, {
						post: O
					}), A && m.a.createElement(Qe.a, {
						subredditName: w.name
					}), m.a.createElement(Je.a, null), m.a.createElement("div", {
						className: Object(f.a)(_t.a.PageContentWrapper, {
							[_t.a.LargePageContent]: F,
							[_t.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, F && m.a.createElement(wt, {
						isOverlay: _,
						isNightmodeOn: g,
						postId: y
					}), m.a.createElement(Et, {
						condition: F,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: _t.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Xe.c, {
						isCommentPermalink: T,
						isOverlay: _,
						isModWithUserNotesPermissions: h,
						postId: y,
						redditStyle: _,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: k,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && m.a.createElement(ze.a, {
						post: O,
						subreddit: w
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(D.a, {
						key: `event-post-id-${O.id}`,
						isOverlay: _,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), w && !Object(pe.h)(w) && m.a.createElement(z.a, {
						awaitAllCommentsRendered: M,
						contentContainerRef: this.state.layoutRef,
						isOverlay: _,
						post: O,
						subredditOrProfile: w
					}), B && m.a.createElement(V.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: O,
						withOverlay: !0
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isBlockedUserBannerEnabled: l,
						isChatPost: u,
						isChatPostV2Enabled: p,
						isCommentsListTruncated: b,
						isCommentBeforeSignUpEnabled: g,
						isEligibleForCommentTruncation: x,
						isLoggedIn: C,
						isOverlay: v,
						location: _,
						onOtherDiscussions: O,
						openLoginModal: y,
						openRegisterModal: j,
						origin: k,
						post: P,
						postId: w,
						replyComment: S,
						sendEvent: N,
						sort: T,
						subredditAboutInfo: L,
						subredditOrProfile: F,
						isTrueblockPCBlockeeEnabled: R
					} = this.props, {
						isEmbeddedInLiveChatIframe: A
					} = this.state;
					if (!P) return null;
					const M = this.isCommentPermalink(),
						B = [],
						D = P.isLocked && !s,
						V = !(M || P.isArchived || L && L.userIsBanned || P.authorIsBlocked && l || P.unrepliableReason && R);
					if (D) B.push(m.a.createElement(Ge.a, {
						key: "commentThreadBanner",
						subredditOrProfile: F
					}));
					else if (P.isArchived) B.push(m.a.createElement(Ke.a, {
						key: "commentThreadBanner"
					}));
					else if (V && !u && !O)
						if (C || !C && g) {
							const e = Object(E.a)(h.c.replyToPost, w);
							B.push(m.a.createElement(Fe.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: h.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: w,
								submitAction: (t, s) => {
									let {
										validate: n,
										...o
									} = t;
									return n ? I.w({
										postId: w,
										commentsPageKey: r,
										draftKey: e,
										formData: o,
										editorMode: s
									}) : I.q({
										postId: w,
										commentsPageKey: r,
										draftKey: e,
										formData: o,
										editorMode: s
									})
								},
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else B.push(m.a.createElement(Re.a, {
							key: "loggedOutCommentForm",
							location: _,
							openLoginModal: y,
							openRegisterModal: j,
							origin: k
						}));
					if (P.contestMode && B.push(m.a.createElement(Ye.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), u || O || (this.props.isSubredditDiscoveryCrosspostEnabled ? B.push(m.a.createElement(xt.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: v,
							key: "commentNavigation",
							postId: w
						}), m.a.createElement(Ve.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: v,
							key: "commentSort",
							location: _,
							postId: w,
							sort: T,
							suggestedSort: P.suggestedSort
						})) : B.push(m.a.createElement(Ve.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: v,
							key: "commentSort",
							location: _,
							postId: w,
							sort: T,
							suggestedSort: P.suggestedSort
						}), m.a.createElement(xt.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: v,
							key: "commentNavigation",
							postId: w
						}))), B.push(m.a.createElement(tt.a, {
							key: "subredditForkingCTA",
							postId: w
						})), !t || d || u || O)
						if (!e || d || O)
							if (O) B.push(m.a.createElement(It, {
								commentSort: T,
								key: "otherDiscussions",
								postId: w,
								isOverlay: v,
								postPermalink: P.permalink
							}));
							else if (u) {
						if (F && F.id) {
							const e = S ? Object(E.a)(h.c.replyToComment, S.id) : Object(E.a)(h.c.replyToPost, w),
								s = Nt({
									postId: w,
									commentId: n,
									commentsPageKey: r
								});
							B.push(m.a.createElement(Be.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: w,
								renderedInOverlay: v,
								subredditId: F.id,
								isEmbeddedLiveChat: A
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return C ? m.a.createElement(De.a, {
									isV2: p,
									isEmbeddedLiveChat: A,
									key: "chatCommentsForm",
									postId: w,
									replyComment: S,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: N
								}) : m.a.createElement(Re.a, {
									key: "loggedOutCommentForm",
									className: _t.a.ChatLoggedOutForm,
									location: _,
									openLoginModal: y,
									openRegisterModal: j,
									origin: k
								})
							}))
						}
					} else B.push(m.a.createElement("div", {
						className: Object(f.a)(_t.a.CommentsPaneWrapper, {
							[_t.a.mIsInOverlay]: v
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Ue.a, Ot({}, this.props, {
						shouldTruncateComments: x && b,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: P.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Ae.a, {
						commentId: n,
						commentsPageKey: r,
						postId: w,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: v
					})))), e && d ? B.push(m.a.createElement(Me.e, {
						key: "commentsErrorState",
						postId: w,
						commentId: n,
						sort: T,
						apiError: e
					})) : !i && t && B.push(m.a.createElement(Me.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else B.push(m.a.createElement(Me.e, {
						key: "errorState",
						postId: w,
						commentId: n,
						sort: T,
						apiError: e
					}));
					else this.didRenderLoading = !0, B.push(m.a.createElement(Me.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement($.a.Provider, {
						value: this.sendEventWithName
					}, B)
				}
			}
			const Bt = Lt(Object(Z.b)(At(Object(nt.c)(Mt)))),
				Dt = O.a.wrapped(We.a, "DetailsPageSidebar", _t.a),
				Vt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						isCollectionLayout: o,
						isD2xPdpSideRailRecsEnabled: r,
						isOverlay: i,
						isSwapVariant: a,
						post: d,
						shouldBlurHeaderImage: c,
						shouldFitPageToContent: l,
						subredditOrProfile: u
					} = e;
					if (i) return m.a.createElement(bt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: o,
						sidebar: u && m.a.createElement(We.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: d,
							subredditOrProfile: u,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const p = o ? q.h : J.a,
						b = r && u && !Object(pe.h)(u) ? `r/${u.name}` : void 0;
					return m.a.createElement(ht.a, {
						backToSubredditName: b,
						containerRef: n,
						maxWidth: q.h,
						fitPageToContent: l,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: a,
						isCollectionLayout: o,
						navBar: u && m.a.Children.toArray([m.a.createElement(He.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: p,
							prefixedHeaderText: u.displayText,
							shouldBlurHeaderImage: c,
							subredditOrProfile: u,
							url: u.url
						}), !Object(pe.h)(u) && m.a.createElement(st.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: p,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Dt, {
							commentsPageKey: s,
							post: d,
							subredditOrProfile: u,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(ft.a)(Tt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				c = s("./src/lib/makeCommentsPageKey/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts");
			const h = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(b.w)(t)
				},
				g = (e, t, s) => {
					const n = h(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(p.h)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(d.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(c.a)(n, r, a)
				},
				x = Object(l.a)((e, t) => {
					const s = h(t);
					return Object(u.a)(e, s)
				});

			function f(e) {
				return t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = Object(a.e)(e => x(e, t)), o = g(t, s, n), r = Object(m.d)(t.match.path), d = {
						...t,
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					};
					return i.a.createElement(e, d)
				}
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const o = e => e.dismissedTruncationList,
				r = Object(n.a)((e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s
				}, o, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.Q, i.P, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.R
				}), e => e === o.bb.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return !(Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.xe
					}) === n.Od)
				},
				i = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.ye
				}) === n.Od
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(o.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: n.uf
			}) === n.Bf.Enabled
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
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.h, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[o.Rc.Bottom_cell_dismissible]: e,
						[o.Rc.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Rc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.Ib, !0),
				m = c(o.Jb, !0),
				u = c(o.Kb, !0),
				p = c(o.Ib, !1),
				b = c(o.Jb, !1),
				h = c(o.Kb, !1)
		},
		"./src/reddit/selectors/experiments/subredditDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Jf
					}) === n.Od
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.If
					}) === n.Od
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.lg
					}) === n.Od
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.mg
					}) === n.Od
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.kg
					});
					return t === n.ag.TypingIndicators || t === n.ag.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.kg
					});
					return (null == t ? void 0 : t.variant) === n.ag.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return _
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.V)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(n.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const n = Object(i.Z)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.V)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.G)(e, {
								postId: n
							}) || null,
							a = o && Object(r.G)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				h = [3],
				g = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const o = s.slice().sort();
					let i = -1;
					const a = Object(r.z)(e, {
							listingKey: n.listingKey
						}),
						d = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, o);) s += 1;
							s < a.length && (d.push(s), i = s)
						}
					}), d
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				_ = e => {
					const t = Object(a.P)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						n = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.qg)(t)
				},
				d = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				r = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(n.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.V)(e, {
					postId: t.postId
				});
				return Object(o.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.V, i.G, a.P, a.Q, r.h, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!o && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				d = s("./src/reddit/selectors/posts.ts");
			const c = new Date,
				l = c.getUTCFullYear(),
				m = c.getUTCMonth(),
				u = c.getUTCDate(),
				p = Date.UTC(2008, 0, 1),
				b = Date.UTC(l, m - 7, u),
				h = Object(n.a)(e => Object(a.f)(e), e => Object(r.a)(e), (e, t) => {
					let {
						post: s
					} = t;
					return s && Object(d.V)(e, {
						postId: s.id,
						disallowProfile: !0
					})
				}, e => Object(i.a)(e), (e, t, s, n) => e && !!t && (!t.isNSFW || t.isNSFW && n === o.Wc.GreyRedditNoNsfw) && !!s && (!s.isNSFW || s.isNSFW && n === o.Wc.GreyRedditNoNsfw) && !!t.created && t.created > p && t.created < b)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"38f97741ea11"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"200ca2f4ef5e"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"d7dfba8977cc"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"487b662c2260"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"1c237fecf927"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"49fae25b9a33"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.a0f38746fd6c831f138a.js.map