// https://www.redditstatic.com/desktop2x/PostSetPage~ProfileComments~ProfileFollowersPage~ProfileOverview~ProfilePosts~ProfilePrivate~Profile~c0818407.54beefd8182c7328627f.js
// Retrieved at 6/30/2022, 3:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostSetPage~ProfileComments~ProfileFollowersPage~ProfileOverview~ProfilePosts~ProfilePrivate~Profile~c0818407"], {
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

			function i(e) {
				return "[object Function]" === s(e)
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
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function l(e, t) {
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
						}(r.validate) ? i(r.validate) ? n.validate = r.validate : l(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(i(r.normalize) ? n.normalize = r.normalize : r.normalize ? l(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(r) ? l(t, r): c.push(t)
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
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, s, i, o, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, o = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o)), this.__index__ >= 0
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
		"./node_modules/lodash/take.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseSlice.js"),
				s = r("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, r) {
				return e && e.length ? (t = r || void 0 === t ? 1 : s(t), n(e, 0, t < 0 ? 0 : t)) : []
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
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "i", (function() {
				return v
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				i = r("./node_modules/tlds/index.js"),
				o = r.n(i),
				a = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./node_modules/lodash/values.js"),
				d = r.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(o.a).set({
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
				b = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				f = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				y = p.normalize;
			p.normalize = e => {
				y.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				k = e => {
					return [...b.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				w = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				v = e => {
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
		"./src/reddit/actions/socialLinks/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "d", (function() {
				return j
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/components/SocialLinks/constants.ts"),
				i = r("./src/reddit/components/SocialLinks/helpers.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/DeleteSocialLinks.json"),
				c = r("./src/redditGQL/operations/SetSocialLinks.json"),
				d = r("./src/redditGQL/operations/SocialLinks.json"),
				l = r("./src/redditGQL/operations/UpdateSocialLinks.json");
			var u = r("./src/reddit/helpers/name/index.ts"),
				m = r("./src/reddit/helpers/structuredStyles/validators.ts"),
				p = r("./src/reddit/selectors/socialLinks.ts"),
				h = r("./src/redditGQL/types.ts"),
				_ = r("./src/reddit/actions/socialLinks/constants.ts"),
				b = r("./src/lib/initializeClient/installReducer.ts"),
				f = r("./src/reddit/reducers/features/socialLinks/index.ts");
			Object(b.a)({
				features: {
					socialLinks: f.a
				}
			});
			const g = Object(n.a)(_.a),
				y = Object(n.a)(_.b),
				x = Object(n.a)(_.c),
				k = Object(n.a)(_.d),
				w = Object(n.a)(_.e),
				v = e => {
					let {
						username: t
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: s
						} = n;
						const i = r();
						if (!!Object(p.c)(i, t)) return;
						e(y());
						const a = await (async (e, t) => {
							return await Object(o.a)(e, {
								...d,
								variables: t
							})
						})(s(), {
							username: t
						});
						if (a.ok && a.body) {
							const {
								data: r
							} = a.body, n = ((e, t) => {
								var r;
								const n = {},
									{
										redditorInfoByName: s
									} = t;
								if ("Redditor" !== (null == s ? void 0 : s.__typename)) return;
								const i = e.toLowerCase(),
									o = (null === (r = s.profile) || void 0 === r ? void 0 : r.socialLinks) || [];
								return n[i] = o, n
							})(t, r);
							n && e(g(n))
						}
					}
				},
				E = e => {
					let t, r, n, {
						socialLinkOption: i,
						rawHandle: o,
						rawTitle: a,
						url: c
					} = e;
					if (i.placeholderUrl) {
						const e = null == c ? void 0 : c.trim();
						if (!(e && Object(m.g)(e) === m.d.Valid)) throw new Error(s.f);
						t = e, r = null == a ? void 0 : a.trim()
					} else if (i.socialLinkType === h.z.Reddit) {
						const e = null == o ? void 0 : o.trim();
						if (!(e && Object(u.e)(e) && e && e.length >= s.h && !/\s/.test(e))) throw new Error(s.e);
						n = e
					} else n = null == o ? void 0 : o.trim();
					return {
						outboundUrl: t,
						title: r,
						handle: n,
						type: i.socialLinkType
					}
				},
				C = (e, t) => async (r, n, a) => {
					let {
						gqlContext: d
					} = a;
					const l = n(),
						{
							socialLinkOption: u,
							rawHandle: m,
							rawTitle: h,
							url: _
						} = t;
					if (!Object(p.a)(l, e)) return;
					const b = E({
							socialLinkOption: u,
							rawHandle: m,
							rawTitle: h,
							url: _
						}),
						f = await (async (e, t) => {
							return await Object(o.a)(e, {
								...c,
								variables: t
							})
						})(d(), {
							input: {
								socialLinks: [b]
							}
						});
					if (f.ok && f.body) {
						const {
							data: t
						} = f.body, {
							errors: n,
							ok: o,
							socialLinks: a
						} = t.setSocialLinks;
						if (o && !n) {
							const t = ((e, t) => {
								if (0 === e.length) return;
								return {
									username: t.toLowerCase(),
									addedSocialLink: e[e.length - 1]
								}
							})(a, e);
							if (!t) throw new Error(s.b);
							r(x(t))
						} else Object(i.f)(n)
					} else {
						const {
							errors: e
						} = f.body;
						Object(i.f)(e)
					}
				}, F = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const c = n();
					if (!Object(p.a)(c, t)) return;
					const d = await (async (e, t) => {
						return await Object(o.a)(e, {
							...a,
							variables: t
						})
					})(i(), {
						input: {
							socialLinkIds: [e]
						}
					});
					if (d.ok && d.body) {
						const n = ((e, t) => {
							return {
								username: e.toLowerCase(),
								removedSocialLinkId: t
							}
						})(t, e);
						r(k(n))
					}
				}, j = (e, t, r) => async (n, a, c) => {
					let {
						gqlContext: d
					} = c;
					const u = a(),
						{
							socialLinkOption: m,
							rawHandle: h,
							rawTitle: _,
							url: b
						} = r;
					if (!Object(p.a)(u, t)) return;
					const f = {
							...E({
								socialLinkOption: m,
								rawHandle: h,
								rawTitle: _,
								url: b
							}),
							id: e
						},
						g = await (async (e, t) => {
							return await Object(o.a)(e, {
								...l,
								variables: t
							})
						})(d(), {
							input: {
								socialLinks: [f]
							}
						});
					if (g.ok && g.body) {
						const {
							data: r
						} = g.body, {
							errors: o,
							ok: a,
							socialLinks: c
						} = r.updateSocialLinks;
						if (a && !o) {
							const r = ((e, t, r) => {
								const n = t.find(t => t.id === e);
								if (n) return {
									username: r.toLowerCase(),
									updatedSocialLink: n
								}
							})(e, c, t);
							if (!r) throw new Error(s.b);
							n(w(r))
						} else Object(i.f)(o)
					} else {
						const {
							errors: e
						} = g.body;
						Object(i.f)(e)
					}
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/socialLinks/index.ts"),
				c = r("./src/reddit/components/SidebarContainer/index.tsx"),
				d = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = r("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				u = r("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				h = r("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				_ = r("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = r("./src/reddit/constants/posts.ts"),
				f = r("./src/reddit/selectors/experiments/econ/index.ts");
			const g = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("reddit-components-ProfileIdCard").then(r.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				y = e => {
					const t = Object(o.e)(e => Object(f.i)(e)),
						r = Object(o.d)();
					return Object(s.useEffect)(() => {
						r(Object(a.c)({
							username: e.profileName
						}))
					}, [r, e.profileName]), i.a.createElement(c.a, {
						className: e.className
					}, i.a.createElement(g, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), i.a.createElement(_.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: b.a.PROFILE
						}
					}), i.a.createElement(d.a, {
						profileName: e.profileName
					}), i.a.createElement(l.a, {
						profileName: e.profileName
					}), !t && i.a.createElement(m.a, null, i.a.createElement(u.a, {
						profileName: e.profileName
					})), i.a.createElement(m.a, null, i.a.createElement(h.a, {
						profileName: e.profileName
					})), i.a.createElement(p.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			y.defaultProps = {
				isOverlay: !1
			}, t.a = y
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/SidebarContainer/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/take.js"),
				i = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				c = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				p = r("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: r,
					headerButton: s,
					items: c,
					minimizedLength: h,
					onLoadMore: _,
					pending: b,
					renderItem: f,
					title: g
				} = e, [y, x] = Object(o.useState)(!1), k = c.length > h || r, w = (!k || y ? c : i()(c, h)).map(e => f({
					item: e
				})), v = () => {
					y || x(!0), y && !r && x(!1), r && _ && _()
				};
				return a.a.createElement(d.a, {
					className: t,
					headerButton: s,
					title: g
				}, w, a.a.createElement(m.a, null, a.a.createElement(p.a, null, k && (() => {
					const e = !y || r && _ ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: v
					}, b ? a.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: c.Tb
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/location.ts"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				_ = r("./src/reddit/helpers/trackers/navigation.ts"),
				b = r("./src/reddit/selectors/experiments/countrySites.ts"),
				f = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				g = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				y = r("./src/reddit/selectors/meta.ts"),
				x = r("./src/reddit/components/SidebarFooter/index.m.less"),
				k = r.n(x);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js"), v = c.a.a("Link", k.a), E = Object(o.c)({
				countryCode: y.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: b.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: g.a
			}), C = Object(i.b)(E), F = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return s.a.createElement("div", {
					className: k.a.GreyRereddit
				}, r, s.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, w._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/coins"
				}, w._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/premium"
				}, w._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && s.a.createElement(s.a.Fragment, null, s.a.createElement(v, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, w._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, w._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: k.a.NoneCapitalizeLink
				}, w._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement(v, {
					href: "https://www.redditinc.com/"
				}, w._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/careers"
				}, w._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/press"
				}, w._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/advertising"
				}, w._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(v, {
					href: "http://www.redditblog.com/"
				}, w._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, w._("Mod policy", null, {
					hk: "2gYc2T"
				})), s.a.createElement("div", {
					className: k.a.Copyright
				}, w._("Reddit Inc © {year}. All rights reserved", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = F(C(Object(d.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(l.a, {
					className: k.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, w._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: k.a.Copyright
				}, w._("© {year} Reddit, Inc. All rights reserved.", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? s.a.createElement(v, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(_.a)(t))
					}, n[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Kc.GreyRereddit ? e.reredditButtons : [];
					return s.a.createElement(j, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return s.a.createElement(l.a, {
					className: k.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, w._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/coins"
				}, w._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/premium"
				}, w._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(v, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, w._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(v, {
					href: `https://www.reddit.com${Object(h.a)()}`
				}, w._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/topics/a-1/"
				}, w._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(v, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, w._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, w._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: k.a.NoneCapitalizeLink
				}, w._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(v, {
					href: "https://www.redditinc.com/"
				}, w._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/careers"
				}, w._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/press"
				}, w._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/advertising"
				}, w._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(v, {
					href: "http://www.redditblog.com/"
				}, w._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(v, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, w._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: k.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, n("en"), n("fr"), n("it")), s.a.createElement("div", {
					className: k.a.Column
				}, n("de"), n("es"), n("pt"))), s.a.createElement("div", {
					className: k.a.Copyright
				}, w._("Reddit Inc © {year}. All rights reserved", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/profile/index.ts"),
				d = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/subscriptions.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				b = r.n(_);
			const f = Object(a.c)({
					currentUser: h.k,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				g = Object(o.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, r) => ({
					...r,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				y = e => {
					let {
						item: t
					} = e;
					return i.a.createElement(l.a, {
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
			t.a = g(e => {
				const {
					currentUser: t,
					moderated: r,
					profileName: s,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === r.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === s.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
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
					}(r, new Set(o));
				return i.a.createElement(d.a, {
					className: b.a.container,
					title: m,
					items: p,
					renderItem: y,
					hasMoreItems: a,
					onLoadMore: c,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, r) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				l = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = r.n(p);
			const _ = Object(c.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				b = Object(o.b)(_, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.i)(t.profileName, !0))
				}), (e, t, r) => ({
					...r,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return i.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, i.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), i.a.createElement("div", {
						className: h.a.description
					}, i.a.createElement(a.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), i.a.createElement("div", {
						className: h.a.meta
					}, n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = b(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: r,
					multireddits: s,
					onLoadMore: o,
					profileName: a
				} = e;
				return s && s.length ? i.a.createElement(u.a, null, i.a.createElement(l.a, {
					hasMoreItems: t,
					items: s,
					onLoadMore: o,
					pending: r,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./node_modules/reselect/es/index.js"),
				h = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = r.n(h);
			const b = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: r
					} = t;
					const n = Object(m.Ab)(e, {
							userName: r
						}),
						s = Object(u.e)(e);
					return (n && s ? s[n.id] : null) || []
				}
			});

			function f(e) {
				let {
					item: t
				} = e;
				const r = t.subredditInfo,
					s = i.a.createElement(d.b, {
						iconUrl: r.styles.icon,
						className: _.a.subredditIcon
					});
				return i.a.createElement(l.a, {
					className: _.a.communityItemContainer,
					key: r.id
				}, i.a.createElement("div", {
					className: _.a.iconContainer
				}, i.a.createElement(a.a, {
					to: r.path
				}, s)), i.a.createElement("div", {
					className: _.a.communityDescription
				}, i.a.createElement("div", {
					className: _.a.communityName
				}, i.a.createElement(a.a, {
					to: r.path
				}, r.prefixedName)), i.a.createElement("div", {
					className: _.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(b)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? i.a.createElement(c.a, {
					title: n.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/lodash/throttle.js"),
				i = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				c = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/constants/elementIds.ts"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/BackToTop/index.m.less"),
				m = r.n(u);
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var _ = e => {
					let {
						className: t,
						isOverlay: r,
						style: s
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(t, m.a.container),
						style: s
					}, a.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => h(r)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				b = r("./src/reddit/components/SidebarFooter/index.tsx"),
				f = r("./src/reddit/constants/componentSizes.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				x = r.n(y),
				k = r("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = c.e[1] + 24,
				E = f.f + 8,
				C = E + 152 + 16,
				F = C + v + 8,
				j = k.a.div("Container", x.a),
				S = k.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...n
					} = e;
					return a.a.createElement(_, w({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?E:8}px)`
						}
					}, n))
				}, "BackToTop", x.a),
				D = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: s,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(r, {
							[x.a.BottomStickyStyles]: o,
							[x.a.StickyStyles]: !o && i && !s,
							[x.a.StickyStylesFakeOverlay]: !o && !!s
						})
					}, t)
				};
			class z extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > F,
						shouldFooterSticky: this.windowHeight > C
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
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
							adComponentOnFakeOverlay: r,
							children: n,
							className: s,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, l = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(j, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(D, {
						isFakeOverlay: r,
						isSticky: l,
						shouldStickToBottom: u
					}, t, n, c, !i && a.a.createElement(b.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(S, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const O = Object(g.u)();
			t.a = O(z)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = r("./src/reddit/controls/Typography/index.tsx"),
				l = r("./src/reddit/selectors/telemetry.ts");
			var u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = r("./node_modules/lodash/isEqual.js"),
				h = r.n(p);
			const _ = Object(a.b)(a.d, h.a);
			var b = r("./src/reddit/selectors/profile.ts"),
				f = r("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = r.n(f),
				y = r("./src/lib/lessComponent.tsx"),
				x = r("./src/lib/opener/index.ts");
			const k = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(b.r)(e, Object(b.m)(e, r))
				}
			}, _);
			t.a = Object(o.b)(k)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: j
				})
			});
			const w = y.a.wrapped(m.a, "TrophyItem", g.a),
				v = y.a.div("TrophyIcon", g.a),
				E = y.a.h5("TrophyName", g.a),
				C = y.a.div("TrophyContent", g.a),
				F = y.a.wrapped(d.c, "Description", g.a),
				j = e => {
					let {
						item: t
					} = e;
					const r = Object(u.a)(),
						n = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(w, {
						key: t.id
					}, i.a.createElement(v, null, t.url ? i.a.createElement("a", {
						target: x.d.BLANK,
						rel: x.c,
						href: t.url,
						onClick: () => r((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.n(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.R(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), i.a.createElement(C, null, i.a.createElement(E, null, t.name), i.a.createElement(F, null, t.description)))
				}
		},
		"./src/reddit/components/SocialLinks/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/config.ts");
			const i = 5,
				o = "add_social_link_modal_id",
				a = `${s.a.assetPath}/img/social-links/`,
				c = n.fbt._("@username", null, {
					hk: "3HC3Kd"
				}),
				d = n.fbt._("Display text", null, {
					hk: "1SlS6x"
				}),
				l = n.fbt._("Looks like this isn’t a valid URL. Double-check your spelling.", null, {
					hk: "1vKDvL"
				}),
				u = n.fbt._("This community or user doesn’t exist. Double-check your spelling.", null, {
					hk: "tKrv9"
				}),
				m = n.fbt._("There was a problem updating your account. Please try again.", null, {
					hk: "1i5tn1"
				}),
				p = 5
		},
		"./src/reddit/components/SocialLinks/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/redditGQL/types.ts"),
				s = r("./src/reddit/components/SocialLinks/constants.ts");
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js"), o = (e, t) => {
				let r, o = i._("{name of social link type}", [i._param("name of social link type", e)], {
						hk: "2ivfx8"
					}),
					a = s.i;
				switch (t) {
					case n.z.BuyMeACoffee:
						o = i._("Buy Me a Coffee", null, {
							hk: "ZTbP7"
						});
						break;
					case n.z.CashApp:
						o = i._("Cash App", null, {
							hk: "1aorWN"
						});
						break;
					case n.z.Custom:
						o = i._("Custom URL", null, {
							hk: "2gveOb"
						}), a = s.c, r = i._("https://website.com", null, {
							hk: "1Kp5fF"
						});
						break;
					case n.z.Reddit:
						a = i._("r/community, u/user", null, {
							hk: "45oRo"
						});
						break;
					case n.z.Discord:
						a = s.c, r = i._("https://discord.com", null, {
							hk: "6gcLP"
						});
						break;
					case n.z.Facebook:
						a = s.c, r = i._("https://facebook.com", null, {
							hk: "2v99jB"
						});
						break;
					case n.z.Kickstarter:
						a = s.c, r = i._("https://kickstarter.com", null, {
							hk: "132LC7"
						});
						break;
					case n.z.Shopify:
						a = s.c, r = i._("https://shopify.com", null, {
							hk: "2X1G4f"
						});
						break;
					case n.z.Spotify:
						a = s.c, r = i._("https://spotify.com", null, {
							hk: "3dZORp"
						});
						break;
					case n.z.Substack:
						a = s.c, r = i._("https://substack.com", null, {
							hk: "1zQgL1"
						});
						break;
					case n.z.Youtube:
						o = i._("YouTube", null, {
							hk: "12AQG6"
						}), a = s.c, r = i._("https://youtube.com", null, {
							hk: "4FZQ2O"
						});
						break;
					case n.z.Onlyfans:
						o = i._("OnlyFans", null, {
							hk: "1JRN4C"
						});
						break;
					case n.z.Paypal:
						o = i._("PayPal", null, {
							hk: "3n7Il"
						});
						break;
					case n.z.Soundcloud:
						o = i._("SoundCloud", null, {
							hk: "34Xo4u"
						});
						break;
					case n.z.Tiktok:
						o = i._("TikTok", null, {
							hk: "tajib"
						})
				}
				return {
					name: o,
					placeholderDisplayText: a,
					placeholderUrl: r,
					socialLinkType: t
				}
			}, a = () => {
				return Object.keys(n.z).map(e => {
					const t = n.z[e];
					return o(e, t)
				}).filter(e => e.socialLinkType !== n.z.Indiegogo)
			}, c = e => {
				const t = e.toLowerCase();
				return `${s.d}${t}.png`
			}, d = e => {
				for (const t in n.z)
					if (n.z[t] === e) return t;
				return ""
			}, l = e => {
				let t = s.b;
				throw e && e.length > 0 && (t = e[0].message), new Error(t)
			}, u = e => e && e.startsWith("@") ? e.slice(1) : e
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				a = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(a);
			const d = i.a.div("WidgetBackground", c.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return F
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				m = r("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				_ = r("./src/reddit/constants/componentSizes.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = r("./src/reddit/icons/fonts/index.tsx"),
				y = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = r("./src/reddit/models/Flair/index.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				E = r.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => i.a.createElement(h.a, {
					className: Object(d.a)(E.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: E.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: E.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: E.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, C({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(b.t, {
					className: E.a.bottomButton,
					kind: b.b.Button,
					priority: b.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(c.c)({
					hideNSFWPref: k.F,
					nightmode: k.db
				}),
				S = Object(o.b)(j)(e => i.a.createElement("div", {
					className: Object(d.a)(E.a.communityItemContainer, {
						[E.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(y.a, {
					className: E.a.communityItemExpandCenter,
					widthRight: _.s
				}, i.a.createElement("div", {
					className: E.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: E.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(E.a.defaultCommunityIcon, {
						[E.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: E.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: E.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(w.b)(e.name, e.type),
					to: Object(w.a)(e.name, e.type)
				}, Object(w.b)(e.name, e.type)), i.a.createElement("div", {
					className: E.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: E.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: E.a.nsfwFlair,
					flair: {
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(d.a)(E.a.communityCta, E.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(b.t, {
					className: E.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
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
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: E.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/posts.ts"),
				s = r("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, r) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/components/Widgets/Base/index.tsx"),
				l = r("./src/reddit/constants/posts.ts"),
				u = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/ExternalAccount/index.ts"),
				p = r("./src/reddit/selectors/externalAccount.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				f = r("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = r("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				x = r("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				k = r.n(x);
			var w = e => {
					const {
						account: t,
						clickEvent: r,
						provider: n
					} = e;
					let i, o = t.username,
						a = "";
					return n !== m.a.Twitter ? null : (i = s.a.createElement(g.a, {
						className: k.a.twitterLogo
					}), a = _.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, s.a.createElement(y.a, null, s.a.createElement("span", {
						className: k.a.icon
					}, i), s.a.createElement(b.b, {
						className: k.a.link,
						href: t.link,
						onClick: r
					}, s.a.createElement("div", {
						className: k.a.linkTitle
					}, s.a.createElement("span", {
						className: k.a.name
					}, o), s.a.createElement(f.a, {
						className: k.a.linkIcon
					})), s.a.createElement("div", {
						className: k.a.linkDescription
					}, a))))
				},
				v = r("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				E = r.n(v);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js"), F = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: r
					} = t;
					return r.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: r.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: r
					} = t;
					return r.type === l.a.PROFILE ? Object(h.Ab)(e, {
						userName: r.name
					}) : null
				}
			}), j = Object(i.b)(F, e => ({
				trackTwitterAccountClicked: t => e((e, r) => u.m(r(), t))
			}), (e, t, r) => ({
				...r,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: r
				} = e;
				return r ? s.a.createElement(a.a, null, s.a.createElement(d.b, null, s.a.createElement(d.a, null, C._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), r && s.a.createElement("div", {
					className: E.a.account
				}, s.a.createElement(w, {
					provider: m.a.Twitter,
					account: r,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/widgets.ts"),
				h = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				_ = r("./src/reddit/selectors/experiments/topPosts.ts"),
				b = r("./src/reddit/selectors/structuredStyles.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/models/Theme/index.ts"),
				y = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = x(e);
					return Object(g.f)(t)
				},
				v = e => {
					const t = k(e);
					return Object(g.f)(t)
				};
			var E = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = r.n(E);
			const {
				fbt: F
			} = r("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), S = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						n = t.redditStyle || Object(b.l)(e, {
							subredditId: r
						}),
						s = Object(f.db)(e);
					return n || s
				},
				nigtmode: f.db,
				subredditId: u.n,
				topPostVariant: _.d
			}));
			class D extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: i,
						id: o,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, _ = r ? C.a.widgetContentOnly : C.a.widgetContent, b = !n && this.props.styles, f = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: n,
							[C.a.clickable]: !!c,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: f
					}, u && s.a.createElement("div", {
						className: Object(a.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: o,
						style: g,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(a.a)(C.a.widgetTitle, p)
					}, s.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), i), s.a.createElement("div", {
						className: Object(a.a)(_, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, F._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(S(Object(c.a)(Object(l.c)(D))))
		},
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n = r("./src/lib/linkMatchers/index.ts");
			var s;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(s || (s = {}));
			const i = e => {
					if (!e) return s.NoUrl;
					if (e.length < 4) return s.TooShort;
					const t = Object(n.h)(n.f, e);
					return t ? "ftp:" === t.schema ? s.Invalid : "mailto:" === t.schema ? s.Invalid : s.Valid : s.Invalid
				},
				o = 20;
			var a;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(a || (a = {}));
			const c = e => e ? e.length > o ? a.TooLong : a.Valid : a.TooShort;
			var d;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(d || (d = {}));
			const l = e => e.length ? d.Valid : d.TooShort
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			}));
			var n, s, i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => r => ({
					source: s.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(o.vb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				c = (e, t) => r => ({
					source: s.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: o.I(r, e),
					subreddit: o.hb(r),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...o.n(r)
				}),
				d = () => e => ({
					source: s.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, r) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, r) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = r.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/experiments/utils.ts"),
				a = r("./src/reddit/selectors/meta.ts"),
				c = r("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(a.g)(e) && Object(i.f)(e),
					experimentName: n.oc
				}), o.a),
				l = Object(c.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(a.g)(e) && Object(i.f)(e),
					experimentName: n.nc
				}), o.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPage~ProfileComments~ProfileFollowersPage~ProfileOverview~ProfilePosts~ProfilePrivate~Profile~c0818407.54beefd8182c7328627f.js.map