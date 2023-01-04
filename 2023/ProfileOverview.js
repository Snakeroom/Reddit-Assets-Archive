// https://www.redditstatic.com/desktop2x/ProfileOverview.0ffcad2571c829f8e7e8.js
// Retrieved at 1/4/2023, 12:40:04 PM by Reddit Dataminer v1.0.0
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

			function o(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === o(e)
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

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
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
				var m = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(a).join("|");
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
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, o, r, a, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (o = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = a)), this.__index__ >= 0
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
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/chat/controls/Svg/index.m.less"),
				c = s.n(i);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: a
					} = e;
				return o.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[c.a.disable]: s,
						[c.a.active]: n,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/contentGate.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts");
			const l = 3e4;
			let m;

			function u(e) {
				return t => {
					const s = Object(r.f)().getState(),
						u = Object(r.d)(),
						p = Object(d.a)(s),
						b = Object(c.S)(s),
						h = Object(i.c)(s),
						f = () => {
							Object(i.b)() && (u(a.o({
								over18: !1
							})), m && window.clearInterval(m))
						};
					return Object(n.useEffect)(() => (!b && h.isNewDesignVariant && p && (m = window.setInterval(f, l), f()), () => window.clearInterval(m)), [h.isNewDesignVariant, f, b, p]), o.a.createElement(e, t)
				}
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "i", (function() {
				return O
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				o = s.n(n),
				r = s("./node_modules/tlds/index.js"),
				a = s.n(r),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = o()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = u(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				x = o()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				v = o()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				g = p.normalize;
			p.normalize = e => {
				g.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const _ = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				y = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				O = e => {
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
				o = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(o.e)(e),
					a = encodeURIComponent(`${t}${r}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
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
				return x
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				a = s.n(r),
				i = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(c.Zc.Bottom_cell),
						t = Object(m.a)(c.Zc.Bottom_cell_dismissible),
						s = Object(m.a)(c.Zc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(c.Zc.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(c.Zc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(c.Zc.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
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
						} = Object(d.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(c.Zc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => a()(() => {
							if (!r && s) {
								const e = document.getElementById(i.e),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									a = r / 3,
									c = 2 * r;
								n >= (l ? a : c) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, f({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(o.c),
				a = Object(n.a)(o.b),
				i = Object(n.a)(o.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return I
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const x = [],
				v = (Object(u.a)((e, t) => {
					const s = v(e, t);
					if (!s) return x;
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : x
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				g = (e, t, s, n, o) => {
					const r = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== r && (!(r + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							r = o && Object(b.G)(e, {
								postId: n
							}) || null,
							a = o && Object(b.G)(e, {
								postId: o
							}) || null;
						return r && r.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				_ = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const o = s.slice().sort();
				let r = -1;
				const a = Object(b.z)(e, {
						listingKey: n.listingKey
					}),
					i = [];
				return _.forEach(t => {
					let s = r + t;
					if (!(s >= a.length)) {
						for (; s < a.length && !g(e, s, t, a, o);) s += 1;
						s < a.length && (i.push(s), r = s)
					}
				}), i
			});
			var y = s("./src/reddit/selectors/platform.ts");
			const E = Object(o.a)(a.f),
				O = Object(o.a)(a.d),
				k = Object(o.a)(a.g),
				C = Object(o.a)(a.c),
				j = Object(o.a)(a.e),
				w = (Object(o.a)(a.i), Object(o.a)(a.h), () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						a = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(r),
						d = (e => {
							const t = Object(f.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(r),
						u = Object(f.R)(r);
					if (a || !d) return;
					e(k());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(o(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (P(t)) {
								if (N(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (S(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										a = [n, o],
										i = Object(m.d)(a),
										c = Object(l.b)(a),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: r,
											lastLoadedEnv: "client"
										};
									e(E(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(O({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				P = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !N(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				I = () => async (e, t, s) => {
					var n, o;
					const a = t(),
						i = (e => e.focusedVerticals.lastLoadedEnv)(a);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(a) || null === i || "client" === i) {
						const s = null === (o = null === (n = Object(y.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							i = Object(f.S)(a);
						return Object(r.i)(() => e(w()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(j({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				r = s("./src/redditGQL/operations/SingleCommentById.json"),
				a = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/users.ts"),
				u = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				v = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				g = s("./src/reddit/actions/modQueue/constants.ts");
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.o:
							return t.payload;
						default:
							return e
					}
				},
				y = s("./src/reddit/reducers/pages/modHub/index.ts"),
				E = s("./src/reddit/selectors/modQueue.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				k = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: y.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: x.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: v.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: _
				}
			});
			const C = Object(c.a)(g.l),
				j = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = await ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						c = Object(b.a)(i.body.data.subredditInfoById);
					t(C(c))
				}, w = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(j(e))
				}, P = Object(c.a)(g.m), N = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: o
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, r = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == r ? void 0 : r.page) || "1",
								pageName: o,
								subredditName: n || (null == r ? void 0 : r.subreddit),
								queryParams: r
							}
						})(e),
						n = Object(E.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, S = [k.y.ApproveComment, k.y.ApproveLink, k.y.RemoveComment, k.y.RemoveLink, k.y.SpamComment, k.y.SpamLink], I = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: c,
						action: d
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(O.k)(l), b = S.includes(d), h = i === p, f = N(l, c);
					if (!b || h || !f) return;
					const x = await Object(u.b)(o(), {
						id: i
					}) || (null === (a = Object(O.Bb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					x && t(Object(m.z)(x)), t(P({
						targetID: c
					}))
				}, T = Object(c.a)(g.p), L = Object(c.a)(g.o), R = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var c, m, u, b, x, v;
					const g = Object(f.a)(e),
						_ = s(),
						y = null === (m = null === (c = null == _ ? void 0 : _.features) || void 0 === c ? void 0 : c.realtimeModqueue) || void 0 === m ? void 0 : m.toUpdate.includes(e),
						E = N(_, e);
					if (!y || !E) return;
					const O = g ? () => ((e, t) => Object(n.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(n.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						k = await O();
					if (k.ok) {
						if (g) {
							const s = null === (b = null === (u = null == k ? void 0 : k.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(h.f)(s)
							}))
						} else {
							const s = null === (v = null === (x = null == k ? void 0 : k.body) || void 0 === x ? void 0 : x.data) || void 0 === v ? void 0 : v.commentById;
							t(Object(d.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(L(e)), t(T({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return Ce
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return je
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return we
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ne
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Se
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ie
			})), s.d(t, "profileOverviewRequested", (function() {
				return Te
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				c = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/config.ts"),
				l = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/listings.ts"),
				_ = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/actions/changeUsername.ts"),
				k = s("./src/reddit/actions/contentGate.ts"),
				C = s("./src/reddit/actions/externalAccount.ts"),
				j = s("./src/reddit/actions/gold/powerups.ts"),
				w = s("./src/reddit/actions/pinnedPost.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				S = s("./src/reddit/actions/trophyCase.ts"),
				I = s("./src/reddit/constants/errors.ts"),
				T = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				R = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				A = s("./src/lib/initializeClient/installReducer.ts"),
				M = s("./node_modules/redux/es/redux.js"),
				F = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const D = {};
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.c:
					case R.b:
					case F.c:
					case F.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case R.a:
					case F.a: {
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
			const U = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.c:
						case F.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case R.b:
						case R.a:
						case F.b:
						case F.a: {
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
				W = Object(M.c)({
					error: B,
					pending: z
				});
			const V = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case F.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, o = e[s];
						return {
							...e,
							[s]: {
								...o,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const G = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.b:
						case F.b: {
							const {
								key: s,
								overviewIds: n
							} = t.payload, o = e[s] || [];
							return {
								...e,
								[s]: [...o, ...n]
							}
						}
						default:
							return e
					}
				},
				Z = s("./src/lib/omitKey/index.ts");
			const K = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.b:
						case F.b: {
							const {
								key: s,
								dist: n,
								token: o
							} = t.payload;
							return o ? {
								...e,
								[s]: {
									dist: n,
									token: o
								}
							} : Object(Z.a)(e, s)
						}
						default:
							return e
					}
				},
				J = Object(M.c)({
					api: W,
					fetchedTokens: q,
					ids: H,
					loadMore: Q
				});
			const X = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.f:
					case R.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case R.d: {
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
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case R.e:
						case R.d: {
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
				te = Object(M.c)({
					error: Y,
					pending: ee
				}),
				se = s("./src/reddit/actions/profileConversations.ts");
			const ne = {};
			var oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const re = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				ie = Object(M.c)({
					error: oe,
					pending: ae
				});
			const ce = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.e:
						case se.b:
						case se.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				le = Object(M.c)({
					api: ie,
					models: de
				}),
				me = s("./node_modules/lodash/mapValues.js"),
				ue = s.n(me),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				be = s("./src/reddit/constants/comments.ts");
			const he = {};

			function fe(e) {
				const t = e;
				return ue()(t, e => {
					let {
						depth: t,
						next: s,
						prev: n
					} = e;
					return {
						depth: t,
						next: s,
						prev: n
					}
				})
			}
			const xe = (e, t, s) => {
				const n = {};
				for (const o in t) {
					const e = t[o],
						s = e.postId;
					n.hasOwnProperty(s) ? n[s] = {
						...n[s],
						[o]: e
					} : n[s] = {
						[o]: e
					}
				}
				for (const o in s) {
					const e = s[o],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = {
						...n[t],
						[o]: e
					} : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e:
					case se.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: o,
							profileName: r
						} = t.payload, a = xe(o, s, n), i = {};
						for (const e of o) {
							i[Object(pe.a)(e, r)] = a.hasOwnProperty(e) ? fe(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case se.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: o,
							extraCommentsId: r,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][r]);
							if (!t) return e;
							const s = {
									...e[t]
								} [r].prev,
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
						const c = a[0],
							d = fe(xe(a, s, o)[c]),
							l = Object(pe.a)(c, i),
							m = {
								...e[l]
							},
							u = m[r].prev,
							p = u && u.id || "",
							b = n[c].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: be.a.Comment
							},
							x = {
								...m,
								[p]: {
									...m[p],
									next: f
								},
								...d,
								[h]: {
									...d[h],
									prev: u
								}
							};
						return {
							...e,
							[l]: x
						}
					}
					default:
						return e
				}
			};
			const ge = {};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e:
					case se.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: o
						} = t.payload, r = {};
						for (const e of n) {
							r[Object(pe.a)(e, o)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const ye = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.e:
						case se.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, o = {};
							for (const e of s) {
								o[Object(pe.a)(e, n)] = e
							}
							return {
								...e,
								...o
							}
						}
						default:
							return e
					}
				},
				Oe = Object(M.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: _e,
					keyToPostId: Ee
				}),
				ke = Object(M.c)({
					chrono: J,
					conversations: Oe
				});
			Object(A.a)({
				pages: {
					profileOverview: ke
				}
			});
			const Ce = Object(E.a)(R.f),
				je = Object(E.a)(R.e),
				we = Object(E.a)(R.d),
				Pe = Object(E.a)(R.c),
				Ne = Object(E.a)(R.b),
				Se = Object(E.a)(R.a),
				Ie = (e, t, s, n) => async (n, o, a) => {
					const i = o(),
						c = !!i.listings.postOrder.ids[e],
						f = !!Object(g.c)(i, {
							listingKey: e
						});
					if (!!Object(g.d)(i, {
							listingKey: e
						}) || c && !f) return;
					n(Ce({
						key: e
					}));
					const x = await Object(L.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: r.ob.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(a.apiContext(), t, s)),
						v = x.body;
					await Object(h.a)(a.gqlContext, v.posts).then(e => v.posts = e);
					const {
						pinned: y,
						postIds: E
					} = v;
					if (x.ok) {
						n(je({
							key: e,
							meta: i.meta,
							profileName: t,
							...v,
							postIds: E
						}));
						const s = Object(_.o)(o(), t);
						n(Object(w.h)({
							profileId: s,
							pinned: y
						}))
					} else n(we({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: e
					})), x.body.reason === I.a.DeletedProfile && n(Object(k.v)({
						profileName: t
					})), n(Object(P.n)(x.status))
				}, Te = e => async (t, s, n) => {
					const {
						queryParams: d,
						params: l
					} = e, {
						sort: m,
						t: u
					} = Object(i.a)(s(), d), {
						profileName: p
					} = l;
					let b = !1;
					const h = f.e[Object(v.U)(s(), {})],
						g = p.toLowerCase(),
						E = {
							...o()(e.queryParams, x.q),
							sort: m,
							layout: h,
							t: u
						},
						k = [t(N.d(g))],
						w = Object(T.a)(g, r.zb, m, e.queryParams);
					if (s().listings.postOrder.ids[w] && !s().listings.postOrder.api.error[w] ? b = !0 : k.push(t(Ie(w, g, E, !0))), k.push(t(Object(a.b)())), await Promise.all(k), b) return;
					const I = s();
					if (!I.platform.currentPage) return;
					if (200 !== I.platform.currentPage.status) return;
					const L = Object(_.o)(s(), g),
						R = Object(y.Cb)(I, {
							userName: p
						}).id;
					t(P.m({
						title: Le(s(), p)
					})), Object(y.U)(I) && Object(y.Y)(I, p) && t(Object(O.startChangeUsernameFlow)());
					const A = [t(Object(c.q)()), t(S.b(g, L)), t(N.b(g)), t(C.o(p)), t(N.i(p)), t(j.d(p, R))];
					await Promise.all(A)
				}, Le = (e, t) => Object(_.s)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return $
			})), s.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), s.d(t, "removalReasonsFailed", (function() {
				return te
			})), s.d(t, "removalReasonsRequested", (function() {
				return se
			})), s.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return ae
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return he
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return xe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), s.d(t, "removalReasonMessagePending", (function() {
				return _e
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ye
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Oe
			})), s.d(t, "submitRemovalReason", (function() {
				return ke
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case c:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case d:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				v = Object(r.c)({
					error: f,
					pending: x
				});
			const g = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case c:
					case m: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const y = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: o
						} = n;
						return {
							...e,
							[s]: o
						}
					}
					case c: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, o = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: o
						}
					}
					default:
						return e
				}
			};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				k = Object(r.c)({
					api: v,
					models: _,
					reasonOrder: E,
					removedItemIds: O
				}),
				C = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				S = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				T = s("./src/reddit/actions/comment/moderation.ts"),
				L = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/constants/modals.ts"),
				F = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(F.a)(Object(D.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: C.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, s) => Object(F.a)(Object(D.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: C.ob.POST,
					type: "json",
					data: t
				});
			var q = s("./src/reddit/helpers/isPost.ts"),
				G = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = s("./src/reddit/helpers/routeKey/index.ts"),
				Z = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				Q = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: k
				}
			});
			const $ = Object(j.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(j.a)(a),
				te = Object(j.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = s().subreddits.models[e].name;
					t($());
					const a = await ((e, t) => Object(F.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.ob.GET
					}))(o(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, ne = Object(j.a)(i), oe = Object(j.a)(c), re = Object(j.a)(d), ae = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ne());
					const c = await ((e, t, s) => Object(F.a)(Object(D.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: C.ob.POST,
						data: s
					}))(a(), i, t);
					if (c.ok) {
						const {
							id: o
						} = c.body, r = {
							...t,
							id: o
						};
						s(oe({
							subredditId: e,
							reason: r
						})), s(Object(A.f)({
							kind: J.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, ie = Object(j.a)(l), ce = Object(j.a)(m), de = Object(j.a)(u), le = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ie());
					const c = await ((e, t, s) => Object(F.a)(Object(D.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: C.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					c.ok ? (s(ce({
						subredditId: e,
						reason: t
					})), s(Object(A.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(c.error))
				}, me = Object(j.a)(p), ue = Object(j.a)(b), pe = Object(j.a)(h), be = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(me());
					const c = await ((e, t, s) => Object(F.a)(Object(D.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: C.ob.DELETE
					}))(a(), i, t);
					c.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(A.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(c.error))
				}, he = Object(j.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(he({
						subredditId: e,
						itemIds: t
					})), s(Object(L.i)(M.a.ADD_REMOVAL_REASON))
				}, xe = Object(j.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(j.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(j.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(j.a)("REMOVALREASONS__MESSAGE_PENDING"), ye = Object(j.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(j.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Oe = Object(j.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, s, n, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(q.a)(u) ? Q.e.Post : Q.e.Comment,
						b = p === Q.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === Q.e.Post ? R.Q : S.j;
					if (!b || !m) return !1;
					a(xe()), a(h({
						[u]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const f = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						x = await W(d(), f);
					if (x.ok) {
						if (a(ve()), t) {
							a(_e());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: n
								},
								i = await V(d(), Object(Q.h)(o, p), p);
							if (i.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(n)) {
									if (a(Ee()), i.body) {
										const e = Object(G.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(Y.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(H.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(w.a)(e.postId, null, {
												sort: C.x,
												hasSortParam: !0
											})), p === Q.e.Post) {
											const s = Object(P.a)(K.c.replyToPost, u);
											a(Object(I.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[u];
											a(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && a(Object(S.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Q.e.Comment) {
											const e = Object(P.a)(K.c.replyToComment, b.id),
												s = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											a(Object(I.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(ye());
								return !0
							}
							return a(Oe(i.error)), !1
						}
					} else a(ge(x.error)), a(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(xe());
					const u = Object(A.f)({
							kind: J.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await W(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: Z.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(N.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								r = await V(d(), Object(Q.h)(n, Q.e.Bulk), Q.e.Bulk);
							r.ok ? (a(ye()), a(u)) : a(Oe(r.error))
						} else a(u)
					} else a(ge(b.error))
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const h = e => {
				let t;
				switch (e) {
					case u.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case u.b.Large:
						t = b.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const u = Object(r.d)();
				if (!Object(r.e)(m.a) || !Object(i.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return o.a.createElement("div", {
					className: Object(a.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(c.y)(t, l.a.Click))
					}
				}, o.a.createElement(d.b, {
					className: Object(a.a)(b.a.Content, h(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/CCM/ModPreviousActions/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2-D4Vessy5Hd1e5HAU1PK3",
				wrapperTitle: "aC6WYpmVvQIF_BZRtMI_W",
				row: "ax8JnexGOa4WYNYKwXlQs",
				icon: "_1fiz4BfaOlncADi00qAx_l",
				userIconWrapper: "_1ChqLpIvObEfBbb4d-hyah",
				userIcon: "_3nEX0mG3UGhbY0hR0Kqaag",
				details: "_3jKisheiLDnZzH5J_qln3x",
				title: "_1-LXaYXcvGUA9hhrrw587d",
				meta: "_3w_F6oDd1-ZDKgp3jo94ew",
				time: "_2820zMw8REXxmaotvSTjqt",
				userlink: "_2622vu9WjymZhKkDq78CfF"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/models/Audio/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				g = s.n(v),
				_ = s("./src/config.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				O = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = () => Math.floor(10 * Math.random()) + 1;
			var j = e => {
					let {
						postId: t
					} = e;
					const s = Object(h.e)(y.fb),
						[r, i] = Object(n.useState)(!1),
						[c, d] = Object(n.useState)(C());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), d(C())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), o.a.createElement("div", {
						className: g.a.classicSpeaker
					}, r && o.a.createElement(O.a, {
						ringId: `${t}`,
						className: Object(a.a)(g.a.speakerRings, {
							[g.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: g.a.snoovatar,
						src: `${_.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: k._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && o.a.createElement("div", {
						className: g.a.muteContainer
					}, o.a.createElement(E.a, {
						className: g.a.muteIcon
					})))
				},
				w = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var N = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: r
					} = t;
					return Object(h.e)(x.n) && s.roomStatus === f.b.NotStarted ? o.a.createElement(w.a, {
						postId: n,
						author: r,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: g.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement(j, {
						postId: n
					})) : o.a.createElement("div", {
						className: g.a.endedClassicContainer
					}, o.a.createElement(E.a, {
						className: g.a.muteIcon
					}))
				},
				S = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/ExpandoButton/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = s("./src/reddit/components/PostContainer/index.tsx"),
				z = s("./src/reddit/components/PostMeta/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				q = s("./src/reddit/components/PostTitle/index.tsx"),
				G = s("./src/reddit/components/PostTopMeta/index.tsx"),
				H = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				Z = s("./src/reddit/models/Media/index.ts"),
				K = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Q = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				J = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				oe = s.n(ne),
				re = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/redditGQL/types.ts"),
				ie = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				ce = s("./src/reddit/components/ClassicPost/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: h,
					isExpanded: x,
					inSubredditOrProfile: v,
					eventFactory: g,
					flairStyleTemplate: _,
					formatTitle: y,
					hostPostData: E,
					isCheckboxSelected: O,
					isCurrentUserProfilePost: k,
					isFrontpage: C,
					isGalleryTileLayoutDefault: j,
					isLoggedIn: w,
					isOverlay: P,
					imageGalleryCurrentItem: Q,
					moderatorPermissions: ne,
					modModeEnabled: ce,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: he,
					post: fe,
					postId: xe,
					redditStyle: ve,
					scrollerItemRef: ge,
					showBulkActionCheckbox: _e,
					showEditFlair: ye,
					showMedia: Ee,
					shouldShowInsightsButton: Oe,
					subredditOrProfile: ke,
					toggleCheckbox: Ce,
					userIsOp: je,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Pe,
					showCTAExperimentDesign: Ne
				} = e, Se = Object(l.a)(), Ie = Object(d.a)(x);
				Object(n.useEffect)(() => {
					be && Ie !== x && be(fe.id)
				}, [x, be, fe.id, Ie]);
				const Te = ve ? void 0 : _,
					Le = s || void 0,
					Re = Object($.a)(ne),
					Ae = Object(X.a)(ne),
					Me = Object(Y.a)(ne),
					Fe = ce && $.a,
					De = Object(A.a)(fe),
					Be = Object(F.c)(fe),
					Ue = !!fe.media && fe.media.type === Z.o.RTJSON,
					ze = je && Ue,
					We = v && !Ee,
					Ve = !!fe.recommendationContext,
					qe = {
						flairStyleTemplate: Te,
						post: fe,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: k,
						isOverlay: P,
						shouldShowSubscribeButton: !(C && w) || Ve && w,
						subredditOrProfile: ke
					},
					Ge = Object(r.t)(fe, Q),
					{
						source: He
					} = Ge,
					[Ze, Ke] = Object(n.useState)(!1),
					Qe = Object(n.useCallback)(() => {
						Ke(!Ze), Se(Object(se.d)(xe))
					}, [Ze, xe, Se]);
				let Je = o.a.createElement(K.a, {
					className: de.a.classicThumbnail,
					crosspost: Le && fe,
					isMeta: fe.isMeta,
					post: Le || fe,
					redditStyle: ve,
					templatePlaceholderImage: Te && Te.postPlaceholderImage
				});
				Object(f.c)(fe) && (Je = o.a.createElement(N, {
					post: fe
				}));
				const Xe = Object(re.r)(fe);
				return o.a.createElement(U.b, {
					className: Object(a.a)(oe.a.classicPostStyles, de.a.postContainer, Object(te.a)(e), {
						[de.a.shouldShowOverflow]: Oe
					}, t),
					isOverlay: P,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Te)
					},
					post: fe,
					onClick: me,
					eventFactory: g
				}, o.a.createElement(V.a, {
					model: fe,
					handleVote: h,
					showBulkActionCheckbox: _e,
					isCheckboxSelected: O,
					toggleCheckbox: Ce,
					flairStyleTemplate: Te,
					redditStyle: ve,
					postId: xe
				}), o.a.createElement(B.a, {
					className: Oe ? de.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, o.a.createElement(S.a, {
					className: de.a.eventMeta,
					post: fe
				}), o.a.createElement("div", {
					className: de.a.mainBody
				}, o.a.createElement("div", {
					className: We ? de.a.expandoContainer : de.a.thumbnailContainer
				}, !We && Je, o.a.createElement(I.a, {
					crosspost: Le,
					className: de.a.rightExpando,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)(de.a.content, {
						[de.a.showBulkActionCheckbox]: _e
					}),
					"data-click-id": "body"
				}, Xe && o.a.createElement(D.a, {
					content: fe.recommendationContext.content,
					layout: J.g.Classic,
					post: fe
				}), o.a.createElement(q.c, {
					className: he ? de.a.titleWithPoll : void 0,
					format: y,
					poll: he,
					post: fe,
					redditStyle: ve,
					size: q.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: P
				}, fe.source && !Le && !fe.isSurveyAd && o.a.createElement(H.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(c.a)(fe))), o.a.createElement(z.a, le({
					key: "PostMeta"
				}, qe)), ce && Re && De && o.a.createElement(R.a, {
					thing: fe
				}), ce && Re && Be && o.a.createElement(M.a, {
					onIgnoreReports: ue,
					reportable: fe
				}), Pe && He && He.url && !fe.isSurveyAd && o.a.createElement(m.a, {
					ctaExperimentDesign: Ne && "classic",
					className: Object(a.a)(de.a.adLinkWrapper, {
						[de.a.ctaExperiment]: Ne
					})
				}, o.a.createElement(u.a, {
					post: fe,
					adLinkContent: Ge,
					ctaExperimentDesign: Ne && "classic"
				})), fe.discussionType === ae.o.Chat && o.a.createElement(ie.a, {
					postId: fe.id
				}), o.a.createElement("div", {
					className: de.a.flatlistContainer
				}, o.a.createElement(I.a, {
					className: de.a.leftExpando,
					crosspost: Le,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: de.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: fe,
					onVoteClick: h
				}), o.a.createElement(T.a, {
					className: de.a.flatlistSeparator
				}), !fe.isSurveyAd && o.a.createElement(T.c, {
					className: de.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ae,
					hasModPostPerms: Re,
					hasModFullPerms: Me,
					hostPostData: E,
					isOverlay: !!P,
					modModeEnabled: ce,
					onClickInsightsButton: Qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: fe,
					shouldShowInsightsButton: Oe,
					showEditPost: ze,
					showEditFlair: ye,
					tooltipType: P ? G.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(W.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe,
						mute: !Fe,
						save: !Fe
					})
				})), o.a.createElement(L.d, null))), Object(ee.a)(fe, de.a, ge, x, we, j), ke && Ze && o.a.createElement(b.a, {
					className: de.a.creatorStatsContainer,
					post: fe,
					subreddit: ke,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(Q.a)(me)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: r,
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(c.a)(m))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = .75, x = 10 * c.N;
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (f + 1) && u.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, x), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
						className: b.a.seeMore,
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var g = v,
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./node_modules/lodash/noop.js"),
				E = s.n(y),
				O = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				C = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				I = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				M = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				U = s("./src/reddit/contexts/InsideOverlay.tsx"),
				z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				q = s("./src/reddit/helpers/overlay/index.ts"),
				G = s("./src/reddit/helpers/trackers/lightbox.ts"),
				H = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				K = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				X = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/tooltip.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/components/OverflowMenu/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				oe = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				de = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				le = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				me = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				pe = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				xe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = he.a.wrapped(te.b, "OverflowMenu", pe.a),
				ge = he.a.wrapped(L.a, "ModToolsFlatlist", pe.a),
				_e = he.a.wrapped(F.a, "ModActionsMenu", pe.a),
				ye = he.a.wrapped(ae.b, "DropdownRow", pe.a),
				Ee = he.a.wrapped(ce.a, "Flatlist", pe.a),
				Oe = he.a.button("Button", pe.a),
				ke = Object(z.v)(),
				Ce = e => `Comment-${e}--Modal--DeleteComment`,
				je = e => `Distinguish--Dropdown--${e}`,
				we = (e, t) => `${e}--${t}-overflow-menu`,
				Pe = e => `View--Reports--${e}`,
				Ne = Object(a.c)({
					activeTooltipId: $.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.a)(e) === Ce(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: ee.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: ee.m,
					modModeEnabled: z.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.m)(e, {
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
					subreddit: z.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: J.a
				});
			class Se extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(W.d)(W.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ie.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ie.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ie.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ie.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(G.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: r
					} = this.props, a = Object(V.a)(s), i = !!t && t.displayText === e.author;
					if (r && a) return n ? o.a.createElement(ge, {
						comment: e,
						isCommentAuthor: i
					}) : o.a.createElement(_e, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(le.a, null), o.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(D.a)(e);
					if (s && Object(D.c)(e) && !t) return o.a.createElement(R.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Pe(e.id),
						id: Pe(e.id)
					}, o.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Pe(e.id)
					}), e.ignoreReports ? o.a.createElement(de.a, null) : o.a.createElement(me.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(V.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !n)) return o.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === je(e.id)
					}, o.a.createElement(xe.a, null), o.a.createElement(M.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === je(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: je(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: r,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: c,
						moderatorPermissions: d,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u
					} = this.props, p = Object(V.a)(d), b = !!r && r.displayText === e.author, h = (!l && !e.isLocked || p && i) && !Object(Z.g)(e), f = r && e.isGildable && !Object(Z.g)(e);
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(Ee, null, h && o.a.createElement(Oe, {
						onClick: this.handleReply,
						disabled: c
					}, _.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && o.a.createElement(Oe, {
						onClick: this.handleGild
					}, _.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(oe.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(Oe, {
						onClick: this.sendCommentEventWithNameShare
					}, _.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(ve, {
						dropdownId: we(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !c && o.a.createElement(ye, {
						displayText: _.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe.a, {
						name: be.a.report
					})), o.a.createElement(ye, {
						displayText: e.isSaved ? _.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : _.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(fe.a, {
						name: be.a.saved
					}) : o.a.createElement(fe.a, {
						name: be.a.save
					})), b && o.a.createElement(ye, {
						displayText: _.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe.a, {
						name: be.a.edit
					})), b && o.a.createElement(ye, {
						displayText: _.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(A.a, {
						actionText: _.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: _.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: _.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: _.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: a,
						toggleModal: u,
						trackClick: E.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Ie = ke(Object(r.b)(Ne, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(j.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(w.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(P.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(I.h)({
							tooltipId: je(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(I.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleSave: () => e(Object(C.o)(s.id)),
						handleDelete: () => {
							e(Object(N.i)(Ce(s.id))), e(Object(I.h)({
								tooltipId: we(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(O.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(k.a)(H.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(q.a)(t)), e(Object(j.g)(o))
						},
						handleReply: t => {
							const n = Object(O.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(q.a)(t)), e(Object(j.h)(o))
						},
						toggleDeleteCommentModal: () => e(Object(N.i)(Ce(s.id)))
					}
				})(Object(re.c)(Object(U.b)(Se)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				Me = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Fe = s.n(Me);
			const De = he.a.wrapped(Te.a, "TopMeta", Fe.a),
				Be = he.a.div("ProfileCommentWrapper", Fe.a),
				Ue = he.a.div("CommentBody", Fe.a),
				ze = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(Ae.c)(e, t),
					flair: Q.e
				})),
				We = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = ze(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: a,
					showModTools: d
				} = e, l = s => o.a.createElement(Le.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: We(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return o.a.createElement(Be, {
					className: Object(i.a)({
						[Fe.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ue, null, r ? l() : o.a.createElement(g, {
					height: c.Zb,
					isExpanded: r
				}, l)), !t.isDeleted && a && o.a.createElement(Ie, {
					comment: t,
					commentsPageKey: s,
					showModTools: d
				})))
			})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= i && !m.has(t) && (r = o, m.add(t), o === l && (u = !0))
				}
				return u ? o.a.createElement(a.a, {
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
			const o = Object(n.a)({
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
			t.a = o
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
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = s("./src/reddit/components/Footer/index.tsx"),
				x = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.tsx"),
				g = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = s("./node_modules/lodash/flatMap.js"),
				y = s.n(_),
				E = s("./src/lib/linkMatchers/index.ts"),
				O = s("./src/lib/linkMatchers/customLinks.ts"),
				k = s("./src/reddit/controls/OutboundLink/index.tsx");
			const C = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(C);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, o, r] = t.slice(n, n + 3);
						s.push(e), s.push([r, o])
					}
					return s
				};
			var w = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, j)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const o of t) s.push(e.slice(n ? n.lastIndex : 0, o.index)), n = o, s.push([o.url, o.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, o] = t;
							return r.a.createElement(k.b, {
								className: e.linkClassName,
								href: n,
								key: s
							}, o)
						}
						return r.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				P = s("./src/reddit/constants/parameters.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var L = e => r.a.createElement(I.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), r.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				R = s("./src/reddit/models/ContentGate.ts"),
				A = s("./src/lib/constants/index.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				F = s("./src/reddit/selectors/user.ts");
			var D = s("./src/reddit/selectors/meta.ts"),
				B = s("./src/reddit/components/ContentGate/index.m.less"),
				U = s.n(B);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = l.a.wrapped(L, "PrivateKey", U.a), V = l.a.div("ButtonsContainer", U.a), q = l.a.div("Container", U.a), G = l.a.div("ContainerExp", U.a), H = l.a.div("Description", U.a), Z = l.a.div("PrivateSubredditDetails", U.a), K = l.a.div("PrivateSubredditDescription", U.a), Q = l.a.h3("PrivateSubredditName", U.a), J = l.a.a("Link", U.a), X = l.a.wrapped(S.n, "LinkRouterButton", U.a), Y = l.a.wrapped(S.m, "LinkButton", U.a), $ = l.a.wrapped(S.p, "SecondaryLinkButton", U.a), ee = l.a.wrapped(X, "GoHomeLinkButton", U.a), te = l.a.wrapped(h.a, "CreateCommunityButton", U.a), se = l.a.img("Image", U.a), ne = l.a.img("ImagePlaceholder", U.a), oe = l.a.wrapped(X, "LeftLinkRouterButton", U.a), re = l.a.wrapped(Y, "LeftLinkButton", U.a), ae = l.a.wrapped($, "SecondaryLeftLinkButton", U.a), ie = l.a.h3("Title", U.a), ce = l.a.div("PageBody", U.a), de = l.a.div("InterstitialMessageWrapper", U.a), le = l.a.div("QuarantineLearnMore", U.a), me = Object(d.c)({
				isLoggedIn: F.R,
				origin: D.k,
				user: F.m,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(F.S)(e)) return !1;
					const t = Object(M.d)(e);
					if (!t) return !1;
					const s = Object(F.h)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const o = 30 * A.E;
					return n > Date.now() - o
				})(e),
				isSeo: D.h
			}), ue = Object(N.v)(), pe = Object(a.b)(me, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(s)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.r)())
					}
				}
			}), be = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: _,
					quarantineMessage: y,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: k,
					interstitialWarningMessageHtml: C,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: N,
					subredditDescription: S,
					subredditName: I,
					user: T
				} = e, L = async () => {
					if (i ? await N() : await Object(u.q)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(P.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case R.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), r.a.createElement(ie, null, z._("r/{community name} is a Reddit Premium community", [z._param("community name", I)], {
							hk: "2lyDwB"
						})), r.a.createElement(H, null, z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(V, null, T ? r.a.createElement(ae, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(re, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), T ? r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement($, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), r.a.createElement(ie, null, s === R.a.Nsfw ? z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(H, null, z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(V, null, r.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, z._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement($, {
							onClick: L,
							redditStyle: !0
						}, z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case R.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(W, null), r.a.createElement(ie, null, "r/", I, " ", z._("is a private community", null, {
							hk: "7zZmq"
						})), S && S.length && r.a.createElement(Z, null, r.a.createElement(Q, null, "r/", I), r.a.createElement(K, null, r.a.createElement("div", null, S))), r.a.createElement(H, null, z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", I, " ", z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), r.a.createElement("br", null), z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), r.a.createElement(V, null, T ? r.a.createElement(r.a.Fragment, null, !c && r.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: U.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), r.a.createElement(ae, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${I}`,
							redditStyle: !0
						}, z._("Message Mods", null, {
							hk: "vVe1i"
						}))) : r.a.createElement(ae, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), I && r.a.createElement(g.a, {
							subredditName: I
						}));
					case R.a.QuarantinedSubreddit:
						const i = T && T.hasVerifiedEmail;
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), r.a.createElement(ie, null, z._("r/{subredditName} is quarantined", [z._param("subredditName", I)], {
							hk: "2pxhFx"
						})), r.a.createElement(H, null, r.a.createElement(de, null, O ? r.a.createElement(v.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? r.a.createElement(x.a, {
							html: E
						}) : y || z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !_ || i ? z._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : T ? z._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : z._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), r.a.createElement(V, null, ((e, t, s) => {
							const o = e && e.hasVerifiedEmail;
							return !s || o ? r.a.createElement(V, null, r.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, z._("Go Back", null, {
								hk: "11Lp6m"
							})), r.a.createElement($, {
								onClick: t,
								redditStyle: !0
							}, z._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : r.a.createElement(V, null, r.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, z._("Go Back", null, {
								hk: "11Lp6m"
							})), r.a.createElement($, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, z._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(T, o, _)), r.a.createElement(le, null, z._("Learn more about {=quarantined communities}.", [z._param("=quarantined communities", r.a.createElement(J, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, z._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case R.a.GatedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(ie, null, z._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), r.a.createElement(H, null, r.a.createElement(de, null, j ? r.a.createElement(v.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : C ? r.a.createElement(x.a, {
							html: C
						}) : k), z._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), r.a.createElement(V, null, r.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, z._("No Thank You", null, {
							hk: "4B26AR"
						})), r.a.createElement($, {
							onClick: a,
							redditStyle: !0
						}, z._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case R.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), r.a.createElement(ie, null, z._("r/{community name} has been banned from Reddit", [z._param("community name", I)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(H, null, e ? r.a.createElement(w, {
							linkClassName: U.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(V, null, r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(ie, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(V, null, r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(ne, null), r.a.createElement(ie, null, z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(H, null, z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(V, null, T && r.a.createElement(te, {
							eventSource: "content_gate"
						}), r.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(ie, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case R.a.ProfileDeleted:
									return z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case R.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, z._("This account has been {=suspended} .", [z._param("=suspended", r.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case R.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, null, z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(H, null, z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(V, null, r.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(ie, null, z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(V, null, r.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(ie, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(V, null, r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ue(pe(Object(i.i)(e => {
				const t = Object(o.useContext)(c.a) ? G : q;
				return r.a.createElement(t, null, r.a.createElement("div", {
					"data-testid": "content-gate"
				}, r.a.createElement(ce, null, be(e))), r.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
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
			t.a = o
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(f),
				v = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				_ = v.a.wrapped(l.c, "StyledTooltip", x.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.rb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: o,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return r.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), i(c)
					},
					onMouseEnter: o,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? r.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
				return k
			})), s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(_),
				E = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 8,
				C = 1,
				j = E.a.div("Container", y.a),
				w = E.a.div("PostMetaWrapper", y.a),
				P = E.a.wrapped(p.c, "PostTitle", y.a),
				N = E.a.div("FlatList", y.a),
				S = E.a.div("FlatItem", y.a),
				I = E.a.span("FlatListDotSpacer", y.a),
				T = E.a.wrapped(j, "LinkContainer", y.a),
				L = E.a.div("Content", y.a),
				R = E.a.div("ThumbnailContainer", y.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Sb.TOPIC),
					shouldOpenPostInNewTab: g.lb
				}),
				M = Object(a.b)(A);
			t.c = Object(x.b)(M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(T, {
					className: d
				}, r.a.createElement(L, null, r.a.createElement(w, null, r.a.createElement(u.a, c)), F(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), z(e)) : r.a.createElement(j, {
					className: d
				}, r.a.createElement(w, null, r.a.createElement(u.a, c)), F(a), D(e), B(e))
			}));
			const F = e => r.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				D = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, O({}, n, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(N, null, r.a.createElement(S, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(S, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				z = e => r.a.createElement(R, null, r.a.createElement(h.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
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
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: a = !1
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, o.a.createElement(c.a, {
					ringId: n,
					className: Object(r.a)(i.a.innerRing, `${s}Inner`)
				}), o.a.createElement(d.a, {
					ringId: n,
					className: Object(r.a)(i.a.middleRing, `${s}Middle`)
				}), o.a.createElement(l.a, {
					ringId: n,
					className: Object(r.a)(i.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/helpers/trackers/talkCreation.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				p = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				b = s.n(p),
				h = s("./src/config.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/hooks/useGqlContext.ts");
			var _ = e => o.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				y = s("./src/reddit/endpoints/talk/index.ts"),
				E = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/redditGQL/types.ts");
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = () => o.a.createElement("span", {
				className: b.a.MicrophoneIcon
			}, o.a.createElement(_, null));
			var w = e => {
				let {
					roomId: t
				} = e;
				const s = Object(r.e)(m.fb),
					[i, c] = Object(n.useState)(!1),
					l = Object(r.d)(),
					u = Object(f.b)(),
					p = Object(g.a)();
				return o.a.createElement(x.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: i ? v.a : j,
					iconClassName: i ? b.a.loadingIcon : "",
					className: Object(a.a)(b.a.StartTalkButton, {
						[b.a.isNightMode]: s
					}),
					priority: x.c.Secondary,
					size: x.d.M,
					iconPosition: x.h.L,
					disabled: i,
					text: o.a.createElement("span", {
						className: b.a.StartTalkButtonText
					}, C._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						u(Object(d.a)()), c(!0);
						const e = await Object(y.l)(p(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return l(Object(E.f)({
							kind: O.b.Error,
							text: y.a[k.l.ServiceError]
						})), void c(!1);
						const s = Object(y.h)(e.body);
						if (null == s ? void 0 : s.errorState) return l(Object(E.f)({
							kind: O.b.Error,
							text: y.a[s.errorState.code] || y.a[k.l.ServiceError]
						})), void c(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${h.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: p,
					isClassicView: h = !1
				} = e;
				const f = Object(r.d)(),
					x = Object(l.a)(),
					v = Object(r.e)(m.H),
					g = Object(r.e)(m.fb),
					_ = Object(r.e)(e => Object(m.Fb)(e, {
						postId: s
					})),
					y = Object(r.e)(e => Object(m.Cb)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					s && x && x(Object(d.f)(s))
				}, [x, s]), Object(n.useEffect)(() => {
					y || f(Object(i.d)(t))
				}, [f, t, s, y]);
				const E = () => o.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(b.a.hostAvatar, {
						[b.a.classicView]: h
					})
				}, o.a.createElement("div", {
					className: b.a.snoovatar
				}, o.a.createElement(c.a, {
					userName: t,
					isNSFW: !v,
					className: b.a.isImage
				})), o.a.createElement(u.a, {
					ringId: `${s}`,
					className: Object(a.a)(b.a.hostRings, {
						[b.a.nightMode]: g
					}),
					ringClassName: "hostRing"
				}));
				return h ? o.a.createElement(E, null) : o.a.createElement("div", {
					className: b.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, o.a.createElement("div", {
					className: b.a.upcomingTalkContainer
				}, o.a.createElement(E, null), o.a.createElement("div", {
					className: b.a.upcomingTalkInfo
				}, o.a.createElement("div", {
					className: b.a.upcomingTalkLabel
				}, P._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), o.a.createElement("div", {
					className: b.a.upcomingTalkHost
				}, "u/", t), _ && p && o.a.createElement(w, {
					roomId: p
				}))))
			}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					m = Object(a.e)(e => Object(d.V)(e, {
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
				}), r.a.createElement(i.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostList/Placeholder.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(m.a.Wrapper, s)
				}, r.a.createElement(c.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: d.g.Classic
				}), r.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = a.oc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === a.oc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = a.oc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === a.oc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var h = e => {
					let {
						className: t,
						text: s
					} = e;
					return r.a.createElement(u, {
						className: t
					}, s)
				},
				f = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				x = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(x);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = () => r.a.createElement("div", {
				className: v.a.container
			}, r.a.createElement(f.a, {
				className: v.a.hideIcon
			}), r.a.createElement("h3", {
				className: v.a.title
			}, g._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: v.a.subtitle
			}, g._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = s("./src/reddit/components/ExpandoButton/index.m.less"),
				y = s.n(_);
			const E = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(y.a.icon, y.a.hideOnHover);
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
			t.a = E(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: _,
					useMediaIcons: E
				} = e, k = s || h, C = Object(a.e)(x.b), j = Object(a.e)(x.c), w = t => {
					(C || j) && (t.preventDefault(), e.showModalOnPostLinkClick(k))
				}, P = k.media, N = Object(f.q)(h), S = o && !!s;
				return P && !N && !(("rtjson" === P.type || "text" === P.type || "liveaudio" === P.type) && !Object(p.a)(k)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": g.a.MEDIA,
					onClick: _
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: y.a.icon
				}) : E ? r.a.createElement(r.a.Fragment, null, O(k.media && k.media.type, S, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: y.a.icon
				})) : k.source && k.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: k.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(k.permalink),
					rel: "nofollow",
					onClick: w
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Footer/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("UserAgreement", d.a), u = i.a.a("UserAgreementLink", d.a), p = i.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => o.a.createElement("div", {
				className: Object(a.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, o.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", o.a.createElement(u, {
				href: `${r.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", o.a.createElement(p, {
				href: `${r.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return _
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = a.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
				}
				return r.a.createElement(t, {
					className: m.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = "clear_fill";
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = "delete_fill";
						break;
					case d.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, h = () => u._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "3MHgRl"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), f = () => u._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "yMHtU"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), x = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return u._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case d.g.Author:
						return u._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case d.g.AuthorDeleted:
						return u._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case d.g.AutomodFiltered:
						return u._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case d.g.CommunityOps:
						return u._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case d.g.ContentTakedown:
						return u._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case d.g.CopyrightTakedown:
						return u._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case d.g.Moderator:
						return u._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [u._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case d.g.Reddit:
						return u._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return u._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, v = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return u._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return u._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [u._param("=[subreddit name]", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("{subreddit name}", [u._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case d.g.CommunityOps:
						return u._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case d.g.ContentTakedown:
						return r.a.createElement(f, null);
					case d.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case d.g.Moderator:
						return u._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case d.g.Reddit:
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, g = (e, t, s) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return u._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case d.g.Author:
						return u._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case d.g.AuthorDeleted:
						return u._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case d.g.AutomodFiltered:
						return u._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case d.g.CommunityOps:
						return u._("This post was removed by Reddit admin, u/{username}.", [u._param("username", t)], {
							hk: "34nHWu"
						});
					case d.g.ContentTakedown:
						return u._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case d.g.CopyrightTakedown:
						return u._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case d.g.Moderator:
						return u._("This post was removed by r/{subredditName} moderator, u/{username}.", [u._param("subredditName", s), u._param("username", t)], {
							hk: "270bcn"
						});
					case d.g.Reddit:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, _ = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return u._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case d.g.AutomodFiltered:
						return u._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case d.g.CommunityOps:
						return u._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [u._param("=just ask", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return r.a.createElement(f, null);
					case d.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case d.g.Moderator:
						return u._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case d.g.Reddit:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				creatorStatsContainer: "_29kkIwCUHX4r6IdznhyYEE",
				shouldShowOverflow: "_24r9i5ZTqf6P77tAstM-O3",
				shouldUseRoundedBorder: "_3LGrZR10DLu8LvoWRwzdHL",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw",
				liveLabel: "_1HHtbJesYWFlnffF_u9U5U",
				realtimeAnimation: "AtOuz7HaZcKodxvKABuOw",
				realtimeFade: "Uuedk2mN8afhHTXUH825B",
				isNightMode: "_1Qs6zz6oqdrQbR7yE_ntfY",
				realtimeFadeNight: "hjNeLkbGFHNdcoj6SGxE0",
				realtimeUpdated: "_2U6P_aTp-ha87x11OgMyff"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				P = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				I = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				L = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				R = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				A = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				F = s("./src/reddit/components/CreatorStats/loader.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				U = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				V = s("./src/reddit/components/ModModeReports/index.tsx"),
				q = s("./src/reddit/components/ModModeReports/helpers.ts"),
				G = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				H = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				Z = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Q = s("./src/reddit/components/PostContainer/index.tsx"),
				J = s("./src/reddit/components/PostLeftRail/index.tsx"),
				X = s("./src/reddit/components/PostMedia/index.tsx"),
				Y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				$ = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				ee = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				te = s.n(ee);
			const {
				fbt: se
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ne = () => o.a.createElement("div", {
					className: te.a.container
				}, o.a.createElement($.a, {
					className: te.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: te.a.metaText
				}, se._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = s("./src/reddit/components/PostTitle/index.tsx"),
				ae = s("./src/reddit/components/PostTopLine/index.tsx"),
				ie = s("./src/reddit/components/SourceLink/index.tsx"),
				ce = s("./src/reddit/constants/postLayout.ts"),
				de = s("./src/reddit/contexts/InsideOverlay.tsx"),
				le = s("./src/reddit/contexts/PageLayer/index.tsx"),
				me = s("./src/reddit/contexts/Post/index.tsx"),
				ue = s("./src/reddit/helpers/isCrosspost.ts"),
				pe = s("./src/reddit/helpers/path/index.ts"),
				be = s("./src/reddit/helpers/postEvent.ts"),
				he = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				fe = s.n(he),
				xe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ve = s("./src/reddit/hooks/useClickSourceData.ts"),
				ge = s("./src/reddit/models/Audio/index.ts"),
				_e = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				ye = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ee = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Oe = s("./src/reddit/constants/experiments.ts"),
				ke = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ce = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const je = Object(i.a)(j.N, e => e.some(Ce.c)),
				we = Object(i.a)(je, e => e),
				Pe = (e, t) => Object(ke.c)(e, {
					experimentName: Oe.ld,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && we(e, {
							listingKey: s
						})
					}
				});
			var Ne = s("./src/reddit/selectors/modQueue.ts"),
				Se = s("./src/reddit/selectors/postFlair.ts"),
				Ie = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Te = s("./src/reddit/selectors/i18n/index.ts"),
				Le = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Re = s("./src/reddit/components/LargePost/index.m.less"),
				Ae = s.n(Re);

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...r
					} = e;
					return o.a.createElement(I.a, Me({}, r, {
						className: Object(N.a)(t, Ae.a.styledLink, {
							[Ae.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				De = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(j.N)(e, {
						listingKey: s
					}) : void 0
				},
				Be = Object(r.b)(() => Object(i.c)({
					autoplayPref: w.d,
					isModQueueDisplayEnabled: e => Object(Ne.b)(e, !0),
					activeModalId: O.a,
					hideNSFWPref: w.H,
					flairStyleTemplate: le.Y,
					isBlurredPreview: Ee.b,
					isCurrentUserProfilePost: j.l,
					isLoggedIn: w.S,
					isActive: j.j,
					showPromotedCTA: Ie.a,
					moderatorPermissions: C.m,
					modModeEnabled: le.W,
					posts: De,
					postHeightVariant: Pe,
					shouldShowNsfwListingBelow: Te.b,
					showEditFlair: Se.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(C.i)(e, s.id)
					},
					isOptionalTextEnabled: _e.a,
					showCTAExperimentDesign: k.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, o;
						return !!(null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === o ? void 0 : o.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: w.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === E.a.upvoted ? Object(u.ib)(s) : Object(u.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(u.eb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ue = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? o.a.createElement(Fe, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, i)
				}),
				ze = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: E,
						flairStyleTemplate: O,
						forceLoadMedia: k,
						hideNSFWPref: C,
						hostPostData: j,
						imageGalleryCurrentItem: I,
						inSubredditOrProfile: $ = !1,
						isBlurredPreview: ee,
						isCommentsPage: te,
						isCurrentUserProfilePost: se,
						isFrontpage: de,
						isGalleryTileLayoutDefault: le,
						isModWithUserNotesPermissions: me,
						isLoggedIn: he,
						isOverlay: _e,
						isTopicPage: Ee,
						isCommentCountAnimationEnabled: ke,
						isVoteCountAnimationEnabled: Ce,
						isCountAnimShadowTestEnabled: je,
						listingIndex: we,
						listingKey: Pe,
						moderatorPermissions: Ne,
						modModeEnabled: Se,
						onClickPost: Ie,
						onIgnoreReports: Te,
						onOpenReportsDropdown: Re,
						post: Me,
						postHeightVariant: Fe,
						scrollerItemRef: De,
						shouldShowGalleryTileOption: Be,
						shouldShowInsightsButton: ze,
						shouldShowNsfwListingBelow: We,
						showEditFlair: Ve,
						showPromotedCTA: qe,
						subredditOrProfile: Ge,
						userIsOp: He,
						postId: Ze,
						postIds: Ke,
						onceInViewport: Qe,
						isOptionalTextEnabled: Je,
						showCTAExperimentDesign: Xe,
						isModQueueDisplayEnabled: Ye,
						showRealtimeUpdateAnimation: $e,
						isUpdatedContent: et,
						isNightMode: tt
					} = e, st = Object(g.a)(), nt = !!e.redditStyle || !!e["data-redditstyle"], ot = nt ? void 0 : O, rt = Object(l.a)(Ne), at = Se && rt, it = Object(c.a)(Ne), ct = Object(d.a)(Ne), dt = Object(q.c)(Me), lt = Object(W.a)(Me), mt = !!Me.media && Me.media.type === _.o.RTJSON, ut = He && mt, pt = s ? s - J.a : void 0, bt = !!Me.recommendationContext, ht = !(de && he || Ee) || bt && he, ft = (e => e === Oe.hf.OnlyTitles)(Fe) && !Object(ue.a)(Me), xt = (e => e === Oe.hf.MediumHeight)(Fe) && !Object(ue.a)(Me), vt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(y.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							a = n && 1 === n.indexOf(s.id),
							i = o && o[1] && Object(y.v)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), gt = Object(r.d)(), _t = Object(r.e)(ye.b), yt = Object(r.e)(ye.c), Et = Object(r.e)(w.lb), Ot = Object(ve.a)(), kt = Me.permalink, Ct = e.isCommentPermalink ? Object(pe.b)(kt) : Object(S.a)(kt, void 0, Ot), jt = !!(null == j ? void 0 : j.shouldShowLinkedPosts), wt = (!$ || jt || We) && !Me.isSponsored, Pt = Object(P.t)(Me, I), {
						source: Nt
					} = Pt, St = Object(n.useRef)(null), It = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Qe || Qe(we))
						})
					}, [Qe, we]);
					Object(v.a)(St, It);
					const [Tt, Lt] = Object(n.useState)(!1), Rt = Object(n.useCallback)(() => {
						Lt(!Tt), st(Object(xe.d)(Ze))
					}, [Tt, st, Ze]), At = !!(ee && (null == Ge ? void 0 : Ge.isNSFW)), Mt = Object(n.useRef)({
						renderingObjectInfo: Me
					}), Ft = Object(n.useCallback)(e => {
						(_t || yt) && (e.preventDefault(), gt(Object(u.Z)(Object(pe.b)(Me.permalink), Me.id)))
					}, [gt, _t, yt, Me.id, Me.permalink]), Dt = Me && Me.media && (Me.media.type === _.o.TEXT || Me.media.type === _.o.RTJSON), Bt = Object(y.r)(Me);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Q.b, {
						className: Object(N.a)(Ae.a.container, i, fe.a.largeAndMediumPostStyles, fe.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[fe.a.mUseRedditTheme]: nt,
							[Ae.a.topCompactPost]: vt && vt.hasTopCompactPostStyles,
							[Ae.a.bottomCompactPost]: vt && vt.hasBottomCompactPostStyles,
							[Ae.a.shouldShowOverflow]: ze,
							[Ae.a.realtimeAnimation]: $e,
							[Ae.a.realtimeUpdated]: et,
							[Ae.a.isNightMode]: tt
						}),
						isOverlay: _e,
						style: Ye && ($e || et) ? tt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(m.b)(e.flairStyleTemplate),
						post: Me,
						onClick: Ie,
						eventFactory: E
					}, o.a.createElement("div", {
						ref: St
					}), o.a.createElement(oe.a, {
						model: Me,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: je,
						isVoteCountAnimation: Ce,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ot,
						redditStyle: nt,
						postId: Ze
					}), o.a.createElement(K.a, {
						className: Object(N.a)(Ae.a.backgroundWrapper, {
							[Ae.a.isEvent]: Object(be.a)(Me),
							[Ae.a.shouldUseRoundedBorder]: ze,
							[Ae.a.realtimeAnimation]: $e,
							[Ae.a.realtimeUpdated]: et,
							[Ae.a.isNightMode]: tt
						}),
						"data-click-id": "background",
						flairStyleTemplate: ot,
						post: Me,
						redditStyle: nt,
						overrideBackgroundColor: Ye && ($e || et) ? tt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(D.a, {
						post: Me
					}), vt && vt.showPinnnedHeader && o.a.createElement(ne, null), Object(a.c)(Me) && o.a.createElement(o.a.Fragment, null, o.a.createElement(f.a, {
						post: Me
					}), o.a.createElement(h.a, {
						post: Me
					})), !Object(a.c)(Me) && o.a.createElement(o.a.Fragment, null, Bt && o.a.createElement(Z.a, {
						content: Me.recommendationContext.content,
						layout: ce.g.Large,
						post: Me
					}), o.a.createElement(ae.a, {
						className: Ae.a.postTopLine,
						hideNSFWPref: C,
						hostPostData: j,
						iconClassName: Ae.a.postTopLineIcon,
						inSubredditOrProfile: $,
						isCommentsPage: !!te,
						isCompactPinnedPost: !!vt,
						isCurrentUserProfilePost: se,
						isModWithUserNotesPermissions: me,
						isOverlay: !!_e,
						isTopicPage: !!Ee,
						listingKey: Pe,
						post: Me,
						shouldShowSubscribeButton: ht,
						showSubreddit: wt,
						showSubredditIcon: !0,
						subredditOrProfile: Ge
					}), o.a.createElement(re.c, {
						className: Ae.a.postTitle,
						post: Me,
						redditStyle: nt,
						size: re.b.Large,
						titleColor: ot && ot.postTitleColor,
						isOverlay: _e
					}), o.a.createElement(R.a, {
						className: Ae.a.adSupplementaryText,
						post: Me,
						size: re.b.Large
					}), Me.source && !Me.isSponsored && !At && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
						className: Ae.a.sourceLink,
						post: Me
					}), Je && Me.media && Me.media.type !== _.o.TEXT && Me.media.type !== _.o.IMAGE && Me.media.richtextContent && o.a.createElement(x.a, {
						content: Me.media.richtextContent,
						rtJsonElementProps: Mt.current
					}))), o.a.createElement("div", {
						className: Ae.a.postMediaWrapper
					}, !vt && o.a.createElement(Ue, {
						handlePostLinkClick: Ft,
						postPermalink: Ct,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: Et,
						shouldStylePostAfterVisitLink: Dt
					}, o.a.createElement(X.a, {
						isGalleryTileLayoutDefault: le,
						isListing: !0,
						isMediumHeight: xt,
						isNotCardView: !!_e,
						isTitleOnly: ft,
						showCentered: !0,
						flairStyleTemplate: ot,
						post: Me,
						availableWidth: pt,
						shouldLoad: k,
						scrollerItemRef: De,
						autoplayPref: t,
						shouldShowGalleryTileOption: Be,
						showPromotedCTA: qe
					}))), qe && Nt && Nt.url && !Me.isSurveyAd && o.a.createElement(T.a, {
						className: Ae.a.adLinkWrapper,
						ctaExperimentDesign: Xe && "card"
					}, o.a.createElement(L.a, {
						post: Me,
						adLinkContent: Pt,
						ctaExperimentDesign: Xe && "card"
					})), Se && rt && lt && !Ye && o.a.createElement("div", {
						className: Ae.a.modModeBannerWrapper
					}, o.a.createElement(z.a, {
						thing: Me
					})), Se && rt && dt && !Ye && o.a.createElement("div", {
						className: Ae.a.modModeBannerWrapper
					}, o.a.createElement(V.a, {
						onIgnoreReports: Te,
						reportable: Me
					})), Object(ge.c)(Me) && o.a.createElement(b.a, {
						post: Me
					}), o.a.createElement(U.d, null), Ye && o.a.createElement(H.a, {
						post: Me
					}), Me.discussionType === y.b.Chat && o.a.createElement(Le.a, {
						postId: Me.id,
						className: Ae.a.liveLabel
					}), o.a.createElement("div", {
						className: Ae.a.flatListContainer
					}, o.a.createElement(M.a, {
						className: Ae.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ot,
						model: Me,
						onVoteClick: e.handleVote
					}), !Me.isSurveyAd && (Ye ? o.a.createElement(G.a, {
						content: Me,
						listingKey: Pe,
						hostPostData: j
					}) : o.a.createElement(B.c, {
						currentUser: p,
						hasModFlairPerms: it,
						hasModFullPerms: ct,
						hasModPostPerms: rt,
						hostPostData: j,
						isCommentCountAnimation: ke,
						isCountAnimShadowTestEnabled: je,
						isLargePost: !0,
						isOverlay: !!_e,
						listingKey: Pe,
						modModeEnabled: Se,
						onClickInsightsButton: Rt,
						onIgnoreReports: Te,
						onOpenReportsDropdown: Re,
						post: Me,
						shouldShowInsightsButton: ze,
						showEditPost: ut,
						showEditFlair: Ve,
						useFlatlistBreakpoints: Object(Y.b)({
							editPost: !1,
							save: !at,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Ge && Tt && o.a.createElement(F.a, {
						className: Ae.a.creatorStatsContainer,
						post: Me,
						subreddit: Ge,
						isOwnProfileStats: !0
					})), de && o.a.createElement(A.a, {
						post: Me,
						postIds: null != Ke ? Ke : [],
						subredditId: null == Ge ? void 0 : Ge.id
					})))
				});
			ze.displayName = "LargePostMemoized";
			t.default = Object(me.b)(Be(Object(de.b)(ze)))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.v)(),
				f = Object(a.c)({
					layout: m.U
				}),
				x = Object(r.b)(f);
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.l + c.p + c.q,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${c.g+c.p+c.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.g+c.p+c.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: p.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(v, "Component", p.a)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => a.a.createElement("span", {
				className: m.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const h = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, a.a.createElement(u, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var f = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const g = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(f.e)(e => Object(x.a)(e, t));
				return Object(f.e)(v.e) ? a.a.createElement(h, {
					userCount: n,
					className: s
				}) : null
			}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: o,
					post: u,
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, r.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, r.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: o,
					subredditOrProfile: b
				}), r.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.e)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && r.a.createElement(i.a, null))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, o.a.createElement(a.b, {
					className: Object(r.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = s.n(a);
			const c = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
					className: i.a.postStats
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", n.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [n.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Me
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/modQueue/realtime.ts"),
				l = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/actions/comment/moderation.ts"),
				E = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/postFlair.ts"),
				C = s("./src/reddit/actions/removalReasons/index.ts"),
				j = s("./src/reddit/selectors/activeModal.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const N = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.m && (!Object(P.a)(e) || Object(b.b)(e) && [_.g.AntiEvilOps, _.g.CommunityOps, _.g.ContentTakedown, _.g.CopyrightTakedown, _.g.Reddit].indexOf(e.removedByCategory) > -1) ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.m ? n.FILTERED : n.UNMODERATED
			};
			var S = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				I = s.n(S),
				T = s("./src/lib/classNames/index.ts"),
				L = s("./src/lib/constants/icons.ts"),
				R = s("./src/reddit/actions/gold/modals.ts"),
				A = s("./src/reddit/actions/reportFlow/index.ts"),
				M = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				F = s("./src/reddit/components/OverflowMenu/index.tsx"),
				D = s("./src/reddit/constants/modals.ts"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/trackers/gild.ts"),
				V = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				G = s("./src/reddit/selectors/user.ts");
			const H = (e, t) => Object(h.c)(t, e),
				Z = (e, t) => e ? t ? o.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : o.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? o.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : o.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var K = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: n,
						moderatorPermissions: d
					} = e;
					var l, m;
					const u = Object(v.a)(),
						p = Object(i.d)(),
						x = Object(b.b)(t),
						_ = Object(i.e)(G.k),
						k = Object(i.e)(G.P),
						C = Object(i.e)(q.b),
						j = Object(z.a)(d),
						w = x ? f.k : H,
						P = t.authorId === _,
						N = k && P,
						S = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === c.J.ADMIN,
						K = (null === (m = t.distinguishType) || void 0 === m ? void 0 : m.toLowerCase()) === c.J.MODERATOR,
						Q = Object(r.useCallback)(() => {
							const e = x ? O.D : y.c;
							p(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							u(x ? w(t.id, s) : Object(h.j)(t.id, s, "mod_menu"))
						}, [w, u, p, t, x]),
						J = Object(r.useCallback)(e => {
							u(Object(f.k)(t.id, e, "post", n, s, void 0))
						}, [u, n, s, t]),
						X = Object(r.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							x ? (p(Object(O.gb)(t.id)), u(Object(h.n)(s, t.id))) : (p(Object(y.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), u(Object(h.j)(t.id, s, "mod_menu")))
						}, [u, p, t, x]),
						Y = Object(r.useCallback)(() => {
							x && (p(Object(O.I)(t.id)), u(Object(h.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [u, p, t, x]),
						$ = Object(r.useCallback)(() => {
							x && (p(Object(O.F)(t.id)), Object(h.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, x]),
						ee = Object(r.useCallback)(() => {
							x && (p(Object(E.i)(D.a.CROWD_CONTROL)), p(Object(O.t)(t.id)))
						}, [p, t, x]),
						te = Object(i.e)(e => Object(V.m)(e, {
							commentId: t.id
						})),
						se = Object(r.useCallback)(() => {
							const e = x ? t.permalink : te;
							e && (p(Object(O.C)(e)), x ? J("copy") : u(Object(h.j)(t.id, "share", "mod_menu")))
						}, [J, p, t, x, te, u]),
						ne = Object(r.useCallback)(async () => {
							if (!x) return;
							const e = Object(U.d)(U.a.GildingFlow, !0);
							p(Object(R.d)({
								awardId: null == C ? void 0 : C.id,
								correlationId: e,
								thingId: t.id
							})), u(Object(W.clickGildEvent)(t.id))
						}, [u, p, t, C, x]),
						oe = Object(r.useCallback)(() => {
							p(Object(A.c)(t.id)), x ? J("report") : u(Object(h.j)(t.id, "report", "mod_menu"))
						}, [J, p, t, x, u]),
						re = Object(r.useCallback)(() => {
							var e;
							x && (p(Object(O.db)(t.id, !t.hidden, !1, !0)), J((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [J, p, t, x]),
						ae = Object(r.useCallback)(() => {
							const e = x ? O.S : y.e;
							p(e(t.id, !0)), u(x ? Object(h.n)("spam", t.id) : Object(h.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [u, p, t, x]),
						ie = Object(r.useCallback)(e => {
							const s = x ? O.u : y.b;
							p(s(t.id, e));
							const n = e === c.J.ADMIN ? "distinguish_as_admin" : e === c.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							u(Object(h.j)(t.id, n, "mod_menu"))
						}, [p, t, x, u]);
					return a.a.createElement(F.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: I.a.overflowButton,
						icon: a.a.createElement(g.a, {
							name: L.a.overflow_horizontal,
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", I.a.overflowHeading)
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ae
					}, a.a.createElement(g.a, {
						name: L.a.spam
					})), x && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: X
					}, a.a.createElement(g.a, {
						name: t.isStickied ? L.a.unpin : L.a.pin
					}))), a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: Q,
						displayText: Z(x, !!(null == t ? void 0 : t.isLocked))
					}, a.a.createElement(g.a, {
						name: L.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), P && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: K ? o.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : o.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ie(K ? "" : c.J.MODERATOR)
					}, a.a.createElement(g.a, {
						name: K ? L.a.distinguish_fill : L.a.distinguish
					})), N && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: S ? o.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : o.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ie(S ? "" : c.J.ADMIN)
					}, a.a.createElement(g.a, {
						name: S ? L.a.distinguish_fill : L.a.distinguish
					})), !x && (S || K) && P && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : o.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: X
					}, a.a.createElement(g.a, {
						name: t.isStickied ? L.a.unpin : L.a.pin
					})), x && !t.crosspostParentId && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: Y,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(g.a, {
						name: L.a.original
					})), x && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: $,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(g.a, {
						name: L.a.nsfw
					})), x && j && "subreddit" === t.belongsTo.type && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, a.a.createElement(g.a, {
						name: L.a.crowd_control
					})), a.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", I.a.overflowHeading)
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: se
					}, a.a.createElement(g.a, {
						name: L.a.share
					})), x && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: ne,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(g.a, {
						name: L.a.award
					}), a.a.createElement(M.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: oe
					}, a.a.createElement(g.a, {
						name: L.a.report
					})), x && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: re,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(g.a, {
						name: L.a.hide
					})))
				},
				Q = s("./src/reddit/helpers/trackers/modListing.ts"),
				J = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				X = s("./src/config.ts"),
				Y = s("./src/reddit/components/UserIcon/index.tsx"),
				$ = s("./src/reddit/helpers/name/index.ts"),
				ee = s("./src/reddit/constants/intlSupport.ts"),
				te = s("./src/reddit/helpers/graphql/helpers.ts"),
				se = s("./src/reddit/hooks/useLocale.ts");

			function ne(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var oe = function(e) {
					let {
						date: t,
						...s
					} = e;
					const n = Object(se.a)(),
						r = "string" == typeof t ? Object(te.g)(t) / c.Xb : t,
						i = new Date(r * c.Xb);
					if (!ee.a) return a.a.createElement(a.a.Fragment, null, i.toLocaleString());
					const d = new Intl.DateTimeFormat(n, {
							month: "short",
							day: "numeric",
							year: ne(i) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(n, {
							minute: "numeric",
							hour: "numeric"
						}),
						m = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(i) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : d.format(i),
						u = l.format(i);
					return o.fbt._("{date} at {time}", [o.fbt._param("date", m), o.fbt._param("time", u)], {
						hk: "Ot5zO"
					})
				},
				re = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				ae = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ie = s.n(ae);
			var ce = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var o, r, i, c, d;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					m = (null === (i = null === (r = s.moderatorInfo) || void 0 === r ? void 0 : r.icon) || void 0 === i ? void 0 : i.url) || "",
					u = !!(null === (d = null === (c = s.moderatorInfo) || void 0 === c ? void 0 : c.profile) || void 0 === d ? void 0 : d.isNsfw),
					p = Object(b.a)(n);
				return a.a.createElement("div", {
					className: Object(T.a)(t, ie.a.row)
				}, a.a.createElement("div", {
					className: ie.a.userIconWrapper
				}, a.a.createElement(Y.a, {
					className: ie.a.userIcon,
					iconUrl: m,
					userName: l,
					isNSFW: u
				})), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, Object(re.a)(s.action, p ? "SubredditPost" : "")), a.a.createElement("p", {
					className: ie.a.meta
				}, a.a.createElement("a", {
					className: ie.a.userlink,
					href: `${X.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(l)))), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return a.a.createElement("div", {
					className: Object(T.a)(t, ie.a.row)
				}, a.a.createElement(g.a, {
					isFilled: !0,
					name: "report_fill",
					className: ie.a.icon
				}), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, o.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && a.a.createElement("p", {
					className: ie.a.meta
				}, s.reason)), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var le = e => {
					const t = Object(i.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? a.a.createElement("div", {
						className: Object(T.a)(e.className, ie.a.wrapper)
					}, a.a.createElement("h2", {
						className: ie.a.wrapperTitle
					}, o.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(ce, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(de, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				me = s("./src/reddit/components/HumanDate/index.tsx"),
				ue = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				pe = s.n(ue);
			const be = e => {
				let {
					content: t
				} = e;
				var s;
				const n = (null == t ? void 0 : t.approvedBy) || "",
					r = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(G.Cb)(e, {
						userName: n
					}) : null),
					c = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(Y.a, {
					className: Object(T.a)(pe.a.userIcon),
					iconUrl: null == r ? void 0 : r.accountIcon,
					userName: n,
					isNSFW: !!(null == r ? void 0 : r.isNSFW)
				})), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${X.a.redditUrl}/user/${n}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n)), c && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(me.d, {
					seconds: c
				})))))
			};
			var he = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const fe = e => {
				let {
					content: t
				} = e;
				const s = Object(r.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || s.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case he.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case he.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case he.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case he.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case he.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: n.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return a.a.createElement("div", {
					className: pe.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: o
					} = e;
					return a.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: pe.a.filteredRow
					}, a.a.createElement(g.a, {
						isFilled: !0,
						name: o,
						className: Object(T.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, s), n && a.a.createElement("p", null, n)))
				}))
			};
			var xe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				ve = s("./src/reddit/selectors/subreddit.ts");
			const ge = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(G.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(b.b)(t),
					c = Object(i.e)(e => Object(ve.X)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					d = r && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(xe.b)(d) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, n ? a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(Y.a, {
					className: Object(T.a)(pe.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : a.a.createElement(g.a, {
					isFilled: !0,
					name: l,
					className: Object(T.a)(pe.a.coloredIcon, pe.a.icon)
				}), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, (null == n ? void 0 : n.username) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${X.a.redditUrl}/user/${n.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n.username)), m && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(me.d, {
					seconds: m
				}))) : d && Object(xe.e)(d, (null == n ? void 0 : n.username) || null, c.name))))
			};
			var _e = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				ye = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Oe = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var ke = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var Ce = s("./src/reddit/icons/fonts/Op/index.m.less"),
				je = s.n(Ce),
				we = s("./src/lib/lessComponent.tsx");
			we.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Oe.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(Oe.a, null, e.desc)), "OpIcon", je.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var Pe = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Ne = s.n(Pe);
			we.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Oe.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Ne.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var Se = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ie = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Te = s.n(Ie);
			we.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Oe.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Te.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Le = e => {
					let {
						content: t
					} = e;
					const s = Object(Ee.b)(),
						n = Object(i.d)(),
						c = Object(r.useCallback)(() => {
							const e = Object(b.a)(t.id),
								o = e ? O.eb : y.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(h.l)(r, t.id) : Object(h.k)(r, t.id);
							n(o(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, n]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(g.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(T.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return a.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object($.e)(n), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("div", {
						className: pe.a.reportMeta
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !d && a.a.createElement(ye.c, {
						className: pe.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(Se.a, {
						className: pe.a.ignoreButtonIcon
					}) : a.a.createElement(ke.a, {
						className: pe.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, r, i] = e;
						return n ? void 0 !== r && i ? a.a.createElement(_e.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: pe.a.snoozabledButton,
							dropdownClassName: pe.a.snoozableDropdown,
							iconClassName: pe.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Re = e => {
					let {
						content: t
					} = e;
					const s = N(t),
						o = Object(r.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return a.a.createElement(be, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return a.a.createElement(ge, {
										content: t
									});
								case n.FILTERED:
									return a.a.createElement(fe, {
										content: t
									});
								case n.REPORTED:
									return a.a.createElement(Le, {
										content: t
									});
								default:
									return a.a.createElement(r.Fragment, null)
							}
						}, [s, t]),
						[c, d] = Object(r.useState)(!1),
						l = Object(v.a)(),
						m = Object(r.useCallback)(e => {
							var n;
							e.stopPropagation(), d(!c), l(Object(Q.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(b.a)(t.id), !c))
						}, [l, t, c, d, s]),
						u = Object(i.e)(e => Object(J.d)(e)),
						p = Object(i.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					if (s === n.UNMODERATED) return null;
					const h = u && p;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(T.a)(pe.a.wrapper, {
							[pe.a.approved]: s === n.APPROVED,
							[pe.a.reported]: s === n.REPORTED,
							[pe.a.opened]: c,
							[pe.a.openable]: h
						}),
						onClick: h ? m : void 0
					}, o, h && a.a.createElement("button", {
						className: pe.a.caretButton
					}, a.a.createElement(g.a, {
						name: c ? L.a.caret_up : L.a.caret_down,
						className: pe.a.caretIcon
					}))), u && p && c && a.a.createElement(le, {
						className: pe.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Ae = (e, t) => Object(h.c)(t, e),
				Me = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: h
					} = e;
					const P = Object(v.a)(),
						S = Object(i.d)(),
						T = N(t),
						L = Object(i.e)(j.b),
						R = Object(b.b)(t),
						A = Object(i.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						M = Object(i.e)(e => Object(w.m)(e, {
							postId: t.id
						})),
						F = Object(p.a)(M),
						[D, B] = Object(r.useState)(!1),
						U = Object(i.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						z = Object(r.useRef)(null),
						W = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					D && U && S(Object(d.b)(t.id));
					const V = Object(r.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(x.a)(z, W, V);
					const q = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(T),
						G = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(T),
						H = R && F,
						Z = T === n.REMOVED && Object(b.b)(t) && t.removedByCategory === _.g.Reddit && !t.isRemoved && !t.isApproved,
						Q = T === n.FILTERED || Z,
						J = T === n.REMOVED && !t.modRemovalReason && !Q,
						X = [n.REMOVED, n.SPAM].indexOf(T) > -1,
						Y = R ? f.k : Ae,
						$ = Object(r.useCallback)(() => {
							const e = R ? O.r : y.a;
							S(e(t.id)), P(Y(t.id, "approve"))
						}, [P, S, t, R, Y]),
						ee = Object(r.useCallback)(() => {
							const e = R ? O.S : y.e;
							S(e(t.id, !1)), t.isRemoved && t.bannedBy === c.m ? P(Y(t.id, "confirm_remove")) : P(Y(t.id, "remove"))
						}, [P, S, t, R, Y]),
						te = Object(r.useCallback)(() => {
							S(Object(C.fetchReasonsAndOpenModal)(R ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, R, S]),
						se = Object(r.useCallback)(() => {
							S(Object(E.i)(Object(l.b)(t.id, !1))), P(Object(f.k)(t.id, "post_flair_picker"))
						}, [P, S, t]),
						ne = Object(r.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							R && S(Object(k.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [S, R, t]);
					return a.a.createElement("div", {
						className: I.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: z
					}, a.a.createElement(Re, {
						content: t
					}), a.a.createElement("div", {
						className: I.a.actionBar
					}, q && a.a.createElement(u.t, {
						className: [I.a.button, I.a.approve].join(" "),
						Icon: Object(g.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: I.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && a.a.createElement(u.t, {
						className: I.a.button,
						Icon: Object(g.b)("close"),
						iconPosition: u.h.L,
						iconClassName: I.a.icon,
						onClick: ee,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), J && a.a.createElement(u.t, {
						className: I.a.button,
						onClick: te,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Q && a.a.createElement(u.t, {
						className: I.a.button,
						Icon: Object(g.b)("close"),
						iconPosition: u.h.L,
						iconClassName: I.a.icon,
						onClick: ee,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), X && a.a.createElement(u.t, {
						className: I.a.button,
						Icon: Object(g.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: I.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && a.a.createElement(u.t, {
						className: I.a.button,
						Icon: Object(g.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: I.a.icon,
						onClick: se,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), R && L === Object(l.b)(t.id, !1) && a.a.createElement(l.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(l.b)(t.id, !1),
						onFlairChanged: ne
					}), a.a.createElement(K, {
						content: t,
						hostPostData: h,
						listingKey: s,
						moderatorPermissions: M
					}), A && a.a.createElement(m.a, {
						withOverlay: !0,
						postId: R ? t.id : void 0,
						commentId: R ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/redditGQL/types.ts");
			const r = (e, t) => {
				switch (e) {
					case o.y.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.y.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.y.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.y.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.y.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.y.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.y.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.y.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.y.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.y.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.y.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.y.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.y.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.y.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.y.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.y.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.y.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.y.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.y.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.y.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.y.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.y.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.y.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.y.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.y.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.y.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.y.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.y.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.y.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.y.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.y.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.y.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.y.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.y.UpdateRemovalReason:
					case o.y.WikiBanned:
					case o.y.WikiContributor:
					case o.y.WikiPageListed:
					case o.y.WikiPermLevel:
					case o.y.WikiRevise:
					case o.y.WikiUnbanned:
					case o.y.AcceptModeratorInvite:
					case o.y.AddCommunityTopics:
					case o.y.AddContributor:
					case o.y.AddModerator:
					case o.y.CreateAward:
					case o.y.CreateScheduledPost:
					case o.y.CreateRemovalReason:
					case o.y.CommunityStyling:
					case o.y.CommunityWidgets:
					case o.y.CreateRule:
					case o.y.DeleteAward:
					case o.y.DeleteRule:
					case o.y.DeleteScheduledPost:
					case o.y.DeleteOverriddenClassification:
					case o.y.DeleteRemovalReason:
					case o.y.DisableAward:
					case o.y.EditPostRequirements:
					case o.y.EditRule:
					case o.y.EditScheduledPost:
					case o.y.EditSettings:
					case o.y.EnableAward:
					case o.y.Events:
					case o.y.HiddenAward:
					case o.y.InviteModerator:
					case o.y.InviteSubscriber:
					case o.y.ModAwardGiven:
					case o.y.ModmailEnrollment:
					case o.y.OverrideClassification:
					case o.y.RemoveCommunityTopics:
					case o.y.RemoveContributor:
					case o.y.RemoveModerator:
					case o.y.RemoveWikiContributor:
					case o.y.ReorderModerators:
					case o.y.ReorderRules:
					case o.y.SetPermissions:
					case o.y.SnoozeReports:
					case o.y.SubmitContentRatingSurvey:
					case o.y.SubmitScheduledPost:
					case o.y.UnignoreReports:
					case o.y.UninviteModerator:
					default:
						return n.fbt._("Last mod action", null, {
							hk: "S9AMb"
						})
				}
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: m,
						className: u
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), d && o.a.createElement(a.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === c.g.Classic,
						[m.a.compactLayout]: s === c.g.Compact,
						[m.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(v),
				_ = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				O = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				k = s.n(O);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = d.a.wrapped(f.default, "InternalLink", k.a), w = d.a.div("Wrapper", k.a), P = d.a.div("Row", k.a), N = d.a.wrapped(_.a, "CommentIcon", k.a), S = d.a.div("TitleContainer", k.a), I = d.a.div("PostTitleContainer", k.a), T = d.a.wrapped(u.c, "PostTitle", k.a), L = d.a.wrapped(p.g, "PostTopMeta", k.a), R = d.a.wrapped(p.a, "MetaSeparator", k.a), A = Object(r.b)(() => Object(a.c)({
				comment: y.c,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), M = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(R, null), o.a.createElement(L, {
					metaSeparatorClassName: k.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: a
				} = e;
				if (!t) return null;
				const i = s || t.author,
					c = `/user/${i}/`;
				return o.a.createElement(j, {
					"data-click-id": "user",
					to: c,
					onClick: e => {
						(n || r) && (e.preventDefault(), a(c))
					}
				}, i)
			};
			t.a = Object(c.a)(Object(h.b)(A(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.b, {
					className: Object(i.a)(g.a.compactPostStyles, k.a.overviewCommentPost, {
						[k.a.banned]: !!e.post.bannedBy,
						[k.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(w, {
					style: {
						background: Object(x.e)(e)
					}
				}, o.a.createElement(P, null, o.a.createElement(N, null), o.a.createElement(S, null, C._("{postAuthor} commented on {postTitle} {postMeta}", [C._param("postAuthor", F({
					...e
				})), C._param("postTitle", o.a.createElement(I, null, o.a.createElement(T, {
					outboundLinkClassName: k.a.postTitleOutboundLink,
					post: r,
					size: u.b.Small,
					titleClassName: k.a.postTitleTitle
				}))), C._param("postMeta", M(e))], {
					hk: "d6l8e"
				})))))
			}))))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: n,
					...a
				} = e;
				return o.a.createElement("div", c({
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: s,
						[i.a.isLast]: n
					}, t)
				}, a))
			}
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
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				_ = s.n(g);
			const y = m.a.div("ProfileOwnerCommentWrapper", _.a),
				E = m.a.div("CommentContentWrapper", _.a),
				O = m.a.div("Wrapper", _.a),
				k = m.a.div("CommentSeparator", _.a),
				C = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.c)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(x.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: v.fb
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class j extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: r,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? w : P;
					return a.a.createElement(u.a, {
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
					}, a.a.createElement(O, {
						className: Object(l.a)({
							[_.a.isFirst]: i,
							[_.a.isLast]: c,
							[_.a.isAwarded]: r,
							[_.a.isNightmodeOn]: d
						})
					}, o()(s + 1, e => a.a.createElement(k, {
						key: e
					})), a.a.createElement(E, null, b(t, m, p))))
				}
			}
			const w = (e, t, s) => a.a.createElement(y, null, P(e, t, s, !0, !0)),
				P = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!o
					})
				};
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
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				shouldShowOverflow: "_39DoGlFlWC7-ZGIOESFdw0"
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Post/index.ts"),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.wc
			}), e => e === m.Od);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(y);
			const O = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(c.e)(e => Object(g.G)(e, {
						postId: t
					})),
					r = Object(c.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(_.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(x.a, {
					className: Object(f.a)(E.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(v.b, {
					className: E.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: E.a.subredditName
				}, r.displayText)) : null
			};
			var k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				C = s("./src/reddit/connectors/PostViewable/index.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/contexts/Post/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				S = s("./src/reddit/hooks/useIsOverlay.ts"),
				I = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				R = s.n(L);
			const A = e => {
				let {
					post: t
				} = e;
				const s = `${Object(T.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(T.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: R.a.postInformation
				}, o.a.createElement("h5", {
					className: R.a.title
				}, t.title), o.a.createElement("div", {
					className: R.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var M = s("./src/lib/isUrl/index.ts"),
				F = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/UserIcon/index.tsx"),
				U = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				z = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				V = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				q = s.n(V);
			const G = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(W.l)(t.author)),
					m = Object(n.useMemo)(() => Object(D.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(M.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || d(Object(F.d)(t.author))
				}, [d, t.author, u]);
				const p = !u && Object(z.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(U.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: q.a.media
				}, u ? o.a.createElement(D.b, {
					post: t,
					url: m,
					className: q.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: q.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: q.a.userIconContainer
				}, o.a.createElement(B.a, {
					className: Object(f.a)({
						[q.a.snoovatarUserIcon]: p,
						[q.a.defaultUserIcon]: b
					}, q.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: q.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Z = s.n(H);
			const K = Object(C.a)(null);
			var Q = Object(w.b)(K(e => {
					let {
						post: t
					} = e;
					const s = Object(I.a)(),
						n = Object(S.a)(),
						r = Object(N.a)(),
						a = Object(j.x)(s) && !n;
					return o.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(P.b)(t.permalink) : Object(k.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: Z.a.container
					}, o.a.createElement(A, {
						post: t
					}), o.a.createElement(G, {
						post: t
					})))
				})),
				J = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				X = s.n(J);
			const Y = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(Q, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: X.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(c.d)();
				if (!Object(c.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(d.y)(t, l.a.Click))
				}, o.a.createElement(Y, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(O, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
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
				}) : Object(i.B)(t) && Object(i.A)(t) ? o.a.createElement(te, {
					post: t
				}) : o.a.createElement(a.a, {
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
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: E,
					isOverlay: k,
					isTopicPage: C,
					post: j,
					shouldShowSubscribeButton: w,
					subredditOrProfile: P,
					tooltipType: N
				} = e, S = !!C, I = Object(_.a)(), T = Object(r.e)(e => !!P && Object(a.i)(e, P.id));
				return o.a.createElement("div", {
					className: O.a.metaContainer
				}, !n && !j.isSponsored && P && o.a.createElement(d.a, {
					postId: j.id,
					subredditName: P.name
				}, o.a.createElement(b.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: I
					}
				}, P.displayText)), P && P.isQuarantined && o.a.createElement(p.a, null), !n && !j.isSponsored && P && w && !E && o.a.createElement(h.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(g.k)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(y.i)(P) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: j.id,
					size: x.d.XXS,
					small: !0
				}), !n && !j.isSponsored && o.a.createElement(v.b, null), !n && !j.isSponsored && o.a.createElement(l.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), o.a.createElement(u.g, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: N,
					isModWithUserNotesPermissions: T
				}), o.a.createElement(m.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!n,
					post: j,
					tooltipType: N
				}), !S && o.a.createElement(i.a, {
					hideCta: s,
					thing: j,
					tooltipType: k ? u.f.Lightbox : void 0
				}), T && o.a.createElement(c.a, {
					postOrComment: j,
					className: O.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
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
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: g,
					shouldShowUpvoteRatioOnHover: _
				} = e, y = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && o.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: y,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: g,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: _
					}),
					shouldShowUpvoteRatioOnHover: _
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: j,
					hostPostData: P,
					iconClassName: N,
					inSubredditOrProfile: S,
					isCommentsPage: I,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: L,
					isModQueuePage: R,
					isModWithUserNotesPermissions: A,
					isOverlay: M,
					isTopicPage: F,
					listingKey: D,
					post: B,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: z,
					showSubreddit: W,
					showSubredditIcon: V,
					subredditOrProfile: q,
					isFollowed: G,
					shouldShowFollowButton: H,
					onFollowPostClick: Z
				} = e;
				const K = F,
					Q = q && Object(O.i)(q),
					J = Object(a.e)(e => {
						if (!Q) return !0;
						const t = Object(C.Ib)(e, B.author || "");
						return !t || t.enableFollowers
					}),
					X = Object(a.e)(k.a);
				return r.a.createElement("div", {
					className: Object(i.a)(w.a.container, t)
				}, W && q && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: q.url
				}, V && r.a.createElement(b.b, {
					className: Object(i.a)(w.a.subredditIcon, N),
					shouldHideNsfwIcon: j,
					subredditOrProfile: q
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, W && r.a.createElement(l.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.g, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: A,
					tooltipType: M ? p.f.Lightbox : void 0,
					post: B,
					showSub: W,
					subredditOrProfile: q
				}), r.a.createElement(u.a, {
					className: w.a.postBadges,
					displayText: q ? q.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: T,
					post: B,
					tooltipType: M ? p.f.Lightbox : void 0
				}), !K && r.a.createElement(c.a, {
					isPostDetail: I,
					thing: B,
					tooltipType: M ? p.f.Lightbox : void 0
				}), A && r.a.createElement(d.a, {
					postOrComment: B,
					className: w.a.addModNote
				})), q && J && W && U && !L && r.a.createElement(f.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(_.k)(B.id, e ? "unsubscribe" : "subscribe", "post", D, P),
					identifier: {
						name: q.name,
						type: Q ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: B.id,
					size: v.d.XS,
					priority: X ? v.c.Secondary : void 0,
					isShredditParityEnabled: X
				}), z && r.a.createElement(g.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(E.E)(B),
					source: B.source
				}, r.a.createElement(y.a, {
					className: w.a.outboundLinkIcon
				})), H && J && r.a.createElement(m.a, {
					isFilled: !!G,
					onClick: Z,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./node_modules/lodash/isEqual.js"),
				a = s.n(r),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Profile/index.ts"),
				j = s("./src/reddit/featureFlags/index.ts"),
				w = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/server/helpers/profileRedirect.ts"),
				T = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				L = s.n(T);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(y.v)({
					routeName: y.bb,
					privateListingType: y.k
				}),
				M = Object(p.c)({
					isDropdownMenuOpen: e => Object(P.a)(e) === D,
					isOwnProfile: (e, t) => Object(N.Y)(e, t.profileName),
					isHistoryTabEnabled: w.a,
					isSnoovatar30Enabled: j.d.snoovatar30,
					isSubscriptionsPinned: S.c
				}),
				F = Object(h.a)(E.a),
				D = "profile-nav-menu-tooltip",
				B = _.g + _.q + _.p;
			var U;
			t.a = A(Object(m.b)(M, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: n,
						privateListingType: r,
						profileName: i,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: h
					} = e;
					const [x, v] = Object(d.useState)(!1), y = Object(d.useRef)(null), [E, O] = Object(d.useState)([]), [C, j] = Object(d.useState)([]);
					return Object(d.useEffect)(() => {
						const e = V({
							isHistoryTabEnabled: s,
							profileName: i,
							isOwnProfile: n,
							routeName: m,
							privateListingType: r,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						O(e.filter(e => e.position === U.MENU));
						const t = [],
							d = c()(() => {
								const s = document.documentElement.clientWidth - 2 * _.p,
									n = s > B ? B : s;
								let o = 42;
								t.forEach(t => {
									o += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = o > n ? U.DROPDOWN : U.MENU
								});
								const r = e.filter(e => e.position === U.MENU);
								O(e => a()(r, e) ? e : r);
								const i = e.filter(e => e.position === U.DROPDOWN);
								j(e => a()(i, e) ? e : i), v(i.length > 0)
							}, 50);
						return o.a.read(() => {
							const e = y.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), d())
						}), window.addEventListener("resize", d), () => {
							window.removeEventListener("resize", d)
						}
					}, [s, i, n, m, r, p, h]), l.a.createElement("div", {
						className: L.a.container
					}, l.a.createElement(g.a, {
						bladeOpen: !1,
						offsetLeft: b ? _.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: L.a.menuContainer,
							ref: y
						}, E.map(e => l.a.createElement(z, R({}, e, {
							key: e.key
						})))), x && l.a.createElement("button", {
							className: Object(f.a)(L.a.mainLink),
							id: D,
							onClick: () => u(D)
						}, l.a.createElement(k.a, {
							name: "overflow_horizontal"
						})), x && l.a.createElement(F, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: D
						}, C.map(e => l.a.createElement(W, R({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(U || (U = {}));
			const z = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: o
					} = e;
					return o ? l.a.createElement(O.default, {
						className: Object(f.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						to: n
					}, s) : l.a.createElement("a", {
						className: Object(f.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						href: n
					}, s)
				},
				W = e => {
					let {
						isActive: t,
						internal: s,
						url: n,
						text: o
					} = e;
					return s ? l.a.createElement(u.a, {
						className: Object(f.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, o) : l.a.createElement("a", {
						className: Object(f.a)(L.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, o)
				},
				V = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isHistoryTabEnabled: a,
						isSnoovatar30Enabled: i,
						viewBlockedConsent: c
					} = e;
					const d = s ? [{
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: U.MENU
					}] : [];
					s ? (d.push({
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: U.MENU
					}), d.push({
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: U.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: U.MENU
					});
					const l = a && s ? [{
							internal: !0,
							isActive: o === x.Sb.PROFILE_PRIVATE && r === C.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: U.MENU
						}] : [],
						m = i ? [{
							internal: !0,
							isActive: o === x.Sb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: U.MENU
						}] : [],
						u = c ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: o === x.Sb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(I.a)(t)}/${u}`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: U.MENU
					}, ...m, ...l, ...d]
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
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				i = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				u = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = s("./src/reddit/constants/posts.ts");
			const b = Object(n.a)({
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
				h = e => r.a.createElement(a.a, {
					className: e.className
				}, r.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), r.a.createElement(i.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, {
					profileName: e.profileName
				}), r.a.createElement(d.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/isComment.ts"),
				x = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				g = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				y = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				k = s.n(O);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = (e, t) => `SnoozableReport--${t}--${e}`, w = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(E.b)(j(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: j(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), P = Object(u.a)(b.a);
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(x.p)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: m
					} = this.props, u = j(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(h.b, {
						id: u,
						className: Object(i.a)(k.a.DropdownLabelContainer, d),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: u,
						className: k.a.DropdownLabel
					}, a ? C._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(g.a, null) : o.a.createElement(v.a, null))), o.a.createElement(P, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(k.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: k.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(y.a, {
						className: m
					}), C._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: m
					}), C._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = w(Object(p.c)(N))
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: o,
					items: c,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: v
				} = e, [g, _] = Object(a.useState)(!1), y = c.length > b || s, E = (!y || g ? c : r()(c, b)).map(e => x({
					item: e
				})), O = () => {
					g || _(!0), g && !s && _(!1), s && h && h()
				};
				return i.a.createElement(d.a, {
					className: t,
					headerButton: o,
					title: v
				}, E, i.a.createElement(u.a, null, i.a.createElement(p.a, null, y && (() => {
					const e = !g || s && h ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return i.a.createElement(l.r, {
						onClick: O
					}, f ? i.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: c.Yb
			}, t.a = b
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(h);
			const x = Object(i.c)({
					currentUser: b.m,
					moderated: u.p,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				v = Object(a.b)(x, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				g = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: a,
					hasMoreModerated: i,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(s, new Set(a));
				return r.a.createElement(d.a, {
					className: f.a.container,
					title: u,
					items: p,
					renderItem: g,
					hasMoreItems: i,
					onLoadMore: c,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const h = Object(c.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.q
				}),
				f = Object(a.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				x = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(i.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: b.a.meta
					}, t.subredditCount && n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: a,
					profileName: i
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: a,
					pending: s,
					renderItem: x,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", i)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const h = Object(i.b)(i.d, b.a);
			var f = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = s.n(x),
				g = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/lib/opener/index.ts");
			const y = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(f.t)(e, Object(f.o)(e, s))
				}
			}, h);
			t.a = Object(a.b)(y)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: w
				})
			});
			const E = g.a.wrapped(u.a, "TrophyItem", v.a),
				O = g.a.div("TrophyIcon", v.a),
				k = g.a.h5("TrophyName", v.a),
				C = g.a.div("TrophyContent", v.a),
				j = g.a.wrapped(d.c, "Description", v.a),
				w = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(E, {
						key: t.id
					}, r.a.createElement(O, null, t.url ? r.a.createElement("a", {
						target: _.d.BLANK,
						rel: _.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.T(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), r.a.createElement(C, null, r.a.createElement(k, null, t.name), r.a.createElement(j, null, t.description)))
				}
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
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
					const t = Object(a.e)(i.e),
						s = Object(a.e)(i.a);
					return t || s ? r.a.createElement(c, e) : null
				}
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
				continue: "_2iLUa1DN5bY9-oFqq3UDXm",
				dismiss: "jUfd4Daob69A2WDKby-IL",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk",
				skippable_buttons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippableButtons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippable_text: "_34buUN_wpZWBk7ZZDKk22N",
				skippableText: "_34buUN_wpZWBk7ZZDKk22N",
				divider: "_1JdIhyGz5k8UXyob0yI3eQ",
				dividerLine: "_2EgPyPNCnTr8g29n_87SnQ",
				dividerText: "_2XFvLCiMiPd0uBLWJYtxVx",
				no_border: "_2Mu2w6atAZCJ-gttdRheE",
				noBorder: "_2Mu2w6atAZCJ-gttdRheE",
				contentDescription: "_2jlY07_8wxFjuu6Ecrk9zV",
				warning__bypassable: "_38T2FKI5k99IDlivrOi6kk",
				warningBypassable: "_38T2FKI5k99IDlivrOi6kk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n, o = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/helpers.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/actions/login.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/components/Footer/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				_ = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/sample/index.ts"),
				E = s("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(n || (n = {}));
			const O = e => {
				Object(g.b)() || Object(E.b)(_.o.Redesign, {
					type: E.a.NsfwBypassableBlocking,
					data: {
						action: e
					}
				})
			};
			var k = s("./src/reddit/selectors/telemetry.ts");
			const C = "nsfw_dialog_bypassable";
			var j;
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(j || (j = {}));
			var w = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: e.fill || j.DEFAULT
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: e.fill || j.DEFAULT
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: e.fill || j.DEFAULT
				})),
				P = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				N = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				S = s("./src/reddit/actions/contentGate.ts"),
				I = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				T = s.n(I);
			const L = {
					d2x_nsfw_signup_blocking_de_v1: `${o.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${o.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				R = () => r.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				A = () => r.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				M = e => {
					const t = Object(c.d)(),
						s = Object(f.b)(),
						n = Object(c.e)(P.g),
						o = Object(a.useCallback)(() => {
							n === P.a.Blurred && t(Object(b.k)({
								actionSource: b.a.NsfwBlockingModal
							}))
						}, [t, n]),
						m = (e => e ? i.a.createElement("div", {
							className: T.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: T.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === P.a.Blurred);
					return Object(a.useEffect)(() => {
						Object(g.d)(n)
					}, [n]), i.a.createElement("div", {
						className: T.a.mainCta
					}, i.a.createElement(w, null), m, i.a.createElement("div", {
						className: T.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: T.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: T.a.buttonContainer
					}, i.a.createElement(v.j, {
						className: T.a.logIn,
						onClick: () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "click",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(k.d)(e)
								}
							}))()), o(), Object(g.c)(g.a.Login), t(Object(p.openLoginModal)())
						}
					}, R()), i.a.createElement(v.j, {
						className: T.a.cancel,
						onClick: () => {
							Object(l.b)(), s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: "nsfw_dialog",
								actionInfo: {
									...Object(k.d)(e)
								}
							}))()), Object(g.c)(g.a.Dismiss), t(Object(d.b)("/"))
						}
					}, A())))
				},
				F = Object(u.a)(e => {
					const t = `${o.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: T.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: T.a.qrCodeInner
					}, i.a.createElement("img", {
						className: T.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: T.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: T.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: T.a.sneakySnoo,
						src: t
					})))
				}),
				D = e => {
					const t = Object(f.b)(),
						{
							contentTitle: s
						} = e,
						n = Object(c.e)(P.i),
						o = Object(c.e)(P.j),
						r = Object(c.e)(P.g),
						a = Object(c.e)(N.c);
					i.a.useEffect(() => {
						a.isNewDesignVariant ? t((() => e => ({
							...Object(k.o)(e),
							source: "xpromo",
							action: "view",
							noun: C,
							actionInfo: {
								...Object(k.d)(e)
							}
						}))()) : t((() => e => ({
							...Object(k.o)(e),
							source: "xpromo",
							action: "view",
							noun: "nsfw_dialog",
							actionInfo: {
								...Object(k.d)(e)
							}
						}))())
					}, [a, t]);
					const d = r === P.a.Blurred ? h.a.White : r === P.a.NoPreview ? h.a.Grey : void 0;
					return i.a.createElement("div", {
						className: T.a.container
					}, a.isNewDesignVariant ? i.a.createElement(B, {
						contentTitle: s
					}) : i.a.createElement(M, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(m.a)(T.a.footerWrapper, {
							[T.a.mIsModal]: r === P.a.Blurred
						})
					}, i.a.createElement(h.b, {
						textColor: d
					})), i.a.createElement(F, {
						qrCodeAsset: (() => n === x.cd.Enabled || o === x.eb.BlurredPreview || o === x.eb.NoPreview ? L.d2x_nsfw_signup_blocking_de_v1 : L.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				B = e => {
					const t = Object(c.d)(),
						s = Object(f.b)(),
						o = Object(c.e)(P.h);
					return Object(a.useEffect)(() => {
						(e => {
							!Object(g.b)() && e && Object(y.b)(10) && Object(E.b)(_.o.Redesign, {
								type: E.a.NsfwBypassableBlocking,
								data: {
									action: n.View,
									variant: e
								}
							})
						})(o)
					}, [o]), i.a.createElement("div", {
						className: Object(m.a)(T.a.mainCta, {
							[T.a.skippable_buttons]: o === x.fb.SkippableButtons,
							[T.a.skippable_text]: o === x.fb.SkippableText
						})
					}, i.a.createElement("div", {
						className: T.a.contentDescription
					}, i.a.createElement(w, {
						fill: j.BLACK
					}), i.a.createElement("span", {
						className: T.a.cta
					}, e.contentTitle), i.a.createElement("span", {
						className: Object(m.a)(T.a.warning, T.a.warning__bypassable)
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), i.a.createElement("div", {
						className: T.a.cta
					}, (() => r.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), i.a.createElement("div", {
						className: T.a.buttonContainer
					}, i.a.createElement(v.j, {
						className: T.a.logIn,
						onClick: () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "click",
								noun: C,
								actionInfo: {
									...Object(k.d)(e),
									popupButtonText: "login"
								}
							}))()), O(n.Login), t(Object(p.openLoginModal)())
						}
					}, R()), o === x.fb.SkippableButtons && i.a.createElement("div", {
						className: T.a.divider
					}, i.a.createElement("div", {
						className: T.a.dividerLine
					}), i.a.createElement("div", {
						className: T.a.dividerText
					}, (() => r.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), i.a.createElement("div", {
						className: T.a.dividerLine
					})), i.a.createElement(v.j, {
						className: T.a.continue,
						onClick: async () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "click",
								noun: C,
								actionInfo: {
									...Object(k.d)(e),
									popupButtonText: "continue"
								}
							}))()), O(n.Continue), Object(S.q)(), Object(N.d)(), window.location.reload()
						}
					}, (() => r.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), i.a.createElement(v.j, {
						className: Object(m.a)(T.a.continue, T.a.dismiss, {
							[T.a.no_border]: o === x.fb.SkippableText
						}),
						onClick: () => {
							s((() => e => ({
								...Object(k.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: C,
								actionInfo: {
									...Object(k.d)(e),
									popupButtonText: "back"
								}
							}))()), O(n.Dismiss), t(Object(d.b)("/"))
						}
					}, o === x.fb.SkippableText ? (() => r.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : A())))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i);
			const d = r.a.div("WidgetBackground", c.a),
				l = r.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return o.a.createElement("div", s, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = s.n(O);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(d.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? r.a.createElement(x.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: k.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(P, C({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.t, {
					className: k.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(c.c)({
					hideNSFWPref: y.H,
					nightmode: y.fb
				}),
				P = Object(a.b)(w)(e => r.a.createElement("div", {
					className: Object(d.a)(k.a.communityItemContainer, {
						[k.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(g.a, {
					className: k.a.communityItemExpandCenter,
					widthRight: h.s
				}, r.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(k.a.defaultCommunityIcon, {
						[k.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: k.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), r.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: k.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: k.a.nsfwFlair,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(x.a, {
					className: Object(d.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.t, {
					className: k.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: k.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(o.e)(e) : Object(o.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				_ = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = s.n(_);
			var E = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, a = t.username,
						i = "";
					return n !== u.a.Twitter ? null : (r = o.a.createElement(v.a, {
						className: y.a.twitterLogo
					}), i = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = `@${t.username}`, o.a.createElement(g.a, null, o.a.createElement("span", {
						className: y.a.icon
					}, r), o.a.createElement(f.b, {
						className: y.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: y.a.linkTitle
					}, o.a.createElement("span", {
						className: y.a.name
					}, a), o.a.createElement(x.a, {
						className: y.a.linkIcon
					})), o.a.createElement("div", {
						className: y.a.linkDescription
					}, i))))
				},
				O = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				k = s.n(O);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(a.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(b.Cb)(e, {
						userName: s.name
					}) : null
				}
			}), w = Object(r.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(w(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(i.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, C._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: k.a.account
				}, o.a.createElement(E, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const g = {
					autoplayPref: v.d,
					activeModalId: m.a,
					crosspost: f.d,
					isActive: f.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: f.l,
					isExpanded: f.m,
					isLoggedIn: v.S,
					showPromotedCTA: x.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: d.t,
					flairStyleTemplate: d.Y,
					showCTAExperimentDesign: p.a
				},
				_ = Object(n.b)(() => Object(o.c)(g), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(_(Object(c.b)(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts"),
				O = s("./src/reddit/selectors/user.ts");

			function k() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const C = k(),
				j = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: g.g,
					postsById: _.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(_.D)(e, s, n, o)
					}),
					subredditsById: y.eb,
					viewportDataLoaded: E.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: v.e,
					isLoggedIn: O.S
				},
				w = Object(o.c)(j),
				P = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(d.M(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(d.N(t, n, o))
					},
					showModalOnScroll: () => e(d.ab()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				S = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: a
					} = n;
					return Object(h.k)(e, t, "post", o, r, a, void 0)
				},
				I = Object(n.b)(w, P, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: S
				}));
			t.a = e => Object(u.c)(C(I(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(o.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: m.m,
				modModeEnabled: d.W,
				showEditFlair: u.a
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: o
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: o
						}))
					},
					handleVote: t => {
						const n = t === c.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(r.eb)(s)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: n,
						selectedTemplateId: o
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: n,
						selectedTemplateId: o
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
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
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				a = 4,
				i = 1e4,
				c = .2,
				d = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return v
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "l", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/makeRequest/index.ts"),
				i = s("./src/reddit/models/Subreddit/index.ts"),
				c = s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				d = s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				m = s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				u = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				p = s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				h = s("./src/redditGQL/operations/ReportTalk.json"),
				f = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				x = s("./src/redditGQL/types.ts");
			const v = (e, t) => Object(r.a)(e, {
					...h,
					variables: t
				}),
				g = async (e, t) => {
					const s = await Object(r.a)(e, {
						...m,
						variables: t
					});
					return !!Object(a.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(x.N.Talk)
				}, _ = async (e, t) => {
					var s, n;
					const o = await Object(r.a)(e, {
						...u,
						variables: t
					});
					return !!Object(a.c)(o) && (null !== (n = null === (s = o.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== n ? n : []).includes(x.N.Talk)
				}, y = async e => {
					var t;
					const s = await Object(r.a)(e, l);
					return Object(a.c)(s) && null !== (t = s.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, E = (e, t, s) => t.type === i.g.User ? Object(r.a)(e, {
					...c,
					variables: s
				}) : Object(r.a)(e, {
					...d,
					variables: {
						...s,
						subredditId: t.id
					}
				}), O = (e, t, s) => t.type === i.g.User ? Object(r.a)(e, {
					...b,
					variables: {
						input: s
					}
				}) : Object(r.a)(e, {
					...p,
					variables: {
						input: {
							...s,
							subredditId: t.id
						}
					}
				}), k = () => Object(o.a)(), C = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, j = {
					[x.l.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[x.l.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[x.l.RoomLimitExceeded]: n.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[x.l.ConcurrentRoomLimitExceeded]: n.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[x.l.SubredditRoomLimitExceeded]: n.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, w = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, P = {
					[x.P.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[x.P.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, N = (e, t) => Object(r.a)(e, {
					...f,
					variables: t
				})
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModAction: o,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, a = [], i = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const n = null == s ? void 0 : s.id;
					n && (a.push(n), i[n] || (i[n] = {
						info: {},
						lastModAction: {}
					}), i[n].info = s, i[n].lastModAction = {
						...t
					})
				});
				const c = {
					lastModAction: o,
					activeMods: a
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: c,
						mods: i
					}
				}
			}
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, r, a) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, n) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.ub)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
				}),
				d = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, a, i) => c => ({
					...Object(r.o)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(c, e, void 0, i),
					subreddit: Object(r.lb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.lb)(n)
				})
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				r = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				a = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				i = (e, t) => s => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(n.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(s, t)
					}
				}),
				c = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(o, t)
					}
				}),
				d = (e, t, s, o) => r => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.mb)(r, e)
				})
		},
		"./src/reddit/helpers/trackers/talkCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/lib/eventTools/index.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/postCreations.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					...a.o(e),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_room"
					}
				}),
				c = () => e => ({
					...a.o(e),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_topic_picker"
					}
				}),
				d = () => e => ({
					...a.o(e),
					source: "liveaudio",
					action: o.c.CLICK,
					noun: "go_live",
					subreddit: a.lb(e),
					liveAudioRoom: {
						title: Object(r.vb)(e),
						topicIds: Object(r.ub)(e).topics.map(e => e.id)
					}
				}),
				l = () => e => ({
					...a.o(e),
					source: "liveaudio",
					action: o.c.CLICK,
					noun: "schedule",
					subreddit: a.lb(e),
					liveAudioRoom: {
						title: Object(r.vb)(e),
						topicIds: Object(r.ub)(e).topics.map(e => e.id)
					}
				}),
				m = () => e => ({
					...a.o(e),
					source: "post_composer",
					action: o.c.CLICK,
					noun: "overflow",
					subreddit: a.lb(e),
					liveAudioRoom: {
						title: Object(r.vb)(e)
					}
				}),
				u = e => t => ({
					...a.o(t),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					subreddit: a.lb(t),
					post: a.K(t, e),
					postEvent: {
						eventState: n.a.Future
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
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(c.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const o = 50,
				r = 50,
				a = 1e4,
				i = 100;
			var c, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				m = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/telemetry/models/Event.ts");
			var c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx");
			var l = e => o.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, o.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), o.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), o.a.createElement("defs", null, o.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, o.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.i)(e => {
				let {
					username: t,
					avatar: s,
					history: r,
					location: u
				} = e;
				const h = Object(c.a)();
				return Object(n.useEffect)(() => {
					h((() => e => {
						var t, s;
						return {
							source: i.f.BlockedProfileInterstitial,
							action: i.d.View,
							noun: i.e.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (s = null === (t = a.T(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
							},
							...a.o(e)
						}
					})())
				}, [h, t]), o.a.createElement("div", {
					className: p.a.container
				}, o.a.createElement(l, {
					className: p.a.accent
				}), o.a.createElement("div", {
					className: p.a.avatarContainer
				}, o.a.createElement("img", {
					className: p.a.avatar,
					src: null != s ? s : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: b._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), o.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, o.a.createElement(d.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), o.a.createElement("h3", {
					className: p.a.title
				}, b._("u/{name} is blocked", [b._param("name", t)], {
					hk: "18rExM"
				})), o.a.createElement("p", {
					className: p.a.subtitle
				}, b._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), o.a.createElement("div", {
					className: p.a.btnContainer
				}, o.a.createElement(m.t, {
					className: p.a.btn,
					to: `${u.pathname}?consent=true`,
					kind: m.b.InternalLink,
					priority: m.c.Primary,
					size: m.d.L,
					onClick: () => h((() => e => {
						var t, s;
						return {
							source: i.f.BlockedProfileInterstitial,
							action: i.d.Accept,
							noun: i.e.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (s = null === (t = a.T(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
							},
							...a.o(e)
						}
					})()),
					isFullWidth: !0,
					isSquare: !0
				}, b._("Continue", null, {
					hk: "3eqDZf"
				})), o.a.createElement(m.t, {
					className: p.a.btn,
					to: "#",
					kind: m.b.InternalLink,
					priority: m.c.Secondary,
					size: m.d.L,
					onClick: () => {
						h((() => e => {
							var t, s;
							return {
								source: i.f.BlockedProfileInterstitial,
								action: i.d.Deny,
								noun: i.e.BlockedProfileInterstitial,
								targetUser: {
									id: null !== (s = null === (t = a.T(e)) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
								},
								...a.o(e)
							}
						})()), r.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, b._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				f = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				x = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				v = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				_ = s("./src/reddit/components/ContentGate/index.tsx"),
				y = s("./src/reddit/components/EmptyProfile/index.ts"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				O = s("./src/reddit/components/JumpToContent/index.tsx"),
				k = s("./src/reddit/components/PostList/index.tsx"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/isPinnedAdminPost/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				N = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				S = s("./node_modules/lodash/last.js"),
				I = s.n(S);
			var T = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				L = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/components/ClassicPost/index.tsx"),
				A = s("./src/reddit/components/LargePost/index.tsx"),
				M = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				F = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				D = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				B = s("./src/reddit/selectors/profile.ts"),
				U = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				z = s.n(U);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = P.a.div("ExtraCommentsItemWrapper", z.a), q = P.a.p("ExtraComments", z.a), G = P.a.wrapped(q, "ExtraCommentsInteractive", z.a);
			var H = Object(i.b)(() => Object(c.c)({
					extraCommentsItem: B.d,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.pages.profileOverview.conversations;
						return !!n.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(g.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: n
					} = e;
					return a.a.createElement(V, null, n ? a.a.createElement(q, null, W._("Loading...", null, {
						hk: "47z90C"
					})) : a.a.createElement(D.a.Consumer, null, e => a.a.createElement(G, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, W._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				Z = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				K = s("./src/reddit/contexts/Post/index.tsx"),
				Q = s("./src/reddit/hooks/useTheme.ts"),
				J = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(X),
				$ = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const se = P.a.div("BackgroundWrapper", ee.a),
				ne = P.a.wrapped(R.default, "ClassicPost", ee.a),
				oe = P.a.wrapped(M.a, "OverviewCommentPost", ee.a),
				re = Object(i.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(N.a)(s, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(N.a)(s, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(L.p)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(L.r)(e, s, n)
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), o = s.models[n];
							return o ? o.username : void 0
						})(e, s)
					},
					layout: p.U
				})),
				ae = P.a.wrapped(A.default, "OverviewLargePost", ee.a),
				ie = re(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: o,
						forceLoadMedia: r,
						headComment: i,
						isInitiallyPinned: c,
						isPinned: d,
						isScrolling: l,
						last: m,
						layout: u,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						post: f,
						postId: x,
						profileName: v,
						scrollerItemRef: g,
						shouldShowInsightsButton: _
					} = e, y = {
						last: m,
						onClickPost: p,
						postId: x
					};
					if (!v) return null;
					const E = v === f.author,
						O = Object(w.a)(d, f.distinguishType);
					if (!E && !i && !O) return null;
					const k = i ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), I()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								o = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: o
								}), t.next ? (n = t.next.id, o = t.next.type) : n = void 0
							}
							return s
						}(n, i)) : [],
						C = k.length - 1;
					return a.a.createElement("div", {
						className: Object(j.a)(Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, ee.a.OverviewConversationsPost, s),
						style: {
							...Object(T.b)(),
							...Object(T.d)(e)
						}
					}, a.a.createElement(F.a, {
						className: _ ? ee.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: C < 0,
						key: f.id
					}, !E && !!i && a.a.createElement(oe, te({}, y, {
						commentId: i,
						key: f.id,
						profileName: v
					})), (E || O) && (u === J.g.Classic ? a.a.createElement(ne, {
						availableWidth: t,
						eventFactory: o,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: r,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: x,
						scrollerItemRef: g
					}) : a.a.createElement(ae, {
						availableWidth: t,
						eventFactory: o,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: r,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: x,
						scrollerItemRef: g,
						shouldShowInsightsButton: _
					}))), a.a.createElement(se, {
						style: {
							background: Object(T.e)(e)
						}
					}, !c && k.map((e, t) => a.a.createElement(F.a, {
						isLast: t === C,
						key: `${t}-isLast[${t===C}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							o = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(Z.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: o,
							key: t.id,
							profileName: v,
							showModTools: !0
						}) : a.a.createElement(H, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: v
						})
					})))))
				});
			var ce = Object(K.b)((function(e) {
					var t;
					const s = Object(Q.a)(),
						n = Object(p.gb)();
					return a.a.createElement(ie, te({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.j)(n),
						pageLayer: n
					}, e))
				})),
				de = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				le = s("./src/reddit/helpers/trackers/post.ts"),
				me = s("./src/reddit/selectors/tracking.ts"),
				ue = s("./src/reddit/connectors/PostList/index.ts");
			const pe = Object(c.c)({
					...ue.d,
					postIds: L.O,
					viewportDataLoaded: me.a
				}),
				be = Object(ue.c)(),
				he = Object(i.b)(pe, ue.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(le.k)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? de.a : ce
					}
				}));
			var fe = (e => Object(C.c)(be(he(e))))(k.a),
				xe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ve = s("./node_modules/lodash/debounce.js"),
				ge = s.n(ve),
				_e = s("./src/reddit/actions/post.ts"),
				ye = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ee = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Oe = s("./src/reddit/components/Media/index.tsx"),
				ke = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ce = s("./src/reddit/components/PostContainer/index.tsx"),
				je = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				we = s("./src/reddit/components/PostTitle/index.tsx"),
				Pe = s("./src/reddit/connectors/miniCardPost.ts"),
				Ne = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Se = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Ie = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Te = s("./src/reddit/models/Media/index.ts"),
				Le = s("./src/reddit/models/Post/index.ts"),
				Re = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ae = s("./src/reddit/components/CommentsLink/index.tsx"),
				Me = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Fe = s("./src/reddit/components/Flatlist/index.tsx"),
				De = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Be = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Ue = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ze = s("./src/reddit/components/ShareMenu/index.tsx"),
				We = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ve = s("./src/reddit/models/User/index.ts"),
				qe = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Ge = s.n(qe);
			const He = "-MiniCardModMenu",
				Ze = "-MiniCardOverflowMenu",
				Ke = "-MiniCardShareMenu",
				Qe = P.a.wrapped(Me.a, "HorizontalVotes", Ge.a),
				Je = P.a.button("ShareButton", Ge.a),
				Xe = Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isProfilePostListing: p.N,
					pageLayer: e => e
				}),
				Ye = Object(c.c)({
					layout: p.U,
					subreddit: p.s
				});
			var $e = Xe(Object(i.b)(Ye, {})(Object(C.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: o,
						hasModFlairPerms: r,
						hasModFullPerms: i,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: x,
						sendEvent: v,
						showEditFlair: g,
						showEditPost: _,
						subreddit: y
					} = e, E = e => v(Object(le.k)(x.id, e)), O = x.postId, k = Object(Fe.d)(He, x.id, m, p), C = !!n && Object(Ve.e)(n) === x.author;
					return a.a.createElement("div", {
						className: Object(j.a)(Ge.a.flatlistContainer, s)
					}, a.a.createElement(Qe, {
						compact: !1,
						model: x,
						onVoteClick: o,
						scoreClassName: Ge.a.score
					}), a.a.createElement(Ae.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: x.id,
						modModeEnabled: h,
						numComments: x.numComments,
						type: J.g.Compact,
						onClick: f
					}), a.a.createElement(ze.a, {
						className: Ge.a.shareMenu,
						dropdownId: Object(Fe.d)(Ke, x.id, m, p),
						permalink: x.permalink,
						post: x,
						sendEventWithName: E,
						subredditType: null == y ? void 0 : y.type
					}, a.a.createElement(Je, null, a.a.createElement(We.a, {
						className: Ge.a.shareIcon
					}), a.a.createElement("span", {
						className: Ge.a.shareText
					}, Re.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && a.a.createElement(De.a, {
						dropdownId: k,
						onClick: () => E("post_mod_action_menu")
					}, a.a.createElement(Fe.b, {
						className: Ge.a.modActionsIcon
					}), a.a.createElement(Be.a, {
						canEditFlair: r && !!g,
						hasModPostPerms: c,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: C,
						modModeEnabled: h,
						post: x,
						tooltipId: k
					})), a.a.createElement(Ue.a, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: x.permalink,
						postId: O,
						dropdownId: Object(Fe.d)(Ze, x.id, m, p),
						isFixed: p,
						sendEvent: v,
						showEditPost: !!_,
						showEditFlair: !!g,
						useFlatlistBreakpoints: Object(Ue.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))
				}))),
				et = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				tt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				st = s("./src/reddit/components/MiniCardPost/index.m.less"),
				nt = s.n(st);
			var ot = Object(p.v)()(Object(K.b)(Object(Pe.a)(Object(ye.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: o,
						crosspostSubredditOrProfile: r,
						currentUser: i,
						eventFactory: c,
						flairStyleTemplate: d,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: u,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: x,
						showMetaLine: v = !0,
						showEditFlair: g,
						subredditOrProfile: _,
						userIsOp: y
					} = e, {
						media: E
					} = o || h, O = E && E.type, k = Object(je.b)(h.id), C = O === Te.o.RTJSON, w = y && C, P = Object(Ie.a)(u), N = Object(Ne.a)(u), S = Object(Se.a)(u), I = E && O !== Te.o.RTJSON && O !== Te.o.TEXT, L = O === Te.o.VIDEO || O === Te.o.GIFVIDEO, R = Object(Le.q)(h), A = E && a.a.createElement(Oe.a, {
						autoplayPref: t,
						availableWidth: s,
						className: nt.a.media,
						imageBoxClassName: Object(j.a)(nt.a.mediaImageBox, {
							[nt.a.videoStyles]: L
						}),
						imageBoxContentImageClassName: nt.a.mediaImageBoxContentImage,
						forceAspectRatio: Te.b,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: o || h,
						scrollerItemRef: f,
						shouldPause: x,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(Ce.b, {
						className: Object(j.a)(nt.a.postContainer, Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, Object(T.a)(e), n),
						style: {
							...Object(T.b)(e.flairStyleTemplate),
							...Object(T.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: c
					}, a.a.createElement(ke.a, {
						className: nt.a.backgroundWrapper,
						flairStyleTemplate: d
					}, I && A, a.a.createElement("div", {
						className: nt.a.innerContainer
					}, R && a.a.createElement(tt.a, {
						post: h,
						templatePlaceholderImage: d ? d.postPlaceholderImage : void 0
					}), a.a.createElement(we.c, {
						className: nt.a.postTitleCompact,
						hideSourceLink: !0,
						post: h,
						size: we.b.Large,
						titleColor: d && d.postTitleColor
					}), v && _ && a.a.createElement(et.a, {
						className: nt.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: _
					}), !I && a.a.createElement("div", {
						className: nt.a.mediaWrapper
					}, A), a.a.createElement("div", {
						className: nt.a.flexSpacer
					}), a.a.createElement($e, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: N,
						hasModFullPerms: S,
						hasModPostPerms: P,
						modModeEnabled: p,
						post: h,
						showEditFlair: g,
						showEditPost: w
					}))), e.activeModalId === k && a.a.createElement(je.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: k,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(Ee.d, null))
				})))),
				rt = s("./src/reddit/helpers/getClickInfo.ts"),
				at = s("./src/reddit/helpers/localStorage/index.ts"),
				it = s("./src/reddit/selectors/user.ts"),
				ct = s("./src/reddit/icons/fonts/index.tsx"),
				dt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				lt = s.n(dt);
			const {
				fbt: mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ut = e => a.a.createElement("div", {
					className: Object(j.a)(lt.a.container, e.className)
				}, a.a.createElement(ct.a, {
					name: "pin",
					className: lt.a.pin
				}), a.a.createElement("div", {
					className: lt.a.title
				}, mt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				pt = s("./src/reddit/controls/TextButton/index.tsx"),
				bt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ht = s.n(bt);
			const {
				fbt: ft
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var xt = e => a.a.createElement(ut, {
					className: Object(j.a)(ht.a.container, e.className)
				}, a.a.createElement("div", {
					className: ht.a.description
				}, ft._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(pt.a, {
					className: ht.a.gotIt,
					onClick: e.onGotItClick
				}, ft._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				vt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				gt = s.n(vt);
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = 320, Et = 300, Ot = Object(c.c)({
				arePinnedPostsLoaded: L.a,
				currentUser: it.m,
				pinnedPostIds: L.P
			}), kt = Object(i.b)(Ot, e => ({
				openPost: t => e(Object(_e.K)(t))
			}));
			class Ct extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = ge()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Et ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(at.Hb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(rt.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(ot, {
						postId: e,
						key: e,
						availableWidth: yt,
						className: Object(j.a)(gt.a.item, gt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(at.K)()
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
					const n = !!this.props.currentUser && this.props.profileName === Object(Ve.e)(this.props.currentUser),
						o = t.length > 0,
						r = !o && this.state.showEducation && n;
					if (!o && !r) return null;
					const i = n && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: gt.a.title
					}, _t._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? a.a.createElement(xt, {
						className: Object(j.a)(gt.a.item, gt.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: gt.a.container
					}, t.map(this.renderPost), i && a.a.createElement(ut, {
						className: gt.a.item
					})), s)
				}
			}
			var jt = Object(p.v)()(kt(Ct)),
				wt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Pt = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Nt = s("./src/reddit/helpers/name/index.ts"),
				St = s("./src/reddit/helpers/trackers/screenview.ts"),
				It = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Tt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Lt = s("./src/reddit/models/ContentGate.ts"),
				Rt = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				At = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Mt = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts");

			function Ft() {
				return (Ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(d.a)(s.search)])
				},
				Bt = Object(p.v)(),
				Ut = Object(c.c)({
					isOwnProfile: p.G,
					over18Prefs: it.mb,
					layout: p.U
				}),
				zt = Object(c.a)(Ut, Dt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(B.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(v.a)(e, Dt(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(L.n)(e, {
						profileName: s.params.profileName
					})
				}, it.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(it.h)(e, b.qc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isBlocked: Object(it.N)(e, {
							profileName: s.params.profileName
						})
					}
				}, At.g, Mt.a, (e, t, s, n, o, r, a, i, c, d, l) => {
					let {
						sort: u,
						t: p
					} = o, {
						isBlocked: h
					} = c;
					var f;
					const x = b.zb,
						v = Object(m.a)(s, x, u, t),
						{
							sort: g
						} = t;
					return {
						contentGateInfo: i,
						isLoggedIn: a,
						isProfileNSFW: !!n && n.isNSFW,
						listingKey: v,
						profileName: s,
						shouldShowPinnedPostsSection: r && !g,
						sort: u,
						timeSort: p,
						avatar: null === (f = null == n ? void 0 : n.icon) || void 0 === f ? void 0 : f.url,
						isBlocked: h,
						...e,
						nsfwBlockingExperiment: d,
						showNewDesignBlocking: l
					}
				}),
				Wt = Object(i.b)(zt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(x.profileOverviewRequested)({
						...t.match,
						queryParams: o()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(f.a)())
				}));
			class Vt extends a.a.Component {
				constructor(e) {
					super(e), this.renderNoPosts = () => a.a.createElement(y.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentDidMount() {
					this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === At.a.Blurred && this.props.openNsfwModal()
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: s,
						isOwnProfile: n,
						isProfileNSFW: o,
						listingKey: r,
						nsfwBlockingExperiment: i,
						onLayoutChange: c,
						over18Prefs: d,
						pageLayer: m,
						profileName: u,
						shouldShowPinnedPostsSection: p,
						showSignupUpsell: h,
						sort: f,
						timeSort: x,
						showNewDesignBlocking: v
					} = this.props;
					if (!m) return null;
					if (t && t.profileDeleted) return a.a.createElement(_.default, {
						contentGateType: Lt.a.ProfileDeleted,
						profileName: u
					});
					if (t && t.profileSuspended) return a.a.createElement(_.default, {
						contentGateType: Lt.a.ProfileSuspended,
						profileName: u
					});
					if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(_.default, {
						contentGateType: Lt.a.ProfileBlockedForLegalReason,
						profileName: u
					});
					const g = m.queryParams && "true" === m.queryParams.consent;
					if (403 === m.status || s && !g) return a.a.createElement(Rt.a, {
						username: u,
						avatar: e
					});
					if (404 === m.status) return a.a.createElement(_.default, {
						contentGateType: Lt.a.ProfileDoesNotExist,
						profileName: u
					});
					if (!u) return null;
					const y = u.toLowerCase(),
						k = `/user/${u}/`,
						C = {
							listingKey: r,
							listingName: y
						};
					if (o && !n && i === At.a.NoPreview && v) return a.a.createElement(Pt.a, {
						contentTitle: Object(Nt.e)(u)
					});
					if (!d && o && !n && i !== At.a.Blurred) return a.a.createElement(_.default, {
						subredditName: u,
						contentGateType: Lt.a.Nsfw
					});
					const j = {
							inSubredditOrProfile: !Object(l.a)(u),
							listingKey: r,
							listingName: y,
							listingViewed: (e, t) => Object(St.p)(r, f, t, e, x),
							noPostsComponent: this.renderNoPosts,
							onScroll: h,
							onTryAgain: c
						},
						w = {
							sort: f,
							baseUrl: k,
							sortOptions: b.Fb,
							timeSort: x
						},
						P = a.a.createElement(a.a.Fragment, null, p && a.a.createElement(jt, {
							profileName: u
						}), a.a.createElement(E.a, w), a.a.createElement(fe, Ft({}, j, {
							excludePinnedPosts: p,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						})));
					return a.a.createElement(Tt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(xe.a, {
							profileName: u,
							viewBlockedConsent: g
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, null), P),
						sidebar: a.a.createElement(wt.a, Ft({}, C, {
							profileName: u
						}))
					})
				}
			}
			t.default = Bt(Wt(Object(u.a)(Object(h.a)(Object(It.d)(Vt)))))
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.l: {
						const {
							summary: s,
							subreddit: n
						} = t.payload;
						return {
							...e,
							[n.id]: {
								...e[n.id],
								...s
							}
						}
					}
					case n.i:
					case n.f:
					case n.r:
					case n.u:
					case n.A: {
						const {
							response: s
						} = t.payload;
						return {
							...e,
							...s.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/modQueue/constants.ts");
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case o.p: {
							const {
								targetID: s
							} = t.payload, n = e.indexOf(s);
							return n > -1 && e.splice(n, 1), e
						}
						default:
							return e
					}
				},
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				i = s("./src/reddit/actions/platform.ts"),
				c = s("./src/reddit/actions/post.ts");
			const d = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.q:
					case c.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let o = !1;
							n.map(e => {
								d.includes(e) && (o = !0)
							}), !e.includes(t) && o && (e = [...e, t])
						}), e
					}
					case o.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case i.f:
						return [];
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				toUpdate: r,
				updated: l
			})
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/localStorageAvailable/index.ts"),
				r = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/constants/localStorage.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				c = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts"),
				l = s("./node_modules/reselect/es/index.js");
			const m = 30 * n.pb,
				u = () => {
					Object(i.zb)(a.b.XpromoConsolidation, (new Date).toString())
				},
				p = () => {
					if (!Object(o.a)()) return !1;
					const e = localStorage.getItem(a.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(a.b.XpromoConsolidation), !0) : Date.now() > t + m
				},
				b = (e, t) => t === c.a.NoPreview && (e === r.fb.SkippableButtons || e === r.fb.SkippableText),
				h = (e, t) => t === c.a.NoPreview && e === r.fb.NoUpsell,
				f = Object(l.a)(c.h, c.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === c.a.NoPreview && !b(e, t) && !h(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && b(e, t),
						isOldDesignVariant: !(!e || !t) && h(e, t),
						variant: e
					}
				}),
				x = Object(l.a)(f, d.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
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
				a = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(a.h, a.d, i.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[o.Zc.Bottom_cell_dismissible]: e,
						[o.Zc.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Zc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(o.wb, !0),
				m = d(o.xb, !0),
				u = d(o.yb, !0),
				p = d(o.wb, !1),
				b = d(o.xb, !1),
				h = d(o.yb, !1)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(o.lg)(t)
				},
				c = Object(n.a)(i, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"f151b4667f32"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"b8368f5028bb"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c1fc98c26cf2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.0ffcad2571c829f8e7e8.js.map