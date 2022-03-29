// https://www.redditstatic.com/desktop2x/ProfileComments.35efa5d15197d901a06d.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
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

			function o(e) {
				return "[object Function]" === s(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
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
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(l), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function d(e, t) {
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
						}(r.validate) ? o(r.validate) ? n.validate = r.validate : d(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(o(r.normalize) ? n.normalize = r.normalize : r.normalize ? d(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(r) ? d(t, r): c.push(t)
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
				})).map(i).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
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

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, s, o, i, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = r.index + r[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) r.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
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
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/chat/controls/Svg/index.m.less"),
				c = r.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: n,
						hover: i
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: r,
						[c.a.active]: n,
						[c.a.hover]: !!i
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
				return h
			})), r.d(t, "g", (function() {
				return _
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
				o = r("./node_modules/tlds/index.js"),
				i = r.n(o),
				a = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./node_modules/lodash/values.js"),
				l = r.n(c);
			const d = e => l()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				_ = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				b = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = s()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				y = p.normalize;
			p.normalize = e => {
				y.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const r = d(e.text);
						return !r || r && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(a.a, "")).filter(e => e)
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
				const o = Object(s.e)(e),
					i = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${i}`
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileCommentsPending", (function() {
				return z
			})), r.d(t, "profileCommentsLoaded", (function() {
				return A
			})), r.d(t, "profileCommentsFailed", (function() {
				return B
			})), r.d(t, "profileCommentsRequested", (function() {
				return T
			})), r.d(t, "moreItemsPending", (function() {
				return N
			})), r.d(t, "moreItemsLoaded", (function() {
				return R
			})), r.d(t, "moreItemsFailed", (function() {
				return q
			})), r.d(t, "moreItemsRequested", (function() {
				return M
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/difference.js"),
				s = r.n(n),
				o = r("./node_modules/lodash/pick.js"),
				i = r.n(o),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				l = r("./src/reddit/actions/contentGate.ts"),
				d = r("./src/reddit/actions/externalAccount.ts"),
				u = r("./src/reddit/actions/moderatingSubreddits.ts"),
				m = r("./src/reddit/actions/pages/profileShared.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				h = r("./src/reddit/actions/profile/index.ts"),
				_ = r("./src/reddit/actions/subreddit.ts"),
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
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t, r, n) => {
				let s = Object(E.a)(Object(x.a)(Object(w.a)(Object(j.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return n && (s = Object(C.a)(s)), Object(k.a)(e, {
					data: r,
					endpoint: s,
					method: v.jb.GET
				})
			};
			var O = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				P = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				D = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				L = r("./src/reddit/selectors/profile.ts"),
				S = r("./src/reddit/selectors/profileComments.ts"),
				I = r("./src/reddit/actions/pages/profileComments/constants.ts");
			const z = Object(a.a)(I.f),
				A = Object(a.a)(I.e),
				B = Object(a.a)(I.d),
				T = e => async (t, r, n) => {
					const {
						queryParams: s,
						params: o
					} = e, {
						sort: a,
						t: g
					} = Object(m.b)(s), {
						profileName: y
					} = o, x = Object(c.a)(`u_${y}`, a, e.queryParams), {
						profileCommentsPage: v
					} = r(), k = v.commentIds[x], E = v.api.error[x], C = v.api.pending[x];
					if (await t(h.d(y)), C || k && !E) {
						if (k) {
							const e = Object(L.q)(r(), {
								profileName: y
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					const w = {
						...i()(e.queryParams, [...b.m, b.i]),
						sort: a,
						t: Object(O.a)(a, g)
					};
					t(z({
						key: x
					}));
					const j = await Object(P.a)("profileComments", () => F(n.apiContext(), y, w, Object(D.a)(r())));
					if (!j.ok) return t(B({
						account: j.body.data ? j.body.data.account : null,
						error: j.body.reason ? {
							type: j.body.reason
						} : j.error,
						key: x
					})), j.body.reason === f.a.DeletedProfile && t(Object(l.s)({
						profileName: y
					})), void t(p.n(j.status));
					const S = j.body;
					t(A({
						key: x,
						meta: r().meta,
						...S
					})), await Promise.all([t(Object(m.c)(y)), t(Object(_.q)()), t(Object(u.b)()), t(d.o(y))])
				}, N = Object(a.a)(I.c), R = Object(a.a)(I.b), q = Object(a.a)(I.a), M = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const o = t(),
						{
							currentPage: a
						} = o.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: l,
						params: d
					} = a.routeMatch.match, {
						sort: u,
						t: p
					} = Object(m.b)(l), {
						profileName: h
					} = d, _ = Object(c.a)(`u_${h}`, u, l), f = Object(S.d)(o, {
						listingKey: _
					});
					if (!f) return;
					const y = Object(S.b)(o, {
							listingKey: _
						}),
						x = Object(S.c)(o, {
							listingKey: _
						}),
						v = x && x[f.token];
					if (y || v) return;
					e(N({
						key: _,
						fetchedToken: f.token
					}));
					const k = await F(n(), h, {
						after: f.token,
						dist: f.dist,
						sort: u,
						t: p,
						...i()(l, b.m),
						layout: Object(g.R)(o, {}).toLowerCase()
					}, Object(D.a)(o));
					if (k.ok) {
						const t = Object(S.f)(o, {
								listingKey: _
							}),
							r = {
								...k.body,
								commentIds: s()(k.body.commentIds, t)
							};
						e(R({
							fetchedToken: f.token,
							key: _,
							meta: o.meta,
							...r
						}))
					} else e(q({
						account: k.body.data ? k.body.data.account : null,
						error: k.error,
						fetchedToken: f.token,
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
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loginHref/index.ts"),
				m = r("./src/reddit/actions/contentGate.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				h = r("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				_ = r("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = r("./src/reddit/components/Footer/index.tsx"),
				b = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = r("./src/reddit/components/RichTextJson/index.tsx"),
				y = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = r("./node_modules/lodash/flatMap.js"),
				v = r.n(x),
				k = r("./src/lib/linkMatchers/index.ts"),
				E = r("./src/lib/linkMatchers/customLinks.ts"),
				C = r("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(w);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, o] = t.slice(n, n + 3);
						r.push(e), r.push([o, s])
					}
					return r
				};
			var F = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = v()(t, j)), e.parseRegularLinks && (t = v()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return o.a.createElement(C.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return o.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				O = r("./src/reddit/constants/parameters.ts"),
				P = r("./src/reddit/contexts/PageLayer/index.tsx"),
				D = r("./src/reddit/controls/Button/index.tsx"),
				L = r("./src/chat/controls/Svg/index.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => o.a.createElement(L.a, S({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				z = r("./src/reddit/models/ContentGate.ts"),
				A = r("./src/lib/constants/index.ts"),
				B = r("./src/reddit/selectors/platform.ts"),
				T = r("./src/reddit/selectors/user.ts");
			var N = r("./src/reddit/selectors/meta.ts"),
				R = r("./src/reddit/components/ContentGate/index.m.less"),
				q = r.n(R);
			const {
				fbt: M
			} = r("./node_modules/fbt/lib/FbtPublic.js"), U = d.a.wrapped(I, "PrivateKey", q.a), Z = d.a.div("ButtonsContainer", q.a), W = d.a.div("Container", q.a), H = d.a.div("ContainerExp", q.a), K = d.a.div("Description", q.a), G = d.a.div("PrivateSubredditDetails", q.a), V = d.a.div("PrivateSubredditDescription", q.a), $ = d.a.h3("PrivateSubredditName", q.a), J = d.a.a("Link", q.a), Q = d.a.wrapped(D.n, "LinkRouterButton", q.a), Y = d.a.wrapped(D.m, "LinkButton", q.a), X = d.a.wrapped(D.q, "SecondaryLinkRouterButton", q.a), ee = d.a.wrapped(D.p, "SecondaryLinkButton", q.a), te = d.a.wrapped(Q, "GoHomeLinkButton", q.a), re = d.a.wrapped(_.a, "CreateCommunityButton", q.a), ne = d.a.img("Image", q.a), se = d.a.img("ImagePlaceholder", q.a), oe = d.a.wrapped(Q, "LeftLinkRouterButton", q.a), ie = d.a.wrapped(Y, "LeftLinkButton", q.a), ae = d.a.wrapped(ee, "SecondaryLeftLinkButton", q.a), ce = d.a.wrapped(X, "SecondaryLeftLinkRouterButton", q.a), le = d.a.h3("Title", q.a), de = d.a.div("PageBody", q.a), ue = d.a.div("InterstitialMessageWrapper", q.a), me = Object(l.c)({
				isLoggedIn: T.O,
				origin: N.j,
				user: T.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(T.P)(e)) return !1;
					const t = Object(B.d)(e);
					if (!t) return !1;
					const r = Object(T.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * A.B;
					return n > Date.now() - s
				})(e),
				isSeo: N.g
			}), pe = Object(P.u)(), he = Object(i.b)(me, (e, t) => {
				let {
					subredditName: r
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(r)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(r)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), _e = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: i,
					isLoggedIn: a,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: d,
					location: p,
					origin: _,
					pageLayer: f,
					quarantineRequiresEmail: x,
					quarantineMessage: v,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: E,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: w,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: P,
					subredditDescription: D,
					subredditName: L,
					user: S
				} = e, I = async () => {
					if (a ? await P() : await Object(m.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(O.h, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case z.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(le, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", L)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(Z, null, S ? o.a.createElement(ae, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ie, {
							href: Object(u.a)(p, _),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, _),
							redditStyle: !0
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case z.a.Nsfw:
					case z.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(le, null, r === z.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(Z, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, M._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: I,
							redditStyle: !0
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case z.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement(le, null, "r/", L, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), D && D.length && o.a.createElement(G, null, o.a.createElement($, null, "r/", L), o.a.createElement(V, null, o.a.createElement("div", null, D))), o.a.createElement(K, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(Z, null, S ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(ae, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ae, {
							href: Object(u.a)(p, _),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && o.a.createElement(y.a, {
							subredditName: L
						}));
					case z.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(le, null, M._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, M._("This community is {=quarantined}", [M._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, M._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, E ? o.a.createElement(g.a, {
							content: E,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : k ? o.a.createElement(b.a, {
							html: k
						}) : v || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), M._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(Z, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? o.a.createElement(Z, null, o.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Y, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, M._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(Z, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, M._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, s, x)));
					case z.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(le, null, M._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(K, null, o.a.createElement(ue, null, j ? o.a.createElement(g.a, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : w ? o.a.createElement(b.a, {
							html: w
						}) : C), M._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(Z, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, M._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: i,
							redditStyle: !0
						}, M._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case z.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(le, null, M._("r/{community name} has been banned from Reddit", [M._param("community name", L)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(F, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(Z, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case z.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(Z, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case z.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, null), o.a.createElement(le, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(Z, null, S && o.a.createElement(re, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case z.a.ProfileDoesNotExist:
					case z.a.ProfileDeleted:
					case z.a.ProfileSuspended:
					case z.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case z.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case z.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case z.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case z.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(le, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(Z, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case z.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(Z, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case z.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(le, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(Z, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(he(Object(a.i)(e => {
				const t = Object(s.useContext)(c.a) ? H : W;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(de, null, _e(e))), o.a.createElement(f.a, null))
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
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = r.n(f),
				g = r("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				x = g.a.wrapped(d.c, "StyledTooltip", b.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(_.ob)(e),
					userIsSuspended: _.W
				});
			t.a = Object(i.b)(v, (e, t) => {
				let {
					eventSource: r
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(r)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: r,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: d || l,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? o.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: y,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(x, {
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
		"./src/reddit/components/Footer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/config.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/Footer/index.m.less"),
				c = r.n(a);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = i.a.div("FooterContainer", c.a), u = i.a.div("UserAgreement", c.a), m = i.a.a("UserAgreementLink", c.a), p = i.a.a("PrivacyLink", c.a);
			t.a = () => s.a.createElement(d, null, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "2srkM2"
			}))), l._param("=Privacy Policy", s.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "335pdO"
			})))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, r) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, r) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/ClassicPost/index.tsx"),
				i = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/react-redux/es/index.js")),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/constants/gold.ts"),
				l = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/components/CommentContainer/index.tsx"),
				p = r("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = r("./src/reddit/helpers/getClickInfo.ts"),
				_ = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/communityAwards.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/OverviewChronoComment/index.m.less"),
				x = r.n(y);
			const v = Object(i.b)(() => Object(a.c)({
				comment: f.b,
				isAwarded: (e, t) => {
					const r = Object(f.b)(e, t);
					return !(!r || !r.awardCountsById) && Object.keys(r.awardCountsById).some(t => {
						const r = Object(b.a)(e, t);
						return r && r.coinPrice >= c.g
					})
				},
				isNightmodeOn: g.cb
			}), e => ({
				openPost: t => e(Object(u.L)(t))
			}));
			var k = Object(d.a)(v(e => {
					const {
						comment: t,
						commentId: r,
						first: n,
						isAwarded: o,
						isNightmodeOn: i,
						last: a,
						openPost: c,
						showModTools: d
					} = e;
					if (!t) return null;
					return s.a.createElement(m.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(_.e)(e)
						}
					}, s.a.createElement("div", {
						className: Object(l.a)(x.a.commentOuterWrapper, {
							[x.a.isLast]: a,
							[x.a.isAwarded]: o,
							[x.a.isNightmodeOn]: i
						})
					}, s.a.createElement("div", {
						className: Object(l.a)(x.a.commentWrapper, {
							[x.a.isFirst]: n
						})
					}, s.a.createElement("div", {
						className: x.a.commentSeparator
					}), t.parentId && s.a.createElement("div", {
						className: x.a.commentSeparator
					}), s.a.createElement("div", {
						className: x.a.commentContentWrapper
					}, s.a.createElement(p.a, {
						commentId: r,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: d,
						isExpanded: !0
					})))))
				})),
				E = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				C = r("./src/reddit/contexts/PageLayer/index.tsx"),
				w = r("./src/reddit/helpers/isComment.ts"),
				j = r("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				F = r.n(j),
				O = r("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(C.u)({
					currentProfileName: C.i,
					isCommentsPage: C.x,
					isCommentPermalink: C.w,
					isProfilePostListing: C.L,
					pageLayer: e => e
				}),
				L = O.a.wrapped(E.a, "OverviewCommentPost", F.a),
				S = O.a.wrapped(o.default, "ClassicPost", F.a);
			t.a = D(e => {
				const {
					itemId: t,
					isFirstInCommentList: r,
					isLastInCommentList: n,
					allowModToolsUnderComments: o,
					height: i,
					width: a,
					...c
				} = e;
				return Object(w.a)(t) ? r ? s.a.createElement(s.a.Fragment, null, s.a.createElement(L, P({}, c, {
					availableWidth: a,
					commentId: t
				})), s.a.createElement(k, {
					commentId: t,
					first: r,
					last: n,
					showModTools: o
				})) : s.a.createElement(k, {
					commentId: t,
					first: r,
					last: n,
					showModTools: o
				}) : s.a.createElement(S, P({}, c, {
					inSubredditOrProfile: !1
				}))
			})
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
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					isFirst: t,
					isLast: r,
					...n
				} = e;
				return s.a.createElement("div", c({
					className: Object(o.a)(a.a.border, {
						[a.a.isFirst]: t,
						[a.a.isLast]: r
					})
				}, n))
			}
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
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/constants/gold.ts"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				m = r("./src/reddit/components/CommentContainer/index.tsx"),
				p = r("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = r("./src/reddit/actions/post.ts"),
				_ = r("./src/reddit/helpers/getClickInfo.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/communityAwards.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				x = r.n(y);
			const v = u.a.div("ProfileOwnerCommentWrapper", x.a),
				k = u.a.div("CommentContentWrapper", x.a),
				E = u.a.div("Wrapper", x.a),
				C = u.a.div("CommentSeparator", x.a),
				w = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const r = Object(f.b)(e, t);
						return !(!r || !r.awardCountsById) && Object.keys(r.awardCountsById).some(t => {
							const r = Object(b.a)(e, t);
							return r && r.coinPrice >= l.g
						})
					},
					isNightmodeOn: g.cb
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class j extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: r,
						openPost: n,
						isAwarded: o,
						isFirst: a,
						isLast: c,
						isNightmodeOn: l,
						profileName: u,
						showModTools: p
					} = this.props, h = u === e.author ? F : O;
					return i.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(_.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(E, {
						className: Object(d.a)({
							[x.a.isFirst]: a,
							[x.a.isLast]: c,
							[x.a.isAwarded]: o,
							[x.a.isNightmodeOn]: l
						})
					}, s()(r + 1, e => i.a.createElement(C, {
						key: e
					})), i.a.createElement(k, null, h(t, u, p))))
				}
			}
			const F = (e, t, r) => i.a.createElement(v, null, O(e, t, r, !0, !0)),
				O = function(e, t, r) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						s = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: r,
						isExpanded: !!s
					})
				};
			t.a = w(j)
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
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/last.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/opener/index.ts"),
				l = r("./src/reddit/constants/adEvents.ts"),
				d = r("./src/reddit/components/PostList/LoadMore.tsx"),
				u = r("./src/reddit/components/PostList/Placeholder.tsx"),
				m = r("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = r("./src/reddit/components/Scroller/Simple.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				_ = r("./src/reddit/helpers/getClickInfo.ts"),
				f = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/contexts/Post/index.tsx"),
				g = r("./src/lib/LRUCache/index.ts"),
				y = r("./src/telemetry/index.ts"),
				x = r("./src/telemetry/models/Timer.ts"),
				v = r("./src/reddit/components/PostList/index.m.less"),
				k = r.n(v);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 500,
				w = new g.a(C),
				j = new g.a(C),
				F = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				O = (e, t, r, n, s, o) => {
					const i = `entered-${e}-${t}-${r?`last-${n}-${s}`:""}`;
					let a = w.get(i);
					return void 0 === a && (a = () => {
						r && o.onBottomViewed(n, s), o.trackOnPostEnteredViewport(e, t)
					}, w.set(i, a)), a
				},
				P = (e, t) => {
					const r = `click-${e}`;
					let n = j.get(r);
					return void 0 === n && (n = (e, r) => {
						r.isSponsored && t.fireAdPixelsOfType(r, l.a.Click), r.isSponsored && r.source && r.source.outboundUrl ? Object(c.e)(r.source.outboundUrl, c.d.BLANK) : t.openPost({
							postOrComment: r,
							clickInfo: Object(_.a)(e)
						})
					}, j.set(r, n)), n
				};
			class D extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(C), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && y.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = y.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = y.c.end(this.timerId);
						setTimeout(() => Object(y.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && y.c.cancel(this.timerId), e.itemIds.length && (this.timerId = y.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && y.c.has(this.timerId)) {
						const e = y.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(y.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && y.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && s()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: r
					} = this.props;
					return y.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (r || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: r
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = y.c.end(e);
					setTimeout(() => r(t(n, x.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...r
					} = this.props, {
						itemIds: n,
						...s
					} = e, o = Object.keys(r), i = Object.keys(s);
					return i.length !== o.length || !!i.some(e => r[e] !== s[e])
				}
				scrollChildForItem(e, t, r, n, s, o) {
					const {
						listingKey: a,
						listingName: c,
						postClickEventFactory: l
					} = this.props, d = `post-${o}-${e}-${t}-${r?"last-index":""}-${c}-${a}`;
					let u;
					if (void 0 === (u = this.scrollChildCache.get(d))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: m
						} = this.props, p = m[e], h = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, _ = O(p, o, r, a, c, this.props), f = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: s,
							isOverlay: !1,
							itemId: e,
							last: r,
							layout: o,
							onClickPost: P(e, this.props),
							postId: p
						}, g = this.props.itemComponent;
						u = {
							estHeight: this.props.estimateItemHeight(e, o, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: _,
							render: e => i.a.createElement(b.a, {
								postId: f.postId
							}, i.a.createElement(g, E({}, f, e)))
						}, this.scrollChildCache.set(d, u)
					}
					return u
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: r,
						onTryAgain: n
					} = this.props;
					return i.a.createElement("div", {
						className: k.a.placeholder
					}, i.a.createElement(u.a, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && i.a.createElement(m.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: r,
						onLoadMore: n
					} = this.props;
					return i.a.createElement("div", {
						className: k.a.placeholder
					}, i.a.createElement(d.a, {
						isLoading: !!t,
						layout: r,
						countOverride: F[r]
					}), !!e && i.a.createElement(m.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: r,
						itemIds: n,
						onLoadMore: s
					} = this.props, o = n.map((r, s, o) => {
						const i = s === n.length - 1,
							a = s && n[s - 1],
							c = !i && n[s + 1],
							l = !!Object(f.a)(r) && (!a || !Object(f.a)(a) || e[a].postId !== e[r].postId),
							d = !!Object(f.a)(r) && (!c || !Object(f.a)(c) || e[c].postId !== e[r].postId);
						return this.scrollChildForItem(r, s, i, l, d, t)
					});
					return i.a.createElement("div", null, i.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: r && r.token ? r.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: s,
						viewportTopPadding: h.f + h.s
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = D
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("SubredditSearchCarousel").then(r.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				l = e => {
					const t = Object(i.e)(a.e),
						r = Object(i.e)(a.a);
					return t || r ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Footer/index.tsx"),
				d = r("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				u = r.n(d),
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				p = r("./src/reddit/actions/login.ts"),
				h = r("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/selectors/telemetry.ts");
			const g = "nsfw_dialog";
			var y = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const x = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				v = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				k = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				E = e => {
					const t = Object(o.d)(),
						r = Object(h.b)();
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.mainCta)
					}, s.a.createElement("img", {
						src: x
					}), s.a.createElement("div", {
						className: u.a.cta
					}, (() => m.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), s.a.createElement("div", {
						className: u.a.contentTitle
					}, e.contentTitle), s.a.createElement("div", {
						className: u.a.warning
					}, (() => m.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), s.a.createElement("div", {
						className: u.a.buttonContainer
					}, s.a.createElement(f.j, {
						className: Object(c.a)(u.a.logIn),
						onClick: () => {
							r((() => e => ({
								...Object(b.o)(e),
								source: "xpromo",
								action: "click",
								noun: g
							}))()), t(Object(p.i)())
						}
					}, (() => m.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), s.a.createElement(f.j, {
						className: u.a.cancel,
						onClick: () => {
							r((() => e => ({
								...Object(b.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: g
							}))()), t(Object(i.b)("/"))
						}
					}, (() => m.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				C = e => s.a.createElement("div", {
					className: u.a.qrCodeOuter
				}, s.a.createElement("div", {
					className: u.a.qrCodeInner
				}, s.a.createElement("img", {
					className: u.a.qrCode,
					src: e.qrCodeAsset
				}), s.a.createElement("div", {
					className: u.a.copyLine1
				}, (() => m.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), s.a.createElement("div", {
					className: u.a.copyLine2
				}, (() => m.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), s.a.createElement("img", {
					className: u.a.sneakySnoo,
					src: v
				}))),
				w = e => {
					const t = Object(h.b)();
					s.a.useEffect(() => {
						t((() => e => ({
							...Object(b.o)(e),
							source: "xpromo",
							action: "view",
							noun: g
						}))())
					}, [t]);
					const {
						contentTitle: r
					} = e, n = Object(o.e)(y.b) === _.fc.Enabled ? k.d2x_nsfw_signup_blocking_de_v1 : k.d2x_nsfw_signup_blocking_non_us_v1;
					return s.a.createElement("div", {
						className: u.a.container
					}, s.a.createElement(E, {
						contentTitle: r
					}), s.a.createElement("div", {
						className: u.a.footerWrapper
					}, s.a.createElement(l.a, null)), s.a.createElement(C, {
						qrCodeAsset: n
					}))
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
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/pages/ErrorPages/index.m.less"),
				c = r.n(a);
			const l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(i.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(i.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/extractQueryParams/index.ts"),
				u = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/profileComments/index.ts"),
				p = r("./src/reddit/actions/pages/profileShared.ts"),
				h = r("./src/reddit/components/ContentGate/index.tsx"),
				_ = r("./src/reddit/components/EmptyProfile/index.ts"),
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
				j = r("./src/reddit/constants/postLayout.ts"),
				F = r("./src/reddit/contexts/PageLayer/index.tsx"),
				O = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				P = r("./src/reddit/selectors/commentSelector.ts"),
				D = r("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				L = r.n(D);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = x.a.wrapped(v.default, "ClassicPost", L.a),
				z = x.a.wrapped(E.a, "OverviewCommentPost", L.a),
				A = Object(F.u)({
					currentProfileName: F.i,
					pageLayer: e => e
				}),
				B = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: r
						} = t;
						return Object(P.b)(e, {
							commentId: r
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: r
						} = t;
						if (r) return ((e, t) => {
							const {
								users: r
							} = e, n = t.toLowerCase(), s = r.models[n];
							return s ? s.username : void 0
						})(e, r)
					}
				});
			var T = A(Object(a.b)(B)(e => {
				const {
					comment: t,
					itemId: r,
					isFirstInCommentList: n,
					isLastInCommentList: s,
					layout: o,
					profileName: a,
					allowModToolsUnderComments: c
				} = e;
				if (o === j.g.Compact) return i.a.createElement(k.a, e);
				const {
					height: l,
					width: d,
					...u
				} = e;
				return i.a.createElement(N, u, n && i.a.createElement(C.a, {
					isFirst: !0
				}, o === j.g.Large ? i.a.createElement(I, S({}, e, {
					availableWidth: d,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(z, S({}, e, {
					commentId: r,
					profileName: a
				}))), i.a.createElement(C.a, {
					isLast: s
				}, i.a.createElement(w.a, {
					commentId: r,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: r,
					profileName: a,
					showModTools: c
				})))
			}));
			const N = Object(y.a)(e => i.a.createElement("div", {
				className: Object(g.a)(L.a.backgroundMargin, {
					[L.a.isFirstInCommentList]: e.isFirstInCommentList,
					[L.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(O.e)(e)
				}
			}, e.children));
			var R = r("./src/reddit/components/ProfileItemList/index.tsx"),
				q = r("./node_modules/lodash/noop.js"),
				M = r.n(q),
				U = r("./src/reddit/actions/ads/index.ts"),
				Z = r("./src/reddit/actions/comment/list.ts"),
				W = r("./src/reddit/actions/post.ts"),
				H = r("./src/reddit/components/TrackingHelper/index.tsx"),
				K = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				G = r("./src/reddit/helpers/trackers/post.ts"),
				V = r("./src/reddit/featureFlags/index.ts"),
				$ = r("./src/reddit/selectors/comments.ts"),
				J = r("./src/reddit/selectors/posts.ts"),
				Q = r("./src/reddit/selectors/profileComments.ts"),
				Y = r("./src/reddit/selectors/subreddit.ts"),
				X = r("./src/reddit/selectors/tracking.ts"),
				ee = r("./src/reddit/selectors/user.ts");
			const te = Object(F.u)(),
				re = {
					apiError: Q.a,
					apiPending: Q.b,
					currentUser: ee.k,
					measureScrollFPS: V.d.measureScrollFPS,
					layout: F.R,
					loadMore: Q.d,
					subredditsById: Y.Z,
					viewportDataLoaded: X.a,
					commentsById: $.q,
					itemIds: Q.f,
					itemIdToPostId: Q.e,
					postsById: J.J,
					estimateItemHeight: e => (e, t, r) => {
						if (r) switch (t) {
							case j.g.Medium:
								return 174;
							case j.g.Classic:
								return 129;
							case j.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case j.g.Medium:
							case j.g.Classic:
								return 90;
							case j.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				ne = Object(c.c)(re),
				se = Object(a.b)(ne, e => ({
					onBottomViewed: (t, r) => e(Object(Z.c)(t, r)),
					adBrandSafetyStatusReceived: t => {
						e(U.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(W.L)(t)),
					fireAdPixelsOfType: M.a,
					trackOnPostEnteredViewport: M.a
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(G.h)(e, t),
					postComponentForLayout: K.b
				}));

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = e => i.a.createElement(T, oe({}, e, {
					allowModToolsUnderComments: !0
				})),
				ae = (e => Object(H.c)(te(se(e))))(R.a);
			var ce = e => i.a.createElement(ae, oe({}, e, {
					itemComponent: ie
				})),
				le = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				de = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = r("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				me = r("./src/reddit/helpers/name/index.ts"),
				pe = r("./src/reddit/helpers/trackers/screenview.ts"),
				he = r("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				_e = r("./src/reddit/layout/page/Listing/index.tsx"),
				fe = r("./src/reddit/models/ContentGate.ts"),
				be = r("./src/reddit/pages/ErrorPages/index.tsx"),
				ge = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ye = r("./src/reddit/selectors/profile.ts");

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = Object(F.u)(),
				ke = Object(c.a)(F.E, ee.jb, (e, t) => {
					let {
						location: r
					} = t;
					return s()([...Object(d.a)(r.search)])
				}, F.R, (e, t) => {
					let {
						match: r
					} = t;
					return r.params.profileName
				}, (e, t) => {
					let {
						match: r
					} = t;
					return Object(ye.j)(e, {
						profileName: r.params.profileName
					})
				}, ee.P, (e, t) => {
					let {
						match: r
					} = t;
					return Object(ee.f)(e, l.jc + r.params.profileName)
				}, ge.a, (e, t, r, n, s, o, i, a, c) => {
					const {
						sort: l,
						t: d
					} = Object(p.b)(r), m = Object(u.a)(`u_${s}`, l, r);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: n,
						listingKey: m,
						profileName: s,
						sort: l,
						timeSort: d,
						isEligibleForNsfwSignupUpsellTreatment: c
					}
				}),
				Ee = Object(a.b)(ke, (e, t) => ({
					onLoadMore: () => e(Object(m.moreItemsRequested)()),
					onLayoutChange: () => e(Object(m.profileCommentsRequested)({
						...t.match,
						queryParams: s()([...Object(d.a)(t.location.search)])
					}))
				}));
			t.default = ve(Ee(Object(he.d)(e => {
				const {
					contentGateInfo: t,
					over18Prefs: r,
					isOwnProfile: n,
					isProfileNSFW: s,
					listingKey: o,
					onLoadMore: a,
					onLayoutChange: c,
					pageLayer: d,
					profileName: u,
					sort: m,
					timeSort: p,
					isEligibleForNsfwSignupUpsellTreatment: g
				} = e;
				if (!u || !d) return null;
				if (t && t.profileDeleted) return i.a.createElement(h.default, {
					contentGateType: fe.a.ProfileDeleted,
					profileName: u
				});
				if (t && t.profileSuspended) return i.a.createElement(h.default, {
					contentGateType: fe.a.ProfileSuspended,
					profileName: u
				});
				if (451 === d.status || t && t.profileBlockedForLegalReason) return i.a.createElement(h.default, {
					contentGateType: fe.a.ProfileBlockedForLegalReason,
					profileName: u
				});
				if (403 === d.status) return i.a.createElement(be.a, null);
				if (404 === d.status) return i.a.createElement(h.default, {
					contentGateType: fe.a.ProfileDoesNotExist,
					profileName: u
				});
				const y = u.toLowerCase(),
					x = `/user/${u}/comments/`,
					v = {
						listingKey: o,
						listingName: y
					};
				if (s && !n && g) return i.a.createElement(ue.a, {
					contentTitle: Object(me.d)(u)
				});
				if (!r && s && !n) return i.a.createElement(h.default, {
					contentGateType: fe.a.Nsfw,
					subredditName: u
				});
				const k = {
					sort: m,
					baseUrl: x,
					sortOptions: l.Db,
					timeSort: p
				};
				return i.a.createElement(_e.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(le.a, {
						profileName: u
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(f.a, k), i.a.createElement(b.a, null), i.a.createElement(ce, {
						listingKey: o,
						listingName: y,
						listingViewed: (e, t) => Object(pe.o)(o, m, t, e, p),
						noPostsComponent: () => i.a.createElement(_.b, {
							profileName: u,
							timeSort: p
						}),
						onLoadMore: a,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(de.a, xe({}, v, {
						profileName: u
					}))
				})
			})))
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/meta.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(i.g, i.d, a.e, (e, t, r) => !e && !t && !r);

			function l(e, t) {
				return r => Object(o.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: c,
					expEventOverride: t
				})
			}
			const d = l(s.Lb, !0),
				u = l(s.Lb, !1),
				m = l(s.Mb, !0),
				p = (l(s.Mb, !1), Object(n.a)(d, m, (e, t) => e === s.fc.Enabled || t === s.gc.Enabled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.35efa5d15197d901a06d.js.map