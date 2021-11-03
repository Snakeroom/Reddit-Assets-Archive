// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileOverview.c2d5b37a51b10e4c0fac.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileOverview"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function o(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function i(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === i(e)
			}

			function n(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var c = {
					"http:": {
						validate: function(e, t, s) {
							var o = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(o) ? o.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var o = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(o) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : o.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var o = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(o) ? o.match(s.re.mailto)[0].length : 0
						}
					}
				},
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					o = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || o.push(d), o.push(t.src_xn), t.src_tlds = o.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var s = e.__schemas__[t];
					if (null !== s) {
						var o = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = o, "[object Object]" === i(s)) return ! function(e) {
							return "[object RegExp]" === i(e)
						}(s.validate) ? r(s.validate) ? o.validate = s.validate : l(t, s) : o.validate = function(e) {
							return function(t, s) {
								var o = t.slice(s);
								return e.test(o) ? o.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? o.normalize = s.normalize : s.normalize ? l(t, s) : o.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === i(e)
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
				})).map(n).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var s = e.__index__,
					o = e.__last_index__,
					i = e.__text_cache__.slice(s, o);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = o + t, this.raw = i, this.text = i, this.url = i
			}

			function p(e, t) {
				var s = new m(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = o({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = o({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = o(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, o, i, r, n, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (i = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + i;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (o = e.match(this.re.email_fuzzy)) && (r = o.index + o[1].length, n = o.index + o[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && n > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = n)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var o = t ? e.slice(t) : e; this.test(o);) s.push(p(this, t)), o = o.slice(this.__last_index__), t += this.__last_index__;
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
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, o) {
				var i = s ? s.call(o, e, t) : void 0;
				if (void 0 !== i) return !!i;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					n = Object.keys(t);
				if (r.length !== n.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < r.length; c++) {
					var d = r[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (i = s ? s.call(o, l, u, d) : void 0) || void 0 === i && l !== u) return !1
				}
				return !0
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
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var o = s("./node_modules/react/index.js");

			function i() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				u = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.Jb.Bottom_cell),
						t = Object(u.a)(c.Jb.Bottom_cell_dismissible),
						s = Object(u.a)(c.Jb.Bottom_cell_dismissible_immediate_trigger),
						o = Object(u.a)(c.Jb.Bottom_cell_signup_upsell_copy),
						i = Object(u.a)(c.Jb.Bottom_cell_surprise_install_copy),
						r = Object(u.a)(c.Jb.Bottom_sheet);
					return e || o || i ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const h = 250,
				_ = 1e3;

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(d.a)(), s = m(), r = Object(p.a)(s), l = Object(u.a)(c.Jb.Bottom_cell_dismissible_immediate_trigger);
						return o.useMemo(() => n()(() => {
							if (!r && s) {
								const e = document.getElementById(a.d),
									o = e ? e.scrollTop : i().scrollY,
									r = i().innerHeight,
									n = r / 3,
									c = 2 * r;
								o >= (l ? n : c) && t(s)
							}
						}, e, {
							maxWait: _
						}), [l, r, s, t, e])
					}();
					return o.createElement(e, b({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return j
			}));
			var o, i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				n = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const _ = Object(i.a)(n.g),
				b = Object(i.a)(n.e),
				g = Object(i.a)(n.h),
				f = Object(i.a)(n.c),
				y = Object(i.a)(n.f),
				x = Object(i.a)(n.j),
				v = Object(i.a)(n.i),
				k = () => async (e, t, {
					gqlContext: s
				}) => {
					const i = t(),
						r = Object(m.e)(i),
						n = Object(m.d)(i),
						d = Object(h.J)(i);
					if (r || !n) return;
					e(g());
					let p = !1;
					try {
						const t = d ? o.LoggedInGeo : o.LoggedOutGeo,
							i = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (i.ok && i.body) {
							const {
								data: t
							} = i.body;
							if (E(t)) {
								if (F(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: i,
											category: r
										} = s.focusRecommendations[0],
										n = [o, i],
										a = Object(u.d)(n),
										c = Object(l.b)(n),
										d = Object(u.c)(o),
										m = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [i.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: r,
											lastLoadedEnv: "client"
										};
									e(_(m)), p = !0
								}
							} else p = !1
						}
					} catch (y) {
						p = !1
					}
					p || e(b({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, F = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !F(e) && o === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, j = () => async (e, t, s) => {
					var o, i;
					const n = t(),
						a = Object(m.g)(n);
					if (Object(m.f)(n) || null === a || "client" === a) {
						const s = null === (i = null === (o = Object(p.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
							a = Object(h.K)(n);
						return Object(r.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				v2Container: "_3Ck2ZoZ2ImMBMvI1gp5MaL",
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
			var o = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				participantsCount: e
			}) => m._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [m._param("total participated users", Object(u.b)(e)), m._plural(e)], {
				hk: "1yrPLH"
			});
			var h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				_ = s.n(h);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === c.a.Live,
					i = t.status === c.a.Closed,
					u = Object(n.e)(d.u),
					m = Object(n.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return u ? r.a.createElement("div", {
					className: _.a.v2Container
				}, r.a.createElement("div", {
					className: _.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), s && r.a.createElement("span", {
					className: Object(o.a)(_.a.badge, _.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), i && r.a.createElement("span", {
					className: Object(o.a)(_.a.badge, _.a.ended)
				}, b._("Ended", null, {
					hk: "4s3hco"
				})), t.totalParticipantsCount && r.a.createElement("span", {
					className: _.a.predictions
				}, r.a.createElement(p, {
					participantsCount: t.totalParticipantsCount
				})), r.a.createElement(a.a, {
					className: _.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: _.a.title
				}, t.name)) : r.a.createElement("div", {
					className: _.a.container
				}, r.a.createElement("h3", {
					className: _.a.title
				}, t.name), r.a.createElement("div", {
					className: _.a.label
				}, r.a.createElement("span", null, b._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), s && r.a.createElement("span", {
					className: Object(o.a)(_.a.badge, _.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), i && r.a.createElement("span", {
					className: Object(o.a)(_.a.badge, _.a.ended)
				}, b._("Ended", null, {
					hk: "4s3hco"
				}))), r.a.createElement(a.a, {
					className: _.a.awards,
					thing: e
				}))
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
			var o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, i.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && i.a.createElement(n.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/OneFeed/Footer.m.less": function(e, t, s) {
			e.exports = {
				Footer: "_3AaWcDg070_adHsR2kuysq",
				footer: "_3AaWcDg070_adHsR2kuysq",
				ClassicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				classicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				LargeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				largeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				SeeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				seeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				Title: "_21u1WVXVWqUtM7v_Y0c9_0",
				title: "_21u1WVXVWqUtM7v_Y0c9_0",
				Button: "_3FNnHKnM8zvRUpKS2hqoVu",
				button: "_3FNnHKnM8zvRUpKS2hqoVu",
				Divider: "_5XRkOTBpwyH-aTpv3Uj2",
				divider: "_5XRkOTBpwyH-aTpv3Uj2",
				ThankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				thankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				Icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				Subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8",
				subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return ve
			})), s.d(t, "a", (function() {
				return Ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, i = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				a = s("./node_modules/lodash/last.js"),
				c = s.n(a),
				d = s("./node_modules/lodash/throttle.js"),
				l = s.n(d),
				u = s("./node_modules/react/index.js"),
				m = s.n(u),
				p = s("./node_modules/shallowequal/index.js"),
				h = s.n(p),
				_ = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				x = s("./src/lib/lessComponent.tsx"),
				v = s("./src/lib/opener/index.ts"),
				k = s("./src/lib/sentry/index.ts"),
				E = s("./node_modules/react-redux/es/index.js"),
				F = s("./src/reddit/actions/post.ts"),
				w = s("./src/reddit/actions/toaster.ts"),
				j = s("./src/reddit/constants/oneFeed.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/contexts/ApiContext.tsx"),
				P = s("./src/lib/makeGqlRequest/index.ts"),
				O = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(o || (o = {}));
			const S = (e, t) => Object(P.a)(e, {
					...O,
					variables: t
				}),
				A = (e, t) => S(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: o.ADD,
							subredditId: t
						}
					}
				}),
				L = (e, t) => S(e(), {
					input: {
						dislikedSubredditPreference: {
							action: o.ADD,
							subredditId: t
						}
					}
				});
			var z = s("./src/reddit/helpers/trackers/post.ts"),
				I = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				T = s("./src/reddit/hooks/useTracking.ts"),
				B = s("./src/reddit/icons/fonts/index.tsx"),
				N = s("./src/reddit/components/OneFeed/Footer.m.less"),
				R = s.n(N);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = async ({
				dispatch: e,
				gqlContext: t,
				setRecommendationFooterView: s,
				similar: o,
				subredditId: i
			}) => {
				const r = o ? A : L;
				try {
					if (!0 === (await r(t, i)).ok) return void s(j.a.ThankYouView);
					e(Object(w.d)())
				} catch (n) {
					e(Object(w.d)())
				}
			}, M = ({
				displayText: e,
				seeLessFromThisCommunity: t,
				seeLessLikeThisCommunity: s,
				seeLessOfThisPostClick: o
			}) => m.a.createElement("div", {
				className: R.a.SeeFewerPostsView
			}, m.a.createElement("div", {
				className: R.a.Title
			}, V._("What would you like to see less of?", null, {
				hk: "mw3bZ"
			})), m.a.createElement("div", null, m.a.createElement("button", {
				className: R.a.Button,
				onClick: o
			}, V._("This individual post", null, {
				hk: "103pQH"
			}))), m.a.createElement("hr", {
				className: R.a.Divider
			}), m.a.createElement("div", null, m.a.createElement("button", {
				className: R.a.Button,
				onClick: t
			}, V._("Posts from this community", null, {
				hk: "RacDp"
			}))), !!e && m.a.createElement(m.a.Fragment, null, m.a.createElement("hr", {
				className: R.a.Divider
			}), m.a.createElement("div", null, m.a.createElement("button", {
				className: R.a.Button,
				onClick: s
			}, V._("Posts from communities similar to {subreddit name}", [V._param("subreddit name", e)], {
				hk: "3pCPAD"
			}))))), Z = () => m.a.createElement("div", {
				className: R.a.ThankYouView
			}, m.a.createElement("div", {
				className: R.a.Title
			}, m.a.createElement(B.a, {
				name: "checkmark",
				className: R.a.Icon
			}), V._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), m.a.createElement("div", {
				className: R.a.Subtitle
			}, V._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			})));
			var U = Object(D.b)(({
					gqlContext: e,
					layout: t,
					post: s
				}) => {
					var o;
					const i = Object(E.d)(),
						r = Object(T.a)(),
						n = Object(u.useRef)(!1),
						{
							hideRecommendationFooter: a,
							recommendationFooterView: c,
							setRecommendationFooterView: d
						} = Object(I.a)(),
						l = s.belongsTo.id,
						p = s.id,
						{
							subredditId: h,
							subredditName: _
						} = (null === (o = s.recommendationContext) || void 0 === o ? void 0 : o.source) || {};
					Object(u.useEffect)(() => {
						if (c === j.a.ThankYouView) {
							const e = n.current ? () => i(Object(F.Y)(p, !0, !1, !0)) : a,
								t = setTimeout(e, 1500);
							return () => clearTimeout(t)
						}
					}, [i, a, p, c]);
					const b = Object(u.useCallback)(() => {
							n.current = !0, d(j.a.ThankYouView), r(Object(z.j)(p))
						}, [p, r, d]),
						f = Object(u.useCallback)(() => {
							q({
								dispatch: i,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !1,
								subredditId: l
							}), n.current = !0, r(Object(z.b)(p))
						}, [i, e, p, r, d, l]),
						y = Object(u.useCallback)(() => {
							h && (q({
								dispatch: i,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !0,
								subredditId: h
							}), n.current = !0, r(Object(z.m)(p)))
						}, [i, e, p, h, r, d]);
					return c && c !== j.a.None ? m.a.createElement("div", {
						className: Object(g.a)(R.a.Footer, {
							[R.a.ClassicLayout]: t === C.g.Classic,
							[R.a.CompactLayout]: t === C.g.Compact,
							[R.a.LargeLayout]: t === C.g.Large
						})
					}, c === j.a.SeeFewerPostsView && m.a.createElement(M, {
						displayText: _,
						seeLessFromThisCommunity: f,
						seeLessLikeThisCommunity: y,
						seeLessOfThisPostClick: b
					}), c === j.a.ThankYouView && m.a.createElement(Z, null)) : null
				}),
				H = s("./src/reddit/components/PostList/LoadMore.tsx"),
				K = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				$ = s("./src/reddit/components/Scroller/Simple.tsx"),
				W = s("./src/reddit/constants/adEvents.ts"),
				G = s("./src/reddit/constants/componentSizes.ts"),
				Y = s("./src/reddit/contexts/OneFeed/index.ts");
			var J = function({
					children: e
				}) {
					const [t, s] = Object(u.useState)(j.a.None), o = Object(u.useCallback)(() => s(j.a.None), []), i = Object(u.useMemo)(() => ({
						hideRecommendationFooter: o,
						recommendationFooterView: t,
						setRecommendationFooterView: s
					}), [o, t, s]);
					return m.a.createElement(Y.a.Provider, {
						value: i
					}, e)
				},
				Q = s("./src/reddit/controls/InternalLink/index.tsx"),
				X = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ee = s("./src/reddit/helpers/getClickInfo.ts"),
				te = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				se = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				oe = s("./src/reddit/models/Media/index.ts"),
				ie = s("./src/reddit/helpers/brandSafety/index.ts"),
				re = s("./src/reddit/helpers/trackers/ads.ts"),
				ne = s("./src/lib/LRUCache/index.ts"),
				ae = s("./src/telemetry/index.ts"),
				ce = s("./src/telemetry/models/Timer.ts"),
				de = s("./src/reddit/components/PostList/index.m.less"),
				le = s.n(de);
			const {
				fbt: ue
			} = s("./node_modules/fbt/lib/FbtPublic.js"), me = 500, pe = new ne.a(me), he = new ne.a(me), _e = new ne.a(me), be = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, ge = x.a.div("SeeMore", le.a), fe = x.a.wrapped(se.a, "ArrowRight", le.a), ye = (e, t, s, o, i, r, n, a, c) => {
				const d = `entered-${e}-${t}-${s?`last-${o}-${i}`:""}-${r}`;
				let l = pe.get(d);
				return void 0 === l && (l = () => {
					s && n.onBottomViewed(o, i), n.trackOnPostEnteredViewport(e, t, a, c)
				}, pe.set(d, l)), l
			}, xe = (e, t, s, o, i) => {
				const r = `left-${e}-${t}`;
				let n = he.get(r);
				return void 0 === n && (n = r => {
					s.trackOnPostExitedViewport(e, t, r, o, i)
				}, he.set(r, n)), n
			}, ve = (e, t, s = !1) => {
				const o = `click-${e}`;
				let i = _e.get(o);
				return void 0 === i && (i = (e, o, i, r, n) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, W.a.Click);
						const {
							source: e
						} = Object(b.t)(o, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							i && (t = Object(X.a)(o.id, i, t).url), Object(re.a)(o, n), Object(v.e)(t, v.d.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(ee.a)(e),
						isFrontpage: s
					})
				}, _e.set(o, i)), i
			}, ke = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Ee extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new ne.a(me), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: o
						} = this.props;
						this.dispatchBrandSafety(e), t && o && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = l()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = n()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, o = e(), i = [];
						o.forEach(e => i.push(e.id));
						const r = i.map(e => t[e]).filter(Boolean),
							n = r.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(ie.a)(r, n))
					}, f.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && ae.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = ae.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = ae.c.end(this.timerId);
						setTimeout(() => Object(ae.b)(f.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && ae.c.cancel(this.timerId), e.postIds.length && (this.timerId = ae.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (y.a.read(() => this.checkAndSendScreenview()), this.timerId && ae.c.has(this.timerId)) {
						const e = ae.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(ae.b)(f.m.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const o = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					o && o !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(o)
				}
				componentWillUnmount() {
					this.timerId && ae.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && c()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return ae.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const o = ae.c.end(e);
					setTimeout(() => {
						s(t(o, ce.TimerType.InApp))
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
						triggerNewPostPill: s,
						...o
					} = this.props, {
						postsById: i,
						triggerNewPostPill: r,
						...n
					} = e, a = Object.keys(o), c = Object.keys(n);
					if (c.length !== a.length) return !0;
					if (c.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !h()(o[e], n[e]) : o[e] !== n[e]
						})) return !0;
					if (t === i) return !1;
					if (s !== r) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const n = 0 === r;
							return s({
								isFirstPost: n,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: n,
								layout: e,
								post: i[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: i,
						hostPostData: r,
						isCommentPermalink: n,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						isCommentCountAnimationEnabled: u,
						isVoteCountAnimationEnabled: p,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: _,
						listingKey: b,
						listingName: g,
						pageLayer: y,
						pageReferrer: x,
						redditStyle: v,
						shouldHideFlair: E,
						triggerNewPostPill: F,
						postIds: w
					} = this.props, j = 0 === t, D = `post-${o}-${e}-${t}-${s?"last-index":""}-${g}-${b}-${x}`;
					let P;
					if (void 0 === (P = this.scrollChildCache.get(D))) {
						const {
							inSubredditOrProfile: O,
							postsById: S
						} = this.props, A = S[e], L = A.crosspostRootId && S[A.crosspostRootId] ? S[A.crosspostRootId] : A;
						A.crosspostRootId && !S[A.crosspostRootId] && k.c.withScope(e => {
							e.setExtra("errorType", f.s.API), e.setExtra("description", `Post ${A.id} is crosspost of ${A.crosspostRootId}, but ` + `${A.crosspostRootId} details are missing in the state`), k.c.captureMessage("Crosspost parent details are missing")
						});
						const z = this.props.postComponentForLayout({
							isCrosspost: !!A.crosspostRootId,
							isFirstPost: j,
							layout: o,
							post: L
						});
						let I = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && b && (I += `--${b}`);
						const T = ye(e, o, s, b, g, x, this.props, t, this.props.hostPostData),
							B = xe(e, o, this.props, t, y),
							N = ve(e, this.props, c),
							R = L.media && L.media.type === oe.o.EMBED ? L.media.provider : null,
							V = u && !A.isSponsored,
							q = p && !A.isSponsored && !A.isScoreHidden,
							M = !!(null == A ? void 0 : A.recommendationContext);
						P = {
							estHeight: Object(te.c)(A, o),
							id: e,
							isFocusable: !(!L.media || !(o === C.g.Large || o === C.g.Classic && Object(oe.H)(L.media))) && (oe.d.has(L.media.type) && (!R || !oe.s.has(R)) && !L.isSpoiler),
							trackOnEnteredViewport: T,
							trackOnExitedViewport: B,
							render: ({
								className: u,
								height: p,
								width: f,
								remeasure: x,
								setScrollerChildRef: k,
								shouldLoadInitially: C
							}) => m.a.createElement(J, {
								key: I
							}, m.a.createElement(z, {
								availableWidth: f,
								className: u,
								currentProfileName: i,
								eventFactory: this.eventFactoryHandler,
								first: j,
								forceLoadMedia: C,
								hostPostData: r,
								inSubredditOrProfile: O,
								isCommentCountAnimationEnabled: V,
								isCommentPermalink: n,
								isCommentsPage: a,
								isCountAnimShadowTestEnabled: h,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								isVoteCountAnimationEnabled: q,
								key: I,
								last: s,
								listingBelowVariant: _,
								listingIndex: t,
								listingKey: b,
								listingName: g,
								onceInViewport: F,
								onClickPost: N,
								onSizeChanged: x,
								pageLayer: y,
								postId: e,
								postIds: w,
								redditStyle: v,
								scrollerItemRef: k,
								sendEvent: this.props.sendEvent,
								shouldHideFlair: E
							}), M && m.a.createElement(U, {
								post: L,
								layout: o
							}))
						}, this.scrollChildCache.set(D, P)
					}
					return P
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: i,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const n = r;
					return m.a.createElement("div", {
						className: le.a.placeholder
					}, m.a.createElement(n, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(K.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: i,
						onLoadMore: r
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: le.a.placeholder
					}, m.a.createElement(H.a, {
						className: i,
						isLoading: !!t,
						layout: o,
						countOverride: be[o]
					}), !!e && m.a.createElement(K.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isSerpExperimentOverride: r,
						isTruncated: n,
						layout: a,
						location: c,
						loadMore: d,
						postIds: l,
						postsById: p,
						onLoadMore: h
					} = this.props;
					let b = l.filter(e => Boolean(p[e])).map((e, t, s) => {
						const o = t === s.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					o && (b = ke(b, o));
					const y = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						x = c ? Object(i.e)(c) : null,
						v = x || n;
					return m.a.createElement(u.Fragment, null, m.a.createElement($.b, {
						innerRef: this.updateScrollerRef,
						className: v ? le.a.truncatedPostList : Object(g.a)(le.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: y,
						viewportTopPadding: G.f
					}, b), !r && x && m.a.createElement(ge, {
						className: le.a.seeMoreButton
					}, m.a.createElement(Q.a, {
						className: le.a.seeMorePostsText,
						to: Object(_.a)(x, {
							type: f.Yb.Posts
						})
					}, ue._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(fe, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Ee.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
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
				isInExperimentStyles: "yM5jY9oh36Af0F7EUOj4L"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				_ = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				y = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(F);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: i,
				hideNSFWPref: F,
				hostPostData: j,
				iconClassName: C,
				inSubredditOrProfile: D,
				isCommentsPage: P,
				isCompactPinnedPost: O,
				isCurrentUserProfilePost: S,
				isOverlay: A,
				isTopicPage: L,
				listingKey: z,
				post: I,
				shouldShowSubscribeButton: T,
				showCornerOutboundLink: B,
				showSubreddit: N,
				showSubredditIcon: R,
				subredditOrProfile: V,
				isFollowed: q,
				shouldShowFollowButton: M,
				onFollowPostClick: Z
			}) => {
				const U = i || L,
					H = V && Object(k.h)(V),
					K = Object(n.e)(e => {
						if (!H) return !0;
						const t = Object(E.tb)(e, I.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(w.a.container, e)
				}, N && V && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, R && r.a.createElement(p.b, {
					className: Object(a.a)(w.a.subredditIcon, C),
					shouldHideNsfwIcon: F,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, N && r.a.createElement(d.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), r.a.createElement(m.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: A ? m.c.Lightbox : void 0,
					post: I,
					showSub: N,
					subredditOrProfile: V
				}), r.a.createElement(u.a, {
					className: w.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: D,
					isCompactPinnedPost: O,
					post: I,
					tooltipType: A ? m.c.Lightbox : void 0
				}), !U && r.a.createElement(c.a, {
					isPostDetail: P,
					thing: I,
					tooltipType: A ? m.c.Lightbox : void 0
				})), V && K && N && T && !S && r.a.createElement(_.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(y.i)(I.id, e ? "unsubscribe" : "subscribe", "post", z, j),
					identifier: {
						name: V.name,
						type: H ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: I.id,
					size: g.c.XS
				}), B && r.a.createElement(f.b, {
					isSponsored: I.isSponsored,
					postId: I.id,
					href: Object(v.D)(I),
					source: I.source
				}, r.a.createElement(x.a, {
					className: w.a.outboundLinkIcon
				})), M && K && r.a.createElement(l.a, {
					isFilled: !!q,
					onClick: Z,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return C
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.z,
					isProfilePostListing: p.K,
					isTopicPage: p.P,
					pageLayer: e => e
				})
			}
			const F = E(),
				w = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.Q)(e, t),
					loadMore: y.g,
					postsById: x.S,
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: o
					}) => Object(x.E)(e, t, s, o)),
					subredditsById: v.X,
					viewportDataLoaded: k.a,
					pageReferrer: p.T,
					postListPlaceholderComponent: () => b.a,
					isNpsScrollSurveyEnabled: f.e
				},
				j = Object(i.c)(w),
				C = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(n.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o, i) => {
						e(d.N(t, o, i))
					},
					trackOnPostExitedViewport: (t, s, o, i, r) => {
						e(d.O(t, o, i, r))
					},
					surveyTriggerScrollCounted: () => e(Object(u.k)())
				}),
				D = e => Object(h.b)({
					...e
				}),
				P = (e, t, s, o) => {
					const {
						listingKey: i,
						hostPostData: r,
						listingBelowVariant: n
					} = o;
					return Object(_.i)(e, t, "post", i, r, n, void 0)
				},
				O = Object(o.b)(j, C, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: D,
					postClickEventFactory: P
				}));
			t.a = e => Object(m.c)(F(O(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				i = s.n(o);
			t.a = i.a.createContext(() => () => {})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/promo.ts"),
				i = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(i.a)();
				return !!e && t.get(e) === o.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(o.e)(i.a) === e,
					s = Object(o.e)(i.c) === e,
					r = Object(o.e)(i.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				i = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(o.useContext)(i.a)
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: o.fc
				});
				return !(!t || Object(o.af)(t))
			}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return _
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(o.a)(n.g, n.d, a.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[i.Jb.Bottom_cell_dismissible]: e,
						[i.Jb.Bottom_cell_dismissible_immediate_trigger]: e,
						[i.Jb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(i.ib, !0),
				u = d(i.jb, !0),
				m = d(i.kb, !0),
				p = d(i.ib, !1),
				h = d(i.jb, !1),
				_ = d(i.kb, !1)
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				n = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(n.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(o.a)((e, t) => {
					const s = p(e, t);
					if (!s) return u;
					const o = Object(n.U)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : u
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, i) => {
					const n = i.find(e => e <= t) || -1,
						a = i.find(e => e > t) || 1 / 0;
					return t !== a && t !== n && (!(n + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							i = s[t],
							n = i && Object(r.H)(e, {
								postId: o
							}) || null,
							a = i && Object(r.H)(e, {
								postId: i
							}) || null;
						return n && n.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				_ = [3],
				b = Object(o.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const o = t.slice().sort();
					let i = -1;
					const n = Object(r.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return _.forEach(t => {
						let s = i + t;
						if (!(s >= n.length)) {
							for (; s < n.length && !h(e, s, t, n, o);) s += 1;
							s < n.length && (a.push(s), i = s)
						}
					}), a
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				y = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.J)(e),
						s = i.d.geoSubredditRecommendationDULoggedIn(e),
						o = i.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				n = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(n.a)(e);
					return Boolean(t) && !Object(i.af)(t)
				},
				c = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"5c3cbc62be22"}')
		},
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileOverview.c2d5b37a51b10e4c0fac.js.map