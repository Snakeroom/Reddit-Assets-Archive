// https://www.redditstatic.com/desktop2x/StructuredStyles.6bfa2f714996a24324e3.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
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
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return S
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
				v = h.normalize;
			h.normalize = e => {
				v.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
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
				S = e => {
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
				return x
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
				v = Object(s.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				x = e => async (t, s) => {
					t(p());
					const i = s(),
						o = Object(c.X)(i, {
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
					})), 0 !== Object.keys(u.attributes).length && t(Object(i.d)(Object(o.j)(u.attributes)))) : (t(v(u.error)), t(Object(l.f)({
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
				return g
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				i = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				l = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				o = e => {
					let {
						allowedPostTypes: t,
						id: n,
						isCrosspostDestination: a,
						isNsfw: r,
						name: s,
						styles: i,
						subscribersCount: o
					} = e;
					return {
						allowedPostTypes: Object(l.a)(t),
						communityIcon: i && i.icon || "",
						icon: i && i.legacyIcon && i.legacyIcon.url || "",
						id: n,
						isCrosspostDestination: a,
						isNsfw: r,
						name: s,
						primaryColor: i && i.primaryColor || "",
						subscribers: o
					}
				},
				d = n("./src/reddit/helpers/name/index.ts"),
				c = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				u = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const m = Object(a.a)(u.c),
				h = Object(a.a)(u.b),
				p = Object(a.a)(u.a),
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, a, r) => {
						let {
							gqlContext: s
						} = r;
						const l = Object(d.i)(e);
						if (!l) return;
						const u = a(),
							g = u.subredditAutocomplete;
						if (g.api.pending[l] || g.models[l]) return;
						if (Object(c.b)(u, {
								substring: l
							})) return;
						n(m({
							key: l
						}));
						const b = await i(s(), {
							query: l,
							includeNsfw: t
						});
						if (b.ok) {
							const e = b.body.data.subredditTypeahead.subreddits.edges.map(e => o(e.node));
							n(h({
								key: l,
								subreddits: e
							}))
						} else n(p({
							key: l,
							error: b.error
						}))
					}
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
				g = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					await e(r.e());
					const {
						api: c,
						ids: u
					} = t().subreddits.crosspostable;
					if (c.pending || Object.keys(u).length) return;
					const m = await ((e, t) => Object(i.a)(Object(l.a)(e, [o.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: s.ob.GET
					}))(a(), {
						sr_detail: !1
					});
					if (m.ok) {
						const n = t(),
							a = m.body && m.body.length ? m.body.map(e => Object(d.I)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(h({
							subredditIds: a
						}))
					} else e(p({
						error: m.error
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
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				blur: "_1uo2TG25LvAJS3bl-u72J4",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
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
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				cakeDayBlock: "_1vPW2g721nsu89X6ojahiX",
				muteDropdownRow: "_pTJqhLm_UAXS5SZtLPKd"
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "f", (function() {
				return k
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
				const n = Object(g.c)(e, t),
					a = Object(b.N)(e, t);
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
			const v = (e, t) => {
				const n = Object(g.c)(e, t),
					a = Object(b.N)(e, t);
				return {
					comment: n,
					isModerator: !(!a || !a.name) && !!e.moderatingSubreddits[a.name],
					subredditOrProfile: a
				}
			};
			var x = Object(s.b)(() => Object(i.a)(v, e => e))(e => r.a.createElement(h, {
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
					subreddit: b.X
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
			var S = e => {
				const t = Object(C.a)(),
					n = Object(a.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(h, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var y = e => {
				const t = Object(C.a)(),
					n = Object(a.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var k = e => {
				const t = Object(C.a)(),
					n = Object(a.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var I = Object(s.b)(() => Object(i.c)({
				subreddit: b.X
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
				subredditOrProfile: (e, t) => Object(b.Q)(e, {
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
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(b.X)(e, {
						subredditId: n
					}) : null
				}
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
				return yl
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

			function f(e) {
				return {
					pathname: e,
					state: {
						...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						title: b.e[e]()
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
						const t = b.i[e]();
						return i.fbt._("{widget type} widget appearance", [i.fbt._param("widget type", t)], {
							hk: "4uRtPH"
						});
					default:
						return b.i[e]()
				}
			}
			var v = n("./src/reddit/helpers/trackers/blade.ts"),
				x = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				_ = n("./src/reddit/components/StructuredStyles/Blade/BladeLink/index.m.less"),
				C = n.n(_);
			const S = s.a.span("FakeLink", C.a),
				y = s.a.wrapped(m.a, "StyledLink", C.a),
				k = Object(g.c)(e => {
					const t = () => e.sendEvent(Object(v.b)(e.route));
					return e.disabled ? r.a.createElement(S, {
						onClick: t
					}, e.children) : r.a.createElement(y, {
						to: e.to,
						onClick: t
					}, e.children)
				});
			var I = e => {
					const t = f(e.route),
						n = e.title || t.state.title;
					return r.a.createElement(k, {
						disabled: e.disabled,
						route: e.route,
						to: t
					}, r.a.createElement(p.b, {
						disabled: e.disabled,
						title: e.tooltipText
					}, r.a.createElement(x.a, null, n, r.a.createElement(h.g, null))))
				},
				w = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				D = n("./src/reddit/components/StructuredStyles/Blade/QuarantineNotice/index.m.less"),
				O = n.n(D);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = () => r.a.createElement("div", {
					className: O.a.container
				}, r.a.createElement(w.a, {
					className: O.a.icon
				}), T._("This community has been quarantined, some of your settings may not apply.", null, {
					hk: "3wh0B0"
				})),
				F = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				P = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/structuredStyles/index.ts"),
				A = n("./src/higherOrderComponents/asModal/index.tsx"),
				N = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				B = n("./src/reddit/controls/TextButton/index.tsx");
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class L extends r.a.Component {
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
					return r.a.createElement(N.e, null, r.a.createElement(N.i, null, r.a.createElement(x.a, null, r.a.createElement(N.q, null, W._("Reset to default styling?", null, {
						hk: "2Ztjzn"
					})), r.a.createElement(B.a, {
						onClick: this.handleClose
					}, r.a.createElement(N.b, null)))), r.a.createElement(N.l, null, r.a.createElement(N.p, null, W._("Resetting to defaults here will rollback all your past edits to when your community was first created.", null, {
						hk: "3eSsCv"
					}))), r.a.createElement(N.g, null, r.a.createElement(N.a, {
						onClick: this.handleCancel,
						"data-redditstyle": !0
					}, W._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(N.r, {
						onClick: this.handleSave,
						"data-redditstyle": !0
					}, W._("Reset", null, {
						hk: "DQKTE"
					}))))
				}
			}
			var U = Object(A.a)(L),
				M = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/components/StructuredStyles/ResetAllStylesButton/index.m.less"),
				z = n.n(q);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = s.a.wrapped(h.f, "TertiaryButton", z.a), K = Object(c.c)({
				activeModalId: M.a
			});
			var G = Object(o.b)(K, e => ({
					resetStyles: t => {
						e(Object(R.j)(t))
					},
					toggleResetAllStylesModal: () => {
						e(Object(P.i)("StructuredStyles--Modal--ResetAllStylesModal"))
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
					return r.a.createElement("div", null, t && r.a.createElement(U, {
						toggleModal: s,
						onSave: () => {
							a(), n(Object(v.g)("reset_done"))
						}
					}), r.a.createElement(H, {
						onClick: () => {
							s(), n(Object(v.g)("reset"))
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
				X = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				ee = n.n($);
			const te = Object(c.c)({
				isImportExportThemesEnabled: Q.d.importExportThemes,
				isStylingRestrictedDueToQuarantine: J.j,
				moderatorPermissions: Y.n,
				subreddit: X.X
			});
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							n = e ? `${t}modqueue` : t;
						this.props.pushUrl(n)
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(v.j)())
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
					}, r.a.createElement(F.a, null), r.a.createElement("span", {
						className: ee.a.breadcrumbTitle
					}, s)), t && r.a.createElement(j, null), l && e && r.a.createElement(Z.o, null, r.a.createElement(Z.m, null, i.fbt._("Themes", null, {
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
			var ae = Object(o.b)(te, e => ({
					pushUrl: t => e(Object(d.b)(t))
				}))(Object(g.c)(ne)),
				re = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				se = n("./src/reddit/helpers/widgets/index.tsx"),
				ie = n("./src/reddit/models/Widgets/index.ts"),
				le = n("./src/reddit/selectors/widgets.ts");

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const de = Object(c.c)({
					isStylingRestrictedDueToQuarantine: J.j,
					widgetKinds: le.j
				}),
				ce = Object(o.b)(de),
				ue = e => r.a.createElement(p.b, {
					onClick: () => e.fake ? void 0 : e.onAdd(e.widgetKind),
					disabled: e.fake,
					title: e.fake ? "Coming Soon" : void 0
				}, r.a.createElement(x.a, null, r.a.createElement(re.a, {
					label: Object(se.j)(e.widgetKind),
					description: Object(se.i)(e.widgetKind),
					fake: e.fake
				}), r.a.createElement(h.g, null)));
			class me extends r.a.Component {
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
					}), r.a.createElement(Z.m, null, e.title), r.a.createElement(Z.f, null, r.a.createElement(ue, oe({
						widgetKind: ie.i.Textarea
					}, e)), !e.widgetKinds.includes(ie.i.SubredditRules) && r.a.createElement(ue, oe({
						widgetKind: ie.i.SubredditRules
					}, e)), !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ue, oe({
						widgetKind: ie.i.Button
					}, e)), !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ue, oe({
						widgetKind: ie.i.Image
					}, e)), r.a.createElement(ue, oe({
						widgetKind: ie.i.CommunityList
					}, e)), e.widgetKinds.filter(e => e === ie.i.Calendar).length < 2 && r.a.createElement(ue, oe({
						widgetKind: ie.i.Calendar
					}, e)), e.widgetKinds.filter(e => e === ie.i.PostFlair).length < ie.f && !e.isStylingRestrictedDueToQuarantine && r.a.createElement(ue, oe({
						widgetKind: ie.i.PostFlair
					}, e)), t.showAdvanced && r.a.createElement(ue, oe({
						widgetKind: ie.i.Custom
					}, e))), !t.showAdvanced && !e.isStylingRestrictedDueToQuarantine && r.a.createElement(Z.f, null, r.a.createElement(h.f, {
						onClick: this.showAdvanced,
						"data-redditstyle": !0
					}, i.fbt._("Advanced", null, {
						hk: "3EAifd"
					}))))
				}
			}
			var he = ce(me),
				pe = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/classNames/index.ts")),
				ge = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				be = n("./src/reddit/models/StructuredStyles/index.ts");

			function fe(e) {
				const t = Object(c.c)({
					value: (e, t) => {
						const {
							draft: n
						} = e.structuredStyles, a = Object(be.h)(n);
						return Object(be.k)(a)[t.name]
					}
				});
				return Object(o.b)(t, (e, t) => ({
					onChange: n => e(Object(R.d)({
						[t.name]: n
					}))
				}))(e)
			}
			var Ee = n("./src/reddit/controls/RadioInput/index.tsx");

			function ve() {
				return fe(Ee.a)
			}

			function xe(e) {
				return t => r.a.createElement(e, t)
			}
			ve();
			const _e = ve(),
				Ce = xe(ge.a),
				Se = (ve(), xe(ge.a), ve()),
				ye = xe(ge.a),
				ke = ve(),
				Ie = xe(ge.a),
				we = (xe(ge.a), xe(ge.a));
			var De = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Center/index.tsx"),
				Te = n("./src/reddit/icons/svgs/Fill/index.tsx"),
				je = n("./src/reddit/icons/svgs/PositionCenter/index.tsx"),
				Fe = n("./src/reddit/icons/svgs/PositionLeft/index.tsx"),
				Pe = n("./src/reddit/icons/svgs/PositionRight/index.tsx"),
				Re = n("./src/reddit/icons/svgs/Tile/index.tsx"),
				Ae = n("./src/reddit/components/StructuredStyles/BackgroundPositionInput/index.m.less"),
				Ne = n.n(Ae);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const We = ve(),
				Le = xe(De.a),
				Ue = e => r.a.createElement(Le, Be({}, e, {
					className: Object(pe.a)({
						[Ne.a.selected]: e.selected,
						[Ne.a.StyledRadioOption]: !0
					})
				}), ((e, t, n) => {
					switch (e) {
						case "tiled":
							return r.a.createElement(Re.a, {
								className: Ne.a.IconStyles
							});
						case "centered":
							return "bannerPositionedImagePosition" === n ? r.a.createElement(je.a, {
								className: Ne.a.IconStyles
							}) : r.a.createElement(Oe.a, {
								className: Ne.a.IconStyles
							});
						case "cover":
							return r.a.createElement(Te.a, {
								className: Ne.a.IconStyles
							});
						case "left":
							return r.a.createElement(Fe.a, {
								className: Ne.a.IconStyles
							});
						case "right":
							return r.a.createElement(Pe.a, {
								className: Ne.a.IconStyles
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
			var Me = e => r.a.createElement(We, {
				name: e.name,
				className: Ne.a.StyledRadioInput
			}, e.values.map(t => r.a.createElement(Ue, {
				key: t,
				value: t,
				name: e.name
			})));
			var qe = e => r.a.createElement(Z.f, null, r.a.createElement(h.a, {
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
				ze = n("./src/reddit/icons/fonts/Info/index.tsx"),
				Ve = n("./src/reddit/components/StructuredStyles/Blade/InfoLink/index.m.less"),
				He = n.n(Ve);
			class Ke extends r.a.Component {
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
						className: He.a.linkContainer,
						href: this.props.href,
						onClick: this.viewHelpInfo,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(ze.a, {
						className: He.a.infoIcon
					}), this.props.children)
				}
			}
			var Ge = Object(g.c)(Ke);
			class Ze extends r.a.Component {
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
					return r.a.createElement(N.e, null, r.a.createElement(N.i, null, r.a.createElement(x.a, null, r.a.createElement(N.q, null, i.fbt._("Save changes before leaving?", null, {
						hk: "2Dr4N3"
					})), r.a.createElement(B.a, {
						onClick: this.handleClose
					}, r.a.createElement(N.b, null)))), r.a.createElement(N.l, null, r.a.createElement(N.p, null, i.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "4A9yJT"
					}))), r.a.createElement(N.g, null, r.a.createElement(N.a, {
						onClick: this.handleCancel,
						"data-redditstyle": !0
					}, i.fbt._("Discard", null, {
						hk: "1SiwLl"
					})), r.a.createElement(N.r, {
						onClick: this.handleSave,
						"data-redditstyle": !0
					}, i.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var Qe = Object(A.a)(Ze);
			var Ye = e => r.a.createElement("div", null, e.isSaveChangesModalOpen && r.a.createElement(Qe, {
				toggleModal: e.toggleSaveChangesModal,
				onSave: e.saveChanges,
				onCancel: e.revertChanges,
				withOverlay: !0
			}), r.a.createElement(F.b, {
				breadcrumbs: e.breadcrumbs,
				onNavigate: t => {
					e.hasUnsavedChanges ? e.toggleSaveChangesModal() : e.stopEditing(t)
				}
			}), r.a.createElement(Z.m, null, e.title, r.a.createElement(Ge, {
				href: e.helpCenterLink
			}, e.title)));
			var Je = Object(o.b)(() => Object(c.c)({
				value: (e, t) => Object(J.c)(e, t),
				imageUpload: (e, t) => Object(J.g)(e, t)
			}))(e => {
				let t = e.value;
				return !t && e.imageUpload && (t = e.imageUpload.url), r.a.createElement("div", null, e.render(t))
			});

			function Xe(e) {
				return r.a.createElement("div", null, e.render(e.value))
			}

			function $e() {
				return function(e) {
					const t = Object(c.c)({
						value: (e, t) => e.structuredStyles.draft[t.name]
					});
					return Object(o.b)(t)(e)
				}(Xe)
			}
			$e();
			const et = $e();
			var tt = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx");
			var nt = fe(e => r.a.createElement(tt.b, {
					name: e.name,
					label: e.label || "",
					onChange: t => {
						Array.isArray(t) ? e.onChange(t[0]) : e.onChange(t)
					},
					value: e.value
				})),
				at = n("./src/reddit/controls/ImageDisplay/index.tsx");
			var rt = e => r.a.createElement(at.a, {
				backgroundImage: e.value,
				children: e.children
			});
			var st = fe(e => r.a.createElement(B.a, {
					onClick: () => e.onChange(""),
					children: e.children
				})),
				it = n("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var lt = n("./src/reddit/models/Image/index.tsx");
			const {
				fbt: ot
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var dt, ct = (dt = e => {
					const t = e.imageUpload && e.imageUpload.kind === lt.b.FailedToUpload ? e.imageUpload.error : "",
						n = !t && !!e.imageUpload && e.imageUpload.kind === lt.b.NotUploaded,
						a = e.isRequestInProgress && !!e.imageUpload && e.imageUpload.kind === lt.b.TempUploaded,
						s = n || a;
					return r.a.createElement(rt, {
						name: e.name,
						value: e.value || ""
					}, s && r.a.createElement(it.c, null), r.a.createElement(it.a, {
						isHiding: !!s
					}, t && r.a.createElement(it.b, null, ot._("Something went wrong", null, {
						hk: "2xn6Fx"
					})), r.a.createElement(st, {
						name: e.name
					}, r.a.createElement(it.d, null))))
				}, Object(o.b)(() => Object(c.a)(J.c, J.g, (e, t) => {
					let n;
					return e && "string" == typeof e ? n = e : t && (n = t.url), {
						value: n,
						imageUpload: t
					}
				}))(dt)),
				ut = n("./src/reddit/actions/tooltip.ts"),
				mt = n("./src/reddit/constants/elementIds.ts"),
				ht = n("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx");
			const pt = e => `Custom--Color--Input--${e}`;
			class gt extends r.a.Component {
				constructor() {
					super(...arguments), this.handleColorPickerOpened = () => {
						this.props.sendEvent(Object(v.d)(this.props.name))
					}, this.handleSystemInputOpened = () => {
						this.props.sendEvent(Object(v.c)("system_color", this.props.name))
					}, this.handleChange = (e, t) => {
						this.props.onChange(e), t ? this.props.sendEvent(Object(v.c)("default_color", this.props.name)) : this.props.sendEvent(Object(v.c)("hex_color", this.props.name))
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.tooltipId || pt(e.name);
					return r.a.createElement(ht.a, {
						dropdownPosition: e.dropdownPosition,
						onToggleDropdown: e.onToggleDropdown,
						value: e.value,
						includeTransparent: e.includeTransparent,
						isDropdownOpen: e.isDropdownOpen,
						onChange: this.handleChange,
						onColorPickerOpened: this.handleColorPickerOpened,
						onSystemInputOpened: this.handleSystemInputOpened,
						containerId: mt.b,
						tooltipId: t
					})
				}
			}
			var bt = Object(g.c)(gt);
			var ft = fe(e => r.a.createElement(bt, e)),
				Et = n("./src/reddit/selectors/tooltip.ts"),
				vt = n("./src/reddit/components/StructuredStyles/LabeledColorInput/index.m.less"),
				xt = n.n(vt);
			const _t = Object(c.c)({
					activeTooltipId: Et.a
				}),
				Ct = Object(o.b)(_t, (e, t) => {
					let {
						name: n
					} = t;
					return {
						onToggleDropdown: () => e(Object(ut.h)({
							tooltipId: pt(n)
						}))
					}
				}),
				St = s.a.wrapped(Z.e, "FormElementTitle", xt.a),
				yt = s.a.wrapped(x.a, "ExpandLeft", xt.a);
			var kt = Ct(e => {
					const t = pt(e.name);
					return r.a.createElement(yt, null, r.a.createElement(St, {
						id: t,
						onClick: e.onToggleDropdown
					}, e.label), r.a.createElement(ft, {
						isDropdownOpen: e.activeTooltipId === t,
						name: e.name,
						onToggleDropdown: e.onToggleDropdown
					}))
				}),
				It = n("./node_modules/lodash/pick.js"),
				wt = n.n(It),
				Dt = n("./src/reddit/actions/exportImportStyles.ts"),
				Ot = n("./src/reddit/actions/apiRequestState.ts"),
				Tt = n("./src/reddit/models/ApiRequestState/index.ts"),
				jt = n("./src/reddit/selectors/apiRequestState.ts");
			const Ft = Object(c.c)({
				apiRequestStates: jt.a
			});
			class Pt extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						apiRequestId: Object(Tt.b)()
					}
				}
				getApiRequestFromProps(e) {
					if (this.state.apiRequestId) return e.apiRequestStates[this.state.apiRequestId]
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.getApiRequestFromProps(e);
					t && t.apiRequestStatus === Tt.a.Complete && e.onRequestComplete()
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
						if (!e || e.apiRequestStatus === Tt.a.Failed) return !1;
						return !0
					}(n))
				}
			}
			const Rt = Object(o.b)(Ft, e => ({
				releaseRequest: t => {
					e(Object(Ot.g)(t))
				}
			}))(Pt);
			var At = Rt;

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Bt = "StructuredStyles--Modal--SaveChangesModal",
				Wt = "StructuredStyles--Modal--ImportThemesModal";

			function Lt(e, t) {
				for (const n in e)
					if (e[n] !== t[n]) return !0;
				return !1
			}

			function Ut(e, t) {
				const n = Object(c.c)({
						activeModalId: M.a,
						draftStyles: (e, n) => wt()(e.structuredStyles.draft, t),
						savedStyles: (e, t) => e.structuredStyles.models[t.subredditId],
						subreddit: X.X,
						isExportPending: J.d
					}),
					a = Object(o.b)(n, (e, n) => ({
						saveChanges: (t, a) => {
							e(Object(R.k)(t, a, n.paneName, n.apiRequestId))
						},
						toggleSaveChangesModal: () => {
							e(Object(P.i)(Bt))
						},
						toggleImportThemesModal: () => {
							e(Object(P.i)(Wt))
						},
						revertChanges: () => {
							e(Object(R.c)(n.subredditId, n.paneName, t)), n.stopEditing()
						},
						revertImport: () => {
							e(Object(R.c)(n.subredditId, n.paneName, t))
						},
						exportStructuredStyles: () => {
							e(Object(Dt.d)(n.subredditId))
						},
						importStructuredStyles: t => e(Object(Dt.e)(t))
					}), (e, t, n) => ({
						...n,
						bannerHeight: e.draftStyles.bannerHeight,
						hasUnsavedChanges: Lt(e.draftStyles, e.savedStyles),
						exportStructuredStyles: t.exportStructuredStyles,
						importStructuredStyles: t.importStructuredStyles,
						isExportPending: e.isExportPending,
						isSaveChangesModalOpen: e.activeModalId === Bt,
						isImportThemesModalOpen: e.activeModalId === Wt,
						subreddit: e.subreddit,
						revertChanges: t.revertChanges,
						revertImport: t.revertImport,
						toggleSaveChangesModal: t.toggleSaveChangesModal,
						toggleImportThemesModal: t.toggleImportThemesModal,
						saveChanges: () => {
							t.saveChanges(n.subredditId, e.draftStyles)
						}
					}))(e);
				return e => r.a.createElement(At, {
					onRequestComplete: e.stopEditing
				}, (t, n, s) => r.a.createElement(a, Nt({
					apiRequestId: t,
					apiRequestState: n,
					isApiRequestInProgress: s
				}, e)))
			}
			var Mt = n("./src/reddit/models/Theme/index.ts");
			const qt = e => {
					switch (e) {
						case "small":
							return i.fbt._("Small • {size}px", [i.fbt._param("size", Mt.a[e].toLocaleString())], {
								hk: "2OECjT"
							});
						case "medium":
							return i.fbt._("Medium • {size}px", [i.fbt._param("size", Mt.a[e].toLocaleString())], {
								hk: "zwqi5"
							});
						case "large":
							return i.fbt._("Large • {size}px", [i.fbt._param("size", Mt.a[e].toLocaleString())], {
								hk: "3ch4JX"
							})
					}
				},
				zt = (e, t) => i.fbt._("Recommended upload size: {width}x{height}px", [i.fbt._param("width", e.toLocaleString()), i.fbt._param("height", t.toLocaleString())], {
					hk: "JkJ4g"
				}),
				Vt = e => r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Hover Image (optional)", null, {
					hk: "2LGckw"
				})), r.a.createElement(Je, {
					name: "secondaryBannerPositionedImage",
					render: t => t ? r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "secondaryBannerPositionedImage"
					}) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "secondaryBannerPositionedImage"
					})
				}), r.a.createElement(Z.g, null, zt(4e3, 128))),
				Ht = e => r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Mobile banner image", null, {
					hk: "4qNKwo"
				})), r.a.createElement(Z.g, null, i.fbt._("This image will override the banner background image on mobile apps. Removing the mobile banner image will display the banner background image on mobile apps.", null, {
					hk: "2FCdz6"
				})), r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "T0knK"
				})), r.a.createElement(Je, {
					name: "mobileBannerImage",
					render: t => t ? r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "mobileBannerImage"
					}) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "mobileBannerImage"
					})
				}), r.a.createElement(Z.g, null, zt(1600, 480)));
			var Kt = Ut(e => {
				const t = e.bannerHeight ? Mt.a[e.bannerHeight] : 128;
				return r.a.createElement(Z.k, null, r.a.createElement(Ye, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Height", null, {
					hk: "2A9oKY"
				})), r.a.createElement(Z.a, null, r.a.createElement(_e, {
					name: "bannerHeight"
				}, r.a.createElement(Ce, {
					value: "small",
					label: qt("small")
				}), r.a.createElement(Ce, {
					value: "medium",
					label: qt("medium")
				}), r.a.createElement(Ce, {
					value: "large",
					label: qt("large")
				})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Background", null, {
					hk: "dWBpK"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Color", null, {
						hk: "2h4C3E"
					}),
					name: "bannerBackgroundColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "1WZQOn"
				})), r.a.createElement(Je, {
					name: "bannerBackgroundImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "bannerBackgroundImage"
					}), r.a.createElement(Z.d, null, r.a.createElement(Me, {
						name: "bannerBackgroundImagePosition",
						values: ["cover", "tiled"]
					}))) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "bannerBackgroundImage"
					})
				}), r.a.createElement(Z.g, null, zt(4e3, t)))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Additional Background Image", null, {
					hk: "e3sfR"
				})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "aQ8qn"
				})), r.a.createElement(Je, {
					name: "bannerPositionedImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "bannerPositionedImage"
					}), r.a.createElement(Vt, e), ",", r.a.createElement(Z.d, null, r.a.createElement(Me, {
						name: "bannerPositionedImagePosition",
						values: ["left", "centered", "right"]
					}))) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3dgtIz"
						}),
						name: "bannerPositionedImage"
					})
				}), r.a.createElement(Z.g, null, zt(4e3, t)))), r.a.createElement(Ht, e), r.a.createElement(qe, e))
			}, ["bannerHeight", "bannerPositionedImage", "bannerPositionedImagePosition", "bannerBackgroundColor", "bannerBackgroundImage", "bannerBackgroundImagePosition", "mobileBannerImage", "secondaryBannerPositionedImage"]);
			class Gt extends r.a.Component {
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
					return r.a.createElement(N.e, null, r.a.createElement(N.i, null, r.a.createElement(x.a, null, r.a.createElement(N.q, null, e.modalTitle), r.a.createElement(B.a, {
						onClick: this.props.toggleModal
					}, r.a.createElement(N.b, null)))), r.a.createElement(N.l, null, r.a.createElement(N.p, null, e.modalText)), r.a.createElement(N.g, null, r.a.createElement(N.a, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, e.onCancelText), r.a.createElement(N.r, {
						onClick: this.onSave,
						"data-redditstyle": !0
					}, e.onSaveText)))
				}
			}
			var Zt = Object(A.a)(Gt),
				Qt = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts");
			const Yt = "ss-file-input",
				Jt = () => {};
			class Xt extends r.a.Component {
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
					const e = document.getElementById(Yt);
					e && e.click()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(Z.k, null, r.a.createElement(Ye, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, t.hasImportedStyles ? i.fbt._("Theme preview", null, {
						hk: "VrPgW"
					}) : i.fbt._("Themes", null, {
						hk: "TXVbY"
					})), r.a.createElement(Z.g, null, t.hasImportedStyles ? i.fbt._("This is a preview of your imported theme. Saving theme will overwrite existing community theme.", null, {
						hk: "27cUDS"
					}) : i.fbt._("Generate a .zip file to allow you to save your community's theme or apply other themes. A theme contains appearance settings in:", null, {
						hk: "Yq7un"
					})), e.isImportThemesModalOpen && r.a.createElement(Zt, {
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
						onCancel: t.hasImportedStyles ? Jt : this.onOpenFileInput,
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
					})), r.a.createElement(Qt.g, {
						id: "ss-file-input",
						type: "file",
						onChange: this.onFileUpload
					}))))
				}
			}
			var $t = Ut(Xt, ["menuPosition", "bannerCommunityNameFormat", "bannerShowCommunityIcon", "bannerHeight", "postVoteIcons", "submenuBackgroundStyle", "backgroundImagePosition", "bannerBackgroundImagePosition", "bannerPositionedImagePosition", "postBackgroundImagePosition", "postPlaceholderImagePosition", "menuBackgroundOpacity", "backgroundImage", "bannerBackgroundImage", "bannerPositionedImage", "communityIcon", "menuBackgroundImage", "postBackgroundImage", "postDownvoteIconActive", "postDownvoteIconInactive", "postPlaceholderImage", "postUpvoteIconActive", "postUpvoteIconInactive", "secondaryBannerPositionedImage", "bannerBackgroundColor", "bannerOverlayColor", "menuBackgroundColor", "menuLinkColorActive", "menuLinkColorInactive", "menuLinkColorHover", "mobileKeyColor", "sidebarWidgetBackgroundColor", "sidebarWidgetHeaderColor", "submenuBackgroundColor", "backgroundColor", "highlightColor", "postBackgroundColor", "postDownvoteCountColor", "postTitleColor", "postUpvoteCountColor", "primaryColor"]),
				en = n("./src/reddit/controls/Typography/index.tsx");
			var tn = Ut(e => r.a.createElement(Z.k, null, r.a.createElement(Ye, e), r.a.createElement(en.c, null, i.fbt._("These community styling options will also display in Reddit apps.", null, {
					hk: "34bghj"
				})), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Theme Colors", null, {
					hk: "10yzRc"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Base", null, {
						hk: "1qRNsV"
					}),
					name: "primaryColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Highlight", null, {
						hk: "1xLPh3"
					}),
					name: "highlightColor"
				}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Body Background", null, {
					hk: "22gpXW"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Color", null, {
						hk: "XRgby"
					}),
					name: "backgroundColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
					hk: "34rPbo"
				})), r.a.createElement(Je, {
					name: "backgroundImage",
					render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "backgroundImage"
					}), r.a.createElement(Z.d, null, r.a.createElement(Me, {
						name: "backgroundImagePosition",
						values: ["cover", "tiled", "centered"]
					}))) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "30Hu5J"
						}),
						name: "backgroundImage"
					})
				}))), r.a.createElement(qe, e)), ["primaryColor", "highlightColor", "backgroundColor", "backgroundImage", "backgroundImagePosition"]),
				nn = n("./src/reddit/actions/widgets/index.ts");
			const an = "blade_leave_menu";
			var rn = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				sn = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				ln = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				on = n("./src/reddit/components/StructuredStyles/CancelApplyButtons/index.m.less"),
				dn = n.n(on);
			const cn = s.a.wrapped(sn.a, "TrashIcon", dn.a),
				un = s.a.wrapped(h.a, "PrimaryButton", dn.a),
				mn = s.a.wrapped(h.d, "SecondaryButton", dn.a),
				hn = s.a.div("ButtonRow", dn.a);
			var pn = e => r.a.createElement(ln.a, null, e.onDelete && r.a.createElement("span", {
					onClick: e.onDelete
				}, r.a.createElement(cn, null)), r.a.createElement(hn, null, e.onCancel && e.cancelText && r.a.createElement(mn, {
					"data-redditstyle": !0,
					children: e.cancelText,
					onClick: e.onCancel,
					disabled: e.disabled
				}), e.onApply && e.applyText && r.a.createElement(un, {
					"data-redditstyle": !0,
					children: e.applyText,
					onClick: e.onApply,
					disabled: e.disabled || e.invalid
				}))),
				gn = n("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				bn = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				fn = n("./src/reddit/components/StructuredStyles/EditItem/index.m.less"),
				En = n.n(fn);
			const vn = s.a.wrapped(bn.a, "PencilIcon", En.a);
			var xn = e => r.a.createElement(p.b, {
					disabled: e.disabled,
					onClick: e.disabled ? void 0 : e.onClick
				}, r.a.createElement(x.a, null, r.a.createElement("div", null, e.children), r.a.createElement(vn, {
					className: Object(pe.a)({
						[En.a.disabled]: e.disabled
					})
				}))),
				_n = n("./src/reddit/components/StructuredStyles/LabeledColorPicker/index.m.less"),
				Cn = n.n(_n);
			const Sn = Object(c.c)({
					activeTooltipId: Et.a
				}),
				yn = Object(o.b)(Sn, (e, t) => {
					let {
						name: n
					} = t;
					return {
						onToggleDropdown: () => e(Object(ut.h)({
							tooltipId: pt(n)
						}))
					}
				}),
				kn = s.a.wrapped(Z.e, "FormElementTitle", Cn.a),
				In = s.a.wrapped(x.a, "ExpandLeft", Cn.a);
			var wn = yn(e => {
					const t = pt(e.name);
					return r.a.createElement(In, null, r.a.createElement(kn, {
						id: t,
						onClick: e.onToggleDropdown
					}, e.label), r.a.createElement(bt, {
						includeTransparent: e.includeTransparent,
						isDropdownOpen: e.activeTooltipId === t,
						name: e.name,
						onChange: e.onChange,
						onToggleDropdown: e.onToggleDropdown,
						value: e.value
					}))
				}),
				Dn = n("./src/reddit/controls/Button/index.tsx"),
				On = n("./src/reddit/components/StructuredStyles/Forms/WidgetColorPicker/index.m.less"),
				Tn = n.n(On);
			const jn = s.a.wrapped(Dn.r, "TertiaryButton", Tn.a),
				Fn = Object(c.c)({
					savedStructuredStyles: J.k
				});
			class Pn extends r.a.Component {
				constructor() {
					super(...arguments), this.onChangeBackgroundColor = e => {
						this.props.onChangeWidgetStyles({
							...this.props.widgetStyles || Object(se.g)(),
							backgroundColor: e
						})
					}, this.onChangeHeaderColor = e => {
						this.props.onChangeWidgetStyles({
							...this.props.widgetStyles || Object(se.g)(),
							headerColor: e
						})
					}, this.onClearWidgetStyles = () => {
						this.props.onChangeWidgetStyles(Object(se.g)())
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.widgetStyles || Object(se.g)(), n = !!t.backgroundColor || !!t.headerColor, a = e.savedStructuredStyles.sidebarWidgetBackgroundColor, s = e.savedStructuredStyles.sidebarWidgetHeaderColor;
					return r.a.createElement(Z.i, null, r.a.createElement(Z.a, null, r.a.createElement(wn, {
						label: i.fbt._("Title background color", null, {
							hk: "1lxRhZ"
						}),
						name: "sidebarWidgetHeaderColor",
						onChange: this.onChangeHeaderColor,
						value: t.headerColor || s || void 0
					})), r.a.createElement(Z.a, null, r.a.createElement(wn, {
						label: i.fbt._("Widget background color", null, {
							hk: "BG39P"
						}),
						name: "sidebarWidgetBackgroundColor",
						onChange: this.onChangeBackgroundColor,
						value: t.backgroundColor || a || void 0
					})), n && r.a.createElement(jn, {
						onClick: this.onClearWidgetStyles
					}, i.fbt._("Clear widget colors", null, {
						hk: "VRsbO"
					})))
				}
			}
			var Rn = Object(o.b)(Fn)(Pn);
			class An extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(N.e, null, r.a.createElement(N.i, null, r.a.createElement(x.a, null, r.a.createElement(N.q, null, i.fbt._("Leave this menu without saving?", null, {
						hk: "2VpfMT"
					})), r.a.createElement(B.a, {
						onClick: e.toggleModal
					}, r.a.createElement(N.b, null)))), r.a.createElement(N.l, null, r.a.createElement(N.p, null, i.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "3dOZum"
					}))), r.a.createElement(N.g, null, r.a.createElement(N.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(N.r, {
						onClick: e.onLeave,
						"data-redditstyle": !0
					}, i.fbt._("Leave", null, {
						hk: "2tuwHw"
					}))))
				}
			}
			var Nn = Object(A.a)(An);
			class Bn extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, e.isUnsavedChangesModalOpen && r.a.createElement(Nn, {
						onLeave: e.stopEditing,
						toggleModal: e.toggleLeaveMenuUnsavedModal,
						withOverlay: !0
					}), r.a.createElement(F.b, {
						breadcrumbs: e.breadcrumbs,
						onNavigate: () => {
							e.isUnsavedChangesModalOpen || (e.isDirty ? e.toggleLeaveMenuUnsavedModal() : e.stopEditing())
						}
					}), r.a.createElement(Z.m, null, e.title, r.a.createElement(Ge, {
						href: e.helpCenterLink
					}, e.title)))
				}
			}
			var Wn, Ln = Bn,
				Un = n("./src/reddit/controls/Sortable/index.tsx"),
				Mn = n("./src/reddit/components/StructuredStyles/FeatureToggle/index.m.less"),
				qn = n.n(Mn);
			! function(e) {
				e.Off = "0", e.On = "1"
			}(Wn || (Wn = {}));
			const zn = s.a.wrapped(Qt.h, "StyledLabel", qn.a),
				Vn = s.a.wrapped(h.h, "ToggleInput", qn.a),
				Hn = s.a.wrapped(Z.e, "FormElementTitle", qn.a);
			var Kn = e => r.a.createElement(zn, null, r.a.createElement(x.a, null, r.a.createElement(Hn, null, e.label), r.a.createElement(Vn, {
					redditStyle: !0,
					name: e.name,
					offValue: e.offValue,
					onChange: e.onChange,
					onValue: e.onValue,
					selected: e.value === e.onValue
				}))),
				Gn = n("./src/reddit/helpers/structuredStyles/validators.ts"),
				Zn = n("./src/higherOrderComponents/withImageUploads.tsx");
			var Qn = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(we, {
				value: ie.k.Text,
				label: i.fbt._("Text button", null, {
					hk: "2zD9iL"
				}),
				selected: e.value === ie.k.Text,
				onClick: () => e.onClick(ie.k.Text)
			}), r.a.createElement(we, {
				value: ie.k.Image,
				label: i.fbt._("Image button", null, {
					hk: "1sQoTL"
				}),
				selected: e.value === ie.k.Image,
				onClick: () => e.onClick(ie.k.Image)
			}));
			var Yn = e => r.a.createElement(r.a.Fragment, null, e.localImage ? r.a.createElement(it.e, {
				imageData: e.localImage,
				onRemove: e.onRemoveImage
			}) : r.a.createElement(tt.b, {
				label: i.fbt._("Drag and Drop or Upload Image", null, {
					hk: "Ru1kh"
				}),
				onChange: e.onUploadImage
			}), r.a.createElement(Z.b, null, i.fbt._(".jpeg or .png files up to 10 MB", null, {
				hk: "4tX3oZ"
			})), r.a.createElement(Z.b, null, i.fbt._("Recommended upload size: {width}x{height}px", [i.fbt._param("width", ie.b.toLocaleString()), i.fbt._param("height", ie.a.toLocaleString())], {
				hk: "4hNwLa"
			})));
			const Jn = 24;
			var Xn;
			! function(e) {
				e.Button = "button-image", e.Hover = "hover-image"
			}(Xn || (Xn = {}));
			const $n = e => {
					if (e.hoverState && e.hoverState.kind === ie.k.Text) return {
						...e.hoverState
					};
					const t = e.kind === ie.k.Text ? e : Object(se.m)();
					return {
						kind: ie.k.Text,
						color: t.color,
						text: "",
						fillColor: t.fillColor,
						textColor: t.textColor || t.color
					}
				},
				ea = e => {
					const {
						url: t,
						height: n,
						width: a
					} = e;
					return Object(lt.g)({
						url: t,
						height: n,
						width: a
					})
				};
			class ta extends r.a.Component {
				constructor(e) {
					super(e), this.updateButtonDraft = e => {
						e.kind === ie.k.Text && this.setState({
							cachedTextButton: e
						}), this.props.updateButtonDraft(e)
					}, this.updateButtonLink = e => {
						const t = e.currentTarget.value,
							n = {
								...this.props.buttonDraft
							};
						n.kind === ie.k.Text ? n.url = t : n.linkUrl = t, this.setState({
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
						if (this.props.buttonDraft.kind === ie.k.Text) {
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
							kind: ie.k.Image,
							url: t,
							height: n,
							width: a,
							linkUrl: Object(se.h)(this.props.buttonDraft),
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
							kind: ie.k.Image,
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
							a = await Object(lt.e)(n);
						this.props.uploadImage({
							imageData: a
						}), this.setState(e => ({
							localData: {
								...e.localData,
								[t]: a
							}
						}))
					}, this.handleButtonImageInput = e => this.addImage(e, Xn.Button), this.handleHoverImageInput = e => this.addImage(e, Xn.Hover), this.removeImage = e => {
						const t = {
								...this.state.localData
							},
							n = t[e];
						n && (delete t[e], this.props.cancelUpload(n), this.setState(e => ({
							localData: t
						})))
					}, this.handleRemoveButtonImage = () => this.removeImage(Xn.Button), this.handleRemoveHoverImage = () => this.removeImage(Xn.Hover), this.onSelectButtonKind = e => {
						if (e !== this.state.buttonKind) {
							if (e === ie.k.Text) {
								const e = {
									...this.state.cachedTextButton,
									hoverState: this.props.buttonDraft.hoverState
								};
								this.updateButtonDraft(e)
							} else {
								const e = this.state.localData[Xn.Button];
								e && Object(lt.h)(e) && this.setButtonImage(e)
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
						if (e === ie.k.Text) t.hoverState = {
							...this.state.hoverButtonDraft
						}, this.updateButtonDraft(t);
						else if (e === ie.k.Image) {
							const e = this.state.localData[Xn.Hover];
							e && Object(lt.h)(e) ? this.setHoverImage(e) : this.removeHoverState()
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
						const t = Object(se.h)(e);
						return Object(Gn.g)(t) === Gn.d.Valid
					}, this.isInvalidButton = () => {
						const e = this.props.buttonDraft;
						if (this.state.buttonKind !== e.kind) return !0;
						if (!e.text.length || e.text.length > Jn) return !0;
						if (this.state.buttonKind === ie.k.Image) {
							const e = this.state.localData[Xn.Button];
							if (!e || !Object(lt.h)(e)) return !0
						}
						return e.kind === ie.k.Text && !e.color || (!(!this.state.isHoverEnabled || e.hoverState && !this.isInvalidHoverState(e.hoverState)) || !this.isValidUrl(e))
					}, this.onCancel = () => {
						for (const e in this.state.localData) {
							const t = this.state.localData[e];
							this.props.cancelUpload(t)
						}
						this.props.onCancel()
					};
					const t = {};
					e.buttonDraft.kind === ie.k.Image && (t[Xn.Button] = ea(e.buttonDraft));
					const n = e.buttonDraft.hoverState;
					n && n.kind === ie.k.Image && (t[Xn.Hover] = Object(lt.g)(n));
					const a = e.buttonDraft.kind === ie.k.Text ? {
						...e.buttonDraft
					} : {
						...Object(se.m)(),
						url: e.buttonDraft.linkUrl,
						text: e.buttonDraft.text
					};
					this.state = {
						buttonKind: e.buttonDraft.kind,
						cachedTextButton: a,
						hoverButtonDraft: $n(e.buttonDraft),
						hoverKind: n ? n.kind : ie.k.Text,
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
						r[e] = s, Object(lt.h)(s) && (e === Xn.Button && this.state.buttonKind === ie.k.Image ? this.setButtonImage(s) : e === Xn.Hover && this.state.hoverKind === ie.k.Image && this.setHoverImage(s))
					}
					this.setState(e => ({
						localData: r
					}))
				}
				isInvalidHoverState(e) {
					if (e.kind === ie.k.Image) {
						const e = this.state.localData[Xn.Hover];
						if (!e || !Object(lt.h)(e)) return !0
					} else if (e.kind === ie.k.Text) {
						if (!e.color) return !0;
						if (!e.text.length || e.text.length > Jn) return !0
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
					})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Button Text", null, {
							hk: "3kjUQ1"
						}),
						value: e.buttonDraft.text || "",
						onChange: this.updateButtonText
					}), r.a.createElement(rn.a, {
						maxChars: Jn,
						text: e.buttonDraft.text
					})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Link URL", null, {
							hk: "4kbheN"
						}),
						value: Object(se.h)(e.buttonDraft),
						onChange: this.updateButtonLink
					}), !this.isValidUrl(e.buttonDraft) && r.a.createElement(Z.c, null, i.fbt._("The link provided is invalid", null, {
						hk: "2OGHRG"
					}))), r.a.createElement(Z.i, null, r.a.createElement(Qn, {
						onClick: this.onSelectButtonKind,
						value: t.buttonKind
					})), t.buttonKind === ie.k.Image ? r.a.createElement(Yn, {
						localImage: t.localData[Xn.Button] || void 0,
						onRemoveImage: this.handleRemoveButtonImage,
						onUploadImage: this.handleButtonImageInput
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.i, null, r.a.createElement(wn, {
						label: i.fbt._("Fill color", null, {
							hk: "Z9Mpb"
						}),
						name: be.a.ButtonWidgetFillColor,
						onChange: this.updateTextButtonFillColor,
						value: t.cachedTextButton.fillColor,
						includeTransparent: !0
					})), r.a.createElement(Z.i, null, r.a.createElement(wn, {
						label: i.fbt._("Stroke color", null, {
							hk: "3NkZYM"
						}),
						name: be.a.ButtonWidgetButtonColor,
						onChange: this.updateTextButtonColor,
						value: t.cachedTextButton.color
					})), r.a.createElement(Z.i, null, r.a.createElement(wn, {
						label: i.fbt._("Text color", null, {
							hk: "2Lc7J4"
						}),
						name: be.a.ButtonWidgetTextColor,
						onChange: this.updateTextButtonTextColor,
						value: t.cachedTextButton.textColor || t.cachedTextButton.color
					}))), r.a.createElement(Z.i, null, r.a.createElement(Kn, {
						name: "widgetButtonHoverToggle",
						value: t.isHoverEnabled ? Wn.On : Wn.Off,
						onChange: this.toggleHover,
						onValue: Wn.On,
						offValue: Wn.Off,
						label: i.fbt._("Hover treatment", null, {
							hk: "1to7PM"
						})
					})), t.isHoverEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.i, null, r.a.createElement(Qn, {
						onClick: this.onSelectHoverKind,
						value: t.hoverKind
					})), t.hoverKind === ie.k.Image ? r.a.createElement(Yn, {
						localImage: t.localData[Xn.Hover] || void 0,
						onRemoveImage: this.handleRemoveHoverImage,
						onUploadImage: this.handleHoverImageInput
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Button Text", null, {
							hk: "3kjUQ1"
						}),
						value: t.hoverButtonDraft.text || "",
						onChange: this.updateHoverDraftText
					}), r.a.createElement(rn.a, {
						maxChars: Jn,
						text: t.hoverButtonDraft.text || ""
					})), r.a.createElement(Z.i, null, r.a.createElement(wn, {
						label: i.fbt._("Fill color", null, {
							hk: "Z9Mpb"
						}),
						name: be.a.ButtonWidgetHoverFillColor,
						onChange: this.updateHoverDraftFillColor,
						value: t.hoverButtonDraft.fillColor,
						includeTransparent: !0
					})), r.a.createElement(Z.i, null, r.a.createElement(wn, {
						label: i.fbt._("Stroke color", null, {
							hk: "3NkZYM"
						}),
						name: be.a.ButtonWidgetHoverColor,
						onChange: this.updateHoverDraftColor,
						value: t.hoverButtonDraft.color
					})), r.a.createElement(Z.i, null, r.a.createElement(wn, {
						label: i.fbt._("Text color", null, {
							hk: "2Lc7J4"
						}),
						name: be.a.ButtonWidgetHoverTextColor,
						onChange: this.updateHoverDraftTextColor,
						value: t.hoverButtonDraft.textColor || t.cachedTextButton.textColor || t.cachedTextButton.color
					})))), r.a.createElement(pn, {
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
			var na = Object(Zn.a)(ta, nn.a),
				aa = n("./node_modules/lodash/isEqual.js"),
				ra = n.n(aa);
			class sa extends r.a.Component {
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
					t && t.apiRequestStatus === Tt.a.Complete && (this.afterApiRequestCompleted(), this.setState(this.getInitialState(e.widget))), this.props.widget !== e.widget && this.setState({
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
					ra()(this.props.widget, n) || this.props.dirtyEditor()
				}
				isRequestInProgress() {
					const e = this.getApiRequestFromProps(this.props);
					return !(!e || e.apiRequestStatus === Tt.a.Failed)
				}
				hasApiErrors() {
					const e = this.getApiRequestFromProps(this.props);
					return !!e && e.apiRequestStatus === Tt.a.Failed
				}
				handleCancelEditing() {
					this.props.stopEditing()
				}
				startApiRequestThen(e) {
					if (this.isRequestInProgress()) return;
					const t = Object(Tt.b)();
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
					return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement("div", null, "This widget is not implemented"))
				}
			}
			var ia = sa;
			var la = class extends ia {},
				oa = n("./src/reddit/components/StructuredStyles/Forms/ButtonWidgetEditor/index.m.less"),
				da = n.n(oa);
			const ca = 10,
				ua = 250,
				ma = 30,
				ha = s.a.wrapped(h.f, "TertiaryButton", da.a);
			var pa;
			! function(e) {
				e[e.None = 0] = "None", e[e.Add = 1] = "Add", e[e.Edit = 2] = "Edit", e[e.Sort = 3] = "Sort"
			}(pa || (pa = {}));
			var ga = class extends la {
					constructor() {
						super(...arguments), this.handleApplyUpdates = () => {
							this.endUpdate(this.state.widget.buttons)
						}, this.handleCancelUpdates = () => {
							this.endUpdate()
						}, this.handleDeleteButton = () => {
							if (this.state.editMode !== pa.Edit) return;
							const e = [...this.state.widget.buttons];
							e.splice(this.state.editIndex, 1), this.endUpdate(e)
						}, this.handleAddButton = () => {
							const {
								widget: e
							} = this.state, t = Object(se.m)(), n = e.buttons.slice();
							n.push(t), this.setState({
								widget: {
									...e,
									buttons: n
								},
								cachedButtons: e.buttons,
								editIndex: n.length - 1,
								editMode: pa.Add
							})
						}, this.handleEditButton = e => {
							this.setState({
								cachedButtons: this.state.widget.buttons,
								editIndex: e,
								editMode: pa.Edit
							})
						}, this.handleStartSorting = () => {
							this.setState({
								cachedButtons: this.state.widget.buttons,
								editIndex: -1,
								editMode: pa.Sort
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
							editMode: pa.None
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > ma) && (!(e.description && e.description.length > ua) && !!e.buttons.length)
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
							editMode: pa.None
						})
					}
					renderEditableButtonList() {
						return this.state.widget.buttons.map((e, t) => this.state.editMode === pa.Edit && t === this.state.editIndex ? r.a.createElement(Z.f, null, r.a.createElement(na, {
							buttonDraft: e,
							isAdding: !1,
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates,
							onDelete: this.handleDeleteButton,
							updateButtonDraft: this.handleUpdateButton
						})) : this.state.editMode !== pa.Add || this.state.editIndex !== t ? r.a.createElement(xn, {
							onClick: () => this.handleEditButton(t),
							disabled: this.state.editMode === pa.Edit || this.state.editMode === pa.Add
						}, e.text) : void 0)
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t, a = t.editMode !== pa.None;
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.f, null, r.a.createElement(Z.l, null, r.a.createElement(Z.i, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(Qt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(rn.a, {
							maxChars: ma,
							text: n.shortName
						})), r.a.createElement(Rn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						})), r.a.createElement(Z.l, null, r.a.createElement(Z.m, null, i.fbt._("Button widget content", null, {
							hk: "2JiORB"
						})), r.a.createElement(Z.i, null, r.a.createElement(Z.h, null, i.fbt._("Description text", null, {
							hk: "uVkda"
						})), r.a.createElement(Qt.i, {
							value: n.description || "",
							onChange: this.handleTextChange
						}), r.a.createElement(rn.a, {
							maxChars: ua,
							text: n.description || ""
						}))), r.a.createElement(Z.m, null, i.fbt._("Buttons", null, {
							hk: "3ChEwG"
						}), r.a.createElement(Z.b, null, i.fbt._("Remaining buttons: {numRemaining}", [i.fbt._param("numRemaining", (ca - n.buttons.length).toLocaleString())], {
							hk: "1vDj6p"
						}))), r.a.createElement(Z.f, null, r.a.createElement(ha, {
							disabled: a || n.buttons.length >= ca,
							onClick: this.handleAddButton,
							"data-redditstyle": !0
						}, i.fbt._("Add Button", null, {
							hk: "3I4Pk3"
						})), r.a.createElement(ha, {
							disabled: a || n.buttons.length < 2,
							onClick: this.handleStartSorting,
							"data-redditstyle": !0
						}, i.fbt._("Reorder", null, {
							hk: "2RHv35"
						}))), t.editMode === pa.Sort && r.a.createElement(Un.a, {
							values: n.buttons,
							render: (e, t, n, a, s) => r.a.createElement(gn.a, {
								isDragging: n,
								isOver: a,
								canDrop: s
							}, e.text),
							onDrop: (e, t, n) => this.handleUpdateSort(n)
						}) || this.renderEditableButtonList()), t.editMode === pa.Add && r.a.createElement(na, {
							isAdding: !0,
							buttonDraft: n.buttons[t.editIndex],
							onApply: this.handleApplyUpdates,
							onCancel: this.handleCancelUpdates,
							updateButtonDraft: this.handleUpdateButton
						}), t.editMode === pa.Sort && r.a.createElement(Z.i, null, r.a.createElement(pn, {
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
				ba = n("./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/eventDataToggle.m.less"),
				fa = n.n(ba);
			const Ea = s.a.input("Input", fa.a),
				va = s.a.wrapped(ln.a, "ExpandRight", fa.a);
			var xa = e => r.a.createElement(Qt.h, null, r.a.createElement(va, null, e.selected ? r.a.createElement(Qt.b, null) : r.a.createElement(Qt.a, null), r.a.createElement("div", null, r.a.createElement(Ea, {
				name: e.name,
				onClick: t => e.onChange(e.name),
				readOnly: !0
			}), r.a.createElement(re.a, {
				label: e.label
			}))));
			var _a = class extends ia {
					getInitialState(e) {
						return {
							widget: e
						}
					}
				},
				Ca = n("./src/reddit/components/StructuredStyles/Forms/CalendarWidgetEditor/index.m.less"),
				Sa = n.n(Ca);
			const ya = 30,
				ka = 6,
				Ia = 50,
				wa = s.a.wrapped(Z.c, "FormElementError", Sa.a),
				Da = s.a.wrapped(Qt.c, "NumEventsInput", Sa.a),
				Oa = s.a.div("InputLabel", Sa.a);
			var Ta = class extends _a {
					constructor() {
						super(...arguments), this.isValidGoogleCalendarId = () => this.state.widget.googleCalendarId.match(".+@.{2,}") && this.state.widget.googleCalendarId.length >= ka, this.onTitleChange = e => {
							this.setWidgetState({
								shortName: e.currentTarget.value
							})
						}, this.onGoogleCalendarIdChange = e => {
							this.setWidgetState({
								googleCalendarId: e.currentTarget.value
							})
						}, this.onChangeNumEvents = e => {
							const t = parseInt(e.currentTarget.value, 10);
							t > Ia || this.setWidgetState({
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
						return !(!t || !this.isValidGoogleCalendarId()) && (!(!e.configuration.numEvents || e.configuration.numEvents < 1 || e.configuration.numEvents > Ia) && (t.trim().length > 0 && t.length <= ya))
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
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.l, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(Qt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: t.shortName,
							onChange: this.onTitleChange
						}), r.a.createElement(rn.a, {
							maxChars: ya,
							text: t.shortName
						}), r.a.createElement(Rn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: t.styles
						})), r.a.createElement(Z.f, null, r.a.createElement(Z.m, null, i.fbt._("Calendar widget content", null, {
							hk: "MnblC"
						})), r.a.createElement(Z.l, null, r.a.createElement(Z.h, null, i.fbt._("Google Calendar ID", null, {
							hk: "22Qunx"
						})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
							placeholder: i.fbt._("Google Calendar ID", null, {
								hk: "2OHkdZ"
							}),
							value: t.googleCalendarId,
							onChange: this.onGoogleCalendarIdChange
						}), !this.isValidGoogleCalendarId() && t.googleCalendarId.length > 1 && r.a.createElement(wa, null, i.fbt._("Invalid Google Calendar ID", null, {
							hk: "175iVQ"
						}))), r.a.createElement(Z.h, null, i.fbt._("Number of events displayed", null, {
							hk: "2Xb0e8"
						})), r.a.createElement(Z.i, null, r.a.createElement(Da, {
							value: t.configuration.numEvents ? t.configuration.numEvents.toString() : "",
							onChange: this.onChangeNumEvents
						}), r.a.createElement(Oa, null, i.fbt._("Events", null, {
							hk: "1abn4d"
						})), r.a.createElement(Z.b, null, i.fbt._("Max {number} events", [i.fbt._param("number", Ia.toLocaleString())], {
							hk: "3Kn7Wm"
						})))), r.a.createElement(Z.m, null, i.fbt._("Event data included", null, {
							hk: "2FkLQR"
						})), r.a.createElement(Z.i, null, r.a.createElement(xa, {
							name: "showDate",
							label: i.fbt._("Date", null, {
								hk: "1RScWn"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showDate
						})), r.a.createElement(Z.i, null, r.a.createElement(xa, {
							name: "showTime",
							label: i.fbt._("Time", null, {
								hk: "1Nay4c"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showTime
						})), r.a.createElement(Z.i, null, r.a.createElement(xa, {
							name: "showLocation",
							label: i.fbt._("Location", null, {
								hk: "2tmlcT"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showLocation
						})), r.a.createElement(Z.i, null, r.a.createElement(xa, {
							name: "showDescription",
							label: i.fbt._("Description", null, {
								hk: "X3d2w"
							}),
							onChange: this.onToggleConfiguration,
							selected: t.configuration.showDescription
						}))), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(wa, null, i.fbt._("Something went wrong", null, {
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
				ja = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				Fa = n("./src/reddit/layout/row/Inline/index.tsx"),
				Pa = n("./src/reddit/components/StructuredStyles/Forms/CommunityListEditor/index.m.less"),
				Ra = n.n(Pa);
			const Aa = 30,
				Na = 10;
			var Ba;
			! function(e) {
				e[e.None = 0] = "None", e[e.Add = 1] = "Add", e[e.Sort = 2] = "Sort"
			}(Ba || (Ba = {}));
			var Wa = class extends la {
					constructor() {
						super(...arguments), this.handleCancelUpdates = () => {
							this.endUpdate()
						}, this.handleApplyNewCommunity = () => {
							const e = this.getNewCommunityName();
							this.state.editMode === Ba.Add && e && this.endUpdate(this.state.widget.data)
						}, this.handleApplySort = () => {
							this.state.editMode === Ba.Sort && this.endUpdate(this.state.widget.data)
						}, this.handleDeleteCommunity = e => {
							const t = [...this.state.widget.data];
							t.splice(e, 1), this.endUpdate(t)
						}, this.handleStartSorting = () => {
							this.setState({
								cachedData: this.state.widget.data,
								editMode: Ba.Sort
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
								editMode: Ba.Add,
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
							editMode: Ba.None,
							widget: e
						}
					}
					isValidWidget() {
						const {
							widget: e
						} = this.state;
						return !(!e.shortName.trim().length || e.shortName.length > Aa) && !!e.data.length
					}
					getNewCommunityName() {
						const {
							widget: e
						} = this.state;
						return this.state.editMode !== Ba.Add ? "" : e.data[e.data.length - 1].name || ""
					}
					endUpdate(e) {
						this.setState({
							cachedData: void 0,
							editMode: Ba.None,
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
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "2dy5YB"
						})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(rn.a, {
							maxChars: Aa,
							text: n.shortName
						})), r.a.createElement(Z.i, null, r.a.createElement(Rn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: n.styles
						})), r.a.createElement(Z.m, null, i.fbt._("Communities", null, {
							hk: "1PIYRk"
						}), r.a.createElement(Z.b, null, i.fbt._("Remaining communities: {numRemaining}", [i.fbt._param("numRemaining", (Na - n.data.length).toLocaleString())], {
							hk: "2i6FQz"
						}))), t.editMode === Ba.Sort ? r.a.createElement("div", null, r.a.createElement(Un.a, {
							values: n.data,
							render: (e, t, n, a, s) => r.a.createElement(gn.a, {
								isDragging: n,
								isOver: a,
								canDrop: s
							}, e.name),
							onDrop: (e, t, n) => this.handleUpdateSort(n)
						}), r.a.createElement(pn, {
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
							className: Ra.a.textButton,
							onClick: e => this.handleDeleteCommunity(t)
						}, r.a.createElement(sn.a, {
							className: Ra.a.trashIcon
						}))))), n.data.length < Na && t.editMode !== Ba.Sort && r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Add New Community", null, {
							hk: "1tXrnU"
						})), r.a.createElement(Fa.a, {
							className: Ra.a.controlRow
						}, r.a.createElement(ja.a, {
							className: Ra.a.subredditPicker,
							onSelect: this.handlePickCommunity,
							value: {
								rawString: a,
								record: null
							}
						})), r.a.createElement(pn, {
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
							disabled: t.editMode === Ba.Sort || n.data.length < 2,
							onClick: this.handleStartSorting,
							"data-redditstyle": !0
						}, i.fbt._("Reorder Communities", null, {
							hk: "3q63NN"
						}))), this.hasApiErrors() && r.a.createElement(Z.f, null, r.a.createElement(Z.c, null, i.fbt._("Something went wrong", null, {
							hk: "1h26Ih"
						}))), r.a.createElement(Z.f, null, r.a.createElement(h.a, {
							disabled: t.editMode === Ba.Sort || !this.isValidWidget() || this.isRequestInProgress(),
							onClick: this.handleSaveWidget,
							"data-redditstyle": !0
						}, i.fbt._("Save", null, {
							hk: "4yMsMq"
						})), r.a.createElement(h.d, {
							disabled: t.editMode === Ba.Sort,
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
				La = n("./src/lib/copyToClipboard/index.ts"),
				Ua = n("./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/ExperimentalFeatureNotice.m.less"),
				Ma = n.n(Ua);
			const {
				fbt: qa
			} = n("./node_modules/fbt/lib/FbtPublic.js"), za = s.a.wrapped(ze.a, "Info", Ma.a), Va = s.a.wrapped(Z.f, "FormGroup", Ma.a), Ha = s.a.wrapped(Z.h, "FormGroupTitle", Ma.a), Ka = s.a.wrapped(Z.g, "FormGroupDescription", Ma.a);
			var Ga = () => r.a.createElement(Va, null, r.a.createElement(ln.a, null, r.a.createElement(za, null), r.a.createElement("div", null, r.a.createElement(Ha, null, qa._("This is an experimental feature", null, {
				hk: "4pZ6q0"
			})), r.a.createElement(Ka, null, qa._("Custom widgets don't display on mobile devices. Customizations can break at any time", null, {
				hk: "2rzQms"
			})))));
			var Za = class extends ia {},
				Qa = n("./src/reddit/components/StructuredStyles/Forms/CustomWidgetEditor/index.m.less"),
				Ya = n.n(Qa);
			const Ja = 30,
				Xa = 1e4,
				$a = 1e5,
				er = 50,
				tr = 500,
				nr = 5,
				ar = 20,
				rr = /^[a-z0-9\-]+$/i,
				sr = s.a.wrapped(Qt.i, "Textarea", Ya.a),
				ir = s.a.wrapped(Z.f, "FormGroup", Ya.a),
				lr = s.a.wrapped(Z.f, "UnsavedImageFormContainer", Ya.a),
				or = s.a.wrapped(Z.b, "FormElementDescription", Ya.a),
				dr = s.a.wrapped(Z.c, "FormElementError", Ya.a),
				cr = s.a.a("CopyLink", Ya.a);
			var ur = Object(Zn.a)(class extends Za {
					constructor() {
						super(...arguments), this.addImage = async e => {
							if (null !== this.state.unsavedImage || this.state.localData.length >= nr) return;
							const t = await Object(lt.e)(e);
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
							t && (Object(La.a)(`url(${t})`) ? this.setState({
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
						if (t && t.apiRequestStatus === Tt.a.Failed) {
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
							const e = Object(lt.g)(r);
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
						for (const l of this.state.localData) Object(lt.h)(l) && i.push({
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
						return !(!e.shortName.trim().length || e.shortName.length > Ja) && (!(!e.text || e.text.length > Xa) && (!(!e.css || e.css.length > $a) && (!!this.isHeightValid() && !this.state.localData.some(e => !Object(lt.h)(e)))))
					}
					isHeightValid() {
						const {
							widget: e
						} = this.state;
						return !(!e.height || e.height < er || e.height > tr)
					}
					isUnsavedImageNameValid() {
						return null != this.state.unsavedName && this.state.unsavedName.length > 0 && this.state.unsavedName.length <= ar && !(this.state.unsavedName in this.state.imageIdsByName) && rr.test(this.state.unsavedName)
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
						return this.errors && this.errors[e] ? r.a.createElement(dr, null, this.errors[e]) : null
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Ga, null), r.a.createElement(ir, null, r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "48e5IQ"
						})), r.a.createElement(Qt.c, {
							placeholder: i.fbt._("Widget title", null, {
								hk: "18IO5C"
							}),
							value: n.shortName,
							onChange: this.handleTitleChange
						}), r.a.createElement(rn.a, {
							maxChars: Ja,
							text: n.shortName
						}), this.renderError("short_name")), r.a.createElement(ir, null, r.a.createElement(Z.h, null, i.fbt._("Markdown", null, {
							hk: "rWPwa"
						})), r.a.createElement(sr, {
							value: n.text,
							onChange: this.handleTextChange,
							placeholder: i.fbt._("Markdown Content", null, {
								hk: "1dNGSZ"
							})
						}), r.a.createElement(rn.a, {
							maxChars: Xa,
							text: n.text
						}), this.renderError("text")), r.a.createElement(ir, null, r.a.createElement(Z.h, null, i.fbt._("CSS", null, {
							hk: "3U4QvJ"
						})), r.a.createElement(sr, {
							value: n.css,
							onChange: this.handleCssChange,
							placeholder: i.fbt._("Css Styling", null, {
								hk: "hwb5A"
							}),
							autoCapitalize: "off",
							autoComplete: "off",
							autoCorrect: "off",
							spellCheck: !1
						}), r.a.createElement(rn.a, {
							maxChars: $a,
							text: n.css
						}), this.renderError("css")), r.a.createElement(ir, null, r.a.createElement(Z.h, null, i.fbt._("Height", null, {
							hk: "1DvI33"
						})), r.a.createElement(Qt.c, {
							placeholder: i.fbt._("PIXELS", null, {
								hk: "8zaKk"
							}),
							onChange: this.handleHeightChange,
							value: n.height ? n.height.toString() : ""
						}), n.height && !this.isHeightValid() ? r.a.createElement(dr, null, i.fbt._("Height must be between {min} and {max} pixels", [i.fbt._param("min", er.toLocaleString()), i.fbt._param("max", tr.toLocaleString())], {
							hk: "4lHZCj"
						})) : r.a.createElement(or, null, i.fbt._("Between {min} and {max} pixels", [i.fbt._param("min", er.toLocaleString()), i.fbt._param("max", tr.toLocaleString())], {
							hk: "4FcOt1"
						})), this.renderError("height")), r.a.createElement(ir, null, r.a.createElement(Z.h, null, i.fbt._("Image", null, {
							hk: "QVluN"
						})), r.a.createElement(Z.g, null, `${t.localData.length}/${nr} ${i.fbt._("Images",null,{hk:"3Mu4Pg"})}`), t.localData.map((e, n) => r.a.createElement(Z.a, {
							key: e.id
						}, r.a.createElement(it.e, {
							imageData: e,
							onRemove: () => this.removeImage(n)
						}), r.a.createElement(or, null, this.getImageTagByIndex(n), r.a.createElement(cr, {
							onClick: () => this.copyImageNameToClipboard(n)
						}, t.copiedImageIndex === n ? i.fbt._("copied!", null, {
							hk: "482rGm"
						}) : i.fbt._("copy", null, {
							hk: "CiHen"
						})))))), t.localData.length < nr && r.a.createElement(lr, null, r.a.createElement(ir, null, r.a.createElement(Z.a, null, null == t.unsavedImage ? r.a.createElement(tt.b, {
							label: i.fbt._("Drag and Drop or Upload Image", null, {
								hk: "3VsEoT"
							}),
							onChange: this.handleImageInput
						}) : r.a.createElement(it.e, {
							imageData: t.unsavedImage,
							onRemove: () => this.removeImage(null)
						}), r.a.createElement(or, null, i.fbt._(".jpeg or .png files up to 10 MB", null, {
							hk: "3JJDCb"
						})))), r.a.createElement(ir, null, r.a.createElement(Z.h, null, i.fbt._("Name of image", null, {
							hk: "QZ7Le"
						})), r.a.createElement(Z.a, null, r.a.createElement(Qt.c, {
							placeholder: i.fbt._("Required", null, {
								hk: "1PL06Q"
							}),
							value: t.unsavedName || "",
							onChange: this.handleUnsavedNameChange,
							maxLength: ar
						}), r.a.createElement(or, null, i.fbt._("Names should be unique consisting of alphanumeric and ‘-’ only", null, {
							hk: "TV1Ev"
						})))), r.a.createElement(ir, null, r.a.createElement(pn, {
							applyText: i.fbt._("Add", null, {
								hk: "2wi3d4"
							}),
							cancelText: i.fbt._("Cancel", null, {
								hk: "2TSLl5"
							}),
							invalid: !this.isUnsavedImageValid(),
							onApply: this.handleAddUnsavedImageData,
							onCancel: this.handleClearUnsavedImageData
						}))), this.hasApiErrors() && r.a.createElement(ir, null, r.a.createElement(dr, null, i.fbt._("Something went wrong", null, {
							hk: "3OW5jo"
						}))), r.a.createElement(ir, null, r.a.createElement(h.a, {
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
						}))), e.widget.id && r.a.createElement(ir, null, r.a.createElement(h.c, {
							onClick: this.handleDeleteWidget,
							disabled: this.isRequestInProgress(),
							"data-redditstyle": !0
						}, i.fbt._("Delete Widget", null, {
							hk: "14cOwx"
						}))))
					}
				}, nn.a),
				mr = n("./src/reddit/contexts/PageLayer/index.tsx"),
				hr = n("./src/reddit/icons/svgs/OutboundLink/index.tsx");
			var pr = class extends ia {
					getInitialState(e) {
						return {
							widget: e
						}
					}
				},
				gr = n("./src/reddit/components/IdCard/index.m.less"),
				br = n.n(gr),
				fr = n("./src/reddit/components/StructuredStyles/Forms/IdCardWidgetEditor/index.m.less"),
				Er = n.n(fr);
			const vr = 30,
				xr = e => r.a.createElement(p.b, {
					className: Object(pe.a)(Er.a.NavLink, e.className)
				}, r.a.createElement("a", {
					href: e.url,
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.a.createElement(x.a, null, e.title, r.a.createElement(hr.a, {
					className: Object(pe.a)(Er.a.OutboundLinkIcon, e.className)
				}))));
			var _r = Object(mr.v)()(Object(o.b)(() => Object(c.c)({
				subreddit: mr.s
			}))(class extends pr {
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
					return !(e.currentlyViewingText.length > vr) && !(e.subscribersText.length > vr)
				}
				render() {
					const {
						props: e
					} = this, {
						widget: t
					} = this.state;
					return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Joined community", null, {
						hk: "3fEZvt"
					})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Members", null, {
							hk: "dKX5k"
						}),
						onChange: this.handleSubscribersTextChange,
						value: t.subscribersText
					}), r.a.createElement(rn.a, {
						text: t.subscribersText,
						maxChars: vr
					})), r.a.createElement(Z.h, null, i.fbt._("Currently viewing community", null, {
						hk: "4hOBbP"
					})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Online", null, {
							hk: "3rgbxH"
						}),
						onChange: this.handleCurrentlyViewingTextChange,
						value: t.currentlyViewingText
					}), r.a.createElement(rn.a, {
						text: t.currentlyViewingText,
						maxChars: vr
					}))), r.a.createElement(Z.h, null, i.fbt._("Community Description", null, {
						hk: "30o9mQ"
					})), r.a.createElement("div", {
						className: Object(pe.a)(Er.a.Description, br.a.Description)
					}, t.description), r.a.createElement(Z.h, null, r.a.createElement(xr, {
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
			class Cr extends r.a.Component {
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
					this.urlValidation = e ? Object(Gn.g)(e) : null
				}
				render() {
					const {
						state: e
					} = this;
					return r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						onChange: this.handleLinkChange,
						placeholder: i.fbt._("Link URL", null, {
							hk: "3GuyMx"
						}),
						value: e.linkUrl
					}), this.urlValidation === Gn.d.Invalid && r.a.createElement(Z.c, null, i.fbt._("The link provided is invalid", null, {
						hk: "2g9TvW"
					})), this.urlValidation === Gn.d.TooShort && r.a.createElement(Z.c, null, i.fbt._("The link provided is too short", null, {
						hk: "2fEWI1"
					})))
				}
			}
			var Sr = Cr,
				yr = n("./src/reddit/components/StructuredStyles/Forms/ImageWidgetEditor/ImagesList.m.less"),
				kr = n.n(yr);
			const Ir = s.a.wrapped(it.e, "UploadedImage", kr.a);
			var wr = e => r.a.createElement("div", null, e.imageData.map((t, n) => r.a.createElement(r.a.Fragment, {
				key: t.id
			}, r.a.createElement(Ir, {
				imageData: t,
				isRequestInProgress: e.isRequestInProgress,
				onRemove: () => e.onRemove(n)
			}), r.a.createElement(Sr, {
				imageIndex: n,
				onHandleLinkChange: e.onHandleLinkChange,
				linkUrl: e.imageLinkUrls[t.id]
			}))));
			const Dr = 10,
				Or = 30;
			var Tr = Object(Zn.a)(class extends Za {
					constructor() {
						super(...arguments), this.handleTitleChange = e => {
							const t = e.currentTarget.value;
							this.setWidgetState({
								shortName: t
							})
						}, this.handleSingleImageInput = async e => {
							if (this.state.localData.length >= Dr) return;
							const t = await Object(lt.e)(e);
							this.props.uploadImage({
								imageData: t
							}), this.setState(e => ({
								localData: [...e.localData, t]
							}))
						}, this.handleMultiImageInput = e => {
							let t = e;
							e.length + this.state.localData.length > Dr && (t = e.slice(0, Dr - this.state.localData.length));
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
							const e = Object(lt.g)(n);
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
							data: this.state.localData.filter(lt.h).map(e => {
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
						return !!e.shortName.trim().length && (!(e.shortName.length > Or) && (!!this.state.localData.length && (!this.state.localData.some(e => !Object(lt.h)(e)) && !this.state.urlValidationError)))
					}
					render() {
						const {
							props: e,
							state: t
						} = this, {
							widget: n
						} = t;
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.f, null, r.a.createElement(Z.a, null, r.a.createElement(Z.g, null, i.fbt._("Uploading multiple images to this widget will load a random image on each page refresh.", null, {
							hk: "157MBS"
						}))), r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
							hk: "3Ka9sg"
						})), r.a.createElement(Z.g, null, i.fbt._("The title of your widget and background styles will not appear in the sidebar.", null, {
							hk: "1wSGS2"
						})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
							placeholder: i.fbt._("WIDGET TITLE", null, {
								hk: "3EvX03"
							}),
							onChange: this.handleTitleChange,
							value: n.shortName
						}), r.a.createElement(rn.a, {
							text: n.shortName,
							maxChars: Or
						}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Image", null, {
							hk: "3mDsg3"
						})), r.a.createElement(Z.g, null, `${t.localData.length}/${Dr} ${i.fbt._("Images",null,{hk:"3Mu4Pg"})}`), r.a.createElement(wr, {
							isRequestInProgress: this.isRequestInProgress(),
							imageData: t.localData,
							imageLinkUrls: t.localImageLinkUrls,
							onHandleLinkChange: this.handleLinkChange,
							onRemove: this.removeImage
						}), t.localData.length < Dr && r.a.createElement(tt.b, {
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
				}, nn.a),
				jr = n("./node_modules/lodash/noop.js"),
				Fr = n.n(jr),
				Pr = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemLabel.m.less"),
				Rr = n.n(Pr);
			const Ar = s.a.wrapped(Z.e, "TextDisplay", Rr.a),
				Nr = s.a.div("UrlDisplay", Rr.a);
			var Br = e => r.a.createElement("div", null, r.a.createElement(Ar, null, e.text), r.a.createElement(Nr, null, e.url)),
				Wr = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MenuItemList.m.less"),
				Lr = n.n(Wr);
			const Ur = s.a.div("Container", Lr.a),
				Mr = s.a.wrapped(Z.i, "FormItem", Lr.a);
			var qr = e => r.a.createElement(Ur, null, e.menuItems.map((e, t) => r.a.createElement(Mr, {
					key: t
				}, r.a.createElement(Br, {
					text: e.text,
					url: e.url
				})))),
				zr = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/MainMenuContent.m.less"),
				Vr = n.n(zr);
			const Hr = "wikiMenuItemToggle",
				Kr = "/wiki/index",
				Gr = s.a.wrapped(h.h, "ToggleInput", Vr.a),
				Zr = s.a.wrapped(p.b, "ToggleRow", Vr.a),
				Qr = 5;
			class Yr extends r.a.Component {
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
						}), this.props.sendEvent(Object(v.k)(e))
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
					}, r.a.createElement(Ln, e), r.a.createElement(en.c, null, i.fbt._("These community styling options will also display in Reddit apps.", null, {
						hk: "2gl4Jd"
					})), r.a.createElement(Z.f, null, r.a.createElement(p.b, {
						disabled: !0
					}, i.fbt._("Posts", null, {
						hk: "rLU2h"
					})), r.a.createElement(Zr, {
						onClick: this.toggleWiki
					}, r.a.createElement(x.a, null, r.a.createElement(Fa.a, null, r.a.createElement(Br, {
						text: i.fbt._("Wiki", null, {
							hk: "2s4Mqc"
						}),
						url: Kr
					})), r.a.createElement(Fa.a, null, r.a.createElement(Gr, {
						name: Hr,
						offValue: "false",
						onChange: Fr.a,
						onValue: "true",
						redditStyle: !0,
						selected: e.widget.showWiki
					})))), e.widget.data.map((e, t) => r.a.createElement(xn, {
						key: e.text,
						onClick: () => this.editMenuItem(t)
					}, r.a.createElement(Br, {
						text: e.text,
						url: e.url
					}), e.children && r.a.createElement(qr, {
						menuItems: e.children
					})))), r.a.createElement(Z.f, null, r.a.createElement(h.f, {
						"data-redditstyle": !0,
						onClick: this.handleAdd,
						disabled: e.widget.data.length >= Qr
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
					}, r.a.createElement(Ln, e), r.a.createElement(p.b, {
						disabled: !0
					}, i.fbt._("Posts", null, {
						hk: "rLU2h"
					})), r.a.createElement(Un.a, {
						values: t.draftSort,
						render: (e, t, n, a, s) => r.a.createElement(gn.a, {
							isDragging: n,
							isOver: a,
							canDrop: s
						}, e.text),
						onDrop: this.reorderDraft
					}), r.a.createElement(Z.f, null, r.a.createElement(pn, {
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
			var Jr = Yr;
			class Xr extends r.a.Component {
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
					this.isALinkForm ? (this.urlValidation = Object(Gn.g)(e.menuItemUrl), this.textValidation = Object(Gn.f)(e.menuItemText.trim())) : this.textValidation = Object(Gn.f)(e.menuItemText.trim())
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
					return this.isALinkForm ? this.textValidation === Gn.c.Valid && this.urlValidation === Gn.d.Valid : this.textValidation === Gn.c.Valid
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return this.validate(t), r.a.createElement("div", null, r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						disabled: e.disabled,
						value: t.menuItemText,
						onChange: this.handleMenuItemTextChange,
						placeholder: i.fbt._("Tab Title", null, {
							hk: "15DNN5"
						})
					}), r.a.createElement(rn.a, {
						text: t.menuItemText.trim(),
						maxChars: Gn.b
					})), this.isALinkForm && r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						disabled: e.disabled,
						value: t.menuItemUrl,
						onChange: this.handleMenuItemUrlChange,
						placeholder: i.fbt._("URL", null, {
							hk: "4laiIR"
						})
					}), this.urlValidation === Gn.d.Invalid && r.a.createElement(Z.c, null, i.fbt._("The link provided is invalid", null, {
						hk: "2PaAmp"
					}))), this.hasAnyButtons && r.a.createElement(Z.i, null, r.a.createElement(pn, {
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
			var $r = Xr,
				es = n("./src/reddit/components/StructuredStyles/Forms/MenuWidgetEditor/ContentTypeOption.m.less"),
				ts = n.n(es);
			const ns = s.a.wrapped(Fa.a, "Inline", ts.a);
			var as = e => r.a.createElement(Z.a, null, r.a.createElement(ns, {
				className: Object(pe.a)({
					[ts.a.disabled]: e.disabled
				}),
				onClick: e.disabled ? void 0 : e.onClick
			}, e.selected ? r.a.createElement(Qt.f, null) : r.a.createElement(Qt.e, null), r.a.createElement(Z.e, null, e.children)));
			const rs = 10;
			var ss;
			! function(e) {
				e[e.None = 0] = "None", e[e.Link = 1] = "Link", e[e.Submenu = 2] = "Submenu"
			}(ss || (ss = {}));
			const is = e => "url" in e ? ss.Link : ss.Submenu;
			class ls extends r.a.Component {
				constructor(e) {
					super(e), this.setFormSelectionToLink = () => this.setState({
						formSelection: ss.Link
					}), this.setFormSelectionToTab = () => this.setState({
						formSelection: ss.Submenu
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
							case ss.Link:
								return e.sendEvent(Object(v.f)("menu_links_top_save")), e.onSave({
									text: t.menuItemText,
									url: t.menuItemUrl
								});
							case ss.Submenu:
								return e.sendEvent(Object(v.f)("menu_links_sub_save")), e.onSave({
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
						formSelection: this.isANewMenuItemForm ? ss.None : is(e.editingItem),
						menuItemText: e.editingItem ? e.editingItem.text : "",
						menuItemUrl: e.editingItem ? e.editingItem.url : "",
						menuItemChildren: e.editingItem && e.editingItem.children || [],
						isNewSubmenuEditorOpen: this.isANewMenuItemForm,
						isEditSubmenuEditorOpen: !1,
						reordering: !1
					}, this.validate(this.state)
				}
				validate(e) {
					this.isALinkForm ? (this.urlValidation = Object(Gn.g)(e.menuItemUrl), this.textValidation = Object(Gn.f)(e.menuItemText)) : this.isASubmenuForm && (this.textValidation = Object(Gn.f)(e.menuItemText), this.childrenValidation = Object(Gn.e)(e.menuItemChildren))
				}
				get isANewMenuItemForm() {
					return !this.props.editingItem
				}
				get isALinkForm() {
					return this.state.formSelection === ss.Link
				}
				get isASubmenuForm() {
					return this.state.formSelection === ss.Submenu
				}
				get isEditing() {
					return this.state.reordering || this.state.isEditSubmenuEditorOpen
				}
				get isValid() {
					return this.isALinkForm ? this.textValidation === Gn.c.Valid && this.urlValidation === Gn.d.Valid : !!this.isASubmenuForm && (this.childrenValidation === Gn.a.Valid && this.textValidation === Gn.c.Valid)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return this.validate(t), r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, this.isANewMenuItemForm ? i.fbt._("Tab type", null, {
						hk: "274wIj"
					}) : this.isALinkForm ? i.fbt._("Link Tab", null, {
						hk: "19Feoy"
					}) : i.fbt._("Submenu Tab", null, {
						hk: "2kX9s8"
					})), "numRemaining" in e && r.a.createElement(Z.g, null, i.fbt._("Remaining Tabs: {numRemainig}", [i.fbt._param("numRemainig", (e.numRemaining || 0).toLocaleString())], {
						hk: "3hiwvD"
					})), this.isANewMenuItemForm && r.a.createElement(as, {
						disabled: this.isEditing,
						selected: t.formSelection === ss.Link,
						onClick: this.setFormSelectionToLink
					}, i.fbt._("Create link tab", null, {
						hk: "30Id6K"
					})), this.isALinkForm && r.a.createElement($r, {
						disabled: this.isEditing,
						onChange: this.updateContent,
						text: t.menuItemText,
						url: t.menuItemUrl,
						showUrlField: !0
					}), this.isANewMenuItemForm && r.a.createElement(as, {
						disabled: this.isEditing,
						selected: t.formSelection === ss.Submenu,
						onClick: this.setFormSelectionToTab
					}, i.fbt._("Create submenu tab", null, {
						hk: "2daEB9"
					})), this.isASubmenuForm && r.a.createElement($r, {
						disabled: this.isEditing,
						text: t.menuItemText,
						onChange: this.updateContent
					})), this.isASubmenuForm && r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Submenu Links", null, {
						hk: "4o5RVv"
					})), r.a.createElement(Z.g, null, i.fbt._("Remaining Links : {numLinks}", [i.fbt._param("numLinks", (rs - t.menuItemChildren.length).toLocaleString())], {
						hk: "3uF6sz"
					})), t.reordering ? this.renderSortableChildren() : this.renderEditableChildren(), this.renderNewSubmenuLinkEditor(), !this.isANewMenuItemForm && t.menuItemChildren.length > 1 && r.a.createElement(h.f, {
						"data-redditstyle": !0,
						disabled: this.isEditing,
						onClick: this.startReorderingChildren
					}, i.fbt._("Reorder Submenu Links", null, {
						hk: "3lTd5l"
					}))), this.renderErrors(), r.a.createElement(Z.f, null, r.a.createElement(pn, {
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
					if (!e || e.apiRequestStatus !== Tt.a.Failed) return;
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
					})), r.a.createElement($r, {
						onApply: this.applyChildEditAtIndex(n),
						onCancel: this.closeEditSubmenuEditor,
						onDelete: this.deleteChildContentAtIndex(n),
						showUrlField: !0,
						text: t.text,
						url: t.url
					})) : r.a.createElement(xn, {
						onClick: this.openEditSubmenuEditorAtIndex(n),
						disabled: e.isEditSubmenuEditorOpen
					}, r.a.createElement(Br, {
						text: t.text,
						url: t.url
					})))
				}
				renderSortableChildren() {
					const {
						state: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(Un.a, {
						values: e.draftChildren,
						render: (e, t, n, a, s) => r.a.createElement(gn.a, {
							isDragging: n,
							isOver: a,
							canDrop: s
						}, e.text),
						onDrop: this.reorderDraft
					}), r.a.createElement(Z.f, null, r.a.createElement(pn, {
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
					if (!(e.menuItemChildren.length >= rs || this.isEditing)) return 0 === e.menuItemChildren.length ? r.a.createElement(Z.i, null, r.a.createElement($r, {
						disabled: this.isEditing,
						onApply: this.addNewMenuItem,
						showUrlField: !0
					})) : e.isNewSubmenuEditorOpen ? r.a.createElement(Z.i, null, r.a.createElement(h.e, null, i.fbt._("Add Submenu Link", null, {
						hk: "2np0tD"
					})), r.a.createElement($r, {
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
			var os = Object(g.c)(ls);

			function ds() {
				return (ds = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const cs = 5;
			var us;
			! function(e) {
				e[e.None = 0] = "None", e[e.Edit = 1] = "Edit", e[e.Add = 2] = "Add"
			}(us || (us = {}));
			const ms = e => ({
				relativePosition: 0,
				title: e
			});
			var hs = Object(g.c)(class extends Za {
				constructor() {
					super(...arguments), this.goToAddMenuContent = () => this.setState(e => ({
						editMode: us.Add
					})), this.goToEditMenuContent = e => this.setState(t => ({
						editMode: us.Edit,
						editIndex: e
					})), this.returnToMainMenu = () => {
						this.setState(e => ({
							editMode: us.None,
							editIndex: -1
						})), ra()(this.props.widget, this.state.widget) || this.setWidgetState({
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
						editMode: us.None,
						editIndex: -1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getApiRequestFromProps(e);
					switch (t.editMode) {
						case us.None:
							return r.a.createElement(Jr, ds({}, e, {
								onAdd: this.goToAddMenuContent,
								onEdit: this.goToEditMenuContent,
								onSave: this.saveMenuWidget,
								onUpdate: this.handleUpdate
							}));
						case us.Edit:
							return r.a.createElement(os, ds({}, e, {
								apiState: n,
								breadcrumbs: [ms(e.title)],
								editingItem: e.widget.data[t.editIndex],
								onDelete: this.deleteMenuItemAtCurrentIndex,
								onSave: this.editMenuItemAtCurrentIndex,
								onUpdate: this.handleUpdate,
								stopEditing: this.returnToMainMenu,
								title: i.fbt._("Edit Tab", null, {
									hk: "41sQC6"
								})
							}));
						case us.Add:
							return r.a.createElement(os, ds({}, e, {
								apiState: n,
								breadcrumbs: [ms(e.title)],
								numRemaining: cs - e.widget.data.length,
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
			var ps = class extends _a {
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
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Rn, {
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
				gs = n("./src/reddit/selectors/postFlair.ts"),
				bs = n("./src/higherOrderComponents/asTooltip.tsx"),
				fs = n("./src/reddit/components/Flair/index.tsx"),
				Es = n("./src/reddit/helpers/flair.ts"),
				vs = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/FlairTemplateItem.m.less"),
				xs = n.n(vs);
			const _s = s.a.wrapped(fs.c, "FlairComponent", xs.a);
			var Cs = e => {
					const t = Object(Es.c)(e.flairTemplate);
					return r.a.createElement(Fa.a, null, r.a.createElement(_s, {
						flair: t,
						forceSmallEmojis: !0
					}))
				},
				Ss = n("./src/reddit/constants/keycodes.ts"),
				ys = n("./src/reddit/controls/Dropdown/index.tsx"),
				ks = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Is = n("./src/reddit/controls/SearchBar/index.tsx"),
				ws = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ds = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Os = n("./src/reddit/models/Flair/index.ts"),
				Ts = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairPickerDropdown.m.less"),
				js = n.n(Ts);
			const Fs = "PostFlairWidget--FlairPicker",
				Ps = Object(c.c)({
					isOpen: Object(Et.b)(Fs)
				}),
				Rs = Object(o.b)(Ps, e => ({
					onOpenDropdown: () => {
						e(Object(ut.h)({
							tooltipId: Fs
						}))
					}
				})),
				As = s.a.wrapped(ys.a, "StyledDropdown", js.a),
				Ns = s.a.wrapped(ws.b, "DropdownTriangle", js.a),
				Bs = Object(bs.a)(As),
				Ws = s.a.wrapped(Ds.a, "InlineButton", js.a),
				Ls = s.a.div("DropdownContainer", js.a),
				Us = s.a.div("SearchBarContainer", js.a),
				Ms = s.a.wrapped(ks.b, "Row", js.a),
				qs = s.a.wrapped(Cs, "FlairTemplateItem", js.a);
			class zs extends r.a.Component {
				constructor(e) {
					super(e), this.searchRef = null, this.handleFlairSelection = (e, t, n) => {
						e || (this.setState({
							selectedFlairText: n,
							search: ""
						}), this.props.handleSelectFlair(t))
					}, this.handleKeyDown = e => {
						e.stopPropagation(), e.which === Ss.a.Escape && e.preventDefault()
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
					} = this.props, s = document.getElementById(mt.b);
					return r.a.createElement(Ls, {
						className: t,
						id: Fs,
						onKeyDown: this.handleKeyDown
					}, r.a.createElement(Ws, {
						"aria-expanded": n,
						"aria-haspopup": !0,
						className: Object(pe.a)(t, {
							"dropdown-open": n
						}),
						onClick: this.onOpenDropdown
					}, r.a.createElement(Us, null, r.a.createElement(Is.a, {
						autoFocus: !0,
						onTextChange: this.onTextChange,
						placeholder: i.fbt._("Search flair", null, {
							hk: "2Y1dbr"
						}),
						innerRef: this.setSearchRef,
						value: e.search || e.selectedFlairText
					})), r.a.createElement(Ns, null)), r.a.createElement(Bs, {
						isOpen: n,
						tooltipId: Fs,
						noFocus: !0,
						container: s
					}, Object.keys(this.filteredPostFlair).map(e => {
						const t = a.order.includes(e);
						return r.a.createElement(Ms, {
							className: Object(pe.a)({
								[js.a.disabled]: t
							}),
							key: this.filteredPostFlair[e].id,
							noIcon: !0,
							onClick: () => this.handleFlairSelection(t, this.filteredPostFlair[e].id, this.filteredPostFlair[e].text),
							"data-redditstyle": !0
						}, r.a.createElement(qs, {
							flairTemplate: this.filteredPostFlair[e],
							flairTemplateType: Os.d.LinkFlair
						}))
					})))
				}
			}
			var Vs = Rs(zs),
				Hs = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/AddFlair.m.less"),
				Ks = n.n(Hs);
			const Gs = s.a.wrapped(Fa.a, "ControlRow", Ks.a);
			class Zs extends r.a.Component {
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
					return r.a.createElement(Z.k, null, r.a.createElement(Ln, this.props), r.a.createElement(Gs, null, r.a.createElement(Vs, {
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
			var Qs = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/PostFlairList.m.less"),
				Ys = n.n(Qs);
			const Js = s.a.div("FlairContainer", Ys.a),
				Xs = s.a.wrapped(Ds.a, "InlineButton", Ys.a),
				$s = s.a.wrapped(sn.a, "TrashIcon", Ys.a),
				ei = s.a.div("FlairWrapper", Ys.a);

			function ti(e) {
				const {
					flairTemplates: t,
					handleRemoveFlair: n,
					order: a
				} = e;
				return r.a.createElement(Js, null, a.map(e => r.a.createElement(ei, null, r.a.createElement(Cs, {
					flairTemplate: t[e],
					flairTemplateType: Os.d.LinkFlair
				}), r.a.createElement(Xs, {
					onClick: () => n(e)
				}, r.a.createElement($s, null)))))
			}
			var ni = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/ReorderFlairList.m.less"),
				ai = n.n(ni);
			const ri = s.a.wrapped(h.a, "Button", ai.a),
				si = s.a.wrapped(h.d, "SecondaryButton", ai.a),
				ii = s.a.div("ButtonContainer", ai.a),
				li = e => e;

			function oi(e) {
				const {
					flairTemplates: t,
					handleCancelOrderEditing: n,
					handleSaveOrder: a,
					handleUpdateSort: s,
					order: l
				} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(ii, null, r.a.createElement(si, {
					onClick: n,
					"data-redditstyle": !0
				}, i.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(ri, {
					onClick: a,
					"data-redditstyle": !0
				}, i.fbt._("Save", null, {
					hk: "4yMsMq"
				}))), r.a.createElement(Un.a, {
					values: l,
					getReactKey: li,
					render: (e, n, a, s, i) => r.a.createElement(gn.a, {
						key: e,
						isDragging: a,
						isOver: s,
						canDrop: i
					}, r.a.createElement(Cs, {
						flairTemplate: t[e],
						flairTemplateType: Os.d.LinkFlair
					})),
					onDrop: (e, t, n) => s(n)
				}))
			}
			var di = n("./src/reddit/components/StructuredStyles/Forms/PostFlairWidgetEditor/MainWidgetContent.m.less"),
				ci = n.n(di);
			const ui = 30,
				mi = 50,
				hi = s.a.wrapped(Z.f, "FlairPaneGroup", ci.a),
				pi = s.a.wrapped(h.f, "TertiaryButton", ci.a),
				gi = s.a.wrapped(Z.b, "FormElementDescription", ci.a);
			class bi extends r.a.Component {
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
					return r.a.createElement(Z.k, null, r.a.createElement(Ln, this.props), r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
						hk: "25M9MA"
					})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Title text", null, {
							hk: "14qr0C"
						}),
						onChange: o,
						value: f.shortName
					}), r.a.createElement(rn.a, {
						text: f.shortName,
						maxChars: ui
					})), r.a.createElement(Rn, {
						onChangeWidgetStyles: m,
						subredditId: b,
						widgetStyles: f.styles
					}), r.a.createElement(Z.h, null, i.fbt._("Layout", null, {
						hk: "26WqfC"
					})), r.a.createElement(ge.a, {
						value: ie.g.List,
						label: i.fbt._("Single column", null, {
							hk: "usClX"
						}),
						selected: f.display === ie.g.List,
						onClick: () => a(ie.g.List)
					}), r.a.createElement(ge.a, {
						value: ie.g.Cloud,
						label: i.fbt._("Word cloud", null, {
							hk: "6Iqk1"
						}),
						selected: f.display === ie.g.Cloud,
						onClick: () => a(ie.g.Cloud)
					}), r.a.createElement(hi, null, r.a.createElement(pi, {
						"data-redditstyle": !0,
						disabled: f.order.length >= mi,
						onClick: u
					}, i.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})), r.a.createElement(pi, {
						"data-redditstyle": !0,
						disabled: f.order.length <= 1,
						onClick: p
					}, i.fbt._("Reorder", null, {
						hk: "1tQe48"
					}))), r.a.createElement(gi, null, i.fbt._("Remaining flairs: {count}", [i.fbt._param("count", mi - f.order.length)], {
						hk: "3HYvA5"
					})), e === Ei.Reorder && r.a.createElement(oi, {
						flairTemplates: E,
						handleCancelOrderEditing: this.handleCancelOrderEditing,
						handleSaveOrder: this.handleSaveOrder,
						handleUpdateSort: this.handleUpdateSort,
						order: this.state.order
					}), e === Ei.None && r.a.createElement(r.a.Fragment, null, r.a.createElement(ti, {
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

			function fi() {
				return (fi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ei;
			! function(e) {
				e.Add = "Add", e.None = "None", e.Reorder = "Reorder"
			}(Ei || (Ei = {}));
			const vi = Object(o.b)(() => Object(c.c)({
					postFlairData: gs.d,
					subredditName: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(X.X)(e, {
							subredditId: n
						}).name
					}
				})),
				xi = e => ({
					relativePosition: 0,
					title: e
				});
			var _i = vi(class extends Za {
					constructor() {
						super(...arguments), this.returnToMainMenu = () => this.setState(e => ({
							editMode: Ei.None,
							editIndex: -1
						})), this.goToAddFlair = () => this.setState(e => ({
							editMode: Ei.Add
						})), this.goToReorderFlair = () => this.setState(e => ({
							editMode: Ei.Reorder
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
							editMode: Ei.None,
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
							case Ei.None:
							case Ei.Reorder:
								return r.a.createElement(bi, fi({}, e, {
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
							case Ei.Add:
								return r.a.createElement(Zs, fi({}, e, {
									afterApiRequestCompleted: this.afterApiRequestCompleted,
									breadcrumbs: [xi(e.title)],
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
				Ci = n("./src/reddit/components/StructuredStyles/Forms/SubredditRulesEditor/index.m.less"),
				Si = n.n(Ci);
			const yi = s.a.wrapped(Z.b, "FormElementDescription", Si.a),
				ki = Object(c.c)({
					rulesWidget: le.h,
					subreddit: X.X
				});
			var Ii = Object(o.b)(ki, e => ({
					refreshRulesWidget: (t, n) => e(Object(nn.f)(t, n))
				}))(class extends pr {
					constructor() {
						super(...arguments), this.handleChangeDisplay = e => {
							this.setWidgetState({
								display: e
							})
						}, this.handleRefreshWidget = e => {
							if (this.state.apiRequestId) return;
							const t = this.props.subreddit.id,
								n = Object(Tt.b)();
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
							t && t.apiRequestStatus !== Tt.a.Pending && (e.rulesWidget && e.onReloadWithWidget ? e.onReloadWithWidget(e.rulesWidget) : this.props.releaseRequest(this.state.apiRequestId))
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
						return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), this.hasRules() && r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(Z.l, null, r.a.createElement(Rn, {
							onChangeWidgetStyles: this.onChangeWidgetStyles,
							subredditId: e.subredditId,
							widgetStyles: t.styles
						})), r.a.createElement(Z.m, null, i.fbt._("Subreddit rules widget content", null, {
							hk: "3Z2vrU"
						})), r.a.createElement(Z.h, null, i.fbt._("Layout", null, {
							hk: "1NEyoR"
						})), r.a.createElement(Z.a, null, r.a.createElement(Ee.a, {
							name: "rulesEditor",
							onChange: this.handleChangeDisplay,
							value: t.display
						}, r.a.createElement(ge.a, {
							value: "full",
							label: i.fbt._("Fully display rules and description", null, {
								hk: "1kdHUJ"
							})
						}), r.a.createElement(ge.a, {
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
						})))), !this.hasRules() && r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(yi, null, i.fbt._("Before you can display your community's rules, you'll have to create them", null, {
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
						})), r.a.createElement(yi, null, i.fbt._("Refresh this pane to customize how your rules will be displayed in this widget", null, {
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
				wi = n("./src/reddit/components/StructuredStyles/Forms/TextAreaEditor/index.m.less"),
				Di = n.n(wi);
			const Oi = 30,
				Ti = 1e4,
				ji = s.a.wrapped(Qt.i, "Textarea", Di.a);
			var Fi = class extends _a {
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
					return !(!e || !t) && (e.trim().length > 0 && e.length <= Oi && t.trim().length > 0 && t.length <= Ti)
				}
				render() {
					const {
						props: e
					} = this, {
						widget: t
					} = this.state;
					return r.a.createElement(Z.k, null, r.a.createElement(Ln, e), r.a.createElement(Z.h, null, i.fbt._("Widget title", null, {
						hk: "3Ka9sg"
					})), r.a.createElement(Z.i, null, r.a.createElement(Qt.c, {
						placeholder: i.fbt._("Widget title", null, {
							hk: "Dk5mv"
						}),
						value: t.shortName,
						onChange: this.onTitleChange
					}), r.a.createElement(rn.a, {
						maxChars: Oi,
						text: t.shortName
					})), r.a.createElement(Z.i, null, r.a.createElement(Rn, {
						onChangeWidgetStyles: this.onChangeWidgetStyles,
						subredditId: e.subredditId,
						widgetStyles: t.styles
					})), r.a.createElement(Z.m, null, i.fbt._("Textarea widget content", null, {
						hk: "3p83zo"
					})), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Text", null, {
						hk: "1qBGzd"
					})), r.a.createElement(ji, {
						value: t.text,
						onChange: this.onTextChange
					}), r.a.createElement(rn.a, {
						maxChars: Ti,
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
			const Pi = e => r.a.createElement("div", null, `Unknown widget kind "${e.widget.kind}"`),
				Ri = e => {
					switch (e.kind) {
						case "textarea":
							return Fi;
						case "button":
							return ga;
						case "subreddit-rules":
							return Ii;
						case "image":
							return Tr;
						case "community-list":
							return Wa;
						case "calendar":
							return Ta;
						case "id-card":
							return _r;
						case "menu":
							return hs;
						case "custom":
							return ur;
						case "moderators":
							return ps;
						case "post-flair":
							return _i;
						default:
							return Pi
					}
				};
			class Ai extends r.a.Component {
				componentWillMount() {
					this.props.startEditing(this.props.widget)
				}
				render() {
					const {
						props: e
					} = this, t = Ri(e.widget);
					return r.a.createElement(t, e)
				}
			}
			var Ni = function(e) {
				const t = Object(c.c)({
					apiRequestStates: jt.a,
					isDirty: J.h,
					isUnsavedChangesModalOpen: Object(M.b)(an),
					widget: (e, t) => Object(le.k)(e, t)
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
						const r = n.id ? nn.e : nn.c;
						e(r(t.subredditId, n, a))
					},
					closeModal: () => {
						e(Object(P.g)(an))
					},
					deleteWidget: (n, a) => {
						n.id && (e(nn.d(t.subredditId, n, a)), t.sendEventWithName && t.sendEventWithName("delete_widget", {
							widgetKind: n.kind
						}))
					},
					releaseRequest: t => {
						e(Object(Ot.g)(t))
					},
					stopEditing: () => {
						e(R.m()), t.stopEditing(), e(Object(P.g)(an))
					},
					startEditing: t => {
						e(nn.b({
							widgetId: t.id
						}))
					},
					toggleLeaveMenuUnsavedModal: () => {
						e(Object(P.i)(an))
					},
					dirtyEditor: () => {
						e(R.b())
					},
					undirtyEditor: () => {
						e(R.m())
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
			}(Ai);
			const Bi = Object(c.c)({
				widgetId: le.e
			});
			var Wi = Object(o.b)(Bi)(e => e.widgetId ? r.a.createElement(Ni, {
				subredditId: e.subredditId,
				title: e.title,
				breadcrumbs: e.breadcrumbs,
				stopEditing: e.stopEditing,
				widgetId: e.widgetId,
				helpCenterLink: e.helpCenterLink
			}) : r.a.createElement(Ni, {
				subredditId: e.subredditId,
				title: e.title,
				breadcrumbs: e.breadcrumbs,
				stopEditing: e.stopEditing,
				widgetKind: ie.j.Menu,
				helpCenterLink: e.helpCenterLink
			}));
			var Li = Ut(e => r.a.createElement(Z.k, null, r.a.createElement(Ye, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Link Colors", null, {
					hk: "10kWUC"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Active Page", null, {
						hk: "4pWBSv"
					}),
					name: "menuLinkColorActive"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Inactive Page", null, {
						hk: "YmHYW"
					}),
					name: "menuLinkColorInactive"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Hover", null, {
						hk: "1HGJFG"
					}),
					name: "menuLinkColorHover"
				}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Main Menu Background", null, {
					hk: "5scHN"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Color", null, {
						hk: "24I04u"
					}),
					name: "menuBackgroundColor"
				}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Submenu Background", null, {
					hk: "2o6qwW"
				})), r.a.createElement(Z.a, null, r.a.createElement(ke, {
					name: "submenuBackgroundStyle"
				}, r.a.createElement(Ie, {
					value: "default",
					label: i.fbt._("Match Main Menu Background", null, {
						hk: "3LPJz0"
					})
				}), r.a.createElement(Ie, {
					value: "custom",
					label: i.fbt._("Solid Color", null, {
						hk: "DnvyW"
					})
				}, r.a.createElement(et, {
					name: "submenuBackgroundStyle",
					render: e => "custom" === e && r.a.createElement(Z.d, null, r.a.createElement(Z.i, null, r.a.createElement(kt, {
						name: "submenuBackgroundColor",
						label: i.fbt._("Color", null, {
							hk: "3V0Im3"
						})
					})))
				}))))), r.a.createElement(qe, e)), ["bannerOverlayColor", "menuBackgroundColor", "menuBackgroundImage", "menuBackgroundOpacity", "menuLinkColorActive", "menuLinkColorHover", "menuLinkColorInactive", "menuPosition", "submenuBackgroundColor", "submenuBackgroundStyle"]),
				Ui = n("./src/reddit/components/StructuredStyles/LabeledVisibilityInput/index.m.less"),
				Mi = n.n(Ui);
			const qi = s.a.wrapped(Z.b, "FormElementDescription", Mi.a),
				zi = s.a.wrapped(Qt.h, "StyledLabel", Mi.a);
			var Vi = fe(e => r.a.createElement(zi, null, r.a.createElement(ln.a, null, r.a.createElement(h.h, {
				redditStyle: !0,
				name: e.name,
				offValue: e.offValue,
				onChange: e.onChange,
				onValue: e.onValue,
				selected: e.value === e.onValue
			}), r.a.createElement("div", null, r.a.createElement(Z.e, null, e.label), e.description && r.a.createElement(qi, null, e.description)))));
			var Hi = Ut(e => r.a.createElement(Z.k, null, r.a.createElement(Ye, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Community Name Format", null, {
				hk: "tP16c"
			})), r.a.createElement(Z.a, null, r.a.createElement(Se, {
				name: "bannerCommunityNameFormat"
			}, r.a.createElement(ye, {
				value: "slashtag",
				label: `${e.subreddit.displayText}`
			}), r.a.createElement(ye, {
				value: "pretty",
				label: `${e.subreddit.name}`
			}), r.a.createElement(ye, {
				value: "hide",
				label: i.fbt._("Hide", null, {
					hk: "3LxoFk"
				})
			})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Community Icon", null, {
				hk: "1AxBpT"
			})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Custom Image", null, {
				hk: "185kJR"
			})), r.a.createElement(Je, {
				name: "communityIcon",
				render: t => t ? r.a.createElement(ct, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "communityIcon"
				}) : r.a.createElement(nt, {
					label: i.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "communityIcon"
				})
			}), r.a.createElement(Z.b, null, i.fbt._("Required Size: 256x256px", null, {
				hk: "3czxcI"
			})))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Community Icon", null, {
				hk: "1AxBpT"
			})), r.a.createElement(Vi, {
				description: i.fbt._("Your Community Icon will still display in other areas of Reddit", null, {
					hk: "3Ypgnp"
				}),
				label: i.fbt._("Hide Community Icon in Banner", null, {
					hk: "33E6fk"
				}),
				name: "bannerShowCommunityIcon",
				onValue: "hide",
				offValue: "show"
			})), r.a.createElement(qe, e)), ["bannerShowCommunityIcon", "bannerCommunityNameFormat", "communityIcon"]);
			var Ki = Ut(e => r.a.createElement(Z.k, null, r.a.createElement(Ye, e), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Title Color", null, {
				hk: "1UCY4u"
			})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
				name: "postTitleColor",
				label: i.fbt._("Color", null, {
					hk: "3V0Im3"
				})
			}))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Up + Down Vote Icons", null, {
				hk: "4dc1gB"
			})), r.a.createElement(Z.g, null, i.fbt._("If you want to upload your own vote icons, you'll need to upload an image for each of the indicated icon states.", null, {
				hk: "4a8IbW"
			})), r.a.createElement(Z.a, null, r.a.createElement(ke, {
				name: "postVoteIcons"
			}, r.a.createElement(Ie, {
				label: i.fbt._("Standard Reddit", null, {
					hk: "3GMuNx"
				}),
				value: "default"
			}), r.a.createElement(Ie, {
				label: i.fbt._("Custom", null, {
					hk: "1QKc56"
				}),
				value: "custom"
			}, r.a.createElement(et, {
				name: "postVoteIcons",
				render: t => "custom" === t && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.d, null, r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Inactive upvote", null, {
					hk: "3JGpmU"
				})), r.a.createElement(Je, {
					name: "postUpvoteIconInactive",
					render: t => t ? r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postUpvoteIconInactive"
					}) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postUpvoteIconInactive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Active upvote", null, {
					hk: "kymn4"
				})), r.a.createElement(Je, {
					name: "postUpvoteIconActive",
					render: t => t ? r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postUpvoteIconActive"
					}) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postUpvoteIconActive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(kt, {
					label: i.fbt._("Upvote count color", null, {
						hk: "WY0NE"
					}),
					name: "postUpvoteCountColor"
				}))), r.a.createElement(Z.d, null, r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Inactive downvote", null, {
					hk: "1NZ0ba"
				})), r.a.createElement(Je, {
					name: "postDownvoteIconInactive",
					render: t => t ? r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postDownvoteIconInactive"
					}) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postDownvoteIconInactive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(Z.e, null, i.fbt._("Active downvote", null, {
					hk: "vqYFP"
				})), r.a.createElement(Je, {
					name: "postDownvoteIconActive",
					render: t => t ? r.a.createElement(ct, {
						isRequestInProgress: e.isApiRequestInProgress,
						name: "postDownvoteIconActive"
					}) : r.a.createElement(nt, {
						label: i.fbt._("Drag and Drop or Upload Image", null, {
							hk: "Ru1kh"
						}),
						name: "postDownvoteIconActive"
					})
				})), r.a.createElement(Z.i, null, r.a.createElement(kt, {
					label: i.fbt._("Downvote count color", null, {
						hk: "1ftOyw"
					}),
					name: "postDownvoteCountColor"
				}))))
			}))))), r.a.createElement(Z.f, null, r.a.createElement(Z.h, null, i.fbt._("Post Background", null, {
				hk: "3K8hGI"
			})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
				label: i.fbt._("Color", null, {
					hk: "3V0Im3"
				}),
				name: "postBackgroundColor"
			})), r.a.createElement(Z.a, null, r.a.createElement(Z.e, null, i.fbt._("Image", null, {
				hk: "3o4qa8"
			})), r.a.createElement(Je, {
				name: "postBackgroundImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ct, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "postBackgroundImage"
				}), r.a.createElement(Z.d, null, r.a.createElement(Me, {
					name: "postBackgroundImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement(nt, {
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
			})), r.a.createElement(Je, {
				name: "postPlaceholderImage",
				render: t => t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ct, {
					isRequestInProgress: e.isApiRequestInProgress,
					name: "postPlaceholderImage"
				}), r.a.createElement(Z.d, null, r.a.createElement(Me, {
					name: "postPlaceholderImagePosition",
					values: ["cover", "tiled"]
				}))) : r.a.createElement(nt, {
					label: i.fbt._("Drag and Drop or Upload Image", null, {
						hk: "Ru1kh"
					}),
					name: "postPlaceholderImage"
				})
			}))), r.a.createElement(qe, e)), ["postBackgroundColor", "postBackgroundImage", "postBackgroundImagePosition", "postDownvoteCountColor", "postDownvoteIconActive", "postDownvoteIconInactive", "postPlaceholderImage", "postPlaceholderImagePosition", "postTitleColor", "postUpvoteCountColor", "postUpvoteIconActive", "postUpvoteIconInactive", "postVoteIcons"]);
			var Gi = Ut(e => r.a.createElement(Z.o, null, r.a.createElement(Ye, e), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Title background color", null, {
						hk: "2omOuw"
					}),
					name: "sidebarWidgetHeaderColor"
				})), r.a.createElement(Z.a, null, r.a.createElement(kt, {
					label: i.fbt._("Widget background color", null, {
						hk: "2iB8pL"
					}),
					name: "sidebarWidgetBackgroundColor"
				})), e.hasUnsavedChanges && r.a.createElement(qe, e)), ["sidebarWidgetBackgroundColor", "sidebarWidgetHeaderColor"]),
				Zi = n("./src/reddit/components/StructuredStyles/NavItem/index.m.less"),
				Qi = n.n(Zi);
			const Yi = s.a.wrapped(x.a, "ExpandLeft", Qi.a);
			var Ji = e => r.a.createElement(p.b, {
					onClick: e.onClick
				}, r.a.createElement(Yi, null, e.children, r.a.createElement(h.g, null))),
				Xi = n("./src/reddit/components/StructuredStyles/Forms/WidgetManager/WidgetLabel.m.less"),
				$i = n.n(Xi);
			const el = s.a.div("WidgetType", $i.a),
				tl = s.a.div("WidgetTitle", $i.a);
			var nl = e => e.widget ? r.a.createElement("div", null, r.a.createElement(el, null, Object(se.j)(e.widget.kind)), r.a.createElement(tl, null, Object(se.k)(e.widget))) : null;
			const al = Object(c.c)({
				idCardWidget: (e, t) => Object(le.d)(e, {
					subredditId: t.subredditId
				}),
				sidebar: le.i,
				widgets: le.a
			});
			var rl = Object(o.b)(al)(e => r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(Z.b, null, i.fbt._("Remaining Widgets:", null, {
					hk: "1XFj7r"
				}), (20 - e.sidebar.length).toLocaleString()), r.a.createElement(Ji, {
					onClick: () => e.idCardWidget && e.onClick(e.idCardWidget)
				}, r.a.createElement(nl, {
					widget: e.idCardWidget
				})), e.sidebar.map(t => r.a.createElement(Ji, {
					key: t,
					onClick: () => e.onClick(e.widgets[t])
				}, r.a.createElement(nl, {
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
				sl = n("./src/reddit/components/StructuredStyles/Forms/WidgetManager/SortWidgets.m.less"),
				il = n.n(sl);
			const ll = s.a.wrapped(Un.a, "Sortable", il.a);
			class ol extends r.a.Component {
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
					return r.a.createElement("div", null, r.a.createElement(Z.f, null, r.a.createElement(gn.a, {
						disabled: !0
					}, r.a.createElement(nl, {
						widget: e.idCardWidget
					})), r.a.createElement(ll, {
						values: t.items,
						getReactKey: this.getReactKey,
						render: (t, n, a, s, i) => r.a.createElement(gn.a, {
							isDragging: a,
							isOver: s,
							canDrop: i
						}, r.a.createElement(nl, {
							widget: e.widgets[t]
						})),
						onDrop: this.handleDrop
					})), r.a.createElement(Z.f, null, r.a.createElement(pn, {
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
			var dl = Object(o.b)(() => Object(c.c)({
				sidebar: le.i,
				widgets: le.a,
				idCardWidget: (e, t) => Object(le.d)(e, {
					subredditId: t.subredditId
				})
			}), (e, t) => ({
				saveChanges: n => {
					e(nn.h(t.subredditId, n))
				}
			}))(ol);
			class cl extends r.a.Component {
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
					return r.a.createElement(Z.k, null, r.a.createElement(Gi, {
						subredditId: e.subredditId,
						title: i.fbt._("Sidebar widget appearance", null, {
							hk: "2h8P8Z"
						}),
						paneName: "widgets",
						breadcrumbs: e.breadcrumbs,
						stopEditing: e.stopEditing,
						helpCenterLink: e.helpCenterLink
					}), r.a.createElement(Z.m, null, e.title), r.a.createElement(en.c, null, i.fbt._("These community styling options will also display in Reddit apps.", null, {
						hk: "1Cl8Yk"
					})), t.isInSecondState ? r.a.createElement(dl, {
						subredditId: e.subredditId,
						stopSorting: this.disableSecondState
					}) : r.a.createElement(rl, {
						onClick: t => e.onEdit(t.id, t.kind),
						onAdd: e.onAdd,
						startSorting: () => {
							e.onSort(), this.enableSecondState()
						},
						subredditId: e.subredditId
					}))
				}
			}
			var ul = cl;
			const ml = (e, t) => {
				const n = t ? Math.max(0, e.index - t) : 0;
				return e.entries.slice(n, e.index).map((t, a) => ({
					relativePosition: a + n - e.index,
					title: t.state ? t.state.title : null
				}))
			};
			var hl = n("./src/reddit/selectors/telemetry.ts");
			const pl = Object(mr.v)({
					queryParams: mr.Z
				}),
				gl = e => t => t ? e.go(t.relativePosition) : e.goBack();
			var bl = pl(Object(g.c)(e => {
					const t = (t => (n, a) => e.sendEvent(r => ({
						source: t,
						action: "click",
						noun: n,
						actionInfo: Object(hl.d)(r, {
							paneName: a ? a.paneName : void 0,
							count: a ? a.count : void 0
						}),
						screen: Object(hl.cb)(r),
						subreddit: Object(hl.lb)(r),
						widget: a && a.widgetKind && Object(hl.yb)(r, {
							subredditId: e.subredditId,
							widgetKind: a.widgetKind
						})
					})))(b.c.Widgets);
					return r.a.createElement(l.a, {
						initialEntries: [f("main")],
						initialIndex: 0
					}, r.a.createElement("div", null, r.a.createElement(l.d, {
						exact: !0,
						path: "main",
						render: t => {
							let {
								history: n
							} = t;
							const a = 1 === n.length && e.queryParams.route;
							return a && n.push(f(a)), r.a.createElement(ae, {
								subredditId: e.subredditId,
								title: i.fbt._("Back to mod tools", null, {
									hk: "1YCI0W"
								})
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "global",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(tn, {
								breadcrumbs: ml(n, 1),
								paneName: b.b.global,
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Color theme", null, {
									hk: "2v9vTZ"
								}),
								helpCenterLink: b.d.global
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "nameAndIcon",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Hi, {
								breadcrumbs: ml(n, 1),
								paneName: b.b.nameAndIcon,
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Name & icon", null, {
									hk: "3Ooszv"
								}),
								helpCenterLink: b.d.nameAndIcon
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "banner",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Kt, {
								breadcrumbs: ml(n, 1),
								paneName: b.b.banner,
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Banner", null, {
									hk: "34vhtK"
								}),
								helpCenterLink: b.d.banner
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "menu",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Li, {
								breadcrumbs: ml(n, 1),
								paneName: b.b.menu,
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Menu", null, {
									hk: "2i934f"
								}),
								helpCenterLink: b.d.menu
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "post",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Ki, {
								breadcrumbs: ml(n, 1),
								paneName: b.b.post,
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Posts", null, {
									hk: "IRzss"
								}),
								helpCenterLink: b.d.post
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "exportImport",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement($t, {
								breadcrumbs: ml(n, 1),
								paneName: b.b.exportImport,
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Manage themes", null, {
									hk: "4u4bJB"
								}),
								helpCenterLink: b.d.exportImport
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "menuLinks",
						render: t => {
							let {
								history: n
							} = t;
							return r.a.createElement(Wi, {
								breadcrumbs: ml(n, 1),
								stopEditing: gl(n),
								subredditId: e.subredditId,
								title: i.fbt._("Menu links", null, {
									hk: "1fH1RT"
								}),
								helpCenterLink: b.d.menuLinks
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "widgets",
						render: n => {
							let {
								history: a
							} = n;
							return r.a.createElement(ul, {
								breadcrumbs: ml(a, 1),
								onAdd: () => {
									a.push(f("addWidget"))
								},
								onEdit: (e, n) => {
									t(b.b.editWidget, {
										widgetKind: n
									}), a.push(f("editWidget", {
										widgetId: e,
										widgetKind: n
									}))
								},
								onSort: () => t(b.b.reorderWidgets, {
									paneName: b.b.widgets
								}),
								stopEditing: gl(a),
								subredditId: e.subredditId,
								title: i.fbt._("Sidebar widgets", null, {
									hk: "4aVxeZ"
								}),
								helpCenterLink: b.d.widgets
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "addWidget",
						render: n => {
							let {
								history: a
							} = n;
							return r.a.createElement(he, {
								breadcrumbs: ml(a, 1),
								onAdd: e => {
									t(b.b.addWidget, {
										widgetKind: e
									}), a.push(f("newWidget", {
										widgetKind: e
									}))
								},
								stopEditing: gl(a),
								subredditId: e.subredditId,
								title: i.fbt._("Add Widget", null, {
									hk: "mlWwj"
								}),
								helpCenterLink: b.d.widgets
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "newWidget",
						render: n => {
							let {
								history: a,
								location: s
							} = n;
							return r.a.createElement(Ni, {
								breadcrumbs: ml(a, 1),
								onReloadWithWidget: e => {
									a.replace(f("editWidget", {
										widgetId: e.id
									}))
								},
								sendEventWithName: t,
								stopEditing: e => e ? a.go(e.relativePosition) : a.go(-2),
								subredditId: e.subredditId,
								title: s.state.widgetKind ? E(s.state.widgetKind) : i.fbt._("New Widget", null, {
									hk: "BJxc8"
								}),
								widgetKind: s.state.widgetKind,
								helpCenterLink: b.d.widgets
							})
						}
					}), r.a.createElement(l.d, {
						exact: !0,
						path: "editWidget",
						render: n => {
							let {
								history: a,
								location: s
							} = n;
							return r.a.createElement(Ni, {
								breadcrumbs: ml(a, 1),
								sendEventWithName: t,
								stopEditing: gl(a),
								subredditId: e.subredditId,
								title: s.state.widgetKind ? E(s.state.widgetKind) : i.fbt._("Edit Widget", null, {
									hk: "1mXs71"
								}),
								widgetId: s.state.widgetId,
								helpCenterLink: b.d.widgets
							})
						}
					})))
				})),
				fl = n("./src/reddit/connectors/connectClickToToggleEditor.ts"),
				El = Object(fl.a)(e => r.a.createElement("button", {
					className: e.className,
					onClick: e.requestCloseBlade,
					children: e.children
				})),
				vl = n("./src/reddit/components/BlockNavigation/index.tsx"),
				xl = n("./src/reddit/constants/modals.ts");
			var _l = Object(fl.a)(e => r.a.createElement(vl.a, {
					blockOnBeforeUnload: !0,
					dialogId: xl.a.BLADE_UNSAVED_CHANGES,
					enabled: e.bladeHasUnsavedChanges
				})),
				Cl = n("./src/reddit/components/StructuredStyles/BladeDrawer/index.m.less"),
				Sl = n.n(Cl);
			const yl = s.a.div("BladeContainer", Sl.a),
				kl = s.a.wrapped(El, "BladeCloseButton", Sl.a);
			t.default = e => r.a.createElement("div", null, r.a.createElement(yl, {
				id: mt.b
			}, r.a.createElement(kl, {
				subredditId: e.subredditId
			}, r.a.createElement(h.b, null)), r.a.createElement(bl, {
				subredditId: e.subredditId
			})), r.a.createElement(_l, e))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbTitle: "_2N7RnlFNJblZD8KUBuiBEQ"
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
			}, r.a.createElement(u, null), r.a.createElement("span", {
				className: c.a.breadcrumbTitle
			}, t.title)))))
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
			const v = e => "#" === e[0] ? e : `#${e}`,
				x = Object(l.a)(e => s.a.createElement("div", {
					className: Object(i.a)(p.a.DropdownColorSwatch, e.isTransparent && p.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.e)(e.color)
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
							const e = v(t);
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
					}, s.a.createElement(x, {
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
				return v
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = i.a.wrapped(c.a, "ImageUploadIcon", m.a), g = i.a.div("ImageIconRow", m.a), b = i.a.div("ImageUploadText", m.a), f = i.a.wrapped(l.a, "FileDrop", m.a), E = i.a.div("ContainerUploading", m.a), v = e => r.a.createElement(E, {
				className: e.className
			}, r.a.createElement(g, null, r.a.createElement(d.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(b, null, h._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), x = i.a.label("Label", m.a);
			t.b = e => r.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(x, {
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
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "h", (function() {
				return S
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
				E = i.a.wrapped(l.l, "Button", p.a),
				v = i.a.wrapped(l.r, "TertiaryButton", p.a),
				x = i.a.div("SubFormTitle", p.a),
				_ = i.a.wrapped(l.o, "SecondaryButton", p.a),
				C = i.a.wrapped(v, "DeleteButton", p.a),
				S = (i.a.section("ModalBody", p.a), i.a.header("ModalHeader", p.a), i.a.h2("ModalTitle", p.a), i.a.div("ModalMain", p.a), i.a.p("ModalText", p.a), i.a.footer("ModalFooter", p.a), e => r.a.createElement(c, g({}, e, {
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
				return v
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
				v = a.a.input("StyledFileInput", c.a)
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
			const d = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", o({}, n, {
						className: Object(s.a)(l.a.FormNavElement, {
							[l.a.disabled]: t
						})
					}), n.children)
				},
				c = e => {
					let {
						canDrop: t,
						className: n,
						isDragging: a,
						isOver: i,
						disabled: d,
						...c
					} = e;
					return r.a.createElement("div", o({}, c, {
						className: Object(s.a)(l.a.DragCard, {
							[l.a.disabled]: d,
							[l.a.isDraffing]: a,
							[l.a.isOverAndCanDrop]: i && t
						}, n)
					}))
				}
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
				return v
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
				v = g.a.wrapped(o.c, "ErrorText", p.a);
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
				}, t && s.a.createElement(v, null, a.fbt._("Something went wrong", null, {
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
					currentUser: d.m,
					isNightMode: d.fb,
					isPresenceUserPrefEnabled: d.X,
					shouldHideNSFW: d.H
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
				})), n && s.a.createElement(c.default, {
					showPresence: !0
				}))
			})
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
			t.a = e => {
				let {
					backgroundImage: t,
					children: n,
					className: a
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(l.a.imageDisplay, a),
					style: {
						backgroundImage: `url('${t}')`
					},
					children: n
				})
			}
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
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(l.a.loadingIcon, n, {
						[l.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				l = n.n(i);
			const o = e => r.a.createElement("span", {
				className: Object(s.a)(l.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: n
				} = e;
				return r.a.createElement(o, {
					className: Object(s.a)(l.a.metaSeparator, t),
					isSmall: n
				})
			}
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
			t.a = e => r.a.createElement("label", {
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
				role: e.onSearch && "submit",
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
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F",
				titleContainer: "_112QSSyLmEVry3hGjIPV--",
				titleText: "_3fpkz04m3VEANbACfYOR0H",
				srCreationButton: "_3ujvK82qZ7yzbpEffTiXH-"
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
				lockTitleWithEllipsis: "mFsxWzlvJHnXmu7_xaIzI",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return C
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				o = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				c = n("./src/reddit/icons/svgs/Link/index.tsx"),
				u = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				m = n("./src/reddit/icons/svgs/Video/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				b = n.n(g);
			const f = [{
				type: "text",
				Icon: u.a
			}, {
				type: "images",
				Icon: d.a
			}, {
				type: "videos",
				Icon: m.a
			}, {
				type: "links",
				Icon: c.a
			}, {
				type: "talks",
				Icon: () => r.a.createElement(p.a, {
					name: "audio"
				})
			}];

			function E(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return r.a.createElement(h.a, {
					className: Object(s.a)(b.a.rowStyle, n)
				}, f.map((e, n) => {
					let {
						type: a,
						Icon: i
					} = e;
					return r.a.createElement("div", {
						className: Object(s.a)(b.a.iconWrapper, {
							[b.a.mDisabled]: !t[a]
						}),
						key: n
					}, r.a.createElement(i, null))
				}))
			}
			var v = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				x = n.n(v);
			const _ = i.a.wrapped(l.b, "subredditIcon", x.a);

			function C(e) {
				const {
					className: t,
					explanationText: n,
					highlight: a,
					icon: i,
					item: l,
					lockTitleWithEllipsis: d,
					onClick: c,
					secondaryText: u,
					subText: m,
					title: h
				} = e, {
					allowedPostTypes: p
				} = l;
				return r.a.createElement("div", {
					className: Object(s.a)(x.a.container, {
						[x.a.mHighlight]: a
					}, t),
					onClick: c
				}, i, r.a.createElement("div", {
					className: x.a.main
				}, r.a.createElement("span", {
					className: Object(s.a)(x.a.title, {
						[x.a.lockTitleWithEllipsis]: d
					})
				}, h), u && r.a.createElement("span", {
					className: x.a.secondary
				}, u, m && r.a.createElement(r.a.Fragment, null, r.a.createElement(o.a, null), r.a.createElement("span", {
					className: x.a.secondary
				}, m))), n && r.a.createElement("span", {
					className: x.a.secondary
				}, n)), a && p && r.a.createElement(E, {
					allowedPostTypes: p
				}))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "C_XJ2ZB_b9iAPcFCHr4SW",
				title: "_1qKkNpHiC5Vgwbp0N8pOiG",
				contentWrapper: "_2l-m9MtS29tOlexExTlpXo",
				spinner: "_3rJ_SLWBH_jxAMlgNkciE9",
				itemWrapper: "Tx6TtQK3xJ9F5qpQlrEHT"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return _
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postComposer.ts"),
				h = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				b = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				f = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less"),
				E = n.n(f);
			const v = e => {
					const {
						items: t,
						itemWrapperClassName: n,
						isRedditRec: i,
						onSelectRecommendation: l,
						shouldShowSubredditOnlineUsers: d = !1
					} = e, u = Object(p.a)(), g = Object(r.useCallback)((e, t) => {
						u(Object(m.w)(e, t))
					}, []), f = Object(r.useRef)(null), v = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && u(Object(m.v)())
						})
					}, []);
					return Object(h.a)(f, v), s.a.createElement(s.a.Fragment, null, t.map((e, t) => s.a.createElement("div", {
						className: Object(o.a)(E.a.itemWrapper, n),
						key: e.name
					}, s.a.createElement(c.a, {
						subredditName: e.name,
						shouldOpenNewTabOnClicks: !0,
						onShow: () => g(e.name, t)
					}, s.a.createElement(b.a, {
						item: e,
						highlight: !1,
						shouldPrettyPrint: !0,
						explanationText: i ? a.fbt._("based on your subscription", null, {
							hk: "3Hb2XK"
						}) : a.fbt._("based on your content", null, {
							hk: "3u8Nrt"
						}),
						onClick: () => {
							l(e), u(Object(m.u)(e.name, t))
						},
						lockTitleWithEllipsis: !0,
						shouldShowSubredditOnlineUsers: d
					})))), s.a.createElement("span", {
						ref: f,
						key: "recommended-render"
					}))
				},
				x = e => {
					const {
						contentWrapperClassName: t,
						hasData: n,
						isPending: a,
						isRedditRec: r,
						items: i,
						itemWrapperClassName: l,
						onSelectRecommendation: o,
						shouldShowSubredditOnlineUsers: d = !1
					} = e;
					return s.a.createElement("div", {
						className: t
					}, a && s.a.createElement(u.a, {
						sizePx: 30,
						className: E.a.spinner
					}), n && !a && s.a.createElement(v, {
						isRedditRec: r,
						items: i,
						itemWrapperClassName: l,
						onSelectRecommendation: o,
						shouldShowSubredditOnlineUsers: d
					}))
				},
				_ = e => {
					const t = Object(i.d)(),
						{
							isPending: n,
							hasData: o,
							isChanged: c,
							items: u,
							isRedditRec: m
						} = Object(i.e)(Object(l.c)({
							isPending: g.i,
							hasData: g.d,
							isChanged: g.e,
							items: g.c,
							isRedditRec: g.j
						}));
					return Object(r.useEffect)(() => {
						c && t(Object(d.k)())
					}, [c, t]), s.a.createElement("div", {
						className: E.a.wrapper,
						onMouseDown: e.onContainerMouseDown
					}, s.a.createElement("div", {
						className: E.a.title
					}, a.fbt._("Suggested communities", null, {
						hk: "4BebuH"
					})), s.a.createElement(x, {
						contentWrapperClassName: E.a.contentWrapper,
						hasData: o,
						isPending: n,
						isRedditRec: m,
						items: u,
						onSelectRecommendation: e.onSelectRecommendation
					}))
				}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2",
				hasExplanationText: "_1xZtDFYDxzgIqaJfg9XzJh"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/helpers/name/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				m = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				h = n.n(m);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: r,
						subscribers: m,
						active: g
					},
					shouldPrettyPrint: b,
					explanationText: f,
					shouldShowSubredditOnlineUsers: E = !1
				} = e, v = Object(i.e)(e => Object(c.z)(e, {
					subredditName: r
				})), x = Object(d.d)(r), _ = void 0 !== m ? a.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [a.fbt._plural(m, "number", b ? Object(o.b)(m) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, C = v ? a.fbt._("{number users online in subreddit} online", [a.fbt._param("number users online in subreddit", Object(o.b)(v.accountsActive))], {
					hk: "49HfzS"
				}) : void 0, S = E ? `${_} • ${C}` : _, y = void 0 !== g ? a.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [a.fbt._plural(g, "number", b ? Object(o.b)(g) : void 0)], {
					hk: "NgOAJ"
				}) : void 0, k = s.a.createElement(u.a, {
					className: Object(l.a)(h.a.icon, {
						[h.a.hasExplanationText]: !!f
					}),
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return s.a.createElement(u.b, p({
					icon: k,
					title: x,
					secondaryText: S,
					subText: y
				}, e))
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
				return R
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
			var c = function(e, t, n) {
					let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
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
			var b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				E = n.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var x = e => {
					let {
						className: t,
						children: n,
						title: r,
						onOpenCommunityCreation: s,
						shouldShowCreateCommunityButton: i,
						...d
					} = e;
					return l.a.createElement("div", v({
						className: Object(o.a)(E.a.dropdownSection, t)
					}, d), r && i ? l.a.createElement("div", {
						className: E.a.titleContainer
					}, l.a.createElement("span", {
						className: E.a.titleText
					}, r), l.a.createElement(b.t, {
						className: E.a.srCreationButton,
						onClick: s,
						priority: b.c.Plain,
						size: b.d.XS
					}, a.fbt._("Create New", null, {
						hk: "3WP7G4"
					}))) : r && l.a.createElement("div", {
						className: E.a.title
					}, r), n)
				},
				_ = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				C = n("./src/reddit/helpers/name/index.ts"),
				S = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				y = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				k = n.n(y),
				I = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				w = n.n(I);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function O(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, r = Object(C.e)(t), s = void 0 !== n ? a.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [a.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, i = l.a.createElement(_.a, {
					className: Object(o.a)(w.a.profileIcon, k.a.subredditIcon)
				});
				return l.a.createElement(S.b, D({
					icon: i,
					title: r,
					secondaryText: s
				}, e))
			}
			var T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				j = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				F = n.n(j);
			const P = {
				[m.a.OWN_PROFILE]: () => a.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => a.fbt._("Your communities", null, {
					hk: "2XzKJR"
				}),
				[m.a.OTHER_SUBREDDIT]: () => a.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => a.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class R extends l.a.PureComponent {
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
							return O;
						default:
							return T.a
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						onOpenCommunityCreation: n,
						shouldShowCreateCommunityButton: r
					} = this.props, s = [];
					return this.props.showNoMatchesCaption && s.push(l.a.createElement(x, {
						key: "no-matches"
					}, l.a.createElement("div", {
						className: F.a.noMatches
					}, a.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (a, i, o, d) => {
						const u = [];
						c(o, d, n => {
							const a = t[n],
								r = n === e,
								s = this.getEntryContentComponent(a.type, a.name);
							s && u.push(l.a.createElement(g, {
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
						const h = P[i];
						s.push(l.a.createElement(x, {
							key: i,
							title: h && h(),
							onOpenCommunityCreation: n,
							shouldShowCreateCommunityButton: r && i === m.a.SUBSCRIBED_TO_SUBREDDIT
						}, u))
					}), l.a.createElement("div", {
						className: Object(o.a)(F.a.container, this.props.className, {
							[F.a.mIsValid]: this.props.isValid,
							[F.a.mIsVisible]: s.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, s)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz",
				subredditDropdownOpenAI: "_1OS0KkjeJ7foERCmAoM2Zc",
				subredditDropdownOpenAi: "_1OS0KkjeJ7foERCmAoM2Zc"
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
							rawString: Object(s.d)(i),
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
							rawString: Object(s.e)(r),
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
					if (t && (!n || Object(s.g)(e))) return o(e, t, a);
					if (n && (!t || Object(s.h)(e))) return d(e, n);
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
				return ne
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
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				p = n("./src/reddit/actions/subredditCrosspostable.ts"),
				g = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/constants/modals.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				v = n("./node_modules/lodash/debounce.js"),
				x = n.n(v),
				_ = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/constants/keycodes.ts"),
				S = n("./src/reddit/constants/posts.ts"),
				y = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				I = n("./src/reddit/icons/fonts/index.tsx"),
				w = n("./src/lib/lessComponent.tsx"),
				D = n("./src/reddit/components/SubredditIcon/index.tsx"),
				O = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				T = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				j = n.n(T);
			const F = w.a.wrapped(D.b, "subredditRoundIcon", j.a),
				P = w.a.wrapped(O.a, "userIcon", j.a),
				R = w.a.span("iconEmpty", j.a);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function B(e) {
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
				let c = r.a.createElement(R, null);
				return a ? c = r.a.createElement(I.a, {
					name: "search",
					className: j.a.searchIcon
				}) : l && (c = l.type === S.a.SUBREDDIT ? r.a.createElement(F, l) : r.a.createElement(P, null)), r.a.createElement("div", {
					className: Object(_.a)(j.a.searchBar, t)
				}, c, r.a.createElement("div", {
					className: j.a.inputWrapper
				}, r.a.createElement("input", A({
					className: j.a.input,
					ref: i,
					disabled: n,
					placeholder: a ? k.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : k.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: o
				}, d))), r.a.createElement("div", {
					onClick: s,
					onMouseDown: N
				}, r.a.createElement(I.a, {
					name: "caret_down",
					className: j.a.dropdownIcon
				})))
			}
			var W = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				L = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				U = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				M = n.n(U),
				q = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.tsx");
			const z = Object(c.c)({
				isOpenAIPilotV1: L.g,
				shouldRenderRec: L.m
			});
			class V extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(E.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = x()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === y.a.OWN_PROFILE ? Object(l.e)(t.name) : Object(l.d)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.onSelectRecommendation = e => {
						if (!e) throw new Error("Invalid item index");
						let t;
						t = e.type === y.a.OWN_PROFILE ? Object(l.e)(e.name) : Object(l.d)(e.name), this.props.onChange({
							rawString: t,
							record: {
								name: e.name,
								iconUrl: e.iconUrl,
								primaryColor: e.primaryColor,
								type: S.a.SUBREDDIT
							}
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.getPickerValue = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						const n = t.state.inputValue,
							a = t.state.focusedIndex,
							{
								items: r,
								value: s
							} = t.props;
						if (s && s.record && Object(l.a)(n, s.record.name)) return {
							...s,
							rawString: n
						};
						const i = r[a] || e && r.find(e => Object(l.a)(e.name, n));
						if (!i) return {
							rawString: n,
							record: null
						};
						const {
							type: o,
							id: d,
							name: c,
							iconUrl: u,
							primaryColor: m,
							allowedPostTypes: h
						} = i;
						return {
							rawString: n,
							record: Object(l.a)(n, c) ? {
								id: d,
								name: c,
								iconUrl: u,
								primaryColor: m,
								allowedPostTypes: h,
								type: o === y.a.OWN_PROFILE ? S.a.PROFILE : S.a.SUBREDDIT
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
					}, this.moveSelection = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						const {
							value: n,
							items: a
						} = t.props;
						let r = t.findNextEnabledItemIndex(e);
						r < -1 ? r = a.length - 1 : r >= a.length && (r = -1);
						const s = -1 === r ? n.rawString : a[r].name;
						s && t.setState({
							focusedIndex: r,
							inputValue: s
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
						const t = e.target.value,
							n = this.state.inputValue;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange), this.props.onInputChange && this.props.onInputChange(n, t)
					}, this.onKeyDown = e => {
						e.which === C.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === C.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === C.a.Enter || e.which === C.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== C.a.Tab && e.preventDefault()) : e.which === C.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
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
						isOpenAIPilotV1: n,
						isValid: a = !0,
						items: s,
						shouldRenderRec: i,
						value: l,
						shouldShowCreateCommunityButton: o
					} = this.props, {
						isActive: d,
						isOpen: c
					} = this.state, u = l.record;
					return r.a.createElement("div", {
						className: Object(_.a)(M.a.container, e, {
							[M.a.mIsActive]: d,
							[M.a.mIsInvalid]: !a
						})
					}, r.a.createElement(B, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: u
					}), !this.state.inputValue && c && i && r.a.createElement(q.a, {
						onSelectRecommendation: this.onSelectRecommendation,
						onContainerMouseDown: this.onDropdownContainerMouseDown
					}), c && (!i || !!this.state.inputValue) && r.a.createElement(W.a, {
						className: n ? M.a.subredditDropdownOpenAI : void 0,
						items: s,
						isValid: a,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						onOpenCommunityCreation: this.props.openCommunityCreation,
						shouldShowCreateCommunityButton: o
					}))
				}
			}
			var H = Object(d.b)(z)(V),
				K = n("./src/reddit/helpers/trackers/postComposer.ts"),
				G = n("./src/reddit/selectors/platform.ts"),
				Z = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				Q = n("./src/reddit/selectors/user.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const J = Object(f.v)(),
				X = Object(u.a)(Object(c.a)((e, t) => t.value, (e, t) => {
					let {
						allowCrosspostableOnly: n,
						includeUserProfile: a,
						value: r
					} = t;
					return Object(Z.a)(e, {
						allowCrosspostableOnly: n,
						includeUserProfile: a,
						substring: r.rawString
					})
				}, e => Object(Q.sb)(e) && Object(G.j)(e), (e, t, n) => {
					const {
						suggestedItems: a,
						fallbackItems: r,
						isAllDataRetrieved: s
					} = t, i = a.length ? a : e.record ? [Object(E.a)(e.record)] : [];
					return {
						items: 0 === i.length && s ? r : i,
						haveSuggestions: i.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending,
						shouldShowCreateCommunityButton: n
					}
				})),
				$ = {
					onGetInitialData: e => t => t(e ? p.d() : g.e()),
					onGetSubredditAutocomplete: h.a,
					openCommunityCreation: () => async (e, t) => {
						Object(K.c)(t()), e(Object(m.h)(b.a.SUBREDDIT_CREATION_MODAL_ID))
					}
				};
			class ee extends r.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return r.a.createElement(H, Y({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var te = J(Object(d.b)(X, $)(ee));
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => r.a.createElement(te, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						onInputChange: this.props.onInputChange,
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
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			}));
			var a = n("./src/lib/linkMatchers/index.ts");
			var r;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(r || (r = {}));
			const s = e => {
					if (!e) return r.NoUrl;
					if (e.length < 4) return r.TooShort;
					const t = Object(a.h)(a.f, e);
					return t ? "ftp:" === t.schema ? r.Invalid : "mailto:" === t.schema ? r.Invalid : r.Valid : r.Invalid
				},
				i = 20;
			var l;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(l || (l = {}));
			const o = e => e ? e.length > i ? l.TooLong : l.Valid : l.TooShort;
			var d;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(d || (d = {}));
			const c = e => e.length ? d.Valid : d.TooShort
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
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement("svg", o({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(s.a)(l.a.checkbox, t)
				}, n), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
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
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
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
			}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/StructuredStyles.6bfa2f714996a24324e3.js.map