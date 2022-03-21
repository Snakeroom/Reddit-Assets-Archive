// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.98118d00edd11cfc7c0d.js
// Retrieved at 3/21/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
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

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, o, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (o = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
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
				})).reverse(), m(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, m(this), this)
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
			t.a = (e, t, s, n = {}) => {
				let o = `collectionCommentsPage--[collection:'${e}']`;
				return t && (o += `--[post:'${t}']`), s && (o += `--[rootComment:'${s}']`), n && (n.sort && n.hasSortParam && (o += `--[sort:'${n.sort}']`), n.context && (o += `--[context:${n.context}]`), n.depth && (o += `--[depth:${n.depth}]`)), o
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
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
					const e = Object(m.a)(d.bc.Bottom_cell),
						t = Object(m.a)(d.bc.Bottom_cell_dismissible),
						s = Object(m.a)(d.bc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.bc.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.bc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.bc.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const h = 250,
				b = 1e3;

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
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(c.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(d.bc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.d),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									i = r / 3,
									d = 2 * r;
								n >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: b
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/domUtils/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/components/CommentSort/index.tsx"),
				i = s("./src/reddit/constants/elementIds.ts");
			const a = () => {
					o.a.write(() => {
						const e = document.getElementById(i.d);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				d = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(i.d) : window,
							s = document.getElementById(r.a);
						if (t && s) {
							const n = e ? s.offsetTop : s.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
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
				h = s("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: o.a
				}
			});
			const b = Object(r.a)(h.c),
				g = Object(r.a)(h.b),
				x = Object(r.a)(h.a),
				f = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t(),
						o = Object(p.h)(n),
						r = Object(p.g)(n);
					if (o || r) return;
					e(b());
					const u = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: a.jb.GET
					}))(s());
					if (u.ok) {
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
									displayText: Object(m.yf)(e.category_name)
								};
								s.push(o.id), t[o.id] = o
							}), {
								categories: t,
								categoryIds: s
							}
						})(u.body);
						e(g({
							categories: t,
							categoryIds: s
						}))
					} else e(x(u.error))
				}, C = (Object(r.a)(h.g), Object(r.a)(h.f), Object(r.a)(h.e), Object(r.a)(h.d)), v = e => async (t, s) => {
					const n = Object(p.j)(s(), {
						id: e
					});
					t(C({
						categoryId: e,
						rank: n + 1
					})), Object(u.mb)(Object(p.d)(s()))
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
				return y
			})), s.d(t, "b", (function() {
				return j
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
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(o.a)(i.g),
				g = Object(o.a)(i.e),
				x = Object(o.a)(i.h),
				f = Object(o.a)(i.c),
				C = Object(o.a)(i.f),
				v = Object(o.a)(i.j),
				y = Object(o.a)(i.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const o = t(),
						r = Object(u.e)(o),
						i = Object(u.d)(o),
						c = Object(h.N)(o);
					if (r || !i) return;
					e(x());
					let p = !1;
					try {
						const t = c ? n.LoggedInGeo : n.LoggedOutGeo,
							o = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (o.ok && o.body) {
							const {
								data: t
							} = o.body;
							if (_(t)) {
								if (k(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (E(t)) {
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
									e(b(u)), p = !0
								}
							} else p = !1
						}
					} catch (C) {
						p = !1
					}
					p || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !k(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, j = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(h.O)(i);
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
				u = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					const u = n(),
						p = Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = u.listings.postOrder.ids[p],
						b = !!u.listings.postOrder.api.error[p];
					if (h && !b) return;
					s(m({
						key: p
					}));
					const g = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(r(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: g
					})
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return H
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return G
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return q
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return K
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return Z
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
				h = s("./src/reddit/actions/shortcuts/active.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/constants/postCollection.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/endpoints/governance/posts.ts"),
				O = s("./src/config.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				k = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function E(e, t, s) {
				const n = `${O.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(k.a)(`${n}/${e}/${t}/${s}`) : t ? Object(k.a)(`${n}/${e}/${t}`) : Object(k.a)(`${n}/${e}`)
			}
			var j = (e, t, s, o, r) => Object(_.a)(e, {
					data: r,
					endpoint: E(t, s, o),
					method: n.jb.GET
				}),
				w = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/helpers/canonicalUrls.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				R = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/actions/pages/comments.ts"),
				V = s("./src/reddit/actions/pages/constants.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				z = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(W.a)({
				pages: {
					comments: z.a
				}
			});
			const H = Object(o.a)(V.d),
				G = Object(o.a)(V.b),
				q = Object(o.a)(V.a),
				K = e => async (t, s) => {
					const {
						collectionId: o,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(F.t)(r) : "", x = d && Object(L.h)(d), {
						queryParams: y
					} = e, O = s(), {
						instanceId: _
					} = y, k = {
						id: o,
						type: v.b[l]
					}, E = v.b[l] === v.a.PROFILE, {
						hasSortParam: j,
						sortToUse: w
					} = Object(S.a)(O, g), P = ["context", "depth", "limit", f.f].reduce((e, t) => {
						const s = parseInt(y[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: j,
						instanceId: _
					});
					j && (P.sort = w), t(u.r(g)), await Promise.all([E ? t(p.d(c)) : Promise.resolve(), t(Z(o, g, x, P))]);
					const N = ((e, t) => {
						const s = Object(A.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const o = Object(D.K)(e, {
								identifier: t
							}),
							r = Object(i.c)(s.title, o.name).toString();
						return Object(a.a)(r, C.c, n.ib)
					})(s(), k) || Object(i.e)();
					t(m.m({
						title: N
					}));
					const M = s().posts.models[g];
					if (M) {
						const n = Object(D.K)(s(), {
							identifier: M.belongsTo
						});
						if (!M.isSponsored)
							if (M.belongsTo.type === v.a.SUBREDDIT) {
								!!Object(D.R)(O, {
									subredditId: M.belongsTo.id
								}) || await t(b.o(n.name))
							} else await t(p.d(n.name));
						const o = s().posts.instances[g] ? e.queryParams.instanceId : M.postId;
						t(Object(h.b)(o))
					}
					E ? Object(I.d)(s(), t, e) : Object(I.e)(s(), t, e), Object(T.w)(s(), !0)
				}, Y = Object(o.a)(V.c), Q = (e, t, s, n) => async (o, i, a) => {
					const d = Object(r.a)(e, t, s, n),
						c = i();
					t = t || Object(A.p)(c, {
						collectionId: e
					});
					const l = await j(a.apiContext(), e, t, s, n);
					if (o(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(P.a)(l.body, t, c);
						o(G({
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
					} else o(q({
						error: l.error,
						key: d,
						...l.body
					}))
				}, Z = (e, t, s, n, o) => async (i, a, p) => {
					const h = Object(r.a)(e, t, s, n),
						b = a();
					t = t || Object(A.p)(b, {
						collectionId: e
					});
					const {
						subredditName: f
					} = n, C = b.pages.comments.keyToHeadCommentId.hasOwnProperty(h), v = b.pages.comments.api.fullyLoaded[h], O = b.pages.comments.api.error[h];
					if (b.pages.comments.api.pending[h] || C && !O) {
						if (C && !b.sidebarPromotedPosts.firstFetch) {
							const e = Object(R.i)(b) ? M.a.COMMENTS_OVERLAY : M.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(v || o || i(Q(e, t, s, n)))
					}
					const _ = b.user.prefs.commentMode;
					i(H({
						key: h,
						collectionId: e,
						commentMode: _,
						postId: t
					}));
					const k = {
						...n
					}; {
						const e = t && Object(B.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > U.MIN_NUM_COMMENTS_TO_TRUNCATE && (k.truncate = U.NUM_COMMENTS_TRUNCATE)
					}
					let E, I = await Object(N.a)("comments", () => j(p.apiContext(), e, t, s, k));
					if (i(Object(m.n)(I.status)), I.ok && (t = t || I.body.collections[e].primaryPostId)) {
						const e = Object.keys(I.body.posts).filter(e => !!I.body.posts[e].isMeta),
							s = Object(B.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(y.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (E = t.body)
						}
					}
					if (!o) {
						const o = t ? Object(B.G)(a(), {
							postId: t
						}) : null;
						o && I.body.comments && Object.keys(I.body.comments).length < o.numComments ? i(Q(e, t, s, n)) : I.ok && i(Y({
							commentMode: _,
							key: h,
							postId: t
						}));
						const r = Object(R.i)(b) ? M.a.COMMENTS_OVERLAY : M.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (I.ok) {
						if (!t) return;
						const e = Object(P.a)(I.body, t, b);
						i(Object(U.commentsPageLoaded)({
							commentMode: _,
							key: h,
							postId: t,
							meta: b.meta,
							governance: E,
							shouldCollapse: e,
							...I.body
						})), i(g.g(h));
						const s = Object(B.G)(b, {
							postId: t
						});
						s && i(u.z(s, x.a.CommentsView)), !o && s && "subreddit" === s.belongsTo.type && I.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else f && (i(Object(l.subredditPending)({
						key: h
					})), I = await Object(N.a)("subreddit", () => Object(w.a)(p.apiContext(), f, {})), i(Object(m.n)(I.status))), i(Object(l.handleSubredditPageApiError)(I, f)), i(q({
						error: I.error,
						key: h,
						...I.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return ct
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return lt
			})), s.d(t, "commentsPagePending", (function() {
				return mt
			})), s.d(t, "commentsPageLoaded", (function() {
				return ut
			})), s.d(t, "commentsPageFailed", (function() {
				return pt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return ht
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return bt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return gt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return xt
			})), s.d(t, "commentsPageRequested", (function() {
				return ft
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Ct
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return vt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return yt
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
			async function h(e, t) {
				return Object(u.a)(e, {
					...p,
					variables: t
				})
			}
			var b = s("./src/reddit/endpoints/page/subredditPage.ts"),
				g = s("./src/reddit/endpoints/profile/info.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/pageTitle/index.ts"),
				v = s("./src/reddit/actions/economics/helpers/async.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				O = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				_ = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				k = s("./src/reddit/actions/platform.ts"),
				E = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				w = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/reddit/actions/subreddit/questions.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				S = s("./src/reddit/constants/adEvents.ts"),
				N = s("./src/reddit/constants/graphql.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				L = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/helpers/commentList/index.ts"),
				M = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				R = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/models/Subreddit/index.ts"),
				D = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/selectors/category.ts"),
				V = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				W = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				z = s("./src/reddit/selectors/experiments/postSeo.ts"),
				H = s("./node_modules/reselect/es/index.js"),
				G = s("./src/reddit/constants/experiments.ts"),
				q = s("./src/reddit/helpers/chooseVariant/index.ts"),
				K = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Y = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				Q = s("./src/reddit/selectors/platform.ts"),
				Z = s("./node_modules/fbt/lib/FbtPublic.js"),
				J = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				X = s("./src/reddit/selectors/user.ts");
			const $ = new Set([x.g.AntiEvilOps, x.g.AutomodFiltered, x.g.CommunityOps, x.g.ContentTakedown, x.g.CopyrightTakedown, x.g.Moderator, x.g.Reddit]),
				ee = new Set([x.g.Author, x.g.AuthorDeleted]),
				te = Object(H.a)(K.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return $.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = Z.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(J.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== A.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				se = Object(H.a)(K.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return ee.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = Z.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(J.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== A.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				ne = Object(H.a)(X.k, K.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				oe = Object(H.a)(Q.f, K.a, te, se, Y.a, ne, Y.b, (e, t, s, n, o, r, i) => {
					if (!e || !t || o) return !1;
					if (n) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var re = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ie = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/subreddit.ts"),
				de = s("./src/lib/makeActionCreator/index.ts"),
				ce = s("./src/lib/makeCommentsPageKey/index.ts"),
				le = s("./src/reddit/actions/ads/index.ts"),
				me = s("./src/reddit/helpers/canonicalUrls.ts"),
				ue = s("./src/reddit/helpers/correlationIdTracker.ts"),
				pe = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				he = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				be = s("./src/lib/performanceTimings/index.tsx"),
				ge = s("./src/reddit/actions/gold/powerups.ts"),
				xe = s("./src/lib/makeListingKey/index.ts"),
				fe = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ce = Object(de.a)(fe.b),
				ve = Object(de.a)(fe.a);
			var ye = s("./src/reddit/actions/linkedPosts/constants.ts");
			const Oe = Object(de.a)(ye.a),
				_e = Object(de.a)(ye.c),
				ke = Object(de.a)(ye.b);
			var Ee = s("./src/reddit/actions/otherDiscussions/index.ts"),
				je = s("./src/reddit/actions/subreddit/constants.ts"),
				we = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ie = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						t({
							altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
							postId: n
						})
					} catch (r) {
						s(r)
					}
				},
				Pe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Se = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ne = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Te = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!o || !o.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Pe.a)(n),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Se.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(x.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(Ne.a)(t)
							}
						}
						t({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Le = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Fe = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Me = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Re = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: n,
					options: o,
					postId: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const n = i.elements || i.posts,
							a = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(n, a.posts && a.posts.models),
							c = Object(Fe.a)(d),
							l = Me(c),
							m = n.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: h
							} = o,
							b = e && r ? Object(Pe.a)(r, !0) : Object(xe.a)(h, f.W[p], {
								t: u
							});
						s({
							dist: n.dist,
							key: b,
							meta: a.meta,
							postIds: m,
							posts: l
						})
					} catch (a) {
						n(a)
					}
				},
				Ae = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Be = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var De = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!o || !o.nsfwLinked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Be.a)(n),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Se.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(x.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(Ne.a)(t)
							}
						}
						t({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Ue = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ve = Object(de.a)(Ue.b),
				We = Object(de.a)(Ue.a);
			var ze = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const He = Object(de.a)(ze.b),
				Ge = Object(de.a)(ze.a),
				qe = Object(de.a)(je.j),
				Ke = Object(de.a)(je.i),
				Ye = (Object(de.a)(je.r), Object(de.a)(je.q), e => async (t, s, {
					gqlContext: n
				}) => {
					var o, r, i, a;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: p,
						listingBelowExperimentVariant: h,
						postId: b,
						range: g,
						sort: x,
						subredditName: C
					} = e, v = Object(xe.a)(b, null, {
						isOtherDiscussions: !0
					}), y = s(), O = Object(ie.z)(y, {
						listingKey: v
					}), _ = l && (!O || 0 === O.length), k = Object(xe.a)(C, f.W[x], {
						t: g
					}), E = Object(ie.z)(y, {
						listingKey: k
					}), j = m && (c || !E || 0 === E.length), w = c, I = d, P = Object(ie.G)(y, {
						postId: b
					}), S = !!P && !!P.media && (Object(A.K)(P.media) || Object(A.F)(P.media)) && !P.media.altText;
					if (!(_ || j || w || I || S || p)) return;
					_ && t(Object(Ee.d)({
						key: v
					}));
					const N = await ((e, t) => Object(u.a)(e, {
							...we,
							variables: t
						}))(n(), e),
						T = N.body,
						L = Object(Ae.a)(h),
						F = w && !!(null === (i = null === (r = null === (o = T.data) || void 0 === o ? void 0 : o.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						M = w && (L || !F);
					p && (N.ok ? T.data && T.data.post && t(Ce({
						postId: b,
						isEligibleForQASchema: null !== (a = T.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(ve())), _ && Object(Le.a)({
						getState: s,
						onFailure: e => t(Object(Ee.b)(e)),
						onSuccess: e => t(Object(Ee.c)(e)),
						postId: b,
						response: N
					}), (j && !w || M) && (N.ok ? T.data && Re({
						getState: s,
						isLinkedPostsFallback: M,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(qe(e)),
						options: e,
						postId: b,
						subreddit: T.data.subreddit
					}) : t(Ke(N.error))), w && F && !L && N.ok && T.data && Te({
						getState: s,
						onFailure: e => t(ke(e)),
						onSuccess: e => t(_e(e)),
						postId: b,
						post: T.data.post
					}), I && N.ok && De({
						getState: s,
						onFailure: e => t(Ge(e)),
						onSuccess: e => t(He(e)),
						postId: b,
						post: T.data.post
					}), S && N.ok && T.data && Ie({
						getState: s,
						onFailure: e => t(We(e)),
						onSuccess: e => t(Ve(e)),
						postId: b,
						post: T.data.post
					}), w && t(Oe({
						postId: b,
						isEligibleForLinkedPosts: F
					}))
				}),
				Qe = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(x.t)(n),
						{
							sortToUse: r
						} = Object(M.a)(e, o);
					return (!r || r === f.u.CONFIDENCE) && Object(q.c)(e, {
						experimentEligibilitySelector: () => Object(X.N)(e),
						experimentName: G.B
					}) === G.D.Enabled
				};
			var Ze = s("./src/reddit/selectors/chatPost.ts"),
				Je = s("./src/reddit/selectors/seo/index.ts"),
				Xe = s("./src/reddit/actions/pages/constants.ts"),
				$e = s("./src/lib/initializeClient/installReducer.ts"),
				et = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				tt = s("./src/reddit/reducers/pages/comments/index.ts"),
				st = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				nt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ot = s("./src/reddit/selectors/i18n/index.ts"),
				rt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				it = s("./src/reddit/helpers/locales.ts"),
				at = s("./src/reddit/selectors/experiments/countrySites.ts"),
				dt = s("./src/reddit/selectors/meta.ts");
			Object($e.a)({
				pages: {
					comments: tt.a
				}
			}), Object($e.a)({
				features: {
					modUserNotes: et.a
				}
			});
			const ct = 25,
				lt = 100,
				mt = Object(de.a)(Xe.h),
				ut = Object(de.a)(Xe.f),
				pt = Object(de.a)(Xe.e),
				ht = Object(de.a)(Xe.i),
				bt = (e, t, s) => {
					const n = !e,
						o = Object(ie.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(ae.K)(t, {
							identifier: o
						}),
						i = Object(Je.c)(t, {
							identifier: o
						}),
						a = !!Object(Ae.c)(t),
						d = Object(ot.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || n, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || n) && (!Object(B.h)(r) && !Object(Ze.d)(t, {
						postId: s
					}) && !!r || !Object(Q.i)(t) && Object(z.e)(t)), e && (c.postQASchema = Object(z.d)(t)), c
				},
				gt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				xt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ft = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: c,
						partialCommentId: l
					} = e.params, {
						subredditName: m
					} = e.params || "", u = c ? Object(x.t)(c) : "", p = l && Object(R.h)(l), {
						path: h,
						queryParams: b
					} = e, g = Object(_.d)(h), {
						instanceId: v
					} = b, {
						hasSortParam: O,
						sortToUse: P
					} = Object(M.a)(s(), u), S = null === (i = null === (r = Object(Q.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, F = ["context", "depth", "limit", T.f].reduce((e, t) => {
						const s = parseInt(b[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: m,
						hasSortParam: O,
						instanceId: v,
						include_categories: !0
					});
					O && (F.sort = P), F.onOtherDiscussions = g, t(E.r(u)), await t(Ct(u, p, F, P));
					const B = s().posts.models[u],
						D = Object(X.O)(s());
					if (B && "subreddit" === B.belongsTo.type) {
						const e = B.belongsTo.id,
							n = Object(be.i)(() => t(Object(ge.m)(e, {
								fullData: !0,
								includeIdentity: D
							})), {
								name: "subredditPowerupsRequested",
								page: S,
								isLoggedIn: D
							});
						await n;
						const o = s();
						if (!Object(Q.i)(o)) {
							Object(st.a)(o) && t(Object(I.b)(e))
						}
						Object(W.a)(o, e) && await t(Object(d.c)(u))
					}
					if (B) {
						const r = ((e, t) => {
								const s = Object(ie.U)(e, {
										postId: t
									}),
									n = Object(ie.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							i = Object(ae.K)(s(), {
								identifier: B.belongsTo
							});
						if (i && (e => G.Le.Redirect === Object(q.b)(e, {
								experimentEligibilitySelector: oe,
								experimentName: G.Ee
							}))(s())) return void t(Object(n.c)(i.url));
						if ((B.media && B.media.type) === A.o.LIVEVIDEO) {
							const e = `/rpan${B.belongsTo.type===L.a.SUBREDDIT?i.url:"/"}${Object(x.u)(B.id)}`;
							return void t(Object(n.c)(e))
						}
						if (B.belongsTo.type !== L.a.SUBREDDIT || B.isSponsored) {
							if (B.belongsTo.type === L.a.PROFILE) {
								const e = Object(be.i)(() => t(j.d(i.name)), {
									name: "getProfileInfo",
									page: S,
									isLoggedIn: D
								});
								await e
							}
						} else {
							if (!!!Object(ae.R)(s(), {
									subredditId: B.belongsTo.id
								})) {
								const e = Object(be.i)(() => t(w.o(i.name)), {
									name: "getSubredditRules",
									page: S,
									isLoggedIn: D
								});
								await e
							}
						}
						const d = bt(!1, s(), u),
							c = g;
						if (gt(c, d)) {
							Object(ue.e)(ue.a.LinkedPosts);
							const e = Object(ue.c)(ue.a.LinkedPosts);
							Object(ue.e)(ue.a.NsfwLinkedPosts);
							const n = Object(ue.c)(ue.a.NsfwLinkedPosts),
								o = {
									adContext: {
										layout: N.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u
									},
									range: f.hc.WEEK.toUpperCase(),
									sort: f.P.TOP,
									subredditName: i.name
								},
								r = {
									postId: u
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ae.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(nt.a)(s())
								},
								m = xt(d);
							Object(be.i)(() => t(Ye({
								...r,
								...o,
								...a,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: D,
								page: S
							});
							0
						}
						t(Object(y.p)()), t(k.m({
							title: r
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : B.postId;
						t(Object(a.b)(l)); {
							const e = Object(U.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(o.b(e))))
						}
					} else t(k.m({
						title: C.e()
					}));
					const {
						routePrefix: V
					} = e.params;
					L.b[V] === L.a.PROFILE ? Object(me.d)(s(), t, e) : Object(me.b)(s(), t, e)
				}, Ct = (e, t, s, n) => async (o, a, d) => {
					var c, u;
					const p = a(),
						x = Object(ce.a)(e, t, s),
						{
							subredditName: C
						} = s,
						y = p.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
						_ = p.pages.comments.api.fullyLoaded[x],
						j = p.pages.comments.api.error[x],
						w = p.pages.comments.api.pending[x],
						I = !Object(X.N)(p),
						N = Object(X.k)(p),
						T = n === f.u.CHAT,
						L = !!p.platform.lastPage;
					if ((w || y && !j) && !(T && L)) {
						if (y && !p.sidebarPromotedPosts.firstFetch) {
							const e = Object(Q.i)(p) ? he.a.COMMENTS_OVERLAY : he.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(le.b)(e))
							})
						}
						return void(_ || o(yt(e, t, s)))
					}
					o(r.g());
					const M = p.user.prefs.commentMode;
					o(mt({
						key: x,
						postId: e,
						commentMode: M
					}));
					const R = {
						...s,
						...T ? {
							sort: f.u.LIVE
						} : I ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(ie.G)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > lt && (R.truncate = ct)
					}
					const A = null === (u = null === (c = Object(Q.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						B = Object(be.i)(() => Object(m.a)(d.apiContext(), e, t, R, Object(V.a)(a()), Qe(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !I,
							page: A
						}),
						U = !I && N && Object(be.i)(() => Object(g.d)(d.gqlContext(), Object(D.e)(N)), {
							name: "fetchProfileKarma",
							isLoggedIn: !I,
							page: A
						}) || null,
						W = Object(be.i)(() => h(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !I,
							page: A
						}),
						[z, H, G] = await Promise.all([B, U, W]);
					let q;
					if (o(Object(k.n)(z.status)), z.ok) {
						const t = Object.keys(z.body.posts).filter(e => !!z.body.posts[e].isMeta),
							s = z.body.posts[e];
						if (t.length) {
							const e = Object(be.i)(() => Object(l.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: A,
									isLoggedIn: !I
								}),
								n = await e;
							n.ok && (q = n.body)
						}
						if (H && H.ok) {
							const {
								data: e
							} = H.body, t = {
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
							z.body && z.body.account && Object.assign(z.body.account, t)
						}
						if (G && G.ok) {
							const {
								data: t
							} = G.body;
							if (!t.postInfoById || "SubredditPost" !== t.postInfoById.__typename && "ProfilePost" !== t.postInfoById.__typename || (z.body.posts[e] = {
									...z.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(dt.d)(p) && e && Object(at.e)(p) && await Object(it.a)(e, o)
							}
						}
						const n = Object(F.a)(z.body, e, p);
						o(ut({
							key: x,
							postId: e,
							meta: p.meta,
							governance: q,
							shouldCollapse: n,
							...z.body
						}))
					} {
						const n = Object(ie.G)(a(), {
							postId: e
						});
						n && z.body.comments && Object.keys(z.body.comments).length < n.numComments ? o(yt(e, t, s)) : z.ok && o(vt({
							key: x
						}));
						const r = Object(Q.i)(p) ? he.a.COMMENTS_OVERLAY : he.a.COMMENTS;
						o(Object(le.b)(r))
					}
					if (z.ok) {
						o(P.g(x));
						const t = Object(ie.G)(a(), {
								postId: e
							}),
							s = Object.keys(z.body.comments);
						if (o(E.z(t, S.a.CommentsView)), Object(rt.h)(a(), {
								subredditId: t.belongsTo.id
							}) && o(Object(O.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && z.body.comments) {
							const e = Object(be.i)(() => o(Object(v.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: A,
								isLoggedIn: !I
							});
							await e
						}
					} else {
						let e;
						C && (o(Object(i.subredditPending)({
							key: x
						})), e = await Object(pe.a)("subreddit", () => Object(b.a)(d.apiContext(), C, {})), o(Object(k.n)(e.status)), o(Object(i.handleSubredditPageApiError)(e, C))), o(pt({
							error: z.error,
							key: x,
							...e ? e.body : z.body
						}))
					}
				}, vt = Object(de.a)(Xe.g), yt = (e, t, s) => async (n, o, r) => {
					var i, a;
					const d = Object(ce.a)(e, t, s),
						l = o(),
						u = Object(X.O)(l),
						p = Object(X.k)(l),
						b = null === (a = null === (i = Object(Q.b)(o())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						x = Object(m.a)(r.apiContext(), e, t, s, Object(V.a)(l), Qe(l)),
						f = u && p && Object(g.d)(r.gqlContext(), Object(D.e)(p)) || null,
						C = Object(be.i)(() => h(r.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: u,
							page: b
						}),
						[y, O, _] = await Promise.all([x, f, C]);
					if (y.ok) {
						if (O && O.ok) {
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
							y.body && y.body.account && Object.assign(y.body.account, t)
						}
						if (_ && _.ok) {
							const {
								data: t
							} = _.body;
							y.body.posts[e] = {
								...y.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(F.a)(y.body, e, l);
						n(ut({
							key: d,
							postId: e,
							meta: l.meta,
							shouldCollapse: t,
							...y.body
						})), n(vt({
							key: d
						}));
						const s = o().posts.models[e],
							r = s && Object(ie.U)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(re.a)(l, {
							subredditId: r.id
						}) && n(Object(c.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && y.body.comments && await n(Object(v.a)({
							commentIds: Object.keys(y.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(pt({
						error: y.error,
						key: d,
						...y.body
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
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, u)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
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

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				x = Object(i.b)(g),
				f = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(p.a.spacer, {
						[p.a.isCommentBoxDesign]: e,
						[p.a.isTopLevelComment]: t
					})
				}, s),
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
				y = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				O = x(y),
				_ = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				k = e => r.a.createElement(_, h({}, e, {
					fallback: r.a.createElement(O, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = k
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
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: n,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => o.a.createElement("div", {
				className: Object(r.a)(e, u.a.Wrapper, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, o.a.createElement("span", {
				className: Object(r.a)(u.a.Copy, {
					[u.a.LiveStreamingCopy]: t
				})
			}, p._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), o.a.createElement("div", {
				className: u.a.CTAButtons
			}, o.a.createElement(c.t, {
				className: u.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(a.a)(s, m, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Log In", null, {
				hk: "ZR3pC"
			})), o.a.createElement(c.t, {
				className: Object(r.a)(u.a.SignupLink, {
					[u.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
				href: Object(a.a)(s, m, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Sign Up", null, {
				hk: "48wH4o"
			})))))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				f = s("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (s, o, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [x.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(h.f({
						id: d,
						kind: f.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(h.f({
					id: a,
					kind: f.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: C(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				_ = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(P.z)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(P.sb)(r)
				}),
				N = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				T = e => ({
					subreddit: Object(P.ib)(e),
					userSubreddit: Object(P.sb)(e)
				}),
				L = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...T
				});
			var F = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				M = s("./src/reddit/icons/svgs/Info/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				z = s.n(W),
				H = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(_.a)(E.a),
				q = e => e === H.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === H.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class K extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== H.a.None) {
							e(t === H.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", H.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", H.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", H.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: z.a.HighlightWrapper
					}, r.a.createElement(j.b, {
						className: Object(d.a)(z.a.HighlightPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${q(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(F.b, {
						className: z.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(G, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(j.b, {
						displayText: q(H.a.First),
						isSelected: o === H.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(j.b, {
						displayText: q(H.a.Last),
						isSelected: o === H.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(j.b, {
						displayText: q(H.a.None),
						isSelected: o === H.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = K;
			const Q = "CommentSort--SortPicker",
				Z = "CommentSort--HighlightPicker",
				J = "CommentSort--Tooltip",
				X = Object(_.a)(E.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(A.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(Q),
					highlightIsOpen: Object(U.b)(Z),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.l)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: D.G,
					postPermalink: D.F,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(V.u)(e),
							n = !!Object(B.l)(e, {
								postId: t
							}),
							o = Object(D.G)(e, {
								postId: t
							});
						return (n || s) && !!o && !!o.previousVisits && o.previousVisits.length > 0
					},
					selectedHighlightSort: A.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(m.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: Q
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: Z
						})), t()
					},
					onSetSuggestedSort: s => e(C(t, s)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: s => e(Object(p.X)(s, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: J
					})),
					toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
				}));
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(L(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: o,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: u,
						isOverlay: p,
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: x,
						showCommentHighlighter: f,
						sort: C,
						suggestedSort: _,
						showTooltip: k,
						toggleContestModeModal: E
					} = this.props, P = b.contestMode, S = !h.search.includes(c.u.CONFIDENCE), T = C === c.u.CONFIDENCE && S, L = u && !T, R = c.w[C], A = R ? R() : "", B = _ && C === _ && !T ? this.addSuggestedLabel(A) : A, D = P ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = P ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), V = P ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = P && !u;
					return r.a.createElement("div", {
						className: Object(d.a)(t, z.a.container, {
							[z.a.hideCommentSort]: !f && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: z.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.DropdownContainer
					}, r.a.createElement(j.b, {
						className: Object(d.a)(z.a.SortPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(F.b, {
						className: z.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(X, {
						isOpen: i,
						tooltipId: Q
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							n = Object(I.b)(t),
							o = c.w[e],
							i = o ? o() : "";
						return r.a.createElement(O.a, {
							className: z.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(j.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), L && !W && (_ ? r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: C !== _ ? this.setSortOnClick : this.clearSortOnClick
					}, C !== _ ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: z.a.SetSort
					}, r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: J,
						onMouseEnter: k,
						onMouseLeave: l
					}, r.a.createElement(y.c, {
						className: z.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: J
					}), r.a.createElement(M.a, {
						className: z.a.Info
					})))), u && r.a.createElement("button", {
						className: z.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(w.a, {
						className: z.a.ToggleSwitch,
						on: P
					}))), f && r.a.createElement("div", {
						className: z.a.containerRow
					}, r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: Z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: x,
						trackHighlight: N
					})), o && r.a.createElement(v.a, {
						actionText: U,
						headerText: D,
						modalText: V,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(k.c)(te))
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
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
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
				h = s("./src/reddit/actions/comment/moderation.ts"),
				b = s("./src/reddit/components/CommentCreation/Loader.tsx"),
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
			var y, O, _ = s("./node_modules/lodash/defer.js"),
				k = s.n(_),
				E = s("./src/lib/lessComponent.tsx"),
				j = s("./src/reddit/actions/tooltip.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				T = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/trackers/lightbox.ts"),
				F = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				D = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				H = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(H);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(y || (y = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(O || (O = {}));
			const q = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(c.a)(s, n)
				},
				K = e => Object(c.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var Y = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Z = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				J = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				X = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/OverflowMenu/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/new.tsx"),
				ne = s("./src/reddit/components/ShareMenu/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				le = s.n(ce),
				me = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				ue = s("./src/reddit/selectors/gold/awardIcon.ts");
			var pe = e => {
					const t = Object(i.e)(D.b),
						s = Object(i.e)(e => t && Object(ue.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? r.a.createElement("img", {
						className: Object(c.a)(le.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : r.a.createElement(me.a, e)
				},
				he = s("./src/reddit/icons/fonts/index.tsx"),
				be = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ge = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				xe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ve = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ye = s.n(ve);
			const Oe = E.a.wrapped(be.a, "CommentIcon", ye.a),
				_e = E.a.wrapped(Ce.a, "Report", ye.a),
				ke = E.a.wrapped(xe.a, "IgnoreReport", ye.a),
				Ee = E.a.wrapped(X.a, "ModActionsMenu", ye.a),
				je = E.a.div("OverflowMenuSpacer", ye.a),
				we = E.a.wrapped(ee.a, "DropdownRow", ye.a),
				Ie = E.a.wrapped(de.a, "Flatlist", ye.a),
				Pe = E.a.button("Button", ye.a),
				Se = E.a.wrapped(Y.a, "ModToolsFlatlist", ye.a),
				Ne = E.a.wrapped(re.a, "ViewReportsDropdown", ye.a),
				Te = e => `Comment-${e}--Modal--DeleteComment`,
				Le = e => `Distinguish--Dropdown--${e}`,
				Fe = e => `${e}-overflow-menu`,
				Me = e => `View--Reports--${e}`,
				Re = Object(a.c)({
					claimedFreeAward: D.b,
					currentUser: W.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(M.a)(e) === Te(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(w.b)(Le(t.id))(e),
					isFollowed: (e, {
						comment: t
					}) => Object(R.y)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(R.A)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(R.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(w.b)(Me(t.id))(e),
					isLoggedIn: W.O,
					postIsArchived: (e, {
						comment: t
					}) => Object(U.A)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(U.w)(e, {
						postId: t.postId
					}) && Object(A.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(U.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(U.B)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(R.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(R.I)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(V.u)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(U.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, {
						comment: t
					}) => {
						var s;
						return null === (s = Object(U.G)(e, {
							postId: t.postId
						})) || void 0 === s ? void 0 : s.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: A.b,
					isParentCommentsAuthorBlocked: (e, {
						comment: t
					}) => Object(R.B)(e, {
						commentId: t.id
					})
				});
			class Ae extends r.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(L.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ae.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(N.e)(N.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ae.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ae.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? F.a.UNFOLLOWED : F.a.FOLLOWED), t(n ? Object(ae.f)("follow", s.id) : Object(ae.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
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
						commentPermalink: i,
						deleteComment: a,
						depth: d,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: h,
						onDistinguishComment: b,
						onIgnoreReports: g,
						onToggleReportsDropdown: x,
						moderatorPermissions: f,
						modModeEnabled: C,
						postIsArchived: v,
						postAuthorIsBlocked: _,
						isBlockedUserBannerEnabled: E,
						postIsLocked: j,
						renderedInOverlay: w,
						sendEvent: I,
						subreddit: P,
						subredditAboutInfo: S,
						toggleDeleteCommentModal: N,
						toggleSendReplies: L,
						trackCommentClick: M,
						isPostUnrepliable: R,
						isTrueblockPCBlockeeEnabled: A,
						isParentCommentsAuthorBlocked: B
					} = this.props, D = Object(T.a)(f), U = !!s && s.displayText === e.author, V = !!s && s.isEmployee, W = A && e.unrepliableReason, H = A && R, G = !(B && A) && !(_ && A) && !(Object(F.g)(e) && A) && !(R && A) && !W && !H && !(S && S.userIsBanned) && (j || v || _ && E || D && p || e.isLocked ? D && p : p || m), Y = Object($.a)(e), X = D && U && !e.bannedBy, te = U && V && !e.bannedBy, se = X || te, oe = !(Object(F.g)(e) && A) && s && e.isGildable && !H && !(W && "[deleted]" === e.author), re = !v && !W, de = [];
					G && de.push(r.a.createElement(Pe, {
						disabled: h,
						key: "reply",
						onClick: () => {
							l(), k()(() => M("reply", e.id)())
						}
					}, r.a.createElement(Oe, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), oe && de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(pe, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), de.push(r.a.createElement(ne.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == P ? void 0 : P.type
					}, r.a.createElement(Pe, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(Ce.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(he.a, {
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
					}), U && de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(he.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), re && de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(he.a, {
							name: "notification",
							isFilled: u
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: u ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const ce = de.map(e => r.a.isValidElement(e) ? e : r.a.createElement(Pe, {
							className: q(e.breakpointGroup, y.HideIfVWSmaller),
							disabled: h,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						le = de.map(e => r.a.isValidElement(e) ? null : r.a.createElement(we, {
							className: q(e.breakpointGroup, y.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ye.a.dropdownRowText
						}, e.icon));
					return r.a.createElement(o.Fragment, null, r.a.createElement(Ie, {
						className: Object(c.a)(K({
							depth: d,
							isInOverlay: w,
							isModModeEnabled: D && C,
							isFollowCommentEnabled: re
						}), t)
					}, ce, r.a.createElement(je, {
						className: U ? void 0 : q(O.LoggedInUser, y.HideIfVWLarger)
					}, r.a.createElement(ee.b, {
						className: ye.a.overflowMenu,
						disabled: h,
						dropdownId: Fe(e.id),
						onClick: () => I(Object(ae.a)("comment_overflow_menu", e.id))
					}, le, U && r.a.createElement(r.a.Fragment, null, r.a.createElement(we, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ye.a.dropdownRowText
					}, r.a.createElement(he.a, {
						name: "delete"
					})), r.a.createElement(ie.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: L,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && r.a.createElement(Z.a, {
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
						onConfirm: a,
						toggleModal: N,
						trackClick: () => {},
						withOverlay: !0
					}), D && r.a.createElement(r.a.Fragment, null, C && r.a.createElement(Se, {
						className: q(O.Moderator, y.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), r.a.createElement(Ee, {
						className: C ? q(O.Moderator, y.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => I(Object(ae.a)("comment_mod_action_menu", e.id))
					}, r.a.createElement(fe.a, null), r.a.createElement(z.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !C && r.a.createElement(Q.a, {
						text: `${Y}`,
						onClick: () => {
							x(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Me(e.id)
					}, r.a.createElement(Ne, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Me(e.id)
					}), e.ignoreReports ? r.a.createElement(ke, null) : r.a.createElement(_e, null)), se && r.a.createElement(Q.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, r.a.createElement(ge.a, null), r.a.createElement(J.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: V,
						isUserMod: D,
						onDistinguishComment: b,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Le(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Be = Object(i.b)(Re, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(p.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(P.i)(Te(t.id))), e(Object(j.h)({
							tooltipId: Fe(t.id)
						}))
					},
					handleEdit: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(p.d)({
							commentId: t.id,
							draftKey: Object(l.a)(d.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(p.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(p.r)(t.id, s)),
					onDistinguishComment: (s, n) => e(Object(h.b)(t.id, s, n)),
					onFollowedCommentExpire: () => e(Object(u.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, n) => e(Object(I.d)({
						awardId: n,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(h.g)(t.id)),
					onReportClick: () => e(Object(S.c)(t.id)),
					onToggleSave: () => e(Object(u.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(j.h)({
						tooltipId: Le(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(j.h)({
						tooltipId: Me(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(P.i)(Te(t.id))),
					toggleSendReplies: () => e(Object(p.k)(t.id))
				}))(Object(oe.c)(Ae)),
				De = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ue = s.n(De);
			var Ve = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: Ue.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				We = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ze = s.n(We);
			var He = r.a.memo(e => r.a.createElement("div", {
					className: ze.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ge = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				qe = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ke = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ye = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ze = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Je = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Xe = s("./src/reddit/components/ModModeReports/index.tsx"),
				$e = s("./src/reddit/components/PostTopMeta/index.tsx"),
				et = s("./src/reddit/components/RichTextJson/index.tsx"),
				tt = s("./src/reddit/components/UserIcon/index.tsx"),
				st = s("./src/reddit/components/UserIcon/constants.ts"),
				nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ot = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				rt = s("./src/reddit/constants/componentTestIds.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				at = s("./src/reddit/contexts/Visibility.tsx"),
				dt = s("./src/reddit/controls/ErrorText/index.tsx"),
				ct = s("./src/reddit/controls/InternalLink/index.tsx"),
				lt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				mt = s("./src/reddit/helpers/flair.ts"),
				ut = s("./src/reddit/models/Subreddit/index.ts"),
				pt = s("./src/reddit/models/User/index.ts"),
				ht = s("./src/reddit/models/Vote/index.ts"),
				bt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				gt = s("./src/reddit/selectors/commentSelector.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ft = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ct = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				vt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				yt = s("./src/reddit/selectors/poll/index.ts"),
				Ot = s("./src/reddit/selectors/userPrefs.ts"),
				_t = s("./src/reddit/selectors/moderatingComments.ts"),
				kt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Et = s.n(kt),
				jt = s("./src/config.ts"),
				wt = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				It = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const St = 300,
				Nt = E.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return r.a.createElement("button", v({}, s, {
						className: Object(c.a)(t, C.a.expandButton)
					}), r.a.createElement(x, {
						className: C.a.expandIcon
					}))
				}), "ExpandButton", Et.a),
				Tt = E.a.wrapped(Be, "FlatList", Et.a),
				Lt = E.a.wrapped(dt.b, "ErrorText", Et.a),
				Ft = E.a.wrapped(Ye.a, "HorizontalVotes", Et.a),
				Mt = E.a.div("ActionBar", Et.a),
				Rt = E.a.wrapped(qe.a, "TopMeta", Et.a),
				At = E.a.div("CommentContentWrapper", Et.a),
				Bt = E.a.wrapped(Qe.b, "AuthorHovercard", Et.a),
				Dt = Object(it.u)(),
				Ut = (e, t) => {
					var s;
					return null !== (s = t.comment) && void 0 !== s ? s : Object(gt.b)(e, t)
				},
				Vt = Object(i.b)(() => Object(a.c)({
					comment: Ut,
					currentProfileModPermissions: it.h,
					depth: (e, t) => Object(R.j)(e, t),
					collapsed: _t.b,
					collapsedBecauseCrowdControl: _t.a,
					currentUser: W.k,
					flair: R.e,
					focused: (e, t) => !t.noFocus && Object(R.t)(e, t),
					highlightAnimationDisabled: Ot.c,
					isEditing: R.z,
					isLoggedIn: W.O,
					isPendingDeletion: R.C,
					isPresenceConsumptionExpEnabled: ft.c,
					moderatorPermissions: (e, t) => {
						const s = Ut(e, t);
						return s ? Object(vt.m)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: yt.f,
					modModeEnabled: it.T,
					errorMsgs: R.G,
					replyFormOpen: R.J,
					subreddit: it.r,
					subredditType: R.L,
					showNftSpecialtyTreatment: wt.b,
					hasSupporterRing: Ct.a,
					isOnlineConsumptionLoadTest: ft.a,
					isOnlineUserPref: W.T,
					userIsBanned: (e, t) => {
						const s = Ut(e, t);
						return !!s && Object(V.db)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: xt.b
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: n,
					trackCommentClick: o
				}) => ({
					onCollapseClick: () => e(Object(u.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: n
					})),
					onIgnoreReports: () => e(Object(h.g)(t)),
					onVoteClick: s => {
						const [n, r] = s === ht.a.upvoted ? [Object(u.q)(t), "upvote_comment"] : [Object(u.j)(t), "downvote_comment"];
						o(r, t)(), e(n)
					}
				})),
				Wt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				zt = e => r.a.createElement("div", e, e.children),
				Ht = e => r.a.createElement(r.a.Fragment, null, e.children),
				Gt = Dt(Vt(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: h,
						currentUser: g,
						depth: x,
						errorMsgs: f,
						flair: C,
						flatlist: v,
						focused: y,
						hasAwardGradient: O,
						hasSupporterRing: _,
						highlightAnimationDisabled: k,
						highlightTreatment: E,
						index: j,
						isActive: w,
						isAvatarsInCommentsEnabled: I,
						isBlockingInterstitialEnabled: P,
						isEditing: S,
						isFirstInList: N,
						isHighlighted: L,
						isLoggedIn: M,
						isOnlineConsumptionLoadTest: R,
						isOnlineUserPref: A,
						isPendingDeletion: B,
						isPresenceConsumptionExpEnabled: D,
						moderatorPermissions: U,
						modModeEnabled: V,
						noSpacing: W = !1,
						onCommentAuthorClick: z,
						onCommentTimestampClick: H,
						onCollapseClick: G,
						onIgnoreReports: q,
						onLineMouseOver: K,
						onPresenceIndicatorInViewport: Y,
						onVoteClick: Q,
						postId: Z,
						prediction: J,
						renderedInOverlay: X,
						replyFormOpen: ee,
						restrictHeight: te,
						showBlockingInterstitial: se,
						showNftSpecialtyTreatment: ne,
						subreddit: oe,
						subredditType: re,
						trackCommentClick: ie,
						userIconSmall: ae,
						userIsBanned: de
					} = e, ce = m.isDeleted, le = !S && !ce && !!f && f.length > 0, me = Object(l.a)(d.c.edit, m.id), ue = Object(l.a)(d.c.replyToComment, m.id), pe = Object(T.a)(U), he = Object(Je.d)(m), be = Object($.c)(m), ge = m.authorIsContractor && re === ut.f.EmployeesOnly, xe = m.isLocked, fe = pe && V, Ce = !S && !ce && (M || I), ve = !!g && Object(pt.e)(g) === m.author, [ye, Oe] = Object(o.useState)(null), [_e, ke] = Object(o.useState)(null), Ee = Object(o.useRef)(null), je = Object(F.f)(m) || Object(F.g)(m), we = je ? zt : ct.a, Ie = Object(F.f)(m) ? Ht : Bt;
					Object(o.useEffect)(() => {
						if (!S && !ce && (O && Oe(r.a.createElement(He, null)), null !== E)) {
							if (E.glowHexColor) {
								const e = E.glowHexColor;
								Oe(r.a.createElement(Ve, {
									hexColor: e
								}))
							}
							if (E.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = E.effectHighlight;
								ke(r.a.createElement(Ge.b, {
									prefersReducedAnimation: k,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [S, ce, O, k, E]);
					const Pe = Object(at.b)();
					P && Pe && j >= xt.a - 1 && se();
					const Se = !ce && !Object(F.f)(m) && (!de || de && ve) && !Object(F.g)(m) && M,
						Ne = Object(o.useCallback)(() => {
							Se && D && !ve && Y && Y(m.id)
						}, [m.id, Y, Se, D, ve]),
						Te = Object(ot.a)(m),
						Le = !!g && Object(pt.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Fe = !(!Object(It.d)(Le) && !ne) && Object(It.c)(Le);
					return r.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, Et.a.CommentWrapper, {
							[Et.a.highlightComment]: L,
							[Et.a.deleted]: ce,
							[Et.a.focused]: y,
							[Et.a.redesign]: I,
							[Et.a.topLevel]: !x,
							[Et.a.noSpacing]: W
						})
					}, ye, _e, !S && !ce && N && r.a.createElement("div", {
						className: Et.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${jt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(Nt, {
						className: Object(c.a)(m.id, {
							[Et.a.hidden]: !i,
							[Et.a.visible]: i
						}),
						onClick: () => {
							s(), G(), ie("collapse", m.id)()
						},
						onMouseOver: () => K(m.id),
						onMouseOut: s
					}), r.a.createElement(Ie, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: Et.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(F.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: X ? $e.c.Lightbox : void 0
					}, r.a.createElement(we, {
						className: Object(c.a)(Et.a.UserIconContainer, ae && Et.a.UserIconContainerSmall),
						"data-testid": je ? void 0 : "comment_author_icon",
						onClick: je ? void 0 : z,
						to: `/user/${m.author}/`
					}, Pe ? r.a.createElement(r.a.Fragment, null, _ && !Fe && r.a.createElement("div", {
						className: Et.a.supporterRing
					}), r.a.createElement(tt.a, {
						isNft: Fe,
						className: Object(c.a)(Et.a.UserIcon, {
							[Et.a.UserIconNft]: Fe && !Object(It.f)(Le)
						}),
						iconUrl: Le,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: st.a,
						userName: m.author,
						isHighlighted: L,
						shouldShowPresenceIndicator: Se && D,
						onPresenceIndicatorInViewport: Ne,
						isCommentAuthorBlocked: Object(F.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: ve,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Se && R,
						authorId: m.authorId
					})) : r.a.createElement("div", {
						className: Et.a.UserIcon
					}))), r.a.createElement(At, {
						className: Object(c.a)({
							[Et.a.isActive]: w,
							[Et.a.isCollapsed]: i,
							[Et.a.isLocked]: xe && fe,
							[Et.a.isPendingDeletion]: B,
							[Et.a.isRemoved]: !!m.bannedBy && fe
						})
					}, r.a.createElement(lt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(Rt, {
						userHasNft: Fe,
						childrenInfo: t,
						className: Object(c.a)({
							[Et.a.collapsed]: i,
							[Et.a.noFlair]: Object(mt.o)(C || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: C,
						isPostComment: !0,
						onCommentAuthorClick: z,
						onCommentTimestampClick: H,
						renderedInOverlay: X,
						renderContractorBadge: ge
					}), !i && r.a.createElement(o.Fragment, null, S && r.a.createElement(b.a, {
						className: Object(c.a)(Et.a.EditCommentForm, Et.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: d.c.edit,
						draftKey: me,
						postId: Z,
						rtJson: Object(ot.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.i)({
							id: m.id,
							commentsPageKey: u,
							depth: x,
							draftKey: me,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !S && !ce && r.a.createElement("div", {
						"data-testid": rt.d,
						ref: Ee,
						className: Object(c.a)(Et.a.CommentBody, {
							[Et.a.restrictHeight]: !(!te || !Ee.current) && Ee.current.clientHeight > St
						})
					}, J ? r.a.createElement(Ke.a, {
						comment: m,
						prediction: J
					}) : r.a.createElement(et.a, {
						content: Te,
						mediaMetadata: m.media && m.media.mediaMetadata,
						rtJsonElementProps: Wt(e)
					}), r.a.createElement(bt.b, {
						content: Te
					})), V && pe && he && r.a.createElement(Ze.a, {
						thing: m
					}), V && pe && be && r.a.createElement(Xe.a, {
						onIgnoreReports: q,
						reportable: m
					}), null != v ? v : Ce && r.a.createElement(Mt, null, I && r.a.createElement(Ft, {
						downvoteButtonClassName: Et.a.voteButton,
						downvoteClassName: Et.a.upDownVote,
						model: m,
						onVoteClick: Q,
						scoreClassName: Et.a.score,
						upvoteButtonClassName: Et.a.voteButton,
						upvoteClassName: Et.a.upDownVote
					}), r.a.createElement(Tt, {
						comment: m,
						commentsPageKey: u,
						depth: x,
						isAvatarsInCommentsEnabled: I,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: V,
						moderatorPermissions: h || U,
						renderedInOverlay: X,
						isCommentFocused: y,
						subreddit: oe,
						trackCommentClick: ie
					})), le && f.map(e => r.a.createElement(Lt, {
						key: e
					}, e)), ee && r.a.createElement(b.a, {
						className: Object(c.a)(Et.a.EditCommentForm, Et.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: d.c.replyToComment,
						draftKey: ue,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: Z,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(p.s)({
							commentsPageKey: u,
							draftKey: ue,
							parentCommentDepth: x,
							parentCommentId: m.id,
							formData: t,
							editorMode: s
						}) : Object(p.l)({
							commentsPageKey: u,
							draftKey: ue,
							parentCommentDepth: x,
							parentCommentId: m.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => r.a.createElement(nt.a.Consumer, null, t => r.a.createElement(Gt, Pt({}, e, {
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
				return I
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "a", (function() {
				return z
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
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				y = s("./src/reddit/components/Comments/States/index.m.less"),
				O = s.n(y);
			const _ = l.a.wrapped(C.a, "CommentsIcon", O.a),
				k = l.a.wrapped(v.a, "SnooFacepalm", O.a),
				E = l.a.p("EmptyTitle", O.a),
				j = l.a.p("ErrorTitle", O.a),
				w = l.a.p("EmptyText", O.a),
				I = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(O.a.StateContainer, e)
				}, a.a.createElement(_, null), a.a.createElement(E, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(w, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				P = () => a.a.createElement("div", {
					className: O.a.StateContainer
				}, a.a.createElement(_, null), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(w, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: O.a.StateContainer
				}, a.a.createElement(_, null), a.a.createElement(E, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(p.n, {
					to: Object(b.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				N = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: O.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(j, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(p.l, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(O.a.StateContainer, O.a.ErrorFullPage)
				}, a.a.createElement(N, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				L = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(u.a, null)), "LoadingFullPage", O.a),
				F = l.a.div("CommentsPlaceholderContainer", O.a),
				M = l.a.div("CommentPlaceholder", O.a),
				R = l.a.div("Avatar", O.a),
				A = l.a.div("VoteColumn", O.a),
				B = l.a.div("TextColumn", O.a),
				D = l.a.wrapped(f.a, "Upvote", O.a),
				U = l.a.wrapped(x.a, "Downvote", O.a),
				V = () => a.a.createElement("div", {
					className: Object(c.a)(O.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(O.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				z = e => a.a.createElement(F, null, r()(10, t => a.a.createElement(M, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(U, null)), a.a.createElement(B, null, a.a.createElement(V, null), a.a.createElement(W, null)))))
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
				h = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/constants/comments.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/constants/gold.ts"),
				y = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const O = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: _,
							effectHighlight: {
								type: y.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				_ = "ff0000";

			function k(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(j).filter(e => e !== E)
				}(e) : [])
			}
			const E = {
				glowHexColor: null,
				effectHighlight: null
			};

			function j(e) {
				for (const t of O) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return E
			}
			var w = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				I = s("./src/reddit/selectors/comments.ts"),
				P = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/Comments/Comment/index.tsx"),
				M = s("./src/lib/scroll/index.ts"),
				R = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				U = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				V = s.n(U);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = p.a.wrapped(D.a, "ArrowRight", V.a), H = p.a.wrapped(R.a, "LinkOrOverlayLink", V.a), G = p.a.span("HoverSpan", V.a), q = Object(l.c)({
				permalink: (e, t) => Object(I.m)(e, {
					commentId: Object(I.r)(e, t).parentId
				})
			});
			var K = Object(c.b)(q)(Object(A.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => d.a.createElement("div", {
					className: Object(m.a)(V.a.Wrapper, {
						[V.a.isActive]: e
					})
				}, d.a.createElement(H, {
					isOverlay: !!t,
					to: Object(B.b)(s),
					onClick: M.b
				}, d.a.createElement(G, null, W._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", d.a.createElement(z, null))))),
				Y = s("./src/lib/makeCommentPermalink/index.ts"),
				Q = s("./src/reddit/actions/login.ts"),
				Z = s("./src/reddit/actions/modal.ts"),
				J = s("./src/reddit/constants/experiments.ts"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ee = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				te = s("./src/reddit/helpers/trackers/moreReplies.ts"),
				se = s("./src/reddit/hooks/useTracking.ts"),
				ne = s("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				oe = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = p.a.div("MoreCommentsItemWrapper", re.a), de = p.a.p("MoreComments", re.a), ce = p.a.wrapped(de, "MoreCommentsInteractive", re.a), le = Object(l.c)({
				isMoreRepliesSignupEnabled: ne.a,
				moreCommentsItem: I.D,
				moreCommentsPending: I.E,
				moreRepliesSignupVariant: ne.b
			});
			var me = Object(c.b)(le, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.l)(t.commentsPageKey, t.moreCommentsId)),
					openRegisterModal: () => {
						const {
							parentId: s,
							postId: n,
							postPermalink: o
						} = t;
						e((e, t) => {
							const r = t();
							e(Object(Q.j)());
							const i = r.platform.currentPage,
								a = Object(X.S)(r, i),
								d = a ? Object(Y.a)(a, n, s) : o;
							e(Object(Z.k)({
								actionSource: Z.a.CommentMoreReplies,
								redirectUrl: d
							}))
						})
					}
				}))(e => {
					const {
						isActive: t,
						isMoreRepliesSignupEnabled: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r,
						moreRepliesSignupVariant: i,
						openRegisterModal: a
					} = e, c = Object(se.a)(), l = e => {
						e.preventDefault(), e.stopPropagation(), c(Object(te.c)()), a()
					};
					return d.a.createElement(ae, null, r ? d.a.createElement(de, null, ie._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement($.a.Consumer, null, e => d.a.createElement(ce, {
						className: Object(m.a)({
							[re.a.isActive]: t
						}),
						onClick: e => ((e, t) => {
							s ? (c(Object(te.a)()), i === J.Qd.ThrottledDaily ? (ee.a.throttleFeature(J.Rd.Daily), l(e)) : i === J.Qd.ThrottledWeekly ? (ee.a.throttleFeature(J.Rd.Weekly), l(e)) : l(e)) : n()
						})(e)
					}, ie._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [ie._plural(null == o ? void 0 : o.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				ue = s("./node_modules/lodash/times.js"),
				pe = s.n(ue),
				he = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				be = s.n(he);
			const ge = p.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: C.m
				})), "Line", be.a),
				xe = p.a.div("LineContainer", be.a),
				fe = p.a.div("ShortLineContainer", be.a);
			var Ce = e => {
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
					return d.a.createElement(xe, null, pe()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : d.a.createElement(fe, {
						key: c[e]
					}, d.a.createElement(ge, {
						className: Object(m.a)(c[e], {
							[be.a.hasGlowBorder]: !!n,
							[be.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : d.a.createElement(ge, {
						className: c[e],
						key: c[e],
						onClick: o(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				ve = s("./src/reddit/contexts/Visibility.tsx"),
				ye = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Oe = s("./src/reddit/selectors/moderatingComments.ts"),
				_e = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				ke = s.n(_e);
			const Ee = p.a.div("CommentListNodeWrapper", ke.a),
				je = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				we = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var Ie = Object(c.b)(() => Object(l.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Oe.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(I.l)(e, t),
				depth: (e, t) => Object(I.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const n = Object(I.l)(e, {
						commentLink: t
					});
					if (n && t.type === x.a.Comment) {
						s = k(n.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: ye.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(I.l)(e, {
						commentLink: t
					});
					return !(t.type !== x.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= v.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(I.p)(e);
					if (s === w.a.None) return !1;
					if (t.type !== x.a.Comment) return !1;
					const n = t.id,
						o = Object(P.b)(e, {
							commentId: n
						});
					if (!o) return !1;
					const r = Object(L.u)(e),
						i = !!Object(N.l)(e, {
							postId: o.postId
						}),
						a = Object(T.G)(e, {
							postId: o.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === w.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && o.created > d
				},
				postPermalink: T.F
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: n
			}) => ({
				onLineClick: o => () => {
					e(Object(g.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: o,
						scrollToAndRemeasure: n
					}))
				},
				onShortLineClick: () => e(Object(g.o)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: n
				}))
			}))(e => {
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
					isFirstInList: h,
					isHidden: b,
					isHighlighted: g,
					onLineClick: C,
					onPresenceIndicatorInViewport: v,
					onShortLineClick: y,
					parentNodeIds: O,
					postId: _,
					postPermalink: k,
					renderedInOverlay: E,
					scrollToAndRemeasure: j,
					showBlockingInterstitial: w
				} = e, I = !!p, P = !(!a || !a.glowHexColor), S = P && i > 0, N = P, T = d.a.createElement(Ee, {
					className: Object(m.a)(s, {
						[ke.a.isHidden]: b,
						[ke.a.glowBorderTopPadding]: S,
						[ke.a.glowBorderBottomPadding]: N
					}),
					id: o.id,
					style: {
						paddingLeft: i * (f.w + f.v) + (o.type === x.a.Comment ? f.w : 0)
					},
					tabIndex: -1
				}, d.a.createElement(Ce, {
					collapsed: n,
					depth: i,
					hasGlowBorder: S,
					onLineClick: C,
					onLineMouseOver: je,
					onLineMouseOut: we,
					onShortLineClick: y,
					type: o.type,
					parentNodeIds: O
				}), Pe({
					childrenInfo: t,
					clearHovered: we,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					onLineMouseOver: je,
					hasAwardGradient: I,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: u,
					isFirstInList: h,
					isHighlighted: g,
					parentNodeIds: O,
					postId: _,
					renderedInOverlay: E,
					scrollToAndRemeasure: j,
					onPresenceIndicatorInViewport: v,
					postPermalink: k,
					showBlockingInterstitial: w
				}));
				return u && o.type === x.a.Comment ? d.a.createElement(ve.a, null, T) : T
			});
			const Pe = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: n,
				depth: o,
				hasAwardGradient: r,
				highlightTreatment: i,
				index: a,
				isActive: c,
				isAvatarsInCommentsEnabled: l,
				isFirstInList: m,
				isHighlighted: u,
				onLineMouseOver: p,
				parentNodeIds: h,
				postId: b,
				renderedInOverlay: g,
				scrollToAndRemeasure: f,
				onPresenceIndicatorInViewport: C,
				postPermalink: v,
				showBlockingInterstitial: y
			}) => {
				switch (s.type) {
					case x.a.Comment:
						return d.a.createElement(F.a, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: n,
							hasAwardGradient: r,
							highlightTreatment: i,
							index: a,
							isActive: c,
							isAvatarsInCommentsEnabled: l,
							isFirstInList: m,
							isHighlighted: u,
							onLineMouseOver: p,
							postId: b,
							renderedInOverlay: g,
							scrollToAndRemeasure: f,
							onPresenceIndicatorInViewport: C,
							showBlockingInterstitial: y
						});
					case x.a.MoreComments:
						return d.a.createElement(me, {
							commentsPageKey: n,
							isActive: c,
							moreCommentsId: s.id,
							parentId: h[o - 1],
							postId: b,
							postPermalink: v
						});
					case x.a.ContinueThread:
						return d.a.createElement(K, {
							id: s.id,
							isActive: c
						})
				}
			};
			var Se = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ne = s("./src/reddit/components/Comments/States/index.tsx"),
				Te = s("./src/reddit/components/Scroller/Simple.tsx"),
				Le = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Fe = s("./src/reddit/constants/elementIds.ts"),
				Me = s("./src/reddit/featureFlags/index.ts"),
				Re = s("./src/reddit/helpers/commentList/index.ts"),
				Ae = s("./src/reddit/helpers/trackers/comment.ts"),
				Be = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				De = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ue = s("./src/telemetry/index.ts"),
				Ve = s("./src/lib/LRUCache/index.ts"),
				We = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				ze = s("./src/reddit/selectors/telemetry.ts");
			const He = e => t => ({
				...Object(ze.o)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(ze.d)(t, {
					reason: String(e)
				})
			});
			var Ge = s("./src/reddit/components/Comments/index.m.less"),
				qe = s.n(Ge);
			const Ke = f.f + 10,
				Ye = 65,
				Qe = p.a.wrapped(Te.b, "Scroller", qe.a),
				Ze = Object(l.c)({
					allCollapsed: I.a,
					commentLinks: I.k,
					commentThreadLinkSet: I.o,
					measureScrollFPS: Me.d.measureScrollFPS,
					moreComments: I.b,
					postPermalink: T.F
				}),
				Je = Object(c.b)(Ze, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(h.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.h)(t, s)),
					showModalOnCommentsScroll: t => e(Object(b.ab)(Object(B.b)(t)))
				})),
				Xe = new Ve.a(500),
				$e = new Ve.a(500),
				et = (e, t) => {
					const s = `entered-${e}`;
					let n = Xe.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, Xe.set(s, n)), n
				},
				tt = (e, t) => {
					const s = `left-${e}`;
					let n = $e.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, $e.set(s, n)), n
				};
			class st extends d.a.Component {
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
						}), this.props.sendEvent(Object(Ae.b)(e)))
					}, this.showBlockingInterstitial = o()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, u.K, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, Se.c(), this.childrenInfoMap = {}, this.state = {
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
					this.timerId && Ue.c.cancel(this.timerId), e.length && (this.timerId = Ue.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Ue.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ue.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < De.a && this.props.sendEvent(He(this.props.commentLinks.length))
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
					this.timerId && Ue.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Ue.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Ue.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ue.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Ue.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					Se.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (Se.a(c.id), i += Object(Re.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
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
					} = this.props, a = et(e.id, n), c = tt(e.id, o);
					return {
						estHeight: Se.b(e.id) ? 0 : Ye,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: ({
							placeholderRecommended: n,
							height: o,
							width: a,
							scrollToAndRemeasure: c
						}) => n ? d.a.createElement("div", {
							style: {
								height: o,
								backgroundColor: "#fff"
							}
						}) : d.a.createElement(Ie, {
							key: `comment-list-node-${e.id}`,
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							index: t,
							isFirstInList: 0 === t,
							isHidden: Se.b(e.id),
							postId: r,
							scrollToAndRemeasure: c,
							renderedInOverlay: !!i,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
							showBlockingInterstitial: this.showBlockingInterstitial
						})
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
					return d.a.createElement(Qe, {
						className: Object(m.a)(qe.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(Fe.d) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: Ke,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Ne.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Ne.c, null)
				}
			}
			t.a = Je(Object(Le.c)(Object(We.a)(Object(Be.d)(st))))
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
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(u, null))
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
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
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
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/ModProgressModule/index.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				_ = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				k = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				E = s("./src/reddit/constants/experiments.ts"),
				j = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				I = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = s("./src/reddit/selectors/experiments/postSeo.ts"),
				N = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				M = s.n(F);
			const R = Object(j.a)("spPoints", h.a),
				A = Object(j.a)("spLeaderboard", b.a),
				B = Object(n.a)({
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
				D = Object(c.c)({
					isInNewModuleNCPV3Experiment: (e, {
						post: t,
						isOverlay: s
					}) => !Object(I.q)(t) && !s && Object(P.a)(e) === E.ge.NewModule,
					isLoggedIn: L.O,
					postSEOV2IdCardVariant: S.h,
					shouldShowReredditPromo: N.a,
					widgets: Object(u.a)(T.s)
				}),
				U = Object(d.b)(D);
			class V extends a.a.Component {
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
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(S.c)(i) && !Object(S.f)(i);
					return a.a.createElement(y.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(C.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: w.a.BOTTOM,
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
						isInNewModuleNCPV3Experiment: s,
						isLoggedIn: n,
						isOverlay: o,
						post: r,
						postSEOV2IdCardVariant: i,
						shouldShowReredditPromo: d,
						subredditId: c,
						subredditName: u,
						widgets: h
					} = this.props;
					let b = 0;
					const y = Object(S.c)(i) || Object(S.f)(i),
						E = a.a.createElement(C.a, {
							postId: r.id,
							isOverlay: o,
							listingName: u,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: b++,
							position: w.a.FIRST,
							refreshKey: r.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(M.a.outerWrapper, e)
					}, s && a.a.createElement(x.default, {
						subredditId: c,
						subredditName: u
					}), Object(I.q)(r) ? a.a.createElement(B, {
						profileName: u,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: u,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: y
					}), a.a.createElement(p.a, {
						cardClassName: M.a.card,
						subredditId: c
					}), a.a.createElement(R, {
						className: M.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(A, {
						className: M.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(f.a, {
						subredditId: c
					}), E, n && h.map((e, t) => a.a.createElement(v.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(k.a, {
						subredditName: u,
						widget: e
					}))), r.isSponsored && a.a.createElement(v.a, null, a.a.createElement(O.a, null)), d && a.a.createElement(_.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(b++))
				}
			}
			t.a = U(V)
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
			class h extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: h,
						onClick: b
					} = this.props, g = l && !e, x = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: b,
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
					}, u._("View Entire Discussion ({number of comments} Comments)", [u._param("number of comments", Object(a.b)(h))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(h)
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
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				participantsCount: e
			}) => m._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [m._param("total participated users", Object(l.b)(e)), m._plural(e)], {
				hk: "1yrPLH"
			});
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				h = s.n(p);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					o = t.status === d.a.Closed,
					l = Object(i.e)(t => Object(c.U)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: h.a.container
				}, r.a.createElement("div", {
					className: h.a.label
				}, r.a.createElement("span", null, null == l ? void 0 : l.displayText), s && r.a.createElement("span", {
					className: Object(n.a)(h.a.badge, h.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(n.a)(h.a.badge, h.a.ended)
				}, b._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== t.totalParticipantsCount && r.a.createElement(u, {
					participantsCount: t.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: h.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: h.a.title
				}, t.name))
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
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(f);
			const v = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(u.b)(t.permalink), t.id))
				})),
				y = (e, t = !1, s) => {
					const n = Object(d.a)(C.a.icon, C.a.hideOnHover);
					if (t) return r.a.createElement(h.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(h.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(h.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(h.a, {
								name: "gif_post",
								className: n
							});
						case b.o.IMAGE:
							return r.a.createElement(h.a, {
								name: "image_post",
								className: n
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(h.a, {
								name: "text_post",
								className: n
							});
						case b.o.VIDEO:
							return r.a.createElement(h.a, {
								name: "video_post",
								className: n
							});
						case b.o.GALLERY:
							return r.a.createElement(h.a, {
								name: "media_gallery",
								className: n
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(h.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: b,
					toggle: f,
					useMediaIcons: v
				} = e, O = s || b, _ = Object(i.e)(g.b), k = t => {
					_ && (t.preventDefault(), e.showModalOnPostLinkClick(O))
				}, E = o && !!s;
				return O.media && !(("rtjson" === O.media.type || "text" === O.media.type || "liveaudio" === O.media.type) && !Object(p.a)(O)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: f
				}, u ? r.a.createElement(h.a, {
					name: "collapse",
					className: C.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, y(O.media && O.media.type, E, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: C.a.icon
				})) : O.source && O.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: O.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(O.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: C.a.icon
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
				return b
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
				h = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", h(e) + e.name)], {
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
					title: t
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
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				x = Object(a.c)({
					subreddit: u.x,
					subredditAboutInfo: u.u
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
					className: b.a.container,
					color: c.a.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
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
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/controls/ContentType/index.tsx"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/telemetry/index.ts"),
				_ = s("./src/reddit/components/ItemCarousel/index.m.less"),
				k = s.n(_);
			const E = ({
				postCard: e,
				post: t,
				className: s
			}) => {
				const {
					url: o,
					commentCount: r,
					createdAt: i,
					score: l,
					title: m,
					thumbnail: u,
					isNsfw: _,
					subreddit: E
				} = e, j = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					t && E && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...v.o(s)
					}))(t, E)(j))
				}, []);
				return d.a.createElement(f.a, {
					to: (null == o ? void 0 : o.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(k.a.redditLinkCard, s),
					onClick: () => {
						Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...v.o(s)
						}))(t, E)(j))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(k.a.imageContainer)
				}, (null == u ? void 0 : u.url) ? d.a.createElement("img", {
					src: u.url,
					className: Object(n.a)(_ && k.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: k.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: k.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: k.a.title
				}, m), _ && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: k.a.flair
				})), d.a.createElement("div", {
					className: k.a.postStats
				}, l && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(b.b)(l), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: k.a.separator
				}, "•")), r && d.a.createElement("span", null, Object(b.b)(r), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: k.a.separator
				}, "•"), i && d.a.createElement("span", null, Object(g.a)(new Date(i).getTime() / h.Sb, !0)))))
			};
			var j = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const T = ({
				crosspostCard: e,
				post: t,
				className: s
			}) => {
				const {
					permalink: o,
					commentCount: r,
					title: i,
					thumbnail: l,
					isNsfw: m,
					subreddit: u
				} = e, h = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					t && u && Object(O.a)(Object(S.c)(t, u)(h))
				}, [t, u, h]);
				return d.a.createElement(f.a, {
					to: o,
					className: Object(n.a)(k.a.redditLinkCard, k.a.crosspostLinkCard, s),
					onClick: () => {
						Object(O.a)(Object(S.a)(t, u)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(k.a.imageContainer)
				}, (null == l ? void 0 : l.url) ? d.a.createElement("img", {
					src: l.url,
					className: Object(n.a)(m && k.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: k.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: k.a.postDescription
				}, d.a.createElement("div", {
					className: k.a.postStats
				}, d.a.createElement(N.a, {
					className: k.a.crosspostIcon
				}), d.a.createElement(P.a, {
					to: null == u ? void 0 : u.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: k.a.subredditLink
				}, `r/${null==u?void 0:u.name}`), d.a.createElement("span", {
					className: k.a.separator
				}, "•"), d.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(r || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(n.a)(k.a.title, k.a.crosspostTitle)
				}, m && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: k.a.flair
				}), i)))
			};
			var L = d.a.memo(({
					className: e
				}) => d.a.createElement("div", {
					className: Object(n.a)(k.a.redditLinkCard, e)
				}, d.a.createElement("div", {
					className: Object(n.a)(k.a.shimmer, k.a.imageContainer)
				}), d.a.createElement("div", {
					className: k.a.postDescription
				}, d.a.createElement("div", {
					className: Object(n.a)(k.a.shimmer, k.a.title)
				}), d.a.createElement("div", {
					className: Object(n.a)(k.a.shimmer, k.a.postStats)
				})))),
				F = s("./src/reddit/actions/subreddit.ts"),
				M = s("./src/reddit/components/SubscribeButton/index.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: o,
				description: r,
				primaryColor: i,
				icon: l,
				isSubscribed: m,
				banner: p,
				path: h,
				size: g,
				isDiscovery: x,
				post: f,
				className: _,
				isNsfw: E
			}) => {
				const j = Object(c.d)();
				Object(a.useEffect)(() => {
					j(Object(F.u)(s))
				}, [j, s]);
				const w = Object(c.e)(t => Object(u.S)(t, {
						subredditId: e
					})),
					I = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					f && w && x && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...v.o(s)
					}))(f, w)(I))
				}, []);
				const S = Object(a.useCallback)(s => {
					if (x) return (({
						noun: e,
						subredditId: t,
						index: s,
						source: n,
						...o
					}) => r => ({
						...o,
						source: n,
						noun: e,
						actionInfo: {
							reason: `${s}`
						},
						subreddit: Object(u.S)(r, {
							subredditId: t
						})
					}))({
						action: "click",
						post: f,
						noun: s ? "unsubscribe" : "subscribe",
						subredditId: e,
						index: t,
						source: "post_discovery"
					})
				}, [e, t, m]);
				return d.a.createElement("div", {
					className: Object(n.a)(k.a.subredditItem, null === k.a || void 0 === k.a ? void 0 : k.a[g], _)
				}, d.a.createElement("div", {
					className: k.a.contentWrapper
				}, d.a.createElement("div", {
					className: k.a.bannerWrapper,
					style: {
						backgroundColor: i || void 0
					}
				}, d.a.createElement("img", {
					className: k.a.banner,
					src: p || void 0
				})), d.a.createElement("div", {
					className: k.a.carouselContent
				}, d.a.createElement(P.a, {
					to: h,
					className: k.a.lockup,
					onClick: () => {
						x && Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...v.o(s)
						}))(f, w)(I))
					}
				}, d.a.createElement("div", {
					style: "small" === g ? {
						backgroundColor: "grey",
						backgroundImage: `url(${p||""})`
					} : {},
					className: k.a.backgroundImage
				}, l ? d.a.createElement("img", {
					src: l,
					className: k.a.subredditIcon
				}) : d.a.createElement(A.a, {
					className: k.a.subredditIcon
				})), d.a.createElement("div", {
					className: k.a.lockupText
				}, d.a.createElement("span", {
					className: k.a.subredditName
				}, "r/", s), " ", E && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: k.a.flair
				}), d.a.createElement("span", {
					className: k.a.subscribersCount
				}, B._({
					"*": "{number} members",
					_1: "1 member"
				}, [B._plural(o, "number", Object(b.b)(o))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: k.a.description
				}, r)), d.a.createElement(M.a, {
					className: k.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: S,
					priority: R.c.Tertiary,
					small: !0
				})))
			};

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, z = Object(I.c)(({
				title: e,
				className: t,
				itemIds: s,
				size: r = "large",
				hasSubredditNames: p = !1,
				hasPostIds: h = !1,
				isDiscovery: b,
				post: g
			}) => {
				const x = Object(c.d)(),
					[f, C] = Object(a.useState)(null),
					[v, y] = Object(a.useState)(null),
					[O, _] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[I, P] = Object(a.useState)(0),
					[S] = Object(a.useState)(void 0),
					{
						subredditIds: N,
						crosspostIds: F,
						postIds: M,
						postUrls: R
					} = Object(a.useMemo)(() => s.reduce((e, {
						type: t,
						id: s,
						url: n
					}) => {
						switch (t) {
							case w.a.SUBREDDIT:
								e.subredditIds.push(s.toLowerCase());
								break;
							case w.a.POST:
								n && (e.postUrls[s] = n), e.postIds.push(s);
								break;
							case w.a.CROSSPOST:
								e.crosspostIds.push(s)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [s]),
					A = Object(c.e)(e => Object(u.y)(e, N)),
					B = Object(c.e)(e => Object(j.L)(e, M)),
					V = Object(c.e)(e => Object(j.L)(e, F)),
					z = A.reduce((e, t) => (e[p ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					H = B.reduce((e, t) => (e[t.id] = t, e), {}),
					G = V.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == N ? void 0 : N.length) || M.length || F.length) && x(Object(l.e)(N, p, N, h, [...F, ...M]))
				}, [N, F, M, x, h, p]);
				const q = s.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, {
						type: t,
						id: s
					}) => {
						switch (t) {
							case w.a.SUBREDDIT:
								const n = null == z ? void 0 : z[s.toLowerCase()];
								if (!n || !b && n.isNsfw || !b && n.isSubscribed) break;
								e.push({
									type: t,
									props: n
								});
								break;
							case w.a.POST:
								const o = null == H ? void 0 : H[s];
								if (!o) break;
								e.push({
									type: t,
									props: o
								});
								break;
							case w.a.CROSSPOST:
								const r = null == G ? void 0 : G[s];
								if (!r) break;
								e.push({
									type: t,
									props: r
								})
						}
						return e
					}, []),
					K = e => () => {
						var t, s;
						if (!v) return;
						const n = null === (s = null === (t = null == v ? void 0 : v.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const o = (Math.sign(e) ? v.scrollLeft % n : n % v.scrollLeft) || 0,
							r = n * e - o;
						v.scrollBy({
							left: r,
							behavior: "smooth"
						})
					},
					Y = Object(a.useCallback)(() => {
						if (!v) return;
						const {
							width: e
						} = null == v ? void 0 : v.getBoundingClientRect(), t = (null == v ? void 0 : v.scrollLeft) > 0, s = (null == v ? void 0 : v.scrollLeft) < v.scrollWidth - e;
						0 === (null == v ? void 0 : v.scrollLeft) && v.scrollWidth - e == 0 || _({
							left: t,
							right: s
						})
					}, [v]);
				Object(a.useEffect)(() => {
					if (!f || !v) return;
					const e = i()(() => {
						const e = W(v);
						P(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = W(v);
					return P(t), Y(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f, v, Y, I, q.length]);
				const Q = () => 1 === q.length ? k.a.flexWidth : 2 === q.length ? k.a.flexWidthTwoItems : k.a.constantWidth;
				return d.a.createElement("div", {
					ref: C,
					className: Object(n.a)(k.a.carouselContainer, t, null === k.a || void 0 === k.a ? void 0 : k.a[r])
				}, d.a.createElement("div", {
					className: k.a.carouselHeader,
					style: {
						width: S
					}
				}, d.a.createElement("h3", {
					className: k.a.carouselTitle
				}, e)), d.a.createElement("div", {
					ref: y,
					onScroll: Y,
					className: Object(n.a)(k.a.itemsContainer, null === k.a || void 0 === k.a ? void 0 : k.a[r]),
					style: {
						width: S
					}
				}, !q.length && Array(3).fill(!0).map((e, t) => d.a.createElement(L, {
					key: t,
					className: Q()
				})), null == q ? void 0 : q.map(({
					type: e,
					props: t
				}, s) => {
					var n, o, i;
					switch (e) {
						case w.a.SUBREDDIT:
							const e = t;
							return d.a.createElement(D, U({
								className: Q(),
								index: s + 1,
								size: r,
								banner: null === k.a || void 0 === k.a ? void 0 : k.a.bannerBackgroundImage,
								icon: (null === (n = null == e ? void 0 : e.styles) || void 0 === n ? void 0 : n.icon) || (null === (i = null === (o = e.styles) || void 0 === o ? void 0 : o.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${s}`,
								isDiscovery: !0,
								post: g
							}, e));
						case w.a.POST:
							const a = t;
							return d.a.createElement(E, {
								postCard: {
									...a,
									url: R[a.id]
								},
								className: Q(),
								post: g
							});
						case w.a.CROSSPOST:
							const c = t;
							return d.a.createElement(T, {
								crosspostCard: {
									...c
								},
								className: Q(),
								post: g
							});
						default:
							return null
					}
				})), q.length > 2 && d.a.createElement("div", {
					className: Object(n.a)(k.a.carouselControls, {
						[k.a.hasTitle]: !!e
					})
				}, d.a.createElement("div", {
					className: Object(n.a)(k.a.buttonWrapper, k.a.left, {
						[k.a.hidden]: !O.left
					})
				}, d.a.createElement("button", {
					className: k.a.scrollButton,
					onClick: K(-I)
				}, d.a.createElement(m.a, {
					name: o.a.left_fill,
					className: k.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(k.a.buttonWrapper, k.a.right, {
						[k.a.hidden]: !O.right
					})
				}, d.a.createElement("button", {
					className: k.a.scrollButton,
					onClick: K(I)
				}, d.a.createElement(m.a, {
					name: o.a.right_fill,
					className: k.a.scrollIcon
				})))))
			});
			t.a = z
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: n,
					...r
				} = e, c = Object(a.b)(n);
				return o.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, n = t ? c : r.a;
				return o.a.createElement(n, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
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
				h = s("./src/reddit/components/MediumPost/index.m.less"),
				b = s.n(h);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: n,
				shouldShowSubscribeButton: h,
				subredditOrProfile: g,
				templatePlaceholderImage: x,
				shouldShowFollowButton: f,
				isFollowed: C,
				isCommentsPage: v,
				onFollowPostClick: y
			}) => {
				return Object(u.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: f || h
					})
				}, o.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, f && o.a.createElement(a.a, {
					isFilled: !!C,
					onClick: y,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && g && o.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(m.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(p.h)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: v,
					post: t,
					redditStyle: n,
					forceShowNSFW: s,
					templatePlaceholderImage: x
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
				h = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				b = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/ImageInput/index.tsx"),
				y = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				O = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				E = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				j = s("./src/reddit/models/ApiRequestState/index.ts"),
				w = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				I = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(S);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = ({
				id: e,
				title: t,
				iconIdentifier: s
			}, n, r) => {
				const i = b.b[s];
				return o.a.createElement("div", {
					className: Object(d.a)(N.a.Card, {
						[N.a.unclickable]: n
					}),
					key: e,
					onClick: e => {
						e.stopPropagation(), !n && r()
					}
				}, o.a.createElement("span", {
					className: N.a.ContentContainer
				}, o.a.createElement("span", {
					className: Object(d.a)(N.a.IconContainer, {
						[N.a.completed]: n
					})
				}, n ? o.a.createElement(_.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : o.a.createElement(_.a, {
					name: i,
					className: N.a.Icon
				})), o.a.createElement("span", {
					className: N.a.CardTitle
				}, t)))
			}, F = Object(a.c)({
				isTooltipOpen: e => Object(P.a)(e) === p.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: I.c
			});
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(j.b)();
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
					} = this.props, b = l && l[m];
					if (!b) return o.a.createElement(x.a, {
						className: N.a.ThemedWidget,
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(E.a, {
							className: N.a.ChevronIcon
						})),
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(k.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == b ? void 0 : b.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == b ? void 0 : b.progress) || void 0 === t ? void 0 : t.total),
						f = 0 === (null === (s = b.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
							[N.a.completed]: g,
							[N.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(E.a, {
							className: N.a.ChevronIcon
						})),
						id: p.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(k.a, {
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
					}, T._("{cardsComplete} of {totalCards}", [T._param("cardsComplete", null === (n = b.progress) || void 0 === n ? void 0 : n.done), T._param("totalCards", null === (r = b.progress) || void 0 === r ? void 0 : r.total)], {
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
					}, b.cards.map(e => {
						const t = e.status === w.a.COMPLETED;
						return L(e, t, () => this.onClickCard(b, e.id))
					})), g && o.a.createElement(C.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: C.c.Tertiary
					}, T._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(h.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const R = Object(r.b)(F, (e, t) => ({
				onCompleteModule: () => e(Object(y.c)(t.subredditId, w.d)),
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
			t.default = R(Object(g.c)(M))
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
				return St
			})), s.d(t, "b", (function() {
				return Nt
			})), s.d(t, "a", (function() {
				return Tt
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
				h = s("./src/lib/pubsub/index.ts"),
				b = s("./src/lib/timeAgo/index.ts"),
				g = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				f = s("./src/reddit/models/User/index.ts"),
				C = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/components/ItemCarousel/index.tsx"),
				j = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				I = s.n(w),
				P = s("./node_modules/react-motion/lib/react-motion.js");
			const S = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				N = {},
				T = (e = [], t) => {
					const s = I()(e, {
							key: "expando_content"
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(P.spring)(1, S)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(P.spring)(0, S)
						}
					}]
				};
			class L extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), N), this.state = {
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
					return i.a.createElement(P.TransitionMotion, {
						styles: e => T(e, t),
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
			var F = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/models/Vote/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				D = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				U = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				q = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				K = s("./src/reddit/components/AwardBadges/index.tsx"),
				Y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Q = s("./src/reddit/components/Econ/Audio/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				J = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				X = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				$ = s("./src/reddit/components/ExpandoButton/index.tsx"),
				ee = s("./src/reddit/components/FlairWrapper/index.tsx"),
				te = s("./src/reddit/components/Flatlist/index.tsx"),
				se = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				ne = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				oe = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				re = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ie = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				ae = s("./src/reddit/components/ModModeReports/index.tsx"),
				de = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ce = s("./src/reddit/components/NotificationButton/index.tsx"),
				le = s("./src/reddit/components/PostContainer/index.tsx"),
				me = s("./src/higherOrderComponents/makeAsync.tsx"),
				ue = s("./src/lib/loadWithRetries/index.ts"),
				pe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const he = Object(me.a)({
				ErrorComponent: () => i.a.createElement(pe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ue.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(pe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var be = e => i.a.createElement(he, e),
				ge = s("./src/reddit/components/PostList/index.tsx"),
				xe = s("./src/reddit/components/PostMedia/index.tsx"),
				fe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ce = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ve = s("./src/reddit/components/PostTitle/index.tsx"),
				ye = s("./src/reddit/components/PostTopLine/index.tsx"),
				Oe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_e = s("./src/reddit/components/SourceLink/index.tsx"),
				ke = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				je = s("./src/reddit/constants/componentSizes.ts"),
				we = s("./src/reddit/constants/componentTestIds.ts"),
				Ie = s("./src/reddit/constants/postLayout.ts"),
				Pe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Se = s("./src/reddit/helpers/postEvent.ts"),
				Ne = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Te = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Le = s("./src/reddit/selectors/postFlair.ts"),
				Fe = s("./src/reddit/models/Audio/index.ts"),
				Me = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Re = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ae = s("./src/reddit/constants/experiments.ts"),
				Be = s("./src/reddit/helpers/chooseVariant/index.ts"),
				De = s("./src/reddit/selectors/experiments/presence.ts");
			const Ue = e => {
					return Object(Be.c)(e, {
						experimentEligibilitySelector: Be.a,
						experimentName: Ae.rf
					}) === Ae.dd
				},
				Ve = e => {
					if (Object(De.a)(e)) return !1;
					return Object(Be.c)(e, {
						experimentEligibilitySelector: Be.a,
						experimentName: Ae.qf
					}) === Ae.dd
				},
				We = (e, {
					postId: t
				}) => {
					const s = Object(W.G)(e, {
						postId: t
					});
					return !(Object(De.a)(e) || !s || s.isSponsored) && Object(Be.c)(e, {
						experimentEligibilitySelector: Be.a,
						experimentName: Ae.pf
					}) === Ae.dd
				};
			var ze = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				He = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ge = s("./src/reddit/constants/colors.ts"),
				qe = s("./src/reddit/icons/fonts/index.tsx"),
				Ke = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ye = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Qe = s.n(Ye);
			const Ze = i.a.createElement(qe.a, {
				className: Qe.a.BlockIcon,
				name: "block"
			});
			var Je = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Ke.a, {
						className: Qe.a.bannerBase,
						color: Ge.a.dayModeActionIcon,
						icon: Ze,
						title: He.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Qe.a.expandButton,
							onClick: t
						}, He.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Qe.a.blockedAuthorTextWrapper
					})
				},
				Xe = s("./src/config.ts"),
				$e = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				et = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				st = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				nt = s.n(st);
			const {
				fbt: ot
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rt = () => ot._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [ot._param("=User Agreement", i.a.createElement("a", {
				className: nt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, ot._("User Agreement", null, {
				hk: "3MHgRl"
			}))), ot._param("=Content Policy", i.a.createElement("a", {
				className: nt.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, ot._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), it = () => ot._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [ot._param("=User Agreement", i.a.createElement("a", {
				className: nt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, ot._("User Agreement", null, {
				hk: "yMHtU"
			}))), ot._param("=Content Policy", i.a.createElement("a", {
				className: nt.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, ot._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var at = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return ot._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case M.g.Author:
							return ot._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case M.g.AuthorDeleted:
							return ot._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case M.g.AutomodFiltered:
							return ot._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case M.g.CommunityOps:
							return ot._("This post was removed by Reddit admin, u/{username}.", [ot._param("username", t)], {
								hk: "34nHWu"
							});
						case M.g.ContentTakedown:
							return ot._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case M.g.CopyrightTakedown:
							return ot._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case M.g.Moderator:
							return ot._("This post was removed by r/{subredditName} moderator, u/{username}.", [ot._param("subredditName", s), ot._param("username", t)], {
								hk: "270bcn"
							});
						case M.g.Reddit:
							return ot._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return ot._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return ot._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case M.g.Author:
							return ot._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case M.g.AuthorDeleted:
							return ot._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case M.g.AutomodFiltered:
							return ot._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case M.g.CommunityOps:
							return ot._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case M.g.ContentTakedown:
							return ot._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case M.g.CopyrightTakedown:
							return ot._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case M.g.Moderator:
							return ot._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [ot._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case M.g.Reddit:
							return ot._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return ot._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case M.g.AntiEvilOps:
							return i.a.createElement(rt, null);
						case M.g.AuthorDeleted:
						case M.g.Author:
							return ot._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case M.g.AutomodFiltered:
							return ot._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case M.g.CommunityOps:
							return ot._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [ot._param("=just ask", i.a.createElement("a", {
								className: nt.a.link,
								href: `${Xe.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, ot._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case M.g.ContentTakedown:
							return i.a.createElement(it, null);
						case M.g.CopyrightTakedown:
							return ot._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case M.g.Moderator:
							return ot._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case M.g.Reddit:
							return ot._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return ot._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return i.a.createElement(rt, null);
						case M.g.AuthorDeleted:
						case M.g.Author:
							return ot._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case M.g.AutomodFiltered:
							return ot._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [ot._param("=[subreddit name]", i.a.createElement("a", {
								className: nt.a.link,
								href: `${Xe.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, ot._("{subreddit name}", [ot._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case M.g.CommunityOps:
							return ot._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case M.g.ContentTakedown:
							return i.a.createElement(it, null);
						case M.g.CopyrightTakedown:
							return ot._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case M.g.Moderator:
							return ot._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case M.g.Reddit:
						default:
							return ot._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), d = t ? Ge.a.warning : Ge.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case M.g.AntiEvilOps:
						case M.g.AutomodFiltered:
						case M.g.CommunityOps:
						case M.g.ContentTakedown:
						case M.g.CopyrightTakedown:
						case M.g.Reddit:
							t = $e.a;
							break;
						case M.g.AuthorDeleted:
						case M.g.Author:
							t = tt.b;
							break;
						case M.g.Moderator:
							t = et.a;
							break;
						default:
							t = $e.a
					}
					return i.a.createElement(t, {
						className: nt.a.icon
					})
				})(n);
				return i.a.createElement(Ke.a, {
					className: nt.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function dt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(at, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var ct = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				lt = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				mt = s("./src/reddit/actions/modal.ts"),
				ut = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				pt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				ht = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				bt = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				gt = s.n(bt);
			const xt = i.a.createElement(qe.a, {
				className: gt.a.RemoveIcon,
				name: "delete_fill"
			});
			var ft = () => i.a.createElement(Ke.a, {
					className: gt.a.bannerBase,
					color: Ge.a.dayModeActionIcon,
					icon: xt,
					title: He.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				Ct = s("./src/reddit/components/PostContent/index.m.less"),
				vt = s.n(Ct);
			const {
				fbt: yt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ot = p.a.wrapped(ve.c, "PostTitle", vt.a), _t = p.a.wrapped($.a, "ExpandoButton", vt.a), kt = p.a.wrapped(L, "ClassicExpandoMotion", vt.a), Et = p.a.wrapped(te.c, "FullWidthFlatlist", vt.a), jt = i.a.createElement("p", {
				className: vt.a.VideoProcessingStatus
			}, yt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), wt = Object(Pe.u)({
				isCommentsPage: Pe.x,
				pageLayer: e => e
			}), It = Object(a.b)(() => Object(l.c)({
				activeModalId: A.a,
				flairStyleTemplate: Pe.V,
				currentUser: H.k,
				crosspost: W.d,
				hideNSFWPref: H.E,
				imageGalleryCurrentItem: W.i,
				isAdminOrMod: (e, t) => {
					const s = Object(W.U)(e, {
						postId: t.postId
					});
					return !!s && Object(D.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: W.l,
				isExpanded: W.m,
				isFollowed: W.t,
				isFollowedExpired: W.o,
				showPromotedCTA: z.a,
				post: W.G,
				moderatorPermissions: U.l,
				modModeEnabled: Pe.T,
				shouldTryToShowCrosspostModal: pt.e,
				showAwardsPlaque: B.a,
				showEditFlair: Le.a,
				subredditOrProfile: W.U,
				isEditing: V.M,
				userIsOp: H.zb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Re.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Re.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: We,
				isReadingIndicatorsReadTestEnabled: Ve,
				isReadingIndicatorsWriteTestEnabled: Ue,
				isTrueblockPCBlockeeEnabled: Te.b,
				isTypingIndicatorsExperimentEnabled: ze.b,
				isTypingIndicatorsReadTestEnabled: ze.c
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(g.gb)(s)),
				onOpenReportsDropdown: t => e(Object(j.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const n = t === R.a.upvoted ? Object(g.kb)(s) : Object(g.w)(s);
					e(n)
				},
				fireAdPixelsOfType: (t, s) => e(Object(g.z)(t, s)),
				openPost: t => e(Object(g.L)(t)),
				onFollowPost: t => e(Object(g.jb)(s, t)),
				onFollowPostExpired: () => e(Object(g.Y)({
					id: s,
					expiresAt: 0
				}))
			})), Pt = e => e.media && e.media.type === F.o.EMBED && e.media.provider === F.v.Imgur && e.media.height > 700, St = new h.a, Nt = "VISIBLE", Tt = "NOT_VISIBLE", Lt = e => St.publish(e ? Nt : Tt), Ft = {
				threshold: [.85, .001],
				rootMargin: `${1-je.f}px 0px 0px 0px`
			}, Mt = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Lt(!1), e <= .001 && Lt(!0)
				}
			}, Rt = p.a.wrapped(d.a, "ThumbLink", vt.a), At = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: n,
				onFollowPostClick: o
			}) => {
				const r = e.source ? i.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(Rt, {
					to: Object(O.b)(e.permalink)
				}, i.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: vt.a.classicThumbnail
				}, s && i.a.createElement(ce.a, {
					className: vt.a.classicNotificationButton,
					isFilled: !!n,
					onClick: o,
					hasTooltip: !0,
					tooltipText: yt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, Bt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(kt, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(xe.a, {
					className: vt.a.ClassicPostMedia,
					isListing: !1,
					isNotCardView: !0,
					post: e,
					shouldLoad: !0,
					showFull: !0,
					showCentered: !0,
					scrollerItemRef: s
				})),
				shouldExpand: !!t
			});
			t.c = wt(It(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: h,
					imageGalleryCurrentItem: g,
					isAdminOrMod: O,
					isCommentCountAnimation: j,
					isCommentsPage: w,
					isCountAnimShadowTestEnabled: I,
					isCrosspostRecommendationsExperimentEnabled: P,
					isCurrentUserProfilePost: S,
					isEditing: N,
					isExpanded: T,
					isFollowed: L,
					isFollowedExpired: R,
					isInModNotesExperiment: A,
					isOverlay: B,
					isReadingIndicatorsExperimentEnabled: D,
					isReadingIndicatorsReadTestEnabled: U,
					isReadingIndicatorsWriteTestEnabled: V,
					isTypingIndicatorsExperimentEnabled: W,
					isTypingIndicatorsReadTestEnabled: z,
					isVoteCountAnimation: H,
					moderatorPermissions: Y,
					modModeEnabled: $,
					onFollowPost: ce,
					onFollowPostExpired: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					openPost: he,
					onVoteClick: je,
					post: Pe,
					scrollerItemRef: Le,
					sendEvent: Re,
					shouldTryToShowCrosspostModal: Ae,
					showAwardsPlaque: Be,
					showEditFlair: De,
					showPromotedCTA: Ue,
					subredditOrProfile: Ve,
					userIsOp: We,
					isTrueblockPCBlockeeEnabled: ze,
					pageLayer: He
				} = e, Ge = Object(ke.b)(), qe = Object(r.useRef)(null), [Ke, Ye] = Object(r.useState)(Pe.authorIsBlocked), Qe = Object(F.J)(Pe), Ze = Object(a.e)(e => Object(Te.a)(e)), Xe = Object(c.a)(Pe), $e = D || W, et = $e || U || V || z;
				Object(r.useEffect)(() => {
					R && me()
				}, []);
				const tt = Object(a.d)(),
					st = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					if (P && Ae) return tt(Object(lt.a)(Pe)), st.current = setTimeout(() => {
						tt(Object(mt.h)(ut.a)), tt(Object(lt.b)())
					}, ut.b), () => {
						tt(Object(lt.b)()), tt(Object(mt.g)(ut.a)), st.current && clearTimeout(st.current)
					}
				}, [tt, P, Pe, Ae]), Object(Ne.a)(qe, Mt, Ft);
				const nt = Pe.isSponsored ? Object(ge.b)(Pe.id, {
						fireAdPixelsOfType: d,
						openPost: he
					}) : o.a,
					ot = Object(y.a)(Y),
					rt = Object(C.a)(Y),
					it = Object(v.a)(Y),
					at = ot || rt,
					pt = ((e, t, s) => {
						const [n, o] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || o
					})(n, at, Pe),
					bt = !!Pe.media && (Pe.media.type === F.o.RTJSON || Pe.media.type === F.o.TEXT),
					gt = We && bt,
					xt = Object(ie.d)(Pe),
					Ct = Object(de.c)(Pe);
				let yt;
				const kt = !($ && ot),
					wt = Object(fe.b)({
						hide: !$e && kt,
						editPost: !$e && kt,
						save: kt,
						report: !$e && kt
					}),
					It = Pe.removedByCategory === M.g.AuthorDeleted,
					St = n && (n.displayText === Pe.author || n.username === Pe.author),
					Nt = !!Pe.unrepliableReason,
					Tt = !(Nt && ze) && !It && !Pt(Pe) && (St || O || !(Pe.removedByCategory && Pe.media && (Object(F.M)(Pe.media) || Object(F.K)(Pe.media) || Object(F.E)(Pe.media)))),
					Lt = Object(m.t)(Pe, g),
					{
						source: Rt
					} = Lt,
					Dt = Pe.removedByCategory === M.g.Reddit && Object(b.e)(Pe.created) > 24,
					Ut = Pe.removedByCategory && Pe.removedByCategory !== M.g.Reddit || Dt,
					Vt = !Ut && !Pe.isArchived,
					Wt = Object(r.useCallback)(() => {
						ce(L ? M.f.UNFOLLOWED : M.f.FOLLOWED), Ge(L ? Object(k.n)(Pe.id) : Object(k.c)(Pe.id))
					}, [ce, Ge, L, Pe.id]),
					zt = i.a.createElement(Ot, {
						post: Pe,
						innerRef: qe,
						size: ve.b.ExtraLarge,
						isOverlay: B,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Ht = i.a.createElement(ct.a, {
						post: Pe,
						showViewCount: pt
					}),
					Gt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Ie.g.Classic : Object(Me.c)(n) ? Ie.g.Large : Object(Fe.b)(n) ? Ie.g.Large : t ? Ie.g.Large : n.media && !Pt(n) ? Ie.g.Large : Ie.g.Medium
					})(e),
					qt = Object(a.e)(ht.b),
					Kt = Object(se.b)(Pe),
					Yt = () => {
						const t = !(Nt && Ze && Ke),
							n = Object(F.I)(Pe);
						return Nt && n ? i.a.createElement(ft, null) : Ze && Ke ? i.a.createElement(Je, {
							onBannerClick: () => Ye(!1),
							isExpandable: Qe
						}) : Pe.source && Gt === Ie.g.Medium ? i.a.createElement(_e.a, {
							post: Pe,
							isCommentsPage: w,
							pageLayer: He
						}) : Tt && !N && Gt === Ie.g.Large ? i.a.createElement(xe.a, {
							className: Object(u.a)(vt.a.LargePostMedia, {
								[vt.a.isCommentsPage]: w
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: B,
							isOverlay: B,
							post: Pe,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !B,
							showCentered: !0,
							showPromotedCTA: Ue,
							scrollerItemRef: Le
						}) : t && Gt === Ie.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(_t, {
							crosspost: s || void 0,
							isExpanded: !!T,
							post: Pe,
							useMediaIcons: !1
						}), Bt(e)) : null
					};
				if (Gt === Ie.g.Classic) {
					const e = Object(x.a)(Pe);
					yt = i.a.createElement("div", {
						"data-test-id": we.e
					}, i.a.createElement(Ce.a, {
						model: Pe,
						handleVote: je,
						isCountAnimShadowTestEnabled: I,
						isOverlay: B,
						isVoteCountAnimation: H,
						postId: Pe.id
					}), i.a.createElement("div", {
						className: vt.a.mainBody
					}, i.a.createElement("div", {
						className: vt.a.content
					}, i.a.createElement(ye.a, {
						hideAwards: Be,
						hideNSFWPref: h,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: S,
						isInModNotesExperiment: !!A,
						isOverlay: !!B,
						isTopicPage: !1,
						post: Pe,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!B && !Pe.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Vt && !e,
						isFollowed: L,
						onFollowPostClick: Wt
					}), zt, i.a.createElement(ee.a, {
						className: w ? vt.a.leftPadding : void 0,
						post: Pe,
						sendEvent: Re
					}), $ && ot && Ct && i.a.createElement(ae.a, {
						onIgnoreReports: ue,
						reportable: Pe
					}), i.a.createElement(ne.d, null), i.a.createElement("div", {
						className: vt.a.FlatlistContainer
					}, Yt(), Be && i.a.createElement(K.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: Pe,
						tooltipType: B ? Oe.c.Lightbox : void 0
					}), i.a.createElement(Et, {
						currentUser: n,
						hasModFlairPerms: rt,
						hasModFullPerms: it,
						hasModPostPerms: ot,
						isOverlay: B,
						onIgnoreReports: ue,
						onOpenReportsDropdown: pe,
						modModeEnabled: $,
						post: Pe,
						showUpvotePercent: !0,
						showViewCount: pt,
						useFlatlistBreakpoints: wt,
						isCommentCountAnimation: j,
						isCountAnimShadowTestEnabled: I
					}))), e && i.a.createElement(At, {
						post: Pe,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Vt,
						isFollowed: L,
						onFollowPostClick: Wt
					})))
				} else if (Gt === Ie.g.Medium) {
					const e = Object(x.a)(Pe);
					yt = i.a.createElement("div", {
						"data-test-id": we.e
					}, i.a.createElement(Ce.a, {
						model: Pe,
						handleVote: je,
						isCountAnimShadowTestEnabled: I,
						isOverlay: B,
						shouldShowUpvoteRatioOnHover: $e,
						isVoteCountAnimation: H,
						postId: Pe.id
					}), i.a.createElement("div", {
						className: vt.a.mainBody
					}, i.a.createElement("div", {
						className: vt.a.content
					}, i.a.createElement(ye.a, {
						hideAwards: Be,
						hideNSFWPref: h,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: S,
						isInModNotesExperiment: !!A,
						isOverlay: !!B,
						isTopicPage: !1,
						post: Pe,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!B && !Pe.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Vt && !e,
						isFollowed: L,
						onFollowPostClick: Wt
					}), zt, Yt(), Object(F.O)(Pe) && jt, i.a.createElement(ee.a, {
						className: w ? vt.a.leftPadding : void 0,
						post: Pe,
						sendEvent: Re
					}), Ve && Ut && i.a.createElement(dt, {
						isAdminOrMod: O,
						post: Pe,
						subredditOrProfile: Ve
					}), $ && ot && Ct && i.a.createElement(ae.a, {
						onIgnoreReports: ue,
						reportable: Pe
					})), e && !Xe && i.a.createElement(oe.a, {
						post: Pe,
						forceShowNSFW: !0,
						hasModPostPerms: at,
						isCommentsPage: w,
						isOverlay: !0,
						modModeEnabled: $,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Vt,
						isFollowed: L,
						onFollowPostClick: Wt
					})), i.a.createElement(ne.d, null), Be && i.a.createElement(K.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: Pe,
						tooltipType: B ? Oe.c.Lightbox : void 0
					}), !!qt && i.a.createElement(E.a, {
						itemIds: Kt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Pe,
						size: "small"
					}), i.a.createElement("div", {
						className: vt.a.controlsContainer
					}, i.a.createElement(te.c, {
						currentUser: n,
						hasModFlairPerms: rt,
						hasModFullPerms: it,
						hasModPostPerms: ot,
						isOverlay: B,
						modModeEnabled: $,
						onIgnoreReports: ue,
						onOpenReportsDropdown: pe,
						post: Pe,
						showEditPost: gt,
						showEditFlair: De,
						tooltipType: B ? Oe.c.Lightbox : void 0,
						useFlatlistBreakpoints: wt,
						isCommentCountAnimation: j,
						isCountAnimShadowTestEnabled: I,
						shouldHideItems: $e
					}), et && i.a.createElement(Ee.a, {
						isReadingIndicatorsExperiment: D,
						isReadingIndicatorsReadLoadTest: U,
						isReadingIndicatorsWriteLoadTest: V,
						isTypingIndicatorsExperiment: W,
						isTypingIndicatorsReadLoadTest: z,
						postId: Pe.id
					}), !$e && Ht))
				} else Gt === Ie.g.Large && (yt = i.a.createElement("div", {
					"data-test-id": we.e
				}, i.a.createElement(Ce.a, {
					model: Pe,
					handleVote: je,
					isCountAnimShadowTestEnabled: I,
					isOverlay: B,
					shouldShowUpvoteRatioOnHover: $e,
					isVoteCountAnimation: H,
					postId: Pe.id
				}), Object(Me.c)(Pe) && i.a.createElement(i.a.Fragment, null, i.a.createElement(J.a, {
					post: Pe
				}), i.a.createElement(Z.a, {
					post: Pe
				})), !Object(Me.c)(Pe) && i.a.createElement(i.a.Fragment, null, i.a.createElement(ye.a, {
					forceOpenInNewTab: p,
					hideAwards: Be,
					hideNSFWPref: h,
					inSubredditOrProfile: !0,
					isCommentsPage: w,
					isCurrentUserProfilePost: S,
					isInModNotesExperiment: !!A,
					isOverlay: !!B,
					isTopicPage: !1,
					post: Pe,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!B && !Pe.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ve,
					shouldShowFollowButton: Vt,
					isFollowed: L,
					onFollowPostClick: Wt
				}), zt, ((e, t, s, n) => e.source && !t && (s || n))(Pe, s, B, w) && i.a.createElement(_e.a, {
					post: Pe,
					isCommentsPage: w,
					pageLayer: He
				})), i.a.createElement(ee.a, {
					className: w ? vt.a.leftPadding : void 0,
					post: Pe,
					sendEvent: Re
				}), Ve && Ut && i.a.createElement(dt, {
					isAdminOrMod: O,
					post: Pe,
					subredditOrProfile: Ve
				}), N && i.a.createElement(be, {
					post: Pe
				}), Yt(), Ue && Rt && Rt.url && !Pe.isSurveyAd && i.a.createElement(G.a, {
					className: vt.a.adLinkWrapper
				}, i.a.createElement(q.a, {
					post: Pe,
					adLinkContent: Lt
				})), $ && ot && xt && i.a.createElement("div", {
					className: vt.a.modModeBannerWrapper
				}, i.a.createElement(re.a, {
					thing: Pe
				})), $ && ot && Ct && i.a.createElement("div", {
					className: vt.a.modModeBannerWrapper
				}, i.a.createElement(ae.a, {
					onIgnoreReports: ue,
					reportable: Pe
				})), Object(Fe.b)(Pe) && i.a.createElement(Q.a, {
					post: Pe
				}), i.a.createElement(ne.d, null), Be && i.a.createElement(K.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: Pe,
					tooltipType: B ? Oe.c.Lightbox : void 0
				}), !!qt && i.a.createElement(E.a, {
					itemIds: Kt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Pe,
					size: "small"
				}), i.a.createElement("div", {
					className: vt.a.controlsContainer
				}, i.a.createElement(te.c, {
					currentUser: n,
					forceOpenInNewTab: p,
					hasModFlairPerms: rt,
					hasModFullPerms: it,
					hasModPostPerms: ot,
					isOverlay: B,
					modModeEnabled: $,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: Pe,
					showEditPost: gt,
					showEditFlair: De,
					tooltipType: B ? Oe.c.Lightbox : void 0,
					useFlatlistBreakpoints: wt,
					isCommentCountAnimation: j,
					isCountAnimShadowTestEnabled: I,
					shouldHideItems: $e
				}), et && i.a.createElement(Ee.a, {
					isReadingIndicatorsExperiment: D,
					isReadingIndicatorsReadLoadTest: U,
					isReadingIndicatorsWriteLoadTest: V,
					isTypingIndicatorsExperiment: W,
					isTypingIndicatorsReadLoadTest: z,
					postId: Pe.id
				}), !$e && Ht)));
				const Qt = Object(r.useCallback)((e, t) => Object(k.h)(e, t), []);
				return i.a.createElement(le.a, {
					className: Object(u.a)(t, vt.a.postContainer, {
						[vt.a.hasEventMeta]: Object(Se.a)(Pe)
					}),
					isOverlay: B,
					post: Pe,
					eventFactory: B ? _.b : Qt,
					onClick: nt
				}, i.a.createElement(X.a, {
					post: Pe
				}), yt)
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
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: g,
					isOverlay: x,
					isVoteCountAnimation: f,
					postId: C,
					shouldShowUpvoteRatioOnHover: v
				} = e, y = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), o.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: y,
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
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(k);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: o,
				hideNSFWPref: k,
				hostPostData: j,
				iconClassName: w,
				inSubredditOrProfile: I,
				isCommentsPage: P,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: N,
				isInModNotesExperiment: T,
				isOverlay: L,
				isTopicPage: F,
				listingKey: M,
				post: R,
				shouldShowSubscribeButton: A,
				showCornerOutboundLink: B,
				showSubreddit: D,
				showSubredditIcon: U,
				subredditOrProfile: V,
				isFollowed: W,
				shouldShowFollowButton: z,
				onFollowPostClick: H
			}) => {
				const G = o || F,
					q = V && Object(O.h)(V),
					K = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(_.Cb)(e, R.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(E.a.container, e)
				}, D && V && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, U && r.a.createElement(p.b, {
					className: Object(a.a)(E.a.subredditIcon, w),
					shouldHideNsfwIcon: k,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, D && r.a.createElement(c.h, {
					type: R.belongsTo.type,
					id: R.belongsTo.id
				}), r.a.createElement(u.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					isInModNotesExperiment: T,
					tooltipType: L ? u.c.Lightbox : void 0,
					post: R,
					showSub: D,
					subredditOrProfile: V
				}), r.a.createElement(m.a, {
					className: E.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: S,
					post: R,
					tooltipType: L ? u.c.Lightbox : void 0
				}), !G && r.a.createElement(d.a, {
					isPostDetail: P,
					thing: R,
					tooltipType: L ? u.c.Lightbox : void 0
				})), V && K && D && A && !N && r.a.createElement(b.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(C.h)(R.id, e ? "unsubscribe" : "subscribe", "post", M, j),
					identifier: {
						name: V.name,
						type: q ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: R.id,
					size: x.d.XS
				}), B && r.a.createElement(f.b, {
					isSponsored: R.isSponsored,
					postId: R.id,
					href: Object(y.D)(R),
					source: R.source
				}, r.a.createElement(v.a, {
					className: E.a.outboundLinkIcon
				})), z && K && r.a.createElement(l.a, {
					isFilled: !!W,
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
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				y = s("./src/reddit/helpers/postCollection.ts"),
				O = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				j = s("./src/reddit/selectors/commentsListTruncated.ts"),
				w = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				P = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				L = s("./src/lib/classNames/index.ts"),
				F = s("./src/reddit/constants/listings.ts"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(B);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var V = Object(m.a)(e => {
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
					return o ? (c = F.c[F.b.Popular], d = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(R.c)(r.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(M.a, {
						className: Object(L.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(A.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				z = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				H = s.n(z);
			const G = Object(c.a)((e, {
					isOverlay: t
				}) => t, j.a, w.b, (e, t, s) => !((!t || s) && e)),
				q = Object(c.a)((e, {
					post: t
				}) => !!t && Object(y.a)(t), (e, {
					awaitAllCommentsRendered: t
				}) => t, T.N, T.O, E.d, G, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				K = Object(c.a)((e, {
					post: t
				}) => t, I.c, N.Y, N.ib, (e, t, s, n) => {
					const o = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (e && (r = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: n
						}), t && e && o) {
						const {
							isEligibleForLinkedPosts: o,
							id: a
						} = e;
						i = Object(u.a)(a, Object(I.a)(t) || !o), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: o,
							shouldShowLinkedPosts: o && !Object(f.zf)(t) && !Object(I.a)(t),
							subreddit: n
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: o,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				Y = Object(c.c)({
					listingBelowLinkedPostsData: K,
					nsfwListingBelowVariant: P.a,
					shouldShowListingBelow: q,
					shouldShowNsfwListingBelow: S.b
				}),
				Q = Object(d.b)(Y, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.W.HOT,
						subredditName: t
					}))
				}));
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(x.d) : null, this.onViewed = (e, t) => Object(k.f)({
						key: this.listingKey(),
						sort: l.W.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.hc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(_.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						shouldShowNsfwListingBelow: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: n,
						subredditOrProfile: o
					} = this.props;
					return s ? t : e && n && n.id ? Object(W.a)(n.id) : Object(p.a)(o.name, l.W.TOP, {
						t: l.hc.WEEK
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
					if (c && !Object(f.zf)(c) && !Object(I.a)(c) && !i) return a.a.createElement("div", {
						className: H.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(O.a)(r.newCommunityTheme.canvas);
					let u = null;
					return u = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(I.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === f.be.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: H.a.smallBanner,
						style: {
							color: m
						}
					}, u)
				}
				render() {
					const {
						contentContainerRef: e,
						listingBelowLinkedPostsData: t,
						shouldShowListingBelow: s,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: H.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: H.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: C.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: H.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: H.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					}))
				}
			}
			t.a = Q(Object(m.a)(Object(g.c)(Z)))
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
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: n
			}) => o.a.createElement("div", {
				className: e
			}, o.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === n && o.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === n && o.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
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
			t.a = Object(r.b)((e, {
				postId: t
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(d.D)(e) && !Object(a.a)(e)
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...n
			}) => e ? o.a.createElement(c.a, n) : null)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/location.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				b = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = s("./src/reddit/selectors/meta.ts"),
				f = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(f);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.a("Link", C.a), O = Object(i.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: g.a,
				countryCode: x.b
			}), _ = Object(r.b)(O), k = Object(u.u)({
				isFrontpage: u.A,
				isCountrySitePage: u.y
			});
			t.a = k(_(Object(c.c)(e => {
				const t = Object(r.f)().getState(),
					s = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? o.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, v._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), o.a.createElement("div", {
					className: C.a.Copyright
				}, v._("© {year} Reddit, Inc. All rights reserved.", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return s.includes(t) || "en" === t ? o.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				return o.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, v._("help", null, {
					hk: "4lyYaD"
				})), o.a.createElement(y, {
					href: "https://www.reddit.com/coins"
				}, v._("Reddit coins", null, {
					hk: "32iMaN"
				})), o.a.createElement(y, {
					href: "https://www.reddit.com/premium"
				}, v._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, v._("Communities", null, {
					hk: "3CJu37"
				})), o.a.createElement(y, {
					href: `https://www.reddit.com${Object(p.a)()}`
				}, v._("Rereddit", null, {
					hk: "1z3k7C"
				})), o.a.createElement(y, {
					href: "https://www.reddit.com/topics/a-1/"
				}, v._("Topics", null, {
					hk: "349RFt"
				}))), !!m.b[e.countryCode] && o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, v._("Impressum", null, {
					hk: "4cKXSI"
				})), o.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, v._("Transparency report", null, {
					hk: "3CgBdG"
				})), o.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, v._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(y, {
					href: "https://about.reddit.com"
				}, v._("about", null, {
					hk: "1sqJKs"
				})), o.a.createElement(y, {
					href: "https://about.reddit.com/careers/"
				}, v._("careers", null, {
					hk: "26ABvc"
				})), o.a.createElement(y, {
					href: "https://about.reddit.com/press/"
				}, v._("press", null, {
					hk: "2Qmgdz"
				})), o.a.createElement(y, {
					href: "https://www.redditinc.com/advertising"
				}, v._("advertise", null, {
					hk: "Mt40U"
				})), o.a.createElement(y, {
					href: "http://www.redditblog.com/"
				}, v._("blog", null, {
					hk: "46IQJw"
				})), o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("Terms", null, {
					hk: "4qRzfE"
				})), o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				})), o.a.createElement(y, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, v._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && o.a.createElement("div", {
					className: C.a.CountryLinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), o.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"))), o.a.createElement("div", {
					className: C.a.Copyright
				}, v._("Reddit Inc © {year}. All rights reserved", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = ({
					className: e,
					isOverlay: t,
					style: s
				}) => a.a.createElement("div", {
					className: Object(n.a)(e, u.a.container),
					style: s
				}, a.a.createElement(l.l, {
					className: u.a.button,
					onClick: () => h(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(C),
				y = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = d.e[1] + 24,
				k = x.f + 8,
				E = k + 152 + 16,
				j = E + _ + 8,
				w = y.a.div("Container", v.a),
				I = y.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => a.a.createElement(b, O({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?k:8}px)`
					}
				}, s)), "BackToTop", v.a),
				P = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: o
				}) => a.a.createElement("div", {
					className: Object(n.a)(t, {
						[v.a.StickyStyles]: o && !s,
						[v.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class S extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > E
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: o,
							hideFooter: r,
							pageLayer: i
						}
					} = this, d = this.state.isAdSticky && !(!t && !n);
					return a.a.createElement(w, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(P, {
						isFakeOverlay: s,
						isSticky: d
					}, t, n, !r && a.a.createElement(g.a, null)), !this.props.hideBackToTop && a.a.createElement(I, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const N = Object(f.u)();
			t.a = N(S)
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
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Footer/index.tsx"),
				l = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				m = s.n(l),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/actions/login.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/selectors/telemetry.ts");
			const f = "nsfw_dialog";
			var C = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const v = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				y = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				O = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				_ = e => {
					const t = Object(r.d)(),
						s = Object(h.b)();
					return o.a.createElement("div", {
						className: Object(d.a)(m.a.mainCta)
					}, o.a.createElement("img", {
						src: v
					}), o.a.createElement("div", {
						className: m.a.cta
					}, (() => u.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), o.a.createElement("div", {
						className: m.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: m.a.warning
					}, (() => u.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: m.a.buttonContainer
					}, o.a.createElement(g.j, {
						className: Object(d.a)(m.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(x.o)(e),
								source: "xpromo",
								action: "click",
								noun: f
							}))()), t(Object(p.i)())
						}
					}, (() => u.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(g.j, {
						className: m.a.cancel,
						onClick: () => {
							s((() => e => ({
								...Object(x.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: f
							}))()), t(Object(i.b)("/"))
						}
					}, (() => u.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				k = e => o.a.createElement("div", {
					className: m.a.qrCodeOuter
				}, o.a.createElement("div", {
					className: m.a.qrCodeInner
				}, o.a.createElement("img", {
					className: m.a.qrCode,
					src: e.qrCodeAsset
				}), o.a.createElement("div", {
					className: m.a.copyLine1
				}, (() => u.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), o.a.createElement("div", {
					className: m.a.copyLine2
				}, (() => u.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), o.a.createElement("img", {
					className: m.a.sneakySnoo,
					src: y
				}))),
				E = e => {
					const t = Object(h.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(x.o)(e),
							source: "xpromo",
							action: "view",
							noun: f
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(r.e)(C.b) === b.ec.Enabled ? O.d2x_nsfw_signup_blocking_de_v1 : O.d2x_nsfw_signup_blocking_non_us_v1;
					return o.a.createElement("div", {
						className: m.a.container
					}, o.a.createElement(_, {
						contentTitle: s
					}), o.a.createElement("div", {
						className: m.a.footerWrapper
					}, o.a.createElement(c.a, null)), o.a.createElement(k, {
						qrCodeAsset: n
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
				importAsync: () => s.e("ReredditLink").then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
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
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = v(e);
					return Object(f.f)(t)
				},
				_ = e => {
					const t = y(e);
					return Object(f.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(k);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(m.u)(), I = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						o = Object(x.bb)(e);
					return n || o
				},
				nigtmode: x.bb,
				subredditId: m.n,
				topPostVariant: b.d
			}));
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = s ? E.a.widgetContentOnly : E.a.widgetContent, g = !n && this.props.styles, x = g ? this.getWidgetBackgroundStyles() : {}, f = g ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: n,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: x
					}, m && o.a.createElement("div", {
						className: Object(a.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: i,
						style: f,
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(E.a.widgetTitle, p)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(b, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = w(I(Object(d.a)(Object(l.c)(P))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return w
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
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function _() {
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
			const k = _(),
				E = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: C.g,
					postsById: v.S,
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: n
					}) => Object(v.D)(e, t, s, n)),
					subredditsById: y.Z,
					viewportDataLoaded: O.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.e
				},
				j = Object(o.c)(E),
				w = e => ({
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
					trackOnPostExitedViewport: (t, s, n, o, r) => {
						e(c.P(t, n, o, r))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				I = e => Object(h.b)({
					...e
				}),
				P = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(b.h)(e, t, "post", o, r, i, void 0)
				},
				S = Object(n.b)(j, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: P
				}));
			t.a = e => Object(u.c)(k(S(e)))
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
		"./src/reddit/constants/location.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/redditGQL/types.ts");
			const o = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				r = {
					[n.e.De]: o[n.e.De],
					[n.e.At]: o[n.e.At]
				}
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(u),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, g({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle,
					[b.a.modNotes]: t.isModNotesStyle
				});
				return i.a.createElement(x, g({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(n.f)(s));
				return t
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
			t.a = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: c,
				response: l
			}) => {
				if (!l.ok) return void t(l.error);
				const m = l.body,
					{
						post: u
					} = m && m.data,
					p = e(),
					h = Object(n.a)(c, null, {
						isOtherDiscussions: !0
					});
				if (u) {
					if (u.otherDiscussions && u.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = u, {
							postFlair: n,
							postIds: l,
							posts: m,
							profiles: b,
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
						s({
							count: t,
							key: h,
							meta: p.meta,
							postFlair: n,
							postId: c,
							postIds: l,
							posts: m,
							profiles: b,
							subreddits: g
						})
					}
				} else s({
					count: 0,
					key: h,
					meta: p.meta,
					postFlair: {},
					postId: c,
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
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: r.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const o = Object(n.a)(t);
							if (!o) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(o.hostname)) return;
							const i = o.pathname.match(s.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = i[s + 1], e
									}), {})
								}
							}
						}(s, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(o);
			const i = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(n.a)(r.a.loadingBar, i(e))
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
					...n.o(s)
				}),
				r = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.o(s)
				}),
				i = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...n.o(e)
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
					...Object(n.o)(e),
					media: Object(n.B)(e, t),
					profile: Object(n.R)(e),
					subreddit: Object(n.ib)(e) || Object(n.lb)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.I)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.I)(t, e),
					...o(t, e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.wb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				d = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.I(s, e),
					subreddit: i.ib(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
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
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
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
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), o.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
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
			const c = ({
				className: e,
				isSubreddit: t,
				...s
			}) => o.a.createElement("svg", d({
				className: Object(r.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s), o.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
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
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				u = s("./src/reddit/components/LightboxHeader/index.tsx"),
				p = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/layout/page/Lightbox/index.m.less"),
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
			const y = Object(r.b)(() => Object(i.c)({
					showFPR: x.M,
					showSuspended: x.V,
					showOffline: e => e.connection.showBanner
				})),
				O = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...n
				}) => {
					const r = Object(g.a)({
						theme: s,
						...n
					});
					return o.a.createElement("div", v({
						className: Object(a.a)(C.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${p.h}px` : `${p.i}px`
						}
					}, n))
				});
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return o.a.createElement(m.a, {
							className: Object(a.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, o.a.createElement(u.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(O, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = y(_)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp",
				offline: "Jvy6k8geBbRljwIwFTLRo",
				navExperiment: "_1BAfE2MtXRmb69Ht2TsVN-"
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
				h = s("./src/reddit/helpers/history/index.ts"),
				b = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/pages/CommentsPage/index.tsx"),
				f = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js");

			function y() {
				return (y = Object.assign || function(e) {
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
				}, d.a.createElement(x.CommentsPage, y({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(f.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, u.b.IsOverlay, !1), n = i()(t, u.b.CloseLocation, null), r = i()(t, u.b.ScrollOnLoad, !1);
				r && Object(h.c)(u.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: p,
						subredditName: x,
						collectionId: f
					} = a,
					C = p ? Object(g.t)(p) : void 0,
					v = c && Object(b.h)(c),
					y = o()([...Object(l.a)(e.location.search)]),
					_ = {};
				e.hasSortParam && (_.sort = e.sort, _.hasSortParam = !0);
				const k = Object(m.a)(f, C, v, _);
				return d.a.createElement(O, {
					closeLocation: n,
					collectionId: f,
					commentId: v,
					commentsPageKey: k,
					isOverlay: s,
					location: e.location,
					postId: C,
					instanceId: y.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: x,
					onOtherDiscussions: !!y.onOtherDiscussions
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
				return _
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
				h = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				C = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				v = s.n(C);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: f.a,
				headComment: x.x,
				post: x.H
			}), _ = e => {
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
						isOverlay: _,
						postId: k
					} = e;
				if (!x) return null;
				const E = null !== (t = x.numDuplicates) && void 0 !== t ? t : 0,
					j = void 0 !== C,
					w = x.permalink,
					I = E > 0,
					P = Object(u.b)(Object(d.e)(w));
				return j || I ? o.a.createElement("div", {
					className: v.a.CommentsNavigationPane
				}, j && o.a.createElement("div", null, o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: _,
					to: Object(u.b)(w),
					onClick: () => f(Object(b.i)(k, i, s))
				}, y._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					isOverlay: _,
					to: Object(u.b)(i.permalink + "?context=8&depth=9")
				}, y._("Show parent comments", null, {
					hk: "AVRCa"
				}))), I && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(c.a, {
					postId: k
				}), o.a.createElement(l.a, {
					className: Object(a.a)(v.a.OtherDiscussionsLink, {
						[v.a.discoveryExperimentLink]: n
					}),
					isOverlay: _,
					onClick: () => f(n ? Object(p.b)() : Object(h.a)(k)),
					to: P
				}, n ? o.a.createElement(o.a.Fragment, null, y._("View all", null, {
					hk: "30twDK"
				}), ` (${E})`) : y._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [y._plural(E, "other discussion communities count")], {
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
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return wt
			})), s.d(t, "CommentsPage", (function() {
				return Ft
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
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				f = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				O = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				E = s("./src/lib/performanceTimings/index.tsx"),
				j = s("./src/reddit/actions/ads/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				N = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/pages/comments.ts"),
				F = s("./src/reddit/actions/reportFlow/index.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/actions/upvotePrompt.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				B = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				D = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				U = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				V = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				W = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				z = s("./src/reddit/constants/componentSizes.ts"),
				H = s("./src/reddit/constants/elementIds.ts"),
				G = s("./src/reddit/constants/history.ts"),
				q = s("./src/reddit/constants/keycodes.ts"),
				K = s("./src/reddit/constants/posts.ts"),
				Y = s("./src/reddit/constants/screenWidths.ts"),
				Q = s("./src/reddit/contexts/ApiContext.tsx"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				X = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				$ = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ee = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/reddit/selectors/upvotePrompt.ts"),
				ne = s("./src/reddit/featureFlags/profileCollections.ts"),
				oe = s("./src/reddit/contexts/Post/index.tsx"),
				re = s("./src/reddit/models/Comment/index.ts"),
				ie = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/reddit/models/Subreddit/index.ts"),
				de = s("./src/reddit/selectors/chatPost.ts"),
				ce = s("./src/reddit/selectors/comments.ts"),
				le = s("./src/reddit/selectors/commentSelector.ts"),
				me = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ue = s("./src/reddit/selectors/creatorStats.ts"),
				pe = s("./src/reddit/selectors/discoveryUnit.ts"),
				he = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				be = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ge = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				xe = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				fe = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				Ce = s("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				ve = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ye = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Oe = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				_e = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				ke = s("./src/reddit/selectors/meta.ts"),
				Ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				je = s("./src/reddit/selectors/posts.ts"),
				we = s("./src/reddit/selectors/tooltip.ts"),
				Ie = s("./src/reddit/selectors/user.ts"),
				Pe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Se = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ne = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Te = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Le = s("./src/reddit/components/Comments/index.tsx"),
				Fe = s("./src/reddit/components/Comments/States/index.tsx"),
				Me = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Re = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ae = s("./src/reddit/components/CommentSort/index.tsx"),
				Be = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				De = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ue = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Ve = s("./src/reddit/components/HeaderImage/index.tsx"),
				We = s("./src/reddit/components/Hovercards/helpers.ts"),
				ze = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				He = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Ge = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				qe = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ke = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ye = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Qe = s("./src/reddit/components/PostContent/index.tsx"),
				Ze = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				Je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Xe = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				$e = s("./src/reddit/components/SubredditNav/index.tsx"),
				et = s("./src/reddit/components/TrackingHelper/index.tsx"),
				tt = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				st = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				nt = s("./src/reddit/helpers/history/index.ts"),
				ot = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				rt = s("./src/reddit/helpers/name/index.ts"),
				it = s("./src/reddit/helpers/postCollection.ts"),
				at = s("./src/reddit/helpers/resonatePage/index.ts"),
				dt = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ct = s("./src/reddit/helpers/trackers/screenview.ts"),
				lt = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				mt = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				ut = s("./src/reddit/layout/page/Listing/index.tsx"),
				pt = s("./src/reddit/models/ContentGate.ts"),
				ht = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				bt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				gt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				xt = s.n(gt);

			function ft() {
				return (ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ct = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				vt = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				yt = 200,
				Ot = 80,
				_t = 32,
				kt = Object(n.a)({
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
				Et = Object(n.a)({
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
				jt = Object(n.a)({
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
				wt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(_.a)(e) : s,
				It = e => {
					const {
						state: t
					} = e.location, s = a()(t, G.b.IsOverlay, !1), n = a()(t, G.b.CloseLocation, null), o = a()(t, G.b.ScrollOnLoad, !1);
					o && Object(nt.c)(G.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(ie.t)(i), l = r && Object(re.h)(r);
					return m.a.createElement(oe.a, {
						postId: c
					}, m.a.createElement(Ft, {
						closeLocation: n,
						commentId: l,
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
				Pt = Object(Z.u)(),
				St = () => Object(h.c)({
					apiError: ce.c,
					apiPending: ce.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(je.U)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					canShowCrosspostRecommendationsModal: (e, {
						postId: t
					}) => Object(X.a)(e, t),
					canViewCreatorStats: (e, {
						postId: t
					}) => Object(ue.a)(e, t),
					comment: le.b,
					communityBannerDiscoveryUnit: pe.a,
					isSubredditDiscoveryCrosspostEnabled: Oe.a,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(Ie.f)(e, t),
					currentUserShowNSFW: Ie.ib,
					dismissedSubreddits: he.a,
					fullyLoaded: ce.u,
					hasModeratorPostPermissions: Ee.c,
					headComment: ce.x,
					isActionBarAnimationEnabled: ee.b,
					isAvatarsInCommentsEnabled: ge.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(je.w)(e, {
						postId: t
					}) && Object(be.a)(e),
					isCountAnimShadowTestEnabled: ee.e,
					isCrawler: (e, t) => !!Object(ke.c)(e),
					isCreatorStatsEnabled: (e, {
						postId: t
					}) => Object(fe.a)(e, t),
					isCrosspostRecommendationsExperimentEnabled: X.b,
					isD2xSeoDisableLightboxEnabled: Ce.a,
					isEligibleForCommentTruncation: _e.a,
					isChatPost: de.d,
					isCommentsListTruncated: me.a,
					isLoggedIn: Ie.O,
					isNightmodeOn: Ie.bb,
					isTooltipOpen: (e, t) => !!Object(we.a)(e),
					origin: ke.j,
					post: je.G,
					postSEOV2IdCardVariant: ve.h,
					profileCollectionsEnabled: ne.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: n
					}) => Object(ce.s)(e, {
						commentsPageKey: wt({
							postId: t,
							commentId: s,
							commentsPageKey: n
						})
					}),
					shouldOpenPostInNewTab: Ie.hb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(te.u)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: je.U,
					userHovercardIsOpen: (e, t) => Object(we.b)(Object(We.b)({
						itemId: t.postId,
						tooltipIdPrefix: U.a,
						tooltipType: Je.c.StickyPost
					}))(e),
					userPrefs: Ie.Db,
					inResonatePilot: ye.a,
					isQualifiedForUpvotePrompt: se.c,
					isEligibleForNsfwSignupUpsellTreatment: (e, {
						postId: t
					}) => {
						const s = Object(je.U)(e, {
							postId: t
						});
						return !(!s || !s.isNSFW) && Object($.a)(e)
					},
					isTrueblockPCBlockeeEnabled: be.b,
					isInModNotesExperiment: (e, {
						subredditName: t
					}) => {
						const s = Object(te.D)(e, t);
						return !!s && Object(xe.a)(e, s)
					}
				}),
				Nt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(T.g)(D.a)),
					dismissTruncation: t => e(Object(Pe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(P.a)()),
					setCommentFocus: t => e(w.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(L.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(M.i)()),
					onToggleTooltip: t => e(Object(M.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(N.i)()),
					openRegisterModal: () => e(Object(N.j)()),
					openReportFlow: (t, s) => e(Object(F.c)(t, s)),
					goToSubredditPage: t => e(Object(p.b)(t)),
					truncateCommentsList: () => e(Object(P.b)()),
					fetchCommentsNativeAd: t => e(Object(j.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Se.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(R.b)(t, s, n))
					}
				}),
				Tt = Object(u.b)(St, Nt);
			class Lt extends m.a.Component {
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
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && y.a.write(() => {
							i(Object(We.b)({
								itemId: a,
								tooltipIdPrefix: U.a,
								tooltipType: Je.c.StickyPost
							}))
						}))
					}, C.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(dt.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(ie.s)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(st.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === q.b.F || e.keyCode === q.a.F,
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
						isUpvotePromptTriggered: !1
					}
				}
				hasCommentAdRef() {
					return this.commentAdRef && this.commentAdRef.clientHeight > 0
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				async componentDidMount() {
					var e;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, se.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isOverlay: o,
							post: r,
							shouldScrollToComments: i
						}
					} = this, a = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(a) && this.props.openReportFlow(this.props.postId, o), r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== K.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(H.d), i && (t || s || this.hasCommentAdRef()) && r && r.numComments ? this.scrollToComments() : y.a.write(() => {
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
							const s = null === (e = Object(ot.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(ie.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), y.a.read(() => {
							this.props.isOverlay || Object(E.d)(E.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Mb.includes(e) && Object(at.a)(e)
					}
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
					if (e.postId !== this.props.postId) {
						const e = this.props.post && Object(it.a)(this.props.post);
						this.props.post && this.props.post.numComments ? y.a.read(this.handleScroll) : y.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), y.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && y.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = z.b + (this.props.isOverlay ? z.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(H.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? _t : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && y.a.write(() => {
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = yt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = yt)
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
					y.a.read(() => {
						const e = document.getElementById(H.d);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - Ot, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - Ot, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), y.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => y.a.read(this.handleScroll))
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
					y.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						n(Object(ct.c)(t, s, e, x.TimerType.InApp, r, o))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: n,
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), i = Object(tt.a)(e, r, o);
					if (!i) return null;
					let a = m.a.createElement(jt, i);
					return s && (a = m.a.createElement(lt.a, {
						content: a
					})), a
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
						isD2xSeoDisableLightboxEnabled: u,
						isEligibleForCommentTruncation: p,
						isInModNotesExperiment: h,
						isLoggedIn: b,
						isNightmodeOn: g,
						isOverlay: x,
						post: v,
						postId: y,
						postSEOV2IdCardVariant: O,
						profileCollectionsEnabled: _,
						sendEvent: k,
						sort: E,
						subredditOrProfile: j,
						isEligibleForNsfwSignupUpsellTreatment: w,
						subredditName: I
					} = this.props;
					if ((null == v ? void 0 : v.isNSFW) && I && w) return m.a.createElement(W.a, {
						contentTitle: Object(rt.c)(I)
					});
					const P = Object(ve.f)(O);
					if (!v) {
						if (t) return m.a.createElement(Fe.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.o ? m.a.createElement(jt, {
							contentGateType: pt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Fe.d, {
							postId: y,
							commentId: r,
							apiError: e,
							sort: E
						}) : m.a.createElement(Fe.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const S = this.isCommentPermalink(),
						N = v.belongsTo.type === K.a.PROFILE,
						T = Object(it.a)(v) && (!N || _),
						L = !b,
						F = j && j.isQuarantined,
						M = !p && !this.state.allCommentsRendered && !c,
						R = l && s;
					return Ct.input.channel.postID = y, m.a.createElement(Rt, {
						closeLocation: o,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isD2xSeoDisableLightboxEnabled: u,
						isLoggedIn: b,
						isOverlay: x,
						isSwapVariant: P,
						post: v,
						subredditOrProfile: j,
						shouldFitPageToContent: L,
						isCollectionLayout: T
					}, m.a.createElement(Ye.a, {
						postId: y,
						isNightMode: g,
						isOverlay: x,
						commentId: r
					}), !x && m.a.createElement(Ze.a, {
						post: v
					}), F && m.a.createElement(qe.a, {
						subredditName: j.name
					}), m.a.createElement(Ke.a, null), m.a.createElement("div", {
						className: Object(f.a)(xt.a.PageContentWrapper, {
							[xt.a.LargePageContent]: T,
							[xt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, T && m.a.createElement(Et, {
						isOverlay: x,
						isNightmodeOn: g,
						postId: y
					}), m.a.createElement(vt, {
						condition: T,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: xt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Qe.c, {
						isCommentPermalink: S,
						isOverlay: x,
						isInModNotesExperiment: h,
						postId: y,
						redditStyle: x,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: k,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && !F && this.props.isCreatorStatsEnabled && m.a.createElement(Ue.a, {
						post: v,
						subreddit: j
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${v.id}`,
						isOverlay: x,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), j && !Object(ae.h)(j) && m.a.createElement(V.a, {
						awaitAllCommentsRendered: M,
						contentContainerRef: this.state.layoutRef,
						isOverlay: x,
						post: v,
						subredditOrProfile: j
					}), R && m.a.createElement(B.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: v,
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
						isCommentsListTruncated: p,
						isEligibleForCommentTruncation: h,
						isLoggedIn: g,
						isOverlay: x,
						location: C,
						onOtherDiscussions: v,
						openLoginModal: y,
						openRegisterModal: O,
						origin: _,
						post: E,
						postId: j,
						replyComment: w,
						sendEvent: P,
						sort: S,
						subredditAboutInfo: N,
						subredditOrProfile: T,
						isTrueblockPCBlockeeEnabled: L
					} = this.props;
					if (!E) return null;
					const F = this.isCommentPermalink(),
						M = [],
						R = E.isLocked && !s,
						A = !(F || E.isArchived || N && N.userIsBanned || E.authorIsBlocked && l || E.unrepliableReason && L);
					if (R) M.push(m.a.createElement(He.a, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (E.isArchived) M.push(m.a.createElement(ze.a, {
						key: "commentThreadBanner"
					}));
					else if (A && !u && !v)
						if (g) {
							const e = Object(k.a)(b.c.replyToPost, j);
							M.push(m.a.createElement(Ne.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: j,
								submitAction: ({
									validate: t,
									...s
								}, n) => t ? I.t(j, r, e, s, n) : I.n(j, r, e, s, n),
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else M.push(m.a.createElement(Te.a, {
							key: "loggedOutCommentForm",
							location: C,
							openLoginModal: y,
							openRegisterModal: O,
							origin: _
						}));
					if (E.contestMode && M.push(m.a.createElement(Ge.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), u || v || (this.props.isSubredditDiscoveryCrosspostEnabled ? M.push(m.a.createElement(ht.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: j
						}), m.a.createElement(Ae.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: C,
							postId: j,
							sort: S,
							suggestedSort: E.suggestedSort
						})) : M.push(m.a.createElement(Ae.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: C,
							postId: j,
							sort: S,
							suggestedSort: E.suggestedSort
						}), m.a.createElement(ht.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: j
						}))), M.push(m.a.createElement(Xe.a, {
							postId: j
						})), !t || d || u || v)
						if (!e || d || v)
							if (v) M.push(m.a.createElement(kt, {
								commentSort: S,
								key: "otherDiscussions",
								postId: j,
								isOverlay: x,
								postPermalink: E.permalink
							}));
							else if (u) {
						if (T && T.id) {
							const e = w ? Object(k.a)(b.c.replyToComment, w.id) : Object(k.a)(b.c.replyToPost, j),
								s = wt({
									postId: j,
									commentId: n,
									commentsPageKey: r
								});
							M.push(m.a.createElement(Me.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: j,
								renderedInOverlay: x,
								subredditId: T.id
							}, ({
								scrollToBottom: t
							}) => g ? m.a.createElement(Re.a, {
								key: "chatCommentsForm",
								postId: j,
								replyComment: w,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: P
							}) : m.a.createElement(Te.a, {
								key: "loggedOutCommentForm",
								className: xt.a.ChatLoggedOutForm,
								location: C,
								openLoginModal: y,
								openRegisterModal: O,
								origin: _
							})))
						}
					} else M.push(m.a.createElement("div", {
						className: Object(f.a)(xt.a.CommentsPaneWrapper, {
							[xt.a.mIsInOverlay]: x
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(De.a, ft({}, this.props, {
						shouldTruncateComments: h && p,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Le.a, {
						commentId: n,
						commentsPageKey: r,
						postId: j,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: x
					})))), e && d ? M.push(m.a.createElement(Fe.e, {
						key: "commentsErrorState",
						postId: j,
						commentId: n,
						sort: S,
						apiError: e
					})) : !i && t && M.push(m.a.createElement(Fe.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else M.push(m.a.createElement(Fe.e, {
						key: "errorState",
						postId: j,
						commentId: n,
						sort: S,
						apiError: e
					}));
					else this.didRenderLoading = !0, M.push(m.a.createElement(Fe.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(J.a.Provider, {
						value: this.sendEventWithName
					}, M)
				}
			}
			const Ft = Pt(Object(Q.b)(Tt(Object(et.c)(Lt)))),
				Mt = O.a.wrapped(Be.a, "DetailsPageSidebar", xt.a),
				Rt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isD2xSeoDisableLightboxEnabled: a,
						isLoggedIn: d,
						isOverlay: c,
						isSwapVariant: l,
						post: u,
						shouldFitPageToContent: p,
						subredditOrProfile: h
					} = e;
					if (!a && !d && !c) return m.a.createElement(mt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: u,
						sidebar: h && m.a.createElement(Be.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: u,
							subredditName: h.name,
							subredditId: h.id
						})
					});
					if (c) return m.a.createElement(lt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: h && m.a.createElement(Be.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: u,
							subredditName: h.name,
							subredditId: h.id
						})
					});
					const b = i ? z.i : Y.a;
					return m.a.createElement(ut.a, {
						containerRef: n,
						maxWidth: z.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: l,
						isCollectionLayout: i,
						navBar: h && m.a.Children.toArray([m.a.createElement(Ve.a, {
							key: h.name,
							disableFullscreen: !0,
							headerText: h.name,
							maxWidth: b,
							prefixedHeaderText: h.displayText,
							subredditOrProfile: h,
							url: h.url
						}), !Object(ae.h)(h) && m.a.createElement($e.a, {
							disableFullscreen: !0,
							homeUrl: h.url,
							maxWidth: b,
							subredditId: h.id
						})]),
						sidebar: h && m.a.createElement(Mt, {
							commentsPageKey: s,
							post: u,
							subredditName: h.name,
							subredditId: h.id
						})
					})
				};
			t.default = Object(bt.a)(It)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.t)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
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
							return o()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, a)
				},
				x = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(u.a)(e, s)
					}
				}),
				f = Object(a.b)(x);

			function C(e) {
				return f(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					};
					return i.a.createElement(e, a)
				})
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
				r = Object(n.a)((e, {
					subredditOrProfile: t
				}) => t, o, (e, t) => {
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
			const a = Object(n.a)(i.O, i.N, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.H
				}), e => e === o.P.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.t
				}) === n.w.Enabled,
				i = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Dc
				}) === n.dd
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.xc
				});
				return !(!t || Object(n.zf)(t))
			}
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					expEventOverride: t
				})
			}
			const l = c(o.Ib, !0),
				m = c(o.Ib, !1),
				u = c(o.Jb, !0),
				p = (c(o.Jb, !1), Object(n.a)(l, u, (e, t) => e === o.ec.Enabled || t === o.fc.Enabled))
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
				experimentName: n.Fe
			}) === n.Me.Enabled
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
				return h
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[o.bc.Bottom_cell_dismissible]: e,
						[o.bc.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.bc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.pb, !0),
				m = c(o.qb, !0),
				u = c(o.rb, !0),
				p = c(o.pb, !1),
				h = c(o.qb, !1),
				b = c(o.rb, !1)
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
						experimentName: n.Ve
					}) === n.dd
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Ue
					}) === n.dd
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
						experimentName: n.tf
					}) === n.dd
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.uf
					}) === n.dd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.sf
					});
					return t === n.lf.TypingIndicators || t === n.lf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.sf
					});
					return (null == t ? void 0 : t.variant) === n.lf.IndicatorsPlusCTA
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
				return y
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
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
					const n = Object(i.W)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, n, o) => {
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
				b = [3],
				g = Object(n.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const n = t.slice().sort();
					let o = -1;
					const i = Object(r.z)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = o + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !h(e, s, t, i, n);) s += 1;
							s < i.length && (a.push(s), o = s)
						}
					}), a
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(a.N)(e),
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
					return Boolean(t) && !Object(o.zf)(t)
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
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(o.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.G, a.N, a.O, r.g, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!o && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = new Date,
				d = a.getUTCFullYear(),
				c = a.getUTCMonth(),
				l = a.getUTCDate(),
				m = Date.UTC(2008, 0, 1),
				u = Date.UTC(d, c - 7, l),
				p = Object(n.a)(e => Object(r.f)(e), e => Object(o.a)(e), (e, {
					post: t
				}) => t && Object(i.U)(e, {
					postId: t.id,
					disallowProfile: !0
				}), (e, t, s) => e && !!t && !t.isNSFW && !!s && !s.isNSFW && !!t.created && t.created > m && t.created < u)
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"a841e19c0112"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"884fe97ace3f"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"c208a0fd3127"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"b2ec21536710"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"227d53f34fca"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"45324e6670a7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.98118d00edd11cfc7c0d.js.map