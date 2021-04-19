// https://www.redditstatic.com/desktop2x/ProfileOverview.62ecb97e3010ff859ca4.js
// Retrieved at 4/19/2021, 4:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "reddit-components-ContentGate"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function r(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function n(e) {
				return Object.prototype.toString.call(e)
			}

			function o(e) {
				return "[object Function]" === n(e)
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
							var r = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(r) ? r.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var r = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : r.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var r = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(r) ? r.match(s.re.mailto)[0].length : 0
						}
					}
				},
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(d), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var s = e.__schemas__[t];
					if (null !== s) {
						var r = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = r, "[object Object]" === n(s)) return ! function(e) {
							return "[object RegExp]" === n(e)
						}(s.validate) ? o(s.validate) ? r.validate = s.validate : l(t, s) : r.validate = function(e) {
							return function(t, s) {
								var r = t.slice(s);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(s.validate), void(o(s.normalize) ? r.normalize = s.normalize : s.normalize ? l(t, s) : r.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
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
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var s = e.__index__,
					r = e.__last_index__,
					n = e.__text_cache__.slice(s, r);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = r + t, this.raw = n, this.text = n, this.url = n
			}

			function p(e, t) {
				var s = new m(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, r, n, o, a, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (n = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (o = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = a)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var r = t ? e.slice(t) : e; this.test(r);) s.push(p(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
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
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFlatten.js"),
				n = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(n(e, t), 1)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
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
						active: r,
						hover: a
					} = e;
				return n.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: s,
						[c.a.active]: r,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", c.a)
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "i", (function() {
				return C
			}));
			var r = s("./node_modules/linkify-it/index.js"),
				n = s.n(r),
				o = s("./node_modules/tlds/index.js"),
				a = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = n()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				h = n()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				b = m(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = m(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				g = n()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				_ = n()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				w = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				C = e => {
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
			var r = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(n.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return P
			}));
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(a.g),
				f = Object(n.a)(a.e),
				g = Object(n.a)(a.h),
				_ = Object(n.a)(a.c),
				x = Object(n.a)(a.f),
				y = Object(n.a)(a.j),
				v = Object(n.a)(a.i),
				w = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						o = Object(m.e)(n),
						a = Object(m.d)(n),
						d = Object(h.I)(n);
					if (o || !a) return;
					e(g());
					let p = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (C(t)) {
								if (k(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (O(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: o
										} = s.focusRecommendations[0],
										a = [r, n],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(b(m)), p = !0
								}
							} else p = !1
						}
					} catch (x) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !k(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, P = () => async (e, t, s) => {
					var r, n;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const s = null === (n = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							i = Object(h.J)(a);
						return Object(o.i)(() => e(w()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(x({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return ye
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return ve
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return we
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Oe
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return Ee
			})), s.d(t, "profileOverviewRequested", (function() {
				return je
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				o = s("./src/reddit/actions/moderatingSubreddits.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				i = s("./src/reddit/actions/subreddit.ts"),
				c = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/constants/parameters.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/selectors/listings.ts"),
				h = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/makeActionCreator/index.ts"),
				_ = s("./src/reddit/actions/changeUsername.ts"),
				x = s("./src/reddit/actions/contentGate.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				v = s("./src/reddit/actions/gold/powerups.ts"),
				w = s("./src/reddit/actions/pinnedPost.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				O = s("./src/reddit/actions/trophyCase.ts"),
				P = s("./src/reddit/constants/errors.ts"),
				E = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				j = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				I = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./node_modules/redux/es/redux.js"),
				N = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const F = {};
			var D = (e = F, t) => {
				switch (t.type) {
					case S.c:
					case S.b:
					case N.c:
					case N.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case S.a:
					case N.a: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var A = (e = T, t) => {
					switch (t.type) {
						case S.c:
						case N.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case S.b:
						case S.a:
						case N.b:
						case N.a: {
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
				B = Object(L.c)({
					error: D,
					pending: A
				});
			const R = {};
			var M = (e = R, t) => {
				switch (t.type) {
					case S.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case N.b: {
						const {
							key: s,
							fetchedToken: r
						} = t.payload, n = e[s];
						return {
							...e,
							[s]: {
								...n,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var U = (e = z, t) => {
					switch (t.type) {
						case S.b:
						case N.b: {
							const {
								key: s,
								overviewIds: r
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, ...r]
							}
						}
						default:
							return e
					}
				},
				V = s("./src/lib/omitKey/index.ts");
			const H = {};
			var q = (e = H, t) => {
					switch (t.type) {
						case S.b:
						case N.b: {
							const {
								key: s,
								dist: r,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[s]: {
									dist: r,
									token: n
								}
							} : Object(V.a)(e, s)
						}
						default:
							return e
					}
				},
				K = Object(L.c)({
					api: B,
					fetchedTokens: M,
					ids: U,
					loadMore: q
				});
			const W = {};
			var G = (e = W, t) => {
				switch (t.type) {
					case S.f:
					case S.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case S.d: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
						}
					}
					default:
						return e
				}
			};
			const Z = {};
			var J = (e = Z, t) => {
					switch (t.type) {
						case S.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case S.e:
						case S.d: {
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
				Y = Object(L.c)({
					error: G,
					pending: J
				}),
				X = s("./src/reddit/actions/profileConversations.ts");
			const Q = {};
			var $ = (e = Q, t) => {
				switch (t.type) {
					case X.c:
					case X.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case X.a: {
						const {
							extraCommentsId: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case X.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case X.b:
						case X.a: {
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
				se = Object(L.c)({
					error: $,
					pending: te
				});
			const re = {};
			var ne = (e = re, t) => {
					switch (t.type) {
						case S.e:
						case X.b:
						case X.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				oe = Object(L.c)({
					api: se,
					models: ne
				}),
				ae = s("./node_modules/lodash/mapValues.js"),
				ie = s.n(ae),
				ce = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				de = s("./src/reddit/constants/comments.ts");
			const le = {};

			function ue(e) {
				const t = e;
				return ie()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			const me = (e, t, s) => {
				const r = {};
				for (const n in t) {
					const e = t[n],
						s = e.postId;
					r.hasOwnProperty(s) ? r[s] = {
						...r[s],
						[n]: e
					} : r[s] = {
						[n]: e
					}
				}
				for (const n in s) {
					const e = s[n],
						t = e.postId;
					r.hasOwnProperty(t) ? r[t] = {
						...r[t],
						[n]: e
					} : r[t] = {
						[t]: e
					}
				}
				return r
			};
			var pe = (e = le, t) => {
				switch (t.type) {
					case S.e:
					case X.e: {
						const {
							comments: s,
							extraComments: r,
							postIds: n,
							profileName: o
						} = t.payload, a = me(n, s, r), i = {};
						for (const e of n) {
							i[Object(ce.a)(e, o)] = a.hasOwnProperty(e) ? ue(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case X.b: {
						const {
							comments: s,
							commentLists: r,
							extraComments: n,
							extraCommentsId: o,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][o]);
							if (!t) return e;
							const s = {
									...e[t]
								} [o].prev,
								r = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[r]: {
										...e[t][r],
										next: null
									}
								}
							}
						}
						const c = a[0],
							d = ue(me(a, s, n)[c]),
							l = Object(ce.a)(c, i),
							u = {
								...e[l]
							},
							m = u[o].prev,
							p = m && m.id || "",
							h = r[c].head,
							b = h && h.id || "",
							f = {
								id: b,
								type: de.a.Comment
							},
							g = {
								...u,
								[p]: {
									...u[p],
									next: f
								},
								...d,
								[b]: {
									...d[b],
									prev: m
								}
							};
						return {
							...e,
							[l]: g
						}
					}
					default:
						return e
				}
			};
			const he = {};
			var be = (e = he, t) => {
				switch (t.type) {
					case S.e:
					case X.e: {
						const {
							commentLists: s,
							postIds: r,
							profileName: n
						} = t.payload, o = {};
						for (const e of r) {
							o[Object(ce.a)(e, n)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			const fe = {};
			var ge = (e = fe, t) => {
					switch (t.type) {
						case S.e:
						case X.e: {
							const {
								postIds: s,
								profileName: r
							} = t.payload, n = {};
							for (const e of s) {
								n[Object(ce.a)(e, r)] = e
							}
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				_e = Object(L.c)({
					api: Y,
					extraComments: oe,
					keyToCommentThreadLinkSets: pe,
					keyToHeadCommentId: be,
					keyToPostId: ge
				}),
				xe = Object(L.c)({
					chrono: K,
					conversations: _e
				});
			Object(I.a)({
				pages: {
					profileOverview: xe
				}
			});
			const ye = Object(g.a)(S.f),
				ve = Object(g.a)(S.e),
				we = Object(g.a)(S.d),
				Ce = Object(g.a)(S.c),
				ke = Object(g.a)(S.b),
				Oe = Object(g.a)(S.a),
				Pe = (e, t, s, r) => async (r, n, o) => {
					const a = n(),
						i = !!a.listings.postOrder.ids[e],
						d = !!Object(p.c)(a, {
							listingKey: e
						});
					if (!!Object(p.d)(a, {
							listingKey: e
						}) || i && !d) return;
					r(ye({
						key: e
					}));
					const l = await Object(j.a)("profile", () => Object(c.b)(o.apiContext(), t, s)),
						u = l.body,
						{
							pinned: m,
							postIds: b
						} = u;
					if (l.ok) {
						r(ve({
							key: e,
							meta: a.meta,
							profileName: t,
							...u,
							postIds: b
						}));
						const s = Object(h.m)(n(), t);
						r(Object(w.h)({
							profileId: s,
							pinned: m
						}))
					} else r(we({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === P.a.DeletedProfile && r(Object(x.p)({
						profileName: t
					})), r(Object(C.m)(l.status))
				}, Ee = (e, t, s, r) => async (r, n, o) => {
					const a = n(),
						i = !!Object(b.f)(a, {
							listingKey: e
						}).length,
						d = !!Object(b.a)(a, {
							listingKey: e
						});
					if (!!Object(b.b)(a, {
							listingKey: e
						}) || i && !d) return;
					r(Ce({
						key: e
					}));
					const l = await Object(j.a)("profile", () => Object(c.a)(o.apiContext(), t, s)),
						u = l.body,
						{
							pinned: m
						} = u;
					if (l.ok) {
						r(ke({
							key: e,
							meta: a.meta,
							...u
						}));
						const s = Object(h.m)(n(), t);
						r(Object(w.h)({
							profileId: s,
							pinned: m
						}))
					} else r(Oe({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === P.a.DeletedProfile && r(Object(x.p)({
						profileName: t
					})), r(Object(C.m)(l.status))
				}, je = e => async (t, s, r) => {
					const {
						queryParams: c,
						params: p
					} = e, {
						sort: b,
						t: g
					} = Object(a.a)(s(), c), {
						profileName: x
					} = p;
					let w = !1;
					const P = l.e[Object(m.O)(s(), {})],
						j = x.toLowerCase(),
						S = {
							...n()(e.queryParams, u.l),
							sort: b,
							layout: P,
							t: g
						},
						I = [t(k.d(j))];
					if (P === l.e[l.g.Compact]) {
						const r = Object(E.a)(j, d.mb, b, e.queryParams);
						s().pages.profileOverview.chrono.ids[r] ? w = !0 : I.push(t(Ee(r, j, S, !0)))
					} else {
						const r = Object(E.a)(j, d.nb, b, e.queryParams);
						s().listings.postOrder.ids[r] && !s().listings.postOrder.api.error[r] ? w = !0 : I.push(t(Pe(r, j, S, !0)))
					}
					if (I.push(t(Object(o.b)())), await Promise.all(I), w) return;
					const L = s();
					if (!L.platform.currentPage) return;
					if (200 !== L.platform.currentPage.status) return;
					const N = Object(h.m)(s(), j),
						F = Object(f.mb)(L, {
							userName: x
						}).id;
					t(C.l({
						title: Se(s(), x)
					})), Object(f.L)(L) && Object(f.N)(L, x) && t(Object(_.f)());
					const D = [t(Object(i.q)()), t(O.b(j, N)), t(k.b(j)), t(y.o(x)), t(k.g(x)), t(v.f(x, F))];
					await Promise.all(D)
				}, Se = (e, t) => Object(h.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: r
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let n = 0, o = -999; n <= l; n += 1) {
					const e = s[n],
						t = d[e].belongsTo.id;
					p(e) && n - o >= i && !u.has(t) && (o = n, u.add(t), n === l && (m = !0))
				}
				return m ? n.a.createElement(a.a, {
					subredditId: r,
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
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
			t.a = n
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = s("./src/reddit/components/Footer/index.m.less"),
				f = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.div("FooterContainer", f.a), x = d.a.div("UserAgreement", f.a), y = d.a.a("UserAgreementLink", f.a), v = d.a.a("PrivacyLink", f.a);
			var w = () => o.a.createElement(_, null, o.a.createElement(x, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", o.a.createElement(y, {
					href: `${r.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", o.a.createElement(v, {
					href: `${r.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				C = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				k = s("./src/reddit/components/RichTextJson/index.tsx"),
				O = s("./node_modules/lodash/flatMap.js"),
				P = s.n(O),
				E = s("./src/lib/linkMatchers/index.ts"),
				j = s("./src/lib/linkMatchers/customLinks.ts"),
				S = s("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				L = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const s = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, n, o] = t.slice(r, r + 3);
						s.push(e), s.push([o, n])
					}
					return s
				};
			var N = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = P()(t, L)), e.parseRegularLinks && (t = P()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(j.g.subreddit.prefix, j.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let r = null;
						for (const n of t) s.push(e.slice(r ? r.lastIndex : 0, n.index)), r = n, s.push([n.url, n.text]);
						return r && s.push(e.slice(r.lastIndex)), s
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [r, n] = t;
							return o.a.createElement(S.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: s,
								source: null
							}, n)
						}
						return o.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				F = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => o.a.createElement(T.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				R = s("./src/reddit/models/ContentGate.ts"),
				M = s("./src/lib/constants/index.ts"),
				z = s("./src/reddit/selectors/platform.ts"),
				U = s("./src/reddit/selectors/user.ts");
			var V = s("./src/reddit/selectors/meta.ts"),
				H = s("./src/reddit/components/ContentGate/index.m.less"),
				q = s.n(H);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = d.a.wrapped(B, "PrivateKey", q.a), G = d.a.div("ButtonsContainer", q.a), Z = d.a.div("Container", q.a), J = d.a.div("Description", q.a), Y = d.a.div("PrivateSubredditDetails", q.a), X = d.a.div("PrivateSubredditDescription", q.a), Q = d.a.h3("PrivateSubredditName", q.a), $ = d.a.a("Link", q.a), ee = d.a.wrapped(D.k, "LinkRouterButton", q.a), te = d.a.wrapped(D.j, "LinkButton", q.a), se = d.a.wrapped(D.n, "SecondaryLinkRouterButton", q.a), re = d.a.wrapped(D.m, "SecondaryLinkButton", q.a), ne = d.a.wrapped(ee, "GoHomeLinkButton", q.a), oe = d.a.img("Image", q.a), ae = d.a.img("ImagePlaceholder", q.a), ie = d.a.wrapped(ee, "LeftLinkRouterButton", q.a), ce = d.a.wrapped(te, "LeftLinkButton", q.a), de = d.a.wrapped(re, "SecondaryLeftLinkButton", q.a), le = d.a.wrapped(se, "SecondaryLeftLinkRouterButton", q.a), ue = d.a.h3("Title", q.a), me = d.a.div("PageBody", q.a), pe = d.a.div("QuarantineMessageWrapper", q.a), he = Object(c.c)({
				isLoggedIn: U.I,
				origin: V.i,
				user: U.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(U.J)(e)) return !1;
					const t = Object(z.d)(e);
					if (!t) return !1;
					const s = Object(U.e)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = s;
					if (!r) return !1;
					const n = 30 * M.x;
					return r > Date.now() - n
				})(e)
			}), be = Object(F.t)(), fe = Object(a.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), ge = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: n,
					isLoggedIn: a,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: c,
					location: d,
					origin: m,
					pageLayer: b,
					quarantineRequiresEmail: f,
					quarantineMessage: g,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: x,
					setNSFWPreference: y,
					subredditDescription: v,
					subredditName: w,
					user: O
				} = e, P = async () => {
					a ? await y() : await Object(u.k)(), window.location.reload()
				};
				switch (s) {
					case R.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ue, null, K._("r/{community name} is a Reddit Premium community", [K._param("community name", w)], {
							hk: "2lyDwB"
						})), o.a.createElement(J, null, K._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(G, null, O ? o.a.createElement(de, {
							href: `${r.a.redditUrl}/premium`
						}, K._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ce, {
							href: Object(l.a)(d, m)
						}, K._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? o.a.createElement(ee, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(re, {
							href: Object(l.a)(d, m)
						}, K._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ue, null, s === R.a.Nsfw ? K._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : K._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(J, null, K._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(G, null, o.a.createElement(ie, {
							to: "/"
						}, K._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(re, {
							onClick: P
						}, K._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case R.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(W, null), o.a.createElement(ue, null, "r/", w, " ", K._("is a private community", null, {
							hk: "7zZmq"
						})), v && v.length && o.a.createElement(Y, null, o.a.createElement(Q, null, "r/", w), o.a.createElement(X, null, o.a.createElement("div", null, v))), o.a.createElement(J, null, K._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", w, " ", K._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), K._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(G, null, O ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(de, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${w}`
						}, K._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(de, {
							href: Object(l.a)(d, m)
						}, K._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ee, {
							to: "/"
						}, K._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case R.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ue, null, K._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(J, null, K._("This community is {=quarantined}", [K._param("=quarantined", o.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, K._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(pe, null, x ? o.a.createElement(k.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : _ ? o.a.createElement(C.a, {
							html: _
						}) : g || K._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), K._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(G, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? o.a.createElement(G, null, o.a.createElement(le, {
								to: "/"
							}, K._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(te, {
								href: `${r.a.redditUrl}/prefs/update`
							}, K._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(G, null, o.a.createElement(ie, {
								to: "/"
							}, K._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(re, {
								onClick: t
							}, K._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, n, f)));
					case R.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ue, null, K._("r/{community name} has been banned from Reddit", [K._param("community name", w)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(J, null, e ? o.a.createElement(N, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : K._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(G, null, o.a.createElement(ee, {
							to: "/"
						}, K._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, K._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(G, null, o.a.createElement(ee, {
							to: "/"
						}, K._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ae, null), o.a.createElement(ue, null, K._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(J, null, K._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(G, null, O && o.a.createElement(h.a, {
							eventSource: "content_gate"
						}), o.a.createElement(ne, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return K._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case R.a.ProfileDeleted:
									return K._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case R.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, K._("This account has been {=suspended} .", [K._param("=suspended", o.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, K._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case R.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ue, null, K._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(J, null, K._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(G, null, o.a.createElement(ne, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, K._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(G, null, o.a.createElement(ne, {
							to: "/"
						}, K._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, K._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(G, null, o.a.createElement(ee, {
							to: "/"
						}, K._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = be(fe(Object(i.i)(e => o.a.createElement(Z, null, o.a.createElement("div", null, o.a.createElement(me, null, ge(e))), o.a.createElement(w, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
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
			t.a = n
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(b),
				g = s("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				x = g.a.wrapped(d.c, "StyledTooltip", f.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.gb)(e),
					userIsSuspended: h.O
				});
			t.a = Object(a.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: _
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: n,
				openCommunityCreation: a,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d
			}) => o.a.createElement(u.l, {
				className: e,
				disabled: d || c,
				onClick: () => a(i),
				onMouseEnter: s,
				onMouseLeave: n,
				id: _,
				isFullWidth: !0
			}, r.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), c ? o.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: _,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : d ? o.a.createElement(x, {
				caretOnTop: !0,
				tooltipId: _,
				text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: o.a.createElement("div", null),
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				w = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				C = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				k = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = s.n(P);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				I = "LayoutSwitch--picker",
				L = Object(c.a)(g.a),
				N = {
					[h.d.Card]: w.a,
					[h.d.Classic]: y.a,
					[h.d.Compact]: v.a
				},
				F = {
					[h.d.Card]: function(e) {
						return o.a.createElement(x.a, j({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(x.a, j({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(x.a, j({}, e, {
							name: "view_compact"
						}))
					}
				},
				D = {
					[h.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				T = Object(b.t)(),
				A = Object(i.c)({
					dropdownIsOpen: Object(O.b)(I),
					isInIcons2020: C.a,
					postLayout: b.O,
					redditStyle: b.A
				}),
				B = Object(a.b)(A, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.x)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: I
					}))
				}));
			class R extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(k.screen)(t),
							subreddit: Object(k.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: s,
							layout: r,
							onLayoutClick: n,
							postLayout: a
						} = this.props, i = r || h.e[a], c = e === i, l = s ? F[e] : N[e], u = D[e];
						return o.a.createElement(_.b, j({}, t, {
							className: Object(d.a)(E.a.LayoutItem, {
								[E.a.selected]: c
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: E.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: E.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: E.a.LayoutIcon,
							onClick: c ? void 0 : n,
							isFilled: s && c && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(L, j({}, e, {
							className: E.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: E.a.DropdownRow,
							rowIconClassName: E.a.DropdownRowIcon,
							rowSelectedClassName: E.a.DropdownRowSelected,
							tooltipId: I
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, n = t || h.e[r];
					return o.a.createElement("div", {
						className: Object(d.a)(E.a.Container, e),
						id: S
					}, o.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: I,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(B(Object(p.c)(Object(l.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				f = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/higherOrderComponents/asTooltip.tsx"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				v = s("./src/reddit/contexts/Tooltip.ts"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				P = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = s("./src/reddit/components/ListingSort/index.m.less"),
				F = s.n(N),
				D = s("./src/lib/lessComponent.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				B = Object(x.a)(D.a.wrapped(w.a, "Dropdown", F.a)),
				R = D.a.wrapped(L.a, "ListingSortIcon", F.a),
				M = (D.a.wrapped(P.b, "DropdownTriangle", F.a), D.a.div("Title", F.a)),
				z = D.a.wrapped(e => n.a.createElement(C.b, T({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", F.a),
				U = ({
					disabled: e,
					...t
				}) => n.a.createElement("div", T({}, t, {
					className: Object(a.a)(F.a.SortWrapper, t.className, {
						[F.a.isDisabled]: e
					})
				})),
				V = D.a.div("DropdownRowDisabled", F.a),
				H = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				q = Object(p.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: E.a,
					user: I.i,
					dropdownIsOpen: (e, t) => Object(S.b)(t.dropdownId || A)(e),
					isPopularPage: l.C
				}),
				K = Object(o.b)(q, (e, {
					dropdownId: t,
					pageLayer: s
				}) => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: t || A
					}))
				}));
			var W = D.a.wrapped(H(K(Object(d.c)(e => n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && n.a.createElement(M, null, _.fbt._("Sort", null, {
					hk: "2BfINq"
				})), n.a.createElement(U, {
					disabled: e.disabled
				}, e.children || n.a.createElement(z, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, n.a.createElement(R, {
					sort: e.sort
				}))), n.a.createElement(v.a.Consumer, null, t => n.a.createElement(B, T({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? n.a.createElement(V, null, _.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, r, n) => {
					const o = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (e && (s || r) || t && r) && o.unshift(b.P.BEST), t && n && o.splice(3, 0, b.P.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => n.a.createElement(C.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(O.a)(t))
					},
					href: e.isProfilePage ? Object(h.a)(e.baseUrl, {
						sort: t
					}) : Object(k.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, n.a.createElement(R, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", F.a),
				G = s("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[b.Sb.AllStates]: () => _.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[b.Sb.Alaska]: () => _.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.Sb.Alabama]: () => _.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.Sb.Arkansas]: () => _.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.Sb.Arizona]: () => _.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.Sb.California]: () => _.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.Sb.Colorado]: () => _.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.Sb.Connecticut]: () => _.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.Sb.DistrictOfColumbia]: () => _.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.Sb.Delaware]: () => _.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.Sb.Florida]: () => _.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.Sb.Georgia]: () => _.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.Sb.Hawaii]: () => _.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.Sb.Iowa]: () => _.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.Sb.Idaho]: () => _.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.Sb.Illinois]: () => _.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.Sb.Indiana]: () => _.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.Sb.Kansas]: () => _.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.Sb.Kentucky]: () => _.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.Sb.Louisiana]: () => _.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.Sb.Massachusetts]: () => _.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.Sb.Maryland]: () => _.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.Sb.Maine]: () => _.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.Sb.Michigan]: () => _.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.Sb.Minnesota]: () => _.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.Sb.Missouri]: () => _.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.Sb.Mississippi]: () => _.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.Sb.Montana]: () => _.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.Sb.NorthCarolina]: () => _.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.Sb.NorthDakota]: () => _.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.Sb.Nebraska]: () => _.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.Sb.NewHampshire]: () => _.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.Sb.NewJersey]: () => _.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.Sb.NewMexico]: () => _.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.Sb.Nevada]: () => _.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.Sb.NewYork]: () => _.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.Sb.Ohio]: () => _.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.Sb.Oklahoma]: () => _.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.Sb.Oregon]: () => _.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.Sb.Pennsylvania]: () => _.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.Sb.RhodeIsland]: () => _.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.Sb.SouthCarolina]: () => _.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.Sb.SouthDakota]: () => _.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.Sb.Tennessee]: () => _.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.Sb.Texas]: () => _.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.Sb.Utah]: () => _.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.Sb.Virginia]: () => _.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.Sb.Vermont]: () => _.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.Sb.Washington]: () => _.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.Sb.Wisconsin]: () => _.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.Sb.WestVirginia]: () => _.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.Sb.Wyoming]: () => _.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Y = s("./src/reddit/components/StateSort/index.m.less"),
				X = s.n(Y);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = D.a.wrapped(w.a, "_Dropdown", X.a),
				ee = Object(x.a)($),
				te = e => {
					return e.indexOf("_") > 0 && re(e) === b.w.UnitedStates
				},
				se = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return b.Sb.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				ne = e => {
					const t = re(e),
						s = se(e);
					return te(e) ? `${t}_${s}` : t
				},
				oe = Object(l.t)(),
				ae = Object(p.c)({
					dropdownIsOpen: Object(S.b)("StateSort--StateSortPicker")
				}),
				ie = Object(o.b)(ae, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(f.b)(t)), e(Object(c.u)(b.w.UnitedStates + "_" + s))
					}
				}));
			var ce = D.a.wrapped(oe(ie(e => {
				const t = `${e.baseUrl}?${G.h}=${b.w.UnitedStates}`;
				return n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, n.a.createElement(z, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(v.a.Consumer, null, s => n.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(b.Sb).map(s => {
					const r = b.Sb[s];
					return n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.Sb.AllStates ? t : `${t}_${e}`)(r), ne(r))
					}, n.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Z(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", X.a);
			const de = {
				[b.w.Everywhere]: () => _.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.w.UnitedStates]: () => _.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.w.Argentina]: () => _.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.w.Australia]: () => _.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.w.Bulgaria]: () => _.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.w.Canada]: () => _.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.w.Chile]: () => _.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.w.Colombia]: () => _.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.w.Croatia]: () => _.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.w.CzechRepublic]: () => _.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.w.Finland]: () => _.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.w.France]: () => _.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.w.Germany]: () => _.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.w.Greece]: () => _.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.w.Hungary]: () => _.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.w.Iceland]: () => _.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.w.India]: () => _.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.w.Ireland]: () => _.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.w.Italy]: () => _.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.w.Japan]: () => _.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.w.Malaysia]: () => _.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.w.Mexico]: () => _.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.w.NewZealand]: () => _.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.w.Philippines]: () => _.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.w.Poland]: () => _.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.w.Portugal]: () => _.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.w.PuertoRico]: () => _.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.w.Romania]: () => _.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.w.Serbia]: () => _.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.w.Singapore]: () => _.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.w.Spain]: () => _.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.w.Sweden]: () => _.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.w.Taiwan]: () => _.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.w.Thailand]: () => _.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.w.Turkey]: () => _.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.w.UnitedKingdom]: () => _.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = s("./src/reddit/components/CountrySort/index.m.less"),
				ue = s.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(l.t)(),
				be = Object(p.c)({
					dropdownIsOpen: Object(S.b)(pe)
				});
			var fe = he(Object(o.b)(be, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(f.b)(t)), e(Object(c.u)(s))
					}
				}))(e => {
					const t = re(e.sort),
						s = se(e.sort),
						r = `${e.baseUrl}?${G.h}=`;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(a.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, n.a.createElement(U, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, n.a.createElement(z, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[b.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), n.a.createElement(v.a.Consumer, null, s => n.a.createElement(ee, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(b.w).map(s => {
						const o = b.w[s];
						return n.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${ne(o)}`, o)
						}, n.a.createElement(C.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === b.w.UnitedStates && n.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: s,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ge = s("./node_modules/path-browserify/index.js"),
				_e = s.n(ge),
				xe = s("./src/reddit/components/TimeSort/index.m.less"),
				ye = s.n(xe);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(x.a)(w.a),
				Ce = (e, t, s) => {
					let r = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (r = _e.a.join(r, t)), Object(h.a)(r, {
						[G.x]: s
					})
				},
				ke = D.a.div("ListingSortContainer", ye.a),
				Oe = Object(l.t)(),
				Pe = Object(p.c)({
					dropdownIsOpen: Object(S.b)("TimeSort--SortPicker")
				});
			var Ee = Oe(Object(o.b)(Pe, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => n.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: !1
				}, n.a.createElement(z, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(v.a.Consumer, null, t => n.a.createElement(we, ve({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.Vb.HOUR, b.Vb.DAY, b.Vb.WEEK, b.Vb.MONTH, b.Vb.YEAR, b.Vb.ALL].map(t => n.a.createElement(C.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.b)(t),
					href: Ce(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(O.c)(t))
					}
				})))))))),
				je = s("./src/reddit/constants/listings.ts"),
				Se = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Ie = s("./src/reddit/controls/Button/index.tsx"),
				Le = s("./src/reddit/icons/fonts/index.tsx"),
				Ne = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Fe = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				De = s.n(Fe);

			function Te() {
				return (Te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([b.P.CONTROVERSIAL, b.P.TOP]),
				Be = new Set([b.P.CONTROVERSIAL, b.P.RISING]),
				Re = "ListingSort--Overflow",
				Me = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				ze = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.a, I.i, l.C, j.a, (e, t, s, r, n, o) => {
					if (e) return {
						isPopularPage: n,
						sortOptions: e
					};
					const a = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (t && (r || s) || n && s) && a.unshift(b.P.BEST), n && o && a.splice(3, 0, b.P.AWARDED), {
						isPopularPage: n,
						sortOptions: a
					}
				});
			class Ue extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(O.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(h.a)(t, {
							sort: e
						}) : Object(k.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return n.a.createElement(Ie.q, {
							className: Object(a.a)(De.a.SortLink, e === t && De.a.selected),
							kind: Ie.a.InternalLink,
							priority: Ie.b.Plain,
							Icon: s => n.a.createElement(R, Te({}, s, {
								className: Object(a.a)(De.a.SortIcon, s.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(y.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: r,
							sort: o
						} = this.props, a = r && !!s && e === b.P.HOT && o === b.P.HOT;
						return n.a.createElement(n.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && n.a.createElement(fe, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: De.a.DropdownButton,
							className: De.a.CountrySort,
							disabled: t,
							dropdownClassName: De.a.Dropdown,
							rowClassName: De.a.DropdownRow,
							rowSelectedClassName: De.a.DropdownRowSelected,
							wrapperClassName: De.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: De.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Ae.has(r), d = Be.has(r), l = o.filter(e => !Be.has(e)), u = o.filter(e => Be.has(e) && e !== r);
					return n.a.createElement(Se.b.Consumer, null, ({
						icons2020: t
					}) => n.a.createElement(n.a.Fragment, null, n.a.createElement(W, Te({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(a.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(a.a)(De.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && n.a.createElement(Ee, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: r,
						onChange: s,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: i || b.Wb,
						wrapperClassName: De.a.DropdownSortWrapper
					}), u.length > 0 && n.a.createElement(W, Te({}, this.props, {
						className: Object(a.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: Re,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), n.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: Re
					}, t ? n.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}) : n.a.createElement(Ne.a, null)))))
				}
			}
			var Ve = Me(Object(o.b)(ze)(Object(d.c)(Ue))),
				He = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				qe = s.n(He);
			const Ke = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				We = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (s, r) => {
						if (t) {
							const n = Object(i.c)({
								sort: s,
								timeSort: r
							});
							e(Object(c.I)(t, n))
						}
					}
				}));
			class Ge extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: r = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(qe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(Ve, {
						baseUrl: e,
						disabled: r,
						geopopularSort: s,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && n.a.createElement(m.a, {
						className: qe.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ke(We(Object(d.c)(Ge)))
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/inFeedChaining.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				x = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				y = s("./src/reddit/selectors/inFeedChaining.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/ads/index.ts"),
				O = s("./src/lib/classNames/index.ts"),
				P = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				E = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = s("./src/reddit/components/AwardBadges/index.tsx"),
				S = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				D = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				M = s("./src/reddit/components/PostLeftRail/index.tsx"),
				z = s("./src/reddit/components/PostMedia/index.tsx"),
				U = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				H = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				q = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				K = s.n(q);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var G = () => {
					const e = Object(V.a)();
					return n.a.createElement("div", {
						className: K.a.container
					}, n.a.createElement(H.a, {
						className: K.a.pinnedIcon,
						isFilled: e
					}), n.a.createElement("span", {
						className: K.a.metaText
					}, W._("pinned by moderators", null, {
						hk: "1qU8t4"
					})))
				},
				Z = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				Y = s("./src/reddit/components/PostTopLine/index.tsx"),
				X = s("./src/reddit/components/SourceLink/index.tsx"),
				Q = s("./src/reddit/constants/experiments.ts"),
				$ = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ee = s("./src/reddit/contexts/PageLayer/index.tsx"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ie = Object(a.a)(w.J, e => e.some(ae.c)),
				ce = Object(a.a)(ie, e => e),
				de = (e, t) => Object(oe.c)(e, {
					experimentName: Q.hb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ce(e, {
							listingKey: s
						})
					}
				});
			var le = s("./src/reddit/selectors/postFlair.ts"),
				ue = s("./src/reddit/components/PostTopMeta/index.tsx"),
				me = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				pe = s.n(me),
				he = s("./src/reddit/components/LargePost/index.m.less"),
				be = s.n(he);
			const fe = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(w.J)(e, {
						listingKey: s
					}) : void 0
				},
				ge = Object(o.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: _.a,
					hideNSFWPref: C.B,
					flairStyleTemplate: ee.S,
					isCurrentUserProfilePost: w.k,
					isLoggedIn: C.J,
					isActive: w.j,
					isPostChainDismissed: y.c,
					isPostChained: y.d,
					listingBelowVariant: ne.a,
					moderatorPermissions: v.j,
					modModeEnabled: ee.Q,
					posts: fe,
					postHeightVariant: de,
					showEditFlair: le.a,
					showAwardsPlaque: x.a
				}), (e, {
					listingKey: t,
					listingName: s,
					postId: r
				}) => ({
					chainPost: () => {
						s && t && e(Object(u.d)({
							listingKey: t,
							listingName: s,
							postId: r
						}))
					},
					handleVote: t => {
						const s = t === g.a.upvoted ? Object(m.U)(r) : Object(m.r)(r);
						e(s)
					},
					onIgnoreReports: () => e(Object(m.S)(r)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				})),
				_e = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: r,
						className: o,
						currentUser: a,
						eventFactory: u,
						flairStyleTemplate: m,
						forceLoadMedia: p,
						hideNSFWPref: g,
						hostPostId: _,
						imageGalleryCurrentItem: x,
						inSubredditOrProfile: y = !1,
						isCommentsPage: v,
						isCurrentUserProfilePost: w,
						isFrontpage: C,
						isGalleryTileLayoutDefault: V,
						isLoggedIn: H,
						isOverlay: q,
						isPostChainDismissed: K,
						isPostChained: W,
						isTopicPage: $,
						listingBelowVariant: ee,
						listingKey: te,
						listingName: ne,
						moderatorPermissions: oe,
						modModeEnabled: ae,
						onClickPost: ie,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: le,
						postHeightVariant: me,
						scrollerItemRef: he,
						shouldShowGalleryTileOption: fe,
						showAwardsPlaque: ge,
						showEditFlair: _e,
						subredditOrProfile: xe,
						userIsOp: ye,
						isActionBarAnimationEnabled: ve,
						postId: we,
						postIds: Ce
					} = e, ke = !!e.redditStyle || !!e["data-redditstyle"], Oe = ke ? void 0 : m, Pe = Object(d.a)(oe), Ee = ae && Pe, je = Object(i.a)(oe), Se = Object(c.a)(oe), Ie = Object(A.c)(le), Le = !!le.media && le.media.type === b.o.RTJSON, Ne = ye && Le, Fe = s ? s - M.a : void 0, De = !(C && H || $), Te = (e => e === Q.wc.OnlyTitles)(me) && !Object(se.a)(le), Ae = (e => e === Q.wc.MediumHeight)(me) && !Object(se.a)(le), Be = (e => {
						const {
							post: t,
							postIds: s,
							posts: r
						} = e;
						if (!Object(f.p)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							o = s && 1 === s.indexOf(t.id),
							a = r && r[1] && Object(f.p)(r[1]);
						return {
							hasTopCompactPostStyles: n && a,
							hasBottomCompactPostStyles: o,
							showPinnnedHeader: n
						}
					})(e), Re = !!ee && !Object(Q.od)(ee), Me = (!y || Re) && !le.isSponsored, ze = Object(k.t)(le, x), {
						source: Ue
					} = ze, Ve = n.a.createElement(n.a.Fragment, null, n.a.createElement(R.a, {
						className: Object(O.a)(be.a.container, o, pe.a.largeAndMediumPostStyles, pe.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[pe.a.mUseRedditTheme]: ke,
							promotedvideolink: le.isSponsored && !(le.media && b.a.has(le.media.type)),
							[be.a.topCompactPost]: Be && Be.hasTopCompactPostStyles,
							[be.a.bottomCompactPost]: Be && Be.hasBottomCompactPostStyles
						}),
						isOverlay: q,
						style: Object(l.b)(e.flairStyleTemplate),
						post: le,
						onClick: ie,
						onPostContentClick: r,
						eventFactory: u
					}, n.a.createElement(Z.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Oe,
						redditStyle: ke,
						subreddit: xe,
						isActionBarAnimationEnabled: ve,
						postId: we
					}), n.a.createElement(B.a, {
						className: Object(O.a)(be.a.backgroundWrapper, {
							[be.a.isEvent]: Object(re.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Oe,
						post: le,
						redditStyle: ke
					}, n.a.createElement(N.a, {
						post: le
					}), Be && Be.showPinnnedHeader && n.a.createElement(G, null), n.a.createElement(Y.a, {
						className: be.a.postTopLine,
						hideAwards: ge,
						hideNSFWPref: g,
						hostPostId: _,
						iconClassName: be.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!v,
						isCompactPinnedPost: !!Be,
						isCurrentUserProfilePost: w,
						isOverlay: !!q,
						isTopicPage: !!$,
						listingKey: te,
						post: le,
						shouldShowSubscribeButton: De,
						showSubreddit: Me,
						showSubredditIcon: !0,
						subredditOrProfile: xe
					}), n.a.createElement(J.c, {
						className: be.a.postTitle,
						post: le,
						redditStyle: ke,
						size: J.b.Large,
						titleColor: Oe && Oe.postTitleColor,
						isOverlay: q
					}), le.source && !le.isSponsored && !(le.media && Object(b.G)(le.media)) && n.a.createElement(X.a, {
						className: be.a.sourceLink,
						post: le
					}), n.a.createElement("div", {
						className: be.a.postMediaWrapper
					}, !Be && n.a.createElement(z.a, {
						isGalleryTileLayoutDefault: V,
						isListing: !0,
						isMediumHeight: Ae,
						isNotCardView: !!q,
						isTitleOnly: Te,
						showCentered: !0,
						flairStyleTemplate: Oe,
						post: le,
						availableWidth: Fe,
						shouldLoad: p,
						scrollerItemRef: he,
						autoplayPref: t,
						shouldShowGalleryTileOption: fe
					})), le.isSponsored && Ue && Ue.url && n.a.createElement(P.a, {
						className: be.a.adLinkWrapper
					}, n.a.createElement(E.a, {
						post: le,
						adLinkContent: ze
					})), ae && Pe && Ie && n.a.createElement(T.a, {
						onIgnoreReports: ce,
						reportable: le
					}), n.a.createElement(D.d, null), ge && n.a.createElement(j.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: le,
						tooltipType: q ? ue.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: be.a.flatListContainer
					}, n.a.createElement(I.a, {
						className: be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Oe,
						model: le,
						onVoteClick: e.handleVote
					}), n.a.createElement(F.c, {
						currentUser: a,
						hasModFlairPerms: je,
						hasModFullPerms: Se,
						hasModPostPerms: Pe,
						hostPostId: _,
						isActionBarAnimationEnabled: ve,
						isLargePost: !0,
						isOverlay: !!q,
						listingKey: te,
						modModeEnabled: ae,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: le,
						showEditPost: Ne,
						showEditFlair: _e,
						useFlatlistBreakpoints: Object(U.h)({
							editPost: !1,
							save: !Ee,
							hide: !1,
							report: !1
						})
					}))), C && n.a.createElement(S.a, {
						post: le,
						postIds: null != Ce ? Ce : [],
						subredditId: null == xe ? void 0 : xe.id
					})));
					return n.a.createElement(h.b, null, Ve, W && !K && n.a.createElement(L.a, {
						className: be.a.chain,
						listingKey: te,
						listingName: ne,
						postId: le.id
					}))
				});
			_e.displayName = "LargePostMemoized";
			t.default = Object(te.b)(ge(Object($.b)(_e)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/icons/svgs/Best/index.tsx"),
				u = s("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = s("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = s("./src/reddit/icons/svgs/New/index.tsx"),
				h = s("./src/reddit/icons/svgs/Rising/index.tsx"),
				b = s("./src/reddit/icons/svgs/Top/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/index.m.less"),
				g = s.n(f);
			const _ = {
					[a.P.BEST]: l.a,
					[a.P.HOT]: m.a,
					[a.P.NEW]: p.a,
					[a.P.CONTROVERSIAL]: u.a,
					[a.P.TOP]: b.a,
					[a.P.RISING]: h.a,
					[a.P.AWARDED]: d.a
				},
				x = {
					[a.P.BEST]: "best",
					[a.P.HOT]: "hot",
					[a.P.NEW]: "new",
					[a.P.CONTROVERSIAL]: "controversial",
					[a.P.TOP]: "top",
					[a.P.RISING]: "rising",
					[a.P.AWARDED]: "award"
				};

			function y({
				className: e,
				isFilled: t,
				sort: s
			}) {
				if (Object(i.a)() && void 0 !== x[s]) return n.a.createElement(c.a, {
					name: x[s],
					isFilled: t,
					className: Object(o.a)(e, g.a.iconStyles)
				});
				const r = _[s];
				return r ? n.a.createElement(r, {
					className: Object(o.a)(e, g.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(m);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(u.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: u,
					subredditOrProfile: m
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, o.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: m.url
				}, o.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: m
				}), o.a.createElement("span", null, m.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": r.fbt._("Crossposted by{author}from{community}", [r.fbt._param("author", Object(l.d)(e)), r.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(h, null))
				})(u.author, s), m && m.isQuarantined && o.a.createElement(i.a, null))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, n.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...s
			}) => n.a.createElement("div", c({
				className: Object(o.a)(i.a.border, {
					[i.a.isFirst]: e,
					[i.a.isLast]: t
				})
			}, s))
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
			var r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = s.n(x);
			const v = u.a.div("ProfileOwnerCommentWrapper", y.a),
				w = u.a.div("CommentContentWrapper", y.a),
				C = u.a.div("Wrapper", y.a),
				k = u.a.div("CommentSeparator", y.a),
				O = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.a)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.a)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(g.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: _.V
				}), e => ({
					openPost: t => e(Object(h.E)(t))
				}));
			class P extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: r,
						isAwarded: o,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: u,
						showModTools: p
					} = this.props, h = u === e.author ? E : j;
					return a.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							r({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(C, {
						className: Object(l.a)({
							[y.a.isFirst]: i,
							[y.a.isLast]: c,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: d
						})
					}, n()(s + 1, e => a.a.createElement(k, {
						key: e
					})), a.a.createElement(w, null, h(t, u, p))))
				}
			}
			const E = (e, t, s) => a.a.createElement(v, null, j(e, t, s, !0, !0)),
				j = (e, t, s, r = !1, n) => a.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: r,
					showModTools: s,
					isExpanded: !!n
				});
			t.a = O(P)
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
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				w = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/helpers/getClickInfo.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				I = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/helpers/brandSafety/index.ts"),
				F = s("./src/lib/LRUCache/index.ts"),
				D = s("./src/telemetry/index.ts"),
				T = s("./src/telemetry/models/Timer.ts"),
				A = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(A);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = 500, z = new F.a(M), U = new F.a(M), V = new F.a(M), H = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, q = g.a.div("SeeMore", B.a), K = g.a.wrapped(I.a, "ArrowRight", B.a), W = (e, t, s, r, n, o, a, i) => {
				const c = `entered-${e}-${t}-${s?`last-${r}-${n}`:""}-${o}`;
				let d = z.get(c);
				return void 0 === d && (d = () => {
					s && a.onBottomViewed(r, n), a.trackOnPostEnteredViewport(e, t, i)
				}, z.set(c, d)), d
			}, G = (e, t, s, r, n) => {
				const o = `left-${e}-${t}`;
				let a = U.get(o);
				return void 0 === a && (a = o => {
					s.trackOnPostExitedViewport(e, t, o, r, n)
				}, U.set(o, a)), a
			}, Z = (e, t) => {
				const s = `click-${e}`;
				let r = V.get(s);
				return void 0 === r && (r = (e, s, r, n) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, C.a.Click);
						const {
							source: e
						} = Object(p.t)(s, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(E.a)(s.id, r, t).url), Object(_.d)(t, _.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(j.a)(e)
					})
				}, V.set(s, r)), r
			}, J = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Y extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new F.a(M), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
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
						} = this.props, r = e(), n = [];
						r.forEach(e => n.push(e.id));
						const o = n.map(e => t[e]).filter(Boolean),
							a = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(N.a)(o, a))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && D.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = D.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = D.c.end(this.timerId);
						setTimeout(() => Object(D.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && D.c.cancel(this.timerId), e.postIds.length && (this.timerId = D.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && D.c.has(this.timerId)) {
						const e = D.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(D.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const r = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					r && r !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(r)
				}
				componentWillUnmount() {
					this.timerId && D.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return D.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = D.c.end(e);
					setTimeout(() => {
						s(t(r, T.TimerType.InApp))
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
						...s
					} = this.props, {
						postsById: r,
						...n
					} = e, o = Object.keys(s), a = Object.keys(n);
					if (a.length !== o.length) return !0;
					if (a.some(e => s[e] !== n[e])) return !0;
					if (t === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const a = 0 === o;
							return s({
								isFirstPost: a,
								layout: e,
								post: t[n]
							}) !== s({
								isFirstPost: a,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: n,
						hostPostId: o,
						isCommentPermalink: a,
						isCommentsPage: i,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: h,
						pageReferrer: f,
						postClickEventFactory: g,
						redditStyle: _,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: v,
						postIds: w
					} = this.props, C = 0 === t, k = `post-${r}-${e}-${t}-${s?"last-index":""}-${p}-${m}-${f}`;
					let P;
					if (void 0 === (P = this.scrollChildCache.get(k))) {
						const {
							inSubredditOrProfile: E,
							postsById: j
						} = this.props, I = j[e], N = I.crosspostRootId && j[I.crosspostRootId] ? j[I.crosspostRootId] : I;
						I.crosspostRootId && !j[I.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${I.id} is crosspost of ${I.crosspostRootId}, but ` + `${I.crosspostRootId} details are missing in the state`), x.c.captureMessage("Crosspost parent details are missing")
						});
						const F = this.props.postComponentForLayout({
								isCrosspost: !!I.crosspostRootId,
								isFirstPost: C,
								layout: r,
								post: N
							}),
							D = `post-list-item-[layout: ${r}]-[postId: ${e}]`,
							T = W(e, r, s, m, p, f, this.props, t),
							A = G(e, r, this.props, t, h),
							B = Z(e, this.props),
							R = N.media && N.media.type === L.o.EMBED ? N.media.provider : null;
						P = {
							estHeight: Object(S.c)(I, r),
							id: e,
							isFocusable: !(!N.media || !(r === O.g.Large || r === O.g.Classic && Object(L.G)(N.media))) && (L.d.has(N.media.type) && (!R || !L.s.has(R)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: T,
							trackOnExitedViewport: A,
							render: ({
								className: t,
								height: r,
								width: b,
								remeasure: f,
								setScrollerChildRef: x,
								shouldLoadInitially: k
							}) => u.a.createElement(F, {
								className: t,
								currentProfileName: n,
								key: D,
								availableWidth: b,
								eventFactory: g,
								first: C,
								forceLoadMedia: k,
								hostPostId: o,
								inSubredditOrProfile: E,
								isActionBarAnimationEnabled: v,
								isCommentPermalink: a,
								isCommentsPage: i,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: m,
								listingName: p,
								pageLayer: h,
								last: s,
								onClickPost: B,
								onSizeChanged: f,
								postId: e,
								postIds: w,
								redditStyle: _,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: x,
								shouldHideFlair: y
							})
						}, this.scrollChildCache.set(k, P)
					}
					return P
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
						layout: r,
						onTryAgain: n,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return u.a.createElement("div", {
						className: B.a.placeholder
					}, u.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && u.a.createElement(v.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: n,
						onLoadMore: o
					} = this.props;
					if (!s) return u.a.createElement("div", {
						className: B.a.placeholder
					}, u.a.createElement(y.a, {
						className: n,
						isLoading: !!t,
						layout: r,
						countOverride: H[r]
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
						injectChildren: n,
						isTruncated: o,
						layout: a,
						location: i,
						loadMore: c,
						postIds: d,
						onLoadMore: p
					} = this.props;
					let f = d.map((e, t, s) => {
						const r = t === d.length - 1;
						return this.scrollChildForPost(e, t, r, a)
					});
					n && (f = J(f, n));
					const g = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						_ = i ? Object(r.e)(i) : null,
						x = _ || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(w.b, {
						innerRef: this.updateScrollerRef,
						className: x ? B.a.truncatedPostList : Object(h.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: k.f
					}, f), _ && u.a.createElement(q, {
						className: B.a.seeMoreButton
					}, u.a.createElement(P.a, {
						className: B.a.seeMorePostsText,
						to: Object(m.a)(_, {
							type: b.Qb.Posts
						})
					}, R._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(K, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Y.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				v = s.n(y);
			const w = s("./src/lib/lessComponent.tsx").a.div("Container", v.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideAwards: y,
					hideNSFWPref: C,
					hostPostId: k,
					iconClassName: O,
					inSubredditOrProfile: P,
					isCommentsPage: E,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: S,
					isOverlay: I,
					isTopicPage: L,
					listingKey: N,
					post: F,
					shouldShowSubscribeButton: D,
					showCornerOutboundLink: T,
					showSubreddit: A,
					showSubredditIcon: B,
					subredditOrProfile: R
				} = e, M = y || L;
				return n.a.createElement(w, {
					className: t
				}, A && R && n.a.createElement("div", {
					className: v.a.subredditIconWrapper
				}, n.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, B && n.a.createElement(l.b, {
					className: Object(o.a)(v.a.subredditIcon, O),
					shouldHideNsfwIcon: C,
					subredditOrProfile: R
				}))), n.a.createElement("div", {
					className: v.a.everythingElseWrapper
				}, A && n.a.createElement(i.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), n.a.createElement(d.d, {
					className: v.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					tooltipType: I ? d.c.Lightbox : void 0,
					post: F,
					showSub: A,
					subredditOrProfile: R
				}), n.a.createElement(c.a, {
					className: v.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: j,
					post: F,
					tooltipType: I ? d.c.Lightbox : void 0
				}), !M && n.a.createElement(a.a, {
					isPostDetail: E,
					thing: F,
					tooltipType: I ? d.c.Lightbox : void 0
				})), R && A && D && !S && n.a.createElement(m.a, {
					className: v.a.SubscribeButton,
					getEventFactory: e => Object(f.f)(F.id, e ? "unsubscribe" : "subscribe", "post", N, k),
					identifier: {
						name: R.name,
						type: Object(x.g)(R) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: F.id,
					size: h.c.XS
				}), T && n.a.createElement(b.b, {
					className: v.a.OutboundLink,
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(_.D)(e.post),
					source: F.source
				}, n.a.createElement(g.a, {
					className: v.a.outboundLinkIcon
				})))
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
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			}));
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const _ = (e, t) => (e, t, s) => Object(u.a)(e) ? 120 : 47,
				x = Object(l.t)(),
				y = {
					apiError: h.a,
					apiPending: h.b,
					currentUser: g.i,
					layout: l.O,
					loadMore: h.d,
					subredditsById: b.ab,
					viewportDataLoaded: f.a,
					commentsById: h.g,
					itemIds: h.f,
					itemIdToPostId: h.e,
					postsById: h.h,
					estimateItemHeight: _
				},
				v = Object(a.c)(y),
				w = Object(o.b)(v, (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					openPost: t => {
						e(i.E(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(m.a)(t) && e(i.H(t))
					},
					trackOnPostExitedViewport: (t, s, r) => {
						Object(m.a)(t) && e(i.I(t, r))
					},
					fireAdPixelsOfType: n.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(p.f)(e, t)
				}));
			t.a = e => Object(d.c)(x(w(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "b", (function() {
				return j
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				_ = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isPredictionsPage: p.L,
					isProfilePostListing: p.I,
					isTopicPage: p.N,
					pageLayer: e => e
				})
			}
			const O = k(),
				P = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(y.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(w.F)(e, t.listingName);
							return Object(x.k)(e, {
								subredditId: s
							})
						}
						return Object(v.N)(e, {
							...t
						})
					},
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: r,
						inSubredditOrProfile: n
					}) => {
						if (r) {
							const t = Object(w.F)(e, s);
							return Object(x.j)(e, {
								subredditId: t
							})
						}
						return Object(v.A)(e, t, s, n)
					}),
					subredditsById: w.ab,
					viewportDataLoaded: C.a,
					pageReferrer: p.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: _.d
				},
				E = Object(n.c)(P),
				j = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r) => {
						e(d.H(t, r))
					},
					trackOnPostExitedViewport: (t, s, r, n, o) => {
						e(d.I(t, r, n, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				S = Object(r.b)(E, j, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(m.c)(O(S(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.S,
				hideNSFWPref: h.B,
				isActive: p.j,
				moderatorPermissions: u.j,
				modModeEnabled: d.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				}) => e(Object(a.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				})),
				handleVote: s => {
					const r = s === c.a.upvoted ? Object(o.U)(t) : Object(o.r)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(o.S)(t)),
				onOpenReportsDropdown: t => e(Object(i.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: r
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: r
				})
			}), {
				forwardRef: !0
			});
			t.a = b
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const o = {
					[n.P.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[n.P.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[n.P.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[n.P.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[n.P.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[n.P.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[n.P.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[n.Vb.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[n.Vb.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[n.Vb.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[n.Vb.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[n.Vb.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[n.Vb.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext({})
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const d = (e, t, s) => Object(a.a)(e, {
					data: s,
					endpoint: Object(n.a)(Object(i.a)(Object(c.a)(`${r.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`))),
					traceRequestName: "get_profile_conversations",
					method: o.cb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				l = (e, t, s) => Object(a.a)(e, {
					data: s,
					endpoint: Object(n.a)(Object(c.a)(`${r.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`)),
					method: o.cb.GET
				}).then(e => "pinned" in e.body ? e : "overviewIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.overviewIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), n.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("title", null, "Hot"), n.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Pin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(i);
			const d = ({
					message: e
				}) => o.a.createElement("div", {
					className: c.a.container
				}, o.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), o.a.createElement(a.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => o.a.createElement("div", {
					className: c.a.container
				}, o.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), o.a.createElement(a.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./node_modules/lodash/difference.js"),
				_ = s.n(g),
				x = s("./node_modules/lodash/pick.js"),
				y = s.n(x),
				v = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				O = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const P = Object(v.a)(O.c),
				E = Object(v.a)(O.b),
				j = Object(v.a)(O.a);
			var S = s("./src/reddit/components/ContentGate/index.tsx"),
				I = s("./src/reddit/components/EmptyProfile/index.ts"),
				L = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				N = s("./src/reddit/components/JumpToContent/index.tsx"),
				F = s("./src/lib/classNames/index.ts"),
				D = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				T = s("./src/reddit/components/ProfileItemList/index.tsx"),
				A = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				B = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				R = s.n(B),
				M = s("./src/lib/lessComponent.tsx");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = Object(A.a)(M.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, r = s.length > 0;
				return a.a.createElement(T.a, z({
					className: Object(F.a)(t, {
						[R.a.ComponentHasItems]: r
					})
				}, e))
			}, "Component", R.a));
			var V = e => a.a.createElement(U, z({}, e, {
					itemComponent: D.a
				})),
				H = s("./src/reddit/components/PostList/index.tsx"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/lib/isPinnedAdminPost/index.ts"),
				W = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				G = s("./node_modules/lodash/last.js"),
				Z = s.n(G);
			var J = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/components/ClassicPost/index.tsx"),
				Q = s("./src/reddit/components/LargePost/index.tsx"),
				$ = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				se = s("./src/reddit/selectors/profile.ts"),
				re = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				ne = s.n(re);
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = M.a.div("ExtraCommentsItemWrapper", ne.a), ie = M.a.p("ExtraComments", ne.a), ce = M.a.wrapped(ie, "ExtraCommentsInteractive", ne.a);
			var de = Object(i.b)(() => Object(c.c)({
					extraCommentsItem: se.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: r
						} = e.pages.profileOverview.conversations;
						return !!r.api.pending[s]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: s => e(Object(f.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => a.a.createElement(ae, null, s ? a.a.createElement(ie, null, oe._("Loading...", null, {
					hk: "47z90C"
				})) : a.a.createElement(te.a.Consumer, null, s => a.a.createElement(ce, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, oe._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				le = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				ue = s("./src/reddit/contexts/Post/index.tsx"),
				me = s("./src/reddit/hooks/useTheme.ts"),
				pe = s("./src/reddit/constants/postLayout.ts"),
				he = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(he),
				fe = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ge = s.n(fe);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = M.a.div("BackgroundWrapper", ge.a),
				ye = M.a.wrapped(X.default, "ClassicPost", ge.a),
				ve = M.a.wrapped($.a, "OverviewCommentPost", ge.a),
				we = Object(i.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const r = s ? s.toLowerCase() : "",
							n = Object(W.a)(t, r);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[n]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const r = s ? s.toLowerCase() : "",
							n = Object(W.a)(t, r);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[n]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Y.n)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Y.p)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, r = t.toLowerCase(), n = s.models[r];
							return n ? n.username : void 0
						})(e, t)
					},
					layout: m.O
				})),
				Ce = M.a.wrapped(Q.default, "OverviewLargePost", ge.a),
				ke = we(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: r,
						eventFactory: n,
						forceLoadMedia: o,
						headComment: i,
						isInitiallyPinned: c,
						isPinned: d,
						isScrolling: l,
						last: u,
						layout: m,
						onClickPost: p,
						onSizeChanged: h,
						pageLayer: b,
						post: f,
						postId: g,
						profileName: _,
						scrollerItemRef: x
					} = e, y = {
						last: u,
						onClickPost: p,
						postId: g
					};
					if (!_) return null;
					const v = _ === f.author,
						w = Object(K.a)(d, f.distinguishType);
					if (!v && !i && !w) return null;
					const C = i ? function(e) {
							const t = [],
								s = e.length;
							for (let r = 0; r < s; r++) {
								(0 === r || e[r - 1].depth !== e[r].depth - 1) && t.push([]), Z()(t).push(e[r])
							}
							return t
						}(function(e, t) {
							const s = [];
							let r = t,
								n = "comment";
							for (; r;) {
								const t = e[r];
								s.push({
									id: r,
									depth: t.depth,
									type: n
								}), t.next ? (r = t.next.id, n = t.next.type) : r = void 0
							}
							return s
						}(r, i)) : [],
						k = C.length - 1;
					return a.a.createElement("div", {
						className: Object(F.a)(be.a.largeAndMediumActiveStyles, be.a.largeAndMediumPostStyles, ge.a.OverviewConversationsPost, s),
						style: {
							...Object(J.b)(),
							...Object(J.d)(e)
						}
					}, a.a.createElement(ee.a, {
						isFirst: !0,
						isLast: k < 0,
						key: f.id
					}, !v && !!i && a.a.createElement(ve, _e({}, y, {
						commentId: i,
						key: f.id,
						profileName: _
					})), (v || w) && (m === pe.g.Classic ? a.a.createElement(ye, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: o,
						last: u,
						onClickPost: p,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: x
					}) : a.a.createElement(Ce, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: o,
						last: u,
						onClickPost: p,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: x
					}))), a.a.createElement(xe, {
						style: {
							background: Object(J.e)(e)
						}
					}, !c && C.map((e, t) => a.a.createElement(ee.a, {
						isLast: t === k,
						key: `${t}-isLast[${t===k}]`
					}, e.map((t, s) => {
						const r = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(le.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: r,
							isLast: n,
							key: t.id,
							profileName: _,
							showModTools: !0
						}) : a.a.createElement(de, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: _
						})
					})))))
				});
			var Oe = Object(ue.b)((function(e) {
					var t;
					const s = Object(me.a)(),
						r = Object(m.Z)();
					return a.a.createElement(ke, _e({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(m.h)(r),
						pageLayer: r
					}, e))
				})),
				Pe = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Ee = s("./src/reddit/helpers/trackers/post.ts"),
				je = s("./src/reddit/selectors/tracking.ts"),
				Se = s("./src/reddit/connectors/PostList/index.ts");
			const Ie = Object(c.c)({
					...Se.d,
					postIds: Y.K,
					viewportDataLoaded: je.a
				}),
				Le = Object(Se.c)(),
				Ne = Object(i.b)(Ie, Se.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Ee.f)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Pe.a : Oe
				}));
			var Fe = (e => Object(q.c)(Le(Ne(e))))(H.a),
				De = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Te = s("./node_modules/lodash/debounce.js"),
				Ae = s.n(Te),
				Be = s("./src/reddit/actions/post.ts"),
				Re = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Me = s("./src/lib/isUrl/index.ts"),
				ze = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ue = s("./src/reddit/components/Media/index.tsx"),
				Ve = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				He = s("./src/reddit/components/PostContainer/index.tsx"),
				qe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ke = s("./src/reddit/components/PostTitle/index.tsx"),
				We = s("./src/reddit/connectors/miniCardPost.ts"),
				Ge = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ze = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Je = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ye = s("./src/reddit/models/Media/index.ts"),
				Xe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Qe = s("./src/reddit/components/CommentsLink/index.tsx"),
				$e = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				et = s("./src/reddit/components/Flatlist/index.tsx"),
				tt = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				st = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				rt = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				nt = s("./src/reddit/components/ShareMenu/index.tsx"),
				ot = s("./src/reddit/icons/fonts/Share/index.tsx"),
				at = s("./src/reddit/models/User/index.ts"),
				it = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				ct = s.n(it);
			const dt = "-MiniCardModMenu",
				lt = "-MiniCardOverflowMenu",
				ut = "-MiniCardShareMenu",
				mt = M.a.wrapped($e.a, "HorizontalVotes", ct.a),
				pt = M.a.button("ShareButton", ct.a),
				ht = Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isProfilePostListing: m.I,
					pageLayer: e => e
				}),
				bt = Object(c.c)({
					layout: m.O,
					subreddit: m.q
				});
			var ft = ht(Object(i.b)(bt, {})(Object(q.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: r,
						handleVote: n,
						hasModFlairPerms: o,
						hasModFullPerms: i,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: u,
						isProfilePostListing: m,
						isSticky: p,
						layout: h,
						modModeEnabled: b,
						onCommentsClick: f,
						post: g,
						sendEvent: _,
						showEditFlair: x,
						showEditPost: y,
						subreddit: v
					} = e, w = e => _(Object(Ee.f)(g.id, e)), C = g.postId, k = Object(et.d)(dt, g.id, u, p), O = !!r && Object(at.e)(r) === g.author;
					return a.a.createElement("div", {
						className: Object(F.a)(ct.a.flatlistContainer, s)
					}, a.a.createElement(mt, {
						compact: !1,
						model: g,
						onVoteClick: n,
						scoreClassName: ct.a.score
					}), a.a.createElement(Qe.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: u,
						postId: g.id,
						modModeEnabled: b,
						numComments: g.numComments,
						type: pe.g.Compact,
						onClick: f
					}), a.a.createElement(nt.a, {
						className: ct.a.shareMenu,
						dropdownId: Object(et.d)(ut, g.id, u, p),
						permalink: g.permalink,
						post: g,
						sendEventWithName: w,
						subreddit: v
					}, a.a.createElement(pt, null, a.a.createElement(ot.a, {
						className: ct.a.shareIcon
					}), a.a.createElement("span", {
						className: ct.a.shareText
					}, Xe.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && a.a.createElement(tt.a, {
						dropdownId: k,
						onClick: () => w("post_mod_action_menu")
					}, a.a.createElement(et.b, {
						className: ct.a.modActionsIcon
					}), a.a.createElement(st.a, {
						canEditFlair: o && !!x,
						hasModPostPerms: c,
						hasModFullPerms: i,
						isOverlay: !!u,
						isPostAuthor: O,
						modModeEnabled: b,
						post: g,
						tooltipId: k
					})), a.a.createElement(rt.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!u,
						isProfilePostListing: m,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: g.permalink,
						postId: C,
						dropdownId: Object(et.d)(lt, g.id, u, p),
						isFixed: p,
						sendEvent: _,
						showEditPost: !!y,
						showEditFlair: !!x,
						useFlatlistBreakpoints: Object(rt.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				gt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				_t = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				xt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				yt = s.n(xt);
			var vt = Object(m.t)()(Object(ue.b)(Object(We.a)(Object(Re.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						crosspostRoot: n,
						crosspostSubredditOrProfile: o,
						currentUser: i,
						eventFactory: c,
						flairStyleTemplate: d,
						forceLoadMedia: l,
						hideNSFWPref: u,
						moderatorPermissions: m,
						modModeEnabled: p,
						onClickPost: h,
						post: b,
						scrollerItemRef: f,
						shouldPause: g,
						showMetaLine: _ = !0,
						showEditFlair: x,
						subredditOrProfile: y,
						userIsOp: v
					} = e, {
						media: w
					} = n || b, C = w && w.type, k = Object(qe.b)(b.id), O = C === Ye.o.RTJSON, P = v && O, E = Object(Je.a)(m), j = Object(Ge.a)(m), S = Object(Ze.a)(m), I = w && C !== Ye.o.RTJSON && C !== Ye.o.TEXT, L = !w && !!b.source && Object(Me.a)(b.source.url), N = w && a.a.createElement(Ue.a, {
						autoplayPref: t,
						availableWidth: s,
						className: yt.a.media,
						imageBoxClassName: yt.a.mediaImageBox,
						imageBoxContentImageClassName: yt.a.mediaImageBoxContentImage,
						forceAspectRatio: Ye.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: n || b,
						scrollerItemRef: f,
						shouldPause: g,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(He.a, {
						className: Object(F.a)(yt.a.postContainer, be.a.largeAndMediumActiveStyles, be.a.largeAndMediumPostStyles, Object(J.a)(e), r),
						style: {
							...Object(J.b)(e.flairStyleTemplate),
							...Object(J.d)(e)
						},
						post: b,
						onClick: h,
						eventFactory: c
					}, a.a.createElement(Ve.a, {
						className: yt.a.backgroundWrapper,
						flairStyleTemplate: d
					}, I && N, a.a.createElement("div", {
						className: yt.a.innerContainer
					}, L && a.a.createElement(_t.a, {
						post: b,
						templatePlaceholderImage: d ? d.postPlaceholderImage : void 0
					}), a.a.createElement(Ke.c, {
						className: yt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: b,
						size: Ke.b.Large,
						titleColor: d && d.postTitleColor
					}), _ && y && a.a.createElement(gt.a, {
						className: yt.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: u,
						post: b,
						subredditOrProfile: y
					}), !I && a.a.createElement("div", {
						className: yt.a.mediaWrapper
					}, N), a.a.createElement("div", {
						className: yt.a.flexSpacer
					}), a.a.createElement(ft, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: j,
						hasModFullPerms: S,
						hasModPostPerms: E,
						modModeEnabled: p,
						post: b,
						showEditFlair: x,
						showEditPost: P
					}))), e.activeModalId === k && a.a.createElement(qe.a, {
						flairs: b.flair,
						subredditId: b.belongsTo.id,
						modalId: k,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(ze.d, null))
				})))),
				wt = s("./src/reddit/helpers/getClickInfo.ts"),
				Ct = s("./src/reddit/helpers/localStorage/index.ts"),
				kt = s("./src/reddit/selectors/user.ts"),
				Ot = s("./src/reddit/icons/svgs/Pin/index.tsx"),
				Pt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Et = s.n(Pt);
			const {
				fbt: jt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var St = e => a.a.createElement("div", {
					className: Object(F.a)(Et.a.container, e.className)
				}, a.a.createElement(Ot.a, {
					className: Et.a.pin
				}), a.a.createElement("div", {
					className: Et.a.title
				}, jt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				It = s("./src/reddit/controls/TextButton/index.tsx"),
				Lt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Nt = s.n(Lt);
			const {
				fbt: Ft
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Dt = e => a.a.createElement(St, {
					className: Object(F.a)(Nt.a.container, e.className)
				}, a.a.createElement("div", {
					className: Nt.a.description
				}, Ft._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(It.a, {
					className: Nt.a.gotIt,
					onClick: e.onGotItClick
				}, Ft._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Tt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				At = s.n(Tt);
			const {
				fbt: Bt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Rt = 320, Mt = 300, zt = Object(c.c)({
				arePinnedPostsLoaded: Y.a,
				currentUser: kt.i,
				pinnedPostIds: Y.L
			}), Ut = Object(i.b)(zt, e => ({
				openPost: t => e(Object(Be.E)(t))
			}));
			class Vt extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Ae()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Mt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(Ct.sb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(wt.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(vt, {
						postId: e,
						key: e,
						availableWidth: Rt,
						className: Object(F.a)(At.a.item, At.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Ct.B)()
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
					const r = !!this.props.currentUser && this.props.profileName === Object(at.e)(this.props.currentUser),
						n = t.length > 0,
						o = !n && this.state.showEducation && r;
					if (!n && !o) return null;
					const i = r && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: At.a.title
					}, Bt._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? a.a.createElement(Dt, {
						className: Object(F.a)(At.a.item, At.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: At.a.container
					}, t.map(this.renderPost), i && a.a.createElement(St, {
						className: At.a.item
					})), s)
				}
			}
			var Ht = Object(m.t)()(Ut(Vt)),
				qt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Kt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Wt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Gt = s("./src/reddit/models/ContentGate.ts"),
				Zt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Yt = (e, {
					location: t
				}) => n()([...Object(d.a)(t.search)]),
				Xt = Object(m.t)(),
				Qt = Object(c.a)(m.B, kt.cb, Yt, m.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(se.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(b.a)(e, Yt(0, t)), (e, {
					match: t
				}) => !Object(Y.m)(e, {
					profileName: t.params.profileName
				}), kt.J, (e, {
					match: t
				}) => Object(kt.e)(e, p.Xb + t.params.profileName), (e, t, s, r, n, o, a, {
					sort: i,
					t: c
				}, d, l, m) => {
					const h = r === pe.g.Compact ? p.mb : p.nb,
						b = Object(u.a)(n, h, i, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: m,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: r,
						listingKey: b,
						profileName: n,
						shouldShowPinnedPostsSection: d && !f,
						sort: i,
						timeSort: c
					}
				}),
				$t = Object(i.b)(Qt, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: s
					}) => {
						const r = t(),
							{
								currentPage: n
							} = r.platform;
						if (!n || !n.routeMatch) return;
						const {
							queryParams: o,
							params: a
						} = n.routeMatch.match, {
							sort: i,
							t: c
						} = Object(b.a)(r, o), {
							profileName: d
						} = a, l = Object(u.a)(d, p.mb, i, o), m = Object(w.d)(r, {
							listingKey: l
						});
						if (!m) return;
						const h = Object(w.b)(r, {
								listingKey: l
							}),
							f = Object(w.c)(r, {
								listingKey: l
							}),
							g = f && f[m.token];
						if (h || g) return;
						e(P({
							key: l,
							fetchedToken: m.token
						}));
						const x = await Object(k.a)(s(), d, {
							after: m.token,
							dist: m.dist,
							sort: i,
							t: c,
							...y()(o, C.l)
						});
						if (x.ok) {
							const t = Object(w.f)(r, {
									listingKey: l
								}),
								s = {
									...x.body,
									overviewIds: _()(x.body.overviewIds, t)
								};
							e(E({
								fetchedToken: m.token,
								key: l,
								meta: r.meta,
								...s
							}))
						} else e(j({
							error: x.error,
							fetchedToken: m.token,
							key: l,
							account: x.body.data ? x.body.data.account : null
						}))
					})((t.match.params.profileName, t.match.params.sort))),
					onLoadMoreConversationsItems: () => e(f.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(d.a)(t.location.search)])
					}))
				}));
			class es extends a.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => a.a.createElement(I.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						layout: t,
						over18Prefs: s,
						isOwnProfile: r,
						isProfileNSFW: n,
						listingKey: o,
						onLayoutChange: i,
						pageLayer: c,
						profileName: d,
						sort: u,
						shouldShowPinnedPostsSection: m,
						timeSort: h
					} = this.props;
					if (!c) return null;
					if (e && e.profileDeleted) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileDeleted,
						profileName: d
					});
					if (e && e.profileSuspended) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileSuspended,
						profileName: d
					});
					if (451 === c.status || e && e.profileBlockedForLegalReason) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileBlockedForLegalReason,
						profileName: d
					});
					if (403 === c.status) return a.a.createElement(Zt.a, null);
					if (404 === c.status) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileDoesNotExist,
						profileName: d
					});
					if (!d) return null;
					const b = d.toLowerCase(),
						f = `/user/${d}/`,
						g = {
							listingKey: o,
							listingName: b
						};
					if (!s && n && !r) return a.a.createElement(S.default, {
						subredditName: d,
						contentGateType: Gt.a.Nsfw
					});
					const _ = {
							inSubredditOrProfile: !Object(l.a)(d),
							listingKey: o,
							listingName: b,
							listingViewed: (e, t) => Object(Kt.q)(o, u, t, e, h),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: i
						},
						x = {
							sort: u,
							baseUrl: f,
							sortOptions: p.sb,
							timeSort: h
						};
					let y;
					return y = t === pe.g.Compact ? a.a.createElement(V, Jt({}, _, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: i
					})) : a.a.createElement(a.a.Fragment, null, m && a.a.createElement(Ht, {
						profileName: d
					}), a.a.createElement(L.a, x), a.a.createElement(Fe, Jt({}, _, {
						excludePinnedPosts: m,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), a.a.createElement(Wt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(De.a, {
							profileName: d
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(N.a, null), y),
						sidebar: a.a.createElement(qt.a, Jt({}, g, {
							profileName: d
						}))
					})
				}
			}
			t.default = Xt($t(es))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: r.nb
				});
				return !(!t || Object(r.od)(t))
			}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "d", (function() {
				return y
			}));
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.T)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				l = [],
				u = (e, t) => {
					const s = m(e, t);
					if (!s) return l;
					const r = Object(o.X)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : l
				},
				m = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.T)(e, {
						subredditId: s
					}) : null
				},
				p = (e, t, s, r, o) => {
					const a = o.find(e => e <= t) || -1,
						i = o.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + s > t) && (!(t + s > i) && !((e, t, s) => {
						const r = s[t - 1],
							o = s[t],
							a = o && Object(n.D)(e, {
								postId: r
							}) || null,
							i = o && Object(n.D)(e, {
								postId: o
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const r = t.slice().sort();
					let o = -1;
					const a = Object(n.w)(e, {
							listingKey: s
						}),
						i = [];
					return h.forEach(t => {
						let s = o + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !p(e, s, t, a, r);) s += 1;
							s < a.length && (i.push(s), o = s)
						}
					}), i
				},
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				_ = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(a.I)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/models/Flair/index.ts"),
				o = s("./src/reddit/models/PostCreationForm/index.ts");
			n.f.Text, n.f.Spoiler, n.f.Text, n.f.Spoiler, o.h.RICH_TEXT, n.f.Text, n.f.Spoiler, o.h.RICH_TEXT, n.f.Text, n.f.Spoiler, o.h.RICH_TEXT;
			var a = s("./src/reddit/helpers/isComment.ts");
			const i = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return c(e, {
						listingKey: t
					}).filter(e => {
						if (Object(a.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				c = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				d = Object(r.a)((e, {
					listingKey: t
				}) => {
					return i(e, {
						listingKey: t
					}).reduce((t, s) => {
						const r = Object(a.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = r, t
					}, {})
				}),
				l = (Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return l(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(r.a)((e, {
					listingKey: t
				}) => {
					return i(e, {
						listingKey: t
					}).map(t => Object(a.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				u = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						r = l(e, {
							listingKey: t
						}),
						n = {};
					return r.forEach(e => n[e] = s[e]), n
				}),
				m = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						r = i(e, {
							listingKey: t
						}),
						n = {};
					return r.forEach(e => !!Object(a.a)(e) && (n[e] = s[e])), n
				}),
				p = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				b = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.62ecb97e3010ff859ca4.js.map