// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.409606d47ff8ce84a077.js
// Retrieved at 12/1/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./node_modules/linkify-it/index.js": function(e, t, r) {
			"use strict";

			function s(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(r) {
						e[r] = t[r]
					}))
				})), e
			}

			function n(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === n(e)
			}

			function a(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var o = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var c = {
					"http:": {
						validate: function(e, t, r) {
							var s = e.slice(t);
							return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(s) ? s.match(r.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, r) {
							var s = e.slice(t);
							return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(s) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : s.match(r.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, r) {
							var s = e.slice(t);
							return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(s) ? s.match(r.re.mailto)[0].length : 0
						}
					}
				},
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					s = e.__tlds__.slice();

				function o(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || s.push(d), s.push(t.src_xn), t.src_tlds = s.join("|"), t.email_fuzzy = RegExp(o(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(o(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(o(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(o(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var r = e.__schemas__[t];
					if (null !== r) {
						var s = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = s, "[object Object]" === n(r)) return ! function(e) {
							return "[object RegExp]" === n(e)
						}(r.validate) ? i(r.validate) ? s.validate = r.validate : l(t, r) : s.validate = function(e) {
							return function(t, r) {
								var s = t.slice(r);
								return e.test(s) ? s.match(e)[0].length : 0
							}
						}(r.validate), void(i(r.normalize) ? s.normalize = r.normalize : r.normalize ? l(t, r) : s.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
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
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var r = e.__index__,
					s = e.__last_index__,
					n = e.__text_cache__.slice(r, s);
				this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = s + t, this.raw = n, this.text = n, this.url = n
			}

			function p(e, t) {
				var r = new m(e, t);
				return e.__compiled__[r.schema].normalize(r, e), r
			}

			function b(e, t) {
				if (!(this instanceof b)) return new b(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || o.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = s({}, o, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = s({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			b.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, b.prototype.set = function(e) {
				return this.__opts__ = s(this.__opts__, e), this
			}, b.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, s, n, i, a, o, c;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (t = o.exec(e));)
						if (n = this.testSchemaAt(e, t[2], o.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (s = e.match(this.re.email_fuzzy)) && (i = s.index + s[1].length, a = s.index + s[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a)), this.__index__ >= 0
			}, b.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, b.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, b.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(p(this, t)), t = this.__last_index__);
				for (var s = t ? e.slice(t) : e; this.test(s);) r.push(p(this, t)), s = s.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, b.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, b.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, b.prototype.onCompile = function() {}, e.exports = b
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, r) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = r("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = r("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = r("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = r("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/random.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseRandom.js"),
				n = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				o = Math.min,
				c = Math.random;
			e.exports = function(e, t, r) {
				if (r && "boolean" != typeof r && n(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (r || e % 1 || t % 1) {
					var l = c();
					return o(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
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
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "i", (function() {
				return k
			}));
			var s = r("./node_modules/linkify-it/index.js"),
				n = r.n(s),
				i = r("./node_modules/tlds/index.js"),
				a = r.n(i),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./node_modules/lodash/values.js"),
				d = r.n(c);
			const l = e => d()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = n()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = n()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				_ = m(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = n()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				f = n()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				y = e => {
					return [..._.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				w = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				k = e => {
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
			var s = r("./src/config.ts"),
				n = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const i = Object(n.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${s.a.accountManagerOrigin}${r||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return v
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return w
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return k
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return E
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return F
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return C
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return O
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return N
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return I
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return S
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return D
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return A
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const d = async (e, t, r, s) => {
				const n = await Object(a.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: s
					}
				});
				if (!n.ok || !n.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/actions/economics/powerups/constants.ts"),
				f = r("./src/lib/initializeClient/installReducer.ts"),
				x = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(f.a)({
				features: {
					powerups: x.a
				}
			});
			const v = Object(n.a)(g.d),
				y = Object(n.a)(g.i),
				w = Object(n.a)(g.f),
				k = Object(n.a)(g.g),
				j = Object(n.a)(g.e),
				E = Object(n.a)(g.h),
				F = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, r) => {
								const s = await Object(a.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(n(), e, c),
							{
								subredditInfoById: s,
								redditorsInfoByIds: i
							} = t;
						await r(v(s)), i && await r(y(i))
					} catch (d) {
						i.c.captureException(d)
					}
				}, C = (e, t) => async (r, s) => {
					if (!e) return;
					const n = s(),
						i = Object(_.k)(n);
					if (!i || !Object(b.h)(n, {
							subredditId: e
						})) return;
					const a = !!Object(h.f)(n, {
						subredditId: e,
						userId: i.id
					});
					!t && a || await r(F(e, [i.id]))
				}, O = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.m)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(b.h)(s, {
						subredditId: e
					})
				}, N = e => async (t, r) => {
					var s;
					const n = r(),
						i = e.map(({
							id: e
						}) => e),
						a = Object(p.c)(n, {
							commentIds: i
						}),
						o = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(O(o)))) return;
					const c = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(F(o, Array.from(c)))
				}, I = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(O(e)))) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await r(F(e, Array.from(n)))
				}, S = (e, t) => async (r, s) => {
					const n = s(),
						i = Object(_.k)(n);
					if (!i) return;
					const a = i.id,
						o = Object(h.i)(n, {
							subredditId: e,
							userId: a
						});
					r(P({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, D = (e, t) => async (r, s) => {
					const n = s(),
						i = Object(_.k)(n);
					if (!i) return;
					const a = i.id,
						o = Object(h.h)(n, {
							subredditId: e,
							userId: a
						});
					r(P({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, P = e => async (t, r, {
					gqlContext: n
				}) => {
					const a = r(),
						o = Object(_.k)(a);
					if (!o) return;
					const c = o.id;
					t(w(e));
					const {
						subredditId: l,
						achievementFlairType: p,
						supporterFlairType: b
					} = e, g = [p, b].filter(Boolean), f = Object(h.e)(a, {
						subredditId: l,
						userId: c
					});
					try {
						await d(n(), l, g, f), t(k(e))
					} catch (x) {
						t(j(e)), i.c.captureException(x), t(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, A = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					const o = n(),
						c = Object(_.k)(o);
					if (!c) return;
					const l = c.id,
						p = {
							subredditId: e,
							userId: l
						},
						b = [Object(h.h)(o, p), Object(h.i)(o, p)].filter(Boolean);
					r(E({
						...p,
						isHidden: t
					}));
					try {
						await d(a(), e, b, t)
					} catch (g) {
						r(E({
							...p,
							isHidden: !t
						})), i.c.captureException(g), r(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: s.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(n.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/config.ts"),
				c = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = r.n(c),
				l = r("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								r = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, r), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: r
					} = this.state, i = r ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(n.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": s.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i))
				}
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-CommunityCard").then(r.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-Leaderboard").then(r.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, r) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = r("./src/reddit/models/Theme/index.ts"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/components/HeaderImage/index.m.less"),
				h = r.n(b);
			const _ = c.a.wrapped(u.a, "Planet", h.a),
				g = c.a.div("SubredditIcon", h.a),
				f = c.a.div("PositionedImage", h.a),
				x = c.a.div("HeaderContent", h.a),
				v = c.a.div("HeaderContainer", h.a),
				y = c.a.span("HeaderText", h.a),
				w = c.a.wrapped(i.a, "HeaderUrl", h.a),
				k = c.a.span("Container", h.a),
				j = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (s) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const u = !!i && !!o && "left" === s,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						E = `${4+j}px`;
					return n.a.createElement(k, {
						style: {
							background: b,
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, n.a.createElement(w, {
						className: e.className,
						to: e.url
					}, n.a.createElement(v, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||d.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && n.a.createElement(x, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? n.a.createElement(g, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					}) : n.a.createElement(_, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					})), n.a.createElement(y, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), n.a.createElement(f, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: {
							...c,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("IdCard").then(r.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(i.e)(o.v);
				return n.a.createElement(a.t, {
					priority: a.c.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? c._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : c._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return m
			}));
			var s, n = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				c = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(s || (s = {}));
			const m = ({
				space: e
			}) => {
				const t = Object(c.e)(d.X),
					r = e === s.MODAL,
					a = e === s.INFEED_UNIT;
				return o.a.createElement("div", {
					className: Object(i.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r,
						[u.a.isInFeedUnit]: a
					})
				}, o.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), o.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), o.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), o.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), o.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				d = r.n(c);
			const l = Object(n.forwardRef)((function({
					className: e,
					progress: t
				}, r) {
					const s = 100 * t;
					return i.a.createElement("div", {
						className: Object(a.a)(d.a.barRow, e),
						ref: r
					}, i.a.createElement("div", {
						className: d.a.track
					}), i.a.createElement("div", {
						className: d.a.progress,
						style: {
							width: `${s}%`
						}
					}, i.a.createElement(o.a, {
						className: Object(a.a)(d.a.icon, {
							[d.a.empty]: 0 === t,
							[d.a.full]: t >= 1
						})
					})))
				})),
				u = ({
					className: e,
					progress: t
				}) => {
					const [r, a] = Object(n.useState)(!1), o = r ? t : 0;
					return i.a.createElement(s.a, {
						onChange: e => {
							r || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, i.a.createElement(l, {
						className: e,
						progress: o
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				o = r("./src/reddit/components/UserIcon/index.tsx"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = r.n(u);
			const p = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
				className: Object(i.a)(m.a.userIconContainer, e.iconClassName)
			}, n.a.createElement(o.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), n.a.createElement("h4", {
				className: Object(i.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(l.a)(),
					{
						className: s,
						supporter: o
					} = e,
					{
						score: u,
						supporterInfo: b
					} = o,
					h = Object(a.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					_ = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					g = Object(a.c)(b),
					f = Object(a.a)(u),
					x = n.a.createElement(p, {
						userName: h,
						isNsfw: _,
						iconUrl: g
					});
				return n.a.createElement("div", {
					className: Object(i.a)(s, m.a.container)
				}, b ? n.a.createElement(c.a, {
					className: m.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && r(Object(d.K)(b.id, b.displayName))
					}
				}, x) : n.a.createElement("div", {
					className: m.a.user
				}, x), n.a.createElement("div", {
					className: m.a.counter
				}, n.a.createElement(f, {
					className: m.a.powerupIcon
				}), u))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, r) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const _ = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function g(e, t) {
				const r = t || m;
				return e.slice(0, r).map(_)
			}
			const f = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				x = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: g(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r
					} = this.props, n = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(s.a)(d.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: f,
						willEnter: x,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => i.a.createElement(i.a.Fragment, null, e.map(e => i.a.createElement("div", {
						className: d.a.item,
						key: e.key
					}, i.a.createElement("div", {
						className: d.a.itemCropper,
						style: {
							...e.style
						}
					}, i.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), n && i.a.createElement(o.t, {
						priority: o.c.Secondary,
						className: d.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: g(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(v)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const c = 2,
				d = 3;

			function l(e) {
				return e >= d ? o.a : e >= c ? a.a : i.a
			}

			function u(e) {
				var t;
				const r = !e,
					n = `${s.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? n : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t
			}) => e || n.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [n.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString()
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				oldTitleGroup: "bp_YzVmUt92uGSsPIf4j3",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				oldGroup: "_3y6WM5j8-wIqZ0RrXxy7j_",
				title: "_11_vLMByyp2z23bapR4owd",
				powerupsIcon: "_1FxdCwvprzQqdbsn7m_kVA",
				powerupsIconImage: "_12haD-enU6DNikY4x-ASUt",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				becomeFirstHero: "aJNQr1T_lEkfCdXvnmNcQ",
				becomeFirstHeroLabel: "_3c0aoF8IoxBMG3vuqMWoox",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				c = r("./src/reddit/actions/gold/powerups.ts"),
				d = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/helpers/trackers/powerups.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				_ = r("./src/reddit/selectors/gold/powerups/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				v = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				y = r.n(v);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: s,
					count: n,
					tiersInfo: a
				} = r, o = (a[s] || a[s - 1]).powerupsCost;
				if (!o) return null;
				const c = Math.min(o, n) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: y.a.titleRow
				}, i.a.createElement("span", null, w._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, n < o ? `${n}/${o}` : n)), i.a.createElement(x.b, {
					progress: c
				}))
			};
			var j = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				E = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				F = r.n(E);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(a.d)(),
					x = Object(h.a)(),
					v = Object(a.e)(f.k),
					y = Object(a.e)(e => Object(_.k)(e, {
						subredditId: t
					})),
					w = Object(a.e)(e => Object(g.Q)(e, {
						subredditId: t
					})),
					E = Object(a.e)(e => Object(_.n)(e, {
						subredditId: t
					})),
					O = Object(a.e)(e => !!Object(_.l)(e, {
						subredditId: t
					}));
				Object(n.useEffect)(() => {
					y && r(Object(o.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(t))
				}, [y, t, r]);
				if (!y || 1 === y.tiersInfo.length || !w) return null;
				return i.a.createElement(m.a, null, i.a.createElement(p.a, {
					className: e,
					title: C._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: F.a.container
				}, i.a.createElement("div", {
					className: F.a.titleGroup
				}, i.a.createElement("div", {
					className: F.a.powerupsIcon
				}, i.a.createElement("img", {
					className: F.a.powerupsIconImage,
					src: `${s.a.assetPath}/img/powerups/powerups-rangers.png`
				})), i.a.createElement("h2", {
					className: F.a.title
				}, (() => O ? C._("Powerups are unlocked in {communityName}", [C._param("communityName", w.displayText)], {
					hk: "3xCZkG"
				}) : C._("Powerup to unlock perks for {communityName}", [C._param("communityName", w.displayText)], {
					hk: "2OPLXh"
				}))()), i.a.createElement(d.a, {
					className: F.a.button,
					onClick: () => {
						x(Object(b.z)()), r(Object(c.g)("powerups_sidebar"))
					}
				}), i.a.createElement(l.a, {
					space: l.b.SIDEBAR
				})), i.a.createElement("div", {
					className: F.a.group
				}, i.a.createElement("h3", {
					className: F.a.subTitle
				}, C._("Community Heroes", null, {
					hk: "2ssat0"
				})), i.a.createElement(k, {
					className: F.a.progress,
					powerups: y
				}), !!(null == E ? void 0 : E.length) && i.a.createElement(j.a, {
					supporters: E,
					className: F.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						x(Object(b.B)()), r(Object(c.i)(t))
					}
				}), !(null == E ? void 0 : E.length) && i.a.createElement("div", {
					className: F.a.becomeFirstHero
				}, i.a.createElement(u.a, {
					displayName: C._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == v ? void 0 : v.displayName,
					isNsfw: !!(null == v ? void 0 : v.isNSFW),
					iconUrl: null == v ? void 0 : v.accountIcon,
					textClassName: F.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/lodash/random.js"),
				i = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				c = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/helpers/adCount/index.ts"),
				_ = r("./src/reddit/helpers/trackers/ads.ts"),
				g = r("./src/reddit/models/Media/index.ts"),
				f = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				x = r.n(f),
				v = r("./src/lib/lessComponent.tsx");
			const y = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				w = Object(d.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: s
						} = t, n = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, n, s)]
					}
				}),
				k = Object(c.b)(w),
				j = v.a.wrapped(b.a, "ThemedWidget", x.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.F)(e.media) && e.media.content)),
				F = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				C = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: r
						} = this.props;
						return t !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(_.b)(e, t, r))
					}
					render() {
						const e = i()(0, F.length - 1),
							{
								img: t,
								href: r
							} = F[e],
							{
								className: s,
								placement: n,
								redditStyle: a
							} = this.props;
						return o.a.createElement(j, {
							className: s,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, n)
						}))
					}
				});

			function O({
				className: e,
				post: t,
				placementIndex: r,
				refreshKey: s,
				listingName: n,
				placement: i,
				redditStyle: a,
				awaitingBrandSafetyCheck: c,
				forceHouseAd: d,
				removeSidebarSpacer: l
			}) {
				const u = l ? o.a.Fragment : m.a;
				if (!c && (E(t) || d)) {
					let c = null;
					return d ? c = o.a.createElement(C, {
						className: e,
						redditStyle: a,
						placement: i
					}) : t && (c = o.a.createElement(y, {
						post: t,
						postId: t.id,
						refreshKey: s,
						listingName: n,
						placement: i,
						placementIndex: r
					})), o.a.createElement(u, null, c)
				}
				return null
			}
			t.a = k(O)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, r) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/reddit/featureFlags/component.tsx"),
				l = r("./src/reddit/selectors/widgets.ts"),
				u = r("./src/lib/linkMatchers/index.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				h = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				_ = r("./src/telemetry/models/Outbound.ts"),
				g = r("./src/reddit/components/SubredditNav/index.m.less"),
				f = r.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = (e, t, r) => Object(p.a)(e, {
					[f.a.mActive]: t
				}, {
					[f.a.topBannerVariant]: r
				}),
				y = ({
					children: e,
					isActive: t,
					isTopBannerVariant: r,
					...s
				}) => n.a.createElement("div", x({
					className: v(f.a.subNavTitle, t, r)
				}, s), n.a.createElement("span", null, e), n.a.createElement(h.b, {
					className: f.a.navDropdownIcon
				})),
				w = ({
					className: e,
					href: t,
					isActive: r,
					to: s,
					isTopBannerVariant: i,
					...a
				}) => {
					const o = v(f.a.navLink, r, i);
					return s ? n.a.createElement(m.a, x({
						className: o,
						to: s
					}, a)) : t ? n.a.createElement(b.b, x({
						className: o,
						isSponsored: !1,
						sourceElement: _.SourceElement.NavigationMenu,
						href: t
					}, a)) : n.a.createElement("a", x({
						className: o
					}, a))
				},
				k = ({
					className: e,
					isActive: t,
					...r
				}) => n.a.createElement(m.a, x({
					className: Object(p.a)(v(f.a.navLink, t), e)
				}, r)),
				j = ({
					className: e,
					href: t,
					isActive: r,
					...s
				}) => t ? n.a.createElement(b.b, x({
					className: v(f.a.subNavLink, r),
					isSponsored: !1,
					sourceElement: _.SourceElement.NavigationMenu,
					href: t
				}, s)) : n.a.createElement("a", x({
					className: v(f.a.subNavLink, r)
				}, s)),
				E = ({
					className: e,
					...t
				}) => n.a.createElement("div", x({
					className: Object(p.a)(f.a.subNavContainer, e)
				}, t)),
				F = ({
					className: e,
					isOpen: t,
					...r
				}) => n.a.createElement("div", x({
					className: Object(p.a)(f.a.subNavList, e, {
						[f.a.mIsOpen]: t
					})
				}, r));
			class C extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return n.a.createElement(E, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, n.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), n.a.createElement(F, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var O = C;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? n.a.createElement(w, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : n.a.createElement(O, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => n.a.createElement(j, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				S = r("./src/reddit/selectors/subreddit.ts"),
				D = r("./src/reddit/actions/subreddit.ts"),
				P = r("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: A
			} = r("./node_modules/fbt/lib/FbtPublic.js"), T = Object(a.c)({
				isActive: (e, {
					subredditId: t
				}) => Boolean(e.subreddits.appliedFilters.meta[t]),
				subreddit: (e, {
					subredditId: t
				}) => Object(S.Q)(e, {
					subredditId: t
				})
			});
			var z = Object(i.b)(T, (e, t) => ({
					onActivate: () => e(Object(D.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(({
					subreddit: e,
					isActive: t,
					onActivate: r
				}) => {
					const s = Object(P.a)();
					return e ? n.a.createElement(k, {
						className: f.a.metaNavLink,
						to: e.url,
						isActive: t,
						onClick: e => {
							Object(c.G)(s) && !Object(c.N)(s) && e.preventDefault(), r()
						}
					}, A._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = r("./src/reddit/actions/economics/predictions/index.ts"),
				L = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				R = r("./src/reddit/helpers/trackers/predictions.ts"),
				M = r("./src/reddit/hooks/useTracking.ts"),
				W = r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function U({
				subredditId: e
			}) {
				const t = Object(i.d)(),
					r = Object(P.a)(),
					a = Object(M.a)(),
					o = Object(L.N)(r),
					[c, d] = Object(s.useState)(!1),
					l = Object(i.e)(t => Object(S.Q)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(S.K)(t, {
						subredditId: e
					})),
					m = Object(i.e)(t => Object(W.d)(t, {
						subredditId: e
					})),
					p = Object(i.e)(t => Object(W.c)(t, {
						subredditId: e
					}));
				return Object(s.useEffect)(() => {
					!u || c || m || o || (t(Object(B.m)(l.name)), d(!0))
				}, [u, c, m, o, t, l.name]), u && m ? n.a.createElement(k, {
					className: f.a.predictionsFilter,
					isActive: o,
					onClick: () => {
						t(Object(D.p)({
							subredditId: e,
							forceState: !1
						})), a(Object(R.i)())
					},
					to: `${l.url}predictions/`
				}, H._("Predictions", null, {
					hk: "Cv5GC"
				}), p && n.a.createElement("span", {
					className: f.a.liveIcon
				}, H._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var V = r("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const Z = Object(c.u)(),
				G = [V.Mb.SUBREDDIT, V.Mb.COMMENTS, V.Mb.COLLECTION_COMMENTS],
				$ = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && G.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(c.N)(t.pageLayer)
				});
			var J = Z(Object(i.b)($, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(D.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: s,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, c = s && !r && !i;
					return n.a.createElement(w, {
						to: t,
						isActive: c,
						isTopBannerVariant: a,
						onClick: e => {
							r && (e.preventDefault(), o())
						}
					}, q._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				K = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Y = r("./src/higherOrderComponents/makeAsync.tsx");
			var X = Object(Y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				Q = r("./src/reddit/constants/postLayout.ts"),
				ee = r("./src/reddit/constants/screenWidths.ts"),
				te = r("./src/reddit/models/Theme/index.ts"),
				re = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const se = Object(K.a)(({
				className: e,
				children: t,
				isTopBannerVariant: r,
				...s
			}) => {
				const i = Object(re.a)(s);
				return n.a.createElement("div", {
					className: Object(p.a)(f.a.outerContainer, e),
					style: {
						position: i.navBar.useOverlay && !r ? "absolute" : "static",
						background: r ? "inherit" : Object(te.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var ne = e => n.a.createElement(se, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, n.a.createElement("div", {
					className: f.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === Q.g.Large ? `${e.maxWidth||ee.a}px` : "100%"
					}
				}, n.a.createElement("div", null, e.children), n.a.createElement(X, null))),
				ie = r("./src/reddit/constants/wiki.ts"),
				ae = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: s
				} = e, i = !!s && !!s.meta && s.meta.name === V.Mb.SUBREDDIT_WIKI, a = `wiki/${ie.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return n.a.createElement(w, {
					isActive: i,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, oe._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const de = Object(d.a)("spPolls", z),
				le = Object(c.u)(),
				ue = Object(a.c)({
					layout: c.Q,
					widget: l.f
				}),
				me = Object(i.b)(ue);
			t.a = le(me(Object(o.c)(e => n.a.createElement(ne, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && n.a.createElement(n.a.Fragment, null, n.a.createElement(J, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), n.a.createElement(de, {
				subredditId: e.subredditId
			}), n.a.createElement(U, {
				subredditId: e.subredditId
			})), e.widget && n.a.createElement(n.a.Fragment, null, e.widget.showWiki && n.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => n.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: r,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, r) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, r) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, r) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/fastdom/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/Flair/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/flair.ts"),
				x = r("./src/reddit/helpers/trackers/postFlair.ts"),
				v = r("./src/reddit/models/Widgets/index.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				k = r.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				F = Object(h.u)({
					filterName: e => Object(h.V)(e)[b.g],
					url: e => Object(h.db)(e)
				}),
				C = Object(o.c)({
					subredditId: (e, t) => Object(y.B)(e, t.subredditName)
				}),
				O = Object(a.b)(C),
				N = l.a.div("WidgetContent", k.a),
				I = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: r,
					...s
				}) => i.a.createElement("li", {
					className: Object(c.a)(k.a.StyledFlair, e === v.g.Cloud && k.a.cloudDisplay, {
						[k.a.flairFilter]: t,
						[k.a["m-selected"]]: s.isSelected
					}),
					onMouseDown: r
				}, i.a.createElement(u.b, j({}, s, {
					className: k.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(x.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(x.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(x.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(x.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(_.r, {
						className: k.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(I, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, r = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: k.a.flairFilterContainer,
						style: {
							maxHeight: r
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(I, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: r
					} = this.state, s = t.order, n = this.getFlairsFromIds(s), a = e && this.getSelectedFlair(n) || void 0, o = t.order.length > s.length || r && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(n), o && this.renderButton()))
				}
			}
			t.a = F(O(Object(m.c)(S)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = r("./src/reddit/components/RichTextJson/index.tsx"),
				d = r("./src/reddit/helpers/dom/index.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				m = r("./src/reddit/models/Widgets/index.ts"),
				p = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				b = r.n(p);
			const h = a.a.div("RuleShortName", b.a),
				_ = a.a.div("RuleIndex", b.a),
				g = a.a.div("RuleTitle", b.a),
				f = a.a.div("RuleDescription", b.a),
				x = a.a.wrapped(o.a, "RawHTMLDisplay", b.a),
				v = {};
			class y extends n.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(d.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === m.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: r,
						shouldShowFullDisplay: s
					} = this, a = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !s(e) && !!a;
					return n.a.createElement(h, {
						className: Object(i.a)({
							[b.a.pointerCursor]: o,
							[b.a.cleanStyle]: e.cleanStyle
						}),
						onClick: s(e) || !a ? void 0 : r
					}, n.a.createElement(u.a, null, n.a.createElement(_, {
						className: Object(i.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), n.a.createElement(g, null, `${e.rule.shortName}`), n.a.createElement("div", null, !s(e) && a && n.a.createElement(l.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && n.a.createElement(f, {
						className: Object(i.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? n.a.createElement(c.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? n.a.createElement(x, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx");
			const c = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, r) {
				return i.a.createElement(o.a, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: r + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(c, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Be
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/controls/OutboundLink/index.tsx"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/linkMatchers/index.ts"),
				b = r("./src/reddit/helpers/widgets/index.tsx"),
				h = r("./src/reddit/models/Image/index.tsx"),
				_ = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = r("./src/reddit/models/Widgets/index.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/telemetry/models/Outbound.ts"),
				y = r("./src/reddit/components/Widgets/Button/index.m.less"),
				w = r.n(y);
			const k = (e, t, r) => {
					let s = {},
						n = {};
					s = e.kind === g.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: s,
							fillColor: n,
							textColor: i
						} = e;
						return t && (s = i = r, n = "transparent"), {
							"--widget-button-background-color": `${n||"transparent"}`,
							"--widget-button-border": `1px solid ${s}`,
							"--widget-button-color": `${i||s}`
						}
					})(e, t, r);
					const i = e.hoverState || e;
					if (i.kind === g.k.Image) n = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: a
						} = i;
						t && (e = a = r, s = "transparent"), n = {
							"--widget-button-hover-background-color": `${s||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...s,
						...n
					}
				},
				j = e => e.kind === g.k.Image ? w.a.imageButton : w.a.textButton,
				E = e => {
					const t = Object(b.h)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				F = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, s = Object(_.a)(e).button;
					return n.a.createElement(d.t, {
						className: j(t),
						style: k(t, r, s),
						isFullWidth: !0,
						size: d.d.S,
						priority: d.c.Secondary
					}, t.kind === g.k.Text && n.a.createElement("span", {
						className: t.hoverState ? w.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && n.a.createElement("span", {
						className: w.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				C = e => n.a.createElement(l.b, {
					href: E(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, n.a.createElement(F, e)),
				O = m.a.wrapped(o.a, "RawHTMLDisplay", w.a);
			var N = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.X
				}))(e => n.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && n.a.createElement(O, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== h.c)).map(t => n.a.createElement(C, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				S = r("./src/reddit/components/HumanDate/index.tsx"),
				D = r("./src/reddit/controls/TextButton/index.tsx"),
				P = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				A = r.n(P);
			const T = 100,
				z = {
					isExpanded: !1
				},
				B = m.a.wrapped(o.a, "RawHTMLDisplay", A.a),
				L = m.a.div("EventContainer", A.a),
				R = m.a.div("EventTitle", A.a),
				M = m.a.div("EventDate", A.a),
				W = m.a.div("EventLocation", A.a),
				H = m.a.div("EventDescription", A.a),
				U = m.a.wrapped(D.a, "ToggleDescription", A.a);
			class V extends n.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = z
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > T ? n.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, T), n.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : n.a.createElement(H, null, e.text)
				}
			}
			var q = e => n.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => n.a.createElement(L, {
					key: `${r}-${t.title}`
				}, n.a.createElement(R, null, t.titleHtml ? n.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && n.a.createElement(M, null, n.a.createElement(S.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && n.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? `${r}:0${s}` : `${r}:${s}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && n.a.createElement(W, null, t.locationHtml ? n.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && n.a.createElement(V, {
					text: t.description
				})))),
				Z = r("./src/reddit/components/TrackingHelper/index.tsx"),
				G = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var $ = Object(Z.c)(e => n.a.createElement(G.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				K = Object(i.b)(J),
				Y = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class X extends n.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Y(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, n.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Q = K(X),
				ee = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = r.n(ee);
			var re = m.a.div("ImageFrame", te.a),
				se = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = r.n(se);
			var ie = m.a.img("StyledImage", ne.a);
			class ae extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: r
					} = this;
					e.subredditName === t.subredditName && e.widget.data[r.imageIndex] && e.widget.data[r.imageIndex] === t.widget.data[r.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const r = e.widget.data[t.imageIndex],
						s = n.a.createElement(re, null, n.a.createElement(ie, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? n.a.createElement(l.b, {
						href: r.linkUrl
					}, s) : s
				}
			}
			var oe = ae,
				ce = r("./src/config.ts"),
				de = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = r("./src/lib/opener/index.ts"),
				ue = r("./src/reddit/components/Flair/index.tsx"),
				me = r("./src/reddit/controls/InternalLink/index.tsx"),
				pe = r("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = r("./src/reddit/models/Flair/index.ts"),
				he = r("./src/reddit/selectors/subreddit.ts"),
				_e = r("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = r.n(_e);
			const fe = m.a.a("ExternalLink", ge.a),
				xe = m.a.div("ModeratorListItem", ge.a),
				ve = m.a.div("Username", ge.a),
				ye = m.a.wrapped(ue.b, "FlairComponent", ge.a),
				we = e => e.authorFlairType === be.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				ke = e => n.a.createElement(ve, null, `u/${e}`),
				je = m.a.wrapped(me.a, "InternalLink", ge.a),
				Ee = m.a.div("LinkContainer", ge.a),
				Fe = Object(a.c)({
					userIsBanned: he.ab,
					userIsLoggedIn: x.K
				});
			var Ce = Object(i.b)(Fe)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: s,
						userIsLoggedIn: i
					} = e;
					return n.a.createElement(c.a, {
						styles: r.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || s) && n.a.createElement(d.t, {
						kind: d.b.InternalLink,
						priority: d.c.Secondary,
						className: ge.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${ce.a.redditUrl}/message/compose?to=/r/${t}`
					}, n.a.createElement(pe.a, {
						className: ge.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !s ? n.a.createElement(n.a.Fragment, null, r.mods.map(e => n.a.createElement(xe, {
						key: e.name
					}, (e => n.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, ke(e.name)))(e), n.a.createElement(ye, {
						flair: we(e),
						forceSmallEmojis: !0
					}))), n.a.createElement(Ee, null, n.a.createElement(je, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : s || !i ? n.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", n.a.createElement(fe, {
						href: `${ce.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : n.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", n.a.createElement(fe, {
						href: `${ce.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Oe = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Se = r.n(Ie);
			const De = m.a.div("WidgetContent", Se.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Se.a);
			var Ae = e => n.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, n.a.createElement(De, null, n.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Te = r("./src/reddit/components/Widgets/Base/index.tsx");
			var ze = e => n.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ce;
						case "textarea":
							return Ae;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return $;
						case "calendar":
							return q;
						case "image":
							return oe;
						case "custom":
							return Q;
						case "post-flair":
							return Oe.a;
						default:
							return ze
					}
				}(e.widget);
				return n.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./src/lib/isFakeSubreddit/index.ts"), r("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var s;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(s || (s = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return a
			})), r.d(t, "s", (function() {
				return o
			})), r.d(t, "t", (function() {
				return c
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "w", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "v", (function() {
				return h
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "z", (function() {
				return g
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "A", (function() {
				return v
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "x", (function() {
				return k
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "c", (function() {
				return F
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "e", (function() {
				return D
			}));
			var s = r("./src/reddit/models/Prediction/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				a = e => ({
					...Object(n.defaults)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				o = e => ({
					...Object(n.defaults)(e),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				c = e => ({
					...Object(n.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(n.defaults)(e),
					source: i,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(n.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: r
				}) => s => ({
					...Object(n.defaults)(s),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(s, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: r
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => r => ({
					...Object(n.defaults)(r),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(r, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					currency: t,
					amount: r
				}) => a => {
					const o = t === s.a.Coins ? r : void 0,
						c = t === s.a.Tokens ? r : void 0;
					return {
						...Object(n.defaults)(a),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(n.poll)(a, e, !1, o, c)
					}
				},
				b = e => ({
					...Object(n.defaults)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				h = e => t => ({
					...Object(n.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				_ = ({
					targetUserId: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				g = ({
					numberPredictionTokens: e,
					pollId: t
				}) => r => ({
					...Object(n.defaults)(r),
					source: i,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(n.poll)(r, t, !1, void 0, void 0, e)
				}),
				f = ({
					pageType: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				x = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				v = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				y = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "all_time_community_predictors",
						reason: "predictions_tab"
					}
				}),
				w = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "see_all",
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				k = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				j = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				E = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				F = e => t => ({
					...Object(n.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(n.subreddit)(t)
				}),
				C = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				O = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				N = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				I = () => e => ({
					...Object(n.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				S = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(n.subreddit)(e)
				}),
				D = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(n.subreddit)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "m", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "r", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "o", (function() {
				return E
			}));
			var s = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...n.defaults(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...i(e)
				}),
				o = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...i(e)
				}),
				c = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...i(t)
				}),
				d = (e = !1) => c(e ? "create_wiki_page" : "save_wiki_page"),
				l = c("compare_wiki_pages"),
				u = c("revert_wiki_page"),
				m = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				_ = c("save_wiki_page_settings"),
				g = c("copy_url"),
				f = c("add_wiki_subreddit_contributor"),
				x = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				y = c("unban_wiki_contributor"),
				w = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				k = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				j = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: n.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				E = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: n.actionInfo(t, {
						settingValue: k[e]
					})
				})
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/constants/postLayout.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => n.e[Object(i.Q)(e, {})] === n.d.Card,
				c = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: s.jb
				}) === s.Wb.Treatment
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.409606d47ff8ce84a077.js.map