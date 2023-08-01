// https://www.redditstatic.com/desktop2x/ProfileComments.2bc6334557b4df069cb3.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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
			var c = {
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
				l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(l), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

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
						}(n) ? d(t, n): c.push(t)
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

			function _(e, t) {
				if (!(this instanceof _)) return new _(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, c, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			_.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, _.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, _.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, r, s, a, o, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (s = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (a = n.index + n[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (a = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = o)), this.__index__ >= 0
			}, _.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, _.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, _.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var r = t ? e.slice(t) : e; this.test(r);) n.push(p(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, _.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, _.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, _.prototype.onCompile = function() {}, e.exports = _
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
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/contentGate.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/selectors/userPrefs.ts");
			const d = 3e4;
			let u;

			function m(e) {
				return t => {
					const n = Object(a.f)().getState(),
						m = Object(a.d)(),
						p = Object(l.a)(n),
						_ = Object(c.S)(n),
						h = Object(i.c)(n),
						b = () => {
							Object(i.b)() && (m(o.o({
								over18: !1
							})), u && window.clearInterval(u))
						};
					return Object(r.useEffect)(() => (!_ && h.isNewDesignVariant && p && (u = window.setInterval(b, d), b()), () => window.clearInterval(u)), [h.isNewDesignVariant, b, _, p]), s.a.createElement(e, t)
				}
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				a = n("./node_modules/tlds/index.js"),
				o = n.n(a),
				i = n("./src/lib/linkMatchers/customLinks.ts");
			n("./node_modules/lodash/values.js");
			const c = ["//", "ftp:", "http:", "https:", "mailto:"],
				l = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, c),
				d = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				u = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				m = l(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				p = l(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				_ = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				h = (s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config), d.normalize);
			d.normalize = e => {
				h.call(d, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const b = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				f = e => {
					const t = d.match(e);
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
				return z
			})), n.d(t, "profileCommentsLoaded", (function() {
				return I
			})), n.d(t, "profileCommentsFailed", (function() {
				return N
			})), n.d(t, "profileCommentsRequested", (function() {
				return A
			})), n.d(t, "moreItemsPending", (function() {
				return T
			})), n.d(t, "moreItemsLoaded", (function() {
				return q
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
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/externalAccount.ts"),
				u = n("./src/reddit/actions/moderatingSubreddits.ts"),
				m = n("./src/reddit/actions/pages/profileShared.ts"),
				p = n("./src/reddit/actions/platform.ts"),
				_ = n("./src/reddit/actions/profile/index.ts"),
				h = n("./src/reddit/actions/subreddit.ts"),
				b = n("./src/reddit/constants/errors.ts"),
				f = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/config.ts"),
				v = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				x = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				E = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				j = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t, n, r) => {
				let s = Object(C.a)(Object(v.a)(Object(E.a)(Object(j.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (s = Object(w.a)(s)), Object(k.a)(e, {
					data: n,
					endpoint: s,
					method: x.nb.GET
				})
			};
			var O = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				D = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				P = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				B = n("./src/reddit/selectors/profile.ts"),
				S = n("./src/reddit/selectors/profileComments.ts"),
				L = n("./src/reddit/actions/pages/profileComments/constants.ts");
			const z = Object(i.a)(L.f),
				I = Object(i.a)(L.e),
				N = Object(i.a)(L.d),
				A = e => async (t, n, r) => {
					const {
						queryParams: s,
						params: a
					} = e, {
						sort: i,
						t: g
					} = Object(m.b)(s), {
						profileName: y
					} = a, v = Object(c.a)(`u_${y}`, i, e.queryParams), {
						profileCommentsPage: x
					} = n(), k = x.commentIds[v], C = x.api.error[v], w = x.api.pending[v];
					if (await t(_.d(y)), w || k && !C) {
						if (k) {
							const e = Object(B.s)(n(), {
								profileName: y
							});
							t(p.n({
								title: e
							}))
						}
						return
					}
					const E = {
						...o()(e.queryParams, [...f.p, f.l]),
						sort: i,
						t: Object(O.a)(i, g)
					};
					t(z({
						key: v
					}));
					const j = await Object(D.a)("profileComments", () => F(r.apiContext(), y, E, Object(P.a)(n())));
					if (!j.ok) return t(N({
						account: j.body.data ? j.body.data.account : null,
						error: j.body.reason ? {
							type: j.body.reason
						} : j.error,
						key: v
					})), j.body.reason === b.a.DeletedProfile && t(Object(l.v)({
						profileName: y
					})), void t(p.o(j.status));
					const S = j.body;
					t(I({
						key: v,
						meta: n().meta,
						...S
					})), await Promise.all([t(Object(m.c)(y)), t(Object(h.q)()), t(Object(u.b)()), t(d.o(y))])
				}, T = Object(i.a)(L.c), q = Object(i.a)(L.b), R = Object(i.a)(L.a), U = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const a = t(),
						{
							currentPage: i
						} = a.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: l,
						params: d
					} = i.routeMatch.match, {
						sort: u,
						t: p
					} = Object(m.b)(l), {
						profileName: _
					} = d, h = Object(c.a)(`u_${_}`, u, l), b = Object(S.d)(a, {
						listingKey: h
					});
					if (!b) return;
					const y = Object(S.b)(a, {
							listingKey: h
						}),
						v = Object(S.c)(a, {
							listingKey: h
						}),
						x = v && v[b.token];
					if (y || x) return;
					e(T({
						key: h,
						fetchedToken: b.token
					}));
					const k = await F(r(), _, {
						after: b.token,
						dist: b.dist,
						sort: u,
						t: p,
						...o()(l, f.p),
						layout: Object(g.U)(a, {}).toLowerCase()
					}, Object(P.a)(a));
					if (k.ok) {
						const t = Object(S.f)(a, {
								listingKey: h
							}),
							n = {
								...k.body,
								commentIds: s()(k.body.commentIds, t)
							};
						e(q({
							fetchedToken: b.token,
							key: h,
							meta: a.meta,
							...n
						}))
					} else e(R({
						account: k.body.data ? k.body.data.account : null,
						error: k.error,
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				_ = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				y = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./node_modules/lodash/flatMap.js"),
				x = n.n(v),
				k = n("./src/lib/linkMatchers/index.ts"),
				C = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const E = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(E);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, a] = t.slice(r, r + 3);
						n.push(e), n.push([a, s])
					}
					return n
				};
			var F = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = x()(t, j)), e.parseRegularLinks && (t = x()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.c.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return a.a.createElement(w.b, {
								className: e.linkClassName,
								href: r,
								key: n
							}, s)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				O = n("./src/reddit/constants/parameters.ts"),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				S = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/selectors/contentGate.ts"),
				z = n("./src/reddit/selectors/meta.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/ContentGate/index.m.less"),
				A = n.n(N);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), q = d.a.wrapped(B.a, "PrivateKey", A.a), R = d.a.div("ButtonsContainer", A.a), U = d.a.div("Container", A.a), M = d.a.div("ContainerExp", A.a), Z = d.a.div("Description", A.a), W = d.a.div("PrivateSubredditDetails", A.a), G = d.a.div("PrivateSubredditDescription", A.a), H = d.a.h3("PrivateSubredditName", A.a), K = d.a.a("Link", A.a), V = d.a.wrapped(P.n, "LinkRouterButton", A.a), J = d.a.wrapped(P.m, "LinkButton", A.a), Q = d.a.wrapped(P.p, "SecondaryLinkButton", A.a), Y = d.a.wrapped(V, "GoHomeLinkButton", A.a), $ = d.a.wrapped(h.a, "CreateCommunityButton", A.a), X = d.a.img("Image", A.a), ee = d.a.img("ImagePlaceholder", A.a), te = d.a.wrapped(V, "LeftLinkRouterButton", A.a), ne = d.a.wrapped(J, "LeftLinkButton", A.a), re = d.a.wrapped(Q, "SecondaryLeftLinkButton", A.a), se = d.a.h3("Title", A.a), ae = d.a.div("PageBody", A.a), oe = d.a.div("InterstitialMessageWrapper", A.a), ie = d.a.div("QuarantineLearnMore", A.a), ce = Object(l.c)({
				isLoggedIn: I.R,
				origin: z.l,
				user: I.m,
				isPrivateSubredditContributorRequestPending: e => Object(L.a)(e),
				isSeo: z.h
			}), le = Object(D.v)(), de = Object(o.b)(ce, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.r)())
					}
				}
			}), ue = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					continueToGatedSubreddit: i,
					isLoggedIn: c,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: p,
					location: h,
					origin: b,
					pageLayer: v,
					quarantineRequiresEmail: x,
					quarantineMessage: k,
					quarantineMessageHtml: C,
					quarantineMessageRTJson: w,
					interstitialWarningMessage: E,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: D,
					setNSFWPreference: P,
					subredditDescription: B,
					subredditName: L,
					user: z
				} = e, I = async () => {
					if (c ? await P() : await Object(m.q)(), p) {
						const e = new URL(window.location.href);
						e.searchParams.set(O.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case S.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(se, null, T._("r/{community name} is a Reddit Premium community", [T._param("community name", L)], {
							hk: "2lyDwB"
						})), a.a.createElement(Z, null, T._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(R, null, z ? a.a.createElement(re, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, T._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(ne, {
							href: Object(u.a)(h, b),
							redditStyle: !0
						}, T._("Sign Up", null, {
							hk: "rvpjy"
						})), z ? a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Q, {
							href: Object(u.a)(h, b),
							redditStyle: !0
						}, T._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case S.a.Nsfw:
					case S.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(se, null, s === S.a.Nsfw ? T._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : T._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(Z, null, T._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(R, null, a.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, T._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Q, {
							onClick: I,
							redditStyle: !0
						}, T._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case S.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(q, null), a.a.createElement(se, null, "r/", L, " ", T._("is a private community", null, {
							hk: "7zZmq"
						})), B && B.length && a.a.createElement(W, null, a.a.createElement(H, null, "r/", L), a.a.createElement(G, null, a.a.createElement("div", null, B))), a.a.createElement(Z, null, T._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", T._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), T._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(R, null, z ? a.a.createElement(a.a.Fragment, null, !l && a.a.createElement(_.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: A.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), a.a.createElement(re, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, T._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(re, {
							href: Object(u.a)(h, b),
							redditStyle: !0
						}, T._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && a.a.createElement(y.a, {
							subredditName: L
						}));
					case S.a.QuarantinedSubreddit:
						const c = z && z.hasVerifiedEmail;
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), a.a.createElement(se, null, T._("r/{subredditName} is quarantined", [T._param("subredditName", L)], {
							hk: "2pxhFx"
						})), a.a.createElement(Z, null, a.a.createElement(oe, null, w ? a.a.createElement(g.b, {
							content: w,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : C ? a.a.createElement(f.a, {
							html: C
						}) : k || T._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !x || c ? T._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : z ? T._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : T._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), a.a.createElement(R, null, ((e, t, n) => {
							const s = e && e.hasVerifiedEmail;
							return !n || s ? a.a.createElement(R, null, a.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, T._("Go Back", null, {
								hk: "11Lp6m"
							})), a.a.createElement(Q, {
								onClick: t,
								redditStyle: !0
							}, T._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : a.a.createElement(R, null, a.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, T._("Go Back", null, {
								hk: "11Lp6m"
							})), a.a.createElement(Q, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, T._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(z, o, x)), a.a.createElement(ie, null, T._("Learn more about {=quarantined communities}.", [T._param("=quarantined communities", a.a.createElement(K, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, T._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case S.a.GatedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(se, null, T._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), a.a.createElement(Z, null, a.a.createElement(oe, null, D ? a.a.createElement(g.b, {
							content: D,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : j ? a.a.createElement(f.a, {
							html: j
						}) : E), T._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), a.a.createElement(R, null, a.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, T._("No Thank You", null, {
							hk: "4B26AR"
						})), a.a.createElement(Q, {
							onClick: i,
							redditStyle: !0
						}, T._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case S.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(se, null, n), (e => a.a.createElement(Z, null, e ? a.a.createElement(F, {
							linkClassName: A.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : T._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(R, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case S.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(se, null, T._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(R, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case S.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ee, null), a.a.createElement(se, null, T._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(Z, null, T._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(R, null, z && a.a.createElement($, {
							eventSource: "content_gate"
						}), a.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						}))));
					case S.a.ProfileDoesNotExist:
					case S.a.ProfileDeleted:
					case S.a.ProfileSuspended:
					case S.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case S.a.ProfileBlockedForLegalReason:
									return T._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case S.a.ProfileDeleted:
									return T._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case S.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, T._("This account has been {=suspended} .", [T._param("=suspended", a.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, T._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case S.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(se, null, T._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(Z, null, T._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(R, null, a.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						}))));
					case S.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(se, null, T._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(R, null, a.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						}))));
					case S.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(se, null, T._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(R, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = le(de(Object(i.i)(e => {
				const t = Object(s.useContext)(c.a) ? M : U;
				return a.a.createElement(t, null, a.a.createElement("div", {
					"data-testid": "content-gate"
				}, a.a.createElement(ae, null, ue(e))), a.a.createElement(b.b, null))
			})))
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
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				v = g.a.wrapped(d.c, "StyledTooltip", f.a),
				x = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.sb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(o.b)(x, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(_.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: o,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d,
					onClick: u
				} = e;
				return a.a.createElement(p.t, {
					className: t,
					disabled: d || l,
					onClick: e => {
						u && u(e), i(c)
					},
					onMouseEnter: s,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? a.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: y,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? a.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: y,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				l = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.div("UserAgreement", l.a), m = i.a.a("UserAgreementLink", l.a), p = i.a.a("PrivacyLink", l.a);
			var _;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(_ || (_ = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(o.a)(l.a.FooterContainer, {
					[l.a.mIsGrey]: e.textColor === _.Grey,
					[l.a.mIsWhite]: e.textColor === _.White
				})
			}, s.a.createElement(u, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} Reddit, Inc. © {year}. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", s.a.createElement(m, {
				href: `${a.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "1Dc18v"
			}))), d._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${a.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1Ubjrd"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "yxLlI"
			})))
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

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: n,
					isLast: r,
					...o
				} = e;
				return s.a.createElement("div", c({
					className: Object(a.a)(i.a.border, {
						[i.a.isFirst]: n,
						[i.a.isLast]: r
					}, t)
				}, o))
			}
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
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/constants/gold.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				_ = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/helpers/getClickInfo.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/communityAwards.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				v = n.n(y);
			const x = u.a.div("ProfileOwnerCommentWrapper", v.a),
				k = u.a.div("CommentContentWrapper", v.a),
				C = u.a.div("Wrapper", v.a),
				w = u.a.div("CommentSeparator", v.a),
				E = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(b.c)(e, t),
					isAwarded: (e, t) => {
						const n = Object(b.c)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(f.a)(e, t);
							return n && n.coinPrice >= l.g
						})
					},
					isNightmodeOn: g.fb
				}), e => ({
					openPost: t => e(Object(_.K)(t))
				}));
			class j extends o.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: r,
						isAwarded: a,
						isFirst: i,
						isLast: c,
						isNightmodeOn: l,
						profileName: u,
						showModTools: p
					} = this.props, _ = u === e.author ? F : O;
					return o.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							r({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, o.a.createElement(C, {
						className: Object(d.a)({
							[v.a.isFirst]: i,
							[v.a.isLast]: c,
							[v.a.isAwarded]: a,
							[v.a.isNightmodeOn]: l
						})
					}, s()(n + 1, e => o.a.createElement(w, {
						key: e
					})), o.a.createElement(k, null, _(t, u, p))))
				}
			}
			const F = (e, t, n) => o.a.createElement(x, null, O(e, t, n, !0, !0)),
				O = function(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						s = arguments.length > 4 ? arguments[4] : void 0;
					return o.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: r,
						showModTools: n,
						isExpanded: !!s
					})
				};
			t.a = E(j)
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
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				l = e => {
					const t = Object(o.e)(i.e),
						n = Object(o.e)(i.a);
					return t || n ? a.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return L
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				y = n("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				v = n("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				x = n("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				k = n("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				C = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				w = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				E = n("./src/reddit/actions/contentGate.ts"),
				j = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				F = n.n(j);
			const O = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				D = () => s.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				P = () => s.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				B = e => {
					const t = Object(i.d)(),
						n = Object(h.b)(),
						r = Object(i.e)(C.g),
						d = Object(a.useCallback)(() => {
							r === C.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						u = (e => e ? o.a.createElement("div", {
							className: F.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), o.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : o.a.createElement("div", {
							className: F.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === C.a.Blurred);
					return Object(a.useEffect)(() => {
						Object(g.d)(r)
					}, [r]), o.a.createElement("div", {
						className: F.a.mainCta
					}, o.a.createElement(k.b, null), u, o.a.createElement("div", {
						className: F.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: F.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: F.a.buttonContainer
					}, o.a.createElement(f.j, {
						className: F.a.logIn,
						onClick: () => {
							n(Object(x.a)()), d(), Object(g.c)(g.a.Login), t(Object(m.openLoginModal)())
						}
					}, D()), o.a.createElement(f.j, {
						className: F.a.cancel,
						onClick: () => {
							Object(l.b)(), n(Object(x.b)()), Object(g.c)(g.a.Dismiss), t(Object(c.b)("/"))
						}
					}, P())))
				},
				S = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return o.a.createElement("div", {
						className: F.a.qrCodeOuter
					}, o.a.createElement("div", {
						className: F.a.qrCodeInner
					}, o.a.createElement("img", {
						className: F.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), o.a.createElement("div", {
						className: F.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), o.a.createElement("div", {
						className: F.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), o.a.createElement("img", {
						className: F.a.sneakySnoo,
						src: t
					})))
				}),
				L = e => {
					const t = Object(h.b)(),
						{
							contentTitle: n
						} = e,
						r = Object(i.e)(C.i),
						s = Object(i.e)(C.j),
						a = Object(i.e)(C.g),
						c = Object(i.e)(w.c);
					o.a.useEffect(() => {
						c.isNewDesignVariant ? t(Object(v.d)()) : t(Object(x.c)())
					}, [c, t]);
					const l = a === C.a.Blurred ? _.a.White : a === C.a.NoPreview ? _.a.Grey : void 0;
					return o.a.createElement("div", {
						className: F.a.container
					}, c.isNewDesignVariant ? o.a.createElement(z, {
						contentTitle: n
					}) : o.a.createElement(B, {
						contentTitle: n
					}), o.a.createElement("div", {
						className: Object(d.a)(F.a.footerWrapper, {
							[F.a.mIsModal]: a === C.a.Blurred
						})
					}, o.a.createElement(_.b, {
						textColor: l
					})), o.a.createElement(S, {
						qrCodeAsset: (() => r === b.hd.Enabled || s === b.hb.BlurredPreview || s === b.hb.NoPreview ? O.d2x_nsfw_signup_blocking_de_v1 : O.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				z = e => {
					const t = Object(i.d)(),
						n = Object(h.b)(),
						r = Object(i.e)(C.h);
					return Object(a.useEffect)(() => {
						Object(y.c)(r)
					}, [r]), o.a.createElement("div", {
						className: Object(d.a)(F.a.mainCta, {
							[F.a.skippable_buttons]: r === b.ib.SkippableButtons,
							[F.a.skippable_text]: r === b.ib.SkippableText
						})
					}, o.a.createElement("div", {
						className: F.a.contentDescription
					}, o.a.createElement(k.b, {
						fill: k.a.BLACK
					}), o.a.createElement("span", {
						className: F.a.cta
					}, e.contentTitle), o.a.createElement("span", {
						className: Object(d.a)(F.a.warning, F.a.warning__bypassable)
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), o.a.createElement("div", {
						className: F.a.cta
					}, (() => s.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), o.a.createElement("div", {
						className: F.a.buttonContainer
					}, o.a.createElement(f.j, {
						className: F.a.logIn,
						onClick: () => {
							n(Object(v.a)()), Object(y.b)(y.a.Login), t(Object(m.openLoginModal)())
						}
					}, D()), r === b.ib.SkippableButtons && o.a.createElement("div", {
						className: F.a.divider
					}, o.a.createElement("div", {
						className: F.a.dividerLine
					}), o.a.createElement("div", {
						className: F.a.dividerText
					}, (() => s.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), o.a.createElement("div", {
						className: F.a.dividerLine
					})), o.a.createElement(f.j, {
						className: F.a.continue,
						onClick: async () => {
							n(Object(v.b)()), Object(y.b)(y.a.Continue), Object(E.q)(), Object(w.d)(), window.location.reload()
						}
					}, (() => s.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), o.a.createElement(f.j, {
						className: Object(d.a)(F.a.continue, F.a.dismiss, {
							[F.a.no_border]: r === b.ib.SkippableText
						}),
						onClick: () => {
							n(Object(v.c)()), Object(y.b)(y.a.Dismiss), t(Object(c.b)("/"))
						}
					}, r === b.ib.SkippableText ? (() => s.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : P())))
				}
		},
		"./src/reddit/helpers/counters/nsfwBypassableBlocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r, s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/sample/index.ts"),
				o = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				i = n("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(r || (r = {}));
			const c = e => {
					Object(o.b)() || Object(i.b)(s.n.Redesign, {
						type: i.a.NsfwBypassableBlocking,
						data: {
							action: e
						}
					})
				},
				l = e => {
					!Object(o.b)() && e && Object(a.b)(10) && Object(i.b)(s.n.Redesign, {
						type: i.a.NsfwBypassableBlocking,
						data: {
							action: r.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = "nsfw_dialog_bypassable",
				a = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "view",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				o = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "login"
					}
				}),
				i = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "dismiss",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "back"
					}
				}),
				c = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "continue"
					}
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = "nsfw_dialog",
				a = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "view",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				o = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				i = () => e => ({
					...Object(r.q)(e),
					source: "xpromo",
					action: "dismiss",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				})
		},
		"./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				a = n.n(s);
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(r || (r = {}));
			t.b = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "60",
				viewBox: "0 0 60 60",
				xmlns: "http://www.w3.org/2000/svg",
				width: "60"
			}, a.a.createElement("path", {
				d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
				fill: e.fill || r.DEFAULT
			}), a.a.createElement("path", {
				d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
				fill: e.fill || r.DEFAULT
			}), a.a.createElement("path", {
				d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
				fill: e.fill || r.DEFAULT
			}))
		},
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "-1 -1 21 21"
			}, s.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
			}))
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, n) {
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
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-router/esm/react-router.js"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/Event.ts");
			var c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			var d = e => s.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, s.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), s.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), s.a.createElement("defs", null, s.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, s.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = n.n(m);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					username: t,
					avatar: n,
					history: a,
					location: m
				} = e;
				const h = Object(c.a)();
				return Object(r.useEffect)(() => {
					h((() => e => {
						var t, n;
						return {
							source: i.e.BlockedProfileInterstitial,
							action: i.c.View,
							noun: i.d.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (n = null === (t = o.V(e)) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null
							},
							...o.q(e)
						}
					})())
				}, [h, t]), s.a.createElement("div", {
					className: p.a.container
				}, s.a.createElement(d, {
					className: p.a.accent
				}), s.a.createElement("div", {
					className: p.a.avatarContainer
				}, s.a.createElement("img", {
					className: p.a.avatar,
					src: null != n ? n : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: _._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), s.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, s.a.createElement(l.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), s.a.createElement("h3", {
					className: p.a.title
				}, _._("u/{name} is blocked", [_._param("name", t)], {
					hk: "18rExM"
				})), s.a.createElement("p", {
					className: p.a.subtitle
				}, _._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), s.a.createElement("div", {
					className: p.a.btnContainer
				}, s.a.createElement(u.t, {
					className: p.a.btn,
					to: `${m.pathname}?consent=true`,
					kind: u.b.InternalLink,
					priority: u.c.Primary,
					size: u.d.L,
					onClick: () => h((() => e => {
						var t, n;
						return {
							source: i.e.BlockedProfileInterstitial,
							action: i.c.Accept,
							noun: i.d.BlockedProfileInterstitial,
							targetUser: {
								id: null !== (n = null === (t = o.V(e)) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null
							},
							...o.q(e)
						}
					})()),
					isFullWidth: !0,
					isSquare: !0
				}, _._("Continue", null, {
					hk: "3eqDZf"
				})), s.a.createElement(u.t, {
					className: p.a.btn,
					to: "#",
					kind: u.b.InternalLink,
					priority: u.c.Secondary,
					size: u.d.L,
					onClick: () => {
						h((() => e => {
							var t, n;
							return {
								source: i.e.BlockedProfileInterstitial,
								action: i.c.Deny,
								noun: i.d.BlockedProfileInterstitial,
								targetUser: {
									id: null !== (n = null === (t = o.V(e)) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null
								},
								...o.q(e)
							}
						})()), a.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, _._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/higherOrderComponents/withLSWatcher.tsx"),
				p = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				_ = n("./src/reddit/actions/pages/profileComments/index.ts"),
				h = n("./src/reddit/actions/pages/profileShared.ts"),
				b = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/EmptyProfile/index.ts"),
				g = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				y = n("./src/reddit/components/JumpToContent/index.tsx"),
				v = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				k = n("./src/lib/lessComponent.tsx"),
				C = n("./src/reddit/components/ClassicPost/index.tsx"),
				w = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				E = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				F = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				O = n("./src/reddit/constants/postLayout.ts"),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = n("./src/reddit/selectors/commentSelector.ts"),
				S = n("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				L = n.n(S);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = k.a.wrapped(C.default, "ClassicPost", L.a),
				N = k.a.wrapped(E.a, "OverviewCommentPost", L.a),
				A = Object(D.v)({
					currentProfileName: D.j,
					pageLayer: e => e
				}),
				T = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: n
						} = t;
						return Object(B.c)(e, {
							commentId: n
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: n
						} = t;
						if (n) return ((e, t) => {
							const {
								users: n
							} = e, r = t.toLowerCase(), s = n.models[r];
							return s ? s.username : void 0
						})(e, n)
					}
				});
			var q = A(Object(i.b)(T)(e => {
				const {
					comment: t,
					itemId: n,
					isFirstInCommentList: r,
					isLastInCommentList: s,
					layout: a,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (a === O.g.Compact) return o.a.createElement(w.a, e);
				const {
					height: l,
					width: d,
					...u
				} = e;
				return o.a.createElement(R, u, r && o.a.createElement(j.a, {
					isFirst: !0
				}, a === O.g.Large ? o.a.createElement(I, z({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : o.a.createElement(N, z({}, e, {
					commentId: n,
					profileName: i
				}))), o.a.createElement(j.a, {
					isLast: s
				}, o.a.createElement(F.a, {
					commentId: n,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: n,
					profileName: i,
					showModTools: c
				})))
			}));
			const R = Object(x.a)(e => o.a.createElement("div", {
				className: Object(v.a)(L.a.backgroundMargin, {
					[L.a.isFirstInCommentList]: e.isFirstInCommentList,
					[L.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(P.e)(e)
				}
			}, e.children));
			var U = n("./src/reddit/components/ProfileItemList/index.tsx"),
				M = n("./node_modules/lodash/noop.js"),
				Z = n.n(M),
				W = n("./src/reddit/actions/ads/index.ts"),
				G = n("./src/reddit/actions/comment/list.ts"),
				H = n("./src/reddit/actions/post.ts"),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				J = n("./src/reddit/helpers/trackers/post.ts"),
				Q = n("./src/reddit/featureFlags/index.ts"),
				Y = n("./src/reddit/selectors/comments.ts"),
				$ = n("./src/reddit/selectors/posts.ts"),
				X = n("./src/reddit/selectors/profileComments.ts"),
				ee = n("./src/reddit/selectors/subreddit.ts"),
				te = n("./src/reddit/selectors/tracking.ts"),
				ne = n("./src/reddit/selectors/user.ts");
			const re = Object(D.v)(),
				se = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ne.m,
					measureScrollFPS: Q.d.measureScrollFPS,
					layout: D.U,
					loadMore: X.d,
					subredditsById: ee.eb,
					viewportDataLoaded: te.b,
					commentsById: Y.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: $.I,
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
				ae = Object(c.c)(se),
				oe = Object(i.b)(ae, e => ({
					onBottomViewed: (t, n) => e(Object(G.c)(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(W.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.K)(t)),
					fireAdPixelsOfType: Z.a,
					trackOnPostEnteredViewport: Z.a
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(J.n)(e, t),
					postComponentForLayout: V.b
				}));

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = e => o.a.createElement(q, ie({}, e, {
					allowModToolsUnderComments: !0
				})),
				le = (e => Object(K.c)(re(oe(e))))(U.a);
			var de = e => o.a.createElement(le, ie({}, e, {
					itemComponent: ce
				})),
				ue = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				_e = n("./src/reddit/helpers/name/index.ts"),
				he = n("./src/reddit/helpers/trackers/screenview.ts"),
				be = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				fe = n("./src/reddit/layout/page/Listing/index.tsx"),
				ge = n("./src/reddit/models/ContentGate.ts"),
				ye = n("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ve = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				xe = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				ke = n("./src/reddit/selectors/profile.ts");

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(D.v)(),
				Ee = Object(c.a)(D.G, ne.mb, (e, t) => {
					let {
						location: n
					} = t;
					return s()([...Object(d.a)(n.search)])
				}, D.U, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(ke.k)(e, {
						profileName: n.params.profileName
					})
				}, ne.S, (e, t) => {
					let {
						match: n
					} = t;
					return Object(ne.h)(e, l.pc + n.params.profileName)
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(ne.N)(e, {
						profileName: n.params.profileName
					})
				}, ve.g, xe.a, (e, t, n, r, s, a, o, i, c, l, d) => {
					var m;
					const {
						sort: p,
						t: _
					} = Object(h.b)(n), b = Object(u.a)(`u_${s}`, p, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: r,
						listingKey: b,
						profileName: s,
						sort: p,
						timeSort: _,
						avatar: null === (m = null == a ? void 0 : a.icon) || void 0 === m ? void 0 : m.url,
						isBlocked: c,
						nsfwBlockingExperiment: l,
						showNewDesignBlocking: d
					}
				}),
				je = Object(i.b)(Ee, (e, t) => ({
					onLoadMore: () => e(Object(_.moreItemsRequested)()),
					onLayoutChange: () => e(Object(_.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(p.a)())
				}));
			t.default = we(je(Object(m.a)(Object(be.d)(e => {
				const {
					avatar: t,
					contentGateInfo: n,
					isBlocked: r,
					isOwnProfile: s,
					isProfileNSFW: i,
					listingKey: c,
					nsfwBlockingExperiment: d,
					onLoadMore: u,
					onLayoutChange: m,
					openNsfwModal: p,
					over18Prefs: _,
					pageLayer: h,
					profileName: v,
					sort: x,
					timeSort: k,
					showNewDesignBlocking: C
				} = e;
				if (Object(a.useEffect)(() => {
						i && !s && d === ve.a.Blurred && p()
					}, [d, s, i, p]), !v || !h) return null;
				if (n && n.profileDeleted) return o.a.createElement(b.default, {
					contentGateType: ge.a.ProfileDeleted,
					profileName: v
				});
				if (n && n.profileSuspended) return o.a.createElement(b.default, {
					contentGateType: ge.a.ProfileSuspended,
					profileName: v
				});
				if (451 === h.status || n && n.profileBlockedForLegalReason) return o.a.createElement(b.default, {
					contentGateType: ge.a.ProfileBlockedForLegalReason,
					profileName: v
				});
				const w = h.queryParams && "true" === h.queryParams.consent;
				if (403 === h.status || r && !w) return o.a.createElement(ye.a, {
					username: v,
					avatar: t
				});
				if (404 === h.status) return o.a.createElement(b.default, {
					contentGateType: ge.a.ProfileDoesNotExist,
					profileName: v
				});
				const E = v.toLowerCase(),
					j = `/user/${v}/comments/`,
					F = {
						listingKey: c,
						listingName: E
					};
				if (i && !s && d === ve.a.NoPreview && C) return o.a.createElement(pe.a, {
					contentTitle: Object(_e.e)(v)
				});
				if (!_ && i && !s && d !== ve.a.Blurred) return o.a.createElement(b.default, {
					contentGateType: ge.a.Nsfw,
					subredditName: v
				});
				const O = {
					sort: x,
					baseUrl: j,
					sortOptions: l.Ib,
					timeSort: k
				};
				return o.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(ue.a, {
						profileName: v,
						viewBlockedConsent: w
					})),
					content: o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, O), o.a.createElement(y.a, null), o.a.createElement(de, {
						listingKey: c,
						listingName: E,
						listingViewed: (e, t) => Object(he.n)(c, x, t, e, k),
						noPostsComponent: () => o.a.createElement(f.b, {
							profileName: v,
							timeSort: k
						}),
						onLoadMore: u,
						onTryAgain: m,
						inSubredditOrProfile: !1
					})),
					sidebar: o.a.createElement(me.a, Ce({}, F, {
						profileName: v
					}))
				})
			}))))
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => {
				if (!Object(a.S)(e)) return !1;
				const t = Object(s.d)(e);
				if (!t) return !1;
				const n = Object(a.h)(e, t);
				if (!n) return !1;
				if (!n.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: o
				} = n;
				if (!o) return !1;
				const i = 30 * r.D;
				return o > Date.now() - i
			}
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/localStorage.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts"),
				l = n("./node_modules/reselect/es/index.js");
			const d = 30 * r.ob,
				u = () => {
					localStorage.setItem(o.b.XpromoConsolidation, (new Date).toString())
				},
				m = () => {
					if (!Object(s.a)()) return !1;
					const e = localStorage.getItem(o.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(o.b.XpromoConsolidation), !0) : Date.now() > t + d
				},
				p = (e, t) => t === i.a.NoPreview && (e === a.ib.SkippableButtons || e === a.ib.SkippableText),
				_ = (e, t) => t === i.a.NoPreview && e === a.ib.NoUpsell,
				h = Object(l.a)(i.h, i.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === i.a.NoPreview && !p(e, t) && !_(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && p(e, t),
						isOldDesignVariant: !(!e || !t) && _(e, t),
						variant: e
					}
				}),
				b = Object(l.a)(h, c.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.2bc6334557b4df069cb3.js.map