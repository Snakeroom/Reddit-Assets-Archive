// https://www.redditstatic.com/desktop2x/ChatMessageInput.af9e7e8b8a8af024c461.js
// Retrieved at 10/19/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
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
				u = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function l(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function o(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(d), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(o(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(o(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(o(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(o(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function u(e, t) {
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
						}(s.validate) ? i(s.validate) ? r.validate = s.validate : u(t, s) : r.validate = function(e) {
							return function(t, s) {
								var r = t.slice(s);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(s.validate), void(i(s.normalize) ? r.normalize = s.normalize : s.normalize ? u(t, s) : r.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
						}(s) ? u(t, s): c.push(t)
					}
				})), c.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var l = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + l + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + l + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
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
					return e || o.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, o, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, c, e), this.__compiled__ = {}, this.__tlds__ = u, this.__tlds_replaced__ = !1, this.re = {}, l(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, l(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, r, n, i, a, o, c;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (t = o.exec(e));)
						if (n = this.testSchemaAt(e, t[2], o.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = s.index + s[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a)), this.__index__ >= 0
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
				})).reverse(), l(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, l(this), this)
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
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = s ? s.call(r, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					a = Object.keys(t);
				if (i.length !== a.length) return !1;
				for (var o = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
					var d = i[c];
					if (!o(d)) return !1;
					var u = e[d],
						l = t[d];
					if (!1 === (n = s ? s.call(r, u, l, d) : void 0) || void 0 === n && u !== l) return !1
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
		"./src/reddit/actions/chat/liveChatTooltipShowState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			}));
			var r = s("./src/lib/cache/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/constants/chat.ts"),
				o = s("./src/reddit/selectors/chat.ts");
			const c = "CHAT__SET_LIVECHAT_TOOLTIP_SHOW_STATE",
				d = e => Object(r.c)(n.r.CHAT, n.A.CHAT_LIVECHAT_ANNOUNCEMENT_TOOLTIP_SHOW_STATE, e),
				u = Object(i.a)(c),
				l = (e, t) => async (s, n) => {
					const i = n(),
						c = Object(o.b)(i);
					if (!a.a[c].includes(e)) return;
					const l = d(t);
					Object(r.d)(l, e, r.a), s(u(e))
				}, m = e => async t => {
					const s = d(e),
						n = Object(r.b)(s);
					n && t(u(n))
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				n = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				i = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeRequest/index.ts"),
				i = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(o.a)(c.a),
				u = Object(o.a)(c.b),
				l = Object(o.a)(c.c),
				m = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const o = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						u = s();
					if (!u.economics.me.fetched || o && !u.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${i.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(n(), o);
						if (e.ok) {
							const s = e.body;
							o && !s.specialMemberships && (s.specialMemberships = {}), t(d(s))
						}
					}
				}, p = () => async (e, t) => {
					const s = t(),
						i = s.economics.me.data;
					if (!i) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${i.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(n.b)({
								endpoint: t,
								method: r.ob.GET
							});
						s.ok && s.body && e(l(s.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "j", (function() {
				return _
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(r.a)(a.a),
				c = Object(r.a)(a.b),
				d = Object(r.a)(a.c),
				u = Object(r.a)(a.d),
				l = Object(r.a)(a.e),
				m = Object(r.a)(a.f),
				p = Object(r.a)(a.g),
				h = Object(r.a)(a.h),
				b = Object(r.a)(a.i),
				_ = e => Object(n.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/actions/toaster.ts"),
				n = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = s("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: i.b.Error,
					text: Object(n.a)(t)
				}))
			}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return L
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return B
			})), s.d(t, "e", (function() {
				return U
			})), s.d(t, "d", (function() {
				return M
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/formatApiError/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/actions/upload.ts"),
				u = s("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				h = s("./src/reddit/constants/headers.ts"),
				b = s("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var _ = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/imagePreview/index.ts"),
				g = s("./src/reddit/helpers/media/index.ts"),
				y = s("./src/reddit/models/Upload/index.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/telemetry/index.ts");
			const x = e => ({
				...v.o(e),
				screen: v.bb(e),
				profile: v.T(e),
				subreddit: v.jb(e)
			});
			var j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/postCreations.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				D = s("./src/reddit/actions/postCreation/constants.ts"),
				A = s("./src/reddit/actions/postCreation/general.ts");
			const F = Object(o.a)(D.u),
				I = Object(o.a)(D.v),
				S = Object(o.a)(D.t),
				L = e => async (t, s) => {
					t(F());
					const r = e.map(e => {
						let {
							url: s,
							uploadKey: r
						} = e;
						const n = Object(g.b)(Object(g.d)(s), "poster.png");
						return t(z(n, r, !0))
					});
					await Promise.all(r);
					const n = s().uploads,
						i = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return n[t]
						}).find(e => e.status !== y.a.SUCCESS);
					t(i ? S(i.error) : I())
				}, P = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const T = "RTE",
				N = "GALLERY",
				z = (e, t, s, n, a, o, u) => async (E, D, A) => {
					let {
						apiContext: F,
						gqlContext: I
					} = A;
					const S = Object(w.h)(D()),
						L = Date.now();
					let T = null,
						N = !1,
						z = !1,
						B = !1;
					const U = e => {
						if (!B && n && N) {
							B = !0;
							const s = D(),
								r = Date.now() - L,
								i = Object(_.c)(_.a.PostComposer);
							z ? (async e => {
								let {
									state: t,
									uploadKey: s,
									assetId: r,
									isCanceled: n,
									fileSource: i,
									uploadDuration: a,
									correlationId: o
								} = e;
								const c = t.uploads[s],
									d = n || c.status === y.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: m,
										error: p
									} = c,
									h = m.mimetype || u.type,
									b = h.startsWith("video/"),
									_ = c.status === y.a.SUCCESS;
								let f = "";
								p ? f = JSON.stringify(p) : d && (f = "canceled");
								const g = {
									width: m.width,
									height: m.height,
									duration: m.videoDuration && Math.round(1e3 * m.videoDuration)
								};
								Object(C.a)({
									source: "post_composer",
									action: "upload",
									correlationId: o,
									noun: b ? "video" : "image",
									...x(t),
									actionInfo: {
										...v.d(t),
										success: _,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: h,
										uploadDuration: a,
										source: i,
										fileName: u.name,
										size: u.size,
										type: b ? "video" : "image",
										...r ? {
											id: r
										} : {},
										...l ? {
											url: l
										} : {},
										...g
									}
								})
							})({
								state: s,
								uploadKey: t,
								assetId: T,
								isCanceled: e,
								fileSource: n,
								uploadDuration: r,
								correlationId: i
							}) : j.D(s, t)
						}
					};
					return await E(Object(d.l)(e, t, async _ => {
						var y, v, C, x;
						N = !0, Object(d.k)(_.id, () => {
							U(!0)
						});
						const {
							error: j,
							metadata: w
						} = await async function(e, t, s, n) {
							const a = s && s.allowedPostTypes,
								o = s && s.name,
								c = await Object(g.h)(e) || e.type,
								d = Object(g.c)(e) || void 0;
							if (!d) return P("UNSUPPORTED_BROWSER");
							const u = {
								localUrl: d,
								mimetype: c
							};
							if (!c || !Object(g.k)(c)) return {
								error: {
									type: i.Y
								}
							};
							if (c.startsWith("image/")) {
								if (t && a && !a.images) {
									const e = r.fbt._("Images are not allowed in r/{subredditName}", [r.fbt._param("subredditName", o)], {
										hk: "3C2E7Q"
									});
									return P(i.Y, e)
								}
								if ("image/gif" === c) {
									if (e.size > i.eb) return P(i.O)
								} else if (e.size > i.gb) return P(i.W);
								const s = await Object(f.a)(d);
								if (n && (s.width < n || s.height < n)) {
									const e = r.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [r.fbt._param("min_image_width", n.toString()), r.fbt._param("min_image_height", n.toString())], {
										hk: "2WFKgs"
									});
									return P(i.V, e)
								}
								u.width = s.width, u.height = s.height
							} else if (c.startsWith("video/")) {
								if (e.size > i.kb) return P(i.vc);
								let t;
								try {
									t = await Object(g.j)(d, !0)
								} catch (l) {
									return P(i.Y)
								}
								if (a) {
									const {
										videos: e,
										images: s
									} = a;
									if (s && !e && t.duration > i.lb) {
										const e = r.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [r.fbt._param("subredditName", o)], {
											hk: "46ULiz"
										});
										return P(i.Y, e)
									}
									if (!s && !e) {
										const e = r.fbt._("Videos are not allowed in r/{subredditName}", [r.fbt._param("subredditName", o)], {
											hk: "4uTUZb"
										});
										return P(i.Y, e)
									}
								}
								if (t.duration > i.jb) {
									const e = r.fbt._("Video is too long. Maximum video length is {duration} minutes.", [r.fbt._param("duration", (i.jb / 60).toString())], {
										hk: "20nB6Q"
									});
									return P(i.Y, e)
								}
								if (t.duration < i.rb) {
									const e = r.fbt._("Video is too short. Minimum video length is {duration} seconds.", [r.fbt._param("duration", i.rb.toString())], {
										hk: "49PSW8"
									});
									return P(i.Y, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = r.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return P(i.Y, e)
								}
								if (t.height < i.sb || t.width < i.tb) {
									const e = r.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [r.fbt._param("min_video_width", i.tb.toString()), r.fbt._param("min_video_height", i.sb.toString())], {
										hk: "2HSUGl"
									});
									return P(i.Y, e)
								}
								if (e.size / t.duration < i.qb) {
									const e = r.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [r.fbt._param("min_bitrate", (i.qb / i.Z).toString())], {
										hk: "1ehgDE"
									});
									return P(i.Y, e)
								}
								u.height = t.height, u.width = t.width, u.videoDuration = t.duration, u.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: u
							}
						}(e, s, S, u);
						if (j || !w) return {
							error: j
						};
						if (E(Object(d.m)({
								key: t,
								metadata: {
									fileSource: n,
									...w
								}
							})), z = !0, a && a(), o) {
							const e = w.mimetype,
								t = e && i.T[e];
							if (e && t) {
								const e = await (async (e, t) => {
									return await Object(m.a)(e, {
										...b,
										variables: {
											input: {
												mimetype: t
											}
										}
									})
								})(I(), t);
								if (e.ok) {
									const t = e.body,
										s = (null === (y = t.data.createMediaUploadLease) || void 0 === y ? void 0 : y.uploadLease.uploadLeaseUrl) || "",
										r = Object(O.a)({
											uploadLeaseUrl: s,
											uploadLeaseHeaders: null === (v = t.data.createMediaUploadLease) || void 0 === v ? void 0 : v.uploadLease.uploadLeaseHeaders
										});
									return T = (null === (C = t.data.createMediaUploadLease) || void 0 === C ? void 0 : C.mediaId) || null, {
										uploadLease: r
									}
								} {
									const t = null === (x = e.body.data.createMediaUploadLease) || void 0 === x ? void 0 : x.errors;
									let s = null;
									return t && (s = {
										fields: [{
											field: t[0].__typename || "",
											msg: t[0].message
										}],
										type: t[0].__typename || ""
									}), {
										error: s || void 0
									}
								}
							}
							return E(Object(c.f)({
								kind: k.b.Error,
								text: r.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const D = e.name,
							A = await (async (e, t, s) => Object(l.a)(Object(p.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: i.ob.POST,
								data: {
									filepath: t,
									mimetype: s
								}
							}))(F(), D, w.mimetype);
						return A.ok ? (T = A.body.asset.asset_id, {
							uploadLease: A.body.args
						}) : {
							error: A.error || void 0
						}
					}, !0)), U(!1), D().uploads[t] || null
				}, B = (e, t) => async (s, r) => {
					const n = r().uploads[e];
					n && !Object(y.c)(n) && await s(z(n.file, n.key, t, n.metadata.fileSource, void 0))
				}, U = (e, t, s, i, o, d) => async (u, l) => {
					const m = e.map((e, r) => new Promise(async r => {
							const a = Object(y.d)(s, Object(n.a)().slice(-6));
							await u(z(e, a, i, t, () => r({
								uploadKey: a,
								isValid: !0
							}), o, d)), r({
								uploadKey: a,
								isValid: !1
							})
						})),
						p = await Promise.all(m),
						h = p.map(e => e.uploadKey);
					return u(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (s, n) => {
							const {
								uploads: i
							} = n(), o = e.map(e => i[e]).filter(e => e.status === y.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = o.length > t ? t - 1 : o.length, u = o.length - d;
							o.slice(0, d).forEach(e => s(Object(c.f)({
								duration: c.a,
								kind: k.b.Error,
								text: Object(a.a)(e)
							}))), u > 0 && s(Object(c.f)({
								duration: c.a,
								kind: k.b.Error,
								text: r.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [r.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(h)), p.filter(e => e.isValid).map(e => e.uploadKey)
				}, M = (e, t) => async (s, n) => {
					const i = n(),
						a = Object(w.W)(i),
						{
							items: o
						} = a,
						l = !o.length && 1 === e.length,
						m = Object(w.N)(i) && !l;
					let p = !1,
						h = e;
					if (m) {
						if (Object(E.x)(a)) return void s(Object(c.f)({
							kind: k.b.Error,
							text: r.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(g.n)(e.type)) && s(Object(c.f)({
							duration: c.a,
							kind: k.b.Error,
							text: r.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(g.m)(e.type));
						const e = Math.max(0, u.b - o.length);
						h.length > e && (s(Object(c.f)({
							kind: k.b.Error,
							text: r.fbt._("You have hit the limit of {images_limit} images", [r.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), p = !0, s(Object(d.j)(N, !0));
					const b = await s(U(h, t, N, !0));
					if (!b.length) return;
					const _ = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						f = 0 === o.length;
					s(Object(A.d)({
						...a,
						items: p ? _ : [...o, ..._],
						selectedKey: f ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(n.a)(i.B),
				o = e => async t => {
					t(a(e))
				}, c = () => async e => {
					e(a({
						lastChatActivityUtcTs: Date.now()
					}))
				}, d = () => async e => {
					e(a({
						correlationId: Object(r.a)()
					}))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				n = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				i = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "k", (function() {
				return w
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "j", (function() {
				return F
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/get.js"),
				n = s.n(r),
				i = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/uploadToS3/index.ts"),
				c = s("./src/reddit/models/Upload/index.ts");
			const d = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				l = "UPLOAD_METADATA_CHANGED",
				m = "UPLOAD_PROGRESS",
				p = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				b = "UPLOAD_CANCELED",
				_ = "UPLOAD_REMOVED",
				f = Object(a.a)(d),
				g = Object(a.a)(u),
				y = Object(a.a)(l),
				v = Object(a.a)(m),
				C = Object(a.a)(p),
				x = Object(a.a)(h),
				j = Object(a.a)(b),
				E = Object(a.a)(_),
				k = new Map,
				w = (e, t) => {
					const s = k.get(e) || [];
					s.push(t), k.set(e, s)
				},
				O = (e, t) => {
					const s = k.get(e);
					s && s.forEach(s => s(e, t)), k.delete(e)
				},
				D = function(e, t, s) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (a, d) => {
						const u = t;
						if (d().uploads[u] && Object(c.c)(d().uploads[u])) return;
						const l = Object(i.a)(),
							m = () => {
								const e = d().uploads[u];
								return !e || e.id !== l || e.status === c.a.CANCELED
							};
						a(f({
							key: u,
							id: l,
							file: e
						}));
						const {
							uploadLease: p,
							error: h
						} = await s(d().uploads[u]);
						if (m()) return;
						if (h || !p) return void a(x({
							key: u,
							error: h
						}));
						let b;
						w(l, () => {
							b && b.abort()
						}), a(g({
							key: u
						}));
						const _ = await Object(o.a)(e, p, e => (b = e, r && e.on("progress", e => {
							if (!m() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								a(v({
									key: u,
									progress: t
								}))
							}
						}), e));
						if (b = null, !m())
							if (_.ok) {
								const e = decodeURIComponent(_.body.PostResponse.Location);
								a(C({
									key: u,
									url: e
								}))
							} else {
								const e = n()(_, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								a(x({
									key: u,
									error: t
								}))
							}
					}
				},
				A = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, r) => {
						const n = r().uploads[e];
						n && (O(n.id, t), s(t ? E({
							key: e
						}) : j({
							key: e
						})))
					}
				},
				F = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, r) => {
						Object.keys(r().uploads).forEach(r => {
							r.startsWith(e) && s(A(r, t))
						})
					}
				}
		},
		"./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2SvhnxZBM2RoeILBCJaD5n",
				isAnimated: "VI293JaWpM6E2N7qA18GU",
				gildIcon: "_3rbcaT8iS8Ep2_0IS9bNaC",
				hide: "D6DLiE3WESXxUZt-3w5rF",
				show: "_2sw_2-66SMwc0my0qCmuFJ",
				awardingIcon: "_1ZO1lfp292pRk_NeA_KGVk",
				count: "_1v25u3hsWeYJihslYeyZ33"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				u = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/communityAwards.ts"),
				_ = s("./src/reddit/selectors/gold/awardIcon.ts"),
				f = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				g = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				y = s.n(g);
			class v extends n.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: r
					} = this.props;
					return i.a.createElement("div", {
						className: Object(a.a)(y.a.container, e, {
							[y.a.isAnimated]: r
						})
					}, i.a.createElement(f.a, {
						className: y.a.gildIcon
					}), r && s && i.a.createElement("div", {
						className: y.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? i.a.createElement("div", {
						className: y.a.count
					}, t) : null)
				}
			}
			var C = Object(d.b)(() => Object(u.c)({
				iconUrl: (e, t) => {
					let {
						awardId: s
					} = t;
					if (!s) return;
					const r = Object(b.a)(e, s);
					return Object(_.a)(e, {
						award: r,
						minSize: 64
					})
				}
			}))(v);
			const x = Object(d.b)(() => Object(u.a)(e => e, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(m.g)(e, {
						commentsPageKey: Object(l.a)(s)
					})
				}, h.G, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(m.u)(e, {
						commentsPageKey: Object(l.a)(s)
					})
				}, (e, t, s, r) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const r = Object(p.b)(e, {
								commentId: s.id
							});
							if (r) {
								const {
									associatedAwardId: e
								} = r;
								if (e) return [...t, e]
							}
							return t
						}, []) : [],
						isFullyLoaded: r,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((e, t) => e + t, 0) : s.allAwardings ? s.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				j = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class E extends n.Component {
				constructor(e) {
					super(e), this.state = j(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? j(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: r,
						className: n,
						isFullyLoaded: a
					} = this.props;
					if (!a) return i.a.createElement(C, {
						className: n,
						count: 0
					});
					const o = Math.max(s, e + r.length - t.length),
						c = r.length - 1,
						d = r[c],
						u = r.length !== t.length;
					return i.a.createElement(C, {
						awardId: d,
						className: n,
						count: o,
						isAnimated: u,
						key: c
					})
				}
			}
			var k = x(E),
				w = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				O = s.n(w);
			t.a = e => {
				let {
					postId: t,
					showSubmitInsideTextArea: n,
					isLivestreaming: d,
					handleGiveAward: u,
					sendEvent: l
				} = e;
				return i.a.createElement(o.e, {
					className: Object(a.a)(O.a.ChatButton, {
						[O.a.LivestreamingChatButton]: d,
						[O.a.leftPad]: !n
					}),
					"aria-label": r.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async e => {
						e.stopPropagation();
						const r = Object(c.d)(c.a.GildingFlow, !0);
						u(r);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: i
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((d ? i : n)(t))
					}
				}, i.a.createElement(k, {
					postId: t
				}))
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				v2: "_1wX7EkMv0Avw75sEfz3Qyx",
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				V2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				v2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				spamTimeout: "_3IH6D8ThGGGzPY0gTh7ctb",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				v2ChatPostButton: "_23u5-3OLMKFq7xMrqNY9Wk",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
				isV2ChatPost: "_1Hzb3asSDcxQPD8y3wsKaY",
				V2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				v2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				RichTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				isEmbeddedLiveChat: "_2oPecgenjFelRYg0_W7b9R"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				o = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				u = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/models/PostDraft/index.ts"),
				h = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/loadWithRetries/index.ts")),
				b = s("./src/reddit/actions/chat/init.ts");
			const _ = () => Object(h.a)(() => Promise.all([s.e("vendors~Chat~RedesignChat"), s.e("Chat~RedesignChat"), s.e("RedesignChat")]).then(s.bind(null, "./src/chat/actions/liveChat/index.ts"))).then(e => e.fetchLiveChats);
			var f = s("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				g = s("./src/reddit/actions/comment/authoring.ts"),
				y = s("./src/reddit/actions/gold/modals.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				C = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				x = s("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx");
			const j = e => {
				let {
					durationSec: t,
					onTimeout: s
				} = e;
				const [r, n] = Object(c.useState)(t);
				Object(c.useEffect)(() => {
					if (r <= 0) return void s();
					const e = setTimeout(() => n(r - 1), 1e3);
					return () => clearTimeout(e)
				}, [r, s]);
				const i = Math.floor(r / 60),
					a = r - 60 * i;
				return d.a.createElement("span", null, i, ":", a > 9 ? a : `0${a}`)
			};
			var E = s("./src/reddit/components/RichTextEditor/index.tsx"),
				k = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				w = s("./src/reddit/constants/chat.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				D = s("./src/reddit/controls/ErrorText/index.tsx"),
				A = s("./src/reddit/helpers/richTextEditor/index.ts"),
				F = s("./src/reddit/helpers/trackers/rpan.ts"),
				I = s("./src/reddit/icons/fonts/Clock/index.tsx"),
				S = s("./src/reddit/icons/svgs/Close/index.tsx"),
				L = s("./src/reddit/icons/svgs/Send/index.tsx"),
				P = s("./src/reddit/icons/svgs/Send2/index.tsx"),
				T = s("./src/reddit/models/Post/index.ts"),
				N = s("./src/reddit/models/PostCreationForm/index.ts"),
				z = s("./src/reddit/selectors/chatPost.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx"),
				K = s("./src/lib/constants/index.ts"),
				q = s("./src/lib/makeGqlRequest/index.ts"),
				V = s("./src/redditGQL/operations/CreateLiveChatAssociation.json");
			var Z = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				W = s.n(Z),
				H = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				Y = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				Q = s("./src/reddit/selectors/experiments/chat.ts"),
				X = s("./src/redditGQL/types.ts");
			const J = "chat_submission_from_rte",
				ee = 1e3,
				te = 15,
				se = 15e3,
				re = Object(H.u)(),
				ne = Object(u.b)(() => Object(l.c)({
					draft: B.i,
					errorMsgs: B.M,
					errorType: B.N,
					hasError: B.v,
					isChatPost: z.d,
					isLivePostSpamRateEnabled: Q.i,
					isOptimisticUIEnabled: Q.h,
					liveStreamingChatCharacterLimit: e => {
						const t = Object(M.a)(e);
						return t ? t - 3 : 197
					},
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: U.G,
					isLiveChatInChatTabEnabled: Q.c,
					currentUserId: R.i,
					isTalkPost: Object(l.a)(U.G, e => Object(T.x)(e))
				}), (e, t) => {
					let {
						isEditing: s,
						comment: r,
						commentsPageKey: n,
						draftKey: i,
						postId: a,
						replyComment: o,
						isLivestreaming: c,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, o, u) => {
							s && r ? await e(Object(g.j)({
								id: r.id,
								commentsPageKey: n,
								draftKey: i,
								formData: t
							})) : u ? e(Object(g.o)({
								commentsPageKey: n,
								draftKey: i,
								parentCommentDepth: u.depth,
								parentCommentId: u.id,
								formData: t,
								editorMode: o
							})) : await e(Object(g.q)({
								postId: a,
								commentsPageKey: n,
								draftKey: i,
								formData: t,
								editorMode: o,
								disableAutofocus: !0,
								isLiveStreaming: c
							})), d && d()
						},
						handleGiveAward: t => e(Object(y.d)({
							correlationId: t,
							thingId: a
						})),
						onCancelEdit: () => r && e(Object(g.d)({
							commentId: r.id,
							commentsPageKey: n
						})),
						onLivestreamingChatMessageEdit: () => e(Object(v.a)()),
						closeReply: () => o && e(Object(g.b)({
							parentCommentId: o.id,
							commentsPageKey: n
						})),
						clearSubmitError: t => e(Object(g.a)({
							draftKey: t
						})),
						createChatTabAssociation: t => e((e => (t, s, r) => {
							let {
								gqlContext: n
							} = r;
							return Object(q.a)(n(), {
								...V,
								variables: {
									input: e
								}
							})
						})(t)),
						setLiveChatTooltipShowState: (t, s) => e(Object(f.c)(t, s)),
						fetchLiveChatPosts: () => e((() => async (e, t) => {
							const [{
								chatStore: s
							}, r] = await Promise.all([Object(b.c)(e, t), _()]);
							s.dispatch(r())
						})())
					}
				});
			class ie extends d.a.Component {
				constructor(e) {
					super(e), this.showLiveChatTooltipIfCreatedAssociation = () => {
						this.props.currentUserId && this.state.hasCreatedLiveChatAssociation && this.props.setLiveChatTooltipShowState(w.b.IS_SHOWING, this.props.currentUserId)
					}, this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged);
						const {
							isLivestreaming: s,
							liveStreamingChatCharacterLimit: r
						} = this.props, n = !!s && e.isBound && e.editorState.getCurrentContent().getPlainText().length > r;
						t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: n,
							rteState: e,
							hasChanged: t
						})), this.props.isLivestreaming && t && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = o()(() => this.props.onLivestreamingChatMessageEdit(), ee, {
						leading: !1,
						trailing: !0
					}), this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						const {
							postId: e,
							replyComment: t,
							isOptimisticUIEnabled: s,
							isLivestreaming: r,
							dispatchSubmit: n,
							sendEvent: i
						} = this.props;
						if (this.canSubmit()) {
							const e = {
								commentMode: N.i.RICH_TEXT,
								draftType: p.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), n(e, N.i.RICH_TEXT, t), s && setTimeout(() => this.focusOnForm(), 50), this.isAllowedToCreateLiveChatAssociation() && this.associationTimerId && !this.state.messageSent && (this.props.createChatTabAssociation({
								postId: this.props.postId,
								engagementType: X.n.Participated
							}), clearTimeout(this.associationTimerId), this.setState({
								messageSent: !0,
								hasCreatedLiveChatAssociation: !0
							}), !this.isEmbeddedLiveChat() && this.props.fetchLiveChatPosts())
						}
						r && i(Object(F.z)(e)), t && i(Object(Y.d)(t.id))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError && (!this.props.isLivePostSpamRateEnabled || !this.state.spamTimeoutDraftKey)), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? k.a.createInitial(e.comment.media.richtextContent) : k.a.createInitial(),
						spamTimeoutDraftKey: null,
						messageSent: !1,
						hasCreatedLiveChatAssociation: !1
					}
				}
				isReplyCommentChanged(e) {
					const {
						replyComment: t
					} = this.props;
					return (e.replyComment && e.replyComment.id) !== (t && t.id)
				}
				shouldComponentUpdate(e, t) {
					return t.rteState.editorKey !== this.state.rteState.editorKey || t.spamTimeoutDraftKey !== this.state.spamTimeoutDraftKey || t.hasChanged !== this.state.hasChanged || t.showError !== this.state.showError || e.pending !== this.props.pending || e.postId !== this.props.postId || this.isReplyCommentChanged(e)
				}
				componentDidMount() {
					this.isAllowedToCreateLiveChatAssociation() && (this.associationTimerId = setTimeout(() => {
						this.props.createChatTabAssociation({
							postId: this.props.postId,
							engagementType: X.n.Previewed
						}), this.setState({
							hasCreatedLiveChatAssociation: !0
						}), !this.isEmbeddedLiveChat() && this.props.fetchLiveChatPosts()
					}, se), window.addEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					e.pending && !this.props.pending && this.focusOnForm(), this.props.isChatPost && this.props.isLivePostSpamRateEnabled && this.props.errorType === K.L.RATELIMIT && e.errorType !== this.props.errorType && (this.props.sendEvent(Object(Y.e)(this.props.postId)), this.setState({
						spamTimeoutDraftKey: this.props.draftKey
					}))
				}
				componentWillUnmount() {
					this.props.isLivePostSpamRateEnabled && this.state.spamTimeoutDraftKey && this.props.sendEvent(Object(Y.a)(this.props.postId)), this.isAllowedToCreateLiveChatAssociation() && (this.showLiveChatTooltipIfCreatedAssociation(), this.associationTimerId && clearTimeout(this.associationTimerId), window.removeEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
				}
				isAllowedToCreateLiveChatAssociation() {
					return this.props.isLiveChatInChatTabEnabled && !this.props.isLivestreaming && !this.props.isTalkPost
				}
				isEmbeddedLiveChat() {
					return this.props.pageLayer && Object($.b)(this.props.pageLayer)
				}
				cleanInputForm() {
					this.setState({
						rteState: k.a.createInitial()
					})
				}
				render() {
					var e;
					const {
						isV2: t,
						closeReply: s,
						errorMsgs: n,
						errorType: a,
						isEditing: o,
						isLivestreaming: c,
						isLivePostSpamRateEnabled: u,
						sendEvent: l,
						handleGiveAward: p,
						liveStreamingChatCharacterLimit: h,
						pending: b,
						post: _,
						postId: f,
						replyComment: g,
						isEmbeddedLiveChat: y
					} = this.props, v = c ? r.fbt._("Send message ({characterLimit} character limit)", [r.fbt._param("characterLimit", h.toLocaleString())], {
						hk: "RIcb6"
					}) : r.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), C = _.isGildable && c && !o, k = c, w = a === K.L.RATELIMIT && parseInt(null === (e = null == n ? void 0 : n[0]) || void 0 === e ? void 0 : e.replace(/\D/g, "")) || te;
					return d.a.createElement("div", {
						className: Object(m.a)(W.a.FormWrapper, {
							[W.a.LivestreamingWrapper]: c,
							[W.a.v2]: t,
							[W.a.V2ChatPost]: !c && t && !o
						})
					}, u && !!this.state.spamTimeoutDraftKey && d.a.createElement("p", {
						className: W.a.spamTimeout
					}, r.fbt._("Time until you can message", null, {
						hk: "3mkJ7J"
					}), " ", d.a.createElement(j, {
						durationSec: w,
						onTimeout: () => {
							this.props.clearSubmitError(this.state.spamTimeoutDraftKey), this.setState({
								spamTimeoutDraftKey: null
							})
						}
					}), d.a.createElement(I.a, null)), !o && g && d.a.createElement(x.a, {
						commentId: g.id,
						isMessageComposer: !0,
						isLivestreaming: c,
						onReplyClick: s
					}), d.a.createElement("div", {
						className: W.a.inputLine
					}, d.a.createElement("form", {
						className: Object(m.a)(W.a.Form, {
							[W.a.Editing]: o
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, !t && d.a.createElement(ae, {
						isEditing: !!o,
						isLivestreaming: !!c
					}), d.a.createElement(E.a, {
						className: Object(m.a)(W.a.RichTextEditor, {
							[W.a.Livestreaming]: c && !o,
							[W.a.Editing]: !c && o,
							[W.a.isV2ChatPost]: !c && t,
							[W.a.isEmbeddedLiveChat]: y
						}),
						focusableContentRTEClassName: Object(m.a)({
							[W.a.LivestreamingFocusableContent]: c && !o,
							[W.a.V2ChatPostFocusableContent]: !c && t
						}),
						dataTestId: J,
						editorType: A.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: v,
						readOnly: b,
						showSubmitButton: k && !this.state.showError,
						submitButtonClassName: Object(m.a)(W.a.insetSubmitButton, W.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: i.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), o && d.a.createElement(O.e, {
						className: Object(m.a)(W.a.ChatButton, {
							[W.a.LivestreamingResetButton]: c
						}),
						type: "reset"
					}, d.a.createElement(S.a, null)), !k && d.a.createElement(O.e, {
						className: Object(m.a)(W.a.ChatButton, {
							[W.a.LivestreamingChatButton]: c && !o,
							[W.a.LivestreamingResetButton]: c && o,
							[W.a.v2ChatPostButton]: !c && !o && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": r.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, t ? d.a.createElement(P.a, null) : d.a.createElement(L.a, null))), C && d.a.createElement(G.a, {
						showSubmitInsideTextArea: k,
						isLivestreaming: c,
						sendEvent: l,
						postId: f,
						handleGiveAward: p
					})), this.state.showError && Object(D.c)(n.length ? n : [`Input text must be less than ${h} characters`]))
				}
			}
			const ae = e => {
				let {
					isEditing: t,
					isLivestreaming: s
				} = e;
				return s ? null : t ? d.a.createElement(C.a, {
					className: W.a.SmallChatUserIcon,
					height: 20,
					width: 20
				}) : d.a.createElement(C.a, {
					height: 25,
					width: 25
				})
			};
			t.default = re(ne(ie))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(o);
			t.a = a.a.wrapped(e => n.a.createElement("div", {
				className: Object(i.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = 20,
				n = 180
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				l = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = s.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(o.c)({
					currentUser: d.k,
					isNightMode: d.db,
					isPresenceUserPrefEnabled: d.V,
					shouldHideNSFW: d.F
				}),
				f = Object(a.b)(_);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: n,
					wrapperClassName: a,
					...o
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return i.a.createElement("div", {
					className: Object(r.a)(h.a.currentUserIconWrapper, a)
				}, d ? i.a.createElement(l.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : i.a.createElement(m.b, b({}, o, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), s && i.a.createElement(u.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var n, i;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {})),
			function(e) {
				e.NEVER_SHOWN = "never_shown", e.IS_SHOWING = "is_showing", e.DISMISSED = "dismissed"
			}(i || (i = {}));
			const a = {
				[i.NEVER_SHOWN]: [i.IS_SHOWING, i.DISMISSED],
				[i.IS_SHOWING]: [i.DISMISSED],
				[i.DISMISSED]: []
			}
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, s) {
				const i = Object(n.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${r.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: s
						}
					}),
					a = await i;
				if (a.ok) {
					const e = {},
						t = {},
						s = a.body;
					return Object.keys(s).forEach(r => {
						const n = s[r];
						t[r] = n, e[n.userId] || (e[n.userId] = []), e[n.userId].push(n.id)
					}), {
						...a,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return a
			}
			async function a(e, t, s) {
				const i = await Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${s}`
				});
				if (i.ok) {
					const e = {},
						t = [],
						s = i.body;
					return Object.keys(s).forEach(r => {
						const n = s[r];
						e[r] = n, t.push(n.id)
					}), {
						...i,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return i
			}

			function o(e, t, s) {
				let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(n.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${s}`,
					data: {
						selected: i
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return c
			}));
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function a(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function o(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js");

			function n(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function i(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(n).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "H", (function() {
				return u
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "D", (function() {
				return p
			})), s.d(t, "A", (function() {
				return h
			})), s.d(t, "E", (function() {
				return b
			})), s.d(t, "C", (function() {
				return _
			})), s.d(t, "B", (function() {
				return f
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "v", (function() {
				return y
			})), s.d(t, "x", (function() {
				return v
			})), s.d(t, "r", (function() {
				return C
			})), s.d(t, "p", (function() {
				return x
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "o", (function() {
				return E
			})), s.d(t, "z", (function() {
				return k
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "y", (function() {
				return O
			})), s.d(t, "G", (function() {
				return D
			})), s.d(t, "t", (function() {
				return A
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "k", (function() {
				return S
			})), s.d(t, "b", (function() {
				return L
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "w", (function() {
				return N
			})), s.d(t, "F", (function() {
				return z
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "l", (function() {
				return U
			})), s.d(t, "m", (function() {
				return M
			})), s.d(t, "g", (function() {
				return R
			})), s.d(t, "h", (function() {
				return G
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const o = (e, t) => {
					if (t) {
						const s = a.C(e, t.post.id),
							r = a.K(e, t.post.id),
							n = a.jb(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(i.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === i.a.LIVE ? s.type = "stream_live" : r === i.a.VOD ? s.type = "stream_vod" : r === i.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: a.jb(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(i.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === n.c.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === i.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: a ? n.c.None : n.c.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...o(e)
				}),
				l = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...o(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...o(s, e),
					actionInfo: a.d(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...e && {
						...o(s, e)
					}
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				f = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...o(r, t)
				}),
				g = (e, t, s, r) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...o(n, t),
					actionInfo: a.d(n, {
						referralId: r
					})
				}),
				y = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...o(r, t)
				}),
				v = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...o(t, e)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...o(s, e)
				}),
				k = e => t => {
					const s = Object(i.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...o(t, s)
					}
				},
				w = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, s),
					...o(r, t)
				}),
				O = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				D = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.T(t),
					screen: a.bb(t),
					...o(t, e)
				}),
				A = e => t => {
					const s = o(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.T(t),
						screen: a.bb(t),
						...s
					}
				},
				F = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...o(t, e)
				}),
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...o(t, e)
				}),
				S = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...o(t, e),
					targetSubreddit: a.jb(t)
				}),
				L = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...o(s, e)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...o(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...o(s, e)
				}),
				N = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...o(s, e)
				}),
				z = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...o(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...o(s, e)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...o(s, e),
					...d(s)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...o(s, e),
					...d(s)
				}),
				R = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...o(s, t),
					...d(s)
				}),
				G = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...o(s, t),
					...d(s)
				})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(i.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/Send2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.660011C2.15389 0.5293 1.87278 0.479801 1.59687 0.5186C1.32096 0.557399 1.06441 0.682508 0.863944 0.876011C0.656797 1.06387 0.51403 1.31216 0.455877 1.5857C0.397725 1.85923 0.427136 2.14413 0.539944 2.40001L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6789 0.659334 22.925 0.863944 23.112C1.10992 23.347 1.43582 23.4799 1.77594 23.484C1.99315 23.4934 2.20883 23.4437 2.39994 23.34L22.6559 13.2C22.8781 13.088 23.0648 12.9165 23.1952 12.7046C23.3256 12.4927 23.3947 12.2488 23.3947 12C23.3947 11.7512 23.3256 11.5073 23.1952 11.2954C23.0648 11.0836 22.8781 10.9121 22.6559 10.8Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, i, a;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return x
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "k", (function() {
				return P
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "b", (function() {
				return R
			})), s.d(t, "e", (function() {
				return G
			})), s.d(t, "g", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				l = s.n(d)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				h = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				_ = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				g = e => e.publicAccessNetwork.hlsStreams,
				y = Object(r.a)(g, e => e.ended),
				v = Object(r.a)(g, e => e.removed),
				C = Object(r.a)(p, y, v, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = z(r, a.a.ENDED) ? a.a.ENDED : r,
							i = s.stream.vod_accessible;
						return n === r && !0 === i ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = z(r, a.a.ENDED) ? a.a.ENDED : r,
							i = s.stream.vod_accessible;
						return n === r && !1 === i ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				x = (e, t) => {
					return C(e)[Object(i.g)(t)]
				},
				j = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => l(t.listingName)(e, t), C, h, o.h, (e, t, s, r, n) => {
					const o = [];
					if (e) {
						const t = Object(i.g)(e);
						s[t] && o.push(t)
					}
					const c = o.concat(t),
						d = [...new Set(c)],
						u = new Set([...r, ...n]);
					return d.filter(e => {
						const t = s[e];
						return !u.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				E = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return j(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				k = Object(r.a)(C, E, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				w = Object(r.a)(f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				O = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, b, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						i = n.find(e => e.stream.state === a.a.IS_LIVE);
					if (i) return i.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				D = Object(n.a)(Object(r.a)(O, C, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, O, h, o.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				F = Object(r.a)(_, f, w, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				I = Object(r.a)(_, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				S = Object(n.a)(Object(r.a)(A, C, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(r.a)(F, C, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)(Object(r.a)(I, C, (e, t) => e ? t[e] : void 0)),
				T = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, C, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(A, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				N = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? x(e, s) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function z(e, t) {
				const s = {
					[a.a.NOT_STARTED]: 0,
					[a.a.PUBLISHED]: 1,
					[a.a.IS_LIVE]: 2,
					[a.a.DISCONNECTED]: 2,
					[a.a.ENDED]: 3,
					[a.a.KILLED]: 4,
					[a.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const B = Object(r.a)(A, b, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const M = Object(r.a)(A, C, m.b, (e, t, s) => {
					if (s) return U.INTRO;
					const r = e && t[e];
					if (!r) return U.UNAVAILABLE;
					const n = r.stream.state;
					return n === a.a.IS_LIVE || n === a.a.DISCONNECTED ? U.LIVE : n === a.a.ENDED && r.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				R = Object(r.a)(S, M, m.b, c.b, c.o, (e, t, s, r, n) => s ? r : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(S, M, B, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0),
				K = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				o = Object(r.a)(a, i.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/reselect/es/index.js");
			Object(r.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const n = e => !(e.chat.isInited || e.chat.unread.api.pending),
				i = e => e.chat.liveChatTooltipShowState,
				a = Object(r.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "x", (function() {
				return x
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "z", (function() {
				return O
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "n", (function() {
				return A
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "p", (function() {
				return L
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "r", (function() {
				return B
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "u", (function() {
				return M
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "b", (function() {
				return G
			})), s.d(t, "w", (function() {
				return K
			})), s.d(t, "s", (function() {
				return q
			})), s.d(t, "t", (function() {
				return V
			})), s.d(t, "g", (function() {
				return H
			})), s.d(t, "m", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/helpers/richTextJson/index.ts"),
				a = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				b = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				_ = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				y = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				v = (e, t) => {
					const s = y(e, t);
					return s && s.endsAt || null
				};
			var C;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(C || (C = {}));
			const x = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const s = v(e, t),
							r = Date.now();
						return s && r < s ? C.Subscribed : C.NotSubscribed
					}
					return C.DontKnow
				},
				j = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === l.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[o.a.Loyalty]: r.find(e => e.placement === a.a.First),
							[o.a.Achievement]: r.find(e => e.placement === a.a.Second),
							[o.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function E(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const k = (e, t, s) => {
					var n;
					if (!r.d.spBadges(e)) return g;
					return E(null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				w = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === l.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function O(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function D(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(s) && s.userId === n) return s;
				const i = e.badges.models,
					o = e.user.ownedBadges[r] || {},
					c = Object(a.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => i[e]).find(e => e && e.type === c)
			}

			function A(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return n.data.collections[s];
					if (s === o.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return g
			}

			function F(e, t) {
				const s = A(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function I(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return g
			}

			function S(e, t) {
				return A(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const L = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var P;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(P || (P = {}));
			const T = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				N = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				z = (e, t) => {
					if (!t) return {};
					const s = T.prices;
					N(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const r = y(e, t);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				B = (e, t) => {
					var s, r, n, i;
					const a = (null === (i = null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || T;
					return {
						prices: z(e, t),
						member: a.member || T.member,
						memberPlural: a.memberPlural || T.memberPlural,
						memberAlt: a.memberAlt || T.memberAlt,
						memberAltPlural: a.memberAltPlural || T.memberAltPlural,
						membership: a.membership || T.membership,
						membershipAlt: a.membershipAlt || T.membershipAlt
					}
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				M = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (!s) return;
					return e.economics.emotes[s]
				},
				K = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				q = (e, t, s) => {
					if (Object(h.f)(e)) return !!t && !!Object(_.a)(e, {
						subredditId: t
					});
					if (Object(_.o)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== s && Object(p.b)(e, {
						commentId: s
					});
					return !(!r || !Object(i.a)(r))
				},
				V = (e, t, s) => {
					if (Object(b.a)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!W(e, t) || !(!r.d.spGiphy(e) || !Z(e, s)));
					if (!Object(f.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(_.p)(e, {
							subredditId: t
						})) return !0;
					if (Z(e, s)) return !0;
					const n = r.d.spGiphy(e),
						i = K(e, t);
					return !!W(e, t) || n && i
				},
				Z = (e, t) => {
					const s = "replyToPost" !== t && Object(p.b)(e, {
						commentId: t
					});
					if (s && Object(i.b)(s)) return !0
				},
				W = (e, t) => {
					const s = r.d.spGiphy(e),
						n = K(e, t);
					return s && n
				},
				H = (e, t, s) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[s]
					}
				},
				$ = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.af9e7e8b8a8af024c461.js.map