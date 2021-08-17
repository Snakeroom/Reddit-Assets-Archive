// https://www.redditstatic.com/desktop2x/StructuredStyles.def793a9b67772317f78.js
// Retrieved at 8/17/2021, 2:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["StructuredStyles"], {
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function a(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function s(e) {
				return "[object Function]" === r(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var l = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var o = {
					"http:": {
						validate: function(e, t, n) {
							var a = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(a) ? a.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var a = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(a) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : a.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var a = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(a) ? a.match(n.re.mailto)[0].length : 0
						}
					}
				},
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					a = e.__tlds__.slice();

				function l(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || a.push(d), a.push(t.src_xn), t.src_tlds = a.join("|"), t.email_fuzzy = RegExp(l(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(l(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(l(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(l(t.tpl_host_fuzzy_test), "i");
				var o = [];

				function c(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var n = e.__schemas__[t];
					if (null !== n) {
						var a = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = a, "[object Object]" === r(n)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(n.validate) ? s(n.validate) ? a.validate = n.validate : c(t, n) : a.validate = function(e) {
							return function(t, n) {
								var a = t.slice(n);
								return e.test(a) ? a.match(e)[0].length : 0
							}
						}(n.validate), void(s(n.normalize) ? a.normalize = n.normalize : n.normalize ? c(t, n) : a.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(n) ? c(t, n): o.push(t)
					}
				})), o.forEach((function(t) {
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
				var n = e.__index__,
					a = e.__last_index__,
					r = e.__text_cache__.slice(n, a);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = a + t, this.raw = r, this.text = r, this.url = r
			}

			function h(e, t) {
				var n = new m(e, t);
				return e.__compiled__[n.schema].normalize(n, e), n
			}

			function p(e, t) {
				if (!(this instanceof p)) return new p(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || l.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = a({}, l, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = a({}, o, e), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			p.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, p.prototype.set = function(e) {
				return this.__opts__ = a(this.__opts__, e), this
			}, p.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, a, r, s, i, l, o;
				if (this.re.schema_test.test(e))
					for ((l = this.re.schema_search).lastIndex = 0; null !== (t = l.exec(e));)
						if (r = this.testSchemaAt(e, t[2], l.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (o = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || o < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (s = n.index + n[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (a = e.match(this.re.email_fuzzy)) && (s = a.index + a[1].length, i = a.index + a[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = i)), this.__index__ >= 0
			}, p.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, p.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, p.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(h(this, t)), t = this.__last_index__);
				for (var a = t ? e.slice(t) : e; this.test(a);) n.push(h(this, t)), a = a.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, p.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, p.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, p.prototype.onCompile = function() {}, e.exports = p
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = n("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = n("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = n("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = n("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/union.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/_baseRest.js"),
				s = n("./node_modules/lodash/_baseUniq.js"),
				i = n("./node_modules/lodash/isArrayLikeObject.js"),
				l = r((function(e) {
					return s(a(e, 1, i, !0))
				}));
			e.exports = l
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
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/imageUploads.ts"),
				i = n("./src/reddit/models/Image/index.tsx"),
				l = n("./src/reddit/selectors/imageUploads.ts");
			const o = Object(r.c)({
				_imageUploads: l.b
			});

			function d(e, t) {
				return Object(a.b)(o, e => ({
					uploadImage: n => e(t(n)),
					cancelUpload: t => e(Object(s.h)(t))
				}), (function(e, t, n) {
					return {
						...n,
						...t,
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const n = [];
								let a = !1;
								for (const r of t)
									if (Object(i.i)(r) || e[r.id])
										if (e[r.id]) {
											const t = e[r.id];
											n.push(t), a = a || t !== r
										} else a = !0;
								else n.push(r);
								return a ? n : null
							}(e._imageUploads, t)
						}
					}
				}))(e)
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const a = e => e;

			function r(e, t, n) {
				const [r, s] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: i = a
				} = t || {};
				let {
					start: l = 0,
					end: o = r
				} = t || {};
				if ((l = l < 0 ? 0 : l) >= (o = o > r ? r : o)) return;
				let d = s(l),
					c = i(d, l),
					u = l;
				for (let a = l + 1; a < o; a++) {
					const e = s(a),
						t = i(e, a);
					if (t !== c) {
						if (!1 === n(d, c, u, a)) return;
						c = t, u = a, d = e
					}
				}
				n(d, c, u, o)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return y
			}));
			var a = n("./node_modules/linkify-it/index.js"),
				r = n.n(a),
				s = n("./node_modules/tlds/index.js"),
				i = n.n(s),
				l = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./node_modules/lodash/values.js"),
				d = n.n(o);
			const c = e => d()(l.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				h = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				p = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(l.g.mention.prefix, l.g.mention.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(l.g.subreddit.prefix, l.g.subreddit.config).add(l.g.subredditFull.prefix, l.g.subreddit.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(l.g.profile.prefix, l.g.profile.config).add(l.g.profileFull.prefix, l.g.profile.config),
				f = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(l.g.subreddit.prefix, l.g.subreddit.config).add(l.g.subredditFull.prefix, l.g.subreddit.config).add(l.g.profile.prefix, l.g.profile.config).add(l.g.profileFull.prefix, l.g.profile.config).add(l.g.mention.prefix, l.g.mention.config),
				E = r()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(l.g.subreddit.prefix, l.g.subredditFullUrl.config).add(l.g.subredditFull.prefix, l.g.subredditFullUrl.config),
				x = h.normalize;
			h.normalize = e => {
				x.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = c(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...b.match(e) || [], ...p.match(e) || []].map(e => !c(e.text) && e.text.replace(l.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				y = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/reddit/actions/exportImportStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/loadWithRetries/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/models/StructuredStyles/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");
			const u = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				m = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				h = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				p = Object(s.a)(u),
				g = Object(s.a)(m),
				b = Object(s.a)(h),
				f = Object(s.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				E = Object(s.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				x = Object(s.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				v = e => async (t, s) => {
					t(p());
					const i = s(),
						o = Object(c.T)(i, {
							subredditId: e
						}).name,
						u = i.structuredStyles.models[e],
						m = await Object(r.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						h = await m(u, o);
					h.ok ? (t(g()), t(Object(l.f)({
						kind: d.b.SuccessMod,
						text: a.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(b(h.error)), t(Object(l.f)({
						kind: d.b.Error,
						text: a.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, _ = e => async (t, s) => {
					t(f());
					const c = await Object(r.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						u = await c(e);
					u.ok ? (t(E()), t(Object(l.f)({
						kind: d.b.SuccessMod,
						text: a.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(u.attributes).length && t(Object(i.d)(Object(o.j)(u.attributes)))) : (t(x(u.error)), t(Object(l.f)({
						kind: d.b.Error,
						text: a.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const a = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				r = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				s = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				i = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				l = n("./src/reddit/helpers/name/index.ts"),
				o = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				d = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const c = Object(a.a)(d.c),
				u = Object(a.a)(d.b),
				m = Object(a.a)(d.a),
				h = (e, t = !1) => async (n, a, {
					gqlContext: d
				}) => {
					const h = Object(l.g)(e);
					if (!h) return;
					const p = a(),
						g = p.subredditAutocomplete;
					if (g.api.pending[h] || g.models[h]) return;
					if (Object(o.b)(p, {
							substring: h
						})) return;
					n(c({
						key: h
					}));
					const b = await ((e, t) => Object(r.a)(e, {
						...s,
						variables: t
					}))(d(), {
						query: h,
						includeNsfw: t
					});
					if (b.ok) {
						const e = b.body.data.subredditTypeahead.subreddits.edges.map(e => (({
							allowedPostTypes: e,
							id: t,
							isCrosspostDestination: n,
							isNsfw: a,
							name: r,
							styles: s,
							subscribersCount: l
						}) => ({
							allowedPostTypes: Object(i.a)(e),
							communityIcon: s && s.icon || "",
							icon: s && s.legacyIcon && s.legacyIcon.url || "",
							id: t,
							isCrosspostDestination: n,
							isNsfw: a,
							name: r,
							primaryColor: s && s.primaryColor || "",
							subscribers: l
						}))(e.node));
						n(u({
							key: h,
							subreddits: e
						}))
					} else n(m({
						key: h,
						error: b.error
					}))
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const c = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				m = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				h = (Object(a.a)(c), Object(a.a)(u)),
				p = Object(a.a)(m),
				g = () => async (e, t, {
					apiContext: n
				}) => {
					await e(r.e());
					const {
						api: a,
						ids: c
					} = t().subreddits.crosspostable;
					if (a.pending || Object.keys(c).length) return;
					const u = await ((e, t) => Object(i.a)(Object(l.a)(e, [o.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: s.hb.GET
					}))(n(), {
						sr_detail: !1
					});
					if (u.ok) {
						const n = t(),
							a = u.body && u.body.length ? u.body.map(e => Object(d.E)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(h({
							subredditIds: a
						}))
					} else e(p({
						error: u.error
					}))
				}
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/actions/modal.ts");
			const o = "non-empty-string-to-block-navigation";
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || o
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: a,
							showModal: r,
							dialogId: s
						} = this.props;
						return !(!n || e.pathname !== a.pathname) || (s && r(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return r.a.createElement(i.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(s.b)(null, (e, t) => ({
				showModal: () => e(Object(l.h)(t.dialogId))
			}))(Object(i.i)(d))
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(i.b, {
				className: Object(s.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "i", (function() {
				return D
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./node_modules/lodash/isNil.js"),
				o = n.n(l),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var c = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...a
							}
						} = this;
						c.a.publish(d.a, a, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					o()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					o()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(s.b)(u, {})(m),
				p = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(g.a)(e, t),
					a = Object(b.I)(e, t);
				return {
					comment: n,
					isModerator: !(!a || !a.name) && !!e.moderatingSubreddits[a.name],
					subredditOrProfile: a
				}
			};
			var E = Object(s.b)(() => Object(i.a)(f, p.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(h, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const x = (e, t) => {
				const n = Object(g.a)(e, t),
					a = Object(b.I)(e, t);
				return {
					comment: n,
					isModerator: !(!a || !a.name) && !!e.moderatingSubreddits[a.name],
					subredditOrProfile: a
				}
			};
			var v = Object(s.b)(() => Object(i.a)(x, e => e))(e => r.a.createElement(h, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var _ = Object(s.b)(() => Object(i.c)({
					subreddit: b.T
				}))(e => r.a.createElement(h, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				C = n("./src/reddit/hooks/usePostContext.ts");
			var y = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), s = Object(a.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(h, {
					className: e.className,
					type: "post",
					data: s
				})
			};
			var k = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: s
				} = Object(C.a)(), i = Object(a.useMemo)(() => ({
					author: t.author,
					isModerator: s,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, s]);
				return r.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: i
				})
			};
			var S = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), s = Object(a.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: s
				})
			};
			var I = Object(s.b)(() => Object(i.c)({
				subreddit: b.T
			}))(e => r.a.createElement(h, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var w = Object(s.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(b.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(h, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var D = Object(s.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(b.T)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(h, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/config.ts"),
				i = n("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				l = n.n(i);
			t.a = () => r.a.createElement("img", {
				className: l.a.image,
				src: `${s.a.assetPath}/img/loading.gif`
			})
		},
		"./src/reddit/components/StructuredStyles/BackgroundPositionInput/index.m.less": function(e, t, n) {
			e.exports = {
				Center: "_1HK0ZCl49BfBKbq2XoFpob",
				center: "_1HK0ZCl49BfBKbq2XoFpob",
				Fill: "_22v-0rKeK2pI-4IlCZ7nMo",
				fill: "_22v-0rKeK2pI-4IlCZ7nMo",
				PositionCenter: "_1M_0e-1Qrm29zKSAy9LXTn",
				positionCenter: "_1M_0e-1Qrm29zKSAy9LXTn",
				PositionLeft: "_3SYwcXTxPqRzvCoCfntbA8",
				positionLeft: "_3SYwcXTxPqRzvCoCfntbA8",
				PositionRight: "_13D9sUZrz6PMEAsaMuQGD-",
				positionRight: "_13D9sUZrz6PMEAsaMuQGD-",
				Tile: "_2ApNPWDHr8rhCgp-Oknej",
				tile: "_2ApNPWDHr8rhCgp-Oknej",
				StyledRadioInput: "_2_Oys-6qnBbrLX6ohG1oLu",
				styledRadioInput: "_2_Oys-6qnBbrLX6ohG1oLu",
				StyledRadioOption: "dspNk2z94quVtuCqNn8M1",
				styledRadioOption: "dspNk2z94quVtuCqNn8M1",
				selected: "_3ihBSoGFIt9n64vbK7KHa4"
			}
		},
		"./src/reddit/components/StructuredStyles/Blade/BladeLink/index.m.less": function(e, t, n) {
			e.exports = {
				FakeLink: "_2VPQcx0BcQjax06lM-xfXn",
				fakeLink: "_2VPQcx0BcQjax06lM-xfXn",
				StyledLink: "_2XQW-ni40O2YdSlPkjdrlg",
				styledLink: "_2XQW-ni40O2YdSlPkjdrlg"
			}
		},
		"./src/reddit/components/StructuredStyles/Blade/InfoLink/index.m.less": function(e, t, n) {
			e.exports = {
				linkContainer: "_3voX79zMk-EbG4uYqspgv4",
				infoIcon: "_3ux47DYRy9s9LA7asXOIAv"
			}
		},
		"./src/reddit/components/StructuredStyles/Blade/QuarantineNotice/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2s4rZ-bVMj9gpOiG0ZQbDc",
				icon: "_3bD0KF3oQul2d37Rf4A_8P"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawer/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_2zkJDbS5-NSVy7UAq2KE2H",
				bladeContainer: "_2zkJDbS5-NSVy7UAq2KE2H",
				BladeCloseButton: "_3uGLQmFblUx8HTQAMyzmTV",
				bladeCloseButton: "_3uGLQmFblUx8HTQAMyzmTV"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BladeContainer", (function() {
				return Dl
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./node_modules/react-router/esm/react-router.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/reddit/components/StructuredStyles/StyledComponents/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/blade.ts");

			function f(e, t = {}) {
				return {
					pathname: e,
					state: {
						...t,
						title: b.f[e]()
					}
				}
			}

			function E(e) {
				switch (e) {
					case "textarea":
					case "button":
					case "subreddit-rules":
					case "calendar":
					case "community-list":
					case "moderators":
						const t = b.j[e]();
						return i.fbt._("{widget type} widget appearance", [i.fbt._param("widget type", t)], {
							hk: "4uRtPH"
						});
					default:
						return b.j[e]()
				}
			}
			var x = n("./src/reddit/helpers/trackers/blade.ts"),
				v = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				_ = n("./src/reddit/components/StructuredStyles/Blade/BladeLink/index.m.less"),
				C = n.n(_);
			const y = s.a.span("FakeLink", C.a),
				k = s.a.wrapped(m.a, "StyledLink", C.a),
				S = Object(g.c)(e => {
					const t = () => e.sendEvent(Object(x.b)(e.route));
					return e.disabled ? r.a.createElement(y, {
						onClick: t
					}, e.children) : r.a.createElement(k, {
						to: e.to,
						onClick: t
					}, e.children)
				});
			var I = e => {
					const t = f(e.route),
						n = e.title || t.state.title;
					return r.a.createElement(S, {
						disabled: e.disabled,
						route: e.route,
						to: t
					}, r.a.createElement(p.b, {
						disabled: e.disabled,
						title: e.tooltipText
					}, r.a.createElement(v.a, null, n, r.a.createElement(h.g, null))))
				},
				w = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				D = n("./src/reddit/components/StructuredStyles/Blade/QuarantineNotice/index.m.less"),
				T = n.n(D);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = () => r.a.createElement("div", {
					className: T.a.container
				}, r.a.createElement(w.a, {
					className: T.a.icon
				}), O._("This community has been quarantined, some of your settings may not apply.", null, {
					hk: "3wh0B0"
				})),
				F = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				A = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/structuredStyles/index.ts"),
				N = n("./src/higherOrderComponents/asModal/index.tsx"),
				R = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				B = n("./src/reddit/controls/TextButton/index.tsx");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClose = () => {
						this.props.toggleModal()
					}, this.handleCancel = () => {
						this.props.onCancel && this.props.onCancel(), this.props.toggleModal()
					}, this.handleSave = () => {
						this.props.onSave(), this.props.toggleModal()
					}
				}
				render() {
					return r.a.createElement(R.e, null, r.a.createElement(R.i, null, r.a.createElement(v.a, null, r.a.createElement(R.q, null, L._("Reset to default styling?", null, {
						hk: "2Ztjzn"
					})), r.a.createElement(B.a, {
						onClick: this.handleClose
					}, r.a.createElement(R.b, null)))), r.a.createElement(R.l, null, r.a.createElement(R.p, null, L._("Resetting to defaults here will rollback all your past edits to when your community was first created.", null, {
						hk: "3eSsCv"
					}))), r.a.createElement(R.g, null, r.a.createElement(R.a, {
						onClick: this.handleCancel,
						"data-redditstyle": !0
					}, L._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R.r, {
						onClick: this.handleSave,
						"data-redditstyle": !0
					}, L._("Reset", null, {
						hk: "DQKTE"
					}))))
				}
			}
			var M = Object(N.a)(W),
				U = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/components/StructuredStyles/ResetAllStylesButton/index.m.less"),
				z = n.n(q);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = s.a.wrapped(h.f, "TertiaryButton", z.a), K = Object(c.c)({
				activeModalId: U.a
			});
			var G = Object(o.b)(K, e => ({
					resetStyles: t => {
						e(Object(P.j)(t))
					},
					toggleResetAllStylesModal: () => {
						e(Object(A.i)("StructuredStyles--Modal--ResetAllStylesModal"))
					}
				}), (e, t, n) => ({
					isResetAllStylesModalOpen: "StructuredStyles--Modal--ResetAllStylesModal" === e.activeModalId,
					resetStyles: () => t.resetStyles(n.subredditId),
					toggleResetAllStylesModal: t.toggleResetAllStylesModal
				}))(Object(g.c)(e => {
					const {
						isResetAllStylesModalOpen: t,
						sendEvent: n,
						resetStyles: a,
						toggleResetAllStylesModal: s
					} = e;
					return r.a.createElement("div", null, t && r.a.createElement(M, {
						toggleModal: s,
						onSave: () => {
							a(), n(Object(x.g)("reset_done"))
						}
					}), r.a.createElement(H, {
						onClick: () => {
							s(), n(Object(x.g)("reset"))
						},
						"data-redditstyle": !0
					}, V._("Reset to Defaults", null, {
						hk: "1Brv0w"
					})))
				})),
				Z = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				Q = n("./src/reddit/featureFlags/index.ts"),
				Y = n("./src/reddit/selectors/moderatorPermissions.ts"),
				J = n("./src/reddit/selectors/structuredStyles.ts"),
				X = n("./src/reddit/selectors/subreddit.ts");
			const $ = Object(c.c)({
				isImportExportThemesEnabled: Q.d.importExportThemes,
				isStylingRestrictedDueToQuarantine: J.j,
				moderatorPermissions: Y.l,
				subreddit: X.T
			});
			class ee extends r.a.Component {
				constructor() {
					super(...arguments), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							n = e ? `${t}modqueue` : t;
						this.props.pushUrl(n)
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(x.j)())
				}
				render() {
					const {
						isImportExportThemesEnabled: e,
						isStylingRestrictedDueToQuarantine: t,
						moderatorPermissions: n,
						subredditId: a,
						title: s
					} = this.props, l = n && n.config, o = t ? i.fbt._("Setting is disabled since this community is quarantined", null, {
						hk: "4luznT"
					}) : void 0;
					return r.a.createElement(Z.k, null, r.a.createElement(Z.n, {
						onClick: this.onGoToModHub
					}, r.a.createElement(F.a, null), s), t && r.a.createElement(j, null), l && e && r.a.createElement(Z.o, null, r.a.createElement(Z.m, null, i.fbt._("Themes", null, {
						hk: "OgQbA"
					})), r.a.createElement(I, {
						disabled: t,
						route: "exportImport",
						tooltipText: o
					})), l && r.a.createElement(Z.o, null, r.a.createElement(Z.m, null, i.fbt._("Appearance", null, {
						hk: "4owi7o"
					})), r.a.createElement(u.c, {
						sectionName: "appearance",
						subredditId: a
					}), r.a.createElement(I, {
						disabled: t,
						route: "global",
						tooltipText: o
					}), r.a.createElement(I, {
						disabled: t,
						route: "nameAndIcon",
						tooltipText: o
					}), r.a.createElement(I, {
						disabled: t,
						route: "banner",
						tooltipText: o
					}), r.a.createElement(I, {
						disabled: t,
						route: "menu",
						tooltipText: o
					}), r.a.createElement(I, {
						disabled: t,
						route: "post",
						tooltipText: o
					}), r.a.createElement(I, {
						disabled: !0,
						route: "css",
						title: "CSS",
						tooltipText: i.fbt._("Coming Soon", null, {
							hk: "BytN1"
						})
					}), r.a.createElement(G, {
						subredditId: a
					})), l && r.a.createElement(Z.o, null, r.a.createElement(Z.m, null, i.fbt._("Structure", null, {
						hk: "3lQsEW"
					})), r.a.createElement(u.c, {
						sectionName: "structure",
						subredditId: a
					}), l && r.a.createElement(I, {
						disabled: t,
						route: "menuLinks",
						tooltipText: o
					}), l && r.a.createElement(I, {
						route: "widgets"
					})))
				}
			}
			var te = Object(o.b)($, e => ({
					pushUrl: t => e(Object(d.b)(t))
				}))(Object(g.c)(ee)),
				ne = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				ae = n("./src/reddit/models/Widgets/index.ts"),
				re = n("./src/reddit/selectors/widgets.ts");

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = Object(c.c)({
					isStylingRestrictedDueToQuarantine: J.j,
					widgetKinds: re.j
				}),
				le = Object(o.b)(ie),
				oe = e => r.a.createElement(p.b, {
					onClick: () => e.fake ? void 0 : e.onAdd(e.widgetKind),
					disabled: e.fake,
					title: e.fake ? "Coming Soon" : void 0
				}, r.a.createElement(v.a, null, r.a.createElement(ne.a, {
					label: Object(ae.p)(e.widgetKind),
					description: Object(ae.o)(e.widgetKind),
					fake: e.fake
				}), r.a.createElement(h.g, null)));
			class de extends r.a.Component {
				constructor(e) {
					super(e), this.showAdvanced = e => this.setState({
						showAdvanced: !0
					}), this.state = {
						showAdvanced: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(Z.k, null, r.a.createElement(F.b, {
						breadcrumbs: e.breadcrumbs,
						onNavigate: e.stopEditing
					}), r.a.createElement(Z.m, null, e.title), r.a.createElement(Z.f, null, r.a.createElement(oe, se({
						widgetKind: "textarea"
					}, e)), !e.widgetKinds.includes("subreddit-rules") && r.a.createElement(oe, se({
						widgetKind: "subreddit-rules"
					}, e)), !e.isStylingRestrictedDueToQuarantine && r.a.createElement(oe, se({
						widgetKind: "button"
					}, e)), !e.isStylingRestrictedDueToQuarantine && r.a.createElement(oe, se({
						widgetKind: "image"
					}, e)), r.a.createElement(oe, se({
						widgetKind: "community-list"
					}, e)), e.widgetKinds.filter(e => "calendar" === e).length < 2 && r.a.createElement(oe, se({
						widgetKind: "calendar"
					}, e)), e.widgetKinds.filter(e => "post-flair" === e).length < ae.c && !e.isStylingRestrictedDueToQuarantine && r.a.createElement(oe, se({
						widgetKind: "post-flair"
					}, e)), t.showAdvanced && r.a.createElement(oe, se({
						widgetKind: "custom"
					}, e))), !t.showAdvanced && !e.isStylingRestrictedDueToQuarantine && r.a.createElement(Z.f, null, r.a.createElement(h.f, {
						onClick: this.showAdvanced,
						"data-redditstyle": !0
					}, i.fbt._("Advanced", null, {
						hk: "3EAifd"
					}))))
				}
			}
			var ce = le(de),
				ue = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/classNames/index.ts")),
				me = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				he = n("./src/reddit/models/StructuredStyles/index.ts");

			function pe(e) {
				const t = Object(c.c)({
					value: (e, t) => {
						const {
							draft: n
						} = e.structuredStyles, a = Object(he.h)(n);
						return Object(he.k)(a)[t.name]
					}
				});
				return Object(o.b)(t, (e, t) => ({
					onChange: n => e(Object(P.d)({
						[t.name]: n
					}))
				}))(e)
			}
			var ge = n("./src/reddit/controls/RadioInput/index.tsx");

			function be() {
				return pe(ge.a)
			}

			function fe(e) {
				return t => r.a.createElement(e, t)
			}
			be();
			const Ee = be(),
				xe = fe(me.a),
				ve = (be(), fe(me.a), be()),
				_e = fe(me.a),
				Ce = be(),
				ye = fe(me.a),
				ke = (fe(me.a), fe(me.a));
			var Se = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Center/index.tsx"),
				we = n("./src/reddit/icons/svgs/Fill/index.tsx"),
				De = n("./src/reddit/icons/svgs/PositionCenter/index.tsx"),
				Te = n("./src/reddit/icons/svgs/PositionLeft/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/PositionRight/index.tsx"),
				je = n("./src/reddit/icons/svgs/Tile/index.tsx"),
				Fe = n("./src/reddit/components/StructuredStyles/BackgroundPositionInput/index.m.less"),
				Ae = n.n(Fe);

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ne = be(),
				Re = fe(Se.a),
				Be = e => r.a.createElement(Re, Pe({}, e, {
					className: Object(ue.a)({
						[Ae.a.selected]: e.selected,
						[Ae.a.StyledRadioOption]: !0
					})
				}), ((e, t, n) => {
					switch (e) {
						case "tiled":
							return r.a.createElement(je.a, {
								className: Ae.a.IconStyles
							});
						case "centered":
							return "bannerPositionedImagePosition" === n ? r.a.createElement(De.a, {
								className: Ae.a.IconStyles
							}) : r.a.createElement(Ie.a, {
								className: Ae.a.IconStyles
							});
						case "cover":
							return r.a.createElement(we.a, {
								className: Ae.a.IconStyles
							});
						case "left":
							return r.a.createElement(Te.a, {
								className: Ae.a.IconStyles
							});
						case "right":
							return r.a.createElement(Oe.a, {
								className: Ae.a.IconStyles
							});
						default:
							return null
					}
				})(e.value, e.selected, e.name), (e => {
					switch (e) {
						case "cover":
							return i.fbt._("Fill", null, {
								hk: "RAFZ4"
							});
						case "tiled":
							return i.fbt._("Tile", null, {
								hk: "2H83Wg"
							});
						case "centered":
							return i.fbt._("Center", null, {
								hk: "1VDAjK"
							});
						case "left":
							return i.fbt._("Left", null, {
								hk: "1LDLub"
							});
						case "right":
							return i.fbt._("Right", null, {
								hk: "4Ge4UX"
							})
					}
				})(e.value));
			var Le = e => r.a.createElement(Ne, {
				name: e.name,
				className: Ae.a.StyledRadioInput
			}, e.values.map(t => r.a.createElement(Be, {
				key: t,
				value: t,
				name: e.name
			})));
			var We = e => r.a.createElement(Z.f, null, r.a.createElement(h.a, {
					onClick: e.saveChanges,
					disabled: e.isApiRequestInProgress,
					"data-redditstyle": !0
				}, i.fbt._("Save", null, {
					hk: "4yMsMq"
				})), r.a.createElement(h.d, {
					onClick: e.revertChanges,
					"data-redditstyle": !0
				}, i.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))),
				Me = n("./src/reddit/icons/fonts/Info/index.tsx"),
				Ue = n("./src/reddit/components/StructuredStyles/Blade/InfoLink/index.m.less"),
				qe = n.n(Ue);
			class ze extends r.a.Component {
				constructor() {
					super(...arguments), this.viewHelpInfo = () => {
						this.props.sendEvent(e => ({
							source: "styling_blade",
							action: "click",
							noun: "info_help_link"
						}))
					}
				}
				render() {
					return r.a.createElement("a", {
						className: qe.a.linkContainer,
						href: this.props.href,
						onClick: this.viewHelpInfo,
						target: "_blank"
					}, r.a.createElement(Me.a, {
						className: qe.a.infoIcon
					}), this.props.children)
				}
			}
			var Ve = Object(g.c)(ze);
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClose = () => {
						this.props.toggleModal()
					}, this.handleCancel = () => {
						this.props.onCancel(), this.props.toggleModal()
					}, this.handleSave = () => {
						this.props.onSave(), this.props.toggleModal()
					}
				}
				render() {
					return r.a.createElement(R.e, null, r.a.createElement(R.i, null, r.a.createElement(v.a, null, r.a.createElement(R.q, null, i.fbt._("Save changes before leaving?", null, {
						hk: "2Dr4N3"
					})), r.a.createElement(B.a, {
						onClick: this.handleClose
					}, r.a.createElement(R.b, null)))), r.a.createElement(R.l, null, r.a.createElement(R.p, null, i.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "4A9yJT"
					}))), r.a.createElement(R.g, null, r.a.createElement(R.a, {
						onClick: this.handleCancel,
						"data-redditstyle": !0
					}, i.fbt._("Discard", null, {
						hk: "1SiwLl"
					})), r.a.createElement(R.r, {
						onClick: this.handleSave,
						"data-redditstyle": !0
					}, i.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var Ke = Object(N.a)(He);
			var Ge = e => r.a.createElement("div", null, e.isSaveChangesModalOpen && r.a.createElement(Ke, {
				toggleModal: e.toggleSaveChangesModal,
				onSave: e.saveChanges,
				onCancel: e.revertChanges,
				withOverlay: !0
			}), r.a.createElement(F.b, {
				breadcrumbs: e.breadcrumbs,
				onNavigate: t => {
					e.hasUnsavedChanges ? e.toggleSaveChangesModal() : e.stopEditing(t)
				}
			}), r.a.createElement(Z.m, null, e.title, r.a.createElement(Ve, {
				href: e.helpCenterLink
			}, e.title)));
			var Ze = Object(o.b)(() => Object(c.c)({
				value: (e, t) => Object(J.c)(e, t),
				imageUpload: (e, t) => Object(J.g)(e, t)
			}))(e => {
				let t = e.value;
				return !t && e.imageUpload && (t = e.imageUpload.url), r.a.createElement("div", null, e.render(t))
			});

			function Qe(e) {
				return r.a.createElement("div", null, e.render(e.value))
			}

			function Ye() {
				return function(e) {
					const t = Object(c.c)({
						value: (e, t) => e.structuredStyles.draft[t.name]
					});
					return Object(o.b)(t)(e)
				}(Qe)
			}
			Ye();
			const Je = Ye();
			var Xe = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx");
			var $e = pe(e => r.a.createElement(Xe.b, {
					name: e.name,
					label: e.label || "",
					onChange: t => {
						Array.isArray(t) ? e.onChange(t[0]) : e.onChange(t)
					},
					value: e.value
				})),
				et = n("./src/reddit/controls/ImageDisplay/index.tsx");
			var tt = e => r.a.createElement(et.a, {
				backgroundImage: e.value,
				children: e.children
			});
			var nt = pe(e => r.a.createElement(B.a, {
					onClick: () => e.onChange(""),
					children: e.children
				})),
				at = n("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var rt = n("./src/reddit/models/Image/index.tsx");
			const {
				fbt: st
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var it, lt = (it = e => {
					const t = e.imageUpload && e.imageUpload.kind === rt.b.FailedToUpload ? e.imageUpload.error : "",
						n = !t && !!e.imageUpload && e.imageUpload.kind === rt.b.NotUploaded,
						a = e.isRequestInProgress && !!e.imageUpload && e.imageUpload.kind === rt.b.TempUploaded,
						s = n || a;
					return r.a.createElement(tt, {
						name: e.name,
						value: e.value || ""
					}, s && r.a.createElement(at.c, null), r.a.createElement(at.a, {
						isHiding: !!s
					}, t && r.a.createElement(at.b, null, st._("Something went wrong", null, {
						hk: "2xn6Fx"
					})), r.a.createElement(nt, {
						name: e.name
					}, r.a.createElement(at.d, null))))
				}, Object(o.b)(() => Object(c.a)(J.c, J.g, (e, t) => {
					let n;
					return e && "string" == typeof e ? n = e : t && (n = t.url), {
						value: n,
						imageUpload: t
					}
				}))(it)),
				ot = n("./src/reddit/actions/tooltip.ts"),
				dt = n("./src/reddit/constants/elementIds.ts"),
				ct = n("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx");
			const ut = e => `Custom--Color--Input--${e}`;
			class mt extends r.a.Component {
				constructor() {
					super(...arguments), this.handleColorPickerOpened = () => {
						this.props.sendEvent(Object(x.d)(this.props.name))
					}, this.handleSystemInputOpened = () => {
						this.props.sendEvent(Object(x.c)("system_color", this.props.name))
					}, this.handleChange = (e, t) => {
						this.props.onChange(e), t ? this.props.sendEvent(Object(x.c)("default_color", this.props.name)) : this.props.sendEvent(Object(x.c)("hex_color", this.props.name))
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.tooltipId || ut(e.name);
					return r.a.createElement(ct.a, {
						dropdownPosition: e.dropdownPosition,
						onToggleDropdown: e.onToggleDropdown,
						value: e.value,
						includeTransparent: e.includeTransparent,
						isDropdownOpen: e.isDropdownOpen,
						onChange: this.handleChange,
						onColorPickerOpened: this.handleColorPickerOpened,
						onSystemInputOpened: this.handleSystemInputOpened,
						containerId: dt.a,
						tooltipId: t
					})
				}
			}
			var ht = Object(g.c)(mt);
			var pt = pe(e => r.a.createElement(ht, e)),
				gt = n("./src/reddit/selectors/tooltip.ts"),
				bt = n("./src/reddit/components/StructuredStyles/LabeledColorInput/index.m.less"),
				ft = n.n(bt);
			const Et = Object(c.c)({
					activeTooltipId: gt.a
				}),
				xt = Object(o.b)(Et, (e, {
					name: t
				}) => ({
					onToggleDropdown: () => e(Object(ot.h)({
						tooltipId: ut(t)
					}))
				})),
				vt = s.a.wrapped(Z.e, "FormElementTitle", ft.a),
				_t = s.a.wrapped(v.a, "ExpandLeft", ft.a);
			var Ct = xt(e => {
					const t = ut(e.name);
					return r.a.createElement(_t, null, r.a.createElement(vt, {
						id: t,
						onClick: e.onToggleDropdown
					}, e.label), r.a.createElement(pt, {
						isDropdownOpen: e.activeTooltipId === t,
						name: e.name,
						onToggleDropdown: e.onToggleDropdown
					}))
				}),
				yt = n("./node_modules/lodash/pick.js"),
				kt = n.n(yt),
				St = n("./src/reddit/actions/exportImportStyles.ts"),
				It = n("./src/reddit/actions/apiRequestState.ts"),
				wt = n("./src/reddit/models/ApiRequestState/index.ts"),
				Dt = n("./src/reddit/selectors/apiRequestState.ts");
			const Tt = Object(c.c)({
				apiRequestStates: Dt.a
			});
			class Ot extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						apiRequestId: Object(wt.b)()
					}
				}
				getApiRequestFromProps(e) {
					if (this.state.apiRequestId) return e.apiRequestStates[this.state.apiRequestId]
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.getApiRequestFromProps(e);
					t && t.apiRequestStatus === wt.a.Complete && e.onRequestComplete()
				}
				componentWillUnmount() {
					this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getApiRequestFromProps(e);
					return e.children(t.apiRequestId, n, function(e) {
						if (!e || e.apiRequestStatus === wt.a.Failed) return !1;
						return !0
					}(n))
				}
			}
			const jt = Object(o.b)(Tt, e => ({
				releaseRequest: t => {
					e(Object(It.g)(t))
				}
			}))(Ot);
			var Ft = jt;

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Pt = "StructuredStyles--Modal--SaveChangesModal",
				Nt = "StructuredStyles--Modal--ImportThemesModal";

			function Rt(e, t) {
				for (const n in e)
					if (e[n] !== t[n]) return !0;
				return !1
			}

			function Bt(e, t) {
				const n = Object(c.c)({
						activeModalId: U.a,
						draftStyles: (e, n) => kt()(e.structuredStyles.draft, t),
						savedStyles: (e, t) => e.structuredStyles.models[t.subredditId],
						subreddit: X.T,
						isExportPending: J.d
					}),
					a = Object(o.b)(n, (e, n) => ({
						saveChanges: (t, a) => {
							e(Object(P.k)(t, a, n.paneName, n.apiRequestId))
						},
						toggleSaveChangesModal: () => {
							e(Object(A.i)(Pt))
						},
						toggleImportThemesModal: () => {
							e(Object(A.i)(Nt))
						},
						revertChanges: () => {
							e(Object(P.c)(n.subredditId, n.paneName, t)), n.stopEditing()
						},
						revertImport: () => {
							e(Object(P.c)(n.subredditId, n.paneName, t))
						},
						exportStructuredStyles: () => {
							e(Object(St.d)(n.subredditId))
						},
						importStructuredStyles: t => e(Object(St.e)(t))
					}), (e, t, n) => ({
						...n,
						bannerHeight: e.draftStyles.bannerHeight,
						hasUnsavedChanges: Rt(e.draftStyles, e.savedStyles),
						exportStructuredStyles: t.exportStructuredStyles,
						importStructuredStyles: t.importStructuredStyles,
						isExportPending: e.isExportPending,
						isSaveChangesModalOpen: e.activeModalId === Pt,
						isImportThemesModalOpen: e.activeModalId === Nt,
						subreddit: e.subreddit,
						revertChanges: t.revertChanges,
						revertImport: t.revertImport,
						toggleSaveChangesModal: t.toggleSaveChangesModal,
						toggleImportThemesModal: t.toggleImportThemesModal,
						saveChanges: () => {
							t.saveChanges(n.subredditId, e.draftStyles)
						}
					}))(e);
				return e => r.a.createElement(Ft, {
					onRequestComplete: e.stopEditing
				}, (t, n, s) => r.a.createElement(a, At({
					apiRequestId: t,
					apiRequestState: n,
					isApiRequestInProgress: s
				}, e)))
			}
			var Lt = n("./src/reddit/models/Theme/index.ts");
			const Wt = e => {
					switch (e) {
						case "small":
							return i.fbt._("Small • {size}px", [i.fbt._param("size", Lt.a[e].toLocaleString())], {
								hk: "2OECjT"
							});
						case "medium":
							return i.fbt._("Medium • {size}px", [i.fbt._param("size", Lt.a[e].toLocaleString())], {
								hk: "zwqi5"
							});
						case "large":
							return i.fbt._("Large • {size}px", [i.fbt._param("size", Lt.a[e].toLocaleString())], {
								hk: "3ch4JX"
							})
					}
				},
				Mt = (e, t) => i.fbt._("Recommended upload size: {width}x{height}px", [i.fbt._param("width", e.toLocaleString()), i.fbt._param("height", t.toLocaleString())], {
					hk: "JkJ4g"
				}),
				Ut = e => r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Hover Image (optional)", null, {
					hk: "2LGckw"
				})), r.a.createElement(Ze, {
					name: "secondaryBannerPositionedImage",
					render: t => t ? r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "secondaryBannerPositionedImage"
					}) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "secondaryBannerPositionedImage"
					})
				}), r.a.createElement(Z.g, null, Mt(4e3, 128))),
				qt = e => r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Mobile banner image", null, {
					hk: "4qNKwo"
				})), r.a.createElement(Z.g, null, i.fbt._("This image will override the banner background image on mobile apps. Removing the mobile banner image will display the banner background image on mobile apps.", null, {
					hk: "2FCdz6"
				})), r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "T0knK"
				})), r.a.createElement(Ze, {
					name: "mobileBannerImage",
					render: t => t ? r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "mobileBannerImage"
					}) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "mobileBannerImage"
					})
				}), r.a.createElement(Z.g, null, Mt(1600, 480)));
			var zt = Bt(e => {
				const t = e.bannerHeight ? Lt.a[e.bannerHeight] : 128;
				return r.a.createElement(Z.k, null, r.a.createElement(Ge, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Height", null, {
					hk: "2A9oKY"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ee, {
					name: "bannerHeight"
				}, r.a.createElement(xe, {
					value: "small",
					label: Wt("small")
				}), r.a.createElement(xe, {
					value: "medium",
					label: Wt("medium")
				}), r.a.createElement(xe, {
					value: "large",
					label: Wt("large")
				})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Background", null, {
					hk: "dWBpK"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Color", null, {
						hk: "2h4C3E"
					}),
					name: "bannerBackgroundColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "1WZQOn"
				})), r.a.createElement(Ze, {
					name: "bannerBackgroundImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "bannerBackgroundImage"
					}), r.a.createElement(Z.d, null, r.a.createElement(Le, {
						name: "bannerBackgroundImagePosition",
						values: ["cover", "tiled"]
					}))) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "bannerBackgroundImage"
					})
				}), r.a.createElement(Z.g, null, Mt(4e3, t)))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Additional Background Image", null, {
					hk: "e3sfR"
				})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "aQ8qn"
				})), r.a.createElement(Ze, {
					name: "bannerPositionedImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "bannerPositionedImage"
					}), r.a.createElement(Ut, e), ",", r.a.createElement(Z.d, null, r.a.createElement(Le, {
						name: "bannerPositionedImagePosition",
						values: ["left", "centered", "right"]
					}))) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "bannerPositionedImage"
					})
				}), r.a.createElement(Z.g, null, Mt(4e3, t)))), r.a.createElement(qt, e), r.a.createElement(We, e))
			}, ["bannerHeight", "bannerPositionedImage", "bannerPositionedImagePosition", "bannerBackgroundColor", "bannerBackgroundImage", "bannerBackgroundImagePosition", "mobileBannerImage", "secondaryBannerPositionedImage"]);
			class Vt extends r.a.Component {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(), this.props.toggleModal()
					}, this.onSave = () => {
						this.props.onSave(), this.props.toggleModal()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(R.e, null, r.a.createElement(R.i, null, r.a.createElement(v.a, null, r.a.createElement(R.q, null, e.modalTitle), r.a.createElement(B.a, {
						onClick: this.props.toggleModal
					}, r.a.createElement(R.b, null)))), r.a.createElement(R.l, null, r.a.createElement(R.p, null, e.modalText)), r.a.createElement(R.g, null, r.a.createElement(R.a, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, e.onCancelText), r.a.createElement(R.r, {
						onClick: this.onSave,
						"data-redditstyle": !0
					}, e.onSaveText)))
				}
			}
			var Ht = Object(N.a)(Vt),
				Kt = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts");
			const Gt = "ss-file-input",
				Zt = () => {};
			class Qt extends r.a.Component {
				constructor(e) {
					super(e), this.onExport = () => {
						this.props.exportStructuredStyles(), this.setState({
							hasExportedStyles: !0
						})
					}, this.exportAndImport = () => {
						this.onExport(), this.onOpenFileInput()
					}, this.hasExported = () => {
						this.state.hasExportedStyles ? this.onOpenFileInput() : this.props.toggleImportThemesModal()
					}, this.onFileUpload = e => {
						e && e.target && e.target.files && (this.props.importStructuredStyles(e.target.files[0]), this.setState({
							hasImportedStyles: !0
						}))
					}, this.onImportRevert = () => {
						this.props.revertImport(), this.setState({
							hasImportedStyles: !1
						})
					}, this.state = {
						hasExportedStyles: !1,
						hasImportedStyles: !1
					}
				}
				onOpenFileInput() {
					const e = document.getElementById(Gt);
					e && e.click()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(Z.k, null, r.a.createElement(Ge, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, t.hasImportedStyles ? i.fbt._("Theme preview", null, {
						hk: "VrPgW"
					}) : i.fbt._("Themes", null, {
						hk: "TXVbY"
					})), r.a.createElement(Z.g, null, t.hasImportedStyles ? i.fbt._("This is a preview of your imported theme. Saving theme will overwrite existing community theme.", null, {
						hk: "27cUDS"
					}) : i.fbt._("Generate a .zip file to allow you to save your community's theme or apply other themes. A theme contains appearance settings in:", null, {
						hk: "Yq7un"
					})), e.isImportThemesModalOpen && r.a.createElement(Ht, {
						modalText: t.hasImportedStyles ? i.fbt._("Applying new theme will overwrite the current theme styling. This action cannot be undone.", null, {
							hk: "2N7zl7"
						}) : i.fbt._("Importing a new theme will overwrite your existing theme. Do you wish to export your current theme before importing a new one?", null, {
							hk: "3j1wkn"
						}),
						modalTitle: t.hasImportedStyles ? i.fbt._("Apply theme over existing theme?", null, {
							hk: "2QPUly"
						}) : i.fbt._("Export current theme before import?", null, {
							hk: "1ChWsN"
						}),
						onCancel: t.hasImportedStyles ? Zt : this.onOpenFileInput,
						onCancelText: t.hasImportedStyles ? i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}) : i.fbt._("Continue without export", null, {
							hk: "2uFUDz"
						}),
						onSave: t.hasImportedStyles ? e.saveChanges : this.exportAndImport,
						onSaveText: t.hasImportedStyles ? i.fbt._("Apply styles", null, {
							hk: "2IoGFk"
						}) : i.fbt._("Export", null, {
							hk: "2kv7Vl"
						}),
						toggleModal: e.toggleImportThemesModal
					}), t.hasImportedStyles ? r.a.createElement(a.Fragment, null, r.a.createElement(h.a, {
						onClick: this.props.toggleImportThemesModal,
						"data-redditstyle": !0
					}, i.fbt._("Apply styles", null, {
						hk: "3GgTTA"
					})), r.a.createElement(h.d, {
						onClick: this.onImportRevert,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))) : r.a.createElement(a.Fragment, null, r.a.createElement("ul", null, r.a.createElement(Z.j, null, "-", " ", i.fbt._("Color theme", null, {
						hk: "UeaQk"
					})), r.a.createElement(Z.j, null, "-", " ", i.fbt._("Banner", null, {
						hk: "2uppls"
					})), r.a.createElement(Z.j, null, "- ", i.fbt._("Menu", null, {
						hk: "3ETBC"
					})), r.a.createElement(Z.j, null, "-", " ", i.fbt._("Posts (excluding post flair templates)", null, {
						hk: "4GEeVq"
					}))), r.a.createElement(h.f, {
						onClick: this.onExport,
						"data-redditstyle": !0,
						disabled: e.isExportPending
					}, i.fbt._("Export theme", null, {
						hk: "13ZJb8"
					})), r.a.createElement(h.f, {
						onClick: this.hasExported,
						"data-redditstyle": !0
					}, i.fbt._("Add new theme", null, {
						hk: "1SC71"
					})), r.a.createElement(Kt.g, {
						id: "ss-file-input",
						type: "file",
						onChange: this.onFileUpload
					}))))
				}
			}
			var Yt = Bt(Qt, ["menuPosition", "bannerCommunityNameFormat", "bannerShowCommunityIcon", "bannerHeight", "postVoteIcons", "submenuBackgroundStyle", "backgroundImagePosition", "bannerBackgroundImagePosition", "bannerPositionedImagePosition", "postBackgroundImagePosition", "postPlaceholderImagePosition", "menuBackgroundOpacity", "backgroundImage", "bannerBackgroundImage", "bannerPositionedImage", "communityIcon", "menuBackgroundImage", "postBackgroundImage", "postDownvoteIconActive", "postDownvoteIconInactive", "postPlaceholderImage", "postUpvoteIconActive", "postUpvoteIconInactive", "secondaryBannerPositionedImage", "bannerBackgroundColor", "bannerOverlayColor", "menuBackgroundColor", "menuLinkColorActive", "menuLinkColorInactive", "menuLinkColorHover", "mobileKeyColor", "sidebarWidgetBackgroundColor", "sidebarWidgetHeaderColor", "submenuBackgroundColor", "backgroundColor", "highlightColor", "postBackgroundColor", "postDownvoteCountColor", "postTitleColor", "postUpvoteCountColor", "primaryColor"]),
				Jt = n("./src/reddit/controls/Typography/index.tsx");
			var Xt = Bt(e => r.a.createElement(Z.k, null, r.a.createElement(Ge, e), r.a.createElement(Jt.c, null, i.fbt._("These community styling options will also display in Reddit apps.", null, {
					hk: "34bghj"
				})), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Theme Colors", null, {
					hk: "10yzRc"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Base", null, {
						hk: "1qRNsV"
					}),
					name: "primaryColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Highlight", null, {
						hk: "1xLPh3"
					}),
					name: "highlightColor"
				}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Body Background", null, {
					hk: "22gpXW"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Color", null, {
						hk: "XRgby"
					}),
					name: "backgroundColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "34rPbo"
				})), r.a.createElement(Ze, {
					name: "backgroundImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "backgroundImage"
					}), r.a.createElement(Z.d, null, r.a.createElement(Le, {
						name: "backgroundImagePosition",
						values: ["cover", "tiled", "centered"]
					}))) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "30Hu5J"
						}),
						name: "backgroundImage"
					})
				}))), r.a.createElement(We, e)), ["primaryColor", "highlightColor", "backgroundColor", "backgroundImage", "backgroundImagePosition"]),
				$t = n("./src/reddit/actions/widgets/index.ts");
			const en = "blade_leave_menu";
			var tn = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				nn = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				an = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				rn = n("./src/reddit/components/StructuredStyles/CancelApplyButtons/index.m.less"),
				sn = n.n(rn);
			const ln = s.a.wrapped(nn.a, "TrashIcon", sn.a),
				on = s.a.wrapped(h.a, "PrimaryButton", sn.a),
				dn = s.a.wrapped(h.d, "SecondaryButton", sn.a),
				cn = s.a.div("ButtonRow", sn.a);
			var un = e => r.a.createElement(an.a, null, e.onDelete && r.a.createElement("span", {
					onClick: e.onDelete
				}, r.a.createElement(ln, null)), r.a.createElement(cn, null, e.onCancel && e.cancelText && r.a.createElement(dn, {
					"data-redditstyle": !0,
					children: e.cancelText,
					onClick: e.onCancel,
					disabled: e.disabled
				}), e.onApply && e.applyText && r.a.createElement(on, {
					"data-redditstyle": !0,
					children: e.applyText,
					onClick: e.onApply,
					disabled: e.disabled || e.invalid
				}))),
				mn = n("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				hn = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				pn = n("./src/reddit/components/StructuredStyles/EditItem/index.m.less"),
				gn = n.n(pn);
			const bn = s.a.wrapped(hn.a, "PencilIcon", gn.a);
			var fn = e => r.a.createElement(p.b, {
					disabled: e.disabled,
					onClick: e.disabled ? void 0 : e.onClick
				}, r.a.createElement(v.a, null, r.a.createElement("div", null, e.children), r.a.createElement(bn, {
					className: Object(ue.a)({
						[gn.a.disabled]: e.disabled
					})
				}))),
				En = n("./src/reddit/components/StructuredStyles/LabeledColorPicker/index.m.less"),
				xn = n.n(En);
			const vn = Object(c.c)({
					activeTooltipId: gt.a
				}),
				_n = Object(o.b)(vn, (e, {
					name: t
				}) => ({
					onToggleDropdown: () => e(Object(ot.h)({
						tooltipId: ut(t)
					}))
				})),
				Cn = s.a.wrapped(Z.e, "FormElementTitle", xn.a),
				yn = s.a.wrapped(v.a, "ExpandLeft", xn.a);
			var kn = _n(e => {
					const t = ut(e.name);
					return r.a.createElement(yn, null, r.a.createElement(Cn, {
						id: t,
						onClick: e.onToggleDropdown
					}, e.label), r.a.createElement(ht, {
						includeTransparent: e.includeTransparent,
						isDropdownOpen: e.activeTooltipId === t,
						name: e.name,
						onChange: e.onChange,
						onToggleDropdown: e.onToggleDropdown,
						value: e.value
					}))
				}),
				Sn = n("./src/reddit/controls/Button/index.tsx"),
				In = n("./src/reddit/components/StructuredStyles/Forms/WidgetColorPicker/index.m.less"),
				wn = n.n(In);
			const Dn = s.a.wrapped(Sn.o, "TertiaryButton", wn.a),
				Tn = Object(c.c)({
					savedStructuredStyles: J.k
				});
			class On extends r.a.Component {
				constructor() {
					super(...arguments), this.onChangeBackgroundColor = e => {
						this.props.onChangeWidgetStyles({
							...this.props.widgetStyles || Object(ae.m)(),
							backgroundColor: e
						})
					}, this.onChangeHeaderColor = e => {
						this.props.onChangeWidgetStyles({
							...this.props.widgetStyles || Object(ae.m)(),
							headerColor: e
						})
					}, this.onClearWidgetStyles = () => {
						this.props.onChangeWidgetStyles(Object(ae.m)())
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.widgetStyles || Object(ae.m)(), n = !!t.backgroundColor || !!t.headerColor, a = e.savedStructuredStyles.sidebarWidgetBackgroundColor, s = e.savedStructuredStyles.sidebarWidgetHeaderColor;
					return r.a.createElement(Z.i, null, r.a.createElement(Z.a, null, r.a.createElement(kn, {
						label: i.fbt._("Title background color", null, {
							hk: "1lxRhZ"
						}),
						name: "sidebarWidgetHeaderColor",
						onChange: this.onChangeHeaderColor,
						value: t.headerColor || s || void 0
					})), r.a.createElement(Z.a, null, r.a.createElement(kn, {
						label: i.fbt._("Widget background color", null, {
							hk: "BG39P"
						}),
						name: "sidebarWidgetBackgroundColor",
						onChange: this.onChangeBackgroundColor,
						value: t.backgroundColor || a || void 0
					})), n && r.a.createElement(Dn, {
						onClick: this.onClearWidgetStyles
					}, i.fbt._("Clear widget colors", null, {
						hk: "VRsbO"
					})))
				}
			}
			var jn = Object(o.b)(Tn)(On);
			class Fn extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(R.e, null, r.a.createElement(R.i, null, r.a.createElement(v.a, null, r.a.createElement(R.q, null, i.fbt._("Leave this menu without saving?", null, {
						hk: "2VpfMT"
					})), r.a.createElement(B.a, {
						onClick: e.toggleModal
					}, r.a.createElement(R.b, null)))), r.a.createElement(R.l, null, r.a.createElement(R.p, null, i.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "3dOZum"
					}))), r.a.createElement(R.g, null, r.a.createElement(R.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R.r, {
						onClick: e.onLeave,
						"data-redditstyle": !0
					}, i.fbt._("Leave", null, {
						hk: "2tuwHw"
					}))))
				}
			}
			var An = Object(N.a)(Fn);
			class Pn extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, e.isUnsavedChangesModalOpen && r.a.createElement(An, {
						onLeave: e.stopEditing,
						toggleModal: e.toggleLeaveMenuUnsavedModal,
						withOverlay: !0
					}), r.a.createElement(F.b, {
						breadcrumbs: e.breadcrumbs,
						onNavigate: () => {
							e.isUnsavedChangesModalOpen || (e.isDirty ? e.toggleLeaveMenuUnsavedModal() : e.stopEditing())
						}
					}), r.a.createElement(Z.m, null, e.title, r.a.createElement(Ve, {
						href: e.helpCenterLink
					}, e.title)))
				}
			}
			var Nn, Rn = Pn,
				Bn = n("./src/reddit/controls/Sortable/index.tsx"),
				Ln = n("./src/reddit/components/StructuredStyles/FeatureToggle/index.m.less"),
				Wn = n.n(Ln);
			! function(e) {
				e.Off = "0", e.On = "1"
			}(Nn || (Nn = {}));
			const Mn = s.a.wrapped(Kt.h, "StyledLabel", Wn.a),
				Un = s.a.wrapped(h.h, "ToggleInput", Wn.a),
				qn = s.a.wrapped(Z.e, "FormElementTitle", Wn.a);
			var zn = e => r.a.createElement(Mn, null, r.a.createElement(v.a, null, r.a.createElement(qn, null, e.label), r.a.createElement(Un, {
					redditStyle: !0,
					name: e.name,
					offValue: e.offValue,
					onChange: e.onChange,
					onValue: e.onValue,
					selected: e.value === e.onValue
				}))),
				Vn = n("./src/lib/linkMatchers/index.ts");
			var Hn;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(Hn || (Hn = {}));
			const Kn = e => {
					if (!e) return Hn.NoUrl;
					if (e.length < 4) return Hn.TooShort;
					const t = Object(Vn.h)(Vn.f, e);
					return t ? "ftp:" === t.schema ? Hn.Invalid : "mailto:" === t.schema ? Hn.Invalid : Hn.Valid : Hn.Invalid
				},
				Gn = 20;
			var Zn;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(Zn || (Zn = {}));
			const Qn = e => e ? e.length > Gn ? Zn.TooLong : Zn.Valid : Zn.TooShort;
			var Yn;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(Yn || (Yn = {}));
			const Jn = e => e.length ? Yn.Valid : Yn.TooShort;
			var Xn = n("./src/higherOrderComponents/withImageUploads.tsx");
			var $n = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(ke, {
				value: ae.f.Text,
				label: i.fbt._("Text button", null, {
					hk: "2zD9iL"
				}),
				selected: e.value === ae.f.Text,
				onClick: () => e.onClick(ae.f.Text)
			}), r.a.createElement(ke, {
				value: ae.f.Image,
				label: i.fbt._("Image button", null, {
					hk: "1sQoTL"
				}),
				selected: e.value === ae.f.Image,
				onClick: () => e.onClick(ae.f.Image)
			}));
			var ea = e => r.a.createElement(r.a.Fragment, null, e.localImage ? r.a.createElement(at.e, {
				imageData: e.localImage,
				onRemove: e.onRemoveImage
			}) : r.a.createElement(Xe.b, {
				label: i.fbt._("Drag and Drop or Upload Image", null, {
					hk: "Ru1kh"
				}),
				onChange: e.onUploadImage
			}), r.a.createElement(Z.b, null, i.fbt._(".jpeg or .png files up to 10 MB", null, {
				hk: "4tX3oZ"
			})), r.a.createElement(Z.b, null, i.fbt._("Recommended upload size: {width}x{height}px", [i.fbt._param("width", ae.b.toLocaleString()), i.fbt._param("height", ae.a.toLocaleString())], {
				hk: "4hNwLa"
			})));
			const ta = 24;
			var na;
			! function(e) {
				e.Button = "button-image", e.Hover = "hover-image"
			}(na || (na = {}));
			const aa = e => {
					if (e.hoverState && e.hoverState.kind === ae.f.Text) return {
						...e.hoverState
					};
					const t = e.kind === ae.f.Text ? e : Object(ae.s)();
					return {
						kind: ae.f.Text,
						color: t.color,
						text: "",
						fillColor: t.fillColor,
						textColor: t.textColor || t.color
					}
				},
				ra = e => {
					const {
						url: t,
						height: n,
						width: a
					} = e;
					return Object(rt.g)({
						url: t,
						height: n,
						width: a
					})
				};
			class sa extends r.a.Component {
				constructor(e) {
					super(e), this.updateButtonDraft = e => {
						e.kind === ae.f.Text && this.setState({
							cachedTextButton: e
						}), this.props.updateButtonDraft(e)
					}, this.updateButtonLink = e => {
						const t = e.currentTarget.value,
							n = {
								...this.props.buttonDraft
							};
						n.kind === ae.f.Text ? n.url = t : n.linkUrl = t, this.setState({
							cachedTextButton: {
								...this.state.cachedTextButton,
								url: t
							}
						}), this.updateButtonDraft(n)
					}, this.updateButtonText = e => {
						const t = e.currentTarget.value,
							n = {
								...this.props.buttonDraft,
								text: t
							};
						this.setState({
							cachedTextButton: {
								...this.state.cachedTextButton,
								text: t
							}
						}), this.updateButtonDraft(n)
					}, this.updateTextButtonDraft = e => {
						if (this.props.buttonDraft.kind === ae.f.Text) {
							const t = {
								...this.props.buttonDraft,
								...e
							};
							this.updateButtonDraft(t)
						}
					}, this.updateTextButtonFillColor = e => {
						this.updateTextButtonDraft({
							fillColor: e
						})
					}, this.updateTextButtonColor = e => {
						this.updateTextButtonDraft({
							color: e
						})
					}, this.updateTextButtonTextColor = e => {
						this.updateTextButtonDraft({
							textColor: e
						})
					}, this.updateTextButtonHoverState = e => {
						const t = {
							...this.state.hoverButtonDraft,
							...e
						};
						this.setState({
							hoverButtonDraft: t
						}), this.updateButtonDraft({
							...this.props.buttonDraft,
							hoverState: t
						})
					}, this.updateHoverDraftText = e => {
						this.updateTextButtonHoverState({
							text: e.currentTarget.value
						})
					}, this.updateHoverDraftFillColor = e => {
						this.updateTextButtonHoverState({
							fillColor: e
						})
					}, this.updateHoverDraftColor = e => {
						this.updateTextButtonHoverState({
							color: e
						})
					}, this.updateHoverDraftTextColor = e => {
						this.updateTextButtonHoverState({
							textColor: e
						})
					}, this.setButtonImage = e => {
						const {
							url: t,
							height: n,
							width: a
						} = e, r = {
							kind: ae.f.Image,
							url: t,
							height: n,
							width: a,
							linkUrl: Object(ae.n)(this.props.buttonDraft),
							text: this.props.buttonDraft.text,
							hoverState: this.props.buttonDraft.hoverState
						};
						this.updateButtonDraft(r)
					}, this.setHoverImage = e => {
						const {
							url: t,
							height: n,
							width: a
						} = e, r = {
							kind: ae.f.Image,
							url: t,
							height: n,
							width: a
						}, s = {
							...this.props.buttonDraft,
							hoverState: r
						};
						this.updateButtonDraft(s)
					}, this.addImage = async (e, t) => {
						const n = Array.isArray(e) ? e[0] : e,
							a = await Object(rt.e)(n);
						this.props.uploadImage({
							imageData: a
						}), this.setState(e => ({
							localData: {
								...e.localData,
								[t]: a
							}
						}))
					}, this.handleButtonImageInput = e => this.addImage(e, na.Button), this.handleHoverImageInput = e => this.addImage(e, na.Hover), this.removeImage = e => {
						const t = {
								...this.state.localData
							},
							n = t[e];
						n && (delete t[e], this.props.cancelUpload(n), this.setState(e => ({
							localData: t
						})))
					}, this.handleRemoveButtonImage = () => this.removeImage(na.Button), this.handleRemoveHoverImage = () => this.removeImage(na.Hover), this.onSelectButtonKind = e => {
						if (e !== this.state.buttonKind) {
							if (e === ae.f.Text) {
								const e = {
									...this.state.cachedTextButton,
									hoverState: this.props.buttonDraft.hoverState
								};
								this.updateButtonDraft(e)
							} else {
								const e = this.state.localData[na.Button];
								e && Object(rt.h)(e) && this.setButtonImage(e)
							}
							this.setState({
								buttonKind: e
							})
						}
					}, this.removeHoverState = () => {
						this.updateButtonDraft({
							...this.props.buttonDraft,
							hoverState: void 0
						})
					}, this.setHoverState = e => {
						const t = {
							...this.props.buttonDraft
						};
						if (e === ae.f.Text) t.hoverState = {
							...this.state.hoverButtonDraft
						}, this.updateButtonDraft(t);
						else if (e === ae.f.Image) {
							const e = this.state.localData[na.Hover];
							e && Object(rt.h)(e) ? this.setHoverImage(e) : this.removeHoverState()
						}
					}, this.onSelectHoverKind = e => {
						e !== this.state.hoverKind && (this.setHoverState(e), this.setState({
							hoverKind: e
						}))
					}, this.toggleHover = () => {
						this.state.isHoverEnabled ? this.removeHoverState() : this.setHoverState(this.state.hoverKind), this.setState({
							isHoverEnabled: !this.state.isHoverEnabled
						})
					}, this.isValidUrl = e => {
						const t = Object(ae.n)(e);
						return Kn(t) === Hn.Valid
					}, this.isInvalidButton = () => {
						const e = this.props.buttonDraft;
						if (this.state.buttonKind !== e.kind) return !0;
						if (!e.text.length || e.text.length > ta) return !0;
						if (this.state.buttonKind === ae.f.Image) {
							const e = this.state.localData[na.Button];
							if (!e || !Object(rt.h)(e)) return !0
						}
						return e.kind === ae.f.Text && !e.color || (!(!this.state.isHoverEnabled || e.hoverState && !this.isInvalidHoverState(e.hoverState)) || !this.isValidUrl(e))
					}, this.onCancel = () => {
						for (const e in this.state.localData) {
							const t = this.state.localData[e];
							this.props.cancelUpload(t)
						}
						this.props.onCancel()
					};
					const t = {};
					e.buttonDraft.kind === ae.f.Image && (t[na.Button] = ra(e.buttonDraft));
					const n = e.buttonDraft.hoverState;
					n && n.kind === ae.f.Image && (t[na.Hover] = Object(rt.g)(n));
					const a = e.buttonDraft.kind === ae.f.Text ? {
						...e.buttonDraft
					} : {
						...Object(ae.s)(),
						url: e.buttonDraft.linkUrl,
						text: e.buttonDraft.text
					};
					this.state = {
						buttonKind: e.buttonDraft.kind,
						cachedTextButton: a,
						hoverButtonDraft: aa(e.buttonDraft),
						hoverKind: n ? n.kind : ae.f.Text,
						isHoverEnabled: !!n,
						localData: t
					}
				}
				componentWillUnmount() {
					for (const e in this.state.localData) {
						const t = this.state.localData[e];
						this.props.cancelUpload(t)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = [],
						n = {};
					for (const s in this.state.localData) t.push(this.state.localData[s]), n[this.state.localData[s].id] = s;
					const a = e.getImageUploadsIfModified(t);
					if (!a) return;
					const r = {};
					for (const s of a) {
						const e = n[s.id];
						r[e] = s, Object(rt.h)(s) && (e === na.Button && this.state.buttonKind === ae.f.Image ? this.setButtonImage(s) : e === na.Hover && this.state.hoverKind === ae.f.Image && this.setHoverImage(s))
					}
					this.setState(e => ({
						localData: r
					}))
				}
				isInvalidHoverState(e) {
					if (e.kind === ae.f.Image) {
						const e = this.state.localData[na.Hover];
						if (!e || !Object(rt.h)(e)) return !0
					} else if (e.kind === ae.f.Text) {
						if (!e.color) return !0;
						if (!e.text.length || e.text.length > ta) return !0
					}
					return !1
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, e.isAdding ? i.fbt._("New Button", null, {
						hk: "24luGD"
					}) : i.fbt._("Edit Button", null, {
						hk: "7JtMi"
					})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Button Text", null, {
							hk: "3kjUQ1"
						}),
						value: e.buttonDraft.text || "",
						onChange: this.updateButtonText
					}), r.a.createElement(tn.a, {
						maxChars: ta,
						text: e.buttonDraft.text
					})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Link URL", null, {
							hk: "4kbheN"
						}),
						value: Object(ae.n)(e.buttonDraft),
						onChange: this.updateButtonLink
					}), !this.isValidUrl(e.buttonDraft) && r.a.createElement(Z.c, null, i.fbt._("The link provided is invalid", null, {
						hk: "2OGHRG"
					}))), r.a.createElement(Z.i, null, r.a.createElement($n, {
						onClick: this.onSelectButtonKind,
						value: t.buttonKind
					})), t.buttonKind === ae.f.Image ? r.a.createElement(ea, {
						localImage: t.localData[na.Button] || void 0,
						onRemoveImage: this.handleRemoveButtonImage,
						onUploadImage: this.handleButtonImageInput
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.i, null, r.a.createElement(kn, {
						label: i.fbt._("Fill color", null, {
							hk: "Z9Mpb"
						}),
						name: he.a.ButtonWidgetFillColor,
						onChange: this.updateTextButtonFillColor,
						value: t.cachedTextButton.fillColor,
						includeTransparent: !0
					})), r.a.createElement(Z.i, null, r.a.createElement(kn, {
						label: i.fbt._("Stroke color", null, {
							hk: "3NkZYM"
						}),
						name: he.a.ButtonWidgetButtonColor,
						onChange: this.updateTextButtonColor,
						value: t.cachedTextButton.color
					})), r.a.createElement(Z.i, null, r.a.createElement(kn, {
						label: i.fbt._("Text color", null, {
							hk: "2Lc7J4"
						}),
						name: he.a.ButtonWidgetTextColor,
						onChange: this.updateTextButtonTextColor,
						value: t.cachedTextButton.textColor || t.cachedTextButton.color
					}))), r.a.createElement(Z.i, null, r.a.createElement(zn, {
						name: "widgetButtonHoverToggle",
						value: t.isHoverEnabled ? Nn.On : Nn.Off,
						onChange: this.toggleHover,
						onValue: Nn.On,
						offValue: Nn.Off,
						label: i.fbt._("Hover treatment", null, {
							hk: "1to7PM"
						})
					})), t.isHoverEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.i, null, r.a.createElement($n, {
						onClick: this.onSelectHoverKind,
						value: t.hoverKind
					})), t.hoverKind === ae.f.Image ? r.a.createElement(ea, {
						localImage: t.localData[na.Hover] || void 0,
						onRemoveImage: this.handleRemoveHoverImage,
						onUploadImage: this.handleHoverImageInput
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Button Text", null, {
							hk: "3kjUQ1"
						}),
						value: t.hoverButtonDraft.text || "",
						onChange: this.updateHoverDraftText
					}), r.a.createElement(tn.a, {
						maxChars: ta,
						text: t.hoverButtonDraft.text || ""
					})), r.a.createElement(Z.i, null, r.a.createElement(kn, {
						label: i.fbt._("Fill color", null, {
							hk: "Z9Mpb"
						}),
						name: he.a.ButtonWidgetHoverFillColor,
						onChange: this.updateHoverDraftFillColor,
						value: t.hoverButtonDraft.fillColor,
						includeTransparent: !0
					})), r.a.createElement(Z.i, null, r.a.createElement(kn, {
						label: i.fbt._("Stroke color", null, {
							hk: "3NkZYM"
						}),
						name: he.a.ButtonWidgetHoverColor,
						onChange: this.updateHoverDraftColor,
						value: t.hoverButtonDraft.color
					})), r.a.createElement(Z.i, null, r.a.createElement(kn, {
						label: i.fbt._("Text color", null, {
							hk: "2Lc7J4"
						}),
						name: he.a.ButtonWidgetHoverTextColor,
						onChange: this.updateHoverDraftTextColor,
						value: t.hoverButtonDraft.textColor || t.cachedTextButton.textColor || t.cachedTextButton.color
					})))), r.a.createElement(un, {
						applyText: i.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						cancelText: i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						invalid: this.isInvalidButton(),
						onApply: e.onApply,
						onCancel: this.onCancel,
						onDelete: e.onDelete
					}))
				}
			}
			var ia = Object(Xn.a)(sa, $t.a),
				la = n("./node_modules/lodash/isEqual.js"),
				oa = n.n(la);
			class da extends r.a.Component {
				constructor(e) {
					super(e), this.state = this.getInitialState(e.widget), this.getInitialState = this.getInitialState.bind(this), this.getWidgetFromState = this.getWidgetFromState.bind(this), this.getUpdatedWidget = this.getUpdatedWidget.bind(this), this.setWidgetState = this.setWidgetState.bind(this), this.isValidWidget = this.isValidWidget.bind(this), this.getApiRequestFromProps = this.getApiRequestFromProps.bind(this), this.afterApiRequestCompleted = this.afterApiRequestCompleted.bind(this), this.isRequestInProgress = this.isRequestInProgress.bind(this), this.hasApiErrors = this.hasApiErrors.bind(this), this.handleCancelEditing = this.handleCancelEditing.bind(this), this.startApiRequestThen = this.startApiRequestThen.bind(this), this.handleDeleteWidget = this.handleDeleteWidget.bind(this), this.handleSaveWidget = this.handleSaveWidget.bind(this)
				}
				getInitialState(e) {
					throw new Error("Not Implemented")
				}
				getWidgetFromState() {
					return this.state.widget
				}
				getUpdatedWidget(e) {
					return {
						...this.state.widget,
						...e
					}
				}
				setWidgetState(e) {
					this.setState({
						widget: this.getUpdatedWidget(e)
					})
				}
				isValidWidget() {
					throw new Error("Not Implemented")
				}
				getApiRequestFromProps(e) {
					if ("string" == typeof this.state.apiRequestId) return e.apiRequestStates[this.state.apiRequestId]
				}
				componentWillReceiveProps(e) {
					const t = this.getApiRequestFromProps(e);
					t && t.apiRequestStatus === wt.a.Complete && (this.afterApiRequestCompleted(), this.setState(this.getInitialState(e.widget))), this.props.widget !== e.widget && this.setState({
						widget: e.widget
					})
				}
				componentWillUnmount() {
					"string" == typeof this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId)
				}
				afterApiRequestCompleted() {
					this.props.stopEditing()
				}
				componentDidUpdate(e, t) {
					if (this.props.isDirty) return;
					const n = this.getWidgetFromState();
					oa()(this.props.widget, n) || this.props.dirtyEditor()
				}
				isRequestInProgress() {
					const e = this.getApiRequestFromProps(this.props);
					return !(!e || e.apiRequestStatus === wt.a.Failed)
				}
				hasApiErrors() {
					const e = this.getApiRequestFromProps(this.props);
					return !!e && e.apiRequestStatus === wt.a.Failed
				}
				handleCancelEditing() {
					this.props.stopEditing()
				}
				startApiRequestThen(e) {
					if (this.isRequestInProgress()) return;
					const t = Object(wt.b)();
					this.setState({
						apiRequestId: t
					}, () => e(t))
				}
				handleDeleteWidget() {
					const e = this.props.widget;
					this.startApiRequestThen(t => {
						this.props.deleteWidget(e, t)
					})
				}
				handleSaveWidget() {
					if (!this.isValidWidget()) return;
					const e = this.getWidgetFromState();
					this.startApiRequestThen(t => {
						this.props.saveChanges(e, t)
					})
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement("div", null, "This widget is not implemented"))
				}
			}
			var ca = da;
			var ua = class extends ca {},
				ma = n("./src/reddit/components/StructuredStyles/Forms/ButtonWidgetEditor/index.m.less"),
				ha = n.n(ma);
			const pa = 10,
				ga = 250,
				ba = 30,
				fa = s.a.wrapped(h.f, "TertiaryButton", ha.a);
			var Ea;
			! function(e) {
				e[e.None = 0] = "None", e[e.Add = 1] = "Add", e[e.Edit = 2] = "Edit", e[e.Sort = 3] = "Sort"
			}(Ea || (Ea = {}));
			var xa = class extends ua {
					constructor() {
						super(...arguments), this.handleApplyUpdates = () => {
							this.endUpdate(this.state.widget.buttons)
						}, this.handleCancelUpdates = () => {
							this.endUpdate()
						}, this.handleDeleteButton = () => {
							if (this.state.editMode !== Ea.Edit) return;
							const e = [...this.state.widget.buttons];
							e.splice(this.state.editIndex, 1), this.endUpdate(e)
						}, this.handleAddButton = () => {
							const {
								widget: e
							} = this.state, t = Object(ae.s)(), n = e.buttons.slice();
							n.push(t), this.setState({
								widget: {
									...e,
									buttons: n
								},
								cachedButtons: e.buttons,
								editIndex: n.length - 1,
								editMode: Ea.Add
							})
						}, this.handleEditButton = e => {
							this.setState({
								cachedButtons: this.state.widget.buttons,
								editIndex: e,
								editMode: Ea.Edit
							})
						}, this.handleStartSorting = () => {
							this.setState({
								cachedButtons: this.state.widget.buttons,
								editIndex: -1,
								editMode: Ea.Sort
							})
						}, this.handleUpdateSort = e => {
							this.setWidgetState({
								buttons: e
							})
						}, this.handleUpdateButton = e => {
							const t = this.state.widget.buttons.slice();
							t[this.state.editIndex] = e, this.setWidgetState({
								buttons: t
							})
						}, this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.handleTextChange = e => {
							this.setWidgetState({
								description: e.currentTarget.value
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					getInitialState(e) {
						return {
							widget: e,
							editIndex: -1,
							editMode: Ea.None
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > ba) && (!(e.description && e.description.length > ga) && !!e.buttons.length)
					}
					endUpdate(e) {
						const {
							widget: t
						} = this.state;
						this.setState({
							widget: this.getUpdatedWidget({
								buttons: e || this.state.cachedButtons || t.buttons
							}),
							cachedButtons: void 0,
							editIndex: -1,
							editMode: Ea.None
						})
					}
					renderEditableButtonList() {
						return this.state.widget.buttons.map((e, t) => this.state.editMode === Ea.Edit && t === this.state.editIndex ? r.a.createElement(Z.f, null, r.a.createElement(ia, {
							buttonDraft: e,
							isAdding: !1,
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates,
							onDelete: this.handleDeleteButton,
							updateButtonDraft: this.handleUpdateButton
						})) : this.state.editMode !== Ea.Add || this.state.editIndex !== t ? r.a.createElement(fn, {
							onClick: () => this.handleEditButton(t),
							disabled: this.state.editMode === Ea.Edit || this.state.editMode === Ea.Add
						}, e.text) : void 0)
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t, a = t.editMode !== Ea.None;
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.f, null, r.a.createElement(Z.l, null, r.a.createElement(Z.i, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(Kt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(tn.a, {
							maxChars: ba,
							text: n.shortName
						})), r.a.createElement(jn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						})), r.a.createElement(Z.l, null, r.a.createElement(Z.m, null, i.fbt._("Button widget content", null, {
							hk: "2JiORB"
						})), r.a.createElement(Z.i, null, r.a.createElement(Z.h, null, i.fbt._("Description text", null, {
							hk: "uVkda"
						})), r.a.createElement(Kt.i, {
							value: n.description || "",
							onChange: this.handleTextChange
						}), r.a.createElement(tn.a, {
							maxChars: ga,
							text: n.description || ""
						}))), r.a.createElement(Z.m, null, i.fbt._("Buttons", null, {
							hk: "3ChEwG"
						}), r.a.createElement(Z.b, null, i.fbt._("Remaining buttons: {numRemaining}", [i.fbt._param("numRemaining", (pa - n.buttons.length).toLocaleString())], {
							hk: "1vDj6p"
						}))), r.a.createElement(Z.f, null, r.a.createElement(fa, {
							disabled: a || n.buttons.length >= pa,
							onClick: this.handleAddButton,
							"data-redditstyle": !0
						}, i.fbt._("Add Button", null, {
							hk: "3I4Pk3"
						})), r.a.createElement(fa, {
							disabled: a || n.buttons.length < 2,
							onClick: this.handleStartSorting,
							"data-redditstyle": !0
						}, i.fbt._("Reorder", null, {
							hk: "2RHv35"
						}))), t.editMode === Ea.Sort && r.a.createElement(Bn.a, {
							values: n.buttons,
							render: (e, t, n, a, s) => r.a.createElement(mn.a, {
								isDragging: n,
								isOver: a,
								canDrop: s
							}, e.text),
							onDrop: (e, t, n) => this.handleUpdateSort(n)
						}) || this.renderEditableButtonList()), t.editMode === Ea.Add && r.a.createElement(ia, {
							isAdding: !0,
							buttonDraft: n.buttons[t.editIndex],
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates,
							updateButtonDraft: this.handleUpdateButton
						}), t.editMode === Ea.Sort && r.a.createElement(Z.i, null, r.a.createElement(un, {
							applyText: i.fbt._("Apply", null, {
								hk: "3mAjVQ"
							}),
							cancelText: i.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates
						})), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
							hk: "2vkqN5"
						}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							disabled: a || !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							disabled: a,
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(h.c, {
							disabled: a || this.isRequestInProgress(),
							onClick: this.handleDeleteWidget,
							"data-redditstyle": !0
						}, i.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						})))
					}
				},
				va = n("./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/eventDataToggle.m.less"),
				_a = n.n(va);
			const Ca = s.a.input("Input", _a.a),
				ya = s.a.wrapped(an.a, "ExpandRight", _a.a);
			var ka = e => r.a.createElement(Kt.h, null, r.a.createElement(ya, null, e.selected ? r.a.createElement(Kt.b, null) : r.a.createElement(Kt.a, null), r.a.createElement("div", null, r.a.createElement(Ca, {
				name: e.name,
				onClick: t => e.onChange(e.name),
				readOnly: !0
			}), r.a.createElement(ne.a, {
				label: e.label
			}))));
			var Sa = class extends ca {
					getInitialState(e) {
						return {
							widget: e
						}
					}
				},
				Ia = n("./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/index.m.less"),
				wa = n.n(Ia);
			const Da = 30,
				Ta = 6,
				Oa = 50,
				ja = s.a.wrapped(Z.c, "FormElementError", wa.a),
				Fa = s.a.wrapped(Kt.c, "NumEventsInput", wa.a),
				Aa = s.a.div("InputLabel", wa.a);
			var Pa = class extends Sa {
					constructor() {
						super(...arguments), this.isValidGoogleCalendarId = () => this.state.widget.googleCalendarId.match(".+@.{2,}") && this.state.widget.googleCalendarId.length >= Ta, this.onTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.onGoogleCalendarIdChange = e => {
							this.setWidgetState({
								googleCalendarId: e.currentTarget.value
							})
						}, this.onChangeNumEvents = e => {
							const t = parseInt(e.currentTarget.value, 10);
							t > Oa || this.setWidgetState({
								configuration: {
									...this.state.widget.configuration,
									numEvents: t
								}
							})
						}, this.onToggleConfiguration = e => {
							const t = {
								...this.state.widget.configuration
							};
							t[e] = !t[e], this.setWidgetState({
								configuration: t
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					getInitialState(e) {
						return {
							widget: {
								...e,
								configuration: {
									...e.configuration,
									numEvents: e.configuration.numEvents || 10
								}
							}
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state, t = e.shortName;
						return !(!t || !this.isValidGoogleCalendarId()) && (!(!e.configuration.numEvents || e.configuration.numEvents < 1 || e.configuration.numEvents > Oa) && (t.trim().length > 0 && t.length <= Da))
					}
					handleSaveWidget() {
						if (!this.isValidWidget()) return;
						const e = {
							...this.state.widget,
							requiresSync: !0
						};
						this.startApiRequestThen(t => {
							this.props.saveChanges(e, t)
						})
					}
					render() {
						const {
							props: e
						} = this, {
							widget: t
						} = this.state;
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.l, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(Kt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: t.shortName,
							onChange: this.onTitleChange
						}), r.a.createElement(tn.a, {
							maxChars: Da,
							text: t.shortName
						}), r.a.createElement(jn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: t.styles
						})), r.a.createElement(Z.f, null, r.a.createElement(Z.m, null, i.fbt._("Calendar widget content", null, {
							hk: "MnblC"
						})), r.a.createElement(Z.l, null, r.a.createElement(Z.h, null, i.fbt._("Google Calendar ID", null, {
							hk: "22Qunx"
						})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
							placeholder: i.fbt._("Google Calendar ID", null, {
								hk: "2OHkdZ"
							}),
							value: t.googleCalendarId,
							onChange: this.onGoogleCalendarIdChange
						}), !this.isValidGoogleCalendarId() && t.googleCalendarId.length > 1 && r.a.createElement(ja, null, i.fbt._("Invalid Google Calendar ID", null, {
							hk: "175iVQ"
						}))), r.a.createElement(Z.h, null, i.fbt._("Number of events displayed", null, {
							hk: "2Xb0e8"
						})), r.a.createElement(Z.i, null, r.a.createElement(Fa, {
							value: t.configuration.numEvents ? t.configuration.numEvents.toString() : "",
							onChange: this.onChangeNumEvents
						}), r.a.createElement(Aa, null, i.fbt._("Events", null, {
							hk: "1abn4d"
						})), r.a.createElement(Z.b, null, i.fbt._("Max {number} events", [i.fbt._param("number", Oa.toLocaleString())], {
							hk: "3Kn7Wm"
						})))), r.a.createElement(Z.m, null, i.fbt._("Event data included", null, {
							hk: "2FkLQR"
						})), r.a.createElement(Z.i, null, r.a.createElement(ka, {
							name: "showDate",
							label: i.fbt._("Date", null, {
								hk: "1RScWn"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showDate
						})), r.a.createElement(Z.i, null, r.a.createElement(ka, {
							name: "showTime",
							label: i.fbt._("Time", null, {
								hk: "1Nay4c"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showTime
						})), r.a.createElement(Z.i, null, r.a.createElement(ka, {
							name: "showLocation",
							label: i.fbt._("Location", null, {
								hk: "2tmlcT"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showLocation
						})), r.a.createElement(Z.i, null, r.a.createElement(ka, {
							name: "showDescription",
							label: i.fbt._("Description", null, {
								hk: "X3d2w"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showDescription
						}))), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(ja, null, i.fbt._("Something went wrong", null, {
							hk: "2xn6Fx"
						}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget(),
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), e.widget.id && r.a.createElement(h.d, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Synchronize Now", null, {
							hk: "47n9IW"
						})), r.a.createElement(h.d, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(Z.f, null, r.a.createElement(h.c, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				},
				Na = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				Ra = n("./src/reddit/layout/row/Inline/index.tsx"),
				Ba = n("./src/reddit/components/StructuredStyles/Forms/CommunityListEditor/index.m.less"),
				La = n.n(Ba);
			const Wa = 30,
				Ma = 10;
			var Ua;
			! function(e) {
				e[e.None = 0] = "None", e[e.Add = 1] = "Add", e[e.Sort = 2] = "Sort"
			}(Ua || (Ua = {}));
			var qa = class extends ua {
					constructor() {
						super(...arguments), this.handleCancelUpdates = () => {
							this.endUpdate()
						}, this.handleApplyNewCommunity = () => {
							const e = this.getNewCommunityName();
							this.state.editMode === Ua.Add && e && this.endUpdate(this.state.widget.data)
						}, this.handleApplySort = () => {
							this.state.editMode === Ua.Sort && this.endUpdate(this.state.widget.data)
						}, this.handleDeleteCommunity = e => {
							const t = [...this.state.widget.data];
							t.splice(e, 1), this.endUpdate(t)
						}, this.handleStartSorting = () => {
							this.setState({
								cachedData: this.state.widget.data,
								editMode: Ua.Sort
							})
						}, this.handleUpdateSort = e => {
							this.setWidgetState({
								data: e
							})
						}, this.handlePickCommunity = e => {
							const t = {
								name: e.record ? e.record.name : e.rawString,
								type: "subreddit",
								isNSFW: !1
							};
							if (!t.name) return;
							const n = this.state.widget.data.slice();
							n.push(t), this.setState({
								cachedData: this.state.widget.data,
								editMode: Ua.Add,
								widget: this.getUpdatedWidget({
									data: n
								})
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}, this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}
					}
					getInitialState(e) {
						return {
							editMode: Ua.None,
							widget: e
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > Wa) && !!e.data.length
					}
					getNewCommunityName() {
						const {
							widget: e
						} = this.state;
						return this.state.editMode !== Ua.Add ? "" : e.data[e.data.length - 1].name || ""
					}
					endUpdate(e) {
						this.setState({
							cachedData: void 0,
							editMode: Ua.None,
							widget: this.getUpdatedWidget({
								data: e || this.state.cachedData || this.state.widget.data
							})
						})
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t, a = this.getNewCommunityName();
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(tn.a, {
							maxChars: Wa,
							text: n.shortName
						})), r.a.createElement(Z.i, null, r.a.createElement(jn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						})), r.a.createElement(Z.m, null, i.fbt._("Communities", null, {
							hk: "1PIYRk"
						}), r.a.createElement(Z.b, null, i.fbt._("Remaining communities: {numRemaining}", [i.fbt._param("numRemaining", (Ma - n.data.length).toLocaleString())], {
							hk: "2i6FQz"
						}))), t.editMode === Ua.Sort ? r.a.createElement("div", null, r.a.createElement(Bn.a, {
							values: n.data,
							render: (e, t, n, a, s) => r.a.createElement(mn.a, {
								isDragging: n,
								isOver: a,
								canDrop: s
							}, e.name),
							onDrop: (e, t, n) => this.handleUpdateSort(n)
						}), r.a.createElement(un, {
							applyText: i.fbt._("Apply", null, {
								hk: "3mAjVQ"
							}),
							cancelText: i.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							onApply: this.handleApplySort,
							onCancel: this.handleCancelUpdates
						})) : n.data.map((e, t) => r.a.createElement(p.b, {
							key: e.id
						}, e.name, r.a.createElement(B.a, {
							className: La.a.textButton,
							onClick: e => this.handleDeleteCommunity(t)
						}, r.a.createElement(nn.a, {
							className: La.a.trashIcon
						}))))), n.data.length < Ma && t.editMode !== Ua.Sort && r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Add New Community", null, {
							hk: "1tXrnU"
						})), r.a.createElement(Ra.a, {
							className: La.a.controlRow
						}, r.a.createElement(Na.a, {
							className: La.a.subredditPicker,
							onSelect: this.handlePickCommunity,
							value: {
								rawString: a,
								record: null
							}
						})), r.a.createElement(un, {
							applyText: i.fbt._("Apply", null, {
								hk: "3mAjVQ"
							}),
							cancelText: i.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							invalid: !a,
							onApply: this.handleApplyNewCommunity,
							onCancel: this.handleCancelUpdates
						})), r.a.createElement(Z.f, null, r.a.createElement(h.f, {
							disabled: t.editMode === Ua.Sort || n.data.length < 2,
							onClick: this.handleStartSorting,
							"data-redditstyle": !0
						}, i.fbt._("Reorder Communities", null, {
							hk: "3q63NN"
						}))), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
							hk: "1h26Ih"
						}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							disabled: t.editMode === Ua.Sort || !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							disabled: t.editMode === Ua.Sort,
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(Z.i, null, r.a.createElement(h.c, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				},
				za = n("./src/lib/copyToClipboard/index.ts"),
				Va = n("./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/ExperimentalFeatureNotice.m.less"),
				Ha = n.n(Va);
			const {
				fbt: Ka
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ga = s.a.wrapped(Me.a, "Info", Ha.a), Za = s.a.wrapped(Z.f, "FormGroup", Ha.a), Qa = s.a.wrapped(Z.h, "FormGroupTitle", Ha.a), Ya = s.a.wrapped(Z.g, "FormGroupDescription", Ha.a);
			var Ja = () => r.a.createElement(Za, null, r.a.createElement(an.a, null, r.a.createElement(Ga, null), r.a.createElement("div", null, r.a.createElement(Qa, null, Ka._("This is an experimental feature", null, {
				hk: "4pZ6q0"
			})), r.a.createElement(Ya, null, Ka._("Custom widgets don't display on mobile devices. Customizations can break at any time", null, {
				hk: "2rzQms"
			})))));
			var Xa = class extends ca {},
				$a = n("./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/index.m.less"),
				er = n.n($a);
			const tr = 30,
				nr = 1e4,
				ar = 1e5,
				rr = 50,
				sr = 500,
				ir = 5,
				lr = 20,
				or = /^[a-z0-9\-]+$/i,
				dr = s.a.wrapped(Kt.i, "Textarea", er.a),
				cr = s.a.wrapped(Z.f, "FormGroup", er.a),
				ur = s.a.wrapped(Z.f, "UnsavedImageFormContainer", er.a),
				mr = s.a.wrapped(Z.b, "FormElementDescription", er.a),
				hr = s.a.wrapped(Z.c, "FormElementError", er.a),
				pr = s.a.a("CopyLink", er.a);
			var gr = Object(Xn.a)(class extends Xa {
					constructor() {
						super(...arguments), this.addImage = async e => {
							if (null !== this.state.unsavedImage || this.state.localData.length >= ir) return;
							const t = await Object(rt.e)(e);
							this.props.uploadImage({
								imageData: t
							}), this.setState({
								unsavedImage: t
							})
						}, this.removeImage = e => {
							let t;
							if (null == e) {
								if (null == this.state.unsavedImage) return;
								t = this.state.unsavedImage, this.setState(e => ({
									unsavedImage: null
								}))
							} else {
								const n = [...this.state.localData];
								t = n.splice(e, 1)[0], this.setState(e => ({
									localData: n,
									copiedImageIndex: null
								}))
							}
							this.props.cancelUpload(t)
						}, this.copyImageNameToClipboard = e => {
							const t = this.getImageTagByIndex(e);
							t && (Object(za.a)(`url(${t})`) ? this.setState({
								copiedImageIndex: e
							}) : this.setState({
								copiedImageIndex: null
							}))
						}, this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.handleTextChange = e => {
							this.setWidgetState({
								text: e.currentTarget.value
							})
						}, this.handleCssChange = e => {
							this.setWidgetState({
								css: e.currentTarget.value
							})
						}, this.handleHeightChange = e => {
							this.setWidgetState({
								height: parseInt(e.currentTarget.value, 10)
							})
						}, this.handleImageInput = e => {
							Array.isArray(e) ? this.addImage(e[0]) : this.addImage(e)
						}, this.handleAddUnsavedImageData = () => {
							null != this.state.unsavedName && null != this.state.unsavedImage && this.isUnsavedImageNameValid() && this.setState({
								unsavedName: null,
								unsavedImage: null,
								localData: [...this.state.localData, this.state.unsavedImage],
								imageNamesById: {
									...this.state.imageNamesById,
									[this.state.unsavedImage.id]: this.state.unsavedName
								}
							})
						}, this.handleClearUnsavedImageData = () => {
							null != this.state.unsavedImage && this.props.cancelUpload(this.state.unsavedImage), this.setState({
								unsavedName: null,
								unsavedImage: null
							})
						}, this.handleUnsavedNameChange = e => {
							this.setState({
								unsavedName: e.currentTarget.value
							})
						}
					}
					componentWillUnmount() {
						super.componentWillUnmount();
						for (const e of this.state.localData) this.props.cancelUpload(e);
						this.state.unsavedImage && this.props.cancelUpload(this.state.unsavedImage)
					}
					componentWillReceiveProps(e) {
						super.componentWillReceiveProps(e);
						const t = this.getApiRequestFromProps(e);
						if (t && t.apiRequestStatus === wt.a.Failed) {
							if (this.errors = {}, t.apiError.fields && t.apiError.fields.length)
								for (const o of t.apiError.fields) this.errors[o.field] = o.msg
						} else this.errors = null;
						const {
							state: n
						} = this;
						let {
							imageNamesById: a,
							imageIdsByName: r,
							unsavedImage: s,
							localData: i
						} = n;
						const l = e.getImageUploadsIfModified(n.localData);
						if (l) {
							i = l, a = {}, r = {};
							for (const e of l) {
								const t = n.imageNamesById[e.id];
								a[e.id] = t, r[t] = e.id
							}
						}
						if (s) {
							const t = e.getImageUploadsIfModified([s]);
							t && (s = t[0] || null)
						}
						this.setState(e => ({
							localData: i,
							imageNamesById: a,
							imageIdsByName: r,
							unsavedImage: s
						}))
					}
					getInitialState(e) {
						const t = [],
							n = {},
							a = {};
						for (const r of e.imageData) {
							const e = Object(rt.g)(r);
							t.push(e), n[e.id] = r.name, a[r.name] = e.id
						}
						return {
							widget: e,
							localData: t,
							imageNamesById: n,
							imageIdsByName: a,
							unsavedImage: null,
							unsavedName: null,
							copiedImageIndex: null
						}
					}
					getWidgetFromState() {
						const {
							id: e,
							shortName: t,
							kind: n,
							text: a,
							css: r,
							height: s
						} = this.state.widget, i = [];
						for (const l of this.state.localData) Object(rt.h)(l) && i.push({
							url: l.url,
							height: l.height,
							width: l.width,
							name: this.state.imageNamesById[l.id]
						});
						return {
							id: e,
							shortName: t,
							kind: n,
							text: a,
							css: r,
							height: s,
							imageData: i
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > tr) && (!(!e.text || e.text.length > nr) && (!(!e.css || e.css.length > ar) && (!!this.isHeightValid() && !this.state.localData.some(e => !Object(rt.h)(e)))))
					}
					isHeightValid() {
						const {
							widget: e
						} = this.state;
						return !(!e.height || e.height < rr || e.height > sr)
					}
					isUnsavedImageNameValid() {
						return null != this.state.unsavedName && this.state.unsavedName.length > 0 && this.state.unsavedName.length <= lr && !(this.state.unsavedName in this.state.imageIdsByName) && or.test(this.state.unsavedName)
					}
					isUnsavedImageValid() {
						return null != this.state.unsavedImage && this.isUnsavedImageNameValid()
					}
					getImageTagByIndex(e) {
						const t = this.state.localData[e];
						if (!t) return "";
						const n = this.state.imageNamesById[t.id];
						return n ? `%%${n}%%` : ""
					}
					renderError(e) {
						return this.errors && this.errors[e] ? r.a.createElement(hr, null, this.errors[e]) : null
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Ja, null), r.a.createElement(cr, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "48e5IQ"
						})), r.a.createElement(Kt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(tn.a, {
							maxChars: tr,
							text: n.shortName
						}), this.renderError("short_name")), r.a.createElement(cr, null, r.a.createElement(Z.h, null, i.fbt._("Markdown", null, {
							hk: "rWPwa"
						})), r.a.createElement(dr, {
							value: n.text,
							onChange: this.handleTextChange,
							placeholder: i.fbt._("Markdown Content", null, {
								hk: "1dNGSZ"
							})
						}), r.a.createElement(tn.a, {
							maxChars: nr,
							text: n.text
						}), this.renderError("text")), r.a.createElement(cr, null, r.a.createElement(Z.h, null, i.fbt._("CSS", null, {
							hk: "3U4QvJ"
						})), r.a.createElement(dr, {
							value: n.css,
							onChange: this.handleCssChange,
							placeholder: i.fbt._("Css Styling", null, {
								hk: "hwb5A"
							}),
							autoCapitalize: "off",
							autoComplete: "off",
							autoCorrect: "off",
							spellCheck: !1
						}), r.a.createElement(tn.a, {
							maxChars: ar,
							text: n.css
						}), this.renderError("css")), r.a.createElement(cr, null, r.a.createElement(Z.h, null, i.fbt._("Height", null, {
							hk: "1DvI33"
						})), r.a.createElement(Kt.c, {
							placeholder: i.fbt._("PIXELS", null, {
								hk: "8zaKk"
							}),
							onChange: this.handleHeightChange,
							value: n.height ? n.height.toString() : ""
						}), n.height && !this.isHeightValid() ? r.a.createElement(hr, null, i.fbt._("Height must be between {min} and {max} pixels", [i.fbt._param("min", rr.toLocaleString()), i.fbt._param("max", sr.toLocaleString())], {
							hk: "4lHZCj"
						})) : r.a.createElement(mr, null, i.fbt._("Between {min} and {max} pixels", [i.fbt._param("min", rr.toLocaleString()), i.fbt._param("max", sr.toLocaleString())], {
							hk: "4FcOt1"
						})), this.renderError("height")), r.a.createElement(cr, null, r.a.createElement(Z.h, null, i.fbt._("Image", null, {
							hk: "QVluN"
						})), r.a.createElement(Z.g, null, `${t.localData.length}/${ir} ${i.fbt._("Images",null,{hk:"3Mu4Pg"})}`), t.localData.map((e, n) => r.a.createElement(Z.a, {
							key: e.id
						}, r.a.createElement(at.e, {
							imageData: e,
							onRemove: () => this.removeImage(n)
						}), r.a.createElement(mr, null, this.getImageTagByIndex(n), r.a.createElement(pr, {
							onClick: () => this.copyImageNameToClipboard(n)
						}, t.copiedImageIndex === n ? i.fbt._("copied!", null, {
							hk: "482rGm"
						}) : i.fbt._("copy", null, {
							hk: "CiHen"
						})))))), t.localData.length < ir && r.a.createElement(ur, null, r.a.createElement(cr, null, r.a.createElement(Z.a, null, null == t.unsavedImage ? r.a.createElement(Xe.b, {
							label: i.fbt._("Drag and Drop or Upload Image", null, {
								hk: "3VsEoT"
							}),
							onChange: this.handleImageInput
						}) : r.a.createElement(at.e, {
							imageData: t.unsavedImage,
							onRemove: () => this.removeImage(null)
						}), r.a.createElement(mr, null, i.fbt._(".jpeg or .png files up to 10 MB", null, {
							hk: "3JJDCb"
						})))), r.a.createElement(cr, null, r.a.createElement(Z.h, null, i.fbt._("Name of image", null, {
							hk: "QZ7Le"
						})), r.a.createElement(Z.a, null, r.a.createElement(Kt.c, {
							placeholder: i.fbt._("Required", null, {
								hk: "1PL06Q"
							}),
							value: t.unsavedName || "",
							onChange: this.handleUnsavedNameChange,
							maxLength: lr
						}), r.a.createElement(mr, null, i.fbt._("Names should be unique consisting of alphanumeric and ‘-’ only", null, {
							hk: "TV1Ev"
						})))), r.a.createElement(cr, null, r.a.createElement(un, {
							applyText: i.fbt._("Add", null, {
								hk: "2wi3d4"
							}),
							cancelText: i.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							invalid: !this.isUnsavedImageValid(),
							onApply: this.handleAddUnsavedImageData,
							onCancel: this.handleClearUnsavedImageData
						}))), this.hasApiErrors() && r.a.createElement(cr, null, r.a.createElement(hr, null, i.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(cr, null, r.a.createElement(h.a, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(cr, null, r.a.createElement(h.c, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				}, $t.a),
				br = n("./src/reddit/contexts/PageLayer/index.tsx"),
				fr = n("./src/reddit/icons/svgs/OutboundLink/index.tsx");
			var Er = class extends ca {
					getInitialState(e) {
						return {
							widget: e
						}
					}
				},
				xr = n("./src/reddit/components/IdCard/index.m.less"),
				vr = n.n(xr),
				_r = n("./src/reddit/components/StructuredStyles/Forms/IdCardWidgetEditor/index.m.less"),
				Cr = n.n(_r);
			const yr = 30,
				kr = e => r.a.createElement(p.b, {
					className: Object(ue.a)(Cr.a.NavLink, e.className)
				}, r.a.createElement("a", {
					href: e.url,
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.a.createElement(v.a, null, e.title, r.a.createElement(fr.a, {
					className: Object(ue.a)(Cr.a.OutboundLinkIcon, e.className)
				}))));
			var Sr = Object(br.u)()(Object(o.b)(() => Object(c.c)({
				subreddit: br.r
			}))(class extends Er {
				constructor() {
					super(...arguments), this.handleSubscribersTextChange = e => {
						const t = e.currentTarget.value;
						this.setWidgetState({
							subscribersText: t
						})
					}, this.handleCurrentlyViewingTextChange = e => {
						const t = e.currentTarget.value;
						this.setWidgetState({
							currentlyViewingText: t
						})
					}
				}
				isValidWidget() {
					const {
						widget: e
					} = this.state;
					return !(e.currentlyViewingText.length > yr) && !(e.subscribersText.length > yr)
				}
				render() {
					const {
						props: e
					} = this, {
						widget: t
					} = this.state;
					return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Joined community", null, {
						hk: "3fEZvt"
					})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Members", null, {
							hk: "dKX5k"
						}),
						onChange: this.handleSubscribersTextChange,
						value: t.subscribersText
					}), r.a.createElement(tn.a, {
						text: t.subscribersText,
						maxChars: yr
					})), r.a.createElement(Z.h, null, i.fbt._("Currently viewing community", null, {
						hk: "4hOBbP"
					})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Online", null, {
							hk: "3rgbxH"
						}),
						onChange: this.handleCurrentlyViewingTextChange,
						value: t.currentlyViewingText
					}), r.a.createElement(tn.a, {
						text: t.currentlyViewingText,
						maxChars: yr
					}))), r.a.createElement(Z.h, null, i.fbt._("Community Description", null, {
						hk: "30o9mQ"
					})), r.a.createElement("div", {
						className: Object(ue.a)(Cr.a.Description, vr.a.Description)
					}, t.description), r.a.createElement(Z.h, null, r.a.createElement(kr, {
						title: i.fbt._("Edit Community Description", null, {
							hk: "2XvsrF"
						}),
						url: e.subreddit ? `https://reddit.com/r/${e.subreddit.name}/about/edit/` : "",
						"data-redditstyle": !0
					})), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
						hk: "3OW5jo"
					}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
						disabled: !this.isValidWidget() || this.isRequestInProgress(),
						onClick: this.handleSaveWidget,
						"data-redditstyle": !0
					}, i.fbt._("Save", null, {
						hk: "4yMsMq"
					})), r.a.createElement(h.d, {
						onClick: this.handleCancelEditing,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}
			}));
			class Ir extends r.a.Component {
				constructor(e) {
					super(e), this.handleLinkChange = e => {
						const t = e.currentTarget.value;
						this.setState(e => ({
							linkUrl: t
						})), this.validate(t), this.props.onHandleLinkChange(this.props.imageIndex, t, this.urlValidation)
					}, this.state = {
						linkUrl: e.linkUrl || ""
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.linkUrl !== this.props.linkUrl && this.setState({
						linkUrl: e.linkUrl || ""
					})
				}
				validate(e) {
					this.urlValidation = e ? Kn(e) : null
				}
				render() {
					const {
						state: e
					} = this;
					return r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						onChange: this.handleLinkChange,
						placeholder: i.fbt._("Link URL", null, {
							hk: "3GuyMx"
						}),
						value: e.linkUrl
					}), this.urlValidation === Hn.Invalid && r.a.createElement(Z.c, null, i.fbt._("The link provided is invalid", null, {
						hk: "2g9TvW"
					})), this.urlValidation === Hn.TooShort && r.a.createElement(Z.c, null, i.fbt._("The link provided is too short", null, {
						hk: "2fEWI1"
					})))
				}
			}
			var wr = Ir,
				Dr = n("./src/reddit/components/StructuredStyles/Forms/ImageWidgetEditor/ImagesList.m.less"),
				Tr = n.n(Dr);
			const Or = s.a.wrapped(at.e, "UploadedImage", Tr.a);
			var jr = e => r.a.createElement("div", null, e.imageData.map((t, n) => r.a.createElement(r.a.Fragment, {
				key: t.id
			}, r.a.createElement(Or, {
				imageData: t,
				isRequestInProgress: e.isRequestInProgress,
				onRemove: () => e.onRemove(n)
			}), r.a.createElement(wr, {
				imageIndex: n,
				onHandleLinkChange: e.onHandleLinkChange,
				linkUrl: e.imageLinkUrls[t.id]
			}))));
			const Fr = 10,
				Ar = 30;
			var Pr = Object(Xn.a)(class extends Xa {
					constructor() {
						super(...arguments), this.handleTitleChange = e => {
							const t = e.currentTarget.value;
							this.setWidgetState({
								shortName: t
							})
						}, this.handleSingleImageInput = async e => {
							if (this.state.localData.length >= Fr) return;
							const t = await Object(rt.e)(e);
							this.props.uploadImage({
								imageData: t
							}), this.setState(e => ({
								localData: [...e.localData, t]
							}))
						}, this.handleMultiImageInput = e => {
							let t = e;
							e.length + this.state.localData.length > Fr && (t = e.slice(0, Fr - this.state.localData.length));
							for (const n of t) this.handleSingleImageInput(n)
						}, this.removeImage = e => {
							const t = [...this.state.localData],
								n = t.splice(e, 1)[0];
							this.props.cancelUpload(n), this.setState(e => ({
								localData: t
							}))
						}, this.handleLinkChange = (e, t, n) => {
							const a = this.state.localData[e],
								r = {
									...this.state.localImageLinkUrls,
									[a.id]: t
								};
							this.setState(e => ({
								localImageLinkUrls: r,
								urlValidationError: n
							}))
						}
					}
					componentWillUnmount() {
						super.componentWillUnmount(), this.state.localData.forEach(this.props.cancelUpload)
					}
					componentWillReceiveProps(e) {
						super.componentWillReceiveProps(e);
						const t = e.getImageUploadsIfModified(this.state.localData);
						t && this.setState(e => ({
							localData: t
						}))
					}
					getInitialState(e) {
						const t = {
							urlValidationError: null,
							localData: [],
							localImageLinkUrls: {}
						};
						for (const n of e.data) {
							const e = Object(rt.g)(n);
							t.localData.push(e), t.localImageLinkUrls[e.id] = n.linkUrl
						}
						return {
							widget: e,
							...t
						}
					}
					getWidgetFromState() {
						const {
							id: e,
							shortName: t,
							kind: n
						} = this.state.widget;
						return {
							id: e,
							shortName: t,
							data: this.state.localData.filter(rt.h).map(e => {
								let t = this.state.localImageLinkUrls[e.id];
								return t && !t.includes(":") && (t = `http://${t}`), {
									url: e.url,
									height: e.height,
									width: e.width,
									linkUrl: t
								}
							}),
							kind: n
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !!e.shortName.trim().length && (!(e.shortName.length > Ar) && (!!this.state.localData.length && (!this.state.localData.some(e => !Object(rt.h)(e)) && !this.state.urlValidationError)))
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.f, null, r.a.createElement(Z.a, null, r.a.createElement(Z.g, null, i.fbt._("Uploading multiple images to this widget will load a random image on each page refresh.", null, {
							hk: "157MBS"
						}))), r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "3Ka9sg"
						})), r.a.createElement(Z.g, null, i.fbt._("The title of your widget and background styles will not appear in the sidebar.", null, {
							hk: "1wSGS2"
						})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
							placeholder: i.fbt._("WIDGET TITLE", null, {
								hk: "3EvX03"
							}),
							onChange: this.handleTitleChange,
							value: n.shortName
						}), r.a.createElement(tn.a, {
							text: n.shortName,
							maxChars: Ar
						}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Image", null, {
							hk: "3mDsg3"
						})), r.a.createElement(Z.g, null, `${t.localData.length}/${Fr} ${i.fbt._("Images",null,{hk:"3Mu4Pg"})}`), r.a.createElement(jr, {
							isRequestInProgress: this.isRequestInProgress(),
							imageData: t.localData,
							imageLinkUrls: t.localImageLinkUrls,
							onHandleLinkChange: this.handleLinkChange,
							onRemove: this.removeImage
						}), t.localData.length < Fr && r.a.createElement(Xe.b, {
							label: i.fbt._("Drag and Drop or Upload Image", null, {
								hk: "Ru1kh"
							}),
							onChange: this.handleMultiImageInput,
							multiple: !0
						})), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))), e.widget.id && r.a.createElement(Z.f, null, r.a.createElement(h.c, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				}, $t.a),
				Nr = n("./node_modules/lodash/noop.js"),
				Rr = n.n(Nr),
				Br = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemLabel.m.less"),
				Lr = n.n(Br);
			const Wr = s.a.wrapped(Z.e, "TextDisplay", Lr.a),
				Mr = s.a.div("UrlDisplay", Lr.a);
			var Ur = e => r.a.createElement("div", null, r.a.createElement(Wr, null, e.text), r.a.createElement(Mr, null, e.url)),
				qr = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemList.m.less"),
				zr = n.n(qr);
			const Vr = s.a.div("Container", zr.a),
				Hr = s.a.wrapped(Z.i, "FormItem", zr.a);
			var Kr = e => r.a.createElement(Vr, null, e.menuItems.map((e, t) => r.a.createElement(Hr, {
					key: t
				}, r.a.createElement(Ur, {
					text: e.text,
					url: e.url
				})))),
				Gr = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MainMenuContent.m.less"),
				Zr = n.n(Gr);
			const Qr = "wikiMenuItemToggle",
				Yr = "/wiki/index",
				Jr = s.a.wrapped(h.h, "ToggleInput", Zr.a),
				Xr = s.a.wrapped(p.b, "ToggleRow", Zr.a),
				$r = 5;
			class es extends r.a.Component {
				constructor(e) {
					super(e), this.handleAdd = e => this.props.onAdd(), this.handleStartReorder = e => this.setState(e => ({
						reordering: !0,
						draftSort: [...this.props.widget.data]
					})), this.applyReorder = () => {
						this.props.onSave({
							...this.props.widget,
							data: this.state.draftSort
						}), this.setState(e => ({
							reordering: !1
						}))
					}, this.cancelReorder = () => this.setState(e => ({
						reordering: !1
					})), this.editMenuItem = e => this.props.onEdit(e), this.reorderDraft = (e, t, n) => this.setState(e => ({
						draftSort: n
					})), this.toggleWiki = () => {
						const e = !this.props.widget.showWiki;
						this.props.onSave({
							...this.props.widget,
							showWiki: e
						}), this.props.sendEvent(Object(x.k)(e))
					}, this.state = {
						reordering: !1,
						draftSort: []
					}
				}
				render() {
					const {
						state: e
					} = this;
					return e.reordering ? this.renderReorderingContent() : this.renderDefaultContent()
				}
				renderDefaultContent() {
					const {
						props: e
					} = this;
					return r.a.createElement(Z.k, {
						key: "default-content"
					}, r.a.createElement(Rn, e), r.a.createElement(Jt.c, null, i.fbt._("These community styling options will also display in Reddit apps.", null, {
						hk: "2gl4Jd"
					})), r.a.createElement(Z.f, null, r.a.createElement(p.b, {
						disabled: !0
					}, i.fbt._("Posts", null, {
						hk: "rLU2h"
					})), r.a.createElement(Xr, {
						onClick: this.toggleWiki
					}, r.a.createElement(v.a, null, r.a.createElement(Ra.a, null, r.a.createElement(Ur, {
						text: i.fbt._("Wiki", null, {
							hk: "2s4Mqc"
						}),
						url: Yr
					})), r.a.createElement(Ra.a, null, r.a.createElement(Jr, {
						name: Qr,
						offValue: "false",
						onChange: Rr.a,
						onValue: "true",
						redditStyle: !0,
						selected: e.widget.showWiki
					})))), e.widget.data.map((e, t) => r.a.createElement(fn, {
						key: e.text,
						onClick: () => this.editMenuItem(t)
					}, r.a.createElement(Ur, {
						text: e.text,
						url: e.url
					}), e.children && r.a.createElement(Kr, {
						menuItems: e.children
					})))), r.a.createElement(Z.f, null, r.a.createElement(h.f, {
						"data-redditstyle": !0,
						onClick: this.handleAdd,
						disabled: e.widget.data.length >= $r
					}, i.fbt._("Create New Tab", null, {
						hk: "3niCXS"
					})), r.a.createElement(h.f, {
						"data-redditstyle": !0,
						onClick: this.handleStartReorder,
						disabled: e.widget.data.length < 2
					}, i.fbt._("Reorder Links", null, {
						hk: "3DHcK2"
					}))))
				}
				renderReorderingContent() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(Z.k, {
						key: "reorder-form"
					}, r.a.createElement(Rn, e), r.a.createElement(p.b, {
						disabled: !0
					}, i.fbt._("Posts", null, {
						hk: "rLU2h"
					})), r.a.createElement(Bn.a, {
						values: t.draftSort,
						render: (e, t, n, a, s) => r.a.createElement(mn.a, {
							isDragging: n,
							isOver: a,
							canDrop: s
						}, e.text),
						onDrop: this.reorderDraft
					}), r.a.createElement(Z.f, null, r.a.createElement(un, {
						applyText: i.fbt._("Apply", null, {
							hk: "3YBqpU"
						}),
						cancelText: i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						onApply: this.applyReorder,
						onCancel: this.cancelReorder
					})))
				}
			}
			var ts = es;
			class ns extends r.a.Component {
				constructor(e) {
					super(e), this.handleMenuItemTextChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange(t, this.state.menuItemUrl), this.setState({
							menuItemText: t
						})
					}, this.handleMenuItemUrlChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange(this.state.menuItemText, t), this.setState({
							menuItemUrl: t
						})
					}, this.clearState = () => this.setState({
						menuItemText: "",
						menuItemUrl: ""
					}), this.handleApply = () => {
						const {
							state: e
						} = this;
						this.props.onApply(e.menuItemText, e.menuItemUrl), this.clearState()
					}, this.handleCancel = () => {
						this.props.onCancel(), this.clearState()
					}, this.handleDelete = () => {
						this.props.onDelete(), this.clearState()
					}, this.state = {
						menuItemText: e.text || "",
						menuItemUrl: e.url || ""
					}, this.validate(this.state)
				}
				validate(e) {
					this.isALinkForm ? (this.urlValidation = Kn(e.menuItemUrl), this.textValidation = Qn(e.menuItemText.trim())) : this.textValidation = Qn(e.menuItemText.trim())
				}
				get hasAnyButtons() {
					const {
						props: e
					} = this;
					return !!(e.onApply || e.onCancel || e.onDelete)
				}
				get isALinkForm() {
					return !!this.props.showUrlField
				}
				get isValid() {
					return this.isALinkForm ? this.textValidation === Zn.Valid && this.urlValidation === Hn.Valid : this.textValidation === Zn.Valid
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return this.validate(t), r.a.createElement("div", null, r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						disabled: e.disabled,
						value: t.menuItemText,
						onChange: this.handleMenuItemTextChange,
						placeholder: i.fbt._("Tab Title", null, {
							hk: "15DNN5"
						})
					}), r.a.createElement(tn.a, {
						text: t.menuItemText.trim(),
						maxChars: Gn
					})), this.isALinkForm && r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						disabled: e.disabled,
						value: t.menuItemUrl,
						onChange: this.handleMenuItemUrlChange,
						placeholder: i.fbt._("URL", null, {
							hk: "4laiIR"
						})
					}), this.urlValidation === Hn.Invalid && r.a.createElement(Z.c, null, i.fbt._("The link provided is invalid", null, {
						hk: "2PaAmp"
					}))), this.hasAnyButtons && r.a.createElement(Z.i, null, r.a.createElement(un, {
						applyText: i.fbt._("Apply", null, {
							hk: "3mAjVQ"
						}),
						cancelText: i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						disabled: e.disabled,
						invalid: !this.isValid,
						onApply: e.onApply && this.handleApply,
						onCancel: e.onCancel && this.handleCancel,
						onDelete: e.onDelete && this.handleDelete
					})))
				}
			}
			var as = ns,
				rs = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/ContentTypeOption.m.less"),
				ss = n.n(rs);
			const is = s.a.wrapped(Ra.a, "Inline", ss.a);
			var ls = e => r.a.createElement(Z.a, null, r.a.createElement(is, {
				className: Object(ue.a)({
					[ss.a.disabled]: e.disabled
				}),
				onClick: e.disabled ? void 0 : e.onClick
			}, e.selected ? r.a.createElement(Kt.f, null) : r.a.createElement(Kt.e, null), r.a.createElement(Z.e, null, e.children)));
			const os = 10;
			var ds;
			! function(e) {
				e[e.None = 0] = "None", e[e.Link = 1] = "Link", e[e.Submenu = 2] = "Submenu"
			}(ds || (ds = {}));
			const cs = e => "url" in e ? ds.Link : ds.Submenu;
			class us extends r.a.Component {
				constructor(e) {
					super(e), this.setFormSelectionToLink = () => this.setState({
						formSelection: ds.Link
					}), this.setFormSelectionToTab = () => this.setState({
						formSelection: ds.Submenu
					}), this.updateContent = (e, t) => {
						this.setState({
							menuItemText: e,
							menuItemUrl: t
						}), this.isALinkForm ? this.props.onUpdate({
							text: e,
							url: t
						}) : this.props.onUpdate({
							text: e,
							children: this.state.menuItemChildren
						})
					}, this.addNewMenuItem = (e, t) => {
						const n = {
								text: e,
								url: t
							},
							a = [...this.state.menuItemChildren, n];
						this.setState({
							menuItemChildren: a
						}), this.isASubmenuForm && this.props.onUpdate({
							text: this.state.menuItemText,
							children: a
						})
					}, this.openNewSubmenuLinkEditor = () => this.setState({
						isNewSubmenuEditorOpen: !0,
						isEditSubmenuEditorOpen: !1
					}), this.closeNewSubmenuLinkEditor = () => this.setState({
						isNewSubmenuEditorOpen: !1
					}), this.openEditSubmenuEditorAtIndex = e => () => this.setState({
						editingIndex: e,
						isNewSubmenuEditorOpen: !1,
						isEditSubmenuEditorOpen: !0
					}), this.applyChildEditAtIndex = e => (t, n) => {
						this.setState(a => {
							const r = [...a.menuItemChildren];
							return r[e] = {
								text: t,
								url: n
							}, this.props.onUpdate({
								text: a.menuItemText,
								children: r
							}), {
								menuItemChildren: r,
								isEditSubmenuEditorOpen: !1
							}
						})
					}, this.closeEditSubmenuEditor = () => this.setState({
						isEditSubmenuEditorOpen: !1
					}), this.deleteChildContentAtIndex = e => () => {
						this.setState(t => {
							const n = [...t.menuItemChildren];
							return n.splice(e, 1), this.props.onUpdate({
								text: t.menuItemText,
								children: n
							}), {
								menuItemChildren: n,
								isEditSubmenuEditorOpen: !1
							}
						})
					}, this.handleSave = () => {
						const {
							props: e,
							state: t
						} = this;
						switch (t.formSelection) {
							case ds.Link:
								return e.sendEvent(Object(x.f)("menu_links_top_save")), e.onSave({
									text: t.menuItemText,
									url: t.menuItemUrl
								});
							case ds.Submenu:
								return e.sendEvent(Object(x.f)("menu_links_sub_save")), e.onSave({
									text: t.menuItemText,
									children: t.menuItemChildren
								})
						}
					}, this.handleCancel = () => this.props.stopEditing(), this.handleDelete = e => this.props.onDelete && this.props.onDelete(), this.startReorderingChildren = () => this.setState(e => ({
						draftChildren: [...e.menuItemChildren],
						reordering: !0
					})), this.applyReorder = () => this.setState(e => ({
						menuItemChildren: e.draftChildren,
						reordering: !1
					})), this.cancelReorder = () => this.setState({
						reordering: !1
					}), this.reorderDraft = (e, t, n) => this.setState({
						draftChildren: n
					}), this.state = {
						draftChildren: [],
						editingIndex: 0,
						formSelection: this.isANewMenuItemForm ? ds.None : cs(e.editingItem),
						menuItemText: e.editingItem ? e.editingItem.text : "",
						menuItemUrl: e.editingItem ? e.editingItem.url : "",
						menuItemChildren: e.editingItem && e.editingItem.children || [],
						isNewSubmenuEditorOpen: this.isANewMenuItemForm,
						isEditSubmenuEditorOpen: !1,
						reordering: !1
					}, this.validate(this.state)
				}
				validate(e) {
					this.isALinkForm ? (this.urlValidation = Kn(e.menuItemUrl), this.textValidation = Qn(e.menuItemText)) : this.isASubmenuForm && (this.textValidation = Qn(e.menuItemText), this.childrenValidation = Jn(e.menuItemChildren))
				}
				get isANewMenuItemForm() {
					return !this.props.editingItem
				}
				get isALinkForm() {
					return this.state.formSelection === ds.Link
				}
				get isASubmenuForm() {
					return this.state.formSelection === ds.Submenu
				}
				get isEditing() {
					return this.state.reordering || this.state.isEditSubmenuEditorOpen
				}
				get isValid() {
					return this.isALinkForm ? this.textValidation === Zn.Valid && this.urlValidation === Hn.Valid : !!this.isASubmenuForm && (this.childrenValidation === Yn.Valid && this.textValidation === Zn.Valid)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return this.validate(t), r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, this.isANewMenuItemForm ? i.fbt._("Tab type", null, {
						hk: "274wIj"
					}) : this.isALinkForm ? i.fbt._("Link Tab", null, {
						hk: "19Feoy"
					}) : i.fbt._("Submenu Tab", null, {
						hk: "2kX9s8"
					})), "numRemaining" in e && r.a.createElement(Z.g, null, i.fbt._("Remaining Tabs: {numRemainig}", [i.fbt._param("numRemainig", (e.numRemaining || 0).toLocaleString())], {
						hk: "3hiwvD"
					})), this.isANewMenuItemForm && r.a.createElement(ls, {
						disabled: this.isEditing,
						selected: t.formSelection === ds.Link,
						onClick: this.setFormSelectionToLink
					}, i.fbt._("Create link tab", null, {
						hk: "30Id6K"
					})), this.isALinkForm && r.a.createElement(as, {
						disabled: this.isEditing,
						onChange: this.updateContent,
						text: t.menuItemText,
						url: t.menuItemUrl,
						showUrlField: !0
					}), this.isANewMenuItemForm && r.a.createElement(ls, {
						disabled: this.isEditing,
						selected: t.formSelection === ds.Submenu,
						onClick: this.setFormSelectionToTab
					}, i.fbt._("Create submenu tab", null, {
						hk: "2daEB9"
					})), this.isASubmenuForm && r.a.createElement(as, {
						disabled: this.isEditing,
						text: t.menuItemText,
						onChange: this.updateContent
					})), this.isASubmenuForm && r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Submenu Links", null, {
						hk: "4o5RVv"
					})), r.a.createElement(Z.g, null, i.fbt._("Remaining Links : {numLinks}", [i.fbt._param("numLinks", (os - t.menuItemChildren.length).toLocaleString())], {
						hk: "3uF6sz"
					})), t.reordering ? this.renderSortableChildren() : this.renderEditableChildren(), this.renderNewSubmenuLinkEditor(), !this.isANewMenuItemForm && t.menuItemChildren.length > 1 && r.a.createElement(h.f, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.startReorderingChildren
					}, i.fbt._("Reorder Submenu Links", null, {
						hk: "3lTd5l"
					}))), this.renderErrors(), r.a.createElement(Z.f, null, r.a.createElement(un, {
						applyText: i.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						cancelText: i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						disabled: this.isEditing,
						invalid: !this.isValid,
						onApply: this.handleSave,
						onCancel: this.handleCancel
					}), !this.isANewMenuItemForm && e.onDelete && r.a.createElement(h.c, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.handleDelete
					}, i.fbt._("Delete Tab", null, {
						hk: "VhZUI"
					}))))
				}
				renderErrors() {
					const {
						apiState: e
					} = this.props;
					if (!e || e.apiRequestStatus !== wt.a.Failed) return;
					const {
						apiError: t
					} = e;
					return t.fields && t.fields.length ? r.a.createElement(a.Fragment, null, t.fields.map(e => r.a.createElement(Z.c, {
						key: e.field
					}, e.msg))) : r.a.createElement(Z.c, null, t.type)
				}
				renderEditableChildren() {
					const {
						state: e
					} = this;
					return e.menuItemChildren.map((t, n) => e.isEditSubmenuEditorOpen && e.editingIndex === n ? r.a.createElement(Z.i, null, r.a.createElement(h.e, null, i.fbt._("Edit Submenu Link", null, {
						hk: "2fjDOP"
					})), r.a.createElement(as, {
						onApply: this.applyChildEditAtIndex(n),
						onCancel: this.closeEditSubmenuEditor,
						onDelete: this.deleteChildContentAtIndex(n),
						showUrlField: !0,
						text: t.text,
						url: t.url
					})) : r.a.createElement(fn, {
						onClick: this.openEditSubmenuEditorAtIndex(n),
						disabled: e.isEditSubmenuEditorOpen
					}, r.a.createElement(Ur, {
						text: t.text,
						url: t.url
					})))
				}
				renderSortableChildren() {
					const {
						state: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(Bn.a, {
						values: e.draftChildren,
						render: (e, t, n, a, s) => r.a.createElement(mn.a, {
							isDragging: n,
							isOver: a,
							canDrop: s
						}, e.text),
						onDrop: this.reorderDraft
					}), r.a.createElement(Z.f, null, r.a.createElement(un, {
						applyText: i.fbt._("Apply", null, {
							hk: "2UugCc"
						}),
						cancelText: i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						onApply: this.applyReorder,
						onCancel: this.cancelReorder
					})))
				}
				renderNewSubmenuLinkEditor() {
					const {
						state: e
					} = this;
					if (!(e.menuItemChildren.length >= os || this.isEditing)) return 0 === e.menuItemChildren.length ? r.a.createElement(Z.i, null, r.a.createElement(as, {
						disabled: this.isEditing,
						onApply: this.addNewMenuItem,
						showUrlField: !0
					})) : e.isNewSubmenuEditorOpen ? r.a.createElement(Z.i, null, r.a.createElement(h.e, null, i.fbt._("Add Submenu Link", null, {
						hk: "2np0tD"
					})), r.a.createElement(as, {
						disabled: this.isEditing,
						onApply: this.addNewMenuItem,
						onCancel: this.closeNewSubmenuLinkEditor,
						showUrlField: !0
					})) : r.a.createElement(Z.i, null, r.a.createElement(h.f, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.openNewSubmenuLinkEditor
					}, i.fbt._("Add Submenu Link", null, {
						hk: "1WNaBy"
					})))
				}
			}
			var ms = Object(g.c)(us);

			function hs() {
				return (hs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ps = 5;
			var gs;
			! function(e) {
				e[e.None = 0] = "None", e[e.Edit = 1] = "Edit", e[e.Add = 2] = "Add"
			}(gs || (gs = {}));
			const bs = e => ({
				relativePosition: 0,
				title: e
			});
			var fs = Object(g.c)(class extends Xa {
				constructor() {
					super(...arguments), this.goToAddMenuContent = () => this.setState(e => ({
						editMode: gs.Add
					})), this.goToEditMenuContent = e => this.setState(t => ({
						editMode: gs.Edit,
						editIndex: e
					})), this.returnToMainMenu = () => {
						this.setState(e => ({
							editMode: gs.None,
							editIndex: -1
						})), oa()(this.props.widget, this.state.widget) || this.setWidgetState({
							...this.props.widget
						}), this.props.undirtyEditor(), this.props.closeModal()
					}, this.saveMenuWidget = e => {
						this.startApiRequestThen(t => {
							!e.id || e.data.length || e.showWiki ? this.props.saveChanges(e, t) : this.props.deleteWidget(e, t), this.setWidgetState(e)
						})
					}, this.saveUpdatedMenuWidget = () => {
						const e = [...this.state.widget.data];
						this.saveMenuWidget(this.getUpdatedWidget({
							data: e
						}))
					}, this.editMenuItemAtCurrentIndex = e => {
						if (this.state.editIndex < 0) return;
						const t = [...this.state.widget.data];
						t[this.state.editIndex] = e, this.saveMenuWidget(this.getUpdatedWidget({
							data: t
						}))
					}, this.deleteMenuItemAtCurrentIndex = () => {
						if (this.state.editIndex < 0) return;
						const e = [...this.state.widget.data];
						e.splice(this.state.editIndex, 1), this.saveMenuWidget(this.getUpdatedWidget({
							data: e
						}))
					}, this.handleUpdate = e => {
						const t = this.state.editIndex >= 0 ? this.state.editIndex : this.props.widget.data.length,
							n = [...this.state.widget.data];
						n[t] = e, this.setWidgetState({
							data: n
						})
					}
				}
				afterApiRequestCompleted() {
					this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId), this.returnToMainMenu()
				}
				getInitialState(e) {
					return {
						widget: e,
						editMode: gs.None,
						editIndex: -1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getApiRequestFromProps(e);
					switch (t.editMode) {
						case gs.None:
							return r.a.createElement(ts, hs({}, e, {
								onAdd: this.goToAddMenuContent,
								onEdit: this.goToEditMenuContent,
								onSave: this.saveMenuWidget,
								onUpdate: this.handleUpdate
							}));
						case gs.Edit:
							return r.a.createElement(ms, hs({}, e, {
								apiState: n,
								breadcrumbs: [bs(e.title)],
								editingItem: e.widget.data[t.editIndex],
								onDelete: this.deleteMenuItemAtCurrentIndex,
								onSave: this.editMenuItemAtCurrentIndex,
								onUpdate: this.handleUpdate,
								stopEditing: this.returnToMainMenu,
								title: i.fbt._("Edit Tab", null, {
									hk: "41sQC6"
								})
							}));
						case gs.Add:
							return r.a.createElement(ms, hs({}, e, {
								apiState: n,
								breadcrumbs: [bs(e.title)],
								numRemaining: ps - e.widget.data.length,
								onSave: this.saveUpdatedMenuWidget,
								onUpdate: this.handleUpdate,
								stopEditing: this.returnToMainMenu,
								title: i.fbt._("Create New Tab", null, {
									hk: "1uVGNP"
								})
							}))
					}
				}
			});
			var Es = class extends Sa {
					constructor() {
						super(...arguments), this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					isValidWidget() {
						return !0
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(jn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						}), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							onClick: this.handleSaveWidget,
							disabled: !this.isValidWidget() || this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}))))
					}
				},
				xs = n("./src/reddit/selectors/postFlair.ts"),
				vs = n("./src/higherOrderComponents/asTooltip.tsx"),
				_s = n("./src/reddit/components/Flair/index.tsx"),
				Cs = n("./src/reddit/helpers/flair.ts"),
				ys = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/FlairTemplateItem.m.less"),
				ks = n.n(ys);
			const Ss = s.a.wrapped(_s.b, "FlairComponent", ks.a);
			var Is = e => {
					const t = Object(Cs.c)(e.flairTemplate);
					return r.a.createElement(Ra.a, null, r.a.createElement(Ss, {
						flair: t,
						forceSmallEmojis: !0
					}))
				},
				ws = n("./src/reddit/constants/keycodes.ts"),
				Ds = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ts = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Os = n("./src/reddit/controls/SearchBar/index.tsx"),
				js = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Fs = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				As = n("./src/reddit/models/Flair/index.ts"),
				Ps = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairPickerDropdown.m.less"),
				Ns = n.n(Ps);
			const Rs = "PostFlairWidget--FlairPicker",
				Bs = Object(c.c)({
					isOpen: Object(gt.b)(Rs)
				}),
				Ls = Object(o.b)(Bs, e => ({
					onOpenDropdown: () => {
						e(Object(ot.h)({
							tooltipId: Rs
						}))
					}
				})),
				Ws = s.a.wrapped(Ds.a, "StyledDropdown", Ns.a),
				Ms = s.a.wrapped(js.b, "DropdownTriangle", Ns.a),
				Us = Object(vs.a)(Ws),
				qs = s.a.wrapped(Fs.a, "InlineButton", Ns.a),
				zs = s.a.div("DropdownContainer", Ns.a),
				Vs = s.a.div("SearchBarContainer", Ns.a),
				Hs = s.a.wrapped(Ts.b, "Row", Ns.a),
				Ks = s.a.wrapped(Is, "FlairTemplateItem", Ns.a);
			class Gs extends r.a.Component {
				constructor(e) {
					super(e), this.searchRef = null, this.handleFlairSelection = (e, t, n) => {
						e || (this.setState({
							selectedFlairText: n,
							search: ""
						}), this.props.handleSelectFlair(t))
					}, this.handleKeyDown = e => {
						e.stopPropagation(), e.which === ws.a.Escape && e.preventDefault()
					}, this.onTextChange = e => {
						!this.props.isOpen && this.props.onOpenDropdown();
						const t = e.currentTarget.value;
						"" !== t && this.flairTexts.includes(t.toLowerCase()) ? this.setState({
							search: t
						}) : (this.setState({
							selectedFlairText: "",
							search: t
						}), this.props.handleSelectFlair(""))
					}, this.onOpenDropdown = e => {
						this.props.onOpenDropdown(), this.searchRef && this.searchRef.focus()
					}, this.setSearchRef = e => this.searchRef = e, this.filteredPostFlair = {}, this.flairTexts = Object.keys(e.postFlairData.templates).map(t => e.postFlairData.templates[t].text.toLowerCase()), this.state = {
						search: "",
						selectedFlairText: ""
					}, this.updateFilteredPostFlair(this.state)
				}
				componentWillUpdate(e, t) {
					t.search !== this.state.search && this.updateFilteredPostFlair(t)
				}
				updateFilteredPostFlair(e) {
					e.search || (this.filteredPostFlair = this.props.postFlairData.templates);
					const t = e.search.toLowerCase();
					let n;
					n = this.filteredPostFlair, this.filteredPostFlair = Object.keys(n).filter(e => -1 !== n[e].text.toLowerCase().indexOf(t)).reduce((e, t) => ({
						...e,
						[t]: n[t]
					}), {})
				}
				render() {
					const {
						state: e
					} = this, {
						className: t,
						isOpen: n,
						widget: a
					} = this.props, s = document.getElementById(dt.a);
					return r.a.createElement(zs, {
						className: t,
						id: Rs,
						onKeyDown: this.handleKeyDown
					}, r.a.createElement(qs, {
						"aria-expanded": n,
						"aria-haspopup": !0,
						className: Object(ue.a)(t, {
							"dropdown-open": n
						}),
						onClick: this.onOpenDropdown
					}, r.a.createElement(Vs, null, r.a.createElement(Os.a, {
						autoFocus: !0,
						onTextChange: this.onTextChange,
						placeholder: i.fbt._("Search flair", null, {
							hk: "2Y1dbr"
						}),
						innerRef: this.setSearchRef,
						value: e.search || e.selectedFlairText
					})), r.a.createElement(Ms, null)), r.a.createElement(Us, {
						isOpen: n,
						tooltipId: Rs,
						noFocus: !0,
						container: s
					}, Object.keys(this.filteredPostFlair).map(e => {
						const t = a.order.includes(e);
						return r.a.createElement(Hs, {
							className: Object(ue.a)({
								[Ns.a.disabled]: t
							}),
							key: this.filteredPostFlair[e].id,
							noIcon: !0,
							onClick: () => this.handleFlairSelection(t, this.filteredPostFlair[e].id, this.filteredPostFlair[e].text),
							"data-redditstyle": !0
						}, r.a.createElement(Ks, {
							flairTemplate: this.filteredPostFlair[e],
							flairTemplateType: As.d.LinkFlair
						}))
					})))
				}
			}
			var Zs = Ls(Gs),
				Qs = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/AddFlair.m.less"),
				Ys = n.n(Qs);
			const Js = s.a.wrapped(Ra.a, "ControlRow", Ys.a);
			class Xs extends r.a.Component {
				constructor(e) {
					super(e), this.isValidForm = () => !!this.state.selectedFlair, this.handleSelectFlair = e => this.setState({
						selectedFlair: e
					}), this.handleSaveFlair = () => this.props.handleSaveFlair(this.state.selectedFlair), this.state = {
						selectedFlair: ""
					}
				}
				render() {
					const {
						handleCancelFromSubMenu: e,
						postFlairData: t,
						widget: n
					} = this.props;
					return r.a.createElement(Z.k, null, r.a.createElement(Rn, this.props), r.a.createElement(Js, null, r.a.createElement(Zs, {
						handleSelectFlair: this.handleSelectFlair,
						postFlairData: t,
						widget: n
					})), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
						disabled: !this.isValidForm(),
						onClick: this.handleSaveFlair,
						"data-redditstyle": !0
					}, i.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})), r.a.createElement(h.d, {
						onClick: e,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}
			}
			var $s = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairList.m.less"),
				ei = n.n($s);
			const ti = s.a.div("FlairContainer", ei.a),
				ni = s.a.wrapped(Fs.a, "InlineButton", ei.a),
				ai = s.a.wrapped(nn.a, "TrashIcon", ei.a),
				ri = s.a.div("FlairWrapper", ei.a);

			function si(e) {
				const {
					flairTemplates: t,
					handleRemoveFlair: n,
					order: a
				} = e;
				return r.a.createElement(ti, null, a.map(e => r.a.createElement(ri, null, r.a.createElement(Is, {
					flairTemplate: t[e],
					flairTemplateType: As.d.LinkFlair
				}), r.a.createElement(ni, {
					onClick: () => n(e)
				}, r.a.createElement(ai, null)))))
			}
			var ii = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/ReorderFlairList.m.less"),
				li = n.n(ii);
			const oi = s.a.wrapped(h.a, "Button", li.a),
				di = s.a.wrapped(h.d, "SecondaryButton", li.a),
				ci = s.a.div("ButtonContainer", li.a),
				ui = e => e;

			function mi(e) {
				const {
					flairTemplates: t,
					handleCancelOrderEditing: n,
					handleSaveOrder: a,
					handleUpdateSort: s,
					order: l
				} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(ci, null, r.a.createElement(di, {
					onClick: n,
					"data-redditstyle": !0
				}, i.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(oi, {
					onClick: a,
					"data-redditstyle": !0
				}, i.fbt._("Save", null, {
					hk: "4yMsMq"
				}))), r.a.createElement(Bn.a, {
					values: l,
					getReactKey: ui,
					render: (e, n, a, s, i) => r.a.createElement(mn.a, {
						key: e,
						isDragging: a,
						isOver: s,
						canDrop: i
					}, r.a.createElement(Is, {
						flairTemplate: t[e],
						flairTemplateType: As.d.LinkFlair
					})),
					onDrop: (e, t, n) => s(n)
				}))
			}
			var hi = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/MainWidgetContent.m.less"),
				pi = n.n(hi);
			const gi = 30,
				bi = 50,
				fi = s.a.wrapped(Z.f, "FlairPaneGroup", pi.a),
				Ei = s.a.wrapped(h.f, "TertiaryButton", pi.a),
				xi = s.a.wrapped(Z.b, "FormElementDescription", pi.a);
			class vi extends r.a.Component {
				constructor(e) {
					super(e), this.handleUpdateSort = e => {
						this.setState({
							order: e
						})
					}, this.handleCancelOrderEditing = () => {
						this.setState({
							order: this.props.widget.order
						}), this.props.handleCancelFromSubMenu()
					}, this.handleSaveOrder = () => {
						this.props.handleSaveOrder(this.state.order)
					}, this.state = {
						order: e.widget.order
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						order: e.widget.order
					})
				}
				render() {
					const {
						editMode: e,
						handleCancelEditing: t,
						handleDeleteWidget: n,
						handleDisplayChange: a,
						handleRemoveFlair: s,
						handleSaveWidget: l,
						handleTitleChange: o,
						isRequestInProgress: d,
						isValidWidget: c,
						onAdd: u,
						onChangeWidgetStyles: m,
						onReorder: p,
						postFlairData: g,
						subredditId: b,
						widget: f
					} = this.props, E = g.templates;
					return r.a.createElement(Z.k, null, r.a.createElement(Rn, this.props), r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
						hk: "25M9MA"
					})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Title text", null, {
							hk: "14qr0C"
						}),
						onChange: o,
						value: f.shortName
					}), r.a.createElement(tn.a, {
						text: f.shortName,
						maxChars: gi
					})), r.a.createElement(jn, {
						onChangeWidgetStyles: m,
						subredditId: b,
						widgetStyles: f.styles
					}), r.a.createElement(Z.h, null, i.fbt._("Layout", null, {
						hk: "26WqfC"
					})), r.a.createElement(me.a, {
						value: ae.d.List,
						label: i.fbt._("Single column", null, {
							hk: "usClX"
						}),
						selected: f.display === ae.d.List,
						onClick: () => a(ae.d.List)
					}), r.a.createElement(me.a, {
						value: ae.d.Cloud,
						label: i.fbt._("Word cloud", null, {
							hk: "6Iqk1"
						}),
						selected: f.display === ae.d.Cloud,
						onClick: () => a(ae.d.Cloud)
					}), r.a.createElement(fi, null, r.a.createElement(Ei, {
						"data-redditstyle": !0,
						disabled: f.order.length >= bi,
						onClick: u
					}, i.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})), r.a.createElement(Ei, {
						"data-redditstyle": !0,
						disabled: f.order.length <= 1,
						onClick: p
					}, i.fbt._("Reorder", null, {
						hk: "1tQe48"
					}))), r.a.createElement(xi, null, i.fbt._("Remaining flairs: {count}", [i.fbt._param("count", bi - f.order.length)], {
						hk: "3HYvA5"
					})), e === Ci.Reorder && r.a.createElement(mi, {
						flairTemplates: E,
						handleCancelOrderEditing: this.handleCancelOrderEditing,
						handleSaveOrder: this.handleSaveOrder,
						handleUpdateSort: this.handleUpdateSort,
						order: this.state.order
					}), e === Ci.None && r.a.createElement(r.a.Fragment, null, r.a.createElement(si, {
						flairTemplates: E,
						handleRemoveFlair: s,
						order: f.order
					}), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
						disabled: !c() || d(),
						onClick: l,
						"data-redditstyle": !0
					}, i.fbt._("Save", null, {
						hk: "4yMsMq"
					})), r.a.createElement(h.d, {
						onClick: t,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))), f.id && r.a.createElement(Z.f, null, r.a.createElement(h.c, {
						onClick: n,
						disabled: d(),
						"data-redditstyle": !0
					}, i.fbt._("Delete Widget", null, {
						hk: "14cOwx"
					})))))
				}
			}

			function _i() {
				return (_i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ci;
			! function(e) {
				e.Add = "Add", e.None = "None", e.Reorder = "Reorder"
			}(Ci || (Ci = {}));
			const yi = Object(o.b)(() => Object(c.c)({
					postFlairData: xs.d,
					subredditName: (e, {
						subredditId: t
					}) => Object(X.T)(e, {
						subredditId: t
					}).name
				})),
				ki = e => ({
					relativePosition: 0,
					title: e
				});
			var Si = yi(class extends Xa {
					constructor() {
						super(...arguments), this.returnToMainMenu = () => this.setState(e => ({
							editMode: Ci.None,
							editIndex: -1
						})), this.goToAddFlair = () => this.setState(e => ({
							editMode: Ci.Add
						})), this.goToReorderFlair = () => this.setState(e => ({
							editMode: Ci.Reorder
						})), this.handleTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.handleDisplayChange = e => {
							this.setWidgetState({
								display: e
							})
						}, this.handleSaveFlair = e => {
							this.setWidgetState({
								order: [...this.state.widget.order, e]
							}), this.returnToMainMenu()
						}, this.handleRemoveFlair = e => {
							const t = this.state.widget.order.filter(t => t !== e);
							this.setWidgetState({
								order: t
							})
						}, this.handleSaveOrder = e => {
							this.setWidgetState({
								order: e
							}), this.returnToMainMenu()
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					getInitialState(e) {
						return {
							widget: e,
							editMode: Ci.None,
							editIndex: -1
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !!e.display && !!e.shortName.trim().length
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							editMode: n,
							widget: a
						} = t;
						switch (n) {
							case Ci.None:
							case Ci.Reorder:
								return r.a.createElement(vi, _i({}, e, {
									editMode: n,
									handleCancelEditing: this.handleCancelEditing,
									handleCancelFromSubMenu: this.returnToMainMenu,
									handleDeleteWidget: this.handleDeleteWidget,
									handleDisplayChange: this.handleDisplayChange,
									handleRemoveFlair: this.handleRemoveFlair,
									handleSaveOrder: this.handleSaveOrder,
									handleSaveWidget: this.handleSaveWidget,
									handleTitleChange: this.handleTitleChange,
									isRequestInProgress: this.isRequestInProgress,
									isValidWidget: this.isValidWidget,
									onAdd: this.goToAddFlair,
									onChangeWidgetStyles: this.onChangeWidgetStyles,
									onReorder: this.goToReorderFlair,
									widget: a
								}));
							case Ci.Add:
								return r.a.createElement(Xs, _i({}, e, {
									afterApiRequestCompleted: this.afterApiRequestCompleted,
									breadcrumbs: [ki(e.title)],
									handleCancelFromSubMenu: this.returnToMainMenu,
									handleSaveFlair: this.handleSaveFlair,
									stopEditing: this.returnToMainMenu,
									title: i.fbt._("Add flair", null, {
										hk: "2HFPE"
									}),
									widget: a
								}))
						}
					}
				}),
				Ii = n("./src/reddit/components/StructuredStyles/Forms/SubredditRulesEditor/index.m.less"),
				wi = n.n(Ii);
			const Di = s.a.wrapped(Z.b, "FormElementDescription", wi.a),
				Ti = Object(c.c)({
					rulesWidget: re.h,
					subreddit: X.T
				});
			var Oi = Object(o.b)(Ti, e => ({
					refreshRulesWidget: (t, n) => e(Object($t.f)(t, n))
				}))(class extends Er {
					constructor() {
						super(...arguments), this.handleChangeDisplay = e => {
							this.setWidgetState({
								display: e
							})
						}, this.handleRefreshWidget = e => {
							if (this.state.apiRequestId) return;
							const t = this.props.subreddit.id,
								n = Object(wt.b)();
							this.setState({
								apiRequestId: n
							}, () => {
								this.props.refreshRulesWidget(t, n)
							})
						}, this.onChangeWidgetStyles = e => {
							this.setWidgetState({
								styles: e
							})
						}
					}
					isValidWidget() {
						return !0
					}
					componentWillReceiveProps(e) {
						if (super.componentWillReceiveProps(e), !this.props.widget.id && this.state.apiRequestId) {
							const t = e.apiRequestStates[this.state.apiRequestId];
							t && t.apiRequestStatus !== wt.a.Pending && (e.rulesWidget && e.onReloadWithWidget ? e.onReloadWithWidget(e.rulesWidget) : this.props.releaseRequest(this.state.apiRequestId))
						}!this.props.widget.id && e.widget.id && this.setWidgetState(e.widget)
					}
					hasRules() {
						return this.state.widget.data && !!this.state.widget.data.length
					}
					render() {
						const {
							props: e
						} = this, {
							widget: t
						} = this.state;
						return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), this.hasRules() && r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(Z.l, null, r.a.createElement(jn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: t.styles
						})), r.a.createElement(Z.m, null, i.fbt._("Subreddit rules widget content", null, {
							hk: "3Z2vrU"
						})), r.a.createElement(Z.h, null, i.fbt._("Layout", null, {
							hk: "1NEyoR"
						})), r.a.createElement(Z.a, null, r.a.createElement(ge.a, {
							name: "rulesEditor",
							onChange: this.handleChangeDisplay,
							value: t.display
						}, r.a.createElement(me.a, {
							value: "full",
							label: i.fbt._("Fully display rules and description", null, {
								hk: "1kdHUJ"
							})
						}), r.a.createElement(me.a, {
							value: "compact",
							label: i.fbt._("Display rules, collapse description", null, {
								hk: "2SvOfW"
							})
						}))), r.a.createElement("a", {
							href: `https://www.reddit.com/r/${e.subreddit.name}/about/rules`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.a.createElement(h.f, {
							"data-redditstyle": !0
						}, i.fbt._("Edit Community Rules", null, {
							hk: "m3RfW"
						})))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							onClick: this.handleCancelEditing,
							"data-redditstyle": !0
						}, i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})))), !this.hasRules() && r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(Di, null, i.fbt._("Before you can display your community's rules, you'll have to create them", null, {
							hk: "4utUwD"
						})), r.a.createElement("a", {
							href: `https://www.reddit.com/r/${e.subreddit.name}/about/rules`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.a.createElement(h.a, {
							"data-redditstyle": !0
						}, i.fbt._("Create Community Rules", null, {
							hk: "4hQc8y"
						})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Added your rules?", null, {
							hk: "1iWFd4"
						})), r.a.createElement(Di, null, i.fbt._("Refresh this pane to customize how your rules will be displayed in this widget", null, {
							hk: "44eH6"
						})), r.a.createElement(h.d, {
							onClick: this.handleRefreshWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Refresh Rules Widget", null, {
							hk: "z0wVG"
						})))))
					}
				}),
				ji = n("./src/reddit/components/StructuredStyles/Forms/TextAreaEditor/index.m.less"),
				Fi = n.n(ji);
			const Ai = 30,
				Pi = 1e4,
				Ni = s.a.wrapped(Kt.i, "Textarea", Fi.a);
			var Ri = class extends Sa {
				constructor() {
					super(...arguments), this.onTitleChange = e => {
						this.setWidgetState({
							shortName: e.currentTarget.value
						})
					}, this.onTextChange = e => {
						this.setWidgetState({
							text: e.currentTarget.value
						})
					}, this.onChangeWidgetStyles = e => {
						this.setWidgetState({
							styles: e
						})
					}
				}
				isValidWidget() {
					const e = this.state.widget.shortName,
						t = this.state.widget.text;
					return !(!e || !t) && (e.trim().length > 0 && e.length <= Ai && t.trim().length > 0 && t.length <= Pi)
				}
				render() {
					const {
						props: e
					} = this, {
						widget: t
					} = this.state;
					return r.a.createElement(Z.k, null, r.a.createElement(Rn, e), r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
						hk: "3Ka9sg"
					})), r.a.createElement(Z.i, null, r.a.createElement(Kt.c, {
						placeholder: i.fbt._("Widget title", null, {
							hk: "Dk5mv"
						}),
						value: t.shortName,
						onChange: this.onTitleChange
					}), r.a.createElement(tn.a, {
						maxChars: Ai,
						text: t.shortName
					})), r.a.createElement(Z.i, null, r.a.createElement(jn, {
						onChangeWidgetStyles: this.onChangeWidgetStyles,
						subredditId: e.subredditId,
						widgetStyles: t.styles
					})), r.a.createElement(Z.m, null, i.fbt._("Textarea widget content", null, {
						hk: "3p83zo"
					})), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Text", null, {
						hk: "1qBGzd"
					})), r.a.createElement(Ni, {
						value: t.text,
						onChange: this.onTextChange
					}), r.a.createElement(tn.a, {
						maxChars: Pi,
						text: t.text
					})), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
						hk: "44ALrV"
					}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
						onClick: this.handleSaveWidget,
						disabled: !this.isValidWidget() || this.isRequestInProgress(),
						"data-redditstyle": !0
					}, i.fbt._("Save", null, {
						hk: "4yMsMq"
					})), r.a.createElement(h.d, {
						onClick: this.handleCancelEditing,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))), e.widget.id && r.a.createElement(Z.f, null, r.a.createElement(h.c, {
						onClick: this.handleDeleteWidget,
						disabled: this.isRequestInProgress(),
						"data-redditstyle": !0
					}, i.fbt._("Delete Widget", null, {
						hk: "GmyXE"
					}))))
				}
			};
			const Bi = e => r.a.createElement("div", null, `Unknown widget kind "${e.widget.kind}"`),
				Li = e => {
					switch (e.kind) {
						case "textarea":
							return Ri;
						case "button":
							return xa;
						case "subreddit-rules":
							return Oi;
						case "image":
							return Pr;
						case "community-list":
							return qa;
						case "calendar":
							return Pa;
						case "id-card":
							return Sr;
						case "menu":
							return fs;
						case "custom":
							return gr;
						case "moderators":
							return Es;
						case "post-flair":
							return Si;
						default:
							return Bi
					}
				};
			class Wi extends r.a.Component {
				componentWillMount() {
					this.props.startEditing(this.props.widget)
				}
				render() {
					const {
						props: e
					} = this, t = Li(e.widget);
					return r.a.createElement(t, e)
				}
			}
			var Mi = function(e) {
				const t = Object(c.c)({
					apiRequestStates: Dt.a,
					isDirty: J.h,
					isUnsavedChangesModalOpen: Object(U.b)(en),
					widget: (e, t) => Object(re.k)(e, t)
				});
				return Object(o.b)(t, (e, t) => ({
					saveChanges: (n, a) => {
						if (t.sendEventWithName) {
							const e = {
								widgetKind: n.kind
							};
							if ("post-flair" === n.kind) {
								const t = n;
								e.count = t.order.length
							}
							n.id || t.sendEventWithName("create_widget", e), t.sendEventWithName("save_widget", e)
						}
						const r = n.id ? $t.e : $t.c;
						e(r(t.subredditId, n, a))
					},
					closeModal: () => {
						e(Object(A.g)(en))
					},
					deleteWidget: (n, a) => {
						n.id && (e($t.d(t.subredditId, n, a)), t.sendEventWithName && t.sendEventWithName("delete_widget", {
							widgetKind: n.kind
						}))
					},
					releaseRequest: t => {
						e(Object(It.g)(t))
					},
					stopEditing: () => {
						e(P.m()), t.stopEditing(), e(Object(A.g)(en))
					},
					startEditing: t => {
						e($t.b({
							widgetId: t.id
						}))
					},
					toggleLeaveMenuUnsavedModal: () => {
						e(Object(A.i)(en))
					},
					dirtyEditor: () => {
						e(P.b())
					},
					undirtyEditor: () => {
						e(P.m())
					}
				}), (e, t, n) => ({
					...e,
					...t,
					onReloadWithWidget: n.onReloadWithWidget,
					subredditId: n.subredditId,
					title: n.title,
					breadcrumbs: n.breadcrumbs,
					sendEventWithName: n.sendEventWithName,
					helpCenterLink: n.helpCenterLink
				}))(e)
			}(Wi);
			const Ui = Object(c.c)({
				widgetId: re.e
			});
			var qi = Object(o.b)(Ui)(e => e.widgetId ? r.a.createElement(Mi, {
				subredditId: e.subredditId,
				title: e.title,
				breadcrumbs: e.breadcrumbs,
				stopEditing: e.stopEditing,
				widgetId: e.widgetId,
				helpCenterLink: e.helpCenterLink
			}) : r.a.createElement(Mi, {
				subredditId: e.subredditId,
				title: e.title,
				breadcrumbs: e.breadcrumbs,
				stopEditing: e.stopEditing,
				widgetKind: "menu",
				helpCenterLink: e.helpCenterLink
			}));
			var zi = Bt(e => r.a.createElement(Z.k, null, r.a.createElement(Ge, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Link Colors", null, {
					hk: "10kWUC"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Active Page", null, {
						hk: "4pWBSv"
					}),
					name: "menuLinkColorActive"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Inactive Page", null, {
						hk: "YmHYW"
					}),
					name: "menuLinkColorInactive"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Hover", null, {
						hk: "1HGJFG"
					}),
					name: "menuLinkColorHover"
				}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Main Menu Background", null, {
					hk: "5scHN"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Color", null, {
						hk: "24I04u"
					}),
					name: "menuBackgroundColor"
				}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Submenu Background", null, {
					hk: "2o6qwW"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ce, {
					name: "submenuBackgroundStyle"
				}, r.a.createElement(ye, {
					value: "default",
					label: i.fbt._("Match Main Menu Background", null, {
						hk: "3LPJz0"
					})
				}), r.a.createElement(ye, {
					value: "custom",
					label: i.fbt._("Solid Color", null, {
						hk: "DnvyW"
					})
				}, r.a.createElement(Je, {
					name: "submenuBackgroundStyle",
					render: e => "custom" === e && r.a.createElement(Z.d, null, r.a.createElement(Z.i, null, r.a.createElement(Ct, {
						name: "submenuBackgroundColor",
						label: i.fbt._("Color", null, {
							hk: "3V0Im3"
						})
					})))
				}))))), r.a.createElement(We, e)), ["bannerOverlayColor", "menuBackgroundColor", "menuBackgroundImage", "menuBackgroundOpacity", "menuLinkColorActive", "menuLinkColorHover", "menuLinkColorInactive", "menuPosition", "submenuBackgroundColor", "submenuBackgroundStyle"]),
				Vi = n("./src/reddit/components/StructuredStyles/LabeledVisibilityInput/index.m.less"),
				Hi = n.n(Vi);
			const Ki = s.a.wrapped(Z.b, "FormElementDescription", Hi.a),
				Gi = s.a.wrapped(Kt.h, "StyledLabel", Hi.a);
			var Zi = pe(e => r.a.createElement(Gi, null, r.a.createElement(an.a, null, r.a.createElement(h.h, {
				redditStyle: !0,
				name: e.name,
				offValue: e.offValue,
				onChange: e.onChange,
				onValue: e.onValue,
				selected: e.value === e.onValue
			}), r.a.createElement("div", null, r.a.createElement(Z.e, null, e.label), e.description && r.a.createElement(Ki, null, e.description)))));
			var Qi = Bt(e => r.a.createElement(Z.k, null, r.a.createElement(Ge, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Community Name Format", null, {
				hk: "tP16c"
			})), r.a.createElement(Z.a, null, r.a.createElement(ve, {
				name: "bannerCommunityNameFormat"
			}, r.a.createElement(_e, {
				value: "slashtag",
				label: `${e.subreddit.displayText}`
			}), r.a.createElement(_e, {
				value: "pretty",
				label: `${e.subreddit.name}`
			}), r.a.createElement(_e, {
				value: "hide",
				label: i.fbt._("Hide", null, {
					hk: "3LxoFk"
				})
			})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Community Icon", null, {
				hk: "1AxBpT"
			})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Custom Image", null, {
				hk: "185kJR"
			})), r.a.createElement(Ze, {
				name: "communityIcon",
				render: t => t ? r.a.createElement(lt, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "communityIcon"
				}) : r.a.createElement($e, {
					label: i.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "communityIcon"
				})
			}), r.a.createElement(Z.b, null, i.fbt._("Required Size: 256x256px", null, {
				hk: "3czxcI"
			})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Community Icon", null, {
				hk: "1AxBpT"
			})), r.a.createElement(Zi, {
				description: i.fbt._("Your Community Icon will still display in other areas of Reddit", null, {
					hk: "3Ypgnp"
				}),
				label: i.fbt._("Hide Community Icon in Banner", null, {
					hk: "33E6fk"
				}),
				name: "bannerShowCommunityIcon",
				onValue: "hide",
				offValue: "show"
			})), r.a.createElement(We, e)), ["bannerShowCommunityIcon", "bannerCommunityNameFormat", "communityIcon"]);
			var Yi = Bt(e => r.a.createElement(Z.k, null, r.a.createElement(Ge, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Title Color", null, {
				hk: "1UCY4u"
			})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
				name: "postTitleColor",
				label: i.fbt._("Color", null, {
					hk: "3V0Im3"
				})
			}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Up + Down Vote Icons", null, {
				hk: "4dc1gB"
			})), r.a.createElement(Z.g, null, i.fbt._("If you want to upload your own vote icons, you'll need to upload an image for each of the indicated icon states.", null, {
				hk: "4a8IbW"
			})), r.a.createElement(Z.a, null, r.a.createElement(Ce, {
				name: "postVoteIcons"
			}, r.a.createElement(ye, {
				label: i.fbt._("Standard Reddit", null, {
					hk: "3GMuNx"
				}),
				value: "default"
			}), r.a.createElement(ye, {
				label: i.fbt._("Custom", null, {
					hk: "1QKc56"
				}),
				value: "custom"
			}, r.a.createElement(Je, {
				name: "postVoteIcons",
				render: t => "custom" === t && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.d, null, r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Inactive upvote", null, {
					hk: "3JGpmU"
				})), r.a.createElement(Ze, {
					name: "postUpvoteIconInactive",
					render: t => t ? r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postUpvoteIconInactive"
					}) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postUpvoteIconInactive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Active upvote", null, {
					hk: "kymn4"
				})), r.a.createElement(Ze, {
					name: "postUpvoteIconActive",
					render: t => t ? r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postUpvoteIconActive"
					}) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postUpvoteIconActive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(Ct, {
					label: i.fbt._("Upvote count color", null, {
						hk: "WY0NE"
					}),
					name: "postUpvoteCountColor"
				}))), r.a.createElement(Z.d, null, r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Inactive downvote", null, {
					hk: "1NZ0ba"
				})), r.a.createElement(Ze, {
					name: "postDownvoteIconInactive",
					render: t => t ? r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postDownvoteIconInactive"
					}) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postDownvoteIconInactive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Active downvote", null, {
					hk: "vqYFP"
				})), r.a.createElement(Ze, {
					name: "postDownvoteIconActive",
					render: t => t ? r.a.createElement(lt, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postDownvoteIconActive"
					}) : r.a.createElement($e, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postDownvoteIconActive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(Ct, {
					label: i.fbt._("Downvote count color", null, {
						hk: "1ftOyw"
					}),
					name: "postDownvoteCountColor"
				}))))
			}))))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Post Background", null, {
				hk: "3K8hGI"
			})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
				label: i.fbt._("Color", null, {
					hk: "3V0Im3"
				}),
				name: "postBackgroundColor"
			})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
				hk: "3o4qa8"
			})), r.a.createElement(Ze, {
				name: "postBackgroundImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "postBackgroundImage"
				}), r.a.createElement(Z.d, null, r.a.createElement(Le, {
					name: "postBackgroundImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement($e, {
					label: i.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "postBackgroundImage"
				})
			}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Link Preview Placeholder Image", null, {
				hk: "2A0gCp"
			})), r.a.createElement(Z.g, null, i.fbt._("Most of the time, link posts automatically generate a placeholder image; sometimes they don't. Use the Standard Reddit placeholder, or create your own!", null, {
				hk: "4shqld"
			})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
				hk: "JhfPF"
			})), r.a.createElement(Ze, {
				name: "postPlaceholderImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "postPlaceholderImage"
				}), r.a.createElement(Z.d, null, r.a.createElement(Le, {
					name: "postPlaceholderImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement($e, {
					label: i.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "postPlaceholderImage"
				})
			}))), r.a.createElement(We, e)), ["postBackgroundColor", "postBackgroundImage", "postBackgroundImagePosition", "postDownvoteCountColor", "postDownvoteIconActive", "postDownvoteIconInactive", "postPlaceholderImage", "postPlaceholderImagePosition", "postTitleColor", "postUpvoteCountColor", "postUpvoteIconActive", "postUpvoteIconInactive", "postVoteIcons"]);
			var Ji = Bt(e => r.a.createElement(Z.o, null, r.a.createElement(Ge, e), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Title background color", null, {
						hk: "2omOuw"
					}),
					name: "sidebarWidgetHeaderColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(Ct, {
					label: i.fbt._("Widget background color", null, {
						hk: "2iB8pL"
					}),
					name: "sidebarWidgetBackgroundColor"
				})), e.hasUnsavedChanges && r.a.createElement(We, e)), ["sidebarWidgetBackgroundColor", "sidebarWidgetHeaderColor"]),
				Xi = n("./src/reddit/components/StructuredStyles/NavItem/index.m.less"),
				$i = n.n(Xi);
			const el = s.a.wrapped(v.a, "ExpandLeft", $i.a);
			var tl = e => r.a.createElement(p.b, {
					onClick: e.onClick
				}, r.a.createElement(el, null, e.children, r.a.createElement(h.g, null))),
				nl = n("./src/reddit/components/StructuredStyles/Forms/WidgetManager/WidgetLabel.m.less"),
				al = n.n(nl);
			const rl = s.a.div("WidgetType", al.a),
				sl = s.a.div("WidgetTitle", al.a);
			var il = e => e.widget ? r.a.createElement("div", null, r.a.createElement(rl, null, Object(ae.p)(e.widget.kind)), r.a.createElement(sl, null, Object(ae.q)(e.widget))) : null;
			const ll = Object(c.c)({
				idCardWidget: (e, t) => Object(re.d)(e, {
					subredditId: t.subredditId
				}),
				sidebar: re.i,
				widgets: re.a
			});
			var ol = Object(o.b)(ll)(e => r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(Z.b, null, i.fbt._("Remaining Widgets:", null, {
					hk: "1XFj7r"
				}), (20 - e.sidebar.length).toLocaleString()), r.a.createElement(tl, {
					onClick: () => e.idCardWidget && e.onClick(e.idCardWidget)
				}, r.a.createElement(il, {
					widget: e.idCardWidget
				})), e.sidebar.map(t => r.a.createElement(tl, {
					key: t,
					onClick: () => e.onClick(e.widgets[t])
				}, r.a.createElement(il, {
					widget: e.widgets[t]
				})))), r.a.createElement(Z.f, null, r.a.createElement(h.f, {
					onClick: e.onAdd,
					disabled: e.sidebar.length >= 20,
					"data-redditstyle": !0
				}, i.fbt._("Add Widget", null, {
					hk: "1yMj6p"
				})), e.sidebar.length > 1 && r.a.createElement(h.f, {
					onClick: e.startSorting,
					"data-redditstyle": !0
				}, i.fbt._("Reorder Widgets", null, {
					hk: "4dfSWN"
				}))))),
				dl = n("./src/reddit/components/StructuredStyles/Forms/WidgetManager/SortWidgets.m.less"),
				cl = n.n(dl);
			const ul = s.a.wrapped(Bn.a, "Sortable", cl.a);
			class ml extends r.a.Component {
				constructor(e) {
					super(e), this.handleDrop = (e, t, n) => {
						this.setState({
							items: n
						})
					}, this.handleSave = () => {
						this.props.saveChanges(this.state.items), this.props.stopSorting()
					}, this.handleCancel = () => {
						this.props.stopSorting()
					}, this.getReactKey = e => e, this.state = {
						items: e.sidebar || []
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(mn.a, {
						disabled: !0
					}, r.a.createElement(il, {
						widget: e.idCardWidget
					})), r.a.createElement(ul, {
						values: t.items,
						getReactKey: this.getReactKey,
						render: (t, n, a, s, i) => r.a.createElement(mn.a, {
							isDragging: a,
							isOver: s,
							canDrop: i
						}, r.a.createElement(il, {
							widget: e.widgets[t]
						})),
						onDrop: this.handleDrop
					})), r.a.createElement(Z.f, null, r.a.createElement(un, {
						applyText: i.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						cancelText: i.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						onApply: this.handleSave,
						onCancel: this.handleCancel
					})))
				}
			}
			var hl = Object(o.b)(() => Object(c.c)({
				sidebar: re.i,
				widgets: re.a,
				idCardWidget: (e, t) => Object(re.d)(e, {
					subredditId: t.subredditId
				})
			}), (e, t) => ({
				saveChanges: n => {
					e($t.h(t.subredditId, n))
				}
			}))(ml);
			class pl extends r.a.Component {
				constructor(e) {
					super(e), this.disableSecondState = () => this.setState({
						isInSecondState: !1
					}), this.enableSecondState = () => this.setState({
						isInSecondState: !0
					}), this.state = {
						isInSecondState: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(Z.k, null, r.a.createElement(Ji, {
						subredditId: e.subredditId,
						title: i.fbt._("Sidebar widget appearance", null, {
							hk: "2h8P8Z"
						}),
						paneName: "widgets",
						breadcrumbs: e.breadcrumbs,
						stopEditing: e.stopEditing,
						helpCenterLink: e.helpCenterLink
					}), r.a.createElement(Z.m, null, e.title), r.a.createElement(Jt.c, null, i.fbt._("These community styling options will also display in Reddit apps.", null, {
						hk: "1Cl8Yk"
					})), t.isInSecondState ? r.a.createElement(hl, {
						subredditId: e.subredditId,
						stopSorting: this.disableSecondState
					}) : r.a.createElement(ol, {
						onClick: t => e.onEdit(t.id, t.kind),
						onAdd: e.onAdd,
						startSorting: () => {
							e.onSort(), this.enableSecondState()
						},
						subredditId: e.subredditId
					}))
				}
			}
			var gl = pl;
			const bl = (e, t) => {
				const n = t ? Math.max(0, e.index - t) : 0;
				return e.entries.slice(n, e.index).map((t, a) => ({
					relativePosition: a + n - e.index,
					title: t.state ? t.state.title : null
				}))
			};
			var fl = n("./src/reddit/selectors/telemetry.ts");
			const El = Object(br.u)({
					queryParams: br.V
				}),
				xl = e => t => t ? e.go(t.relativePosition) : e.goBack();
			var vl = El(Object(g.c)(e => {
					const t = (t => (n, a) => e.sendEvent(r => ({
						source: t,
						action: "click",
						noun: n,
						actionInfo: Object(fl.actionInfo)(r, {
							paneName: a ? a.paneName : void 0,
							count: a ? a.count : void 0
						}),
						screen: Object(fl.screen)(r),
						subreddit: Object(fl.subreddit)(r),
						widget: a && a.widgetKind && Object(fl.widget)(r, {
							subredditId: e.subredditId,
							widgetKind: a.widgetKind
						})
					})))(b.d.Widgets);
					return r.a.createElement(l.a, {
						initialEntries: [f("main")],
						initialIndex: 0
					}, r.a.createElement("div", null, r.a.createElement(l.d, {
						exact: !0,
						path: "main",
						render: ({
							history: t
						}) => {
							const n = 1 === t.length && e.queryParams.route;
							return n && t.push(f(n)), r.a.createElement(te, {
								subredditId: e.subredditId,
								title: i.fbt._("Back to mod tools", null, {
									hk: "1YCI0W"
								})
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "global",
						render: ({
							history: t
						}) => r.a.createElement(Xt, {
							breadcrumbs: bl(t, 1),
							paneName: b.b.global,
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Color theme", null, {
								hk: "2v9vTZ"
							}),
							helpCenterLink: b.e.global
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "nameAndIcon",
						render: ({
							history: t
						}) => r.a.createElement(Qi, {
							breadcrumbs: bl(t, 1),
							paneName: b.b.nameAndIcon,
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Name & icon", null, {
								hk: "3Ooszv"
							}),
							helpCenterLink: b.e.nameAndIcon
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "banner",
						render: ({
							history: t
						}) => r.a.createElement(zt, {
							breadcrumbs: bl(t, 1),
							paneName: b.b.banner,
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Banner", null, {
								hk: "34vhtK"
							}),
							helpCenterLink: b.e.banner
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "menu",
						render: ({
							history: t
						}) => r.a.createElement(zi, {
							breadcrumbs: bl(t, 1),
							paneName: b.b.menu,
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Menu", null, {
								hk: "2i934f"
							}),
							helpCenterLink: b.e.menu
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "post",
						render: ({
							history: t
						}) => r.a.createElement(Yi, {
							breadcrumbs: bl(t, 1),
							paneName: b.b.post,
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Posts", null, {
								hk: "IRzss"
							}),
							helpCenterLink: b.e.post
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "exportImport",
						render: ({
							history: t
						}) => r.a.createElement(Yt, {
							breadcrumbs: bl(t, 1),
							paneName: b.b.exportImport,
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Manage themes", null, {
								hk: "4u4bJB"
							}),
							helpCenterLink: b.e.exportImport
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "menuLinks",
						render: ({
							history: t
						}) => r.a.createElement(qi, {
							breadcrumbs: bl(t, 1),
							stopEditing: xl(t),
							subredditId: e.subredditId,
							title: i.fbt._("Menu links", null, {
								hk: "1fH1RT"
							}),
							helpCenterLink: b.e.menuLinks
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "widgets",
						render: ({
							history: n
						}) => r.a.createElement(gl, {
							breadcrumbs: bl(n, 1),
							onAdd: () => {
								n.push(f("addWidget"))
							},
							onEdit: (e, a) => {
								t(b.b.editWidget, {
									widgetKind: a
								}), n.push(f("editWidget", {
									widgetId: e,
									widgetKind: a
								}))
							},
							onSort: () => t(b.b.reorderWidgets, {
								paneName: b.b.widgets
							}),
							stopEditing: xl(n),
							subredditId: e.subredditId,
							title: i.fbt._("Sidebar widgets", null, {
								hk: "4aVxeZ"
							}),
							helpCenterLink: b.e.widgets
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "addWidget",
						render: ({
							history: n
						}) => r.a.createElement(ce, {
							breadcrumbs: bl(n, 1),
							onAdd: e => {
								t(b.b.addWidget, {
									widgetKind: e
								}), n.push(f("newWidget", {
									widgetKind: e
								}))
							},
							stopEditing: xl(n),
							subredditId: e.subredditId,
							title: i.fbt._("Add Widget", null, {
								hk: "mlWwj"
							}),
							helpCenterLink: b.e.widgets
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "newWidget",
						render: ({
							history: n,
							location: a
						}) => r.a.createElement(Mi, {
							breadcrumbs: bl(n, 1),
							onReloadWithWidget: e => {
								n.replace(f("editWidget", {
									widgetId: e.id
								}))
							},
							sendEventWithName: t,
							stopEditing: e => e ? n.go(e.relativePosition) : n.go(-2),
							subredditId: e.subredditId,
							title: a.state.widgetKind ? E(a.state.widgetKind) : i.fbt._("New Widget", null, {
								hk: "BJxc8"
							}),
							widgetKind: a.state.widgetKind,
							helpCenterLink: b.e.widgets
						})
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "editWidget",
						render: ({
							history: n,
							location: a
						}) => r.a.createElement(Mi, {
							breadcrumbs: bl(n, 1),
							sendEventWithName: t,
							stopEditing: xl(n),
							subredditId: e.subredditId,
							title: a.state.widgetKind ? E(a.state.widgetKind) : i.fbt._("Edit Widget", null, {
								hk: "1mXs71"
							}),
							widgetId: a.state.widgetId,
							helpCenterLink: b.e.widgets
						})
					})))
				})),
				_l = n("./src/reddit/connectors/connectClickToToggleEditor.ts"),
				Cl = Object(_l.a)(e => r.a.createElement("button", {
					className: e.className,
					onClick: e.requestCloseBlade,
					children: e.children
				})),
				yl = n("./src/reddit/components/BlockNavigation/index.tsx"),
				kl = n("./src/reddit/constants/modals.ts");
			var Sl = Object(_l.a)(e => r.a.createElement(yl.a, {
					blockOnBeforeUnload: !0,
					dialogId: kl.a.BLADE_UNSAVED_CHANGES,
					enabled: e.bladeHasUnsavedChanges
				})),
				Il = n("./src/reddit/components/StructuredStyles/BladeDrawer/index.m.less"),
				wl = n.n(Il);
			const Dl = s.a.div("BladeContainer", wl.a),
				Tl = s.a.wrapped(Cl, "BladeCloseButton", wl.a);
			t.default = e => r.a.createElement("div", null, r.a.createElement(Dl, {
				id: dt.a
			}, r.a.createElement(Tl, {
				subredditId: e.subredditId
			}, r.a.createElement(h.b, null)), r.a.createElement(vl, {
				subredditId: e.subredditId
			})), r.a.createElement(Sl, e))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/trackers/blade.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = n.n(d);
			const u = s.a.wrapped(o.a, "StyledChevron", c.a),
				m = s.a.div("BreadcrumbElement", c.a),
				h = s.a.div("BreadcrumbContainer", c.a);
			t.b = Object(i.c)(e => r.a.createElement(h, null, e.breadcrumbs.map(t => r.a.createElement(m, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(l.a)()), e.onNavigate(t)
				}
			}, r.a.createElement(u, null), t.title))))
		},
		"./src/reddit/components/StructuredStyles/CancelApplyButtons/index.m.less": function(e, t, n) {
			e.exports = {
				TrashIcon: "d-YBxGHNeDTVbfGK5P22Q",
				trashIcon: "d-YBxGHNeDTVbfGK5P22Q",
				PrimaryButton: "oADNCdkpVJG0ib9UqOv9W",
				primaryButton: "oADNCdkpVJG0ib9UqOv9W",
				SecondaryButton: "_1z2Uqp8WmC6Uzd7SAppyjc",
				secondaryButton: "_1z2Uqp8WmC6Uzd7SAppyjc",
				ButtonRow: "_2lh8o0sAjKyUpHE2q-5MEp",
				buttonRow: "_2lh8o0sAjKyUpHE2q-5MEp"
			}
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/reddit/helpers/isValidHexColor/index.ts"),
				d = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				p = n.n(h),
				g = n("./src/higherOrderComponents/makeAsync.tsx"),
				b = n("./src/lib/loadWithRetries/index.ts");
			const f = () => null;
			var E = Object(g.a)({
				ErrorComponent: f,
				getComponent: () => Object(b.a)(() => n.e("ColorPickerDropdown").then(n.bind(null, "./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx"))).then(e => e.default),
				LoadingComponent: f
			});
			const x = e => "#" === e[0] ? e : `#${e}`,
				v = Object(l.a)(e => s.a.createElement("div", {
					className: Object(i.a)(p.a.DropdownColorSwatch, e.isTransparent && p.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.f)(e.color)
					}
				}, e.isDropdownOpen ? s.a.createElement(c.a, {
					className: p.a.ChevronUp
				}) : s.a.createElement(d.a, {
					className: p.a.ChevronDown
				})));
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeProp = e => {
						this.setState({
							value: e,
							inputValue: e
						}), this.props.onChange(e, !0)
					}, this.onChangeHexColor = e => {
						const {
							value: t
						} = e.currentTarget;
						if (this.setState({
								inputValue: t
							}), Object(o.b)(t, !0)) {
							const e = x(t);
							this.setState({
								value: e
							}), this.props.onChange(e, !1)
						}
					}, this.handleUseSystemColorPickerClicked = () => {
						this.props.onSystemInputOpened && this.props.onSystemInputOpened()
					};
					const {
						value: t
					} = e;
					this.state = {
						inputValue: t,
						value: t
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value,
						inputValue: e.value
					})), !this.props.isDropdownOpen && e.isDropdownOpen && this.props.onColorPickerOpened && this.props.onColorPickerOpened()
				}
				componentWillUnmount() {
					this.props.isDropdownOpen && this.props.onToggleDropdown()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.containerId ? document.getElementById(e.containerId) : void 0;
					return s.a.createElement("div", {
						onClick: e.onToggleDropdown
					}, s.a.createElement(v, {
						color: e.value || u.d,
						isDropdownOpen: e.isDropdownOpen,
						isTransparent: e.includeTransparent && !e.value
					}), s.a.createElement(E, {
						container: n,
						inputValue: t.inputValue,
						includeTransparent: e.includeTransparent,
						isOpen: e.isDropdownOpen,
						onChangeHexColor: this.onChangeHexColor,
						onSelectColor: this.onChangeProp,
						onToggleDropdown: e.onToggleDropdown,
						onClickUseSystemColorPicker: this.handleUseSystemColorPickerClicked,
						tooltipId: e.tooltipId,
						tooltipPosition: e.dropdownPosition,
						value: t.value
					}))
				}
			}
			t.a = _
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/index.m.less": function(e, t, n) {
			e.exports = {
				Inline: "C1u8RDjnECGK1LWfSsACT",
				inline: "C1u8RDjnECGK1LWfSsACT",
				ColorInput: "_11x--06UcYLDYS16wXb8-q",
				colorInput: "_11x--06UcYLDYS16wXb8-q",
				ColorSwatchContainer: "_1oW-7sYYlQS4GeHmj1ubBp",
				colorSwatchContainer: "_1oW-7sYYlQS4GeHmj1ubBp",
				ColorSwatchOption: "_35Suh6FFPv_wB32f8XV32",
				colorSwatchOption: "_35Suh6FFPv_wB32f8XV32",
				isTransparent: "WD7seokSY2Kgg9EUdkfox",
				isSelected: "Awb-CJoYiNZr5FUKWbmCQ",
				ColorSwatchPreview: "_2U2EDHI9LC1nsjVIA7rIV7",
				colorSwatchPreview: "_2U2EDHI9LC1nsjVIA7rIV7",
				HexColorInput: "_2J9PudeZtimxGXSP0A_G-l",
				hexColorInput: "_2J9PudeZtimxGXSP0A_G-l",
				isInvalid: "_1AtMqIr_4QichwnCYnGiCf",
				ErrorMarker: "_1niA4R0pkgQEg3RkfWiORi",
				errorMarker: "_1niA4R0pkgQEg3RkfWiORi",
				SectionTitle: "_2fiXR9OAoHzIVFLLcS7W8u",
				sectionTitle: "_2fiXR9OAoHzIVFLLcS7W8u",
				StyledLabel: "_3tm-97fb8noV8kwxNOON_9",
				styledLabel: "_3tm-97fb8noV8kwxNOON_9",
				ColorPickerDropdown: "_1i-ndNsTQtNr82sMJ0renj",
				colorPickerDropdown: "_1i-ndNsTQtNr82sMJ0renj",
				DropdownColorSwatch: "_2uwkPlP_LglpLTAm6dfFmd",
				dropdownColorSwatch: "_2uwkPlP_LglpLTAm6dfFmd",
				ChevronDown: "V07CUWayujZ6pmjzCKitD",
				chevronDown: "V07CUWayujZ6pmjzCKitD",
				ChevronUp: "_1PTgp4tTpJn4UDPY-Uo-e4",
				chevronUp: "_1PTgp4tTpJn4UDPY-Uo-e4"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.m.less": function(e, t, n) {
			e.exports = {
				Grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				LockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				lockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				ExpandLeft: "_10Jk0eCPxa9SanBQsJlfGa",
				expandLeft: "_10Jk0eCPxa9SanBQsJlfGa"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				l = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				o = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				u = n.n(c);
			const m = s.a.wrapped(l.a, "Grapple", u.a),
				h = s.a.wrapped(o.a, "LockIcon", u.a),
				p = s.a.wrapped(d.a, "ExpandLeft", u.a);
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				isDragging: e.isDragging,
				isOver: e.isOver,
				canDrop: e.canDrop,
				disabled: e.disabled
			}, r.a.createElement(p, null, e.children, e.disabled ? r.a.createElement(h, {
				className: e.iconClassName
			}) : r.a.createElement(m, {
				className: e.iconClassName
			})))
		},
		"./src/reddit/components/StructuredStyles/EditItem/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "L7BJoh0EK7ZnUHrXglD0P",
				pencilIcon: "L7BJoh0EK7ZnUHrXglD0P",
				disabled: "knBhCerNksV38iwaIKtdW"
			}
		},
		"./src/reddit/components/StructuredStyles/FeatureToggle/index.m.less": function(e, t, n) {
			e.exports = {
				StyledLabel: "_3u-9eu0u-RQXA-Gf7VGRYH",
				styledLabel: "_3u-9eu0u-RQXA-Gf7VGRYH",
				ToggleInput: "UCECMAIX7NuenLiQQRp6S",
				toggleInput: "UCECMAIX7NuenLiQQRp6S",
				FormElementTitle: "Op4q7USt0KQsr6PPrf838",
				formElementTitle: "Op4q7USt0KQsr6PPrf838"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = n.n(o);
			const c = i.a.wrapped(l.e, "FormElementTitle", d.a),
				u = i.a.wrapped(l.b, "FormElementDescription", d.a);
			t.a = e => r.a.createElement("div", null, r.a.createElement(c, {
				className: Object(s.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && r.a.createElement(u, {
				className: Object(s.a)({
					[d.a.fake]: e.fake
				})
			}, e.description))
		},
		"./src/reddit/components/StructuredStyles/Forms/ButtonWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "dCaZPVsWElAph6iuAVvPb",
				tertiaryButton: "dCaZPVsWElAph6iuAVvPb"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/eventDataToggle.m.less": function(e, t, n) {
			e.exports = {
				Input: "_29BTkbiKm4x7ygrjYNL8KG",
				input: "_29BTkbiKm4x7ygrjYNL8KG",
				ExpandRight: "_1RcIUwMvdNVUqlsegHhBEB",
				expandRight: "_1RcIUwMvdNVUqlsegHhBEB"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementError: "_1tdZC49t5gX7cQAoKMW9nP",
				formElementError: "_1tdZC49t5gX7cQAoKMW9nP",
				NumEventsInput: "O3rfqq3IpeVq0L6mEBZIN",
				numEventsInput: "O3rfqq3IpeVq0L6mEBZIN",
				InputLabel: "_3npXwkCEzPlIWlVZaF5ZIt",
				inputLabel: "_3npXwkCEzPlIWlVZaF5ZIt"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CommunityListEditor/index.m.less": function(e, t, n) {
			e.exports = {
				controlRow: "_4-615bilTLIwPCCjuLFjo",
				subredditPicker: "X36JU7OMwzhNF6QAoMMqi",
				textArea: "_2zzz_klRsMB8_jcHkCmdyQ",
				textButton: "_1Y-e809DQ-DHr9EQdIyxTS",
				trashIcon: "GL2UJeLoQDgwDBRBT61qK"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/ExperimentalFeatureNotice.m.less": function(e, t, n) {
			e.exports = {
				Info: "_1KvED3SeNlyFK7NUcNAK4q",
				info: "_1KvED3SeNlyFK7NUcNAK4q",
				FormGroup: "_3PlorItamfIkXJ0Jc1JoX8",
				formGroup: "_3PlorItamfIkXJ0Jc1JoX8",
				FormGroupTitle: "_1A5_9gglZ45Sd8_T8XQA0m",
				formGroupTitle: "_1A5_9gglZ45Sd8_T8XQA0m",
				FormGroupDescription: "ZIIzeIWxa1S2GIITHOt42",
				formGroupDescription: "ZIIzeIWxa1S2GIITHOt42"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Textarea: "_1xA9XHPDdpGSNw5kC_YQ0m",
				textarea: "_1xA9XHPDdpGSNw5kC_YQ0m",
				FormGroup: "_10DaZGn-4UslKEOnt_sTb4",
				formGroup: "_10DaZGn-4UslKEOnt_sTb4",
				UnsavedImageFormContainer: "_3PZaUzwh1dN2f4O8oYNV6d",
				unsavedImageFormContainer: "_3PZaUzwh1dN2f4O8oYNV6d",
				FormElementDescription: "_2ZLLw0J-Cb8urFPK3ld5WT",
				formElementDescription: "_2ZLLw0J-Cb8urFPK3ld5WT",
				FormElementError: "_1VDoOK-UKS2fHgOAyiw2nR",
				formElementError: "_1VDoOK-UKS2fHgOAyiw2nR",
				CopyLink: "_27sulKJmrq6oaWuFe3lKEa",
				copyLink: "_27sulKJmrq6oaWuFe3lKEa"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/IdCardWidgetEditor/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_1UQLgzlKMHz0UH8gorG2zA",
				outboundLinkIcon: "_1UQLgzlKMHz0UH8gorG2zA",
				NavLink: "_3wRHUwbRrIQGfqwFI-gjju",
				navLink: "_3wRHUwbRrIQGfqwFI-gjju",
				Description: "_291Xfa3HQnqqHivTrNh2jg",
				description: "_291Xfa3HQnqqHivTrNh2jg"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/ImageWidgetEditor/ImagesList.m.less": function(e, t, n) {
			e.exports = {
				UploadedImage: "PZwy12QbggBxQOEIw4VP-",
				uploadedImage: "PZwy12QbggBxQOEIw4VP-"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/ContentTypeOption.m.less": function(e, t, n) {
			e.exports = {
				Inline: "pG_7SkvYcgmE4uIxtCHze",
				inline: "pG_7SkvYcgmE4uIxtCHze",
				disabled: "_1jyGDI9hXEuJXsWBIwsjPb"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MainMenuContent.m.less": function(e, t, n) {
			e.exports = {
				ToggleInput: "K3-dsBHW-Y5YKFuGibBk_",
				toggleInput: "K3-dsBHW-Y5YKFuGibBk_",
				ToggleRow: "_3Zbpohx03TWEyEYgTab29u",
				toggleRow: "_3Zbpohx03TWEyEYgTab29u"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemLabel.m.less": function(e, t, n) {
			e.exports = {
				TextDisplay: "_3x9H29oWjDVDp67gcYkt9Z",
				textDisplay: "_3x9H29oWjDVDp67gcYkt9Z",
				UrlDisplay: "_3FWvpVaCK9HwMyOmTt63KV",
				urlDisplay: "_3FWvpVaCK9HwMyOmTt63KV"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemList.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2wvJHUQuN4PtvvT5YCwzi0",
				container: "_2wvJHUQuN4PtvvT5YCwzi0",
				FormItem: "_1MRvLEaDAu5MfUAqrmi-qx",
				formItem: "_1MRvLEaDAu5MfUAqrmi-qx"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/AddFlair.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "_28qE1F6IGY_q7pWAz5wvix",
				controlRow: "_28qE1F6IGY_q7pWAz5wvix"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/FlairTemplateItem.m.less": function(e, t, n) {
			e.exports = {
				FlairComponent: "_3qrCCutgsaGkQH_WSIAgo_",
				flairComponent: "_3qrCCutgsaGkQH_WSIAgo_"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/MainWidgetContent.m.less": function(e, t, n) {
			e.exports = {
				FlairPaneGroup: "_1b2okMJFkxytxSd_TWVceg",
				flairPaneGroup: "_1b2okMJFkxytxSd_TWVceg",
				TertiaryButton: "_3n7giQ17WuViAcxkBNLnjE",
				tertiaryButton: "_3n7giQ17WuViAcxkBNLnjE",
				FormElementDescription: "_1hL1UA2UJUKP1vz0kVfE3c",
				formElementDescription: "_1hL1UA2UJUKP1vz0kVfE3c"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairList.m.less": function(e, t, n) {
			e.exports = {
				FlairContainer: "a45F1CPqy7mS2-xUjtMb3",
				flairContainer: "a45F1CPqy7mS2-xUjtMb3",
				InlineButton: "_3_4pdHL6NKaQw3M2M-HskE",
				inlineButton: "_3_4pdHL6NKaQw3M2M-HskE",
				TrashIcon: "_38jt9KTYDeD7_toqMrKb4Q",
				trashIcon: "_38jt9KTYDeD7_toqMrKb4Q",
				FlairWrapper: "_2seoPJGdEOYI5gO1qZejt5",
				flairWrapper: "_2seoPJGdEOYI5gO1qZejt5"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairPickerDropdown.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1B28YmpYrLKOFyiaXkroNJ",
				styledDropdown: "_1B28YmpYrLKOFyiaXkroNJ",
				DropdownTriangle: "z4IaiO5xhg8sArrPB0rh2",
				dropdownTriangle: "z4IaiO5xhg8sArrPB0rh2",
				InlineButton: "_1zjORxCWvDnkbfapgSC78n",
				inlineButton: "_1zjORxCWvDnkbfapgSC78n",
				"dropdown-open": "_2_KvhXE0vG2HvERWc0rONT",
				dropdownOpen: "_2_KvhXE0vG2HvERWc0rONT",
				DropdownContainer: "_1jGzoWFIYenwHj_vN6IjS",
				dropdownContainer: "_1jGzoWFIYenwHj_vN6IjS",
				SearchBarContainer: "_2KQzELFg9DLSnlhxcqmX86",
				searchBarContainer: "_2KQzELFg9DLSnlhxcqmX86",
				Row: "_2mWHbqvLTcf5OuPIAJfKYp",
				row: "_2mWHbqvLTcf5OuPIAJfKYp",
				disabled: "zk-Rt-m1F-f8ivbgDUXlq",
				disbaled: "_3wtM66WcUKcsBEOeqE-u1f",
				FlairTemplateItem: "dwfzZl3ND5Ze-8f-SPjX4",
				flairTemplateItem: "dwfzZl3ND5Ze-8f-SPjX4"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/ReorderFlairList.m.less": function(e, t, n) {
			e.exports = {
				Button: "_20cB9_LDYcwxw95Ot30FZV",
				button: "_20cB9_LDYcwxw95Ot30FZV",
				SecondaryButton: "_3ApBvITk8-l_3U0_2bRlLb",
				secondaryButton: "_3ApBvITk8-l_3U0_2bRlLb",
				ButtonContainer: "_2oolZlnGxG_lr54QyVdFv0",
				buttonContainer: "_2oolZlnGxG_lr54QyVdFv0"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/SubredditRulesEditor/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementDescription: "_3bJLhWXF9kMhAmjsjBsinx",
				formElementDescription: "_3bJLhWXF9kMhAmjsjBsinx"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/TextAreaEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Textarea: "_38iRZrBmGW-5D-XBxtxbez",
				textarea: "_38iRZrBmGW-5D-XBxtxbez"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/WidgetColorPicker/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_2QWNTzVWq3sPqrtKMNZkIK",
				tertiaryButton: "_2QWNTzVWq3sPqrtKMNZkIK"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/WidgetManager/SortWidgets.m.less": function(e, t, n) {
			e.exports = {
				Sortable: "p48n-9EReSpiZx7b-CTNR",
				sortable: "p48n-9EReSpiZx7b-CTNR"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/WidgetManager/WidgetLabel.m.less": function(e, t, n) {
			e.exports = {
				WidgetType: "_3p7huyDH-9CXIoKvG1Gvyq",
				widgetType: "_3p7huyDH-9CXIoKvG1Gvyq",
				WidgetTitle: "_1kJLjl0LTjW1fEhJton2Rf",
				widgetTitle: "_1kJLjl0LTjW1fEhJton2Rf"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/FileDrop/index.tsx"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = i.a.wrapped(c.a, "ImageUploadIcon", m.a), g = i.a.div("ImageIconRow", m.a), b = i.a.div("ImageUploadText", m.a), f = i.a.wrapped(l.a, "FileDrop", m.a), E = i.a.div("ContainerUploading", m.a), x = e => r.a.createElement(E, {
				className: e.className
			}, r.a.createElement(g, null, r.a.createElement(d.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(b, null, h._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), v = i.a.label("Label", m.a);
			t.b = e => r.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(v, {
					className: Object(s.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, r.a.createElement(g, null, e.icon || r.a.createElement(p, null)), r.a.createElement(b, null, e.label), r.a.createElement(o.a, {
					className: m.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/LabeledColorInput/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "_2bH6BjnwnMrVElgqYuqWds",
				formElementTitle: "_2bH6BjnwnMrVElgqYuqWds",
				ExpandLeft: "_28JVLYm2KT9m55NbUehrew",
				expandLeft: "_28JVLYm2KT9m55NbUehrew"
			}
		},
		"./src/reddit/components/StructuredStyles/LabeledColorPicker/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "_1GWvDAQEolGXiuDIc4kt4T",
				formElementTitle: "_1GWvDAQEolGXiuDIc4kt4T",
				ExpandLeft: "WkxmhYGAkRvkMDamSIr6j",
				expandLeft: "WkxmhYGAkRvkMDamSIr6j"
			}
		},
		"./src/reddit/components/StructuredStyles/LabeledVisibilityInput/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementDescription: "_3iXPYDRvLHVYv1SzA9Z3mq",
				formElementDescription: "_3iXPYDRvLHVYv1SzA9Z3mq",
				StyledLabel: "_1gpo_1VQ6ocKc79DArKexN",
				styledLabel: "_1gpo_1VQ6ocKc79DArKexN"
			}
		},
		"./src/reddit/components/StructuredStyles/NavItem/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandLeft: "_1EDg7wOGia2sgB0Tu3mQ4o",
				expandLeft: "_1EDg7wOGia2sgB0Tu3mQ4o"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, n) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				o = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = n.n(c);
			const m = s.a.wrapped(o.a, "RadioOption", u.a),
				h = s.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(m, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(h, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(l.f, null) : r.a.createElement(l.e, null), r.a.createElement(i.a, {
				altColor: e.altColor,
				label: e.label,
				description: e.description
			})), e.children)
		},
		"./src/reddit/components/StructuredStyles/ResetAllStylesButton/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_1dqCfqswm2xQ_HY1XOmdCj",
				tertiaryButton: "_1dqCfqswm2xQ_HY1XOmdCj"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3RAaeGnzROhVYLF2fmshH",
				closeIcon: "_3RAaeGnzROhVYLF2fmshH",
				ThemedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				themedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				Button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				TertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				tertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				SubFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				subFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				SecondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				secondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				DeleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				deleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				ModalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				modalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				ModalHeader: "bLHAeXh7YjdFXThswBfW4",
				modalHeader: "bLHAeXh7YjdFXThswBfW4",
				ModalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				modalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				ModalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				modalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				ModalText: "_11keK7OntunlhHWXBYXlpv",
				modalText: "_11keK7OntunlhHWXBYXlpv",
				ModalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				modalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				DisabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				disabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				ToggleInput: "_12tgaX8PtYIF1972W0C17O",
				toggleInput: "_12tgaX8PtYIF1972W0C17O",
				selected: "_3jtpy3ShATQhbYUePIhv4C"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/ToggleInput/index.m.less"),
				d = n.n(o);
			var c = e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement("input", {
					className: d.a.input,
					name: e.name,
					value: e.selected ? e.onValue : e.offValue,
					onClick: t => e.onChange(e.selected ? e.offValue : e.onValue),
					readOnly: !0
				})),
				u = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/components/StructuredStyles/StyledComponents/index.m.less"),
				p = n.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const b = i.a.wrapped(m.a, "CloseIcon", p.a),
				f = i.a.wrapped(u.a, "ThemedChevron", p.a),
				E = i.a.wrapped(l.i, "Button", p.a),
				x = i.a.wrapped(l.o, "TertiaryButton", p.a),
				v = i.a.div("SubFormTitle", p.a),
				_ = i.a.wrapped(l.l, "SecondaryButton", p.a),
				C = i.a.wrapped(x, "DeleteButton", p.a),
				y = (i.a.section("ModalBody", p.a), i.a.header("ModalHeader", p.a), i.a.h2("ModalTitle", p.a), i.a.div("ModalMain", p.a), i.a.p("ModalText", p.a), i.a.footer("ModalFooter", p.a), e => r.a.createElement(c, g({}, e, {
					className: Object(s.a)(p.a.ToggleInput, {
						[p.a.selected]: !!e.selected
					})
				})));
			i.a.div("DisabledOverlay", p.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return x
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				o = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = a.a.wrapped(r.a, "ModalInput", c.a),
				m = a.a.input("Input", c.a),
				h = a.a.wrapped(o.a, "RadioOn", c.a),
				p = a.a.wrapped(l.a, "RadioOff", c.a),
				g = a.a.wrapped(s.a, "Checkbox", c.a),
				b = a.a.wrapped(i.a, "CheckboxSelected", c.a),
				f = a.a.textarea("Textarea", c.a),
				E = a.a.label("StyledLabel", c.a),
				x = a.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				l = n.n(i);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", o({}, t, {
					className: Object(s.a)(l.a.FormNavElement, {
						[l.a.disabled]: e
					})
				}), t.children),
				c = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: a,
					disabled: i,
					...d
				}) => r.a.createElement("div", o({}, d, {
					className: Object(s.a)(l.a.DragCard, {
						[l.a.disabled]: i,
						[l.a.isDraffing]: n,
						[l.a.isOverAndCanDrop]: a && e
					}, t)
				}))
		},
		"./src/reddit/components/StructuredStyles/UploadedImage/index.m.less": function(e, t, n) {
			e.exports = {
				TrashIcon: "_369jaOfOFcc4zl3BotOKV0",
				trashIcon: "_369jaOfOFcc4zl3BotOKV0",
				BottomRow: "_3wDzoF7M_TFAMlJ37cLSkW",
				bottomRow: "_3wDzoF7M_TFAMlJ37cLSkW",
				isHiding: "_3IxVc-07C4GUtQhhxc8MI0",
				imageDisplay: "_6FUPzkTsqrEot5SsYJeha",
				ErrorText: "_3ctJAQq7nR8klJsurOmHQg",
				errorText: "_3ctJAQq7nR8klJsurOmHQg"
			}
		},
		"./src/reddit/components/StructuredStyles/UploadedImage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return x
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = n("./src/reddit/controls/ImageDisplay/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				m = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/components/StructuredStyles/UploadedImage/index.m.less"),
				p = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const b = l.a,
				f = g.a.wrapped(u.a, "TrashIcon", p.a),
				E = e => s.a.createElement("div", {
					className: Object(i.a)(p.a.BottomRow, {
						[p.a.isHiding]: e.isHiding
					})
				}, e.children),
				x = g.a.wrapped(o.c, "ErrorText", p.a);
			t.e = e => {
				const t = e.imageData && e.imageData.kind === m.b.FailedToUpload ? e.imageData.error : "",
					n = !t && e.imageData.kind === m.b.NotUploaded,
					r = e.isRequestInProgress && e.imageData.kind === m.b.TempUploaded,
					l = n || r;
				return s.a.createElement(d.a, {
					backgroundImage: e.imageData.url,
					className: Object(i.a)(e.className, p.a.imageDisplay)
				}, l && s.a.createElement(b, null), s.a.createElement(E, {
					isHiding: !!l
				}, t && s.a.createElement(x, null, a.fbt._("Something went wrong", null, {
					hk: "2xn6Fx"
				})), s.a.createElement(c.a, {
					onClick: e.onRemove
				}, s.a.createElement(f, null))))
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				h = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = n.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(l.c)({
					currentUser: d.j,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.ib,
					shouldHideNSFW: d.B
				}),
				f = Object(i.b)(b);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: i,
					...l
				} = e, d = Object(o.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.currentUserIconWrapper, i)
				}, d ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(m.b, g({}, l, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(c.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				h = n.n(m),
				p = n("./src/reddit/controls/Dropdown/row.m.less"),
				g = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					}, n = Object(l.a)(g.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(o.a, b({}, t, {
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
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(l.a)(g.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(l.a)(g.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(c.a, {
						className: g.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(l.a)(g.a.row, e, {
					[g.a.mIsInteractive]: !t.noHover,
					[g.a.mIsSelected]: t.isSelected,
					[g.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(f, b({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/flow.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				l = n("./node_modules/react-dnd/lib/index.js"),
				o = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = n("./src/reddit/helpers/dragDropContext/index.ts");
			const c = o.NativeTypes.FILE,
				u = r()(Object(l.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class m extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageDisplay/index.m.less"),
				l = n.n(i);
			t.a = ({
				backgroundImage: e,
				children: t,
				className: n
			}) => r.a.createElement("div", {
				className: Object(s.a)(l.a.imageDisplay, n),
				style: {
					backgroundImage: `url('${e}')`
				},
				children: t
			})
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!s || e.multiple) && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(s.a)(l.a.loadingIcon, t, {
					[l.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				o = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(c);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : r.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(s.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(o.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(l.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/constants/keycodes.ts");
			class i extends r.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return r.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: a
						} = this.state;
						if (t) return;
						const r = e.key === s.b.ArrowUp,
							i = e.key === s.b.ArrowDown;
						if (r || i) {
							const t = this.getValues();
							if (!t.length) return;
							const s = a ? t.indexOf(a) : 0,
								i = t[((r ? s - 1 : s + 1) + t.length) % t.length];
							n(i), this.setState({
								value: i
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (n, a) => {
						const s = 0 === a,
							i = n.props.value === t,
							l = null !== t ? i ? 0 : -1 : s ? 0 : -1;
						return r.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: l
						})
					}))
				}
			}
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Search/index.tsx"),
				l = n("./src/reddit/controls/SearchBar/index.m.less"),
				o = n.n(l);
			t.a = e => r.a.createElement("div", {
				className: Object(s.a)(o.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				className: Object(s.a)(o.a.search, {
					[o.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(s.a)(o.a.searchIconContainer, {
					[o.a.mClickable]: !!e.onSearch,
					[o.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, r.a.createElement(i.a, null)))
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/helpers/dragDropContext/index.ts"),
				i = n("./node_modules/lodash/flow.js"),
				l = n.n(i),
				o = n("./node_modules/react-dnd/lib/index.js");
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? l()(e.connectDropTarget, e.connectDragSource)(r.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var c = l()(Object(o.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(o.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class u extends r.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const a = n.values.slice(),
								r = a.indexOf(e),
								s = a.splice(r, 1)[0];
							let i = a.indexOf(t);
							return r <= i && (i += 1), a.splice(i, 0, s), this.props.onDrop(e, t, a), {
								values: a
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: a
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, this.state.values.map((e, s) => r.a.createElement(c, {
						id: e,
						key: t && t(e, s),
						index: s,
						render: a,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(s.a)(u)
		},
		"./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_1MHSX9NVr4C2QxH2dMcg4M",
				inputWrapper: "anPJr_ybRailY8NbAunl2",
				searchBar: "_3cWzf-usAKfGV1Ay7h2zM_",
				commonIconStyles: "_3UX5zf2Jh7UCwxr3e1Rrt2",
				dropdownIcon: "_15FJlGHQ_lg8wmnMsXlnes",
				iconEmpty: "_3adQsrepNO01e3sMjt2z0P",
				subredditRoundIcon: "jpIFeDw811_DQwlQEqBjm",
				userIcon: "_1Xb3_WGBJKTWZNy0MHWTsR",
				searchIcon: "_2MCEtCukiOUDUHF1PDgWwH",
				mDisabled: "I8Mbkr_v6UNBq2UjXD24r"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Z
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				l = n.n(i),
				o = n("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var c = (e, t, n, a = d) => {
					const r = {
							...d,
							...a
						},
						s = t > e ? 1 : -1;
					let i = e;
					if (e !== t) {
						for (r.leading || (i += s); i !== t;) n(i), i += s;
						r.trailing && n(i)
					} else(r.leading || r.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				h = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				p = n.n(h);
			class g extends i.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return l.a.createElement("div", {
						className: Object(o.a)(p.a.entry, this.props.disabled && p.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var b = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				f = n.n(b);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var x = ({
					className: e,
					children: t,
					title: n,
					...a
				}) => l.a.createElement("div", E({
					className: Object(o.a)(f.a.dropdownSection, e)
				}, a), n && l.a.createElement("div", {
					className: f.a.title
				}, n), t),
				v = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				C = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				S = n("./src/reddit/icons/svgs/Link/index.tsx"),
				I = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				w = n("./src/reddit/icons/svgs/Video/index.tsx"),
				D = n("./src/reddit/layout/row/Inline/index.tsx"),
				T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				O = n.n(T);
			const j = [{
				type: "text",
				Icon: I.a
			}, {
				type: "images",
				Icon: k.a
			}, {
				type: "videos",
				Icon: w.a
			}, {
				type: "links",
				Icon: S.a
			}];

			function F(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return l.a.createElement(D.a, {
					className: Object(o.a)(O.a.rowStyle, n)
				}, j.map(({
					type: e,
					Icon: n
				}) => l.a.createElement("div", {
					className: Object(o.a)(O.a.iconWrapper, {
						[O.a.mDisabled]: !t[e]
					})
				}, l.a.createElement(n, null))))
			}
			var A = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				P = n.n(A);
			const N = C.a.wrapped(y.b, "subredditIcon", P.a);

			function R(e) {
				const {
					highlight: t,
					icon: n,
					title: a,
					secondaryText: r,
					item: s
				} = e, {
					allowedPostTypes: i
				} = s;
				return l.a.createElement("div", {
					className: Object(o.a)(P.a.container, {
						[P.a.mHighlight]: t
					})
				}, n, l.a.createElement("div", {
					className: P.a.main
				}, l.a.createElement("span", {
					className: P.a.title
				}, a), r && l.a.createElement("span", {
					className: P.a.secondary
				}, r)), t && i && l.a.createElement(F, {
					allowedPostTypes: i
				}))
			}
			var B = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				L = n.n(B);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function M(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, r = Object(_.d)(t), s = void 0 !== n ? a.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [a.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, i = l.a.createElement(v.a, {
					className: Object(o.a)(L.a.profileIcon, P.a.subredditIcon)
				});
				return l.a.createElement(R, W({
					icon: i,
					title: r,
					secondaryText: s
				}, e))
			}
			var U = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				q = n.n(U);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function V(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: r,
						subscribers: s
					}
				} = e, i = Object(_.c)(r), o = void 0 !== s ? a.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [a.fbt._plural(s, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = l.a.createElement(N, {
					className: q.a.icon,
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return l.a.createElement(R, z({
					icon: d,
					title: i,
					secondaryText: o
				}, e))
			}
			var H = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				K = n.n(H);
			const G = {
				[m.a.OWN_PROFILE]: () => a.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => a.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => a.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => a.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class Z extends l.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = s()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case m.a.OWN_PROFILE:
							return M;
						default:
							return V
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(l.a.createElement(x, {
						key: "no-matches"
					}, l.a.createElement("div", {
						className: K.a.noMatches
					}, a.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (a, r, s, i) => {
						const o = [];
						c(s, i, n => {
							const a = t[n],
								r = n === e,
								s = this.getEntryContentComponent(a.type, a.name);
							s && o.push(l.a.createElement(g, {
								entryIndex: n,
								disabled: a.disabled,
								key: a.id || a.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, l.a.createElement(s, {
								highlight: r,
								item: a
							})))
						});
						const d = G[r];
						n.push(l.a.createElement(x, {
							key: r,
							title: d && d()
						}, o))
					}), l.a.createElement("div", {
						className: Object(o.a)(K.a.container, this.props.className, {
							[K.a.mIsValid]: this.props.isValid,
							[K.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			var a = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				s = n("./src/reddit/helpers/name/index.ts"),
				i = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				l = n("./src/reddit/models/User/index.ts");
			const o = (e, t, n) => {
					if (Object(s.a)(e, t.name)) {
						const {
							id: e,
							name: i
						} = t, {
							url: l,
							color: o
						} = Object(r.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(s.c)(i),
							record: {
								id: e,
								name: i,
								iconUrl: l,
								primaryColor: o,
								type: a.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n) => {
					const r = Object(l.e)(t);
					if (Object(s.a)(e, r)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(s.d)(r),
							record: {
								id: e,
								name: r,
								iconUrl: n,
								type: a.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				c = (e, t, n, a) => {
					if (t && (!n || Object(s.e)(e))) return o(e, t, a);
					if (n && (!t || Object(s.f)(e))) return d(e, n);
					if (t && n) {
						const r = o(e, t, a);
						return r.record ? r : d(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === a.a.PROFILE ? i.a.OWN_PROFILE : i.a.OTHER_SUBREDDIT, {
						...e,
						type: t
					}
				},
				m = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				h = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				p = e => m.test(e) || h.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return K
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/lodash/isEqual.js"),
				i = n.n(s),
				l = n("./src/reddit/helpers/name/index.ts");
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.isFocused = !1, this.onFocus = () => {
						this.isFocused = !0, this.props.onFocus && this.props.onFocus()
					}, this.onChange = (e, t) => {
						this.setState({
							value: e
						}, () => {
							t && (this.props.onSelect(e), this.isFocused = !1)
						})
					}, this.state = {
						value: e.value
					}
				}
				componentWillReceiveProps(e) {
					const {
						value: t
					} = this.state, {
						value: n
					} = e;
					if (!i()(t, n) && !this.isFocused) {
						t.record && !n.record && Object(l.a)(t.record.name, n.rawString) ? this.setState({
							value: {
								rawString: n.rawString,
								record: t.record
							}
						}) : this.setState({
							value: n
						})
					}
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, this.props.renderPicker({
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: this.state.value
					}))
				}
			}
			var d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				m = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				h = n("./src/reddit/actions/subredditCrosspostable.ts"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				g = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				b = n("./node_modules/lodash/debounce.js"),
				f = n.n(b),
				E = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/constants/keycodes.ts"),
				v = n("./src/reddit/constants/posts.ts"),
				_ = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/lib/lessComponent.tsx"),
				S = n("./src/reddit/components/SubredditIcon/index.tsx"),
				I = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				D = n.n(w);
			const T = k.a.wrapped(S.b, "subredditRoundIcon", D.a),
				O = k.a.wrapped(I.a, "userIcon", D.a),
				j = k.a.span("iconEmpty", D.a);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function P(e) {
				const {
					className: t,
					disabled: n,
					isActive: a,
					onDropdownClick: s,
					inputRef: i,
					record: l,
					value: o,
					...d
				} = e;
				let c = r.a.createElement(j, null);
				return a ? c = r.a.createElement(y.a, {
					name: "search",
					className: D.a.searchIcon
				}) : l && (c = l.type === v.a.SUBREDDIT ? r.a.createElement(T, l) : r.a.createElement(O, null)), r.a.createElement("div", {
					className: Object(E.a)(D.a.searchBar, t)
				}, c, r.a.createElement("div", {
					className: D.a.inputWrapper
				}, r.a.createElement("input", F({
					className: D.a.input,
					ref: i,
					disabled: n,
					placeholder: a ? C.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : C.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: o
				}, d))), r.a.createElement("div", {
					onClick: s,
					onMouseDown: A
				}, r.a.createElement(y.a, {
					name: "caret_down",
					className: D.a.dropdownIcon
				})))
			}
			var N = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				R = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				B = n.n(R);
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(g.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = f()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === _.a.OWN_PROFILE ? Object(l.d)(t.name) : Object(l.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.getPickerValue = (e = !1) => {
						const t = this.state.inputValue,
							n = this.state.focusedIndex,
							{
								items: a,
								value: r
							} = this.props;
						if (r && r.record && Object(l.a)(t, r.record.name)) return {
							...r,
							rawString: t
						};
						const s = a[n] || e && a.find(e => Object(l.a)(e.name, t));
						if (!s) return {
							rawString: t,
							record: null
						};
						const {
							type: i,
							id: o,
							name: d,
							iconUrl: c,
							primaryColor: u,
							allowedPostTypes: m
						} = s;
						return {
							rawString: t,
							record: Object(l.a)(t, d) ? {
								id: o,
								name: d,
								iconUrl: c,
								primaryColor: u,
								allowedPostTypes: m,
								type: i === _.a.OWN_PROFILE ? v.a.PROFILE : v.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							a = this.props.items[n];
						for (; a;) {
							if (!a.disabled) return n;
							n += t, a = this.props.items[n]
						}
						return n
					}, this.moveSelection = (e = !1) => {
						const {
							value: t,
							items: n
						} = this.props;
						let a = this.findNextEnabledItemIndex(e);
						a < -1 ? a = n.length - 1 : a >= n.length && (a = -1);
						const r = -1 === a ? t.rawString : n[a].name;
						r && this.setState({
							focusedIndex: a,
							inputValue: r
						})
					}, this.placeCursorAtTheEnd = () => {
						const e = this.state.inputValue.length;
						this.inputRef && this.inputRef.setSelectionRange(e, e)
					}, this.onDropdownClick = e => {
						const {
							inputRef: t
						} = this;
						this.state.isOpen ? this.setState({
							isOpen: !1
						}) : (t && t.focus(), this.setState({
							isOpen: !0
						}), this.placeCursorAtTheEnd()), e.preventDefault(), e.stopPropagation()
					}, this.onFocus = () => {
						this.props.onFocus && this.props.onFocus(), this.setState({
							isActive: !0,
							isOpen: !0
						}), this.inputRef && this.inputRef.select()
					}, this.onBlur = () => {
						this.props.selectOnBlur && this.state.isOpen ? (this.commitSelection(), this.setState({
							isActive: !1
						})) : this.setState({
							isActive: !1,
							isOpen: !1
						})
					}, this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntryFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEntrySelect = e => {
						this.selectItem(e)
					}, this.onInputChange = e => {
						this.state.isOpen || this.setState({
							isOpen: !0
						});
						const t = e.target.value;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange)
					}, this.onKeyDown = e => {
						e.which === x.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === x.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === x.a.Enter || e.which === x.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== x.a.Tab && e.preventDefault()) : e.which === x.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
					}, this.state = {
						isActive: !1,
						isOpen: !1,
						focusedIndex: 0,
						inputValue: e.value.rawString
					}
				}
				componentDidMount() {
					const {
						value: {
							rawString: e
						}
					} = this.props;
					e && this.requestAutocomplete(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						focusedIndex: -1,
						inputValue: e.value.rawString
					})
				}
				render() {
					const {
						className: e,
						disabled: t,
						isValid: n = !0,
						items: a,
						value: s
					} = this.props, {
						isActive: i,
						isOpen: l
					} = this.state, o = s.record;
					return r.a.createElement("div", {
						className: Object(E.a)(B.a.container, e, {
							[B.a.mIsActive]: i,
							[B.a.mIsInvalid]: !n
						})
					}, r.a.createElement(P, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: o
					}), l && r.a.createElement(N.a, {
						items: a,
						isValid: n,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect
					}))
				}
			}
			var W = L,
				M = n("./src/reddit/selectors/subredditAutocomplete.ts");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(u.a)(Object(c.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: a
				}) => Object(M.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: a.rawString
				}), (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: a,
						isAllDataRetrieved: r
					} = t, s = n.length ? n : e.record ? [Object(g.a)(e.record)] : [];
					return {
						items: 0 === s.length && r ? a : s,
						haveSuggestions: s.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				z = {
					onGetInitialData: e => t => t(e ? h.d() : p.e()),
					onGetSubredditAutocomplete: m.a
				};
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return r.a.createElement(W, U({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var H = Object(d.b)(q, z)(V);
			class K extends r.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => r.a.createElement(H, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return r.a.createElement(o, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/ToggleInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2uq1gh0F_Wl3Cb183l1njW"
			}
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return o
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				s = n.n(r);
			a.a.h1("heading1", s.a), a.a.h2("heading2", s.a), a.a.h3("heading3", s.a), a.a.h4("heading4", s.a);
			const i = a.a.h5("heading5", s.a),
				l = (a.a.h6("heading6", s.a), a.a.p("body1", s.a), a.a.p("body2", s.a)),
				o = (a.a.p("actionFont", s.a), a.a.p("metadata", s.a));
			a.a.p("metadata3", s.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(s);
			t.a = a.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				s = n.n(r);
			t.a = Object(a.DragDropContext)(s.a)
		},
		"./src/reddit/helpers/isValidHexColor/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const a = /^#[0-9a-f]{6}$/i,
				r = /^#?[0-9a-f]{6}$/i,
				s = 7;
			t.b = (e, t) => {
				return !!e && (t ? r : a).test(e)
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Center/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "6",
				y: "4",
				width: "8",
				height: "8"
			})))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				l = n.n(i);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(s.a)(l.a.checkbox, e)
			}, t), r.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				l = n.n(i);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", o({
				className: Object(s.a)(l.a.dropdown, {
					[l.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Fill/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "12",
				height: "12"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				l = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, l.a.grapple, {
					[l.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				l = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				l = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), r.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/PositionCenter/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "7",
				y: "7",
				width: "6",
				height: "6"
			})))
		},
		"./src/reddit/icons/svgs/PositionLeft/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "7",
				width: "6",
				height: "6"
			})))
		},
		"./src/reddit/icons/svgs/PositionRight/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1dCUcobmYK3gyzqbl9T8UR"
			}
		},
		"./src/reddit/icons/svgs/PositionRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PositionRight/index.m.less"),
				l = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, l.a.icon),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10",
				y: "7",
				width: "6",
				height: "6"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				l = n.n(i);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
				className: Object(s.a)(l.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				l = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", null, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), r.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(r);
			t.a = a.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				o = n.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(s.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: a,
					widthLeft: s,
					gutter: l,
					...c
				} = e;
				return r.a.createElement("div", d({
					className: Object(i.a)(o.a.expandRightContainer, t)
				}, c), r.a.createElement("div", {
					className: o.a.left,
					style: {
						flexBasis: s,
						height: a,
						marginRight: l
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: o.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/selectors/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = e => e.apiRequestState
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/StructuredStyles.def793a9b67772317f78.js.map